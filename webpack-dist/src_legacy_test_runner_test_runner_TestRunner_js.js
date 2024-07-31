"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_test_runner_TestRunner_js"],{

/***/ "./src/legacy_test_runner/test_runner/TestRunner.js":
/*!**********************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/TestRunner.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockSetting: () => (/* binding */ MockSetting),
/* harmony export */   StringOutputStream: () => (/* binding */ StringOutputStream),
/* harmony export */   _evaluateInPage: () => (/* binding */ _evaluateInPage),
/* harmony export */   _handlePageLoaded: () => (/* binding */ _handlePageLoaded),
/* harmony export */   _innerReloadPage: () => (/* binding */ _innerReloadPage),
/* harmony export */   _pageNavigated: () => (/* binding */ _pageNavigated),
/* harmony export */   _printDevToolsConsole: () => (/* binding */ _printDevToolsConsole),
/* harmony export */   addArray: () => (/* binding */ addArray),
/* harmony export */   addIframe: () => (/* binding */ addIframe),
/* harmony export */   addObject: () => (/* binding */ addObject),
/* harmony export */   addResult: () => (/* binding */ addResult),
/* harmony export */   addResults: () => (/* binding */ addResults),
/* harmony export */   addScriptForFrame: () => (/* binding */ addScriptForFrame),
/* harmony export */   addScriptTag: () => (/* binding */ addScriptTag),
/* harmony export */   addSniffer: () => (/* binding */ addSniffer),
/* harmony export */   addSnifferPromise: () => (/* binding */ addSnifferPromise),
/* harmony export */   addStylesheetTag: () => (/* binding */ addStylesheetTag),
/* harmony export */   assertEquals: () => (/* binding */ assertEquals),
/* harmony export */   assertGreaterOrEqual: () => (/* binding */ assertGreaterOrEqual),
/* harmony export */   assertTrue: () => (/* binding */ assertTrue),
/* harmony export */   callFunctionInPageAsync: () => (/* binding */ callFunctionInPageAsync),
/* harmony export */   check: () => (/* binding */ check),
/* harmony export */   clearSpecificInfoFromStackFrames: () => (/* binding */ clearSpecificInfoFromStackFrames),
/* harmony export */   completeTest: () => (/* binding */ completeTest),
/* harmony export */   createKeyEvent: () => (/* binding */ createKeyEvent),
/* harmony export */   deepTextContent: () => (/* binding */ deepTextContent),
/* harmony export */   deprecatedInitAsync: () => (/* binding */ deprecatedInitAsync),
/* harmony export */   deprecatedRunAfterPendingDispatches: () => (/* binding */ deprecatedRunAfterPendingDispatches),
/* harmony export */   dump: () => (/* binding */ dump),
/* harmony export */   dumpDeepInnerHTML: () => (/* binding */ dumpDeepInnerHTML),
/* harmony export */   dumpInspectedPageElementText: () => (/* binding */ dumpInspectedPageElementText),
/* harmony export */   dumpSyntaxHighlight: () => (/* binding */ dumpSyntaxHighlight),
/* harmony export */   evaluateFunctionInOverlay: () => (/* binding */ evaluateFunctionInOverlay),
/* harmony export */   evaluateInPage: () => (/* binding */ evaluateInPage),
/* harmony export */   evaluateInPageAnonymously: () => (/* binding */ evaluateInPageAnonymously),
/* harmony export */   evaluateInPageAsync: () => (/* binding */ evaluateInPageAsync),
/* harmony export */   evaluateInPagePromise: () => (/* binding */ evaluateInPagePromise),
/* harmony export */   evaluateInPageRemoteObject: () => (/* binding */ evaluateInPageRemoteObject),
/* harmony export */   evaluateInPageWithTimeout: () => (/* binding */ evaluateInPageWithTimeout),
/* harmony export */   findLineEndingIndexes: () => (/* binding */ findLineEndingIndexes),
/* harmony export */   formatters: () => (/* binding */ formatters),
/* harmony export */   hardReloadPage: () => (/* binding */ hardReloadPage),
/* harmony export */   hideInspectorView: () => (/* binding */ hideInspectorView),
/* harmony export */   isDebugTest: () => (/* binding */ isDebugTest),
/* harmony export */   loadHTML: () => (/* binding */ loadHTML),
/* harmony export */   mainFrame: () => (/* binding */ mainFrame),
/* harmony export */   markStep: () => (/* binding */ markStep),
/* harmony export */   navigate: () => (/* binding */ navigate),
/* harmony export */   navigatePromise: () => (/* binding */ navigatePromise),
/* harmony export */   override: () => (/* binding */ override),
/* harmony export */   pageLoaded: () => (/* binding */ pageLoaded),
/* harmony export */   reloadPage: () => (/* binding */ reloadPage),
/* harmony export */   reloadPagePromise: () => (/* binding */ reloadPagePromise),
/* harmony export */   reloadPageWithInjectedScript: () => (/* binding */ reloadPageWithInjectedScript),
/* harmony export */   runAsyncTestSuite: () => (/* binding */ runAsyncTestSuite),
/* harmony export */   runTestSuite: () => (/* binding */ runTestSuite),
/* harmony export */   runTests: () => (/* binding */ runTests),
/* harmony export */   runWhenPageLoads: () => (/* binding */ runWhenPageLoads),
/* harmony export */   safeWrap: () => (/* binding */ safeWrap),
/* harmony export */   selectTextInTextNode: () => (/* binding */ selectTextInTextNode),
/* harmony export */   setInnerCompleteTest: () => (/* binding */ setInnerCompleteTest),
/* harmony export */   setInnerResult: () => (/* binding */ setInnerResult),
/* harmony export */   showPanel: () => (/* binding */ showPanel),
/* harmony export */   startDumpingProtocolMessages: () => (/* binding */ startDumpingProtocolMessages),
/* harmony export */   textContentWithLineBreaks: () => (/* binding */ textContentWithLineBreaks),
/* harmony export */   textContentWithLineBreaksTrimmed: () => (/* binding */ textContentWithLineBreaksTrimmed),
/* harmony export */   textContentWithoutStyles: () => (/* binding */ textContentWithoutStyles),
/* harmony export */   url: () => (/* binding */ url),
/* harmony export */   waitForEvent: () => (/* binding */ waitForEvent),
/* harmony export */   waitForExecutionContext: () => (/* binding */ waitForExecutionContext),
/* harmony export */   waitForExecutionContextDestroyed: () => (/* binding */ waitForExecutionContextDestroyed),
/* harmony export */   waitForPageLoad: () => (/* binding */ waitForPageLoad),
/* harmony export */   waitForPendingLiveLocationUpdates: () => (/* binding */ waitForPendingLiveLocationUpdates),
/* harmony export */   waitForTarget: () => (/* binding */ waitForTarget),
/* harmony export */   waitForTargetRemoved: () => (/* binding */ waitForTargetRemoved),
/* harmony export */   waitForUISourceCode: () => (/* binding */ waitForUISourceCode),
/* harmony export */   waitForUISourceCodeRemoved: () => (/* binding */ waitForUISourceCodeRemoved)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.

  // eslint-disable-line no-unused-vars








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

