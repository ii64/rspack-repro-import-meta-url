"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_BackgroundServiceModel_js"], {
"./panels/application/BackgroundServiceModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundServiceModel: function() { return BackgroundServiceModel; },
  Events: function() { return Events; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

var BackgroundServiceModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(BackgroundServiceModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(BackgroundServiceModel);
    function BackgroundServiceModel(target) {
        _class_call_check(this, BackgroundServiceModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "backgroundServiceAgent", void 0);
        _define_property(_assert_this_initialized(_this), "events", void 0);
        _this.backgroundServiceAgent = target.backgroundServiceAgent();
        target.registerBackgroundServiceDispatcher(_assert_this_initialized(_this));
        _this.events = new Map();
        return _this;
    }
    _create_class(BackgroundServiceModel, [
        {
            key: "enable",
            value: function enable(service) {
                this.events.set(service, []);
                void this.backgroundServiceAgent.invoke_startObserving({
                    service: service
                });
            }
        },
        {
            key: "setRecording",
            value: function setRecording(shouldRecord, service) {
                void this.backgroundServiceAgent.invoke_setRecording({
                    shouldRecord: shouldRecord,
                    service: service
                });
            }
        },
        {
            key: "clearEvents",
            value: function clearEvents(service) {
                this.events.set(service, []);
                void this.backgroundServiceAgent.invoke_clearEvents({
                    service: service
                });
            }
        },
        {
            key: "getEvents",
            value: function getEvents(service) {
                return this.events.get(service) || [];
            }
        },
        {
            key: "recordingStateChanged",
            value: function recordingStateChanged(param) {
                var isRecording = param.isRecording, service = param.service;
                this.dispatchEventToListeners(Events.RecordingStateChanged, {
                    isRecording: isRecording,
                    serviceName: service
                });
            }
        },
        {
            key: "backgroundServiceEventReceived",
            value: function backgroundServiceEventReceived(param) {
                var backgroundServiceEvent = param.backgroundServiceEvent;
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // @ts-expect-error
                this.events.get(backgroundServiceEvent.service).push(backgroundServiceEvent);
                this.dispatchEventToListeners(Events.BackgroundServiceEventReceived, backgroundServiceEvent);
            }
        }
    ]);
    return BackgroundServiceModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(BackgroundServiceModel, {
    capabilities: 1 /* SDK.Target.Capability.Browser */ ,
    autostart: false
});
var Events;
(function(Events) {
    Events["RecordingStateChanged"] = "RecordingStateChanged";
    Events["BackgroundServiceEventReceived"] = "BackgroundServiceEventReceived";
})(Events || (Events = {})); //# sourceMappingURL=BackgroundServiceModel.js.map


}),

}]);