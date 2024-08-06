(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_extensions_test_runner_extensions_test_runner_js"], {
"./legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js": (function () {
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.extension_getRequestByUrl = function(urls, callback) {
    function onHAR(response) {
        var entries = response.entries;
        for(var i = 0; i < entries.length; ++i){
            for(var url = 0; url < urls.length; ++url){
                if (urls[url].test(entries[i].request.url)) {
                    callback(entries[i]);
                    return;
                }
            }
        }
        output('no item found');
        callback(null);
    }
    webInspector.network.getHAR(onHAR);
};


}),
"./legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ExtensionsTestRunner = self.ExtensionsTestRunner || {};
var extensionsHost = 'devtools-extensions.oopif.test';
self.Extensions.extensionServer.registerHandler('evaluateForTestInFrontEnd', onEvaluate);
Extensions.extensionsOrigin = "http://".concat(extensionsHost, ":8000");
self.Extensions.extensionServer.extensionAPITestHook = function(extensionServerClient, coreAPI) {
    window.webInspector = coreAPI;
    window._extensionServerForTests = extensionServerClient;
    coreAPI.panels.themeName = 'themeNameForTest';
};
ExtensionsTestRunner.replyToExtension = function(requestId, port) {
    self.Extensions.extensionServer.dispatchCallback(requestId, port);
};
function onEvaluate(message, port) {
    // Note: reply(...) is actually used in eval strings
    // eslint-disable-next-line no-unused-vars
    function reply(param) {
        self.Extensions.extensionServer.dispatchCallback(message.requestId, port, param);
    }
    try {
        eval(message.expression);
    } catch (e) {
        TestRunner.addResult('Exception while running: ' + message.expression + '\n' + (e.stack || e));
        TestRunner.completeTest();
    }
}
ExtensionsTestRunner.showPanel = function(panelId) {
    if (panelId === 'extension') {
        panelId = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance().tabbedPane.tabs[_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance().tabbedPane.tabs.length - 1].id;
    }
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.InspectorView.InspectorView.instance().showPanel(panelId);
};
ExtensionsTestRunner.evaluateInExtension = function(code) {
    ExtensionsTestRunner.codeToEvaluateBeforeTests = code;
};
ExtensionsTestRunner.runExtensionTests = function() {
    var _ref = _async_to_generator(function(tests) {
        var result, pageURL, extensionURL;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.evaluate('location.href', 'console', false)
                    ];
                case 1:
                    result = _state.sent();
                    if (!result) {
                        return [
                            2
                        ];
                    }
                    ExtensionsTestRunner._pendingTests = (ExtensionsTestRunner.codeToEvaluateBeforeTests || '') + tests.join('\n');
                    pageURL = result.value;
                    extensionURL = pageURL.replace(/^(https?:\/\/[^\/]*\/).*$/, '$1') + 'devtools/resources/extension-main.html';
                    extensionURL = extensionURL.replace('127.0.0.1', extensionsHost);
                    self.Extensions.extensionServer.addExtension({
                        startPage: extensionURL,
                        name: 'test extension',
                        exposeWebInspectorNamespace: true
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return function(tests) {
        return _ref.apply(this, arguments);
    };
}();
(function disableLogging() {
    // Suppress console warnings from ExtensionServer.js
    console.warn = function() {
        return undefined;
    };
})();


}),
"./legacy_test_runner/extensions_test_runner/extensions_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExtensionsTestRunner: function() { return ExtensionsTestRunner; }
});
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionsNetworkTestRunner.js */ "./legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js");
/* harmony import */var _ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ExtensionsNetworkTestRunner_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _ExtensionsTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionsTestRunner.js */ "./legacy_test_runner/extensions_test_runner/ExtensionsTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



var ExtensionsTestRunner = self.ExtensionsTestRunner;



}),

}]);