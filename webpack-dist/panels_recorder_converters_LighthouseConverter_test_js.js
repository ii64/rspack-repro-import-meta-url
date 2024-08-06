"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_LighthouseConverter_test_js"],{

/***/ "./panels/recorder/converters/Converter.js":
/*!*************************************************!*\
  !*** ./panels/recorder/converters/Converter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ "./panels/recorder/converters/ExtensionConverter.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/converters/ExtensionConverter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENSION_PREFIX: () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   ExtensionConverter: () => (/* binding */ ExtensionConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const EXTENSION_PREFIX = 'extension_';
class ExtensionConverter {
    #idx;
    #extension;
    constructor(idx, extension) {
        this.#idx = idx;
        this.#extension = extension;
    }
    getId() {
        return EXTENSION_PREFIX + this.#idx;
    }
    getFormatName() {
        return this.#extension.getName();
    }
    getMediaType() {
        return this.#extension.getMediaType();
    }
    getFilename(flow) {
        const fileExtension = this.#mediaTypeToExtension(this.#extension.getMediaType());
        return `${flow.title}${fileExtension}`;
    }
    async stringify(flow) {
        const text = await this.#extension.stringify(flow);
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await this.#extension.stringifyStep(step);
    }
    #mediaTypeToExtension(mediaType) {
        // See https://www.iana.org/assignments/media-types/media-types.xhtml
        switch (mediaType) {
            case 'application/json':
                return '.json';
            case 'application/javascript':
            case 'text/javascript':
                return '.js';
            case 'application/typescript':
            case 'text/typescript':
                return '.ts';
            default:
                // TODO: think of exhaustive mapping once the feature gets traction.
                return '';
        }
    }
}
//# sourceMappingURL=ExtensionConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/JSONConverter.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/converters/JSONConverter.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONConverter: () => (/* binding */ JSONConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class JSONConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "json" /* Models.ConverterIds.ConverterIds.JSON */;
    }
    getFormatName() {
        return 'JSON';
    }
    getFilename(flow) {
        return `${flow.title}.json`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension(),
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'application/json';
    }
}
//# sourceMappingURL=JSONConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/LighthouseConverter.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/converters/LighthouseConverter.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthouseConverter: () => (/* binding */ LighthouseConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class LighthouseConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "lighthouse" /* Models.ConverterIds.ConverterIds.Lighthouse */;
    }
    getFormatName() {
        return 'Puppeteer (including Lighthouse analysis)';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.LighthouseStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        // LighthouseStringifyExtension maintains state between steps, it cannot create a Lighthouse flow from a single step.
        // If we need to stringify a single step, we should return just the Puppeteer code without Lighthouse analysis.
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=LighthouseConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/LighthouseConverter.test.js":
/*!****************************************************************!*\
  !*** ./panels/recorder/converters/LighthouseConverter.test.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _converters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./converters.js */ "./panels/recorder/converters/converters.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('LighthouseConverter', () => {
    it('should stringify a flow', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.LighthouseConverter.LighthouseConverter('  ');
        const [result, sourceMap] = await converter.stringify({
            title: 'test',
            steps: [
                { type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Navigate, url: 'https://example.com' },
                { type: _models_models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll, selectors: [['.cls']] },
            ],
        });
        const expected = `const fs = require('fs');
const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  const lhApi = await import('lighthouse'); // v10.0.0 or later
  const flags = {
    screenEmulation: {
      disabled: true
    }
  }
  const config = lhApi.desktopConfig;
  const lhFlow = await lhApi.startFlow(page, {name: 'test', config, flags});
  await lhFlow.startNavigation();
  {
    const targetPage = page;
    await targetPage.goto('https://example.com');
  }
  await lhFlow.endNavigation();
  await lhFlow.startTimespan();
  {
    const targetPage = page;
    await puppeteer.Locator.race([
      targetPage.locator('.cls')
    ])
      .setTimeout(timeout)
      .scroll({ scrollTop: undefined, scrollLeft: undefined});
  }
  await lhFlow.endTimespan();
  const lhFlowReport = await lhFlow.generateReport();
  fs.writeFileSync(__dirname + '/flow.report.html', lhFlowReport)

  await browser.close();`;
        const actual = result.substring(0, expected.length);
        assert.strictEqual(actual, expected, `Unexpected start of generated result:\n${actual}`);
        assert.deepStrictEqual(sourceMap, [1, 17, 6, 23, 9]);
    });
    it('should stringify a step', async () => {
        const converter = new _converters_js__WEBPACK_IMPORTED_MODULE_1__.LighthouseConverter.LighthouseConverter('  ');
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
//# sourceMappingURL=LighthouseConverter.test.js.map

/***/ }),

/***/ "./panels/recorder/converters/PuppeteerConverter.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/converters/PuppeteerConverter.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConverter: () => (/* binding */ PuppeteerConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class PuppeteerConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "puppeteer" /* Models.ConverterIds.ConverterIds.Puppeteer */;
    }
    getFormatName() {
        return 'Puppeteer';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: this.#indent,
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=PuppeteerConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/PuppeteerReplayConverter.js":
/*!****************************************************************!*\
  !*** ./panels/recorder/converters/PuppeteerReplayConverter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerReplayConverter: () => (/* binding */ PuppeteerReplayConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./third_party/puppeteer-replay/puppeteer-replay.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class PuppeteerReplayConverter {
    #indent;
    constructor(indent) {
        this.#indent = indent;
    }
    getId() {
        return "@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */;
    }
    getFormatName() {
        return '@puppeteer/replay';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension(),
            indentation: this.#indent,
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.PuppeteerReplayStringifyExtension(),
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
//# sourceMappingURL=PuppeteerReplayConverter.js.map

/***/ }),

/***/ "./panels/recorder/converters/converters.js":
/*!**************************************************!*\
  !*** ./panels/recorder/converters/converters.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Converter: () => (/* reexport module object */ _Converter_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ExtensionConverter: () => (/* reexport module object */ _ExtensionConverter_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   JSONConverter: () => (/* reexport module object */ _JSONConverter_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LighthouseConverter: () => (/* reexport module object */ _LighthouseConverter_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   PuppeteerConverter: () => (/* reexport module object */ _PuppeteerConverter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   PuppeteerReplayConverter: () => (/* reexport module object */ _PuppeteerReplayConverter_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _Converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter.js */ "./panels/recorder/converters/Converter.js");
/* harmony import */ var _ExtensionConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionConverter.js */ "./panels/recorder/converters/ExtensionConverter.js");
/* harmony import */ var _JSONConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSONConverter.js */ "./panels/recorder/converters/JSONConverter.js");
/* harmony import */ var _LighthouseConverter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseConverter.js */ "./panels/recorder/converters/LighthouseConverter.js");
/* harmony import */ var _PuppeteerConverter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PuppeteerConverter.js */ "./panels/recorder/converters/PuppeteerConverter.js");
/* harmony import */ var _PuppeteerReplayConverter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PuppeteerReplayConverter.js */ "./panels/recorder/converters/PuppeteerReplayConverter.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=converters.js.map

/***/ })

}]);