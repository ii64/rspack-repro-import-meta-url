"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PropertyRenderer_test_ts"],{

/***/ "./src/panels/elements/PropertyRenderer.test.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/PropertyRenderer.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/PropertyParser.js */ "./src/testing/PropertyParser.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('PropertyRenderer', () => {
    describe('Renderer', () => {
        function textFragments(nodes) {
            return nodes.map(n => n.textContent);
        }
        it('parses text', () => {
            // Prevent normaliztaion to get an accurate representation of the parser result.
            sinon.stub(Element.prototype, 'normalize');
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', 'var(--v)', []).childNodes)), ['var', '(', '--v', ')']);
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', '/* comments are text */ 1px solid 4', [])
                .childNodes)), ['/* comments are text */', ' ', '1px', ' ', 'solid', ' ', '4']);
            assert.deepStrictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer
                .renderValueElement('--p', '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)', [])
                .childNodes)), [
                '2px', ' ', 'var', '(', '--double', ',', ' ', 'var', '(', '--fallback', ',', ' ', 'black', ')',
                ')', ' ', '#32a1ce', ' ', 'rgb', '(', '124', ' ', '125', ' ', '21', ' ', '0', ')',
            ]);
        });
        const cssParser = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.css.cssLanguage.parser;
        it('reproduces the input if nothing matched', () => {
            const property = '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)';
            const rule = `*{--property: ${property};}`;
            const tree = cssParser.parse(rule).topNode;
            const ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree(property, rule, tree);
            const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            const context = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.RenderingContext(ast, new Map(), matchedResult);
            assert.deepStrictEqual(textFragments(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.render(tree, context).nodes).join(''), rule, _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__.Printer.walk(ast).get());
        });
        it('correctly renders subtrees', () => {
            const property = '2px var(--double, var(--fallback, black)) #32a1ce rgb(124 125 21 0)';
            const rule = `*{--property: ${property};}`;
            const tree = cssParser.parse(rule).topNode.firstChild?.firstChild?.nextSibling?.firstChild?.nextSibling;
            assert.exists(tree);
            const ast = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.SyntaxTree(property, rule, tree);
            const matchedResult = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, []);
            const context = new _elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.RenderingContext(ast, new Map(), matchedResult);
            assert.deepStrictEqual(textFragments(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.render(tree, context).nodes).join(''), property, _testing_PropertyParser_js__WEBPACK_IMPORTED_MODULE_2__.Printer.walk(ast).get());
        });
        it('renders trailing comments', () => {
            const property = '/* color: red */ blue /* color: red */';
            assert.strictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', property, []).childNodes))
                .join(''), property);
        });
        it('renders malformed comments', () => {
            const property = 'red /* foo: bar';
            assert.strictEqual(textFragments(Array.from(_elements_js__WEBPACK_IMPORTED_MODULE_4__.PropertyRenderer.Renderer.renderValueElement('--p', property, []).childNodes))
                .join(''), property);
        });
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