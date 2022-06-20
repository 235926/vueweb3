<!--
 * @Description: 测试页面
 * @Author: cdl
 * @Date: 2022-06-13 17:42:39
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 15:39:10
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-table :data="state.tableData" border>
				<el-table-column type="selection" width="55" align="center" />
				<el-table-column prop="date" label="Date" width="180" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
			</el-table>
		</div>
	</div>
</template>

<script setup>
import PageHeader from '@/views/component/PageHeader/index.vue' // 页面头部

// 定义响应式数据
const state = reactive({
	isShowTooltip: false, // Tooltip 文字提示状态
	treeData: [
		{
			label: 'Level one 2',
			children: [
				{
					label: 'Level two 2-1Level three 3-1-1',
					children: [
						{
							label: 'Level three 2-1-1Level three 3-1-1',
						},
					],
				},
				{
					label: 'Level two 2-2Level three 3-1-1',
					children: [
						{
							label: 'Level three 2-2-1Level three 3-1-1',
						},
					],
				},
			],
		},
	],
	defaultProps: {
		children: 'children',
		label: 'label',
	},
	tableData: [
		{
			date: '2016-05-03',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-04',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
	],
})

/**
 * @description: 鼠标移入
 * @param {*} event
 * @return {*}
 * @author: cdl
 */
const onMouseenter = (event, node) => {
	state.isShowTooltip = event.currentTarget.scrollWidth <= event.currentTarget.clientWidth
}
</script>

<style lang="scss" scoped></style>
