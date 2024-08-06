"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_Page_d_ts-third_party_puppeteer_package_-d0ba7e"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/Page.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _api_Page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Page.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Page.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /// <reference types="node" />

 //# sourceMappingURL=Page.d.ts.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/common/TimeoutSettings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TimeoutSettings: function() { return TimeoutSettings; }
});
/**
 * @license
 * Copyright 2019 Google Inc.
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
var DEFAULT_TIMEOUT = 30000;
var _defaultTimeout = /*#__PURE__*/ new WeakMap(), _defaultNavigationTimeout = /*#__PURE__*/ new WeakMap();
/**
 * @internal
 */ var TimeoutSettings = /*#__PURE__*/ function() {
    "use strict";
    function TimeoutSettings() {
        _class_call_check(this, TimeoutSettings);
        _class_private_field_init(this, _defaultTimeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _defaultNavigationTimeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _defaultTimeout, null);
        _class_private_field_set(this, _defaultNavigationTimeout, null);
    }
    _create_class(TimeoutSettings, [
        {
            key: "setDefaultTimeout",
            value: function setDefaultTimeout(timeout) {
                _class_private_field_set(this, _defaultTimeout, timeout);
            }
        },
        {
            key: "setDefaultNavigationTimeout",
            value: function setDefaultNavigationTimeout(timeout) {
                _class_private_field_set(this, _defaultNavigationTimeout, timeout);
            }
        },
        {
            key: "navigationTimeout",
            value: function navigationTimeout() {
                if (_class_private_field_get(this, _defaultNavigationTimeout) !== null) {
                    return _class_private_field_get(this, _defaultNavigationTimeout);
                }
                if (_class_private_field_get(this, _defaultTimeout) !== null) {
                    return _class_private_field_get(this, _defaultTimeout);
                }
                return DEFAULT_TIMEOUT;
            }
        },
        {
            key: "timeout",
            value: function timeout() {
                if (_class_private_field_get(this, _defaultTimeout) !== null) {
                    return _class_private_field_get(this, _defaultTimeout);
                }
                return DEFAULT_TIMEOUT;
            }
        }
    ]);
    return TimeoutSettings;
} //# sourceMappingURL=TimeoutSettings.js.map
();


}),

}]);