"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_render_coordinator_render_coordinator_test_js"], {
"./ui/components/render_coordinator/render_coordinator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _render_coordinator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

describe('Render Coordinator', function() {
    var validateRecords = function validateRecords(expected) {
        return _validateRecords.apply(this, arguments);
    };
    var coordinator;
    beforeEach(function() {
        coordinator = _render_coordinator_js__WEBPACK_IMPORTED_MODULE_0__.RenderCoordinator.RenderCoordinator.instance({
            forceNew: true
        });
        coordinator.observe = true;
    });
    function _validateRecords() {
        _validateRecords = _async_to_generator(function(expected) {
            var records;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        records = coordinator.takeRecords();
                        assert.deepEqual(records.map(function(r) {
                            return r.value;
                        }), expected, 'render coordinator messages are out of order');
                        return [
                            2
                        ];
                }
            });
        });
        return _validateRecords.apply(this, arguments);
    }
    it('groups interleaved reads and writes', /*#__PURE__*/ _async_to_generator(function() {
        var expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expected = [
                        '[New frame]',
                        '[Read]: Read 1',
                        '[Read]: Read 2',
                        '[Read]: Read 3',
                        '[Write]: Write 1',
                        '[Write]: Write 2',
                        '[Queue empty]'
                    ];
                    void coordinator.write('Write 1', function() {});
                    void coordinator.read('Read 1', function() {});
                    void coordinator.read('Read 2', function() {});
                    void coordinator.write('Write 2', function() {});
                    void coordinator.read('Read 3', function() {});
                    return [
                        4,
                        validateRecords(expected)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('deduplicates named tasks', /*#__PURE__*/ _async_to_generator(function() {
        var expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expected = [
                        '[New frame]',
                        '[Read]: Named Read',
                        '[Write]: Unnamed write',
                        '[Write]: Named Write',
                        '[Write]: Unnamed write',
                        '[Queue empty]'
                    ];
                    coordinator.observeOnlyNamed = false;
                    void coordinator.read('Named Read', function() {});
                    void coordinator.write(function() {});
                    void coordinator.write('Named Write', function() {});
                    void coordinator.write(function() {});
                    void coordinator.write('Named Write', function() {});
                    return [
                        4,
                        validateRecords(expected)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles nested reads and writes', /*#__PURE__*/ _async_to_generator(function() {
        var expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expected = [
                        '[New frame]',
                        '[Read]: Read 1',
                        '[Read]: Read 2',
                        '[New frame]',
                        '[Read]: Read 3',
                        '[Write]: Write 1',
                        '[Write]: Write 2',
                        '[New frame]',
                        '[Write]: Write 3',
                        '[Queue empty]'
                    ];
                    void coordinator.read('Read 1', function() {
                        void coordinator.write('Write 1', function() {});
                    });
                    void coordinator.read('Read 2', function() {
                        void coordinator.write('Write 2', function() {
                            void coordinator.write('Write 3', function() {});
                        });
                        void coordinator.read('Read 3', function() {});
                    });
                    return [
                        4,
                        validateRecords(expected)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('completes work added while evaluating the last item in the queue', /*#__PURE__*/ _async_to_generator(function() {
        var expected, records;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expected = [
                        '[New frame]',
                        '[Read]: Read',
                        '[New frame]',
                        '[Write]: Write at end',
                        '[Queue empty]'
                    ];
                    void coordinator.read('Read', function() {
                        // This write is added when we are evaluating the last item in the queue,
                        // and it should be enqueued correctly for the test to pass.
                        void coordinator.write('Write at end', function() {});
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    records = coordinator.takeRecords();
                    assert.deepEqual(records.map(function(r) {
                        return r.value;
                    }), expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns values', /*#__PURE__*/ _async_to_generator(function() {
        var element, height;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    element = document.createElement('div');
                    element.style.height = '800px';
                    document.body.appendChild(element);
                    return [
                        4,
                        coordinator.read(function() {
                            return element.clientHeight;
                        })
                    ];
                case 1:
                    height = _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    element.remove();
                    assert.strictEqual(height, 800);
                    return [
                        2
                    ];
            }
        });
    }));
    it('awaits async callbacks', /*#__PURE__*/ _async_to_generator(function() {
        var expected, targetValue, delayedSet;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expected = 100;
                    targetValue = 0;
                    delayedSet = function(value, timeout) {
                        return new Promise(function(resolve) {
                            return setTimeout(function() {
                                targetValue = value;
                                resolve();
                            }, timeout);
                        });
                    };
                    void coordinator.write(/*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                delayedSet(expected, 100)
                            ];
                        });
                    }));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(targetValue, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws if there is a read-write deadlock (blocked on read)', /*#__PURE__*/ _async_to_generator(function() {
        var read, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    read = function() {};
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        coordinator.write(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        // Awaiting a read block within a write should block because
                                        // this write can't proceed until the read has completed, but
                                        // the read won't start until this write has completed.
                                        return [
                                            4,
                                            coordinator.read(read)
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        }))
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    assert.strictEqual(err.toString(), new Error('Writers took over 1500ms. Possible deadlock?').toString());
                    return [
                        3,
                        4
                    ];
                case 4:
                    coordinator.cancelPending();
                    return [
                        2
                    ];
            }
        });
    }));
    it('throws if there is a write deadlock (blocked on write)', /*#__PURE__*/ _async_to_generator(function() {
        var write, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    write = function() {};
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        coordinator.read(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        // Awaiting a write block within a read should block because
                                        // this read can't proceed until the write has completed, but
                                        // the write won't start until this read has completed.
                                        return [
                                            4,
                                            coordinator.write(write)
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        }))
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    assert.strictEqual(err.toString(), new Error('Readers took over 1500ms. Possible deadlock?').toString());
                    return [
                        3,
                        4
                    ];
                case 4:
                    coordinator.cancelPending();
                    return [
                        2
                    ];
            }
        });
    }));
    it('exposes the presence of pending work', /*#__PURE__*/ _async_to_generator(function() {
        var readDonePromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    readDonePromise = coordinator.read('Named Read', function() {});
                    assert.isTrue(coordinator.hasPendingWork());
                    return [
                        4,
                        readDonePromise
                    ];
                case 1:
                    _state.sent();
                    assert.isFalse(coordinator.hasPendingWork());
                    return [
                        2
                    ];
            }
        });
    }));
    it('exposes the pending work count globally for interaction/e2e tests', /*#__PURE__*/ _async_to_generator(function() {
        var readDonePromise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    readDonePromise = coordinator.read('Named Read', function() {});
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    assert.strictEqual(globalThis.__getRenderCoordinatorPendingFrames(), 1);
                    return [
                        4,
                        readDonePromise
                    ];
                case 1:
                    _state.sent();
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    assert.strictEqual(globalThis.__getRenderCoordinatorPendingFrames(), 0);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('Logger', function() {
        it('only logs by default when provided with names', /*#__PURE__*/ _async_to_generator(function() {
            var expected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        expected = [
                            '[New frame]',
                            '[Read]: Named Read',
                            '[Queue empty]'
                        ];
                        void coordinator.read('Named Read', function() {});
                        void coordinator.write(function() {});
                        return [
                            4,
                            validateRecords(expected)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('allow logging of unnamed tasks', /*#__PURE__*/ _async_to_generator(function() {
            var expected;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        expected = [
                            '[New frame]',
                            '[Read]: Named Read',
                            '[Write]: Unnamed write',
                            '[Queue empty]'
                        ];
                        coordinator.observeOnlyNamed = false;
                        void coordinator.read('Named Read', function() {});
                        void coordinator.write(function() {});
                        return [
                            4,
                            validateRecords(expected)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('tracks only the last 100 items', /*#__PURE__*/ _async_to_generator(function() {
            var expected, i, i1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        expected = [];
                        for(i = 51; i < 150; i++){
                            expected.push("[Read]: Named read ".concat(i));
                        }
                        expected.push('[Queue empty]');
                        for(i1 = 0; i1 < 150; i1++){
                            void coordinator.read("Named read ".concat(i1), function() {});
                        }
                        return [
                            4,
                            validateRecords(expected)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('supports different log sizes', /*#__PURE__*/ _async_to_generator(function() {
            var expected, i, i1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        coordinator.recordStorageLimit = 10;
                        expected = [];
                        for(i = 41; i < 50; i++){
                            expected.push("[Write]: Named write ".concat(i));
                        }
                        expected.push('[Queue empty]');
                        for(i1 = 0; i1 < 50; i1++){
                            void coordinator.write("Named write ".concat(i1), function() {});
                        }
                        return [
                            4,
                            validateRecords(expected)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=render_coordinator.test.js.map


}),

}]);