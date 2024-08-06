"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_FontEditorUnitConverter_js"], {
"./panels/css_overview/CSSOverviewController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OverviewController: function() { return OverviewController; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}


var _checkUrlAndResetIfChanged = /*#__PURE__*/ new WeakSet();
var OverviewController = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(OverviewController, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(OverviewController);
    function OverviewController() {
        _class_call_check(this, OverviewController);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _checkUrlAndResetIfChanged);
        _define_property(_assert_this_initialized(_this), "currentUrl", void 0);
        _this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */ , _class_private_method_get(_assert_this_initialized(_this), _checkUrlAndResetIfChanged, checkUrlAndResetIfChanged), _assert_this_initialized(_this));
        return _this;
    }
    return OverviewController;
} //# sourceMappingURL=CSSOverviewController.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function checkUrlAndResetIfChanged() {
    if (this.currentUrl === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()) {
        return;
    }
    this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
    this.dispatchEventToListeners("Reset" /* Events.Reset */ );
}


}),
"./panels/css_overview/css_overview.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewCompletedView: function() { return /* reexport module object */ _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__; },
  CSSOverviewController: function() { return /* reexport module object */ _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__; },
  CSSOverviewModel: function() { return /* reexport module object */ _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  CSSOverviewPanel: function() { return /* reexport module object */ _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSOverviewProcessingView: function() { return /* reexport module object */ _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSOverviewSidebarPanel: function() { return /* reexport module object */ _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__; },
  CSSOverviewUnusedDeclarations: function() { return /* reexport module object */ _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./panels/css_overview/CSSOverviewController.js");
/* harmony import */var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./panels/css_overview/CSSOverviewUnusedDeclarations.js");
/* harmony import */var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./panels/css_overview/CSSOverviewModel.js");
/* harmony import */var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./panels/css_overview/CSSOverviewProcessingView.js");
/* harmony import */var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./panels/css_overview/CSSOverviewCompletedView.js");
/* harmony import */var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./panels/css_overview/CSSOverviewSidebarPanel.js");
/* harmony import */var _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewPanel.js */ "./panels/css_overview/CSSOverviewPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=css_overview.js.map


}),
"./ui/legacy/components/inline_editor/FontEditorUnitConverter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getUnitConversionMultiplier: function() { return getUnitConversionMultiplier; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/css_overview/css_overview.js */ "./panels/css_overview/css_overview.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var computedArrayFontSizeIndex = 6;
function getPxMultiplier() {
    return 1;
}
function getEmMultiplier(isFontSizeProperty) {
    return _getEmMultiplier.apply(this, arguments);
}
function _getEmMultiplier() {
    _getEmMultiplier = _async_to_generator(function(isFontSizeProperty) {
        var selectedNode, currentFontSize, _SDK_TargetManager_TargetManager_instance_models, model, fontSizeNodeId, computedFontSize, computedFontSizeValue;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
                    if (!(selectedNode && selectedNode.parentNode && selectedNode.nodeName() !== 'HTML')) return [
                        3,
                        2
                    ];
                    _SDK_TargetManager_TargetManager_instance_models = _sliced_to_array(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel), 1), model = _SDK_TargetManager_TargetManager_instance_models[0];
                    fontSizeNodeId = isFontSizeProperty ? selectedNode.parentNode.id : selectedNode.id;
                    return [
                        4,
                        model.getComputedStyleForNode(fontSizeNodeId).then(findFontSizeValue)
                    ];
                case 1:
                    computedFontSize = _state.sent();
                    computedFontSizeValue = computedFontSize.replace(/[a-z]/g, '');
                    currentFontSize = parseFloat(computedFontSizeValue);
                    return [
                        3,
                        3
                    ];
                case 2:
                    currentFontSize = 16;
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        currentFontSize
                    ];
            }
        });
    });
    return _getEmMultiplier.apply(this, arguments);
}
function getRemMultiplier() {
    return _getRemMultiplier.apply(this, arguments);
}
function _getRemMultiplier() {
    _getRemMultiplier = _async_to_generator(function() {
        var selectedNode, htmlNode, _SDK_TargetManager_TargetManager_instance_models, model, computedRootFontSize, rootFontSizeValue, rootFontSize;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
                    htmlNode = findHtmlNode(selectedNode);
                    if (!htmlNode || !htmlNode.id) {
                        return [
                            2,
                            16
                        ];
                    }
                    _SDK_TargetManager_TargetManager_instance_models = _sliced_to_array(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel), 1), model = _SDK_TargetManager_TargetManager_instance_models[0];
                    return [
                        4,
                        model.getComputedStyleForNode(htmlNode.id).then(findFontSizeValue)
                    ];
                case 1:
                    computedRootFontSize = _state.sent();
                    rootFontSizeValue = computedRootFontSize.replace(/[a-z]/g, '');
                    rootFontSize = parseFloat(rootFontSizeValue);
                    return [
                        2,
                        rootFontSize
                    ];
            }
        });
    });
    return _getRemMultiplier.apply(this, arguments);
}
function getPercentMultiplier(isFontSizeProperty) {
    return _getPercentMultiplier.apply(this, arguments);
}
function _getPercentMultiplier() {
    _getPercentMultiplier = _async_to_generator(function(isFontSizeProperty) {
        var emMultiplier, percMultiplier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getEmMultiplier(isFontSizeProperty)
                    ];
                case 1:
                    emMultiplier = _state.sent();
                    percMultiplier = emMultiplier / 100;
                    return [
                        2,
                        percMultiplier
                    ];
            }
        });
    });
    return _getPercentMultiplier.apply(this, arguments);
}
function getVhMultiplier() {
    return _getVhMultiplier.apply(this, arguments);
}
function _getVhMultiplier() {
    _getVhMultiplier = _async_to_generator(function() {
        var viewportObject, viewportHeight, vhMultiplier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getViewportObject()
                    ];
                case 1:
                    viewportObject = _state.sent();
                    if (!viewportObject) {
                        return [
                            2,
                            1
                        ];
                    }
                    viewportHeight = viewportObject.height;
                    vhMultiplier = viewportHeight / 100;
                    return [
                        2,
                        vhMultiplier
                    ];
            }
        });
    });
    return _getVhMultiplier.apply(this, arguments);
}
function getVwMultiplier() {
    return _getVwMultiplier.apply(this, arguments);
}
function _getVwMultiplier() {
    _getVwMultiplier = _async_to_generator(function() {
        var viewportObject, viewportWidth, vwMultiplier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getViewportObject()
                    ];
                case 1:
                    viewportObject = _state.sent();
                    if (!viewportObject) {
                        return [
                            2,
                            1
                        ];
                    }
                    viewportWidth = viewportObject.width;
                    vwMultiplier = viewportWidth / 100;
                    return [
                        2,
                        vwMultiplier
                    ];
            }
        });
    });
    return _getVwMultiplier.apply(this, arguments);
}
function getVminMultiplier() {
    return _getVminMultiplier.apply(this, arguments);
}
function _getVminMultiplier() {
    _getVminMultiplier = _async_to_generator(function() {
        var viewportObject, viewportWidth, viewportHeight, minViewportSize, vminMultiplier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getViewportObject()
                    ];
                case 1:
                    viewportObject = _state.sent();
                    if (!viewportObject) {
                        return [
                            2,
                            1
                        ];
                    }
                    viewportWidth = viewportObject.width;
                    viewportHeight = viewportObject.height;
                    minViewportSize = Math.min(viewportWidth, viewportHeight);
                    vminMultiplier = minViewportSize / 100;
                    return [
                        2,
                        vminMultiplier
                    ];
            }
        });
    });
    return _getVminMultiplier.apply(this, arguments);
}
function getVmaxMultiplier() {
    return _getVmaxMultiplier.apply(this, arguments);
}
function _getVmaxMultiplier() {
    _getVmaxMultiplier = _async_to_generator(function() {
        var viewportObject, viewportWidth, viewportHeight, maxViewportSize, vmaxMultiplier;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getViewportObject()
                    ];
                case 1:
                    viewportObject = _state.sent();
                    if (!viewportObject) {
                        return [
                            2,
                            1
                        ];
                    }
                    viewportWidth = viewportObject.width;
                    viewportHeight = viewportObject.height;
                    maxViewportSize = Math.max(viewportWidth, viewportHeight);
                    vmaxMultiplier = maxViewportSize / 100;
                    return [
                        2,
                        vmaxMultiplier
                    ];
            }
        });
    });
    return _getVmaxMultiplier.apply(this, arguments);
}
function getCmMultiplier() {
    return 37.795;
}
function getMmMultiplier() {
    return 3.7795;
}
function getInMultiplier() {
    return 96;
}
function getPtMultiplier() {
    return 4 / 3;
}
function getPcMultiplier() {
    return 16;
}
function findFontSizeValue(computedObject) {
    var computedArray = computedObject.computedStyle;
    var index = computedArrayFontSizeIndex;
    if (computedArray[index].name && computedArray[index].name !== 'font-size') {
        for(var i = 0; i < computedArray.length; i++){
            if (computedArray[i].name === 'font-size') {
                index = i;
                break;
            }
        }
    }
    return computedArray[index].value;
}
function findHtmlNode(selectedNode) {
    var node = selectedNode;
    while(node && node.nodeName() !== 'HTML'){
        if (node.parentNode) {
            node = node.parentNode;
        } else {
            break;
        }
    }
    return node;
}
var widthEvaluateParams = {
    expression: 'window.innerWidth',
    includeCommandLineAPI: false,
    silent: true,
    returnByValue: false,
    generatePreview: false,
    userGesture: false,
    awaitPromise: true,
    throwOnSideEffect: false,
    disableBreaks: true,
    replMode: false,
    allowUnsafeEvalBlockedByCSP: false
};
var heightEvaluateParams = {
    expression: 'window.innerHeight',
    includeCommandLineAPI: false,
    silent: true,
    returnByValue: false,
    generatePreview: false,
    userGesture: false,
    awaitPromise: true,
    throwOnSideEffect: false,
    disableBreaks: true,
    replMode: false,
    allowUnsafeEvalBlockedByCSP: false
};
function getViewportObject() {
    return _getViewportObject.apply(this, arguments);
}
function _getViewportObject() {
    _getViewportObject = _async_to_generator(function() {
        var currentExecutionContext, width, height, widthObject, heightObject, selectedNode, pageLayout, zoom;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    currentExecutionContext = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
                    if (!currentExecutionContext) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        currentExecutionContext.evaluate(widthEvaluateParams, false, false)
                    ];
                case 1:
                    widthObject = _state.sent();
                    return [
                        4,
                        currentExecutionContext.evaluate(heightEvaluateParams, false, false)
                    ];
                case 2:
                    heightObject = _state.sent();
                    if ('error' in widthObject || 'error' in heightObject) {
                        return [
                            2,
                            null
                        ];
                    }
                    if (widthObject.object) {
                        width = widthObject.object.value;
                    }
                    if (heightObject.object) {
                        height = heightObject.object.value;
                    }
                    _state.label = 3;
                case 3:
                    if (!(width === undefined || height === undefined)) return [
                        3,
                        5
                    ];
                    selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
                    if (!selectedNode) {
                        return [
                            2,
                            null
                        ];
                    }
                    return [
                        4,
                        selectedNode.domModel().target().pageAgent().invoke_getLayoutMetrics()
                    ];
                case 4:
                    pageLayout = _state.sent();
                    zoom = pageLayout.visualViewport.zoom ? pageLayout.visualViewport.zoom : 1;
                    height = pageLayout.visualViewport.clientHeight / zoom;
                    width = pageLayout.visualViewport.clientWidth / zoom;
                    _state.label = 5;
                case 5:
                    return [
                        2,
                        {
                            width: width,
                            height: height
                        }
                    ];
            }
        });
    });
    return _getViewportObject.apply(this, arguments);
}
var unitConversionMap = new Map();
unitConversionMap.set('px', getPxMultiplier);
unitConversionMap.set('em', getEmMultiplier);
unitConversionMap.set('rem', getRemMultiplier);
unitConversionMap.set('%', getPercentMultiplier);
unitConversionMap.set('vh', getVhMultiplier);
unitConversionMap.set('vw', getVwMultiplier);
unitConversionMap.set('vmin', getVminMultiplier);
unitConversionMap.set('vmax', getVmaxMultiplier);
unitConversionMap.set('cm', getCmMultiplier);
unitConversionMap.set('mm', getMmMultiplier);
unitConversionMap.set('in', getInMultiplier);
unitConversionMap.set('pt', getPtMultiplier);
unitConversionMap.set('pc', getPcMultiplier);
function getUnitConversionMultiplier(prevUnit, newUnit, isFontSize) {
    return _getUnitConversionMultiplier.apply(this, arguments);
} //# sourceMappingURL=FontEditorUnitConverter.js.map
function _getUnitConversionMultiplier() {
    _getUnitConversionMultiplier = _async_to_generator(function(prevUnit, newUnit, isFontSize) {
        var prevUnitMultiplier, newUnitMultiplier, prevUnitFunction, newUnitFunction;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (prevUnit === '') {
                        prevUnit = 'em';
                    }
                    if (newUnit === '') {
                        newUnit = 'em';
                    }
                    prevUnitFunction = unitConversionMap.get(prevUnit);
                    newUnitFunction = unitConversionMap.get(newUnit);
                    if (!(prevUnitFunction && newUnitFunction)) return [
                        3,
                        9
                    ];
                    if (!(prevUnit === 'em' || prevUnit === '%')) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        prevUnitFunction(isFontSize)
                    ];
                case 1:
                    prevUnitMultiplier = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        prevUnitFunction()
                    ];
                case 3:
                    prevUnitMultiplier = _state.sent();
                    _state.label = 4;
                case 4:
                    if (!(newUnit === 'em' || newUnit === '%')) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        newUnitFunction(isFontSize)
                    ];
                case 5:
                    newUnitMultiplier = _state.sent();
                    return [
                        3,
                        8
                    ];
                case 6:
                    return [
                        4,
                        newUnitFunction()
                    ];
                case 7:
                    newUnitMultiplier = _state.sent();
                    _state.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    return [
                        2,
                        1
                    ];
                case 10:
                    return [
                        2,
                        prevUnitMultiplier / newUnitMultiplier
                    ];
            }
        });
    });
    return _getUnitConversionMultiplier.apply(this, arguments);
}


}),

}]);