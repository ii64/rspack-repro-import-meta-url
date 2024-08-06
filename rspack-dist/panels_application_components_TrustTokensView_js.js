"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_TrustTokensView_js"], {
"./panels/application/components/TrustTokensView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TrustTokensView: function() { return TrustTokensView; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _trustTokensView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trustTokensView.css.js */ "./panels/application/components/trustTokensView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        '\n        <div>\n          <span class="heading">',
        "</span>\n          <",
        ' name="info" title=',
        "></",
        ">\n          ",
        "\n        </div>\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-trust-tokens-storage-view"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div class="no-tt-message">',
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
        "\n      <",
        " .iconName=",
        "\n                                           .jslogContext=",
        "\n                                           .size=",
        "\n                                           .title=",
        "\n                                           .variant=",
        "\n                                           @click=",
        "></",
        ">\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     *@description Text for the issuer of an item
     */ issuer: 'Issuer',
    /**
     *@description Column header for Trust Token table
     */ storedTokenCount: 'Stored token count',
    /**
     *@description Hover text for an info icon in the Private State Token panel
     */ allStoredTrustTokensAvailableIn: 'All stored private state tokens available in this browser instance.',
    /**
     * @description Text shown instead of a table when the table would be empty.
     */ noTrustTokensStored: 'No private state tokens are currently stored.',
    /**
     * @description Each row in the Private State Token table has a delete button. This is the text shown
     * when hovering over this button. The placeholder is a normal URL, indicating the site which
     * provided the Private State Tokens that will be deleted when the button is clicked.
     * @example {https://google.com} PH1
     */ deleteTrustTokens: 'Delete all stored private state tokens issued by {PH1}.',
    /**
     * @description Heading label for a view. Previously known as 'Trust Tokens'.
     */ trustTokens: 'Private state tokens'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/TrustTokensView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
/** Fetch the Trust Token data regularly from the backend while the panel is open */ var REFRESH_INTERVAL_MS = 1000;
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _deleteClickHandler = /*#__PURE__*/ new WeakSet(), _renderGridOrNoDataMessage = /*#__PURE__*/ new WeakSet(), _buildRowsFromTokens = /*#__PURE__*/ new WeakSet(), _deleteButtonRendererForDataGridCell = /*#__PURE__*/ new WeakSet();
var TrustTokensView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(TrustTokensView, _superClass);
    var _super = _create_super(TrustTokensView);
    function TrustTokensView() {
        _class_call_check(this, TrustTokensView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _deleteClickHandler);
        _class_private_method_init(_assert_this_initialized(_this), _renderGridOrNoDataMessage);
        _class_private_method_init(_assert_this_initialized(_this), _buildRowsFromTokens);
        _class_private_method_init(_assert_this_initialized(_this), _deleteButtonRendererForDataGridCell);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(TrustTokensView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this_wrapper;
                (_this_wrapper = this.wrapper) === null || _this_wrapper === void 0 ? void 0 : _this_wrapper.contentElement.classList.add('vbox');
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _trustTokensView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
                void this.render();
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                return _async_to_generator(function() {
                    var mainTarget, tokens;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    mainTarget.storageAgent().invoke_getTrustTokens()
                                ];
                            case 1:
                                tokens = _state.sent().tokens;
                                return [
                                    4,
                                    coordinator.write('Render TrustTokensView', function() {
                                        // clang-format off
                                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject(), i18nString(UIStrings.trustTokens), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, i18nString(UIStrings.allStoredTrustTokensAvailableIn), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName, _class_private_method_get(_this, _renderGridOrNoDataMessage, renderGridOrNoDataMessage).call(_this, tokens)), _class_private_field_get(_this, _shadow), {
                                            host: _this
                                        });
                                        // clang-format on
                                        if (_this.isConnected) {
                                            setTimeout(function() {
                                                return _this.render();
                                            }, REFRESH_INTERVAL_MS);
                                        }
                                    })
                                ];
                            case 2:
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
    return TrustTokensView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent);
_define_property(TrustTokensView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal(_templateObject1()));
function deleteClickHandler(issuerOrigin) {
    var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    void (mainTarget === null || mainTarget === void 0 ? void 0 : mainTarget.storageAgent().invoke_clearTrustTokens({
        issuerOrigin: issuerOrigin
    }));
}
function renderGridOrNoDataMessage(tokens) {
    if (tokens.length === 0) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject2(), i18nString(UIStrings.noTrustTokensStored));
    }
    var gridData = {
        columns: [
            {
                id: 'issuer',
                title: i18nString(UIStrings.issuer),
                widthWeighting: 10,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'count',
                title: i18nString(UIStrings.storedTokenCount),
                widthWeighting: 5,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'delete-button',
                title: '',
                widthWeighting: 1,
                hideable: false,
                visible: true,
                sortable: false
            }
        ],
        rows: _class_private_method_get(this, _buildRowsFromTokens, buildRowsFromTokens).call(this, tokens),
        initialSort: {
            columnId: 'issuer',
            direction: "ASC" /* DataGrid.DataGridUtils.SortDirection.ASC */ 
        }
    };
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject3(), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName, gridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridController.DataGridController.litTagName);
}
function buildRowsFromTokens(tokens) {
    var _this = this;
    return tokens.filter(function(token) {
        return token.count > 0;
    }).map(function(token) {
        return {
            cells: [
                {
                    columnId: 'delete-button',
                    value: removeTrailingSlash(token.issuerOrigin),
                    renderer: _class_private_method_get(_this, _deleteButtonRendererForDataGridCell, deleteButtonRendererForDataGridCell).bind(_this)
                },
                {
                    columnId: 'issuer',
                    value: removeTrailingSlash(token.issuerOrigin)
                },
                {
                    columnId: 'count',
                    value: token.count
                }
            ]
        };
    });
}
function deleteButtonRendererForDataGridCell(issuer) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject4(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, 'bin', 'delete-all', "SMALL" /* Buttons.Button.Size.SMALL */ , i18nString(UIStrings.deleteTrustTokens, {
        PH1: issuer
    }), "icon" /* Buttons.Button.Variant.ICON */ , _class_private_method_get(this, _deleteClickHandler, deleteClickHandler).bind(this, issuer), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
// clang-format on
}
function removeTrailingSlash(s) {
    return s.replace(/\/$/, '');
}
customElements.define('devtools-trust-tokens-storage-view', TrustTokensView); //# sourceMappingURL=TrustTokensView.js.map


}),
"./panels/application/components/trustTokensView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  padding: 20px;\n}\n\n.heading {\n  font-size: 15px;\n}\n\ndevtools-data-grid-controller {\n  border: 1px solid var(--sys-color-divider);\n  margin-top: 20px;\n\n  & devtools-button {\n    width: 14px;\n    height: 14px;\n  }\n}\n\ndevtools-icon {\n  width: 14px;\n  height: 14px;\n}\n\n.no-tt-message {\n  margin-top: 20px;\n}\n\n/*# sourceURL=trustTokensView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);