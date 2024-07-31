(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_layers_test_runner_layers_test_runner_js"],{

/***/ "./src/panels/layers/layers.ts":
/*!*************************************!*\
  !*** ./src/panels/layers/layers.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerPaintProfilerView: () => (/* reexport module object */ _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LayerTreeModel: () => (/* reexport module object */ _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LayersPanel: () => (/* reexport module object */ _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./src/panels/layers/LayerPaintProfilerView.ts");
/* harmony import */ var _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayersPanel.js */ "./src/panels/layers/LayersPanel.ts");
/* harmony import */ var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./src/panels/layers/LayerTreeModel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ }),

/***/ "./src/legacy_test_runner/layers_test_runner/layers_test_runner.js":
/*!*************************************************************************!*\
  !*** ./src/legacy_test_runner/layers_test_runner/layers_test_runner.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayersTestRunner: () => (/* binding */ LayersTestRunner)
/* harmony export */ });
/* harmony import */ var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./src/panels/elements/elements.ts");
/* harmony import */ var _panels_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/layer_viewer/layer_viewer.js */ "./src/panels/layer_viewer/layer_viewer.ts");
/* harmony import */ var _panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/layers/layers.js */ "./src/panels/layers/layers.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */
const LayersTestRunner = {};

LayersTestRunner.layerTreeModel = function() {
  if (!LayersTestRunner.layerTreeModelInternal) {
    LayersTestRunner.layerTreeModelInternal = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.mainTarget.model(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.LayerTreeModel);
  }

  return LayersTestRunner.layerTreeModelInternal;
};

LayersTestRunner.labelForLayer = function(layer) {
  const node = layer.nodeForSelfOrAncestor();
  let label = (node ? _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_0__.DOMPath.fullQualifiedSelector(node, false) : '<invalid node id>');
  const height = layer.height();
  const width = layer.width();

  if (height <= 200 && width <= 200) {
    label += ' ' + height + 'x' + width;
  }

  if (typeof layer.__extraData !== 'undefined') {
    label += ' (' + layer.__extraData + ')';
  }

  return label;
};

LayersTestRunner.dumpLayerTree = function(prefix, root) {
  if (!prefix) {
    prefix = '';
  }

  if (!root) {
    root = LayersTestRunner.layerTreeModel().layerTree().contentRoot();

    if (!root) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('No layer root, perhaps not in the composited mode! ');
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.completeTest();
      return;
    }
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(prefix + LayersTestRunner.labelForLayer(root));
  root.children().forEach(LayersTestRunner.dumpLayerTree.bind(LayersTestRunner, prefix + '    '));
};

LayersTestRunner.dumpLayers3DView = function(prefix, root) {
  if (!prefix) {
    prefix = '';
  }

  if (!root) {
    root = _panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayersPanel.LayersPanel.instance().layers3DView.rotatingContainerElement;
  }

  if (root._layer) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(prefix + LayersTestRunner.labelForLayer(root._layer));
  }

  for (let element = root.firstElementChild; element; element = element.nextSibling) {
    LayersTestRunner.dumpLayers3DView(prefix + '    ', element);
  }
};

LayersTestRunner.evaluateAndWaitForTreeChange = async function(expression) {
  await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.evaluateInPageAnonymously(expression);
  return LayersTestRunner.layerTreeModel().once(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.Events.LayerTreeChanged);
};

LayersTestRunner.findLayerByNodeIdAttribute = function(nodeIdAttribute) {
  let result;

  function testLayer(layer) {
    const node = layer.node();

    if (!node) {
      return false;
    }

    if (!node || node.getAttribute('id') !== nodeIdAttribute) {
      return false;
    }

    result = layer;
    return true;
  }

  LayersTestRunner.layerTreeModel().layerTree().forEachLayer(testLayer);

  if (!result) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('ERROR: No layer for ' + nodeIdAttribute);
  }

  return result;
};

LayersTestRunner.requestLayers = function() {
  LayersTestRunner.layerTreeModel().enable();
  return LayersTestRunner.layerTreeModel().once(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.Events.LayerTreeChanged);
};

LayersTestRunner.dispatchMouseEvent = function(eventType, button, element, offsetX, offsetY) {
  const totalOffset = element.getBoundingClientRect();

  const eventArguments = {
    bubbles: true,
    cancelable: true,
    view: window,
    screenX: totalOffset.left - element.scrollLeft + offsetX,
    screenY: totalOffset.top - element.scrollTop + offsetY,
    clientX: totalOffset.left + offsetX,
    clientY: totalOffset.top + offsetY,
    button: button,
    composed: true
  };

  if (eventType === 'mouseout') {
    eventArguments.screenX = 0;
    eventArguments.screenY = 0;
    eventArguments.clientX = 0;
    eventArguments.clientY = 0;
  }

  element.dispatchEvent(new MouseEvent(eventType, eventArguments));
};

LayersTestRunner.findLayerTreeElement = function(layer) {
  const element = _panels_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_1__.LayerTreeOutline.layerToTreeElement.get(layer);
  element.reveal();
  return element.listItemElement;
};

LayersTestRunner.dispatchMouseEventToLayerTree = function(eventType, button, layer) {
  const element = LayersTestRunner.findLayerTreeElement(layer);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.assertTrue(Boolean(element));
  LayersTestRunner.dispatchMouseEvent(eventType, button, element, element.clientWidth >> 1, element.clientHeight >> 1);
};

LayersTestRunner.dumpSelectedStyles = function(message, element) {
  const classes = [];
  if (element.classList.contains('selected')) {
    classes.push('selected');
  }
  if (element.classList.contains('hovered')) {
    classes.push('hovered');
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(message + ': ' + classes.join(', '));
};


/***/ }),

/***/ "./src/legacy_test_runner/test_runner/test_runner.js":
/*!***********************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/test_runner.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestRunner: () => (/* binding */ globalTestRunner),
/* harmony export */   _TestObserver: () => (/* binding */ _TestObserver),
/* harmony export */   _executeTestScript: () => (/* binding */ _executeTestScript)
/* harmony export */ });
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _TestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TestRunner.js */ "./src/legacy_test_runner/test_runner/TestRunner.js");
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
    self.test = async function() {
      await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
    };
    return;
  }

  try {
    await __webpack_require__("./src/legacy_test_runner/test_runner lazy recursive")(testScriptURL);
  } catch (err) {
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



/***/ }),

/***/ "./src/legacy_test_runner/test_runner lazy recursive":
/*!*******************************************************************!*\
  !*** ./src/legacy_test_runner/test_runner/ lazy namespace object ***!
  \*******************************************************************/
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
webpackEmptyAsyncContext.id = "./src/legacy_test_runner/test_runner lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ })

}]);