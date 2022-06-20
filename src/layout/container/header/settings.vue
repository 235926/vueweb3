<!--
 * @Description: 系统设置按钮
 * @Author: cdl
 * @Date: 2022-06-13 14:15:38
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 14:18:01
-->
<template>
	<div class="svg-icon-container" @click="onLayoutSettingClick">
		<SvgIcon name="settings" />
	</div>
</template>

<script setup name="settings">
const { proxy } = getCurrentInstance() // vue 实例

// 打开布局设置抽屉
const onLayoutSettingClick = () => {
	proxy.mittBus.emit('openSystemConfig')
}
</script>

<style lang="scss" scoped></style>
