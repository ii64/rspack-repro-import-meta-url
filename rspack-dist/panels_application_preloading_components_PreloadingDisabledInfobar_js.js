"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_PreloadingDisabledInfobar_js"], {
"./panels/application/preloading/components/PreloadingDisabledInfobar.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PreloadingDisabledInfobar: function() { return PreloadingDisabledInfobar; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/components/chrome_link/chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _preloadingDisabledInfobar_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./preloadingDisabledInfobar.css.js */ "./panels/application/preloading/components/preloadingDisabledInfobar.css.js");
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
        "devtools-resources-preloading-disabled-infobar"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <div id='container'>\n        <span id='header'>\n          ",
        "\n        </span>\n\n        <",
        "\n          .data=",
        "\n          jslog=",
        "\n        >\n          ",
        "\n        </",
        ">\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <x-link class="icon-link devtools-link" tabindex="0" href="',
        '"></x-link>\n    '
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n      <div id='contents'>\n        <div id='title'>",
        "</div>\n\n        <",
        ">\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n          ",
        "\n\n          <",
        ">\n          </",
        ">\n        </",
        ">\n\n        <div id='footer'>\n          ",
        "\n          ",
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n      <div class='key'>\n        ",
        "\n      </div>\n      <div class='value'>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}











var UIStrings = {
    /**
     *@description Infobar text for disabled case
     */ infobarPreloadingIsDisabled: 'Speculative loading is disabled',
    /**
     *@description Infobar text for force-enabled case
     */ infobarPreloadingIsForceEnabled: 'Speculative loading is force-enabled',
    /**
     *@description Title for dialog
     */ titleReasonsPreventingPreloading: 'Reasons preventing speculative loading',
    /**
     *@description Header in dialog
     */ headerDisabledByPreference: 'User settings or extensions',
    /**
     *@description Description in dialog
     *@example {Preload pages settings (linked to chrome://settings/performance)} PH1
     *@example {Extensions settings (linked to chrome://extensions)} PH2
     */ descriptionDisabledByPreference: 'Speculative loading is disabled because of user settings or an extension. Go to {PH1} to update your preference. Go to {PH2} to disable any extension that blocks speculative loading.',
    /**
     *@description Text of link
     */ preloadingPagesSettings: 'Preload pages settings',
    /**
     *@description Text of link
     */ extensionsSettings: 'Extensions settings',
    /**
     *@description Header in dialog
     */ headerDisabledByDataSaver: 'Data Saver',
    /**
     *@description Description in dialog
     */ descriptionDisabledByDataSaver: 'Speculative loading is disabled because of the operating system\'s Data Saver mode.',
    /**
     *@description Header in dialog
     */ headerDisabledByBatterySaver: 'Battery Saver',
    /**
     *@description Description in dialog
     */ descriptionDisabledByBatterySaver: 'Speculative loading is disabled because of the operating system\'s Battery Saver mode.',
    /**
     *@description Header in dialog
     */ headerDisabledByHoldbackPrefetchSpeculationRules: 'Prefetch was disabled, but is force-enabled now',
    /**
     *@description Description in infobar
     */ descriptionDisabledByHoldbackPrefetchSpeculationRules: 'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.',
    /**
     *@description Header in dialog
     */ headerDisabledByHoldbackPrerenderSpeculationRules: 'Prerendering was disabled, but is force-enabled now',
    /**
     *@description Description in infobar
     */ descriptionDisabledByHoldbackPrerenderSpeculationRules: 'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.',
    /**
     *@description Footer link for more details
     */ footerLearnMore: 'Learn more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingDisabledInfobar.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderInternal = /*#__PURE__*/ new WeakSet(), _dialogContents = /*#__PURE__*/ new WeakSet(), _maybeKeyValue = /*#__PURE__*/ new WeakSet(), _maybeDisalebByPreference = /*#__PURE__*/ new WeakSet(), _maybeDisalebByDataSaver = /*#__PURE__*/ new WeakSet(), _maybeDisalebByBatterySaver = /*#__PURE__*/ new WeakSet(), _maybeDisalebByHoldbackPrefetchSpeculationRules = /*#__PURE__*/ new WeakSet(), _maybeDisalebByHoldbackPrerenderSpeculationRules = /*#__PURE__*/ new WeakSet();
var PreloadingDisabledInfobar = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(PreloadingDisabledInfobar, _superClass);
    var _super = _create_super(PreloadingDisabledInfobar);
    function PreloadingDisabledInfobar() {
        _class_call_check(this, PreloadingDisabledInfobar);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderInternal);
        _class_private_method_init(_assert_this_initialized(_this), _dialogContents);
        _class_private_method_init(_assert_this_initialized(_this), _maybeKeyValue);
        _class_private_method_init(_assert_this_initialized(_this), _maybeDisalebByPreference);
        _class_private_method_init(_assert_this_initialized(_this), _maybeDisalebByDataSaver);
        _class_private_method_init(_assert_this_initialized(_this), _maybeDisalebByBatterySaver);
        _class_private_method_init(_assert_this_initialized(_this), _maybeDisalebByHoldbackPrefetchSpeculationRules);
        _class_private_method_init(_assert_this_initialized(_this), _maybeDisalebByHoldbackPrerenderSpeculationRules);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: {
                disabledByPreference: false,
                disabledByDataSaver: false,
                disabledByBatterySaver: false,
                disabledByHoldbackPrefetchSpeculationRules: false,
                disabledByHoldbackPrerenderSpeculationRules: false
            }
        });
        return _this;
    }
    _create_class(PreloadingDisabledInfobar, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _preloadingDisabledInfobar_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ];
                void _class_private_method_get(this, _render, render).call(this);
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
    return PreloadingDisabledInfobar;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_4__.LegacyWrapper.WrappableComponent);
