"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_ReplaySection_test_js"], {
"./panels/recorder/components/ReplaySection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
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
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ReplaySection', function() {
    var createReplaySection = function createReplaySection() {
        return _createReplaySection.apply(this, arguments);
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.setupActionRegistry)();
    var settings;
    function _createReplaySection() {
        _createReplaySection = _async_to_generator(function() {
            var component;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        settings = new _models_models_js__WEBPACK_IMPORTED_MODULE_3__.RecorderSettings.RecorderSettings();
                        component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ReplaySection.ReplaySection();
                        component.data = {
                            settings: settings,
                            replayExtensions: []
                        };
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
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
        return _createReplaySection.apply(this, arguments);
    }
    afterEach(function() {
        settings.speed = "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ ;
    });
    it('should change the button value when another option is selected in select menu', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot, component, selectButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createReplaySection()
                    ];
                case 1:
                    component = _state.sent();
                    selectButton = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('devtools-select-button');
                    assert.strictEqual(selectButton === null || selectButton === void 0 ? void 0 : selectButton.value, "normal" /* Models.RecordingPlayer.PlayRecordingSpeed.Normal */ );
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_4__.SelectButton.SelectMenuSelectedEvent("slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ ));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(selectButton === null || selectButton === void 0 ? void 0 : selectButton.value, "slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('should emit startreplayevent on selectbuttonclick event', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot, component, onceClicked, selectButton, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createReplaySection()
                    ];
                case 1:
                    component = _state.sent();
                    onceClicked = new Promise(function(resolve) {
                        component.addEventListener('startreplay', resolve, {
                            once: true
                        });
                    });
                    selectButton = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('devtools-select-button');
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_4__.SelectButton.SelectMenuSelectedEvent("slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ ));
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_4__.SelectButton.SelectButtonClickEvent());
                    return [
                        4,
                        onceClicked
                    ];
                case 2:
                    event = _state.sent();
                    assert.deepEqual(event.speed, "slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('should save the changed button when option is selected in select menu', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot, component, selectButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createReplaySection()
                    ];
                case 1:
                    component = _state.sent();
                    selectButton = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('devtools-select-button');
                    selectButton === null || selectButton === void 0 ? void 0 : selectButton.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_4__.SelectButton.SelectMenuSelectedEvent("slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ ));
                    assert.strictEqual(settings.speed, "slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ );
                    return [
                        2
                    ];
            }
        });
    }));
    it('should load the saved button on initial render', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot, component, selectButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    settings.speed = "slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ ;
                    return [
                        4,
                        createReplaySection()
                    ];
                case 1:
                    component = _state.sent();
                    selectButton = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('devtools-select-button');
                    assert.strictEqual(selectButton === null || selectButton === void 0 ? void 0 : selectButton.value, "slow" /* Models.RecordingPlayer.PlayRecordingSpeed.Slow */ );
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ReplaySection.test.js.map


}),

}]);