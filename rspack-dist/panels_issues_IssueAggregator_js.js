"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_IssueAggregator_js"], {
"./panels/issues/IssueAggregator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AggregatedIssue: function() { return AggregatedIssue; },
  IssueAggregator: function() { return IssueAggregator; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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


var _affectedCookies = /*#__PURE__*/ new WeakMap(), _affectedRawCookieLines = /*#__PURE__*/ new WeakMap(), _affectedRequests = /*#__PURE__*/ new WeakMap(), _affectedLocations = /*#__PURE__*/ new WeakMap(), _heavyAdIssues = /*#__PURE__*/ new WeakMap(), _blockedByResponseDetails = /*#__PURE__*/ new WeakMap(), _bounceTrackingSites = /*#__PURE__*/ new WeakMap(), _corsIssues = /*#__PURE__*/ new WeakMap(), _cspIssues = /*#__PURE__*/ new WeakMap(), _deprecationIssues = /*#__PURE__*/ new WeakMap(), _issueKind = /*#__PURE__*/ new WeakMap(), _lowContrastIssues = /*#__PURE__*/ new WeakMap(), _cookieDeprecationMetadataIssues = /*#__PURE__*/ new WeakMap(), _mixedContentIssues = /*#__PURE__*/ new WeakMap(), _sharedArrayBufferIssues = /*#__PURE__*/ new WeakMap(), _quirksModeIssues = /*#__PURE__*/ new WeakMap(), _attributionReportingIssues = /*#__PURE__*/ new WeakMap(), _genericIssues = /*#__PURE__*/ new WeakMap(), _representative = /*#__PURE__*/ new WeakMap(), _aggregatedIssuesCount = /*#__PURE__*/ new WeakMap(), _key = /*#__PURE__*/ new WeakMap(), /**
     * Produces a primary key for a cookie. Use this instead of `JSON.stringify` in
     * case new fields are added to `AffectedCookie`.
     */ _keyForCookie = /*#__PURE__*/ new WeakSet();
/**
 * An `AggregatedIssue` representes a number of `IssuesManager.Issue.Issue` objects that are displayed together.
 * Currently only grouping by issue code, is supported. The class provides helpers to support displaying
 * of all resources that are affected by the aggregated issues.
 */ var AggregatedIssue = /*#__PURE__*/ function(_IssuesManager_Issue_Issue) {
    "use strict";
    _inherits(AggregatedIssue, _IssuesManager_Issue_Issue);
    var _super = _create_super(AggregatedIssue);
    function AggregatedIssue(code, aggregationKey) {
        _class_call_check(this, AggregatedIssue);
        var _this;
        _this = _super.call(this, code);
        _class_private_method_init(_assert_this_initialized(_this), _keyForCookie);
        _class_private_field_init(_assert_this_initialized(_this), _affectedCookies, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _affectedRawCookieLines, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _affectedRequests, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _affectedLocations, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _heavyAdIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _blockedByResponseDetails, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _bounceTrackingSites, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _corsIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _cspIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _deprecationIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _issueKind, {
            writable: true,
            value: "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ 
        });
        _class_private_field_init(_assert_this_initialized(_this), _lowContrastIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _cookieDeprecationMetadataIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _mixedContentIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _sharedArrayBufferIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _quirksModeIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _attributionReportingIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _genericIssues, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _representative, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _aggregatedIssuesCount, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _key, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _key, aggregationKey);
        return _this;
    }
    _create_class(AggregatedIssue, [
        {
            key: "primaryKey",
            value: function primaryKey() {
                throw new Error('This should never be called');
            }
        },
        {
            key: "aggregationKey",
            value: function aggregationKey() {
                return _class_private_field_get(this, _key);
            }
        },
        {
            key: "getBlockedByResponseDetails",
            value: function getBlockedByResponseDetails() {
                return _class_private_field_get(this, _blockedByResponseDetails).values();
            }
        },
        {
            key: "cookies",
            value: function cookies() {
                return Array.from(_class_private_field_get(this, _affectedCookies).values()).map(function(x) {
                    return x.cookie;
                });
            }
        },
        {
            key: "getRawCookieLines",
            value: function getRawCookieLines() {
                return _class_private_field_get(this, _affectedRawCookieLines).values();
            }
        },
        {
            key: "sources",
            value: function sources() {
                return _class_private_field_get(this, _affectedLocations).values();
            }
        },
        {
            key: "getBounceTrackingSites",
            value: function getBounceTrackingSites() {
                return _class_private_field_get(this, _bounceTrackingSites).values();
            }
        },
        {
            key: "cookiesWithRequestIndicator",
            value: function cookiesWithRequestIndicator() {
                return _class_private_field_get(this, _affectedCookies).values();
            }
        },
        {
            key: "getHeavyAdIssues",
            value: function getHeavyAdIssues() {
                return _class_private_field_get(this, _heavyAdIssues);
            }
        },
        {
            key: "getCookieDeprecationMetadataIssues",
            value: function getCookieDeprecationMetadataIssues() {
                return _class_private_field_get(this, _cookieDeprecationMetadataIssues);
            }
        },
        {
            key: "getMixedContentIssues",
            value: function getMixedContentIssues() {
                return _class_private_field_get(this, _mixedContentIssues);
            }
        },
        {
            key: "getCorsIssues",
            value: function getCorsIssues() {
                return _class_private_field_get(this, _corsIssues);
            }
        },
        {
            key: "getCspIssues",
            value: function getCspIssues() {
                return _class_private_field_get(this, _cspIssues);
            }
        },
        {
            key: "getDeprecationIssues",
            value: function getDeprecationIssues() {
                return _class_private_field_get(this, _deprecationIssues);
            }
        },
        {
            key: "getLowContrastIssues",
            value: function getLowContrastIssues() {
                return _class_private_field_get(this, _lowContrastIssues);
            }
        },
        {
            key: "requests",
            value: function requests() {
                return _class_private_field_get(this, _affectedRequests).values();
            }
        },
        {
            key: "getSharedArrayBufferIssues",
            value: function getSharedArrayBufferIssues() {
                return _class_private_field_get(this, _sharedArrayBufferIssues);
            }
        },
        {
            key: "getQuirksModeIssues",
            value: function getQuirksModeIssues() {
                return _class_private_field_get(this, _quirksModeIssues);
            }
        },
        {
            key: "getAttributionReportingIssues",
            value: function getAttributionReportingIssues() {
                return _class_private_field_get(this, _attributionReportingIssues);
            }
        },
        {
            key: "getGenericIssues",
            value: function getGenericIssues() {
                return _class_private_field_get(this, _genericIssues);
            }
        },
        {
            key: "getDescription",
            value: function getDescription() {
                if (_class_private_field_get(this, _representative)) {
                    return _class_private_field_get(this, _representative).getDescription();
                }
                return null;
            }
        },
        {
            key: "getCategory",
            value: function getCategory() {
                if (_class_private_field_get(this, _representative)) {
                    return _class_private_field_get(this, _representative).getCategory();
                }
                return "Other" /* IssuesManager.Issue.IssueCategory.Other */ ;
            }
        },
        {
            key: "getAggregatedIssuesCount",
            value: function getAggregatedIssuesCount() {
                return _class_private_field_get(this, _aggregatedIssuesCount);
            }
        },
        {
            key: "addInstance",
            value: function addInstance(issue) {
                _class_private_field_update(this, _aggregatedIssuesCount).value++;
                if (!_class_private_field_get(this, _representative)) {
                    _class_private_field_set(this, _representative, issue);
                }
                _class_private_field_set(this, _issueKind, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.unionIssueKind(_class_private_field_get(this, _issueKind), issue.getKind()));
                var hasRequest = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = issue.requests()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        hasRequest = true;
                        if (!_class_private_field_get(this, _affectedRequests).has(request.requestId)) {
                            _class_private_field_get(this, _affectedRequests).set(request.requestId, request);
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
                    for(var _iterator1 = issue.cookies()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var cookie = _step1.value;
                        var key = _class_private_method_get(this, _keyForCookie, keyForCookie).call(this, cookie);
                        if (!_class_private_field_get(this, _affectedCookies).has(key)) {
                            _class_private_field_get(this, _affectedCookies).set(key, {
                                cookie: cookie,
                                hasRequest: hasRequest
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
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = issue.rawCookieLines()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var rawCookieLine = _step2.value;
                        if (!_class_private_field_get(this, _affectedRawCookieLines).has(rawCookieLine)) {
                            _class_private_field_get(this, _affectedRawCookieLines).set(rawCookieLine, {
                                rawCookieLine: rawCookieLine,
                                hasRequest: hasRequest
                            });
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = issue.trackingSites()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var site = _step3.value;
                        if (!_class_private_field_get(this, _bounceTrackingSites).has(site)) {
                            _class_private_field_get(this, _bounceTrackingSites).add(site);
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                try {
                    for(var _iterator4 = issue.sources()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                        var location = _step4.value;
                        var key1 = JSON.stringify(location);
                        if (!_class_private_field_get(this, _affectedLocations).has(key1)) {
                            _class_private_field_get(this, _affectedLocations).set(key1, location);
                        }
                    }
                } catch (err) {
                    _didIteratorError4 = true;
                    _iteratorError4 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                            _iterator4.return();
                        }
                    } finally{
                        if (_didIteratorError4) {
                            throw _iteratorError4;
                        }
                    }
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CookieDeprecationMetadataIssue.CookieDeprecationMetadataIssue)) {
                    _class_private_field_get(this, _cookieDeprecationMetadataIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.MixedContentIssue.MixedContentIssue)) {
                    _class_private_field_get(this, _mixedContentIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.HeavyAdIssue.HeavyAdIssue)) {
                    _class_private_field_get(this, _heavyAdIssues).add(issue);
                }
                var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
                try {
                    for(var _iterator5 = issue.getBlockedByResponseDetails()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true){
                        var details = _step5.value;
                        var key2 = JSON.stringify(details, [
                            'parentFrame',
                            'blockedFrame',
                            'requestId',
                            'frameId',
                            'reason',
                            'request'
                        ]);
                        _class_private_field_get(this, _blockedByResponseDetails).set(key2, details);
                    }
                } catch (err) {
                    _didIteratorError5 = true;
                    _iteratorError5 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                            _iterator5.return();
                        }
                    } finally{
                        if (_didIteratorError5) {
                            throw _iteratorError5;
                        }
                    }
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.ContentSecurityPolicyIssue.ContentSecurityPolicyIssue)) {
                    _class_private_field_get(this, _cspIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.DeprecationIssue.DeprecationIssue)) {
                    _class_private_field_get(this, _deprecationIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.SharedArrayBufferIssue.SharedArrayBufferIssue)) {
                    _class_private_field_get(this, _sharedArrayBufferIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.LowTextContrastIssue.LowTextContrastIssue)) {
                    _class_private_field_get(this, _lowContrastIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.CorsIssue.CorsIssue)) {
                    _class_private_field_get(this, _corsIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.QuirksModeIssue.QuirksModeIssue)) {
                    _class_private_field_get(this, _quirksModeIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.AttributionReportingIssue.AttributionReportingIssue)) {
                    _class_private_field_get(this, _attributionReportingIssues).add(issue);
                }
                if (_instanceof(issue, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.GenericIssue.GenericIssue)) {
                    _class_private_field_get(this, _genericIssues).add(issue);
                }
            }
        },
        {
            key: "getKind",
            value: function getKind() {
                return _class_private_field_get(this, _issueKind);
            }
        },
        {
            key: "isHidden",
            value: function isHidden() {
                var _$_class_private_field_get;
                return ((_$_class_private_field_get = _class_private_field_get(this, _representative)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.isHidden()) || false;
            }
        },
        {
            key: "setHidden",
            value: function setHidden(_value) {
                throw new Error('Should not call setHidden on aggregatedIssue');
            }
        }
    ]);
    return AggregatedIssue;
}(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.Issue);
function keyForCookie(cookie) {
    var domain = cookie.domain, path = cookie.path, name = cookie.name;
    return "".concat(domain, ";").concat(path, ";").concat(name);
}
var _aggregatedIssuesByKey = /*#__PURE__*/ new WeakMap(), _hiddenAggregatedIssuesByKey = /*#__PURE__*/ new WeakMap(), _onIssueAdded = /*#__PURE__*/ new WeakSet(), _onFullUpdateRequired = /*#__PURE__*/ new WeakSet(), _aggregateIssue = /*#__PURE__*/ new WeakSet(), _aggregateIssueByStatus = /*#__PURE__*/ new WeakSet();
var IssueAggregator = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(IssueAggregator, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(IssueAggregator);
    function IssueAggregator(issuesManager) {
        _class_call_check(this, IssueAggregator);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onIssueAdded);
        _class_private_method_init(_assert_this_initialized(_this), _onFullUpdateRequired);
        _class_private_method_init(_assert_this_initialized(_this), _aggregateIssue);
        _class_private_method_init(_assert_this_initialized(_this), _aggregateIssueByStatus);
        _define_property(_assert_this_initialized(_this), "issuesManager", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _aggregatedIssuesByKey, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _hiddenAggregatedIssuesByKey, {
            writable: true,
            value: new Map()
        });
        _this.issuesManager = issuesManager;
        _this.issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , _class_private_method_get(_assert_this_initialized(_this), _onIssueAdded, onIssueAdded), _assert_this_initialized(_this));
        _this.issuesManager.addEventListener("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */ , _class_private_method_get(_assert_this_initialized(_this), _onFullUpdateRequired, onFullUpdateRequired), _assert_this_initialized(_this));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _this.issuesManager.issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                _class_private_method_get(_this, _aggregateIssue, aggregateIssue).call(_assert_this_initialized(_this), issue);
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
        return _this;
    }
    _create_class(IssueAggregator, [
        {
            key: "aggregatedIssues",
            value: function aggregatedIssues() {
                return _to_consumable_array(_class_private_field_get(this, _aggregatedIssuesByKey).values()).concat(_to_consumable_array(_class_private_field_get(this, _hiddenAggregatedIssuesByKey).values()));
            }
        },
        {
            key: "hiddenAggregatedIssues",
            value: function hiddenAggregatedIssues() {
                return _class_private_field_get(this, _hiddenAggregatedIssuesByKey).values();
            }
        },
        {
            key: "aggregatedIssueCodes",
            value: function aggregatedIssueCodes() {
                return new Set(_to_consumable_array(_class_private_field_get(this, _aggregatedIssuesByKey).keys()).concat(_to_consumable_array(_class_private_field_get(this, _hiddenAggregatedIssuesByKey).keys())));
            }
        },
        {
            key: "aggregatedIssueCategories",
            value: function aggregatedIssueCategories() {
                var result = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _aggregatedIssuesByKey).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var issue = _step.value;
                        result.add(issue.getCategory());
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
                return result;
            }
        },
        {
            key: "aggregatedIssueKinds",
            value: function aggregatedIssueKinds() {
                var result = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _aggregatedIssuesByKey).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var issue = _step.value;
                        result.add(issue.getKind());
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
                return result;
            }
        },
        {
            key: "numberOfAggregatedIssues",
            value: function numberOfAggregatedIssues() {
                return _class_private_field_get(this, _aggregatedIssuesByKey).size;
            }
        },
        {
            key: "numberOfHiddenAggregatedIssues",
            value: function numberOfHiddenAggregatedIssues() {
                return _class_private_field_get(this, _hiddenAggregatedIssuesByKey).size;
            }
        },
        {
            key: "keyForIssue",
            value: function keyForIssue(issue) {
                return issue.code();
            }
        }
    ]);
    return IssueAggregator;
} //# sourceMappingURL=IssueAggregator.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function onIssueAdded(event) {
    _class_private_method_get(this, _aggregateIssue, aggregateIssue).call(this, event.data.issue);
}
function onFullUpdateRequired() {
    _class_private_field_get(this, _aggregatedIssuesByKey).clear();
    _class_private_field_get(this, _hiddenAggregatedIssuesByKey).clear();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = this.issuesManager.issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var issue = _step.value;
            _class_private_method_get(this, _aggregateIssue, aggregateIssue).call(this, issue);
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
    this.dispatchEventToListeners("FullUpdateRequired" /* Events.FullUpdateRequired */ );
}
function aggregateIssue(issue) {
    var map = issue.isHidden() ? _class_private_field_get(this, _hiddenAggregatedIssuesByKey) : _class_private_field_get(this, _aggregatedIssuesByKey);
    var aggregatedIssue = _class_private_method_get(this, _aggregateIssueByStatus, aggregateIssueByStatus).call(this, map, issue);
    this.dispatchEventToListeners("AggregatedIssueUpdated" /* Events.AggregatedIssueUpdated */ , aggregatedIssue);
    return aggregatedIssue;
}
function aggregateIssueByStatus(aggregatedIssuesMap, issue) {
    var key = issue.code();
    var aggregatedIssue = aggregatedIssuesMap.get(key);
    if (!aggregatedIssue) {
        aggregatedIssue = new AggregatedIssue(issue.code(), key);
        aggregatedIssuesMap.set(key, aggregatedIssue);
    }
    aggregatedIssue.addInstance(issue);
    return aggregatedIssue;
}


}),

}]);