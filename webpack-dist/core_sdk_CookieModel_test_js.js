"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_CookieModel_test_js"],{

/***/ "./core/sdk/CookieModel.test.js":
/*!**************************************!*\
  !*** ./core/sdk/CookieModel.test.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockNetworkLog.js */ "./testing/MockNetworkLog.js");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const MAIN_FRAME_RESOURCE_DOMAIN = 'example.org';
const CHILD_FRAME_RESOURCE_DOMAIN = 'example.net';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('CookieModel', () => {
    const PROTOCOL_COOKIE = {
        domain: '.example.com',
        name: 'name',
        path: '/test',
        size: 23,
        value: 'value',
        expires: 42,
        httpOnly: false,
        secure: false,
        session: true,
        sameParty: false,
        priority: "Medium" /* Protocol.Network.CookiePriority.Medium */,
        sourcePort: 80,
        sourceScheme: "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */,
        partitionKey: undefined,
    };
    const PROTOCOL_COOKIE_PARTITIONED = {
        domain: '.example.com',
        name: 'name',
        path: '/test',
        size: 23,
        value: 'value',
        expires: 42,
        httpOnly: false,
        secure: false,
        session: true,
        sameParty: false,
        priority: "Medium" /* Protocol.Network.CookiePriority.Medium */,
        sourcePort: 80,
        sourceScheme: "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */,
        partitionKey: { topLevelSite: 'https://example.net', hasCrossSiteAncestor: false },
    };
    it('can retrieve cookies for domain', async () => {
        // CDP Connection mock: for Network.getCookies, respond with a single cookie.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', ({ urls }) => {
            return {
                cookies: [
                    { ...PROTOCOL_COOKIE_PARTITIONED, domain: `.${new URL(urls[0]).host}` },
                ],
            };
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
        const resourceUrl = (domain) => `https://${domain}/resource`;
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        const childFrame = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
        for (const domain of [_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN, MAIN_FRAME_RESOURCE_DOMAIN, CHILD_FRAME_RESOURCE_DOMAIN]) {
            const cookies = await model.getCookiesForDomain(`https://${domain}`);
            assert.isArray(cookies);
            assert.lengthOf(cookies, 1);
            assert.strictEqual(cookies[0].domain(), `.${domain}`);
            assert.strictEqual(cookies[0].name(), 'name');
            assert.strictEqual(cookies[0].path(), '/test');
            assert.strictEqual(cookies[0].size(), 23);
            assert.strictEqual(cookies[0].value(), 'value');
            assert.strictEqual(cookies[0].expires(), 42000);
            assert.strictEqual(cookies[0].httpOnly(), false);
            assert.strictEqual(cookies[0].secure(), false);
            assert.strictEqual(cookies[0].priority(), "Medium" /* Protocol.Network.CookiePriority.Medium */);
            assert.strictEqual(cookies[0].sourcePort(), 80);
            assert.strictEqual(cookies[0].sourceScheme(), "NonSecure" /* Protocol.Network.CookieSourceScheme.NonSecure */);
            assert.strictEqual(cookies[0].partitionKey().topLevelSite, 'https://example.net');
            assert.strictEqual(cookies[0].partitionKey().hasCrossSiteAncestor, false);
        }
    });
    it('can detect cookie list changes', async () => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', ({ urls }) => {
            return {
                cookies: [
                    { ...PROTOCOL_COOKIE, domain: `.${new URL(urls[0]).host}` },
                ],
            };
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
        const eventListener = sinon.stub();
        model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */, eventListener);
        assert.isEmpty(await model.getCookiesForDomain(`https://${MAIN_FRAME_RESOURCE_DOMAIN}`));
        const resourceUrl = (domain) => `https://${domain}/main_resource`;
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener);
        assert.isNotEmpty(await model.getCookiesForDomain(`https://${MAIN_FRAME_RESOURCE_DOMAIN}`));
        assert.isEmpty(await model.getCookiesForDomain(`https://${CHILD_FRAME_RESOURCE_DOMAIN}`));
        eventListener.resetHistory();
        const childFrame = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.addChildFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener);
        assert.isNotEmpty(await model.getCookiesForDomain(`https://${CHILD_FRAME_RESOURCE_DOMAIN}`));
    });
    it('can detect cookie value changes', async () => {
        const cookie = { ...PROTOCOL_COOKIE };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', () => ({ cookies: [cookie] }));
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
        const eventListener = sinon.stub();
        model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */, eventListener);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, `https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}/main_resource`, 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener);
        eventListener.resetHistory();
        cookie.value = 'new value';
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCalled)(eventListener);
    });
    it('does not refetch cookies while listening unless requested', async () => {
        const cookie = { ...PROTOCOL_COOKIE };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', () => ({ cookies: [cookie] }));
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_3__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createResource)(mainFrame, `https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}/main_resource`, 'text/html', '');
        dispatchLoadingFinished();
        let [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        cookie.value = 'new value';
        model.addEventListener("CookieListUpdated" /* SDK.CookieModel.Events.CookieListUpdated */, () => { });
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`, true);
        assert.strictEqual(readCookie.value(), 'new value');
    });
    it('clears stored blocked cookies on primary page change', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const cookieModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel(target);
        const cookie = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie('name', 'value');
        const blockedReason = {
            attribute: null,
            uiString: 'Setting this cookie was blocked due to third-party cookie phaseout. Learn more in the Issues tab.',
        };
        cookieModel.addBlockedCookie(cookie, [blockedReason]);
        const cookieToBlockedReasons = cookieModel.getCookieToBlockedReasonsMap();
        assert.strictEqual(cookieToBlockedReasons.size, 1);
        assert.deepStrictEqual(cookieToBlockedReasons.get(cookie), [blockedReason]);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target));
        assert.strictEqual(cookieModel.getCookieToBlockedReasonsMap().size, 0);
    });
    it('can delete unpartitioned and partitioned cookies', async () => {
        let cookieArray = [PROTOCOL_COOKIE, PROTOCOL_COOKIE_PARTITIONED];
        // CDP Connection mock.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.getCookies', () => {
            return {
                cookies: cookieArray,
            };
        });
        // CDP Connection mock: simplified implementation for Network.deleteCookies, which deletes the matching cookie from `cookies`.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Network.deleteCookies', cookieToDelete => {
            cookieArray = cookieArray.filter(cookie => {
                return !(cookie.name === cookieToDelete.name && cookie.domain === cookieToDelete.domain &&
                    cookie.path === cookieToDelete.path &&
                    cookie.partitionKey?.topLevelSite === cookieToDelete.partitionKey?.topLevelSite &&
                    cookie.partitionKey?.hasCrossSiteAncestor === cookieToDelete.partitionKey?.hasCrossSiteAncestor);
            });
            const response = {
                getError() {
                    return undefined;
                },
            };
            return Promise.resolve(response);
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        const model = new _sdk_js__WEBPACK_IMPORTED_MODULE_5__.CookieModel.CookieModel(target);
        const cookies = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.isArray(cookies);
        assert.lengthOf(cookies, 2);
        await model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE));
        const cookies2 = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.isArray(cookies2);
        assert.lengthOf(cookies2, 1);
        assert.strictEqual(cookies2[0].domain(), '.example.com');
        assert.strictEqual(cookies2[0].name(), 'name');
        assert.strictEqual(cookies2[0].partitionKey().topLevelSite, 'https://example.net');
        assert.strictEqual(cookies2[0].partitionKey().hasCrossSiteAncestor, false);
        await model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE_PARTITIONED));
        const cookies3 = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.DOMAIN}`);
        assert.isArray(cookies3);
        assert.lengthOf(cookies3, 0);
    });
});
//# sourceMappingURL=CookieModel.test.js.map

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ }),

/***/ "./testing/MockNetworkLog.js":
/*!***********************************!*\
  !*** ./testing/MockNetworkLog.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockNetworkLog: () => (/* binding */ MockNetworkLog),
/* harmony export */   createNetworkRequest: () => (/* binding */ createNetworkRequest)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./models/logs/logs.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function createNetworkRequest(requestId) {
    return {
        requestId() {
            return requestId;
        },
        backendRequestId() {
            return requestId;
        },
    };
}
class MockNetworkLog extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    mockRequests;
    constructor(mockRequests) {
        super();
        this.mockRequests = mockRequests;
    }
    requestsForId(requestId) {
        return this.mockRequests.filter(x => x.requestId() === requestId);
    }
    addRequest(mockRequest) {
        this.mockRequests.push(mockRequest);
        this.dispatchEventToListeners(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__.NetworkLog.Events.RequestAdded, { request: mockRequest });
    }
}
//# sourceMappingURL=MockNetworkLog.js.map

/***/ })

}]);