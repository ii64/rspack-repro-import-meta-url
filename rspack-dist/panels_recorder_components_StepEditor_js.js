"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_StepEditor_js"], {
"./panels/recorder/components/StepEditor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditorState: function() { return EditorState; },
  StepEditedEvent: function() { return StepEditedEvent; },
  StepEditor: function() { return StepEditor; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/suggestion_input/suggestion_input.js */ "./ui/components/suggestion_input/suggestion_input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/controllers.js */ "./panels/recorder/controllers/controllers.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _util_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
/* harmony import */var _stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stepEditor.css.js */ "./panels/recorder/components/stepEditor.css.js");
/* harmony import */var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/components/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
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
function _class_check_private_static_field_descriptor(descriptor, action) {
    if (descriptor === undefined) {
        throw new TypeError("attempted to " + action + " private static field before its declaration");
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
function _class_static_private_field_spec_get(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<devtools-button\n      @click=",
        "\n      .title=",
        '\n      class="selector-picker"\n      .size=',
        "\n      .iconName=",
        "\n      .active=",
        "\n      .variant=",
        "\n      jslog=",
        "\n    ></devtools-button>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n              <div class="error">\n                ',
        "\n              </div>\n            "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div\n              class="row-buttons wrapped gap row regular-font no-margin"\n            >\n              ',
        "\n            </div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="wrapper" jslog=',
        ">\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        " ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      <devtools-button\n        title=",
        "\n        .size=",
        "\n        .iconName=",
        "\n        .variant=",
        "\n        jslog=",
        '\n        class="inline-button ',
        '"\n        @click=',
        "\n      ></devtools-button>\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<devtools-button\n      .size=",
        "\n      .iconName=",
        "\n      .variant=",
        "\n      .title=",
        '\n      class="inline-button delete-row"\n      data-attribute=',
        "\n      jslog=",
        "\n      @click=",
        "\n    ></devtools-button>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '<div class="row attribute" data-attribute="type" jslog=',
        '>\n      <div>type<span class="separator">:</span></div>\n      <devtools-suggestion-input\n        .disabled=',
        "\n        .options=",
        "\n        .placeholder=",
        "\n        .value=",
        "\n        @blur=",
        "\n      ></devtools-suggestion-input>\n    </div>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '<div class="row attribute" data-attribute=',
        " jslog=",
        ">\n      <div>",
        '<span class="separator">:</span></div>\n      <devtools-suggestion-input\n        .disabled=',
        "\n        .placeholder=",
        "\n        .value=",
        "\n        .mimeType=",
        "\n        @blur=",
        "\n      ></devtools-suggestion-input>\n      ",
        "\n    </div>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '\n            <div class="padded row">\n              <devtools-suggestion-input\n                .disabled=',
        "\n                .placeholder=",
        "\n                .value=",
        "\n                data-path=",
        "\n                @blur=",
        "\n              ></devtools-suggestion-input>\n              ",
        "\n              ",
        "\n            </div>\n          "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        '\n      <div class="attribute" data-attribute="frame" jslog=',
        '>\n        <div class="row">\n          <div>frame<span class="separator">:</span></div>\n          ',
        "\n        </div>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        '<div\n              class="double padded row"\n              data-selector-path="',
        ".",
        '"\n            >\n              <devtools-suggestion-input\n                .disabled=',
        "\n                .placeholder=",
        "\n                .value=",
        "\n                data-path=",
        "\n                @blur=",
        "\n              ></devtools-suggestion-input>\n              ",
        "\n              ",
        "\n            </div>"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        '<div class="padded row" data-selector-path=',
        ">\n            <div>selector #",
        '<span class="separator">:</span></div>\n            ',
        "\n            ",
        "\n          </div>\n          ",
        ""
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        '<div class="attribute" data-attribute="selectors" jslog=',
        '>\n      <div class="row">\n        <div>selectors<span class="separator">:</span></div>\n        <devtools-recorder-selector-picker-button\n          @selectorpicked=',
        "\n          .disabled=",
        "\n        ></devtools-recorder-selector-picker-button>\n        ",
        "\n      </div>\n      ",
        "\n    </div>"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        ' <div class="padded row" jslog=',
        '>\n            <div>type<span class="separator">:</span></div>\n            <div>',
        '</div>\n          </div>\n          <div class="padded row" jslog=',
        '>\n            <div>title<span class="separator">:</span></div>\n            <devtools-suggestion-input\n              .disabled=',
        "\n              .placeholder=",
        "\n              .value=",
        "\n              @blur=",
        '\n            ></devtools-suggestion-input>\n          </div>\n          <div class="padded row" jslog=',
        '>\n            <div>url<span class="separator">:</span></div>\n            <devtools-suggestion-input\n              .disabled=',
        "\n              .placeholder=",
        "\n              .value=",
        "\n              @blur=",
        "\n            ></devtools-suggestion-input>\n          </div>"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        '<div class="attribute" data-attribute="assertedEvents" jslog=',
        '>\n      <div class="row">\n        <div>asserted events<span class="separator">:</span></div>\n        ',
        "\n      </div>\n      ",
        "\n    </div> "
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        '<div class="padded row" jslog=',
        ">\n          <devtools-suggestion-input\n            .disabled=",
        "\n            .placeholder=",
        "\n            .value=",
        "\n            data-path=",
        "\n            jslog=",
        "\n            @blur=",
        '\n          ></devtools-suggestion-input>\n          <span class="separator">:</span>\n          <devtools-suggestion-input\n            .disabled=',
        "\n            .placeholder=",
        "\n            .value=",
        "\n            data-path=",
        "\n            @blur=",
        "\n          ></devtools-suggestion-input>\n          ",
        "\n          ",
        "\n        </div>"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        '<div class="attribute" data-attribute="attributes" jslog=',
        '>\n      <div class="row">\n        <div>attributes<span class="separator">:</span></div>\n        ',
        "\n      </div>\n      ",
        "\n    </div>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "<devtools-button\n          .variant=",
        '\n          class="add-row"\n          data-attribute=',
        "\n          jslog=",
        "\n          @click=",
        "\n        >\n          ",
        "\n        </devtools-button>"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
var _picker, _handleClickEvent, _RecorderSelectorPickerButton, _renderedAttributes, _commit, _handleSelectorPickedEvent, _handleAddOrRemoveClick, _handleKeyDownEvent, _handleInputBlur, _handleTypeInputBlur, _handleAddRowClickEvent, _renderInlineButton, _renderDeleteButton, _renderTypeRow, _renderRow, _renderFrameRow, _renderSelectorsRow, _renderAssertedEvents, _renderAttributesRow, _renderAddRowButtons, _ensureFocus, _StepEditor;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Decorators, Directives = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.LitElement;
var customElement = Decorators.customElement, property = Decorators.property, state = Decorators.state;
var live = Directives.live;
var typeConverters = Object.freeze({
    string: function(value) {
        return value.trim();
    },
    number: function(value) {
        var number = parseFloat(value);
        if (Number.isNaN(number)) {
            return 0;
        }
        return number;
    },
    boolean: function(value) {
        if (value.toLowerCase() === 'true') {
            return true;
        }
        return false;
    }
});
var dataTypeByAttribute = Object.freeze({
    selectors: 'string',
    offsetX: 'number',
    offsetY: 'number',
    target: 'string',
    frame: 'number',
    assertedEvents: 'string',
    value: 'string',
    key: 'string',
    operator: 'string',
    count: 'number',
    expression: 'string',
    x: 'number',
    y: 'number',
    url: 'string',
    type: 'string',
    timeout: 'number',
    duration: 'number',
    button: 'string',
    deviceType: 'string',
    width: 'number',
    height: 'number',
    deviceScaleFactor: 'number',
    isMobile: 'boolean',
    hasTouch: 'boolean',
    isLandscape: 'boolean',
    download: 'number',
    upload: 'number',
    latency: 'number',
    name: 'string',
    parameters: 'string',
    visible: 'boolean',
    properties: 'string',
    attributes: 'string'
});
var defaultValuesByAttribute = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)({
    selectors: [
        [
            '.cls'
        ]
    ],
    offsetX: 1,
    offsetY: 1,
    target: 'main',
    frame: [
        0
    ],
    assertedEvents: [
        {
            type: 'navigation',
            url: 'https://example.com',
            title: 'Title'
        }
    ],
    value: 'Value',
    key: 'Enter',
    operator: '>=',
    count: 1,
    expression: 'true',
    x: 0,
    y: 0,
    url: 'https://example.com',
    timeout: 5000,
    duration: 50,
    deviceType: 'mouse',
    button: 'primary',
    type: 'click',
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: true,
    download: 1000,
    upload: 1000,
    latency: 25,
    name: 'customParam',
    parameters: '{}',
    properties: '{}',
    attributes: [
        {
            name: 'attribute',
            value: 'value'
        }
    ],
    visible: true
});
var _obj;
var attributesByType = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)((_obj = {}, _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Click, {
    required: [
        'selectors',
        'offsetX',
        'offsetY'
    ],
    optional: [
        'assertedEvents',
        'button',
        'deviceType',
        'duration',
        'frame',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.DoubleClick, {
    required: [
        'offsetX',
        'offsetY',
        'selectors'
    ],
    optional: [
        'assertedEvents',
        'button',
        'deviceType',
        'frame',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Hover, {
    required: [
        'selectors'
    ],
    optional: [
        'assertedEvents',
        'frame',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Change, {
    required: [
        'selectors',
        'value'
    ],
    optional: [
        'assertedEvents',
        'frame',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyDown, {
    required: [
        'key'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyUp, {
    required: [
        'key'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Scroll, {
    required: [],
    optional: [
        'assertedEvents',
        'frame',
        'target',
        'timeout',
        'x',
        'y'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Close, {
    required: [],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Navigate, {
    required: [
        'url'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement, {
    required: [
        'selectors'
    ],
    optional: [
        'assertedEvents',
        'attributes',
        'count',
        'frame',
        'operator',
        'properties',
        'target',
        'timeout',
        'visible'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForExpression, {
    required: [
        'expression'
    ],
    optional: [
        'assertedEvents',
        'frame',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.CustomStep, {
    required: [
        'name',
        'parameters'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.EmulateNetworkConditions, {
    required: [
        'download',
        'latency',
        'upload'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _define_property(_obj, _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.SetViewport, {
    required: [
        'deviceScaleFactor',
        'hasTouch',
        'height',
        'isLandscape',
        'isMobile',
        'width'
    ],
    optional: [
        'assertedEvents',
        'target',
        'timeout'
    ]
}), _obj));
var UIStrings = {
    /**
     *@description The text that is disabled when the steps were not saved due to an error. The error message itself is always in English and not translated.
     *@example {Saving failed} error
     */ notSaved: 'Not saved: {error}',
    /**
     *@description The button title that adds a new attribute to the form.
     *@example {timeout} attributeName
     */ addAttribute: 'Add {attributeName}',
    /**
     *@description The title of a button that deletes an attribute from the form.
     */ deleteRow: 'Delete row',
    /**
     *@description The title of a button that allows you to select an element on the page and update CSS/ARIA selectors.
     */ selectorPicker: 'Select an element in the page to update selectors',
    /**
     *@description The title of a button that adds a new input field for the entry of the frame index. Frame index is the number of the frame within the page's frame tree.
     */ addFrameIndex: 'Add frame index within the frame tree',
    /**
     *@description The title of a button that removes a frame index field from the form.
     */ removeFrameIndex: 'Remove frame index',
    /**
     *@description The title of a button that adds a field to input a part of a selector in the editor form.
     */ addSelectorPart: 'Add a selector part',
    /**
     *@description The title of a button that removes a field to input a part of a selector in the editor form.
     */ removeSelectorPart: 'Remove a selector part',
    /**
     *@description The title of a button that adds a field to input a selector in the editor form.
     */ addSelector: 'Add a selector',
    /**
     *@description The title of a button that removes a field to input a selector in the editor form.
     */ removeSelector: 'Remove a selector',
    /**
     *@description The error message display when a user enters a type in the input not associates with any existing types.
     */ unknownActionType: 'Unknown action type.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/StepEditor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var StepEditedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(StepEditedEvent, Event1);
    var _super = _create_super(StepEditedEvent);
    function StepEditedEvent(step) {
        _class_call_check(this, StepEditedEvent);
        var _this;
        _this = _super.call(this, StepEditedEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = step;
        return _this;
    }
    return StepEditedEvent;
}(_wrap_native_super(Event));
_define_property(StepEditedEvent, "eventName", 'stepedited');
// Makes use of the fact that JSON values get their undefined values cleaned
// after stringification.
var cleanUndefineds = function(value) {
    return JSON.parse(JSON.stringify(value));
};
var EditorState = /*#__PURE__*/ function() {
    "use strict";
    function EditorState() {
        _class_call_check(this, EditorState);
    }
    _create_class(EditorState, null, [
        {
            key: "default",
            value: function _default(type) {
                var _this = this;
                return _async_to_generator(function() {
                    var state, attributes, promise, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                state = {
                                    type: type
                                };
                                attributes = attributesByType[state.type];
                                promise = Promise.resolve();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    _loop = function() {
                                        var attribute = _step.value;
                                        promise = Promise.all([
                                            promise,
                                            _async_to_generator(function() {
                                                var _, _tmp, _tmp1;
                                                return _ts_generator(this, function(_state) {
                                                    switch(_state.label){
                                                        case 0:
                                                            _ = Object.assign;
                                                            _tmp = [
                                                                state
                                                            ];
                                                            _tmp1 = [
                                                                {},
                                                                attribute
                                                            ];
                                                            return [
                                                                4,
                                                                _this.defaultByAttribute(state, attribute)
                                                            ];
                                                        case 1:
                                                            return [
                                                                2,
                                                                _.apply(Object, _tmp.concat([
                                                                    _define_property.apply(void 0, _tmp1.concat([
                                                                        _state.sent()
                                                                    ]))
                                                                ]))
                                                            ];
                                                    }
                                                });
                                            })()
                                        ]);
                                    };
                                    for(_iterator = attributes.required[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                                return [
                                    4,
                                    promise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    Object.freeze(state)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "defaultByAttribute",
            value: function defaultByAttribute(_state, attribute) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_static_private_field_spec_get(_this, EditorState, _puppeteer).run(function(puppeteer) {
                                switch(attribute){
                                    case 'assertedEvents':
                                        {
                                            return (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(defaultValuesByAttribute.assertedEvents, new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                                0: {
                                                    url: puppeteer.page.url() || defaultValuesByAttribute.assertedEvents[0].url
                                                }
                                            }));
                                        }
                                    case 'url':
                                        {
                                            return puppeteer.page.url() || defaultValuesByAttribute.url;
                                        }
                                    case 'height':
                                        {
                                            return puppeteer.page.evaluate(function() {
                                                return visualViewport.height;
                                            }) || defaultValuesByAttribute.height;
                                        }
                                    case 'width':
                                        {
                                            return puppeteer.page.evaluate(function() {
                                                return visualViewport.width;
                                            }) || defaultValuesByAttribute.width;
                                        }
                                    default:
                                        {
                                            return defaultValuesByAttribute[attribute];
                                        }
                                }
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "fromStep",
            value: function fromStep(step) {
                var state = structuredClone(step);
                for(var _i = 0, _iter = [
                    'parameters',
                    'properties'
                ]; _i < _iter.length; _i++){
                    var key = _iter[_i];
                    if (key in step && step[key] !== undefined) {
                        // @ts-ignore Potential infinite type instantiation.
                        state[key] = JSON.stringify(step[key]);
                    }
                }
                if ('attributes' in step && step.attributes) {
                    state.attributes = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.entries(step.attributes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], value = _step_value[1];
                            state.attributes.push({
                                name: name,
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
                }
                if ('selectors' in step) {
                    state.selectors = step.selectors.map(function(selector) {
                        if (typeof selector === 'string') {
                            return [
                                selector
                            ];
                        }
                        return _to_consumable_array(selector);
                    });
                }
                return (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)(state);
            }
        },
        {
            key: "toStep",
            value: function toStep(state) {
                var step = structuredClone(state);
                for(var _i = 0, _iter = [
                    'parameters',
                    'properties'
                ]; _i < _iter.length; _i++){
                    var key = _iter[_i];
                    var value = state[key];
                    if (value) {
                        Object.assign(step, _define_property({}, key, JSON.parse(value)));
                    }
                }
                if (state.attributes) {
                    if (state.attributes.length !== 0) {
                        var attributes = {};
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = state.attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _step_value = _step.value, name = _step_value.name, value1 = _step_value.value;
                                Object.assign(attributes, _define_property({}, name, value1));
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
                        Object.assign(step, {
                            attributes: attributes
                        });
                    } else if ('attributes' in step) {
                        delete step.attributes;
                    }
                }
                if (state.selectors) {
                    var selectors = state.selectors.filter(function(selector) {
                        return selector.length > 0;
                    }).map(function(selector) {
                        if (selector.length === 1) {
                            return selector[0];
                        }
                        return _to_consumable_array(selector);
                    });
                    if (selectors.length !== 0) {
                        Object.assign(step, {
                            selectors: selectors
                        });
                    } else if ('selectors' in step) {
                        // @ts-expect-error We want to trigger an error in the parsing phase.
                        delete step.selectors;
                    }
                }
                if (state.frame && state.frame.length === 0 && 'frame' in step) {
                    delete step.frame;
                }
                return cleanUndefineds(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.SchemaUtils.parseStep(step));
            }
        }
    ]);
    return EditorState;
}();
var _puppeteer = {
    writable: true,
    value: new _util_util_js__WEBPACK_IMPORTED_MODULE_9__.SharedObject.SharedObject(function() {
        return _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.connectPuppeteer();
    }, function(param) {
        var browser = param.browser;
        return _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.disconnectPuppeteer(browser);
    })
};
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires SelectorPickedEvent#selectorpicked
 */ var RecorderSelectorPickerButton = (_picker = /*#__PURE__*/ new WeakMap(), _handleClickEvent = /*#__PURE__*/ new WeakMap(), _RecorderSelectorPickerButton = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(RecorderSelectorPickerButton, LitElement);
    var _super = _create_super(RecorderSelectorPickerButton);
    function RecorderSelectorPickerButton() {
        _class_call_check(this, RecorderSelectorPickerButton);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _picker, {
            writable: true,
            value: new _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__.SelectorPicker.SelectorPicker(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleClickEvent, {
            writable: true,
            value: function(event) {
                event.preventDefault();
                event.stopPropagation();
                void _class_private_field_get(_this, _picker).toggle();
            }
        });
        _this.disabled = false;
        return _this;
    }
    _create_class(RecorderSelectorPickerButton, [
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                _get(_get_prototype_of(RecorderSelectorPickerButton.prototype), "disconnectedCallback", this).call(this);
                void _class_private_field_get(this, _picker).stop();
            }
        },
        {
            key: "render",
            value: function render() {
                if (this.disabled) {
                    return;
                }
                return html(_templateObject(), _class_private_field_get(this, _handleClickEvent), i18nString(UIStrings.selectorPicker), "SMALL" /* Buttons.Button.Size.SMALL */ , 'select-element', _class_private_field_get(this, _picker).active, "icon" /* Buttons.Button.Variant.ICON */ , _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('selector-picker').track({
                    click: true
                }));
            }
        }
    ]);
    return RecorderSelectorPickerButton;
}(LitElement), _define_property(_RecorderSelectorPickerButton, "styles", [
    _stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
]), _RecorderSelectorPickerButton);
__decorate([
    property()
], RecorderSelectorPickerButton.prototype, "disabled", void 0);
RecorderSelectorPickerButton = __decorate([
    customElement('devtools-recorder-selector-picker-button')
], RecorderSelectorPickerButton);
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires StepEditedEvent#stepedited
 */ var StepEditor = (_renderedAttributes = /*#__PURE__*/ new WeakMap(), _commit = /*#__PURE__*/ new WeakSet(), _handleSelectorPickedEvent = /*#__PURE__*/ new WeakMap(), _handleAddOrRemoveClick = /*#__PURE__*/ new WeakMap(), _handleKeyDownEvent = /*#__PURE__*/ new WeakMap(), _handleInputBlur = /*#__PURE__*/ new WeakMap(), _handleTypeInputBlur = /*#__PURE__*/ new WeakMap(), _handleAddRowClickEvent = /*#__PURE__*/ new WeakMap(), _renderInlineButton = /*#__PURE__*/ new WeakSet(), _renderDeleteButton = /*#__PURE__*/ new WeakSet(), _renderTypeRow = /*#__PURE__*/ new WeakSet(), _renderRow = /*#__PURE__*/ new WeakSet(), _renderFrameRow = /*#__PURE__*/ new WeakSet(), _renderSelectorsRow = /*#__PURE__*/ new WeakSet(), _renderAssertedEvents = /*#__PURE__*/ new WeakSet(), _renderAttributesRow = /*#__PURE__*/ new WeakSet(), _renderAddRowButtons = /*#__PURE__*/ new WeakSet(), _ensureFocus = /*#__PURE__*/ new WeakMap(), _StepEditor = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(StepEditor, LitElement);
    var _super = _create_super(StepEditor);
    function StepEditor() {
        _class_call_check(this, StepEditor);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _commit);
        _class_private_method_init(_assert_this_initialized(_this), _renderInlineButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderDeleteButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderTypeRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderFrameRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderSelectorsRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderAssertedEvents);
        _class_private_method_init(_assert_this_initialized(_this), _renderAttributesRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderAddRowButtons);
        _class_private_field_init(_assert_this_initialized(_this), _renderedAttributes, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSelectorPickedEvent, {
            writable: true,
            value: function(event) {
                event.preventDefault();
                event.stopPropagation();
                _class_private_method_get(_this, _commit, commit).call(_assert_this_initialized(_this), (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(_this.state, {
                    target: event.data.target,
                    frame: event.data.frame,
                    selectors: event.data.selectors.map(function(selector) {
                        return typeof selector === 'string' ? [
                            selector
                        ] : selector;
                    }),
                    offsetX: event.data.offsetX,
                    offsetY: event.data.offsetY
                }));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleAddOrRemoveClick, {
            writable: true,
            value: function(assignments, query, metric) {
                return function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    _class_private_method_get(_this, _commit, commit).call(_assert_this_initialized(_this), (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(_this.state, assignments));
                    _class_private_field_get(_this, _ensureFocus).call(_assert_this_initialized(_this), query);
                    if (metric) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(metric);
                    }
                };
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleKeyDownEvent, {
            writable: true,
            value: function(event) {
                (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(_instanceof(event, KeyboardEvent));
                if (_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput) && event.key === 'Enter') {
                    event.preventDefault();
                    event.stopPropagation();
                    var elements = _this.renderRoot.querySelectorAll('devtools-suggestion-input');
                    var element = _to_consumable_array(elements).findIndex(function(value) {
                        return value === event.target;
                    });
                    if (element >= 0 && element + 1 < elements.length) {
                        elements[element + 1].focus();
                    } else {
                        event.target.blur();
                    }
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleInputBlur, {
            writable: true,
            value: function(opts) {
                return function(event) {
                    (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput));
                    if (event.target.disabled) {
                        return;
                    }
                    var dataType = dataTypeByAttribute[opts.attribute];
                    var value = typeConverters[dataType](event.target.value);
                    var assignments = opts.from.bind(_assert_this_initialized(_this))(value);
                    if (!assignments) {
                        return;
                    }
                    _class_private_method_get(_this, _commit, commit).call(_assert_this_initialized(_this), (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(_this.state, assignments));
                    if (opts.metric) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(opts.metric);
                    }
                };
            }
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _handleTypeInputBlur, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(event) {
                    var value, _, _1, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(_instanceof(event.target, _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput));
                                if (event.target.disabled) {
                                    return [
                                        2
                                    ];
                                }
                                value = event.target.value;
                                if (value === _this1.state.type) {
                                    return [
                                        2
                                    ];
                                }
                                if (!Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType).includes(value)) {
                                    _this1.error = i18nString(UIStrings.unknownActionType);
                                    return [
                                        2
                                    ];
                                }
                                _1 = (_ = _class_private_method_get(_this1, _commit, commit)).call;
                                _tmp = [
                                    _this1
                                ];
                                return [
                                    4,
                                    EditorState.default(value)
                                ];
                            case 1:
                                _1.apply(_, _tmp.concat([
                                    _state.sent()
                                ]));
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(9 /* Host.UserMetrics.RecordingEdited.TypeChanged */ );
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        var _this2 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _handleAddRowClickEvent, {
            writable: true,
            value: function() {
                var _ref = _async_to_generator(function(event) {
                    var attribute, _, _1, _tmp, _tmp1, _tmp2;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                event.preventDefault();
                                event.stopPropagation();
                                attribute = event.target.dataset.attribute;
                                _1 = (_ = _class_private_method_get(_this2, _commit, commit)).call;
                                _tmp = [
                                    _this2
                                ];
                                _tmp1 = [
                                    _this2.state
                                ];
                                _tmp2 = [
                                    {},
                                    attribute
                                ];
                                return [
                                    4,
                                    EditorState.defaultByAttribute(_this2.state, attribute)
                                ];
                            case 1:
                                _1.apply(_, _tmp.concat([
                                    _util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign.apply(void 0, _tmp1.concat([
                                        _define_property.apply(void 0, _tmp2.concat([
                                            _state.sent()
                                        ]))
                                    ]))
                                ]));
                                _class_private_field_get(_this2, _ensureFocus).call(_this2, "[data-attribute=".concat(attribute, "].attribute devtools-suggestion-input"));
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(event) {
                    return _ref.apply(this, arguments);
                };
            }()
        });
        _class_private_field_init(_assert_this_initialized(_this), _ensureFocus, {
            writable: true,
            value: function(query) {
                void _this.updateComplete.then(function() {
                    var node = _this.renderRoot.querySelector(query);
                    node === null || node === void 0 ? void 0 : node.focus();
                });
            }
        });
        _this.state = {
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement
        };
        _this.isTypeEditable = true;
        _this.disabled = false;
        return _this;
    }
    _create_class(StepEditor, [
        {
            key: "createRenderRoot",
            value: function createRenderRoot() {
                var root = _get(_get_prototype_of(StepEditor.prototype), "createRenderRoot", this).call(this);
                root.addEventListener('keydown', _class_private_field_get(this, _handleKeyDownEvent));
                return root;
            }
        },
        {
            key: "step",
            set: function set(step) {
                this.state = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)(EditorState.fromStep(step));
                this.error = undefined;
            }
        },
        {
            key: "render",
            value: function render() {
                _class_private_field_set(this, _renderedAttributes, new Set());
                // clang-format off
                var result = html(_templateObject3(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tree('step-editor'), _class_private_method_get(this, _renderTypeRow, renderTypeRow).call(this, this.isTypeEditable), _class_private_method_get(this, _renderRow, renderRow).call(this, 'target'), _class_private_method_get(this, _renderFrameRow, renderFrameRow).call(this), _class_private_method_get(this, _renderSelectorsRow, renderSelectorsRow).call(this), _class_private_method_get(this, _renderRow, renderRow).call(this, 'deviceType'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'button'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'url'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'x'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'y'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'offsetX'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'offsetY'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'value'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'key'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'operator'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'count'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'expression'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'duration'), _class_private_method_get(this, _renderAssertedEvents, renderAssertedEvents).call(this), _class_private_method_get(this, _renderRow, renderRow).call(this, 'timeout'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'width'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'height'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'deviceScaleFactor'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'isMobile'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'hasTouch'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'isLandscape'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'download'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'upload'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'latency'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'name'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'parameters'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'visible'), _class_private_method_get(this, _renderRow, renderRow).call(this, 'properties'), _class_private_method_get(this, _renderAttributesRow, renderAttributesRow).call(this), this.error ? html(_templateObject1(), i18nString(UIStrings.notSaved, {
                    error: this.error
                })) : undefined, !this.disabled ? html(_templateObject2(), _class_private_method_get(this, _renderAddRowButtons, renderAddRowButtons).call(this)) : undefined);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // clang-format on
                    for(var _iterator = Object.keys(dataTypeByAttribute)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var key = _step.value;
                        if (!_class_private_field_get(this, _renderedAttributes).has(key)) {
                            throw new Error("The editable attribute ".concat(key, " does not have UI"));
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
                return result;
            }
        }
    ]);
    return StepEditor;
}(LitElement), _define_property(_StepEditor, "styles", [
    _stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
]), _StepEditor);
__decorate([
    state()
], StepEditor.prototype, "state", void 0);
__decorate([
    state()
], StepEditor.prototype, "error", void 0);
__decorate([
    property()
], StepEditor.prototype, "isTypeEditable", void 0);
__decorate([
    property()
], StepEditor.prototype, "disabled", void 0);
StepEditor = __decorate([
    customElement('devtools-recorder-step-editor')
], StepEditor);
 //# sourceMappingURL=StepEditor.js.map
function commit(updatedState) {
    try {
        this.dispatchEvent(new StepEditedEvent(EditorState.toStep(updatedState)));
        // Note we don't need to update this variable since it will come from up
        // the tree, but processing up the tree is asynchronous implying we cannot
        // reliably know when the state will come back down. Since we need to
        // focus the DOM elements that may be created as a result of this new
        // state, we set it here for waiting on the updateComplete promise later.
        this.state = updatedState;
    } catch (error) {
        this.error = error.message;
    }
}
function renderInlineButton(opts) {
    if (this.disabled) {
        return;
    }
    return html(_templateObject4(), opts.title, "SMALL" /* Buttons.Button.Size.SMALL */ , opts.iconName, "icon" /* Buttons.Button.Variant.ICON */ , _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(opts.class).track({
        click: true
    }), opts.class, opts.onClick);
}
function renderDeleteButton(attribute) {
    var _this = this;
    if (this.disabled) {
        return;
    }
    var attributes = attributesByType[this.state.type];
    var optional = _to_consumable_array(attributes.optional).includes(attribute);
    if (!optional || this.disabled) {
        return;
    }
    // clang-format off
    return html(_templateObject5(), "SMALL" /* Buttons.Button.Size.SMALL */ , 'bin', "icon" /* Buttons.Button.Variant.ICON */ , i18nString(UIStrings.deleteRow), attribute, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('delete').track({
        click: true
    }), function(event) {
        event.preventDefault();
        event.stopPropagation();
        _class_private_method_get(_this, _commit, commit).call(_this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(_this.state, _define_property({}, attribute, undefined)));
    });
// clang-format on
}
function renderTypeRow(editable) {
    _class_private_field_get(this, _renderedAttributes).add('type');
    // clang-format off
    return html(_templateObject6(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('type'), !editable || this.disabled, Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType), defaultValuesByAttribute.type, live(this.state.type), _class_private_field_get(this, _handleTypeInputBlur));
// clang-format on
}
function renderRow(attribute) {
    var _this_state_attribute;
    _class_private_field_get(this, _renderedAttributes).add(attribute);
    var attributeValue = (_this_state_attribute = this.state[attribute]) === null || _this_state_attribute === void 0 ? void 0 : _this_state_attribute.toString();
    if (attributeValue === undefined) {
        return;
    }
    // clang-format off
    return html(_templateObject7(), attribute, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(attribute)), attribute, this.disabled, defaultValuesByAttribute[attribute].toString(), live(attributeValue), function() {
        switch(attribute){
            case 'expression':
                return 'text/javascript';
            case 'properties':
                return 'application/json';
            default:
                return '';
        }
    }(), _class_private_field_get(this, _handleInputBlur).call(this, {
        attribute: attribute,
        from: function from(value) {
            if (this.state[attribute] === undefined) {
                return;
            }
            switch(attribute){
                case 'properties':
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(2 /* Host.UserMetrics.RecordingAssertion.PropertyAssertionEdited */ );
                    break;
            }
            return _define_property({}, attribute, value);
        },
        metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
    }), _class_private_method_get(this, _renderDeleteButton, renderDeleteButton).call(this, attribute));
// clang-format on
}
function renderFrameRow() {
    var _this = this;
    _class_private_field_get(this, _renderedAttributes).add('frame');
    if (this.state.frame === undefined) {
        return;
    }
    // clang-format off
    return html(_templateObject9(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('frame'), _class_private_method_get(this, _renderDeleteButton, renderDeleteButton).call(this, 'frame'), this.state.frame.map(function(frame, index, frames) {
        return html(_templateObject8(), _this.disabled, defaultValuesByAttribute.frame[0].toString(), live(frame.toString()), "frame.".concat(index), _class_private_field_get(_this, _handleInputBlur).call(_this, {
            attribute: 'frame',
            from: function from(value) {
                var _this_state_frame;
                if (((_this_state_frame = this.state.frame) === null || _this_state_frame === void 0 ? void 0 : _this_state_frame[index]) === undefined) {
                    return;
                }
                return {
                    frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, value))
                };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
        }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'add-frame',
            title: i18nString(UIStrings.addFrameIndex),
            iconName: 'plus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index + 1, new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.frame[0])))
            }, 'devtools-suggestion-input[data-path="frame.'.concat(index + 1, '"]'), 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ )
        }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'remove-frame',
            title: i18nString(UIStrings.removeFrameIndex),
            iconName: 'minus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, undefined))
            }, 'devtools-suggestion-input[data-path="frame.'.concat(Math.min(index, frames.length - 2), '"]'), 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ )
        }));
    }));
// clang-format on
}
function renderSelectorsRow() {
    var _this = this;
    _class_private_field_get(this, _renderedAttributes).add('selectors');
    if (this.state.selectors === undefined) {
        return;
    }
    // clang-format off
    return html(_templateObject12(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('selectors'), _class_private_field_get(this, _handleSelectorPickedEvent), this.disabled, _class_private_method_get(this, _renderDeleteButton, renderDeleteButton).call(this, 'selectors'), this.state.selectors.map(function(selector, index, selectors) {
        return html(_templateObject11(), index, index + 1, _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'add-selector',
            title: i18nString(UIStrings.addSelector),
            iconName: 'plus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index + 1, new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(structuredClone(defaultValuesByAttribute.selectors[0]))))
            }, 'devtools-suggestion-input[data-path="selectors.'.concat(index + 1, '.0"]'), 4 /* Host.UserMetrics.RecordingEdited.SelectorAdded */ )
        }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'remove-selector',
            title: i18nString(UIStrings.removeSelector),
            iconName: 'minus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, undefined))
            }, 'devtools-suggestion-input[data-path="selectors.'.concat(Math.min(index, selectors.length - 2), '.0"]'), 5 /* Host.UserMetrics.RecordingEdited.SelectorRemoved */ )
        }), selector.map(function(part, partIndex, parts) {
            return html(_templateObject10(), index, partIndex, _this.disabled, defaultValuesByAttribute.selectors[0][0], live(part), "selectors.".concat(index, ".").concat(partIndex), _class_private_field_get(_this, _handleInputBlur).call(_this, {
                attribute: 'selectors',
                from: function from(value) {
                    var _this_state_selectors_index, _this_state_selectors;
                    if (((_this_state_selectors = this.state.selectors) === null || _this_state_selectors === void 0 ? void 0 : (_this_state_selectors_index = _this_state_selectors[index]) === null || _this_state_selectors_index === void 0 ? void 0 : _this_state_selectors_index[partIndex]) === undefined) {
                        return;
                    }
                    return {
                        selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, partIndex, value))))
                    };
                },
                metric: 7 /* Host.UserMetrics.RecordingEdited.SelectorPartEdited */ 
            }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
                class: 'add-selector-part',
                title: i18nString(UIStrings.addSelectorPart),
                iconName: 'plus',
                onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                    selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, partIndex + 1, new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.selectors[0][0])))))
                }, 'devtools-suggestion-input[data-path="selectors.'.concat(index, ".").concat(partIndex + 1, '"]'), 6 /* Host.UserMetrics.RecordingEdited.SelectorPartAdded */ )
            }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
                class: 'remove-selector-part',
                title: i18nString(UIStrings.removeSelectorPart),
                iconName: 'minus',
                onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                    selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, partIndex, undefined))))
                }, 'devtools-suggestion-input[data-path="selectors.'.concat(index, ".").concat(Math.min(partIndex, parts.length - 2), '"]'), 8 /* Host.UserMetrics.RecordingEdited.SelectorPartRemoved */ )
            }));
        }));
    }));
// clang-format on
}
function renderAssertedEvents() {
    var _this = this;
    _class_private_field_get(this, _renderedAttributes).add('assertedEvents');
    if (this.state.assertedEvents === undefined) {
        return;
    }
    // clang-format off
    return html(_templateObject14(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('asserted-events'), _class_private_method_get(this, _renderDeleteButton, renderDeleteButton).call(this, 'assertedEvents'), this.state.assertedEvents.map(function(event, index) {
        var _event_title, _event_url;
        return html(_templateObject13(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-type'), event.type, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-title'), _this.disabled, defaultValuesByAttribute.assertedEvents[0].title, live((_event_title = event.title) !== null && _event_title !== void 0 ? _event_title : ''), _class_private_field_get(_this, _handleInputBlur).call(_this, {
            attribute: 'assertedEvents',
            from: function from(value) {
                var _this_state_assertedEvents_index, _this_state_assertedEvents;
                if (((_this_state_assertedEvents = this.state.assertedEvents) === null || _this_state_assertedEvents === void 0 ? void 0 : (_this_state_assertedEvents_index = _this_state_assertedEvents[index]) === null || _this_state_assertedEvents_index === void 0 ? void 0 : _this_state_assertedEvents_index.title) === undefined) {
                    return;
                }
                return {
                    assertedEvents: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, {
                        title: value
                    }))
                };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
        }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-url'), _this.disabled, defaultValuesByAttribute.assertedEvents[0].url, live((_event_url = event.url) !== null && _event_url !== void 0 ? _event_url : ''), _class_private_field_get(_this, _handleInputBlur).call(_this, {
            attribute: 'url',
            from: function from(value) {
                var _this_state_assertedEvents_index, _this_state_assertedEvents;
                if (((_this_state_assertedEvents = this.state.assertedEvents) === null || _this_state_assertedEvents === void 0 ? void 0 : (_this_state_assertedEvents_index = _this_state_assertedEvents[index]) === null || _this_state_assertedEvents_index === void 0 ? void 0 : _this_state_assertedEvents_index.url) === undefined) {
                    return;
                }
                return {
                    assertedEvents: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, {
                        url: value
                    }))
                };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
        }));
    }));
// clang-format on
}
function renderAttributesRow() {
    var _this = this;
    _class_private_field_get(this, _renderedAttributes).add('attributes');
    if (this.state.attributes === undefined) {
        return;
    }
    // clang-format off
    return html(_templateObject16(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attributes'), _class_private_method_get(this, _renderDeleteButton, renderDeleteButton).call(this, 'attributes'), this.state.attributes.map(function(param, index, attributes) {
        var name = param.name, value = param.value;
        return html(_templateObject15(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attribute'), _this.disabled, defaultValuesByAttribute.attributes[0].name, live(name), "attributes.".concat(index, ".name"), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.key().track({
            change: true
        }), _class_private_field_get(_this, _handleInputBlur).call(_this, {
            attribute: 'attributes',
            from: function from(name) {
                var _this_state_attributes_index, _this_state_attributes;
                if (((_this_state_attributes = this.state.attributes) === null || _this_state_attributes === void 0 ? void 0 : (_this_state_attributes_index = _this_state_attributes[index]) === null || _this_state_attributes_index === void 0 ? void 0 : _this_state_attributes_index.name) === undefined) {
                    return;
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(3 /* Host.UserMetrics.RecordingAssertion.AttributeAssertionEdited */ );
                return {
                    attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, {
                        name: name
                    }))
                };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
        }), _this.disabled, defaultValuesByAttribute.attributes[0].value, live(value), "attributes.".concat(index, ".value"), _class_private_field_get(_this, _handleInputBlur).call(_this, {
            attribute: 'attributes',
            from: function from(value) {
                var _this_state_attributes_index, _this_state_attributes;
                if (((_this_state_attributes = this.state.attributes) === null || _this_state_attributes === void 0 ? void 0 : (_this_state_attributes_index = _this_state_attributes[index]) === null || _this_state_attributes_index === void 0 ? void 0 : _this_state_attributes_index.value) === undefined) {
                    return;
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(3 /* Host.UserMetrics.RecordingAssertion.AttributeAssertionEdited */ );
                return {
                    attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, {
                        value: value
                    }))
                };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ 
        }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'add-attribute-assertion',
            title: i18nString(UIStrings.addSelectorPart),
            iconName: 'plus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index + 1, new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(function() {
                    {
                        var names = new Set(attributes.map(function(param) {
                            var name = param.name;
                            return name;
                        }));
                        var defaultAttribute = defaultValuesByAttribute.attributes[0];
                        var name = defaultAttribute.name;
                        var i = 0;
                        while(names.has(name)){
                            ++i;
                            name = "".concat(defaultAttribute.name, "-").concat(i);
                        }
                        return _object_spread_props(_object_spread({}, defaultAttribute), {
                            name: name
                        });
                    }
                }())))
            }, 'devtools-suggestion-input[data-path="attributes.'.concat(index + 1, '.name"]'), 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ )
        }), _class_private_method_get(_this, _renderInlineButton, renderInlineButton).call(_this, {
            class: 'remove-attribute-assertion',
            title: i18nString(UIStrings.removeSelectorPart),
            iconName: 'minus',
            onClick: _class_private_field_get(_this, _handleAddOrRemoveClick).call(_this, {
                attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments(_define_property({}, index, undefined))
            }, 'devtools-suggestion-input[data-path="attributes.'.concat(Math.min(index, attributes.length - 2), '.value"]'), 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */ )
        }));
    }));
// clang-format on
}
function renderAddRowButtons() {
    var _this = this;
    var attributes = attributesByType[this.state.type];
    return _to_consumable_array(attributes.optional).filter(function(attr) {
        return _this.state[attr] === undefined;
    }).map(function(attr) {
        // clang-format off
        return html(_templateObject17(), "outlined" /* Buttons.Button.Variant.OUTLINED */ , attr, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action("add-".concat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(attr))), _class_private_field_get(_this, _handleAddRowClickEvent), i18nString(UIStrings.addAttribute, {
            attributeName: attr
        }));
    // clang-format on
    });
}


}),
"./panels/recorder/components/stepEditor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-size: inherit;\n}\n\n:host {\n  display: block;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n  color: var(--sys-color-token-property-special);\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n  align-items: center;\n  line-height: 18px;\n  margin-top: 3px;\n}\n\n.row devtools-button {\n  line-height: 1;\n  margin-left: 0.5em;\n}\n\n.separator {\n  margin-right: 0.5em;\n  color: var(--sys-color-on-surface);\n}\n\n.padded {\n  margin-left: 2em;\n}\n\n.padded.double {\n  margin-left: 4em;\n}\n\n.selector-picker {\n  width: 18px;\n  height: 18px;\n}\n\n.inline-button {\n  width: 18px;\n  height: 18px;\n  opacity: 0%;\n  visibility: hidden;\n  transition: opacity 200ms;\n  flex-shrink: 0;\n}\n\n.row:focus-within .inline-button,\n.row:hover .inline-button {\n  opacity: 100%;\n  visibility: visible;\n}\n\n.wrapped.row {\n  flex-wrap: wrap;\n}\n\n.gap.row {\n  gap: 5px;\n}\n\n.gap.row devtools-button {\n  margin-left: 0;\n}\n\n.regular-font {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.no-margin {\n  margin: 0;\n}\n\n.row-buttons {\n  margin-top: 3px;\n}\n\n.error {\n  margin: 3px 0 6px;\n  padding: 8px 12px;\n  background: var(--sys-color-error-container);\n  color: var(--sys-color-error);\n}\n\n/*# sourceURL=stepEditor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/recorder/components/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArrayAssignments: function() { return ArrayAssignments; },
  InsertAssignment: function() { return InsertAssignment; },
  assert: function() { return assert; },
  deepFreeze: function() { return deepFreeze; },
  immutableDeepAssign: function() { return immutableDeepAssign; },
  mod: function() { return mod; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var mod = function(a, n) {
    return (a % n + n) % n;
};
function assert(predicate) {
    var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Assertion failed!';
    if (!predicate) {
        throw new Error(message);
    }
}
var deepFreeze = function(object) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Reflect.ownKeys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var value = object[name];
            if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' || typeof value === 'function') {
                deepFreeze(value);
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
    return Object.freeze(object);
};
var InsertAssignment = function InsertAssignment(value) {
    "use strict";
    _class_call_check(this, InsertAssignment);
    _define_property(this, "value", void 0);
    this.value = value;
};
var ArrayAssignments = function ArrayAssignments(value) {
    "use strict";
    _class_call_check(this, ArrayAssignments);
    _define_property(this, "value", void 0);
    this.value = value;
};
var immutableDeepAssign = function(object, assignments) {
    if (_instanceof(assignments, ArrayAssignments)) {
        assert(Array.isArray(object), "Expected an array. Got ".concat(typeof object === "undefined" ? "undefined" : _type_of(object), "."));
        var updatedObject = _to_consumable_array(object);
        var keys = Object.keys(assignments.value).sort(function(a, b) {
            return Number(b) - Number(a);
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var update = assignments.value[Number(key)];
                if (update === undefined) {
                    updatedObject.splice(Number(key), 1);
                } else if (_instanceof(update, InsertAssignment)) {
                    updatedObject.splice(Number(key), 0, update.value);
                } else {
                    updatedObject[Number(key)] = immutableDeepAssign(updatedObject[key], update);
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
        return Object.freeze(updatedObject);
    }
    if ((typeof assignments === "undefined" ? "undefined" : _type_of(assignments)) === 'object' && !Array.isArray(assignments)) {
        assert(!Array.isArray(object), 'Expected an object. Got an array.');
        var updatedObject1 = _object_spread({}, object);
        var keys1 = Object.keys(assignments);
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = keys1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var key1 = _step1.value;
                var update1 = assignments[key1];
                if (update1 === undefined) {
                    delete updatedObject1[key1];
                } else {
                    updatedObject1[key1] = immutableDeepAssign(updatedObject1[key1], update1);
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
        return Object.freeze(updatedObject1);
    }
    return assignments;
}; //# sourceMappingURL=util.js.map


}),
"./panels/recorder/controllers/controllers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SelectorPicker: function() { return /* reexport module object */ _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorPicker.js */ "./panels/recorder/controllers/SelectorPicker.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=controllers.js.map


}),
"./ui/components/suggestion_input/suggestion_input.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SuggestionInput: function() { return /* reexport module object */ _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestionInput.js */ "./ui/components/suggestion_input/SuggestionInput.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=suggestion_input.js.map


}),

}]);