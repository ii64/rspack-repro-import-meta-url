"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_IsolatedWorlds_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/IsolatedWorlds.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MAIN_WORLD: function() { return MAIN_WORLD; },
  PUPPETEER_WORLD: function() { return PUPPETEER_WORLD; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * A unique key for {@link IsolatedWorldChart} to denote the default world.
 * Execution contexts are automatically created in the default world.
 *
 * @internal
 */ var MAIN_WORLD = Symbol('mainWorld');
/**
 * A unique key for {@link IsolatedWorldChart} to denote the puppeteer world.
 * This world contains all puppeteer-internal bindings/code.
 *
 * @internal
 */ var PUPPETEER_WORLD = Symbol('puppeteerWorld'); //# sourceMappingURL=IsolatedWorlds.js.map


}),

}]);