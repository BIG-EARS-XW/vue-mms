import request from '@/utils/request'
import store from '@/store'
import $ from 'jquery'

export function getRemoteCurrentDate (refresh) {
  let API_URL = store.state.configs.API_URL
  if (!sessionStorage.serverDate || refresh) {
    $.ajax({
      url: API_URL + '/cTime',
      async: false,
      cache: true,
      success: function (res) {
        sessionStorage.setItem('serverDate', res)
      }
    })
  }
  return Number(sessionStorage.serverDate)
}

export function getGravidaDetail (param) {
  return request({
    url: '/findp',
    method: 'GET',
    params: param
  })
}