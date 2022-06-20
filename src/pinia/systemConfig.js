/*
 * @Description: 系统配置
 * @Author: cdl
 * @Date: 2022-06-08 16:55:52
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 15:21:15
 * 修改配置时：
 * 1、需要每次都清理 `window.localStorage` 浏览器永久缓存
 * 2、或者点击布局配置最底部 `一键恢复默认` 按钮即可看到效果
 */
import { defineStore } from 'pinia'

export const useSystemConfig = defineStore('systemConfig', {
	// 推荐使用 完整类型推断的箭头函数
	state: () => ({
		systemConfig: {
			/**
			 * @description 是否开启系统配置
			 * @type {boolean} true | false
			 */
			isSystemConfig: true,

			/**
			 * @description 网站主标题（菜单导航、浏览器当前网页标题）
			 */
			globalTitle: '管理系统',

			/**
			 * @description 默认 element primary 主题颜色
			 */
			primary: '#c01330',

			/**
			 * @description 主页面切换动画
			 * @type {string} 可选值"<slide-right|slide-left|opacitys>"，默认 slide-right
			 */
			animation: 'slide-right',

			/**
			 * @description 布局切换
			 * @type {string} 可选值"<defaults|classic|transverse|columns>"，默认 defaults
			 */
			layout: 'classic',
		},
	}),
	actions: {
		// 修改系统变量
		setSystemConfig(data) {
			this.systemConfig = data
		},
	},
})
