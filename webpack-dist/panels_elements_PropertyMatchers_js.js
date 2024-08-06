"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_PropertyMatchers_js"],{

/***/ "./panels/elements/PropertyMatchers.js":
/*!*********************************************!*\
  !*** ./panels/elements/PropertyMatchers.js ***!
  \*********************************************/
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
/* harmony export */   PositionAnchorMatch: () => (/* binding */ PositionAnchorMatch),
/* harmony export */   PositionAnchorMatcher: () => (/* binding */ PositionAnchorMatcher),
/* harmony export */   ShadowMatch: () => (/* binding */ ShadowMatch),
/* harmony export */   ShadowMatcher: () => (/* binding */ ShadowMatcher),
/* harmony export */   StringMatch: () => (/* binding */ StringMatch),
/* harmony export */   StringMatcher: () => (/* binding */ StringMatcher),
/* harmony export */   URLMatch: () => (/* binding */ URLMatch),
/* harmony export */   URLMatcher: () => (/* binding */ URLMatcher)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const ASTUtils = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.ASTUtils;
const matcherBase = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.matcherBase;
const tokenizeDeclaration = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration;
class AngleMatch {
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    space;
    color1;
    color2;
    constructor(text, node, space, color1, color2) {
        this.text = text;
        this.node = node;
        this.space = space;
        this.color1 = color1;
        this.color2 = color2;
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
    url;
    text;
    node;
    constructor(url, text, node) {
        this.url = url;
        this.text = text;
        this.node = node;
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
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    light;
    dark;
    constructor(text, node, light, dark) {
        this.text = text;
        this.node = node;
        this.light = light;
        this.dark = dark;
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
class LinkableNameMatch {
    text;
    node;
    properyName;
    constructor(text, node, properyName) {
        this.text = text;
        this.node = node;
        this.properyName = properyName;
    }
}
// clang-format off
class LinkableNameMatcher extends matcherBase(LinkableNameMatch) {
    // clang-format on
    static isLinkableNameProperty(propertyName) {
        const names = [
            "animation" /* LinkableNameProperties.Animation */,
            "animation-name" /* LinkableNameProperties.AnimationName */,
            "font-palette" /* LinkableNameProperties.FontPalette */,
            "position-try-options" /* LinkableNameProperties.PositionTryOptions */,
            "position-try" /* LinkableNameProperties.PositionTry */,
        ];
        return names.includes(propertyName);
    }
    static identifierAnimationLonghandMap = new Map(Object.entries({
        'normal': "direction" /* AnimationLonghandPart.Direction */,
        'alternate': "direction" /* AnimationLonghandPart.Direction */,
        'reverse': "direction" /* AnimationLonghandPart.Direction */,
        'alternate-reverse': "direction" /* AnimationLonghandPart.Direction */,
        'none': "fill-mode" /* AnimationLonghandPart.FillMode */,
        'forwards': "fill-mode" /* AnimationLonghandPart.FillMode */,
        'backwards': "fill-mode" /* AnimationLonghandPart.FillMode */,
        'both': "fill-mode" /* AnimationLonghandPart.FillMode */,
        'running': "play-state" /* AnimationLonghandPart.PlayState */,
        'paused': "play-state" /* AnimationLonghandPart.PlayState */,
        'infinite': "iteration-count" /* AnimationLonghandPart.IterationCount */,
        'linear': "easing-function" /* AnimationLonghandPart.EasingFunction */,
        'ease': "easing-function" /* AnimationLonghandPart.EasingFunction */,
        'ease-in': "easing-function" /* AnimationLonghandPart.EasingFunction */,
        'ease-out': "easing-function" /* AnimationLonghandPart.EasingFunction */,
        'ease-in-out': "easing-function" /* AnimationLonghandPart.EasingFunction */,
    }));
    matchAnimationNameInShorthand(node, matching) {
        // Order is important within each animation definition for distinguishing <keyframes-name> values from other keywords.
        // When parsing, keywords that are valid for properties other than animation-name
        // whose values were not found earlier in the shorthand must be accepted for those properties rather than for animation-name.
        // See the details in: https://w3c.github.io/csswg-drafts/css-animations/#animation.
        const text = matching.ast.text(node);
        // This is not a known identifier, so return it as `animation-name`.
        if (!LinkableNameMatcher.identifierAnimationLonghandMap.has(text)) {
            return new LinkableNameMatch(text, node, "animation" /* LinkableNameProperties.Animation */);
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
                    return new LinkableNameMatch(text, node, "animation" /* LinkableNameProperties.Animation */);
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
        const shouldMatchOnlyVariableName = propertyName === "position-try" /* LinkableNameProperties.PositionTry */ ||
            propertyName === "position-try-options" /* LinkableNameProperties.PositionTryOptions */;
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
class BezierMatch {
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
    }
}
// clang-format off
class StringMatcher extends matcherBase(StringMatch) {
    // clang-format on
    matches(node, matching) {
        return node.name === 'StringLiteral' ? new StringMatch(matching.ast.text(node), node) : null;
    }
}
class ShadowMatch {
    text;
    node;
    shadowType;
    constructor(text, node, shadowType) {
        this.text = text;
        this.node = node;
        this.shadowType = shadowType;
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
        return new ShadowMatch(valueText, node, matching.ast.propertyName === 'text-shadow' ? "textShadow" /* ShadowType.TextShadow */ : "boxShadow" /* ShadowType.BoxShadow */);
    }
}
class FontMatch {
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    constructor(text, node) {
        this.text = text;
        this.node = node;
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
    text;
    node;
    lines;
    constructor(text, node, lines) {
        this.text = text;
        this.node = node;
        this.lines = lines;
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
    text;
    matching;
    node;
    functionName;
    args;
    constructor(text, matching, node, functionName, args) {
        this.text = text;
        this.matching = matching;
        this.node = node;
        this.functionName = functionName;
        this.args = args;
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
    text;
    matching;
    node;
    constructor(text, matching, node) {
        this.text = text;
        this.matching = matching;
        this.node = node;
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
//# sourceMappingURL=PropertyMatchers.js.map

/***/ })

}]);