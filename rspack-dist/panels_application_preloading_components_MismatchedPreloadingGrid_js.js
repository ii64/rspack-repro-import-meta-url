"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_MismatchedPreloadingGrid_js"], {
"./panels/application/preloading/components/MismatchedPreloadingGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MismatchedPreloadingGrid: function() { return MismatchedPreloadingGrid; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        "devtools-resources-mismatched-preloading-grid"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <",
        " .data=",
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
        "<span style=",
        ">",
        "</span>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<div>",
        "</div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description Column header
     */ url: 'URL',
    /**
     *@description Column header: Action of preloading (prefetch/prerender)
     */ action: 'Action',
    /**
     *@description Column header: Status of preloading attempt
     */ status: 'Status',
    /**
     *@description Text in grid and details: Preloading attempt is not yet triggered.
     */ statusNotTriggered: 'Not triggered',
    /**
     *@description Text in grid and details: Preloading attempt is eligible but pending.
     */ statusPending: 'Pending',
    /**
     *@description Text in grid and details: Preloading is running.
     */ statusRunning: 'Running',
    /**
     *@description Text in grid and details: Preloading finished and the result is ready for the next navigation.
     */ statusReady: 'Ready',
    /**
     *@description Text in grid and details: Ready, then used.
     */ statusSuccess: 'Success',
    /**
     *@description Text in grid and details: Preloading failed.
     */ statusFailure: 'Failure'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/preloading/components/MismatchedPreloadingGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var PreloadingUIUtils = /*#__PURE__*/ function() {
    "use strict";
    function PreloadingUIUtils() {
        _class_call_check(this, PreloadingUIUtils);
    }
    _create_class(PreloadingUIUtils, null, [
        {
            key: "status",
            value: function status(status) {
                // See content/public/browser/preloading.h PreloadingAttemptOutcome.
                switch(status){
                    case "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ :
                        return i18nString(UIStrings.statusNotTriggered);
                    case "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ :
                        return i18nString(UIStrings.statusPending);
                    case "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ :
                        return i18nString(UIStrings.statusRunning);
                    case "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ :
                        return i18nString(UIStrings.statusReady);
                    case "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ :
                        return i18nString(UIStrings.statusSuccess);
                    case "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ :
                        return i18nString(UIStrings.statusFailure);
                    // NotSupported is used to handle unreachable case. For example,
                    // there is no code path for
                    // PreloadingTriggeringOutcome::kTriggeredButPending in prefetch,
                    // which is mapped to NotSupported. So, we regard it as an
                    // internal error.
                    case "NotSupported" /* SDK.PreloadingModel.PreloadingStatus.NotSupported */ :
                        return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('Internal error');
                }
            }
        }
    ]);
    return PreloadingUIUtils;
}();
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html;
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _data = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _buildReportRows = /*#__PURE__*/ new WeakSet();
// Grid component to show prerendering attempts.
var MismatchedPreloadingGrid = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(MismatchedPreloadingGrid, _superClass);
    var _super = _create_super(MismatchedPreloadingGrid);
    function MismatchedPreloadingGrid() {
        _class_call_check(this, MismatchedPreloadingGrid);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _buildReportRows);
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
    _create_class(MismatchedPreloadingGrid, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [];
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _data, data);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return MismatchedPreloadingGrid;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent);
_define_property(MismatchedPreloadingGrid, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal(_templateObject()));
function render1() {
    if (_class_private_field_get(this, _data) === null) {
        return;
    }
    var reportsGridData = {
        columns: [
            {
                id: 'url',
                title: i18nString(UIStrings.url),
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
                id: 'status',
                title: i18nString(UIStrings.status),
                widthWeighting: 15,
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
    function urlRenderer(url, pageURL) {
        function span(additionalProps, s) {
            // Don't insert spaces to prevent spaces for inline blocks.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject2(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.styleMap(additionalProps), s);
        // clang-format on
        }
        var diffs = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.DiffWrapper.charDiff(url, pageURL);
        var contents = diffs.map(function(diffOp) {
            var s = diffOp[1];
            switch(diffOp[0]){
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Equal:
                    return span({}, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Insert:
                    return span({
                        'color': 'var(--sys-color-green)',
                        'text-decoration': 'line-through'
                    }, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Delete:
                    return span({
                        'color': 'var(--sys-color-error)'
                    }, s);
                case _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.Operation.Edit:
                    return span({
                        'color': 'var(--sys-color-green)',
                        'text-decoration': 'line-through'
                    }, s);
                default:
                    throw new Error('unreachable');
            }
        }, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject3(), contents);
    }
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined)(_class_private_field_get(this, _data));
    var pageURL = _class_private_field_get(this, _data).pageURL;
    // Sort in descending order by diffScore, i.e. most similar one first.
    return _class_private_field_get(this, _data).rows.map(function(row) {
        return {
            row: row,
            diffScore: _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_3__.Diff.DiffWrapper.characterScore(row.url, pageURL)
        };
    }).sort(function(a, b) {
        return b.diffScore - a.diffScore;
    }).map(function(param) {
        var row = param.row;
        return {
            cells: [
                {
                    columnId: 'url',
                    value: row.url,
                    renderer: function() {
                        return urlRenderer(row.url, pageURL);
                    }
                },
                {
                    columnId: 'action',
                    value: _PreloadingString_js__WEBPACK_IMPORTED_MODULE_7__.capitalizedAction(row.action)
                },
                {
                    columnId: 'status',
                    value: PreloadingUIUtils.status(row.status)
                }
            ]
        };
    });
}
customElements.define('devtools-resources-mismatched-preloading-grid', MismatchedPreloadingGrid); //# sourceMappingURL=MismatchedPreloadingGrid.js.map


}),

}]);