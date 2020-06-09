import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ConfigItem from '@/components/ConfigItem.vue'
import { Button, Icon, Tooltip, Row, Col, message, Input, Select, Modal, InputNumber, Radio, Divider } from 'ant-design-vue'
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Tooltip)
Vue.use(Input)
Vue.use(Select)
Vue.use(Modal)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(Divider)
Vue.prototype.$message = message
Vue.component('config-item', ConfigItem)
Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
