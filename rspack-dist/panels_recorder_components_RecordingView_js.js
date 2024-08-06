"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_RecordingView_js"], {
"./panels/recorder/components/RecordingView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortReplayEvent: function() { return AbortReplayEvent; },
  AddAssertionEvent: function() { return AddAssertionEvent; },
  NetworkConditionsChanged: function() { return NetworkConditionsChanged; },
  PlayRecordingEvent: function() { return PlayRecordingEvent; },
  RecordingChangedEvent: function() { return RecordingChangedEvent; },
  RecordingFinishedEvent: function() { return RecordingFinishedEvent; },
  RecordingTitleChangedEvent: function() { return RecordingTitleChangedEvent; },
  RecordingView: function() { return RecordingView; },
  TimeoutChanged: function() { return TimeoutChanged; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/split_view/split_view.js */ "./ui/components/split_view/split_view.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ExtensionView.js */ "./panels/recorder/components/ExtensionView.js");
/* harmony import */var _recordingView_css_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./recordingView.css.js */ "./panels/recorder/components/recordingView.css.js");
/* harmony import */var _ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ReplaySection.js */ "./panels/recorder/components/ReplaySection.js");
/* harmony import */var _StepView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./StepView.js */ "./panels/recorder/components/StepView.js");
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
        "devtools-recording-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n      @click=",
        "\n      @mouseover=",
        "\n      @copystep=",
        "\n      .data=",
        "\n      jslog=",
        "\n      ></",
        ">\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '<div class="separator"></div>'
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<div>",
        "\xd7",
        " px</div>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<div>\n            ",
        ",\n            ",
        ",\n            ",
        "\n          </div>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        '<div class="separator"></div>'
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "<",
        "\n                .value=",
        "\n                .selected=",
        "\n                jslog=",
        "\n              >\n                ",
        "\n              </",
        ">"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        '<div class="editable-setting">\n        <label class="wrapping-label" @click=',
        ">\n          ",
        "\n          <",
        "\n            @selectmenuselected=",
        "\n            .disabled=",
        "\n            .showDivider=",
        "\n            .showArrow=",
        "\n            .sideButton=",
        "\n            .showSelectedItem=",
        "\n            .showConnector=",
        "\n            .jslogContext=",
        "\n            .position=",
        "\n            .buttonTitle=",
        "\n          >\n            ",
        "\n          </",
        ">\n        </label>\n      </div>"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        '<div class="editable-setting">\n        <label class="wrapping-label" title=',
        ">\n          ",
        "\n          <input\n            @input=",
        "\n            required\n            min=",
        "\n            max=",
        "\n            value=",
        "\n            jslog=",
        '\n            class="devtools-text-input"\n            type="number">\n        </label>\n      </div>'
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<",
        '\n                    class="chevron"\n                    name="triangle-down">\n                  </',
        ">"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        '\n      <div class="settings-row">\n        <div class="settings-container">\n          <div\n            class=',
        "\n            @keydown=",
        "\n            @click=",
        '\n            tabindex="0"\n            role="button"\n            jslog=',
        "\n            aria-label=",
        ">\n            <span>",
        "</span>\n            ",
        "\n          </div>\n          <div class=",
        ">\n            ",
        '\n          </div>\n        </div>\n        <div class="settings-container">\n          <div class="settings-title">',
        '</div>\n          <div class="settings">\n            ',
        "\n          </div>\n        </div>\n      </div>\n    "
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "\n        <",
        " .descriptor=",
        ">\n        </",
        ">\n      "
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "<",
        "\n                    .value=",
        "\n                    .selected=",
        "\n                    jslog=",
        "\n                  >\n                    ",
        "\n                  </",
        ">"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "<",
        "\n                    .value=",
        "\n                    .selected=",
        "\n                    jslog=",
        "\n                  >\n                    ",
        "\n                  </",
        ">"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "\n        <",
        '>\n          <div slot="main">\n            ',
        '\n          </div>\n          <div slot="sidebar" jslog=',
        '>\n            <div class="section-toolbar" jslog=',
        ">\n              <",
        "\n                @selectmenuselected=",
        "\n                .showDivider=",
        "\n                .showArrow=",
        "\n                .sideButton=",
        "\n                .showSelectedItem=",
        "\n                .showConnector=",
        "\n                .position=",
        "\n                .buttonTitle=",
        "\n                .jslogContext=",
        "\n              >\n                ",
        "\n                ",
        "\n              </",
        ">\n              <",
        "\n                title=",
        "\n                .data=",
        "\n                @click=",
        "\n                jslog=",
        "\n              ></",
        '>\n            </div>\n            <div class="text-editor" jslog=',
        ">\n              <",
        " .state=",
        "></",
        ">\n            </div>\n          </div>\n        </",
        ">\n      "
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        '\n      <img class="screenshot" src=',
        " alt=",
        " />\n    "
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "\n        <",
        " .jslogContext=",
        " @click=",
        " .iconName=",
        " .variant=",
        ">\n          ",
        "\n        </",
        ">"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _tagged_template_literal([
        "<",
        "\n        .data=",
        "\n        .disabled=",
        "\n        @startreplay=",
        "\n        >\n      </",
        ">"
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _tagged_template_literal([
        '<div class="section-toolbar">\n        <',
        "\n          @click=",
        '\n          class="show-code"\n          .data=',
        "\n          jslog=",
        "\n        >\n          ",
        "\n        </",
        ">\n      </div>"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _tagged_template_literal([
        '<devtools-button\n                    class="step add-assertion-button"\n                    .data=',
        "\n                    @click=",
        "\n                  >",
        "</devtools-button>"
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = _tagged_template_literal([
        '<div class="step recording">',
        "</div>"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = _tagged_template_literal([
        '\n            <div class="section">\n              <div class="screenshot-wrapper">\n                ',
        '\n              </div>\n              <div class="content">\n                <div class="steps">\n                  <',
        "\n                    @click=",
        "\n                    @mouseover=",
        "\n                    .data=",
        "\n                  >\n                  </",
        ">\n                  ",
        "\n                  ",
        "\n                  ",
        "\n                </div>\n              </div>\n            </div>\n      "
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = _tagged_template_literal([
        '\n      <div class="sections">\n      ',
        "\n      ",
        "\n      </div>\n    "
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = _tagged_template_literal([
        '<div class="title-input-error-text">\n            ',
        "\n          </div>"
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject31() {
    var data = _tagged_template_literal([
        '<div class="actions">\n                <',
        "\n                  @click=",
        "\n                  .data=",
        "\n                >\n                  ",
        "\n                </",
        '>\n                <div class="separator"></div>\n                ',
        "\n              </div>"
    ]);
    _templateObject31 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject32() {
    var data = _tagged_template_literal([
        '\n      <div class="header">\n        <div class="header-title-wrapper">\n          <div class="header-title">\n            <span @blur=',
        "\n                  @keydown=",
        '\n                  id="title-input"\n                  .contentEditable=',
        "\n                  jslog=",
        "\n                  class=",
        "\n                  .innerText=",
        '></span>\n            <div class="title-button-bar">\n              <',
        "\n                @click=",
        "\n                .data=",
        "\n              ></",
        ">\n            </div>\n          </div>\n          ",
        "\n        </div>\n        ",
        "\n      </div>"
    ]);
    _templateObject32 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject33() {
    var data = _tagged_template_literal([
        '\n      <div class="footer">\n        <div class="controls">\n          <devtools-control-button\n            jslog=',
        "\n            @click=",
        "\n            .disabled=",
        "\n            .shape=",
        "\n            .label=",
        "\n            title=",
        "\n          >\n          </devtools-control-button>\n        </div>\n      </div>\n    "
    ]);
    _templateObject33 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject34() {
    var data = _tagged_template_literal([
        "\n            <",
        " .descriptor=",
        ">\n            </",
        ">\n          "
    ]);
    _templateObject34 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject35() {
    var data = _tagged_template_literal([
        "\n            ",
        "\n            ",
        "\n          "
    ]);
    _templateObject35 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject36() {
    var data = _tagged_template_literal([
        "\n      <div @click=",
        " class=",
        '>\n        <div class="main">\n          ',
        "\n          ",
        "\n          ",
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject36 = function _templateObject() {
        return data;
    };
    return data;
}




















var UIStrings = {
    /**
     * @description Depicts that the recording was done on a mobile device (e.g., a smartphone or tablet).
     */ mobile: 'Mobile',
    /**
     * @description Depicts that the recording was done on a desktop device (e.g., on a PC or laptop).
     */ desktop: 'Desktop',
    /**
     * @description Network latency in milliseconds.
     * @example {10} value
     */ latency: 'Latency: {value} ms',
    /**
     * @description Upload speed.
     * @example {42 kB} value
     */ upload: 'Upload: {value}',
    /**
     * @description Download speed.
     * @example {8 kB} value
     */ download: 'Download: {value}',
    /**
     * @description Title of the button to edit replay settings.
     */ editReplaySettings: 'Edit replay settings',
    /**
     * @description Title of the section that contains replay settings.
     */ replaySettings: 'Replay settings',
    /**
     * @description The string is shown when a default value is used for some replay settings.
     */ default: 'Default',
    /**
     * @description The title of the section with environment settings.
     */ environment: 'Environment',
    /**
     * @description The title of the screenshot image that is shown for every section in the recordign view.
     */ screenshotForSection: 'Screenshot for this section',
    /**
     * @description The title of the button that edits the current recording's title.
     */ editTitle: 'Edit title',
    /**
     * @description The error for when the title is missing.
     */ requiredTitleError: 'Title is required',
    /**
     * @description The status text that is shown while the recording is ongoing.
     */ recording: 'Recording…',
    /**
     * @description The title of the button to end the current recording.
     */ endRecording: 'End recording',
    /**
     * @description The title of the button while the recording is being ended.
     */ recordingIsBeingStopped: 'Stopping recording…',
    /**
     * @description The text that describes a timeout setting of {value} milliseconds.
     * @example {1000} value
     */ timeout: 'Timeout: {value} ms',
    /**
     * @description The label for the input that allows entering network throttling configuration.
     */ network: 'Network',
    /**
     * @description The label for the input that allows entering timeout (a number in ms) configuration.
     */ timeoutLabel: 'Timeout',
    /**
     * @description The text in a tooltip for the timeout input that explains what timeout settings do.
     */ timeoutExplanation: 'The timeout setting (in milliseconds) applies to every action when replaying the recording. For example, if a DOM element identified by a CSS selector does not appear on the page within the specified timeout, the replay fails with an error.',
    /**
     * @description The label for the button that cancels replaying.
     */ cancelReplay: 'Cancel replay',
    /**
     * @description Button title that shows the code view when clicked.
     */ showCode: 'Show code',
    /**
     * @description Button title that hides the code view when clicked.
     */ hideCode: 'Hide code',
    /**
     * @description Button title that adds an assertion to the step editor.
     */ addAssertion: 'Add assertion',
    /**
     * @description The title of the button that open current recording in Performance panel.
     */ performancePanel: 'Performance panel'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/RecordingView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var RecordingFinishedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingFinishedEvent, Event1);
    var _super = _create_super(RecordingFinishedEvent);
    function RecordingFinishedEvent() {
        _class_call_check(this, RecordingFinishedEvent);
        return _super.call(this, RecordingFinishedEvent.eventName);
    }
    return RecordingFinishedEvent;
}(_wrap_native_super(Event));
_define_property(RecordingFinishedEvent, "eventName", 'recordingfinished');
var PlayRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PlayRecordingEvent, Event1);
    var _super = _create_super(PlayRecordingEvent);
    function PlayRecordingEvent() {
        var data = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            targetPanel: "chrome-recorder" /* TargetPanel.Default */ ,
            speed: "normal" /* PlayRecordingSpeed.Normal */ 
        };
        _class_call_check(this, PlayRecordingEvent);
        var _this;
        _this = _super.call(this, PlayRecordingEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = data;
        return _this;
    }
    return PlayRecordingEvent;
}(_wrap_native_super(Event));
_define_property(PlayRecordingEvent, "eventName", 'playrecording');
var AbortReplayEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AbortReplayEvent, Event1);
    var _super = _create_super(AbortReplayEvent);
    function AbortReplayEvent() {
        _class_call_check(this, AbortReplayEvent);
        return _super.call(this, AbortReplayEvent.eventName);
    }
    return AbortReplayEvent;
}(_wrap_native_super(Event));
_define_property(AbortReplayEvent, "eventName", 'abortreplay');
var RecordingChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingChangedEvent, Event1);
    var _super = _create_super(RecordingChangedEvent);
    function RecordingChangedEvent(currentStep, newStep) {
        _class_call_check(this, RecordingChangedEvent);
        var _this;
        _this = _super.call(this, RecordingChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            currentStep: currentStep,
            newStep: newStep
        };
        return _this;
    }
    return RecordingChangedEvent;
}(_wrap_native_super(Event));
_define_property(RecordingChangedEvent, "eventName", 'recordingchanged');
var AddAssertionEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AddAssertionEvent, Event1);
    var _super = _create_super(AddAssertionEvent);
    function AddAssertionEvent() {
        _class_call_check(this, AddAssertionEvent);
        return _super.call(this, AddAssertionEvent.eventName);
    }
    return AddAssertionEvent;
}(_wrap_native_super(Event));
_define_property(AddAssertionEvent, "eventName", 'addassertion');
var RecordingTitleChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingTitleChangedEvent, Event1);
    var _super = _create_super(RecordingTitleChangedEvent);
    function RecordingTitleChangedEvent(title) {
        _class_call_check(this, RecordingTitleChangedEvent);
        var _this;
        _this = _super.call(this, RecordingTitleChangedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "title", void 0);
        _this.title = title;
        return _this;
    }
    return RecordingTitleChangedEvent;
}(_wrap_native_super(Event));
_define_property(RecordingTitleChangedEvent, "eventName", 'recordingtitlechanged');
var NetworkConditionsChanged = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(NetworkConditionsChanged, Event1);
    var _super = _create_super(NetworkConditionsChanged);
    function NetworkConditionsChanged(data) {
        _class_call_check(this, NetworkConditionsChanged);
        var _this;
        _this = _super.call(this, NetworkConditionsChanged.eventName, {
            composed: true,
            bubbles: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = data;
        return _this;
    }
    return NetworkConditionsChanged;
}(_wrap_native_super(Event));
_define_property(NetworkConditionsChanged, "eventName", 'networkconditionschanged');
var TimeoutChanged = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(TimeoutChanged, Event1);
    var _super = _create_super(TimeoutChanged);
    function TimeoutChanged(data) {
        _class_call_check(this, TimeoutChanged);
        var _this;
        _this = _super.call(this, TimeoutChanged.eventName, {
            composed: true,
            bubbles: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = data;
        return _this;
    }
    return TimeoutChanged;
}(_wrap_native_super(Event));
_define_property(TimeoutChanged, "eventName", 'timeoutchanged');
var networkConditionPresets = [
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.OfflineConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow3GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow4GConditions,
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Fast4GConditions
];
function converterIdToFlowMetric(converterId) {
    switch(converterId){
        case "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */ :
            return 1 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithPuppeteer */ ;
        case "json" /* Models.ConverterIds.ConverterIds.JSON */ :
            return 2 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithJSON */ ;
        case "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */ :
            return 3 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithReplay */ ;
        default:
            return 4 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedRecordingWithExtension */ ;
    }
}
function converterIdToStepMetric(converterId) {
    switch(converterId){
        case "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */ :
            return 5 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithPuppeteer */ ;
        case "json" /* Models.ConverterIds.ConverterIds.JSON */ :
            return 6 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithJSON */ ;
        case "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */ :
            return 7 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithReplay */ ;
        default:
            return 8 /* Host.UserMetrics.RecordingCopiedToClipboard.CopiedStepWithExtension */ ;
    }
}
var _shadow = /*#__PURE__*/ new WeakMap(), _replayState = /*#__PURE__*/ new WeakMap(), _userFlow = /*#__PURE__*/ new WeakMap(), _isRecording = /*#__PURE__*/ new WeakMap(), _recordingTogglingInProgress = /*#__PURE__*/ new WeakMap(), _isTitleInvalid = /*#__PURE__*/ new WeakMap(), _currentStep = /*#__PURE__*/ new WeakMap(), _steps = /*#__PURE__*/ new WeakMap(), _currentError = /*#__PURE__*/ new WeakMap(), _sections = /*#__PURE__*/ new WeakMap(), _settings = /*#__PURE__*/ new WeakMap(), _recorderSettings = /*#__PURE__*/ new WeakMap(), _lastReplayResult = /*#__PURE__*/ new WeakMap(), _breakpointIndexes = /*#__PURE__*/ new WeakMap(), _selectedStep = /*#__PURE__*/ new WeakMap(), _replaySettingsExpanded = /*#__PURE__*/ new WeakMap(), _replayAllowed = /*#__PURE__*/ new WeakMap(), _builtInConverters = /*#__PURE__*/ new WeakMap(), _extensionConverters = /*#__PURE__*/ new WeakMap(), _replayExtensions = /*#__PURE__*/ new WeakMap(), _showCodeView = /*#__PURE__*/ new WeakMap(), _code = /*#__PURE__*/ new WeakMap(), _converterId = /*#__PURE__*/ new WeakMap(), _editorState = /*#__PURE__*/ new WeakMap(), _sourceMap = /*#__PURE__*/ new WeakMap(), _extensionDescriptor = /*#__PURE__*/ new WeakMap(), _onCopyBound = /*#__PURE__*/ new WeakMap(), _dispatchAddAssertionEvent = /*#__PURE__*/ new WeakSet(), _dispatchRecordingFinished = /*#__PURE__*/ new WeakSet(), _handleAbortReplay = /*#__PURE__*/ new WeakSet(), _handleTogglePlaying = /*#__PURE__*/ new WeakSet(), _getStepState = /*#__PURE__*/ new WeakSet(), _getSectionState = /*#__PURE__*/ new WeakSet(), _renderStep = /*#__PURE__*/ new WeakSet(), _onStepHover = /*#__PURE__*/ new WeakMap(), _onStepClick = /*#__PURE__*/ new WeakSet(), _onWrapperClick = /*#__PURE__*/ new WeakSet(), _onReplaySettingsKeydown = /*#__PURE__*/ new WeakSet(), _onToggleReplaySettings = /*#__PURE__*/ new WeakSet(), _onNetworkConditionsChange = /*#__PURE__*/ new WeakSet(), _onTimeoutInput = /*#__PURE__*/ new WeakSet(), _onTitleBlur = /*#__PURE__*/ new WeakMap(), _onTitleInputKeyDown = /*#__PURE__*/ new WeakMap(), _onEditTitleButtonClick = /*#__PURE__*/ new WeakMap(), _onSelectMenuLabelClick = /*#__PURE__*/ new WeakMap(), _copyCurrentSelection = /*#__PURE__*/ new WeakSet(), _onCopyStepEvent = /*#__PURE__*/ new WeakSet(), _onCopy = /*#__PURE__*/ new WeakSet(), _renderSettings = /*#__PURE__*/ new WeakSet(), _getCurrentConverter = /*#__PURE__*/ new WeakSet(), _renderTimelineArea = /*#__PURE__*/ new WeakSet(), _renderScreenshot = /*#__PURE__*/ new WeakSet(), _renderReplayOrAbortButton = /*#__PURE__*/ new WeakSet(), _handleMeasurePerformanceClickEvent = /*#__PURE__*/ new WeakSet(), _convertToCode = /*#__PURE__*/ new WeakMap(), _highlightCodeForStep = /*#__PURE__*/ new WeakMap(), _onCodeFormatChange = /*#__PURE__*/ new WeakMap(), _renderSections = /*#__PURE__*/ new WeakSet(), _renderHeader = /*#__PURE__*/ new WeakSet(), _renderFooter = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var RecordingView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(RecordingView, HTMLElement1);
    var _super = _create_super(RecordingView);
    function RecordingView() {
        _class_call_check(this, RecordingView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _dispatchAddAssertionEvent);
        _class_private_method_init(_assert_this_initialized(_this), _dispatchRecordingFinished);
        _class_private_method_init(_assert_this_initialized(_this), _handleAbortReplay);
        _class_private_method_init(_assert_this_initialized(_this), _handleTogglePlaying);
        _class_private_method_init(_assert_this_initialized(_this), _getStepState);
        _class_private_method_init(_assert_this_initialized(_this), _getSectionState);
        _class_private_method_init(_assert_this_initialized(_this), _renderStep);
        _class_private_method_init(_assert_this_initialized(_this), _onStepClick);
        _class_private_method_init(_assert_this_initialized(_this), _onWrapperClick);
        _class_private_method_init(_assert_this_initialized(_this), _onReplaySettingsKeydown);
        _class_private_method_init(_assert_this_initialized(_this), _onToggleReplaySettings);
        _class_private_method_init(_assert_this_initialized(_this), _onNetworkConditionsChange);
        _class_private_method_init(_assert_this_initialized(_this), _onTimeoutInput);
        _class_private_method_init(_assert_this_initialized(_this), _copyCurrentSelection);
        _class_private_method_init(_assert_this_initialized(_this), _onCopyStepEvent);
        _class_private_method_init(_assert_this_initialized(_this), _onCopy);
        _class_private_method_init(_assert_this_initialized(_this), _renderSettings);
        _class_private_method_init(_assert_this_initialized(_this), _getCurrentConverter);
        _class_private_method_init(_assert_this_initialized(_this), _renderTimelineArea);
        _class_private_method_init(_assert_this_initialized(_this), _renderScreenshot);
        _class_private_method_init(_assert_this_initialized(_this), _renderReplayOrAbortButton);
        _class_private_method_init(_assert_this_initialized(_this), _handleMeasurePerformanceClickEvent);
        _class_private_method_init(_assert_this_initialized(_this), _renderSections);
        _class_private_method_init(_assert_this_initialized(_this), _renderHeader);
        _class_private_method_init(_assert_this_initialized(_this), _renderFooter);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayState, {
            writable: true,
            value: {
                isPlaying: false,
                isPausedOnBreakpoint: false
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _userFlow, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _isRecording, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _recordingTogglingInProgress, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _isTitleInvalid, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentStep, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _steps, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentError, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sections, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _settings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _recorderSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastReplayResult, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpointIndexes, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedStep, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _replaySettingsExpanded, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayAllowed, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _builtInConverters, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _extensionConverters, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayExtensions, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _showCodeView, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _code, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _converterId, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _editorState, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sourceMap, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _extensionDescriptor, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _onCopyBound, {
            writable: true,
            value: _class_private_method_get(_this, _onCopy, onCopy).bind(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _onStepHover, {
            writable: true,
            value: function(event) {
                var _stepView_section;
                var stepView = event.target;
                var step = stepView.step || ((_stepView_section = stepView.section) === null || _stepView_section === void 0 ? void 0 : _stepView_section.causingStep);
                if (!step || _class_private_field_get(_assert_this_initialized(_this), _selectedStep)) {
                    return;
                }
                _class_private_field_get(_this, _highlightCodeForStep).call(_assert_this_initialized(_this), step);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTitleBlur, {
            writable: true,
            value: function(event) {
                var target = event.target;
                var title = target.innerText.trim();
                if (!title) {
                    _class_private_field_set(_assert_this_initialized(_this), _isTitleInvalid, true);
                    _class_private_method_get(_this, _render, render).call(_assert_this_initialized(_this));
                    return;
                }
                _this.dispatchEvent(new RecordingTitleChangedEvent(title));
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onTitleInputKeyDown, {
            writable: true,
            value: function(event) {
                switch(event.code){
                    case 'Escape':
                    case 'Enter':
                        event.target.blur();
                        event.stopPropagation();
                        break;
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onEditTitleButtonClick, {
            writable: true,
            value: function() {
                var input = _class_private_field_get(_this, _shadow).getElementById('title-input');
                input.focus();
                var range = document.createRange();
                range.selectNodeContents(input);
                range.collapse(false);
                var selection = window.getSelection();
                selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
                selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onSelectMenuLabelClick, {
            writable: true,
            value: function(event) {
                var target = event.target;
                if (target.matches('.wrapping-label')) {
                    var _target_querySelector;
                    (_target_querySelector = target.querySelector('devtools-select-menu')) === null || _target_querySelector === void 0 ? void 0 : _target_querySelector.click();
                }
            }
        });
        _define_property(_assert_this_initialized(_this), "showCodeToggle", function() {
            _class_private_field_set(_assert_this_initialized(_this), _showCodeView, !_class_private_field_get(_assert_this_initialized(_this), _showCodeView));
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCodeToggled(_class_private_field_get(_assert_this_initialized(_this), _showCodeView) ? 1 /* Host.UserMetrics.RecordingCodeToggled.CodeShown */  : 2 /* Host.UserMetrics.RecordingCodeToggled.CodeHidden */ );
            void _class_private_field_get(_this, _convertToCode).call(_assert_this_initialized(_this));
        });
        var _this1 = _assert_this_initialized(_this);
        _class_private_field_init(_assert_this_initialized(_this), _convertToCode, {
            writable: true,
            value: /*#__PURE__*/ _async_to_generator(function() {
                var _$_class_private_field_get, converter, _ref, code, sourceMap, mediaType, languageSupport, _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!_class_private_field_get(_this1, _userFlow)) {
                                return [
                                    2
                                ];
                            }
                            converter = _class_private_method_get(_this1, _getCurrentConverter, getCurrentConverter).call(_this1);
                            if (!converter) {
                                return [
                                    2
                                ];
                            }
                            return [
                                4,
                                converter.stringify(_class_private_field_get(_this1, _userFlow))
                            ];
                        case 1:
                            _ref = _sliced_to_array.apply(void 0, [
                                _state.sent(),
                                2
                            ]), code = _ref[0], sourceMap = _ref[1];
                            _class_private_field_set(_this1, _code, code);
                            _class_private_field_set(_this1, _sourceMap, sourceMap);
                            (_$_class_private_field_get = _class_private_field_get(_this1, _sourceMap)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.shift();
                            mediaType = converter.getMediaType();
                            if (!mediaType) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__.CodeHighlighter.languageFromMIME(mediaType)
                            ];
                        case 2:
                            _tmp = _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            _tmp = null;
                            _state.label = 4;
                        case 4:
                            languageSupport = _tmp;
                            _class_private_field_set(_this1, _editorState, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.create({
                                doc: _class_private_field_get(_this1, _code),
                                extensions: [
                                    _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(_class_private_field_get(_this1, _code)),
                                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorState.readOnly.of(true),
                                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorView.lineWrapping,
                                    languageSupport ? languageSupport : []
                                ]
                            }));
                            _class_private_method_get(_this1, _render, render).call(_this1);
                            // Used by tests.
                            _this1.dispatchEvent(new Event('code-generated'));
                            return [
                                2
                            ];
                    }
                });
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightCodeForStep, {
            writable: true,
            value: function(step) {
                var scroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                if (!_class_private_field_get(_assert_this_initialized(_this), _sourceMap)) {
                    return;
                }
                var stepIndex = _class_private_field_get(_this, _steps).indexOf(step);
                if (stepIndex === -1) {
                    return;
                }
                var editor = _class_private_field_get(_this, _shadow).querySelector('devtools-text-editor');
                if (!editor) {
                    return;
                }
                var cm = editor.editor;
                if (!cm) {
                    return;
                }
                var line = _class_private_field_get(_this, _sourceMap)[stepIndex * 2];
                var length = _class_private_field_get(_this, _sourceMap)[stepIndex * 2 + 1];
                var selection = editor.createSelection({
                    lineNumber: line + length,
                    columnNumber: 0
                }, {
                    lineNumber: line,
                    columnNumber: 0
                });
                var lastLine = editor.state.doc.lineAt(selection.main.anchor);
                selection = editor.createSelection({
                    lineNumber: line + length - 1,
                    columnNumber: lastLine.length + 1
                }, {
                    lineNumber: line,
                    columnNumber: 0
                });
                cm.dispatch({
                    selection: selection,
                    effects: scroll ? [
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_4__.EditorView.scrollIntoView(selection.main, {
                            y: 'nearest'
                        })
                    ] : undefined
                });
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onCodeFormatChange, {
            writable: true,
            value: function(event) {
                _class_private_field_set(_assert_this_initialized(_this), _converterId, event.itemValue);
                if (_class_private_field_get(_assert_this_initialized(_this), _recorderSettings)) {
                    _class_private_field_get(_this, _recorderSettings).preferredCopyFormat = event.itemValue;
                }
                void _class_private_field_get(_this, _convertToCode).call(_assert_this_initialized(_this));
            }
        });
        return _this;
    }
    _create_class(RecordingView, [
        {
            key: "data",
            set: function set(data) {
                var _$_class_private_field_get, _data_builtInConverters_;
                _class_private_field_set(this, _isRecording, data.isRecording);
                _class_private_field_set(this, _replayState, data.replayState);
                _class_private_field_set(this, _recordingTogglingInProgress, data.recordingTogglingInProgress);
                _class_private_field_set(this, _currentStep, data.currentStep);
                _class_private_field_set(this, _userFlow, data.recording);
                _class_private_field_set(this, _steps, _class_private_field_get(this, _userFlow).steps);
                _class_private_field_set(this, _sections, data.sections);
                _class_private_field_set(this, _settings, data.settings);
                _class_private_field_set(this, _recorderSettings, data.recorderSettings);
                _class_private_field_set(this, _currentError, data.currentError);
                _class_private_field_set(this, _lastReplayResult, data.lastReplayResult);
                _class_private_field_set(this, _replayAllowed, data.replayAllowed);
                _class_private_field_set(this, _isTitleInvalid, false);
                _class_private_field_set(this, _breakpointIndexes, data.breakpointIndexes);
                _class_private_field_set(this, _builtInConverters, data.builtInConverters);
                _class_private_field_set(this, _extensionConverters, data.extensionConverters);
                _class_private_field_set(this, _replayExtensions, data.replayExtensions);
                _class_private_field_set(this, _extensionDescriptor, data.extensionDescriptor);
                var _class_private_field_get_preferredCopyFormat;
                _class_private_field_set(this, _converterId, (_class_private_field_get_preferredCopyFormat = (_$_class_private_field_get = _class_private_field_get(this, _recorderSettings)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.preferredCopyFormat) !== null && _class_private_field_get_preferredCopyFormat !== void 0 ? _class_private_field_get_preferredCopyFormat : (_data_builtInConverters_ = data.builtInConverters[0]) === null || _data_builtInConverters_ === void 0 ? void 0 : _data_builtInConverters_.getId());
                void _class_private_field_get(this, _convertToCode).call(this);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _recordingView_css_js__WEBPACK_IMPORTED_MODULE_17__["default"],
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_9__.textInputStyles
                ];
                document.addEventListener('copy', _class_private_field_get(this, _onCopyBound));
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                document.removeEventListener('copy', _class_private_field_get(this, _onCopyBound));
            }
        },
        {
            key: "scrollToBottom",
            value: function scrollToBottom() {
                var _this_shadowRoot;
                var wrapper = (_this_shadowRoot = this.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector('.sections');
                if (!wrapper) {
                    return;
                }
                wrapper.scrollTop = wrapper.scrollHeight;
            }
        }
    ]);
    return RecordingView;
}(_wrap_native_super(HTMLElement));
_define_property(RecordingView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.literal(_templateObject()));
function dispatchAddAssertionEvent() {
    this.dispatchEvent(new AddAssertionEvent());
}
function dispatchRecordingFinished() {
    this.dispatchEvent(new RecordingFinishedEvent());
}
function handleAbortReplay() {
    this.dispatchEvent(new AbortReplayEvent());
}
function handleTogglePlaying(event) {
    this.dispatchEvent(new PlayRecordingEvent({
        targetPanel: "chrome-recorder" /* TargetPanel.Default */ ,
        speed: event.speed,
        extension: event.extension
    }));
}
function getStepState(step) {
    if (!_class_private_field_get(this, _currentStep)) {
        return "default" /* State.Default */ ;
    }
    if (step === _class_private_field_get(this, _currentStep)) {
        if (_class_private_field_get(this, _currentError)) {
            return "error" /* State.Error */ ;
        }
        if (!_class_private_field_get(this, _replayState).isPlaying) {
            return "success" /* State.Success */ ;
        }
        if (_class_private_field_get(this, _replayState).isPausedOnBreakpoint) {
            return "stopped" /* State.Stopped */ ;
        }
        return "current" /* State.Current */ ;
    }
    var currentIndex = _class_private_field_get(this, _steps).indexOf(_class_private_field_get(this, _currentStep));
    if (currentIndex === -1) {
        return "default" /* State.Default */ ;
    }
    var index = _class_private_field_get(this, _steps).indexOf(step);
    return index < currentIndex ? "success" /* State.Success */  : "outstanding" /* State.Outstanding */ ;
}
function getSectionState(section) {
    var currentStep = _class_private_field_get(this, _currentStep);
    if (!currentStep) {
        return "default" /* State.Default */ ;
    }
    var currentSection = _class_private_field_get(this, _sections).find(function(section) {
        return section.steps.includes(currentStep);
    });
    if (!currentSection) {
        if (_class_private_field_get(this, _currentError)) {
            return "error" /* State.Error */ ;
        }
    }
    if (section === currentSection) {
        return "success" /* State.Success */ ;
    }
    var index = _class_private_field_get(this, _sections).indexOf(currentSection);
    var ownIndex = _class_private_field_get(this, _sections).indexOf(section);
    return index >= ownIndex ? "success" /* State.Success */  : "outstanding" /* State.Outstanding */ ;
}
function renderStep(section, step, isLastSection) {
    var stepIndex = _class_private_field_get(this, _steps).indexOf(step);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject1(), _StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName, _class_private_method_get(this, _onStepClick, onStepClick), _class_private_field_get(this, _onStepHover), _class_private_method_get(this, _onCopyStepEvent, onCopyStepEvent), {
        step: step,
        state: _class_private_method_get(this, _getStepState, getStepState).call(this, step),
        error: _class_private_field_get(this, _currentStep) === step ? _class_private_field_get(this, _currentError) : undefined,
        isFirstSection: false,
        isLastSection: isLastSection && _class_private_field_get(this, _steps)[_class_private_field_get(this, _steps).length - 1] === step,
        isStartOfGroup: false,
        isEndOfGroup: section.steps[section.steps.length - 1] === step,
        stepIndex: stepIndex,
        hasBreakpoint: _class_private_field_get(this, _breakpointIndexes).has(stepIndex),
        sectionIndex: -1,
        isRecording: _class_private_field_get(this, _isRecording),
        isPlaying: _class_private_field_get(this, _replayState).isPlaying,
        removable: _class_private_field_get(this, _steps).length > 1,
        builtInConverters: _class_private_field_get(this, _builtInConverters),
        extensionConverters: _class_private_field_get(this, _extensionConverters),
        isSelected: _class_private_field_get(this, _selectedStep) === step,
        recorderSettings: _class_private_field_get(this, _recorderSettings)
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.section('step').track({
        click: true
    }), _StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName);
// clang-format on
}
function onStepClick(event) {
    var _stepView_section;
    event.stopPropagation();
    var stepView = event.target;
    var selectedStep = stepView.step || ((_stepView_section = stepView.section) === null || _stepView_section === void 0 ? void 0 : _stepView_section.causingStep) || null;
    if (_class_private_field_get(this, _selectedStep) === selectedStep) {
        return;
    }
    _class_private_field_set(this, _selectedStep, selectedStep);
    _class_private_method_get(this, _render, render).call(this);
    if (selectedStep) {
        _class_private_field_get(this, _highlightCodeForStep).call(this, selectedStep, /* scroll=*/ true);
    }
}
function onWrapperClick() {
    if (_class_private_field_get(this, _selectedStep) === undefined) {
        return;
    }
    _class_private_field_set(this, _selectedStep, undefined);
    _class_private_method_get(this, _render, render).call(this);
}
function onReplaySettingsKeydown(event) {
    if (event.key !== 'Enter') {
        return;
    }
    event.preventDefault();
    _class_private_method_get(this, _onToggleReplaySettings, onToggleReplaySettings).call(this, event);
}
function onToggleReplaySettings(event) {
    event.stopPropagation();
    _class_private_field_set(this, _replaySettingsExpanded, !_class_private_field_get(this, _replaySettingsExpanded));
    _class_private_method_get(this, _render, render).call(this);
}
function onNetworkConditionsChange(event) {
    var preset = networkConditionPresets.find(function(preset) {
        return preset.i18nTitleKey === event.itemValue;
    });
    this.dispatchEvent(new NetworkConditionsChanged((preset === null || preset === void 0 ? void 0 : preset.i18nTitleKey) === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.i18nTitleKey ? undefined : preset));
}
function onTimeoutInput(event) {
    var target = event.target;
    if (!target.checkValidity()) {
        target.reportValidity();
        return;
    }
    this.dispatchEvent(new TimeoutChanged(Number(target.value)));
}
function copyCurrentSelection(step) {
    return _copyCurrentSelection1.apply(this, arguments);
}
function _copyCurrentSelection1() {
    _copyCurrentSelection1 = _async_to_generator(function(step) {
        var _this, converter, text, ref, metric;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    converter = _to_consumable_array(_class_private_field_get(this, _builtInConverters)).concat(_to_consumable_array(_class_private_field_get(this, _extensionConverters))).find(function(converter) {
                        var _$_class_private_field_get;
                        return converter.getId() === ((_$_class_private_field_get = _class_private_field_get(_this, _recorderSettings)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.preferredCopyFormat);
                    });
                    if (!converter) {
                        converter = _class_private_field_get(this, _builtInConverters)[0];
                    }
                    if (!converter) {
                        throw new Error('No default converter found');
                    }
                    text = '';
                    if (!step) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        converter.stringifyStep(step)
                    ];
                case 1:
                    text = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 2:
                    if (!_class_private_field_get(this, _userFlow)) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        converter.stringify(_class_private_field_get(this, _userFlow))
                    ];
                case 3:
                    ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), text = ref[0], ref;
                    _state.label = 4;
                case 4:
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(text);
                    metric = step ? converterIdToStepMetric(converter.getId()) : converterIdToFlowMetric(converter.getId());
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingCopiedToClipboard(metric);
                    return [
                        2
                    ];
            }
        });
    });
    return _copyCurrentSelection1.apply(this, arguments);
}
function onCopyStepEvent(event) {
    event.stopPropagation();
    void _class_private_method_get(this, _copyCurrentSelection, copyCurrentSelection).call(this, event.step);
}
function onCopy(event) {
    return _onCopy1.apply(this, arguments);
}
function _onCopy1() {
    _onCopy1 = _async_to_generator(function(event) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (event.target !== document.body) {
                        return [
                            2
                        ];
                    }
                    event.preventDefault();
                    return [
                        4,
                        _class_private_method_get(this, _copyCurrentSelection, copyCurrentSelection).call(this, _class_private_field_get(this, _selectedStep))
                    ];
                case 1:
                    _state.sent();
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.keyboardShortcutFired("chrome-recorder.copy-recording-or-step" /* Actions.RecorderActions.CopyRecordingOrStep */ );
                    return [
                        2
                    ];
            }
        });
    });
    return _onCopy1.apply(this, arguments);
}
function renderSettings() {
    if (!_class_private_field_get(this, _settings)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject2());
    }
    var environmentFragments = [];
    if (_class_private_field_get(this, _settings).viewportSettings) {
        // clang-format off
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject3(), _class_private_field_get(this, _settings).viewportSettings.isMobile ? i18nString(UIStrings.mobile) : i18nString(UIStrings.desktop)));
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject4()));
        environmentFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject5(), _class_private_field_get(this, _settings).viewportSettings.width, _class_private_field_get(this, _settings).viewportSettings.height));
    // clang-format on
    }
    var replaySettingsFragments = [];
    if (!_class_private_field_get(this, _replaySettingsExpanded)) {
        if (_class_private_field_get(this, _settings).networkConditionsSettings) {
            if (_class_private_field_get(this, _settings).networkConditionsSettings.title) {
                // clang-format off
                replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject6(), _class_private_field_get(this, _settings).networkConditionsSettings.title));
            // clang-format on
            } else {
                // clang-format off
                replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject7(), i18nString(UIStrings.download, {
                    value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(_class_private_field_get(this, _settings).networkConditionsSettings.download)
                }), i18nString(UIStrings.upload, {
                    value: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(_class_private_field_get(this, _settings).networkConditionsSettings.upload)
                }), i18nString(UIStrings.latency, {
                    value: _class_private_field_get(this, _settings).networkConditionsSettings.latency
                })));
            // clang-format on
            }
        } else {
            // clang-format off
            replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject8(), _instanceof(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title, Function) ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title() : _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.title));
        // clang-format on
        }
        // clang-format off
        replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject9()));
        replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject10(), i18nString(UIStrings.timeout, {
            value: _class_private_field_get(this, _settings).timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout
        })));
    // clang-format on
    } else {
        var _class_private_field_get_networkConditionsSettings;
        // clang-format off
        var selectedOption = ((_class_private_field_get_networkConditionsSettings = _class_private_field_get(this, _settings).networkConditionsSettings) === null || _class_private_field_get_networkConditionsSettings === void 0 ? void 0 : _class_private_field_get_networkConditionsSettings.i18nTitleKey) || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NoThrottlingConditions.i18nTitleKey;
        var selectedOptionTitle = networkConditionPresets.find(function(preset) {
            return preset.i18nTitleKey === selectedOption;
        });
        var menuButtonTitle = '';
        if (selectedOptionTitle) {
            menuButtonTitle = _instanceof(selectedOptionTitle.title, Function) ? selectedOptionTitle.title() : selectedOptionTitle.title;
        }
        replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject12(), _class_private_field_get(this, _onSelectMenuLabelClick), i18nString(UIStrings.network), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName, _class_private_method_get(this, _onNetworkConditionsChange, onNetworkConditionsChange), !_class_private_field_get(this, _steps).find(function(step) {
            return step.type === 'navigate';
        }), true, true, false, true, false, 'network-conditions', "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ , menuButtonTitle, networkConditionPresets.map(function(condition) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject11(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName, condition.i18nTitleKey, selectedOption === condition.i18nTitleKey, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(condition.i18nTitleKey || '')), _instanceof(condition.title, Function) ? condition.title() : condition.title, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName);
        }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName));
        replaySettingsFragments.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject13(), i18nString(UIStrings.timeoutExplanation), i18nString(UIStrings.timeoutLabel), _class_private_method_get(this, _onTimeoutInput, onTimeoutInput), _models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.minTimeout, _models_models_js__WEBPACK_IMPORTED_MODULE_15__.SchemaUtils.maxTimeout, _class_private_field_get(this, _settings).timeout || _models_models_js__WEBPACK_IMPORTED_MODULE_15__.RecordingPlayer.defaultTimeout, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField('timeout').track({
            change: true
        })));
    // clang-format on
    }
    var isEditable = !_class_private_field_get(this, _isRecording) && !_class_private_field_get(this, _replayState).isPlaying;
    var replaySettingsButtonClassMap = {
        'settings-title': true,
        expanded: _class_private_field_get(this, _replaySettingsExpanded)
    };
    var replaySettingsClassMap = {
        expanded: _class_private_field_get(this, _replaySettingsExpanded),
        settings: true
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject17(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(replaySettingsButtonClassMap), isEditable && _class_private_method_get(this, _onReplaySettingsKeydown, onReplaySettingsKeydown), isEditable && _class_private_method_get(this, _onToggleReplaySettings, onToggleReplaySettings), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action('replay-settings').track({
        click: true
    }), i18nString(UIStrings.editReplaySettings), i18nString(UIStrings.replaySettings), isEditable ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject14(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon.litTagName) : '', _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(replaySettingsClassMap), replaySettingsFragments.length ? replaySettingsFragments : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject15(), i18nString(UIStrings.default)), i18nString(UIStrings.environment), environmentFragments.length ? environmentFragments : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject16(), i18nString(UIStrings.default)));
