"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_source_frame_ResourceSourceFrame_test_js"],{

/***/ "./ui/legacy/components/source_frame/ResourceSourceFrame.test.js":
/*!***********************************************************************!*\
  !*** ./ui/legacy/components/source_frame/ResourceSourceFrame.test.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class MockStreamingContentProvider {
    #contentURL;
    #contentType;
    #content;
    constructor(contentURL, contentType, initialContent) {
        this.#contentURL = contentURL;
        this.#contentType = contentType;
        this.#content = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StreamingContentData.StreamingContentData.from(initialContent);
    }
    async requestStreamingContent() {
        return this.#content;
    }
    async requestContentData() {
        return this.#content.content();
    }
    contentURL() {
        return this.#contentURL;
    }
    contentType() {
        return this.#contentType;
    }
    async requestContent() {
        return this.#content.content().asDeferedContent();
    }
    addChunk(chunk) {
        this.#content.addChunk(chunk);
    }
    searchInContent(_query, _caseSensitive, _isRegex) {
        throw new Error('Method not implemented.');
    }
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('ResourceSourceFrame', () => {
    it('updates the editor when a StreamingContentProvider changes', async () => {
        const contentProvider = new MockStreamingContentProvider('https://example.com/sse', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('', true, 'text/event-stream'));
        const resourceSourceFrame = new _source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ResourceSourceFrame.ResourceSourceFrame(contentProvider, 'text/event-stream');
        resourceSourceFrame.markAsRoot();
        resourceSourceFrame.show(document.body);
        const initialState = await new Promise(resolve => sinon.stub(resourceSourceFrame.textEditor, 'state').set(resolve));
        assert.strictEqual(initialState.doc.toString(), '');
        contentProvider.addChunk('Zm9v');
        const updatedState = await new Promise(resolve => sinon.stub(resourceSourceFrame.textEditor, 'state').set(resolve));
        assert.strictEqual(updatedState.doc.toString(), 'foo');
        resourceSourceFrame.detach();
    });
});
//# sourceMappingURL=ResourceSourceFrame.test.js.map

/***/ })

}]);