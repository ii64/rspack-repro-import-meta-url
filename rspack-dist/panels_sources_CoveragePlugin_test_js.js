"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CoveragePlugin_test_js"], {
"./panels/sources/CoveragePlugin.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _coverage_coverage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coverage/coverage.js */ "./panels/coverage/coverage.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
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









var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('CoveragePlugin', function() {
    var target;
    var uiSourceCode;
    var model;
    var coverageInfo;
    var URL = 'test.js';
    beforeEach(function() {
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget
        });
        var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance();
        var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
        var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance({
            forceNew: true,
            resourceMapping: resourceMapping,
            targetManager: targetManager
        });
        model = target.model(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageModel.CoverageModel);
        coverageInfo = new _coverage_coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageModel.URLCoverageInfo(URL);
        coverageInfo.addToSizes(9, 28);
        sinon.stub(model, 'getCoverageForUrl').withArgs(URL).returns(coverageInfo);
        uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createContentProviderUISourceCode)({
            url: URL,
            mimeType: 'text/javascript'
        }).uiSourceCode;
    });
    it('shows stats', /*#__PURE__*/ _async_to_generator(function() {
        var _toolbarItem_element_shadowRoot_querySelector, _toolbarItem_element_shadowRoot, coveragePlugin, _coveragePlugin_rightToolbarItems, toolbarItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    coveragePlugin = new _sources_js__WEBPACK_IMPORTED_MODULE_8__.CoveragePlugin.CoveragePlugin(uiSourceCode, {});
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    _coveragePlugin_rightToolbarItems = _sliced_to_array(coveragePlugin.rightToolbarItems(), 1), toolbarItem = _coveragePlugin_rightToolbarItems[0];
                    assert.strictEqual('Show Details', (_toolbarItem_element_shadowRoot = toolbarItem.element.shadowRoot) === null || _toolbarItem_element_shadowRoot === void 0 ? void 0 : (_toolbarItem_element_shadowRoot_querySelector = _toolbarItem_element_shadowRoot.querySelector('button')) === null || _toolbarItem_element_shadowRoot_querySelector === void 0 ? void 0 : _toolbarItem_element_shadowRoot_querySelector.title);
                    assert.strictEqual('Coverage: 32.1%', toolbarItem.element.textContent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates stats', /*#__PURE__*/ _async_to_generator(function() {
        var coveragePlugin, _coveragePlugin_rightToolbarItems, toolbarItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    coveragePlugin = new _sources_js__WEBPACK_IMPORTED_MODULE_8__.CoveragePlugin.CoveragePlugin(uiSourceCode, {});
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    _coveragePlugin_rightToolbarItems = _sliced_to_array(coveragePlugin.rightToolbarItems(), 1), toolbarItem = _coveragePlugin_rightToolbarItems[0];
                    assert.strictEqual('Coverage: 32.1%', toolbarItem.element.textContent);
                    coverageInfo.addToSizes(10, 2);
                    assert.strictEqual('Coverage: 63.3%', toolbarItem.element.textContent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resets stats', /*#__PURE__*/ _async_to_generator(function() {
        var coveragePlugin, _coveragePlugin_rightToolbarItems, toolbarItem;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    coveragePlugin = new _sources_js__WEBPACK_IMPORTED_MODULE_8__.CoveragePlugin.CoveragePlugin(uiSourceCode, {});
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    _coveragePlugin_rightToolbarItems = _sliced_to_array(coveragePlugin.rightToolbarItems(), 1), toolbarItem = _coveragePlugin_rightToolbarItems[0];
                    assert.strictEqual('Coverage: 32.1%', toolbarItem.element.textContent);
                    model.dispatchEventToListeners(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_7__.CoverageModel.Events.CoverageReset);
                    assert.strictEqual('Click to show Coverage Panel', toolbarItem.element.ariaLabel);
                    assert.strictEqual('Coverage: n/a', toolbarItem.element.textContent);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CoveragePlugin.test.js.map


}),

}]);