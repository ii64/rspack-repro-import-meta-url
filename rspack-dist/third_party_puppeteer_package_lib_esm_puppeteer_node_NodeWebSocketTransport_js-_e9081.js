"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_NodeWebSocketTransport_js-_e9081"], {
"../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js": (function (module) {

module.exports = function() {
    throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
};


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/NodeWebSocketTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeWebSocketTransport: function() { return NodeWebSocketTransport; }
});
/* harmony import */var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ "../node_modules/.pnpm/ws@8.18.0/node_modules/ws/browser.js");
/* harmony import */var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _generated_version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/version.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/generated/version.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
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


var _ws = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var NodeWebSocketTransport = /*#__PURE__*/ function() {
    "use strict";
    function NodeWebSocketTransport(ws) {
        var _this = this;
        _class_call_check(this, NodeWebSocketTransport);
        _class_private_field_init(this, _ws, {
            writable: true,
            value: void 0
        });
        _define_property(this, "onmessage", void 0);
        _define_property(this, "onclose", void 0);
        _class_private_field_set(this, _ws, ws);
        _class_private_field_get(this, _ws).addEventListener('message', function(event) {
            if (_this.onmessage) {
                _this.onmessage.call(null, event.data);
            }
        });
        _class_private_field_get(this, _ws).addEventListener('close', function() {
            if (_this.onclose) {
                _this.onclose.call(null);
            }
        });
        // Silently ignore all errors - we don't know what to do with them.
        _class_private_field_get(this, _ws).addEventListener('error', function() {});
    }
    _create_class(NodeWebSocketTransport, [
        {
            key: "send",
            value: function send(message) {
                _class_private_field_get(this, _ws).send(message);
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_get(this, _ws).close();
            }
        }
    ], [
        {
            key: "create",
            value: function create(url, headers) {
                return new Promise(function(resolve, reject) {
                    var ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default())(url, [], {
                        followRedirects: true,
                        perMessageDeflate: false,
                        // @ts-expect-error https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
                        allowSynchronousEvents: false,
                        maxPayload: 256 * 1024 * 1024,
                        headers: _object_spread({
                            'User-Agent': "Puppeteer ".concat(_generated_version_js__WEBPACK_IMPORTED_MODULE_1__.packageVersion)
                        }, headers)
                    });
                    ws.addEventListener('open', function() {
                        return resolve(new NodeWebSocketTransport(ws));
                    });
                    ws.addEventListener('error', reject);
                });
            }
        }
    ]);
    return NodeWebSocketTransport;
} //# sourceMappingURL=NodeWebSocketTransport.js.map
();


}),

}]);