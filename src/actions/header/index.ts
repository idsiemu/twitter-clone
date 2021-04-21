import { header } from '~/types'

export const setLeft = (data : boolean) => { return { type: header.SETLEFT, data }}
export const setLeftIcon = (data : string) => { return { type: header.SETLEFTICON, data }}
export const setRight = (data : boolean) => { return { type: header.SETRIGHT, data }}
export const setRightIcon = (data : string) => { return { type: header.SETRIGHTICON, data }}