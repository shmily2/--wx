require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(88);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c426aa2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(89)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_3c426aa2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3c426aa2", Component.options)
  } else {
    hotAPI.reload("data-v-3c426aa2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(91);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      logs: [],
      imgUrls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598613663147&di=620c5a193bed87caaff8ed7142aaea2d&imgtype=0&src=http%3A%2F%2Fccdn.goodq.top%2Fcaches%2Fde5d2fe4c60bdee7f17d574bfcca95b6%2FaHR0cDovL3d3dy5qdW5zaXNvZnQuY29tLmNuL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOS8wMS84YzU3YzU5M2UwMmMzNDBhMzJkYjQyZGU5MDM4NjE5Mi5qcGc_p_p100_p_2FYX', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598613707727&di=8361390802ce2f1859986de7c01cacdd&imgtype=0&src=http%3A%2F%2Fwww.xianjichina.com%2Fdata%2Fediter%2F20180718%2Fimage%2F6ad39d97a69a9cd55c96379b5bfbc5a2.png', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1477228353,3477237665&fm=26&gp=0.jpg']
    };
  },
  created: function created() {
    var logs = void 0;
    if (global.mpvuePlatform === 'my') {
      logs = global.mpvue.getStorageSync({ key: 'logs' }).data || [];
    } else {
      logs = global.mpvue.getStorageSync('logs') || [];
    }
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(new Date(log));
    });
  },

  methods: {}
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatTime;
function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('/');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return t1 + ' ' + t2;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  formatNumber: formatNumber,
  formatTime: formatTime
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_c('swiper', {
    staticStyle: {
      "width": "100%",
      "height": "384rpx"
    },
    attrs: {
      "indidator-dots": "true",
      "indicator-dots": "true",
      "interval": "2000",
      "autoplay": "true",
      "circular": "true",
      "duration": "500"
    }
  }, _vm._l((_vm.imgUrls), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "src": item,
        "mode": "scaleToFill"
      }
    })])], 1)
  })), _vm._v(" "), _c('ul', {
    staticClass: "log-list"
  }, [_c('li', [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/visitorSearch/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/visitor.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("访客预约")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/transportSearch/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/trans.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("运输申报")])], 1)]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/moveaplySearch/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/images/moveaply.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("危废申报")])], 1)])], 1)], 1), _vm._v(" "), _c('div')])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3c426aa2", esExports)
  }
}

/***/ })

},[87]);