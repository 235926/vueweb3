<!--
 * @Description: 经典布局
 * @Author: cdl
 * @Date: 2022-06-09 09:18:50
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 16:52:36
-->
<template>
	<el-container class="layout-container is-vertical">
		<Header />

		<el-container class="layout-main-height-65">
			<Aside />

			<Main />
		</el-container>
	</el-container>
</template>

<script setup name="layoutClassic">
import Header from '@/layout/container/header/index.vue' // 头部
import Aside from '@/layout/container/aside/index.vue' // 侧边栏
import Main from '@/layout/container/main/index.vue' // 内容渲染主体
</script>

<style lang="scss" scoped>
.layout-main-height-65 {
	height: calc(100vh - 65px);
}
</style>
