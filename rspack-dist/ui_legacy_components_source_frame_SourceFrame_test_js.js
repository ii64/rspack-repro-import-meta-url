"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_source_frame_SourceFrame_test_js"], {
"./ui/legacy/components/source_frame/SourceFrame.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _source_frame_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
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







(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('SourceFrame', function() {
    var createSourceFrame = function createSourceFrame(content) {
        return _createSourceFrame.apply(this, arguments);
    };
    var pasteIntoSourceFrame = function pasteIntoSourceFrame() {
        return _pasteIntoSourceFrame.apply(this, arguments);
    };
    var setting;
    beforeEach(function() {
        setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('disable-self-xss-warning', false, "Synced" /* Common.Settings.SettingStorageType.Synced */ );
        setting.set(false);
    });
    function _createSourceFrame() {
        _createSourceFrame = _async_to_generator(function(content) {
            var deferredContentStub, sourceFrame;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        deferredContentStub = {
                            content: '',
                            isEncoded: true
                        };
                        sourceFrame = new _source_frame_js__WEBPACK_IMPORTED_MODULE_6__.SourceFrame.SourceFrameImpl(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    deferredContentStub
                                ];
                            });
                        }));
                        return [
                            4,
                            sourceFrame.setContent(content)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            sourceFrame
                        ];
                }
            });
        });
        return _createSourceFrame.apply(this, arguments);
    }
    function _pasteIntoSourceFrame() {
        _pasteIntoSourceFrame = _async_to_generator(function() {
            var _sourceFrame_element_querySelector_shadowRoot, _sourceFrame_element_querySelector, sourceFrame, codeMirror, dataTransfer;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            createSourceFrame('Example')
                        ];
                    case 1:
                        sourceFrame = _state.sent();
                        codeMirror = ((_sourceFrame_element_querySelector = sourceFrame.element.querySelector('devtools-text-editor')) === null || _sourceFrame_element_querySelector === void 0 ? void 0 : (_sourceFrame_element_querySelector_shadowRoot = _sourceFrame_element_querySelector.shadowRoot) === null || _sourceFrame_element_querySelector_shadowRoot === void 0 ? void 0 : _sourceFrame_element_querySelector_shadowRoot.querySelector('.cm-content')) || null;
                        assert.instanceOf(codeMirror, HTMLDivElement);
                        dataTransfer = new DataTransfer();
                        dataTransfer.setData('text/plain', 'foo');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(codeMirror, {
                            clipboardData: dataTransfer,
                            bubbles: true
                        });
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            {
                                codeMirror: codeMirror,
                                dataTransfer: dataTransfer
                            }
                        ];
                }
            });
        });
        return _pasteIntoSourceFrame.apply(this, arguments);
    }
    it('finds string by simple regex', /*#__PURE__*/ _async_to_generator(function() {
        var sourceFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createSourceFrame('Example')
                    ];
                case 1:
                    sourceFrame = _state.sent();
                    sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('xa', /* caseSensitive */ false, /* isRegex */ true), true);
                    sourceFrame.jumpToSearchResult(0);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 1);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not match always-empty match regex', /*#__PURE__*/ _async_to_generator(function() {
        var sourceFrame, dummySelection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createSourceFrame('Example')
                    ];
                case 1:
                    sourceFrame = _state.sent();
                    sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('Z*', /* caseSensitive */ false, /* isRegex */ true), true);
                    // Check that the search did not find anything.
                    // We do this in a roundabout way: select the whole document, then try to select
                    // the search result and finally verify that the whole document selection
                    // has not changed.
                    dummySelection = sourceFrame.textEditor.createSelection({
                        lineNumber: 0,
                        columnNumber: 0
                    }, {
                        lineNumber: 0,
                        columnNumber: 7
                    });
                    sourceFrame.textEditor.dispatch({
                        selection: dummySelection
                    });
                    sourceFrame.jumpToSearchResult(1);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 0);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 7);
                    return [
                        2
                    ];
            }
        });
    }));
    it('skips empty matches and finds non-empty match by regex', /*#__PURE__*/ _async_to_generator(function() {
        var sourceFrame;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createSourceFrame('Example')
                    ];
                case 1:
                    sourceFrame = _state.sent();
                    sourceFrame.performSearch(new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SearchableView.SearchConfig('a?', /* caseSensitive */ false, /* isRegex */ true), true);
                    sourceFrame.jumpToSearchResult(0);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.from, 2);
                    assert.strictEqual(sourceFrame.textEditor.state.selection.main.to, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows self-XSS warning which the user can disable', /*#__PURE__*/ _async_to_generator(function() {
        var _document_body_querySelector_shadowRoot_querySelector, _document_body_querySelector_shadowRoot, _document_body_querySelector, _dialogShadowRoot_querySelector, _ref, codeMirror, dataTransfer, dialogShadowRoot, title, input, allowButton, dialogContainer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        pasteIntoSourceFrame()
                    ];
                case 1:
                    _ref = _state.sent(), codeMirror = _ref.codeMirror, dataTransfer = _ref.dataTransfer;
                    dialogShadowRoot = ((_document_body_querySelector = document.body.querySelector('[data-devtools-glass-pane]')) === null || _document_body_querySelector === void 0 ? void 0 : (_document_body_querySelector_shadowRoot = _document_body_querySelector.shadowRoot) === null || _document_body_querySelector_shadowRoot === void 0 ? void 0 : (_document_body_querySelector_shadowRoot_querySelector = _document_body_querySelector_shadowRoot.querySelector('.widget')) === null || _document_body_querySelector_shadowRoot_querySelector === void 0 ? void 0 : _document_body_querySelector_shadowRoot_querySelector.shadowRoot) || null;
                    assert.isNotNull(dialogShadowRoot);
                    title = dialogShadowRoot.querySelector('.title');
                    assert.instanceOf(title, HTMLDivElement);
                    assert.strictEqual(title.textContent, 'Do you trust this code?');
                    input = dialogShadowRoot.querySelector('input');
                    assert.instanceOf(input, HTMLInputElement);
                    input.value = 'allow pasting';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(input, {
                        inputType: 'insertText',
                        data: 'allow pasting',
                        bubbles: true,
                        composed: true
                    });
                    allowButton = (_dialogShadowRoot_querySelector = dialogShadowRoot.querySelector('.button')) === null || _dialogShadowRoot_querySelector === void 0 ? void 0 : _dialogShadowRoot_querySelector.children[1];
                    assert.deepEqual(allowButton === null || allowButton === void 0 ? void 0 : allowButton.textContent, 'Allow');
                    assert.instanceOf(allowButton, _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button);
                    allowButton.click();
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(setting.get());
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(codeMirror, {
                        clipboardData: dataTransfer,
                        bubbles: true
                    });
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 3:
                    _state.sent();
                    dialogContainer = document.body.querySelector('[data-devtools-glass-pane]');
                    assert.isNull(dialogContainer);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not show self-XSS warning when disabled via command line', /*#__PURE__*/ _async_to_generator(function() {
        var stub, dialogContainer;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    stub = sinon.stub(_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime, 'queryParam');
                    stub.withArgs('disableSelfXssWarnings').returns('true');
                    return [
                        4,
                        pasteIntoSourceFrame()
                    ];
                case 1:
                    _state.sent();
                    dialogContainer = document.body.querySelector('[data-devtools-glass-pane]');
                    assert.isNull(dialogContainer);
                    stub.restore();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SourceFrame.test.js.map


}),

}]);