"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_PreloadingTreeElement_js"], {
"./panels/application/PreloadingTreeElement.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PreloadingRuleSetTreeElement: function() { return PreloadingRuleSetTreeElement; },
  PreloadingSummaryTreeElement: function() { return PreloadingSummaryTreeElement; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__]);
_preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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




var UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ speculativeLoads: 'Speculative loads',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ rules: 'Rules',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ speculations: 'Speculations'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/PreloadingTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _model = /*#__PURE__*/ new WeakMap(), _viewConstructor = /*#__PURE__*/ new WeakMap(), _path = /*#__PURE__*/ new WeakMap(), _selectedInternal = /*#__PURE__*/ new WeakMap();
var PreloadingTreeElementBase = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(PreloadingTreeElementBase, ApplicationPanelTreeElement);
    var _super = _create_super(PreloadingTreeElementBase);
    function PreloadingTreeElementBase(panel, viewConstructor, path, title) {
        _class_call_check(this, PreloadingTreeElementBase);
        var _this;
        _this = _super.call(this, panel, title, false, 'speculative-loads');
        _class_private_field_init(_assert_this_initialized(_this), _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewConstructor, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _path, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedInternal, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _viewConstructor, viewConstructor);
        _class_private_field_set(_assert_this_initialized(_this), _path, path);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        _this.setLeadingIcons([
            icon
        ]);
        _class_private_field_set(_assert_this_initialized(_this), _selectedInternal, false);
        return _this;
    }
    _create_class(PreloadingTreeElementBase, [
        {
            key: "itemURL",
            get: function get() {
                return _class_private_field_get(this, _path);
            }
        },
        {
            key: "initialize",
            value: function initialize(model) {
                _class_private_field_set(this, _model, model);
                // Show the view if the model was initialized after selection.
                if (_class_private_field_get(this, _selectedInternal) && !this.view) {
                    this.onselect(false);
                }
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(PreloadingTreeElementBase.prototype), "onselect", this).call(this, selectedByUser);
                _class_private_field_set(this, _selectedInternal, true);
                if (!_class_private_field_get(this, _model)) {
                    return false;
                }
                if (!this.view) {
                    this.view = new (_class_private_field_get(this, _viewConstructor))(_class_private_field_get(this, _model));
                }
                this.showView(this.view);
                return false;
            }
        }
    ]);
    return PreloadingTreeElementBase;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.ApplicationPanelTreeElement);
