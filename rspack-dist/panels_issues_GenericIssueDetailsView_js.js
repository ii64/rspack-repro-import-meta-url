"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_GenericIssueDetailsView_js"], {
"./panels/issues/GenericIssueDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GenericIssueDetailsView: function() { return GenericIssueDetailsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
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
     *@description Label for number of affected resources indication in issue view
     */ nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Title for the 'Frame' column.
     */ frameId: 'Frame',
    /**
     *@description Label for the violating node link in the issue view.
     */ violatingNode: 'Violating node'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/GenericIssueDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _appendDetails = /*#__PURE__*/ new WeakSet(), _appendDetail = /*#__PURE__*/ new WeakSet();
var GenericIssueDetailsView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(GenericIssueDetailsView, AffectedResourcesView);
    var _super = _create_super(GenericIssueDetailsView);
    function GenericIssueDetailsView() {
        _class_call_check(this, GenericIssueDetailsView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetail);
        return _this;
    }
    _create_class(GenericIssueDetailsView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nResources, {
                    n: count
                });
            }
        },
        {
            key: "violatingNodeIdName",
            value: function violatingNodeIdName(errorType) {
                switch(errorType){
                    case "FormLabelForNameError" /* Protocol.Audits.GenericIssueErrorType.FormLabelForNameError */ :
                        // Since the error is referencing the <label> tag, this string doesn't
                        // need to be translated.
                        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Label');
                    default:
                        return i18nString(UIStrings.violatingNode);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                var issues = this.issue.getGenericIssues();
                if (issues.size > 0) {
                    _class_private_method_get(this, _appendDetails, appendDetails).call(this, issues);
                } else {
                    this.updateAffectedResourceCount(0);
                }
            }
        }
    ]);
    return GenericIssueDetailsView;
} //# sourceMappingURL=GenericIssueDetailsView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView);
function appendDetails(genericIssues) {
    var header = document.createElement('tr');
    var sampleIssueDetails = genericIssues.values().next().value.details();
    if (sampleIssueDetails.frameId) {
        this.appendColumnTitle(header, i18nString(UIStrings.frameId));
    }
    // Only some `GenericIssueDetails` have information for the 'affected
    // resources' view. We'll count them and only call `#appendDetail` for
    // those. `updateAffectedResourceCount` will hide the section if the
    // count is zero.
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = genericIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var genericIssue = _step.value;
            var hasAffectedResource = genericIssue.details().frameId || genericIssue.details().violatingNodeId;
            if (hasAffectedResource) {
                count++;
                void _class_private_method_get(this, _appendDetail, appendDetail).call(this, genericIssue);
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
    this.updateAffectedResourceCount(count);
}
function appendDetail(genericIssue) {
    return _appendDetail1.apply(this, arguments);
}
function _appendDetail1() {
    _appendDetail1 = _async_to_generator(function(genericIssue) {
        var element, details, _genericIssue_model, target, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    element = document.createElement('tr');
                    element.classList.add('affected-resource-directive');
                    details = genericIssue.details();
                    if (details.frameId) {
                        element.appendChild(this.createFrameCell(details.frameId, genericIssue.getCategory()));
                    }
                    if (!details.violatingNodeId) return [
                        3,
                        2
                    ];
                    target = ((_genericIssue_model = genericIssue.model()) === null || _genericIssue_model === void 0 ? void 0 : _genericIssue_model.target()) || null;
                    _ = element.appendChild;
                    return [
                        4,
                        this.createElementCell({
                            backendNodeId: details.violatingNodeId,
                            nodeName: this.violatingNodeIdName(details.errorType),
                            target: target
                        }, genericIssue.getCategory())
                    ];
                case 1:
                    _.apply(element, [
                        _state.sent()
                    ]);
                    _state.label = 2;
                case 2:
                    this.affectedResources.appendChild(element);
                    return [
                        2
                    ];
            }
        });
    });
    return _appendDetail1.apply(this, arguments);
}


}),

}]);