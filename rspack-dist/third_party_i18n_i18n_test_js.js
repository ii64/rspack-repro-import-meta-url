"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_i18n_i18n_test_js"], {
"./third_party/i18n/i18n.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.js */ "./third_party/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('i18n', function() {
    var stringSetWith = function stringSetWith(file, uiStrings, locale) {
        var registeredStrings = i18nInstance.registerFileStrings(file, uiStrings);
        return registeredStrings.getLocalizedStringSetFor(locale);
    };
    var i18nInstance;
    beforeEach(function() {
        i18nInstance = new _i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n([
            'en-US',
            'de-DE'
        ], 'en-US'); // A fresh instance for each test.
    });
    it('should throw an error when no locale data is registered for the requested locale', function() {
        var uiStrings = {
            key: 'string to translate'
        };
        var registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        assert.throws(function() {
            return registeredStrings.getLocalizedStringSetFor('en-US');
        }, /en-US/);
    });
    it('should throw an error when a requested message is not part of the UIStrings string structure', function() {
        i18nInstance.registerLocaleData('en-US', {
            'test.ts | foo': {
                message: 'string to translate'
            }
        });
        var uiStrings = {};
        var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
        assert.throws(function() {
            return stringSet.getLocalizedString('string to translate');
        });
    });
    it('should provide the correct translation if its available', function() {
        i18nInstance.registerLocaleData('de-DE', {
            'test.ts | foo': {
                message: 'a german foo'
            }
        });
        var uiStrings = {
            foo: 'an english foo'
        };
        var stringSet = stringSetWith('test.ts', uiStrings, 'de-DE');
        var translatedString = stringSet.getLocalizedString(uiStrings.foo);
        assert.strictEqual(translatedString, 'a german foo');
    });
    it('should provide the correct translation with placeholders', function() {
        i18nInstance.registerLocaleData('de-DE', {
            'test.ts | foo': {
                message: 'a {PH1} german message'
            }
        });
        var uiStrings = {
            foo: 'a {PH1} english message'
        };
        var stringSet = stringSetWith('test.ts', uiStrings, 'de-DE');
        var translatedString = stringSet.getLocalizedString(uiStrings.foo, {
            PH1: 'nice'
        });
        assert.strictEqual(translatedString, 'a nice german message');
    });
    it('should fall back to the UIStrings message when no translation is available', function() {
        i18nInstance.registerLocaleData('de-DE', {}); // Simulate string not yet translated to German.
        var uiStrings = {
            foo: 'an english foo'
        };
        var stringSet = stringSetWith('test.ts', uiStrings, 'de-DE');
        var translatedString = stringSet.getLocalizedString(uiStrings.foo);
        assert.strictEqual(translatedString, uiStrings.foo);
    });
    it('should fall back to the UIStrings message when the placeholder of a translation doesn\'t match the UIStrings placeholder', function() {
        i18nInstance.registerLocaleData('de-DE', {
            'test.ts | foo': {
                message: 'German message with old placeholder {PH_OLD}'
            }
        });
        var uiStrings = {
            foo: 'Message with a new placeholder {PH_NEW}'
        };
        var stringSet = stringSetWith('test.ts', uiStrings, 'de-DE');
        var translatedString = stringSet.getLocalizedString(uiStrings.foo, {
            PH_NEW: 'PH_NEW'
        });
        assert.strictEqual(translatedString, 'Message with a new placeholder PH_NEW');
    });
    it('should provide the same translation for repeated calls, but substitute placeholders correctly', function() {
        i18nInstance.registerLocaleData('de-DE', {
            'test.ts | foo': {
                message: 'a german message'
            },
            'test.ts | bar': {
                message: 'a german placeholder: {PH1}'
            }
        });
        var uiStrings = {
            foo: 'a english message',
            bar: 'a english placeholder: {PH1}'
        };
        var stringSet = stringSetWith('test.ts', uiStrings, 'de-DE');
        var foo1 = stringSet.getLocalizedString(uiStrings.foo);
        var foo2 = stringSet.getLocalizedString(uiStrings.foo);
        var bar1 = stringSet.getLocalizedString(uiStrings.bar, {
            PH1: 'ok'
        });
        var bar2 = stringSet.getLocalizedString(uiStrings.bar, {
            PH1: 'nice'
        });
        assert.strictEqual(foo1, 'a german message');
        assert.strictEqual(foo2, 'a german message');
        assert.strictEqual(bar1, 'a german placeholder: ok');
        assert.strictEqual(bar2, 'a german placeholder: nice');
    });
    describe('placeholder formatting', function() {
        beforeEach(function() {
            i18nInstance.registerLocaleData('en-US', {}); // Always fall-through to UIStrings.
        });
        it('should throw an error when values are needed but not provided', function() {
            var uiStrings = {
                foo: 'message with {PH1}'
            };
            var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
            assert.throws(function() {
                return stringSet.getLocalizedString(uiStrings.foo);
            }, /message with \{PH1\}/);
        });
        it('should throw an error when a value is missing', function() {
            var uiStrings = {
                foo: 'message {PH1} with {PH2}'
            };
            var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
            assert.throws(function() {
                return stringSet.getLocalizedString(uiStrings.foo, {
                    PH1: 'bar'
                });
            }, /message \{PH1\} with \{PH2\}/);
        });
        it('should format a message with plurals', function() {
            var uiStrings = {
                plural: '{count, plural, =1 {1 row} other {# rows}}'
            };
            var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
            var pluralString1 = stringSet.getLocalizedString(uiStrings.plural, {
                count: 1
            });
            var pluralString3 = stringSet.getLocalizedString(uiStrings.plural, {
                count: 3
            });
            assert.strictEqual(pluralString1, '1 row');
            assert.strictEqual(pluralString3, '3 rows');
        });
        it('should throw an error when a plural control value is missing', function() {
            var uiStrings = {
                plural: '{count, plural, =1 {1 row} other {# rows}}'
            };
            var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
            assert.throws(function() {
                return stringSet.getLocalizedString(uiStrings.plural);
            });
        });
        it('should allow nested placeholders in message with plurals', function() {
            var uiStrings = {
                plural: '{count, plural, =1 {1 row in {item}} other {# rows in {item}}}'
            };
            var stringSet = stringSetWith('test.ts', uiStrings, 'en-US');
            var pluralString1 = stringSet.getLocalizedString(uiStrings.plural, {
                count: 1,
                item: 'table'
            });
            var pluralString3 = stringSet.getLocalizedString(uiStrings.plural, {
                count: 3,
                item: 'page'
            });
            assert.strictEqual(pluralString1, '1 row in table');
            assert.strictEqual(pluralString3, '3 rows in page');
        });
    });
    describe('locales', function() {
        it('should provide the exact locale if it is supported', function() {
            var instance = new _i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n([
                'en-US',
                'de-DE'
            ], 'en-US');
            assert.strictEqual(instance.lookupClosestSupportedLocale('de-DE'), 'de-DE');
        });
        it('should provide the closest related locale if its not supported', function() {
            var instance = new _i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n([
                'en-US',
                'de'
            ], 'en-US');
            assert.strictEqual(instance.lookupClosestSupportedLocale('de-AT'), 'de');
        });
        it('should provide the default locale if no closely related locale was found', function() {
            var instance = new _i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n([
                'en-US'
            ], 'en-US');
            assert.strictEqual(instance.lookupClosestSupportedLocale('de-AT'), 'en-US');
        });
    });
}); //# sourceMappingURL=i18n.test.js.map


}),

}]);