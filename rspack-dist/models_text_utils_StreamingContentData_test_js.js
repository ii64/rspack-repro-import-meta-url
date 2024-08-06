"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_StreamingContentData_test_js"], {
"./models/text_utils/StreamingContentData.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('StreamingContentData', function() {
    it('notifies listeners when new chunks are added', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        var events = [];
        streamingContentData.addEventListener("ChunkAdded" /* TextUtils.StreamingContentData.Events.ChunkAdded */ , function(param) {
            var data = param.data;
            return events.push(data);
        });
        streamingContentData.addChunk('Zm9v');
        assert.lengthOf(events, 1);
        assert.strictEqual(events[0].content, streamingContentData);
        assert.strictEqual(events[0].chunk, 'Zm9v');
        streamingContentData.addChunk('YmFy');
        assert.lengthOf(events, 2);
        assert.strictEqual(events[1].content, streamingContentData);
        assert.strictEqual(events[1].chunk, 'YmFy');
    });
    it('provides a ContentData of all the received content so far', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        streamingContentData.addChunk('YmFy');
        var contentData = streamingContentData.content();
        assert.strictEqual(contentData.text, 'foobar');
    });
    it('provides the same content when calling "content" repeatedly (checks caching)', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        streamingContentData.addChunk('YmFy');
        var contentData1 = streamingContentData.content();
        assert.strictEqual(contentData1.text, 'foobar');
        var contentData2 = streamingContentData.content();
        assert.strictEqual(contentData2.text, 'foobar');
    });
    it('leaves previously returned ContentData alone after receiving a new chunk', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.create('text/plain', 'utf-8');
        streamingContentData.addChunk('Zm9v');
        var contentData1 = streamingContentData.content();
        assert.strictEqual(contentData1.text, 'foo');
        streamingContentData.addChunk('YmFy');
        assert.strictEqual(contentData1.text, 'foo');
        var contentData2 = streamingContentData.content();
        assert.strictEqual(contentData2.text, 'foobar');
    });
    it('throws an error when calling addChunk on a text-only ContentData', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('foo', false, 'text/plain'));
        assert.throws(function() {
            return streamingContentData.addChunk('YmFy');
        });
    });
    it('returns the provided content when created from a ContentDat', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('foo', false, 'text/plain'));
        assert.strictEqual(streamingContentData.content().text, 'foo');
    });
    it('can concatenate if the inital ContentData was base64', function() {
        var streamingContentData = _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.StreamingContentData.StreamingContentData.from(new _text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData('Zm9v', true, 'text/plain'));
        streamingContentData.addChunk('YmFy');
        assert.strictEqual(streamingContentData.content().text, 'foobar');
    });
}); //# sourceMappingURL=StreamingContentData.test.js.map


}),

}]);