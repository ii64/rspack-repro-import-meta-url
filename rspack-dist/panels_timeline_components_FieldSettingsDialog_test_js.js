"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_FieldSettingsDialog_test_js"], {
"./panels/timeline/components/FieldSettingsDialog.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/crux-manager/crux-manager.js */ "./models/crux-manager/crux-manager.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
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





var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
var OPEN_BUTTON_SELECTOR = 'devtools-button';
var ENABLE_BUTTON_SELECTOR = 'devtools-button[jslogcontext="field-data-enable"]';
var DISABLE_BUTTON_SELECTOR = 'devtools-button[jslogcontext="field-data-disable"]';
var OVERRIDE_CHECKBOX_SELECTOR = 'input[type="checkbox"]';
var OVERRIDE_TEXT_SELECTOR = 'input[type="text"]';
function mockResponse() {
    return {
        record: {
            key: {},
            metrics: {
                'largest_contentful_paint': {
                    histogram: [
                        {
                            start: 0,
                            end: 2500,
                            density: 0.5
                        },
                        {
                            start: 2500,
                            end: 4000,
                            density: 0.3
                        },
                        {
                            start: 4000,
                            density: 0.2
                        }
                    ],
                    percentiles: {
                        p75: 1000
                    }
                },
                'cumulative_layout_shift': {
                    histogram: [
                        {
                            start: 0,
                            end: 0.1,
                            density: 0.1
                        },
                        {
                            start: 0.1,
                            end: 0.25,
                            density: 0.1
                        },
                        {
                            start: 0.25,
                            density: 0.8
                        }
                    ],
                    percentiles: {
                        p75: 0.25
                    }
                }
            },
            collectionPeriod: {
                firstDate: {
                    year: 2024,
                    month: 1,
                    day: 1
                },
                lastDate: {
                    year: 2024,
                    month: 1,
                    day: 29
                }
            }
        }
    };
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('FieldSettingsDialog', function() {
    var cruxManager;
    var mockFieldData;
    var getFieldDataStub;
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            cruxManager = _models_crux_manager_crux_manager_js__WEBPACK_IMPORTED_MODULE_0__.CrUXManager.instance({
                forceNew: true
            });
            getFieldDataStub = sinon.stub(cruxManager, 'getFieldDataForPage').callsFake(/*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        mockFieldData
                    ];
                });
            }));
            mockFieldData = {
                'origin-ALL': null,
                'origin-DESKTOP': null,
                'origin-PHONE': null,
                'origin-TABLET': null,
                'url-ALL': null,
                'url-DESKTOP': null,
                'url-PHONE': null,
                'url-TABLET': null
            };
            cruxManager.getConfigSetting().set({
                enabled: false,
                override: ''
            });
            return [
                2
            ];
        });
    }));
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            getFieldDataStub.restore();
            return [
                2
            ];
        });
    }));
    it('should enable field when enable button clicked', /*#__PURE__*/ _async_to_generator(function() {
        var view, openButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_4__.FieldSettingsDialog.FieldSettingsDialog();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(cruxManager.getConfigSetting().get().enabled);
                    openButton = view.shadowRoot.querySelector(OPEN_BUTTON_SELECTOR);
                    assert.strictEqual(openButton.innerText, 'Set up');
                    openButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    view.shadowRoot.querySelector(ENABLE_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(view.shadowRoot.querySelector('devtools-dialog').shadowRoot.querySelector('dialog').open);
                    assert.isTrue(cruxManager.getConfigSetting().get().enabled);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should disable field data when disable button clicked', /*#__PURE__*/ _async_to_generator(function() {
        var view, openButton, disableButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    cruxManager.getConfigSetting().set({
                        enabled: true,
                        override: ''
                    });
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_4__.FieldSettingsDialog.FieldSettingsDialog();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    openButton = view.shadowRoot.querySelector(OPEN_BUTTON_SELECTOR);
                    assert.strictEqual(openButton.innerText, 'Configure');
                    openButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    disableButton = view.shadowRoot.querySelector(DISABLE_BUTTON_SELECTOR);
                    assert.strictEqual(disableButton.innerText, 'Opt out');
                    disableButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(view.shadowRoot.querySelector('devtools-dialog').shadowRoot.querySelector('dialog').open);
                    assert.isFalse(cruxManager.getConfigSetting().get().enabled);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should set URL override on enable', /*#__PURE__*/ _async_to_generator(function() {
        var view, urlOverride;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mockFieldData['url-ALL'] = mockResponse();
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_4__.FieldSettingsDialog.FieldSettingsDialog();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    view.shadowRoot.querySelector(OPEN_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    view.shadowRoot.querySelector(OVERRIDE_CHECKBOX_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    urlOverride = view.shadowRoot.querySelector(OVERRIDE_TEXT_SELECTOR);
                    urlOverride.value = 'https://example.com';
                    urlOverride.dispatchEvent(new Event('change'));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    view.shadowRoot.querySelector(ENABLE_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 5:
                    _state.sent();
                    assert.isFalse(view.shadowRoot.querySelector('devtools-dialog').shadowRoot.querySelector('dialog').open);
                    assert.isTrue(cruxManager.getConfigSetting().get().enabled);
                    assert.strictEqual(cruxManager.getConfigSetting().get().override, 'https://example.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should still set URL override on disable', /*#__PURE__*/ _async_to_generator(function() {
        var view, urlOverride;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    mockFieldData['url-ALL'] = mockResponse();
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_4__.FieldSettingsDialog.FieldSettingsDialog();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    view.shadowRoot.querySelector(OPEN_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    view.shadowRoot.querySelector(OVERRIDE_CHECKBOX_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    urlOverride = view.shadowRoot.querySelector(OVERRIDE_TEXT_SELECTOR);
                    urlOverride.value = 'https://example.com';
                    urlOverride.dispatchEvent(new Event('change'));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    view.shadowRoot.querySelector(DISABLE_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 5:
                    _state.sent();
                    assert.isFalse(view.shadowRoot.querySelector('devtools-dialog').shadowRoot.querySelector('dialog').open);
                    assert.isFalse(cruxManager.getConfigSetting().get().enabled);
                    assert.strictEqual(cruxManager.getConfigSetting().get().override, 'https://example.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should show message for URL override with no data', /*#__PURE__*/ _async_to_generator(function() {
        var view, urlOverride;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _components_js__WEBPACK_IMPORTED_MODULE_4__.FieldSettingsDialog.FieldSettingsDialog();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    view.shadowRoot.querySelector(OPEN_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    view.shadowRoot.querySelector(OVERRIDE_CHECKBOX_SELECTOR).click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    urlOverride = view.shadowRoot.querySelector(OVERRIDE_TEXT_SELECTOR);
                    urlOverride.value = 'https://example.com';
                    urlOverride.dispatchEvent(new Event('change'));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    view.shadowRoot.querySelector(ENABLE_BUTTON_SELECTOR).click();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 5:
                    _state.sent();
                    assert.strictEqual(view.shadowRoot.querySelector('.warning').textContent, 'The Chrome UX Report does not have sufficient real-world speed data for this page.');
                    assert.isTrue(view.shadowRoot.querySelector('devtools-dialog').shadowRoot.querySelector('dialog').open);
                    assert.isFalse(cruxManager.getConfigSetting().get().enabled);
                    assert.strictEqual(cruxManager.getConfigSetting().get().override, '');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=FieldSettingsDialog.test.js.map


}),

}]);