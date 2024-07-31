"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_View_test_ts"],{

/***/ "./src/ui/legacy/View.test.ts":
/*!************************************!*\
  !*** ./src/ui/legacy/View.test.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('View', () => {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TabbedViewLocation', () => {
        let tabbedLocation;
        let viewManager;
        before(async () => {
            ['first', 'second', 'third', 'fourth'].forEach(title => {
                _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.registerViewExtension({
                    // @ts-ignore
                    location: 'mock-location',
                    id: title,
                    title: () => title,
                    commandPrompt: () => title,
                    persistence: _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewPersistence.CLOSEABLE,
                    async loadView() {
                        return new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget();
                    },
                });
            });
            viewManager = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance({ forceNew: true });
            tabbedLocation = viewManager.createTabbedLocation(undefined, 'mock-location', true, true);
        });
        it('Creates an empty tabbed location', () => {
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), []);
        });
        it('Adds a tab for a selected view', () => {
            void viewManager.showView('first');
            void viewManager.showView('second');
            void viewManager.showView('third');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), ['first', 'second', 'third']);
        });
        it('Prepends a tab correctly', () => {
            const thirdTab = tabbedLocation.tabbedPane().tabsById.get('third');
            if (!thirdTab) {
                throw new Error('Could not find a tab');
            }
            tabbedLocation.tabbedPane().insertBefore(thirdTab, 0);
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), ['third', 'first', 'second']);
        });
        it('Appends a tab correctly', () => {
            void viewManager.showView('fourth');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), ['third', 'first', 'second', 'fourth']);
        });
        it('Closes a tab correctly', () => {
            tabbedLocation.tabbedPane().closeTab('second');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), ['third', 'first', 'fourth']);
        });
    });
});


/***/ })

}]);