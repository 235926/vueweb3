<!--
 * @Description: tree 添加结构线模板
 * @Author: cdl
 * @Date: 2022-06-12 23:17:32
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 14:00:53
-->
<template>
	<div class="left">
		<div class="search mb20">
			<el-input v-model="filterText" :prefix-icon="Search" placeholder="请输入关键词" />
			<el-divider direction="vertical" />
			<span class="btn">搜索</span>
		</div>

		<el-tree
			:data="treeData"
			:props="state.defaultProps"
			:expand-on-click-node="true"
			:default-expand-all="true"
			:filter-node-method="filterNode"
			:indent="30"
		>
			<template #default="{ node }">
				<element-plus-tree-line
					ref="treeLine"
					class="custom-tree-node"
					:node="node"
					:indent="30"
					:showLabelLine="false"
				>
					<template #node-label>
						<SvgIcon
							v-if="node.expanded !== true && node.isLeaf === false"
							name="folder"
							class="folder"
						/>
						<SvgIcon
							v-if="node.expanded === true && node.isLeaf === false"
							name="folder-open"
							class="folder-open"
						/>
						<el-tooltip
							:tabindex="node.id"
							:content="node.label"
							:disabled="state.isShowTooltip"
							placement="right"
						>
							<span
								class="label"
								@mouseenter="onMouseenter($event)"
								@mouseleave="state.isShowTooltip = false"
								>{{ node.label }}</span
							>
						</el-tooltip>
						<span class="note">（注销）</span>
					</template>
				</element-plus-tree-line>
			</template>
		</el-tree>
	</div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue' // 分割图标

const treeData = [
	{
		label: '北京首创城市发展集团有限公司',
		children: [
			{
				label: '首创置业有限公司',
				children: [
					{ label: '置威科技（上海）有限公司' },
					{ label: '北京新元华富投资管理有限公司' },
				],
			},
			{
				label: '北京首创生态环保集团股份有限公司',
				children: [],
			},
			{
				label: '置威科技（上海）有限公司',
				children: [],
			},
		],
	},
	{
		label: '北京首创城市发展集团有限公司',
		children: [
			{
				label: '首创置业有限公司',
				children: [
					{ label: '置威科技（上海）有限公司' },
					{ label: '北京新元华富投资管理有限公司' },
				],
			},
			{
				label: '北京首创生态环保集团股份有限公司',
				children: [],
			},
			{
				label: '置威科技（上海）有限公司',
				children: [],
			},
		],
	},
]

// 定义响应式数据
const filterText = ref('') // 搜索内容
const treeRef = ref('') // tree 实例
const state = reactive({
	// 配置选项
	defaultProps: {
		children: 'children',
		label: 'label',
	},
	isShowTooltip: false, // Tooltip 文字提示状态
})

// 监听搜索框中的内容
watch(filterText, (val) => {
	treeRef.value.filter(val)
})

/**
 * @description: 过滤 tree 节点
 * @param {*} value
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
const filterNode = (value, data) => {
	if (!value) return true
	return data.label.includes(value)
}

/**
 * @description: 鼠标移入
 * @param {*} event
 * @return {*}
 * @author: cdl
 */
const onMouseenter = (event) => {
	state.isShowTooltip = event.currentTarget.scrollWidth <= event.currentTarget.clientWidth
}

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {})
</script>

<style lang="scss" scoped>
.search {
	position: relative;

	:deep(.el-input) {
		.el-input__wrapper {
			border-radius: 20px;

			.el-input__inner {
				padding-right: 60px;
			}
		}
	}

	.el-divider {
		position: absolute;
		top: 50%;
		right: 55px;
		transform: translateY(-50%);
	}

	.btn {
		width: max-content;
		font-size: 14px;
		font-weight: 400;
		color: var(--el-text-color-primary);
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		cursor: pointer;
	}
}
</style>
