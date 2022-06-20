/*
 * @Description: pinia
 * @Author: cdl
 * @Date: 2022-06-06 05:46:12
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 15:20:35
 */
// https://pinia.vuejs.org/
import { createPinia } from 'pinia' // pinia
import piniaPluginPersist from 'pinia-plugin-persist' // pinia 存储持久化插件

// 创建 pinia
const pinia = createPinia()

// 使用 piniaPluginPersist 插件
// pinia.use(piniaPluginPersist)

// 导出
export default pinia
