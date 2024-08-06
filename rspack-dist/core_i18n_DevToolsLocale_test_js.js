"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_i18n_DevToolsLocale_test_js"], {
"./core/i18n/DevToolsLocale.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('DevToolsLocale', function() {
    // For tests, we assume DevTools supports all locales we throw at it.
    // Finding the closes supported locale is implemented in the i18n lib and tested as part of that lib.
    var identity = function(locale) {
        return locale;
    };
    after(function() {
        // Reset the singleton after the test suite for other tests.
        var data = {
            settingLanguage: 'en-US',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: identity
        };
        _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
            create: true,
            data: data
        });
    });
    it('chooses navigator.language if setting is "browserLanguage"', function() {
        var data = {
            settingLanguage: 'browserLanguage',
            navigatorLanguage: 'en-GB',
            lookupClosestDevToolsLocale: identity
        };
        var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
            create: true,
            data: data
        });
        assert.strictEqual(devToolsLocale.locale, 'en-GB');
    });
    it('chooses setting language if setting has any other value than "browserLanguage"', function() {
        var data = {
            settingLanguage: 'zh',
            navigatorLanguage: 'en-GB',
            lookupClosestDevToolsLocale: identity
        };
        var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
            create: true,
            data: data
        });
        assert.strictEqual(devToolsLocale.locale, 'zh');
    });
    it('falls back to en-US should navigator.language be empty', function() {
        var data = {
            settingLanguage: 'browserLanguage',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: identity
        };
        var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
            create: true,
            data: data
        });
        assert.strictEqual(devToolsLocale.locale, 'en-US');
    });
    it('chooses the closest supported language', function() {
        var data = {
            settingLanguage: 'zh-HK',
            navigatorLanguage: '',
            lookupClosestDevToolsLocale: function() {
                return 'zh';
            }
        };
        var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
            create: true,
            data: data
        });
        assert.strictEqual(devToolsLocale.locale, 'zh');
    });
    describe('forceFallbackLocale', function() {
        it('sets locale to English', function() {
            var data = {
                settingLanguage: 'browserLanguage',
                navigatorLanguage: 'en-GB',
                lookupClosestDevToolsLocale: identity
            };
            var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
                create: true,
                data: data
            });
            assert.strictEqual(devToolsLocale.locale, 'en-GB');
            devToolsLocale.forceFallbackLocale();
            assert.strictEqual(devToolsLocale.locale, 'en-US');
        });
    });
    describe('languageIsSupportedByDevTools', function() {
        it('returns true if the locale is supported, false otherwise', function() {
            var data = {
                settingLanguage: 'zh-HK',
                navigatorLanguage: '',
                lookupClosestDevToolsLocale: function() {
                    return 'zh';
                }
            };
            var devToolsLocale = _i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance({
                create: true,
                data: data
            });
            assert.isTrue(devToolsLocale.languageIsSupportedByDevTools('zh-HK'));
            assert.isFalse(devToolsLocale.languageIsSupportedByDevTools('de-DE'));
        });
    });
});
describe('localeLanguagesMatch', function() {
    it('returns true if the language part of a locale matches, false otherwise', function() {
        assert.isTrue(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-DE', 'de-AT'));
        assert.isTrue(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-DE', 'de'));
        assert.isFalse(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de', 'en'));
        assert.isFalse(_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.localeLanguagesMatch('de-AT', 'en-US'));
    });
}); //# sourceMappingURL=DevToolsLocale.test.js.map


}),

}]);