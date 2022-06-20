/*
 * @Description: 自定义 svg 图标格式化
 * @Author: cdl
 * @Date: 2022-06-10 16:11:29
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 16:26:42
 */
let svgIcons = []
const svgFiles = import.meta.globEager('../../../assets/svg/*.svg')
for (const path in svgFiles) {
	const moduleName = path.replace(/(.*\/)*([^.]+).*/gi, '$2')
	svgIcons = [...svgIcons, moduleName]
}

export default svgIcons
