"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_visual_logging_LoggingConfig_test_js"],{

/***/ "./ui/visual_logging/LoggingConfig.test.js":
/*!*************************************************!*\
  !*** ./ui/visual_logging/LoggingConfig.test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('LoggingConfig', () => {
    let element;
    beforeEach(() => {
        element = document.createElement('div');
    });
    it('identifies if element needs logging', () => {
        assert.isFalse(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.needsLogging(element));
        element.setAttribute('jslog', 'TreeItem');
        assert.isTrue(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.needsLogging(element));
    });
    describe('reads simple logging config', () => {
        it('for TreeItem', () => {
            element.setAttribute('jslog', 'TreeItem');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 1);
        });
        it('for TextField', () => {
            element.setAttribute('jslog', 'TextField');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 8);
        });
        it('for Action', () => {
            element.setAttribute('jslog', 'Action');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 29);
        });
        it('for Preview', () => {
            element.setAttribute('jslog', 'Preview');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 35);
        });
        it('for Panel', () => {
            element.setAttribute('jslog', 'Panel');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 48);
        });
        it('for TableHeader', () => {
            element.setAttribute('jslog', 'TableHeader');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 69);
        });
        it('for TableCell', () => {
            element.setAttribute('jslog', 'TableCell');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.ve, 70);
        });
    });
    it('throws on unknown visual element', () => {
        element.setAttribute('jslog', 'NonExistentVisualElement');
        assert.throws(() => _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element));
    });
    it('can parse complex track attribute', () => {
        element.setAttribute('jslog', 'TreeItem; track:click, keydown: :|Enter; context:42');
        const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
        assert.deepEqual(config.track, { click: true, keydown: ':|Enter' });
    });
    describe('can parse simple context attribute', () => {
        it('for TreeItem', () => {
            element.setAttribute('jslog', 'TreeItem;context:42');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.context, '42');
        });
        it('for Action', () => {
            element.setAttribute('jslog', 'Action;context:console.clear');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.context, 'console.clear');
        });
        it('for Panel', () => {
            element.setAttribute('jslog', 'Panel;context:developer-resources');
            const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
            assert.strictEqual(config.context, 'developer-resources');
        });
    });
    it('can parse parent attribute', () => {
        element.setAttribute('jslog', 'TreeItem;parent:customProvider');
        const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
        assert.strictEqual(config.parent, 'customProvider');
    });
    it('ignores whitespaces while parsing', () => {
        element.setAttribute('jslog', 'TreeItem;     context:   42');
        const config = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.getLoggingConfig(element);
        assert.strictEqual(config.context, '42');
    });
    it('builds a string config', () => {
        const treeItem = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.LoggingConfig.makeConfigStringBuilder.bind(null, 'TreeItem');
        assert.strictEqual(`${treeItem()}`, 'TreeItem');
        assert.strictEqual(`${treeItem().context(42)}`, 'TreeItem; context: 42');
        assert.strictEqual(`${treeItem().track({ click: true })}`, 'TreeItem; track: click');
        assert.strictEqual(`${treeItem().track({ click: true, change: true })}`, 'TreeItem; track: click, change');
        assert.strictEqual(`${treeItem().track({ keydown: 'Enter' })}`, 'TreeItem; track: keydown: Enter');
        assert.strictEqual(`${treeItem().context(42).track({ keydown: 'Enter' })}`, 'TreeItem; context: 42; track: keydown: Enter');
    });
});
//# sourceMappingURL=LoggingConfig.test.js.map

/***/ }),

/***/ "./ui/visual_logging/visual_logging-testing.js":
/*!*****************************************************!*\
  !*** ./ui/visual_logging/visual_logging-testing.js ***!
  \*****************************************************/
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
/* harmony import */ var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */ var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */ var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */ var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */ var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */ var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */ var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=visual_logging-testing.js.map

/***/ })

}]);