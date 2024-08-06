"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownView_test_js"], {
"./ui/components/markdown_view/MarkdownView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<code>overriden</code>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}





function getFakeToken(token) {
    return token;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('MarkdownView', function() {
    describe('tokenizer', function() {
        it('tokenizers links in single quotes', function() {
            assert.deepStrictEqual(_third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer('\'https://example.com\''), [
                {
                    'raw': '\'https://example.com\'',
                    'text': '\'https://example.com\'',
                    'tokens': [
                        {
                            'raw': '\'',
                            'text': '&#39;',
                            'type': 'text'
                        },
                        {
                            'href': 'https://example.com',
                            'raw': 'https://example.com',
                            'text': 'https://example.com',
                            'tokens': [
                                {
                                    'raw': 'https://example.com',
                                    'text': 'https://example.com',
                                    'type': 'text'
                                }
                            ],
                            'type': 'link'
                        },
                        {
                            'raw': '\'',
                            'text': '&#39;',
                            'type': 'text'
                        }
                    ],
                    'type': 'paragraph'
                }
            ]);
        });
    });
    describe('MarkdownLitRenderer renderToken', function() {
        var renderer = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownLitRenderer();
        it('wraps paragraph tokens in <p> tags', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'paragraph',
                tokens: []
            }));
            assert.deepStrictEqual(renderResult.strings.raw, [
                '<p>',
                ''
            ]);
        });
        it('wraps an unordered list token in <ul> tags', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'list',
                items: []
            }));
            assert.deepStrictEqual(renderResult.strings.raw, [
                '<ul>',
                '</ul>'
            ]);
        });
        it('wraps list items in <li> tags', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'list_item',
                tokens: []
            }));
            assert.deepStrictEqual(renderResult.strings.raw, [
                '<li>',
                ''
            ]);
        });
        it('wraps a codespan token in <code> tags', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'codespan',
                text: 'const foo = 42;'
            }));
            assert.deepStrictEqual(renderResult.strings.raw, [
                '<code>',
                '</code>'
            ]);
            assert.deepStrictEqual(renderResult.values, [
                'const foo = 42;'
            ]);
        });
        it('renders childless text tokens as-is', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'text',
                text: 'Simple text token'
            }));
            assert.deepStrictEqual(renderResult.values, [
                'Simple text token'
            ]);
        });
        it('renders nested text tokens correctly', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'text',
                text: 'This text should not be rendered. Only the subtokens!',
                tokens: [
                    getFakeToken({
                        type: 'text',
                        text: 'Nested raw text'
                    }),
                    getFakeToken({
                        type: 'codespan',
                        text: 'and a nested codespan to boot'
                    })
                ]
            }));
            var renderedParts = renderResult.values[0];
            assert.strictEqual(renderedParts.length, 2);
            assert.deepStrictEqual(renderedParts[0].values, [
                'Nested raw text'
            ]);
            assert.deepStrictEqual(renderedParts[1].values, [
                'and a nested codespan to boot'
            ]);
        });
        it('throws an error for invalid or unsupported token types', function() {
            assert.throws(function() {
                return renderer.renderToken(getFakeToken({
                    type: 'no_way_this_is_a_valid_markdown_token'
                }));
            });
        });
        it('renders link with valid key', function() {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLinksMap.markdownLinks.set('exampleLink', 'https://web.dev/');
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'link',
                text: 'learn more',
                href: 'exampleLink'
            })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-link'));
        });
        it('throws an error if invalid link key is provided', function() {
            assert.throws(function() {
                return _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownLinksMap.getMarkdownLink('testErrorLink');
            });
        });
        it('renders icon with valid key', function() {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.markdownImages.set('testExampleImage', {
                src: 'devices',
                isIcon: true
            });
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'image',
                text: 'phone',
                href: 'testExampleImage'
            })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-image'));
        });
        it('renders image with valid key', function() {
            _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.markdownImages.set('exampleImage', {
                src: 'Images/phone-logo.png',
                isIcon: false
            });
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'image',
                text: 'phone',
                href: 'exampleImage'
            })).strings.join('');
            assert.isTrue(renderResult.includes('<devtools-markdown-image'));
        });
        it('throws an error if invalid image key is provided', function() {
            assert.throws(function() {
                return _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownImagesMap.getMarkdownImage('testErrorImageLink');
            });
        });
        it('renders a heading correctly', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'heading',
                text: 'a heading text',
                depth: 3
            })).strings.join('');
            assert.isTrue(renderResult.includes('<h3'));
        });
        it('renders strong correctly', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'strong',
                text: 'a strong text'
            })).strings.join('');
            assert.isTrue(renderResult.includes('<strong'));
        });
        it('renders em correctly', function() {
            var renderResult = renderer.renderToken(getFakeToken({
                type: 'em',
                text: 'em text'
            })).strings.join('');
            assert.isTrue(renderResult.includes('<em'));
        });
    });
    describe('MarkdownInsightRenderer renderToken', function() {
        var renderer = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownInsightRenderer();
        it('renders link as an x-link', function() {
            var result = renderer.renderToken({
                type: 'link',
                text: 'learn more',
                href: 'exampleLink'
            });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders images as an x-link', function() {
            var result = renderer.renderToken({
                type: 'image',
                text: 'learn more',
                href: 'exampleLink'
            });
            assert(result.values[0].tagName === 'X-LINK');
        });
        it('renders headers as a strong element', function() {
            var result = renderer.renderToken({
                type: 'heading',
                text: 'learn more'
            });
            assert(result.strings.join('').includes('<strong>'));
        });
        it('renders unsupported tokens', function() {
            var result = renderer.renderToken({
                type: 'html',
                raw: '<!DOCTYPE html>'
            });
            assert(result.values.join('').includes('<!DOCTYPE html>'));
        });
    });
    var paragraphText = 'Single paragraph with a sentence of text and some list items to test that the component works end-to-end.';
    var listItemTexts = [
        'Simple unordered list item 1',
        'Simple unordered list item 2'
    ];
    var markdownString = "\n".concat(paragraphText, "\n\n* ").concat(listItemTexts[0], "\n* ").concat(listItemTexts[1], "\n");
    var renderString = function(string, selector, renderer) {
        var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            tokens: _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer(string),
            renderer: renderer
        };
        assert.isNotNull(component.shadowRoot);
        var element = component.shadowRoot.querySelector(selector);
        return element ? element : document.createElement('span');
    };
    describe('component', function() {
        it('renders basic markdown correctly', function() {
            var component = new _markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.data = {
                tokens: _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_2__.Marked.lexer(markdownString)
            };
            assert.isNotNull(component.shadowRoot);
            var paragraphs = Array.from(component.shadowRoot.querySelectorAll('p'));
            assert.strictEqual(paragraphs.length, 1);
            assert.strictEqual(paragraphs[0].innerText, paragraphText);
            var listItems = Array.from(component.shadowRoot.querySelectorAll('li'));
            assert.strictEqual(listItems.length, 2);
            assert.deepStrictEqual(listItems.map(function(item) {
                return item.textContent;
            }), listItemTexts);
        });
        it('renders a codeblock', function() {
            var codeBlock = renderString("```\nconsole.log('test')\n```", 'devtools-code-block');
            assert.strictEqual(codeBlock.code, 'console.log(\'test\')');
        });
        it('renders using a custom renderer', function() {
            var codeBlock = renderString('`console.log()`', 'code', new /*#__PURE__*/ (function(_MarkdownView_MarkdownView_MarkdownLitRenderer) {
                "use strict";
                _inherits(_class, _MarkdownView_MarkdownView_MarkdownLitRenderer);
                var _super = _create_super(_class);
                function _class() {
                    _class_call_check(this, _class);
                    return _super.apply(this, arguments);
                }
                _create_class(_class, [
                    {
                        key: "templateForToken",
                        value: function templateForToken(token) {
                            if (token.type === 'codespan') {
                                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject());
                            }
                            return _get(_get_prototype_of(_class.prototype), "templateForToken", this).call(this, token);
                        }
                    }
                ]);
                return _class;
            }(_markdown_view_js__WEBPACK_IMPORTED_MODULE_4__.MarkdownView.MarkdownLitRenderer))());
            assert.strictEqual(codeBlock.innerText, 'overriden');
        });
    });
    describe('escaping', function() {
        it('renders basic escaped non-html tag', function() {
            var paragraph = renderString('<123>', 'p');
            assert.strictEqual(paragraph.innerText, '<123>');
        });
        it('renders all unescaped chars', function() {
            var paragraph = renderString('<>&\'"', 'p');
            assert.strictEqual(paragraph.innerText, '<>&\'"');
        });
        it('renders all escaped chars', function() {
            var paragraph = renderString('&lt;&gt;&amp;&#39;&quot;', 'p');
            assert.strictEqual(paragraph.innerText, '<>&\'"');
        });
        it('renders basic escaped tag inside codespan', function() {
            var codeBlock = renderString('`<123>`', 'code');
            assert.strictEqual(codeBlock.innerText, '<123>');
        });
    });
}); //# sourceMappingURL=MarkdownView.test.js.map


}),
"./ui/components/markdown_view/markdown_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: function() { return /* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__; },
  MarkdownImage: function() { return /* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__; },
  MarkdownImagesMap: function() { return /* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__; },
  MarkdownLink: function() { return /* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__; },
  MarkdownLinksMap: function() { return /* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__; },
  MarkdownView: function() { return /* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=markdown_view.js.map


}),

}]);