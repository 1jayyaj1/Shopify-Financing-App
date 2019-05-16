webpackHotUpdate("static/development/pages/edit-products.js",{

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
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
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_12__);










function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    mutation productVariantUpdate($input: ProductVariantInput!) {\n      productVariantUpdate(input: $input) {\n        userErrors {\n          field\n          message\n        }\n        product {\n          title\n        }\n        productVariant {\n          id\n          price\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_10___default()(_templateObject());

var EditProduct =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EditProduct, _React$Component);

  function EditProduct() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EditProduct)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      interest: 10,
      period: 4,
      frequency: 2,
      price: '',
      variantId: '',
      sliderRate: 1,
      sliderPeriod: 1,
      sliderFrequency: 1,
      showToast: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSliderRateChange", function (sliderRate) {
      _this.itemToBeConsumed();

      _this.setState({
        sliderRate: sliderRate
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSliderPeriodChange", function (sliderPeriod) {
      _this.itemToBeConsumed();

      _this.setState({
        sliderPeriod: sliderPeriod
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSliderFrequencyChange", function (sliderFrequency) {
      _this.itemToBeConsumed();

      _this.setState({
        sliderFrequency: sliderFrequency
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "itemToBeConsumed", function () {
      var item = store_js__WEBPACK_IMPORTED_MODULE_12___default.a.get('item');
      var price = item.variants.edges[0].node.price;
      var variantId = item.variants.edges[0].node.id;
      var r = _this.state.sliderRate / _this.state.sliderFrequency / 100;
      console.log(r);
      var n = _this.state.sliderFrequency * _this.state.sliderPeriod;
      console.log(n);
      var ordinaryAnnuity = (r * price / (1 - Math.pow(1 + r, -n))).toFixed(2);
      console.log(ordinaryAnnuity);

      _this.setState({
        price: price,
        variantId: variantId,
        ordinaryAnnuity: ordinaryAnnuity
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        discount: this.itemToBeConsumed()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          price = _this$state.price,
          discount = _this$state.discount,
          variantId = _this$state.variantId;
      var suffixStyles = {
        minWidth: '24px',
        textAlign: 'right'
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_11__["Mutation"], {
        mutation: UPDATE_PRICE
      }, function (handleSubmit, _ref) {
        var error = _ref.error,
            data = _ref.data;
        var showError = error && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Banner"], {
          status: "critical"
        }, error.message);
        var showToast = data && data.productVariantUpdate && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
          content: "Sucessfully updated",
          onDismiss: function onDismiss() {
            return _this2.setState({
              showToast: false
            });
          }
        });
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, showToast, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, showError), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DisplayText"], {
          size: "large"
        }, name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          sectioned: true
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          prefix: "$",
          value: price,
          disabled: true,
          label: "Original price",
          type: "price"
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          prefix: "$",
          value: _this2.state.ordinaryAnnuity,
          onChange: _this2.handleChange('discount'),
          label: "Discounted price",
          type: "discount"
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["RangeSlider"], {
          label: "Interest rate",
          min: 0,
          max: 10,
          step: 0.1,
          value: _this2.state.sliderRate,
          onChange: _this2.handleSliderRateChange,
          suffix: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            style: suffixStyles
          }, _this2.state.sliderRate, "%")
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["RangeSlider"], {
          label: "Payback period",
          min: 0,
          max: 10,
          step: 1,
          value: _this2.state.sliderPeriod,
          onChange: _this2.handleSliderPeriodChange,
          suffix: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            style: suffixStyles
          }, _this2.state.sliderPeriod, "  years")
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["RangeSlider"], {
          label: "Payment frequency",
          min: 0,
          max: 10,
          step: 1,
          value: _this2.state.sliderFrequency,
          onChange: _this2.handleSliderFrequencyChange,
          suffix: react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
            style: suffixStyles
          }, _this2.state.sliderFrequency, "/year")
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["PageActions"], {
          primaryAction: [{
            content: 'Save',
            onAction: function onAction() {
              var productVariableInput = {
                id: variantId,
                price: discount
              };
              handleSubmit({
                variables: {
                  input: productVariableInput
                }
              });
            }
          }],
          secondaryActions: [{
            content: 'Remove discount'
          }]
        })))));
      });
    }
  }]);

  return EditProduct;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ })

})
//# sourceMappingURL=edit-products.js.edd763ff0dc4eaefb838.hot-update.js.map