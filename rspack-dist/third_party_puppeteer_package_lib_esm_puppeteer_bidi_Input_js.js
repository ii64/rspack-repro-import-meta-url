"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Input_js"], {
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
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Input.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BidiKeyboard: function() { return BidiKeyboard; },
  BidiMouse: function() { return BidiMouse; },
  BidiTouchscreen: function() { return BidiTouchscreen; }
});
/* harmony import */var _api_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js");
/* harmony import */var _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Errors.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/Errors.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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


var SourceActionsType;
(function(SourceActionsType) {
    SourceActionsType["None"] = "none";
    SourceActionsType["Key"] = "key";
    SourceActionsType["Pointer"] = "pointer";
    SourceActionsType["Wheel"] = "wheel";
})(SourceActionsType || (SourceActionsType = {}));
var ActionType;
(function(ActionType) {
    ActionType["Pause"] = "pause";
    ActionType["KeyDown"] = "keyDown";
    ActionType["KeyUp"] = "keyUp";
    ActionType["PointerUp"] = "pointerUp";
    ActionType["PointerDown"] = "pointerDown";
    ActionType["PointerMove"] = "pointerMove";
    ActionType["Scroll"] = "scroll";
})(ActionType || (ActionType = {}));
var getBidiKeyValue = function(key) {
    switch(key){
        case '\r':
        case '\n':
            key = 'Enter';
            break;
    }
    // Measures the number of code points rather than UTF-16 code units.
    if (_to_consumable_array(key).length === 1) {
        return key;
    }
    switch(key){
        case 'Cancel':
            return '\uE001';
        case 'Help':
            return '\uE002';
        case 'Backspace':
            return '\uE003';
        case 'Tab':
            return '\uE004';
        case 'Clear':
            return '\uE005';
        case 'Enter':
            return '\uE007';
        case 'Shift':
        case 'ShiftLeft':
            return '\uE008';
        case 'Control':
        case 'ControlLeft':
            return '\uE009';
        case 'Alt':
        case 'AltLeft':
            return '\uE00A';
        case 'Pause':
            return '\uE00B';
        case 'Escape':
            return '\uE00C';
        case 'PageUp':
            return '\uE00E';
        case 'PageDown':
            return '\uE00F';
        case 'End':
            return '\uE010';
        case 'Home':
            return '\uE011';
        case 'ArrowLeft':
            return '\uE012';
        case 'ArrowUp':
            return '\uE013';
        case 'ArrowRight':
            return '\uE014';
        case 'ArrowDown':
            return '\uE015';
        case 'Insert':
            return '\uE016';
        case 'Delete':
            return '\uE017';
        case 'NumpadEqual':
            return '\uE019';
        case 'Numpad0':
            return '\uE01A';
        case 'Numpad1':
            return '\uE01B';
        case 'Numpad2':
            return '\uE01C';
        case 'Numpad3':
            return '\uE01D';
        case 'Numpad4':
            return '\uE01E';
        case 'Numpad5':
            return '\uE01F';
        case 'Numpad6':
            return '\uE020';
        case 'Numpad7':
            return '\uE021';
        case 'Numpad8':
            return '\uE022';
        case 'Numpad9':
            return '\uE023';
        case 'NumpadMultiply':
            return '\uE024';
        case 'NumpadAdd':
            return '\uE025';
        case 'NumpadSubtract':
            return '\uE027';
        case 'NumpadDecimal':
            return '\uE028';
        case 'NumpadDivide':
            return '\uE029';
        case 'F1':
            return '\uE031';
        case 'F2':
            return '\uE032';
        case 'F3':
            return '\uE033';
        case 'F4':
            return '\uE034';
        case 'F5':
            return '\uE035';
        case 'F6':
            return '\uE036';
        case 'F7':
            return '\uE037';
        case 'F8':
            return '\uE038';
        case 'F9':
            return '\uE039';
        case 'F10':
            return '\uE03A';
        case 'F11':
            return '\uE03B';
        case 'F12':
            return '\uE03C';
        case 'Meta':
        case 'MetaLeft':
            return '\uE03D';
        case 'ShiftRight':
            return '\uE050';
        case 'ControlRight':
            return '\uE051';
        case 'AltRight':
            return '\uE052';
        case 'MetaRight':
            return '\uE053';
        case 'Digit0':
            return '0';
        case 'Digit1':
            return '1';
        case 'Digit2':
            return '2';
        case 'Digit3':
            return '3';
        case 'Digit4':
            return '4';
        case 'Digit5':
            return '5';
        case 'Digit6':
            return '6';
        case 'Digit7':
            return '7';
        case 'Digit8':
            return '8';
        case 'Digit9':
            return '9';
        case 'KeyA':
            return 'a';
        case 'KeyB':
            return 'b';
        case 'KeyC':
            return 'c';
        case 'KeyD':
            return 'd';
        case 'KeyE':
            return 'e';
        case 'KeyF':
            return 'f';
        case 'KeyG':
            return 'g';
        case 'KeyH':
            return 'h';
        case 'KeyI':
            return 'i';
        case 'KeyJ':
            return 'j';
        case 'KeyK':
            return 'k';
        case 'KeyL':
            return 'l';
        case 'KeyM':
            return 'm';
        case 'KeyN':
            return 'n';
        case 'KeyO':
            return 'o';
        case 'KeyP':
            return 'p';
        case 'KeyQ':
            return 'q';
        case 'KeyR':
            return 'r';
        case 'KeyS':
            return 's';
        case 'KeyT':
            return 't';
        case 'KeyU':
            return 'u';
        case 'KeyV':
            return 'v';
        case 'KeyW':
            return 'w';
        case 'KeyX':
            return 'x';
        case 'KeyY':
            return 'y';
        case 'KeyZ':
            return 'z';
        case 'Semicolon':
            return ';';
        case 'Equal':
            return '=';
        case 'Comma':
            return ',';
        case 'Minus':
            return '-';
        case 'Period':
            return '.';
        case 'Slash':
            return '/';
        case 'Backquote':
            return '`';
        case 'BracketLeft':
            return '[';
        case 'Backslash':
            return '\\';
        case 'BracketRight':
            return ']';
        case 'Quote':
            return '"';
        default:
            throw new Error('Unknown key: "'.concat(key, '"'));
    }
};
var _page = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiKeyboard = /*#__PURE__*/ function(Keyboard) {
    "use strict";
    _inherits(BidiKeyboard, Keyboard);
    var _super = _create_super(BidiKeyboard);
    function BidiKeyboard(page) {
        _class_call_check(this, BidiKeyboard);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _page, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _page, page);
        return _this;
    }
    _create_class(BidiKeyboard, [
        {
            key: "down",
            value: function down(key, _options) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Key,
                                            id: "__puppeteer_keyboard" /* InputId.Keyboard */ ,
                                            actions: [
                                                {
                                                    type: ActionType.KeyDown,
                                                    value: getBidiKeyValue(key)
                                                }
                                            ]
                                        }
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
            key: "up",
            value: function up(key) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Key,
                                            id: "__puppeteer_keyboard" /* InputId.Keyboard */ ,
                                            actions: [
                                                {
                                                    type: ActionType.KeyUp,
                                                    value: getBidiKeyValue(key)
                                                }
                                            ]
                                        }
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
            key: "press",
            value: function press(key) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_delay, delay, actions;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_delay = options.delay, delay = _options_delay === void 0 ? 0 : _options_delay;
                                actions = [
                                    {
                                        type: ActionType.KeyDown,
                                        value: getBidiKeyValue(key)
                                    }
                                ];
                                if (delay > 0) {
                                    actions.push({
                                        type: ActionType.Pause,
                                        duration: delay
                                    });
                                }
                                actions.push({
                                    type: ActionType.KeyUp,
                                    value: getBidiKeyValue(key)
                                });
                                return [
                                    4,
                                    _class_private_field_get(_this, _page).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Key,
                                            id: "__puppeteer_keyboard" /* InputId.Keyboard */ ,
                                            actions: actions
                                        }
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
            key: "type",
            value: function type(text) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_delay, delay, values, actions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, value1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _options_delay = options.delay, delay = _options_delay === void 0 ? 0 : _options_delay;
                                // This spread separates the characters into code points rather than UTF-16
                                // code units.
                                values = _to_consumable_array(text).map(getBidiKeyValue);
                                actions = [];
                                if (delay <= 0) {
                                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(_iterator = values[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            value = _step.value;
                                            actions.push({
                                                type: ActionType.KeyDown,
                                                value: value
                                            }, {
                                                type: ActionType.KeyUp,
                                                value: value
                                            });
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
                                } else {
                                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                    try {
                                        for(_iterator1 = values[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                            value1 = _step1.value;
                                            actions.push({
                                                type: ActionType.KeyDown,
                                                value: value1
                                            }, {
                                                type: ActionType.Pause,
                                                duration: delay
                                            }, {
                                                type: ActionType.KeyUp,
                                                value: value1
                                            });
                                        }
                                    } catch (err) {
                                        _didIteratorError1 = true;
                                        _iteratorError1 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                _iterator1.return();
                                            }
                                        } finally{
                                            if (_didIteratorError1) {
                                                throw _iteratorError1;
                                            }
                                        }
                                    }
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _page).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Key,
                                            id: "__puppeteer_keyboard" /* InputId.Keyboard */ ,
                                            actions: actions
                                        }
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
            key: "sendCharacter",
            value: function sendCharacter(char) {
                var _this = this;
                return _async_to_generator(function() {
                    var frame;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Measures the number of code points rather than UTF-16 code units.
                                if (_to_consumable_array(char).length > 1) {
                                    throw new Error('Cannot send more than 1 character.');
                                }
                                return [
                                    4,
                                    _class_private_field_get(_this, _page).focusedFrame()
                                ];
                            case 1:
                                frame = _state.sent();
                                return [
                                    4,
                                    frame.isolatedRealm().evaluate(function() {
                                        var _ref = _async_to_generator(function(char) {
                                            return _ts_generator(this, function(_state) {
                                                document.execCommand('insertText', false, char);
                                                return [
                                                    2
                                                ];
                                            });
                                        });
                                        return function(char) {
                                            return _ref.apply(this, arguments);
                                        };
                                    }(), char)
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
    return BidiKeyboard;
}(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard);
var getBidiButton = function(button) {
    switch(button){
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left:
            return 0;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle:
            return 1;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right:
            return 2;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back:
            return 3;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward:
            return 4;
    }
};
var _page1 = /*#__PURE__*/ new WeakMap(), _lastMovePoint = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiMouse = /*#__PURE__*/ function(Mouse) {
    "use strict";
    _inherits(BidiMouse, Mouse);
    var _super = _create_super(BidiMouse);
    function BidiMouse(page) {
        _class_call_check(this, BidiMouse);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _page1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastMovePoint, {
            writable: true,
            value: {
                x: 0,
                y: 0
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _page1, page);
        return _this;
    }
    _create_class(BidiMouse, [
        {
            key: "reset",
            value: function reset() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_set(_this, _lastMovePoint, {
                                    x: 0,
                                    y: 0
                                });
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.releaseActions()
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
            key: "move",
            value: function move(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var from, to, actions, _options_steps, steps, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                from = _class_private_field_get(_this, _lastMovePoint);
                                to = {
                                    x: Math.round(x),
                                    y: Math.round(y)
                                };
                                actions = [];
                                steps = (_options_steps = options.steps) !== null && _options_steps !== void 0 ? _options_steps : 0;
                                for(i = 0; i < steps; ++i){
                                    actions.push({
                                        type: ActionType.PointerMove,
                                        x: from.x + (to.x - from.x) * (i / steps),
                                        y: from.y + (to.y - from.y) * (i / steps),
                                        origin: options.origin
                                    });
                                }
                                actions.push(_object_spread_props(_object_spread({
                                    type: ActionType.PointerMove
                                }, to), {
                                    origin: options.origin
                                }));
                                // https://w3c.github.io/webdriver-bidi/#command-input-performActions:~:text=input.PointerMoveAction%20%3D%20%7B%0A%20%20type%3A%20%22pointerMove%22%2C%0A%20%20x%3A%20js%2Dint%2C
                                _class_private_field_set(_this, _lastMovePoint, to);
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_mouse" /* InputId.Mouse */ ,
                                            actions: actions
                                        }
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
            key: "down",
            value: function down() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_button;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_mouse" /* InputId.Mouse */ ,
                                            actions: [
                                                {
                                                    type: ActionType.PointerDown,
                                                    button: getBidiButton((_options_button = options.button) !== null && _options_button !== void 0 ? _options_button : _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left)
                                                }
                                            ]
                                        }
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
            key: "up",
            value: function up() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _options_button;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_mouse" /* InputId.Mouse */ ,
                                            actions: [
                                                {
                                                    type: ActionType.PointerUp,
                                                    button: getBidiButton((_options_button = options.button) !== null && _options_button !== void 0 ? _options_button : _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left)
                                                }
                                            ]
                                        }
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
            key: "click",
            value: function click(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var actions, _options_button, pointerDownAction, pointerUpAction, _options_count, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                actions = [
                                    {
                                        type: ActionType.PointerMove,
                                        x: Math.round(x),
                                        y: Math.round(y),
                                        origin: options.origin
                                    }
                                ];
                                pointerDownAction = {
                                    type: ActionType.PointerDown,
                                    button: getBidiButton((_options_button = options.button) !== null && _options_button !== void 0 ? _options_button : _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left)
                                };
                                pointerUpAction = {
                                    type: ActionType.PointerUp,
                                    button: pointerDownAction.button
                                };
                                for(i = 1; i < ((_options_count = options.count) !== null && _options_count !== void 0 ? _options_count : 1); ++i){
                                    actions.push(pointerDownAction, pointerUpAction);
                                }
                                actions.push(pointerDownAction);
                                if (options.delay) {
                                    actions.push({
                                        type: ActionType.Pause,
                                        duration: options.delay
                                    });
                                }
                                actions.push(pointerUpAction);
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_mouse" /* InputId.Mouse */ ,
                                            actions: actions
                                        }
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
            key: "wheel",
            value: function wheel() {
                var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, _options_deltaX, _options_deltaY;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page1).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Wheel,
                                            id: "__puppeteer_wheel" /* InputId.Wheel */ ,
                                            actions: [
                                                _object_spread_props(_object_spread({
                                                    type: ActionType.Scroll
                                                }, (_$_class_private_field_get = _class_private_field_get(_this, _lastMovePoint)) !== null && _$_class_private_field_get !== void 0 ? _$_class_private_field_get : {
                                                    x: 0,
                                                    y: 0
                                                }), {
                                                    deltaX: (_options_deltaX = options.deltaX) !== null && _options_deltaX !== void 0 ? _options_deltaX : 0,
                                                    deltaY: (_options_deltaY = options.deltaY) !== null && _options_deltaY !== void 0 ? _options_deltaY : 0
                                                })
                                            ]
                                        }
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
            key: "drag",
            value: function drag() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        },
        {
            key: "dragOver",
            value: function dragOver() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        },
        {
            key: "dragEnter",
            value: function dragEnter() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        },
        {
            key: "drop",
            value: function drop() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        },
        {
            key: "dragAndDrop",
            value: function dragAndDrop() {
                throw new _common_Errors_js__WEBPACK_IMPORTED_MODULE_1__.UnsupportedOperation();
            }
        }
    ]);
    return BidiMouse;
}(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Mouse);
var _page2 = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var BidiTouchscreen = /*#__PURE__*/ function(Touchscreen) {
    "use strict";
    _inherits(BidiTouchscreen, Touchscreen);
    var _super = _create_super(BidiTouchscreen);
    function BidiTouchscreen(page) {
        _class_call_check(this, BidiTouchscreen);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _page2, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _page2, page);
        return _this;
    }
    _create_class(BidiTouchscreen, [
        {
            key: "touchStart",
            value: function touchStart(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page2).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_finger" /* InputId.Finger */ ,
                                            parameters: {
                                                pointerType: "touch" /* Bidi.Input.PointerType.Touch */ 
                                            },
                                            actions: [
                                                {
                                                    type: ActionType.PointerMove,
                                                    x: Math.round(x),
                                                    y: Math.round(y),
                                                    origin: options.origin
                                                },
                                                {
                                                    type: ActionType.PointerDown,
                                                    button: 0,
                                                    width: 0.5 * 2,
                                                    height: 0.5 * 2,
                                                    pressure: 0.5,
                                                    altitudeAngle: Math.PI / 2
                                                }
                                            ]
                                        }
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
            key: "touchMove",
            value: function touchMove(x, y) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page2).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_finger" /* InputId.Finger */ ,
                                            parameters: {
                                                pointerType: "touch" /* Bidi.Input.PointerType.Touch */ 
                                            },
                                            actions: [
                                                {
                                                    type: ActionType.PointerMove,
                                                    x: Math.round(x),
                                                    y: Math.round(y),
                                                    origin: options.origin,
                                                    width: 0.5 * 2,
                                                    height: 0.5 * 2,
                                                    pressure: 0.5,
                                                    altitudeAngle: Math.PI / 2
                                                }
                                            ]
                                        }
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
            key: "touchEnd",
            value: function touchEnd() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _page2).mainFrame().browsingContext.performActions([
                                        {
                                            type: SourceActionsType.Pointer,
                                            id: "__puppeteer_finger" /* InputId.Finger */ ,
                                            parameters: {
                                                pointerType: "touch" /* Bidi.Input.PointerType.Touch */ 
                                            },
                                            actions: [
                                                {
                                                    type: ActionType.PointerUp,
                                                    button: 0
                                                }
                                            ]
                                        }
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
        }
    ]);
    return BidiTouchscreen;
} //# sourceMappingURL=Input.js.map
(_api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Touchscreen);


}),

}]);