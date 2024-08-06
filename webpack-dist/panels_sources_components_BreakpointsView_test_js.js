"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_components_BreakpointsView_test_js"],{

/***/ "./panels/sources/components/BreakpointsView.test.js":
/*!***********************************************************!*\
  !*** ./panels/sources/components/BreakpointsView.test.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/breakpoints/breakpoints.js */ "./models/breakpoints/breakpoints.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.js */ "./panels/sources/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const DETAILS_SELECTOR = 'details';
const EXPANDED_GROUPS_SELECTOR = 'details[open]';
const COLLAPSED_GROUPS_SELECTOR = 'details:not([open])';
const CODE_SNIPPET_SELECTOR = '.code-snippet';
const GROUP_NAME_SELECTOR = '.group-header-title';
const BREAKPOINT_ITEM_SELECTOR = '.breakpoint-item';
const HIT_BREAKPOINT_SELECTOR = BREAKPOINT_ITEM_SELECTOR + '.hit';
const BREAKPOINT_LOCATION_SELECTOR = '.location';
const REMOVE_FILE_BREAKPOINTS_SELECTOR = '.group-hover-actions > button[data-remove-breakpoint]';
const REMOVE_SINGLE_BREAKPOINT_SELECTOR = '.breakpoint-item-location-or-actions > button[data-remove-breakpoint]';
const EDIT_SINGLE_BREAKPOINT_SELECTOR = 'button[data-edit-breakpoint]';
const PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR = '.pause-on-uncaught-exceptions';
const PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR = '.pause-on-caught-exceptions';
const TABBABLE_SELECTOR = '[tabindex="0"]';
const SUMMARY_SELECTOR = 'summary';
const GROUP_DIFFERENTIATOR_SELECTOR = '.group-header-differentiator';
const HELLO_JS_FILE = 'hello.js';
const TEST_JS_FILE = 'test.js';
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_9__.RenderCoordinator.RenderCoordinator.instance();
function createBreakpointLocations(testData) {
    const breakpointLocations = testData.map(data => {
        const mocked = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.setupMockedUISourceCode)(data.url);
        const mockedContent = Promise.resolve({ content: data.content, isEncoded: true });
        sinon.stub(mocked.sut, 'requestContent').returns(mockedContent);
        const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation(mocked.sut, data.lineNumber, data.columnNumber);
        const breakpoint = sinon.createStubInstance(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.Breakpoint);
        breakpoint.enabled.returns(data.enabled);
        breakpoint.condition.returns(data.condition);
        breakpoint.isLogpoint.returns(data.isLogpoint);
        breakpoint.breakpointStorageId.returns(`${data.url}:${data.lineNumber}:${data.columnNumber}`);
        return new _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointLocation(breakpoint, uiLocation);
    });
    return breakpointLocations;
}
function createStubBreakpointManagerAndSettings() {
    const breakpointManager = sinon.createStubInstance(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager);
    breakpointManager.supportsConditionalBreakpoints.returns(true);
    const dummyStorage = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingsStorage({});
    const settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance({
        forceNew: true,
        syncedStorage: dummyStorage,
        globalStorage: dummyStorage,
        localStorage: dummyStorage,
    });
    return { breakpointManager, settings };
}
function createStubBreakpointManagerAndSettingsWithMockdata(testData) {
    const { breakpointManager, settings } = createStubBreakpointManagerAndSettings();
    sinon.stub(_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager, 'instance').returns(breakpointManager);
    const breakpointLocations = createBreakpointLocations(testData);
    breakpointManager.allBreakpointLocations.returns(breakpointLocations);
    return { breakpointManager, settings };
}
function createLocationTestData(url, lineNumber, columnNumber, enabled = true, content = '', condition = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION, isLogpoint = false, hoverText) {
    return {
        url: url,
        lineNumber,
        columnNumber,
        enabled,
        content,
        condition,
        isLogpoint,
        hoverText,
    };
}
async function setUpTestWithOneBreakpointLocation(params = {
    file: HELLO_JS_FILE,
    lineNumber: 10,
    columnNumber: 3,
    enabled: true,
    snippet: 'const a;',
}) {
    const testData = [
        createLocationTestData(params.file, params.lineNumber, params.columnNumber, params.enabled, params.snippet),
    ];
    const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
    const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
    const data = await controller.getUpdatedBreakpointViewData();
    assert.lengthOf(data.groups, 1);
    assert.lengthOf(data.groups[0].breakpointItems, 1);
    const locations = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance().allBreakpointLocations();
    assert.lengthOf(locations, 1);
    return { controller, groups: data.groups, location: locations[0] };
}
class MockRevealer {
    async reveal(_revealable, _omitFocus) {
    }
}
async function createAndInitializeBreakpointsView() {
    // Force creation of a new BreakpointsView singleton so that it gets correctly re-wired with
    // the current controller singleton (to pick up the latest breakpoint state).
    const component = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsView.instance({ forceNew: true });
    await coordinator.done(); // Wait until the initial rendering finishes.
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.renderElementIntoDOM)(component);
    return component;
}
async function renderNoBreakpoints({ pauseOnUncaughtExceptions, pauseOnCaughtExceptions, independentPauseToggles }) {
    const component = await createAndInitializeBreakpointsView();
    component.data = {
        breakpointsActive: true,
        pauseOnUncaughtExceptions,
        pauseOnCaughtExceptions,
        independentPauseToggles,
        groups: [],
    };
    await coordinator.done();
    return component;
}
async function renderSingleBreakpoint(type = "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */, hoverText) {
    // Only provide a hover text if it's not a regular breakpoint.
    assert.isTrue(!hoverText || type !== "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */);
    const component = await createAndInitializeBreakpointsView();
    const data = {
        breakpointsActive: true,
        pauseOnUncaughtExceptions: false,
        pauseOnCaughtExceptions: false,
        independentPauseToggles: true,
        groups: [
            {
                name: 'test1.js',
                url: 'https://google.com/test1.js',
                editable: true,
                expanded: true,
                breakpointItems: [
                    {
                        id: '1',
                        location: '1',
                        codeSnippet: 'const a = 0;',
                        isHit: true,
                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                        type,
                        hoverText,
                    },
                ],
            },
        ],
    };
    component.data = data;
    await coordinator.done();
    return { component, data };
}
async function renderMultipleBreakpoints() {
    const component = await createAndInitializeBreakpointsView();
    const data = {
        breakpointsActive: true,
        pauseOnUncaughtExceptions: false,
        pauseOnCaughtExceptions: false,
        independentPauseToggles: true,
        groups: [
            {
                name: 'test1.js',
                url: 'https://google.com/test1.js',
                editable: true,
                expanded: true,
                breakpointItems: [
                    {
                        id: '1',
                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                        location: '234',
                        codeSnippet: 'const a = x;',
                        isHit: false,
                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                    },
                    {
                        id: '2',
                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                        location: '3:3',
                        codeSnippet: 'if (x > a) {',
                        isHit: true,
                        status: "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */,
                    },
                ],
            },
            {
                name: 'test2.js',
                url: 'https://google.com/test2.js',
                editable: false,
                expanded: true,
                breakpointItems: [
                    {
                        id: '3',
                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                        location: '11',
                        codeSnippet: 'const y;',
                        isHit: false,
                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                    },
                ],
            },
            {
                name: 'main.js',
                url: 'https://test.com/main.js',
                editable: true,
                expanded: false,
                breakpointItems: [
                    {
                        id: '4',
                        type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                        location: '3',
                        codeSnippet: 'if (a == 0) {',
                        isHit: false,
                        status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                    },
                ],
            },
        ],
    };
    component.data = data;
    await coordinator.done();
    return { component, data };
}
function extractBreakpointItems(data) {
    const breakpointItems = data.groups.flatMap(group => group.breakpointItems);
    assert.isAbove(breakpointItems.length, 0);
    return breakpointItems;
}
function checkCodeSnippet(renderedBreakpointItem, breakpointItem) {
    const snippetElement = renderedBreakpointItem.querySelector(CODE_SNIPPET_SELECTOR);
    assert.instanceOf(snippetElement, HTMLSpanElement);
    assert.strictEqual(snippetElement.textContent, breakpointItem.codeSnippet);
}
function checkCheckboxState(checkbox, breakpointItem) {
    const checked = checkbox.checked;
    const indeterminate = checkbox.indeterminate;
    if (breakpointItem.status === "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */) {
        assert.isTrue(indeterminate);
    }
    else {
        assert.isFalse(indeterminate);
        assert.strictEqual((breakpointItem.status === "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */), checked);
    }
}
function checkGroupNames(renderedGroupElements, breakpointGroups) {
    assert.lengthOf(renderedGroupElements, breakpointGroups.length);
    for (let i = 0; i < renderedGroupElements.length; ++i) {
        const renderedGroup = renderedGroupElements[i];
        assert.instanceOf(renderedGroup, HTMLDetailsElement);
        const titleElement = renderedGroup.querySelector(GROUP_NAME_SELECTOR);
        assert.instanceOf(titleElement, HTMLSpanElement);
        assert.strictEqual(titleElement.textContent, breakpointGroups[i].name);
    }
}
function hover(component, selector) {
    assert.isNotNull(component.shadowRoot);
    // Dispatch a mouse over.
    component.shadowRoot.querySelector(selector)?.dispatchEvent(new Event('mouseover'));
    // Wait until the re-rendering has happened.
    return coordinator.done();
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('targetSupportsIndependentPauseOnExceptionToggles', () => {
    it('can correctly identify node targets as targets that are not supporting independent pause on exception toggles', async () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        target.markAsNodeJSForTest();
        const supportsIndependentPauses = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController
            .targetSupportsIndependentPauseOnExceptionToggles();
        assert.isFalse(supportsIndependentPauses);
    });
    it('can correctly identify non-node targets as targets that are supporting independent pause on exception toggles', async () => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createTarget)();
        const supportsIndependentPauses = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController
            .targetSupportsIndependentPauseOnExceptionToggles();
        assert.isTrue(supportsIndependentPauses);
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.describeWithEnvironment)('BreakpointsSidebarController', () => {
    after(() => {
        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.removeInstance();
    });
    it('can remove a breakpoint', async () => {
        const { groups, location } = await setUpTestWithOneBreakpointLocation();
        const breakpoint = location.breakpoint;
        const breakpointItem = groups[0].breakpointItems[0];
        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointsRemoved([breakpointItem]);
        assert.isTrue(breakpoint.remove.calledOnceWith(false));
    });
    it('changes breakpoint state', async () => {
        const { groups, location } = await setUpTestWithOneBreakpointLocation();
        const breakpointItem = groups[0].breakpointItems[0];
        assert.strictEqual(breakpointItem.status, "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */);
        const breakpoint = location.breakpoint;
        _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointStateChanged(breakpointItem, false);
        assert.isTrue(breakpoint.setEnabled.calledWith(false));
    });
    it('correctly reveals source location', async () => {
        const { groups, location: { uiLocation } } = await setUpTestWithOneBreakpointLocation();
        const breakpointItem = groups[0].breakpointItems[0];
        const revealer = sinon.createStubInstance((MockRevealer));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.registerRevealer({
            contextTypes() {
                return [_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation];
            },
            destination: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerDestination.SOURCES_PANEL,
            async loadRevealer() {
                return revealer;
            },
        });
        await _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().jumpToSource(breakpointItem);
        assert.isTrue(revealer.reveal.calledOnceWith(uiLocation));
    });
    it('correctly reveals breakpoint editor', async () => {
        const { groups, location } = await setUpTestWithOneBreakpointLocation();
        const breakpointItem = groups[0].breakpointItems[0];
        const revealer = sinon.createStubInstance((MockRevealer));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.registerRevealer({
            contextTypes() {
                return [_models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointLocation];
            },
            destination: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerDestination.SOURCES_PANEL,
            async loadRevealer() {
                return revealer;
            },
        });
        await _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance().breakpointEdited(breakpointItem, false /* editButtonClicked */);
        assert.isTrue(revealer.reveal.calledOnceWith(location));
    });
    describe('getUpdatedBreakpointViewData', () => {
        it('extracts breakpoint data', async () => {
            const testData = [
                createLocationTestData(HELLO_JS_FILE, 3, 10),
                createLocationTestData(TEST_JS_FILE, 1, 1),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actual = await controller.getUpdatedBreakpointViewData();
            const createExpectedBreakpointGroups = (testData) => {
                const status = testData.enabled ? "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */ :
                    "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */;
                let type = "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */;
                if (testData.condition) {
                    if (testData.isLogpoint) {
                        type = "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */;
                    }
                    else {
                        type = "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */;
                    }
                }
                return {
                    name: testData.url,
                    url: testData.url,
                    editable: true,
                    expanded: true,
                    breakpointItems: [
                        {
                            id: `${testData.url}:${testData.lineNumber}:${testData.columnNumber}`,
                            location: `${testData.lineNumber + 1}`,
                            codeSnippet: '',
                            isHit: false,
                            status,
                            type,
                            hoverText: testData.hoverText,
                        },
                    ],
                };
            };
            const expected = {
                breakpointsActive: true,
                pauseOnUncaughtExceptions: false,
                pauseOnCaughtExceptions: false,
                independentPauseToggles: true,
                groups: testData.map(createExpectedBreakpointGroups),
            };
            assert.deepEqual(actual, expected);
        });
        it('respects the breakpointsActive setting', async () => {
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata([]);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            settings.moduleSetting('breakpoints-active').set(true);
            let data = await controller.getUpdatedBreakpointViewData();
            assert.strictEqual(data.breakpointsActive, true);
            settings.moduleSetting('breakpoints-active').set(false);
            data = await controller.getUpdatedBreakpointViewData();
            assert.strictEqual(data.breakpointsActive, false);
        });
        it('marks groups as editable based on conditional breakpoint support', async () => {
            const testData = [
                createLocationTestData(HELLO_JS_FILE, 3, 10),
                createLocationTestData(TEST_JS_FILE, 1, 1),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            breakpointManager.supportsConditionalBreakpoints.returns(false);
            for (const group of (await controller.getUpdatedBreakpointViewData()).groups) {
                assert.isFalse(group.editable);
            }
            breakpointManager.supportsConditionalBreakpoints.returns(true);
            for (const group of (await controller.getUpdatedBreakpointViewData()).groups) {
                assert.isTrue(group.editable);
            }
        });
        it('groups breakpoints that are in the same file', async () => {
            const testData = [
                createLocationTestData(HELLO_JS_FILE, 3, 10),
                createLocationTestData(TEST_JS_FILE, 1, 1),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 2);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
            assert.lengthOf(actualViewData.groups[1].breakpointItems, 1);
        });
        it('correctly sets the name of the group', async () => {
            const { groups } = await setUpTestWithOneBreakpointLocation({ file: HELLO_JS_FILE, lineNumber: 0, columnNumber: 0, enabled: false });
            assert.strictEqual(groups[0].name, HELLO_JS_FILE);
        });
        it('only extracts the line number as location if one breakpoint is on that line', async () => {
            const { groups } = await setUpTestWithOneBreakpointLocation({ file: HELLO_JS_FILE, lineNumber: 4, columnNumber: 0, enabled: false });
            assert.strictEqual(groups[0].breakpointItems[0].location, '5');
        });
        it('extracts the line number and column number as location if more than one breakpoint is on that line', async () => {
            const testData = [
                createLocationTestData(HELLO_JS_FILE, 3, 10),
                createLocationTestData(HELLO_JS_FILE, 3, 15),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 2);
            assert.strictEqual(actualViewData.groups[0].breakpointItems[0].location, '4:11');
            assert.strictEqual(actualViewData.groups[0].breakpointItems[1].location, '4:16');
        });
        it('orders breakpoints within a file by location', async () => {
            const testData = [
                createLocationTestData(HELLO_JS_FILE, 3, 15),
                createLocationTestData(HELLO_JS_FILE, 3, 10),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 2);
            assert.strictEqual(actualViewData.groups[0].breakpointItems[0].location, '4:11');
            assert.strictEqual(actualViewData.groups[0].breakpointItems[1].location, '4:16');
        });
        it('orders breakpoints within groups by location', async () => {
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15),
                createLocationTestData(HELLO_JS_FILE, 3, 10),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 2);
            const names = actualViewData.groups.map(group => group.name);
            assert.deepEqual(names, [HELLO_JS_FILE, TEST_JS_FILE]);
        });
        it('merges breakpoints mapping to the same location into one', async () => {
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15),
                createLocationTestData(TEST_JS_FILE, 3, 15),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
        });
        it('correctly extracts the enabled state', async () => {
            const { groups } = await setUpTestWithOneBreakpointLocation({ file: '', lineNumber: 0, columnNumber: 0, enabled: true });
            const breakpointItem = groups[0].breakpointItems[0];
            assert.strictEqual(breakpointItem.status, "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */);
        });
        it('correctly extracts the enabled state', async () => {
            const { groups } = await setUpTestWithOneBreakpointLocation({ file: '', lineNumber: 0, columnNumber: 0, enabled: false });
            const breakpointItem = groups[0].breakpointItems[0];
            assert.strictEqual(breakpointItem.status, "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */);
        });
        it('correctly extracts the enabled state', async () => {
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15, true /* enabled */),
                createLocationTestData(TEST_JS_FILE, 3, 15, false /* enabled */),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
            assert.strictEqual(actualViewData.groups[0].breakpointItems[0].status, "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */);
        });
        it('correctly extracts the disabled state', async () => {
            const snippet = 'const a = x;';
            const { groups } = await setUpTestWithOneBreakpointLocation({ file: '', lineNumber: 0, columnNumber: 0, enabled: false, snippet });
            assert.strictEqual(groups[0].breakpointItems[0].codeSnippet, snippet);
        });
        it('correctly extracts the indeterminate state', async () => {
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15, true /* enabled */),
                createLocationTestData(TEST_JS_FILE, 3, 15, false /* enabled */),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
            assert.strictEqual(actualViewData.groups[0].breakpointItems[0].status, "INDETERMINATE" /* SourcesComponents.BreakpointsView.BreakpointStatus.INDETERMINATE */);
        });
        it('correctly extracts conditional breakpoints', async () => {
            const condition = 'x < a';
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15, true /* enabled */, '', condition, false /* isLogpoint */, condition),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
            const breakpointItem = actualViewData.groups[0].breakpointItems[0];
            assert.strictEqual(breakpointItem.type, "CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */);
            assert.strictEqual(breakpointItem.hoverText, condition);
        });
        it('correctly extracts logpoints', async () => {
            const logExpression = 'x';
            const testData = [
                createLocationTestData(TEST_JS_FILE, 3, 15, true /* enabled */, '', logExpression, true /* isLogpoint */, logExpression),
            ];
            const { breakpointManager, settings } = createStubBreakpointManagerAndSettingsWithMockdata(testData);
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
            const actualViewData = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(actualViewData.groups, 1);
            assert.lengthOf(actualViewData.groups[0].breakpointItems, 1);
            const breakpointItem = actualViewData.groups[0].breakpointItems[0];
            assert.strictEqual(breakpointItem.type, "LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */);
            assert.strictEqual(breakpointItem.hoverText, logExpression);
        });
        describe('breakpoint groups', () => {
            it('are expanded by default', async () => {
                const { controller } = await setUpTestWithOneBreakpointLocation();
                const actualViewData = await controller.getUpdatedBreakpointViewData();
                assert.isTrue(actualViewData.groups[0].expanded);
            });
            it('are collapsed if user collapses it', async () => {
                const { controller, groups } = await setUpTestWithOneBreakpointLocation();
                controller.expandedStateChanged(groups[0].url, false /* expanded */);
                const actualViewData = await controller.getUpdatedBreakpointViewData();
                assert.isFalse(actualViewData.groups[0].expanded);
            });
            it('are expanded if user expands it', async () => {
                const { controller, groups } = await setUpTestWithOneBreakpointLocation();
                controller.expandedStateChanged(groups[0].url, true /* expanded */);
                const actualViewData = await controller.getUpdatedBreakpointViewData();
                assert.isTrue(actualViewData.groups[0].expanded);
            });
            it('remember the collapsed state', async () => {
                {
                    const { controller, groups } = await setUpTestWithOneBreakpointLocation();
                    controller.expandedStateChanged(groups[0].url, false /* expanded */);
                    const actualViewData = await controller.getUpdatedBreakpointViewData();
                    assert.isFalse(actualViewData.groups[0].expanded);
                }
                // A new controller is created and initialized with the expanded settings.
                {
                    const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
                    const settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
                    const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager,
                        settings,
                    });
                    const actualViewData = await controller.getUpdatedBreakpointViewData();
                    assert.isFalse(actualViewData.groups[0].expanded);
                }
            });
            it('remember the expanded state', async () => {
                {
                    const { controller, groups } = await setUpTestWithOneBreakpointLocation();
                    controller.expandedStateChanged(groups[0].url, true /* expanded */);
                    const actualViewData = await controller.getUpdatedBreakpointViewData();
                    assert.isTrue(actualViewData.groups[0].expanded);
                }
                // A new controller is created and initialized with the expanded settings.
                {
                    const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({
                        forceNew: true,
                        breakpointManager: _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance(),
                        settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance(),
                    });
                    const actualViewData = await controller.getUpdatedBreakpointViewData();
                    assert.isTrue(actualViewData.groups[0].expanded);
                }
            });
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('BreakpointsSidebarController', () => {
    beforeEach(() => {
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    });
    const DEFAULT_BREAKPOINT = [
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION,
        true, // enabled
        false, // isLogpoint
        "USER_ACTION" /* Breakpoints.BreakpointManager.BreakpointOrigin.USER_ACTION */,
    ];
    // Flaky
    it.skip('[crbug.com/345456307] auto-expands if a user adds a new  breakpoint', async () => {
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
        const settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: 'test.js', mimeType: 'text/javascript' });
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
        // Add one breakpoint and collapse the tree.
        const b1 = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(b1);
        {
            controller.expandedStateChanged(uiSourceCode.url(), false /* expanded */);
            const data = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(data.groups, 1);
            assert.lengthOf(data.groups[0].breakpointItems, 1);
            assert.isFalse(data.groups[0].expanded);
        }
        // Add a new breakpoint and check if it's expanded as expected.
        const b2 = await breakpointManager.setBreakpoint(uiSourceCode, 0, 3, ...DEFAULT_BREAKPOINT);
        assert.exists(b2);
        {
            const data = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(data.groups, 1);
            assert.lengthOf(data.groups[0].breakpointItems, 2);
            assert.isTrue(data.groups[0].expanded);
        }
        // Clean up.
        await b1.remove(false /* keepInStorage */);
        await b2.remove(false /* keepInStorage */);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
    });
    it('does not auto-expand if a breakpoint was not triggered by user action', async () => {
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
        const settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance();
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: 'test.js', mimeType: 'text/javascript' });
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
        // Add one breakpoint and collapse the tree.
        const b1 = await breakpointManager.setBreakpoint(uiSourceCode, 0, 0, ...DEFAULT_BREAKPOINT);
        assert.exists(b1);
        {
            controller.expandedStateChanged(uiSourceCode.url(), false /* expanded */);
            const data = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(data.groups, 1);
            assert.lengthOf(data.groups[0].breakpointItems, 1);
            assert.isFalse(data.groups[0].expanded);
        }
        // Add a new non-user triggered breakpoint and check if it's still collapsed.
        const b2 = await breakpointManager.setBreakpoint(uiSourceCode, 0, 3, _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.EMPTY_BREAKPOINT_CONDITION, true, false, "RESTORED" /* Breakpoints.BreakpointManager.BreakpointOrigin.OTHER */);
        assert.exists(b2);
        {
            const data = await controller.getUpdatedBreakpointViewData();
            assert.lengthOf(data.groups, 1);
            assert.lengthOf(data.groups[0].breakpointItems, 2);
            assert.isFalse(data.groups[0].expanded);
        }
        // Clean up.
        await b1.remove(false /* keepInStorage */);
        await b2.remove(false /* keepInStorage */);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
    });
    it('auto-expands if a breakpoint was hit', async () => {
        sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.instance(), 'reveal'); // Prevent pending reveal promises after tests are done.
        const breakpointManager = _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance();
        // Set up sdk and ui location, and a mapping between them, such that we can identify that
        // the hit breakpoint is the one we are adding.
        const scriptId = '0';
        const { uiSourceCode, project } = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createContentProviderUISourceCode)({ url: 'test.js', mimeType: 'text/javascript' });
        const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UILocation(uiSourceCode, 0, 0);
        const debuggerModel = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 0);
        const mapping = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFakeScriptMapping)(debuggerModel, uiSourceCode, 0, scriptId);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().addSourceMapping(mapping);
        // Add one breakpoint and collapse its group.
        const b1 = await breakpointManager.setBreakpoint(uiSourceCode, uiLocation.lineNumber, uiLocation.columnNumber, ...DEFAULT_BREAKPOINT);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance() });
        assert.exists(b1);
        controller.expandedStateChanged(uiSourceCode.url(), false /* expanded */);
        // Double check that the group is collapsed.
        {
            const data = await controller.getUpdatedBreakpointViewData();
            assert.isFalse(data.groups[0].expanded);
        }
        // Simulating a breakpoint hit. Update the DebuggerPausedDetails to contain the info on the hit breakpoint.
        const callFrame = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame);
        callFrame.location.returns(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, sdkLocation.lineNumber));
        const pausedDetails = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails);
        pausedDetails.callFrames = [callFrame];
        // Instead of setting the flavor, directly call `flavorChanged` on the controller and mock what it's set to.
        // Setting the flavor would have other listeners listening to it, and would cause undesirable side effects.
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance(), 'flavor')
            .callsFake(flavorType => flavorType === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails ? pausedDetails : null);
        controller.flavorChanged(pausedDetails);
        {
            const data = await controller.getUpdatedBreakpointViewData();
            // Assert that the breakpoint is hit and the group is expanded.
            assert.isTrue(data.groups[0].breakpointItems[0].isHit);
            assert.isTrue(data.groups[0].expanded);
        }
        // Clean up.
        await b1.remove(false /* keepInStorage */);
        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().removeProject(project);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().removeSourceMapping(mapping);
    });
    it('changes pause on exception state', async () => {
        const { breakpointManager, settings } = createStubBreakpointManagerAndSettings();
        breakpointManager.allBreakpointLocations.returns([]);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance({ forceNew: true, breakpointManager, settings });
        for (const pauseOnUncaughtExceptions of [true, false]) {
            for (const pauseOnCaughtExceptions of [true, false]) {
                controller.setPauseOnUncaughtExceptions(pauseOnUncaughtExceptions);
                controller.setPauseOnCaughtExceptions(pauseOnCaughtExceptions);
                const data = await controller.getUpdatedBreakpointViewData();
                assert.strictEqual(data.pauseOnUncaughtExceptions, pauseOnUncaughtExceptions);
                assert.strictEqual(data.pauseOnCaughtExceptions, pauseOnCaughtExceptions);
                assert.strictEqual(settings.moduleSetting('pause-on-uncaught-exception').get(), pauseOnUncaughtExceptions);
                assert.strictEqual(settings.moduleSetting('pause-on-caught-exception').get(), pauseOnCaughtExceptions);
            }
        }
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_7__.describeWithMockConnection)('BreakpointsView', () => {
    beforeEach(() => {
        const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance();
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
        const resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
        const debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping,
            targetManager,
        });
        _models_breakpoints_breakpoints_js__WEBPACK_IMPORTED_MODULE_3__.BreakpointManager.BreakpointManager.instance({ forceNew: true, targetManager, workspace, debuggerWorkspaceBinding });
    });
    it('correctly expands breakpoint groups', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const expandedGroups = data.groups.filter(group => group.expanded);
        assert.isAbove(expandedGroups.length, 0);
        const renderedExpandedGroups = Array.from(component.shadowRoot.querySelectorAll(EXPANDED_GROUPS_SELECTOR));
        assert.lengthOf(renderedExpandedGroups, expandedGroups.length);
        checkGroupNames(renderedExpandedGroups, expandedGroups);
    });
    it('correctly collapses breakpoint groups', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const collapsedGroups = data.groups.filter(group => !group.expanded);
        assert.isAbove(collapsedGroups.length, 0);
        const renderedCollapsedGroups = Array.from(component.shadowRoot.querySelectorAll(COLLAPSED_GROUPS_SELECTOR));
        checkGroupNames(renderedCollapsedGroups, collapsedGroups);
    });
    it('renders the group names', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const renderedGroupNames = component.shadowRoot.querySelectorAll(GROUP_NAME_SELECTOR);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.assertElements)(renderedGroupNames, HTMLSpanElement);
        const expectedNames = data.groups.flatMap(group => group.name);
        const actualNames = [];
        for (const renderedGroupName of renderedGroupNames.values()) {
            actualNames.push(renderedGroupName.textContent);
        }
        assert.deepEqual(actualNames, expectedNames);
    });
    it('renders the breakpoints with their checkboxes', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
        const breakpointItems = extractBreakpointItems(data);
        assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
        for (let i = 0; i < renderedBreakpointItems.length; ++i) {
            const renderedItem = renderedBreakpointItems[i];
            assert.instanceOf(renderedItem, HTMLDivElement);
            const inputElement = renderedItem.querySelector('input');
            assert.instanceOf(inputElement, HTMLInputElement);
            checkCheckboxState(inputElement, breakpointItems[i]);
        }
    });
    it('renders breakpoints with their code snippet', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
        const breakpointItems = extractBreakpointItems(data);
        assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
        for (let i = 0; i < renderedBreakpointItems.length; ++i) {
            const renderedBreakpointItem = renderedBreakpointItems[i];
            assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
            checkCodeSnippet(renderedBreakpointItem, breakpointItems[i]);
        }
    });
    it('renders breakpoint groups with a differentiator if the file names are not unique', async () => {
        const component = await createAndInitializeBreakpointsView();
        const groupTemplate = {
            name: 'index.js',
            url: '',
            editable: true,
            expanded: true,
            breakpointItems: [
                {
                    id: '1',
                    type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                    location: '234',
                    codeSnippet: 'const a = x;',
                    isHit: false,
                    status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                },
            ],
        };
        // Create two groups with the same file name, but different url.
        const group1 = { ...groupTemplate };
        group1.url = 'https://google.com/lib/index.js';
        const group2 = { ...groupTemplate };
        group2.url = 'https://google.com/src/index.js';
        const data = {
            breakpointsActive: true,
            pauseOnUncaughtExceptions: false,
            pauseOnCaughtExceptions: false,
            independentPauseToggles: true,
            groups: [
                group1,
                group2,
            ],
        };
        component.data = data;
        await coordinator.done();
        assert.isNotNull(component.shadowRoot);
        const groupSummaries = Array.from(component.shadowRoot.querySelectorAll(SUMMARY_SELECTOR));
        const differentiatingPath = groupSummaries.map(group => {
            const differentiatorElement = group.querySelector(GROUP_DIFFERENTIATOR_SELECTOR);
            assert.instanceOf(differentiatorElement, HTMLSpanElement);
            return differentiatorElement.textContent;
        });
        assert.deepEqual(differentiatingPath, ['lib/', 'src/']);
    });
    it('renders breakpoints with a differentiating path', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        const renderedBreakpointItems = Array.from(component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR));
        const breakpointItems = extractBreakpointItems(data);
        assert.lengthOf(renderedBreakpointItems, breakpointItems.length);
        for (let i = 0; i < renderedBreakpointItems.length; ++i) {
            const renderedBreakpointItem = renderedBreakpointItems[i];
            assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
            const locationElement = renderedBreakpointItem.querySelector(BREAKPOINT_LOCATION_SELECTOR);
            assert.instanceOf(locationElement, HTMLSpanElement);
            const actualLocation = locationElement.textContent;
            const expectedLocation = breakpointItems[i].location;
            assert.strictEqual(actualLocation, expectedLocation);
        }
    });
    it('triggers an event on clicking the checkbox of a breakpoint', async () => {
        const { component, data } = await renderSingleBreakpoint();
        assert.isNotNull(component.shadowRoot);
        const renderedItem = component.shadowRoot.querySelector(BREAKPOINT_ITEM_SELECTOR);
        assert.instanceOf(renderedItem, HTMLDivElement);
        const checkbox = renderedItem.querySelector('input');
        assert.instanceOf(checkbox, HTMLInputElement);
        const checked = checkbox.checked;
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const breakpointStateChanged = sinon.stub(controller, 'breakpointStateChanged');
        checkbox.click();
        assert.isTrue(breakpointStateChanged.calledOnceWith(data.groups[0].breakpointItems[0], !checked));
    });
    it('triggers an event on clicking on the snippet text', async () => {
        const { component, data } = await renderSingleBreakpoint();
        assert.isNotNull(component.shadowRoot);
        const snippet = component.shadowRoot.querySelector(CODE_SNIPPET_SELECTOR);
        assert.instanceOf(snippet, HTMLSpanElement);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const jumpToSource = sinon.stub(controller, 'jumpToSource');
        snippet.click();
        assert.isTrue(jumpToSource.calledOnceWith(data.groups[0].breakpointItems[0]));
    });
    it('triggers an event on expanding/unexpanding', async () => {
        const { component, data } = await renderSingleBreakpoint();
        assert.isNotNull(component.shadowRoot);
        const renderedGroupName = component.shadowRoot.querySelector(GROUP_NAME_SELECTOR);
        assert.instanceOf(renderedGroupName, HTMLSpanElement);
        const expandedInitialValue = data.groups[0].expanded;
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const expandedStateChanged = sinon.stub(controller, 'expandedStateChanged');
        renderedGroupName.click();
        await new Promise(resolve => setTimeout(resolve, 0));
        const group = data.groups[0];
        assert.isTrue(expandedStateChanged.calledOnceWith(group.url, group.expanded));
        assert.notStrictEqual(group.expanded, expandedInitialValue);
    });
    it('highlights breakpoint if it is set to be hit', async () => {
        const { component } = await renderSingleBreakpoint();
        assert.isNotNull(component.shadowRoot);
        const renderedBreakpointItem = component.shadowRoot.querySelector(HIT_BREAKPOINT_SELECTOR);
        assert.instanceOf(renderedBreakpointItem, HTMLDivElement);
    });
    it('triggers an event on removing file breakpoints', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        await hover(component, SUMMARY_SELECTOR);
        const removeFileBreakpointsButton = component.shadowRoot.querySelector(REMOVE_FILE_BREAKPOINTS_SELECTOR);
        assert.instanceOf(removeFileBreakpointsButton, HTMLButtonElement);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const breakpointsRemoved = sinon.stub(controller, 'breakpointsRemoved');
        removeFileBreakpointsButton.click();
        // await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(breakpointsRemoved.calledOnceWith(data.groups[0].breakpointItems));
    });
    it('triggers an event on removing one breakpoint', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        await hover(component, BREAKPOINT_ITEM_SELECTOR);
        const removeFileBreakpointsButton = component.shadowRoot.querySelector(REMOVE_SINGLE_BREAKPOINT_SELECTOR);
        assert.instanceOf(removeFileBreakpointsButton, HTMLButtonElement);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const breakpointsRemoved = sinon.stub(controller, 'breakpointsRemoved');
        removeFileBreakpointsButton.click();
        // await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(breakpointsRemoved.calledOnce);
        assert.deepEqual(breakpointsRemoved.firstCall.firstArg, [data.groups[0].breakpointItems[0]]);
    });
    it('triggers an event on editing one breakpoint', async () => {
        const { component, data } = await renderMultipleBreakpoints();
        assert.isNotNull(component.shadowRoot);
        await hover(component, BREAKPOINT_ITEM_SELECTOR);
        const editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
        assert.instanceOf(editBreakpointButton, HTMLButtonElement);
        const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
        const breakpointEdited = sinon.stub(controller, 'breakpointEdited');
        editBreakpointButton.click();
        // await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(breakpointEdited.calledOnceWith(data.groups[0].breakpointItems[0], true));
    });
    it('shows a tooltip with edit condition on regular breakpoints', async () => {
        const { component } = await renderSingleBreakpoint("REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */);
        assert.isNotNull(component.shadowRoot);
        await hover(component, BREAKPOINT_ITEM_SELECTOR);
        const editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
        assert.instanceOf(editBreakpointButton, HTMLButtonElement);
        assert.strictEqual(editBreakpointButton.title, 'Edit condition');
    });
    describe('group checkboxes', () => {
        async function waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, checked) {
            return new Promise(resolve => {
                let numCheckboxToggledEvents = 0;
                const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
                sinon.stub(controller, 'breakpointStateChanged').callsFake((_, checkedArg) => {
                    assert.strictEqual(checkedArg, checked);
                    ++numCheckboxToggledEvents;
                    if (numCheckboxToggledEvents === numBreakpointItems) {
                        resolve();
                    }
                });
            });
        }
        it('show a checked group checkbox if at least one breakpoint in that group is enabled', async () => {
            const { component, data } = await renderMultipleBreakpoints();
            // Make sure that at least one breakpoint is enabled.
            data.groups[0].breakpointItems[0].status = "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */;
            component.data = data;
            await coordinator.done();
            await hover(component, SUMMARY_SELECTOR);
            assert.isNotNull(component.shadowRoot);
            const firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
            assert.exists(firstGroupSummary);
            const groupCheckbox = firstGroupSummary.querySelector('input');
            assert.instanceOf(groupCheckbox, HTMLInputElement);
            assert.isTrue(groupCheckbox.checked);
        });
        it('show an unchecked group checkbox if no breakpoint in that group is enabled', async () => {
            const { component, data } = await renderMultipleBreakpoints();
            // Make sure that all breakpoints are disabled.
            const breakpointItems = data.groups[0].breakpointItems;
            for (let i = 0; i < breakpointItems.length; ++i) {
                breakpointItems[i].status = "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */;
            }
            component.data = data;
            await coordinator.done();
            await hover(component, SUMMARY_SELECTOR);
            assert.isNotNull(component.shadowRoot);
            const firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
            assert.exists(firstGroupSummary);
            const groupCheckbox = firstGroupSummary.querySelector('input');
            assert.instanceOf(groupCheckbox, HTMLInputElement);
            assert.isFalse(groupCheckbox.checked);
        });
        it('disable all breakpoints on unchecking', async () => {
            const { component, data } = await renderMultipleBreakpoints();
            const numBreakpointItems = data.groups[0].breakpointItems.length;
            assert.isTrue(numBreakpointItems > 1);
            // Make sure that all breakpoints are enabled.
            for (let i = 0; i < numBreakpointItems; ++i) {
                data.groups[0].breakpointItems[i].status = "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */;
            }
            component.data = data;
            await coordinator.done();
            await hover(component, SUMMARY_SELECTOR);
            // Uncheck the group checkbox.
            assert.isNotNull(component.shadowRoot);
            const firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
            assert.exists(firstGroupSummary);
            const groupCheckbox = firstGroupSummary.querySelector('input');
            assert.instanceOf(groupCheckbox, HTMLInputElement);
            // Wait until we receive all events fired that notify us of disabled breakpoints.
            const waitForEventPromise = waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, false);
            groupCheckbox.click();
            await waitForEventPromise;
        });
        it('enable all breakpoints on unchecking', async () => {
            const { component, data } = await renderMultipleBreakpoints();
            const numBreakpointItems = data.groups[0].breakpointItems.length;
            assert.isTrue(numBreakpointItems > 1);
            // Make sure that all breakpoints are disabled.
            for (let i = 0; i < numBreakpointItems; ++i) {
                data.groups[0].breakpointItems[i].status = "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */;
            }
            component.data = data;
            await coordinator.done();
            await hover(component, SUMMARY_SELECTOR);
            // Uncheck the group checkbox.
            assert.isNotNull(component.shadowRoot);
            const firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
            assert.exists(firstGroupSummary);
            const groupCheckbox = firstGroupSummary.querySelector('input');
            assert.instanceOf(groupCheckbox, HTMLInputElement);
            // Wait until we receive all events fired that notify us of enabled breakpoints.
            const waitForEventPromise = waitForCheckboxToggledEventsWithCheckedUpdate(component, numBreakpointItems, true);
            groupCheckbox.click();
            await waitForEventPromise;
        });
    });
    it('only renders edit button for breakpoints in editable groups', async () => {
        const component = await createAndInitializeBreakpointsView();
        const data = {
            breakpointsActive: true,
            pauseOnUncaughtExceptions: false,
            pauseOnCaughtExceptions: false,
            independentPauseToggles: true,
            groups: [
                {
                    name: 'test1.js',
                    url: 'https://google.com/test1.js',
                    editable: false,
                    expanded: true,
                    breakpointItems: [
                        {
                            id: '1',
                            location: '1',
                            codeSnippet: 'const a = 0;',
                            isHit: true,
                            status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                            type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                        },
                    ],
                },
            ],
        };
        component.data = data;
        await coordinator.done();
        assert.isNotNull(component.shadowRoot);
        await hover(component, BREAKPOINT_ITEM_SELECTOR);
        const editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
        assert.isNull(editBreakpointButton);
    });
    it('initializes data from the controller on construction', async () => {
        await setUpTestWithOneBreakpointLocation();
        const component = await createAndInitializeBreakpointsView();
        const renderedGroupName = component.shadowRoot?.querySelector(GROUP_NAME_SELECTOR);
        assert.strictEqual(renderedGroupName?.textContent, HELLO_JS_FILE);
    });
    describe('conditional breakpoints', () => {
        const breakpointDetails = 'x < a';
        it('are rendered', async () => {
            const { component } = await renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */, breakpointDetails);
            const breakpointItem = component.shadowRoot?.querySelector(BREAKPOINT_ITEM_SELECTOR);
            assert.exists(breakpointItem);
            assert.instanceOf(breakpointItem, HTMLDivElement);
            assert.isTrue(breakpointItem.classList.contains('conditional-breakpoint'));
        });
        it('show a tooltip', async () => {
            const { component } = await renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */, breakpointDetails);
            const codeSnippet = component.shadowRoot?.querySelector(CODE_SNIPPET_SELECTOR);
            assert.exists(codeSnippet);
            assert.instanceOf(codeSnippet, HTMLSpanElement);
            assert.strictEqual(codeSnippet.title, `Condition: ${breakpointDetails}`);
        });
        it('show a tooltip on editing the condition', async () => {
            const { component } = await renderSingleBreakpoint("CONDITIONAL_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.CONDITIONAL_BREAKPOINT */, breakpointDetails);
            assert.isNotNull(component.shadowRoot);
            await hover(component, BREAKPOINT_ITEM_SELECTOR);
            const editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
            assert.instanceOf(editBreakpointButton, HTMLButtonElement);
            assert.strictEqual(editBreakpointButton.title, 'Edit condition');
        });
    });
    describe('logpoints', () => {
        const breakpointDetails = 'x, a';
        it('are rendered', async () => {
            const { component } = await renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */, breakpointDetails);
            const breakpointItem = component.shadowRoot?.querySelector(BREAKPOINT_ITEM_SELECTOR);
            assert.exists(breakpointItem);
            assert.instanceOf(breakpointItem, HTMLDivElement);
            assert.isTrue(breakpointItem.classList.contains('logpoint'));
        });
        it('show a tooltip', async () => {
            const { component } = await renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */, breakpointDetails);
            const codeSnippet = component.shadowRoot?.querySelector(CODE_SNIPPET_SELECTOR);
            assert.exists(codeSnippet);
            assert.instanceOf(codeSnippet, HTMLSpanElement);
            assert.strictEqual(codeSnippet.title, `Logpoint: ${breakpointDetails}`);
        });
        it('show a tooltip on editing the logpoint', async () => {
            const { component } = await renderSingleBreakpoint("LOGPOINT" /* SDK.DebuggerModel.BreakpointType.LOGPOINT */, breakpointDetails);
            assert.isNotNull(component.shadowRoot);
            await hover(component, BREAKPOINT_ITEM_SELECTOR);
            const editBreakpointButton = component.shadowRoot.querySelector(EDIT_SINGLE_BREAKPOINT_SELECTOR);
            assert.instanceOf(editBreakpointButton, HTMLButtonElement);
            assert.strictEqual(editBreakpointButton.title, 'Edit logpoint');
        });
    });
    describe('pause on exceptions', () => {
        it('state is rendered correctly when disabled', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: false, pauseOnCaughtExceptions: false, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnUncaughtExceptionsItem);
            const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
            assert.isFalse(pauseOnUncaughtExceptionsCheckbox.checked);
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
        });
        it('state is rendered correctly when pausing on uncaught exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: false, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnUncaughtExceptionsItem);
            const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnUncaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnCaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
        });
        it('state is rendered correctly when pausing on all exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: true, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnUncaughtExceptionsItem);
            const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnUncaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnCaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnCaughtExceptionsCheckbox.checked);
        });
        it('state is rendered correctly when toggles are dependent and only pausing on uncaught exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: false, independentPauseToggles: false });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnUncaughtExceptionsItem);
            const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnUncaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnUncaughtExceptionsCheckbox.checked);
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isFalse(pauseOnCaughtExceptionsCheckbox.disabled);
        });
        it('state is rendered correctly when toggles are dependent and not pausing on uncaught exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: false, pauseOnCaughtExceptions: false, independentPauseToggles: false });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnUncaughtExceptionsItem);
            const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
            assert.exists(pauseOnUncaughtExceptionsCheckbox);
            assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
            assert.isFalse(pauseOnUncaughtExceptionsCheckbox.checked);
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnCaughtExceptionsCheckbox.disabled);
        });
        it('state is rendered correctly when toggles are dependent and pausing on uncaught exceptions is unchecked', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: true, independentPauseToggles: false });
            assert.isNotNull(component.shadowRoot);
            const pauseOnUncaughtExceptionsItem = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.instanceOf(pauseOnUncaughtExceptionsItem, HTMLDivElement);
            {
                // Click on the pause on exceptions checkbox to uncheck.
                const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnUncaughtExceptionsCheckbox);
                await coordinator.done();
            }
            {
                // Check that clicking on it actually unchecked.
                const pauseOnUncaughtExceptionsCheckbox = pauseOnUncaughtExceptionsItem.querySelector('input');
                assert.instanceOf(pauseOnUncaughtExceptionsCheckbox, HTMLInputElement);
                assert.isFalse(pauseOnUncaughtExceptionsCheckbox.checked);
            }
            // Check if the pause on caught exception checkbox is unchecked and disabled as a result.
            const pauseOnCaughtExceptionsItem = component.shadowRoot?.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(pauseOnCaughtExceptionsItem);
            const pauseOnCaughtExceptionsCheckbox = pauseOnCaughtExceptionsItem.querySelector('input');
            assert.instanceOf(pauseOnCaughtExceptionsCheckbox, HTMLInputElement);
            assert.isTrue(pauseOnCaughtExceptionsCheckbox.disabled);
            assert.isFalse(pauseOnCaughtExceptionsCheckbox.checked);
        });
        it('triggers an event when disabling pausing on all exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: false, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const item = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(item);
            const checkbox = item.querySelector('input');
            assert.instanceOf(checkbox, HTMLInputElement);
            const { checked } = checkbox;
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
            const setPauseOnUncaughtExceptions = sinon.stub(controller, 'setPauseOnUncaughtExceptions');
            checkbox.click();
            assert.isTrue(setPauseOnUncaughtExceptions.calledOnceWith(!checked));
        });
        it('triggers an event when enabling pausing on caught exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: false, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const item = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(item);
            const checkbox = item.querySelector('input');
            assert.instanceOf(checkbox, HTMLInputElement);
            const { checked } = checkbox;
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
            const setPauseOnCaughtExceptions = sinon.stub(controller, 'setPauseOnCaughtExceptions');
            checkbox.click();
            assert.isTrue(setPauseOnCaughtExceptions.calledOnceWith(!checked));
        });
        it('triggers an event when enabling pausing on uncaught exceptions', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: false, pauseOnCaughtExceptions: true, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const item = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.exists(item);
            const checkbox = item.querySelector('input');
            assert.instanceOf(checkbox, HTMLInputElement);
            const { checked } = checkbox;
            const controller = _components_js__WEBPACK_IMPORTED_MODULE_11__.BreakpointsView.BreakpointsSidebarController.instance();
            const setPauseOnUncaughtExceptions = sinon.stub(controller, 'setPauseOnUncaughtExceptions');
            checkbox.click();
            assert.isTrue(setPauseOnUncaughtExceptions.calledOnceWith(!checked));
        });
    });
    describe('navigating with keyboard', () => {
        // One expanded group with 2 breakpoints, and one collapsed with 2 breakpoints.
        async function renderBreakpointsForKeyboardNavigation() {
            const component = await createAndInitializeBreakpointsView();
            const data = {
                breakpointsActive: true,
                pauseOnUncaughtExceptions: false,
                pauseOnCaughtExceptions: false,
                independentPauseToggles: true,
                groups: [
                    {
                        name: 'test1.js',
                        url: 'https://google.com/test1.js',
                        editable: false,
                        expanded: true,
                        breakpointItems: [
                            {
                                id: '1',
                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                                location: '234',
                                codeSnippet: 'const a = x;',
                                isHit: false,
                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                            },
                            {
                                id: '2',
                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                                location: '3:3',
                                codeSnippet: 'if (x > a) {',
                                isHit: true,
                                status: "DISABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.DISABLED */,
                            },
                        ],
                    },
                    {
                        name: 'test2.js',
                        url: 'https://google.com/test2.js',
                        editable: false,
                        expanded: false,
                        breakpointItems: [
                            {
                                id: '3',
                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                                location: '11',
                                codeSnippet: 'const y;',
                                isHit: false,
                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                            },
                            {
                                id: '4',
                                type: "REGULAR_BREAKPOINT" /* SDK.DebuggerModel.BreakpointType.REGULAR_BREAKPOINT */,
                                location: '12',
                                codeSnippet: 'const y;',
                                isHit: false,
                                status: "ENABLED" /* SourcesComponents.BreakpointsView.BreakpointStatus.ENABLED */,
                            },
                        ],
                    },
                ],
            };
            component.data = data;
            await coordinator.done();
            return { component, data };
        }
        it('pause on exceptions is tabbable', async () => {
            const component = await renderNoBreakpoints({ pauseOnUncaughtExceptions: true, pauseOnCaughtExceptions: false, independentPauseToggles: true });
            assert.isNotNull(component.shadowRoot);
            const focusableElements = component.shadowRoot.querySelectorAll(TABBABLE_SELECTOR);
            assert.lengthOf(focusableElements, 1);
            const pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
            assert.deepEqual(focusableElements[0], pauseOnUncaughtExceptions);
        });
        describe('pressing the HOME key', () => {
            it('takes the user to the pause-on-exceptions line', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const secondGroupsSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR}:nth-of-type(2) > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(secondGroupsSummary, HTMLElement);
                // Focus on second group by clicking on it, then press Home button.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(secondGroupsSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(secondGroupsSummary, { key: 'Home', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                assert.instanceOf(pauseOnUncaughtExceptions, HTMLElement);
                assert.strictEqual(selected, pauseOnUncaughtExceptions);
            });
        });
        describe('pressing the END key', () => {
            it('takes the user to the summary node of the last group (if last group is collapsed)', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_UNCAUGHT_EXCEPTIONS_SELECTOR);
                assert.instanceOf(pauseOnUncaughtExceptions, HTMLElement);
                // Focus on the pause-on-exceptions line by clicking on it, then press End key.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnUncaughtExceptions);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(pauseOnUncaughtExceptions, { key: 'End', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const lastGroupSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR}:nth-of-type(2) > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(lastGroupSummary, HTMLElement);
                assert.strictEqual(selected, lastGroupSummary);
            });
            it('takes the user to the last breakpoint item (if last group is expanded))', async () => {
                const { component, data } = await renderBreakpointsForKeyboardNavigation();
                // Expand the last group.
                data.groups[1].expanded = true;
                component.data = data;
                await coordinator.done();
                assert.isNotNull(component.shadowRoot);
                const firstGroupSummary = component.shadowRoot.querySelector(SUMMARY_SELECTOR);
                assert.instanceOf(firstGroupSummary, HTMLElement);
                // First focus on the first group by clicking on it, then press the End button.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstGroupSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstGroupSummary, { key: 'End', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const breakpointItems = component.shadowRoot.querySelectorAll(BREAKPOINT_ITEM_SELECTOR);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.assertElements)(breakpointItems, HTMLDivElement);
                const lastBreakpointItem = breakpointItems.item(breakpointItems.length - 1);
                assert.strictEqual(selected, lastBreakpointItem);
            });
        });
        describe('pressing the ArrowDown key', () => {
            it('on the pause-on-uncaught-exception takes the user to the summary node of the top most details element', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const pauseOnCaughtException = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                assert.instanceOf(pauseOnCaughtException, HTMLElement);
                // Focus on the pause on exception, and navigate one down.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(pauseOnCaughtException);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(pauseOnCaughtException, { key: 'ArrowDown', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                const firstSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR} > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(firstSummary, HTMLElement);
                assert.strictEqual(selected, firstSummary);
            });
            it('on the summary node of an expanded group takes the user to the top most breakpoint item of that group', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const collapsedDetailsElement = component.shadowRoot.querySelector(COLLAPSED_GROUPS_SELECTOR);
                assert.instanceOf(collapsedDetailsElement, HTMLDetailsElement);
                const collapsedGroupSummary = collapsedDetailsElement.querySelector(SUMMARY_SELECTOR);
                assert.instanceOf(collapsedGroupSummary, HTMLElement);
                // Focus on the collapsed group and collapse it by clicking on it. Then navigate down.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(collapsedGroupSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(collapsedGroupSummary, { key: 'ArrowDown', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const firstBreakpointItem = collapsedDetailsElement.querySelector(BREAKPOINT_ITEM_SELECTOR);
                assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                assert.strictEqual(selected, firstBreakpointItem);
            });
            it('on the summary node of a collapsed group takes the user to the summary node of the next group', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const firstGroupSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR}:nth-of-type(1) > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(firstGroupSummary, HTMLElement);
                // Focus on the expanded group and collapse it by clicking on it. Then navigate down.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstGroupSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstGroupSummary, { key: 'ArrowDown', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const secondGroupSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR}:nth-of-type(2) > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(secondGroupSummary, HTMLElement);
                assert.strictEqual(selected, secondGroupSummary);
            });
            it('on a breakpoint item takes the user to the next breakpoint item', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const firstDetailsElement = component.shadowRoot.querySelector('details');
                assert.instanceOf(firstDetailsElement, HTMLDetailsElement);
                const firstBreakpointItem = firstDetailsElement.querySelector(BREAKPOINT_ITEM_SELECTOR);
                assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                // Focus on the first breakpoint item. Then navigate up.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstBreakpointItem);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstBreakpointItem, { key: 'ArrowDown', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const secondBreakpointItem = firstDetailsElement.querySelector(`${BREAKPOINT_ITEM_SELECTOR}:nth-of-type(2)`);
                assert.instanceOf(secondBreakpointItem, HTMLDivElement);
                assert.strictEqual(selected, secondBreakpointItem);
            });
        });
        describe('pressing the ArrowUp key', () => {
            it('on the first summary takes a user to the pause on exceptions', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const firstSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR} > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(firstSummary, HTMLElement);
                // Focus on the summary element.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstSummary, { key: 'ArrowUp', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                const pauseOnUncaughtExceptions = component.shadowRoot.querySelector(PAUSE_ON_CAUGHT_EXCEPTIONS_SELECTOR);
                assert.instanceOf(pauseOnUncaughtExceptions, HTMLDivElement);
                assert.strictEqual(selected, pauseOnUncaughtExceptions);
            });
            it('on the first breakpoint item in an expanded group takes the user to the summary node', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const expandedDetails = component.shadowRoot.querySelector(EXPANDED_GROUPS_SELECTOR);
                assert.instanceOf(expandedDetails, HTMLDetailsElement);
                const firstBreakpointItem = expandedDetails.querySelector(BREAKPOINT_ITEM_SELECTOR);
                assert.instanceOf(firstBreakpointItem, HTMLDivElement);
                // Focus on first breakpoint item. Then navigate up.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(firstBreakpointItem);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(firstBreakpointItem, { key: 'ArrowUp', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const summary = expandedDetails.querySelector(SUMMARY_SELECTOR);
                assert.instanceOf(summary, HTMLElement);
                assert.strictEqual(selected, summary);
            });
            it('on a breakpoint item in an expanded group takes the user to the previous breakpoint item', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const expandedDetails = component.shadowRoot.querySelector(EXPANDED_GROUPS_SELECTOR);
                assert.instanceOf(expandedDetails, HTMLDetailsElement);
                const breakpointItems = expandedDetails.querySelectorAll(BREAKPOINT_ITEM_SELECTOR);
                assert.isAbove(breakpointItems.length, 1);
                const lastBreakpointItem = breakpointItems.item(breakpointItems.length - 1);
                // Focus on last breakpoint item. Then navigate up.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(lastBreakpointItem);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(lastBreakpointItem, { key: 'ArrowUp', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const nextToLastBreakpointItem = breakpointItems.item(breakpointItems.length - 2);
                assert.instanceOf(nextToLastBreakpointItem, HTMLDivElement);
                assert.strictEqual(selected, nextToLastBreakpointItem);
            });
            it('on a summary node takes the user to the last breakpoint item of the previous group', async () => {
                const { component } = await renderBreakpointsForKeyboardNavigation();
                assert.isNotNull(component.shadowRoot);
                const secondGroupSummary = component.shadowRoot.querySelector(`${DETAILS_SELECTOR}:nth-of-type(2) > ${SUMMARY_SELECTOR}`);
                assert.instanceOf(secondGroupSummary, HTMLElement);
                // Focus on the group. Then navigate up.
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchClickEvent)(secondGroupSummary);
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_5__.dispatchKeyDownEvent)(secondGroupSummary, { key: 'ArrowUp', bubbles: true });
                await coordinator.done();
                const selected = component.shadowRoot.querySelector(TABBABLE_SELECTOR);
                assert.instanceOf(selected, HTMLElement);
                const firstDetailsElement = component.shadowRoot.querySelector(DETAILS_SELECTOR);
                assert.exists(firstDetailsElement);
                const lastBreakpointItem = firstDetailsElement.querySelector(`${BREAKPOINT_ITEM_SELECTOR}:last-child`);
                assert.instanceOf(lastBreakpointItem, HTMLDivElement);
                assert.strictEqual(selected, lastBreakpointItem);
            });
        });
    });
});
//# sourceMappingURL=BreakpointsView.test.js.map

