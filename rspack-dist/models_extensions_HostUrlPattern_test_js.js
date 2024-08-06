"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_extensions_HostUrlPattern_test_js"], {
"./models/extensions/HostUrlPattern.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/extensions.js */ "./models/extensions/extensions.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The test expectations are from //extensions/common/url_pattern_unittest.cc but leave out tests for the unsupported
// schemes and paths. Also left out are tests for whitespace and unicode urls since that doesn't go through the url
// constructor anyways.
describe('HostUrlPattern', function() {
    it('ParseInvalid', function() {
        var invalidPatterns = [
            'http',
            'http:',
            'http:/',
            'about://',
            'http://',
            'http:///',
            'http://:1234/',
            'http://*./',
            'http://\0www/',
            'http://*foo/',
            'http://foo.*.bar/',
            'http://fo.*.ba:123/',
            'http:/bar',
            'http://foo.*/'
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = invalidPatterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var pattern = _step.value;
                var parsedPattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse(pattern);
                assert.isUndefined(parsedPattern);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('Ports', function() {
        var testPatterns = [
            {
                pattern: 'http://foo:1234',
                success: true,
                port: '1234'
            },
            {
                pattern: 'http://foo:1234/',
                success: true,
                port: '1234'
            },
            {
                pattern: 'http://foo:1234/*',
                success: true,
                port: '1234'
            },
            {
                pattern: 'http://*.foo:1234/',
                success: true,
                port: '1234'
            },
            {
                pattern: 'http://foo:/',
                success: false,
                port: '*'
            },
            {
                pattern: 'http://*:1234/',
                success: true,
                port: '1234'
            },
            {
                pattern: 'http://*:*/',
                success: true,
                port: '*'
            },
            {
                pattern: 'http://foo:*/',
                success: true,
                port: '*'
            },
            {
                pattern: 'http://*.foo:/',
                success: false,
                port: '*'
            },
            {
                pattern: 'http://foo:com/',
                success: false,
                port: '*'
            },
            {
                pattern: 'http://foo:123456/',
                success: false,
                port: '*'
            },
            {
                pattern: 'http://foo:80:80/',
                success: false,
                port: '*'
            },
            {
                pattern: 'chrome://foo:1234/',
                success: false,
                port: '*'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = testPatterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, pattern = _step_value.pattern, success = _step_value.success, port = _step_value.port;
                var parsedPattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse(pattern);
                if (success) {
                    assert.exists(parsedPattern);
                    assert.strictEqual(parsedPattern.port, port);
                } else {
                    assert.isUndefined(parsedPattern);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('IPv6Patterns', function() {
        var successTestPatterns = [
            {
                pattern: 'http://[2607:f8b0:4005:805::200e]/',
                host: '[2607:f8b0:4005:805::200e]',
                port: '*'
            },
            {
                pattern: 'http://[2607:f8b0:4005:805::200e]/*',
                host: '[2607:f8b0:4005:805::200e]',
                port: '*'
            },
            {
                pattern: 'http://[2607:f8b0:4005:805::200e]:8888/*',
                host: '[2607:f8b0:4005:805::200e]',
                port: '8888'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = successTestPatterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, pattern = _step_value.pattern, host = _step_value.host, port = _step_value.port;
                var parsedPattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse(pattern);
                assert.exists(parsedPattern);
                assert.strictEqual(parsedPattern.host, host);
                assert.strictEqual(parsedPattern.port, port);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var failureTestPatterns = [
            'http://[2607:f8b0:4005:805::200e]:/*',
            'http://[]:8888/*',
            'http://[2607:f8b0:4005:805::200e/*',
            'http://[2607:f8b0:4005:805::200e]]/*',
            'http://[[2607:f8b0:4005:805::200e]/*',
            'http://[2607:f8b0:4005:805:200e]/*',
            'http://[2607:f8b0:4005:805:200e:12:bogus]/*',
            'http://[[2607:f8b0:4005:805::200e]:abc/*'
        ];
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = failureTestPatterns[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var pattern1 = _step1.value;
                var parsedPattern1 = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse(pattern1);
                assert.isUndefined(parsedPattern1);
            }
        } catch (err) {
            _didIteratorError1 = true;
            _iteratorError1 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    });
    it('Matches all pages for a given scheme', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://*/*');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('*', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('http://google.com'));
        assert.isTrue(pattern.matchesUrl('http://yahoo.com'));
        assert.isTrue(pattern.matchesUrl('http://google.com/foo'));
        assert.isFalse(pattern.matchesUrl('https://google.com'));
        assert.isTrue(pattern.matchesUrl('http://74.125.127.100/search'));
    });
    it('Matches all domains', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('https://*/*');
        assert.exists(pattern);
        assert.strictEqual('https', pattern.scheme);
        assert.strictEqual('*', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('https://www.google.com/foo'));
        assert.isTrue(pattern.matchesUrl('https://www.google.com/foobar'));
        assert.isFalse(pattern.matchesUrl('http://www.google.com/foo'));
        assert.isTrue(pattern.matchesUrl('https://www.google.com/'));
    });
    it('Matches subdomains', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://*.google.com/');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('*.google.com', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('http://google.com/foobar'));
        assert.isTrue(pattern.matchesUrl('http://www.google.com/foobar'));
        assert.isTrue(pattern.matchesUrl('http://www.google.com/foo?bar'));
        assert.isFalse(pattern.matchesUrl('http://wwwgoogle.com/foobar'));
        assert.isTrue(pattern.matchesUrl('http://monkey.images.google.com/foooobar'));
        assert.isFalse(pattern.matchesUrl('http://yahoo.com/foobar'));
    });
    it('Matches ip addresses', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://127.0.0.1/');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('127.0.0.1', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('http://127.0.0.1'));
    });
    it('Matches subdomain matching with ip addresses', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://*.0.0.1/');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('*.0.0.0.1', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isFalse(pattern.matchesUrl('http://127.0.0.1'));
    });
    it('Matches chrome://', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('chrome://favicon/*');
        assert.exists(pattern);
        assert.strictEqual('chrome', pattern.scheme);
        assert.strictEqual('favicon', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('chrome://favicon/http://google.com'));
        assert.isTrue(pattern.matchesUrl('chrome://favicon/https://google.com'));
        assert.isFalse(pattern.matchesUrl('chrome://history'));
    });
    it('Matches *://', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('*://*/*');
        assert.exists(pattern);
        assert.isTrue(pattern.matchesScheme('http'));
        assert.isTrue(pattern.matchesScheme('https'));
        assert.isFalse(pattern.matchesScheme('chrome'));
        assert.isFalse(pattern.matchesScheme('file'));
        assert.isFalse(pattern.matchesScheme('ftp'));
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('http://127.0.0.1'));
        assert.isFalse(pattern.matchesUrl('chrome://favicon/http://google.com'));
        assert.isFalse(pattern.matchesUrl('file:///foo/bar'));
        assert.isFalse(pattern.matchesUrl('file://localhost/foo/bar'));
    });
    it('Matches <all_urls>', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('<all_urls>');
        assert.exists(pattern);
        assert.isTrue(pattern.matchesScheme('chrome'));
        assert.isTrue(pattern.matchesScheme('http'));
        assert.isTrue(pattern.matchesScheme('https'));
        assert.isTrue(pattern.matchesScheme('file'));
        assert.isTrue(pattern.matchesScheme('chrome-extension'));
        assert.isTrue(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('chrome://favicon/http://google.com'));
        assert.isTrue(pattern.matchesUrl('http://127.0.0.1'));
        assert.isTrue(pattern.matchesUrl('file:///foo/bar'));
        assert.isTrue(pattern.matchesUrl('file://localhost/foo/bar'));
    });
    it('Matches SCHEME_ALL matches all schemes.', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('<all_urls>');
        assert.exists(pattern);
        assert.isTrue(pattern.matchesScheme('chrome'));
        assert.isTrue(pattern.matchesScheme('http'));
        assert.isTrue(pattern.matchesScheme('https'));
        assert.isTrue(pattern.matchesScheme('file'));
        assert.isTrue(pattern.matchesScheme('javascript'));
        assert.isTrue(pattern.matchesScheme('data'));
        assert.isTrue(pattern.matchesScheme('about'));
        assert.isTrue(pattern.matchesScheme('chrome-extension'));
        assert.isTrue(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('chrome://favicon/http://google.com'));
        assert.isTrue(pattern.matchesUrl('http://127.0.0.1'));
        assert.isTrue(pattern.matchesUrl('file:///foo/bar'));
        assert.isTrue(pattern.matchesUrl('file://localhost/foo/bar'));
        assert.isTrue(pattern.matchesUrl('chrome://newtab'));
        assert.isTrue(pattern.matchesUrl('about:blank'));
        assert.isTrue(pattern.matchesUrl('about:version'));
        assert.isTrue(pattern.matchesUrl('data:text/html;charset=utf-8,<html>asdf</html>'));
    });
    it('Doesn\'t Match Invalid', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('<all_urls>');
        assert.exists(pattern);
        assert.isFalse(pattern.matchesUrl('http:'));
    });
    it('Matches SCHEME_ALL and specific schemes.', function() {
        var urlPatternTestCases = [
            {
                pattern: 'chrome-extension://*/*',
                matches: 'chrome-extension://FTW'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = urlPatternTestCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, pattern = _step_value.pattern, matches = _step_value.matches;
                var parsedPattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse(pattern);
                assert.exists(parsedPattern);
                assert.isTrue(parsedPattern.matchesUrl(matches));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
    it('Matches Specific port', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://www.example.com:80/');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('www.example.com', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.strictEqual('80', pattern.port);
        assert.isTrue(pattern.matchesUrl('http://www.example.com:80/foo'));
        assert.isTrue(pattern.matchesUrl('http://www.example.com/foo'));
        assert.isFalse(pattern.matchesUrl('http://www.example.com:8080/foo'));
    });
    it('Matches Explicit port wildcard', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://www.example.com:*/*');
        assert.exists(pattern);
        assert.strictEqual('http', pattern.scheme);
        assert.strictEqual('www.example.com', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.strictEqual('*', pattern.port);
        assert.isTrue(pattern.matchesUrl('http://www.example.com:80/foo'));
        assert.isTrue(pattern.matchesUrl('http://www.example.com/foo'));
        assert.isTrue(pattern.matchesUrl('http://www.example.com:8080/foo'));
    });
    it('Matches chrome-extension://', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('chrome-extension://ftw/*');
        assert.exists(pattern);
        assert.strictEqual('chrome-extension', pattern.scheme);
        assert.strictEqual('ftw', pattern.host);
        assert.isFalse(pattern.matchesAllUrls());
        assert.isTrue(pattern.matchesUrl('chrome-extension://ftw'));
        assert.isTrue(pattern.matchesUrl('chrome-extension://ftw/http://google.com'));
        assert.isTrue(pattern.matchesUrl('chrome-extension://ftw/https://google.com'));
        assert.isFalse(pattern.matchesUrl('chrome-extension://foobar'));
    });
    it('Ignore Ports', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('http://www.example.com:8080/');
        assert.exists(pattern);
        assert.isFalse(pattern.matchesUrl('http://www.example.com:1234/foo'));
    });
    it('Trailing Dot Domain', function() {
        var normalDomain = 'http://example.com/';
        var trailingDotDomain = 'http://example.com./';
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('*://example.com/*');
        assert.exists(pattern);
        assert.isTrue(pattern.matchesUrl(normalDomain));
        assert.isTrue(pattern.matchesUrl(trailingDotDomain));
        var trailingPattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('*://example.com./*');
        assert.exists(trailingPattern);
        assert.isTrue(trailingPattern.matchesUrl(normalDomain));
        assert.isTrue(trailingPattern.matchesUrl(trailingDotDomain));
    });
    it('URLPattern properly canonicalizes uncanonicalized hosts', function() {
        var pattern = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('*://*.gOoGle.com/*');
        assert.exists(pattern);
        assert.isTrue(pattern.matchesUrl('https://google.com'));
        assert.isTrue(pattern.matchesUrl('https://maps.google.com'));
        assert.isFalse(pattern.matchesUrl('https://example.com'));
        var pattern2 = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('https://*.ɡoogle.com/*');
        assert.exists(pattern2);
        var canonicalizedHost = 'xn--oogle-qmc.com';
        assert.strictEqual("*.".concat(canonicalizedHost), pattern2.host);
        assert.isFalse(pattern2.matchesUrl('https://google.com'));
        assert.isTrue(pattern2.matchesUrl("https://".concat(canonicalizedHost, "/")));
        assert.isTrue(pattern2.matchesHost('ɡoogle.com'));
        var pattern3 = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.HostUrlPattern.HostUrlPattern.parse('https://\xef\xb7\x90zyx.com/*');
        assert.isUndefined(pattern3); // Invalid Host
    });
}); //# sourceMappingURL=HostUrlPattern.test.js.map


}),

}]);