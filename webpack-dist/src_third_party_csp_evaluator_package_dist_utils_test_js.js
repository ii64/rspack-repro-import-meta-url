"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_utils_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/utils.js":
/*!*************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.applyCheckFunktionToDirectives = exports.matchWildcardUrls = exports.getHostname = exports.getSchemeFreeUrl = void 0;
function getSchemeFreeUrl(url) {
    url = url.replace(/^\w[+\w.-]*:\/\//i, '');
    url = url.replace(/^\/\//, '');
    return url;
}
exports.getSchemeFreeUrl = getSchemeFreeUrl;
function getHostname(url) {
    const hostname = new URL('https://' +
        getSchemeFreeUrl(url)
            .replace(':*', '')
            .replace('*', 'wildcard_placeholder'))
        .hostname.replace('wildcard_placeholder', '*');
    const ipv6Regex = /^\[[\d:]+\]/;
    if (getSchemeFreeUrl(url).match(ipv6Regex) && !hostname.match(ipv6Regex)) {
        return '[' + hostname + ']';
    }
    return hostname;
}
exports.getHostname = getHostname;
function setScheme(u) {
    if (u.startsWith('//')) {
        return u.replace('//', 'https://');
    }
    return u;
}
function matchWildcardUrls(cspUrlString, listOfUrlStrings) {
    const cspUrl = new URL(setScheme(cspUrlString
        .replace(':*', '')
        .replace('*', 'wildcard_placeholder')));
    const listOfUrls = listOfUrlStrings.map(u => new URL(setScheme(u)));
    const host = cspUrl.hostname.toLowerCase();
    const hostHasWildcard = host.startsWith('wildcard_placeholder.');
    const wildcardFreeHost = host.replace(/^\wildcard_placeholder/i, '');
    const path = cspUrl.pathname;
    const hasPath = path !== '/';
    for (const url of listOfUrls) {
        const domain = url.hostname;
        if (!domain.endsWith(wildcardFreeHost)) {
            continue;
        }
        if (!hostHasWildcard && host !== domain) {
            continue;
        }
        if (hasPath) {
            if (path.endsWith('/')) {
                if (!url.pathname.startsWith(path)) {
                    continue;
                }
            }
            else {
                if (url.pathname !== path) {
                    continue;
                }
            }
        }
        return url;
    }
    return null;
}
exports.matchWildcardUrls = matchWildcardUrls;
function applyCheckFunktionToDirectives(parsedCsp, check) {
    const directiveNames = Object.keys(parsedCsp.directives);
    for (const directive of directiveNames) {
        const directiveValues = parsedCsp.directives[directive];
        if (directiveValues) {
            check(directive, directiveValues);
        }
    }
}
exports.applyCheckFunktionToDirectives = applyCheckFunktionToDirectives;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./src/third_party/csp_evaluator/package/dist/utils_test.js":
/*!******************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/utils_test.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/third_party/csp_evaluator/package/dist/utils.js");
const TEST_BYPASSES = [
    'https://googletagmanager.com/gtm/js', 'https://www.google.com/jsapi',
    'https://ajax.googleapis.com/ajax/services/feed/load'
];
describe('Test Utils', () => {
    it('GetSchemeFreeUrl', () => {
        expect(utils_1.getSchemeFreeUrl('https://*')).toBe('*');
        expect(utils_1.getSchemeFreeUrl('//*')).toBe('*');
        expect(utils_1.getSchemeFreeUrl('*')).toBe('*');
        expect(utils_1.getSchemeFreeUrl('test//*')).toBe('test//*');
    });
    it('MatchWildcardUrlsMatchWildcardFreeHost', () => {
        const wildcardFreeHost = '//www.google.com';
        const match = utils_1.matchWildcardUrls(wildcardFreeHost, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatch', () => {
        const wildcardFreeHost = '//www.foo.bar';
        const match = utils_1.matchWildcardUrls(wildcardFreeHost, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchWildcardHost', () => {
        const wildcardHost = '//*.google.com';
        const match = utils_1.matchWildcardUrls(wildcardHost, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatchWildcardHost', () => {
        const wildcardHost = '//*.www.google.com';
        const match = utils_1.matchWildcardUrls(wildcardHost, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchWildcardHostWithPath', () => {
        const wildcardHostWithPath = '//*.google.com/jsapi';
        const match = utils_1.matchWildcardUrls(wildcardHostWithPath, TEST_BYPASSES);
        expect(match.hostname).toBe('www.google.com');
    });
    it('MatchWildcardUrlsNoMatchWildcardHostWithPath', () => {
        const wildcardHostWithPath = '//*.google.com/wrongPath';
        const match = utils_1.matchWildcardUrls(wildcardHostWithPath, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('MatchWildcardUrlsMatchHostWithPathWildcard', () => {
        const hostWithPath = '//ajax.googleapis.com/ajax/';
        const match = utils_1.matchWildcardUrls(hostWithPath, TEST_BYPASSES);
        expect(match.hostname).toBe('ajax.googleapis.com');
    });
    it('MatchWildcardUrlsNoMatchHostWithoutPathWildcard', () => {
        const hostWithPath = '//ajax.googleapis.com/ajax';
        const match = utils_1.matchWildcardUrls(hostWithPath, TEST_BYPASSES);
        expect(match).toBeNull();
    });
    it('GetHostname', () => {
        expect(utils_1.getHostname('https://www.google.com')).toBe('www.google.com');
    });
    it('GetHostnamePort', () => {
        expect(utils_1.getHostname('https://www.google.com:8080')).toBe('www.google.com');
    });
    it('GetHostnameWildcardPort', () => {
        expect(utils_1.getHostname('https://www.google.com:*')).toBe('www.google.com');
    });
    it('GetHostnameNoProtocol', () => {
        expect(utils_1.getHostname('www.google.com')).toBe('www.google.com');
    });
    it('GetHostnameDoubleSlashProtocol', () => {
        expect(utils_1.getHostname('//www.google.com')).toBe('www.google.com');
    });
    it('GetHostnameWildcard', () => {
        expect(utils_1.getHostname('//*.google.com')).toBe('*.google.com');
    });
    it('GetHostnameWithPath', () => {
        expect(utils_1.getHostname('//*.google.com/any/path')).toBe('*.google.com');
    });
    it('GetHostnameJustWildcard', () => {
        expect(utils_1.getHostname('*')).toBe('*');
    });
    it('GetHostnameWildcardWithProtocol', () => {
        expect(utils_1.getHostname('https://*')).toBe('*');
    });
    it('GetHostnameNonsense', () => {
        expect(utils_1.getHostname('unsafe-inline')).toBe('unsafe-inline');
    });
    it('GetHostnameIPv4', () => {
        expect(utils_1.getHostname('1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6', () => {
        expect(utils_1.getHostname('[::1]')).toBe('[::1]');
    });
    it('GetHostnameIPv4WithFullProtocol', () => {
        expect(utils_1.getHostname('https://1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6WithFullProtocol', () => {
        expect(utils_1.getHostname('http://[::1]')).toBe('[::1]');
    });
    it('GetHostnameIPv4WithPartialProtocol', () => {
        expect(utils_1.getHostname('//1.2.3.4')).toBe('1.2.3.4');
    });
    it('GetHostnameIPv6WithPartialProtocol', () => {
        expect(utils_1.getHostname('//[::1]')).toBe('[::1]');
    });
});
//# sourceMappingURL=utils_test.js.map

/***/ })

}]);