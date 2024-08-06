"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_CookieItemsView_js"], {
"./panels/application/CookieItemsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CookieItemsView: function() { return CookieItemsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/cookie_table/cookie_table.js */ "./ui/legacy/components/cookie_table/cookie_table.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _cookieItemsView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookieItemsView.css.js */ "./panels/application/cookieItemsView.css.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2009 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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
     *@description Label for checkbox to show URL-decoded cookie values
     */ showUrlDecoded: 'Show URL-decoded',
    /**
     *@description Text for web cookies
     */ cookies: 'Cookies',
    /**
     *@description Text in Cookie Items View of the Application panel
     */ selectACookieToPreviewItsValue: 'Select a cookie to preview its value',
    /**
     *@description Text for filter in Cookies View of the Application panel
     */ onlyShowCookiesWithAnIssue: 'Only show cookies with an issue',
    /**
     *@description Title for filter in the Cookies View of the Application panel
     */ onlyShowCookiesWhichHaveAn: 'Only show cookies that have an associated issue',
    /**
     *@description Label to only delete the cookies that are visible after filtering
     */ clearFilteredCookies: 'Clear filtered cookies',
    /**
     *@description Label to delete all cookies
     */ clearAllCookies: 'Clear all cookies',
    /**
     *@description Alert message for screen reader to announce # of cookies in the table
     *@example {5} PH1
     */ numberOfCookiesShownInTableS: 'Number of cookies shown in table: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/CookieItemsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var CookiePreviewWidget = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(CookiePreviewWidget, _UI_Widget_VBox);
    var _super = _create_super(CookiePreviewWidget);
    function CookiePreviewWidget() {
        _class_call_check(this, CookiePreviewWidget);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "cookie", void 0);
        _define_property(_assert_this_initialized(_this), "showDecodedSetting", void 0);
        _define_property(_assert_this_initialized(_this), "toggle", void 0);
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _this.setMinimumSize(230, 45);
        _this.cookie = null;
        _this.showDecodedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('cookie-view-show-decoded', false);
        var header = document.createElement('div');
        header.classList.add('cookie-preview-widget-header');
        var span = document.createElement('span');
        span.classList.add('cookie-preview-widget-header-label');
        span.textContent = 'Cookie Value';
        header.appendChild(span);
        _this.contentElement.appendChild(header);
        var toggle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.showUrlDecoded), _this.showDecodedSetting.get(), undefined, 'show-url-decoded');
        toggle.classList.add('cookie-preview-widget-toggle');
        toggle.checkboxElement.addEventListener('click', function() {
            return _this.showDecoded(!_this.showDecodedSetting.get());
        });
        header.appendChild(toggle);
        _this.toggle = toggle;
        var value = document.createElement('div');
        value.classList.add('cookie-preview-widget-cookie-value');
        value.textContent = '';
        value.addEventListener('dblclick', _this.handleDblClickOnCookieValue.bind(_assert_this_initialized(_this)));
        _this.value = value;
        _this.contentElement.classList.add('cookie-preview-widget');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('cookie-preview')));
        _this.contentElement.appendChild(value);
        return _this;
    }
    _create_class(CookiePreviewWidget, [
        {
            key: "showDecoded",
            value: function showDecoded(decoded) {
                if (!this.cookie) {
                    return;
                }
                this.showDecodedSetting.set(decoded);
                this.toggle.checkboxElement.checked = decoded;
                this.updatePreview();
            }
        },
        {
            key: "updatePreview",
            value: function updatePreview() {
                if (this.cookie) {
                    this.value.textContent = this.showDecodedSetting.get() ? decodeURIComponent(this.cookie.value()) : this.cookie.value();
                } else {
                    this.value.textContent = '';
                }
            }
        },
        {
            key: "setCookie",
            value: function setCookie(cookie) {
                this.cookie = cookie;
                this.updatePreview();
            }
        },
        {
            /**
     * Select all text even if there a spaces in it
     */ key: "handleDblClickOnCookieValue",
            value: function handleDblClickOnCookieValue(event) {
                event.preventDefault();
                var range = document.createRange();
                range.selectNode(this.value);
                var selection = window.getSelection();
                if (!selection) {
                    return;
                }
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    ]);
    return CookiePreviewWidget;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var CookieItemsView = /*#__PURE__*/ function(StorageItemsView) {
    "use strict";
    _inherits(CookieItemsView, StorageItemsView);
    var _super = _create_super(CookieItemsView);
    function CookieItemsView(model, cookieDomain) {
        _class_call_check(this, CookieItemsView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.cookies), 'cookiesPanel');
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "cookieDomain", void 0);
        _define_property(_assert_this_initialized(_this), "totalSize", void 0);
        _define_property(_assert_this_initialized(_this), "cookiesTable", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "previewPanel", void 0);
        _define_property(_assert_this_initialized(_this), "previewWidget", void 0);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "onlyIssuesFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "allCookies", void 0);
        _define_property(_assert_this_initialized(_this), "shownCookies", void 0);
        _define_property(_assert_this_initialized(_this), "selectedCookie", void 0);
        _this.element.classList.add('storage-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('cookies-data')));
        _this.model = model;
        _this.cookieDomain = cookieDomain;
        _this.totalSize = 0;
        _this.cookiesTable = new _ui_legacy_components_cookie_table_cookie_table_js__WEBPACK_IMPORTED_MODULE_4__.CookiesTable.CookiesTable(/* renderInline */ false, _this.saveCookie.bind(_assert_this_initialized(_this)), _this.refreshItems.bind(_assert_this_initialized(_this)), _this.handleCookieSelected.bind(_assert_this_initialized(_this)), _this.deleteCookie.bind(_assert_this_initialized(_this)));
        _this.cookiesTable.setMinimumSize(0, 50);
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(/* isVertical: */ false, /* secondIsSidebar: */ true, 'cookie-items-split-view-state');
        _this.splitWidget.show(_this.element);
        _this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox();
        _this.previewPanel.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('preview').track({
            resize: true
        })));
        var resizer = _this.previewPanel.element.createChild('div', 'preview-panel-resizer');
        _this.splitWidget.setMainWidget(_this.cookiesTable);
        _this.splitWidget.setSidebarWidget(_this.previewPanel);
        _this.splitWidget.installResizer(resizer);
        _this.previewWidget = new CookiePreviewWidget();
        _this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectACookieToPreviewItsValue));
        _this.emptyWidget.show(_this.previewPanel.contentElement);
        _this.onlyIssuesFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.onlyShowCookiesWithAnIssue), i18nString(UIStrings.onlyShowCookiesWhichHaveAn), function() {
            _this.updateWithCookies(_this.allCookies);
        }, 'only-show-cookies-with-issues');
        _this.appendToolbarItem(_this.onlyIssuesFilterUI);
        _this.allCookies = [];
        _this.shownCookies = [];
        _this.selectedCookie = null;
        _this.setCookiesDomain(model, cookieDomain);
        return _this;
    }
    _create_class(CookieItemsView, [
        {
            key: "setCookiesDomain",
            value: function setCookiesDomain(model, domain) {
                this.model.removeEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */ , this.onCookieListUpdate, this);
                this.model = model;
                this.cookieDomain = domain;
                this.refreshItems();
                this.model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */ , this.onCookieListUpdate, this);
            }
        },
        {
            key: "showPreview",
            value: function showPreview(cookie) {
                if (cookie === this.selectedCookie) {
                    return;
                }
                this.selectedCookie = cookie;
                if (!cookie) {
                    this.previewWidget.detach();
                    this.emptyWidget.show(this.previewPanel.contentElement);
                } else {
                    this.emptyWidget.detach();
                    this.previewWidget.setCookie(cookie);
                    this.previewWidget.show(this.previewPanel.contentElement);
                }
            }
        },
        {
            key: "handleCookieSelected",
            value: function handleCookieSelected() {
                var cookie = this.cookiesTable.selectedCookie();
                this.setCanDeleteSelected(Boolean(cookie));
                this.showPreview(cookie);
            }
        },
        {
            key: "saveCookie",
            value: function saveCookie(newCookie, oldCookie) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(oldCookie && newCookie.key() !== oldCookie.key())) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.model.deleteCookie(oldCookie)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _this.model.saveCookie(newCookie)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteCookie",
            value: function deleteCookie(cookie, callback) {
                void this.model.deleteCookie(cookie).then(callback);
            }
        },
        {
            key: "updateWithCookies",
            value: function updateWithCookies(allCookies) {
                this.allCookies = allCookies;
                this.totalSize = allCookies.reduce(function(size, cookie) {
                    return size + cookie.size();
                }, 0);
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(this.cookieDomain);
                var host = parsedURL ? parsedURL.host : '';
                this.cookiesTable.setCookieDomain(host);
                this.shownCookies = this.filter(allCookies, function(cookie) {
                    return "".concat(cookie.name(), " ").concat(cookie.value(), " ").concat(cookie.domain());
                });
                if (this.hasFilter()) {
                    this.setDeleteAllTitle(i18nString(UIStrings.clearFilteredCookies));
                    this.setDeleteAllGlyph('filter-clear');
                } else {
                    this.setDeleteAllTitle(i18nString(UIStrings.clearAllCookies));
                    this.setDeleteAllGlyph('clear-list');
                }
                this.cookiesTable.setCookies(this.shownCookies, this.model.getCookieToBlockedReasonsMap());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(i18nString(UIStrings.numberOfCookiesShownInTableS, {
                    PH1: this.shownCookies.length
                }));
                this.setCanFilter(true);
                this.setCanDeleteAll(this.shownCookies.length > 0);
                this.setCanDeleteSelected(Boolean(this.cookiesTable.selectedCookie()));
                if (!this.cookiesTable.selectedCookie()) {
                    this.showPreview(null);
                }
            }
        },
        {
            key: "filter",
            value: function filter(items, keyFunction) {
                var _this = this;
                var predicate = function(object) {
                    if (!_this.onlyIssuesFilterUI.checked()) {
                        return true;
                    }
                    if (_instanceof(object, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Cookie.Cookie)) {
                        return _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.RelatedIssue.hasIssues(object);
                    }
                    return false;
                };
                return _get(_get_prototype_of(CookieItemsView.prototype), "filter", this).call(this, items, keyFunction).filter(predicate);
            }
        },
        {
            /**
     * This will only delete the currently visible cookies.
     */ key: "deleteAllItems",
            value: function deleteAllItems() {
                this.showPreview(null);
                void this.model.deleteCookies(this.shownCookies);
            }
        },
        {
            key: "deleteSelectedItem",
            value: function deleteSelectedItem() {
                var selectedCookie = this.cookiesTable.selectedCookie();
                if (selectedCookie) {
                    this.showPreview(null);
                    void this.model.deleteCookie(selectedCookie);
                }
            }
        },
        {
            key: "onCookieListUpdate",
            value: function onCookieListUpdate() {
                void this.model.getCookiesForDomain(this.cookieDomain).then(this.updateWithCookies.bind(this));
            }
        },
        {
            key: "refreshItems",
            value: function refreshItems() {
                void this.model.getCookiesForDomain(this.cookieDomain, true).then(this.updateWithCookies.bind(this));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CookieItemsView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _cookieItemsView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        }
    ]);
    return CookieItemsView;
} //# sourceMappingURL=CookieItemsView.js.map
(_StorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.StorageItemsView);


}),
"./panels/application/cookieItemsView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.cookie-preview-widget {\n  padding: 2px 6px;\n}\n\n.cookie-preview-widget-header {\n  font-weight: bold;\n  user-select: none;\n  white-space: nowrap;\n  margin-bottom: 4px;\n  flex: 0 0 18px;\n  display: flex;\n  align-items: center;\n}\n\n.cookie-preview-widget-header-label {\n  line-height: 18px;\n}\n\n.cookie-preview-widget-cookie-value {\n  user-select: text;\n  word-break: break-all;\n  flex: 1;\n  overflow: auto;\n}\n\n.cookie-preview-widget-toggle {\n  margin-left: 12px;\n  font-weight: normal;\n}\n\n/*# sourceURL=cookieItemsView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);