"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_CPUThrottlingSelector_test_js"], {
"./panels/timeline/components/CPUThrottlingSelector.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panels/mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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






(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('CPUThrottlingSelector', function() {
    var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
    var cpuThrottlingManager;
    beforeEach(function() {
        cpuThrottlingManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CPUThrottlingManager.CPUThrottlingManager.instance({
            forceNew: true
        });
        _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_1__.ThrottlingManager.ThrottlingManager.instance({
            forceNew: true
        });
    });
    it('renders all CPU throttling presets', /*#__PURE__*/ _async_to_generator(function() {
        var view, menuItems;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_5__.CPUThrottlingSelector.CPUThrottlingSelector();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    menuItems = view.shadowRoot.querySelectorAll('devtools-menu-item');
                    assert.lengthOf(menuItems, 4);
                    assert.strictEqual(menuItems[0].value, 1);
                    assert.isTrue(menuItems[0].selected);
                    assert.match(menuItems[0].innerText, /No throttling/);
                    assert.strictEqual(menuItems[1].value, 4);
                    assert.isFalse(menuItems[1].selected);
                    assert.match(menuItems[1].innerText, /4× slowdown/);
                    assert.strictEqual(menuItems[2].value, 6);
                    assert.isFalse(menuItems[2].selected);
                    assert.match(menuItems[2].innerText, /6× slowdown/);
                    assert.strictEqual(menuItems[3].value, 20);
                    assert.isFalse(menuItems[3].selected);
                    assert.match(menuItems[3].innerText, /20× slowdown/);
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates CPU throttling manager on change', /*#__PURE__*/ _async_to_generator(function() {
        var view, menuItems;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_5__.CPUThrottlingSelector.CPUThrottlingSelector();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    menuItems = view.shadowRoot.querySelectorAll('devtools-menu-item');
                    assert.isTrue(menuItems[0].selected);
                    assert.strictEqual(cpuThrottlingManager.cpuThrottlingRate(), 1);
                    menuItems[1].click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(menuItems[1].selected);
                    assert.strictEqual(cpuThrottlingManager.cpuThrottlingRate(), 4);
                    return [
                        2
                    ];
            }
        });
    }));
    it('reacts to changes in CPU throttling manager', /*#__PURE__*/ _async_to_generator(function() {
        var view, menuItems;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_5__.CPUThrottlingSelector.CPUThrottlingSelector();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    menuItems = view.shadowRoot.querySelectorAll('devtools-menu-item');
                    assert.isTrue(menuItems[0].selected);
                    cpuThrottlingManager.setCPUThrottlingRate(6);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(menuItems[2].selected);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CPUThrottlingSelector.test.js.map


}),

}]);