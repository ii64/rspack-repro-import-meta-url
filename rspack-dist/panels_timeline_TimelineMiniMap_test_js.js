"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_TimelineMiniMap_test_js"], {
"./panels/timeline/TimelineMiniMap.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/timeline/components/components.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('TimelineMiniMap', function() {
    it('always shows the responsiveness, CPU activity and network panel', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, container, minimap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    container = document.createElement('div');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
                    minimap = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineMiniMap.TimelineMiniMap();
                    minimap.markAsRoot();
                    minimap.show(container);
                    minimap.setData({
                        traceParsedData: traceData,
                        settings: {
                            showMemory: false,
                            showScreenshots: false
                        }
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                    ];
                case 2:
                    _state.sent();
                    assert.exists(container.querySelector('#timeline-overview-responsiveness'));
                    assert.exists(container.querySelector('#timeline-overview-cpu-activity'));
                    assert.exists(container.querySelector('#timeline-overview-network'));
                    assert.isNull(container.querySelector('#timeline-overview-filmstrip'));
                    assert.isNull(container.querySelector('#timeline-overview-memory'));
                    minimap.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('will show the other panels if they are set to visible', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, container, minimap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    container = document.createElement('div');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
                    minimap = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineMiniMap.TimelineMiniMap();
                    minimap.markAsRoot();
                    minimap.show(container);
                    minimap.setData({
                        traceParsedData: traceData,
                        settings: {
                            showMemory: true,
                            showScreenshots: true
                        }
                    });
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                    ];
                case 2:
                    _state.sent();
                    assert.exists(container.querySelector('#timeline-overview-responsiveness'));
                    assert.exists(container.querySelector('#timeline-overview-cpu-activity'));
                    assert.exists(container.querySelector('#timeline-overview-network'));
                    assert.exists(container.querySelector('#timeline-overview-filmstrip'));
                    assert.exists(container.querySelector('#timeline-overview-memory'));
                    minimap.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates the first breadcrumb', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, container, minimap;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    container = document.createElement('div');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(container);
                    minimap = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineMiniMap.TimelineMiniMap();
                    minimap.markAsRoot();
                    minimap.show(container);
                    minimap.setData({
                        traceParsedData: traceData,
                        settings: {
                            showMemory: true,
                            showScreenshots: true
                        }
                    });
                    minimap.addInitialBreadcrumb();
                    return [
                        4,
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.raf)()
                    ];
                case 2:
                    _state.sent();
                    if (!minimap.breadcrumbs) {
                        throw new Error('The MiniMap unexpectedly did not create any breadcrumbs');
                    }
                    assert.strictEqual(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.Breadcrumbs.flattenBreadcrumbs(minimap.breadcrumbs.initialBreadcrumb).length, 1);
                    assert.deepEqual(minimap.breadcrumbs.initialBreadcrumb, {
                        window: traceData.Meta.traceBounds,
                        child: null
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('stores breadcrumbs to be serialized', /*#__PURE__*/ _async_to_generator(function() {
        var _minimap_breadcrumbs, _Timeline_ModificationsManager_ModificationsManager_activeManager, traceData, minimap, entireTraceBounds, newBounds, serializableModifications;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_3__.TraceLoader.traceEngine(this, 'web-dev.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    minimap = new _timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelineMiniMap.TimelineMiniMap();
                    minimap.setData({
                        traceParsedData: traceData,
                        settings: {
                            showMemory: true,
                            showScreenshots: true
                        }
                    });
                    minimap.addInitialBreadcrumb();
                    entireTraceBounds = traceData.Meta.traceBounds;
                    newBounds = _object_spread_props(_object_spread({}, entireTraceBounds), {
                        min: _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MicroSeconds((entireTraceBounds.max + entireTraceBounds.min) / 2)
                    });
                    (_minimap_breadcrumbs = minimap.breadcrumbs) === null || _minimap_breadcrumbs === void 0 ? void 0 : _minimap_breadcrumbs.add(newBounds);
                    serializableModifications = (_Timeline_ModificationsManager_ModificationsManager_activeManager = _timeline_js__WEBPACK_IMPORTED_MODULE_5__.ModificationsManager.ModificationsManager.activeManager()) === null || _Timeline_ModificationsManager_ModificationsManager_activeManager === void 0 ? void 0 : _Timeline_ModificationsManager_ModificationsManager_activeManager.toJSON();
                    assert.deepEqual(serializableModifications === null || serializableModifications === void 0 ? void 0 : serializableModifications.initialBreadcrumb.child, {
                        window: {
                            min: 1020035455504,
                            max: 1020036087961,
                            range: 1264914
                        },
                        child: null
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TimelineMiniMap.test.js.map


}),

}]);