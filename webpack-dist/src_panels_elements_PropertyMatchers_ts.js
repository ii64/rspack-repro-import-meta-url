"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PropertyMatchers_ts"],{

/***/ "./src/panels/elements/PropertyMatchers.ts":
/*!*************************************************!*\
  !*** ./src/panels/elements/PropertyMatchers.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorFunctionMatch: () => (/* binding */ AnchorFunctionMatch),
/* harmony export */   AnchorFunctionMatcher: () => (/* binding */ AnchorFunctionMatcher),
/* harmony export */   AngleMatch: () => (/* binding */ AngleMatch),
/* harmony export */   AngleMatcher: () => (/* binding */ AngleMatcher),
/* harmony export */   BezierMatch: () => (/* binding */ BezierMatch),
/* harmony export */   BezierMatcher: () => (/* binding */ BezierMatcher),
/* harmony export */   ColorMatch: () => (/* binding */ ColorMatch),
/* harmony export */   ColorMatcher: () => (/* binding */ ColorMatcher),
/* harmony export */   ColorMixMatch: () => (/* binding */ ColorMixMatch),
/* harmony export */   ColorMixMatcher: () => (/* binding */ ColorMixMatcher),
/* harmony export */   FontMatch: () => (/* binding */ FontMatch),
/* harmony export */   FontMatcher: () => (/* binding */ FontMatcher),
/* harmony export */   GridTemplateMatch: () => (/* binding */ GridTemplateMatch),
/* harmony export */   GridTemplateMatcher: () => (/* binding */ GridTemplateMatcher),
/* harmony export */   LengthMatch: () => (/* binding */ LengthMatch),
/* harmony export */   LengthMatcher: () => (/* binding */ LengthMatcher),
/* harmony export */   LightDarkColorMatch: () => (/* binding */ LightDarkColorMatch),
/* harmony export */   LightDarkColorMatcher: () => (/* binding */ LightDarkColorMatcher),
/* harmony export */   LinearGradientMatch: () => (/* binding */ LinearGradientMatch),
/* harmony export */   LinearGradientMatcher: () => (/* binding */ LinearGradientMatcher),
/* harmony export */   LinkableNameMatch: () => (/* binding */ LinkableNameMatch),
/* harmony export */   LinkableNameMatcher: () => (/* binding */ LinkableNameMatcher),
/* harmony export */   LinkableNameProperties: () => (/* binding */ LinkableNameProperties),
/* harmony export */   PositionAnchorMatch: () => (/* binding */ PositionAnchorMatch),
/* harmony export */   PositionAnchorMatcher: () => (/* binding */ PositionAnchorMatcher),
/* harmony export */   ShadowMatch: () => (/* binding */ ShadowMatch),
/* harmony export */   ShadowMatcher: () => (/* binding */ ShadowMatcher),
/* harmony export */   ShadowType: () => (/* binding */ ShadowType),
/* harmony export */   StringMatch: () => (/* binding */ StringMatch),
/* harmony export */   StringMatcher: () => (/* binding */ StringMatcher),
/* harmony export */   URLMatch: () => (/* binding */ URLMatch),
/* harmony export */   URLMatcher: () => (/* binding */ URLMatcher)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const ASTUtils = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ASTUtils;
const matcherBase = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.matcherBase;
const tokenizeDeclaration = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration;
class AngleMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
    computedText() {
        return this.text;
    }
}
// clang-format off
class AngleMatcher extends matcherBase(AngleMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isAngleAwareProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name !== 'NumberLiteral') {
            return null;
        }
        const unit = node.getChild('Unit');
        // TODO(crbug/1138628) handle unitless 0
        if (!unit || !['deg', 'grad', 'rad', 'turn'].includes(matching.ast.text(unit))) {
            return null;
        }
        return new AngleMatch(matching.ast.text(node), node);
    }
}
function literalToNumber(node, ast) {
    if (node.type.name !== 'NumberLiteral') {
        return null;
    }
    const text = ast.text(node);
    return Number(text.substring(0, text.length - ast.text(node.getChild('Unit')).length));
}
class ColorMixMatch {
    constructor(text, node, space, color1, color2) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "space", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: space
        });
        Object.defineProperty(this, "color1", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: color1
        });
        Object.defineProperty(this, "color2", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: color2
        });
    }
}
// clang-format off
class ColorMixMatcher extends matcherBase(ColorMixMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name !== 'CallExpression' || matching.ast.text(node.getChild('Callee')) !== 'color-mix') {
            return null;
        }
        const computedValueTree = tokenizeDeclaration('--property', matching.getComputedText(node));
        if (!computedValueTree) {
            return null;
        }
        const value = ASTUtils.declValue(computedValueTree.tree);
        if (!value) {
            return null;
        }
        const computedValueArgs = ASTUtils.callArgs(value);
        if (computedValueArgs.length !== 3) {
            return null;
        }
        const [space, color1, color2] = computedValueArgs;
        // Verify that all arguments are there, and that the space starts with a literal `in`.
        if (space.length < 2 || computedValueTree.text(ASTUtils.stripComments(space).next().value) !== 'in' ||
            color1.length < 1 || color2.length < 1) {
            return null;
        }
        // Verify there's at most one percentage value for each color.
        const p1 = color1.filter(n => n.type.name === 'NumberLiteral' && computedValueTree.text(n.getChild('Unit')) === '%');
        const p2 = color2.filter(n => n.type.name === 'NumberLiteral' && computedValueTree.text(n.getChild('Unit')) === '%');
        if (p1.length > 1 || p2.length > 1) {
            return null;
        }
        // Verify that if both colors carry percentages, they aren't both zero (which is an invalid property value).
        if (p1[0] && p2[0] && (literalToNumber(p1[0], computedValueTree) ?? 0) === 0 &&
            (literalToNumber(p2[0], computedValueTree) ?? 0) === 0) {
            return null;
        }
        const args = ASTUtils.callArgs(node);
        if (args.length !== 3) {
            return null;
        }
        return new ColorMixMatch(matching.ast.text(node), node, args[0], args[1], args[2]);
    }
}
// clang-format off
class URLMatch {
    constructor(url, text, node) {
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: url
        });
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class URLMatcher extends matcherBase(URLMatch) {
    // clang-format on
    matches(node, matching) {
        if (node.name !== 'CallLiteral') {
            return null;
        }
        const callee = node.getChild('CallTag');
        if (!callee || matching.ast.text(callee) !== 'url') {
            return null;
        }
        const [, lparenNode, urlNode, rparenNode] = ASTUtils.siblings(callee);
        if (matching.ast.text(lparenNode) !== '(' ||
            (urlNode.name !== 'ParenthesizedContent' && urlNode.name !== 'StringLiteral') ||
            matching.ast.text(rparenNode) !== ')') {
            return null;
        }
        const text = matching.ast.text(urlNode);
        const url = (urlNode.name === 'StringLiteral' ? text.substr(1, text.length - 2) : text.trim());
        return new URLMatch(url, matching.ast.text(node), node);
    }
}
class LinearGradientMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class LinearGradientMatcher extends matcherBase(LinearGradientMatch) {
    // clang-format on
    matches(node, matching) {
        const text = matching.ast.text(node);
        if (node.name === 'CallExpression' && matching.ast.text(node.getChild('Callee')) === 'linear-gradient') {
            return new LinearGradientMatch(text, node);
        }
        return null;
    }
    accepts(propertyName) {
        return ['background', 'background-image', '-webkit-mask-image'].includes(propertyName);
    }
}
class ColorMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class ColorMatcher extends matcherBase(ColorMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
    }
    matches(node, matching) {
        const text = matching.ast.text(node);
        if (node.name === 'ColorLiteral') {
            return new ColorMatch(text, node);
        }
        if (node.name === 'ValueName' && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nicknames.has(text)) {
            return new ColorMatch(text, node);
        }
        if (node.name === 'CallExpression') {
            const callee = node.getChild('Callee');
            if (callee && matching.ast.text(callee).match(/^(rgba?|hsla?|hwba?|lab|lch|oklab|oklch|color)$/)) {
                return new ColorMatch(text, node);
            }
        }
        return null;
    }
}
class LightDarkColorMatch {
    constructor(text, node, light, dark) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "light", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: light
        });
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dark
        });
    }
}
// clang-format off
class LightDarkColorMatcher extends matcherBase(LightDarkColorMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isColorAwareProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name !== 'CallExpression' || matching.ast.text(node.getChild('Callee')) !== 'light-dark') {
            return null;
        }
        const args = ASTUtils.callArgs(node);
        if (args.length !== 2 || args[0].length === 0 || args[1].length === 0) {
            return null;
        }
        return new LightDarkColorMatch(matching.ast.text(node), node, args[0], args[1]);
    }
}
var LinkableNameProperties;
(function (LinkableNameProperties) {
    LinkableNameProperties["Animation"] = "animation";
    LinkableNameProperties["AnimationName"] = "animation-name";
    LinkableNameProperties["FontPalette"] = "font-palette";
    LinkableNameProperties["PositionTryOptions"] = "position-try-options";
    LinkableNameProperties["PositionTry"] = "position-try";
})(LinkableNameProperties || (LinkableNameProperties = {}));
var AnimationLonghandPart;
(function (AnimationLonghandPart) {
    AnimationLonghandPart["Direction"] = "direction";
    AnimationLonghandPart["FillMode"] = "fill-mode";
    AnimationLonghandPart["PlayState"] = "play-state";
    AnimationLonghandPart["IterationCount"] = "iteration-count";
    AnimationLonghandPart["EasingFunction"] = "easing-function";
})(AnimationLonghandPart || (AnimationLonghandPart = {}));
class LinkableNameMatch {
    constructor(text, node, properyName) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "properyName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: properyName
        });
    }
}
// clang-format off
class LinkableNameMatcher extends matcherBase(LinkableNameMatch) {
    // clang-format on
    static isLinkableNameProperty(propertyName) {
        const names = [
            LinkableNameProperties.Animation,
            LinkableNameProperties.AnimationName,
            LinkableNameProperties.FontPalette,
            LinkableNameProperties.PositionTryOptions,
            LinkableNameProperties.PositionTry,
        ];
        return names.includes(propertyName);
    }
    matchAnimationNameInShorthand(node, matching) {
        // Order is important within each animation definition for distinguishing <keyframes-name> values from other keywords.
        // When parsing, keywords that are valid for properties other than animation-name
        // whose values were not found earlier in the shorthand must be accepted for those properties rather than for animation-name.
        // See the details in: https://w3c.github.io/csswg-drafts/css-animations/#animation.
        const text = matching.ast.text(node);
        // This is not a known identifier, so return it as `animation-name`.
        if (!LinkableNameMatcher.identifierAnimationLonghandMap.has(text)) {
            return new LinkableNameMatch(text, node, LinkableNameProperties.Animation);
        }
        // There can be multiple `animation` declarations splitted by a comma.
        // So, we find the declaration nodes that are related to the node argument.
        const declarations = ASTUtils.split(ASTUtils.siblings(ASTUtils.declValue(matching.ast.tree)));
        const currentDeclarationNodes = declarations.find(declaration => declaration[0].from <= node.from && declaration[declaration.length - 1].to >= node.to);
        if (!currentDeclarationNodes) {
            return null;
        }
        // We reparse here until the node argument since a variable might be
        // providing a meaningful value such as a timing keyword,
        // that might change the meaning of the node.
        const computedText = matching.getComputedTextRange(currentDeclarationNodes[0], node);
        const tokenized = tokenizeDeclaration('--p', computedText);
        if (!tokenized) {
            return null;
        }
        const identifierCategory = LinkableNameMatcher.identifierAnimationLonghandMap.get(text); // The category of the node argument
        for (let itNode = ASTUtils.declValue(tokenized.tree); itNode?.nextSibling; itNode = itNode.nextSibling) {
            // Run through all the nodes that come before node argument
            // and check whether a value in the same category is found.
            // if so, it means our identifier is an `animation-name` keyword.
            if (itNode.name === 'ValueName') {
                const categoryValue = LinkableNameMatcher.identifierAnimationLonghandMap.get(tokenized.text(itNode));
                if (categoryValue && categoryValue === identifierCategory) {
                    return new LinkableNameMatch(text, node, LinkableNameProperties.Animation);
                }
            }
        }
        return null;
    }
    accepts(propertyName) {
        return LinkableNameMatcher.isLinkableNameProperty(propertyName);
    }
    matches(node, matching) {
        const { propertyName } = matching.ast;
        const text = matching.ast.text(node);
        const parentNode = node.parent;
        if (!parentNode) {
            return null;
        }
        const isParentADeclaration = parentNode.name === 'Declaration';
        const isInsideVarCall = parentNode.name === 'ArgList' && parentNode.prevSibling?.name === 'Callee' &&
            matching.ast.text(parentNode.prevSibling) === 'var';
        const isAParentDeclarationOrVarCall = isParentADeclaration || isInsideVarCall;
        // `position-try-options` and `position-try` only accepts names with dashed ident.
        const shouldMatchOnlyVariableName = propertyName === LinkableNameProperties.PositionTry ||
            propertyName === LinkableNameProperties.PositionTryOptions;
        // We only mark top level nodes or nodes that are inside `var()` expressions as linkable names.
        if (!propertyName || (node.name !== 'ValueName' && node.name !== 'VariableName') ||
            !isAParentDeclarationOrVarCall || (node.name === 'ValueName' && shouldMatchOnlyVariableName)) {
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
Object.defineProperty(LinkableNameMatcher, "identifierAnimationLonghandMap", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Map(Object.entries({
        'normal': AnimationLonghandPart.Direction,
        'alternate': AnimationLonghandPart.Direction,
        'reverse': AnimationLonghandPart.Direction,
        'alternate-reverse': AnimationLonghandPart.Direction,
        'none': AnimationLonghandPart.FillMode,
        'forwards': AnimationLonghandPart.FillMode,
        'backwards': AnimationLonghandPart.FillMode,
        'both': AnimationLonghandPart.FillMode,
        'running': AnimationLonghandPart.PlayState,
        'paused': AnimationLonghandPart.PlayState,
        'infinite': AnimationLonghandPart.IterationCount,
        'linear': AnimationLonghandPart.EasingFunction,
        'ease': AnimationLonghandPart.EasingFunction,
        'ease-in': AnimationLonghandPart.EasingFunction,
        'ease-out': AnimationLonghandPart.EasingFunction,
        'ease-in-out': AnimationLonghandPart.EasingFunction,
    }))
});
class BezierMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class BezierMatcher extends matcherBase(BezierMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isBezierAwareProperty(propertyName);
    }
    matches(node, matching) {
        const text = matching.ast.text(node);
        const isCubicBezierKeyword = node.name === 'ValueName' && _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Geometry.CubicBezier.KeywordValues.has(text);
        const isCubicBezierOrLinearFunction = node.name === 'CallExpression' &&
            ['cubic-bezier', 'linear'].includes(matching.ast.text(node.getChild('Callee')));
        if (!isCubicBezierKeyword && !isCubicBezierOrLinearFunction) {
            return null;
        }
        if (!_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.AnimationTimingModel.AnimationTimingModel.parse(text)) {
            return null;
        }
        return new BezierMatch(text, node);
    }
}
class StringMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class StringMatcher extends matcherBase(StringMatch) {
    // clang-format on
    matches(node, matching) {
        return node.name === 'StringLiteral' ? new StringMatch(matching.ast.text(node), node) : null;
    }
}
var ShadowType;
(function (ShadowType) {
    ShadowType["BoxShadow"] = "boxShadow";
    ShadowType["TextShadow"] = "textShadow";
})(ShadowType || (ShadowType = {}));
class ShadowMatch {
    constructor(text, node, shadowType) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "shadowType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: shadowType
        });
    }
}
// clang-format off
class ShadowMatcher extends matcherBase(ShadowMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isShadowProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name !== 'Declaration') {
            return null;
        }
        const valueNodes = ASTUtils.siblings(ASTUtils.declValue(node));
        const valueText = matching.ast.textRange(valueNodes[0], valueNodes[valueNodes.length - 1]);
        return new ShadowMatch(valueText, node, matching.ast.propertyName === 'text-shadow' ? ShadowType.TextShadow : ShadowType.BoxShadow);
    }
}
class FontMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class FontMatcher extends matcherBase(FontMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isFontAwareProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name === 'Declaration') {
            return null;
        }
        const regex = matching.ast.propertyName === 'font-family' ? _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.FontEditorUtils.FontFamilyRegex :
            _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.FontEditorUtils.FontPropertiesRegex;
        const text = matching.ast.text(node);
        return regex.test(text) ? new FontMatch(text, node) : null;
    }
}
class LengthMatch {
    constructor(text, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class LengthMatcher extends matcherBase(LengthMatch) {
    // clang-format on
    matches(node, matching) {
        const text = matching.ast.text(node);
        const regexp = new RegExp(`^${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__.CSSLengthUtils.CSSLengthRegex.source}$`);
        const match = regexp.exec(text);
        if (!match || match.index !== 0) {
            return null;
        }
        return new LengthMatch(match[0], node);
    }
}
class GridTemplateMatch {
    constructor(text, node, lines) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "lines", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: lines
        });
    }
}
// clang-format off
class GridTemplateMatcher extends matcherBase(GridTemplateMatch) {
    // clang-format on
    accepts(propertyName) {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMetadata.cssMetadata().isGridAreaDefiningProperty(propertyName);
    }
    matches(node, matching) {
        if (node.name !== 'Declaration' || matching.hasUnresolvedVars(node)) {
            return null;
        }
        const lines = [];
        let curLine = [];
        // The following two states are designed to consume different cases of LineNames:
        // 1. no LineNames in between StringLiterals;
        // 2. one LineNames in between, which means the LineNames belongs to the current line;
        // 3. two LineNames in between, which means the second LineNames starts a new line.
        // `hasLeadingLineNames` tracks if the current row already starts with a LineNames and
        // with no following StringLiteral yet, which means that the next StringLiteral should
        // be appended to the same `curLine`, instead of creating a new line.
        let hasLeadingLineNames = false;
        // `needClosingLineNames` tracks if the current row can still consume an optional LineNames,
        // which will decide if we should start a new line or not when a LineNames is encountered.
        let needClosingLineNames = false;
        // Gather row definitions of [<line-names>? <string> <track-size>? <line-names>?], which
        // be rendered into separate lines.
        function parseNodes(nodes, varParsingMode = false) {
            for (const curNode of nodes) {
                if (matching.getMatch(curNode) instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.VariableMatch) {
                    const computedValueTree = tokenizeDeclaration('--property', matching.getComputedText(curNode));
                    if (!computedValueTree) {
                        continue;
                    }
                    const varNodes = ASTUtils.siblings(ASTUtils.declValue(computedValueTree.tree));
                    if (varNodes.length === 0) {
                        continue;
                    }
                    if ((varNodes[0].name === 'StringLiteral' && !hasLeadingLineNames) ||
                        (varNodes[0].name === 'LineNames' && !needClosingLineNames)) {
                        // The variable value either starts with a string, or with a line name that belongs to a new row;
                        // therefore we start a new line with the variable.
                        lines.push(curLine);
                        curLine = [curNode];
                    }
                    else {
                        curLine.push(curNode);
                    }
                    // We parse computed nodes of this variable to correctly advance local states, but
                    // these computed nodes won't be added to the lines.
                    parseNodes(varNodes, true);
                }
                else if (curNode.name === 'BinaryExpression') {
                    parseNodes(ASTUtils.siblings(curNode.firstChild));
                }
                else if (curNode.name === 'StringLiteral') {
                    if (!varParsingMode) {
                        if (hasLeadingLineNames) {
                            curLine.push(curNode);
                        }
                        else {
                            lines.push(curLine);
                            curLine = [curNode];
                        }
                    }
                    needClosingLineNames = true;
                    hasLeadingLineNames = false;
                }
                else if (curNode.name === 'LineNames') {
                    if (!varParsingMode) {
                        if (needClosingLineNames) {
                            curLine.push(curNode);
                        }
                        else {
                            lines.push(curLine);
                            curLine = [curNode];
                        }
                    }
                    hasLeadingLineNames = !needClosingLineNames;
                    needClosingLineNames = !needClosingLineNames;
                }
                else if (!varParsingMode) {
                    curLine.push(curNode);
                }
            }
        }
        const valueNodes = ASTUtils.siblings(ASTUtils.declValue(node));
        parseNodes(valueNodes);
        lines.push(curLine);
        const valueText = matching.ast.textRange(valueNodes[0], valueNodes[valueNodes.length - 1]);
        return new GridTemplateMatch(valueText, node, lines.filter(line => line.length > 0));
    }
}
class AnchorFunctionMatch {
    constructor(text, matching, node, functionName, args) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "matching", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matching
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "functionName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: functionName
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: args
        });
    }
}
// clang-format off
class AnchorFunctionMatcher extends matcherBase(AnchorFunctionMatch) {
    matches(node, matching) {
        if (node.name !== 'CallExpression') {
            return null;
        }
        const calleeText = matching.ast.text(node.getChild('Callee'));
        if (calleeText !== 'anchor' && calleeText !== 'anchor-size') {
            return null;
        }
        const [firstArg] = ASTUtils.callArgs(node);
        if (!firstArg || firstArg.length === 0) {
            return null;
        }
        return new AnchorFunctionMatch(matching.ast.text(node), matching, node, calleeText, firstArg);
    }
}
// clang-format on
// For linking `position-anchor: --anchor-name`.
class PositionAnchorMatch {
    constructor(text, matching, node) {
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
        Object.defineProperty(this, "matching", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: matching
        });
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
    }
}
// clang-format off
class PositionAnchorMatcher extends matcherBase(PositionAnchorMatch) {
    accepts(propertyName) {
        return propertyName === 'position-anchor';
    }
    matches(node, matching) {
        if (node.name !== 'VariableName') {
            return null;
        }
        const dashedIdentifier = matching.ast.text(node);
        return new PositionAnchorMatch(dashedIdentifier, matching, node);
    }
}
// clang-format on


/***/ })

}]);