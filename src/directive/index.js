/*
 * @Description: 全局注册自定义指令
 * @Author: cdl
 * @Date: 2022-06-12 23:34:17
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-13 10:20:15
 */

// 引入自定义的指令
const directive = {}

// 全局注册自定义指令
export function loadDirectives(app) {
	Object.keys(directive).forEach((key) => {
		app.directive(key, directive[key])
	})
}
