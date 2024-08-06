"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_two_states_counter_TwoStatesCounter_test_js"], {
"./ui/components/two_states_counter/TwoStatesCounter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./two_states_counter.js */ "./ui/components/two_states_counter/two_states_counter.js");
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



var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
var ACTIVE_SELECTOR = '.active';
var INACTIVE_SELECTOR = '.inactive';
function renderCounter(data) {
    return _renderCounter.apply(this, arguments);
}
function _renderCounter() {
    _renderCounter = _async_to_generator(function(data) {
        var counter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    counter = new _two_states_counter_js__WEBPACK_IMPORTED_MODULE_2__.TwoStatesCounter.TwoStatesCounter();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(counter);
                    counter.data = data;
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        counter
                    ];
            }
        });
    });
    return _renderCounter.apply(this, arguments);
}
function assertContentAndTitleForPart(counter, selector, content, title) {
    var _activeCount_textContent;
    assert.isNotNull(counter.shadowRoot);
    var activeCount = counter.shadowRoot.querySelector(selector);
    assert.instanceOf(activeCount, HTMLSpanElement);
    assert.strictEqual((_activeCount_textContent = activeCount.textContent) === null || _activeCount_textContent === void 0 ? void 0 : _activeCount_textContent.trim(), "".concat(content));
    assert.strictEqual(activeCount.title, title ? "".concat(title) : '');
}
describe('TwoStatesCounter', function() {
    it('renders a counter with active count only', /*#__PURE__*/ _async_to_generator(function() {
        var data, counter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        active: 3,
                        inactive: 0,
                        activeTitle: 'Num active'
                    };
                    return [
                        4,
                        renderCounter(data)
                    ];
                case 1:
                    counter = _state.sent();
                    assert.isNotNull(counter.shadowRoot);
                    assertContentAndTitleForPart(counter, ACTIVE_SELECTOR, "".concat(data.active), data.activeTitle);
                    assert.isNull(counter.shadowRoot.querySelector(INACTIVE_SELECTOR));
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders a counter with inactive count only', /*#__PURE__*/ _async_to_generator(function() {
        var data, counter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        active: 0,
                        inactive: 10,
                        inactiveTitle: 'Num inactive'
                    };
                    return [
                        4,
                        renderCounter(data)
                    ];
                case 1:
                    counter = _state.sent();
                    assert.isNotNull(counter.shadowRoot);
                    assertContentAndTitleForPart(counter, INACTIVE_SELECTOR, "".concat(data.inactive), data.inactiveTitle);
                    assert.isNull(counter.shadowRoot.querySelector(ACTIVE_SELECTOR));
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders a counter with active and inactive counts', /*#__PURE__*/ _async_to_generator(function() {
        var data, counter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        active: 2,
                        inactive: 3,
                        activeTitle: 'Num active',
                        inactiveTitle: 'Num inactive'
                    };
                    return [
                        4,
                        renderCounter(data)
                    ];
                case 1:
                    counter = _state.sent();
                    assert.isNotNull(counter.shadowRoot);
                    assertContentAndTitleForPart(counter, ACTIVE_SELECTOR, "".concat(data.active), data.activeTitle);
                    assertContentAndTitleForPart(counter, INACTIVE_SELECTOR, "".concat(data.inactive), data.inactiveTitle);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders nothing if both counts are zero', /*#__PURE__*/ _async_to_generator(function() {
        var data, counter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        active: 0,
                        inactive: 0,
                        inactiveTitle: 'Num inactive'
                    };
                    return [
                        4,
                        renderCounter(data)
                    ];
                case 1:
                    counter = _state.sent();
                    assert.isNotNull(counter.shadowRoot);
                    assert.isNull(counter.shadowRoot.querySelector(INACTIVE_SELECTOR));
                    assert.isNull(counter.shadowRoot.querySelector(ACTIVE_SELECTOR));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TwoStatesCounter.test.js.map


}),
"./ui/components/two_states_counter/two_states_counter.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TwoStatesCounter: function() { return /* reexport module object */ _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _TwoStatesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TwoStatesCounter.js */ "./ui/components/two_states_counter/TwoStatesCounter.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=two_states_counter.js.map


}),

}]);