"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_node_PipeTransport_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PipeTransport: function() { return PipeTransport; }
});
/* harmony import */var _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/EventEmitter.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/EventEmitter.js");
/* harmony import */var _common_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/util.js");
/* harmony import */var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/* harmony import */var _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/disposable.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/disposable.js");
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




var _pipeWrite = /*#__PURE__*/ new WeakMap(), _subscriptions = /*#__PURE__*/ new WeakMap(), _isClosed = /*#__PURE__*/ new WeakMap(), _pendingMessage = /*#__PURE__*/ new WeakMap(), _dispatch = /*#__PURE__*/ new WeakSet();
/**
 * @internal
 */ var PipeTransport = /*#__PURE__*/ function() {
    "use strict";
    function PipeTransport(pipeWrite, pipeRead) {
        var _this = this;
        _class_call_check(this, PipeTransport);
        _class_private_method_init(this, _dispatch);
        _class_private_field_init(this, _pipeWrite, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _subscriptions, {
            writable: true,
            value: new _util_disposable_js__WEBPACK_IMPORTED_MODULE_3__.DisposableStack()
        });
        _class_private_field_init(this, _isClosed, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _pendingMessage, {
            writable: true,
            value: ''
        });
        _define_property(this, "onclose", void 0);
        _define_property(this, "onmessage", void 0);
        _class_private_field_set(this, _pipeWrite, pipeWrite);
        var pipeReadEmitter = _class_private_field_get(this, _subscriptions).use(// NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeReadEmitter.on('data', function(buffer) {
            return _class_private_method_get(_this, _dispatch, dispatch).call(_this, buffer);
        });
        pipeReadEmitter.on('close', function() {
            if (_this.onclose) {
                _this.onclose.call(null);
            }
        });
        pipeReadEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
        var pipeWriteEmitter = _class_private_field_get(this, _subscriptions).use(// NodeJS event emitters don't support `*` so we need to typecast
        // As long as we don't use it we should be OK.
        new _common_EventEmitter_js__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(pipeRead));
        pipeWriteEmitter.on('error', _common_util_js__WEBPACK_IMPORTED_MODULE_1__.debugError);
    }
    _create_class(PipeTransport, [
        {
            key: "send",
            value: function send(message) {
                (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(this, _isClosed), '`PipeTransport` is closed.');
                _class_private_field_get(this, _pipeWrite).write(message);
                _class_private_field_get(this, _pipeWrite).write('\0');
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_set(this, _isClosed, true);
                _class_private_field_get(this, _subscriptions).dispose();
            }
        }
    ]);
    return PipeTransport;
} //# sourceMappingURL=PipeTransport.js.map
();
function dispatch(buffer) {
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(!_class_private_field_get(this, _isClosed), '`PipeTransport` is closed.');
    var end = buffer.indexOf('\0');
    if (end === -1) {
        _class_private_field_set(this, _pendingMessage, _class_private_field_get(this, _pendingMessage) + buffer.toString());
        return;
    }
    var message = _class_private_field_get(this, _pendingMessage) + buffer.toString(undefined, 0, end);
    if (this.onmessage) {
        this.onmessage.call(null, message);
    }
    var start = end + 1;
    end = buffer.indexOf('\0', start);
    while(end !== -1){
        if (this.onmessage) {
            this.onmessage.call(null, buffer.toString(undefined, start, end));
        }
        start = end + 1;
        end = buffer.indexOf('\0', start);
    }
    _class_private_field_set(this, _pendingMessage, buffer.toString(undefined, start));
}


}),

}]);