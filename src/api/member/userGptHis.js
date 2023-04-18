import request from '@/utils/request'

// 创建会员gpt扩展历史
export function createUserGptHis(data) {
  return request({
    url: '/member/user-gpt-his/create',
    method: 'post',
    data: data
  })
}

// 更新会员gpt扩展历史
export function updateUserGptHis(data) {
  return request({
    url: '/member/user-gpt-his/update',
    method: 'put',
    data: data
  })
}

// 删除会员gpt扩展历史
export function deleteUserGptHis(id) {
  return request({
    url: '/member/user-gpt-his/delete?id=' + id,
    method: 'delete'
  })
}

// 获得会员gpt扩展历史
export function getUserGptHis(id) {
  return request({
    url: '/member/user-gpt-his/get?id=' + id,
    method: 'get'
  })
}

// 获得会员gpt扩展历史分页
export function getUserGptHisPage(query) {
  return request({
    url: '/member/user-gpt-his/page',
    method: 'get',
    params: query
  })
}

// 导出会员gpt扩展历史 Excel
export function exportUserGptHisExcel(query) {
  return request({
    url: '/member/user-gpt-his/export-excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
