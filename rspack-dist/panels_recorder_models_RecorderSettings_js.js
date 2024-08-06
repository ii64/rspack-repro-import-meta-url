"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecorderSettings_js"], {
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
"./panels/recorder/models/Schema.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssertedEventType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType; },
  SelectorType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType; },
  StepType: function() { return /* reexport safe */ _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.StepType; }
});
/* harmony import */var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=Schema.js.map


}),
"./third_party/puppeteer-replay/puppeteer-replay.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AssertedEventType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.AssertedEventType; },
  JSONStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension; },
  LighthouseRunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseRunnerExtension; },
  LighthouseStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension; },
  PuppeteerReplayStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension; },
  PuppeteerRunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerExtension; },
  PuppeteerRunnerOwningBrowserExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerRunnerOwningBrowserExtension; },
  PuppeteerStringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerStringifyExtension; },
  Runner: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Runner; },
  RunnerExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.RunnerExtension; },
  Schema: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.Schema; },
  SelectorType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.SelectorType; },
  StepType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StepType; },
  StringifyExtension: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.StringifyExtension; },
  assertAllStepTypesAreHandled: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.assertAllStepTypesAreHandled; },
  createRunner: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.createRunner; },
  formatAsJSLiteral: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatAsJSLiteral; },
  formatJSONAsJS: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.formatJSONAsJS; },
  getSelectorType: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.getSelectorType; },
  maxTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.maxTimeout; },
  minTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.minTimeout; },
  mouseButtonMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.mouseButtonMap; },
  parse: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parse; },
  parseSourceMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap; },
  parseStep: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.parseStep; },
  pointerDeviceTypes: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.pointerDeviceTypes; },
  selectorToPElementSelector: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.selectorToPElementSelector; },
  stringify: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringify; },
  stringifyStep: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep; },
  stripSourceMap: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap; },
  typeableInputTypes: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.typeableInputTypes; },
  validTimeout: function() { return /* reexport safe */ _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__.validTimeout; }
});
/* harmony import */var _package_lib_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/lib/main.js */ "./third_party/puppeteer-replay/package/lib/main.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=puppeteer-replay.js.map


}),

}]);