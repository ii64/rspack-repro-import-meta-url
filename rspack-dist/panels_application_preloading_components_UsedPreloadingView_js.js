"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_UsedPreloadingView_js"], {
"./panels/application/preloading/components/UsedPreloadingView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UsedPreloadingView: function() { return UsedPreloadingView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
/* harmony import */var _usedPreloadingView_css_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usedPreloadingView.css.js */ "./panels/application/preloading/components/usedPreloadingView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        "devtools-resources-used-preloading-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <",
        ">\n        ",
        "\n\n        <",
        "></",
        ">\n\n        ",
        "\n\n        <",
        "></",
        ">\n\n        <",
        ">\n          ",
        "\n        </",
        ">\n      </",
        ">\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n      "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        '>\n        <div>\n          <div class="status-badge-container">\n            ',
        "\n          </div>\n          <div>\n            ",
        "\n          </div>\n        </div>\n      </",
        ">\n\n      ",
        "\n\n      ",
        "\n      ",
        "\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        ",
        "\n      </",
        ">\n\n      <",
        ">",
        "</",
        ">\n      <",
        "\n      jslog=",
        ">\n        <",
        "\n          .data=",
        "></",
        ">\n      </",
        ">\n    "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n      <",
        ">",
        "</",
        ">\n      <",
        ">\n        <",
        "\n          .data=",
        "></",
        ">\n      </",
        ">\n    "
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
        '>\n        <div>\n          <div class="status-badge-container">\n            ',
        '\n          </div>\n\n          <div class="reveal-links">\n            <button class="link devtools-link" @click=',
        "\n            jslog=",
        ">\n              ",
        '\n            </button>\n           ・\n            <button class="link devtools-link" @click=',
        "\n            jslog=",
        ">\n             ",
        "\n            </button>\n          </div>\n        </div>\n      </",
        ">\n    "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "\n      <span class=",
        ">\n        <",
        " name=",
        "></",
        ">\n        <span>\n          ",
        "\n        </span>\n      </span>\n    "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
















var UIStrings = {
    /**
     *@description Header for preloading status.
     */ speculativeLoadingStatusForThisPage: 'Speculative loading status for this page',
    /**
     *@description Label for failure reason of preloeading
     */ detailsFailureReason: 'Failure reason',
    /**
     *@description Message that tells this page was prerendered.
     */ downgradedPrefetchUsed: 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.',
    /**
     *@description Message that tells this page was prefetched.
     */ prefetchUsed: 'This page was successfully prefetched.',
    /**
     *@description Message that tells this page was prerendered.
     */ prerenderUsed: 'This page was successfully prerendered.',
    /**
     *@description Message that tells this page was prefetched.
     */ prefetchFailed: 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was prerendered.
     */ prerenderFailed: 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.',
    /**
     *@description Message that tells this page was not preloaded.
     */ noPreloads: 'The initiating page did not attempt to speculatively load this page\'s URL.',
    /**
     *@description Header for current URL.
     */ currentURL: 'Current URL',
    /**
     *@description Header for mismatched preloads.
     */ preloadedURLs: 'URLs being speculatively loaded by the initiating page',
    /**
     *@description Header for summary.
     */ speculationsInitiatedByThisPage: 'Speculations initiated by this page',
    /**
     *@description Link text to reveal rules.
     */ viewAllRules: 'View all speculation rules',
    /**
     *@description Link text to reveal preloads.
     */ viewAllSpeculations: 'View all speculations',
    /**
     *@description Link to learn more about Preloading
     */ learnMore: 'Learn more: Speculative loading on developer.chrome.com',
    /**
     *@description Header for the table of mismatched network request header.
     */ mismatchedHeadersDetail: 'Mismatched HTTP request headers',
    /**
     *@description Label for badge, indicating speculative load successfully used for this page.
     */ badgeSuccess: 'Success',
    /**
     *@description Label for badge, indicating speculative load failed for this page.
     */ badgeFailure: 'Failure',
    /**
     *@description Label for badge, indicating no speculative loads used for this page.
     */ badgeNoSpeculativeLoads: 'No speculative loads',
    /**
     *@description Label for badge, indicating how many not triggered speculations there are.
     */ badgeNotTriggeredWithCount: '{n, plural, =1 {# not triggered} other {# not triggered}}',
    /**
     *@description Label for badge, indicating how many in progress speculations there are.
     */ badgeInProgressWithCount: '{n, plural, =1 {# in progress} other {# in progress}}',
    /**
     *@description Label for badge, indicating how many succeeded speculations there are.
     */ badgeSuccessWithCount: '{n, plural, =1 {# success} other {# success}}',
    /**
     *@description Label for badge, indicating how many failed speculations there are.
     */ badgeFailureWithCount: '{n, plural, =1 {# failure} other {# failures}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/UsedPreloadingView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderInternal = /*#__PURE__*/ new WeakSet(), _speculativeLoadingStatusForThisPageSections = /*#__PURE__*/ new WeakSet(), _maybeMismatchedSections = /*#__PURE__*/ new WeakSet(), _maybeMismatchedHTTPHeadersSections = /*#__PURE__*/ new WeakSet(), _speculationsInitiatedByThisPageSummarySections = /*#__PURE__*/ new WeakSet(), _badgeSuccess = /*#__PURE__*/ new WeakSet(), _badgeFailure = /*#__PURE__*/ new WeakSet(), _badgeNeutral = /*#__PURE__*/ new WeakSet(), _badge = /*#__PURE__*/ new WeakSet();
// TODO(kenoss): Rename this class and file once https://crrev.com/c/4933567 landed.
// This also shows summary of speculations initiated by this page.
var UsedPreloadingView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(UsedPreloadingView, _superClass);
    var _super = _create_super(UsedPreloadingView);
    function UsedPreloadingView() {
        _class_call_check(this, UsedPreloadingView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderInternal);
        _class_private_method_init(_assert_this_initialized(_this), _speculativeLoadingStatusForThisPageSections);
        _class_private_method_init(_assert_this_initialized(_this), _maybeMismatchedSections);
        _class_private_method_init(_assert_this_initialized(_this), _maybeMismatchedHTTPHeadersSections);
        _class_private_method_init(_assert_this_initialized(_this), _speculationsInitiatedByThisPageSummarySections);
        _class_private_method_init(_assert_this_initialized(_this), _badgeSuccess);
        _class_private_method_init(_assert_this_initialized(_this), _badgeFailure);
        _class_private_method_init(_assert_this_initialized(_this), _badgeNeutral);
        _class_private_method_init(_assert_this_initialized(_this), _badge);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: {
                pageURL: '',
                previousAttempts: [],
                currentAttempts: []
            }
        });
        return _this;
    }
    _create_class(UsedPreloadingView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _usedPreloadingView_css_js__WEBPACK_IMPORTED_MODULE_15__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _data, data);
                void _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return UsedPreloadingView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent);
