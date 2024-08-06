"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_IssuesManager_test_js"], {
"./models/issues_manager/IssuesManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/StubIssue.js */ "./testing/StubIssue.js");
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('IssuesManager', function() {
    var getBlockedUrl = function getBlockedUrl(issue) {
        var cspIssue = issue;
        return cspIssue.details().blockedURL;
    };
    var assertOutOfScopeIssuesAreFiltered = function assertOutOfScopeIssuesAreFiltered() {
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
        var dispatchedIssues = [];
        issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , function(event) {
            return dispatchedIssues.push(event.data.issue);
        });
        model.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
            issuesModel: model,
            inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.mkInspectorCspIssue)('url1')
        });
        var prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            subtype: 'prerender'
        });
        var prerenderModel = prerenderTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        assert.exists(prerenderModel);
        prerenderModel.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
            issuesModel: prerenderModel,
            inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.mkInspectorCspIssue)('url2')
        });
        var expected = [
            'url1'
        ];
        assert.deepStrictEqual(dispatchedIssues.map(getBlockedUrl), expected);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), expected);
        return {
            issuesManager: issuesManager,
            prerenderTarget: prerenderTarget
        };
    };
    var target;
    var model;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        var maybeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.IssuesModel.IssuesModel);
        assert.exists(maybeModel);
        model = maybeModel;
    });
    it('collects issues from an issues model', function() {
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
        var dispatchedIssues = [];
        issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , function(event) {
            return dispatchedIssues.push(event.data.issue);
        });
        model.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
            issuesModel: model,
            inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.mkInspectorCspIssue)('url1')
        });
        model.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
            issuesModel: model,
            inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.mkInspectorCspIssue)('url2')
        });
        var expected = [
            'ContentSecurityPolicyIssue::kURLViolation',
            'ContentSecurityPolicyIssue::kURLViolation'
        ];
        assert.deepStrictEqual(dispatchedIssues.map(function(i) {
            return i.code();
        }), expected);
        var issueCodes = Array.from(issuesManager.issues()).map(function(r) {
            return r.code();
        });
        assert.deepStrictEqual(issueCodes, expected);
    });
    it('updates filtered issues when switching scope', function() {
        var _assertOutOfScopeIssuesAreFiltered = assertOutOfScopeIssuesAreFiltered(), issuesManager = _assertOutOfScopeIssuesAreFiltered.issuesManager, prerenderTarget = _assertOutOfScopeIssuesAreFiltered.prerenderTarget;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), [
            'url2'
        ]);
    });
    it('keeps issues of prerendered page upon activation', function() {
        var _assertOutOfScopeIssuesAreFiltered = assertOutOfScopeIssuesAreFiltered(), issuesManager = _assertOutOfScopeIssuesAreFiltered.issuesManager, prerenderTarget = _assertOutOfScopeIssuesAreFiltered.prerenderTarget;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.activate)(prerenderTarget);
        assert.deepStrictEqual(Array.from(issuesManager.issues()).map(getBlockedUrl), [
            'url2'
        ]);
    });
    var updatesOnPrimaryPageChange = function(primary) {
        return function() {
            var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
            model.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
                issuesModel: model,
                inspectorIssue: (0,_testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.mkInspectorCspIssue)('url1')
            });
            assert.strictEqual(issuesManager.numberOfIssues(), 1);
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(primary ? target : (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                subtype: 'prerender'
            })));
            assert.strictEqual(issuesManager.numberOfIssues(), primary ? 0 : 1);
        };
    };
    it('clears issues after primary page navigation', updatesOnPrimaryPageChange(true));
    it('does not clear issues after non-primary page navigation', updatesOnPrimaryPageChange(false));
    it('filters third-party issues when the third-party issues setting is false, includes them otherwise', function() {
        var issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.ThirdPartyStubIssue('AllowedStubIssue1', false),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.ThirdPartyStubIssue('StubIssue2', true),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.ThirdPartyStubIssue('AllowedStubIssue3', false),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.ThirdPartyStubIssue('StubIssue4', true)
        ];
        var showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('third party flag', false);
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting);
        var firedIssueAddedEventCodes = [];
        issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , function(event) {
            return firedIssueAddedEventCodes.push(event.data.issue.code());
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                issuesManager.addIssue(model, issue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var issueCodes = Array.from(issuesManager.issues()).map(function(i) {
            return i.code();
        });
        assert.deepStrictEqual(issueCodes, [
            'AllowedStubIssue1',
            'AllowedStubIssue3'
        ]);
        assert.deepStrictEqual(firedIssueAddedEventCodes, [
            'AllowedStubIssue1',
            'AllowedStubIssue3'
        ]);
        showThirdPartyIssuesSetting.set(true);
        issueCodes = Array.from(issuesManager.issues()).map(function(i) {
            return i.code();
        });
        assert.deepStrictEqual(issueCodes, [
            'AllowedStubIssue1',
            'StubIssue2',
            'AllowedStubIssue3',
            'StubIssue4'
        ]);
    });
    it('reports issue counts by kind', function() {
        var issue1 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('StubIssue1', [
            'id1'
        ], [], "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ );
        var issue2 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('StubIssue1', [
            'id2'
        ], [], "Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ );
        var issue3 = new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('StubIssue1', [
            'id3'
        ], [], "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ );
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
        issuesManager.addIssue(model, issue1);
        issuesManager.addIssue(model, issue2);
        issuesManager.addIssue(model, issue3);
        assert.deepStrictEqual(issuesManager.numberOfIssues(), 3);
        assert.deepStrictEqual(issuesManager.numberOfIssues("Improvement" /* IssuesManager.Issue.IssueKind.Improvement */ ), 2);
        assert.deepStrictEqual(issuesManager.numberOfIssues("BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ ), 1);
        assert.deepStrictEqual(issuesManager.numberOfIssues("PageError" /* IssuesManager.Issue.IssueKind.PageError */ ), 0);
    });
    describe('instance', function() {
        it('throws an Error if its not the first instance created with "ensureFirst" set', function() {
            _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager.instance();
            assert.throws(function() {
                return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager.instance({
                    forceNew: true,
                    ensureFirst: true
                });
            });
            assert.throws(function() {
                return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager.instance({
                    forceNew: false,
                    ensureFirst: true
                });
            });
        });
    });
    it('hides issues added after setting has been initialised', function() {
        var issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue2', [], [])
        ];
        var hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('hide by code', {});
        var showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('third party flag', true);
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        var hiddenIssues = [];
        issuesManager.addEventListener("IssueAdded" /* IssuesManager.IssuesManager.Events.IssueAdded */ , function(event) {
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
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                issuesManager.addIssue(model, issue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        assert.deepStrictEqual(hiddenIssues, [
            'HiddenStubIssue1',
            'HiddenStubIssue2'
        ]);
    });
    it('hides issues present in IssuesManager when setting is updated', function() {
        var issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue2', [], [])
        ];
        var hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('hide by code', {});
        var showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('third party flag', true);
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        var hiddenIssues = [];
        issuesManager.addEventListener("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */ , function() {
            hiddenIssues = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = issuesManager.issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var issue = _step.value;
                    if (issue.isHidden()) {
                        hiddenIssues.push(issue.code());
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                issuesManager.addIssue(model, issue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        // Setting is updated by clicking on "hide issue".
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        assert.deepStrictEqual(hiddenIssues, [
            'HiddenStubIssue1'
        ]);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        assert.deepStrictEqual(hiddenIssues, [
            'HiddenStubIssue1',
            'HiddenStubIssue2'
        ]);
    });
    it('unhides issues present in IssuesManager when setting is updated', function() {
        var issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue2', [], [])
        ];
        var hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('hide by code', {});
        var showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('third party flag', true);
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                issuesManager.addIssue(model, issue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        var unhiddenIssues = [];
        issuesManager.addEventListener("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */ , function() {
            unhiddenIssues = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = issuesManager.issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var issue = _step.value;
                    if (!issue.isHidden()) {
                        unhiddenIssues.push(issue.code());
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        // Setting updated by clicking on "unhide issue"
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue1': "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */ ,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        assert.deepStrictEqual(unhiddenIssues, [
            'UnhiddenStubIssue1'
        ]);
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue1': "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */ ,
            'UnhiddenStubIssue2': "Unhidden" /* IssuesManager.IssuesManager.IssueStatus.Unhidden */ 
        });
        assert.deepStrictEqual(unhiddenIssues, [
            'UnhiddenStubIssue1',
            'UnhiddenStubIssue2'
        ]);
    });
    it('unhides all issues correctly', function() {
        var issues = [
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('HiddenStubIssue2', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue1', [], []),
            new _testing_StubIssue_js__WEBPACK_IMPORTED_MODULE_4__.StubIssue('UnhiddenStubIssue2', [], [])
        ];
        var hideIssueByCodeSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('hide by code', {});
        var showThirdPartyIssuesSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('third party flag', true);
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager(showThirdPartyIssuesSetting, hideIssueByCodeSetting);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = issues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var issue = _step.value;
                issuesManager.addIssue(model, issue);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        hideIssueByCodeSetting.set({
            'HiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'HiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue1': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ ,
            'UnhiddenStubIssue2': "Hidden" /* IssuesManager.IssuesManager.IssueStatus.Hidden */ 
        });
        var unhiddenIssues = [];
        issuesManager.addEventListener("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */ , function() {
            unhiddenIssues = [];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = issuesManager.issues()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var issue = _step.value;
                    if (!issue.isHidden()) {
                        unhiddenIssues.push(issue.code());
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        issuesManager.unhideAllIssues();
        assert.deepStrictEqual(unhiddenIssues, [
            'HiddenStubIssue1',
            'HiddenStubIssue2',
            'UnhiddenStubIssue1',
            'UnhiddenStubIssue2'
        ]);
    });
    it('send update event on scope change', /*#__PURE__*/ _async_to_generator(function() {
        var issuesManager, updateRequired, anotherTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
                    updateRequired = issuesManager.once("FullUpdateRequired" /* IssuesManager.IssuesManager.Events.FullUpdateRequired */ );
                    anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(anotherTarget);
                    return [
                        4,
                        updateRequired
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('clears BounceTrackingIssue only on user-initiated navigation', function() {
        var issuesManager = new _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.IssuesManager.IssuesManager();
        var issue = {
            code: "BounceTrackingIssue" /* Protocol.Audits.InspectorIssueCode.BounceTrackingIssue */ ,
            details: {
                bounceTrackingIssueDetails: {
                    trackingSites: [
                        'example_1.test'
                    ]
                }
            }
        };
        model.dispatchEventToListeners("IssueAdded" /* SDK.IssuesModel.Events.IssueAdded */ , {
            issuesModel: model,
            inspectorIssue: issue
        });
        assert.strictEqual(issuesManager.numberOfIssues(), 1);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Network.requestWillBeSent', {
            requestId: 'requestId1',
            loaderId: 'loaderId1',
            request: {
                url: 'http://example.com'
            },
            hasUserGesture: false
        });
        var frame = (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target);
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)(frame, {
            loaderId: 'loaderId1'
        });
        assert.strictEqual(issuesManager.numberOfIssues(), 1);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Network.requestWillBeSent', {
            requestId: 'requestId2',
            loaderId: 'loaderId2',
            request: {
                url: 'http://example.com/page'
            },
            hasUserGesture: true
        });
        (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)(frame, {
            loaderId: 'loaderId2'
        });
        assert.strictEqual(issuesManager.numberOfIssues(), 0);
    });
}); //# sourceMappingURL=IssuesManager.test.js.map


}),
"./testing/StubIssue.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StubIssue: function() { return StubIssue; },
  ThirdPartyStubIssue: function() { return ThirdPartyStubIssue; },
  mkInspectorCspIssue: function() { return mkInspectorCspIssue; }
});
/* harmony import */var _models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/issues_manager/Issue.js */ "./models/issues_manager/Issue.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line rulesdir/es_modules_import
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}

var StubIssue = /*#__PURE__*/ function(Issue) {
    "use strict";
    _inherits(StubIssue, Issue);
    var _super = _create_super(StubIssue);
    function StubIssue(code, requestIds, cookieNames) {
        var issueKind = arguments.length > 3 && arguments[3] !== void 0 /* IssueKind.Improvement */  ? arguments[3] : "Improvement";
        _class_call_check(this, StubIssue);
        var _this;
        _this = _super.call(this, code);
        _define_property(_assert_this_initialized(_this), "requestIds", void 0);
        _define_property(_assert_this_initialized(_this), "cookieNames", void 0);
        _define_property(_assert_this_initialized(_this), "issueKind", void 0);
        _define_property(_assert_this_initialized(_this), "locations", []);
        _define_property(_assert_this_initialized(_this), "mockIssueId", void 0);
        _define_property(_assert_this_initialized(_this), "mockIssueCategory", void 0);
        _this.requestIds = requestIds;
        _this.cookieNames = cookieNames;
        _this.issueKind = issueKind;
        return _this;
    }
    _create_class(StubIssue, [
        {
            key: "getDescription",
            value: function getDescription() {
                return {
                    file: '',
                    links: []
                };
            }
        },
        {
            key: "primaryKey",
            value: function primaryKey() {
                return "".concat(this.code(), "-(").concat(this.cookieNames.join(';'), ")-(").concat(this.requestIds.join(';'), ")");
            }
        },
        {
            key: "requests",
            value: function requests() {
                return this.requestIds.map(function(id) {
                    return {
                        requestId: id,
                        url: ''
                    };
                });
            }
        },
        {
            key: "getCategory",
            value: function getCategory() {
                return this.mockIssueCategory ? this.mockIssueCategory : "Other" /* IssueCategory.Other */ ;
            }
        },
        {
            key: "sources",
            value: function sources() {
                return this.locations;
            }
        },
        {
            key: "getKind",
            value: function getKind() {
                return this.issueKind;
            }
        },
        {
            key: "cookies",
            value: function cookies() {
                return this.cookieNames.map(function(name) {
                    return {
                        name: name,
                        domain: '',
                        path: ''
                    };
                });
            }
        },
        {
            key: "getIssueId",
            value: function getIssueId() {
                return this.mockIssueId;
            }
        }
    ], [
        {
            key: "createFromRequestIds",
            value: function createFromRequestIds(requestIds) {
                return new StubIssue('StubIssue', requestIds, []);
            }
        },
        {
            key: "createFromCookieNames",
            value: function createFromCookieNames(cookieNames) {
                return new StubIssue('StubIssue', [], cookieNames);
            }
        },
        {
            key: "createFromIssueKinds",
            value: function createFromIssueKinds(issueKinds) {
                return issueKinds.map(function(k) {
                    return new StubIssue('StubIssue', [], [], k);
                });
            }
        },
        {
            key: "createFromAffectedLocations",
            value: function createFromAffectedLocations(locations) {
                var issue = new StubIssue('StubIssue', [], []);
                issue.locations = locations;
                return issue;
            }
        },
        {
            key: "createFromIssueId",
            value: function createFromIssueId(issueId) {
                var issue = new StubIssue('StubIssue', [], []);
                issue.mockIssueId = issueId;
                return issue;
            }
        },
        {
            key: "createCookieIssue",
            value: function createCookieIssue(code) {
                var issue = new StubIssue(code, [], []);
                issue.mockIssueCategory = "Cookie" /* IssueCategory.Cookie */ ;
                return issue;
            }
        }
    ]);
    return StubIssue;
}(_models_issues_manager_Issue_js__WEBPACK_IMPORTED_MODULE_0__.Issue);
var ThirdPartyStubIssue = /*#__PURE__*/ function(StubIssue) {
    "use strict";
    _inherits(ThirdPartyStubIssue, StubIssue);
    var _super = _create_super(ThirdPartyStubIssue);
    function ThirdPartyStubIssue(code, isThirdParty) {
        _class_call_check(this, ThirdPartyStubIssue);
        var _this;
        _this = _super.call(this, code, [], []);
        _define_property(_assert_this_initialized(_this), "isThirdParty", void 0);
        _this.isThirdParty = isThirdParty;
        return _this;
    }
    _create_class(ThirdPartyStubIssue, [
        {
            key: "isCausedByThirdParty",
            value: function isCausedByThirdParty() {
                return this.isThirdParty;
            }
        }
    ]);
    return ThirdPartyStubIssue;
}(StubIssue);
function mkInspectorCspIssue(blockedURL) {
    return {
        code: "ContentSecurityPolicyIssue" /* Protocol.Audits.InspectorIssueCode.ContentSecurityPolicyIssue */ ,
        details: {
            contentSecurityPolicyIssueDetails: {
                isReportOnly: true,
                violatedDirective: 'testdirective',
                contentSecurityPolicyViolationType: "kURLViolation" /* Protocol.Audits.ContentSecurityPolicyViolationType.KURLViolation */ ,
                blockedURL: blockedURL
            }
        }
    };
} //# sourceMappingURL=StubIssue.js.map


}),

}]);