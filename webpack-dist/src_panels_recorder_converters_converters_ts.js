"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_converters_converters_ts"],{

/***/ "./src/panels/recorder/converters/Converter.ts":
/*!*****************************************************!*\
  !*** ./src/panels/recorder/converters/Converter.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/recorder/converters/ExtensionConverter.ts":
/*!**************************************************************!*\
  !*** ./src/panels/recorder/converters/ExtensionConverter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXTENSION_PREFIX: () => (/* binding */ EXTENSION_PREFIX),
/* harmony export */   ExtensionConverter: () => (/* binding */ ExtensionConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ExtensionConverter_instances, _ExtensionConverter_idx, _ExtensionConverter_extension, _ExtensionConverter_mediaTypeToExtension;

const EXTENSION_PREFIX = 'extension_';
class ExtensionConverter {
    constructor(idx, extension) {
        _ExtensionConverter_instances.add(this);
        _ExtensionConverter_idx.set(this, void 0);
        _ExtensionConverter_extension.set(this, void 0);
        __classPrivateFieldSet(this, _ExtensionConverter_idx, idx, "f");
        __classPrivateFieldSet(this, _ExtensionConverter_extension, extension, "f");
    }
    getId() {
        return EXTENSION_PREFIX + __classPrivateFieldGet(this, _ExtensionConverter_idx, "f");
    }
    getFormatName() {
        return __classPrivateFieldGet(this, _ExtensionConverter_extension, "f").getName();
    }
    getMediaType() {
        return __classPrivateFieldGet(this, _ExtensionConverter_extension, "f").getMediaType();
    }
    getFilename(flow) {
        const fileExtension = __classPrivateFieldGet(this, _ExtensionConverter_instances, "m", _ExtensionConverter_mediaTypeToExtension).call(this, __classPrivateFieldGet(this, _ExtensionConverter_extension, "f").getMediaType());
        return `${flow.title}${fileExtension}`;
    }
    async stringify(flow) {
        const text = await __classPrivateFieldGet(this, _ExtensionConverter_extension, "f").stringify(flow);
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await __classPrivateFieldGet(this, _ExtensionConverter_extension, "f").stringifyStep(step);
    }
}
_ExtensionConverter_idx = new WeakMap(), _ExtensionConverter_extension = new WeakMap(), _ExtensionConverter_instances = new WeakSet(), _ExtensionConverter_mediaTypeToExtension = function _ExtensionConverter_mediaTypeToExtension(mediaType) {
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
};


/***/ }),

/***/ "./src/panels/recorder/converters/JSONConverter.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/converters/JSONConverter.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONConverter: () => (/* binding */ JSONConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JSONConverter_indent;


class JSONConverter {
    constructor(indent) {
        _JSONConverter_indent.set(this, void 0);
        __classPrivateFieldSet(this, _JSONConverter_indent, indent, "f");
    }
    getId() {
        return _models_models_js__WEBPACK_IMPORTED_MODULE_1__.ConverterIds.ConverterIds.JSON;
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
            indentation: __classPrivateFieldGet(this, _JSONConverter_indent, "f"),
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            extension: new _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.JSONStringifyExtension(),
            indentation: __classPrivateFieldGet(this, _JSONConverter_indent, "f"),
        });
    }
    getMediaType() {
        return 'application/json';
    }
}
_JSONConverter_indent = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/converters/LighthouseConverter.ts":
/*!***************************************************************!*\
  !*** ./src/panels/recorder/converters/LighthouseConverter.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthouseConverter: () => (/* binding */ LighthouseConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LighthouseConverter_indent;


