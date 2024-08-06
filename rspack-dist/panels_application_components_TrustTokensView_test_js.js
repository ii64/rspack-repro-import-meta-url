"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_TrustTokensView_test_js"], {
"./panels/application/components/TrustTokensView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
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







var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
function renderTrustTokensView() {
    return _renderTrustTokensView.apply(this, arguments);
}
function _renderTrustTokensView() {
    _renderTrustTokensView = _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.TrustTokensView.TrustTokensView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
                    // The data-grid's renderer is scheduled, so we need to wait until the coordinator
                    // is done before we can test against it.
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
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
    return _renderTrustTokensView.apply(this, arguments);
}
function getInternalDataGridShadowRoot(component) {
    var dataGridController = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getElementWithinComponent)(component, 'devtools-data-grid-controller', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController);
    var dataGrid = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getElementWithinComponent)(dataGridController, 'devtools-data-grid', _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGrid);
    assert.isNotNull(dataGrid.shadowRoot);
    return dataGrid.shadowRoot;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('TrustTokensView', function() {
    var target;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
    });
    it('renders trust token data', /*#__PURE__*/ _async_to_generator(function() {
        var component, dataGridShadowRoot, rowValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
                        tokens: [
                            {
                                issuerOrigin: 'foo.com',
                                count: 42
                            },
                            {
                                issuerOrigin: 'bar.org',
                                count: 7
                            }
                        ],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        renderTrustTokensView()
                    ];
                case 1:
                    component = _state.sent();
                    dataGridShadowRoot = getInternalDataGridShadowRoot(component);
                    rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
                    assert.deepEqual(rowValues, [
                        [
                            'bar.org',
                            '7',
                            ''
                        ],
                        [
                            'foo.com',
                            '42',
                            ''
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not display issuers with zero stored tokens', /*#__PURE__*/ _async_to_generator(function() {
        var component, dataGridShadowRoot, rowValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
                        tokens: [
                            {
                                issuerOrigin: 'no-issuer.org',
                                count: 0
                            },
                            {
                                issuerOrigin: 'foo.com',
                                count: 42
                            }
                        ],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        renderTrustTokensView()
                    ];
                case 1:
                    component = _state.sent();
                    dataGridShadowRoot = getInternalDataGridShadowRoot(component);
                    rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
                    assert.deepEqual(rowValues, [
                        [
                            'foo.com',
                            '42',
                            ''
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes trailing slashes from issuer origins', /*#__PURE__*/ _async_to_generator(function() {
        var component, dataGridShadowRoot, rowValues;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
                        tokens: [
                            {
                                issuerOrigin: 'example.com/',
                                count: 20
                            },
                            {
                                issuerOrigin: 'sub.domain.org/',
                                count: 14
                            }
                        ],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        renderTrustTokensView()
                    ];
                case 1:
                    component = _state.sent();
                    dataGridShadowRoot = getInternalDataGridShadowRoot(component);
                    rowValues = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getValuesOfAllBodyRows)(dataGridShadowRoot);
                    assert.deepEqual(rowValues, [
                        [
                            'example.com',
                            '20',
                            ''
                        ],
                        [
                            'sub.domain.org',
                            '14',
                            ''
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('hides trust token table when there are no trust tokens', /*#__PURE__*/ _async_to_generator(function() {
        var component, nullGridElement, noTrustTokensElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
                        tokens: [],
                        getError: function() {
                            return undefined;
                        }
                    });
                    return [
                        4,
                        renderTrustTokensView()
                    ];
                case 1:
                    component = _state.sent();
                    nullGridElement = component.shadowRoot.querySelector('devtools-data-grid-controller');
                    assert.isNull(nullGridElement);
                    noTrustTokensElement = component.shadowRoot.querySelector('div.no-tt-message');
                    assert.instanceOf(noTrustTokensElement, HTMLDivElement);
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls the delete handler with the right issuer when the delete button is clicked in a row', /*#__PURE__*/ _async_to_generator(function() {
        var clearTrustTokens, component, dataGridShadowRoot, deleteCell, deleteButtonComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Create a Promise that resolves with the issuer for which the delete button was clicked.
                    sinon.stub(target.storageAgent(), 'invoke_getTrustTokens').resolves({
                        tokens: [
                            {
                                issuerOrigin: 'bar.org',
                                count: 42
                            },
                            {
                                issuerOrigin: 'foo.com',
                                count: 7
                            }
                        ],
                        getError: function() {
                            return undefined;
                        }
                    });
                    clearTrustTokens = sinon.stub(target.storageAgent(), 'invoke_clearTrustTokens').resolves();
                    return [
                        4,
                        renderTrustTokensView()
                    ];
                case 1:
                    component = _state.sent();
                    dataGridShadowRoot = getInternalDataGridShadowRoot(component);
                    deleteCell = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCellByIndexes)(dataGridShadowRoot, {
                        column: 2,
                        row: 1
                    });
                    deleteButtonComponent = deleteCell.querySelector('devtools-button');
                    assert.instanceOf(deleteButtonComponent, HTMLElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(deleteButtonComponent);
                    assert.isTrue(clearTrustTokens.calledOnceWith({
                        issuerOrigin: 'bar.org'
                    }));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TrustTokensView.test.js.map


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