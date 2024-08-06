"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_RecorderController_js"], {
"./panels/emulation/emulation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdvancedApp: function() { return /* reexport module object */ _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__; },
  DeviceModeToolbar: function() { return /* reexport module object */ _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__; },
  DeviceModeView: function() { return /* reexport module object */ _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__; },
  DeviceModeWrapper: function() { return /* reexport module object */ _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__; },
  InspectedPagePlaceholder: function() { return /* reexport module object */ _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__; },
  MediaQueryInspector: function() { return /* reexport module object */ _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _AdvancedApp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedApp.js */ "./panels/emulation/AdvancedApp.js");
/* harmony import */var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
/* harmony import */var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
/* harmony import */var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */var _DeviceModeView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DeviceModeView.js */ "./panels/emulation/DeviceModeView.js");
/* harmony import */var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












 //# sourceMappingURL=emulation.js.map


}),
"./panels/recorder/RecorderController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecorderController: function() { return RecorderController; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/emulation/emulation.js */ "./panels/emulation/emulation.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/tracing/tracing.js */ "./services/tracing/tracing.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */var _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./extensions/extensions.js */ "./panels/recorder/extensions/extensions.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _recorderController_css_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recorderController.css.js */ "./panels/recorder/recorderController.css.js");
/* harmony import */var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RecorderEvents.js */ "./panels/recorder/RecorderEvents.js");
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
        "<option .selected=",
        " value=",
        ">",
        "</option>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n                    <",
        " .value=",
        "\n                      jslog=",
        ">\n                      ",
        "\n                    </",
        ">\n                  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n                    <",
        " .value=",
        "\n                      jslog=",
        ">\n                    ",
        "\n                    </",
        ">\n                  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<div class='error'>Import error: ",
        "</div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n        <div class="wrapper">\n          <div class="header" jslog=',
        ">\n            <",
        "\n              @click=",
        "\n              .data=",
        "\n            ></",
        '>\n            <div class="separator"></div>\n            <select\n              .disabled=',
        "\n              @click=",
        "\n              @change=",
        "\n              jslog=",
        "\n            >\n              ",
        '\n            </select>\n            <div class="separator"></div>\n            <',
        "\n              @click=",
        "\n              .data=",
        "\n            ></",
        ">\n            <",
        "\n              id='origin'\n              @click=",
        "\n              on-render=",
        "\n              .data=",
        "\n              jslog=",
        "\n            ></",
        ">\n            <",
        "\n              @menucloserequest=",
        "\n              @menuitemselected=",
        "\n              .origin=",
        "\n              .showDivider=",
        "\n              .showSelectedItem=",
        "\n              .showConnector=",
        "\n              .open=",
        "\n            >\n              <",
        " .name=",
        ">\n                ",
        "\n              </",
        ">\n              <",
        " .name=",
        ">\n                ",
        "\n                <",
        " .value=",
        ">\n                  ",
        "\n                </",
        ">\n              </",
        ">\n            </",
        ">\n            <",
        "\n              @click=",
        "\n              .data=",
        "\n            ></",
        '>\n            <div class="separator"></div>\n            <',
        "\n              @click=",
        "\n              .data=",
        "\n            ></",
        ">\n            <",
        "\n              @click=",
        "\n              .data=",
        "\n            ></",
        '>\n            <div class="feedback">\n              <x-link class="x-link" href=',
        " jslog=",
        ">",
        '</x-link>\n            </div>\n            <div class="separator"></div>\n            <',
        "\n              .data=",
        " jslog=",
        "\n            ></",
        ">\n          </div>\n          ",
        "\n          ",
        "\n        </div>\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        .recordings=",
        "\n        .replayAllowed=",
        "\n        @createrecording=",
        "\n        @deleterecording=",
        "\n        @openrecording=",
        "\n        @playrecording=",
        "\n        >\n      </",
        ">\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        @createrecording=",
        "\n      ></",
        ">\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        .data=",
        "\n        @networkconditionschanged=",
        "\n        @timeoutchanged=",
        "\n        @requestselectorattribute=",
        "\n        @recordingfinished=",
        "\n        @stepchanged=",
        "\n        @recordingtitlechanged=",
        "\n        @addstep=",
        "\n        @removestep=",
        "\n        @addbreakpoint=",
        "\n        @removebreakpoint=",
        "\n        @playrecording=",
        "\n        @abortreplay=",
        "\n        @recorderextensionviewclosed=",
        "\n        @addassertion=",
        "\n      ></",
        ">\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        .data=",
        "\n        @recordingstarted=",
        "\n        @recordingcancelled=",
        "\n      ></",
        ">\n    "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
var _storage, _screenshotStorage, // TODO: we keep the functionality to allow/disallow replay but right now it's not used.
// It can be used to decide if we allow replay on a certain target for example.
_replayAllowed, _replayState, _fileSelector, _exportMenuButton, _stepBreakpointIndexes, _builtInConverters, _recorderSettings, _shortcutHelper, _updateExtensions, /**
     * We should clear errors on every new action in the controller.
     * TODO: think how to make handle this centrally so that in no case
     * the error remains shown for longer than needed. Maybe a timer?
     */ _clearError, _importFile, _setCurrentRecording, _setCurrentPage, _buildSettings, _getMainTarget, _getSectionFromStep, _updateScreenshotsForSections, _onAbortReplay, _onPlayViaExtension, _onPlayRecording, _disableDeviceModeIfEnabled, _setTouchEmulationAllowed, _onSetRecording, _handleRecordingChanged, _handleStepAdded, _handleRecordingTitleChanged, _handleStepRemoved, _onNetworkConditionsChanged, _onTimeoutChanged, _onDeleteRecording, _onCreateNewRecording, _onRecordingStarted, _onRecordingFinished, _onRecordingCancelled, _onRecordingSelected, _onExportOptionSelected, _exportContent, _handleAddAssertionEvent, _onImportRecording, _onPlayRecordingByName, _onAddBreakpoint, _onRemoveBreakpoint, _onExtensionViewClosed, _getShortcutsInfo, _renderCurrentPage, _renderAllRecordingsPage, _renderStartPage, _renderRecordingPage, _renderCreateRecordingPage, _getExportMenuButton, _onExportRecording, _onExportMenuClosed, _RecorderController;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Decorators, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.LitElement;
