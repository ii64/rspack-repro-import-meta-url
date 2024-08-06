"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_PreloadingGrid_js"], {
"./panels/application/preloading/components/PreloadingGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PreloadingGrid: function() { return PreloadingGrid; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preloadingGrid.css.js */ "./panels/application/preloading/components/preloadingGrid.css.js");
/* harmony import */var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-resources-preloading-grid"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="preloading-container">\n        <',
        " .data=",
        ">\n        </",
        ">\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n        <div\n          style=",
        "\n        >\n          <",
        "\n            .data=",
        "\n            style=",
        "\n          >\n          </",
        ">\n          ",
        "\n        </div>\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}










var UIStrings = {
    /**
     *@description Column header: Action of preloading (prefetch/prerender)
     */ action: 'Action',
    /**
     *@description Column header: A rule set of preloading
     */ ruleSet: 'Rule set',
    /**
     *@description Column header: Status of preloading attempt
     */ status: 'Status'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/PreloadingGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html;
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _buildReportRows = /*#__PURE__*/ new WeakSet(), // Shorten URL if a preloading attempt is same-origin.
_urlShort = /*#__PURE__*/ new WeakSet();
// Grid component to show prerendering attempts.
var PreloadingGrid = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(PreloadingGrid, _superClass);
    var _super = _create_super(PreloadingGrid);
    function PreloadingGrid() {
        _class_call_check(this, PreloadingGrid);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _buildReportRows);
        _class_private_method_init(_assert_this_initialized(_this), _urlShort);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _data, {
            writable: true,
            value: null
        });
        return _this;
    }
    _create_class(PreloadingGrid, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _preloadingGrid_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "update",
            value: function update(data) {
                _class_private_field_set(this, _data, data);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return PreloadingGrid;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent);
_define_property(PreloadingGrid, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal(_templateObject()));
function render1() {
    if (_class_private_field_get(this, _data) === null) {
        return;
    }
    var reportsGridData = {
        columns: [
            {
                id: 'url',
                title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('URL'),
                widthWeighting: 40,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'action',
                title: i18nString(UIStrings.action),
                widthWeighting: 15,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'rule-set',
                title: i18nString(UIStrings.ruleSet),
                widthWeighting: 20,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 40,
                hideable: false,
                visible: true,
                sortable: true
            }
        ],
        rows: _class_private_method_get(this, _buildReportRows, buildReportRows).call(this),
        striped: true
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName, reportsGridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function buildReportRows() {
    var _this = this;
    function statusRenderer(statusString, status) {
        if (status !== "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject2(), statusString);
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject3(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-error)'
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
            iconName: 'cross-circle-filled',
            color: 'var(--sys-color-error)',
            width: '16px',
            height: '16px'
        }, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub'
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, statusString);
    // clang-format on
    }
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var pageURL = _class_private_field_get(this, _data).pageURL;
    var securityOrigin = pageURL === '' ? null : new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(pageURL).securityOrigin();
    return _class_private_field_get(this, _data).rows.map(function(row) {
        return {
            cells: [
                {
                    columnId: 'id',
                    value: row.id
                },
                {
                    columnId: 'url',
                    value: _class_private_method_get(_this, _urlShort, urlShort).call(_this, row, securityOrigin),
                    title: row.attempt.key.url
                },
                {
                    columnId: 'action',
                    value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.capitalizedAction(row.attempt.action)
                },
                {
                    columnId: 'rule-set',
                    value: row.ruleSets.length === 0 ? '' : _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.ruleSetLocationShort(row.ruleSets[0], pageURL)
                },
                {
                    columnId: 'status',
                    value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_9__.composedStatus(row.attempt),
                    renderer: function(status) {
                        return statusRenderer(status, row.attempt.status);
                    }
                }
            ]
        };
    });
}
function urlShort(row, securityOrigin) {
    var url = row.attempt.key.url;
    return securityOrigin && url.startsWith(securityOrigin) ? url.slice(securityOrigin.length) : url;
}
customElements.define('devtools-resources-preloading-grid', PreloadingGrid); //# sourceMappingURL=PreloadingGrid.js.map


}),

}]);