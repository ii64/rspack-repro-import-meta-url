"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CallStackSidebarPane_js"], {
"./panels/sources/CallStackSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  CallStackSidebarPane: function() { return CallStackSidebarPane; },
  Item: function() { return Item; },
  defaultMaxAsyncStackChainDepth: function() { return defaultMaxAsyncStackChainDepth; },
  elementSymbol: function() { return elementSymbol; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _callStackSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callStackSidebarPane.css.js */ "./panels/sources/callStackSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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












var UIStrings = {
    /**
     *@description Text in Call Stack Sidebar Pane of the Sources panel
     */ callStack: 'Call Stack',
    /**
     *@description Not paused message element text content in Call Stack Sidebar Pane of the Sources panel
     */ notPaused: 'Not paused',
    /**
     *@description Text exposed to screen reader when navigating through a ignore-listed call frame in the sources panel
     */ onIgnoreList: 'on ignore list',
    /**
     *@description Show all link text content in Call Stack Sidebar Pane of the Sources panel
     */ showIgnorelistedFrames: 'Show ignore-listed frames',
    /**
     *@description Text to show more content
     */ showMore: 'Show more',
    /**
     *@description A context menu item in the Call Stack Sidebar Pane of the Sources panel
     */ copyStackTrace: 'Copy stack trace',
    /**
     *@description Text in Call Stack Sidebar Pane of the Sources panel when some call frames have warnings
     */ callFrameWarnings: 'Some call frames have warnings',
    /**
     *@description Error message that is displayed in UI when a file needed for debugging information for a call frame is missing
     *@example {src/myapp.debug.wasm.dwp} PH1
     */ debugFileNotFound: 'Failed to load debug file "{PH1}".',
    /**
     * @description A contex menu item in the Call Stack Sidebar Pane. "Restart" is a verb and
     * "frame" is a noun. "Frame" refers to an individual item in the call stack, i.e. a call frame.
     * The user opens this context menu by selecting a specific call frame in the call stack sidebar pane.
     */ restartFrame: 'Restart frame'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/CallStackSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var callstackSidebarPaneInstance;
var CallStackSidebarPane = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(CallStackSidebarPane, _UI_View_SimpleView);
    var _super = _create_super(CallStackSidebarPane);
    function CallStackSidebarPane() {
        _class_call_check(this, CallStackSidebarPane);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.callStack), true, 'sources.callstack');
        _define_property(_assert_this_initialized(_this), "ignoreListMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "ignoreListCheckboxElement", void 0);
        _define_property(_assert_this_initialized(_this), "notPausedMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "callFrameWarningsElement", void 0);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "showMoreMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "showIgnoreListed", void 0);
        _define_property(_assert_this_initialized(_this), "locationPool", void 0);
        _define_property(_assert_this_initialized(_this), "updateThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "maxAsyncStackChainDepth", void 0);
        _define_property(_assert_this_initialized(_this), "updateItemThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "scheduledForUpdateItems", void 0);
        _define_property(_assert_this_initialized(_this), "muteActivateItem", void 0);
        _define_property(_assert_this_initialized(_this), "lastDebuggerModel", null);
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.section('sources.callstack')));
        var ref;
        ref = _this.createIgnoreListMessageElementAndCheckbox(), _this.ignoreListMessageElement = ref.element, _this.ignoreListCheckboxElement = ref.checkbox, ref;
        _this.contentElement.appendChild(_this.ignoreListMessageElement);
        _this.notPausedMessageElement = _this.contentElement.createChild('div', 'gray-info-message');
        _this.notPausedMessageElement.textContent = i18nString(UIStrings.notPaused);
        _this.notPausedMessageElement.tabIndex = -1;
        _this.callFrameWarningsElement = _this.contentElement.createChild('div', 'call-frame-warnings-message');
        var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
        icon.data = {
            iconName: 'warning-filled',
            color: 'var(--icon-warning)',
            width: '14px',
            height: '14px'
        };
        icon.classList.add('call-frame-warning-icon');
        _this.callFrameWarningsElement.appendChild(icon);
        _this.callFrameWarningsElement.appendChild(document.createTextNode(i18nString(UIStrings.callFrameWarnings)));
        _this.callFrameWarningsElement.tabIndex = -1;
        _this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListModel.ListModel();
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListControl.ListControl(_this.items, _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListControl.ListMode.NonViewport);
        _this.contentElement.appendChild(_this.list.element);
        _this.list.element.addEventListener('contextmenu', _this.onContextMenu.bind(_assert_this_initialized(_this)), false);
        self.onInvokeElement(_this.list.element, function(event) {
            var item = _this.list.itemForNode(event.target);
            if (item) {
                _this.activateItem(item);
                event.consume(true);
            }
        });
        _this.showMoreMessageElement = _this.createShowMoreMessageElement();
        _this.showMoreMessageElement.classList.add('hidden');
        _this.contentElement.appendChild(_this.showMoreMessageElement);
        _this.showIgnoreListed = false;
        _this.locationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.LiveLocation.LiveLocationPool();
        _this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        _this.maxAsyncStackChainDepth = defaultMaxAsyncStackChainDepth;
        _this.update();
        _this.updateItemThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        _this.scheduledForUpdateItems = new Set();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.DebugInfoAttached, _this.debugInfoAttached, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(CallStackSidebarPane, [
        {
            key: "flavorChanged",
            value: function flavorChanged(_object) {
                this.showIgnoreListed = false;
                this.ignoreListCheckboxElement.checked = false;
                this.maxAsyncStackChainDepth = defaultMaxAsyncStackChainDepth;
                this.update();
            }
        },
        {
            key: "debugInfoAttached",
            value: function debugInfoAttached() {
                this.update();
            }
        },
        {
            key: "setSourceMapSubscription",
            value: function setSourceMapSubscription(debuggerModel) {
                // Shortcut for the case when we are listening to the same model.
                if (this.lastDebuggerModel === debuggerModel) {
                    return;
                }
                if (this.lastDebuggerModel) {
                    this.lastDebuggerModel.sourceMapManager().removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.Events.SourceMapAttached, this.debugInfoAttached, this);
                }
                this.lastDebuggerModel = debuggerModel;
                if (this.lastDebuggerModel) {
                    this.lastDebuggerModel.sourceMapManager().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.Events.SourceMapAttached, this.debugInfoAttached, this);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                var _this = this;
                void this.updateThrottler.schedule(function() {
                    return _this.doUpdate();
                });
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var details, _details_debuggerModel, itemPromises, uniqueWarnings, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, itemPromise, items, debuggerModel, asyncStackTraceId, asyncStackTrace, previousStackTrace, maxAsyncStackChainDepth, _items, dm, title, _, _1, _tmp, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, item, selectedItem;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.locationPool.disposeAll();
                                _this.callFrameWarningsElement.classList.add('hidden');
                                details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerPausedDetails);
                                _this.setSourceMapSubscription((_details_debuggerModel = details === null || details === void 0 ? void 0 : details.debuggerModel) !== null && _details_debuggerModel !== void 0 ? _details_debuggerModel : null);
                                if (!details) {
                                    _this.notPausedMessageElement.classList.remove('hidden');
                                    _this.ignoreListMessageElement.classList.add('hidden');
                                    _this.showMoreMessageElement.classList.add('hidden');
                                    _this.items.replaceAll([]);
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, null);
                                    return [
                                        2
                                    ];
                                }
                                _this.notPausedMessageElement.classList.add('hidden');
                                itemPromises = [];
                                uniqueWarnings = new Set();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = details.callFrames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        frame = _step.value;
                                        itemPromise = Item.createForDebuggerCallFrame(frame, _this.locationPool, _this.refreshItem.bind(_this));
                                        itemPromises.push(itemPromise);
                                        if (frame.missingDebugInfoDetails) {
                                            uniqueWarnings.add(frame.missingDebugInfoDetails.details);
                                        }
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
                                return [
                                    4,
                                    Promise.all(itemPromises)
                                ];
                            case 1:
                                items = _state.sent();
                                if (uniqueWarnings.size) {
                                    _this.callFrameWarningsElement.classList.remove('hidden');
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(_this.callFrameWarningsElement, Array.from(uniqueWarnings).join('\n'));
                                }
                                debuggerModel = details.debuggerModel;
                                asyncStackTraceId = details.asyncStackTraceId;
                                asyncStackTrace = details.asyncStackTrace;
                                previousStackTrace = details.callFrames;
                                maxAsyncStackChainDepth = _this.maxAsyncStackChainDepth;
                                _state.label = 2;
                            case 2:
                                if (!(maxAsyncStackChainDepth > 0)) return [
                                    3,
                                    9
                                ];
                                if (!!asyncStackTrace) return [
                                    3,
                                    6
                                ];
                                if (!asyncStackTraceId) {
                                    return [
                                        3,
                                        9
                                    ];
                                }
                                if (!asyncStackTraceId.debuggerId) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel.modelForDebuggerId(asyncStackTraceId.debuggerId)
                                ];
                            case 3:
                                dm = _state.sent();
                                if (!dm) {
                                    return [
                                        3,
                                        9
                                    ];
                                }
                                debuggerModel = dm;
                                _state.label = 4;
                            case 4:
                                return [
                                    4,
                                    debuggerModel.fetchAsyncStackTrace(asyncStackTraceId)
                                ];
                            case 5:
                                asyncStackTrace = _state.sent();
                                if (!asyncStackTrace) {
                                    return [
                                        3,
                                        9
                                    ];
                                }
                                _state.label = 6;
                            case 6:
                                title = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.asyncStackTraceLabel(asyncStackTrace.description, previousStackTrace);
                                _1 = (_ = (_items = items).push).apply;
                                _tmp = [
                                    _items
                                ];
                                return [
                                    4,
                                    Item.createItemsForAsyncStack(title, debuggerModel, asyncStackTrace.callFrames, _this.locationPool, _this.refreshItem.bind(_this))
                                ];
                            case 7:
                                _1.apply(_, _tmp.concat([
                                    _to_consumable_array.apply(void 0, [
                                        _state.sent()
                                    ])
                                ]));
                                previousStackTrace = asyncStackTrace.callFrames;
                                asyncStackTraceId = asyncStackTrace.parentId;
                                asyncStackTrace = asyncStackTrace.parent;
                                _state.label = 8;
                            case 8:
                                --maxAsyncStackChainDepth;
                                return [
                                    3,
                                    2
                                ];
                            case 9:
                                _this.showMoreMessageElement.classList.toggle('hidden', !asyncStackTrace);
                                _this.items.replaceAll(items);
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = _this.items[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        item = _step1.value;
                                        _this.refreshItem(item);
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                if (_this.maxAsyncStackChainDepth === defaultMaxAsyncStackChainDepth) {
                                    _this.list.selectNextItem(true, false);
                                    selectedItem = _this.list.selectedItem();
                                    if (selectedItem) {
                                        _this.activateItem(selectedItem);
                                    }
                                }
                                _this.updatedForTest();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updatedForTest",
            value: function updatedForTest() {}
        },
        {
            key: "refreshItem",
            value: function refreshItem(item) {
                this.scheduledForUpdateItems.add(item);
                var _this = this;
                void this.updateItemThrottler.schedule(/*#__PURE__*/ _async_to_generator(function() {
                    var items, i, itemsSet, hasIgnoreListed, i1, _$item;
                    return _ts_generator(this, function(_state) {
                        items = Array.from(_this.scheduledForUpdateItems);
                        _this.scheduledForUpdateItems.clear();
                        _this.muteActivateItem = true;
                        if (!_this.showIgnoreListed && _this.items.every(function(item) {
                            return item.isIgnoreListed;
                        })) {
                            _this.showIgnoreListed = true;
                            for(i = 0; i < _this.items.length; ++i){
                                _this.list.refreshItemByIndex(i);
                            }
                            _this.ignoreListMessageElement.classList.toggle('hidden', true);
                        } else {
                            _this.showIgnoreListed = _this.ignoreListCheckboxElement.checked;
                            itemsSet = new Set(items);
                            hasIgnoreListed = false;
                            for(i1 = 0; i1 < _this.items.length; ++i1){
                                _$item = _this.items.at(i1);
                                if (itemsSet.has(_$item)) {
                                    _this.list.refreshItemByIndex(i1);
                                }
                                hasIgnoreListed = hasIgnoreListed || _$item.isIgnoreListed;
                            }
                            _this.ignoreListMessageElement.classList.toggle('hidden', !hasIgnoreListed);
                        }
                        delete _this.muteActivateItem;
                        return [
                            2
                        ];
                    });
                }));
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var element = document.createElement('div');
                element.classList.add('call-frame-item');
                var title = element.createChild('div', 'call-frame-item-title');
                var titleElement = title.createChild('div', 'call-frame-title-text');
                titleElement.textContent = item.title;
                if (item.isAsyncHeader) {
                    element.classList.add('async-header');
                } else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(titleElement, item.title);
                    var linkElement = element.createChild('div', 'call-frame-location');
                    linkElement.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(item.linkText, 30);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(linkElement, item.linkText);
                    element.classList.toggle('ignore-listed-call-frame', item.isIgnoreListed);
                    if (item.isIgnoreListed) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setDescription(element, i18nString(UIStrings.onIgnoreList));
                    }
                    if (!item.frame) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setDisabled(element, true);
                    }
                }
                var callframe = item.frame;
                var isSelected = callframe === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                element.classList.toggle('selected', isSelected);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSelected(element, isSelected);
                element.classList.toggle('hidden', !this.showIgnoreListed && item.isIgnoreListed);
                var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
                icon.data = {
                    iconName: 'large-arrow-right-filled',
                    color: 'var(--icon-arrow-main-thread)',
                    width: '14px',
                    height: '14px'
                };
                icon.classList.add('selected-call-frame-icon');
                element.appendChild(icon);
                element.tabIndex = item === this.list.selectedItem() ? 0 : -1;
                if (callframe && callframe.missingDebugInfoDetails) {
                    var icon1 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
                    icon1.data = {
                        iconName: 'warning-filled',
                        color: 'var(--icon-warning)',
                        width: '14px',
                        height: '14px'
                    };
                    icon1.classList.add('call-frame-warning-icon');
                    var messages = callframe.missingDebugInfoDetails.resources.map(function(r) {
                        return i18nString(UIStrings.debugFileNotFound, {
                            PH1: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(r.resourceUrl)
                        });
                    });
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon1, [
                        callframe.missingDebugInfoDetails.details
                    ].concat(_to_consumable_array(messages)).join('\n'));
                    element.appendChild(icon1);
                }
                return element;
            }
        },
        {
            key: "heightForItem",
            value: function heightForItem(_item) {
                console.assert(false); // Should not be called.
                return 0;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(_from, _to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.tabIndex = -1;
                }
                if (toElement) {
                    this.setDefaultFocusedElement(toElement);
                    toElement.tabIndex = 0;
                    if (this.hasFocus()) {
                        toElement.focus();
                    }
                }
            }
        },
        {
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return true;
            }
        },
        {
            key: "createIgnoreListMessageElementAndCheckbox",
            value: function createIgnoreListMessageElementAndCheckbox() {
                var _this = this;
                var element = document.createElement('div');
                element.classList.add('ignore-listed-message');
                var label = element.createChild('label');
                label.classList.add('ignore-listed-message-label');
                var checkbox = label.createChild('input');
                checkbox.tabIndex = 0;
                checkbox.type = 'checkbox';
                checkbox.classList.add('ignore-listed-checkbox');
                label.append(i18nString(UIStrings.showIgnorelistedFrames));
                var showAll = function() {
                    _this.showIgnoreListed = checkbox.checked;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var item = _step.value;
                            _this.refreshItem(item);
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
                };
                checkbox.addEventListener('click', showAll);
                return {
                    element: element,
                    checkbox: checkbox
                };
            }
        },
        {
            key: "createShowMoreMessageElement",
            value: function createShowMoreMessageElement() {
                var _this = this;
                var element = document.createElement('div');
                element.classList.add('show-more-message');
                element.createChild('span');
                var showAllLink = element.createChild('span', 'link');
                showAllLink.textContent = i18nString(UIStrings.showMore);
                showAllLink.addEventListener('click', function() {
                    _this.maxAsyncStackChainDepth += defaultMaxAsyncStackChainDepth;
                    _this.update();
                }, false);
                return element;
            }
        },
        {
            key: "onContextMenu",
            value: function onContextMenu(event) {
                var item = this.list.itemForNode(event.target);
                if (!item) {
                    return;
                }
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu(event);
                var debuggerCallFrame = item.frame;
                if (debuggerCallFrame) {
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.restartFrame), function() {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.StackFrameRestarted);
                        void debuggerCallFrame.restart();
                    }, {
                        disabled: !debuggerCallFrame.canBeRestarted,
                        jslogContext: 'restart-frame'
                    });
                }
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.copyStackTrace), this.copyStackTrace.bind(this), {
                    jslogContext: 'copy-stack-trace'
                });
                if (item.uiLocation) {
                    this.appendIgnoreListURLContextMenuItems(contextMenu, item.uiLocation.uiSourceCode);
                }
                void contextMenu.show();
            }
        },
        {
            key: "onClick",
            value: function onClick(event) {
                var item = this.list.itemForNode(event.target);
                if (item) {
                    this.activateItem(item);
                }
            }
        },
        {
            key: "activateItem",
            value: function activateItem(item) {
                var uiLocation = item.uiLocation;
                if (this.muteActivateItem || !uiLocation) {
                    return;
                }
                this.list.selectItem(item);
                var debuggerCallFrame = item.frame;
                var oldItem = this.activeCallFrameItem();
                if (debuggerCallFrame && oldItem !== item) {
                    debuggerCallFrame.debuggerModel.setSelectedCallFrame(debuggerCallFrame);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, debuggerCallFrame);
                    if (oldItem) {
                        this.refreshItem(oldItem);
                    }
                    this.refreshItem(item);
                } else {
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
                }
            }
        },
        {
            key: "activeCallFrameItem",
            value: function activeCallFrameItem() {
                var callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
                if (callFrame) {
                    return this.items.find(function(callFrameItem) {
                        return callFrameItem.frame === callFrame;
                    }) || null;
                }
                return null;
            }
        },
        {
            key: "appendIgnoreListURLContextMenuItems",
            value: function appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode) {
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
                if (binding) {
                    uiSourceCode = binding.network;
                }
                var menuSection = contextMenu.section('ignoreList');
                if (menuSection.items.length > 0) {
                    // Already added menu items.
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().getIgnoreListURLContextMenuItems(uiSourceCode)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, text = _step_value.text, callback = _step_value.callback, jslogContext = _step_value.jslogContext;
                        menuSection.appendItem(text, callback, {
                            jslogContext: jslogContext
                        });
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
            key: "selectNextCallFrameOnStack",
            value: function selectNextCallFrameOnStack() {
                var oldItem = this.activeCallFrameItem();
                var startIndex = oldItem ? this.items.indexOf(oldItem) + 1 : 0;
                for(var i = startIndex; i < this.items.length; i++){
                    var newItem = this.items.at(i);
                    if (newItem.frame) {
                        this.activateItem(newItem);
                        break;
                    }
                }
            }
        },
        {
            key: "selectPreviousCallFrameOnStack",
            value: function selectPreviousCallFrameOnStack() {
                var oldItem = this.activeCallFrameItem();
                var startIndex = oldItem ? this.items.indexOf(oldItem) - 1 : this.items.length - 1;
                for(var i = startIndex; i >= 0; i--){
                    var newItem = this.items.at(i);
                    if (newItem.frame) {
                        this.activateItem(newItem);
                        break;
                    }
                }
            }
        },
        {
            key: "copyStackTrace",
            value: function copyStackTrace() {
                var text = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        var itemText = item.title;
                        if (item.uiLocation) {
                            itemText += ' (' + item.uiLocation.linkText(true) + ')';
                        }
                        text.push(itemText);
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
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(text.join('\n'));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CallStackSidebarPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _callStackSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!callstackSidebarPaneInstance || forceNew) {
                    callstackSidebarPaneInstance = new CallStackSidebarPane();
                }
                return callstackSidebarPaneInstance;
            }
        }
    ]);
    return CallStackSidebarPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.View.SimpleView);
