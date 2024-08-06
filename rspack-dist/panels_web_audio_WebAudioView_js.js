"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_WebAudioView_js"], {
"./panels/web_audio/AudioContextContentBuilder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContextDetailBuilder: function() { return ContextDetailBuilder; },
  ContextSummaryBuilder: function() { return ContextSummaryBuilder; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  <div class="context-detail-header">\n  <div class="context-detail-title">',
        '</div>\n  <div class="context-detail-subtitle">',
        "</div>\n  </div>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n  <div class="context-detail-row">\n  <div class="context-detail-row-entry">',
        '</div>\n  <div class="context-detail-row-value">',
        "</div>\n  </div>\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n  <div class="context-summary-container">\n  <span>',
        ": ",
        " s</span>\n  <span>❘</span>\n  <span>",
        ": μ = ",
        " ms, σ = ",
        " ms</span>\n  <span>❘</span>\n  <span>",
        ": ",
        " %</span>\n  </div>\n  "
    ], [
        '\n  <div class="context-summary-container">\n  <span>',
        ": ",
        " s</span>\n  <span>\\u2758</span>\n  <span>",
        ": μ = ",
        " ms, σ = ",
        " ms</span>\n  <span>\\u2758</span>\n  <span>",
        ": ",
        " %</span>\n  </div>\n  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}


var UIStrings = {
    /**
     *@description The current state of an item
     */ state: 'State',
    /**
     *@description Text in Audio Context Content Builder
     */ sampleRate: 'Sample Rate',
    /**
     *@description Text in Audio Context Content Builder
     */ callbackBufferSize: 'Callback Buffer Size',
    /**
     * @description Label in the Audio Context Content Builder for the maximum number of output channels
     * that this Audio Context has.
     */ maxOutputChannels: 'Max Output Channels',
    /**
     *@description Text in Audio Context Content Builder
     */ currentTime: 'Current Time',
    /**
     *@description Text in Audio Context Content Builder
     */ callbackInterval: 'Callback Interval',
    /**
     *@description Text in Audio Context Content Builder
     */ renderCapacity: 'Render Capacity'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/web_audio/AudioContextContentBuilder.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ContextDetailBuilder = /*#__PURE__*/ function() {
    "use strict";
    function ContextDetailBuilder(context) {
        _class_call_check(this, ContextDetailBuilder);
        _define_property(this, "fragment", void 0);
        _define_property(this, "container", void 0);
        this.fragment = document.createDocumentFragment();
        this.container = document.createElement('div');
        this.container.classList.add('context-detail-container');
        this.fragment.appendChild(this.container);
        this.build(context);
    }
    _create_class(ContextDetailBuilder, [
        {
            key: "build",
            value: function build(context) {
                var title = context.contextType === 'realtime' ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('AudioContext') : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('OfflineAudioContext');
                this.addTitle(title, context.contextId);
                this.addEntry(i18nString(UIStrings.state), context.contextState);
                this.addEntry(i18nString(UIStrings.sampleRate), context.sampleRate, 'Hz');
                if (context.contextType === 'realtime') {
                    this.addEntry(i18nString(UIStrings.callbackBufferSize), context.callbackBufferSize, 'frames');
                }
                this.addEntry(i18nString(UIStrings.maxOutputChannels), context.maxOutputChannelCount, 'ch');
            }
        },
        {
            key: "addTitle",
            value: function addTitle(title, subtitle) {
                this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject(), title, subtitle));
            }
        },
        {
            key: "addEntry",
            value: function addEntry(entry, value, unit) {
                var valueWithUnit = value + (unit ? " ".concat(unit) : '');
                this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject1(), entry, valueWithUnit));
            }
        },
        {
            key: "getFragment",
            value: function getFragment() {
                return this.fragment;
            }
        }
    ]);
    return ContextDetailBuilder;
}();
var ContextSummaryBuilder = /*#__PURE__*/ function() {
    "use strict";
    function ContextSummaryBuilder(contextId, contextRealtimeData) {
        _class_call_check(this, ContextSummaryBuilder);
        _define_property(this, "fragment", void 0);
        var time = contextRealtimeData.currentTime.toFixed(3);
        var mean = (contextRealtimeData.callbackIntervalMean * 1000).toFixed(3);
        var stddev = (Math.sqrt(contextRealtimeData.callbackIntervalVariance) * 1000).toFixed(3);
        var capacity = (contextRealtimeData.renderCapacity * 100).toFixed(3);
        this.fragment = document.createDocumentFragment();
        this.fragment.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject2(), i18nString(UIStrings.currentTime), time, i18nString(UIStrings.callbackInterval), mean, stddev, i18nString(UIStrings.renderCapacity), capacity));
    }
    _create_class(ContextSummaryBuilder, [
        {
            key: "getFragment",
            value: function getFragment() {
                return this.fragment;
            }
        }
    ]);
    return ContextSummaryBuilder;
} //# sourceMappingURL=AudioContextContentBuilder.js.map
();


}),
"./panels/web_audio/WebAudioView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WebAudioView: function() { return WebAudioView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioContextContentBuilder.js */ "./panels/web_audio/AudioContextContentBuilder.js");
/* harmony import */var _AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioContextSelector.js */ "./panels/web_audio/AudioContextSelector.js");
/* harmony import */var _graph_visualizer_graph_visualizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph_visualizer/graph_visualizer.js */ "./panels/web_audio/graph_visualizer/graph_visualizer.js");
/* harmony import */var _webAudio_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webAudio.css.js */ "./panels/web_audio/webAudio.css.js");
/* harmony import */var _WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebAudioModel.js */ "./panels/web_audio/WebAudioModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  <div>\n  <p>",
        "</p>\n  </div>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     *@description Text in Web Audio View
     */ openAPageThatUsesWebAudioApiTo: 'Open a page that uses Web Audio API to start monitoring.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/web_audio/WebAudioView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var WebAudioView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(WebAudioView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(WebAudioView);
    function WebAudioView() {
        _class_call_check(this, WebAudioView);
        var _this;
        _this = _super.call(this, true, 1000);
        _define_property(_assert_this_initialized(_this), "contextSelector", void 0);
        _define_property(_assert_this_initialized(_this), "contentContainer", void 0);
        _define_property(_assert_this_initialized(_this), "detailViewContainer", void 0);
        _define_property(_assert_this_initialized(_this), "graphManager", void 0);
        _define_property(_assert_this_initialized(_this), "landingPage", void 0);
        _define_property(_assert_this_initialized(_this), "summaryBarContainer", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.panel('web-audio').track({
            resize: true
        })));
        _this.element.classList.add('web-audio-drawer');
        // Creates the toolbar.
        var toolbarContainer = _this.contentElement.createChild('div', 'web-audio-toolbar-container vbox');
        _this.contextSelector = new _AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__.AudioContextSelector();
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('web-audio-toolbar', toolbarContainer);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar.createActionButtonForId('components.collect-garbage'));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_this.contextSelector.toolbarItem());
        toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()));
        // Create content container
        _this.contentContainer = _this.contentElement.createChild('div', 'web-audio-content-container vbox flex-auto');
        // Creates the detail view.
        _this.detailViewContainer = _this.contentContainer.createChild('div', 'web-audio-details-container vbox flex-auto');
        _this.graphManager = new _graph_visualizer_graph_visualizer_js__WEBPACK_IMPORTED_MODULE_6__.GraphManager.GraphManager();
        // Creates the landing page.
        _this.landingPage = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        _this.landingPage.contentElement.classList.add('web-audio-landing-page', 'fill');
        _this.landingPage.contentElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.html(_templateObject(), i18nString(UIStrings.openAPageThatUsesWebAudioApiTo)));
        _this.landingPage.show(_this.detailViewContainer);
        // Creates the summary bar.
        _this.summaryBarContainer = _this.contentContainer.createChild('div', 'web-audio-summary-container');
        _this.contextSelector.addEventListener("ContextSelected" /* SelectorEvents.ContextSelected */ , function(event) {
            var context = event.data;
            if (context) {
                _this.updateDetailView(context);
            }
            void _this.doUpdate();
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeModels(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(WebAudioView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(WebAudioView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _webAudio_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        this.addEventListeners(model);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        this.removeEventListeners(model);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(webAudioModel) {
                if (this.isShowing()) {
                    this.addEventListeners(webAudioModel);
                }
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(webAudioModel) {
                this.removeEventListeners(webAudioModel);
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.pollRealtimeData()
                                ];
                            case 1:
                                _state.sent();
                                _this.update();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addEventListeners",
            value: function addEventListeners(webAudioModel) {
                webAudioModel.ensureEnabled();
                webAudioModel.addEventListener("ContextCreated" /* ModelEvents.ContextCreated */ , this.contextCreated, this);
                webAudioModel.addEventListener("ContextDestroyed" /* ModelEvents.ContextDestroyed */ , this.contextDestroyed, this);
                webAudioModel.addEventListener("ContextChanged" /* ModelEvents.ContextChanged */ , this.contextChanged, this);
                webAudioModel.addEventListener("ModelReset" /* ModelEvents.ModelReset */ , this.reset, this);
                webAudioModel.addEventListener("ModelSuspend" /* ModelEvents.ModelSuspend */ , this.suspendModel, this);
                webAudioModel.addEventListener("AudioListenerCreated" /* ModelEvents.AudioListenerCreated */ , this.audioListenerCreated, this);
                webAudioModel.addEventListener("AudioListenerWillBeDestroyed" /* ModelEvents.AudioListenerWillBeDestroyed */ , this.audioListenerWillBeDestroyed, this);
                webAudioModel.addEventListener("AudioNodeCreated" /* ModelEvents.AudioNodeCreated */ , this.audioNodeCreated, this);
                webAudioModel.addEventListener("AudioNodeWillBeDestroyed" /* ModelEvents.AudioNodeWillBeDestroyed */ , this.audioNodeWillBeDestroyed, this);
                webAudioModel.addEventListener("AudioParamCreated" /* ModelEvents.AudioParamCreated */ , this.audioParamCreated, this);
                webAudioModel.addEventListener("AudioParamWillBeDestroyed" /* ModelEvents.AudioParamWillBeDestroyed */ , this.audioParamWillBeDestroyed, this);
                webAudioModel.addEventListener("NodesConnected" /* ModelEvents.NodesConnected */ , this.nodesConnected, this);
                webAudioModel.addEventListener("NodesDisconnected" /* ModelEvents.NodesDisconnected */ , this.nodesDisconnected, this);
                webAudioModel.addEventListener("NodeParamConnected" /* ModelEvents.NodeParamConnected */ , this.nodeParamConnected, this);
                webAudioModel.addEventListener("NodeParamDisconnected" /* ModelEvents.NodeParamDisconnected */ , this.nodeParamDisconnected, this);
            }
        },
        {
            key: "removeEventListeners",
            value: function removeEventListeners(webAudioModel) {
                webAudioModel.removeEventListener("ContextCreated" /* ModelEvents.ContextCreated */ , this.contextCreated, this);
                webAudioModel.removeEventListener("ContextDestroyed" /* ModelEvents.ContextDestroyed */ , this.contextDestroyed, this);
                webAudioModel.removeEventListener("ContextChanged" /* ModelEvents.ContextChanged */ , this.contextChanged, this);
                webAudioModel.removeEventListener("ModelReset" /* ModelEvents.ModelReset */ , this.reset, this);
                webAudioModel.removeEventListener("ModelSuspend" /* ModelEvents.ModelSuspend */ , this.suspendModel, this);
                webAudioModel.removeEventListener("AudioListenerCreated" /* ModelEvents.AudioListenerCreated */ , this.audioListenerCreated, this);
                webAudioModel.removeEventListener("AudioListenerWillBeDestroyed" /* ModelEvents.AudioListenerWillBeDestroyed */ , this.audioListenerWillBeDestroyed, this);
                webAudioModel.removeEventListener("AudioNodeCreated" /* ModelEvents.AudioNodeCreated */ , this.audioNodeCreated, this);
                webAudioModel.removeEventListener("AudioNodeWillBeDestroyed" /* ModelEvents.AudioNodeWillBeDestroyed */ , this.audioNodeWillBeDestroyed, this);
                webAudioModel.removeEventListener("AudioParamCreated" /* ModelEvents.AudioParamCreated */ , this.audioParamCreated, this);
                webAudioModel.removeEventListener("AudioParamWillBeDestroyed" /* ModelEvents.AudioParamWillBeDestroyed */ , this.audioParamWillBeDestroyed, this);
                webAudioModel.removeEventListener("NodesConnected" /* ModelEvents.NodesConnected */ , this.nodesConnected, this);
                webAudioModel.removeEventListener("NodesDisconnected" /* ModelEvents.NodesDisconnected */ , this.nodesDisconnected, this);
                webAudioModel.removeEventListener("NodeParamConnected" /* ModelEvents.NodeParamConnected */ , this.nodeParamConnected, this);
                webAudioModel.removeEventListener("NodeParamDisconnected" /* ModelEvents.NodeParamDisconnected */ , this.nodeParamDisconnected, this);
            }
        },
        {
            key: "contextCreated",
            value: function contextCreated(event) {
                var context = event.data;
                this.graphManager.createContext(context.contextId);
                this.contextSelector.contextCreated(event);
            }
        },
        {
            key: "contextDestroyed",
            value: function contextDestroyed(event) {
                var contextId = event.data;
                this.graphManager.destroyContext(contextId);
                this.contextSelector.contextDestroyed(event);
            }
        },
        {
            key: "contextChanged",
            value: function contextChanged(event) {
                var context = event.data;
                if (!this.graphManager.hasContext(context.contextId)) {
                    return;
                }
                this.contextSelector.contextChanged(event);
            }
        },
        {
            key: "reset",
            value: function reset() {
                if (this.landingPage.isShowing()) {
                    this.landingPage.detach();
                }
                this.contextSelector.reset();
                this.detailViewContainer.removeChildren();
                this.landingPage.show(this.detailViewContainer);
                this.graphManager.clearGraphs();
            }
        },
        {
            key: "suspendModel",
            value: function suspendModel() {
                this.graphManager.clearGraphs();
            }
        },
        {
            key: "audioListenerCreated",
            value: function audioListenerCreated(event) {
                var listener = event.data;
                var graph = this.graphManager.getGraph(listener.contextId);
                if (!graph) {
                    return;
                }
                graph.addNode({
                    nodeId: listener.listenerId,
                    nodeType: 'Listener',
                    numberOfInputs: 0,
                    numberOfOutputs: 0
                });
            }
        },
        {
            key: "audioListenerWillBeDestroyed",
            value: function audioListenerWillBeDestroyed(event) {
                var _event_data = event.data, contextId = _event_data.contextId, listenerId = _event_data.listenerId;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                graph.removeNode(listenerId);
            }
        },
        {
            key: "audioNodeCreated",
            value: function audioNodeCreated(event) {
                var node = event.data;
                var graph = this.graphManager.getGraph(node.contextId);
                if (!graph) {
                    return;
                }
                graph.addNode({
                    nodeId: node.nodeId,
                    nodeType: node.nodeType,
                    numberOfInputs: node.numberOfInputs,
                    numberOfOutputs: node.numberOfOutputs
                });
            }
        },
        {
            key: "audioNodeWillBeDestroyed",
            value: function audioNodeWillBeDestroyed(event) {
                var _event_data = event.data, contextId = _event_data.contextId, nodeId = _event_data.nodeId;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                graph.removeNode(nodeId);
            }
        },
        {
            key: "audioParamCreated",
            value: function audioParamCreated(event) {
                var param = event.data;
                var graph = this.graphManager.getGraph(param.contextId);
                if (!graph) {
                    return;
                }
                graph.addParam({
                    paramId: param.paramId,
                    paramType: param.paramType,
                    nodeId: param.nodeId
                });
            }
        },
        {
            key: "audioParamWillBeDestroyed",
            value: function audioParamWillBeDestroyed(event) {
                var _event_data = event.data, contextId = _event_data.contextId, paramId = _event_data.paramId;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                graph.removeParam(paramId);
            }
        },
        {
            key: "nodesConnected",
            value: function nodesConnected(event) {
                var _event_data = event.data, contextId = _event_data.contextId, sourceId = _event_data.sourceId, destinationId = _event_data.destinationId, sourceOutputIndex = _event_data.sourceOutputIndex, destinationInputIndex = _event_data.destinationInputIndex;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                graph.addNodeToNodeConnection({
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationInputIndex: destinationInputIndex
                });
            }
        },
        {
            key: "nodesDisconnected",
            value: function nodesDisconnected(event) {
                var _event_data = event.data, contextId = _event_data.contextId, sourceId = _event_data.sourceId, destinationId = _event_data.destinationId, sourceOutputIndex = _event_data.sourceOutputIndex, destinationInputIndex = _event_data.destinationInputIndex;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                graph.removeNodeToNodeConnection({
                    sourceId: sourceId,
                    destinationId: destinationId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationInputIndex: destinationInputIndex
                });
            }
        },
        {
            key: "nodeParamConnected",
            value: function nodeParamConnected(event) {
                var _event_data = event.data, contextId = _event_data.contextId, sourceId = _event_data.sourceId, destinationId = _event_data.destinationId, sourceOutputIndex = _event_data.sourceOutputIndex;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                // Since the destinationId is AudioParamId, we need to find the nodeId as the
                // real destinationId.
                var nodeId = graph.getNodeIdByParamId(destinationId);
                if (!nodeId) {
                    return;
                }
                graph.addNodeToParamConnection({
                    sourceId: sourceId,
                    destinationId: nodeId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationParamId: destinationId
                });
            }
        },
        {
            key: "nodeParamDisconnected",
            value: function nodeParamDisconnected(event) {
                var _event_data = event.data, contextId = _event_data.contextId, sourceId = _event_data.sourceId, destinationId = _event_data.destinationId, sourceOutputIndex = _event_data.sourceOutputIndex;
                var graph = this.graphManager.getGraph(contextId);
                if (!graph) {
                    return;
                }
                // Since the destinationId is AudioParamId, we need to find the nodeId as the
                // real destinationId.
                var nodeId = graph.getNodeIdByParamId(destinationId);
                if (!nodeId) {
                    return;
                }
                graph.removeNodeToParamConnection({
                    sourceId: sourceId,
                    destinationId: nodeId,
                    sourceOutputIndex: sourceOutputIndex,
                    destinationParamId: destinationId
                });
            }
        },
        {
            key: "updateDetailView",
            value: function updateDetailView(context) {
                if (this.landingPage.isShowing()) {
                    this.landingPage.detach();
                }
                var detailBuilder = new _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__.ContextDetailBuilder(context);
                this.detailViewContainer.removeChildren();
                this.detailViewContainer.appendChild(detailBuilder.getFragment());
            }
        },
        {
            key: "updateSummaryBar",
            value: function updateSummaryBar(contextId, contextRealtimeData) {
                var summaryBuilder = new _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__.ContextSummaryBuilder(contextId, contextRealtimeData);
                this.summaryBarContainer.removeChildren();
                this.summaryBarContainer.appendChild(summaryBuilder.getFragment());
            }
        },
        {
            key: "clearSummaryBar",
            value: function clearSummaryBar() {
                this.summaryBarContainer.removeChildren();
            }
        },
        {
            key: "pollRealtimeData",
            value: function pollRealtimeData() {
                var _this = this;
                return _async_to_generator(function() {
                    var context, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, model, realtimeData, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                context = _this.contextSelector.selectedContext();
                                if (!context) {
                                    _this.clearSummaryBar();
                                    return [
                                        2
                                    ];
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                model = _step.value;
                                if (!(context.contextType === 'realtime')) return [
                                    3,
                                    4
                                ];
                                if (!_this.graphManager.hasContext(context.contextId)) {
                                    return [
                                        3,
                                        5
                                    ];
                                }
                                return [
                                    4,
                                    model.requestRealtimeData(context.contextId)
                                ];
                            case 3:
                                realtimeData = _state.sent();
                                if (realtimeData) {
                                    _this.updateSummaryBar(context.contextId, realtimeData);
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                _this.clearSummaryBar();
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return WebAudioView;
} //# sourceMappingURL=WebAudioView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget);


}),
"./panels/web_audio/graph_visualizer/GraphManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GraphManager: function() { return GraphManager; }
});
/* harmony import */var _GraphView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.js */ "./panels/web_audio/graph_visualizer/GraphView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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

// A class that maps each context to its corresponding graph.
// It controls which graph to render when the context is switched or updated.
var GraphManager = /*#__PURE__*/ function() {
    "use strict";
    function GraphManager() {
        _class_call_check(this, GraphManager);
        _define_property(this, "graphMapByContextId", new Map());
    }
    _create_class(GraphManager, [
        {
            key: "createContext",
            value: function createContext(contextId) {
                var graph = new _GraphView_js__WEBPACK_IMPORTED_MODULE_0__.GraphView(contextId);
                this.graphMapByContextId.set(contextId, graph);
            }
        },
        {
            key: "destroyContext",
            value: function destroyContext(contextId) {
                if (!this.graphMapByContextId.has(contextId)) {
                    return;
                }
                var graph = this.graphMapByContextId.get(contextId);
                if (!graph) {
                    return;
                }
                this.graphMapByContextId.delete(contextId);
            }
        },
        {
            key: "hasContext",
            value: function hasContext(contextId) {
                return this.graphMapByContextId.has(contextId);
            }
        },
        {
            key: "clearGraphs",
            value: function clearGraphs() {
                this.graphMapByContextId.clear();
            }
        },
        {
            /**
     * Get graph by contextId.
     * If the user starts listening for WebAudio events after the page has been running a context for awhile,
     * the graph might be undefined.
     */ key: "getGraph",
            value: function getGraph(contextId) {
                return this.graphMapByContextId.get(contextId) || null;
            }
        }
    ]);
    return GraphManager;
} //# sourceMappingURL=GraphManager.js.map
();


}),
"./panels/web_audio/graph_visualizer/graph_visualizer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EdgeView: function() { return /* reexport module object */ _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__; },
  GraphManager: function() { return /* reexport module object */ _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  GraphStyle: function() { return /* reexport module object */ _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__; },
  GraphView: function() { return /* reexport module object */ _GraphView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NodeRendererUtility: function() { return /* reexport module object */ _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__; },
  NodeView: function() { return /* reexport module object */ _NodeView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EdgeView.js */ "./panels/web_audio/graph_visualizer/EdgeView.js");
/* harmony import */var _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager.js */ "./panels/web_audio/graph_visualizer/GraphManager.js");
/* harmony import */var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphStyle.js */ "./panels/web_audio/graph_visualizer/GraphStyle.js");
/* harmony import */var _GraphView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphView.js */ "./panels/web_audio/graph_visualizer/GraphView.js");
/* harmony import */var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./panels/web_audio/graph_visualizer/NodeRendererUtility.js");
/* harmony import */var _NodeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeView.js */ "./panels/web_audio/graph_visualizer/NodeView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=graph_visualizer.js.map


}),
"./panels/web_audio/webAudio.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\n.web-audio-toolbar-container {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  min-height: fit-content;\n}\n\n.web-audio-toolbar {\n  display: inline-block;\n}\n\n.web-audio-landing-page {\n  position: absolute;\n  background-color: var(--sys-color-cdt-base-container);\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  font-size: 13px;\n  color: var(--sys-color-on-surface);\n}\n\n.web-audio-landing-page > div {\n  max-width: 500px;\n  margin: 10px;\n}\n\n.web-audio-landing-page > div > p {\n  flex: none;\n  white-space: pre-line;\n}\n\n.web-audio-content-container {\n  overflow-y: auto;\n}\n\n.web-audio-details-container {\n  min-height: fit-content;\n}\n\n.web-audio-summary-container {\n  flex-shrink: 0;\n}\n\n.context-detail-container {\n  flex: none;\n  display: flex;\n  background-color: var(--sys-color-cdt-base-container);\n  flex-direction: column;\n}\n\n.context-detail-header {\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 12px 24px;\n  margin-bottom: 10px;\n}\n\n.context-detail-title {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.context-detail-subtitle {\n  font-size: 12px;\n  margin-top: 10px;\n  user-select: text;\n}\n\n.context-detail-row {\n  flex-direction: row;\n  display: flex;\n  line-height: 18px;\n  padding-left: 24px;\n}\n\n.context-detail-row-entry:not(:empty) {\n  color: var(--sys-color-token-subtle);\n  overflow: hidden;\n  width: 130px;\n}\n\n.context-detail-row-value {\n  user-select: text;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.context-summary-container {\n  flex: 0 0 27px;\n  line-height: 27px;\n  padding-left: 5px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.context-summary-container span {\n  margin-right: 6px;\n}\n\n/*# sourceURL=webAudio.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);