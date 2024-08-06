"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_ReportsGrid_js"], {
"./panels/application/components/ReportsGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportsGrid: function() { return ReportsGrid; },
  ReportsGridStatusHeader: function() { return ReportsGridStatusHeader; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportingApiGrid.css.js */ "./panels/application/components/reportingApiGrid.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
        "devtools-resources-reports-grid-status-header"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      ",
        '\n      <x-link href="https://web.dev/reporting-api/#report-status"\n      jslog=',
        ">\n        <",
        ' class="inline-icon" .data=',
        "></",
        ">\n      </x-link>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "devtools-resources-reports-grid"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n          <",
        "></",
        ">\n          "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n          <",
        " .data=",
        ">\n          </",
        ">\n        "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n          <div class="reporting-placeholder">\n            <div>',
        "</div>\n          </div>\n        "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n      <div class="reporting-container" jslog=',
        '>\n        <div class="reporting-header">',
        "</div>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}







var UIStrings = {
    /**
     *@description Placeholder text when there are no Reporting API reports.
     *(https://developers.google.com/web/updates/2018/09/reportingapi#sending)
     */ noReportsToDisplay: 'No reports to display',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *Status is one of 'Queued', 'Pending', 'MarkedForRemoval' or 'Success'.
     */ status: 'Status',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *Destination is the name of the endpoint the report is being sent to.
     */ destination: 'Destination',
    /**
     *@description Column header for a table displaying Reporting API reports.
     *The column contains the timestamp of when a report was generated.
     */ generatedAt: 'Generated at'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/ReportsGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html;
var _shadow = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var ReportsGridStatusHeader = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportsGridStatusHeader, HTMLElement1);
    var _super = _create_super(ReportsGridStatusHeader);
    function ReportsGridStatusHeader() {
        _class_call_check(this, ReportsGridStatusHeader);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(ReportsGridStatusHeader, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return ReportsGridStatusHeader;
}(_wrap_native_super(HTMLElement));
_define_property(ReportsGridStatusHeader, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), i18nString(UIStrings.status), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.link('report-status').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, {
        iconName: 'help',
        color: 'var(--icon-link)',
        width: '16px',
        height: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _reports = /*#__PURE__*/ new WeakMap(), _protocolMonitorExperimentEnabled = /*#__PURE__*/ new WeakMap(), _render1 = /*#__PURE__*/ new WeakSet(), _buildReportRows = /*#__PURE__*/ new WeakSet();
var ReportsGrid = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ReportsGrid, HTMLElement1);
    var _super = _create_super(ReportsGrid);
    function ReportsGrid() {
        _class_call_check(this, ReportsGrid);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_method_init(_assert_this_initialized(_this), _buildReportRows);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _reports, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolMonitorExperimentEnabled, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(ReportsGrid, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow1).adoptedStyleSheets = [
                    _reportingApiGrid_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
                _class_private_field_set(this, _protocolMonitorExperimentEnabled, _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('protocol-monitor'));
                _class_private_method_get(this, _render1, render2).call(this);
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _reports, data.reports);
                _class_private_method_get(this, _render1, render2).call(this);
            }
        }
    ]);
    return ReportsGrid;
}(_wrap_native_super(HTMLElement));
_define_property(ReportsGrid, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject2()));
function render2() {
    var reportsGridData = {
        columns: [
            {
                id: 'url',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('URL'),
                widthWeighting: 30,
                hideable: false,
                visible: true
            },
            {
                id: 'type',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Type'),
                widthWeighting: 20,
                hideable: false,
                visible: true
            },
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 20,
                hideable: false,
                visible: true,
                titleElement: html(_templateObject3(), ReportsGridStatusHeader.litTagName, ReportsGridStatusHeader.litTagName)
            },
            {
                id: 'destination',
                title: i18nString(UIStrings.destination),
                widthWeighting: 20,
                hideable: false,
                visible: true
            },
            {
                id: 'timestamp',
                title: i18nString(UIStrings.generatedAt),
                widthWeighting: 20,
                hideable: false,
                visible: true
            },
            {
                id: 'body',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Body'),
                widthWeighting: 20,
                hideable: false,
                visible: true
            }
        ],
        rows: _class_private_method_get(this, _buildReportRows, buildReportRows).call(this)
    };
    if (_class_private_field_get(this, _protocolMonitorExperimentEnabled)) {
        reportsGridData.columns.unshift({
            id: 'id',
            title: 'ID',
            widthWeighting: 30,
            hideable: false,
            visible: true
        });
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject6(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('reports'), _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Reports'), _class_private_field_get(this, _reports).length > 0 ? html(_templateObject4(), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName, reportsGridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_2__.DataGridController.DataGridController.litTagName) : html(_templateObject5(), i18nString(UIStrings.noReportsToDisplay))), _class_private_field_get(this, _shadow1), {
        host: this
    });
// clang-format on
}
function buildReportRows() {
    return _class_private_field_get(this, _reports).map(function(report) {
        return {
            cells: [
                {
                    columnId: 'id',
                    value: report.id
                },
                {
                    columnId: 'url',
                    value: report.initiatorUrl
                },
                {
                    columnId: 'type',
                    value: report.type
                },
                {
                    columnId: 'status',
                    value: report.status
                },
                {
                    columnId: 'destination',
                    value: report.destination
                },
                {
                    columnId: 'timestamp',
                    value: new Date(report.timestamp * 1000).toLocaleString()
                },
                {
                    columnId: 'body',
                    value: JSON.stringify(report.body)
                }
            ]
        };
    });
}
customElements.define('devtools-resources-reports-grid-status-header', ReportsGridStatusHeader);
customElements.define('devtools-resources-reports-grid', ReportsGrid); //# sourceMappingURL=ReportsGrid.js.map


}),
"./panels/application/components/reportingApiGrid.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: auto;\n  height: 100%;\n}\n\n.reporting-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.reporting-header {\n  font-size: 15px;\n  background-color: var(--sys-color-surface2);\n  padding: 1px 4px;\n}\n\n.reporting-placeholder {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--sys-color-token-subtle);\n  min-width: min-content;\n  text-align: center;\n}\n\ndevtools-data-grid-controller {\n  border: 1px solid var(--sys-color-divider);\n}\n\n.inline-icon {\n  vertical-align: text-bottom;\n}\n\n/*# sourceURL=reportingApiGrid.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);