"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_visual_logging_LoggingState_test_ts"],{

/***/ "./src/testing/VisualLoggingHelpers.ts":
/*!*********************************************!*\
  !*** ./src/testing/VisualLoggingHelpers.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVeId: () => (/* binding */ getVeId)
/* harmony export */ });
/* harmony import */ var _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/visual_logging/visual_logging-testing.js */ "./src/ui/visual_logging/visual_logging-testing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getVeId(loggable) {
    if (typeof loggable === 'string') {
        loggable = document.querySelector(loggable);
    }
    return _ui_visual_logging_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingState.getLoggingState(loggable).veid;
}


/***/ }),

/***/ "./src/ui/visual_logging/LoggingState.test.ts":
/*!****************************************************!*\
  !*** ./src/ui/visual_logging/LoggingState.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/VisualLoggingHelpers.js */ "./src/testing/VisualLoggingHelpers.ts");
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./src/ui/visual_logging/visual_logging-testing.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('LoggingState', () => {
    let parent;
    let element;
    beforeEach(() => {
        parent = document.createElement('div');
        element = document.createElement('div');
    });
    it('getOrCreateLoggingState creates state entry on demand', () => {
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(parent, { ve: 1 });
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, context: '42' }, parent);
        assert.deepEqual(state, {
            impressionLogged: false,
            config: { ve: 1, context: '42' },
            veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getVeId)(element),
            processed: false,
            size: new DOMRect(0, 0, 0, 0),
            parent: {
                impressionLogged: false,
                config: { ve: 1 },
                veid: (0,_testing_VisualLoggingHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getVeId)(parent),
                processed: false,
                parent: null,
                size: new DOMRect(0, 0, 0, 0),
            },
        });
    });
    it('getOrCreateLoggingState and getLoggingState return the same object for the same element', () => {
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, context: '42' }, parent);
        assert.strictEqual(state, _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, context: '42' }, parent));
        assert.strictEqual(state, _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getLoggingState(element));
    });
    it('can update parent', () => {
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(parent, { ve: 1, context: '21' }, undefined);
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, context: '42' }, parent);
        assert.strictEqual(state.parent, _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getLoggingState(parent));
        const newParent = document.createElement('div');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(parent, { ve: 1, context: '84' }, undefined);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, context: '42' }, newParent);
        assert.strictEqual(state.parent, _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getLoggingState(newParent));
    });
    it('getLoggingState returns null for unknown element', () => {
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getLoggingState(element));
    });
    it('uses a custom parent provider', async () => {
        const provider = sinon.stub();
        const customParent = document.createElement('div');
        customParent.setAttribute('jslog', '<not important>');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(customParent, { ve: 1, context: '123' });
        provider.returns(customParent);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.registerParentProvider('custom', provider);
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, parent: 'custom' });
        assert.isTrue(provider.calledOnceWith(element));
        assert.strictEqual('123', await state.parent?.config.context);
    });
    it('uses a mapped parent', async () => {
        const customParent = document.createElement('div');
        customParent.setAttribute('jslog', '<not important>');
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(customParent, { ve: 1, context: '123' });
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.setMappedParent(element, customParent);
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, parent: 'custom' });
        assert.strictEqual('123', await state.parent?.config?.context);
    });
    it('walks the DOM upwards to find the parent loggable', async () => {
        const provider = sinon.stub();
        const container = document.createElement('div');
        container.innerHTML = `
      <div id="loggable" jslog="Pane">
        <div id="providedByParentProvider"></div>
      </div>
    `;
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(container.querySelector('#loggable'), { ve: 1, context: '123' });
        provider.returns(container.querySelector('#providedByParentProvider'));
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.registerParentProvider('custom2', provider);
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, parent: 'custom2' });
        assert.isTrue(provider.calledOnceWith(element));
        assert.strictEqual('123', await state.parent?.config.context);
    });
    it('walks across shadow roots to find the parent loggable', async () => {
        const provider = sinon.stub();
        const container = document.createElement('div');
        container.innerHTML = `
      <div id="loggable" jslog="Pane">
        <div id="shadow"></div>
      </div>
    `;
        const shadow = container.querySelector('#shadow')?.attachShadow({ mode: 'open' });
        const shadowContent = document.createElement('div');
        shadowContent.innerHTML = '<div id="providedByParentProvider"></div>';
        shadow?.appendChild(shadowContent);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(container.querySelector('#loggable'), { ve: 1, context: '123' });
        provider.returns(shadowContent.querySelector('#providedByParentProvider'));
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.registerParentProvider('custom3', provider);
        const state = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.LoggingState.getOrCreateLoggingState(element, { ve: 1, parent: 'custom3' });
        assert.isTrue(provider.calledOnceWith(element));
        assert.strictEqual('123', await state.parent?.config.context);
    });
});


/***/ }),

/***/ "./src/ui/visual_logging/visual_logging-testing.ts":
/*!*********************************************************!*\
  !*** ./src/ui/visual_logging/visual_logging-testing.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debugging: () => (/* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DomState: () => (/* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LoggingConfig: () => (/* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LoggingDriver: () => (/* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LoggingEvents: () => (/* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LoggingState: () => (/* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   NonDomState: () => (/* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./src/ui/visual_logging/Debugging.ts");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./src/ui/visual_logging/DomState.ts");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./src/ui/visual_logging/LoggingConfig.ts");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./src/ui/visual_logging/LoggingDriver.ts");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./src/ui/visual_logging/LoggingEvents.ts");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./src/ui/visual_logging/LoggingState.ts");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./src/ui/visual_logging/NonDomState.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










/***/ })

}]);