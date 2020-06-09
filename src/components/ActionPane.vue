<template>
  <div class="action-pane" :class="{recording: startRecord}">
    <config-item label="数据源" :labelSpan="4" :contentSpan="18" style="margin-bottom: 0;">
      <a-button @click="toggleEditing" size="small" style="margin-bottom: 10px;">
        {{editing ? '保存' : '编辑数据源'}}
      </a-button>
    </config-item>
    <div style="width: 100%;overflow: hidden;transition: height .6s;" :style="{height: editing ? '86vh' : '0'}">
      <a-textarea style="height: 100%;" v-model="sourceStr" ref="sourceEditor" />
    </div>
    <a-divider orientation="left">
      操作区
    </a-divider>
    <a-row>
      <a-col :span="24">

        <div class="stack-actions">
              <a-button size="small" class="action-btn" @click="openModal('unshift')">Unshift</a-button>
              <a-button size="small" class="action-btn" @click="openModal('pop', false)">Pop</a-button>
              <a-button size="small" class="action-btn" @click="openModal('popTo')">PopTo</a-button>
              <a-button size="small" class="action-btn" @click="openModal('push')">Push</a-button>
              <a-button size="small" class="action-btn" @click="openModal('merge')">Merge</a-button>
              <a-button size="small" class="action-btn" @click="openModal('exchange')">Exchange</a-button>
            </div>
      </a-col>
      <a-radio-group v-model="activeStack">
    <a-radio
    v-for="(name, index) in reflectName"
    :style="{
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      }"
      class="data-preview"
      :key="name"
      :value="name">
      <span style="margin-right: 6px;">{{reflectName[index]}}</span>
      <span
              class="preview-item"
              v-for="item in data[index].children"
              :key="item._id">
              {{ item.val }}
            </span>
    </a-radio>
  </a-radio-group>

    </a-row>
    <a-divider orientation="left" v-if="stepRecord.length">
      动画记录
    </a-divider>
    <div>
      <div v-for="(step, index) in stepRecord" :key="index" class="steps">
        <!-- <span class="index">{{ index }}</span> -->
        <span class="name">{{ step[0] + '.' + step[1] }}</span>
        <a-tooltip title="删除">
          <a-icon type="delete" @click.native="stepRecord.splice(index, 1)"/>&nbsp;&nbsp;
        </a-tooltip>
        <a-tooltip title="复制">
          <a-icon type="redo" @click.native="stepRecord.splice(index, 0,stepRecord[index])"/>&nbsp;&nbsp;
        </a-tooltip>
        <a-tooltip title="执行动作">
          <a-icon type="play-circle" @click.native="runRecord(index)"/>&nbsp;&nbsp;
        </a-tooltip>
      </div>
    </div>

    <div class="action-bar">
      <a-tooltip title="重置元素数据">
        <a-icon type="undo" style="float: left;" @click.native="reload"/>
      </a-tooltip>

      <a-tooltip title="录制动作">
        <a-icon type="play-circle" v-show="!startRecord && stepRecord.length === 0" @click.native="toggleRecord"/>
      </a-tooltip>

      <a-tooltip title="结束录制">
        <a-icon type="check-circle" v-show="startRecord" @click.native="toggleRecord"/>
      </a-tooltip>

      <a-tooltip title="播放动画">
        <a-icon type="play-circle" v-show="stepRecord.length" @click.native="runRecord"/>
      </a-tooltip>

      <a-tooltip title="重置记录">
        <a-icon type="delete" v-show="stepRecord.length" @click.native="stepRecord = []"/>
      </a-tooltip>

      <!-- <a-tooltip title="暂停">
        <a-icon type="pause-circle" />
      </a-tooltip> -->
    </div>

    <a-modal v-model="visible" title="设置" @ok="handleOk">
      <!-- Push -->
      <div v-if="activeType === 'push'">
        <config-item label="入栈值" :labelSpan="3">
          <a-input v-model="pushData" />
        </config-item>
      </div>
      <div v-if="activeType === 'unshift'">
        <config-item label="入队值" :labelSpan="3">
          <a-input v-model="unshiftData" />
        </config-item>
      </div>
      <div v-if="activeType === 'merge'">
        <config-item label="合并数量"   :labelSpan="3">
          <a-input-number :min="2" v-model="mergeLen" />
        </config-item>
        <config-item label="合并结果"  :labelSpan="3">
          <a-input v-model="mergeData" />
        </config-item>
      </div>
      <div v-if="['exchange', 'popTo'].includes(activeType)" >
        <config-item label="替换对象"  :labelSpan="3">
          <a-select
            v-model="toStack"
            style="width: 100%;max-width: 200px;">
              <a-select-option
                v-for="(name, index) in reflectName"
                :key="index"
                :value="name"
                :disabled="name == activeStack">
                {{name}}
              </a-select-option>
            </a-select>
        </config-item>
      </div>
    </a-modal>
  </div>