var customElement = Decorators.customElement, state = Decorators.state;
var UIStrings = {
    /**
     * @description The title of the button that leads to a page for creating a new recording.
     */ createRecording: 'Create a new recording',
    /**
     * @description The title of the button that allows importing a recording.
     */ importRecording: 'Import recording',
    /**
     * @description The title of the button that deletes the recording
     */ deleteRecording: 'Delete recording',
    /**
     * @description The title of the select if user has no saved recordings
     */ noRecordings: 'No recordings',
    /**
     * @description The title of the select option for one or more recording
     * number followed by this text - `1 recording(s)` or `4 recording(s)`
     */ numberOfRecordings: 'recording(s)',
    /**
     * @description The title of the button that continues the replay
     */ continueReplay: 'Continue',
    /**
     * @description The title of the button that executes only one step in the replay
     */ stepOverReplay: 'Execute one step',
    /**
     * @description The title of the button that opens a menu with various options of exporting a recording to file.
     */ exportRecording: 'Export',
    /**
     * @description The title of shortcut for starting and stopping recording.
     */ startStopRecording: 'Start/Stop recording',
    /**
     * @description The title of shortcut for replaying recording.
     */ replayRecording: 'Replay recording',
    /**
     * @description The title of shortcut for copying a recording or selected step.
     */ copyShortcut: 'Copy recording or selected step',
    /**
     * @description The title of shortcut for toggling code view.
     */ toggleCode: 'Toggle code view',
    /**
     * @description The title of the menu group in the export menu of the Recorder
     * panel that is followed by the list of built-in export formats.
     */ export: 'Export',
    /**
     * @description The title of the menu group in the export menu of the Recorder
     * panel that is followed by the list of export formats available via browser
     * extensions.
     */ exportViaExtensions: 'Export via extensions',
    /**
     * @description The title of the menu option that leads to a page that lists
     * all browsers extensions available for Recorder.
     */ getExtensions: 'Get extensions…',
    /**
     * @description The button label that leads to the feedback form for Recorder.
     */ sendFeedback: 'Send feedback'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/recorder/RecorderController.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var GET_EXTENSIONS_MENU_ITEM = 'get-extensions-link';
var GET_EXTENSIONS_URL = 'https://goo.gle/recorder-extension-list';
var _obj;
var CONVERTER_ID_TO_METRIC = (_obj = {}, _define_property(_obj, "json" /* Models.ConverterIds.ConverterIds.JSON */ , 2 /* Host.UserMetrics.RecordingExported.ToJSON */ ), _define_property(_obj, "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */ , 3 /* Host.UserMetrics.RecordingExported.ToPuppeteerReplay */ ), _define_property(_obj, "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */ , 1 /* Host.UserMetrics.RecordingExported.ToPuppeteer */ ), _define_property(_obj, "lighthouse" /* Models.ConverterIds.ConverterIds.Lighthouse */ , 5 /* Host.UserMetrics.RecordingExported.ToLighthouse */ ), _obj);
var RecorderController = (_storage = /*#__PURE__*/ new WeakMap(), _screenshotStorage = /*#__PURE__*/ new WeakMap(), _replayAllowed = /*#__PURE__*/ new WeakMap(), _replayState = /*#__PURE__*/ new WeakMap(), _fileSelector = /*#__PURE__*/ new WeakMap(), _exportMenuButton = /*#__PURE__*/ new WeakMap(), _stepBreakpointIndexes = /*#__PURE__*/ new WeakMap(), _builtInConverters = /*#__PURE__*/ new WeakMap(), _recorderSettings = /*#__PURE__*/ new WeakMap(), _shortcutHelper = /*#__PURE__*/ new WeakMap(), _updateExtensions = /*#__PURE__*/ new WeakSet(), _clearError = /*#__PURE__*/ new WeakSet(), _importFile = /*#__PURE__*/ new WeakSet(), _setCurrentRecording = /*#__PURE__*/ new WeakSet(), _setCurrentPage = /*#__PURE__*/ new WeakSet(), _buildSettings = /*#__PURE__*/ new WeakSet(), _getMainTarget = /*#__PURE__*/ new WeakSet(), _getSectionFromStep = /*#__PURE__*/ new WeakSet(), _updateScreenshotsForSections = /*#__PURE__*/ new WeakSet(), _onAbortReplay = /*#__PURE__*/ new WeakSet(), _onPlayViaExtension = /*#__PURE__*/ new WeakSet(), _onPlayRecording = /*#__PURE__*/ new WeakSet(), _disableDeviceModeIfEnabled = /*#__PURE__*/ new WeakSet(), _setTouchEmulationAllowed = /*#__PURE__*/ new WeakSet(), _onSetRecording = /*#__PURE__*/ new WeakSet(), _handleRecordingChanged = /*#__PURE__*/ new WeakSet(), _handleStepAdded = /*#__PURE__*/ new WeakSet(), _handleRecordingTitleChanged = /*#__PURE__*/ new WeakSet(), _handleStepRemoved = /*#__PURE__*/ new WeakSet(), _onNetworkConditionsChanged = /*#__PURE__*/ new WeakSet(), _onTimeoutChanged = /*#__PURE__*/ new WeakSet(), _onDeleteRecording = /*#__PURE__*/ new WeakSet(), _onCreateNewRecording = /*#__PURE__*/ new WeakSet(), _onRecordingStarted = /*#__PURE__*/ new WeakSet(), _onRecordingFinished = /*#__PURE__*/ new WeakSet(), _onRecordingCancelled = /*#__PURE__*/ new WeakSet(), _onRecordingSelected = /*#__PURE__*/ new WeakSet(), _onExportOptionSelected = /*#__PURE__*/ new WeakSet(), _exportContent = /*#__PURE__*/ new WeakSet(), _handleAddAssertionEvent = /*#__PURE__*/ new WeakSet(), _onImportRecording = /*#__PURE__*/ new WeakSet(), _onPlayRecordingByName = /*#__PURE__*/ new WeakSet(), _onAddBreakpoint = /*#__PURE__*/ new WeakMap(), _onRemoveBreakpoint = /*#__PURE__*/ new WeakMap(), _onExtensionViewClosed = /*#__PURE__*/ new WeakSet(), _getShortcutsInfo = /*#__PURE__*/ new WeakSet(), _renderCurrentPage = /*#__PURE__*/ new WeakSet(), _renderAllRecordingsPage = /*#__PURE__*/ new WeakSet(), _renderStartPage = /*#__PURE__*/ new WeakSet(), _renderRecordingPage = /*#__PURE__*/ new WeakSet(), _renderCreateRecordingPage = /*#__PURE__*/ new WeakSet(), _getExportMenuButton = /*#__PURE__*/ new WeakMap(), _onExportRecording = /*#__PURE__*/ new WeakSet(), _onExportMenuClosed = /*#__PURE__*/ new WeakSet(), _RecorderController = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(RecorderController, LitElement);
    var _super = _create_super(RecorderController);
    function RecorderController() {
        _class_call_check(this, RecorderController);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _updateExtensions);
        _class_private_method_init(_assert_this_initialized(_this), _clearError);
        _class_private_method_init(_assert_this_initialized(_this), _importFile);
        _class_private_method_init(_assert_this_initialized(_this), _setCurrentRecording);
        _class_private_method_init(_assert_this_initialized(_this), _setCurrentPage);
        _class_private_method_init(_assert_this_initialized(_this), _buildSettings);
        _class_private_method_init(_assert_this_initialized(_this), _getMainTarget);
        _class_private_method_init(_assert_this_initialized(_this), _getSectionFromStep);
        _class_private_method_init(_assert_this_initialized(_this), _updateScreenshotsForSections);
        _class_private_method_init(_assert_this_initialized(_this), _onAbortReplay);
        _class_private_method_init(_assert_this_initialized(_this), _onPlayViaExtension);
        _class_private_method_init(_assert_this_initialized(_this), _onPlayRecording);
        _class_private_method_init(_assert_this_initialized(_this), _disableDeviceModeIfEnabled);
        _class_private_method_init(_assert_this_initialized(_this), _setTouchEmulationAllowed);
        _class_private_method_init(_assert_this_initialized(_this), _onSetRecording);
        _class_private_method_init(_assert_this_initialized(_this), _handleRecordingChanged);
        _class_private_method_init(_assert_this_initialized(_this), _handleStepAdded);
        _class_private_method_init(_assert_this_initialized(_this), _handleRecordingTitleChanged);
        _class_private_method_init(_assert_this_initialized(_this), _handleStepRemoved);
        _class_private_method_init(_assert_this_initialized(_this), _onNetworkConditionsChanged);
        _class_private_method_init(_assert_this_initialized(_this), _onTimeoutChanged);
        _class_private_method_init(_assert_this_initialized(_this), _onDeleteRecording);
        _class_private_method_init(_assert_this_initialized(_this), _onCreateNewRecording);
        _class_private_method_init(_assert_this_initialized(_this), _onRecordingStarted);
        _class_private_method_init(_assert_this_initialized(_this), _onRecordingFinished);
        _class_private_method_init(_assert_this_initialized(_this), _onRecordingCancelled);
        _class_private_method_init(_assert_this_initialized(_this), _onRecordingSelected);
        _class_private_method_init(_assert_this_initialized(_this), _onExportOptionSelected);
        _class_private_method_init(_assert_this_initialized(_this), _exportContent);
        _class_private_method_init(_assert_this_initialized(_this), _handleAddAssertionEvent);
        _class_private_method_init(_assert_this_initialized(_this), _onImportRecording);
        _class_private_method_init(_assert_this_initialized(_this), _onPlayRecordingByName);
        _class_private_method_init(_assert_this_initialized(_this), _onExtensionViewClosed);
        _class_private_method_init(_assert_this_initialized(_this), _getShortcutsInfo);
        _class_private_method_init(_assert_this_initialized(_this), _renderCurrentPage);
        _class_private_method_init(_assert_this_initialized(_this), _renderAllRecordingsPage);
        _class_private_method_init(_assert_this_initialized(_this), _renderStartPage);
        _class_private_method_init(_assert_this_initialized(_this), _renderRecordingPage);
        _class_private_method_init(_assert_this_initialized(_this), _renderCreateRecordingPage);
        _class_private_method_init(_assert_this_initialized(_this), _onExportRecording);
        _class_private_method_init(_assert_this_initialized(_this), _onExportMenuClosed);
        _class_private_field_init(_assert_this_initialized(_this), _storage, {
            writable: true,
            value: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingStorage.RecordingStorage.instance()
        });
        _class_private_field_init(_assert_this_initialized(_this), _screenshotStorage, {
            writable: true,
            value: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance()
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayAllowed, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _replayState, {
            writable: true,
            value: {
                isPlaying: false,
                isPausedOnBreakpoint: false
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _fileSelector, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _exportMenuButton, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _stepBreakpointIndexes, {
            writable: true,
            value: new Set()
        });
        _class_private_field_init(_assert_this_initialized(_this), _builtInConverters, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _recorderSettings, {
            writable: true,
            value: new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderSettings.RecorderSettings()
        });
        _class_private_field_init(_assert_this_initialized(_this), _shortcutHelper, {
            writable: true,
            value: new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecorderShortcutHelper.RecorderShortcutHelper()
        });
        _class_private_field_init(_assert_this_initialized(_this), _onAddBreakpoint, {
            writable: true,
            value: function(event) {
                var _this_recordingPlayer;
                _class_private_field_get(_this, _stepBreakpointIndexes).add(event.index);
                (_this_recordingPlayer = _this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.updateBreakpointIndexes(_class_private_field_get(_assert_this_initialized(_this), _stepBreakpointIndexes));
                _this.requestUpdate();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onRemoveBreakpoint, {
            writable: true,
            value: function(event) {
                var _this_recordingPlayer;
                _class_private_field_get(_this, _stepBreakpointIndexes).delete(event.index);
                (_this_recordingPlayer = _this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.updateBreakpointIndexes(_class_private_field_get(_assert_this_initialized(_this), _stepBreakpointIndexes));
                _this.requestUpdate();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _getExportMenuButton, {
            writable: true,
            value: function() {
                if (!_class_private_field_get(_assert_this_initialized(_this), _exportMenuButton)) {
                    throw new Error('#exportMenuButton not found');
                }
                return _class_private_field_get(_assert_this_initialized(_this), _exportMenuButton);
            }
        });
        _this.isRecording = false;
        _this.isToggling = false;
        _this.exportMenuExpanded = false;
        _this.currentPage = "StartPage" /* Pages.StartPage */ ;
        if (_class_private_field_get(_this, _storage).getRecordings().length) {
            _class_private_method_get(_this, _setCurrentPage, setCurrentPage).call(_assert_this_initialized(_this), "AllRecordingsPage" /* Pages.AllRecordingsPage */ );
        }
        var textEditorIndent = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').get();
        _class_private_field_set(_assert_this_initialized(_this), _builtInConverters, Object.freeze([
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.JSONConverter.JSONConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerReplayConverter.PuppeteerReplayConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.PuppeteerConverter.PuppeteerConverter(textEditorIndent),
            new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.LighthouseConverter.LighthouseConverter(textEditorIndent)
        ]));
        var extensionManager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_18__.ExtensionManager.ExtensionManager.instance();
        _class_private_method_get(_this, _updateExtensions, updateExtensions).call(_assert_this_initialized(_this), extensionManager.extensions());
        extensionManager.addEventListener("extensionsUpdated" /* Extensions.ExtensionManager.Events.ExtensionsUpdated */ , function(event) {
            _class_private_method_get(_this, _updateExtensions, updateExtensions).call(_assert_this_initialized(_this), event.data);
        });
        // used in e2e tests only.
        _this.addEventListener('setrecording', function(event) {
            return _class_private_method_get(_this, _onSetRecording, onSetRecording).call(_assert_this_initialized(_this), event);
        });
        return _this;
    }
    _create_class(RecorderController, [
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                _get(_get_prototype_of(RecorderController.prototype), "disconnectedCallback", this).call(this);
                if (this.currentRecordingSession) {
                    void this.currentRecordingSession.stop();
                }
            }
        },
        {
            key: "setIsRecordingStateForTesting",
            value: function setIsRecordingStateForTesting(isRecording) {
                this.isRecording = isRecording;
            }
        },
        {
            key: "setRecordingStateForTesting",
            value: function setRecordingStateForTesting(state) {
                _class_private_field_get(this, _replayState).isPlaying = state.isPlaying;
                _class_private_field_get(this, _replayState).isPausedOnBreakpoint = state.isPausedOnBreakpoint;
            }
        },
        {
            key: "setCurrentPageForTesting",
            value: function setCurrentPageForTesting(page) {
                _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, page);
            }
        },
        {
            key: "getCurrentPageForTesting",
            value: function getCurrentPageForTesting() {
                return this.currentPage;
            }
        },
        {
            key: "getCurrentRecordingForTesting",
            value: function getCurrentRecordingForTesting() {
                return this.currentRecording;
            }
        },
        {
            key: "getStepBreakpointIndexesForTesting",
            value: function getStepBreakpointIndexesForTesting() {
                return _to_consumable_array(_class_private_field_get(this, _stepBreakpointIndexes).values());
            }
        },
        {
            key: "setCurrentRecordingForTesting",
            value: function setCurrentRecordingForTesting(recording) {
                _class_private_method_get(this, _setCurrentRecording, setCurrentRecording).call(this, recording);
            }
        },
        {
            key: "getSectionsForTesting",
            value: function getSectionsForTesting() {
                return this.sections;
            }
        },
        {
            // Used by e2e tests to inspect the current recording.
            key: "getUserFlow",
            value: function getUserFlow() {
                var _this_currentRecording;
                return (_this_currentRecording = this.currentRecording) === null || _this_currentRecording === void 0 ? void 0 : _this_currentRecording.flow;
            }
        },
        {
            key: "handleActions",
            value: function handleActions(actionId) {
                if (!this.isActionPossible(actionId)) {
                    return;
                }
                switch(actionId){
                    case "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ :
                        _class_private_method_get(this, _onCreateNewRecording, onCreateNewRecording).call(this);
                        return;
                    case "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ :
                        if (this.currentPage !== "CreateRecordingPage" /* Pages.CreateRecordingPage */  && !this.isRecording) {
                            _class_private_field_get(this, _shortcutHelper).handleShortcut(_class_private_method_get(this, _onRecordingStarted, onRecordingStarted).bind(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.RecordingStartedEvent(_class_private_field_get(this, _recorderSettings).defaultTitle, _class_private_field_get(this, _recorderSettings).defaultSelectors, _class_private_field_get(this, _recorderSettings).selectorAttribute)));
                        } else if (this.currentPage === "CreateRecordingPage" /* Pages.CreateRecordingPage */ ) {
                            var view = this.renderRoot.querySelector('devtools-create-recording-view');
                            if (view) {
                                _class_private_field_get(this, _shortcutHelper).handleShortcut(view.startRecording.bind(view));
                            }
                        } else if (this.isRecording) {
                            void _class_private_method_get(this, _onRecordingFinished, onRecordingFinished).call(this);
                        }
                        return;
                    case "chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */ :
                        void _class_private_method_get(this, _onPlayRecording, onPlayRecording).call(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({
                            targetPanel: "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */ ,
                            speed: _class_private_field_get(this, _recorderSettings).speed
                        }));
                        return;
                    case "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ :
                        {
                            var view1 = this.renderRoot.querySelector('devtools-recording-view');
                            if (view1) {
                                view1.showCodeToggle();
                            }
                            return;
                        }
                }
            }
        },
        {
            key: "isActionPossible",
            value: function isActionPossible(actionId) {
                switch(actionId){
                    case "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ :
                        return !this.isRecording && !_class_private_field_get(this, _replayState).isPlaying;
                    case "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ :
                        return !_class_private_field_get(this, _replayState).isPlaying;
                    case "chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */ :
                        return this.currentPage === "RecordingPage" /* Pages.RecordingPage */  && !_class_private_field_get(this, _replayState).isPlaying;
                    case "chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ :
                        return this.currentPage === "RecordingPage" /* Pages.RecordingPage */ ;
                    case "chrome-recorder.copy-recording-or-step" /* Actions.RecorderActions.CopyRecordingOrStep */ :
                        // This action is handled in the RecordingView
                        // It relies on browser `copy` event.
                        return false;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var recordings = _class_private_field_get(this, _storage).getRecordings();
                var selectValue = this.currentRecording ? this.currentRecording.storageName : this.currentPage;
                // clang-format off
                var values = [
                    recordings.length === 0 ? {
                        value: "StartPage" /* Pages.StartPage */ ,
                        name: i18nString(UIStrings.noRecordings),
                        selected: selectValue === "StartPage" /* Pages.StartPage */ 
                    } : {
                        value: "AllRecordingsPage" /* Pages.AllRecordingsPage */ ,
                        name: "".concat(recordings.length, " ").concat(i18nString(UIStrings.numberOfRecordings)),
                        selected: selectValue === "AllRecordingsPage" /* Pages.AllRecordingsPage */ 
                    }
                ].concat(_to_consumable_array(recordings.map(function(recording) {
                    return {
                        value: recording.storageName,
                        name: recording.flow.title,
                        selected: selectValue === recording.storageName
                    };
                })));
                return html(_templateObject4(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.toolbar(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _class_private_method_get(this, _onCreateNewRecording, onCreateNewRecording), {
                    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                    iconName: 'plus',
                    disabled: _class_private_field_get(this, _replayState).isPlaying || this.isRecording || this.isToggling,
                    title: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ ),
                    jslogContext: "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ 
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, recordings.length === 0 || _class_private_field_get(this, _replayState).isPlaying || this.isRecording || this.isToggling, function(e) {
                    return e.stopPropagation();
                }, _class_private_method_get(this, _onRecordingSelected, onRecordingSelected), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('recordings').track({
                    change: true
                }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(values, function(item) {
                    return item.value;
                }, function(item) {
                    return html(_templateObject(), item.selected, item.value, item.name);
                }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _class_private_method_get(this, _onImportRecording, onImportRecording), {
                    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                    iconName: 'import',
                    title: i18nString(UIStrings.importRecording),
                    jslogContext: 'import-recording'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _class_private_method_get(this, _onExportRecording, onExportRecording), _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_11__.Directives.nodeRenderedCallback(function(node) {
                    _class_private_field_set(_this, _exportMenuButton, node);
                }), {
                    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                    iconName: 'download',
                    title: i18nString(UIStrings.exportRecording),
                    disabled: !this.currentRecording
                }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.dropDown('export-recording').track({
                    click: true
                }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.Menu.litTagName, _class_private_method_get(this, _onExportMenuClosed, onExportMenuClosed), _class_private_method_get(this, _onExportOptionSelected, onExportOptionSelected), _class_private_field_get(this, _getExportMenuButton), false, false, false, this.exportMenuExpanded, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName, i18nString(UIStrings.export), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(_class_private_field_get(this, _builtInConverters), function(converter) {
                    return html(_templateObject1(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName, converter.getId(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.item("converter-".concat(converter.getFormatName())).track({
                        click: true
                    }), converter.getFormatName(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName);
                }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName, i18nString(UIStrings.exportViaExtensions), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_14__.Directives.repeat(this.extensionConverters, function(converter) {
                    return html(_templateObject2(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName, converter.getId(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.item("converter-".concat(converter.getFormatName())).track({
                        click: true
                    }), converter.getFormatName(), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName);
                }), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName, GET_EXTENSIONS_MENU_ITEM, i18nString(UIStrings.getExtensions), _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuItem.litTagName, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.MenuGroup.litTagName, _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_12__.Menu.Menu.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _class_private_method_get(this, _onDeleteRecording, onDeleteRecording), {
                    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                    iconName: 'bin',
                    disabled: !this.currentRecording || _class_private_field_get(this, _replayState).isPlaying || this.isRecording || this.isToggling,
                    title: i18nString(UIStrings.deleteRecording),
                    jslogContext: 'delete-recording'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, function() {
                    var _this_recordingPlayer;
                    return (_this_recordingPlayer = _this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.continue();
                }, {
                    variant: "primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */ ,
                    iconName: 'resume',
                    disabled: !this.recordingPlayer || !_class_private_field_get(this, _replayState).isPausedOnBreakpoint,
                    title: i18nString(UIStrings.continueReplay),
                    jslogContext: 'continue-replay'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, function() {
                    var _this_recordingPlayer;
                    return (_this_recordingPlayer = _this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.stepOver();
                }, {
                    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                    iconName: 'step-over',
                    disabled: !this.recordingPlayer || !_class_private_field_get(this, _replayState).isPausedOnBreakpoint,
                    title: i18nString(UIStrings.stepOverReplay),
                    jslogContext: 'step-over'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.FEEDBACK_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.link('feedback').track({
                    click: true
                }), i18nString(UIStrings.sendFeedback), _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutDialog.ShortcutDialog.litTagName, {
                    shortcuts: _class_private_method_get(this, _getShortcutsInfo, getShortcutsInfo).call(this)
                }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_15__.action('show-shortcuts').track({
                    click: true
                }), _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutDialog.ShortcutDialog.litTagName, this.importError ? html(_templateObject3(), this.importError.message) : '', _class_private_method_get(this, _renderCurrentPage, renderCurrentPage).call(this));
            // clang-format on
            }
        }
    ]);
    return RecorderController;
}(LitElement), _define_property(_RecorderController, "styles", [
    _recorderController_css_js__WEBPACK_IMPORTED_MODULE_20__["default"]
]), _RecorderController);
__decorate([
    state()
], RecorderController.prototype, "currentRecordingSession", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentRecording", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentStep", void 0);
__decorate([
    state()
], RecorderController.prototype, "recordingError", void 0);
__decorate([
    state()
], RecorderController.prototype, "isRecording", void 0);
__decorate([
    state()
], RecorderController.prototype, "isToggling", void 0);
__decorate([
    state()
], RecorderController.prototype, "recordingPlayer", void 0);
__decorate([
    state()
], RecorderController.prototype, "lastReplayResult", void 0);
__decorate([
    state()
], RecorderController.prototype, "currentPage", void 0);
__decorate([
    state()
], RecorderController.prototype, "previousPage", void 0);
__decorate([
    state()
], RecorderController.prototype, "sections", void 0);
__decorate([
    state()
], RecorderController.prototype, "settings", void 0);
__decorate([
    state()
], RecorderController.prototype, "importError", void 0);
__decorate([
    state()
], RecorderController.prototype, "exportMenuExpanded", void 0);
__decorate([
    state()
], RecorderController.prototype, "extensionConverters", void 0);
__decorate([
    state()
], RecorderController.prototype, "replayExtensions", void 0);
__decorate([
    state()
], RecorderController.prototype, "viewDescriptor", void 0);
RecorderController = __decorate([
    customElement('devtools-recorder-controller')
], RecorderController);
 //# sourceMappingURL=RecorderController.js.map
function updateExtensions(extensions) {
    this.extensionConverters = extensions.filter(function(extension) {
        return extension.getCapabilities().includes('export');
    }).map(function(extension, idx) {
        return new _converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.ExtensionConverter(idx, extension);
    });
    this.replayExtensions = extensions.filter(function(extension) {
        return extension.getCapabilities().includes('replay');
    });
}
function clearError() {
    this.importError = undefined;
}
function importFile(file) {
    return _importFile1.apply(this, arguments);
}
function _importFile1() {
    _importFile1 = _async_to_generator(function(file) {
        var outputStream, reader, success, flow, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    outputStream = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream();
                    reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.FileUtils.ChunkedFileReader(file, /* chunkSize */ 10000000);
                    return [
                        4,
                        reader.read(outputStream)
                    ];
                case 1:
                    success = _state.sent();
                    if (!success) {
                        throw reader.error();
                    }
                    try {
                        flow = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.parse(JSON.parse(outputStream.data()));
                    } catch (error) {
                        this.importError = error;
                        return [
                            2
                        ];
                    }
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).saveRecording(flow)
                    ];
                case 2:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "RecordingPage" /* Pages.RecordingPage */ );
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _importFile1.apply(this, arguments);
}
function setCurrentRecording(recording) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _this_recordingPlayer;
    var _opts_keepBreakpoints = opts.keepBreakpoints, keepBreakpoints = _opts_keepBreakpoints === void 0 ? false : _opts_keepBreakpoints, _opts_updateSession = opts.updateSession, updateSession = _opts_updateSession === void 0 ? false : _opts_updateSession;
    (_this_recordingPlayer = this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.abort();
    this.currentStep = undefined;
    this.recordingError = undefined;
    this.lastReplayResult = undefined;
    this.recordingPlayer = undefined;
    _class_private_field_get(this, _replayState).isPlaying = false;
    _class_private_field_get(this, _replayState).isPausedOnBreakpoint = false;
    _class_private_field_set(this, _stepBreakpointIndexes, keepBreakpoints ? _class_private_field_get(this, _stepBreakpointIndexes) : new Set());
    if (recording) {
        this.currentRecording = recording;
        this.sections = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Section.buildSections(recording.flow.steps);
        this.settings = _class_private_method_get(this, _buildSettings, buildSettings).call(this, recording.flow);
        if (updateSession && this.currentRecordingSession) {
            this.currentRecordingSession.overwriteUserFlow(recording.flow);
        }
    } else {
        this.currentRecording = undefined;
        this.sections = undefined;
        this.settings = undefined;
    }
    _class_private_method_get(this, _updateScreenshotsForSections, updateScreenshotsForSections).call(this);
}
function setCurrentPage(page) {
    if (page === this.currentPage) {
        return;
    }
    this.previousPage = this.currentPage;
    this.currentPage = page;
}
function buildSettings(flow) {
    var steps = flow.steps;
    var navigateStepIdx = steps.findIndex(function(step) {
        return step.type === 'navigate';
    });
    var settings = {
        timeout: flow.timeout
    };
    for(var i = navigateStepIdx - 1; i >= 0; i--){
        var step = steps[i];
        if (!settings.viewportSettings && step.type === 'setViewport') {
            settings.viewportSettings = step;
        }
        if (!settings.networkConditionsSettings && step.type === 'emulateNetworkConditions') {
            settings.networkConditionsSettings = _object_spread({}, step);
            for(var _i = 0, _iter = [
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.OfflineConditions,
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow3GConditions,
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Slow4GConditions,
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.Fast4GConditions
            ]; _i < _iter.length; _i++){
                var preset = _iter[_i];
                // Using i18nTitleKey as a title here because we only want to compare the parameters of the network conditions.
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.networkConditionsEqual(_object_spread_props(_object_spread({}, preset), {
                    title: preset.i18nTitleKey || ''
                }), _object_spread_props(_object_spread({}, step), {
                    title: preset.i18nTitleKey || ''
                }))) {
                    settings.networkConditionsSettings.title = _instanceof(preset.title, Function) ? preset.title() : preset.title;
                    settings.networkConditionsSettings.i18nTitleKey = preset.i18nTitleKey;
                }
            }
        }
    }
    return settings;
}
function getMainTarget() {
    var target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
    if (!target) {
        throw new Error('Missing main page target');
    }
    return target;
}
function getSectionFromStep(step) {
    if (!this.sections) {
        return null;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = this.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var section = _step.value;
            if (section.steps.indexOf(step) !== -1) {
                return section;
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
    return null;
}
function updateScreenshotsForSections() {
    if (!this.sections || !this.currentRecording) {
        return;
    }
    var storageName = this.currentRecording.storageName;
    for(var i = 0; i < this.sections.length; i++){
        var screenshot = _class_private_field_get(this, _screenshotStorage).getScreenshotForSection(storageName, i);
        this.sections[i].screenshot = screenshot || undefined;
    }
    this.requestUpdate();
}
function onAbortReplay() {
    var _this_recordingPlayer;
    (_this_recordingPlayer = this.recordingPlayer) === null || _this_recordingPlayer === void 0 ? void 0 : _this_recordingPlayer.abort();
}
function onPlayViaExtension(extension) {
    return _onPlayViaExtension1.apply(this, arguments);
}
function _onPlayViaExtension1() {
    _onPlayViaExtension1 = _async_to_generator(function(extension) {
        var pluginManager, promise, descriptor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording || !_class_private_field_get(this, _replayAllowed)) {
                        return [
                            2
                        ];
                    }
                    pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_5__.RecorderPluginManager.RecorderPluginManager.instance();
                    promise = pluginManager.once("showViewRequested" /* PublicExtensions.RecorderPluginManager.Events.ShowViewRequested */ );
                    extension.replay(this.currentRecording.flow);
                    return [
                        4,
                        promise
                    ];
                case 1:
                    descriptor = _state.sent();
                    this.viewDescriptor = descriptor;
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(3 /* Host.UserMetrics.RecordingReplayStarted.ReplayViaExtension */ );
                    return [
                        2
                    ];
            }
        });
    });
    return _onPlayViaExtension1.apply(this, arguments);
}
function onPlayRecording(event) {
    return _onPlayRecording1.apply(this, arguments);
}
function _onPlayRecording1() {
    _onPlayRecording1 = _async_to_generator(function(event) {
        var _this, _event_data, currentRecording, withPerformanceTrace, sectionsWithScreenshot, _this1, resolveWithEvents, eventsPromise, performanceTracing, _event_data1, _event_data2, events;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    if (!this.currentRecording || !_class_private_field_get(this, _replayAllowed)) {
                        return [
                            2
                        ];
                    }
                    if (this.viewDescriptor) {
                        this.viewDescriptor = undefined;
                    }
                    if (event.data.extension) {
                        return [
                            2,
                            _class_private_method_get(this, _onPlayViaExtension, onPlayViaExtension).call(this, event.data.extension)
                        ];
                    }
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayStarted(event.data.targetPanel !== "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */  ? 2 /* Host.UserMetrics.RecordingReplayStarted.ReplayWithPerformanceTracing */  : 1 /* Host.UserMetrics.RecordingReplayStarted.ReplayOnly */ );
                    _class_private_field_get(this, _replayState).isPlaying = true;
                    this.currentStep = undefined;
                    this.recordingError = undefined;
                    this.lastReplayResult = undefined;
                    currentRecording = this.currentRecording;
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    return [
                        4,
                        _class_private_method_get(this, _disableDeviceModeIfEnabled, disableDeviceModeIfEnabled).call(this)
                    ];
                case 1:
                    _state.sent();
                    this.recordingPlayer = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingPlayer.RecordingPlayer(this.currentRecording.flow, {
                        speed: event.data.speed,
                        breakpointIndexes: _class_private_field_get(this, _stepBreakpointIndexes)
                    });
                    withPerformanceTrace = event.data.targetPanel === "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */ ;
                    sectionsWithScreenshot = new Set();
                    _this1 = this;
                    this.recordingPlayer.addEventListener("Step" /* Models.RecordingPlayer.Events.Step */ , function() {
                        var _ref = _async_to_generator(function(param) {
                            var _param_data, step, resolve, currentSection, currentSectionIndex, screenshot;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _param_data = param.data, step = _param_data.step, resolve = _param_data.resolve;
                                        _this1.currentStep = step;
                                        currentSection = _class_private_method_get(_this1, _getSectionFromStep, getSectionFromStep).call(_this1, step);
                                        if (!(_this1.sections && currentSection && !sectionsWithScreenshot.has(currentSection))) return [
                                            3,
                                            2
                                        ];
                                        sectionsWithScreenshot.add(currentSection);
                                        currentSectionIndex = _this1.sections.indexOf(currentSection);
                                        return [
                                            4,
                                            _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotUtils.takeScreenshot()
                                        ];
                                    case 1:
                                        screenshot = _state.sent();
                                        currentSection.screenshot = screenshot;
                                        _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance().storeScreenshotForSection(currentRecording.storageName, currentSectionIndex, screenshot);
                                        _state.label = 2;
                                    case 2:
                                        resolve();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    this.recordingPlayer.addEventListener("Stop" /* Models.RecordingPlayer.Events.Stop */ , function() {
                        _class_private_field_get(_this, _replayState).isPausedOnBreakpoint = true;
                        _this.requestUpdate();
                    });
                    this.recordingPlayer.addEventListener("Continue" /* Models.RecordingPlayer.Events.Continue */ , function() {
                        _class_private_field_get(_this, _replayState).isPausedOnBreakpoint = false;
                        _this.requestUpdate();
                    });
                    this.recordingPlayer.addEventListener("Error" /* Models.RecordingPlayer.Events.Error */ , function(param) {
                        var error = param.data;
                        _this.recordingError = error;
                        if (!withPerformanceTrace) {
                            _class_private_field_get(_this, _replayState).isPlaying = false;
                            _this.recordingPlayer = undefined;
                        }
                        _this.lastReplayResult = "Failure" /* Models.RecordingPlayer.ReplayResult.Failure */ ;
                        var errorMessage = error.message.toLowerCase();
                        if (errorMessage.startsWith('could not find element')) {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(2 /* Host.UserMetrics.RecordingReplayFinished.TimeoutErrorSelectors */ );
                        } else if (errorMessage.startsWith('waiting for target failed')) {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(3 /* Host.UserMetrics.RecordingReplayFinished.TimeoutErrorTarget */ );
                        } else {
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(4 /* Host.UserMetrics.RecordingReplayFinished.OtherError */ );
                        }
                    });
                    this.recordingPlayer.addEventListener("Done" /* Models.RecordingPlayer.Events.Done */ , function() {
                        if (!withPerformanceTrace) {
                            _class_private_field_get(_this, _replayState).isPlaying = false;
                            _this.recordingPlayer = undefined;
                        }
                        _this.lastReplayResult = "Success" /* Models.RecordingPlayer.ReplayResult.Success */ ;
                        // Dispatch an event for e2e testing.
                        _this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.ReplayFinishedEvent());
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingReplayFinished(1 /* Host.UserMetrics.RecordingReplayFinished.Success */ );
                    });
                    this.recordingPlayer.addEventListener("Abort" /* Models.RecordingPlayer.Events.Abort */ , function() {
                        _this.currentStep = undefined;
                        _this.recordingError = undefined;
                        _this.lastReplayResult = undefined;
                        _class_private_field_get(_this, _replayState).isPlaying = false;
                    });
                    resolveWithEvents = function(_events) {};
                    eventsPromise = new Promise(function(resolve) {
                        resolveWithEvents = resolve;
                    });
                    performanceTracing = null;
                    switch((_event_data = event.data) === null || _event_data === void 0 ? void 0 : _event_data.targetPanel){
                        case "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */ :
                            performanceTracing = new _services_tracing_tracing_js__WEBPACK_IMPORTED_MODULE_8__.PerformanceTracing.PerformanceTracing(_class_private_method_get(this, _getMainTarget, getMainTarget).call(this), {
                                tracingBufferUsage: function tracingBufferUsage() {},
                                eventsRetrievalProgress: function eventsRetrievalProgress() {},
                                tracingComplete: function tracingComplete(events) {
                                    resolveWithEvents(events);
                                }
                            });
                            break;
                    }
                    if (!performanceTracing) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        performanceTracing.start()
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    _class_private_method_get(this, _setTouchEmulationAllowed, setTouchEmulationAllowed).call(this, false);
                    return [
                        4,
                        this.recordingPlayer.play()
                    ];
                case 4:
                    _state.sent();
                    _class_private_method_get(this, _setTouchEmulationAllowed, setTouchEmulationAllowed).call(this, true);
                    if (!performanceTracing) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        performanceTracing.stop()
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        eventsPromise
                    ];
                case 6:
                    events = _state.sent();
                    _class_private_field_get(this, _replayState).isPlaying = false;
                    this.recordingPlayer = undefined;
                    return [
                        4,
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.InspectorView.InspectorView.instance().showPanel((_event_data1 = event.data) === null || _event_data1 === void 0 ? void 0 : _event_data1.targetPanel)
                    ];
                case 7:
                    _state.sent();
                    switch((_event_data2 = event.data) === null || _event_data2 === void 0 ? void 0 : _event_data2.targetPanel){
                        case "timeline" /* Components.RecordingView.TargetPanel.PerformancePanel */ :
                            _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_7__.TimelinePanel.TimelinePanel.instance().loadFromEvents(events);
                            break;
                    }
                    _state.label = 8;
                case 8:
                    return [
                        2
                    ];
            }
        });
    });
    return _onPlayRecording1.apply(this, arguments);
}
function disableDeviceModeIfEnabled() {
    return _disableDeviceModeIfEnabled1.apply(this, arguments);
}
function _disableDeviceModeIfEnabled1() {
    _disableDeviceModeIfEnabled1 = _async_to_generator(function() {
        var deviceModeWrapper, emulationModel, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    deviceModeWrapper = _panels_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_6__.DeviceModeWrapper.DeviceModeWrapper.instance();
                    if (!deviceModeWrapper.isDeviceModeOn()) return [
                        3,
                        2
                    ];
                    deviceModeWrapper.toggleDeviceMode();
                    emulationModel = _class_private_method_get(this, _getMainTarget, getMainTarget).call(this).model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
                    return [
                        4,
                        emulationModel === null || emulationModel === void 0 ? void 0 : emulationModel.emulateDevice(null)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        3,
                        4
                    ];
                case 3:
                    e = _state.sent();
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _disableDeviceModeIfEnabled1.apply(this, arguments);
}
function setTouchEmulationAllowed(touchEmulationAllowed) {
    var emulationModel = _class_private_method_get(this, _getMainTarget, getMainTarget).call(this).model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.EmulationModel.EmulationModel);
    emulationModel === null || emulationModel === void 0 ? void 0 : emulationModel.setTouchEmulationAllowed(touchEmulationAllowed);
}
function onSetRecording(event) {
    return _onSetRecording1.apply(this, arguments);
}
function _onSetRecording1() {
    _onSetRecording1 = _async_to_generator(function(event) {
        var json, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    json = JSON.parse(event.detail);
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).saveRecording(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.parse(json))
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "RecordingPage" /* Pages.RecordingPage */ );
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _onSetRecording1.apply(this, arguments);
}
function handleRecordingChanged(event) {
    return _handleRecordingChanged1.apply(this, arguments);
}
function _handleRecordingChanged1() {
    _handleRecordingChanged1 = _async_to_generator(function(event) {
        var recording, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    recording = _object_spread_props(_object_spread({}, this.currentRecording), {
                        flow: _object_spread_props(_object_spread({}, this.currentRecording.flow), {
                            steps: this.currentRecording.flow.steps.map(function(step) {
                                return step === event.currentStep ? event.newStep : step;
                            })
                        })
                    });
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(recording.storageName, recording.flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent(),
                        {
                            keepBreakpoints: true,
                            updateSession: true
                        }
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _handleRecordingChanged1.apply(this, arguments);
}
function handleStepAdded(event) {
    return _handleStepAdded1.apply(this, arguments);
}
function _handleStepAdded1() {
    _handleStepAdded1 = _async_to_generator(function(event) {
        var stepOrSection, step, position, _this_sections, sectionIdx, _this_sections1, _this_sections2, _this_sections3, _this_sections4, prevSection, steps, currentIndex, indexToInsertAt, recording, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    stepOrSection = event.stepOrSection;
                    position = event.position;
                    if ('steps' in stepOrSection) {
                        ;
                        // section
                        sectionIdx = (_this_sections = this.sections) === null || _this_sections === void 0 ? void 0 : _this_sections.indexOf(stepOrSection);
                        if (sectionIdx === undefined || sectionIdx === -1) {
                            throw new Error('There is no section to add a step to');
                        }
                        if (event.position === "after" /* Components.StepView.AddStepPosition.AFTER */ ) {
                            ;
                            if ((_this_sections1 = this.sections) === null || _this_sections1 === void 0 ? void 0 : _this_sections1[sectionIdx].steps.length) {
                                ;
                                step = (_this_sections2 = this.sections) === null || _this_sections2 === void 0 ? void 0 : _this_sections2[sectionIdx].steps[0];
                                position = "before" /* Components.StepView.AddStepPosition.BEFORE */ ;
                            } else {
                                ;
                                step = (_this_sections3 = this.sections) === null || _this_sections3 === void 0 ? void 0 : _this_sections3[sectionIdx].causingStep;
                                position = "after" /* Components.StepView.AddStepPosition.AFTER */ ;
                            }
                        } else {
                            ;
                            if (sectionIdx <= 0) {
                                throw new Error('There is no section to add a step to');
                            }
                            prevSection = (_this_sections4 = this.sections) === null || _this_sections4 === void 0 ? void 0 : _this_sections4[sectionIdx - 1];
                            step = prevSection === null || prevSection === void 0 ? void 0 : prevSection.steps[prevSection.steps.length - 1];
                            position = "after" /* Components.StepView.AddStepPosition.AFTER */ ;
                        }
                    } else {
                        // step
                        step = stepOrSection;
                    }
                    if (!step) {
                        throw new Error('Anchor step is not found when adding a step');
                    }
                    steps = this.currentRecording.flow.steps;
                    currentIndex = steps.indexOf(step);
                    indexToInsertAt = currentIndex + (position === "before" /* Components.StepView.AddStepPosition.BEFORE */  ? 0 : 1);
                    steps.splice(indexToInsertAt, 0, {
                        type: _models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.StepType.WaitForElement,
                        selectors: [
                            'body'
                        ]
                    });
                    recording = _object_spread_props(_object_spread({}, this.currentRecording), {
                        flow: _object_spread_props(_object_spread({}, this.currentRecording.flow), {
                            steps: steps
                        })
                    });
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(2 /* Host.UserMetrics.RecordingEdited.StepAdded */ );
                    _class_private_field_set(this, _stepBreakpointIndexes, new Set(_to_consumable_array(_class_private_field_get(this, _stepBreakpointIndexes).values()).map(function(breakpointIndex) {
                        if (indexToInsertAt > breakpointIndex) {
                            return breakpointIndex;
                        }
                        return breakpointIndex + 1;
                    })));
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(recording.storageName, recording.flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent(),
                        {
                            keepBreakpoints: true,
                            updateSession: true
                        }
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _handleStepAdded1.apply(this, arguments);
}
function handleRecordingTitleChanged(event) {
    return _handleRecordingTitleChanged1.apply(this, arguments);
}
function _handleRecordingTitleChanged1() {
    _handleRecordingTitleChanged1 = _async_to_generator(function(event) {
        var flow, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    flow = _object_spread_props(_object_spread({}, this.currentRecording.flow), {
                        title: event.title
                    });
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(this.currentRecording.storageName, flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _handleRecordingTitleChanged1.apply(this, arguments);
}
function handleStepRemoved(event) {
    return _handleStepRemoved1.apply(this, arguments);
}
function _handleStepRemoved1() {
    _handleStepRemoved1 = _async_to_generator(function(event) {
        var steps, currentIndex, flow, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    steps = this.currentRecording.flow.steps;
                    currentIndex = steps.indexOf(event.step);
                    steps.splice(currentIndex, 1);
                    flow = _object_spread_props(_object_spread({}, this.currentRecording.flow), {
                        steps: steps
                    });
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingEdited(3 /* Host.UserMetrics.RecordingEdited.StepRemoved */ );
                    _class_private_field_set(this, _stepBreakpointIndexes, new Set(_to_consumable_array(_class_private_field_get(this, _stepBreakpointIndexes).values()).map(function(breakpointIndex) {
                        if (currentIndex > breakpointIndex) {
                            return breakpointIndex;
                        }
                        if (currentIndex === breakpointIndex) {
                            return -1;
                        }
                        return breakpointIndex - 1;
                    }).filter(function(index) {
                        return index >= 0;
                    })));
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(this.currentRecording.storageName, flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent(),
                        {
                            keepBreakpoints: true,
                            updateSession: true
                        }
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _handleStepRemoved1.apply(this, arguments);
}
function onNetworkConditionsChanged(event) {
    return _onNetworkConditionsChanged1.apply(this, arguments);
}
function _onNetworkConditionsChanged1() {
    _onNetworkConditionsChanged1 = _async_to_generator(function(event) {
        var navigateIdx, emulateNetworkConditionsIdx, step, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    navigateIdx = this.currentRecording.flow.steps.findIndex(function(step) {
                        return step.type === 'navigate';
                    });
                    if (navigateIdx === -1) {
                        throw new Error('Current recording does not have a navigate step');
                    }
                    emulateNetworkConditionsIdx = this.currentRecording.flow.steps.findIndex(function(step, idx) {
                        if (idx >= navigateIdx) {
                            return false;
                        }
                        return step.type === 'emulateNetworkConditions';
                    });
                    if (!event.data) {
                        // Delete step if present.
                        if (emulateNetworkConditionsIdx !== -1) {
                            this.currentRecording.flow.steps.splice(emulateNetworkConditionsIdx, 1);
                        }
                    } else if (emulateNetworkConditionsIdx === -1) {
                        // Insert at the first position.
                        this.currentRecording.flow.steps.splice(0, 0, _models_models_js__WEBPACK_IMPORTED_MODULE_19__.SchemaUtils.createEmulateNetworkConditionsStep({
                            download: event.data.download,
                            upload: event.data.upload,
                            latency: event.data.latency
                        }));
                    } else {
                        // Update existing step.
                        step = this.currentRecording.flow.steps[emulateNetworkConditionsIdx];
                        step.download = event.data.download;
                        step.upload = event.data.upload;
                        step.latency = event.data.latency;
                    }
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(this.currentRecording.storageName, this.currentRecording.flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _onNetworkConditionsChanged1.apply(this, arguments);
}
function onTimeoutChanged(event) {
    return _onTimeoutChanged1.apply(this, arguments);
}
function _onTimeoutChanged1() {
    _onTimeoutChanged1 = _async_to_generator(function(event) {
        var _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording) {
                        throw new Error('Current recording expected to be defined.');
                    }
                    this.currentRecording.flow.timeout = event.data;
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(this.currentRecording.storageName, this.currentRecording.flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        2
                    ];
            }
        });
    });
    return _onTimeoutChanged1.apply(this, arguments);
}
function onDeleteRecording(event) {
    return _onDeleteRecording1.apply(this, arguments);
}
function _onDeleteRecording1() {
    _onDeleteRecording1 = _async_to_generator(function(event) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    event.stopPropagation();
                    if (!_instanceof(event, _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.DeleteRecordingEvent)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).deleteRecording(event.storageName)
                    ];
                case 1:
                    _state.sent();
                    _class_private_field_get(this, _screenshotStorage).deleteScreenshotsForRecording(event.storageName);
                    this.requestUpdate();
                    return [
                        3,
                        4
                    ];
                case 2:
                    if (!this.currentRecording) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        _class_private_field_get(this, _storage).deleteRecording(this.currentRecording.storageName)
                    ];
                case 3:
                    _state.sent();
                    _class_private_field_get(this, _screenshotStorage).deleteScreenshotsForRecording(this.currentRecording.storageName);
                    _state.label = 4;
                case 4:
                    return [
                        4,
                        _class_private_field_get(this, _storage).getRecordings()
                    ];
                case 5:
                    if (_state.sent().length) {
                        _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "AllRecordingsPage" /* Pages.AllRecordingsPage */ );
                    } else {
                        _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "StartPage" /* Pages.StartPage */ );
                    }
                    _class_private_method_get(this, _setCurrentRecording, setCurrentRecording).call(this, undefined);
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _onDeleteRecording1.apply(this, arguments);
}
function onCreateNewRecording(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "CreateRecordingPage" /* Pages.CreateRecordingPage */ );
    _class_private_method_get(this, _clearError, clearError).call(this);
}
function onRecordingStarted(event) {
    return _onRecordingStarted1.apply(this, arguments);
}
function _onRecordingStarted1() {
    _onRecordingStarted1 = _async_to_generator(function(event) {
        var _, _1, _tmp, previousSectionIndex, screenshotPromise, _this, takeScreenshot, _this1, _this2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Recording is not available in device mode.
                    return [
                        4,
                        _class_private_method_get(this, _disableDeviceModeIfEnabled, disableDeviceModeIfEnabled).call(this)
                    ];
                case 1:
                    _state.sent();
                    // Setting up some variables to notify the user we are initializing a recording.
                    this.isToggling = true;
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    // -- Recording logic starts here --
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(1 /* Host.UserMetrics.RecordingToggled.RecordingStarted */ );
                    this.currentRecordingSession = new _models_models_js__WEBPACK_IMPORTED_MODULE_19__.RecordingSession.RecordingSession(_class_private_method_get(this, _getMainTarget, getMainTarget).call(this), {
                        title: event.name,
                        selectorAttribute: event.selectorAttribute,
                        selectorTypesToRecord: event.selectorTypesToRecord.length ? event.selectorTypesToRecord : Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_19__.Schema.SelectorType)
                    });
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).saveRecording(this.currentRecordingSession.cloneUserFlow())
                    ];
                case 2:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    previousSectionIndex = -1;
                    _this = this;
                    takeScreenshot = function() {
                        var _ref = _async_to_generator(function(currentRecording) {
                            var currentSectionIndex, currentSection, screenshot;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (!_this.sections) {
                                            throw new Error('Could not find sections.');
                                        }
                                        currentSectionIndex = _this.sections.length - 1;
                                        currentSection = _this.sections[currentSectionIndex];
                                        if (screenshotPromise || previousSectionIndex === currentSectionIndex) {
                                            return [
                                                2
                                            ];
                                        }
                                        screenshotPromise = _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotUtils.takeScreenshot();
                                        return [
                                            4,
                                            screenshotPromise
                                        ];
                                    case 1:
                                        screenshot = _state.sent();
                                        screenshotPromise = undefined;
                                        currentSection.screenshot = screenshot;
                                        _models_models_js__WEBPACK_IMPORTED_MODULE_19__.ScreenshotStorage.ScreenshotStorage.instance().storeScreenshotForSection(currentRecording.storageName, currentSectionIndex, screenshot);
                                        previousSectionIndex = currentSectionIndex;
                                        _class_private_method_get(_this, _updateScreenshotsForSections, updateScreenshotsForSections).call(_this);
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function takeScreenshot(currentRecording) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    _this1 = this;
                    this.currentRecordingSession.addEventListener("recordingupdated" /* Models.RecordingSession.Events.RecordingUpdated */ , function() {
                        var _ref = _async_to_generator(function(param) {
                            var data, _this_shadowRoot, _, _1, _tmp, recordingView;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        data = param.data;
                                        if (!_this1.currentRecording) {
                                            throw new Error('No current recording found');
                                        }
                                        _1 = (_ = _class_private_method_get(_this1, _setCurrentRecording, setCurrentRecording)).call;
                                        _tmp = [
                                            _this1
                                        ];
                                        return [
                                            4,
                                            _class_private_field_get(_this1, _storage).updateRecording(_this1.currentRecording.storageName, data)
                                        ];
                                    case 1:
                                        _1.apply(_, _tmp.concat([
                                            _state.sent()
                                        ]));
                                        recordingView = (_this_shadowRoot = _this1.shadowRoot) === null || _this_shadowRoot === void 0 ? void 0 : _this_shadowRoot.querySelector('devtools-recording-view');
                                        recordingView === null || recordingView === void 0 ? void 0 : recordingView.scrollToBottom();
                                        return [
                                            4,
                                            takeScreenshot(_this1.currentRecording)
                                        ];
                                    case 2:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    _this2 = this;
                    this.currentRecordingSession.addEventListener("recordingstopped" /* Models.RecordingSession.Events.RecordingStopped */ , function() {
                        var _ref = _async_to_generator(function(param) {
                            var data, _, _1, _tmp;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        data = param.data;
                                        if (!_this2.currentRecording) {
                                            throw new Error('No current recording found');
                                        }
                                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.keyboardShortcutFired("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ );
                                        _1 = (_ = _class_private_method_get(_this2, _setCurrentRecording, setCurrentRecording)).call;
                                        _tmp = [
                                            _this2
                                        ];
                                        return [
                                            4,
                                            _class_private_field_get(_this2, _storage).updateRecording(_this2.currentRecording.storageName, data)
                                        ];
                                    case 1:
                                        _1.apply(_, _tmp.concat([
                                            _state.sent()
                                        ]));
                                        return [
                                            4,
                                            _class_private_method_get(_this2, _onRecordingFinished, onRecordingFinished).call(_this2)
                                        ];
                                    case 2:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_) {
                            return _ref.apply(this, arguments);
                        };
                    }());
                    return [
                        4,
                        this.currentRecordingSession.start()
                    ];
                case 3:
                    _state.sent();
                    // -- Recording logic ends here --
                    // Setting up some variables to notify the user we are finished initialization.
                    this.isToggling = false;
                    this.isRecording = true;
                    _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "RecordingPage" /* Pages.RecordingPage */ );
                    // Dispatch an event for e2e testing.
                    this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.RecordingStateChangedEvent(this.currentRecording.flow));
                    return [
                        2
                    ];
            }
        });
    });
    return _onRecordingStarted1.apply(this, arguments);
}
function onRecordingFinished() {
    return _onRecordingFinished1.apply(this, arguments);
}
function _onRecordingFinished1() {
    _onRecordingFinished1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecording || !this.currentRecordingSession) {
                        throw new Error('Recording was never started');
                    }
                    // Setting up some variables to notify the user we are finalizing a recording.
                    this.isToggling = true;
                    _class_private_method_get(this, _clearError, clearError).call(this);
                    // -- Recording logic starts here --
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingToggled(2 /* Host.UserMetrics.RecordingToggled.RecordingFinished */ );
                    return [
                        4,
                        this.currentRecordingSession.stop()
                    ];
                case 1:
                    _state.sent();
                    this.currentRecordingSession = undefined;
                    // -- Recording logic ends here --
                    // Setting up some variables to notify the user we are finished finalizing.
                    this.isToggling = false;
                    this.isRecording = false;
                    // Dispatch an event for e2e testing.
                    this.dispatchEvent(new _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_21__.RecordingStateChangedEvent(this.currentRecording.flow));
                    return [
                        2
                    ];
            }
        });
    });
    return _onRecordingFinished1.apply(this, arguments);
}
function onRecordingCancelled() {
    return _onRecordingCancelled1.apply(this, arguments);
}
function _onRecordingCancelled1() {
    _onRecordingCancelled1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            if (this.previousPage) {
                _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, this.previousPage);
            }
            return [
                2
            ];
        });
    });
    return _onRecordingCancelled1.apply(this, arguments);
}
function onRecordingSelected(event) {
    return _onRecordingSelected1.apply(this, arguments);
}
function _onRecordingSelected1() {
    _onRecordingSelected1 = _async_to_generator(function(event) {
        var _event_target, storageName, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    storageName = _instanceof(event, _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.OpenRecordingEvent) || _instanceof(event, _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.PlayRecordingEvent) ? event.storageName : (_event_target = event.target) === null || _event_target === void 0 ? void 0 : _event_target.value;
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).getRecording(storageName)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    if (this.currentRecording) {
                        _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "RecordingPage" /* Pages.RecordingPage */ );
                    } else if (storageName === "StartPage" /* Pages.StartPage */ ) {
                        _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "StartPage" /* Pages.StartPage */ );
                    } else if (storageName === "AllRecordingsPage" /* Pages.AllRecordingsPage */ ) {
                        _class_private_method_get(this, _setCurrentPage, setCurrentPage).call(this, "AllRecordingsPage" /* Pages.AllRecordingsPage */ );
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _onRecordingSelected1.apply(this, arguments);
}
function onExportOptionSelected(event) {
    return _onExportOptionSelected1.apply(this, arguments);
}
function _onExportOptionSelected1() {
    _onExportOptionSelected1 = _async_to_generator(function(event) {
        var id, byId, converter, _ref, content, builtInMetric;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (typeof event.itemValue !== 'string') {
                        throw new Error('Invalid export option value');
                    }
                    if (event.itemValue === GET_EXTENSIONS_MENU_ITEM) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(GET_EXTENSIONS_URL);
                        return [
                            2
                        ];
                    }
                    if (!this.currentRecording) {
                        throw new Error('No recording selected');
                    }
                    id = event.itemValue;
                    byId = function(converter) {
                        return converter.getId() === id;
                    };
                    converter = _class_private_field_get(this, _builtInConverters).find(byId) || this.extensionConverters.find(byId);
                    if (!converter) {
                        throw new Error('No recording selected');
                    }
                    return [
                        4,
                        converter.stringify(this.currentRecording.flow)
                    ];
                case 1:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), content = _ref[0];
                    return [
                        4,
                        _class_private_method_get(this, _exportContent, exportContent).call(this, converter.getFilename(this.currentRecording.flow), content)
                    ];
                case 2:
                    _state.sent();
                    builtInMetric = CONVERTER_ID_TO_METRIC[converter.getId()];
                    if (builtInMetric) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(builtInMetric);
                    } else if (converter.getId().startsWith(_converters_converters_js__WEBPACK_IMPORTED_MODULE_17__.ExtensionConverter.EXTENSION_PREFIX)) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingExported(4 /* Host.UserMetrics.RecordingExported.ToExtension */ );
                    } else {
                        throw new Error('Could not find a metric for the export option with id = ' + id);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _onExportOptionSelected1.apply(this, arguments);
}
function exportContent(suggestedName, data) {
    return _exportContent1.apply(this, arguments);
}
function _exportContent1() {
    _exportContent1 = _async_to_generator(function(suggestedName, data) {
        var handle, writable, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        window.showSaveFilePicker({
                            suggestedName: suggestedName
                        })
                    ];
                case 1:
                    handle = _state.sent();
                    return [
                        4,
                        handle.createWritable()
                    ];
                case 2:
                    writable = _state.sent();
                    return [
                        4,
                        writable.write(data)
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        writable.close()
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    error = _state.sent();
                    // If the user aborts the action no need to report it, otherwise do.
                    if (error.name === 'AbortError') {
                        return [
                            2
                        ];
                    }
                    throw error;
                case 6:
                    return [
                        2
                    ];
            }
        });
    });
    return _exportContent1.apply(this, arguments);
}
function handleAddAssertionEvent() {
    return _handleAddAssertionEvent1.apply(this, arguments);
}
function _handleAddAssertionEvent1() {
    _handleAddAssertionEvent1 = _async_to_generator(function() {
        var _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot_querySelector, _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot, _this_renderRoot_querySelector_shadowRoot_querySelector, _this_renderRoot_querySelector_shadowRoot, _this_renderRoot_querySelector, flow, _, _1, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.currentRecordingSession || !this.currentRecording) {
                        return [
                            2
                        ];
                    }
                    flow = this.currentRecordingSession.cloneUserFlow();
                    flow.steps.push({
                        type: 'waitForElement',
                        selectors: [
                            [
                                '.cls'
                            ]
                        ]
                    });
                    _1 = (_ = _class_private_method_get(this, _setCurrentRecording, setCurrentRecording)).call;
                    _tmp = [
                        this
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _storage).updateRecording(this.currentRecording.storageName, flow)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent(),
                        {
                            keepBreakpoints: true,
                            updateSession: true
                        }
                    ]));
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.recordingAssertion(1 /* Host.UserMetrics.RecordingAssertion.AssertionAdded */ );
                    return [
                        4,
                        this.updateComplete
                    ];
                case 2:
                    _state.sent();
                    (_this_renderRoot_querySelector = this.renderRoot.querySelector('devtools-recording-view')) === null || _this_renderRoot_querySelector === void 0 ? void 0 : (_this_renderRoot_querySelector_shadowRoot = _this_renderRoot_querySelector.shadowRoot) === null || _this_renderRoot_querySelector_shadowRoot === void 0 ? void 0 : (_this_renderRoot_querySelector_shadowRoot_querySelector = _this_renderRoot_querySelector_shadowRoot.querySelector('.section:last-child devtools-step-view:last-of-type')) === null || _this_renderRoot_querySelector_shadowRoot_querySelector === void 0 ? void 0 : (_this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot = _this_renderRoot_querySelector_shadowRoot_querySelector.shadowRoot) === null || _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot === void 0 ? void 0 : (_this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot_querySelector = _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot.querySelector('.action')) === null || _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot_querySelector === void 0 ? void 0 : _this_renderRoot_querySelector_shadowRoot_querySelector_shadowRoot_querySelector.click();
                    return [
                        2
                    ];
            }
        });
    });
    return _handleAddAssertionEvent1.apply(this, arguments);
}
function onImportRecording(event) {
    event.stopPropagation();
    _class_private_method_get(this, _clearError, clearError).call(this);
    _class_private_field_set(this, _fileSelector, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createFileSelectorElement(_class_private_method_get(this, _importFile, importFile).bind(this)));
    _class_private_field_get(this, _fileSelector).click();
}
function onPlayRecordingByName(event) {
    return _onPlayRecordingByName1.apply(this, arguments);
}
function _onPlayRecordingByName1() {
    _onPlayRecordingByName1 = _async_to_generator(function(event) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_method_get(this, _onRecordingSelected, onRecordingSelected).call(this, event)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _class_private_method_get(this, _onPlayRecording, onPlayRecording).call(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.PlayRecordingEvent({
                            targetPanel: "chrome-recorder" /* Components.RecordingView.TargetPanel.Default */ ,
                            speed: _class_private_field_get(this, _recorderSettings).speed
                        }))
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _onPlayRecordingByName1.apply(this, arguments);
}
function onExtensionViewClosed() {
    this.viewDescriptor = undefined;
}
function getShortcutsInfo() {
    var getBindingForAction = function(action) {
        var shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
        return shortcuts.map(function(shortcut) {
            return shortcut.title();
        });
    };
    return [
        {
            title: i18nString(UIStrings.startStopRecording),
            bindings: getBindingForAction("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ )
        },
        {
            title: i18nString(UIStrings.replayRecording),
            bindings: getBindingForAction("chrome-recorder.replay-recording" /* Actions.RecorderActions.ReplayRecording */ )
        },
        {
            title: i18nString(UIStrings.copyShortcut),
            bindings: [
                "".concat(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isMac() ? '⌘ C' : 'Ctrl+C')
            ]
        },
        {
            title: i18nString(UIStrings.toggleCode),
            bindings: getBindingForAction("chrome-recorder.toggle-code-view" /* Actions.RecorderActions.ToggleCodeView */ )
        }
    ];
}
function renderCurrentPage() {
    switch(this.currentPage){
        case "StartPage" /* Pages.StartPage */ :
            return _class_private_method_get(this, _renderStartPage, renderStartPage).call(this);
        case "AllRecordingsPage" /* Pages.AllRecordingsPage */ :
            return _class_private_method_get(this, _renderAllRecordingsPage, renderAllRecordingsPage).call(this);
        case "RecordingPage" /* Pages.RecordingPage */ :
            return _class_private_method_get(this, _renderRecordingPage, renderRecordingPage).call(this);
        case "CreateRecordingPage" /* Pages.CreateRecordingPage */ :
            return _class_private_method_get(this, _renderCreateRecordingPage, renderCreateRecordingPage).call(this);
    }
}
function renderAllRecordingsPage() {
    var recordings = _class_private_field_get(this, _storage).getRecordings();
    // clang-format off
    return html(_templateObject5(), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName, recordings.map(function(recording) {
        return {
            storageName: recording.storageName,
            name: recording.flow.title
        };
    }), _class_private_field_get(this, _replayAllowed), _class_private_method_get(this, _onCreateNewRecording, onCreateNewRecording), _class_private_method_get(this, _onDeleteRecording, onDeleteRecording), _class_private_method_get(this, _onRecordingSelected, onRecordingSelected), _class_private_method_get(this, _onPlayRecordingByName, onPlayRecordingByName), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingListView.RecordingListView.litTagName);
// clang-format on
}
function renderStartPage() {
    // clang-format off
    return html(_templateObject6(), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName, _class_private_method_get(this, _onCreateNewRecording, onCreateNewRecording), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.StartView.StartView.litTagName);
// clang-format on
}
function renderRecordingPage() {
    var _this = this;
    var _this_currentRecording;
    // clang-format off
    return html(_templateObject7(), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName, {
        recording: (_this_currentRecording = this.currentRecording) === null || _this_currentRecording === void 0 ? void 0 : _this_currentRecording.flow,
        replayState: _class_private_field_get(this, _replayState),
        isRecording: this.isRecording,
        recordingTogglingInProgress: this.isToggling,
        currentStep: this.currentStep,
        currentError: this.recordingError,
        sections: this.sections,
        settings: this.settings,
        recorderSettings: _class_private_field_get(this, _recorderSettings),
        lastReplayResult: this.lastReplayResult,
        replayAllowed: _class_private_field_get(this, _replayAllowed),
        breakpointIndexes: _class_private_field_get(this, _stepBreakpointIndexes),
        builtInConverters: _class_private_field_get(this, _builtInConverters),
        extensionConverters: this.extensionConverters,
        replayExtensions: this.replayExtensions,
        extensionDescriptor: this.viewDescriptor
    }, _class_private_method_get(this, _onNetworkConditionsChanged, onNetworkConditionsChanged), _class_private_method_get(this, _onTimeoutChanged, onTimeoutChanged), function(event) {
        var _this_currentRecording;
        event.send((_this_currentRecording = _this.currentRecording) === null || _this_currentRecording === void 0 ? void 0 : _this_currentRecording.flow.selectorAttribute);
    }, _class_private_method_get(this, _onRecordingFinished, onRecordingFinished), _class_private_method_get(this, _handleRecordingChanged, handleRecordingChanged).bind(this), _class_private_method_get(this, _handleRecordingTitleChanged, handleRecordingTitleChanged).bind(this), _class_private_method_get(this, _handleStepAdded, handleStepAdded).bind(this), _class_private_method_get(this, _handleStepRemoved, handleStepRemoved).bind(this), _class_private_field_get(this, _onAddBreakpoint), _class_private_field_get(this, _onRemoveBreakpoint), _class_private_method_get(this, _onPlayRecording, onPlayRecording), _class_private_method_get(this, _onAbortReplay, onAbortReplay), _class_private_method_get(this, _onExtensionViewClosed, onExtensionViewClosed), _class_private_method_get(this, _handleAddAssertionEvent, handleAddAssertionEvent), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.RecordingView.RecordingView.litTagName);
// clang-format on
}
function renderCreateRecordingPage() {
    // clang-format off
    return html(_templateObject8(), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName, {
        recorderSettings: _class_private_field_get(this, _recorderSettings)
    }, _class_private_method_get(this, _onRecordingStarted, onRecordingStarted), _class_private_method_get(this, _onRecordingCancelled, onRecordingCancelled), _components_components_js__WEBPACK_IMPORTED_MODULE_16__.CreateRecordingView.CreateRecordingView.litTagName);
// clang-format on
}
function onExportRecording(event) {
    event.stopPropagation();
    _class_private_method_get(this, _clearError, clearError).call(this);
    this.exportMenuExpanded = !this.exportMenuExpanded;
}
function onExportMenuClosed() {
    this.exportMenuExpanded = false;
}


}),
"./panels/recorder/RecorderEvents.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecordingStateChangedEvent: function() { return RecordingStateChangedEvent; },
  ReplayFinishedEvent: function() { return ReplayFinishedEvent; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
var ReplayFinishedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ReplayFinishedEvent, Event1);
    var _super = _create_super(ReplayFinishedEvent);
    function ReplayFinishedEvent() {
        _class_call_check(this, ReplayFinishedEvent);
        return _super.call(this, ReplayFinishedEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return ReplayFinishedEvent;
}(_wrap_native_super(Event));
_define_property(ReplayFinishedEvent, "eventName", 'replayfinished');
var RecordingStateChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingStateChangedEvent, Event1);
    var _super = _create_super(RecordingStateChangedEvent);
    function RecordingStateChangedEvent(recording) {
        _class_call_check(this, RecordingStateChangedEvent);
        var _this;
        _this = _super.call(this, RecordingStateChangedEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "recording", void 0);
        _this.recording = recording;
        return _this;
    }
    return RecordingStateChangedEvent;
} //# sourceMappingURL=RecorderEvents.js.map
(_wrap_native_super(Event));
_define_property(RecordingStateChangedEvent, "eventName", 'recordingstatechanged');


}),
"./panels/recorder/recorderController.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n*:focus,\n*:focus-visible {\n  outline: none;\n}\n\n:host {\n  overflow-x: auto;\n}\n\n:host,\ndevtools-recording-view,\ndevtools-create-recording-view {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.header {\n  background-color: var(--sys-color-cdt-base-container);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 0 5px;\n  min-height: 29px;\n  max-height: 29px;\n  gap: 3px;\n}\n\n.separator {\n  background-color: var(--sys-color-divider);\n  width: 1px;\n  height: 17px;\n  margin: 0;\n}\n\nselect {\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 24px;\n  max-width: 180px;\n  min-width: 140px;\n  padding: 0 5px;\n  position: relative;\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  text-overflow: ellipsis;\n}\n\nselect:disabled {\n  color: var(--sys-color-state-disabled);\n}\n\nselect:not([disabled]):hover,\nselect:not([disabled]):focus-visible,\nselect:not([disabled]):active {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\nselect:not([disabled]):focus-visible {\n  box-shadow: 0 0 0 2px var(--sys-color-state-focus-ring);\n}\n\nselect option {\n  background-color: var(--sys-color-cdt-base-container);\n  color: var(--sys-color-on-surface);\n}\n\ndevtools-menu {\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n\ndevtools-recording-list-view {\n  overflow: auto;\n}\n\n.error {\n  color: var(--sys-color-error);\n  border: 1px solid var(--sys-color-error);\n  background-color: var(--sys-color-error-container);\n  padding: 4px;\n}\n\n.feedback {\n  margin-left: auto;\n  margin-right: 4px;\n}\n\n.feedback .x-link {\n  letter-spacing: 0.03em;\n  text-decoration-line: underline;\n  font-size: 9px;\n  line-height: 16px;\n  color: var(--sys-color-on-surface-subtle);\n  outline-offset: 3px;\n}\n\n.feedback .x-link:focus-visible {\n  outline: -webkit-focus-ring-color auto 1px;\n}\n\ndevtools-shortcut-dialog {\n  padding-right: 6px;\n}\n\n/*# sourceURL=recorderController.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./services/tracing/tracing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerformanceTracing: function() { return /* reexport module object */ _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _PerformanceTracing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PerformanceTracing.js */ "./services/tracing/PerformanceTracing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=tracing.js.map


}),

}]);