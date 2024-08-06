"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_CreateRecordingView_test_js"], {
"./panels/recorder/components/CreateRecordingView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./panels/recorder/components/components.js");
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('CreateRecordingView', function() {
    var createView = function createView() {
        var view = new _components_js__WEBPACK_IMPORTED_MODULE_3__.CreateRecordingView.CreateRecordingView();
        view.data = {
            recorderSettings: new _models_models_js__WEBPACK_IMPORTED_MODULE_2__.RecorderSettings.RecorderSettings()
        };
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view, {
            allowMultipleChildren: true
        });
        return view;
    };
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.setupActionRegistry)();
    it('should render create recording view', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, _view_shadowRoot1, view, input, button, onceClicked, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = createView();
                    input = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#user-flow-name');
                    assert.ok(input);
                    button = (_view_shadowRoot1 = view.shadowRoot) === null || _view_shadowRoot1 === void 0 ? void 0 : _view_shadowRoot1.querySelector('devtools-control-button');
                    assert.ok(button);
                    onceClicked = new Promise(function(resolve) {
                        view.addEventListener('recordingstarted', resolve, {
                            once: true
                        });
                    });
                    input.value = 'Test';
                    button.dispatchEvent(new Event('click'));
                    return [
                        4,
                        onceClicked
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepEqual(event.name, 'Test');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should dispatch recordingcancelled event on the close button click', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, onceClicked, closeButton, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = createView();
                    onceClicked = new Promise(function(resolve) {
                        view.addEventListener('recordingcancelled', resolve, {
                            once: true
                        });
                    });
                    closeButton = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('[title="Cancel recording"]');
                    closeButton.dispatchEvent(new Event('click'));
                    return [
                        4,
                        onceClicked
                    ];
                case 1:
                    event = _state.sent();
                    assert.instanceOf(event, _components_js__WEBPACK_IMPORTED_MODULE_3__.CreateRecordingView.RecordingCancelledEvent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should generate a default name', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, input;
        return _ts_generator(this, function(_state) {
            view = createView();
            input = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#user-flow-name');
            assert.isAtLeast(input.value.length, 'Recording'.length);
            return [
                2
            ];
        });
    }));
    it('should remember the most recent selector attribute', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, _view_shadowRoot1, _view_shadowRoot2, view, input, button, onceClicked;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = createView();
                    input = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#selector-attribute');
                    assert.ok(input);
                    button = (_view_shadowRoot1 = view.shadowRoot) === null || _view_shadowRoot1 === void 0 ? void 0 : _view_shadowRoot1.querySelector('devtools-control-button');
                    assert.ok(button);
                    onceClicked = new Promise(function(resolve) {
                        view.addEventListener('recordingstarted', resolve, {
                            once: true
                        });
                    });
                    input.value = 'data-custom-attribute';
                    button.dispatchEvent(new Event('click'));
                    return [
                        4,
                        onceClicked
                    ];
                case 1:
                    _state.sent();
                    view = createView();
                    input = (_view_shadowRoot2 = view.shadowRoot) === null || _view_shadowRoot2 === void 0 ? void 0 : _view_shadowRoot2.querySelector('#selector-attribute');
                    assert.ok(input);
                    assert.strictEqual(input.value, 'data-custom-attribute');
                    return [
                        2
                    ];
            }
        });
    }));
    it('should remember recorded selector types', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, _view_shadowRoot1, _view_shadowRoot2, view, checkboxes, button, onceClicked, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = createView();
                    checkboxes = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelectorAll('.selector-type input[type=checkbox]');
                    assert.strictEqual(checkboxes.length, 5);
                    button = (_view_shadowRoot1 = view.shadowRoot) === null || _view_shadowRoot1 === void 0 ? void 0 : _view_shadowRoot1.querySelector('devtools-control-button');
                    assert.ok(button);
                    onceClicked = new Promise(function(resolve) {
                        view.addEventListener('recordingstarted', resolve, {
                            once: true
                        });
                    });
                    checkboxes[0].checked = false;
                    button.dispatchEvent(new Event('click'));
                    return [
                        4,
                        onceClicked
                    ];
                case 1:
                    event = _state.sent();
                    assert.deepStrictEqual(event.selectorTypesToRecord, [
                        'aria',
                        'text',
                        'xpath',
                        'pierce'
                    ]);
                    view = createView();
                    checkboxes = (_view_shadowRoot2 = view.shadowRoot) === null || _view_shadowRoot2 === void 0 ? void 0 : _view_shadowRoot2.querySelectorAll('.selector-type input[type=checkbox]');
                    assert.strictEqual(checkboxes.length, 5);
                    assert.isFalse(checkboxes[0].checked);
                    assert.isTrue(checkboxes[1].checked);
                    assert.isTrue(checkboxes[2].checked);
                    assert.isTrue(checkboxes[3].checked);
                    assert.isTrue(checkboxes[4].checked);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CreateRecordingView.test.js.map


}),

}]);