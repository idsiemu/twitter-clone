import { user } from '~/types'

export const setLoading = (data : boolean) => { return { type: user.SETLOADING, data }}
export const login = (data: object) => { return { type: user.LOGIN, data }}
export const setUser = (data: object|null) => { return { type: user.SETUSER, data }}