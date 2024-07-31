"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_sources_test_runner_DebuggerTestRunner_js"],{

/***/ "./src/panels/browser_debugger/CSPViolationBreakpointsSidebarPane.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/browser_debugger/CSPViolationBreakpointsSidebarPane.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSPViolationBreakpointsSidebarPane: () => (/* binding */ CSPViolationBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class CSPViolationBreakpointsSidebarPane extends _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__.CategorizedBreakpointsSidebarPane {
    constructor() {
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
        super(breakpoints, 'sources.csp-violation-breakpoints', _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Debugger.PausedEventReason.CSPViolation);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.section('sources.csp-violation-breakpoints')}`);
    }
    getBreakpointFromPausedDetails(details) {
        const breakpointType = details.auxData && details.auxData['violationType'] ? details.auxData['violationType'] : '';
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
        const breakpoint = breakpoints.find(x => x.type() === breakpointType);
        return breakpoint ? breakpoint : null;
    }
    toggleBreakpoint(breakpoint, enabled) {
        breakpoint.setEnabled(enabled);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().updateCSPViolationBreakpoints();
    }
}


/***/ }),

/***/ "./src/panels/browser_debugger/EventListenerBreakpointsSidebarPane.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/browser_debugger/EventListenerBreakpointsSidebarPane.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenerBreakpointsSidebarPane: () => (/* binding */ EventListenerBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




let eventListenerBreakpointsSidebarPaneInstance;
class EventListenerBreakpointsSidebarPane extends _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__.CategorizedBreakpointsSidebarPane {
    constructor() {
        let breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().eventListenerBreakpoints();
        const nonDomBreakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().eventListenerBreakpoints();
        breakpoints = breakpoints.concat(nonDomBreakpoints);
        super(breakpoints, 'sources.event-listener-breakpoints', _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Debugger.PausedEventReason.EventListener);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.section('sources.event-listener-breakpoints')}`);
    }
    static instance() {
        if (!eventListenerBreakpointsSidebarPaneInstance) {
            eventListenerBreakpointsSidebarPaneInstance = new EventListenerBreakpointsSidebarPane();
        }
        return eventListenerBreakpointsSidebarPaneInstance;
    }
    getBreakpointFromPausedDetails(details) {
        const auxData = details.auxData;
        const domBreakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(auxData);
        if (domBreakpoint) {
            return domBreakpoint;
        }
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(auxData);
    }
}


/***/ }),

/***/ "./src/panels/browser_debugger/ObjectEventListenersSidebarPane.ts":
/*!************************************************************************!*\
  !*** ./src/panels/browser_debugger/ObjectEventListenersSidebarPane.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ObjectEventListenersSidebarPane: () => (/* binding */ ObjectEventListenersSidebarPane),
/* harmony export */   objectGroupName: () => (/* binding */ objectGroupName)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event_listeners/event_listeners.js */ "./src/panels/event_listeners/event_listeners.ts");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ObjectEventListenersSidebarPane_lastRequestedContext;




class ObjectEventListenersSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super();
        _ObjectEventListenersSidebarPane_lastRequestedContext.set(this, void 0);
        // TODO(bmeurer): This is only public for web tests.
        Object.defineProperty(this, "eventListenersView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.section('sources.global-listeners')}`);
        this.eventListenersView = new _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_3__.EventListenersView.EventListenersView(this.update.bind(this), /* enableDefaultTreeFocus */ true);
        this.eventListenersView.show(this.element);
        this.setDefaultFocusedChild(this.eventListenersView);
        this.update();
    }
    toolbarItems() {
        return [_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Toolbar.createActionButtonForId('browser-debugger.refresh-global-event-listeners')];
    }
    async doUpdate() {
        if (__classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f")) {
            __classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f").runtimeModel.releaseObjectGroup(objectGroupName);
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, undefined, "f");
        }
        const windowObjects = [];
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
        if (executionContext) {
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, executionContext, "f");
            const result = await executionContext.evaluate({
                expression: 'self',
                objectGroup: objectGroupName,
                includeCommandLineAPI: false,
                silent: true,
                returnByValue: false,
                generatePreview: false,
            }, 
            /* userGesture */ false, 
            /* awaitPromise */ false);
            if (!('error' in result) && !result.exceptionDetails) {
                windowObjects.push(result.object);
            }
        }
        await this.eventListenersView.addObjects(windowObjects);
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, this.update, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().setFlavor(ObjectEventListenersSidebarPane, this);
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().setFlavor(ObjectEventListenersSidebarPane, null);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, this.update, this);
        super.willHide();
        if (__classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f")) {
            __classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f").runtimeModel.releaseObjectGroup(objectGroupName);
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, undefined, "f");
        }
    }
}
_ObjectEventListenersSidebarPane_lastRequestedContext = new WeakMap();
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'browser-debugger.refresh-global-event-listeners': {
                const eventListenersSidebarPane = context.flavor(ObjectEventListenersSidebarPane);
                if (eventListenersSidebarPane) {
                    eventListenersSidebarPane.update();
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
const objectGroupName = 'object-event-listeners-sidebar-pane';


/***/ }),

