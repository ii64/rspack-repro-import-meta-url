"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MutationHelpers_js"], {
"./testing/MutationHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TEXT_NODE: function() { return TEXT_NODE; },
  someMutations: function() { return someMutations; },
  withMutations: function() { return withMutations; },
  withNoMutations: function() { return withNoMutations; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var TEXT_NODE = 'TEXT_NODE';
var nodeShouldBeIgnored = function(node) {
    var isCommentNode = node.nodeType === Node.COMMENT_NODE;
    var isTextNode = node.nodeType === Node.TEXT_NODE;
    if (isCommentNode) {
        return true;
    }
    if (isTextNode) {
        // We ignore textNode changes where the trimmed text is empty - these are
        // most likely whitespace changes from LitHtml and not important.
        return (node.textContent || '').trim() === '';
    }
    return false;
};
var observedMutationsThatMatchExpected = function(expectedMutation, observedMutations) {
    var matching = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = observedMutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var mutation = _step.value;
            if (expectedMutation.target === TEXT_NODE) {
                if (mutation.target === TEXT_NODE) {
                    matching.push(mutation);
                }
            } else if (expectedMutation.target === mutation.target) {
                if (!expectedMutation.type) {
                    matching.push(mutation);
                } else if (expectedMutation.type === mutation.type) {
                    matching.push(mutation);
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return matching;
};
var getMutationsForTagName = function(trackedMutations, tagName) {
    return trackedMutations.get(tagName) || {
        ADD: 0,
        REMOVE: 0,
        TEXT_UPDATE: 0
    };
};
var getAllMutationCounts = function(observedMutations) {
    var trackedMutations = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = observedMutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var mutation = _step.value;
            if (mutation.target === TEXT_NODE) {
                var mutationsForTagName = getMutationsForTagName(trackedMutations, TEXT_NODE);
                mutationsForTagName.TEXT_UPDATE++;
                trackedMutations.set(TEXT_NODE, mutationsForTagName);
            }
            var tagName = mutation.target;
            if (mutation.type === "ADD" /* MutationType.ADD */ ) {
                var mutationsForTagName1 = getMutationsForTagName(trackedMutations, tagName);
                mutationsForTagName1.ADD++;
                trackedMutations.set(tagName, mutationsForTagName1);
            } else if (mutation.type === "REMOVE" /* MutationType.REMOVE */ ) {
                var mutationsForTagName2 = getMutationsForTagName(trackedMutations, tagName);
                mutationsForTagName2.REMOVE++;
                trackedMutations.set(tagName, mutationsForTagName2);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return trackedMutations;
};
var storeRelevantMutationEntries = function(entries, storageArray) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var entry = _step.value;
            if (entry.type === 'characterData') {
                storageArray.push({
                    target: TEXT_NODE,
                    type: "TEXT_UPDATE" /* MutationType.TEXT_UPDATE */ 
                });
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = entry.addedNodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var added = _step1.value;
                    if (!nodeShouldBeIgnored(added)) {
                        storageArray.push({
                            target: added.nodeName.toLowerCase(),
                            type: "ADD" /* MutationType.ADD */ 
                        });
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = entry.removedNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var removed = _step2.value;
                    if (!nodeShouldBeIgnored(removed)) {
                        storageArray.push({
                            target: removed.nodeName.toLowerCase(),
                            type: "REMOVE" /* MutationType.REMOVE */ 
                        });
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
var generateOutputForMutationList = function(observedMutations) {
    var debugOutput = [];
    var mutationCounts = getAllMutationCounts(observedMutations);
    var allMutations = Array.from(mutationCounts.entries());
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = allMutations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), elem = _step_value[0], mutations = _step_value[1];
            var output = "".concat(elem, ": ");
            var mutationOutput = [];
            var addMutations = mutations.ADD;
            if (addMutations) {
                mutationOutput.push("".concat(addMutations, " ").concat(pluralize(addMutations, 'addition', 'additions')));
            }
            var removeMutations = mutations.REMOVE;
            if (removeMutations) {
                mutationOutput.push("".concat(removeMutations, " ").concat(pluralize(removeMutations, 'removal', 'removals')));
            }
            var updateMutations = mutations.TEXT_UPDATE;
            if (updateMutations) {
                mutationOutput.push("".concat(updateMutations, " ").concat(pluralize(updateMutations, 'update', 'updates')));
            }
            debugOutput.push(output + mutationOutput.join(', '));
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return debugOutput.join('\n');
};
var errorMessageWhenExpectingNoMutations = function(observedMutations) {
    var debugOutput = generateOutputForMutationList(observedMutations);
    assert.fail("Expected no mutations, but got ".concat(observedMutations.length, ": \n").concat(debugOutput));
};
function pluralize(count, singular, plural) {
    return count === 1 ? singular : plural;
}
var DEFAULT_MAX_MUTATIONS_LIMIT = 10;
/**
 * Check that a given component causes the expected amount of mutations. Useful
 * when testing a component to ensure it's updating the DOM performantly and not
 * unnecessarily.
 */ var withMutations = function() {
    var _ref = _async_to_generator(function(expectedMutations, shadowRoot, functionToObserve) {
        var observedMutations, mutationObserver, records, mutationsMatchedToExpected, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, expectedMutation, matchingMutations, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, matched, amountOfMatchingMutations, maxMutationsAllowed, unmatchedMutations, unexpectedOutput;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    observedMutations = [];
                    mutationObserver = new MutationObserver(function(entries) {
                        storeRelevantMutationEntries(entries, observedMutations);
                    });
                    mutationObserver.observe(shadowRoot, {
                        subtree: true,
                        attributes: true,
                        childList: true,
                        characterData: true,
                        characterDataOldValue: true
                    });
                    return [
                        4,
                        functionToObserve(shadowRoot)
                    ];
                case 1:
                    _state.sent();
                    /* We takeRecords() here to flush any observed mutations that have been seen
    but not yet fed back into the callback we passed when we instantiated the
    observer. This ensures we've got every mutation before we disconnect the
    observer. */ records = mutationObserver.takeRecords();
                    storeRelevantMutationEntries(records, observedMutations);
                    mutationObserver.disconnect();
                    if (expectedMutations.length === 0) {
                        if (observedMutations.length !== 0) {
                            errorMessageWhenExpectingNoMutations(observedMutations);
                            return [
                                2
                            ];
                        }
                    }
                    mutationsMatchedToExpected = new Set();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = expectedMutations[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            expectedMutation = _step.value;
                            // Gather all observed mutations that match the given expectation. e.g. if
                            // the expected mutation is { target: 'div' } this will gather all observed
                            // mutations with a target of `div`.
                            matchingMutations = observedMutationsThatMatchExpected(expectedMutation, observedMutations);
                            _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(_iterator1 = matchingMutations[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    matched = _step1.value;
                                    mutationsMatchedToExpected.add(matched);
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                            amountOfMatchingMutations = matchingMutations.length;
                            // Make sure we check for undefined, not truthyness, as the user could
                            // supply a max of 0.
                            maxMutationsAllowed = expectedMutation.max === undefined ? DEFAULT_MAX_MUTATIONS_LIMIT : expectedMutation.max;
                            if (amountOfMatchingMutations > maxMutationsAllowed) {
                                assert.fail("Expected no more than ".concat(maxMutationsAllowed, " mutations for ").concat(expectedMutation.type || 'ADD/REMOVE', " ").concat(expectedMutation.target, ", but got ").concat(amountOfMatchingMutations));
                            } else if (amountOfMatchingMutations === 0 && maxMutationsAllowed > 0) {
                                assert.fail("Expected at least one mutation for ".concat(expectedMutation.type || 'ADD/REMOVE', " ").concat(expectedMutation.target, ", but got ").concat(amountOfMatchingMutations));
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    // These are mutations that happened but the user did not explicitly list as
                    // expected, so we want to fail the test on them.
                    unmatchedMutations = observedMutations.filter(function(mutation) {
                        return !mutationsMatchedToExpected.has(mutation);
                    });
                    if (unmatchedMutations.length > 0) {
                        unexpectedOutput = generateOutputForMutationList(unmatchedMutations);
                        assert.fail("Additional unexpected mutations were detected:\n".concat(unexpectedOutput));
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function withMutations(expectedMutations, shadowRoot, functionToObserve) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * Ensure that a code block runs whilst making no mutations to the DOM. Given an
 * element and a callback, it will execute th e callback function and ensure
 * afterwards that a MutatonObserver saw no changes.
 */ var withNoMutations = function() {
    var _ref = _async_to_generator(function(element, fn) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        withMutations([], element, fn)
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return function withNoMutations(element, fn) {
        return _ref.apply(this, arguments);
    };
}();
var someMutations = function() {
    var _ref = _async_to_generator(function(element) {
        return _ts_generator(this, function(_state) {
            return [
                2,
                new Promise(function(resolve) {
                    var observer = new MutationObserver(function() {
                        resolve();
                        observer.disconnect();
                    });
                    observer.observe(element, {
                        attributes: true,
                        childList: true,
                        subtree: true
                    });
                })
            ];
        });
    });
    return function someMutations(element) {
        return _ref.apply(this, arguments);
    };
}(); //# sourceMappingURL=MutationHelpers.js.map


}),

}]);