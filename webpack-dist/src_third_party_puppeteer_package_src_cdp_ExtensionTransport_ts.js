"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_ExtensionTransport_ts"],{

/***/ "./src/third_party/puppeteer/package/src/cdp/ExtensionTransport.ts":
/*!*************************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/ExtensionTransport.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionTransport: () => (/* binding */ ExtensionTransport)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExtensionTransport_instances, _ExtensionTransport_tabId, _ExtensionTransport_debuggerEventHandler, _ExtensionTransport_dispatchResponse;
const tabTargetInfo = {
    targetId: 'tabTargetId',
    type: 'tab',
    title: 'tab',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false,
};
const pageTargetInfo = {
    targetId: 'pageTargetId',
    type: 'page',
    title: 'page',
    url: 'about:blank',
    attached: false,
    canAccessOpener: false,
};
/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */
class ExtensionTransport {
    static async connectTab(tabId) {
        await chrome.debugger.attach({ tabId }, '1.3');
        return new ExtensionTransport(tabId);
    }
    /**
     * @internal
     */
    constructor(tabId) {
        _ExtensionTransport_instances.add(this);
        Object.defineProperty(this, "onmessage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onclose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ExtensionTransport_tabId.set(this, void 0);
        _ExtensionTransport_debuggerEventHandler.set(this, (source, method, params) => {
            if (source.tabId !== __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f")) {
                return;
            }
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                // @ts-expect-error sessionId is not in stable yet.
                sessionId: source.sessionId ?? 'pageTargetSessionId',
                method: method,
                params: params,
            });
        });
        __classPrivateFieldSet(this, _ExtensionTransport_tabId, tabId, "f");
        chrome.debugger.onEvent.addListener(__classPrivateFieldGet(this, _ExtensionTransport_debuggerEventHandler, "f"));
    }
    send(message) {
        const parsed = JSON.parse(message);
        switch (parsed.method) {
            case 'Browser.getVersion': {
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {
                        protocolVersion: '1.3',
                        product: 'chrome',
                        revision: 'unknown',
                        userAgent: 'chrome',
                        jsVersion: 'unknown',
                    },
                });
                return;
            }
            case 'Target.getBrowserContexts': {
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {
                        browserContextIds: [],
                    },
                });
                return;
            }
            case 'Target.setDiscoverTargets': {
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: tabTargetInfo,
                    },
                });
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: pageTargetInfo,
                    },
                });
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
            case 'Target.setAutoAttach': {
                if (parsed.sessionId === 'tabTargetSessionId') {
                    __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: pageTargetInfo,
                            sessionId: 'pageTargetSessionId',
                        },
                    });
                }
                else if (!parsed.sessionId) {
                    __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: tabTargetInfo,
                            sessionId: 'tabTargetSessionId',
                        },
                    });
                }
                __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
        }
        if (parsed.sessionId === 'pageTargetSessionId') {
            delete parsed.sessionId;
        }
        chrome.debugger
            .sendCommand(
        // @ts-expect-error sessionId is not in stable yet.
        { tabId: __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f"), sessionId: parsed.sessionId }, parsed.method, parsed.params)
            .then(response => {
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                result: response,
            });
        })
            .catch(err => {
            __classPrivateFieldGet(this, _ExtensionTransport_instances, "m", _ExtensionTransport_dispatchResponse).call(this, {
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                error: err,
            });
        });
    }
    close() {
        chrome.debugger.onEvent.removeListener(__classPrivateFieldGet(this, _ExtensionTransport_debuggerEventHandler, "f"));
        void chrome.debugger.detach({ tabId: __classPrivateFieldGet(this, _ExtensionTransport_tabId, "f") });
    }
}
_ExtensionTransport_tabId = new WeakMap(), _ExtensionTransport_debuggerEventHandler = new WeakMap(), _ExtensionTransport_instances = new WeakSet(), _ExtensionTransport_dispatchResponse = function _ExtensionTransport_dispatchResponse(message) {
    this.onmessage?.(JSON.stringify(message));
};


/***/ })

}]);