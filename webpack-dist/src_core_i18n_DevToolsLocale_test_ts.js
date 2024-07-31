"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_i18n_DevToolsLocale_test_ts"],{

/***/ "./src/core/i18n/DevToolsLocale.test.ts":
/*!**********************************************!*\
  !*** ./src/core/i18n/DevToolsLocale.test.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.js */ "./src/core/i18n/i18n.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('DevToolsLocale', () => {
    // For tests, we assume DevTools supports all locales we throw at it.
    // Finding the closes supported locale is implemented in the i18n lib and tested as part of that lib.
    const identity = (locale) => locale;
    after(() => {
        // Reset the singleton after the test suite for other tests.
        const data = {
            settingLanguage: 'en-US',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: identity,
        };
        _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
    });
    it('chooses navigator.language if setting is "browserLanguage"', () => {
        const data = {
            settingLanguage: 'browserLanguage',
            navigatorLanguage: 'en-GB',
            lookupClosestDevToolsLocale: identity,
        };
        const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
        assert.strictEqual(devToolsLocale.locale, 'en-GB');
    });
    it('chooses setting language if setting has any other value than "browserLanguage"', () => {
        const data = {
            settingLanguage: 'zh',
            navigatorLanguage: 'en-GB',
            lookupClosestDevToolsLocale: identity,
        };
        const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
        assert.strictEqual(devToolsLocale.locale, 'zh');
    });
    it('falls back to en-US should navigator.language be empty', () => {
        const data = {
            settingLanguage: 'browserLanguage',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: identity,
        };
        const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
        assert.strictEqual(devToolsLocale.locale, 'en-US');
    });
    it('chooses the closest supported language', () => {
        const data = {
            settingLanguage: 'zh-HK',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: () => 'zh',
        };
        const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
        assert.strictEqual(devToolsLocale.locale, 'zh');
    });
    describe('forceFallbackLocale', () => {
        it('sets locale to English', () => {
            const data = {
                settingLanguage: 'browserLanguage',
                navigatorLanguage: 'en-GB',
                lookupClosestDevToolsLocale: identity,
            };
            const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
            assert.strictEqual(devToolsLocale.locale, 'en-GB');
            devToolsLocale.forceFallbackLocale();
            assert.strictEqual(devToolsLocale.locale, 'en-US');
        });
    });
    describe('languageIsSupportedByDevTools', () => {
        it('returns true if the locale is supported, false otherwise', () => {
            const data = {
                settingLanguage: 'zh-HK',
                navigatorLanguage: '',
                lookupClosestDevToolsLocale: () => 'zh',
            };
            const devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({ create: true, data });
            assert.isTrue(devToolsLocale.languageIsSupportedByDevTools('zh-HK'));
            assert.isFalse(devToolsLocale.languageIsSupportedByDevTools('de-DE'));
        });
    });
});
describe('localeLanguagesMatch', () => {
    it('returns true if the language part of a locale matches, false otherwise', () => {
        assert.isTrue(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-DE', 'de-AT'));
        assert.isTrue(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-DE', 'de'));
        assert.isFalse(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de', 'en'));
        assert.isFalse(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-AT', 'en-US'));
    });
});


/***/ })

}]);