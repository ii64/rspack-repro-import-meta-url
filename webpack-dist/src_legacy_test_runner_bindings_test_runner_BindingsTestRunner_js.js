"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_bindings_test_runner_BindingsTestRunner_js"],{

/***/ "./src/legacy_test_runner/bindings_test_runner/BindingsTestRunner.js":
/*!***************************************************************************!*\
  !*** ./src/legacy_test_runner/bindings_test_runner/BindingsTestRunner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GC: () => (/* binding */ GC),
/* harmony export */   attachFrame: () => (/* binding */ attachFrame),
/* harmony export */   attachShadowDOM: () => (/* binding */ attachShadowDOM),
/* harmony export */   cleanupURL: () => (/* binding */ cleanupURL),
/* harmony export */   createCSSLiveLocation: () => (/* binding */ createCSSLiveLocation),
/* harmony export */   createDebuggerLiveLocation: () => (/* binding */ createDebuggerLiveLocation),
/* harmony export */   detachFrame: () => (/* binding */ detachFrame),
/* harmony export */   detachShadowDOM: () => (/* binding */ detachShadowDOM),
/* harmony export */   dumpLocation: () => (/* binding */ dumpLocation),
/* harmony export */   dumpWorkspace: () => (/* binding */ dumpWorkspace),
/* harmony export */   navigateFrame: () => (/* binding */ navigateFrame),
/* harmony export */   waitForSourceMap: () => (/* binding */ waitForSourceMap),
/* harmony export */   waitForStyleSheetRemoved: () => (/* binding */ waitForStyleSheetRemoved)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./src/third_party/diff/diff.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */




const cleanupURL = function(url) {
  if (!url.startsWith('debugger://')) {
    return url;
  }

  return url.replace(/VM\d+/g, 'VM[XXX]');
};

const dumpWorkspace = function(previousSnapshot) {
  const uiSourceCodes = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance().uiSourceCodes().slice();
  let urls = uiSourceCodes.map(code => code.url());

  urls = urls.map(cleanupURL);

  urls.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.caseInsensetiveComparator);
  const isAdded = new Array(urls.length).fill(false);
  let removedLines = [];

  if (previousSnapshot) {
    const diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.DiffWrapper.lineDiff(previousSnapshot, urls);
    const removedEntries = diff.filter(entry => entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete).map(entry => entry[1]);
    removedLines = [].concat.apply([], removedEntries);
    let index = 0;

    for (const entry of diff) {
      if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete) {
        continue;
      }

      if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Equal) {
        index += entry[1].length;
        continue;
      }

      // eslint-disable-next-line no-unused-vars
      for (const line of entry[1]) {
        isAdded[index++] = true;
      }
    }
  }

  TestRunner.addResult(`Removed: ${removedLines.length} uiSourceCodes`);

  for (const url of removedLines) {
    TestRunner.addResult('[-] ' + url);
  }

  TestRunner.addResult(`Workspace: ${urls.length} uiSourceCodes.`);

  for (let i = 0; i < urls.length; ++i) {
    const url = urls[i];
    const prefix = (isAdded[i] ? '[+] ' : '    ');
    TestRunner.addResult(prefix + url);
  }

  return urls;
};

const attachFrame = function(frameId, url, evalSourceURL) {
  let evalSource = `(${attachFrame.toString()})('${frameId}', '${url}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAsync(evalSource);

  function attachFrame(frameId, url) {
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.id = frameId;
    document.body.appendChild(frame);
    return new Promise(x => {
      frame.onload = x;
    });
  }
};

const detachFrame = function(frameId, evalSourceURL) {
  let evalSource = `(${detachFrame.toString()})('${frameId}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function detachFrame(frameId) {
    const frame = document.getElementById(frameId);
    frame.remove();
  }
};

