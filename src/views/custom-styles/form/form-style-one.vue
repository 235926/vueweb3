<!--
 * @Description: 自定义 Form 表单 样式一
 * @Author: cdl
 * @Date: 2022-06-19 17:49:10
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-19 19:04:35
-->
<template>
	<div class="page-container">
		<PageHeader />

		<!-- 内容部分 -->
		<div class="content padding20">
			<el-alert type="success" :closable="false" class="mb20">
				<ol class="margin0">
					<li class="mb5">使用 form 表单改成的表格样式</li>
					<li class="mb5">可以作为组件接收 props 传递过来的数据进行渲染</li>
					<li>使用 watch 监听 form 表单数据变化</li>
				</ol>
			</el-alert>

			<el-form label-width="150px" size="large" class="form-style-one">
				<el-form-item
					v-for="(item, index) in state.form"
					:key="index"
					:label="item.label"
					:style="{ width: item.type === 'textarea' ? '100%' : '50%' }"
				>
					<el-input
						v-if="item.type === 'input'"
						v-model="item.name"
						:readonly="item.readonly"
						placeholder="请输入内容"
					></el-input>

					<el-input
						v-if="item.type === 'textarea'"
						v-model="item.name"
						type="textarea"
						:rows="3"
						resize="none"
						placeholder="请输入内容"
						:readonly="item.readonly"
					>
					</el-input>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script setup name="home">
import PageHeader from '@/views/component/PageHeader/index.vue' // 页面头部

// 定义响应式数据
const state = reactive({
	form: [
		{ label: '公司名称', name: '工商注册公司名称', readonly: true, type: 'input' },
		{ label: '统一信用代码', name: '91110115MA04BH9K88', readonly: true, type: 'input' },
		{ label: '法定代表人', name: '李松平', readonly: true, type: 'input' },
		{ label: '公司状况', name: '正常运营', readonly: true, type: 'input' },
		{ label: '工商成立日期', name: '开发商首次获取股权', readonly: true, type: 'input' },
		{ label: '注册资本币种', name: '人民币', readonly: true, type: 'input' },
		{ label: '注册资本(万元)', name: '2,988,196.016', readonly: true, type: 'input' },
		{ label: '所属公司', name: '北京首都创业集团', readonly: true, type: 'input' },
		{ label: '企业类别', name: '国有全资', readonly: true, type: 'input' },
		{ label: '经营期限', name: '长期', readonly: true, type: 'input' },
		{ label: '登记注册类型', name: '股份有限公司', readonly: true, type: 'input' },
		{ label: '管理层级', name: '一级', readonly: true, type: 'input' },
		{ label: '产权层级', name: '一级', readonly: true, type: 'input' },
		{ label: '管理团队', name: '城发总部', readonly: true, type: 'input' },
		{ label: '国资监管范围', name: '国资监管', readonly: true, type: 'input' },
		{ label: '是否城发体系', name: '国资监管', readonly: true, type: 'input' },
		{ label: '注册地址(详)', name: '请填写', readonly: true, type: 'input' },
		{ label: '注册地街道门牌号', name: '请填写', readonly: true, type: 'input' },
		{ label: '经营范围', name: '请填写', readonly: false, type: 'textarea' },
		{ label: '公司属性(公司职能)', name: '城发总部', readonly: true, type: 'input' },
		{ label: '地块名称', name: '请填写', readonly: true, type: 'input' },
		{ label: '公司用途', name: '全资子公司', readonly: true, type: 'input' },
		{ label: '是否分红', name: '是', readonly: true, type: 'input' },
		{ label: '是否操盘', name: '主操盘', readonly: true, type: 'input' },
	],
})

// 监听 data 数据变化
watch(
	() => props.data,
	(newVal) => {
		console.log(newVal)
	},
	{ deep: true }
)

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
