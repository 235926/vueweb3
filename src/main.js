/*
 * @Description: 入口文件 加载组件 初始化等
 * @Author: cdl
 * @Date: 2022-06-06 05:10:48
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 16:50:42
 */
import { createApp, h } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 重置样式表
import 'normalize.css/normalize.css'

// 引入 自定义的scss文件
import '@/assets/scss/index.scss'

// 全局使用 ElementPlus 自带的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (let [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

// 引入进度条插件
import '@/plugin/nprogress.js'

// 引入 svg 图标注册脚本
import 'virtual:svg-icons-register'

// 引入路由
import router from '@/router/index.js'

// 页面共享状态
import pinia from '@/pinia/index.js'

// 同级组件传值
import mitt from 'mitt'

// 引入自定义指令
import { loadDirectives } from '@/directive/index.js'
loadDirectives(app)

// 注册全局组件
import * as Components from '@/plugin/global-components.js'
Object.entries(Components).forEach(([key, component]) => {
	app.component(key, component)
})

// 注册 element-plus-tree-line 插件为全局组件
import { getElementPlusTreeLine } from 'element-plus-tree-line' // tree 结构线
import 'element-plus-tree-line/dist/style.css' // css
const ElementPlusTreeLine = getElementPlusTreeLine(h) // 实例化 element-plus-tree-line
app.component(ElementPlusTreeLine.name, ElementPlusTreeLine)

app.use(router).use(pinia)
app.mount('#app')

// 同级组件传值
app.config.globalProperties.mittBus = mitt()
