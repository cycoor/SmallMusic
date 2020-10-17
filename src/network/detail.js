import {request} from "./request";

import {formatDate} from 'common/utils'

export function MusicListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function SongsDetail(arr) {
  return request({
    url: '/song/detail',
    params: {
      ids: arr
    }
  })
}

export class baseInfo {
  constructor(playlist) {
    this.img = playlist.coverImgUrl;
    this.title = playlist.description;
    this.name = playlist.name;
    this.shareCount = playlist.shareCount;
    this.subscribedCount = playlist.subscribedCount;
    this.playCount = playlist.playCount;
    this.trackCount = playlist.trackCount;
    this.tags = playlist.tags[0];
  }
}

export class songDetail {
  constructor(songs) {
    this.id = songs[0].id;
    this.name = songs[0].name;
    this.album = songs[0].al.name;
    this.song = songs[0].ar[0].name;
    this.pic = songs[0].al.picUrl;
    this.time = formatDate(new Date(songs[0].dt), 'mm:ss')
  }
}