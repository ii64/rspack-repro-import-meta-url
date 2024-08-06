"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_BackForwardCacheView_js"], {
"./panels/application/components/BackForwardCacheView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheView: function() { return BackForwardCacheView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackForwardCacheStrings.js */ "./panels/application/components/BackForwardCacheStrings.js");
/* harmony import */var _backForwardCacheView_css_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./backForwardCacheView.css.js */ "./panels/application/components/backForwardCacheView.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        " jslog=",
        ">\n\n          ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-resources-back-forward-cache-view"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n        <",
        ">\n          ",
        "\n        </",
        ">\n        <",
        ">\n          ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n            ",
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      ",
        '\n      <div class="report-line">\n        <div class="report-key">\n          ',
        '\n        </div>\n        <div class="report-value" title=',
        ">\n          ",
        "\n        </div>\n      </div>\n      ",
        "\n      <",
        ">\n        <",
        "\n          aria-label=",
        "\n          .disabled=",
        "\n          .spinner=",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        ">\n          ",
        "\n        </",
        ">\n      </",
        ">\n      <",
        ">\n      </",
        ">\n      ",
        "\n      <",
        '>\n        <x-link href="https://web.dev/bfcache/" class="link"\n        jslog=',
        ">\n          ",
        "\n        </x-link>\n      </",
        ">\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n            <",
        ' class="inline-icon" style="margin-bottom: -3px;" .data=',
        ">\n            </",
        ">\n          "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n        <div class="text-ellipsis">\n          ',
        "\n          ",
        "\n        </div>\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n      <div class="report-line"\n      jslog=',
        '>\n        <div class="report-key">\n          ',
        '\n        </div>\n        <div class="report-value">\n          <',
        " .data=",
        ">\n          </",
        ">\n        </div>\n      </div>\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n          <",
        '>\n            <div class="status">\n              <',
        ' class="inline-icon" .data=',
        ">\n              </",
        ">\n            </div>\n            ",
        "\n          </",
        ">\n        "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n          <",
        '>\n            <div class="status">\n              <',
        ' class="inline-icon" .data=',
        ">\n              </",
        ">\n            </div>\n            ",
        "\n          </",
        ">\n        "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n    <",
        ">\n      ",
        "\n    </",
        ">\n    "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        "\n      ",
        "\n    "
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n        <",
        ">\n          ",
        '\n          <div class="help-outline-icon">\n            <',
        ' class="inline-icon" .data=',
        " title=",
        ">\n            </",
        ">\n          </div>\n        </",
        ">\n        ",
        "\n      "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n    "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "",
        "\n      <",
        " .href=",
        ">",
        "</",
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
        '<div class="text-ellipsis" title=',
        "\n    jslog=",
        ">",
        "</div>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        '\n      <div class="details-list"\n      jslog=',
        ">\n        <",
        " .data=",
        "\n        jslog=",
        "></",
        ">\n      </div>\n    "
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        '\n        <x-link href="https://web.dev/bfcache/#never-use-the-unload-event" class="link"\n        jslog=',
        ">\n          ",
        "\n        </x-link>"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        '\n      <div class="details-list">\n        <',
        " .data=",
        "></",
        ">\n      </div>\n    "
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        '\n            <div class="circled-exclamation-icon">\n              <',
        ' class="inline-icon" .data=',
        ">\n              </",
        ">\n            </div>\n            <div>\n              ",
        "\n              ",
        "\n              ",
        "\n           </div>"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "\n      <",
        ">\n        ",
        "\n      </",
        '>\n      <div class="gray-text">\n        ',
        "\n      </div>\n      ",
        "\n      ",
        "\n    "
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
















var UIStrings = {
    /**
     * @description Title text in back/forward cache view of the Application panel
     */ mainFrame: 'Main Frame',
    /**
     * @description Title text in back/forward cache view of the Application panel
     */ backForwardCacheTitle: 'Back/forward cache',
    /**
     * @description Status text for the status of the main frame
     */ unavailable: 'unavailable',
    /**
     * @description Entry name text in the back/forward cache view of the Application panel
     */ url: 'URL:',
    /**
     * @description Status text for the status of the back/forward cache status
     */ unknown: 'Unknown Status',
    /**
     * @description Status text for the status of the back/forward cache status indicating that
     * the back/forward cache was not used and a normal navigation occured instead.
     */ normalNavigation: 'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
    /**
     * @description Status text for the status of the back/forward cache status indicating that
     * the back/forward cache was used to restore the page instead of reloading it.
     */ restoredFromBFCache: 'Successfully served from back/forward cache.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are actionable i.e. they can be cleaned up to make the
     * page eligible for back/forward cache.
     */ pageSupportNeeded: 'Actionable',
    /**
     * @description Explanation for actionable items which prevent the page from being eligible
     * for back/forward cache.
     */ pageSupportNeededExplanation: 'These reasons are actionable i.e. they can be cleaned up to make the page eligible for back/forward cache.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are circumstantial / not actionable i.e. they cannot be
     * cleaned up by developers to make the page eligible for back/forward cache.
     */ circumstantial: 'Not Actionable',
    /**
     * @description Explanation for circumstantial/non-actionable items which prevent the page from being eligible
     * for back/forward cache.
     */ circumstantialExplanation: 'These reasons are not actionable i.e. caching was prevented by something outside of the direct control of the page.',
    /**
     * @description Label for a list of reasons which prevent the page from being eligible for
     * back/forward cache. These reasons are pending support by chrome i.e. in a future version
     * of chrome they will not prevent back/forward cache usage anymore.
     */ supportPending: 'Pending Support',
    /**
     * @description Label for the button to test whether BFCache is available for the page
     */ runTest: 'Test back/forward cache',
    /**
     * @description Label for the disabled button while the test is running
     */ runningTest: 'Running test',
    /**
     * @description Link Text about explanation of back/forward cache
     */ learnMore: 'Learn more: back/forward cache eligibility',
    /**
     * @description Link Text about unload handler
     */ neverUseUnload: 'Learn more: Never use unload handler',
    /**
     * @description Explanation for 'pending support' items which prevent the page from being eligible
     * for back/forward cache.
     */ supportPendingExplanation: 'Chrome support for these reasons is pending i.e. they will not prevent the page from being eligible for back/forward cache in a future version of Chrome.',
    /**
     * @description Text that precedes displaying a link to the extension which blocked the page from being eligible for back/forward cache.
     */ blockingExtensionId: 'Extension id: ',
    /**
     * @description Label for the 'Frames' section of the back/forward cache view, which shows a frame tree of the
     * page with reasons why the frames can't be cached.
     */ framesTitle: 'Frames',
    /**
     * @description Top level summary of the total number of issues found in a single frame.
     */ issuesInSingleFrame: '{n, plural, =1 {# issue found in 1 frame.} other {# issues found in 1 frame.}}',
    /**
     * @description Top level summary of the total number of issues found and the number of frames they were found in.
     * 'm' is never less than 2.
     * @example {3} m
     */ issuesInMultipleFrames: '{n, plural, =1 {# issue found in {m} frames.} other {# issues found in {m} frames.}}',
    /**
     * @description Shows the number of frames with a particular issue.
     */ framesPerIssue: '{n, plural, =1 {# frame} other {# frames}}',
    /**
     *@description Title for a frame in the frame tree that doesn't have a URL. Placeholder indicates which number frame with a blank URL it is.
     *@example {3} PH1
     */ blankURLTitle: 'Blank URL [{PH1}]',
    /**
     * @description Shows the number of files with a particular issue.
     */ filesPerIssue: '{n, plural, =1 {# file} other {# files}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/BackForwardCacheView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _screenStatus = /*#__PURE__*/ new WeakMap(), _nextNodeId = /*#__PURE__*/ new WeakMap(), _historyIndex = /*#__PURE__*/ new WeakMap(), _getMainResourceTreeModel = /*#__PURE__*/ new WeakSet(), _getMainFrame = /*#__PURE__*/ new WeakSet(), _renderBackForwardCacheTestResult = /*#__PURE__*/ new WeakSet(), _onNavigatedAway = /*#__PURE__*/ new WeakSet(), _waitAndGoBackInHistory = /*#__PURE__*/ new WeakSet(), _navigateAwayAndBack = /*#__PURE__*/ new WeakSet(), _renderMainFrameInformation = /*#__PURE__*/ new WeakSet(), _maybeRenderFrameTree = /*#__PURE__*/ new WeakSet(), // Builds a subtree of the frame tree, conaining only frames with BFCache issues and their ancestors.
// Returns the root node, the number of frames in the subtree, and the number of issues in the subtree.
_buildFrameTreeDataRecursive = /*#__PURE__*/ new WeakSet(), _renderBackForwardCacheStatus = /*#__PURE__*/ new WeakSet(), _buildReasonToFramesMap = /*#__PURE__*/ new WeakSet(), _maybeRenderExplanations = /*#__PURE__*/ new WeakSet(), _renderExplanations = /*#__PURE__*/ new WeakSet(), _maybeRenderReasonContext = /*#__PURE__*/ new WeakSet(), _renderFramesPerReason = /*#__PURE__*/ new WeakSet(), _maybeRenderDeepLinkToUnload = /*#__PURE__*/ new WeakSet(), _maybeRenderJavaScriptDetails = /*#__PURE__*/ new WeakSet(), _renderReason = /*#__PURE__*/ new WeakSet();
var BackForwardCacheView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(BackForwardCacheView, _superClass);
    var _super = _create_super(BackForwardCacheView);
    function BackForwardCacheView() {
        _class_call_check(this, BackForwardCacheView);
        var _this;
        var _class_private_method_get_call, _class_private_method_get_call1;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _getMainResourceTreeModel);
        _class_private_method_init(_assert_this_initialized(_this), _getMainFrame);
        _class_private_method_init(_assert_this_initialized(_this), _renderBackForwardCacheTestResult);
        _class_private_method_init(_assert_this_initialized(_this), _onNavigatedAway);
        _class_private_method_init(_assert_this_initialized(_this), _waitAndGoBackInHistory);
        _class_private_method_init(_assert_this_initialized(_this), _navigateAwayAndBack);
        _class_private_method_init(_assert_this_initialized(_this), _renderMainFrameInformation);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderFrameTree);
        _class_private_method_init(_assert_this_initialized(_this), _buildFrameTreeDataRecursive);
        _class_private_method_init(_assert_this_initialized(_this), _renderBackForwardCacheStatus);
        _class_private_method_init(_assert_this_initialized(_this), _buildReasonToFramesMap);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderExplanations);
        _class_private_method_init(_assert_this_initialized(_this), _renderExplanations);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderReasonContext);
        _class_private_method_init(_assert_this_initialized(_this), _renderFramesPerReason);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderDeepLinkToUnload);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderJavaScriptDetails);
        _class_private_method_init(_assert_this_initialized(_this), _renderReason);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _screenStatus, {
            writable: true,
            value: "Result" /* ScreenStatusType.Result */ 
        });
        _class_private_field_init(_assert_this_initialized(_this), _nextNodeId, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _historyIndex, {
            writable: true,
            value: 0
        });
        (_class_private_method_get_call = _class_private_method_get(_this, _getMainResourceTreeModel, getMainResourceTreeModel).call(_assert_this_initialized(_this))) === null || _class_private_method_get_call === void 0 ? void 0 : _class_private_method_get_call.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, _this.render, _assert_this_initialized(_this));
        (_class_private_method_get_call1 = _class_private_method_get(_this, _getMainResourceTreeModel, getMainResourceTreeModel).call(_assert_this_initialized(_this))) === null || _class_private_method_get_call1 === void 0 ? void 0 : _class_private_method_get_call1.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, _this.render, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(BackForwardCacheView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this_parentElement;
                (_this_parentElement = this.parentElement) === null || _this_parentElement === void 0 ? void 0 : _this_parentElement.classList.add('overflow-auto');
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _backForwardCacheView_css_js__WEBPACK_IMPORTED_MODULE_15__["default"]
                ];
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    coordinator.write('BackForwardCacheView render', function() {
                                        // Disabled until https://crbug.com/1079231 is fixed.
                                        // clang-format off
                                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName, {
                                            reportTitle: i18nString(UIStrings.backForwardCacheTitle)
                                        }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('back-forward-cache'), _class_private_method_get(_this, _renderMainFrameInformation, renderMainFrameInformation).call(_this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.Report.litTagName), _class_private_field_get(_this, _shadow), {
                                            host: _this
                                        });
                                    // clang-format on
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
    return BackForwardCacheView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__.LegacyWrapper.WrappableComponent);
