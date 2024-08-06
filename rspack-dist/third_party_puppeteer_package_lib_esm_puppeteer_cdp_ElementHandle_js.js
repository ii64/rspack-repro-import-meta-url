"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ElementHandle_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ElementHandle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpElementHandle: function() { return CdpElementHandle; }
});
/* harmony import */var _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandle.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/AsyncIterableUtil.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/JSHandle.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _async_generator_delegate(inner, awaitWrap) {
    var iter = {}, waiting = false;
    function pump(key, value) {
        waiting = true;
        value = new Promise(function(resolve) {
            resolve(inner[key](value));
        });
        return {
            done: false,
            value: awaitWrap(value)
        };
    }
    if (typeof Symbol === "function" && Symbol.iterator) {
        iter[Symbol.iterator] = function() {
            return this;
        };
    }
    iter.next = function(value) {
        if (waiting) {
            waiting = false;
            return value;
        }
        return pump("next", value);
    };
    if (typeof inner.throw === "function") {
        iter.throw = function(value) {
            if (waiting) {
                waiting = false;
                throw value;
            }
            return pump("throw", value);
        };
    }
    if (typeof inner.return === "function") {
        iter.return = function(value) {
            return pump("return", value);
        };
    }
    return iter;
}
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _await_async_generator(value) {
    return new _await_value(value);
}
function _await_value(value) {
    this.wrapped = value;
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
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
    };
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
var __runInitializers = undefined && undefined.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = undefined && undefined.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || (typeof result === "undefined" ? "undefined" : _type_of(result)) !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};






