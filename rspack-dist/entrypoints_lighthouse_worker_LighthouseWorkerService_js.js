"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_lighthouse_worker_LighthouseWorkerService_js"], {
"./entrypoints/lighthouse_worker/LighthouseWorkerService.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puppeteer/puppeteer.js */ "./services/puppeteer/puppeteer.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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


function disableLoggingForTest() {
    console.log = function() {
        return undefined;
    }; // eslint-disable-line no-console
}
/**
 * ConnectionProxy is a SDK interface, but the implementation has no knowledge it's a parallelConnection.
 * The CDP traffic is smuggled back and forth by the system described in LighthouseProtocolService
 */ var ConnectionProxy = /*#__PURE__*/ function() {
    "use strict";
    function ConnectionProxy(sessionId) {
        _class_call_check(this, ConnectionProxy);
        _define_property(this, "sessionId", void 0);
        _define_property(this, "onMessage", void 0);
        _define_property(this, "onDisconnect", void 0);
        this.sessionId = sessionId;
        this.onMessage = null;
        this.onDisconnect = null;
    }
    _create_class(ConnectionProxy, [
        {
            key: "setOnMessage",
            value: function setOnMessage(onMessage) {
                this.onMessage = onMessage;
            }
        },
        {
            key: "setOnDisconnect",
            value: function setOnDisconnect(onDisconnect) {
                this.onDisconnect = onDisconnect;
            }
        },
        {
            key: "getOnDisconnect",
            value: function getOnDisconnect() {
                return this.onDisconnect;
            }
        },
        {
            key: "getSessionId",
            value: function getSessionId() {
                return this.sessionId;
            }
        },
        {
            key: "sendRawMessage",
            value: function sendRawMessage(message) {
                notifyFrontendViaWorkerMessage('sendProtocolMessage', {
                    message: message
                });
            }
        },
        {
            key: "disconnect",
            value: function disconnect() {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_onDisconnect, _this1;
                    return _ts_generator(this, function(_state) {
                        (_this_onDisconnect = (_this1 = _this).onDisconnect) === null || _this_onDisconnect === void 0 ? void 0 : _this_onDisconnect.call(_this1, 'force disconnect');
                        _this.onDisconnect = null;
                        _this.onMessage = null;
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return ConnectionProxy;
}();
var cdpConnection;
var endTimespan;
function invokeLH(action, args) {
    return _invokeLH.apply(this, arguments);
}
function _invokeLH() {
    _invokeLH = // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _async_to_generator(function(action, args) {
        var puppeteerHandle, result, locale, flags, config, url, rootTargetId, mainSessionId, page, timespan, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('isUnderTest')) {
                        disableLoggingForTest();
                        args.flags.maxWaitForLoad = 2 * 1000;
                    }
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    self.listenForStatus(function(message) {
                        notifyFrontendViaWorkerMessage('statusUpdate', {
                            message: message[1]
                        });
                    });
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        11,
                        12,
                        15
                    ]);
                    if (!(action === 'endTimespan')) return [
                        3,
                        3
                    ];
                    if (!endTimespan) {
                        throw new Error('Cannot end a timespan before starting one');
                    }
                    return [
                        4,
                        endTimespan()
                    ];
                case 2:
                    result = _state.sent();
                    endTimespan = undefined;
                    return [
                        2,
                        result
                    ];
                case 3:
                    return [
                        4,
                        fetchLocaleData(args.locales)
                    ];
                case 4:
                    locale = _state.sent();
                    flags = args.flags;
                    flags.logLevel = flags.logLevel || 'info';
                    flags.channel = 'devtools';
                    flags.locale = locale;
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    config = args.config || self.createConfig(args.categoryIDs, flags.formFactor);
                    url = args.url;
                    rootTargetId = args.rootTargetId, mainSessionId = args.mainSessionId;
                    cdpConnection = new ConnectionProxy(mainSessionId);
                    return [
                        4,
                        _services_puppeteer_puppeteer_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerConnection.PuppeteerConnectionHelper.connectPuppeteerToConnectionViaTab({
                            connection: cdpConnection,
                            rootTargetId: rootTargetId,
                            // Lighthouse can only audit normal pages.
                            isPageTargetCallback: function(targetInfo) {
                                return targetInfo.type === 'page';
                            }
                        })
                    ];
                case 5:
                    puppeteerHandle = _state.sent();
                    page = puppeteerHandle.page;
                    if (!page) {
                        throw new Error('Could not create page handle for the target page');
                    }
                    if (!(action === 'snapshot')) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        self.snapshot(page, {
                            config: config,
                            flags: flags
                        })
                    ];
                case 6:
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    return [
                        2,
                        _state.sent()
                    ];
                case 7:
                    if (!(action === 'startTimespan')) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        self.startTimespan(page, {
                            config: config,
                            flags: flags
                        })
                    ];
                case 8:
                    timespan = _state.sent();
                    endTimespan = timespan.endTimespan;
                    return [
                        2
                    ];
                case 9:
                    return [
                        4,
                        self.navigation(page, url, {
                            config: config,
                            flags: flags
                        })
                    ];
                case 10:
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    return [
                        2,
                        _state.sent()
                    ];
                case 11:
                    err = _state.sent();
                    return [
                        2,
                        {
                            fatal: true,
                            message: err.message,
                            stack: err.stack
                        }
                    ];
                case 12:
                    if (!(action !== 'startTimespan')) return [
                        3,
                        14
                    ];
                    return [
                        4,
                        puppeteerHandle === null || puppeteerHandle === void 0 ? void 0 : puppeteerHandle.browser.disconnect()
                    ];
                case 13:
                    _state.sent();
                    _state.label = 14;
                case 14:
                    return [
                        7
                    ];
                case 15:
                    return [
                        2
                    ];
            }
        });
    });
    return _invokeLH.apply(this, arguments);
}
function fetchLocaleData(locales) {
    return _fetchLocaleData.apply(this, arguments);
}
function _fetchLocaleData() {
    _fetchLocaleData = /**
 * Finds a locale supported by Lighthouse from the user's system locales.
 * If no matching locale is found, or if fetching locale data fails, this function returns nothing
 * and Lighthouse will use `en-US` by default.
 */ _async_to_generator(function(locales) {
        var locale, remoteBase, localeUrl, timeoutPromise, localeData, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    locale = self.lookupLocale(locales);
                    // If the locale is en-US, no need to fetch locale data.
                    if (locale === 'en-US' || locale === 'en') {
                        return [
                            2
                        ];
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    remoteBase = _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase();
                    if (remoteBase && remoteBase.base) {
                        localeUrl = "".concat(remoteBase.base, "third_party/lighthouse/locales/").concat(locale, ".json");
                    } else {
                        localeUrl = new URL("../../third_party/lighthouse/locales/".concat(locale, ".json"), 'file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/entrypoints/lighthouse_worker/LighthouseWorkerService.js').toString();
                    }
                    timeoutPromise = new Promise(function(resolve, reject) {
                        return setTimeout(function() {
                            return reject(new Error('timed out fetching locale'));
                        }, 5000);
                    });
                    return [
                        4,
                        Promise.race([
                            timeoutPromise,
                            fetch(localeUrl).then(function(result) {
                                return result.json();
                            })
                        ])
                    ];
                case 2:
                    localeData = _state.sent();
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    self.registerLocaleData(locale, localeData);
                    return [
                        2,
                        locale
                    ];
                case 3:
                    err = _state.sent();
                    console.error(err);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _fetchLocaleData.apply(this, arguments);
}
/**
 * `notifyFrontendViaWorkerMessage` and `onFrontendMessage` work with the FE's ProtocolService.
 *
 * onFrontendMessage takes action-wrapped messages and either invoking lighthouse or delivering it CDP traffic.
 * notifyFrontendViaWorkerMessage posts action-wrapped messages to the FE.
 */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
function notifyFrontendViaWorkerMessage(action, args) {
    self.postMessage({
        action: action,
        args: args
    });
}
function onFrontendMessage(event) {
    return _onFrontendMessage.apply(this, arguments);
}
function _onFrontendMessage() {
    _onFrontendMessage = _async_to_generator(function(event) {
        var messageFromFrontend, _, result, _cdpConnection_onMessage;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    messageFromFrontend = event.data;
                    _ = messageFromFrontend.action;
                    switch(_){
                        case 'startTimespan':
                            return [
                                3,
                                1
                            ];
                        case 'endTimespan':
                            return [
                                3,
                                1
                            ];
                        case 'snapshot':
                            return [
                                3,
                                1
                            ];
                        case 'navigation':
                            return [
                                3,
                                1
                            ];
                        case 'dispatchProtocolMessage':
                            return [
                                3,
                                3
                            ];
                    }
                    return [
                        3,
                        4
                    ];
                case 1:
                    return [
                        4,
                        invokeLH(messageFromFrontend.action, messageFromFrontend.args)
                    ];
                case 2:
                    result = _state.sent();
                    if (result && (typeof result === "undefined" ? "undefined" : _type_of(result)) === 'object') {
                        // Report isn't used upstream.
                        if ('report' in result) {
                            delete result.report;
                        }
                        // Logger PerformanceTiming objects cannot be cloned by this worker's `postMessage` function.
                        if ('artifacts' in result) {
                            // @ts-expect-error
                            result.artifacts.Timing = JSON.parse(JSON.stringify(result.artifacts.Timing));
                        }
                    }
                    self.postMessage({
                        id: messageFromFrontend.id,
                        result: result
                    });
                    return [
                        3,
                        5
                    ];
                case 3:
                    {
                        ;
                        cdpConnection === null || cdpConnection === void 0 ? void 0 : (_cdpConnection_onMessage = cdpConnection.onMessage) === null || _cdpConnection_onMessage === void 0 ? void 0 : _cdpConnection_onMessage.call(cdpConnection, messageFromFrontend.args.message);
                        return [
                            3,
                            5
                        ];
                    }
                    _state.label = 4;
                case 4:
                    {
                        throw new Error("Unknown event: ".concat(event.data));
                    }
                    _state.label = 5;
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _onFrontendMessage.apply(this, arguments);
}
self.onmessage = onFrontendMessage;
// Make lighthouse and traceviewer happy.
// @ts-ignore https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global = self;
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.isVinn = true;
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document = {};
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document.documentElement = {};
// @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
globalThis.global.document.documentElement.style = {
    WebkitAppearance: 'WebkitAppearance'
}; //# sourceMappingURL=LighthouseWorkerService.js.map


}),
"./services/puppeteer/puppeteer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PuppeteerConnection: function() { return /* reexport module object */ _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _PuppeteerConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PuppeteerConnection.js */ "./services/puppeteer/PuppeteerConnection.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=puppeteer.js.map


}),

}]);