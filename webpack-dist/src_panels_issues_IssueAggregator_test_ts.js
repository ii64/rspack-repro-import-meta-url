"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_IssueAggregator_test_ts"],{

/***/ "./src/panels/issues/IssueAggregator.test.ts":
/*!***************************************************!*\
  !*** ./src/panels/issues/IssueAggregator.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockIssuesManager.js */ "./src/testing/MockIssuesManager.ts");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./src/testing/StubIssue.ts");
/* harmony import */ var _issues_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./issues.js */ "./src/panels/issues/issues.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('AggregatedIssue', () => {
    const aggregationKey = 'key';
    it('deduplicates network requests across issues', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id1', 'id2']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id1']);
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue1);
        aggregatedIssue.addInstance(issue2);
        const actualRequestIds = [...aggregatedIssue.requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(actualRequestIds, ['id1', 'id2']);
    });
    it('deduplicates affected cookies across issues', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromCookieNames(['cookie1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromCookieNames(['cookie2']);
        const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromCookieNames(['cookie1', 'cookie2']);
        const aggregatedIssue = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.AggregatedIssue('code', aggregationKey);
        aggregatedIssue.addInstance(issue1);
        aggregatedIssue.addInstance(issue2);
        aggregatedIssue.addInstance(issue3);
        const actualCookieNames = [...aggregatedIssue.cookies()].map(c => c.name).sort();
        assert.deepStrictEqual(actualCookieNames, ['cookie1', 'cookie2']);
    });
});
function createModel() {
    const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
    const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
    assert.exists(model);
    return model;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('IssueAggregator', () => {
    it('deduplicates issues with the same code', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id2']);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager([]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const requestIds = [...issues[0].requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(requestIds, ['id1', 'id2']);
    });
    it('deduplicates issues with the same code added before its creation', () => {
        const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id1']);
        const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id2']);
        const issue1b = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id1']); // Duplicate id.
        const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromRequestIds(['id3']);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager([issue1b, issue3]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const requestIds = [...issues[0].requests()].map(r => r.requestId).sort();
        assert.deepStrictEqual(requestIds, ['id1', 'id2', 'id3']);
    });
    it('keeps issues with different codes separate', () => {
        const issue1 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('codeA', ['id1'], []);
        const issue2 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('codeB', ['id1'], []);
        const issue1b = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('codeC', ['id1'], []);
        const issue3 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('codeA', ['id1'], []);
        const model = createModel();
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager([issue1b, issue3]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 3);
        const issueCodes = issues.map(r => r.aggregationKey().toString()).sort((a, b) => a.localeCompare(b));
        assert.deepStrictEqual(issueCodes, ['codeA', 'codeB', 'codeC']);
    });
    describe('aggregates issue kind', () => {
        it('for a single issue', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromIssueKinds([_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement);
        });
        it('for issues of two different kinds', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromIssueKinds([
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement,
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange,
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement,
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange);
        });
        it('for issues of three different kinds', () => {
            const issues = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromIssueKinds([
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.BreakingChange,
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError,
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.Improvement,
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager(issues);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
            const aggregatedIssues = Array.from(aggregator.aggregatedIssues());
            assert.strictEqual(aggregatedIssues.length, 1);
            const aggregatedIssue = aggregatedIssues[0];
            assert.strictEqual(aggregatedIssue.getKind(), _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.Issue.IssueKind.PageError);
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('IssueAggregator', () => {
    it('aggregates heavy ad issues correctly', () => {
        const model = createModel();
        const details1 = {
            resolution: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdBlocked,
            reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdReason.CpuPeakLimit,
            frame: { frameId: 'main' },
        };
        const issue1 = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.HeavyAdIssue.HeavyAdIssue(details1, model);
        const details2 = {
            resolution: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdWarning,
            reason: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdReason.NetworkTotalLimit,
            frame: { frameId: 'main' },
        };
        const issue2 = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.HeavyAdIssue.HeavyAdIssue(details2, model);
        const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager([]);
        const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue1 });
        mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue2 });
        const issues = Array.from(aggregator.aggregatedIssues());
        assert.strictEqual(issues.length, 1);
        const resolutions = [...issues[0].getHeavyAdIssues()].map(r => r.details().resolution).sort();
        assert.deepStrictEqual(resolutions, [
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdBlocked,
            _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.HeavyAdResolutionStatus.HeavyAdWarning,
        ]);
    });
    const scriptId1 = '1';
    describe('IssueAggregator', () => {
        it('aggregates affected locations correctly', () => {
            const model = createModel();
            const issue1 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromAffectedLocations([{ url: 'foo', lineNumber: 1, columnNumber: 1 }]);
            const issue2 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromAffectedLocations([
                { url: 'foo', lineNumber: 1, columnNumber: 1 },
                { url: 'foo', lineNumber: 1, columnNumber: 12 },
            ]);
            const issue3 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromAffectedLocations([
                { url: 'bar', lineNumber: 1, columnNumber: 1 },
                { url: 'baz', lineNumber: 1, columnNumber: 1 },
            ]);
            const issue4 = _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue.createFromAffectedLocations([
                { url: 'bar', lineNumber: 1, columnNumber: 1, scriptId: scriptId1 },
                { url: 'foo', lineNumber: 2, columnNumber: 1 },
            ]);
            const mockManager = new _testing_MockIssuesManager_js__WEBPACK_IMPORTED_MODULE_5__.MockIssuesManager([]);
            const aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(mockManager);
            for (const issue of [issue1, issue2, issue3, issue4]) {
                mockManager.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.Events.IssueAdded, { issuesModel: model, issue: issue });
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
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('IssueAggregator', () => {
    let hideIssueByCodeSetting;
    let showThirdPartyIssuesSetting;
    let issuesManager;
    let model;
    let aggregator;
    beforeEach(() => {
        hideIssueByCodeSetting =
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('hide by code', {});
        showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createFakeSetting)('third party flag', false);
        issuesManager = new _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        aggregator = new _issues_js__WEBPACK_IMPORTED_MODULE_7__.IssueAggregator.IssueAggregator(issuesManager);
    });
    it('aggregates hidden issues correctly', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 2);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 2);
    });
    it('aggregates hidden issues correctly on updating settings', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 3);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 1);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 2);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 2);
    });
    it('aggregates hidden issues correctly when issues get unhidden', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 4);
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 0);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Unhidden,
            'UnhiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
        });
        assert.strictEqual(aggregator.numberOfAggregatedIssues(), 1);
        assert.strictEqual(aggregator.numberOfHiddenAggregatedIssues(), 3);
    });
    it('aggregates hidden issues correctly when all issues get unhidden', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_6__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue2': _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_2__.IssuesManager.IssueStatus.Hidden,
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


/***/ }),