/***/ "./src/panels/browser_debugger/browser_debugger.ts":
/*!*********************************************************!*\
  !*** ./src/panels/browser_debugger/browser_debugger.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSPViolationBreakpointsSidebarPane: () => (/* reexport module object */ _CSPViolationBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   DOMBreakpointsSidebarPane: () => (/* reexport module object */ _DOMBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   EventListenerBreakpointsSidebarPane: () => (/* reexport module object */ _EventListenerBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ObjectEventListenersSidebarPane: () => (/* reexport module object */ _ObjectEventListenersSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   XHRBreakpointsSidebarPane: () => (/* reexport module object */ _XHRBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_4__)
/* harmony export */ });
/* harmony import */ var _CSPViolationBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSPViolationBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/CSPViolationBreakpointsSidebarPane.ts");
/* harmony import */ var _DOMBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/DOMBreakpointsSidebarPane.ts");
/* harmony import */ var _EventListenerBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventListenerBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/EventListenerBreakpointsSidebarPane.ts");
/* harmony import */ var _ObjectEventListenersSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectEventListenersSidebarPane.js */ "./src/panels/browser_debugger/ObjectEventListenersSidebarPane.ts");
/* harmony import */ var _XHRBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XHRBreakpointsSidebarPane.js */ "./src/panels/browser_debugger/XHRBreakpointsSidebarPane.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/***/ }),

/***/ "./src/panels/event_listeners/event_listeners.ts":
/*!*******************************************************!*\
  !*** ./src/panels/event_listeners/event_listeners.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenersUtils: () => (/* reexport module object */ _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   EventListenersView: () => (/* reexport module object */ _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./src/panels/event_listeners/EventListenersUtils.ts");
/* harmony import */ var _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenersView.js */ "./src/panels/event_listeners/EventListenersView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ }),

/***/ "./src/legacy_test_runner/sources_test_runner/DebuggerTestRunner.js":
/*!**************************************************************************!*\
  !*** ./src/legacy_test_runner/sources_test_runner/DebuggerTestRunner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureStackTrace: () => (/* binding */ captureStackTrace),
