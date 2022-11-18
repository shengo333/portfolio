exports.ids = [6,1];
exports.modules = {

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2ec5d14e", content, true, context)
};

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_4e6d3f6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_4e6d3f6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_4e6d3f6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_4e6d3f6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_4e6d3f6d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#header-wrapper[data-v-4e6d3f6d]{background:hsla(0,0%,50.2%,.39);margin-bottom:1.5rem;margin-top:2rem;padding:0 2rem}#header-wrapper[data-v-4e6d3f6d],.routes[data-v-4e6d3f6d]{display:flex;justify-content:space-between}.route[data-v-4e6d3f6d]{padding:0 1rem;text-decoration:none}h1[data-v-4e6d3f6d]{font-family:Montserrat,Helvetica,Arial,sans-serif;font-size:50px;font-weight:700;letter-spacing:-2.5px;line-height:50px;color:rgba(83,80,80,.73333)}h1[data-v-4e6d3f6d],h3[data-v-4e6d3f6d]{font-style:normal;text-transform:none}h3[data-v-4e6d3f6d]{font-family:Esteban,Georgia,\"Times New Roman\",serif;font-size:20px;font-weight:400;letter-spacing:normal;line-height:20px;color:#000}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Header.vue?vue&type=template&id=4e6d3f6d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"header-wrapper"}},[_vm._ssrNode("<div data-v-4e6d3f6d><h2 data-v-4e6d3f6d>Beka Shengelia</h2></div> "),_vm._ssrNode("<div class=\"routes\" data-v-4e6d3f6d>","</div>",[_c('router-link',{staticClass:"route",attrs:{"to":"/"}},[_c('h3',[_vm._v(" Home")])]),_vm._ssrNode(" "),_c('router-link',{staticClass:"route",attrs:{"to":"/games"}},[_c('h3',[_vm._v(" Game page")])]),_vm._ssrNode(" "),_c('router-link',{staticClass:"route",attrs:{"to":"/pages"}},[_c('h3',[_vm._v("Web pages")])]),_vm._ssrNode(" "),_c('router-link',{staticClass:"route",attrs:{"to":"/projects"}},[_c('h3',[_vm._v("Check currency")])]),_vm._ssrNode(" "),_c('router-link',{staticClass:"route",attrs:{"to":"/resume"}},[_c('h3',[_vm._v("Resume page")])])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Header.vue?vue&type=template&id=4e6d3f6d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Header.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header'
});
// CONCATENATED MODULE: ./pages/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e6d3f6d",
  "2002e355"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("311753ce", content, true, context)
};

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_projects_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{margin:0}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}#table-wrapper{margin:auto;height:auto;width:60rem;background-color:hsla(0,0%,96.1%,.5);display:flex;flex-direction:column}#wrapper-head{display:flex;justify-content:space-between;padding:4rem;align-items:center}#search,#select{background-color:#b6b6b1;padding:.5rem;border-radius:10%}.raw{background-color:grey;display:flex;justify-content:space-around;padding:2rem}#currency-table{display:flex;flex-direction:column;align-items:center}#thead{padding-bottom:1rem}#currency,#thead{display:flex;justify-content:space-between;width:90%}#currency{line-height:.9rem;font-size:.9rem}#currency td{width:3rem}.right-padding{padding-right:.8rem}#table-wrapper .router-link{align-self:center;padding:.5rem;margin-top:.5rem;margin-bottom:.5rem;text-decoration:none;border:1px solid #5c4d4d;font-size:1.2rem;font-family:Montserrat,Helvetica,Arial,sans-serif;background-color:#807e7e}#table-wrapper .router-link a{text-decoration:none;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects.vue?vue&type=template&id=d1c2a118&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"content-wrapper\">","</div>",[_vm._ssrNode("<div class=\"currency-background\">","</div>",[_vm._ssrNode("<div id=\"table-wrapper\">","</div>",[_vm._ssrNode("<div id=\"wrapper-head\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.search),expression:"search"}],attrs:{"name":"currencyDropdown","id":"currencyDropdown"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.search=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.currencyOptions),function(currencyOption,index){return _c('option',{key:currencyOption},[_vm._v(_vm._s(_vm.currencyOptions[index].code))])}),0)]),_vm._ssrNode(" <table id=\"currency-table\"><thead id=\"thead\"><th>Name</th> <th>Quantity</th> <th>rateFormated</th> <th class=\"right-padding\">Difference</th> <th class=\"right-padding\">Rate</th></thead> "+(_vm._ssrList((_vm.filteredCurrency),function(currency){return ("<tr id=\"currency\"><td>"+_vm._ssrEscape(_vm._s(currency.code))+"</td> <td>"+_vm._ssrEscape(_vm._s(currency.quantity))+"</td> <td>"+_vm._ssrEscape(_vm._s(currency.rateFormated))+"</td> <td>"+_vm._ssrEscape(_vm._s(currency.diffFormated))+"</td> <td>"+_vm._ssrEscape(_vm._s(currency.rate))+"</td></tr>")}))+"</table>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects.vue?vue&type=template&id=d1c2a118&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./pages/Header.vue + 4 modules
var Header = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects.vue?vue&type=script&lang=js&
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


/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  // get deta from server
  components: {
    Header: Header["default"]
  },

  data() {
    return {
      url: 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/',
      currencies: [],
      currencyOptions: [],
      search: ''
    };
  },

  mounted() {
    this.getData(); //agar gchirdeba this.renderCurrency;
    //agar gchirdeba this.renderCurrencyOption;
    //agar gchirdeba this.renderData;
  },

  methods: {
    async getData() {
      const response = await external_axios_default.a.get(this.url); //const data =  response.json();

      console.log(response);
      this.currencies = response.data[0].currencies;
      this.currencyOptions = response.data[0].currencies;
    }

  },
  computed: {
    filteredCurrency() {
      return this.currencies.filter(currency => {
        return currency.code.match(this.search);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/projects.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "21809aa2"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=projects.js.map