/***/ }),

/***/ "./panels/sources/components/components.js":
/*!*************************************************!*\
  !*** ./panels/sources/components/components.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointsView: () => (/* reexport module object */ _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   BreakpointsViewUtils: () => (/* reexport module object */ _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   HeadersView: () => (/* reexport module object */ _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _BreakpointsView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BreakpointsView.js */ "./panels/sources/components/BreakpointsView.js");
/* harmony import */ var _BreakpointsViewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakpointsViewUtils.js */ "./panels/sources/components/BreakpointsViewUtils.js");
/* harmony import */ var _HeadersView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadersView.js */ "./panels/sources/components/HeadersView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./testing/UISourceCodeHelpers.js":
/*!****************************************!*\
  !*** ./testing/UISourceCodeHelpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentProviderUISourceCode: () => (/* binding */ createContentProviderUISourceCode),
/* harmony export */   createContentProviderUISourceCodes: () => (/* binding */ createContentProviderUISourceCodes),
/* harmony export */   createFakeScriptMapping: () => (/* binding */ createFakeScriptMapping),
/* harmony export */   createFileSystemUISourceCode: () => (/* binding */ createFileSystemUISourceCode),
/* harmony export */   setupMockedUISourceCode: () => (/* binding */ setupMockedUISourceCode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






function createContentProviderUISourceCodes(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    const project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false /* isServiceProject*/);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    const uiSourceCodes = [];
    for (const item of options.items) {
        const resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
        const uiSourceCode = project.createUISourceCode(item.url, resourceType);
        const contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
        const metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
        project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
        uiSourceCodes.push(uiSourceCode);
    }
    return { project, uiSourceCodes };
}
function createContentProviderUISourceCode(options) {
    const { url, content, mimeType, metadata, projectType, projectId, target } = options;
    const { project, uiSourceCodes } = createContentProviderUISourceCodes({ items: [{ url, content, mimeType, metadata }], projectType, projectId, target });
    return { project, uiSourceCode: uiSourceCodes[0] };
}
class TestPlatformFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem {
    #mimeType;
    #autoMapping;
    constructor(path, type, mimeType, autoMapping) {
        super(path, type);
        this.#mimeType = mimeType;
        this.#autoMapping = autoMapping;
    }
    supportsAutomapping() {
        return this.#autoMapping;
    }
    mimeFromPath(_path) {
        return this.#mimeType;
    }
}
class TestFileSystem extends _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem {
    #content;
    #metadata;
    constructor(options) {
        super(options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        this.#content = options.content;
        this.#metadata = options.metadata;
    }
    requestFileContent(_uiSourceCode) {
        return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(this.#content, /* isBase64 */ false, 'text/plain'));
    }
    requestMetadata(_uiSourceCode) {
        return Promise.resolve(this.#metadata);
    }
}
function createFileSystemUISourceCode(options) {
    const workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    const isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    const fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    const fileSystemPath = (options.fileSystemPath || '');
    const type = options.type || '';
    const content = options.content || '';
    const platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    const metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    const project = new TestFileSystem({ fileSystemWorkspaceBinding, platformFileSystem, workspace, content, metadata });
    const uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return { uiSourceCode, project };
}
function setupMockedUISourceCode(url = 'https://example.com/') {
    const projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    const urlStringTagExample = url;
    const contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    const uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return { sut: uiSourceCode, projectStub: projectStub, contentTypeStub: contentTypeStub };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    const sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    const uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    const mapping = {
        rawLocationToUILocation: (_) => uiLocation,
        uiLocationToRawLocations: (_uiSourceCode, _lineNumber, _columnNumber) => [sdkLocation],
        uiLocationRangeToRawLocationRanges: (_uiSourceCode, _textRange) => {
            throw new Error('Not implemented');
        },
    };
    return mapping;
}
//# sourceMappingURL=UISourceCodeHelpers.js.map

/***/ })

}]);