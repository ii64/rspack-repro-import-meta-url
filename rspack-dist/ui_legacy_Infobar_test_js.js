"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Infobar_test_js"], {
"./ui/legacy/Infobar.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
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




describe('Infobar', function() {
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    var checkDetailsMessage = function(component, messageText) {
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component.element);
        var infobar = component.element.shadowRoot.querySelector('.infobar');
        assert.instanceOf(infobar, HTMLDivElement);
        var learnMoreButton = infobar.querySelector('devtools-button');
        assert.instanceOf(learnMoreButton, _components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button);
        var detailsRow = infobar.querySelector('.infobar-details-rows');
        assert.instanceOf(detailsRow, HTMLDivElement);
        assert.isTrue(detailsRow.classList.contains('hidden'), 'Details row should initially be hidden');
        assert.strictEqual(detailsRow.textContent, messageText);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(learnMoreButton);
        assert.isFalse(detailsRow.classList.contains('hidden'), 'Details row should not be hidden after clicking on learn-more-button');
    };
    it('shows details message containing a string', function() {
        var component = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Infobar.Infobar("warning" /* UI.Infobar.Type.Warning */ , 'This is a warning');
        var messageText = 'This is a more detailed warning';
        component.createDetailsRowMessage(messageText);
        checkDetailsMessage(component, messageText);
    });
    it('shows details message containing HTML element(s)', function() {
        var component = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.Infobar.Infobar("warning" /* UI.Infobar.Type.Warning */ , 'This is a warning');
        var linkText = 'example-link';
        var link = _legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('https://www.example.com', linkText);
        component.createDetailsRowMessage(link);
        checkDetailsMessage(component, linkText);
    });
}); //# sourceMappingURL=Infobar.test.js.map


}),

}]);