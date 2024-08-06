"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_browser_debugger_browser_debugger_js"], {
"./panels/browser_debugger/CSPViolationBreakpointsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSPViolationBreakpointsSidebarPane: function() { return CSPViolationBreakpointsSidebarPane; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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



var CSPViolationBreakpointsSidebarPane = /*#__PURE__*/ function(CategorizedBreakpointsSidebarPane) {
    "use strict";
    _inherits(CSPViolationBreakpointsSidebarPane, CategorizedBreakpointsSidebarPane);
    var _super = _create_super(CSPViolationBreakpointsSidebarPane);
    function CSPViolationBreakpointsSidebarPane() {
        _class_call_check(this, CSPViolationBreakpointsSidebarPane);
        var _this;
        var breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
        _this = _super.call(this, breakpoints, 'sources.csp-violation-breakpoints', "CSPViolation" /* Protocol.Debugger.PausedEventReason.CSPViolation */ );
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section('sources.csp-violation-breakpoints')));
        return _this;
    }
    _create_class(CSPViolationBreakpointsSidebarPane, [
        {
            key: "getBreakpointFromPausedDetails",
            value: function getBreakpointFromPausedDetails(details) {
                var breakpointType = details.auxData && details.auxData['violationType'] ? details.auxData['violationType'] : '';
                var breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
                var breakpoint = breakpoints.find(function(x) {
                    return x.type() === breakpointType;
                });
                return breakpoint ? breakpoint : null;
            }
        },
        {
            key: "toggleBreakpoint",
            value: function toggleBreakpoint(breakpoint, enabled) {
                breakpoint.setEnabled(enabled);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().updateCSPViolationBreakpoints();
            }
        }
    ]);
    return CSPViolationBreakpointsSidebarPane;
} //# sourceMappingURL=CSPViolationBreakpointsSidebarPane.js.map
(_CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpointsSidebarPane);


}),
"./panels/browser_debugger/EventListenerBreakpointsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventListenerBreakpointsSidebarPane: function() { return EventListenerBreakpointsSidebarPane; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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



var eventListenerBreakpointsSidebarPaneInstance;
var EventListenerBreakpointsSidebarPane = /*#__PURE__*/ function(CategorizedBreakpointsSidebarPane) {
    "use strict";
    _inherits(EventListenerBreakpointsSidebarPane, CategorizedBreakpointsSidebarPane);
    var _super = _create_super(EventListenerBreakpointsSidebarPane);
    function EventListenerBreakpointsSidebarPane() {
        _class_call_check(this, EventListenerBreakpointsSidebarPane);
        var _this;
        var breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().eventListenerBreakpoints();
        var nonDomBreakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().eventListenerBreakpoints();
        breakpoints = breakpoints.concat(nonDomBreakpoints);
        _this = _super.call(this, breakpoints, 'sources.event-listener-breakpoints', "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */ );
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section('sources.event-listener-breakpoints')));
        return _this;
    }
    _create_class(EventListenerBreakpointsSidebarPane, [
        {
            key: "getBreakpointFromPausedDetails",
            value: function getBreakpointFromPausedDetails(details) {
                var auxData = details.auxData;
                var domBreakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(auxData);
                if (domBreakpoint) {
                    return domBreakpoint;
                }
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(auxData);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!eventListenerBreakpointsSidebarPaneInstance) {
                    eventListenerBreakpointsSidebarPaneInstance = new EventListenerBreakpointsSidebarPane();
                }
                return eventListenerBreakpointsSidebarPaneInstance;
            }
        }
    ]);
    return EventListenerBreakpointsSidebarPane;
} //# sourceMappingURL=EventListenerBreakpointsSidebarPane.js.map
(_CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpointsSidebarPane);


}),
"./panels/browser_debugger/browser_debugger.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CSPViolationBreakpointsSidebarPane: function() { return /* reexport module object */ _CSPViolationBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_0__; },
  DOMBreakpointsSidebarPane: function() { return /* reexport module object */ _DOMBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_1__; },
  EventListenerBreakpointsSidebarPane: function() { return /* reexport module object */ _EventListenerBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  ObjectEventListenersSidebarPane: function() { return /* reexport module object */ _ObjectEventListenersSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__; },
  XHRBreakpointsSidebarPane: function() { return /* reexport module object */ _XHRBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_4__; }
});
/* harmony import */var _CSPViolationBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSPViolationBreakpointsSidebarPane.js */ "./panels/browser_debugger/CSPViolationBreakpointsSidebarPane.js");
/* harmony import */var _DOMBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMBreakpointsSidebarPane.js */ "./panels/browser_debugger/DOMBreakpointsSidebarPane.js");
/* harmony import */var _EventListenerBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventListenerBreakpointsSidebarPane.js */ "./panels/browser_debugger/EventListenerBreakpointsSidebarPane.js");
/* harmony import */var _ObjectEventListenersSidebarPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectEventListenersSidebarPane.js */ "./panels/browser_debugger/ObjectEventListenersSidebarPane.js");
/* harmony import */var _XHRBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./XHRBreakpointsSidebarPane.js */ "./panels/browser_debugger/XHRBreakpointsSidebarPane.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





 //# sourceMappingURL=browser_debugger.js.map


}),

}]);