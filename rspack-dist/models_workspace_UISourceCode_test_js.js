"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_workspace_UISourceCode_test_js"], {
"./models/workspace/UISourceCode.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workspace.js */ "./models/workspace/workspace.js");
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



describe('UISourceCode', function() {
    it('can return name', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
            result = sutObject.sut.name();
            assert.strictEqual(result, 'test?isTest=true');
            return [
                2
            ];
        });
    }));
    it('can return url', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('https://example.com/');
            result = sutObject.sut.url();
            assert.strictEqual(result, 'https://example.com/');
            return [
                2
            ];
        });
    }));
    it('can return canononical script ID', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('https://example.com/');
            sutObject.contentTypeStub.name.returns('nameExample');
            result = sutObject.sut.canononicalScriptId();
            assert.strictEqual(result, 'nameExample,https://example.com/');
            return [
                2
            ];
        });
    }));
    it('can return parent URL', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
            result = sutObject.sut.parentURL();
            assert.strictEqual(result, 'http://www.example.com:8080/testing');
            return [
                2
            ];
        });
    }));
    it('can return origin', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
            result = sutObject.sut.origin();
            assert.strictEqual(result, 'http://www.example.com:8080');
            return [
                2
            ];
        });
    }));
    it('can return trimmed display name', /*#__PURE__*/ _async_to_generator(function() {
        var url, sutObject, result;
        return _ts_generator(this, function(_state) {
            url = 'http://www.example.com:8080/testing/' + 'test'.repeat(30) + '?isTest=true';
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)(url);
            result = sutObject.sut.displayName(false);
            assert.isTrue('test'.repeat(30).startsWith(result.slice(0, -1)), 'display name does not show the correct text');
            assert.isTrue(result.endsWith('…'), 'display name does not end with \'…\'');
            return [
                2
            ];
        });
    }));
    it('can return untrimmed display name', /*#__PURE__*/ _async_to_generator(function() {
        var url, sutObject, result;
        return _ts_generator(this, function(_state) {
            url = 'http://www.example.com:8080/testing/' + 'test'.repeat(30) + '?isTest=true';
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)(url);
            result = sutObject.sut.displayName(true);
            assert.strictEqual(result, 'test'.repeat(30) + '?isTest=true');
            return [
                2
            ];
        });
    }));
    it('can request project metadata', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    sutObject.projectStub.requestMetadata.resolves(null);
                    return [
                        4,
                        sutObject.sut.requestMetadata()
                    ];
                case 1:
                    result = _state.sent();
                    assert.strictEqual(result, null);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can return full display name', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.fullDisplayName.returns('Test Name');
            result = sutObject.sut.fullDisplayName();
            assert.strictEqual(result, 'Test Name');
            return [
                2
            ];
        });
    }));
    it('can return MIME type', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.mimeType.returns('Test Type');
            result = sutObject.sut.mimeType();
            assert.strictEqual(result, 'Test Type');
            return [
                2
            ];
        });
    }));
    it('can return display name', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
            result = sutObject.sut.displayName();
            assert.strictEqual(result, 'test?isTest=true');
            return [
                2
            ];
        });
    }));
    it('can return whether or not the project can be renamed', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.canRename.returns(true);
            result = sutObject.sut.canRename();
            assert.isTrue(result);
            return [
                2
            ];
        });
    }));
    it('can rename a project', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, rawPathstringExample;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
                    rawPathstringExample = 'newName.html';
                    sutObject.projectStub.rename.callsFake(function(uiSourceCode, rawPathstringExample, innerCallback) {
                        innerCallback(true, rawPathstringExample);
                    });
                    return [
                        4,
                        sutObject.sut.rename(rawPathstringExample)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(sutObject.sut.name(), 'newName.html');
                    return [
                        2
                    ];
            }
        });
    }));
    it('deletes file by calling the project deleteFile function', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.sut.remove();
            sinon.assert.calledOnce(sutObject.projectStub.deleteFile);
            return [
                2
            ];
        });
    }));
    it('can return content URL', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test?isTest=true');
            result = sutObject.sut.contentURL();
            assert.strictEqual(result, 'http://www.example.com:8080/testing/test?isTest=true');
            return [
                2
            ];
        });
    }));
    it('can return content type', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            result = sutObject.sut.contentType();
            assert.strictEqual(result, sutObject.contentTypeStub);
            return [
                2
            ];
        });
    }));
    it('can request content', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, contentData, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    contentData = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('Example', false, 'text/plain');
                    sutObject.projectStub.requestFileContent.resolves(contentData);
                    return [
                        4,
                        sutObject.sut.requestContent()
                    ];
                case 1:
                    result = _state.sent();
                    assert.deepEqual(result, contentData.asDeferedContent());
                    return [
                        2
                    ];
            }
        });
    }));
    it('check if the content is encoded', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, deferredContentStub, isEncoded;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    deferredContentStub = new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData('AQIDBA==', true, 'application/wasm');
                    sutObject.projectStub.requestFileContent.resolves(deferredContentStub);
                    return [
                        4,
                        sutObject.sut.requestContent()
                    ];
                case 1:
                    isEncoded = _state.sent().isEncoded;
                    assert.isTrue(isEncoded);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can commit content', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
                    sutObject.sut.addRevision('New Content');
                    return [
                        4,
                        sutObject.sut.requestContent()
                    ];
                case 1:
                    result = _state.sent();
                    assert.deepEqual(result, {
                        content: 'New Content',
                        isEncoded: false
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('can check if there are commits', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, hasCommitsBefore, hasCommitsAfter;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            hasCommitsBefore = sutObject.sut.hasCommits();
            sutObject.sut.addRevision('New Content');
            hasCommitsAfter = sutObject.sut.hasCommits();
            assert.isFalse(hasCommitsBefore);
            assert.isTrue(hasCommitsAfter);
            return [
                2
            ];
        });
    }));
    it('can set a working copy', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            sutObject.sut.setWorkingCopy('Working Copy Example');
            result = sutObject.sut.workingCopy();
            assert.strictEqual(result, 'Working Copy Example');
            return [
                2
            ];
        });
    }));
    it('can reset working copy', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            sutObject.sut.setWorkingCopy('Working Copy Example');
            sutObject.sut.resetWorkingCopy();
            result = sutObject.sut.workingCopy();
            assert.strictEqual(result, '');
            return [
                2
            ];
        });
    }));
    it('can set content', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
                    sutObject.sut.setContent('New Content', false);
                    return [
                        4,
                        sutObject.sut.requestContent()
                    ];
                case 1:
                    result = _state.sent();
                    assert.deepEqual(result, {
                        content: 'New Content',
                        isEncoded: false
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('can set working copy getter function', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, newContent;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            sutObject.sut.setWorkingCopyGetter(function() {
                return 'Example Function';
            });
            newContent = sutObject.sut.workingCopy();
            assert.strictEqual(newContent, 'Example Function');
            return [
                2
            ];
        });
    }));
    it('can check if working copy is dirty', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, isDirtyBefore, isDirtyAfter;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            isDirtyBefore = sutObject.sut.isDirty();
            sutObject.sut.setWorkingCopy('Working Copy Example');
            isDirtyAfter = sutObject.sut.isDirty();
            assert.isFalse(isDirtyBefore);
            assert.isTrue(isDirtyAfter);
            return [
                2
            ];
        });
    }));
    it('can return extension', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)('http://www.example.com:8080/testing/test.html');
            result = sutObject.sut.extension();
            assert.strictEqual(result, 'html');
            return [
                2
            ];
        });
    }));
    it('can commit working copy', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, hasCommitsBefore, hasCommitsAfter;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            hasCommitsBefore = sutObject.sut.hasCommits();
            sutObject.sut.setWorkingCopy('Working Copy Example');
            sutObject.sut.commitWorkingCopy();
            hasCommitsAfter = sutObject.sut.hasCommits();
            assert.isFalse(hasCommitsBefore);
            assert.isTrue(hasCommitsAfter);
            return [
                2
            ];
        });
    }));
    it('can return content', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            sutObject.sut.setContent('Example Content', false);
            result = sutObject.sut.content();
            assert.strictEqual(result, 'Example Content');
            return [
                2
            ];
        });
    }));
    it('can return load error', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, deferredContentStub, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    deferredContentStub = {
                        error: 'Example Error'
                    };
                    sutObject.projectStub.requestFileContent.resolves(deferredContentStub);
                    sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
                    return [
                        4,
                        sutObject.sut.requestContent()
                    ];
                case 1:
                    _state.sent();
                    result = sutObject.sut.loadError();
                    assert.strictEqual(result, 'Example Error');
                    return [
                        2
                    ];
            }
        });
    }));
    it('can search content', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
                    sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
                    sutObject.sut.setContent('Example Content', false);
                    return [
                        4,
                        sutObject.sut.searchInContent('Content', true, false)
                    ];
                case 1:
                    result = _state.sent();
                    assert.deepEqual(result, [
                        {
                            lineNumber: 0,
                            lineContent: 'Example Content',
                            columnNumber: 8,
                            matchLength: 7
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can check if content is loaded', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, contentLoadedCheckBefore, contentLoadedCheckAfter;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            contentLoadedCheckBefore = sutObject.sut.contentLoaded();
            sutObject.sut.setContent('Example Content', true);
            contentLoadedCheckAfter = sutObject.sut.contentLoaded();
            assert.isFalse(contentLoadedCheckBefore);
            assert.isTrue(contentLoadedCheckAfter);
            return [
                2
            ];
        });
    }));
    it('can return UI location', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, result;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.projectStub.workspace.returns(sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl));
            result = sutObject.sut.uiLocation(5);
            assert.strictEqual(result.lineNumber, 5);
            assert.strictEqual(result.uiSourceCode, sutObject.sut);
            return [
                2
            ];
        });
    }));
    it('can add message', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, messageStub, result, expectedResult;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            messageStub = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.Message);
            sutObject.sut.addMessage(messageStub);
            result = sutObject.sut.messages();
            expectedResult = new Set([
                messageStub
            ]);
            assert.deepEqual(result, expectedResult);
            return [
                2
            ];
        });
    }));
    it('can add line message', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, messagesSet, addedMessage;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.sut.addLineMessage("Error" /* Workspace.UISourceCode.Message.Level.Error */ , 'Example Message', 5);
            messagesSet = sutObject.sut.messages();
            addedMessage = messagesSet.values().next().value;
            assert.strictEqual(messagesSet.size, 1);
            assert.strictEqual(addedMessage.levelInternal, 'Error');
            assert.strictEqual(addedMessage.textInternal, 'Example Message');
            assert.strictEqual(addedMessage.range.startLine, 5);
            assert.strictEqual(addedMessage.range.endLine, 5);
            return [
                2
            ];
        });
    }));
    it('can remove message', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject, messageStub, messagesLengthBefore, messagesLengthAfter;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            messageStub = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.Message);
            sutObject.sut.addMessage(messageStub);
            messagesLengthBefore = sutObject.sut.messages().size;
            sutObject.sut.removeMessage(messageStub);
            messagesLengthAfter = sutObject.sut.messages().size;
            assert.strictEqual(messagesLengthBefore, 1);
            assert.strictEqual(messagesLengthAfter, 0);
            return [
                2
            ];
        });
    }));
    it('can set decoration data', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.sut.setDecorationData('example type', 'example data');
            assert.strictEqual(sutObject.sut.getDecorationData('example type'), 'example data');
            return [
                2
            ];
        });
    }));
    it('can disable editing', /*#__PURE__*/ _async_to_generator(function() {
        var sutObject;
        return _ts_generator(this, function(_state) {
            sutObject = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_0__.setupMockedUISourceCode)();
            sutObject.sut.disableEdit();
            assert.isTrue(sutObject.sut.editDisabled());
            return [
                2
            ];
        });
    }));
});
describe('UILocation', function() {
    it('formats column as base 16 for WebAssembly source files', function() {
        var uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        uiSourceCode.mimeType.returns('application/wasm');
        var uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        var actualWithShowColumn = uiLocation.lineAndColumnText(true);
        var actualWithoutShowColumn = uiLocation.lineAndColumnText(false);
        assert.strictEqual(actualWithShowColumn, '0xf');
        assert.strictEqual(actualWithShowColumn, actualWithoutShowColumn);
    });
    it('formats line for source files', function() {
        var uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        var uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        var actual = uiLocation.lineAndColumnText(false);
        assert.strictEqual(actual, '1');
    });
    it('formats line and column for source files', function() {
        var uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        var uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        var actual = uiLocation.lineAndColumnText(true);
        assert.strictEqual(actual, '1:16');
    });
    it('formats the link text with location', function() {
        var uiSourceCode = sinon.createStubInstance(_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
        uiSourceCode.displayName.returns('test.js');
        var uiLocation = new _workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, 0, 15);
        var actual = uiLocation.linkText(false, true);
        assert.strictEqual(actual, 'test.js:1:16');
    });
}); //# sourceMappingURL=UISourceCode.test.js.map


}),

}]);