_define_property(BackForwardCacheView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.literal(_templateObject1()));
function getMainResourceTreeModel() {
    var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
    return (mainTarget === null || mainTarget === void 0 ? void 0 : mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel)) || null;
}
function getMainFrame() {
    var _class_private_method_get_call;
    return ((_class_private_method_get_call = _class_private_method_get(this, _getMainResourceTreeModel, getMainResourceTreeModel).call(this)) === null || _class_private_method_get_call === void 0 ? void 0 : _class_private_method_get_call.mainFrame) || null;
}
function renderBackForwardCacheTestResult() {
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, _class_private_method_get(this, _renderBackForwardCacheTestResult, renderBackForwardCacheTestResult), this);
    _class_private_field_set(this, _screenStatus, "Result" /* ScreenStatusType.Result */ );
    void this.render();
}
function onNavigatedAway() {
    return _onNavigatedAway1.apply(this, arguments);
}
function _onNavigatedAway1() {
    _onNavigatedAway1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().removeModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, _class_private_method_get(this, _onNavigatedAway, onNavigatedAway), this);
                    return [
                        4,
                        _class_private_method_get(this, _waitAndGoBackInHistory, waitAndGoBackInHistory).call(this, 50)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _onNavigatedAway1.apply(this, arguments);
}
function waitAndGoBackInHistory(delay) {
    return _waitAndGoBackInHistory1.apply(this, arguments);
}
function _waitAndGoBackInHistory1() {
    _waitAndGoBackInHistory1 = _async_to_generator(function(delay) {
        var mainTarget, resourceTreeModel, historyResults;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
                    resourceTreeModel = mainTarget === null || mainTarget === void 0 ? void 0 : mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
                    return [
                        4,
                        resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.navigationHistory()
                    ];
                case 1:
                    historyResults = _state.sent();
                    if (!resourceTreeModel || !historyResults) {
                        return [
                            2
                        ];
                    }
                    // The navigation history can be delayed. If this is the case we wait and
                    // check again later. Otherwise it would be possible to press the 'Test
                    // BFCache' button again too soon, leading to the browser stepping back in
                    // history without returning to the correct page.
                    if (historyResults.currentIndex === _class_private_field_get(this, _historyIndex)) {
                        window.setTimeout(_class_private_method_get(this, _waitAndGoBackInHistory, waitAndGoBackInHistory).bind(this, delay * 2), delay);
                    } else {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, _class_private_method_get(this, _renderBackForwardCacheTestResult, renderBackForwardCacheTestResult), this);
                        resourceTreeModel.navigateToHistoryEntry(historyResults.entries[historyResults.currentIndex - 1]);
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _waitAndGoBackInHistory1.apply(this, arguments);
}
function navigateAwayAndBack() {
    return _navigateAwayAndBack1.apply(this, arguments);
}
function _navigateAwayAndBack1() {
    _navigateAwayAndBack1 = _async_to_generator(function() {
        var mainTarget, resourceTreeModel, historyResults;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Checking BFCache Compatibility
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
                    resourceTreeModel = mainTarget === null || mainTarget === void 0 ? void 0 : mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
                    return [
                        4,
                        resourceTreeModel === null || resourceTreeModel === void 0 ? void 0 : resourceTreeModel.navigationHistory()
                    ];
                case 1:
                    historyResults = _state.sent();
                    if (!resourceTreeModel || !historyResults) {
                        return [
                            2
                        ];
                    }
                    _class_private_field_set(this, _historyIndex, historyResults.currentIndex);
                    _class_private_field_set(this, _screenStatus, "Running" /* ScreenStatusType.Running */ );
                    void this.render();
                    // This event listener is removed inside of onNavigatedAway().
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.FrameNavigated, _class_private_method_get(this, _onNavigatedAway, onNavigatedAway), this);
                    // We can know whether the current page can use BFCache
                    // as the browser navigates to another unrelated page and goes back to the current page.
                    // We chose "chrome://terms" because it must be cross-site.
                    // Ideally, We want to have our own testing page like "chrome: //bfcache-test".
                    void resourceTreeModel.navigate('chrome://terms');
                    return [
                        2
                    ];
            }
        });
    });
    return _navigateAwayAndBack1.apply(this, arguments);
}
function renderMainFrameInformation() {
    var frame = _class_private_method_get(this, _getMainFrame, getMainFrame).call(this);
    if (!frame) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject2(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName, i18nString(UIStrings.mainFrame), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName, i18nString(UIStrings.unavailable), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportValue.litTagName);
    // clang-format on
    }
    var isTestRunning = _class_private_field_get(this, _screenStatus) === "Running" /* ScreenStatusType.Running */ ;
    // Prevent running BFCache test on the DevTools window itself via DevTools on DevTools
    var isTestingForbidden = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(frame.url, 'devtools:');
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject4(), _class_private_method_get(this, _renderBackForwardCacheStatus, renderBackForwardCacheStatus).call(this, frame.backForwardCacheDetails.restoredFromCache), i18nString(UIStrings.url), frame.url, frame.url, _class_private_method_get(this, _maybeRenderFrameTree, maybeRenderFrameTree).call(this, frame.backForwardCacheDetails.explanationsTree), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName, i18nString(UIStrings.runTest), isTestRunning || isTestingForbidden, isTestRunning, "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_method_get(this, _navigateAwayAndBack, navigateAwayAndBack), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('back-forward-cache.run-test').track({
        click: true
    }), isTestRunning ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject3(), i18nString(UIStrings.runningTest)) : "\n            ".concat(i18nString(UIStrings.runTest), "\n          "), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionDivider.litTagName, _class_private_method_get(this, _maybeRenderExplanations, maybeRenderExplanations).call(this, frame.backForwardCacheDetails.explanations, frame.backForwardCacheDetails.explanationsTree), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('learn-more.eligibility').track({
        click: true
    }), i18nString(UIStrings.learnMore), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName);