const navigateFrame = function(frameId, navigateURL, evalSourceURL) {
  let evalSource = `(${navigateFrame.toString()})('${frameId}', '${navigateURL}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAsync(evalSource);

  function navigateFrame(frameId, url) {
    const frame = document.getElementById(frameId);
    frame.src = url;
    return new Promise(x => {
      frame.onload = x;
    });
  }
};

const attachShadowDOM = function(id, templateSelector, evalSourceURL) {
  let evalSource = `(${createShadowDOM.toString()})('${id}', '${templateSelector}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function createShadowDOM(id, templateSelector) {
    const shadowHost = document.createElement('div');
    shadowHost.setAttribute('id', id);

    const shadowRoot = shadowHost.attachShadow({mode: 'open'});

    const t = document.querySelector(templateSelector);
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    document.body.appendChild(shadowHost);
  }
};

const detachShadowDOM = function(id, evalSourceURL) {
  let evalSource = `(${removeShadowDOM.toString()})('${id}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function removeShadowDOM(id) {
    document.querySelector('#' + id).remove();
  }
};

const waitForStyleSheetRemoved = function(urlSuffix) {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  TestRunner.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
  return promise;

  function onStyleSheetRemoved(event) {
    const styleSheetHeader = event.data;

    if (!styleSheetHeader.resourceURL().endsWith(urlSuffix)) {
      return;
    }

    TestRunner.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
    fulfill();
  }
};

TestRunner.addSniffer(
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CompilerScriptMapping.CompilerScriptMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
TestRunner.addSniffer(
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.SASSSourceMapping.SASSSourceMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
const sourceMapCallbacks = new Map();

function onSourceMap(sourceMap) {
  for (const urlSuffix of sourceMapCallbacks.keys()) {
    if (sourceMap.url().endsWith(urlSuffix)) {
      const callback = sourceMapCallbacks.get(urlSuffix);
      callback.call(null);
      sourceMapCallbacks.delete(urlSuffix);
    }
  }
}

const waitForSourceMap = function(sourceMapURLSuffix) {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  sourceMapCallbacks.set(sourceMapURLSuffix, fulfill);
  return promise;
};

const locationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.LiveLocation.LiveLocationPool();
const nameSymbol = Symbol('LiveLocationNameForTest');
const createdSymbol = Symbol('LiveLocationCreated');

const createDebuggerLiveLocation = function(name, urlSuffix, lineNumber, columnNumber, dumpOnUpdate = true) {
  const script = TestRunner.debuggerModel.scripts().find(script => script.sourceURL.endsWith(urlSuffix));
  const rawLocation = TestRunner.debuggerModel.createRawLocation(script, lineNumber || 0, columnNumber || 0);
  return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createLiveLocation(
      rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};

const createCSSLiveLocation = function(name, urlSuffix, lineNumber, columnNumber, dumpOnUpdate = true) {
  const header = TestRunner.cssModel.styleSheetHeaders().find(header => header.resourceURL().endsWith(urlSuffix));
  const rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSLocation(header, lineNumber || 0, columnNumber || 0);
  return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().createLiveLocation(
      rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};

async function updateDelegate(name, dumpOnUpdate, liveLocation) {
  liveLocation[nameSymbol] = name;
  const hint = (liveLocation[createdSymbol] ? '[ UPDATE ]' : '[ CREATE ]');
  liveLocation[createdSymbol] = true;
  if (dumpOnUpdate) {
    await dumpLocation(liveLocation, hint);
  }
}

const dumpLocation = async function(liveLocation, hint) {
  hint = hint || '[  GET   ]';
  const prefix = `${hint}  LiveLocation-${liveLocation[nameSymbol]}: `;
  const uiLocation = await liveLocation.uiLocation();

  if (!uiLocation) {
    TestRunner.addResult(prefix + 'null');
    return;
  }

  TestRunner.addResult(
      prefix + cleanupURL(uiLocation.uiSourceCode.url()) + ':' + uiLocation.lineNumber + ':' + uiLocation.columnNumber);
};

const GC = async () => {
  await TestRunner.evaluateInPageAsync(`new Promise(resolve =>
    GCController.asyncCollectAll(resolve))`);
};


/***/ })

}]);