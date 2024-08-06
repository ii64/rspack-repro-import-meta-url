"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_RecordingView_test_js"],{

/***/ "./panels/recorder/components/RecordingView.test.js":
/*!**********************************************************!*\
  !*** ./panels/recorder/components/RecordingView.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('RecordingView', () => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.setupActionRegistry)();
    const step = { type: _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.StepType.Scroll };
    const section = { title: 'test', steps: [step], url: 'https://example.com' };
    const userFlow = { title: 'test', steps: [step] };
    const recorderSettingsMock = {
        preferredCopyFormat: "json" /* Models.ConverterIds.ConverterIds.JSON */,
    };
    async function renderView() {
        const view = new _components_js__WEBPACK_IMPORTED_MODULE_8__.RecordingView.RecordingView();
        recorderSettingsMock.preferredCopyFormat = "json" /* Models.ConverterIds.ConverterIds.JSON */;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
        view.data = {
            replayState: { isPlaying: false, isPausedOnBreakpoint: false },
            isRecording: false,
            recordingTogglingInProgress: false,
            recording: userFlow,
            currentStep: undefined,
            currentError: undefined,
            sections: [section],
            settings: undefined,
            recorderSettings: recorderSettingsMock,
            lastReplayResult: undefined,
            replayAllowed: true,
            breakpointIndexes: new Set(),
            builtInConverters: [
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__.JSONConverter.JSONConverter('  '),
                new _converters_converters_js__WEBPACK_IMPORTED_MODULE_6__.PuppeteerReplayConverter.PuppeteerReplayConverter('  '),
            ],
            extensionConverters: [],
            replayExtensions: [],
        };
        await coordinator.done();
        return view;
    }
    async function waitForTextEditor(view) {
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(view, 'code-generated');
        const textEditor = view.shadowRoot?.querySelector('devtools-text-editor');
        assert.isNotNull(textEditor);
        return textEditor;
    }
    function hoverOverScrollStep(view) {
        const steps = view.shadowRoot?.querySelectorAll('devtools-step-view') || [];
        assert.lengthOf(steps, 2);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchMouseOverEvent)(steps[1]);
    }
    function clickStep(view) {
        const steps = view.shadowRoot?.querySelectorAll('devtools-step-view') || [];
        assert.lengthOf(steps, 2);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(steps[1]);
    }
    function dispatchOnStep(view, customEvent) {
        const steps = view.shadowRoot?.querySelectorAll('devtools-step-view') || [];
        assert.lengthOf(steps, 2);
        steps[1].dispatchEvent(customEvent);
    }
    function clickShowCode(view) {
        const button = view.shadowRoot?.querySelector('.show-code');
        assert.ok(button);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button);
    }
    function clickHideCode(view) {
        const button = view.shadowRoot?.querySelector('[title="Hide code"]');
        assert.ok(button);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button);
    }
    async function waitForSplitViewToDissappear(view) {
        await (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(view, 'code-generated');
        const splitView = view.shadowRoot?.querySelector('devtools-split-view');
        assert.isNull(splitView);
    }
    async function changeCodeView(view) {
        const menu = view.shadowRoot?.querySelector('devtools-select-menu');
        assert.ok(menu);
        const event = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenuItemSelectedEvent("@puppeteer/replay" /* Models.ConverterIds.ConverterIds.Replay */);
        menu.dispatchEvent(event);
    }
    it('should show code and highlight on hover', async () => {
        const view = await renderView();
        clickShowCode(view);
        // Click is handled async, therefore, waiting for the text editor.
        const textEditor = await waitForTextEditor(view);
        assert.deepStrictEqual(textEditor.editor.state.selection.toJSON(), {
            ranges: [{ anchor: 0, head: 0 }],
            main: 0,
        });
        hoverOverScrollStep(view);
        assert.deepStrictEqual(textEditor.editor.state.selection.toJSON(), {
            ranges: [{ anchor: 34, head: 68 }],
            main: 0,
        });
    });
    it('should close code', async () => {
        const view = await renderView();
        clickShowCode(view);
        // Click is handled async, therefore, waiting for the text editor.
        await waitForTextEditor(view);
        clickHideCode(view);
        // Click is handled async, therefore, waiting for split view to be removed.
        await waitForSplitViewToDissappear(view);
    });
    it('should copy the recording to clipboard via copy event', async () => {
        await renderView();
        const clipboardData = new DataTransfer();
        const copyText = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText'));
        const event = new ClipboardEvent('copy', { clipboardData, bubbles: true });
        document.body.dispatchEvent(event);
        const [text] = await copyText;
        assert.strictEqual(JSON.stringify(userFlow, null, 2) + '\n', text);
    });
    it('should copy a step to clipboard via copy event', async () => {
        const view = await renderView();
        clickStep(view);
        const clipboardData = new DataTransfer();
        const isCalled = sinon.promise();
        const copyText = sinon
            .stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText')
            .callsFake(() => {
            void isCalled.resolve(true);
        });
        const event = new ClipboardEvent('copy', { clipboardData, bubbles: true });
        document.body.dispatchEvent(event);
        await isCalled;
        assert.isTrue(copyText.calledWith(JSON.stringify(step, null, 2) + '\n'));
    });
    it('should copy a step to clipboard via custom event', async () => {
        const view = await renderView();
        const isCalled = sinon.promise();
        const copyText = sinon
            .stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText')
            .callsFake(() => {
            void isCalled.resolve(true);
        });
        const event = new _components_js__WEBPACK_IMPORTED_MODULE_8__.StepView.CopyStepEvent(step);
        dispatchOnStep(view, event);
        await isCalled;
        assert.isTrue(copyText.calledWith(JSON.stringify(step, null, 2) + '\n'));
    });
    it('should show code and change preferred copy method', async () => {
        const view = await renderView();
        clickShowCode(view);
        await waitForTextEditor(view);
        await changeCodeView(view);
        await waitForTextEditor(view);
        assert.notEqual(recorderSettingsMock.preferredCopyFormat, "json" /* Models.ConverterIds.ConverterIds.JSON */);
    });
});
//# sourceMappingURL=RecordingView.test.js.map

