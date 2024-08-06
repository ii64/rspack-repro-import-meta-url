"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_BindingsTestRunner_js"], {
"./legacy_test_runner/bindings_test_runner/BindingsTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  GC: function() { return GC; },
  attachFrame: function() { return attachFrame; },
  attachShadowDOM: function() { return attachShadowDOM; },
  cleanupURL: function() { return cleanupURL; },
  createCSSLiveLocation: function() { return createCSSLiveLocation; },
  createDebuggerLiveLocation: function() { return createDebuggerLiveLocation; },
  detachFrame: function() { return detachFrame; },
  detachShadowDOM: function() { return detachShadowDOM; },
  dumpLocation: function() { return dumpLocation; },
  dumpWorkspace: function() { return dumpWorkspace; },
  navigateFrame: function() { return navigateFrame; },
  waitForSourceMap: function() { return waitForSourceMap; },
  waitForStyleSheetRemoved: function() { return waitForStyleSheetRemoved; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
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



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ 

var cleanupURL = function cleanupURL(url) {
    if (!url.startsWith('debugger://')) {
        return url;
    }
    return url.replace(/VM\d+/g, 'VM[XXX]');
};
var dumpWorkspace = function dumpWorkspace(previousSnapshot) {
    var uiSourceCodes = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance().uiSourceCodes().slice();
    var urls = uiSourceCodes.map(function(code) {
        return code.url();
    });
    urls = urls.map(cleanupURL);
    urls.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.caseInsensetiveComparator);
    var isAdded = new Array(urls.length).fill(false);
    var removedLines = [];
    if (previousSnapshot) {
        var diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.DiffWrapper.lineDiff(previousSnapshot, urls);
        var removedEntries = diff.filter(function(entry) {
            return entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete;
        }).map(function(entry) {
            return entry[1];
        });
        removedLines = [].concat.apply([], removedEntries);
        var index = 0;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = diff[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var entry = _step.value;
                if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete) {
                    continue;
                }
                if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Equal) {
                    index += entry[1].length;
                    continue;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    // eslint-disable-next-line no-unused-vars
                    for(var _iterator1 = entry[1][Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var line = _step1.value;
                        isAdded[index++] = true;
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
    }
    TestRunner.addResult("Removed: ".concat(removedLines.length, " uiSourceCodes"));
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        for(var _iterator2 = removedLines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var url = _step2.value;
            TestRunner.addResult('[-] ' + url);
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
    TestRunner.addResult("Workspace: ".concat(urls.length, " uiSourceCodes."));
    for(var i = 0; i < urls.length; ++i){
        var url1 = urls[i];
        var prefix = isAdded[i] ? '[+] ' : '    ';
        TestRunner.addResult(prefix + url1);
    }
    return urls;
};
var attachFrame = function attachFrame(frameId, url, evalSourceURL) {
    var evalSource = "(".concat(attachFrame.toString(), ")('").concat(frameId, "', '").concat(url, "')");
    if (evalSourceURL) {
        evalSource += '//# sourceURL=' + evalSourceURL;
    }
    return TestRunner.evaluateInPageAsync(evalSource);
    function attachFrame(frameId, url) {
        var frame = document.createElement('iframe');
        frame.src = url;
        frame.id = frameId;
        document.body.appendChild(frame);
        return new Promise(function(x) {
            frame.onload = x;
        });
    }
};
var detachFrame = function detachFrame(frameId, evalSourceURL) {
    var evalSource = "(".concat(detachFrame.toString(), ")('").concat(frameId, "')");
    if (evalSourceURL) {
        evalSource += '//# sourceURL=' + evalSourceURL;
    }
    return TestRunner.evaluateInPageAnonymously(evalSource);
    function detachFrame(frameId) {
        var frame = document.getElementById(frameId);
        frame.remove();
    }
};
var navigateFrame = function navigateFrame(frameId, navigateURL, evalSourceURL) {
    var evalSource = "(".concat(navigateFrame.toString(), ")('").concat(frameId, "', '").concat(navigateURL, "')");
    if (evalSourceURL) {
        evalSource += '//# sourceURL=' + evalSourceURL;
    }
    return TestRunner.evaluateInPageAsync(evalSource);
    function navigateFrame(frameId, url) {
        var frame = document.getElementById(frameId);
        frame.src = url;
        return new Promise(function(x) {
            frame.onload = x;
        });
    }
};
var attachShadowDOM = function attachShadowDOM(id, templateSelector, evalSourceURL) {
    var evalSource = "(".concat(createShadowDOM.toString(), ")('").concat(id, "', '").concat(templateSelector, "')");
    if (evalSourceURL) {
        evalSource += '//# sourceURL=' + evalSourceURL;
    }
    return TestRunner.evaluateInPageAnonymously(evalSource);
    function createShadowDOM(id, templateSelector) {
        var shadowHost = document.createElement('div');
        shadowHost.setAttribute('id', id);
        var shadowRoot = shadowHost.attachShadow({
            mode: 'open'
        });
        var t = document.querySelector(templateSelector);
        var instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
        document.body.appendChild(shadowHost);
    }
};
var detachShadowDOM = function detachShadowDOM(id, evalSourceURL) {
    var evalSource = "(".concat(removeShadowDOM.toString(), ")('").concat(id, "')");
    if (evalSourceURL) {
        evalSource += '//# sourceURL=' + evalSourceURL;
    }
    return TestRunner.evaluateInPageAnonymously(evalSource);
    function removeShadowDOM(id) {
        document.querySelector('#' + id).remove();
    }
};
var waitForStyleSheetRemoved = function waitForStyleSheetRemoved(urlSuffix) {
    var fulfill;
    var promise = new Promise(function(x) {
        fulfill = x;
    });
    TestRunner.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
    return promise;
    function onStyleSheetRemoved(event) {
        var styleSheetHeader = event.data;
        if (!styleSheetHeader.resourceURL().endsWith(urlSuffix)) {
            return;
        }
        TestRunner.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
        fulfill();
    }
};
TestRunner.addSniffer(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CompilerScriptMapping.CompilerScriptMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
TestRunner.addSniffer(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.SASSSourceMapping.SASSSourceMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
var sourceMapCallbacks = new Map();
function onSourceMap(sourceMap) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sourceMapCallbacks.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var urlSuffix = _step.value;
            if (sourceMap.url().endsWith(urlSuffix)) {
                var callback = sourceMapCallbacks.get(urlSuffix);
                callback.call(null);
                sourceMapCallbacks.delete(urlSuffix);
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
}
var waitForSourceMap = function waitForSourceMap(sourceMapURLSuffix) {
    var fulfill;
    var promise = new Promise(function(x) {
        fulfill = x;
    });
    sourceMapCallbacks.set(sourceMapURLSuffix, fulfill);
    return promise;
};
var locationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.LiveLocation.LiveLocationPool();
var nameSymbol = Symbol('LiveLocationNameForTest');
var createdSymbol = Symbol('LiveLocationCreated');
var createDebuggerLiveLocation = function createDebuggerLiveLocation(name, urlSuffix, lineNumber, columnNumber) {
    var dumpOnUpdate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    var script = TestRunner.debuggerModel.scripts().find(function(script) {
        return script.sourceURL.endsWith(urlSuffix);
    });
    var rawLocation = TestRunner.debuggerModel.createRawLocation(script, lineNumber || 0, columnNumber || 0);
    return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createLiveLocation(rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};
var createCSSLiveLocation = function createCSSLiveLocation(name, urlSuffix, lineNumber, columnNumber) {
    var dumpOnUpdate = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
    var header = TestRunner.cssModel.styleSheetHeaders().find(function(header) {
        return header.resourceURL().endsWith(urlSuffix);
    });
    var rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSLocation(header, lineNumber || 0, columnNumber || 0);
    return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().createLiveLocation(rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};
function updateDelegate(name, dumpOnUpdate, liveLocation) {
    return _updateDelegate.apply(this, arguments);
}
function _updateDelegate() {
    _updateDelegate = _async_to_generator(function(name, dumpOnUpdate, liveLocation) {
        var hint;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    liveLocation[nameSymbol] = name;
                    hint = liveLocation[createdSymbol] ? '[ UPDATE ]' : '[ CREATE ]';
                    liveLocation[createdSymbol] = true;
                    if (!dumpOnUpdate) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        dumpLocation(liveLocation, hint)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _updateDelegate.apply(this, arguments);
}
var dumpLocation = function() {
    var _ref = _async_to_generator(function(liveLocation, hint) {
        var prefix, uiLocation;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    hint = hint || '[  GET   ]';
                    prefix = "".concat(hint, "  LiveLocation-").concat(liveLocation[nameSymbol], ": ");
                    return [
                        4,
                        liveLocation.uiLocation()
                    ];
                case 1:
                    uiLocation = _state.sent();
                    if (!uiLocation) {
                        TestRunner.addResult(prefix + 'null');
                        return [
                            2
                        ];
                    }
                    TestRunner.addResult(prefix + cleanupURL(uiLocation.uiSourceCode.url()) + ':' + uiLocation.lineNumber + ':' + uiLocation.columnNumber);
                    return [
                        2
                    ];
            }
        });
    });
    return function dumpLocation(liveLocation, hint) {
        return _ref.apply(this, arguments);
    };
}();
var GC = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.evaluateInPageAsync("new Promise(resolve =>\n    GCController.asyncCollectAll(resolve))")
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function GC() {
        return _ref.apply(this, arguments);
    };
}();


}),

}]);