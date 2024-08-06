"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_PlatformFontsWidget_js"], {
"./panels/elements/PlatformFontsWidget.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlatformFontsWidget: function() { return PlatformFontsWidget; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _platformFontsWidget_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platformFontsWidget.css.js */ "./panels/elements/platformFontsWidget.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
     *@description Section title text content in Platform Fonts Widget of the Elements panel
     */ renderedFonts: 'Rendered Fonts',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */ familyName: 'Family name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */ postScriptName: 'PostScript name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */ fontOrigin: 'Font origin',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */ networkResource: 'Network resource',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */ localFile: 'Local file',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel. Indicates a number of glyphs (characters) .
     */ dGlyphs: '{n, plural, =1 {(# glyph)} other {(# glyphs)}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/PlatformFontsWidget.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var PlatformFontsWidget = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(PlatformFontsWidget, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(PlatformFontsWidget);
    function PlatformFontsWidget(sharedModel) {
        _class_call_check(this, PlatformFontsWidget);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "sharedModel", void 0);
        _define_property(_assert_this_initialized(_this), "sectionTitle", void 0);
        _define_property(_assert_this_initialized(_this), "fontStatsSection", void 0);
        _this.sharedModel = sharedModel;
        _this.sharedModel.addEventListener("ComputedStyleChanged" /* Events.ComputedStyleChanged */ , _this.update, _assert_this_initialized(_this));
        _this.sectionTitle = document.createElement('div');
        _this.sectionTitle.classList.add('title');
        _this.contentElement.classList.add('platform-fonts');
        _this.contentElement.appendChild(_this.sectionTitle);
        _this.sectionTitle.textContent = i18nString(UIStrings.renderedFonts);
        _this.fontStatsSection = _this.contentElement.createChild('div', 'stats-section');
        return _this;
    }
    _create_class(PlatformFontsWidget, [
        {
            key: "doUpdate",
            value: function doUpdate() {
                var cssModel = this.sharedModel.cssModel();
                var node = this.sharedModel.node();
                if (!node || !cssModel) {
                    return Promise.resolve();
                }
                return cssModel.getPlatformFonts(node.id).then(this.refreshUI.bind(this, node));
            }
        },
        {
            key: "refreshUI",
            value: function refreshUI(node, platformFonts) {
                if (this.sharedModel.node() !== node) {
                    return;
                }
                this.fontStatsSection.removeChildren();
                var isEmptySection = !platformFonts || !platformFonts.length;
                this.sectionTitle.classList.toggle('hidden', isEmptySection);
                if (isEmptySection || !platformFonts) {
                    return;
                }
                platformFonts.sort(function(a, b) {
                    return b.glyphCount - a.glyphCount;
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = platformFonts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var platformFont = _step.value;
                        var fontStatElement = this.fontStatsSection.createChild('div', 'font-stats-item');
                        var familyNameElement = fontStatElement.createChild('div');
                        familyNameElement.textContent = "".concat(UIStrings.familyName, ": ").concat(platformFont.familyName);
                        var postScriptNameElement = fontStatElement.createChild('div');
                        postScriptNameElement.textContent = "".concat(UIStrings.postScriptName, ": ").concat(platformFont.postScriptName);
                        var fontOriginElement = fontStatElement.createChild('div');
                        var fontOrigin = platformFont.isCustomFont ? i18nString(UIStrings.networkResource) : i18nString(UIStrings.localFile);
                        fontOriginElement.textContent = "".concat(UIStrings.fontOrigin, ": ").concat(fontOrigin);
                        var fontUsageElement = fontOriginElement.createChild('span', 'font-usage');
                        var usage = platformFont.glyphCount;
                        fontUsageElement.textContent = i18nString(UIStrings.dGlyphs, {
                            n: usage
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
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PlatformFontsWidget.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _platformFontsWidget_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ]);
            }
        }
    ]);
    return PlatformFontsWidget;
} //# sourceMappingURL=PlatformFontsWidget.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget);


}),
"./panels/elements/platformFontsWidget.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  user-select: text;\n}\n\n.platform-fonts {\n  flex-shrink: 0;\n}\n\n.font-usage {\n  color: var(--sys-color-token-subtle);\n  padding-left: 3px;\n}\n\n.title {\n  padding: 0 5px;\n  border-top: 1px solid;\n  border-bottom: 1px solid;\n  border-color: var(--sys-color-divider);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  height: 24px;\n  background-color: var(--sys-color-surface2);\n  display: flex;\n  align-items: center;\n}\n\n.font-stats-item {\n  padding: 5px 1em;\n\n  div {\n    margin-bottom: 2px;\n  }\n\n  &:not(:last-child) {\n    border-bottom: 1px solid var(--sys-color-divider);\n  }\n}\n\n/*# sourceURL=platformFontsWidget.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);