// clang-format on
}
function getCurrentConverter() {
    var _this = this;
    var currentConverter = _to_consumable_array(_class_private_field_get(this, _builtInConverters) || []).concat(_to_consumable_array(_class_private_field_get(this, _extensionConverters) || [])).find(function(converter) {
        return converter.getId() === _class_private_field_get(_this, _converterId);
    });
    if (!currentConverter) {
        return _class_private_field_get(this, _builtInConverters)[0];
    }
    return currentConverter;
}
function renderTimelineArea() {
    var _this = this;
    if (_class_private_field_get(this, _extensionDescriptor)) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject18(), _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName, _class_private_field_get(this, _extensionDescriptor), _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName);
    // clang-format on
    }
    var currentConverter = _class_private_method_get(this, _getCurrentConverter, getCurrentConverter).call(this);
    var converterFormatName = currentConverter === null || currentConverter === void 0 ? void 0 : currentConverter.getFormatName();
    // clang-format off
    return !_class_private_field_get(this, _showCodeView) ? _class_private_method_get(this, _renderSections, renderSections).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject21(), _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName, _class_private_method_get(this, _renderSections, renderSections).call(this), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.pane('source-code').track({
        resize: true
    }), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toolbar(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName, _class_private_field_get(this, _onCodeFormatChange), true, true, false, true, false, "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ , converterFormatName, 'code-format', _class_private_field_get(this, _builtInConverters).map(function(converter) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject19(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName, converter.getId(), _class_private_field_get(_this, _converterId) === converter.getId(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({
            click: true
        }).context("converter-".concat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(converter.getId()))), converter.getFormatName(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName);
    }), _class_private_field_get(this, _extensionConverters).map(function(converter) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject20(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName, converter.getId(), _class_private_field_get(_this, _converterId) === converter.getId(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.action().track({
            click: true
        }).context('converter-extension'), converter.getFormatName(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.Menu.MenuItem.litTagName);
    }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_10__.SelectMenu.SelectMenu.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.hideCode), "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ ), {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'cross'
    }, this.showCodeToggle, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.close().track({
        click: true
    }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.textField().track({
        change: true
    }), _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName, _class_private_field_get(this, _editorState), _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor.litTagName, _ui_components_split_view_split_view_js__WEBPACK_IMPORTED_MODULE_11__.SplitView.SplitView.litTagName);
