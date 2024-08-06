"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_FrameDetailsView_js"], {
"./panels/application/components/FrameDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameDetailsReportView: function() { return FrameDetailsReportView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../third_party/csp_evaluator/csp_evaluator.js */ "./third_party/csp_evaluator/csp_evaluator.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _frameDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./frameDetailsReportView.css.js */ "./panels/application/components/frameDetailsReportView.css.js");
/* harmony import */var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */var _PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./PermissionsPolicySection.js */ "./panels/application/components/PermissionsPolicySection.js");
/* harmony import */var _StackTrace_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
        "\n              <",
        "\n                .data=",
        "\n              >\n              </",
        ">\n            "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        "\n        jslog=",
        ">\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-resources-frame-details-view"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n    <",
        ">",
        "</",
        '>\n    <div class="span-cols">\n        ',
        '\n        <x-link href="https://developer.chrome.com/docs/web-platform/origin-trials/" class="link"\n        jslog=',
        ">",
        "</x-link>\n    </div>\n    ",
        "\n    <",
        "></",
        ">\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <div class="inline-items">\n          ',
        "\n          ",
        '\n          <div class="text-ellipsis" title=',
        ">",
        "</div>\n        </div>\n      </",
        ">\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      <",
        "></",
        ">\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <div class="inline-items">\n          ',
        '\n          <div class="text-ellipsis" title=',
        ">",
        "</div>\n        </div>\n      </",
        ">\n    "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        '>\n          <div class="text-ellipsis" title=',
        ">",
        "</div>\n        </",
        ">\n      "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n          <",
        ">",
        "</",
        ">\n          <",
        ' class="without-min-width">\n            <div class="inline-items">\n              <button class="link text-link" role="link" tabindex=0 title=',
        "\n                @mouseenter=",
        "\n                @mouseleave=",
        "\n                @click=",
        "\n                jslog=",
        "\n              >\n                &lt;",
        "&gt;\n              </button>\n            </div>\n          </",
        ">\n        "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n        <",
        " title=",
        ">",
        "</",
        ">\n        <",
        "\n        jslog=",
        "\n        >\n          <",
        " .data=",
        ">\n          </",
        ">\n        </",
        ">\n      "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<div title=",
        ">",
        "</div>"
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
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ' class="ad-script-link">',
        "</",
        ">\n      "
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        "\n      jslog=",
        ">\n        <",
        " .data=",
        "></",
        "></",
        ">\n      ",
        "\n    "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\xa0",
        "\n      </",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n      ",
        "\n      <",
        "></",
        ">\n    "
    ], [
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\\xA0",
        "\n      </",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n      ",
        "\n      <",
        "></",
        ">\n    "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        '<span class="inline-comment">',
        "</span>"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "\n          ",
        "\n          ",
        "\n          ",
        "\n        "
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        '<span class="inline-comment">report-only</span>'
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        '<span class="inline-name">',
        "</span>",
        ""
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n        ",
        "\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        '<div><span class="bold">',
        "</span>",
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
        "<",
        "\n          .iconName=",
        "\n          class='help-button'\n          .variant=",
        "\n          .size=",
        "\n          @click=",
        "\n          jslog=",
        "\n          ></",
        ">"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "\n      </",
        ">\n      <",
        ">\n        ",
        "\n        ",
        "\n      </",
        ">\n    "
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          ",
        "\n        </",
        ">\n      "
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "\n      <",
        "></",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n      ",
        "\n    "
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        '>\n      <div class="span-cols">\n        ',
        '\n        <x-link href="https://web.dev/why-coop-coep/" class="link" jslog=',
        ">",
        "</x-link>\n      </div>\n      ",
        "\n      ",
        "\n      <",
        "></",
        ">\n    "
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _tagged_template_literal([
        '<span class="inline-comment">',
        "</span>"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _tagged_template_literal([
        '<span class="inline-comment">',
        "</span>"
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = _tagged_template_literal([
        '<span class="inline-comment">',
        " <code>cross-origin-isolated</code></span>"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = _tagged_template_literal([
        "\n          <",
        ">SharedArrayBuffers</",
        ">\n          <",
        " title=",
        ">\n            ",
        "\xa0",
        "\n          </",
        ">\n        "
    ], [
        "\n          <",
        ">SharedArrayBuffers</",
        ">\n          <",
        " title=",
        ">\n            ",
        "\\xA0",
        "\n          </",
        ">\n        "
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = _tagged_template_literal([
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          <span title=",
        ">",
        '</span>\xa0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=',
        ">",
        "</x-link>\n        </",
        ">\n      "
    ], [
        "\n        <",
        ">",
        "</",
        ">\n        <",
        ">\n          <span title=",
        ">",
        '</span>\\xA0<x-link class="link" href="https://web.dev/monitor-total-page-memory-usage/" jslog=',
        ">",
        "</x-link>\n        </",
        ">\n      "
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = _tagged_template_literal([
        "\n      <",
        "\n        title=",
        "\n      >",
        "</",
        ">\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <div class="text-ellipsis" title=',
        ">",
        "</div>\n      </",
        ">\n      <",
        "></",
        ">\n    "
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}





















var UIStrings = {
    /**
     *@description Section header in the Frame Details view
     */ additionalInformation: 'Additional Information',
    /**
     *@description Explanation for why the additional information section is being shown
     */ thisAdditionalDebugging: 'This additional (debugging) information is shown because the \'Protocol Monitor\' experiment is enabled.',
    /**
     *@description Label for subtitle of frame details view
     */ frameId: 'Frame ID',
    /**
     *@description Name of a network resource type
     */ document: 'Document',
    /**
     *@description A web URL (for a lot of languages this does not need to be translated, please translate only where necessary)
     */ url: 'URL',
    /**
    /**
     *@description Title for a link to the Sources panel
     */ clickToRevealInSourcesPanel: 'Click to reveal in Sources panel',
    /**
     *@description Title for a link to the Network panel
     */ clickToRevealInNetworkPanel: 'Click to reveal in Network panel',
    /**
     *@description Title for unreachable URL field
     */ unreachableUrl: 'Unreachable URL',
    /**
     *@description Title for a link that applies a filter to the network panel
     */ clickToRevealInNetworkPanelMight: 'Click to reveal in Network panel (might require page reload)',
    /**
     *@description The origin of a URL (https://web.dev/same-site-same-origin/#origin)
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */ origin: 'Origin',
    /**
    /**
     *@description Related node label in Timeline UIUtils of the Performance panel
     */ ownerElement: 'Owner Element',
    /**
     *@description Title for a link to the Elements panel
     */ clickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description Title for ad frame type field
     */ adStatus: 'Ad Status',
    /**
     *@description Description for ad frame type
     */ rootDescription: 'This frame has been identified as the root frame of an ad',
    /**
     *@description Value for ad frame type
     */ root: 'root',
    /**
     *@description Description for ad frame type
     */ childDescription: 'This frame has been identified as a child frame of an ad',
    /**
     *@description Value for ad frame type
     */ child: 'child',
    /**
     *@description Section header in the Frame Details view
     */ securityIsolation: 'Security & Isolation',
    /**
     *@description Section header in the Frame Details view
     */ contentSecurityPolicy: 'Content Security Policy (CSP)',
    /**
     *@description Row title for in the Frame Details view
     */ secureContext: 'Secure Context',
    /**
     *@description Text in Timeline indicating that input has happened recently
     */ yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */ no: 'No',
    /**
     *@description Label for whether a frame is cross-origin isolated
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages this does not need to be translated, please translate only where necessary)
     */ crossoriginIsolated: 'Cross-Origin Isolated',
    /**
     *@description Explanatory text in the Frame Details view
     */ localhostIsAlwaysASecureContext: '`Localhost` is always a secure context',
    /**
     *@description Explanatory text in the Frame Details view
     */ aFrameAncestorIsAnInsecure: 'A frame ancestor is an insecure context',
    /**
     *@description Explanatory text in the Frame Details view
     */ theFramesSchemeIsInsecure: 'The frame\'s scheme is insecure',
    /**
     *@description This label specifies the server endpoints to which the server is reporting errors
     *and warnings through the Report-to API. Following this label will be the URL of the server.
     */ reportingTo: 'reporting to',
    /**
     *@description Section header in the Frame Details view
     */ apiAvailability: 'API availability',
    /**
     *@description Explanation of why cross-origin isolation is important
     *(https://web.dev/why-coop-coep/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary)
     */ availabilityOfCertainApisDepends: 'Availability of certain APIs depends on the document being cross-origin isolated.',
    /**
     *@description Description of the SharedArrayBuffer status
     */ availableTransferable: 'available, transferable',
    /**
     *@description Description of the SharedArrayBuffer status
     */ availableNotTransferable: 'available, not transferable',
    /**
     *@description Explanation for the SharedArrayBuffer availability status
     */ unavailable: 'unavailable',
    /**
     *@description Tooltip for the SharedArrayBuffer availability status
     */ sharedarraybufferConstructorIs: '`SharedArrayBuffer` constructor is available and `SABs` can be transferred via `postMessage`',
    /**
     *@description Tooltip for the SharedArrayBuffer availability status
     */ sharedarraybufferConstructorIsAvailable: '`SharedArrayBuffer` constructor is available but `SABs` cannot be transferred via `postMessage`',
    /**
     *@description Explanation why SharedArrayBuffer will not be available in the future
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary)
     */ willRequireCrossoriginIsolated: '⚠️ will require cross-origin isolated context in the future',
    /**
     *@description Explanation why SharedArrayBuffer is not available
     *(https://developer.chrome.com/docs/extensions/mv3/cross-origin-isolation/)
     *(for a lot of languages 'cross-origin isolation' does not need to be translated, please translate only where necessary).
     */ requiresCrossoriginIsolated: 'requires cross-origin isolated context',
    /**
     *@description Explanation for the SharedArrayBuffer availability status in case the transfer of a SAB requires the
     * permission policy `cross-origin-isolated` to be enabled (e.g. because the message refers to the situation in an iframe).
     */ transferRequiresCrossoriginIsolatedPermission: '`SharedArrayBuffer` transfer requires enabling the permission policy:',
    /**
     *@description Explanation for the Measure Memory availability status
     */ available: 'available',
    /**
     *@description Tooltip for the Measure Memory availability status
     */ thePerformanceAPI: 'The `performance.measureUserAgentSpecificMemory()` API is available',
    /**
     *@description Tooltip for the Measure Memory availability status
     */ thePerformancemeasureuseragentspecificmemory: 'The `performance.measureUserAgentSpecificMemory()` API is not available',
    /**
     *@description Entry in the API availability section of the frame details view
     */ measureMemory: 'Measure Memory',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Label for a stack trace. If a frame is created programmatically (i.e. via JavaScript), there is a
     * stack trace for the line of code which caused the creation of the iframe. This is the stack trace we are showing here.
     */ creationStackTrace: 'Frame Creation `Stack Trace`',
    /**
     *@description Tooltip for 'Frame Creation Stack Trace' explaining that the stack
     *trace shows where in the code the frame has been created programmatically
     */ creationStackTraceExplanation: 'This frame was created programmatically. The `stack trace` shows where this happened.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */ parentIsAdExplanation: 'This frame is considered an ad frame because its parent frame is an ad frame.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */ matchedBlockingRuleExplanation: 'This frame is considered an ad frame because its current (or previous) main document is an ad resource.',
    /**
     *@description Text descripting why a frame has been indentified as an advertisement.
     */ createdByAdScriptExplanation: 'There was an ad script in the `(async) stack` when this frame was created. Examining the creation `stack trace` of this frame might provide more insight.',
    /**
     *@description Label for a link to an ad script, which created the current iframe.
     */ creatorAdScript: 'Creator Ad Script',
    /**
     *@description Text describing the absence of a value.
     */ none: 'None',
    /**
     *@description Explanation of what origin trials are
     *(https://developer.chrome.com/docs/web-platform/origin-trials/)
     *(please don't translate 'origin trials').
     */ originTrialsExplanation: 'Origin trials give you access to a new or experimental feature.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/components/FrameDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_12__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _frame = /*#__PURE__*/ new WeakMap(), _target = /*#__PURE__*/ new WeakMap(), _protocolMonitorExperimentEnabled = /*#__PURE__*/ new WeakMap(), _permissionsPolicies = /*#__PURE__*/ new WeakMap(), _permissionsPolicySectionData = /*#__PURE__*/ new WeakMap(), _originTrialTreeView = /*#__PURE__*/ new WeakMap(), _linkifier = /*#__PURE__*/ new WeakMap(), _adScriptId = /*#__PURE__*/ new WeakMap(), _renderOriginTrial = /*#__PURE__*/ new WeakSet(), _renderDocumentSection = /*#__PURE__*/ new WeakSet(), _maybeRenderSourcesLinkForURL = /*#__PURE__*/ new WeakSet(), _maybeRenderNetworkLinkForURL = /*#__PURE__*/ new WeakSet(), _uiSourceCodeForFrame = /*#__PURE__*/ new WeakSet(), _maybeRenderUnreachableURL = /*#__PURE__*/ new WeakSet(), _renderNetworkLinkForUnreachableURL = /*#__PURE__*/ new WeakSet(), _maybeRenderOrigin = /*#__PURE__*/ new WeakSet(), _renderOwnerElement = /*#__PURE__*/ new WeakSet(), _maybeRenderCreationStacktrace = /*#__PURE__*/ new WeakSet(), _getAdFrameTypeStrings = /*#__PURE__*/ new WeakSet(), _getAdFrameExplanationString = /*#__PURE__*/ new WeakSet(), _maybeRenderAdStatus = /*#__PURE__*/ new WeakSet(), _renderIsolationSection = /*#__PURE__*/ new WeakSet(), _maybeRenderSecureContextExplanation = /*#__PURE__*/ new WeakSet(), _getSecureContextExplanation = /*#__PURE__*/ new WeakSet(), _maybeRenderCoopCoepCSPStatus = /*#__PURE__*/ new WeakSet(), _maybeRenderCrossOriginStatus = /*#__PURE__*/ new WeakSet(), _renderEffectiveDirectives = /*#__PURE__*/ new WeakSet(), _renderSingleCSP = /*#__PURE__*/ new WeakSet(), _renderCSPSection = /*#__PURE__*/ new WeakSet(), _renderApiAvailabilitySection = /*#__PURE__*/ new WeakSet(), _renderSharedArrayBufferAvailability = /*#__PURE__*/ new WeakSet(), _renderMeasureMemoryAvailability = /*#__PURE__*/ new WeakSet(), _renderAdditionalInfoSection = /*#__PURE__*/ new WeakSet();
var FrameDetailsReportView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(FrameDetailsReportView, _superClass);
    var _super = _create_super(FrameDetailsReportView);
    function FrameDetailsReportView(frame) {
        _class_call_check(this, FrameDetailsReportView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _renderOriginTrial);
        _class_private_method_init(_assert_this_initialized(_this), _renderDocumentSection);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderSourcesLinkForURL);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderNetworkLinkForURL);
        _class_private_method_init(_assert_this_initialized(_this), _uiSourceCodeForFrame);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderUnreachableURL);
        _class_private_method_init(_assert_this_initialized(_this), _renderNetworkLinkForUnreachableURL);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderOrigin);
        _class_private_method_init(_assert_this_initialized(_this), _renderOwnerElement);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderCreationStacktrace);
        _class_private_method_init(_assert_this_initialized(_this), _getAdFrameTypeStrings);
        _class_private_method_init(_assert_this_initialized(_this), _getAdFrameExplanationString);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderAdStatus);
        _class_private_method_init(_assert_this_initialized(_this), _renderIsolationSection);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderSecureContextExplanation);
        _class_private_method_init(_assert_this_initialized(_this), _getSecureContextExplanation);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderCoopCoepCSPStatus);
        _class_private_method_init(_assert_this_initialized(_this), _maybeRenderCrossOriginStatus);
        _class_private_method_init(_assert_this_initialized(_this), _renderEffectiveDirectives);
        _class_private_method_init(_assert_this_initialized(_this), _renderSingleCSP);
        _class_private_method_init(_assert_this_initialized(_this), _renderCSPSection);
        _class_private_method_init(_assert_this_initialized(_this), _renderApiAvailabilitySection);
        _class_private_method_init(_assert_this_initialized(_this), _renderSharedArrayBufferAvailability);
        _class_private_method_init(_assert_this_initialized(_this), _renderMeasureMemoryAvailability);
        _class_private_method_init(_assert_this_initialized(_this), _renderAdditionalInfoSection);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _frame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _target, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolMonitorExperimentEnabled, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _permissionsPolicies, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _permissionsPolicySectionData, {
            writable: true,
            value: {
                policies: [],
                showDetails: false
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _originTrialTreeView, {
            writable: true,
            value: new _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_18__.OriginTrialTreeView()
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkifier, {
            writable: true,
            value: new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.Linkifier.Linkifier()
        });
        _class_private_field_init(_assert_this_initialized(_this), _adScriptId, {
            writable: true,
            value: null
        });
        _class_private_field_set(_assert_this_initialized(_this), _frame, frame);
        void _this.render();
        return _this;
    }
    _create_class(FrameDetailsReportView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this_parentElement;
                (_this_parentElement = this.parentElement) === null || _this_parentElement === void 0 ? void 0 : _this_parentElement.classList.add('overflow-auto');
                _class_private_field_set(this, _protocolMonitorExperimentEnabled, _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('protocol-monitor'));
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _frameDetailsReportView_css_js__WEBPACK_IMPORTED_MODULE_17__["default"]
                ];
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get, _class_private_field_get_parentFrame, _$_class_private_field_get1, _$_class_private_field_get2, _$_class_private_field_get3, _tmp, debuggerModel, _tmp1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _tmp = [
                                    _this,
                                    _adScriptId
                                ];
                                return [
                                    4,
                                    (_$_class_private_field_get1 = _class_private_field_get(_this, _frame)) === null || _$_class_private_field_get1 === void 0 ? void 0 : (_class_private_field_get_parentFrame = _$_class_private_field_get1.parentFrame()) === null || _class_private_field_get_parentFrame === void 0 ? void 0 : _class_private_field_get_parentFrame.getAdScriptId((_$_class_private_field_get = _class_private_field_get(_this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.id)
                                ];
                            case 1:
                                _class_private_field_set.apply(void 0, _tmp.concat([
                                    _state.sent() || null
                                ]));
                                if (!((_$_class_private_field_get2 = _class_private_field_get(_this, _adScriptId)) === null || _$_class_private_field_get2 === void 0 ? void 0 : _$_class_private_field_get2.debuggerId)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel.modelForDebuggerId((_$_class_private_field_get3 = _class_private_field_get(_this, _adScriptId)) === null || _$_class_private_field_get3 === void 0 ? void 0 : _$_class_private_field_get3.debuggerId)
                                ];
                            case 2:
                                _tmp1 = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                _tmp1 = null;
                                _state.label = 4;
                            case 4:
                                debuggerModel = _tmp1;
                                _class_private_field_set(_this, _target, debuggerModel === null || debuggerModel === void 0 ? void 0 : debuggerModel.target());
                                if (!_class_private_field_get(_this, _permissionsPolicies) && _class_private_field_get(_this, _frame)) {
                                    _class_private_field_set(_this, _permissionsPolicies, _class_private_field_get(_this, _frame).getPermissionsPolicyState());
                                }
                                return [
                                    4,
                                    coordinator.write('FrameDetailsView render', function() {
                                        var _$_class_private_field_get;
                                        if (!_class_private_field_get(_this, _frame)) {
                                            return;
                                        }
                                        // Disabled until https://crbug.com/1079231 is fixed.
                                        // clang-format off
                                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject1(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.Report.litTagName, {
                                            reportTitle: _class_private_field_get(_this, _frame).displayName()
                                        }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.pane('frames'), _class_private_method_get(_this, _renderDocumentSection, renderDocumentSection).call(_this), _class_private_method_get(_this, _renderIsolationSection, renderIsolationSection).call(_this), _class_private_method_get(_this, _renderApiAvailabilitySection, renderApiAvailabilitySection).call(_this), _class_private_method_get(_this, _renderOriginTrial, renderOriginTrial).call(_this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until((_$_class_private_field_get = _class_private_field_get(_this, _permissionsPolicies)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.then(function(policies) {
                                            _class_private_field_get(_this, _permissionsPolicySectionData).policies = policies || [];
                                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject(), _PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.PermissionsPolicySection.litTagName, _class_private_field_get(_this, _permissionsPolicySectionData), _PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.PermissionsPolicySection.litTagName);
                                        }), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing), _class_private_field_get(_this, _protocolMonitorExperimentEnabled) ? _class_private_method_get(_this, _renderAdditionalInfoSection, renderAdditionalInfoSection).call(_this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.Report.litTagName), _class_private_field_get(_this, _shadow), {
                                            host: _this
                                        });
                                    // clang-format on
                                    })
                                ];
                            case 5:
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
    return FrameDetailsReportView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_11__.LegacyWrapper.WrappableComponent);
_define_property(FrameDetailsReportView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.literal(_templateObject2()));
function renderOriginTrial() {
    var _this = this;
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    _class_private_field_get(this, _originTrialTreeView).classList.add('span-cols');
    void _class_private_field_get(this, _frame).getOriginTrials().then(function(trials) {
        _class_private_field_get(_this, _originTrialTreeView).data = {
            trials: trials
        };
    });
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject3(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Origin trials'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.originTrialsExplanation), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.origin-trials').track({
        click: true
    }), i18nString(UIStrings.learnMore), _class_private_field_get(this, _originTrialTreeView), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName);
// clang-format on
}
function renderDocumentSection() {
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject4(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.document), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.url), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_method_get(this, _maybeRenderSourcesLinkForURL, maybeRenderSourcesLinkForURL).call(this), _class_private_method_get(this, _maybeRenderNetworkLinkForURL, maybeRenderNetworkLinkForURL).call(this), _class_private_field_get(this, _frame).url, _class_private_field_get(this, _frame).url, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_method_get(this, _maybeRenderUnreachableURL, maybeRenderUnreachableURL).call(this), _class_private_method_get(this, _maybeRenderOrigin, maybeRenderOrigin).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until(_class_private_method_get(this, _renderOwnerElement, renderOwnerElement).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing), _class_private_method_get(this, _maybeRenderCreationStacktrace, maybeRenderCreationStacktrace).call(this), _class_private_method_get(this, _maybeRenderAdStatus, maybeRenderAdStatus).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName);
}
function maybeRenderSourcesLinkForURL() {
    if (!_class_private_field_get(this, _frame) || _class_private_field_get(this, _frame).unreachableUrl()) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    var sourceCode = _class_private_method_get(this, _uiSourceCodeForFrame, uiSourceCodeForFrame).call(this, _class_private_field_get(this, _frame));
    return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('breakpoint-circle', i18nString(UIStrings.clickToRevealInSourcesPanel), function() {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(sourceCode);
    }, 'reveal-in-sources');
}
function maybeRenderNetworkLinkForURL() {
    if (_class_private_field_get(this, _frame)) {
        var resource = _class_private_field_get(this, _frame).resourceForURL(_class_private_field_get(this, _frame).url);
        if (resource && resource.request) {
            var request = resource.request;
            return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanel), function() {
                var requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIRequestLocation.UIRequestLocation.tab(request, "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ );
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
            }, 'reveal-in-network');
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function uiSourceCodeForFrame(frame) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance().projects()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var project = _step.value;
            var projectTarget = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.getTargetForProject(project);
            if (projectTarget && projectTarget === frame.resourceTreeModel().target()) {
                var uiSourceCode = project.uiSourceCodeForURL(frame.url);
                if (uiSourceCode) {
                    return uiSourceCode;
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
    return null;
}
function maybeRenderUnreachableURL() {
    if (!_class_private_field_get(this, _frame) || !_class_private_field_get(this, _frame).unreachableUrl()) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject5(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.unreachableUrl), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_method_get(this, _renderNetworkLinkForUnreachableURL, renderNetworkLinkForUnreachableURL).call(this), _class_private_field_get(this, _frame).unreachableUrl(), _class_private_field_get(this, _frame).unreachableUrl(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
}
function renderNetworkLinkForUnreachableURL() {
    if (_class_private_field_get(this, _frame)) {
        var unreachableUrl = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(_class_private_field_get(this, _frame).unreachableUrl());
        if (unreachableUrl) {
            return (0,_PermissionsPolicySection_js__WEBPACK_IMPORTED_MODULE_19__.renderIconLink)('arrow-up-down-circle', i18nString(UIStrings.clickToRevealInNetworkPanelMight), function() {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.UIRequestFilter.filters([
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.FilterType.Domain,
                        filterValue: unreachableUrl.domain()
                    },
                    {
                        filterType: null,
                        filterValue: unreachableUrl.path
                    }
                ]));
            }, 'unreachable-url.reveal-in-network');
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function maybeRenderOrigin() {
    if (_class_private_field_get(this, _frame) && _class_private_field_get(this, _frame).securityOrigin && _class_private_field_get(this, _frame).securityOrigin !== '://') {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject6(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.origin), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_field_get(this, _frame).securityOrigin, _class_private_field_get(this, _frame).securityOrigin, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function renderOwnerElement() {
    return _renderOwnerElement1.apply(this, arguments);
}
function _renderOwnerElement1() {
    _renderOwnerElement1 = _async_to_generator(function() {
        var _this, linkTargetDOMNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    if (!_class_private_field_get(this, _frame)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _frame).getOwnerDOMNodeOrDocument()
                    ];
                case 1:
                    linkTargetDOMNode = _state.sent();
                    if (linkTargetDOMNode) {
                        // Disabled until https://crbug.com/1079231 is fixed.
                        // clang-format off
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject7(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.ownerElement), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, i18nString(UIStrings.clickToRevealInElementsPanel), function() {
                                var _$_class_private_field_get;
                                return (_$_class_private_field_get = _class_private_field_get(_this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.highlight();
                            }, function() {
                                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                            }, function() {
                                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode);
                            }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.action('reveal-in-elements').track({
                                click: true
                            }), linkTargetDOMNode.nodeName().toLocaleLowerCase(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName)
                        ];
                    // clang-format on
                    }
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing
                    ];
            }
        });
    });
    return _renderOwnerElement1.apply(this, arguments);
}
function maybeRenderCreationStacktrace() {
    var _$_class_private_field_get;
    var creationStackTraceData = (_$_class_private_field_get = _class_private_field_get(this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.getCreationStackTraceData();
    if (creationStackTraceData && creationStackTraceData.creationStackTrace) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.creationStackTraceExplanation), i18nString(UIStrings.creationStackTrace), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('frame-creation-stack-trace'), _StackTrace_js__WEBPACK_IMPORTED_MODULE_20__.StackTrace.litTagName, {
            frame: _class_private_field_get(this, _frame),
            buildStackTraceRows: _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.JSPresentationUtils.buildStackTraceRows
        }, _StackTrace_js__WEBPACK_IMPORTED_MODULE_20__.StackTrace.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
    // clang-format on
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function getAdFrameTypeStrings(type) {
    switch(type){
        case "child" /* Protocol.Page.AdFrameType.Child */ :
            return {
                value: i18nString(UIStrings.child),
                description: i18nString(UIStrings.childDescription)
            };
        case "root" /* Protocol.Page.AdFrameType.Root */ :
            return {
                value: i18nString(UIStrings.root),
                description: i18nString(UIStrings.rootDescription)
            };
    }
}
function getAdFrameExplanationString(explanation) {
    switch(explanation){
        case "CreatedByAdScript" /* Protocol.Page.AdFrameExplanation.CreatedByAdScript */ :
            return i18nString(UIStrings.createdByAdScriptExplanation);
        case "MatchedBlockingRule" /* Protocol.Page.AdFrameExplanation.MatchedBlockingRule */ :
            return i18nString(UIStrings.matchedBlockingRuleExplanation);
        case "ParentIsAd" /* Protocol.Page.AdFrameExplanation.ParentIsAd */ :
            return i18nString(UIStrings.parentIsAdExplanation);
    }
}
function maybeRenderAdStatus() {
    var _class_private_field_get_adFrameStatus, _$_class_private_field_get;
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    var adFrameType = _class_private_field_get(this, _frame).adFrameType();
    if (adFrameType === "none" /* Protocol.Page.AdFrameType.None */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    var typeStrings = _class_private_method_get(this, _getAdFrameTypeStrings, getAdFrameTypeStrings).call(this, adFrameType);
    var rows = [
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject9(), typeStrings.description, typeStrings.value)
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = (((_class_private_field_get_adFrameStatus = _class_private_field_get(this, _frame).adFrameStatus()) === null || _class_private_field_get_adFrameStatus === void 0 ? void 0 : _class_private_field_get_adFrameStatus.explanations) || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var explanation = _step.value;
            rows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject10(), _class_private_method_get(this, _getAdFrameExplanationString, getAdFrameExplanationString).call(this, explanation)));
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
    var adScriptLinkElement = _class_private_field_get(this, _target) ? _class_private_field_get(this, _linkifier).linkifyScriptLocation(_class_private_field_get(this, _target), ((_$_class_private_field_get = _class_private_field_get(this, _adScriptId)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.scriptId) || null, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DevToolsPath.EmptyUrlString, undefined, undefined) : null;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject12(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.adStatus), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.section('ad-status'), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__.ExpandableList.ExpandableList.litTagName, {
        rows: rows,
        title: i18nString(UIStrings.adStatus)
    }, _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_10__.ExpandableList.ExpandableList.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_field_get(this, _target) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject11(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.creatorAdScript), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, adScriptLinkElement === null || adScriptLinkElement === void 0 ? void 0 : adScriptLinkElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('ad-script').track({
        click: true
    }))), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing);
// clang-format on
}
function renderIsolationSection() {
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject13(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.securityIsolation), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.secureContext), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_field_get(this, _frame).isSecureContext() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no), _class_private_method_get(this, _maybeRenderSecureContextExplanation, maybeRenderSecureContextExplanation).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.crossoriginIsolated), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_field_get(this, _frame).isCrossOriginIsolated() ? i18nString(UIStrings.yes) : i18nString(UIStrings.no), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.Directives.until(_class_private_method_get(this, _maybeRenderCoopCoepCSPStatus, maybeRenderCoopCoepCSPStatus).call(this), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName);
}
function maybeRenderSecureContextExplanation() {
    var explanation = _class_private_method_get(this, _getSecureContextExplanation, getSecureContextExplanation).call(this);
    if (explanation) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject14(), explanation);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function getSecureContextExplanation() {
    var _$_class_private_field_get;
    switch((_$_class_private_field_get = _class_private_field_get(this, _frame)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.getSecureContextType()){
        case "Secure" /* Protocol.Page.SecureContextType.Secure */ :
            return null;
        case "SecureLocalhost" /* Protocol.Page.SecureContextType.SecureLocalhost */ :
            return i18nString(UIStrings.localhostIsAlwaysASecureContext);
        case "InsecureAncestor" /* Protocol.Page.SecureContextType.InsecureAncestor */ :
            return i18nString(UIStrings.aFrameAncestorIsAnInsecure);
        case "InsecureScheme" /* Protocol.Page.SecureContextType.InsecureScheme */ :
            return i18nString(UIStrings.theFramesSchemeIsInsecure);
    }
    return null;
}
function maybeRenderCoopCoepCSPStatus() {
    return _maybeRenderCoopCoepCSPStatus1.apply(this, arguments);
}
function _maybeRenderCoopCoepCSPStatus1() {
    _maybeRenderCoopCoepCSPStatus1 = _async_to_generator(function() {
        var model, info, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!_class_private_field_get(this, _frame)) return [
                        3,
                        3
                    ];
                    model = _class_private_field_get(this, _frame).resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager);
                    _tmp = model;
                    if (!_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        model.getSecurityIsolationStatus(_class_private_field_get(this, _frame).id)
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    info = _tmp;
                    if (info) {
                        return [
                            2,
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject15(), _class_private_method_get(this, _maybeRenderCrossOriginStatus, maybeRenderCrossOriginStatus).call(this, info.coep, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Embedder Policy (COEP)'), "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */ ), _class_private_method_get(this, _maybeRenderCrossOriginStatus, maybeRenderCrossOriginStatus).call(this, info.coop, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Cross-Origin Opener Policy (COOP)'), "UnsafeNone" /* Protocol.Network.CrossOriginOpenerPolicyValue.UnsafeNone */ ), _class_private_method_get(this, _renderCSPSection, renderCSPSection).call(this, info.csp))
                        ];
                    }
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing
                    ];
            }
        });
    });
    return _maybeRenderCoopCoepCSPStatus1.apply(this, arguments);
}
function maybeRenderCrossOriginStatus(info, policyName, noneValue) {
    if (!info) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    var isEnabled = info.value !== noneValue;
    var isReportOnly = !isEnabled && info.reportOnlyValue !== noneValue;
    var endpoint = isEnabled ? info.reportingEndpoint : info.reportOnlyReportingEndpoint;
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject18(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, policyName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, isEnabled ? info.value : info.reportOnlyValue, isReportOnly ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject16()) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing, endpoint ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject17(), i18nString(UIStrings.reportingTo), endpoint) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
}
function renderEffectiveDirectives(directives) {
    var parsedDirectives = new _third_party_csp_evaluator_csp_evaluator_js__WEBPACK_IMPORTED_MODULE_8__.CspParser.CspParser(directives).csp.directives;
    var result = [];
    for(var directive in parsedDirectives){
        var _parsedDirectives_directive;
        result.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject19(), directive, ': ' + ((_parsedDirectives_directive = parsedDirectives[directive]) === null || _parsedDirectives_directive === void 0 ? void 0 : _parsedDirectives_directive.join(', '))));
    }
    return result;
}
function renderSingleCSP(cspInfo) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject21(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, cspInfo.isEnforced ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy') : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject20(), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy-Report-Only'), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName, 'help', "icon" /* Buttons.Button.Variant.ICON */ , "SMALL" /* Buttons.Button.Size.SMALL */ , function() {
        window.location.href = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only';
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.csp-report-only').track({
        click: true
    }), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_9__.Button.Button.litTagName), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, cspInfo.source === "HTTP" /* Protocol.Network.ContentSecurityPolicySource.HTTP */  ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('HTTP header') : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Meta tag'), _class_private_method_get(this, _renderEffectiveDirectives, renderEffectiveDirectives).call(this, cspInfo.effectiveDirectives), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
