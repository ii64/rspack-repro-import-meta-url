"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_AccessibilityNodeView_js"], {
"./panels/accessibility/AccessibilityNodeView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AXNodeIgnoredReasonTreeElement: function() { return AXNodeIgnoredReasonTreeElement; },
  AXNodePropertyTreeElement: function() { return AXNodePropertyTreeElement; },
  AXNodePropertyTreePropertyElement: function() { return AXNodePropertyTreePropertyElement; },
  AXNodeSubPane: function() { return AXNodeSubPane; },
  AXRelatedNodeElement: function() { return AXRelatedNodeElement; },
  AXRelatedNodeSourceTreeElement: function() { return AXRelatedNodeSourceTreeElement; },
  AXValueSourceTreeElement: function() { return AXValueSourceTreeElement; },
  StringProperties: function() { return StringProperties; },
  TypeStyles: function() { return TypeStyles; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */var _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccessibilityStrings.js */ "./panels/accessibility/AccessibilityStrings.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
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
     *@description Text in Accessibility Node View of the Accessibility panel
     */ computedProperties: 'Computed Properties',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ noAccessibilityNode: 'No accessibility node',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ accessibilityNodeNotExposed: 'Accessibility node not exposed',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ invalidSource: 'Invalid source.',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ notSpecified: 'Not specified',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ noNodeWithThisId: 'No node with this ID.',
    /**
     *@description Text which appears in the Accessibility Node View of the Accessibility panel when an element is covered by a modal/popup window
     */ elementIsHiddenBy: 'Element is hidden by active modal dialog:\xA0',
    /**
     *@description Text which appears in the Accessibility Node View of the Accessibility panel when an element is hidden by another accessibility tree.
     */ elementIsHiddenByChildTree: 'Element is hidden by child tree:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ ancestorChildrenAreAll: 'Ancestor\'s children are all presentational:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
    @example {aria-hidden} PH1
     */ elementIsPlaceholder: 'Element is {PH1}.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     *@example {aria-hidden} PH1
     *@example {true} PH2
     */ placeholderIsPlaceholderOnAncestor: '{PH1} is {PH2} on ancestor:\xA0',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */ elementHasEmptyAltText: 'Element has empty alt text.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ noTextContent: 'No text content.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementIsInert: 'Element is `inert`.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementIsInAnInertSubTree: 'Element is in an `inert` subtree from\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementsInheritsPresentational: 'Element inherits presentational role from\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ partOfLabelElement: 'Part of label element:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ labelFor: 'Label for\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementIsNotRendered: 'Element is not rendered.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementIsNotVisible: 'Element is not visible.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel. Indicates the
     *ARIA role for this element, which will always have the format 'role=', but with different roles
     *(which are not translated). https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
     *@example {role=link} PH1
     */ elementHasPlaceholder: 'Element has {PH1}.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */ elementIsPresentational: 'Element is presentational.',
    /**
     * @description Reason element in Accessibility Node View of the Accessibility pane. Here
     * 'interesting' is from the perspective of the accessibility engine in Chrome. A non-interesting
     * element doesn't have any special accessibility considerations
     */ elementNotInteresting: 'Element not interesting for accessibility.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/accessibility/AccessibilityNodeView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var AXNodeSubPane = /*#__PURE__*/ function(AccessibilitySubPane) {
    "use strict";
    _inherits(AXNodeSubPane, AccessibilitySubPane);
    var _super = _create_super(AXNodeSubPane);
    function AXNodeSubPane() {
        _class_call_check(this, AXNodeSubPane);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.computedProperties));
        _define_property(_assert_this_initialized(_this), "axNode", void 0);
        _define_property(_assert_this_initialized(_this), "noNodeInfo", void 0);
        _define_property(_assert_this_initialized(_this), "ignoredInfo", void 0);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "ignoredReasonsTree", void 0);
        _this.axNode = null;
        _this.contentElement.classList.add('ax-subpane');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('computed-properties')));
        _this.noNodeInfo = _this.createInfo(i18nString(UIStrings.noAccessibilityNode));
        _this.ignoredInfo = _this.createInfo(i18nString(UIStrings.accessibilityNodeNotExposed), 'ax-ignored-info hidden');
        _this.treeOutline = _this.createTreeOutline();
        _this.ignoredReasonsTree = _this.createTreeOutline();
        _this.element.classList.add('accessibility-computed');
        _this.treeOutline.setFocusable(true);
        return _this;
    }
    _create_class(AXNodeSubPane, [
        {
            key: "setAXNode",
            value: function setAXNode(axNode) {
                if (this.axNode === axNode) {
                    return;
                }
                this.axNode = axNode;
                var treeOutline = this.treeOutline;
                treeOutline.removeChildren();
                var ignoredReasons = this.ignoredReasonsTree;
                ignoredReasons.removeChildren();
                if (!axNode) {
                    treeOutline.element.classList.add('hidden');
                    this.ignoredInfo.classList.add('hidden');
                    ignoredReasons.element.classList.add('hidden');
                    this.noNodeInfo.classList.remove('hidden');
                    this.element.classList.add('ax-ignored-node-pane');
                    return;
                }
                if (axNode.ignored()) {
                    var addIgnoredReason = function addIgnoredReason(property) {
                        ignoredReasons.appendChild(new AXNodeIgnoredReasonTreeElement(property, axNode));
                    };
                    this.noNodeInfo.classList.add('hidden');
                    treeOutline.element.classList.add('hidden');
                    this.element.classList.add('ax-ignored-node-pane');
                    this.ignoredInfo.classList.remove('hidden');
                    ignoredReasons.element.classList.remove('hidden');
                    var ignoredReasonsArray = axNode.ignoredReasons();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = ignoredReasonsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var reason = _step.value;
                            addIgnoredReason(reason);
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
                    if (!ignoredReasons.firstChild()) {
                        ignoredReasons.element.classList.add('hidden');
                    }
                    return;
                }
                this.element.classList.remove('ax-ignored-node-pane');
                this.ignoredInfo.classList.add('hidden');
                ignoredReasons.element.classList.add('hidden');
                this.noNodeInfo.classList.add('hidden');
                treeOutline.element.classList.remove('hidden');
                function addProperty(property) {
                    treeOutline.appendChild(new AXNodePropertyTreePropertyElement(property, axNode));
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = axNode.coreProperties()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var property = _step1.value;
                        addProperty(property);
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
                var role = axNode.role();
                if (role) {
                    var roleProperty = {
                        name: "role" /* SDK.AccessibilityModel.CoreAxPropertyName.Role */ ,
                        value: role
                    };
                    addProperty(roleProperty);
                }
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = axNode.properties()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var property1 = _step2.value;
                        addProperty(property1);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var firstNode = treeOutline.firstChild();
                if (firstNode) {
                    firstNode.select(/* omitFocus= */ true, /* selectedByUser= */ false);
                }
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                _get(_get_prototype_of(AXNodeSubPane.prototype), "setNode", this).call(this, node);
                this.axNode = null;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AXNodeSubPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return AXNodeSubPane;
}(_AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_7__.AccessibilitySubPane);
var AXNodePropertyTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(AXNodePropertyTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(AXNodePropertyTreeElement);
    function AXNodePropertyTreeElement(axNode) {
        _class_call_check(this, AXNodePropertyTreeElement);
        var _this;
        // Pass an empty title, the title gets made later in onattach.
        _this = _super.call(this, '');
        _define_property(_assert_this_initialized(_this), "axNode", void 0);
        _this.axNode = axNode;
        return _this;
    }
    _create_class(AXNodePropertyTreeElement, [
        {
            key: "appendNameElement",
            value: function appendNameElement(name) {
                var nameElement = document.createElement('span');
                if (name in _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXAttributes) {
                    // @ts-ignore TS can't cast name here but we checked it's valid.
                    var attribute = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXAttributes[name];
                    nameElement.textContent = attribute.name();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(nameElement, attribute.description());
                    nameElement.classList.add('ax-readable-name');
                } else {
                    nameElement.textContent = name;
                    nameElement.classList.add('ax-name');
                    nameElement.classList.add('monospace');
                }
                this.listItemElement.appendChild(nameElement);
            }
        },
        {
            key: "appendValueElement",
            value: function appendValueElement(value) {
                if (value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */  || value.type === "node" /* Protocol.Accessibility.AXValueType.Node */  || value.type === "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */  || value.type === "nodeList" /* Protocol.Accessibility.AXValueType.NodeList */ ) {
                    this.appendRelatedNodeListValueElement(value);
                    return;
                }
                if (value.sources) {
                    var sources = value.sources;
                    for(var i = 0; i < sources.length; i++){
                        var source = sources[i];
                        var child = new AXValueSourceTreeElement(source, this.axNode);
                        this.appendChild(child);
                    }
                    this.expand();
                }
                var element = AXNodePropertyTreeElement.createSimpleValueElement(value.type, String(value.value));
                this.listItemElement.appendChild(element);
            }
        },
        {
            key: "appendRelatedNode",
            value: function appendRelatedNode(relatedNode, _index) {
                var deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
                var nodeTreeElement = new AXRelatedNodeSourceTreeElement({
                    deferredNode: deferredNode,
                    idref: undefined
                }, relatedNode);
                this.appendChild(nodeTreeElement);
            }
        },
        {
            key: "appendRelatedNodeInline",
            value: function appendRelatedNodeInline(relatedNode) {
                var deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
                var linkedNode = new AXRelatedNodeElement({
                    deferredNode: deferredNode,
                    idref: undefined
                }, relatedNode);
                this.listItemElement.appendChild(linkedNode.render());
            }
        },
        {
            key: "appendRelatedNodeListValueElement",
            value: function appendRelatedNodeListValueElement(value) {
                if (value.relatedNodes && value.relatedNodes.length === 1 && !value.value) {
                    this.appendRelatedNodeInline(value.relatedNodes[0]);
                    return;
                }
                if (value.relatedNodes) {
                    value.relatedNodes.forEach(this.appendRelatedNode, this);
                }
                if (value.relatedNodes && value.relatedNodes.length <= 3) {
                    this.expand();
                } else {
                    this.collapse();
                }
            }
        }
    ], [
        {
            key: "createSimpleValueElement",
            value: function createSimpleValueElement(type, value) {
                var valueElement;
                if (!type || type === "valueUndefined" /* Protocol.Accessibility.AXValueType.ValueUndefined */  || type === "computedString" /* Protocol.Accessibility.AXValueType.ComputedString */ ) {
                    valueElement = document.createElement('span');
                } else {
                    valueElement = document.createElement('span');
                    valueElement.classList.add('monospace');
                }
                var valueText;
                var isStringProperty = type && StringProperties.has(type);
                if (isStringProperty) {
                    // Render \n as a nice unicode cr symbol.
                    valueText = '"' + value.replace(/\n/g, '\u21B5') + '"';
                } else {
                    valueText = String(value);
                }
                if (type && type in TypeStyles) {
                    valueElement.classList.add(TypeStyles[type]);
                }
                valueElement.setTextContentTruncatedIfNeeded(valueText || '');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(valueElement, String(value) || '');
                return valueElement;
            }
        },
        {
            key: "createExclamationMark",
            value: function createExclamationMark(tooltip) {
                var exclamationElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createIconLabel({
                    iconName: 'warning-filled',
                    color: 'var(--icon-warning)'
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(exclamationElement, tooltip);
                return exclamationElement;
            }
        }
    ]);
    return AXNodePropertyTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement);
var TypeStyles = {
    attribute: 'ax-value-string',
    boolean: 'object-value-boolean',
    booleanOrUndefined: 'object-value-boolean',
    computedString: 'ax-readable-string',
    idref: 'ax-value-string',
    idrefList: 'ax-value-string',
    integer: 'object-value-number',
    internalRole: 'ax-internal-role',
    number: 'ax-value-number',
    role: 'ax-role',
    string: 'ax-value-string',
    tristate: 'object-value-boolean',
    valueUndefined: 'ax-value-undefined'
};
var StringProperties = new Set([
    "string" /* Protocol.Accessibility.AXValueType.String */ ,
    "computedString" /* Protocol.Accessibility.AXValueType.ComputedString */ ,
    "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */ ,
    "idref" /* Protocol.Accessibility.AXValueType.Idref */ 
]);
var AXNodePropertyTreePropertyElement = /*#__PURE__*/ function(AXNodePropertyTreeElement) {
    "use strict";
    _inherits(AXNodePropertyTreePropertyElement, AXNodePropertyTreeElement);
    var _super = _create_super(AXNodePropertyTreePropertyElement);
    function AXNodePropertyTreePropertyElement(property, axNode) {
        _class_call_check(this, AXNodePropertyTreePropertyElement);
        var _this;
        _this = _super.call(this, axNode);
        _define_property(_assert_this_initialized(_this), "property", void 0);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _this.property = property;
        _this.toggleOnClick = true;
        _this.listItemElement.classList.add('property');
        return _this;
    }
    _create_class(AXNodePropertyTreePropertyElement, [
        {
            key: "onattach",
            value: function onattach() {
                this.update();
            }
        },
        {
            key: "update",
            value: function update() {
                this.listItemElement.removeChildren();
                this.appendNameElement(this.property.name);
                this.listItemElement.createChild('span', 'separator').textContent = ':\xA0';
                this.appendValueElement(this.property.value);
            }
        }
    ]);
    return AXNodePropertyTreePropertyElement;
}(AXNodePropertyTreeElement);
var AXValueSourceTreeElement = /*#__PURE__*/ function(AXNodePropertyTreeElement1) {
    "use strict";
    _inherits(AXValueSourceTreeElement, AXNodePropertyTreeElement1);
    var _super = _create_super(AXValueSourceTreeElement);
    function AXValueSourceTreeElement(source, axNode) {
        _class_call_check(this, AXValueSourceTreeElement);
        var _this;
        _this = _super.call(this, axNode);
        _define_property(_assert_this_initialized(_this), "source", void 0);
        _this.source = source;
        return _this;
    }
    _create_class(AXValueSourceTreeElement, [
        {
            key: "onattach",
            value: function onattach() {
                this.update();
            }
        },
        {
            key: "appendRelatedNodeWithIdref",
            value: function appendRelatedNodeWithIdref(relatedNode, idref) {
                var deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
                var nodeTreeElement = new AXRelatedNodeSourceTreeElement({
                    deferredNode: deferredNode,
                    idref: idref
                }, relatedNode);
                this.appendChild(nodeTreeElement);
            }
        },
        {
            key: "appendIDRefValueElement",
            value: function appendIDRefValueElement(value) {
                if (value.value === null) {
                    return;
                }
                var relatedNodes = value.relatedNodes || [];
                // Content attribute is empty, but if the relationship was set via the IDL
                // then there may be related nodes.
                if (value.value === '') {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = relatedNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var node = _step.value;
                            var idref = node.idref || '';
                            this.appendRelatedNodeWithIdref(node, idref);
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
                    return;
                }
                var idrefs = value.value.trim().split(/\s+/);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    var _this, _loop = function() {
                        var idref = _step1.value;
                        var matchingNode = relatedNodes.find(function(node) {
                            return node.idref === idref;
                        });
                        // If there is exactly one related node, it is rendered on the same line
                        // of the label. If there are more, they are each rendered on their own
                        // line below the label.
                        // TODO(aboxhall): exclamation mark if not idreflist type
                        if (matchingNode) {
                            _this.appendRelatedNodeWithIdref(matchingNode, idref);
                        } else if (idrefs.length === 1) {
                            _this.listItemElement.appendChild(new AXRelatedNodeElement({
                                deferredNode: undefined,
                                idref: idref
                            }).render());
                        } else {
                            _this.appendChild(new AXRelatedNodeSourceTreeElement({
                                deferredNode: undefined,
                                idref: idref
                            }));
                        }
                    };
                    for(var _iterator1 = idrefs[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_this = this, _loop();
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
        },
        {
            key: "appendRelatedNodeListValueElement",
            value: function appendRelatedNodeListValueElement(value) {
                var relatedNodes = value.relatedNodes;
                var numNodes = relatedNodes ? relatedNodes.length : 0;
                if (value.type === "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */  || value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */ ) {
                    this.appendIDRefValueElement(value);
                } else {
                    _get(_get_prototype_of(AXValueSourceTreeElement.prototype), "appendRelatedNodeListValueElement", this).call(this, value);
                }
                if (numNodes <= 3) {
                    this.expand();
                } else {
                    this.collapse();
                }
            }
        },
        {
            key: "appendSourceNameElement",
            value: function appendSourceNameElement(source) {
                var nameElement = document.createElement('span');
                var type = source.type;
                switch(type){
                    case "attribute" /* Protocol.Accessibility.AXValueSourceType.Attribute */ :
                    case "placeholder" /* Protocol.Accessibility.AXValueSourceType.Placeholder */ :
                    case "relatedElement" /* Protocol.Accessibility.AXValueSourceType.RelatedElement */ :
                        if (source.nativeSource) {
                            var nativeSource = source.nativeSource;
                            nameElement.textContent = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXNativeSourceTypes[nativeSource].name();
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(nameElement, _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXNativeSourceTypes[nativeSource].description());
                            nameElement.classList.add('ax-readable-name');
                            break;
                        }
                        nameElement.textContent = source.attribute || null;
                        nameElement.classList.add('ax-name');
                        nameElement.classList.add('monospace');
                        break;
                    default:
                        if (type in _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXSourceTypes) {
                            nameElement.textContent = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXSourceTypes[type].name();
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(nameElement, _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXSourceTypes[type].description());
                            nameElement.classList.add('ax-readable-name');
                        } else {
                            console.warn(type, 'not in AXSourceTypes');
                            nameElement.textContent = type;
                        }
                }
                this.listItemElement.appendChild(nameElement);
            }
        },
        {
            key: "update",
            value: function update() {
                this.listItemElement.removeChildren();
                if (this.source.invalid) {
                    var exclamationMark = AXNodePropertyTreeElement.createExclamationMark(i18nString(UIStrings.invalidSource));
                    this.listItemElement.appendChild(exclamationMark);
                    this.listItemElement.classList.add('ax-value-source-invalid');
                } else if (this.source.superseded) {
                    this.listItemElement.classList.add('ax-value-source-unused');
                }
                this.appendSourceNameElement(this.source);
                this.listItemElement.createChild('span', 'separator').textContent = ':\xA0';
                if (this.source.attributeValue) {
                    this.appendValueElement(this.source.attributeValue);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(this.listItemElement, '\xA0');
                } else if (this.source.nativeSourceValue) {
                    this.appendValueElement(this.source.nativeSourceValue);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(this.listItemElement, '\xA0');
                    if (this.source.value) {
                        this.appendValueElement(this.source.value);
                    }
                } else if (this.source.value) {
                    this.appendValueElement(this.source.value);
                } else {
                    var valueElement = AXNodePropertyTreeElement.createSimpleValueElement("valueUndefined" /* Protocol.Accessibility.AXValueType.ValueUndefined */ , i18nString(UIStrings.notSpecified));
                    this.listItemElement.appendChild(valueElement);
                    this.listItemElement.classList.add('ax-value-source-unused');
                }
                if (this.source.value && this.source.superseded) {
                    this.listItemElement.classList.add('ax-value-source-superseded');
                }
            }
        }
    ]);
    return AXValueSourceTreeElement;
}(AXNodePropertyTreeElement);
var AXRelatedNodeSourceTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(AXRelatedNodeSourceTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(AXRelatedNodeSourceTreeElement);
    function AXRelatedNodeSourceTreeElement(node, value) {
        _class_call_check(this, AXRelatedNodeSourceTreeElement);
        var _this;
        _this = _super.call(this, '');
        _define_property(_assert_this_initialized(_this), "value", void 0);
        _define_property(_assert_this_initialized(_this), "axRelatedNodeElement", void 0);
        _this.value = value;
        _this.axRelatedNodeElement = new AXRelatedNodeElement(node, value);
        _this.selectable = true;
        return _this;
    }
    _create_class(AXRelatedNodeSourceTreeElement, [
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.appendChild(this.axRelatedNodeElement.render());
                if (!this.value) {
                    return;
                }
                if (this.value.text) {
                    this.listItemElement.appendChild(AXNodePropertyTreeElement.createSimpleValueElement("computedString" /* Protocol.Accessibility.AXValueType.ComputedString */ , this.value.text));
                }
            }
        },
        {
            key: "onenter",
            value: function onenter() {
                this.axRelatedNodeElement.revealNode();
                return true;
            }
        }
    ]);
    return AXRelatedNodeSourceTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement);
var AXRelatedNodeElement = /*#__PURE__*/ function() {
    "use strict";
    function AXRelatedNodeElement(node, value) {
        _class_call_check(this, AXRelatedNodeElement);
        _define_property(this, "deferredNode", void 0);
        _define_property(this, "idref", void 0);
        _define_property(this, "value", void 0);
        this.deferredNode = node.deferredNode;
        this.idref = node.idref;
        this.value = value;
    }
    _create_class(AXRelatedNodeElement, [
        {
            key: "render",
            value: function render() {
                var element = document.createElement('span');
                if (this.deferredNode) {
                    var valueElement = document.createElement('span');
                    element.appendChild(valueElement);
                    void this.deferredNode.resolvePromise().then(function(node) {
                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, {
                            tooltip: undefined,
                            preventKeyboardFocus: true
                        }).then(function(linkfied) {
                            return valueElement.appendChild(linkfied);
                        });
                    });
                } else if (this.idref) {
                    element.classList.add('invalid');
                    var valueElement1 = AXNodePropertyTreeElement.createExclamationMark(i18nString(UIStrings.noNodeWithThisId));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(valueElement1, this.idref);
                    element.appendChild(valueElement1);
                }
                return element;
            }
        },
        {
            /**
     * Attempts to cause the node referred to by the related node to be selected in the tree.
     */ key: "revealNode",
            value: function revealNode() {
                if (this.deferredNode) {
                    void this.deferredNode.resolvePromise().then(function(node) {
                        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
                    });
                }
            }
        }
    ]);
    return AXRelatedNodeElement;
}();
var AXNodeIgnoredReasonTreeElement = /*#__PURE__*/ function(AXNodePropertyTreeElement) {
    "use strict";
    _inherits(AXNodeIgnoredReasonTreeElement, AXNodePropertyTreeElement);
    var _super = _create_super(AXNodeIgnoredReasonTreeElement);
    function AXNodeIgnoredReasonTreeElement(property, axNode) {
        _class_call_check(this, AXNodeIgnoredReasonTreeElement);
        var _this;
        _this = _super.call(this, axNode);
        _define_property(_assert_this_initialized(_this), "property", void 0);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _define_property(_assert_this_initialized(_this), "reasonElement", void 0);
        _this.property = property;
        _this.axNode = axNode;
        _this.toggleOnClick = true;
        _this.selectable = false;
        return _this;
    }
    _create_class(AXNodeIgnoredReasonTreeElement, [
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.removeChildren();
                this.reasonElement = AXNodeIgnoredReasonTreeElement.createReasonElement(this.property.name, this.axNode);
                if (this.reasonElement) {
                    this.listItemElement.appendChild(this.reasonElement);
                }
                var value = this.property.value;
                if (value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */ ) {
                    this.appendRelatedNodeListValueElement(value);
                }
            }
        }
    ], [
        {
            key: "createReasonElement",
            value: function createReasonElement(reason, axNode) {
                var reasonElement = null;
                switch(reason){
                    case 'activeModalDialog':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsHiddenBy, {});
                        break;
                    case 'hiddenByChildTree':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsHiddenByChildTree, {});
                        break;
                    case 'ancestorIsLeafNode':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.ancestorChildrenAreAll, {});
                        break;
                    case 'ariaHiddenElement':
                        {
                            var ariaHiddenSpan = document.createElement('span', {
                                is: 'source-code'
                            }).textContent = 'aria-hidden';
                            reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsPlaceholder, {
                                PH1: ariaHiddenSpan
                            });
                            break;
                        }
                    case 'ariaHiddenSubtree':
                        {
                            var ariaHiddenSpan1 = document.createElement('span', {
                                is: 'source-code'
                            }).textContent = 'aria-hidden';
                            var trueSpan = document.createElement('span', {
                                is: 'source-code'
                            }).textContent = 'true';
                            reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.placeholderIsPlaceholderOnAncestor, {
                                PH1: ariaHiddenSpan1,
                                PH2: trueSpan
                            });
                            break;
                        }
                    case 'emptyAlt':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementHasEmptyAltText, {});
                        break;
                    case 'emptyText':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.noTextContent, {});
                        break;
                    case 'inertElement':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsInert, {});
                        break;
                    case 'inertSubtree':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsInAnInertSubTree, {});
                        break;
                    case 'inheritsPresentation':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementsInheritsPresentational, {});
                        break;
                    case 'labelContainer':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.partOfLabelElement, {});
                        break;
                    case 'labelFor':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.labelFor, {});
                        break;
                    case 'notRendered':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsNotRendered, {});
                        break;
                    case 'notVisible':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsNotVisible, {});
                        break;
                    case 'presentationalRole':
                        {
                            var _axNode_role;
                            var role = axNode && ((_axNode_role = axNode.role()) === null || _axNode_role === void 0 ? void 0 : _axNode_role.value) || '';
                            var rolePresentationSpan = document.createElement('span', {
                                is: 'source-code'
                            }).textContent = 'role=' + role;
                            reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementHasPlaceholder, {
                                PH1: rolePresentationSpan
                            });
                            break;
                        }
                    case 'probablyPresentational':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsPresentational, {});
                        break;
                    case 'uninteresting':
                        reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementNotInteresting, {});
                        break;
                }
                if (reasonElement) {
                    reasonElement.classList.add('ax-reason');
                }
                return reasonElement;
            }
        }
    ]);
    return AXNodeIgnoredReasonTreeElement;
} //# sourceMappingURL=AccessibilityNodeView.js.map
(AXNodePropertyTreeElement);


}),
"./panels/accessibility/AccessibilitySubPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilitySubPane: function() { return AccessibilitySubPane; }
});
/* harmony import */var _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibilityProperties.css.js */ "./panels/accessibility/accessibilityProperties.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
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



