import { api } from '../config'
import store from '../store/index'
import { actionTypes as userActionTypes } from '../store/redusers/user'
import { actionTypes as usersActionTypes } from '../store/redusers/users'
import history from '../utils/history'

export async function getUser(id = 1) {
  let res = await api.get(`/users/${id}`)
  if (res.status !== 200) throw new Error(`Can't fetch user by id ${id}`)

  return res.data
}

// http request + redux store
export async function getUsers() {
  let res = await api.get('/users')
  if (res.status !== 200) throw new Error(`Can't fetch user list`)

  store.dispatch({ type: usersActionTypes.SET, payload: res.data })
}

// common redux action
export function setUser(user: any) {
  store.dispatch({ type: userActionTypes.SET, payload: user })
  localStorage.setItem('user', JSON.stringify(user))
}

export function unsetUser() {
  store.dispatch({ type: userActionTypes.UNSET })
  localStorage.removeItem('user')
  history.replace('/login')
}

export async function authUser() {
  try {
    const userStr: string | null = localStorage.getItem('user')
    if (!userStr) return null

    const user = JSON.parse(userStr)
    setUser(user)

    return user
  } catch (e) {
    return null
  }
}