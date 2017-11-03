
/*
 * 用于state数据筛选过滤
*/

export const userId = state => state.loginStatus.userId
export const isLogin = state => state.loginStatus.isLogin
export const userInfo = state => state.userInfo


// export default {
//   doneTodos: state => {
//     return state.todos.filter(todo => todo.done)
//   },
//   doneTodosCount: (state, getters) => {
//     return getters.doneTodos.length
//   },
//   getTodoById: (state, getters) => (id) => {
//     return state.todos.find(todo => todo.id === id)
//   }
// }