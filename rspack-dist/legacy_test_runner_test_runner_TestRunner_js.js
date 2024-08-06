"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_test_runner_TestRunner_js"], {
"./legacy_test_runner/test_runner/TestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockSetting: function() { return MockSetting; },
  StringOutputStream: function() { return StringOutputStream; },
  _evaluateInPage: function() { return _evaluateInPage1; },
  _handlePageLoaded: function() { return _handlePageLoaded; },
  _innerReloadPage: function() { return _innerReloadPage; },
  _pageNavigated: function() { return _pageNavigated; },
  _printDevToolsConsole: function() { return _printDevToolsConsole; },
  addArray: function() { return addArray; },
  addIframe: function() { return addIframe; },
  addObject: function() { return addObject; },
  addResult: function() { return addResult; },
  addResults: function() { return addResults; },
  addScriptForFrame: function() { return addScriptForFrame; },
  addScriptTag: function() { return addScriptTag; },
  addSniffer: function() { return addSniffer; },
  addSnifferPromise: function() { return addSnifferPromise; },
  addStylesheetTag: function() { return addStylesheetTag; },
  assertEquals: function() { return assertEquals; },
  assertGreaterOrEqual: function() { return assertGreaterOrEqual; },
  assertTrue: function() { return assertTrue; },
  callFunctionInPageAsync: function() { return callFunctionInPageAsync; },
  check: function() { return check; },
  clearSpecificInfoFromStackFrames: function() { return clearSpecificInfoFromStackFrames; },
  completeTest: function() { return completeTest; },
  createKeyEvent: function() { return createKeyEvent; },
  deepTextContent: function() { return deepTextContent; },
  deprecatedInitAsync: function() { return deprecatedInitAsync; },
  deprecatedRunAfterPendingDispatches: function() { return deprecatedRunAfterPendingDispatches; },
  dump: function() { return dump; },
  dumpDeepInnerHTML: function() { return dumpDeepInnerHTML; },
  dumpInspectedPageElementText: function() { return dumpInspectedPageElementText; },
  dumpSyntaxHighlight: function() { return dumpSyntaxHighlight; },
  evaluateFunctionInOverlay: function() { return evaluateFunctionInOverlay; },
  evaluateInPage: function() { return evaluateInPage; },
  evaluateInPageAnonymously: function() { return evaluateInPageAnonymously; },
  evaluateInPageAsync: function() { return evaluateInPageAsync; },
  evaluateInPagePromise: function() { return evaluateInPagePromise; },
  evaluateInPageRemoteObject: function() { return evaluateInPageRemoteObject; },
  evaluateInPageWithTimeout: function() { return evaluateInPageWithTimeout; },
  findLineEndingIndexes: function() { return findLineEndingIndexes; },
  formatters: function() { return formatters; },
  hardReloadPage: function() { return hardReloadPage; },
  hideInspectorView: function() { return hideInspectorView; },
  isDebugTest: function() { return isDebugTest; },
  loadHTML: function() { return loadHTML; },
  mainFrame: function() { return mainFrame; },
  markStep: function() { return markStep; },
  navigate: function() { return navigate; },
  navigatePromise: function() { return navigatePromise; },
  override: function() { return override; },
  pageLoaded: function() { return pageLoaded; },
  reloadPage: function() { return reloadPage; },
  reloadPagePromise: function() { return reloadPagePromise; },
  reloadPageWithInjectedScript: function() { return reloadPageWithInjectedScript; },
  runAsyncTestSuite: function() { return runAsyncTestSuite; },
  runTestSuite: function() { return runTestSuite; },
  runTests: function() { return runTests; },
  runWhenPageLoads: function() { return runWhenPageLoads; },
  safeWrap: function() { return safeWrap; },
  selectTextInTextNode: function() { return selectTextInTextNode; },
  setInnerCompleteTest: function() { return setInnerCompleteTest; },
  setInnerResult: function() { return setInnerResult; },
  showPanel: function() { return showPanel; },
  startDumpingProtocolMessages: function() { return startDumpingProtocolMessages; },
  textContentWithLineBreaks: function() { return textContentWithLineBreaks; },
  textContentWithLineBreaksTrimmed: function() { return textContentWithLineBreaksTrimmed; },
  textContentWithoutStyles: function() { return textContentWithoutStyles; },
  url: function() { return url; },
  waitForEvent: function() { return waitForEvent; },
  waitForExecutionContext: function() { return waitForExecutionContext; },
  waitForExecutionContextDestroyed: function() { return waitForExecutionContextDestroyed; },
  waitForPageLoad: function() { return waitForPageLoad; },
  waitForPendingLiveLocationUpdates: function() { return waitForPendingLiveLocationUpdates; },
  waitForTarget: function() { return waitForTarget; },
  waitForTargetRemoved: function() { return waitForTargetRemoved; },
  waitForUISourceCode: function() { return waitForUISourceCode; },
  waitForUISourceCodeRemoved: function() { return waitForUISourceCodeRemoved; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
 // eslint-disable-line no-unused-vars







/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ /* eslint-disable no-console */ /**
 * @return {boolean}
 */ function isDebugTest() {
    return !self.testRunner || Boolean(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('debugFrontend'));
}
/**
 * This monkey patches console functions in DevTools context so the console
 * messages are shown in the right places, instead of having all of the console
 * messages printed at the top of the test expectation file (default behavior).
 */ function _printDevToolsConsole() {
    if (isDebugTest()) {
        return;
    }
    console.log = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        addResult("log: ".concat(args));
    };
    console.error = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        addResult("error: ".concat(args));
    };
    console.info = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        addResult("info: ".concat(args));
    };
    console.assert = function(assertionCondition) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (!assertionCondition) {
            addResult("ASSERTION FAILURE: ".concat(args.join(' ')));
        }
    };
}
self['onerror'] = function(message, source, lineno, colno, error) {
    addResult('TEST ENDED IN ERROR: ' + error.stack);
    completeTest();
};
(function() {
    self.addEventListener('unhandledrejection', function(event) {
        var _event_reason_stack;
        addResult("PROMISE FAILURE: ".concat((_event_reason_stack = event.reason.stack) !== null && _event_reason_stack !== void 0 ? _event_reason_stack : event.reason));
        completeTest();
    });
})();
_printDevToolsConsole();
// TODO(crbug.com/1032477): Re-enable once test timeouts are handled in Chromium
// setTimeout(() => {
//   addResult('TEST TIMED OUT!');
//   completeTest();
// }, 6000);
/** @type {!Array<string>} */ var _results = [];
var _innerAddResult = function(text) {
    _results.push(String(text));
};
function setInnerResult(updatedInnerResult) {
    _innerAddResult = updatedInnerResult;
}
/**
 * @param {*} text
 */ function addResult(text) {
    _innerAddResult(text);
}
var completed = false;
var _innerCompleteTest = function() {
    if (completed) {
        return;
    }
    completed = true;
    flushResults();
    self.testRunner.notifyDone();
};
function setInnerCompleteTest(updatedInnerCompleteTest) {
    _innerCompleteTest = updatedInnerCompleteTest;
}
function completeTest() {
    _innerCompleteTest();
}
self.TestRunner = self.TestRunner || {};
function flushResults() {
    Array.prototype.forEach.call(document.documentElement.childNodes, function(x) {
        return x.remove();
    });
    var outputElement = document.createElement('div');
    // Support for svg - add to document, not body, check for style.
    if (outputElement.style) {
        outputElement.style.whiteSpace = 'pre';
        outputElement.style.height = '10px';
        outputElement.style.overflow = 'hidden';
    }
    document.documentElement.appendChild(outputElement);
    for(var i = 0; i < _results.length; i++){
        outputElement.appendChild(document.createTextNode(_results[i]));
        outputElement.appendChild(document.createElement('br'));
    }
    _results = [];
}
/**
 * @param {!Array<string>} textArray
 */ function addResults(textArray) {
    if (!textArray) {
        return;
    }
    for(var i = 0, size = textArray.length; i < size; ++i){
        addResult(textArray[i]);
    }
}
/**
 * @param {!Array<function()>} tests
 */ function runTests(tests) {
    nextTest();
    function nextTest() {
        var test = tests.shift();
        if (!test) {
            completeTest();
            return;
        }
        addResult('\ntest: ' + test.name);
        var testPromise = test();
        if (!_instanceof(testPromise, Promise)) {
            testPromise = Promise.resolve();
        }
        testPromise.then(nextTest);
    }
}
/**
 * @param {!Object} receiver
 * @param {string} methodName
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 */ function addSniffer(receiver, methodName, override, opt_sticky) {
    override = safeWrap(override);
    var original = receiver[methodName];
    if (typeof original !== 'function') {
        throw new Error('Cannot find method to override: ' + methodName);
    }
    receiver[methodName] = function(var_args) {
        var result;
        try {
            result = original.apply(this, arguments);
        } finally{
            if (!opt_sticky) {
                receiver[methodName] = original;
            }
        }
        // In case of exception the override won't be called.
        try {
            Array.prototype.push.call(arguments, result);
            override.apply(this, arguments);
        } catch (e) {
            throw new Error('Exception in overriden method \'' + methodName + '\': ' + e);
        }
        return result;
    };
}
/**
 * @param {!Object} receiver
 * @param {string} methodName
 * @return {!Promise<*>}
 */ function addSnifferPromise(receiver, methodName) {
    return new Promise(function(resolve, reject) {
        var original = receiver[methodName];
        if (typeof original !== 'function') {
            reject('Cannot find method to override: ' + methodName);
            return;
        }
        receiver[methodName] = function(var_args) {
            var result;
            try {
                result = original.apply(this, arguments);
            } finally{
                receiver[methodName] = original;
            }
            // In case of exception the override won't be called.
            try {
                Array.prototype.push.call(arguments, result);
                resolve.apply(this, arguments);
            } catch (e) {
                reject('Exception in overridden method \'' + methodName + '\': ' + e);
                completeTest();
            }
            return result;
        };
    });
}
/**
 * @param {Text} textNode
 * @param {number=} start
 * @param {number=} end
 * @return {Text}
 */ function selectTextInTextNode(textNode, start, end) {
    start = start || 0;
    end = end || textNode.textContent.length;
    if (start < 0) {
        start = end + start;
    }
    var selection = textNode.getComponentSelection();
    selection.removeAllRanges();
    var range = textNode.ownerDocument.createRange();
    range.setStart(textNode, start);
    range.setEnd(textNode, end);
    selection.addRange(range);
    return textNode;
}
/**
 * @param {string} panel
 * @return {!Promise.<?UI.Panel.Panel>}
 */ function showPanel(panel) {
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView(panel);
}
/**
 * @param {string} key
 * @param {boolean=} ctrlKey
 * @param {boolean=} altKey
 * @param {boolean=} shiftKey
 * @param {boolean=} metaKey
 * @return {!KeyboardEvent}
 */ function createKeyEvent(key, ctrlKey, altKey, shiftKey, metaKey) {
    return new KeyboardEvent('keydown', {
        key: key,
        bubbles: true,
        cancelable: true,
        ctrlKey: Boolean(ctrlKey),
        altKey: Boolean(altKey),
        shiftKey: Boolean(shiftKey),
        metaKey: Boolean(metaKey)
    });
}
/**
 * Wraps a test function with an exception filter. Does not work
 * correctly for async functions; use safeAsyncWrap instead.
 * @param {!Function|undefined} func
 * @param {!Function=} onexception
 * @return {!Function}
 */ function safeWrap(func, onexception) {
    /**
     * @this {*}
     */ function result() {
        if (!func) {
            return;
        }
        var wrapThis = this;
        try {
            return func.apply(wrapThis, arguments);
        } catch (e) {
            addResult('Exception while running: ' + func + '\n' + (e.stack || e));
            if (onexception) {
                safeWrap(onexception)();
            } else {
                completeTest();
            }
        }
    }
    return result;
}
/**
 * Wraps a test function that returns a Promise with an exception
 * filter. Does not work correctly for functions which don't return
 * a Promise; use safeWrap instead.
 * @param {function(...):Promise<*>} func
 * @return {function(...):Promise<*>}
 */ function safeAsyncWrap(func) {
    function result() {
        return _result.apply(this, arguments);
    }
    function _result() {
        _result = /**
     * @this {*}
     */ _async_to_generator(function() {
            var wrapThis, e;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!func) {
                            return [
                                2
                            ];
                        }
                        wrapThis = this;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            func.apply(wrapThis, _arguments)
                        ];
                    case 2:
                        return [
                            2,
                            _state.sent()
                        ];
                    case 3:
                        e = _state.sent();
                        addResult('Exception while running: ' + func + '\n' + (e.stack || e));
                        completeTest();
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return _result.apply(this, arguments);
    }
    return result;
}
/**
 * @param {!Node} node
 * @return {string}
 */ function textContentWithLineBreaks(node) {
    function padding(currentNode) {
        var result = 0;
        while(currentNode && currentNode !== node){
            if (currentNode.nodeName === 'OL' && !(currentNode.classList && currentNode.classList.contains('object-properties-section'))) {
                ++result;
            }
            currentNode = currentNode.parentNode;
        }
        return Array(result * 4 + 1).join(' ');
    }
    var buffer = '';
    var currentNode = node;
    var ignoreFirst = false;
    while(currentNode.traverseNextNode(node)){
        var _currentNode_parentNode;
        currentNode = currentNode.traverseNextNode(node);
        if (currentNode.nodeType === Node.TEXT_NODE && ((_currentNode_parentNode = currentNode.parentNode) === null || _currentNode_parentNode === void 0 ? void 0 : _currentNode_parentNode.nodeType) !== Node.DOCUMENT_FRAGMENT_NODE) {
            buffer += currentNode.nodeValue;
        } else if (currentNode.nodeName === 'LI' || currentNode.nodeName === 'TR') {
            if (!ignoreFirst) {
                buffer += '\n' + padding(currentNode);
            } else {
                ignoreFirst = false;
            }
        } else if (currentNode.nodeName === 'STYLE') {
            currentNode = currentNode.traverseNextNode(node);
            continue;
        } else if (currentNode.classList && currentNode.classList.contains('object-properties-section')) {
            ignoreFirst = true;
        }
    }
    return buffer;
}
/**
 * @param {!Node} node
 * @return {string}
 */ function textContentWithLineBreaksTrimmed(node) {
    // We want to allow single empty lines (2 white space characters), but
    // compress occurences of 3 or more whitespaces.
    return textContentWithLineBreaks(node).replace(/\s{3,}/g, ' ');
}
/**
 * @param {!Node} node
 * @return {string}
 */ function textContentWithoutStyles(node) {
    var buffer = '';
    var currentNode = node;
    while(true){
        currentNode = currentNode.traverseNextNode(node, currentNode.tagName === 'DEVTOOLS-CSS-LENGTH' || currentNode.tagName === 'DEVTOOLS-ICON');
        if (!currentNode) {
            break;
        }
        if (currentNode.nodeType === Node.TEXT_NODE) {
            buffer += currentNode.nodeValue;
        } else if (currentNode.nodeName === 'STYLE') {
            currentNode = currentNode.traverseNextNode(node);
        }
    }
    return buffer;
}
/**
 * @param {string} code
 * @return {!Promise<*>}
 */ function evaluateInPageRemoteObject(code) {
    return _evaluateInPageRemoteObject.apply(this, arguments);
}
function _evaluateInPageRemoteObject() {
    _evaluateInPageRemoteObject = _async_to_generator(function(code) {
        var response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _evaluateInPage1(code)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        TestRunner.runtimeModel.createRemoteObject(response.result)
                    ];
            }
        });
    });
    return _evaluateInPageRemoteObject.apply(this, arguments);
}
/**
 * @param {string} code
 * @param {function(*, !Protocol.Runtime.ExceptionDetails=):void} callback
 */ function evaluateInPage(code, callback) {
    return _evaluateInPage.apply(this, arguments);
}
function _evaluateInPage() {
    _evaluateInPage = _async_to_generator(function(code, callback) {
        var response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _evaluateInPage1(code)
                    ];
                case 1:
                    response = _state.sent();
                    safeWrap(callback)(response.result.value, response.exceptionDetails);
                    return [
                        2
                    ];
            }
        });
    });
    return _evaluateInPage.apply(this, arguments);
}
/** @type {number} */ var _evaluateInPageCounter = 0;
/**
 * @param {string} code
 * @return {!Promise<undefined|{response: (!SDK.RuntimeModel.RemoteObject|undefined),
 *   exceptionDetails: (!Protocol.Runtime.ExceptionDetails|undefined)}>}
 */ 
