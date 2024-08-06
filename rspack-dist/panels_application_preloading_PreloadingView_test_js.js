"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_PreloadingView_test_js"], {
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
"./panels/application/preloading/PreloadingView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_9__]);
_application_js__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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










var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
var zip2 = function(xs, ys) {
    assert.strictEqual(xs.length, ys.length);
    return Array.from(xs.map(function(_, i) {
        return [
            xs[i],
            ys[i]
        ];
    }));
};
// Holds targets and ids, and emits events.
var NavigationEmulator = /*#__PURE__*/ function() {
    "use strict";
    function NavigationEmulator() {
        _class_call_check(this, NavigationEmulator);
        _define_property(this, "seq", 0);
        _define_property(this, "tabTarget", void 0);
        _define_property(this, "primaryTarget", void 0);
        _define_property(this, "frameId", void 0);
        _define_property(this, "loaderId", void 0);
        _define_property(this, "prerenderTarget", null);
        _define_property(this, "prerenderStatusUpdatedEvent", null);
        this.tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
        });
        // Fill fake ones here and fill real ones in async part.
        this.primaryTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        this.frameId = 'fakeFrameId';
        this.loaderId = 'fakeLoaderId';
    }
    _create_class(NavigationEmulator, [
        {
            key: "createTarget",
            value: function createTarget(targetInfo, sessionId) {
                var _this = this;
                return _async_to_generator(function() {
                    var childTargetManager, target;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                childTargetManager = _this.tabTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
                                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.tabTarget, 'Target.targetCreated', {
                                    targetInfo: targetInfo
                                });
                                return [
                                    4,
                                    childTargetManager.attachedToTarget({
                                        sessionId: sessionId,
                                        targetInfo: targetInfo,
                                        waitingForDebugger: false
                                    })
                                ];
                            case 1:
                                _state.sent();
                                target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().targetById(targetInfo.targetId);
                                assert.exists(target);
                                return [
                                    2,
                                    target
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "openDevTools",
            value: function openDevTools() {
                var _this = this;
                return _async_to_generator(function() {
                    var url, targetId, sessionId, targetInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                url = 'https://example.com/';
                                targetId = "targetId:".concat(_this.seq);
                                sessionId = "sessionId:".concat(_this.seq);
                                targetInfo = {
                                    targetId: targetId,
                                    type: 'page',
                                    title: 'title',
                                    url: url,
                                    attached: true,
                                    canAccessOpener: false
                                };
                                return [
                                    4,
                                    _this.createTarget(targetInfo, sessionId)
                                ];
                            case 1:
                                _this.primaryTarget = _state.sent();
                                _this.frameId = 'frameId';
                                _this.loaderId = 'loaderId';
                                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(_this.primaryTarget);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "navigateAndDispatchEvents",
            value: function navigateAndDispatchEvents(path) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_prerenderTarget_targetInfo, _this_prerenderTarget, url;
                    return _ts_generator(this, function(_state) {
                        url = 'https://example.com/' + path;
                        _this.seq++;
                        _this.loaderId = "loaderId:".concat(_this.seq);
                        assert.isFalse(url === ((_this_prerenderTarget = _this.prerenderTarget) === null || _this_prerenderTarget === void 0 ? void 0 : (_this_prerenderTarget_targetInfo = _this_prerenderTarget.targetInfo()) === null || _this_prerenderTarget_targetInfo === void 0 ? void 0 : _this_prerenderTarget_targetInfo.url));
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Page.frameNavigated', {
                            frame: {
                                id: _this.frameId,
                                loaderId: _this.loaderId,
                                url: url,
                                domainAndRegistry: 'example.com',
                                securityOrigin: 'https://example.com/',
                                mimeType: 'text/html',
                                secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
                                crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
                                gatedAPIFeatures: []
                            }
                        });
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "activateAndDispatchEvents",
            value: function activateAndDispatchEvents(path) {
                var _this = this;
                return _async_to_generator(function() {
                    var _this_prerenderTarget_targetInfo, url, targetInfo;
                    return _ts_generator(this, function(_state) {
                        url = 'https://example.com/' + path;
                        assert.exists(_this.prerenderTarget);
                        assert.isTrue(url === ((_this_prerenderTarget_targetInfo = _this.prerenderTarget.targetInfo()) === null || _this_prerenderTarget_targetInfo === void 0 ? void 0 : _this_prerenderTarget_targetInfo.url));
                        assert.exists(_this.prerenderStatusUpdatedEvent);
                        _this.seq++;
                        _this.loaderId = _this.prerenderStatusUpdatedEvent.key.loaderId;
                        targetInfo = _this.prerenderTarget.targetInfo();
                        assert.exists(targetInfo);
                        // This also emits ResourceTreeModel.Events.PrimaryPageChanged.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.tabTarget, 'Target.targetInfoChanged', {
                            targetInfo: _object_spread_props(_object_spread({}, targetInfo), {
                                subtype: undefined
                            })
                        });
                        // Notify a new model to PreloadingModelProxy.
                        _this.primaryTarget = _this.prerenderTarget;
                        _this.prerenderTarget = null;
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(_this.primaryTarget);
                        // Strictly speaking, we have to emit an event for SDK.PreloadingModel.PreloadingStatus.Ready earlier.
                        // It's not so important and omitted.
                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Preload.prerenderStatusUpdated', _object_spread_props(_object_spread({}, _this.prerenderStatusUpdatedEvent), {
                            status: "Success" /* SDK.PreloadingModel.PreloadingStatus.Success */ 
                        }));
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "addSpecRules",
            value: function addSpecRules(specrules) {
                var _this = this;
                return _async_to_generator(function() {
                    var json, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, prefetchAttempt, url, prerenderUrl, sessionId, targetInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.seq++;
                                try {
                                    json = JSON.parse(specrules);
                                } catch (_) {
                                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Preload.ruleSetUpdated', {
                                        ruleSet: {
                                            id: "ruleSetId:0.".concat(_this.seq),
                                            loaderId: _this.loaderId,
                                            sourceText: specrules,
                                            backendNodeId: _this.seq,
                                            errorType: "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */ ,
                                            errorMessage: 'fake error message'
                                        }
                                    });
                                    return [
                                        2
                                    ];
                                }
                                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Preload.ruleSetUpdated', {
                                    ruleSet: {
                                        id: "ruleSetId:0.".concat(_this.seq),
                                        loaderId: _this.loaderId,
                                        sourceText: specrules,
                                        backendNodeId: _this.seq
                                    }
                                });
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = (json['prefetch'] || [])[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        prefetchAttempt = _step.value;
                                        // For simplicity
                                        assert.strictEqual(prefetchAttempt['source'], 'list');
                                        assert.strictEqual(prefetchAttempt['urls'].length, 1);
                                        url = 'https://example.com' + prefetchAttempt['urls'][0];
                                        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Preload.prefetchStatusUpdated', {
                                            key: {
                                                loaderId: _this.loaderId,
                                                action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                                url: url
                                            },
                                            initiatingFrameId: _this.frameId,
                                            prefetchUrl: url,
                                            status: "Running" /* SDK.PreloadingModel.PreloadingStatus.Running */ 
                                        });
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
                                if (json['prerender'] === undefined) {
                                    return [
                                        2
                                    ];
                                }
                                // For simplicity
                                assert.strictEqual(json['prerender'].length, 1);
                                assert.strictEqual(json['prerender'][0]['source'], 'list');
                                assert.strictEqual(json['prerender'][0]['urls'].length, 1);
                                prerenderUrl = 'https://example.com' + json['prerender'][0]['urls'][0];
                                _this.prerenderStatusUpdatedEvent = {
                                    key: {
                                        loaderId: _this.loaderId,
                                        action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                        url: prerenderUrl
                                    },
                                    status: "Running" /* Protocol.Preload.PreloadingStatus.Running */ 
                                };
                                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.primaryTarget, 'Preload.prerenderStatusUpdated', _this.prerenderStatusUpdatedEvent);
                                sessionId = "sessionId:prerender:".concat(_this.seq);
                                targetInfo = {
                                    targetId: "targetId:prerender:".concat(_this.seq),
                                    type: 'page',
                                    subtype: 'prerender',
                                    url: prerenderUrl,
                                    title: '',
                                    attached: true,
                                    canAccessOpener: true
                                };
                                return [
                                    4,
                                    _this.createTarget(targetInfo, sessionId)
                                ];
                            case 1:
                                _this.prerenderTarget = _state.sent();
                                // Note that Page.frameNavigated is emitted here.
                                // See also https://crbug.com/1317959 and ResourceTreeModel.Events.PrimaryPageChanged.
                                (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(_this.prerenderTarget, 'Page.frameNavigated', {
                                    frame: {
                                        id: "frameId:prerender:".concat(_this.seq),
                                        loaderId: "loaderId:prerender:".concat(_this.seq),
                                        url: prerenderUrl,
                                        domainAndRegistry: 'example.com',
                                        securityOrigin: 'https://example.com/',
                                        mimeType: 'text/html',
                                        secureContextType: "Secure" /* Protocol.Page.SecureContextType.Secure */ ,
                                        crossOriginIsolatedContextType: "Isolated" /* Protocol.Page.CrossOriginIsolatedContextType.Isolated */ ,
                                        gatedAPIFeatures: []
                                    }
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return NavigationEmulator;
}();
function createRuleSetView(target) {
    var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    var view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingRuleSetView(model);
    var container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    var div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
function createAttemptView(target) {
    var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    var view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingAttemptView(model);
    var container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    var div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
function createSummaryView(target) {
    var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
    assert.exists(model);
    var view = new _application_js__WEBPACK_IMPORTED_MODULE_9__.PreloadingView.PreloadingSummaryView(model);
    var container = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
    var div = document.createElement('div');
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(div);
    container.markAsRoot();
    container.show(div);
    view.show(container.element);
    // Ensure PreloadingModelProxy.initialize to be called.
    view.wasShown();
    return view;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingRuleSetView', function() {
    it('renders grid and details', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, ruleSetGridComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createRuleSetView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.preloadingAttemptSourcesUpdated', {
                        loaderId: 'loaderId:1',
                        preloadingAttemptSources: [
                            {
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered.html'
                                },
                                ruleSetIds: [
                                    'ruleSetId:0.2'
                                ],
                                nodeIds: []
                            }
                        ]
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    ruleSetGridComponent = view.getRuleSetGridForTest();
                    assert.isNotNull(ruleSetGridComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, [
                        'Rule set',
                        'Status'
                    ], [
                        [
                            'example.com/',
                            '1 running'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows error of rule set', /*#__PURE__*/ _async_to_generator(function() {
        var _ruleSetDetailsComponent_shadowRoot_getElementById, _ruleSetDetailsComponent_shadowRoot, _ruleSetDetailsComponent_shadowRoot_getElementById1, _ruleSetDetailsComponent_shadowRoot1, emulator, view, ruleSetGridComponent, ruleSetDetailsComponent, cells;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createRuleSetView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    ruleSetGridComponent = view.getRuleSetGridForTest();
                    assert.isNotNull(ruleSetGridComponent.shadowRoot);
                    ruleSetDetailsComponent = view.getRuleSetDetailsForTest();
                    assert.isNotNull(ruleSetDetailsComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, [
                        'Rule set',
                        'Status'
                    ], [
                        [
                            'example.com/',
                            '1 error'
                        ]
                    ]);
                    cells = [
                        {
                            columnId: 'id',
                            value: 'ruleSetId:0.2'
                        },
                        {
                            columnId: 'Validity',
                            value: 'Invalid'
                        }
                    ];
                    ruleSetGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'Validity',
                        value: 'Invalid'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    assert.deepEqual((_ruleSetDetailsComponent_shadowRoot = ruleSetDetailsComponent.shadowRoot) === null || _ruleSetDetailsComponent_shadowRoot === void 0 ? void 0 : (_ruleSetDetailsComponent_shadowRoot_getElementById = _ruleSetDetailsComponent_shadowRoot.getElementById('ruleset-url')) === null || _ruleSetDetailsComponent_shadowRoot_getElementById === void 0 ? void 0 : _ruleSetDetailsComponent_shadowRoot_getElementById.textContent, 'https://example.com/');
                    assert.deepEqual((_ruleSetDetailsComponent_shadowRoot1 = ruleSetDetailsComponent.shadowRoot) === null || _ruleSetDetailsComponent_shadowRoot1 === void 0 ? void 0 : (_ruleSetDetailsComponent_shadowRoot_getElementById1 = _ruleSetDetailsComponent_shadowRoot1.getElementById('error-message-text')) === null || _ruleSetDetailsComponent_shadowRoot_getElementById1 === void 0 ? void 0 : _ruleSetDetailsComponent_shadowRoot_getElementById1.textContent, 'fake error message');
                    return [
                        2
                    ];
            }
        });
    }));
    // TODO(https://crbug.com/1384419): Check that preloading attempts for
    // the previous page vanish once loaderId is added to events
    // prefetch/prerenderAttemptUpdated.
    it('clears SpeculationRules for previous pages', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, ruleSetGridComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createRuleSetView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('notprerendered.html')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    ruleSetGridComponent = view.getRuleSetGridForTest();
                    assert.isNotNull(ruleSetGridComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, [
                        'Rule set',
                        'Status'
                    ], []);
                    return [
                        2
                    ];
            }
        });
    }));
    it('clears SpeculationRules for previous pages when prerendered page activated', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, ruleSetGridComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createRuleSetView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        emulator.activateAndDispatchEvents('prerendered.html')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    ruleSetGridComponent = view.getRuleSetGridForTest();
                    assert.isNotNull(ruleSetGridComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, [
                        'Rule set',
                        'Status'
                    ], []);
                    return [
                        2
                    ];
            }
        });
    }));
    // See https://crbug.com/1432880
    it('preserves information even if iframe loaded', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, targetInfo, childTargetManager, ruleSetGridComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createRuleSetView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    targetInfo = {
                        targetId: 'targetId',
                        type: 'iframe',
                        title: 'title',
                        url: 'https://example.com/iframe.html',
                        attached: true,
                        canAccessOpener: false
                    };
                    childTargetManager = emulator.primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
                    assert.exists(childTargetManager);
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Target.targetCreated', {
                        targetInfo: targetInfo
                    });
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: 'sessionId',
                            targetInfo: targetInfo,
                            waitingForDebugger: false
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    ruleSetGridComponent = view.getRuleSetGridForTest();
                    assert.isNotNull(ruleSetGridComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(ruleSetGridComponent, [
                        'Rule set',
                        'Status'
                    ], [
                        [
                            'example.com/',
                            ''
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingAttemptView', function() {
    it('renders grid and details', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, preloadingGridComponent, preloadingDetailsComponent, placeholder;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    preloadingDetailsComponent = view.getPreloadingDetailsForTest();
                    assert.isNotNull(preloadingDetailsComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/prerendered.html',
                            'Prerender',
                            '',
                            'Running'
                        ]
                    ]);
                    placeholder = preloadingDetailsComponent.shadowRoot.querySelector('div.preloading-noselected div p');
                    assert.strictEqual(placeholder === null || placeholder === void 0 ? void 0 : placeholder.textContent, 'Select an element for more details');
                    return [
                        2
                    ];
            }
        });
    }));
    // See https://crbug.com/1432880
    it('preserves information even if iframe loaded', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, targetInfo, childTargetManager, preloadingGridComponent, preloadingDetailsComponent, placeholder;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    targetInfo = {
                        targetId: 'targetId',
                        type: 'iframe',
                        title: 'title',
                        url: 'https://example.com/iframe.html',
                        attached: true,
                        canAccessOpener: false
                    };
                    childTargetManager = emulator.primaryTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ChildTargetManager.ChildTargetManager);
                    assert.exists(childTargetManager);
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Target.targetCreated', {
                        targetInfo: targetInfo
                    });
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: 'sessionId',
                            targetInfo: targetInfo,
                            waitingForDebugger: false
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    preloadingDetailsComponent = view.getPreloadingDetailsForTest();
                    assert.isNotNull(preloadingDetailsComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/prerendered.html',
                            'Prerender',
                            '',
                            'Running'
                        ]
                    ]);
                    placeholder = preloadingDetailsComponent.shadowRoot.querySelector('div.preloading-noselected div p');
                    assert.strictEqual(placeholder === null || placeholder === void 0 ? void 0 : placeholder.textContent, 'Select an element for more details');
                    return [
                        2
                    ];
            }
        });
    }));
    it('filters preloading attempts by selected rule set', /*#__PURE__*/ _async_to_generator(function() {
        var _ruleSetSelectorToolbarItem_element_querySelector, _ruleSetSelectorToolbarItem_element_querySelector1, _ruleSetSelectorToolbarItem_element_querySelector2, emulator, view, ruleSetSelectorToolbarItem, preloadingGridComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    // ruleSetId:0.2
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource2.js"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender": [\n    {\n      "source": "list",\n      "urls": ["/prerendered3.html"]\n    }\n  ]\n}\n')
                    ];
                case 4:
                    _state.sent();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.preloadingAttemptSourcesUpdated', {
                        loaderId: 'loaderId:1',
                        preloadingAttemptSources: [
                            {
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prefetch" /* Protocol.Preload.SpeculationAction.Prefetch */ ,
                                    url: 'https://example.com/subresource2.js'
                                },
                                ruleSetIds: [
                                    'ruleSetId:0.2'
                                ],
                                nodeIds: [
                                    2,
                                    3
                                ]
                            },
                            {
                                key: {
                                    loaderId: 'loaderId:1',
                                    action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                                    url: 'https://example.com/prerendered3.html'
                                },
                                ruleSetIds: [
                                    'ruleSetId:0.3'
                                ],
                                nodeIds: [
                                    3
                                ]
                            }
                        ]
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    ruleSetSelectorToolbarItem = view.getRuleSetSelectorToolbarItemForTest();
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    assert.strictEqual((_ruleSetSelectorToolbarItem_element_querySelector = ruleSetSelectorToolbarItem.element.querySelector('span')) === null || _ruleSetSelectorToolbarItem_element_querySelector === void 0 ? void 0 : _ruleSetSelectorToolbarItem_element_querySelector.textContent, 'All speculative loads');
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/subresource2.js',
                            'Prefetch',
                            'example.com/',
                            'Running'
                        ],
                        [
                            '/prerendered3.html',
                            'Prerender',
                            'example.com/',
                            'Running'
                        ]
                    ]);
                    // Turn on filtering.
                    view.selectRuleSetOnFilterForTest('ruleSetId:0.2');
                    return [
                        4,
                        coordinator.done()
                    ];
                case 6:
                    _state.sent();
                    assert.strictEqual((_ruleSetSelectorToolbarItem_element_querySelector1 = ruleSetSelectorToolbarItem.element.querySelector('span')) === null || _ruleSetSelectorToolbarItem_element_querySelector1 === void 0 ? void 0 : _ruleSetSelectorToolbarItem_element_querySelector1.textContent, 'example.com/');
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/subresource2.js',
                            'Prefetch',
                            'example.com/',
                            'Running'
                        ]
                    ]);
                    // Turn off filtering.
                    view.selectRuleSetOnFilterForTest(null);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 7:
                    _state.sent();
                    assert.strictEqual((_ruleSetSelectorToolbarItem_element_querySelector2 = ruleSetSelectorToolbarItem.element.querySelector('span')) === null || _ruleSetSelectorToolbarItem_element_querySelector2 === void 0 ? void 0 : _ruleSetSelectorToolbarItem_element_querySelector2.textContent, 'All speculative loads');
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/subresource2.js',
                            'Prefetch',
                            'example.com/',
                            'Running'
                        ],
                        [
                            '/prerendered3.html',
                            'Prerender',
                            'example.com/',
                            'Running'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows prerender details with Investigate button for Running', /*#__PURE__*/ _async_to_generator(function() {
        var _buttons__textContent, emulator, view, preloadingGridComponent, preloadingDetailsComponent, cells, report, keys, values, buttons;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    preloadingDetailsComponent = view.getPreloadingDetailsForTest();
                    assert.isNotNull(preloadingDetailsComponent.shadowRoot);
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/prerendered.html',
                            'Prerender',
                            '',
                            'Running'
                        ]
                    ]);
                    cells = [
                        {
                            columnId: 'id',
                            value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined'
                        }
                    ];
                    preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'URL',
                        value: '/prerendered.html'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
                    assert.deepEqual(zip2(keys, values), [
                        [
                            'URL',
                            'https://example.com/prerendered.html'
                        ],
                        [
                            'Action',
                            'PrerenderInspect'
                        ],
                        [
                            'Status',
                            'Speculative load is running.'
                        ]
                    ]);
                    buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
                    assert.strictEqual((_buttons__textContent = buttons[0].textContent) === null || _buttons__textContent === void 0 ? void 0 : _buttons__textContent.trim(), 'Inspect');
                    assert.strictEqual(buttons[0].getAttribute('disabled'), null);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows prerender details with Investigate button for Ready', /*#__PURE__*/ _async_to_generator(function() {
        var _buttons__textContent, emulator, view, preloadingGridComponent, preloadingDetailsComponent, cells, report, keys, values, buttons;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.prerenderStatusUpdated', {
                        key: {
                            loaderId: 'loaderId:1',
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/prerendered.html'
                        },
                        status: "Ready" /* Protocol.Preload.PreloadingStatus.Ready */ 
                    });
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    preloadingDetailsComponent = view.getPreloadingDetailsForTest();
                    assert.isNotNull(preloadingDetailsComponent.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/prerendered.html',
                            'Prerender',
                            '',
                            'Ready'
                        ]
                    ]);
                    cells = [
                        {
                            columnId: 'id',
                            value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined'
                        }
                    ];
                    preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'URL',
                        value: '/prerendered.html'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
                    assert.deepEqual(zip2(keys, values), [
                        [
                            'URL',
                            'https://example.com/prerendered.html'
                        ],
                        [
                            'Action',
                            'PrerenderInspect'
                        ],
                        [
                            'Status',
                            'Speculative load finished and the result is ready for the next navigation.'
                        ]
                    ]);
                    buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
                    assert.strictEqual((_buttons__textContent = buttons[0].textContent) === null || _buttons__textContent === void 0 ? void 0 : _buttons__textContent.trim(), 'Inspect');
                    assert.strictEqual(buttons[0].getAttribute('disabled'), null);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows prerender details with Investigate (disabled) button for Failure', /*#__PURE__*/ _async_to_generator(function() {
        var _buttons__textContent, _buttons__shadowRoot_querySelector, _buttons__shadowRoot, emulator, view, prerenderTarget, preloadingGridComponent, preloadingDetailsComponent, cells, report, keys, values, buttons;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createAttemptView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(emulator.primaryTarget, 'Preload.prerenderStatusUpdated', {
                        key: {
                            loaderId: 'loaderId:1',
                            action: "Prerender" /* Protocol.Preload.SpeculationAction.Prerender */ ,
                            url: 'https://example.com/prerendered.html'
                        },
                        status: "Failure" /* Protocol.Preload.PreloadingStatus.Failure */ ,
                        prerenderStatus: "MojoBinderPolicy" /* Protocol.Preload.PrerenderFinalStatus.MojoBinderPolicy */ ,
                        disallowedMojoInterface: 'device.mojom.GamepadMonitor'
                    });
                    // Note that `TargetManager.removeTarget` is not called on `Target.targetDestroyed`.
                    // Here, we manually remove the target for prerendered page from `TargetManager`.
                    prerenderTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().targets().find(function(child) {
                        var _child_targetInfo;
                        return ((_child_targetInfo = child.targetInfo()) === null || _child_targetInfo === void 0 ? void 0 : _child_targetInfo.subtype) === 'prerender' && child.inspectedURL() === 'https://example.com/prerendered.html';
                    });
                    prerenderTarget === null || prerenderTarget === void 0 ? void 0 : prerenderTarget.dispose('test');
                    preloadingGridComponent = view.getPreloadingGridForTest();
                    assert.isNotNull(preloadingGridComponent.shadowRoot);
                    preloadingDetailsComponent = view.getPreloadingDetailsForTest();
                    assert.isNotNull(preloadingDetailsComponent.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertGridContents)(preloadingGridComponent, [
                        'URL',
                        'Action',
                        'Rule set',
                        'Status'
                    ], [
                        [
                            '/prerendered.html',
                            'Prerender',
                            '',
                            'Failure - The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)'
                        ]
                    ]);
                    cells = [
                        {
                            columnId: 'id',
                            value: 'loaderId:1:Prerender:https://example.com/prerendered.html:undefined'
                        }
                    ];
                    preloadingGridComponent.dispatchEvent(new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridEvents.BodyCellFocusedEvent({
                        columnId: 'URL',
                        value: '/prerendered.html'
                    }, {
                        cells: cells
                    }));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    report = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getElementWithinComponent)(preloadingDetailsComponent, 'devtools-report', _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_7__.ReportView.Report);
                    keys = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-key');
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(report, 'devtools-report-value');
                    assert.deepEqual(zip2(keys, values), [
                        [
                            'URL',
                            'https://example.com/prerendered.html'
                        ],
                        [
                            'Action',
                            'PrerenderInspect'
                        ],
                        [
                            'Status',
                            'Speculative load failed.'
                        ],
                        [
                            'Failure reason',
                            'The prerendered page used a forbidden JavaScript API that is currently not supported. (Internal Mojo interface: device.mojom.GamepadMonitor)'
                        ]
                    ]);
                    buttons = report.querySelectorAll('devtools-report-value:nth-of-type(2) devtools-button');
                    assert.strictEqual((_buttons__textContent = buttons[0].textContent) === null || _buttons__textContent === void 0 ? void 0 : _buttons__textContent.trim(), 'Inspect');
                    assert.strictEqual((_buttons__shadowRoot = buttons[0].shadowRoot) === null || _buttons__shadowRoot === void 0 ? void 0 : (_buttons__shadowRoot_querySelector = _buttons__shadowRoot.querySelector('button')) === null || _buttons__shadowRoot_querySelector === void 0 ? void 0 : _buttons__shadowRoot_querySelector.getAttribute('disabled'), '');
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingSummaryView', function() {
    it('shows information of preloading of the last page', /*#__PURE__*/ _async_to_generator(function() {
        var emulator, view, usedPreloadingComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    emulator = new NavigationEmulator();
                    return [
                        4,
                        emulator.openDevTools()
                    ];
                case 1:
                    _state.sent();
                    view = createSummaryView(emulator.primaryTarget);
                    return [
                        4,
                        emulator.navigateAndDispatchEvents('')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        emulator.addSpecRules('\n{\n  "prerender":[\n    {\n      "source": "list",\n      "urls": ["/prerendered.html"]\n    }\n  ]\n}\n')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        emulator.activateAndDispatchEvents('prerendered.html')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    usedPreloadingComponent = view.getUsedPreloadingForTest();
                    assert.isNotNull(usedPreloadingComponent.shadowRoot);
                    assert.include(usedPreloadingComponent.shadowRoot.textContent, 'This page was successfully prerendered.');
                    return [
                        2
                    ];
            }
        });
    }));
});
function testWarnings(event, headerExpected, sectionsExpected) {
    return _testWarnings.apply(this, arguments);
}
function _testWarnings() {
    _testWarnings = _async_to_generator(function(event, headerExpected, sectionsExpected) {
        var _headerGot_textContent, target, warningsUpdatedPromise, view, infobarContainer, infobar, headerGot, headers, sections;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
                    warningsUpdatedPromise = new Promise(function(resolve) {
                        var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PreloadingModel.PreloadingModel);
                        assert.exists(model);
                        model.addEventListener("WarningsUpdated" /* SDK.PreloadingModel.Events.WarningsUpdated */ , function(_) {
                            return resolve();
                        });
                    });
                    view = createRuleSetView(target);
                    view.wasShown();
                    (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.dispatchEvent)(target, 'Preload.preloadEnabledStateUpdated', event);
                    return [
                        4,
                        warningsUpdatedPromise
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    infobarContainer = view.getInfobarContainerForTest();
                    infobar = infobarContainer.querySelector('devtools-resources-preloading-disabled-infobar');
                    assert.exists(infobar);
                    assert.isNotNull(infobar.shadowRoot);
                    headerGot = infobar.shadowRoot.querySelector('#header');
                    assert.strictEqual((headerGot === null || headerGot === void 0 ? void 0 : (_headerGot_textContent = headerGot.textContent) === null || _headerGot_textContent === void 0 ? void 0 : _headerGot_textContent.trim()) || null, headerExpected);
                    if (headerExpected === null) {
                        return [
                            2
                        ];
                    }
                    headers = _to_consumable_array(infobar.shadowRoot.querySelectorAll('#contents div.key')).map(function(header) {
                        var _header_textContent;
                        return (_header_textContent = header.textContent) === null || _header_textContent === void 0 ? void 0 : _header_textContent.trim();
                    });
                    sections = _to_consumable_array(infobar.shadowRoot.querySelectorAll('#contents div.value')).map(function(section) {
                        var _section_textContent;
                        return (_section_textContent = section.textContent) === null || _section_textContent === void 0 ? void 0 : _section_textContent.trim();
                    });
                    assert.deepEqual(zip2(headers, sections), sectionsExpected);
                    return [
                        2
                    ];
            }
        });
    });
    return _testWarnings.apply(this, arguments);
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('PreloadingWarningsView', function() {
    it('shows no warnings if holdback flags are disabled', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: false,
                            disabledByDataSaver: false,
                            disabledByBatterySaver: false,
                            disabledByHoldbackPrefetchSpeculationRules: false,
                            disabledByHoldbackPrerenderSpeculationRules: false
                        }, null, [])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows an warning if disabled by user settings', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: true,
                            disabledByDataSaver: false,
                            disabledByBatterySaver: false,
                            disabledByHoldbackPrefetchSpeculationRules: false,
                            disabledByHoldbackPrerenderSpeculationRules: false
                        }, 'Speculative loading is disabled', [
                            [
                                'User settings or extensions',
                                'Speculative loading is disabled because of user settings or an extension. Go to Preload pages settings to update your preference. Go to Extensions settings to disable any extension that blocks speculative loading.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows an warning if disabled disabled by Data Saver', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: false,
                            disabledByDataSaver: true,
                            disabledByBatterySaver: false,
                            disabledByHoldbackPrefetchSpeculationRules: false,
                            disabledByHoldbackPrerenderSpeculationRules: false
                        }, 'Speculative loading is disabled', [
                            [
                                'Data Saver',
                                'Speculative loading is disabled because of the operating system\'s Data Saver mode.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows an warning if disabled by Battery Saver', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: false,
                            disabledByDataSaver: false,
                            disabledByBatterySaver: true,
                            disabledByHoldbackPrefetchSpeculationRules: false,
                            disabledByHoldbackPrerenderSpeculationRules: false
                        }, 'Speculative loading is disabled', [
                            [
                                'Battery Saver',
                                'Speculative loading is disabled because of the operating system\'s Battery Saver mode.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows an warning if disabled by prefetch holdback', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: false,
                            disabledByDataSaver: false,
                            disabledByBatterySaver: false,
                            disabledByHoldbackPrefetchSpeculationRules: true,
                            disabledByHoldbackPrerenderSpeculationRules: false
                        }, 'Speculative loading is force-enabled', [
                            [
                                'Prefetch was disabled, but is force-enabled now',
                                'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows an warning if disabled by prerender holdback', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: false,
                            disabledByDataSaver: false,
                            disabledByBatterySaver: false,
                            disabledByHoldbackPrefetchSpeculationRules: false,
                            disabledByHoldbackPrerenderSpeculationRules: true
                        }, 'Speculative loading is force-enabled', [
                            [
                                'Prerendering was disabled, but is force-enabled now',
                                'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows multiple warnings per reason', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testWarnings({
                            disabledByPreference: true,
                            disabledByDataSaver: true,
                            disabledByBatterySaver: true,
                            disabledByHoldbackPrefetchSpeculationRules: true,
                            disabledByHoldbackPrerenderSpeculationRules: true
                        }, 'Speculative loading is disabled', [
                            [
                                'User settings or extensions',
                                'Speculative loading is disabled because of user settings or an extension. Go to Preload pages settings to update your preference. Go to Extensions settings to disable any extension that blocks speculative loading.'
                            ],
                            [
                                'Data Saver',
                                'Speculative loading is disabled because of the operating system\'s Data Saver mode.'
                            ],
                            [
                                'Battery Saver',
                                'Speculative loading is disabled because of the operating system\'s Battery Saver mode.'
                            ],
                            [
                                'Prefetch was disabled, but is force-enabled now',
                                'Prefetch is forced-enabled because DevTools is open. When DevTools is closed, prefetch will be disabled because this browser session is part of a holdback group used for performance comparisons.'
                            ],
                            [
                                'Prerendering was disabled, but is force-enabled now',
                                'Prerendering is forced-enabled because DevTools is open. When DevTools is closed, prerendering will be disabled because this browser session is part of a holdback group used for performance comparisons.'
                            ]
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=PreloadingView.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);