"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownLink_js"], {
"./ui/components/markdown_view/MarkdownLink.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MarkdownLink: function() { return MarkdownLink; }
});
/* harmony import */var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _markdownLink_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markdownLink.css.js */ "./ui/components/markdown_view/markdownLink.css.js");
/* harmony import */var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
        "devtools-markdown-link"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<x-link class="devtools-link" href=',
        " jslog=",
        "\n    >",
        "</x-link>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
 // Required for <x-link>.




var _shadow = /*#__PURE__*/ new WeakMap(), _linkText = /*#__PURE__*/ new WeakMap(), _linkUrl = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
/**
 * Component to render link from parsed markdown.
 * Parsed links from markdown are not directly rendered, instead they have to be added to the <key, link> map in MarkdownLinksMap.ts.
 * This makes sure that all links are accounted for and no bad links are introduced to devtools via markdown.
 */ var MarkdownLink = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(MarkdownLink, HTMLElement1);
    var _super = _create_super(MarkdownLink);
    function MarkdownLink() {
        _class_call_check(this, MarkdownLink);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkText, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _linkUrl, {
            writable: true,
            value: ''
        });
        return _this;
    }
    _create_class(MarkdownLink, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _markdownLink_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                var key = data.key, title = data.title;
                var markdownLink = (0,_MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__.getMarkdownLink)(key);
                _class_private_field_set(this, _linkText, title);
                _class_private_field_set(this, _linkUrl, markdownLink);
                _class_private_method_get(this, _render, render).call(this);
            }
        }
    ]);
    return MarkdownLink;
}(_wrap_native_super(HTMLElement));
_define_property(MarkdownLink, "litTagName", _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject()));
function render() {
    // clang-format off
    var output = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1(), _class_private_field_get(this, _linkUrl), _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.link().track({
        click: true
    }), _class_private_field_get(this, _linkText));
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(output, _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-markdown-link', MarkdownLink); //# sourceMappingURL=MarkdownLink.js.map


}),
"./ui/components/markdown_view/MarkdownLinksMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getMarkdownLink: function() { return getMarkdownLink; },
  markdownLinks: function() { return markdownLinks; }
});
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  To use links in markdown, add key here with the link and
  use the added key in markdown.
  @example markdown
  Find more information about web development at [Learn more](exampleLink)
*/ // This is only exported for tests, and it should not be
// imported in any component, instead add link in map and
// use getMarkdownLink to get the appropriate link.
var markdownLinks = new Map([
    [
        'issuesContrastWCAG21AA',
        'https://www.w3.org/TR/WCAG21/#contrast-minimum'
    ],
    [
        'issuesContrastWCAG21AAA',
        'https://www.w3.org/TR/WCAG21/#contrast-enhanced'
    ],
    [
        'issuesContrastSuggestColor',
        'https://developers.google.com/web/updates/2020/08/devtools#accessible-color'
    ],
    [
        'issuesCSPSetStrict',
        'https://web.dev/strict-csp'
    ],
    [
        'issuesCSPWhyStrictOverAllowlist',
        'https://web.dev/strict-csp/#why-a-strict-csp-is-recommended-over-allowlist-csps'
    ],
    [
        'issueCorsPreflightRequest',
        'https://web.dev/cross-origin-resource-sharing/#preflight-requests-for-complex-http-calls'
    ],
    [
        'issueQuirksModeDoctype',
        'https://web.dev/doctype/'
    ],
    [
        'sameSiteAndSameOrigin',
        'https://web.dev/same-site-same-origin/'
    ],
    [
        'punycodeReference',
        'https://wikipedia.org/wiki/Punycode'
    ],
    // Link URLs for deprecation issues (see blink::Deprecation)
    [
        'https://xhr.spec.whatwg.org/',
        'https://xhr.spec.whatwg.org/'
    ],
    [
        'https://goo.gle/chrome-insecure-origins',
        'https://goo.gle/chrome-insecure-origins'
    ],
    [
        'https://webrtc.org/web-apis/chrome/unified-plan/',
        'https://webrtc.org/web-apis/chrome/unified-plan/'
    ],
    [
        'https://developer.chrome.com/blog/enabling-shared-array-buffer/',
        'https://developer.chrome.com/blog/enabling-shared-array-buffer/'
    ],
    [
        'https://developer.chrome.com/docs/extensions/mv3/',
        'https://developer.chrome.com/docs/extensions/mv3/'
    ],
    [
        'https://developer.chrome.com/blog/immutable-document-domain/',
        'https://developer.chrome.com/blog/immutable-document-domain/'
    ],
    [
        'https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md',
        'https://github.com/WICG/shared-element-transitions/blob/main/debugging_overflow_on_images.md'
    ],
    [
        'https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled',
        'https://developer.chrome.com/docs/extensions/reference/privacy/#property-websites-privacySandboxEnabled'
    ],
    [
        'PNASecureContextRestrictionFeatureStatus',
        'https://chromestatus.com/feature/5954091755241472'
    ],
    [
        'https://w3c.github.io/uievents/#legacy-event-types',
        'https://w3c.github.io/uievents/#legacy-event-types'
    ],
    [
        'manageCookiesHelpPage',
        'https://support.google.com/chrome/answer/95647'
    ],
    [
        'gracePeriodStagedControlExplainer',
        'https://developers.google.com/privacy-sandbox/blog/grace-period-opt-out'
    ]
]);
var getMarkdownLink = function(key) {
    if (/^https:\/\/www.chromestatus.com\/feature\/\d+$/.test(key)) {
        return key;
    }
    var link = markdownLinks.get(key);
    if (!link) {
        throw new Error("Markdown link with key '".concat(key, "' is not available, please check MarkdownLinksMap.ts"));
    }
    return link;
}; //# sourceMappingURL=MarkdownLinksMap.js.map


}),
"./ui/components/markdown_view/markdownLink.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.devtools-link {\n  color: var(--sys-color-primary);\n  outline-offset: 2px;\n  text-decoration: none;\n}\n\n.devtools-link:hover {\n  text-decoration: underline;\n}\n\n/*# sourceURL=markdownLink.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);