function _evaluateInPage1(code) {
    return __evaluateInPage.apply(this, arguments);
}
function __evaluateInPage() {
    __evaluateInPage = _async_to_generator(function(code) {
        var lines, testScriptURL, functionLine, components, source, fileName, sourceURL, lineOffset, response, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    lines = new Error().stack.split('at ');
                    // Handles cases where the function is safe wrapped
                    testScriptURL = /** @type {string} */ _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('test');
                    functionLine = lines.reduce(function(acc, line) {
                        return line.includes(testScriptURL) ? line : acc;
                    }, lines[lines.length - 2]);
                    components = functionLine.trim().split('/');
                    source = components[components.length - 1].slice(0, -1).split(':');
                    fileName = source[0];
                    sourceURL = "test://evaluations/".concat(_evaluateInPageCounter++, "/") + fileName;
                    lineOffset = parseInt(source[1], 10);
                    code = '\n'.repeat(lineOffset - 1) + code;
                    if (code.indexOf('sourceURL=') === -1) {
                        code += "//# sourceURL=".concat(sourceURL);
                    }
                    return [
                        4,
                        TestRunner.RuntimeAgent.invoke_evaluate({
                            expression: code,
                            objectGroup: 'console'
                        })
                    ];
                case 1:
                    response = _state.sent();
                    error = response.getError();
                    if (error) {
                        addResult('Error: ' + error);
                        completeTest();
                        return [
                            2
                        ];
                    }
                    return [
                        2,
                        response
                    ];
            }
        });
    });
    return __evaluateInPage.apply(this, arguments);
}
function logResponseError(response) {
    var errorMessage = 'Error: ';
    if (response.getError()) {
        errorMessage += response.getError();
    } else if (response.exceptionDetails) {
        errorMessage += response.exceptionDetails.text;
        if (response.exceptionDetails.exception) {
            errorMessage += ' ' + response.exceptionDetails.exception.description;
        }
    }
    addResult(errorMessage);
}
/**
 * Doesn't append sourceURL to snippets evaluated in inspected page
 * to avoid churning test expectations
 * @param {string} code
 * @param {boolean=} userGesture
 * @return {!Promise<*>}
 */ function evaluateInPageAnonymously(code, userGesture) {
    return _evaluateInPageAnonymously.apply(this, arguments);
}
function _evaluateInPageAnonymously() {
    _evaluateInPageAnonymously = _async_to_generator(function(code, userGesture) {
        var response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.invoke_evaluate({
                            expression: code,
                            objectGroup: 'console',
                            userGesture: userGesture
                        })
                    ];
                case 1:
                    response = _state.sent();
                    if (response && !response.exceptionDetails && !response.getError()) {
                        return [
                            2,
                            response.result.value
                        ];
                    }
                    logResponseError(response);
                    completeTest();
                    return [
                        2
                    ];
            }
        });
    });
    return _evaluateInPageAnonymously.apply(this, arguments);
}
/**
 * @param {string} code
 * @return {!Promise<*>}
 */ function evaluateInPagePromise(code) {
    return new Promise(function(success) {
        return evaluateInPage(code, success);
    });
}
/**
 * @param {string} code
 * @return {!Promise<*>}
 */ function evaluateInPageAsync(code) {
    return _evaluateInPageAsync.apply(this, arguments);
}
function _evaluateInPageAsync() {
    _evaluateInPageAsync = _async_to_generator(function(code) {
        var response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.invoke_evaluate({
                            expression: code,
                            objectGroup: 'console',
                            includeCommandLineAPI: false,
                            awaitPromise: true
                        })
                    ];
                case 1:
                    response = _state.sent();
                    if (response && !response.exceptionDetails && !response.getError()) {
                        return [
                            2,
                            response.result.value
                        ];
                    }
                    logResponseError(response);
                    completeTest();
                    return [
                        2
                    ];
            }
        });
    });
    return _evaluateInPageAsync.apply(this, arguments);
}
/**
 * @param {string} name
 * @param {!Array<*>} args
 * @return {!Promise<*>}
 */ function callFunctionInPageAsync(name, args) {
    args = args || [];
    return evaluateInPageAsync(name + '(' + args.map(function(a) {
        return JSON.stringify(a);
    }).join(',') + ')');
}
/**
 * @param {string} code
 * @param {boolean=} userGesture
 */ function evaluateInPageWithTimeout(code, userGesture) {
    // FIXME: we need a better way of waiting for chromium events to happen
    evaluateInPageAnonymously('setTimeout(unescape(\'' + escape(code) + '\'), 1)', userGesture);
}
/**
 * @param {function():*} func
 * @param {function(*):void} callback
 */ function evaluateFunctionInOverlay(func, callback) {
    var expression = 'internals.evaluateInInspectorOverlay("(" + ' + func + ' + ")()")';
    var mainContext = TestRunner.runtimeModel.executionContexts()[0];
    mainContext.evaluate({
        expression: expression,
        objectGroup: '',
        includeCommandLineAPI: false,
        silent: false,
        returnByValue: true,
        generatePreview: false
    }, /* userGesture */ false, /* awaitPromise*/ false).then(function(result) {
        return void callback(result.object.value);
    });
}
/**
 * @param {boolean} passCondition
 * @param {string} failureText
 */ function check(passCondition, failureText) {
    if (!passCondition) {
        addResult('FAIL: ' + failureText);
    }
}
/**
 * @param {!Function} callback
 */ function deprecatedRunAfterPendingDispatches(callback) {
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.test.deprecatedRunAfterPendingDispatches(callback);
}
/**
 * This ensures a base tag is set so all DOM references
 * are relative to the test file and not the inspected page
 * (i.e. http/tests/devtools/resources/inspected-page.html).
 * @param {string} html
 * @return {!Promise<*>}
 */ function loadHTML(html) {
    if (!html.includes('<base')) {
        // <!DOCTYPE...> tag needs to be first
        var doctypeRegex = /(<!DOCTYPE.*?>)/i;
        var baseTag = '<base href="'.concat(url(), '">');
        if (html.match(doctypeRegex)) {
            html = html.replace(doctypeRegex, '$1' + baseTag);
        } else {
            html = baseTag + html;
        }
    }
    html = html.replace(/'/g, '\\\'').replace(/\n/g, '\\n');
    return evaluateInPageAnonymously("document.write(`".concat(html, "`);document.close();"));
}
/**
 * @param {string} path
 * @return {!Promise<*>}
 */ function addScriptTag(path) {
    return evaluateInPageAsync("\n    (function(){\n      let script = document.createElement('script');\n      script.src = '".concat(path, "';\n      document.head.append(script);\n      return new Promise(f => script.onload = f);\n    })();\n  "));
}
/**
 * @param {string} path
 * @return {!Promise<*>}
 */ function addStylesheetTag(path) {
    return evaluateInPageAsync("\n    (function(){\n      const link = document.createElement('link');\n      link.rel = 'stylesheet';\n      link.href = '".concat(path, "';\n      link.onload = onload;\n      document.head.append(link);\n      let resolve;\n      const promise = new Promise(r => resolve = r);\n      function onload() {\n        // TODO(chenwilliam): It shouldn't be necessary to force\n        // style recalc here but some tests rely on it.\n        window.getComputedStyle(document.body).color;\n        resolve();\n      }\n      return promise;\n    })();\n  "));
}
/**
 * NOTE you should manually ensure the path is correct. There
 * is no error event triggered if it is incorrect, and this is
 * in line with the standard (crbug 365457).
 * @param {string} path
 * @param {!Object|undefined} options
 * @return {!Promise<*>}
 */ function addIframe(path) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    options.id = options.id || '';
    options.name = options.name || '';
    return evaluateInPageAsync("\n    (function(){\n      const iframe = document.createElement('iframe');\n      iframe.src = '".concat(path, "';\n      iframe.id = '").concat(options.id, "';\n      iframe.name = '").concat(options.name, "';\n      document.body.appendChild(iframe);\n      return new Promise(f => iframe.onload = f);\n    })();\n  "));
}
/**
 * The old test framework executed certain snippets in the inspected page
 * context as part of loading a test helper file.
 *
 * This is deprecated because:
 * 1) it makes the testing API less intuitive (need to read the various *TestRunner.js
 * files to know which helper functions are available in the inspected page).
 * 2) it complicates the test framework's module loading process.
 *
 * In most cases, this is used to set up inspected page functions (e.g. makeSimpleXHR)
 * which should become a *TestRunner method (e.g. NetworkTestRunner.makeSimpleXHR)
 * that calls evaluateInPageAnonymously(...).
 * @param {string} code
 */ function deprecatedInitAsync(code) {
    return _deprecatedInitAsync.apply(this, arguments);
}
function _deprecatedInitAsync() {
    _deprecatedInitAsync = _async_to_generator(function(code) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.invoke_evaluate({
                            expression: code,
                            objectGroup: 'console'
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
    return _deprecatedInitAsync.apply(this, arguments);
}
/**
 * @param {string} title
 */ function markStep(title) {
    addResult('\nRunning: ' + title);
}
function startDumpingProtocolMessages() {
    _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.test.dumpProtocol = self.testRunner.logToStderr.bind(self.testRunner);
}
/**
 * @param {string} url
 * @param {string} content
 * @param {!SDK.ResourceTreeModel.ResourceTreeFrame} frame
 */ function addScriptForFrame(url, content, frame) {
    content += '\n//# sourceURL=' + url;
    var executionContext = TestRunner.runtimeModel.executionContexts().find(function(context) {
        return context.frameId === frame.id;
    });
    TestRunner.RuntimeAgent.evaluate(content, 'console', false, false, executionContext.id);
}
var formatters = {
    /**
     * @param {*} value
     * @return {string}
     */ formatAsTypeName: function formatAsTypeName(value) {
        return '<' + (typeof value === "undefined" ? "undefined" : _type_of(value)) + '>';
    },
    /**
     * @param {*} value
     * @return {string}
     */ formatAsTypeNameOrNull: function formatAsTypeNameOrNull(value) {
        if (value === null) {
            return 'null';
        }
        return formatters.formatAsTypeName(value);
    },
    /**
     * @param {*} value
     * @return {string|!Date}
     */ formatAsRecentTime: function formatAsRecentTime(value) {
        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) !== 'object' || !_instanceof(value, Date)) {
            return formatters.formatAsTypeName(value);
        }
        var delta = Date.now() - value;
        return 0 <= delta && delta < 30 * 60 * 1000 ? '<plausible>' : value;
    },
    /**
     * @param {string} value
     * @return {string}
     */ formatAsURL: function formatAsURL(value) {
        if (!value) {
            return value;
        }
        var lastIndex = value.lastIndexOf('devtools/');
        if (lastIndex < 0) {
            return value;
        }
        return '.../' + value.substr(lastIndex);
    },
    /**
     * @param {string} value
     * @return {string}
     */ formatAsDescription: function formatAsDescription(value) {
        if (!value) {
            return value;
        }
        return '"' + value.replace(/^function [gs]et /, 'function ') + '"';
    }
};
/**
 * @param {!Object} object
 * @param {!TestRunner.CustomFormatters=} customFormatters
 * @param {string=} prefix
 * @param {string=} firstLinePrefix
 */ function addObject(object, customFormatters, prefix, firstLinePrefix) {
    prefix = prefix || '';
    firstLinePrefix = firstLinePrefix || prefix;
    addResult(firstLinePrefix + '{');
    var propertyNames = Object.keys(object);
    propertyNames.sort();
    for(var i = 0; i < propertyNames.length; ++i){
        var prop = propertyNames[i];
        if (!object.hasOwnProperty(prop)) {
            continue;
        }
        var prefixWithName = '    ' + prefix + prop + ' : ';
        var propValue = object[prop];
        if (customFormatters && customFormatters[prop]) {
            var formatterName = customFormatters[prop];
            if (formatterName !== 'skip') {
                var formatter = formatters[formatterName];
                addResult(prefixWithName + formatter(propValue));
            }
        } else {
            dump(propValue, customFormatters, '    ' + prefix, prefixWithName);
        }
    }
    addResult(prefix + '}');
}
/**
 * @param {!Array} array
 * @param {!TestRunner.CustomFormatters=} customFormatters
 * @param {string=} prefix
 * @param {string=} firstLinePrefix
 */ function addArray(array, customFormatters, prefix, firstLinePrefix) {
    prefix = prefix || '';
    firstLinePrefix = firstLinePrefix || prefix;
    addResult(firstLinePrefix + '[');
    for(var i = 0; i < array.length; ++i){
        dump(array[i], customFormatters, prefix + '    ');
    }
    addResult(prefix + ']');
}
/**
 * @param {!Node} node
 */ function dumpDeepInnerHTML(node) {
    /**
     * @param {string} prefix
     * @param {!Node} node
     */ function innerHTML(prefix, node) {
        var openTag = [];
        if (node.nodeType === Node.TEXT_NODE) {
            if (!node.parentElement || node.parentElement.nodeName !== 'STYLE') {
                addResult(node.nodeValue);
            }
            return;
        }
        openTag.push('<' + node.nodeName);
        var attrs = node.attributes;
        for(var i = 0; attrs && i < attrs.length; ++i){
            openTag.push(attrs[i].name + '=' + attrs[i].value);
        }
        openTag.push('>');
        addResult(prefix + openTag.join(' '));
        for(var child = node.firstChild; child; child = child.nextSibling){
            innerHTML(prefix + '    ', child);
        }
        if (node.shadowRoot) {
            innerHTML(prefix + '    ', node.shadowRoot);
        }
        addResult(prefix + '</' + node.nodeName + '>');
    }
    innerHTML('', node);
}
/**
 * @param {!Node} node
 * @return {string}
 */ function deepTextContent(node) {
    if (!node) {
        return '';
    }
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
        return !node.parentElement || node.parentElement.nodeName !== 'STYLE' ? node.nodeValue : '';
    }
    var res = '';
    var children = node.childNodes;
    for(var i = 0; i < children.length; ++i){
        res += deepTextContent(children[i]);
    }
    if (node.shadowRoot) {
        res += deepTextContent(node.shadowRoot);
    }
    return res;
}
/**
 * @param {*} value
 * @param {!TestRunner.CustomFormatters=} customFormatters
 * @param {string=} prefix
 * @param {string=} prefixWithName
 */ function dump(value, customFormatters, prefix, prefixWithName) {
    prefixWithName = prefixWithName || prefix;
    if (prefixWithName && prefixWithName.length > 80) {
        addResult(prefixWithName + 'was skipped due to prefix length limit');
        return;
    }
    if (value === null) {
        addResult(prefixWithName + 'null');
    } else if (value && value.constructor && value.constructor.name === 'Array') {
        addArray(/** @type {!Array} */ value, customFormatters, prefix, prefixWithName);
    } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object') {
        addObject(/** @type {!Object} */ value, customFormatters, prefix, prefixWithName);
    } else if (typeof value === 'string') {
        addResult(prefixWithName + '"' + value + '"');
    } else {
        addResult(prefixWithName + value);
    }
}
/**
 * @param {symbol} eventName
 * @param {!Common.ObjectWrapper.ObjectWrapper} obj
 * @param {function(?):boolean=} condition
 * @return {!Promise}
 */ function waitForEvent(eventName, obj, condition) {
    condition = condition || function() {
        return true;
    };
    return new Promise(function(resolve) {
        obj.addEventListener(eventName, onEventFired);
        /**
         * @param {!Common.EventTarget.EventTargetEvent} event
         */ function onEventFired(event) {
            if (!condition(event.data)) {
                return;
            }
            obj.removeEventListener(eventName, onEventFired);
            resolve(event.data);
        }
    });
}
/**
 * @param {function(!SDK.Target.Target):boolean} filter
 * @return {!Promise<!SDK.Target.Target>}
 */ function waitForTarget(filter) {
    filter = filter || function(target) {
        return true;
    };
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var target = _step.value;
            if (filter(target)) {
                return Promise.resolve(target);
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
    return new Promise(function(fulfill) {
        var observer = /** @type {!SDK.TargetManager.Observer} */ {
            targetAdded: function targetAdded(target) {
                if (filter(target)) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveTargets(observer);
                    fulfill(target);
                }
            },
            targetRemoved: function targetRemoved() {}
        };
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(observer);
    });
}
/**
 * @param {!SDK.Target.Target} targetToRemove
 * @return {!Promise<!SDK.Target.Target>}
 */ function waitForTargetRemoved(targetToRemove) {
    return new Promise(function(fulfill) {
        var observer = /** @type {!SDK.TargetManager.Observer} */ {
            targetRemoved: function targetRemoved(target) {
                if (target === targetToRemove) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveTargets(observer);
                    fulfill(target);
                }
            },
            targetAdded: function targetAdded() {}
        };
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(observer);
    });
}
/**
 * @param {!SDK.RuntimeModel.RuntimeModel} runtimeModel
 * @return {!Promise}
 */ function waitForExecutionContext(runtimeModel) {
    if (runtimeModel.executionContexts().length) {
        return Promise.resolve(runtimeModel.executionContexts()[0]);
    }
    return runtimeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.Events.ExecutionContextCreated);
}
/**
 * @param {!SDK.RuntimeModel.ExecutionContext} context
 * @return {!Promise}
 */ function waitForExecutionContextDestroyed(context) {
    var runtimeModel = context.runtimeModel;
    if (runtimeModel.executionContexts().indexOf(context) === -1) {
        return Promise.resolve();
    }
    return waitForEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.Events.ExecutionContextDestroyed, runtimeModel, function(destroyedContext) {
        return destroyedContext === context;
    });
}
/**
 * @param {number} a
 * @param {number} b
 * @param {string=} message
 */ function assertGreaterOrEqual(a, b, message) {
    if (a < b) {
        addResult('FAILED: ' + (message ? message + ': ' : '') + a + ' < ' + b);
    }
}
var _pageLoadedCallback;
/**
 * @param {string} url
 * @param {function():void} callback
 */ function navigate(url, callback) {
    _pageLoadedCallback = safeWrap(callback);
    TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, _pageNavigated);
    // Note: injected <base> means that url is relative to test
    // and not the inspected page
    evaluateInPageAnonymously('window.location.replace(\'' + url + '\')');
}
/**
 * @return {!Promise}
 */ function navigatePromise(url) {
    return new Promise(function(fulfill) {
        return navigate(url, fulfill);
    });
}
function _pageNavigated() {
    TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, _pageNavigated);
    _handlePageLoaded();
}
/**
 * @param {function():void} callback
 */ function hardReloadPage(callback) {
    _innerReloadPage(true, undefined, callback);
}
/**
 * @param {function():void} callback
 */ function reloadPage(callback) {
    _innerReloadPage(false, undefined, callback);
}
/**
 * @param {(string|undefined)} injectedScript
 * @param {function():void} callback
 */ function reloadPageWithInjectedScript(injectedScript, callback) {
    _innerReloadPage(false, injectedScript, callback);
}
/**
 * @return {!Promise}
 */ function reloadPagePromise() {
    return new Promise(function(fulfill) {
        return reloadPage(fulfill);
    });
}
/**
 * @param {boolean} hardReload
 * @param {(string|undefined)} injectedScript
 * @param {function():void} callback
 */ function _innerReloadPage(hardReload, injectedScript, callback) {
    _pageLoadedCallback = safeWrap(callback);
    TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, pageLoaded);
    TestRunner.resourceTreeModel.reloadPage(hardReload, injectedScript);
}
function pageLoaded() {
    TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, pageLoaded);
    addResult('Page reloaded.');
    _handlePageLoaded();
}
function _handlePageLoaded() {
    return __handlePageLoaded.apply(this, arguments);
}
function __handlePageLoaded() {
    __handlePageLoaded = _async_to_generator(function() {
        var callback;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        waitForExecutionContext(/** @type {!SDK.RuntimeModel.RuntimeModel} */ TestRunner.runtimeModel)
                    ];
                case 1:
                    _state.sent();
                    if (_pageLoadedCallback) {
                        callback = _pageLoadedCallback;
                        _pageLoadedCallback = undefined;
                        callback();
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return __handlePageLoaded.apply(this, arguments);
}
/**
 * @param {function():void} callback
 */ function waitForPageLoad(callback) {
    TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, onLoaded);
    function onLoaded() {
        TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, onLoaded);
        callback();
    }
}
/**
 * @param {function():void} callback
 */ function runWhenPageLoads(callback) {
    var oldCallback = _pageLoadedCallback;
    function chainedCallback() {
        if (oldCallback) {
            oldCallback();
        }
        callback();
    }
    _pageLoadedCallback = safeWrap(chainedCallback);
}
/**
 * @param {!Array<function(function():void)>} testSuite
 */ function runTestSuite(testSuite) {
    var testSuiteTests = testSuite.slice();
    function runner() {
        if (!testSuiteTests.length) {
            completeTest();
            return;
        }
        var nextTest = testSuiteTests.shift();
        addResult('');
        addResult('Running: ' + /function\s([^(]*)/.exec(nextTest)[1]);
        safeWrap(nextTest)(runner);
    }
    runner();
}
/**
 * @param {!Array<function():Promise<*>>} testSuite
 */ function runAsyncTestSuite(testSuite) {
    return _runAsyncTestSuite.apply(this, arguments);
}
function _runAsyncTestSuite() {
    _runAsyncTestSuite = _async_to_generator(function(testSuite) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, nextTest, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = testSuite[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    nextTest = _step.value;
                    addResult('');
                    addResult('Running: ' + /function\s([^(]*)/.exec(nextTest)[1]);
                    return [
                        4,
                        safeAsyncWrap(nextTest)()
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    completeTest();
                    return [
                        2
                    ];
            }
        });
    });
    return _runAsyncTestSuite.apply(this, arguments);
}
/**
 * @param {*} expected
 * @param {*} found
 * @param {string} message
 */ function assertEquals(expected, found, message) {
    if (expected === found) {
        return;
    }
    var error;
    if (message) {
        error = 'Failure (' + message + '):';
    } else {
        error = 'Failure:';
    }
    throw new Error(error + ' expected <' + expected + '> found <' + found + '>');
}
/**
 * @param {*} found
 * @param {string} message
 */ function assertTrue(found, message) {
    assertEquals(true, Boolean(found), message);
}
/**
 * @param {!Object} receiver
 * @param {string} methodName
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 * @return {!Function}
 */ function override(receiver, methodName, override, opt_sticky) {
    override = safeWrap(override);
    var original = receiver[methodName];
    if (typeof original !== 'function') {
        throw new Error('Cannot find method to override: ' + methodName);
    }
    receiver[methodName] = function(var_args) {
        try {
            return override.apply(this, arguments);
        } catch (e) {
            throw new Error('Exception in overriden method \'' + methodName + '\': ' + e);
        } finally{
            if (!opt_sticky) {
                receiver[methodName] = original;
            }
        }
    };
    return original;
}
/**
 * @param {string} text
 * @return {string}
 */ function clearSpecificInfoFromStackFrames(text) {
    var buffer = text.replace(/\(file:\/\/\/(?:[^)]+\)|[\w\/:-]+)/g, '(...)');
    buffer = buffer.replace(/\(http:\/\/(?:[^)]+\)|[\w\/:-]+)/g, '(...)');
    buffer = buffer.replace(/\(test:\/\/(?:[^)]+\)|[\w\/:-]+)/g, '(...)');
    buffer = buffer.replace(/\(<anonymous>:[^)]+\)/g, '(...)');
    buffer = buffer.replace(/VM\d+/g, 'VM');
    return buffer.replace(/\s*at[^()]+\(native\)/g, '');
}
function hideInspectorView() {
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().element.setAttribute('style', 'display:none !important');
}
/**
 * @return {?SDK.ResourceTreeModel.ResourceTreeFrame}
 */ function mainFrame() {
    return TestRunner.resourceTreeModel.mainFrame;
}
var StringOutputStream = /*#__PURE__*/ function() {
    "use strict";
    function StringOutputStream(callback) {
        _class_call_check(this, StringOutputStream);
        this.callback = callback;
        this.buffer = '';
    }
    _create_class(StringOutputStream, [
        {
            key: "open",
            value: /**
     * @param {string} fileName
     * @return {!Promise<boolean>}
     */ function open(fileName) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            true
                        ];
                    });
                })();
            }
        },
        {
            key: "write",
            value: /**
     * @param {string} chunk
     */ function write(chunk) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.buffer += chunk;
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "close",
            value: function close() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.callback(_this.buffer);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return StringOutputStream;
}();
/**
 * @template V
 */ var MockSetting = /*#__PURE__*/ function() {
    "use strict";
    function MockSetting(value) {
        _class_call_check(this, MockSetting);
        this.value = value;
    }
    _create_class(MockSetting, [
        {
            /**
     * @return {V}
     */ key: "get",
            value: function get() {
                return this.value;
            }
        },
        {
            /**
     * @param {V} value
     */ key: "set",
            value: function set(value) {
                this.value = value;
            }
        }
    ]);
    return MockSetting;
}();
/**
 * @param {string} urlSuffix
 * @param {!Workspace.Workspace.projectTypes=} projectType
 * @return {!Promise}
 */ function waitForUISourceCode(urlSuffix, projectType) {
    /**
     * @param {!Workspace.UISourceCode.UISourceCode} uiSourceCode
     * @return {boolean}
     */ function matches(uiSourceCode) {
        if (projectType && uiSourceCode.project().type() !== projectType) {
            return false;
        }
        if (!projectType && uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Service) {
            return false;
        }
        if (urlSuffix && !uiSourceCode.url().endsWith(urlSuffix)) {
            return false;
        }
        return true;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var uiSourceCode = _step.value;
            if (urlSuffix && matches(uiSourceCode)) {
                return Promise.resolve(uiSourceCode);
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
    return waitForEvent(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.Events.UISourceCodeAdded, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance(), matches);
}
/**
 * @param {!Function} callback
 */ function waitForUISourceCodeRemoved(callback) {
    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().once(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.Events.UISourceCodeRemoved).then(callback);
}
/**
 * @param {string=} url
 * @return {string}
 */ function url() {
    var _$url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
    var testScriptURL = /** @type {string} */ _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('inspected_test') || _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('test');
    // This handles relative (e.g. "../file"), root (e.g. "/resource"),
    // absolute (e.g. "http://", "data:") and empty (e.g. "") paths
    return new URL(_$url, testScriptURL + '/../').href;
}
/**
 * @param {string} str
 * @param {string} mimeType
 * @return {!Promise.<undefined>}
 */ function dumpSyntaxHighlight(str, mimeType) {
    var node = document.createElement('span');
    node.textContent = str;
    return _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__.CodeHighlighter.highlightNode(node, mimeType).then(dumpSyntax);
    function dumpSyntax() {
        var node_parts = [];
        for(var i = 0; i < node.childNodes.length; i++){
            if (node.childNodes[i].getAttribute) {
                node_parts.push(node.childNodes[i].getAttribute('class'));
            } else {
                node_parts.push('*');
            }
        }
        addResult(str + ': ' + node_parts.join(', '));
    }
}
/* this code exists in Platform.StringUtilities but these layout tests
* cannot import ES modules so we copy the required code in directly as
* these layout tests are going to be removed in favour of e2e so it's
* not worth adding ESM support here
*/ /**
 *
 * @param {string} inputString
 * @param {string} searchString
 * @return {!Array.<number>}
 */ var findIndexesOfSubString = function findIndexesOfSubString(inputString, searchString) {
    var matches = [];
    var i = inputString.indexOf(searchString);
    while(i !== -1){
        matches.push(i);
        i = inputString.indexOf(searchString, i + searchString.length);
    }
    return matches;
};
/**
 *
 * @param {string} inputString
 * @return {!Array.<number>}
 */ var findLineEndingIndexes = function findLineEndingIndexes(inputString) {
    var endings = findIndexesOfSubString(inputString, '\n');
    endings.push(inputString.length);
    return endings;
};
/**
 * @param {string} querySelector
 */ function dumpInspectedPageElementText(querySelector) {
    return _dumpInspectedPageElementText.apply(this, arguments);
}
function _dumpInspectedPageElementText() {
    _dumpInspectedPageElementText = _async_to_generator(function(querySelector) {
        var value;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        evaluateInPageAsync("document.querySelector('".concat(querySelector, "').innerText"))
                    ];
                case 1:
                    value = _state.sent();
                    addResult(value);
                    return [
                        2
                    ];
            }
        });
    });
    return _dumpInspectedPageElementText.apply(this, arguments);
}
/**
 * This method blocks until all currently queued live location update handlers are done.
 *
 * Creating and updating live locations causes the update handler of each live location
 * to run. These update handlers are potentially asynchronous and usually cause re-rendering or
 * UI updates. Web tests then check for these updates.
 * To give tests more control, waitForPendingLiveLocationUpdates returns a promise that resolves
 * once all currently-pending updates (at call time) are completed.
 */ function waitForPendingLiveLocationUpdates() {
    return _waitForPendingLiveLocationUpdates.apply(this, arguments);
}
function _waitForPendingLiveLocationUpdates() {
    _waitForPendingLiveLocationUpdates = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().pendingLiveLocationChangesPromise()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _waitForPendingLiveLocationUpdates.apply(this, arguments);
}
/** @type {!{logToStderr: function(), navigateSecondaryWindow: function(string), notifyDone: function()}|undefined} */ self.testRunner;
TestRunner.StringOutputStream = StringOutputStream;
TestRunner.MockSetting = MockSetting;
TestRunner.formatters = formatters;
TestRunner.completeTest = completeTest;
TestRunner.addResult = addResult;
TestRunner.addResults = addResults;
TestRunner.runTests = runTests;
TestRunner.addSniffer = addSniffer;
TestRunner.addSnifferPromise = addSnifferPromise;
TestRunner.showPanel = showPanel;
TestRunner.createKeyEvent = createKeyEvent;
TestRunner.safeWrap = safeWrap;
TestRunner.textContentWithLineBreaks = textContentWithLineBreaks;
TestRunner.textContentWithLineBreaksTrimmed = textContentWithLineBreaksTrimmed;
TestRunner.textContentWithoutStyles = textContentWithoutStyles;
TestRunner.evaluateInPagePromise = evaluateInPagePromise;
TestRunner.callFunctionInPageAsync = callFunctionInPageAsync;
TestRunner.evaluateInPageWithTimeout = evaluateInPageWithTimeout;
TestRunner.evaluateFunctionInOverlay = evaluateFunctionInOverlay;
TestRunner.check = check;
TestRunner.deprecatedRunAfterPendingDispatches = deprecatedRunAfterPendingDispatches;
TestRunner.loadHTML = loadHTML;
TestRunner.addScriptTag = addScriptTag;
TestRunner.addStylesheetTag = addStylesheetTag;
TestRunner.addIframe = addIframe;
TestRunner.markStep = markStep;
TestRunner.startDumpingProtocolMessages = startDumpingProtocolMessages;
TestRunner.addScriptForFrame = addScriptForFrame;
TestRunner.addObject = addObject;
TestRunner.addArray = addArray;
TestRunner.dumpDeepInnerHTML = dumpDeepInnerHTML;
TestRunner.deepTextContent = deepTextContent;
TestRunner.dump = dump;
TestRunner.waitForEvent = waitForEvent;
TestRunner.waitForTarget = waitForTarget;
TestRunner.waitForTargetRemoved = waitForTargetRemoved;
TestRunner.waitForExecutionContext = waitForExecutionContext;
TestRunner.waitForExecutionContextDestroyed = waitForExecutionContextDestroyed;
TestRunner.assertGreaterOrEqual = assertGreaterOrEqual;
TestRunner.navigate = navigate;
TestRunner.navigatePromise = navigatePromise;
TestRunner.hardReloadPage = hardReloadPage;
TestRunner.reloadPage = reloadPage;
TestRunner.reloadPageWithInjectedScript = reloadPageWithInjectedScript;
TestRunner.reloadPagePromise = reloadPagePromise;
TestRunner.pageLoaded = pageLoaded;
TestRunner.waitForPageLoad = waitForPageLoad;
TestRunner.runWhenPageLoads = runWhenPageLoads;
TestRunner.runTestSuite = runTestSuite;
TestRunner.assertEquals = assertEquals;
TestRunner.assertTrue = assertTrue;
TestRunner.override = override;
TestRunner.clearSpecificInfoFromStackFrames = clearSpecificInfoFromStackFrames;
TestRunner.hideInspectorView = hideInspectorView;
TestRunner.mainFrame = mainFrame;
TestRunner.waitForUISourceCode = waitForUISourceCode;
TestRunner.waitForUISourceCodeRemoved = waitForUISourceCodeRemoved;
TestRunner.url = url;
TestRunner.dumpSyntaxHighlight = dumpSyntaxHighlight;
TestRunner.evaluateInPageRemoteObject = evaluateInPageRemoteObject;
TestRunner.evaluateInPage = evaluateInPage;
TestRunner.evaluateInPageAnonymously = evaluateInPageAnonymously;
TestRunner.evaluateInPageAsync = evaluateInPageAsync;
TestRunner.deprecatedInitAsync = deprecatedInitAsync;
TestRunner.runAsyncTestSuite = runAsyncTestSuite;
TestRunner.dumpInspectedPageElementText = dumpInspectedPageElementText;
TestRunner.waitForPendingLiveLocationUpdates = waitForPendingLiveLocationUpdates;
TestRunner.findLineEndingIndexes = findLineEndingIndexes;
TestRunner.selectTextInTextNode = selectTextInTextNode;
TestRunner.isScrolledToBottom = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.isScrolledToBottom; //# sourceMappingURL=TestRunner.js.map


}),

}]);