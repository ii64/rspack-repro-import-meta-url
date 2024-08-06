"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_Section_test_js"], {
"./panels/recorder/models/Section.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Section', function() {
    describe('buildSections', function() {
        var makeStep = function makeStep() {
            return {
                type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll
            };
        };
        var makeNavigateStep = function makeNavigateStep() {
            return {
                type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Navigate,
                url: 'https://example.com',
                assertedEvents: [
                    {
                        type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.AssertedEventType.Navigation,
                        url: 'https://example.com',
                        title: 'Test'
                    }
                ]
            };
        };
        var makeStepCausingNavigation = function makeStepCausingNavigation() {
            return {
                type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.StepType.Scroll,
                assertedEvents: [
                    {
                        type: _models_js__WEBPACK_IMPORTED_MODULE_0__.Schema.AssertedEventType.Navigation,
                        url: 'https://example.com',
                        title: 'Test'
                    }
                ]
            };
        };
        var buildSections = _models_js__WEBPACK_IMPORTED_MODULE_0__.Section.buildSections;
        it('should build not sections for empty steps', function() {
            assert.deepStrictEqual(buildSections([]), []);
        });
        it('should build a current page section for initial steps that do not cause navigation', function() {
            var step1 = makeStep();
            var step2 = makeStep();
            assert.deepStrictEqual(buildSections([
                step1,
                step2
            ]), [
                {
                    title: 'Current page',
                    url: '',
                    steps: [
                        step1,
                        step2
                    ]
                }
            ]);
        });
        it('should build a current page section for initial steps that cause navigation', function() {
            {
                var step1 = makeNavigateStep();
                var step2 = makeStep();
                assert.deepStrictEqual(buildSections([
                    step1,
                    step2
                ]), [
                    {
                        title: 'Test',
                        url: 'https://example.com',
                        steps: [
                            step2
                        ],
                        causingStep: step1
                    }
                ]);
            }
            {
                var step11 = makeStepCausingNavigation();
                var step21 = makeStep();
                assert.deepStrictEqual(buildSections([
                    step11,
                    step21
                ]), [
                    {
                        title: 'Current page',
                        url: '',
                        steps: [
                            step11
                        ]
                    },
                    {
                        title: 'Test',
                        url: 'https://example.com',
                        steps: [
                            step21
                        ]
                    }
                ]);
            }
        });
        it('should generate multiple sections', function() {
            var step1 = makeStep();
            var step2 = makeNavigateStep();
            var step3 = makeStep();
            var step4 = makeStepCausingNavigation();
            var step5 = makeStep();
            assert.deepStrictEqual(buildSections([
                step1,
                step2,
                step3,
                step4,
                step5
            ]), [
                {
                    title: 'Current page',
                    url: '',
                    steps: [
                        step1,
                        step2
                    ]
                },
                {
                    title: 'Test',
                    url: 'https://example.com',
                    steps: [
                        step3,
                        step4
                    ],
                    causingStep: step2
                },
                {
                    title: 'Test',
                    url: 'https://example.com',
                    steps: [
                        step5
                    ]
                }
            ]);
        });
    });
}); //# sourceMappingURL=Section.test.js.map


}),

}]);