// clang-format on
}
function renderScreenshot(section) {
    if (!section.screenshot) {
        return null;
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject22(), section.screenshot, i18nString(UIStrings.screenshotForSection));
// clang-format on
}
function renderReplayOrAbortButton() {
    if (_class_private_field_get(this, _replayState).isPlaying) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject23(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, 'abort-replay', _class_private_method_get(this, _handleAbortReplay, handleAbortReplay), 'pause', "outlined" /* Buttons.Button.Variant.OUTLINED */ , i18nString(UIStrings.cancelReplay), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject24(), _ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__.ReplaySection.litTagName, {
        settings: _class_private_field_get(this, _recorderSettings),
        replayExtensions: _class_private_field_get(this, _replayExtensions)
    }, _class_private_field_get(this, _replayState).isPlaying, _class_private_method_get(this, _handleTogglePlaying, handleTogglePlaying), _ReplaySection_js__WEBPACK_IMPORTED_MODULE_18__.ReplaySection.litTagName);
// clang-format on
}
function handleMeasurePerformanceClickEvent(event) {
    event.stopPropagation();
    this.dispatchEvent(new PlayRecordingEvent({
        targetPanel: "timeline" /* TargetPanel.PerformancePanel */ ,
        speed: "normal" /* PlayRecordingSpeed.Normal */ 
    }));
}
function renderSections() {
    var _this = this;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject29(), !_class_private_field_get(this, _showCodeView) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject25(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, this.showCodeToggle, {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        title: _models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(i18nString(UIStrings.showCode), "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ )
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggleSubpane("chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ ).track({
        click: true
    }), i18nString(UIStrings.showCode), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName) : '', _class_private_field_get(this, _sections).map(function(section, i) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject28(), _class_private_method_get(_this, _renderScreenshot, renderScreenshot).call(_this, section), _StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName, _class_private_method_get(_this, _onStepClick, onStepClick), _class_private_field_get(_this, _onStepHover), {
            section: section,
            state: _class_private_method_get(_this, _getSectionState, getSectionState).call(_this, section),
            isStartOfGroup: true,
            isEndOfGroup: section.steps.length === 0,
            isFirstSection: i === 0,
            isLastSection: i === _class_private_field_get(_this, _sections).length - 1 && section.steps.length === 0,
            isSelected: _class_private_field_get(_this, _selectedStep) === (section.causingStep || null),
            sectionIndex: i,
            isRecording: _class_private_field_get(_this, _isRecording),
            isPlaying: _class_private_field_get(_this, _replayState).isPlaying,
            error: _class_private_method_get(_this, _getSectionState, getSectionState).call(_this, section) === "error" /* State.Error */  ? _class_private_field_get(_this, _currentError) : undefined,
            hasBreakpoint: false,
            removable: _class_private_field_get(_this, _steps).length > 1 && section.causingStep
        }, _StepView_js__WEBPACK_IMPORTED_MODULE_19__.StepView.litTagName, section.steps.map(function(step) {
            return _class_private_method_get(_this, _renderStep, renderStep).call(_this, section, step, i === _class_private_field_get(_this, _sections).length - 1);
        }), !_class_private_field_get(_this, _recordingTogglingInProgress) && _class_private_field_get(_this, _isRecording) && i === _class_private_field_get(_this, _sections).length - 1 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject26(), {
            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
            title: i18nString(UIStrings.addAssertion),
            jslogContext: 'add-assertion'
        }, _class_private_method_get(_this, _dispatchAddAssertionEvent, dispatchAddAssertionEvent), i18nString(UIStrings.addAssertion)) : undefined, _class_private_field_get(_this, _isRecording) && i === _class_private_field_get(_this, _sections).length - 1 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject27(), i18nString(UIStrings.recording)) : null);
    }));
