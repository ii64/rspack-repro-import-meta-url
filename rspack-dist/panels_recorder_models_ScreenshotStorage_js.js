"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_ScreenshotStorage_js"], {
"./panels/recorder/models/ScreenshotStorage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ScreenshotStorage: function() { return ScreenshotStorage; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var instance = null;
// Default size of storage
var DEFAULT_MAX_STORAGE_SIZE = 50 * 1024 * 1024;
var _screenshotSettings = /*#__PURE__*/ new WeakMap(), _screenshots = /*#__PURE__*/ new WeakMap(), _maxStorageSize = /*#__PURE__*/ new WeakMap(), _calculateKey = /*#__PURE__*/ new WeakSet(), _loadFromSettings = /*#__PURE__*/ new WeakSet(), _syncWithSettings = /*#__PURE__*/ new WeakSet();
/**
 * This class stores the screenshots taken for a specific recording
 * in a settings object. The total storage size is limited to 50 MB
 * by default and the least recently accessed screenshots will be
 * deleted first.
 */ var ScreenshotStorage = /*#__PURE__*/ function() {
    "use strict";
    function ScreenshotStorage() {
        var maxStorageSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_MAX_STORAGE_SIZE;
        _class_call_check(this, ScreenshotStorage);
        _class_private_method_init(this, _calculateKey);
        _class_private_method_init(this, _loadFromSettings);
        _class_private_method_init(this, _syncWithSettings);
        _class_private_field_init(this, _screenshotSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _screenshots, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _maxStorageSize, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _screenshotSettings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-screenshots', []));
        _class_private_field_set(this, _screenshots, _class_private_method_get(this, _loadFromSettings, loadFromSettings).call(this));
        _class_private_field_set(this, _maxStorageSize, maxStorageSize);
    }
    _create_class(ScreenshotStorage, [
        {
            key: "clear",
            value: function clear() {
                _class_private_field_get(this, _screenshotSettings).set([]);
                _class_private_field_set(this, _screenshots, new Map());
            }
        },
        {
            key: "getScreenshotForSection",
            value: function getScreenshotForSection(recordingName, index) {
                var screenshot = _class_private_field_get(this, _screenshots).get(_class_private_method_get(this, _calculateKey, calculateKey).call(this, recordingName, index));
                if (!screenshot) {
                    return null;
                }
                _class_private_method_get(this, _syncWithSettings, syncWithSettings).call(this, screenshot);
                return screenshot.data;
            }
        },
        {
            key: "storeScreenshotForSection",
            value: function storeScreenshotForSection(recordingName, index, data) {
                var screenshot = {
                    recordingName: recordingName,
                    index: index,
                    data: data
                };
                _class_private_field_get(this, _screenshots).set(_class_private_method_get(this, _calculateKey, calculateKey).call(this, recordingName, index), screenshot);
                _class_private_method_get(this, _syncWithSettings, syncWithSettings).call(this, screenshot);
            }
        },
        {
            key: "deleteScreenshotsForRecording",
            value: function deleteScreenshotsForRecording(recordingName) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _screenshots)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], entry = _step_value[1];
                        if (entry.recordingName === recordingName) {
                            _class_private_field_get(this, _screenshots).delete(key);
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
                _class_private_method_get(this, _syncWithSettings, syncWithSettings).call(this);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance1() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null,
                    maxStorageSize: DEFAULT_MAX_STORAGE_SIZE
                };
                var forceNew = opts.forceNew, maxStorageSize = opts.maxStorageSize;
                if (!instance || forceNew) {
                    instance = new ScreenshotStorage(maxStorageSize);
                }
                return instance;
            }
        }
    ]);
    return ScreenshotStorage;
} //# sourceMappingURL=ScreenshotStorage.js.map
();
function calculateKey(recordingName, index) {
    return "".concat(recordingName, ":").concat(index);
}
function loadFromSettings() {
    var screenshots = new Map();
    var data = _class_private_field_get(this, _screenshotSettings).get();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            screenshots.set(_class_private_method_get(this, _calculateKey, calculateKey).call(this, item.recordingName, item.index), item);
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
    return screenshots;
}
function syncWithSettings(modifiedScreenshot) {
    if (modifiedScreenshot) {
        var key = _class_private_method_get(this, _calculateKey, calculateKey).call(this, modifiedScreenshot.recordingName, modifiedScreenshot.index);
        // Make sure that the modified screenshot is moved to the end of the map
        // as the JS Map remembers the original insertion order of the keys.
        _class_private_field_get(this, _screenshots).delete(key);
        _class_private_field_get(this, _screenshots).set(key, modifiedScreenshot);
    }
    var screenshots = [];
    var currentStorageSize = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Take screenshots from the end of the list until the size constraint is met.
        for(var _iterator = Array.from(_class_private_field_get(this, _screenshots).entries()).reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), key1 = _step_value[0], screenshot = _step_value[1];
            if (currentStorageSize < _class_private_field_get(this, _maxStorageSize)) {
                currentStorageSize += screenshot.data.length;
                screenshots.push(screenshot);
            } else {
                // Delete all screenshots that exceed the storage limit.
                _class_private_field_get(this, _screenshots).delete(key1);
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
    _class_private_field_get(this, _screenshotSettings).set(screenshots.reverse());
}


}),

}]);