(self["webpackChunk"] = self["webpackChunk"] || []).push([["svg-sprite"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
var svgContext = __webpack_require__("./resources/js/assets/svg sync recursive !./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill! \\w+\\.svg$/");

var symbols = svgContext.keys().map(function (path) {
  // get SVG file content
  var content = svgContext(path); // extract icon id from filename

  var id = path.replace(/^\.\/(.*)\.\w+$/, "$1"); // replace svg tags with symbol tags and id attribute

  return content.replace("<svg", "<symbol id=\"".concat(id, "\"")).replace("svg>", "symbol>");
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SvgSprite",
  svgSprite: symbols.join("\n") // concatenate all symbols into $options.svgSprite

});

/***/ }),

/***/ "./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill!./resources/js/assets/svg/html5.svg":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill!./resources/js/assets/svg/html5.svg ***!
  \**************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 28\"><path d=\"M17.656 9.328l0.25-2.734h-13.813l0.734 8.344h9.562l-0.344 3.563-3.078 0.828-3.063-0.828-0.203-2.188h-2.734l0.344 4.344 5.656 1.563h0.063v-0.016l5.609-1.547 0.781-8.5h-10.063l-0.234-2.828h10.531zM0 2h22l-2 22.469-9.031 2.531-8.969-2.531z\"></path></svg>"

/***/ }),

/***/ "./resources/js/components/icon/SvgSprite.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/icon/SvgSprite.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgSprite.vue?vue&type=template&id=07215d9e& */ "./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e&");
/* harmony import */ var _SvgSprite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SvgSprite.vue?vue&type=script&lang=js& */ "./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SvgSprite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/icon/SvgSprite.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgSprite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SvgSprite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgSprite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgSprite_vue_vue_type_template_id_07215d9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SvgSprite.vue?vue&type=template&id=07215d9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/icon/SvgSprite.vue?vue&type=template&id=07215d9e& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("svg", {
    staticStyle: { display: "none" },
    attrs: { width: "0", height: "0" },
    domProps: { innerHTML: _vm._s(_vm.$options.svgSprite) }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/assets/svg sync recursive !./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill! \\w+\\.svg$/":
/*!***********************************************************************************************************************************************************!*\
  !*** ./resources/js/assets/svg/ sync !./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill! \w+\.svg$/ ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./html5.svg": "./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill!./resources/js/assets/svg/html5.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/assets/svg sync recursive !./node_modules/svg-inline-loader/index.js?removeTags=true&removeSVGTagAttrs=true&removingTagAttrs=fill! \\w+\\.svg$/";

/***/ })

}]);