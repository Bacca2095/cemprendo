(self["webpackChunk"] = self["webpackChunk"] || []).push([["form.edit"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_formularios_usuario_Usuario_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/formularios/usuario/Usuario.vue */ "./resources/js/views/form/components/formularios/usuario/Usuario.vue");
/* harmony import */ var _components_formularios_academico_Academico_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/formularios/academico/Academico.vue */ "./resources/js/views/form/components/formularios/academico/Academico.vue");
/* harmony import */ var _components_formularios_general_General_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/formularios/general/General.vue */ "./resources/js/views/form/components/formularios/general/General.vue");
/* harmony import */ var _components_formularios_laboral_Laboral_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/formularios/laboral/Laboral.vue */ "./resources/js/views/form/components/formularios/laboral/Laboral.vue");
/* harmony import */ var _components_formularios_salud_Salud_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/formularios/salud/Salud.vue */ "./resources/js/views/form/components/formularios/salud/Salud.vue");
/* harmony import */ var _components_formularios_formacion_Formacion_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/formularios/formacion/Formacion.vue */ "./resources/js/views/form/components/formularios/formacion/Formacion.vue");
/* harmony import */ var _components_formularios_emprendimiento_Emprendimiento_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/formularios/emprendimiento/Emprendimiento.vue */ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue");
/* harmony import */ var _components_formularios_familia_Familia_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/formularios/familia/Familia.vue */ "./resources/js/views/form/components/formularios/familia/Familia.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Usuario: _components_formularios_usuario_Usuario_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Academico: _components_formularios_academico_Academico_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    General: _components_formularios_general_General_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Laboral: _components_formularios_laboral_Laboral_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Salud: _components_formularios_salud_Salud_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    Formacion: _components_formularios_formacion_Formacion_vue__WEBPACK_IMPORTED_MODULE_5__.default,
    Emprendimiento: _components_formularios_emprendimiento_Emprendimiento_vue__WEBPACK_IMPORTED_MODULE_6__.default,
    Familia: _components_formularios_familia_Familia_vue__WEBPACK_IMPORTED_MODULE_7__.default
  },
  data: function data() {
    return {
      formId: this.$route.params.formId,
      form: {
        id: null,
        usuario: {
          nombre: null,
          nacimiento: null,
          genero: null,
          tipoDocumento: null,
          documento: null,
          fechaExpedicion: null,
          lugarExpedicion: null,
          libretaMilitar: null,
          distrito: null,
          anio: null,
          categoria: null,
          licencia: null,
          categoriaLicencia: null,
          tieneVehiculo: null,
          tipoVehiculo: null,
          estadoCivil: null,
          direccion: null,
          barrio: null,
          comuna: null,
          estrato: null,
          celular: null,
          email: null,
          segundaLengua: null,
          tarjetaProfesional: null,
          discapacidad: null,
          tipoDiscapacidad: null,
          personasCargo: null,
          totalCargo: null,
          parentesco: null,
          desplazado: null,
          rupd: null,
          beneficiario: null
        },
        formacionAcademica: {
          formacion: null,
          otraFormacion: null
        },
        situacionGeneral: {
          situacionGeneral: null
        },
        situacionLaboral: {
          situacionLaboral: null
        },
        salud: {
          salud: null,
          eps: null,
          tipoEps: null,
          sisben: null,
          nivelSisben: null
        },
        familia: {
          jefeHogar: null,
          otroJefeHogar: null,
          comparteHogar: null,
          familiares: [{
            id: 1,
            nombre: null,
            edad: null,
            estudio: null,
            parentesco: null,
            ocupacion: null,
            telefono: null
          }]
        },
        formacionRequerida: {
          formacionRequerida: null,
          otraFormacionRequerida: null
        },
        emprendimiento: {
          idea: null,
          funcionando: null,
          tiempoFuncionamiento: null,
          venta: null,
          oportunidad: null,
          otroOportunidad: null,
          expectativa: null,
          otroExpectativa: null,
          nacimientoIdea: null,
          otroNacimientoIdea: null,
          formacion: null,
          experiencia: null,
          clientes: null,
          recursos: null,
          otroRecurso: null
        },
        fecha: null
      }
    };
  },
  destroyed: function destroyed() {
    this.setLoad(true);
  },
  methods: _objectSpread({
    save: function save() {
      this.form.id = this.formularios.length + 1;
      this.form.fecha = new Date().toISOString().split("T")[0];
      this.saveForm(this.form);
      this.showToast("Se ha guardado el formulario", "success");
      this.$router.push({
        name: "form.index"
      });
    },
    edit: function edit() {
      console.log(this.form);
      this.editForm(this.form);
      this.showToast("Se han guardado los cambios en el formulario", "success");
      this.$router.push({
        name: "form.index"
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapActions)(["setLoad", "saveForm", "editForm"])),
  mounted: function mounted() {
    var _this = this;

    if (this.formId) {
      this.formularios.map(function (form) {
        if (_this.formId === form.id) {
          _this.form = form;
        }
      });
    }

    this.setLoad(false);
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_8__.mapState)(["formularios"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {
    addFamiliar: function addFamiliar() {
      this.tempForm.familiares.push({
        id: this.tempForm.familiares.length + 1
      });
    }
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.$emit("input", this.value);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/form/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/views/form/Form.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=1b617c40& */ "./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/form/Form.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__.render,
  _Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/Form.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/academico/Academico.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/academico/Academico.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Academico.vue?vue&type=template&id=6ba96654& */ "./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654&");
/* harmony import */ var _Academico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Academico.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Academico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__.render,
  _Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/academico/Academico.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emprendimiento.vue?vue&type=template&id=25cf8d84& */ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84&");
/* harmony import */ var _Emprendimiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emprendimiento.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Emprendimiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__.render,
  _Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/familia/Familia.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/familia/Familia.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Familia.vue?vue&type=template&id=45bbd220& */ "./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220&");
/* harmony import */ var _Familia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Familia.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Familia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__.render,
  _Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/familia/Familia.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/formacion/Formacion.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/formacion/Formacion.vue ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Formacion.vue?vue&type=template&id=0e15ce8a& */ "./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a&");
/* harmony import */ var _Formacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Formacion.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Formacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/formacion/Formacion.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/general/General.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/general/General.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=71e92254& */ "./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__.render,
  _General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/general/General.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/laboral/Laboral.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/laboral/Laboral.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Laboral.vue?vue&type=template&id=18875088& */ "./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088&");
/* harmony import */ var _Laboral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Laboral.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Laboral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__.render,
  _Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/laboral/Laboral.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/salud/Salud.vue":
/*!************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/salud/Salud.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Salud.vue?vue&type=template&id=7be21240& */ "./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240&");
/* harmony import */ var _Salud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Salud.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Salud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__.render,
  _Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/salud/Salud.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/components/formularios/usuario/Usuario.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/usuario/Usuario.vue ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Usuario.vue?vue&type=template&id=4bdd7762& */ "./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762&");
