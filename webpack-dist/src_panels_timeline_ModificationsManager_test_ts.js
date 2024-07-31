"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_ModificationsManager_test_ts"],{

/***/ "./src/panels/timeline/ModificationsManager.test.ts":
/*!**********************************************************!*\
  !*** ./src/panels/timeline/ModificationsManager.test.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('ModificationsManager', () => {
    it('applies modifications when present in a trace file', async function () {
        await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-modifications.json.gz');
        const modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
        if (!modificationsManager) {
            throw new Error('Modifications manager does not exist.');
        }
        const entriesFilter = modificationsManager.getEntriesFilter();
        assert.strictEqual(entriesFilter.expandableEntries().length, 1);
        assert.strictEqual(entriesFilter.invisibleEntries().length, 108);
        assert.deepEqual(modificationsManager.getTimelineBreadcrumbs().initialBreadcrumb, {
            'window': { 'min': 1020034823047, 'max': 1020036087961, 'range': 1264914 },
            'child': { 'window': { 'min': 1020034823047, 'max': 1020035228006.5569, 'range': 404959.5568847656 }, 'child': null },
        });
    });
    it('generates a serializable modifications json ', async function () {
        await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-modifications.json.gz');
        const modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
        if (!modificationsManager) {
            throw new Error('Modifications manager does not exist.');
        }
        const entriesFilter = modificationsManager.getEntriesFilter();
        const modifications = modificationsManager.toJSON();
        assert.strictEqual(entriesFilter.expandableEntries().length, 1);
        assert.strictEqual(modifications.entriesModifications.expandableEntries.length, 1);
        assert.strictEqual(modifications.entriesModifications.hiddenEntries.length, 108);
        assert.deepEqual(modifications.initialBreadcrumb, {
            'window': { 'min': 1020034823047, 'max': 1020036087961, 'range': 1264914 },
            'child': { 'window': { 'min': 1020034823047, 'max': 1020035228006.5569, 'range': 404959.5568847656 }, 'child': null },
        });
        assert.deepEqual(modifications.annotations, {
            entryLabels: [{
                    'entry': 'p-73704-775-2151-457',
                    'label': 'Initialize App',
                }],
        });
    });
    it('creates an annotation and generates correct json for annotations', async function () {
        const traceParsedData = (await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-with-commit.json.gz')).traceData;
        // Get any entry to create a label with.
        const entry = traceParsedData.Renderer.allTraceEntries[0];
        const modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
        assert.isOk(modificationsManager);
        modificationsManager.createAnnotation({
            type: 'ENTRY_LABEL',
            entry,
            label: 'entry label',
        });
        const modifications = modificationsManager.toJSON().annotations;
        assert.deepEqual(modifications, {
            entryLabels: [{
                    entry: 'r-38',
                    label: 'entry label',
                }],
        });
    });
});


/***/ })

}]);