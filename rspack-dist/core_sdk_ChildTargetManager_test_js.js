"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ChildTargetManager_test_js"], {
"./core/sdk/ChildTargetManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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



var TARGET_ID = 'TARGET_ID';
var TITLE = 'TITLE';
var nextTargetId = 0;
function createTargetInfo(targetId, type, url, title) {
    return {
        targetId: targetId !== null && targetId !== void 0 ? targetId : String(++nextTargetId),
        type: type !== null && type !== void 0 ? type : 'page',
        title: title !== null && title !== void 0 ? title : '',
        url: url !== null && url !== void 0 ? url : 'http://example.com',
        attached: true,
        canAccessOpener: true
    };
}
var nextSessionId = 0;
function createSessionId() {
    return 'SESSION_ID' + ++nextSessionId;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('ChildTargetManager', function() {
    it('adds subtargets', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(TARGET_ID),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(childTargetManager.childTargets().length, 1);
                    assert.strictEqual(childTargetManager.childTargets()[0].id(), TARGET_ID);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets subtarget type', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, _i, _iter, _iter__i, protocolType, sdkType, _childTargetManager_childTargets_slice, subtarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    _i = 0, _iter = [
                        [
                            'iframe',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'webview',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'page',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'background_page',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'app',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'popup_page',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame
                        ],
                        [
                            'worker',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker
                        ],
                        [
                            'shared_worker',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.SharedWorker
                        ],
                        [
                            'service_worker',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker
                        ],
                        [
                            'auction_worklet',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.AuctionWorklet
                        ],
                        [
                            'browser',
                            _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Browser
                        ]
                    ];
                    _state.label = 1;
                case 1:
                    if (!(_i < _iter.length)) return [
                        3,
                        4
                    ];
                    _iter__i = _sliced_to_array(_iter[_i], 2), protocolType = _iter__i[0], sdkType = _iter__i[1];
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, protocolType),
                            waitingForDebugger: false
                        })
                    ];
                case 2:
                    _state.sent();
                    _childTargetManager_childTargets_slice = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = _childTargetManager_childTargets_slice[0];
                    assert.strictEqual(subtarget.type(), sdkType);
                    _state.label = 3;
                case 3:
                    _i++;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets subtarget to frame for devtools scheme if type is other', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, _childTargetManager_childTargets_slice, subtarget, ref;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'other', 'devtools://foo/bar'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    _childTargetManager_childTargets_slice = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = _childTargetManager_childTargets_slice[0];
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'worker', 'devtools://foo/bar'),
                            waitingForDebugger: false
                        })
                    ];
                case 2:
                    _state.sent();
                    ref = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = ref[0], ref;
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Worker);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets subtarget to frame for chrome://print/ if type is other', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, _childTargetManager_childTargets_slice, subtarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'other', 'chrome://print/'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    _childTargetManager_childTargets_slice = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = _childTargetManager_childTargets_slice[0];
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets subtarget to frame for chrome://file-manager/ if type is other', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, _childTargetManager_childTargets_slice, subtarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'other', 'chrome://file-manager/?%7B%22allowedPaths%22:%22anyPathOrUrl'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    _childTargetManager_childTargets_slice = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = _childTargetManager_childTargets_slice[0];
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets subtarget to frame for sidebar URLs if type is other', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, _childTargetManager_childTargets_slice, subtarget, ref;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'other', 'chrome://read-later.top-chrome/'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    _childTargetManager_childTargets_slice = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = _childTargetManager_childTargets_slice[0];
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'other', 'chrome://booksmarks-side-panel.top-chrome/'),
                            waitingForDebugger: false
                        })
                    ];
                case 2:
                    _state.sent();
                    ref = _sliced_to_array(childTargetManager.childTargets().slice(-1), 1), subtarget = ref[0], ref;
                    assert.strictEqual(subtarget.type(), _sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets worker target name to the target title', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'worker', 'http://example.com/worker.js', TITLE),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(childTargetManager.childTargets()[0].name(), TITLE);
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets non-frame target name to the last path component if present', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'service_worker', 'http://example.org/service_worker.html', TITLE),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'worker', 'http://example.com/worker.js'),
                            waitingForDebugger: false
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(childTargetManager.childTargets()[0].name(), 'service_worker.html');
                    assert.strictEqual(childTargetManager.childTargets()[1].name(), 'worker.js');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sets non-frame target a numbered name if it cannot use URL path', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    assert.strictEqual(childTargetManager.childTargets().length, 0);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'page', 'data:text/html,<!doctype html>'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'iframe', 'data:text/html,<!doctype html>'),
                            waitingForDebugger: false
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'webview', 'data:text/html,<!doctype html>'),
                            waitingForDebugger: false
                        })
                    ];
                case 3:
                    _state.sent();
                    // The targets above are frames and should not be given a numbered named
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'service_worker', 'data:application/javascript;console.log("Service Worker")'),
                            waitingForDebugger: false
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(undefined, 'worker', 'data:application/javascript;console.log("Worker")'),
                            waitingForDebugger: false
                        })
                    ];
                case 5:
                    _state.sent();
                    assert.strictEqual(childTargetManager.childTargets()[3].name(), '#1');
                    assert.strictEqual(childTargetManager.childTargets()[4].name(), '#2');
                    return [
                        2
                    ];
            }
        });
    }));
    it('calls attach callback', /*#__PURE__*/ _async_to_generator(function() {
        var target, childTargetManager, attachCallback, OTHER_TARGET_ID;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(target);
                    attachCallback = sinon.spy();
                    _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager.install(attachCallback);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(TARGET_ID),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(attachCallback.calledOnce);
                    assert.strictEqual(attachCallback.firstCall.firstArg.target.id(), TARGET_ID);
                    assert.isFalse(attachCallback.firstCall.firstArg.waitingForDebugger);
                    OTHER_TARGET_ID = 'OTHER_TARGET_ID';
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo(OTHER_TARGET_ID),
                            waitingForDebugger: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(attachCallback.calledTwice);
                    assert.strictEqual(attachCallback.secondCall.firstArg.target.id(), OTHER_TARGET_ID);
                    assert.isTrue(attachCallback.secondCall.firstArg.waitingForDebugger);
                    return [
                        2
                    ];
            }
        });
    }));
    it('disposes of the target if it crashes', /*#__PURE__*/ _async_to_generator(function() {
        var parentTarget, childTargetManager, target, disposeSpy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    parentTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
                    childTargetManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager(parentTarget);
                    return [
                        4,
                        childTargetManager.attachedToTarget({
                            sessionId: createSessionId(),
                            targetInfo: createTargetInfo('child-target-id'),
                            waitingForDebugger: false
                        })
                    ];
                case 1:
                    _state.sent();
                    target = childTargetManager.childTargets().at(0);
                    assert.isDefined(target);
                    assert.strictEqual(target.id(), 'child-target-id');
                    disposeSpy = sinon.spy(target, 'dispose');
                    childTargetManager.targetCrashed({
                        targetId: target.id(),
                        status: 'crashed',
                        errorCode: 1
                    });
                    // Ensure that the target has been disposed after it crashed.
                    assert.isTrue(disposeSpy.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ChildTargetManager.test.js.map


}),

}]);