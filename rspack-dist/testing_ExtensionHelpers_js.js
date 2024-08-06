"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_ExtensionHelpers_js"], {
"./testing/ExtensionHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  describeWithDevtoolsExtension: function() { return describeWithDevtoolsExtension; },
  getExtensionOrigin: function() { return getExtensionOrigin; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/extensions/extensions.js */ "./models/extensions/extensions.js");
/* harmony import */var _EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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




function getExtensionOrigin() {
    return window.location.origin;
}
function describeWithDevtoolsExtension(title, extension, fn) {
    var extensionDescriptor = _object_spread({
        startPage: "".concat(getExtensionOrigin(), "/blank.html"),
        name: 'TestExtension',
        exposeExperimentalAPIs: true,
        allowFileAccess: false
    }, extension);
    var context = {
        extensionDescriptor: extensionDescriptor,
        chrome: {}
    };
    function setup() {
        var server = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.ExtensionServer.ExtensionServer.instance({
            forceNew: true
        });
        sinon.stub(server, 'addExtensionFrame');
        sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin').callsFake(function(origin, _script) {
            if (origin === getExtensionOrigin()) {
                var chrome = {};
                window.chrome = chrome;
                self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], function() {}, 1, window);
                context.chrome = chrome;
            }
        });
        server.addExtension(extensionDescriptor);
    }
    function cleanup() {
        var chrome = {};
        window.chrome = chrome;
        context.chrome = chrome;
    }
    return (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)("with-extension-".concat(title), function() {
        beforeEach(cleanup);
        beforeEach(setup);
        afterEach(cleanup);
        (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)(title, function() {
            (0,_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
            fn.call(this, context);
        });
    });
}
describeWithDevtoolsExtension.only = function(title, extension, fn) {
    // eslint-disable-next-line mocha/no-exclusive-tests
    return describe.only('.only', function() {
        return describeWithDevtoolsExtension(title, extension, fn);
    });
}; //# sourceMappingURL=ExtensionHelpers.js.map


}),

}]);