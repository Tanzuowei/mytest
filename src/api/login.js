import encrypt from '../common/encrypt'
import { request_get } from '../common/request'

//登录接口
const API_CONFIG = 'http://localhost:3000/api/login'

/**
 * [checklogin 检测登录]
 * @param  {[type]} options.user [description]
 * @param  {[type]} options.pwd  [description]
 * @return {[type]}      [description]
 */
export const check_login = ({user,pwd}) => {
	const url = `${API_CONFIG}/${user}/${pwd}`
	return request_get(url)
}