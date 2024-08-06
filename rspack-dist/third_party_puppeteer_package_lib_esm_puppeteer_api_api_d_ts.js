"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_api_api_d_ts"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CDPSession: function() { return CDPSession; },
  CDPSessionEvent: function() { return CDPSessionEvent; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
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

/**
 * Events that the CDPSession class emits.
 *
 * @public
 */ // eslint-disable-next-line @typescript-eslint/no-namespace
var CDPSessionEvent;
(function(CDPSessionEvent) {
    /** @internal */ CDPSessionEvent.Disconnected = Symbol('CDPSession.Disconnected');
    /** @internal */ CDPSessionEvent.Swapped = Symbol('CDPSession.Swapped');
    /**
     * Emitted when the session is ready to be configured during the auto-attach
     * process. Right after the event is handled, the session will be resumed.
     *
     * @internal
     */ CDPSessionEvent.Ready = Symbol('CDPSession.Ready');
    CDPSessionEvent.SessionAttached = 'sessionattached';
    CDPSessionEvent.SessionDetached = 'sessiondetached';
})(CDPSessionEvent || (CDPSessionEvent = {}));
/**
 * The `CDPSession` instances are used to talk raw Chrome Devtools Protocol.
 *
 * @remarks
 *
 * Protocol methods can be called with {@link CDPSession.send} method and protocol
 * events can be subscribed to with `CDPSession.on` method.
 *
 * Useful links: {@link https://chromedevtools.github.io/devtools-protocol/ | DevTools Protocol Viewer}
 * and {@link https://github.com/aslushnikov/getting-started-with-cdp/blob/HEAD/README.md | Getting Started with DevTools Protocol}.
 *
 * @example
 *
 * ```ts
 * const client = await page.createCDPSession();
 * await client.send('Animation.enable');
 * client.on('Animation.animationCreated', () =>
 *   console.log('Animation created!')
 * );
 * const response = await client.send('Animation.getPlaybackRate');
 * console.log('playback rate is ' + response.playbackRate);
 * await client.send('Animation.setPlaybackRate', {
 *   playbackRate: response.playbackRate / 2,
 * });
 * ```
 *
 * @public
 */ var CDPSession = /*#__PURE__*/ function(EventEmitter) {
    "use strict";
    _inherits(CDPSession, EventEmitter);
    var _super = _create_super(CDPSession);
    function CDPSession() {
        _class_call_check(this, CDPSession);
        return _super.call(this);
    }
    _create_class(CDPSession, [
        {
            /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */ key: "parentSession",
            value: function parentSession() {
                return undefined;
            }
        }
    ]);
    return CDPSession;
} //# sourceMappingURL=CDPSession.js.map
(_common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Environment.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */  //# sourceMappingURL=Environment.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HTTPResponse: function() { return HTTPResponse; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The HTTPResponse class represents responses which are received by the
 * {@link Page} class.
 *
 * @public
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var HTTPResponse = /*#__PURE__*/ function() {
    "use strict";
    function HTTPResponse() {
        _class_call_check(this, HTTPResponse);
    }
    _create_class(HTTPResponse, [
        {
            /**
     * True if the response was successful (status in the range 200-299).
     */ key: "ok",
            value: function ok() {
                // TODO: document === 0 case?
                var status = this.status();
                return status === 0 || status >= 200 && status <= 299;
            }
        },
        {
            key: "text",
            value: /**
     * Promise which resolves to a text (utf8) representation of response body.
     */ function text() {
                var _this = this;
                return _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.buffer()
                                ];
                            case 1:
                                content = _state.sent();
                                return [
                                    2,
                                    content.toString('utf8')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "json",
            value: /**
     * Promise which resolves to a JSON representation of response body.
     *
     * @remarks
     *
     * This method will throw if the response body is not parsable via
     * `JSON.parse`.
     */ function json() {
                var _this = this;
                return _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.text()
                                ];
                            case 1:
                                content = _state.sent();
                                return [
                                    2,
                                    JSON.parse(content)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return HTTPResponse;
} //# sourceMappingURL=HTTPResponse.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Keyboard: function() { return Keyboard; },
  Mouse: function() { return Mouse; },
  MouseButton: function() { return MouseButton; },
  Touchscreen: function() { return Touchscreen; }
});
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is {@link Keyboard."type"},
 * which takes raw characters and generates proper keydown, keypress/input,
 * and keyup events on your page.
 *
 * @remarks
 * For finer control, you can use {@link Keyboard.down},
 * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
 * to manually fire events as if they were generated from a real keyboard.
 *
 * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
 * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
 *
 * @example
 * An example of holding down `Shift` in order to select and delete some text:
 *
 * ```ts
 * await page.keyboard.type('Hello World!');
 * await page.keyboard.press('ArrowLeft');
 *
 * await page.keyboard.down('Shift');
 * for (let i = 0; i < ' World'.length; i++)
 *   await page.keyboard.press('ArrowLeft');
 * await page.keyboard.up('Shift');
 *
 * await page.keyboard.press('Backspace');
 * // Result text will end up saying 'Hello!'
 * ```
 *
 * @example
 * An example of pressing `A`
 *
 * ```ts
 * await page.keyboard.down('Shift');
 * await page.keyboard.press('KeyA');
 * await page.keyboard.up('Shift');
 * ```
 *
 * @public
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var Keyboard = function Keyboard() {
    "use strict";
    _class_call_check(this, Keyboard);
};
/**
 * Enum of valid mouse buttons.
 *
 * @public
 */ var MouseButton = Object.freeze({
    Left: 'left',
    Right: 'right',
    Middle: 'middle',
    Back: 'back',
    Forward: 'forward'
});
/**
 * The Mouse class operates in main-frame CSS pixels
 * relative to the top-left corner of the viewport.
 *
 * @remarks
 * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
 *
 * @example
 *
 * ```ts
 * // Using ‘page.mouse’ to trace a 100x100 square.
 * await page.mouse.move(0, 0);
 * await page.mouse.down();
 * await page.mouse.move(0, 100);
 * await page.mouse.move(100, 100);
 * await page.mouse.move(100, 0);
 * await page.mouse.move(0, 0);
 * await page.mouse.up();
 * ```
 *
 * **Note**: The mouse events trigger synthetic `MouseEvent`s.
 * This means that it does not fully replicate the functionality of what a normal user
 * would be able to do with their mouse.
 *
 * For example, dragging and selecting text is not possible using `page.mouse`.
 * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
 *
 * @example
 * For example, if you want to select all content between nodes:
 *
 * ```ts
 * await page.evaluate(
 *   (from, to) => {
 *     const selection = from.getRootNode().getSelection();
 *     const range = document.createRange();
 *     range.setStartBefore(from);
 *     range.setEndAfter(to);
 *     selection.removeAllRanges();
 *     selection.addRange(range);
 *   },
 *   fromJSHandle,
 *   toJSHandle
 * );
 * ```
 *
 * If you then would want to copy-paste your selection, you can use the clipboard api:
 *
 * ```ts
 * // The clipboard api does not allow you to copy, unless the tab is focused.
 * await page.bringToFront();
 * await page.evaluate(() => {
 *   // Copy the selected content to the clipboard
 *   document.execCommand('copy');
 *   // Obtain the content of the clipboard as a string
 *   return navigator.clipboard.readText();
 * });
 * ```
 *
 * **Note**: If you want access to the clipboard API,
 * you have to give it permission to do so:
 *
 * ```ts
 * await browser
 *   .defaultBrowserContext()
 *   .overridePermissions('<your origin>', [
 *     'clipboard-read',
 *     'clipboard-write',
 *   ]);
 * ```
 *
 * @public
 */ var Mouse = function Mouse() {
    "use strict";
    _class_call_check(this, Mouse);
};
/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */ var Touchscreen = /*#__PURE__*/ function() {
    "use strict";
    function Touchscreen() {
        _class_call_check(this, Touchscreen);
    }
    _create_class(Touchscreen, [
        {
            key: "tap",
            value: /**
     * Dispatches a `touchstart` and `touchend` event.
     * @param x - Horizontal position of the tap.
     * @param y - Vertical position of the tap.
     */ function tap(x, y) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.touchStart(x, y)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.touchEnd()
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
        }
    ]);
    return Touchscreen;
} //# sourceMappingURL=Input.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Target: function() { return Target; },
  TargetType: function() { return TargetType; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @public
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
var TargetType;
(function(TargetType) {
    TargetType["PAGE"] = "page";
    TargetType["BACKGROUND_PAGE"] = "background_page";
    TargetType["SERVICE_WORKER"] = "service_worker";
    TargetType["SHARED_WORKER"] = "shared_worker";
    TargetType["BROWSER"] = "browser";
    TargetType["WEBVIEW"] = "webview";
    TargetType["OTHER"] = "other";
    /**
     * @internal
     */ TargetType["TAB"] = "tab";
})(TargetType || (TargetType = {}));
/**
 * Target represents a
 * {@link https://chromedevtools.github.io/devtools-protocol/tot/Target/ | CDP target}.
 * In CDP a target is something that can be debugged such a frame, a page or a
 * worker.
 * @public
 */ var Target = /*#__PURE__*/ function() {
    "use strict";
    function Target() {
        _class_call_check(this, Target);
    }
    _create_class(Target, [
        {
            key: "worker",
            value: /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */ function worker() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        },
        {
            key: "page",
            value: /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */ function page() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        }
    ]);
    return Target;
} //# sourceMappingURL=Target.js.map
();


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/api/api.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Browser: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser; },
  BrowserContext: function() { return /* reexport safe */ _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowserContext; },
  CDPSession: function() { return /* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSession; },
  CDPSessionEvent: function() { return /* reexport safe */ _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__.CDPSessionEvent; },
  DEFAULT_INTERCEPT_RESOLUTION_PRIORITY: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY; },
  DelegatedLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.DelegatedLocator; },
  Dialog: function() { return /* reexport safe */ _Dialog_js__WEBPACK_IMPORTED_MODULE_3__.Dialog; },
  ElementHandle: function() { return /* reexport safe */ _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__.ElementHandle; },
  FilteredLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FilteredLocator; },
  Frame: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.Frame; },
  FrameEvent: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.FrameEvent; },
  FunctionLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.FunctionLocator; },
  HTTPRequest: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.HTTPRequest; },
  HTTPResponse: function() { return /* reexport safe */ _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__.HTTPResponse; },
  InterceptResolutionAction: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.InterceptResolutionAction; },
  JSHandle: function() { return /* reexport safe */ _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__.JSHandle; },
  Keyboard: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Keyboard; },
  Locator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.Locator; },
  LocatorEvent: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.LocatorEvent; },
  MappedLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.MappedLocator; },
  Mouse: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Mouse; },
  MouseButton: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.MouseButton; },
  NodeLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.NodeLocator; },
  Page: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.Page; },
  RETRY_DELAY: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RETRY_DELAY; },
  RaceLocator: function() { return /* reexport safe */ _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__.RaceLocator; },
  Realm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_12__.Realm; },
  STATUS_TEXTS: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.STATUS_TEXTS; },
  Target: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.Target; },
  TargetType: function() { return /* reexport safe */ _Target_js__WEBPACK_IMPORTED_MODULE_13__.TargetType; },
  Touchscreen: function() { return /* reexport safe */ _Input_js__WEBPACK_IMPORTED_MODULE_9__.Touchscreen; },
  WEB_PERMISSION_TO_PROTOCOL_PERMISSION: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.WEB_PERMISSION_TO_PROTOCOL_PERMISSION; },
  WebWorker: function() { return /* reexport safe */ _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__.WebWorker; },
  handleError: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.handleError; },
  headersArray: function() { return /* reexport safe */ _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__.headersArray; },
  setDefaultScreenshotOptions: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.setDefaultScreenshotOptions; },
  supportedMetrics: function() { return /* reexport safe */ _Page_js__WEBPACK_IMPORTED_MODULE_11__.supportedMetrics; },
  throwIfDetached: function() { return /* reexport safe */ _Frame_js__WEBPACK_IMPORTED_MODULE_6__.throwIfDetached; }
});
/* harmony import */var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Browser.js");
/* harmony import */var _BrowserContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/BrowserContext.js");
/* harmony import */var _CDPSession_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CDPSession.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/CDPSession.js");
/* harmony import */var _Dialog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dialog.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Dialog.js");
/* harmony import */var _ElementHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/ElementHandle.js");
/* harmony import */var _Environment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Environment.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Environment.js");
/* harmony import */var _Frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Frame.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Frame.js");
/* harmony import */var _HTTPRequest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HTTPRequest.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPRequest.js");
/* harmony import */var _HTTPResponse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HTTPResponse.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/HTTPResponse.js");
/* harmony import */var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js");
/* harmony import */var _JSHandle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./JSHandle.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/JSHandle.js");
/* harmony import */var _Page_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Realm.js");
/* harmony import */var _Target_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Target.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Target.js");
/* harmony import */var _WebWorker_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WebWorker.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/WebWorker.js");
/* harmony import */var _locators_locators_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locators/locators.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/locators/locators.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 














 //# sourceMappingURL=api.d.ts.map


}),

}]);