"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_StepEditor_test_js"], {
"./panels/recorder/components/StepEditor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../testing/RecorderHelpers.js */ "./panels/recorder/testing/RecorderHelpers.js");
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

// eslint-disable-next-line rulesdir/es_modules_import


// eslint-disable-next-line rulesdir/es_modules_import

var describeWithLocale = _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale;
function getStepEditedPromise(editor) {
    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(editor, 'stepedited').then(function(param) {
        var data = param.data;
        return data;
    });
}
var triggerMicroTaskQueue = function() {
    var _ref = _async_to_generator(function() {
        var n;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    n = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : 1;
                    _state.label = 1;
                case 1:
                    if (!(n > 0)) return [
                        3,
                        3
                    ];
                    --n;
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        1
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function triggerMicroTaskQueue() {
        return _ref.apply(this, arguments);
    };
}();
describeWithLocale('StepEditor', function() {
    var renderEditor = function renderEditor(step) {
        return _renderEditor.apply(this, arguments);
    };
    var getInputByAttribute = function getInputByAttribute(editor, attribute) {
        var input = editor.renderRoot.querySelector('.attribute[data-attribute="'.concat(attribute, '"] devtools-suggestion-input'));
        if (!input) {
            throw new Error("".concat(attribute, " devtools-suggestion-input not found"));
        }
        return input;
    };
    var getAllInputValues = function getAllInputValues(editor) {
        var result = [];
        var inputs = editor.renderRoot.querySelectorAll('devtools-suggestion-input');
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = inputs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var input = _step.value;
                result.push(input.value);
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
        return result;
    };
    var addOptionalField = function addOptionalField(editor, attribute) {
        return _addOptionalField.apply(this, arguments);
    };
    var deleteOptionalField = function deleteOptionalField(editor, attribute) {
        return _deleteOptionalField.apply(this, arguments);
    };
    var clickFrameLevelButton = function clickFrameLevelButton(editor, className) {
        return _clickFrameLevelButton.apply(this, arguments);
    };
    var clickSelectorLevelButton = function clickSelectorLevelButton(editor, path, className) {
        return _clickSelectorLevelButton.apply(this, arguments);
    };
    var createFocusOutsideButton = /**
     * Extra button to be able to focus on it in tests to see how
     * the step editor reacts when the focus moves outside of it.
     */ function createFocusOutsideButton() {
        var button = document.createElement('button');
        button.innerText = 'click';
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(button, {
            allowMultipleChildren: true
        });
        return {
            focus: function focus() {
                button.focus();
            }
        };
    };
    function _renderEditor() {
        _renderEditor = _async_to_generator(function(step) {
            var editor;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        editor = document.createElement('devtools-recorder-step-editor');
                        editor.step = structuredClone(step);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(editor, {});
                        return [
                            4,
                            editor.updateComplete
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
    function _addOptionalField() {
        _addOptionalField = _async_to_generator(function(editor, attribute) {
            var button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        button = editor.renderRoot.querySelector('devtools-button.add-row[data-attribute="'.concat(attribute, '"]'));
                        assert.instanceOf(button, HTMLElement);
                        button.click();
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            editor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _addOptionalField.apply(this, arguments);
    }
    function _deleteOptionalField() {
        _deleteOptionalField = _async_to_generator(function(editor, attribute) {
            var button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        button = editor.renderRoot.querySelector('devtools-button.delete-row[data-attribute="'.concat(attribute, '"]'));
                        assert.instanceOf(button, HTMLElement);
                        button.click();
                        return [
                            4,
                            triggerMicroTaskQueue()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            editor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _deleteOptionalField.apply(this, arguments);
    }
    function _clickFrameLevelButton() {
        _clickFrameLevelButton = _async_to_generator(function(editor, className) {
            var button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        button = editor.renderRoot.querySelector('.attribute[data-attribute="frame"] devtools-button'.concat(className));
                        assert.instanceOf(button, HTMLElement);
                        button.click();
                        return [
                            4,
                            editor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _clickFrameLevelButton.apply(this, arguments);
    }
    function _clickSelectorLevelButton() {
        _clickSelectorLevelButton = _async_to_generator(function(editor, path, className) {
            var button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        button = editor.renderRoot.querySelector('[data-selector-path="'.concat(path.join('.'), '"] devtools-button').concat(className));
                        assert.instanceOf(button, HTMLElement);
                        button.click();
                        return [
                            4,
                            editor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _clickSelectorLevelButton.apply(this, arguments);
    }
    beforeEach(function() {
        _testing_RecorderHelpers_js__WEBPACK_IMPORTED_MODULE_3__.installMocksForRecordingPlayer();
    });
    it('should edit step type', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, input, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
                            selectors: [
                                [
                                    '.cls'
                                ]
                            ],
                            offsetX: 1,
                            offsetY: 1
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    input = getInputByAttribute(editor, 'type');
                    input.focus();
                    input.value = 'change';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 3:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 4:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Change,
                            selectors: [
                                '.cls'
                            ],
                            value: 'Value'
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'change',
                        '.cls',
                        'Value'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should edit step type via dropdown', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, input, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    input = getInputByAttribute(editor, 'type');
                    input.focus();
                    input.value = '';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    // Use the drop down.
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'ArrowDown',
                        bubbles: true,
                        composed: true
                    }));
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 3:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 4:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
                            selectors: [
                                '.cls'
                            ],
                            offsetX: 1,
                            offsetY: 1
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'click',
                        '.cls',
                        '1',
                        '1'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should edit other attributes', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, input, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.CustomStep,
                            name: 'test',
                            parameters: {}
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    input = getInputByAttribute(editor, 'parameters');
                    input.focus();
                    input.value = '{"custom":"test"}';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 3:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 4:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.CustomStep,
                            name: 'test',
                            parameters: {
                                custom: 'test'
                            }
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'customStep',
                        'test',
                        '{"custom":"test"}'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should close dropdown on Enter', /*#__PURE__*/ _async_to_generator(function() {
        var editor, input, suggestions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    input = getInputByAttribute(editor, 'type');
                    input.focus();
                    input.value = '';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    suggestions = input.renderRoot.querySelector('devtools-suggestion-box');
                    if (!suggestions) {
                        throw new Error('Failed to find element');
                    }
                    assert.strictEqual(window.getComputedStyle(suggestions).display, 'block');
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    assert.strictEqual(window.getComputedStyle(suggestions).display, 'none');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should close dropdown on focus elsewhere', /*#__PURE__*/ _async_to_generator(function() {
        var editor, button, input, suggestions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    button = createFocusOutsideButton();
                    input = getInputByAttribute(editor, 'type');
                    input.focus();
                    input.value = '';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    suggestions = input.renderRoot.querySelector('devtools-suggestion-box');
                    if (!suggestions) {
                        throw new Error('Failed to find element');
                    }
                    assert.strictEqual(window.getComputedStyle(suggestions).display, 'block');
                    button.focus();
                    assert.strictEqual(window.getComputedStyle(suggestions).display, 'none');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add optional fields', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        addOptionalField(editor, 'x')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            x: 0
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '0'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add the duration field', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
                            offsetX: 1,
                            offsetY: 1,
                            selectors: [
                                '.cls'
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        addOptionalField(editor, 'duration')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
                            offsetX: 1,
                            offsetY: 1,
                            selectors: [
                                '.cls'
                            ],
                            duration: 50
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'click',
                        '.cls',
                        '1',
                        '1',
                        '50'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add the parameters field', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.cls'
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        addOptionalField(editor, 'properties')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.cls'
                            ],
                            properties: {}
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'waitForElement',
                        '.cls',
                        '{}'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should edit timeout fields', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
                            url: 'https://example.com'
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        addOptionalField(editor, 'timeout')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
                            url: 'https://example.com',
                            timeout: 5000
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'navigate',
                        'https://example.com',
                        '5000'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should delete optional fields', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            x: 1
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        deleteOptionalField(editor, 'x')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add/remove frames', /*#__PURE__*/ _async_to_generator(function() {
        var editor, _editor_shadowRoot_activeElement, _editor_shadowRoot, step, _, _editor_shadowRoot_activeElement1, _editor_shadowRoot1, step1, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            frame: [
                                0
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        clickFrameLevelButton(editor, '.add-frame')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            frame: [
                                0,
                                0
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '0',
                        '0'
                    ]);
                    assert.isTrue((_editor_shadowRoot = editor.shadowRoot) === null || _editor_shadowRoot === void 0 ? void 0 : (_editor_shadowRoot_activeElement = _editor_shadowRoot.activeElement) === null || _editor_shadowRoot_activeElement === void 0 ? void 0 : _editor_shadowRoot_activeElement.matches('devtools-suggestion-input[data-path="frame.1"]'));
                    step1 = getStepEditedPromise(editor);
                    return [
                        4,
                        clickFrameLevelButton(editor, '.remove-frame')
                    ];
                case 4:
                    _state.sent();
                    _1 = assert.deepStrictEqual;
                    return [
                        4,
                        step1
                    ];
                case 5:
                    _1.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            frame: [
                                0
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '0'
                    ]);
                    assert.isTrue((_editor_shadowRoot1 = editor.shadowRoot) === null || _editor_shadowRoot1 === void 0 ? void 0 : (_editor_shadowRoot_activeElement1 = _editor_shadowRoot1.activeElement) === null || _editor_shadowRoot_activeElement1 === void 0 ? void 0 : _editor_shadowRoot_activeElement1.matches('devtools-suggestion-input[data-path="frame.0"]'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add/remove selector parts', /*#__PURE__*/ _async_to_generator(function() {
        var editor, _editor_shadowRoot_activeElement, _editor_shadowRoot, step, _, _editor_shadowRoot_activeElement1, _editor_shadowRoot1, step1, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                [
                                    '.part1'
                                ]
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        clickSelectorLevelButton(editor, [
                            0,
                            0
                        ], '.add-selector-part')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                [
                                    '.part1',
                                    '.cls'
                                ]
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '.part1',
                        '.cls'
                    ]);
                    assert.isTrue((_editor_shadowRoot = editor.shadowRoot) === null || _editor_shadowRoot === void 0 ? void 0 : (_editor_shadowRoot_activeElement = _editor_shadowRoot.activeElement) === null || _editor_shadowRoot_activeElement === void 0 ? void 0 : _editor_shadowRoot_activeElement.matches('devtools-suggestion-input[data-path="selectors.0.1"]'));
                    step1 = getStepEditedPromise(editor);
                    return [
                        4,
                        clickSelectorLevelButton(editor, [
                            0,
                            0
                        ], '.remove-selector-part')
                    ];
                case 4:
                    _state.sent();
                    _1 = assert.deepStrictEqual;
                    return [
                        4,
                        step1
                    ];
                case 5:
                    _1.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                '.cls'
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '.cls'
                    ]);
                    assert.isTrue((_editor_shadowRoot1 = editor.shadowRoot) === null || _editor_shadowRoot1 === void 0 ? void 0 : (_editor_shadowRoot_activeElement1 = _editor_shadowRoot1.activeElement) === null || _editor_shadowRoot_activeElement1 === void 0 ? void 0 : _editor_shadowRoot_activeElement1.matches('devtools-suggestion-input[data-path="selectors.0.0"]'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add/remove selectors', /*#__PURE__*/ _async_to_generator(function() {
        var editor, _editor_shadowRoot_activeElement, _editor_shadowRoot, step, _, _editor_shadowRoot_activeElement1, _editor_shadowRoot1, step1, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                [
                                    '.part1'
                                ]
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        clickSelectorLevelButton(editor, [
                            0
                        ], '.add-selector')
                    ];
                case 2:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 3:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                '.part1',
                                '.cls'
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '.part1',
                        '.cls'
                    ]);
                    assert.isTrue((_editor_shadowRoot = editor.shadowRoot) === null || _editor_shadowRoot === void 0 ? void 0 : (_editor_shadowRoot_activeElement = _editor_shadowRoot.activeElement) === null || _editor_shadowRoot_activeElement === void 0 ? void 0 : _editor_shadowRoot_activeElement.matches('devtools-suggestion-input[data-path="selectors.1.0"]'));
                    step1 = getStepEditedPromise(editor);
                    return [
                        4,
                        clickSelectorLevelButton(editor, [
                            1
                        ], '.remove-selector')
                    ];
                case 4:
                    _state.sent();
                    _1 = assert.deepStrictEqual;
                    return [
                        4,
                        step1
                    ];
                case 5:
                    _1.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                '.part1'
                            ]
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'scroll',
                        '.part1'
                    ]);
                    assert.isTrue((_editor_shadowRoot1 = editor.shadowRoot) === null || _editor_shadowRoot1 === void 0 ? void 0 : (_editor_shadowRoot_activeElement1 = _editor_shadowRoot1.activeElement) === null || _editor_shadowRoot_activeElement1 === void 0 ? void 0 : _editor_shadowRoot_activeElement1.matches('devtools-suggestion-input[data-path="selectors.0.0"]'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('should become readonly if disabled', /*#__PURE__*/ _async_to_generator(function() {
        var editor, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, input;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll,
                            selectors: [
                                [
                                    '.part1'
                                ]
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    editor.disabled = true;
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 2:
                    _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = editor.renderRoot.querySelectorAll('devtools-suggestion-input')[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            input = _step.value;
                            assert.isTrue(input.disabled);
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
    it('clears text selection when navigating away from devtools-suggestion-input', /*#__PURE__*/ _async_to_generator(function() {
        var _window_getSelection, _window_getSelection1, editor, input;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Scroll
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    // Clicking on the type devtools-suggestion-input should select the entire text in the field.
                    input = getInputByAttribute(editor, 'type');
                    input.focus();
                    input.click();
                    assert.strictEqual((_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.toString(), 'scroll');
                    // Navigating away should remove the selection.
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(input, {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    });
                    assert.strictEqual((_window_getSelection1 = window.getSelection()) === null || _window_getSelection1 === void 0 ? void 0 : _window_getSelection1.toString(), '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add an attribute after another\'s deletion', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                [
                                    '.cls'
                                ]
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    return [
                        4,
                        addOptionalField(editor, 'operator')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        deleteOptionalField(editor, 'operator')
                    ];
                case 3:
                    _state.sent();
                    step = getStepEditedPromise(editor);
                    return [
                        4,
                        addOptionalField(editor, 'count')
                    ];
                case 4:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 5:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.cls'
                            ],
                            count: 1
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'waitForElement',
                        '.cls',
                        '1'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should edit asserted events', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, input, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
                            url: 'www.example.com',
                            assertedEvents: [
                                {
                                    type: 'navigation',
                                    title: 'Test',
                                    url: 'www.example.com'
                                }
                            ]
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    input = getInputByAttribute(editor, 'assertedEvents');
                    input.focus();
                    input.value = 'None';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 3:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 4:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
                            url: 'www.example.com',
                            assertedEvents: [
                                {
                                    type: 'navigation',
                                    title: 'None',
                                    url: 'www.example.com'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should add/remove attribute assertion', /*#__PURE__*/ _async_to_generator(function() {
        var editor, _editor_renderRoot_querySelectorAll_, step, _, _editor_renderRoot_querySelectorAll_1, step1, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.part1'
                            ],
                            attributes: {
                                a: 'b'
                            }
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    (_editor_renderRoot_querySelectorAll_ = editor.renderRoot.querySelectorAll('.add-attribute-assertion')[0]) === null || _editor_renderRoot_querySelectorAll_ === void 0 ? void 0 : _editor_renderRoot_querySelectorAll_.click();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 2:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.part1'
                            ],
                            attributes: {
                                a: 'b',
                                attribute: 'value'
                            }
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'waitForElement',
                        '.part1',
                        'a',
                        'b',
                        'attribute',
                        'value'
                    ]);
                    step1 = getStepEditedPromise(editor);
                    (_editor_renderRoot_querySelectorAll_1 = editor.renderRoot.querySelectorAll('.remove-attribute-assertion')[1]) === null || _editor_renderRoot_querySelectorAll_1 === void 0 ? void 0 : _editor_renderRoot_querySelectorAll_1.click();
                    _1 = assert.deepStrictEqual;
                    return [
                        4,
                        step1
                    ];
                case 3:
                    _1.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.part1'
                            ],
                            attributes: {
                                a: 'b'
                            }
                        }
                    ]);
                    assert.deepStrictEqual(getAllInputValues(editor), [
                        'waitForElement',
                        '.part1',
                        'a',
                        'b'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should edit attribute assertion', /*#__PURE__*/ _async_to_generator(function() {
        var editor, step, input, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderEditor({
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.part1'
                            ],
                            attributes: {
                                a: 'b'
                            }
                        })
                    ];
                case 1:
                    editor = _state.sent();
                    step = getStepEditedPromise(editor);
                    input = getInputByAttribute(editor, 'attributes');
                    input.focus();
                    input.value = 'innerText';
                    return [
                        4,
                        input.updateComplete
                    ];
                case 2:
                    _state.sent();
                    input.dispatchEvent(new KeyboardEvent('keydown', {
                        key: 'Enter',
                        bubbles: true,
                        composed: true
                    }));
                    return [
                        4,
                        editor.updateComplete
                    ];
                case 3:
                    _state.sent();
                    _ = assert.deepStrictEqual;
                    return [
                        4,
                        step
                    ];
                case 4:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            type: _models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.WaitForElement,
                            selectors: [
                                '.part1'
                            ],
                            attributes: {
                                innerText: 'b'
                            }
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=StepEditor.test.js.map


}),
"./panels/recorder/testing/RecorderHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCustomStep: function() { return createCustomStep; },
  installMocksForRecordingPlayer: function() { return installMocksForRecordingPlayer; },
  installMocksForTargetManager: function() { return installMocksForTargetManager; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var createCustomStep = function() {
    return {
        type: _models_models_js__WEBPACK_IMPORTED_MODULE_1__.Schema.StepType.CustomStep,
        name: 'dummy step',
        parameters: {}
    };
};
var installMocksForRecordingPlayer = function() {
    var mock = {
        page: {
            _client: function() {
                return {
                    send: sinon.stub().resolves()
                };
            },
            frames: function() {
                return [
                    {
                        client: {
                            send: sinon.stub().resolves()
                        }
                    }
                ];
            },
            evaluate: function() {
                return '';
            },
            url: function url() {
                return '';
            },
            bringToFront: function bringToFront() {
                return Promise.resolve();
            }
        },
        browser: {
            pages: function() {
                return [
                    mock.page
                ];
            },
            disconnect: function() {
                return sinon.stub().resolves();
            }
        }
    };
    sinon.stub(_models_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer, 'connectPuppeteer').resolves(mock);
};
var installMocksForTargetManager = function() {
    var stub = {
        suspendAllTargets: sinon.stub().resolves(),
        resumeAllTargets: sinon.stub().resolves(),
        primaryPageTarget: sinon.stub().returns({
            targetAgent: sinon.stub().returns({})
        })
    };
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager, 'instance').callsFake(function() {
        return stub;
    });
}; //# sourceMappingURL=RecorderHelpers.js.map


}),

}]);