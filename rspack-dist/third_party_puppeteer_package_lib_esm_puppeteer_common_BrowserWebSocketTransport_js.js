"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_BrowserWebSocketTransport_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserWebSocketTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BrowserWebSocketTransport: function() { return BrowserWebSocketTransport; }
});
/**
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
var _ws = /*#__PURE__*/ new WeakMap();
var BrowserWebSocketTransport = /*#__PURE__*/ function() {
    "use strict";
    function BrowserWebSocketTransport(ws) {
        var _this = this;
        _class_call_check(this, BrowserWebSocketTransport);
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
    _create_class(BrowserWebSocketTransport, [
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
            value: function create(url) {
                return new Promise(function(resolve, reject) {
                    var ws = new WebSocket(url);
                    ws.addEventListener('open', function() {
                        return resolve(new BrowserWebSocketTransport(ws));
                    });
                    ws.addEventListener('error', reject);
                });
            }
        }
    ]);
    return BrowserWebSocketTransport;
} //# sourceMappingURL=BrowserWebSocketTransport.js.map
();


}),

}]);