/* harmony export */   captureStackTraceIntoString: () => (/* binding */ captureStackTraceIntoString),
/* harmony export */   checkRawLocation: () => (/* binding */ checkRawLocation),
/* harmony export */   checkUILocation: () => (/* binding */ checkUILocation),
/* harmony export */   completeDebuggerTest: () => (/* binding */ completeDebuggerTest),
/* harmony export */   createNewBreakpoint: () => (/* binding */ createNewBreakpoint),
/* harmony export */   debuggerPlugin: () => (/* binding */ debuggerPlugin),
/* harmony export */   dumpScopeVariablesSidebarPane: () => (/* binding */ dumpScopeVariablesSidebarPane),
/* harmony export */   dumpSectionsWithIndent: () => (/* binding */ dumpSectionsWithIndent),
/* harmony export */   dumpSourceFrameContents: () => (/* binding */ dumpSourceFrameContents),
/* harmony export */   evaluateOnCurrentCallFrame: () => (/* binding */ evaluateOnCurrentCallFrame),
/* harmony export */   expandProperties: () => (/* binding */ expandProperties),
/* harmony export */   expandProperty: () => (/* binding */ expandProperty),
/* harmony export */   expandScopeVariablesSidebarPane: () => (/* binding */ expandScopeVariablesSidebarPane),
/* harmony export */   findChildPropertyTreeElement: () => (/* binding */ findChildPropertyTreeElement),
/* harmony export */   pausedScript: () => (/* binding */ pausedScript),
/* harmony export */   queryScripts: () => (/* binding */ queryScripts),
/* harmony export */   removeBreakpoint: () => (/* binding */ removeBreakpoint),
/* harmony export */   resumeExecution: () => (/* binding */ resumeExecution),
/* harmony export */   resumedScript: () => (/* binding */ resumedScript),
/* harmony export */   runAsyncCallStacksTest: () => (/* binding */ runAsyncCallStacksTest),
/* harmony export */   runDebuggerTestSuite: () => (/* binding */ runDebuggerTestSuite),
/* harmony export */   runTestFunction: () => (/* binding */ runTestFunction),
/* harmony export */   runTestFunctionAndWaitUntilPaused: () => (/* binding */ runTestFunctionAndWaitUntilPaused),
/* harmony export */   runTestFunctionAndWaitUntilPausedPromise: () => (/* binding */ runTestFunctionAndWaitUntilPausedPromise),
/* harmony export */   scopeChainSections: () => (/* binding */ scopeChainSections),
/* harmony export */   selectThread: () => (/* binding */ selectThread),
/* harmony export */   setBreakpoint: () => (/* binding */ setBreakpoint),
/* harmony export */   setEventListenerBreakpoint: () => (/* binding */ setEventListenerBreakpoint),
/* harmony export */   setQuiet: () => (/* binding */ setQuiet),
/* harmony export */   showScriptSource: () => (/* binding */ showScriptSource),
/* harmony export */   showScriptSourcePromise: () => (/* binding */ showScriptSourcePromise),
/* harmony export */   showUISourceCode: () => (/* binding */ showUISourceCode),
/* harmony export */   showUISourceCodePromise: () => (/* binding */ showUISourceCodePromise),
/* harmony export */   startDebuggerTest: () => (/* binding */ startDebuggerTest),
/* harmony export */   startDebuggerTestPromise: () => (/* binding */ startDebuggerTestPromise),
/* harmony export */   stepInto: () => (/* binding */ stepInto),
/* harmony export */   stepIntoAsync: () => (/* binding */ stepIntoAsync),
/* harmony export */   stepOut: () => (/* binding */ stepOut),
/* harmony export */   stepOver: () => (/* binding */ stepOver),
/* harmony export */   toggleBreakpoint: () => (/* binding */ toggleBreakpoint),
/* harmony export */   togglePause: () => (/* binding */ togglePause),
/* harmony export */   waitForExecutionContextInTarget: () => (/* binding */ waitForExecutionContextInTarget),
/* harmony export */   waitForScriptSource: () => (/* binding */ waitForScriptSource),
/* harmony export */   waitUntilPaused: () => (/* binding */ waitUntilPaused),
/* harmony export */   waitUntilPausedAndDumpStackAndResume: () => (/* binding */ waitUntilPausedAndDumpStackAndResume),
/* harmony export */   waitUntilPausedAndPerformSteppingActions: () => (/* binding */ waitUntilPausedAndPerformSteppingActions),
/* harmony export */   waitUntilPausedNextTime: () => (/* binding */ waitUntilPausedNextTime),
/* harmony export */   waitUntilPausedPromise: () => (/* binding */ waitUntilPausedPromise),
/* harmony export */   waitUntilResumed: () => (/* binding */ waitUntilResumed),
/* harmony export */   waitUntilResumedPromise: () => (/* binding */ waitUntilResumedPromise)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _panels_browser_debugger_browser_debugger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/browser_debugger/browser_debugger.js */ "./src/panels/browser_debugger/browser_debugger.ts");
/* harmony import */ var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./src/panels/sources/sources.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */










let quiet;

const startDebuggerTest = async function(callback, q) {
  console.assert(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.debuggerEnabled(), 'Debugger has to be enabled');

  if (q !== undefined) {
    quiet = q;
  }

  await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.showPanel('sources');
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel.prototype, 'pausedScript', pausedScript, true);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel.prototype, 'resumedScript', resumedScript, true);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback)();
};

const startDebuggerTestPromise = function(quiet) {
  let cb;
  const p = new Promise(fullfill => {
    cb = fullfill;
  });
  startDebuggerTest(cb, quiet);
  return p;
};

