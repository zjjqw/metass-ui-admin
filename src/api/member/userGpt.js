import request from '@/utils/request'

// 创建会员gpt扩展
export function createUserGpt(data) {
  return request({
    url: '/member/user-gpt/create',
    method: 'post',
    data: data
  })
}

// 更新会员gpt扩展
export function updateUserGpt(data) {
  return request({
    url: '/member/user-gpt/update',
    method: 'put',
    data: data
  })
}

// 删除会员gpt扩展
export function deleteUserGpt(id) {
  return request({
    url: '/member/user-gpt/delete?id=' + id,
    method: 'delete'
  })
}

// 获得会员gpt扩展
export function getUserGpt(id) {
  return request({
    url: '/member/user-gpt/get?id=' + id,
    method: 'get'
  })
}

// 获得会员gpt扩展分页
export function getUserGptPage(query) {
  return request({
    url: '/member/user-gpt/page',
    method: 'get',
    params: query
  })
}

// 导出会员gpt扩展 Excel
export function exportUserGptExcel(query) {
  return request({
    url: '/member/user-gpt/export-excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