// clang-format on
}
function maybeRenderFrameTree(explanationTree) {
    if (!explanationTree || explanationTree.explanations.length === 0 && explanationTree.children.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    function treeNodeRenderer(node) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject6(), node.treeNodeData.iconName ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject5(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, {
            iconName: node.treeNodeData.iconName,
            color: 'var(--icon-default)',
            width: '20px',
            height: '20px'
        }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing, node.treeNodeData.text);
    // clang-format on
    }
    var frameTreeData = _class_private_method_get(this, _buildFrameTreeDataRecursive, buildFrameTreeDataRecursive).call(this, explanationTree, {
        blankCount: 1
    });
    // Override the icon for the outermost frame.
    frameTreeData.node.treeNodeData.iconName = 'frame';
    var title = '';
    // The translation pipeline does not support nested plurals. We avoid this
    // here by pulling out the logic for one of the plurals into code instead.
    if (frameTreeData.frameCount === 1) {
        title = i18nString(UIStrings.issuesInSingleFrame, {
            n: frameTreeData.issueCount
        });
    } else {
        title = i18nString(UIStrings.issuesInMultipleFrames, {
            n: frameTreeData.issueCount,
            m: frameTreeData.frameCount
        });
    }
    var root = {
        treeNodeData: {
            text: title
        },
        id: 'root',
        children: function() {
            return Promise.resolve([
                frameTreeData.node
            ]);
        }
    };
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject7(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.section('frames'), i18nString(UIStrings.framesTitle), _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutline.litTagName, {
        tree: [
            root
        ],
        defaultRenderer: treeNodeRenderer,
        compact: true
    }, _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutline.litTagName);
// clang-format on
}
function buildFrameTreeDataRecursive(explanationTree, nextBlankURLCount) {
    var frameCount = 1;
    var issueCount = 0;
    var children = [];
    var nodeUrlText = '';
    if (explanationTree.url.length) {
        nodeUrlText = explanationTree.url;
    } else {
        nodeUrlText = i18nString(UIStrings.blankURLTitle, {
            PH1: nextBlankURLCount.blankCount
        });
        nextBlankURLCount.blankCount += 1;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = explanationTree.explanations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var explanation = _step.value;
            var child = {
                treeNodeData: {
                    text: explanation.reason
                },
                id: String(_class_private_field_update(this, _nextNodeId).value++)
            };
            issueCount += 1;
            children.push(child);
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
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = explanationTree.children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var child1 = _step1.value;
            var frameTreeData = _class_private_method_get(this, _buildFrameTreeDataRecursive, buildFrameTreeDataRecursive).call(this, child1, nextBlankURLCount);
            if (frameTreeData.issueCount > 0) {
                children.push(frameTreeData.node);
                issueCount += frameTreeData.issueCount;
                frameCount += frameTreeData.frameCount;
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
    var node = {
        treeNodeData: {
            text: "(".concat(issueCount, ") ").concat(nodeUrlText)
        },
        id: String(_class_private_field_update(this, _nextNodeId).value++)
    };
    if (children.length) {
        node = _object_spread_props(_object_spread({}, node), {
            children: function() {
                return Promise.resolve(children);
            }
        });
        node.treeNodeData.iconName = 'iframe';
    } else if (!explanationTree.url.length) {
        // If the current node increased the blank count, but it has no children and
        // is therefore not shown, decrement the blank count again.
        nextBlankURLCount.blankCount -= 1;
    }
    return {
        node: node,
        frameCount: frameCount,
        issueCount: issueCount
    };
}
function renderBackForwardCacheStatus(status) {
    switch(status){
        case true:
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, {
                iconName: 'check-circle',
                color: 'var(--icon-checkmark-green)',
                width: '20px',
                height: '20px'
            }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, i18nString(UIStrings.restoredFromBFCache), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName);
        // clang-format on
        case false:
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject9(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, {
                iconName: 'clear',
                color: 'var(--icon-default)',
                width: '20px',
                height: '20px'
            }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, i18nString(UIStrings.normalNavigation), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName);
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject10(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, i18nString(UIStrings.unknown), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName);
// clang-format on
}
function buildReasonToFramesMap(explanationTree, nextBlankURLCount, outputMap) {
    var _this = this;
    var url = explanationTree.url;
    if (url.length === 0) {
        url = i18nString(UIStrings.blankURLTitle, {
            PH1: nextBlankURLCount.blankCount
        });
        nextBlankURLCount.blankCount += 1;
    }
    explanationTree.explanations.forEach(function(explanation) {
        var frames = outputMap.get(explanation.reason);
        if (frames === undefined) {
            frames = [
                url
            ];
            outputMap.set(explanation.reason, frames);
        } else {
            frames.push(url);
        }
    });
    explanationTree.children.map(function(child) {
        _class_private_method_get(_this, _buildReasonToFramesMap, buildReasonToFramesMap).call(_this, child, nextBlankURLCount, outputMap);
    });
}
function maybeRenderExplanations(explanations, explanationTree) {
    if (explanations.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    var pageSupportNeeded = explanations.filter(function(explanation) {
        return explanation.type === "PageSupportNeeded" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.PageSupportNeeded */ ;
    });
    var supportPending = explanations.filter(function(explanation) {
        return explanation.type === "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */ ;
    });
    var circumstantial = explanations.filter(function(explanation) {
        return explanation.type === "Circumstantial" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.Circumstantial */ ;
    });
    var reasonToFramesMap = new Map();
    if (explanationTree) {
        _class_private_method_get(this, _buildReasonToFramesMap, buildReasonToFramesMap).call(this, explanationTree, {
            blankCount: 1
        }, reasonToFramesMap);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject11(), _class_private_method_get(this, _renderExplanations, renderExplanations).call(this, i18nString(UIStrings.pageSupportNeeded), i18nString(UIStrings.pageSupportNeededExplanation), pageSupportNeeded, reasonToFramesMap), _class_private_method_get(this, _renderExplanations, renderExplanations).call(this, i18nString(UIStrings.supportPending), i18nString(UIStrings.supportPendingExplanation), supportPending, reasonToFramesMap), _class_private_method_get(this, _renderExplanations, renderExplanations).call(this, i18nString(UIStrings.circumstantial), i18nString(UIStrings.circumstantialExplanation), circumstantial, reasonToFramesMap));
// clang-format on
}
function renderExplanations(category, explainerText, explanations, reasonToFramesMap) {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject13(), explanations.length > 0 ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject12(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName, category, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, {
        iconName: 'help',
        color: 'var(--icon-default)',
        width: '16px',
        height: '16px'
    }, explainerText, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSectionHeader.litTagName, explanations.map(function(explanation) {
        return _class_private_method_get(_this, _renderReason, renderReason).call(_this, explanation, reasonToFramesMap.get(explanation.reason));
    })) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing);
// clang-format on
}
function maybeRenderReasonContext(explanation) {
    if (explanation.reason === "EmbedderExtensionSentMessageToCachedFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.EmbedderExtensionSentMessageToCachedFrame */  && explanation.context) {
        var link = 'chrome://extensions/?id=' + explanation.context;
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject14(), i18nString(UIStrings.blockingExtensionId), _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__.ChromeLink.ChromeLink.litTagName, link, explanation.context, _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_4__.ChromeLink.ChromeLink.litTagName);
    // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
}
function renderFramesPerReason(frames) {
    var _rows;
    if (frames === undefined || frames.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    var rows = [
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject15(), i18nString(UIStrings.framesPerIssue, {
            n: frames.length
        }))
    ];
    (_rows = rows).push.apply(_rows, _to_consumable_array(frames.map(function(url) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject16(), url, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.treeItem(), url);
    })));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject17(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.tree('frames-per-issue'), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName, {
        rows: rows,
        title: i18nString(UIStrings.framesPerIssue, {
            n: frames.length
        })
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.treeItem(), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName);
}
function maybeRenderDeepLinkToUnload(explanation) {
    if (explanation.reason === "UnloadHandlerExistsInMainFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInMainFrame */  || explanation.reason === "UnloadHandlerExistsInSubFrame" /* Protocol.Page.BackForwardCacheNotRestoredReason.UnloadHandlerExistsInSubFrame */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject18(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.action('learn-more.never-use-unload').track({
            click: true
        }), i18nString(UIStrings.neverUseUnload));
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
}
function maybeRenderJavaScriptDetails(details) {
    var _rows;
    if (details === undefined || details.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing;
    }
    var maxLengthForDisplayedURLs = 50;
    var linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_11__.Linkifier.Linkifier(maxLengthForDisplayedURLs);
    var rows = [
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject19(), i18nString(UIStrings.filesPerIssue, {
            n: details.length
        }))
    ];
    (_rows = rows).push.apply(_rows, _to_consumable_array(details.map(function(detail) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject20(), linkifier.linkifyScriptLocation(null, null, detail.url, detail.lineNumber, {
            columnNumber: detail.columnNumber,
            showColumnNumber: true,
            inlineFrameIndex: 0
        }));
    })));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject21(), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName, {
        rows: rows
    }, _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableList.ExpandableList.litTagName);
}
function renderReason(explanation, frames) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject23(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, explanation.reason in _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__.NotRestoredReasonDescription ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject22(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, {
        iconName: 'warning',
        color: 'var(--icon-warning)',
        width: '16px',
        height: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, _BackForwardCacheStrings_js__WEBPACK_IMPORTED_MODULE_14__.NotRestoredReasonDescription[explanation.reason].name(), _class_private_method_get(this, _maybeRenderDeepLinkToUnload, maybeRenderDeepLinkToUnload).call(this, explanation), _class_private_method_get(this, _maybeRenderReasonContext, maybeRenderReasonContext).call(this, explanation)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.nothing, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_9__.ReportView.ReportSection.litTagName, explanation.reason, _class_private_method_get(this, _maybeRenderJavaScriptDetails, maybeRenderJavaScriptDetails).call(this, explanation.details), _class_private_method_get(this, _renderFramesPerReason, renderFramesPerReason).call(this, frames));
// clang-format on
}
customElements.define('devtools-resources-back-forward-cache-view', BackForwardCacheView); //# sourceMappingURL=BackForwardCacheView.js.map


}),
"./panels/application/components/backForwardCacheView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.inline-icon {\n  vertical-align: sub;\n}\n\n.gray-text {\n  color: var(--sys-color-token-subtle);\n  margin: 0 0 5px 56px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex: auto;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\n.details-list {\n  margin-left: 56px;\n  grid-column-start: span 2;\n}\n\n.help-outline-icon {\n  margin: 0 2px;\n}\n\n.circled-exclamation-icon {\n  margin-right: 10px;\n  flex-shrink: 0;\n}\n\n.status {\n  margin-right: 11px;\n  flex-shrink: 0;\n}\n\n.report-line {\n  grid-column-start: span 2;\n  display: flex;\n  align-items: center;\n  margin: 0 30px;\n  line-height: 26px;\n}\n\n.report-key {\n  color: var(--sys-color-token-subtle);\n  min-width: auto;\n  overflow-wrap: break-word;\n  align-self: start;\n}\n\n.report-value {\n  padding: 0 6px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n}\n\n.tree-outline li .selection {\n  margin-left: -5px;\n}\n\n@media (forced-colors: active) {\n  .link,\n  .devtools-link {\n    color: linktext;\n    text-decoration-color: linktext;\n  }\n}\n\n/*# sourceURL=backForwardCacheView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/chrome_link/chrome_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLink: function() { return /* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=chrome_link.js.map


}),

}]);