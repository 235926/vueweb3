<!--
 * @Description: table 循环渲染数据
 * @Author: cdl
 * @Date: 2022-06-19 17:49:06
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 19:02:23
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-alert type="success" :closable="false" class="mb20">
				<ol class="margin0">
					<li class="mb5">使用 table 表格循环渲染数据</li>
					<li>带多选和序号</li>
				</ol>
			</el-alert>

			<el-table
				:data="state.tableData"
				:border="true"
				@selection-change="handleSelectionChange"
				@row-click="handleRowClick"
			>
				<el-table-column type="selection" align="center" width="55" />
				<el-table-column label="序号" type="index" align="center" width="55" />

				<!-- 设置表头数据源，并循环渲染出来，自定义绑定  property 对应列内容的字段名 -->
				<el-table-column
					v-for="item in state.tableHeader"
					:key="item.key"
					:label="item.label"
					:property="item.key"
					:align="item.align"
					:width="item.width"
				>
					<template #default="scope">
						{{ scope.row[scope.column.property] }}
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script setup name="home">
import PageHeader from '@/views/component/PageHeader/index.vue' // 页面头部

// 定义响应式数据
const state = reactive({
	tableHeader: [
		{ label: '股东名称', key: 'name', width: '', align: 'left' },
		{ label: '股东类型', key: 'type', width: '200px', align: 'center' },
		{ label: '工商口径持股比例', key: 'industrial', width: '200px', align: 'center' },
		{ label: '会计口径持股比例', key: 'accounting', width: '200px', align: 'center' },
	],
	tableData: [
		{
			name: '北京首创城市发展集团有限公司',
			type: '我方',
			industrial: '30%',
			accounting: '40',
		},
		{
			name: 'XXX有限公司',
			type: '其他股东',
			industrial: '12%',
			accounting: '32',
		},
		{
			name: 'XXX有限公司',
			type: '其他股东',
			industrial: '5%',
			accounting: '27',
		},
	],
})

/**
 * @description: 选中内容
 * @param {*} val
 * @return {*}
 * @author: cdl
 */
const handleSelectionChange = (val) => {
	console.log(val)
}

/**
 * @description: table 当某一行被点击时会触发该事件
 * @param {*} row
 * @return {*}
 * @author: cdl
 */
const handleRowClick = (row) => {
	console.log(row)
}

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
