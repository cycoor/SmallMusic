import {request} from "./request";

export function _Banner() {
  return request({
    url: '/banner'
  })
}

export function _Recommends() {
  return request({
    url: '/personalized'
  })
}

export function _Broadcast() {
  return request({
    url: '/personalized/privatecontent'
  })
}

export function _NewMusic() {
  return request({
    url: '/personalized/newsong'
  })
}