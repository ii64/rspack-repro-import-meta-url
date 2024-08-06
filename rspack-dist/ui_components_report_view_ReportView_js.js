"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_report_view_ReportView_js"], {
"./ui/components/report_view/ReportView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Report: function() { return Report; },
  ReportKey: function() { return ReportKey; },
  ReportSection: function() { return ReportSection; },
  ReportSectionDivider: function() { return ReportSectionDivider; },
  ReportSectionHeader: function() { return ReportSectionHeader; },
  ReportValue: function() { return ReportValue; }
});
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _report_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.css.js */ "./ui/components/report_view/report.css.js");
/* harmony import */var _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportKey.css.js */ "./ui/components/report_view/reportKey.css.js");
/* harmony import */var _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportSection.css.js */ "./ui/components/report_view/reportSection.css.js");
/* harmony import */var _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportSectionDivider.css.js */ "./ui/components/report_view/reportSectionDivider.css.js");
/* harmony import */var _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reportSectionHeader.css.js */ "./ui/components/report_view/reportSectionHeader.css.js");
/* harmony import */var _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportValue.css.js */ "./ui/components/report_view/reportValue.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-report"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="report-title">',
        "</div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="content">\n        ',
        "\n        <slot></slot>\n      </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-report-section"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n      <div class="section">\n        <slot></slot>\n      </div>\n    '
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "devtools-report-section-header"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n      <div class="section-header">\n        <slot></slot>\n      </div>\n    '
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "devtools-report-divider"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '\n      <div class="section-divider">\n      </div>\n    '
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "devtools-report-key"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        '\n      <div class="key"><slot></slot></div>\n    '
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "devtools-report-value"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        '\n      <div class="value"><slot></slot></div>\n    '
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}







var _shadow = /*#__PURE__*/ new WeakMap(), _reportTitle = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var Report = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(Report, HTMLElement1);
    var _super = _create_super(Report);
    function Report() {
        _class_call_check(this, Report);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _reportTitle, {
            writable: true,
            value: ''
        });
        return _this;
    }
    _create_class(Report, [
        {
            key: "data",
            set: function set(param) {
                var reportTitle = param.reportTitle;
                _class_private_field_set(this, _reportTitle, reportTitle);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _report_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return Report;
}(_wrap_native_super(HTMLElement));
_define_property(Report, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject2(), _class_private_field_get(this, _reportTitle) ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _class_private_field_get(this, _reportTitle)) : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _render1 = /*#__PURE__*/ new WeakSet();
var ReportSection = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportSection, HTMLElement1);
    var _super = _create_super(ReportSection);
    function ReportSection() {
        _class_call_check(this, ReportSection);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportSection, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow1).adoptedStyleSheets = [
                    _reportSection_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ];
                _class_private_method_get(this, _render1, render1).call(this);
            }
        }
    ]);
    return ReportSection;
}(_wrap_native_super(HTMLElement));
_define_property(ReportSection, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject3()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject4()), _class_private_field_get(this, _shadow1), {
        host: this
    });
// clang-format on
}
var _shadow2 = /*#__PURE__*/ new WeakMap(), _render2 = /*#__PURE__*/ new WeakSet();
var ReportSectionHeader = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportSectionHeader, HTMLElement1);
    var _super = _create_super(ReportSectionHeader);
    function ReportSectionHeader() {
        _class_call_check(this, ReportSectionHeader);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render2);
        _class_private_field_init(_assert_this_initialized(_this), _shadow2, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportSectionHeader, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow2).adoptedStyleSheets = [
                    _reportSectionHeader_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
                _class_private_method_get(this, _render2, render2).call(this);
            }
        }
    ]);
    return ReportSectionHeader;
}(_wrap_native_super(HTMLElement));
_define_property(ReportSectionHeader, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject5()));
function render2() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject6()), _class_private_field_get(this, _shadow2), {
        host: this
    });
