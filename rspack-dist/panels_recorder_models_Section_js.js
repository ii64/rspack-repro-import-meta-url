"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_Section_js"], {
"./panels/recorder/models/Section.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildSections: function() { return buildSections; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function startNewSection(step) {
    var _step_assertedEvents;
    var navigationEvent = (_step_assertedEvents = step.assertedEvents) === null || _step_assertedEvents === void 0 ? void 0 : _step_assertedEvents.find(function(event) {
        return event.type === 'navigation';
    });
    if (step.type === 'navigate') {
        return {
            title: (navigationEvent === null || navigationEvent === void 0 ? void 0 : navigationEvent.title) || '',
            url: step.url,
            steps: [],
            causingStep: step
        };
    }
    if (navigationEvent) {
        return {
            title: navigationEvent.title || '',
            url: navigationEvent.url || '',
            steps: []
        };
    }
    return null;
}
function buildSections(steps) {
    var currentSection = null;
    var sections = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var step = _step.value;
            if (currentSection) {
                currentSection.steps.push(step);
            } else if (step.type === 'navigate') {
                currentSection = startNewSection(step);
                continue;
            } else {
                currentSection = {
                    title: 'Current page',
                    url: '',
                    steps: [
                        step
                    ]
                };
            }
            var nextSection = startNewSection(step);
            if (nextSection) {
                if (currentSection) {
                    sections.push(currentSection);
                }
                currentSection = nextSection;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    if (currentSection && (!sections.length || currentSection.steps.length)) {
        sections.push(currentSection);
    }
    return sections;
} //# sourceMappingURL=Section.js.map


}),

}]);