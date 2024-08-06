"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_layers_LayersPanel_test_js"], {
"./panels/layers/LayersPanel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _layers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layers.js */ "./panels/layers/layers.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('LayersPanel', function() {
    var target;
    var prerenderTarget;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var actionRegistryInstance, tabTarget;
        return _ts_generator(this, function(_state) {
            actionRegistryInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance({
                forceNew: true
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ShortcutRegistry.ShortcutRegistry.instance({
                forceNew: true,
                actionRegistry: actionRegistryInstance
            });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
            tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
            });
            prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                parentTarget: tabTarget,
                subtype: 'prerender'
            });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                parentTarget: tabTarget
            });
            return [
                2
            ];
        });
    }));
    it('udpates 3d view when layer painted', /*#__PURE__*/ _async_to_generator(function() {
        var panel, layerTreeModel, updateLayerSnapshot, LAYER;
        return _ts_generator(this, function(_state) {
            panel = _layers_js__WEBPACK_IMPORTED_MODULE_4__.LayersPanel.LayersPanel.instance({
                forceNew: true
            });
            layerTreeModel = target.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
            assert.exists(layerTreeModel);
            updateLayerSnapshot = sinon.stub(panel.layers3DView, 'updateLayerSnapshot');
            LAYER = {
                id: function() {
                    return 'TEST_LAYER';
                }
            };
            layerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER);
            assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER));
            return [
                2
            ];
        });
    }));
    it('can handle scope switches', /*#__PURE__*/ _async_to_generator(function() {
        var panel, primaryLayerTreeModel, prerenderLayerTreeModel, updateLayerSnapshot, LAYER_1, LAYER_2;
        return _ts_generator(this, function(_state) {
            panel = _layers_js__WEBPACK_IMPORTED_MODULE_4__.LayersPanel.LayersPanel.instance({
                forceNew: true
            });
            primaryLayerTreeModel = target.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
            assert.exists(primaryLayerTreeModel);
            prerenderLayerTreeModel = prerenderTarget.model(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.LayerTreeModel);
            assert.exists(prerenderLayerTreeModel);
            updateLayerSnapshot = sinon.stub(panel.layers3DView, 'updateLayerSnapshot');
            LAYER_1 = {
                id: function() {
                    return 'TEST_LAYER_1';
                }
            };
            LAYER_2 = {
                id: function() {
                    return 'TEST_LAYER_2';
                }
            };
            primaryLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_1);
            prerenderLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_2);
            assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER_1));
            updateLayerSnapshot.reset();
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(prerenderTarget);
            primaryLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_1);
            prerenderLayerTreeModel.dispatchEventToListeners(_layers_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeModel.Events.LayerPainted, LAYER_2);
            assert.isTrue(updateLayerSnapshot.calledOnceWith(LAYER_2));
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=LayersPanel.test.js.map


}),
"./panels/layers/layers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LayerPaintProfilerView: function() { return /* reexport module object */ _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayerTreeModel: function() { return /* reexport module object */ _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  LayersPanel: function() { return /* reexport module object */ _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./panels/layers/LayerPaintProfilerView.js");
/* harmony import */var _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayersPanel.js */ "./panels/layers/LayersPanel.js");
/* harmony import */var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./panels/layers/LayerTreeModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=layers.js.map


}),

}]);