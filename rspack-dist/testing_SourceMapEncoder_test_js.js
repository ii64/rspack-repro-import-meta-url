"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_SourceMapEncoder_test_js"], {
"./testing/SourceMapEncoder.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SourceMapEncoder.js */ "./testing/SourceMapEncoder.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('SourceMapEncoder', function() {
    it('translates numbers to Base64 VLQ correctly', function() {
        assert.strictEqual(_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq(0), 'A');
        assert.strictEqual(_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq(-2), 'F');
        assert.strictEqual(_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq(41), 'yC');
        assert.strictEqual(_SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlq(-25), 'zB');
    });
    it('translates number lists correctly', function() {
        // Let us test the cases we care about in source maps.
        // Encoding of column-only mapping.
        assert.strictEqual('A', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            0
        ]));
        assert.strictEqual('oG', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            100
        ]));
        // Encoding of column => source:line:column mapping.
        assert.strictEqual('w+BoGUwM', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            1000,
            100,
            10,
            200
        ]));
        assert.strictEqual('DFHJ', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            -1,
            -2,
            -3,
            -4
        ]));
        // Encoding of column => source:line:column@name mapping.
        assert.strictEqual('CEGIK', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            1,
            2,
            3,
            4,
            5
        ]));
        assert.strictEqual('qGsGuGwGyG', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeVlqList([
            101,
            102,
            103,
            104,
            105
        ]));
    });
    it('can encode trivial source maps correctly', function() {
        // Test trivial cases.
        assert.deepEqual({
            sources: [],
            names: [],
            mappings: 'A',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0'
        ]));
        assert.deepEqual({
            sources: [
                'a.js'
            ],
            names: [],
            mappings: 'AAAA',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0'
        ]));
        assert.deepEqual({
            sources: [
                'a.js'
            ],
            names: [
                'b'
            ],
            mappings: 'AAAAA',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0@b'
        ]));
    });
    it('can encode multiple lines correctly', function() {
        // Next line encoding.
        assert.strictEqual('AAAA;AACA', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0',
            '1:0 => a.js:1:0'
        ]).mappings);
        assert.strictEqual('A;A', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0',
            '1:0'
        ]).mappings);
        // Skipping lines.
        assert.strictEqual(';A;;;A', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '1:0',
            '4:0'
        ]).mappings);
        assert.strictEqual(';AACA;;;AAEA', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '1:0 => a.js:1:0',
            '4:0 => a.js:3:0'
        ]).mappings);
    });
    it('can encode relative offset mappings correctly', function() {
        // Relative columns.
        assert.strictEqual('AAAA,EAAI,IAAD', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0',
            '0:2 => a.js:0:4',
            '0:6 => a.js:0:3'
        ]).mappings);
        // Reset after new line.
        assert.strictEqual('AAAA,EAAC;MAAE', _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0',
            '0:2 => a.js:0:1',
            '1:6 => a.js:0:3'
        ]).mappings);
        // Relative source, source line and source column.
        assert.deepEqual({
            sources: [
                'a.js',
                'b.js',
                'c.js'
            ],
            names: [],
            mappings: 'CACC;CCEC;CCFC;CDAH',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:1 => a.js:1:1',
            '1:1 => b.js:3:2',
            '2:1 => c.js:1:3',
            '3:1 => b.js:1:0'
        ]));
    });
    it('can encode names correctly', function() {
        assert.deepEqual({
            sources: [
                'a.js'
            ],
            names: [
                'a',
                'b',
                'c'
            ],
            mappings: 'AAAAA;AACAC;AACAC;AACAF',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            '0:0 => a.js:0:0@a',
            '1:0 => a.js:1:0@b',
            '2:0 => a.js:2:0@c',
            '3:0 => a.js:3:0@a'
        ]));
    });
    it('can encode small realistic samples correctly', function() {
        assert.deepEqual({
            sources: [
                'example.js'
            ],
            names: [
                'a',
                'b',
                'c',
                'd'
            ],
            mappings: 'AAASA,QAAAA,IAAG,CAACC,CAAD,CAAaC,CAAb,CACZ,CACI,MAAOD,EAAP,CAAoBC,CADxB,CAIA,IAAIC,OAAS;A',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            // clang-format off
            '0:0 => example.js:0:9@a',
            '0:8 => example.js:0:9@a',
            '0:12 => example.js:0:12',
            '0:13 => example.js:0:13@b',
            '0:14 => example.js:0:12',
            '0:15 => example.js:0:25@c',
            '0:16 => example.js:0:12',
            '0:17 => example.js:1:0',
            '0:18 => example.js:2:4',
            '0:24 => example.js:2:11@b',
            '0:26 => example.js:2:4',
            '0:27 => example.js:2:24@c',
            '0:28 => example.js:1:0',
            '0:29 => example.js:5:0',
            '0:33 => example.js:5:4@d',
            '0:40 => example.js:5:13',
            '1:0'
        ]));
        assert.deepEqual({
            sources: [
                'sourcemap-stepping-source.js'
            ],
            names: [],
            mappings: 'AAAA,oCAAoC;;AAEpC;GACG;GAAA;GAAA;GACA;GAAA;GAAA;GACA;GAAA;GAAA;;GAEA;AACH;;AAEA;GACG;GACA;GACA;;GAEA;AACH',
            version: 3
        }, _SourceMapEncoder_js__WEBPACK_IMPORTED_MODULE_0__.encodeSourceMap([
            // clang-format off
            '0:0 => sourcemap-stepping-source.js:0:0',
            '0:36 => sourcemap-stepping-source.js:0:36',
            '2:0 => sourcemap-stepping-source.js:2:0',
            '3:3 => sourcemap-stepping-source.js:3:3',
            '4:3 => sourcemap-stepping-source.js:3:3',
            '5:3 => sourcemap-stepping-source.js:3:3',
            '6:3 => sourcemap-stepping-source.js:4:3',
            '7:3 => sourcemap-stepping-source.js:4:3',
            '8:3 => sourcemap-stepping-source.js:4:3',
            '9:3 => sourcemap-stepping-source.js:5:3',
            '10:3 => sourcemap-stepping-source.js:5:3',
            '11:3 => sourcemap-stepping-source.js:5:3',
            '13:3 => sourcemap-stepping-source.js:7:3',
            '14:0 => sourcemap-stepping-source.js:8:0',
            '16:0 => sourcemap-stepping-source.js:10:0',
            '17:3 => sourcemap-stepping-source.js:11:3',
            '18:3 => sourcemap-stepping-source.js:12:3',
            '19:3 => sourcemap-stepping-source.js:13:3',
            '21:3 => sourcemap-stepping-source.js:15:3',
            '22:0 => sourcemap-stepping-source.js:16:0'
        ]));
    });
}); //# sourceMappingURL=SourceMapEncoder.test.js.map


}),

}]);