"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedElementsWithLowContrastView_js"], {
"./panels/issues/AffectedElementsWithLowContrastView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedElementsWithLowContrastView: function() { return AffectedElementsWithLowContrastView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedElementsView.js */ "./panels/issues/AffectedElementsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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



var _runningUpdatePromise = /*#__PURE__*/ new WeakMap(), _doUpdate = /*#__PURE__*/ new WeakSet(), _appendLowContrastElement = /*#__PURE__*/ new WeakSet(), _appendLowContrastElements = /*#__PURE__*/ new WeakSet();
var AffectedElementsWithLowContrastView = /*#__PURE__*/ function(AffectedElementsView) {
    "use strict";
    _inherits(AffectedElementsWithLowContrastView, AffectedElementsView);
    var _super = _create_super(AffectedElementsWithLowContrastView);
    function AffectedElementsWithLowContrastView() {
        _class_call_check(this, AffectedElementsWithLowContrastView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _doUpdate);
        _class_private_method_init(_assert_this_initialized(_this), _appendLowContrastElement);
        _class_private_method_init(_assert_this_initialized(_this), _appendLowContrastElements);
        _class_private_field_init(_assert_this_initialized(_this), _runningUpdatePromise, {
            writable: true,
            value: Promise.resolve()
        });
        return _this;
    }
    _create_class(AffectedElementsWithLowContrastView, [
        {
            key: "update",
            value: function update() {
                // Ensure that doUpdate is invoked atomically by serializing the update calls
                // because it's not re-entrace safe.
                _class_private_field_set(this, _runningUpdatePromise, _class_private_field_get(this, _runningUpdatePromise).then(_class_private_method_get(this, _doUpdate, doUpdate).bind(this)));
            }
        }
    ]);
    return AffectedElementsWithLowContrastView;
}(_AffectedElementsView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedElementsView);
function doUpdate() {
    return _doUpdate1.apply(this, arguments);
}
function _doUpdate1() {
    _doUpdate1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    this.clear();
                    return [
                        4,
                        _class_private_method_get(this, _appendLowContrastElements, appendLowContrastElements).call(this, this.issue.getLowContrastIssues())
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _doUpdate1.apply(this, arguments);
}
function appendLowContrastElement(issue) {
    return _appendLowContrastElement1.apply(this, arguments);
}
function _appendLowContrastElement1() {
    _appendLowContrastElement1 = _async_to_generator(function(issue) {
        var _issue_model, row, details, target, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    row = document.createElement('tr');
                    row.classList.add('affected-resource-low-contrast');
                    details = issue.details();
                    target = ((_issue_model = issue.model()) === null || _issue_model === void 0 ? void 0 : _issue_model.target()) || null;
                    _ = row.appendChild;
                    return [
                        4,
                        this.createElementCell({
                            nodeName: details.violatingNodeSelector,
                            backendNodeId: details.violatingNodeId,
                            target: target
                        }, issue.getCategory())
                    ];
                case 1:
                    _.apply(row, [
                        _state.sent()
                    ]);
                    this.appendIssueDetailCell(row, String(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.floor(details.contrastRatio, 2)));
                    this.appendIssueDetailCell(row, String(details.thresholdAA));
                    this.appendIssueDetailCell(row, String(details.thresholdAAA));
                    this.appendIssueDetailCell(row, details.fontSize);
                    this.appendIssueDetailCell(row, details.fontWeight);
                    this.affectedResources.appendChild(row);
                    return [
                        2
                    ];
            }
        });
    });
    return _appendLowContrastElement1.apply(this, arguments);
}
function appendLowContrastElements(issues) {
    return _appendLowContrastElements1.apply(this, arguments);
}
function _appendLowContrastElements1() {
    _appendLowContrastElements1 = _async_to_generator(function(issues) {
        var header, count, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, lowContrastIssue, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    header = document.createElement('tr');
                    this.appendColumnTitle(header, i18nString(UIStrings.element));
                    this.appendColumnTitle(header, i18nString(UIStrings.contrastRatio));
                    this.appendColumnTitle(header, i18nString(UIStrings.minimumAA));
                    this.appendColumnTitle(header, i18nString(UIStrings.minimumAAA));
                    this.appendColumnTitle(header, i18nString(UIStrings.textSize));
                    this.appendColumnTitle(header, i18nString(UIStrings.textWeight));
                    this.affectedResources.appendChild(header);
                    count = 0;
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = issues[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    lowContrastIssue = _step.value;
                    count++;
                    return [
                        4,
                        _class_private_method_get(this, _appendLowContrastElement, appendLowContrastElement).call(this, lowContrastIssue)
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
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
                case 8:
                    this.updateAffectedResourceCount(count);
                    return [
                        2
                    ];
            }
        });
    });
    return _appendLowContrastElements1.apply(this, arguments);
}
var UIStrings = {
    /**
     *@description Column title for the element column in the low contrast issue view
     */ element: 'Element',
    /**
     *@description Column title for the contrast ratio column in the low contrast issue view
     */ contrastRatio: 'Contrast ratio',
    /**
     *@description Column title for the minimum AA contrast ratio column in the low contrast issue view
     */ minimumAA: 'Minimum AA ratio',
    /**
     *@description Column title for the minimum AAA contrast ratio column in the low contrast issue view
     */ minimumAAA: 'Minimum AAA ratio',
    /**
     *@description Column title for the text size column in the low contrast issue view
     */ textSize: 'Text size',
    /**
     *@description Column title for the text weight column in the low contrast issue view
     */ textWeight: 'Text weight'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedElementsWithLowContrastView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_); //# sourceMappingURL=AffectedElementsWithLowContrastView.js.map


}),

}]);