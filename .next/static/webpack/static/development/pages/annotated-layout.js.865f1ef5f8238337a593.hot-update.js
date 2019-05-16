webpackHotUpdate("static/development/pages/annotated-layout.js",{

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");










function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    mutation repaymentUpdate($input: repaymentInput!) {\n        repaymentUpdate(input: $input) {\n        userErrors {\n          field\n          message\n        }\n        paymentParam {\n          interest\n          period\n          frequency\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var UPDATE_REPAYMENT = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());

var AnnotatedLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AnnotatedLayout, _React$Component);

  function AnnotatedLayout() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnnotatedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AnnotatedLayout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      interest: '10%',
      period: 4,
      frequency: 1,
      showToast: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        interest: _this.state.interest,
        period: _this.state.period,
        frequency: _this.state.frequency
      });

      console.log('submission', _this.state);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AnnotatedLayout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var interest = this.state.interest;
      var period = this.state.period;
      var frequency = this.state.frequency;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
        mutation: UPDATE_REPAYMENT
      }, function (handleSubmit, _ref) {
        var error = _ref.error,
            data = _ref.data;
        var showError = error && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Banner"], {
          status: "critical"
        }, error.message);
        var showToast = data && data.repaymentUpdate && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
          content: "Sucessfully updated",
          onDismiss: function onDismiss() {
            return _this2.setState({
              showToast: false
            });
          }
        });
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], {
          onSubmit: _this2.handleSubmit
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, showToast, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, showError), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].AnnotatedSection, {
          title: "Default interest rate",
          description: "This interest rate will be used to calculate the payments of your purchase."
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          sectioned: true
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          value: interest,
          onChange: _this2.handleChange('interest'),
          label: "Interest rate",
          type: "interest"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].AnnotatedSection, {
          title: "Default financing period",
          description: "This financing period is the length of the reimboursment period. (in years)"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          sectioned: true
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          value: period,
          onChange: _this2.handleChange('period'),
          label: "Payback period",
          type: "period"
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].AnnotatedSection, {
          title: "Default payment frequency",
          description: "This payment frequency is the number of payments for each year"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          sectioned: true
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          value: frequency,
          onChange: _this2.handleChange('frequency'),
          label: "Payment frequency",
          type: "frequency"
        })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], {
          distribution: "trailing"
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["PageActions"], {
          primaryAction: [{
            content: 'Save',
            onAction: function onAction() {
              var repaymentInput = {
                interest: interest,
                period: period,
                frequency: frequency
              };
              handleSubmit({
                variables: {
                  input: repaymentInput
                }
              });
            }
          }]
        }))));
      });
    }
  }]);

  return AnnotatedLayout;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ })

})
//# sourceMappingURL=annotated-layout.js.865f1ef5f8238337a593.hot-update.js.map