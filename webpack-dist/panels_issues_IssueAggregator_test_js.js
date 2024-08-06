"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssueAggregator_test_js"],{

/***/ "./panels/issues/IssueAggregator.test.js":
/*!***********************************************!*\
  !*** ./panels/issues/IssueAggregator.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./testing/MockIssuesManager.js");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */ var _issues_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issues.js */ "./panels/issues/issues.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('AggregatedIssue', () => {
    const aggregationKey = 'key';
    it('deduplicates network requests across issues', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id1', 'id2']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id1']);
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue1);
        aggregatedIssue.addInstance(issue2);
        const actualRequestIds = [...aggregatedIssue.requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(actualRequestIds, ['id1', 'id2']);
    });
    it('deduplicates affected cookies across issues', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromCookieNames(['cookie1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromCookieNames(['cookie2']);
        const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromCookieNames(['cookie1', 'cookie2']);
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue1);
        aggregatedIssue.addInstance(issue2);
        aggregatedIssue.addInstance(issue3);
        const actualCookieNames = [...aggregatedIssue.cookies()].map(c => c.name).sort();
        assert.deepStrictEqual(actualCookieNames, ['cookie1', 'cookie2']);
    });
});
function createModel() {
    const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
    assert.exists(model);
    return model;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IssueAggregator', () => {
    it('deduplicates issues with the same code', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id2']);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager([]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const requestIds = [...issues[0].requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(requestIds, ['id1', 'id2']);
    });
    it('deduplicates issues with the same code added before its creation', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id2']);
        const issue1b = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id1']); // Duplicate id.
        const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromRequestIds(['id3']);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager([issue1b, issue3]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const requestIds = [...issues[0].requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(requestIds, ['id1', 'id2', 'id3']);
    });
    it('keeps issues with different codes separate', () => {
        const issue1 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('codeA', ['id1'], []);
        const issue2 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('codeB', ['id1'], []);
        const issue1b = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('codeC', ['id1'], []);
        const issue3 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('codeA', ['id1'], []);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager([issue1b, issue3]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 3);
        const issueCodes = issues.map(r => r.aggregationKey().toString()).sort((a, b) => a.localeCompare(b));
        assert.deepStrictEqual(issueCodes, ['codeA', 'codeB', 'codeC']);
    });
    describe('aggregates issue kind', () => {
        it('for a single issue', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromIssueKinds(["Improvement" /* IssuesManager.Issue.IssueKind.Improvement */]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */);
        });
        it('for issues of two different kinds', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromIssueKinds([
                "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */,
                "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */,
                "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */,
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */);
        });
        it('for issues of three different kinds', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromIssueKinds([
                "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */,
                "PageError" /* IssuesManager.Issue.IssueKind.PageError */,
                "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */,
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), "PageError" /* IssuesManager.Issue.IssueKind.PageError */);
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IssueAggregator', () => {
    it('aggregates heavy ad issues correctly', () => {
        const model = createModel();
        const details1 = {
            resolution: "HeavyAdBlocked" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdBlocked */,
            reason: "CpuPeakLimit" /* Protocol.Audits.HeavyAdReason.CpuPeakLimit */,
            frame: { frameId: 'main' },
        };
        const issue1 = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.HeavyAdIssue.HeavyAdIssue(details1, model);
        const details2 = {
            resolution: "HeavyAdWarning" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdWarning */,
            reason: "NetworkTotalLimit" /* Protocol.Audits.HeavyAdReason.NetworkTotalLimit */,
            frame: { frameId: 'main' },
        };
        const issue2 = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.HeavyAdIssue.HeavyAdIssue(details2, model);
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager([]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const resolutions = [...issues[0].getHeavyAdIssues()].map(r => r.details().resolution).sort();
        assert.deepStrictEqual(resolutions, [
            "HeavyAdBlocked" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdBlocked */,
            "HeavyAdWarning" /* Protocol.Audits.HeavyAdResolutionStatus.HeavyAdWarning */,
        ]);
    });
    const scriptId1 = '1';
    describe('IssueAggregator', () => {
        it('aggregates affected locations correctly', () => {
            const model = createModel();
            const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromAffectedLocations([{ url: 'foo', lineNumber: 1, columnNumber: 1 }]);
            const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromAffectedLocations([
                { url: 'foo', lineNumber: 1, columnNumber: 1 },
                { url: 'foo', lineNumber: 1, columnNumber: 12 },
            ]);
            const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromAffectedLocations([
                { url: 'bar', lineNumber: 1, columnNumber: 1 },
                { url: 'baz', lineNumber: 1, columnNumber: 1 },
            ]);
            const issue4 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue.createFromAffectedLocations([
                { url: 'bar', lineNumber: 1, columnNumber: 1, scriptId: scriptId1 },
                { url: 'foo', lineNumber: 2, columnNumber: 1 },
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_4__.MockIssuesManager([]);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(mockManager);
            for (const issue of [issue1, issue2, issue3, issue4]) {
                mockManager.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issuesModel: model, issue: issue });
            }
            const issues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(issues.length, 1);
            const locations = [...issues[0].sources()].sort((x, y) => JSON.stringify(x).localeCompare(JSON.stringify(y)));
            assert.deepStrictEqual(locations, [
                { url: 'bar', lineNumber: 1, columnNumber: 1, scriptId: scriptId1 },
                { url: 'bar', lineNumber: 1, columnNumber: 1 },
                { url: 'baz', lineNumber: 1, columnNumber: 1 },
                { url: 'foo', lineNumber: 1, columnNumber: 1 },
                { url: 'foo', lineNumber: 1, columnNumber: 12 },
                { url: 'foo', lineNumber: 2, columnNumber: 1 },
            ]);
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IssueAggregator', () => {
    let hideIssueByCodeSetting;
    let showThirdPartyIssuesSetting;
    let issuesManager;
    let model;
    let aggregator;
    beforeEach(() => {
        hideIssueByCodeSetting =
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('hide by code', {});
        showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', false);
        issuesManager = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_6__.IssueAggregator.IssueAggregator(issuesManager);
    });
    it('aggregates hidden issues correctly', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 2);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 2);
    });
    it('aggregates hidden issues correctly on updating settings', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 3);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 1);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 2);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 2);
    });
    it('aggregates hidden issues correctly when issues get unhidden', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'UnhiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 4);
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 0);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'UnhiddenStubIssue1': "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 1);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 3);
    });
    it('aggregates hidden issues correctly when all issues get unhidden', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'UnhiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 4);
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 0);
        issuesManager.unhideAllIssues();
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 4);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 0);
    });
});
//# sourceMappingURL=IssueAggregator.test.js.map

