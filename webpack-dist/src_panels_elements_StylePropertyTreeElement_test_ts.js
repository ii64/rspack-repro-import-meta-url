"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_StylePropertyTreeElement_test_ts"],{

/***/ "./src/panels/elements/StylePropertyTreeElement.test.ts":
/*!**************************************************************!*\
  !*** ./src/panels/elements/StylePropertyTreeElement.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/elements/components/components.ts");
/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./elements.js */ "./src/panels/elements/elements.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_9__.describeWithMockConnection)('StylePropertyTreeElement', () => {
    let stylesSidebarPane;
    let mockStylePropertiesSection;
    let mockCssStyleDeclaration;
    let mockMatchedStyles;
    let mockVariableMap;
    beforeEach(async () => {
        stylesSidebarPane = _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylesSidebarPane.StylesSidebarPane.instance({ forceNew: true });
        mockVariableMap = {
            '--a': 'red',
            '--b': 'blue',
            '--blue': 'blue',
            '--space': 'shorter hue',
            '--garbage-space': 'this-is-garbage-text',
            '--prop': 'customproperty',
            '--zero': '0',
        };
        mockStylePropertiesSection = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertiesSection.StylePropertiesSection);
        mockCssStyleDeclaration = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSStyleDeclaration.CSSStyleDeclaration);
        mockMatchedStyles = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles);
        mockMatchedStyles.keyframes.returns([]);
        mockMatchedStyles.computeCSSVariable.callsFake((style, name) => {
            return {
                value: mockVariableMap[name],
                declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty),
            };
        });
        mockCssStyleDeclaration.leadingProperties.returns([]);
        mockCssStyleDeclaration.styleSheetId = 'stylesheet-id';
        mockCssStyleDeclaration.range = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.TextRange.TextRange(0, 0, 10, 10);
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance({ forceNew: true });
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance(), workspace);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({ forceNew: true, resourceMapping, targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance() });
    });
    function getTreeElement(name, value, longhandProperties = []) {
        const property = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, name, value, true, false, true, false, '', undefined, longhandProperties);
        return new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.StylePropertyTreeElement({
            stylesPane: stylesSidebarPane,
            section: mockStylePropertiesSection,
            matchedStyles: mockMatchedStyles,
            property,
            isShorthand: longhandProperties.length > 0,
            inherited: false,
            overloaded: false,
            newProperty: true,
        });
    }
    describe('updateTitle', () => {
        it('timing swatch, shadow swatch and length swatch are not shown for longhands expanded inside shorthands', async () => {
            const stylePropertyTreeElement = getTreeElement('', '', [
                { name: 'animation-timing-function', value: 'linear' },
                { name: 'text-shadow', value: '2px 2px #ff0000' },
                { name: 'box-shadow', value: '2px 2px #ff0000' },
                { name: 'margin-top', value: '10px' },
            ]);
            await stylePropertyTreeElement.onpopulate();
            stylePropertyTreeElement.updateTitle();
            stylePropertyTreeElement.expand();
            const assertNullSwatchOnChildAt = (n, swatchSelector) => {
                const childValueElement = stylePropertyTreeElement.childAt(n)
                    .valueElement;
                assert.exists(childValueElement);
                assert.notExists(childValueElement.querySelector(swatchSelector));
            };
            assertNullSwatchOnChildAt(0, '[is="bezier-swatch"]');
            assertNullSwatchOnChildAt(1, '[is="css-shadow-swatch"]');
            assertNullSwatchOnChildAt(2, '[is="css-shadow-swatch"]');
            assertNullSwatchOnChildAt(3, 'devtools-css-length');
        });
        describe('color-mix swatch', () => {
            it('should show color mix swatch when color-mix is used with a color', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, red, blue)');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                const colorSwatches = Array.from(stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-color-swatch') || []);
                assert.exists(colorMixSwatch);
                assert.exists(colorSwatches.find(colorSwatch => colorSwatch.textContent === 'red'));
                assert.exists(colorSwatches.find(colorSwatch => colorSwatch.textContent === 'blue'));
            });
            it('should show color mix swatch when color-mix is used with a known variable as color', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                const cssVarSwatches = Array.from(stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-css-var-swatch') || []);
                assert.exists(colorMixSwatch);
                assert.exists(cssVarSwatches.find(cssVarSwatch => cssVarSwatch.textContent === 'var(--a)'));
                assert.exists(cssVarSwatches.find(cssVarSwatch => cssVarSwatch.textContent === 'var(--b)'));
            });
            it('should not show color mix swatch when color-mix is used with an unknown variable as color', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in srgb, var(--unknown-a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.isNull(colorMixSwatch);
            });
            it('should show color mix swatch when color-mix is used with a known variable in interpolation method', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                assert.isTrue(colorMixSwatch.textContent?.includes('var(--space)'));
            });
            it('should show color mix swatch when color-mix is used with an known variable in interpolation method even if it is not a valid method', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--garbage-space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                assert.isTrue(colorMixSwatch.textContent?.includes('var(--garbage-space)'));
            });
            it('should not show color mix swatch when color-mix is used with an unknown variable in interpolation method', () => {
                const stylePropertyTreeElement = getTreeElement('color', 'color-mix(in lch var(--not-existing-space), var(--a), var(--b))');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.isNull(colorMixSwatch);
            });
            it('shows a popover with it\'s computed color as RGB if possible', () => {
                const cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, red 50%, yellow)', true, false, true, false, '', undefined);
                const stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true,
                });
                const addPopoverSpy = sinon.spy(stylesSidebarPane, 'addPopover');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.renderElementIntoDOM)(colorMixSwatch);
                assert.isTrue(addPopoverSpy.calledOnce);
                assert.strictEqual(addPopoverSpy.args[0][0], colorMixSwatch.icon);
                assert.strictEqual(addPopoverSpy.args[0][1].contents()?.textContent, '#ff8000');
            });
            it('shows a popover with it\'s computed color as wide gamut if necessary', () => {
                const cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, oklch(.5 .5 .5) 50%, yellow)', true, false, true, false, '', undefined);
                const stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true,
                });
                const addPopoverSpy = sinon.spy(stylesSidebarPane, 'addPopover');
                stylePropertyTreeElement.updateTitle();
                const colorMixSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.exists(colorMixSwatch);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_6__.renderElementIntoDOM)(colorMixSwatch);
                assert.isTrue(addPopoverSpy.calledOnce);
                assert.strictEqual(addPopoverSpy.args[0][0], colorMixSwatch.icon);
                assert.strictEqual(addPopoverSpy.args[0][1].contents()?.textContent, 'color(srgb 1 0.24 0.17)');
            });
            it('propagates updates to outer color-mixes', () => {
                const cssPropertyWithColorMix = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, 'color', 'color-mix(in srgb, color-mix(in oklch, red, green), blue)', true, false, true, false, '', undefined);
                const stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles: mockMatchedStyles,
                    property: cssPropertyWithColorMix,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true,
                });
                stylePropertyTreeElement.updateTitle();
                const outerColorMix = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-mix-swatch');
                assert.exists(outerColorMix);
                const handler = sinon.fake();
                outerColorMix.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.ColorMixSwatch.Events.ColorChanged, handler);
                const innerColorMix = outerColorMix.querySelector('devtools-color-mix-swatch');
                assert.exists(innerColorMix);
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, red, green), blue)');
                assert.strictEqual(innerColorMix.getText(), 'color-mix(in oklch, red, green)');
                innerColorMix.setFirstColor('blue');
                assert.deepStrictEqual(handler.args[0][0].data, { text: 'color-mix(in srgb, color-mix(in oklch, blue, green), blue)' });
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, blue, green), blue)');
                // setFirstColor does not actually update the rendered color swatches or the textContent, which is why the first
                // color is still red here.
                const colorSwatch = innerColorMix.querySelector('devtools-color-swatch');
                assert.isOk(colorSwatch);
                const newColor = colorSwatch.getColor()?.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX);
                assert.isOk(newColor);
                colorSwatch.setColor(newColor);
                assert.strictEqual(outerColorMix.getText(), 'color-mix(in srgb, color-mix(in oklch, #ff0000, green), blue)');
                assert.deepStrictEqual(handler.args[1][0].data, { text: 'color-mix(in srgb, color-mix(in oklch, #ff0000, green), blue)' });
            });
        });
        describe('animation-name', () => {
            it('should link-swatch be rendered for animation-name declaration', () => {
                const stylePropertyTreeElement = getTreeElement('animation-name', 'first-keyframe');
                stylePropertyTreeElement.updateTitle();
                const animationNameSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-link-swatch');
                assert.isNotNull(animationNameSwatch);
            });
            it('should two link-swatches be rendered for animation-name declaration that contains two keyframe references', () => {
                const stylePropertyTreeElement = getTreeElement('animation-name', 'first-keyframe, second-keyframe');
                stylePropertyTreeElement.updateTitle();
                const animationNameSwatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-link-swatch');
                assert.strictEqual(animationNameSwatches?.length, 2);
            });
        });
    });
    it('applies the new style when the color format is changed', async () => {
        const stylePropertyTreeElement = getTreeElement('color', 'color(srgb .5 .5 1)');
        const applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
        // Make sure we don't leave a dangling promise behind:
        const returnValue = (async () => { })();
        await returnValue;
        applyStyleTextStub.returns(returnValue);
        stylePropertyTreeElement.updateTitle();
        const { valueElement } = stylePropertyTreeElement;
        assert.exists(valueElement);
        const swatch = valueElement.querySelector(`${_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.ColorSwatch.ColorSwatch.litTagName.value}`);
        assert.exists(swatch);
        const expectedColorString = swatch.getColor()?.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB);
        assert.exists(expectedColorString);
        assert.match(expectedColorString, /lab\([-.0-9]* [-.0-9]* [-.0-9]*\)/);
        const newColor = swatch.getColor()?.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB);
        assert.isOk(newColor);
        swatch.setColorText(newColor);
        assert.deepEqual(stylePropertyTreeElement.renderedPropertyText(), `color: ${expectedColorString}`);
        assert.isTrue(applyStyleTextStub.alwaysCalledWith(`color: ${expectedColorString}`, false));
    });
    describe('Context menu', () => {
        const expectedHeaderSectionItemsLabels = ['Copy declaration', 'Copy property', 'Copy value', 'Copy rule', 'Copy declaration as JS'];
        const expectedClipboardSectionItemsLabels = ['Copy all declarations', 'Copy all declarations as JS'];
        const expectedDefaultSectionItemsLabels = ['Copy all CSS changes'];
        const expectedFooterSectionItemsLabels = ['View computed value'];
        it('should create a context menu', () => {
            const verifySection = (expectedSectionItemLabels, sectionItems) => {
                const sectionItemLabels = sectionItems.map(item => item.buildDescriptor().label);
                assert.deepEqual(sectionItemLabels, expectedSectionItemLabels);
            };
            const stylePropertyTreeElement = getTreeElement('', '');
            const event = new CustomEvent('contextmenu');
            const contextMenu = stylePropertyTreeElement.createCopyContextMenu(event);
            const headerSection = contextMenu.headerSection();
            const clipboardSection = contextMenu.clipboardSection();
            const defaultSection = contextMenu.defaultSection();
            const footerSection = contextMenu.footerSection();
            verifySection(expectedHeaderSectionItemsLabels, headerSection.items);
            verifySection(expectedClipboardSectionItemsLabels, clipboardSection.items);
            verifySection(expectedDefaultSectionItemsLabels, defaultSection.items);
            verifySection(expectedFooterSectionItemsLabels, footerSection.items);
        });
    });
    describe('CSS hints', () => {
        it('should create a hint for inline elements', () => {
            sinon.stub(stylesSidebarPane, 'node').returns({
                localName() {
                    return 'span';
                },
                isSVGNode() {
                    return false;
                },
            });
            const stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.setComputedStyles(new Map([
                ['width', '100px'],
                ['display', 'inline'],
            ]));
            stylePropertyTreeElement.updateAuthoringHint();
            assert(stylePropertyTreeElement.listItemElement.classList.contains('inactive-property'), 'CSS hint was not rendered.');
        });
        it('should not create a hint for SVG elements', () => {
            sinon.stub(stylesSidebarPane, 'node').returns({
                localName() {
                    return 'rect';
                },
                isSVGNode() {
                    return true;
                },
            });
            const stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.setComputedStyles(new Map([
                ['width', '100px'],
                ['display', 'inline'],
            ]));
            stylePropertyTreeElement.updateAuthoringHint();
            assert(!stylePropertyTreeElement.listItemElement.classList.contains('inactive-property'), 'CSS hint was rendered unexpectedly.');
        });
    });
    describe('custom-properties', () => {
        it('linkifies var functions to declarations', async () => {
            const cssCustomPropertyDef = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty(mockCssStyleDeclaration, 0, '--prop', 'value', true, false, true, false, '', undefined);
            mockMatchedStyles.computeCSSVariable.callsFake((_, name) => name === '--prop' ?
                { value: 'computedvalue', declaration: cssCustomPropertyDef, fromFallback: false } :
                null);
            const renderValueSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyRenderer.Renderer, 'renderValueElement');
            const stylePropertyTreeElement = getTreeElement('prop', 'var(--prop)');
            stylePropertyTreeElement.updateTitle();
            const varSwatch = renderValueSpy.returnValues.find(value => value.firstChild instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.LinkSwatch.CSSVarSwatch)
                ?.firstChild;
            assert.exists(varSwatch);
            const revealPropertySpy = sinon.spy(stylesSidebarPane, 'revealProperty');
            varSwatch.link?.linkElement?.click();
            assert.isTrue(revealPropertySpy.calledWith(cssCustomPropertyDef));
        });
        it('linkifies property definition to registrations', async () => {
            const addElementPopoverHook = sinon.stub(stylesSidebarPane, 'addPopover');
            const stylePropertyTreeElement = getTreeElement('--prop', 'value');
            stylePropertyTreeElement.updateTitle();
            assert.isTrue(addElementPopoverHook.calledOnce);
            const registration = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSRegisteredProperty);
            mockMatchedStyles.getRegisteredProperty.callsFake(name => name === '--prop' ? registration : undefined);
            mockMatchedStyles.computeCSSVariable.returns({ value: 'computedvalue', declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSProperty.CSSProperty) });
            const popoverContents = addElementPopoverHook.args[0][1].contents();
            assert.isTrue(popoverContents instanceof _components_components_js__WEBPACK_IMPORTED_MODULE_12__.CSSVariableValueView.CSSVariableValueView);
            const { details } = popoverContents;
            assert.exists(details);
            const jumpToSectionSpy = sinon.spy(stylesSidebarPane, 'jumpToSection');
            details.goToDefinition();
            assert.isTrue(jumpToSectionSpy.calledOnceWithExactly('--prop', _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylesSidebarPane.REGISTERED_PROPERTY_SECTION_NAME));
        });
        it('linkifies var functions to initial-value registrations', async () => {
            mockMatchedStyles.computeCSSVariable.returns({
                value: 'computedvalue',
                declaration: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSRegisteredProperty, { propertyName: '--prop' }),
            });
            const renderValueSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyRenderer.Renderer, 'renderValueElement');
            const stylePropertyTreeElement = getTreeElement('prop', 'var(--prop)');
            stylePropertyTreeElement.updateTitle();
            const varSwatch = renderValueSpy.returnValues.find(value => value.firstChild instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.LinkSwatch.CSSVarSwatch)
                ?.firstChild;
            assert.exists(varSwatch);
            const jumpToPropertySpy = sinon.spy(stylesSidebarPane, 'jumpToProperty');
            varSwatch.link?.linkElement?.click();
            assert.isTrue(jumpToPropertySpy.calledWith('initial-value', '--prop', _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylesSidebarPane.REGISTERED_PROPERTY_SECTION_NAME));
        });
    });
    describe('CSSVarSwatch', () => {
        it('should render a CSSVarSwatch for variable usage without fallback', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--a)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const linkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
            assert.exists(linkSwatch);
            assert.strictEqual(cssVarSwatch.textContent, 'var(--a)');
            assert.strictEqual(linkSwatch.shadowRoot?.textContent, '--a');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--a)');
        });
        it('should render a CSSVarSwatch for variable usage with fallback', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const linkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
            assert.exists(linkSwatch);
            assert.strictEqual(linkSwatch.shadowRoot?.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.deepTextContent(), 'var(--not-existing, red)');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, red)');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with another variable fallback', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, var(--a))');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const firstLinkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
            const insideCssVarSwatch = cssVarSwatch.querySelector('devtools-css-var-swatch');
            const secondLinkSwatch = insideCssVarSwatch?.shadowRoot?.querySelector('devtools-base-link-swatch');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, var(--a))');
            assert.strictEqual(firstLinkSwatch?.shadowRoot?.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.textContent, 'var(--not-existing, var(--a))');
            assert.strictEqual(secondLinkSwatch?.shadowRoot?.textContent, '--a');
            assert.strictEqual(insideCssVarSwatch?.textContent, 'var(--a)');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with calc expression as fallback', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--not-existing, calc(15px + 20px))');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const firstLinkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var(--not-existing, calc(15px + 20px))');
            assert.strictEqual(firstLinkSwatch?.shadowRoot?.textContent, '--not-existing');
            assert.strictEqual(cssVarSwatch.textContent, 'var(--not-existing, calc(15px + 20px))');
        });
        it('should render a CSSVarSwatch inside CSSVarSwatch for variable usage with color and also a color swatch', () => {
            for (const varName of ['--a', '--not-existing']) {
                const stylePropertyTreeElement = getTreeElement('color', `var(${varName}, var(--blue))`);
                stylePropertyTreeElement.updateTitle();
                assert.exists(stylePropertyTreeElement.valueElement);
                const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
                assert.exists(cssVarSwatch);
                const colorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
                assert.exists(colorSwatch);
                assert.isTrue(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.ColorSwatch.ColorSwatch.isColorSwatch(colorSwatch));
                const firstLinkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
                assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, `var(${varName}, var(--blue))`);
                assert.strictEqual(firstLinkSwatch?.shadowRoot?.textContent, varName);
                assert.strictEqual(cssVarSwatch.textContent, `var(${varName}, var(--blue))`);
            }
        });
        it('should render CSSVarSwatches for multiple var() usages in the same property declaration', () => {
            const stylePropertyTreeElement = getTreeElement('--shadow', 'var(--a) var(--b)');
            stylePropertyTreeElement.updateTitle();
            const cssVarSwatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-css-var-swatch');
            assert.strictEqual(cssVarSwatches?.length, 2);
        });
        it('should render a CSSVarSwatch for var() with spaces', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var( --test    )');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const linkSwatch = cssVarSwatch.shadowRoot?.querySelector('devtools-base-link-swatch');
            assert.strictEqual(linkSwatch?.shadowRoot?.textContent, '--test');
            assert.strictEqual(cssVarSwatch.textContent, 'var( --test    )');
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'var( --test    )');
        });
        it('connects nested color swatches', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--void, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const outerColorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.exists(outerColorSwatch);
            const innerColorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
            assert.exists(innerColorSwatch);
            assert.notStrictEqual(outerColorSwatch, innerColorSwatch);
            const color = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Lab(1, 0, 0, null, undefined);
            innerColorSwatch.setColor(color);
            assert.strictEqual(outerColorSwatch.getColor(), color);
        });
        it('only connects nested color swatches if the fallback is actually taken', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'var(--blue, red)');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement);
            const cssVarSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch');
            assert.exists(cssVarSwatch);
            const outerColorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.exists(outerColorSwatch);
            const innerColorSwatch = cssVarSwatch.querySelector('devtools-color-swatch');
            assert.exists(innerColorSwatch);
            assert.notStrictEqual(outerColorSwatch, innerColorSwatch);
            const color = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Lab(1, 0, 0, null, undefined);
            innerColorSwatch.setColor(color);
            assert.strictEqual(outerColorSwatch.getColor()?.asString(), 'blue');
        });
    });
    function setUpStyles(cssModel, cssProperties, styleSheetId = '0', origin = _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.CSS.StyleSheetOrigin.Regular, selector = 'div') {
        const matchedPayload = [{
                rule: {
                    selectorList: { selectors: [{ text: selector }], text: selector },
                    origin,
                    style: { cssProperties, shorthandEntries: [] },
                },
                matchingSelectors: [0],
            }];
        if (cssModel.styleSheetHeaderForId(styleSheetId)) {
            cssModel.styleSheetRemoved(styleSheetId);
        }
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
        });
        const node = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        node.id = 0;
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSMatchedStyles.CSSMatchedStyles.create({
            cssModel,
            node,
            inlinePayload: null,
            attributesPayload: null,
            matchedPayload,
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
    }
    describe('VariableRenderer', () => {
        it('computes the text for var()s correctly', async () => {
            const cssModel = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createTarget)());
            async function matchProperty(value, name = 'color') {
                const matchedStyles = await setUpStyles(cssModel, [
                    { name: '--blue', value: 'blue' },
                    { name, value },
                ]);
                const property = matchedStyles.nodeStyles()[0].leadingProperties()[1];
                const stylePropertyTreeElement = new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.StylePropertyTreeElement({
                    stylesPane: stylesSidebarPane,
                    section: mockStylePropertiesSection,
                    matchedStyles,
                    property,
                    isShorthand: false,
                    inherited: false,
                    overloaded: false,
                    newProperty: true,
                });
                const ast = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.tokenizeDeclaration(stylePropertyTreeElement.name, stylePropertyTreeElement.value);
                assert.exists(ast);
                const matching = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSPropertyParser.BottomUpTreeMatching.walk(ast, [new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.VariableRenderer(stylePropertyTreeElement, stylePropertyTreeElement.property.ownerStyle)
                        .matcher()]);
                const res = {
                    hasUnresolvedVars: matching.hasUnresolvedVars(ast.tree),
                    computedText: matching.getComputedText(ast.tree),
                };
                return res;
            }
            assert.deepStrictEqual(await matchProperty('var( --blue    )'), { hasUnresolvedVars: false, computedText: 'color: blue' });
            assert.deepStrictEqual(await matchProperty('var(--no, var(--blue))'), { hasUnresolvedVars: false, computedText: 'color: blue' });
            assert.deepStrictEqual(await matchProperty('pre var(--no) post'), { hasUnresolvedVars: true, computedText: 'color: pre var(--no) post' });
            assert.deepStrictEqual(await matchProperty('var(--no, var(--no2))'), { hasUnresolvedVars: true, computedText: 'color: var(--no, var(--no2))' });
        });
        it('layers correctly with the font renderer', () => {
            const stylePropertyTreeElement = getTreeElement('font-size', 'calc(1 + var(--no))');
            stylePropertyTreeElement.updateTitle();
            assert.exists(stylePropertyTreeElement.valueElement?.querySelector('devtools-css-var-swatch'));
        });
    });
    describe('ColorRenderer', () => {
        it('correctly renders children of the color swatch', () => {
            const value = 'rgb(255, var(--zero), var(--zero))';
            const stylePropertyTreeElement = getTreeElement('color', value);
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual(stylePropertyTreeElement.valueElement?.textContent, value);
            const colorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual(colorSwatch.getColor()?.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX), '#ff0000');
            const varSwatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-css-var-swatch');
            assert.exists(varSwatches);
            assert.lengthOf(varSwatches, 2);
        });
        it('connects correctly with an inner angle swatch', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'hsl(120deg, 50%, 25%)');
            stylePropertyTreeElement.updateTitle();
            const colorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual(colorSwatch.getColor()?.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL), 'hsl(120deg 50% 25%)');
            const eventHandler = sinon.stub();
            colorSwatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.ColorSwatch.ColorChangedEvent.eventName, eventHandler);
            const angleSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-angle');
            assert.exists(angleSwatch);
            angleSwatch.updateAngle({ value: 130, unit: _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSAngleUtils.AngleUnit.Deg });
            assert.strictEqual(colorSwatch.getColor()?.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL), 'hsl(130deg 50% 25%)');
            assert.isTrue(eventHandler.calledOnce);
            assert.strictEqual(eventHandler.args[0][0].data.color, colorSwatch.getColor());
        });
        it('renders relative colors', () => {
            const stylePropertyTreeElement = getTreeElement('color', 'hsl(    from var(--blue) h calc(s/2) l / alpha)');
            stylePropertyTreeElement.updateTitle();
            const colorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.isOk(colorSwatch);
            assert.isOk(colorSwatch.getColor());
            assert.strictEqual(colorSwatch?.getColor()?.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL), 'hsl(240deg 50% 50%)');
        });
        it('does not render relative colors if property text is invalid', () => {
            const invalidColor = 'hsl(    from var(--zero) h calc(s/2) l / alpha)';
            const stylePropertyTreeElement = getTreeElement('color', invalidColor);
            stylePropertyTreeElement.updateTitle();
            const colorSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
            assert.isNull(colorSwatch);
        });
    });
    describe('BezierRenderer', () => {
        it('renders the easing function swatch', () => {
            const stylePropertyTreeElement = getTreeElement('animation-timing-function', 'ease-out');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf(stylePropertyTreeElement.valueElement?.firstChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.Swatches.BezierSwatch);
        });
    });
    describe('UrlRenderer', () => {
        it('linkifies and unescapes urls', () => {
            const stylePropertyTreeElement = getTreeElement('--url', 'url(devtools:\\/\\/abc)');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual(stylePropertyTreeElement.valueElement?.textContent, 'url(devtools://abc)');
        });
    });
    describe('StringRenderer', () => {
        it('unescapes strings', () => {
            const stylePropertyTreeElement = getTreeElement('content', '"\\2716"');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual(stylePropertyTreeElement.valueElement?.firstElementChild?.title, '"\u2716"');
        });
    });
    describe('ShadowRenderer', () => {
        it('parses shadows correctly', () => {
            const parseShadow = (property, value, success) => {
                const stylePropertyTreeElement = getTreeElement(property, value);
                stylePropertyTreeElement.updateTitle();
                assert.strictEqual(stylePropertyTreeElement.valueElement?.firstElementChild instanceof _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.Swatches.CSSShadowSwatch, success);
                assert.strictEqual(stylePropertyTreeElement.valueElement?.textContent, value);
            };
            const parseTextShadowSuccess = (value) => parseShadow('text-shadow', value, true);
            const parseTextShadowFailure = (value) => parseShadow('text-shadow', value, false);
            const parseBoxShadowSuccess = (value) => parseShadow('box-shadow', value, true);
            const parseBoxShadowFailure = (value) => parseShadow('box-shadow', value, false);
            parseTextShadowSuccess('0 0');
            parseTextShadowSuccess('1px 2px');
            parseTextShadowSuccess('1px 2px black');
            parseTextShadowSuccess('1px 2px 2px');
            parseTextShadowSuccess('rgb(0, 0, 0) 1px 2px 2px');
            parseTextShadowSuccess('1px 2px 2px rgb(0, 0, 0)');
            parseTextShadowSuccess('1px 2px black, 0 0 #ffffff');
            parseTextShadowSuccess('1px -2px black, 0 0 rgb(0, 0, 0), 3px 3.5px 3px');
            parseTextShadowSuccess('1px -2px black, 0 0 rgb(0, 0, 0), 3px 3.5px 3px !important');
            parseTextShadowSuccess('1px 2px black, , 0 0 #ffffff');
            parseTextShadowFailure('');
            parseTextShadowFailure('0');
            parseTextShadowFailure('1 2 black !important');
            parseTextShadowFailure('1px black 2px');
            parseTextShadowFailure('1px 2px 2px 3px');
            parseTextShadowFailure('inset 1px 2px 2px');
            parseTextShadowFailure('red 1px 2px 2px red');
            parseTextShadowFailure('1px 2px rgb(0, 0, 0) 2px');
            parseTextShadowFailure('hello 1px 2px');
            parseTextShadowFailure('1px 2px black 0 0 #ffffff');
            // TODO(crbug.com/40945390) Add coverage after rolling codemirror: parseTextShadowFailure('1px2px');
            parseTextShadowFailure('1px 2pxrgb(0, 0, 0)');
            parseBoxShadowSuccess('0 0');
            parseBoxShadowSuccess('1px 2px');
            parseBoxShadowSuccess('1px 2px black');
            parseBoxShadowSuccess('1px 2px 2px');
            parseBoxShadowSuccess('1px 2px 2px 3px');
            parseBoxShadowSuccess('inset 1px 2px');
            parseBoxShadowSuccess('1px 2px inset');
            parseBoxShadowSuccess('INSET 1px 2px 2px 3px');
            parseBoxShadowSuccess('rgb(0, 0, 0) 1px 2px 2px');
            parseBoxShadowSuccess('inset rgb(0, 0, 0) 1px 2px 2px');
            parseBoxShadowSuccess('inset 1px 2px 2px 3px rgb(0, 0, 0)');
            parseBoxShadowSuccess('1px 2px 2px 3px rgb(0, 0, 0) inset');
            parseBoxShadowSuccess('1px 2px black, inset 0 0 #ffffff');
            parseBoxShadowSuccess('1px -2px black, inset 0 0 rgb(0, 0, 0), 3px 3.5px 3px 4px');
            parseBoxShadowSuccess('1px 2px black, , 0 0 #ffffff');
            parseBoxShadowFailure('');
            parseBoxShadowFailure('0');
            parseBoxShadowFailure('1 2 black');
            parseBoxShadowFailure('1px black 2px');
            parseBoxShadowFailure('1px 2px 2px 3px 4px');
            parseBoxShadowFailure('1px 2px 2px inset 3px');
            parseBoxShadowFailure('inset 1px 2px 2px inset');
            parseBoxShadowFailure('1px 2px rgb(0, 0, 0) 2px');
            parseBoxShadowFailure('hello 1px 2px');
            parseBoxShadowFailure('1px 2px black 0 0 #ffffff');
            // TODO(crbug.com/40945390) Add coverage after rolling codemirror: parseBoxShadowFailure('1px2px');
            parseBoxShadowFailure('1px 2pxrgb(0, 0, 0)');
        });
        it('renders the shadow swatch and color swatch', () => {
            const stylePropertyTreeElement = getTreeElement('box-shadow', 'inset 10px 10px blue');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf(stylePropertyTreeElement.valueElement?.firstElementChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.Swatches.CSSShadowSwatch);
            const colorSwatch = stylePropertyTreeElement.valueElement?.firstElementChild?.querySelector('devtools-color-swatch');
            assert.exists(colorSwatch);
            assert.strictEqual(colorSwatch.getColor()?.asString(), 'blue');
        });
        it('renders multiple icons for multiple shadows', () => {
            const stylePropertyTreeElement = getTreeElement('box-shadow', 'inset 10px 11px blue, notashadow, 6px 5px red');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            assert.strictEqual(swatches[0].textContent, 'inset 10px 11px blue');
            assert.strictEqual(swatches[1].textContent, '6px 5px red');
        });
        it('correctly parses text-shadow', () => {
            const stylePropertyTreeElement = getTreeElement('text-shadow', 'inset 10px 11px blue, 6px 5px red, 5px 5px 0 0 yellow');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            assert.strictEqual(swatches[0].textContent, '6px 5px red');
        });
        it('renders a color-mix child', () => {
            const stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px color-mix(in srgb, red, blue)');
            stylePropertyTreeElement.updateTitle();
            assert.instanceOf(stylePropertyTreeElement.valueElement?.firstElementChild, _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.Swatches.CSSShadowSwatch);
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-color-mix-swatch');
            assert.exists(swatches);
        });
        it('renders shadow icon in the presence of a var()', () => {
            mockVariableMap['--offset'] = '10px 10px';
            mockVariableMap['--shadow'] = '10px 10px blue';
            const stylePropertyTreeElement = getTreeElement('box-shadow', 'var(--offset) red, var(--shadow)');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            assert.strictEqual(swatches[0].textContent, 'var(--offset) red');
            assert.strictEqual(swatches[1].textContent, 'var(--shadow)');
        });
        it('opens a shadow editor with the correct values', () => {
            mockVariableMap['--offset'] = '10px 10px';
            const stylePropertyTreeElement = getTreeElement('box-shadow', 'var(--offset) red, inset 8px 9px 10px 11px yellow');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 2);
            const showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            const editorProperties = (editor) => Array.from(editor.contentElement.querySelectorAll('.shadow-editor-field'))
                .map(field => field.querySelector('input')?.value ??
                Array.from(field.querySelectorAll('button'))
                    .map(button => button.classList.contains('enabled') ? button.textContent : undefined)
                    .filter((b) => Boolean(b)))
                .flat();
            {
                swatches[0].iconElement().click();
                assert.isTrue(showPopoverStub.calledOnce);
                assert.instanceOf(showPopoverStub.args[0][0], _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSShadowEditor);
                const editor = showPopoverStub.args[0][0];
                const text = editorProperties(editor);
                assert.deepStrictEqual(text, ['Outset', '10px', '10px', '0', '0']);
            }
            {
                swatches[1].iconElement().click();
                assert.isTrue(showPopoverStub.calledTwice);
                assert.instanceOf(showPopoverStub.args[1][0], _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSShadowEditor);
                const editor = showPopoverStub.args[1][0];
                const text = editorProperties(editor);
                assert.deepStrictEqual(text, ['Inset', '8px', '9px', '10px', '11px']);
            }
        });
        it('updates the style for shadow editor changes', () => {
            const stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px red');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            const showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            swatches[0].iconElement().click();
            assert.isTrue(showPopoverStub.calledOnce);
            const applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
            const button = showPopoverStub.args[0][0].contentElement.querySelector('.shadow-editor-button-right');
            button?.click();
            assert.isTrue(applyStyleTextStub.calledOnceWithExactly('box-shadow: inset 10px 11px red', false));
        });
        it('updates the style for shadow editor changes and respects ordering', () => {
            mockVariableMap['--y-color'] = '11px red';
            const stylePropertyTreeElement = getTreeElement('box-shadow', '10px var(--y-color)');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.strictEqual(swatches.length, 1);
            const showPopoverStub = sinon.stub(stylePropertyTreeElement.parentPane().swatchPopoverHelper(), 'show');
            swatches[0].iconElement().click();
            assert.isTrue(showPopoverStub.calledOnce);
            const applyStyleTextStub = sinon.stub(stylePropertyTreeElement, 'applyStyleText');
            const inputs = Array.from(showPopoverStub.args[0][0].contentElement.querySelectorAll('.shadow-editor-field'))
                .map(field => field.querySelector('input'));
            assert.exists(inputs[3]);
            inputs[3].value = '13px';
            inputs[3].dispatchEvent(new InputEvent('input', { data: '13px' }));
            assert.isTrue(applyStyleTextStub.calledOnceWithExactly('box-shadow: 10px 11px 13px red', false));
        });
        it('correctly builds and updates the shadow model', () => {
            mockVariableMap['--props'] = '12px 13px red';
            const stylePropertyTreeElement = getTreeElement('box-shadow', '10px 11px red, var(--props)');
            stylePropertyTreeElement.updateTitle();
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('css-shadow-swatch');
            assert.exists(swatches);
            assert.lengthOf(swatches, 2);
            assert.isTrue(swatches[0].model().isBoxShadow());
            assert.isFalse(swatches[0].model().inset());
            assert.strictEqual(swatches[0].model().offsetX().asCSSText(), '10px');
            assert.strictEqual(swatches[0].model().offsetY().asCSSText(), '11px');
            assert.strictEqual(swatches[0].model().blurRadius().asCSSText(), '0');
            assert.strictEqual(swatches[0].model().spreadRadius().asCSSText(), '0');
            swatches[0].model().setSpreadRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSLength(8, 'px'));
            swatches[0].model().setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSLength(5, 'px'));
            assert.strictEqual(swatches[0].model().blurRadius().asCSSText(), '5px');
            assert.strictEqual(swatches[0].model().spreadRadius().asCSSText(), '8px');
            assert.isTrue(swatches[1].model().isBoxShadow());
            assert.isFalse(swatches[1].model().inset());
            assert.strictEqual(swatches[1].model().offsetX().asCSSText(), '12px');
            assert.strictEqual(swatches[1].model().offsetY().asCSSText(), '13px');
            assert.strictEqual(swatches[1].model().blurRadius().asCSSText(), '0');
            assert.strictEqual(swatches[1].model().spreadRadius().asCSSText(), '0');
            swatches[1].model().setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSLength(5, 'px'));
            swatches[1].model().setSpreadRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSLength(8, 'px'));
            assert.strictEqual(swatches[1].model().blurRadius().asCSSText(), '5px');
            assert.strictEqual(swatches[1].model().spreadRadius().asCSSText(), '8px');
        });
        class StubSyntaxnode {
            constructor() {
                Object.defineProperty(this, "parent", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "firstChild", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "lastChild", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "nextSibling", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "prevSibling", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "from", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: 0
                });
                Object.defineProperty(this, "to", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: 0
                });
                Object.defineProperty(this, "type", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.NodeType()
                });
                Object.defineProperty(this, "name", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: ''
                });
                Object.defineProperty(this, "tree", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: null
                });
                Object.defineProperty(this, "node", {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: this
                });
            }
            childAfter() {
                return null;
            }
            childBefore() {
                return null;
            }
            enter() {
                return null;
            }
            cursor() {
                throw new Error('Method not implemented.');
            }
            resolve() {
                return this;
            }
            resolveInner() {
                return this;
            }
            enterUnfinishedNodesBefore() {
                return this;
            }
            toTree() {
                throw new Error('Method not implemented.');
            }
            getChild() {
                throw new Error('Method not implemented.');
            }
            getChildren() {
                throw new Error('Method not implemented.');
            }
            matchContext() {
                return false;
            }
        }
        it('shadow model renders text properties, authored properties, and computed text properties correctly', () => {
            const renderingContext = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyRenderer.RenderingContext);
            const expansionContext = sinon.createStubInstance(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyRenderer.RenderingContext);
            const y = new StubSyntaxnode();
            const spread = new StubSyntaxnode();
            const blur = new StubSyntaxnode();
            const variable = new StubSyntaxnode();
            const properties = [
                {
                    value: '10px',
                    source: null,
                    expansionContext: null,
                    propertyType: _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.ShadowPropertyType.X,
                },
                {
                    value: y,
                    source: null,
                    expansionContext: null,
                    propertyType: _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.ShadowPropertyType.Y,
                },
                {
                    value: blur,
                    source: variable,
                    expansionContext,
                    propertyType: _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.ShadowPropertyType.Blur,
                },
                {
                    value: spread,
                    source: variable,
                    expansionContext,
                    propertyType: _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.ShadowPropertyType.Spread,
                },
            ];
            sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyRenderer.Renderer, 'render').callsFake((nodeOrNodes, context) => {
                if (!Array.isArray(nodeOrNodes)) {
                    nodeOrNodes = [nodeOrNodes];
                }
                const nodes = nodeOrNodes
                    .map(node => {
                    switch (node) {
                        case y:
                            return context === renderingContext && document.createTextNode('y');
                        case blur:
                            return context === expansionContext && document.createTextNode('blur');
                        case spread:
                            return context === expansionContext && document.createTextNode('spread');
                        case variable:
                            return context === renderingContext && document.createTextNode('var()');
                        default:
                            return undefined;
                    }
                })
                    .filter((b) => Boolean(b));
                return {
                    nodes,
                    nodeGroups: [nodes],
                    cssControls: new Map(),
                };
            });
            const model = new _elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.ShadowModel(_elements_js__WEBPACK_IMPORTED_MODULE_13__.PropertyMatchers.ShadowType.BoxShadow, properties, renderingContext);
            const container = document.createElement('div');
            model.renderContents(container);
            assert.strictEqual(container.textContent, '10px y var()');
            model.setBlurRadius(new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_11__.CSSShadowEditor.CSSLength(12, 'px'));
            model.renderContents(container);
            assert.strictEqual(container.textContent, '10px y 12px spread');
            assert.deepStrictEqual(properties.map(p => p.source), [null, null, null, null]);
        });
    });
    describe('AnchorFunctionRenderer', () => {
        let anchorDecoratedForTestStub;
        let getAnchorBySpecifierStub;
        let revealStub;
        let hideDOMNodeHighlightStub;
        let highlightMock;
        let fakeParentNode;
        let fakeDOMNode;
        beforeEach(() => {
            fakeParentNode = {
                localName() {
                    return 'span';
                },
                isSVGNode() {
                    return false;
                },
                getAnchorBySpecifier() {
                    return Promise.resolve(fakeDOMNode);
                },
            };
            fakeDOMNode = {
                localName() {
                    return 'span';
                },
                isSVGNode() {
                    return false;
                },
                highlight() {
                    highlightMock();
                },
            };
            highlightMock = sinon.mock();
            anchorDecoratedForTestStub =
                sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.AnchorFunctionRenderer.prototype, 'anchorDecoratedForTest');
            getAnchorBySpecifierStub =
                sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.prototype, 'getAnchorBySpecifier').resolves(fakeDOMNode);
            revealStub = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal');
            hideDOMNodeHighlightStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, 'hideDOMNodeHighlight');
        });
        afterEach(() => {
            anchorDecoratedForTestStub.restore();
            getAnchorBySpecifierStub.restore();
            revealStub.restore();
            hideDOMNodeHighlightStub.restore();
        });
        it('renders anchor() function correctly', async () => {
            const stylePropertyTreeElement = getTreeElement('left', 'anchor(top)');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, 'anchor(top)');
        });
        it('renders `AnchorFunctionLinkSwatch` after decorating the element', async () => {
            const waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__.expectCall)(anchorDecoratedForTestStub);
            const stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
            sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
            stylePropertyTreeElement.updateTitle();
            await waitForDecorationPromise;
            const anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
            assert.strictEqual(anchorFunctionLinkSwatch.dataForTest().identifier, '--identifier');
        });
        it('should highlight node when `onMouseEnter` triggered from `AnchorFunctionLinkSwatch`', async () => {
            const waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__.expectCall)(anchorDecoratedForTestStub);
            const stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
            sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
            stylePropertyTreeElement.updateTitle();
            await waitForDecorationPromise;
            const anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
            anchorFunctionLinkSwatch.dataForTest().onMouseEnter();
            assert.isTrue(highlightMock.calledOnce);
        });
        it('should clear DOM highlight when `onMouseLeave` triggered from `AnchorFunctionLinkSwatch`', async () => {
            const waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__.expectCall)(anchorDecoratedForTestStub);
            const stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
            sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
            stylePropertyTreeElement.updateTitle();
            await waitForDecorationPromise;
            const anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
            anchorFunctionLinkSwatch.dataForTest().onMouseLeave();
            assert.isTrue(hideDOMNodeHighlightStub.calledOnce);
        });
        it('should reveal anchor node when `onLinkActivate` triggered from `AnchorFunctionLinkSwatch`', async () => {
            const waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__.expectCall)(anchorDecoratedForTestStub);
            const stylePropertyTreeElement = getTreeElement('left', 'anchor(--identifier top)');
            sinon.stub(stylePropertyTreeElement, 'node').returns(fakeParentNode);
            stylePropertyTreeElement.updateTitle();
            await waitForDecorationPromise;
            const anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
            anchorFunctionLinkSwatch.dataForTest().onLinkActivate();
            assert.isTrue(revealStub.calledOnce);
            assert.isTrue(revealStub.calledWith(fakeDOMNode));
        });
    });
    describe('AnchorFunctionRenderer', () => {
        let anchorDecoratedForTestStub;
        let getAnchorBySpecifierStub;
        let highlightMock;
        let fakeDOMNode;
        beforeEach(() => {
            fakeDOMNode = {
                localName() {
                    return 'span';
                },
                isSVGNode() {
                    return false;
                },
                highlight() {
                    highlightMock();
                },
            };
            highlightMock = sinon.mock();
            anchorDecoratedForTestStub =
                sinon.stub(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.PositionAnchorRenderer.prototype, 'anchorDecoratedForTest');
            getAnchorBySpecifierStub =
                sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.prototype, 'getAnchorBySpecifier').resolves(fakeDOMNode);
        });
        afterEach(() => {
            anchorDecoratedForTestStub.restore();
            getAnchorBySpecifierStub.restore();
        });
        it('renders `position-anchor` property correctly before anchor is decorated', async () => {
            const stylePropertyTreeElement = getTreeElement('position-anchor', '--anchor');
            stylePropertyTreeElement.updateTitle();
            assert.strictEqual(stylePropertyTreeElement.valueElement.textContent, '--anchor');
        });
        it('renders `position-anchor` property correctly after anchor is decorated', async () => {
            const waitForDecorationPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_8__.expectCall)(anchorDecoratedForTestStub);
            const stylePropertyTreeElement = getTreeElement('position-anchor', '--anchor');
            stylePropertyTreeElement.updateTitle();
            await waitForDecorationPromise;
            const anchorFunctionLinkSwatch = stylePropertyTreeElement.valueElement.querySelector('devtools-anchor-function-link-swatch');
            assert.exists(anchorFunctionLinkSwatch);
        });
    });
    describe('LightDarkColorRenderer', () => {
        it('renders light-dark correctly', async () => {
            const colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
            async function check(colorScheme, lightText, darkText) {
                const variableName = (text) => text.substring('var('.length, text.length - 1);
                const lightDark = `light-dark(${lightText}, ${darkText})`;
                const stylePropertyTreeElement = getTreeElement('color', lightDark);
                stylePropertyTreeElement.setComputedStyles(new Map([['color-scheme', colorScheme]]));
                stylePropertyTreeElement.updateTitle();
                await Promise.all(colorSchemeSpy.returnValues);
                const swatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
                assert.exists(swatch);
                assert.strictEqual(swatch?.textContent, lightDark);
                const activeColor = colorScheme === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light ? lightText : darkText;
                assert.strictEqual(swatch.getColor()?.getAuthoredText(), mockVariableMap[variableName(activeColor)] ?? activeColor);
                const [light, dark] = swatch.querySelectorAll('devtools-color-swatch');
                assert.exists(light);
                assert.exists(dark);
                const active = colorScheme === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light ? light : dark;
                const inactive = colorScheme === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light ? dark : light;
                assert.strictEqual(inactive.parentElement?.style.textDecoration, 'line-through');
                assert.strictEqual(active.parentElement?.style.textDecoration, '');
            }
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light, 'red', 'blue');
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Dark, 'red', 'blue');
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light, 'red', 'var(--blue)');
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Dark, 'red', 'var(--blue)');
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light, 'var(--blue)', 'red');
            await check(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Dark, 'var(--blue)', 'red');
        });
        it('renders light-dark correctly if the color scheme cannot be resolved', async () => {
            const lightDark = 'light-dark(red, blue)';
            const cssModel = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
            sinon.stub(stylesSidebarPane, 'cssModel').returns(cssModel);
            cssModel.colorScheme.resolves(undefined);
            const stylePropertyTreeElement = getTreeElement('color', lightDark);
            stylePropertyTreeElement.setComputedStyles(new Map([['color-scheme', 'light dark']]));
            const colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
            stylePropertyTreeElement.updateTitle();
            await Promise.all(colorSchemeSpy.returnValues);
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-color-swatch');
            assert.exists(swatches);
            assert.lengthOf(swatches, 3);
            assert.isNull(swatches[0].getColor());
            assert.strictEqual(swatches[0].textContent, 'light-dark(red, blue)');
            assert.strictEqual(swatches[1].textContent, 'red');
            assert.strictEqual(swatches[2].textContent, 'blue');
        });
        it('renders light-dark without color-scheme correctly', async () => {
            const lightDark = 'light-dark(red, blue)';
            const stylePropertyTreeElement = getTreeElement('color', lightDark);
            // leave color-scheme unset
            const colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
            stylePropertyTreeElement.updateTitle();
            await Promise.all(colorSchemeSpy.returnValues);
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-color-swatch');
            assert.exists(swatches);
            assert.lengthOf(swatches, 3);
            assert.strictEqual(swatches[0].getText(), 'red');
            assert.strictEqual(swatches[0].textContent, 'light-dark(red, blue)');
            assert.strictEqual(swatches[1].textContent, 'red');
            assert.strictEqual(swatches[2].textContent, 'blue');
        });
        it('renders light-dark with undefined vars correctly', async () => {
            const lightDark = 'light-dark(red, var(--undefined))';
            const stylePropertyTreeElement = getTreeElement('color', lightDark);
            stylePropertyTreeElement.setComputedStyles(new Map([['color-scheme', 'light dark']]));
            const colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
            stylePropertyTreeElement.updateTitle();
            await Promise.all(colorSchemeSpy.returnValues);
            const swatches = stylePropertyTreeElement.valueElement?.querySelectorAll('devtools-color-swatch');
            assert.exists(swatches);
            assert.lengthOf(swatches, 1);
            assert.strictEqual(swatches[0].textContent, 'red');
            assert.strictEqual(swatches[0].parentElement?.style.textDecoration, '');
        });
        it('connects inner and outer swatches', async () => {
            const colorSchemeSpy = sinon.spy(_elements_js__WEBPACK_IMPORTED_MODULE_13__.StylePropertyTreeElement.LightDarkColorRenderer.prototype, 'applyColorScheme');
            for (const colorScheme of [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Light, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Dark]) {
                const lightDark = 'light-dark(red, blue)';
                const stylePropertyTreeElement = getTreeElement('color', lightDark);
                stylePropertyTreeElement.setComputedStyles(new Map([['color-scheme', colorScheme]]));
                stylePropertyTreeElement.updateTitle();
                await Promise.all(colorSchemeSpy.returnValues);
                const outerSwatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-color-swatch');
                assert.exists(outerSwatch);
                const innerSwatches = outerSwatch.querySelectorAll('devtools-color-swatch');
                assert.lengthOf(innerSwatches, 2);
                const [lightSwatch, darkSwatch] = innerSwatches;
                const newLightColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('white');
                const newDarkColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('black');
                lightSwatch.setColor(newLightColor);
                darkSwatch.setColor(newDarkColor);
                if (colorScheme === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.ColorScheme.Dark) {
                    assert.strictEqual(outerSwatch.getColor(), newDarkColor);
                }
                else {
                    assert.strictEqual(outerSwatch.getColor(), newLightColor);
                }
            }
        });
    });
    describe('LinearGradientRenderer', () => {
        it('correctly connects to an angle match', () => {
            const stylePropertyTreeElement = getTreeElement('background', 'linear-gradient(45deg, red, var(--blue))');
            stylePropertyTreeElement.updateTitle();
            const swatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-angle');
            assert.exists(swatch);
            swatch.data = {
                angleText: swatch.textContent ?? '',
                containingPane: document.createElement('div'),
            };
            sinon.stub(swatch, 'dispatchEvent');
            swatch.popOver();
            const popover = swatch.shadowRoot?.querySelector('devtools-css-angle-editor');
            assert.exists(popover);
            const clock = popover.shadowRoot?.querySelector('.clock');
            assert.exists(clock);
            assert.strictEqual(clock.style.background, 'linear-gradient(45deg, red, blue)');
        });
    });
    describe('LengthRenderer', () => {
        it('renders the length too', () => {
            const stylePropertyTreeElement = getTreeElement('width', '100px');
            stylePropertyTreeElement.updateTitle();
            const swatch = stylePropertyTreeElement.valueElement?.querySelector('devtools-css-length');
            assert.exists(swatch);
        });
    });
});


/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}


/***/ })

}]);