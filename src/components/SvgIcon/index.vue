<!--
 * @Description: svg 图标使用
 * @Author: cdl
 * @Date: 2022-06-08 14:01:05
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 17:48:52
-->
<template>
	<svg class="svg-icon" aria-hidden="true" :class="`font${size}`">
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>

<script>
import { defineComponent, computed } from 'vue' // vue 内置方法

export default defineComponent({
	name: 'SvgIcon',
	props: {
		// svg 前缀
		prefix: {
			type: String,
			default: 'icon',
		},
		// svg 图标组件名字
		name: {
			type: String,
		},
		// svg 大小
		size: {
			type: Number,
			default: () => 16,
		},
		// svg 颜色
		color: {
			type: String,
		},
	},
	setup(props) {
		const symbolId = computed(() => `#${props.prefix}-${props.name}`)
		return { symbolId }
	},
})
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	fill: currentColor;
	vertical-align: -0.15em;
	overflow: hidden;
	cursor: pointer;
}
</style>
