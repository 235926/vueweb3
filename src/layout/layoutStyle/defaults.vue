<!--
 * @Description: 默认布局
 * @Author: cdl
 * @Date: 2022-06-08 16:44:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-09 09:57:03
-->
<template>
	<el-container class="layout-container custom-class">
		<Aside />

		<el-container class="flex-column">
			<Header />
			<Main />
		</el-container>
	</el-container>
</template>

<script setup name="layoutDefaults">
import Header from '@/layout/container/header/index.vue' // 头部
import Aside from '@/layout/container/aside/index.vue' // 侧边栏
import Main from '@/layout/container/main/index.vue' // 内容渲染主体
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据
const state = reactive({})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {})
</script>

<style lang="scss" scoped></style>
