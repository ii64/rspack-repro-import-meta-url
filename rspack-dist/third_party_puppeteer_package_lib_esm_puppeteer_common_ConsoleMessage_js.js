"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_ConsoleMessage_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/ConsoleMessage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConsoleMessage: function() { return ConsoleMessage; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * ConsoleMessage objects are dispatched by page via the 'console' event.
 * @public
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
var _type = /*#__PURE__*/ new WeakMap(), _text = /*#__PURE__*/ new WeakMap(), _args = /*#__PURE__*/ new WeakMap(), _stackTraceLocations = /*#__PURE__*/ new WeakMap();
var ConsoleMessage = /*#__PURE__*/ function() {
    "use strict";
    function ConsoleMessage(type, text, args, stackTraceLocations) {
        _class_call_check(this, ConsoleMessage);
        _class_private_field_init(this, _type, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _text, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _args, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _stackTraceLocations, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _type, type);
        _class_private_field_set(this, _text, text);
        _class_private_field_set(this, _args, args);
        _class_private_field_set(this, _stackTraceLocations, stackTraceLocations);
    }
    _create_class(ConsoleMessage, [
        {
            /**
     * The type of the console message.
     */ key: "type",
            value: function type() {
                return _class_private_field_get(this, _type);
            }
        },
        {
            /**
     * The text of the console message.
     */ key: "text",
            value: function text() {
                return _class_private_field_get(this, _text);
            }
        },
        {
            /**
     * An array of arguments passed to the console.
     */ key: "args",
            value: function args() {
                return _class_private_field_get(this, _args);
            }
        },
        {
            /**
     * The location of the console message.
     */ key: "location",
            value: function location() {
                var _class_private_field_get_;
                return (_class_private_field_get_ = _class_private_field_get(this, _stackTraceLocations)[0]) !== null && _class_private_field_get_ !== void 0 ? _class_private_field_get_ : {};
            }
        },
        {
            /**
     * The array of locations on the stack of the console message.
     */ key: "stackTrace",
            value: function stackTrace() {
                return _class_private_field_get(this, _stackTraceLocations);
            }
        }
    ]);
    return ConsoleMessage;
} //# sourceMappingURL=ConsoleMessage.js.map
();


}),

}]);