/***/ "./src/panels/issues/IssueRevealer.ts":
/*!********************************************!*\
  !*** ./src/panels/issues/IssueRevealer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueRevealer: () => (/* binding */ IssueRevealer)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssuesPane.js */ "./src/panels/issues/IssuesPane.ts");
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


/***/ }),

/***/ "./src/panels/issues/issues.ts":
/*!*************************************!*\
  !*** ./src/panels/issues/issues.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssueAggregator: () => (/* reexport module object */ _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   IssueRevealer: () => (/* reexport module object */ _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   IssueView: () => (/* reexport module object */ _IssueView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   IssuesPane: () => (/* reexport module object */ _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _IssueAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IssueAggregator.js */ "./src/panels/issues/IssueAggregator.ts");
/* harmony import */ var _IssueRevealer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueRevealer.js */ "./src/panels/issues/IssueRevealer.ts");
/* harmony import */ var _IssuesPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssuesPane.js */ "./src/panels/issues/IssuesPane.ts");
/* harmony import */ var _IssueView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IssueView.js */ "./src/panels/issues/IssueView.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/***/ }),

/***/ "./src/testing/MockIssuesManager.ts":
/*!******************************************!*\
  !*** ./src/testing/MockIssuesManager.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesManager: () => (/* binding */ MockIssuesManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockIssuesModel.js */ "./src/testing/MockIssuesModel.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockIssuesManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueCounts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map([
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.Improvement, 0],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.BreakingChange, 1],
                [_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.Issue.IssueKind.PageError, 2],
            ])
        });
        // An empty model to pass along for the IssuesManager.Events.IssueAdded event.
        Object.defineProperty(this, "mockModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _MockIssuesModel_js__WEBPACK_IMPORTED_MODULE_2__.MockIssuesModel([])
        });
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
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssuesCountUpdated);
    }
    addIssue(mockIssue) {
        this.mockIssues.push(mockIssue);
        this.dispatchEventToListeners(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__.IssuesManager.Events.IssueAdded, { issue: mockIssue, issuesModel: this.mockModel });
    }
}


/***/ }),

/***/ "./src/testing/MockIssuesModel.ts":
/*!****************************************!*\
  !*** ./src/testing/MockIssuesModel.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockIssuesModel: () => (/* binding */ MockIssuesModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./src/core/common/common.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class MockIssuesModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(issues) {
        super();
        Object.defineProperty(this, "mockIssues", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.mockIssues = issues;
    }
    issues() {
        return this.mockIssues;
    }
    target() {
        return { id: () => 'fake-id' };
    }
}


/***/ }),

/***/ "./src/testing/StubIssue.ts":
/*!**********************************!*\
  !*** ./src/testing/StubIssue.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StubIssue: () => (/* binding */ StubIssue),
/* harmony export */   ThirdPartyStubIssue: () => (/* binding */ ThirdPartyStubIssue),
/* harmony export */   mkInspectorCspIssue: () => (/* binding */ mkInspectorCspIssue)
/* harmony export */ });
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./src/models/issues_manager/Issue.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// eslint-disable-next-line rulesdir/es_modules_import

class StubIssue extends _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.Issue {
    constructor(code, requestIds, cookieNames, issueKind = _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueKind.Improvement) {
        super(code);
        Object.defineProperty(this, "requestIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueKind", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "locations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "mockIssueId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mockIssueCategory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        return this.mockIssueCategory ? this.mockIssueCategory : _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueCategory.Other;
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
        issue.mockIssueCategory = _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_1__.IssueCategory.Cookie;
        return issue;
    }
}
class ThirdPartyStubIssue extends StubIssue {
    constructor(code, isThirdParty) {
        super(code, [], []);
        Object.defineProperty(this, "isThirdParty", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isThirdParty = isThirdParty;
    }
    isCausedByThirdParty() {
        return this.isThirdParty;
    }
}
function mkInspectorCspIssue(blockedURL) {
    return {
        code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.InspectorIssueCode.ContentSecurityPolicyIssue,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Audits.ContentSecurityPolicyViolationType.KURLViolation,
                blockedURL,
            },
        },
    };
}


/***/ })

}]);