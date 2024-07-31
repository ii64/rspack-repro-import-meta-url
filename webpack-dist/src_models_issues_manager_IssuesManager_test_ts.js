"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_issues_manager_IssuesManager_test_ts"],{

/***/ "./src/models/issues_manager/IssuesManager.test.ts":
/*!*********************************************************!*\
  !*** ./src/models/issues_manager/IssuesManager.test.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./src/testing/ResourceTreeHelpers.ts");
/* harmony import */ var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./src/testing/StubIssue.ts");
/* harmony import */ var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('IssuesManager', () => {
    let target;
    let model;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        const maybeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        assert.exists(maybeModel);
        model = maybeModel;
    });
    it('collects issues from an issues model', () => {
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        const dispatchedIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.IssueAdded, event => dispatchedIssues.push(event.data.issue));
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: model, inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.mkInspectorCspIssue)('url1') });
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: model, inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.mkInspectorCspIssue)('url2') });
        const expected = ['ContentSecurityPolicyIssue::kURLViolation', 'ContentSecurityPolicyIssue::kURLViolation'];
        assert.deepStrictEqual(dispatchedIssues.map(i => i.code()), expected);
        const issueCodes = Array.from(issuesManager.issues()).map(r => r.code());
        assert.deepStrictEqual(issueCodes, expected);
    });
    function getBlockedUrl(issue) {
        const cspIssue = issue;
        return cspIssue.details().blockedURL;
    }
    function assertOutOfScopeIssuesAreFiltered() {
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        const dispatchedIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.IssueAdded, event => dispatchedIssues.push(event.data.issue));
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: model, inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.mkInspectorCspIssue)('url1') });
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ subtype: 'prerender' });
        const prerenderModel = prerenderTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        assert.exists(prerenderModel);
        prerenderModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: prerenderModel, inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.mkInspectorCspIssue)('url2') });
        const expected = ['url1'];
        assert.deepStrictEqual(dispatchedIssues.map(getBlockedUrl), expected);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), expected);
        return { issuesManager, prerenderTarget };
    }
    it('updates filtered issues when switching scope', () => {
        const { issuesManager, prerenderTarget } = assertOutOfScopeIssuesAreFiltered();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), ['url2']);
    });
    it('keeps issues of prerendered page upon activation', () => {
        const { issuesManager, prerenderTarget } = assertOutOfScopeIssuesAreFiltered();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.activate)(prerenderTarget);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), ['url2']);
    });
    const updatesOnPrimaryPageChange = (primary) => () => {
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: model, inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.mkInspectorCspIssue)('url1') });
        assert.strictEqual(issuesManager.numberOfIssues(), 1);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(primary ? target : (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ subtype: 'prerender' })));
        assert.strictEqual(issuesManager.numberOfIssues(), primary ? 0 : 1);
    };
    it('clears issues after primary page navigation', updatesOnPrimaryPageChange(true));
    it('does not clear issues after non-primary page navigation', updatesOnPrimaryPageChange(false));
    it('filters third-party issues when the third-party issues setting is false, includes them otherwise', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyStubIssue('AllowedStubIssue1', false),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyStubIssue('StubIssue2', true),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyStubIssue('AllowedStubIssue3', false),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.ThirdPartyStubIssue('StubIssue4', true),
        ];
        const showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', false);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting);
        const firedIssueAddedEventCodes = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.IssueAdded, event => firedIssueAddedEventCodes.push(event.data.issue.code()));
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        let issueCodes = Array.from(issuesManager.issues()).map(i => i.code());
        assert.deepStrictEqual(issueCodes, ['AllowedStubIssue1', 'AllowedStubIssue3']);
        assert.deepStrictEqual(firedIssueAddedEventCodes, ['AllowedStubIssue1', 'AllowedStubIssue3']);
        showThirdPartyIssuesSetting.set(true);
        issueCodes = Array.from(issuesManager.issues()).map(i => i.code());
        assert.deepStrictEqual(issueCodes, ['AllowedStubIssue1', 'StubIssue2', 'AllowedStubIssue3', 'StubIssue4']);
    });
    it('reports issue counts by kind', () => {
        const issue1 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('StubIssue1', ['id1'], [], _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.Improvement);
        const issue2 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('StubIssue1', ['id2'], [], _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.Improvement);
        const issue3 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('StubIssue1', ['id3'], [], _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.BreakingChange);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        issuesManager.addIssue(model, issue1);
        issuesManager.addIssue(model, issue2);
        issuesManager.addIssue(model, issue3);
        assert.deepStrictEqual(issuesManager.numberOfIssues(), 3);
        assert.deepStrictEqual(issuesManager.numberOfIssues(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.Improvement), 2);
        assert.deepStrictEqual(issuesManager.numberOfIssues(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.BreakingChange), 1);
        assert.deepStrictEqual(issuesManager.numberOfIssues(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.Issue.IssueKind.PageError), 0);
    });
    describe('instance', () => {
        it('throws an Error if its not the first instance created with "ensureFirst" set', () => {
            _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager.instance();
            assert.throws(() => _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager.instance({ forceNew: true, ensureFirst: true }));
            assert.throws(() => _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager.instance({ forceNew: false, ensureFirst: true }));
        });
    });
    it('hides issues added after setting has been initialised', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        const hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('hide by code', {});
        const showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', true);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        const hiddenIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.IssueAdded, event => {
            if (event.data.issue.isHidden()) {
                hiddenIssues.push(event.data.issue.code());
            }
        });
        // This Setting can either have been initialised in a previous Devtools session and retained
        // through to a new session.
        // OR
        // These settings have been updated by clicking on "hide issue" and cause the updateHiddenIssues
        // method to be called. These issues are being added to the IssuesManager after this has happened.
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        assert.deepStrictEqual(hiddenIssues, ['HiddenStubIssue1', 'HiddenStubIssue2']);
    });
    it('hides issues present in IssuesManager when setting is updated', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        const hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('hide by code', {});
        const showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', true);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        let hiddenIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.FullUpdateRequired, () => {
            hiddenIssues = [];
            for (const issue of issuesManager.issues()) {
                if (issue.isHidden()) {
                    hiddenIssues.push(issue.code());
                }
            }
        });
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        // Setting is updated by clicking on "hide issue".
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        assert.deepStrictEqual(hiddenIssues, ['HiddenStubIssue1']);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        assert.deepStrictEqual(hiddenIssues, ['HiddenStubIssue1', 'HiddenStubIssue2']);
    });
    it('unhides issues present in IssuesManager when setting is updated', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        const hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('hide by code', {});
        const showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', true);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        let unhiddenIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.FullUpdateRequired, () => {
            unhiddenIssues = [];
            for (const issue of issuesManager.issues()) {
                if (!issue.isHidden()) {
                    unhiddenIssues.push(issue.code());
                }
            }
        });
        // Setting updated by clicking on "unhide issue"
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Unhidden,
            'UnhiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        assert.deepStrictEqual(unhiddenIssues, ['UnhiddenStubIssue1']);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Unhidden,
            'UnhiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Unhidden,
        });
        assert.deepStrictEqual(unhiddenIssues, ['UnhiddenStubIssue1', 'UnhiddenStubIssue2']);
    });
    it('unhides all issues correctly', () => {
        const issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_5__.StubIssue('UnhiddenStubIssue2', [], []),
        ];
        const hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('hide by code', {});
        const showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('third party flag', true);
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        for (const issue of issues) {
            issuesManager.addIssue(model, issue);
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'HiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue1': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
            'UnhiddenStubIssue2': _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssueStatus.Hidden,
        });
        let unhiddenIssues = [];
        issuesManager.addEventListener(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.FullUpdateRequired, () => {
            unhiddenIssues = [];
            for (const issue of issuesManager.issues()) {
                if (!issue.isHidden()) {
                    unhiddenIssues.push(issue.code());
                }
            }
        });
        issuesManager.unhideAllIssues();
        assert.deepStrictEqual(unhiddenIssues, ['HiddenStubIssue1', 'HiddenStubIssue2', 'UnhiddenStubIssue1', 'UnhiddenStubIssue2']);
    });
    it('send update event on scope change', async () => {
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        const updateRequired = issuesManager.once(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.Events.FullUpdateRequired);
        const anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
        await updateRequired;
    });
    it('clears BounceTrackingIssue only on user-initiated navigation', () => {
        const issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.IssuesManager.IssuesManager();
        const issue = {
            code: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Audits.InspectorIssueCode.BounceTrackingIssue,
            details: {
                bounceTrackingIssueDetails: {
                    trackingSites: ['example_1.test'],
                },
            },
        };
        model.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.Events.IssueAdded, { issuesModel: model, inspectorIssue: issue });
        assert.strictEqual(issuesManager.numberOfIssues(), 1);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Network.requestWillBeSent', {
            requestId: 'requestId1',
            loaderId: 'loaderId1',
            request: { url: 'http://example.com' },
            hasUserGesture: false,
        });
        const frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)(frame, { loaderId: 'loaderId1' });
        assert.strictEqual(issuesManager.numberOfIssues(), 1);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Network.requestWillBeSent', {
            requestId: 'requestId2',
            loaderId: 'loaderId2',
            request: { url: 'http://example.com/page' },
            hasUserGesture: true,
        });
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)(frame, { loaderId: 'loaderId2' });
        assert.strictEqual(issuesManager.numberOfIssues(), 0);
    });
});


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