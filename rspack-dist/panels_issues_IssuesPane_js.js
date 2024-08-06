"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_IssuesPane_js"], {
"./panels/issues/HiddenIssuesRow.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HiddenIssuesRow: function() { return HiddenIssuesRow; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
     * @description Title for the hidden issues row
     */ hiddenIssues: 'Hidden issues',
    /**
     * @description Label for the button to unhide all hidden issues
     */ unhideAll: 'Unhide all'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/HiddenIssuesRow.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _numHiddenAggregatedIssues = /*#__PURE__*/ new WeakMap(), _appendHeader = /*#__PURE__*/ new WeakSet();
var HiddenIssuesRow = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(HiddenIssuesRow, _UI_TreeOutline_TreeElement);
    var _super = _create_super(HiddenIssuesRow);
    function HiddenIssuesRow() {
        _class_call_check(this, HiddenIssuesRow);
        var _this;
        _this = _super.call(this, undefined, true);
        _class_private_method_init(_assert_this_initialized(_this), _appendHeader);
        _class_private_field_init(_assert_this_initialized(_this), _numHiddenAggregatedIssues, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _numHiddenAggregatedIssues, document.createElement('span'));
        _this.toggleOnClick = true;
        _this.listItemElement.classList.add('issue-category', 'hidden-issues');
        _this.childrenListElement.classList.add('hidden-issues-body');
        _class_private_method_get(_this, _appendHeader, appendHeader).call(_assert_this_initialized(_this));
        return _this;
    }
    _create_class(HiddenIssuesRow, [
        {
            key: "update",
            value: function update(count) {
                _class_private_field_get(this, _numHiddenAggregatedIssues).textContent = "".concat(count);
            }
        }
    ]);
    return HiddenIssuesRow;
} //# sourceMappingURL=HiddenIssuesRow.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement);
function appendHeader() {
    var unhideAllIssuesBtn = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.unhideAll), function() {
        return _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.IssuesManager.instance().unhideAllIssues();
    }, {
        className: 'unhide-all-issues-button',
        jslogContext: 'issues.unhide-all-hiddes'
    });
    var countAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_2__.Adorner.Adorner();
    countAdorner.data = {
        name: 'countWrapper',
        content: _class_private_field_get(this, _numHiddenAggregatedIssues)
    };
    countAdorner.classList.add('aggregated-issues-count');
    _class_private_field_get(this, _numHiddenAggregatedIssues).textContent = '0';
    var header = document.createElement('div');
    var title = document.createElement('div');
    header.classList.add('header');
    title.classList.add('title');
    title.textContent = i18nString(UIStrings.hiddenIssues);
    header.appendChild(countAdorner);
    header.appendChild(title);
    header.appendChild(unhideAllIssuesBtn);
    this.listItemElement.appendChild(header);
}


}),
"./panels/issues/IssuesPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IssuesPane: function() { return IssuesPane; },
  getGroupIssuesByCategorySetting: function() { return getGroupIssuesByCategorySetting; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HiddenIssuesRow.js */ "./panels/issues/HiddenIssuesRow.js");
/* harmony import */var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IssueAggregator.js */ "./panels/issues/IssueAggregator.js");
/* harmony import */var _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IssueKindView.js */ "./panels/issues/IssueKindView.js");
/* harmony import */var _issuesPane_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issuesPane.css.js */ "./panels/issues/issuesPane.css.js");
/* harmony import */var _issuesTree_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./issuesTree.css.js */ "./panels/issues/issuesTree.css.js");
/* harmony import */var _IssueView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IssueView.js */ "./panels/issues/IssueView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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












