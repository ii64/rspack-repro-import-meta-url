"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecorderShortcutHelper_js"], {
"./panels/recorder/models/RecorderShortcutHelper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecorderShortcutHelper: function() { return RecorderShortcutHelper; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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

var _abortController = /*#__PURE__*/ new WeakMap(), _timeoutId = /*#__PURE__*/ new WeakMap(), _timeout = /*#__PURE__*/ new WeakMap(), _cleanInternals = /*#__PURE__*/ new WeakSet(), _handleCallback = /*#__PURE__*/ new WeakSet();
var RecorderShortcutHelper = /*#__PURE__*/ function() {
    "use strict";
    function RecorderShortcutHelper() {
        var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 200;
        _class_call_check(this, RecorderShortcutHelper);
        _class_private_method_init(this, _cleanInternals);
        _class_private_method_init(this, _handleCallback);
        _class_private_field_init(this, _abortController, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _timeoutId, {
            writable: true,
            value: null
        });
        _class_private_field_init(this, _timeout, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _timeout, timeout);
        _class_private_field_set(this, _abortController, new AbortController());
    }
    _create_class(RecorderShortcutHelper, [
        {
            key: "handleShortcut",
            value: function handleShortcut(callback) {
                var _this = this;
                _class_private_method_get(this, _cleanInternals, cleanInternals).call(this);
                document.addEventListener('keyup', function(event) {
                    if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.eventHasCtrlEquivalentKey(event)) {
                        _class_private_method_get(_this, _handleCallback, handleCallback).call(_this, callback);
                    }
                }, {
                    signal: _class_private_field_get(this, _abortController).signal
                });
                _class_private_field_set(this, _timeoutId, setTimeout(function() {
                    return _class_private_method_get(_this, _handleCallback, handleCallback).call(_this, callback);
                }, _class_private_field_get(this, _timeout)));
            }
        }
    ]);
    return RecorderShortcutHelper;
} //# sourceMappingURL=RecorderShortcutHelper.js.map
();
function cleanInternals() {
    _class_private_field_get(this, _abortController).abort();
    if (_class_private_field_get(this, _timeoutId)) {
        clearTimeout(_class_private_field_get(this, _timeoutId));
    }
    _class_private_field_set(this, _abortController, new AbortController());
}
function handleCallback(callback) {
    _class_private_method_get(this, _cleanInternals, cleanInternals).call(this);
    void callback();
}


}),

}]);