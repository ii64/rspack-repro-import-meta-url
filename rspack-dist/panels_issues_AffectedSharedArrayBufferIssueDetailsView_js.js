"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedSharedArrayBufferIssueDetailsView_js"], {
"./panels/issues/AffectedSharedArrayBufferIssueDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedSharedArrayBufferIssueDetailsView: function() { return AffectedSharedArrayBufferIssueDetailsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./panels/issues/AffectedResourcesView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
     *@description Label for number of affected resources indication in issue view
     */ nViolations: '{n, plural, =1 {# violation} other {# violations}}',
    /**
     *@description Value for the status column in SharedArrayBuffer issues
     */ warning: 'warning',
    /**
     *@description The kind of resolution for a mixed content issue
     */ blocked: 'blocked',
    /**
     *@description Value for the 'Trigger' column in the SAB affected resources list
     */ instantiation: 'Instantiation',
    /**
     *@description Tooltip for the 'Trigger' column in the SAB affected resources list
     */ aSharedarraybufferWas: 'A `SharedArrayBuffer` was instantiated in a context that is not cross-origin isolated',
    /**
     *@description Value for the 'Trigger' column in the SAB affected resources list
     */ transfer: 'Transfer',
    /**
     *@description Tooltip for the 'Trigger' column in the SAB affected resources list
     */ sharedarraybufferWasTransferedTo: '`SharedArrayBuffer` was transfered to a context that is not cross-origin isolated',
    /**
     *@description Header for the source location column
     */ sourceLocation: 'Source Location',
    /**
     *@description Title for the 'Trigger' column in the SAB affected resources list
     */ trigger: 'Trigger',
    /**
     *@description Title for the status column in the SAB affected resources list
     */ status: 'Status'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedSharedArrayBufferIssueDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _appendStatus = /*#__PURE__*/ new WeakSet(), _appendType = /*#__PURE__*/ new WeakSet(), _appendDetails = /*#__PURE__*/ new WeakSet(), _appendDetail = /*#__PURE__*/ new WeakSet();
var AffectedSharedArrayBufferIssueDetailsView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedSharedArrayBufferIssueDetailsView, AffectedResourcesView);
    var _super = _create_super(AffectedSharedArrayBufferIssueDetailsView);
    function AffectedSharedArrayBufferIssueDetailsView() {
        _class_call_check(this, AffectedSharedArrayBufferIssueDetailsView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendStatus);
        _class_private_method_init(_assert_this_initialized(_this), _appendType);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetails);
        _class_private_method_init(_assert_this_initialized(_this), _appendDetail);
        return _this;
    }
    _create_class(AffectedSharedArrayBufferIssueDetailsView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nViolations, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendDetails, appendDetails).call(this, this.issue.getSharedArrayBufferIssues());
            }
        }
    ]);
    return AffectedSharedArrayBufferIssueDetailsView;
} //# sourceMappingURL=AffectedSharedArrayBufferIssueDetailsView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.AffectedResourcesView);
function appendStatus(element, isWarning) {
    var status = document.createElement('td');
    if (isWarning) {
        status.classList.add('affected-resource-report-only-status');
        status.textContent = i18nString(UIStrings.warning);
    } else {
        status.classList.add('affected-resource-blocked-status');
        status.textContent = i18nString(UIStrings.blocked);
    }
    element.appendChild(status);
}
function appendType(element, type) {
    var status = document.createElement('td');
    switch(type){
        case "CreationIssue" /* Protocol.Audits.SharedArrayBufferIssueType.CreationIssue */ :
            status.textContent = i18nString(UIStrings.instantiation);
            status.title = i18nString(UIStrings.aSharedarraybufferWas);
            break;
        case "TransferIssue" /* Protocol.Audits.SharedArrayBufferIssueType.TransferIssue */ :
            status.textContent = i18nString(UIStrings.transfer);
            status.title = i18nString(UIStrings.sharedarraybufferWasTransferedTo);
            break;
    }
    element.appendChild(status);
}
function appendDetails(sabIssues) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
    this.appendColumnTitle(header, i18nString(UIStrings.trigger));
    this.appendColumnTitle(header, i18nString(UIStrings.status));
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sabIssues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var sabIssue = _step.value;
            count++;
            _class_private_method_get(this, _appendDetail, appendDetail).call(this, sabIssue);
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
function appendDetail(sabIssue) {
    var _sabIssue_model;
    var element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    var sabIssueDetails = sabIssue.details();
    var location = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.toZeroBasedLocation(sabIssueDetails.sourceCodeLocation);
    this.appendSourceLocation(element, location, (_sabIssue_model = sabIssue.model()) === null || _sabIssue_model === void 0 ? void 0 : _sabIssue_model.getTargetIfNotDisposed());
    _class_private_method_get(this, _appendType, appendType).call(this, element, sabIssueDetails.type);
    _class_private_method_get(this, _appendStatus, appendStatus).call(this, element, sabIssueDetails.isWarning);
    this.affectedResources.appendChild(element);
}


}),

}]);