"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_SharedStorageMetadataView_js"], {
"./panels/application/components/SharedStorageMetadataView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageMetadataView: function() { return SharedStorageMetadataView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _sharedStorageMetadataView_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedStorageMetadataView.css.js */ "./panels/application/components/sharedStorageMetadataView.css.js");
/* harmony import */var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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
        "",
        "<",
        ' name="info" title=',
        "></",
        ">"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "",
        "",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-shared-storage-metadata-view"
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
function _templateObject5() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
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
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}






var UIStrings = {
    /**
     *@description Text in SharedStorage Metadata View of the Application panel
     */ sharedStorage: 'Shared storage',
    /**
     *@description The time when the origin most recently created its shared storage database
     */ creation: 'Creation Time',
    /**
     *@description The placeholder text if there is no creation time because the origin is not yet using shared storage.
     */ notYetCreated: 'Not yet created',
    /**
     *@description The number of entries currently in the origin's database
     */ numEntries: 'Number of Entries',
    /**
     *@description The number of bits remaining in the origin's shared storage privacy budget
     */ entropyBudget: 'Entropy Budget for Fenced Frames',
    /**
     *@description Hover text for `entropyBudget` giving a more detailed explanation
     */ budgetExplanation: 'Remaining data leakage allowed within a 24-hour period for this origin in bits of entropy',
    /**
     *@description Label for a button which when clicked causes the budget to be reset to the max.
     */ resetBudget: 'Reset Budget',
    /**
     *@description The number of bytes used by entries currently in the origin's database
     */ numBytesUsed: 'Number of Bytes Used'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/SharedStorageMetadataView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _sharedStorageMetadataGetter = /*#__PURE__*/ new WeakMap(), _creationTime = /*#__PURE__*/ new WeakMap(), _length = /*#__PURE__*/ new WeakMap(), _bytesUsed = /*#__PURE__*/ new WeakMap(), _remainingBudget = /*#__PURE__*/ new WeakMap(), _resetBudget = /*#__PURE__*/ new WeakSet(), _renderDateForCreationTime = /*#__PURE__*/ new WeakSet(), _renderResetBudgetButton = /*#__PURE__*/ new WeakSet();
var SharedStorageMetadataView = /*#__PURE__*/ function(StorageMetadataView) {
    "use strict";
    _inherits(SharedStorageMetadataView, StorageMetadataView);
    var _super = _create_super(SharedStorageMetadataView);
    function SharedStorageMetadataView(sharedStorageMetadataGetter, owner) {
        _class_call_check(this, SharedStorageMetadataView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _resetBudget);
        _class_private_method_init(_assert_this_initialized(_this), _renderDateForCreationTime);
        _class_private_method_init(_assert_this_initialized(_this), _renderResetBudgetButton);
        _class_private_field_init(_assert_this_initialized(_this), _sharedStorageMetadataGetter, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _creationTime, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _length, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _bytesUsed, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _remainingBudget, {
            writable: true,
            value: 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _sharedStorageMetadataGetter, sharedStorageMetadataGetter);
        _this.classList.add('overflow-auto');
        _this.setStorageKey(owner);
        return _this;
    }
    _create_class(SharedStorageMetadataView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.getShadow().adoptedStyleSheets = [
                    _sharedStorageMetadataView_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
            }
        },
        {
            key: "getTitle",
            value: function getTitle() {
                return i18nString(UIStrings.sharedStorage);
            }
        },
        {
            key: "renderReportContent",
            value: function renderReportContent() {
                var _this = this;
                var _this1 = this, _superprop_get_renderReportContent = function() {
                    return _get(_get_prototype_of(SharedStorageMetadataView.prototype), "renderReportContent", _this);
                };
                return _async_to_generator(function() {
                    var metadata, _metadata_creationTime, _metadata_length, _metadata_bytesUsed, _metadata_remainingBudget, _, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this1, _sharedStorageMetadataGetter).getMetadata()
                                ];
                            case 1:
                                metadata = _state.sent();
                                _class_private_field_set(_this1, _creationTime, (_metadata_creationTime = metadata === null || metadata === void 0 ? void 0 : metadata.creationTime) !== null && _metadata_creationTime !== void 0 ? _metadata_creationTime : null);
                                _class_private_field_set(_this1, _length, (_metadata_length = metadata === null || metadata === void 0 ? void 0 : metadata.length) !== null && _metadata_length !== void 0 ? _metadata_length : 0);
                                _class_private_field_set(_this1, _bytesUsed, (_metadata_bytesUsed = metadata === null || metadata === void 0 ? void 0 : metadata.bytesUsed) !== null && _metadata_bytesUsed !== void 0 ? _metadata_bytesUsed : 0);
                                _class_private_field_set(_this1, _remainingBudget, (_metadata_remainingBudget = metadata === null || metadata === void 0 ? void 0 : metadata.remainingBudget) !== null && _metadata_remainingBudget !== void 0 ? _metadata_remainingBudget : 0);
                                _ = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
                                _tmp = [
                                    _templateObject2()
                                ];
                                return [
                                    4,
                                    _superprop_get_renderReportContent().call(_this1)
                                ];
                            case 2:
                                // Disabled until https://crbug.com/1079231 is fixed.
                                // clang-format off
                                return [
                                    2,
                                    _.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__, _tmp.concat([
                                        _state.sent(),
                                        _this1.key(i18nString(UIStrings.creation)),
                                        _this1.value(_class_private_method_get(_this1, _renderDateForCreationTime, renderDateForCreationTime).call(_this1)),
                                        _this1.key(i18nString(UIStrings.numEntries)),
                                        _this1.value(String(_class_private_field_get(_this1, _length))),
                                        _this1.key(i18nString(UIStrings.numBytesUsed)),
                                        _this1.value(String(_class_private_field_get(_this1, _bytesUsed))),
                                        _this1.key(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject(), i18nString(UIStrings.entropyBudget), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, i18nString(UIStrings.budgetExplanation), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName)),
                                        _this1.value(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject1(), _class_private_field_get(_this1, _remainingBudget), _class_private_method_get(_this1, _renderResetBudgetButton, renderResetBudgetButton).call(_this1)))
                                    ]))
                                ];
                        }
                    });
                // clang-format on
                })();
            }
        }
    ]);
    return SharedStorageMetadataView;
}(_StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_5__.StorageMetadataView);
_define_property(SharedStorageMetadataView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject3()));
function resetBudget() {
    return _resetBudget1.apply(this, arguments);
}
function _resetBudget1() {
    _resetBudget1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_field_get(this, _sharedStorageMetadataGetter).resetBudget()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        this.render()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _resetBudget1.apply(this, arguments);
}
function renderDateForCreationTime() {
    if (!_class_private_field_get(this, _creationTime)) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject4(), i18nString(UIStrings.notYetCreated));
    }
    var date = new Date(1e3 * _class_private_field_get(this, _creationTime));
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject5(), date.toLocaleString());
}
function renderResetBudgetButton() {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject6(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, 'undo', 'reset-entropy-budget', "SMALL" /* Buttons.Button.Size.SMALL */ , i18nString(UIStrings.resetBudget), "icon" /* Buttons.Button.Variant.ICON */ , _class_private_method_get(this, _resetBudget, resetBudget).bind(this), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName);
// clang-format on
}
customElements.define('devtools-shared-storage-metadata-view', SharedStorageMetadataView); //# sourceMappingURL=SharedStorageMetadataView.js.map


}),
"./panels/application/components/sharedStorageMetadataView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\ndevtools-icon {\n  vertical-align: text-bottom;\n  margin-left: 2px;\n  width: 16px;\n  height: 16px;\n}\n\ndevtools-button {\n  vertical-align: sub;\n}\n\n/*# sourceURL=sharedStorageMetadataView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);