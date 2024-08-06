"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_CDPSession_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CDPSession.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpCDPSession: function() { return CdpCDPSession; }
});
/* harmony import */var _api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/CallbackRegistry.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CallbackRegistry.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/ErrorLike.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/ErrorLike.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
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





var _sessionId = /*#__PURE__*/ new WeakMap(), _targetType = /*#__PURE__*/ new WeakMap(), _callbacks = /*#__PURE__*/ new WeakMap(), _connection = /*#__PURE__*/ new WeakMap(), _parentSessionId = /*#__PURE__*/ new WeakMap(), _target = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpCDPSession = /*#__PURE__*/ function(CDPSession) {
    "use strict";
    _inherits(CdpCDPSession, CDPSession);
    var _super = _create_super(CdpCDPSession);
    function CdpCDPSession(connection, targetType, sessionId, parentSessionId) {
        _class_call_check(this, CdpCDPSession);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _sessionId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _targetType, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _callbacks, {
            writable: true,
            value: new _common_CallbackRegistry_js__WEBPACK_IMPORTED_MODULE_1__.CallbackRegistry()
        });
        _class_private_field_init(_assert_this_initialized(_this), _connection, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _parentSessionId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _target, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _connection, connection);
        _class_private_field_set(_assert_this_initialized(_this), _targetType, targetType);
        _class_private_field_set(_assert_this_initialized(_this), _sessionId, sessionId);
        _class_private_field_set(_assert_this_initialized(_this), _parentSessionId, parentSessionId);
        return _this;
    }
    _create_class(CdpCDPSession, [
        {
            /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */ key: "_setTarget",
            value: function _setTarget(target) {
                _class_private_field_set(this, _target, target);
            }
        },
        {
            /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */ key: "_target",
            value: function _target1() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(_class_private_field_get(this, _target), 'Target must exist');
                return _class_private_field_get(this, _target);
            }
        },
        {
            key: "connection",
            value: function connection() {
                return _class_private_field_get(this, _connection);
            }
        },
        {
            key: "parentSession",
            value: function parentSession() {
                var _$_class_private_field_get;
                if (!_class_private_field_get(this, _parentSessionId)) {
                    // To make it work in Firefox that does not have parent (tab) sessions.
                    return this;
                }
                var parent = (_$_class_private_field_get = _class_private_field_get(this, _connection)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.session(_class_private_field_get(this, _parentSessionId));
                return parent !== null && parent !== void 0 ? parent : undefined;
            }
        },
        {
            key: "send",
            value: function send(method, params, options) {
                if (!_class_private_field_get(this, _connection)) {
                    return Promise.reject(new _common_Errors_js__WEBPACK_IMPORTED_MODULE_2__.TargetCloseError("Protocol error (".concat(method, "): Session closed. Most likely the ").concat(_class_private_field_get(this, _targetType), " has been closed.")));
                }
                return _class_private_field_get(this, _connection)._rawSend(_class_private_field_get(this, _callbacks), method, params, _class_private_field_get(this, _sessionId), options);
            }
        },
        {
            /**
     * @internal
     */ key: "_onMessage",
            value: function _onMessage(object) {
                if (object.id) {
                    if (object.error) {
                        _class_private_field_get(this, _callbacks).reject(object.id, (0,_util_ErrorLike_js__WEBPACK_IMPORTED_MODULE_4__.createProtocolErrorMessage)(object), object.error.message);
                    } else {
                        _class_private_field_get(this, _callbacks).resolve(object.id, object.result);
                    }
                } else {
                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_3__.assert)(!object.id);
                    this.emit(object.method, object.params);
                }
            }
        },
        {
            key: "detach",
            value: /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */ function detach() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _connection)) {
                                    throw new Error("Session already detached. Most likely the ".concat(_class_private_field_get(_this, _targetType), " has been closed."));
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _connection).send('Target.detachFromTarget', {
                                        sessionId: _class_private_field_get(_this, _sessionId)
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            /**
     * @internal
     */ key: "_onClosed",
            value: function _onClosed() {
                _class_private_field_get(this, _callbacks).clear();
                _class_private_field_set(this, _connection, undefined);
                this.emit(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSessionEvent.Disconnected, undefined);
            }
        },
        {
            /**
     * Returns the session's id.
     */ key: "id",
            value: function id() {
                return _class_private_field_get(this, _sessionId);
            }
        },
        {
            /**
     * @internal
     */ key: "getPendingProtocolErrors",
            value: function getPendingProtocolErrors() {
                return _class_private_field_get(this, _callbacks).getPendingProtocolErrors();
            }
        }
    ]);
    return CdpCDPSession;
} //# sourceMappingURL=CDPSession.js.map
(_api_CDPSession_js__WEBPACK_IMPORTED_MODULE_0__.CDPSession);


}),

}]);