_define_property(PreloadingDisabledInfobar, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal(_templateObject()));
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
                        coordinator.write('PreloadingDisabledInfobar render', function() {
                            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_class_private_method_get(_this, _renderInternal, renderInternal).call(_this), _class_private_field_get(_this, _shadow), {
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
    var forceEnabled = _class_private_field_get(this, _data).disabledByHoldbackPrefetchSpeculationRules || _class_private_field_get(this, _data).disabledByHoldbackPrerenderSpeculationRules;
    var disabled = _class_private_field_get(this, _data).disabledByPreference || _class_private_field_get(this, _data).disabledByDataSaver || _class_private_field_get(this, _data).disabledByBatterySaver;
    var header;
    if (disabled) {
        header = i18nString(UIStrings.infobarPreloadingIsDisabled);
    } else if (forceEnabled) {
        header = i18nString(UIStrings.infobarPreloadingIsForceEnabled);
    } else {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject1(), header, _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName, {
        iconData: {
            iconName: 'info',
            color: 'var(--icon-default-hover)',
            width: '16px',
            height: '16px'
        },
        closeButton: true,
        position: "auto" /* Dialogs.Dialog.DialogVerticalPosition.AUTO */ ,
        horizontalAlignment: "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */ ,
        closeOnESC: true,
        closeOnScroll: false
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.dialog('preloading-disabled').track({
        resize: true,
        keydown: 'Escape'
    }), _class_private_method_get(this, _dialogContents, dialogContents).call(this), _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_2__.IconDialog.IconDialog.litTagName);
// clang-format on
}
function dialogContents() {
    var LINK = 'https://developer.chrome.com/blog/prerender-pages/';
    var learnMoreLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.XLink.XLink.create(LINK, i18nString(UIStrings.footerLearnMore), undefined, undefined, 'learn-more');
    var iconLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Fragment.html(_templateObject2(), LINK);
    var iconLinkIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
    iconLinkIcon.data = {
        iconName: 'open-externally',
        color: 'var(--icon-default-hover)',
        width: '16px',
        height: '16px'
    };
    iconLink.append(iconLinkIcon);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject3(), i18nString(UIStrings.titleReasonsPreventingPreloading), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName, _class_private_method_get(this, _maybeDisalebByPreference, maybeDisalebByPreference).call(this), _class_private_method_get(this, _maybeDisalebByDataSaver, maybeDisalebByDataSaver).call(this), _class_private_method_get(this, _maybeDisalebByBatterySaver, maybeDisalebByBatterySaver).call(this), _class_private_method_get(this, _maybeDisalebByHoldbackPrefetchSpeculationRules, maybeDisalebByHoldbackPrefetchSpeculationRules).call(this), _class_private_method_get(this, _maybeDisalebByHoldbackPrerenderSpeculationRules, maybeDisalebByHoldbackPrerenderSpeculationRules).call(this), _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.ReportSectionDivider.litTagName, _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_6__.ReportView.Report.litTagName, learnMoreLink, iconLink);
}
function maybeKeyValue(shouldShow, header, description) {
    if (!shouldShow) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.nothing;
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html(_templateObject4(), header, description);
}
function maybeDisalebByPreference() {
    var preloadingSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
    preloadingSettingLink.href = 'chrome://settings/performance';
    preloadingSettingLink.textContent = i18nString(UIStrings.preloadingPagesSettings);
    var extensionsSettingLink = new _ui_components_chrome_link_chrome_link_js__WEBPACK_IMPORTED_MODULE_1__.ChromeLink.ChromeLink();
    extensionsSettingLink.href = 'chrome://extensions';
    extensionsSettingLink.textContent = i18nString(UIStrings.extensionsSettings);
    var description = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.descriptionDisabledByPreference, {
        PH1: preloadingSettingLink,
        PH2: extensionsSettingLink
    });
    return _class_private_method_get(this, _maybeKeyValue, maybeKeyValue).call(this, _class_private_field_get(this, _data).disabledByPreference, i18nString(UIStrings.headerDisabledByPreference), description);
}
function maybeDisalebByDataSaver() {
    return _class_private_method_get(this, _maybeKeyValue, maybeKeyValue).call(this, _class_private_field_get(this, _data).disabledByDataSaver, i18nString(UIStrings.headerDisabledByDataSaver), i18nString(UIStrings.descriptionDisabledByDataSaver));
}
function maybeDisalebByBatterySaver() {
    return _class_private_method_get(this, _maybeKeyValue, maybeKeyValue).call(this, _class_private_field_get(this, _data).disabledByBatterySaver, i18nString(UIStrings.headerDisabledByBatterySaver), i18nString(UIStrings.descriptionDisabledByBatterySaver));
}
function maybeDisalebByHoldbackPrefetchSpeculationRules() {
    return _class_private_method_get(this, _maybeKeyValue, maybeKeyValue).call(this, _class_private_field_get(this, _data).disabledByHoldbackPrefetchSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrefetchSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrefetchSpeculationRules));
}
function maybeDisalebByHoldbackPrerenderSpeculationRules() {
    return _class_private_method_get(this, _maybeKeyValue, maybeKeyValue).call(this, _class_private_field_get(this, _data).disabledByHoldbackPrerenderSpeculationRules, i18nString(UIStrings.headerDisabledByHoldbackPrerenderSpeculationRules), i18nString(UIStrings.descriptionDisabledByHoldbackPrerenderSpeculationRules));
}
customElements.define('devtools-resources-preloading-disabled-infobar', PreloadingDisabledInfobar); //# sourceMappingURL=PreloadingDisabledInfobar.js.map


}),
"./panels/application/preloading/components/preloadingDisabledInfobar.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n#container {\n  padding: 6px 12px;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n#contents {\n  margin-top: 14px;\n}\n\n#contents * {\n  background: var(--color-background-elevation-dark-only);\n}\n\n#title {\n  padding-bottom: 12px;\n  font-size: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 1px solid var(--sys-color-divider);\n  color: var(--sys-color-token-subtle);\n  grid-column-start: span 2;\n  font-weight: bold;\n}\n\n#contents .key {\n  grid-column-start: span 2;\n  padding: 12px 0;\n  font-weight: bold;\n  margin-bottom: -1.2em;\n}\n\n#contents .value {\n  grid-column-start: span 2;\n  padding: 12px 0;\n}\n\n#footer {\n  padding-top: 12px;\n  font-size: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--sys-color-token-subtle);\n  grid-column-start: span 2;\n  font-weight: bold;\n}\n\n#footer .icon-link {\n  vertical-align: sub;\n  float: right;\n}\n\ndevtools-icon-dialog {\n  vertical-align: sub;\n}\n\n/*# sourceURL=preloadingDisabledInfobar.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);