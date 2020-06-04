<template>
  <div class="config-pane">
    <config-item label="容器间隔">
      <a-input-number
          v-model="config.stackGap"
          :min="30"
          @change="onChange" />
    </config-item>

    <config-item label="元素间隔">
      <a-input-number
          v-model="config.childGap"
          :min="1"
          :max="10"
          @change="onChange" />
    </config-item>

    <config-item label="元素宽度">
      <a-input-number
          v-model="config.childWidth"
          :min="30"
          @change="onChange" />
    </config-item>

    <config-item label="元素高度">
      <a-input-number
          v-model="config.childHeight"
          :min="30"
          @change="onChange" />
    </config-item>

    <config-item label="动画时间">
      <a-input-number
          v-model="config.duration"
          @change="onChange" />
    </config-item>

     <config-item label="动画时间">
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
      <a-input-number
          v-model="config.toLeft"
          @change="onChange" />
    </config-item>

    <config-item label="距离底部" v-else>
      <a-input-number
          v-model="config.toBottom"
          @change="onChange" />
    </config-item>

    <config-item label="样式设置">
      <div
      v-for="item in styleConfig"
      :key="item.label"
      :style="{ background: item.value }">
      </div>
    </config-item>

    <color-picker v-model="color" v-show="showColorPicker" />
  </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
  name: 'config-pane',
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      color: '#FF9800',
      orientation: '',
      showColorPicker: false,
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
      styleConfig: [
        {
          label: '画布背景',
          key: 'containerBg',
          value: '#E5E5E5'
        },
        {
          label: '活动背景',
          key: 'activeChildBg',
          value: '#FF9800'
        },
        {
          label: '活动字色',
          key: 'activeChildColor',
          value: '#FFF'
        },
        {
          label: '非活动背景',
          key: 'normalChildBg',
          value: '#FFF'
        },
        {
          label: '非活动字色',
          key: 'normalChildColor',
          value: '#333'
        }
      ]
    }
  },
  methods: {
    onChange () {
      console.log('config change')
    },
    onOrientationChange (val) {
      console.log(val)
      this.config.isLandscape = val === 'landscape'
      this.onChange(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.config-pane {
  width: 100%;
  height: 100%;
  padding: 18px 20px;
  text-align: left;
  box-shadow: -2px 0 8px rgba(0,0,0,.15);
}
</style>
