"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_DebuggerPausedMessage_test_js"],{

/***/ "./panels/sources/DebuggerPausedMessage.test.js":
/*!******************************************************!*\
  !*** ./panels/sources/DebuggerPausedMessage.test.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.describeWithEnvironment)('DebuggerPausedMessage', () => {
    let debuggerWorkspaceBinding;
    let breakpointManager;
    let pausedMessage;
    beforeEach(() => {
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
        debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_2__.BreakpointManager.BreakpointManager.instance({
            forceNew: true,
            targetManager,
            workspace,
            debuggerWorkspaceBinding,
        });
        pausedMessage = new _sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.DebuggerPausedMessage();
    });
    function getPausedMessageFromDOM() {
        const mainElement = pausedMessage.element().shadowRoot?.querySelector('.status-main') ?? null;
        assert.instanceOf(mainElement, HTMLDivElement);
        const main = mainElement.textContent;
        assert.exists(main);
        const sub = pausedMessage.element().shadowRoot?.querySelector('.status-sub')?.textContent ?? undefined;
        return { main, sub };
    }
    describe('EventDetails pause', () => {
        const testCases = [
            {
                title: 'shows no sub message if aux data is missing',
                auxData: undefined,
                expectedSub: undefined,
            },
            {
                title: 'shows no sub message for unknown instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:somethingrandom123',
                },
                expectedSub: undefined,
            },
            {
                title: 'shows the fixed string for untranslated instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:setTimeout',
                },
                expectedSub: 'setTimeout',
            },
            {
                title: 'shows the translated string for translated instrumentation breakpoints',
                auxData: {
                    eventName: 'instrumentation:requestAnimationFrame',
                },
                expectedSub: 'Request Animation Frame',
            },
            {
                title: 'shows no sub message for unknown listener breakpoints',
                auxData: {
                    eventName: 'listener:somethingrandom123',
                },
                expectedSub: undefined,
            },
            {
                title: 'shows the "targetName" as a prefix for listener breakpoints',
                auxData: {
                    eventName: 'listener:loadstart',
                    targetName: 'xmlhttprequest',
                },
                expectedSub: 'xmlhttprequest.loadstart',
            },
            {
                title: 'shows the "targetName" as a prefix for "*" listener breakpoints',
                auxData: {
                    eventName: 'listener:pointerover',
                    targetName: 'something-random-123',
                },
                expectedSub: 'something-random-123.pointerover',
            },
            {
                title: 'extracts the hex code for WebGL errors',
                auxData: {
                    eventName: 'instrumentation:webglErrorFired',
                    webglErrorName: 'something 0x42 something',
                },
                expectedSub: 'WebGL Error Fired (0x42)',
            },
            {
                title: 'shows the WebGL error name',
                auxData: {
                    eventName: 'instrumentation:webglErrorFired',
                    webglErrorName: 'something went wrong',
                },
                expectedSub: 'WebGL Error Fired (something went wrong)',
            },
            {
                title: 'shows the CSP directive text for script blocked errors',
                auxData: {
                    eventName: 'instrumentation:scriptBlockedByCSP',
                    directiveText: 'script-src "self"',
                },
                expectedSub: 'Script blocked due to Content Security Policy directive: script-src "self"',
            },
        ];
        for (const { title, auxData, expectedSub } of testCases) {
            it(title, async () => {
                const details = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerPausedDetails(sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel), 
                /* callFrames */ [], "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */, auxData, /* breakpointIds */ []);
                await pausedMessage.render(details, debuggerWorkspaceBinding, breakpointManager);
                const { main, sub } = getPausedMessageFromDOM();
                assert.strictEqual(main, 'Paused on event listener');
                assert.strictEqual(sub, expectedSub);
            });
        }
    });
});
//# sourceMappingURL=DebuggerPausedMessage.test.js.map

/***/ })

}]);