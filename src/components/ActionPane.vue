<template>
  <div class="action-pane">
    <a-row>
      <a-col
        :span="24"
        class="data-preview"
        v-for="(name, index) in reflectName"
        :key="name">
          <span
            class="preview-item"
            v-for="item in data[index].children"
            :key="item._id">
            {{ item.val }}
          </span>
          <div style="margin-top: 8px;">
            <a-input :value="reflectName[index]"
            class="action-btn action-btn__input"
            size="small" />
            <a-button size="small" class="action-btn" @click="openModal(name, 'pop', false)">Pop</a-button>
            <a-button size="small" class="action-btn" @click="openModal(name, 'push')">Push</a-button>
            <a-button size="small" class="action-btn" @click="openModal(name, 'merge')">Merge</a-button>
            <a-button size="small" class="action-btn" @click="openModal(name, 'exchange')">Exchange</a-button>
          </div>
        </a-col>
    </a-row>

    <div class="action-bar">
      <a-tooltip title="播放动画">
        <a-icon type="play-circle" v-show="stepRecord.length" @click.native="runRecord"/>
      </a-tooltip>

      <a-tooltip title="录制动作">
        <a-icon type="play-circle" v-show="!stepRecord.length && !startRecord" @click.native="toggleRecord"/>
      </a-tooltip>

      <a-tooltip title="结束录制">
        <a-icon v-show="startRecord" type="check-circle" @click.native="toggleRecord" />
      </a-tooltip>

      <a-tooltip title="再来一次">
        <a-icon type="redo" v-show="startRecord" @click.native="redo" />
      </a-tooltip>

      <a-tooltip title="撤销">
        <a-icon type="undo" v-show="startRecord" @click.native="undo" />
      </a-tooltip>

      <a-tooltip title="暂停">
        <a-icon type="pause-circle" />
      </a-tooltip>
    </div>

    <a-modal v-model="visible" title="设置" @ok="handleOk">
      <!-- Push -->
      <div v-if="activeType === 'push'">
        <config-item label="入栈值" :labelSpan="3">
          <a-input v-model="pushData" />
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
      <div v-if="activeType === 'exchange'" >
        <config-item label="交换对象"  :labelSpan="3">
          <a-select
            v-model="exchangeTo"
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
export default {
  name: 'action-pane',
  props: ['data'],
  data () {
    return {
      reflectName: [],
      visible: false,
      activeType: null,
      activeStack: null,
      pushData: null,
      exchangeFrom: null,
      exchangeTo: null,
      mergeLen: null,
      mergeData: null,
      stepRecord: [],
      startRecord: false
    }
  },
  mounted () {

  },
  methods: {
    getStack (name) {
      const index = this.reflectName.indexOf(name)
      return this.data[index]
    },

    openModal (name, type, run = true) {
      this.activeStack = name
      this.activeType = type
      run ? (this.visible = true) : this.handleOk()
    },

    addAction (name, type, args = []) {
      const stack = this.getStack(name)
      stack.addAction(type, ...args)
    },

    handleOk () {
      const args = {
        push: [this.pushData],
        exchange: [this.getStack(this.activeStack), this.getStack(this.exchangeTo)],
        merge: [this.getStack(this.activeStack), this.mergeLen, this.mergeData]
      }
      const actionArgs = [this.activeStack, this.activeType, args[this.activeType]]
      if (this.startRecord) {
        this.stepRecord.push(actionArgs)
      } else {
        this.addAction(...actionArgs)
      }
      this.visible = false
    },

    runRecord () {
      this.stepRecord.forEach(args => {
        args && this.addAction(...args)
      })
    },

    clearRecord () {
      this.startRecord = []
    },

    redo () {
      if (this.stepRecord.length) {
        this.stepRecord.push(this.stepRecord[this.stepRecord.length - 1])
      }
    },

    undo () {
      this.stepRecord.pop()
    },

    toggleRecord () {
      if (this.startRecord === false) {
        this.stepRecord = []
      }
      this.startRecord = !this.startRecord
    }
  },

  watch: {
    data (val) {
      this.reflectName = val.map((d, i) => ('stack_' + i))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.action-pane {
  .data-preview{
    margin-bottom: 16px;
    .action-btn{
      margin-right: 10px;
      &.action-btn__input{
        width: 100px;
      }
    }
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
    position: absolute;
    bottom: 14px;
    right: 36px;
    > i {
      font-size: 24px;
      margin-right: 6px;
    }
  }
}
</style>