// clang-format on
}
function renderHeader() {
    if (!_class_private_field_get(this, _userFlow)) {
        return '';
    }
    var title = _class_private_field_get(this, _userFlow).title;
    var isTitleEditable = !_class_private_field_get(this, _replayState).isPlaying && !_class_private_field_get(this, _isRecording);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject32(), _class_private_field_get(this, _onTitleBlur), _class_private_field_get(this, _onTitleInputKeyDown), isTitleEditable ? 'true' : 'false', _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.value('title').track({
        change: true
    }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap({
        'has-error': _class_private_field_get(this, _isTitleInvalid),
        'disabled': !isTitleEditable
    }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.live(title), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_field_get(this, _onEditTitleButtonClick), {
        disabled: !isTitleEditable,
        variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
        iconName: 'edit',
        title: i18nString(UIStrings.editTitle),
        jslogContext: 'edit-title'
    }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_field_get(this, _isTitleInvalid) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject30(), i18nString(UIStrings.requiredTitleError)) : '', !_class_private_field_get(this, _isRecording) && _class_private_field_get(this, _replayAllowed) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject31(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _handleMeasurePerformanceClickEvent, handleMeasurePerformanceClickEvent), {
        disabled: _class_private_field_get(this, _replayState).isPlaying,
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        iconName: 'performance',
        title: i18nString(UIStrings.performancePanel),
        jslogContext: 'measure-performance'
    }, i18nString(UIStrings.performancePanel), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _renderReplayOrAbortButton, renderReplayOrAbortButton).call(this)) : '');
