"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_protocol_client_NodeURL_test_js"], {
"./core/protocol_client/NodeURL.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../host/host.js */ "./core/host/host.js");
/* harmony import */var _protocol_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocol_client.js */ "./core/protocol_client/protocol_client.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('NodeURL', function() {
    describe('platform detection for paths', function() {
        it('works correctly on windows', function() {
            var isWindows = true;
            assert.isTrue(_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.isPlatformPath('c:\\prog\\foobar.js', isWindows));
            assert.isFalse(_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.isPlatformPath('/usr/local/foobar.js', isWindows));
        });
        it('works correctly on linux', function() {
            var isWindows = false;
            assert.isFalse(_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.isPlatformPath('c:\\prog\\foobar.js', isWindows));
            assert.isTrue(_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.isPlatformPath('/usr/local/foobar.js', isWindows));
        });
    });
    describe('patch', function() {
        var url = _host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isWin() ? 'C:\\prog\\foobar.js' : '/usr/local/home/prog/foobar.js';
        var validPatchedUrl = _host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isWin() ? 'file:///C:/prog/foobar.js' : 'file:///usr/local/home/prog/foobar.js';
        it('does patch url fields', function() {
            var object = {
                url: url,
                result: null
            };
            _protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.patch(object);
            assert.strictEqual(object.url, validPatchedUrl);
        });
        it('does not patch the url of the result', function() {
            var object = {
                url: '',
                result: {
                    result: {
                        value: {
                            url: url
                        }
                    }
                }
            };
            _protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.patch(object);
            assert.strictEqual(object.result.result.value.url, url);
        });
        it('does patch all urls in an example protocol message', function() {
            var object = {
                exceptionDetails: {
                    url: url,
                    stackTrace: {
                        callFrames: [
                            {
                                columnNumber: 0,
                                functionName: '',
                                lineNumber: 0,
                                scriptId: '0',
                                url: url
                            }
                        ]
                    }
                }
            };
            _protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.NodeURL.NodeURL.patch(object);
            assert.strictEqual(object.exceptionDetails.url, validPatchedUrl);
            assert.strictEqual(object.exceptionDetails.stackTrace.callFrames[0].url, validPatchedUrl);
        });
    });
}); //# sourceMappingURL=NodeURL.test.js.map


}),

}]);