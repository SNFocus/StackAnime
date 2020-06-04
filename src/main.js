import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ConfigItem from '@/components/ConfigItem.vue'
import { Icon, Tooltip, Row, Col, message, Input, Select, Slider, InputNumber } from 'ant-design-vue'

Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Tooltip)
Vue.use(message)
Vue.use(Input)
Vue.use(Select)
Vue.use(Slider)
Vue.use(InputNumber)
Vue.component('config-item', ConfigItem)
Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
