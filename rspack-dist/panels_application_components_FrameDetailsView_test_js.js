"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_FrameDetailsView_test_js"], {
"./panels/application/components/FrameDetailsView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/expandable_list/expandable_list.js */ "./ui/components/expandable_list/expandable_list.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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










var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_7__.RenderCoordinator.RenderCoordinator.instance();
var makeFrame = function(target) {
    var newFrame = {
        url: 'https://www.example.com/path/page.html',
        securityOrigin: 'https://www.example.com',
        displayName: function() {
            return 'TestTitle';
        },
        unreachableUrl: function() {
            return '';
        },
        adFrameType: function() {
            return "none" /* Protocol.Page.AdFrameType.None */ ;
        },
        adFrameStatus: function() {
            return undefined;
        },
        getAdScriptId: function() {
            return '1';
        },
        resourceForURL: function() {
            return null;
        },
        isSecureContext: function() {
            return true;
        },
        isCrossOriginIsolated: function() {
            return true;
        },
        getCrossOriginIsolatedContextType: function() {
            return "NotIsolatedFeatureDisabled" /* Protocol.Page.CrossOriginIsolatedContextType.NotIsolatedFeatureDisabled */ ;
        },
        getSecureContextType: function() {
            return "SecureLocalhost" /* Protocol.Page.SecureContextType.SecureLocalhost */ ;
        },
        getGatedAPIFeatures: function() {
            return [
                "SharedArrayBuffers" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffers */ ,
                "SharedArrayBuffersTransferAllowed" /* Protocol.Page.GatedAPIFeatures.SharedArrayBuffersTransferAllowed */ 
            ];
        },
        getOwnerDOMNodeOrDocument: function() {
            return {
                nodeName: function() {
                    return 'iframe';
                }
            };
        },
        resourceTreeModel: function() {
            return target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
        },
        getCreationStackTraceData: function() {
            return {
                creationStackTrace: {
                    callFrames: [
                        {
                            functionName: 'function1',
                            url: 'http://www.example.com/script.js',
                            lineNumber: 15,
                            columnNumber: 10,
                            scriptId: 'someScriptId'
                        }
                    ]
                },
                creationStackTraceTarget: null
            };
        },
        getOriginTrials: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    [
                        {
                            trialName: 'AppCache',
                            status: 'Enabled',
                            tokensWithStatus: [
                                {
                                    status: 'Success',
                                    rawTokenText: 'Text',
                                    parsedToken: {
                                        trialName: 'AppCache',
                                        origin: 'https://foo.com',
                                        expiryTime: 1000,
                                        usageRestriction: 'None',
                                        isThirdParty: false,
                                        matchSubDomains: false
                                    }
                                }
                            ]
                        }
                    ]
                ];
            });
        }),
        getPermissionsPolicyState: function() {
            return null;
        },
        parentFrame: function() {
            return null;
        }
    };
    return newFrame;
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('FrameDetailsView', function() {
    it('renders with a title', /*#__PURE__*/ _async_to_generator(function() {
        var frame, component, report, titleElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    frame = makeFrame((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)());
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_9__.FrameDetailsView.FrameDetailsReportView(frame);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    void component.render();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.Report);
                    titleElement = report.shadowRoot.querySelector('.report-title');
                    assert.strictEqual(titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent, frame.displayName());
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders report keys and values', /*#__PURE__*/ _async_to_generator(function() {
        var workspace, targetManager, target, debuggerModel, frame, networkManager, component, keys, values, stackTrace, expandableList, stackTraceRows, stackTraceText, adScriptLink;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({
                        forceNew: true
                    });
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        resourceMapping: new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace),
                        targetManager: targetManager
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createTarget)();
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
                    assert.exists(debuggerModel);
                    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel, 'modelForDebuggerId').resolves(debuggerModel);
                    frame = makeFrame(target);
                    frame.adFrameType = function() {
                        return "root" /* Protocol.Page.AdFrameType.Root */ ;
                    };
                    frame.parentFrame = function() {
                        return {
                            getAdScriptId: function() {
                                return {
                                    scriptId: 'scriptId',
                                    debuggerId: '42'
                                };
                            }
                        };
                    };
                    networkManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
                    assert.exists(networkManager);
                    sinon.stub(networkManager, 'getSecurityIsolationStatus').resolves({
                        coep: {
                            value: "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */ ,
                            reportOnlyValue: "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */ 
                        },
                        coop: {
                            value: "SameOrigin" /* Protocol.Network.CrossOriginOpenerPolicyValue.SameOrigin */ ,
                            reportOnlyValue: "SameOrigin" /* Protocol.Network.CrossOriginOpenerPolicyValue.SameOrigin */ 
                        },
                        csp: [
                            {
                                source: "HTTP" /* Protocol.Network.ContentSecurityPolicySource.HTTP */ ,
                                isEnforced: true,
                                effectiveDirectives: 'base-uri \'self\'; object-src \'none\'; script-src \'strict-dynamic\' \'unsafe-inline\' https: http: \'nonce-GsVjHiIoejpPhMPOHDQZ90yc9eJn1s\' \'unsafe-eval\'; report-uri https://www.example.com/csp'
                            }
                        ]
                    });
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_9__.FrameDetailsView.FrameDetailsReportView(frame);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        component.render()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'URL',
                        'Origin',
                        'Owner Element',
                        'Frame Creation Stack Trace',
                        'Ad Status',
                        'Creator Ad Script',
                        'Secure Context',
                        'Cross-Origin Isolated',
                        'Cross-Origin Embedder Policy (COEP)',
                        'Cross-Origin Opener Policy (COOP)',
                        'Content-Security-Policy',
                        'SharedArrayBuffers',
                        'Measure Memory'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://www.example.com/path/page.html',
                        'https://www.example.com',
                        '<iframe>',
                        '',
                        '',
                        '',
                        'Yes\xA0Localhost is always a secure context',
                        'Yes',
                        'None',
                        'SameOrigin',
                        'HTTP headerbase-uri: \'self\'object-src: \'none\'script-src: \'strict-dynamic\', \'unsafe-inline\', https:, http:, \'nonce-GsVjHiIoejpPhMPOHDQZ90yc9eJn1s\', \'unsafe-eval\'report-uri: https://www.example.com/csp',
                        'available, transferable',
                        'available\xA0Learn more'
                    ]);
                    stackTrace = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(component, 'devtools-resources-stack-trace', _components_js__WEBPACK_IMPORTED_MODULE_9__.StackTrace.StackTrace);
                    assert.isNotNull(stackTrace.shadowRoot);
                    expandableList = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementWithinComponent)(stackTrace, 'devtools-expandable-list', _ui_components_expandable_list_expandable_list_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableList.ExpandableList);
                    assert.isNotNull(expandableList.shadowRoot);
                    stackTraceRows = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getElementsWithinComponent)(expandableList, 'devtools-stack-trace-row', _components_js__WEBPACK_IMPORTED_MODULE_9__.StackTrace.StackTraceRow);
                    stackTraceText = [];
                    stackTraceRows.forEach(function(row) {
                        assert.isNotNull(row.shadowRoot);
                        stackTraceText = stackTraceText.concat((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getCleanTextContentFromElements)(row.shadowRoot, '.stack-trace-row'));
                    });
                    assert.deepEqual(stackTraceText[0], 'function1\xA0@\xA0www.example.com/script.js:16');
                    adScriptLink = component.shadowRoot.querySelector('devtools-report-value.ad-script-link');
                    assert.exists(adScriptLink);
                    assert.strictEqual(adScriptLink.textContent, '');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=FrameDetailsView.test.js.map


}),
"./panels/application/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheView: function() { return /* reexport module object */ _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BounceTrackingMitigationsView: function() { return /* reexport module object */ _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__; },
  EndpointsGrid: function() { return /* reexport module object */ _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__; },
  FrameDetailsView: function() { return /* reexport module object */ _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__; },
  InterestGroupAccessGrid: function() { return /* reexport module object */ _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  OriginTrialTreeView: function() { return /* reexport module object */ _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__; },
  ProtocolHandlersView: function() { return /* reexport module object */ _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__; },
  ReportsGrid: function() { return /* reexport module object */ _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__; },
  ServiceWorkerRouterView: function() { return /* reexport module object */ _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__; },
  SharedStorageAccessGrid: function() { return /* reexport module object */ _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__; },
  SharedStorageMetadataView: function() { return /* reexport module object */ _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__; },
  StackTrace: function() { return /* reexport module object */ _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__; },
  StorageMetadataView: function() { return /* reexport module object */ _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__; },
  TrustTokensView: function() { return /* reexport module object */ _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__; }
});
/* harmony import */var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./panels/application/components/BackForwardCacheView.js");
/* harmony import */var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./panels/application/components/BounceTrackingMitigationsView.js");
/* harmony import */var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./panels/application/components/EndpointsGrid.js");
/* harmony import */var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./panels/application/components/FrameDetailsView.js");
/* harmony import */var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./panels/application/components/InterestGroupAccessGrid.js");
/* harmony import */var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./panels/application/components/ProtocolHandlersView.js");
/* harmony import */var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./panels/application/components/ReportsGrid.js");
/* harmony import */var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./panels/application/components/ServiceWorkerRouterView.js");
/* harmony import */var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./panels/application/components/SharedStorageAccessGrid.js");
/* harmony import */var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./panels/application/components/SharedStorageMetadataView.js");
/* harmony import */var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
/* harmony import */var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
/* harmony import */var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./panels/application/components/TrustTokensView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=components.js.map


}),

}]);