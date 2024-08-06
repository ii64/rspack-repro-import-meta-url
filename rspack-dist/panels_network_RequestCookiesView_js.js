"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestCookiesView_js"], {
"./panels/network/RequestCookiesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestCookiesView: function() { return RequestCookiesView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/cookie_table/cookie_table.js */ "./ui/legacy/components/cookie_table/cookie_table.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _requestCookiesView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requestCookiesView.css.js */ "./panels/network/requestCookiesView.css.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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








var UIStrings = {
    /**
     *@description Text in Request Cookies View of the Network panel
     */ thisRequestHasNoCookies: 'This request has no cookies.',
    /**
     * @description Title for a table which shows all of the cookies associated with a selected network
     * request, in the Network panel. Noun phrase.
     */ requestCookies: 'Request Cookies',
    /**
     *@description Tooltip to explain what request cookies are
     */ cookiesThatWereSentToTheServerIn: 'Cookies that were sent to the server in the \'cookie\' header of the request',
    /**
     *@description Label for showing request cookies that were not actually sent
     */ showFilteredOutRequestCookies: 'show filtered out request cookies',
    /**
     *@description Text in Request Headers View of the Network Panel
     */ noRequestCookiesWereSent: 'No request cookies were sent.',
    /**
     *@description Text in Request Cookies View of the Network panel
     */ responseCookies: 'Response Cookies',
    /**
     *@description Tooltip to explain what response cookies are
     */ cookiesThatWereReceivedFromThe: 'Cookies that were received from the server in the \'`set-cookie`\' header of the response',
    /**
     *@description Label for response cookies with invalid syntax
     */ malformedResponseCookies: 'Malformed Response Cookies',
    /**
     * @description Tooltip to explain what malformed response cookies are. Malformed cookies are
     * cookies that did not match the expected format and could not be interpreted, and are invalid.
     */ cookiesThatWereReceivedFromTheServer: 'Cookies that were received from the server in the \'`set-cookie`\' header of the response but were malformed',
    /**
     * @description Informational text to explain that there were other cookies
     * that were not used and not shown in the list.
     * @example {Learn more} PH1
     *
     */ siteHasCookieInOtherPartition: 'This site has cookies in another partition, that were not sent with this request. {PH1}',
    /**
     * @description Title of a link to the developer documentation.
     */ learnMore: 'Learn more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/RequestCookiesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var RequestCookiesView = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(RequestCookiesView, _UI_Widget_Widget);
    var _super = _create_super(RequestCookiesView);
    function RequestCookiesView(request) {
        _class_call_check(this, RequestCookiesView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "showFilteredOutCookiesSetting", void 0);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "requestCookiesTitle", void 0);
        _define_property(_assert_this_initialized(_this), "requestCookiesEmpty", void 0);
        _define_property(_assert_this_initialized(_this), "requestCookiesTable", void 0);
        _define_property(_assert_this_initialized(_this), "responseCookiesTitle", void 0);
        _define_property(_assert_this_initialized(_this), "responseCookiesTable", void 0);
        _define_property(_assert_this_initialized(_this), "siteHasCookieInOtherPartition", void 0);
        _define_property(_assert_this_initialized(_this), "malformedResponseCookiesTitle", void 0);
        _define_property(_assert_this_initialized(_this), "malformedResponseCookiesList", void 0);
        _this.element.classList.add('request-cookies-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('cookies').track({
            resize: true
        })));
        _this.request = request;
        _this.showFilteredOutCookiesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-filtered-out-request-cookies', /* defaultValue */ false);
        _this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoCookies));
        _this.emptyWidget.show(_this.element);
        _this.requestCookiesTitle = _this.element.createChild('div');
        var titleText = _this.requestCookiesTitle.createChild('span', 'request-cookies-title');
        titleText.textContent = i18nString(UIStrings.requestCookies);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(titleText, i18nString(UIStrings.cookiesThatWereSentToTheServerIn));
        var requestCookiesCheckbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.createSettingCheckbox(i18nString(UIStrings.showFilteredOutRequestCookies), _this.showFilteredOutCookiesSetting, true);
        requestCookiesCheckbox.checkboxElement.addEventListener('change', function() {
            _this.refreshRequestCookiesView();
        });
        _this.requestCookiesTitle.appendChild(requestCookiesCheckbox);
        _this.requestCookiesEmpty = _this.element.createChild('div', 'cookies-panel-item');
        _this.requestCookiesEmpty.textContent = i18nString(UIStrings.noRequestCookiesWereSent);
        _this.requestCookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__.CookiesTable.CookiesTable(/* renderInline */ true);
        _this.requestCookiesTable.contentElement.classList.add('cookie-table', 'cookies-panel-item');
        _this.requestCookiesTable.show(_this.element);
        _this.siteHasCookieInOtherPartition = _this.element.createChild('div', 'cookies-panel-item site-has-cookies-in-other-partition');
        _this.siteHasCookieInOtherPartition.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.siteHasCookieInOtherPartition, {
            PH1: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://developer.chrome.com/en/docs/privacy-sandbox/chips/', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')
        }));
        _this.responseCookiesTitle = _this.element.createChild('div', 'request-cookies-title');
        _this.responseCookiesTitle.textContent = i18nString(UIStrings.responseCookies);
        _this.responseCookiesTitle.title = i18nString(UIStrings.cookiesThatWereReceivedFromThe);
        _this.responseCookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__.CookiesTable.CookiesTable(/* renderInline */ true);
        _this.responseCookiesTable.contentElement.classList.add('cookie-table', 'cookies-panel-item');
        _this.responseCookiesTable.show(_this.element);
        _this.malformedResponseCookiesTitle = _this.element.createChild('div', 'request-cookies-title');
        _this.malformedResponseCookiesTitle.textContent = i18nString(UIStrings.malformedResponseCookies);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(_this.malformedResponseCookiesTitle, i18nString(UIStrings.cookiesThatWereReceivedFromTheServer));
        _this.malformedResponseCookiesList = _this.element.createChild('div');
        return _this;
    }
    _create_class(RequestCookiesView, [
        {
            key: "getRequestCookies",
            value: function getRequestCookies() {
                var requestCookieToBlockedReasons = new Map();
                var requestCookieToExemptionReason = new Map();
                var requestCookies = this.request.includedRequestCookies().map(function(includedRequestCookie) {
                    return includedRequestCookie.cookie;
                });
                if (this.showFilteredOutCookiesSetting.get()) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.request.blockedRequestCookies()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var blockedCookie = _step.value;
                            requestCookieToBlockedReasons.set(blockedCookie.cookie, blockedCookie.blockedReasons.map(function(blockedReason) {
                                return {
                                    attribute: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieBlockedReasonToAttribute(blockedReason),
                                    uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieBlockedReasonToUiString(blockedReason)
                                };
                            }));
                            requestCookies.push(blockedCookie.cookie);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.request.includedRequestCookies()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var includedCookie = _step1.value;
                        if (includedCookie.exemptionReason) {
                            requestCookieToExemptionReason.set(includedCookie.cookie, {
                                uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieExemptionReasonToUiString(includedCookie.exemptionReason)
                            });
                        }
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
                return {
                    requestCookies: requestCookies,
                    requestCookieToBlockedReasons: requestCookieToBlockedReasons,
                    requestCookieToExemptionReason: requestCookieToExemptionReason
                };
            }
        },
        {
            key: "getResponseCookies",
            value: function getResponseCookies() {
                var responseCookies = [];
                var responseCookieToBlockedReasons = new Map();
                var responseCookieToExemptionReason = new Map();
                var malformedResponseCookies = [];
                if (this.request.responseCookies.length) {
                    responseCookies = this.request.nonBlockedResponseCookies();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.request.blockedResponseCookies()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var blockedCookie = _step.value;
                            var parsedCookies = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieParser.CookieParser.parseSetCookie(blockedCookie.cookieLine);
                            if (parsedCookies && !parsedCookies.length || blockedCookie.blockedReasons.includes("SyntaxError" /* Protocol.Network.SetCookieBlockedReason.SyntaxError */ ) || blockedCookie.blockedReasons.includes("NameValuePairExceedsMaxSize" /* Protocol.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize */ )) {
                                malformedResponseCookies.push(blockedCookie);
                                continue;
                            }
                            var cookie = blockedCookie.cookie;
                            if (!cookie && parsedCookies) {
                                cookie = parsedCookies[0];
                            }
                            if (cookie) {
                                responseCookieToBlockedReasons.set(cookie, blockedCookie.blockedReasons.map(function(blockedReason) {
                                    return {
                                        attribute: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToAttribute(blockedReason),
                                        uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString(blockedReason)
                                    };
                                }));
                                responseCookies.push(cookie);
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
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        var _loop = function() {
                            var exemptedCookie = _step1.value;
                            // `responseCookies` are generated from `Set-Cookie` header, which should include the exempted cookies, whereas
                            // exempted cookies are received via CDP as objects of type cookie. Therefore they are different objects in
                            // DevTools and need to be matched here in order for the rendering logic to be able to lookup a potential
                            // exemption reason for a cookie.
                            var matchedResponseCookie = responseCookies.find(function(responseCookie) {
                                return exemptedCookie.cookieLine === responseCookie.getCookieLine();
                            });
                            if (matchedResponseCookie) {
                                responseCookieToExemptionReason.set(matchedResponseCookie, {
                                    uiString: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.cookieExemptionReasonToUiString(exemptedCookie.exemptionReason)
                                });
                            }
                        };
                        for(var _iterator1 = this.request.exemptedResponseCookies()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop();
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
                }
                return {
                    responseCookies: responseCookies,
                    responseCookieToBlockedReasons: responseCookieToBlockedReasons,
                    responseCookieToExemptionReason: responseCookieToExemptionReason,
                    malformedResponseCookies: malformedResponseCookies
                };
            }
        },
        {
            key: "refreshRequestCookiesView",
            value: function refreshRequestCookiesView() {
                if (!this.isShowing()) {
                    return;
                }
                var gotCookies = this.request.hasRequestCookies() || this.request.responseCookies.length;
                if (gotCookies) {
                    this.emptyWidget.hideWidget();
                } else {
                    this.emptyWidget.showWidget();
                }
                var _this_getRequestCookies = this.getRequestCookies(), requestCookies = _this_getRequestCookies.requestCookies, requestCookieToBlockedReasons = _this_getRequestCookies.requestCookieToBlockedReasons, requestCookieToExemptionReason = _this_getRequestCookies.requestCookieToExemptionReason;
                var _this_getResponseCookies = this.getResponseCookies(), responseCookies = _this_getResponseCookies.responseCookies, responseCookieToBlockedReasons = _this_getResponseCookies.responseCookieToBlockedReasons, responseCookieToExemptionReason = _this_getResponseCookies.responseCookieToExemptionReason, malformedResponseCookies = _this_getResponseCookies.malformedResponseCookies;
                if (requestCookies.length) {
                    this.requestCookiesTitle.classList.remove('hidden');
                    this.requestCookiesEmpty.classList.add('hidden');
                    this.requestCookiesTable.showWidget();
                    this.requestCookiesTable.setCookies(requestCookies, requestCookieToBlockedReasons, requestCookieToExemptionReason);
                } else if (this.request.blockedRequestCookies().length) {
                    this.requestCookiesTitle.classList.remove('hidden');
                    this.requestCookiesEmpty.classList.remove('hidden');
                    this.requestCookiesTable.hideWidget();
                } else {
                    this.requestCookiesTitle.classList.add('hidden');
                    this.requestCookiesEmpty.classList.add('hidden');
                    this.requestCookiesTable.hideWidget();
                }
                if (responseCookies.length) {
                    this.responseCookiesTitle.classList.remove('hidden');
                    this.responseCookiesTable.showWidget();
                    this.responseCookiesTable.setCookies(responseCookies, responseCookieToBlockedReasons, responseCookieToExemptionReason);
                } else {
                    this.responseCookiesTitle.classList.add('hidden');
                    this.responseCookiesTable.hideWidget();
                }
                if (malformedResponseCookies.length) {
                    this.malformedResponseCookiesTitle.classList.remove('hidden');
                    this.malformedResponseCookiesList.classList.remove('hidden');
                    this.malformedResponseCookiesList.removeChildren();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = malformedResponseCookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var malformedCookie = _step.value;
                            var listItem = this.malformedResponseCookiesList.createChild('span', 'cookie-line source-code');
                            var icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                            icon.data = {
                                iconName: 'cross-circle-filled',
                                color: 'var(--icon-error)',
                                width: '14px',
                                height: '14px'
                            };
                            icon.classList.add('cookie-warning-icon');
                            listItem.appendChild(icon);
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(listItem, malformedCookie.cookieLine);
                            if (malformedCookie.blockedReasons.includes("NameValuePairExceedsMaxSize" /* Protocol.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize */ )) {
                                listItem.title = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString("NameValuePairExceedsMaxSize" /* Protocol.Network.SetCookieBlockedReason.NameValuePairExceedsMaxSize */ );
                            } else {
                                listItem.title = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.setCookieBlockedReasonToUiString("SyntaxError" /* Protocol.Network.SetCookieBlockedReason.SyntaxError */ );
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
                } else {
                    this.malformedResponseCookiesTitle.classList.add('hidden');
                    this.malformedResponseCookiesList.classList.add('hidden');
                }
                if (this.request.siteHasCookieInOtherPartition()) {
                    this.siteHasCookieInOtherPartition.classList.remove('hidden');
                } else {
                    this.siteHasCookieInOtherPartition.classList.add('hidden');
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(RequestCookiesView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _requestCookiesView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.RequestHeadersChanged, this.refreshRequestCookiesView, this);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.ResponseHeadersChanged, this.refreshRequestCookiesView, this);
                this.refreshRequestCookiesView();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.RequestHeadersChanged, this.refreshRequestCookiesView, this);
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.Events.ResponseHeadersChanged, this.refreshRequestCookiesView, this);
            }
        }
    ]);
    return RequestCookiesView;
} //# sourceMappingURL=RequestCookiesView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget);


}),
"./panels/network/requestCookiesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.request-cookies-view {\n  overflow: auto;\n  padding: 12px;\n  height: 100%;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.request-cookies-view .request-cookies-title {\n  font-size: 12px;\n  font-weight: bold;\n  margin-right: 30px;\n  color: var(--sys-color-on-surface);\n}\n\n.request-cookies-view .cookie-line {\n  margin-top: 6px;\n  display: flex;\n}\n\n.request-cookies-view .cookies-panel-item {\n  margin-top: 6px;\n  margin-bottom: 16px;\n  flex: none;\n}\n\n@media (forced-colors: active) {\n  td.flagged-cookie-attribute-cell .cookie-warning-icon {\n    forced-color-adjust: none;\n    filter: grayscale();\n  }\n}\n\n/*# sourceURL=requestCookiesView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/legacy/components/cookie_table/cookie_table.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CookiesTable: function() { return /* reexport module object */ _CookiesTable_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _CookiesTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiesTable.js */ "./ui/legacy/components/cookie_table/CookiesTable.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=cookie_table.js.map


}),

}]);