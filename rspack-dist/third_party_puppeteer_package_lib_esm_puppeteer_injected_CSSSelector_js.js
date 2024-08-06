"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_CSSSelector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/CSSSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cssQuerySelector: function() { return cssQuerySelector; },
  cssQuerySelectorAll: function() { return cssQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ var cssQuerySelector = function(root, selector) {
    // @ts-expect-error assume element root
    return root.querySelector(selector);
};
var cssQuerySelectorAll = function cssQuerySelectorAll(root, selector) {
    // @ts-expect-error assume element root
    return root.querySelectorAll(selector);
}; //# sourceMappingURL=CSSSelector.js.map


}),

}]);