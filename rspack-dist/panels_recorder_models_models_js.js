"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_models_js"], {
"./panels/recorder/models/ConverterIds.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=ConverterIds.js.map


}),
"./panels/recorder/models/RecorderSettings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecorderSettings: function() { return RecorderSettings; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _Schema_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
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



var UIStrings = {
    /**
     * @description This string is used to generate the default name for the create recording form in the Recording panel.
     * The format is similar to the one used by MacOS to generate names for screenshots. Both {DATE} and {TIME} are localized
     * using the current locale.
     *
     * @example {2022-08-04} DATE
     * @example {10:32:48} TIME
     */ defaultRecordingName: 'Recording {DATE} at {TIME}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/models/RecorderSettings.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _selectorAttribute = /*#__PURE__*/ new WeakMap(), _speed = /*#__PURE__*/ new WeakMap(), _replayExtension = /*#__PURE__*/ new WeakMap(), _selectorTypes = /*#__PURE__*/ new WeakMap(), _preferredCopyFormat = /*#__PURE__*/ new WeakMap();
var RecorderSettings = /*#__PURE__*/ function() {
    "use strict";
    function RecorderSettings() {
        _class_call_check(this, RecorderSettings);
        _class_private_field_init(this, _selectorAttribute, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-selector-attribute', '')
        });
        _class_private_field_init(this, _speed, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-speed', "normal" /* PlayRecordingSpeed.Normal */ )
        });
        _class_private_field_init(this, _replayExtension, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-panel-replay-extension', '')
        });
        _class_private_field_init(this, _selectorTypes, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _preferredCopyFormat, {
            writable: true,
            value: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-preferred-copy-format', "json" /* ConverterIds.JSON */ )
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var selectorType = _step.value;
                _class_private_field_get(this, _selectorTypes).set(selectorType, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting("recorder-".concat(selectorType, "-selector-enabled"), true));
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
    }
    _create_class(RecorderSettings, [
        {
            key: "selectorAttribute",
            get: function get() {
                return _class_private_field_get(this, _selectorAttribute).get();
            },
            set: function set(value) {
                _class_private_field_get(this, _selectorAttribute).set(value);
            }
        },
        {
            key: "speed",
            get: function get() {
                return _class_private_field_get(this, _speed).get();
            },
            set: function set(speed) {
                _class_private_field_get(this, _speed).set(speed);
            }
        },
        {
            key: "replayExtension",
            get: function get() {
                return _class_private_field_get(this, _replayExtension).get();
            },
            set: function set(replayExtension) {
                _class_private_field_get(this, _replayExtension).set(replayExtension);
            }
        },
        {
            key: "defaultTitle",
            get: function get() {
                var now = new Date();
                return i18nString(UIStrings.defaultRecordingName, {
                    DATE: now.toLocaleDateString(),
                    TIME: now.toLocaleTimeString()
                });
            }
        },
        {
            key: "defaultSelectors",
            get: function get() {
                var _this = this;
                return Object.values(_Schema_js__WEBPACK_IMPORTED_MODULE_2__.SelectorType).filter(function(type) {
                    return _this.getSelectorByType(type);
                });
            }
        },
        {
            key: "getSelectorByType",
            value: function getSelectorByType(type) {
                var _class_private_field_get_get;
                return (_class_private_field_get_get = _class_private_field_get(this, _selectorTypes).get(type)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.get();
            }
        },
        {
            key: "setSelectorByType",
            value: function setSelectorByType(type, value) {
                var _class_private_field_get_get;
                (_class_private_field_get_get = _class_private_field_get(this, _selectorTypes).get(type)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.set(value);
            }
        },
        {
            key: "preferredCopyFormat",
            get: function get() {
                return _class_private_field_get(this, _preferredCopyFormat).get();
            },
            set: function set(value) {
                _class_private_field_get(this, _preferredCopyFormat).set(value);
            }
        }
    ]);
    return RecorderSettings;
} //# sourceMappingURL=RecorderSettings.js.map
();


}),
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
"./panels/recorder/models/RecordingSettings.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=RecordingSettings.js.map


}),
"./panels/recorder/models/ScreenshotUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resizeScreenshot: function() { return resizeScreenshot; },
  takeScreenshot: function() { return takeScreenshot; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var SCREENSHOT_WIDTH = 160; // px
var SCREENSHOT_MAX_HEIGHT = 240; // px
function captureScreenshot() {
    return _captureScreenshot.apply(this, arguments);
}
function _captureScreenshot() {
    _captureScreenshot = _async_to_generator(function() {
        var mainTarget, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
                    if (!mainTarget) {
                        throw new Error('Could not find main target');
                    }
                    return [
                        4,
                        mainTarget.pageAgent().invoke_captureScreenshot({})
                    ];
                case 1:
                    data = _state.sent().data;
                    if (!data) {
                        // 1x1 px empty image.
                        return [
                            2,
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                        ];
                    }
                    return [
                        2,
                        'data:image/png;base64,' + data
                    ];
            }
        });
    });
    return _captureScreenshot.apply(this, arguments);
}
function resizeScreenshot(data) {
    return _resizeScreenshot.apply(this, arguments);
}
function _resizeScreenshot() {
    _resizeScreenshot = _async_to_generator(function(data) {
        var img, promise, canvas, context, aspectRatio, bitmap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    img = new Image();
                    promise = new Promise(function(resolve) {
                        img.onload = resolve;
                    });
                    img.src = data;
                    return [
                        4,
                        promise
                    ];
                case 1:
                    _state.sent();
                    canvas = document.createElement('canvas');
                    context = canvas.getContext('2d');
                    if (!context) {
                        throw new Error('Could not create context.');
                    }
                    aspectRatio = img.width / img.height;
                    canvas.width = SCREENSHOT_WIDTH;
                    canvas.height = Math.min(SCREENSHOT_MAX_HEIGHT, SCREENSHOT_WIDTH / aspectRatio);
                    return [
                        4,
                        createImageBitmap(img, {
                            resizeWidth: SCREENSHOT_WIDTH,
                            resizeQuality: 'high'
                        })
                    ];
                case 2:
                    bitmap = _state.sent();
                    context.drawImage(bitmap, 0, 0);
                    return [
                        2,
                        canvas.toDataURL('image/png')
                    ];
            }
        });
    });
    return _resizeScreenshot.apply(this, arguments);
}
function takeScreenshot() {
    return _takeScreenshot.apply(this, arguments);
} //# sourceMappingURL=ScreenshotUtils.js.map
function _takeScreenshot() {
    _takeScreenshot = _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        captureScreenshot()
                    ];
                case 1:
                    data = _state.sent();
                    return [
                        4,
                        resizeScreenshot(data)
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _takeScreenshot.apply(this, arguments);
}


}),
"./panels/recorder/models/Section.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildSections: function() { return buildSections; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function startNewSection(step) {
    var _step_assertedEvents;
    var navigationEvent = (_step_assertedEvents = step.assertedEvents) === null || _step_assertedEvents === void 0 ? void 0 : _step_assertedEvents.find(function(event) {
        return event.type === 'navigation';
    });
    if (step.type === 'navigate') {
        return {
            title: (navigationEvent === null || navigationEvent === void 0 ? void 0 : navigationEvent.title) || '',
            url: step.url,
            steps: [],
            causingStep: step
        };
    }
    if (navigationEvent) {
        return {
            title: navigationEvent.title || '',
            url: navigationEvent.url || '',
            steps: []
        };
    }
    return null;
}
function buildSections(steps) {
    var currentSection = null;
    var sections = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var step = _step.value;
            if (currentSection) {
                currentSection.steps.push(step);
            } else if (step.type === 'navigate') {
                currentSection = startNewSection(step);
                continue;
            } else {
                currentSection = {
                    title: 'Current page',
                    url: '',
                    steps: [
                        step
                    ]
                };
            }
            var nextSection = startNewSection(step);
            if (nextSection) {
                if (currentSection) {
                    sections.push(currentSection);
                }
                currentSection = nextSection;
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
    if (currentSection && (!sections.length || currentSection.steps.length)) {
        sections.push(currentSection);
    }
    return sections;
} //# sourceMappingURL=Section.js.map


}),
"./panels/recorder/models/Tooltip.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getTooltipForActions: function() { return getTooltipForActions; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getTooltipForActions(translation, action) {
    var title = translation;
    var shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = shortcuts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var shortcut = _step.value;
            title += " - ".concat(shortcut.title());
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
    return title;
} //# sourceMappingURL=Tooltip.js.map


}),
"./panels/recorder/models/models.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ConverterIds: function() { return /* reexport module object */ _ConverterIds_js__WEBPACK_IMPORTED_MODULE_0__; },
  RecorderSettings: function() { return /* reexport module object */ _RecorderSettings_js__WEBPACK_IMPORTED_MODULE_1__; },
  RecorderShortcutHelper: function() { return /* reexport module object */ _RecorderShortcutHelper_js__WEBPACK_IMPORTED_MODULE_2__; },
  RecordingPlayer: function() { return /* reexport module object */ _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__; },
  RecordingSession: function() { return /* reexport module object */ _RecordingSession_js__WEBPACK_IMPORTED_MODULE_4__; },
  RecordingSettings: function() { return /* reexport module object */ _RecordingSettings_js__WEBPACK_IMPORTED_MODULE_5__; },
  RecordingStorage: function() { return /* reexport module object */ _RecordingStorage_js__WEBPACK_IMPORTED_MODULE_6__; },
  SDKUtils: function() { return /* reexport module object */ _SDKUtils_js__WEBPACK_IMPORTED_MODULE_11__; },
  Schema: function() { return /* reexport module object */ _Schema_js__WEBPACK_IMPORTED_MODULE_7__; },
  SchemaUtils: function() { return /* reexport module object */ _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_8__; },
  ScreenshotStorage: function() { return /* reexport module object */ _ScreenshotStorage_js__WEBPACK_IMPORTED_MODULE_9__; },
  ScreenshotUtils: function() { return /* reexport module object */ _ScreenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__; },
  Section: function() { return /* reexport module object */ _Section_js__WEBPACK_IMPORTED_MODULE_12__; },
  Tooltip: function() { return /* reexport module object */ _Tooltip_js__WEBPACK_IMPORTED_MODULE_13__; }
});
/* harmony import */var _ConverterIds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConverterIds.js */ "./panels/recorder/models/ConverterIds.js");
/* harmony import */var _RecorderSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderSettings.js */ "./panels/recorder/models/RecorderSettings.js");
/* harmony import */var _RecorderShortcutHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderShortcutHelper.js */ "./panels/recorder/models/RecorderShortcutHelper.js");
/* harmony import */var _RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RecordingPlayer.js */ "./panels/recorder/models/RecordingPlayer.js");
/* harmony import */var _RecordingSession_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecordingSession.js */ "./panels/recorder/models/RecordingSession.js");
/* harmony import */var _RecordingSettings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RecordingSettings.js */ "./panels/recorder/models/RecordingSettings.js");
/* harmony import */var _RecordingStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RecordingStorage.js */ "./panels/recorder/models/RecordingStorage.js");
/* harmony import */var _Schema_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */var _SchemaUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SchemaUtils.js */ "./panels/recorder/models/SchemaUtils.js");
/* harmony import */var _ScreenshotStorage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScreenshotStorage.js */ "./panels/recorder/models/ScreenshotStorage.js");
/* harmony import */var _ScreenshotUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScreenshotUtils.js */ "./panels/recorder/models/ScreenshotUtils.js");
/* harmony import */var _SDKUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SDKUtils.js */ "./panels/recorder/models/SDKUtils.js");
/* harmony import */var _Section_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Section.js */ "./panels/recorder/models/Section.js");
/* harmony import */var _Tooltip_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Tooltip.js */ "./panels/recorder/models/Tooltip.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=models.js.map


}),

}]);