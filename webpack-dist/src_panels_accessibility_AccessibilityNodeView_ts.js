"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_accessibility_AccessibilityNodeView_ts"],{

/***/ "./src/panels/accessibility/AccessibilityNodeView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/accessibility/AccessibilityNodeView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AXNodeIgnoredReasonTreeElement: () => (/* binding */ AXNodeIgnoredReasonTreeElement),
/* harmony export */   AXNodePropertyTreeElement: () => (/* binding */ AXNodePropertyTreeElement),
/* harmony export */   AXNodePropertyTreePropertyElement: () => (/* binding */ AXNodePropertyTreePropertyElement),
/* harmony export */   AXNodeSubPane: () => (/* binding */ AXNodeSubPane),
/* harmony export */   AXRelatedNodeElement: () => (/* binding */ AXRelatedNodeElement),
/* harmony export */   AXRelatedNodeSourceTreeElement: () => (/* binding */ AXRelatedNodeSourceTreeElement),
/* harmony export */   AXValueSourceTreeElement: () => (/* binding */ AXValueSourceTreeElement),
/* harmony export */   StringProperties: () => (/* binding */ StringProperties),
/* harmony export */   TypeStyles: () => (/* binding */ TypeStyles)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccessibilityStrings.js */ "./src/panels/accessibility/AccessibilityStrings.ts");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./src/panels/accessibility/AccessibilitySubPane.ts");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    computedProperties: 'Computed Properties',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    noAccessibilityNode: 'No accessibility node',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    accessibilityNodeNotExposed: 'Accessibility node not exposed',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    invalidSource: 'Invalid source.',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    notSpecified: 'Not specified',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    noNodeWithThisId: 'No node with this ID.',
    /**
     *@description Text which appears in the Accessibility Node View of the Accessibility panel when an element is covered by a modal/popup window
     */
    elementIsHiddenBy: 'Element is hidden by active modal dialog:\xA0',
    /**
     *@description Text which appears in the Accessibility Node View of the Accessibility panel when an element is hidden by another accessibility tree.
     */
    elementIsHiddenByChildTree: 'Element is hidden by child tree:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    ancestorChildrenAreAll: 'Ancestor\'s children are all presentational:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
    @example {aria-hidden} PH1
     */
    elementIsPlaceholder: 'Element is {PH1}.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     *@example {aria-hidden} PH1
     *@example {true} PH2
     */
    placeholderIsPlaceholderOnAncestor: '{PH1} is {PH2} on ancestor:\xA0',
    /**
     *@description Text in Accessibility Node View of the Accessibility panel
     */
    elementHasEmptyAltText: 'Element has empty alt text.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    noTextContent: 'No text content.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementIsInert: 'Element is `inert`.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementIsInAnInertSubTree: 'Element is in an `inert` subtree from\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementsInheritsPresentational: 'Element inherits presentational role from\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    partOfLabelElement: 'Part of label element:\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    labelFor: 'Label for\xA0',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementIsNotRendered: 'Element is not rendered.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementIsNotVisible: 'Element is not visible.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel. Indicates the
     *ARIA role for this element, which will always have the format 'role=', but with different roles
     *(which are not translated). https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
     *@example {role=link} PH1
     */
    elementHasPlaceholder: 'Element has {PH1}.',
    /**
     *@description Reason element in Accessibility Node View of the Accessibility panel
     */
    elementIsPresentational: 'Element is presentational.',
    /**
     * @description Reason element in Accessibility Node View of the Accessibility pane. Here
     * 'interesting' is from the perspective of the accessibility engine in Chrome. A non-interesting
     * element doesn't have any special accessibility considerations
     */
    elementNotInteresting: 'Element not interesting for accessibility.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/accessibility/AccessibilityNodeView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AXNodeSubPane extends _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_8__.AccessibilitySubPane {
    constructor() {
        super(i18nString(UIStrings.computedProperties));
        Object.defineProperty(this, "axNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noNodeInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoredInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ignoredReasonsTree", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.axNode = null;
        this.contentElement.classList.add('ax-subpane');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('computed-properties')}`);
        this.noNodeInfo = this.createInfo(i18nString(UIStrings.noAccessibilityNode));
        this.ignoredInfo = this.createInfo(i18nString(UIStrings.accessibilityNodeNotExposed), 'ax-ignored-info hidden');
        this.treeOutline = this.createTreeOutline();
        this.ignoredReasonsTree = this.createTreeOutline();
        this.element.classList.add('accessibility-computed');
        this.treeOutline.setFocusable(true);
    }
    setAXNode(axNode) {
        if (this.axNode === axNode) {
            return;
        }
        this.axNode = axNode;
        const treeOutline = this.treeOutline;
        treeOutline.removeChildren();
        const ignoredReasons = this.ignoredReasonsTree;
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
            this.noNodeInfo.classList.add('hidden');
            treeOutline.element.classList.add('hidden');
            this.element.classList.add('ax-ignored-node-pane');
            this.ignoredInfo.classList.remove('hidden');
            ignoredReasons.element.classList.remove('hidden');
            function addIgnoredReason(property) {
                ignoredReasons.appendChild(new AXNodeIgnoredReasonTreeElement(property, axNode));
            }
            const ignoredReasonsArray = axNode.ignoredReasons();
            for (const reason of ignoredReasonsArray) {
                addIgnoredReason(reason);
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
        for (const property of axNode.coreProperties()) {
            addProperty(property);
        }
        const role = axNode.role();
        if (role) {
            const roleProperty = {
                name: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilityModel.CoreAxPropertyName.Role,
                value: role,
            };
            addProperty(roleProperty);
        }
        for (const property of axNode.properties()) {
            addProperty(property);
        }
        const firstNode = treeOutline.firstChild();
        if (firstNode) {
            firstNode.select(/* omitFocus= */ true, /* selectedByUser= */ false);
        }
    }
    setNode(node) {
        super.setNode(node);
        this.axNode = null;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class AXNodePropertyTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement {
    constructor(axNode) {
        // Pass an empty title, the title gets made later in onattach.
        super('');
        Object.defineProperty(this, "axNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.axNode = axNode;
    }
    static createSimpleValueElement(type, value) {
        let valueElement;
        if (!type || type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.ValueUndefined ||
            type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.ComputedString) {
            valueElement = document.createElement('span');
        }
        else {
            valueElement = document.createElement('span');
            valueElement.classList.add('monospace');
        }
        let valueText;
        const isStringProperty = type && StringProperties.has(type);
        if (isStringProperty) {
            // Render \n as a nice unicode cr symbol.
            valueText = '"' + value.replace(/\n/g, '\u21B5') + '"';
        }
        else {
            valueText = String(value);
        }
        if (type && type in TypeStyles) {
            valueElement.classList.add(TypeStyles[type]);
        }
        valueElement.setTextContentTruncatedIfNeeded(valueText || '');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(valueElement, String(value) || '');
        return valueElement;
    }
    static createExclamationMark(tooltip) {
        const exclamationElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createIconLabel({ iconName: 'warning-filled', color: 'var(--icon-warning)' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(exclamationElement, tooltip);
        return exclamationElement;
    }
    appendNameElement(name) {
        const nameElement = document.createElement('span');
        if (name in _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXAttributes) {
            // @ts-ignore TS can't cast name here but we checked it's valid.
            const attribute = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXAttributes[name];
            nameElement.textContent = attribute.name();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(nameElement, attribute.description());
            nameElement.classList.add('ax-readable-name');
        }
        else {
            nameElement.textContent = name;
            nameElement.classList.add('ax-name');
            nameElement.classList.add('monospace');
        }
        this.listItemElement.appendChild(nameElement);
    }
    appendValueElement(value) {
        if (value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.Idref ||
            value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.Node ||
            value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.IdrefList ||
            value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.NodeList) {
            this.appendRelatedNodeListValueElement(value);
            return;
        }
        if (value.sources) {
            const sources = value.sources;
            for (let i = 0; i < sources.length; i++) {
                const source = sources[i];
                const child = new AXValueSourceTreeElement(source, this.axNode);
                this.appendChild(child);
            }
            this.expand();
        }
        const element = AXNodePropertyTreeElement.createSimpleValueElement(value.type, String(value.value));
        this.listItemElement.appendChild(element);
    }
    appendRelatedNode(relatedNode, _index) {
        const deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
        const nodeTreeElement = new AXRelatedNodeSourceTreeElement({ deferredNode: deferredNode, idref: undefined }, relatedNode);
        this.appendChild(nodeTreeElement);
    }
    appendRelatedNodeInline(relatedNode) {
        const deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
        const linkedNode = new AXRelatedNodeElement({ deferredNode: deferredNode, idref: undefined }, relatedNode);
        this.listItemElement.appendChild(linkedNode.render());
    }
    appendRelatedNodeListValueElement(value) {
        if (value.relatedNodes && value.relatedNodes.length === 1 && !value.value) {
            this.appendRelatedNodeInline(value.relatedNodes[0]);
            return;
        }
        if (value.relatedNodes) {
            value.relatedNodes.forEach(this.appendRelatedNode, this);
        }
        if (value.relatedNodes && value.relatedNodes.length <= 3) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }
}
const TypeStyles = {
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
    valueUndefined: 'ax-value-undefined',
};
const StringProperties = new Set([
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.String,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.ComputedString,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.IdrefList,
    _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.Idref,
]);
class AXNodePropertyTreePropertyElement extends AXNodePropertyTreeElement {
    constructor(property, axNode) {
        super(axNode);
        Object.defineProperty(this, "property", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.property = property;
        this.toggleOnClick = true;
        this.listItemElement.classList.add('property');
    }
    onattach() {
        this.update();
    }
    update() {
        this.listItemElement.removeChildren();
        this.appendNameElement(this.property.name);
        this.listItemElement.createChild('span', 'separator').textContent = ':\xA0';
        this.appendValueElement(this.property.value);
    }
}
class AXValueSourceTreeElement extends AXNodePropertyTreeElement {
    constructor(source, axNode) {
        super(axNode);
        Object.defineProperty(this, "source", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.source = source;
    }
    onattach() {
        this.update();
    }
    appendRelatedNodeWithIdref(relatedNode, idref) {
        const deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(this.axNode.accessibilityModel().target(), relatedNode.backendDOMNodeId);
        const nodeTreeElement = new AXRelatedNodeSourceTreeElement({ deferredNode: deferredNode, idref: idref }, relatedNode);
        this.appendChild(nodeTreeElement);
    }
    appendIDRefValueElement(value) {
        if (value.value === null) {
            return;
        }
        const relatedNodes = value.relatedNodes || [];
        // Content attribute is empty, but if the relationship was set via the IDL
        // then there may be related nodes.
        if (value.value === '') {
            for (const node of relatedNodes) {
                const idref = node.idref || '';
                this.appendRelatedNodeWithIdref(node, idref);
            }
            return;
        }
        const idrefs = value.value.trim().split(/\s+/);
        for (const idref of idrefs) {
            const matchingNode = relatedNodes.find(node => node.idref === idref);
            // If there is exactly one related node, it is rendered on the same line
            // of the label. If there are more, they are each rendered on their own
            // line below the label.
            // TODO(aboxhall): exclamation mark if not idreflist type
            if (matchingNode) {
                this.appendRelatedNodeWithIdref(matchingNode, idref);
            }
            else if (idrefs.length === 1) {
                this.listItemElement.appendChild(new AXRelatedNodeElement({ deferredNode: undefined, idref: idref }).render());
            }
            else {
                this.appendChild(new AXRelatedNodeSourceTreeElement({ deferredNode: undefined, idref: idref }));
            }
        }
    }
    appendRelatedNodeListValueElement(value) {
        const relatedNodes = value.relatedNodes;
        const numNodes = relatedNodes ? relatedNodes.length : 0;
        if (value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.IdrefList ||
            value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.Idref) {
            this.appendIDRefValueElement(value);
        }
        else {
            super.appendRelatedNodeListValueElement(value);
        }
        if (numNodes <= 3) {
            this.expand();
        }
        else {
            this.collapse();
        }
    }
    appendSourceNameElement(source) {
        const nameElement = document.createElement('span');
        const type = source.type;
        switch (type) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueSourceType.Attribute:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueSourceType.Placeholder:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueSourceType.RelatedElement:
                if (source.nativeSource) {
                    const nativeSource = source.nativeSource;
                    nameElement.textContent = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXNativeSourceTypes[nativeSource].name();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(nameElement, _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXNativeSourceTypes[nativeSource].description());
                    nameElement.classList.add('ax-readable-name');
                    break;
                }
                nameElement.textContent = source.attribute || null;
                nameElement.classList.add('ax-name');
                nameElement.classList.add('monospace');
                break;
            default:
                if (type in _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXSourceTypes) {
                    nameElement.textContent = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXSourceTypes[type].name();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(nameElement, _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_7__.AXSourceTypes[type].description());
                    nameElement.classList.add('ax-readable-name');
                }
                else {
                    console.warn(type, 'not in AXSourceTypes');
                    nameElement.textContent = type;
                }
        }
        this.listItemElement.appendChild(nameElement);
    }
    update() {
        this.listItemElement.removeChildren();
        if (this.source.invalid) {
            const exclamationMark = AXNodePropertyTreeElement.createExclamationMark(i18nString(UIStrings.invalidSource));
            this.listItemElement.appendChild(exclamationMark);
            this.listItemElement.classList.add('ax-value-source-invalid');
        }
        else if (this.source.superseded) {
            this.listItemElement.classList.add('ax-value-source-unused');
        }
        this.appendSourceNameElement(this.source);
        this.listItemElement.createChild('span', 'separator').textContent = ':\xA0';
        if (this.source.attributeValue) {
            this.appendValueElement(this.source.attributeValue);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(this.listItemElement, '\xA0');
        }
        else if (this.source.nativeSourceValue) {
            this.appendValueElement(this.source.nativeSourceValue);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(this.listItemElement, '\xA0');
            if (this.source.value) {
                this.appendValueElement(this.source.value);
            }
        }
        else if (this.source.value) {
            this.appendValueElement(this.source.value);
        }
        else {
            const valueElement = AXNodePropertyTreeElement.createSimpleValueElement(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.ValueUndefined, i18nString(UIStrings.notSpecified));
            this.listItemElement.appendChild(valueElement);
            this.listItemElement.classList.add('ax-value-source-unused');
        }
        if (this.source.value && this.source.superseded) {
            this.listItemElement.classList.add('ax-value-source-superseded');
        }
    }
}
class AXRelatedNodeSourceTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement {
    constructor(node, value) {
        super('');
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "axRelatedNodeElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
        this.axRelatedNodeElement = new AXRelatedNodeElement(node, value);
        this.selectable = true;
    }
    onattach() {
        this.listItemElement.appendChild(this.axRelatedNodeElement.render());
        if (!this.value) {
            return;
        }
        if (this.value.text) {
            this.listItemElement.appendChild(AXNodePropertyTreeElement.createSimpleValueElement(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.ComputedString, this.value.text));
        }
    }
    onenter() {
        this.axRelatedNodeElement.revealNode();
        return true;
    }
}
class AXRelatedNodeElement {
    constructor(node, value) {
        Object.defineProperty(this, "deferredNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "idref", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.deferredNode = node.deferredNode;
        this.idref = node.idref;
        this.value = value;
    }
    render() {
        const element = document.createElement('span');
        if (this.deferredNode) {
            const valueElement = document.createElement('span');
            element.appendChild(valueElement);
            void this.deferredNode.resolvePromise().then(node => {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, { tooltip: undefined, preventKeyboardFocus: true })
                    .then(linkfied => valueElement.appendChild(linkfied));
            });
        }
        else if (this.idref) {
            element.classList.add('invalid');
            const valueElement = AXNodePropertyTreeElement.createExclamationMark(i18nString(UIStrings.noNodeWithThisId));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(valueElement, this.idref);
            element.appendChild(valueElement);
        }
        return element;
    }
    /**
     * Attempts to cause the node referred to by the related node to be selected in the tree.
     */
    revealNode() {
        if (this.deferredNode) {
            void this.deferredNode.resolvePromise().then(node => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node));
        }
    }
}
class AXNodeIgnoredReasonTreeElement extends AXNodePropertyTreeElement {
    constructor(property, axNode) {
        super(axNode);
        Object.defineProperty(this, "property", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "reasonElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.property = property;
        this.axNode = axNode;
        this.toggleOnClick = true;
        this.selectable = false;
    }
    static createReasonElement(reason, axNode) {
        let reasonElement = null;
        switch (reason) {
            case 'activeModalDialog':
                reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsHiddenBy, {});
                break;
            case 'hiddenByChildTree':
                reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsHiddenByChildTree, {});
                break;
            case 'ancestorIsLeafNode':
                reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.ancestorChildrenAreAll, {});
                break;
            case 'ariaHiddenElement': {
                const ariaHiddenSpan = document.createElement('span', { is: 'source-code' }).textContent = 'aria-hidden';
                reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementIsPlaceholder, { PH1: ariaHiddenSpan });
                break;
            }
            case 'ariaHiddenSubtree': {
                const ariaHiddenSpan = document.createElement('span', { is: 'source-code' }).textContent = 'aria-hidden';
                const trueSpan = document.createElement('span', { is: 'source-code' }).textContent = 'true';
                reasonElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.placeholderIsPlaceholderOnAncestor, { PH1: ariaHiddenSpan, PH2: trueSpan });
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
            case 'presentationalRole': {
                const role = axNode && axNode.role()?.value || '';
                const rolePresentationSpan = document.createElement('span', { is: 'source-code' }).textContent = 'role=' + role;
                reasonElement =
                    _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.elementHasPlaceholder, { PH1: rolePresentationSpan });
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
    onattach() {
        this.listItemElement.removeChildren();
        this.reasonElement = AXNodeIgnoredReasonTreeElement.createReasonElement(this.property.name, this.axNode);
        if (this.reasonElement) {
            this.listItemElement.appendChild(this.reasonElement);
        }
        const value = this.property.value;
        if (value.type === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Accessibility.AXValueType.Idref) {
            this.appendRelatedNodeListValueElement(value);
        }
    }
}


/***/ }),

/***/ "./src/panels/accessibility/AccessibilitySubPane.ts":
/*!**********************************************************!*\
  !*** ./src/panels/accessibility/AccessibilitySubPane.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySubPane: () => (/* binding */ AccessibilitySubPane)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// eslint-disable-next-line rulesdir/es_modules_import

class AccessibilitySubPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView {
    constructor(name) {
        super(name);
        Object.defineProperty(this, "axNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.axNode = null;
    }
    setAXNode(_axNode) {
    }
    node() {
        return this.nodeInternal || null;
    }
    setNode(node) {
        this.nodeInternal = node;
    }
    createInfo(textContent, className) {
        const classNameOrDefault = className || 'gray-info-message';
        const info = this.element.createChild('div', classNameOrDefault);
        info.textContent = textContent;
        return info;
    }
    createTreeOutline() {
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeOutlineInShadow();
        treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        treeOutline.element.classList.add('hidden');
        treeOutline.hideOverflow();
        this.element.appendChild(treeOutline.element);
        return treeOutline;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);