// eslint-disable-next-line rulesdir/es_modules_import

var AccessibilitySubPane = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(AccessibilitySubPane, _UI_View_SimpleView);
    var _super = _create_super(AccessibilitySubPane);
    function AccessibilitySubPane(name) {
        _class_call_check(this, AccessibilitySubPane);
        var _this;
        _this = _super.call(this, name);
        _define_property(_assert_this_initialized(_this), "axNode", void 0);
        _define_property(_assert_this_initialized(_this), "nodeInternal", void 0);
        _this.axNode = null;
        return _this;
    }
    _create_class(AccessibilitySubPane, [
        {
            key: "setAXNode",
            value: function setAXNode(_axNode) {}
        },
        {
            key: "node",
            value: function node() {
                return this.nodeInternal || null;
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.nodeInternal = node;
            }
        },
        {
            key: "createInfo",
            value: function createInfo(textContent, className) {
                var classNameOrDefault = className || 'gray-info-message';
                var info = this.element.createChild('div', classNameOrDefault);
                info.textContent = textContent;
                return info;
            }
        },
        {
            key: "createTreeOutline",
            value: function createTreeOutline() {
                var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeOutlineInShadow();
                treeOutline.registerCSSFiles([
                    _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__["default"],
                    _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"],
                    _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ]);
                treeOutline.element.classList.add('hidden');
                treeOutline.hideOverflow();
                this.element.appendChild(treeOutline.element);
                return treeOutline;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(AccessibilitySubPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]
                ]);
            }
        }
    ]);
    return AccessibilitySubPane;
} //# sourceMappingURL=AccessibilitySubPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView);


}),
"./panels/accessibility/accessibilityNode.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.widget.ax-subpane {\n  overflow-x: hidden;\n  user-select: text;\n}\n\n.ax-ignored-info {\n  padding: 6px;\n}\n\n.ax-ignored-node-pane {\n  flex: none;\n}\n\n.invalid {\n  text-decoration: line-through;\n}\n\nspan.ax-value-undefined {\n  font-style: italic;\n}\n\n.ax-value-source-unused {\n  opacity: 70%;\n}\n\n.ax-value-source-superseded,\n.ax-value-source-invalid {\n  text-decoration: line-through;\n}\n\n.tree-outline span[is="dt-icon-label"] {\n  position: relative;\n  left: -11px;\n}\n\n.tree-outline li {\n  display: block;\n  overflow-x: hidden;\n  align-items: baseline;\n}\n\n.tree-outline li::before {\n  content: "";\n  width: 14px;\n  display: inline-block;\n  margin-bottom: -2px;\n  margin-right: 3px;\n}\n\n.tree-outline li.property {\n  color: var(--sys-color-on-surface);\n}\n\n.tree-outline li.invalid {\n  position: relative;\n  left: -2px;\n}\n\n.tree-outline span[is="dt-icon-label"] + .ax-name {\n  margin-left: -11px;\n}\n\n.tree-outline li span {\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n@media (forced-colors: active) {\n  .ax-value-source-unused {\n    opacity: 100%;\n  }\n\n  .tree-outline-disclosure:hover li.parent::before {\n    background-color: ButtonText;\n  }\n}\n\n/*# sourceURL=accessibilityNode.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/accessibility/accessibilityProperties.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.ax-name {\n  color: var(--sys-color-token-attribute);\n  flex-shrink: 0;\n}\n\n.ax-readable-name {\n  flex-shrink: 0;\n}\n\n.ax-readable-string {\n  font-style: italic;\n}\n\n.ax-value-string {\n  color: var(--sys-color-token-property-special);\n}\n\nspan.ax-internal-role {\n  font-style: italic;\n}\n\n#source-order-warning {\n  padding-bottom: 0;\n  text-align: left;\n}\n\n.source-order-checkbox {\n  margin: 2px 2px 2px 5px;\n}\n\n/*# sourceURL=accessibilityProperties.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);