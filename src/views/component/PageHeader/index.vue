<!--
 * @Description: 
 * @Author: cdl
 * @Date: 2022-06-15 21:32:27
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-16 15:36:33
-->
<template>
	<div class="page-header">
		<div class="title">{{ route.meta.title }}</div>

		<el-breadcrumb :separator-icon="ArrowRight">
			<el-breadcrumb-item
				v-for="item in matched"
				:key="item.name"
				:to="{ path: item.path }"
			>
				<SvgIcon :name="item.meta.icon" />
				<span class="name">{{ item.meta.title }}</span>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue' // 分割图标
const route = useRoute() // 路由参数

// 路由参数
const matched = computed(()=>{
	if (route.path === '/home') {
		return route.matched.filter((item) => {
			return item.name !== '/'
		})
	} else {
		return route.matched
	}
})
</script>

<style lang="scss" scoped>
.page-header {
	height: 50px;
	padding: 0 20px;
	background-color: #fafafa;
	border-bottom: 1px solid var(--el-border-color-lighter);
	border-radius: 4px 4px 0px 0px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.title {
		font-weight: 600;
		color: var(--el-color-primary);
	}

	:deep(.el-breadcrumb) {
		display: flex;
		align-items: center;

		.el-breadcrumb__item {
			.el-breadcrumb__inner {
				display: flex;
				align-items: center;
			}
		}

		.svg-icon {
			color: var(--el-color-primary);
			margin-right: 5px;
		}
	}
}
</style>
