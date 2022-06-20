<template>
	<el-dialog
		v-model="state.isShowDialog"
		:width="width"
		:close-on-click-modal="false"
		:destroy-on-close="true"
		:draggable="true"
	>
		<template #header>
			<div>{{ title }}</div>
		</template>

		<el-scrollbar class="scrollbar-x" :max-height="maxHeight">
			<el-form ref="formRef" :model="state.form" label-width="120px" class="pr50">
				<el-form-item prop="input1" label="上级党组织">
					<el-input v-model="state.form.input1" />
				</el-form-item>
				<el-form-item prop="input2" label="上级党组织">
					<el-select v-model="state.form.input2" placeholder="请选择">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
		</el-scrollbar>

		<template #footer>
			<div class="dialog-footer">
				<el-button round type="primary" @click="onSubmit">确认</el-button>
				<el-button round @click="onCancel">取消</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
// props
const props = defineProps({
	// 标题
	title: {
		type: String,
		default: () => '提示',
	},
	// 宽度
	width: {
		type: Number,
		default: () => 677,
	},
	// 最大高度
	maxHeight: {
		type: Number,
		default: 400,
	},
})

// 定义响应式数据>
const formRef = ref(null)
const state = reactive({
	isShowDialog: false, // 弹窗状态
	form: {}, // 表单
})

// 打开弹窗
const openDialog = () => {
	state.isShowDialog = true
}

// 关闭弹窗
const closeDialog = () => {
	state.isShowDialog = false

	// 重置表单，必须要有 prop 属性，否则失效
	formRef.value.resetFields()
}

// 取消
const onCancel = () => {
	closeDialog()
}

// 提交
const onSubmit = () => {
	closeDialog()
}

// 暴露数据到 vue 实例
defineExpose({
	openDialog,
})
</script>

<style lang="scss" scoped></style>
