"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_source_frame_ResourceSourceFrame_test_ts"],{

/***/ "./src/ui/legacy/components/source_frame/ResourceSourceFrame.test.ts":
/*!***************************************************************************!*\
  !*** ./src/ui/legacy/components/source_frame/ResourceSourceFrame.test.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MockStreamingContentProvider_contentURL, _MockStreamingContentProvider_contentType, _MockStreamingContentProvider_content;




class MockStreamingContentProvider {
    constructor(contentURL, contentType, initialContent) {
        _MockStreamingContentProvider_contentURL.set(this, void 0);
        _MockStreamingContentProvider_contentType.set(this, void 0);
        _MockStreamingContentProvider_content.set(this, void 0);
        __classPrivateFieldSet(this, _MockStreamingContentProvider_contentURL, contentURL, "f");
        __classPrivateFieldSet(this, _MockStreamingContentProvider_contentType, contentType, "f");
        __classPrivateFieldSet(this, _MockStreamingContentProvider_content, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.StreamingContentData.StreamingContentData.from(initialContent), "f");
    }
    async requestStreamingContent() {
        return __classPrivateFieldGet(this, _MockStreamingContentProvider_content, "f");
    }
    async requestContentData() {
        return __classPrivateFieldGet(this, _MockStreamingContentProvider_content, "f").content();
    }
    contentURL() {
        return __classPrivateFieldGet(this, _MockStreamingContentProvider_contentURL, "f");
    }
    contentType() {
        return __classPrivateFieldGet(this, _MockStreamingContentProvider_contentType, "f");
    }
    async requestContent() {
        return __classPrivateFieldGet(this, _MockStreamingContentProvider_content, "f").content().asDeferedContent();
    }
    addChunk(chunk) {
        __classPrivateFieldGet(this, _MockStreamingContentProvider_content, "f").addChunk(chunk);
    }
    searchInContent(_query, _caseSensitive, _isRegex) {
        throw new Error('Method not implemented.');
    }
}
_MockStreamingContentProvider_contentURL = new WeakMap(), _MockStreamingContentProvider_contentType = new WeakMap(), _MockStreamingContentProvider_content = new WeakMap();
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


/***/ })

}]);