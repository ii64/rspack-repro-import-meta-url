"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Toolbar_test_js"], {
"./ui/legacy/Toolbar.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
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

var coordinator = _components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_0__.RenderCoordinator.RenderCoordinator.instance();



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('Toolbar', function() {
    describe('ToolbarInput', function() {
        it('sets a title on the clear button', /*#__PURE__*/ _async_to_generator(function() {
            var _clearButton_shadowRoot, input, clearButton, innerButton;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        input = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder');
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(input.element);
                        input.setValue('test value');
                        clearButton = input.element.querySelector('.toolbar-input-clear-button');
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        innerButton = clearButton === null || clearButton === void 0 ? void 0 : (_clearButton_shadowRoot = clearButton.shadowRoot) === null || _clearButton_shadowRoot === void 0 ? void 0 : _clearButton_shadowRoot.querySelector('button');
                        assert.instanceOf(innerButton, HTMLElement);
                        assert.strictEqual(innerButton.title, 'Clear');
                        return [
                            2
                        ];
                }
            });
        }));
        it('clears the input when the clear button is clicked', function() {
            var input = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(input.element);
            var clearButton = input.element.querySelector('.toolbar-input-clear-button');
            assert.instanceOf(clearButton, HTMLElement);
            input.setValue('test value');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent)(clearButton);
            assert.strictEqual(input.value(), '');
        });
    });
    it('can append items into the toolbar', /*#__PURE__*/ _async_to_generator(function() {
        var _div_querySelector_shadowRoot, _div_querySelector, div, toolbar, itemOne, itemTwo, toolbarInputs, placeholders;
        return _ts_generator(this, function(_state) {
            div = document.createElement('div');
            toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar('test-toolbar', div);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            itemOne = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder-item-1');
            toolbar.appendToolbarItem(itemOne);
            itemTwo = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder-item-2');
            toolbar.appendToolbarItem(itemTwo);
            toolbarInputs = (_div_querySelector = div.querySelector('.toolbar')) === null || _div_querySelector === void 0 ? void 0 : (_div_querySelector_shadowRoot = _div_querySelector.shadowRoot) === null || _div_querySelector_shadowRoot === void 0 ? void 0 : _div_querySelector_shadowRoot.querySelectorAll('[data-placeholder]');
            assert.isOk(toolbarInputs);
            assert.lengthOf(toolbarInputs, 2);
            placeholders = Array.from(toolbarInputs).map(function(input) {
                return input.getAttribute('data-placeholder');
            });
            assert.deepEqual(placeholders, [
                'placeholder-item-1',
                'placeholder-item-2'
            ]);
            return [
                2
            ];
        });
    }));
    it('can prepend items into the toolbar', /*#__PURE__*/ _async_to_generator(function() {
        var _div_querySelector_shadowRoot, _div_querySelector, div, toolbar, itemOne, itemTwo, toolbarInputs, placeholders;
        return _ts_generator(this, function(_state) {
            div = document.createElement('div');
            toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar('test-toolbar', div);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(div);
            itemOne = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder-item-1');
            toolbar.appendToolbarItem(itemOne);
            itemTwo = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder-item-2');
            toolbar.prependToolbarItem(itemTwo);
            toolbarInputs = (_div_querySelector = div.querySelector('.toolbar')) === null || _div_querySelector === void 0 ? void 0 : (_div_querySelector_shadowRoot = _div_querySelector.shadowRoot) === null || _div_querySelector_shadowRoot === void 0 ? void 0 : _div_querySelector_shadowRoot.querySelectorAll('[data-placeholder]');
            assert.isOk(toolbarInputs);
            assert.lengthOf(toolbarInputs, 2);
            placeholders = Array.from(toolbarInputs).map(function(input) {
                return input.getAttribute('data-placeholder');
            });
            // Ensure the second item was prepended correctly
            assert.deepEqual(placeholders, [
                'placeholder-item-2',
                'placeholder-item-1'
            ]);
            return [
                2
            ];
        });
    }));
    it('knows if it has an item in the toolbar', /*#__PURE__*/ _async_to_generator(function() {
        var toolbar, item;
        return _ts_generator(this, function(_state) {
            toolbar = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar('test-toolbar');
            item = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarInput('placeholder');
            toolbar.appendToolbarItem(item);
            assert.isTrue(toolbar.hasItem(item));
            toolbar.removeToolbarItem(item);
            assert.isFalse(toolbar.hasItem(item));
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=Toolbar.test.js.map


}),

}]);