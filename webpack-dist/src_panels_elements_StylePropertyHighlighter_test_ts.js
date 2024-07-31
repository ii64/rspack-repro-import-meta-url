"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_StylePropertyHighlighter_test_ts"],{

/***/ "./src/panels/elements/StylePropertyHighlighter.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/StylePropertyHighlighter.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('StylePropertyHighlighter', () => {
    async function setupStylesPane() {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode, sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode));
        const stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        const matchedStyles = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSMatchedStyles.CSSMatchedStyles.create({
            cssModel: target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSModel.CSSModel),
            node: stylesSidebarPane.node(),
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
        });
        return {
            stylesSidebarPane,
            matchedStyles,
        };
    }
    function createSection(stylesSidebarPane, matchedStyles, sectionName, propertyName) {
        const style = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSStyleDeclaration.CSSStyleDeclaration);
        if (propertyName) {
            const property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSProperty.CSSProperty(style, 0, propertyName, 'value', true, false, true, false, '', undefined);
            style.leadingProperties.returns([property]);
            style.hasActiveProperty.callsFake(name => name === propertyName);
        }
        else {
            style.leadingProperties.returns([]);
        }
        return new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertiesSection.StylePropertiesSection(stylesSidebarPane, matchedStyles, style, 
        /* sectionIdx */ 0, /* computedStyles */ null, 
        /* parentsComputedStyles */ null, sectionName);
    }
    function createBlockAndSection(stylesSidebarPane, matchedStyles, sectionName, propertyName) {
        const titleElement = sinon.createStubInstance(Element);
        const block = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylesSidebarPane.SectionBlock(titleElement, true);
        block.sections = [createSection(stylesSidebarPane, matchedStyles, sectionName, propertyName)];
        return block;
    }
    it('highlights layers', async () => {
        const { stylesSidebarPane, matchedStyles } = await setupStylesPane();
        const getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
        const block = createBlockAndSection(stylesSidebarPane, matchedStyles);
        getSectionBlockByName.returns(block);
        const [section] = block.sections;
        const style = section.style();
        // Attach a property late, in order to verify that highlighting the layer repopulates the tree view.
        const property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSProperty.CSSProperty(style, 0, '', '', true, false, true, false, '', undefined);
        style.leadingProperties.returns([property]);
        assert.isUndefined(section.propertiesTreeOutline.firstChild());
        const highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
        const highlightSpy = sinon.spy(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
        highlighter.findAndHighlightSectionBlock('dontcare');
        const firstChild = section.propertiesTreeOutline.firstChild();
        assert.exists(firstChild);
        assert.deepEqual(firstChild.property, property);
        assert.isTrue(highlightSpy.calledOnceWithExactly(block.titleElement()));
    });
    it('highlights sections', async () => {
        const { stylesSidebarPane, matchedStyles } = await setupStylesPane();
        const getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
        const block = createBlockAndSection(stylesSidebarPane, matchedStyles, 'sectionname');
        const blockExpandSpy = sinon.spy(block, 'expand');
        getSectionBlockByName.callsFake(name => name === 'blockname' ? block : undefined);
        const highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
        const highlightSpy = sinon.stub(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
        highlighter.findAndHighlightSection('sectionname', 'blockname');
        assert.isTrue(blockExpandSpy.called);
        assert.isTrue(highlightSpy.calledOnceWithExactly(block.sections[0].element));
    });
    it('highlights properties in sections in blocks', async () => {
        const { stylesSidebarPane, matchedStyles } = await setupStylesPane();
        const getSectionBlockByName = sinon.stub(stylesSidebarPane, 'getSectionBlockByName');
        const block1 = createBlockAndSection(stylesSidebarPane, matchedStyles, 'section1', 'property');
        const block1ExpandSpy = sinon.spy(block1, 'expand');
        const block2 = createBlockAndSection(stylesSidebarPane, matchedStyles, 'section2', 'property');
        block2.sections.unshift(createSection(stylesSidebarPane, matchedStyles, 'extrasection'));
        const block2ExpandSpy = sinon.spy(block2, 'expand');
        getSectionBlockByName.callsFake(name => {
            if (name === 'block1') {
                return block1;
            }
            if (name === 'block2') {
                return block2;
            }
            return undefined;
        });
        const highlighter = new _elements_js__WEBPACK_IMPORTED_MODULE_5__.StylePropertyHighlighter.StylePropertyHighlighter(stylesSidebarPane);
        const highlightSpy = sinon.stub(_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils, 'highlightElement');
        highlighter.findAndHighlightPropertyName('property', 'section2', 'block2');
        assert.isFalse(block1ExpandSpy.called);
        assert.isTrue(block2ExpandSpy.called);
        const element = block2.sections[1].propertiesTreeOutline.firstChild()?.listItemElement;
        assert.exists(element);
        assert.isTrue(highlightSpy.calledOnceWithExactly(element));
    });
});


/***/ })

}]);