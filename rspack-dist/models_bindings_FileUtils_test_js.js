"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_FileUtils_test_js"], {
"./models/bindings/FileUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}


var ChunkedFileReader = _bindings_js__WEBPACK_IMPORTED_MODULE_1__.FileUtils.ChunkedFileReader;
var StringOutputStream = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream;
describe('FileUtils', function() {
    describe('ChunkedFileReader', function() {
        it('re-assembles chunks including multibyte characters', /*#__PURE__*/ _async_to_generator(function() {
            var text, blob, chunkSize, chunkCount, reader, output, hasNoError;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        text = [
                            'Латынь из моды вышла ныне:\n',
                            'Так, если правду вам сказать,\n',
                            'Он знал довольно по-латыне,\n',
                            'Чтоб эпиграфы разбирать\n'
                        ];
                        blob = new Blob(text, {
                            type: 'text/plain'
                        });
                        // Most of the characters above will be encoded as 2 bytes, so make sure we use odd
                        // chunk size to cause chunk boundaries sometimes to happen between chaacter bytes.
                        chunkSize = 5;
                        chunkCount = 0;
                        reader = new ChunkedFileReader(new File([
                            blob
                        ], 'ru.txt'), chunkSize, function() {
                            return ++chunkCount;
                        });
                        output = new StringOutputStream();
                        return [
                            4,
                            reader.read(output)
                        ];
                    case 1:
                        hasNoError = _state.sent();
                        assert.strictEqual(hasNoError, true);
                        assert.strictEqual(chunkCount, 41);
                        assert.strictEqual(text.join(''), output.data(), 'Read text is different from written text');
                        return [
                            2
                        ];
                }
            });
        }));
        it('can decompress gzipped data', /*#__PURE__*/ _async_to_generator(function() {
            var expectedText, cblob, chunkCount, chunkSize, output, compressedFile, cfreader, hasNoError;
            function getAsCompressedFile(text) {
                return _getAsCompressedFile.apply(this, arguments);
            }
            function _getAsCompressedFile() {
                _getAsCompressedFile = _async_to_generator(function(text) {
                    var blob, cstream, creader, values, _ref, value, done, cblob;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                blob = new Blob([
                                    text
                                ], {
                                    type: 'text/plain'
                                });
                                // https://github.com/wicg/compression/blob/main/explainer.md#deflate-compress-an-arraybuffer
                                cstream = blob.stream().pipeThrough(new CompressionStream('gzip'));
                                creader = cstream.getReader();
                                values = [];
                                _state.label = 1;
                            case 1:
                                if (!true) {}
                                return [
                                    4,
                                    creader.read()
                                ];
                            case 2:
                                _ref = _state.sent(), value = _ref.value, done = _ref.done;
                                if (done) {
                                    return [
                                        3,
                                        3
                                    ];
                                }
                                values.push(value);
                                return [
                                    3,
                                    1
                                ];
                            case 3:
                                cblob = new Blob(values, {
                                    type: 'application/gzip'
                                });
                                return [
                                    2,
                                    cblob
                                ];
                        }
                    });
                });
                return _getAsCompressedFile.apply(this, arguments);
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        expectedText = 'This text will get compressed and then decompressed!';
                        return [
                            4,
                            getAsCompressedFile(expectedText)
                        ];
                    case 1:
                        cblob = _state.sent();
                        chunkCount = 0;
                        chunkSize = 5;
                        output = new StringOutputStream();
                        compressedFile = new File([
                            cblob
                        ], 'ru.txt.gz', {
                            type: 'application/gzip'
                        });
                        cfreader = new ChunkedFileReader(compressedFile, chunkSize, function() {
                            return ++chunkCount;
                        });
                        return [
                            4,
                            cfreader.read(output)
                        ];
                    case 2:
                        hasNoError = _state.sent();
                        assert.strictEqual(hasNoError, true);
                        assert.strictEqual(expectedText, output.data(), 'Read text is different from written text');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=FileUtils.test.js.map


}),

}]);