/* eslint-disable no-console */

/**
 * @return {boolean}
 */
function isDebugTest() {
  return !self.testRunner || Boolean(_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('debugFrontend'));
}

/**
 * This monkey patches console functions in DevTools context so the console
 * messages are shown in the right places, instead of having all of the console
 * messages printed at the top of the test expectation file (default behavior).
 */
function _printDevToolsConsole() {
  if (isDebugTest()) {
    return;
  }
  console.log = (...args) => {
    addResult(`log: ${args}`);
  };
  console.error = (...args) => {
    addResult(`error: ${args}`);
  };
  console.info = (...args) => {
    addResult(`info: ${args}`);
  };
  console.assert = (assertionCondition, ...args) => {
    if (!assertionCondition) {
      addResult(`ASSERTION FAILURE: ${args.join(' ')}`);
    }
  };
}

self['onerror'] = (message, source, lineno, colno, error) => {
  addResult('TEST ENDED IN ERROR: ' + error.stack);
  completeTest();
};
(() => {
  self.addEventListener('unhandledrejection', event => {
    addResult(`PROMISE FAILURE: ${event.reason.stack ?? event.reason}`);
    completeTest();
  });
})();
_printDevToolsConsole();

// TODO(crbug.com/1032477): Re-enable once test timeouts are handled in Chromium
// setTimeout(() => {
//   addResult('TEST TIMED OUT!');
//   completeTest();
// }, 6000);

/** @type {!Array<string>} */
let _results = [];

let _innerAddResult = text => {
  _results.push(String(text));
};

function setInnerResult(updatedInnerResult) {
  _innerAddResult = updatedInnerResult;
}

/**
 * @param {*} text
 */
function addResult(text) {
  _innerAddResult(text);
}

let completed = false;

