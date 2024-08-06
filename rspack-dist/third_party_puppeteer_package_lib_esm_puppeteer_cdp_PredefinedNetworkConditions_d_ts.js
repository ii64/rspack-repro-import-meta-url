"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_PredefinedNetworkConditions_d_ts"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/PredefinedNetworkConditions.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2021 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * A list of pre-defined network conditions to be used with
 * {@link Page.emulateNetworkConditions}.
 *
 * @example
 *
 * ```ts
 * import {PredefinedNetworkConditions} from 'puppeteer';
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Slow 3G']
 *   );
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Fast 3G']
 *   );
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Slow 4G']
 *   ); // alias to Fast 3G.
 *   await page.goto('https://www.google.com');
 *   await page.emulateNetworkConditions(
 *     PredefinedNetworkConditions['Fast 4G']
 *   );
 *   await page.goto('https://www.google.com');
 *   // other actions...
 *   await browser.close();
 * })();
 * ```
 *
 * @public
 */  //# sourceMappingURL=PredefinedNetworkConditions.d.ts.map


}),

}]);