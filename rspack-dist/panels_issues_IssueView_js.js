"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_IssueView_js"], {
"./panels/issues/AffectedBlockedByResponseView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedBlockedByResponseView: function() { return AffectedBlockedByResponseView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
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
     *@description Noun for singular or plural network requests. Label for the affected resources section in the issue view.
     */ nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Noun for a singular network request. Label for a column in the affected resources table in the issue view.
     */ requestC: 'Request',
    /**
     *@description Noun for a singular parent frame. Label for a column in the affected resources table in the issue view.
     */ parentFrame: 'Parent Frame',
    /**
     *@description Noun for a singular resource that was blocked (an example for a blocked resource would be a frame). Label for a column in the affected resources table in the issue view.
     */ blockedResource: 'Blocked Resource'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedBlockedByResponseView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _appendDetails = /*#__PURE__*/ new WeakSet(), _appendDetail = /*#__PURE__*/ new WeakSet();
var AffectedBlockedByResponseView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedBlockedByResponseView, AffectedResourcesView);
    var _super = _create_super(AffectedBlockedByResponseView);
    function AffectedBlockedByResponseView() {
        _class_call_check(this, AffectedBlockedByResponseView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetail);
        return _this;
    }
    _create_class(AffectedBlockedByResponseView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nRequests, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendDetails, appendDetails).call(this, this.issue.getBlockedByResponseDetails());
            }
        }
    ]);
    return AffectedBlockedByResponseView;
} //# sourceMappingURL=AffectedBlockedByResponseView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView);
function appendDetails(details) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.requestC));
    this.appendColumnTitle(header, i18nString(UIStrings.parentFrame));
    this.appendColumnTitle(header, i18nString(UIStrings.blockedResource));
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = details[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var detail = _step.value;
            _class_private_method_get(this, _appendDetail, appendDetail).call(this, detail);
            count++;
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
function appendDetail(details) {
    var element = document.createElement('tr');
    element.classList.add('affected-resource-row');
    var requestCell = this.createRequestCell(details.request, {
        additionalOnClickAction: function additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_2__.userMetrics.issuesPanelResourceOpened("CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */ , "Request" /* AffectedItem.Request */ );
        }
    });
    element.appendChild(requestCell);
    if (details.parentFrame) {
        var frameUrl = this.createFrameCell(details.parentFrame.frameId, this.issue.getCategory());
        element.appendChild(frameUrl);
    } else {
        element.appendChild(document.createElement('td'));
    }
    if (details.blockedFrame) {
        var frameUrl1 = this.createFrameCell(details.blockedFrame.frameId, this.issue.getCategory());
        element.appendChild(frameUrl1);
    } else {
        element.appendChild(document.createElement('td'));
    }
    this.affectedResources.appendChild(element);
}


}),
"./panels/issues/AffectedMetadataAllowedSitesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedMetadataAllowedSitesView: function() { return AffectedMetadataAllowedSitesView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
     *@description Label for the the number of affected `Allowed Sites` associated with a
     *DevTools issue. In this context, `Allowed` refers to permission to access cookies
     *via the third-party cookie deprecation global metadata, and `Site` is equivalent
     *to eTLD+1.
     *See https://developer.mozilla.org/en-US/docs/Glossary/eTLD.
     */ nAllowedSites: '{n, plural, =1 {1 website allowed to access cookies} other {# websites allowed to access cookies}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedMetadataAllowedSitesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var AffectedMetadataAllowedSitesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedMetadataAllowedSitesView, AffectedResourcesView);
    var _super = _create_super(AffectedMetadataAllowedSitesView);
    function AffectedMetadataAllowedSitesView() {
        _class_call_check(this, AffectedMetadataAllowedSitesView);
        return _super.apply(this, arguments);
    }
    _create_class(AffectedMetadataAllowedSitesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nAllowedSites, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var issues = this.issue.getCookieDeprecationMetadataIssues();
                var count = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var issueData = _step.value;
                        var row = document.createElement('tr');
                        row.classList.add('affected-resource-directive');
                        var textContentElement = document.createElement('div');
                        var textElement = document.createElement('span');
                        textElement.textContent = issueData.details().allowedSites.join(', ');
                        textContentElement.appendChild(textElement);
                        if (!issueData.details().isOptOutTopLevel && issueData.details().optOutPercentage > 0) {
                            var optOutTextElement = document.createElement('span');
                            optOutTextElement.textContent = ' (opt-out: ' + issueData.details().optOutPercentage + '% - ';
                            textContentElement.appendChild(optOutTextElement);
                            var linkElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.XLink.XLink.create('https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out', 'learn more');
                            textContentElement.appendChild(linkElement);
                            var endTextElement = document.createElement('span');
                            endTextElement.textContent = ')';
                            textContentElement.appendChild(endTextElement);
                        }
                        this.appendIssueDetailCell(row, textContentElement);
                        this.affectedResources.appendChild(row);
                        count++;
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
        }
    ]);
    return AffectedMetadataAllowedSitesView;
} //# sourceMappingURL=AffectedMetadataAllowedSitesView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView);


}),
"./panels/issues/AffectedSourcesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedSourcesView: function() { return AffectedSourcesView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
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
     *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view
     */ nSources: '{n, plural, =1 {# source} other {# sources}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _appendAffectedSources = /*#__PURE__*/ new WeakSet(), _appendAffectedSource = /*#__PURE__*/ new WeakSet();
var AffectedSourcesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedSourcesView, AffectedResourcesView);
    var _super = _create_super(AffectedSourcesView);
    function AffectedSourcesView() {
        _class_call_check(this, AffectedSourcesView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedSources);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedSource);
        return _this;
    }
    _create_class(AffectedSourcesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nSources, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendAffectedSources, appendAffectedSources).call(this, this.issue.sources());
            }
        }
    ]);
    return AffectedSourcesView;
} //# sourceMappingURL=AffectedSourcesView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_3__.AffectedResourcesView);
function appendAffectedSources(affectedSources) {
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = affectedSources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var source = _step.value;
            _class_private_method_get(this, _appendAffectedSource, appendAffectedSource).call(this, source);
            count++;
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
function appendAffectedSource(param) {
    var url = param.url, lineNumber = param.lineNumber, columnNumber = param.columnNumber;
    var cellElement = document.createElement('td');
    // TODO(chromium:1072331): Check feasibility of plumping through scriptId for `linkifyScriptLocation`
    //                         to support source maps and formatted scripts.
    var linkifierURLOptions = {
        columnNumber: columnNumber,
        lineNumber: lineNumber,
        tabStop: true,
        showColumnNumber: false,
        inlineFrameIndex: 0
    };
    // An element created with linkifyURL can subscribe to the events
    // 'click' neither 'keydown' if that key is the 'Enter' key.
    // Also, this element has a context menu, so we should be able to
    // track when the user use the context menu too.
    // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.
    var anchorElement = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__.Linkifier.Linkifier.linkifyURL(url, linkifierURLOptions);
    anchorElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link('source-location').track({
        click: true
    })));
    cellElement.appendChild(anchorElement);
    var rowElement = document.createElement('tr');
    rowElement.classList.add('affected-resource-source');
    rowElement.appendChild(cellElement);
    this.affectedResources.appendChild(rowElement);
}


}),
"./panels/issues/AffectedTrackingSitesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedTrackingSitesView: function() { return AffectedTrackingSitesView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
     *@description Label for the the number of affected `Potentially-tracking Sites` associated with a
     *DevTools issue. In this context, `tracking` refers to bounce tracking and `Site` is equivalent
     *to eTLD+1.
     *See https://github.com/privacycg/nav-tracking-mitigations/blob/main/bounce-tracking-explainer.md
     *and https://developer.mozilla.org/en-US/docs/Glossary/eTLD.
     */ nTrackingSites: '{n, plural, =1 {1 potentially tracking website} other {# potentially tracking websites}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedTrackingSitesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var AffectedTrackingSitesView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedTrackingSitesView, AffectedResourcesView);
    var _super = _create_super(AffectedTrackingSitesView);
    function AffectedTrackingSitesView() {
        _class_call_check(this, AffectedTrackingSitesView);
        return _super.apply(this, arguments);
    }
    _create_class(AffectedTrackingSitesView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nTrackingSites, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var trackingSites = this.issue.getBounceTrackingSites();
                var count = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = trackingSites[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var site = _step.value;
                        var row = document.createElement('tr');
                        row.classList.add('affected-resource-directive');
                        this.appendIssueDetailCell(row, site);
                        this.affectedResources.appendChild(row);
                        count++;
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
        }
    ]);
    return AffectedTrackingSitesView;
} //# sourceMappingURL=AffectedTrackingSitesView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView);


}),
"./panels/issues/IssueView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IssueView: function() { return IssueView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AffectedBlockedByResponseView.js */ "./panels/issues/AffectedBlockedByResponseView.js");
/* harmony import */var _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AffectedCookiesView.js */ "./panels/issues/AffectedCookiesView.js");
/* harmony import */var _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AffectedDirectivesView.js */ "./panels/issues/AffectedDirectivesView.js");
/* harmony import */var _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AffectedDocumentsInQuirksModeView.js */ "./panels/issues/AffectedDocumentsInQuirksModeView.js");
/* harmony import */var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./panels/issues/AffectedElementsView.js");
/* harmony import */var _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AffectedElementsWithLowContrastView.js */ "./panels/issues/AffectedElementsWithLowContrastView.js");
/* harmony import */var _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AffectedHeavyAdView.js */ "./panels/issues/AffectedHeavyAdView.js");
/* harmony import */var _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AffectedMetadataAllowedSitesView.js */ "./panels/issues/AffectedMetadataAllowedSitesView.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
/* harmony import */var _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AffectedSharedArrayBufferIssueDetailsView.js */ "./panels/issues/AffectedSharedArrayBufferIssueDetailsView.js");
/* harmony import */var _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./AffectedSourcesView.js */ "./panels/issues/AffectedSourcesView.js");
/* harmony import */var _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AffectedTrackingSitesView.js */ "./panels/issues/AffectedTrackingSitesView.js");
/* harmony import */var _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./AttributionReportingIssueDetailsView.js */ "./panels/issues/AttributionReportingIssueDetailsView.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/components.js */ "./panels/issues/components/components.js");
/* harmony import */var _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CorsIssueDetailsView.js */ "./panels/issues/CorsIssueDetailsView.js");
/* harmony import */var _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./GenericIssueDetailsView.js */ "./panels/issues/GenericIssueDetailsView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        '<x-link class="link devtools-link" tabindex="0" href=',
        ">",
        "</x-link>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}



