const completeDebuggerTest = function() {
  _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('breakpoints-active').set(true);
  resumeExecution(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.completeTest.bind(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner));
};

window.addEventListener('unhandledrejection', e => {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('FAIL: Uncaught exception in promise: ' + e + ' ' + e.stack);
  completeDebuggerTest();
});

const runDebuggerTestSuite = function(testSuite) {
  const testSuiteTests = testSuite.slice();

  function runner() {
    if (!testSuiteTests.length) {
      completeDebuggerTest();
      return;
    }

    const nextTest = testSuiteTests.shift();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(
        'Running: ' +
        /function\s([^(]*)/.exec(nextTest)[1]);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(nextTest)(runner, runner);
  }

  startDebuggerTest(runner);
};

const runTestFunction = function() {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.evaluateInPageAnonymously('scheduleTestFunction()');
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Set timer for test function.');
};

const runTestFunctionAndWaitUntilPaused = function(callback) {
  runTestFunction();
  waitUntilPaused(callback);
};

const runTestFunctionAndWaitUntilPausedPromise = function() {
  return new Promise(runTestFunctionAndWaitUntilPaused);
};

const runAsyncCallStacksTest = function(totalDebuggerStatements, maxAsyncCallStackDepth) {
  const defaultMaxAsyncCallStackDepth = 32;
  setQuiet(true);
  startDebuggerTest(step1);

  async function step1() {
    await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.DebuggerAgent.setAsyncCallStackDepth(maxAsyncCallStackDepth || defaultMaxAsyncCallStackDepth);
    runTestFunctionAndWaitUntilPaused(didPause);
  }

  let step = 0;
  const callStacksOutput = [];

  async function didPause(callFrames, reason, breakpointIds, asyncStackTrace) {
    ++step;
    callStacksOutput.push(await captureStackTraceIntoString(callFrames, asyncStackTrace) + '\n');

    if (step < totalDebuggerStatements) {
      resumeExecution(waitUntilPaused.bind(undefined, didPause));
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Captured call stacks in no particular order:');
      callStacksOutput.sort();
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResults(callStacksOutput);
      completeDebuggerTest();
    }
  }
};

let waitUntilPausedCallback;
let waitUntilResumedCallback;
let pausedScriptArguments;

const waitUntilPausedNextTime = function(callback) {
  waitUntilPausedCallback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
};

const waitUntilPaused = function(callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);

  if (pausedScriptArguments) {
    callback.apply(callback, pausedScriptArguments);
  } else {
    waitUntilPausedCallback = callback;
  }
};

const waitUntilPausedPromise = function() {
  return new Promise(resolve => waitUntilPaused(resolve));
};

const waitUntilResumed = function(callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);

  if (!pausedScriptArguments) {
    callback();
  } else {
    waitUntilResumedCallback = callback;
  }
};

const waitUntilResumedPromise = function() {
  return new Promise(resolve => waitUntilResumed(resolve));
};

const resumeExecution = function(callback) {
  if (_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().paused()) {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().togglePause();
  }

  waitUntilResumed(callback);
};

const waitUntilPausedAndDumpStackAndResume = function(callback, options) {
  waitUntilPaused(paused);
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(
      _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.prototype, 'updateDebuggerButtonsAndStatusForTest', setStatus);
  let caption;
  let callFrames;
  let asyncStackTrace;

  function setStatus() {
    const statusElement = this.element.querySelector('.paused-message');
    caption = statusElement.deepTextContent();

    if (callFrames) {
      step1();
    }
  }

  async function paused(frames, reason, breakpointIds, async) {
    callFrames = frames;
    asyncStackTrace = async;

    if (typeof caption === 'string') {
      await step1();
    }
  }

  async function step1() {
    await captureStackTrace(callFrames, asyncStackTrace, options);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.clearSpecificInfoFromStackFrames(caption));
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(step2);
  }

  function step2() {
    resumeExecution(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback));
  }
};

const stepOver = function() {
  queueMicrotask(function() {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepOver();
  });
};

const stepInto = function() {
  queueMicrotask(function() {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepInto();
  });
};

const stepIntoAsync = function() {
  queueMicrotask(function() {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepIntoAsync();
  });
};

const stepOut = function() {
  queueMicrotask(function() {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().stepOut();
  });
};