/***/ }),

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

/***/ }),

/***/ "./testing/DOMHelpers.js":
/*!*******************************!*\
  !*** ./testing/DOMHelpers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertElements: () => (/* binding */ assertElements),
/* harmony export */   assertNodeTextContent: () => (/* binding */ assertNodeTextContent),
/* harmony export */   dispatchClickEvent: () => (/* binding */ dispatchClickEvent),
/* harmony export */   dispatchCopyEvent: () => (/* binding */ dispatchCopyEvent),
/* harmony export */   dispatchFocusEvent: () => (/* binding */ dispatchFocusEvent),
/* harmony export */   dispatchFocusOutEvent: () => (/* binding */ dispatchFocusOutEvent),
/* harmony export */   dispatchInputEvent: () => (/* binding */ dispatchInputEvent),
/* harmony export */   dispatchKeyDownEvent: () => (/* binding */ dispatchKeyDownEvent),
/* harmony export */   dispatchMouseLeaveEvent: () => (/* binding */ dispatchMouseLeaveEvent),
/* harmony export */   dispatchMouseMoveEvent: () => (/* binding */ dispatchMouseMoveEvent),
/* harmony export */   dispatchMouseOutEvent: () => (/* binding */ dispatchMouseOutEvent),
/* harmony export */   dispatchMouseOverEvent: () => (/* binding */ dispatchMouseOverEvent),
/* harmony export */   dispatchMouseUpEvent: () => (/* binding */ dispatchMouseUpEvent),
/* harmony export */   dispatchPasteEvent: () => (/* binding */ dispatchPasteEvent),
/* harmony export */   doubleRaf: () => (/* binding */ doubleRaf),
/* harmony export */   getCleanTextContentFromElements: () => (/* binding */ getCleanTextContentFromElements),
/* harmony export */   getElementWithinComponent: () => (/* binding */ getElementWithinComponent),
/* harmony export */   getElementsWithinComponent: () => (/* binding */ getElementsWithinComponent),
/* harmony export */   getEventPromise: () => (/* binding */ getEventPromise),
/* harmony export */   querySelectorErrorOnMissing: () => (/* binding */ querySelectorErrorOnMissing),
/* harmony export */   raf: () => (/* binding */ raf),
/* harmony export */   renderElementIntoDOM: () => (/* binding */ renderElementIntoDOM),
/* harmony export */   resetTestDOM: () => (/* binding */ resetTestDOM),
/* harmony export */   stripLitHtmlCommentNodes: () => (/* binding */ stripLitHtmlCommentNodes),
/* harmony export */   waitForScrollLeft: () => (/* binding */ waitForScrollLeft)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const TEST_CONTAINER_ID = '__devtools-test-container-id';
/**
 * Renders a given element into the DOM. By default it will error if it finds an element already rendered but this can be controlled via the options.
 **/
