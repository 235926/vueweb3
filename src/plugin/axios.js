/*
 * @Description: ajax 请求接口
 * @Author: cdl
 * @Date: 2022-06-06 05:59:22
 * @LastEditors: cdl
 * @LastEditTime: 2022-06-10 10:01:43
 */
import axios from 'axios' // ajax 请求插件
import { Local } from '@/utils/storage.js' // 浏览器存储

// 创建一个 axios 实例
const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 50000, // 请求时长
	withCredentials: false, // 当发送跨域请求时携带 cookie
	headers: {
		'Content-Type': 'application/json',
		'X-DEVICE-NAME': 'DESKTOP',
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		// // // 在发送请求之前做些什么 token
		if (Local.get('token')) {
			config.headers.common['X-XSRF-TOKEN'] = `${Local.get('token')}`
		}
		return config
	},
	(error) => {
		// 对请求错误做些什么
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么
		return response.data
	},
	(error) => {
		// 对响应错误做点什么
		return Promise.reject(error)
	}
)

export default service
