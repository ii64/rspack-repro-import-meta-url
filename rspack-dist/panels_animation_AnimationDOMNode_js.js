"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationDOMNode_js"], {
"./panels/animation/AnimationDOMNode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationDOMNode: function() { return AnimationDOMNode; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
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
function _check_private_redeclaration(obj, privateCollection) {
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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

var DEVTOOLS_ANIMATIONS_WORLD_NAME = 'devtools_animations';
var REPORT_SCROLL_POSITION_BINDING_NAME = '__devtools_report_scroll_position__';
var getScrollListenerNameInPage = function(id) {
    return "__devtools_scroll_listener_".concat(id, "__");
};
function resolveToObjectInWorld(domNode, worldName) {
    return _resolveToObjectInWorld.apply(this, arguments);
}
function _resolveToObjectInWorld() {
    _resolveToObjectInWorld = _async_to_generator(function(domNode, worldName) {
        var resourceTreeModel, pageAgent, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, frame, executionContextId, object, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel = domNode.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
                    pageAgent = domNode.domModel().target().pageAgent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        7,
                        8,
                        9
                    ]);
                    _iterator = resourceTreeModel.frames()[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        6
                    ];
                    frame = _step.value;
                    return [
                        4,
                        pageAgent.invoke_createIsolatedWorld({
                            frameId: frame.id,
                            worldName: worldName
                        })
                    ];
                case 3:
                    executionContextId = _state.sent().executionContextId;
                    return [
                        4,
                        domNode.resolveToObject(undefined, executionContextId)
                    ];
                case 4:
                    object = _state.sent();
                    if (object) {
                        return [
                            2,
                            object
                        ];
                    }
                    _state.label = 5;
                case 5:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 6:
                    return [
                        3,
                        9
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        9
                    ];
                case 8:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 9:
                    return [
                        2,
                        null
                    ];
            }
        });
    });
    return _resolveToObjectInWorld.apply(this, arguments);
}
var _domNode = /*#__PURE__*/ new WeakMap(), _scrollListenersById = /*#__PURE__*/ new WeakMap(), _scrollBindingListener = /*#__PURE__*/ new WeakMap(), _addReportScrollPositionBinding = /*#__PURE__*/ new WeakSet(), _removeReportScrollPositionBinding = /*#__PURE__*/ new WeakSet();
/**
 * Provides an extension over `SDK.DOMModel.DOMNode` that gives it additional
 * capabilities for animation debugging, mainly:
 * - getting a node's scroll information (scroll offsets and scroll range).
 * - updating a node's scroll offset.
 * - tracking the node's scroll offsets with event listeners.
 *
 * It works by running functions on the target page, see `SDK.DOMModel.DOMNode`s `callFunction` method
 * for more details on how a function is called on the target page.
 *
 * For listening to events on the target page and getting notified on the devtools frontend
 * side, we're adding a binding to the page `__devtools_report_scroll_position__` in a world `devtools_animation`
 * we've created. Then, we're setting scroll listeners of the `node` in the same world which calls the binding
 * itself with the scroll offsets.
 */ var AnimationDOMNode = /*#__PURE__*/ function() {
    "use strict";
    function AnimationDOMNode(domNode) {
        _class_call_check(this, AnimationDOMNode);
        _class_private_method_init(this, _addReportScrollPositionBinding);
        _class_private_method_init(this, _removeReportScrollPositionBinding);
        _class_private_field_init(this, _domNode, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _scrollListenersById, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _scrollBindingListener, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _domNode, domNode);
        _class_private_field_set(this, _scrollListenersById, new Map());
    }
    _create_class(AnimationDOMNode, [
        {
            key: "addScrollEventListener",
            value: function addScrollEventListener(onScroll) {
                var _this = this;
                return _async_to_generator(function() {
                    var id, object;
                    function scrollListenerInPage(id, reportScrollPositionBindingName, scrollListenerNameInPage) {
                        if ('scrollingElement' in this && !this.scrollingElement) {
                            return;
                        }
                        var scrollingElement = 'scrollingElement' in this ? this.scrollingElement : this;
                        // @ts-ignore We're setting a custom field on `Element` or `Document` for retaining the function on the page.
                        this[scrollListenerNameInPage] = function() {
                            // @ts-ignore `reportScrollPosition` binding is injected to the page before calling the function.
                            globalThis[reportScrollPositionBindingName](JSON.stringify({
                                scrollTop: scrollingElement.scrollTop,
                                scrollLeft: scrollingElement.scrollLeft,
                                id: id
                            }));
                        };
                        // @ts-ignore We've already defined the function used below.
                        this.addEventListener('scroll', this[scrollListenerNameInPage], true);
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                AnimationDOMNode.lastAddedListenerId++;
                                id = AnimationDOMNode.lastAddedListenerId;
                                _class_private_field_get(_this, _scrollListenersById).set(id, onScroll);
                                if (!!_class_private_field_get(_this, _scrollBindingListener)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_method_get(_this, _addReportScrollPositionBinding, addReportScrollPositionBinding).call(_this)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    resolveToObjectInWorld(_class_private_field_get(_this, _domNode), DEVTOOLS_ANIMATIONS_WORLD_NAME)
                                ];
                            case 3:
                                object = _state.sent();
                                if (!object) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    object.callFunction(scrollListenerInPage, [
                                        id,
                                        REPORT_SCROLL_POSITION_BINDING_NAME,
                                        getScrollListenerNameInPage(id)
                                    ].map(function(arg) {
                                        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.toCallArgument(arg);
                                    }))
                                ];
                            case 4:
                                _state.sent();
                                object.release();
                                return [
                                    2,
                                    id
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "removeScrollEventListener",
            value: function removeScrollEventListener(id) {
                var _this = this;
                return _async_to_generator(function() {
                    var object;
                    function removeScrollListenerInPage(scrollListenerNameInPage) {
                        // @ts-ignore We've already set this custom field while adding scroll listener.
                        this.removeEventListener('scroll', this[scrollListenerNameInPage]);
                        // @ts-ignore We've already set this custom field while adding scroll listener.
                        delete this[scrollListenerNameInPage];
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    resolveToObjectInWorld(_class_private_field_get(_this, _domNode), DEVTOOLS_ANIMATIONS_WORLD_NAME)
                                ];
                            case 1:
                                object = _state.sent();
                                if (!object) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    object.callFunction(removeScrollListenerInPage, [
                                        getScrollListenerNameInPage(id)
                                    ].map(function(arg) {
                                        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.toCallArgument(arg);
                                    }))
                                ];
                            case 2:
                                _state.sent();
                                object.release();
                                _class_private_field_get(_this, _scrollListenersById).delete(id);
                                if (!(_class_private_field_get(_this, _scrollListenersById).size === 0)) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _class_private_method_get(_this, _removeReportScrollPositionBinding, removeReportScrollPositionBinding).call(_this)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "scrollTop",
            value: function scrollTop() {
                var _this = this;
                return _async_to_generator(function() {
                    function scrollTopInPage() {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return 0;
                            }
                            return this.scrollingElement.scrollTop;
                        }
                        return this.scrollTop;
                    }
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _domNode).callFunction(scrollTopInPage).then(function(res) {
                                var _res_value;
                                return (_res_value = res === null || res === void 0 ? void 0 : res.value) !== null && _res_value !== void 0 ? _res_value : null;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "scrollLeft",
            value: function scrollLeft() {
                var _this = this;
                return _async_to_generator(function() {
                    function scrollLeftInPage() {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return 0;
                            }
                            return this.scrollingElement.scrollLeft;
                        }
                        return this.scrollLeft;
                    }
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _domNode).callFunction(scrollLeftInPage).then(function(res) {
                                var _res_value;
                                return (_res_value = res === null || res === void 0 ? void 0 : res.value) !== null && _res_value !== void 0 ? _res_value : null;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "setScrollTop",
            value: function setScrollTop(offset) {
                var _this = this;
                return _async_to_generator(function() {
                    function setScrollTopInPage(offsetInPage) {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return;
                            }
                            this.scrollingElement.scrollTop = offsetInPage;
                        } else {
                            this.scrollTop = offsetInPage;
                        }
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _domNode).callFunction(setScrollTopInPage, [
                                        offset
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "setScrollLeft",
            value: function setScrollLeft(offset) {
                var _this = this;
                return _async_to_generator(function() {
                    function setScrollLeftInPage(offsetInPage) {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return;
                            }
                            this.scrollingElement.scrollLeft = offsetInPage;
                        } else {
                            this.scrollLeft = offsetInPage;
                        }
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _domNode).callFunction(setScrollLeftInPage, [
                                        offset
                                    ])
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "verticalScrollRange",
            value: function verticalScrollRange() {
                var _this = this;
                return _async_to_generator(function() {
                    function verticalScrollRangeInPage() {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return 0;
                            }
                            return this.scrollingElement.scrollHeight - this.scrollingElement.clientHeight;
                        }
                        return this.scrollHeight - this.clientHeight;
                    }
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _domNode).callFunction(verticalScrollRangeInPage).then(function(res) {
                                var _res_value;
                                return (_res_value = res === null || res === void 0 ? void 0 : res.value) !== null && _res_value !== void 0 ? _res_value : null;
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "horizontalScrollRange",
            value: function horizontalScrollRange() {
                var _this = this;
                return _async_to_generator(function() {
                    function horizontalScrollRangeInPage() {
                        if ('scrollingElement' in this) {
                            if (!this.scrollingElement) {
                                return 0;
                            }
                            return this.scrollingElement.scrollWidth - this.scrollingElement.clientWidth;
                        }
                        return this.scrollWidth - this.clientWidth;
                    }
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_field_get(_this, _domNode).callFunction(horizontalScrollRangeInPage).then(function(res) {
                                var _res_value;
                                return (_res_value = res === null || res === void 0 ? void 0 : res.value) !== null && _res_value !== void 0 ? _res_value : null;
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return AnimationDOMNode;
} //# sourceMappingURL=AnimationDOMNode.js.map
();
_define_property(AnimationDOMNode, "lastAddedListenerId", 0);
function addReportScrollPositionBinding() {
    return _addReportScrollPositionBinding1.apply(this, arguments);
}
function _addReportScrollPositionBinding1() {
    _addReportScrollPositionBinding1 = _async_to_generator(function() {
        var _this, runtimeModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    // The binding is already added so we don't need to add it again.
                    if (_class_private_field_get(this, _scrollBindingListener)) {
                        return [
                            2
                        ];
                    }
                    _class_private_field_set(this, _scrollBindingListener, function(ev) {
                        var _ev_data = ev.data, name = _ev_data.name, payload = _ev_data.payload;
                        if (name !== REPORT_SCROLL_POSITION_BINDING_NAME) {
                            return;
                        }
                        var _JSON_parse = JSON.parse(payload), scrollTop = _JSON_parse.scrollTop, scrollLeft = _JSON_parse.scrollLeft, id = _JSON_parse.id;
                        var scrollListener = _class_private_field_get(_this, _scrollListenersById).get(id);
                        if (!scrollListener) {
                            return;
                        }
                        scrollListener({
                            scrollTop: scrollTop,
                            scrollLeft: scrollLeft
                        });
                    });
                    runtimeModel = _class_private_field_get(this, _domNode).domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
                    return [
                        4,
                        runtimeModel.addBinding({
                            name: REPORT_SCROLL_POSITION_BINDING_NAME,
                            executionContextName: DEVTOOLS_ANIMATIONS_WORLD_NAME
                        })
                    ];
                case 1:
                    _state.sent();
                    runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.BindingCalled, _class_private_field_get(this, _scrollBindingListener));
                    return [
                        2
                    ];
            }
        });
    });
    return _addReportScrollPositionBinding1.apply(this, arguments);
}
function removeReportScrollPositionBinding() {
    return _removeReportScrollPositionBinding1.apply(this, arguments);
}
function _removeReportScrollPositionBinding1() {
    _removeReportScrollPositionBinding1 = _async_to_generator(function() {
        var runtimeModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // There isn't any binding added yet.
                    if (!_class_private_field_get(this, _scrollBindingListener)) {
                        return [
                            2
                        ];
                    }
                    runtimeModel = _class_private_field_get(this, _domNode).domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
                    return [
                        4,
                        runtimeModel.removeBinding({
                            name: REPORT_SCROLL_POSITION_BINDING_NAME
                        })
                    ];
                case 1:
                    _state.sent();
                    runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.BindingCalled, _class_private_field_get(this, _scrollBindingListener));
                    _class_private_field_set(this, _scrollBindingListener, undefined);
                    return [
                        2
                    ];
            }
        });
    });
    return _removeReportScrollPositionBinding1.apply(this, arguments);
}


}),

}]);