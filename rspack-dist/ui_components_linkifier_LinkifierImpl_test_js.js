"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_linkifier_LinkifierImpl_test_js"], {
"./ui/components/linkifier/LinkifierImpl.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _linkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linkifier.js */ "./ui/components/linkifier/linkifier.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
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




var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();

(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('Linkifier', function() {
    it('renders a link when given a URL', /*#__PURE__*/ _async_to_generator(function() {
        var component, link;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _linkifier_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
                    component.data = {
                        url: 'https://example.com'
                    };
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    link = component.shadowRoot.querySelector('a');
                    assert.instanceOf(link, HTMLAnchorElement);
                    assert.strictEqual(link.innerText, 'example.com');
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws when given an invalid URL', function() {
        var component = new _linkifier_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
        assert.throws(function() {
            component.data = {
                url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsPath.EmptyUrlString
            };
        }, 'Cannot construct a Linkifier without providing a valid string URL.');
    });
    it('appends the line number to the URL if given, and adds one to deal with 0 indexing', /*#__PURE__*/ _async_to_generator(function() {
        var component, link;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _linkifier_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
                    component.data = {
                        url: 'https://example.com',
                        lineNumber: 1
                    };
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    link = component.shadowRoot.querySelector('a');
                    assert.instanceOf(link, HTMLAnchorElement);
                    assert.strictEqual(link.innerText, 'example.com:2');
                    return [
                        2
                    ];
            }
        });
    }));
    it('emits an event when clicked', /*#__PURE__*/ _async_to_generator(function() {
        var component, link, clickEventPromise, clickEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _linkifier_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
                    component.data = {
                        url: 'https://example.com',
                        lineNumber: 1,
                        columnNumber: 50
                    };
                    // Suppress the event so that the link is not actually opened in the test
                    // runner by the global handler.
                    component.addEventListener('linkifieractivated', function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                    });
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    link = component.shadowRoot.querySelector('a');
                    assert.instanceOf(link, HTMLAnchorElement);
                    clickEventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getEventPromise)(component, 'linkifieractivated');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchClickEvent)(link, {
                        cancelable: true
                    });
                    return [
                        4,
                        clickEventPromise
                    ];
                case 2:
                    clickEvent = _state.sent();
                    assert.deepEqual(clickEvent.data, {
                        url: 'https://example.com',
                        lineNumber: 1,
                        columnNumber: 50
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LinkifierImpl.test.js.map


}),

}]);