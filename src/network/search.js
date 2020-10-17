import {request} from "./request";

export function _hotSearchDetail() {
  return request({
    url: '/search/hot/detail'
  })
}