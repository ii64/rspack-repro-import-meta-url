"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkItemView_js"], {
"./panels/network/NetworkItemView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkItemView: function() { return NetworkItemView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/network/components/components.js");
/* harmony import */var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
/* harmony import */var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/*
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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


















var UIStrings = {
    /**
     *@description Text for network request headers
     */ headers: 'Headers',
    /**
     *@description Text in Network Item View of the Network panel
     */ payload: 'Payload',
    /**
     *@description Text in Network Item View of the Network panel
     */ messages: 'Messages',
    /**
     *@description Text in Network Item View of the Network panel
     */ websocketMessages: 'WebSocket messages',
    /**
     *@description Text in Network Item View of the Network panel
     */ eventstream: 'EventStream',
    /**
     *@description Text for previewing items
     */ preview: 'Preview',
    /**
     *@description Text in Network Item View of the Network panel
     */ responsePreview: 'Response preview',
    /**
     *@description Icon title in Network Item View of the Network panel
     */ signedexchangeError: 'SignedExchange error',
    /**
     *@description Title of a tab in the Network panel. A Network response refers to the act of acknowledging a
    network request. Should not be confused with answer.
     */ response: 'Response',
    /**
     *@description Text in Network Item View of the Network panel
     */ rawResponseData: 'Raw response data',
    /**
     *@description Text for the initiator of something
     */ initiator: 'Initiator',
    /**
     * @description Tooltip for initiator view in Network panel. An initiator is a piece of code/entity
     * in the code that initiated/started the network request, i.e. caused the network request. The 'call
     * stack' is the location in the code where the initiation happened.
     */ requestInitiatorCallStack: 'Request initiator call stack',
    /**
     *@description Title of a tab in Network Item View of the Network panel.
     *The tab displays the duration breakdown of a network request.
     */ timing: 'Timing',
    /**
     *@description Text in Network Item View of the Network panel
     */ requestAndResponseTimeline: 'Request and response timeline',
    /**
     *@description Tooltip to explain the warning icon of the Cookies panel
     */ thirdPartyPhaseout: 'Cookies blocked due to third-party cookie phaseout.',
    /**
     *@description Label of a tab in the network panel. Previously known as 'Trust Tokens'.
     */ trustTokens: 'Private state tokens',
    /**
     *@description Title of the Private State Token tab in the Network panel. Previously known as 'Trust Token tab'.
     */ trustTokenOperationDetails: 'Private State Token operation details',
    /**
     *@description Text for web cookies
     */ cookies: 'Cookies',
    /**
     *@description Text in Network Item View of the Network panel
     */ requestAndResponseCookies: 'Request and response cookies',
    /**
     *@description Tooltip text explaining that DevTools has overridden the response's headers
     */ containsOverriddenHeaders: 'This response contains headers which are overridden by DevTools',
    /**
     *@description Tooltip text explaining that DevTools has overridden the response
     */ responseIsOverridden: 'This response is overridden by DevTools'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkItemView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var NetworkItemView = /*#__PURE__*/ function(_UI_TabbedPane_TabbedPane) {
    "use strict";
    _inherits(NetworkItemView, _UI_TabbedPane_TabbedPane);
    var _super = _create_super(NetworkItemView);
    function NetworkItemView(request, calculator, initialTab) {
        _class_call_check(this, NetworkItemView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "requestInternal", void 0);
        _define_property(_assert_this_initialized(_this), "resourceViewTabSetting", void 0);
        _define_property(_assert_this_initialized(_this), "headersViewComponent", void 0);
        _define_property(_assert_this_initialized(_this), "payloadView", void 0);
        _define_property(_assert_this_initialized(_this), "responseView", void 0);
        _define_property(_assert_this_initialized(_this), "cookiesView", void 0);
        _define_property(_assert_this_initialized(_this), "initialTab", void 0);
        _this.requestInternal = request;
        _this.element.classList.add('network-item-view');
        _this.headerElement().setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar('request-details').track({
            keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space'
        })));
        var headersTab = "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ ;
        _this.resourceViewTabSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resource-view-tab', "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ );
        _this.headersViewComponent = new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestHeadersView.RequestHeadersView(request);
        _this.appendTab(headersTab, i18nString(UIStrings.headers), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, _this.headersViewComponent), i18nString(UIStrings.headers));
        if (_this.requestInternal.hasOverriddenHeaders()) {
            var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = {
                iconName: 'small-status-dot',
                color: 'var(--sys-color-purple-bright)',
                width: '16px',
                height: '16px'
            };
            icon.title = i18nString(UIStrings.containsOverriddenHeaders);
            _this.setTabIcon("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ , icon);
        }
        _this.payloadView = null;
        void _this.maybeAppendPayloadPanel();
        _this.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.Events.TabSelected, _this.tabSelected, _assert_this_initialized(_this));
        if (request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket) {
            var frameView = new _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_17__.ResourceWebSocketFrameView(request);
            _this.appendTab("web-socket-frames" /* NetworkForward.UIRequestLocation.UIRequestTabs.WsFrames */ , i18nString(UIStrings.messages), frameView, i18nString(UIStrings.websocketMessages));
        } else if (request.mimeType === "text/event-stream" /* Platform.MimeType.MimeType.EVENTSTREAM */ ) {
            _this.appendTab("eventSource" /* NetworkForward.UIRequestLocation.UIRequestTabs.EventSource */ , i18nString(UIStrings.eventstream), new _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_10__.EventSourceMessagesView(request));
            _this.responseView = new _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__.RequestResponseView(request);
            _this.appendTab("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */ , i18nString(UIStrings.response), _this.responseView, i18nString(UIStrings.rawResponseData));
        } else {
            _this.responseView = new _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_15__.RequestResponseView(request);
            var previewView = new _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_14__.RequestPreviewView(request);
            _this.appendTab("preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */ , i18nString(UIStrings.preview), previewView, i18nString(UIStrings.responsePreview));
            var signedExchangeInfo = request.signedExchangeInfo();
            if (signedExchangeInfo && signedExchangeInfo.errors && signedExchangeInfo.errors.length) {
                var icon1 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                icon1.data = {
                    iconName: 'cross-circle-filled',
                    color: 'var(--icon-error)',
                    width: '14px',
                    height: '14px'
                };
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(icon1, i18nString(UIStrings.signedexchangeError));
                _this.setTabIcon("preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */ , icon1);
            }
            _this.appendTab("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */ , i18nString(UIStrings.response), _this.responseView, i18nString(UIStrings.rawResponseData));
            if (_this.requestInternal.hasOverriddenContent) {
                var icon2 = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                icon2.title = i18nString(UIStrings.responseIsOverridden);
                icon2.data = {
                    iconName: 'small-status-dot',
                    color: 'var(--sys-color-purple-bright)',
                    width: '16px',
                    height: '16px'
                };
                _this.setTabIcon("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */ , icon2);
            }
        }
        _this.appendTab("initiator" /* NetworkForward.UIRequestLocation.UIRequestTabs.Initiator */ , i18nString(UIStrings.initiator), new _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_12__.RequestInitiatorView(request), i18nString(UIStrings.requestInitiatorCallStack));
        _this.appendTab("timing" /* NetworkForward.UIRequestLocation.UIRequestTabs.Timing */ , i18nString(UIStrings.timing), new _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_16__.RequestTimingView(request, calculator), i18nString(UIStrings.requestAndResponseTimeline));
        if (request.trustTokenParams()) {
            _this.appendTab("trust-tokens" /* NetworkForward.UIRequestLocation.UIRequestTabs.TrustTokens */ , i18nString(UIStrings.trustTokens), _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestTrustTokensView.RequestTrustTokensView(request)), i18nString(UIStrings.trustTokenOperationDetails));
        }
        _this.cookiesView = null;
        _this.initialTab = initialTab || _this.resourceViewTabSetting.get();
        // Selecting tabs should not be handled by the super class.
        _this.setAutoSelectFirstItemOnShow(false);
        return _this;
    }
    _create_class(NetworkItemView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(NetworkItemView.prototype), "wasShown", this).call(this);
                this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.requestHeadersChanged, this);
                this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.ResponseHeadersChanged, this.maybeAppendCookiesPanel, this);
                this.requestInternal.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TrustTokenResultAdded, this.maybeShowErrorIconInTrustTokenTabHeader, this);
                this.maybeAppendCookiesPanel();
                this.maybeShowErrorIconInTrustTokenTabHeader();
                // Only select the initial tab the first time the view is shown after construction.
                // When the view is re-shown (without re-constructing) users or revealers might have changed
                // the selected tab in the mean time. Show the previously selected tab in that
                // case instead, by simply doing nohting.
                if (this.initialTab) {
                    this.selectTabInternal(this.initialTab);
                    this.initialTab = undefined;
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.requestHeadersChanged, this);
                this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.ResponseHeadersChanged, this.maybeAppendCookiesPanel, this);
                this.requestInternal.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.TrustTokenResultAdded, this.maybeShowErrorIconInTrustTokenTabHeader, this);
            }
        },
        {
            key: "requestHeadersChanged",
            value: function requestHeadersChanged() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.maybeAppendCookiesPanel();
                        void _this.maybeAppendPayloadPanel();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "maybeAppendCookiesPanel",
            value: function maybeAppendCookiesPanel() {
                var cookiesPresent = this.requestInternal.hasRequestCookies() || this.requestInternal.responseCookies.length > 0;
                console.assert(cookiesPresent || !this.cookiesView, 'Cookies were introduced in headers and then removed!');
                if (cookiesPresent && !this.cookiesView) {
                    this.cookiesView = new _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_11__.RequestCookiesView(this.requestInternal);
                    this.appendTab("cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */ , i18nString(UIStrings.cookies), this.cookiesView, i18nString(UIStrings.requestAndResponseCookies));
                }
                if (this.requestInternal.hasThirdPartyCookiePhaseoutIssue()) {
                    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    icon.data = {
                        iconName: 'warning-filled',
                        color: 'var(--icon-warning)',
                        width: '14px',
                        height: '14px'
                    };
                    icon.title = i18nString(UIStrings.thirdPartyPhaseout);
                    this.setTabIcon("cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */ , icon);
                }
            }
        },
        {
            key: "maybeAppendPayloadPanel",
            value: function maybeAppendPayloadPanel() {
                var _this = this;
                return _async_to_generator(function() {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.hasTab('payload')) {
                                    return [
                                        2
                                    ];
                                }
                                _tmp = _this.requestInternal.queryParameters;
                                if (_tmp) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.requestInternal.requestFormData()
                                ];
                            case 1:
                                _tmp = _state.sent();
                                _state.label = 2;
                            case 2:
                                if (_tmp) {
                                    _this.payloadView = new _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_13__.RequestPayloadView(_this.requestInternal);
                                    _this.appendTab("payload" /* NetworkForward.UIRequestLocation.UIRequestTabs.Payload */ , i18nString(UIStrings.payload), _this.payloadView, i18nString(UIStrings.payload), /* userGesture=*/ void 0, /* isCloseable=*/ void 0, /* isPreviewFeature=*/ void 0, /* index=*/ 1);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "maybeShowErrorIconInTrustTokenTabHeader",
            value: function maybeShowErrorIconInTrustTokenTabHeader() {
                var trustTokenResult = this.requestInternal.trustTokenOperationDoneEvent();
                if (trustTokenResult && !_components_components_js__WEBPACK_IMPORTED_MODULE_9__.RequestTrustTokensView.statusConsideredSuccess(trustTokenResult.status)) {
                    var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
                    icon.data = {
                        iconName: 'cross-circle-filled',
                        color: 'var(--icon-error)',
                        width: '14px',
                        height: '14px'
                    };
                    this.setTabIcon("trust-tokens" /* NetworkForward.UIRequestLocation.UIRequestTabs.TrustTokens */ , icon);
                }
            }
        },
        {
            key: "selectTabInternal",
            value: function selectTabInternal(tabId) {
                var _this = this;
                if (!this.selectTab(tabId)) {
                    // maybeAppendPayloadPanel might cause payload tab to appear asynchronously, so
                    // it makes sense to retry on the next tick
                    window.setTimeout(function() {
                        if (!_this.selectTab(tabId)) {
                            _this.selectTab("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ );
                        }
                    }, 0);
                }
            }
        },
        {
            key: "tabSelected",
            value: function tabSelected(event) {
                if (!event.data.isUserGesture) {
                    return;
                }
                this.resourceViewTabSetting.set(event.data.tabId);
            }
        },
        {
            key: "request",
            value: function request() {
                return this.requestInternal;
            }
        },
        {
            key: "revealResponseBody",
            value: function revealResponseBody(position) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_responseView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.selectTabInternal("response" /* NetworkForward.UIRequestLocation.UIRequestTabs.Response */ );
                                return [
                                    4,
                                    (_this_responseView = _this.responseView) === null || _this_responseView === void 0 ? void 0 : _this_responseView.revealPosition(position)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "revealHeader",
            value: function revealHeader(section, header) {
                this.selectTabInternal("headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ );
                this.headersViewComponent.revealHeader(section, header);
            }
        },
        {
            key: "getHeadersViewComponent",
            value: function getHeadersViewComponent() {
                return this.headersViewComponent;
            }
        }
    ]);
    return NetworkItemView;
} //# sourceMappingURL=NetworkItemView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TabbedPane.TabbedPane);


}),

}]);