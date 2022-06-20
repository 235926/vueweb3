<!--
 * @Description: 布局页面
 * @Author: cdl
 * @Date: 2022-06-08 16:36:13
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 11:16:34
-->
<template>
	<component :is="component[systemConfig.layout]" />
</template>

<script setup name="layout">
import Defaults from '@/layout/layoutStyle/defaults.vue' // 默认布局
import Classic from '@/layout/layoutStyle/classic.vue' // 经典布局
import { storeToRefs } from 'pinia' // pinia
import { useSystemConfig } from '@/pinia/systemConfig.js' // pinia 系统配置
const store = useSystemConfig() // 实例化 pinia
const { systemConfig } = storeToRefs(store) // 解构 store 数据

// 跟踪自身 .value 变化的 ref，配合 component 使用
const component = shallowRef({
	defaults: Defaults,
	classic: Classic,
})
</script>

<style lang="scss" scoped></style>
