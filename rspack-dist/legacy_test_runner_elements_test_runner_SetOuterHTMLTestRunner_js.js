"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_elements_test_runner_SetOuterHTMLTestRunner_js"], {
"./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
ElementsTestRunner.events = [];
ElementsTestRunner.containerId;
ElementsTestRunner.setUpTestSuite = function(next) {
    ElementsTestRunner.expandElementsTree(step1);
    function step1() {
        ElementsTestRunner.selectNodeWithId('container', step2);
    }
    function step2(node) {
        ElementsTestRunner.containerId = node.id;
        TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId).then(step3);
    }
    function step3(text) {
        ElementsTestRunner.containerText = text;
        for(var key in _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events){
            var eventName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events[key];
            if (eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.MarkersChanged || eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.DOMMutated) {
                continue;
            }
            TestRunner.domModel.addEventListener(eventName, ElementsTestRunner.recordEvent.bind(ElementsTestRunner, eventName));
        }
        next();
    }
};
ElementsTestRunner.recordEvent = function(eventName, event) {
    if (!event.data) {
        return;
    }
    var node = event.data.node || event.data;
    var parent = event.data.parent;
    for(var currentNode = parent || node; currentNode; currentNode = currentNode.parentNode){
        if (currentNode.getAttribute('id') === 'output') {
            return;
        }
    }
    ElementsTestRunner.events.push('Event ' + eventName.toString() + ': ' + node.nodeName());
};
ElementsTestRunner.patchOuterHTML = function(pattern, replacement, next) {
    TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
    ElementsTestRunner.setOuterHTML(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};
ElementsTestRunner.patchOuterHTMLUseUndo = function(pattern, replacement, next) {
    TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
    ElementsTestRunner.setOuterHTMLUseUndo(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};
ElementsTestRunner.setOuterHTML = function(newText, next) {
    ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);
    function bringBack() {
        TestRunner.addResult('\nBringing things back\n');
        ElementsTestRunner.innerSetOuterHTML(ElementsTestRunner.containerText, true, next);
    }
};
ElementsTestRunner.setOuterHTMLUseUndo = function(newText, next) {
    ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);
    function bringBack() {
        return _bringBack.apply(this, arguments);
    }
    function _bringBack() {
        _bringBack = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        TestRunner.addResult('\nBringing things back\n');
                        return [
                            4,
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModelUndoStack.instance().undo()
                        ];
                    case 1:
                        _state.sent();
                        ElementsTestRunner._dumpOuterHTML(true, next);
                        return [
                            2
                        ];
                }
            });
        });
        return _bringBack.apply(this, arguments);
    }
};
ElementsTestRunner.innerSetOuterHTML = function() {
    var _ref = _async_to_generator(function(newText, last, next) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.DOMAgent.setOuterHTML(ElementsTestRunner.containerId, newText)
                    ];
                case 1:
                    _state.sent();
                    TestRunner.domModel.markUndoableState();
                    ElementsTestRunner._dumpOuterHTML(last, next);
                    return [
                        2
                    ];
            }
        });
    });
    return function(newText, last, next) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner._dumpOuterHTML = function() {
    var _ref = _async_to_generator(function(last, next) {
        var result, i, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.evaluate('document.getElementById("identity").wrapperIdentity')
                    ];
                case 1:
                    result = _state.sent();
                    TestRunner.addResult('Wrapper identity: ' + result.value);
                    ElementsTestRunner.events.sort();
                    for(i = 0; i < ElementsTestRunner.events.length; ++i){
                        TestRunner.addResult(ElementsTestRunner.events[i]);
                    }
                    ElementsTestRunner.events = [];
                    return [
                        4,
                        TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId)
                    ];
                case 2:
                    text = _state.sent();
                    TestRunner.addResult('==========8<==========');
                    TestRunner.addResult(text);
                    TestRunner.addResult('==========>8==========');
                    if (last) {
                        TestRunner.addResult('\n\n\n');
                    }
                    next();
                    return [
                        2
                    ];
            }
        });
    });
    return function(last, next) {
        return _ref.apply(this, arguments);
    };
}();


}),

}]);