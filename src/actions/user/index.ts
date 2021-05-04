import { user } from '~/types'

export const login = (data: object) => { return { type: user.LOGIN, data }}
export const setUser = (data: object|null) => { return { type: user.SETUSER, data }}
export const setEmailVerify = (data: boolean) => { return { type: user.SETEMAILVERIFY, data }}