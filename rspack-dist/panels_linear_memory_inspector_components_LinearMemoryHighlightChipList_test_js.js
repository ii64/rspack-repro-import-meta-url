"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryHighlightChipList_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HIGHLIGHT_CHIP: function() { return HIGHLIGHT_CHIP; },
  HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR: function() { return HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR; },
  HIGHLIGHT_PILL_VARIABLE_NAME: function() { return HIGHLIGHT_PILL_VARIABLE_NAME; },
  HIGHLIGHT_ROW_REMOVE_BUTTON_SELECTOR: function() { return HIGHLIGHT_ROW_REMOVE_BUTTON_SELECTOR; }
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



var HIGHLIGHT_CHIP = '.highlight-chip';
var HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR = '.jump-to-highlight-button';
var HIGHLIGHT_PILL_VARIABLE_NAME = HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR + ' .value';
var HIGHLIGHT_ROW_REMOVE_BUTTON_SELECTOR = '.delete-highlight-button';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryInspectorHighlightChipList', function() {
    var renderHighlightRow = function renderHighlightRow() {
        component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryHighlightChipList.LinearMemoryHighlightChipList();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var highlightInfo = {
            startAddress: 10,
            size: 8,
            type: 'double',
            name: 'myNumber'
        };
        component.data = {
            highlightInfos: [
                highlightInfo
            ]
        };
    };
    var component;
    beforeEach(renderHighlightRow);
    it('renders a highlight chip button', function() {
        var button = component.shadowRoot.querySelector(HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR);
        assert.instanceOf(button, HTMLButtonElement);
        var expressionName = component.shadowRoot.querySelector(HIGHLIGHT_PILL_VARIABLE_NAME);
        assert.instanceOf(expressionName, HTMLSpanElement);
        assert.strictEqual(expressionName.innerText, 'myNumber');
    });
    it('focuses a highlight chip button', /*#__PURE__*/ _async_to_generator(function() {
        var chip, highlightedMemory, data;
        return _ts_generator(this, function(_state) {
            chip = component.shadowRoot.querySelector(HIGHLIGHT_CHIP);
            assert.instanceOf(chip, HTMLDivElement);
            assert.isTrue(!chip.classList.contains('focused'));
            highlightedMemory = {
                startAddress: 10,
                size: 8,
                type: 'double',
                name: 'myNumber'
            };
            data = {
                highlightInfos: [
                    highlightedMemory
                ],
                focusedMemoryHighlight: highlightedMemory
            };
            component.data = data;
            assert.isTrue(chip.classList.contains('focused'));
            return [
                2
            ];
        });
    }));
    it('renders multiple chips', function() {
        var highlightInfos = [
            {
                startAddress: 10,
                size: 8,
                type: 'double',
                name: 'myNumber'
            },
            {
                startAddress: 20,
                size: 4,
                type: 'int',
                name: 'myInt'
            }
        ];
        component.data = {
            highlightInfos: highlightInfos
        };
        var chips = component.shadowRoot.querySelectorAll(HIGHLIGHT_CHIP);
        assert.strictEqual(chips.length, highlightInfos.length);
    });
    it('sends event when clicking on jump to highlighted memory', /*#__PURE__*/ _async_to_generator(function() {
        var eventPromise, button, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryHighlightChipList.JumpToHighlightedMemoryEvent.eventName);
                    button = component.shadowRoot.querySelector(HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR);
                    assert.instanceOf(button, HTMLButtonElement);
                    button.click();
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
    it('sends event when clicking on delete highlight chip', /*#__PURE__*/ _async_to_generator(function() {
        var eventPromise, button, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryHighlightChipList.DeleteMemoryHighlightEvent.eventName);
                    button = component.shadowRoot.querySelector(HIGHLIGHT_ROW_REMOVE_BUTTON_SELECTOR);
                    assert.instanceOf(button, HTMLButtonElement);
                    button.click();
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
    it('shows tooltip on jump to highlighted memory button', function() {
        var button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, HIGHLIGHT_PILL_JUMP_BUTTON_SELECTOR, HTMLButtonElement);
        assert.strictEqual(button.title, 'Jump to this memory');
    });
    it('shows tooltip on delete highlight button', function() {
        var button = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, HIGHLIGHT_ROW_REMOVE_BUTTON_SELECTOR, HTMLButtonElement);
        assert.strictEqual(button.title, 'Stop highlighting this memory');
    });
}); //# sourceMappingURL=LinearMemoryHighlightChipList.test.js.map


}),
"./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LinearMemoryViewerUtils.js.map


}),
"./panels/linear_memory_inspector/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryHighlightChipList: function() { return /* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__; },
  LinearMemoryInspector: function() { return /* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__; },
  LinearMemoryInspectorUtils: function() { return /* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__; },
  LinearMemoryNavigator: function() { return /* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__; },
  LinearMemoryValueInterpreter: function() { return /* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__; },
  LinearMemoryViewer: function() { return /* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__; },
  LinearMemoryViewerUtils: function() { return /* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__; },
  ValueInterpreterDisplay: function() { return /* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__; },
  ValueInterpreterDisplayUtils: function() { return /* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__; },
  ValueInterpreterSettings: function() { return /* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__; }
});
/* harmony import */var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










 //# sourceMappingURL=components.js.map


}),

}]);