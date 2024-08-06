"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_StackTrace_js"], {
"./panels/application/components/StackTrace.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StackTrace: function() { return StackTrace; },
  StackTraceLinkButton: function() { return StackTraceLinkButton; },
  StackTraceRow: function() { return StackTraceRow; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _stackTraceLinkButton_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stackTraceLinkButton.css.js */ "./panels/application/components/stackTraceLinkButton.css.js");
/* harmony import */var _stackTraceRow_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stackTraceRow.css.js */ "./panels/application/components/stackTraceRow.css.js");
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
        "devtools-stack-trace-row"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="text-ellipsis">\xa0@\xa0',
        "</div>"
    ], [
        '<div class="text-ellipsis">\\xA0@\\xA0',
        "</div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <div class="stack-trace-row">\n              <div class="stack-trace-function-name text-ellipsis" title=',
        ">\n                ",
        '\n              </div>\n              <div class="stack-trace-source-location">\n                ',
        "\n              </div>\n            </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-stack-trace-link-button"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n      <div class="stack-trace-row">\n          <button class="link" @click=',
        ">\n            ",
        "\n          </button>\n        </div>\n    "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n          <",
        " data-stack-trace-row .data=",
        "></",
        ">"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n            <div>",
        "</div>\n          "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "\n      <",
        " data-stack-trace-row .data=",
        "></",
        ">\n      "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "devtools-resources-stack-trace"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n          <span>",
        "</span>\n        "
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        ">\n        jslog=",
        ">\n        </",
        ">\n      "
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}







