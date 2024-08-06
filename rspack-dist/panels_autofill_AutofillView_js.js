"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_autofill_AutofillView_js"], {
"./panels/autofill/AutofillView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AutofillView: function() { return AutofillView; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/autofill_manager/autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _autofillView_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./autofillView.css.js */ "./panels/autofill/autofillView.css.js");
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
function _class_apply_descriptor_destructure(receiver, descriptor) {
    if (descriptor.set) {
        if (!("__destrObj" in descriptor)) {
            descriptor.__destrObj = {
                set value (v){
                    descriptor.set.call(receiver, v);
                }
            };
        }
        return descriptor.__destrObj;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
function _class_private_field_destructure(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    return _class_apply_descriptor_destructure(receiver, descriptor);
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
        return function(v1) {
            return step([
                n,
                v1
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
        "devtools-autofill-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n        <main>\n          <div class="top-right-corner">\n            <label class="checkbox-label" title=',
        '>\n              <input\n                type="checkbox"\n                ?checked=',
        "\n                @change=",
        "\n                jslog=",
        "\n              >\n              <span>",
        "</span>\n            </label>\n            <x-link href=",
        ' class="feedback link" jslog=',
        ">",
        '</x-link>\n          </div>\n          <div class="placeholder-container" jslog=',
        '>\n            <div class="placeholder">\n              <div>',
        "</div>\n              <x-link href=",
        ' class="link" jslog=',
        ">",
        "</x-link>\n            </div>\n          </div>\n        </main>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <main>\n        <div class="content-container" jslog=',
        '>\n          <div class="right-to-left" role="region" aria-label=',
        '>\n            <div class="label-container">\n              <label class="checkbox-label" title=',
        '>\n                <input\n                  type="checkbox"\n                  ?checked=',
        "\n                  @change=",
        "\n                  jslog=",
        "\n                >\n                <span>",
        "</span>\n              </label>\n              <x-link href=",
        ' class="feedback link" jslog=',
        ">",
        "</x-link>\n            </div>\n            ",
        "\n          </div>\n          ",
        "\n        </div>\n      </main>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "",
        "<br>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<span>",
        "</span>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n        <span\n          class=",
        "\n          @mouseenter=",
        "\n          @mouseleave=",
        "\n          jslog=",
        "\n        >",
        "</span>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        '\n      <div class="address">\n        ',
        "\n      </div>\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n      <div class="grid-wrapper" role="region" aria-label=',
        ">\n        <",
        "\n          @rowmouseenter=",
        "\n          @rowmouseleave=",
        '\n          class="filled-fields-grid"\n          .data=',
        "\n        >\n        </",
        ">\n      </div>\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "\n          <",
        " title=",
        " .data=",
        ">\n        "
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        "\n    "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}












var UIStrings = {
    /**
     * @description Explanation for how to populate the autofill panel with data. Shown when there is
     * no data available.
     */ toStartDebugging: 'To start debugging autofill, use Chrome\'s autofill menu to fill an address form.',
    /**
     * @description Column header for column containing form field values
     */ value: 'Value',
    /**
     * @description Column header for column containing the predicted autofill categories
     */ predictedAutofillValue: 'Predicted autofill value',
    /**
     * @description Column header for column containing the name/label/id of form fields
     */ formField: 'Form field',
    /**
     * @description Tooltip for an adorner for form fields which have an autocomplete attribute
     * (http://go/mdn/HTML/Attributes/autocomplete)
     */ autocompleteAttribute: 'Autocomplete attribute',
    /**
     * @description Abbreviation of 'attribute'. Text content of an adorner for form fields which
     * have an autocomplete attribute (http://go/mdn/HTML/Attributes/autocomplete)
     */ attr: 'attr',
    /**
     * @description Tooltip for an adorner for form fields which don't have an autocomplete attribute
     * (http://go/mdn/HTML/Attributes/autocomplete) and for which Chrome used heuristics to deduce
     * the form field's autocomplete category.
     */ inferredByHeuristics: 'Inferred by heuristics',
    /**
     * @description Abbreviation of 'heuristics'. Text content of an adorner for form fields which
     * don't have an autocomplete attribute (http://go/mdn/HTML/Attributes/autocomplete) and for
     * which Chrome used heuristics to deduce the form field's autocomplete category.
     */ heur: 'heur',
    /**
     * @description Label for checkbox in the Autofill panel. If checked, this panel will open
     * automatically whenever a form is being autofilled.
     */ autoShow: 'Automatically open this panel',
    /**
     * @description Tooltip text for a checkbox label in the Autofill panel. If checked, this panel
     * will open automatically whenever a form is being autofilled.
     */ autoShowTooltip: 'Open the autofill panel automatically when an autofill activity is detected.',
    /**
     * @description Aria text for the section of the autofill view containing a preview of the autofilled address.
     */ addressPreview: 'Address preview',
    /**
     * @description Aria text for the section of the autofill view containing the info about the autofilled form fields.
     */ formInspector: 'Form inspector',
    /**
     *@description Link text for a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Link text for a hyperlink to webpage for leaving user feedback
     */ sendFeedback: 'Send feedback'
};
var AUTOFILL_INFO_URL = 'https://goo.gle/devtools-autofill-panel';
var AUTOFILL_FEEDBACK_URL = 'https://crbug.com/329106326';
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/autofill/AutofillView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _renderBound = /*#__PURE__*/ new WeakMap(), _autoOpenViewSetting = /*#__PURE__*/ new WeakMap(), _address = /*#__PURE__*/ new WeakMap(), _filledFields = /*#__PURE__*/ new WeakMap(), _matches = /*#__PURE__*/ new WeakMap(), _highlightedMatches = /*#__PURE__*/ new WeakMap(), _onPrimaryPageChanged = /*#__PURE__*/ new WeakSet(), _onAddressFormFilled = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet(), _onAutoOpenCheckboxChanged = /*#__PURE__*/ new WeakSet(), _renderAddress = /*#__PURE__*/ new WeakSet(), _onSpanMouseEnter = /*#__PURE__*/ new WeakSet(), _onSpanMouseLeave = /*#__PURE__*/ new WeakSet(), _renderFilledFields = /*#__PURE__*/ new WeakSet(), _onGridRowMouseEnter = /*#__PURE__*/ new WeakSet(), _onGridRowMouseLeave = /*#__PURE__*/ new WeakSet(), _buildReportRows = /*#__PURE__*/ new WeakSet(), _autofillTypeRenderer = /*#__PURE__*/ new WeakSet();
var AutofillView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(AutofillView, _superClass);
    var _super = _create_super(AutofillView);
    function AutofillView() {
        _class_call_check(this, AutofillView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onPrimaryPageChanged);
        _class_private_method_init(_assert_this_initialized(_this), _onAddressFormFilled);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _onAutoOpenCheckboxChanged);
        _class_private_method_init(_assert_this_initialized(_this), _renderAddress);
        _class_private_method_init(_assert_this_initialized(_this), _onSpanMouseEnter);
        _class_private_method_init(_assert_this_initialized(_this), _onSpanMouseLeave);
        _class_private_method_init(_assert_this_initialized(_this), _renderFilledFields);
        _class_private_method_init(_assert_this_initialized(_this), _onGridRowMouseEnter);
        _class_private_method_init(_assert_this_initialized(_this), _onGridRowMouseLeave);
        _class_private_method_init(_assert_this_initialized(_this), _buildReportRows);
        _class_private_method_init(_assert_this_initialized(_this), _autofillTypeRenderer);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderBound, {
            writable: true,
            value: _class_private_method_get(_this, _render, render).bind(_assert_this_initialized(_this))
        });
        _class_private_field_init(_assert_this_initialized(_this), _autoOpenViewSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _address, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _filledFields, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _matches, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightedMatches, {
            writable: true,
            value: []
        });
        _class_private_field_set(_assert_this_initialized(_this), _autoOpenViewSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('auto-open-autofill-view-on-event', true));
        return _this;
    }
    _create_class(AutofillView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles,
                    _autofillView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ];
                var autofillManager = _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_3__.AutofillManager.AutofillManager.instance();
                var formFilledEvent = autofillManager.getLastFilledAddressForm();
                if (formFilledEvent) {
                    var ref;
                    ref = formFilledEvent, _class_private_field_destructure(this, _address).value = ref.address, _class_private_field_destructure(this, _filledFields).value = ref.filledFields, _class_private_field_destructure(this, _matches).value = ref.matches, ref;
                }
                autofillManager.addEventListener("AddressFormFilled" /* AutofillManager.AutofillManager.Events.AddressFormFilled */ , _class_private_method_get(this, _onAddressFormFilled, onAddressFormFilled), this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, _class_private_method_get(this, _onPrimaryPageChanged, onPrimaryPageChanged), this);
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
            }
        }
    ]);
    return AutofillView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.WrappableComponent);
