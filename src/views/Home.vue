<template>
  <a-row style="height: 100%;overflow: auto;overflow-x: hidden;">
    <a-col :xs="24" :sm="14" :md="15" :lg="16" :xl="17" style="height: 100%;">
      <div id="animation-box" :style="{background: styleConfig.containerBg}" ref="box">
        <div class="label-actions">
            <a-tooltip title="创建文本标签">
              <a-icon class="action" type="tags" style="font-size: 18px;" @click.native="createLabel" v-show="!editLabel"/>
            </a-tooltip>

            <span v-show="editLabel">
               <a-tooltip title="内容">
                <a-input style="width: 88px;" v-if="editLabel" v-model="editLabel['content']" class="action" size="small" />
              </a-tooltip>

              <a-tooltip title="字体大小">
                <a-input style="width: 68px;" v-if="editLabel" v-model="editLabel['font-size']" class="action" size="small" />
              </a-tooltip>

              <a-tooltip title="最大宽度">
                <a-input style="width: 68px;" v-if="editLabel" v-model="editLabel['max-width']" class="action" size="small"  />
              </a-tooltip>

              <a-tooltip title="Padding">
                <a-input style="width: 68px;" v-if="editLabel" v-model="editLabel['padding']" class="action" size="small"  />
              </a-tooltip>

              <a-tooltip title="字体颜色">
                <a-icon class="action icon" type="font-colors" @click.stop.native="setEditLabelkey('color')"/>
              </a-tooltip>

              <a-tooltip title="背景色">
                <a-icon class="action icon" type="bg-colors" @click.stop.native="setEditLabelkey('background')"/>
              </a-tooltip>

              <a-tooltip title="隐藏">
                <a-icon class="action icon" type="close-circle" @click.native="editLabel = null"/>
              </a-tooltip>
              <color-picker
                v-model="labelColor"
                class="label-color-picker"
                v-show="showLabelPicker"
                @input="onLabelPickerChange"/>
            </span>
          </div>
        <div
          v-draglabel
          v-for="label in labels"
          :key="label.id"
          class="label drag-label"
          :style="label"
          :class="{editing: editLabel && editLabel.id === label.id}">
          <span>{{label.content}}</span>
          <a-icon
          style="padding: 0 6px 4px;"
          type="setting"
          class="setting"
          title="设置"
           @mousedown.stop=""
          @click.stop="editLabel = label" />
        </div>
        <template v-if="animeLoader">
          <div
            v-for="item in animeLoader.animations"
            :key="item._id"
            class="anime-item"
            :class="{animate: item.animate}"
            :style="{
              left: item.x + 'px', top: item.y + 'px',
              background: item.animate ? styleConfig.activeChildBg : styleConfig.normalChildBg,
              color: item.animate ? styleConfig.activeChildColor : styleConfig.normalChildColor,
              width: config.childWidth + 'px', height: config.childHeight + 'px',
              transition: `background .5s, left ${config.duration / 1000}s, top ${config.duration / 1000}s`
            }">
            {{item.val}}
          </div>
        </template>
      </div>
    </a-col>
    <a-col :xs="24" :sm="10" :md="9" :lg="8" :xl="7" style="height: 100%;">
      <div  class="pane-box">
        <div class="label" @click="showConfigPane = !showConfigPane">
          <span class="label__content">
            {{ showConfigPane ? '设置动画' : '界面配置'}}
          </span>
        </div>
        <action-pane
          ref='action'
          class="pane"
          :class="[showConfigPane?'hide':'show']"
          :source="data"
          :data="stackList"
          :reload="reloadStack"
          @change="setData" />
        <div
          ref='config'
          class="config-pane pane"
          :class="[showConfigPane?'show':'hide']" >
          <config-item label="容器间隔">
            <a-input-number v-model.lazy="config.stackGap" />
          </config-item>

          <config-item label="元素间隔">
            <a-input-number v-model.lazy="config.childGap" />
          </config-item>

          <config-item label="元素宽度">
            <a-input-number v-model.lazy="config.childWidth"  />
          </config-item>

          <config-item label="元素高度">
            <a-input-number v-model.lazy="config.childHeight" />
          </config-item>

          <config-item label="栈方向">
            <a-select
            v-model="orientation"
            style="width: 100%;max-width: 200px;"
            @change="val => config.isLandscape = val === 'landscape'">
              <a-select-option value="landscape">
                横向
              </a-select-option>
              <a-select-option value="portrait">
                纵向
              </a-select-option>
            </a-select>
          </config-item>

          <config-item label="距离左边" v-if="config.isLandscape">
            <a-input-number v-model="config.toLeft"  />
          </config-item>

          <config-item label="距离底部" v-else>
            <a-input-number v-model="config.toBottom" />
          </config-item>

          <config-item label="动画时间">
            <a-input-number v-model.lazy="config.duration" @change="onDurationChange" />
          </config-item>

          <config-item label="动画结束时">
            <a-select
              v-model="maintainActiveState"
              style="width: 100%;max-width: 200px;"
              @change="onMaintainStateChange">
              <a-select-option value="maintain">
                保留元素激活状态
              </a-select-option>
              <a-select-option value="restore">
                恢复元素普通状态
              </a-select-option>
            </a-select>
          </config-item>

          <a-row>
            <a-col
              :span="8"
              class="color-setting"
              v-for="key in Object.keys(styleOption)"
              :key="key"
              @click="setColor($event, key)">
                <span class="preview" :style="{ background: styleConfig[key] }"></span>
                <span>{{ styleOption[key] }}</span>
              </a-col>
          </a-row>
          <color-picker
          v-model="color"
          class="color-picker"
          :style="pickerStyle"
          @input="onColorChange"/>
        </div>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { AnimeLoader, Stack } from './Stack.js'