var NON_ELEMENT_NODE_ROLES = new Set([
    'StaticText',
    'InlineTextBox'
]);
/**
 * The CdpElementHandle extends ElementHandle now to keep compatibility
 * with `instanceof` because of that we need to have methods for
 * CdpJSHandle to in this implementation as well.
 *
 * @internal
 */ var CdpElementHandle = function() {
    var get_frameManager = function get_frameManager() {
        return this.frame._frameManager;
    };
    var _frameManager, _CdpElementHandle;
    var _a, _b;
    var _classSuper = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle;
    var _instanceExtraInitializers = [];
    var _contentFrame_decorators;
    var _scrollIntoView_decorators;
    var _uploadFile_decorators;
    var _autofill_decorators;
    return _frameManager = /*#__PURE__*/ new WeakMap(), _CdpElementHandle = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(CdpElementHandle, _classSuper);
        var _super = _create_super(CdpElementHandle);
        function CdpElementHandle(world, remoteObject) {
            _class_call_check(this, CdpElementHandle);
            var _this;
            _this = _super.call(this, new _JSHandle_js__WEBPACK_IMPORTED_MODULE_5__.CdpJSHandle(world, remoteObject));
            _class_private_field_init(_assert_this_initialized(_this), _frameManager, {
                get: get_frameManager,
                set: void 0
            });
            __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers);
            return _this;
        }
        _create_class(CdpElementHandle, [
            {
                key: "realm",
                get: function get() {
                    return this.handle.realm;
                }
            },
            {
                key: "client",
                get: function get() {
                    return this.handle.client;
                }
            },
            {
                key: "remoteObject",
                value: function remoteObject() {
                    return this.handle.remoteObject();
                }
            },
            {
                key: "frame",
                get: function get() {
                    return this.realm.environment;
                }
            },
            {
                key: "contentFrame",
                value: function contentFrame() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var nodeInfo;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.client.send('DOM.describeNode', {
                                            objectId: _this.id
                                        })
                                    ];
                                case 1:
                                    nodeInfo = _state.sent();
                                    if (typeof nodeInfo.node.frameId !== 'string') {
                                        return [
                                            2,
                                            null
                                        ];
                                    }
                                    return [
                                        2,
                                        _class_private_field_get(_this, _frameManager).frame(nodeInfo.node.frameId)
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "scrollIntoView",
                value: function scrollIntoView() {
                    var _this = this;
                    var _this1 = this, _superprop_get_scrollIntoView = function() {
                        return _get(_get_prototype_of(CdpElementHandle.prototype), "scrollIntoView", _this);
                    };
                    return _async_to_generator(function() {
                        var error;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this1.assertConnectedElement()
                                    ];
                                case 1:
                                    _state.sent();
                                    _state.label = 2;
                                case 2:
                                    _state.trys.push([
                                        2,
                                        4,
                                        ,
                                        6
                                    ]);
                                    return [
                                        4,
                                        _this1.client.send('DOM.scrollIntoViewIfNeeded', {
                                            objectId: _this1.id
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 4:
                                    error = _state.sent();
                                    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError)(error);
                                    // Fallback to Element.scrollIntoView if DOM.scrollIntoViewIfNeeded is not supported
                                    return [
                                        4,
                                        _superprop_get_scrollIntoView().call(_this1)
                                    ];
                                case 5:
                                    _state.sent();
                                    return [
                                        3,
                                        6
                                    ];
                                case 6:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "uploadFile",
                value: function uploadFile() {
                    for(var _len = arguments.length, filePaths = new Array(_len), _key = 0; _key < _len; _key++){
                        filePaths[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var isMultiple, path, error, files, _ref, backendNodeId;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.evaluate(function(element) {
                                            return element.multiple;
                                        })
                                    ];
                                case 1:
                                    isMultiple = _state.sent();
                                    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(filePaths.length <= 1 || isMultiple, 'Multiple file uploads only work with <input type=file multiple>');
                                    _state.label = 2;
                                case 2:
                                    _state.trys.push([
                                        2,
                                        4,
                                        ,
                                        5
                                    ]);
                                    return [
                                        4,
                                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                                    ];
                                case 3:
                                    path = _state.sent();
                                    return [
                                        3,
                                        5
                                    ];
                                case 4:
                                    error = _state.sent();
                                    if (_instanceof(error, TypeError)) {
                                        throw new Error("JSHandle#uploadFile can only be used in Node-like environments.");
                                    }
                                    throw error;
                                case 5:
                                    files = filePaths.map(function(filePath) {
                                        if (path.win32.isAbsolute(filePath) || path.posix.isAbsolute(filePath)) {
                                            return filePath;
                                        } else {
                                            return path.resolve(filePath);
                                        }
                                    });
                                    if (!(files.length === 0)) return [
                                        3,
                                        7
                                    ];
                                    // XXX: These events should converted to trusted events. Perhaps do this
                                    // in `DOM.setFileInputFiles`?
                                    return [
                                        4,
                                        _this.evaluate(function(element) {
                                            element.files = new DataTransfer().files;
                                            // Dispatch events for this case because it should behave akin to a user action.
                                            element.dispatchEvent(new Event('input', {
                                                bubbles: true,
                                                composed: true
                                            }));
                                            element.dispatchEvent(new Event('change', {
                                                bubbles: true
                                            }));
                                        })
                                    ];
                                case 6:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                                case 7:
                                    return [
                                        4,
                                        _this.client.send('DOM.describeNode', {
                                            objectId: _this.id
                                        })
                                    ];
                                case 8:
                                    _ref = _state.sent(), backendNodeId = _ref.node.backendNodeId;
                                    return [
                                        4,
                                        _this.client.send('DOM.setFileInputFiles', {
                                            objectId: _this.id,
                                            files: files,
                                            backendNodeId: backendNodeId
                                        })
                                    ];
                                case 9:
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
                key: "autofill",
                value: function autofill(data) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var nodeInfo, fieldId, frameId;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.client.send('DOM.describeNode', {
                                            objectId: _this.handle.id
                                        })
                                    ];
                                case 1:
                                    nodeInfo = _state.sent();
                                    fieldId = nodeInfo.node.backendNodeId;
                                    frameId = _this.frame._id;
                                    return [
                                        4,
                                        _this.client.send('Autofill.trigger', {
                                            fieldId: fieldId,
                                            frameId: frameId,
                                            card: data.creditCard
                                        })
                                    ];
                                case 2:
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
                key: "queryAXTree",
                value: function queryAXTree(name, role) {
                    var _this = this;
                    return _wrap_async_generator(function() {
                        var nodes, results;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _await_async_generator(_this.client.send('Accessibility.queryAXTree', {
                                            objectId: _this.id,
                                            accessibleName: name,
                                            role: role
                                        }))
                                    ];
                                case 1:
                                    nodes = _state.sent().nodes;
                                    results = nodes.filter(function(node) {
                                        if (node.ignored) {
                                            return false;
                                        }
                                        if (!node.role) {
                                            return false;
                                        }
                                        if (NON_ELEMENT_NODE_ROLES.has(node.role.value)) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    return [
                                        5,
                                        _ts_values(_async_generator_delegate(_async_iterator(_util_AsyncIterableUtil_js__WEBPACK_IMPORTED_MODULE_3__.AsyncIterableUtil.map(results, function(node) {
                                            return _this.realm.adoptBackendNode(node.backendDOMNodeId);
                                        })), _await_async_generator))
                                    ];
                                case 2:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return CdpElementHandle;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _contentFrame_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()
        ];
        _scrollIntoView_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(),
            (_a = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_a)
        ];
        _uploadFile_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)(),
            (_b = _api_ElementHandle_js__WEBPACK_IMPORTED_MODULE_0__.ElementHandle).bindIsolatedHandle.bind(_b)
        ];
        _autofill_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_4__.throwIfDisposed)()
        ];
        __esDecorate(_CdpElementHandle, null, _contentFrame_decorators, {
            kind: "method",
            name: "contentFrame",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "contentFrame" in obj;
                },
                get: function(obj) {
                    return obj.contentFrame;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpElementHandle, null, _scrollIntoView_decorators, {
            kind: "method",
            name: "scrollIntoView",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "scrollIntoView" in obj;
                },
                get: function(obj) {
                    return obj.scrollIntoView;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpElementHandle, null, _uploadFile_decorators, {
            kind: "method",
            name: "uploadFile",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "uploadFile" in obj;
                },
                get: function(obj) {
                    return obj.uploadFile;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_CdpElementHandle, null, _autofill_decorators, {
            kind: "method",
            name: "autofill",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "autofill" in obj;
                },
                get: function(obj) {
                    return obj.autofill;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_CdpElementHandle, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _CdpElementHandle;
}();
 //# sourceMappingURL=ElementHandle.js.map


}),

}]);