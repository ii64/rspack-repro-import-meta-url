"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_web-vitals_package_dist_modules_lib_whenIdle_js"], {
"./third_party/web-vitals/package/dist/modules/lib/onHidden.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onHidden: function() { return onHidden; }
});
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var onHidden = function(cb) {
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            cb();
        }
    });
};


}),
"./third_party/web-vitals/package/dist/modules/lib/runOnce.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  runOnce: function() { return runOnce; }
});
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var runOnce = function(cb) {
    var called = false;
    return function() {
        if (!called) {
            cb();
            called = true;
        }
    };
};


}),
"./third_party/web-vitals/package/dist/modules/lib/whenIdle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  whenIdle: function() { return whenIdle; }
});
/* harmony import */var _onHidden_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onHidden.js */ "./third_party/web-vitals/package/dist/modules/lib/onHidden.js");
/* harmony import */var _runOnce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./runOnce.js */ "./third_party/web-vitals/package/dist/modules/lib/runOnce.js");
/*
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 

/**
 * Runs the passed callback during the next idle period, or immediately
 * if the browser's visibility state is (or becomes) hidden.
 */ var whenIdle = function(cb) {
    var rIC = self.requestIdleCallback || self.setTimeout;
    var handle = -1;
    cb = (0,_runOnce_js__WEBPACK_IMPORTED_MODULE_1__.runOnce)(cb);
    // If the document is hidden, run the callback immediately, otherwise
    // race an idle callback with the next `visibilitychange` event.
    if (document.visibilityState === 'hidden') {
        cb();
    } else {
        handle = rIC(cb);
        (0,_onHidden_js__WEBPACK_IMPORTED_MODULE_0__.onHidden)(cb);
    }
    return handle;
};


}),

}]);