"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_AXBreadcrumbsPane_js"], {
"./panels/accessibility/AXBreadcrumbsPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AXBreadcrumb: function() { return AXBreadcrumb; },
  AXBreadcrumbsPane: function() { return AXBreadcrumbsPane; },
  RoleStyles: function() { return RoleStyles; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/panel_feedback/panel_feedback.js */ "./ui/components/panel_feedback/panel_feedback.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
/* harmony import */var _axBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./axBreadcrumbs.css.js */ "./panels/accessibility/axBreadcrumbs.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
     *@description Text in AXBreadcrumbs Pane of the Accessibility panel
     */ accessibilityTree: 'Accessibility Tree',
    /**
     *@description Text to scroll the displayed content into view
     */ scrollIntoView: 'Scroll into view',
    /**
     *@description Ignored node element text content in AXBreadcrumbs Pane of the Accessibility panel
     */ ignored: 'Ignored',
    /**
     *@description Name for experimental tree toggle.
     */ fullTreeExperimentName: 'Enable full-page accessibility tree',
    /**
     *@description Description text for experimental tree toggle.
     */ fullTreeExperimentDescription: 'The accessibility tree moved to the top right corner of the DOM tree.',
    /**
     *@description Message saying that DevTools must be restarted before the experiment is enabled.
     */ reloadRequired: 'Reload required before the change takes effect.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/accessibility/AXBreadcrumbsPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var _legacyTreeDisabled = /*#__PURE__*/ new WeakMap();
var AXBreadcrumbsPane = /*#__PURE__*/ function(AccessibilitySubPane) {
    "use strict";
    _inherits(AXBreadcrumbsPane, AccessibilitySubPane);
    var _super = _create_super(AXBreadcrumbsPane);
    function AXBreadcrumbsPane(axSidebarView) {
        _class_call_check(this, AXBreadcrumbsPane);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.accessibilityTree));
        _define_property(_assert_this_initialized(_this), "axSidebarView", void 0);
        _define_property(_assert_this_initialized(_this), "preselectedBreadcrumb", void 0);
        _define_property(_assert_this_initialized(_this), "inspectedNodeBreadcrumb", void 0);
        _define_property(_assert_this_initialized(_this), "collapsingBreadcrumbId", void 0);
        _define_property(_assert_this_initialized(_this), "hoveredBreadcrumb", void 0);
        _define_property(_assert_this_initialized(_this), "rootElement", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _legacyTreeDisabled, {
            writable: true,
            value: false
        });
        _this.element.classList.add('ax-subpane');
        _this.element.tabIndex = -1;
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('accessibility-tree')));
        _this.axSidebarView = axSidebarView;
        _this.preselectedBreadcrumb = null;
        _this.inspectedNodeBreadcrumb = null;
        _this.collapsingBreadcrumbId = -1;
        _this.rootElement = _this.element.createChild('div', 'ax-breadcrumbs');
        _this.hoveredBreadcrumb = null;
        var previewToggle = new _ui_components_panel_feedback_panel_feedback_js__WEBPACK_IMPORTED_MODULE_5__.PreviewToggle.PreviewToggle();
        previewToggle.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toggle('full-accessibility-tree')));
        var name = i18nString(UIStrings.fullTreeExperimentName);
        var experiment = "full-accessibility-tree" /* Root.Runtime.ExperimentName.FULL_ACCESSIBILITY_TREE */ ;
        var onChangeCallback = function(checked) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.experimentChanged(experiment, checked);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.InspectorView.InspectorView.instance().displayReloadRequiredWarning(i18nString(UIStrings.reloadRequired));
        };
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled(experiment)) {
            _class_private_field_set(_assert_this_initialized(_this), _legacyTreeDisabled, true);
            var feedbackURL = 'https://g.co/devtools/a11y-tree-feedback';
            previewToggle.data = {
                name: name,
                helperText: i18nString(UIStrings.fullTreeExperimentDescription),
                feedbackURL: feedbackURL,
                experiment: experiment,
                onChangeCallback: onChangeCallback
            };
            _this.element.appendChild(previewToggle);
            return _possible_constructor_return(_this);
        }
        previewToggle.data = {
            name: name,
            helperText: null,
            feedbackURL: null,
            experiment: experiment,
            onChangeCallback: onChangeCallback
        };
        _this.element.prepend(previewToggle);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTree(_this.rootElement);
        _this.rootElement.addEventListener('keydown', _this.onKeyDown.bind(_assert_this_initialized(_this)), true);
        _this.rootElement.addEventListener('mousemove', _this.onMouseMove.bind(_assert_this_initialized(_this)), false);
        _this.rootElement.addEventListener('mouseleave', _this.onMouseLeave.bind(_assert_this_initialized(_this)), false);
        _this.rootElement.addEventListener('click', _this.onClick.bind(_assert_this_initialized(_this)), false);
        _this.rootElement.addEventListener('contextmenu', _this.contextMenuEventFired.bind(_assert_this_initialized(_this)), false);
        _this.rootElement.addEventListener('focusout', _this.onFocusOut.bind(_assert_this_initialized(_this)), false);
        return _this;
    }
    _create_class(AXBreadcrumbsPane, [
        {
            key: "focus",
            value: function focus() {
                if (this.inspectedNodeBreadcrumb) {
                    this.inspectedNodeBreadcrumb.nodeElement().focus();
                } else {
                    this.element.focus();
                }
            }
        },
        {
            key: "setAXNode",
            value: function setAXNode(axNode) {
                if (_class_private_field_get(this, _legacyTreeDisabled)) {
                    return;
                }
                var hadFocus = this.element.hasFocus();
                _get(_get_prototype_of(AXBreadcrumbsPane.prototype), "setAXNode", this).call(this, axNode);
                this.rootElement.removeChildren();
                if (!axNode) {
                    return;
                }
                var ancestorChain = [];
                var ancestor = axNode;
                while(ancestor){
                    ancestorChain.push(ancestor);
                    ancestor = ancestor.parentNode();
                }
                ancestorChain.reverse();
                var depth = 0;
                var parent = null;
                this.inspectedNodeBreadcrumb = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ancestorChain[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        ancestor = _step.value;
                        if (ancestor !== axNode && ancestor.ignored() && ancestor.parentNode()) {
                            continue;
                        }
                        var breadcrumb = new AXBreadcrumb(ancestor, depth, ancestor === axNode);
                        if (parent) {
                            parent.appendChild(breadcrumb);
                        } else {
                            this.rootElement.appendChild(breadcrumb.element());
                        }
                        parent = breadcrumb;
                        depth++;
                        this.inspectedNodeBreadcrumb = breadcrumb;
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
                if (this.inspectedNodeBreadcrumb) {
                    this.inspectedNodeBreadcrumb.setPreselected(true, hadFocus);
                }
                this.setPreselectedBreadcrumb(this.inspectedNodeBreadcrumb);
                function append(parentBreadcrumb, axNode, localDepth) {
                    if (axNode.ignored()) {
                        axNode.children().map(function(child) {
                            return append(parentBreadcrumb, child, localDepth);
                        });
                        return;
                    }
                    var childBreadcrumb = new AXBreadcrumb(axNode, localDepth, false);
                    parentBreadcrumb.appendChild(childBreadcrumb);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // In most cases there will be no children here, but there are some special cases.
                        for(var _iterator = axNode.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var child = _step.value;
                            append(childBreadcrumb, child, localDepth + 1);
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
                if (this.inspectedNodeBreadcrumb && !axNode.ignored()) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = axNode.children()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var child = _step1.value;
                            append(this.inspectedNodeBreadcrumb, child, depth);
                            if (child.backendDOMNodeId() === this.collapsingBreadcrumbId) {
                                this.setPreselectedBreadcrumb(this.inspectedNodeBreadcrumb.lastChild());
                            }
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
                this.collapsingBreadcrumbId = -1;
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.setPreselectedBreadcrumb(null);
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                var preselectedBreadcrumb = this.preselectedBreadcrumb;
                if (!preselectedBreadcrumb) {
                    return;
                }
                var keyboardEvent = event;
                if (!keyboardEvent.composedPath().some(function(element) {
                    return element === preselectedBreadcrumb.element();
                })) {
                    return;
                }
                if (keyboardEvent.shiftKey || keyboardEvent.metaKey || keyboardEvent.ctrlKey) {
                    return;
                }
                var handled = false;
                if (keyboardEvent.key === 'ArrowUp' && !keyboardEvent.altKey) {
                    handled = this.preselectPrevious();
                } else if (keyboardEvent.key === 'ArrowDown' && !keyboardEvent.altKey) {
                    handled = this.preselectNext();
                } else if (keyboardEvent.key === 'ArrowLeft' && !keyboardEvent.altKey) {
                    if (preselectedBreadcrumb.hasExpandedChildren()) {
                        this.collapseBreadcrumb(preselectedBreadcrumb);
                    } else {
                        handled = this.preselectParent();
                    }
                } else if (keyboardEvent.key === 'Enter' || keyboardEvent.key === 'ArrowRight' && !keyboardEvent.altKey && preselectedBreadcrumb.axNode().hasOnlyUnloadedChildren()) {
                    handled = this.inspectDOMNode(preselectedBreadcrumb.axNode());
                }
                if (handled) {
                    keyboardEvent.consume(true);
                }
            }
        },
        {
            key: "preselectPrevious",
            value: function preselectPrevious() {
                if (!this.preselectedBreadcrumb) {
                    return false;
                }
                var previousBreadcrumb = this.preselectedBreadcrumb.previousBreadcrumb();
                if (!previousBreadcrumb) {
                    return false;
                }
                this.setPreselectedBreadcrumb(previousBreadcrumb);
                return true;
            }
        },
        {
            key: "preselectNext",
            value: function preselectNext() {
                if (!this.preselectedBreadcrumb) {
                    return false;
                }
                var nextBreadcrumb = this.preselectedBreadcrumb.nextBreadcrumb();
                if (!nextBreadcrumb) {
                    return false;
                }
                this.setPreselectedBreadcrumb(nextBreadcrumb);
                return true;
            }
        },
        {
            key: "preselectParent",
            value: function preselectParent() {
                if (!this.preselectedBreadcrumb) {
                    return false;
                }
                var parentBreadcrumb = this.preselectedBreadcrumb.parentBreadcrumb();
                if (!parentBreadcrumb) {
                    return false;
                }
                this.setPreselectedBreadcrumb(parentBreadcrumb);
                return true;
            }
        },
        {
            key: "setPreselectedBreadcrumb",
            value: function setPreselectedBreadcrumb(breadcrumb) {
                if (breadcrumb === this.preselectedBreadcrumb) {
                    return;
                }
                var hadFocus = this.element.hasFocus();
                if (this.preselectedBreadcrumb) {
                    this.preselectedBreadcrumb.setPreselected(false, hadFocus);
                }
                if (breadcrumb) {
                    this.preselectedBreadcrumb = breadcrumb;
                } else {
                    this.preselectedBreadcrumb = this.inspectedNodeBreadcrumb;
                }
                if (this.preselectedBreadcrumb) {
                    this.preselectedBreadcrumb.setPreselected(true, hadFocus);
                }
                if (!breadcrumb && hadFocus) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                }
            }
        },
        {
            key: "collapseBreadcrumb",
            value: function collapseBreadcrumb(breadcrumb) {
                if (!breadcrumb.parentBreadcrumb()) {
                    return;
                }
                var backendNodeId = breadcrumb.axNode().backendDOMNodeId();
                if (backendNodeId !== null) {
                    this.collapsingBreadcrumbId = backendNodeId;
                }
                var parentBreadcrumb = breadcrumb.parentBreadcrumb();
                if (parentBreadcrumb) {
                    this.inspectDOMNode(parentBreadcrumb.axNode());
                }
            }
        },
        {
            key: "onMouseLeave",
            value: function onMouseLeave(_event) {
                this.setHoveredBreadcrumb(null);
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                var breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
                if (!breadcrumbElement) {
                    this.setHoveredBreadcrumb(null);
                    return;
                }
                var breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
                if (!breadcrumb || !breadcrumb.isDOMNode()) {
                    return;
                }
                this.setHoveredBreadcrumb(breadcrumb);
            }
        },
        {
            key: "onFocusOut",
            value: function onFocusOut(event) {
                if (!this.preselectedBreadcrumb || event.target !== this.preselectedBreadcrumb.nodeElement()) {
                    return;
                }
                this.setPreselectedBreadcrumb(null);
            }
        },
        {
            key: "onClick",
            value: function onClick(event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                var breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
                if (!breadcrumbElement) {
                    this.setHoveredBreadcrumb(null);
                    return;
                }
                var breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
                if (!breadcrumb) {
                    return;
                }
                if (breadcrumb.inspected()) {
                    // This will collapse and preselect/focus the breadcrumb.
                    this.collapseBreadcrumb(breadcrumb);
                    breadcrumb.nodeElement().focus();
                    void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logClick(breadcrumb.expandLoggable, event);
                    return;
                }
                if (!breadcrumb.isDOMNode()) {
                    return;
                }
                this.inspectDOMNode(breadcrumb.axNode());
                void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.logClick(breadcrumb.expandLoggable, event);
            }
        },
        {
            key: "setHoveredBreadcrumb",
            value: function setHoveredBreadcrumb(breadcrumb) {
                if (breadcrumb === this.hoveredBreadcrumb) {
                    return;
                }
                if (this.hoveredBreadcrumb) {
                    this.hoveredBreadcrumb.setHovered(false);
                }
                var node = this.node();
                if (breadcrumb) {
                    breadcrumb.setHovered(true);
                } else if (node && node.id) {
                    // Highlight and scroll into view the currently inspected node.
                    node.domModel().overlayModel().nodeHighlightRequested({
                        nodeId: node.id
                    });
                }
                this.hoveredBreadcrumb = breadcrumb;
            }
        },
        {
            key: "inspectDOMNode",
            value: function inspectDOMNode(axNode) {
                var _this = this;
                if (!axNode.isDOMNode()) {
                    return false;
                }
                var deferredNode = axNode.deferredDOMNode();
                if (deferredNode) {
                    deferredNode.resolve(function(domNode) {
                        _this.axSidebarView.setNode(domNode, true);
                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(domNode, true);
                    });
                }
                return true;
            }
        },
        {
            key: "contextMenuEventFired",
            value: function contextMenuEventFired(event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                var breadcrumbElement = target.enclosingNodeOrSelfWithClass('ax-breadcrumb');
                if (!breadcrumbElement) {
                    return;
                }
                var breadcrumb = elementsToAXBreadcrumb.get(breadcrumbElement);
                if (!breadcrumb) {
                    return;
                }
                var axNode = breadcrumb.axNode();
                if (!axNode.isDOMNode() || !axNode.deferredDOMNode()) {
                    return;
                }
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ContextMenu.ContextMenu(event);
                contextMenu.viewSection().appendItem(i18nString(UIStrings.scrollIntoView), function() {
                    var deferredNode = axNode.deferredDOMNode();
                    if (!deferredNode) {
                        return;
                    }
                    void deferredNode.resolvePromise().then(function(domNode) {
                        if (!domNode) {
                            return;
                        }
                        void domNode.scrollIntoView();
                    });
                }, {
                    jslogContext: 'scroll-into-view'
                });
                var deferredNode = axNode.deferredDOMNode();
                if (deferredNode) {
                    contextMenu.appendApplicableItems(deferredNode);
                }
                void contextMenu.show();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AXBreadcrumbsPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _axBreadcrumbs_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ]);
    return AXBreadcrumbsPane;
}(_AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__.AccessibilitySubPane);
var elementsToAXBreadcrumb = new WeakMap();
var AXBreadcrumb = /*#__PURE__*/ function() {
    "use strict";
    function AXBreadcrumb(axNode, depth, inspected) {
        _class_call_check(this, AXBreadcrumb);
        _define_property(this, "axNodeInternal", void 0);
        _define_property(this, "elementInternal", void 0);
        _define_property(this, "nodeElementInternal", void 0);
        _define_property(this, "nodeWrapper", void 0);
        _define_property(this, "selectionElement", void 0);
        _define_property(this, "childrenGroupElement", void 0);
        _define_property(this, "children", void 0);
        _define_property(this, "hovered", void 0);
        _define_property(this, "preselectedInternal", void 0);
        _define_property(this, "parent", void 0);
        _define_property(this, "inspectedInternal", void 0);
        _define_property(this, "expandLoggable", {});
        this.axNodeInternal = axNode;
        this.elementInternal = document.createElement('div');
        this.elementInternal.classList.add('ax-breadcrumb');
        this.elementInternal.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.treeItem().track({
            click: true,
            keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|Enter'
        })));
        elementsToAXBreadcrumb.set(this.elementInternal, this);
        this.nodeElementInternal = document.createElement('div');
        this.nodeElementInternal.classList.add('ax-node');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsTreeitem(this.nodeElementInternal);
        this.nodeElementInternal.tabIndex = -1;
        this.elementInternal.appendChild(this.nodeElementInternal);
        this.nodeWrapper = document.createElement('div');
        this.nodeWrapper.classList.add('wrapper');
        this.nodeElementInternal.appendChild(this.nodeWrapper);
        this.selectionElement = document.createElement('div');
        this.selectionElement.classList.add('selection');
        this.selectionElement.classList.add('fill');
        this.nodeElementInternal.appendChild(this.selectionElement);
        this.childrenGroupElement = document.createElement('div');
        this.childrenGroupElement.classList.add('children');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsGroup(this.childrenGroupElement);
        this.elementInternal.appendChild(this.childrenGroupElement);
        this.children = [];
        this.hovered = false;
        this.preselectedInternal = false;
        this.parent = null;
        this.inspectedInternal = inspected;
        this.nodeElementInternal.classList.toggle('inspected', inspected);
        this.nodeElementInternal.style.paddingLeft = 16 * depth + 4 + 'px';
        if (this.axNodeInternal.ignored()) {
            this.appendIgnoredNodeElement();
        } else {
            this.appendRoleElement(this.axNodeInternal.role());
            var axNodeName = this.axNodeInternal.name();
            if (axNodeName && axNodeName.value) {
                this.nodeWrapper.createChild('span', 'separator').textContent = '\xA0';
                this.appendNameElement(axNodeName.value);
            }
        }
        if (!this.axNodeInternal.ignored() && this.axNodeInternal.hasOnlyUnloadedChildren()) {
            this.nodeElementInternal.classList.add('children-unloaded');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.nodeElementInternal, false);
            _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.registerLoggable(this.expandLoggable, "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand()), this.elementInternal);
        }
        if (!this.axNodeInternal.isDOMNode()) {
            this.nodeElementInternal.classList.add('no-dom-node');
        }
    }
    _create_class(AXBreadcrumb, [
        {
            key: "element",
            value: function element() {
                return this.elementInternal;
            }
        },
        {
            key: "nodeElement",
            value: function nodeElement() {
                return this.nodeElementInternal;
            }
        },
        {
            key: "appendChild",
            value: function appendChild(breadcrumb) {
                this.children.push(breadcrumb);
                breadcrumb.setParent(this);
                this.nodeElementInternal.classList.add('parent');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setExpanded(this.nodeElementInternal, true);
                this.childrenGroupElement.appendChild(breadcrumb.element());
                _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.registerLoggable(this.expandLoggable, "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand()), this.elementInternal);
            }
        },
        {
            key: "hasExpandedChildren",
            value: function hasExpandedChildren() {
                return this.children.length;
            }
        },
        {
            key: "setParent",
            value: function setParent(breadcrumb) {
                this.parent = breadcrumb;
            }
        },
        {
            key: "preselected",
            value: function preselected() {
                return this.preselectedInternal;
            }
        },
        {
            key: "setPreselected",
            value: function setPreselected(preselected, selectedByUser) {
                if (this.preselectedInternal === preselected) {
                    return;
                }
                this.preselectedInternal = preselected;
                this.nodeElementInternal.classList.toggle('preselected', preselected);
                if (preselected) {
                    this.nodeElementInternal.tabIndex = 0;
                } else {
                    this.nodeElementInternal.tabIndex = -1;
                }
                if (this.preselectedInternal) {
                    if (selectedByUser) {
                        this.nodeElementInternal.focus();
                    }
                    if (!this.inspectedInternal) {
                        this.axNodeInternal.highlightDOMNode();
                    } else {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                    }
                }
            }
        },
        {
            key: "setHovered",
            value: function setHovered(hovered) {
                if (this.hovered === hovered) {
                    return;
                }
                this.hovered = hovered;
                this.nodeElementInternal.classList.toggle('hovered', hovered);
                if (this.hovered) {
                    this.nodeElementInternal.classList.toggle('hovered', true);
                    this.axNodeInternal.highlightDOMNode();
                }
            }
        },
        {
            key: "axNode",
            value: function axNode() {
                return this.axNodeInternal;
            }
        },
        {
            key: "inspected",
            value: function inspected() {
                return this.inspectedInternal;
            }
        },
        {
            key: "isDOMNode",
            value: function isDOMNode() {
                return this.axNodeInternal.isDOMNode();
            }
        },
        {
            key: "nextBreadcrumb",
            value: function nextBreadcrumb() {
                if (this.children.length) {
                    return this.children[0];
                }
                var nextSibling = this.element().nextSibling;
                if (nextSibling) {
                    return elementsToAXBreadcrumb.get(nextSibling) || null;
                }
                return null;
            }
        },
        {
            key: "previousBreadcrumb",
            value: function previousBreadcrumb() {
                var previousSibling = this.element().previousSibling;
                if (previousSibling) {
                    return elementsToAXBreadcrumb.get(previousSibling) || null;
                }
                return this.parent;
            }
        },
        {
            key: "parentBreadcrumb",
            value: function parentBreadcrumb() {
                return this.parent;
            }
        },
        {
            key: "lastChild",
            value: function lastChild() {
                return this.children[this.children.length - 1];
            }
        },
        {
            key: "appendNameElement",
            value: function appendNameElement(name) {
                var nameElement = document.createElement('span');
                nameElement.textContent = '"' + name + '"';
                nameElement.classList.add('ax-readable-string');
                this.nodeWrapper.appendChild(nameElement);
            }
        },
        {
            key: "appendRoleElement",
            value: function appendRoleElement(role) {
                if (!role) {
                    return;
                }
                var roleElement = document.createElement('span');
                roleElement.classList.add('monospace');
                roleElement.classList.add(RoleStyles[role.type]);
                roleElement.setTextContentTruncatedIfNeeded(role.value || '');
                this.nodeWrapper.appendChild(roleElement);
            }
        },
        {
            key: "appendIgnoredNodeElement",
            value: function appendIgnoredNodeElement() {
                var ignoredNodeElement = document.createElement('span');
                ignoredNodeElement.classList.add('monospace');
                ignoredNodeElement.textContent = i18nString(UIStrings.ignored);
                ignoredNodeElement.classList.add('ax-breadcrumbs-ignored-node');
                this.nodeWrapper.appendChild(ignoredNodeElement);
            }
        }
    ]);
    return AXBreadcrumb;
}();
var RoleStyles = {
    internalRole: 'ax-internal-role',
    role: 'ax-role'
}; //# sourceMappingURL=AXBreadcrumbsPane.js.map


}),
"./panels/accessibility/axBreadcrumbs.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.ax-breadcrumbs-ignored-node {\n  font-style: italic;\n  opacity: 70%;\n}\n\n.ax-breadcrumbs {\n  padding-top: 1px;\n  margin: 0;\n  position: relative;\n}\n\n.ax-breadcrumbs .ax-node {\n  align-items: center;\n  margin-top: 1px;\n  min-height: 16px;\n  overflow-x: hidden;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 1px;\n  position: relative;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ax-breadcrumbs .ax-node span {\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ax-breadcrumbs .ax-node .wrapper {\n  padding-left: 12px;\n  overflow-x: hidden;\n}\n\n.ax-breadcrumbs .ax-node::before {\n  mask-image: var(--image-file-chevron-right);\n  mask-repeat: no-repeat;\n  background-color: var(--icon-default);\n  transform: scale(0.7);\n  content: "";\n  text-shadow: none;\n  margin-left: -4px;\n  margin-top: -2px;\n  height: 16px;\n  width: 16px;\n  position: absolute;\n  display: inline-block;\n}\n\n.ax-breadcrumbs .ax-node:not(.parent):not(.children-unloaded)::before {\n  background-color: transparent;\n}\n\n.ax-breadcrumbs .ax-node.parent::before {\n  mask-image: var(--image-file-chevron-down);\n}\n\n.ax-breadcrumbs .ax-node.no-dom-node {\n  opacity: 70%;\n}\n\n.ax-breadcrumbs .ax-node.children-unloaded::before {\n  mask-position: 0 1px;\n  width: 13px;\n  opacity: 40%;\n}\n\n.ax-breadcrumbs .ax-node .selection {\n  display: none;\n  z-index: -1;\n}\n\n.ax-breadcrumbs .ax-node.inspected .selection {\n  display: block;\n  background-color: var(--sys-color-neutral-container);\n}\n\n.ax-breadcrumbs .ax-node.inspected:focus .selection {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.ax-breadcrumbs .ax-node.parent.inspected:focus::before {\n  background-color: var(--sys-color-on-tonal-container);\n}\n\n.ax-breadcrumbs .ax-node.inspected:focus {\n  background-color: var(--sys-color-tonal-container);\n  color: var(--sys-color-on-tonal-container);\n}\n\n.ax-breadcrumbs .ax-node:not(.inspected):hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.ax-breadcrumbs .ax-node:not(.inspected):focus {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.ax-breadcrumbs .ax-node.inspected:focus * {\n  color: inherit;\n}\n\n.ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,\n.ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection {\n  display: block;\n  left: 2px;\n  right: 2px;\n  background-color: var(--sys-color-state-hover-on-subtle);\n  border-radius: 5px;\n}\n\n.ax-breadcrumbs .ax-node.preselected:not(.inspected):focus .selection {\n  border: 1px solid var(--sys-color-primary);\n}\n\n@media (forced-colors: active) {\n  .ax-value-source-unused,\n  .ax-breadcrumbs .ax-node.children-unloaded::before {\n    opacity: 100%;\n  }\n\n  .ax-breadcrumbs .ax-node.parent::before,\n  .ax-breadcrumbs .ax-node.children-unloaded::before {\n    forced-color-adjust: none;\n    background-color: ButtonText;\n  }\n\n  .ax-breadcrumbs .ax-node.parent.inspected::before,\n  .ax-breadcrumbs .ax-node.parent.inspected:focus::before {\n    background-color: HighlightText;\n  }\n\n  .ax-breadcrumbs .ax-node.inspected .selection {\n    forced-color-adjust: none;\n    background: Highlight !important; /* stylelint-disable-line declaration-no-important */\n  }\n\n  .ax-breadcrumbs .ax-node.inspected .wrapper {\n    forced-color-adjust: none;\n    color: HighlightText;\n  }\n\n  .ax-breadcrumbs .ax-node.preselected:not(.inspected) .selection,\n  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .selection,\n  .ax-breadcrumbs .ax-node.hovered:not(.inspected) .wrapper,\n  .ax-breadcrumbs .ax-node:focus-visible:not(.inspected) .wrapper {\n    forced-color-adjust: none;\n    background-color: Highlight;\n    color: HighlightText;\n    border-radius: 0;\n  }\n\n  .ax-breadcrumbs .ax-node.parent.hovered:not(.inspected)::before,\n  .ax-breadcrumbs .ax-node.parent:focus-visible:not(.inspected)::before,\n  .ax-breadcrumbs .ax-node.children-unloaded:focus-visible:not(.inspected)::before,\n  .ax-breadcrumbs .ax-node.hovered:not(.inspected).children-unloaded::before {\n    background-color: HighlightText;\n  }\n}\n\n/*# sourceURL=axBreadcrumbs.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);