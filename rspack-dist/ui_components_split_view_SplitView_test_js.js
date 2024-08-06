"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_split_view_SplitView_test_js"], {
"./ui/components/split_view/SplitView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _split_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./split_view.js */ "./ui/components/split_view/split_view.js");
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



var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
describe('SplitView', function() {
    it('should resize split view', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, resizer, rect;
        return _ts_generator(this, function(_state) {
            view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
            view.style.width = '800px';
            view.style.height = '600px';
            resizer = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#resizer');
            assert.ok(resizer);
            assert.strictEqual(view.style.getPropertyValue('--current-main-area-size'), '60%');
            rect = resizer.getBoundingClientRect();
            resizer.dispatchEvent(new MouseEvent('mousedown', {
                clientX: rect.x + rect.width / 2,
                clientY: rect.y + rect.height / 2
            }));
            rect = view.getBoundingClientRect();
            window.dispatchEvent(new MouseEvent('mousemove', {
                clientX: rect.x + rect.width / 4,
                clientY: rect.y + rect.height / 4
            }));
            window.dispatchEvent(new MouseEvent('mouseup'));
            // Exact value might be different based on the environment.
            assert.notStrictEqual(view.style.getPropertyValue('--current-main-area-size'), '60%');
            return [
                2
            ];
        });
    }));
    it('should change layout to horizontal split on resize to narrow view', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, resizer, rect;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
                    view.style.width = '800px';
                    view.style.height = '600px';
                    resizer = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#resizer');
                    assert.ok(resizer);
                    view.style.width = '600px';
                    view.style.height = '800px';
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    rect = resizer.getBoundingClientRect();
                    assert.strictEqual(rect.width, 600);
                    assert.strictEqual(rect.height, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('always uses horizontal split if explicitly set', /*#__PURE__*/ _async_to_generator(function() {
        var _view_shadowRoot, view, resizer, rect;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
                    view.horizontal = true;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
                    view.style.width = '800px';
                    view.style.height = '600px';
                    resizer = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#resizer');
                    assert.ok(resizer);
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    rect = resizer.getBoundingClientRect();
                    assert.strictEqual(rect.width, 800);
                    assert.strictEqual(rect.height, 3);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should keep vertical split on short viewports', function() {
        var _view_shadowRoot;
        var view = new _split_view_js__WEBPACK_IMPORTED_MODULE_2__.SplitView.SplitView();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(view);
        view.style.width = '800px';
        view.style.height = '600px';
        var resizer = (_view_shadowRoot = view.shadowRoot) === null || _view_shadowRoot === void 0 ? void 0 : _view_shadowRoot.querySelector('#resizer');
        assert.ok(resizer);
        view.style.width = '600px';
        view.style.height = '550px';
        var rect = resizer.getBoundingClientRect();
        assert.strictEqual(rect.width, 3);
        assert.strictEqual(rect.height, 550);
    });
}); //# sourceMappingURL=SplitView.test.js.map


}),
"./ui/components/split_view/split_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SplitView: function() { return /* reexport module object */ _SplitView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SplitView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SplitView.js */ "./ui/components/split_view/SplitView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=split_view.js.map


}),

}]);