</template>

<script>
const sourceFormat = source => {
  const content = source.map(t => {
    return `[${t.join(', ')}]`
  }).join(',\n  ')
  return `[
  ${content}
]`
}
export default {
  name: 'action-pane',
  props: ['data', 'source', 'reload'],
  data () {
    return {
      sourceStr: sourceFormat(this.source),
      reflectName: [],
      visible: false,
      activeType: null,
      activeStack: null,
      pushData: null,
      exchangeFrom: null,
      toStack: null,
      mergeLen: null,
      mergeData: null,
      stepRecord: [],
      startRecord: false,
      editing: false,
      unshiftData: null,
      editStack: ''
    }
  },
  methods: {
    getStack (name) {
      const index = this.reflectName.indexOf(name)
      return this.data[index]
    },

    openModal (type, run = true) {
      if (this.activeStack) {
        this.activeType = type
        run ? (this.visible = true) : this.handleOk()
      } else {
        this.$message.success('请先选择目标数据')
      }
    },

    addAction (name, type, args = []) {
      const stack = this.getStack(name)
      stack.addAction(type, ...args)
    },

    handleOk () {
      const args = {
        unshift: [this.unshiftData],
        push: [this.pushData],
        exchange: [this.getStack(this.toStack)],
        merge: [this.mergeLen, this.mergeData],
        popTo: [this.getStack(this.toStack)]
      }
      const actionArgs = [this.activeStack, this.activeType, args[this.activeType]]
      if (this.startRecord) {
        this.stepRecord.push(actionArgs)
      } else {
        this.addAction(...actionArgs)
      }
      this.visible = false
    },

    runRecord (index) {
      this.stepRecord.forEach((args, i) => {
        if (typeof index === 'number' && i > index) return
        args && this.addAction(...args)
      })
    },

    toggleRecord () {
      this.startRecord = !this.startRecord
    },

    toggleEditing () {
      this.editing = !this.editing
      if (this.editing) {
        this.sourceStr = sourceFormat(this.source)
      }
    }
  },
  mounted () {
    const vm = this
    this.$refs.sourceEditor.$el.onblur = function () {
      try {
        const source = JSON.parse(vm.sourceStr)
        vm.$emit('change', source)
        this.editing = false
      } catch (error) { }
    }
  },

  watch: {
    data (val) {
      this.reflectName = val.map((d, i) => ('stack_' + i))
      this.activeStack = this.reflectName[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.action-pane {
  padding-bottom: 50px;
  &.recording{
    &::after{
      content: '';
      width: 15px;
      height: 15px;
      position: fixed;
      right: 20px;
      top: 10px;
      background: red;
      border-radius: 50%;
      animation: record 2s infinite;
    }
  }
     .stack-actions{
      transition: height .5s;
      overflow: hidden;
      .action-btn{
        margin-right: 10px;
        margin-bottom: 10px;
        &.action-btn__input{
          width: 80px;
        }
      }
    }

  .data-preview{
    margin-bottom: 12px;

    .preview-item{
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background:yellowgreen;
      margin-right: 6px;
      color: #333;
    }
  }
  .action-bar{
    position: fixed;
    width: 12px;
    display: flex;
    bottom: 10px;
    right: 24px;
    flex-direction: column;
    > i {
      font-size: 24px;
      margin:8px 0px;
      cursor: pointer;
    }
  }
  .steps{
    padding: 0 4px;
    margin-bottom: 6px;
    border-left: 2px solid transparent;
    &:hover{
      border-left: 2px solid #969696;
      background: #e5e5e5;
    }
    > .name {
      display: inline-block;
      width: 10rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 12px;
      vertical-align: middle;
    }
    > i{
      margin-right: 12px;
      cursor: pointer;
    }
  }
}

@keyframes record {
  from {opacity: 1;}
  to {opacity: 0;}
}
</style>
