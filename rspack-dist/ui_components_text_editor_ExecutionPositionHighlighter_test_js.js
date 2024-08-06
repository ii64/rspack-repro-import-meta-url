"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_text_editor_ExecutionPositionHighlighter_test_js"], {
"./ui/components/text_editor/ExecutionPositionHighlighter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _text_editor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text_editor.js */ "./ui/components/text_editor/text_editor.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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



function syntaxParserDone(view) {
    return new Promise(function(resolve) {
        (function check() {
            if (!_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view)) {
                resolve();
            } else {
                window.requestIdleCallback(check);
            }
        })();
    });
}
describe('TextEditor', function() {
    describe('ExecutionPositionHighlighter', function() {
        var createEditorView = function createEditorView(param) {
            var doc = param.doc, extensions = param.extensions;
            if (extensions === undefined) {
                extensions = [];
            }
            extensions = [
                extensions,
                positionHighlighter('cm-executionLine', 'cm-executionToken')
            ];
            var state = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorState.create({
                doc: doc,
                extensions: extensions
            });
            var parent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(document.createElement('main'));
            return new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView({
                state: state,
                parent: parent
            });
        };
        var _TextEditor_ExecutionPositionHighlighter = _text_editor_js__WEBPACK_IMPORTED_MODULE_2__.ExecutionPositionHighlighter, positionHighlighter = _TextEditor_ExecutionPositionHighlighter.positionHighlighter, setHighlightedPosition = _TextEditor_ExecutionPositionHighlighter.setHighlightedPosition, clearHighlightedPosition = _TextEditor_ExecutionPositionHighlighter.clearHighlightedPosition;
        describe('positionHighlighter', function() {
            it('defaults to no position highlighting with no syntax extensions', function() {
                var doc = 'This is some text';
                var view = createEditorView({
                    doc: doc
                });
                assert.isFalse(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
            it('defaults to no position highlighting with JavaScript syntax', /*#__PURE__*/ _async_to_generator(function() {
                var doc, extensions, view;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            doc = 'console.log("Hello World!")';
                            extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                            view = createEditorView({
                                doc: doc,
                                extensions: extensions
                            });
                            return [
                                4,
                                syntaxParserDone(view)
                            ];
                        case 1:
                            _state.sent();
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('setHighlightedPosition', function() {
            it('highlights line but not token with no syntax extensions', function() {
                var doc = 'Hello world!';
                var view = createEditorView({
                    doc: doc
                });
                assert.isFalse(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                view.dispatch({
                    effects: setHighlightedPosition.of(doc.indexOf('world'))
                });
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc);
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
            });
            it('highlights line and token with JavaScript syntax', /*#__PURE__*/ _async_to_generator(function() {
                var doc, extensions, view;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            doc = 'console.log("Hello World!")';
                            extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                            view = createEditorView({
                                doc: doc,
                                extensions: extensions
                            });
                            return [
                                4,
                                syntaxParserDone(view)
                            ];
                        case 1:
                            _state.sent();
                            view.dispatch({
                                effects: setHighlightedPosition.of(doc.indexOf('log'))
                            });
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                            assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc);
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                            assert.strictEqual(view.dom.querySelector('.cm-executionToken').textContent, 'log');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('highlights line immediately with JavaScript syntax', function() {
                var doc = 'console.log("Hello World!");\n'.repeat(1000) + 'foo();';
                var extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                var view = createEditorView({
                    doc: doc,
                    extensions: extensions
                });
                var position = doc.lastIndexOf('foo');
                view.dispatch({
                    effects: [
                        _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView.scrollIntoView(position),
                        setHighlightedPosition.of(position)
                    ]
                });
                assert.isTrue(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.syntaxParserRunning(view));
                assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                assert.strictEqual(view.dom.querySelector('.cm-executionLine').textContent, doc.slice(position));
            });
            it('highlights token once incremental parser catches up with JavaScript syntax', /*#__PURE__*/ _async_to_generator(function() {
                var doc, extensions, view, position;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            doc = 'console.log("Hello World!");\n'.repeat(1000) + 'foo();';
                            extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                            view = createEditorView({
                                doc: doc,
                                extensions: extensions
                            });
                            position = doc.lastIndexOf('foo');
                            view.dispatch({
                                effects: [
                                    _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.EditorView.scrollIntoView(position),
                                    setHighlightedPosition.of(position)
                                ]
                            });
                            return [
                                4,
                                syntaxParserDone(view)
                            ];
                        case 1:
                            _state.sent();
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                            assert.strictEqual(view.dom.querySelector('.cm-executionToken').textContent, 'foo');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('clearHighlightedPosition', function() {
            it('clears any highlighting with JavaScript syntax', /*#__PURE__*/ _async_to_generator(function() {
                var doc, extensions, view;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            doc = 'console.log("Hello World!")';
                            extensions = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_1__.javascript.javascript();
                            view = createEditorView({
                                doc: doc,
                                extensions: extensions
                            });
                            return [
                                4,
                                syntaxParserDone(view)
                            ];
                        case 1:
                            _state.sent();
                            view.dispatch({
                                effects: setHighlightedPosition.of(doc.indexOf('log'))
                            });
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 1);
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 1);
                            view.dispatch({
                                effects: clearHighlightedPosition.of()
                            });
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionLine'), 0);
                            assert.lengthOf(view.dom.querySelectorAll('.cm-executionToken'), 0);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=ExecutionPositionHighlighter.test.js.map


}),

}]);