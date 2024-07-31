"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_StylesSidebarPane_test_ts"],{

/***/ "./src/panels/elements/StylesSidebarPane.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/StylesSidebarPane.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







describe('StylesSidebarPane', () => {
    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('StylesSidebarPane', () => {
        it('unescapes CSS strings', () => {
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.unescapeCssString(String.raw `"I\F1 t\EB rn\E2 ti\F4 n\E0 liz\E6 ti\F8 n\2603 \1F308  can be \t\r\ic\k\y"`), '"I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\u{1F308} can be tricky"');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.unescapeCssString(String.raw `"_\DBFF_\\DBFF_\\\DBFF_\\\\DBFF_\\\\\DBFF_"`), '"_\uFFFD_\\DBFF_\\\\DBFF_\\\\\\DBFF_\\\\\\\\DBFF_"');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.unescapeCssString(String.raw `"\0_\DBFF_\DFFF_\110000"`), '"\uFFFD_\uFFFD_\uFFFD_\uFFFD"', 'U+0000, lone surrogates, and values above U+10FFFF should become U+FFFD');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.unescapeCssString(String.raw `"_\D83C\DF08_"`), '"_\uFFFD\uFFFD_"', 'surrogates should not be combined');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.unescapeCssString('"_\\41\n_\\41\t_\\41\x20_"'), '"_A_A_A_"', 'certain trailing whitespace characters should be consumed as part of the escape sequence');
        });
        it('escapes URL as CSS comments', () => {
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/'), 'https://abc.com/');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/'), 'https://abc.com/*/');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*'), 'https://abc.com/*/?q=*');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*/'), 'https://abc.com/*/?q=*%2F');
            assert.strictEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.escapeUrlAsCssComment('https://abc.com/*/?q=*/#hash'), 'https://abc.com/*/?q=*%2F#hash');
        });
        describe('rebuildSectionsForMatchedStyleRulesForTest', () => {
            it('should add @position-try section', async () => {
                const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
                const matchedStyles = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
                    cssModel: stylesSidebarPane.cssModel(),
                    node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                    inlinePayload: null,
                    attributesPayload: null,
                    matchedPayload: [],
                    pseudoPayload: [],
                    inheritedPayload: [],
                    inheritedPseudoPayload: [],
                    animationsPayload: [],
                    parentLayoutNodeId: undefined,
                    positionTryRules: [{
                            name: { text: '--try-one' },
                            origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.CSS.StyleSheetOrigin.Regular,
                            style: {
                                cssProperties: [{ name: 'bottom', value: 'anchor(--anchor-name bottom)' }],
                                shorthandEntries: [],
                            },
                            active: false,
                        }],
                    propertyRules: [],
                    cssPropertyRegistrations: [],
                    fontPaletteValuesRule: undefined,
                });
                const sectionBlocks = await stylesSidebarPane.rebuildSectionsForMatchedStyleRulesForTest(matchedStyles, new Map(), new Map());
                assert.strictEqual(sectionBlocks.length, 2);
                assert.strictEqual(sectionBlocks[1].titleElement()?.textContent, '@position-try --try-one');
                assert.strictEqual(sectionBlocks[1].sections.length, 1);
                assert.instanceOf(sectionBlocks[1].sections[0], _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.PositionTryRuleSection);
            });
        });
        it('should add @font-palette-values section to the end', async () => {
            const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
            const matchedStyles = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
                cssModel: stylesSidebarPane.cssModel(),
                node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                inlinePayload: null,
                attributesPayload: null,
                matchedPayload: [],
                pseudoPayload: [],
                inheritedPayload: [],
                inheritedPseudoPayload: [],
                animationsPayload: [],
                parentLayoutNodeId: undefined,
                positionTryRules: [],
                propertyRules: [],
                cssPropertyRegistrations: [],
                fontPaletteValuesRule: {
                    fontPaletteName: { text: '--palette' },
                    origin: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.CSS.StyleSheetOrigin.Regular,
                    style: {
                        cssProperties: [{ name: 'font-family', value: 'Bixa' }, { 'name': 'override-colors', value: '0 red' }],
                        shorthandEntries: [],
                    },
                },
            });
            const sectionBlocks = await stylesSidebarPane.rebuildSectionsForMatchedStyleRulesForTest(matchedStyles, new Map(), new Map());
            assert.strictEqual(sectionBlocks.length, 2);
            assert.strictEqual(sectionBlocks[1].titleElement()?.textContent, '@font-palette-values --palette');
            assert.strictEqual(sectionBlocks[1].sections.length, 1);
            assert.instanceOf(sectionBlocks[1].sections[0], _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.FontPaletteValuesRuleSection);
        });
    });
    describe('IdleCallbackManager', () => {
        // IdleCallbackManager delegates work using requestIdleCallback, which does not generally execute requested callbacks
        // in order. This test verifies that callbacks do happen in order even if timeouts are run out.
        it('schedules callbacks in order', async () => {
            // Override the default timeout with a very short one
            class QuickIdleCallbackManager extends _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.IdleCallbackManager {
                scheduleIdleCallback(_) {
                    super.scheduleIdleCallback(1);
                }
            }
            const timeout = (time) => new Promise(resolve => setTimeout(resolve, time));
            const elements = [];
            const callbacks = new QuickIdleCallbackManager();
            callbacks.schedule(() => elements.push(0));
            callbacks.schedule(() => elements.push(1));
            callbacks.schedule(() => elements.push(2));
            callbacks.schedule(() => elements.push(3));
            await timeout(10);
            callbacks.schedule(() => elements.push(4));
            callbacks.schedule(() => elements.push(5));
            callbacks.schedule(() => elements.push(6));
            callbacks.schedule(() => elements.push(7));
            await timeout(10);
            await callbacks.awaitDone();
            assert.deepEqual(elements, [0, 1, 2, 3, 4, 5, 6, 7]);
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('CSSPropertyPrompt', () => {
        const CSSPropertyPrompt = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.CSSPropertyPrompt;
        const CSS_VARIABLES_FOR_TEST = {
            '--rgb-color': 'rgb(0 0 0)',
            '--wide-gamut-color': 'lch(0 0 0)',
        };
        const mockTreeItem = {
            property: {
                name: 'color',
            },
            node() {
                return {
                    isSVGNode() {
                        return false;
                    },
                    domModel() {
                        return {
                            cssModel() {
                                return {
                                    getComputedStyle() {
                                        return new Map();
                                    },
                                };
                            },
                        };
                    },
                };
            },
            matchedStyles() {
                return {
                    availableCSSVariables() {
                        return ['--rgb-color', '--wide-gamut-color'];
                    },
                    computeCSSVariable(_, completion) {
                        return { value: CSS_VARIABLES_FOR_TEST[completion], declaration: null };
                    },
                };
            },
        };
        const noop = () => { };
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('value autocompletion', () => {
            it('shows autocomplete item with color swatch for CSS variables with RGB color', async () => {
                const attachedElement = document.createElement('div');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(attachedElement);
                const cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, false);
                cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                const spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                cssPropertyPrompt.setText('var(--rgb');
                await cssPropertyPrompt.complete(true);
                const colorCompletions = spyObj?.updateSuggestions.firstCall.args[1];
                const renderedElement = colorCompletions?.[0].subtitleRenderer?.();
                assert.instanceOf(renderedElement, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ColorSwatch);
            });
            it('shows autocomplete item with color swatch for CSS variables with wide gamut color', async () => {
                const attachedElement = document.createElement('div');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(attachedElement);
                const cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, false);
                cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                const spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                cssPropertyPrompt.setText('var(--wide');
                await cssPropertyPrompt.complete(true);
                const colorCompletions = spyObj?.updateSuggestions.firstCall.args[1];
                const renderedElement = colorCompletions?.[0].subtitleRenderer?.();
                assert.instanceOf(renderedElement, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_5__.ColorSwatch.ColorSwatch);
            });
            it('shows autocomplete property names for CSS aliases', async () => {
                const attachedElement = document.createElement('div');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(attachedElement);
                const cssPropertyPrompt = new CSSPropertyPrompt(mockTreeItem, true);
                cssPropertyPrompt.attachAndStartEditing(attachedElement, noop);
                const spyObj = sinon.spy(cssPropertyPrompt.suggestBoxForTest());
                cssPropertyPrompt.setText('word-wra');
                await cssPropertyPrompt.complete(true);
                const completions = spyObj?.updateSuggestions.firstCall.args[1];
                assert.strictEqual(completions?.[0].text, 'word-wrap');
                assert.strictEqual(completions?.[1].text, 'overflow-wrap');
                assert.strictEqual(completions?.[1].subtitle, '= word-wrap');
            });
        });
    });
});


/***/ })

}]);