// clang-format on
}
function renderFooter() {
    if (!_class_private_field_get(this, _isRecording)) {
        return '';
    }
    var translation = _class_private_field_get(this, _recordingTogglingInProgress) ? i18nString(UIStrings.recordingIsBeingStopped) : i18nString(UIStrings.endRecording);
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject33(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_14__.toggle('toggle-recording').track({
        click: true
    }), _class_private_method_get(this, _dispatchRecordingFinished, dispatchRecordingFinished), _class_private_field_get(this, _recordingTogglingInProgress), 'square', translation, _models_models_js__WEBPACK_IMPORTED_MODULE_15__.Tooltip.getTooltipForActions(translation, "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ ));
// clang-format on
}
function render() {
    var classNames = {
        wrapper: true,
        'is-recording': _class_private_field_get(this, _isRecording),
        'is-playing': _class_private_field_get(this, _replayState).isPlaying,
        'was-successful': _class_private_field_get(this, _lastReplayResult) === "Success" /* Models.RecordingPlayer.ReplayResult.Success */ ,
        'was-failure': _class_private_field_get(this, _lastReplayResult) === "Failure" /* Models.RecordingPlayer.ReplayResult.Failure */ 
    };
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject36(), _class_private_method_get(this, _onWrapperClick, onWrapperClick), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.Directives.classMap(classNames), _class_private_method_get(this, _renderHeader, renderHeader).call(this), _class_private_field_get(this, _extensionDescriptor) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject34(), _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName, _class_private_field_get(this, _extensionDescriptor), _ExtensionView_js__WEBPACK_IMPORTED_MODULE_16__.ExtensionView.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_13__.html(_templateObject35(), _class_private_method_get(this, _renderSettings, renderSettings).call(this), _class_private_method_get(this, _renderTimelineArea, renderTimelineArea).call(this)), _class_private_method_get(this, _renderFooter, renderFooter).call(this)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-recording-view', RecordingView); //# sourceMappingURL=RecordingView.js.map


}),
"./panels/recorder/components/recordingView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  height: 100%;\n}\n\n.main {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.sections {\n  flex: 1;\n  min-height: 0;\n  overflow: hidden auto;\n  background-color: var(--sys-color-cdt-base-container);\n  z-index: 0;\n  position: relative;\n  container: sections / inline-size; /* stylelint-disable-line property-no-unknown */\n}\n\n.section {\n  display: flex;\n  padding: 0 16px;\n  gap: 8px;\n  position: relative;\n}\n\n.section::after {\n  content: "";\n  border-bottom: 1px solid var(--sys-color-divider);\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.section:last-child {\n  /* Make sure there is enough space for the context menu. */\n  margin-bottom: 70px;\n}\n\n.section:last-child::after {\n  content: none;\n}\n\n.screenshot-wrapper {\n  flex: 0 0 80px;\n  padding-top: 32px;\n  z-index: 2; /* We want this to be on top of \\\'.step-overlay\\\' */\n}\n\n/* stylelint-disable-next-line at-rule-no-unknown */\n@container sections (max-width: 400px) {\n  .screenshot-wrapper {\n    display: none;\n  }\n}\n\n.screenshot {\n  object-fit: cover;\n  object-position: top center;\n  max-width: 100%;\n  width: 200px;\n  height: auto;\n  border: 1px solid var(--sys-color-divider);\n  border-radius: 1px;\n}\n\n.content {\n  flex: 1;\n  min-width: 0;\n}\n\n.steps {\n  flex: 1;\n  position: relative;\n  align-self: flex-start;\n  overflow: visible;\n}\n\n.step {\n  position: relative;\n  padding-left: 40px;\n  margin: 16px 0;\n}\n\n.step .action {\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.03em;\n}\n\n.recording {\n  color: var(--sys-color-primary);\n  font-style: italic;\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n\n.add-assertion-button {\n  margin-top: 8px;\n}\n\n.details {\n  max-width: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.url {\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--sys-color-secondary);\n  max-width: 100%;\n  margin-bottom: 16px;\n}\n\n.header {\n  align-items: center;\n  border-bottom: 1px solid var(--sys-color-divider);\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.header-title-wrapper {\n  max-width: 100%;\n}\n\n.header-title {\n  align-items: center;\n  display: flex;\n  flex: 1;\n  max-width: 100%;\n}\n\n.header-title::before {\n  content: "";\n  min-width: 12px;\n  height: 12px;\n  display: inline-block;\n  background: var(--sys-color-primary);\n  border-radius: 50%;\n  margin-right: 7px;\n}\n\n#title-input {\n  box-sizing: content-box;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 22px;\n  letter-spacing: 0.02em;\n  padding: 1px 4px;\n  border: 1px solid transparent;\n  border-radius: 1px;\n  word-break: break-all;\n}\n\n#title-input:hover {\n  border-color: var(--input-outline);\n}\n\n#title-input.has-error {\n  border-color: var(--sys-color-error);\n}\n\n#title-input.disabled {\n  color: var(--sys-color-state-disabled);\n}\n\n.title-input-error-text {\n  margin-top: 4px;\n  margin-left: 19px;\n  color: var(--sys-color-error);\n}\n\n.title-button-bar {\n  padding-left: 2px;\n  display: flex;\n}\n\n#title-input:focus + .title-button-bar {\n  display: none;\n}\n\n.settings-row {\n  padding: 16px 28px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\n.settings-title {\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.03em;\n  color: var(--sys-color-on-surface);\n  display: flex;\n  align-items: center;\n  align-content: center;\n  gap: 5px;\n  width: fit-content;\n}\n\n.settings {\n  margin-top: 4px;\n  display: flex;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.03em;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.settings.expanded {\n  gap: 10px;\n}\n\n.settings .separator {\n  width: 1px;\n  height: 20px;\n  background-color: var(--sys-color-divider);\n  margin: 0 5px;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n\n.actions .separator {\n  width: 1px;\n  height: 24px;\n  background-color: var(--sys-color-divider);\n}\n\n.is-recording .header-title::before {\n  background: var(--sys-color-error-bright);\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  border-top: 1px solid var(--sys-color-divider);\n  padding: 12px;\n  background: var(--sys-color-cdt-base-container);\n  z-index: 1;\n}\n\n.controls {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  width: 100%;\n}\n\n.chevron {\n  width: 14px;\n  height: 14px;\n  transform: rotate(-90deg);\n  color: var(--sys-color-on-surface);\n}\n\n.expanded .chevron {\n  transform: rotate(0);\n}\n\n.editable-setting {\n  display: flex;\n  flex-direction: row;\n  gap: 12px;\n  align-items: center;\n}\n\n.editable-setting devtools-select-menu {\n  height: 32px;\n}\n\n.editable-setting .devtools-text-input {\n  width: fit-content;\n}\n\n.wrapping-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.text-editor {\n  height: 100%;\n  overflow: auto;\n}\n\n.section-toolbar {\n  display: flex;\n  align-items: center;\n  padding: 3px 5px;\n  justify-content: space-between;\n  gap: 3px;\n}\n\n.section-toolbar > devtools-select-menu {\n  height: 24px;\n  min-width: 50px;\n}\n\n.sections .section-toolbar {\n  justify-content: flex-end;\n}\n\ndevtools-split-view {\n  flex: 1 1 0%;\n  min-height: 0;\n}\n\n[slot="sidebar"] {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  height: 100%;\n  width: 100%;\n}\n\n[slot="sidebar"] .section-toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.show-code {\n  margin-right: 14px;\n  margin-top: 8px;\n}\n\ndevtools-recorder-extension-view {\n  flex: 1;\n}\n\n/*# sourceURL=recordingView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/split_view/split_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SplitView: function() { return /* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./ui/components/split_view/SplitView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=split_view.js.map


}),

}]);