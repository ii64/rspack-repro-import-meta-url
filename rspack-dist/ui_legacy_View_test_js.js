"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_View_test_js"], {
"./ui/legacy/View.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
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


describe('View', function() {
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TabbedViewLocation', function() {
        var tabbedLocation;
        var viewManager;
        before(/*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                [
                    'first',
                    'second',
                    'third',
                    'fourth'
                ].forEach(function(title) {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.registerViewExtension({
                        // @ts-ignore
                        location: 'mock-location',
                        id: title,
                        title: function() {
                            return title;
                        },
                        commandPrompt: function() {
                            return title;
                        },
                        persistence: "closeable" /* UI.ViewManager.ViewPersistence.CLOSEABLE */ ,
                        loadView: function loadView() {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget()
                                    ];
                                });
                            })();
                        }
                    });
                });
                viewManager = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.ViewManager.instance({
                    forceNew: true
                });
                tabbedLocation = viewManager.createTabbedLocation(undefined, 'mock-location', true, true);
                return [
                    2
                ];
            });
        }));
        it('Creates an empty tabbed location', function() {
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), []);
        });
        it('Adds a tab for a selected view', function() {
            void viewManager.showView('first');
            void viewManager.showView('second');
            void viewManager.showView('third');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), [
                'first',
                'second',
                'third'
            ]);
        });
        it('Prepends a tab correctly', function() {
            var thirdTab = tabbedLocation.tabbedPane().tabsById.get('third');
            if (!thirdTab) {
                throw new Error('Could not find a tab');
            }
            tabbedLocation.tabbedPane().insertBefore(thirdTab, 0);
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), [
                'third',
                'first',
                'second'
            ]);
        });
        it('Appends a tab correctly', function() {
            void viewManager.showView('fourth');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), [
                'third',
                'first',
                'second',
                'fourth'
            ]);
        });
        it('Closes a tab correctly', function() {
            tabbedLocation.tabbedPane().closeTab('second');
            assert.deepEqual(tabbedLocation.tabbedPane().tabIds(), [
                'third',
                'first',
                'fourth'
            ]);
        });
    });
}); //# sourceMappingURL=View.test.js.map


}),

}]);