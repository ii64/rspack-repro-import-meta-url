"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer-replay_package_lib_main_js"], {
"./third_party/puppeteer-replay/package/lib/main.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssertedEventType: function() { return AssertedEventType; },
  JSONStringifyExtension: function() { return JSONStringifyExtension; },
  LighthouseRunnerExtension: function() { return LighthouseRunnerExtension; },
  LighthouseStringifyExtension: function() { return LighthouseStringifyExtension; },
  PuppeteerReplayStringifyExtension: function() { return PuppeteerReplayStringifyExtension; },
  PuppeteerRunnerExtension: function() { return PuppeteerRunnerExtension; },
  PuppeteerRunnerOwningBrowserExtension: function() { return PuppeteerRunnerOwningBrowserExtension; },
  PuppeteerStringifyExtension: function() { return PuppeteerStringifyExtension; },
  Runner: function() { return Runner; },
  RunnerExtension: function() { return RunnerExtension; },
  Schema: function() { return Schema; },
  SelectorType: function() { return SelectorType; },
  StepType: function() { return StepType; },
  StringifyExtension: function() { return StringifyExtension; },
  assertAllStepTypesAreHandled: function() { return assertAllStepTypesAreHandled; },
  createRunner: function() { return createRunner; },
  formatAsJSLiteral: function() { return formatAsJSLiteral; },
  formatJSONAsJS: function() { return formatJSONAsJS; },
  getSelectorType: function() { return getSelectorType; },
  maxTimeout: function() { return maxTimeout; },
  minTimeout: function() { return minTimeout; },
  mouseButtonMap: function() { return mouseButtonMap; },
  parse: function() { return parse; },
  parseSourceMap: function() { return parseSourceMap; },
  parseStep: function() { return parseStep; },
  pointerDeviceTypes: function() { return pointerDeviceTypes; },
  selectorToPElementSelector: function() { return selectorToPElementSelector; },
  stringify: function() { return stringify; },
  stringifyStep: function() { return stringifyStep; },
  stripSourceMap: function() { return stripSourceMap; },
  typeableInputTypes: function() { return typeableInputTypes; },
  validTimeout: function() { return validTimeout; }
});
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
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
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
        return function(v1) {
            return step([
                n,
                v1
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
var SelectorType;
(function(SelectorType) {
    SelectorType["CSS"] = "css";
    SelectorType["ARIA"] = "aria";
    SelectorType["Text"] = "text";
    SelectorType["XPath"] = "xpath";
    SelectorType["Pierce"] = "pierce";
})(SelectorType || (SelectorType = {}));
var StepType;
(function(StepType) {
    StepType["Change"] = "change";
    StepType["Click"] = "click";
    StepType["Close"] = "close";
    StepType["CustomStep"] = "customStep";
    StepType["DoubleClick"] = "doubleClick";
    StepType["EmulateNetworkConditions"] = "emulateNetworkConditions";
    StepType["Hover"] = "hover";
    StepType["KeyDown"] = "keyDown";
    StepType["KeyUp"] = "keyUp";
    StepType["Navigate"] = "navigate";
    StepType["Scroll"] = "scroll";
    StepType["SetViewport"] = "setViewport";
    StepType["WaitForElement"] = "waitForElement";
    StepType["WaitForExpression"] = "waitForExpression";
})(StepType || (StepType = {}));
var AssertedEventType;
(function(AssertedEventType) {
    AssertedEventType["Navigation"] = "navigation";
})(AssertedEventType || (AssertedEventType = {}));
var Schema = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    get AssertedEventType () {
        return AssertedEventType;
    },
    get SelectorType () {
        return SelectorType;
    },
    get StepType () {
        return StepType;
    }
});
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ function assertAllStepTypesAreHandled(s) {
    throw new Error("Unknown step type: ".concat(s.type));
}
var typeableInputTypes = new Set([
    'textarea',
    'text',
    'url',
    'tel',
    'search',
    'password',
    'number',
    'email'
]);
var pointerDeviceTypes = new Set([
    'mouse',
    'pen',
    'touch'
]);
var mouseButtonMap = new Map([
    [
        'primary',
        'left'
    ],
    [
        'auxiliary',
        'middle'
    ],
    [
        'secondary',
        'right'
    ],
    [
        'back',
        'back'
    ],
    [
        'forward',
        'forward'
    ]
]);
function hasProperty(data, prop) {
    // TODO: use Object.hasOwn once types are available https://github.com/microsoft/TypeScript/issues/44253
    if (!Object.prototype.hasOwnProperty.call(data, prop)) {
        return false;
    }
    var keyedData = data;
    return keyedData[prop] !== undefined;
}
function isObject(data) {
    return (typeof data === "undefined" ? "undefined" : _type_of(data)) === 'object' && data !== null;
}
function isString(data) {
    return typeof data === 'string';
}
function isNumber(data) {
    return typeof data === 'number';
}
function isArray(data) {
    return Array.isArray(data);
}
function isBoolean(data) {
    return typeof data === 'boolean';
}
function isIntegerArray(data) {
    return isArray(data) && data.every(function(item) {
        return Number.isInteger(item);
    });
}
function isKnownDeviceType(data) {
    return typeof data === 'string' && pointerDeviceTypes.has(data);
}
function isKnownMouseButton(data) {
    return typeof data === 'string' && mouseButtonMap.has(data);
}
function parseTarget(step) {
    if (hasProperty(step, 'target') && isString(step.target)) {
        return step.target;
    }
    return undefined;
}
function parseFrame(step) {
    if (hasProperty(step, 'frame')) {
        if (isIntegerArray(step.frame)) {
            return step.frame;
        }
        throw new Error('Step `frame` is not an integer array');
    }
    return undefined;
}
function parseNumber(step, prop) {
    if (hasProperty(step, prop)) {
        var maybeNumber = step[prop];
        if (isNumber(maybeNumber)) {
            return maybeNumber;
        }
    }
    throw new Error("Step.".concat(prop, " is not a number"));
}
function parseBoolean(step, prop) {
    if (hasProperty(step, prop)) {
        var maybeBoolean = step[prop];
        if (isBoolean(maybeBoolean)) {
            return maybeBoolean;
        }
    }
    throw new Error("Step.".concat(prop, " is not a boolean"));
}
function parseOptionalNumber(step, prop) {
    if (hasProperty(step, prop)) {
        return parseNumber(step, prop);
    }
    return undefined;
}
function parseOptionalString(step, prop) {
    if (hasProperty(step, prop)) {
        return parseString(step, prop);
    }
    return undefined;
}
function parseOptionalBoolean(step, prop) {
    if (hasProperty(step, prop)) {
        return parseBoolean(step, prop);
    }
    return undefined;
}
function parseString(step, prop) {
    if (hasProperty(step, prop)) {
        var maybeString = step[prop];
        if (isString(maybeString)) {
            return maybeString;
        }
    }
    throw new Error("Step.".concat(prop, " is not a string"));
}
function parseSelectors(step) {
    if (!hasProperty(step, 'selectors')) {
        throw new Error('Step does not have required selectors');
    }
    if (!isArray(step.selectors)) {
        throw new Error('Step selectors are not an array');
    }
    if (step.selectors.length === 0) {
        throw new Error('Step does not have required selectors');
    }
    return step.selectors.map(function(s) {
        if (!isString(s) && !isArray(s)) {
            throw new Error('Selector is not an array or string');
        }
        if (isArray(s)) {
            return s.map(function(sub) {
                if (!isString(sub)) {
                    throw new Error('Selector element is not a string');
                }
                return sub;
            });
        }
        return s;
    });
}
function parseOptionalSelectors(step) {
    if (!hasProperty(step, 'selectors')) {
        return undefined;
    }
    return parseSelectors(step);
}
function parseAssertedEvent(event) {
    if (!isObject(event)) {
        throw new Error('Asserted event is not an object');
    }
    if (!hasProperty(event, 'type')) {
        throw new Error('Asserted event is missing type');
    }
    if (event.type === AssertedEventType.Navigation) {
        return {
            type: AssertedEventType.Navigation,
            url: parseOptionalString(event, 'url'),
            title: parseOptionalString(event, 'title')
        };
    }
    throw new Error('Unknown assertedEvent type');
}
function parseAssertedEvents(events) {
    if (!isArray(events)) {
        return undefined;
    }
    return events.map(parseAssertedEvent);
}
function parseBaseStep(type, step) {
    if (hasProperty(step, 'timeout') && isNumber(step.timeout) && !validTimeout(step.timeout)) {
        throw new Error(timeoutErrorMessage);
    }
    return {
        type: type,
        assertedEvents: hasProperty(step, 'assertedEvents') ? parseAssertedEvents(step.assertedEvents) : undefined,
        timeout: hasProperty(step, 'timeout') && isNumber(step.timeout) ? step.timeout : undefined
    };
}
function parseStepWithTarget(type, step) {
    return _object_spread_props(_object_spread({}, parseBaseStep(type, step)), {
        target: parseTarget(step)
    });
}
function parseStepWithFrame(type, step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(type, step)), {
        frame: parseFrame(step)
    });
}
function parseStepWithSelectors(type, step) {
    return _object_spread_props(_object_spread({}, parseStepWithFrame(type, step)), {
        selectors: parseSelectors(step)
    });
}
function parseClickAttributes(step) {
    var attributes = {
        offsetX: parseNumber(step, 'offsetX'),
        offsetY: parseNumber(step, 'offsetY'),
        duration: parseOptionalNumber(step, 'duration')
    };
    var deviceType = parseOptionalString(step, 'deviceType');
    if (deviceType) {
        if (!isKnownDeviceType(deviceType)) {
            throw new Error("'deviceType' for click steps must be one of the following: ".concat(_to_consumable_array(pointerDeviceTypes).join(', ')));
        }
        attributes.deviceType = deviceType;
    }
    var button = parseOptionalString(step, 'button');
    if (button) {
        if (!isKnownMouseButton(button)) {
            throw new Error("'button' for click steps must be one of the following: ".concat(_to_consumable_array(mouseButtonMap.keys()).join(', ')));
        }
        attributes.button = button;
    }
    return attributes;
}
function parseClickStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithSelectors(StepType.Click, step), parseClickAttributes(step)), {
        type: StepType.Click
    });
}
function parseDoubleClickStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithSelectors(StepType.DoubleClick, step), parseClickAttributes(step)), {
        type: StepType.DoubleClick
    });
}
function parseHoverStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithSelectors(StepType.Hover, step)), {
        type: StepType.Hover
    });
}
function parseChangeStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithSelectors(StepType.Change, step)), {
        type: StepType.Change,
        value: parseString(step, 'value')
    });
}
function parseKeyDownStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.KeyDown, step)), {
        type: StepType.KeyDown,
        // TODO: type-check keys.
        key: parseString(step, 'key')
    });
}
function parseKeyUpStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.KeyUp, step)), {
        type: StepType.KeyUp,
        // TODO: type-check keys.
        key: parseString(step, 'key')
    });
}
function parseEmulateNetworkConditionsStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.EmulateNetworkConditions, step)), {
        type: StepType.EmulateNetworkConditions,
        download: parseNumber(step, 'download'),
        upload: parseNumber(step, 'upload'),
        latency: parseNumber(step, 'latency')
    });
}
function parseCloseStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.Close, step)), {
        type: StepType.Close
    });
}
function parseSetViewportStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.SetViewport, step)), {
        type: StepType.SetViewport,
        width: parseNumber(step, 'width'),
        height: parseNumber(step, 'height'),
        deviceScaleFactor: parseNumber(step, 'deviceScaleFactor'),
        isMobile: parseBoolean(step, 'isMobile'),
        hasTouch: parseBoolean(step, 'hasTouch'),
        isLandscape: parseBoolean(step, 'isLandscape')
    });
}
function parseScrollStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithFrame(StepType.Scroll, step)), {
        type: StepType.Scroll,
        x: parseOptionalNumber(step, 'x'),
        y: parseOptionalNumber(step, 'y'),
        selectors: parseOptionalSelectors(step)
    });
}
function parseNavigateStep(step) {
    return _object_spread_props(_object_spread({}, parseStepWithTarget(StepType.Navigate, step)), {
        type: StepType.Navigate,
        target: parseTarget(step),
        url: parseString(step, 'url')
    });
}
function parseWaitForElementStep(step) {
    var operator = parseOptionalString(step, 'operator');
    if (operator && operator !== '>=' && operator !== '==' && operator !== '<=') {
        throw new Error("WaitForElement step's operator is not one of '>=','==','<='");
    }
    if (hasProperty(step, 'attributes')) {
        if (!isObject(step.attributes) || Object.values(step.attributes).some(function(attribute) {
            return typeof attribute !== 'string';
        })) {
            throw new Error("WaitForElement step's attribute is not a dictionary of strings");
        }
    }
    if (hasProperty(step, 'properties')) {
        if (!isObject(step.properties)) {
            throw new Error("WaitForElement step's attribute is not an object");
        }
    }
    return _object_spread_props(_object_spread({}, parseStepWithSelectors(StepType.WaitForElement, step)), {
        type: StepType.WaitForElement,
        operator: operator,
        count: parseOptionalNumber(step, 'count'),
        visible: parseOptionalBoolean(step, 'visible'),
        attributes: hasProperty(step, 'attributes') ? step.attributes : undefined,
        properties: hasProperty(step, 'properties') ? step.properties : undefined
    });
}
function parseWaitForExpressionStep(step) {
    if (!hasProperty(step, 'expression')) {
        throw new Error('waitForExpression step is missing `expression`');
    }
    return _object_spread_props(_object_spread({}, parseStepWithFrame(StepType.WaitForExpression, step)), {
        type: StepType.WaitForExpression,
        expression: parseString(step, 'expression')
    });
}
function parseCustomStep(step) {
    if (!hasProperty(step, 'name')) {
        throw new Error('customStep is missing name');
    }
    if (!isString(step.name)) {
        throw new Error("customStep's name is not a string");
    }
    return _object_spread_props(_object_spread({}, parseStepWithFrame(StepType.CustomStep, step)), {
        type: StepType.CustomStep,
        name: step.name,
        parameters: hasProperty(step, 'parameters') ? step.parameters : undefined
    });
}
function parseStep(step, idx) {
    if (!isObject(step)) {
        throw new Error(idx ? "Step ".concat(idx, " is not an object") : 'Step is not an object');
    }
    if (!hasProperty(step, 'type')) {
        throw new Error(idx ? "Step ".concat(idx, " does not have a type") : 'Step does not have a type');
    }
    if (!isString(step.type)) {
        throw new Error(idx ? "Type of the step ".concat(idx, " is not a string") : 'Type of the step is not a string');
    }
    switch(step.type){
        case StepType.Click:
            return parseClickStep(step);
        case StepType.DoubleClick:
            return parseDoubleClickStep(step);
        case StepType.Hover:
            return parseHoverStep(step);
        case StepType.Change:
            return parseChangeStep(step);
        case StepType.KeyDown:
            return parseKeyDownStep(step);
        case StepType.KeyUp:
            return parseKeyUpStep(step);
        case StepType.EmulateNetworkConditions:
            return parseEmulateNetworkConditionsStep(step);
        case StepType.Close:
            return parseCloseStep(step);
        case StepType.SetViewport:
            return parseSetViewportStep(step);
        case StepType.Scroll:
            return parseScrollStep(step);
        case StepType.Navigate:
            return parseNavigateStep(step);
        case StepType.CustomStep:
            return parseCustomStep(step);
        case StepType.WaitForElement:
            return parseWaitForElementStep(step);
        case StepType.WaitForExpression:
            return parseWaitForExpressionStep(step);
        default:
            throw new Error("Step type ".concat(step.type, " is not supported"));
    }
}
function parseSteps(steps) {
    var result = [];
    if (!isArray(steps)) {
        throw new Error('Recording `steps` is not an array');
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = steps.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), idx = _step_value[0], step = _step_value[1];
            result.push(parseStep(step, idx));
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
    return result;
}
function cleanUndefined(json) {
    return JSON.parse(JSON.stringify(json));
}
var minTimeout = 1;
var maxTimeout = 30000;
var timeoutErrorMessage = "Timeout is not between ".concat(minTimeout, " and ").concat(maxTimeout, " milliseconds");
function validTimeout(timeout) {
    return timeout >= minTimeout && timeout <= maxTimeout;
}
function parse(data) {
    if (!isObject(data)) {
        throw new Error('Recording is not an object');
    }
    if (!hasProperty(data, 'title')) {
        throw new Error('Recording is missing `title`');
    }
    if (!isString(data.title)) {
        throw new Error('Recording `title` is not a string');
    }
    if (hasProperty(data, 'timeout') && !isNumber(data.timeout)) {
        throw new Error('Recording `timeout` is not a number');
    }
    if (!hasProperty(data, 'steps')) {
        throw new Error('Recording is missing `steps`');
    }
    if (hasProperty(data, 'timeout') && isNumber(data.timeout) && !validTimeout(data.timeout)) {
        throw new Error(timeoutErrorMessage);
    }
    return cleanUndefined({
        title: data.title,
        timeout: hasProperty(data, 'timeout') && isNumber(data.timeout) ? data.timeout : undefined,
        selectorAttribute: hasProperty(data, 'selectorAttribute') && isString(data.selectorAttribute) ? data.selectorAttribute : undefined,
        steps: parseSteps(data.steps)
    });
}
/**
 * Detects what type of a selector the string contains. For example,
 * `aria/Label` is a SelectorType.ARIA.
 *
 * Note that CSS selectors are special and usually don't require a prefix,
 * therefore, SelectorType.CSS is the default type if other types didn't match.
 */ function getSelectorType(selector) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(SelectorType)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (selector.startsWith("".concat(value, "/"))) {
                return value;
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
    return SelectorType.CSS;
}
/**
 * Converts a selector or an array of selector parts into a Puppeteer selector.
 *
 * @see https://pptr.dev/guides/query-selectors#p-elements
 */ function selectorToPElementSelector(selector) {
    if (!Array.isArray(selector)) {
        selector = [
            selector
        ];
    }
    function escape(input) {
        return input.replace(/['"()]/g, "\\$&");
    }
    var result = selector.map(function(s) {
        switch(getSelectorType(s)){
            case SelectorType.ARIA:
                return "::-p-aria(".concat(escape(s.substring(SelectorType.ARIA.length + 1)), ")");
            case SelectorType.CSS:
                return s;
            case SelectorType.XPath:
                return "::-p-xpath(".concat(escape(s.substring(SelectorType.XPath.length + 1)), ")");
            case SelectorType.Pierce:
                return ":scope >>> ".concat(s.substring(SelectorType.Pierce.length + 1));
            case SelectorType.Text:
                return "::-p-text(".concat(escape(s.substring(SelectorType.Text.length + 1)), ")");
        }
    });
    return result.join(' >>>> ');
}
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var StringifyExtension = /*#__PURE__*/ function() {
    "use strict";
    function StringifyExtension() {
        _class_call_check(this, StringifyExtension);
    }
    _create_class(StringifyExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(out, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterAllSteps",
            value: function afterAllSteps(out, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "beforeEachStep",
            value: function beforeEachStep(out, step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "stringifyStep",
            value: function stringifyStep(out, step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterEachStep",
            value: function afterEachStep(out, step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return StringifyExtension;
}();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ /**
 * Stringifies a user flow to JSON with source maps.
 *
 * You probably want to strip the source map because not all
 * parsers support comments in JSON.
 */ var JSONStringifyExtension = /*#__PURE__*/ function(StringifyExtension) {
    "use strict";
    _inherits(JSONStringifyExtension, StringifyExtension);
    var _super = _create_super(JSONStringifyExtension);
    function JSONStringifyExtension() {
        _class_call_check(this, JSONStringifyExtension);
        return _super.apply(this, arguments);
    }
    _create_class(JSONStringifyExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(out, flow) {
                return _async_to_generator(function() {
                    var copy, text, lines;
                    return _ts_generator(this, function(_state) {
                        copy = _object_spread_props(_object_spread({}, flow), {
                            steps: undefined
                        });
                        // Stringify top-level attributes.
                        text = JSON.stringify(copy, null, out.getIndent());
                        lines = text.split('\n');
                        lines.pop();
                        lines[lines.length - 1] += ',';
                        lines.push(out.getIndent() + '"steps": [');
                        out.appendLine(lines.join('\n')).startBlock().startBlock();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterAllSteps",
            value: function afterAllSteps(out) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        out.endBlock().endBlock().appendLine(out.getIndent() + "]").appendLine('}');
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "stringifyStep",
            value: function stringifyStep(out, step, flow) {
                return _async_to_generator(function() {
                    var stepText, separator;
                    return _ts_generator(this, function(_state) {
                        stepText = JSON.stringify(step, null, out.getIndent());
                        if (!flow) {
                            out.appendLine(stepText);
                            return [
                                2
                            ];
                        }
                        separator = flow.steps.lastIndexOf(step) === flow.steps.length - 1 ? '' : ',';
                        out.appendLine(stepText + separator);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return JSONStringifyExtension;
}(StringifyExtension);
var _indentation = /*#__PURE__*/ new WeakMap(), _currentIndentation = /*#__PURE__*/ new WeakMap(), _lines = /*#__PURE__*/ new WeakMap();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var InMemoryLineWriter = /*#__PURE__*/ function() {
    "use strict";
    function InMemoryLineWriter(indentation) {
        _class_call_check(this, InMemoryLineWriter);
        _class_private_field_init(this, _indentation, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _currentIndentation, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _lines, {
            writable: true,
            value: []
        });
        _class_private_field_set(this, _indentation, indentation);
    }
    _create_class(InMemoryLineWriter, [
        {
            key: "appendLine",
            value: function appendLine(line) {
                var _this = this;
                var _$_class_private_field_get;
                var lines = line.split('\n').map(function(line) {
                    var indentedLine = line ? _class_private_field_get(_this, _indentation).repeat(_class_private_field_get(_this, _currentIndentation)) + line.trimEnd() : '';
                    return indentedLine;
                });
                (_$_class_private_field_get = _class_private_field_get(this, _lines)).push.apply(_$_class_private_field_get, _to_consumable_array(lines));
                return this;
            }
        },
        {
            key: "startBlock",
            value: function startBlock() {
                _class_private_field_update(this, _currentIndentation).value++;
                return this;
            }
        },
        {
            key: "endBlock",
            value: function endBlock() {
                _class_private_field_update(this, _currentIndentation).value--;
                if (_class_private_field_get(this, _currentIndentation) < 0) {
                    throw new Error('Extra endBlock');
                }
                return this;
            }
        },
        {
            key: "toString",
            value: function toString() {
                // Scripts should end with a final blank line.
                return _class_private_field_get(this, _lines).join('\n') + '\n';
            }
        },
        {
            key: "getIndent",
            value: function getIndent() {
                return _class_private_field_get(this, _indentation);
            }
        },
        {
            key: "getSize",
            value: function getSize() {
                return _class_private_field_get(this, _lines).length;
            }
        }
    ]);
    return InMemoryLineWriter;
}();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ /**
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */ function formatJSONAsJS(json, indent) {
    var buffer = [];
    format(json, buffer, 1, indent);
    return buffer.join('');
}
function format(json) {
    var buffer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, indent = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '  ';
    switch(typeof json === "undefined" ? "undefined" : _type_of(json)){
        case 'bigint':
        case 'symbol':
        case 'function':
        case 'undefined':
            throw new Error('Invalid JSON');
        case 'number':
        case 'boolean':
            buffer.push(String(json));
            break;
        case 'string':
            buffer.push(formatAsJSLiteral(json));
            break;
        case 'object':
            {
                if (json === null) {
                    buffer.push('null');
                } else if (Array.isArray(json)) {
                    buffer.push('[\n');
                    for(var i = 0; i < json.length; i++){
                        buffer.push(indent.repeat(level));
                        format(json[i], buffer, level + 1, indent);
                        if (i !== json.length - 1) {
                            buffer.push(',');
                        }
                        buffer.push('\n');
                    }
                    buffer.push(indent.repeat(level - 1) + ']');
                } else {
                    buffer.push('{\n');
                    var keys = Object.keys(json);
                    for(var i1 = 0; i1 < keys.length; i1++){
                        var key = keys[i1];
                        var value = json[key];
                        if (value === undefined) {
                            continue;
                        }
                        buffer.push(indent.repeat(level));
                        buffer.push(key);
                        buffer.push(': ');
                        format(value, buffer, level + 1, indent);
                        if (i1 !== keys.length - 1) {
                            buffer.push(',');
                        }
                        buffer.push('\n');
                    }
                    buffer.push(indent.repeat(level - 1) + '}');
                }
                break;
            }
        default:
            throw new Error('Unknown object type');
    }
    return buffer;
}
// Taken from https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/core/platform/string-utilities.ts;l=29;drc=111134437ee51d74433829bed0088f7239e18867.
var toHexadecimal = function(charCode, padToLength) {
    return charCode.toString(16).toUpperCase().padStart(padToLength, '0');
};
// Remember to update the third group in the regexps patternsToEscape and
// patternsToEscapePlusSingleQuote when adding new entries in this map.
var escapedReplacements = new Map([
    [
        '\b',
        '\\b'
    ],
    [
        '\f',
        '\\f'
    ],
    [
        '\n',
        '\\n'
    ],
    [
        '\r',
        '\\r'
    ],
    [
        '\t',
        '\\t'
    ],
    [
        '\v',
        '\\v'
    ],
    [
        "'",
        "\\'"
    ],
    [
        '\\',
        '\\\\'
    ],
    [
        '<!--',
        '\\x3C!--'
    ],
    [
        '<script',
        '\\x3Cscript'
    ],
    [
        '</script',
        '\\x3C/script'
    ]
]);
var formatAsJSLiteral = function(content) {
    var patternsToEscape = RegExp("(\\\\|<(?:!--|\\/?script))|(\\p{Control})|(\\p{Surrogate})", "gu");
    var patternsToEscapePlusSingleQuote = RegExp("(\\\\|'|<(?:!--|\\/?script))|(\\p{Control})|(\\p{Surrogate})", "gu");
    var escapePattern = function(match, pattern, controlChar, loneSurrogate) {
        if (controlChar) {
            if (escapedReplacements.has(controlChar)) {
                // @ts-ignore https://github.com/microsoft/TypeScript/issues/13086
                return escapedReplacements.get(controlChar);
            }
            var twoDigitHex = toHexadecimal(controlChar.charCodeAt(0), 2);
            return '\\x' + twoDigitHex;
        }
        if (loneSurrogate) {
            var fourDigitHex = toHexadecimal(loneSurrogate.charCodeAt(0), 4);
            return '\\u' + fourDigitHex;
        }
        if (pattern) {
            return escapedReplacements.get(pattern) || '';
        }
        return match;
    };
    var escapedContent = '';
    var quote = '';
    if (!content.includes("'")) {
        quote = "'";
        escapedContent = content.replace(patternsToEscape, escapePattern);
    } else if (!content.includes('"')) {
        quote = '"';
        escapedContent = content.replace(patternsToEscape, escapePattern);
    } else if (!content.includes('`') && !content.includes('${')) {
        quote = '`';
        escapedContent = content.replace(patternsToEscape, escapePattern);
    } else {
        quote = "'";
        escapedContent = content.replace(patternsToEscapePlusSingleQuote, escapePattern);
    }
    return "".concat(quote).concat(escapedContent).concat(quote);
};
var _shouldAppendWaitForElementHelper = /*#__PURE__*/ new WeakMap(), _appendTarget = /*#__PURE__*/ new WeakSet(), _appendFrame = /*#__PURE__*/ new WeakSet(), _appendContext = /*#__PURE__*/ new WeakSet(), _appendLocators = /*#__PURE__*/ new WeakSet(), _appendClickStep = /*#__PURE__*/ new WeakSet(), _appendDoubleClickStep = /*#__PURE__*/ new WeakSet(), _appendHoverStep = /*#__PURE__*/ new WeakSet(), _appendChangeStep = /*#__PURE__*/ new WeakSet(), _appendEmulateNetworkConditionsStep = /*#__PURE__*/ new WeakSet(), _appendKeyDownStep = /*#__PURE__*/ new WeakSet(), _appendKeyUpStep = /*#__PURE__*/ new WeakSet(), _appendCloseStep = /*#__PURE__*/ new WeakSet(), _appendViewportStep = /*#__PURE__*/ new WeakSet(), _appendScrollStep = /*#__PURE__*/ new WeakSet(), _appendStepType = /*#__PURE__*/ new WeakSet(), _appendNavigationStep = /*#__PURE__*/ new WeakSet(), _appendWaitExpressionStep = /*#__PURE__*/ new WeakSet(), _appendWaitForElementStep = /*#__PURE__*/ new WeakSet();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var PuppeteerStringifyExtension = /*#__PURE__*/ function(StringifyExtension) {
    "use strict";
    _inherits(PuppeteerStringifyExtension, StringifyExtension);
    var _super = _create_super(PuppeteerStringifyExtension);
    function PuppeteerStringifyExtension() {
        _class_call_check(this, PuppeteerStringifyExtension);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _appendTarget);
        _class_private_method_init(_assert_this_initialized(_this), _appendFrame);
        _class_private_method_init(_assert_this_initialized(_this), _appendContext);
        _class_private_method_init(_assert_this_initialized(_this), _appendLocators);
        _class_private_method_init(_assert_this_initialized(_this), _appendClickStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendDoubleClickStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendHoverStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendChangeStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendEmulateNetworkConditionsStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendKeyDownStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendKeyUpStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendCloseStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendViewportStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendScrollStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendStepType);
        _class_private_method_init(_assert_this_initialized(_this), _appendNavigationStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendWaitExpressionStep);
        _class_private_method_init(_assert_this_initialized(_this), _appendWaitForElementStep);
        _class_private_field_init(_assert_this_initialized(_this), _shouldAppendWaitForElementHelper, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(PuppeteerStringifyExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(out, flow) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        out.appendLine("const puppeteer = require('puppeteer'); // v22.0.0 or later");
                        out.appendLine('');
                        out.appendLine('(async () => {').startBlock();
                        out.appendLine('const browser = await puppeteer.launch();');
                        out.appendLine('const page = await browser.newPage();');
                        out.appendLine("const timeout = ".concat(flow.timeout || defaultTimeout, ";"));
                        out.appendLine('page.setDefaultTimeout(timeout);');
                        out.appendLine('');
                        _class_private_field_set(_this, _shouldAppendWaitForElementHelper, false);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterAllSteps",
            value: function afterAllSteps(out, flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, line;
                    return _ts_generator(this, function(_state) {
                        out.appendLine('');
                        out.appendLine('await browser.close();');
                        out.appendLine('');
                        if (_class_private_field_get(_this, _shouldAppendWaitForElementHelper)) {
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = waitForElementHelper.split('\n')[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    line = _step.value;
                                    out.appendLine(line);
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
                        }
                        out.endBlock().appendLine('})().catch(err => {').startBlock();
                        out.appendLine('console.error(err);');
                        out.appendLine('process.exit(1);');
                        out.endBlock().appendLine('});');
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "stringifyStep",
            value: function stringifyStep(out, step, flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
                    return _ts_generator(this, function(_state) {
                        out.appendLine('{').startBlock();
                        if (step.timeout !== undefined) {
                            out.appendLine("const timeout = ".concat(step.timeout, ";"));
                        }
                        _class_private_method_get(_this, _appendContext, appendContext).call(_this, out, step);
                        if (step.assertedEvents) {
                            out.appendLine('const promises = [];');
                            out.appendLine('const startWaitingForEvents = () => {').startBlock();
                            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(_iterator = step.assertedEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    event = _step.value;
                                    switch(event.type){
                                        case AssertedEventType.Navigation:
                                            {
                                                out.appendLine("promises.push(".concat('frame' in step && step.frame ? 'frame' : 'targetPage', ".waitForNavigation());"));
                                                break;
                                            }
                                        default:
                                            throw new Error("Event type ".concat(event.type, " is not supported"));
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
                            out.endBlock().appendLine('}');
                        }
                        _class_private_method_get(_this, _appendStepType, appendStepType).call(_this, out, step);
                        if (step.assertedEvents) {
                            out.appendLine('await Promise.all(promises);');
                        }
                        out.endBlock().appendLine('}');
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return PuppeteerStringifyExtension;
}(StringifyExtension);
function appendTarget(out, target) {
    if (target === 'main') {
        out.appendLine('const targetPage = page;');
    } else {
        out.appendLine("const target = await browser.waitForTarget(t => t.url() === ".concat(formatJSONAsJS(target, out.getIndent()), ", { timeout });"));
        out.appendLine('const targetPage = await target.page();');
        out.appendLine('targetPage.setDefaultTimeout(timeout);');
    }
}
function appendFrame(out, path) {
    out.appendLine('let frame = targetPage.mainFrame();');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var index = _step.value;
            out.appendLine("frame = frame.childFrames()[".concat(index, "];"));
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
}
function appendContext(out, step) {
    // TODO fix optional target: should it be main?
    _class_private_method_get(this, _appendTarget, appendTarget).call(this, out, step.target || 'main');
    // TODO fix optional frame: should it be required?
    if (step.frame) {
        _class_private_method_get(this, _appendFrame, appendFrame).call(this, out, step.frame);
    }
}
function appendLocators(out, step, action) {
    var _step_assertedEvents;
    out.appendLine('await puppeteer.Locator.race([').startBlock();
    out.appendLine(step.selectors.map(function(s) {
        return "".concat(step.frame ? 'frame' : 'targetPage', ".locator(").concat(formatJSONAsJS(selectorToPElementSelector(s), out.getIndent()), ")");
    }).join(',\n'));
    out.endBlock().appendLine('])');
    out.startBlock().appendLine('.setTimeout(timeout)');
    if ((_step_assertedEvents = step.assertedEvents) === null || _step_assertedEvents === void 0 ? void 0 : _step_assertedEvents.length) {
        out.appendLine(".on('action', () => startWaitingForEvents())");
    }
    action();
    out.endBlock();
}
function appendClickStep(out, step) {
    _class_private_method_get(this, _appendLocators, appendLocators).call(this, out, step, function() {
        out.appendLine('.click({');
        if (step.duration) {
            out.appendLine("  delay: ".concat(step.duration, ","));
        }
        if (step.button) {
            out.appendLine("  button: '".concat(mouseButtonMap.get(step.button), "',"));
        }
        out.appendLine('  offset: {');
        out.appendLine("    x: ".concat(step.offsetX, ","));
        out.appendLine("    y: ".concat(step.offsetY, ","));
        out.appendLine('  },');
        out.appendLine('});');
    });
}
function appendDoubleClickStep(out, step) {
    _class_private_method_get(this, _appendLocators, appendLocators).call(this, out, step, function() {
        out.appendLine('.click({');
        out.appendLine("  count: 2,");
        if (step.duration) {
            out.appendLine("  delay: ".concat(step.duration, ","));
        }
        if (step.button) {
            out.appendLine("  button: '".concat(mouseButtonMap.get(step.button), "',"));
        }
        out.appendLine('  offset: {');
        out.appendLine("    x: ".concat(step.offsetX, ","));
        out.appendLine("    y: ".concat(step.offsetY, ","));
        out.appendLine('  },');
        out.appendLine('});');
    });
}
function appendHoverStep(out, step) {
    _class_private_method_get(this, _appendLocators, appendLocators).call(this, out, step, function() {
        out.appendLine('.hover();');
    });
}
function appendChangeStep(out, step) {
    _class_private_method_get(this, _appendLocators, appendLocators).call(this, out, step, function() {
        out.appendLine(".fill(".concat(formatJSONAsJS(step.value, out.getIndent()), ");"));
    });
}
function appendEmulateNetworkConditionsStep(out, step) {
    out.appendLine('await targetPage.emulateNetworkConditions({');
    out.appendLine("  offline: ".concat(!step.download && !step.upload, ","));
    out.appendLine("  downloadThroughput: ".concat(step.download, ","));
    out.appendLine("  uploadThroughput: ".concat(step.upload, ","));
    out.appendLine("  latency: ".concat(step.latency, ","));
    out.appendLine('});');
}
function appendKeyDownStep(out, step) {
    out.appendLine("await targetPage.keyboard.down(".concat(formatJSONAsJS(step.key, out.getIndent()), ");"));
}
function appendKeyUpStep(out, step) {
    out.appendLine("await targetPage.keyboard.up(".concat(formatJSONAsJS(step.key, out.getIndent()), ");"));
}
function appendCloseStep(out, step) {
    out.appendLine('await targetPage.close()');
}
function appendViewportStep(out, step) {
    out.appendLine("await targetPage.setViewport(".concat(formatJSONAsJS({
        width: step.width,
        height: step.height
    }, out.getIndent()), ")"));
}
function appendScrollStep(out, step) {
    if ('selectors' in step) {
        _class_private_method_get(this, _appendLocators, appendLocators).call(this, out, step, function() {
            out.appendLine(".scroll({ scrollTop: ".concat(step.y, ", scrollLeft: ").concat(step.x, "});"));
        });
    } else {
        out.appendLine("await targetPage.evaluate((x, y) => { window.scroll(x, y); }, ".concat(step.x, ", ").concat(step.y, ")"));
    }
}
function appendStepType(out, step) {
    switch(step.type){
        case StepType.Click:
            return _class_private_method_get(this, _appendClickStep, appendClickStep).call(this, out, step);
        case StepType.DoubleClick:
            return _class_private_method_get(this, _appendDoubleClickStep, appendDoubleClickStep).call(this, out, step);
        case StepType.Hover:
            return _class_private_method_get(this, _appendHoverStep, appendHoverStep).call(this, out, step);
        case StepType.Change:
            return _class_private_method_get(this, _appendChangeStep, appendChangeStep).call(this, out, step);
        case StepType.EmulateNetworkConditions:
            return _class_private_method_get(this, _appendEmulateNetworkConditionsStep, appendEmulateNetworkConditionsStep).call(this, out, step);
        case StepType.KeyDown:
            return _class_private_method_get(this, _appendKeyDownStep, appendKeyDownStep).call(this, out, step);
        case StepType.KeyUp:
            return _class_private_method_get(this, _appendKeyUpStep, appendKeyUpStep).call(this, out, step);
        case StepType.Close:
            return _class_private_method_get(this, _appendCloseStep, appendCloseStep).call(this, out, step);
        case StepType.SetViewport:
            return _class_private_method_get(this, _appendViewportStep, appendViewportStep).call(this, out, step);
        case StepType.Scroll:
            return _class_private_method_get(this, _appendScrollStep, appendScrollStep).call(this, out, step);
        case StepType.Navigate:
            return _class_private_method_get(this, _appendNavigationStep, appendNavigationStep).call(this, out, step);
        case StepType.WaitForElement:
            return _class_private_method_get(this, _appendWaitForElementStep, appendWaitForElementStep).call(this, out, step);
        case StepType.WaitForExpression:
            return _class_private_method_get(this, _appendWaitExpressionStep, appendWaitExpressionStep).call(this, out, step);
        case StepType.CustomStep:
            return; // TODO: implement these
        default:
            return assertAllStepTypesAreHandled(step);
    }
}
function appendNavigationStep(out, step) {
    var _step_assertedEvents;
    if ((_step_assertedEvents = step.assertedEvents) === null || _step_assertedEvents === void 0 ? void 0 : _step_assertedEvents.length) {
        out.appendLine("startWaitingForEvents();");
    }
    out.appendLine("await targetPage.goto(".concat(formatJSONAsJS(step.url, out.getIndent()), ");"));
}
function appendWaitExpressionStep(out, step) {
    out.appendLine("await ".concat(step.frame ? 'frame' : 'targetPage', ".waitForFunction(").concat(formatJSONAsJS(step.expression, out.getIndent()), ", { timeout });"));
}
function appendWaitForElementStep(out, step) {
    _class_private_field_set(this, _shouldAppendWaitForElementHelper, true);
    out.appendLine("await waitForElement(".concat(formatJSONAsJS(step, out.getIndent()), ", ").concat(step.frame ? 'frame' : 'targetPage', ", timeout);"));
}
var defaultTimeout = 5000;
var waitForElementHelper = "async function waitForElement(step, frame, timeout) {\n  const {\n    count = 1,\n    operator = '>=',\n    visible = true,\n    properties,\n    attributes,\n  } = step;\n  const compFn = {\n    '==': (a, b) => a === b,\n    '>=': (a, b) => a >= b,\n    '<=': (a, b) => a <= b,\n  }[operator];\n  await waitForFunction(async () => {\n    const elements = await querySelectorsAll(step.selectors, frame);\n    let result = compFn(elements.length, count);\n    const elementsHandle = await frame.evaluateHandle((...elements) => {\n      return elements;\n    }, ...elements);\n    await Promise.all(elements.map((element) => element.dispose()));\n    if (result && (properties || attributes)) {\n      result = await elementsHandle.evaluate(\n        (elements, properties, attributes) => {\n          for (const element of elements) {\n            if (attributes) {\n              for (const [name, value] of Object.entries(attributes)) {\n                if (element.getAttribute(name) !== value) {\n                  return false;\n                }\n              }\n            }\n            if (properties) {\n              if (!isDeepMatch(properties, element)) {\n                return false;\n              }\n            }\n          }\n          return true;\n\n          function isDeepMatch(a, b) {\n            if (a === b) {\n              return true;\n            }\n            if ((a && !b) || (!a && b)) {\n              return false;\n            }\n            if (!(a instanceof Object) || !(b instanceof Object)) {\n              return false;\n            }\n            for (const [key, value] of Object.entries(a)) {\n              if (!isDeepMatch(value, b[key])) {\n                return false;\n              }\n            }\n            return true;\n          }\n        },\n        properties,\n        attributes\n      );\n    }\n    await elementsHandle.dispose();\n    return result === visible;\n  }, timeout);\n}\n\nasync function querySelectorsAll(selectors, frame) {\n  for (const selector of selectors) {\n    const result = await querySelectorAll(selector, frame);\n    if (result.length) {\n      return result;\n    }\n  }\n  return [];\n}\n\nasync function querySelectorAll(selector, frame) {\n  if (!Array.isArray(selector)) {\n    selector = [selector];\n  }\n  if (!selector.length) {\n    throw new Error('Empty selector provided to querySelectorAll');\n  }\n  let elements = [];\n  for (let i = 0; i < selector.length; i++) {\n    const part = selector[i];\n    if (i === 0) {\n      elements = await frame.$$(part);\n    } else {\n      const tmpElements = elements;\n      elements = [];\n      for (const el of tmpElements) {\n        elements.push(...(await el.$$(part)));\n      }\n    }\n    if (elements.length === 0) {\n      return [];\n    }\n    if (i < selector.length - 1) {\n      const tmpElements = [];\n      for (const el of elements) {\n        const newEl = (await el.evaluateHandle(el => el.shadowRoot ? el.shadowRoot : el)).asElement();\n        if (newEl) {\n          tmpElements.push(newEl);\n        }\n      }\n      elements = tmpElements;\n    }\n  }\n  return elements;\n}\n\nasync function waitForFunction(fn, timeout) {\n  let isActive = true;\n  const timeoutId = setTimeout(() => {\n    isActive = false;\n  }, timeout);\n  while (isActive) {\n    const result = await fn();\n    if (result) {\n      clearTimeout(timeoutId);\n      return;\n    }\n    await new Promise(resolve => setTimeout(resolve, 100));\n  }\n  throw new Error('Timed out');\n}";
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var charToIdx = alpha.split('').reduce(function(acc, char, idx) {
    acc.set(char, idx);
    return acc;
}, new Map());
var LEAST_5_BIT_MASK = 31;
var CONTINUATION_BIT_MASK = 32;
var MAX_INT = 2147483647;
/**
 * Encoding variable length integer into base64 (6-bit):
 *
 * 1 N N N N N | 0 N N N N N
 *
 * The first bit indicates if there is more data for the int.
 */ function encodeInt(num) {
    if (num < 0) {
        throw new Error('Only postive integers and zero are supported');
    }
    if (num > MAX_INT) {
        throw new Error('Only integers between 0 and ' + MAX_INT + ' are supported');
    }
    var result = [];
    do {
        var payload = num & LEAST_5_BIT_MASK;
        num >>>= 5;
        if (num > 0) payload |= CONTINUATION_BIT_MASK;
        result.push(alpha[payload]);
    }while (num !== 0);
    return result.join('');
}
function encode(nums) {
    var parts = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = nums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var num = _step.value;
            parts.push(encodeInt(num));
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
    return parts.join('');
}
function decode(str) {
    var results = [];
    var chrs = str.split('');
    var result = 0;
    var shift = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = chrs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var ch = _step.value;
            var num = charToIdx.get(ch);
            result |= (num & LEAST_5_BIT_MASK) << shift;
            shift += 5;
            var hasMore = num & CONTINUATION_BIT_MASK;
            if (!hasMore) {
                results.push(result);
                result = 0;
                shift = 0;
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
    return results;
}
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var SOURCE_MAP_PREFIX = '//# recorderSourceMap=';
function stringify(flow, opts) {
    return _stringify.apply(this, arguments);
}
function _stringify() {
    _stringify = /**
 * Stringifes an entire recording. The following hooks are invoked with the `flow` parameter containing the entire flow:
 * - `beforeAllSteps` (once)
 * - `beforeEachStep` (per step)
 * - `stringifyStep` (per step)
 * - `afterEachStep` (per step)
 * - `afterAllSteps` (once)
 */ _async_to_generator(function(flow, opts) {
        var _ext_beforeAllSteps, _ext_afterAllSteps, _opts_extension, ext, _opts_indentation, _opts_writer, out, sourceMap, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, step, _sourceMap, _ext_beforeEachStep, _ext_afterEachStep, firstLine, lastLine, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!opts) {
                        opts = {};
                    }
                    ext = (_opts_extension = opts.extension) !== null && _opts_extension !== void 0 ? _opts_extension : new PuppeteerStringifyExtension();
                    out = (_opts_writer = opts.writer) !== null && _opts_writer !== void 0 ? _opts_writer : new InMemoryLineWriter((_opts_indentation = opts.indentation) !== null && _opts_indentation !== void 0 ? _opts_indentation : '  ');
                    return [
                        4,
                        (_ext_beforeAllSteps = ext.beforeAllSteps) === null || _ext_beforeAllSteps === void 0 ? void 0 : _ext_beforeAllSteps.call(ext, out, flow)
                    ];
                case 1:
                    _state.sent();
                    sourceMap = [
                        1
                    ]; // The first int indicates the version.
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        9,
                        10,
                        11
                    ]);
                    _iterator = flow.steps[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        8
                    ];
                    step = _step.value;
                    firstLine = out.getSize();
                    return [
                        4,
                        (_ext_beforeEachStep = ext.beforeEachStep) === null || _ext_beforeEachStep === void 0 ? void 0 : _ext_beforeEachStep.call(ext, out, step, flow)
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        ext.stringifyStep(out, step, flow)
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        (_ext_afterEachStep = ext.afterEachStep) === null || _ext_afterEachStep === void 0 ? void 0 : _ext_afterEachStep.call(ext, out, step, flow)
                    ];
                case 6:
                    _state.sent();
                    lastLine = out.getSize();
                    (_sourceMap = sourceMap).push.apply(_sourceMap, [
                        firstLine,
                        lastLine - firstLine
                    ]);
                    _state.label = 7;
                case 7:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        11
                    ];
                case 10:
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
                case 11:
                    return [
                        4,
                        (_ext_afterAllSteps = ext.afterAllSteps) === null || _ext_afterAllSteps === void 0 ? void 0 : _ext_afterAllSteps.call(ext, out, flow)
                    ];
                case 12:
                    _state.sent();
                    out.appendLine(SOURCE_MAP_PREFIX + encode(sourceMap));
                    return [
                        2,
                        out.toString()
                    ];
            }
        });
    });
    return _stringify.apply(this, arguments);
}
function stringifyStep(step, opts) {
    return _stringifyStep.apply(this, arguments);
}
function _stringifyStep() {
    _stringifyStep = /**
 * Stringifes a single step. Only the following hooks are invoked with the `flow` parameter as undefined:
 * - `beforeEachStep`
 * - `stringifyStep`
 * - `afterEachStep`
 */ _async_to_generator(function(step, opts) {
        var _ext_beforeEachStep, _ext_afterEachStep, ext, _opts_indentation, _opts_writer, out;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!opts) {
                        opts = {};
                    }
                    ext = opts.extension;
                    if (!ext) {
                        ext = new PuppeteerStringifyExtension();
                    }
                    if (!opts.indentation) {
                        opts.indentation = '  ';
                    }
                    out = (_opts_writer = opts.writer) !== null && _opts_writer !== void 0 ? _opts_writer : new InMemoryLineWriter((_opts_indentation = opts.indentation) !== null && _opts_indentation !== void 0 ? _opts_indentation : '  ');
                    return [
                        4,
                        (_ext_beforeEachStep = ext.beforeEachStep) === null || _ext_beforeEachStep === void 0 ? void 0 : _ext_beforeEachStep.call(ext, out, step)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        ext.stringifyStep(out, step)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        (_ext_afterEachStep = ext.afterEachStep) === null || _ext_afterEachStep === void 0 ? void 0 : _ext_afterEachStep.call(ext, out, step)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        out.toString()
                    ];
            }
        });
    });
    return _stringifyStep.apply(this, arguments);
}
function isSourceMapLine(line) {
    return line.trim().startsWith(SOURCE_MAP_PREFIX);
}
/**
 * Extracts a source map from a text.
 */ function parseSourceMap(text) {
    var lines = text.split('\n');
    for(var i = lines.length - 1; i >= 0; i--){
        var line = lines[i];
        if (isSourceMapLine(line)) {
            return decode(line.trim().substring(SOURCE_MAP_PREFIX.length));
        }
    }
    return;
}
function stripSourceMap(text) {
    var lines = text.split('\n');
    return lines.filter(function(line) {
        return !isSourceMapLine(line);
    }).join('\n');
}
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var RunnerExtension = /*#__PURE__*/ function() {
    "use strict";
    function RunnerExtension() {
        _class_call_check(this, RunnerExtension);
    }
    _create_class(RunnerExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterAllSteps",
            value: function afterAllSteps(flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "beforeEachStep",
            value: function beforeEachStep(step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "runStep",
            value: function runStep(step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterEachStep",
            value: function afterEachStep(step, flow) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return RunnerExtension;
}();
var comparators = {
    '==': function(a, b) {
        return a === b;
    },
    '>=': function(a, b) {
        return a >= b;
    },
    '<=': function(a, b) {
        return a <= b;
    }
};
function waitForTimeout(timeout) {
    return new Promise(function(resolve) {
        setTimeout(resolve, timeout);
    });
}
var _ensureAutomationEmulatation = /*#__PURE__*/ new WeakSet(), _getTimeoutForStep = /*#__PURE__*/ new WeakSet();
var PuppeteerRunnerExtension = /*#__PURE__*/ function(RunnerExtension) {
    "use strict";
    _inherits(PuppeteerRunnerExtension, RunnerExtension);
    var _super = _create_super(PuppeteerRunnerExtension);
    function PuppeteerRunnerExtension(browser, page, opts) {
        _class_call_check(this, PuppeteerRunnerExtension);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _ensureAutomationEmulatation);
        _class_private_method_init(_assert_this_initialized(_this), _getTimeoutForStep);
        _define_property(_assert_this_initialized(_this), "browser", void 0);
        _define_property(_assert_this_initialized(_this), "page", void 0);
        _define_property(_assert_this_initialized(_this), "timeout", void 0);
        _this.browser = browser;
        _this.page = page;
        _this.timeout = (opts === null || opts === void 0 ? void 0 : opts.timeout) || 5000;
        return _this;
    }
    _create_class(PuppeteerRunnerExtension, [
        {
            key: "runStep",
            value: function runStep(step, flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var timeout, page, browser, targetPage, targetFrame, frames, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, f, targetPageOrFrame, localFrame;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                timeout = _class_private_method_get(_this, _getTimeoutForStep, getTimeoutForStep).call(_this, step, flow);
                                page = _this.page;
                                browser = _this.browser;
                                return [
                                    4,
                                    getTargetPageForStep(browser, page, step, timeout)
                                ];
                            case 1:
                                targetPage = _state.sent();
                                targetFrame = null;
                                if (!(!targetPage && step.target)) return [
                                    3,
                                    3
                                ];
                                frames = page.frames();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = frames[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        f = _step.value;
                                        if (f.isOOPFrame() && f.url() === step.target) {
                                            targetFrame = f;
                                            break;
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
                                if (!!targetFrame) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    page.waitForFrame(step.target, {
                                        timeout: timeout
                                    })
                                ];
                            case 2:
                                targetFrame = _state.sent();
                                _state.label = 3;
                            case 3:
                                targetPageOrFrame = targetFrame || targetPage;
                                if (!targetPageOrFrame) {
                                    throw new Error('Target is not found for step: ' + JSON.stringify(step));
                                }
                                return [
                                    4,
                                    _class_private_method_get(_this, _ensureAutomationEmulatation, ensureAutomationEmulatation).call(_this, targetPageOrFrame)
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    4,
                                    getFrame(targetPageOrFrame, step)
                                ];
                            case 5:
                                localFrame = _state.sent();
                                return [
                                    4,
                                    _this.runStepInFrame(step, page, targetPageOrFrame, localFrame, timeout)
                                ];
                            case 6:
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
            key: "runStepInFrame",
            value: /**
     * @internal
     */ function runStepInFrame(step, mainPage, targetPageOrFrame, localFrame, timeout) {
                var _this = this;
                return _async_to_generator(function() {
                    var assertedEventsPromise, startWaitingForEvents, locatorRace, _, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                assertedEventsPromise = null;
                                startWaitingForEvents = function() {
                                    assertedEventsPromise = waitForEvents(localFrame, step, timeout);
                                };
                                locatorRace = _this.page.locatorRace;
                                _ = step.type;
                                switch(_){
                                    case StepType.DoubleClick:
                                        return [
                                            3,
                                            1
                                        ];
                                    case StepType.Click:
                                        return [
                                            3,
                                            3
                                        ];
                                    case StepType.Hover:
                                        return [
                                            3,
                                            5
                                        ];
                                    case StepType.EmulateNetworkConditions:
                                        return [
                                            3,
                                            7
                                        ];
                                    case StepType.KeyDown:
                                        return [
                                            3,
                                            9
                                        ];
                                    case StepType.KeyUp:
                                        return [
                                            3,
                                            12
                                        ];
                                    case StepType.Close:
                                        return [
                                            3,
                                            15
                                        ];
                                    case StepType.Change:
                                        return [
                                            3,
                                            18
                                        ];
                                    case StepType.SetViewport:
                                        return [
                                            3,
                                            20
                                        ];
                                    case StepType.Scroll:
                                        return [
                                            3,
                                            23
                                        ];
                                    case StepType.Navigate:
                                        return [
                                            3,
                                            28
                                        ];
                                    case StepType.WaitForElement:
                                        return [
                                            3,
                                            30
                                        ];
                                    case StepType.WaitForExpression:
                                        return [
                                            3,
                                            34
                                        ];
                                    case StepType.CustomStep:
                                        return [
                                            3,
                                            36
                                        ];
                                }
                                return [
                                    3,
                                    37
                                ];
                            case 1:
                                return [
                                    4,
                                    locatorRace(step.selectors.map(function(selector) {
                                        return localFrame.locator(selectorToPElementSelector(selector));
                                    })).setTimeout(timeout).on('action', function() {
                                        return startWaitingForEvents();
                                    }).click({
                                        count: 2,
                                        button: step.button && mouseButtonMap.get(step.button),
                                        delay: step.duration,
                                        offset: {
                                            x: step.offsetX,
                                            y: step.offsetY
                                        }
                                    })
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 3:
                                return [
                                    4,
                                    locatorRace(step.selectors.map(function(selector) {
                                        return localFrame.locator(selectorToPElementSelector(selector));
                                    })).setTimeout(timeout).on('action', function() {
                                        return startWaitingForEvents();
                                    }).click({
                                        delay: step.duration,
                                        button: step.button && mouseButtonMap.get(step.button),
                                        offset: {
                                            x: step.offsetX,
                                            y: step.offsetY
                                        }
                                    })
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 5:
                                return [
                                    4,
                                    locatorRace(step.selectors.map(function(selector) {
                                        return localFrame.locator(selectorToPElementSelector(selector));
                                    })).setTimeout(timeout).on('action', function() {
                                        return startWaitingForEvents();
                                    }).hover()
                                ];
                            case 6:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 7:
                                startWaitingForEvents();
                                return [
                                    4,
                                    mainPage.emulateNetworkConditions(step)
                                ];
                            case 8:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 9:
                                startWaitingForEvents();
                                return [
                                    4,
                                    mainPage.keyboard.down(step.key)
                                ];
                            case 10:
                                _state.sent();
                                return [
                                    4,
                                    waitForTimeout(100)
                                ];
                            case 11:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 12:
                                startWaitingForEvents();
                                return [
                                    4,
                                    mainPage.keyboard.up(step.key)
                                ];
                            case 13:
                                _state.sent();
                                return [
                                    4,
                                    waitForTimeout(100)
                                ];
                            case 14:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 15:
                                if (!('close' in targetPageOrFrame)) return [
                                    3,
                                    17
                                ];
                                startWaitingForEvents();
                                return [
                                    4,
                                    targetPageOrFrame.close()
                                ];
                            case 16:
                                _state.sent();
                                _state.label = 17;
                            case 17:
                                return [
                                    3,
                                    38
                                ];
                            case 18:
                                return [
                                    4,
                                    locatorRace(step.selectors.map(function(selector) {
                                        return localFrame.locator(selectorToPElementSelector(selector));
                                    })).on('action', function() {
                                        return startWaitingForEvents();
                                    }).setTimeout(timeout).fill(step.value)
                                ];
                            case 19:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 20:
                                if (!('setViewport' in targetPageOrFrame)) return [
                                    3,
                                    22
                                ];
                                startWaitingForEvents();
                                return [
                                    4,
                                    targetPageOrFrame.setViewport(step)
                                ];
                            case 21:
                                _state.sent();
                                _state.label = 22;
                            case 22:
                                return [
                                    3,
                                    38
                                ];
                            case 23:
                                if (!('selectors' in step)) return [
                                    3,
                                    25
                                ];
                                return [
                                    4,
                                    locatorRace(step.selectors.map(function(selector) {
                                        return localFrame.locator(selectorToPElementSelector(selector));
                                    })).on('action', function() {
                                        return startWaitingForEvents();
                                    }).setTimeout(timeout).scroll({
                                        scrollLeft: step.x || 0,
                                        scrollTop: step.y || 0
                                    })
                                ];
                            case 24:
                                _state.sent();
                                return [
                                    3,
                                    27
                                ];
                            case 25:
                                startWaitingForEvents();
                                return [
                                    4,
                                    localFrame.evaluate(function(x, y) {
                                        /* c8 ignore start */ window.scroll(x, y);
                                    /* c8 ignore stop */ }, step.x || 0, step.y || 0)
                                ];
                            case 26:
                                _state.sent();
                                _state.label = 27;
                            case 27:
                                return [
                                    3,
                                    38
                                ];
                            case 28:
                                startWaitingForEvents();
                                return [
                                    4,
                                    localFrame.goto(step.url)
                                ];
                            case 29:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 30:
                                _state.trys.push([
                                    30,
                                    32,
                                    ,
                                    33
                                ]);
                                startWaitingForEvents();
                                return [
                                    4,
                                    waitForElement(step, localFrame, timeout)
                                ];
                            case 31:
                                _state.sent();
                                return [
                                    3,
                                    33
                                ];
                            case 32:
                                err = _state.sent();
                                if (err.message === 'Timed out') {
                                    throw new Error('waitForElement timed out. The element(s) could not be found.');
                                } else {
                                    throw err;
                                }
                                return [
                                    3,
                                    33
                                ];
                            case 33:
                                return [
                                    3,
                                    38
                                ];
                            case 34:
                                startWaitingForEvents();
                                return [
                                    4,
                                    localFrame.waitForFunction(step.expression, {
                                        timeout: timeout
                                    })
                                ];
                            case 35:
                                _state.sent();
                                return [
                                    3,
                                    38
                                ];
                            case 36:
                                {
                                    // TODO implement these steps
                                    return [
                                        3,
                                        38
                                    ];
                                }
                                _state.label = 37;
                            case 37:
                                assertAllStepTypesAreHandled(step);
                                _state.label = 38;
                            case 38:
                                return [
                                    4,
                                    assertedEventsPromise
                                ];
                            case 39:
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
    return PuppeteerRunnerExtension;
}(RunnerExtension);
function ensureAutomationEmulatation(pageOrFrame) {
    return _ensureAutomationEmulatation1.apply(this, arguments);
}
function _ensureAutomationEmulatation1() {
    _ensureAutomationEmulatation1 = _async_to_generator(function(pageOrFrame) {
        var e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        pageOrFrame._client().send('Emulation.setAutomationOverride', {
                            enabled: true
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    e = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _ensureAutomationEmulatation1.apply(this, arguments);
}
function getTimeoutForStep(step, flow) {
    return step.timeout || (flow === null || flow === void 0 ? void 0 : flow.timeout) || this.timeout;
}
var PuppeteerRunnerOwningBrowserExtension = /*#__PURE__*/ function(PuppeteerRunnerExtension) {
    "use strict";
    _inherits(PuppeteerRunnerOwningBrowserExtension, PuppeteerRunnerExtension);
    var _super = _create_super(PuppeteerRunnerOwningBrowserExtension);
    function PuppeteerRunnerOwningBrowserExtension() {
        _class_call_check(this, PuppeteerRunnerOwningBrowserExtension);
        return _super.apply(this, arguments);
    }
    _create_class(PuppeteerRunnerOwningBrowserExtension, [
        {
            key: "afterAllSteps",
            value: function afterAllSteps() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.browser.close()
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
    return PuppeteerRunnerOwningBrowserExtension;
}(PuppeteerRunnerExtension);
function getFrame(pageOrFrame, step) {
    return _getFrame.apply(this, arguments);
}
function _getFrame() {
    _getFrame = _async_to_generator(function(pageOrFrame, step) {
        var frame, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, index;
        return _ts_generator(this, function(_state) {
            frame = 'mainFrame' in pageOrFrame ? pageOrFrame.mainFrame() : pageOrFrame;
            if ('frame' in step && step.frame) {
                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(_iterator = step.frame[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        index = _step.value;
                        frame = frame.childFrames()[index];
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
            }
            return [
                2,
                frame
            ];
        });
    });
    return _getFrame.apply(this, arguments);
}
function getTargetPageForStep(browser, page, step, timeout) {
    return _getTargetPageForStep.apply(this, arguments);
}
function _getTargetPageForStep() {
    _getTargetPageForStep = _async_to_generator(function(browser, page, step, timeout) {
        var target, targetPage;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!step.target || step.target === 'main') {
                        return [
                            2,
                            page
                        ];
                    }
                    return [
                        4,
                        browser.waitForTarget(function(t) {
                            return t.url() === step.target;
                        }, {
                            timeout: timeout
                        })
                    ];
                case 1:
                    target = _state.sent();
                    return [
                        4,
                        target.page()
                    ];
                case 2:
                    targetPage = _state.sent();
                    if (!targetPage) {
                        return [
                            2,
                            null
                        ];
                    }
                    targetPage.setDefaultTimeout(timeout);
                    return [
                        2,
                        targetPage
                    ];
            }
        });
    });
    return _getTargetPageForStep.apply(this, arguments);
}
function waitForEvents(pageOrFrame, step, timeout) {
    return _waitForEvents.apply(this, arguments);
}
function _waitForEvents() {
    _waitForEvents = _async_to_generator(function(pageOrFrame, step, timeout) {
        var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    promises = [];
                    if (step.assertedEvents) {
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = step.assertedEvents[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                event = _step.value;
                                switch(event.type){
                                    case AssertedEventType.Navigation:
                                        {
                                            promises.push(pageOrFrame.waitForNavigation({
                                                timeout: timeout
                                            }));
                                            continue;
                                        }
                                    default:
                                        throw new Error("Event type ".concat(event.type, " is not supported"));
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
                    }
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _waitForEvents.apply(this, arguments);
}
function waitForElement(step, frame, timeout) {
    return _waitForElement.apply(this, arguments);
}
function _waitForElement() {
    _waitForElement = _async_to_generator(function(step, frame, timeout) {
        var _step_count, count, _step_operator, operator, _step_visible, visible, properties, attributes, compFn;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _step_count = step.count, count = _step_count === void 0 ? 1 : _step_count, _step_operator = step.operator, operator = _step_operator === void 0 ? '>=' : _step_operator, _step_visible = step.visible, visible = _step_visible === void 0 ? true : _step_visible, properties = step.properties, attributes = step.attributes;
                    compFn = comparators[operator];
                    return [
                        4,
                        waitForFunction(/*#__PURE__*/ _async_to_generator(function() {
                            var _frame, elements, result, elementsHandle;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            querySelectorsAll(step.selectors, frame)
                                        ];
                                    case 1:
                                        elements = _state.sent();
                                        result = compFn(elements.length, count);
                                        return [
                                            4,
                                            (_frame = frame).evaluateHandle.apply(_frame, [
                                                function() {
                                                    for(var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++){
                                                        elements[_key] = arguments[_key];
                                                    }
                                                    return elements;
                                                }
                                            ].concat(_to_consumable_array(elements)))
                                        ];
                                    case 2:
                                        elementsHandle = _state.sent();
                                        return [
                                            4,
                                            Promise.all(elements.map(function(element) {
                                                return element.dispose();
                                            }))
                                        ];
                                    case 3:
                                        _state.sent();
                                        if (!(result && (properties || attributes))) return [
                                            3,
                                            5
                                        ];
                                        return [
                                            4,
                                            elementsHandle.evaluate(function(elements, properties, attributes) {
                                                if (attributes) {
                                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                    try {
                                                        for(var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                            var element = _step.value;
                                                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                                            try {
                                                                for(var _iterator1 = Object.entries(attributes)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                                    var _step_value = _sliced_to_array(_step1.value, 2), name = _step_value[0], value = _step_value[1];
                                                                    if (element.getAttribute(name) !== value) {
                                                                        return false;
                                                                    }
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
                                                }
                                                if (properties) {
                                                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                                    try {
                                                        for(var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                                            var element1 = _step2.value;
                                                            if (!isDeepMatch(properties, element1)) {
                                                                return false;
                                                            }
                                                        }
                                                    } catch (err) {
                                                        _didIteratorError2 = true;
                                                        _iteratorError2 = err;
                                                    } finally{
                                                        try {
                                                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                                _iterator2.return();
                                                            }
                                                        } finally{
                                                            if (_didIteratorError2) {
                                                                throw _iteratorError2;
                                                            }
                                                        }
                                                    }
                                                }
                                                return true;
                                                function isDeepMatch(a, b) {
                                                    if (a === b) {
                                                        return true;
                                                    }
                                                    if (a && !b || !a && b) {
                                                        return false;
                                                    }
                                                    if (!_instanceof(a, Object) || !_instanceof(b, Object)) {
                                                        return false;
                                                    }
                                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                                    try {
                                                        for(var _iterator = Object.entries(a)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                                                            if (!isDeepMatch(value, b[key])) {
                                                                return false;
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
                                                    return true;
                                                }
                                            }, properties, attributes)
                                        ];
                                    case 4:
                                        result = _state.sent();
                                        _state.label = 5;
                                    case 5:
                                        return [
                                            4,
                                            elementsHandle.dispose()
                                        ];
                                    case 6:
                                        _state.sent();
                                        return [
                                            2,
                                            result === visible
                                        ];
                                }
                            });
                        }), timeout)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _waitForElement.apply(this, arguments);
}
function querySelectorsAll(selectors, frame) {
    return _querySelectorsAll.apply(this, arguments);
}
function _querySelectorsAll() {
    _querySelectorsAll = _async_to_generator(function(selectors, frame) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, selector, result, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = selectors[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    selector = _step.value;
                    return [
                        4,
                        querySelectorAll(selector, frame)
                    ];
                case 3:
                    result = _state.sent();
                    if (result.length) {
                        return [
                            2,
                            result
                        ];
                    }
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
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
                case 8:
                    return [
                        2,
                        []
                    ];
            }
        });
    });
    return _querySelectorsAll.apply(this, arguments);
}
function querySelectorAll(selector, frame) {
    return _querySelectorAll.apply(this, arguments);
}
function _querySelectorAll() {
    _querySelectorAll = _async_to_generator(function(selector, frame) {
        var elementHandles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, _ret, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!Array.isArray(selector)) {
                        selector = [
                            selector
                        ];
                    }
                    if (!selector.length) {
                        throw new Error('Empty selector provided to querySelectorAll');
                    }
                    return [
                        4,
                        frame.$$(selector[0])
                    ];
                case 1:
                    elementHandles = _state.sent();
                    if (!elementHandles.length) {
                        return [
                            2,
                            []
                        ];
                    }
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        9
                    ]);
                    _loop = function() {
                        var part;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    part = _step.value;
                                    return [
                                        4,
                                        Promise.all(elementHandles.map(function() {
                                            var _ref = _async_to_generator(function(handle) {
                                                var innerHandle, elementHandles;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            return [
                                                                4,
                                                                handle.evaluateHandle(function(el) {
                                                                    return el.shadowRoot ? el.shadowRoot : el;
                                                                })
                                                            ];
                                                        case 1:
                                                            innerHandle = _state.sent();
                                                            return [
                                                                4,
                                                                innerHandle.$$(part)
                                                            ];
                                                        case 2:
                                                            elementHandles = _state.sent();
                                                            innerHandle.dispose();
                                                            handle.dispose();
                                                            return [
                                                                2,
                                                                elementHandles
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(handle) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }()))
                                    ];
                                case 1:
                                    elementHandles = _state.sent().flat();
                                    if (!elementHandles.length) {
                                        return [
                                            2,
                                            {
                                                v: []
                                            }
                                        ];
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _iterator = selector.slice(1, selector.length)[Symbol.iterator]();
                    _state.label = 3;
                case 3:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    return [
                        5,
                        _ts_values(_loop())
                    ];
                case 4:
                    _ret = _state.sent();
                    if (_type_of(_ret) === "object") return [
                        2,
                        _ret.v
                    ];
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
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
                case 9:
                    return [
                        2,
                        elementHandles
                    ];
            }
        });
    });
    return _querySelectorAll.apply(this, arguments);
}
function waitForFunction(fn, timeout) {
    return _waitForFunction.apply(this, arguments);
}
function _waitForFunction() {
    _waitForFunction = _async_to_generator(function(fn, timeout) {
        var isActive, timeoutId, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    isActive = true;
                    timeoutId = setTimeout(function() {
                        isActive = false;
                    }, timeout);
                    _state.label = 1;
                case 1:
                    if (!isActive) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        fn()
                    ];
                case 2:
                    result = _state.sent();
                    if (result) {
                        clearTimeout(timeoutId);
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 100);
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        1
                    ];
                case 4:
                    throw new Error('Timed out');
            }
        });
    });
    return _waitForFunction.apply(this, arguments);
}
function _runStepWithHooks(extension, step, flow) {
    return __runStepWithHooks.apply(this, arguments);
}
function __runStepWithHooks() {
    __runStepWithHooks = /**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ _async_to_generator(function(extension, step, flow) {
        var _extension_beforeEachStep, _extension_afterEachStep;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (_extension_beforeEachStep = extension.beforeEachStep) === null || _extension_beforeEachStep === void 0 ? void 0 : _extension_beforeEachStep.call(extension, step, flow)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        extension.runStep(step, flow)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        (_extension_afterEachStep = extension.afterEachStep) === null || _extension_afterEachStep === void 0 ? void 0 : _extension_afterEachStep.call(extension, step, flow)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return __runStepWithHooks.apply(this, arguments);
}
var _flow = /*#__PURE__*/ new WeakMap(), _extension = /*#__PURE__*/ new WeakMap(), _aborted = /*#__PURE__*/ new WeakMap();
var Runner = /*#__PURE__*/ function() {
    "use strict";
    function Runner(extension) {
        _class_call_check(this, Runner);
        _class_private_field_init(this, _flow, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _extension, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _aborted, {
            writable: true,
            value: false
        });
        _class_private_field_set(this, _extension, extension);
    }
    _create_class(Runner, [
        {
            key: "abort",
            value: function abort() {
                _class_private_field_set(this, _aborted, true);
            }
        },
        {
            key: "flow",
            set: function set(flow) {
                _class_private_field_set(this, _flow, flow);
            }
        },
        {
            key: "runBeforeAllSteps",
            value: function runBeforeAllSteps(flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_beforeAllSteps, _$_class_private_field_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_class_private_field_get_beforeAllSteps = (_$_class_private_field_get = _class_private_field_get(_this, _extension)).beforeAllSteps) === null || _class_private_field_get_beforeAllSteps === void 0 ? void 0 : _class_private_field_get_beforeAllSteps.call(_$_class_private_field_get, flow)
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
            key: "runAfterAllSteps",
            value: function runAfterAllSteps(flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_afterAllSteps, _$_class_private_field_get;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_class_private_field_get_afterAllSteps = (_$_class_private_field_get = _class_private_field_get(_this, _extension)).afterAllSteps) === null || _class_private_field_get_afterAllSteps === void 0 ? void 0 : _class_private_field_get_afterAllSteps.call(_$_class_private_field_get, flow)
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
            key: "runStep",
            value: /**
     * Runs the provided `step` with `beforeEachStep` and `afterEachStep` hooks.
     * Parameters from the `flow` apply if the `flow` is set.
     */ function runStep(step) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _runStepWithHooks(_class_private_field_get(_this, _extension), step)
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
            key: "run",
            value: /**
     * Run all the steps in the flow
     * @returns whether all the steps are run or the execution is aborted
     */ function run() {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_beforeAllSteps, _$_class_private_field_get, _class_private_field_get_afterAllSteps, _$_class_private_field_get1, flow, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, step, _class_private_field_get_afterAllSteps1, _$_class_private_field_get2, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this, _flow)) {
                                    throw new Error('Set the flow on the runner instance before calling `run`.');
                                }
                                flow = _class_private_field_get(_this, _flow);
                                _class_private_field_set(_this, _aborted, false);
                                return [
                                    4,
                                    (_class_private_field_get_beforeAllSteps = (_$_class_private_field_get = _class_private_field_get(_this, _extension)).beforeAllSteps) === null || _class_private_field_get_beforeAllSteps === void 0 ? void 0 : _class_private_field_get_beforeAllSteps.call(_$_class_private_field_get, flow)
                                ];
                            case 1:
                                _state.sent();
                                if (_class_private_field_get(_this, _aborted)) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    9,
                                    10,
                                    11
                                ]);
                                _iterator = flow.steps[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    8
                                ];
                                step = _step.value;
                                if (!_class_private_field_get(_this, _aborted)) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    (_class_private_field_get_afterAllSteps1 = (_$_class_private_field_get2 = _class_private_field_get(_this, _extension)).afterAllSteps) === null || _class_private_field_get_afterAllSteps1 === void 0 ? void 0 : _class_private_field_get_afterAllSteps1.call(_$_class_private_field_get2, flow)
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2,
                                    false
                                ];
                            case 5:
                                return [
                                    4,
                                    _runStepWithHooks(_class_private_field_get(_this, _extension), step, flow)
                                ];
                            case 6:
                                _state.sent();
                                _state.label = 7;
                            case 7:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 8:
                                return [
                                    3,
                                    11
                                ];
                            case 9:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    11
                                ];
                            case 10:
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
                            case 11:
                                return [
                                    4,
                                    (_class_private_field_get_afterAllSteps = (_$_class_private_field_get1 = _class_private_field_get(_this, _extension)).afterAllSteps) === null || _class_private_field_get_afterAllSteps === void 0 ? void 0 : _class_private_field_get_afterAllSteps.call(_$_class_private_field_get1, flow)
                                ];
                            case 12:
                                _state.sent();
                                return [
                                    2,
                                    true
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Runner;
}();
function createRunner(flowOrExtension, maybeExtension) {
    return _createRunner.apply(this, arguments);
}
function _createRunner() {
    _createRunner = _async_to_generator(function(flowOrExtension, maybeExtension) {
        var extension, flow, runner, _, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    extension = _instanceof(flowOrExtension, RunnerExtension) ? flowOrExtension : maybeExtension;
                    flow = !_instanceof(flowOrExtension, RunnerExtension) ? flowOrExtension : undefined;
                    _ = Runner.bind;
                    if (!(extension !== null && extension !== void 0)) return [
                        3,
                        1
                    ];
                    _tmp = extension;
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        createPuppeteerRunnerOwningBrowserExtension()
                    ];
                case 2:
                    _tmp = _state.sent();
                    _state.label = 3;
                case 3:
                    runner = new (_.apply(Runner, [
                        void 0,
                        _tmp
                    ]));
                    if (flow) {
                        runner.flow = flow;
                    }
                    return [
                        2,
                        runner
                    ];
            }
        });
    });
    return _createRunner.apply(this, arguments);
}
function createPuppeteerRunnerOwningBrowserExtension() {
    return _createPuppeteerRunnerOwningBrowserExtension.apply(this, arguments);
}
function _createPuppeteerRunnerOwningBrowserExtension() {
    _createPuppeteerRunnerOwningBrowserExtension = _async_to_generator(function() {
        var _ref, puppeteer, browser, page;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'puppeteer'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                    ];
                case 1:
                    _ref = _state.sent(), puppeteer = _ref.default;
                    return [
                        4,
                        puppeteer.launch()
                    ];
                case 2:
                    browser = _state.sent();
                    return [
                        4,
                        browser.newPage()
                    ];
                case 3:
                    page = _state.sent();
                    return [
                        2,
                        new PuppeteerRunnerOwningBrowserExtension(browser, page)
                    ];
            }
        });
    });
    return _createPuppeteerRunnerOwningBrowserExtension.apply(this, arguments);
}
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ /**
 * Stringifies a user flow to a script that uses \@puppeteer/replay's own API.
 */ var PuppeteerReplayStringifyExtension = /*#__PURE__*/ function(StringifyExtension) {
    "use strict";
    _inherits(PuppeteerReplayStringifyExtension, StringifyExtension);
    var _super = _create_super(PuppeteerReplayStringifyExtension);
    function PuppeteerReplayStringifyExtension() {
        _class_call_check(this, PuppeteerReplayStringifyExtension);
        return _super.apply(this, arguments);
    }
    _create_class(PuppeteerReplayStringifyExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(out) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        out.appendLine("import url from 'url';");
                        out.appendLine("import { createRunner } from '@puppeteer/replay';");
                        out.appendLine('');
                        out.appendLine('export async function run(extension) {').startBlock();
                        out.appendLine('const runner = await createRunner(extension);');
                        out.appendLine('');
                        out.appendLine('await runner.runBeforeAllSteps();');
                        out.appendLine('');
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "afterAllSteps",
            value: function afterAllSteps(out) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        out.appendLine('');
                        out.appendLine('await runner.runAfterAllSteps();').endBlock().appendLine('}');
                        out.appendLine('');
                        out.appendLine('if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {').startBlock().appendLine('run()').endBlock().appendLine('}');
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "stringifyStep",
            value: function stringifyStep(out, step) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        out.appendLine("await runner.runStep(".concat(formatJSONAsJS(step, out.getIndent()), ");"));
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return PuppeteerReplayStringifyExtension;
}(StringifyExtension);
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ function isNavigationStep(step) {
    var _step_assertedEvents;
    return Boolean(step.type === StepType.Navigate || ((_step_assertedEvents = step.assertedEvents) === null || _step_assertedEvents === void 0 ? void 0 : _step_assertedEvents.some(function(event) {
        return event.type === AssertedEventType.Navigation;
    })));
}
function isMobileFlow(flow) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = flow.steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var step = _step.value;
            if (step.type === StepType.SetViewport) {
                return step.isMobile;
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
    return false;
}
var _isProcessingTimespan = /*#__PURE__*/ new WeakMap();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var LighthouseStringifyExtension = /*#__PURE__*/ function(PuppeteerStringifyExtension) {
    "use strict";
    _inherits(LighthouseStringifyExtension, PuppeteerStringifyExtension);
    var _super = _create_super(LighthouseStringifyExtension);
    function LighthouseStringifyExtension() {
        _class_call_check(this, LighthouseStringifyExtension);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _isProcessingTimespan, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(LighthouseStringifyExtension, [
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(out, flow) {
                var _this = this;
                var _this1 = this, _superprop_get_beforeAllSteps = function() {
                    return _get(_get_prototype_of(LighthouseStringifyExtension.prototype), "beforeAllSteps", _this);
                };
                return _async_to_generator(function() {
                    var flags;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                out.appendLine("const fs = require('fs');");
                                return [
                                    4,
                                    _superprop_get_beforeAllSteps().call(_this1, out, flow)
                                ];
                            case 1:
                                _state.sent();
                                out.appendLine("const lhApi = await import('lighthouse'); // v10.0.0 or later");
                                flags = {
                                    screenEmulation: {
                                        disabled: true
                                    }
                                };
                                out.appendLine("const flags = ".concat(formatJSONAsJS(flags, out.getIndent())));
                                if (isMobileFlow(flow)) {
                                    out.appendLine("const config = undefined;");
                                } else {
                                    out.appendLine('const config = lhApi.desktopConfig;');
                                }
                                out.appendLine("const lhFlow = await lhApi.startFlow(page, {name: ".concat(formatJSONAsJS(flow.title, out.getIndent()), ", config, flags});"));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stringifyStep",
            value: function stringifyStep(out, step, flow) {
                var _this = this;
                var _this1 = this, _superprop_get_stringifyStep = function() {
                    return _get(_get_prototype_of(LighthouseStringifyExtension.prototype), "stringifyStep", _this);
                };
                return _async_to_generator(function() {
                    var isNavigation;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!(step.type === StepType.SetViewport)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _superprop_get_stringifyStep().call(_this1, out, step, flow)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                            case 2:
                                isNavigation = isNavigationStep(step);
                                if (isNavigation) {
                                    if (_class_private_field_get(_this1, _isProcessingTimespan)) {
                                        out.appendLine("await lhFlow.endTimespan();");
                                        _class_private_field_set(_this1, _isProcessingTimespan, false);
                                    }
                                    out.appendLine("await lhFlow.startNavigation();");
                                } else if (!_class_private_field_get(_this1, _isProcessingTimespan)) {
                                    out.appendLine("await lhFlow.startTimespan();");
                                    _class_private_field_set(_this1, _isProcessingTimespan, true);
                                }
                                return [
                                    4,
                                    _superprop_get_stringifyStep().call(_this1, out, step, flow)
                                ];
                            case 3:
                                _state.sent();
                                if (isNavigation) {
                                    out.appendLine("await lhFlow.endNavigation();");
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
            key: "afterAllSteps",
            value: function afterAllSteps(out, flow) {
                var _this = this;
                var _this1 = this, _superprop_get_afterAllSteps = function() {
                    return _get(_get_prototype_of(LighthouseStringifyExtension.prototype), "afterAllSteps", _this);
                };
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_class_private_field_get(_this1, _isProcessingTimespan)) {
                                    out.appendLine("await lhFlow.endTimespan();");
                                }
                                out.appendLine("const lhFlowReport = await lhFlow.generateReport();");
                                out.appendLine("fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)");
                                return [
                                    4,
                                    _superprop_get_afterAllSteps().call(_this1, out, flow)
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
    return LighthouseStringifyExtension;
}(PuppeteerStringifyExtension);
var _isTimespanRunning = /*#__PURE__*/ new WeakMap(), _isNavigationRunning = /*#__PURE__*/ new WeakMap(), _lhFlow = /*#__PURE__*/ new WeakMap();
/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */ var LighthouseRunnerExtension = /*#__PURE__*/ function(PuppeteerRunnerExtension) {
    "use strict";
    _inherits(LighthouseRunnerExtension, PuppeteerRunnerExtension);
    var _super = _create_super(LighthouseRunnerExtension);
    function LighthouseRunnerExtension() {
        _class_call_check(this, LighthouseRunnerExtension);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _isTimespanRunning, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isNavigationRunning, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _lhFlow, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(LighthouseRunnerExtension, [
        {
            key: "createFlowResult",
            value: function createFlowResult() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        if (!_class_private_field_get(_this, _lhFlow)) {
                            throw new Error('Cannot get flow result before running the flow');
                        }
                        return [
                            2,
                            _class_private_field_get(_this, _lhFlow).createFlowResult()
                        ];
                    });
                })();
            }
        },
        {
            key: "beforeAllSteps",
            value: function beforeAllSteps(flow) {
                var _this = this;
                var _this1 = this, _superprop_get_beforeAllSteps = function() {
                    return _get(_get_prototype_of(LighthouseRunnerExtension.prototype), "beforeAllSteps", _this);
                };
                return _async_to_generator(function() {
                    var _super_beforeAllSteps, _ref, startFlow, desktopConfig, config, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_super_beforeAllSteps = _superprop_get_beforeAllSteps()) === null || _super_beforeAllSteps === void 0 ? void 0 : _super_beforeAllSteps.call(_this1, flow)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'lighthouse'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                                ];
                            case 2:
                                _ref = _state.sent(), startFlow = _ref.startFlow, desktopConfig = _ref.desktopConfig;
                                config = undefined;
                                if (!isMobileFlow(flow)) {
                                    config = desktopConfig;
                                }
                                _tmp = [
                                    _this1,
                                    _lhFlow
                                ];
                                return [
                                    4,
                                    startFlow(_this1.page, {
                                        config: config,
                                        flags: {
                                            screenEmulation: {
                                                disabled: true
                                            }
                                        },
                                        name: flow.title
                                    })
                                ];
                            case 3:
                                _class_private_field_set.apply(void 0, _tmp.concat([
                                    _state.sent()
                                ]));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "beforeEachStep",
            value: function beforeEachStep(step, flow) {
                var _this = this;
                var _this1 = this, _superprop_get_beforeEachStep = function() {
                    return _get(_get_prototype_of(LighthouseRunnerExtension.prototype), "beforeEachStep", _this);
                };
                return _async_to_generator(function() {
                    var _super_beforeEachStep;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (_super_beforeEachStep = _superprop_get_beforeEachStep()) === null || _super_beforeEachStep === void 0 ? void 0 : _super_beforeEachStep.call(_this1, step, flow)
                                ];
                            case 1:
                                _state.sent();
                                if (step.type === StepType.SetViewport) return [
                                    2
                                ];
                                if (!isNavigationStep(step)) return [
                                    3,
                                    5
                                ];
                                if (!_class_private_field_get(_this1, _isTimespanRunning)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this1, _lhFlow).endTimespan()
                                ];
                            case 2:
                                _state.sent();
                                _class_private_field_set(_this1, _isTimespanRunning, false);
                                _state.label = 3;
                            case 3:
                                return [
                                    4,
                                    _class_private_field_get(_this1, _lhFlow).startNavigation()
                                ];
                            case 4:
                                _state.sent();
                                _class_private_field_set(_this1, _isNavigationRunning, true);
                                return [
                                    3,
                                    7
                                ];
                            case 5:
                                if (!!_class_private_field_get(_this1, _isTimespanRunning)) return [
                                    3,
                                    7
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this1, _lhFlow).startTimespan()
                                ];
                            case 6:
                                _state.sent();
                                _class_private_field_set(_this1, _isTimespanRunning, true);
                                _state.label = 7;
                            case 7:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "afterEachStep",
            value: function afterEachStep(step, flow) {
                var _this = this;
                var _this1 = this, _superprop_get_afterEachStep = function() {
                    return _get(_get_prototype_of(LighthouseRunnerExtension.prototype), "afterEachStep", _this);
                };
                return _async_to_generator(function() {
                    var _super_afterEachStep;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this1, _isNavigationRunning)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this1, _lhFlow).endNavigation()
                                ];
                            case 1:
                                _state.sent();
                                _class_private_field_set(_this1, _isNavigationRunning, false);
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    (_super_afterEachStep = _superprop_get_afterEachStep()) === null || _super_afterEachStep === void 0 ? void 0 : _super_afterEachStep.call(_this1, step, flow)
                                ];
                            case 3:
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
            key: "afterAllSteps",
            value: function afterAllSteps(flow) {
                var _this = this;
                var _this1 = this, _superprop_get_afterAllSteps = function() {
                    return _get(_get_prototype_of(LighthouseRunnerExtension.prototype), "afterAllSteps", _this);
                };
                return _async_to_generator(function() {
                    var _super_afterAllSteps;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_class_private_field_get(_this1, _isTimespanRunning)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this1, _lhFlow).endTimespan()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    (_super_afterAllSteps = _superprop_get_afterAllSteps()) === null || _super_afterAllSteps === void 0 ? void 0 : _super_afterAllSteps.call(_this1, flow)
                                ];
                            case 3:
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
    return LighthouseRunnerExtension;
}(PuppeteerRunnerExtension);
 //# sourceMappingURL=main.js.map


}),

}]);