/***/ }),

/***/ "./panels/issues/IssueRevealer.js":
/*!****************************************!*\
  !*** ./panels/issues/IssueRevealer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueRevealer: () => (/* binding */ IssueRevealer)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class IssueRevealer {
    async reveal(issue) {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().showView('issues-pane');
        const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().view('issues-pane');
        if (view) {
            const issuesPane = await view.widget();
            if (issuesPane instanceof _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__.IssuesPane) {
                await issuesPane.reveal(issue);
            }
            else {
                throw new Error('Expected issues pane to be an instance of IssuesPane');
            }
        }
    }
}
//# sourceMappingURL=IssueRevealer.js.map

/***/ }),

/***/ "./panels/issues/issues.js":
/*!*********************************!*\
  !*** ./panels/issues/issues.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueAggregator: () => (/* reexport module object */ _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   IssueRevealer: () => (/* reexport module object */ _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   IssueView: () => (/* reexport module object */ _IssueView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   IssuesPane: () => (/* reexport module object */ _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAggregator.js */ "./panels/issues/IssueAggregator.js");
/* harmony import */ var _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRevealer.js */ "./panels/issues/IssueRevealer.js");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssuesPane.js */ "./panels/issues/IssuesPane.js");
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueView.js */ "./panels/issues/IssueView.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





//# sourceMappingURL=issues.js.map

/***/ }),

/***/ "./testing/MockIssuesManager.js":
/*!**************************************!*\
  !*** ./testing/MockIssuesManager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesManager: () => (/* binding */ MockIssuesManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */ var _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockIssuesModel.js */ "./testing/MockIssuesModel.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockIssuesManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    mockIssues;
    issueCounts = new Map([
        ["Improvement" /* IssuesManager.Issue.IssueKind.Improvement */, 0],
        ["BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */, 1],
        ["PageError" /* IssuesManager.Issue.IssueKind.PageError */, 2],
    ]);
    // An empty model to pass along for the IssuesManager.Events.IssueAdded event.
    mockModel = new _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([]);
    constructor(issues) {
        super();
        this.mockIssues = Array.from(issues);
    }
    issues() {
        return this.mockIssues;
    }
    getIssueById(id) {
        for (const issue of this.mockIssues) {
            if (issue.getIssueId() === id) {
                return issue;
            }
        }
        return null;
    }
    numberOfIssues(kind) {
        if (kind) {
            return this.issueCounts.get(kind) ?? 0;
        }
        return Array.from(this.issueCounts.values()).reduce((sum, v) => sum + v, 0);
    }
    setNumberOfIssues(counts) {
        this.issueCounts = counts;
    }
    incrementIssueCountsOfAllKinds() {
        for (const [key, value] of this.issueCounts) {
            this.issueCounts.set(key, value + 1);
        }
        this.dispatchEventToListeners("IssuesCountUpdated" /* IssuesManager.IssuesManager.Events.IssuesCountUpdated */);
    }
    addIssue(mockIssue) {
        this.mockIssues.push(mockIssue);
        this.dispatchEventToListeners("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */, { issue: mockIssue, issuesModel: this.mockModel });
    }
}
//# sourceMappingURL=MockIssuesManager.js.map

/***/ }),

