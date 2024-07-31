"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_text_utils_StreamingContentData_test_ts"],{

/***/ "./src/models/text_utils/StreamingContentData.test.ts":
/*!************************************************************!*\
  !*** ./src/models/text_utils/StreamingContentData.test.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./src/models/text_utils/text_utils.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('StreamingContentData', () => {
    it('notifies listeners when new chunks are added', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        const events = [];
        streamingContentData.addEventListener(_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.Events.ChunkAdded, ({ data }) => events.push(data));
        streamingContentData.addChunk('Zm9v');
        assert.lengthOf(events, 1);
        assert.strictEqual(events[0].content, streamingContentData);
        assert.strictEqual(events[0].chunk, 'Zm9v');
        streamingContentData.addChunk('YmFy');
        assert.lengthOf(events, 2);
        assert.strictEqual(events[1].content, streamingContentData);
        assert.strictEqual(events[1].chunk, 'YmFy');
    });
    it('provides a ContentData of all the received content so far', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        streamingContentData.addChunk('YmFy');
        const contentData = streamingContentData.content();
        assert.strictEqual(contentData.text, 'foobar');
    });
    it('provides the same content when calling "content" repeatedly (checks caching)', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        streamingContentData.addChunk('YmFy');
        const contentData1 = streamingContentData.content();
        assert.strictEqual(contentData1.text, 'foobar');
        const contentData2 = streamingContentData.content();
        assert.strictEqual(contentData2.text, 'foobar');
    });
    it('leaves previously returned ContentData alone after receiving a new chunk', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        const contentData1 = streamingContentData.content();
        assert.strictEqual(contentData1.text, 'foo');
        streamingContentData.addChunk('YmFy');
        assert.strictEqual(contentData1.text, 'foo');
        const contentData2 = streamingContentData.content();
        assert.strictEqual(contentData2.text, 'foobar');
    });
    it('throws an error when calling addChunk on a text-only ContentData', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('foo', false, 'text/plain'));
        assert.throws((() => streamingContentData.addChunk('YmFy')));
    });
    it('returns the provided content when created from a ContentDat', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('foo', false, 'text/plain'));
        assert.strictEqual(streamingContentData.content().text, 'foo');
    });
    it('can concatenate if the inital ContentData was base64', () => {
        const streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('Zm9v', true, 'text/plain'));
        streamingContentData.addChunk('YmFy');
        assert.strictEqual(streamingContentData.content().text, 'foobar');
    });
});


/***/ })

}]);