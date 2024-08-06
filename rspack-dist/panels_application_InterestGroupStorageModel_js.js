"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_InterestGroupStorageModel_js"], {
"./panels/application/InterestGroupStorageModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InterestGroupStorageModel: function() { return InterestGroupStorageModel; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/*
 * Copyright (C) 2021 Google Inc. All rights reserved.
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

var InterestGroupStorageModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(InterestGroupStorageModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(InterestGroupStorageModel);
    function InterestGroupStorageModel(target) {
        _class_call_check(this, InterestGroupStorageModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "storageAgent", void 0);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        target.registerStorageDispatcher(_assert_this_initialized(_this));
        _this.storageAgent = target.storageAgent();
        _this.enabled = false;
        return _this;
    }
    _create_class(InterestGroupStorageModel, [
        {
            key: "enable",
            value: function enable() {
                if (this.enabled) {
                    return;
                }
                void this.storageAgent.invoke_setInterestGroupTracking({
                    enable: true
                });
            }
        },
        {
            key: "disable",
            value: function disable() {
                if (!this.enabled) {
                    return;
                }
                void this.storageAgent.invoke_setInterestGroupTracking({
                    enable: false
                });
            }
        },
        {
            key: "interestGroupAccessed",
            value: function interestGroupAccessed(event) {
                this.dispatchEventToListeners("InterestGroupAccess" /* Events.InterestGroupAccess */ , event);
            }
        },
        {
            key: "attributionReportingTriggerRegistered",
            value: function attributionReportingTriggerRegistered(_event) {}
        },
        {
            key: "indexedDBListUpdated",
            value: function indexedDBListUpdated(_event) {}
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(_event) {}
        },
        {
            key: "interestGroupAuctionEventOccurred",
            value: function interestGroupAuctionEventOccurred(_event) {}
        },
        {
            key: "interestGroupAuctionNetworkRequestCreated",
            value: function interestGroupAuctionNetworkRequestCreated(_event) {}
        },
        {
            key: "cacheStorageListUpdated",
            value: function cacheStorageListUpdated(_event) {}
        },
        {
            key: "cacheStorageContentUpdated",
            value: function cacheStorageContentUpdated(_event) {}
        },
        {
            key: "sharedStorageAccessed",
            value: function sharedStorageAccessed(_event) {}
        },
        {
            key: "storageBucketCreatedOrUpdated",
            value: function storageBucketCreatedOrUpdated(_event) {}
        },
        {
            key: "storageBucketDeleted",
            value: function storageBucketDeleted(_event) {}
        },
        {
            key: "attributionReportingSourceRegistered",
            value: function attributionReportingSourceRegistered(_event) {}
        }
    ]);
    return InterestGroupStorageModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InterestGroupStorageModel, {
    capabilities: 8192 /* SDK.Target.Capability.Storage */ ,
    autostart: false
}); //# sourceMappingURL=InterestGroupStorageModel.js.map


}),

}]);