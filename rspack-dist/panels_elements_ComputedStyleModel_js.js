"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ComputedStyleModel_js"], {
"./panels/elements/ComputedStyleModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ComputedStyle: function() { return ComputedStyle; },
  ComputedStyleModel: function() { return ComputedStyleModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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



var ComputedStyleModel = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ComputedStyleModel, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ComputedStyleModel);
    function ComputedStyleModel() {
        _class_call_check(this, ComputedStyleModel);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "nodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "cssModelInternal", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        _define_property(_assert_this_initialized(_this), "frameResizedTimer", void 0);
        _define_property(_assert_this_initialized(_this), "computedStylePromise", void 0);
        _this.nodeInternal = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        _this.cssModelInternal = null;
        _this.eventListeners = [];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, _this.onNodeChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ComputedStyleModel, [
        {
            key: "node",
            value: function node() {
                return this.nodeInternal;
            }
        },
        {
            key: "cssModel",
            value: function cssModel() {
                return this.cssModelInternal && this.cssModelInternal.isEnabled() ? this.cssModelInternal : null;
            }
        },
        {
            key: "onNodeChanged",
            value: function onNodeChanged(event) {
                this.nodeInternal = event.data;
                this.updateModel(this.nodeInternal ? this.nodeInternal.domModel().cssModel() : null);
                this.onComputedStyleChanged(null);
            }
        },
        {
            key: "updateModel",
            value: function updateModel(cssModel) {
                if (this.cssModelInternal === cssModel) {
                    return;
                }
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
                this.cssModelInternal = cssModel;
                var domModel = cssModel ? cssModel.domModel() : null;
                var resourceTreeModel = cssModel ? cssModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) : null;
                if (cssModel && domModel && resourceTreeModel) {
                    this.eventListeners = [
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetAdded, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetChanged, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.FontsUpdated, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.MediaQueryResultChanged, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.PseudoStateForced, this.onComputedStyleChanged, this),
                        cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.ModelWasEnabled, this.onComputedStyleChanged, this),
                        domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.DOMMutated, this.onDOMModelChanged, this),
                        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameResized, this.onFrameResized, this)
                    ];
                }
            }
        },
        {
            key: "onComputedStyleChanged",
            value: function onComputedStyleChanged(event) {
                delete this.computedStylePromise;
                var _event_data;
                this.dispatchEventToListeners("ComputedStyleChanged" /* Events.ComputedStyleChanged */ , (_event_data = event === null || event === void 0 ? void 0 : event.data) !== null && _event_data !== void 0 ? _event_data : null);
            }
        },
        {
            key: "onDOMModelChanged",
            value: function onDOMModelChanged(event) {
                // Any attribute removal or modification can affect the styles of "related" nodes.
                var node = event.data;
                if (!this.nodeInternal || this.nodeInternal !== node && node.parentNode !== this.nodeInternal.parentNode && !node.isAncestor(this.nodeInternal)) {
                    return;
                }
                this.onComputedStyleChanged(null);
            }
        },
        {
            key: "onFrameResized",
            value: function onFrameResized() {
                function refreshContents() {
                    this.onComputedStyleChanged(null);
                    delete this.frameResizedTimer;
                }
                if (this.frameResizedTimer) {
                    clearTimeout(this.frameResizedTimer);
                }
                this.frameResizedTimer = window.setTimeout(refreshContents.bind(this), 100);
            }
        },
        {
            key: "elementNode",
            value: function elementNode() {
                var node = this.node();
                if (!node) {
                    return null;
                }
                return node.enclosingElementOrSelf();
            }
        },
        {
            key: "fetchComputedStyle",
            value: function fetchComputedStyle() {
                var _this = this;
                return _async_to_generator(function() {
                    var elementNode, cssModel, nodeId;
                    function verifyOutdated(elementNode, style) {
                        return elementNode === this.elementNode() && style ? new ComputedStyle(elementNode, style) : null;
                    }
                    return _ts_generator(this, function(_state) {
                        elementNode = _this.elementNode();
                        cssModel = _this.cssModel();
                        if (!elementNode || !cssModel) {
                            return [
                                2,
                                null
                            ];
                        }
                        nodeId = elementNode.id;
                        if (!nodeId) {
                            return [
                                2,
                                null
                            ];
                        }
                        if (!_this.computedStylePromise) {
                            _this.computedStylePromise = cssModel.getComputedStyle(nodeId).then(verifyOutdated.bind(_this, elementNode));
                        }
                        return [
                            2,
                            _this.computedStylePromise
                        ];
                    });
                })();
            }
        }
    ]);
    return ComputedStyleModel;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var ComputedStyle = function ComputedStyle(node, computedStyle) {
    "use strict";
    _class_call_check(this, ComputedStyle);
    _define_property(this, "node", void 0);
    _define_property(this, "computedStyle", void 0);
    this.node = node;
    this.computedStyle = computedStyle;
} //# sourceMappingURL=ComputedStyleModel.js.map
;


}),

}]);