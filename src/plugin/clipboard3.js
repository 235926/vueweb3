/*
 * @Description: 剪切板插件
 * @Author: cdl
 * @Date: 2022-06-10 16:14:18
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 17:46:07
 */
import useClipboard from 'vue-clipboard3' // 剪切板插件
const { toClipboard } = useClipboard()

// 复制成功
export const clipboardSuccess = () => {
	ElMessage({
		showClose: true,
		message: `复制成功`,
		type: 'success',
	})
}

// 复制失败
export const clipboardFail = () => {
	ElMessage({
		showClose: true,
		message: `复制失败`,
		type: 'error',
	})
}

// 复制函数
export const handleClipboard = async (text) => {
	try {
		await toClipboard(text)
		clipboardSuccess()
	} catch (e) {
		clipboardFail()
		console.error(e)
	}
}
