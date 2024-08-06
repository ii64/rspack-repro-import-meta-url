"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_FreestylerPanel_js"], {
"./panels/freestyler/FreestylerPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  FreestylerPanel: function() { return FreestylerPanel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./panels/freestyler/components/FreestylerChatUi.js");
/* harmony import */var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
/* harmony import */var _freestylerPanel_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./freestylerPanel.css.js */ "./panels/freestyler/freestylerPanel.css.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
        "\n    <",
        " .props=",
        " ",
        "></",
        ">\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}










/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */ var UIStringsTemp = {
    /**
     *@description Freestyler UI text for clearing messages.
     */ clearMessages: 'Clear messages',
    /**
     *@description Freestyler UI text for sending feedback.
     */ sendFeedback: 'Send feedback',
    /**
     *@description Displayed when the user stop the response
     */ stoppedResponse: 'You stopped this response'
};
// TODO(nvitkov): b/346933425
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/FreestylerPanel.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */ var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString;
// TODO(ergunsh): Use the WidgetElement instead of separately creating the toolbar.
function createToolbar(target, param) {
    var onClearClick = param.onClearClick;
    var toolbarContainer = target.createChild('div', 'freestyler-toolbar-container');
    var leftToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', toolbarContainer);
    var rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('freestyler-right-toolbar', toolbarContainer);
    var clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStringsTemp.clearMessages), 'clear', undefined, 'freestyler.clear');
    clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , onClearClick);
    leftToolbar.appendToolbarItem(clearButton);
    rightToolbar.appendSeparator();
    var helpButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStringsTemp.sendFeedback), 'help', undefined, 'freestyler.feedback');
    helpButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(_components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.DOGFOOD_INFO);
    });
    rightToolbar.appendToolbarItem(helpButton);
}
function defaultView(input, output, target) {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject(), _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi.litTagName, input, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.ref(function(el) {
        if (!el || !_instanceof(el, _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi)) {
            return;
        }
        output.freestylerChatUi = el;
    }), _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_7__.FreestylerChatUi.litTagName), target, {
        host: input
    }); // eslint-disable-line rulesdir/lit_html_host_this
