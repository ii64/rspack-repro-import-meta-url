"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_Cookies_js"], {
"./testing/Cookies.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCookie: function() { return expectCookie; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var cookieExpectationDefaults = {
    name: 'name',
    value: 'value',
    httpOnly: false,
    sameSite: undefined,
    secure: false,
    session: true,
    path: undefined,
    domain: undefined,
    expires: null,
    size: undefined,
    priority: "Medium" /* Protocol.Network.CookiePriority.Medium */ ,
    partitionKey: null,
    partitionKeyOpaque: false
};
var requestDate = new Date('Mon Oct 18 2010 17:00:00 GMT+0000');
function expectCookie(cookie, cookieExpectation) {
    var expectation = _object_spread({}, cookieExpectationDefaults, cookieExpectation);
    assert.strictEqual(cookie.name(), expectation.name, 'name');
    assert.strictEqual(cookie.value(), expectation.value, 'value');
    assert.strictEqual(cookie.httpOnly(), expectation.httpOnly, 'httpOnly');
    assert.strictEqual(cookie.sameSite(), expectation.sameSite, 'sameSite');
    assert.strictEqual(cookie.secure(), expectation.secure, 'secure');
    assert.strictEqual(cookie.session(), expectation.session, 'session');
    assert.strictEqual(cookie.path(), expectation.path, 'path');
    assert.strictEqual(cookie.domain(), expectation.domain, 'domain');
    var date = cookie.expiresDate(requestDate);
    if (typeof expectation.expires === 'string') {
        assert.isNotNull(date);
        assert.strictEqual(date.toISOString(), expectation.expires, 'expires');
    } else if (typeof expectation.expires === 'number') {
        assert.isNotNull(date);
        assert.strictEqual(date.getTime(), expectation.expires, 'expires');
    } else {
        assert.strictEqual(date, expectation.expires, 'expires');
    }
    assert.strictEqual(cookie.size(), expectation.size, 'size');
    assert.strictEqual(cookie.priority(), expectation.priority, 'priority');
    assert.strictEqual(cookie.partitioned(), Boolean(expectation.partitionKey), 'partitioned');
    if (cookie.partitioned()) {
        var _expectation_partitionKey, _expectation_partitionKey1;
        assert.strictEqual(cookie.hasCrossSiteAncestor(), (_expectation_partitionKey = expectation.partitionKey) === null || _expectation_partitionKey === void 0 ? void 0 : _expectation_partitionKey.hasCrossSiteAncestor, 'hasCrossSiteAncestor');
        assert.strictEqual(cookie.topLevelSite(), (_expectation_partitionKey1 = expectation.partitionKey) === null || _expectation_partitionKey1 === void 0 ? void 0 : _expectation_partitionKey1.topLevelSite, 'topLevelSite');
    }
    assert.strictEqual(cookie.partitionKeyOpaque(), expectation.partitionKeyOpaque, 'partitionKeyOpaque');
} //# sourceMappingURL=Cookies.js.map


}),

}]);