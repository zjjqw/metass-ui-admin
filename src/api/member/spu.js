import request from '@/utils/request'

// 创建会员商品
export function createSpu(data) {
  return request({
    url: '/member/spu/create',
    method: 'post',
    data: data
  })
}

// 更新会员商品
export function updateSpu(data) {
  return request({
    url: '/member/spu/update',
    method: 'put',
    data: data
  })
}

// 删除会员商品
export function deleteSpu(id) {
  return request({
    url: '/member/spu/delete?id=' + id,
    method: 'delete'
  })
}

// 获得会员商品
export function getSpu(id) {
  return request({
    url: '/member/spu/get?id=' + id,
    method: 'get'
  })
}

// 获得会员商品分页
export function getSpuPage(query) {
  return request({
    url: '/member/spu/page',
    method: 'get',
    params: query
  })
}

// 导出会员商品 Excel
export function exportSpuExcel(query) {
  return request({
    url: '/member/spu/export-excel',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
