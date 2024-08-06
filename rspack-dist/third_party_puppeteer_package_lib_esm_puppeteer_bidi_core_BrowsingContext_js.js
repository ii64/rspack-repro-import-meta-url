"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_BrowsingContext_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/BrowsingContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BrowsingContext: function() { return BrowsingContext; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/decorators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/decorators.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
/* harmony import */var _Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Realm.js");
/* harmony import */var _Request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Request.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js");
/* harmony import */var _UserPrompt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UserPrompt.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserPrompt.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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







/**
 * @internal
 */ var BrowsingContext = function() {
    var initialize = function initialize() {
        var _this = this;
        var userContextEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(this.userContext));
        userContextEmitter.once('closed', function(param) {
            var reason = param.reason;
            _this.dispose("Browsing context already closed: ".concat(reason));
        });
        var sessionEmitter = _class_private_field_get(this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(this, _session)));
        sessionEmitter.on('browsingContext.contextCreated', function(info) {
            if (info.parent !== _this.id) {
                return;
            }
            var browsingContext = _BrowsingContext.from(_this.userContext, _this, info.context, info.url, info.originalOpener);
            _class_private_field_get(_this, _children).set(info.context, browsingContext);
            var browsingContextEmitter = _class_private_field_get(_this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(browsingContext));
            browsingContextEmitter.once('closed', function() {
                browsingContextEmitter.removeAllListeners();
                _class_private_field_get(_this, _children).delete(browsingContext.id);
            });
            _this.emit('browsingcontext', {
                browsingContext: browsingContext
            });
        });
        sessionEmitter.on('browsingContext.contextDestroyed', function(info) {
            if (info.context !== _this.id) {
                return;
            }
            _this.dispose('Browsing context already closed.');
        });
        sessionEmitter.on('browsingContext.domContentLoaded', function(info) {
            if (info.context !== _this.id) {
                return;
            }
            _class_private_field_set(_this, _url, info.url);
            _this.emit('DOMContentLoaded', undefined);
        });
        sessionEmitter.on('browsingContext.load', function(info) {
            if (info.context !== _this.id) {
                return;
            }
            _class_private_field_set(_this, _url, info.url);
            _this.emit('load', undefined);
        });
        sessionEmitter.on('browsingContext.navigationStarted', function(info) {
            if (info.context !== _this.id) {
                return;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                // Note: we should not update this.#url at this point since the context
                // has not finished navigating to the info.url yet.
                for(var _iterator = _class_private_field_get(_this, _requests)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), id = _step_value[0], request = _step_value[1];
                    if (request.disposed) {
                        _class_private_field_get(_this, _requests).delete(id);
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
            // If the navigation hasn't finished, then this is nested navigation. The
            // current navigation will handle this.
            if (_class_private_field_get(_this, _navigation) !== undefined && !_class_private_field_get(_this, _navigation).disposed) {
                return;
            }
            // Note the navigation ID is null for this event.
            _class_private_field_set(_this, _navigation, _Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation.from(_this));
            var navigationEmitter = _class_private_field_get(_this, _disposables).use(new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(_class_private_field_get(_this, _navigation)));
            for(var _i = 0, _iter = [
                'fragment',
                'failed',
                'aborted'
            ]; _i < _iter.length; _i++){
                var eventName = _iter[_i];
                navigationEmitter.once(eventName, function(param) {
                    var url = param.url;
                    navigationEmitter[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                    _class_private_field_set(_this, _url, url);
                });
            }
            _this.emit('navigation', {
                navigation: _class_private_field_get(_this, _navigation)
            });
        });
        sessionEmitter.on('network.beforeRequestSent', function(event) {
            if (event.context !== _this.id) {
                return;
            }
            if (_class_private_field_get(_this, _requests).has(event.request.request)) {
                // Means the request is a redirect. This is handled in Request.
                // Or an Auth event was issued
                return;
            }
            var request = _Request_js__WEBPACK_IMPORTED_MODULE_5__.Request.from(_this, event);
            _class_private_field_get(_this, _requests).set(request.id, request);
            _this.emit('request', {
                request: request
            });
        });
        sessionEmitter.on('log.entryAdded', function(entry) {
            if (entry.source.context !== _this.id) {
                return;
            }
            _this.emit('log', {
                entry: entry
            });
        });
        sessionEmitter.on('browsingContext.userPromptOpened', function(info) {
            if (info.context !== _this.id) {
                return;
            }
            var userPrompt = _UserPrompt_js__WEBPACK_IMPORTED_MODULE_6__.UserPrompt.from(_this, info);
            _this.emit('userprompt', {
                userPrompt: userPrompt
            });
        });
    };
    var get_session = function get_session() {
        return this.userContext.browser.session;
    };
    var createWindowRealm = function createWindowRealm(sandbox) {
        var _this = this;
        var realm = _Realm_js__WEBPACK_IMPORTED_MODULE_4__.WindowRealm.from(this, sandbox);
        realm.on('worker', function(realm) {
            _this.emit('worker', {
                realm: realm
            });
        });
        return realm;
    };
    var _tmp;
    var _navigation, _reason, _url, _children, _disposables, _realms, _requests, _initialize, _session, _createWindowRealm, _BrowsingContext;
    var _a;
    var _classSuper = _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter;
    var _instanceExtraInitializers = [];
    var _dispose_decorators;
    var _activate_decorators;
    var _captureScreenshot_decorators;
    var _close_decorators;
    var _traverseHistory_decorators;
    var _navigate_decorators;
    var _reload_decorators;
    var _setCacheBehavior_decorators;
    var _print_decorators;
    var _handleUserPrompt_decorators;
    var _setViewport_decorators;
    var _performActions_decorators;
    var _releaseActions_decorators;
    var _createWindowRealm_decorators;
    var _addPreloadScript_decorators;
    var _addIntercept_decorators;
    var _removePreloadScript_decorators;
    var _getCookies_decorators;
    var _setCookie_decorators;
    var _setFiles_decorators;
    var _subscribe_decorators;
    var _addInterception_decorators;
    var _deleteCookie_decorators;
    var _locateNodes_decorators;
    return _navigation = /*#__PURE__*/ new WeakMap(), _reason = /*#__PURE__*/ new WeakMap(), _url = /*#__PURE__*/ new WeakMap(), _children = /*#__PURE__*/ new WeakMap(), _disposables = /*#__PURE__*/ new WeakMap(), _realms = /*#__PURE__*/ new WeakMap(), _requests = /*#__PURE__*/ new WeakMap(), _initialize = /*#__PURE__*/ new WeakSet(), _session = /*#__PURE__*/ new WeakMap(), _createWindowRealm = /*#__PURE__*/ new WeakSet(), _tmp = (_dispose_decorators = [
        _util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.inertIfDisposed
    ], _activate_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _captureScreenshot_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _close_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _traverseHistory_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _navigate_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _reload_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setCacheBehavior_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _print_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _handleUserPrompt_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setViewport_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _performActions_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _releaseActions_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _createWindowRealm_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _addPreloadScript_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _addIntercept_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _removePreloadScript_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _getCookies_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setCookie_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _setFiles_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _subscribe_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _addInterception_decorators = [
        (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
            // SAFETY: Disposal implies this exists.
            return _class_private_field_get(context, _reason);
        })
    ], _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol), _BrowsingContext = /*#__PURE__*/ function(_classSuper) {
        "use strict";
        _inherits(BrowsingContext, _classSuper);
        var _super = _create_super(BrowsingContext);
        function BrowsingContext(context, parent, id, url, originalOpener) {
            _class_call_check(this, BrowsingContext);
            var _this;
            _this = _super.call(this);
            _class_private_method_init(_assert_this_initialized(_this), _initialize);
            _class_private_field_init(_assert_this_initialized(_this), _session, {
                get: get_session,
                set: void 0
            });
            _class_private_method_init(_assert_this_initialized(_this), _createWindowRealm);
            _class_private_field_init(_assert_this_initialized(_this), _navigation, {
                writable: true,
                value: __runInitializers(_assert_this_initialized(_this), _instanceExtraInitializers)
            });
            _class_private_field_init(_assert_this_initialized(_this), _reason, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _url, {
                writable: true,
                value: void 0
            });
            _class_private_field_init(_assert_this_initialized(_this), _children, {
                writable: true,
                value: new Map()
            });
            _class_private_field_init(_assert_this_initialized(_this), _disposables, {
                writable: true,
                value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.DisposableStack()
            });
            _class_private_field_init(_assert_this_initialized(_this), _realms, {
                writable: true,
                value: new Map()
            });
            _class_private_field_init(_assert_this_initialized(_this), _requests, {
                writable: true,
                value: new Map()
            });
            _define_property(_assert_this_initialized(_this), "defaultRealm", void 0);
            _define_property(_assert_this_initialized(_this), "id", void 0);
            _define_property(_assert_this_initialized(_this), "parent", void 0);
            _define_property(_assert_this_initialized(_this), "userContext", void 0);
            _define_property(_assert_this_initialized(_this), "originalOpener", void 0);
            _class_private_field_set(_assert_this_initialized(_this), _url, url);
            _this.id = id;
            _this.parent = parent;
            _this.userContext = context;
            _this.originalOpener = originalOpener;
            _this.defaultRealm = _class_private_method_get(_this, _createWindowRealm, createWindowRealm).call(_assert_this_initialized(_this));
            return _this;
        }
        _create_class(BrowsingContext, [
            {
                key: "children",
                get: function get() {
                    return _class_private_field_get(this, _children).values();
                }
            },
            {
                key: "closed",
                get: function get() {
                    return _class_private_field_get(this, _reason) !== undefined;
                }
            },
            {
                key: "disposed",
                get: function get() {
                    return this.closed;
                }
            },
            {
                key: "realms",
                get: function get() {
                    // eslint-disable-next-line @typescript-eslint/no-this-alias -- Required
                    var self = this;
                    return function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        self.defaultRealm
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        5,
                                        _ts_values(_class_private_field_get(self, _realms).values())
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }();
                }
            },
            {
                key: "top",
                get: function get() {
                    var context = this;
                    for(var parent = context.parent; parent; parent = context.parent){
                        context = parent;
                    }
                    return context;
                }
            },
            {
                key: "url",
                get: function get() {
                    return _class_private_field_get(this, _url);
                }
            },
            {
                key: "dispose",
                value: function dispose(reason) {
                    _class_private_field_set(this, _reason, reason);
                    this[_util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol]();
                }
            },
            {
                key: "activate",
                value: function activate() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.activate', {
                                            context: _this.id
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
                key: "captureScreenshot",
                value: function captureScreenshot() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, data;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.captureScreenshot', _object_spread({
                                            context: _this.id
                                        }, options))
                                    ];
                                case 1:
                                    _ref = _state.sent(), data = _ref.result.data;
                                    return [
                                        2,
                                        data
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "close",
                value: function close(promptUnload) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all(_to_consumable_array(_class_private_field_get(_this, _children).values()).map(function() {
                                            var _ref = _async_to_generator(function(child) {
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                child.close(promptUnload)
                                                            ];
                                                        case 1:
                                                            _state.sent();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(child) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()))
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.close', {
                                            context: _this.id,
                                            promptUnload: promptUnload
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
                key: "traverseHistory",
                value: function traverseHistory(delta) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.traverseHistory', {
                                            context: _this.id,
                                            delta: delta
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
                key: "navigate",
                value: function navigate(url, wait) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.navigate', {
                                            context: _this.id,
                                            url: url,
                                            wait: wait
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
                key: "reload",
                value: function reload() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.reload', _object_spread({
                                            context: _this.id
                                        }, options))
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
                key: "setCacheBehavior",
                value: function setCacheBehavior(cacheBehavior) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    // @ts-expect-error not in BiDi types yet.
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('network.setCacheBehavior', {
                                            contexts: [
                                                _this.id
                                            ],
                                            cacheBehavior: cacheBehavior
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
                key: "print",
                value: function print() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, data;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.print', _object_spread({
                                            context: _this.id
                                        }, options))
                                    ];
                                case 1:
                                    _ref = _state.sent(), data = _ref.result.data;
                                    return [
                                        2,
                                        data
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "handleUserPrompt",
                value: function handleUserPrompt() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.handleUserPrompt', _object_spread({
                                            context: _this.id
                                        }, options))
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
                key: "setViewport",
                value: function setViewport() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.setViewport', _object_spread({
                                            context: _this.id
                                        }, options))
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
                key: "performActions",
                value: function performActions(actions) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('input.performActions', {
                                            context: _this.id,
                                            actions: actions
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
                key: "releaseActions",
                value: function releaseActions() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('input.releaseActions', {
                                            context: _this.id
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
                key: "createWindowRealm",
                value: function createWindowRealm1(sandbox) {
                    return _class_private_method_get(this, _createWindowRealm, createWindowRealm).call(this, sandbox);
                }
            },
            {
                key: "addPreloadScript",
                value: function addPreloadScript(functionDeclaration) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.userContext.browser.addPreloadScript(functionDeclaration, _object_spread_props(_object_spread({}, options), {
                                            contexts: [
                                                _this
                                            ]
                                        }))
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "addIntercept",
                value: function addIntercept(options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, intercept;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.userContext.browser.session.send('network.addIntercept', _object_spread_props(_object_spread({}, options), {
                                            contexts: [
                                                _this.id
                                            ]
                                        }))
                                    ];
                                case 1:
                                    _ref = _state.sent(), intercept = _ref.result.intercept;
                                    return [
                                        2,
                                        intercept
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "removePreloadScript",
                value: function removePreloadScript(script) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _this.userContext.browser.removePreloadScript(script)
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
                key: "getCookies",
                value: function getCookies() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _this = this;
                    return _async_to_generator(function() {
                        var _ref, cookies;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('storage.getCookies', _object_spread_props(_object_spread({}, options), {
                                            partition: {
                                                type: 'context',
                                                context: _this.id
                                            }
                                        }))
                                    ];
                                case 1:
                                    _ref = _state.sent(), cookies = _ref.result.cookies;
                                    return [
                                        2,
                                        cookies
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "setCookie",
                value: function setCookie(cookie) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('storage.setCookie', {
                                            cookie: cookie,
                                            partition: {
                                                type: 'context',
                                                context: _this.id
                                            }
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
                key: "setFiles",
                value: function setFiles(element, files) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('input.setFiles', {
                                            context: _this.id,
                                            element: element,
                                            files: files
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
                key: "subscribe",
                value: function subscribe(events) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).subscribe(events, [
                                            _this.id
                                        ])
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
                key: "addInterception",
                value: function addInterception(events) {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).subscribe(events, [
                                            _this.id
                                        ])
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
                key: _tmp,
                value: function value() {
                    var _$_class_private_field_get;
                    _class_private_field_set(this, _reason, (_$_class_private_field_get = _class_private_field_get(this, _reason)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : 'Browsing context already closed, probably because the user context closed.');
                    this.emit('closed', {
                        reason: _class_private_field_get(this, _reason)
                    });
                    _class_private_field_get(this, _disposables).dispose();
                    _get(_get_prototype_of(BrowsingContext.prototype), _util_disposable_js__WEBPACK_IMPORTED_MODULE_2__.disposeSymbol, this).call(this);
                }
            },
            {
                key: "deleteCookie",
                value: function deleteCookie() {
                    for(var _len = arguments.length, cookieFilters = new Array(_len), _key = 0; _key < _len; _key++){
                        cookieFilters[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all(cookieFilters.map(function() {
                                            var _ref = _async_to_generator(function(filter) {
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                _class_private_field_get(_this, _session).send('storage.deleteCookies', {
                                                                    filter: filter,
                                                                    partition: {
                                                                        type: 'context',
                                                                        context: _this.id
                                                                    }
                                                                })
                                                            ];
                                                        case 1:
                                                            _state.sent();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(filter) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()))
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
                key: "locateNodes",
                value: function locateNodes(locator, startNodes) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var result;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _class_private_field_get(_this, _session).send('browsingContext.locateNodes', {
                                            context: _this.id,
                                            locator: locator,
                                            startNodes: startNodes.length ? startNodes : undefined
                                        })
                                    ];
                                case 1:
                                    result = _state.sent();
                                    return [
                                        2,
                                        result.result.nodes
                                    ];
                            }
                        });
                    })();
                }
            }
        ], [
            {
                key: "from",
                value: function from(userContext, parent, id, url, originalOpener) {
                    var browsingContext = new BrowsingContext(userContext, parent, id, url, originalOpener);
                    _class_private_method_get(browsingContext, _initialize, initialize).call(browsingContext);
                    return browsingContext;
                }
            }
        ]);
        return BrowsingContext;
    }(_classSuper), function() {
        var _classSuper_Symbol_metadata;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_classSuper_Symbol_metadata = _classSuper[Symbol.metadata]) !== null && _classSuper_Symbol_metadata !== void 0 ? _classSuper_Symbol_metadata : null) : void 0;
        _deleteCookie_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
                // SAFETY: Disposal implies this exists.
                return _class_private_field_get(context, _reason);
            })
        ];
        _locateNodes_decorators = [
            (0,_util_decorators_js__WEBPACK_IMPORTED_MODULE_1__.throwIfDisposed)(function(context) {
                // SAFETY: Disposal implies this exists.
                return _class_private_field_get(context, _reason);
            })
        ];
        __esDecorate(_BrowsingContext, null, _dispose_decorators, {
            kind: "method",
            name: "dispose",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "dispose" in obj;
                },
                get: function(obj) {
                    return obj.dispose;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _activate_decorators, {
            kind: "method",
            name: "activate",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "activate" in obj;
                },
                get: function(obj) {
                    return obj.activate;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _captureScreenshot_decorators, {
            kind: "method",
            name: "captureScreenshot",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "captureScreenshot" in obj;
                },
                get: function(obj) {
                    return obj.captureScreenshot;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _close_decorators, {
            kind: "method",
            name: "close",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "close" in obj;
                },
                get: function(obj) {
                    return obj.close;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _traverseHistory_decorators, {
            kind: "method",
            name: "traverseHistory",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "traverseHistory" in obj;
                },
                get: function(obj) {
                    return obj.traverseHistory;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _navigate_decorators, {
            kind: "method",
            name: "navigate",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "navigate" in obj;
                },
                get: function(obj) {
                    return obj.navigate;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _reload_decorators, {
            kind: "method",
            name: "reload",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "reload" in obj;
                },
                get: function(obj) {
                    return obj.reload;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _setCacheBehavior_decorators, {
            kind: "method",
            name: "setCacheBehavior",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setCacheBehavior" in obj;
                },
                get: function(obj) {
                    return obj.setCacheBehavior;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _print_decorators, {
            kind: "method",
            name: "print",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "print" in obj;
                },
                get: function(obj) {
                    return obj.print;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _handleUserPrompt_decorators, {
            kind: "method",
            name: "handleUserPrompt",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "handleUserPrompt" in obj;
                },
                get: function(obj) {
                    return obj.handleUserPrompt;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _setViewport_decorators, {
            kind: "method",
            name: "setViewport",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setViewport" in obj;
                },
                get: function(obj) {
                    return obj.setViewport;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _performActions_decorators, {
            kind: "method",
            name: "performActions",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "performActions" in obj;
                },
                get: function(obj) {
                    return obj.performActions;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _releaseActions_decorators, {
            kind: "method",
            name: "releaseActions",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "releaseActions" in obj;
                },
                get: function(obj) {
                    return obj.releaseActions;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _createWindowRealm_decorators, {
            kind: "method",
            name: "createWindowRealm",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "createWindowRealm" in obj;
                },
                get: function(obj) {
                    return obj.createWindowRealm;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _addPreloadScript_decorators, {
            kind: "method",
            name: "addPreloadScript",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addPreloadScript" in obj;
                },
                get: function(obj) {
                    return obj.addPreloadScript;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _addIntercept_decorators, {
            kind: "method",
            name: "addIntercept",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addIntercept" in obj;
                },
                get: function(obj) {
                    return obj.addIntercept;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _removePreloadScript_decorators, {
            kind: "method",
            name: "removePreloadScript",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "removePreloadScript" in obj;
                },
                get: function(obj) {
                    return obj.removePreloadScript;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _getCookies_decorators, {
            kind: "method",
            name: "getCookies",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "getCookies" in obj;
                },
                get: function(obj) {
                    return obj.getCookies;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _setCookie_decorators, {
            kind: "method",
            name: "setCookie",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setCookie" in obj;
                },
                get: function(obj) {
                    return obj.setCookie;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _setFiles_decorators, {
            kind: "method",
            name: "setFiles",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "setFiles" in obj;
                },
                get: function(obj) {
                    return obj.setFiles;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _subscribe_decorators, {
            kind: "method",
            name: "subscribe",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "subscribe" in obj;
                },
                get: function(obj) {
                    return obj.subscribe;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _addInterception_decorators, {
            kind: "method",
            name: "addInterception",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "addInterception" in obj;
                },
                get: function(obj) {
                    return obj.addInterception;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _deleteCookie_decorators, {
            kind: "method",
            name: "deleteCookie",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "deleteCookie" in obj;
                },
                get: function(obj) {
                    return obj.deleteCookie;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        __esDecorate(_BrowsingContext, null, _locateNodes_decorators, {
            kind: "method",
            name: "locateNodes",
            static: false,
            private: false,
            access: {
                has: function(obj) {
                    return "locateNodes" in obj;
                },
                get: function(obj) {
                    return obj.locateNodes;
                }
            },
            metadata: _metadata
        }, null, _instanceExtraInitializers);
        if (_metadata) Object.defineProperty(_BrowsingContext, Symbol.metadata, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _metadata
        });
    }(), _BrowsingContext;
}();
 //# sourceMappingURL=BrowsingContext.js.map


}),

}]);