class LighthouseConverter {
    constructor(indent) {
        _LighthouseConverter_indent.set(this, void 0);
        __classPrivateFieldSet(this, _LighthouseConverter_indent, indent, "f");
    }
    getId() {
        return _models_models_js__WEBPACK_IMPORTED_MODULE_1__.ConverterIds.ConverterIds.Lighthouse;
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
            indentation: __classPrivateFieldGet(this, _LighthouseConverter_indent, "f"),
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        // LighthouseStringifyExtension maintains state between steps, it cannot create a Lighthouse flow from a single step.
        // If we need to stringify a single step, we should return just the Puppeteer code without Lighthouse analysis.
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: __classPrivateFieldGet(this, _LighthouseConverter_indent, "f"),
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
_LighthouseConverter_indent = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/converters/PuppeteerConverter.ts":
/*!**************************************************************!*\
  !*** ./src/panels/recorder/converters/PuppeteerConverter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerConverter: () => (/* binding */ PuppeteerConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PuppeteerConverter_indent;


class PuppeteerConverter {
    constructor(indent) {
        _PuppeteerConverter_indent.set(this, void 0);
        __classPrivateFieldSet(this, _PuppeteerConverter_indent, indent, "f");
    }
    getId() {
        return _models_models_js__WEBPACK_IMPORTED_MODULE_1__.ConverterIds.ConverterIds.Puppeteer;
    }
    getFormatName() {
        return 'Puppeteer';
    }
    getFilename(flow) {
        return `${flow.title}.js`;
    }
    async stringify(flow) {
        const text = await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringify(flow, {
            indentation: __classPrivateFieldGet(this, _PuppeteerConverter_indent, "f"),
        });
        const sourceMap = _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.parseSourceMap(text);
        return [_third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stripSourceMap(text), sourceMap];
    }
    async stringifyStep(step) {
        return await _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__.stringifyStep(step, {
            indentation: __classPrivateFieldGet(this, _PuppeteerConverter_indent, "f"),
        });
    }
    getMediaType() {
        return 'text/javascript';
    }
}
_PuppeteerConverter_indent = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/converters/PuppeteerReplayConverter.ts":
/*!********************************************************************!*\
  !*** ./src/panels/recorder/converters/PuppeteerReplayConverter.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PuppeteerReplayConverter: () => (/* binding */ PuppeteerReplayConverter)
/* harmony export */ });
/* harmony import */ var _third_party_puppeteer_replay_puppeteer_replay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/puppeteer-replay/puppeteer-replay.js */ "./src/third_party/puppeteer-replay/puppeteer-replay.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PuppeteerReplayConverter_indent;


class PuppeteerReplayConverter {
    constructor(indent) {
        _PuppeteerReplayConverter_indent.set(this, void 0);
        __classPrivateFieldSet(this, _PuppeteerReplayConverter_indent, indent, "f");
    }
    getId() {
        return _models_models_js__WEBPACK_IMPORTED_MODULE_1__.ConverterIds.ConverterIds.Replay;
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
            indentation: __classPrivateFieldGet(this, _PuppeteerReplayConverter_indent, "f"),
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
_PuppeteerReplayConverter_indent = new WeakMap();


/***/ }),

/***/ "./src/panels/recorder/converters/converters.ts":
/*!******************************************************!*\
  !*** ./src/panels/recorder/converters/converters.ts ***!
  \******************************************************/
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
/* harmony import */ var _Converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Converter.js */ "./src/panels/recorder/converters/Converter.ts");
/* harmony import */ var _ExtensionConverter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionConverter.js */ "./src/panels/recorder/converters/ExtensionConverter.ts");
/* harmony import */ var _JSONConverter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JSONConverter.js */ "./src/panels/recorder/converters/JSONConverter.ts");
/* harmony import */ var _LighthouseConverter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseConverter.js */ "./src/panels/recorder/converters/LighthouseConverter.ts");
/* harmony import */ var _PuppeteerConverter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PuppeteerConverter.js */ "./src/panels/recorder/converters/PuppeteerConverter.ts");
/* harmony import */ var _PuppeteerReplayConverter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PuppeteerReplayConverter.js */ "./src/panels/recorder/converters/PuppeteerReplayConverter.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);