var UIStrings = {
    /**
     * @description Category title for a group of cross origin embedder policy (COEP) issues
     */ crossOriginEmbedderPolicy: 'Cross Origin Embedder Policy',
    /**
     * @description Category title for a group of mixed content issues
     */ mixedContent: 'Mixed Content',
    /**
     * @description Category title for a group of SameSite cookie issues
     */ samesiteCookie: 'SameSite Cookie',
    /**
     * @description Category title for a group of heavy ads issues
     */ heavyAds: 'Heavy Ads',
    /**
     * @description Category title for a group of content security policy (CSP) issues
     */ contentSecurityPolicy: 'Content Security Policy',
    /**
     * @description Text for other types of items
     */ other: 'Other',
    /**
     * @description Category title for the different 'low text contrast' issues. Low text contrast refers
     *              to the difference between the color of a text and the background color where that text
     *              appears.
     */ lowTextContrast: 'Low Text Contrast',
    /**
     * @description Category title for the different 'Cross-Origin Resource Sharing' (CORS) issues. CORS
     *              refers to one origin (e.g 'a.com') loading resources from another origin (e.g. 'b.com').
     */ cors: 'Cross Origin Resource Sharing',
    /**
     * @description Title for a checkbox which toggles grouping by category in the issues tab
     */ groupDisplayedIssuesUnder: 'Group displayed issues under associated categories',
    /**
     * @description Label for a checkbox which toggles grouping by category in the issues tab
     */ groupByCategory: 'Group by category',
    /**
     * @description Title for a checkbox which toggles grouping by kind in the issues tab
     */ groupDisplayedIssuesUnderKind: 'Group displayed issues as Page errors, Breaking changes and Improvements',
    /**
     * @description Label for a checkbox which toggles grouping by kind in the issues tab
     */ groupByKind: 'Group by kind',
    /**
     * @description Title for a checkbox. Whether the issues tab should include third-party issues or not.
     */ includeCookieIssuesCausedBy: 'Include cookie Issues caused by third-party sites',
    /**
     * @description Label for a checkbox. Whether the issues tab should include third-party issues or not.
     */ includeThirdpartyCookieIssues: 'Include third-party cookie issues',
    /**
     * @description Label on the issues tab
     */ onlyThirdpartyCookieIssues: 'Only third-party cookie issues detected so far',
    /**
     * @description Label in the issues panel
     */ noIssuesDetectedSoFar: 'No issues detected so far',
    /**
     * @description Category title for the different 'Attribution Reporting API' issues. The
     * Attribution Reporting API is a newly proposed web API (see https://github.com/WICG/conversion-measurement-api).
     */ attributionReporting: 'Attribution Reporting `API`',
    /**
     * @description Category title for the different 'Quirks Mode' issues. Quirks Mode refers
     *              to the legacy browser modes that displays web content according to outdated
     *              browser behaviors.
     */ quirksMode: 'Quirks Mode',
    /**
     * @description Category title for the different 'Generic' issues.
     */ generic: 'Generic'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/IssuesPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _category = /*#__PURE__*/ new WeakMap(), _appendHeader = /*#__PURE__*/ new WeakSet();
var IssueCategoryView = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(IssueCategoryView, _UI_TreeOutline_TreeElement);
    var _super = _create_super(IssueCategoryView);
    function IssueCategoryView(category) {
        _class_call_check(this, IssueCategoryView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _appendHeader);
        _class_private_field_init(_assert_this_initialized(_this), _category, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _category, category);
        _this.toggleOnClick = true;
        _this.listItemElement.classList.add('issue-category');
        _this.childrenListElement.classList.add('issue-category-body');
        return _this;
    }
    _create_class(IssueCategoryView, [
        {
            key: "getCategoryName",
            value: function getCategoryName() {
                switch(_class_private_field_get(this, _category)){
                    case "CrossOriginEmbedderPolicy" /* IssuesManager.Issue.IssueCategory.CrossOriginEmbedderPolicy */ :
                        return i18nString(UIStrings.crossOriginEmbedderPolicy);
                    case "MixedContent" /* IssuesManager.Issue.IssueCategory.MixedContent */ :
                        return i18nString(UIStrings.mixedContent);
                    case "Cookie" /* IssuesManager.Issue.IssueCategory.Cookie */ :
                        return i18nString(UIStrings.samesiteCookie);
                    case "HeavyAd" /* IssuesManager.Issue.IssueCategory.HeavyAd */ :
                        return i18nString(UIStrings.heavyAds);
                    case "ContentSecurityPolicy" /* IssuesManager.Issue.IssueCategory.ContentSecurityPolicy */ :
                        return i18nString(UIStrings.contentSecurityPolicy);
                    case "LowTextContrast" /* IssuesManager.Issue.IssueCategory.LowTextContrast */ :
                        return i18nString(UIStrings.lowTextContrast);
                    case "Cors" /* IssuesManager.Issue.IssueCategory.Cors */ :
                        return i18nString(UIStrings.cors);
                    case "AttributionReporting" /* IssuesManager.Issue.IssueCategory.AttributionReporting */ :
                        return i18nString(UIStrings.attributionReporting);
                    case "QuirksMode" /* IssuesManager.Issue.IssueCategory.QuirksMode */ :
                        return i18nString(UIStrings.quirksMode);
                    case "Generic" /* IssuesManager.Issue.IssueCategory.Generic */ :
                        return i18nString(UIStrings.generic);
                    case "Other" /* IssuesManager.Issue.IssueCategory.Other */ :
                        return i18nString(UIStrings.other);
                }
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _class_private_method_get(this, _appendHeader, appendHeader).call(this);
            }
        }
    ]);
    return IssueCategoryView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement);
