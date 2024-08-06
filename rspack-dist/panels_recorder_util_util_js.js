"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_util_util_js"], {
"./panels/recorder/injected/injected.generated.js?b4f9": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "5c2e39d1e29b9e58f6c0.js";

}),
"./panels/recorder/util/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEVTOOLS_RECORDER_WORLD_NAME: function() { return DEVTOOLS_RECORDER_WORLD_NAME; },
  InjectedScript: function() { return InjectedScript; },
  SharedObject: function() { return /* reexport module object */ _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__; },
  isDebugBuild: function() { return isDebugBuild; }
});
/* harmony import */var _SharedObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedObject.js */ "./panels/recorder/util/SharedObject.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
    }
}
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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

// Setting this to `true` enables extra logging for the injected scripts.
var isDebugBuild = false;
var DEVTOOLS_RECORDER_WORLD_NAME = 'devtools_recorder';
var InjectedScript = /*#__PURE__*/ function() {
    "use strict";
    function InjectedScript() {
        _class_call_check(this, InjectedScript);
    }
    _create_class(InjectedScript, null, [
        {
            key: "get",
            value: function get() {
                var _this = this;
                return _async_to_generator(function() {
                    var _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!!_class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)) return [
                                    3,
                                    2
                                ];
                                _tmp = [
                                    _this,
                                    InjectedScript,
                                    _injectedScript
                                ];
                                return [
                                    4,
                                    fetch(new URL(/* asset import */__webpack_require__(/*! ../injected/injected.generated.js */ "./panels/recorder/injected/injected.generated.js?b4f9"), __webpack_require__.b))
                                ];
                            case 1:
                                _class_static_private_field_spec_set.apply(void 0, _tmp.concat([
                                    _state.sent().text()
                                ]));
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    _class_static_private_field_spec_get(_this, InjectedScript, _injectedScript)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return InjectedScript;
}();
var _injectedScript = {
    writable: true,
    value: void 0
};
 //# sourceMappingURL=util.js.map


}),

}]);