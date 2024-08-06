"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_UsedPreloadingView_test_js-ui_components_chrome_link-92656c"], {
"./panels/application/preloading/components/UsedPreloadingView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./panels/application/preloading/components/components.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_6__]);
_components_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2023 The Chromium Authors. All rights reserved.
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







var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
function renderUsedPreloadingView(data) {
    return _renderUsedPreloadingView.apply(this, arguments);
}
function _renderUsedPreloadingView() {
    _renderUsedPreloadingView = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.UsedPreloadingView.UsedPreloadingView();
                    component.data = data;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderUsedPreloadingView.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('UsedPreloadingView', function() {
    it('renderes prefetch used', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _badges__textContent, _badges_, _sections_3, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */ ,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 2);
                    assert.strictEqual(sections.length, 3);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Success');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'This page was successfully prefetched.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes prerender used', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _badges__textContent, _badges_, _sections_3, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prerendered.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ,
                                prerenderStatus: null,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 2);
                    assert.strictEqual(sections.length, 3);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Success');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'This page was successfully prerendered.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes prefetch failed', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _headers_2, _sections_3, _badges__textContent, _badges_, _sections_4, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prefetchStatus: "PrefetchFailedPerPageLimitExceeded" /* Protocol.Preload.PrefetchStatus.PrefetchFailedPerPageLimitExceeded */ ,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */ ,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 3);
                    assert.strictEqual(sections.length, 4);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Failure');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page attempted to prefetch this page\'s URL, but the prefetch failed, so a full navigation was performed instead.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Failure reason');
                    assert.include((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.textContent, 'The prefetch was not performed because the initiating page already has too many prefetches ongoing.');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_4 = sections[3]) === null || _sections_4 === void 0 ? void 0 : _sections_4.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes prerender failed', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _headers_2, _sections_3, _badges__textContent, _badges_, _sections_4, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prerendered.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */ ,
                                disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 3);
                    assert.strictEqual(sections.length, 4);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Failure');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Failure reason');
                    assert.include((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_4 = sections[3]) === null || _sections_4 === void 0 ? void 0 : _sections_4.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes prerender failed due to header mismatch', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections_, _headers_1, _sections_1, _headers_2, _headers_3, _sections_2, _badges__textContent, _badges_, _sections_3, data, component, headers, sections, grid, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prerendered.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "ActivationNavigationParameterMismatch" /* Protocol.Preload.PrerenderFinalStatus.ActivationNavigationParameterMismatch */ ,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: [
                                    {
                                        headerName: 'sec-ch-ua-platform',
                                        initialValue: 'Linux',
                                        activationValue: 'Android'
                                    },
                                    {
                                        headerName: 'sec-ch-ua-mobile',
                                        initialValue: '?0',
                                        activationValue: '?1'
                                    }
                                ],
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    grid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(component, 'devtools-resources-preloading-mismatched-headers-grid', _components_js__WEBPACK_IMPORTED_MODULE_6__.PreloadingMismatchedHeadersGrid.PreloadingMismatchedHeadersGrid);
                    assert.strictEqual(headers.length, 4);
                    assert.strictEqual(sections.length, 5);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.include((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : _sections_.textContent, 'The initiating page attempted to prerender this page\'s URL, but the prerender failed, so a full navigation was performed instead.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Failure reason');
                    assert.include((_sections_1 = sections[1]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The prerender was not used because during activation time, different navigation parameters (e.g., HTTP headers) were calculated than during the original prerendering navigation request.');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'Mismatched HTTP request headers');
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(grid, [
                        'Header name',
                        'Value in initial navigation',
                        'Value in activation navigation'
                    ], [
                        [
                            'sec-ch-ua-platform',
                            'Linux',
                            'Android'
                        ],
                        [
                            'sec-ch-ua-mobile',
                            '?0',
                            '?1'
                        ]
                    ]);
                    assert.include((_headers_3 = headers[3]) === null || _headers_3 === void 0 ? void 0 : _headers_3.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[3]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_3 = sections[4]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renderes prerender -> prefetch downgraded and used', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _headers_2, _sections_3, _badges__textContent, _badges_, _sections_4, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/downgraded.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/downgraded.html'
                                },
                                status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/downgraded.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */ ,
                                disallowedMojoInterface: 'device.mojom.GamepadMonitor',
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 3);
                    assert.strictEqual(sections.length, 4);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Success');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page attempted to prerender this page\'s URL. The prerender failed, but the resulting response body was still used as a prefetch.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Failure reason');
                    assert.include((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.textContent, 'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_4 = sections[3]) === null || _sections_4 === void 0 ? void 0 : _sections_4.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders no preloading attempts used', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _badges__textContent, _badges_, _sections_3, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/no-preloads.html',
                        previousAttempts: [],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 2);
                    assert.strictEqual(sections.length, 3);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'No speculative loads');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores hash part of URL for prefetch', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _badges__textContent, _badges_, _sections_3, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/prefetched.html#alpha',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html#beta'
                                },
                                status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 2);
                    assert.strictEqual(sections.length, 3);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'Success');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'This page was successfully prefetched.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('doesn\'t ignore hash part of URL for prerender', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _headers_2, _headers_3, _sections_3, _badges__textContent, _badges_, _sections_4, data, component, headers, sections, grid, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Prerender uses more strict URL matcher and distinguish URLs by fragments.
                    data = {
                        pageURL: 'https://example.com/prerendered.html#alpha',
                        previousAttempts: [
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html#beta'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prerenderStatus: null,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 4);
                    assert.strictEqual(sections.length, 5);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'No speculative loads');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Current URL');
                    assert.include((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.textContent, 'https://example.com/prerendered.html#alpha');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'URLs being speculatively loaded by the initiating page');
                    grid = sections[2].querySelector('devtools-resources-mismatched-preloading-grid');
                    assert.instanceOf(grid, _components_js__WEBPACK_IMPORTED_MODULE_6__.MismatchedPreloadingGrid.MismatchedPreloadingGrid);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(grid, [
                        'URL',
                        'Action',
                        'Status'
                    ], [
                        [
                            'https://example.com/prerendered.html#betalpha',
                            'Prerender',
                            'Ready'
                        ]
                    ]);
                    assert.include((_headers_3 = headers[3]) === null || _headers_3 === void 0 ? void 0 : _headers_3.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_3 = sections[3]) === null || _sections_3 === void 0 ? void 0 : _sections_3.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_4 = sections[4]) === null || _sections_4 === void 0 ? void 0 : _sections_4.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders no preloading attempts used with mismatch', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _headers_2, _headers_3, _sections_3, _badges__textContent, _badges_, _sections_4, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/no-preloads.html',
                        previousAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetched.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prerenderStatus: "TriggerDestroyed" /* Protocol.Preload.PrerenderFinalStatus.TriggerDestroyed */ ,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ],
                        currentAttempts: []
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 4);
                    assert.strictEqual(sections.length, 5);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'No speculative loads');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Current URL');
                    assert.include((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.textContent, 'https://example.com/no-preloads.html');
                    assert.include((_headers_2 = headers[2]) === null || _headers_2 === void 0 ? void 0 : _headers_2.textContent, 'URLs being speculatively loaded by the initiating page');
                    assert.exists(sections[2].querySelector('devtools-resources-mismatched-preloading-grid'));
                    assert.include((_headers_3 = headers[3]) === null || _headers_3 === void 0 ? void 0 : _headers_3.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_3 = sections[3]) === null || _sections_3 === void 0 ? void 0 : _sections_3.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 1);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), 'No speculative loads');
                    assert.include((_sections_4 = sections[4]) === null || _sections_4 === void 0 ? void 0 : _sections_4.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders preloads initialized by this page', /*#__PURE__*/ _async_to_generator(function() {
        var _headers_, _sections__querySelector_textContent, _sections__querySelector, _sections_, _sections_1, _headers_1, _sections_2, _badges__textContent, _badges_, _badges__textContent1, _badges_1, _badges__textContent2, _badges_2, _badges__textContent3, _badges_3, _sections_3, data, component, headers, sections, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        pageURL: 'https://example.com/no-preloads.html',
                        previousAttempts: [],
                        currentAttempts: [
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetch-not-triggered.html'
                                },
                                status: "NotTriggered" /* SDK.PreloadingModel.PreloadingStatus.NotTriggered */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:1',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetch-running.html'
                                },
                                status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:2',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetch-ready.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:3',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/prefetch-failure.html'
                                },
                                status: "Failure" /* SDK.PreloadingModel.PreloadingStatus.Failure */ ,
                                prefetchStatus: null,
                                requestId: 'requestId:4',
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerender-pending.html'
                                },
                                status: "Pending" /* SDK.PreloadingModel.PreloadingStatus.Pending */ ,
                                prerenderStatus: null,
                                disallowedMojoInterface: null,
                                mismatchedHeaders: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            },
                            {
                                action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerender-ready.html'
                                },
                                status: "Ready" /* SDK.PreloadingModel.PreloadingStatus.Ready */ ,
                                prerenderStatus: null,
                                mismatchedHeaders: null,
                                disallowedMojoInterface: null,
                                ruleSetIds: [
                                    'ruleSetId:1'
                                ],
                                nodeIds: [
                                    1
                                ]
                            }
                        ]
                    };
                    return [
                        4,
                        renderUsedPreloadingView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    headers = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section-header', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSectionHeader);
                    sections = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementsWithinComponent)(component, 'devtools-report devtools-report-section', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportSection);
                    assert.strictEqual(headers.length, 2);
                    assert.strictEqual(sections.length, 3);
                    assert.include((_headers_ = headers[0]) === null || _headers_ === void 0 ? void 0 : _headers_.textContent, 'Speculative loading status');
                    assert.strictEqual((_sections_ = sections[0]) === null || _sections_ === void 0 ? void 0 : (_sections__querySelector = _sections_.querySelector('.status-badge span')) === null || _sections__querySelector === void 0 ? void 0 : (_sections__querySelector_textContent = _sections__querySelector.textContent) === null || _sections__querySelector_textContent === void 0 ? void 0 : _sections__querySelector_textContent.trim(), 'No speculative loads');
                    assert.include((_sections_1 = sections[0]) === null || _sections_1 === void 0 ? void 0 : _sections_1.textContent, 'The initiating page did not attempt to speculatively load this page\'s URL.');
                    assert.include((_headers_1 = headers[1]) === null || _headers_1 === void 0 ? void 0 : _headers_1.textContent, 'Speculations initiated by this page');
                    badges = ((_sections_2 = sections[1]) === null || _sections_2 === void 0 ? void 0 : _sections_2.querySelectorAll('.status-badge span')) || [];
                    assert.strictEqual(badges.length, 4);
                    assert.strictEqual((_badges_ = badges[0]) === null || _badges_ === void 0 ? void 0 : (_badges__textContent = _badges_.textContent) === null || _badges__textContent === void 0 ? void 0 : _badges__textContent.trim(), '1 not triggered');
                    assert.strictEqual((_badges_1 = badges[1]) === null || _badges_1 === void 0 ? void 0 : (_badges__textContent1 = _badges_1.textContent) === null || _badges__textContent1 === void 0 ? void 0 : _badges__textContent1.trim(), '2 in progress');
                    assert.strictEqual((_badges_2 = badges[2]) === null || _badges_2 === void 0 ? void 0 : (_badges__textContent2 = _badges_2.textContent) === null || _badges__textContent2 === void 0 ? void 0 : _badges__textContent2.trim(), '2 success');
                    assert.strictEqual((_badges_3 = badges[3]) === null || _badges_3 === void 0 ? void 0 : (_badges__textContent3 = _badges_3.textContent) === null || _badges__textContent3 === void 0 ? void 0 : _badges__textContent3.trim(), '1 failure');
                    assert.include((_sections_3 = sections[2]) === null || _sections_3 === void 0 ? void 0 : _sections_3.textContent, 'Learn more: Speculative loading on developer.chrome.com');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=UsedPreloadingView.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/preloading/components/components.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MismatchedPreloadingGrid: function() { return /* reexport module object */ _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__; },
  PreloadingDetailsReportView: function() { return /* reexport module object */ _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__; },
  PreloadingDisabledInfobar: function() { return /* reexport module object */ _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__; },
  PreloadingGrid: function() { return /* reexport module object */ _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__; },
  PreloadingMismatchedHeadersGrid: function() { return /* reexport module object */ _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  RuleSetDetailsView: function() { return /* reexport module object */ _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  RuleSetGrid: function() { return /* reexport module object */ _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__; },
  UsedPreloadingView: function() { return /* reexport module object */ _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__; }
});
/* harmony import */var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */var _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloadingDetailsReportView.js */ "./panels/application/preloading/components/PreloadingDetailsReportView.js");
/* harmony import */var _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreloadingDisabledInfobar.js */ "./panels/application/preloading/components/PreloadingDisabledInfobar.js");
/* harmony import */var _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreloadingGrid.js */ "./panels/application/preloading/components/PreloadingGrid.js");
/* harmony import */var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */var _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RuleSetDetailsView.js */ "./panels/application/preloading/components/RuleSetDetailsView.js");
/* harmony import */var _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RuleSetGrid.js */ "./panels/application/preloading/components/RuleSetGrid.js");
/* harmony import */var _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsedPreloadingView.js */ "./panels/application/preloading/components/UsedPreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__]);
_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=components.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./ui/components/chrome_link/chrome_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLink: function() { return /* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=chrome_link.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);