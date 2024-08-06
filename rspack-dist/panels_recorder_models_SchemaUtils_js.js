"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_SchemaUtils_js"], {
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
"./panels/recorder/models/SchemaUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  areSelectorsEqual: function() { return areSelectorsEqual; },
  createEmulateNetworkConditionsStep: function() { return createEmulateNetworkConditionsStep; },
  createViewportStep: function() { return createViewportStep; },
  maxTimeout: function() { return maxTimeout; },
  minTimeout: function() { return minTimeout; },
  parse: function() { return parse; },
  parseStep: function() { return parseStep; }
});
/* harmony import */var _Schema_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Schema.js */ "./panels/recorder/models/Schema.js");
/* harmony import */var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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


function createViewportStep(viewport) {
    return {
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.SetViewport,
        width: viewport.clientWidth,
        height: viewport.clientHeight,
        // TODO read real parameters here
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
    };
}
function createEmulateNetworkConditionsStep(conditions) {
    return _object_spread({
        type: _Schema_js__WEBPACK_IMPORTED_MODULE_0__.StepType.EmulateNetworkConditions
    }, conditions);
}
function areSelectorsEqual(stepA, stepB) {
    if ('selectors' in stepA && 'selectors' in stepB) {
        return JSON.stringify(stepA.selectors) === JSON.stringify(stepB.selectors);
    }
    return !('selectors' in stepA) && !('selectors' in stepB);
}
var minTimeout = 1;
var maxTimeout = 30000;
var parse = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parse;
var parseStep = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_1__.parseStep; //# sourceMappingURL=SchemaUtils.js.map


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