var _model1 = /*#__PURE__*/ new WeakMap(), _view = /*#__PURE__*/ new WeakMap(), _selectedInternal1 = /*#__PURE__*/ new WeakMap(), _ruleSet = /*#__PURE__*/ new WeakMap(), _attempt = /*#__PURE__*/ new WeakMap();
var PreloadingSummaryTreeElement = /*#__PURE__*/ function(ExpandableApplicationPanelTreeElement) {
    "use strict";
    _inherits(PreloadingSummaryTreeElement, ExpandableApplicationPanelTreeElement);
    var _super = _create_super(PreloadingSummaryTreeElement);
    function PreloadingSummaryTreeElement(panel) {
        _class_call_check(this, PreloadingSummaryTreeElement);
        var _this;
        _this = _super.call(this, panel, i18nString(UIStrings.speculativeLoads), 'preloading');
        _class_private_field_init(_assert_this_initialized(_this), _model1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _view, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedInternal1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _ruleSet, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _attempt, {
            writable: true,
            value: null
        });
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create('arrow-up-down');
        _this.setLeadingIcons([
            icon
        ]);
        _class_private_field_set(_assert_this_initialized(_this), _selectedInternal1, false);
        return _this;
    }
    _create_class(PreloadingSummaryTreeElement, [
        {
            // Note that
            //
            // - TreeElement.ensureSelection assumes TreeElement.treeOutline initalized.
            // - TreeElement.treeOutline is propagated in TreeElement.appendChild.
            //
            // So, `this.constructChildren` should be called just after `parent.appendChild(this)`
            // to enrich children with TreeElement.selectionElementInternal correctly.
            key: "constructChildren",
            value: function constructChildren(panel) {
                _class_private_field_set(this, _ruleSet, new PreloadingRuleSetTreeElement(panel));
                _class_private_field_set(this, _attempt, new PreloadingAttemptTreeElement(panel));
                this.appendChild(_class_private_field_get(this, _ruleSet));
                this.appendChild(_class_private_field_get(this, _attempt));
            }
        },
        {
            key: "initialize",
            value: function initialize(model) {
                if (_class_private_field_get(this, _ruleSet) === null || _class_private_field_get(this, _attempt) === null) {
                    throw new Error('unreachable');
                }
                _class_private_field_set(this, _model1, model);
                _class_private_field_get(this, _ruleSet).initialize(model);
                _class_private_field_get(this, _attempt).initialize(model);
                // Show the view if the model was initialized after selection.
                if (_class_private_field_get(this, _selectedInternal1) && !_class_private_field_get(this, _view)) {
                    this.onselect(false);
                }
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(PreloadingSummaryTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                _class_private_field_set(this, _selectedInternal1, true);
                if (!_class_private_field_get(this, _model1)) {
                    return false;
                }
                if (!_class_private_field_get(this, _view)) {
                    _class_private_field_set(this, _view, new _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingSummaryView(_class_private_field_get(this, _model1)));
                }
                this.showView(_class_private_field_get(this, _view));
                return false;
            }
        },
        {
            key: "expandAndRevealRuleSet",
            value: function expandAndRevealRuleSet(revealInfo) {
                if (_class_private_field_get(this, _ruleSet) === null) {
                    throw new Error('unreachable');
                }
                this.expand();
                _class_private_field_get(this, _ruleSet).revealRuleSet(revealInfo);
            }
        },
        {
            key: "expandAndRevealAttempts",
            value: function expandAndRevealAttempts(filter) {
                if (_class_private_field_get(this, _attempt) === null) {
                    throw new Error('unreachable');
                }
                this.expand();
                _class_private_field_get(this, _attempt).revealAttempts(filter);
            }
        }
    ]);
    return PreloadingSummaryTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_2__.ExpandableApplicationPanelTreeElement);
var PreloadingRuleSetTreeElement = /*#__PURE__*/ function(PreloadingTreeElementBase) {
    "use strict";
    _inherits(PreloadingRuleSetTreeElement, PreloadingTreeElementBase);
    var _super = _create_super(PreloadingRuleSetTreeElement);
    function PreloadingRuleSetTreeElement(panel) {
        _class_call_check(this, PreloadingRuleSetTreeElement);
        return _super.call(this, panel, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingRuleSetView, 'preloading://rule-set', i18nString(UIStrings.rules));
    }
    _create_class(PreloadingRuleSetTreeElement, [
        {
            key: "revealRuleSet",
            value: function revealRuleSet(revealInfo) {
                var _this_view;
                this.select();
                if (this.view === undefined) {
                    return;
                }
                (_this_view = this.view) === null || _this_view === void 0 ? void 0 : _this_view.revealRuleSet(revealInfo);
            }
        }
    ]);
    return PreloadingRuleSetTreeElement;
}(PreloadingTreeElementBase);
var PreloadingAttemptTreeElement = /*#__PURE__*/ function(PreloadingTreeElementBase) {
    "use strict";
    _inherits(PreloadingAttemptTreeElement, PreloadingTreeElementBase);
    var _super = _create_super(PreloadingAttemptTreeElement);
    function PreloadingAttemptTreeElement(panel) {
        _class_call_check(this, PreloadingAttemptTreeElement);
        return _super.call(this, panel, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_3__.PreloadingAttemptView, 'preloading://attempt', i18nString(UIStrings.speculations));
    }
    _create_class(PreloadingAttemptTreeElement, [
        {
            key: "revealAttempts",
            value: function revealAttempts(filter) {
                var _this_view;
                this.select();
                (_this_view = this.view) === null || _this_view === void 0 ? void 0 : _this_view.setFilter(filter);
            }
        }
    ]);
    return PreloadingAttemptTreeElement;
} //# sourceMappingURL=PreloadingTreeElement.js.map
(PreloadingTreeElementBase);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);