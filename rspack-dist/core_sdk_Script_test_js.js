"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_Script_test_js"], {
"./core/sdk/Script.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
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




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('Script', function() {
    describe('originalContentProvider', function() {
        it('doesn\'t strip //# sourceURL annotations', /*#__PURE__*/ _async_to_generator(function() {
            var target, debuggerModel, url, scriptId, scriptSource, script, content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                        debuggerModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
                        url = 'webpack:///src/foo.js';
                        scriptId = '1';
                        scriptSource = '\nconsole.log("foo");\n//# sourceURL='.concat(url, "\n");
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                            scriptId: scriptId,
                            url: url,
                            startLine: 2,
                            startColumn: 14,
                            endLine: 5,
                            endColumn: 0,
                            executionContextId: 1,
                            hash: '',
                            hasSourceURL: true
                        });
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.getScriptSource', function() {
                            return {
                                scriptSource: scriptSource,
                                getError: function getError() {
                                    return undefined;
                                }
                            };
                        });
                        script = debuggerModel.scriptForId(scriptId);
                        return [
                            4,
                            script.originalContentProvider().requestContentData()
                        ];
                    case 1:
                        content = _state.sent();
                        assert.instanceOf(content, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
                        assert.strictEqual(content.text, scriptSource);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('editSource', function() {
        var setupEditTest = function setupEditTest(scriptId) {
            var scriptSource = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
            var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
            var model = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.DebuggerModel);
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                scriptId: scriptId,
                url: 'https://example.com/test.js',
                startLine: 0,
                startColumn: 0,
                endLine: 2,
                endColumn: 0,
                executionContextId: 1,
                hash: '',
                hasSourceURL: false
            });
            (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.getScriptSource', function() {
                return {
                    scriptSource: scriptSource,
                    getError: function() {
                        return undefined;
                    }
                };
            });
            var script = model.scriptForId(scriptId);
            return {
                script: script,
                target: target,
                model: model
            };
        };
        it('does not invoke the backend when new content and old content match', /*#__PURE__*/ _async_to_generator(function() {
            var script, status;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        script = setupEditTest('1', 'console.log("foo")').script;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', function() {
                            throw new Error('Debugger.setScriptSource must not be called');
                        });
                        return [
                            4,
                            script.editSource('console.log("foo")')
                        ];
                    case 1:
                        status = _state.sent().status;
                        assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates the source content when the live edit succeeds', /*#__PURE__*/ _async_to_generator(function() {
            var script, newContent, status, contentData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        script = setupEditTest('1', 'console.log("foo")').script;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', function() {
                            return {
                                status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ 
                            };
                        });
                        newContent = 'console.log("bar")';
                        return [
                            4,
                            script.editSource(newContent)
                        ];
                    case 1:
                        status = _state.sent().status;
                        assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ );
                        return [
                            4,
                            script.requestContentData()
                        ];
                    case 2:
                        contentData = _state.sent();
                        assert.instanceOf(contentData, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
                        assert.strictEqual(contentData.text, newContent);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not update the source content when the live edit fails', /*#__PURE__*/ _async_to_generator(function() {
            var scriptContent, script, status, contentData;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        scriptContent = 'console.log("foo")';
                        script = setupEditTest('1', scriptContent).script;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', function() {
                            return {
                                status: "CompileError" /* Protocol.Debugger.SetScriptSourceResponseStatus.CompileError */ 
                            };
                        });
                        return [
                            4,
                            script.editSource('console.log("bar")')
                        ];
                    case 1:
                        status = _state.sent().status;
                        assert.strictEqual(status, "CompileError" /* Protocol.Debugger.SetScriptSourceResponseStatus.CompileError */ );
                        return [
                            4,
                            script.requestContentData()
                        ];
                    case 2:
                        contentData = _state.sent();
                        assert.instanceOf(contentData, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.ContentData.ContentData);
                        assert.strictEqual(contentData.text, scriptContent);
                        return [
                            2
                        ];
                }
            });
        }));
        it('throws an error for protocol failures', function(done) {
            var _setupEditTest = setupEditTest('1', 'console.log("foo")'), script = _setupEditTest.script, target = _setupEditTest.target;
            sinon.stub(target.debuggerAgent(), 'invoke_setScriptSource').returns(Promise.resolve({
                status: undefined,
                getError: function() {
                    return 'setScriptSource failed for some reason';
                }
            }));
            script.editSource('console.log("bar")').then(function() {
                assert.fail('expected "editSource" to throw an exception!');
            }).catch(function() {
                return done();
            });
        });
        it('fires an event on the DebuggerModel after returning from the backend', /*#__PURE__*/ _async_to_generator(function() {
            var _setupEditTest, script, model, newContent, eventPromise, _ref, eventScript, status;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _setupEditTest = setupEditTest('1', 'console.log("foo")'), script = _setupEditTest.script, model = _setupEditTest.model;
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setScriptSource', function() {
                            return {
                                status: "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ 
                            };
                        });
                        newContent = 'console.log("bar")';
                        eventPromise = model.once(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerModel.Events.ScriptSourceWasEdited);
                        void script.editSource(newContent);
                        return [
                            4,
                            eventPromise
                        ];
                    case 1:
                        _ref = _state.sent(), eventScript = _ref.script, status = _ref.status;
                        assert.strictEqual(eventScript, script);
                        assert.strictEqual(status, "Ok" /* Protocol.Debugger.SetScriptSourceResponseStatus.Ok */ );
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Script.test.js.map


}),

}]);