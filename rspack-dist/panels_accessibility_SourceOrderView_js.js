"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_SourceOrderView_js"], {
"./panels/accessibility/SourceOrderView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SourceOrderPane: function() { return SourceOrderPane; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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





var UIStrings = {
    /**
     * @description Name of a tool which allows the developer to view the contents of the page in the
     * 'source order' (the order in which the HTML elements show up in the source code). In the
     * Accessibility panel.
     */ sourceOrderViewer: 'Source Order Viewer',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has no child elements
     */ noSourceOrderInformation: 'No source order information available',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has many child elements
     */ thereMayBeADelayInDisplaying: 'There may be a delay in displaying source order for elements with many children',
    /**
     * @description Checkbox label in Source Order Viewer of the Accessibility panel. Source order
     * means the order in which the HTML elements show up in the source code.
     */ showSourceOrder: 'Show source order'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/accessibility/SourceOrderView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var MAX_CHILD_ELEMENTS_THRESHOLD = 300;
var SourceOrderPane = /*#__PURE__*/ function(AccessibilitySubPane) {
    "use strict";
    _inherits(SourceOrderPane, AccessibilitySubPane);
    var _super = _create_super(SourceOrderPane);
    function SourceOrderPane() {
        _class_call_check(this, SourceOrderPane);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.sourceOrderViewer));
        _define_property(_assert_this_initialized(_this), "noNodeInfo", void 0);
        _define_property(_assert_this_initialized(_this), "warning", void 0);
        _define_property(_assert_this_initialized(_this), "checked", void 0);
        _define_property(_assert_this_initialized(_this), "checkboxLabel", void 0);
        _define_property(_assert_this_initialized(_this), "checkboxElement", void 0);
        _define_property(_assert_this_initialized(_this), "overlayModel", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('source-order-viewer')));
        _this.noNodeInfo = _this.createInfo(i18nString(UIStrings.noSourceOrderInformation));
        _this.warning = _this.createInfo(i18nString(UIStrings.thereMayBeADelayInDisplaying));
        _this.warning.id = 'source-order-warning';
        _this.checked = false;
        _this.checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.CheckboxLabel.create(/* title */ i18nString(UIStrings.showSourceOrder), /* checked */ false);
        _this.checkboxElement = _this.checkboxLabel.checkboxElement;
        _this.checkboxLabel.classList.add('source-order-checkbox');
        _this.checkboxLabel.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toggle().track({
            click: true
        })));
        _this.checkboxElement.addEventListener('click', _this.checkboxClicked.bind(_assert_this_initialized(_this)), false);
        _this.element.appendChild(_this.checkboxLabel);
        _this.nodeInternal = null;
        _this.overlayModel = null;
        return _this;
    }
    _create_class(SourceOrderPane, [
        {
            key: "setNodeAsync",
            value: function setNodeAsync(node) {
                var _this = this;
                var _this1 = this, _superprop_get_setNode = function() {
                    return _get(_get_prototype_of(SourceOrderPane.prototype), "setNode", _this);
                };
                return _async_to_generator(function() {
                    var foundSourceOrder, childCount, children;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this1.checkboxLabel.classList.contains('hidden')) {
                                    _this1.checked = _this1.checkboxElement.checked;
                                }
                                _this1.checkboxElement.checked = false;
                                _this1.checkboxClicked();
                                _superprop_get_setNode().call(_this1, node);
                                if (!_this1.nodeInternal) {
                                    _this1.overlayModel = null;
                                    return [
                                        2
                                    ];
                                }
                                foundSourceOrder = false;
                                childCount = _this1.nodeInternal.childNodeCount();
                                if (!(childCount > 0)) return [
                                    3,
                                    3
                                ];
                                if (!!_this1.nodeInternal.children()) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this1.nodeInternal.getSubtree(1, false)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                children = _this1.nodeInternal.children();
                                foundSourceOrder = children.some(function(child) {
                                    return child.nodeType() === Node.ELEMENT_NODE;
                                });
                                _state.label = 3;
                            case 3:
                                _this1.noNodeInfo.classList.toggle('hidden', foundSourceOrder);
                                _this1.warning.classList.toggle('hidden', childCount < MAX_CHILD_ELEMENTS_THRESHOLD);
                                _this1.checkboxLabel.classList.toggle('hidden', !foundSourceOrder);
                                if (foundSourceOrder) {
                                    _this1.overlayModel = _this1.nodeInternal.domModel().overlayModel();
                                    _this1.checkboxElement.checked = _this1.checked;
                                    _this1.checkboxClicked();
                                } else {
                                    _this1.overlayModel = null;
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "checkboxClicked",
            value: function checkboxClicked() {
                if (!this.nodeInternal || !this.overlayModel) {
                    return;
                }
                if (this.checkboxElement.checked) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.SourceOrderViewActivated);
                    this.overlayModel.highlightSourceOrderInOverlay(this.nodeInternal);
                } else {
                    this.overlayModel.hideSourceOrderInOverlay();
                }
            }
        }
    ]);
    return SourceOrderPane;
} //# sourceMappingURL=SourceOrderView.js.map
(_AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__.AccessibilitySubPane);


}),

}]);