/***/ "./testing/MockIssuesModel.js":
/*!************************************!*\
  !*** ./testing/MockIssuesModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesModel: () => (/* binding */ MockIssuesModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MockIssuesModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    mockIssues;
    constructor(issues) {
        super();
        this.mockIssues = issues;
    }
    issues() {
        return this.mockIssues;
    }
    target() {
        return { id: () => 'fake-id' };
    }
}
//# sourceMappingURL=MockIssuesModel.js.map

/***/ }),

/***/ "./testing/StubIssue.js":
/*!******************************!*\
  !*** ./testing/StubIssue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StubIssue: () => (/* binding */ StubIssue),
/* harmony export */   ThirdPartyStubIssue: () => (/* binding */ ThirdPartyStubIssue),
/* harmony export */   mkInspectorCspIssue: () => (/* binding */ mkInspectorCspIssue)
/* harmony export */ });
/* harmony import */ var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./models/issues_manager/Issue.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line rulesdir/es_modules_import

class StubIssue extends _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__.Issue {
    requestIds;
    cookieNames;
    issueKind;
    locations = [];
    mockIssueId;
    mockIssueCategory;
    constructor(code, requestIds, cookieNames, issueKind = "Improvement" /* IssueKind.Improvement */) {
        super(code);
        this.requestIds = requestIds;
        this.cookieNames = cookieNames;
        this.issueKind = issueKind;
    }
    getDescription() {
        return {
            file: '',
            links: [],
        };
    }
    primaryKey() {
        return `${this.code()}-(${this.cookieNames.join(';')})-(${this.requestIds.join(';')})`;
    }
    requests() {
        return this.requestIds.map(id => {
            return { requestId: id, url: '' };
        });
    }
    getCategory() {
        return this.mockIssueCategory ? this.mockIssueCategory : "Other" /* IssueCategory.Other */;
    }
    sources() {
        return this.locations;
    }
    getKind() {
        return this.issueKind;
    }
    cookies() {
        return this.cookieNames.map(name => {
            return { name, domain: '', path: '' };
        });
    }
    getIssueId() {
        return this.mockIssueId;
    }
    static createFromRequestIds(requestIds) {
        return new StubIssue('StubIssue', requestIds, []);
    }
    static createFromCookieNames(cookieNames) {
        return new StubIssue('StubIssue', [], cookieNames);
    }
    static createFromIssueKinds(issueKinds) {
        return issueKinds.map(k => new StubIssue('StubIssue', [], [], k));
    }
    static createFromAffectedLocations(locations) {
        const issue = new StubIssue('StubIssue', [], []);
        issue.locations = locations;
        return issue;
    }
    static createFromIssueId(issueId) {
        const issue = new StubIssue('StubIssue', [], []);
        issue.mockIssueId = issueId;
        return issue;
    }
    static createCookieIssue(code) {
        const issue = new StubIssue(code, [], []);
        issue.mockIssueCategory = "Cookie" /* IssueCategory.Cookie */;
        return issue;
    }
}
class ThirdPartyStubIssue extends StubIssue {
    isThirdParty;
    constructor(code, isThirdParty) {
        super(code, [], []);
        this.isThirdParty = isThirdParty;
    }
    isCausedByThirdParty() {
        return this.isThirdParty;
    }
}
function mkInspectorCspIssue(blockedURL) {
    return {
        code: "ContentSecurityPolicyIssue" /* Protocol.Audits.InspectorIssueCode.ContentSecurityPolicyIssue */,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: "kURLViolation" /* Protocol.Audits.ContentSecurityPolicyViolationType.KURLViolation */,
                blockedURL,
            },
        },
    };
}
//# sourceMappingURL=StubIssue.js.map

/***/ })

}]);