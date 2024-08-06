"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_issues_AffectedHeavyAdView_js"], {
"./panels/issues/AffectedHeavyAdView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AffectedHeavyAdView: function() { return AffectedHeavyAdView; }
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
     */ nResources: '{n, plural, =1 {# resource} other {# resources}}',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */ limitExceeded: 'Limit exceeded',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */ resolutionStatus: 'Resolution Status',
    /**
     *@description Title for a column in an Heavy Ads issue view
     */ frameUrl: 'Frame URL',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was bad enough that it was removed.
     */ removed: 'Removed',
    /**
     * @description When there is a Heavy Ad, the browser can choose to deal with it in different ways.
     * This string indicates that the ad was only warned, and not removed.
     */ warned: 'Warned',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view. The Ad has been flagged as a
     *Heavy Ad because it exceeded the set limit for peak CPU usage, e.g. it blocked the main thread
     *for more than 15 seconds in any 30-second window.
     */ cpuPeakLimit: 'CPU peak limit',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view
     */ cpuTotalLimit: 'CPU total limit',
    /**
     *@description Reason for a Heavy Ad being flagged in issue view
     */ networkLimit: 'Network limit'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/issues/AffectedHeavyAdView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _appendAffectedHeavyAds = /*#__PURE__*/ new WeakSet(), _statusToString = /*#__PURE__*/ new WeakSet(), _limitToString = /*#__PURE__*/ new WeakSet(), _appendAffectedHeavyAd = /*#__PURE__*/ new WeakSet();
var AffectedHeavyAdView = /*#__PURE__*/ function(AffectedResourcesView) {
    "use strict";
    _inherits(AffectedHeavyAdView, AffectedResourcesView);
    var _super = _create_super(AffectedHeavyAdView);
    function AffectedHeavyAdView() {
        _class_call_check(this, AffectedHeavyAdView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedHeavyAds);
        _class_private_method_init(_assert_this_initialized(_this), _statusToString);
        _class_private_method_init(_assert_this_initialized(_this), _limitToString);
        _class_private_method_init(_assert_this_initialized(_this), _appendAffectedHeavyAd);
        return _this;
    }
    _create_class(AffectedHeavyAdView, [
        {
            key: "getResourceNameWithCount",
            value: function getResourceNameWithCount(count) {
                return i18nString(UIStrings.nResources, {
                    n: count
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.clear();
                _class_private_method_get(this, _appendAffectedHeavyAds, appendAffectedHeavyAds).call(this, this.issue.getHeavyAdIssues());
            }
        }
    ]);
    return AffectedHeavyAdView;
} //# sourceMappingURL=AffectedHeavyAdView.js.map
(_AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_1__.AffectedResourcesView);
function appendAffectedHeavyAds(heavyAds) {
    var header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.limitExceeded));
    this.appendColumnTitle(header, i18nString(UIStrings.resolutionStatus));
    this.appendColumnTitle(header, i18nString(UIStrings.frameUrl));
    this.affectedResources.appendChild(header);
    var count = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = heavyAds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var heavyAd = _step.value;
            _class_private_method_get(this, _appendAffectedHeavyAd, appendAffectedHeavyAd).call(this, heavyAd.details());
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
function statusToString(status) {
    switch(status){
        case "HeavyAdBlocked" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdBlocked */ :
            return i18nString(UIStrings.removed);
        case "HeavyAdWarning" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdWarning */ :
            return i18nString(UIStrings.warned);
    }
    return '';
}
function limitToString(status) {
    switch(status){
        case "CpuPeakLimit" /* Protocol.Audits.HeavyAdReason.CpuPeakLimit */ :
            return i18nString(UIStrings.cpuPeakLimit);
        case "CpuTotalLimit" /* Protocol.Audits.HeavyAdReason.CpuTotalLimit */ :
            return i18nString(UIStrings.cpuTotalLimit);
        case "NetworkTotalLimit" /* Protocol.Audits.HeavyAdReason.NetworkTotalLimit */ :
            return i18nString(UIStrings.networkLimit);
    }
    return '';
}
function appendAffectedHeavyAd(heavyAd) {
    var element = document.createElement('tr');
    element.classList.add('affected-resource-heavy-ad');
    var reason = document.createElement('td');
    reason.classList.add('affected-resource-heavy-ad-info');
    reason.textContent = _class_private_method_get(this, _limitToString, limitToString).call(this, heavyAd.reason);
    element.appendChild(reason);
    var status = document.createElement('td');
    status.classList.add('affected-resource-heavy-ad-info');
    status.textContent = _class_private_method_get(this, _statusToString, statusToString).call(this, heavyAd.resolution);
    element.appendChild(status);
    var frameId = heavyAd.frame.frameId;
    var frameUrl = this.createFrameCell(frameId, this.issue.getCategory());
    element.appendChild(frameUrl);
    this.affectedResources.appendChild(element);
}


}),

}]);