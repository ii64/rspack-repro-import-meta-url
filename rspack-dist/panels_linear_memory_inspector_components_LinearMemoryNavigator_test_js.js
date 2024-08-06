"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryNavigator_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryNavigator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NAVIGATOR_ADDRESS_SELECTOR: function() { return NAVIGATOR_ADDRESS_SELECTOR; },
  NAVIGATOR_HISTORY_BUTTON_SELECTOR: function() { return NAVIGATOR_HISTORY_BUTTON_SELECTOR; },
  NAVIGATOR_PAGE_BUTTON_SELECTOR: function() { return NAVIGATOR_PAGE_BUTTON_SELECTOR; },
  NAVIGATOR_REFRESH_BUTTON_SELECTOR: function() { return NAVIGATOR_REFRESH_BUTTON_SELECTOR; }
});
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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



var NAVIGATOR_ADDRESS_SELECTOR = '[data-input]';
var NAVIGATOR_PAGE_BUTTON_SELECTOR = '[data-button=pagenavigation]';
var NAVIGATOR_HISTORY_BUTTON_SELECTOR = '[data-button=historynavigation]';
var NAVIGATOR_REFRESH_BUTTON_SELECTOR = '[data-button=refreshrequested]';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryNavigator', function() {
    var renderNavigator = function renderNavigator() {
        component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryNavigator.LinearMemoryNavigator();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        component.data = {
            address: '20',
            valid: true,
            mode: "Submitted" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Submitted */ ,
            error: undefined,
            canGoBackInHistory: true,
            canGoForwardInHistory: true
        };
    };
    var assertNavigationEvents = function assertNavigationEvents(eventType) {
        return _assertNavigationEvents.apply(this, arguments);
    };
    var component;
    beforeEach(renderNavigator);
    function _assertNavigationEvents() {
        _assertNavigationEvents = _async_to_generator(function(eventType) {
            var shadowRoot, pageNavigationButtons, navigation, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, button, eventPromise, event, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        shadowRoot = component.shadowRoot;
                        assert.isNotNull(shadowRoot);
                        pageNavigationButtons = shadowRoot.querySelectorAll("[data-button=".concat(eventType, "]"));
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(pageNavigationButtons, HTMLButtonElement);
                        assert.lengthOf(pageNavigationButtons, 2);
                        navigation = [];
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            6,
                            7,
                            8
                        ]);
                        _iterator = pageNavigationButtons[Symbol.iterator]();
                        _state.label = 2;
                    case 2:
                        if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                            3,
                            5
                        ];
                        button = _step.value;
                        eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, eventType);
                        button.click();
                        return [
                            4,
                            eventPromise
                        ];
                    case 3:
                        event = _state.sent();
                        navigation.push(event.data);
                        _state.label = 4;
                    case 4:
                        _iteratorNormalCompletion = true;
                        return [
                            3,
                            2
                        ];
                    case 5:
                        return [
                            3,
                            8
                        ];
                    case 6:
                        err = _state.sent();
                        _didIteratorError = true;
                        _iteratorError = err;
                        return [
                            3,
                            8
                        ];
                    case 7:
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                        return [
                            7
                        ];
                    case 8:
                        assert.deepEqual(navigation, [
                            "Backward" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Navigation.Backward */ ,
                            "Forward" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Navigation.Forward */ 
                        ]);
                        return [
                            2
                        ];
                }
            });
        });
        return _assertNavigationEvents.apply(this, arguments);
    }
    it('renders navigator address', function() {
        var shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        var input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '20');
    });
    it('re-renders address on address change', function() {
        component.data = {
            address: '16',
            valid: true,
            mode: "Submitted" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Submitted */ ,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false
        };
        var shadowRoot = component.shadowRoot;
        assert.isNotNull(shadowRoot);
        var input = shadowRoot.querySelector(NAVIGATOR_ADDRESS_SELECTOR);
        assert.instanceOf(input, HTMLInputElement);
        assert.strictEqual(input.value, '16');
    });
    it('sends event when clicking on refresh', /*#__PURE__*/ _async_to_generator(function() {
        var eventPromise, shadowRoot, refreshButton, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'refreshrequested');
                    shadowRoot = component.shadowRoot;
                    assert.isNotNull(shadowRoot);
                    refreshButton = shadowRoot.querySelector(NAVIGATOR_REFRESH_BUTTON_SELECTOR);
                    assert.instanceOf(refreshButton, HTMLButtonElement);
                    refreshButton.click();
                    _ = assert.isNotNull;
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sends events when clicking previous and next page', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        assertNavigationEvents('historynavigation')
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('sends events when clicking undo and redo', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        assertNavigationEvents('pagenavigation')
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('disables the previous and next page buttons if specified as not navigatable', function() {
        component.data = {
            address: '0',
            valid: true,
            mode: "Submitted" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Submitted */ ,
            error: undefined,
            canGoBackInHistory: false,
            canGoForwardInHistory: false
        };
        var buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        var historyBack = buttons[0];
        var historyForward = buttons[1];
        assert.isTrue(historyBack.disabled);
        assert.isTrue(historyForward.disabled);
    });
    it('shows tooltip on hovering over address', function() {
        var input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, 'Enter address');
    });
    it('shows tooltip with error and selects all text on submitting invalid address input', function() {
        var error = 'Address is invalid';
        var invalidAddress = '60';
        component.data = {
            address: invalidAddress,
            valid: false,
            mode: "InvalidSubmit" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.InvalidSubmit */ ,
            error: error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false
        };
        var input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
        assert.isNotNull(input.selectionStart);
        assert.isNotNull(input.selectionEnd);
        if (input.selectionEnd !== null && input.selectionStart !== null) {
            var selectionLength = input.selectionEnd - input.selectionStart;
            assert.strictEqual(selectionLength, invalidAddress.length);
        }
    });
    it('shows tooltip with invalid address on hovering over address', function() {
        var error = 'Address is invalid';
        component.data = {
            address: '60',
            valid: false,
            mode: "Edit" /* LinearMemoryInspectorComponents.LinearMemoryNavigator.Mode.Edit */ ,
            error: error,
            canGoBackInHistory: false,
            canGoForwardInHistory: false
        };
        var input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_ADDRESS_SELECTOR, HTMLInputElement);
        assert.strictEqual(input.title, error);
    });
    it('shows tooltip on page navigation buttons', function() {
        var buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_PAGE_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        var pageBack = buttons[0];
        var pageForward = buttons[1];
        assert.strictEqual(pageBack.title, 'Previous page');
        assert.strictEqual(pageForward.title, 'Next page');
    });
    it('shows tooltip on history navigation buttons', function() {
        var buttons = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, NAVIGATOR_HISTORY_BUTTON_SELECTOR, HTMLButtonElement);
        assert.lengthOf(buttons, 2);
        var historyBack = buttons[0];
        var historyForward = buttons[1];
        assert.strictEqual(historyBack.title, 'Go back in address history');
        assert.strictEqual(historyForward.title, 'Go forward in address history');
    });
    it('shows tooltip on refresh button', function() {
        var refreshButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, NAVIGATOR_REFRESH_BUTTON_SELECTOR, HTMLButtonElement);
        assert.strictEqual(refreshButton.title, 'Refresh');
    });
}); //# sourceMappingURL=LinearMemoryNavigator.test.js.map


}),

}]);