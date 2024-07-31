"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_models_Section_test_ts"],{

/***/ "./src/panels/recorder/models/Section.test.ts":
/*!****************************************************!*\
  !*** ./src/panels/recorder/models/Section.test.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ "./src/panels/recorder/models/models.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Section', () => {
    describe('buildSections', () => {
        const buildSections = _models_js__WEBPACK_IMPORTED_MODULE_0__.Section.buildSections;
        function makeStep() {
            return { type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll };
        }
        function makeNavigateStep() {
            return {
                type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Navigate,
                url: 'https://example.com',
                assertedEvents: [
                    {
                        type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.AssertedEventType.Navigation,
                        url: 'https://example.com',
                        title: 'Test',
                    },
                ],
            };
        }
        function makeStepCausingNavigation() {
            return {
                type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll,
                assertedEvents: [
                    {
                        type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.AssertedEventType.Navigation,
                        url: 'https://example.com',
                        title: 'Test',
                    },
                ],
            };
        }
        it('should build not sections for empty steps', () => {
            assert.deepStrictEqual(buildSections([]), []);
        });
        it('should build a current page section for initial steps that do not cause navigation', () => {
            const step1 = makeStep();
            const step2 = makeStep();
            assert.deepStrictEqual(buildSections([step1, step2]), [
                { title: 'Current page', url: '', steps: [step1, step2] },
            ]);
        });
        it('should build a current page section for initial steps that cause navigation', () => {
            {
                const step1 = makeNavigateStep();
                const step2 = makeStep();
                assert.deepStrictEqual(buildSections([step1, step2]), [
                    {
                        title: 'Test',
                        url: 'https://example.com',
                        steps: [step2],
                        causingStep: step1,
                    },
                ]);
            }
            {
                const step1 = makeStepCausingNavigation();
                const step2 = makeStep();
                assert.deepStrictEqual(buildSections([step1, step2]), [
                    { title: 'Current page', url: '', steps: [step1] },
                    { title: 'Test', url: 'https://example.com', steps: [step2] },
                ]);
            }
        });
        it('should generate multiple sections', () => {
            const step1 = makeStep();
            const step2 = makeNavigateStep();
            const step3 = makeStep();
            const step4 = makeStepCausingNavigation();
            const step5 = makeStep();
            assert.deepStrictEqual(buildSections([step1, step2, step3, step4, step5]), [
                { title: 'Current page', url: '', steps: [step1, step2] },
                {
                    title: 'Test',
                    url: 'https://example.com',
                    steps: [step3, step4],
                    causingStep: step2,
                },
                { title: 'Test', url: 'https://example.com', steps: [step5] },
            ]);
        });
    });
});


/***/ })

}]);