const renderElementIntoDOM = (element, renderOptions = {}) => {
    const container = document.getElementById(TEST_CONTAINER_ID);
    if (!container) {
        throw new Error(`renderElementIntoDOM expects to find ${TEST_CONTAINER_ID}`);
    }
    const allowMultipleChildren = Boolean(renderOptions.allowMultipleChildren);
    if (container.childNodes.length !== 0 && !allowMultipleChildren) {
        throw new Error(`renderElementIntoDOM expects the container to be empty ${container.innerHTML}`);
    }
    container.appendChild(element);
    return element;
};
function removeChildren(node) {
    while (true) {
        const { firstChild } = node;
        if (firstChild === null) {
            break;
        }
        const widget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.Widget.get(firstChild);
        if (widget) {
            // Child is a widget, so we have to use the Widget system to remove it from the DOM.
            widget.detach();
            continue;
        }
        // For regular children, recursively remove their children, since some of them
        // might be widgets, and only afterwards remove the child from the current node.
        removeChildren(firstChild);
        node.removeChild(firstChild);
    }
}
/**
 * Completely cleans out the test DOM to ensure it's empty for the next test run.
 * This is run automatically between tests - you should not be manually calling this yourself.
 **/
const resetTestDOM = () => {
    const previousContainer = document.getElementById(TEST_CONTAINER_ID);
    if (previousContainer) {
        removeChildren(previousContainer);
        previousContainer.remove();
    }
    const newContainer = document.createElement('div');
    newContainer.id = TEST_CONTAINER_ID;
    document.body.appendChild(newContainer);
};
/**
 * Asserts that all emenents of `nodeList` are at least of type `T`.
 */
function assertElements(nodeList, elementClass) {
    nodeList.forEach(e => assert.instanceOf(e, elementClass));
}
function getElementWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const element = component.shadowRoot.querySelector(selector);
    assert.instanceOf(element, elementClass);
    return element;
}
function getElementsWithinComponent(component, selector, elementClass) {
    assert.isNotNull(component.shadowRoot);
    const elements = component.shadowRoot.querySelectorAll(selector);
    assertElements(elements, elementClass);
    return elements;
}
/* Waits for the given element to have a scrollLeft property of at least desiredScrollLeft */
function waitForScrollLeft(element, desiredScrollLeft) {
    let lastScrollLeft = -1;
    let scrollLeftTimeout = null;
    const timeBetweenPolls = 50;
    return new Promise(resolve => {
        const pollForScrollLeft = () => {
            const newScrollLeft = element.scrollLeft;
            // If we get the same scroll value twice in a row, and it's at least what
            // we want, we're done!
            if (lastScrollLeft === newScrollLeft && newScrollLeft >= desiredScrollLeft) {
                if (scrollLeftTimeout) {
                    window.clearTimeout(scrollLeftTimeout);
                }
                resolve();
                return;
            }
            lastScrollLeft = newScrollLeft;
            scrollLeftTimeout = window.setTimeout(pollForScrollLeft, timeBetweenPolls);
        };
        window.setTimeout(pollForScrollLeft, timeBetweenPolls);
    });
}
/**
 * Dispatches a mouse click event.
 */
