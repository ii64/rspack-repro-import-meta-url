"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_BackForwardCacheView_test_js"], {
"./panels/application/components/BackForwardCacheView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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








var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
function renderBackForwardCacheView() {
    return _renderBackForwardCacheView.apply(this, arguments);
}
function _renderBackForwardCacheView() {
    _renderBackForwardCacheView = _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_7__.BackForwardCacheView.BackForwardCacheView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                    return [
                        4,
                        component.render()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderBackForwardCacheView.apply(this, arguments);
}
function unpromisify(node) {
    return _unpromisify.apply(this, arguments);
}
function _unpromisify() {
    _unpromisify = _async_to_generator(function(node) {
        var result, children;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = {
                        treeNodeData: node.treeNodeData
                    };
                    if (!node.children) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        node.children()
                    ];
                case 1:
                    children = _state.sent();
                    return [
                        4,
                        Promise.all(children.map(function(child) {
                            return unpromisify(child);
                        }))
                    ];
                case 2:
                    result.children = _state.sent();
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _unpromisify.apply(this, arguments);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('BackForwardCacheView', function() {
    var target;
    var resourceTreeModel;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var tabTarget;
        return _ts_generator(this, function(_state) {
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
            });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                parentTarget: tabTarget,
                subtype: 'prerender'
            });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                parentTarget: tabTarget
            });
            resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
            return [
                2
            ];
        });
    }));
    it('updates BFCacheView on main frame navigation', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    _state.sent();
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target), {}, "BackForwardCacheRestore" /* Protocol.Page.NavigationType.BackForwardCacheRestore */ );
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates BFCacheView on BFCache detail update', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    _state.sent();
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.BackForwardCacheDetailsUpdated, (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getMainFrame)(target));
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders status if restored from BFCache', /*#__PURE__*/ _async_to_generator(function() {
        var _renderedStatus_textContent, component, renderedStatus;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel.mainFrame = {
                        url: 'https://www.example.com/',
                        backForwardCacheDetails: {
                            restoredFromCache: true,
                            explanations: []
                        }
                    };
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    component = _state.sent();
                    renderedStatus = component.shadowRoot.querySelector('devtools-report-section');
                    assert.strictEqual(renderedStatus === null || renderedStatus === void 0 ? void 0 : (_renderedStatus_textContent = renderedStatus.textContent) === null || _renderedStatus_textContent === void 0 ? void 0 : _renderedStatus_textContent.trim(), 'Successfully served from back/forward cache.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders explanations if not restorable from BFCache', /*#__PURE__*/ _async_to_generator(function() {
        var component, sectionHeaders, sectionHeadersText, sections, sectionsText, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel.mainFrame = {
                        url: 'https://www.example.com/',
                        backForwardCacheDetails: {
                            restoredFromCache: false,
                            explanations: [
                                {
                                    type: "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */ ,
                                    reason: "WebLocks" /* Protocol.Page.BackForwardCacheNotRestoredReason.WebLocks */ 
                                },
                                {
                                    type: "PageSupportNeeded" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.PageSupportNeeded */ ,
                                    reason: "ServiceWorkerUnregistration" /* Protocol.Page.BackForwardCacheNotRestoredReason.ServiceWorkerUnregistration */ 
                                },
                                {
                                    type: "Circumstantial" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.Circumstantial */ ,
                                    reason: "MainResourceHasCacheControlNoStore" /* Protocol.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore */ 
                                }
                            ]
                        }
                    };
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    component = _state.sent();
                    sectionHeaders = component.shadowRoot.querySelectorAll('devtools-report-section-header');
                    sectionHeadersText = Array.from(sectionHeaders).map(function(sectionHeader) {
                        var _sectionHeader_textContent;
                        return (_sectionHeader_textContent = sectionHeader.textContent) === null || _sectionHeader_textContent === void 0 ? void 0 : _sectionHeader_textContent.trim();
                    });
                    assert.deepStrictEqual(sectionHeadersText, [
                        'Actionable',
                        'Pending Support',
                        'Not Actionable'
                    ]);
                    sections = component.shadowRoot.querySelectorAll('devtools-report-section');
                    sectionsText = Array.from(sections).map(function(section) {
                        var _section_textContent;
                        return (_section_textContent = section.textContent) === null || _section_textContent === void 0 ? void 0 : _section_textContent.trim();
                    });
                    expected = [
                        'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
                        'Test back/forward cache',
                        'ServiceWorker was unregistered while a page was in back/forward cache.',
                        'Pages that use WebLocks are not currently eligible for back/forward cache.',
                        'Pages whose main resource has cache-control:no-store cannot enter back/forward cache.',
                        'Learn more: back/forward cache eligibility'
                    ];
                    assert.deepStrictEqual(sectionsText, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders explanation tree', /*#__PURE__*/ _async_to_generator(function() {
        var component, treeOutline, treeData, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel.mainFrame = {
                        url: 'https://www.example.com/',
                        backForwardCacheDetails: {
                            restoredFromCache: false,
                            explanationsTree: {
                                url: 'https://www.example.com',
                                explanations: [
                                    {
                                        type: "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */ ,
                                        reason: "WebLocks" /* Protocol.Page.BackForwardCacheNotRestoredReason.WebLocks */ 
                                    }
                                ],
                                children: [
                                    {
                                        url: 'https://www.example.com/frame.html',
                                        explanations: [
                                            {
                                                type: "Circumstantial" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.Circumstantial */ ,
                                                reason: "MainResourceHasCacheControlNoStore" /* Protocol.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore */ 
                                            }
                                        ],
                                        children: []
                                    }
                                ]
                            },
                            explanations: [
                                {
                                    type: "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */ ,
                                    reason: "WebLocks" /* Protocol.Page.BackForwardCacheNotRestoredReason.WebLocks */ 
                                },
                                {
                                    type: "Circumstantial" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.Circumstantial */ ,
                                    reason: "MainResourceHasCacheControlNoStore" /* Protocol.Page.BackForwardCacheNotRestoredReason.MainResourceHasCacheControlNoStore */ 
                                }
                            ]
                        }
                    };
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    component = _state.sent();
                    treeOutline = component.shadowRoot.querySelector('devtools-tree-outline');
                    assert.instanceOf(treeOutline, _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutline);
                    assert.isNotNull(treeOutline.shadowRoot);
                    return [
                        4,
                        Promise.all(treeOutline.data.tree.map(function(node) {
                            return unpromisify(node);
                        }))
                    ];
                case 2:
                    treeData = _state.sent();
                    expected = [
                        {
                            treeNodeData: {
                                text: '2 issues found in 2 frames.'
                            },
                            children: [
                                {
                                    treeNodeData: {
                                        text: '(2) https://www.example.com',
                                        iconName: 'frame'
                                    },
                                    children: [
                                        {
                                            treeNodeData: {
                                                text: 'WebLocks'
                                            }
                                        },
                                        {
                                            treeNodeData: {
                                                text: '(1) https://www.example.com/frame.html',
                                                iconName: 'iframe'
                                            },
                                            children: [
                                                {
                                                    treeNodeData: {
                                                        text: 'MainResourceHasCacheControlNoStore'
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ];
                    assert.deepStrictEqual(treeData, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders blocking details if available', /*#__PURE__*/ _async_to_generator(function() {
        var component, sectionHeaders, sectionHeadersText, sections, sectionsText, expected, details, items, detailsText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel.mainFrame = {
                        resourceForURL: function() {
                            return null;
                        },
                        url: 'https://www.example.com/',
                        backForwardCacheDetails: {
                            restoredFromCache: false,
                            explanations: [
                                {
                                    type: "SupportPending" /* Protocol.Page.BackForwardCacheNotRestoredReasonType.SupportPending */ ,
                                    reason: "WebLocks" /* Protocol.Page.BackForwardCacheNotRestoredReason.WebLocks */ ,
                                    details: [
                                        {
                                            url: 'https://www.example.com/index.html',
                                            lineNumber: 10,
                                            columnNumber: 5
                                        },
                                        {
                                            url: 'https://www.example.com/script.js',
                                            lineNumber: 15,
                                            columnNumber: 20
                                        }
                                    ]
                                }
                            ]
                        }
                    };
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    component = _state.sent();
                    sectionHeaders = component.shadowRoot.querySelectorAll('devtools-report-section-header');
                    sectionHeadersText = Array.from(sectionHeaders).map(function(sectionHeader) {
                        var _sectionHeader_textContent;
                        return (_sectionHeader_textContent = sectionHeader.textContent) === null || _sectionHeader_textContent === void 0 ? void 0 : _sectionHeader_textContent.trim();
                    });
                    assert.deepStrictEqual(sectionHeadersText, [
                        'Pending Support'
                    ]);
                    sections = component.shadowRoot.querySelectorAll('devtools-report-section');
                    sectionsText = Array.from(sections).map(function(section) {
                        var _section_textContent;
                        return (_section_textContent = section.textContent) === null || _section_textContent === void 0 ? void 0 : _section_textContent.trim();
                    });
                    expected = [
                        'Not served from back/forward cache: to trigger back/forward cache, use Chrome\'s back/forward buttons, or use the test button below to automatically navigate away and back.',
                        'Test back/forward cache',
                        'Pages that use WebLocks are not currently eligible for back/forward cache.',
                        'Learn more: back/forward cache eligibility'
                    ];
                    assert.deepStrictEqual(sectionsText, expected);
                    details = component.shadowRoot.querySelector('.details-list devtools-expandable-list');
                    details.shadowRoot.querySelector('button').click();
                    items = details.shadowRoot.querySelectorAll('.expandable-list-items .devtools-link');
                    detailsText = Array.from(items).map(function(detail) {
                        var _detail_textContent;
                        return (_detail_textContent = detail.textContent) === null || _detail_textContent === void 0 ? void 0 : _detail_textContent.trim();
                    });
                    assert.deepStrictEqual(detailsText, [
                        'www.example.com/index.html:11:6',
                        'www.example.com/script.js:16:21'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle delayed navigation history when testing for BFcache availability', /*#__PURE__*/ _async_to_generator(function() {
        var entries, stub, navigateToHistoryEntrySpy, component, button;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    entries = [
                        {
                            id: 5,
                            url: 'about:blank',
                            userTypedURL: 'about:blank',
                            title: '',
                            transitionType: "typed" /* Protocol.Page.TransitionType.Typed */ 
                        },
                        {
                            id: 8,
                            url: 'chrome://terms/',
                            userTypedURL: '',
                            title: '',
                            transitionType: "typed" /* Protocol.Page.TransitionType.Typed */ 
                        }
                    ];
                    stub = sinon.stub();
                    stub.onCall(0).returns({
                        entries: entries,
                        currentIndex: 0
                    });
                    stub.onCall(1).returns({
                        entries: entries,
                        currentIndex: 0
                    });
                    stub.onCall(2).returns({
                        entries: entries,
                        currentIndex: 0
                    });
                    stub.onCall(3).returns({
                        entries: entries,
                        currentIndex: 0
                    });
                    stub.onCall(4).returns({
                        entries: entries,
                        currentIndex: 1
                    });
                    resourceTreeModel.navigationHistory = stub;
                    resourceTreeModel.navigate = function(url) {
                        resourceTreeModel.frameNavigated({
                            url: url
                        }, undefined);
                        return Promise.resolve({
                            frameId: '',
                            getError: function getError() {}
                        });
                    };
                    resourceTreeModel.navigateToHistoryEntry = function(entry) {
                        resourceTreeModel.frameNavigated({
                            url: entry.url
                        }, undefined);
                    };
                    navigateToHistoryEntrySpy = sinon.spy(resourceTreeModel, 'navigateToHistoryEntry');
                    resourceTreeModel.storageKeyForFrame = function() {
                        return Promise.resolve(null);
                    };
                    resourceTreeModel.mainFrame = {
                        url: 'about:blank',
                        backForwardCacheDetails: {
                            restoredFromCache: true,
                            explanations: []
                        }
                    };
                    return [
                        4,
                        renderBackForwardCacheView()
                    ];
                case 1:
                    component = _state.sent();
                    button = component.shadowRoot.querySelector('[aria-label="Test back/forward cache"]');
                    assert.instanceOf(button, HTMLElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(button);
                    return [
                        4,
                        new Promise(function(resolve) {
                            var eventCounter = 0;
                            resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameNavigated, function() {
                                if (++eventCounter === 2) {
                                    resolve();
                                }
                            });
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(navigateToHistoryEntrySpy.calledOnceWithExactly(entries[0]));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=BackForwardCacheView.test.js.map


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