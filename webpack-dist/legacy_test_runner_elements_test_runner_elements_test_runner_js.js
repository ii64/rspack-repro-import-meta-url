(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_elements_test_runner_elements_test_runner_js"],{

/***/ "./legacy_test_runner/elements_test_runner/EditDOMTestRunner.js":
/*!**********************************************************************!*\
  !*** ./legacy_test_runner/elements_test_runner/EditDOMTestRunner.js ***!
  \**********************************************************************/
/***/ (() => {

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.ElementsTestRunner = self.ElementsTestRunner || {};

ElementsTestRunner.doAddAttribute = function(testName, dataNodeId, attributeText, next) {
  ElementsTestRunner.domActionTestForNodeId(testName, dataNodeId, testBody, next);

  function testBody(node, done) {
    ElementsTestRunner.editNodePart(node, 'webkit-html-attribute');
    eventSender.keyDown('Tab');
    TestRunner.deprecatedRunAfterPendingDispatches(testContinuation);

    function testContinuation() {
      const editorElement =
          ElementsTestRunner.firstElementsTreeOutline().shadowRoot.getSelection().anchorNode.parentElement;
      editorElement.textContent = attributeText;
      editorElement.dispatchEvent(TestRunner.createKeyEvent('Enter'));
      TestRunner.addSniffer(Elements.ElementsTreeOutline.prototype, 'updateModifiedNodes', done);
    }
  }
};

ElementsTestRunner.domActionTestForNodeId = function(testName, dataNodeId, testBody, next) {
  function callback(testNode, continuation) {
    ElementsTestRunner.selectNodeWithId(dataNodeId, continuation);
  }

  ElementsTestRunner.domActionTest(testName, callback, testBody, next);
};

ElementsTestRunner.domActionTest = function(testName, dataNodeSelectionCallback, testBody, next) {
  const testNode = ElementsTestRunner.expandedNodeWithId(testName);
  TestRunner.addResult('==== before ====');
  ElementsTestRunner.dumpElementsTree(testNode);
  dataNodeSelectionCallback(testNode, step0);

  function step0(node) {
    TestRunner.deprecatedRunAfterPendingDispatches(step1.bind(null, node));
  }

  function step1(node) {
    testBody(node, step2);
  }

  function step2() {
    TestRunner.addResult('==== after ====');
    ElementsTestRunner.dumpElementsTree(testNode);
    next();
  }
};

ElementsTestRunner.editNodePart = function(node, className) {
  const treeElement = ElementsTestRunner.firstElementsTreeOutline().findTreeElement(node);
  let textElement = treeElement.listItemElement.getElementsByClassName(className)[0];

  if (!textElement && treeElement.childrenListElement) {
    textElement = treeElement.childrenListElement.getElementsByClassName(className)[0];
  }

  treeElement.startEditingTarget(textElement);
  return textElement;
};

ElementsTestRunner.editNodePartAndRun = function(node, className, newValue, step2, useSniffer) {
  const editorElement = ElementsTestRunner.editNodePart(node, className);
  editorElement.textContent = newValue;
  editorElement.dispatchEvent(TestRunner.createKeyEvent('Enter'));

  if (useSniffer) {
    TestRunner.addSniffer(Elements.ElementsTreeOutline.prototype, 'updateModifiedNodes', step2);
  } else {
    TestRunner.deprecatedRunAfterPendingDispatches(step2);
  }
};


/***/ }),

/***/ "./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js":
/*!****************************************************************************************************!*\
  !*** ./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js ***!
  \****************************************************************************************************/
/***/ (() => {

// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.ElementsTestRunner = self.ElementsTestRunner || {};

ElementsTestRunner.selectReloadAndDump = function(next, node) {
  ElementsTestRunner.selectNode(node).then(onSelected);
  let reloaded = false;
  let selected = false;

  function onSelected() {
    TestRunner.addSniffer(Elements.ElementsPanel.prototype, 'lastSelectedNodeSelectedForTest', onReSelected);
    TestRunner.reloadPage(onReloaded);
  }

  function onReloaded() {
    reloaded = true;
    maybeDumpSelectedNode();
  }

  function onReSelected() {
    selected = true;
    maybeDumpSelectedNode();
  }

  function maybeDumpSelectedNode() {
    if (!reloaded || !selected) {
      return;
    }
    const selectedElement = ElementsTestRunner.firstElementsTreeOutline().selectedTreeElement;
    const nodeName = (selectedElement ? selectedElement.node().nodeNameInCorrectCase() : 'null');
    TestRunner.addResult('Selected node: \'' + nodeName + '\'');
    next();
  }
};


/***/ }),

/***/ "./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js":
/*!***************************************************************************!*\
  !*** ./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.ElementsTestRunner = self.ElementsTestRunner || {};

ElementsTestRunner.events = [];
ElementsTestRunner.containerId;

ElementsTestRunner.setUpTestSuite = function(next) {
  ElementsTestRunner.expandElementsTree(step1);

  function step1() {
    ElementsTestRunner.selectNodeWithId('container', step2);
  }

  function step2(node) {
    ElementsTestRunner.containerId = node.id;
    TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId).then(step3);
  }

  function step3(text) {
    ElementsTestRunner.containerText = text;

    for (const key in _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events) {
      const eventName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events[key];

      if (eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.MarkersChanged || eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.DOMMutated) {
        continue;
      }

      TestRunner.domModel.addEventListener(
          eventName, ElementsTestRunner.recordEvent.bind(ElementsTestRunner, eventName));
    }

    next();
  }
};

ElementsTestRunner.recordEvent = function(eventName, event) {
  if (!event.data) {
    return;
  }

  const node = event.data.node || event.data;
  const parent = event.data.parent;

  for (let currentNode = parent || node; currentNode; currentNode = currentNode.parentNode) {
    if (currentNode.getAttribute('id') === 'output') {
      return;
    }
  }

  ElementsTestRunner.events.push('Event ' + eventName.toString() + ': ' + node.nodeName());
};

ElementsTestRunner.patchOuterHTML = function(pattern, replacement, next) {
  TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
  ElementsTestRunner.setOuterHTML(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};

ElementsTestRunner.patchOuterHTMLUseUndo = function(pattern, replacement, next) {
  TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
  ElementsTestRunner.setOuterHTMLUseUndo(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};

ElementsTestRunner.setOuterHTML = function(newText, next) {
  ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);

  function bringBack() {
    TestRunner.addResult('\nBringing things back\n');
    ElementsTestRunner.innerSetOuterHTML(ElementsTestRunner.containerText, true, next);
  }
};

ElementsTestRunner.setOuterHTMLUseUndo = function(newText, next) {
  ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);

  async function bringBack() {
    TestRunner.addResult('\nBringing things back\n');
    await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModelUndoStack.instance().undo();
    ElementsTestRunner._dumpOuterHTML(true, next);
  }
};

ElementsTestRunner.innerSetOuterHTML = async function(newText, last, next) {
  await TestRunner.DOMAgent.setOuterHTML(ElementsTestRunner.containerId, newText);
  TestRunner.domModel.markUndoableState();
  ElementsTestRunner._dumpOuterHTML(last, next);
};

ElementsTestRunner._dumpOuterHTML = async function(last, next) {
  const result = await TestRunner.RuntimeAgent.evaluate('document.getElementById("identity").wrapperIdentity');
  TestRunner.addResult('Wrapper identity: ' + result.value);
  ElementsTestRunner.events.sort();

  for (let i = 0; i < ElementsTestRunner.events.length; ++i) {
    TestRunner.addResult(ElementsTestRunner.events[i]);
  }

  ElementsTestRunner.events = [];
  const text = await TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId);
  TestRunner.addResult('==========8<==========');
  TestRunner.addResult(text);
  TestRunner.addResult('==========>8==========');

  if (last) {
    TestRunner.addResult('\n\n\n');
  }

  next();
};


/***/ }),

