import encrypt from '../common/encrypt'
import { request_get,request_post } from '../common/request'

//登录接口
const API_CONFIG = 'http://localhost:3000/api/article'

/**
 * [addarticle 上传文章]
 */
export const add_article = (body,config = {}) => {
  const url = `${API_CONFIG}/addArticle`
  return request_post(url,body,config)
}
/**
 * [selectOneArticle 获取一篇文章]
 */
export const select_one_article = (articleid) => {
  const url = `${API_CONFIG}/findOneArticle/${articleid}`
  return request_get(url)
}
/**
 * [selectOneArticle 获取一篇文章]
 */
export const select_new_one_article = (articleid) => {
  const url = `${API_CONFIG}/findNewOneArticle/${articleid}`
  return request_get(url)
}

/**
 * [selectAllArticle 上传文章]
 */
export const select_all_article = ({usersid,nowNum,pageNum,type}) => {
  const url = `${API_CONFIG}/selectAllArticle/usersid${usersid}&nownum${nowNum}&pagenum${pageNum}&type${type}`
  return request_get(url)
}

/**
 * [selectAllArticle 上传文章]
 */
export const select_users_all_article = ({usersid,nowNum,pageNum,type}) => {
  const url = `${API_CONFIG}/selectUserAllArticle/usersid${usersid}&nownum${nowNum}&pagenum${pageNum}&type${type}`
  return request_get(url)
}