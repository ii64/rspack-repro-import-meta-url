"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_i18n_i18n_test_js"], {
"./core/i18n/i18n.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../third_party/i18n/i18n.js */ "./third_party/i18n/i18n.js");
/* harmony import */var _i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


describe('serializeUIString', function() {
    it('serializes strings without placeholders', function() {
        var output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString('foo');
        assert.deepEqual(output, JSON.stringify({
            string: 'foo',
            values: {}
        }));
    });
    it('serializes strings with placeholder values', function() {
        var output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString('a string', {
            PH1: 'value1',
            PH2: 'value2'
        });
        assert.deepEqual(output, JSON.stringify({
            string: 'a string',
            values: {
                PH1: 'value1',
                PH2: 'value2'
            }
        }));
    });
});
describe('deserializeUIString', function() {
    it('returns an empty object for an empty string input', function() {
        var output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('');
        assert.deepEqual(output, {
            string: '',
            values: {}
        });
    });
    it('deserializes correctly for a string with no placeholders', function() {
        var output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('{"string":"foo", "values":{}}');
        assert.deepEqual(output, {
            string: 'foo',
            values: {}
        });
    });
    it('deserializes correctly for a string with placeholders', function() {
        var output = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString('{"string":"foo", "values":{"PH1": "value1"}}');
        assert.deepEqual(output, {
            string: 'foo',
            values: {
                PH1: 'value1'
            }
        });
    });
});
describe('serialize/deserialize round-trip', function() {
    it('returns a matching input/output', function() {
        var inputString = 'a string';
        var serializedString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.serializeUIString(inputString);
        var deserializedString = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.deserializeUIString(serializedString);
        assert.deepEqual(deserializedString, {
            string: inputString,
            values: {}
        });
    });
});
describe('getLocalizedLanguageRegion', function() {
    var createMockDevToolsLocale = function createMockDevToolsLocale(locale) {
        return {
            locale: locale,
            forceFallbackLocale: function() {}
        };
    };
    it('build the correct language/region string', function() {
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de-AT', createMockDevToolsLocale('en-US')), 'German (Austria) - Deutsch (Österreich)');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de', createMockDevToolsLocale('en-US')), 'German - Deutsch');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('en-US', createMockDevToolsLocale('de')), 'Englisch (USA) - English (US)');
    });
    it('uses english for the target locale if the languages match', function() {
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de-AT', createMockDevToolsLocale('de')), 'Deutsch (Österreich) - German (Austria)');
        assert.strictEqual(_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedLanguageRegion('de', createMockDevToolsLocale('de')), 'Deutsch - German');
    });
});
describe('getFormatLocalizedString', function() {
    var i18nInstance;
    beforeEach(function() {
        i18nInstance = new _third_party_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.I18n.I18n([
            'en-US'
        ], 'en-US');
        i18nInstance.registerLocaleData('en-US', {}); // Always fall back to UIStrings.
    });
    it('returns an HTML element', function() {
        var uiStrings = {
            simple: 'a simple message'
        };
        var registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        var messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.simple, {});
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerText, 'a simple message');
    });
    it('nests HTML placeholders in the message element', function() {
        var uiStrings = {
            placeholder: 'a message with a {PH1} placeholder'
        };
        var registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        var placeholder = document.createElement('span');
        placeholder.innerText = 'very pretty';
        var messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.placeholder, {
            PH1: placeholder
        });
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerHTML, 'a message with a <span>very pretty</span> placeholder');
    });
    it('nests string placeholders in the message element', function() {
        var uiStrings = {
            placeholder: 'a message with a {PH1} placeholder'
        };
        var registeredStrings = i18nInstance.registerFileStrings('test.ts', uiStrings);
        var messageElement = _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(registeredStrings, uiStrings.placeholder, {
            PH1: 'somewhat nice'
        });
        assert.instanceOf(messageElement, HTMLElement);
        assert.strictEqual(messageElement.innerHTML, 'a message with a somewhat nice placeholder');
    });
});
describe('fetchAndRegisterLocaleData', function() {
    var fetchStub;
    beforeEach(function() {
        fetchStub = sinon.stub(window, 'fetch');
        fetchStub.returns(Promise.resolve(new window.Response(JSON.stringify({}), {
            // Always return an empty JSON object.
            status: 200,
            headers: {
                'Content-type': 'application/json'
            }
        })));
    });
    afterEach(function() {
        fetchStub.restore();
        _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.resetLocaleDataForTest();
    });
    var bundled = 'devtools://devtools/bundled/devtools_app.html';
    var version = '@ffe848af6a5df4fa127e2929331116b7f9f1cb30';
    var remoteOrigin = 'https://chrome-devtools-frontend.appspot.com/';
    var remote = "".concat(remoteOrigin, "serve_file/").concat(version, "/");
    var fullLocation = "".concat(bundled, "?remoteBase=").concat(remote, "&can_dock=true&dockSide=undocked");
    it('fetches bundled locale files the same way as i18nImpl.ts itself is loaded', /*#__PURE__*/ _async_to_generator(function() {
        var actualUrl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.fetchAndRegisterLocaleData('en-US', fullLocation)
                    ];
                case 1:
                    _state.sent();
                    // We can't mock `import.meta.url` from i18nImpl so the Karam host leaks into
                    // this test. This means we only check the last part of the URL with which `fetch`
                    // was called.
                    actualUrl = fetchStub.args[0][0];
                    assert.isTrue(actualUrl.endsWith('gen/front_end/core/i18n/locales/en-US.json'), "Actually called with ".concat(actualUrl));
                    return [
                        2
                    ];
            }
        });
    }));
    it('fetches non-bundled locale files from the remote service endpoint', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.fetchAndRegisterLocaleData('de', fullLocation)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(fetchStub.calledWith('devtools://devtools/remote/serve_file/@ffe848af6a5df4fa127e2929331116b7f9f1cb30/core/i18n/locales/de.json'), "Actually called with ".concat(fetchStub.args[0][0]));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=i18n.test.js.map


}),

}]);