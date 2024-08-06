"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_css_overview_CSSOverviewPanel_js"], {
"./panels/css_overview/CSSOverviewPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewPanel: function() { return CSSOverviewPanel; }
});
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/components.js */ "./panels/css_overview/components/components.js");
/* harmony import */var _cssOverview_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cssOverview.css.js */ "./panels/css_overview/cssOverview.css.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./panels/css_overview/CSSOverviewCompletedView.js");
/* harmony import */var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./panels/css_overview/CSSOverviewModel.js");
/* harmony import */var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./panels/css_overview/CSSOverviewProcessingView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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








var _controller = /*#__PURE__*/ new WeakMap(), _startView = /*#__PURE__*/ new WeakMap(), _processingView = /*#__PURE__*/ new WeakMap(), _completedView = /*#__PURE__*/ new WeakMap(), _model = /*#__PURE__*/ new WeakMap(), _backgroundColors = /*#__PURE__*/ new WeakMap(), _textColors = /*#__PURE__*/ new WeakMap(), _fillColors = /*#__PURE__*/ new WeakMap(), _borderColors = /*#__PURE__*/ new WeakMap(), _fontInfo = /*#__PURE__*/ new WeakMap(), _mediaQueries = /*#__PURE__*/ new WeakMap(), _unusedDeclarations = /*#__PURE__*/ new WeakMap(), _elementCount = /*#__PURE__*/ new WeakMap(), _globalStyleStats = /*#__PURE__*/ new WeakMap(), _textColorContrastIssues = /*#__PURE__*/ new WeakMap(), _getModel = /*#__PURE__*/ new WeakSet(), _reset = /*#__PURE__*/ new WeakSet(), _requestNodeHighlight = /*#__PURE__*/ new WeakSet(), _renderInitialView = /*#__PURE__*/ new WeakSet(), _renderOverviewStartedView = /*#__PURE__*/ new WeakSet(), _renderOverviewCompletedView = /*#__PURE__*/ new WeakSet(), _startOverview = /*#__PURE__*/ new WeakSet(), _overviewCompleted = /*#__PURE__*/ new WeakSet();
var CSSOverviewPanel = /*#__PURE__*/ function(_UI_Panel_Panel) {
    "use strict";
    _inherits(CSSOverviewPanel, _UI_Panel_Panel);
    var _super = _create_super(CSSOverviewPanel);
    function CSSOverviewPanel(controller) {
        _class_call_check(this, CSSOverviewPanel);
        var _this;
        _this = _super.call(this, 'css-overview');
        _class_private_method_init(_assert_this_initialized(_this), _getModel);
        _class_private_method_init(_assert_this_initialized(_this), _reset);
        _class_private_method_init(_assert_this_initialized(_this), _requestNodeHighlight);
        _class_private_method_init(_assert_this_initialized(_this), _renderInitialView);
        _class_private_method_init(_assert_this_initialized(_this), _renderOverviewStartedView);
        _class_private_method_init(_assert_this_initialized(_this), _renderOverviewCompletedView);
        _class_private_method_init(_assert_this_initialized(_this), _startOverview);
        _class_private_method_init(_assert_this_initialized(_this), _overviewCompleted);
        _class_private_field_init(_assert_this_initialized(_this), _controller, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _startView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _processingView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _completedView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _backgroundColors, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _textColors, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _fillColors, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _borderColors, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _fontInfo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _mediaQueries, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _unusedDeclarations, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _elementCount, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _globalStyleStats, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _textColorContrastIssues, {
            writable: true,
            value: void 0
        });
        _this.element.classList.add('css-overview-panel');
        _class_private_field_set(_assert_this_initialized(_this), _controller, controller);
        _class_private_field_set(_assert_this_initialized(_this), _startView, new _components_components_js__WEBPACK_IMPORTED_MODULE_0__.CSSOverviewStartView.CSSOverviewStartView());
        _class_private_field_get(_this, _startView).addEventListener('overviewstartrequested', function() {
            return _class_private_field_get(_this, _controller).dispatchEventToListeners("RequestOverviewStart" /* Events.RequestOverviewStart */ );
        });
        _class_private_field_set(_assert_this_initialized(_this), _processingView, new _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_7__.CSSOverviewProcessingView(_class_private_field_get(_assert_this_initialized(_this), _controller)));
        _class_private_field_set(_assert_this_initialized(_this), _completedView, new _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewCompletedView(_class_private_field_get(_assert_this_initialized(_this), _controller)));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("RequestOverviewStart" /* Events.RequestOverviewStart */ , function(_event) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.UserMetrics.Action.CaptureCssOverviewClicked);
            void _class_private_method_get(_this, _startOverview, startOverview).call(_assert_this_initialized(_this));
        }, _assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("OverviewCompleted" /* Events.OverviewCompleted */ , _class_private_method_get(_assert_this_initialized(_this), _overviewCompleted, overviewCompleted), _assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("Reset" /* Events.Reset */ , _class_private_method_get(_assert_this_initialized(_this), _reset, reset), _assert_this_initialized(_this));
        _class_private_field_get(_this, _controller).addEventListener("RequestNodeHighlight" /* Events.RequestNodeHighlight */ , _class_private_method_get(_assert_this_initialized(_this), _requestNodeHighlight, requestNodeHighlight), _assert_this_initialized(_this));
        _class_private_method_get(_this, _reset, reset).call(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(CSSOverviewPanel, [
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                _class_private_field_get(this, _completedView).initializeModels(target);
                var model = target.model(_CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_6__.CSSOverviewModel);
                _class_private_field_set(this, _model, model);
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved() {}
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CSSOverviewPanel.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _cssOverview_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ]);
            }
        }
    ]);
    return CSSOverviewPanel;
} //# sourceMappingURL=CSSOverviewPanel.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.Panel);
function getModel() {
    if (!_class_private_field_get(this, _model)) {
        throw new Error('Did not retrieve model information yet.');
    }
    return _class_private_field_get(this, _model);
}
function reset() {
    _class_private_field_set(this, _backgroundColors, new Map());
    _class_private_field_set(this, _textColors, new Map());
    _class_private_field_set(this, _fillColors, new Map());
    _class_private_field_set(this, _borderColors, new Map());
    _class_private_field_set(this, _fontInfo, new Map());
    _class_private_field_set(this, _mediaQueries, new Map());
    _class_private_field_set(this, _unusedDeclarations, new Map());
    _class_private_field_set(this, _elementCount, 0);
    _class_private_field_set(this, _globalStyleStats, {
        styleRules: 0,
        inlineStyles: 0,
        externalSheets: 0,
        stats: {
            // Simple.
            type: 0,
            class: 0,
            id: 0,
            universal: 0,
            attribute: 0,
            // Non-simple.
            nonSimple: 0
        }
    });
    _class_private_field_set(this, _textColorContrastIssues, new Map());
    _class_private_method_get(this, _renderInitialView, renderInitialView).call(this);
}
function requestNodeHighlight(evt) {
    _class_private_method_get(this, _getModel, getModel).call(this).highlightNode(evt.data);
}
function renderInitialView() {
    _class_private_field_get(this, _processingView).hideWidget();
    _class_private_field_get(this, _completedView).hideWidget();
    this.contentElement.append(_class_private_field_get(this, _startView));
    _class_private_field_get(this, _startView).show();
}
function renderOverviewStartedView() {
    _class_private_field_get(this, _startView).hide();
    _class_private_field_get(this, _completedView).hideWidget();
    _class_private_field_get(this, _processingView).show(this.contentElement);
}
function renderOverviewCompletedView() {
    _class_private_field_get(this, _startView).hide();
    _class_private_field_get(this, _processingView).hideWidget();
    _class_private_field_get(this, _completedView).show(this.contentElement);
    _class_private_field_get(this, _completedView).setOverviewData({
        backgroundColors: _class_private_field_get(this, _backgroundColors),
        textColors: _class_private_field_get(this, _textColors),
        textColorContrastIssues: _class_private_field_get(this, _textColorContrastIssues),
        fillColors: _class_private_field_get(this, _fillColors),
        borderColors: _class_private_field_get(this, _borderColors),
        globalStyleStats: _class_private_field_get(this, _globalStyleStats),
        fontInfo: _class_private_field_get(this, _fontInfo),
        elementCount: _class_private_field_get(this, _elementCount),
        mediaQueries: _class_private_field_get(this, _mediaQueries),
        unusedDeclarations: _class_private_field_get(this, _unusedDeclarations)
    });
}
function startOverview() {
    return _startOverview1.apply(this, arguments);
}
function _startOverview1() {
    _startOverview1 = _async_to_generator(function() {
        var model, _ref, globalStyleStats, _ref_, elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, fontInfo, unusedDeclarations, mediaQueries;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _class_private_method_get(this, _renderOverviewStartedView, renderOverviewStartedView).call(this);
                    model = _class_private_method_get(this, _getModel, getModel).call(this);
                    return [
                        4,
                        Promise.all([
                            model.getGlobalStylesheetStats(),
                            model.getNodeStyleStats(),
                            model.getMediaQueries()
                        ])
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        3
                    ]), globalStyleStats = _ref[0], _ref_ = _ref[1], elementCount = _ref_.elementCount, backgroundColors = _ref_.backgroundColors, textColors = _ref_.textColors, textColorContrastIssues = _ref_.textColorContrastIssues, fillColors = _ref_.fillColors, borderColors = _ref_.borderColors, fontInfo = _ref_.fontInfo, unusedDeclarations = _ref_.unusedDeclarations, mediaQueries = _ref[2];
                    if (elementCount) {
                        _class_private_field_set(this, _elementCount, elementCount);
                    }
                    if (globalStyleStats) {
                        _class_private_field_set(this, _globalStyleStats, globalStyleStats);
                    }
                    if (mediaQueries) {
                        _class_private_field_set(this, _mediaQueries, mediaQueries);
                    }
                    if (backgroundColors) {
                        _class_private_field_set(this, _backgroundColors, backgroundColors);
                    }
                    if (textColors) {
                        _class_private_field_set(this, _textColors, textColors);
                    }
                    if (textColorContrastIssues) {
                        _class_private_field_set(this, _textColorContrastIssues, textColorContrastIssues);
                    }
                    if (fillColors) {
                        _class_private_field_set(this, _fillColors, fillColors);
                    }
                    if (borderColors) {
                        _class_private_field_set(this, _borderColors, borderColors);
                    }
                    if (fontInfo) {
                        _class_private_field_set(this, _fontInfo, fontInfo);
                    }
                    if (unusedDeclarations) {
                        _class_private_field_set(this, _unusedDeclarations, unusedDeclarations);
                    }
                    _class_private_field_get(this, _controller).dispatchEventToListeners("OverviewCompleted" /* Events.OverviewCompleted */ );
                    return [
                        2
                    ];
            }
        });
    });
    return _startOverview1.apply(this, arguments);
}
function overviewCompleted() {
    _class_private_method_get(this, _renderOverviewCompletedView, renderOverviewCompletedView).call(this);
}


}),
"./panels/css_overview/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSSOverviewStartView: function() { return /* reexport module object */ _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _CSSOverviewStartView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewStartView.js */ "./panels/css_overview/components/CSSOverviewStartView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=components.js.map


}),
"./panels/css_overview/cssOverview.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.css-overview-panel {\n  overflow: hidden;\n}\n\ndevtools-css-overview-start-view {\n  overflow: auto;\n}\n\n/*# sourceURL=cssOverview.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);