/* harmony import */ var _Usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Usuario.vue?vue&type=script&lang=js& */ "./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__.render,
  _Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/components/formularios/usuario/Usuario.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/form/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Academico.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Academico_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emprendimiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emprendimiento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Emprendimiento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Familia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Familia.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Familia_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formacion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Formacion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Laboral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Laboral.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Laboral_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Salud.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Salud_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuario.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1b617c40___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Form.vue?vue&type=template&id=1b617c40& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Academico_vue_vue_type_template_id_6ba96654___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Academico.vue?vue&type=template&id=6ba96654& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84& ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Emprendimiento_vue_vue_type_template_id_25cf8d84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emprendimiento.vue?vue&type=template&id=25cf8d84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Familia_vue_vue_type_template_id_45bbd220___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Familia.vue?vue&type=template&id=45bbd220& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Formacion_vue_vue_type_template_id_0e15ce8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Formacion.vue?vue&type=template&id=0e15ce8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_71e92254___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./General.vue?vue&type=template&id=71e92254& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Laboral_vue_vue_type_template_id_18875088___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Laboral.vue?vue&type=template&id=18875088& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Salud_vue_vue_type_template_id_7be21240___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Salud.vue?vue&type=template&id=7be21240& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240&");


/***/ }),

/***/ "./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Usuario_vue_vue_type_template_id_4bdd7762___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Usuario.vue?vue&type=template&id=4bdd7762& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/Form.vue?vue&type=template&id=1b617c40& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "b-container",
    [
      _c(
        "b-form",
        [
          _c("b-row", { attrs: { "align-h": "center" } }, [_c("b-col")], 1),
          _vm._v(" "),
          _c(
            "b-tabs",
            { attrs: { "content-class": "mt-3", pills: "" } },
            [
              _c(
                "b-tab",
                { attrs: { title: "Identificacion Usuario", active: "" } },
                [
                  _c("Usuario", {
                    attrs: { value: _vm.form.usuario },
                    on: {
                      input: function(nuevoUsuario) {
                        _vm.form.usuario = nuevoUsuario
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Formacion Academica" } },
                [
                  _c("Academico", {
                    attrs: { value: _vm.form.formacionAcademica },
                    on: {
                      input: function(nuevaFormacionAcademica) {
                        _vm.form.formacionAcademica = nuevaFormacionAcademica
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Situacion General" } },
                [
                  _c("General", {
                    attrs: { value: _vm.form.situacionGeneral },
                    on: {
                      input: function(situacionGeneral) {
                        _vm.form.situacionGeneral = situacionGeneral
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Situacion Laboral" } },
                [
                  _c("Laboral", {
                    attrs: { value: _vm.form.situacionLaboral },
                    on: {
                      input: function(situacionLaboral) {
                        _vm.form.situacionLaboral = situacionLaboral
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Programa de salud" } },
                [
                  _c("Salud", {
                    attrs: { value: _vm.form.salud },
                    on: {
                      input: function(nuevaSalud) {
                        _vm.form.salud = nuevaSalud
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Informacion familiar" } },
                [
                  _c("Familia", {
                    attrs: { value: _vm.form.familia },
                    on: {
                      input: function(nuevaFamilia) {
                        _vm.form.familia = nuevaFamilia
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Formacion requerida" } },
                [
                  _c("Formacion", {
                    attrs: { value: _vm.form.formacionRequerida },
                    on: {
                      input: function(nuevaFormacionRequerida) {
                        _vm.form.formacionRequerida = nuevaFormacionRequerida
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-tab",
                { attrs: { title: "Emprendimiento" } },
                [
                  _c("Emprendimiento", {
                    attrs: { value: _vm.form.emprendimiento },
                    on: {
                      input: function(nuevaEmprendimiento) {
                        _vm.form.emprendimiento = nuevaEmprendimiento
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.formId
            ? _c("b-button", { staticClass: "mt-3", on: { click: _vm.save } }, [
                _vm._v("Guardar")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.formId
            ? _c("b-button", { staticClass: "mt-3", on: { click: _vm.edit } }, [
                _vm._v("Guardar cambios")
              ])
            : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/academico/Academico.vue?vue&type=template&id=6ba96654& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "1" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Sin estudio")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "2" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Primaria")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "3" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Bachiller")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "4" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Tecnologo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "5" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Tecnico")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "6" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Universitario")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "7" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Postgrado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "estudio", value: "8" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Otro")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otraFormacion,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otraFormacion", $$v)
                      },
                      expression: "value.otraFormacion"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/emprendimiento/Emprendimiento.vue?vue&type=template&id=25cf8d84& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("1.Idea")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual es su idea de negocio?" } },
                [
                  _c("b-form-textarea", {
                    model: {
                      value: _vm.value.idea,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "idea", $$v)
                      },
                      expression: "value.idea"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "¿Su negocio se encuentra funcionando actualmente?"
                  }
                },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "salud", value: "1" },
                      model: {
                        value: _vm.value.funcionando,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "funcionando", $$v)
                        },
                        expression: "value.funcionando"
                      }
                    },
                    [_vm._v("SI")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "salud", value: "2" },
                      model: {
                        value: _vm.value.funcionando,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "funcionando", $$v)
                        },
                        expression: "value.funcionando"
                      }
                    },
                    [_vm._v("NO")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label:
                      "¿Que tiempo de funcionamiento tiene su unidad productiva?"
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.tiempoFuncionamiento,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "tiempoFuncionamiento", $$v)
                      },
                      expression: "value.tiempoFuncionamiento"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Valor de sus ventas actuales?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.venta,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "venta", $$v)
                      },
                      expression: "value.venta"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("2.Oportunidad de negocio")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label:
                      "¿Porque considera que esta idea es una oportunidad de negocio?"
                  }
                },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "op", value: "1" },
                      model: {
                        value: _vm.value.oportunidad,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "oportunidad", $$v)
                        },
                        expression: "value.oportunidad"
                      }
                    },
                    [_vm._v("No existe este negocio")]
                  ),
                  _vm._v(" "),
                  _c("b-form-radio", { attrs: { name: "op", value: "2" } }, [
                    _vm._v("Existe, pero no es suficiente")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "op", value: "3" },
                      model: {
                        value: _vm.value.oportunidad,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "oportunidad", $$v)
                        },
                        expression: "value.oportunidad"
                      }
                    },
                    [_vm._v("Experiencia adquirida")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "op", value: "4" },
                      model: {
                        value: _vm.value.oportunidad,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "oportunidad", $$v)
                        },
                        expression: "value.oportunidad"
                      }
                    },
                    [_vm._v("Otro")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otroOportunidad,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otroOportunidad", $$v)
                      },
                      expression: "value.otroOportunidad"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("3.Expectativa")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: { label: "¿Cual es su expectativa con ese negocio?" }
                },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ex", value: "1" },
                      model: {
                        value: _vm.value.expectativa,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "expectativa", $$v)
                        },
                        expression: "value.expectativa"
                      }
                    },
                    [_vm._v("Subsistir")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ex", value: "2" },
                      model: {
                        value: _vm.value.expectativa,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "expectativa", $$v)
                        },
                        expression: "value.expectativa"
                      }
                    },
                    [_vm._v("Ser independiente")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ex", value: "3" },
                      model: {
                        value: _vm.value.expectativa,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "expectativa", $$v)
                        },
                        expression: "value.expectativa"
                      }
                    },
                    [_vm._v("Tener otros ingresos/ aumentar ingresos")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ex", value: "4" },
                      model: {
                        value: _vm.value.expectativa,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "expectativa", $$v)
                        },
                        expression: "value.expectativa"
                      }
                    },
                    [_vm._v("Generar empleo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ex", value: "5" },
                      model: {
                        value: _vm.value.expectativa,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "expectativa", $$v)
                        },
                        expression: "value.expectativa"
                      }
                    },
                    [_vm._v("Otro")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otroExpectativa,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otroExpectativa", $$v)
                      },
                      expression: "value.otroExpectativa"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("4.Nacimiento de la idea")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿De donde nacio esa idea de negocio?" } },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "1" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Iniciativa propia")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "2" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Iniciativa de un amigo o familiar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "2" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Influencia del entorno cercano")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "2" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Influencia de medios de comunicacion")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "2" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Continuar con la linea familiar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "na", value: "2" },
                      model: {
                        value: _vm.value.nacimientoIdea,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "nacimientoIdea", $$v)
                        },
                        expression: "value.nacimientoIdea"
                      }
                    },
                    [_vm._v("Otro")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otroNacimientoIdea,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otroNacimientoIdea", $$v)
                      },
                      expression: "value.otroNacimientoIdea"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("5.Formacion o experiencia")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "6", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Formacion" } },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "fo", value: "1" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Ninguna o nula")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "fo", value: "2" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Muy basica o elemental")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "fo", value: "3" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Media / Se defiende")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "fo", value: "4" },
                      model: {
                        value: _vm.value.formacion,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "formacion", $$v)
                        },
                        expression: "value.formacion"
                      }
                    },
                    [_vm._v("Profunda / Amplia")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "6", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Experiencia" } },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "exp", value: "1" },
                      model: {
                        value: _vm.value.experiencia,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "experiencia", $$v)
                        },
                        expression: "value.experiencia"
                      }
                    },
                    [_vm._v("Ninguna o nula")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "exp", value: "2" },
                      model: {
                        value: _vm.value.experiencia,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "experiencia", $$v)
                        },
                        expression: "value.experiencia"
                      }
                    },
                    [_vm._v("Muy basica o elemental")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "exp", value: "3" },
                      model: {
                        value: _vm.value.experiencia,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "experiencia", $$v)
                        },
                        expression: "value.experiencia"
                      }
                    },
                    [_vm._v("Media / Se defiende")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "exp", value: "4" },
                      model: {
                        value: _vm.value.experiencia,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "experiencia", $$v)
                        },
                        expression: "value.experiencia"
                      }
                    },
                    [_vm._v("Profunda / Amplia")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("6.Clientes")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label:
                      "¿Tiene claro quienes serian los clientes de su negocio?"
                  }
                },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ci", value: "1" },
                      model: {
                        value: _vm.value.clientes,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "clientes", $$v)
                        },
                        expression: "value.clientes"
                      }
                    },
                    [_vm._v("No los puede describir con claridad")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ci", value: "2" },
                      model: {
                        value: _vm.value.clientes,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "clientes", $$v)
                        },
                        expression: "value.clientes"
                      }
                    },
                    [
                      _vm._v(
                        "Tiene alguna idea basica de las caracteristicas de sus\n          clientes"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "ci", value: "3" },
                      model: {
                        value: _vm.value.clientes,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "clientes", $$v)
                        },
                        expression: "value.clientes"
                      }
                    },
                    [_vm._v("Tiene muy claro quienes serian sus clientes")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "text-center" }, [
            _c("b", [_c("h4", [_vm._v("7.Recursos")])])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "12", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                {
                  attrs: { label: "¿Cuenta con algun recurso para su negocio?" }
                },
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "1" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Local")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "2" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Dinero")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "2" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Equipo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "2" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Personal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "2" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Materia prima")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "re", value: "2" },
                      model: {
                        value: _vm.value.recursos,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "recursos", $$v)
                        },
                        expression: "value.recursos"
                      }
                    },
                    [_vm._v("Conocimiento del negocio")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otroRecurso,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otroRecurso", $$v)
                      },
                      expression: "value.otroRecurso"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/familia/Familia.vue?vue&type=template&id=45bbd220& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Vive con alguien mas?" } },
                [
                  _c(
                    "b-form-select",
                    {
                      staticClass: "mb-3",
                      model: {
                        value: _vm.value.comparteHogar,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "comparteHogar", $$v)
                        },
                        expression: "value.comparteHogar"
                      }
                    },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "1" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Quien es el jefe del hogar?" } },
                [
                  _c(
                    "b-form-select",
                    {
                      staticClass: "mb-3",
                      model: {
                        value: _vm.value.jefeHogar,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "jefeHogar", $$v)
                        },
                        expression: "value.jefeHogar"
                      }
                    },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "1" } }, [
                        _vm._v("Usted")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("Padre")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "3" } }, [
                        _vm._v("Madre")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "4" } }, [
                        _vm._v("Hermano")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "5" } }, [
                        _vm._v("Pareja o conyuge")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "6" } }, [
                        _vm._v("Abuelo(a)")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "7" } }, [
                        _vm._v("Tio(a)")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "8" } }, [
                        _vm._v("Primos")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "8" } }, [
                        _vm._v("Otros parientes")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "8" } }, [
                        _vm._v("Otro")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Cual?" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otroJefeHogar,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otroJefeHogar", $$v)
                      },
                      expression: "value.otroJefeHogar"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.value.familiares, function(familiar) {
        return _c(
          "b-row",
          { key: familiar.id },
          [
            _c("b-col", { staticClass: "text-center", attrs: { sm: "12" } }, [
              _c("b", [_vm._v(" Familiar " + _vm._s(familiar.id))])
            ]),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Nombres y apellidos" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Edad" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Escolaridad" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Parentesco" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Ocupacion" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-col",
              {
                attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" }
              },
              [
                _c(
                  "b-form-group",
                  { attrs: { label: "Telefono" } },
                  [_c("b-form-input", { attrs: { type: "text" } })],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "text-center", attrs: { "align-self": "center" } },
            [
              _c(
                "b-button",
                {
                  on: {
                    click: function($event) {
                      return _vm.addFamiliar()
                    }
                  }
                },
                [_vm._v("Agregar familiar")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/formacion/Formacion.vue?vue&type=template&id=0e15ce8a& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Cual" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.formacionRequerida,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "formacionRequerida", $$v)
                      },
                      expression: "value.formacionRequerida"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Otra" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.otraFormacionRequerida,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "otraFormacionRequerida", $$v)
                      },
                      expression: "value.otraFormacionRequerida"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/general/General.vue?vue&type=template&id=71e92254& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "1" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Victima de la violencia")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "2" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Reinsertado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "3" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Adulto mayor")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "4" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("En situacion de pobreza")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "5" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Desmovilizado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "6" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Madre/Padre")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "7" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Cabeza de hogar")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "8" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Afectado por ola invernal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "9" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Joven en situacion de riesgo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "10" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Poblacion no ulnerable")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "general", value: "11" },
                      model: {
                        value: _vm.value.situacionGeneral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionGeneral", $$v)
                        },
                        expression: "value.situacionGeneral"
                      }
                    },
                    [_vm._v("Ninguna de las anteriores")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/laboral/Laboral.vue?vue&type=template&id=18875088& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "1" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Empleado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "2" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Desempleado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "3" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Independiente")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "4" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Vendedor informal")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "5" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Mototrabajador")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "trabajo", value: "6" },
                      model: {
                        value: _vm.value.situacionLaboral,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "situacionLaboral", $$v)
                        },
                        expression: "value.situacionLaboral"
                      }
                    },
                    [_vm._v("Otro")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/salud/Salud.vue?vue&type=template&id=7be21240& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                [
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "salud", value: "1" },
                      model: {
                        value: _vm.value.salud,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "salud", $$v)
                        },
                        expression: "value.salud"
                      }
                    },
                    [_vm._v("Regimen contributivo")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "salud", value: "2" },
                      model: {
                        value: _vm.value.salud,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "salud", $$v)
                        },
                        expression: "value.salud"
                      }
                    },
                    [_vm._v("Regimen subsidiado")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-radio",
                    {
                      attrs: { name: "salud", value: "3" },
                      model: {
                        value: _vm.value.salud,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "salud", $$v)
                        },
                        expression: "value.salud"
                      }
                    },
                    [_vm._v("Ninguno")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "EPS" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.eps,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "eps", $$v)
                      },
                      expression: "value.eps"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Tipo" } },
                [
                  _c(
                    "b-form-select",
                    {
                      staticClass: "mb-3",
                      model: {
                        value: _vm.value.tipoEps,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "tipoEps", $$v)
                        },
                        expression: "value.tipoEps"
                      }
                    },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "1" } }, [
                        _vm._v("Cotizante")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("Beneficiario")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Inscrito en sisben" } },
                [
                  _c(
                    "b-form-select",
                    {
                      staticClass: "mb-3",
                      model: {
                        value: _vm.value.sisben,
                        callback: function($$v) {
                          _vm.$set(_vm.value, "sisben", $$v)
                        },
                        expression: "value.sisben"
                      }
                    },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "1" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Nivel" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.value.nivelSisben,
                      callback: function($$v) {
                        _vm.$set(_vm.value, "nivelSisben", $$v)
                      },
                      expression: "value.nivelSisben"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/form/components/formularios/usuario/Usuario.vue?vue&type=template&id=4bdd7762& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { staticClass: "overflow-auto", staticStyle: { height: "65vh" } },
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Nombre y apellidos" } },
                [
                  _c("b-form-input", {
                    attrs: {
                      type: "text",
                      placeholder: "Ingrese su nombre y apellidos"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Fecha de nacimiento" } },
                [_c("b-form-datepicker", { staticClass: "mb-2" })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Genero" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "M" } }, [
                        _vm._v("Masculino")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "F" } }, [
                        _vm._v("Femenino")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Tipo de identificacion" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "CC" } }, [
                        _vm._v("Cedula de ciudadania")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "CE" } }, [
                        _vm._v("Cedula de extranjeria")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Nro de documento" } },
                [
                  _c("b-form-input", {
                    attrs: { type: "text", placeholder: "" }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Fecha de expedicion" } },
                [_c("b-form-datepicker", { staticClass: "mb-2" })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Lugar de expedicion" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Libreta militar No." } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Distrito No." } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Año" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Categoria" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "CC" } }, [
                        _vm._v("Primera")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "CE" } }, [
                        _vm._v("Segunda")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Lic. de conduccion" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Categoria de licencia" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Tiene vehiculo propio?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "center" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Tipo de vehiculo" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-select-option",
                        { attrs: { value: "carro" } },
                        [_vm._v("Carro")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "moto" } }, [
                        _vm._v("Moto")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Estado civil" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "1" } }, [
                        _vm._v("Soltero(a)")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("Casado(a)")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "3" } }, [
                        _vm._v("Union Libre")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("Viudo(a)")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "2" } }, [
                        _vm._v("Separado")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Nro de hijos" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Actualmente en embarazo" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Estado civil" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Direccion" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Barrio" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Comuna" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Estrato" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Celular" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Email" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Habla una segunda lengua?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Tiene tarjeta o licencia profesional?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Presenta algun tipo de discapacidad?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿De que tipo?" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Tiene personas a cargo?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Cuantas" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "Parentesco" } },
                [_c("b-form-input", { attrs: { type: "text" } })],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Victima de desplazamiento?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Se encuentra en inscrito en RUPD?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { sm: "auto", md: "6", lg: "4", "align-self": "start" } },
            [
              _c(
                "b-form-group",
                { attrs: { label: "¿Es beneficiario de algun programa?" } },
                [
                  _c(
                    "b-form-select",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "b-form-select-option",
                        { attrs: { value: null, disabled: "" } },
                        [_vm._v("-- Seleccione una opcion --")]
                      ),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "SI" } }, [
                        _vm._v("SI")
                      ]),
                      _vm._v(" "),
                      _c("b-form-select-option", { attrs: { value: "NO" } }, [
                        _vm._v("NO")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);