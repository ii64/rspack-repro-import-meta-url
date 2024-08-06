"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_ScreenshotUtils_test_js"], {
"./panels/recorder/models/ScreenshotUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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

describe('ScreenshotUtils', function() {
    var generateImage = function generateImage(width, height) {
        return _generateImage.apply(this, arguments);
    };
    var getScreenshotDimensions = function getScreenshotDimensions(screenshot) {
        return _getScreenshotDimensions.apply(this, arguments);
    };
    function _generateImage() {
        _generateImage = _async_to_generator(function(width, height) {
            var img, promise, canvas, context, bitmap;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        img = new Image(width, height);
                        promise = new Promise(function(resolve) {
                            img.onload = resolve;
                        });
                        img.src = "data:image/svg+xml,%3Csvg viewBox='0 0 ".concat(width, " ").concat(height, "' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E");
                        return [
                            4,
                            promise
                        ];
                    case 1:
                        _state.sent();
                        canvas = document.createElement('canvas');
                        canvas.width = width;
                        canvas.height = height;
                        context = canvas.getContext('2d');
                        if (!context) {
                            throw new Error('Could not create context.');
                        }
                        return [
                            4,
                            createImageBitmap(img, {
                                resizeHeight: height,
                                resizeWidth: width
                            })
                        ];
                    case 2:
                        bitmap = _state.sent();
                        context.drawImage(bitmap, 0, 0);
                        return [
                            2,
                            canvas.toDataURL('image/png')
                        ];
                }
            });
        });
        return _generateImage.apply(this, arguments);
    }
    function _getScreenshotDimensions() {
        _getScreenshotDimensions = _async_to_generator(function(screenshot) {
            var tmp, promise;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        tmp = new Image();
                        promise = new Promise(function(resolve) {
                            tmp.onload = resolve;
                        });
                        tmp.src = screenshot;
                        return [
                            4,
                            promise
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            [
                                tmp.width,
                                tmp.height
                            ]
                        ];
                }
            });
        });
        return _getScreenshotDimensions.apply(this, arguments);
    }
    it('can resize screenshots to be 160px wide and <= 240px high', /*#__PURE__*/ _async_to_generator(function() {
        var resizeScreenshot, _, _1, _2, _3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resizeScreenshot = _models_js__WEBPACK_IMPORTED_MODULE_0__.ScreenshotUtils.resizeScreenshot;
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        generateImage(400, 800)
                    ];
                case 1:
                    return [
                        4,
                        resizeScreenshot.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 2:
                    return [
                        4,
                        getScreenshotDimensions.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        [
                            160,
                            240
                        ]
                    ]);
                    _1 = assert.deepStrictEqual;
                    return [
                        4,
                        generateImage(800, 400)
                    ];
                case 4:
                    return [
                        4,
                        resizeScreenshot.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 5:
                    return [
                        4,
                        getScreenshotDimensions.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 6:
                    _1.apply(assert, [
                        _state.sent(),
                        [
                            160,
                            80
                        ]
                    ]);
                    _2 = assert.deepStrictEqual;
                    return [
                        4,
                        generateImage(80, 80)
                    ];
                case 7:
                    return [
                        4,
                        resizeScreenshot.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 8:
                    return [
                        4,
                        getScreenshotDimensions.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 9:
                    _2.apply(assert, [
                        _state.sent(),
                        [
                            160,
                            160
                        ]
                    ]);
                    _3 = assert.deepStrictEqual;
                    return [
                        4,
                        generateImage(80, 320)
                    ];
                case 10:
                    return [
                        4,
                        resizeScreenshot.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 11:
                    return [
                        4,
                        getScreenshotDimensions.apply(void 0, [
                            _state.sent()
                        ])
                    ];
                case 12:
                    _3.apply(assert, [
                        _state.sent(),
                        [
                            160,
                            240
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ScreenshotUtils.test.js.map


}),

}]);