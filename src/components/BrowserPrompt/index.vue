<!--
 * @Description: 判断浏览器提示语
 * @Author: cdl
 * @Date: 2022-06-08 13:23:40
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-08 13:59:16
-->
<template>
	<el-dialog
		v-model="state.isShowDialog"
		:close-on-click-modal="false"
		destroy-on-close
		width="30%"
		top="30vh"
	>
		<template #header>
			<div>提示</div>
		</template>
		<div class="padding30">
			<div class="font20 mb10">
				根据<span>微软官方</span>宣布，<span>IE</span> 浏览器已于
				<span>6月16</span> 日正式退出历史舞台！！！
			</div>
			<div class="font20">请转至使用 <span>Chrome，Edga</span> 等其他浏览器！！！</div>
		</div>
	</el-dialog>
</template>

<script setup>
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据>
const state = reactive({
	isShowDialog: false, // 弹窗状态
})

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	// 监听布局配置弹窗点击打开
	nextTick(() => {
		proxy.mittBus.on('openBrowserPrompt', () => {
			state.isShowDialog = true
		})
	})
})

// 页面卸载时
onUnmounted(() => {
	proxy.mittBus.off('openBrowserPrompt')
})
</script>

<style lang="scss" scoped>
span {
	color: red;
}
</style>
