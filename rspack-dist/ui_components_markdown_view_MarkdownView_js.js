"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownView_js"], {
"./ui/components/markdown_view/MarkdownView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MarkdownInsightRenderer: function() { return MarkdownInsightRenderer; },
  MarkdownLitRenderer: function() { return MarkdownLitRenderer; },
  MarkdownView: function() { return MarkdownView; }
});
/* harmony import */var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */var _markdownView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markdownView.css.js */ "./ui/components/markdown_view/markdownView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        "devtools-markdown-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      <div class='message'>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<h1>",
        "</h1>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<h2>",
        "</h2>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "<h3>",
        "</h3>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<h4>",
        "</h4>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "<h5>",
        "</h5>"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<h6>",
        "</h6>"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "<",
        "\n      .code=",
        "\n      .codeLang=",
        ">\n    </",
        ">"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "<p>",
        ""
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "<ul>",
        "</ul>"
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "<li>",
        ""
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<code>",
        "</code>"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        ""
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "<",
        " .data=",
        "></",
        ">"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "<",
        " .data=",
        "></",
        ">"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "<strong>",
        "</strong>"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "<em>",
        "</em>"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "<strong>",
        "</strong>"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "<",
        "\n          .code=",
        "\n          .codeLang=",
        "\n          .displayNotice=",
        ">\n        </",
        ">"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}






var html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html;
var render = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render;
var _shadow = /*#__PURE__*/ new WeakMap(), _tokenData = /*#__PURE__*/ new WeakMap(), _renderer = /*#__PURE__*/ new WeakMap(), _update = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var MarkdownView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(MarkdownView, HTMLElement1);
    var _super = _create_super(MarkdownView);
    function MarkdownView() {
        _class_call_check(this, MarkdownView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _update);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _tokenData, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderer, {
            writable: true,
            value: new MarkdownLitRenderer()
        });
        return _this;
    }
    _create_class(MarkdownView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _markdownView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _tokenData, data.tokens);
                if (data.renderer) {
                    _class_private_field_set(this, _renderer, data.renderer);
                }
                _class_private_method_get(this, _update, update).call(this);
            }
        }
    ]);
    return MarkdownView;
}(_wrap_native_super(HTMLElement));
_define_property(MarkdownView, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject()));
function update() {
    _class_private_method_get(this, _render, render1).call(this);
}
function render1() {
    var _this = this;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _class_private_field_get(this, _tokenData).map(function(token) {
        return _class_private_field_get(_this, _renderer).renderToken(token);
    })), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-markdown-view', MarkdownView);
