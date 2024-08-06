"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_heap_snapshot_worker_heap_snapshot_worker_d_ts"], {
"./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshotWorkerDispatcher: function() { return HeapSnapshotWorkerDispatcher; }
});
/* harmony import */var _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/heap_snapshot_model/heap_snapshot_model.js */ "./models/heap_snapshot_model/heap_snapshot_model.js");
/* harmony import */var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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

// We mirror what heap_snapshot_worker.ts does, but we can't use it here as we'd have a
// cyclic GN dependency otherwise.



var // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_objects = /*#__PURE__*/ new WeakMap(), _postMessage = /*#__PURE__*/ new WeakMap();
var HeapSnapshotWorkerDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotWorkerDispatcher(postMessage) {
        _class_call_check(this, HeapSnapshotWorkerDispatcher);
        _class_private_field_init(this, _objects, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _postMessage, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _objects, []);
        _class_private_field_set(this, _postMessage, postMessage);
    }
    _create_class(HeapSnapshotWorkerDispatcher, [
        {
            key: "sendEvent",
            value: function sendEvent(name, data) {
                _class_private_field_get(this, _postMessage).call(this, {
                    eventName: name,
                    data: data
                });
            }
        },
        {
            key: "dispatchMessage",
            value: function dispatchMessage(param) {
                var data = param.data;
                var response = {
                    callId: data.callId,
                    result: null,
                    error: undefined,
                    errorCallStack: undefined,
                    errorMethodName: undefined
                };
                try {
                    switch(data.disposition){
                        case 'createLoader':
                            _class_private_field_get(this, _objects)[data.objectId] = new _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__.HeapSnapshotLoader(this);
                            break;
                        case 'dispose':
                            {
                                delete _class_private_field_get(this, _objects)[data.objectId];
                                break;
                            }
                        case 'getter':
                            {
                                var object = _class_private_field_get(this, _objects)[data.objectId];
                                var result = object[data.methodName];
                                response.result = result;
                                break;
                            }
                        case 'factory':
                            {
                                var object1 = _class_private_field_get(this, _objects)[data.objectId];
                                var result1 = object1[data.methodName].apply(object1, data.methodArguments);
                                if (result1) {
                                    _class_private_field_get(this, _objects)[data.newObjectId] = result1;
                                }
                                response.result = Boolean(result1);
                                break;
                            }
                        case 'method':
                            {
                                var object2 = _class_private_field_get(this, _objects)[data.objectId];
                                response.result = object2[data.methodName].apply(object2, data.methodArguments);
                                break;
                            }
                        case 'evaluateForTest':
                            {
                                try {
                                    // Make 'HeapSnapshotWorker' and 'HeapSnapshotModel' available to web tests. 'eval' can't use 'import'.
                                    // @ts-ignore
                                    globalThis.HeapSnapshotWorker = {
                                        AllocationProfile: _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_1__,
                                        HeapSnapshot: _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__,
                                        HeapSnapshotLoader: _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_3__
                                    };
                                    // @ts-ignore
                                    globalThis.HeapSnapshotModel = _models_heap_snapshot_model_heap_snapshot_model_js__WEBPACK_IMPORTED_MODULE_0__;
                                    response.result = self.eval(data.source);
                                } catch (error) {
                                    response.result = error.toString();
                                }
                                break;
                            }
                    }
                } catch (error) {
                    response.error = error.toString();
                    response.errorCallStack = error.stack;
                    if (data.methodName) {
                        response.errorMethodName = data.methodName;
                    }
                }
                _class_private_field_get(this, _postMessage).call(this, response);
            }
        }
    ]);
    return HeapSnapshotWorkerDispatcher;
} //# sourceMappingURL=HeapSnapshotWorkerDispatcher.js.map
();


}),
"./entrypoints/heap_snapshot_worker/heap_snapshot_worker.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AllocationProfile: function() { return /* reexport module object */ _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__; },
  HeapSnapshot: function() { return /* reexport module object */ _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeapSnapshotLoader: function() { return /* reexport module object */ _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__; },
  HeapSnapshotWorkerDispatcher: function() { return /* reexport module object */ _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__; }
});
/* harmony import */var _AllocationProfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllocationProfile.js */ "./entrypoints/heap_snapshot_worker/AllocationProfile.js");
/* harmony import */var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/* harmony import */var _HeapSnapshotLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshotLoader.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js");
/* harmony import */var _HeapSnapshotWorkerDispatcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapSnapshotWorkerDispatcher.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshotWorkerDispatcher.js");







}),

}]);