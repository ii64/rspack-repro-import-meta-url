"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_converters_PuppeteerReplayConverter_test_ts"],{

/***/ "./src/panels/recorder/converters/PuppeteerReplayConverter.test.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/recorder/converters/PuppeteerReplayConverter.test.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _converters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converters.js */ "./src/panels/recorder/converters/converters.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('PuppeteerReplayConverter', () => {
    it('should stringify a flow', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerReplayConverter.PuppeteerReplayConverter('  ');
        const [result, sourceMap] = await converter.stringify({
            title: 'test',
            steps: [{ type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['.cls']] }],
        });
        assert.strictEqual(result, `import url from 'url';
import { createRunner } from '@puppeteer/replay';

export async function run(extension) {
  const runner = await createRunner(extension);

  await runner.runBeforeAllSteps();

  await runner.runStep({
    type: 'scroll',
    selectors: [
      [
        '.cls'
      ]
    ]
  });

  await runner.runAfterAllSteps();
}

if (process && import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  run()
}
`);
        assert.deepStrictEqual(sourceMap, [1, 8, 8]);
    });
    it('should stringify a step', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.PuppeteerReplayConverter.PuppeteerReplayConverter('  ');
        const result = await converter.stringifyStep({
            type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll,
        });
        assert.strictEqual(result, `await runner.runStep({
  type: 'scroll'
});
`);
    });
});


/***/ })

}]);