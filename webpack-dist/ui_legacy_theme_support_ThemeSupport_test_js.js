"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_theme_support_ThemeSupport_test_js"],{

/***/ "./ui/legacy/theme_support/ThemeSupport.test.js":
/*!******************************************************!*\
  !*** ./ui/legacy/theme_support/ThemeSupport.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _theme_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ThemeSupport', () => {
    let themeSupport;
    beforeEach(() => {
        const setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('theme', 'default');
        themeSupport = _theme_support_js__WEBPACK_IMPORTED_MODULE_2__.ThemeSupport.instance({ forceNew: true, setting });
    });
    it('calls fetchColors on host ColorThemeChanged', async () => {
        const colorFetchSpy = sinon.spy(themeSupport, 'fetchColorsAndApplyHostTheme');
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.ColorThemeChanged);
        assert.isTrue(colorFetchSpy.called);
    });
    describe('fetchColors', () => {
        it('fetchColors updates color node url', () => {
            sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
            const originalColorHref = 'devtools://theme/colors.css?sets=ui,chrome';
            const COLORS_CSS_SELECTOR = 'link[href*=\'//theme/colors.css\']';
            const doc = document.implementation.createHTMLDocument();
            const colorsLink = doc.createElement('link');
            colorsLink.href = originalColorHref;
            colorsLink.rel = 'stylesheet';
            doc.head.appendChild(colorsLink);
            themeSupport.addDocumentToTheme(doc);
            const updatedHref = doc.body.querySelector(COLORS_CSS_SELECTOR).getAttribute('href');
            assert.notEqual(updatedHref, originalColorHref);
        });
    });
    describe('getComputedValue', () => {
        class StyledComponent extends HTMLElement {
            #shadow = this.attachShadow({ mode: 'open' });
            constructor() {
                super();
                this.#shadow.innerHTML = `<style>
          :host {
            --color-primary-old: red;
          }
          </style>`;
            }
        }
        before(() => {
            customElements.define('test-styled-component', StyledComponent);
        });
        afterEach(() => {
            document.body.removeChildren();
        });
        it('obtains computed values correctly (document)', () => {
            assert.isNotEmpty(themeSupport.getComputedValue('--color-primary-old'));
        });
        it('obtains computed values correctly (element)', () => {
            const element = new StyledComponent();
            document.body.appendChild(element);
            const documentValue = themeSupport.getComputedValue('--color-primary-old');
            const elementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.isNotEmpty(elementValue);
            assert.notStrictEqual(documentValue, elementValue);
        });
        it('caches computed values (document)', () => {
            const documentValue = themeSupport.getComputedValue('--color-primary-old');
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            const newStyle = document.createElement('style');
            newStyle.textContent = ':root { --color-primary-old: green; }';
            document.head.appendChild(newStyle);
            const updatedDocumentValue = themeSupport.getComputedValue('--color-primary-old');
            newStyle.remove();
            assert.strictEqual(documentValue, updatedDocumentValue);
        });
        it('caches computed values (element)', () => {
            const element = new StyledComponent();
            document.body.appendChild(element);
            const elementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.isNotEmpty(elementValue);
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            const newStyle = document.createElement('style');
            newStyle.textContent = ':root { --color-primary-old: green; }';
            element.shadowRoot.appendChild(newStyle);
            const updatedElementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.strictEqual(elementValue, updatedElementValue);
        });
        it('does not caches empty computed values (element)', () => {
            const documentValue = themeSupport.getComputedValue('--test-value');
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            const newStyle = document.createElement('style');
            newStyle.textContent = ':root { --test-value: green; }';
            document.head.appendChild(newStyle);
            const updatedDocumentValue = themeSupport.getComputedValue('--test-value', document.body);
            newStyle.remove();
            assert.isEmpty(documentValue);
            assert.isNotEmpty(updatedDocumentValue);
            assert.notStrictEqual(documentValue, updatedDocumentValue);
        });
    });
});
//# sourceMappingURL=ThemeSupport.test.js.map

/***/ })

}]);