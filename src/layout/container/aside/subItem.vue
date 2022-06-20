<!--
 * @Description: 菜单列表子级
 * @Author: cdl
 * @Date: 2022-06-10 11:11:35
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 16:56:47
-->
<template>
	<div class="child-wrap">
		<template v-for="val in child">
			<el-sub-menu
				:index="val.path"
				:key="val.path"
				v-if="!val.hidden && val.children && val.children.length > 0"
			>
				<template #title>
					<SvgIcon :name="val.meta.icon" />
					<span class="title ml10">{{ val.meta.title }}</span>
				</template>
				<sub-item :child="val.children" />
			</el-sub-menu>

			<template v-else-if="!val.hidden">
				<el-menu-item :index="val.path" :key="val.path">
					<SvgIcon :name="val.meta.icon" />
					<span class="title ml10">{{ val.meta.title }}</span>
					<el-icon class="ArrowRight">
						<ArrowRight />
					</el-icon>
				</el-menu-item>
			</template>
		</template>
	</div>
</template>

<script setup name="subItem">
// props
const props = defineProps({
	child: {
		type: Array,
		default() {
			return []
		},
	},
})
</script>

<style lang="scss" scoped></style>
