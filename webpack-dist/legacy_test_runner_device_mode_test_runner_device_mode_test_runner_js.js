"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_device_mode_test_runner_device_mode_test_runner_js"],{

/***/ "./legacy_test_runner/device_mode_test_runner/device_mode_test_runner.js":
/*!*******************************************************************************!*\
  !*** ./legacy_test_runner/device_mode_test_runner/device_mode_test_runner.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceModeTestRunner: () => (/* binding */ DeviceModeTestRunner)
/* harmony export */ });
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const DeviceModeTestRunner = {};

DeviceModeTestRunner.buildFakePhone = function(overrides) {
  const StandardPhoneJSON = {
    'show-by-default': false,
    'title': 'Fake Phone 1',

    'screen': {
      'horizontal': {'width': 480, 'height': 320},

      'device-pixel-ratio': 2,

      'vertical': {'width': 320, 'height': 480}
    },

    'capabilities': ['touch', 'mobile'],
    'user-agent': 'fakeUserAgent',
    'type': 'phone',

    'modes': [
      {
        'title': 'default',
        'orientation': 'vertical',

        'insets': {'left': 0, 'top': 0, 'right': 0, 'bottom': 0}
      },
      {
        'title': 'default',
        'orientation': 'horizontal',

        'insets': {'left': 0, 'top': 0, 'right': 0, 'bottom': 0}
      }
    ]
  };

  const json = Object.assign(StandardPhoneJSON, overrides || {});
  return _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_0__.EmulatedDevices.EmulatedDevice.fromJSONV1(json);
};


/***/ })

}]);