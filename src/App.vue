<!--
 * @Description: 入口页面
 * @Author: cdl
 * @Date: 2022-06-06 05:10:48
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 15:23:32
-->
<template>
	<el-config-provider :locale="zhCn">
		<!-- 路由出口 -->
		<router-view />

		<!-- 系统配置 -->
		<SystemConfig />

		<!-- 浏览图提示组件 -->
		<BrowserPrompt />
	</el-config-provider>
</template>

<script setup name="app">
import SystemConfig from '@/components/SystemConfig/drawer.vue' // 系统配置
import BrowserPrompt from '@/components/BrowserPrompt/index.vue' // 浏览图提示组件
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 中文
import { Local } from '@/utils/storage.js' // 浏览器存储
import { isBrowser, useTitle } from '@/utils/tools.js' // 工具方法
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置
const store = useSystemConfig() // 实例化 pinia
const { systemConfig } = storeToRefs(store) // 解构 store 数据
const { proxy } = getCurrentInstance() // vue 实例
const route = useRoute() // 路由参数

// 监听路由的变化，设置网站标题
watch(
	() => route.path,
	() => {
		useTitle()
	}
)

/**
 * @description: 用户登录
 * @return {*}
 * @author: cdl
 */
const onLogin = () => {
	let params = {
		loginName: 'admin_exexm',
		password: '123Qwe',
	}
	login(params).then((res) => {
		Local.set('token', res.USER_TOKEN)
	})
}

const onGetDictTreeAll = () => {
	let params = {
		DICT_ID: 'PARTY_ORG_INFO_ALL',
	}
	getDictTreeAll(params).then((res) => {
		console.log(res)
	})
}

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	// DOM 更新之后
	nextTick(() => {
		if (isBrowser() === 'IE') {
			proxy.mittBus.emit('openBrowserPrompt')
		}

		// 获取缓存中的布局配置
		if (Local.get('systemConfig')) {
			store.setSystemConfig(Local.get('systemConfig'))
			document.documentElement.style.cssText = Local.get('systemConfigStyle')
		}
	})
})
</script>

<style lang="scss" scoped></style>
