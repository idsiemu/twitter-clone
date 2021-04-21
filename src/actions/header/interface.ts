import { header } from '~/types'

export interface SETLEFT {
    type : typeof header.SETLEFT,
    data : any
}
export interface SETLEFTICON {
  type : typeof header.SETLEFTICON,
  data : any
}
export interface SETRIGHT {
  type : typeof header.SETRIGHT,
  data : any
}
export interface SETRIGHTICON {
  type : typeof header.SETRIGHTICON,
  data : any
}