const togglePause = function() {
  queueMicrotask(function() {
    _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance().togglePause();
  });
};

const waitUntilPausedAndPerformSteppingActions = function(actions, callback) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback);
  waitUntilPaused(didPause);

  async function didPause(callFrames, reason, breakpointIds, asyncStackTrace) {
    let action = actions.shift();

    if (action === 'Print') {
      await captureStackTrace(callFrames, asyncStackTrace);
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('');

      while (action === 'Print') {
        action = actions.shift();
      }
    }

    if (!action) {
      callback();
      return;
    }

    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Executing ' + action + '...');

    switch (action) {
      case 'StepInto':
        stepInto();
        break;
      case 'StepOver':
        stepOver();
        break;
      case 'StepOut':
        stepOut();
        break;
      case 'Resume':
        togglePause();
        break;
      default:
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('FAIL: Unknown action: ' + action);
        callback();
        return;
    }

    waitUntilResumed((actions.length ? waitUntilPaused.bind(undefined, didPause) : callback));
  }
};

const captureStackTrace = async function(callFrames, asyncStackTrace, options) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(await captureStackTraceIntoString(callFrames, asyncStackTrace, options));
};

const captureStackTraceIntoString = async function(callFrames, asyncStackTrace, options) {
  const results = [];
  options = options || {};

  async function printCallFrames(callFrames, locationFunction, returnValueFunction) {
    let printed = 0;

    for (let i = 0; i < callFrames.length; i++) {
      const frame = callFrames[i];
      const location = locationFunction.call(frame);
      const script = location.script();
      const uiLocation =
          await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(location);
      const isFramework = uiLocation ?
          _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(uiLocation.uiSourceCode.url()) :
          false;

      if (options.dropFrameworkCallFrames && isFramework) {
        continue;
      }

      let url;
      let lineNumber;

      if (uiLocation && uiLocation.uiSourceCode.project().type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Debugger) {
        url = uiLocation.uiSourceCode.name();
        lineNumber = uiLocation.lineNumber + 1;
      } else {
        url = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceUtils.displayNameForURL(script.sourceURL);
        lineNumber = location.lineNumber + 1;
      }

      let s = ((isFramework ? '  * ' : '    ')) + printed++ + ') ' + frame.functionName + ' (' + url +
          ((options.dropLineNumbers ? '' : ':' + lineNumber)) + ')';
      s = s.replace(/scheduleTestFunction.+$/, 'scheduleTestFunction <omitted>');
      results.push(s);

      if (options.printReturnValue && returnValueFunction && returnValueFunction.call(frame)) {
        results.push('       <return>: ' + returnValueFunction.call(frame).description);
      }

      if (frame.functionName === 'scheduleTestFunction') {
        const remainingFrames = callFrames.length - 1 - i;

        if (remainingFrames) {
          results.push('    <... skipped remaining frames ...>');
        }

        break;
      }
    }

    return printed;
  }

  function runtimeCallFramePosition() {
    return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel, this.scriptId, this.lineNumber, this.columnNumber);
  }

  results.push('Call stack:');
  await printCallFrames(
      callFrames, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.prototype.location, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.prototype.returnValue);

  while (asyncStackTrace) {
    results.push('    [' + (asyncStackTrace.description || 'Async Call') + ']');
    const printed = await printCallFrames(asyncStackTrace.callFrames, runtimeCallFramePosition);

    if (!printed) {
      results.pop();
    }

    asyncStackTrace = asyncStackTrace.parent;
  }

  return results.join('\n');
};

const dumpSourceFrameContents = function(sourceFrame) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('==Source frame contents start==');
  const {baseDoc} = sourceFrame;

  for (let i = 1; i <= baseDoc.lines; ++i) {
    const {text} = baseDoc.line(i);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult(text);
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('==Source frame contents end==');
};

const pausedScript = function(callFrames, reason, auxData, breakpointIds, asyncStackTrace) {
  if (!quiet) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Script execution paused.');
  }

  const debuggerModel = this.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
  pausedScriptArguments = [
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame.fromPayloadArray(debuggerModel, callFrames), reason, breakpointIds, asyncStackTrace,
    auxData
  ];

  if (waitUntilPausedCallback) {
    const callback = waitUntilPausedCallback;
    waitUntilPausedCallback = null;
    setTimeout(() => callback.apply(callback, pausedScriptArguments));
  }
};

