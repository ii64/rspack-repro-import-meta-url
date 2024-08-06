"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_PuppeteerReplayConverter_js"],{

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

/***/ })

}]);