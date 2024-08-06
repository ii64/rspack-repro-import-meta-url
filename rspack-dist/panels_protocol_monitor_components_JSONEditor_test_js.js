"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_protocol_monitor_components_JSONEditor_test_js"], {
"./panels/protocol_monitor/components/JSONEditor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../protocol_monitor.js */ "./panels/protocol_monitor/protocol_monitor.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.js */ "./panels/protocol_monitor/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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









var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('JSONEditor', function() {
    var renderJSONEditor = function() {
        var jsonEditor = new _components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.JSONEditor();
        jsonEditor.metadataByCommand = new Map();
        jsonEditor.typesByName = new Map();
        jsonEditor.enumsByName = new Map();
        jsonEditor.connectedCallback();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(jsonEditor);
        return jsonEditor;
    };
    var populateMetadata = function() {
        var _ref = _async_to_generator(function(jsonEditor) {
            var mockDomain, metadataByCommand;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        mockDomain = [
                            {
                                domain: 'Test',
                                metadata: {
                                    'Test.test': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'string',
                                                optional: false,
                                                typeRef: 'Test.testRef'
                                            }
                                        ],
                                        description: 'Description1.',
                                        replyArgs: [
                                            'Test1'
                                        ]
                                    },
                                    'Test.test2': {
                                        parameters: [
                                            {
                                                'optional': true,
                                                'type': 'array',
                                                'name': 'test2',
                                                'typeRef': 'string'
                                            }
                                        ]
                                    },
                                    'Test.test3': {
                                        parameters: [
                                            {
                                                'optional': false,
                                                'type': 'object',
                                                'value': [
                                                    {
                                                        'optional': true,
                                                        'type': 'string',
                                                        'name': 'param1'
                                                    },
                                                    {
                                                        'optional': true,
                                                        'type': 'string',
                                                        'name': 'param2'
                                                    }
                                                ],
                                                'name': 'test3',
                                                'typeRef': 'string'
                                            }
                                        ]
                                    },
                                    'Test.test4': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'boolean',
                                                optional: false
                                            }
                                        ],
                                        description: 'Description4.',
                                        replyArgs: [
                                            'Test4'
                                        ]
                                    },
                                    'Test.test5': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'string',
                                                optional: true
                                            },
                                            {
                                                name: 'test2',
                                                type: 'string',
                                                optional: true
                                            }
                                        ],
                                        description: 'Description5.',
                                        replyArgs: [
                                            'Test5'
                                        ]
                                    },
                                    'Test.test6': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'number',
                                                optional: true
                                            }
                                        ],
                                        description: 'Description6.',
                                        replyArgs: [
                                            'Test6'
                                        ]
                                    },
                                    'Test.test7': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'boolean',
                                                optional: true
                                            }
                                        ],
                                        description: 'Description7.',
                                        replyArgs: [
                                            'Test7'
                                        ]
                                    },
                                    'Test.test8': {
                                        parameters: [
                                            {
                                                name: 'test',
                                                type: 'number',
                                                optional: false
                                            }
                                        ],
                                        description: 'Description8.',
                                        replyArgs: [
                                            'Test8'
                                        ]
                                    },
                                    'Test.test9': {
                                        parameters: [
                                            {
                                                'name': 'traceConfig',
                                                'type': 'object',
                                                'optional': false,
                                                'description': '',
                                                'typeRef': 'Tracing.TraceConfig'
                                            }
                                        ],
                                        description: 'Description9.',
                                        replyArgs: [
                                            'Test9'
                                        ]
                                    },
                                    'Test.test10': {
                                        parameters: [
                                            {
                                                'name': 'NoTypeRef',
                                                'type': 'object',
                                                'optional': true,
                                                'description': '',
                                                'typeRef': 'NoTypeRef'
                                            }
                                        ],
                                        description: 'Description10.',
                                        replyArgs: [
                                            'Test10'
                                        ]
                                    },
                                    'Test.test11': {
                                        parameters: [
                                            {
                                                'optional': false,
                                                'type': 'array',
                                                'name': 'test11',
                                                'typeRef': 'Test.arrayTypeRef'
                                            }
                                        ]
                                    },
                                    'Test.test12': {
                                        parameters: [
                                            {
                                                'optional': true,
                                                'type': 'object',
                                                'value': [
                                                    {
                                                        'optional': false,
                                                        'type': 'string',
                                                        'name': 'param1'
                                                    },
                                                    {
                                                        'optional': false,
                                                        'type': 'number',
                                                        'name': 'param2'
                                                    }
                                                ],
                                                'name': 'test12',
                                                'typeRef': 'Optional.Object'
                                            }
                                        ]
                                    },
                                    'Test.test13': {
                                        parameters: [
                                            {
                                                name: 'newTest',
                                                type: 'string',
                                                optional: false,
                                                typeRef: 'Test.newTestRef'
                                            }
                                        ],
                                        description: 'Description13.',
                                        replyArgs: [
                                            'Test13'
                                        ]
                                    },
                                    'Test.test14': {
                                        parameters: [
                                            {
                                                'name': 'NoTypeRef',
                                                'type': 'object',
                                                'optional': true,
                                                'description': ''
                                            }
                                        ],
                                        description: 'Description14.',
                                        replyArgs: [
                                            'Test14'
                                        ]
                                    }
                                }
                            }
                        ];
                        metadataByCommand = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.buildProtocolMetadata(mockDomain);
                        jsonEditor.metadataByCommand = metadataByCommand;
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function populateMetadata(jsonEditor) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderHoveredElement = function() {
        var _ref = _async_to_generator(function(element) {
            var clock;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!element) return [
                            3,
                            2
                        ];
                        clock = sinon.useFakeTimers();
                        try {
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchMouseMoveEvent)(element, {
                                bubbles: true,
                                composed: true
                            });
                            clock.tick(300);
                            clock.restore();
                        } finally{
                            clock.restore();
                        }
                        return [
                            4,
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            3,
                            3
                        ];
                    case 2:
                        throw new Error('No parameter has been found');
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function renderHoveredElement(element) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderSuggestionBox = function() {
        var _ref = _async_to_generator(function(command, jsonEditor, enumsByName) {
            var inputs, suggestionInput, suggestionBox, suggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        jsonEditor.command = command;
                        if (enumsByName) {
                            jsonEditor.enumsByName = enumsByName;
                        }
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        inputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input');
                        // inputs[0] corresponds to the devtools-suggestion-input of the command
                        suggestionInput = inputs[1];
                        // Reset the value to empty string because for boolean it will be set to false by default and the correct suggestions will not show
                        suggestionInput.value = '';
                        suggestionInput.focus();
                        return [
                            4,
                            suggestionInput.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        suggestionBox = suggestionInput.renderRoot.querySelector('devtools-suggestion-box');
                        if (!suggestionBox) {
                            throw new Error('No suggestion box shown');
                        }
                        suggestions = Array.from(suggestionBox.renderRoot.querySelectorAll('li')).map(function(item) {
                            if (!item.textContent) {
                                throw new Error('No text inside suggestion');
                            }
                            return item.textContent.replaceAll(/\s/g, '');
                        });
                        return [
                            2,
                            suggestions
                        ];
                }
            });
        });
        return function renderSuggestionBox(command, jsonEditor, enumsByName) {
            return _ref.apply(this, arguments);
        };
    }();
    var serializePopupContent = function() {
        var _container_shadowRoot, _hintDetailView_shadowRoot_textContent, _hintDetailView_shadowRoot;
        var container = document.body.querySelector('[data-devtools-glass-pane]');
        var hintDetailView = container === null || container === void 0 ? void 0 : (_container_shadowRoot = container.shadowRoot) === null || _container_shadowRoot === void 0 ? void 0 : _container_shadowRoot.querySelector('devtools-css-hint-details-view');
        return hintDetailView === null || hintDetailView === void 0 ? void 0 : (_hintDetailView_shadowRoot = hintDetailView.shadowRoot) === null || _hintDetailView_shadowRoot === void 0 ? void 0 : (_hintDetailView_shadowRoot_textContent = _hintDetailView_shadowRoot.textContent) === null || _hintDetailView_shadowRoot_textContent === void 0 ? void 0 : _hintDetailView_shadowRoot_textContent.replaceAll(/\s/g, '');
    };
    var renderEditorForCommand = function() {
        var _ref = _async_to_generator(function(command, parameters) {
            var typesByName, jsonEditor, shadowRoot, inputs, displayedCommand;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        typesByName = new Map();
                        typesByName.set('string', [
                            {
                                name: 'param1',
                                type: 'string',
                                optional: false,
                                description: 'display a string',
                                typeRef: null
                            },
                            {
                                name: 'param2',
                                type: 'string',
                                optional: false,
                                description: 'displays another string',
                                typeRef: null
                            }
                        ]);
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.typesByName = typesByName;
                        jsonEditor.displayCommand(command, parameters);
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        shadowRoot = jsonEditor.renderRoot;
                        inputs = shadowRoot.querySelectorAll('devtools-suggestion-input');
                        displayedCommand = jsonEditor.command;
                        return [
                            2,
                            {
                                inputs: inputs,
                                displayedCommand: displayedCommand,
                                jsonEditor: jsonEditor
                            }
                        ];
                }
            });
        });
        return function renderEditorForCommand(command, parameters) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderParamsWithDefaultValues = function() {
        var _ref = _async_to_generator(function(command) {
            var jsonEditor, param, setDefaultValueButton, input, paramInput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = command;
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 3:
                        _state.sent();
                        setDefaultValueButton = jsonEditor.renderRoot.querySelector('devtools-button');
                        if (!setDefaultValueButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(setDefaultValueButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        input = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input');
                        paramInput = input[1];
                        if (!paramInput) {
                            throw new Error('No input shown');
                        }
                        return [
                            2,
                            paramInput
                        ];
                }
            });
        });
        return function renderParamsWithDefaultValues(command) {
            return _ref.apply(this, arguments);
        };
    }();
    var renderWarningIcon = function() {
        var _ref = _async_to_generator(function(command, enumsByName) {
            var jsonEditor, input, warningIcon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = command;
                        if (enumsByName) {
                            jsonEditor.enumsByName = enumsByName;
                        }
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        // inputs[0] corresponds to the devtools-suggestion-input of the command
                        input = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input')[1];
                        if (!input) {
                            throw Error('No editable content displayed');
                        }
                        input.value = 'Not an accepted value';
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 3:
                        _state.sent();
                        input.focus();
                        input.blur();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        warningIcon = jsonEditor.renderRoot.querySelector('devtools-icon');
                        if (!warningIcon) {
                            throw Error('No icon displayed');
                        }
                        return [
                            2,
                            warningIcon
                        ];
                }
            });
        });
        return function renderWarningIcon(command, enumsByName) {
            return _ref.apply(this, arguments);
        };
    }();
    describe('Binding input bar', function() {
        it('should show the command written in the input bar inside the editor when parameters are strings with the correct value', /*#__PURE__*/ _async_to_generator(function() {
            var _parameterRecorderInput_renderRoot_textContent, cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs, parameterRecorderInput, value, expectedValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'command': 'Test.test',
                            'parameters': {
                                'test': 'test'
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        parameterRecorderInput = inputs[1];
                        value = (_parameterRecorderInput_renderRoot_textContent = parameterRecorderInput.renderRoot.textContent) === null || _parameterRecorderInput_renderRoot_textContent === void 0 ? void 0 : _parameterRecorderInput_renderRoot_textContent.replaceAll(/\s/g, '');
                        expectedValue = 'test';
                        assert.deepStrictEqual(value, expectedValue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show the command written in the input bar inside the editor when parameters are arrays with the correct value', /*#__PURE__*/ _async_to_generator(function() {
            var _parameterRecorderInput_renderRoot_textContent, cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs, parameterRecorderInput, value, expectedValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'command': 'Test.test2',
                            'parameters': {
                                'test2': [
                                    'test'
                                ]
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        parameterRecorderInput = inputs[1];
                        value = (_parameterRecorderInput_renderRoot_textContent = parameterRecorderInput.renderRoot.textContent) === null || _parameterRecorderInput_renderRoot_textContent === void 0 ? void 0 : _parameterRecorderInput_renderRoot_textContent.replaceAll(/\s/g, '');
                        expectedValue = 'test';
                        assert.deepStrictEqual(value, expectedValue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show the command written in the input bar inside the editor when parameters are object with the correct value', /*#__PURE__*/ _async_to_generator(function() {
            var _parameterRecorderInput_renderRoot_textContent, cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs, parameterRecorderInput, value, expectedValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'command': 'Test.test3',
                            'parameters': {
                                'test3': {
                                    'param1': 'test1',
                                    'param2': 'test2'
                                }
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        parameterRecorderInput = inputs[1];
                        value = (_parameterRecorderInput_renderRoot_textContent = parameterRecorderInput.renderRoot.textContent) === null || _parameterRecorderInput_renderRoot_textContent === void 0 ? void 0 : _parameterRecorderInput_renderRoot_textContent.replaceAll(/\s/g, '');
                        expectedValue = 'test1';
                        assert.deepStrictEqual(value, expectedValue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should should every parameter of a command as undefined even if some parameters have not been entered inside the input bar', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, jsonEditor, shadowRoot, displayedParameters;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'command': 'Test.test5',
                            'parameters': {
                                'test': 'test'
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.displayCommand(command, parameters);
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        shadowRoot = jsonEditor.renderRoot;
                        displayedParameters = shadowRoot.querySelectorAll('.parameter');
                        // Two parameters (test and test2) should be displayed because in the metadata, Test.test5 accepts two parameters
                        assert.deepStrictEqual(displayedParameters.length, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not output parameters if the input is invalid json', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = '"command": "Test.test", "parameters":';
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(cdpCommand), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        assert.deepStrictEqual(inputs.length, Object.keys(parameters).length + 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not output parameters if the parameters field is not an object', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = '"command": "test", "parameters": 1234';
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(cdpCommand), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        assert.deepStrictEqual(inputs.length, Object.keys(parameters).length + 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not output parameters if there is no parameter inserted in the input bar', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, inputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = '"command": "test"';
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(cdpCommand), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        inputs = _state.sent().inputs;
                        assert.deepStrictEqual(inputs.length, Object.keys(parameters).length + 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('checks that the command input field remains empty when there is no command parameter entered', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, displayedCommand;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'parameters': {
                                'test': 'test'
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        displayedCommand = _state.sent().displayedCommand;
                        assert.deepStrictEqual(displayedCommand, '');
                        return [
                            2
                        ];
                }
            });
        }));
        it('checks that the command input field remains if the command is not supported', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, displayedCommand;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = 'dummyCommand';
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        displayedCommand = _state.sent().displayedCommand;
                        assert.deepStrictEqual(displayedCommand, '');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Display command written in editor inside input bar', function() {
        it('should display the command edited inside the CDP editor into the input bar', /*#__PURE__*/ _async_to_generator(function() {
            var _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot, _dataGrid_element_shadowRoot, split, editorWidget, jsonEditor, dataGrid, toolbarInput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        split = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SplitWidget.SplitWidget(true, false, 'protocol-monitor-split-container', 400);
                        editorWidget = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.EditorWidget();
                        jsonEditor = editorWidget.jsonEditor;
                        jsonEditor.command = 'Test.test';
                        jsonEditor.parameters = [
                            {
                                name: 'test',
                                type: "string" /* ProtocolComponents.JSONEditor.ParameterType.String */ ,
                                description: 'test',
                                optional: false,
                                value: 'test'
                            }
                        ];
                        dataGrid = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.ProtocolMonitorDataGrid(split);
                        split.setMainWidget(dataGrid);
                        split.setSidebarWidget(editorWidget);
                        split.toggleSidebar();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // The first input bar corresponds to the filter bar, so we query the second one which corresponds to the CDP one.
                        toolbarInput = (_dataGrid_element_shadowRoot = dataGrid.element.shadowRoot) === null || _dataGrid_element_shadowRoot === void 0 ? void 0 : (_dataGrid_element_shadowRoot_querySelectorAll__shadowRoot = _dataGrid_element_shadowRoot.querySelectorAll('.toolbar')[1].shadowRoot) === null || _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot === void 0 ? void 0 : _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot.querySelector('.toolbar-input-prompt');
                        assert.deepStrictEqual(toolbarInput === null || toolbarInput === void 0 ? void 0 : toolbarInput.innerHTML, '{"command":"Test.test","parameters":{"test":"test"}}');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should update the selected target inside the input bar', /*#__PURE__*/ _async_to_generator(function() {
            var split, editorWidget, jsonEditor, dataGrid, selector;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        split = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SplitWidget.SplitWidget(true, false, 'protocol-monitor-split-container', 400);
                        editorWidget = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.EditorWidget();
                        jsonEditor = editorWidget.jsonEditor;
                        jsonEditor.targetId = 'value2';
                        dataGrid = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.ProtocolMonitorDataGrid(split);
                        selector = dataGrid.selector;
                        selector.createOption('Option 1', 'value1');
                        selector.createOption('Option 2', 'value2');
                        selector.createOption('Option 3', 'value3');
                        split.setMainWidget(dataGrid);
                        split.setSidebarWidget(editorWidget);
                        split.toggleSidebar();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Should be index 1 because the targetId equals "value2" which corresponds to the index number 1
                        assert.deepStrictEqual(selector.selectedIndex(), 1);
                        return [
                            2
                        ];
                }
            });
        }));
        // Flaky test.
        it.skip('[crbug.com/1484534]: should not display the command into the input bar if the command is empty string', /*#__PURE__*/ _async_to_generator(function() {
            var _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot, _dataGrid_element_shadowRoot, split, editorWidget, jsonEditor, dataGrid, toolbarInput;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        split = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SplitWidget.SplitWidget(true, false, 'protocol-monitor-split-container', 400);
                        editorWidget = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.EditorWidget();
                        jsonEditor = editorWidget.jsonEditor;
                        jsonEditor.command = '';
                        dataGrid = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.ProtocolMonitorDataGrid(split);
                        split.setMainWidget(dataGrid);
                        split.setSidebarWidget(editorWidget);
                        split.toggleSidebar();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // The first input bar corresponds to the filter bar, so we query the second one which corresponds to the CDP one.
                        toolbarInput = (_dataGrid_element_shadowRoot = dataGrid.element.shadowRoot) === null || _dataGrid_element_shadowRoot === void 0 ? void 0 : (_dataGrid_element_shadowRoot_querySelectorAll__shadowRoot = _dataGrid_element_shadowRoot.querySelectorAll('.toolbar')[1].shadowRoot) === null || _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot === void 0 ? void 0 : _dataGrid_element_shadowRoot_querySelectorAll__shadowRoot.querySelector('.toolbar-input-prompt');
                        assert.deepStrictEqual(toolbarInput === null || toolbarInput === void 0 ? void 0 : toolbarInput.innerHTML, '');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Descriptions', function() {
        it('should show the popup with the correct description for the description of parameters', /*#__PURE__*/ _async_to_generator(function() {
            var inputParameters, jsonEditor, param, popupContent, expectedPopupContent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        inputParameters = [
                            {
                                type: 'array',
                                optional: false,
                                value: [
                                    {
                                        name: '0',
                                        value: 'value0',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '1',
                                        value: 'value1',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '2',
                                        value: 'value2',
                                        optional: true,
                                        type: 'string'
                                    }
                                ],
                                name: 'arrayParam',
                                typeRef: 'string',
                                description: 'test.'
                            }
                        ];
                        jsonEditor = renderJSONEditor();
                        jsonEditor.parameters = inputParameters;
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 2:
                        _state.sent();
                        popupContent = serializePopupContent();
                        expectedPopupContent = 'test.Type:arrayLearnMore';
                        assert.deepStrictEqual(popupContent, expectedPopupContent);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show the popup with the correct description for the description of command', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, jsonEditor, command, popupContent, expectedPopupContent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = 'Test.test';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = cdpCommand;
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        command = jsonEditor.renderRoot.querySelector('.command');
                        return [
                            4,
                            renderHoveredElement(command)
                        ];
                    case 3:
                        _state.sent();
                        popupContent = serializePopupContent();
                        expectedPopupContent = 'Description1.Returns:Test1LearnMore';
                        assert.deepStrictEqual(popupContent, expectedPopupContent);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Suggestion box', function() {
        it('should display suggestion box with correct suggestions when the parameter is an enum', /*#__PURE__*/ _async_to_generator(function() {
            var enumsByName, command, jsonEditor, suggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        enumsByName = new Map([
                            [
                                'Test.testRef',
                                {
                                    'Test': 'test',
                                    'Test1': 'test1',
                                    'Test2': 'test2'
                                }
                            ]
                        ]);
                        command = 'Test.test';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            renderSuggestionBox(command, jsonEditor, enumsByName)
                        ];
                    case 2:
                        suggestions = _state.sent();
                        assert.deepStrictEqual(suggestions, [
                            'test',
                            'test1',
                            'test2'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should display suggestion box with correct suggestions when the parameter is a boolean', /*#__PURE__*/ _async_to_generator(function() {
            var command, jsonEditor, suggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test4';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            renderSuggestionBox(command, jsonEditor)
                        ];
                    case 2:
                        suggestions = _state.sent();
                        assert.deepStrictEqual(suggestions, [
                            'false',
                            'true'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show the suggestion box for enum parameters nested inside arrays', /*#__PURE__*/ _async_to_generator(function() {
            var enumsByName, command, jsonEditor, param, addParamButton, inputs, suggestionInput, suggestionBox, suggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        enumsByName = new Map([
                            [
                                'Test.arrayTypeRef',
                                {
                                    'Test': 'test',
                                    'Test1': 'test1',
                                    'Test2': 'test2'
                                }
                            ]
                        ]);
                        command = 'Test.test11';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.enumsByName = enumsByName;
                        jsonEditor.command = command;
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 3:
                        _state.sent();
                        addParamButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add a parameter"]');
                        if (!addParamButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        inputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input');
                        // inputs[0] corresponds to the devtools-suggestion-input of the command
                        suggestionInput = inputs[1];
                        // Reset the value to empty string because for boolean it will be set to false by default and the correct suggestions will not show
                        suggestionInput.value = '';
                        suggestionInput.focus();
                        return [
                            4,
                            suggestionInput.updateComplete
                        ];
                    case 5:
                        _state.sent();
                        suggestionBox = suggestionInput.renderRoot.querySelector('devtools-suggestion-box');
                        if (!suggestionBox) {
                            throw new Error('No suggestion box shown');
                        }
                        suggestions = Array.from(suggestionBox.renderRoot.querySelectorAll('li')).map(function(item) {
                            if (!item.textContent) {
                                throw new Error('No text inside suggestion');
                            }
                            return item.textContent.replaceAll(/\s/g, '');
                        });
                        assert.deepStrictEqual(suggestions, [
                            'test',
                            'test1',
                            'test2'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should update the values inside the suggestion box when the command changes', /*#__PURE__*/ _async_to_generator(function() {
            var enumsByName, command, jsonEditor, newCommand, newSuggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        enumsByName = new Map();
                        enumsByName.set('Test.testRef', {
                            'Test': 'test',
                            'Test1': 'test1',
                            'Test2': 'test2'
                        });
                        enumsByName.set('Test.newTestRef', {
                            'NewTest': 'newtest',
                            'NewTest1': 'newtest1',
                            'NewTest2': 'newtest2'
                        });
                        command = 'Test.test';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            renderSuggestionBox(command, jsonEditor, enumsByName)
                        ];
                    case 2:
                        _state.sent();
                        newCommand = 'Test.test13';
                        return [
                            4,
                            renderSuggestionBox(newCommand, jsonEditor, enumsByName)
                        ];
                    case 3:
                        newSuggestions = _state.sent();
                        assert.deepStrictEqual(newSuggestions, [
                            'newtest',
                            'newtest1',
                            'newtest2'
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should not display suggestion box when the parameter is neither a string or a boolean', /*#__PURE__*/ _async_to_generator(function() {
            var command, jsonEditor, suggestions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test8';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            renderSuggestionBox(command, jsonEditor)
                        ];
                    case 2:
                        suggestions = _state.sent();
                        assert.deepStrictEqual(suggestions, []);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Display with default values', function() {
        it('should show <empty_string> inside the placeholder when clicking on plus button for optional string parameter', /*#__PURE__*/ _async_to_generator(function() {
            var command, placeholder, expectedPlaceholder;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test5';
                        return [
                            4,
                            renderParamsWithDefaultValues(command)
                        ];
                    case 1:
                        placeholder = _state.sent().placeholder;
                        expectedPlaceholder = '<empty_string>';
                        assert.deepStrictEqual(placeholder, expectedPlaceholder);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show 0 as a value inside input when clicking on plus button for optional number parameter', /*#__PURE__*/ _async_to_generator(function() {
            var command, value, expectedValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test6';
                        return [
                            4,
                            renderParamsWithDefaultValues(command)
                        ];
                    case 1:
                        value = Number.apply(void 0, [
                            _state.sent().value
                        ]);
                        expectedValue = 0;
                        assert.deepStrictEqual(value, expectedValue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show false as a value inside input when clicking on plus button for optional boolean parameter', /*#__PURE__*/ _async_to_generator(function() {
            var command, value, expectedValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test7';
                        return [
                            4,
                            renderParamsWithDefaultValues(command)
                        ];
                    case 1:
                        value = Boolean.apply(void 0, [
                            _state.sent().value
                        ]);
                        expectedValue = false;
                        assert.deepStrictEqual(value, expectedValue);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show the keys with default values when clicking of plus button for optional object parameters', /*#__PURE__*/ _async_to_generator(function() {
            var command, typesByName, jsonEditor, param, showDefaultValuesButton, numberOfInputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test12';
                        typesByName = new Map();
                        typesByName.set('Optional.Object', [
                            {
                                'optional': false,
                                'type': 'string',
                                'name': 'param1'
                            },
                            {
                                'optional': false,
                                'type': 'number',
                                'name': 'param2'
                            }
                        ]);
                        jsonEditor = renderJSONEditor();
                        jsonEditor.typesByName = typesByName;
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = command;
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 3:
                        _state.sent();
                        showDefaultValuesButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add a parameter"]');
                        if (!showDefaultValuesButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(showDefaultValuesButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        // The -1 is need to not take into account the input for the command
                        numberOfInputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input').length - 1;
                        assert.deepStrictEqual(numberOfInputs, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Reset to default values', function() {
        it('should reset the value of keys of object parameter to default value when clicking on clear button', /*#__PURE__*/ _async_to_generator(function() {
            var cdpCommand, _ProtocolMonitor_ProtocolMonitor_parseCommandInput, command, parameters, jsonEditor, param, setDefaultValueButton, input, values, expectedValues;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        cdpCommand = {
                            'command': 'Test.test3',
                            'parameters': {
                                'test3': {
                                    'param1': 'test1',
                                    'param2': 'test2'
                                }
                            }
                        };
                        _ProtocolMonitor_ProtocolMonitor_parseCommandInput = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_7__.ProtocolMonitor.parseCommandInput(JSON.stringify(cdpCommand)), command = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.command, parameters = _ProtocolMonitor_ProtocolMonitor_parseCommandInput.parameters;
                        return [
                            4,
                            renderEditorForCommand(command, parameters)
                        ];
                    case 1:
                        jsonEditor = _state.sent().jsonEditor;
                        param = jsonEditor.renderRoot.querySelector('[data-paramId=\'test3\']');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 2:
                        _state.sent();
                        setDefaultValueButton = jsonEditor.renderRoot.querySelector('devtools-button');
                        if (!setDefaultValueButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(setDefaultValueButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 3:
                        _state.sent();
                        input = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input');
                        values = [
                            input[1].value,
                            input[2].value
                        ];
                        expectedValues = [
                            '',
                            ''
                        ];
                        assert.deepStrictEqual(values, expectedValues);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reset the value of array parameter to empty array when clicking on clear button', /*#__PURE__*/ _async_to_generator(function() {
            var inputParameters, jsonEditor, param, setDefaultValueButton, value;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        inputParameters = [
                            {
                                type: 'array',
                                optional: false,
                                value: [
                                    {
                                        name: '0',
                                        value: 'value0',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '1',
                                        value: 'value1',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '2',
                                        value: 'value2',
                                        optional: true,
                                        type: 'string'
                                    }
                                ],
                                name: 'arrayParam',
                                typeRef: 'string'
                            }
                        ];
                        jsonEditor = renderJSONEditor();
                        jsonEditor.parameters = inputParameters;
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId=\'arrayParam\']');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 2:
                        _state.sent();
                        setDefaultValueButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Reset to default value"]');
                        if (!setDefaultValueButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(setDefaultValueButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 3:
                        _state.sent();
                        value = jsonEditor.parameters[0].value;
                        assert.deepStrictEqual(value, []);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should reset the value of optional object parameter to undefined after clicking on clear button', /*#__PURE__*/ _async_to_generator(function() {
            var command, typesByName, jsonEditor, param, showDefaultValuesButton, clearButton, numberOfInputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test12';
                        typesByName = new Map();
                        typesByName.set('Optional.Object', [
                            {
                                'optional': false,
                                'type': 'string',
                                'name': 'param1'
                            },
                            {
                                'optional': false,
                                'type': 'number',
                                'name': 'param2'
                            }
                        ]);
                        jsonEditor = renderJSONEditor();
                        jsonEditor.typesByName = typesByName;
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = command;
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 3:
                        _state.sent();
                        showDefaultValuesButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add a parameter"]');
                        if (!showDefaultValuesButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(showDefaultValuesButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 5:
                        _state.sent();
                        clearButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Reset to default value"]');
                        if (!clearButton) {
                            throw new Error('No clear button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(clearButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 6:
                        _state.sent();
                        // The -1 is need to not take into account the input for the command
                        numberOfInputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input').length - 1;
                        assert.deepStrictEqual(numberOfInputs, 0);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Delete and add for array parameters', function() {
        it('should delete the specified array parameter by clicking the "Delete" button', /*#__PURE__*/ _async_to_generator(function() {
            var inputParameters, expectedParams, jsonEditor, shadowRoot, parameterIndex, deleteButtons, resultedParams;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        inputParameters = [
                            {
                                type: 'array',
                                optional: false,
                                value: [
                                    {
                                        name: '0',
                                        value: 'value0',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '1',
                                        value: 'value1',
                                        optional: true,
                                        type: 'string'
                                    },
                                    {
                                        name: '2',
                                        value: 'value2',
                                        optional: true,
                                        type: 'string'
                                    }
                                ],
                                name: 'arrayParam',
                                typeRef: 'string'
                            }
                        ];
                        expectedParams = {
                            arrayParam: [
                                'value1',
                                'value2'
                            ]
                        };
                        jsonEditor = renderJSONEditor();
                        jsonEditor.parameters = inputParameters;
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        shadowRoot = jsonEditor.renderRoot;
                        parameterIndex = 0;
                        deleteButtons = shadowRoot.querySelectorAll('devtools-button[title="Delete parameter"]');
                        if (deleteButtons.length > parameterIndex) {
                            deleteButtons[parameterIndex].dispatchEvent(new Event('click'));
                        }
                        resultedParams = jsonEditor.getParameters();
                        assert.deepStrictEqual(expectedParams, resultedParams);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should add parameters when clicking on "Plus" button for array parameters', /*#__PURE__*/ _async_to_generator(function() {
            var command, jsonEditor, param, addParamButton, numberOfInputs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test2';
                        jsonEditor = renderJSONEditor();
                        return [
                            4,
                            populateMetadata(jsonEditor)
                        ];
                    case 1:
                        _state.sent();
                        jsonEditor.command = command;
                        jsonEditor.populateParametersForCommandWithDefaultValues();
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 2:
                        _state.sent();
                        param = jsonEditor.renderRoot.querySelector('[data-paramId]');
                        return [
                            4,
                            renderHoveredElement(param)
                        ];
                    case 3:
                        _state.sent();
                        addParamButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add a parameter"]');
                        if (!addParamButton) {
                            throw new Error('No button');
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                            bubbles: true,
                            composed: true
                        });
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 4:
                        _state.sent();
                        // The -1 is need to not take into account the input for the command
                        numberOfInputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input').length - 1;
                        assert.deepStrictEqual(numberOfInputs, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Send parameters in a correct format', function() {
        it('should return the parameters in a format understandable by the ProtocolMonitor when sending a command via CTRL + Enter', /*#__PURE__*/ _async_to_generator(function() {
            var jsonEditor, inputParameters, expectedParameters, responsePromise, response;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        jsonEditor = renderJSONEditor();
                        inputParameters = [
                            {
                                'optional': true,
                                'type': 'string',
                                'value': 'test0',
                                'name': 'test0'
                            },
                            {
                                'optional': true,
                                'type': 'string',
                                'value': 'test1',
                                'name': 'test1'
                            },
                            {
                                'optional': false,
                                'type': 'string',
                                'value': 'test2',
                                'name': 'test2'
                            },
                            {
                                'optional': true,
                                'type': 'array',
                                'value': [
                                    {
                                        'optional': true,
                                        'type': 'string',
                                        'value': 'param1Value',
                                        'name': 'param1'
                                    },
                                    {
                                        'optional': true,
                                        'type': 'string',
                                        'value': 'param2Value',
                                        'name': 'param2'
                                    }
                                ],
                                'name': 'test3'
                            },
                            {
                                'optional': true,
                                'type': 'object',
                                'value': [
                                    {
                                        'optional': true,
                                        'type': 'string',
                                        'value': 'param1Value',
                                        'name': 'param1'
                                    },
                                    {
                                        'optional': true,
                                        'type': 'string',
                                        'value': 'param2Value',
                                        'name': 'param2'
                                    }
                                ],
                                'name': 'test4'
                            }
                        ];
                        expectedParameters = {
                            'test0': 'test0',
                            'test1': 'test1',
                            'test2': 'test2',
                            'test3': [
                                'param1Value',
                                'param2Value'
                            ],
                            'test4': {
                                'param1': 'param1Value',
                                'param2': 'param2Value'
                            }
                        };
                        jsonEditor.parameters = inputParameters;
                        responsePromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(jsonEditor, _components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.SubmitEditorEvent.eventName);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(jsonEditor, {
                            key: 'Enter',
                            ctrlKey: true,
                            metaKey: true
                        });
                        return [
                            4,
                            responsePromise
                        ];
                    case 1:
                        response = _state.sent();
                        assert.deepStrictEqual(response.data.parameters, expectedParameters);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should return the parameters in a format understandable by the ProtocolMonitor when sending a command via the send button', /*#__PURE__*/ _async_to_generator(function() {
            var jsonEditor, toolbar, event, responsePromise, response, expectedParameters;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        jsonEditor = renderJSONEditor();
                        jsonEditor.command = 'Test.test';
                        jsonEditor.parameters = [
                            {
                                name: 'testName',
                                type: "string" /* ProtocolComponents.JSONEditor.ParameterType.String */ ,
                                description: 'test',
                                optional: false,
                                value: 'testValue'
                            }
                        ];
                        return [
                            4,
                            jsonEditor.updateComplete
                        ];
                    case 1:
                        _state.sent();
                        toolbar = jsonEditor.renderRoot.querySelector('devtools-pm-toolbar');
                        if (!toolbar) {
                            throw Error('No toolbar found !');
                        }
                        event = new _components_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.SendCommandEvent();
                        responsePromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(jsonEditor, _components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.SubmitEditorEvent.eventName);
                        toolbar.dispatchEvent(event);
                        return [
                            4,
                            responsePromise
                        ];
                    case 2:
                        response = _state.sent();
                        expectedParameters = {
                            'testName': 'testValue'
                        };
                        assert.deepStrictEqual(response.data.parameters, expectedParameters);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('Verify the type of the entered value', function() {
        it('should show a warning icon if the type of the parameter is number but the entered value is not', /*#__PURE__*/ _async_to_generator(function() {
            var command, warningIcon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test8';
                        return [
                            4,
                            renderWarningIcon(command)
                        ];
                    case 1:
                        warningIcon = _state.sent();
                        assert.isNotNull(warningIcon);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show a warning icon if the type of the parameter is boolean but the entered value is not true or false', /*#__PURE__*/ _async_to_generator(function() {
            var command, warningIcon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        command = 'Test.test4';
                        return [
                            4,
                            renderWarningIcon(command)
                        ];
                    case 1:
                        warningIcon = _state.sent();
                        assert.isNotNull(warningIcon);
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show a warning icon if the type of the parameter is enum but the entered value is not among the accepted values', /*#__PURE__*/ _async_to_generator(function() {
            var enumsByName, command, warningIcon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        enumsByName = new Map([
                            [
                                'Test.testRef',
                                {
                                    'Test': 'test',
                                    'Test1': 'test1',
                                    'Test2': 'test2'
                                }
                            ]
                        ]);
                        command = 'Test.test';
                        return [
                            4,
                            renderWarningIcon(command, enumsByName)
                        ];
                    case 1:
                        warningIcon = _state.sent();
                        assert.isNotNull(warningIcon);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('should not display parameters if a command is unknown', /*#__PURE__*/ _async_to_generator(function() {
        var cdpCommand, jsonEditor, inputs, addButtons;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cdpCommand = 'Unknown';
                    jsonEditor = renderJSONEditor();
                    return [
                        4,
                        populateMetadata(jsonEditor)
                    ];
                case 1:
                    _state.sent();
                    jsonEditor.command = cdpCommand;
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 2:
                    _state.sent();
                    inputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input');
                    addButtons = jsonEditor.renderRoot.querySelectorAll('devtools-button[title="Add a parameter"]');
                    assert.deepStrictEqual(inputs.length, 1);
                    assert.deepStrictEqual(addButtons.length, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('checks that the selection of a target works', /*#__PURE__*/ _async_to_generator(function() {
        var jsonEditor, targetId, event, shadowRoot, selectMenu, expectedId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    jsonEditor = renderJSONEditor();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 1:
                    _state.sent();
                    targetId = 'target1';
                    event = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.SelectMenu.SelectMenuItemSelectedEvent('target1');
                    shadowRoot = jsonEditor.renderRoot;
                    selectMenu = shadowRoot.querySelector('devtools-select-menu');
                    selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.dispatchEvent(event);
                    expectedId = jsonEditor.targetId;
                    assert.deepStrictEqual(targetId, expectedId);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should copy the CDP command to clipboard via copy event', /*#__PURE__*/ _async_to_generator(function() {
        var jsonEditor, copyText, toolbar, event, _ref, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    jsonEditor = renderJSONEditor();
                    jsonEditor.command = 'Test.test';
                    jsonEditor.parameters = [
                        {
                            name: 'test',
                            type: "string" /* ProtocolComponents.JSONEditor.ParameterType.String */ ,
                            description: 'test',
                            optional: false,
                            value: 'test'
                        }
                    ];
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 1:
                    _state.sent();
                    copyText = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'copyText'));
                    toolbar = jsonEditor.renderRoot.querySelector('devtools-pm-toolbar');
                    if (!toolbar) {
                        throw Error('No toolbar found !');
                    }
                    event = new _components_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.CopyCommandEvent();
                    toolbar.dispatchEvent(event);
                    return [
                        4,
                        copyText
                    ];
                case 2:
                    _ref = _sliced_to_array.apply(void 0, [
                        _state.sent(),
                        1
                    ]), text = _ref[0];
                    assert.strictEqual(JSON.stringify({
                        command: 'Test.test',
                        parameters: {
                            'test': 'test'
                        }
                    }), text);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should display the correct parameters with a command with array nested inside object', /*#__PURE__*/ _async_to_generator(function() {
        var command, typesByName, jsonEditor, shadowRoot, parameters;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    command = 'Test.test9';
                    typesByName = new Map();
                    // This nested object contains every subtype including array
                    typesByName.set('Tracing.TraceConfig', [
                        {
                            'name': 'recordMode',
                            'type': 'string',
                            'optional': true,
                            'description': 'Controls how the trace buffer stores data.',
                            'typeRef': null
                        },
                        {
                            'name': 'traceBufferSizeInKb',
                            'type': 'number',
                            'optional': true,
                            'description': 'Size of the trace buffer in kilobytes. If not specified or zero is passed, a default value of 200 MB would be used.',
                            'typeRef': null
                        },
                        {
                            'name': 'enableSystrace',
                            'type': 'boolean',
                            'optional': true,
                            'description': 'Turns on system tracing.',
                            'typeRef': null
                        },
                        {
                            'name': 'includedCategories',
                            'type': 'array',
                            'optional': true,
                            'description': 'Included category filters.',
                            'typeRef': 'string'
                        },
                        {
                            'name': 'memoryDumpConfig',
                            'type': 'object',
                            'optional': true,
                            'description': 'Configuration for memory dump triggers. Used only when \\"memory-infra\\" category is enabled.',
                            'typeRef': 'Tracing.MemoryDumpConfig'
                        }
                    ]);
                    jsonEditor = renderJSONEditor();
                    return [
                        4,
                        populateMetadata(jsonEditor)
                    ];
                case 1:
                    _state.sent();
                    jsonEditor.typesByName = typesByName;
                    jsonEditor.command = command;
                    jsonEditor.populateParametersForCommandWithDefaultValues();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 2:
                    _state.sent();
                    shadowRoot = jsonEditor.renderRoot;
                    parameters = shadowRoot.querySelectorAll('.parameter');
                    // This expected value is equal to 6 because there are 5 different parameters inside typesByName + 1
                    // for the name of the parameter (traceConfig)
                    assert.deepStrictEqual(parameters.length, 6);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should return the parameters in a format understandable by the ProtocolMonitor when sending a command with object parameter that has no typeRef found in map', /*#__PURE__*/ _async_to_generator(function() {
        var command, typesByName, jsonEditor, shadowRoot, parameters, addParamButton, editors, responsePromise, response, expectedParameters;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    command = 'Test.test10';
                    typesByName = new Map();
                    // We set the map typesBynames without the key NoTypeRef
                    typesByName.set('Tracing.TraceConfig', [
                        {
                            'name': 'memoryDumpConfig',
                            'type': 'object',
                            'optional': true,
                            'description': 'Configuration for memory dump triggers. Used only when \\"memory-infra\\" category is enabled.',
                            'typeRef': 'Tracing.MemoryDumpConfig'
                        }
                    ]);
                    jsonEditor = renderJSONEditor();
                    return [
                        4,
                        populateMetadata(jsonEditor)
                    ];
                case 1:
                    _state.sent();
                    jsonEditor.typesByName = typesByName;
                    jsonEditor.command = command;
                    jsonEditor.populateParametersForCommandWithDefaultValues();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 2:
                    _state.sent();
                    shadowRoot = jsonEditor.renderRoot;
                    parameters = shadowRoot.querySelector('.parameter');
                    return [
                        4,
                        renderHoveredElement(parameters)
                    ];
                case 3:
                    _state.sent();
                    addParamButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add custom property"]');
                    if (!addParamButton) {
                        throw new Error('No button');
                    }
                    // We click two times to display two parameters with key/value pairs
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                        bubbles: true,
                        composed: true
                    });
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 4:
                    _state.sent();
                    editors = shadowRoot.querySelectorAll('devtools-suggestion-input');
                    // Editors[0] refers to the command editor, so we start at index 1
                    // We populate the key/value pairs
                    editors[1].value = 'testName1';
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 5:
                    _state.sent();
                    editors[1].focus();
                    editors[1].blur();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 6:
                    _state.sent();
                    editors[2].value = 'testValue1';
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 7:
                    _state.sent();
                    editors[2].focus();
                    editors[2].blur();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 8:
                    _state.sent();
                    editors[3].value = 'testName2';
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 9:
                    _state.sent();
                    editors[3].focus();
                    editors[3].blur();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 10:
                    _state.sent();
                    editors[4].value = 'testValue2';
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 11:
                    _state.sent();
                    editors[4].focus();
                    editors[4].blur();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 12:
                    _state.sent();
                    responsePromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getEventPromise)(jsonEditor, _components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.SubmitEditorEvent.eventName);
                    // We send the command
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(jsonEditor, {
                        key: 'Enter',
                        ctrlKey: true,
                        metaKey: true
                    });
                    return [
                        4,
                        responsePromise
                    ];
                case 13:
                    response = _state.sent();
                    expectedParameters = {
                        'NoTypeRef': {
                            'testName1': 'testValue1',
                            'testName2': 'testValue2'
                        }
                    };
                    assert.deepStrictEqual(response.data.parameters, expectedParameters);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show the custom editor for an object param that has no type ref', /*#__PURE__*/ _async_to_generator(function() {
        var command, jsonEditor, shadowRoot, parameters, addParamButton, numberOfInputs;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    command = 'Test.test14';
                    jsonEditor = renderJSONEditor();
                    return [
                        4,
                        populateMetadata(jsonEditor)
                    ];
                case 1:
                    _state.sent();
                    jsonEditor.command = command;
                    jsonEditor.populateParametersForCommandWithDefaultValues();
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 2:
                    _state.sent();
                    shadowRoot = jsonEditor.renderRoot;
                    parameters = shadowRoot.querySelector('.parameter');
                    return [
                        4,
                        renderHoveredElement(parameters)
                    ];
                case 3:
                    _state.sent();
                    addParamButton = jsonEditor.renderRoot.querySelector('devtools-button[title="Add custom property"]');
                    if (!addParamButton) {
                        throw new Error('No button');
                    }
                    // We click two times to display two parameters with key/value pairs
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                        bubbles: true,
                        composed: true
                    });
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(addParamButton, {
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        jsonEditor.updateComplete
                    ];
                case 4:
                    _state.sent();
                    // The -1 is need to not take into account the input for the command
                    numberOfInputs = jsonEditor.renderRoot.querySelectorAll('devtools-suggestion-input').length - 1;
                    assert.deepStrictEqual(numberOfInputs, 4);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Command suggestion filter', function() {
        it('filters the commands by substring match', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                assert(_components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.suggestionFilter('Test', 'Tes'));
                assert(_components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.suggestionFilter('Test', 'est'));
                assert(!_components_js__WEBPACK_IMPORTED_MODULE_8__.JSONEditor.suggestionFilter('Test', 'dest'));
                return [
                    2
                ];
            });
        }));
    });
}); //# sourceMappingURL=JSONEditor.test.js.map


}),
"./panels/protocol_monitor/protocol_monitor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProtocolMonitor: function() { return /* reexport module object */ _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtocolMonitor.js */ "./panels/protocol_monitor/ProtocolMonitor.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=protocol_monitor.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);