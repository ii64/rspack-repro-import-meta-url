"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_coverage_test_runner_coverage_test_runner_js"], {
"./legacy_test_runner/coverage_test_runner/coverage_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageTestRunner: function() { return CoverageTestRunner; }
});
/* harmony import */var _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/coverage/coverage.js */ "./panels/coverage/coverage.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sources_test_runner/sources_test_runner.js */ "./legacy_test_runner/sources_test_runner/sources_test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__);
// Copyright 2017 The Chromium Authors. All rights reserved.
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




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var CoverageTestRunner = {};
/**
 * @param jsCoveragePerBlock - Collect per Block coverage if `true`, per function coverage otherwise.
 * @return {!Promise}
 */ CoverageTestRunner.startCoverage = function() {
    var _ref = _async_to_generator(function(jsCoveragePerBlock) {
        var coverageView;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance().showView('coverage');
                    coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
                    return [
                        4,
                        coverageView.startRecording({
                            reload: false,
                            jsCoveragePerBlock: jsCoveragePerBlock
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function(jsCoveragePerBlock) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @return {!Promise}
 */ CoverageTestRunner.stopCoverage = function() {
    var coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
    return coverageView.stopRecording();
};
/**
 * @return {!Promise}
 */ CoverageTestRunner.suspendCoverageModel = /*#__PURE__*/ _async_to_generator(function() {
    var coverageView;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
                return [
                    4,
                    coverageView.model.preSuspendModel()
                ];
            case 1:
                _state.sent();
                return [
                    4,
                    coverageView.model.suspendModel()
                ];
            case 2:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
/**
 * @return {!Promise}
 */ CoverageTestRunner.resumeCoverageModel = /*#__PURE__*/ _async_to_generator(function() {
    var coverageView;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
                return [
                    4,
                    coverageView.model.resumeModel()
                ];
            case 1:
                _state.sent();
                return [
                    4,
                    coverageView.model.postResumeModel()
                ];
            case 2:
                _state.sent();
                return [
                    2
                ];
        }
    });
});
/**
 * @return {!Promise}
 */ CoverageTestRunner.pollCoverage = /*#__PURE__*/ _async_to_generator(function() {
    var coverageView;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
                // Make sure not to have two instances of _pollAndCallback running at the same time.
                return [
                    4,
                    coverageView.model.currentPollPromise
                ];
            case 1:
                _state.sent();
                return [
                    2,
                    coverageView.model.pollAndCallback()
                ];
        }
    });
});
/**
 * @return {!Promise<Coverage.CoverageModel.CoverageModel>}
 */ CoverageTestRunner.getCoverageModel = function() {
    var coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
    return coverageView.model;
};
/**
 * @return {!Promise<string>}
 */ CoverageTestRunner.exportReport = /*#__PURE__*/ _async_to_generator(function() {
    var coverageView, data;
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                coverageView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance();
                return [
                    4,
                    coverageView.model.exportReport({
                        write: function(d) {
                            data = d;
                        },
                        close: function(_) {
                            return 0;
                        }
                    })
                ];
            case 1:
                _state.sent();
                return [
                    2,
                    data
                ];
        }
    });
});
/**
 * @return {!Promise<!SourceFrame.SourceFrame>}
 */ CoverageTestRunner.sourceDecorated = function() {
    var _ref = _async_to_generator(function(source) {
        var decoratePromise, sourceFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().showPanel('sources')
                    ];
                case 1:
                    _state.sent();
                    decoratePromise = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addSnifferPromise(_panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.LineDecorator.prototype, 'innerDecorate');
                    return [
                        4,
                        _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.SourcesTestRunner.showScriptSourcePromise(source)
                    ];
                case 2:
                    sourceFrame = _state.sent();
                    return [
                        4,
                        decoratePromise
                    ];
                case 3:
                    _state.sent();
                    return [
                        2,
                        sourceFrame
                    ];
            }
        });
    });
    return function(source) {
        return _ref.apply(this, arguments);
    };
}();
CoverageTestRunner.dumpDecorations = function() {
    var _ref = _async_to_generator(function(source) {
        var sourceFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        CoverageTestRunner.sourceDecorated(source)
                    ];
                case 1:
                    sourceFrame = _state.sent();
                    CoverageTestRunner.dumpDecorationsInSourceFrame(sourceFrame);
                    return [
                        2
                    ];
            }
        });
    });
    return function(source) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @return {?DataGrid.DataGridNode}
 */ CoverageTestRunner.findCoverageNodeForURL = function(url) {
    var coverageListView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance().listView;
    var rootNode = coverageListView.dataGrid.rootNode();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = rootNode.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            if (child.coverageInfo.url().endsWith(url)) {
                return child;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return null;
};
CoverageTestRunner.dumpDecorationsInSourceFrame = function(sourceFrame) {
    var markerMap = new Map([
        [
            'used',
            '+'
        ],
        [
            'unused',
            '-'
        ]
    ]);
    var codeMirror = sourceFrame.textEditor.codeMirror();
    for(var line = 0; line < codeMirror.lineCount(); ++line){
        var text = codeMirror.getLine(line);
        var markerType = ' ';
        var lineInfo = codeMirror.lineInfo(line);
        if (!lineInfo) {
            continue;
        }
        var gutterElement = lineInfo.gutterMarkers && lineInfo.gutterMarkers['CodeMirror-gutter-coverage'];
        if (gutterElement) {
            var markerClass = /^text-editor-coverage-(\w*)-marker$/.exec(gutterElement.classList)[1];
            markerType = markerMap.get(markerClass) || gutterElement.classList;
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult("".concat(line, ": ").concat(markerType, " ").concat(text));
    }
};
CoverageTestRunner.dumpCoverageListView = function() {
    var coverageListView = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageView.CoverageView.instance().listView;
    var dataGrid = coverageListView.dataGrid;
    dataGrid.updateInstantly();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = dataGrid.rootNode().children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            var data = child.coverageInfo;
            var url = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.formatters.formatAsURL(data.url());
            if (url.startsWith('test://')) {
                continue;
            }
            var type = _panels_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_0__.CoverageListView.coverageTypeToString(data.type());
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult("".concat(url, " ").concat(type, " used: ").concat(data.usedSize(), " unused: ").concat(data.unusedSize(), " total: ").concat(data.size()));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};


}),

}]);