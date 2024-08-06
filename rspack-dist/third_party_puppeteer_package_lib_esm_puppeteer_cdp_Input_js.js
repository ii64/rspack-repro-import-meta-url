"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Input_js"], {
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
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpKeyboard: function() { return CdpKeyboard; },
  CdpMouse: function() { return CdpMouse; },
  CdpTouchscreen: function() { return CdpTouchscreen; }
});
/* harmony import */var _api_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js");
/* harmony import */var _common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/USKeyboardLayout.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/USKeyboardLayout.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/**
 * @license
 * Copyright 2017 Google Inc.
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



var _client = /*#__PURE__*/ new WeakMap(), _pressedKeys = /*#__PURE__*/ new WeakMap(), _modifierBit = /*#__PURE__*/ new WeakSet(), _keyDescriptionForString = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var CdpKeyboard = /*#__PURE__*/ function(Keyboard) {
    "use strict";
    _inherits(CdpKeyboard, Keyboard);
    var _super = _create_super(CdpKeyboard);
    function CdpKeyboard(client) {
        _class_call_check(this, CdpKeyboard);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _modifierBit);
        _class_private_method_init(_assert_this_initialized(_this), _keyDescriptionForString);
        _class_private_field_init(_assert_this_initialized(_this), _client, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _pressedKeys, {
            writable: true,
            value: new Set()
        });
        _define_property(_assert_this_initialized(_this), "_modifiers", 0);
        _class_private_field_set(_assert_this_initialized(_this), _client, client);
        return _this;
    }
    _create_class(CdpKeyboard, [
        {
            key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_set(this, _client, client);
            }
        },
        {
            key: "down",
            value: function down(key) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                    text: undefined,
                    commands: []
                };
                var _this = this;
                return _async_to_generator(function() {
                    var description, autoRepeat, text;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                description = _class_private_method_get(_this, _keyDescriptionForString, keyDescriptionForString).call(_this, key);
                                autoRepeat = _class_private_field_get(_this, _pressedKeys).has(description.code);
                                _class_private_field_get(_this, _pressedKeys).add(description.code);
                                _this._modifiers |= _class_private_method_get(_this, _modifierBit, modifierBit).call(_this, description.key);
                                text = options.text === undefined ? description.text : options.text;
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Input.dispatchKeyEvent', {
                                        type: text ? 'keyDown' : 'rawKeyDown',
                                        modifiers: _this._modifiers,
                                        windowsVirtualKeyCode: description.keyCode,
                                        code: description.code,
                                        key: description.key,
                                        text: text,
                                        unmodifiedText: text,
                                        autoRepeat: autoRepeat,
                                        location: description.location,
                                        isKeypad: description.location === 3,
                                        commands: options.commands
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
            key: "up",
            value: function up(key) {
                var _this = this;
                return _async_to_generator(function() {
                    var description;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                description = _class_private_method_get(_this, _keyDescriptionForString, keyDescriptionForString).call(_this, key);
                                _this._modifiers &= ~_class_private_method_get(_this, _modifierBit, modifierBit).call(_this, description.key);
                                _class_private_field_get(_this, _pressedKeys).delete(description.code);
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Input.dispatchKeyEvent', {
                                        type: 'keyUp',
                                        modifiers: _this._modifiers,
                                        key: description.key,
                                        windowsVirtualKeyCode: description.keyCode,
                                        code: description.code,
                                        location: description.location
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
            key: "sendCharacter",
            value: function sendCharacter(char) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client).send('Input.insertText', {
                                        text: char
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
            key: "charIsKey",
            value: function charIsKey(char) {
                return !!_common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__._keyDefinitions[char];
            }
        },
        {
            key: "type",
            value: function type(text) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var delay, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, char, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                delay = options.delay || undefined;
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    10,
                                    11,
                                    12
                                ]);
                                _iterator = text[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    9
                                ];
                                char = _step.value;
                                if (!_this.charIsKey(char)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _this.press(char, {
                                        delay: delay
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    3,
                                    8
                                ];
                            case 4:
                                if (!delay) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    new Promise(function(f) {
                                        return setTimeout(f, delay);
                                    })
                                ];
                            case 5:
                                _state.sent();
                                _state.label = 6;
                            case 6:
                                return [
                                    4,
                                    _this.sendCharacter(char)
                                ];
                            case 7:
                                _state.sent();
                                _state.label = 8;
                            case 8:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 9:
                                return [
                                    3,
                                    12
                                ];
                            case 10:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    12
                                ];
                            case 11:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 12:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "press",
            value: function press(key) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_delay, delay;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_delay = options.delay, delay = _options_delay === void 0 ? null : _options_delay;
                                return [
                                    4,
                                    _this.down(key, options)
                                ];
                            case 1:
                                _state.sent();
                                if (!delay) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    new Promise(function(f) {
                                        return setTimeout(f, options.delay);
                                    })
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    4,
                                    _this.up(key)
                                ];
                            case 4:
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
    return CdpKeyboard;
}(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard);
function modifierBit(key) {
    if (key === 'Alt') {
        return 1;
    }
    if (key === 'Control') {
        return 2;
    }
    if (key === 'Meta') {
        return 4;
    }
    if (key === 'Shift') {
        return 8;
    }
    return 0;
}
function keyDescriptionForString(keyString) {
    var shift = this._modifiers & 8;
    var description = {
        key: '',
        keyCode: 0,
        code: '',
        text: '',
        location: 0
    };
    var definition = _common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__._keyDefinitions[keyString];
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(definition, 'Unknown key: "'.concat(keyString, '"'));
    if (definition.key) {
        description.key = definition.key;
    }
    if (shift && definition.shiftKey) {
        description.key = definition.shiftKey;
    }
    if (definition.keyCode) {
        description.keyCode = definition.keyCode;
    }
    if (shift && definition.shiftKeyCode) {
        description.keyCode = definition.shiftKeyCode;
    }
    if (definition.code) {
        description.code = definition.code;
    }
    if (definition.location) {
        description.location = definition.location;
    }
    if (description.key.length === 1) {
        description.text = description.key;
    }
    if (definition.text) {
        description.text = definition.text;
    }
    if (shift && definition.shiftText) {
        description.text = definition.shiftText;
    }
    // if any modifiers besides shift are pressed, no text should be sent
    if (this._modifiers & ~8) {
        description.text = '';
    }
    return description;
}
var getFlag = function(button) {
    switch(button){
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left:
            return 1 /* MouseButtonFlag.Left */ ;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right:
            return 2 /* MouseButtonFlag.Right */ ;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle:
            return 4 /* MouseButtonFlag.Middle */ ;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back:
            return 8 /* MouseButtonFlag.Back */ ;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward:
            return 16 /* MouseButtonFlag.Forward */ ;
    }
};
/**
 * This should match
 * https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:content/browser/renderer_host/input/web_input_event_builders_mac.mm;drc=a61b95c63b0b75c1cfe872d9c8cdf927c226046e;bpv=1;bpt=1;l=221.
 */ var getButtonFromPressedButtons = function(buttons) {
    if (buttons & 1 /* MouseButtonFlag.Left */ ) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left;
    } else if (buttons & 2 /* MouseButtonFlag.Right */ ) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right;
    } else if (buttons & 4 /* MouseButtonFlag.Middle */ ) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle;
    } else if (buttons & 8 /* MouseButtonFlag.Back */ ) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back;
    } else if (buttons & 16 /* MouseButtonFlag.Forward */ ) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward;
    }
    return 'none';
};
var _client1 = /*#__PURE__*/ new WeakMap(), _keyboard = /*#__PURE__*/ new WeakMap(), __state = /*#__PURE__*/ new WeakMap(), _state = /*#__PURE__*/ new WeakMap(), // Transactions can run in parallel, so we store each of thme in this array.
_transactions = /*#__PURE__*/ new WeakMap(), _createTransaction = /*#__PURE__*/ new WeakSet(), _withTransaction = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var CdpMouse = /*#__PURE__*/ function(Mouse) {
    "use strict";
    _inherits(CdpMouse, Mouse);
    var _super = _create_super(CdpMouse);
    function CdpMouse(client, keyboard) {
        _class_call_check(this, CdpMouse);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _state, {
            get: get_state,
            set: void 0
        });
        _class_private_method_init(_assert_this_initialized(_this), _createTransaction);
        /**
     * This is a shortcut for a typical update, commit/rollback lifecycle based on
     * the error of the action.
     */ _class_private_method_init(_assert_this_initialized(_this), _withTransaction);
        _class_private_field_init(_assert_this_initialized(_this), _client1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _keyboard, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), __state, {
            writable: true,
            value: {
                position: {
                    x: 0,
                    y: 0
                },
                buttons: 0 /* MouseButtonFlag.None */ 
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _transactions, {
            writable: true,
            value: []
        });
        _class_private_field_set(_assert_this_initialized(_this), _client1, client);
        _class_private_field_set(_assert_this_initialized(_this), _keyboard, keyboard);
        return _this;
    }
    _create_class(CdpMouse, [
        {
            key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_set(this, _client1, client);
            }
        },
        {
            key: "reset",
            value: function reset() {
                var _this = this;
                return _async_to_generator(function() {
                    var actions, _i, _iter, _iter__i, flag, button;
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                actions = [];
                                for(_i = 0, _iter = [
                                    [
                                        1 /* MouseButtonFlag.Left */ ,
                                        _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left
                                    ],
                                    [
                                        4 /* MouseButtonFlag.Middle */ ,
                                        _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle
                                    ],
                                    [
                                        2 /* MouseButtonFlag.Right */ ,
                                        _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right
                                    ],
                                    [
                                        16 /* MouseButtonFlag.Forward */ ,
                                        _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward
                                    ],
                                    [
                                        8 /* MouseButtonFlag.Back */ ,
                                        _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back
                                    ]
                                ]; _i < _iter.length; _i++){
                                    _iter__i = _sliced_to_array(_iter[_i], 2), flag = _iter__i[0], button = _iter__i[1];
                                    if (_class_private_field_get(_this, _state).buttons & flag) {
                                        actions.push(_this.up({
                                            button: button
                                        }));
                                    }
                                }
                                if (_class_private_field_get(_this, _state).position.x !== 0 || _class_private_field_get(_this, _state).position.y !== 0) {
                                    actions.push(_this.move(0, 0));
                                }
                                return [
                                    4,
                                    Promise.all(actions)
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "move",
            value: function move(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _loop, _options_steps, steps, from, to, i;
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                _loop = function(i) {
                                    return _ts_generator(this, function(_state1) {
                                        switch(_state1.label){
                                            case 0:
                                                return [
                                                    4,
                                                    _class_private_method_get(_this, _withTransaction, withTransaction).call(_this, function(updateState) {
                                                        updateState({
                                                            position: {
                                                                x: from.x + (to.x - from.x) * (i / steps),
                                                                y: from.y + (to.y - from.y) * (i / steps)
                                                            }
                                                        });
                                                        var _$_class_private_field_get = _class_private_field_get(_this, _state), buttons = _$_class_private_field_get.buttons, position = _$_class_private_field_get.position;
                                                        return _class_private_field_get(_this, _client1).send('Input.dispatchMouseEvent', _object_spread({
                                                            type: 'mouseMoved',
                                                            modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                                            buttons: buttons,
                                                            button: getButtonFromPressedButtons(buttons)
                                                        }, position));
                                                    })
                                                ];
                                            case 1:
                                                _state1.sent();
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                };
                                _options_steps = options.steps, steps = _options_steps === void 0 ? 1 : _options_steps;
                                from = _class_private_field_get(_this, _state).position;
                                to = {
                                    x: x,
                                    y: y
                                };
                                i = 1;
                                _state1.label = 1;
                            case 1:
                                if (!(i <= steps)) return [
                                    3,
                                    4
                                ];
                                return [
                                    5,
                                    _ts_values(_loop(i))
                                ];
                            case 2:
                                _state1.sent();
                                _state1.label = 3;
                            case 3:
                                i++;
                                return [
                                    3,
                                    1
                                ];
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "down",
            value: function down() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_button, button, _options_clickCount, clickCount, flag;
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                _options_button = options.button, button = _options_button === void 0 ? _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left : _options_button, _options_clickCount = options.clickCount, clickCount = _options_clickCount === void 0 ? 1 : _options_clickCount;
                                flag = getFlag(button);
                                if (!flag) {
                                    throw new Error("Unsupported mouse button: ".concat(button));
                                }
                                if (_class_private_field_get(_this, _state).buttons & flag) {
                                    throw new Error("'".concat(button, "' is already pressed."));
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _withTransaction, withTransaction).call(_this, function(updateState) {
                                        updateState({
                                            buttons: _class_private_field_get(_this, _state).buttons | flag
                                        });
                                        var _$_class_private_field_get = _class_private_field_get(_this, _state), buttons = _$_class_private_field_get.buttons, position = _$_class_private_field_get.position;
                                        return _class_private_field_get(_this, _client1).send('Input.dispatchMouseEvent', _object_spread({
                                            type: 'mousePressed',
                                            modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                            clickCount: clickCount,
                                            buttons: buttons,
                                            button: button
                                        }, position));
                                    })
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "up",
            value: function up() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_button, button, _options_clickCount, clickCount, flag;
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                _options_button = options.button, button = _options_button === void 0 ? _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left : _options_button, _options_clickCount = options.clickCount, clickCount = _options_clickCount === void 0 ? 1 : _options_clickCount;
                                flag = getFlag(button);
                                if (!flag) {
                                    throw new Error("Unsupported mouse button: ".concat(button));
                                }
                                if (!(_class_private_field_get(_this, _state).buttons & flag)) {
                                    throw new Error("'".concat(button, "' is not pressed."));
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _withTransaction, withTransaction).call(_this, function(updateState) {
                                        updateState({
                                            buttons: _class_private_field_get(_this, _state).buttons & ~flag
                                        });
                                        var _$_class_private_field_get = _class_private_field_get(_this, _state), buttons = _$_class_private_field_get.buttons, position = _$_class_private_field_get.position;
                                        return _class_private_field_get(_this, _client1).send('Input.dispatchMouseEvent', _object_spread({
                                            type: 'mouseReleased',
                                            modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                            clickCount: clickCount,
                                            buttons: buttons,
                                            button: button
                                        }, position));
                                    })
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "click",
            value: function click(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var delay, _options_count, count, _options_clickCount, clickCount, actions, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                delay = options.delay, _options_count = options.count, count = _options_count === void 0 ? 1 : _options_count, _options_clickCount = options.clickCount, clickCount = _options_clickCount === void 0 ? count : _options_clickCount;
                                if (count < 1) {
                                    throw new Error('Click must occur a positive number of times.');
                                }
                                actions = [
                                    _this.move(x, y)
                                ];
                                if (clickCount === count) {
                                    for(i = 1; i < count; ++i){
                                        actions.push(_this.down(_object_spread_props(_object_spread({}, options), {
                                            clickCount: i
                                        })), _this.up(_object_spread_props(_object_spread({}, options), {
                                            clickCount: i
                                        })));
                                    }
                                }
                                actions.push(_this.down(_object_spread_props(_object_spread({}, options), {
                                    clickCount: clickCount
                                })));
                                if (!(typeof delay === 'number')) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    Promise.all(actions)
                                ];
                            case 1:
                                _state.sent();
                                actions.length = 0;
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        setTimeout(resolve, delay);
                                    })
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                actions.push(_this.up(_object_spread_props(_object_spread({}, options), {
                                    clickCount: clickCount
                                })));
                                return [
                                    4,
                                    Promise.all(actions)
                                ];
                            case 4:
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
            key: "wheel",
            value: function wheel() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_deltaX, deltaX, _options_deltaY, deltaY, _$_class_private_field_get, position, buttons;
                    return _ts_generator(this, function(_state1) {
                        switch(_state1.label){
                            case 0:
                                _options_deltaX = options.deltaX, deltaX = _options_deltaX === void 0 ? 0 : _options_deltaX, _options_deltaY = options.deltaY, deltaY = _options_deltaY === void 0 ? 0 : _options_deltaY;
                                _$_class_private_field_get = _class_private_field_get(_this, _state), position = _$_class_private_field_get.position, buttons = _$_class_private_field_get.buttons;
                                return [
                                    4,
                                    _class_private_field_get(_this, _client1).send('Input.dispatchMouseEvent', _object_spread({
                                        type: 'mouseWheel',
                                        pointerType: 'mouse',
                                        modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                        deltaY: deltaY,
                                        deltaX: deltaX,
                                        buttons: buttons
                                    }, position))
                                ];
                            case 1:
                                _state1.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "drag",
            value: function drag(start, target) {
                var _this = this;
                return _async_to_generator(function() {
                    var promise;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promise = new Promise(function(resolve) {
                                    _class_private_field_get(_this, _client1).once('Input.dragIntercepted', function(event) {
                                        return resolve(event.data);
                                    });
                                });
                                return [
                                    4,
                                    _this.move(start.x, start.y)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _this.down()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this.move(target.x, target.y)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    4,
                                    promise
                                ];
                            case 4:
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
            key: "dragEnter",
            value: function dragEnter(target, data) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client1).send('Input.dispatchDragEvent', {
                                        type: 'dragEnter',
                                        x: target.x,
                                        y: target.y,
                                        modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                        data: data
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
            key: "dragOver",
            value: function dragOver(target, data) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client1).send('Input.dispatchDragEvent', {
                                        type: 'dragOver',
                                        x: target.x,
                                        y: target.y,
                                        modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                        data: data
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
            key: "drop",
            value: function drop(target, data) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client1).send('Input.dispatchDragEvent', {
                                        type: 'drop',
                                        x: target.x,
                                        y: target.y,
                                        modifiers: _class_private_field_get(_this, _keyboard)._modifiers,
                                        data: data
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
            key: "dragAndDrop",
            value: function dragAndDrop(start, target) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_delay, delay, data;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_delay = options.delay, delay = _options_delay === void 0 ? null : _options_delay;
                                return [
                                    4,
                                    _this.drag(start, target)
                                ];
                            case 1:
                                data = _state.sent();
                                return [
                                    4,
                                    _this.dragEnter(target, data)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this.dragOver(target, data)
                                ];
                            case 3:
                                _state.sent();
                                if (!delay) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    new Promise(function(resolve) {
                                        return setTimeout(resolve, delay);
                                    })
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                return [
                                    4,
                                    _this.drop(target, data)
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    4,
                                    _this.up()
                                ];
                            case 7:
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
    return CdpMouse;
}(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Mouse);
function get_state() {
    var _Object;
    return (_Object = Object).assign.apply(_Object, [
        _object_spread({}, _class_private_field_get(this, __state))
    ].concat(_to_consumable_array(_class_private_field_get(this, _transactions))));
}
function createTransaction() {
    var _this = this;
    var transaction = {};
    _class_private_field_get(this, _transactions).push(transaction);
    var popTransaction = function() {
        _class_private_field_get(_this, _transactions).splice(_class_private_field_get(_this, _transactions).indexOf(transaction), 1);
    };
    return {
        update: function(updates) {
            Object.assign(transaction, updates);
        },
        commit: function() {
            _class_private_field_set(_this, __state, _object_spread({}, _class_private_field_get(_this, __state), transaction));
            popTransaction();
        },
        rollback: popTransaction
    };
}
function withTransaction(action) {
    return _withTransaction1.apply(this, arguments);
}
function _withTransaction1() {
    _withTransaction1 = _async_to_generator(function(action) {
        var _class_private_method_get_call, update, commit, rollback, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _class_private_method_get_call = _class_private_method_get(this, _createTransaction, createTransaction).call(this), update = _class_private_method_get_call.update, commit = _class_private_method_get_call.commit, rollback = _class_private_method_get_call.rollback;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        action(update)
                    ];
                case 2:
                    _state.sent();
                    commit();
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    rollback();
                    throw error;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _withTransaction1.apply(this, arguments);
}
var _client2 = /*#__PURE__*/ new WeakMap(), _keyboard1 = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var CdpTouchscreen = /*#__PURE__*/ function(Touchscreen) {
    "use strict";
    _inherits(CdpTouchscreen, Touchscreen);
    var _super = _create_super(CdpTouchscreen);
    function CdpTouchscreen(client, keyboard) {
        _class_call_check(this, CdpTouchscreen);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _client2, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _keyboard1, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _client2, client);
        _class_private_field_set(_assert_this_initialized(_this), _keyboard1, keyboard);
        return _this;
    }
    _create_class(CdpTouchscreen, [
        {
            key: "updateClient",
            value: function updateClient(client) {
                _class_private_field_set(this, _client2, client);
            }
        },
        {
            key: "touchStart",
            value: function touchStart(x, y) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client2).send('Input.dispatchTouchEvent', {
                                        type: 'touchStart',
                                        touchPoints: [
                                            {
                                                x: Math.round(x),
                                                y: Math.round(y),
                                                radiusX: 0.5,
                                                radiusY: 0.5,
                                                force: 0.5
                                            }
                                        ],
                                        modifiers: _class_private_field_get(_this, _keyboard1)._modifiers
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
            key: "touchMove",
            value: function touchMove(x, y) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client2).send('Input.dispatchTouchEvent', {
                                        type: 'touchMove',
                                        touchPoints: [
                                            {
                                                x: Math.round(x),
                                                y: Math.round(y),
                                                radiusX: 0.5,
                                                radiusY: 0.5,
                                                force: 0.5
                                            }
                                        ],
                                        modifiers: _class_private_field_get(_this, _keyboard1)._modifiers
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
            key: "touchEnd",
            value: function touchEnd() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _client2).send('Input.dispatchTouchEvent', {
                                        type: 'touchEnd',
                                        touchPoints: [],
                                        modifiers: _class_private_field_get(_this, _keyboard1)._modifiers
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
        }
    ]);
    return CdpTouchscreen;
} //# sourceMappingURL=Input.js.map
(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Touchscreen);


}),

}]);