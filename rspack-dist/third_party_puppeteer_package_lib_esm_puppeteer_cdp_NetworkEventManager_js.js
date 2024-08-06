"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_NetworkEventManager_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/NetworkEventManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkEventManager: function() { return NetworkEventManager; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Helper class to track network events by request ID
 *
 * @internal
 */ function _check_private_redeclaration(obj, privateCollection) {
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
var /**
     * There are four possible orders of events:
     * A. `_onRequestWillBeSent`
     * B. `_onRequestWillBeSent`, `_onRequestPaused`
     * C. `_onRequestPaused`, `_onRequestWillBeSent`
     * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
     * (see crbug.com/1196004)
     *
     * For `_onRequest` we need the event from `_onRequestWillBeSent` and
     * optionally the `interceptionId` from `_onRequestPaused`.
     *
     * If request interception is disabled, call `_onRequest` once per call to
     * `_onRequestWillBeSent`.
     * If request interception is enabled, call `_onRequest` once per call to
     * `_onRequestPaused` (once per `interceptionId`).
     *
     * Events are stored to allow for subsequent events to call `_onRequest`.
     *
     * Note that (chains of) redirect requests have the same `requestId` (!) as
     * the original request. We have to anticipate series of events like these:
     * A. `_onRequestWillBeSent`,
     * `_onRequestWillBeSent`, ...
     * B. `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, ...
     * C. `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestPaused`, `_onRequestWillBeSent`, ...
     * D. `_onRequestPaused`, `_onRequestWillBeSent`,
     * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
     * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
     * (see crbug.com/1196004)
     */ _requestWillBeSentMap = /*#__PURE__*/ new WeakMap(), _requestPausedMap = /*#__PURE__*/ new WeakMap(), _httpRequestsMap = /*#__PURE__*/ new WeakMap(), /*
     * The below maps are used to reconcile Network.responseReceivedExtraInfo
     * events with their corresponding request. Each response and redirect
     * response gets an ExtraInfo event, and we don't know which will come first.
     * This means that we have to store a Response or an ExtraInfo for each
     * response, and emit the event when we get both of them. In addition, to
     * handle redirects, we have to make them Arrays to represent the chain of
     * events.
     */ _responseReceivedExtraInfoMap = /*#__PURE__*/ new WeakMap(), _queuedRedirectInfoMap = /*#__PURE__*/ new WeakMap(), _queuedEventGroupMap = /*#__PURE__*/ new WeakMap();
var NetworkEventManager = /*#__PURE__*/ function() {
    "use strict";
    function NetworkEventManager() {
        _class_call_check(this, NetworkEventManager);
        _class_private_field_init(this, _requestWillBeSentMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _requestPausedMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _httpRequestsMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _responseReceivedExtraInfoMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _queuedRedirectInfoMap, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _queuedEventGroupMap, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(NetworkEventManager, [
        {
            key: "forget",
            value: function forget(networkRequestId) {
                _class_private_field_get(this, _requestWillBeSentMap).delete(networkRequestId);
                _class_private_field_get(this, _requestPausedMap).delete(networkRequestId);
                _class_private_field_get(this, _queuedEventGroupMap).delete(networkRequestId);
                _class_private_field_get(this, _queuedRedirectInfoMap).delete(networkRequestId);
                _class_private_field_get(this, _responseReceivedExtraInfoMap).delete(networkRequestId);
            }
        },
        {
            key: "responseExtraInfo",
            value: function responseExtraInfo(networkRequestId) {
                if (!_class_private_field_get(this, _responseReceivedExtraInfoMap).has(networkRequestId)) {
                    _class_private_field_get(this, _responseReceivedExtraInfoMap).set(networkRequestId, []);
                }
                return _class_private_field_get(this, _responseReceivedExtraInfoMap).get(networkRequestId);
            }
        },
        {
            key: "queuedRedirectInfo",
            value: function queuedRedirectInfo(fetchRequestId) {
                if (!_class_private_field_get(this, _queuedRedirectInfoMap).has(fetchRequestId)) {
                    _class_private_field_get(this, _queuedRedirectInfoMap).set(fetchRequestId, []);
                }
                return _class_private_field_get(this, _queuedRedirectInfoMap).get(fetchRequestId);
            }
        },
        {
            key: "queueRedirectInfo",
            value: function queueRedirectInfo(fetchRequestId, redirectInfo) {
                this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
            }
        },
        {
            key: "takeQueuedRedirectInfo",
            value: function takeQueuedRedirectInfo(fetchRequestId) {
                return this.queuedRedirectInfo(fetchRequestId).shift();
            }
        },
        {
            key: "inFlightRequestsCount",
            value: function inFlightRequestsCount() {
                var inFlightRequestCounter = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _httpRequestsMap).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        if (!request.response()) {
                            inFlightRequestCounter++;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return inFlightRequestCounter;
            }
        },
        {
            key: "storeRequestWillBeSent",
            value: function storeRequestWillBeSent(networkRequestId, event) {
                _class_private_field_get(this, _requestWillBeSentMap).set(networkRequestId, event);
            }
        },
        {
            key: "getRequestWillBeSent",
            value: function getRequestWillBeSent(networkRequestId) {
                return _class_private_field_get(this, _requestWillBeSentMap).get(networkRequestId);
            }
        },
        {
            key: "forgetRequestWillBeSent",
            value: function forgetRequestWillBeSent(networkRequestId) {
                _class_private_field_get(this, _requestWillBeSentMap).delete(networkRequestId);
            }
        },
        {
            key: "getRequestPaused",
            value: function getRequestPaused(networkRequestId) {
                return _class_private_field_get(this, _requestPausedMap).get(networkRequestId);
            }
        },
        {
            key: "forgetRequestPaused",
            value: function forgetRequestPaused(networkRequestId) {
                _class_private_field_get(this, _requestPausedMap).delete(networkRequestId);
            }
        },
        {
            key: "storeRequestPaused",
            value: function storeRequestPaused(networkRequestId, event) {
                _class_private_field_get(this, _requestPausedMap).set(networkRequestId, event);
            }
        },
        {
            key: "getRequest",
            value: function getRequest(networkRequestId) {
                return _class_private_field_get(this, _httpRequestsMap).get(networkRequestId);
            }
        },
        {
            key: "storeRequest",
            value: function storeRequest(networkRequestId, request) {
                _class_private_field_get(this, _httpRequestsMap).set(networkRequestId, request);
            }
        },
        {
            key: "forgetRequest",
            value: function forgetRequest(networkRequestId) {
                _class_private_field_get(this, _httpRequestsMap).delete(networkRequestId);
            }
        },
        {
            key: "getQueuedEventGroup",
            value: function getQueuedEventGroup(networkRequestId) {
                return _class_private_field_get(this, _queuedEventGroupMap).get(networkRequestId);
            }
        },
        {
            key: "queueEventGroup",
            value: function queueEventGroup(networkRequestId, event) {
                _class_private_field_get(this, _queuedEventGroupMap).set(networkRequestId, event);
            }
        },
        {
            key: "forgetQueuedEventGroup",
            value: function forgetQueuedEventGroup(networkRequestId) {
                _class_private_field_get(this, _queuedEventGroupMap).delete(networkRequestId);
            }
        }
    ]);
    return NetworkEventManager;
} //# sourceMappingURL=NetworkEventManager.js.map
();


}),

}]);