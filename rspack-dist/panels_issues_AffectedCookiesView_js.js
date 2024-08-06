"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedCookiesView_js"], {
"./panels/issues/AffectedCookiesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedCookiesView: function() { return AffectedCookiesView; },
  AffectedRawCookieLinesView: function() { return AffectedRawCookieLinesView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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






var UIStrings = {
    /**
     *@description Noun, singular or plural. Label for the kind and number of affected resources associated with a DevTools issue. A cookie is a small piece of data that a server sends to the user's web browser. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.
     */ nCookies: '{n, plural, =1 {# cookie} other {# cookies}}',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Each cookie has a name.
     */ name: 'Name',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Cookies may have a 'Domain' attribute: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.#define_where_cookies_are_sent
     */ domain: 'Domain',
    /**
     *@description Noun, singular. Label for a column in a table which lists cookies in the affected resources section of a DevTools issue. Cookies may have a 'Path' attribute: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies.#define_where_cookies_are_sent
     */ path: 'Path',
    /**
     *@description Label for the the number of affected `Set-Cookie` lines associated with a DevTools issue. `Set-Cookie` is a specific header line in an HTTP network request and consists of a single line of text.
     */ nRawCookieLines: '{n, plural, =1 {1 Raw `Set-Cookie` header} other {# Raw `Set-Cookie` headers}}',
    /**
     *@description Title for text button in the Issues panel. Clicking the button navigates the user to the Network Panel. `Set-Cookie` is a specific header line in an HTTP network request and consists of a single line of text.
     */ filterSetCookieTitle: 'Show network requests that include this `Set-Cookie` header in the network panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedCookiesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _appendAffectedCookies = /*#__PURE__*/ new WeakSet(), _appendAffectedCookie = /*#__PURE__*/ new WeakSet();
var AffectedCookiesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedCookiesView, AffectedResourcesView);
    var _super = _create_super(AffectedCookiesView);
    function AffectedCookiesView() {
        _class_call_check(this, AffectedCookiesView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedCookies);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedCookie);
        return _this;
    }
    _create_class(AffectedCookiesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nCookies, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendAffectedCookies, appendAffectedCookies).call(this, this.issue.cookiesWithRequestIndicator());
            }
        }
    ]);
    return AffectedCookiesView;
}(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedResourcesView);
function appendAffectedCookies(cookies) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.name));
    this.appendColumnTitle(header, i18nString(UIStrings.domain) + ' & ' + i18nString(UIStrings.path), 'affected-resource-cookie-info-header');
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var cookie = _step.value;
            count++;
            _class_private_method_get(this, _appendAffectedCookie, appendAffectedCookie).call(this, cookie.cookie, cookie.hasRequest);
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
    this.updateAffectedResourceCount(count);
}
function appendAffectedCookie(cookie, hasAssociatedRequest) {
    var _this = this;
    var element = document.createElement('tr');
    element.classList.add('affected-resource-cookie');
    var name = document.createElement('td');
    if (hasAssociatedRequest) {
        var link = document.createElement('button');
        link.classList.add('link', 'devtools-link');
        link.textContent = cookie.name;
        link.tabIndex = 0;
        link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('issues.filter-network-requests-by-cookie').track({
            click: true
        })));
        link.addEventListener('click', function() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(_this.issue.getCategory(), "Cookie" /* AffectedItem.Cookie */ );
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.UIRequestFilter.filters([
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookieDomain,
                    filterValue: cookie.domain
                },
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookieName,
                    filterValue: cookie.name
                },
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.CookiePath,
                    filterValue: cookie.path
                }
            ]));
        });
        name.appendChild(link);
    } else {
        name.textContent = cookie.name;
    }
    element.appendChild(name);
    this.appendIssueDetailCell(element, "".concat(cookie.domain).concat(cookie.path), 'affected-resource-cookie-info');
    this.affectedResources.appendChild(element);
}
var AffectedRawCookieLinesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedRawCookieLinesView, AffectedResourcesView);
    var _super = _create_super(AffectedRawCookieLinesView);
    function AffectedRawCookieLinesView() {
        _class_call_check(this, AffectedRawCookieLinesView);
        return _super.apply(this, arguments);
    }
    _create_class(AffectedRawCookieLinesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nRawCookieLines, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var cookieLinesWithRequestIndicator = this.issue.getRawCookieLines();
                var count = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this, _loop = function() {
                        var cookie = _step.value;
                        var row = document.createElement('tr');
                        row.classList.add('affected-resource-directive');
                        if (cookie.hasRequest) {
                            var cookieLine = document.createElement('td');
                            var link = document.createElement('button');
                            link.classList.add('link', 'devtools-link');
                            link.textContent = cookie.rawCookieLine;
                            link.title = i18nString(UIStrings.filterSetCookieTitle);
                            link.tabIndex = 0;
                            link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('issues.filter-network-requests-by-raw-cookie').track({
                                click: true
                            })));
                            link.addEventListener('click', function() {
                                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.UIRequestFilter.filters([
                                    {
                                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_3__.UIFilter.FilterType.ResponseHeaderValueSetCookie,
                                        filterValue: cookie.rawCookieLine
                                    }
                                ]));
                            });
                            cookieLine.appendChild(link);
                            row.appendChild(cookieLine);
                        } else {
                            _this.appendIssueDetailCell(row, cookie.rawCookieLine);
                        }
                        _this.affectedResources.appendChild(row);
                        count++;
                    };
                    for(var _iterator = cookieLinesWithRequestIndicator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
                this.updateAffectedResourceCount(count);
            }
        }
    ]);
    return AffectedRawCookieLinesView;
} //# sourceMappingURL=AffectedCookiesView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_5__.AffectedResourcesView);


}),

}]);