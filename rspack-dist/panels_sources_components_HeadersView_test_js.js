"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_components_HeadersView_test_js"], {
"./panels/sources/components/HeadersView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/ContextMenuHelpers.js */ "./testing/ContextMenuHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./panels/sources/components/components.js");
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









var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
describe('HeadersView', function() {
    var renderEditor = function renderEditor() {
        return _renderEditor.apply(this, arguments);
    };
    var renderEditorWithinWrapper = function renderEditorWithinWrapper() {
        return _renderEditorWithinWrapper.apply(this, arguments);
    };
    var changeEditable = function changeEditable(editable, value) {
        return _changeEditable.apply(this, arguments);
    };
    var pressButton = function pressButton(shadowRoot, rowIndex, selector) {
        return _pressButton.apply(this, arguments);
    };
    var getRowContent = function getRowContent(shadowRoot) {
        var rows = Array.from(shadowRoot.querySelectorAll('.row'));
        return rows.map(function(row) {
            return Array.from(row.querySelectorAll('div, .editable')).map(function(element) {
                return element.innerText;
            }).join('');
        });
    };
    var getSingleRowContent = function getSingleRowContent(shadowRoot, rowIndex) {
        var rows = Array.from(shadowRoot.querySelectorAll('.row'));
        assert.isTrue(rows.length > rowIndex);
        return Array.from(rows[rowIndex].querySelectorAll('div, .editable')).map(function(element) {
            return element.innerText;
        }).join('');
    };
    var isWholeElementContentSelected = function isWholeElementContentSelected(element) {
        var textContent = element.textContent;
        if (!textContent || textContent.length < 1 || !element.hasSelection()) {
            return false;
        }
        var selection = element.getComponentSelection();
        if (!selection || selection.rangeCount < 1) {
            return false;
        }
        if (selection.anchorNode !== selection.focusNode) {
            return false;
        }
        var range = selection.getRangeAt(0);
        return range.endOffset - range.startOffset === textContent.length;
    };
    var commitWorkingCopySpy = sinon.spy();
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    beforeEach(function() {
        commitWorkingCopySpy.resetHistory();
        (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.resetRecordedMetrics)();
    });
    function _renderEditor() {
        _renderEditor = _async_to_generator(function() {
            var editor;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        editor = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersViewComponent();
                        editor.data = {
                            headerOverrides: [
                                {
                                    applyTo: '*',
                                    headers: [
                                        {
                                            name: 'server',
                                            value: 'DevTools Unit Test Server'
                                        },
                                        {
                                            name: 'access-control-allow-origin',
                                            value: '*'
                                        }
                                    ]
                                },
                                {
                                    applyTo: '*.jpg',
                                    headers: [
                                        {
                                            name: 'jpg-header',
                                            value: 'only for jpg files'
                                        }
                                    ]
                                }
                            ],
                            parsingError: false,
                            uiSourceCode: {
                                name: function() {
                                    return '.headers';
                                },
                                setWorkingCopy: function() {},
                                commitWorkingCopy: commitWorkingCopySpy
                            }
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
                        assert.isNotNull(editor.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            editor
                        ];
                }
            });
        });
        return _renderEditor.apply(this, arguments);
    }
    function _renderEditorWithinWrapper() {
        _renderEditorWithinWrapper = _async_to_generator(function() {
            var workspace, headers, _createFileSystemUISourceCode, uiSourceCode, project, editorWrapper, editor;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance();
                        headers = '[\n      {\n        "applyTo": "*",\n        "headers": [\n          {\n            "name": "server",\n            "value": "DevTools Unit Test Server"\n          },\n          {\n            "name": "access-control-allow-origin",\n            "value": "*"\n          }\n        ]\n      },\n      {\n        "applyTo": "*.jpg",\n        "headers": [{\n          "name": "jpg-header",\n          "value": "only for jpg files"\n        }]\n      }\n    ]';
                        _createFileSystemUISourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createFileSystemUISourceCode)({
                            url: 'file:///path/to/overrides/example.html',
                            mimeType: 'text/html',
                            content: headers
                        }), uiSourceCode = _createFileSystemUISourceCode.uiSourceCode, project = _createFileSystemUISourceCode.project;
                        uiSourceCode.commitWorkingCopy = commitWorkingCopySpy;
                        project.canSetFileContent = function() {
                            return true;
                        };
                        editorWrapper = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersView(uiSourceCode);
                        return [
                            4,
                            uiSourceCode.requestContentData()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        editor = editorWrapper.getComponent();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
                        assert.isNotNull(editor.shadowRoot);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        workspace.removeProject(project);
                        return [
                            2,
                            editor
                        ];
                }
            });
        });
        return _renderEditorWithinWrapper.apply(this, arguments);
    }
    function _changeEditable() {
        _changeEditable = _async_to_generator(function(editable, value) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusEvent)(editable, {
                            bubbles: true
                        });
                        editable.innerText = value;
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(editable, {
                            inputType: 'insertText',
                            data: value,
                            bubbles: true,
                            composed: true
                        });
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(editable, {
                            bubbles: true
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                        return [
                            2
                        ];
                }
            });
        });
        return _changeEditable.apply(this, arguments);
    }
    function _pressButton() {
        _pressButton = _async_to_generator(function(shadowRoot, rowIndex, selector) {
            var rowElements, button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        rowElements = shadowRoot.querySelectorAll('.row');
                        button = rowElements[rowIndex].querySelector(selector);
                        assert.instanceOf(button, HTMLElement);
                        button.click();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _pressButton.apply(this, arguments);
    }
    it('shows an error message when parsingError is true', /*#__PURE__*/ _async_to_generator(function() {
        var editor, errorHeader;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    editor = new _components_js__WEBPACK_IMPORTED_MODULE_8__.HeadersView.HeadersViewComponent();
                    editor.data = {
                        headerOverrides: [],
                        parsingError: true,
                        uiSourceCode: {
                            name: function() {
                                return '.headers';
                            }
                        }
                    };
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(editor);
                    assert.isNotNull(editor.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    errorHeader = editor.shadowRoot.querySelector('.error-header');
                    assert.strictEqual(errorHeader === null || errorHeader === void 0 ? void 0 : errorHeader.textContent, 'Error when parsing \'.headers\'.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays data and allows editing', /*#__PURE__*/ _async_to_generator(function() {
        var _addRuleButton_textContent, editor, rows, addRuleButton, learnMoreLink, editables;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    addRuleButton = editor.shadowRoot.querySelector('.add-block');
                    assert.instanceOf(addRuleButton, HTMLElement);
                    assert.strictEqual((_addRuleButton_textContent = addRuleButton.textContent) === null || _addRuleButton_textContent === void 0 ? void 0 : _addRuleButton_textContent.trim(), 'Add override rule');
                    learnMoreLink = editor.shadowRoot.querySelector('.learn-more-row x-link');
                    assert.instanceOf(learnMoreLink, HTMLElement);
                    assert.strictEqual(learnMoreLink.title, 'https://goo.gle/devtools-override');
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    return [
                        4,
                        changeEditable(editables[0], 'index.html')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[1], 'content-type')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[4], 'example.com')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[7], 'is image')
                    ];
                case 5:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:index.html',
                        'content-type:DevTools Unit Test Server',
                        'access-control-allow-origin:example.com',
                        'Apply to:*.jpg',
                        'jpg-header:is image'
                    ]);
                    assert.strictEqual(commitWorkingCopySpy.callCount, 4);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resets edited value to previous state on Escape key', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, headerValue, headerName;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    assert.strictEqual(editables.length, 8);
                    headerValue = editables[2];
                    headerValue.focus();
                    headerValue.innerText = 'discard_me';
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:discard_me');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(headerValue, {
                        key: 'Escape',
                        bubbles: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
                    headerName = editables[1];
                    headerName.focus();
                    headerName.innerText = 'discard_me_2';
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'discard_me_2:DevTools Unit Test Server');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(headerName, {
                        key: 'Escape',
                        bubbles: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 1), 'server:DevTools Unit Test Server');
                    return [
                        2
                    ];
            }
        });
    }));
    it('selects the whole content when clicking on an editable field', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    element = editables[0];
                    element.focus();
                    assert.isTrue(isWholeElementContentSelected(element));
                    element = editables[1];
                    element.focus();
                    assert.isTrue(isWholeElementContentSelected(element));
                    element = editables[2];
                    element.focus();
                    assert.isTrue(isWholeElementContentSelected(element));
                    return [
                        2
                    ];
            }
        });
    }));
    it('un-selects the content when an editable field loses focus', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, element;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    element = editables[0];
                    element.focus();
                    assert.isTrue(isWholeElementContentSelected(element));
                    element.blur();
                    assert.isFalse(element.hasSelection());
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles pressing \'Enter\' key by removing focus and moving it to the next field if possible', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, lastHeaderName, lastHeaderValue, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, editable;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    assert.strictEqual(editables.length, 8);
                    lastHeaderName = editables[6];
                    lastHeaderValue = editables[7];
                    assert.isFalse(lastHeaderName.hasSelection());
                    assert.isFalse(lastHeaderValue.hasSelection());
                    lastHeaderName.focus();
                    assert.isTrue(isWholeElementContentSelected(lastHeaderName));
                    assert.isFalse(lastHeaderValue.hasSelection());
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(lastHeaderName, {
                        key: 'Enter',
                        bubbles: true
                    });
                    assert.isFalse(lastHeaderName.hasSelection());
                    assert.isTrue(isWholeElementContentSelected(lastHeaderValue));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchKeyDownEvent)(lastHeaderValue, {
                        key: 'Enter',
                        bubbles: true
                    });
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = editables[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            editable = _step.value;
                            assert.isFalse(editable.hasSelection());
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
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets empty \'ApplyTo\' to \'*\'', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, applyTo;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    assert.strictEqual(editables.length, 8);
                    applyTo = editables[5];
                    assert.strictEqual(applyTo.innerHTML, '*.jpg');
                    applyTo.innerText = '';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(applyTo, {
                        inputType: 'deleteContentBackward',
                        data: null,
                        bubbles: true
                    });
                    assert.strictEqual(applyTo.innerHTML, '');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(applyTo, {
                        bubbles: true
                    });
                    assert.strictEqual(applyTo.innerHTML, '*');
                    assert.strictEqual(commitWorkingCopySpy.callCount, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes the entire header when the header name is deleted', /*#__PURE__*/ _async_to_generator(function() {
        var editor, rows, editables, headerName;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditorWithinWrapper()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    assert.strictEqual(editables.length, 8);
                    headerName = editables[1];
                    assert.strictEqual(headerName.innerHTML, 'server');
                    headerName.innerText = '';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchInputEvent)(headerName, {
                        inputType: 'deleteContentBackward',
                        data: null,
                        bubbles: true
                    });
                    assert.strictEqual(headerName.innerHTML, '');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchFocusOutEvent)(headerName, {
                        bubbles: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    assert.strictEqual(commitWorkingCopySpy.callCount, 1);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows adding headers', /*#__PURE__*/ _async_to_generator(function() {
        var editor, rows, editables;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditorWithinWrapper()
                    ];
                case 1:
                    editor = _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    return [
                        4,
                        pressButton(editor.shadowRoot, 1, '.add-header')
                    ];
                case 3:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'header-name-1:header value',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    return [
                        4,
                        changeEditable(editables[3], 'cache-control')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[4], 'max-age=1000')
                    ];
                case 5:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'cache-control:max-age=1000',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows adding "ApplyTo"-blocks', /*#__PURE__*/ _async_to_generator(function() {
        var editor, rows, button, editables;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditorWithinWrapper()
                    ];
                case 1:
                    editor = _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    button = editor.shadowRoot.querySelector('.add-block');
                    assert.instanceOf(button, HTMLElement);
                    button.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files',
                        'Apply to:*',
                        'header-name-1:header value'
                    ]);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    return [
                        4,
                        changeEditable(editables[8], 'articles/*')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[9], 'cache-control')
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        changeEditable(editables[10], 'max-age=1000')
                    ];
                case 6:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files',
                        'Apply to:articles/*',
                        'cache-control:max-age=1000'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows removing headers', /*#__PURE__*/ _async_to_generator(function() {
        var editor, rows, hiddenDeleteElements;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditorWithinWrapper()
                    ];
                case 1:
                    editor = _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    return [
                        4,
                        pressButton(editor.shadowRoot, 1, '.remove-header')
                    ];
                case 3:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    return [
                        4,
                        editor.shadowRoot.querySelectorAll('.row.padded > .remove-header[hidden]')
                    ];
                case 4:
                    hiddenDeleteElements = _state.sent();
                    assert.isTrue(hiddenDeleteElements.length === 0, 'remove-header button is visible');
                    return [
                        4,
                        pressButton(editor.shadowRoot, 1, '.remove-header')
                    ];
                case 5:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'header-name-1:header value',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    return [
                        4,
                        editor.shadowRoot.querySelectorAll('.row.padded > .remove-header[hidden]')
                    ];
                case 6:
                    hiddenDeleteElements = _state.sent();
                    assert.isTrue(hiddenDeleteElements.length === 1, 'remove-header button is hidden');
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows removing "ApplyTo"-blocks', /*#__PURE__*/ _async_to_generator(function() {
        var editor, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditorWithinWrapper()
                    ];
                case 1:
                    editor = _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*',
                        'server:DevTools Unit Test Server',
                        'access-control-allow-origin:*',
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    return [
                        4,
                        pressButton(editor.shadowRoot, 0, '.remove-block')
                    ];
                case 3:
                    _state.sent();
                    rows = getRowContent(editor.shadowRoot);
                    assert.deepEqual(rows, [
                        'Apply to:*.jpg',
                        'jpg-header:only for jpg files'
                    ]);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes formatting for pasted content', /*#__PURE__*/ _async_to_generator(function() {
        var editor, editables, headerValue, dt;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    editables = editor.shadowRoot.querySelectorAll('.editable');
                    assert.strictEqual(editables.length, 8);
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 2), 'access-control-allow-origin:*');
                    headerValue = editables[4];
                    headerValue.focus();
                    dt = new DataTransfer();
                    dt.setData('text/plain', 'foo\nbar');
                    dt.setData('text/html', 'This is <b>bold</b>');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.dispatchPasteEvent)(headerValue, {
                        clipboardData: dt,
                        bubbles: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepEqual(getSingleRowContent(editor.shadowRoot, 2), 'access-control-allow-origin:foo bar');
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_6__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.HeaderOverrideHeadersFileEdited));
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows context menu', /*#__PURE__*/ _async_to_generator(function() {
        var editor, contextMenu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor()
                    ];
                case 1:
                    editor = _state.sent();
                    assert.isNotNull(editor.shadowRoot);
                    contextMenu = (0,_testing_ContextMenuHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getContextMenuForElement)(editor);
                    assert.exists(contextMenu);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=HeadersView.test.js.map


}),
"./panels/sources/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointsView: function() { return /* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BreakpointsViewUtils: function() { return /* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeadersView: function() { return /* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./panels/sources/components/BreakpointsView.js");
/* harmony import */var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
/* harmony import */var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./panels/sources/components/HeadersView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=components.js.map


}),
"./testing/ContextMenuHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  findMenuItemWithLabel: function() { return findMenuItemWithLabel; },
  getContextMenuForElement: function() { return getContextMenuForElement; },
  getMenuForShiftClick: function() { return getMenuForShiftClick; },
  getMenuForToolbarButton: function() { return getMenuForToolbarButton; },
  getMenuItemLabels: function() { return getMenuItemLabels; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getMenu(action) {
    var sandbox = sinon.createSandbox();
    var contextMenuShow = sandbox.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ContextMenu.ContextMenu.prototype, 'show').resolves();
    action();
    sandbox.restore();
    return contextMenuShow.thisValues[0];
}
function getMenuForToolbarButton(button) {
    return getMenu(function() {
        button.clicked(new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        }));
    });
}
function findMenuItemWithLabel(section, label) {
    return section.items.find(function(item) {
        return item.buildDescriptor().label === label;
    });
}
function getMenuItemLabels(section) {
    return section.items.map(function(item) {
        return item.buildDescriptor().label;
    });
}
function getContextMenuForElement(element, target) {
    return getMenu(function() {
        var event = new MouseEvent('contextmenu', {
            bubbles: true
        });
        if (target) {
            sinon.stub(event, 'target').value(target);
        }
        element.dispatchEvent(event);
    });
}
function getMenuForShiftClick(element) {
    return getMenu(function() {
        element.dispatchEvent(new MouseEvent('click', {
            shiftKey: true
        }));
    });
} //# sourceMappingURL=ContextMenuHelpers.js.map


}),
"./testing/UserMetricsHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  recordedMetricsContain: function() { return recordedMetricsContain; },
  resetRecordedMetrics: function() { return resetRecordedMetrics; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.
 */ function recordedMetricsContain(actionName, actionCode) {
    return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(function(event) {
        return event.actionName === actionName && event.actionCode === actionCode;
    });
}
function resetRecordedMetrics() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];
} //# sourceMappingURL=UserMetricsHelpers.js.map


}),

}]);