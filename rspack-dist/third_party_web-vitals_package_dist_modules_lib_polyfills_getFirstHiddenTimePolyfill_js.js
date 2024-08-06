"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_web-vitals_package_dist_modules_lib_polyfills_getFirstHiddenTimePolyfill_js"], {
"./third_party/web-vitals/package/dist/modules/lib/polyfills/getFirstHiddenTimePolyfill.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getFirstHiddenTime: function() { return getFirstHiddenTime; }
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
 */ var firstHiddenTime = document.visibilityState === 'hidden' ? 0 : Infinity;
var onVisibilityChange = function(event) {
    if (document.visibilityState === 'hidden') {
        firstHiddenTime = event.timeStamp;
        removeEventListener('visibilitychange', onVisibilityChange, true);
    }
};
// Note: do not add event listeners unconditionally (outside of polyfills).
addEventListener('visibilitychange', onVisibilityChange, true);
var getFirstHiddenTime = function() {
    return firstHiddenTime;
};


}),

}]);