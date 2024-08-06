"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_bidi_core_core_d_ts-third_party_puppeteer_pac-9be147"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Connection.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */  //# sourceMappingURL=Connection.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/core.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Browser: function() { return /* reexport safe */ _Browser_js__WEBPACK_IMPORTED_MODULE_0__.Browser; },
  BrowsingContext: function() { return /* reexport safe */ _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_1__.BrowsingContext; },
  DedicatedWorkerRealm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.DedicatedWorkerRealm; },
  Navigation: function() { return /* reexport safe */ _Navigation_js__WEBPACK_IMPORTED_MODULE_3__.Navigation; },
  Realm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.Realm; },
  Request: function() { return /* reexport safe */ _Request_js__WEBPACK_IMPORTED_MODULE_5__.Request; },
  Session: function() { return /* reexport safe */ _Session_js__WEBPACK_IMPORTED_MODULE_6__.Session; },
  SharedWorkerRealm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.SharedWorkerRealm; },
  UserContext: function() { return /* reexport safe */ _UserContext_js__WEBPACK_IMPORTED_MODULE_7__.UserContext; },
  UserPrompt: function() { return /* reexport safe */ _UserPrompt_js__WEBPACK_IMPORTED_MODULE_8__.UserPrompt; },
  WindowRealm: function() { return /* reexport safe */ _Realm_js__WEBPACK_IMPORTED_MODULE_4__.WindowRealm; }
});
/* harmony import */var _Browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Browser.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Browser.js");
/* harmony import */var _BrowsingContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowsingContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/BrowsingContext.js");
/* harmony import */var _Connection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Connection.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Connection.js");
/* harmony import */var _Navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Navigation.js");
/* harmony import */var _Realm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Realm.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Realm.js");
/* harmony import */var _Request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Request.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Request.js");
/* harmony import */var _Session_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Session.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/Session.js");
/* harmony import */var _UserContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UserContext.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserContext.js");
/* harmony import */var _UserPrompt_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserPrompt.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/bidi/core/UserPrompt.js");
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 







 //# sourceMappingURL=core.d.ts.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * Asserts that the given value is truthy.
 * @param value - some conditional statement
 * @param message - the error message to throw if the value is not truthy.
 *
 * @internal
 */ var assert = function(value, message) {
    if (!value) {
        throw new Error(message);
    }
}; //# sourceMappingURL=assert.js.map


}),

}]);