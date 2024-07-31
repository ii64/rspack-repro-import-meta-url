"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_StylePropertiesSection_test_ts"],{

/***/ "./src/panels/elements/StylePropertiesSection.test.ts":
/*!************************************************************!*\
  !*** ./src/panels/elements/StylePropertiesSection.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







describe('StylePropertiesSection', () => {
    it('contains specificity information', async () => {
        const specificity = { a: 0, b: 1, c: 0 };
        const selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.renderSelectors([{ text: '.child', specificity }], [true], new WeakMap());
        assert.deepEqual(selectorElement.textContent, '.child');
        assert.deepEqual(_elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.getSpecificityStoredForNodeElement(selectorElement.firstChild), specificity);
    });
    it('renders selectors correctly', async () => {
        let selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.renderSelectors([{ text: '.child', specificity: { a: 0, b: 2, c: 0 } }, { text: '.item', specificity: { a: 0, b: 2, c: 0 } }], [true], new WeakMap());
        assert.deepEqual(selectorElement.textContent, '.child, .item');
        selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.renderSelectors([{ text: '.child', specificity: { a: 0, b: 2, c: 0 } }, { text: '& .item', specificity: { a: 0, b: 2, c: 0 } }], [true], new WeakMap());
        assert.deepEqual(selectorElement.textContent, '.child, & .item');
        selectorElement = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.renderSelectors([{ text: '&.child', specificity: { a: 0, b: 2, c: 0 } }, { text: '& .item', specificity: { a: 0, b: 2, c: 0 } }], [true], new WeakMap());
        assert.deepEqual(selectorElement.textContent, '&.child, & .item');
    });
});
function setUpStyles(cssModel, origin, styleSheetId, header, payload) {
    cssModel.styleSheetAdded({
        styleSheetId,
        frameId: '',
        sourceURL: '',
        origin,
        title: '',
        disabled: false,
        isInline: false,
        isMutable: false,
        isConstructed: false,
        startLine: 0,
        startColumn: 0,
        length: 0,
        endLine: 0,
        endColumn: 0,
        ...header,
    });
    return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles.create({
        cssModel,
        node: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode),
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
        fontPaletteValuesRule: undefined,
        ...payload,
    });
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('StylesPropertySection', () => {
    it('displays the proper sourceURL origin for constructed stylesheets', async () => {
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, endLine: 1, startColumn: 0, endColumn: 0 };
        const header = { sourceURL: 'constructed.css', isMutable: true, isConstructed: true, hasSourceURL: true, length: 1, ...range };
        const matchedPayload = [{
                rule: {
                    selectorList: { selectors: [{ text: 'div' }], text: 'div' },
                    origin,
                    styleSheetId,
                    style: { cssProperties: [{ name: 'color', value: 'red' }], shorthandEntries: [], range },
                },
                matchingSelectors: [0],
            }];
        const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, header, { matchedPayload });
        const rule = matchedStyles.nodeStyles()[0].parentRule;
        const linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.Linkifier);
        const originNode = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.createRuleOriginNode(matchedStyles, linkifier, rule);
        assert.strictEqual(originNode.textContent, '<style>');
        assert.isTrue(linkifier.linkifyCSSLocation.calledOnce);
        assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].styleSheetId, styleSheetId);
        assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].url, 'constructed.css');
    });
    it('displays the proper sourceMappingURL origin for constructed stylesheets', async () => {
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, endLine: 1, startColumn: 0, endColumn: 0 };
        const header = {
            sourceMapURL: 'http://example.com/constructed.css.map',
            isMutable: true,
            isConstructed: true,
            length: 1,
            ...range,
        };
        const matchedPayload = [{
                rule: {
                    selectorList: { selectors: [{ text: 'div' }], text: 'div' },
                    origin,
                    styleSheetId,
                    style: { cssProperties: [{ name: 'color', value: 'red' }], shorthandEntries: [], range },
                },
                matchingSelectors: [0],
            }];
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance(), 'loadResource').callsFake(url => Promise.resolve({
            content: url === header.sourceMapURL ? '{"sources": []}' : '',
        }));
        const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, header, { matchedPayload });
        const styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
        assert.exists(styleSheetHeader);
        const sourceMap = await cssModel.sourceMapManager().sourceMapForClientPromise(styleSheetHeader);
        assert.exists(sourceMap);
        const rule = matchedStyles.nodeStyles()[0].parentRule;
        const linkifier = sinon.createStubInstance(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_5__.Linkifier.Linkifier);
        const originNode = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection.createRuleOriginNode(matchedStyles, linkifier, rule);
        assert.strictEqual(originNode.textContent, 'constructed stylesheet');
        assert.isTrue(linkifier.linkifyCSSLocation.calledOnce);
        // Since we already asserted that a sourcemap exists for our header, it's sufficient to check that
        // linkifyCSSLocation has been called. Verifying that linkifyCSSLocation applies source mapping is out of scope
        // for this unit under test.
        assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].styleSheetId, styleSheetId);
        assert.strictEqual(linkifier.linkifyCSSLocation.args[0][0].url, '');
    });
    it('properly renders ancestor rules', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('  ');
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, startColumn: 0, endLine: 0, endColumn: 6 };
        {
            const matchedPayload = [{
                    rule: {
                        nestingSelectors: ['body', '& ul', 'div'],
                        ruleTypes: [
                            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSRuleType.StyleRule,
                            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSRuleType.StyleRule,
                            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSRuleType.StyleRule,
                        ],
                        selectorList: { selectors: [{ text: 'div' }], text: 'div' },
                        origin,
                        style: { cssProperties: [{ name: 'color', value: 'red' }], shorthandEntries: [] },
                    },
                    matchingSelectors: [0],
                }];
            const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, { ...range }, { matchedPayload });
            const declaration = matchedStyles.nodeStyles()[0];
            assert.exists(declaration);
            const section = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles, declaration, 0, null, null);
            assert.strictEqual(section.element.textContent, 'div {  & ul {    body {      div {      }    }  }}');
        }
        {
            const matchedPayload = [{
                    rule: {
                        nestingSelectors: ['body', 'div'],
                        ruleTypes: [
                            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSRuleType.StyleRule,
                            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.CSSRuleType.StyleRule,
                        ],
                        selectorList: { selectors: [], text: '' },
                        origin,
                        style: { cssProperties: [{ name: 'color', value: 'red' }], shorthandEntries: [] },
                    },
                    matchingSelectors: [0],
                }];
            const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, { ...range }, { matchedPayload });
            const declaration = matchedStyles.nodeStyles()[0];
            assert.exists(declaration);
            const section = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles, declaration, 0, null, null);
            assert.strictEqual(section.element.textContent, 'div {  body {    }}');
        }
    });
    it('updates property rule property names', async () => {
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, startColumn: 0, endLine: 0, endColumn: 6 };
        const propertyName = { text: '--prop', range };
        const propertyRuleStyle = {
            cssProperties: [
                { name: 'inherits', value: 'false' },
                { name: 'initial-value', value: 'red' },
                { name: 'syntax', value: '"<color>"' },
            ],
            shorthandEntries: [],
        };
        const propertyRules = [{
                propertyName,
                origin,
                style: propertyRuleStyle,
                styleSheetId,
            }];
        const matchedPayload = [{
                rule: {
                    selectorList: { selectors: [{ text: 'div' }], text: 'div' },
                    origin,
                    style: { cssProperties: [{ name: propertyName.text, value: 'red' }], shorthandEntries: [] },
                },
                matchingSelectors: [0],
            }];
        const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, { ...range }, { propertyRules, matchedPayload });
        function assertIsPropertyRule(rule) {
            assert.instanceOf(rule, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSRule.CSSPropertyRule);
        }
        const declaration = matchedStyles.getRegisteredProperty(propertyName.text)?.style();
        assert.exists(declaration);
        const rule = declaration.parentRule;
        assertIsPropertyRule(rule);
        const section = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.RegisteredPropertiesSection(stylesSidebarPane, matchedStyles, declaration, 0, propertyName.text, /* expandedByDefault=*/ true);
        const forceUpdateSpy = sinon.spy(stylesSidebarPane, 'forceUpdate');
        const setNameSpy = sinon.stub(cssModel, 'setPropertyRulePropertyName');
        setNameSpy.returns(Promise.resolve(true));
        await section.setHeaderText(rule, propertyName.text);
        assert.isTrue(forceUpdateSpy.calledAfter(setNameSpy));
        assert.isTrue(setNameSpy.calledOnceWithExactly(styleSheetId, sinon.match((r) => r.startLine === range.startLine &&
            r.startColumn === range.startColumn && r.endLine === range.endLine && r.endColumn === range.endColumn), propertyName.text));
    });
    it('renders braces correctly with a non-style-rule section', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('  ');
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, startColumn: 0, endLine: 0, endColumn: 6 };
        const fontPaletteValuesRule = {
            styleSheetId,
            origin,
            style: {
                range,
                cssProperties: [],
                shorthandEntries: [],
            },
            fontPaletteName: {
                range,
                text: '--palette-name',
            },
        };
        const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, { ...range }, { fontPaletteValuesRule });
        const declaration = matchedStyles.fontPaletteValuesRule()?.style;
        assert.exists(declaration);
        const section = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.FontPaletteValuesRuleSection(stylesSidebarPane, matchedStyles, declaration, 0);
        assert.strictEqual(section.element.textContent, '{}');
    });
    it('renders active and inactive position-try rule sections correctly', async () => {
        const cssModel = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
        assert.exists(cssModel);
        const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        const origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular;
        const styleSheetId = '0';
        const range = { startLine: 0, startColumn: 0, endLine: 0, endColumn: 6 };
        const positionTryRules = [
            {
                styleSheetId,
                origin,
                name: {
                    text: '--try-1',
                },
                style: {
                    range,
                    cssProperties: [],
                    shorthandEntries: [],
                },
                active: true,
            },
            {
                styleSheetId,
                origin,
                name: {
                    text: '--try-2',
                },
                style: {
                    range,
                    cssProperties: [],
                    shorthandEntries: [],
                },
                active: false,
            },
        ];
        const matchedStyles = await setUpStyles(cssModel, origin, styleSheetId, { ...range }, { positionTryRules });
        const declaration1 = matchedStyles.positionTryRules()[0].style;
        const declaration2 = matchedStyles.positionTryRules()[1].style;
        assert.exists(declaration1);
        assert.exists(declaration2);
        const section1 = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.PositionTryRuleSection(stylesSidebarPane, matchedStyles, declaration1, 0, positionTryRules[0].active);
        const section2 = new _elements_js__WEBPACK_IMPORTED_MODULE_6__.StylePropertiesSection.PositionTryRuleSection(stylesSidebarPane, matchedStyles, declaration1, 1, positionTryRules[1].active);
        assert.isFalse(section1.propertiesTreeOutline.element.classList.contains('no-affect'));
        assert.isTrue(section2.propertiesTreeOutline.element.classList.contains('no-affect'));
    });
});


/***/ })

}]);