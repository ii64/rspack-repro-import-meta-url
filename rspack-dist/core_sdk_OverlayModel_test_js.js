"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_OverlayModel_test_js"], {
"./core/sdk/OverlayModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('OverlayModel', function() {
    var DOCUMENT_URL_FOR_TEST = 'https://example.com/';
    var cssModel;
    var windowControls;
    var overlayModel;
    var header = {
        styleSheetId: 'stylesheet',
        frameId: 'frame',
        sourceURL: "".concat(DOCUMENT_URL_FOR_TEST, "styles.css"),
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
    var defaultStyleSheet = ".titlebar {\n    left: env(titlebar-area-x);\n    top: env(titlebar-area-y);\n    width: env(titlebar-area-width);\n    height: env(titlebar-area-height);}";
    beforeEach(function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)({
            url: DOCUMENT_URL_FOR_TEST
        });
        overlayModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel);
        cssModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel);
        assert.exists(cssModel);
        windowControls = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.WindowControls(cssModel);
        // Set up mock response handler to get the default style sheet
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CSS.getStyleSheetText', function() {
            return {
                text: defaultStyleSheet
            };
        });
    });
    it('toggles controls toolbar', /*#__PURE__*/ _async_to_generator(function() {
        var config, expectedDefaultConfig;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(overlayModel);
                    // Set up mock response handler to set the configuration
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('Overlay.setShowWindowControlsOverlay', function(request) {
                        config = request;
                        return request;
                    });
                    // Verify the config is empty when toggling toolbar to be false
                    return [
                        4,
                        overlayModel.toggleWindowControlsToolbar(false)
                    ];
                case 1:
                    _state.sent();
                    assert.deepEqual(config, {}, 'Expect config to be empty when toolbar is toggled false');
                    // Verify the current config is sent when toggling toolbar to be true
                    return [
                        4,
                        overlayModel.toggleWindowControlsToolbar(true)
                    ];
                case 2:
                    _state.sent();
                    expectedDefaultConfig = {
                        windowControlsOverlayConfig: overlayModel.getWindowControlsConfig()
                    };
                    assert.deepEqual(config, expectedDefaultConfig, 'Expect default config sent when toolbar is toggled true');
                    return [
                        2
                    ];
            }
        });
    }));
    it('initializes the style sheet text', /*#__PURE__*/ _async_to_generator(function() {
        var checkStyleSheet, styleSheetIds, isInitialized;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(cssModel);
                    assert.exists(windowControls);
                    return [
                        4,
                        windowControls.initializeStyleSheetText(DOCUMENT_URL_FOR_TEST)
                    ];
                case 1:
                    checkStyleSheet = _state.sent();
                    assert.isFalse(checkStyleSheet, 'Style should not be initialized if no CSS stylesheets are present');
                    // Add a style sheet and verify it gets added
                    cssModel.styleSheetAdded(header);
                    styleSheetIds = cssModel.getStyleSheetIdsForURL("".concat(DOCUMENT_URL_FOR_TEST, "styles.css"));
                    assert.deepEqual(styleSheetIds, [
                        'stylesheet'
                    ]);
                    return [
                        4,
                        windowControls.initializeStyleSheetText(DOCUMENT_URL_FOR_TEST)
                    ];
                case 2:
                    isInitialized = _state.sent();
                    assert.isTrue(isInitialized, 'Expect the style sheet to be initialized when CSS stylesheets are present');
                    return [
                        2
                    ];
            }
        });
    }));
    it('toggles the emulated overlay', /*#__PURE__*/ _async_to_generator(function() {
        var styleSheet, styleSheetIds, isInitialized, expectedWindowsOverlay;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.exists(cssModel);
                    assert.exists(windowControls);
                    // Set up mock response handler to set the style sheet
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.setMockConnectionResponseHandler)('CSS.setStyleSheetText', function(req) {
                        styleSheet = req.text;
                        return req;
                    });
                    // Toggle emulated overlay and verify no emulated overlay when no styles are preset
                    return [
                        4,
                        windowControls.toggleEmulatedOverlay(true)
                    ];
                case 1:
                    _state.sent();
                    assert.isUndefined(styleSheet, 'Expect overlay to not be toggled if no styles are present');
                    // Add style sheet and verify it gets added
                    cssModel.styleSheetAdded(header);
                    styleSheetIds = cssModel.getStyleSheetIdsForURL("".concat(DOCUMENT_URL_FOR_TEST, "styles.css"));
                    assert.deepEqual(styleSheetIds, [
                        'stylesheet'
                    ]);
                    return [
                        4,
                        windowControls.initializeStyleSheetText(DOCUMENT_URL_FOR_TEST)
                    ];
                case 2:
                    isInitialized = _state.sent();
                    assert.isTrue(isInitialized);
                    // Toggle the emulated overlay and verify original style sheet gets replaced with emulated overlay
                    return [
                        4,
                        windowControls.toggleEmulatedOverlay(true)
                    ];
                case 3:
                    _state.sent();
                    expectedWindowsOverlay = ".titlebar {\n    left: env(titlebar-area-x, 0px);\n    top: env(titlebar-area-y, 0px);\n    width: env(titlebar-area-width, calc(100% - 238px));\n    height: env(titlebar-area-height, 33px);}";
                    assert.strictEqual(styleSheet, expectedWindowsOverlay, 'Expect emulated overlay stylesheet to be used');
                    // Toggle the emulated overlay off and verify original style sheet is used
                    return [
                        4,
                        windowControls.toggleEmulatedOverlay(false)
                    ];
                case 4:
                    _state.sent();
                    assert.strictEqual(styleSheet, defaultStyleSheet, 'Expect original default stylesheet to be used');
                    return [
                        2
                    ];
            }
        });
    }));
    it('parses styles and replaces variables for style sheet correctly', function() {
        assert.exists(windowControls);
        var x = 85;
        var y = 0;
        var width = 185;
        var height = 40;
        var originalStyleSheet = ".titlebar {\n      position: absolute;\n      left: env(titlebar-area-x);\n      top: env(titlebar-area-y);\n      width: env(titlebar-area-width);\n      height: env(titlebar-area-height);\n    }";
        var expectedStyleSheet = ".titlebar {\n      position: absolute;\n      left: env(titlebar-area-x, ".concat(x, "px);\n      top: env(titlebar-area-y, ").concat(y, "px);\n      width: env(titlebar-area-width, calc(100% - ").concat(width, "px));\n      height: env(titlebar-area-height, ").concat(height, "px);\n    }");
        // Verify the original style sheet gets transformed to the expected style sheet for the given x, y, width, and height dimensions
        var parsedStyleSheet = windowControls.transformStyleSheetforTesting(x, y, width, height, originalStyleSheet);
        assert.strictEqual(parsedStyleSheet, expectedStyleSheet);
        // Verify the original style sheet does not get transformed when no original stylesheet
        originalStyleSheet = '';
        parsedStyleSheet = windowControls.transformStyleSheetforTesting(x, y, width, height, originalStyleSheet);
        assert.isUndefined(parsedStyleSheet);
        // Verify the original style sheet gets transformed to the expected style sheet for partial CSS properties
        originalStyleSheet = ': env(titlebar-area-xxx, 9px); width: env(titlebar-area-width);';
        expectedStyleSheet = ": env(titlebar-area-xxx, 9px); width: env(titlebar-area-width, calc(100% - ".concat(width, "px));");
        parsedStyleSheet = windowControls.transformStyleSheetforTesting(x, y, width, height, originalStyleSheet);
        assert.strictEqual(parsedStyleSheet, expectedStyleSheet);
    });
}); //# sourceMappingURL=OverlayModel.test.js.map


}),

}]);