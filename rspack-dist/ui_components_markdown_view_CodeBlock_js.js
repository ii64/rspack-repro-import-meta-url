"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_CodeBlock_js"], {
"./ui/components/markdown_view/CodeBlock.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: function() { return CodeBlock; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/text_editor/text_editor.js */ "./ui/components/text_editor/text_editor.js");
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _codeBlock_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./codeBlock.css.js */ "./ui/components/markdown_view/codeBlock.css.js");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
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
        "devtools-code-block"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="toolbar" jslog=',
        '>\n        <div class="lang">',
        '</div>\n        <div class="copy">\n          <button class=',
        "\n            title=",
        "\n            jslog=",
        "\n            @click=",
        ">\n            <",
        "\n              .data=",
        "\n            >\n            </",
        ">\n            <span>",
        "</span>\n          </button>\n        </div>\n      </div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<p class="notice">\n          <x-link class="link" href="https://support.google.com/legal/answer/13505487" jslog=',
        ">\n            ",
        "\n         </x-link>\n        </p>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '<div class="codeblock" jslog=',
        ">\n      ",
        '\n      <div class="editor-wrapper">\n        <',
        " .state=",
        "></",
        ">\n        ",
        "\n      </div>\n    </div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
 // for x-link








var UIStrings = {
    /**
     * @description The title of the button to copy the codeblock from a Markdown view.
     */ copy: 'Copy code',
    /**
     * @description The title of the button after it was pressed and the text was copied to clipboard.
     */ copied: 'Copied to clipboard',
    /**
     * @description Disclaimer shown in the code blocks.
     */ disclaimer: 'Use code snippets with caution'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('ui/components/markdown_view/CodeBlock.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _code = /*#__PURE__*/ new WeakMap(), _codeLang = /*#__PURE__*/ new WeakMap(), _copyTimeout = /*#__PURE__*/ new WeakMap(), _timer = /*#__PURE__*/ new WeakMap(), _copied = /*#__PURE__*/ new WeakMap(), _editorState = /*#__PURE__*/ new WeakMap(), _languageConf = /*#__PURE__*/ new WeakMap(), /**
     * Whether to display a notice "​​Use code snippets with caution" in code
     * blocks.
     */ _displayNotice = /*#__PURE__*/ new WeakMap(), /**
     * Whether to display the toolbar on the top.
     */ _displayToolbar = /*#__PURE__*/ new WeakMap(), _onCopy = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var CodeBlock = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CodeBlock, HTMLElement1);
    var _super = _create_super(CodeBlock);
    function CodeBlock() {
        _class_call_check(this, CodeBlock);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onCopy);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _code, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _codeLang, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _copyTimeout, {
            writable: true,
            value: 1000
        });
        _class_private_field_init(_assert_this_initialized(_this), _timer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _copied, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _editorState, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _languageConf, {
            writable: true,
            value: new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment()
        });
        _class_private_field_init(_assert_this_initialized(_this), _displayNotice, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _displayToolbar, {
            writable: true,
            value: true
        });
        return _this;
    }
    _create_class(CodeBlock, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _codeBlock_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "code",
            get: function get() {
                return _class_private_field_get(this, _code);
            },
            set: function set(value) {
                _class_private_field_set(this, _code, value);
                _class_private_field_set(this, _editorState, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
                    doc: _class_private_field_get(this, _code),
                    extensions: [
                        _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.Config.baseConfiguration(_class_private_field_get(this, _code)),
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorState.readOnly.of(true),
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.lineWrapping,
                        _class_private_field_get(this, _languageConf).of(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript())
                    ]
                }));
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "codeLang",
            set: function set(value) {
                _class_private_field_set(this, _codeLang, value);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "timeout",
            set: function set(value) {
                _class_private_field_set(this, _copyTimeout, value);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "displayNotice",
            set: function set(value) {
                _class_private_field_set(this, _displayNotice, value);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "displayToolbar",
            set: function set(value) {
                _class_private_field_set(this, _displayToolbar, value);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return CodeBlock;
}(_wrap_native_super(HTMLElement));
_define_property(CodeBlock, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal(_templateObject()));
function onCopy() {
    var _this = this;
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(_class_private_field_get(this, _code));
    _class_private_field_set(this, _copied, true);
    _class_private_method_get(this, _render, render).call(this);
    clearTimeout(_class_private_field_get(this, _timer));
    _class_private_field_set(this, _timer, setTimeout(function() {
        _class_private_field_set(_this, _copied, false);
        _class_private_method_get(_this, _render, render).call(_this);
    }, _class_private_field_get(this, _copyTimeout)));
}
function render() {
    var _class_private_field_get_querySelector, _$_class_private_field_get;
    var copyButtonClasses = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.classMap({
        copied: _class_private_field_get(this, _copied),
        'copy-button': true
    });
    // clang-format off
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject3(), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('code'), _class_private_field_get(this, _displayToolbar) ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject1(), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar(), _class_private_field_get(this, _codeLang), copyButtonClasses, i18nString(UIStrings.copy), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('copy').track({
        click: true
    }), _class_private_method_get(this, _onCopy, onCopy), _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, {
        iconName: 'copy',
        width: '16px',
        height: '16px',
        color: 'var(--copy-icon-color, var(--icon-default))'
    }, _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, _class_private_field_get(this, _copied) ? i18nString(UIStrings.copied) : i18nString(UIStrings.copy)) : '', _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName, _class_private_field_get(this, _editorState), _ui_components_text_editor_text_editor_js__WEBPACK_IMPORTED_MODULE_4__.TextEditor.TextEditor.litTagName, _class_private_field_get(this, _displayNotice) ? _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject2(), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('code-disclaimer').track({
        click: true
    }), i18nString(UIStrings.disclaimer)) : _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.nothing), _class_private_field_get(this, _shadow), {
        host: this
    });
    // clang-format on
    var editor = (_$_class_private_field_get = _class_private_field_get(this, _shadow)) === null || _$_class_private_field_get === void 0 ? void 0 : (_class_private_field_get_querySelector = _$_class_private_field_get.querySelector('devtools-text-editor')) === null || _class_private_field_get_querySelector === void 0 ? void 0 : _class_private_field_get_querySelector.editor;
    if (!editor) {
        return;
    }
    var language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.html.html({
        autoCloseTags: false,
        selfClosingTags: true
    });
    switch(_class_private_field_get(this, _codeLang)){
        case 'js':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript();
            break;
        case 'ts':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript({
                typescript: true
            });
            break;
        case 'jsx':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.javascript.javascript({
                jsx: true
            });
            break;
        case 'css':
            language = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.css.css();
            break;
    }
    editor.dispatch({
        effects: _class_private_field_get(this, _languageConf).reconfigure(language)
    });
}
customElements.define('devtools-code-block', CodeBlock); //# sourceMappingURL=CodeBlock.js.map


}),
"./ui/components/markdown_view/codeBlock.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\ncode {\n  color: var(--sys-color-on-surface);\n  font-size: 11px;\n  user-select: text;\n  cursor: text;\n  background: var(--sys-color-surface1);\n}\n\n.codeblock {\n  margin-bottom: 8px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  background-color: var(--sys-color-surface5);\n  color: var(--sys-color-on-surface);\n}\n\n.codeblock .toolbar {\n  box-sizing: border-box;\n  display: flex;\n  height: 28px;\n  flex-direction: row;\n  padding: 0 11px;\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n}\n\n.codeblock .editor-wrapper {\n  color: var(--sys-color-on-surface);\n  background: var(--sys-color-surface1);\n  padding: 10px 5px;\n}\n\n.codeblock .lang {\n  padding: 6px 0;\n  flex: 1;\n}\n\n.codeblock .copy {\n  padding: 4px 0;\n  align-items: center;\n  display: flex;\n}\n\n.codeblock .copy-button {\n  margin: 0;\n  padding: 0;\n  background: transparent;\n  border: none;\n  font-size: 11px;\n  line-height: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 4px;\n}\n\n.codeblock .copy-button.copied {\n  color: var(--sys-color-primary);\n\n  --copy-icon-color: var(--sys-color-primary);\n}\n\n.notice {\n  margin-top: 3px;\n  margin-left: 3px;\n\n  .link {\n    color: var(--sys-color-primary);\n    text-decoration-line: underline;\n  }\n}\n\n/*# sourceURL=codeBlock.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);