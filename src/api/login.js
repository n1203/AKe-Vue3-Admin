import config from "@/common/config"
import store from "@/store"
import md5 from "md5"
import store2 from "store2"
import { post } from "./request"

/**
 * 登陆
 * @param {*} username
 * @param {*} password
 * @returns
 */
export const login = async (username, password) => {
  try {
    const user = await post('/login', {
      username,
      password: md5(password, config.user.encryption_key),
    })
    store2.set('Authorization', user.token)
    store.userInfo = user
    return user
  } catch (error) {

    return
  }
}