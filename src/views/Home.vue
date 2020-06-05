<template>
  <a-row style="height: 100%;">
    <a-col :span="16"  style="height: 100%;">
      <div id="animation-box" :style="{background: styleConfig.containerBg}" ref="box">
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
    <a-col :span="8" style="height: 100%;">
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
          :data="stackList" />
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

          <config-item label="动画时间">
            <a-input-number v-model.lazy="config.duration" @change="onDurationChange" />
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
          <a-row>
            <a-col
              :span="12"
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
import ActionPane from '@/components/ActionPane.vue'
export default {
  components: {
    'color-picker': Chrome,
    [ActionPane.name]: ActionPane
  },
  data () {
    return {
      data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      showConfigPane: false,
      stackList: [],
      animeLoader: null,
      actions: [],
      orientation: 'landscape',
      color: '#FFF',
      editingColor: null,
      pickerStyle: {
        top: '66%',
        left: '100%'
      },
      config: {
        duration: 500,
        childGap: 16, // 元素之间的间隔
        stackGap: 50, // 栈之间的间隔
        childWidth: 50, // 元素宽度
        childHeight: 50, // 元素高度
        isLandscape: true, // 是否是横向
        toLeft: 400, // 横向时， 到容器左边的距离
        toBottom: 300 // 竖向时， 到容器底边的距离
      },
      styleOption: {
        containerBg: '画布背景',
        activeChildBg: '活动背景',
        activeChildColor: '活动字色',
        normalChildBg: '非活动背景',
        normalChildColor: '非活动字色'
      },
      styleConfig: {
        containerBg: '#E5E5E5',
        activeChildBg: '#FF9800',
        activeChildColor: '#FFF',
        normalChildBg: '#FFF',
        normalChildColor: '#333'
      }
    }
  },

  mounted () {
    document.body.addEventListener('click', (ev) => {
      const picker = document.querySelector('.color-picker')
      if (!picker) return
      if (picker === ev.target || picker.contains(ev.target)) return
      this.editingColor = ''
      this.pickerStyle.top = '66%'
      this.pickerStyle.left = '100%'
    })
    this.init = debounce(this.loadStackList, 500)
    this.init()
    const cb = () => {
      const stack1 = this.stackList[0]
      const stack2 = this.stackList[2]
      // stack1.addAction('push', 18)
      // stack1.addAction('push', 12)
      // stack1.addAction('push', 13)
      // stack1.addAction('pop')
      // stack1.addAction('merge', stack1, 2, 23)
      // stack1.addAction('push', 19)
      stack1.addAction('exchange', stack1, stack2)
    }
    window.cb = cb
  },
  methods: {

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

    refreshStacks () {
      const box = this.$refs.box
      const stackNum = this.data.length
      if (this.stackList && this.stackList.length) {
        this.stackList.forEach((s, i) => {
          const { x, y, sw, sh, isLandscape } = this.getStackProp(i, box, stackNum)
          s.refresh(x, y, sw, sh, isLandscape)
        })
      } else {
        this.stackList = this.data.map((children, i) => {
          const { x, y, sw, sh, isLandscape } = this.getStackProp(i, box, stackNum)
          return new Stack(x, y, sw, sh, isLandscape, children)
        })
      }
    },

    loadStackList () {
      this.initLoader()
      this.refreshStacks()
    },

    setColor (ev, key) {
      setTimeout(() => {
        const { pageX, pageY } = ev
        this.pickerStyle.top = (pageY - 10) + 'px'
        this.pickerStyle.left = (pageX + 10) + 'px'
        this.editingColor = key
      }, 0)
    },

    onColorChange (color) {
      if (!this.updateStyle) {
        this.updateStyle = throttle(function (color) {
          this.styleConfig[this.editingColor] = color.hex
        }, 800)
      }
      this.updateStyle(color)
    },

    onDurationChange () {
      this.animeLoader.duration = this.config.duration
    }
  },
  watch: {
    config: {
      handler: function (val) {
        this.init()
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
    background: #f8f8f8;
    box-shadow: -2px 0 8px rgba(0,0,0,.15), 0 0 6px rgba(0, 0, 0, 0.15);
    transition: left .5s;
    overflow: hidden;
    &.show{
      left: 26px;
      z-index: 8;
    }
    &.hide {
      padding-left: 48px;
      cursor: pointer;
      animation-name: hide;
      animation-duration: 2.5s;
      animation-fill-mode: forwards;

    }
  }
}

.config-pane {
  ::v-deep .ant-input-number{
    width: 100%;
    max-width: 200px;
  }
  .color-picker{
    position: fixed;
    opacity: .4;
    transition: top .5s, left .5s, opacity .5s;
    &:hover {
      opacity: 1  ;
    }
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
