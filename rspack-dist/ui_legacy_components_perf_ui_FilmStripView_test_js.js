"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_FilmStripView_test_js"], {
"./ui/legacy/components/perf_ui/FilmStripView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
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





(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('FilmStripView', function() {
    function renderView(filmStripData) {
        return _renderView.apply(this, arguments);
    }
    function _renderView() {
        _renderView = _async_to_generator(function(filmStripData) {
            var filmStripView, container;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filmStripView = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FilmStripView.FilmStripView();
                        filmStripView.setModel(filmStripData);
                        container = document.createElement('div');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
                        filmStripView.markAsRoot();
                        filmStripView.show(container);
                        // Give the film strip time to render.
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            filmStripView
                        ];
                }
            });
        });
        return _renderView.apply(this, arguments);
    }
    it('generates frames and timestamps', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, filmStrip, renderedFrames, expectedTimeLabelsForFrames;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    return [
                        4,
                        renderView(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData))
                    ];
                case 2:
                    filmStrip = _state.sent();
                    renderedFrames = Array.from(filmStrip.contentElement.querySelectorAll('button.frame'));
                    assert.lengthOf(renderedFrames, 5);
                    expectedTimeLabelsForFrames = [
                        '0ms',
                        '139ms',
                        '222ms',
                        '239ms',
                        '289ms'
                    ];
                    // Ensure for each frame that we rendered the right snapshot from the trace
                    // data. And that the time label is as expected.
                    renderedFrames.forEach(function(frame, index) {
                        var img = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.querySelectorErrorOnMissing)(frame, 'img');
                        assert.isTrue(img.src.includes(traceData.Screenshots[index].args.dataUri));
                        var timeElement = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.querySelectorErrorOnMissing)(frame, '.time');
                        // Remove whitespace to avoid having to compare with &nbsp; in the
                        // expected text.
                        assert.strictEqual(timeElement.innerText.replace(/\s/, ''), expectedTimeLabelsForFrames[index]);
                    });
                    assert.deepStrictEqual(1, 1);
                    filmStrip.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('FilmStripView Dialog', function() {
        function renderDialogWithTraceEngine(filmStrip, selectedFrameIndex) {
            return _renderDialogWithTraceEngine.apply(this, arguments);
        }
        function _renderDialogWithTraceEngine() {
            _renderDialogWithTraceEngine = _async_to_generator(function(filmStrip, selectedFrameIndex) {
                var dialogWidget, container, containerShadowRoot;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            dialogWidget = _perf_ui_js__WEBPACK_IMPORTED_MODULE_4__.FilmStripView.Dialog.fromFilmStrip(filmStrip, selectedFrameIndex);
                            // Give the dialog time to render
                            return [
                                4,
                                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                            ];
                        case 1:
                            _state.sent();
                            // Creating the dialog widget is enough to cause it to render, so now we can find the Dialog HTML.
                            container = document.body.querySelector('[data-devtools-glass-pane]');
                            containerShadowRoot = container === null || container === void 0 ? void 0 : container.shadowRoot;
                            if (!containerShadowRoot) {
                                throw new Error('Could not find the Dialog shadowRoot');
                            }
                            return [
                                2,
                                {
                                    dialog: dialogWidget,
                                    shadowRoot: containerShadowRoot
                                }
                            ];
                    }
                });
            });
            return _renderDialogWithTraceEngine.apply(this, arguments);
        }
        it('renders and shows the provided frame by default', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 0)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not let the user navigate back if they are at the first frame already', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, previousBtn, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 0)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        previousBtn = shadowRoot.querySelector('devtools-button');
                        assert.isTrue((previousBtn === null || previousBtn === void 0 ? void 0 : previousBtn.textContent) === '◀' || (previousBtn === null || previousBtn === void 0 ? void 0 : previousBtn.textContent) === '&#9664;');
                        if (!previousBtn) {
                            throw new Error('Could not find previous button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(previousBtn);
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user navigate back to the previous frame with the mouse', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, previousBtn, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 1)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        previousBtn = shadowRoot.querySelector('devtools-button');
                        assert.isTrue((previousBtn === null || previousBtn === void 0 ? void 0 : previousBtn.textContent) === '◀' || (previousBtn === null || previousBtn === void 0 ? void 0 : previousBtn.textContent) === '&#9664;');
                        if (!previousBtn) {
                            throw new Error('Could not find previous button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(previousBtn);
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user navigate back to the previous frame with the keyboard', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 1)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        if (!renderedImage) {
                            throw new Error('Could not find film-strip-dialog img');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(renderedImage, {
                            key: 'ArrowLeft',
                            bubbles: true
                        });
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[0].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user navigate forwards to the next frame with the mouse', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, nextBtn, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 0)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        nextBtn = shadowRoot.querySelectorAll('devtools-button')[1];
                        assert.isTrue(nextBtn.textContent === '▶' || nextBtn.textContent === '&#9654;');
                        if (!nextBtn) {
                            throw new Error('Could not find next button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(nextBtn);
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[1].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not let the user go beyond the last image', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, numberOfFrames, _ref, dialog, shadowRoot, renderedImage, nextBtn;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        numberOfFrames = filmStrip.frames.length;
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, numberOfFrames - 1)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[numberOfFrames - 1].args.dataUri));
                        nextBtn = shadowRoot.querySelectorAll('devtools-button')[1];
                        assert.isTrue(nextBtn.textContent === '▶' || nextBtn.textContent === '&#9654;');
                        if (!nextBtn) {
                            throw new Error('Could not find next button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(nextBtn);
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[numberOfFrames - 1].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
        it('lets the user navigate forwards to the next frame with the keyboard', /*#__PURE__*/ _async_to_generator(function() {
            var traceData, filmStrip, _ref, dialog, shadowRoot, renderedImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                        ];
                    case 1:
                        traceData = _state.sent().traceData;
                        filmStrip = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.FilmStrip.fromTraceData(traceData);
                        return [
                            4,
                            renderDialogWithTraceEngine(filmStrip, 0)
                        ];
                    case 2:
                        _ref = _state.sent(), dialog = _ref.dialog, shadowRoot = _ref.shadowRoot;
                        renderedImage = shadowRoot.querySelector('[data-film-strip-dialog-img]');
                        if (!renderedImage) {
                            throw new Error('Could not find film-strip-dialog img');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(renderedImage, {
                            key: 'ArrowRight',
                            bubbles: true
                        });
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 3:
                        _state.sent();
                        assert.isTrue(renderedImage === null || renderedImage === void 0 ? void 0 : renderedImage.currentSrc.includes(traceData.Screenshots[1].args.dataUri));
                        dialog.hide();
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=FilmStripView.test.js.map


}),

}]);