/**
 * Default renderer is used for the IssuesPanel and allows only well-known images and links to be embedded.
 */ var MarkdownLitRenderer = /*#__PURE__*/ function() {
    "use strict";
    function MarkdownLitRenderer() {
        _class_call_check(this, MarkdownLitRenderer);
    }
    _create_class(MarkdownLitRenderer, [
        {
            key: "renderChildTokens",
            value: function renderChildTokens(token) {
                var _this = this;
                if ('tokens' in token && token.tokens) {
                    return token.tokens.map(function(token) {
                        return _this.renderToken(token);
                    });
                }
                throw new Error('Tokens not found');
            }
        },
        {
            /**
     * Unescape will get rid of the escaping done by Marked to avoid double escaping due to escaping it also with Lit-html.
     * Table taken from: front_end/third_party/marked/package/src/helpers.js
     */ key: "unescape",
            value: function unescape(text) {
                var escapeReplacements = new Map([
                    [
                        '&amp;',
                        '&'
                    ],
                    [
                        '&lt;',
                        '<'
                    ],
                    [
                        '&gt;',
                        '>'
                    ],
                    [
                        '&quot;',
                        '"'
                    ],
                    [
                        '&#39;',
                        '\''
                    ]
                ]);
                return text.replace(/&(amp|lt|gt|quot|#39);/g, function(matchedString) {
                    var replacement = escapeReplacements.get(matchedString);
                    return replacement ? replacement : matchedString;
                });
            }
        },
        {
            key: "renderText",
            value: function renderText(token) {
                if ('tokens' in token && token.tokens) {
                    return html(_templateObject2(), this.renderChildTokens(token));
                }
                // Due to unescaping, unescaped html entities (see escapeReplacements' keys) will be rendered
                // as their corresponding symbol while the rest will be rendered as verbatim.
                // Marked's escape function can be found in front_end/third_party/marked/package/src/helpers.js
                return html(_templateObject3(), this.unescape('text' in token ? token.text : ''));
            }
        },
        {
            key: "renderHeading",
            value: function renderHeading(heading) {
                switch(heading.depth){
                    case 1:
                        return html(_templateObject4(), this.renderText(heading));
                    case 2:
                        return html(_templateObject5(), this.renderText(heading));
                    case 3:
                        return html(_templateObject6(), this.renderText(heading));
                    case 4:
                        return html(_templateObject7(), this.renderText(heading));
                    case 5:
                        return html(_templateObject8(), this.renderText(heading));
                    default:
                        return html(_templateObject9(), this.renderText(heading));
                }
            }
        },
        {
            key: "renderCodeBlock",
            value: function renderCodeBlock(token) {
                // clang-format off
                return html(_templateObject10(), _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName, this.unescape(token.text), token.lang, _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName);
            // clang-format one
            }
        },
        {
            key: "templateForToken",
            value: function templateForToken(token) {
                var _this = this;
                switch(token.type){
                    case 'paragraph':
                        return html(_templateObject11(), this.renderChildTokens(token));
                    case 'list':
                        return html(_templateObject12(), token.items.map(function(token) {
                            return _this.renderToken(token);
                        }));
                    case 'list_item':
                        return html(_templateObject13(), this.renderChildTokens(token));
                    case 'text':
                        return this.renderText(token);
                    case 'codespan':
                        return html(_templateObject14(), this.unescape(token.text));
                    case 'code':
                        return this.renderCodeBlock(token);
                    case 'space':
                        return html(_templateObject15());
                    case 'link':
                        return html(_templateObject16(), _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLink.litTagName, {
                            key: token.href,
                            title: token.text
                        }, _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLink.litTagName);
                    case 'image':
                        return html(_templateObject17(), _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.litTagName, {
                            key: token.href,
                            title: token.text
                        }, _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_3__.MarkdownImage.litTagName);
                    case 'heading':
                        return this.renderHeading(token);
                    case 'strong':
                        return html(_templateObject18(), this.renderText(token));
                    case 'em':
                        return html(_templateObject19(), this.renderText(token));
                    default:
                        return null;
                }
            }
        },
        {
            key: "renderToken",
            value: function renderToken(token) {
                var template = this.templateForToken(token);
                if (template === null) {
                    throw new Error("Markdown token type '".concat(token.type, "' not supported."));
                }
                return template;
            }
        }
    ]);
    return MarkdownLitRenderer;
}();
/**
 * Renderer used in Console Insights and Freestyler for the text generated by an LLM.
 */ var MarkdownInsightRenderer = /*#__PURE__*/ function(MarkdownLitRenderer) {
    "use strict";
    _inherits(MarkdownInsightRenderer, MarkdownLitRenderer);
    var _super = _create_super(MarkdownInsightRenderer);
    function MarkdownInsightRenderer() {
        _class_call_check(this, MarkdownInsightRenderer);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownInsightRenderer, [
        {
            key: "renderToken",
            value: function renderToken(token) {
                var template = this.templateForToken(token);
                if (template === null) {
                    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject20(), token.raw);
                }
                return template;
            }
        },
        {
            key: "templateForToken",
            value: function templateForToken(token) {
                switch(token.type){
                    case 'heading':
                        return html(_templateObject21(), this.renderText(token));
                    case 'link':
                    case 'image':
                        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject22(), _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.XLink.XLink.create(token.href, token.text, undefined, undefined, 'link-in-explanation'));
                    case 'code':
                        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject23(), _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName, this.unescape(token.text), token.lang, true, _CodeBlock_js__WEBPACK_IMPORTED_MODULE_2__.CodeBlock.litTagName);
                }
                return _get(_get_prototype_of(MarkdownInsightRenderer.prototype), "templateForToken", this).call(this, token);
            }
        }
    ]);
    return MarkdownInsightRenderer;
} //# sourceMappingURL=MarkdownView.js.map
(MarkdownLitRenderer);


}),
"./ui/components/markdown_view/markdownView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.message {\n  line-height: 18px;\n  font-size: 12px;\n  color: var(--override-markdown-view-message-color, --sys-color-token-subtle);\n  margin-bottom: 4px;\n  user-select: text;\n}\n\n.message p {\n  margin-bottom: 10px;\n  margin-block-start: 2px;\n}\n\n.message ul {\n  list-style-type: none;\n  padding-inline-start: 1em;\n}\n\n.message ul ul {\n  padding-inline-start: 19px;\n}\n\n.message li {\n  margin-top: 8px;\n  display: list-item;\n  list-style-type: disc;\n}\n\n.message code {\n  color: var(--sys-color-on-surface);\n  font-size: 11px;\n  user-select: text;\n  cursor: text;\n  background: var(--sys-color-surface1);\n}\n\n.devtools-link {\n  color: var(--sys-color-primary);\n  outline-offset: 2px;\n  text-decoration: none;\n}\n\n.devtools-link:hover {\n  text-decoration: underline;\n}\n\n/*# sourceURL=markdownView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);