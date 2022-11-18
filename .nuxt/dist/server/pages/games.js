exports.ids = [2,1];
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(34);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("dd72b66a", content, true, context)
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_games_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_games_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_games_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_games_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_games_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vsc-initialized,body{margin:0!important}.game-mainWrapper a{color:#fff;padding:1rem;font-size:1.5rem;text-decoration:none}.game-mainWrapper h1{color:rgba(105,119,24,.651)}.page-enter-active,.page-leave-active{transition:opacity .9s}.page-enter,.page-leave-to{opacity:0}.content-wrapper{display:flex;flex-direction:column;align-items:center}.grid{display:grid;grid-template-columns:repeat(3,0fr)}.cell-input,.grid{justify-content:center}.cell-input{height:7rem;width:7rem;background-color:rgba(50,105,156,.63);border:1px solid #fff;display:flex;align-items:center}#changeMe{height:5rem;width:5rem;background-color:red}.game-mainWrapper{display:flex;flex-direction:column;align-items:center}.game-mainWrapper .router-link a{padding:.5rem;text-decoration:none;border:1px solid #9c9b9b;background:#969595;font-size:1.2rem;color:#fff;font-family:Montserrat,Helvetica,Arial,sans-serif}.router-link{margin-top:1.4rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/games.vue?vue&type=template&id=3544c588&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" <div class=\"content-wrapper\"><div class=\"game-mainWrapper\"><h1> Please click on the box to Start the game</h1> <div class=\"grid\">"+(_vm._ssrList((_vm.cellIds),function(cellId){return ("<div"+(_vm._ssrAttr("id",cellId))+" class=\"cell-input\"></div>")}))+"</div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/games.vue?vue&type=template&id=3544c588&

// EXTERNAL MODULE: ./pages/Header.vue + 4 modules
var Header = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/games.vue?vue&type=script&lang=js&
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

/* harmony default export */ var gamesvue_type_script_lang_js_ = ({
  components: {
    Header: Header["default"]
  },
  methods: {
    changeUser() {
      this.userOne = !this.userOne;
      this.userTwo = !this.userTwo;

      if (this.userOne) {
        document.querySelector('h1').innerHTML = 'User one';
      } else {
        document.querySelector('h1').innerHTML = 'User Two';
      }
    },

    changeColor(id) {
      if (this.isBoxClickable(id)) {
        if (this.userOne) {
          document.getElementById(id).innerHTML = '0';
          this.playerOneClicks.push(id);
        }

        if (this.userTwo) {
          document.getElementById(id).innerHTML = 'X';
          this.playerTwoClicks.push(id);
        }

        this.allClicks.push(id);
        this.changeUser();
        this.getResults();
      } else {
        alert('this box allready clicked');
      }
    },

    isBoxClickable(id) {
      return !this.allClicks.find(element => element == id);
    },

    getResults() {
      this.checkWinner();

      if (this.allClicks.length >= 9) {
        alert('game has been finished, nobody wins');
        this.startAgain();
      }
    },

    startAgain() {
      this.allClicks = [];
      this.playerOneClicks = [];
      this.playerTwoClicks = [];
      var list = document.getElementsByClassName("cell-input");

      for (let item of list) {
        item.innerHTML = '';
      }
    },

    checkWinner() {
      this.isPlayeroneWinner();

      if (this.isPlayeroneWinner()) {
        this.startAgain();
      }

      this.isPlayerTwoWinner();

      if (this.isPlayerTwoWinner()) {
        this.startAgain();
      }
    },

    isPlayeroneWinner() {
      if (this.winningCombinations.some(combination => this.checkWinningCombination(combination, this.playerOneClicks))) {
        alert('player one wins');
        return true;
      } else {
        console.log('aint working');
      }
    },

    isPlayerTwoWinner() {
      if (this.winningCombinations.some(combination => this.checkWinningCombination(combination, this.playerTwoClicks))) {
        alert('player Two wins');
        return true;
      } else {
        console.log('aint working');
      }
    },

    checkWinningCombination(combination, playerClicks) {
      return combination.every(combinationElement => playerClicks.find(playerClick => playerClick == combinationElement));
    }

  },

  data() {
    return {
      cellIds: [11, 12, 13, 21, 22, 23, 31, 32, 33],
      userOne: true,
      userTwo: false,
      allClicks: [],
      playerOneClicks: [],
      playerTwoClicks: [],
      winningCombinations: [[11, 12, 13], [21, 22, 23], [31, 32, 33], [12, 22, 32], [13, 23, 33], [11, 21, 31], [11, 22, 33], [13, 22, 31]]
    };
  }

});
// CONCATENATED MODULE: ./pages/games.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_gamesvue_type_script_lang_js_ = (gamesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/games.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(33)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gamesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2588ca49"
  
)

/* harmony default export */ var games = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=games.js.map