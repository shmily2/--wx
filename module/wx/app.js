require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_http__ = __webpack_require__(57);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_2__utils_http__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(56);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c2f2fcce", Component.options)
  } else {
    hotAPI.reload("data-v-c2f2fcce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 55:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync({
        key: 'logs',
        data: logs
      });
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
      logs.unshift(Date.now());
      global.mpvue.setStorageSync('logs', logs);
    }
  },
  log: function log() {
    console.log('log at:' + Date.now());
  }
});

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);


//新沂地址
var httpUrl = "http://221.6.40.82:8090/XYHGYQ/";
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
function request(url, method, data) {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  });
  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      url: httpUrl + url,
      method: method,
      data: data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function success(res) {
        var json = res.data;
        wx.hideLoading();
        resolve(json);
      },
      fail: function fail(res) {
        wx.hideLoading();
        // reject(false)
      },
      complete: function complete() {
        wx.hideLoading();
      }
    });
  });
}

function get(obj) {
  return request(obj.url, 'GET', obj.data);
}

function post(obj) {
  return request(obj.url, 'POST', obj.data);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  request: request,
  get: get,
  post: post,
  httpUrl: httpUrl
});

/***/ })

},[52]);