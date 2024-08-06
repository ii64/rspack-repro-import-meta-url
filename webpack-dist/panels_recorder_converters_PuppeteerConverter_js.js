"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_PuppeteerConverter_js"],{

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

/***/ })

}]);