// clang-format on
}
function renderCSPSection(cspInfos) {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject23(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.contentSecurityPolicy), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, cspInfos && cspInfos.length ? cspInfos.map(function(cspInfo) {
        return _class_private_method_get(_this, _renderSingleCSP, renderSingleCSP).call(_this, cspInfo);
    }) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject22(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Content-Security-Policy'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, i18nString(UIStrings.none), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName));
// clang-format on
}
function renderApiAvailabilitySection() {
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject24(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.apiAvailability), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.availabilityOfCertainApisDepends), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.coop-coep').track({
        click: true
    }), i18nString(UIStrings.learnMore), _class_private_method_get(this, _renderSharedArrayBufferAvailability, renderSharedArrayBufferAvailability).call(this), _class_private_method_get(this, _renderMeasureMemoryAvailability, renderMeasureMemoryAvailability).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName);
}
function renderSharedArrayBufferAvailability() {
    if (_class_private_field_get(this, _frame)) {
        var features = _class_private_field_get(this, _frame).getGatedAPIFeatures();
        if (features) {
            var renderHint = function renderHint(frame) {
                switch(frame.getCrossOriginIsolatedContextType()){
                    case "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ :
                        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
                    case "NotIsolated" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolated */ :
                        if (sabAvailable) {
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject25(), i18nString(UIStrings.willRequireCrossoriginIsolated));
                        }
                        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject26(), i18nString(UIStrings.requiresCrossoriginIsolated));
                    case "NotIsolatedFeatureDisabled" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolatedFeatureDisabled */ :
                        if (!sabTransferAvailable) {
                            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject27(), i18nString(UIStrings.transferRequiresCrossoriginIsolatedPermission));
                        }
                        break;
                }
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
            };
            var sabAvailable = features.includes("SharedArrayBuffers" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffers */ );
            var sabTransferAvailable = sabAvailable && features.includes("SharedArrayBuffersTransferAllowed" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffersTransferAllowed */ );
            var availabilityText = sabTransferAvailable ? i18nString(UIStrings.availableTransferable) : sabAvailable ? i18nString(UIStrings.availableNotTransferable) : i18nString(UIStrings.unavailable);
            var tooltipText = sabTransferAvailable ? i18nString(UIStrings.sharedarraybufferConstructorIs) : sabAvailable ? i18nString(UIStrings.sharedarraybufferConstructorIsAvailable) : '';
            // SharedArrayBuffer is an API name, so we don't translate it.
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject28(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, tooltipText, availabilityText, renderHint(_class_private_field_get(this, _frame)), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
        }
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function renderMeasureMemoryAvailability() {
    if (_class_private_field_get(this, _frame)) {
        var measureMemoryAvailable = _class_private_field_get(this, _frame).isCrossOriginIsolated();
        var availabilityText = measureMemoryAvailable ? i18nString(UIStrings.available) : i18nString(UIStrings.unavailable);
        var tooltipText = measureMemoryAvailable ? i18nString(UIStrings.thePerformanceAPI) : i18nString(UIStrings.thePerformancemeasureuseragentspecificmemory);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject29(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.measureMemory), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, tooltipText, availabilityText, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_16__.link('learn-more.monitor-memory-usage').track({
            click: true
        }), i18nString(UIStrings.learnMore), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
}
function renderAdditionalInfoSection() {
    if (!_class_private_field_get(this, _frame)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_15__.html(_templateObject30(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.thisAdditionalDebugging), i18nString(UIStrings.additionalInformation), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, i18nString(UIStrings.frameId), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportKey.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _class_private_field_get(this, _frame).id, _class_private_field_get(this, _frame).id, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportValue.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_13__.ReportView.ReportSectionDivider.litTagName);
}
customElements.define('devtools-resources-frame-details-view', FrameDetailsReportView); //# sourceMappingURL=FrameDetailsView.js.map


}),
"./panels/application/components/frameDetailsReportView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nbutton ~ .text-ellipsis {\n  padding-left: 2px;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n  padding: 0;\n}\n\nbutton.link {\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: inherit;\n  height: 16px;\n}\n\nbutton.link:has(devtools-icon) {\n  margin-top: 5px;\n}\n\ndevtools-button.help-button {\n  top: 4px;\n  position: relative;\n}\n\nbutton.text-link {\n  padding-left: 2px;\n  height: 26px;\n}\n\n.inline-button {\n  padding-left: 1ex;\n}\n\n.inline-comment {\n  padding-left: 1ex;\n  white-space: pre-line;\n}\n\n.inline-comment::before {\n  content: "(";\n}\n\n.inline-comment::after {\n  content: ")";\n}\n\n.inline-name {\n  color: var(--sys-color-token-subtle);\n  padding-right: 4px;\n  user-select: none;\n  white-space: pre-line;\n}\n\n.inline-items {\n  display: flex;\n}\n\n.span-cols {\n  grid-column-start: span 2;\n  margin: 0 0 8px 30px;\n  line-height: 28px;\n}\n\n.without-min-width {\n  min-width: auto;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.link:not(button):has(devtools-icon) {\n  vertical-align: baseline;\n  margin-inline-start: 3px;\n}\n\n.inline-icon {\n  margin-bottom: -5px;\n  width: 18px;\n  height: 18px;\n  vertical-align: baseline;\n}\n\n@media (forced-colors: active) {\n  .link,\n  .devtools-link {\n    color: linktext;\n    text-decoration-color: linktext;\n  }\n}\n\n/*# sourceURL=frameDetailsReportView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./third_party/csp_evaluator/csp_evaluator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CspEvaluator: function() { return /* reexport module object */ _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__; },
  CspParser: function() { return /* reexport module object */ _package_parser_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _package_evaluator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/evaluator.js */ "./third_party/csp_evaluator/package/evaluator.js");