let _innerCompleteTest = () => {
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
  Array.prototype.forEach.call(document.documentElement.childNodes, x => x.remove());
  const outputElement = document.createElement('div');
  // Support for svg - add to document, not body, check for style.
  if (outputElement.style) {
    outputElement.style.whiteSpace = 'pre';
    outputElement.style.height = '10px';
    outputElement.style.overflow = 'hidden';
  }
  document.documentElement.appendChild(outputElement);
  for (let i = 0; i < _results.length; i++) {
    outputElement.appendChild(document.createTextNode(_results[i]));
    outputElement.appendChild(document.createElement('br'));
  }
  _results = [];
}

/**
 * @param {!Array<string>} textArray
 */
function addResults(textArray) {
  if (!textArray) {
    return;
  }
  for (let i = 0, size = textArray.length; i < size; ++i) {
    addResult(textArray[i]);
  }
}

/**
 * @param {!Array<function()>} tests
 */
function runTests(tests) {
  nextTest();

  function nextTest() {
    const test = tests.shift();
    if (!test) {
      completeTest();
      return;
    }
    addResult('\ntest: ' + test.name);
    let testPromise = test();
    if (!(testPromise instanceof Promise)) {
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
 */
function addSniffer(receiver, methodName, override, opt_sticky) {
  override = safeWrap(override);

  const original = receiver[methodName];
  if (typeof original !== 'function') {
    throw new Error('Cannot find method to override: ' + methodName);
  }

  receiver[methodName] = function(var_args) {
    let result;
    try {
      result = original.apply(this, arguments);
    } finally {
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
 */
function addSnifferPromise(receiver, methodName) {
  return new Promise(function(resolve, reject) {
    const original = receiver[methodName];
    if (typeof original !== 'function') {
      reject('Cannot find method to override: ' + methodName);
      return;
    }

    receiver[methodName] = function(var_args) {
      let result;
      try {
        result = original.apply(this, arguments);
      } finally {
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
 */
function selectTextInTextNode(textNode, start, end) {
  start = start || 0;
  end = end || textNode.textContent.length;

  if (start < 0) {
    start = end + start;
  }

  const selection = textNode.getComponentSelection();
  selection.removeAllRanges();
  const range = textNode.ownerDocument.createRange();
  range.setStart(textNode, start);
  range.setEnd(textNode, end);
  selection.addRange(range);
  return textNode;
}

/**
 * @param {string} panel
 * @return {!Promise.<?UI.Panel.Panel>}
 */
function showPanel(panel) {
  return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView(panel);
}

/**
 * @param {string} key
 * @param {boolean=} ctrlKey
 * @param {boolean=} altKey
 * @param {boolean=} shiftKey
 * @param {boolean=} metaKey
 * @return {!KeyboardEvent}
 */
function createKeyEvent(key, ctrlKey, altKey, shiftKey, metaKey) {
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
 */
function safeWrap(func, onexception) {
  /**
   * @this {*}
   */
  function result() {
    if (!func) {
      return;
    }
    const wrapThis = this;
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
 */
function safeAsyncWrap(func) {
  /**
   * @this {*}
   */
  async function result() {
    if (!func) {
      return;
    }
    const wrapThis = this;
    try {
      return await func.apply(wrapThis, arguments);
    } catch (e) {
      addResult('Exception while running: ' + func + '\n' + (e.stack || e));
      completeTest();
    }
  }
  return result;
}

/**
 * @param {!Node} node
 * @return {string}
 */
function textContentWithLineBreaks(node) {
  function padding(currentNode) {
    let result = 0;
    while (currentNode && currentNode !== node) {
      if (currentNode.nodeName === 'OL' &&
          !(currentNode.classList && currentNode.classList.contains('object-properties-section'))) {
        ++result;
      }
      currentNode = currentNode.parentNode;
    }
    return Array(result * 4 + 1).join(' ');
  }

  let buffer = '';
  let currentNode = node;
  let ignoreFirst = false;
  while (currentNode.traverseNextNode(node)) {
    currentNode = currentNode.traverseNextNode(node);
    if (currentNode.nodeType === Node.TEXT_NODE && currentNode.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
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
 */
function textContentWithLineBreaksTrimmed(node) {
  // We want to allow single empty lines (2 white space characters), but
  // compress occurences of 3 or more whitespaces.
  return textContentWithLineBreaks(node).replace(/\s{3,}/g, ' ');
}

/**
 * @param {!Node} node
 * @return {string}
 */
function textContentWithoutStyles(node) {
  let buffer = '';
  let currentNode = node;
  while (true) {
    currentNode = currentNode.traverseNextNode(
        node, currentNode.tagName === 'DEVTOOLS-CSS-LENGTH' || currentNode.tagName === 'DEVTOOLS-ICON');
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
 */
async function evaluateInPageRemoteObject(code) {
  const response = await _evaluateInPage(code);
  return TestRunner.runtimeModel.createRemoteObject(response.result);
}

/**
 * @param {string} code
 * @param {function(*, !Protocol.Runtime.ExceptionDetails=):void} callback
 */
async function evaluateInPage(code, callback) {
  const response = await _evaluateInPage(code);
  safeWrap(callback)(response.result.value, response.exceptionDetails);
}

/** @type {number} */
let _evaluateInPageCounter = 0;

/**
 * @param {string} code
 * @return {!Promise<undefined|{response: (!SDK.RuntimeModel.RemoteObject|undefined),
 *   exceptionDetails: (!Protocol.Runtime.ExceptionDetails|undefined)}>}
 */
async function _evaluateInPage(code) {
  const lines = new Error().stack.split('at ');

  // Handles cases where the function is safe wrapped
  const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('test'));
  const functionLine = lines.reduce((acc, line) => line.includes(testScriptURL) ? line : acc, lines[lines.length - 2]);

  const components = functionLine.trim().split('/');
  const source = components[components.length - 1].slice(0, -1).split(':');
  const fileName = source[0];
  const sourceURL = `test://evaluations/${_evaluateInPageCounter++}/` + fileName;
  const lineOffset = parseInt(source[1], 10);
  code = '\n'.repeat(lineOffset - 1) + code;
  if (code.indexOf('sourceURL=') === -1) {
    code += `//# sourceURL=${sourceURL}`;
  }
  const response = await TestRunner.RuntimeAgent.invoke_evaluate({expression: code, objectGroup: 'console'});
  const error = response.getError();
  if (error) {
    addResult('Error: ' + error);
    completeTest();
    return;
  }
  return response;
}

function logResponseError(response) {
  let errorMessage = 'Error: ';
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
 */
async function evaluateInPageAnonymously(code, userGesture) {
  const response =
      await TestRunner.RuntimeAgent.invoke_evaluate({expression: code, objectGroup: 'console', userGesture});
  if (response && !response.exceptionDetails && !response.getError()) {
    return response.result.value;
  }
  logResponseError(response);
  completeTest();
}

/**
 * @param {string} code
 * @return {!Promise<*>}
 */
function evaluateInPagePromise(code) {
  return new Promise(success => evaluateInPage(code, success));
}

/**
 * @param {string} code
 * @return {!Promise<*>}
 */
async function evaluateInPageAsync(code) {
  const response = await TestRunner.RuntimeAgent.invoke_evaluate(
      {expression: code, objectGroup: 'console', includeCommandLineAPI: false, awaitPromise: true});

  if (response && !response.exceptionDetails && !response.getError()) {
    return response.result.value;
  }
  logResponseError(response);
  completeTest();
}

/**
 * @param {string} name
 * @param {!Array<*>} args
 * @return {!Promise<*>}
 */
function callFunctionInPageAsync(name, args) {
  args = args || [];
  return evaluateInPageAsync(name + '(' + args.map(a => JSON.stringify(a)).join(',') + ')');
}

/**
 * @param {string} code
 * @param {boolean=} userGesture
 */
function evaluateInPageWithTimeout(code, userGesture) {
  // FIXME: we need a better way of waiting for chromium events to happen
  evaluateInPageAnonymously('setTimeout(unescape(\'' + escape(code) + '\'), 1)', userGesture);
}

/**
 * @param {function():*} func
 * @param {function(*):void} callback
 */
function evaluateFunctionInOverlay(func, callback) {
  const expression = 'internals.evaluateInInspectorOverlay("(" + ' + func + ' + ")()")';
  const mainContext = TestRunner.runtimeModel.executionContexts()[0];
  mainContext
      .evaluate(
          {
            expression: expression,
            objectGroup: '',
            includeCommandLineAPI: false,
            silent: false,
            returnByValue: true,
            generatePreview: false
          },
          /* userGesture */ false, /* awaitPromise*/ false)
      .then(result => void callback(result.object.value));
}

/**
 * @param {boolean} passCondition
 * @param {string} failureText
 */
function check(passCondition, failureText) {
  if (!passCondition) {
    addResult('FAIL: ' + failureText);
  }
}

/**
 * @param {!Function} callback
 */
function deprecatedRunAfterPendingDispatches(callback) {
  _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.test.deprecatedRunAfterPendingDispatches(callback);
}

/**
 * This ensures a base tag is set so all DOM references
 * are relative to the test file and not the inspected page
 * (i.e. http/tests/devtools/resources/inspected-page.html).
 * @param {string} html
 * @return {!Promise<*>}
 */
function loadHTML(html) {
  if (!html.includes('<base')) {
    // <!DOCTYPE...> tag needs to be first
    const doctypeRegex = /(<!DOCTYPE.*?>)/i;
    const baseTag = `<base href="${url()}">`;
    if (html.match(doctypeRegex)) {
      html = html.replace(doctypeRegex, '$1' + baseTag);
    } else {
      html = baseTag + html;
    }
  }
  html = html.replace(/'/g, '\\\'').replace(/\n/g, '\\n');
  return evaluateInPageAnonymously(`document.write(\`${html}\`);document.close();`);
}

/**
 * @param {string} path
 * @return {!Promise<*>}
 */
function addScriptTag(path) {
  return evaluateInPageAsync(`
    (function(){
      let script = document.createElement('script');
      script.src = '${path}';
      document.head.append(script);
      return new Promise(f => script.onload = f);
    })();
  `);
}

/**
 * @param {string} path
 * @return {!Promise<*>}
 */
function addStylesheetTag(path) {
  return evaluateInPageAsync(`
    (function(){
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '${path}';
      link.onload = onload;
      document.head.append(link);
      let resolve;
      const promise = new Promise(r => resolve = r);
      function onload() {
        // TODO(chenwilliam): It shouldn't be necessary to force
        // style recalc here but some tests rely on it.
        window.getComputedStyle(document.body).color;
        resolve();
      }
      return promise;
    })();
  `);
}

/**
 * NOTE you should manually ensure the path is correct. There
 * is no error event triggered if it is incorrect, and this is
 * in line with the standard (crbug 365457).
 * @param {string} path
 * @param {!Object|undefined} options
 * @return {!Promise<*>}
 */
function addIframe(path, options = {}) {
  options.id = options.id || '';
  options.name = options.name || '';
  return evaluateInPageAsync(`
    (function(){
      const iframe = document.createElement('iframe');
      iframe.src = '${path}';
      iframe.id = '${options.id}';
      iframe.name = '${options.name}';
      document.body.appendChild(iframe);
      return new Promise(f => iframe.onload = f);
    })();
  `);
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
 */
async function deprecatedInitAsync(code) {
  await TestRunner.RuntimeAgent.invoke_evaluate({expression: code, objectGroup: 'console'});
}

/**
 * @param {string} title
 */
function markStep(title) {
  addResult('\nRunning: ' + title);
}

function startDumpingProtocolMessages() {
  _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_1__.InspectorBackend.test.dumpProtocol = self.testRunner.logToStderr.bind(self.testRunner);
}

/**
 * @param {string} url
 * @param {string} content
 * @param {!SDK.ResourceTreeModel.ResourceTreeFrame} frame
 */
function addScriptForFrame(url, content, frame) {
  content += '\n//# sourceURL=' + url;
  const executionContext = TestRunner.runtimeModel.executionContexts().find(context => context.frameId === frame.id);
  TestRunner.RuntimeAgent.evaluate(content, 'console', false, false, executionContext.id);
}

const formatters = {

  /**
   * @param {*} value
   * @return {string}
   */
  formatAsTypeName(value) {
    return '<' + typeof value + '>';
  },

  /**
   * @param {*} value
   * @return {string}
   */
  formatAsTypeNameOrNull(value) {
    if (value === null) {
      return 'null';
    }
    return formatters.formatAsTypeName(value);
  },

  /**
   * @param {*} value
   * @return {string|!Date}
   */
  formatAsRecentTime(value) {
    if (typeof value !== 'object' || !(value instanceof Date)) {
      return formatters.formatAsTypeName(value);
    }
    const delta = Date.now() - value;
    return 0 <= delta && delta < 30 * 60 * 1000 ? '<plausible>' : value;
  },

  /**
   * @param {string} value
   * @return {string}
   */
  formatAsURL(value) {
    if (!value) {
      return value;
    }
    const lastIndex = value.lastIndexOf('devtools/');
    if (lastIndex < 0) {
      return value;
    }
    return '.../' + value.substr(lastIndex);
  },

  /**
   * @param {string} value
   * @return {string}
   */
  formatAsDescription(value) {
    if (!value) {
      return value;
    }
    return '"' + value.replace(/^function [gs]et /, 'function ') + '"';
  },
};

/**
 * @param {!Object} object
 * @param {!TestRunner.CustomFormatters=} customFormatters
 * @param {string=} prefix
 * @param {string=} firstLinePrefix
 */
function addObject(object, customFormatters, prefix, firstLinePrefix) {
  prefix = prefix || '';
  firstLinePrefix = firstLinePrefix || prefix;
  addResult(firstLinePrefix + '{');
  const propertyNames = Object.keys(object);
  propertyNames.sort();
  for (let i = 0; i < propertyNames.length; ++i) {
    const prop = propertyNames[i];
    if (!object.hasOwnProperty(prop)) {
      continue;
    }
    const prefixWithName = '    ' + prefix + prop + ' : ';
    const propValue = object[prop];
    if (customFormatters && customFormatters[prop]) {
      const formatterName = customFormatters[prop];
      if (formatterName !== 'skip') {
        const formatter = formatters[formatterName];
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
 */
function addArray(array, customFormatters, prefix, firstLinePrefix) {
  prefix = prefix || '';
  firstLinePrefix = firstLinePrefix || prefix;
  addResult(firstLinePrefix + '[');
  for (let i = 0; i < array.length; ++i) {
    dump(array[i], customFormatters, prefix + '    ');
  }
  addResult(prefix + ']');
}

/**
 * @param {!Node} node
 */
function dumpDeepInnerHTML(node) {
  /**
   * @param {string} prefix
   * @param {!Node} node
   */
  function innerHTML(prefix, node) {
    const openTag = [];
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.parentElement || node.parentElement.nodeName !== 'STYLE') {
        addResult(node.nodeValue);
      }
      return;
    }
    openTag.push('<' + node.nodeName);
    const attrs = node.attributes;
    for (let i = 0; attrs && i < attrs.length; ++i) {
      openTag.push(attrs[i].name + '=' + attrs[i].value);
    }

    openTag.push('>');
    addResult(prefix + openTag.join(' '));
    for (let child = node.firstChild; child; child = child.nextSibling) {
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
 */
function deepTextContent(node) {
  if (!node) {
    return '';
  }
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
    return !node.parentElement || node.parentElement.nodeName !== 'STYLE' ? node.nodeValue : '';
  }
  let res = '';
  const children = node.childNodes;
  for (let i = 0; i < children.length; ++i) {
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
 */
function dump(value, customFormatters, prefix, prefixWithName) {
  prefixWithName = prefixWithName || prefix;
  if (prefixWithName && prefixWithName.length > 80) {
    addResult(prefixWithName + 'was skipped due to prefix length limit');
    return;
  }
  if (value === null) {
    addResult(prefixWithName + 'null');
  } else if (value && value.constructor && value.constructor.name === 'Array') {
    addArray(/** @type {!Array} */ (value), customFormatters, prefix, prefixWithName);
  } else if (typeof value === 'object') {
    addObject(/** @type {!Object} */ (value), customFormatters, prefix, prefixWithName);
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
 */
function waitForEvent(eventName, obj, condition) {
  condition = condition || function() {
    return true;
  };
  return new Promise(resolve => {
    obj.addEventListener(eventName, onEventFired);

    /**
     * @param {!Common.EventTarget.EventTargetEvent} event
     */
    function onEventFired(event) {
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
 */
function waitForTarget(filter) {
  filter = filter || (target => true);
  for (const target of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targets()) {
    if (filter(target)) {
      return Promise.resolve(target);
    }
  }
  return new Promise(fulfill => {
    const observer = /** @type {!SDK.TargetManager.Observer} */ ({
      targetAdded: function(target) {
        if (filter(target)) {
          _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveTargets(observer);
          fulfill(target);
        }
      },
      targetRemoved: function() {},
    });
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(observer);
  });
}

/**
 * @param {!SDK.Target.Target} targetToRemove
 * @return {!Promise<!SDK.Target.Target>}
 */
function waitForTargetRemoved(targetToRemove) {
  return new Promise(fulfill => {
    const observer = /** @type {!SDK.TargetManager.Observer} */ ({
      targetRemoved: function(target) {
        if (target === targetToRemove) {
          _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveTargets(observer);
          fulfill(target);
        }
      },
      targetAdded: function() {},
    });
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeTargets(observer);
  });
}

/**
 * @param {!SDK.RuntimeModel.RuntimeModel} runtimeModel
 * @return {!Promise}
 */
function waitForExecutionContext(runtimeModel) {
  if (runtimeModel.executionContexts().length) {
    return Promise.resolve(runtimeModel.executionContexts()[0]);
  }
  return runtimeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.Events.ExecutionContextCreated);
}

/**
 * @param {!SDK.RuntimeModel.ExecutionContext} context
 * @return {!Promise}
 */
function waitForExecutionContextDestroyed(context) {
  const runtimeModel = context.runtimeModel;
  if (runtimeModel.executionContexts().indexOf(context) === -1) {
    return Promise.resolve();
  }
  return waitForEvent(
      _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.Events.ExecutionContextDestroyed, runtimeModel,
      destroyedContext => destroyedContext === context);
}

/**
 * @param {number} a
 * @param {number} b
 * @param {string=} message
 */
function assertGreaterOrEqual(a, b, message) {
  if (a < b) {
    addResult('FAILED: ' + (message ? message + ': ' : '') + a + ' < ' + b);
  }
}

let _pageLoadedCallback;

/**
 * @param {string} url
 * @param {function():void} callback
 */
function navigate(url, callback) {
  _pageLoadedCallback = safeWrap(callback);
  TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, _pageNavigated);
  // Note: injected <base> means that url is relative to test
  // and not the inspected page
  evaluateInPageAnonymously('window.location.replace(\'' + url + '\')');
}

/**
 * @return {!Promise}
 */
function navigatePromise(url) {
  return new Promise(fulfill => navigate(url, fulfill));
}

function _pageNavigated() {
  TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, _pageNavigated);
  _handlePageLoaded();
}

/**
 * @param {function():void} callback
 */
function hardReloadPage(callback) {
  _innerReloadPage(true, undefined, callback);
}

/**
 * @param {function():void} callback
 */
function reloadPage(callback) {
  _innerReloadPage(false, undefined, callback);
}

/**
 * @param {(string|undefined)} injectedScript
 * @param {function():void} callback
 */
function reloadPageWithInjectedScript(injectedScript, callback) {
  _innerReloadPage(false, injectedScript, callback);
}

/**
 * @return {!Promise}
 */
function reloadPagePromise() {
  return new Promise(fulfill => reloadPage(fulfill));
}

/**
 * @param {boolean} hardReload
 * @param {(string|undefined)} injectedScript
 * @param {function():void} callback
 */
function _innerReloadPage(hardReload, injectedScript, callback) {
  _pageLoadedCallback = safeWrap(callback);
  TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, pageLoaded);
  TestRunner.resourceTreeModel.reloadPage(hardReload, injectedScript);
}

function pageLoaded() {
  TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, pageLoaded);
  addResult('Page reloaded.');
  _handlePageLoaded();
}

async function _handlePageLoaded() {
  await waitForExecutionContext(/** @type {!SDK.RuntimeModel.RuntimeModel} */ (TestRunner.runtimeModel));
  if (_pageLoadedCallback) {
    const callback = _pageLoadedCallback;
    _pageLoadedCallback = undefined;
    callback();
  }
}

/**
 * @param {function():void} callback
 */
function waitForPageLoad(callback) {
  TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, onLoaded);

  function onLoaded() {
    TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load, onLoaded);
    callback();
  }
}

/**
 * @param {function():void} callback
 */
function runWhenPageLoads(callback) {
  const oldCallback = _pageLoadedCallback;
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
 */
function runTestSuite(testSuite) {
  const testSuiteTests = testSuite.slice();

  function runner() {
    if (!testSuiteTests.length) {
      completeTest();
      return;
    }
    const nextTest = testSuiteTests.shift();
    addResult('');
    addResult(
        'Running: ' +
        /function\s([^(]*)/.exec(nextTest)[1]);
    safeWrap(nextTest)(runner);
  }
  runner();
}

/**
 * @param {!Array<function():Promise<*>>} testSuite
 */
async function runAsyncTestSuite(testSuite) {
  for (const nextTest of testSuite) {
    addResult('');
    addResult(
        'Running: ' +
        /function\s([^(]*)/.exec(nextTest)[1]);
    await safeAsyncWrap(nextTest)();
  }

  completeTest();
}

/**
 * @param {*} expected
 * @param {*} found
 * @param {string} message
 */
function assertEquals(expected, found, message) {
  if (expected === found) {
    return;
  }

  let error;
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
 */
function assertTrue(found, message) {
  assertEquals(true, Boolean(found), message);
}

/**
 * @param {!Object} receiver
 * @param {string} methodName
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 * @return {!Function}
 */
function override(receiver, methodName, override, opt_sticky) {
  override = safeWrap(override);

  const original = receiver[methodName];
  if (typeof original !== 'function') {
    throw new Error('Cannot find method to override: ' + methodName);
  }

  receiver[methodName] = function(var_args) {
    try {
      return override.apply(this, arguments);
    } catch (e) {
      throw new Error('Exception in overriden method \'' + methodName + '\': ' + e);
    } finally {
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
 */
function clearSpecificInfoFromStackFrames(text) {
  let buffer = text.replace(/\(file:\/\/\/(?:[^)]+\)|[\w\/:-]+)/g, '(...)');
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
 */
function mainFrame() {
  return TestRunner.resourceTreeModel.mainFrame;
}

class StringOutputStream {
  /**
   * @param {function(string):void} callback
   */
  constructor(callback) {
    this.callback = callback;
    this.buffer = '';
  }

  /**
   * @param {string} fileName
   * @return {!Promise<boolean>}
   */
  async open(fileName) {
    return true;
  }

  /**
   * @param {string} chunk
   */
  async write(chunk) {
    this.buffer += chunk;
  }

  async close() {
    this.callback(this.buffer);
  }
}

/**
 * @template V
 */
class MockSetting {
  /**
   * @param {V} value
   */
  constructor(value) {
    this.value = value;
  }

  /**
   * @return {V}
   */
  get() {
    return this.value;
  }

  /**
   * @param {V} value
   */
  set(value) {
    this.value = value;
  }
}

/**
 * @param {string} urlSuffix
 * @param {!Workspace.Workspace.projectTypes=} projectType
 * @return {!Promise}
 */
function waitForUISourceCode(urlSuffix, projectType) {
  /**
   * @param {!Workspace.UISourceCode.UISourceCode} uiSourceCode
   * @return {boolean}
   */
  function matches(uiSourceCode) {
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

  for (const uiSourceCode of _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().uiSourceCodes()) {
    if (urlSuffix && matches(uiSourceCode)) {
      return Promise.resolve(uiSourceCode);
    }
  }

  return waitForEvent(
      _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.Events.UISourceCodeAdded, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance(), matches);
}

/**
 * @param {!Function} callback
 */
function waitForUISourceCodeRemoved(callback) {
  _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance().once(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.Events.UISourceCodeRemoved).then(callback);
}

/**
 * @param {string=} url
 * @return {string}
 */
function url(url = '') {
  const testScriptURL = /** @type {string} */ (
      _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('inspected_test') || _core_root_root_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.Runtime.queryParam('test'));

  // This handles relative (e.g. "../file"), root (e.g. "/resource"),
  // absolute (e.g. "http://", "data:") and empty (e.g. "") paths
  return new URL(url, testScriptURL + '/../').href;
}

/**
 * @param {string} str
 * @param {string} mimeType
 * @return {!Promise.<undefined>}
 */
function dumpSyntaxHighlight(str, mimeType) {
  const node = document.createElement('span');
  node.textContent = str;
  return _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_6__.CodeHighlighter.highlightNode(node, mimeType).then(dumpSyntax);

  function dumpSyntax() {
    const node_parts = [];

    for (let i = 0; i < node.childNodes.length; i++) {
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
*/

/**
 *
 * @param {string} inputString
 * @param {string} searchString
 * @return {!Array.<number>}
 */
const findIndexesOfSubString = function(inputString, searchString) {
  const matches = [];
  let i = inputString.indexOf(searchString);
  while (i !== -1) {
    matches.push(i);
    i = inputString.indexOf(searchString, i + searchString.length);
  }
  return matches;
};

/**
 *
 * @param {string} inputString
 * @return {!Array.<number>}
 */
const findLineEndingIndexes = function(inputString) {
  const endings = findIndexesOfSubString(inputString, '\n');
  endings.push(inputString.length);
  return endings;
};

/**
 * @param {string} querySelector
 */
async function dumpInspectedPageElementText(querySelector) {
  const value = await evaluateInPageAsync(`document.querySelector('${querySelector}').innerText`);
  addResult(value);
}

/**
 * This method blocks until all currently queued live location update handlers are done.
 *
 * Creating and updating live locations causes the update handler of each live location
 * to run. These update handlers are potentially asynchronous and usually cause re-rendering or
 * UI updates. Web tests then check for these updates.
 * To give tests more control, waitForPendingLiveLocationUpdates returns a promise that resolves
 * once all currently-pending updates (at call time) are completed.
 */
async function waitForPendingLiveLocationUpdates() {
  await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().pendingLiveLocationChangesPromise();
  await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().pendingLiveLocationChangesPromise();
}

/** @type {!{logToStderr: function(), navigateSecondaryWindow: function(string), notifyDone: function()}|undefined} */
self.testRunner;

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

TestRunner.isScrolledToBottom = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.isScrolledToBottom;


/***/ })

}]);