// clang-format on
}
var freestylerPanelInstance;
var _UI_Panel_Panel, _toggleSearchElementAction = /*#__PURE__*/ new WeakMap(), _selectedNode = /*#__PURE__*/ new WeakMap(), _contentContainer = /*#__PURE__*/ new WeakMap(), _aidaClient = /*#__PURE__*/ new WeakMap(), _agent = /*#__PURE__*/ new WeakMap(), _viewProps = /*#__PURE__*/ new WeakMap(), _viewOutput = /*#__PURE__*/ new WeakMap(), _serverSideLoggingEnabled = /*#__PURE__*/ new WeakMap(), _consentViewAcceptedSetting = /*#__PURE__*/ new WeakMap(), _createAgent = /*#__PURE__*/ new WeakSet(), _handleSelectElementClick = /*#__PURE__*/ new WeakSet(), _handleFeedbackSubmit = /*#__PURE__*/ new WeakSet(), _handleAcceptConsentClick = /*#__PURE__*/ new WeakSet(), _clearMessages = /*#__PURE__*/ new WeakSet(), _runAbortController = /*#__PURE__*/ new WeakMap(), _cancel = /*#__PURE__*/ new WeakSet(), _startConversation = /*#__PURE__*/ new WeakSet();
var FreestylerPanel = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(FreestylerPanel, _superClass);
    var _super = _create_super(FreestylerPanel);
    function FreestylerPanel() {
        var view = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultView, _ref = arguments.length > 1 ? arguments[1] : void 0, aidaClient = _ref.aidaClient, aidaAvailability = _ref.aidaAvailability;
        _class_call_check(this, FreestylerPanel);
        var _this;
        _this = _super.call(this, FreestylerPanel.panelName);
        _class_private_method_init(_assert_this_initialized(_this), _createAgent);
        _class_private_method_init(_assert_this_initialized(_this), _handleSelectElementClick);
        _class_private_method_init(_assert_this_initialized(_this), _handleFeedbackSubmit);
        _class_private_method_init(_assert_this_initialized(_this), _handleAcceptConsentClick);
        _class_private_method_init(_assert_this_initialized(_this), _clearMessages);
        _class_private_method_init(_assert_this_initialized(_this), _cancel);
        _class_private_method_init(_assert_this_initialized(_this), _startConversation);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _toggleSearchElementAction, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _contentContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _aidaClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _agent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewProps, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewOutput, {
            writable: true,
            value: {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _serverSideLoggingEnabled, {
            writable: true,
            value: isFreestylerServerSideLoggingEnabled()
        });
        _class_private_field_init(_assert_this_initialized(_this), _consentViewAcceptedSetting, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('freestyler-dogfood-consent-onboarding-finished', false)
        });
        _class_private_field_init(_assert_this_initialized(_this), _runAbortController, {
            writable: true,
            value: new AbortController()
        });
        _this.view = view;
        createToolbar(_this.contentElement, {
            onClearClick: _class_private_method_get(_this, _clearMessages, clearMessages).bind(_assert_this_initialized(_this))
        });
        _class_private_field_set(_assert_this_initialized(_this), _toggleSearchElementAction, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search'));
        _class_private_field_set(_assert_this_initialized(_this), _aidaClient, aidaClient);
        _class_private_field_set(_assert_this_initialized(_this), _contentContainer, _this.contentElement.createChild('div', 'freestyler-chat-ui-container'));
        _class_private_field_set(_assert_this_initialized(_this), _selectedNode, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode));
        _class_private_field_set(_assert_this_initialized(_this), _viewProps, {
            state: _class_private_field_get(_this, _consentViewAcceptedSetting).get() ? "chat-view" /* FreestylerChatUiState.CHAT_VIEW */  : "consent-view" /* FreestylerChatUiState.CONSENT_VIEW */ ,
            aidaAvailability: aidaAvailability,
            messages: [],
            inspectElementToggled: _class_private_field_get(_this, _toggleSearchElementAction).toggled(),
            selectedNode: _class_private_field_get(_assert_this_initialized(_this), _selectedNode),
            isLoading: false,
            onTextSubmit: _class_private_method_get(_this, _startConversation, startConversation).bind(_assert_this_initialized(_this)),
            onInspectElementClick: _class_private_method_get(_this, _handleSelectElementClick, handleSelectElementClick).bind(_assert_this_initialized(_this)),
            onFeedbackSubmit: _class_private_method_get(_this, _handleFeedbackSubmit, handleFeedbackSubmit).bind(_assert_this_initialized(_this)),
            onAcceptConsentClick: _class_private_method_get(_this, _handleAcceptConsentClick, handleAcceptConsentClick).bind(_assert_this_initialized(_this)),
            onCancelClick: _class_private_method_get(_this, _cancel, cancel).bind(_assert_this_initialized(_this)),
            onFixThisIssueClick: function() {
                void _class_private_method_get(_this, _startConversation, startConversation).call(_assert_this_initialized(_this), _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT, true);
            },
            canShowFeedbackForm: _class_private_field_get(_assert_this_initialized(_this), _serverSideLoggingEnabled)
        });
        _class_private_field_get(_this, _toggleSearchElementAction).addEventListener("Toggled" /* UI.ActionRegistration.Events.Toggled */ , function(ev) {
            _class_private_field_get(_this, _viewProps).inspectElementToggled = ev.data;
            _this.doUpdate();
        });
        _class_private_field_set(_assert_this_initialized(_this), _agent, _class_private_method_get(_this, _createAgent, createAgent).call(_assert_this_initialized(_this)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, function(ev) {
            if (_class_private_field_get(_this, _viewProps).selectedNode === ev.data) {
                return;
            }
            _class_private_field_get(_this, _viewProps).selectedNode = ev.data;
            _this.doUpdate();
        });
        _this.doUpdate();
        return _this;
    }
    _create_class(FreestylerPanel, [
        {
            key: "wasShown",
            value: function wasShown() {
                var _class_private_field_get_freestylerChatUi;
                this.registerCSSFiles([
                    _freestylerPanel_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
                (_class_private_field_get_freestylerChatUi = _class_private_field_get(this, _viewOutput).freestylerChatUi) === null || _class_private_field_get_freestylerChatUi === void 0 ? void 0 : _class_private_field_get_freestylerChatUi.focusTextInput();
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                this.view(_class_private_field_get(this, _viewProps), _class_private_field_get(this, _viewOutput), _class_private_field_get(this, _contentContainer));
            }
        },
        {
            key: "showConfirmSideEffectUi",
            value: function showConfirmSideEffectUi(action) {
                var _this = this;
                return _async_to_generator(function() {
                    var sideEffectConfirmationPromiseWithResolvers, result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                sideEffectConfirmationPromiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.PromiseUtilities.promiseWithResolvers();
                                _class_private_field_get(_this, _viewProps).confirmSideEffectDialog = {
                                    code: action,
                                    onAnswer: function(answer) {
                                        return sideEffectConfirmationPromiseWithResolvers.resolve(answer);
                                    }
                                };
                                _this.doUpdate();
                                return [
                                    4,
                                    sideEffectConfirmationPromiseWithResolvers.promise
                                ];
                            case 1:
                                result = _state.sent();
                                _class_private_field_get(_this, _viewProps).confirmSideEffectDialog = undefined;
                                _this.doUpdate();
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleAction",
            value: function handleAction(actionId) {
                switch(actionId){
                    case 'freestyler.element-panel-context':
                        {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FreestylerOpenedFromElementsPanel);
                            this.doUpdate();
                            break;
                        }
                    case 'freestyler.style-tab-context':
                        {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.FreestylerOpenedFromStylesTab);
                            this.doUpdate();
                            break;
                        }
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                return _async_to_generator(function() {
                    var forceNew, aidaAvailability, aidaClient;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                forceNew = opts.forceNew;
                                if (!(!freestylerPanelInstance || forceNew)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                                ];
                            case 1:
                                aidaAvailability = _state.sent();
                                aidaClient = new _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
                                freestylerPanelInstance = new FreestylerPanel(defaultView, {
                                    aidaClient: aidaClient,
                                    aidaAvailability: aidaAvailability
                                });
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    freestylerPanelInstance
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return FreestylerPanel;
}(_UI_Panel_Panel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Panel.Panel);
_define_property(FreestylerPanel, "panelName", 'freestyler');
function createAgent() {
    return new _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FreestylerAgent({
        aidaClient: _class_private_field_get(this, _aidaClient),
        serverSideLoggingEnabled: _class_private_field_get(this, _serverSideLoggingEnabled),
        confirmSideEffect: this.showConfirmSideEffectUi.bind(this)
    });
}
function handleSelectElementClick() {
    void _class_private_field_get(this, _toggleSearchElementAction).execute();
}
function handleFeedbackSubmit(rpcId, rating, feedback) {
    void _class_private_field_get(this, _aidaClient).registerClientEvent({
        corresponding_aida_rpc_global_id: rpcId,
        disable_user_content_logging: !_class_private_field_get(this, _serverSideLoggingEnabled),
        do_conversation_client_event: {
            user_feedback: {
                sentiment: rating,
                user_input: {
                    comment: feedback
                }
            }
        }
    });
}
function handleAcceptConsentClick() {
    _class_private_field_get(this, _consentViewAcceptedSetting).set(true);
    _class_private_field_get(this, _viewProps).state = "chat-view" /* FreestylerChatUiState.CHAT_VIEW */ ;
    this.doUpdate();
}
function clearMessages() {
    _class_private_field_get(this, _viewProps).messages = [];
    _class_private_field_get(this, _viewProps).isLoading = false;
    _class_private_field_get(this, _viewProps).confirmSideEffectDialog = undefined;
    _class_private_field_set(this, _agent, _class_private_method_get(this, _createAgent, createAgent).call(this));
    _class_private_method_get(this, _cancel, cancel).call(this);
    this.doUpdate();
}
function cancel() {
    _class_private_field_get(this, _runAbortController).abort();
    _class_private_field_set(this, _runAbortController, new AbortController());
    _class_private_field_get(this, _viewProps).isLoading = false;
    this.doUpdate();
}
function startConversation(text) {
    return _startConversation1.apply(this, arguments);
}
function _startConversation1() {
    _startConversation1 = _async_to_generator(function(text) {
        var isFixQuery, suggestingFix, systemMessage, signal, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, data, _class_private_field_get_freestylerChatUi, _class_private_field_get_freestylerChatUi1, err;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    isFixQuery = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : false;
                    _class_private_field_get(this, _viewProps).messages.push({
                        entity: "user" /* ChatMessageEntity.USER */ ,
                        text: text
                    });
                    _class_private_field_get(this, _viewProps).isLoading = true;
                    // TODO: We should only show "Fix this issue" button when the answer suggests fix or fixes.
                    // We shouldn't show this when the answer is complete like a confirmation without any suggestion.
                    suggestingFix = text !== _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.FIX_THIS_ISSUE_PROMPT;
                    systemMessage = {
                        entity: "model" /* ChatMessageEntity.MODEL */ ,
                        suggestingFix: suggestingFix,
                        steps: []
                    };
                    this.doUpdate();
                    _class_private_field_set(this, _runAbortController, new AbortController());
                    signal = _class_private_field_get(this, _runAbortController).signal;
                    signal.addEventListener('abort', function() {
                        systemMessage.rpcId = undefined;
                        systemMessage.suggestingFix = false;
                        systemMessage.steps.push({
                            step: _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR,
                            text: i18nString(UIStringsTemp.stoppedResponse)
                        });
                    });
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        12
                    ]);
                    _iterator = _async_iterator(_class_private_field_get(this, _agent).run(text, {
                        signal: signal,
                        isFixQuery: isFixQuery
                    }));
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        5
                    ];
                    _value = _step.value;
                    data = _value;
                    if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.QUERYING) {
                        ;
                        systemMessage = {
                            entity: "model" /* ChatMessageEntity.MODEL */ ,
                            suggestingFix: suggestingFix,
                            steps: []
                        };
                        _class_private_field_get(this, _viewProps).messages.push(systemMessage);
                        this.doUpdate();
                        (_class_private_field_get_freestylerChatUi1 = _class_private_field_get(this, _viewOutput).freestylerChatUi) === null || _class_private_field_get_freestylerChatUi1 === void 0 ? void 0 : _class_private_field_get_freestylerChatUi1.scrollToLastMessage();
                        return [
                            3,
                            4
                        ];
                    }
                    if (data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ANSWER || data.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_8__.Step.ERROR) {
                        _class_private_field_get(this, _viewProps).isLoading = false;
                    }
                    systemMessage.rpcId = data.rpcId;
                    systemMessage.steps.push(data);
                    this.doUpdate();
                    (_class_private_field_get_freestylerChatUi = _class_private_field_get(this, _viewOutput).freestylerChatUi) === null || _class_private_field_get_freestylerChatUi === void 0 ? void 0 : _class_private_field_get_freestylerChatUi.scrollToLastMessage();
                    _state.label = 4;
                case 4:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        12
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        12
                    ];
                case 7:
                    _state.trys.push([
                        7,
                        ,
                        10,
                        11
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        3,
                        11
                    ];
                case 10:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 11:
                    return [
                        7
                    ];
                case 12:
                    return [
                        2
                    ];
            }
        });
    });
    return _startConversation1.apply(this, arguments);
}
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                switch(actionId){
                    case 'freestyler.element-panel-context':
                    case 'freestyler.style-tab-context':
                        {
                            void _async_to_generator(function() {
                                var view, widget;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view(FreestylerPanel.panelName);
                                            if (!view) return [
                                                3,
                                                3
                                            ];
                                            return [
                                                4,
                                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().showView(FreestylerPanel.panelName)
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                view.widget()
                                            ];
                                        case 2:
                                            widget = _state.sent();
                                            widget.handleAction(actionId);
                                            _state.label = 3;
                                        case 3:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            })();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
}();
function setFreestylerServerSideLoggingEnabled(enabled) {
    if (enabled) {
        localStorage.setItem('freestyler_enableServerSideLogging', 'true');
    } else {
        localStorage.removeItem('freestyler_enableServerSideLogging');
    }
}
function isFreestylerServerSideLoggingEnabled() {
    return localStorage.getItem('freestyler_enableServerSideLogging') === 'true';
}
// @ts-ignore
globalThis.setFreestylerServerSideLoggingEnabled = setFreestylerServerSideLoggingEnabled; //# sourceMappingURL=FreestylerPanel.js.map


}),
"./panels/freestyler/freestylerPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2024 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.freestyler-toolbar-container {\n  display: flex;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: 0 0 auto;\n  justify-content: space-between;\n}\n\n.freestyler-chat-ui-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  overflow: hidden;\n}\n\n/*# sourceURL=./freestylerPanel.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);