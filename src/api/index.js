/*
 * @Description: 接口文档
 * @Author: cdl
 * @Date: 2022-06-06 06:05:03
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-14 12:22:20
 */
import request from '@/plugin/axios.js' // axios

/**
 * @description: 用户登录
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const login = (data) => {
	return request({
		url: '/SY_ORG_LOGIN.login.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 获取菜单列表
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const getMenuList = (data) => {
	return request({
		url: '/SY_COMM_INFO.menu.do',
		method: 'get',
		params: data,
	})
}

/**
 * @description: 获取全部树形结构数据
 * @param {*} data
 * @return {*}
 * @author: cdl
 */
export const getDictTreeAll = (data) => {
	return request({
		url: '/SY_COMM_INFO.dict.do',
		method: 'get',
		params: data,
	})
}
