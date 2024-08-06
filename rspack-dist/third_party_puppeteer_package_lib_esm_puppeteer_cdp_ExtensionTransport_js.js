"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ExtensionTransport_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExtensionTransport: function() { return ExtensionTransport; }
});
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
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
var tabTargetInfo = {
    targetId: 'tabTargetId',
    type: 'tab',
    title: 'tab',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false
};
var pageTargetInfo = {
    targetId: 'pageTargetId',
    type: 'page',
    title: 'page',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false
};
var _tabId = /*#__PURE__*/ new WeakMap(), _debuggerEventHandler = /*#__PURE__*/ new WeakMap(), _dispatchResponse = /*#__PURE__*/ new WeakSet();
/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */ var ExtensionTransport = /*#__PURE__*/ function() {
    "use strict";
    function ExtensionTransport(tabId) {
        var _this = this;
        _class_call_check(this, ExtensionTransport);
        _class_private_method_init(this, _dispatchResponse);
        _define_property(this, "onmessage", void 0);
        _define_property(this, "onclose", void 0);
        _class_private_field_init(this, _tabId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _debuggerEventHandler, {
            writable: true,
            value: function(source, method, params) {
                if (source.tabId !== _class_private_field_get(_this, _tabId)) {
                    return;
                }
                var _source_sessionId;
                _class_private_method_get(_this, _dispatchResponse, dispatchResponse).call(_this, {
                    // @ts-expect-error sessionId is not in stable yet.
                    sessionId: (_source_sessionId = source.sessionId) !== null && _source_sessionId !== void 0 ? _source_sessionId : 'pageTargetSessionId',
                    method: method,
                    params: params
                });
            }
        });
        _class_private_field_set(this, _tabId, tabId);
        chrome.debugger.onEvent.addListener(_class_private_field_get(this, _debuggerEventHandler));
    }
    _create_class(ExtensionTransport, [
        {
            key: "send",
            value: function send(message) {
                var _this = this;
                var parsed = JSON.parse(message);
                switch(parsed.method){
                    case 'Browser.getVersion':
                        {
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                id: parsed.id,
                                sessionId: parsed.sessionId,
                                method: parsed.method,
                                result: {
                                    protocolVersion: '1.3',
                                    product: 'chrome',
                                    revision: 'unknown',
                                    userAgent: 'chrome',
                                    jsVersion: 'unknown'
                                }
                            });
                            return;
                        }
                    case 'Target.getBrowserContexts':
                        {
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                id: parsed.id,
                                sessionId: parsed.sessionId,
                                method: parsed.method,
                                result: {
                                    browserContextIds: []
                                }
                            });
                            return;
                        }
                    case 'Target.setDiscoverTargets':
                        {
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                method: 'Target.targetCreated',
                                params: {
                                    targetInfo: tabTargetInfo
                                }
                            });
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                method: 'Target.targetCreated',
                                params: {
                                    targetInfo: pageTargetInfo
                                }
                            });
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                id: parsed.id,
                                sessionId: parsed.sessionId,
                                method: parsed.method,
                                result: {}
                            });
                            return;
                        }
                    case 'Target.setAutoAttach':
                        {
                            if (parsed.sessionId === 'tabTargetSessionId') {
                                _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                    method: 'Target.attachedToTarget',
                                    params: {
                                        targetInfo: pageTargetInfo,
                                        sessionId: 'pageTargetSessionId'
                                    }
                                });
                            } else if (!parsed.sessionId) {
                                _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                    method: 'Target.attachedToTarget',
                                    params: {
                                        targetInfo: tabTargetInfo,
                                        sessionId: 'tabTargetSessionId'
                                    }
                                });
                            }
                            _class_private_method_get(this, _dispatchResponse, dispatchResponse).call(this, {
                                id: parsed.id,
                                sessionId: parsed.sessionId,
                                method: parsed.method,
                                result: {}
                            });
                            return;
                        }
                }
                if (parsed.sessionId === 'pageTargetSessionId') {
                    delete parsed.sessionId;
                }
                chrome.debugger.sendCommand(// @ts-expect-error sessionId is not in stable yet.
                {
                    tabId: _class_private_field_get(this, _tabId),
                    sessionId: parsed.sessionId
                }, parsed.method, parsed.params).then(function(response) {
                    var _parsed_sessionId;
                    _class_private_method_get(_this, _dispatchResponse, dispatchResponse).call(_this, {
                        id: parsed.id,
                        sessionId: (_parsed_sessionId = parsed.sessionId) !== null && _parsed_sessionId !== void 0 ? _parsed_sessionId : 'pageTargetSessionId',
                        method: parsed.method,
                        result: response
                    });
                }).catch(function(err) {
                    var _parsed_sessionId;
                    _class_private_method_get(_this, _dispatchResponse, dispatchResponse).call(_this, {
                        id: parsed.id,
                        sessionId: (_parsed_sessionId = parsed.sessionId) !== null && _parsed_sessionId !== void 0 ? _parsed_sessionId : 'pageTargetSessionId',
                        method: parsed.method,
                        error: err
                    });
                });
            }
        },
        {
            key: "close",
            value: function close() {
                chrome.debugger.onEvent.removeListener(_class_private_field_get(this, _debuggerEventHandler));
                void chrome.debugger.detach({
                    tabId: _class_private_field_get(this, _tabId)
                });
            }
        }
    ], [
        {
            key: "connectTab",
            value: function connectTab(tabId) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    chrome.debugger.attach({
                                        tabId: tabId
                                    }, '1.3')
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    new ExtensionTransport(tabId)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ExtensionTransport;
} //# sourceMappingURL=ExtensionTransport.js.map
();
function dispatchResponse(message) {
    var _this_onmessage, _this;
    (_this_onmessage = (_this = this).onmessage) === null || _this_onmessage === void 0 ? void 0 : _this_onmessage.call(_this, JSON.stringify(message));
}


}),

}]);