function dispatchClickEvent(element, options = {}) {
    const clickEvent = new MouseEvent('click', options);
    element.dispatchEvent(clickEvent);
}
function dispatchMouseUpEvent(element, options = {}) {
    const clickEvent = new MouseEvent('mouseup', options);
    element.dispatchEvent(clickEvent);
}
function dispatchFocusEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focus', options);
    element.dispatchEvent(focusEvent);
}
function dispatchFocusOutEvent(element, options = {}) {
    const focusEvent = new FocusEvent('focusout', options);
    element.dispatchEvent(focusEvent);
}
/**
 * Dispatches a keydown event. Errors if the event was not dispatched successfully.
 */
function dispatchKeyDownEvent(element, options = {}) {
    const clickEvent = new KeyboardEvent('keydown', options);
    const success = element.dispatchEvent(clickEvent);
    if (!success) {
        assert.fail('Failed to trigger keydown event successfully.');
    }
}
function dispatchInputEvent(element, options = {}) {
    const inputEvent = new InputEvent('input', options);
    element.dispatchEvent(inputEvent);
}
/**
 * Dispatches a mouse over event.
 */
function dispatchMouseOverEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseover', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse out event.
 */
function dispatchMouseOutEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mouseout', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse move event.
 */
function dispatchMouseMoveEvent(element, options = {}) {
    const moveEvent = new MouseEvent('mousemove', options);
    element.dispatchEvent(moveEvent);
}
/**
 * Dispatches a mouse leave event.
 */
function dispatchMouseLeaveEvent(element, options = {}) {
    const leaveEvent = new MouseEvent('mouseleave', options);
    element.dispatchEvent(leaveEvent);
}
/**
 * Dispatches a clipboard copy event.
 */
function dispatchCopyEvent(element, options = {}) {
    const copyEvent = new ClipboardEvent('copy', options);
    element.dispatchEvent(copyEvent);
}
/**
 * Dispatches a clipboard paste event.
 */
function dispatchPasteEvent(element, options = {}) {
    const pasteEvent = new ClipboardEvent('paste', options);
    element.dispatchEvent(pasteEvent);
}
/**
 * Listens to an event of an element and returns a Promise that resolves to the
 * specified event type.
 */
function getEventPromise(element, eventName) {
    return new Promise(resolve => {
        element.addEventListener(eventName, (event) => {
            resolve(event);
        }, { once: true });
    });
}
async function doubleRaf() {
    return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}
async function raf() {
    return new Promise(resolve => requestAnimationFrame(resolve));
}
/**
 * It's useful to use innerHTML in the tests to have full confidence in the
 * renderer output, but LitHtml uses comment nodes to split dynamic from
 * static parts of a template, and we don't want our tests full of noise
 * from those.
 */
function stripLitHtmlCommentNodes(text) {
    /**
     * LitHtml comments take the form of:
     * <!--?lit$1234?--> or:
     * <!--?-->
     * And this regex matches both.
     */
    return text.replaceAll(/<!--\?(lit\$[0-9]+\$)?-->/g, '');
}
/**
 * Returns an array of textContents.
 * Multiple consecutive newLine and space characters are removed.
 */
function getCleanTextContentFromElements(el, selector) {
    const elements = Array.from(el.querySelectorAll(selector));
    return elements.map(element => {
        return element.textContent ? element.textContent.trim().replace(/[ \n]{2,}/g, '') : '';
    });
}
function assertNodeTextContent(component, expectedContent) {
    assert.isNotNull(component.shadowRoot);
    const content = Array.from(component.shadowRoot.querySelectorAll('span')).map(span => span.textContent).join('');
    assert.strictEqual(content, expectedContent);
}
function querySelectorErrorOnMissing(parent, selector) {
    const elem = parent.querySelector(selector);
    if (!elem) {
        throw new Error(`Expected element with selector ${selector} not found.`);
    }
    return elem;
}
//# sourceMappingURL=DOMHelpers.js.map

/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ })

}]);