"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_two_states_counter_basic_js"], {
"./ui/components/docs/two_states_counter/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../two_states_counter/two_states_counter.js */ "./ui/components/two_states_counter/two_states_counter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
function getGeneralCounterData() {
    return {
        active: 3,
        inactive: 10,
        width: '18px',
        height: '18px',
        activeTitle: 'Num active',
        inactiveTitle: 'Num inactive'
    };
}
function appendCounter(counter) {
    var _document_querySelector;
    (_document_querySelector = document.querySelector('#container')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.appendChild(counter);
}
// Active and inactive counts.
var counterData = getGeneralCounterData();
var counter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
counter.data = counterData;
appendCounter(counter);
// Only active count.
var activeCountData = getGeneralCounterData();
activeCountData.inactive = 0;
var activeOnlyCounter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
activeOnlyCounter.data = activeCountData;
appendCounter(activeOnlyCounter);
// Only inactive count.
var inactiveCountData = getGeneralCounterData();
inactiveCountData.active = 0;
var inactiveOnlyCounter = new _two_states_counter_two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
inactiveOnlyCounter.data = inactiveCountData;
appendCounter(inactiveOnlyCounter); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),
"./ui/components/two_states_counter/two_states_counter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TwoStatesCounter: function() { return /* reexport module object */ _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoStatesCounter.js */ "./ui/components/two_states_counter/TwoStatesCounter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=two_states_counter.js.map


}),

}]);