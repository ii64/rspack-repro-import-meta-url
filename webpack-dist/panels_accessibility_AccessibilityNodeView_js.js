"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_AccessibilityNodeView_js"],{

/***/ "./panels/accessibility/AccessibilityNodeView.js":
/*!*******************************************************!*\
  !*** ./panels/accessibility/AccessibilityNodeView.js ***!
  \*******************************************************/
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
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */ var _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccessibilityStrings.js */ "./panels/accessibility/AccessibilityStrings.js");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
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
class AXNodeSubPane extends _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_7__.AccessibilitySubPane {
    axNode;
    noNodeInfo;
    ignoredInfo;
    treeOutline;
    ignoredReasonsTree;
    constructor() {
        super(i18nString(UIStrings.computedProperties));
        this.axNode = null;
        this.contentElement.classList.add('ax-subpane');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('computed-properties')}`);
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
                name: "role" /* SDK.AccessibilityModel.CoreAxPropertyName.Role */,
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
        this.registerCSSFiles([_accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
class AXNodePropertyTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement {
    axNode;
    constructor(axNode) {
        // Pass an empty title, the title gets made later in onattach.
        super('');
        this.axNode = axNode;
    }
    static createSimpleValueElement(type, value) {
        let valueElement;
        if (!type || type === "valueUndefined" /* Protocol.Accessibility.AXValueType.ValueUndefined */ ||
            type === "computedString" /* Protocol.Accessibility.AXValueType.ComputedString */) {
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
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(valueElement, String(value) || '');
        return valueElement;
    }
    static createExclamationMark(tooltip) {
        const exclamationElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createIconLabel({ iconName: 'warning-filled', color: 'var(--icon-warning)' });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(exclamationElement, tooltip);
        return exclamationElement;
    }
    appendNameElement(name) {
        const nameElement = document.createElement('span');
        if (name in _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXAttributes) {
            // @ts-ignore TS can't cast name here but we checked it's valid.
            const attribute = _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_6__.AXAttributes[name];
            nameElement.textContent = attribute.name();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(nameElement, attribute.description());
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
        if (value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */ ||
            value.type === "node" /* Protocol.Accessibility.AXValueType.Node */ ||
            value.type === "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */ ||
            value.type === "nodeList" /* Protocol.Accessibility.AXValueType.NodeList */) {
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
    "string" /* Protocol.Accessibility.AXValueType.String */,
    "computedString" /* Protocol.Accessibility.AXValueType.ComputedString */,
    "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */,
    "idref" /* Protocol.Accessibility.AXValueType.Idref */,
]);
class AXNodePropertyTreePropertyElement extends AXNodePropertyTreeElement {
    property;
    toggleOnClick;
    constructor(property, axNode) {
        super(axNode);
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
    source;
    constructor(source, axNode) {
        super(axNode);
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
        if (value.type === "idrefList" /* Protocol.Accessibility.AXValueType.IdrefList */ ||
            value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */) {
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
            case "attribute" /* Protocol.Accessibility.AXValueSourceType.Attribute */:
            case "placeholder" /* Protocol.Accessibility.AXValueSourceType.Placeholder */:
            case "relatedElement" /* Protocol.Accessibility.AXValueSourceType.RelatedElement */:
                if (source.nativeSource) {
                    const nativeSource = source.nativeSource;
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
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(this.listItemElement, '\xA0');
        }
        else if (this.source.nativeSourceValue) {
            this.appendValueElement(this.source.nativeSourceValue);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(this.listItemElement, '\xA0');
            if (this.source.value) {
                this.appendValueElement(this.source.value);
            }
        }
        else if (this.source.value) {
            this.appendValueElement(this.source.value);
        }
        else {
            const valueElement = AXNodePropertyTreeElement.createSimpleValueElement("valueUndefined" /* Protocol.Accessibility.AXValueType.ValueUndefined */, i18nString(UIStrings.notSpecified));
            this.listItemElement.appendChild(valueElement);
            this.listItemElement.classList.add('ax-value-source-unused');
        }
        if (this.source.value && this.source.superseded) {
            this.listItemElement.classList.add('ax-value-source-superseded');
        }
    }
}
class AXRelatedNodeSourceTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeElement {
    value;
    axRelatedNodeElement;
    constructor(node, value) {
        super('');
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
            this.listItemElement.appendChild(AXNodePropertyTreeElement.createSimpleValueElement("computedString" /* Protocol.Accessibility.AXValueType.ComputedString */, this.value.text));
        }
    }
    onenter() {
        this.axRelatedNodeElement.revealNode();
        return true;
    }
}
class AXRelatedNodeElement {
    deferredNode;
    idref;
    value;
    constructor(node, value) {
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
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(valueElement, this.idref);
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
    property;
    toggleOnClick;
    reasonElement;
    constructor(property, axNode) {
        super(axNode);
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
        if (value.type === "idref" /* Protocol.Accessibility.AXValueType.Idref */) {
            this.appendRelatedNodeListValueElement(value);
        }
    }
}
//# sourceMappingURL=AccessibilityNodeView.js.map

/***/ }),

/***/ "./panels/accessibility/AccessibilitySubPane.js":
/*!******************************************************!*\
  !*** ./panels/accessibility/AccessibilitySubPane.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySubPane: () => (/* binding */ AccessibilitySubPane)
/* harmony export */ });
/* harmony import */ var _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibilityProperties.css.js */ "./panels/accessibility/accessibilityProperties.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// eslint-disable-next-line rulesdir/es_modules_import

class AccessibilitySubPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView {
    axNode;
    nodeInternal;
    constructor(name) {
        super(name);
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
        treeOutline.registerCSSFiles([_accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__["default"], _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"], _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]]);
        treeOutline.element.classList.add('hidden');
        treeOutline.hideOverflow();
        this.element.appendChild(treeOutline.element);
        return treeOutline;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]]);
    }
}
//# sourceMappingURL=AccessibilitySubPane.js.map

/***/ }),

/***/ "./panels/accessibility/accessibilityNode.css.js":
/*!*******************************************************!*\
  !*** ./panels/accessibility/accessibilityNode.css.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget.ax-subpane {
  overflow-x: hidden;
  user-select: text;
}

.ax-ignored-info {
  padding: 6px;
}

.ax-ignored-node-pane {
  flex: none;
}

.invalid {
  text-decoration: line-through;
}

span.ax-value-undefined {
  font-style: italic;
}

.ax-value-source-unused {
  opacity: 70%;
}

.ax-value-source-superseded,
.ax-value-source-invalid {
  text-decoration: line-through;
}

.tree-outline span[is="dt-icon-label"] {
  position: relative;
  left: -11px;
}

.tree-outline li {
  display: block;
  overflow-x: hidden;
  align-items: baseline;
}

.tree-outline li::before {
  content: "";
  width: 14px;
  display: inline-block;
  margin-bottom: -2px;
  margin-right: 3px;
}

.tree-outline li.property {
  color: var(--sys-color-on-surface);
}

.tree-outline li.invalid {
  position: relative;
  left: -2px;
}

.tree-outline span[is="dt-icon-label"] + .ax-name {
  margin-left: -11px;
}

.tree-outline li span {
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (forced-colors: active) {
  .ax-value-source-unused {
    opacity: 100%;
  }

  .tree-outline-disclosure:hover li.parent::before {
    background-color: ButtonText;
  }
}

/*# sourceURL=accessibilityNode.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/accessibility/accessibilityProperties.css.js":
/*!*************************************************************!*\
  !*** ./panels/accessibility/accessibilityProperties.css.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.ax-name {
  color: var(--sys-color-token-attribute);
  flex-shrink: 0;
}

.ax-readable-name {
  flex-shrink: 0;
}

.ax-readable-string {
  font-style: italic;
}

.ax-value-string {
  color: var(--sys-color-token-property-special);
}

span.ax-internal-role {
  font-style: italic;
}

#source-order-warning {
  padding-bottom: 0;
  text-align: left;
}

.source-order-checkbox {
  margin: 2px 2px 2px 5px;
}

/*# sourceURL=accessibilityProperties.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);