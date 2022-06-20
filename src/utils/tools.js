/*
 * @Description: 工具栏
 * @Author: cdl
 * @Date: 2022-06-07 17:06:52
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 21:26:05
 */
import { nextTick } from 'vue' // vue 内置方法
import router from '@/router/index.js' // 路由
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置

/**
 * @description: 判断浏览器
 * @return {*}
 * @author: cdl
 */
export function isBrowser() {
	const userAgent = navigator.userAgent

	//判断是否Opera浏览器
	if (userAgent.indexOf('Opera') > -1) {
		return 'Opera'
	}

	//判断是否Firefox浏览器
	if (userAgent.indexOf('Firefox') > -1) {
		return 'Firefox'
	}

	//判断是否chorme浏览器
	if (userAgent.indexOf('Chrome') > -1) {
		return 'Chrome'
	}

	//判断是否Safari浏览器
	if (userAgent.indexOf('Safari') > -1) {
		return 'Safari'
	}

	//判断是否IE浏览器
	if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera) {
		return 'IE'
	}

	//判断是否Edge浏览器
	if (userAgent.indexOf('Trident') > -1) {
		return 'Edge'
	}
}

/**
 * @description: 设置浏览器标题
 * @return {*}
 * @author: cdl
 */
export function useTitle() {
	nextTick(() => {
		const store = useSystemConfig() // 实例化 pinia
		const { systemConfig } = storeToRefs(store) // 解构 store 数据
		let globalTitle = systemConfig.value.globalTitle
		let webTitle = router.currentRoute.value.meta.title
		document.title = `${webTitle} - ${globalTitle}` || globalTitle
	})
}
