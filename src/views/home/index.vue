<!--
 * @Description: 首页
 * @Author: cdl
 * @Date: 2022-06-06 05:50:27
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 16:20:35
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">content</div>
	</div>
</template>

<script setup name="home">
import PageHeader from '@/views/component/PageHeader/index.vue' // 页面头部

// 定义响应式数据
const state = reactive({})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {})
</script>

<style lang="scss" scoped>
.home {
	height: 3000px;
	padding: 20px;
	background: #fff;
}
</style>