const resumedScript = function() {
  if (!quiet) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Script execution resumed.');
  }

  pausedScriptArguments = null;

  if (waitUntilResumedCallback) {
    const callback = waitUntilResumedCallback;
    waitUntilResumedCallback = null;
    callback();
  }
};

const showUISourceCode = function(uiSourceCode, callback) {
  const panel = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance();
  panel.showUISourceCode(uiSourceCode);
  const sourceFrame = panel.visibleView;

  if (sourceFrame.loaded) {
    callback(sourceFrame);
  } else {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(sourceFrame, 'setContent', callback && callback.bind(null, sourceFrame));
  }
};

const showUISourceCodePromise = function(uiSourceCode) {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  showUISourceCode(uiSourceCode, fulfill);
  return promise;
};

const showScriptSource = function(scriptName, callback) {
  waitForScriptSource(scriptName, onScriptSource);

  function onScriptSource(uiSourceCode) {
    showUISourceCode(uiSourceCode, callback);
  }
};

const showScriptSourcePromise = function(scriptName) {
  return new Promise(resolve => showScriptSource(scriptName, resolve));
};

const waitForScriptSource = function(scriptName, callback, contentType) {
  const panel = _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesPanel.SourcesPanel.instance();
  const uiSourceCodes = panel.workspace.uiSourceCodes();

  for (let i = 0; i < uiSourceCodes.length; ++i) {
    if (uiSourceCodes[i].project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.projectTypes.Service) {
      continue;
    }

    if (uiSourceCodes[i].name() === scriptName &&
        (uiSourceCodes[i].contentType() === contentType || contentType === undefined)) {
      callback(uiSourceCodes[i]);
      return;
    }
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(
      _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.SourcesView.prototype, 'addUISourceCode',
      waitForScriptSource.bind(undefined, scriptName, callback, contentType));
};

const setBreakpoint = async function(sourceFrame, lineNumber, condition, enabled) {
  const plugin = debuggerPlugin(sourceFrame);
  if (!plugin.muted) {
    const bp = await plugin.setBreakpoint(lineNumber, 0, condition, enabled);
    await bp.refreshInDebugger();  // Make sure the breakpoint is really set
  }
};

const removeBreakpoint = function(sourceFrame, lineNumber) {
  const plugin = debuggerPlugin(sourceFrame);
  const breakpointLocations = plugin.breakpointManager.allBreakpointLocations();
  const breakpointLocation = breakpointLocations.find(
      breakpointLocation => breakpointLocation.uiLocation.uiSourceCode === sourceFrame.uiSourceCode() &&
          breakpointLocation.uiLocation.lineNumber === lineNumber);
  breakpointLocation.breakpoint.remove();
};

const createNewBreakpoint = async function(sourceFrame, lineNumber, condition, enabled) {
  const plugin = debuggerPlugin(sourceFrame);
  const promise = new Promise(resolve => _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addSniffer(plugin.__proto__, 'breakpointWasSetForTest', resolve));
  await plugin.createNewBreakpoint(lineNumber, condition, enabled);
  return promise;
};

const toggleBreakpoint = async function(sourceFrame, lineNumber, disableOnly) {
  const plugin = debuggerPlugin(sourceFrame);
  if (!plugin.muted) {
    await plugin.toggleBreakpoint(lineNumber, disableOnly);
  }
};

const dumpScopeVariablesSidebarPane = function() {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Scope variables sidebar pane:');
  const sections = scopeChainSections();

  dumpSectionsWithIndent(sections, 0);
};

const dumpSectionsWithIndent = function(treeElements, depth) {
  if (!treeElements || treeElements.length === 0) {
    return;
  }

  for (const treeElement of treeElements) {
    const textContent = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.textContentWithLineBreaks(treeElement.listItemElement);
    const text = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.clearSpecificInfoFromStackFrames(textContent);
    if (text.length > 0) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('    '.repeat(depth) + text);
    }
    if (!treeElement.expanded && depth === 0) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('    <section collapsed>');
    }
    dumpSectionsWithIndent(treeElement.children(), depth + 1);
  }
};

const scopeChainSections = function() {
  return _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.ScopeChainSidebarPane.ScopeChainSidebarPane.instance().treeOutline.rootElement().children();
};