var elementSymbol = Symbol('element');
var defaultMaxAsyncStackChainDepth = 32;
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                switch(actionId){
                    case 'debugger.next-call-frame':
                        CallStackSidebarPane.instance().selectNextCallFrameOnStack();
                        return true;
                    case 'debugger.previous-call-frame':
                        CallStackSidebarPane.instance().selectPreviousCallFrameOnStack();
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
var Item = /*#__PURE__*/ function() {
    "use strict";
    function Item(title, updateDelegate, frame) {
        _class_call_check(this, Item);
        _define_property(this, "isIgnoreListed", void 0);
        _define_property(this, "title", void 0);
        _define_property(this, "linkText", void 0);
        _define_property(this, "uiLocation", void 0);
        _define_property(this, "isAsyncHeader", void 0);
        _define_property(this, "updateDelegate", void 0);
        /** Only set for synchronous frames */ _define_property(this, "frame", void 0);
        this.isIgnoreListed = false;
        this.title = title;
        this.linkText = '';
        this.uiLocation = null;
        this.isAsyncHeader = false;
        this.updateDelegate = updateDelegate;
        this.frame = frame;
    }
    _create_class(Item, [
        {
            key: "update",
            value: function update(liveLocation) {
                var _this = this;
                return _async_to_generator(function() {
                    var uiLocation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    liveLocation.uiLocation()
                                ];
                            case 1:
                                uiLocation = _state.sent();
                                return [
                                    4,
                                    liveLocation.isIgnoreListed()
                                ];
                            case 2:
                                _this.isIgnoreListed = _state.sent();
                                _this.linkText = uiLocation ? uiLocation.linkText() : '';
                                _this.uiLocation = uiLocation;
                                _this.updateDelegate(_this);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "createForDebuggerCallFrame",
            value: function createForDebuggerCallFrame(frame, locationPool, updateDelegate) {
                return _async_to_generator(function() {
                    var name, item;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                name = frame.functionName;
                                item = new Item(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.beautifyFunctionName(name), updateDelegate, frame);
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(frame.location(), item.update.bind(item), locationPool)
                                ];
                            case 1:
                                _state.sent();
                                void _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_7__.NamesResolver.resolveDebuggerFrameFunctionName(frame).then(function(functionName) {
                                    if (functionName && functionName !== name) {
                                        // Just update the item's title and call the update delegate directly,
                                        // instead of going through the update method below, since location
                                        // didn't change.
                                        item.title = functionName;
                                        item.updateDelegate(item);
                                    }
                                });
                                return [
                                    2,
                                    item
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createItemsForAsyncStack",
            value: function createItemsForAsyncStack(title, debuggerModel, frames, locationPool, updateDelegate) {
                return _async_to_generator(function() {
                    var headerItemToItemsSet, asyncHeaderItem, asyncFrameItems, liveLocationPromises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, item, rawLocation;
                    function update(item) {
                        updateDelegate(item);
                        var shouldUpdate = false;
                        var items = headerItemToItemsSet.get(asyncHeaderItem);
                        if (items) {
                            if (item.isIgnoreListed) {
                                items.delete(item);
                                shouldUpdate = items.size === 0;
                            } else {
                                shouldUpdate = items.size === 0;
                                items.add(item);
                            }
                            asyncHeaderItem.isIgnoreListed = items.size === 0;
                        }
                        if (shouldUpdate) {
                            updateDelegate(asyncHeaderItem);
                        }
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                headerItemToItemsSet = new WeakMap();
                                asyncHeaderItem = new Item(title, updateDelegate);
                                headerItemToItemsSet.set(asyncHeaderItem, new Set());
                                asyncHeaderItem.isAsyncHeader = true;
                                asyncFrameItems = [];
                                liveLocationPromises = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = frames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        frame = _step.value;
                                        item = new Item(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.beautifyFunctionName(frame.functionName), update);
                                        rawLocation = debuggerModel.createRawLocationByScriptId(frame.scriptId, frame.lineNumber, frame.columnNumber);
                                        liveLocationPromises.push(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(rawLocation, item.update.bind(item), locationPool));
                                        asyncFrameItems.push(item);
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
                                return [
                                    4,
                                    Promise.all(liveLocationPromises)
                                ];
                            case 1:
                                _state.sent();
                                updateDelegate(asyncHeaderItem);
                                return [
                                    2,
                                    [
                                        asyncHeaderItem
                                    ].concat(_to_consumable_array(asyncFrameItems))
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Item;
} //# sourceMappingURL=CallStackSidebarPane.js.map
();


}),
"./panels/sources/callStackSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.call-frame-warnings-message {\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  color: var(--sys-color-on-surface-yellow);\n  background-color: var(--sys-color-surface-yellow);\n}\n\n.ignore-listed-message {\n  padding: 1px;\n}\n\n.ignore-listed-message-label {\n  color: var(--sys-color-token-subtle);\n  align-items: center;\n  display: flex;\n}\n\n.show-more-message > .link {\n  margin-left: 5px;\n}\n\n.show-more-message {\n  text-align: center;\n  font-style: italic;\n  padding: 4px;\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.call-frame-item {\n  padding: 3px 8px 3px 20px;\n  position: relative;\n  min-height: 18px;\n  line-height: 15px;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.call-frame-title-text {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.async-header + .call-frame-item {\n  border-top: 0;\n}\n\n.call-frame-item:not(.async-header) {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.call-frame-item-title,\n.call-frame-location {\n  display: flex;\n  white-space: nowrap;\n}\n\n.async-header .call-frame-item-title {\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  margin-left: -5px;\n  padding: 0 5px;\n  z-index: 1;\n}\n\n.call-frame-item:focus-visible,\n.call-frame-item.async-header:focus-visible .call-frame-item-title {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.ignore-listed-checkbox:focus-visible {\n  outline-width: unset;\n}\n\n.call-frame-item:not(.async-header):hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.call-frame-location {\n  color: var(--sys-color-token-subtle);\n  margin-left: auto;\n  padding: 0 10px;\n}\n\n.async-header::before {\n  content: " ";\n  width: 100%;\n  border-top: 1px solid var(--sys-color-divider);\n  margin-top: 8px;\n  position: absolute;\n  left: 0;\n}\n\n.ignore-listed-call-frame {\n  opacity: 60%;\n  font-style: italic;\n}\n\n.selected-call-frame-icon {\n  display: none;\n  position: absolute;\n  top: 3px;\n  left: 4px;\n}\n\n.call-frame-item.selected .selected-call-frame-icon {\n  display: block;\n}\n\n.call-frame-warning-icon {\n  display: block;\n  position: absolute;\n  top: 3px;\n  right: 4px;\n}\n\n@media (forced-colors: active) {\n  .call-frame-item:focus-visible,\n  .call-frame-item:not(.async-header):hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .call-frame-item:focus-visible *,\n  .call-frame-item:not(.async-header):hover * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=callStackSidebarPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);