"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_survey_link_SurveyLink_test_js"], {
"./ui/components/survey_link/SurveyLink.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _survey_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey_link.js */ "./ui/components/survey_link/survey_link.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




function canShowSuccessfulCallback(trigger, callback) {
    callback({
        canShowSurvey: true
    });
}
function showSuccessfulCallback(trigger, callback) {
    callback({
        surveyShown: true
    });
}
function canShowFailureCallback(trigger, callback) {
    callback({
        canShowSurvey: false
    });
}
function showFailureCallback(trigger, callback) {
    callback({
        surveyShown: false
    });
}
var empty = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('SurveyLink', function() {
    it('shows no link when canShowSurvey is still pending', function() {
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: function() {},
            showSurvey: function() {}
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        assert.strictEqual(link.shadowRoot.childElementCount, 0);
    });
    it('shows no link when canShowSurvey is false', function() {
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowFailureCallback,
            showSurvey: function() {}
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        assert.strictEqual(link.shadowRoot.childElementCount, 0);
    });
    it('shows a link when canShowSurvey is true', function() {
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: function() {}
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        var linkNode = link.shadowRoot.querySelector('button');
        assert.isNotNull(linkNode);
    });
    it('shows a pending state when trying to show the survey', function() {
        var _linkNode_textContent, _pendingLink_textContent;
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: function() {}
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        var linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        assert.notInclude((_linkNode_textContent = linkNode.textContent) === null || _linkNode_textContent === void 0 ? void 0 : _linkNode_textContent.trim(), '…');
        linkNode.click();
        // The only output signal we have is the link text which we don't want to assert exactly, so we
        // assume that the pending state has an elipsis.
        var pendingLink = link.shadowRoot.querySelector('button');
        assert.exists(pendingLink);
        assert.include((_pendingLink_textContent = pendingLink.textContent) === null || _pendingLink_textContent === void 0 ? void 0 : _pendingLink_textContent.trim(), '…');
    });
    it('shows a successful state after showing the survey', function() {
        var _successLink_textContent;
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: showSuccessfulCallback
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        var linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        linkNode.click();
        var successLink = link.shadowRoot.querySelector('button');
        assert.exists(successLink);
        assert.include((_successLink_textContent = successLink.textContent) === null || _successLink_textContent === void 0 ? void 0 : _successLink_textContent.trim(), 'Thank you');
    });
    it('shows a failure state when failing to show the survey', function() {
        var _successLink_textContent;
        var link = new _survey_link_js__WEBPACK_IMPORTED_MODULE_3__.SurveyLink.SurveyLink();
        link.data = {
            trigger: 'test trigger',
            promptText: empty,
            canShowSurvey: canShowSuccessfulCallback,
            showSurvey: showFailureCallback
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(link);
        assert.isNotNull(link.shadowRoot);
        var linkNode = link.shadowRoot.querySelector('button');
        assert.exists(linkNode);
        linkNode.click();
        var successLink = link.shadowRoot.querySelector('button');
        assert.exists(successLink);
        assert.include((_successLink_textContent = successLink.textContent) === null || _successLink_textContent === void 0 ? void 0 : _successLink_textContent.trim(), 'error');
    });
}); //# sourceMappingURL=SurveyLink.test.js.map


}),
"./ui/components/survey_link/survey_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SurveyLink: function() { return /* reexport module object */ _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SurveyLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SurveyLink.js */ "./ui/components/survey_link/SurveyLink.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=survey_link.js.map


}),

}]);