<!--
 * @Description: 头部页面
 * @Author: cdl
 * @Date: 2022-06-08 16:52:05
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 15:29:23
-->
<template>
	<el-header class="layout-header">
		<!-- 内容 -->
		<div class="header-container flex">
			<div class="left flex-center ml15">
				<el-image :src="loginImg" fit="fill" />
				<span class="title ml15">企业股权管理信息系统</span>
			</div>
			<div class="right flex-center mr30">
				<Settings v-if="systemConfig.isSystemConfig" />
				<span class="title mr15">系统管理员</span>
				<el-avatar :size="40" :src="userAvatar" />
			</div>
		</div>

		<!-- 边框 -->
		<div class="border"></div
	></el-header>
</template>

<script setup name="layoutHeader">
import Settings from './settings.vue' // 系统配置
import loginImg from '@/assets/images/logo.png' // login 图片
import userAvatar from '@/assets/images/userAvatar.png' // 用户默认头像
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置
const store = useSystemConfig() // 实例化 pinia
const { systemConfig } = storeToRefs(store) // 解构 store 数据
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据
const state = reactive({})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {})
</script>

<style lang="scss" scoped>
.header-container {
	height: var(--rh-header-height);
	justify-content: space-between;

	.left {
		// 标题
		.title {
			font-size: 22px;
			font-weight: 400;
			color: #454545;
		}
	}

	.right {
		.title {
			font-size: 14px;
			font-weight: 400;
			color: #494949;
		}
	}
}

// 边框
.border {
	height: 5px;
	background: var(--el-color-primary);
}
</style>
