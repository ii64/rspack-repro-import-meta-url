"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_PropertyMatchers_js"], {
"./panels/elements/PropertyMatchers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnchorFunctionMatch: function() { return AnchorFunctionMatch; },
  AnchorFunctionMatcher: function() { return AnchorFunctionMatcher; },
  AngleMatch: function() { return AngleMatch; },
  AngleMatcher: function() { return AngleMatcher; },
  BezierMatch: function() { return BezierMatch; },
  BezierMatcher: function() { return BezierMatcher; },
  ColorMatch: function() { return ColorMatch; },
  ColorMatcher: function() { return ColorMatcher; },
  ColorMixMatch: function() { return ColorMixMatch; },
  ColorMixMatcher: function() { return ColorMixMatcher; },
  FontMatch: function() { return FontMatch; },
  FontMatcher: function() { return FontMatcher; },
  GridTemplateMatch: function() { return GridTemplateMatch; },
  GridTemplateMatcher: function() { return GridTemplateMatcher; },
  LengthMatch: function() { return LengthMatch; },
  LengthMatcher: function() { return LengthMatcher; },
  LightDarkColorMatch: function() { return LightDarkColorMatch; },
  LightDarkColorMatcher: function() { return LightDarkColorMatcher; },
  LinearGradientMatch: function() { return LinearGradientMatch; },
  LinearGradientMatcher: function() { return LinearGradientMatcher; },
  LinkableNameMatch: function() { return LinkableNameMatch; },
  LinkableNameMatcher: function() { return LinkableNameMatcher; },
  PositionAnchorMatch: function() { return PositionAnchorMatch; },
  PositionAnchorMatcher: function() { return PositionAnchorMatcher; },
  ShadowMatch: function() { return ShadowMatch; },
  ShadowMatcher: function() { return ShadowMatcher; },
  StringMatch: function() { return StringMatch; },
  StringMatcher: function() { return StringMatcher; },
  URLMatch: function() { return URLMatch; },
  URLMatcher: function() { return URLMatcher; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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




var ASTUtils = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ASTUtils;
var matcherBase = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.matcherBase;
var tokenizeDeclaration = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration;
var AngleMatch = /*#__PURE__*/ function() {
    "use strict";
    function AngleMatch(text, node) {
        _class_call_check(this, AngleMatch);
        _define_property(this, "text", void 0);
        _define_property(this, "node", void 0);
        this.text = text;
        this.node = node;
    }
    _create_class(AngleMatch, [
        {
            key: "computedText",
            value: function computedText() {
                return this.text;
            }
        }
    ]);
    return AngleMatch;
}();
// clang-format off
var AngleMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(AngleMatcher, _matcherBase);
    var _super = _create_super(AngleMatcher);
    function AngleMatcher() {
        _class_call_check(this, AngleMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(AngleMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isAngleAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'NumberLiteral') {
                    return null;
                }
                var unit = node.getChild('Unit');
                // TODO(crbug/1138628) handle unitless 0
                if (!unit || ![
                    'deg',
                    'grad',
                    'rad',
                    'turn'
                ].includes(matching.ast.text(unit))) {
                    return null;
                }
                return new AngleMatch(matching.ast.text(node), node);
            }
        }
    ]);
    return AngleMatcher;
}(matcherBase(AngleMatch));
function literalToNumber(node, ast) {
    if (node.type.name !== 'NumberLiteral') {
        return null;
    }
    var text = ast.text(node);
    return Number(text.substring(0, text.length - ast.text(node.getChild('Unit')).length));
}
var ColorMixMatch = function ColorMixMatch(text, node, space, color1, color2) {
    "use strict";
    _class_call_check(this, ColorMixMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "space", void 0);
    _define_property(this, "color1", void 0);
    _define_property(this, "color2", void 0);
    this.text = text;
    this.node = node;
    this.space = space;
    this.color1 = color1;
    this.color2 = color2;
};
// clang-format off
var ColorMixMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(ColorMixMatcher, _matcherBase);
    var _super = _create_super(ColorMixMatcher);
    function ColorMixMatcher() {
        _class_call_check(this, ColorMixMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(ColorMixMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'CallExpression' || matching.ast.text(node.getChild('Callee')) !== 'color-mix') {
                    return null;
                }
                var computedValueTree = tokenizeDeclaration('--property', matching.getComputedText(node));
                if (!computedValueTree) {
                    return null;
                }
                var value = ASTUtils.declValue(computedValueTree.tree);
                if (!value) {
                    return null;
                }
                var computedValueArgs = ASTUtils.callArgs(value);
                if (computedValueArgs.length !== 3) {
                    return null;
                }
                var _computedValueArgs = _sliced_to_array(computedValueArgs, 3), space = _computedValueArgs[0], color1 = _computedValueArgs[1], color2 = _computedValueArgs[2];
                // Verify that all arguments are there, and that the space starts with a literal `in`.
                if (space.length < 2 || computedValueTree.text(ASTUtils.stripComments(space).next().value) !== 'in' || color1.length < 1 || color2.length < 1) {
                    return null;
                }
                // Verify there's at most one percentage value for each color.
                var p1 = color1.filter(function(n) {
                    return n.type.name === 'NumberLiteral' && computedValueTree.text(n.getChild('Unit')) === '%';
                });
                var p2 = color2.filter(function(n) {
                    return n.type.name === 'NumberLiteral' && computedValueTree.text(n.getChild('Unit')) === '%';
                });
                if (p1.length > 1 || p2.length > 1) {
                    return null;
                }
                var _literalToNumber, _literalToNumber1;
                // Verify that if both colors carry percentages, they aren't both zero (which is an invalid property value).
                if (p1[0] && p2[0] && ((_literalToNumber = literalToNumber(p1[0], computedValueTree)) !== null && _literalToNumber !== void 0 ? _literalToNumber : 0) === 0 && ((_literalToNumber1 = literalToNumber(p2[0], computedValueTree)) !== null && _literalToNumber1 !== void 0 ? _literalToNumber1 : 0) === 0) {
                    return null;
                }
                var args = ASTUtils.callArgs(node);
                if (args.length !== 3) {
                    return null;
                }
                return new ColorMixMatch(matching.ast.text(node), node, args[0], args[1], args[2]);
            }
        }
    ]);
    return ColorMixMatcher;
}(matcherBase(ColorMixMatch));
// clang-format off
var URLMatch = function URLMatch(url, text, node) {
    "use strict";
    _class_call_check(this, URLMatch);
    _define_property(this, "url", void 0);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.url = url;
    this.text = text;
    this.node = node;
};
// clang-format off
var URLMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(URLMatcher, _matcherBase);
    var _super = _create_super(URLMatcher);
    function URLMatcher() {
        _class_call_check(this, URLMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(URLMatcher, [
        {
            // clang-format on
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'CallLiteral') {
                    return null;
                }
                var callee = node.getChild('CallTag');
                if (!callee || matching.ast.text(callee) !== 'url') {
                    return null;
                }
                var _ASTUtils_siblings = _sliced_to_array(ASTUtils.siblings(callee), 4), lparenNode = _ASTUtils_siblings[1], urlNode = _ASTUtils_siblings[2], rparenNode = _ASTUtils_siblings[3];
                if (matching.ast.text(lparenNode) !== '(' || urlNode.name !== 'ParenthesizedContent' && urlNode.name !== 'StringLiteral' || matching.ast.text(rparenNode) !== ')') {
                    return null;
                }
                var text = matching.ast.text(urlNode);
                var url = urlNode.name === 'StringLiteral' ? text.substr(1, text.length - 2) : text.trim();
                return new URLMatch(url, matching.ast.text(node), node);
            }
        }
    ]);
    return URLMatcher;
}(matcherBase(URLMatch));
var LinearGradientMatch = function LinearGradientMatch(text, node) {
    "use strict";
    _class_call_check(this, LinearGradientMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var LinearGradientMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(LinearGradientMatcher, _matcherBase);
    var _super = _create_super(LinearGradientMatcher);
    function LinearGradientMatcher() {
        _class_call_check(this, LinearGradientMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(LinearGradientMatcher, [
        {
            // clang-format on
            key: "matches",
            value: function matches(node, matching) {
                var text = matching.ast.text(node);
                if (node.name === 'CallExpression' && matching.ast.text(node.getChild('Callee')) === 'linear-gradient') {
                    return new LinearGradientMatch(text, node);
                }
                return null;
            }
        },
        {
            key: "accepts",
            value: function accepts(propertyName) {
                return [
                    'background',
                    'background-image',
                    '-webkit-mask-image'
                ].includes(propertyName);
            }
        }
    ]);
    return LinearGradientMatcher;
}(matcherBase(LinearGradientMatch));
var ColorMatch = function ColorMatch(text, node) {
    "use strict";
    _class_call_check(this, ColorMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var ColorMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(ColorMatcher, _matcherBase);
    var _super = _create_super(ColorMatcher);
    function ColorMatcher() {
        _class_call_check(this, ColorMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(ColorMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                var text = matching.ast.text(node);
                if (node.name === 'ColorLiteral') {
                    return new ColorMatch(text, node);
                }
                if (node.name === 'ValueName' && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nicknames.has(text)) {
                    return new ColorMatch(text, node);
                }
                if (node.name === 'CallExpression') {
                    var callee = node.getChild('Callee');
                    if (callee && matching.ast.text(callee).match(/^(rgba?|hsla?|hwba?|lab|lch|oklab|oklch|color)$/)) {
                        return new ColorMatch(text, node);
                    }
                }
                return null;
            }
        }
    ]);
    return ColorMatcher;
}(matcherBase(ColorMatch));
var LightDarkColorMatch = function LightDarkColorMatch(text, node, light, dark) {
    "use strict";
    _class_call_check(this, LightDarkColorMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "light", void 0);
    _define_property(this, "dark", void 0);
    this.text = text;
    this.node = node;
    this.light = light;
    this.dark = dark;
};
// clang-format off
var LightDarkColorMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(LightDarkColorMatcher, _matcherBase);
    var _super = _create_super(LightDarkColorMatcher);
    function LightDarkColorMatcher() {
        _class_call_check(this, LightDarkColorMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(LightDarkColorMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'CallExpression' || matching.ast.text(node.getChild('Callee')) !== 'light-dark') {
                    return null;
                }
                var args = ASTUtils.callArgs(node);
                if (args.length !== 2 || args[0].length === 0 || args[1].length === 0) {
                    return null;
                }
                return new LightDarkColorMatch(matching.ast.text(node), node, args[0], args[1]);
            }
        }
    ]);
    return LightDarkColorMatcher;
}(matcherBase(LightDarkColorMatch));
var LinkableNameMatch = function LinkableNameMatch(text, node, properyName) {
    "use strict";
    _class_call_check(this, LinkableNameMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "properyName", void 0);
    this.text = text;
    this.node = node;
    this.properyName = properyName;
};
var _matcherBase;
// clang-format off
var LinkableNameMatcher = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(LinkableNameMatcher, _superClass);
    var _super = _create_super(LinkableNameMatcher);
    function LinkableNameMatcher() {
        _class_call_check(this, LinkableNameMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(LinkableNameMatcher, [
        {
            key: "matchAnimationNameInShorthand",
            value: function matchAnimationNameInShorthand(node, matching) {
                // Order is important within each animation definition for distinguishing <keyframes-name> values from other keywords.
                // When parsing, keywords that are valid for properties other than animation-name
                // whose values were not found earlier in the shorthand must be accepted for those properties rather than for animation-name.
                // See the details in: https://w3c.github.io/csswg-drafts/css-animations/#animation.
                var text = matching.ast.text(node);
                // This is not a known identifier, so return it as `animation-name`.
                if (!LinkableNameMatcher.identifierAnimationLonghandMap.has(text)) {
                    return new LinkableNameMatch(text, node, "animation" /* LinkableNameProperties.Animation */ );
                }
                // There can be multiple `animation` declarations splitted by a comma.
                // So, we find the declaration nodes that are related to the node argument.
                var declarations = ASTUtils.split(ASTUtils.siblings(ASTUtils.declValue(matching.ast.tree)));
                var currentDeclarationNodes = declarations.find(function(declaration) {
                    return declaration[0].from <= node.from && declaration[declaration.length - 1].to >= node.to;
                });
                if (!currentDeclarationNodes) {
                    return null;
                }
                // We reparse here until the node argument since a variable might be
                // providing a meaningful value such as a timing keyword,
                // that might change the meaning of the node.
                var computedText = matching.getComputedTextRange(currentDeclarationNodes[0], node);
                var tokenized = tokenizeDeclaration('--p', computedText);
                if (!tokenized) {
                    return null;
                }
                var identifierCategory = LinkableNameMatcher.identifierAnimationLonghandMap.get(text); // The category of the node argument
                for(var itNode = ASTUtils.declValue(tokenized.tree); itNode === null || itNode === void 0 ? void 0 : itNode.nextSibling; itNode = itNode.nextSibling){
                    // Run through all the nodes that come before node argument
                    // and check whether a value in the same category is found.
                    // if so, it means our identifier is an `animation-name` keyword.
                    if (itNode.name === 'ValueName') {
                        var categoryValue = LinkableNameMatcher.identifierAnimationLonghandMap.get(tokenized.text(itNode));
                        if (categoryValue && categoryValue === identifierCategory) {
                            return new LinkableNameMatch(text, node, "animation" /* LinkableNameProperties.Animation */ );
                        }
                    }
                }
                return null;
            }
        },
        {
            key: "accepts",
            value: function accepts(propertyName) {
                return LinkableNameMatcher.isLinkableNameProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                var _parentNode_prevSibling;
                var propertyName = matching.ast.propertyName;
                var text = matching.ast.text(node);
                var parentNode = node.parent;
                if (!parentNode) {
                    return null;
                }
                var isParentADeclaration = parentNode.name === 'Declaration';
                var isInsideVarCall = parentNode.name === 'ArgList' && ((_parentNode_prevSibling = parentNode.prevSibling) === null || _parentNode_prevSibling === void 0 ? void 0 : _parentNode_prevSibling.name) === 'Callee' && matching.ast.text(parentNode.prevSibling) === 'var';
                var isAParentDeclarationOrVarCall = isParentADeclaration || isInsideVarCall;
                // `position-try-options` and `position-try` only accepts names with dashed ident.
                var shouldMatchOnlyVariableName = propertyName === "position-try" /* LinkableNameProperties.PositionTry */  || propertyName === "position-try-options" /* LinkableNameProperties.PositionTryOptions */ ;
                // We only mark top level nodes or nodes that are inside `var()` expressions as linkable names.
                if (!propertyName || node.name !== 'ValueName' && node.name !== 'VariableName' || !isAParentDeclarationOrVarCall || node.name === 'ValueName' && shouldMatchOnlyVariableName) {
                    return null;
                }
                if (propertyName === 'animation') {
                    return this.matchAnimationNameInShorthand(node, matching);
                }
                // The assertion here is safe since this matcher only runs for
                // properties with names inside `LinkableNameProperties` (See the `accepts` function.)
                return new LinkableNameMatch(text, node, propertyName);
            }
        }
    ], [
        {
            key: "isLinkableNameProperty",
            value: // clang-format on
            function isLinkableNameProperty(propertyName) {
                var names = [
                    "animation" /* LinkableNameProperties.Animation */ ,
                    "animation-name" /* LinkableNameProperties.AnimationName */ ,
                    "font-palette" /* LinkableNameProperties.FontPalette */ ,
                    "position-try-options" /* LinkableNameProperties.PositionTryOptions */ ,
                    "position-try" /* LinkableNameProperties.PositionTry */ 
                ];
                return names.includes(propertyName);
            }
        }
    ]);
    return LinkableNameMatcher;
}(_matcherBase = matcherBase(LinkableNameMatch));
_define_property(LinkableNameMatcher, "identifierAnimationLonghandMap", new Map(Object.entries({
    'normal': "direction" /* AnimationLonghandPart.Direction */ ,
    'alternate': "direction" /* AnimationLonghandPart.Direction */ ,
    'reverse': "direction" /* AnimationLonghandPart.Direction */ ,
    'alternate-reverse': "direction" /* AnimationLonghandPart.Direction */ ,
    'none': "fill-mode" /* AnimationLonghandPart.FillMode */ ,
    'forwards': "fill-mode" /* AnimationLonghandPart.FillMode */ ,
    'backwards': "fill-mode" /* AnimationLonghandPart.FillMode */ ,
    'both': "fill-mode" /* AnimationLonghandPart.FillMode */ ,
    'running': "play-state" /* AnimationLonghandPart.PlayState */ ,
    'paused': "play-state" /* AnimationLonghandPart.PlayState */ ,
    'infinite': "iteration-count" /* AnimationLonghandPart.IterationCount */ ,
    'linear': "easing-function" /* AnimationLonghandPart.EasingFunction */ ,
    'ease': "easing-function" /* AnimationLonghandPart.EasingFunction */ ,
    'ease-in': "easing-function" /* AnimationLonghandPart.EasingFunction */ ,
    'ease-out': "easing-function" /* AnimationLonghandPart.EasingFunction */ ,
    'ease-in-out': "easing-function" /* AnimationLonghandPart.EasingFunction */ 
})));
var BezierMatch = function BezierMatch(text, node) {
    "use strict";
    _class_call_check(this, BezierMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var BezierMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(BezierMatcher, _matcherBase);
    var _super = _create_super(BezierMatcher);
    function BezierMatcher() {
        _class_call_check(this, BezierMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(BezierMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isBezierAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                var text = matching.ast.text(node);
                var isCubicBezierKeyword = node.name === 'ValueName' && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Geometry.CubicBezier.KeywordValues.has(text);
                var isCubicBezierOrLinearFunction = node.name === 'CallExpression' && [
                    'cubic-bezier',
                    'linear'
                ].includes(matching.ast.text(node.getChild('Callee')));
                if (!isCubicBezierKeyword && !isCubicBezierOrLinearFunction) {
                    return null;
                }
                if (!_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.AnimationTimingModel.AnimationTimingModel.parse(text)) {
                    return null;
                }
                return new BezierMatch(text, node);
            }
        }
    ]);
    return BezierMatcher;
}(matcherBase(BezierMatch));
var StringMatch = function StringMatch(text, node) {
    "use strict";
    _class_call_check(this, StringMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var StringMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(StringMatcher, _matcherBase);
    var _super = _create_super(StringMatcher);
    function StringMatcher() {
        _class_call_check(this, StringMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(StringMatcher, [
        {
            // clang-format on
            key: "matches",
            value: function matches(node, matching) {
                return node.name === 'StringLiteral' ? new StringMatch(matching.ast.text(node), node) : null;
            }
        }
    ]);
    return StringMatcher;
}(matcherBase(StringMatch));
var ShadowMatch = function ShadowMatch(text, node, shadowType) {
    "use strict";
    _class_call_check(this, ShadowMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "shadowType", void 0);
    this.text = text;
    this.node = node;
    this.shadowType = shadowType;
};
// clang-format off
var ShadowMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(ShadowMatcher, _matcherBase);
    var _super = _create_super(ShadowMatcher);
    function ShadowMatcher() {
        _class_call_check(this, ShadowMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(ShadowMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isShadowProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'Declaration') {
                    return null;
                }
                var valueNodes = ASTUtils.siblings(ASTUtils.declValue(node));
                var valueText = matching.ast.textRange(valueNodes[0], valueNodes[valueNodes.length - 1]);
                return new ShadowMatch(valueText, node, matching.ast.propertyName === 'text-shadow' ? "textShadow" /* ShadowType.TextShadow */  : "boxShadow" /* ShadowType.BoxShadow */ );
            }
        }
    ]);
    return ShadowMatcher;
}(matcherBase(ShadowMatch));
var FontMatch = function FontMatch(text, node) {
    "use strict";
    _class_call_check(this, FontMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var FontMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(FontMatcher, _matcherBase);
    var _super = _create_super(FontMatcher);
    function FontMatcher() {
        _class_call_check(this, FontMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(FontMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isFontAwareProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name === 'Declaration') {
                    return null;
                }
                var regex = matching.ast.propertyName === 'font-family' ? _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.FontEditorUtils.FontFamilyRegex : _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.FontEditorUtils.FontPropertiesRegex;
                var text = matching.ast.text(node);
                return regex.test(text) ? new FontMatch(text, node) : null;
            }
        }
    ]);
    return FontMatcher;
}(matcherBase(FontMatch));
var LengthMatch = function LengthMatch(text, node) {
    "use strict";
    _class_call_check(this, LengthMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.node = node;
};
// clang-format off
var LengthMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(LengthMatcher, _matcherBase);
    var _super = _create_super(LengthMatcher);
    function LengthMatcher() {
        _class_call_check(this, LengthMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(LengthMatcher, [
        {
            // clang-format on
            key: "matches",
            value: function matches(node, matching) {
                var text = matching.ast.text(node);
                var regexp = new RegExp("^".concat(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.CSSLengthUtils.CSSLengthRegex.source, "$"));
                var match = regexp.exec(text);
                if (!match || match.index !== 0) {
                    return null;
                }
                return new LengthMatch(match[0], node);
            }
        }
    ]);
    return LengthMatcher;
}(matcherBase(LengthMatch));
var GridTemplateMatch = function GridTemplateMatch(text, node, lines) {
    "use strict";
    _class_call_check(this, GridTemplateMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "lines", void 0);
    this.text = text;
    this.node = node;
    this.lines = lines;
};
// clang-format off
var GridTemplateMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(GridTemplateMatcher, _matcherBase);
    var _super = _create_super(GridTemplateMatcher);
    function GridTemplateMatcher() {
        _class_call_check(this, GridTemplateMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(GridTemplateMatcher, [
        {
            // clang-format on
            key: "accepts",
            value: function accepts(propertyName) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isGridAreaDefiningProperty(propertyName);
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'Declaration' || matching.hasUnresolvedVars(node)) {
                    return null;
                }
                var lines = [];
                var curLine = [];
                // The following two states are designed to consume different cases of LineNames:
                // 1. no LineNames in between StringLiterals;
                // 2. one LineNames in between, which means the LineNames belongs to the current line;
                // 3. two LineNames in between, which means the second LineNames starts a new line.
                // `hasLeadingLineNames` tracks if the current row already starts with a LineNames and
                // with no following StringLiteral yet, which means that the next StringLiteral should
                // be appended to the same `curLine`, instead of creating a new line.
                var hasLeadingLineNames = false;
                // `needClosingLineNames` tracks if the current row can still consume an optional LineNames,
                // which will decide if we should start a new line or not when a LineNames is encountered.
                var needClosingLineNames = false;
                // Gather row definitions of [<line-names>? <string> <track-size>? <line-names>?], which
                // be rendered into separate lines.
                function parseNodes(nodes) {
                    var varParsingMode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var curNode = _step.value;
                            if (_instanceof(matching.getMatch(curNode), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.VariableMatch)) {
                                var computedValueTree = tokenizeDeclaration('--property', matching.getComputedText(curNode));
                                if (!computedValueTree) {
                                    continue;
                                }
                                var varNodes = ASTUtils.siblings(ASTUtils.declValue(computedValueTree.tree));
                                if (varNodes.length === 0) {
                                    continue;
                                }
                                if (varNodes[0].name === 'StringLiteral' && !hasLeadingLineNames || varNodes[0].name === 'LineNames' && !needClosingLineNames) {
                                    // The variable value either starts with a string, or with a line name that belongs to a new row;
                                    // therefore we start a new line with the variable.
                                    lines.push(curLine);
                                    curLine = [
                                        curNode
                                    ];
                                } else {
                                    curLine.push(curNode);
                                }
                                // We parse computed nodes of this variable to correctly advance local states, but
                                // these computed nodes won't be added to the lines.
                                parseNodes(varNodes, true);
                            } else if (curNode.name === 'BinaryExpression') {
                                parseNodes(ASTUtils.siblings(curNode.firstChild));
                            } else if (curNode.name === 'StringLiteral') {
                                if (!varParsingMode) {
                                    if (hasLeadingLineNames) {
                                        curLine.push(curNode);
                                    } else {
                                        lines.push(curLine);
                                        curLine = [
                                            curNode
                                        ];
                                    }
                                }
                                needClosingLineNames = true;
                                hasLeadingLineNames = false;
                            } else if (curNode.name === 'LineNames') {
                                if (!varParsingMode) {
                                    if (needClosingLineNames) {
                                        curLine.push(curNode);
                                    } else {
                                        lines.push(curLine);
                                        curLine = [
                                            curNode
                                        ];
                                    }
                                }
                                hasLeadingLineNames = !needClosingLineNames;
                                needClosingLineNames = !needClosingLineNames;
                            } else if (!varParsingMode) {
                                curLine.push(curNode);
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
                }
                var valueNodes = ASTUtils.siblings(ASTUtils.declValue(node));
                parseNodes(valueNodes);
                lines.push(curLine);
                var valueText = matching.ast.textRange(valueNodes[0], valueNodes[valueNodes.length - 1]);
                return new GridTemplateMatch(valueText, node, lines.filter(function(line) {
                    return line.length > 0;
                }));
            }
        }
    ]);
    return GridTemplateMatcher;
}(matcherBase(GridTemplateMatch));
var AnchorFunctionMatch = function AnchorFunctionMatch(text, matching, node, functionName, args) {
    "use strict";
    _class_call_check(this, AnchorFunctionMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "matching", void 0);
    _define_property(this, "node", void 0);
    _define_property(this, "functionName", void 0);
    _define_property(this, "args", void 0);
    this.text = text;
    this.matching = matching;
    this.node = node;
    this.functionName = functionName;
    this.args = args;
};
// clang-format off
var AnchorFunctionMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(AnchorFunctionMatcher, _matcherBase);
    var _super = _create_super(AnchorFunctionMatcher);
    function AnchorFunctionMatcher() {
        _class_call_check(this, AnchorFunctionMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(AnchorFunctionMatcher, [
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'CallExpression') {
                    return null;
                }
                var calleeText = matching.ast.text(node.getChild('Callee'));
                if (calleeText !== 'anchor' && calleeText !== 'anchor-size') {
                    return null;
                }
                var _ASTUtils_callArgs = _sliced_to_array(ASTUtils.callArgs(node), 1), firstArg = _ASTUtils_callArgs[0];
                if (!firstArg || firstArg.length === 0) {
                    return null;
                }
                return new AnchorFunctionMatch(matching.ast.text(node), matching, node, calleeText, firstArg);
            }
        }
    ]);
    return AnchorFunctionMatcher;
}(matcherBase(AnchorFunctionMatch));
// clang-format on
// For linking `position-anchor: --anchor-name`.
var PositionAnchorMatch = function PositionAnchorMatch(text, matching, node) {
    "use strict";
    _class_call_check(this, PositionAnchorMatch);
    _define_property(this, "text", void 0);
    _define_property(this, "matching", void 0);
    _define_property(this, "node", void 0);
    this.text = text;
    this.matching = matching;
    this.node = node;
};
// clang-format off
var PositionAnchorMatcher = /*#__PURE__*/ function(_matcherBase) {
    "use strict";
    _inherits(PositionAnchorMatcher, _matcherBase);
    var _super = _create_super(PositionAnchorMatcher);
    function PositionAnchorMatcher() {
        _class_call_check(this, PositionAnchorMatcher);
        return _super.apply(this, arguments);
    }
    _create_class(PositionAnchorMatcher, [
        {
            key: "accepts",
            value: function accepts(propertyName) {
                return propertyName === 'position-anchor';
            }
        },
        {
            key: "matches",
            value: function matches(node, matching) {
                if (node.name !== 'VariableName') {
                    return null;
                }
                var dashedIdentifier = matching.ast.text(node);
                return new PositionAnchorMatch(dashedIdentifier, matching, node);
            }
        }
    ]);
    return PositionAnchorMatcher;
} // clang-format on
 //# sourceMappingURL=PropertyMatchers.js.map
(matcherBase(PositionAnchorMatch));


}),

}]);