"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_StepView_test_js"],{

/***/ "./panels/recorder/components/StepView.test.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/StepView.test.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _converters_converters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../converters/converters.js */ "./panels/recorder/converters/converters.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('StepView', () => {
    const step = { type: _models_models_js__WEBPACK_IMPORTED_MODULE_4__.Schema.StepType.Scroll };
    const section = { title: 'test', steps: [step], url: 'https://example.com' };
    function createViewFunctionSpy() {
        const viewFunction = sinon.spy();
        return {
            viewFunction,
            getViewInput() {
                return viewFunction.lastCall.args[0];
            },
        };
    }
    async function createStepView(viewFunction, opts = {}) {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.StepView.StepView(viewFunction);
        component.data = {
            step: opts.step !== undefined ? step : undefined,
            section: opts.section !== undefined ? section : undefined,
            state: "default" /* Components.StepView.State.Default */,
            isEndOfGroup: opts.isEndOfGroup ?? false,
            isStartOfGroup: opts.isStartOfGroup ?? false,
            isFirstSection: opts.isFirstSection ?? false,
            isLastSection: opts.isLastSection ?? false,
            stepIndex: opts.stepIndex ?? 0,
            sectionIndex: opts.sectionIndex ?? 0,
            isRecording: opts.isRecording ?? false,
            isPlaying: opts.isPlaying ?? false,
            hasBreakpoint: opts.hasBreakpoint ?? false,
            removable: opts.removable ?? false,
            builtInConverters: opts.builtInConverters ||
                [
                    new _converters_converters_js__WEBPACK_IMPORTED_MODULE_3__.JSONConverter.JSONConverter('  '),
                ],
            extensionConverters: opts.extensionConverters || [],
            isSelected: opts.isSelected ?? false,
            recorderSettings: new _models_models_js__WEBPACK_IMPORTED_MODULE_4__.RecorderSettings.RecorderSettings(),
        };
        return component;
    }
    describe('Step and section actions menu', () => {
        it('should produce actions for a step', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            await createStepView(viewFunction, { step });
            assert.deepStrictEqual(getViewInput().actions, [
                { 'id': 'add-step-before', 'label': 'Add step before', 'group': 'stepManagement', 'groupTitle': 'Manage steps' },
                { 'id': 'add-step-after', 'label': 'Add step after', 'group': 'stepManagement', 'groupTitle': 'Manage steps' },
                {
                    'id': 'add-breakpoint',
                    'label': 'Add breakpoint',
                    'group': 'breakPointManagement',
                    'groupTitle': 'Breakpoints',
                },
                { 'id': 'copy-step-as-json', 'label': 'JSON', 'group': 'copy', 'groupTitle': 'Copy as' },
            ]);
        });
        it('should produce actions for a section', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            await createStepView(viewFunction, { section });
            assert.deepStrictEqual(getViewInput().actions, [
                { 'id': 'add-step-after', 'label': 'Add step after', 'group': 'stepManagement', 'groupTitle': 'Manage steps' },
            ]);
        });
        it('should dispatch "AddStep before" events on steps', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-before'));
            const event = await eventPromise;
            assert.strictEqual(event.position, 'before');
            assert.deepStrictEqual(event.stepOrSection, step);
        });
        it('should dispatch "AddStep before" events on sections', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { section });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-before'));
            const event = await eventPromise;
            assert.strictEqual(event.position, 'before');
            assert.deepStrictEqual(event.stepOrSection, section);
        });
        it('should dispatch "AddStep after" events on steps', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addstep');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-step-after'));
            const event = await eventPromise;
            assert.strictEqual(event.position, 'after');
            assert.deepStrictEqual(event.stepOrSection, step);
        });
        it('should dispatch "Remove steps" events on steps', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removestep');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('remove-step'));
            const event = await eventPromise;
            assert.deepStrictEqual(event.step, step);
        });
        it('should dispatch "Add breakpoint" event on steps', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addbreakpoint');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('add-breakpoint'));
            const event = await eventPromise;
            assert.deepStrictEqual(event.index, 0);
        });
        it('should dispatch "Remove breakpoint" event on steps', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removebreakpoint');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('remove-breakpoint'));
            const event = await eventPromise;
            assert.deepStrictEqual(event.index, 0);
        });
        it('should dispatch copy step as JSON events', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'copystep');
            getViewInput().handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_2__.Menu.MenuItemSelectedEvent('copy-step-as-json'));
            await eventPromise;
        });
    });
    describe('Breakpoint events', () => {
        it('should dispatch "Add breakpoint" event on breakpoint icon click if there is not a breakpoint on the step', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'addbreakpoint');
            getViewInput().onBreakpointClick();
            const event = await eventPromise;
            assert.deepStrictEqual(event.index, 0);
        });
        it('should dispatch "Remove breakpoint" event on breakpoint icon click if there already is a breakpoint on the step', async () => {
            const { viewFunction, getViewInput } = createViewFunctionSpy();
            const component = await createStepView(viewFunction, { hasBreakpoint: true, step });
            const eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'removebreakpoint');
            getViewInput().onBreakpointClick();
            const event = await eventPromise;
            assert.deepStrictEqual(event.index, 0);
        });
    });
});
//# sourceMappingURL=StepView.test.js.map

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

/***/ })

}]);