exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("03ea97b1", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matrix_vue_vue_type_style_index_0_id_06c3598c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matrix_vue_vue_type_style_index_0_id_06c3598c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matrix_vue_vue_type_style_index_0_id_06c3598c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matrix_vue_vue_type_style_index_0_id_06c3598c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_matrix_vue_vue_type_style_index_0_id_06c3598c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".matrix-wrapper[data-v-06c3598c]{display:flex;align-items:center;justify-content:center;justify-content:space-around;padding:0 1rem}#redPill[data-v-06c3598c]{display:flex}#redPill .left[data-v-06c3598c]{border-top-left-radius:40%;border-bottom-left-radius:40%;margin-right:1px}#redPill .left[data-v-06c3598c],#redPill .right[data-v-06c3598c]{background:#c00;width:3.8rem;height:2.5rem}#redPill .right[data-v-06c3598c]{border-top-right-radius:40%;border-bottom-right-radius:40%;margin-left:1px}#bluePill[data-v-06c3598c]{display:flex}#bluePill .left[data-v-06c3598c]{border-top-left-radius:40%;border-bottom-left-radius:40%;margin-right:1px}#bluePill .left[data-v-06c3598c],#bluePill .right[data-v-06c3598c]{background:#0000cd;width:3.8rem;height:2.5rem}#bluePill .right[data-v-06c3598c]{border-top-right-radius:40%;border-bottom-right-radius:40%;margin-left:1px}@media only screen and (max-width:1110px){#bluePill .left[data-v-06c3598c],#bluePill .right[data-v-06c3598c],#redPill .left[data-v-06c3598c],#redPill .right[data-v-06c3598c]{width:2rem;height:1.5rem}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/matrix.vue?vue&type=template&id=06c3598c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"matrix-wrapper"},[_c('router-link',{attrs:{"to":"/resume"}},[_c('div',{attrs:{"id":"redPill"}},[_c('div',{staticClass:"left"}),_vm._v(" "),_c('div',{staticClass:"right"})])]),_vm._ssrNode(" <canvas id=\"vue-matrix-raindrop\" data-v-06c3598c></canvas> "),_c('router-link',{attrs:{"to":"/games"}},[_c('div',{attrs:{"id":"bluePill"}},[_c('div',{staticClass:"left"}),_vm._v(" "),_c('div',{staticClass:"right"})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/matrix.vue?vue&type=template&id=06c3598c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/matrix.vue?vue&type=script&lang=js&
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
/* harmony default export */ var matrixvue_type_script_lang_js_ = ({
  name: 'vue-matrix-raindrop',
  props: {
    canvasWidth: {
      type: Number,
      default: 850
    },
    canvasHeight: {
      type: Number,
      default: 800
    },
    fontSize: {
      type: Number,
      default: 20
    },
    fontFamily: {
      type: String,
      default: 'arial'
    },
    textContent: {
      type: String,
      default: 'აბცHireMeდევზთიკლმHireMeნოპჟრსტუფქღყშჩძწჭხჯჰ HireMe'
    },
    textColor: {
      type: String,
      default: '#0F0',
      validator: function (value) {
        var colorReg = /^#([0-9a-fA-F]{6})|([0-9a-fA-F]{3})$/g;
        return colorReg.test(value);
      }
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0,0,0,0.1)',
      validator: function (value) {
        var reg = /^[rR][gG][Bb][Aa][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?(0\.\d{1,2}|1|0)?[\)]{1}$/;
        return reg.test(value);
      }
    },
    speed: {
      type: Number,
      default: 10,
      validator: function (value) {
        return value % 1 === 0;
      }
    }
  },
  mounted: function () {
    this.initRAF();
    this.initCanvas();
    this.initRainDrop();
    this.animationUpdate();
  },
  methods: {
    initRAF() {
      window.requestAnimationFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      }();

      window.cancelAnimationFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
          window.clearTimeout(id);
        };
      }();
    },

    initCanvas() {
      this.canvas = document.getElementById('vue-matrix-raindrop'); //需要判断获取到的canvas是否是真的canvas

      if (this.canvas.tagName.toLowerCase() !== 'canvas') {
        console.error("Error! Invalid canvas! Please check the canvas's id!");
      }

      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;
      this.canvasCtx = this.canvas.getContext('2d');
      this.canvasCtx.font = this.fontSize + 'px ' + this.fontFamily;
      this.columns = this.canvas.width / this.fontSize;
    },

    initRainDrop() {
      for (var i = 0; i < this.columns; i++) {
        this.rainDropPositionArray.push(0);
      }
    },

    animationUpdate() {
      this.speedCnt++; //speed为1最快，越大越慢

      if (this.speedCnt === this.speed) {
        this.speedCnt = 0; //绘制背景

        this.canvasCtx.fillStyle = this.backgroundColor;
        this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height); //绘制文字

        this.canvasCtx.fillStyle = this.textColor;

        for (var i = 0, len = this.rainDropPositionArray.length; i < len; i++) {
          this.rainDropPositionArray[i]++;
          var randomTextIndex = Math.floor(Math.random() * this.textContent.length);
          var randomText = this.textContent[randomTextIndex];
          var textYPostion = this.rainDropPositionArray[i] * this.fontSize;
          this.canvasCtx.fillText(randomText, i * this.fontSize, textYPostion);

          if (textYPostion > this.canvasHeight) {
            if (Math.random() > 0.9) {
              this.rainDropPositionArray[i] = 0;
            }
          }
        }
      }

      window.requestAnimationFrame(this.animationUpdate);
    }

  },

  data() {
    return {
      canvasCtx: null,
      canvas: null,
      columns: 0,
      rainDropPositionArray: [],
      speedCnt: 0
    };
  }

});
// CONCATENATED MODULE: ./pages/matrix.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_matrixvue_type_script_lang_js_ = (matrixvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/matrix.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_matrixvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "06c3598c",
  "81f7fb2e"
  
)

/* harmony default export */ var matrix = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=matrix.js.map