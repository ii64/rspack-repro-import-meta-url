"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_chrome_link_ChromeLink_test_js"], {
"./ui/components/chrome_link/ChromeLink.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _chrome_link_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chrome_link.js */ "./ui/components/chrome_link/chrome_link.js");
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
var _this = undefined;
function _templateObject() {
    var data = _tagged_template_literal([
        "\n        <",
        " .href=",
        ">\n          link text\n        </",
        ">\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}






var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ChromeLink', function() {
    var _this1 = _this;
    it('renders a link when given a \'chrome://\' URL', /*#__PURE__*/ _async_to_generator(function() {
        var target, spy, container, chromeLink, link;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    spy = sinon.spy(target.targetAgent(), 'invoke_createTarget');
                    container = document.createElement('div');
                    // clang-format off
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html(_templateObject(), _chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName, 'chrome://settings', _chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink.litTagName), container, {
                        host: _this1
                    });
                    // clang-format on
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(container);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    chromeLink = container.querySelector('devtools-chrome-link');
                    assert.instanceOf(chromeLink, _chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink);
                    assert.isNotNull(chromeLink.shadowRoot);
                    assert.strictEqual(chromeLink.innerHTML.trim(), 'link text');
                    link = chromeLink.shadowRoot.querySelector('a');
                    assert.instanceOf(link, HTMLAnchorElement);
                    assert.isTrue(spy.notCalled);
                    link.click();
                    assert.isTrue(spy.calledOnce);
                    assert.deepEqual(spy.firstCall.firstArg, {
                        url: 'chrome://settings'
                    });
                    return [
                        2
                    ];
            }
        });
    }));
});
describe('ChromeLink', function() {
    it('throws an error when given a non-\'chrome://\' URL', /*#__PURE__*/ _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            component = new _chrome_link_js__WEBPACK_IMPORTED_MODULE_5__.ChromeLink.ChromeLink();
            assert.throws(function() {
                component.href = 'https://www.example.com';
            }, 'ChromeLink href needs to start with \'chrome://\'');
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ChromeLink.test.js.map


}),
"./ui/components/chrome_link/chrome_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLink: function() { return /* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=chrome_link.js.map


}),

}]);