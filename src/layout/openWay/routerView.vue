<!--
 * @Description: 路由出口
 * @Author: cdl
 * @Date: 2022-06-08 17:34:19
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-11 19:39:45
-->
<template>
	<router-view v-slot="{ Component }">
		<transition :name="getSystemConfig" mode="out-in">
			<component :is="Component" />
		</transition>
	</router-view>
</template>

<script setup name="layoutRouterView">
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置
const store = useSystemConfig() // 实例化 pinia
const { systemConfig } = storeToRefs(store) // 解构 store 数据

// 获取系统配置
const getSystemConfig = computed(() => {
	return systemConfig.value.animation
})
</script>

<style lang="scss" scoped></style>