function appendHeader() {
    var header = document.createElement('div');
    header.classList.add('header');
    var title = document.createElement('div');
    title.classList.add('title');
    title.textContent = this.getCategoryName();
    header.appendChild(title);
    this.listItemElement.appendChild(header);
}
function getGroupIssuesByCategorySetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('group-issues-by-category', false);
}
var _categoryViews = /*#__PURE__*/ new WeakMap(), _issueViews = /*#__PURE__*/ new WeakMap(), _kindViews = /*#__PURE__*/ new WeakMap(), _showThirdPartyCheckbox = /*#__PURE__*/ new WeakMap(), _issuesTree = /*#__PURE__*/ new WeakMap(), _hiddenIssuesRow = /*#__PURE__*/ new WeakMap(), _noIssuesMessageDiv = /*#__PURE__*/ new WeakMap(), _issuesManager = /*#__PURE__*/ new WeakMap(), _aggregator = /*#__PURE__*/ new WeakMap(), _issueViewUpdatePromise = /*#__PURE__*/ new WeakMap(), _createToolbars = /*#__PURE__*/ new WeakSet(), _issueUpdated = /*#__PURE__*/ new WeakSet(), _scheduleIssueViewUpdate = /*#__PURE__*/ new WeakSet(), _updateIssueView = /*#__PURE__*/ new WeakSet(), _updateItemPositionAndSize = /*#__PURE__*/ new WeakSet(), _getIssueViewParent = /*#__PURE__*/ new WeakSet(), _clearViews = /*#__PURE__*/ new WeakSet(), _onFullUpdate = /*#__PURE__*/ new WeakSet(), _fullUpdate = /*#__PURE__*/ new WeakSet(), _updateIssueKindViewsCount = /*#__PURE__*/ new WeakSet(), _updateCounts = /*#__PURE__*/ new WeakSet(), _showIssuesTreeOrNoIssuesDetectedMessage = /*#__PURE__*/ new WeakSet();
var IssuesPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(IssuesPane, _UI_Widget_VBox);
    var _super = _create_super(IssuesPane);
    function IssuesPane() {
        _class_call_check(this, IssuesPane);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _createToolbars);
        _class_private_method_init(_assert_this_initialized(_this), _issueUpdated);
        _class_private_method_init(_assert_this_initialized(_this), _scheduleIssueViewUpdate);
        /** Don't call directly. Use `scheduleIssueViewUpdate` instead. */ _class_private_method_init(_assert_this_initialized(_this), _updateIssueView);
        _class_private_method_init(_assert_this_initialized(_this), _updateItemPositionAndSize);
        _class_private_method_init(_assert_this_initialized(_this), _getIssueViewParent);
        _class_private_method_init(_assert_this_initialized(_this), _clearViews);
        _class_private_method_init(_assert_this_initialized(_this), _onFullUpdate);
        _class_private_method_init(_assert_this_initialized(_this), _fullUpdate);
        _class_private_method_init(_assert_this_initialized(_this), _updateIssueKindViewsCount);
        _class_private_method_init(_assert_this_initialized(_this), _updateCounts);
        _class_private_method_init(_assert_this_initialized(_this), _showIssuesTreeOrNoIssuesDetectedMessage);
        _class_private_field_init(_assert_this_initialized(_this), _categoryViews, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issueViews, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _kindViews, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _showThirdPartyCheckbox, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issuesTree, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _hiddenIssuesRow, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _noIssuesMessageDiv, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issuesManager, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _aggregator, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _issueViewUpdatePromise, {
            writable: true,
            value: Promise.resolve()
        });
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.panel('issues')));
        _this.contentElement.classList.add('issues-pane');
        _class_private_field_set(_assert_this_initialized(_this), _categoryViews, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _kindViews, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _issueViews, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _showThirdPartyCheckbox, null);
        _class_private_method_get(_this, _createToolbars, createToolbars).call(_assert_this_initialized(_this));
        _class_private_field_set(_assert_this_initialized(_this), _issuesTree, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow());
        _class_private_field_get(_this, _issuesTree).setShowSelectionOnKeyboardFocus(true);
        _class_private_field_get(_this, _issuesTree).contentElement.classList.add('issues');
        _this.contentElement.appendChild(_class_private_field_get(_this, _issuesTree).element);
        _class_private_field_set(_assert_this_initialized(_this), _hiddenIssuesRow, new _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow());
        _class_private_field_get(_this, _issuesTree).appendChild(_class_private_field_get(_assert_this_initialized(_this), _hiddenIssuesRow));
        _class_private_field_set(_assert_this_initialized(_this), _noIssuesMessageDiv, document.createElement('div'));
        _class_private_field_get(_this, _noIssuesMessageDiv).classList.add('issues-pane-no-issues');
        _this.contentElement.appendChild(_class_private_field_get(_assert_this_initialized(_this), _noIssuesMessageDiv));
        _class_private_field_set(_assert_this_initialized(_this), _issuesManager, _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance());
        _class_private_field_set(_assert_this_initialized(_this), _aggregator, new _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator(_class_private_field_get(_assert_this_initialized(_this), _issuesManager)));
        _class_private_field_get(_this, _aggregator).addEventListener("AggregatedIssueUpdated" /* IssueAggregatorEvents.AggregatedIssueUpdated */ , _class_private_method_get(_assert_this_initialized(_this), _issueUpdated, issueUpdated), _assert_this_initialized(_this));
        _class_private_field_get(_this, _aggregator).addEventListener("FullUpdateRequired" /* IssueAggregatorEvents.FullUpdateRequired */ , _class_private_method_get(_assert_this_initialized(_this), _onFullUpdate, onFullUpdate), _assert_this_initialized(_this));
        _class_private_field_get(_this, _hiddenIssuesRow).hidden = _class_private_field_get(_this, _issuesManager).numberOfHiddenIssues() === 0;
        _class_private_method_get(_this, _onFullUpdate, onFullUpdate).call(_assert_this_initialized(_this));
        _class_private_field_get(_this, _issuesManager).addEventListener("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */ , _class_private_method_get(_assert_this_initialized(_this), _updateCounts, updateCounts), _assert_this_initialized(_this));
        return _this;
    }
    _create_class(IssuesPane, [
        {
            key: "elementsToRestoreScrollPositionsFor",
            value: function elementsToRestoreScrollPositionsFor() {
                return [
                    _class_private_field_get(this, _issuesTree).element
                ];
            }
        },
        {
            key: "appendIssueViewToParent",
            value: function appendIssueViewToParent(issueView, parent) {
                parent.appendChild(issueView, function(a, b) {
                    if (_instanceof(a, _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow)) {
                        return 1;
                    }
                    if (_instanceof(b, _HiddenIssuesRow_js__WEBPACK_IMPORTED_MODULE_6__.HiddenIssuesRow)) {
                        return -1;
                    }
                    if (_instanceof(a, _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView) && _instanceof(b, _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView)) {
                        return a.getIssueTitle().localeCompare(b.getIssueTitle());
                    }
                    console.error('The issues tree should only contain IssueView objects as direct children');
                    return 0;
                });
                if (_instanceof(parent, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement)) {
                    // This is an aggregated view, so we need to update the label for position and size of the treeItem.
                    _class_private_method_get(this, _updateItemPositionAndSize, updateItemPositionAndSize).call(this, parent);
                }
            }
        },
        {
            key: "reveal",
            value: function reveal(issue) {
                var _this = this;
                return _async_to_generator(function() {
                    var key, issueView, kindView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _issueViewUpdatePromise)
                                ];
                            case 1:
                                _state.sent();
                                key = _class_private_field_get(_this, _aggregator).keyForIssue(issue);
                                issueView = _class_private_field_get(_this, _issueViews).get(key);
                                if (issueView) {
                                    if (issueView.isForHiddenIssue()) {
                                        _class_private_field_get(_this, _hiddenIssuesRow).expand();
                                        _class_private_field_get(_this, _hiddenIssuesRow).reveal();
                                    }
                                    if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get() && !issueView.isForHiddenIssue()) {
                                        kindView = _class_private_field_get(_this, _kindViews).get(issueView.getIssueKind());
                                        kindView === null || kindView === void 0 ? void 0 : kindView.expand();
                                        kindView === null || kindView === void 0 ? void 0 : kindView.reveal();
                                    }
                                    issueView.expand();
                                    issueView.reveal();
                                    issueView.select(false, true);
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
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(IssuesPane.prototype), "wasShown", this).call(this);
                _class_private_field_get(this, _issuesTree).registerCSSFiles([
                    _issuesTree_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                this.registerCSSFiles([
                    _issuesPane_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ]);
    return IssuesPane;
} //# sourceMappingURL=IssuesPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);
function createToolbars() {
    var _this = this;
    var toolbarContainer = this.contentElement.createChild('div', 'issues-toolbar-container');
    toolbarContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toolbar()));
    new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('issues-toolbar-left', toolbarContainer);
    var rightToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('issues-toolbar-right', toolbarContainer);
    var groupByCategorySetting = getGroupIssuesByCategorySetting();
    var groupByCategoryCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(groupByCategorySetting, i18nString(UIStrings.groupDisplayedIssuesUnder), i18nString(UIStrings.groupByCategory));
    // Hide the option to toggle category grouping for now.
    groupByCategoryCheckbox.setVisible(false);
    rightToolbar.appendToolbarItem(groupByCategoryCheckbox);
    groupByCategorySetting.addChangeListener(function() {
        _class_private_method_get(_this, _fullUpdate, fullUpdate).call(_this, true);
    });
    var groupByKindSetting = (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)();
    var groupByKindSettingCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(groupByKindSetting, i18nString(UIStrings.groupDisplayedIssuesUnderKind), i18nString(UIStrings.groupByKind));
    rightToolbar.appendToolbarItem(groupByKindSettingCheckbox);
    groupByKindSetting.addChangeListener(function() {
        _class_private_method_get(_this, _fullUpdate, fullUpdate).call(_this, true);
    });
    groupByKindSettingCheckbox.setVisible(true);
    var thirdPartySetting = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.getShowThirdPartyIssuesSetting();
    _class_private_field_set(this, _showThirdPartyCheckbox, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarSettingCheckbox(thirdPartySetting, i18nString(UIStrings.includeCookieIssuesCausedBy), i18nString(UIStrings.includeThirdpartyCookieIssues)));
    rightToolbar.appendToolbarItem(_class_private_field_get(this, _showThirdPartyCheckbox));
    this.setDefaultFocusedElement(_class_private_field_get(this, _showThirdPartyCheckbox).inputElement);
    rightToolbar.appendSeparator();
    var issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.IssueCounter();
    issueCounter.data = {
        tooltipCallback: function() {
            var issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_3__.IssueCounter.getIssueCountsEnumeration(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance(), false);
            issueCounter.title = issueEnumeration;
        },
        displayMode: "ShowAlways" /* IssueCounter.IssueCounter.DisplayMode.ShowAlways */ ,
        issuesManager: _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager.instance()
    };
    issueCounter.id = 'console-issues-counter';
    issueCounter.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.counter('issues')));
    var issuesToolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(issueCounter);
    rightToolbar.appendToolbarItem(issuesToolbarItem);
    return {
        toolbarContainer: toolbarContainer
    };
}
function issueUpdated(event) {
    _class_private_method_get(this, _scheduleIssueViewUpdate, scheduleIssueViewUpdate).call(this, event.data);
}
function scheduleIssueViewUpdate(issue) {
    var _this = this;
    _class_private_field_set(this, _issueViewUpdatePromise, _class_private_field_get(this, _issueViewUpdatePromise).then(function() {
        return _class_private_method_get(_this, _updateIssueView, updateIssueView).call(_this, issue);
    }));
}
function updateIssueView(issue) {
    return _updateIssueView1.apply(this, arguments);
}
function _updateIssueView1() {
    _updateIssueView1 = _async_to_generator(function(issue) {
        var issueView, description, markdownDescription, parent, newParent, _issueView_parent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    issueView = _class_private_field_get(this, _issueViews).get(issue.aggregationKey());
                    if (!!issueView) return [
                        3,
                        2
                    ];
                    description = issue.getDescription();
                    if (!description) {
                        console.warn('Could not find description for issue code:', issue.code());
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.MarkdownIssueDescription.createIssueDescriptionFromMarkdown(description)
                    ];
                case 1:
                    markdownDescription = _state.sent();
                    issueView = new _IssueView_js__WEBPACK_IMPORTED_MODULE_11__.IssueView(issue, markdownDescription);
                    _class_private_field_get(this, _issueViews).set(issue.aggregationKey(), issueView);
                    parent = _class_private_method_get(this, _getIssueViewParent, getIssueViewParent).call(this, issue);
                    this.appendIssueViewToParent(issueView, parent);
                    return [
                        3,
                        3
                    ];
                case 2:
                    issueView.setIssue(issue);
                    newParent = _class_private_method_get(this, _getIssueViewParent, getIssueViewParent).call(this, issue);
                    if (issueView.parent !== newParent && !(_instanceof(newParent, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutline) && issueView.parent === newParent.rootElement())) {
                        ;
                        (_issueView_parent = issueView.parent) === null || _issueView_parent === void 0 ? void 0 : _issueView_parent.removeChild(issueView);
                        this.appendIssueViewToParent(issueView, newParent);
                    }
                    _state.label = 3;
                case 3:
                    issueView.update();
                    _class_private_method_get(this, _updateCounts, updateCounts).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _updateIssueView1.apply(this, arguments);
}
function updateItemPositionAndSize(parent) {
    var childNodes = parent.childrenListNode.children;
    var treeItemCount = 0;
    for(var i = 0; i < childNodes.length; i++){
        var node = childNodes[i];
        if (node.classList.contains('issue')) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setPositionInSet(node, ++treeItemCount);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setSetSize(node, childNodes.length / 2); // Each issue has 2 nodes (issue + description).
        }
    }
}
function getIssueViewParent(issue) {
    if (issue.isHidden()) {
        return _class_private_field_get(this, _hiddenIssuesRow);
    }
    if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
        var kind = issue.getKind();
        var view = _class_private_field_get(this, _kindViews).get(kind);
        if (view) {
            return view;
        }
        var newView = new _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView(kind);
        _class_private_field_get(this, _issuesTree).appendChild(newView, function(a, b) {
            if (_instanceof(a, _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView) && _instanceof(b, _IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.IssueKindView)) {
                return (0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.issueKindViewSortPriority)(a, b);
            }
            return 0;
        });
        _class_private_field_get(this, _kindViews).set(kind, newView);
        return newView;
    }
    if (getGroupIssuesByCategorySetting().get()) {
        var category = issue.getCategory();
        var view1 = _class_private_field_get(this, _categoryViews).get(category);
        if (view1) {
            return view1;
        }
        var newView1 = new IssueCategoryView(category);
        _class_private_field_get(this, _issuesTree).appendChild(newView1, function(a, b) {
            if (_instanceof(a, IssueCategoryView) && _instanceof(b, IssueCategoryView)) {
                return a.getCategoryName().localeCompare(b.getCategoryName());
            }
            return 0;
        });
        _class_private_field_get(this, _categoryViews).set(category, newView1);
        return newView1;
    }
    return _class_private_field_get(this, _issuesTree);
}
function clearViews(views, preservedSet) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Array.from(views.entries())[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], view = _step_value[1];
            if (preservedSet === null || preservedSet === void 0 ? void 0 : preservedSet.has(key)) {
                continue;
            }
            view.parent && view.parent.removeChild(view);
            views.delete(key);
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
function onFullUpdate() {
    _class_private_method_get(this, _fullUpdate, fullUpdate).call(this, false);
}
function fullUpdate(force) {
    _class_private_method_get(this, _clearViews, clearViews).call(this, _class_private_field_get(this, _categoryViews), force ? undefined : _class_private_field_get(this, _aggregator).aggregatedIssueCategories());
    _class_private_method_get(this, _clearViews, clearViews).call(this, _class_private_field_get(this, _kindViews), force ? undefined : _class_private_field_get(this, _aggregator).aggregatedIssueKinds());
    _class_private_method_get(this, _clearViews, clearViews).call(this, _class_private_field_get(this, _issueViews), force ? undefined : _class_private_field_get(this, _aggregator).aggregatedIssueCodes());
    if (_class_private_field_get(this, _aggregator)) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _class_private_field_get(this, _aggregator).aggregatedIssues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                _class_private_method_get(this, _scheduleIssueViewUpdate, scheduleIssueViewUpdate).call(this, issue);
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
    _class_private_method_get(this, _updateCounts, updateCounts).call(this);
}
function updateIssueKindViewsCount() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _kindViews).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var view = _step.value;
            var count = _class_private_field_get(this, _issuesManager).numberOfIssues(view.getKind());
            view.update(count);
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
function updateCounts() {
    _class_private_method_get(this, _showIssuesTreeOrNoIssuesDetectedMessage, showIssuesTreeOrNoIssuesDetectedMessage).call(this, _class_private_field_get(this, _issuesManager).numberOfIssues(), _class_private_field_get(this, _issuesManager).numberOfHiddenIssues());
    if ((0,_IssueKindView_js__WEBPACK_IMPORTED_MODULE_8__.getGroupIssuesByKindSetting)().get()) {
        _class_private_method_get(this, _updateIssueKindViewsCount, updateIssueKindViewsCount).call(this);
    }
}
function showIssuesTreeOrNoIssuesDetectedMessage(issuesCount, hiddenIssueCount) {
    if (issuesCount > 0 || hiddenIssueCount > 0) {
        _class_private_field_get(this, _hiddenIssuesRow).hidden = hiddenIssueCount === 0;
        _class_private_field_get(this, _hiddenIssuesRow).update(hiddenIssueCount);
        _class_private_field_get(this, _issuesTree).element.hidden = false;
        _class_private_field_get(this, _noIssuesMessageDiv).style.display = 'none';
        var firstChild = _class_private_field_get(this, _issuesTree).firstChild();
        if (firstChild) {
            firstChild.select(/* omitFocus= */ true);
            this.setDefaultFocusedElement(firstChild.listItemElement);
        }
    } else {
        _class_private_field_get(this, _issuesTree).element.hidden = true;
        if (_class_private_field_get(this, _showThirdPartyCheckbox)) {
            this.setDefaultFocusedElement(_class_private_field_get(this, _showThirdPartyCheckbox).inputElement);
        }
        // We alreay know that issesCount is zero here.
        var hasOnlyThirdPartyIssues = _class_private_field_get(this, _issuesManager).numberOfAllStoredIssues() > 0;
        _class_private_field_get(this, _noIssuesMessageDiv).textContent = hasOnlyThirdPartyIssues ? i18nString(UIStrings.onlyThirdpartyCookieIssues) : i18nString(UIStrings.noIssuesDetectedSoFar);
        _class_private_field_get(this, _noIssuesMessageDiv).style.display = 'flex';
    }
}


}),
"./panels/issues/issuesPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.issues-pane {\n  overflow: hidden;\n}\n\n.issues-pane-no-issues {\n  align-items: center;\n  background-color: var(--sys-color-cdt-base-container);\n  display: flex;\n  flex: 1 1 auto;\n  font-size: 14px;\n  justify-content: center;\n  padding: 30px;\n}\n\n.issues-toolbar-container {\n  display: flex;\n  flex: none;\n}\n\n.issues-toolbar-container > .toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.issues-toolbar-left {\n  flex: 1 1 auto;\n}\n\n.issues-toolbar-right {\n  padding-right: 6px;\n}\n\n/*# sourceURL=issuesPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/issues/issuesTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n/* Remove container padding from TreeOutline.\n * Allows issues to touch the edges of the container. */\n:host,\n.issues {\n  padding: 0;\n  overflow: auto;\n}\n\n.issues {\n  --issue-indent: 8px;\n}\n\n/* Override whitespace behavior for tree items to allow wrapping */\n.issues li {\n  white-space: normal;\n  align-items: flex-start;\n  min-height: var(--sys-size-13);\n}\n\n/* Hide toggle for tree items which cannot be collapsed */\n.issues .always-parent::before {\n  display: none;\n}\n\n.issues li.parent::before {\n  margin-top: 10px;\n}\n\n.issues .affected-resources li.parent::before {\n  margin-top: 3px;\n  margin-right: 0;\n}\n\n.issue-category,\n.issue-kind,\n.issue {\n  padding: 0 8px;\n  padding-left: var(--issue-indent);\n  overflow: hidden;\n  flex: none;\n  transition: background-color 200ms;\n  border: 1px solid var(--sys-color-divider);\n  border-width: 0 0 1px;\n}\n\n.issue-category.hidden-issues.parent.expanded,\n.issue-kind.parent.expanded {\n  border-width: 0 0 1px;\n  background-color: var(--sys-color-surface2);\n}\n\n.issue-category + .children .issue,\n.issue.expanded {\n  background: var(--sys-color-cdt-base-container);\n}\n\n.issue.expanded {\n  border-width: 0;\n}\n\n.issue.selected,\n.issue.expanded.selected {\n  background-color: var(--sys-color-surface2);\n\n  &:focus {\n    background-color: var(--sys-color-tonal-container);\n  }\n}\n\n.tree-outline li:not(.selected):hover .selection {\n  background-color: unset;\n}\n\n.tree-outline li.issue:not(.expanded):not(.selected):hover .selection {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.tree-outline li.issue.expanded:not(.selected):hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.unhide-all-issues-button {\n  margin: 0;\n}\n\np {\n  margin-block-start: 2px;\n  margin-block-end: 2px;\n}\n\n/* Override selected tree item styles for issues to avoid changing width. */\n.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-category.selected:focus-visible,\n.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue-kind.selected:focus-visible,\n.tree-outline-disclosure:not(.tree-outline-disclosure-hide-overflow) .tree-outline.hide-selection-when-blurred .issue.selected:focus-visible {\n  width: auto;\n  padding-right: 8px;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 4px 0;\n  cursor: pointer;\n  width: 100%;\n\n  & > :not(.unhide-all-issues-button) {\n    margin-top: var(--sys-size-2);\n  }\n}\n\n.header devtools-hide-issues-menu {\n  visibility: hidden;\n}\n\n.header:hover devtools-hide-issues-menu,\n.issue.selected devtools-hide-issues-menu {\n  visibility: visible;\n}\n\n.title {\n  flex: 1;\n  font-size: 12px;\n  color: var(--sys-color-on-surface);\n  font-weight: normal;\n  user-select: text;\n  padding-top: 2px;\n}\n\n.issue.expanded .title {\n  font-weight: 450;\n}\n\n.body.children {\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 6px 0;\n  position: relative;\n  padding-left: calc(var(--issue-indent) + 43px);\n  padding-bottom: 26px;\n  padding-right: 8px;\n}\n\n.issue-category + .children,\n.issue-kind + .children {\n  --issue-indent: 24px;\n\n  padding-left: 0;\n}\n\n/* Show a colored border on the left side of opened issues. */\n.body::before {\n  content: "";\n  display: block;\n  position: absolute;\n  left: calc(var(--issue-indent) + 23px);\n  top: 0;\n  bottom: 20px;\n  width: 2px;\n}\n\n.issue-kind-breaking-change.body::before {\n  border-left: 2px solid var(--issue-color-yellow);\n}\n\n.issue-kind-page-error.body::before {\n  border-left: 2px solid var(--issue-color-red);\n}\n\n.issue-kind-improvement.body::before {\n  border-left: 2px solid var(--issue-color-blue);\n}\n\ndevtools-icon.leading-issue-icon {\n  margin: 1px 0 -1px 7px;\n}\n\n.message {\n  line-height: 18px;\n  font-size: 12px;\n  color: var(--sys-color-token-subtle);\n  margin-bottom: 4px;\n  user-select: text;\n}\n\n.message p {\n  margin-bottom: 16px;\n}\n\n.message li {\n  margin-top: 8px;\n}\n\n.message code {\n  color: var(--sys-color-on-surface);\n  padding: 0 2px;\n  font-size: 12px;\n  user-select: text;\n  cursor: text;\n  background: var(--sys-color-surface2);\n}\n\n.separator::before {\n  content: "\xb7";\n  padding-left: 1ex;\n  padding-right: 1ex;\n}\n\n.link {\n  font-size: 12px;\n  color: var(--sys-color-primary);\n}\n\n.link-wrapper {\n  margin-top: 15px;\n  user-select: text;\n}\n\n.affected-resources-label,\n.resolutions-label {\n  margin-top: 5px;\n  font-size: 10px;\n  font-weight: 500;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--sys-color-on-surface);\n  display: inline-block;\n}\n\n.link-list {\n  list-style-type: none;\n  list-style-position: inside;\n  padding-inline-start: 0;\n}\n\n.resolutions-list {\n  list-style-type: none;\n  list-style-position: inside;\n  padding-inline-start: 0;\n}\n\n/* We inherit all the styles from treeoutline, but these are simple text <li>, so we override some styles */\n.link-list li::before {\n  content: none;\n  mask-image: none;\n}\n\n.resolutions-list li::before {\n  content: "→";\n  mask-image: none;\n  padding-right: 5px;\n  position: relative;\n  top: -1px;\n}\n\n.resolutions-list li {\n  display: list-item;\n}\n\nul > li.plain-enum {\n  display: list-item;\n}\n\n/* This is a hack because the tree view\'s CSS overrides list styling in a non-compositional way. This\n   can be removed once we\'ve moved to proper components. */\nul > li.plain-enum::before {\n  content: "";\n  padding: 0;\n  margin: 0;\n  max-width: 0;\n}\n\n.affected-resources-label + .affected-resources {\n  padding: 3px 0 0;\n  position: relative;\n  user-select: text;\n}\n\n.affected-resource-label {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--sys-color-on-surface);\n  position: relative;\n  cursor: pointer;\n}\n\n.affected-resource-cookie {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-element {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--sys-color-primary);\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-row {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n  vertical-align: top;\n}\n\n.affected-resource-mixed-content {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-heavy-ad {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-request {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-source {\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--sys-color-primary);\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-list {\n  border-spacing: 10px 0;\n  margin-left: -12px;\n}\n\n.affected-resource-header {\n  font-size: 12px;\n  color: var(--sys-color-on-surface);\n  padding-left: 2px;\n}\n\n.code-example {\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n}\n\n.affected-resource-blocked-status {\n  color: var(--issue-color-red);\n}\n\n.affected-resource-report-only-status {\n  color: var(--issue-color-yellow);\n}\n\n.affected-resource-cookie-info {\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n  text-align: right;\n}\n\n.affected-resource-cookie-info-header {\n  text-align: right;\n}\n\n.affected-resource-mixed-content-info {\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n}\n\n.affected-resource-heavy-ad-info {\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n}\n\n.affected-resource-heavy-ad-info-frame {\n  display: flex;\n  align-items: center;\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n}\n\n.affected-resource-cell {\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n}\n\n.affected-resource-cell.link {\n  color: var(--sys-color-primary);\n}\n\n.affected-resource-cell span.icon {\n  margin-right: 0.5ex;\n  vertical-align: sub;\n}\n\n.affected-resources > .parent {\n  margin-top: 0;\n  padding: 2px 5px 0;\n}\n\n.affected-resources > .parent.expanded {\n  background: var(--sys-color-cdt-base-container);\n}\n\n.affected-resources > .children.expanded {\n  background: var(--sys-color-cdt-base-container);\n  padding: 6px 0 9px 5px;\n}\n\n.aggregated-issues-count {\n  padding: 3px 7px 0;\n}\n\n.affected-resource-directive-info-header {\n  text-align: left;\n}\n\n.affected-resource-directive {\n  font-size: 12px;\n  line-height: 18px;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.affected-resource-directive-info {\n  color: var(--sys-color-token-subtle);\n  padding: 2px;\n  text-align: left;\n}\n\n.devtools-link {\n  padding-top: 4px;\n}\n\ndevtools-icon.link-icon {\n  vertical-align: sub;\n  margin-right: 0.5ch;\n}\n\ndevtools-icon.elements-panel,\ndevtools-icon.network-panel {\n  margin-right: 0.5ex;\n  vertical-align: baseline;\n  height: 14px;\n}\n\n@media (forced-colors: active) {\n  .title {\n    color: ButtonText;\n  }\n\n  .tree-outline:not(.hide-selection-when-blurred) .selected .header .title,\n  .tree-outline.hide-selection-when-blurred .selected:focus-visible .header .title {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=issuesTree.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);