
//新沂地址
 var httpUrl="http://221.6.40.82:8090/XYHGYQ/" 
//连云港测试
//var httpUrl="http://221.6.40.82:9180/TXHGYQ/"
// 测试环境
//var httpUrl="http://192.168.0.184:8080/XYHGYQ/"
// 荣
// var httpUrl="http://192.168.0.142:8080/TXHGYQ/"
// 吕
 //var httpUrl="http://192.168.0.171:8080/XYHGYQ/"
//施
// var httpUrl="http://192.168.0.23:8080/TXHGYQ/"
function request (url, method, data) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: httpUrl + url, 
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json',
      },
      success: function (res) {
        var json = res.data
        wx.hideLoading()
        resolve(json)
      },
      fail: function (res) {
        wx.hideLoading()
        // reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}
 
function get (obj) {
  return request(obj.url, 'GET', obj.data)
}
 
function post (obj) {
  return request(obj.url, 'POST', obj.data)
}
 
export default {
  request,
  get,
  post,
  httpUrl
}
