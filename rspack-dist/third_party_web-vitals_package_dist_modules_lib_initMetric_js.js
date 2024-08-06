"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_web-vitals_package_dist_modules_lib_initMetric_js"], {
"./third_party/web-vitals/package/dist/modules/lib/bfcache.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getBFCacheRestoreTime: function() { return getBFCacheRestoreTime; },
  onBFCacheRestore: function() { return onBFCacheRestore; }
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
 */ var bfcacheRestoreTime = -1;
var getBFCacheRestoreTime = function() {
    return bfcacheRestoreTime;
};
var onBFCacheRestore = function(cb) {
    addEventListener('pageshow', function(event) {
        if (event.persisted) {
            bfcacheRestoreTime = event.timeStamp;
            cb(event);
        }
    }, true);
};


}),
"./third_party/web-vitals/package/dist/modules/lib/generateUniqueID.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  generateUniqueID: function() { return generateUniqueID; }
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
 */ /**
 * Performantly generate a unique, 30-char string by combining a version
 * number, the current timestamp with a 13-digit number integer.
 * @return {string}
 */ var generateUniqueID = function() {
    return "v4-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
};


}),
"./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getActivationStart: function() { return getActivationStart; }
});
/* harmony import */var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
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
 */ 
var getActivationStart = function() {
    var navEntry = (0,_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_0__.getNavigationEntry)();
    return navEntry && navEntry.activationStart || 0;
};


}),
"./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getNavigationEntry: function() { return getNavigationEntry; }
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
 */ var getNavigationEntry = function() {
    var navigationEntry = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    // Check to ensure the `responseStart` property is present and valid.
    // In some cases no value is reported by the browser (for
    // privacy/security reasons), and in other cases (bugs) the value is
    // negative or is larger than the current page time. Ignore these cases:
    // https://github.com/GoogleChrome/web-vitals/issues/137
    // https://github.com/GoogleChrome/web-vitals/issues/162
    // https://github.com/GoogleChrome/web-vitals/issues/275
    if (navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()) {
        return navigationEntry;
    }
};


}),
"./third_party/web-vitals/package/dist/modules/lib/initMetric.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  initMetric: function() { return initMetric; }
});
/* harmony import */var _bfcache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");
/* harmony import */var _generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateUniqueID.js */ "./third_party/web-vitals/package/dist/modules/lib/generateUniqueID.js");
/* harmony import */var _getActivationStart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getActivationStart.js */ "./third_party/web-vitals/package/dist/modules/lib/getActivationStart.js");
/* harmony import */var _getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNavigationEntry.js */ "./third_party/web-vitals/package/dist/modules/lib/getNavigationEntry.js");
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
 */ 



var initMetric = function(name, value) {
    var navEntry = (0,_getNavigationEntry_js__WEBPACK_IMPORTED_MODULE_3__.getNavigationEntry)();
    var navigationType = 'navigate';
    if ((0,_bfcache_js__WEBPACK_IMPORTED_MODULE_0__.getBFCacheRestoreTime)() >= 0) {
        navigationType = 'back-forward-cache';
    } else if (navEntry) {
        if (document.prerendering || (0,_getActivationStart_js__WEBPACK_IMPORTED_MODULE_2__.getActivationStart)() > 0) {
            navigationType = 'prerender';
        } else if (document.wasDiscarded) {
            navigationType = 'restore';
        } else if (navEntry.type) {
            navigationType = navEntry.type.replace(/_/g, '-');
        }
    }
    // Use `entries` type specific for the metric.
    var entries = [];
    return {
        name: name,
        value: typeof value === 'undefined' ? -1 : value,
        rating: 'good',
        delta: 0,
        entries: entries,
        id: (0,_generateUniqueID_js__WEBPACK_IMPORTED_MODULE_1__.generateUniqueID)(),
        navigationType: navigationType
    };
};


}),

}]);