"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_BreakpointEditDialog_test_js"], {
"./panels/sources/BreakpointEditDialog.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
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




function setCodeMirrorContent(editor, content) {
    editor.dispatch({
        changes: {
            from: 0,
            to: editor.state.doc.length,
            insert: content
        }
    });
}
function setBreakpointType(dialog, newType) {
    var toolbar = dialog.contentElement.querySelector('.toolbar');
    var selectElement = toolbar.shadowRoot.querySelector('select');
    selectElement.value = newType;
    selectElement.dispatchEvent(new Event('change'));
}
// Note that we currently don't install a fake RuntimeModel + ExecutionContext for these tests.
// This means the 'BreakpointEditDialog' won't be able to check whether the
// condition is a complete JavaScript expression or not and simply assume it is.
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('BreakpointEditDialog', function() {
    it('reports a committed condition when the Enter key is pressed', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, _ref, committed, condition;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'x === 5');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(editor.contentDOM, {
                            key: 'Enter'
                        });
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    _ref = _state.sent(), committed = _ref.committed, condition = _ref.condition;
                    assert.isTrue(committed);
                    assert.strictEqual(condition, 'x === 5');
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not report a commited condition when the ESC key is pressed', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, committed;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'hello');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(editor.contentDOM, {
                            key: 'Escape'
                        });
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    committed = _state.sent().committed;
                    assert.isFalse(committed);
                    return [
                        2
                    ];
            }
        });
    }));
    it('commits condition when close button is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, _ref, committed, condition;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'x === 5');
                        dialog.contentElement.querySelector('devtools-icon').click();
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    _ref = _state.sent(), committed = _ref.committed, condition = _ref.condition;
                    assert.isTrue(committed);
                    assert.strictEqual(condition, 'x === 5');
                    return [
                        2
                    ];
            }
        });
    }));
    it('leaves the condition as-is for logpoints', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, condition;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', true, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'x');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(editor.contentDOM, {
                            key: 'Enter'
                        });
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    condition = _state.sent().condition;
                    assert.strictEqual(condition, 'x');
                    return [
                        2
                    ];
            }
        });
    }));
    it('result includes isLogpoint for logpoints', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, isLogpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', true, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'x');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(editor.contentDOM, {
                            key: 'Enter'
                        });
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    isLogpoint = _state.sent().isLogpoint;
                    assert.isTrue(isLogpoint);
                    return [
                        2
                    ];
            }
        });
    }));
    it('result includes isLogpoint for conditional breakpoints', /*#__PURE__*/ _async_to_generator(function() {
        var resultPromise, isLogpoint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resultPromise = new Promise(function(resolve) {
                        var dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', false, resolve);
                        var editor = dialog.editorForTest.editor;
                        setCodeMirrorContent(editor, 'x === 5');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(editor.contentDOM, {
                            key: 'Enter'
                        });
                    });
                    return [
                        4,
                        resultPromise
                    ];
                case 1:
                    isLogpoint = _state.sent().isLogpoint;
                    assert.isFalse(isLogpoint);
                    return [
                        2
                    ];
            }
        });
    }));
    it('prefills the input with the old condition', /*#__PURE__*/ _async_to_generator(function() {
        var dialog, editor;
        return _ts_generator(this, function(_state) {
            dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, 'x === 42', false, function() {});
            editor = dialog.editorForTest.editor;
            assert.strictEqual(editor.state.doc.sliceString(0), 'x === 42');
            return [
                2
            ];
        });
    }));
    it('focuses the editor input field after changing the breakpoint type', /*#__PURE__*/ _async_to_generator(function() {
        var dialog, editor;
        return _ts_generator(this, function(_state) {
            dialog = new _sources_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointEditDialog.BreakpointEditDialog(0, '', false, function() {});
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(dialog.contentElement);
            setBreakpointType(dialog, "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */ );
            editor = dialog.editorForTest.editor;
            assert.isTrue(editor.hasFocus);
            dialog.contentElement.remove(); // Cleanup.
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=BreakpointEditDialog.test.js.map


}),

}]);