_define_property(AutofillView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.literal(_templateObject()));
function onPrimaryPageChanged() {
    _class_private_field_set(this, _address, '');
    _class_private_field_set(this, _filledFields, []);
    _class_private_field_set(this, _matches, []);
    _class_private_field_set(this, _highlightedMatches, []);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
}
function onAddressFormFilled(param) {
    var data = param.data;
    var ref;
    ref = data, _class_private_field_destructure(this, _address).value = ref.address, _class_private_field_destructure(this, _filledFields).value = ref.filledFields, _class_private_field_destructure(this, _matches).value = ref.matches, ref;
    _class_private_field_set(this, _highlightedMatches, []);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
}
function render() {
    return _render1.apply(this, arguments);
}
function _render1() {
    _render1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.isScheduledRender(this)) {
                throw new Error('AutofillView render was not scheduled');
            }
            if (!_class_private_field_get(this, _address) && !_class_private_field_get(this, _filledFields).length) {
                // Disabled until https://crbug.com/1079231 is fixed.
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject1(), i18nString(UIStrings.autoShowTooltip), _class_private_field_get(this, _autoOpenViewSetting).get(), _class_private_method_get(this, _onAutoOpenCheckboxChanged, onAutoOpenCheckboxChanged).bind(this), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toggle(_class_private_field_get(this, _autoOpenViewSetting).name).track({
                    change: true
                }), i18nString(UIStrings.autoShow), AUTOFILL_FEEDBACK_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('feedback').track({
                    click: true
                }), i18nString(UIStrings.sendFeedback), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('autofill-empty'), i18nString(UIStrings.toStartDebugging), AUTOFILL_INFO_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('learn-more').track({
                    click: true
                }), i18nString(UIStrings.learnMore)), _class_private_field_get(this, _shadow), {
                    host: this
                });
                // clang-format on
                return [
                    2
                ];
            }
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject2(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('autofill'), i18nString(UIStrings.addressPreview), i18nString(UIStrings.autoShowTooltip), _class_private_field_get(this, _autoOpenViewSetting).get(), _class_private_method_get(this, _onAutoOpenCheckboxChanged, onAutoOpenCheckboxChanged).bind(this), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toggle(_class_private_field_get(this, _autoOpenViewSetting).name).track({
                change: true
            }), i18nString(UIStrings.autoShow), AUTOFILL_FEEDBACK_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('feedback').track({
                click: true
            }), i18nString(UIStrings.sendFeedback), _class_private_method_get(this, _renderAddress, renderAddress).call(this), _class_private_method_get(this, _renderFilledFields, renderFilledFields).call(this)), _class_private_field_get(this, _shadow), {
                host: this
            });
            return [
                2
            ];
        });
    // clang-format on
    });
    return _render1.apply(this, arguments);
}
function onAutoOpenCheckboxChanged(e) {
    var checked = e.target.checked;
    _class_private_field_get(this, _autoOpenViewSetting).set(checked);
}
function renderAddress() {
    var _this = this;
    if (!_class_private_field_get(this, _address)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    var createSpan = function(startIndex, endIndex) {
        var textContentLines = _class_private_field_get(_this, _address).substring(startIndex, endIndex).split('\n');
        var templateLines = textContentLines.map(function(line, i) {
            return i === textContentLines.length - 1 ? line : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject3(), line);
        });
        var hasMatches = _class_private_field_get(_this, _matches).some(function(match) {
            return match.startIndex <= startIndex && match.endIndex > startIndex;
        });
        if (!hasMatches) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject4(), templateLines);
        }
        var spanClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.Directives.classMap({
            'matches-filled-field': hasMatches,
            highlighted: _class_private_field_get(_this, _highlightedMatches).some(function(match) {
                return match.startIndex <= startIndex && match.endIndex > startIndex;
            })
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject5(), spanClasses, function() {
            return _class_private_method_get(_this, _onSpanMouseEnter, onSpanMouseEnter).call(_this, startIndex);
        }, _class_private_method_get(_this, _onSpanMouseLeave, onSpanMouseLeave), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.item('matched-address-item').track({
            hover: true
        }), templateLines);
    // clang-format on
    };
    // Split the address string into multiple spans. Each span is connected to
    // 0 or more matches. This allows highlighting the corresponding grid rows
    // when hovering over a span. And vice versa finding the corresponding
    // spans to highlight when hovering over a grid line.
    var spans = [];
    var matchIndices = new Set([
        0,
        _class_private_field_get(this, _address).length
    ]);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _matches)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var match = _step.value;
            matchIndices.add(match.startIndex);
            matchIndices.add(match.endIndex);
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
    var sortedMatchIndices = Array.from(matchIndices).sort(function(a, b) {
        return a - b;
    });
    for(var i = 0; i < sortedMatchIndices.length - 1; i++){
        spans.push(createSpan(sortedMatchIndices[i], sortedMatchIndices[i + 1]));
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject6(), spans);
}
function onSpanMouseEnter(startIndex) {
    _class_private_field_set(this, _highlightedMatches, _class_private_field_get(this, _matches).filter(function(match) {
        return match.startIndex <= startIndex && match.endIndex > startIndex;
    }));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
}
function onSpanMouseLeave() {
    _class_private_field_set(this, _highlightedMatches, []);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
}
function renderFilledFields() {
    if (!_class_private_field_get(this, _filledFields).length) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
    }
    var gridData = {
        columns: [
            {
                id: 'name',
                title: i18nString(UIStrings.formField),
                widthWeighting: 50,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'autofill-type',
                title: i18nString(UIStrings.predictedAutofillValue),
                widthWeighting: 50,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'value',
                title: i18nString(UIStrings.value),
                widthWeighting: 50,
                hideable: false,
                visible: true,
                sortable: true
            },
            {
                id: 'filled-field-index',
                title: 'filledFieldIndex',
                widthWeighting: 50,
                hideable: true,
                visible: false
            }
        ],
        rows: _class_private_method_get(this, _buildReportRows, buildReportRows).call(this),
        striped: true
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject7(), i18nString(UIStrings.formInspector), _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName, _class_private_method_get(this, _onGridRowMouseEnter, onGridRowMouseEnter), _class_private_method_get(this, _onGridRowMouseLeave, onGridRowMouseLeave), gridData, _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName);
// clang-format on
}
function onGridRowMouseEnter(event) {
    var _SDK_FrameManager_FrameManager_instance_getFrame;
    var rowIndex = event.data.row.cells[3].value;
    if (typeof rowIndex !== 'number') {
        return;
    }
    _class_private_field_set(this, _highlightedMatches, _class_private_field_get(this, _matches).filter(function(match) {
        return match.filledFieldIndex === rowIndex;
    }));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
    var backendNodeId = _class_private_field_get(this, _filledFields)[rowIndex].fieldId;
    var target = (_SDK_FrameManager_FrameManager_instance_getFrame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance().getFrame(_class_private_field_get(this, _filledFields)[rowIndex].frameId)) === null || _SDK_FrameManager_FrameManager_instance_getFrame === void 0 ? void 0 : _SDK_FrameManager_FrameManager_instance_getFrame.resourceTreeModel().target();
    if (target) {
        var deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(target, backendNodeId);
        var domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
        if (deferredNode && domModel) {
            domModel.overlayModel().highlightInOverlay({
                deferredNode: deferredNode
            }, 'all');
        }
    }
}
function onGridRowMouseLeave() {
    _class_private_field_set(this, _highlightedMatches, []);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _renderBound));
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
}
function buildReportRows() {
    var _this = this;
    var highlightedGridRows = new Set(_class_private_field_get(this, _highlightedMatches).map(function(match) {
        return match.filledFieldIndex;
    }));
    return _class_private_field_get(this, _filledFields).map(function(field, index) {
        var fieldName = field.name || "#".concat(field.id);
        return {
            cells: [
                {
                    columnId: 'name',
                    value: "".concat(fieldName, " (").concat(field.htmlType, ")")
                },
                {
                    columnId: 'autofill-type',
                    value: field.autofillType,
                    renderer: function() {
                        return _class_private_method_get(_this, _autofillTypeRenderer, autofillTypeRenderer).call(_this, field.autofillType, field.fillingStrategy);
                    }
                },
                {
                    columnId: 'value',
                    value: '"'.concat(field.value, '"')
                },
                {
                    columnId: 'filled-field-index',
                    value: index
                }
            ],
            styles: _object_spread({
                'font-family': 'var(--monospace-font-family)',
                'font-size': 'var(--monospace-font-size)'
            }, highlightedGridRows.has(index) && {
                'background-color': 'var(--sys-color-state-hover-on-subtle)'
            })
        };
    });
}
function autofillTypeRenderer(autofillType, fillingStrategy) {
    var adornerContent = document.createElement('span');
    var adornerTitle = '';
    switch(fillingStrategy){
        case "autocompleteAttribute" /* Protocol.Autofill.FillingStrategy.AutocompleteAttribute */ :
            adornerContent.textContent = i18nString(UIStrings.attr);
            adornerTitle = i18nString(UIStrings.autocompleteAttribute);
            break;
        case "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ :
            adornerContent.textContent = i18nString(UIStrings.heur);
            adornerTitle = i18nString(UIStrings.inferredByHeuristics);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject9(), autofillType, adornerContent.textContent ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html(_templateObject8(), _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_4__.Adorner.Adorner.litTagName, adornerTitle, {
        name: fillingStrategy,
        content: adornerContent
    }) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing);
// clang-format on
}
customElements.define('devtools-autofill-view', AutofillView); //# sourceMappingURL=AutofillView.js.map


}),
"./panels/autofill/autofillView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nmain {\n  height: 100%;\n}\n\n.placeholder-container {\n  height: calc(100% - 29px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.placeholder {\n  font-size: 15px;\n  text-align: center;\n}\n\n.address {\n  padding: 10px;\n  margin-right: auto;\n}\n\n.filled-fields-grid {\n  border-top: 1px solid var(--sys-color-divider);\n  box-sizing: border-box;\n}\n\n.content-container {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n}\n\n.grid-wrapper {\n  flex-grow: 1;\n}\n\n.checkbox-label {\n  display: flex;\n  align-items: center;\n}\n\n.right-to-left {\n  display: flex;\n  flex-flow: row-reverse wrap;\n  justify-content: flex-end;\n}\n\n.label-container {\n  padding: 5px 5px 0;\n  display: flex;\n  align-items: flex-start;\n}\n\n.top-right-corner {\n  display: flex;\n  justify-content: flex-end;\n  padding: 5px;\n}\n\n.matches-filled-field {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.highlighted {\n  background-color: var(--sys-color-state-focus-select);\n}\n\n.link {\n  color: var(--sys-color-primary);\n  text-decoration-line: underline;\n}\n\n.feedback {\n  margin: 1.5px 3px 0 5px;\n}\n\n/*# sourceURL=autofillView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);