/***/ "./legacy_test_runner/elements_test_runner/StylesUpdateLinksTestRunner.js":
/*!********************************************************************************!*\
  !*** ./legacy_test_runner/elements_test_runner/StylesUpdateLinksTestRunner.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./panels/elements/elements.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
self.ElementsTestRunner = self.ElementsTestRunner || {};

function flattenRuleRanges(rule) {
  const ranges = [];
  const medias = rule.media || [];

  for (let i = 0; i < medias.length; ++i) {
    const media = medias[i];

    if (!media.range) {
      continue;
    }

    ranges.push({range: media.range, name: 'media #' + i});
  }

  for (let i = 0; i < rule.selectors.length; ++i) {
    const selector = rule.selectors[i];

    if (!selector.range) {
      continue;
    }

    ranges.push({range: selector.range, name: 'selector #' + i});
  }

  if (rule.style.range) {
    ranges.push({range: rule.style.range, name: 'style range'});
  }

  const properties = rule.style.allProperties();

  for (let i = 0; i < properties.length; ++i) {
    const property = properties[i];

    if (!property.range) {
      continue;
    }

    ranges.push({range: property.range, name: 'property >>' + property.text + '<<'});
  }

  return ranges;
}

function compareRuleRanges(lazyRule, originalRule) {
  if (lazyRule.selectorText !== originalRule.selectorText) {
    TestRunner.addResult(
        'Error: rule selectors are not equal: ' + lazyRule.selectorText + ' != ' + originalRule.selectorText);
    return false;
  }

  const flattenLazy = flattenRuleRanges(lazyRule);
  const flattenOriginal = flattenRuleRanges(originalRule);

  if (flattenLazy.length !== flattenOriginal.length) {
    TestRunner.addResult(
        'Error: rule range amount is not equal: ' + flattenLazy.length + ' != ' + flattenOriginal.length);
    return false;
  }

  for (let i = 0; i < flattenLazy.length; ++i) {
    const lazyRange = flattenLazy[i];
    const originalRange = flattenOriginal[i];

    if (lazyRange.name !== originalRange.name) {
      TestRunner.addResult('Error: rule names are not equal: ' + lazyRange.name + ' != ' + originalRange.name);
      return false;
    }

    if (!lazyRange.range.equal(originalRange.range)) {
      TestRunner.addResult(
          'Error: ranges \'' + lazyRange.name + '\' are not equal: ' + lazyRange.range.toString() +
          ' != ' + originalRange.range.toString());

      return false;
    }
  }

  TestRunner.addResult(flattenLazy.length + ' rule ranges are equal.');
  return true;
}

ElementsTestRunner.validateRuleRanges = function(selector, rules, callback) {
  ElementsTestRunner.selectNodeAndWaitForStyles('other', onOtherSelected);

  function onOtherSelected() {
    ElementsTestRunner.selectNodeAndWaitForStyles(selector, onContainerSelected);
  }

  function onContainerSelected() {
    const fetchedRules = ElementsTestRunner.getMatchedRules();

    if (fetchedRules.length !== rules.length) {
      TestRunner.addResult(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf(
          'Error: rules sizes are not equal! Expected: %d, actual: %d', fetchedRules.length, rules.length));
      TestRunner.completeTest();
      return;
    }

    for (let i = 0; i < fetchedRules.length; ++i) {
      if (!compareRuleRanges(rules[i], fetchedRules[i])) {
        TestRunner.completeTest();
        return;
      }
    }

    callback();
  }
};

ElementsTestRunner.getMatchedRules = function() {
  const rules = [];

  for (const block of _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_1__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks) {
    for (const section of block.sections) {
      const rule = section.style().parentRule;

      if (rule) {
        rules.push(rule);
      }
    }
  }

  return rules;
};


/***/ }),

