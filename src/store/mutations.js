import * as types from "./mutation-types"

/*
 * mutation.js
 * 这是用于改变状态的事件方法，只允许同步操作
*/

//清除记录
function clear(state) {
   //状态清除
  state.loginStatus = {}
  state.userInfo = {}
  //本地缓存清除
  localStorage.removeItem("loginStatus")
  localStorage.removeItem("userInfo")
}

//状态存储字段
export const state = {
  'loginStatus': JSON.parse(localStorage.getItem("loginStatus") || '{}'), //用户登录状态
  'userInfo': JSON.parse(localStorage.getItem("userInfo") || '{}'), //用户登录信息
	// 'accounts': JSON.parse(localStorage.getItem("accounts") || '[]') //登陆过的用户
}

export const mutations = {
  /*
   * 登录
   * 通过[变量]计算属性获得type
  */
  [types.SET_LOGIN](state,{ loginStatus, userInfo }) {
    state.loginStatus = loginStatus
    state.userInfo = userInfo
    //写入本地缓存之前要先转字符串，尽量不要写入数值或对象
    localStorage.setItem("loginStatus", JSON.stringify(state.loginStatus))
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo))
  },

  /*
   *登出
   * 
  */
  [types.LOGOUT](state) {
    clear(state)
  },

}