// clang-format on
}
var _shadow3 = /*#__PURE__*/ new WeakMap(), _render3 = /*#__PURE__*/ new WeakSet();
var ReportSectionDivider = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportSectionDivider, HTMLElement1);
    var _super = _create_super(ReportSectionDivider);
    function ReportSectionDivider() {
        _class_call_check(this, ReportSectionDivider);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render3);
        _class_private_field_init(_assert_this_initialized(_this), _shadow3, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportSectionDivider, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow3).adoptedStyleSheets = [
                    _reportSectionDivider_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
                _class_private_method_get(this, _render3, render3).call(this);
            }
        }
    ]);
    return ReportSectionDivider;
}(_wrap_native_super(HTMLElement));
_define_property(ReportSectionDivider, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject7()));
function render3() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject8()), _class_private_field_get(this, _shadow3), {
        host: this
    });
// clang-format on
}
var _shadow4 = /*#__PURE__*/ new WeakMap(), _render4 = /*#__PURE__*/ new WeakSet();
var ReportKey = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportKey, HTMLElement1);
    var _super = _create_super(ReportKey);
    function ReportKey() {
        _class_call_check(this, ReportKey);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render4);
        _class_private_field_init(_assert_this_initialized(_this), _shadow4, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportKey, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow4).adoptedStyleSheets = [
                    _reportKey_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
                _class_private_method_get(this, _render4, render4).call(this);
            }
        }
    ]);
    return ReportKey;
}(_wrap_native_super(HTMLElement));
_define_property(ReportKey, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject9()));
function render4() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject10()), _class_private_field_get(this, _shadow4), {
        host: this
    });
// clang-format on
}
var _shadow5 = /*#__PURE__*/ new WeakMap(), _render5 = /*#__PURE__*/ new WeakSet();
var ReportValue = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportValue, HTMLElement1);
    var _super = _create_super(ReportValue);
    function ReportValue() {
        _class_call_check(this, ReportValue);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render5);
        _class_private_field_init(_assert_this_initialized(_this), _shadow5, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportValue, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow5).adoptedStyleSheets = [
                    _reportValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
                _class_private_method_get(this, _render5, render5).call(this);
            }
        }
    ]);
    return ReportValue;
}(_wrap_native_super(HTMLElement));
_define_property(ReportValue, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject11()));
function render5() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject12()), _class_private_field_get(this, _shadow5), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-report', Report);
customElements.define('devtools-report-section', ReportSection);
customElements.define('devtools-report-section-header', ReportSectionHeader);
customElements.define('devtools-report-key', ReportKey);
customElements.define('devtools-report-value', ReportValue);
customElements.define('devtools-report-divider', ReportSectionDivider); //# sourceMappingURL=ReportView.js.map


}),
"./ui/components/report_view/report.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  display: block;\n}\n\n.content {\n  background-color: var(--sys-color-cdt-base-container);\n  display: grid;\n  grid-template-columns: min-content 1fr;\n  user-select: text;\n}\n\n.report-title {\n  padding: 12px 24px;\n  font-size: 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 1px solid var(--sys-color-divider);\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n  grid-column-start: span 2;\n}\n\n/*# sourceURL=report.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/report_view/reportKey.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  line-height: 28px;\n  margin: 0 0 8px;\n}\n\n.key {\n  color: var(--sys-color-on-surface-subtle);\n  padding: 0 6px;\n  text-align: right;\n  white-space: pre;\n  user-select: none;\n}\n\n/*# sourceURL=reportKey.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/report_view/reportSection.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  grid-column-start: span 2;\n  min-width: min-content;\n}\n\n.section {\n  padding: 12px;\n  margin-left: 18px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex: auto;\n  overflow-wrap: break-word;\n  overflow: hidden;\n}\n\n/*# sourceURL=reportSection.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/report_view/reportSectionDivider.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  grid-column-start: span 2;\n}\n\n.section-divider {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=reportSectionDivider.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/report_view/reportSectionHeader.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  grid-column-start: span 2;\n}\n\n.section-header {\n  padding: 12px;\n  margin-left: 18px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex: auto;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n  user-select: none;\n}\n\n/*# sourceURL=reportSectionHeader.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/report_view/reportValue.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  line-height: 28px;\n  margin: 0 0 8px;\n  min-width: 150px;\n}\n\n.value {\n  color: var(--sys-color-on-surface);\n  margin-inline-start: 0;\n  padding: 0 6px;\n  overflow-wrap: break-word;\n}\n\n/*# sourceURL=reportValue.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);