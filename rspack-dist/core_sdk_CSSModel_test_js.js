"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_CSSModel_test_js"], {
"./core/sdk/CSSModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('CSSModel', function() {
    it('gets the FontFace of a source URL', function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        var cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel(target);
        var src = 'mock.com';
        var fontFace = {
            fontFamily: 'Roboto',
            src: src,
            fontDisplay: 'swap'
        };
        cssModel.fontsUpdated(fontFace);
        var fontFaceForSource = cssModel.fontFaceForSource(src);
        assert.strictEqual(fontFaceForSource === null || fontFaceForSource === void 0 ? void 0 : fontFaceForSource.getFontFamily(), fontFace.fontFamily);
        assert.strictEqual(fontFaceForSource === null || fontFaceForSource === void 0 ? void 0 : fontFaceForSource.getSrc(), fontFace.src);
        assert.strictEqual(fontFaceForSource === null || fontFaceForSource === void 0 ? void 0 : fontFaceForSource.getFontDisplay(), fontFace.fontDisplay);
    });
    it('reports stylesheets that fail to load as constructed stylesheets', /*#__PURE__*/ _async_to_generator(function() {
        var target, cssModel, header, addedPromise, cssModelHeader;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    cssModel = new _sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel(target);
                    header = {
                        styleSheetId: 'stylesheet',
                        frameId: 'frame',
                        sourceURL: 'http://stylesheet.test/404.css',
                        origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
                        title: 'failed sheet',
                        disabled: false,
                        isInline: false,
                        isMutable: false,
                        isConstructed: false,
                        loadingFailed: true,
                        startLine: 0,
                        startColumn: 0,
                        length: 0,
                        endLine: 0,
                        endColumn: 0
                    };
                    addedPromise = cssModel.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded);
                    cssModel.styleSheetAdded(header);
                    return [
                        4,
                        addedPromise
                    ];
                case 1:
                    cssModelHeader = _state.sent();
                    assert.deepEqual(cssModelHeader.sourceURL, '');
                    assert.deepEqual(cssModelHeader.isConstructed, true);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('on primary page change', function() {
        var target;
        var cssModel;
        var header = {
            styleSheetId: 'stylesheet',
            frameId: 'frame',
            sourceURL: 'http://example.com/styles.css',
            origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ ,
            title: 'title',
            disabled: false,
            isInline: false,
            isMutable: false,
            isConstructed: false,
            loadingFailed: false,
            startLine: 0,
            startColumn: 0,
            length: 0,
            endLine: 0,
            endColumn: 0
        };
        beforeEach(function() {
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
            cssModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel);
        });
        it('resets on navigation', function() {
            assert.exists(cssModel);
            cssModel.styleSheetAdded(header);
            var styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, [
                'stylesheet'
            ]);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target));
            styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, []);
        });
        it('does not reset on prerender activation', function() {
            assert.exists(cssModel);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getMainFrame)(target);
            cssModel.styleSheetAdded(header);
            var styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, [
                'stylesheet'
            ]);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_2__.activate)(target);
            styleSheetIds = cssModel.getStyleSheetIdsForURL('http://example.com/styles.css');
            assert.deepEqual(styleSheetIds, [
                'stylesheet'
            ]);
        });
    });
}); //# sourceMappingURL=CSSModel.test.js.map


}),

}]);