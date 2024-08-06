"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_ExtensionHelpers_js"],{

/***/ "./testing/ExtensionHelpers.js":
/*!*************************************!*\
  !*** ./testing/ExtensionHelpers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   describeWithDevtoolsExtension: () => (/* binding */ describeWithDevtoolsExtension),
/* harmony export */   getExtensionOrigin: () => (/* binding */ getExtensionOrigin)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */ var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function getExtensionOrigin() {
    return window.location.origin;
}
function describeWithDevtoolsExtension(title, extension, fn) {
    const extensionDescriptor = {
        startPage: `${getExtensionOrigin()}/blank.html`,
        name: 'TestExtension',
        exposeExperimentalAPIs: true,
        allowFileAccess: false,
        ...extension,
    };
    const context = {
        extensionDescriptor,
        chrome: {},
    };
    function setup() {
        const server = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionServer.ExtensionServer.instance({ forceNew: true });
        sinon.stub(server, 'addExtensionFrame');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin')
            .callsFake((origin, _script) => {
            if (origin === getExtensionOrigin()) {
                const chrome = {};
                window.chrome = chrome;
                self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], () => { }, 1, window);
                context.chrome = chrome;
            }
        });
        server.addExtension(extensionDescriptor);
    }
    function cleanup() {
        const chrome = {};
        window.chrome = chrome;
        context.chrome = chrome;
    }
    return (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)(`with-extension-${title}`, function () {
        beforeEach(cleanup);
        beforeEach(setup);
        afterEach(cleanup);
        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)(title, function () {
            (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
            fn.call(this, context);
        });
    });
}
describeWithDevtoolsExtension.only = function (title, extension, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only('.only', function () {
        return describeWithDevtoolsExtension(title, extension, fn);
    });
};
//# sourceMappingURL=ExtensionHelpers.js.map

/***/ })

}]);