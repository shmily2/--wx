require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "authorize-contianer"
  }, [_c('div', {
    staticClass: "auth-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("请微信授权")]), _vm._v(" "), _c('div', {
    staticClass: "btn-authorize"
  }, [_c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '1'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo
    }
  }, [_vm._v("确认授权")])], 1), _vm._v(" "), (_vm.cancelAuth) ? _c('div', {
    staticClass: "refuse"
  }, [_vm._v("请授权，否则无法进入哦~")]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-45132079", esExports)
  }
}

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_45132079_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(103);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_45132079_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45132079", Component.options)
  } else {
    hotAPI.reload("data-v-45132079", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { getToken } from '@/api/main'
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      cancelAuth: false, //判断用户是否拒绝获取信息
      newType: '',
      shareDetail: {},
      code: '',
      isPone: false //用于显示获取手机权限窗口

    };
  },

  methods: {
    //获取手机号
    getPhoneNumber: function getPhoneNumber(e) {
      console.log(e);
      if (e.mp.detail.errMsg === "getPhoneNumber:ok") {
        this.isPone = false;
        this.params.iv = e.mp.detail.iv;
        this.params.encryptedData = e.mp.detail.encryptedData;
        console.log(this.params);
        this.getTokenAsync(this.params);
      }
    },

    //调用wx.login获取code
    login: function login() {
      var me = this;
      var obj = wx.getStorageSync('USER_INFO');
      console.log(obj, 'USER_INFOUSER_INFO');
      if (obj) {
        wx.navigateTo({
          url: '../index/main'
        });
      } else {
        wx.login({
          success: function success(res) {
            if (res.code) {
              me.code = res.code;
            }
          }
        });
      }
    },

    // 请求后获取token
    getTokenAsync: function getTokenAsync(params) {
      // let res = await getToken(params)
      // if (res.success) {
      //   wx.setStorageSync('USER_INFO', JSON.stringify(res.data))
      // 	wx.switchTab({ url: this.path })
      // } else {
      //   console.log("获取失败")
      // }

      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    //  调用用户信息授权页面
    bindGetUserInfo: function bindGetUserInfo(e) {
      if (!this.cancelAuth) {
        this.isPone = true;
      }
      wx.setStorageSync('USER_MSG', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e.mp.detail.userInfo));
      console.log(e);
      if (e.mp.detail.userInfo) {
        this.params = {
          code: this.code,
          name: e.mp.detail.userInfo.nickName,
          userIcon: e.mp.detail.userInfo.avatarUrl
        };
        wx.navigateTo({
          url: '../index/main'
        });
      } else {
        // 用户按了拒绝按钮
        this.cancelAuth = true;
      }
    }
  },
  onShow: function onShow() {
    this.login();
  }
});

/***/ })

},[93]);