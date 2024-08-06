"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_StorageMetadataView_test_js"], {
"./panels/application/components/StorageMetadataView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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






var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function makeView(storageKeyOrBucketInfo, storageBucketsModel) {
    return _makeView.apply(this, arguments);
}
function _makeView() {
    _makeView = _async_to_generator(function(storageKeyOrBucketInfo, storageBucketsModel) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.StorageMetadataView.StorageMetadataView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    if (storageBucketsModel) {
                        component.enableStorageBucketControls(storageBucketsModel);
                    }
                    if (typeof storageKeyOrBucketInfo === 'string') {
                        component.setStorageKey(storageKeyOrBucketInfo);
                    } else {
                        component.setStorageBucket(storageKeyOrBucketInfo);
                    }
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
    return _makeView.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('SharedStorageMetadataView', function() {
    it('renders with an origin only', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('https://example.com/')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with an top-level site', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('https://example.com/^0https://test.example')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Top-level site',
                        'Is third-party'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com',
                        'https://test.example',
                        'Yes, because the origin is outside of the top-level site'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with an opaque top-level site', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('https://example.com/^43735928559^5110521^6')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Top-level site',
                        'Is third-party',
                        'Is opaque'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com',
                        '(opaque)',
                        'Yes, because the top-level site is opaque',
                        'Yes, because the top-level site is opaque'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with an opaque key', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('https://example.com/^13735928559^2110521')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Is third-party',
                        'Is opaque'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com',
                        'Yes, because the storage key is opaque',
                        'Yes'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with a cross-site ancestor chain', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('https://example.com/^31')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Is third-party'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com',
                        'Yes, because the ancestry chain contains a third-party origin'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with a bucket', /*#__PURE__*/ _async_to_generator(function() {
        var component, report, textContent, keys, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView({
                            bucket: {
                                storageKey: 'https://example.com/^31',
                                name: 'My Bucket'
                            },
                            id: 'BUCKET_ID',
                            persistent: true,
                            durability: "relaxed" /* Protocol.Storage.StorageBucketsDurability.Relaxed */ ,
                            quota: 4096,
                            expiration: 42
                        })
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    textContent = report.shadowRoot.querySelector('.report-title').textContent;
                    assert.strictEqual(textContent, 'https://example.com');
                    assert.isNotNull(component.shadowRoot);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-key');
                    assert.deepEqual(keys, [
                        'Origin',
                        'Is third-party',
                        'Bucket name',
                        'Is persistent',
                        'Durability',
                        'Quota',
                        'Expiration'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, 'devtools-report-value');
                    assert.deepEqual(values, [
                        'https://example.com',
                        'Yes, because the ancestry chain contains a third-party origin',
                        'My Bucket',
                        'Yes',
                        'relaxed',
                        '4.1 kB',
                        new Date(42000).toLocaleString()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders with an emtpy string title', /*#__PURE__*/ _async_to_generator(function() {
        var component, report;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        makeView('')
                    ];
                case 1:
                    component = _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.Report);
                    assert.isNull(report.shadowRoot.querySelector('.report-title'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders bucket controls', /*#__PURE__*/ _async_to_generator(function() {
        var storageBucketsModel, storageBucket, component, buttons, _buttons, deleteButton, showDialog;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    storageBucketsModel = {
                        deleteBucket: sinon.spy(),
                        target: function() {
                            return {
                                model: function() {
                                    return {
                                        getBucketByName: function() {
                                            return null;
                                        }
                                    };
                                }
                            };
                        }
                    };
                    storageBucket = {
                        storageKey: 'https://example.com/^31',
                        name: 'My Bucket'
                    };
                    return [
                        4,
                        makeView({
                            bucket: storageBucket,
                            id: 'BUCKET_ID',
                            persistent: true,
                            durability: "relaxed" /* Protocol.Storage.StorageBucketsDurability.Relaxed */ ,
                            quota: 4096,
                            expiration: 42
                        }, storageBucketsModel)
                    ];
                case 1:
                    component = _state.sent();
                    buttons = component.shadowRoot.querySelectorAll('devtools-button');
                    assert.strictEqual(buttons.length, 1);
                    _buttons = _sliced_to_array(buttons, 1), deleteButton = _buttons[0];
                    assert.instanceOf(deleteButton, HTMLElement);
                    assert.strictEqual(deleteButton.textContent.trim(), 'Delete bucket');
                    showDialog = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.ConfirmDialog, 'show').resolves(true);
                    deleteButton.click();
                    assert.isTrue(showDialog.calledOnce);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(storageBucketsModel.deleteBucket.calledOnceWithExactly(storageBucket));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=StorageMetadataView.test.js.map


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