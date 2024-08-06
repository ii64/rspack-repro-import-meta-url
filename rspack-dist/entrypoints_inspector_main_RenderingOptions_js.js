"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_inspector_main_RenderingOptions_js"], {
"./entrypoints/inspector_main/RenderingOptions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReloadActionDelegate: function() { return ReloadActionDelegate; },
  RenderingOptionsView: function() { return RenderingOptionsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _renderingOptions_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderingOptions.css.js */ "./entrypoints/inspector_main/renderingOptions.css.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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






var UIStrings = {
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting highlights areas
     * of the webpage that need to be repainted (re-drawn by the browser).
     */ paintFlashing: 'Paint flashing',
    /**
     * @description Explanation text for the 'Paint flashing' setting in the Rendering tool.
     */ highlightsAreasOfThePageGreen: 'Highlights areas of the page (green) that need to be repainted. May not be suitable for people prone to photosensitive epilepsy.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting highlights areas
     * (regions) of the page that were shifted (where a 'layout shift' occurred). A layout shift is
     * where elements on the webpage move around and cause other nearby elements to move as well.
     */ layoutShiftRegions: 'Layout Shift Regions',
    /**
     * @description Explanation text for the 'Layout Shift Regions' setting in the Rendering tool.
     */ highlightsAreasOfThePageBlueThat: 'Highlights areas of the page (blue) that were shifted. May not be suitable for people prone to photosensitive epilepsy.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting shows the
     * borders of layers on the page. Layer is a noun.
     */ layerBorders: 'Layer borders',
    /**
     * @description Explanation text for the 'Layer borders' setting in the Rendering tool.
     */ showsLayerBordersOrangeoliveAnd: 'Shows layer borders (orange/olive) and tiles (cyan).',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting shows the
     * rendering statistics for frames e.g. frames per second. Frame is a noun.
     */ frameRenderingStats: 'Frame Rendering Stats',
    /**
     * @description Explanation text for the 'Frame Rendering Stats' setting in the Rendering tool.
     * Plots is a verb. GPU = Graphics Processing Unit.
     */ plotsFrameThroughputDropped: 'Plots frame throughput, dropped frames distribution, and GPU memory.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting highlights
     * elements that can slow down scrolling on the page.
     */ scrollingPerformanceIssues: 'Scrolling performance issues',
    /**
     * @description Explanation text for the 'Scrolling performance issues' setting in the Rendering tool.
     */ highlightsElementsTealThatCan: 'Highlights elements (teal) that can slow down scrolling, including touch & wheel event handlers and other main-thread scrolling situations.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting highlights the
     * rendering frames for ads that are found on the page.
     */ highlightAdFrames: 'Highlight ad frames',
    /**
     * @description Explanation text for the 'Highlight ad frames' setting in the Rendering tool.
     */ highlightsFramesRedDetectedToBe: 'Highlights frames (red) detected to be ads.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting shows an overlay
     * with Core Web Vitals. Core Web Vitals: https://support.google.com/webmasters/answer/9205520?hl=en
     */ coreWebVitals: 'Core Web Vitals',
    /**
     * @description Explanation text for the 'Core Web Vitals' setting in the Rendering tool.
     */ showsAnOverlayWithCoreWebVitals: 'Shows an overlay with Core Web Vitals.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting prevents the
     * webpage from loading 'local' fonts. Local fonts are fonts that are installed on the user's
     * computer, and not loaded over the network.
     */ disableLocalFonts: 'Disable local fonts',
    /**
     * @description Explanation text for the 'Disable local fonts' setting in the Rendering tool.
     */ disablesLocalSourcesInFontface: 'Disables `local()` sources in `@font-face` rules. Requires a page reload to apply.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting
     * emulates/pretends that the webpage is focused i.e. that the user interacted with it most
     * recently.
     */ emulateAFocusedPage: 'Emulate a focused page',
    /**
     * @description Explanation text for the 'Emulate a focused page' setting in the Rendering tool.
     */ emulatesAFocusedPage: 'Keep page focused. Commonly used for debugging disappearing elements.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting enables auto dark mode emulation.
     */ emulateAutoDarkMode: 'Enable automatic dark mode',
    /**
     * @description Explanation text for the 'Emulate automatic dark mode' setting in the Rendering tool.
     */ emulatesAutoDarkMode: 'Enables automatic dark mode and sets `prefers-color-scheme` to `dark`.',
    /**
     * @description Explanation text for the 'Emulate CSS media type' setting in the Rendering tool.
     * This setting overrides the CSS media type on the page:
     * https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types
     */ forcesMediaTypeForTestingPrint: 'Forces media type for testing print and screen styles',
    /**
     * @description Explanation text for the 'Forces CSS prefers-color-scheme media' setting in the Rendering tool.
     */ forcesCssPreferscolorschemeMedia: 'Forces CSS `prefers-color-scheme` media feature',
    /**
     * @description Explanation text for the 'Forces CSS prefers-reduced-motion media' setting in the Rendering tool.
     */ forcesCssPrefersreducedmotion: 'Forces CSS `prefers-reduced-motion` media feature',
    /**
     * @description Explanation text for the 'Forces CSS prefers-contrast media' setting in the Rendering tool.
     */ forcesCssPreferscontrastMedia: 'Forces CSS `prefers-contrast` media feature',
    /**
     * @description Explanation text for the 'Forces CSS prefers-reduced-data media' setting in the Rendering tool.
     */ forcesCssPrefersreduceddataMedia: 'Forces CSS `prefers-reduced-data` media feature',
    /**
     * @description Explanation text for the 'Forces CSS prefers-reduced-transparency media' setting in the Rendering tool.
     */ forcesCssPrefersreducedtransparencyMedia: 'Forces CSS `prefers-reduced-transparency` media feature',
    /**
     * @description Explanation text for the 'Forces CSS color-gamut media' setting in the Rendering tool.
     */ forcesCssColorgamutMediaFeature: 'Forces CSS `color-gamut` media feature',
    /**
     * @description Explanation text for the 'Emulate vision deficiencies' setting in the Rendering tool.
     */ forcesVisionDeficiencyEmulation: 'Forces vision deficiency emulation',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting disables the
     * page from loading images with the AVIF format.
     */ disableAvifImageFormat: 'Disable `AVIF` image format',
    /**
     * @description Explanation text for both the 'Disable AVIF image format' and 'Disable WebP image
     * format' settings in the Rendering tool.
     */ requiresAPageReloadToApplyAnd: 'Requires a page reload to apply and disables caching for image requests.',
    /**
     * @description The name of a checkbox setting in the Rendering tool. This setting disables the
     * page from loading images with the WebP format.
     */ disableWebpImageFormat: 'Disable `WebP` image format',
    /**
     * @description Explanation text for the 'Forces CSS forced-colors' setting in the Rendering tool.
     */ forcesCssForcedColors: 'Forces CSS forced-colors media feature'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('entrypoints/inspector_main/RenderingOptions.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
// TODO(1096068): remove this feature detection and expose the UI
// unconditionally once prefers-reduced-data ships unflagged. At that
// point, we can also add `category` and `tags` to the entry in
// `front_end/sdk/module.json` to make this feature available in the
// Command Menu.
var supportsPrefersReducedData = function() {
    var query = 'not all and (prefers-reduced-data), (prefers-reduced-data)';
    return window.matchMedia(query).matches;
};
// TODO(1424879): remove this feature detection and expose the UI
// unconditionally once prefers-reduced-transparency ships unflagged.
var supportsPrefersReducedTransparency = function() {
    var query = 'not all and (prefers-reduced-transparency), (prefers-reduced-transparency)';
    return window.matchMedia(query).matches;
};
var supportsPrefersContrast = function() {
    var query = 'not all and (prefers-contrast), (prefers-contrast)';
    return window.matchMedia(query).matches;
};
var _appendCheckbox = /*#__PURE__*/ new WeakSet(), _appendSelect = /*#__PURE__*/ new WeakSet();
var RenderingOptionsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RenderingOptionsView, _UI_Widget_VBox);
    var _super = _create_super(RenderingOptionsView);
    function RenderingOptionsView() {
        _class_call_check(this, RenderingOptionsView);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _appendCheckbox);
        _class_private_method_init(_assert_this_initialized(_this), _appendSelect);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.panel('rendering').track({
            resize: true
        })));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.paintFlashing), i18nString(UIStrings.highlightsAreasOfThePageGreen), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-paint-rects'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.layoutShiftRegions), i18nString(UIStrings.highlightsAreasOfThePageBlueThat), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-layout-shift-regions'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.layerBorders), i18nString(UIStrings.showsLayerBordersOrangeoliveAnd), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-debug-borders'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.frameRenderingStats), i18nString(UIStrings.plotsFrameThroughputDropped), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-fps-counter'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.scrollingPerformanceIssues), i18nString(UIStrings.highlightsElementsTealThatCan), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-scroll-bottleneck-rects'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.highlightAdFrames), i18nString(UIStrings.highlightsFramesRedDetectedToBe), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ad-highlights'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.coreWebVitals), i18nString(UIStrings.showsAnOverlayWithCoreWebVitals), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-web-vitals'), {
            toggle: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleShowWebVitals
        });
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.disableLocalFonts), i18nString(UIStrings.disablesLocalSourcesInFontface), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('local-fonts-disabled'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.emulateAFocusedPage), i18nString(UIStrings.emulatesAFocusedPage), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'), {
            toggle: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromRenderingTab
        });
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.emulateAutoDarkMode), i18nString(UIStrings.emulatesAutoDarkMode), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-auto-dark-mode'));
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssPreferscolorschemeMedia), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-color-scheme'));
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesMediaTypeForTestingPrint), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media'));
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssForcedColors), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-forced-colors'));
        if (supportsPrefersContrast()) {
            _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssPreferscontrastMedia), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-contrast'));
        }
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssPrefersreducedmotion), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-reduced-motion'));
        if (supportsPrefersReducedData()) {
            _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssPrefersreduceddataMedia), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-reduced-data'));
        }
        if (supportsPrefersReducedTransparency()) {
            _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssPrefersreducedtransparencyMedia), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-reduced-transparency'));
        }
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesCssColorgamutMediaFeature), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-color-gamut'));
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _class_private_method_get(_this, _appendSelect, appendSelect).call(_assert_this_initialized(_this), i18nString(UIStrings.forcesVisionDeficiencyEmulation), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-vision-deficiency'));
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.disableAvifImageFormat), i18nString(UIStrings.requiresAPageReloadToApplyAnd), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('avif-format-disabled'));
        _class_private_method_get(_this, _appendCheckbox, appendCheckbox).call(_assert_this_initialized(_this), i18nString(UIStrings.disableWebpImageFormat), i18nString(UIStrings.requiresAPageReloadToApplyAnd), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('webp-format-disabled'));
        _this.contentElement.createChild('div').classList.add('panel-section-separator');
        return _this;
    }
    _create_class(RenderingOptionsView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(RenderingOptionsView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _renderingOptions_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return RenderingOptionsView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
function appendCheckbox(label, subtitle, setting, metric) {
    var checkbox = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(label, false, subtitle, setting.name);
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.bindCheckbox(checkbox.checkboxElement, setting, metric);
    this.contentElement.appendChild(checkbox);
    return checkbox;
}
function appendSelect(label, setting) {
    var control = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SettingsUI.createControlForSetting(setting, label);
    if (control) {
        this.contentElement.appendChild(control);
    }
}
var ReloadActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ReloadActionDelegate() {
        _class_call_check(this, ReloadActionDelegate);
    }
    _create_class(ReloadActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                var emulatedCSSMediaFeaturePrefersColorSchemeSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulated-css-media-feature-prefers-color-scheme');
                switch(actionId){
                    case 'rendering.toggle-prefers-color-scheme':
                        {
                            // Cycle between no emulation, light, dark
                            var options = [
                                '',
                                'light',
                                'dark'
                            ];
                            var current = options.findIndex(function(x) {
                                return x === emulatedCSSMediaFeaturePrefersColorSchemeSetting.get() || '';
                            });
                            emulatedCSSMediaFeaturePrefersColorSchemeSetting.set(options[(current + 1) % 3]);
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ReloadActionDelegate;
} //# sourceMappingURL=RenderingOptions.js.map
();


}),
"./entrypoints/inspector_main/renderingOptions.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 12px;\n}\n\n[is="dt-checkbox"] {\n  margin: 0 0 10px;\n  flex: none;\n}\n\n.panel-section-separator {\n  height: 1px;\n  margin-bottom: 10px;\n  background: var(--sys-color-divider);\n  flex: none;\n}\n\n.panel-section-separator:last-child {\n  background: transparent;\n}\n\n.chrome-select-label {\n  margin-bottom: 16px;\n}\n\n/*# sourceURL=renderingOptions.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);