const expandScopeVariablesSidebarPane = function(callback) {
  const sections = scopeChainSections();

  for (let i = 0; i < sections.length - 1; ++i) {
    sections[i].expand();
  }

  setTimeout(() => {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
  }, 1000);
};

const expandProperties = function(properties, callback) {
  let index = 0;

  function expandNextPath() {
    if (index === properties.length) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.safeWrap(callback)();
      return;
    }

    const parentTreeElement = properties[index++];
    const path = properties[index++];
    expandProperty(parentTreeElement, path, 0, expandNextPath);
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(expandNextPath);
};

const expandProperty = function(parentTreeElement, path, pathIndex, callback) {
  if (pathIndex === path.length) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Expanded property: ' + path.join('.'));
    callback();
    return;
  }

  const name = path[pathIndex++];
  const propertyTreeElement = findChildPropertyTreeElement(parentTreeElement, name);

  if (!propertyTreeElement) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.addResult('Failed to expand property: ' + path.slice(0, pathIndex).join('.'));
    completeDebuggerTest();
    return;
  }

  propertyTreeElement.expand();
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedRunAfterPendingDispatches(
      expandProperty.bind(undefined, propertyTreeElement, path, pathIndex, callback));
};

const findChildPropertyTreeElement = function(parent, childName) {
  const children = parent.children();

  for (let i = 0; i < children.length; i++) {
    const treeElement = children[i];
    const property = treeElement.property;

    if (property.name === childName) {
      return treeElement;
    }
  }
};

const setQuiet = function(q) {
  quiet = q;
};

const queryScripts = function(filter) {
  const scripts = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.scripts();
  return (filter ? scripts.filter(filter) : scripts);
};

const checkRawLocation = function(script, lineNumber, columnNumber, location) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(script.scriptId, location.scriptId, 'Incorrect scriptId');
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(lineNumber, location.lineNumber, 'Incorrect lineNumber');
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(columnNumber, location.columnNumber, 'Incorrect columnNumber');
};

const checkUILocation = function(uiSourceCode, lineNumber, columnNumber, location) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(
      uiSourceCode, location.uiSourceCode,
      'Incorrect uiSourceCode, expected \'' + ((uiSourceCode ? uiSourceCode.url() : null)) + '\',' +
          ' but got \'' + ((location.uiSourceCode ? location.uiSourceCode.url() : null)) + '\'');

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(
      lineNumber, location.lineNumber,
      'Incorrect lineNumber, expected \'' + lineNumber + '\', but got \'' + location.lineNumber + '\'');

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.assertEquals(
      columnNumber, location.columnNumber,
      'Incorrect columnNumber, expected \'' + columnNumber + '\', but got \'' + location.columnNumber + '\'');
};

const waitForExecutionContextInTarget = function(target, callback) {
  const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);

  if (runtimeModel.executionContexts().length) {
    callback(runtimeModel.executionContexts()[0]);
    return;
  }

  runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextCreated, contextCreated);

  function contextCreated() {
    runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextCreated, contextCreated);
    callback(runtimeModel.executionContexts()[0]);
  }
};

const selectThread = function(target) {
  _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, target);
};

const evaluateOnCurrentCallFrame = function(code) {
  return _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.debuggerModel.evaluateOnSelectedCallFrame({expression: code, objectGroup: 'console'});
};

const debuggerPlugin = function(sourceFrame) {
  return sourceFrame.plugins.find(plugin => plugin instanceof _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPlugin.DebuggerPlugin);
};

const setEventListenerBreakpoint = function(id, enabled, targetName) {
  const pane = _panels_browser_debugger_browser_debugger_js__WEBPACK_IMPORTED_MODULE_4__.EventListenerBreakpointsSidebarPane.EventListenerBreakpointsSidebarPane.instance();

  const auxData = {'eventName': id};

  if (targetName) {
    auxData.targetName = targetName;
  }

  let breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(auxData);
  if (!breakpoint) {
    breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(auxData);
  }

  if (breakpoint.enabled() !== enabled) {
    pane.breakpoints.get(breakpoint).checkbox.checked = enabled;
    pane.breakpointCheckboxClicked(breakpoint);
  }
};

_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_7__.TestRunner.deprecatedInitAsync(`
  function scheduleTestFunction() {
    setTimeout(testFunction, 0);
  }
`);


/***/ })

}]);