_define_property(UsedPreloadingView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.literal(_templateObject()));
function render() {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function() {
        var _this;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    return [
                        4,
                        coordinator.write('UsedPreloadingView render', function() {
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_class_private_method_get(_this, _renderInternal, renderInternal).call(_this), _class_private_field_get(_this, _shadow), {
                                host: _this
                            });
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _render1.apply(this, arguments);
}
function renderInternal() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject1(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report.litTagName, _class_private_method_get(this, _speculativeLoadingStatusForThisPageSections, speculativeLoadingStatusForThisPageSections).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName, _class_private_method_get(this, _speculationsInitiatedByThisPageSummarySections, speculationsInitiatedByThisPageSummarySections).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/blog/prerender-pages/', i18nString(UIStrings.learnMore), 'link', undefined, 'learn-more'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report.litTagName);
// clang-format on
}
function speculativeLoadingStatusForThisPageSections() {
    var pageURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(_class_private_field_get(this, _data).pageURL);
    var forThisPage = _class_private_field_get(this, _data).previousAttempts.filter(function(attempt) {
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlWithoutHash(attempt.key.url) === pageURL;
    });
    var prefetch = forThisPage.filter(function(attempt) {
        return attempt.key.action === "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ;
    })[0];
    var prerender = forThisPage.filter(function(attempt) {
        return attempt.key.action === "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ;
    })[0];
    var kind = "NoPreloads" /* UsedKind.NoPreloads */ ;
    // Prerender -> prefetch downgrade case
    //
    // This code does not handle the case SpecRules designate these preloads rather than prerenderer automatically downgrade prerendering.
    // TODO(https://crbug.com/1410709): Improve this logic once automatic downgrade implemented.
    if ((prerender === null || prerender === void 0 ? void 0 : prerender.status) === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */  && (prefetch === null || prefetch === void 0 ? void 0 : prefetch.status) === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ) {
        kind = "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */ ;
    } else if ((prefetch === null || prefetch === void 0 ? void 0 : prefetch.status) === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ) {
        kind = "PrefetchUsed" /* UsedKind.PrefetchUsed */ ;
    } else if ((prerender === null || prerender === void 0 ? void 0 : prerender.status) === "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ) {
        kind = "PrerenderUsed" /* UsedKind.PrerenderUsed */ ;
    } else if ((prefetch === null || prefetch === void 0 ? void 0 : prefetch.status) === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ) {
        kind = "PrefetchFailed" /* UsedKind.PrefetchFailed */ ;
    } else if ((prerender === null || prerender === void 0 ? void 0 : prerender.status) === "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ) {
        kind = "PrerenderFailed" /* UsedKind.PrerenderFailed */ ;
    } else {
        kind = "NoPreloads" /* UsedKind.NoPreloads */ ;
    }
    var badge;
    var basicMessage;
    switch(kind){
        case "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */ :
            badge = _class_private_method_get(this, _badgeSuccess, badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject2(), i18nString(UIStrings.downgradedPrefetchUsed));
            break;
        case "PrefetchUsed" /* UsedKind.PrefetchUsed */ :
            badge = _class_private_method_get(this, _badgeSuccess, badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject3(), i18nString(UIStrings.prefetchUsed));
            break;
        case "PrerenderUsed" /* UsedKind.PrerenderUsed */ :
            badge = _class_private_method_get(this, _badgeSuccess, badgeSuccess).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject4(), i18nString(UIStrings.prerenderUsed));
            break;
        case "PrefetchFailed" /* UsedKind.PrefetchFailed */ :
            badge = _class_private_method_get(this, _badgeFailure, badgeFailure).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject5(), i18nString(UIStrings.prefetchFailed));
            break;
        case "PrerenderFailed" /* UsedKind.PrerenderFailed */ :
            badge = _class_private_method_get(this, _badgeFailure, badgeFailure).call(this);
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject6(), i18nString(UIStrings.prerenderFailed));
            break;
        case "NoPreloads" /* UsedKind.NoPreloads */ :
            badge = _class_private_method_get(this, _badgeNeutral, badgeNeutral).call(this, i18nString(UIStrings.badgeNoSpeculativeLoads));
            basicMessage = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject7(), i18nString(UIStrings.noPreloads));
            break;
    }
    var maybeFailureReasonMessage;
    if (kind === "PrefetchFailed" /* UsedKind.PrefetchFailed */ ) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prefetch);
        maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__.prefetchFailureReason)(prefetch);
    } else if (kind === "PrerenderFailed" /* UsedKind.PrerenderFailed */  || kind === "DowngradedPrerenderToPrefetchAndUsed" /* UsedKind.DowngradedPrerenderToPrefetchAndUsed */ ) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(prerender);
        maybeFailureReasonMessage = (0,_PreloadingString_js__WEBPACK_IMPORTED_MODULE_14__.prerenderFailureReason)(prerender);
    }
    var maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    if (maybeFailureReasonMessage !== undefined) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        maybeFailureReason = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject8(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.detailsFailureReason), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, maybeFailureReasonMessage, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName);
    // clang-format on
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject9(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.speculativeLoadingStatusForThisPage), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, badge, basicMessage, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, maybeFailureReason, _class_private_method_get(this, _maybeMismatchedSections, maybeMismatchedSections).call(this, kind), _class_private_method_get(this, _maybeMismatchedHTTPHeadersSections, maybeMismatchedHTTPHeadersSections).call(this));
// clang-format on
}
function maybeMismatchedSections(kind) {
    if (kind !== "NoPreloads" /* UsedKind.NoPreloads */  || _class_private_field_get(this, _data).previousAttempts.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    var rows = _class_private_field_get(this, _data).previousAttempts.map(function(attempt) {
        return {
            url: attempt.key.url,
            action: attempt.key.action,
            status: attempt.status
        };
    });
    var data = {
        pageURL: _class_private_field_get(this, _data).pageURL,
        rows: rows
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject10(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.currentURL), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create(_class_private_field_get(this, _data).pageURL, undefined, 'link', undefined, 'current-url'), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.preloadedURLs), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.section('preloaded-urls'), _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__.MismatchedPreloadingGrid.litTagName, data, _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_12__.MismatchedPreloadingGrid.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName);
// clang-format on
}
function maybeMismatchedHTTPHeadersSections() {
    var attempt = _class_private_field_get(this, _data).previousAttempts.find(function(attempt) {
        return attempt.action === "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */  && attempt.mismatchedHeaders !== null;
    });
    if (attempt === undefined) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    if (attempt.key.url !== _class_private_field_get(this, _data).pageURL) {
        // This place should never be reached since mismatched headers is reported only if the activation is attempted.
        // TODO(crbug.com/1456673): remove this check once DevTools support embedder-triggered prerender or prerender
        // supports non-vary-search.
        throw new Error('unreachable');
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject11(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.mismatchedHeadersDetail), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingMismatchedHeadersGrid.litTagName, attempt, _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_13__.PreloadingMismatchedHeadersGrid.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName);
// clang-format on
}
function speculationsInitiatedByThisPageSummarySections() {
    var count = _class_private_field_get(this, _data).currentAttempts.reduce(function(acc, attempt) {
        var _acc_get;
        acc.set(attempt.status, ((_acc_get = acc.get(attempt.status)) !== null && _acc_get !== void 0 ? _acc_get : 0) + 1);
        return acc;
    }, new Map());
    var _count_get;
    var notTriggeredCount = (_count_get = count.get("NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ )) !== null && _count_get !== void 0 ? _count_get : 0;
    var _count_get1;
    var readyCount = (_count_get1 = count.get("Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ )) !== null && _count_get1 !== void 0 ? _count_get1 : 0;
    var _count_get2;
    var failureCount = (_count_get2 = count.get("Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ )) !== null && _count_get2 !== void 0 ? _count_get2 : 0;
    var _count_get3, _count_get4;
    var inProgressCount = ((_count_get3 = count.get("Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ )) !== null && _count_get3 !== void 0 ? _count_get3 : 0) + ((_count_get4 = count.get("Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ )) !== null && _count_get4 !== void 0 ? _count_get4 : 0);
    var badges = [];
    if (_class_private_field_get(this, _data).currentAttempts.length === 0) {
        badges.push(_class_private_method_get(this, _badgeNeutral, badgeNeutral).call(this, i18nString(UIStrings.badgeNoSpeculativeLoads)));
    }
    if (notTriggeredCount > 0) {
        badges.push(_class_private_method_get(this, _badgeNeutral, badgeNeutral).call(this, i18nString(UIStrings.badgeNotTriggeredWithCount, {
            n: notTriggeredCount
        })));
    }
    if (inProgressCount > 0) {
        badges.push(_class_private_method_get(this, _badgeNeutral, badgeNeutral).call(this, i18nString(UIStrings.badgeInProgressWithCount, {
            n: inProgressCount
        })));
    }
    if (readyCount > 0) {
        badges.push(_class_private_method_get(this, _badgeSuccess, badgeSuccess).call(this, readyCount));
    }
    if (failureCount > 0) {
        badges.push(_class_private_method_get(this, _badgeFailure, badgeFailure).call(this, failureCount));
    }
    var revealRuleSetView = function() {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__.PreloadingForward.RuleSetView(null));
    };
    var revealAttemptViewWithFilter = function() {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__.PreloadingForward.AttemptViewWithFilter(null));
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject12(), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, i18nString(UIStrings.speculationsInitiatedByThisPage), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSectionHeader.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName, badges, revealRuleSetView, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('view-all-rules').track({
        click: true
    }), i18nString(UIStrings.viewAllRules), revealAttemptViewWithFilter, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('view-all-speculations').track({
        click: true
    }), i18nString(UIStrings.viewAllSpeculations), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.ReportSection.litTagName);
// clang-format on
}
function badgeSuccess(count) {
    var message;
    if (count === undefined) {
        message = i18nString(UIStrings.badgeSuccess);
    } else {
        message = i18nString(UIStrings.badgeSuccessWithCount, {
            n: count
        });
    }
    return _class_private_method_get(this, _badge, badge).call(this, 'status-badge status-badge-success', 'check-circle', message);
}
function badgeFailure(count) {
    var message;
    if (count === undefined) {
        message = i18nString(UIStrings.badgeFailure);
    } else {
        message = i18nString(UIStrings.badgeFailureWithCount, {
            n: count
        });
    }
    return _class_private_method_get(this, _badge, badge).call(this, 'status-badge status-badge-failure', 'cross-circle', message);
}
function badgeNeutral(message) {
    return _class_private_method_get(this, _badge, badge).call(this, 'status-badge status-badge-neutral', 'clear', message);
}
function badge(klass, iconName, message) {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject13(), klass, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, iconName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, message);
// clang-format on
}
customElements.define('devtools-resources-used-preloading-view', UsedPreloadingView); //# sourceMappingURL=UsedPreloadingView.js.map


}),
"./panels/application/preloading/components/usedPreloadingView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: auto;\n  height: 100%;\n}\n\nbutton {\n  font-size: inherit;\n}\n\ndevtools-report {\n  padding: 1em 0;\n}\n\ndevtools-report-section-header {\n  padding-bottom: 0;\n  margin-bottom: -1.5em;\n}\n\ndevtools-report-section {\n  min-width: fit-content;\n}\n\ndevtools-report-divider {\n  margin: 1em 0;\n}\n\n.reveal-links {\n  white-space: nowrap;\n}\n\n.link {\n  border: none;\n  background: none;\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n  padding: 0;\n}\n\n.status-badge-container {\n  white-space: nowrap;\n  margin: 8px 0 24px;\n}\n\n.status-badge-container span {\n  margin-right: 2px;\n}\n\n.status-badge {\n  border-radius: 4px;\n  padding: 4px;\n\n  devtools-icon {\n    width: 16px;\n    height: 16px;\n  }\n}\n\n.status-badge-success {\n  background: var(--sys-color-tertiary-container);\n}\n\n.status-badge-failure {\n  background: var(--sys-color-error-container);\n}\n\n.status-badge-neutral {\n  background: var(--sys-color-neutral-container);\n}\n\n/*# sourceURL=usedPreloadingView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);