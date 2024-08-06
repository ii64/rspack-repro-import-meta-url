"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_ParsedURL_test_js"], {
"./core/common/ParsedURL.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var ParsedURL = _common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL;
function assertEqualUrlStringString(actual, expected, message) {
    assert.strictEqual(actual, expected, message);
}
describe('Parsed URL', function() {
    describe('with path normalization', function() {
        var cases = [
            {
                path: '',
                expected: ''
            },
            {
                path: '.',
                expected: '/'
            },
            {
                path: './',
                expected: '/'
            },
            {
                path: '..',
                expected: '/'
            },
            {
                path: '../',
                expected: '/'
            },
            {
                path: 'a/../g',
                expected: 'g'
            },
            {
                path: '../..',
                expected: '/'
            },
            {
                path: '../../',
                expected: '/'
            },
            {
                path: 'a/b/c/../../g',
                expected: 'a/g'
            },
            {
                path: 'a/b/c/d/../../../g',
                expected: 'a/g'
            },
            {
                path: 'a/b/c/d/e/../../../../g',
                expected: 'a/g'
            },
            {
                path: '/./g',
                expected: '/g'
            },
            {
                path: '/.//g',
                expected: '//g'
            },
            {
                path: '/../g',
                expected: '/g'
            },
            {
                path: 'g.',
                expected: 'g.'
            },
            {
                path: '.g',
                expected: '.g'
            },
            {
                path: 'g..',
                expected: 'g..'
            },
            {
                path: '..g',
                expected: '..g'
            },
            {
                path: 'a/b/./../g',
                expected: 'a/g'
            },
            {
                path: './g/.',
                expected: 'g/'
            },
            {
                path: 'g/./h',
                expected: 'g/h'
            },
            {
                path: 'g/../h',
                expected: 'h'
            },
            {
                path: './h/g/',
                expected: 'h/g/'
            },
            {
                path: 'g///h.ts',
                expected: 'g///h.ts'
            },
            {
                path: '/b/c/./',
                expected: '/b/c/'
            },
            {
                path: '///',
                expected: '///'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var _step_value = _step.value, path = _step_value.path, expected = _step_value.expected;
                it('can normalize "'.concat(path, '"'), function() {
                    assert.strictEqual(_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.normalizePath(path), expected);
                });
            };
            for(var _iterator = cases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    it('recognizes valid URLs', function() {
        var parsedUrl = new ParsedURL('http://www.example.com/');
        assert.isTrue(parsedUrl.isValid, 'the URL should be valid');
    });
    it('recognizes the URL elements', function() {
        var parsedUrl = new ParsedURL('http://username@www.example.com:8080/testing/test?isTest=true#testFragment');
        assert.isTrue(parsedUrl.isValid, 'the URL should be valid');
        assert.strictEqual(parsedUrl.url, 'http://username@www.example.com:8080/testing/test?isTest=true#testFragment', 'URL value is incorrect');
        assert.strictEqual(parsedUrl.scheme, 'http', 'URL scheme is incorrect');
        assert.strictEqual(parsedUrl.user, 'username', 'URL user is incorrect');
        assert.strictEqual(parsedUrl.host, 'www.example.com', 'URL host is incorrect');
        assert.strictEqual(parsedUrl.port, '8080', 'URL port is incorrect');
        assert.strictEqual(parsedUrl.path, '/testing/test', 'URL path is incorrect');
        assert.strictEqual(parsedUrl.queryParams, 'isTest=true', 'URL query params are incorrect');
        assert.strictEqual(parsedUrl.fragment, 'testFragment', 'URL fragment is incorrect');
        assert.strictEqual(parsedUrl.folderPathComponents, '/testing', 'URL folder path components are incorrect');
        assert.strictEqual(parsedUrl.lastPathComponent, 'test', 'URL last path component is incorrect');
    });
    it('recognizes a valid IPv6 localhost URL', function() {
        var parsedUrl = new ParsedURL('http://[::]/?queryParam1=value1&queryParam2=value2#fragmentWith/Many//Slashes');
        assert.isTrue(parsedUrl.isValid, 'the URL should be valid');
        assert.strictEqual(parsedUrl.url, 'http://[::]/?queryParam1=value1&queryParam2=value2#fragmentWith/Many//Slashes', 'URL value is incorrect');
        assert.strictEqual(parsedUrl.scheme, 'http', 'URL scheme is incorrect');
        assert.strictEqual(parsedUrl.user, '', 'URL user is incorrect');
        assert.strictEqual(parsedUrl.host, '[::]', 'URL host is incorrect');
        assert.strictEqual(parsedUrl.port, '', 'URL port is incorrect');
        assert.strictEqual(parsedUrl.path, '/', 'URL path is incorrect');
        assert.strictEqual(parsedUrl.queryParams, 'queryParam1=value1&queryParam2=value2', 'URL query params are incorrect');
        assert.strictEqual(parsedUrl.fragment, 'fragmentWith/Many//Slashes', 'URL fragment is incorrect');
        assert.strictEqual(parsedUrl.folderPathComponents, '', 'URL folder path components are incorrect');
        assert.strictEqual(parsedUrl.lastPathComponent, '', 'URL last path component is incorrect');
    });
    it('recognizes a valid blob URL', function() {
        var parsedUrl = new ParsedURL('blob:http://www.example.com/');
        assert.isTrue(parsedUrl.isValid, 'the URL should be valid');
        assert.strictEqual(parsedUrl.scheme, 'blob', 'the URL scheme is not blob');
        assert.strictEqual(parsedUrl.blobInnerScheme, 'http', 'the URL inner scheme is not http');
    });
    it('parses a URL with no path', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.isTrue(parsedUrl.isValid, 'the URL should be valid');
        assert.strictEqual(parsedUrl.path, '/', 'path is not a single slash ("/")');
    });
    it('parses a data URL', function() {
        var parsedUrl = new ParsedURL('data:test');
        assert.isFalse(parsedUrl.isValid, 'the URL should not be valid');
        assert.strictEqual(parsedUrl.scheme, 'data', 'the URL scheme is not data');
    });
    it('recognizes an invalid blob URL', function() {
        var parsedUrl = new ParsedURL('blob:test');
        assert.isFalse(parsedUrl.isValid, 'the URL should not be valid');
        assert.strictEqual(parsedUrl.scheme, 'blob', 'the URL scheme is not blob');
    });
    it('recognizes an invalid blank URL', function() {
        var parsedUrl = new ParsedURL('about:blank');
        assert.isFalse(parsedUrl.isValid, 'the URL should not be valid');
        assert.strictEqual(parsedUrl.scheme, 'about', 'the URL scheme is not blob');
    });
    it('recognizes an invalid URL', function() {
        var parsedUrl = new ParsedURL('abc');
        assert.isFalse(parsedUrl.isValid, 'the URL should not be valid');
        assert.strictEqual(parsedUrl.url, 'abc', 'URL value is incorrect');
    });
    it('converts platform path to a URL that does not start with "file://"', function() {
        var platformPathTest = 'usr/lib';
        var convertedUrl = ParsedURL.rawPathToUrlString(platformPathTest);
        assert.strictEqual(convertedUrl, 'file:///usr/lib', 'URL was not converted correctly');
    });
    it('converts platform path to a URL that does not start with "file://" but starts with a slash ("/")', function() {
        var platformPathTest = '/usr/lib';
        var convertedUrl = ParsedURL.rawPathToUrlString(platformPathTest);
        assert.strictEqual(convertedUrl, 'file:///usr/lib', 'URL was not converted correctly');
    });
    it('converts platform path to a URL that starts with "file://"', function() {
        var platformPathTest = 'file://usr/lib';
        var convertedUrl = ParsedURL.rawPathToUrlString(platformPathTest);
        assert.strictEqual(convertedUrl, 'file://usr/lib', 'URL was not converted correctly');
    });
    it('converts path that starts with "file://" to a platform path', function() {
        var pathTest = 'file://usr/lib';
        var convertedPath = ParsedURL.urlToRawPathString(pathTest);
        assert.strictEqual(convertedPath, 'usr/lib', 'URL was not converted successfully');
    });
    it('converts path that starts with "file:///" to a platform path on Windows', function() {
        var pathTest = 'file:///usr/lib';
        var convertedPath = ParsedURL.urlToRawPathString(pathTest, true);
        assert.strictEqual(convertedPath, 'usr\\lib', 'URL was not converted successfully');
    });
    it('checks that URL is valid', function() {
        var urlTest = 'http://www.example.com#?test';
        assert.strictEqual(ParsedURL.isValidUrlString(urlTest), true, 'URL validation was incorrect');
    });
    it('checks that file:// URL is valid', function() {
        var urlTest = 'file:///usr/lib';
        assert.strictEqual(ParsedURL.isValidUrlString(urlTest), true, 'URL validation was incorrect');
    });
    it('checks that "://" is not a valid URL', function() {
        var urlTest = '://';
        assert.strictEqual(ParsedURL.isValidUrlString(urlTest), false, 'URL validation was incorrect');
    });
    it('converts URL with a hash to a URL without a hash', function() {
        var urlTest = 'http://www.example.com#?test';
        var convertedUrl = ParsedURL.urlWithoutHash(urlTest);
        assert.strictEqual(convertedUrl, 'http://www.example.com', 'URL was not converted successfully');
    });
    it('returns URL without a hash as it is', function() {
        var urlTest = 'http://www.example.com';
        var convertedUrl = ParsedURL.urlWithoutHash(urlTest);
        assert.strictEqual(convertedUrl, urlTest, 'URL was changed');
    });
    it('returns URL with a question mark but without a hash as it is', function() {
        var urlTest = 'http://www.example.com?hello';
        var convertedUrl = ParsedURL.urlWithoutHash(urlTest);
        assert.strictEqual(convertedUrl, urlTest, 'URL was changed');
    });
    it('extracts the path from a valid URL', function() {
        var urlTest = 'http://www.example.com/test/path';
        var extractedPath = ParsedURL.extractPath(urlTest);
        assert.strictEqual(extractedPath, '/test/path', 'path extracted incorrectly');
    });
    it('returns an empty string as a path if the URL is not valid', function() {
        var urlTest = 'www.example.com/test/path';
        var extractedPath = ParsedURL.extractPath(urlTest);
        assert.strictEqual(extractedPath, '', 'did not return an empty path');
    });
    it('extracts the origin from a valid URL', function() {
        var urlTest = 'http://www.example.com/test/path';
        var extractedOrigin = ParsedURL.extractOrigin(urlTest);
        assert.strictEqual(extractedOrigin, 'http://www.example.com', 'origin extracted incorrectly');
    });
    it('returns an empty string as a origin if the URL is not valid', function() {
        var urlTest = 'www.example.com/test/path';
        var extractedOrigin = ParsedURL.extractOrigin(urlTest);
        assert.strictEqual(extractedOrigin, '', 'did not return an empty path');
    });
    it('extracts the extension from a valid URL with a hash', function() {
        var urlTest = 'http://www.example.com/test/testFile.html#testHash';
        var extractedExt = ParsedURL.extractExtension(urlTest);
        assert.strictEqual(extractedExt, 'html', 'extension extracted incorrectly');
    });
    it('extracts the extension from a valid URL with a question mark', function() {
        var urlTest = 'http://www.example.com/test/testFile.html?testParam=t';
        var extractedExt = ParsedURL.extractExtension(urlTest);
        assert.strictEqual(extractedExt, 'html', 'extension extracted incorrectly');
    });
    it('extracts the extension from a valid URL that does not have slashes', function() {
        var urlTest = 'testFile.html';
        var extractedExt = ParsedURL.extractExtension(urlTest);
        assert.strictEqual(extractedExt, 'html', 'extension extracted incorrectly');
    });
    it('extracts the extension from a valid URL that has a percent sign', function() {
        var urlTest = 'http://www.example.com/test/path.html%20';
        var extractedExt = ParsedURL.extractExtension(urlTest);
        assert.strictEqual(extractedExt, 'html', 'extension extracted incorrectly');
    });
    it('returns an empty string when trying to extract extension from an invalid URL', function() {
        var urlTest = 'http://html';
        var extractedExt = ParsedURL.extractExtension(urlTest);
        assert.strictEqual(extractedExt, '', 'extension extracted incorrectly');
    });
    it('is able to extract name from a valid URL', function() {
        var urlTest = 'http://www.example.com/test/path.html';
        var extractedName = ParsedURL.extractName(urlTest);
        assert.strictEqual(extractedName, 'path.html', 'name extracted incorrectly');
    });
    it('is able to extract name from a string without a slash', function() {
        var urlTest = 'path.html';
        var extractedName = ParsedURL.extractName(urlTest);
        assert.strictEqual(extractedName, 'path.html', 'name extracted incorrectly');
    });
    it('is able to extract name from a valid URL with a query', function() {
        var urlTest = 'http://www.example.com/test/path.html?testParam=t';
        var extractedName = ParsedURL.extractName(urlTest);
        assert.strictEqual(extractedName, 'path.html', 'name extracted incorrectly');
    });
    it('is able to extract name from a string without a slash and with a query', function() {
        var urlTest = 'path.html?testParam=t';
        var extractedName = ParsedURL.extractName(urlTest);
        assert.strictEqual(extractedName, 'path.html', 'name extracted incorrectly');
    });
    it('uses the completeURL function to return a data URL as it is', function() {
        var hrefTest = 'data:http://www.example.com';
        var baseUrlTest = 'www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to return a blob URL as it is', function() {
        var hrefTest = 'blob:http://www.example.com';
        var baseUrlTest = 'www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to return a javascript URL as it is', function() {
        var hrefTest = 'javascript:http://www.example.com';
        var baseUrlTest = 'www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to return a mailto URL as it is', function() {
        var hrefTest = 'mailto:http://www.example.com';
        var baseUrlTest = 'www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, hrefTest, 'complete URL is not returned correctly');
    });
    describe('completeURL with absolute URLs', function() {
        var cases = [
            {
                href: 'http://www.example.com',
                expected: 'http://www.example.com/'
            },
            {
                href: 'http://a/b/c/g',
                expected: 'http://a/b/c/g'
            },
            {
                href: 'http://a/b/c/./g',
                expected: 'http://a/b/c/g'
            },
            {
                href: 'http://a/b/c/g/',
                expected: 'http://a/b/c/g/'
            },
            {
                href: 'http://a/b/c/d;p?y',
                expected: 'http://a/b/c/d;p?y'
            },
            {
                href: 'http://a/b/c/g?y',
                expected: 'http://a/b/c/g?y'
            },
            {
                href: 'http://a/b/c/d;p?q#s',
                expected: 'http://a/b/c/d;p?q#s'
            },
            {
                href: 'http://a/b/c/g#s',
                expected: 'http://a/b/c/g#s'
            },
            {
                href: 'http://a/b/c/g?y#s',
                expected: 'http://a/b/c/g?y#s'
            },
            {
                href: 'http://a/b/c/;x',
                expected: 'http://a/b/c/;x'
            },
            {
                href: 'http://a/b/c/g;x',
                expected: 'http://a/b/c/g;x'
            },
            {
                href: 'http://a/b/c/g;x?y#s',
                expected: 'http://a/b/c/g;x?y#s'
            },
            {
                href: 'http://a/b/c/d;p?q',
                expected: 'http://a/b/c/d;p?q'
            },
            {
                href: 'http://a/b/c/.',
                expected: 'http://a/b/c/'
            },
            {
                href: 'http://a/b/c/./',
                expected: 'http://a/b/c/'
            },
            {
                href: 'http://a/b/c/..',
                expected: 'http://a/b/'
            },
            {
                href: 'http://a/b/c/../',
                expected: 'http://a/b/'
            },
            {
                href: 'http://a/b/c/../g',
                expected: 'http://a/b/g'
            },
            {
                href: 'http://a/b/c/../..',
                expected: 'http://a/'
            },
            {
                href: 'http://a/b/c/../../',
                expected: 'http://a/'
            },
            {
                href: 'http://a/b/c/../../g',
                expected: 'http://a/g'
            },
            {
                href: 'http://a/b/c/../../../g',
                expected: 'http://a/g'
            },
            {
                href: 'http://a/b/c/../../../../g',
                expected: 'http://a/g'
            },
            {
                href: 'http://a/b/c/g.',
                expected: 'http://a/b/c/g.'
            },
            {
                href: 'http://a/b/c/.g',
                expected: 'http://a/b/c/.g'
            },
            {
                href: 'http://a/b/c/g..',
                expected: 'http://a/b/c/g..'
            },
            {
                href: 'http://a/b/c/..g',
                expected: 'http://a/b/c/..g'
            },
            {
                href: 'http://a/b/c/./../g',
                expected: 'http://a/b/g'
            },
            {
                href: 'http://a/b/c/./g/.',
                expected: 'http://a/b/c/g/'
            },
            {
                href: 'http://a/b/c/g/./h',
                expected: 'http://a/b/c/g/h'
            },
            {
                href: 'http://a/b/c/g/../h',
                expected: 'http://a/b/c/h'
            },
            {
                href: 'http://a/b/c/g;x=1/./y',
                expected: 'http://a/b/c/g;x=1/y'
            },
            {
                href: 'http://a/b/c/g;x=1/../y',
                expected: 'http://a/b/c/y'
            },
            {
                href: 'http://a/b/c/g?y/./x',
                expected: 'http://a/b/c/g?y/./x'
            },
            {
                href: 'http://a/b/c/g?y/../x',
                expected: 'http://a/b/c/g?y/../x'
            },
            {
                href: 'http://a/b/c/g#s/./x',
                expected: 'http://a/b/c/g#s/./x'
            },
            {
                href: 'http://a/b/c/g#s/../x',
                expected: 'http://a/b/c/g#s/../x'
            },
            {
                href: 'http://user:password@host:8080/dir/../file.ts?rev=100',
                expected: 'http://host:8080/file.ts?rev=100'
            },
            {
                href: 'webpack://@scope/chrome-devtool-sourcemap-issue/./main.ts',
                expected: 'webpack://scope/chrome-devtool-sourcemap-issue/main.ts'
            }
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var _step_value = _step.value, href = _step_value.href, expected = _step_value.expected;
                it('can use completeURL to normalize "'.concat(href, '"'), function() {
                    var baseUrlTest = 'www.example.com';
                    var completeUrl = ParsedURL.completeURL(baseUrlTest, href);
                    assertEqualUrlStringString(completeUrl, expected, 'complete URL is not returned correctly');
                });
            };
            for(var _iterator = cases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    it('uses the completeURL function to return null for invalid href and invalid base URL', function() {
        var hrefTest = 'www.example.com';
        var baseUrlTest = 'www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assert.strictEqual(completeUrl, null, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to return the href if the base URL is a data URL', function() {
        var hrefTest = 'www.example.com';
        var baseUrlTest = 'data://www.example.com';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to return the href with scheme if the base URL was valid and the href scheme was dropped', function() {
        var hrefTest = '//www.example.com';
        var baseUrlTest = 'http://www.example.com/';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, 'http:' + hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to resolve an empty href to a base URL without fragment', function() {
        var hrefTest = '';
        var baseUrlTest = 'http://www.example.com/?testParam=t';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, baseUrlTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to resolve a fragment href to a base URL with fragment', function() {
        var hrefTest = '#testFragment';
        var baseUrlTest = 'http://www.example.com/?testParam=t';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, baseUrlTest + hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to resolve a parameters href to a base URL with the parameters from the href while the base URL has parameters', function() {
        var hrefTest = '?hrefParams=t';
        var baseUrlTest = 'http://www.example.com/?testParam=t';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, 'http://www.example.com/' + hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the completeURL function to resolve a parameters href to a base URL with the parameters from the href while the base URL does not have parameters', function() {
        var hrefTest = '?hrefParams=t';
        var baseUrlTest = 'http://www.example.com/';
        var completeUrl = ParsedURL.completeURL(baseUrlTest, hrefTest);
        assertEqualUrlStringString(completeUrl, baseUrlTest + hrefTest, 'complete URL is not returned correctly');
    });
    it('uses the splitLineAndColumn function to return undefined line and column numbers if the URL does not contain any', function() {
        var stringTest = 'http://www.example.com';
        var splitResult = ParsedURL.splitLineAndColumn(stringTest);
        assert.strictEqual(splitResult.url, 'http://www.example.com', 'URL is not correct');
        assert.isUndefined(splitResult.lineNumber, 'line number is not undefined');
        assert.isUndefined(splitResult.columnNumber, 'column number is not undefined');
    });
    it('uses the splitLineAndColumn function to return the line number if the URL contains one', function() {
        var stringTest = 'http://www.example.com/foo.js:15';
        var splitResult = ParsedURL.splitLineAndColumn(stringTest);
        assert.strictEqual(splitResult.url, 'http://www.example.com/foo.js', 'URL is not correct');
        assert.strictEqual(splitResult.lineNumber, 14, 'line number is incorrect');
        assert.strictEqual(splitResult.columnNumber, undefined, 'column number is incorrect');
    });
    it('uses the splitLineAndColumn function to return the line and column numbers if the URL contains them', function() {
        var stringTest = 'http://www.example.com:15:20';
        var splitResult = ParsedURL.splitLineAndColumn(stringTest);
        assert.strictEqual(splitResult.url, 'http://www.example.com', 'URL is not correct');
        assert.strictEqual(splitResult.lineNumber, 14, 'line number is incorrect');
        assert.strictEqual(splitResult.columnNumber, 19, 'column number is incorrect');
    });
    it('uses the splitLineAndColumn function to return the line and column numbers if the URL contains them and has a port number', function() {
        var stringTest = 'http://www.example.com:8080:15:20';
        var splitResult = ParsedURL.splitLineAndColumn(stringTest);
        assert.strictEqual(splitResult.url, 'http://www.example.com:8080', 'URL is not correct');
        assert.strictEqual(splitResult.lineNumber, 14, 'line number is incorrect');
        assert.strictEqual(splitResult.columnNumber, 19, 'column number is incorrect');
    });
    it('uses the removeWasmFunctionInfoFromURL function to return unmodified URL if not pointing to a wasm source', function() {
        var stringTest = 'http://www.example.com:15:20';
        var url = ParsedURL.removeWasmFunctionInfoFromURL(stringTest);
        assert.strictEqual(url, 'http://www.example.com:15:20', 'URL is not correct');
    });
    it('uses the removeWasmFunctionInfoFromURL function to return the wasm unmodified URL if it points to a wasm source', function() {
        var stringTest = 'http://www.example.com/example.wasm:wasm-function[0]:0x3e';
        var url = ParsedURL.removeWasmFunctionInfoFromURL(stringTest);
        assert.strictEqual(url, 'http://www.example.com/example.wasm', 'URL is not correct');
    });
    it('uses the removeWasmFunctionInfoFromURL function to return the wasm unmodified URL if it points to a wasm source with port number', function() {
        var stringTest = 'http://www.example.com:8080/example.wasm:wasm-function[0]:0x3e';
        var url = ParsedURL.removeWasmFunctionInfoFromURL(stringTest);
        assert.strictEqual(url, 'http://www.example.com:8080/example.wasm', 'URL is not correct');
    });
    it('uses the isRelativeURL function to return true if the URL is relative', function() {
        assert.isTrue(ParsedURL.isRelativeURL('/test/path'));
        assert.isTrue(ParsedURL.isRelativeURL('C:/'));
        assert.isTrue(ParsedURL.isRelativeURL('C'));
    });
    it('uses the isRelativeURL function to return false if the URL is not relative', function() {
        assert.isFalse(ParsedURL.isRelativeURL('http://www.example.com/test/path'));
        assert.isFalse(ParsedURL.isRelativeURL('about:blank'));
        assert.isFalse(ParsedURL.isRelativeURL('file:///C:/'));
    });
    it('uses the displayName function to return the name if it exists for a URL', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.displayName, 'www.example.com/', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for a data URL', function() {
        var parsedUrl = new ParsedURL('data:www.example.com');
        assert.strictEqual(parsedUrl.displayName, 'data:www.example.com', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for a blob URL', function() {
        var parsedUrl = new ParsedURL('blob:www.example.com');
        assert.strictEqual(parsedUrl.displayName, 'blob:www.example.com', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for an about:blank URL', function() {
        var parsedUrl = new ParsedURL('about:blank');
        assert.strictEqual(parsedUrl.displayName, 'about:blank', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for a URL with a last path component', function() {
        var parsedUrl = new ParsedURL('http://www.example.com/test');
        assert.strictEqual(parsedUrl.displayName, 'test', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for a a slash', function() {
        var parsedUrl = new ParsedURL('/');
        assert.strictEqual(parsedUrl.displayName, '/', 'name returned is incorrect');
    });
    it('uses the displayName function to return the name for a URL that already has a display name set', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.displayName, 'www.example.com/', 'name returned is incorrect');
        assert.strictEqual(parsedUrl.displayName, 'www.example.com/', 'name returned is incorrect');
    });
    it('uses the dataURLDisplayName function to return data URL display name if it is not already set', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.dataURLDisplayName(), '', 'data URL display name is returned incorrectly');
    });
    it('uses the dataURLDisplayName function to return data URL display name if it is already set', function() {
        var parsedUrl = new ParsedURL('data:http://www.example.com');
        assert.strictEqual(parsedUrl.dataURLDisplayName(), 'data:http://www.exa…', 'data URL display name is returned incorrectly');
        assert.strictEqual(parsedUrl.dataURLDisplayName(), 'data:http://www.exa…', 'data URL display name is returned incorrectly');
    });
    it('uses the lastPathComponentWithFragment function to return for a URL without a path', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.lastPathComponentWithFragment(), '', 'last path component with fragmen returned is incorrect');
    });
    it('uses the lastPathComponentWithFragment function to return for a URL with a path', function() {
        var parsedUrl = new ParsedURL('http://www.example.com/test/path');
        assert.strictEqual(parsedUrl.lastPathComponentWithFragment(), 'path', 'last path component with fragmen returned is incorrect');
    });
    it('uses the lastPathComponentWithFragment function to return for a URL with a path and trailing slash', function() {
        var parsedUrl = new ParsedURL('http://www.example.com/test/path/');
        assert.strictEqual(parsedUrl.lastPathComponentWithFragment(), 'path/', 'last path component with fragmen returned is incorrect');
    });
    it('uses the lastPathComponentWithFragment function to return for a URL with a path and a fragment', function() {
        var parsedUrl = new ParsedURL('http://www.example.com/test/path#testFragment');
        assert.strictEqual(parsedUrl.lastPathComponentWithFragment(), 'path#testFragment', 'last path component with fragmen returned is incorrect');
    });
    it('returns the domain for a data URL', function() {
        var parsedUrl = new ParsedURL('data:http://www.example.com');
        assert.strictEqual(parsedUrl.domain(), 'data:', 'domain returned was incorrect');
    });
    it('returns the domain for an http URL without a port', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.domain(), 'www.example.com', 'domain returned was incorrect');
    });
    it('returns the domain for an http URL with a port', function() {
        var parsedUrl = new ParsedURL('http://www.example.com:8080');
        assert.strictEqual(parsedUrl.domain(), 'www.example.com:8080', 'domain returned was incorrect');
    });
    it('returns the security origin for a data URL', function() {
        var parsedUrl = new ParsedURL('data:http://www.example.com');
        assert.strictEqual(parsedUrl.securityOrigin(), 'data:', 'security origin returned was incorrect');
    });
    it('returns the security origin for a blob URL', function() {
        var parsedUrl = new ParsedURL('blob:http://www.example.com');
        assert.strictEqual(parsedUrl.securityOrigin(), 'http://www.example.com', 'security origin returned was incorrect');
    });
    it('returns the security origin for an http URL', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.securityOrigin(), 'http://www.example.com', 'security origin returned was incorrect');
    });
    it('returns the url without scheme for a URL that has a scheme', function() {
        var parsedUrl = new ParsedURL('http://www.example.com');
        assert.strictEqual(parsedUrl.urlWithoutScheme(), 'www.example.com', 'URL without scheme returned was incorrect');
    });
    it('returns the url without scheme for a URL that does not have a scheme', function() {
        var parsedUrl = new ParsedURL('www.example.com');
        assert.strictEqual(parsedUrl.urlWithoutScheme(), 'www.example.com', 'URL without scheme returned was incorrect');
    });
    it('returns the correct results for all ported web_tests unit tests', function() {
        assertEqualUrlStringString(ParsedURL.completeURL('http://example.com/script.js', 'http://example.com/map.json'), 'http://example.com/map.json');
        assertEqualUrlStringString(ParsedURL.completeURL('http://example.com/script.js', '/map.json'), 'http://example.com/map.json');
        assertEqualUrlStringString(ParsedURL.completeURL('http://example.com/scripts/script.js', '../maps/map.json'), 'http://example.com/maps/map.json');
        var baseURL = 'http://a/b/c/d;p?q';
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'http://h'), 'http://h/'); // modified from RFC3986
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g'), 'http://a/b/c/g');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, './g'), 'http://a/b/c/g');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g/'), 'http://a/b/c/g/');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, '/g'), 'http://a/g');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, '//g'), 'http://g');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, '?y'), 'http://a/b/c/d;p?y');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g?y'), 'http://a/b/c/g?y');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, '#s'), 'http://a/b/c/d;p?q#s');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g#s'), 'http://a/b/c/g#s');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g?y#s'), 'http://a/b/c/g?y#s');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, ';x'), 'http://a/b/c/;x');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g;x'), 'http://a/b/c/g;x');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g;x?y#s'), 'http://a/b/c/g;x?y#s');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g;x=1/./y'), 'http://a/b/c/g;x=1/y');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g;x=1/../y'), 'http://a/b/c/y');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g?y/./x'), 'http://a/b/c/g?y/./x');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g?y/../x'), 'http://a/b/c/g?y/../x');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g#s/./x'), 'http://a/b/c/g#s/./x');
        assertEqualUrlStringString(ParsedURL.completeURL(baseURL, 'g#s/../x'), 'http://a/b/c/g#s/../x');
        assertEqualUrlStringString(ParsedURL.completeURL('http://a/b/c/d;p?q', '//secure.com/moo'), 'http://secure.com/moo');
        assertEqualUrlStringString(ParsedURL.completeURL('http://a/b/c/d;p?q', 'cat.jpeg'), 'http://a/b/c/cat.jpeg');
        assertEqualUrlStringString(ParsedURL.completeURL('http://example.com/path.css?query#fragment', ''), 'http://example.com/path.css?query');
    });
    it('encodes partial path', function() {
        var pathTest = 'path/with%20escape/and spaces';
        var encodedPath = 'path/with%2520escape/and%20spaces';
        var convertedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        assert.strictEqual(convertedPath, encodedPath, 'path was not converted successfully');
    });
    it('decodes partial path', function() {
        var pathTest = 'path/with%20escape/and spaces';
        var encodedPath = 'path/with%2520escape/and%20spaces';
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('encodes, decodes partial path with email address', function() {
        var pathTest = 'username:password@example.com'; // valid filename on unix
        var encodedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        assert.strictEqual(pathTest, encodedPath, 'changed during escaping');
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('encodes, decodes partial path', function() {
        var pathTest = 'C:/Program%20Files/Google';
        var encodedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('encodes, decodes partial path with whitespace', function() {
        var pathTest = 'C:/Program Files/Google';
        var encodedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('encodes, decodes absolute path', function() {
        var pathTest = '/C:/Program%20Files/Google';
        var encodedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('encodes, decodes absolute path with whitespace', function() {
        var pathTest = '/C:/Program Files/Google';
        var encodedPath = ParsedURL.rawPathToEncodedPathString(pathTest);
        var convertedPath = ParsedURL.encodedPathToRawPathString(encodedPath);
        assert.strictEqual(convertedPath, pathTest, 'path was not converted successfully');
    });
    it('converts relative platform path and base URL to URL', function() {
        var baseUrl = 'http://localhost:8080/my%20folder/old%20path';
        var relativePath = 'new spaced%20name';
        var convertedUrl = ParsedURL.relativePathToUrlString(relativePath, baseUrl);
        assert.strictEqual(convertedUrl, 'http://localhost:8080/my%20folder/new%20spaced%2520name');
    });
    it('converts URL to a platform path that includes drive letter and spaces on Windows', function() {
        var urlTest = 'file:///C:/Program%20Files/Google';
        var convertedUrl = ParsedURL.urlToRawPathString(urlTest, true);
        assert.strictEqual(convertedUrl, 'C:\\Program Files\\Google', 'URL was not converted successfully');
    });
    it('converts URL to a platform path that includes spaces and percents', function() {
        var urlTest = 'file:///home/user/with%20space/with%2520escape';
        var convertedUrl = ParsedURL.urlToRawPathString(urlTest, false);
        assert.strictEqual(convertedUrl, '/home/user/with space/with%20escape', 'URL was not converted successfully');
    });
    it('converts Windows platform path with spaces and percents to file url', function() {
        var urlTest = 'C:\\Program Files\\with%20escape';
        var convertedUrl = ParsedURL.rawPathToUrlString(urlTest);
        assert.strictEqual(convertedUrl, 'file:///C:/Program%20Files/with%2520escape', 'URL was not converted successfully');
    });
    it('converts platform path with variety of special characters to URL and back consistently with Chrome', function() {
        var platformPathTest = '/home/a:b@c(d, e+f)=&g;#h$'; // Valid filename on unix
        var urlTest = 'file:///home/a:b@c(d,%20e+f)=&g%3B%23h$'; // URL in Chrome address bar if you open that file
        assert.strictEqual(ParsedURL.rawPathToUrlString(platformPathTest), urlTest);
        assert.strictEqual(ParsedURL.urlToRawPathString(urlTest), platformPathTest);
    });
}); //# sourceMappingURL=ParsedURL.test.js.map


}),

}]);