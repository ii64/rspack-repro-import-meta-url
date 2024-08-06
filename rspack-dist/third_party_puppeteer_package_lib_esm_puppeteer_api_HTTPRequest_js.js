"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_HTTPRequest_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: function() { return DEFAULT_INTERCEPT_RESOLUTION_PRIORITY; },
  HTTPRequest: function() { return HTTPRequest; },
  InterceptResolutionAction: function() { return InterceptResolutionAction; },
  STATUS_TEXTS: function() { return STATUS_TEXTS; },
  handleError: function() { return handleError; },
  headersArray: function() { return headersArray; }
});
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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


/**
 * The default cooperative request interception resolution priority
 *
 * @public
 */ var DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = 0;
/**
 * Represents an HTTP request sent by a page.
 * @remarks
 *
 * Whenever the page sends a request, such as for a network resource, the
 * following events are emitted by Puppeteer's `page`:
 *
 * - `request`: emitted when the request is issued by the page.
 * - `requestfinished` - emitted when the response body is downloaded and the
 *   request is complete.
 *
 * If request fails at some point, then instead of `requestfinished` event the
 * `requestfailed` event is emitted.
 *
 * All of these events provide an instance of `HTTPRequest` representing the
 * request that occurred:
 *
 * ```
 * page.on('request', request => ...)
 * ```
 *
 * NOTE: HTTP Error responses, such as 404 or 503, are still successful
 * responses from HTTP standpoint, so request will complete with
 * `requestfinished` event.
 *
 * If request gets a 'redirect' response, the request is successfully finished
 * with the `requestfinished` event, and a new request is issued to a
 * redirected url.
 *
 * @public
 */ var HTTPRequest = /*#__PURE__*/ function() {
    "use strict";
    function HTTPRequest() {
        _class_call_check(this, HTTPRequest);
        /**
     * @internal
     */ _define_property(this, "_interceptionId", void 0);
        /**
     * @internal
     */ _define_property(this, "_failureText", null);
        /**
     * @internal
     */ _define_property(this, "_response", null);
        /**
     * @internal
     */ _define_property(this, "_fromMemoryCache", false);
        /**
     * @internal
     */ _define_property(this, "_redirectChain", []);
        /**
     * @internal
     */ _define_property(this, "interception", {
            enabled: false,
            handled: false,
            handlers: [],
            resolutionState: {
                action: InterceptResolutionAction.None
            },
            requestOverrides: {},
            response: null,
            abortReason: null
        });
    }
    _create_class(HTTPRequest, [
        {
            /**
     * The `ContinueRequestOverrides` that will be used
     * if the interception is allowed to continue (ie, `abort()` and
     * `respond()` aren't called).
     */ key: "continueRequestOverrides",
            value: function continueRequestOverrides() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(this.interception.enabled, 'Request Interception is not enabled!');
                return this.interception.requestOverrides;
            }
        },
        {
            /**
     * The `ResponseForRequest` that gets used if the
     * interception is allowed to respond (ie, `abort()` is not called).
     */ key: "responseForRequest",
            value: function responseForRequest() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(this.interception.enabled, 'Request Interception is not enabled!');
                return this.interception.response;
            }
        },
        {
            /**
     * The most recent reason for aborting the request
     */ key: "abortErrorReason",
            value: function abortErrorReason() {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(this.interception.enabled, 'Request Interception is not enabled!');
                return this.interception.abortReason;
            }
        },
        {
            /**
     * An InterceptResolutionState object describing the current resolution
     * action and priority.
     *
     * InterceptResolutionState contains:
     * action: InterceptResolutionAction
     * priority?: number
     *
     * InterceptResolutionAction is one of: `abort`, `respond`, `continue`,
     * `disabled`, `none`, or `already-handled`.
     */ key: "interceptResolutionState",
            value: function interceptResolutionState() {
                if (!this.interception.enabled) {
                    return {
                        action: InterceptResolutionAction.Disabled
                    };
                }
                if (this.interception.handled) {
                    return {
                        action: InterceptResolutionAction.AlreadyHandled
                    };
                }
                return _object_spread({}, this.interception.resolutionState);
            }
        },
        {
            /**
     * Is `true` if the intercept resolution has already been handled,
     * `false` otherwise.
     */ key: "isInterceptResolutionHandled",
            value: function isInterceptResolutionHandled() {
                return this.interception.handled;
            }
        },
        {
            /**
     * Adds an async request handler to the processing queue.
     * Deferred handlers are not guaranteed to execute in any particular order,
     * but they are guaranteed to resolve before the request interception
     * is finalized.
     */ key: "enqueueInterceptAction",
            value: function enqueueInterceptAction(pendingHandler) {
                this.interception.handlers.push(pendingHandler);
            }
        },
        {
            key: "finalizeInterceptions",
            value: /**
     * Awaits pending interception handlers and then decides how to fulfill
     * the request interception.
     */ function finalizeInterceptions() {
                var _this = this;
                return _async_to_generator(function() {
                    var action;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.interception.handlers.reduce(function(promiseChain, interceptAction) {
                                        return promiseChain.then(interceptAction);
                                    }, Promise.resolve())
                                ];
                            case 1:
                                _state.sent();
                                _this.interception.handlers = []; // TODO: verify this is correct top let gc run
                                action = _this.interceptResolutionState().action;
                                switch(action){
                                    case 'abort':
                                        return [
                                            3,
                                            2
                                        ];
                                    case 'respond':
                                        return [
                                            3,
                                            4
                                        ];
                                    case 'continue':
                                        return [
                                            3,
                                            6
                                        ];
                                }
                                return [
                                    3,
                                    8
                                ];
                            case 2:
                                return [
                                    4,
                                    _this._abort(_this.interception.abortReason)
                                ];
                            case 3:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 4:
                                if (_this.interception.response === null) {
                                    throw new Error('Response is missing for the interception');
                                }
                                return [
                                    4,
                                    _this._respond(_this.interception.response)
                                ];
                            case 5:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 6:
                                return [
                                    4,
                                    _this._continue(_this.interception.requestOverrides)
                                ];
                            case 7:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "continue",
            value: /**
     * Continues request with optional request overrides.
     *
     * @example
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   // Override headers
     *   const headers = Object.assign({}, request.headers(), {
     *     foo: 'bar', // set "foo" header
     *     origin: undefined, // remove "origin" header
     *   });
     *   request.continue({headers});
     * });
     * ```
     *
     * @param overrides - optional overrides to apply to the request.
     * @param priority - If provided, intercept is resolved using cooperative
     * handling rules. Otherwise, intercept is resolved immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */ function _continue() {
                var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, priority = arguments.length > 1 ? arguments[1] : void 0;
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Request interception is not supported for data: urls.
                                if (_this.url().startsWith('data:')) {
                                    return [
                                        2
                                    ];
                                }
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(_this.interception.enabled, 'Request Interception is not enabled!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!_this.interception.handled, 'Request is already handled!');
                                if (!(priority === undefined)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._continue(overrides)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                _this.interception.requestOverrides = overrides;
                                if (_this.interception.resolutionState.priority === undefined || priority > _this.interception.resolutionState.priority) {
                                    _this.interception.resolutionState = {
                                        action: InterceptResolutionAction.Continue,
                                        priority: priority
                                    };
                                    return [
                                        2
                                    ];
                                }
                                if (priority === _this.interception.resolutionState.priority) {
                                    if (_this.interception.resolutionState.action === 'abort' || _this.interception.resolutionState.action === 'respond') {
                                        return [
                                            2
                                        ];
                                    }
                                    _this.interception.resolutionState.action = InterceptResolutionAction.Continue;
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "respond",
            value: /**
     * Fulfills a request with the given response.
     *
     * @example
     * An example of fulfilling all requests with 404 responses:
     *
     * ```ts
     * await page.setRequestInterception(true);
     * page.on('request', request => {
     *   request.respond({
     *     status: 404,
     *     contentType: 'text/plain',
     *     body: 'Not Found!',
     *   });
     * });
     * ```
     *
     * NOTE: Mocking responses for dataURL requests is not supported.
     * Calling `request.respond` for a dataURL request is a noop.
     *
     * @param response - the response to fulfill the request with.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request
     * interception should be enabled with {@link Page.setRequestInterception}.
     *
     * Exception is immediately thrown if the request interception is not enabled.
     */ function respond(response, priority) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Mocking responses for dataURL requests is not currently supported.
                                if (_this.url().startsWith('data:')) {
                                    return [
                                        2
                                    ];
                                }
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(_this.interception.enabled, 'Request Interception is not enabled!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!_this.interception.handled, 'Request is already handled!');
                                if (!(priority === undefined)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._respond(response)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                _this.interception.response = response;
                                if (_this.interception.resolutionState.priority === undefined || priority > _this.interception.resolutionState.priority) {
                                    _this.interception.resolutionState = {
                                        action: InterceptResolutionAction.Respond,
                                        priority: priority
                                    };
                                    return [
                                        2
                                    ];
                                }
                                if (priority === _this.interception.resolutionState.priority) {
                                    if (_this.interception.resolutionState.action === 'abort') {
                                        return [
                                            2
                                        ];
                                    }
                                    _this.interception.resolutionState.action = InterceptResolutionAction.Respond;
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "abort",
            value: /**
     * Aborts a request.
     *
     * @param errorCode - optional error code to provide.
     * @param priority - If provided, intercept is resolved using
     * cooperative handling rules. Otherwise, intercept is resolved
     * immediately.
     *
     * @remarks
     *
     * To use this, request interception should be enabled with
     * {@link Page.setRequestInterception}. If it is not enabled, this method will
     * throw an exception immediately.
     */ function abort() {
                var errorCode = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'failed', priority = arguments.length > 1 ? arguments[1] : void 0;
                var _this = this;
                return _async_to_generator(function() {
                    var errorReason;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Request interception is not supported for data: urls.
                                if (_this.url().startsWith('data:')) {
                                    return [
                                        2
                                    ];
                                }
                                errorReason = errorReasons[errorCode];
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(errorReason, 'Unknown error code: ' + errorCode);
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(_this.interception.enabled, 'Request Interception is not enabled!');
                                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert)(!_this.interception.handled, 'Request is already handled!');
                                if (!(priority === undefined)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this._abort(errorReason)
                                ];
                            case 1:
                                return [
                                    2,
                                    _state.sent()
                                ];
                            case 2:
                                _this.interception.abortReason = errorReason;
                                if (_this.interception.resolutionState.priority === undefined || priority >= _this.interception.resolutionState.priority) {
                                    _this.interception.resolutionState = {
                                        action: InterceptResolutionAction.Abort,
                                        priority: priority
                                    };
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "getResponse",
            value: /**
     * @internal
     */ function getResponse(body) {
                // Needed to get the correct byteLength
                var byteBody = (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.isString)(body) ? new TextEncoder().encode(body) : body;
                var bytes = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = byteBody[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var byte = _step.value;
                        bytes.push(String.fromCharCode(byte));
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
                return {
                    contentLength: byteBody.byteLength,
                    base64: btoa(bytes.join(''))
                };
            }
        }
    ]);
    return HTTPRequest;
}();
/**
 * @public
 */ var InterceptResolutionAction;
(function(InterceptResolutionAction) {
    InterceptResolutionAction["Abort"] = "abort";
    InterceptResolutionAction["Respond"] = "respond";
    InterceptResolutionAction["Continue"] = "continue";
    InterceptResolutionAction["Disabled"] = "disabled";
    InterceptResolutionAction["None"] = "none";
    InterceptResolutionAction["AlreadyHandled"] = "already-handled";
})(InterceptResolutionAction || (InterceptResolutionAction = {}));
/**
 * @internal
 */ function headersArray(headers) {
    var _loop = function(name) {
        var value = headers[name];
        if (!Object.is(value, undefined)) {
            var _result;
            var values = Array.isArray(value) ? value : [
                value
            ];
            (_result = result).push.apply(_result, _to_consumable_array(values.map(function(value) {
                return {
                    name: name,
                    value: value + ''
                };
            })));
        }
    };
    var result = [];
    for(var name in headers)_loop(name);
    return result;
}
/**
 * @internal
 *
 * @remarks
 * List taken from {@link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml}
 * with extra 306 and 418 codes.
 */ var STATUS_TEXTS = {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '306': 'Switch Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': "I'm a teapot",
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Too Early',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
};
var errorReasons = {
    aborted: 'Aborted',
    accessdenied: 'AccessDenied',
    addressunreachable: 'AddressUnreachable',
    blockedbyclient: 'BlockedByClient',
    blockedbyresponse: 'BlockedByResponse',
    connectionaborted: 'ConnectionAborted',
    connectionclosed: 'ConnectionClosed',
    connectionfailed: 'ConnectionFailed',
    connectionrefused: 'ConnectionRefused',
    connectionreset: 'ConnectionReset',
    internetdisconnected: 'InternetDisconnected',
    namenotresolved: 'NameNotResolved',
    timedout: 'TimedOut',
    failed: 'Failed'
};
/**
 * @internal
 */ function handleError(error) {
    // Firefox throws an invalid argument error with a message starting with
    // 'Expected "header" [...]'.
    if (error.originalMessage.includes('Invalid header') || error.originalMessage.includes('Expected "header"') || // WebDriver BiDi error for invalid values, for example, headers.
    error.originalMessage.includes('invalid argument')) {
        throw error;
    }
    // In certain cases, protocol will return error if the request was
    // already canceled or the page was closed. We should tolerate these
    // errors.
    (0,_common_util_js__WEBPACK_IMPORTED_MODULE_0__.debugError)(error);
} //# sourceMappingURL=HTTPRequest.js.map


}),

}]);