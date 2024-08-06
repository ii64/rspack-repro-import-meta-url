"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_InterestGroupStorageView_test_js"], {
"./panels/application/InterestGroupStorageView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}





var View = _application_js__WEBPACK_IMPORTED_MODULE_4__.InterestGroupStorageView;
var events = [
    {
        accessTime: 0,
        type: "bid" /* Protocol.Storage.InterestGroupAccessType.Bid */ ,
        ownerOrigin: 'https://owner1.com',
        name: 'cars'
    },
    {
        accessTime: 10,
        type: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ ,
        ownerOrigin: 'https://owner2.com',
        name: 'trucks'
    }
];
var InterestGroupDetailsGetter = /*#__PURE__*/ function() {
    "use strict";
    function InterestGroupDetailsGetter() {
        _class_call_check(this, InterestGroupDetailsGetter);
    }
    _create_class(InterestGroupDetailsGetter, [
        {
            key: "getInterestGroupDetails",
            value: function getInterestGroupDetails(owner, name) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            {
                                ownerOrigin: owner,
                                name: name,
                                expirationTime: 2,
                                joiningOrigin: 'https://joiner.com',
                                trustedBiddingSignalsKeys: [],
                                ads: [],
                                adComponents: []
                            }
                        ];
                    });
                })();
            }
        }
    ]);
    return InterestGroupDetailsGetter;
}();
var InterestGroupDetailsGetterFails = /*#__PURE__*/ function() {
    "use strict";
    function InterestGroupDetailsGetterFails() {
        _class_call_check(this, InterestGroupDetailsGetterFails);
    }
    _create_class(InterestGroupDetailsGetterFails, [
        {
            key: "getInterestGroupDetails",
            value: function getInterestGroupDetails(_owner, _name) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        }
    ]);
    return InterestGroupDetailsGetterFails;
}();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('InterestGroupStorageView', function() {
    it('records events', function() {
        var view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(function(event) {
            view.addEvent(event);
        });
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('ignores duplicates', function() {
        var view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        events.forEach(function(event) {
            view.addEvent(event);
        });
        view.addEvent(events[0]);
        assert.deepEqual(view.getEventsForTesting(), events);
    });
    it('initially has placeholder sidebar', function() {
        var _view_sidebarWidget, _view_sidebarWidget_contentElement_firstChild_textContent, _view_sidebarWidget_contentElement_firstChild, _view_sidebarWidget1;
        var view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
        assert.notDeepEqual((_view_sidebarWidget = view.sidebarWidget()) === null || _view_sidebarWidget === void 0 ? void 0 : _view_sidebarWidget.constructor.name, 'SearchableView');
        assert.isTrue((_view_sidebarWidget1 = view.sidebarWidget()) === null || _view_sidebarWidget1 === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild = _view_sidebarWidget1.contentElement.firstChild) === null || _view_sidebarWidget_contentElement_firstChild === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild_textContent = _view_sidebarWidget_contentElement_firstChild.textContent) === null || _view_sidebarWidget_contentElement_firstChild_textContent === void 0 ? void 0 : _view_sidebarWidget_contentElement_firstChild_textContent.includes('Click'));
    });
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupGetter succeeds', /*#__PURE__*/ _async_to_generator(function() {
        var _view_sidebarWidget, view, grid, cells, spy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (this.timeout() > 0) {
                        this.timeout(10000);
                    }
                    view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
                    events.forEach(function(event) {
                        view.addEvent(event);
                    });
                    grid = view.getInterestGroupGridForTesting();
                    cells = [
                        {
                            columnId: 'event-time',
                            value: 0
                        },
                        {
                            columnId: 'event-type',
                            value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ 
                        },
                        {
                            columnId: 'event-group-owner',
                            value: 'https://owner1.com'
                        },
                        {
                            columnId: 'event-group-name',
                            value: 'cars'
                        }
                    ];
                    spy = sinon.spy(view, 'setSidebarWidget');
                    assert.isTrue(spy.notCalled);
                    grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'event-time',
                        value: '0'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(spy.calledOnce);
                    assert.deepEqual((_view_sidebarWidget = view.sidebarWidget()) === null || _view_sidebarWidget === void 0 ? void 0 : _view_sidebarWidget.constructor.name, 'SearchableView');
                    return [
                        2
                    ];
            }
        });
    }));
    it('Clears sidebarWidget upon receiving cellFocusedEvent on an additionalBid-type events', /*#__PURE__*/ _async_to_generator(function() {
        var _loop, _i, _iter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function(_i, _iter) {
                        var eventType, _view_sidebarWidget, _view_sidebarWidget_contentElement_firstChild_textContent, _view_sidebarWidget_contentElement_firstChild, _view_sidebarWidget1, view, grid, cells, sideBarUpdateDone, spy;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    eventType = _iter[_i];
                                    view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
                                    events.forEach(function(event) {
                                        view.addEvent(event);
                                    });
                                    grid = view.getInterestGroupGridForTesting();
                                    cells = [
                                        {
                                            columnId: 'event-time',
                                            value: 0
                                        },
                                        {
                                            columnId: 'event-type',
                                            value: eventType
                                        },
                                        {
                                            columnId: 'event-group-owner',
                                            value: 'https://owner1.com'
                                        },
                                        {
                                            columnId: 'event-group-name',
                                            value: 'cars'
                                        }
                                    ];
                                    sideBarUpdateDone = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_1__.expectCall)(sinon.stub(view, 'sidebarUpdatedForTesting'));
                                    spy = sinon.spy(view, 'setSidebarWidget');
                                    assert.isTrue(spy.notCalled);
                                    grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({
                                        columnId: 'event-time',
                                        value: '0'
                                    }, {
                                        cells: cells
                                    }));
                                    return [
                                        4,
                                        sideBarUpdateDone
                                    ];
                                case 1:
                                    _state.sent();
                                    assert.isTrue(spy.calledOnce);
                                    assert.notDeepEqual((_view_sidebarWidget = view.sidebarWidget()) === null || _view_sidebarWidget === void 0 ? void 0 : _view_sidebarWidget.constructor.name, 'SearchableView');
                                    assert.isTrue((_view_sidebarWidget1 = view.sidebarWidget()) === null || _view_sidebarWidget1 === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild = _view_sidebarWidget1.contentElement.firstChild) === null || _view_sidebarWidget_contentElement_firstChild === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild_textContent = _view_sidebarWidget_contentElement_firstChild.textContent) === null || _view_sidebarWidget_contentElement_firstChild_textContent === void 0 ? void 0 : _view_sidebarWidget_contentElement_firstChild_textContent.includes('No details'));
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    if (this.timeout() > 0) {
                        this.timeout(10000);
                    }
                    _i = 0, _iter = [
                        "additionalBid" /* Protocol.Storage.InterestGroupAccessType.AdditionalBid */ ,
                        "additionalBidWin" /* Protocol.Storage.InterestGroupAccessType.AdditionalBidWin */ ,
                        "topLevelAdditionalBid" /* Protocol.Storage.InterestGroupAccessType.TopLevelAdditionalBid */ 
                    ];
                    _state.label = 1;
                case 1:
                    if (!(_i < _iter.length)) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        _ts_values(_loop(_i, _iter))
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    _i++;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: updates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter failsupdates sidebarWidget upon receiving cellFocusedEvent when InterestGroupDetailsGetter fails', /*#__PURE__*/ _async_to_generator(function() {
        var _view_sidebarWidget, _view_sidebarWidget_contentElement_firstChild_textContent, _view_sidebarWidget_contentElement_firstChild, _view_sidebarWidget1, view, grid, cells, spy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (this.timeout() > 0) {
                        this.timeout(10000);
                    }
                    view = new View.InterestGroupStorageView(new InterestGroupDetailsGetterFails());
                    events.forEach(function(event) {
                        view.addEvent(event);
                    });
                    grid = view.getInterestGroupGridForTesting();
                    cells = [
                        {
                            columnId: 'event-time',
                            value: 0
                        },
                        {
                            columnId: 'event-type',
                            value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ 
                        },
                        {
                            columnId: 'event-group-owner',
                            value: 'https://owner1.com'
                        },
                        {
                            columnId: 'event-group-name',
                            value: 'cars'
                        }
                    ];
                    spy = sinon.spy(view, 'setSidebarWidget');
                    assert.isTrue(spy.notCalled);
                    grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'event-time',
                        value: '0'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(spy.calledOnce);
                    assert.notDeepEqual((_view_sidebarWidget = view.sidebarWidget()) === null || _view_sidebarWidget === void 0 ? void 0 : _view_sidebarWidget.constructor.name, 'SearchableView');
                    assert.isTrue((_view_sidebarWidget1 = view.sidebarWidget()) === null || _view_sidebarWidget1 === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild = _view_sidebarWidget1.contentElement.firstChild) === null || _view_sidebarWidget_contentElement_firstChild === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild_textContent = _view_sidebarWidget_contentElement_firstChild.textContent) === null || _view_sidebarWidget_contentElement_firstChild_textContent === void 0 ? void 0 : _view_sidebarWidget_contentElement_firstChild_textContent.includes('No details'));
                    return [
                        2
                    ];
            }
        });
    }));
    // Disabled due to flakiness
    it.skip('[crbug.com/1473557]: clears sidebarWidget upon clearEvents', /*#__PURE__*/ _async_to_generator(function() {
        var _view_sidebarWidget, _view_sidebarWidget1, _view_sidebarWidget_contentElement_firstChild_textContent, _view_sidebarWidget_contentElement_firstChild, _view_sidebarWidget2, view, grid, cells, spy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (this.timeout() > 0) {
                        this.timeout(10000);
                    }
                    view = new View.InterestGroupStorageView(new InterestGroupDetailsGetter());
                    events.forEach(function(event) {
                        view.addEvent(event);
                    });
                    grid = view.getInterestGroupGridForTesting();
                    cells = [
                        {
                            columnId: 'event-time',
                            value: 0
                        },
                        {
                            columnId: 'event-type',
                            value: "join" /* Protocol.Storage.InterestGroupAccessType.Join */ 
                        },
                        {
                            columnId: 'event-group-owner',
                            value: 'https://owner1.com'
                        },
                        {
                            columnId: 'event-group-name',
                            value: 'cars'
                        }
                    ];
                    spy = sinon.spy(view, 'setSidebarWidget');
                    assert.isTrue(spy.notCalled);
                    grid.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'event-time',
                        value: '0'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.raf)()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(spy.calledOnce);
                    assert.deepEqual((_view_sidebarWidget = view.sidebarWidget()) === null || _view_sidebarWidget === void 0 ? void 0 : _view_sidebarWidget.constructor.name, 'SearchableView');
                    view.clearEvents();
                    assert.isTrue(spy.calledTwice);
                    assert.notDeepEqual((_view_sidebarWidget1 = view.sidebarWidget()) === null || _view_sidebarWidget1 === void 0 ? void 0 : _view_sidebarWidget1.constructor.name, 'SearchableView');
                    assert.isTrue((_view_sidebarWidget2 = view.sidebarWidget()) === null || _view_sidebarWidget2 === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild = _view_sidebarWidget2.contentElement.firstChild) === null || _view_sidebarWidget_contentElement_firstChild === void 0 ? void 0 : (_view_sidebarWidget_contentElement_firstChild_textContent = _view_sidebarWidget_contentElement_firstChild.textContent) === null || _view_sidebarWidget_contentElement_firstChild_textContent === void 0 ? void 0 : _view_sidebarWidget_contentElement_firstChild_textContent.includes('Click'));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=InterestGroupStorageView.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/application.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return /* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__; },
  ApplicationPanelSidebar: function() { return /* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__; },
  BackgroundServiceModel: function() { return /* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  BackgroundServiceView: function() { return /* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__; },
  BounceTrackingMitigationsTreeElement: function() { return /* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__; },
  CookieItemsView: function() { return /* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  DOMStorageItemsView: function() { return /* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  DOMStorageModel: function() { return /* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__; },
  IndexedDBModel: function() { return /* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__; },
  IndexedDBViews: function() { return /* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__; },
  InterestGroupStorageModel: function() { return /* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  InterestGroupStorageView: function() { return /* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__; },
  InterestGroupTreeElement: function() { return /* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__; },
  OpenedWindowDetailsView: function() { return /* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__; },
  PreloadingTreeElement: function() { return /* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  PreloadingView: function() { return /* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ReportingApiReportsView: function() { return /* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__; },
  ReportingApiView: function() { return /* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__; },
  ResourcesPanel: function() { return /* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__; },
  ServiceWorkerCacheViews: function() { return /* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__; },
  ServiceWorkerUpdateCycleView: function() { return /* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__; },
  ServiceWorkersView: function() { return /* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__; },
  SharedStorageEventsView: function() { return /* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__; },
  SharedStorageItemsView: function() { return /* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__; },
  SharedStorageListTreeElement: function() { return /* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__; },
  SharedStorageModel: function() { return /* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__; },
  SharedStorageTreeElement: function() { return /* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__; },
  StorageBucketsTreeElement: function() { return /* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__; },
  StorageItemsView: function() { return /* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__; },
  StorageView: function() { return /* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__; },
  TrustTokensTreeElement: function() { return /* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__; }
});
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































 //# sourceMappingURL=application.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);