/***/ "./legacy_test_runner/elements_test_runner/elements_test_runner.js":
/*!*************************************************************************!*\
  !*** ./legacy_test_runner/elements_test_runner/elements_test_runner.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsTestRunner: () => (/* binding */ ElementsTestRunner)
/* harmony export */ });
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */ var _ElementsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementsTestRunner.js */ "./legacy_test_runner/elements_test_runner/ElementsTestRunner.js");
/* harmony import */ var _EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditDOMTestRunner.js */ "./legacy_test_runner/elements_test_runner/EditDOMTestRunner.js");
/* harmony import */ var _EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SetOuterHTMLTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetOuterHTMLTestRunner.js */ "./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js");
/* harmony import */ var _ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementsPanelShadowSelectionOnRefreshTestRunner.js */ "./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js");
/* harmony import */ var _ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StylesUpdateLinksTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StylesUpdateLinksTestRunner.js */ "./legacy_test_runner/elements_test_runner/StylesUpdateLinksTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const {ElementsTestRunner} = self;



/***/ }),

/***/ "./legacy_test_runner/test_runner/test_runner.js":
/*!*******************************************************!*\
  !*** ./legacy_test_runner/test_runner/test_runner.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./legacy_test_runner/test_runner/TestRunner.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck This file is not checked by TypeScript as it has a lot of legacy code.




/**
 * @param {!SDK.Target.Target} target
 */