var UIStrings = {
    /**
     *@description Error message stating that something went wrong when tring to render stack trace
     */ cannotRenderStackTrace: 'Cannot render stack trace',
    /**
     *@description A link to show more frames in the stack trace if more are available. Never 0.
     */ showSMoreFrames: '{n, plural, =1 {Show # more frame} other {Show # more frames}}',
    /**
     *@description A link to rehide frames that are by default hidden.
     */ showLess: 'Show less',
    /**
     *@description Label for a stack trace. If a frame is created programmatically (i.e. via JavaScript), there is a
     * stack trace for the line of code which caused the creation of the iframe. This is the stack trace we are showing here.
     */ creationStackTrace: 'Frame Creation `Stack Trace`'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/StackTrace.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _stackTraceRowItem = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var StackTraceRow = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StackTraceRow, HTMLElement1);
    var _super = _create_super(StackTraceRow);
    function StackTraceRow() {
        _class_call_check(this, StackTraceRow);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _stackTraceRowItem, {
            writable: true,
            value: null
        });
        return _this;
    }
    _create_class(StackTraceRow, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _stackTraceRowItem, data.stackTraceRowItem);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _stackTraceRow_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
            }
        }
    ]);
    return StackTraceRow;
}(_wrap_native_super(HTMLElement));
_define_property(StackTraceRow, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function render() {
    if (!_class_private_field_get(this, _stackTraceRowItem)) {
        return;
    }
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject2(), _class_private_field_get(this, _stackTraceRowItem).functionName, _class_private_field_get(this, _stackTraceRowItem).functionName, _class_private_field_get(this, _stackTraceRowItem).link ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject1(), _class_private_field_get(this, _stackTraceRowItem).link) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing), _class_private_field_get(this, _shadow), {
        host: this
    });
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _onShowAllClick = /*#__PURE__*/ new WeakMap(), _hiddenCallFramesCount = /*#__PURE__*/ new WeakMap(), _expandedView = /*#__PURE__*/ new WeakMap(), _render1 = /*#__PURE__*/ new WeakSet();
var StackTraceLinkButton = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StackTraceLinkButton, HTMLElement1);
    var _super = _create_super(StackTraceLinkButton);
    function StackTraceLinkButton() {
        _class_call_check(this, StackTraceLinkButton);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _onShowAllClick, {
            writable: true,
            value: function() {}
        });
        _class_private_field_init(_assert_this_initialized(_this), _hiddenCallFramesCount, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _expandedView, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(StackTraceLinkButton, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _onShowAllClick, data.onShowAllClick);
                _class_private_field_set(this, _hiddenCallFramesCount, data.hiddenCallFramesCount);
                _class_private_field_set(this, _expandedView, data.expandedView);
                _class_private_method_get(this, _render1, render1).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow1).adoptedStyleSheets = [
                    _stackTraceLinkButton_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        }
    ]);
    return StackTraceLinkButton;
}(_wrap_native_super(HTMLElement));
_define_property(StackTraceLinkButton, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject3()));
function render1() {
    var _this = this;
    if (!_class_private_field_get(this, _hiddenCallFramesCount)) {
        return;
    }
    var linkText = _class_private_field_get(this, _expandedView) ? i18nString(UIStrings.showLess) : i18nString(UIStrings.showSMoreFrames, {
        n: _class_private_field_get(this, _hiddenCallFramesCount)
    });
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject4(), function() {
        return _class_private_field_get(_this, _onShowAllClick).call(_this);
    }, linkText), _class_private_field_get(this, _shadow1), {
        host: this
    });
}
var _shadow2 = /*#__PURE__*/ new WeakMap(), _linkifier = /*#__PURE__*/ new WeakMap(), _stackTraceRows = /*#__PURE__*/ new WeakMap(), _showHidden = /*#__PURE__*/ new WeakMap(), _onStackTraceRowsUpdated = /*#__PURE__*/ new WeakSet(), _onToggleShowAllClick = /*#__PURE__*/ new WeakSet(), _render2 = /*#__PURE__*/ new WeakSet();
var StackTrace = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StackTrace, HTMLElement1);
    var _super = _create_super(StackTrace);
    function StackTrace() {
        _class_call_check(this, StackTrace);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onStackTraceRowsUpdated);
        _class_private_method_init(_assert_this_initialized(_this), _onToggleShowAllClick);
        _class_private_method_init(_assert_this_initialized(_this), _render2);
        _class_private_field_init(_assert_this_initialized(_this), _shadow2, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkifier, {
            writable: true,
            value: new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier()
        });
        _class_private_field_init(_assert_this_initialized(_this), _stackTraceRows, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _showHidden, {
            writable: true,
            value: false
        });
        return _this;
    }
    _create_class(StackTrace, [
        {
            key: "data",
            set: function set(data) {
                var frame = data.frame;
                var _frame_getCreationStackTraceData = frame.getCreationStackTraceData(), creationStackTrace = _frame_getCreationStackTraceData.creationStackTrace, creationStackTraceTarget = _frame_getCreationStackTraceData.creationStackTraceTarget;
                if (creationStackTrace) {
                    _class_private_field_set(this, _stackTraceRows, data.buildStackTraceRows(creationStackTrace, creationStackTraceTarget, _class_private_field_get(this, _linkifier), true, _class_private_method_get(this, _onStackTraceRowsUpdated, onStackTraceRowsUpdated).bind(this)));
                }
                _class_private_method_get(this, _render2, render2).call(this);
            }
        },
        {
            key: "createRowTemplates",
            value: function createRowTemplates() {
                var expandableRows = [];
                var hiddenCallFramesCount = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _stackTraceRows)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        if (_class_private_field_get(this, _showHidden) || !item.ignoreListHide) {
                            if ('functionName' in item) {
                                expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject5(), StackTraceRow.litTagName, {
                                    stackTraceRowItem: item
                                }, StackTraceRow.litTagName));
                            }
                            if ('asyncDescription' in item) {
                                expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject6(), item.asyncDescription));
                            }
                        }
                        if ('functionName' in item && item.ignoreListHide) {
                            hiddenCallFramesCount++;
                        }
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
                if (hiddenCallFramesCount) {
                    // Disabled until https://crbug.com/1079231 is fixed.
                    // clang-format off
                    expandableRows.push(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject7(), StackTraceLinkButton.litTagName, {
                        onShowAllClick: _class_private_method_get(this, _onToggleShowAllClick, onToggleShowAllClick).bind(this),
                        hiddenCallFramesCount: hiddenCallFramesCount,
                        expandedView: _class_private_field_get(this, _showHidden)
                    }, StackTraceLinkButton.litTagName));
                // clang-format on
                }
                return expandableRows;
            }
        }
    ]);
    return StackTrace;
}(_wrap_native_super(HTMLElement));
_define_property(StackTrace, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject8()));
function onStackTraceRowsUpdated(stackTraceRows) {
    _class_private_field_set(this, _stackTraceRows, stackTraceRows);
    _class_private_method_get(this, _render2, render2).call(this);
}
function onToggleShowAllClick() {
    _class_private_field_set(this, _showHidden, !_class_private_field_get(this, _showHidden));
    _class_private_method_get(this, _render2, render2).call(this);
}
function render2() {
    if (!_class_private_field_get(this, _stackTraceRows).length) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject9(), i18nString(UIStrings.cannotRenderStackTrace)), _class_private_field_get(this, _shadow2), {
            host: this
        });
        return;
    }
    var expandableRows = this.createRowTemplates();
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject10(), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName, {
        rows: expandableRows,
        title: i18nString(UIStrings.creationStackTrace)
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.tree(), _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_1__.ExpandableList.ExpandableList.litTagName), _class_private_field_get(this, _shadow2), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-stack-trace-row', StackTraceRow);
customElements.define('devtools-stack-trace-link-button', StackTraceLinkButton);
customElements.define('devtools-resources-stack-trace', StackTrace); //# sourceMappingURL=StackTrace.js.map


}),
"./panels/application/components/stackTraceLinkButton.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\nbutton.link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n  border: none;\n  background: none;\n  font-family: inherit;\n  font-size: inherit;\n}\n\n/*# sourceURL=stackTraceLinkButton.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/application/components/stackTraceRow.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.stack-trace-row {\n  display: flex;\n}\n\n.stack-trace-function-name {\n  width: 100px;\n}\n\n.stack-trace-source-location {\n  display: flex;\n  overflow: hidden;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.stack-trace-source-location .text-ellipsis {\n  padding-right: 2px;\n}\n\n.ignore-list-link {\n  opacity: 60%;\n}\n\n.link,\n.devtools-link {\n  color: var(--sys-color-primary);\n  text-decoration: underline;\n  cursor: pointer;\n  outline-offset: 2px;\n  border: none;\n  background: none;\n}\n\n/*# sourceURL=stackTraceRow.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/expandable_list/expandable_list.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExpandableList: function() { return /* reexport module object */ _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ExpandableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpandableList.js */ "./ui/components/expandable_list/ExpandableList.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=expandable_list.js.map


}),

}]);