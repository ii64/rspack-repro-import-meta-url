"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryValueInterpreter_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ENDIANNESS_SELECTOR: function() { return ENDIANNESS_SELECTOR; }
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



var DISPLAY_SELECTOR = 'devtools-linear-memory-inspector-interpreter-display';
var SETTINGS_SELECTOR = 'devtools-linear-memory-inspector-interpreter-settings';
var TOOLBAR_SELECTOR = '.settings-toolbar';
var ENDIANNESS_SELECTOR = '[data-endianness]';
function assertSettingsRenders(component) {
    var settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
    assert.isNotNull(settings);
}
function assertDisplayRenders(component) {
    var display = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, DISPLAY_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterDisplay.ValueInterpreterDisplay);
    assert.isNotNull(display);
}
function clickSettingsButton(component) {
    var settingsButton = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, '[data-settings]', HTMLButtonElement);
    settingsButton.click();
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('LinearMemoryValueInterpreter', function() {
    var setUpComponent = function setUpComponent() {
        var buffer = new Uint8Array([
            34,
            234,
            12,
            3
        ]).buffer;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.LinearMemoryValueInterpreter.LinearMemoryValueInterpreter();
        component.data = {
            value: buffer,
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ 
            ]),
            memoryLength: buffer.byteLength
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        return component;
    };
    it('renders the settings toolbar', function() {
        var component = setUpComponent();
        var settingsToolbar = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, TOOLBAR_SELECTOR, HTMLDivElement);
        assert.isNotNull(settingsToolbar);
    });
    it('renders value display as default', function() {
        var component = setUpComponent();
        assertDisplayRenders(component);
    });
    it('switches between value display and value settings', function() {
        var component = setUpComponent();
        assertDisplayRenders(component);
        clickSettingsButton(component);
        assertSettingsRenders(component);
    });
    it('listens on TypeToggleEvents', /*#__PURE__*/ _async_to_generator(function() {
        var component, settings, eventPromise, expectedType, expectedChecked, typeToggleEvent, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent();
                    clickSettingsButton(component);
                    settings = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, SETTINGS_SELECTOR, _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'valuetypetoggled');
                    expectedType = "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ;
                    expectedChecked = true;
                    typeToggleEvent = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.TypeToggleEvent(expectedType, expectedChecked);
                    settings.dispatchEvent(typeToggleEvent);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.strictEqual(event.data.type, expectedType);
                    assert.strictEqual(event.data.checked, expectedChecked);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders the endianness options', function() {
        var component = setUpComponent();
        var input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
        assert.deepEqual(input.value, "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ );
        var options = input.querySelectorAll('option');
        var endiannessSettings = Array.from(options).map(function(option) {
            return option.value;
        });
        assert.deepEqual(endiannessSettings, [
            "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ ,
            "Big Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Big */ 
        ]);
    });
    it('triggers an event on changing endianness', /*#__PURE__*/ _async_to_generator(function() {
        var component, input, eventPromise, changeEvent, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent();
                    input = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, ENDIANNESS_SELECTOR, HTMLSelectElement);
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'endiannesschanged');
                    changeEvent = new Event('change');
                    input.dispatchEvent(changeEvent);
                    return [
                        4,
                        eventPromise
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.data, "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */ );
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LinearMemoryValueInterpreter.test.js.map


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