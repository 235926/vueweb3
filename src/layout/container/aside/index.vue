<!--
 * @Description: 侧边栏
 * @Author: cdl
 * @Date: 2022-06-09 09:34:23
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-17 16:56:36
-->
<template>
	<el-aside class="layout-aside">
		<el-scrollbar class="flex-auto">
			<el-menu router :default-active="activeMenu" class="menu-style-one">
				<template v-for="val in menuList">
					<el-sub-menu
						:index="val.path"
						v-if="!val.hidden && val.children && val.children.length > 0"
						:key="val.path"
					>
						<template #title>
							<SvgIcon :name="val.meta.icon" />
							<span class="title ml15">{{ val.meta.title }}</span>
						</template>
						<SubItem :child="val.children" />
					</el-sub-menu>

					<template v-else-if="!val.hidden">
						<el-menu-item :index="val.path" :key="val.path">
							<template #title>
								<SvgIcon :name="val.meta.icon" />
								<span class="title ml15">{{ val.meta.title }}</span>
								<el-icon class="ArrowRight">
									<ArrowRight />
								</el-icon>
							</template>
						</el-menu-item>
					</template>
				</template>
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<script setup name="layoutAside">
import SubItem from '@/layout/container/aside/subItem.vue' // 菜单列表子级
import { getMenuList } from '@/api/index.js' // api
const route = useRoute() // 路由参数
const router = useRouter() // 路由实例

// 定义响应式数据
const state = reactive({
	menuList: [], // 菜单列表
})

// 路由菜单列表数组
const menuList = computed(() => {
	return router.options.routes[0].children
})

// el-menu 默认高亮
const activeMenu = computed(() => {
	const { meta, path } = route
	// 如果设置了path，侧边栏将突出显示您设置的路径
	if (meta.activeMenu) {
		return meta.activeMenu
	}
	return path
})

/**
 * @description: 获取菜单列表
 * @return {*}
 * @author: cdl
 */
const onGetMenuList = () => {
	let params = {
		PID: '0lo9rRVjt5AaE7KZYcoE',
	}
	getMenuList(params).then((res) => {
		// console.log(res)
	})
}

// 组件挂载后，此方法执行后，页面显示
onMounted(() => {
	// onGetMenuList()
})
</script>

<style lang="scss" scoped></style>