/* harmony import */var _package_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/parser.js */ "./third_party/csp_evaluator/package/parser.js");



 //# sourceMappingURL=csp_evaluator.js.map


}),
"./third_party/csp_evaluator/package/parser.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CspParser: function() { return CspParser; },
  TEST_ONLY: function() { return TEST_ONLY; }
});
/* harmony import */var _csp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./csp.js */ "./third_party/csp_evaluator/package/csp.js");
/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author lwe@google.com (Lukas Weichselbaum)
 */ function _class_call_check(instance, Constructor) {
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

/**
 * A class to hold a parser for CSP in string format.
 * @unrestricted
 */ var CspParser = /*#__PURE__*/ function() {
    "use strict";
    function CspParser(unparsedCsp) {
        _class_call_check(this, CspParser);
        _define_property(this, "csp", void 0);
        /**
         * Parsed CSP
         */ this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
        this.parse(unparsedCsp);
    }
    _create_class(CspParser, [
        {
            /**
     * Parses a CSP from a string.
     * @param unparsedCsp CSP as string.
     */ key: "parse",
            value: function parse(unparsedCsp) {
                // Reset the internal state:
                this.csp = new _csp_js__WEBPACK_IMPORTED_MODULE_0__.Csp();
                // Split CSP into directive tokens.
                var directiveTokens = unparsedCsp.split(';');
                for(var i = 0; i < directiveTokens.length; i++){
                    var directiveToken = directiveTokens[i].trim();
                    // Split directive tokens into directive name and directive values.
                    var directiveParts = directiveToken.match(/\S+/g);
                    if (Array.isArray(directiveParts)) {
                        var directiveName = directiveParts[0].toLowerCase();
                        // If the set of directives already contains a directive whose name is a
                        // case insensitive match for directive name, ignore this instance of
                        // the directive and continue to the next token.
                        if (directiveName in this.csp.directives) {
                            continue;
                        }
                        if (!_csp_js__WEBPACK_IMPORTED_MODULE_0__.isDirective(directiveName)) {}
                        var directiveValues = [];
                        for(var directiveValue = void 0, j = 1; directiveValue = directiveParts[j]; j++){
                            directiveValue = normalizeDirectiveValue(directiveValue);
                            if (!directiveValues.includes(directiveValue)) {
                                directiveValues.push(directiveValue);
                            }
                        }
                        this.csp.directives[directiveName] = directiveValues;
                    }
                }
                return this.csp;
            }
        }
    ]);
    return CspParser;
}();
/**
 * Remove whitespaces and turn to lower case if CSP keyword or protocol
 * handler.
 * @param directiveValue directive value.
 * @return normalized directive value.
 */ function normalizeDirectiveValue(directiveValue) {
    directiveValue = directiveValue.trim();
    var directiveValueLower = directiveValue.toLowerCase();
    if (_csp_js__WEBPACK_IMPORTED_MODULE_0__.isKeyword(directiveValueLower) || _csp_js__WEBPACK_IMPORTED_MODULE_0__.isUrlScheme(directiveValue)) {
        return directiveValueLower;
    }
    return directiveValue;
}
var TEST_ONLY = {
    normalizeDirectiveValue: normalizeDirectiveValue
}; //# sourceMappingURL=parser.js.map


}),

}]);