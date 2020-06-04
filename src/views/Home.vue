<template>
  <a-row style="height: 100%;">
    <a-col :span="16"  style="height: 100%;">
      <div id="animation-box" :style="{background: styleConfig.containerBg}">
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
              transition: `left ${config.duration / 1000}s, top ${config.duration / 1000}s`
            }">
            {{item.val}}
          </div>
        </template>
      </div>
    </a-col>
    <a-col :span="8" style="height: 100%;">
       <div class="config-pane">
        <config-item label="容器间隔">
          <a-input-number v-model="config.stackGap" />
        </config-item>

        <config-item label="元素间隔">
          <a-input-number v-model="config.childGap" />
        </config-item>

        <config-item label="元素宽度">
          <a-input-number v-model="config.childWidth"  />
        </config-item>

        <config-item label="元素高度">
          <a-input-number v-model="config.childHeight" />
        </config-item>

        <config-item label="动画时间">
          <a-input-number v-model="config.duration" @change="onDurationChange" />
        </config-item>

        <config-item label="栈方向">
          <a-select v-model="orientation" style="width: 120px" @change="onOrientationChange">
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
            @click="setColor(key)">
              <span class="preview" :style="{ background: styleConfig[key] }"></span>
              <span>{{ styleOption[key] }}</span>
            </a-col>
        </a-row>
        <color-picker v-if="editingColor" v-model="color" @input="onColorChange"/>
      </div>
    </a-col>
  </a-row>
</template>
<script>
import { AnimeLoader, Stack } from './Stack.js'
import { Chrome } from 'vue-color'
export default {
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
      stackList: [],
      animeLoader: null,
      actions: [],
      orientation: 'landscape',
      color: '#FFF',
      editingColor: null,
      config: {
        duration: 500,
        childGap: 6, // 元素之间的间隔
        stackGap: 50, // 栈之间的间隔
        childWidth: 30, // 元素宽度
        childHeight: 30, // 元素高度
        isLandscape: true, // 是否是横向
        toLeft: 200, // 横向时， 到容器左边的距离
        toBottom: 50 // 竖向时， 到容器底边的距离
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
    this.initStackList()
    const stack1 = this.stackList[0]
    const stack2 = this.stackList[2]
    const cb = () => {
      stack1.addAction('push', 18)
      stack1.addAction('push', 12)
      stack1.addAction('push', 13)
      stack1.addAction('pop')
      stack1.addAction('merge', stack1, 2, 23)
      stack1.addAction('push', 19)
      stack1.addAction('exchange', stack1, stack2)
    }
    window.cb = cb
  },
  methods: {
    initStackList () {
      const box = document.getElementById('animation-box')
      Stack.animeLoader = new AnimeLoader()
      this.stackList = this.data.map((item, i) => {
        return this.getStackPos(i, item, box, this.data.length)
      })
      this.animeLoader = Stack.animeLoader
    },

    getStackPos (index, children, box, num) {
      const { childWidth, childHeight, stackGap, isLandscape, childGap, toLeft, toBottom } = this.config
      let x; let y; let sw = childWidth; let sh = childHeight
      if (isLandscape) {
        const startY = (box.clientHeight - num * childHeight - (num - 1) * stackGap) / 2
        x = toLeft
        y = startY + (childWidth + stackGap) * index
        sw += childGap
      } else {
        const startX = (box.clientWidth - num * childWidth - (num - 1) * stackGap) / 2
        x = startX + (childWidth + stackGap) * index
        y = box.clientHeight - toBottom
        sh += childGap
      }
      return new Stack(x, y, sw, sh, isLandscape, children)
    },
    onOrientationChange (val) {
      this.config.isLandscape = val === 'landscape'
    },
    setColor (key) {
      this.editingColor = key
      console.log(this.editingColor)
    },
    onColorChange (color) {
      this.styleConfig[this.editingColor] = color.hex
      console.log(this.styleConfig)
    },
    onDurationChange () {
      this.animeLoader.duration = this.config.duration
    }
  },
  watch: {
    config: {
      handler: function (val) {
        console.log('config change')
        this.initStackList()
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

  .config-pane {
    width: 100%;
    height: 100%;
    padding: 18px 20px;
    text-align: left;
    box-shadow: -2px 0 8px rgba(0,0,0,.15);
    .color-setting{
      margin-bottom: 10px;
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
</style>
