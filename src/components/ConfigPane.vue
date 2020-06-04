<template>
  <div class="config-pane">
    <config-item label="容器间隔">
      <a-input-number
          v-model="config.stackGap"
          :min="30"
          @change="val => onChange(val, 'stackGap')" />
    </config-item>

    <config-item label="元素间隔">
      <a-input-number
          v-model="config.childGap"
          :min="1"
          :max="10"
          @change="val => onChange(val, 'childGap')" />
    </config-item>

    <config-item label="元素宽度">
      <a-input-number
          v-model="config.childWidth"
          :min="30"
          @change="val => onChange(val, 'childWidth')" />
    </config-item>

    <config-item label="元素高度">
      <a-input-number
          v-model="config.childHeight"
          :min="30"
          @change="val => onChange(val, 'childHeight')" />
    </config-item>

    <config-item label="动画时间">
      <a-input-number
          v-model="config.duration"
          @change="val => onChange(val, 'duration')" />
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
      <a-input-number
          v-model="config.toLeft"
          @change="val => onChange(val, 'toLeft')" />
    </config-item>

    <config-item label="距离底部" v-else>
      <a-input-number
          v-model="config.toBottom"
          @change="val => onChange(val, 'toBottom')" />
    </config-item>
    <a-row>
      <a-col
        :span="12"
        class="color-setting"
        v-for="item in styleConfig"
        :key="item.label"
        @click="setColor(item)">
          <span class="preview" :style="{ background: item.value }"></span>
          <span>{{ item.label }}</span>
        </a-col>
    </a-row>
    <color-picker
     v-if="editingColor"
     v-model="editingColor.value"
     @input="onColorChange"/>
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
      orientation: 'landscape',
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
    onChange (val, key) {
      this.emitChange('config', key, val)
    },
    onOrientationChange (val) {
      this.config.isLandscape = val === 'landscape'
      this.emitChange('config', 'isLandScape', this.config.isLandscape)
    },
    setColor (color) {
      this.editingColor = color
    },
    onColorChange (val) {
      this.emitChange('styleConfig', this.editingColor.key, val.hex)
    },
    emitChange (type, key, val) {
      this.$emit('change', type, key, val)
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