var UIStrings = {
    /**
     *@description Noun, singular. Label for a column or field containing the name of an entity.
     */ name: 'Name',
    /**
     *@description The kind of resolution for a mixed content issue
     */ blocked: 'blocked',
    /**
     *@description Label for a type of issue that can appear in the Issues view. Noun for singular or plural number of network requests.
     */ nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Label for singular or plural number of affected resources in issue view
     */ nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Label for mixed content issue's restriction status
     */ restrictionStatus: 'Restriction Status',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was only warned, and not removed.
     */ warned: 'Warned',
    /**
     *@description Header for the section listing affected resources
     */ affectedResources: 'Affected Resources',
    /**
     *@description Title for a link to further information in issue view
     *@example {SameSite Cookies Explained} PH1
     */ learnMoreS: 'Learn more: {PH1}',
    /**
     *@description The kind of resolution for a mixed content issue
     */ automaticallyUpgraded: 'automatically upgraded',
    /**
     *@description Menu entry for hiding a particular issue, in the Hide Issues context menu.
     */ hideIssuesLikeThis: 'Hide issues like this',
    /**
     *@description Menu entry for unhiding a particular issue, in the Hide Issues context menu.
     */ unhideIssuesLikeThis: 'Unhide issues like this'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/IssueView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _appendAffectedRequests = /*#__PURE__*/ new WeakSet();
var AffectedRequestsView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedRequestsView, AffectedResourcesView);
    var _super = _create_super(AffectedRequestsView);
    function AffectedRequestsView() {
        _class_call_check(this, AffectedRequestsView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedRequests);
        return _this;
    }
    _create_class(AffectedRequestsView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nRequests, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    for(var _iterator = this.issue.getBlockedByResponseDetails()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var unused = _step.value;
                        // If the issue has blockedByResponseDetails, the corresponding AffectedBlockedByResponseView
                        // will take care of displaying the request.
                        this.updateAffectedResourceCount(0);
                        return;
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
                if (this.issue.getCategory() === "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */ ) {
                    // The AffectedMixedContentView takes care of displaying the resources.
                    this.updateAffectedResourceCount(0);
                    return;
                }
                _class_private_method_get(this, _appendAffectedRequests, appendAffectedRequests).call(this, this.issue.requests());
            }
        }
    ]);
    return AffectedRequestsView;
}(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.AffectedResourcesView);
function appendAffectedRequests(affectedRequests) {
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _this, _loop = function() {
            var affectedRequest = _step.value;
            var element = document.createElement('tr');
            element.classList.add('affected-resource-request');
            var category = _this.issue.getCategory();
            var tab = issueTypeToNetworkHeaderMap.get(category) || "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ ;
            element.appendChild(_this.createRequestCell(affectedRequest, {
                networkTab: tab,
                additionalOnClickAction: function additionalOnClickAction() {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(category, "Request" /* AffectedItem.Request */ );
                }
            }));
            _this.affectedResources.appendChild(element);
            count++;
        };
        for(var _iterator = affectedRequests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
var issueTypeToNetworkHeaderMap = new Map([
    [
        "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */ ,
        "cookies" /* NetworkForward.UIRequestLocation.UIRequestTabs.Cookies */ 
    ],
    [
        "CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */ ,
        "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ 
    ],
    [
        "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */ ,
        "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ 
    ]
]);
var _appendAffectedMixedContentDetails = /*#__PURE__*/ new WeakSet();
var AffectedMixedContentView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedMixedContentView, AffectedResourcesView);
    var _super = _create_super(AffectedMixedContentView);
    function AffectedMixedContentView() {
        _class_call_check(this, AffectedMixedContentView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedMixedContentDetails);
        return _this;
    }
    _create_class(AffectedMixedContentView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nResources, {
                    n: count
                });
            }
        },
        {
            key: "appendAffectedMixedContent",
            value: function appendAffectedMixedContent(mixedContent) {
                var element = document.createElement('tr');
                element.classList.add('affected-resource-mixed-content');
                if (mixedContent.request) {
                    var networkTab = issueTypeToNetworkHeaderMap.get(this.issue.getCategory()) || "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ ;
                    element.appendChild(this.createRequestCell(mixedContent.request, {
                        networkTab: networkTab,
                        additionalOnClickAction: function additionalOnClickAction() {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened("MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */ , "Request" /* AffectedItem.Request */ );
                        }
                    }));
                } else {
                    var filename = (0,_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.extractShortPath)(mixedContent.insecureURL);
                    var cell = this.appendIssueDetailCell(element, filename, 'affected-resource-mixed-content-info');
                    cell.title = mixedContent.insecureURL;
                }
                this.appendIssueDetailCell(element, AffectedMixedContentView.translateStatus(mixedContent.resolutionStatus), 'affected-resource-mixed-content-info');
                this.affectedResources.appendChild(element);
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendAffectedMixedContentDetails, appendAffectedMixedContentDetails).call(this, this.issue.getMixedContentIssues());
            }
        }
    ], [
        {
            key: "translateStatus",
            value: function translateStatus(resolutionStatus) {
                switch(resolutionStatus){
                    case "MixedContentBlocked" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentBlocked */ :
                        return i18nString(UIStrings.blocked);
                    case "MixedContentAutomaticallyUpgraded" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentAutomaticallyUpgraded */ :
                        return i18nString(UIStrings.automaticallyUpgraded);
                    case "MixedContentWarning" /* Protocol.Audits.MixedContentResolutionStatus.MixedContentWarning */ :
                        return i18nString(UIStrings.warned);
                }
            }
        }
    ]);
    return AffectedMixedContentView;
}(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_19__.AffectedResourcesView);
function appendAffectedMixedContentDetails(mixedContentIssues) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.name));
    this.appendColumnTitle(header, i18nString(UIStrings.restrictionStatus));
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = mixedContentIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            var details = issue.getDetails();
            this.appendAffectedMixedContent(details);
            count++;
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
var _issue = /*#__PURE__*/ new WeakMap(), _description = /*#__PURE__*/ new WeakMap(), _affectedResourceViews = /*#__PURE__*/ new WeakMap(), _aggregatedIssuesCount = /*#__PURE__*/ new WeakMap(), _issueKindIcon = /*#__PURE__*/ new WeakMap(), _hasBeenExpandedBefore = /*#__PURE__*/ new WeakMap(), _throttle = /*#__PURE__*/ new WeakMap(), _needsUpdateOnExpand = /*#__PURE__*/ new WeakMap(), _hiddenIssuesMenu = /*#__PURE__*/ new WeakMap(), _contentCreated = /*#__PURE__*/ new WeakMap(), _updateAffectedResourcesPositionAndSize = /*#__PURE__*/ new WeakSet(), _appendHeader = /*#__PURE__*/ new WeakSet(), _updateFromIssue = /*#__PURE__*/ new WeakSet(), _createAffectedResources = /*#__PURE__*/ new WeakSet(), _createBody = /*#__PURE__*/ new WeakSet(), _createReadMoreLinks = /*#__PURE__*/ new WeakSet(), _doUpdate = /*#__PURE__*/ new WeakSet();
var IssueView = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(IssueView, _UI_TreeOutline_TreeElement);
    var _super = _create_super(IssueView);
    function IssueView(issue, description) {
        _class_call_check(this, IssueView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _updateAffectedResourcesPositionAndSize);
        _class_private_method_init(_assert_this_initialized(_this), _appendHeader);
        _class_private_method_init(_assert_this_initialized(_this), _updateFromIssue);
        _class_private_method_init(_assert_this_initialized(_this), _createAffectedResources);
        _class_private_method_init(_assert_this_initialized(_this), _createBody);
        _class_private_method_init(_assert_this_initialized(_this), _createReadMoreLinks);
        _class_private_method_init(_assert_this_initialized(_this), _doUpdate);
        _class_private_field_init(_assert_this_initialized(_this), _issue, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _description, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _define_property(_assert_this_initialized(_this), "affectedResources", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _affectedResourceViews, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _aggregatedIssuesCount, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issueKindIcon, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _hasBeenExpandedBefore, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _throttle, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _needsUpdateOnExpand, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _hiddenIssuesMenu, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _contentCreated, {
            writable: true,
            value: false
        });
        _class_private_field_set(_assert_this_initialized(_this), _issue, issue);
        _class_private_field_set(_assert_this_initialized(_this), _description, description);
        _class_private_field_set(_assert_this_initialized(_this), _throttle, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(250));
        _this.toggleOnClick = true;
        _this.listItemElement.classList.add('issue');
        _this.childrenListElement.classList.add('body');
        _this.childrenListElement.classList.add(IssueView.getBodyCSSClass(_class_private_field_get(_this, _issue).getKind()));
        _this.affectedResources = _class_private_method_get(_this, _createAffectedResources, createAffectedResources).call(_assert_this_initialized(_this));
        _class_private_field_set(_assert_this_initialized(_this), _affectedResourceViews, [
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__.AffectedCookiesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-cookies'),
            new _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_15__.AffectedElementsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-elements'),
            new AffectedRequestsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-requests'),
            new AffectedMixedContentView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'mixed-content-details'),
            new _AffectedSourcesView_js__WEBPACK_IMPORTED_MODULE_21__.AffectedSourcesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-sources'),
            new _AffectedHeavyAdView_js__WEBPACK_IMPORTED_MODULE_17__.AffectedHeavyAdView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'heavy-ad-details'),
            new _AffectedDirectivesView_js__WEBPACK_IMPORTED_MODULE_13__.AffectedDirectivesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'directives-details'),
            new _AffectedBlockedByResponseView_js__WEBPACK_IMPORTED_MODULE_11__.AffectedBlockedByResponseView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'blocked-by-response-details'),
            new _AffectedSharedArrayBufferIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_20__.AffectedSharedArrayBufferIssueDetailsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'sab-details'),
            new _AffectedElementsWithLowContrastView_js__WEBPACK_IMPORTED_MODULE_16__.AffectedElementsWithLowContrastView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'low-contrast-details'),
            new _CorsIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_25__.CorsIssueDetailsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'cors-details'),
            new _GenericIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_26__.GenericIssueDetailsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'generic-details'),
            new _AffectedDocumentsInQuirksModeView_js__WEBPACK_IMPORTED_MODULE_14__.AffectedDocumentsInQuirksModeView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-documents'),
            new _AttributionReportingIssueDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.AttributionReportingIssueDetailsView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'attribution-reporting-details'),
            new _AffectedCookiesView_js__WEBPACK_IMPORTED_MODULE_12__.AffectedRawCookieLinesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'affected-raw-cookies'),
            new _AffectedTrackingSitesView_js__WEBPACK_IMPORTED_MODULE_22__.AffectedTrackingSitesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'tracking-sites-details'),
            new _AffectedMetadataAllowedSitesView_js__WEBPACK_IMPORTED_MODULE_18__.AffectedMetadataAllowedSitesView(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _issue), 'metadata-allowed-sites-details')
        ]);
        _class_private_field_set(_assert_this_initialized(_this), _hiddenIssuesMenu, new _components_components_js__WEBPACK_IMPORTED_MODULE_24__.HideIssuesMenu.HideIssuesMenu());
        _class_private_field_set(_assert_this_initialized(_this), _aggregatedIssuesCount, null);
        _class_private_field_set(_assert_this_initialized(_this), _hasBeenExpandedBefore, false);
        return _this;
    }
    _create_class(IssueView, [
        {
            /**
     * Sets the issue to take the resources from. Assumes that the description
     * this IssueView was initialized with fits the new issue as well, i.e.
     * title and issue description will not be updated.
     */ key: "setIssue",
            value: function setIssue(issue) {
                if (_class_private_field_get(this, _issue) !== issue) {
                    _class_private_field_set(this, _needsUpdateOnExpand, true);
                }
                _class_private_field_set(this, _issue, issue);
                _class_private_field_get(this, _affectedResourceViews).forEach(function(view) {
                    return view.setIssue(issue);
                });
            }
        },
        {
            key: "getIssueTitle",
            value: function getIssueTitle() {
                return _class_private_field_get(this, _description).title;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                if (!_class_private_field_get(this, _contentCreated)) {
                    this.createContent();
                    return;
                }
                this.update();
            }
        },
        {
            key: "createContent",
            value: function createContent() {
                _class_private_method_get(this, _appendHeader, appendHeader).call(this);
                _class_private_method_get(this, _createBody, createBody).call(this);
                this.appendChild(this.affectedResources);
                var visibleAffectedResource = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _affectedResourceViews)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var view = _step.value;
                        this.appendAffectedResource(view);
                        view.update();
                        if (!view.isEmpty()) {
                            visibleAffectedResource.push(view);
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
                _class_private_method_get(this, _updateAffectedResourcesPositionAndSize, updateAffectedResourcesPositionAndSize).call(this, visibleAffectedResource);
                _class_private_method_get(this, _createReadMoreLinks, createReadMoreLinks).call(this);
                this.updateAffectedResourceVisibility();
                _class_private_field_set(this, _contentCreated, true);
            }
        },
        {
            key: "appendAffectedResource",
            value: function appendAffectedResource(resource) {
                this.affectedResources.appendChild(resource);
            }
        },
        {
            key: "onexpand",
            value: function onexpand() {
                var category = _class_private_field_get(this, _issue).getCategory();
                // Handle sub type for cookie issues.
                if (category === "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */ ) {
                    var cookieIssueSubCatagory = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.CookieIssue.CookieIssue.getSubCategory(_class_private_field_get(this, _issue).code());
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(cookieIssueSubCatagory);
                } else {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelIssueExpanded(category);
                }
                if (_class_private_field_get(this, _needsUpdateOnExpand)) {
                    _class_private_method_get(this, _doUpdate, doUpdate).call(this);
                }
                if (!_class_private_field_get(this, _hasBeenExpandedBefore)) {
                    _class_private_field_set(this, _hasBeenExpandedBefore, true);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(this, _affectedResourceViews)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var view = _step.value;
                            view.expandIfOneResource();
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
            }
        },
        {
            key: "updateAffectedResourceVisibility",
            value: function updateAffectedResourceVisibility() {
                var noResources = _class_private_field_get(this, _affectedResourceViews).every(function(view) {
                    return view.isEmpty();
                });
                this.affectedResources.hidden = noResources;
            }
        },
        {
            key: "update",
            value: function update() {
                var _this = this;
                void _class_private_field_get(this, _throttle).schedule(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_method_get(_this, _doUpdate, doUpdate).call(_this)
                        ];
                    });
                }));
            }
        },
        {
            key: "clear",
            value: function clear() {
                _class_private_field_get(this, _affectedResourceViews).forEach(function(view) {
                    return view.clear();
                });
            }
        },
        {
            key: "getIssueKind",
            value: function getIssueKind() {
                return _class_private_field_get(this, _issue).getKind();
            }
        },
        {
            key: "isForHiddenIssue",
            value: function isForHiddenIssue() {
                return _class_private_field_get(this, _issue).isHidden();
            }
        },
        {
            key: "toggle",
            value: function toggle(expand) {
                if (expand || expand === undefined && !this.expanded) {
                    this.expand();
                } else {
                    this.collapse();
                }
            }
        }
    ], [
        {
            key: "getBodyCSSClass",
            value: function getBodyCSSClass(issueKind) {
                switch(issueKind){
                    case "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ :
                        return 'issue-kind-breaking-change';
                    case "PageError" /* IssuesManager.Issue.IssueKind.PageError */ :
                        return 'issue-kind-page-error';
                    case "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ :
                        return 'issue-kind-improvement';
                }
            }
        }
    ]);
    return IssueView;
} //# sourceMappingURL=IssueView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement);
function updateAffectedResourcesPositionAndSize(visibleAffectedResource) {
    for(var i = 0; i < visibleAffectedResource.length; i++){
        var element = visibleAffectedResource[i].listItemElement;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(element, i + 1);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(element, visibleAffectedResource.length);
    }
}
function appendHeader() {
    var header = document.createElement('div');
    header.classList.add('header');
    _class_private_field_set(this, _issueKindIcon, new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon());
    _class_private_field_get(this, _issueKindIcon).classList.add('leading-issue-icon');
    _class_private_field_set(this, _aggregatedIssuesCount, document.createElement('span'));
    var countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: _class_private_field_get(this, _aggregatedIssuesCount)
    };
    countAdorner.classList.add('aggregated-issues-count');
    header.appendChild(_class_private_field_get(this, _issueKindIcon));
    header.appendChild(countAdorner);
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = _class_private_field_get(this, _description).title;
    header.appendChild(title);
    if (_class_private_field_get(this, _hiddenIssuesMenu)) {
        header.appendChild(_class_private_field_get(this, _hiddenIssuesMenu));
    }
    _class_private_method_get(this, _updateFromIssue, updateFromIssue).call(this);
    this.listItemElement.appendChild(header);
}
function updateFromIssue() {
    var _this = this;
    if (_class_private_field_get(this, _issueKindIcon)) {
        var kind = _class_private_field_get(this, _issue).getKind();
        _class_private_field_get(this, _issueKindIcon).data = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_7__.IssueCounter.getIssueKindIconData(kind);
        _class_private_field_get(this, _issueKindIcon).title = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.Issue.getIssueKindDescription(kind);
    }
    if (_class_private_field_get(this, _aggregatedIssuesCount)) {
        _class_private_field_get(this, _aggregatedIssuesCount).textContent = "".concat(_class_private_field_get(this, _issue).getAggregatedIssuesCount());
    }
    this.listItemElement.classList.toggle('hidden-issue', _class_private_field_get(this, _issue).isHidden());
    if (_class_private_field_get(this, _hiddenIssuesMenu)) {
        var data = {
            menuItemLabel: _class_private_field_get(this, _issue).isHidden() ? i18nString(UIStrings.unhideIssuesLikeThis) : i18nString(UIStrings.hideIssuesLikeThis),
            menuItemAction: function() {
                var setting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_3__.IssuesManager.getHideIssueByCodeSetting();
                var values = setting.get();
                values[_class_private_field_get(_this, _issue).code()] = _class_private_field_get(_this, _issue).isHidden() ? "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */  : "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ;
                setting.set(values);
            }
        };
        _class_private_field_get(this, _hiddenIssuesMenu).data = data;
    }
}
function createAffectedResources() {
    var wrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
    wrapper.setCollapsible(false);
    wrapper.setExpandable(true);
    wrapper.expand();
    wrapper.selectable = false;
    wrapper.listItemElement.classList.add('affected-resources-label');
    wrapper.listItemElement.textContent = i18nString(UIStrings.affectedResources);
    wrapper.childrenListElement.classList.add('affected-resources');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(wrapper.listItemElement, 2);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(wrapper.listItemElement, _class_private_field_get(this, _description).links.length === 0 ? 2 : 3);
    return wrapper;
}
function createBody() {
    var messageElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
    messageElement.setCollapsible(false);
    messageElement.selectable = false;
    var markdownComponent = new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView();
    markdownComponent.data = {
        tokens: _class_private_field_get(this, _description).markdown
    };
    messageElement.listItemElement.appendChild(markdownComponent);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(messageElement.listItemElement, 1);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(messageElement.listItemElement, _class_private_field_get(this, _description).links.length === 0 ? 2 : 3);
    this.appendChild(messageElement);
}
function createReadMoreLinks() {
    if (_class_private_field_get(this, _description).links.length === 0) {
        return;
    }
    var linkWrapper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TreeOutline.TreeElement();
    linkWrapper.setCollapsible(false);
    linkWrapper.listItemElement.classList.add('link-wrapper');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setPositionInSet(linkWrapper.listItemElement, 3);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSetSize(linkWrapper.listItemElement, 3);
    var linkList = linkWrapper.listItemElement.createChild('ul', 'link-list');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _description).links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var description = _step.value;
            var link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.html(_templateObject(), description.link, i18nString(UIStrings.learnMoreS, {
                PH1: description.linkTitle
            }));
            link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('learn-more').track({
                click: true
            })));
            var linkListItem = linkList.createChild('li');
            linkListItem.appendChild(link);
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
    this.appendChild(linkWrapper);
}
function doUpdate() {
    if (this.expanded) {
        _class_private_field_get(this, _affectedResourceViews).forEach(function(view) {
            return view.update();
        });
        this.updateAffectedResourceVisibility();
    }
    _class_private_field_set(this, _needsUpdateOnExpand, !this.expanded);
    _class_private_method_get(this, _updateFromIssue, updateFromIssue).call(this);
}


}),
"./ui/components/markdown_view/markdown_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: function() { return /* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__; },
  MarkdownImage: function() { return /* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__; },
  MarkdownImagesMap: function() { return /* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__; },
  MarkdownLink: function() { return /* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__; },
  MarkdownLinksMap: function() { return /* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__; },
  MarkdownView: function() { return /* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=markdown_view.js.map


}),

}]);