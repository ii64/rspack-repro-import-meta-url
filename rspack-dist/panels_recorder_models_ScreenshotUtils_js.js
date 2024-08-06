"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_ScreenshotUtils_js"], {
"./panels/recorder/models/ScreenshotUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  resizeScreenshot: function() { return resizeScreenshot; },
  takeScreenshot: function() { return takeScreenshot; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
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

var SCREENSHOT_WIDTH = 160; // px
var SCREENSHOT_MAX_HEIGHT = 240; // px
function captureScreenshot() {
    return _captureScreenshot.apply(this, arguments);
}
function _captureScreenshot() {
    _captureScreenshot = _async_to_generator(function() {
        var mainTarget, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
                    if (!mainTarget) {
                        throw new Error('Could not find main target');
                    }
                    return [
                        4,
                        mainTarget.pageAgent().invoke_captureScreenshot({})
                    ];
                case 1:
                    data = _state.sent().data;
                    if (!data) {
                        // 1x1 px empty image.
                        return [
                            2,
                            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                        ];
                    }
                    return [
                        2,
                        'data:image/png;base64,' + data
                    ];
            }
        });
    });
    return _captureScreenshot.apply(this, arguments);
}
function resizeScreenshot(data) {
    return _resizeScreenshot.apply(this, arguments);
}
function _resizeScreenshot() {
    _resizeScreenshot = _async_to_generator(function(data) {
        var img, promise, canvas, context, aspectRatio, bitmap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    img = new Image();
                    promise = new Promise(function(resolve) {
                        img.onload = resolve;
                    });
                    img.src = data;
                    return [
                        4,
                        promise
                    ];
                case 1:
                    _state.sent();
                    canvas = document.createElement('canvas');
                    context = canvas.getContext('2d');
                    if (!context) {
                        throw new Error('Could not create context.');
                    }
                    aspectRatio = img.width / img.height;
                    canvas.width = SCREENSHOT_WIDTH;
                    canvas.height = Math.min(SCREENSHOT_MAX_HEIGHT, SCREENSHOT_WIDTH / aspectRatio);
                    return [
                        4,
                        createImageBitmap(img, {
                            resizeWidth: SCREENSHOT_WIDTH,
                            resizeQuality: 'high'
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
    return _resizeScreenshot.apply(this, arguments);
}
function takeScreenshot() {
    return _takeScreenshot.apply(this, arguments);
} //# sourceMappingURL=ScreenshotUtils.js.map
function _takeScreenshot() {
    _takeScreenshot = _async_to_generator(function() {
        var data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        captureScreenshot()
                    ];
                case 1:
                    data = _state.sent();
                    return [
                        4,
                        resizeScreenshot(data)
                    ];
                case 2:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _takeScreenshot.apply(this, arguments);
}


}),

}]);