import { Chrome } from 'vue-color'
import { debounce, throttle } from '@/assets/utils.js'
import DragDirective from '@/directives/drag.js'
import ActionPane from '@/components/ActionPane.vue'
export default {
  components: {
    'color-picker': Chrome,
    [ActionPane.name]: ActionPane
  },
  data () {
    return {
      labels: [],
      editLabel: null,
      editLabelKey: null,
      data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      showConfigPane: false,
      stackList: [],
      animeLoader: null,
      actions: [],
      orientation: 'landscape',
      labelColor: '#FFF',
      color: '#FFF',
      editingColor: null,
      pickerStyle: {
        top: '66%',
        left: '100%'
      },
      showLabelPicker: false,
      config: {
        duration: 1000,
        childGap: 16, // 元素之间的间隔
        stackGap: 50, // 栈之间的间隔
        childWidth: 50, // 元素宽度
        childHeight: 50, // 元素高度
        isLandscape: true, // 是否是横向
        toLeft: 200, // 横向时， 到容器左边的距离
        toBottom: 300 // 竖向时， 到容器底边的距离
      },
      maintainActiveState: 'maintain',
      styleOption: {
        containerBg: '画布背景',
        activeChildBg: '活动背景',
        activeChildColor: '活动字色',
        normalChildBg: '非活动背景',
        normalChildColor: '非活动字色'
      },
      styleConfig: {
        containerBg: '#8bc34a',
        activeChildBg: '#FF9800',
        activeChildColor: '#FFF',
        normalChildBg: '#1c9030',
        normalChildColor: '#FFF'
      }
    }
  },

  created () {
    this.load = debounce(this.loadStackList, 500)
    this.reloadStack = this.load.bind(this, 'data')
    window.reload = this.reloadStack
  },

  directives: { draglabel: DragDirective },

  mounted () {
    document.body.addEventListener('click', (ev) => {
      const picker = document.querySelector('.color-picker')
      if (!picker) return
      if (picker === ev.target || picker.contains(ev.target)) return
      this.editingColor = ''
      this.pickerStyle.top = '66%'
      this.pickerStyle.left = '100%'
    })
    document.body.addEventListener('click', (ev) => {
      const picker = document.querySelector('.label-color-picker')
      if (!picker) return
      if (picker === ev.target || picker.contains(ev.target)) return
      this.showLabelPicker = false
    })
    this.load('init')
  },
  methods: {

    getLabelStyle (label) {
      return label.filter(t => !['id', 'content'].includes)
    },
    getStackProp (index, box, num) {
      const { childWidth, childHeight, stackGap, isLandscape, childGap, toLeft, toBottom } = this.config
      const getStartPos = (p, c) => ((p - num * c - (num - 1) * stackGap) / 2)
      let x
      let y
      const sw = childWidth + childGap
      const sh = childHeight + childGap
      if (isLandscape) {
        const startY = getStartPos(box.clientHeight, childHeight)
        y = startY + (childHeight + stackGap) * index
        x = toLeft
      } else {
        const startX = getStartPos(box.clientWidth, childWidth)
        x = startX + (childWidth + stackGap) * index
        y = box.clientHeight - toBottom
      }
      return { x, y, sw, sh, isLandscape }
    },

    initLoader () {
      if (!this.animeLoader) {
        Stack.animeLoader = new AnimeLoader()
        this.animeLoader = Stack.animeLoader
      }
      this.animeLoader.clearTask()
    },

    refreshStacks (initChildren) {
      const box = this.$refs.box
      const stackNum = this.data.length
      initChildren && this.animeLoader.clearItem()

      this.stackList.forEach((s, i) => {
        const { x, y, sw, sh, isLandscape } = this.getStackProp(i, box, stackNum)
        const child = initChildren ? this.data[i] : undefined
        s.refresh(x, y, sw, sh, isLandscape, child)
      })
    },

    initStack () {
      const box = this.$refs.box
      const stackNum = this.data.length
      this.animeLoader.clearItem()
      this.stackList = this.data.map((children, i) => {
        const { x, y, sw, sh, isLandscape } = this.getStackProp(i, box, stackNum)
        return new Stack(x, y, sw, sh, isLandscape, children)
      })
    },

    loadStackList (type) {
      const FOR = {
        init: this.initStack.bind(this),
        style: this.refreshStacks.bind(this, false), // 只重置样式
        data: this.refreshStacks.bind(this, true) // 需要重置children数据
      }
      this.initLoader()
      FOR[type] && FOR[type]()
    },

    setColor (ev, key) {
      setTimeout(() => {
        this.showPicker(ev)
        this.editingColor = key
      }, 0)
    },

    showPicker (ev) {
      const { pageX, pageY } = ev
      this.pickerStyle.top = (pageY - 10) + 'px'
      this.pickerStyle.left = (pageX + 10) + 'px'
    },

    setEditLabelkey (key) {
      if (this.editLabel) {
        this.editLabelKey = key
        this.showLabelPicker = true
        this.labelColor = this.editLabel[this.editLabelKey]
      }
    },

    onColorChange (color) {
      if (!this.updateStyle) {
        this.updateStyle = throttle(function (color) {
          this.styleConfig[this.editingColor] = color.hex
        }, 800)
      }
      this.updateStyle(color)
    },

    onLabelPickerChange (color) {
      if (!this.updateLabelStyle) {
        this.updateLabelStyle = throttle(function (color) {
          const target = this.labels.find(t => t.id === this.editLabel.id)
          this.$set(target, this.editLabelKey, color.hex)
          this.$forceUpdate()
        }, 800)
      }
      this.updateLabelStyle(color)
    },

    onDurationChange () {
      this.animeLoader.duration = this.config.duration
    },

    onMaintainStateChange () {
      Stack.maintainState = this.maintainActiveState === 'maintain'
    },

    setData (data) {
      this.data = data
      this.initStack()
    },

    createLabel () {
      this.labels.push({
        id: new Date().getTime(),
        background: 'transparent',
        padding: '8px 10x',
        color: '#333333',
        'font-size': '14px',
        'max-width': 'auto',
        content: '这里是Label内容'
      })
    }
  },
  watch: {
    config: {
      handler: function (val) {
        this.load('style')
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
#animation-box{
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
  position: relative;
  transition: background 1s;
  .drag-label{
    position: absolute;
    transition: left .1s , top .1s;
    padding: 6px 12px;
    &.dragging{
      user-select: none;
      border: 1px solid #f5f5f5;
      background: #FFF;
    }
  }

  .anime-item{
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    &.animate{
      background: #ff9800;
      color: white;
    }
  }

}
.pane-box{
    width: 100%;
    height: 100%;
    position: relative;
    background: #FFF;

  .label{
    position: absolute;
    left: 0;
    width: 48px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 100%;
    z-index: 2;
    cursor: pointer;
    padding-bottom: 1rem;
    &:hover{
      z-index: 10;
      ~ .pane.show{
        left: 48px;
      }
      .label__content{
        margin-left: 0;
        opacity: 1;
      }
    }
    .label__content{
      color: #333;
      opacity: 0;
      display: inline-block;
      width: 1rem;
      margin-left: -4.5rem;
      transition: margin-left .5s, opacity .5s;
    }
  }
  .pane{
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    left: 0;
    padding: 18px 26px;
    text-align: left;
    box-shadow: -2px 0 8px rgba(0,0,0,.15), 0 0 6px rgba(0, 0, 0, 0.15);
    transition: left .5s, opacity .5s, z-index .5s;
    overflow-y: auto;
    overflow-x: hidden;
    opacity: 1;
    z-index: 8;
    &.show{
      left: 26px;
    }
    &.hide {
      padding-left: 48px;
      cursor: pointer;
      opacity: 0;
      z-index: -1;
    }
  }
}

.color-picker{
  position: fixed;
  opacity: .4;
  transition: top .5s, left .5s, opacity .5s;
  &:hover {
    opacity: 1  ;
  }
}

.config-pane {
  ::v-deep .ant-input-number{
    width: 100%;
    max-width: 200px;
  }

  .color-setting {
    margin-bottom: 20px;
    .preview{
      padding: 10px;
      display: inline-block;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      margin-right: 6px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}

.label-color-picker {
  position: absolute;
  top: 40px;
  z-index: 999;
  right: 14px;
}
.drag-label.label {
  &:hover > .setting {
    color: white;
    display: block;
  }
  &.editing{
    border: 1px dashed white;
  }
  .setting {
    position: absolute;
    right: -1.5rem;
    top: 0;
    display: none;
    font-size: 16px;
    cursor: pointer;
  }
  font-size: 16px;
  left: 20px;
  top: 20px;
}

.label-actions{
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 10px;
   .action{
    margin-right: 6px;
    cursor: pointer;
    &.icon{
      font-size: 18px;
    }
    &:hover{
      color: #d6d6d6;
    }
  }
}
@keyframes hide {
  0%{
    left: -26px;
    z-index: 9;
  }
  40%{
    left: -100%;
    z-index: 9;
  }
  100%{
    left: 0;
    z-index: 1;
  }
}
</style>
