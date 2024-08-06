"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_javascript_metadata_JavaScriptMetadata_test_js"], {
"./models/javascript_metadata/JavaScriptMetadata.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _javascript_metadata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascript_metadata.js */ "./models/javascript_metadata/javascript_metadata.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('JavaScriptMetadata', function() {
    var metadata;
    before(function() {
        metadata = new _javascript_metadata_js__WEBPACK_IMPORTED_MODULE_0__.JavaScriptMetadata.JavaScriptMetadataImpl();
    });
    it('retrieves native signature by name', function() {
        var signatures = metadata.signaturesForNativeFunction('webkitRequestFullScreen');
        assert.deepEqual(signatures, [
            [
                '?options'
            ]
        ]);
    });
    it('does not retrieve native signatures that are bound to an instance', function() {
        var signatures = metadata.signaturesForNativeFunction('find');
        assert.deepEqual(signatures, null);
    });
    describe('with static methods', function() {
        it('retrieves by name and class', function() {
            var signatures = metadata.signaturesForStaticMethod('from', 'Array');
            assert.deepEqual(signatures, [
                [
                    'iterable',
                    '?mapfn',
                    '?thisArg'
                ],
                [
                    'arrayLike',
                    '?mapfn',
                    '?thisArg'
                ]
            ]);
        });
        it('does not retrieve methods that are bound to an instance', function() {
            var signatures = metadata.signaturesForStaticMethod('includes', 'Array');
            assert.deepEqual(signatures, null);
        });
        it('handles a non-existing class', function() {
            var signatures = metadata.signaturesForStaticMethod('includes', 'bogus');
            assert.deepEqual(signatures, null);
        });
    });
    describe('with instance methods', function() {
        it('retrieves by name and class', function() {
            var signatures = metadata.signaturesForInstanceMethod('assign', 'HTMLSlotElement');
            assert.deepEqual(signatures, [
                [
                    '...nodes'
                ]
            ]);
        });
        it('does not retrieve methods that are unbound', function() {
            var signatures = metadata.signaturesForInstanceMethod('webkitRequestFullScreen', 'window');
            assert.deepEqual(signatures, null);
        });
        it('does not retrieve static methods', function() {
            var signatures = metadata.signaturesForInstanceMethod('from', 'Array');
            assert.deepEqual(signatures, null);
        });
        it('handles a non-existing class', function() {
            var signatures = metadata.signaturesForInstanceMethod('from', 'Sheep');
            assert.deepEqual(signatures, null);
        });
    });
}); //# sourceMappingURL=JavaScriptMetadata.test.js.map


}),

}]);