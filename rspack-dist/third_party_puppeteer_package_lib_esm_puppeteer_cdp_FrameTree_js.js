"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_FrameTree_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/FrameTree.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameTree: function() { return FrameTree; }
});
/* harmony import */var _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Deferred.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/Deferred.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
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

var _frames = /*#__PURE__*/ new WeakMap(), // frameID -> parentFrameID
_parentIds = /*#__PURE__*/ new WeakMap(), // frameID -> childFrameIDs
_childIds = /*#__PURE__*/ new WeakMap(), _mainFrame = /*#__PURE__*/ new WeakMap(), _isMainFrameStale = /*#__PURE__*/ new WeakMap(), _waitRequests = /*#__PURE__*/ new WeakMap();
/**
 * Keeps track of the page frame tree and it's is managed by
 * {@link FrameManager}. FrameTree uses frame IDs to reference frame and it
 * means that referenced frames might not be in the tree anymore. Thus, the tree
 * structure is eventually consistent.
 * @internal
 */ var FrameTree = /*#__PURE__*/ function() {
    "use strict";
    function FrameTree() {
        _class_call_check(this, FrameTree);
        _class_private_field_init(this, _frames, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _parentIds, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _childIds, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _mainFrame, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isMainFrameStale, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _waitRequests, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(FrameTree, [
        {
            key: "getMainFrame",
            value: function getMainFrame() {
                return _class_private_field_get(this, _mainFrame);
            }
        },
        {
            key: "getById",
            value: function getById(frameId) {
                return _class_private_field_get(this, _frames).get(frameId);
            }
        },
        {
            /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */ key: "waitForFrame",
            value: function waitForFrame(frameId) {
                var frame = this.getById(frameId);
                if (frame) {
                    return Promise.resolve(frame);
                }
                var deferred = _util_Deferred_js__WEBPACK_IMPORTED_MODULE_0__.Deferred.create();
                var callbacks = _class_private_field_get(this, _waitRequests).get(frameId) || new Set();
                callbacks.add(deferred);
                return deferred.valueOrThrow();
            }
        },
        {
            key: "frames",
            value: function frames() {
                return Array.from(_class_private_field_get(this, _frames).values());
            }
        },
        {
            key: "addFrame",
            value: function addFrame(frame) {
                var _class_private_field_get_get;
                _class_private_field_get(this, _frames).set(frame._id, frame);
                if (frame._parentId) {
                    _class_private_field_get(this, _parentIds).set(frame._id, frame._parentId);
                    if (!_class_private_field_get(this, _childIds).has(frame._parentId)) {
                        _class_private_field_get(this, _childIds).set(frame._parentId, new Set());
                    }
                    _class_private_field_get(this, _childIds).get(frame._parentId).add(frame._id);
                } else if (!_class_private_field_get(this, _mainFrame) || _class_private_field_get(this, _isMainFrameStale)) {
                    _class_private_field_set(this, _mainFrame, frame);
                    _class_private_field_set(this, _isMainFrameStale, false);
                }
                (_class_private_field_get_get = _class_private_field_get(this, _waitRequests).get(frame._id)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.forEach(function(request) {
                    return request.resolve(frame);
                });
            }
        },
        {
            key: "removeFrame",
            value: function removeFrame(frame) {
                _class_private_field_get(this, _frames).delete(frame._id);
                _class_private_field_get(this, _parentIds).delete(frame._id);
                if (frame._parentId) {
                    var _class_private_field_get_get;
                    (_class_private_field_get_get = _class_private_field_get(this, _childIds).get(frame._parentId)) === null || _class_private_field_get_get === void 0 ? void 0 : _class_private_field_get_get.delete(frame._id);
                } else {
                    _class_private_field_set(this, _isMainFrameStale, true);
                }
            }
        },
        {
            key: "childFrames",
            value: function childFrames(frameId) {
                var _this = this;
                var childIds = _class_private_field_get(this, _childIds).get(frameId);
                if (!childIds) {
                    return [];
                }
                return Array.from(childIds).map(function(id) {
                    return _this.getById(id);
                }).filter(function(frame) {
                    return frame !== undefined;
                });
            }
        },
        {
            key: "parentFrame",
            value: function parentFrame(frameId) {
                var parentId = _class_private_field_get(this, _parentIds).get(frameId);
                return parentId ? this.getById(parentId) : undefined;
            }
        }
    ]);
    return FrameTree;
} //# sourceMappingURL=FrameTree.js.map
();


}),

}]);