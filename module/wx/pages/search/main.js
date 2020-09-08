require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(108);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6edfc82e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(148);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6edfc82e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6edfc82e", Component.options)
  } else {
    hotAPI.reload("data-v-6edfc82e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_search__ = __webpack_require__(143);

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
      value: {
        firstprop: "dept",
        twoprop: "car",
        firstplaceholder: "请输入到访单位",
        twoplaceholder: "请输入姓名"
      },
      appList: [{
        ID: 'lime',
        fcontact: "user-circle-o",
        fcolor: '#1989fa',
        cardtitle: "身份证号码:",
        tcontact: "idcard",
        tcolor: '#1989fa',
        comptitle: "到访单位:",
        scolor: '#1989fa',
        scontact: "wap-home-o",
        shartTime: "来访时间:",
        ecolor: '#07c160',
        econtact: "underway-o",
        endTime: "离开时间:",
        gcolor: '#07c160',
        gcontact: "underway-o",
        PEOPLENAME: '待审核',
        IDENTITYNUMBER: "3201236541236598456",
        DEPTNAME: '江苏大范德萨发生的',
        FROMTIME: '20120306 08:32',
        TOTIME: '20120306 09:32'
      }], // 列表数据
      page: 1, // 当前页数
      total_page: 0 // 总页数
    };
  },

  components: {
    searchdom: __WEBPACK_IMPORTED_MODULE_1__components_search__["a" /* default */]
  },
  // 实例创建完成后调用数据
  mounted: function mounted() {
    this.getList();
  },

  // 上拉触底事件
  onReachBottom: function onReachBottom() {
    if (this.page > this.total_page) {
      console.log('数据加载完了');
    } else {
      // 下一页
      this.page = this.page + 1;
      this.getList();
    }
  },

  // 下拉刷新事件
  onPullDownRefresh: function onPullDownRefresh() {
    // 初始化页码
    this.page = 1;
    this.getList();
  },

  methods: {
    // 获取数据方法
    getList: function getList() {
      var that = this;
      //访问单位
      that.$http.post({
        url: 'app!ajaxGetTempListCount',
        data: {
          page: that.page, // 传递页码
          toDeptId: "",
          driverCode: "",
          userId: "",
          count: 15,
          audit: that.page
        }
      }).then(function (res) {
        if (res.result == "success") {
          console.log(res);
          wx.stopPullDownRefresh();
          // 返回的数据
          var data = res.data;
          // 数据追加  data.list为返回的数据列表
          if (that.page > 1) {
            var _that$appList;

            // 数据追加
            (_that$appList = that.appList).push.apply(_that$appList, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(data));
          } else {
            // 数据
            that.appList = data;
          }
          // 总页数
          that.total_page = data.total_page;
        }
      });
    },
    details: function details() {
      wx.navigateTo({
        url: '../details/main'
      });
    },
    search: function search() {
      that.page = 1;
      this.getList();
      console.log("搜素");
    },
    add: function add() {
      wx.navigateTo({
        url: '../visitor/main'
      });
    }
  }
});

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b68be59_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6b68be59"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6b68be59_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_search_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\search.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] search.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b68be59", Component.options)
  } else {
    hotAPI.reload("data-v-6b68be59", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    props: ["appList", "value"],
    methods: {
        add: function add() {
            this.$emit("add");
        },
        search: function search() {
            this.$emit("search");
        },
        details: function details(item) {
            this.$emit("details", item);
        }
    }
});

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "search"
  }, [_c('view', {
    staticClass: "add"
  }, [_c('van-button', {
    attrs: {
      "type": "primary",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": _vm.add
    }
  }, [_vm._v("新增")])], 1), _vm._v(" "), _c('view', {
    staticClass: "header"
  }, [_c('van-search', {
    attrs: {
      "value": _vm.value[_vm.firstprop],
      "placeholder": _vm.value.firstplaceholder,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('van-search', {
    attrs: {
      "value": _vm.value[_vm.twoprop],
      "placeholder": _vm.value.twoplaceholder,
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('van-button', {
    staticStyle: {
      "flex-shrink": "0",
      "margin-right": "5px"
    },
    attrs: {
      "type": "primary",
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.search
    }
  }, [_vm._v("搜索")])], 1), _vm._v(" "), (_vm.appList.length > 0) ? _c('view', {
    staticClass: "lists",
    attrs: {
      "scroll-view": "",
      "type": "primary"
    }
  }, _vm._l((_vm.appList), function(item, index) {
    return _c('view', {
      key: index,
      staticClass: "listbox",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.details(item)
        }
      }
    }, [_c('view', {
      staticClass: "first between"
    }, [_c('view', {
      staticClass: "fitstleft"
    }, [_c('van-icon', {
      attrs: {
        "name": item.fcontact,
        "color": item.fcolor,
        "mpcomid": '4_' + index
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.ID))])], 1), _vm._v(" "), _c('van-button', {
      attrs: {
        "type": "primary",
        "mpcomid": '5_' + index
      }
    }, [_vm._v(_vm._s(item.PEOPLENAME))])], 1), _vm._v(" "), _c('view', {
      staticClass: "first"
    }, [_c('van-icon', {
      attrs: {
        "name": item.tcontact,
        "color": item.tcolor,
        "mpcomid": '6_' + index
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.cardtitle))]), _vm._v(" "), _c('text', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v(_vm._s(item.IDENTITYNUMBER))])], 1), _vm._v(" "), _c('view', {
      staticClass: "first"
    }, [_c('van-icon', {
      attrs: {
        "name": item.scontact,
        "color": item.scolor,
        "mpcomid": '7_' + index
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.comptitle))]), _vm._v(" "), _c('text', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v(_vm._s(item.DEPTNAME))])], 1), _vm._v(" "), _c('view', {
      staticClass: "first"
    }, [_c('van-icon', {
      attrs: {
        "name": item.econtact,
        "color": item.ecolor,
        "mpcomid": '8_' + index
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.shartTime))]), _vm._v(" "), _c('text', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v(_vm._s(item.FROMTIME))])], 1), _vm._v(" "), _c('view', {
      staticClass: "first"
    }, [_c('van-icon', {
      attrs: {
        "name": item.gcontact,
        "color": item.gcolor,
        "mpcomid": '9_' + index
      }
    }), _vm._v(" "), _c('text', [_vm._v(_vm._s(item.endTime))]), _vm._v(" "), _c('text', {
      attrs: {
        "type": "primary"
      }
    }, [_vm._v(_vm._s(item.TOTIME))])], 1)])
  })) : _c('view', {
    staticClass: "empty"
  }, [_vm._v("暂无记录!")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b68be59", esExports)
  }
}

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "search"
  }, [_c('searchdom', {
    attrs: {
      "appList": _vm.appList,
      "value": _vm.value,
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "add": _vm.add,
      "search": _vm.search,
      "details": _vm.details
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6edfc82e", esExports)
  }
}

/***/ })

},[107]);