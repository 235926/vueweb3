<!--
 * @Description: 修改系统配置
 * @Author: cdl
 * @Date: 2022-06-13 13:33:49
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 16:40:45
-->
<template>
	<el-drawer v-model="state.drawer" :direction="state.direction" destroy-on-close size="400px">
		<template #header>
			<span>布局配置</span>
		</template>

		<template #default>
			<el-scrollbar class="layout-settings-main">
				<el-divider content-position="left">全局主题</el-divider>

				<div class="drawer-item">
					<span>主题颜色</span>
					<el-color-picker
						v-model="getSystemConfig.primary"
						@change="onColorPickerChange"
						:predefine="predefineColors"
					></el-color-picker>
				</div>
			</el-scrollbar>
		</template>
	</el-drawer>
</template>

<script setup>
import { getLightColor, getDarkColor } from '@/utils/theme.js' // 修改主题颜色
import { Local } from '@/utils/storage.js' // 页面存储
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置
const store = useSystemConfig() // 实例化 pinia
const { systemConfig } = storeToRefs(store) // 解构 store 数据
const { proxy } = getCurrentInstance() // vue 实例

// 更改主题预定义颜色
const predefineColors = ref(['#409eff', '#c01330'])

// 定义响应式数据
const state = reactive({
	drawer: false, // 开启显示 Drawer
	direction: 'rtl', // Drawer 打开的方向
})

// 获取布局配置信息
const getSystemConfig = computed(() => {
	return systemConfig.value
})

// 触发 store 布局配置更新
const setDispatchThemeConfig = () => {
	setLocalThemeConfig()
	setLocalThemeConfigStyle()
}

// 存储布局配置
const setLocalThemeConfig = () => {
	Local.remove('systemConfig')
	Local.set('systemConfig', getSystemConfig.value)
}

// 存储布局配置全局主题样式（html根标签）,也就是 :root 部分
const setLocalThemeConfigStyle = () => {
	Local.set('systemConfigStyle', document.documentElement.style.cssText)
}

/**
 * @description: 切换主题颜色
 * @return {*}
 * @author: cdl
 */
const onColorPickerChange = () => {
	if (!getSystemConfig.value.primary)
		return proxy.$message.warning('全局主题 primary 颜色值不能为空')

	// 颜色加深
	document.documentElement.style.setProperty(
		'--el-color-primary-dark-2',
		`${getDarkColor(getSystemConfig.value.primary, 0.1)}`
	)
	document.documentElement.style.setProperty('--el-color-primary', getSystemConfig.value.primary)

	// // 颜色变浅，不设置的话，更改完主题色，hover 效果什么的不发生变化，还是原来的主题色配套
	for (let i = 1; i <= 9; i++) {
		document.documentElement.style.setProperty(
			`--el-color-primary-light-${i}`,
			`${getLightColor(getSystemConfig.value.primary, i / 10)}`
		)
	}
	setDispatchThemeConfig()
}

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	// 监听布局配置弹窗点击打开
	nextTick(() => {
		proxy.mittBus.on('openSystemConfig', () => {
			state.drawer = true
		})

		setTimeout(() => {
			// 默认样式
			onColorPickerChange()
		}, 100)
	})
})

// 页面销毁时，关闭监听布局配置/i18n监听
onUnmounted(() => {
	proxy.mittBus.off('openSystemSettings', () => {})
})
</script>

<style lang="scss" scoped>
.layout-settings-main {
	height: calc(100vh - 50px);
	padding: 0 20px;

	.drawer-item {
		color: --el-text-color-primary;
		font-size: 14px;
		padding: 5px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		> span,
		> .el-input,
		> .el-select {
			flex: 1;
		}
	}
}
</style>
