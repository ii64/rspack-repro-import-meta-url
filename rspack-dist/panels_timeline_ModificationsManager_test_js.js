"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_ModificationsManager_test_js"], {
"./panels/timeline/ModificationsManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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


describe('ModificationsManager', function() {
    it('applies modifications when present in a trace file', /*#__PURE__*/ _async_to_generator(function() {
        var modificationsManager, entriesFilter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-modifications.json.gz')
                    ];
                case 1:
                    _state.sent();
                    modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
                    if (!modificationsManager) {
                        throw new Error('Modifications manager does not exist.');
                    }
                    entriesFilter = modificationsManager.getEntriesFilter();
                    assert.strictEqual(entriesFilter.expandableEntries().length, 1);
                    assert.strictEqual(entriesFilter.invisibleEntries().length, 108);
                    assert.deepEqual(modificationsManager.getTimelineBreadcrumbs().initialBreadcrumb, {
                        'window': {
                            'min': 1020034823047,
                            'max': 1020036087961,
                            'range': 1264914
                        },
                        'child': {
                            'window': {
                                'min': 1020034823047,
                                'max': 1020035228006.5569,
                                'range': 404959.5568847656
                            },
                            'child': null
                        }
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('generates a serializable modifications json ', /*#__PURE__*/ _async_to_generator(function() {
        var modificationsManager, entriesFilter, modifications;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-modifications.json.gz')
                    ];
                case 1:
                    _state.sent();
                    modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
                    if (!modificationsManager) {
                        throw new Error('Modifications manager does not exist.');
                    }
                    entriesFilter = modificationsManager.getEntriesFilter();
                    modifications = modificationsManager.toJSON();
                    assert.strictEqual(entriesFilter.expandableEntries().length, 1);
                    assert.strictEqual(modifications.entriesModifications.expandableEntries.length, 1);
                    assert.strictEqual(modifications.entriesModifications.hiddenEntries.length, 108);
                    assert.deepEqual(modifications.initialBreadcrumb, {
                        'window': {
                            'min': 1020034823047,
                            'max': 1020036087961,
                            'range': 1264914
                        },
                        'child': {
                            'window': {
                                'min': 1020034823047,
                                'max': 1020035228006.5569,
                                'range': 404959.5568847656
                            },
                            'child': null
                        }
                    });
                    assert.deepEqual(modifications.annotations, {
                        entryLabels: [
                            {
                                'entry': 'p-73704-775-2151-457',
                                'label': 'Initialize App'
                            }
                        ]
                    });
                    return [
                        2
                    ];
            }
        });
    }));
    it('creates an annotation and generates correct json for annotations', /*#__PURE__*/ _async_to_generator(function() {
        var traceParsedData, entry, modificationsManager, modifications;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.traceEngine(null, 'web-dev-with-commit.json.gz')
                    ];
                case 1:
                    traceParsedData = _state.sent().traceData;
                    // Get any entry to create a label with.
                    entry = traceParsedData.Renderer.allTraceEntries[0];
                    modificationsManager = _timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.activeManager();
                    assert.isOk(modificationsManager);
                    modificationsManager.createAnnotation({
                        type: 'ENTRY_LABEL',
                        entry: entry,
                        label: 'entry label'
                    });
                    modifications = modificationsManager.toJSON().annotations;
                    assert.deepEqual(modifications, {
                        entryLabels: [
                            {
                                entry: 'r-38',
                                label: 'entry label'
                            }
                        ]
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ModificationsManager.test.js.map


}),

}]);