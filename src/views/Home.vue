<template>
  <a-row style="height: 100%;">
    <a-col :span="16"  style="height: 100%;">
      <div id="animation-box">
        <template v-if="animeLoader">
          <div
            v-for="item in animeLoader.animations"
            :key="item._id"
            class="anime-item"
            :class="{animate: item.animate}"
            :style="`left: ${item.x}px; top: ${item.y}px`">
            {{item.val}}
          </div>
        </template>
      </div>
    </a-col>
    <a-col :span="8" style="height: 100%;">
        <config-pane />
    </a-col>
  </a-row>
</template>
<script>
import { AnimeLoader, Stack } from './Stack.js'
import ConfPane from '@/components/ConfigPane.vue'
export default {
  components: {
    [ConfPane.name]: ConfPane
  },
  data () {
    return {
      data: [[1, 2, 3], [4, 5, 6]],
      stackList: [],
      animeLoader: null,
      actions: [],
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
    const stack2 = this.stackList[1]
    stack1.addAction('push', 18)
    stack1.addAction('push', 12)
    stack1.addAction('push', 13)
    stack1.addAction('pop')
    stack1.addAction('merge', stack1, 2, 23)
    stack1.addAction('push', 19)
    stack1.addAction('exchange', stack1, stack2)
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
    }
  },
  watch: {
    config: {
      handler: function (val) {
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
    transition: left .5s, top .5s;
    background: #fff;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    &.animate{
      background: #ff9800;
      color: white;
    }
  }
}
</style>
