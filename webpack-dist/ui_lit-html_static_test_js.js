"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_lit-html_static_test_js"],{

/***/ "./ui/lit-html/static.test.js":
/*!************************************!*\
  !*** ./ui/lit-html/static.test.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../third_party/i18n/i18n.js */ "./third_party/i18n/i18n.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const templateArray = (value) => {
    // We assume here it's okay to lose the `raw` value from the TemplateStringsArray
    // for the purposes of testing.
    return value;
};
describe('Static', () => {
    describe('flattenTemplate', () => {
        it('does not flatten template strings with no statics or values', () => {
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `No update needed`;
            assert.deepStrictEqual(content.strings, templateArray(['No update needed']));
            assert.deepStrictEqual(content.valueMap, []);
        });
        it('does not flatten template strings with just values', () => {
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `Just ${1} value`;
            assert.deepStrictEqual(content.strings, templateArray(['Just ', ' value']));
            assert.deepStrictEqual(content.valueMap, [true]);
        });
        it('does flatten template strings with statics', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `<${tag}>Foo</${tag}>`;
            assert.deepStrictEqual(content.strings, templateArray(['<div>Foo</div>']));
            assert.deepStrictEqual(content.valueMap, [false, false]);
        });
        it('does flatten template strings with statics but leaves values alone', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const name = 'Everyone!';
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `<${tag}>Hello, ${name}!</${tag}>`;
            assert.deepStrictEqual(content.strings, templateArray(['<div>Hello, ', '!</div>']));
            assert.deepStrictEqual(content.valueMap, [false, true, false]);
        });
        it('ignores data values', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const name = 'everyone!';
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `<${tag} .data={{x: 1}}>Hello, ${name}!</${tag}>`;
            assert.deepStrictEqual(content.strings, templateArray(['<div .data={{x: 1}}>Hello, ', '!</div>']));
            assert.deepStrictEqual(content.valueMap, [false, true, false]);
        });
        it('flattens multiple values', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const message = 'Hello, everyone!';
            const content = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.flattenTemplate `<${tag}>${1}${2}${3}, ${message}! ${'Static value'}!</${tag}>`;
            assert.deepStrictEqual(content.strings, templateArray(['<div>', '', '', ', ', '! ', '!</div>']));
            assert.deepStrictEqual(content.valueMap, [false, true, true, true, true, true, false]);
        });
    });
    describe('rendering', () => {
        it('renders non-statics', () => {
            const tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `Hello, world ${123}!`;
            const target = document.createElement('div');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, { host: undefined });
            assert.strictEqual(target.innerText, 'Hello, world 123!');
        });
        it('renders static tags', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<${tag}>Hello, world!</${tag}>`;
            const target = document.createElement('section');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, { host: undefined });
            assert.strictEqual(target.innerText, 'Hello, world!');
            assert.isNotNull(target.querySelector('div'));
        });
        it('renders multiple', () => {
            const tag = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `div`;
            const message = 'Hello, everyone!';
            const tmpl = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `<${tag} .data={{x: 1}}>${1}${2}${3}, ${message}! ${'Static value'}!</${tag}>`;
            const target = document.createElement('div');
            _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(tmpl, target, { host: undefined });
            assert.strictEqual(target.innerText, '123, Hello, everyone!! Static value!');
            assert.isNotNull(target.querySelector('div'));
        });
    });
    describe('i18nTemplate', () => {
        const uiStrings = { placeholder: 'a message with a {string} and {template} placeholder' };
        let i18nInstance;
        beforeEach(() => {
            i18nInstance = new _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.I18n.I18n(['en-US'], 'en-US');
            i18nInstance.registerLocaleData('en-US', {});
        });
        function setLocale(locale) {
            _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
                create: true,
                data: {
                    settingLanguage: locale,
                    navigatorLanguage: locale,
                    lookupClosestDevToolsLocale: l => l,
                },
            });
        }
        it('localizes lit templates', () => {
            const strings = i18nInstance.registerFileStrings('test.ts', uiStrings);
            setLocale('en-US');
            const result = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.i18nTemplate(strings, uiStrings.placeholder, { string: 'STRING', template: _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `TEMPLATE` });
            const element = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(result, document.createElement('div'), { host: undefined });
            assert.deepStrictEqual(element.parentNode.innerText, 'a message with a STRING and TEMPLATE placeholder');
        });
        it('localizes lit templates with translations', () => {
            i18nInstance.registerLocaleData('de', { 'test.ts | placeholder': { message: 'a message with a {template} and {string} placeholder' } });
            const strings = i18nInstance.registerFileStrings('test.ts', uiStrings);
            setLocale('de');
            const result = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.i18nTemplate(strings, uiStrings.placeholder, { string: 'STRING', template: _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html `TEMPLATE` });
            const element = _lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render(result, document.createElement('div'), { host: undefined });
            assert.deepStrictEqual(element.parentNode.innerText, 'a message with a TEMPLATE and STRING placeholder');
        });
    });
});
//# sourceMappingURL=static.test.js.map

/***/ })

}]);