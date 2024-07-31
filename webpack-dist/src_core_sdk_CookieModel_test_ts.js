"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_sdk_CookieModel_test_ts"],{

/***/ "./src/core/sdk/CookieModel.test.ts":
/*!******************************************!*\
  !*** ./src/core/sdk/CookieModel.test.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockNetworkLog.js */ "./src/testing/MockNetworkLog.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const MAIN_FRAME_RESOURCE_DOMAIN = 'example.org';
const CHILD_FRAME_RESOURCE_DOMAIN = 'example.net';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('CookieModel', () => {
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
        priority: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookiePriority.Medium,
        sourcePort: 80,
        sourceScheme: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookieSourceScheme.NonSecure,
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
        priority: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookiePriority.Medium,
        sourcePort: 80,
        sourceScheme: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookieSourceScheme.NonSecure,
        partitionKey: { topLevelSite: 'https://example.net', hasCrossSiteAncestor: false },
    };
    it('can retrieve cookies for domain', async () => {
        // CDP Connection mock: for Network.getCookies, respond with a single cookie.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', ({ urls }) => {
            return {
                cookies: [
                    { ...PROTOCOL_COOKIE_PARTITIONED, domain: `.${new URL(urls[0]).host}` },
                ],
            };
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target);
        const resourceUrl = (domain) => `https://${domain}/resource`;
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        const childFrame = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.addChildFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel);
        for (const domain of [_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN, MAIN_FRAME_RESOURCE_DOMAIN, CHILD_FRAME_RESOURCE_DOMAIN]) {
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
            assert.strictEqual(cookies[0].priority(), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookiePriority.Medium);
            assert.strictEqual(cookies[0].sourcePort(), 80);
            assert.strictEqual(cookies[0].sourceScheme(), _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Network.CookieSourceScheme.NonSecure);
            assert.strictEqual(cookies[0].partitionKey().topLevelSite, 'https://example.net');
            assert.strictEqual(cookies[0].partitionKey().hasCrossSiteAncestor, false);
        }
    });
    it('can detect cookie list changes', async () => {
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', ({ urls }) => {
            return {
                cookies: [
                    { ...PROTOCOL_COOKIE, domain: `.${new URL(urls[0]).host}` },
                ],
            };
        });
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_4__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel);
        const eventListener = sinon.stub();
        model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.Events.CookieListUpdated, eventListener);
        assert.isEmpty(await model.getCookiesForDomain(`https://${MAIN_FRAME_RESOURCE_DOMAIN}`));
        const resourceUrl = (domain) => `https://${domain}/main_resource`;
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(mainFrame, resourceUrl(MAIN_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCalled)(eventListener);
        assert.isNotEmpty(await model.getCookiesForDomain(`https://${MAIN_FRAME_RESOURCE_DOMAIN}`));
        assert.isEmpty(await model.getCookiesForDomain(`https://${CHILD_FRAME_RESOURCE_DOMAIN}`));
        eventListener.resetHistory();
        const childFrame = await (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.addChildFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(childFrame, resourceUrl(CHILD_FRAME_RESOURCE_DOMAIN), 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCalled)(eventListener);
        assert.isNotEmpty(await model.getCookiesForDomain(`https://${CHILD_FRAME_RESOURCE_DOMAIN}`));
    });
    it('can detect cookie value changes', async () => {
        const cookie = { ...PROTOCOL_COOKIE };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', () => ({ cookies: [cookie] }));
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_4__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel);
        const eventListener = sinon.stub();
        model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.Events.CookieListUpdated, eventListener);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(mainFrame, `https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}/main_resource`, 'text/html', '');
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCalled)(eventListener);
        eventListener.resetHistory();
        cookie.value = 'new value';
        dispatchLoadingFinished();
        await (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_2__.expectCalled)(eventListener);
    });
    it('does not refetch cookies while listening unless requested', async () => {
        const cookie = { ...PROTOCOL_COOKIE };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', () => ({ cookies: [cookie] }));
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const dispatchLoadingFinished = () => target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.NetworkManager).dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.NetworkManager.Events.LoadingFinished, (0,_testing_MockNetworkLog_js__WEBPACK_IMPORTED_MODULE_4__.createNetworkRequest)('1'));
        const mainFrame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target);
        const model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createResource)(mainFrame, `https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}/main_resource`, 'text/html', '');
        dispatchLoadingFinished();
        let [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        cookie.value = 'new value';
        model.addEventListener(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.Events.CookieListUpdated, () => { });
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.strictEqual(readCookie.value(), 'value');
        [readCookie] = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`, true);
        assert.strictEqual(readCookie.value(), 'new value');
    });
    it('clears stored blocked cookies on primary page change', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const cookieModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel(target);
        const cookie = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.Cookie.Cookie('name', 'value');
        const blockedReason = {
            attribute: null,
            uiString: 'Setting this cookie was blocked due to third-party cookie phaseout. Learn more in the Issues tab.',
        };
        cookieModel.addBlockedCookie(cookie, [blockedReason]);
        const cookieToBlockedReasons = cookieModel.getCookieToBlockedReasonsMap();
        assert.strictEqual(cookieToBlockedReasons.size, 1);
        assert.deepStrictEqual(cookieToBlockedReasons.get(cookie), [blockedReason]);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFrame)(target));
        assert.strictEqual(cookieModel.getCookieToBlockedReasonsMap().size, 0);
    });
    it('can delete unpartitioned and partitioned cookies', async () => {
        let cookieArray = [PROTOCOL_COOKIE, PROTOCOL_COOKIE_PARTITIONED];
        // CDP Connection mock.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.getCookies', () => {
            return {
                cookies: cookieArray,
            };
        });
        // CDP Connection mock: simplified implementation for Network.deleteCookies, which deletes the matching cookie from `cookies`.
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Network.deleteCookies', cookieToDelete => {
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
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const model = new _sdk_js__WEBPACK_IMPORTED_MODULE_6__.CookieModel.CookieModel(target);
        const cookies = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.isArray(cookies);
        assert.lengthOf(cookies, 2);
        await model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE));
        const cookies2 = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.isArray(cookies2);
        assert.lengthOf(cookies2, 1);
        assert.strictEqual(cookies2[0].domain(), '.example.com');
        assert.strictEqual(cookies2[0].name(), 'name');
        assert.strictEqual(cookies2[0].partitionKey().topLevelSite, 'https://example.net');
        assert.strictEqual(cookies2[0].partitionKey().hasCrossSiteAncestor, false);
        await model.deleteCookie(_sdk_js__WEBPACK_IMPORTED_MODULE_6__.Cookie.Cookie.fromProtocolCookie(PROTOCOL_COOKIE_PARTITIONED));
        const cookies3 = await model.getCookiesForDomain(`https://${_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.DOMAIN}`);
        assert.isArray(cookies3);
        assert.lengthOf(cookies3, 0);
    });
});


/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
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


/***/ }),

/***/ "./src/testing/MockNetworkLog.ts":
/*!***************************************!*\
  !*** ./src/testing/MockNetworkLog.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockNetworkLog: () => (/* binding */ MockNetworkLog),
/* harmony export */   createNetworkRequest: () => (/* binding */ createNetworkRequest)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/logs/logs.js */ "./src/models/logs/logs.ts");
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
    constructor(mockRequests) {
        super();
        Object.defineProperty(this, "mockRequests", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ })

}]);