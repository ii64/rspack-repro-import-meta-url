"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_SharedStorageAccessGrid_js"], {
"./panels/application/components/SharedStorageAccessGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageAccessGrid: function() { return SharedStorageAccessGrid; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _sharedStorageAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedStorageAccessGrid.css.js */ "./panels/application/components/sharedStorageAccessGrid.css.js");
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
        "devtools-shared-storage-access-grid"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div>\n        <span class="heading">',
        "</span>\n        <",
        ' class="info-icon" title=',
        "\n          .data=",
        ">\n        </",
        ">\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div\n        class="no-events-message">',
        "</div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n      <",
        " .data=",
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
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description Text in Shared Storage Events View of the Application panel
     */ sharedStorage: 'Shared storage',
    /**
     *@description Hover text for an info icon in the Shared Storage Events panel
     */ allSharedStorageEvents: 'All shared storage events for this page.',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Date and time of an Shared Storage event in a locale-
     * dependent format.
     */ eventTime: 'Event Time',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Type of shared storage event such as 'documentAddModule', 'documentRun',
     * 'documentSet', 'workletDelete', or 'workletGet'.
     */ eventType: 'Access Type',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Id of the page's main frame for this access event.
     */ mainFrameId: 'Main Frame ID',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Owner origin of the shared storage for this access event.
     */ ownerOrigin: 'Owner Origin',
    /**
     *@description Text in Shared Storage Events View of the Application panel
     * Event parameters whose presence/absence depend on the access type.
     */ eventParams: 'Optional Event Params',
    /**
     *@description Text shown instead of a table when the table would be empty.
     */ noEvents: 'No shared storage events recorded.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/SharedStorageAccessGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _datastores = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderGridOrNoDataMessage = /*#__PURE__*/ new WeakSet(), _buildRows = /*#__PURE__*/ new WeakSet(), _renderDateForDataGridCell = /*#__PURE__*/ new WeakSet();
var SharedStorageAccessGrid = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SharedStorageAccessGrid, HTMLElement1);
    var _super = _create_super(SharedStorageAccessGrid);
    function SharedStorageAccessGrid() {
        _class_call_check(this, SharedStorageAccessGrid);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderGridOrNoDataMessage);
        _class_private_method_init(_assert_this_initialized(_this), _buildRows);
        _class_private_method_init(_assert_this_initialized(_this), _renderDateForDataGridCell);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _datastores, {
            writable: true,
            value: []
        });
        return _this;
    }
    _create_class(SharedStorageAccessGrid, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _sharedStorageAccessGrid_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _datastores, data);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return SharedStorageAccessGrid;
}(_wrap_native_super(HTMLElement));
_define_property(SharedStorageAccessGrid, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function render() {
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject1(), i18nString(UIStrings.sharedStorage), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, i18nString(UIStrings.allSharedStorageEvents), {
        iconName: 'info',
        color: 'var(--icon-default)',
        width: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, _class_private_method_get(this, _renderGridOrNoDataMessage, renderGridOrNoDataMessage).call(this)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function renderGridOrNoDataMessage() {
    if (_class_private_field_get(this, _datastores).length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject2(), i18nString(UIStrings.noEvents));
    }
    var gridData = {
        columns: [
            {
                id: 'event-main-frame-id',
                title: i18nString(UIStrings.mainFrameId),
                widthWeighting: 10,
                hideable: false,
                visible: false,
                sortable: false
            },
            {
                id: 'event-time',
                title: i18nString(UIStrings.eventTime),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'event-type',
                title: i18nString(UIStrings.eventType),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'event-owner-origin',
                title: i18nString(UIStrings.ownerOrigin),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'event-params',
                title: i18nString(UIStrings.eventParams),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            }
        ],
        rows: _class_private_method_get(this, _buildRows, buildRows).call(this),
        initialSort: {
            columnId: 'event-time',
            direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
        }
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject3(), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName, gridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController.litTagName);
}
function buildRows() {
    var _this = this;
    return _class_private_field_get(this, _datastores).map(function(event) {
        return {
            cells: [
                {
                    columnId: 'event-main-frame-id',
                    value: event.mainFrameId
                },
                {
                    columnId: 'event-time',
                    value: event.accessTime,
                    renderer: _class_private_method_get(_this, _renderDateForDataGridCell, renderDateForDataGridCell).bind(_this)
                },
                {
                    columnId: 'event-type',
                    value: event.type
                },
                {
                    columnId: 'event-owner-origin',
                    value: event.ownerOrigin
                },
                {
                    columnId: 'event-params',
                    value: JSON.stringify(event.params)
                }
            ]
        };
    });
}
function renderDateForDataGridCell(value) {
    var date = new Date(1e3 * value);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject4(), date.toLocaleString());
}
customElements.define('devtools-shared-storage-access-grid', SharedStorageAccessGrid); //# sourceMappingURL=SharedStorageAccessGrid.js.map


}),
"./panels/application/components/sharedStorageAccessGrid.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n:host {\n  padding: 20px;\n}\n\n.heading {\n  font-size: 15px;\n}\n\ndevtools-data-grid-controller {\n  border: 1px solid var(--sys-color-divider);\n  margin-top: 20px;\n}\n\n.info-icon {\n  vertical-align: text-bottom;\n  height: 14px;\n}\n\n.no-events-message {\n  margin-top: 20px;\n}\n\n/*# sourceURL=sharedStorageAccessGrid.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);