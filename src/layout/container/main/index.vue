<!--
 * @Description: 内容渲染主体
 * @Author: cdl
 * @Date: 2022-06-08 17:31:38
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-12 17:42:27
-->
<template>
	<el-main class="layout-main">
		<el-scrollbar>
			<div class="routerView-container">
				<layoutRouterView />
			</div>
		</el-scrollbar>
	</el-main>
</template>

<script setup name="layoutMain">
import layoutRouterView from '@/layout/openWay/routerView.vue' // 路由出口
const route = useRoute() // 路由参数
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据
const state = reactive({})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {})
</script>

<style lang="scss" scoped>
.routerView-container {
	min-height: calc(100vh - 105px);
	padding: 20px;
	transition: padding 0.3s ease-in-out;
	overflow: hidden;
}
</style>
