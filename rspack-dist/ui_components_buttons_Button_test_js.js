"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_buttons_Button_test_js"], {
"./ui/components/buttons/Button.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons.js */ "./ui/components/buttons/buttons.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
describe('Button', function() {
    var renderButton = function renderButton() {
        return _renderButton.apply(this, arguments);
    };
    var testClick = function testClick() {
        return _testClick.apply(this, arguments);
    };
    var iconUrl = new URL(/* asset import */__webpack_require__(/*! ../../../Images/file-image.svg */ "./Images/file-image.svg?6220"), __webpack_require__.b).toString();
    function _renderButton() {
        _renderButton = _async_to_generator(function() {
            var data, text, button;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        data = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
                        }, text = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 'Button';
                        button = new _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
                        button.data = data;
                        // Toolbar and round buttons do not take text, and error if you try to set any.
                        if (data.variant !== "toolbar" /* Buttons.Button.Variant.TOOLBAR */  && data.variant !== "icon" /* Buttons.Button.Variant.ICON */ ) {
                            button.innerText = text;
                        }
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(button);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            button
                        ];
                }
            });
        });
        return _renderButton.apply(this, arguments);
    }
    function _testClick() {
        _testClick = _async_to_generator(function() {
            var data, expectedClickCount, _button_shadowRoot, button, clicks, innerButton;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        data = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            disabled: false
                        }, expectedClickCount = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : 1;
                        return [
                            4,
                            renderButton(data)
                        ];
                    case 1:
                        button = _state.sent();
                        clicks = 0;
                        button.onclick = function() {
                            return clicks++;
                        };
                        innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                        assert.instanceOf(innerButton, HTMLButtonElement);
                        innerButton.click();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(innerButton, {
                            key: 'Enter'
                        });
                        assert.strictEqual(clicks, expectedClickCount);
                        return [
                            2
                        ];
                }
            });
        });
        return _testClick.apply(this, arguments);
    }
    it('primary button can be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('disabled primary button cannot be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            disabled: true
                        }, 0)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('secondary button can be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ 
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('disabled secondary button cannot be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
                            disabled: true
                        }, 0)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('toolbar button can be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                            iconUrl: iconUrl
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('disabled toolbar button cannot be clicked', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testClick({
                            variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
                            iconUrl: iconUrl,
                            disabled: true
                        }, 0)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets the no additional classes set for the inner button if only text is provided', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton()
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.isTrue(!innerButton.classList.contains('text-with-icon'));
                    assert.isTrue(!innerButton.classList.contains('only-icon'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets title set', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            title: 'Custom'
                        })
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.strictEqual(innerButton.title, 'Custom');
                    button.title = 'Custom2';
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(innerButton.title, 'Custom2');
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets the text-with-icon class set for the inner button if text and icon is provided', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            iconUrl: iconUrl
                        }, 'text')
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.isTrue(innerButton.classList.contains('text-with-icon'));
                    assert.isTrue(!innerButton.classList.contains('only-icon'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets the only-icon class set for the inner button if only icon is provided', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            iconUrl: iconUrl
                        }, '')
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.isTrue(!innerButton.classList.contains('text-with-icon'));
                    assert.isTrue(innerButton.classList.contains('only-icon'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('gets the `small` class set for the inner button if size === SMALL', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            size: "SMALL" /* Buttons.Button.Size.SMALL */ 
                        }, '')
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.isTrue(innerButton.classList.contains('small'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not get the `small` class set for the inner button if size === MEDIUM', /*#__PURE__*/ _async_to_generator(function() {
        var _button_shadowRoot, button, innerButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderButton({
                            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                            iconUrl: iconUrl
                        }, '')
                    ];
                case 1:
                    button = _state.sent();
                    innerButton = (_button_shadowRoot = button.shadowRoot) === null || _button_shadowRoot === void 0 ? void 0 : _button_shadowRoot.querySelector('button');
                    assert.isFalse(innerButton.classList.contains('small'));
                    return [
                        2
                    ];
            }
        });
    }));
    describe('in forms', function() {
        var renderForm = function renderForm() {
            return _renderForm.apply(this, arguments);
        };
        function _renderForm() {
            _renderForm = _async_to_generator(function() {
                var data, form, input, button, reference;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            data = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {
                                variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
                            };
                            form = document.createElement('form');
                            input = document.createElement('input');
                            button = new _buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button();
                            reference = {
                                submitCount: 0,
                                form: form,
                                button: button,
                                input: input
                            };
                            form.onsubmit = function(event) {
                                event.preventDefault();
                                reference.submitCount++;
                            };
                            button.data = data;
                            button.innerText = 'button';
                            form.append(input);
                            form.append(button);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(form);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2,
                                reference
                            ];
                    }
                });
            });
            return _renderForm.apply(this, arguments);
        }
        it('submits a form with button[type=submit]', /*#__PURE__*/ _async_to_generator(function() {
            var state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderForm({
                                variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                                type: 'submit'
                            })
                        ];
                    case 1:
                        state = _state.sent();
                        state.button.click();
                        assert.strictEqual(state.submitCount, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not submit a form with button[type=button]', /*#__PURE__*/ _async_to_generator(function() {
            var state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderForm({
                                variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                                type: 'button'
                            })
                        ];
                    case 1:
                        state = _state.sent();
                        state.button.click();
                        assert.strictEqual(state.submitCount, 0);
                        return [
                            2
                        ];
                }
            });
        }));
        it('resets a form with button[type=reset]', /*#__PURE__*/ _async_to_generator(function() {
            var state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderForm({
                                variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                                type: 'reset'
                            })
                        ];
                    case 1:
                        state = _state.sent();
                        state.input.value = 'test';
                        state.button.click();
                        assert.strictEqual(state.input.value, '');
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Button.test.js.map


}),

}]);