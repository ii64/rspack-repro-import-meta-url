"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_ExtensionTransport_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/ExtensionTransport.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionTransport: () => (/* binding */ ExtensionTransport)
/* harmony export */ });
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
    onmessage;
    onclose;
    #tabId;
    /**
     * @internal
     */
    constructor(tabId) {
        this.#tabId = tabId;
        chrome.debugger.onEvent.addListener(this.#debuggerEventHandler);
    }
    #debuggerEventHandler = (source, method, params) => {
        if (source.tabId !== this.#tabId) {
            return;
        }
        this.#dispatchResponse({
            // @ts-expect-error sessionId is not in stable yet.
            sessionId: source.sessionId ?? 'pageTargetSessionId',
            method: method,
            params: params,
        });
    };
    #dispatchResponse(message) {
        this.onmessage?.(JSON.stringify(message));
    }
    send(message) {
        const parsed = JSON.parse(message);
        switch (parsed.method) {
            case 'Browser.getVersion': {
                this.#dispatchResponse({
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
                this.#dispatchResponse({
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
                this.#dispatchResponse({
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: tabTargetInfo,
                    },
                });
                this.#dispatchResponse({
                    method: 'Target.targetCreated',
                    params: {
                        targetInfo: pageTargetInfo,
                    },
                });
                this.#dispatchResponse({
                    id: parsed.id,
                    sessionId: parsed.sessionId,
                    method: parsed.method,
                    result: {},
                });
                return;
            }
            case 'Target.setAutoAttach': {
                if (parsed.sessionId === 'tabTargetSessionId') {
                    this.#dispatchResponse({
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: pageTargetInfo,
                            sessionId: 'pageTargetSessionId',
                        },
                    });
                }
                else if (!parsed.sessionId) {
                    this.#dispatchResponse({
                        method: 'Target.attachedToTarget',
                        params: {
                            targetInfo: tabTargetInfo,
                            sessionId: 'tabTargetSessionId',
                        },
                    });
                }
                this.#dispatchResponse({
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
        { tabId: this.#tabId, sessionId: parsed.sessionId }, parsed.method, parsed.params)
            .then(response => {
            this.#dispatchResponse({
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                result: response,
            });
        })
            .catch(err => {
            this.#dispatchResponse({
                id: parsed.id,
                sessionId: parsed.sessionId ?? 'pageTargetSessionId',
                method: parsed.method,
                error: err,
            });
        });
    }
    close() {
        chrome.debugger.onEvent.removeListener(this.#debuggerEventHandler);
        void chrome.debugger.detach({ tabId: this.#tabId });
    }
}
//# sourceMappingURL=ExtensionTransport.js.map

/***/ })

}]);