function _setupTestHelpers(target) {
    self.TestRunner.BrowserAgent = target.browserAgent();
    self.TestRunner.CSSAgent = target.cssAgent();
    self.TestRunner.DeviceOrientationAgent = target.deviceOrientationAgent();
    self.TestRunner.DOMAgent = target.domAgent();
    self.TestRunner.DOMDebuggerAgent = target.domdebuggerAgent();
    self.TestRunner.DebuggerAgent = target.debuggerAgent();
    self.TestRunner.EmulationAgent = target.emulationAgent();
    self.TestRunner.HeapProfilerAgent = target.heapProfilerAgent();
    self.TestRunner.InputAgent = target.inputAgent();
    self.TestRunner.InspectorAgent = target.inspectorAgent();
    self.TestRunner.NetworkAgent = target.networkAgent();
    self.TestRunner.OverlayAgent = target.overlayAgent();
    self.TestRunner.PageAgent = target.pageAgent();
    self.TestRunner.ProfilerAgent = target.profilerAgent();
    self.TestRunner.RuntimeAgent = target.runtimeAgent();
    self.TestRunner.TargetAgent = target.targetAgent();
    self.TestRunner.networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager);
    self.TestRunner.securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SecurityOriginManager.SecurityOriginManager);
    self.TestRunner.storageKeyManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
    self.TestRunner.resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
    self.TestRunner.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
    self.TestRunner.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
    self.TestRunner.domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
    self.TestRunner.domDebuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerModel);
    self.TestRunner.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel);
    self.TestRunner.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfilerModel.CPUProfilerModel);
    self.TestRunner.overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
    self.TestRunner.serviceWorkerManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerManager);
    self.TestRunner.tracingManager = target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__.TracingManager.TracingManager);
    self.TestRunner.mainTarget = target;
}
async function _executeTestScript() {
    const testScriptURL = /** @type {string} */ (_core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.Runtime.queryParam('test'));
    if (_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.isDebugTest()) {
        /* eslint-disable no-console */
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerResult(console.log);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.setInnerCompleteTest(() => console.log('Test completed'));
        /* eslint-enable no-console */
        // Auto-start unit tests
        self.test = async function () {
            await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
        };
        return;
    }
    try {
        await __webpack_require__("./legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    }
    catch (err) {
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('TEST ENDED EARLY DUE TO UNCAUGHT ERROR:');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult(err && err.stack || err);
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.addResult('=== DO NOT COMMIT THIS INTO -expected.txt ===');
        _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.completeTest();
    }
}
/** @type {boolean} */
let _startedTest = false;
/**
 * @implements {SDK.TargetManager.Observer}
 */
class _TestObserver {
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetAdded(target) {
        if (target.id() === 'main' && target.type() === 'frame' ||
            target.parentTarget()?.type() === 'tab' && target.type() === 'frame' && !target.targetInfo()?.subtype?.length) {
            _setupTestHelpers(target);
            if (_startedTest) {
                return;
            }
            _startedTest = true;
            _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.loadHTML(`
        <head>
          <base href="${_TestRunner_js__WEBPACK_IMPORTED_MODULE_3__.url()}">
        </head>
        <body>
        </body>
      `).then(() => _executeTestScript());
        }
    }
    /**
     * @param {!SDK.Target.Target} target
     * @override
     */
    targetRemoved(target) {
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeTargets(new _TestObserver());
const globalTestRunner = self.TestRunner;

//# sourceMappingURL=test_runner.js.map

/***/ }),

/***/ "./legacy_test_runner/test_runner lazy recursive":
/*!***************************************************************!*\
  !*** ./legacy_test_runner/test_runner/ lazy namespace object ***!
  \***************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);