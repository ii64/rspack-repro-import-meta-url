"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_FrameManager_test_js"], {
"./core/sdk/FrameManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}


var MockResourceTreeModel = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(MockResourceTreeModel, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(MockResourceTreeModel);
    function MockResourceTreeModel(id) {
        _class_call_check(this, MockResourceTreeModel);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "targetId", void 0);
        _this.targetId = id;
        return _this;
    }
    _create_class(MockResourceTreeModel, [
        {
            key: "target",
            value: function target() {
                var _this = this;
                return {
                    id: function() {
                        return _this.targetId;
                    },
                    parentTarget: function() {
                        return null;
                    }
                };
            }
        }
    ]);
    return MockResourceTreeModel;
}(_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var MockResourceTreeFrame = function MockResourceTreeFrame(frameId, targetId) {
    "use strict";
    var _this = this;
    _class_call_check(this, MockResourceTreeFrame);
    _define_property(this, "targetId", void 0);
    _define_property(this, "id", void 0);
    _define_property(this, "getCreationStackTraceData", function() {});
    _define_property(this, "resourceTreeModel", function() {
        return {
            target: function() {
                return {
                    id: function() {
                        return _this.targetId;
                    }
                };
            }
        };
    });
    _define_property(this, "isMainFrame", function() {
        return true;
    });
    _define_property(this, "isOutermostFrame", function() {
        return true;
    });
    _define_property(this, "setCreationStackTrace", function() {});
    _define_property(this, "getAdScriptId", function() {
        return null;
    });
    _define_property(this, "setAdScriptId", function() {});
    _define_property(this, "getDebuggerId", function() {
        return null;
    });
    _define_property(this, "setDebuggerId", function() {});
    this.id = frameId;
    this.targetId = targetId;
};
function mockFrameToObjectForAssertion(mockFrame) {
    return {
        targetId: mockFrame.targetId,
        id: mockFrame.id
    };
}
var fakeScriptId = '1';
describe('FrameManager', function() {
    var attachMockModel = function attachMockModel(frameManager, targetId) {
        var mockModel = new MockResourceTreeModel(targetId);
        frameManager.modelAdded(mockModel);
        return mockModel;
    };
    var addMockFrame = function addMockFrame(model, frameId) {
        var targetId = model.target().id();
        var mockFrame = new MockResourceTreeFrame(frameId, targetId);
        model.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, mockFrame);
        return mockFrame;
    };
    var setupEventSink = function setupEventSink(// eslint-disable-next-line @typescript-eslint/no-explicit-any
    frameManager, events) {
        var dispatchedEvents = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var event = _step.value;
                frameManager.addEventListener(event, function(e) {
                    return dispatchedEvents.push({
                        type: event || '',
                        data: e.data
                    });
                });
            };
            for(var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
        return dispatchedEvents;
    };
    var frameId = 'frame-id';
    var parentFrameId = 'parent-frame-id';
    var childFrameId = 'child-frame-id';
    var targetId = 'target-id';
    var parentTargetId = 'parent-frame-id';
    var childTargetId = 'child-frame-id';
    it('collects frames from a ResourceTreeModel', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var dispatchedEvents = setupEventSink(frameManager, [
            "FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ 
        ]);
        var mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, frameId);
        var frameIds = dispatchedEvents.map(function(event) {
            return event.data.frame.id;
        });
        assert.deepStrictEqual(frameIds, [
            frameId
        ]);
        var frameFromId = frameManager.getFrame(frameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.id, frameId);
    });
    it('handles attachment and detachment of frames', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var dispatchedEvents = setupEventSink(frameManager, [
            "FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ ,
            "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */ 
        ]);
        var mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, parentFrameId);
        var mockChildFrame = addMockFrame(mockModel, childFrameId);
        mockModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, {
            frame: mockChildFrame,
            isSwap: false
        });
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: targetId,
            id: parentFrameId
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: targetId,
            id: childFrameId
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[2].data, {
            frameId: childFrameId
        });
        var frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.id, parentFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.resourceTreeModel().target().id(), targetId);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId, null);
    });
    it('handles removal of target', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var dispatchedEvents = setupEventSink(frameManager, [
            "FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ ,
            "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */ 
        ]);
        var mockModel = attachMockModel(frameManager, targetId);
        addMockFrame(mockModel, parentFrameId);
        addMockFrame(mockModel, childFrameId);
        frameManager.modelRemoved(mockModel);
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: targetId,
            id: parentFrameId
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: targetId,
            id: childFrameId
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[2].data, {
            frameId: parentFrameId
        });
        assert.strictEqual(dispatchedEvents[3].type, 'FrameRemoved');
        assert.deepEqual(dispatchedEvents[3].data, {
            frameId: childFrameId
        });
        var frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId, null);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId, null);
    });
    it('handles a frame transferring to a different target', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var dispatchedEvents = setupEventSink(frameManager, [
            "FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ ,
            "FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */ 
        ]);
        var mockParentModel = attachMockModel(frameManager, parentTargetId);
        addMockFrame(mockParentModel, parentFrameId);
        var mockChildModel = attachMockModel(frameManager, childTargetId);
        var mockChildFrameParentTarget = addMockFrame(mockParentModel, childFrameId);
        addMockFrame(mockChildModel, childFrameId);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, {
            frame: mockChildFrameParentTarget,
            isSwap: true
        });
        assert.strictEqual(dispatchedEvents[0].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[0].data.frame), {
            targetId: parentTargetId,
            id: parentFrameId
        });
        assert.strictEqual(dispatchedEvents[1].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[1].data.frame), {
            targetId: parentTargetId,
            id: childFrameId
        });
        assert.strictEqual(dispatchedEvents[2].type, 'FrameAddedToTarget');
        assert.deepEqual(mockFrameToObjectForAssertion(dispatchedEvents[2].data.frame), {
            targetId: childTargetId,
            id: childFrameId
        });
        var frameFromId = frameManager.getFrame(parentFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.id, parentFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.resourceTreeModel().target().id(), parentTargetId);
        frameFromId = frameManager.getFrame(childFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.id, childFrameId);
        assert.strictEqual(frameFromId === null || frameFromId === void 0 ? void 0 : frameFromId.resourceTreeModel().target().id(), childTargetId);
    });
    it('transfers frame creation stack traces during OOPIF transfer (case 1)', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var mockParentModel = attachMockModel(frameManager, parentTargetId);
        var mockChildModel = attachMockModel(frameManager, childTargetId);
        var trace = {
            callFrames: [
                {
                    functionName: 'function1',
                    url: 'http://www.example.com/script1.js',
                    lineNumber: 15,
                    columnNumber: 10,
                    scriptId: fakeScriptId
                },
                {
                    functionName: 'function2',
                    url: 'http://www.example.com/script2.js',
                    lineNumber: 20,
                    columnNumber: 5,
                    scriptId: fakeScriptId
                }
            ]
        };
        // step 1) frame added to existing target
        var frameOldTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockParentModel, null, frameId, null, trace);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameOldTarget);
        // step 2) frame added to new target
        var frameNewTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockChildModel, null, frameId, null, null);
        mockChildModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameNewTarget);
        // step 3) frame removed from existing target
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, {
            frame: frameOldTarget,
            isSwap: true
        });
        var frame = frameManager.getFrame(frameId);
        var _frame_getCreationStackTraceData = frame.getCreationStackTraceData(), creationStackTrace = _frame_getCreationStackTraceData.creationStackTrace, creationStackTraceTarget = _frame_getCreationStackTraceData.creationStackTraceTarget;
        assert.deepEqual(creationStackTrace, trace);
        assert.strictEqual(creationStackTraceTarget.id(), parentTargetId);
    });
    it('transfers frame creation stack traces during OOPIF transfer (case 2)', function() {
        var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
        var mockParentModel = attachMockModel(frameManager, parentTargetId);
        var mockChildModel = attachMockModel(frameManager, childTargetId);
        var trace = {
            callFrames: [
                {
                    functionName: 'function1',
                    url: 'http://www.example.com/script1.js',
                    lineNumber: 15,
                    columnNumber: 10,
                    scriptId: fakeScriptId
                },
                {
                    functionName: 'function2',
                    url: 'http://www.example.com/script2.js',
                    lineNumber: 20,
                    columnNumber: 5,
                    scriptId: fakeScriptId
                }
            ]
        };
        // step 1) frame added to existing target
        var frameOldTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockParentModel, null, frameId, null, trace);
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameOldTarget);
        // step 2) frame removed from existing target
        mockParentModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameDetached, {
            frame: frameOldTarget,
            isSwap: true
        });
        // step 3) frame added to new target
        var frameNewTarget = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeFrame(mockChildModel, null, frameId, null, null);
        mockChildModel.dispatchEventToListeners(_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameAdded, frameNewTarget);
        var frame = frameManager.getFrame(frameId);
        var _frame_getCreationStackTraceData = frame.getCreationStackTraceData(), creationStackTrace = _frame_getCreationStackTraceData.creationStackTrace, creationStackTraceTarget = _frame_getCreationStackTraceData.creationStackTraceTarget;
        assert.deepEqual(creationStackTrace, trace);
        assert.strictEqual(creationStackTraceTarget.id(), parentTargetId);
    });
    describe('getOutermostFrame', function() {
        it('returns null when no frames are attached', function() {
            var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
            assert.isNull(frameManager.getOutermostFrame());
        });
        it('returns the top main frame', function() {
            var _frameManager_getOutermostFrame;
            var frameManager = new _sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager();
            var mockModel = attachMockModel(frameManager, targetId);
            addMockFrame(mockModel, frameId);
            assert.strictEqual((_frameManager_getOutermostFrame = frameManager.getOutermostFrame()) === null || _frameManager_getOutermostFrame === void 0 ? void 0 : _frameManager_getOutermostFrame.id, frameId);
        });
    });
}); //# sourceMappingURL=FrameManager.test.js.map


}),

}]);