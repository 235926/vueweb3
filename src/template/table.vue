<!--
 * @Description: table 模板
 * @Author: cdl
 * @Date: 2022-06-14 13:47:10
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 15:07:31
-->
<template>
	<el-table
		:data="state.tableData"
		:border="true"
		:header-cell-style="{ 'text-align': 'center' }"
		:cell-style="{ 'text-align': 'center' }"
		@selection-change="handleSelectionChange"
		@row-click="handleRowClick"
	>
		<el-table-column type="selection" width="55" />
		<el-table-column label="序号" type="index" width="55" />
		<el-table-column show-overflow-tooltip prop="name" label="企业信息内容" />
		<el-table-column prop="isEdit" label="可编辑" width="180">
			<template #default="scope">
				<el-checkbox v-model="scope.row.isEdit" label="可编辑" />
			</template>
		</el-table-column>
	</el-table>
</template>

<script setup>
const route = useRoute() // 路由参数
const router = useRouter() // 路由实例
const { proxy } = getCurrentInstance() // vue 实例

// 定义响应式数据
const state = reactive({
	tableData: [
		{
			name: '公司名称',
			isEdit: false,
		},
		{
			name: '工商成立日期',
			isEdit: false,
		},
		{
			name: '经营范围',
			isEdit: false,
		},
		{
			name: '法定代表人/分支机构负责人',
			isEdit: false,
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

<style lang="scss" scoped></style>
