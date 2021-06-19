(self["webpackChunk"] = self["webpackChunk"] || []).push([["base-button"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/button/button.js");
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    text: {
      type: String,
      "default": "Hola mundo"
    }
  },
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__.BButton
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/button/button.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/button/button.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "props": () => (/* binding */ props),
/* harmony export */   "BButton": () => (/* binding */ BButton)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/key-codes */ "./node_modules/bootstrap-vue/esm/constants/key-codes.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/esm/utils/router.js");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // --- Props ---

var linkProps = (0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.omit)(_link_link__WEBPACK_IMPORTED_MODULE_1__.props, ['event', 'routerTag']);
delete linkProps.href.default;
delete linkProps.to.default;
var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_0__.sortKeys)(_objectSpread(_objectSpread({}, linkProps), {}, {
  block: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  pill: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  // Tri-state: `true`, `false` or `null`
  // => On, off, not a toggle
  pressed: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, null),
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  squared: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  type: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'button'),
  variant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING, 'secondary')
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var handleFocus = function handleFocus(event) {
  if (event.type === 'focusin') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.addClass)(event.target, 'focus');
  } else if (event.type === 'focusout') {
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.removeClass)(event.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return (0,_utils_router__WEBPACK_IMPORTED_MODULE_6__.isLink)(props) || (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isBoolean)(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !(0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.isTag)(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || 'secondary'), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? (0,_utils_props__WEBPACK_IMPORTED_MODULE_2__.pluckProps)(linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/_vue__WEBPACK_IMPORTED_MODULE_8__.default.extend({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_BUTTON,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(event) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for CODE_SPACE/CODE_ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = event.keyCode; // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags

        if (keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_SPACE || keyCode === _constants_key_codes__WEBPACK_IMPORTED_MODULE_9__.CODE_ENTER && nonStandardTag) {
          var target = event.currentTarget || event.target;
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event, {
            propagation: false
          });
          target.click();
        }
      },
      click: function click(event) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isEvent)(event)) {
          (0,_utils_events__WEBPACK_IMPORTED_MODULE_10__.stopEvent)(event);
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          (0,_utils_array__WEBPACK_IMPORTED_MODULE_11__.concat)(listeners['update:pressed']).forEach(function (fn) {
            if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_7__.isFunction)(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link_link__WEBPACK_IMPORTED_MODULE_1__.BLink : props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_12__.mergeData)(data, componentData), children);
  }
});

/***/ }),

/***/ "./resources/js/components/button/BaseButton.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/button/BaseButton.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=template&id=2920a9c5& */ "./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5&");
/* harmony import */ var _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseButton.vue?vue&type=script&lang=js& */ "./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/button/BaseButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseButton_vue_vue_type_template_id_2920a9c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseButton.vue?vue&type=template&id=2920a9c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/button/BaseButton.vue?vue&type=template&id=2920a9c5& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "b-button",
    _vm._g(
      _vm._b(
        { attrs: { size: "sm" } },
        "b-button",
        Object.assign({}, _vm.$attrs, _vm.$props),
        false
      ),
      _vm.$listeners
    ),
    [_vm._v(_vm._s(_vm.text))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);