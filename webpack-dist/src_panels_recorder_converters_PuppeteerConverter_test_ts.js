"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_converters_PuppeteerConverter_test_ts"],{

/***/ "./src/panels/recorder/converters/PuppeteerConverter.test.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/recorder/converters/PuppeteerConverter.test.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _converters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converters.js */ "./src/panels/recorder/converters/converters.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('PuppeteerConverter', () => {
    it('should stringify a flow', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerConverter.PuppeteerConverter('  ');
        const [result, sourceMap] = await converter.stringify({
            title: 'test',
            steps: [{ type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['.cls']] }],
        });
        const expected = `const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('.cls')
    ])
      .setTimeout(timeout)
      .scroll({ scrollTop: undefined, scrollLeft: undefined});
  }

  await browser.close();`;
        const actual = result.substring(0, expected.length);
        assert.strictEqual(actual, expected, `Unexpected start of generated result:\n${actual}`);
        assert.deepStrictEqual(sourceMap, [1, 8, 8]);
    });
    it('should stringify a step', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerConverter.PuppeteerConverter('  ');
        const result = await converter.stringifyStep({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll,
        });
        assert.strictEqual(result, `{
  const targetPage = page;
  await targetPage.evaluate((x, y) => { window.scroll(x, y); }, undefined, undefined)
}
`);
    });
});


/***/ })

}]);