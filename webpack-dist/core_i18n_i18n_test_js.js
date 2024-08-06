"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_i18n_i18n_test_js"],{

/***/ "./core/i18n/i18n.test.js":
/*!********************************!*\
  !*** ./core/i18n/i18n.test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/i18n/i18n.js */ "./third_party/i18n/i18n.js");
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('serializeUIString', () => {
    it('serializes strings without placeholders', () => {
        const output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString('foo');
        assert.deepEqual(output, JSON.stringify({
            string: 'foo',
            values: {},
        }));
    });
    it('serializes strings with placeholder values', () => {
        const output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString('a string', { PH1: 'value1', PH2: 'value2' });
        assert.deepEqual(output, JSON.stringify({
            string: 'a string',
            values: { PH1: 'value1', PH2: 'value2' },
        }));
    });
});
describe('deserializeUIString', () => {
    it('returns an empty object for an empty string input', () => {
        const output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('');
        assert.deepEqual(output, { string: '', values: {} });
    });
    it('deserializes correctly for a string with no placeholders', () => {
        const output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('{"string":"foo", "values":{}}');
        assert.deepEqual(output, { string: 'foo', values: {} });
    });
    it('deserializes correctly for a string with placeholders', () => {
        const output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('{"string":"foo", "values":{"PH1": "value1"}}');
        assert.deepEqual(output, { string: 'foo', values: { PH1: 'value1' } });
    });
});
describe('serialize/deserialize round-trip', () => {
    it('returns a matching input/output', () => {
        const inputString = 'a string';
        const serializedString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString(inputString);
        const deserializedString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString(serializedString);
        assert.deepEqual(deserializedString, {
            string: inputString,
            values: {},
        });
    });
});
describe('getLocalizedLanguageRegion', () => {
    function createMockDevToolsLocale(locale) {
        return { locale, forceFallbackLocale: () => { } };
    }
    it('build the correct language/region string', () => {
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de-AT', createMockDevToolsLocale('en-US')), 'German (Austria) - Deutsch (Österreich)');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de', createMockDevToolsLocale('en-US')), 'German - Deutsch');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('en-US', createMockDevToolsLocale('de')), 'Englisch (USA) - English (US)');
    });
    it('uses english for the target locale if the languages match', () => {
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de-AT', createMockDevToolsLocale('de')), 'Deutsch (Österreich) - German (Austria)');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de', createMockDevToolsLocale('de')), 'Deutsch - German');
    });
});
describe('getFormatLocalizedString', () => {
    let i18nInstance;
    beforeEach(() => {
        i18nInstance = new _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n(['en-US'], 'en-US');
        i18nInstance.registerLocaleData('en-US', {}); // Always fall back to UIStrings.
    });
    it('returns an HTML element', () => {
        const uiStrings = { simple: 'a simple message' };
        const registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        const messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.simple, {});
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerText, 'a simple message');
    });
    it('nests HTML placeholders in the message element', () => {
        const uiStrings = { placeholder: 'a message with a {PH1} placeholder' };
        const registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        const placeholder = document.createElement('span');
        placeholder.innerText = 'very pretty';
        const messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.placeholder, { PH1: placeholder });
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerHTML, 'a message with a <span>very pretty</span> placeholder');
    });
    it('nests string placeholders in the message element', () => {
        const uiStrings = { placeholder: 'a message with a {PH1} placeholder' };
        const registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        const messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.placeholder, { PH1: 'somewhat nice' });
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerHTML, 'a message with a somewhat nice placeholder');
    });
});
describe('fetchAndRegisterLocaleData', () => {
    let fetchStub;
    beforeEach(() => {
        fetchStub = sinon.stub(window, 'fetch');
        fetchStub.returns(Promise.resolve(new window.Response(JSON.stringify({}), {
            // Always return an empty JSON object.
            status: 200,
            headers: { 'Content-type': 'application/json' },
        })));
    });
    afterEach(() => {
        fetchStub.restore();
        _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.resetLocaleDataForTest();
    });
    const bundled = 'devtools://devtools/bundled/devtools_app.html';
    const version = '@ffe848af6a5df4fa127e2929331116b7f9f1cb30';
    const remoteOrigin = 'https://chrome-devtools-frontend.appspot.com/';
    const remote = `${remoteOrigin}serve_file/${version}/`;
    const fullLocation = `${bundled}?remoteBase=${remote}&can_dock=true&dockSide=undocked`;
    it('fetches bundled locale files the same way as i18nImpl.ts itself is loaded', async () => {
        await _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.fetchAndRegisterLocaleData('en-US', fullLocation);
        // We can't mock `import.meta.url` from i18nImpl so the Karam host leaks into
        // this test. This means we only check the last part of the URL with which `fetch`
        // was called.
        const actualUrl = fetchStub.args[0][0];
        assert.isTrue(actualUrl.endsWith('gen/front_end/core/i18n/locales/en-US.json'), `Actually called with ${actualUrl}`);
    });
    it('fetches non-bundled locale files from the remote service endpoint', async () => {
        await _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.fetchAndRegisterLocaleData('de', fullLocation);
        assert.isTrue(fetchStub.calledWith('devtools://devtools/remote/serve_file/@ffe848af6a5df4fa127e2929331116b7f9f1cb30/core/i18n/locales/de.json'), `Actually called with ${fetchStub.args[0][0]}`);
    });
});
//# sourceMappingURL=i18n.test.js.map

/***/ })

}]);