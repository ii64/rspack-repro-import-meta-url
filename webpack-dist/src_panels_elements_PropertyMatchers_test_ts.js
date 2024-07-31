"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PropertyMatchers_test_ts"],{

/***/ "./src/panels/elements/PropertyMatchers.test.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/PropertyMatchers.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/PropertyParser.js */ "./src/testing/PropertyParser.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TreeSearch_found, _TreeSearch_predicate;



class TreeSearch extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker {
    constructor(ast, predicate) {
        super(ast);
        _TreeSearch_found.set(this, null);
        _TreeSearch_predicate.set(this, void 0);
        __classPrivateFieldSet(this, _TreeSearch_predicate, predicate, "f");
    }
    enter({ node }) {
        if (__classPrivateFieldGet(this, _TreeSearch_found, "f")) {
            return false;
        }
        if (__classPrivateFieldGet(this, _TreeSearch_predicate, "f").call(this, node)) {
            __classPrivateFieldSet(this, _TreeSearch_found, __classPrivateFieldGet(this, _TreeSearch_found, "f") ?? node, "f");
            return false;
        }
        return true;
    }
    static find(ast, predicate) {
        return __classPrivateFieldGet(TreeSearch.walk(ast, predicate), _TreeSearch_found, "f");
    }
    static findAll(ast, predicate) {
        const foundNodes = [];
        TreeSearch.walk(ast, (node) => {
            if (predicate(node)) {
                foundNodes.push(node);
            }
            return false;
        });
        return foundNodes;
    }
}
_TreeSearch_found = new WeakMap(), _TreeSearch_predicate = new WeakMap();
function matchSingleValue(name, value, matcher) {
    const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
    if (!ast) {
        return { ast, match: null, text: value };
    }
    const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [matcher]);
    const matchedNode = TreeSearch.find(ast, n => matchedResult.getMatch(n) instanceof matcher.matchType);
    const match = matchedNode && matchedResult.getMatch(matchedNode);
    return {
        ast,
        match: match instanceof matcher.matchType ? match : null,
        text: _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_1__.Printer.walk(ast).get(),
    };
}
function injectVariableSubstitutions(variables) {
    const { getComputedText, getComputedTextRange, getMatch } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype;
    const variableNames = new Map();
    function injectChunk(matching) {
        if (matching.computedText.chunkCount === 0) {
            const propertyOffset = matching.ast.rule.indexOf(matching.ast.propertyName ?? '--');
            assert.isAbove(propertyOffset, 0);
            for (const [varName, value] of Object.entries(variables)) {
                const varText = `var(${varName})`;
                for (let offset = matching.ast.rule.indexOf(varText); offset >= 0; offset = matching.ast.rule.indexOf(varText, offset + 1)) {
                    matching.computedText.push({ text: varText, computedText: () => value, node: {} }, offset - propertyOffset);
                }
                variableNames.set(varText, { varName, value });
            }
        }
    }
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getComputedText')
        .callsFake(function (node) {
        injectChunk(this);
        return getComputedText.call(this, node);
    });
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getComputedTextRange')
        .callsFake(function (from, to) {
        injectChunk(this);
        return getComputedTextRange.call(this, from, to);
    });
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.prototype, 'getMatch')
        .callsFake(function (node) {
        injectChunk(this);
        const resolvedValue = variableNames.get(this.ast.text(node));
        if (!resolvedValue) {
            return getMatch.call(this, node);
        }
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.VariableMatch(this.ast.text(node), node, resolvedValue.varName, [], this, () => resolvedValue.value);
    });
}
describe('Matchers for SDK.CSSPropertyParser.BottomUpTreeMatching', () => {
    it('parses colors', () => {
        for (const fail of ['red-blue', '#f', '#foobar', '', 'rgbz(1 2 2)', 'tan(45deg)']) {
            const { match, text } = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher());
            assert.isNull(match, text);
        }
        for (const succeed of ['rgb(/* R */155, /* G */51, /* B */255)', 'red', 'rgb(0 0 0)', 'rgba(0 0 0)', '#fff', '#ffff',
            '#ffffff', '#ffffffff']) {
            const { match, text } = matchSingleValue('color', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher());
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        // The property name matters:
        for (const fail of ['rgb(/* R */155, /* G */51, /* B */255)', 'red', 'rgb(0 0 0)', 'rgba(0 0 0)', '#fff', '#ffff',
            '#ffffff', '#ffffffff']) {
            const { match, text } = matchSingleValue('width', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher());
            assert.isNull(match, text);
        }
    });
    it('parses colors in logical border properties', () => {
        for (const success of ['border-block-end', 'border-block-end-color', 'border-block-start', 'border-block-start-color',
            'border-inline-end', 'border-inline-end-color', 'border-inline-start', 'border-inline-start-color']) {
            const { ast, match, text } = matchSingleValue(success, 'red', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher());
            assert.exists(match, text);
            assert.strictEqual(match.text, 'red');
            assert.strictEqual(ast?.propertyName, success);
        }
    });
    it('parses linear gradients', () => {
        for (const succeed of ['linear-gradient(90deg, red, blue)', 'linear-gradient(to top left, red, blue)',
            'linear-gradient(in oklab, red, blue)']) {
            const { match, text } = matchSingleValue('background', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinearGradientMatcher());
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        for (const fail of ['linear-gradient(90deg, red, blue)', 'linear-gradient(to top left, red, blue)',
            'linear-gradient(in oklab, red, blue)']) {
            const { match, text } = matchSingleValue('width', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher());
            assert.isNull(match, text);
        }
    });
    it('parses colors in masks', () => {
        for (const succeed of ['mask', 'mask-image', 'mask-border', 'mask-border-source']) {
            const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(succeed, 'linear-gradient(to top, red, var(--other))');
            assert.exists(ast, succeed);
            const matching = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatcher()]);
            const colorNode = TreeSearch.find(ast, node => ast.text(node) === 'red');
            assert.exists(colorNode);
            const match = matching.getMatch(colorNode);
            assert.exists(match);
            assert.instanceOf(match, _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMatch);
            assert.strictEqual(match.text, 'red');
        }
    });
    it('parses color-mix with vars', () => {
        injectVariableSubstitutions({
            '--interpolation': 'shorter',
            '--color1': 'red',
            '--percentage': '13%',
            '--rgb': 'shorter',
            '--space': 'in srgb',
            '--color2': '25% blue',
            '--multiple-colors': 'red, blue',
        });
        {
            const { ast, match, text } = matchSingleValue('color', 'color-mix(in srgb var(--interpolation) hue, red var(--percentage), rgb(var(--rgb)))', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.space.map(n => ast.text(n)), ['in', 'srgb', 'var(--interpolation)', 'hue']);
            assert.strictEqual(match.color1.map(n => ast.text(n)).join(), 'red,var(--percentage)');
            assert.strictEqual(match.color2.map(n => ast.text(n)).join(), 'rgb(var(--rgb))');
        }
        {
            const { ast, match, text } = matchSingleValue('color', 'color-mix(var(--space), var(--color1), var(--color2))', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.strictEqual(match.space.map(n => ast.text(n)).join(), 'var(--space)');
            assert.strictEqual(match.color1.map(n => ast.text(n)).join(), 'var(--color1)');
            assert.strictEqual(match.color2.map(n => ast.text(n)).join(), 'var(--color2)');
        }
        for (const fail of ['color-mix(var(--color1), var(--color1), var(--color2))',
            'color-mix(var(--space), var(--color1) var(--percentage) var(--percentage), var(--color2))',
            'color-mix(var(--space), var(--color1) 10% var(--percentage), var(--color2))',
            'color-mix(var(--space), var(--color1), var(--color2) 15%)',
            'color-mix(var(--space), var(--color1), var(--color2) var(--percentage))',
            'color-mix(var(--space), var(--multiple-colors))',
        ]) {
            const { ast, match, text } = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher());
            assert.exists(ast, text);
            assert.isNull(match, text);
        }
    });
    it('parses color-mix', () => {
        function check(space, color1, color2) {
            const { ast, match, text } = matchSingleValue('color', `color-mix(${space}, ${color1}, ${color2})`, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.space.map(n => ast.text(n)).join(' '), space, text);
            assert.strictEqual(match.color1.map(n => ast.text(n)).join(' '), color1, text);
            assert.strictEqual(match.color2.map(n => ast.text(n)).join(' '), color2, text);
        }
        function checkFailure(space, color1, color2) {
            const { match, text } = matchSingleValue('color', `color-mix(${space}, ${color1}, ${color2})`, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ColorMixMatcher());
            assert.isNull(match, text);
        }
        check('in srgb shorter hue', 'red 35%', 'blue');
        check('in /*asd*/ srgb shorter hue', 'red 35%', 'blue');
        check('in srgb', 'red 35%', 'blue');
        check('in srgb', '35% red', 'blue 16%');
        check('in srgb', '/*a*/ 35% /*b*/ red /*c*/', '/*a*/ blue /*b*/ 16% /*c*/');
        checkFailure('insrgb shorter hue', 'red 35%', 'blue');
        checkFailure('/*asd*/srgb in', 'red 35%', 'blue');
        checkFailure('in srgb', '0% red', 'blue 0%');
    });
    it('parses URLs', () => {
        const url = 'http://example.com';
        {
            const { match, text } = matchSingleValue('background-image', `url(${url})`, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.URLMatcher());
            assert.exists(match);
            assert.strictEqual(match.url, url, text);
        }
        {
            const { match, text } = matchSingleValue('background-image', `url("${url}")`, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.URLMatcher());
            assert.exists(match);
            assert.strictEqual(match.url, url, text);
        }
    });
    it('parses angles correctly', () => {
        for (const succeed of ['45deg', '1.3rad', '-25grad', '2.3turn']) {
            const { ast, match, text } = matchSingleValue('transform', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AngleMatcher());
            assert.exists(ast, succeed);
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        for (const fail of ['0DEG', '0', '123', '2em']) {
            const { match, text } = matchSingleValue('transform', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AngleMatcher());
            assert.isNull(match, text);
        }
    });
    it('parses linkable names correctly', () => {
        function match(name, value) {
            const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
            assert.exists(ast);
            const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [
                new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinkableNameMatcher(),
            ]);
            const matches = TreeSearch.findAll(ast, node => matchedResult.getMatch(node) instanceof _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LinkableNameMatch);
            return matches.map(m => matchedResult.getMatch(m)?.text);
        }
        assert.deepStrictEqual(match('animation-name', 'first, second, -moz-third'), ['first', 'second', '-moz-third']);
        assert.deepStrictEqual(match('animation-name', 'first'), ['first']);
        assert.deepStrictEqual(match('font-palette', 'first'), ['first']);
        {
            assert.deepStrictEqual(match('position-try-options', 'flip-block'), []);
            assert.deepStrictEqual(match('position-try-options', '--one'), ['--one']);
            assert.deepStrictEqual(match('position-try-options', '--one, --two'), ['--one', '--two']);
        }
        {
            assert.deepStrictEqual(match('position-try', 'flip-block'), []);
            assert.deepStrictEqual(match('position-try', '--one'), ['--one']);
            assert.deepStrictEqual(match('position-try', '--one, --two'), ['--one', '--two']);
        }
        {
            injectVariableSubstitutions({
                '--duration-and-easing': '1s linear',
            });
            assert.deepStrictEqual(match('animation', '1s linear --animation-name'), ['--animation-name']);
            assert.deepStrictEqual(match('animation', '1s linear linear'), ['linear']);
            assert.deepStrictEqual(match('animation', '1s linear --first-name, 1s ease-in --second-name'), ['--first-name', '--second-name']);
            assert.deepStrictEqual(match('animation', '1s linear'), []);
            // Matching to variable names inside `var()` functions are fine as it is handled by variable renderer in usage.
            assert.deepStrictEqual(match('animation', 'var(--duration-and-easing) linear'), ['--duration-and-easing', 'linear']);
            assert.deepStrictEqual(match('animation', '1s linear var(--non-existent, --animation-name)'), ['--non-existent', '--animation-name']);
        }
    });
    it('parses easing functions properly', () => {
        for (const succeed of ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear(0 0%, 1 100%)',
            'cubic-bezier(0.3, 0.3, 0.3, 0.3)']) {
            const { ast, match, text } = matchSingleValue('animation-timing-function', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.BezierMatcher());
            assert.exists(ast, succeed);
            assert.exists(match, text);
            assert.strictEqual(match.text, succeed);
        }
        const { ast, match, text } = matchSingleValue('border', 'ease-in', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.BezierMatcher());
        assert.exists(ast, 'border');
        assert.isNull(match, text);
    });
    it('parses strings correctly', () => {
        function match(name, value) {
            const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration(name, value);
            assert.exists(ast);
            const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.StringMatcher()]);
            assert.exists(matchedResult);
            const match = TreeSearch.find(ast, node => matchedResult.getMatch(node) instanceof _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.StringMatch);
            assert.exists(match);
        }
        match('quotes', '"\'" "\'"');
        match('content', '"foobar"');
        match('--image-file-accelerometer-back', 'url("devtools\:\/\/devtools\/bundled\/Images\/accelerometer-back\.svg")');
    });
    it('parses shadows correctly', () => {
        const { match, text } = matchSingleValue('box-shadow', '/*0*/3px 3px red, -1em 0 .4em /*a*/ olive /*b*/', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.ShadowMatcher());
        assert.exists(match, text);
        assert.strictEqual(match.text, '/*0*/3px 3px red, -1em 0 .4em /*a*/ olive');
    });
    it('parses fonts correctly', () => {
        for (const fontSize of ['-.23', 'smaller', '17px']) {
            const { ast, match, text } = matchSingleValue('font-size', fontSize, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.strictEqual(match.text, fontSize);
        }
        {
            const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.tokenizeDeclaration('font-family', '"Gill Sans", sans-serif');
            assert.exists(ast);
            const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatcher()]);
            assert.exists(matchedResult);
            const matches = TreeSearch.findAll(ast, node => matchedResult.getMatch(node) instanceof _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.FontMatch);
            assert.deepStrictEqual(matches.map(m => matchedResult.getMatch(m)?.text), ['"Gill Sans"', 'sans-serif']);
        }
    });
    it('parses grid templates correctly', () => {
        injectVariableSubstitutions({
            '--row': '"a a b"',
            '--row-with-names': '[name1] "a a" [name2]',
            '--line-name': '[name1]',
            '--double-row': '"a b" "b c"',
        });
        {
            const { ast, match, text } = matchSingleValue('grid', '"a a"', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.strictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')).join('\n'), '"a a"');
        }
        {
            const { ast, match, text } = matchSingleValue('grid-template-areas', '"a a a" "b b b" "c c c"', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['"a a a"', '"b b b"', '"c c c"']);
        }
        {
            const { ast, match, text } = matchSingleValue('grid-template', '"a a a" var(--row) / auto 1fr auto', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['"a a a"', 'var(--row) / auto 1fr auto']);
        }
        {
            const { ast, match, text } = matchSingleValue('grid', '[header-top] "a a" var(--row-with-names) [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['[header-top] "a a" var(--row-with-names)', '[main-top] "b b b" 1fr [main-bottom] / auto 1fr auto']);
        }
        {
            const { ast, match, text } = matchSingleValue('grid', '[header-top] "a a" "b b b" var(--line-name) "c c" / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['[header-top] "a a"', '"b b b" var(--line-name)', '"c c" / auto 1fr auto']);
        }
        {
            const { ast, match, text } = matchSingleValue('grid', '[line1] "a a" [line2] var(--double-row) "b b" / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['[line1] "a a" [line2]', 'var(--double-row)', '"b b" / auto 1fr auto']);
        }
        {
            const { ast, match, text } = matchSingleValue('grid', '"a a" var(--unresolved) / auto 1fr auto;', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.GridTemplateMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            assert.deepStrictEqual(match.lines.map(line => line.map(n => ast.text(n)).join(' ')), ['"a a" var(--unresolved) / auto 1fr auto']);
        }
    });
    it('parses light-dark correctly', () => {
        for (const fail of ['light-dark()', 'light-dark(red)', 'light-dark(var(--foo))']) {
            const { match, text } = matchSingleValue('color', fail, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher());
            assert.isNull(match, text);
        }
        for (const succeed of ['light-dark(red, blue)', 'light-dark(var(--foo), red)', 'light-dark(red, var(--foo))',
            'light-dark(var(--foo), var(--bar))']) {
            const { ast, match, text } = matchSingleValue('color', succeed, new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher());
            assert.exists(ast, text);
            assert.exists(match, text);
            const [light, dark] = succeed.slice('light-dark('.length, -1).split(', ');
            assert.lengthOf(match.light, 1);
            assert.lengthOf(match.dark, 1);
            assert.strictEqual(ast.text(match.light[0]), light);
            assert.strictEqual(ast.text(match.dark[0]), dark);
        }
        // light-dark only applies to color properties
        const { match, text } = matchSingleValue('width', 'light-dark(red, blue)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LightDarkColorMatcher());
        assert.isNull(match, text);
    });
    describe('AnchorFunctionMatcher', () => {
        it('should not match when it is not a call expression', () => {
            const { match, text } = matchSingleValue('left', 'anchor', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.isNull(match, text);
        });
        it('should not match if the anchor() and anchor-size() calls dont have any arguments', () => {
            const { match: anchorMatch } = matchSingleValue('left', 'anchor()', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.isNull(anchorMatch);
            const { match: anchorSizeMatch } = matchSingleValue('width', 'anchor-size()', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.isNull(anchorSizeMatch);
        });
        it('should match if it is an anchor() or anchor-size() call', () => {
            const { match: anchorMatch, text: anchorText } = matchSingleValue('left', 'anchor(left)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.exists(anchorMatch, anchorText);
            const { match: anchorSizeMatch, text: anchorSizeText } = matchSingleValue('width', 'anchor-size(width)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.exists(anchorSizeMatch, anchorSizeText);
        });
        it('should match dashed identifier as name from the first argument', () => {
            const { ast: anchorAst, match: anchorMatch, text: anchorText } = matchSingleValue('left', 'anchor(--dashed-ident left)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.exists(anchorMatch, anchorText);
            assert.strictEqual(anchorAst.text(anchorMatch.args[0]), '--dashed-ident');
            const { ast: anchorSizeAst, match: anchorSizeMatch, text: anchorSizeText } = matchSingleValue('width', 'anchor-size(--dashed-ident width)', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.AnchorFunctionMatcher());
            assert.exists(anchorSizeMatch, anchorSizeText);
            assert.strictEqual(anchorSizeAst.text(anchorSizeMatch.args[0]), '--dashed-ident');
        });
    });
    describe('PositionAnchorMatcher', () => {
        it('should match `position-anchor` property with dashed identifier', () => {
            const { match, text } = matchSingleValue('position-anchor', '--dashed-ident', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.PositionAnchorMatcher());
            assert.exists(match, text);
            assert.strictEqual(match.text, '--dashed-ident');
        });
        it('should not match `position-anchor` property when it is not a dashed identifier', () => {
            const { match } = matchSingleValue('position-anchor', 'something-non-dashed', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.PositionAnchorMatcher());
            assert.isNull(match);
        });
    });
    it('matches lengths', () => {
        const { match, text } = matchSingleValue('min-width', '100px', new _elements_js__WEBPACK_IMPORTED_MODULE_2__.PropertyMatchers.LengthMatcher());
        assert.exists(match, text);
        assert.strictEqual(match.text, '100px');
    });
});


/***/ }),

/***/ "./src/testing/PropertyParser.ts":
/*!***************************************!*\
  !*** ./src/testing/PropertyParser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Printer: () => (/* binding */ Printer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Printer_printedText, _Printer_indent;
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class Printer extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.TreeWalker {
    constructor() {
        super(...arguments);
        _Printer_printedText.set(this, []);
        _Printer_indent.set(this, 0);
    }
    enter({ node }) {
        var _a;
        const text = this.ast.text(node);
        __classPrivateFieldGet(this, _Printer_printedText, "f").push(`${'|'.repeat(__classPrivateFieldGet(this, _Printer_indent, "f"))} ${node.name}${text !== node.name ? `: ${text}` : ''}`);
        __classPrivateFieldSet(this, _Printer_indent, (_a = __classPrivateFieldGet(this, _Printer_indent, "f"), _a++, _a), "f");
        return true;
    }
    leave() {
        var _a;
        __classPrivateFieldSet(this, _Printer_indent, (_a = __classPrivateFieldGet(this, _Printer_indent, "f"), _a--, _a), "f");
    }
    get() {
        return __classPrivateFieldGet(this, _Printer_printedText, "f").join('\n');
    }
    static log(ast) {
        /* eslint-disable-next-line no-console */
        console.log(Printer.walk(ast).get());
    }
    static rule(rule) {
        const ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree('', rule, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.css.cssLanguage.parser.parse(rule).topNode);
        return Printer.walk(ast).get();
    }
}
_Printer_printedText = new WeakMap(), _Printer_indent = new WeakMap();


/***/ })

}]);