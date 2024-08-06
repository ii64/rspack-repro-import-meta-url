"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_protocol_monitor_ProtocolMonitor_test_js"],{

/***/ "./panels/protocol_monitor/ProtocolMonitor.test.js":
/*!*********************************************************!*\
  !*** ./panels/protocol_monitor/ProtocolMonitor.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol_monitor.js */ "./panels/protocol_monitor/protocol_monitor.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('ProtocolMonitor', () => {
    describe('parseCommandInput', () => {
        it('parses various JSON formats', async () => {
            const input = {
                command: 'Input.dispatchMouseEvent',
                parameters: { parameter1: 'value1' },
            };
            // "command" variations.
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                command: input.command,
                parameters: input.parameters,
            })), input);
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                cmd: input.command,
                parameters: input.parameters,
            })), input);
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                method: input.command,
                parameters: input.parameters,
            })), input);
            // "parameters" variations.
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                command: input.command,
                params: input.parameters,
            })), input);
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                cmd: input.command,
                args: input.parameters,
            })), input);
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput(JSON.stringify({
                method: input.command,
                arguments: input.parameters,
            })), input);
        });
        it('parses non-JSON data as a command name', async () => {
            assert.deepStrictEqual(_protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.parseCommandInput('Input.dispatchMouseEvent'), {
                command: 'Input.dispatchMouseEvent',
                parameters: {},
            });
        });
        it('should correctly creates a map of CDP commands with their corresponding metadata', async () => {
            const domains = [
                {
                    domain: 'Test',
                    metadata: {
                        'Test.test': {
                            parameters: [{
                                    name: 'test',
                                    type: 'test',
                                    optional: true,
                                }],
                            description: 'Description1',
                            replyArgs: ['Test1'],
                        },
                    },
                },
                {
                    domain: 'Test2',
                    metadata: {
                        'Test2.test2': {
                            parameters: [{
                                    name: 'test2',
                                    type: 'test2',
                                    optional: true,
                                }],
                            description: 'Description2',
                            replyArgs: ['Test2'],
                        },
                        'Test2.test3': {
                            parameters: [{
                                    name: 'test3',
                                    type: 'test3',
                                    optional: true,
                                }],
                            description: 'Description3',
                            replyArgs: ['Test3'],
                        },
                    },
                },
            ];
            const expectedCommands = new Map();
            expectedCommands.set('Test.test', {
                parameters: [{
                        name: 'test',
                        type: 'test',
                        optional: true,
                    }],
                description: 'Description1',
                replyArgs: ['Test1'],
            });
            expectedCommands.set('Test2.test2', {
                parameters: [{
                        name: 'test2',
                        type: 'test2',
                        optional: true,
                    }],
                description: 'Description2',
                replyArgs: ['Test2'],
            });
            expectedCommands.set('Test2.test3', {
                parameters: [{
                        name: 'test3',
                        type: 'test3',
                        optional: true,
                    }],
                description: 'Description3',
                replyArgs: ['Test3'],
            });
            const metadataByCommand = _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.buildProtocolMetadata(domains);
            assert.deepStrictEqual(metadataByCommand, expectedCommands);
        });
    });
    describe('HistoryAutocompleteDataProvider', () => {
        it('should create completions with no history', async () => {
            const provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider();
            assert.deepStrictEqual(await provider.buildTextPromptCompletions('test', 'test'), []);
        });
        it('should build completions in the reverse insertion order', async () => {
            const provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider();
            provider.addEntry('test1');
            provider.addEntry('test2');
            provider.addEntry('test3');
            assert.deepStrictEqual(await provider.buildTextPromptCompletions('test', 'test'), [
                { text: 'test3' },
                { text: 'test2' },
                { text: 'test1' },
            ]);
            provider.addEntry('test1');
            assert.deepStrictEqual(await provider.buildTextPromptCompletions('test', 'test'), [
                { text: 'test1' },
                { text: 'test3' },
                { text: 'test2' },
            ]);
        });
        it('should limit the number of completions', async () => {
            const provider = new _protocol_monitor_js__WEBPACK_IMPORTED_MODULE_0__.ProtocolMonitor.CommandAutocompleteSuggestionProvider(2);
            provider.addEntry('test1');
            provider.addEntry('test2');
            provider.addEntry('test3');
            assert.deepStrictEqual(await provider.buildTextPromptCompletions('test', 'test'), [
                { text: 'test3' },
                { text: 'test2' },
            ]);
        });
    });
});
//# sourceMappingURL=ProtocolMonitor.test.js.map

/***/ }),

/***/ "./panels/protocol_monitor/protocol_monitor.js":
/*!*****************************************************!*\
  !*** ./panels/protocol_monitor/protocol_monitor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProtocolMonitor: () => (/* reexport module object */ _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ProtocolMonitor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProtocolMonitor.js */ "./panels/protocol_monitor/ProtocolMonitor.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=protocol_monitor.js.map

/***/ })

}]);