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
                v-show="name !== activeStack"
                :value="name">
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
      mergeData: null
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

    addAction (args = []) {
      const stack = this.getStack(this.activeStack)
      stack.addAction(this.activeType, ...args)
    },

    handleOk () {
      const args = {
        push: [this.pushData],
        exchange: [this.activeStack, this.exchangeTo],
        merge: [this.getStack(this.activeStack), this.mergeLen, this.mergeData]
      }
      this.addAction(args[this.activeType])
      this.visible = false
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
}
</style>
