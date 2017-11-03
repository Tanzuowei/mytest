/*
 * action.js
 * 用于间接改变状态，这里可异步操作
*/
import * as types from './mutation-types'

//登录
export const setLogin = ({commit}, data) => {  //设置登录
  commit(types.SET_LOGIN, data)
}
