"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_MetricsSidebarPane_js"],{

/***/ "./panels/elements/ComputedStyleModel.js":
/*!***********************************************!*\
  !*** ./panels/elements/ComputedStyleModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyle: () => (/* binding */ ComputedStyle),
/* harmony export */   ComputedStyleModel: () => (/* binding */ ComputedStyleModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ComputedStyleModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    nodeInternal;
    cssModelInternal;
    eventListeners;
    frameResizedTimer;
    computedStylePromise;
    constructor() {
        super();
        this.nodeInternal = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        this.cssModelInternal = null;
        this.eventListeners = [];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.onNodeChanged, this);
    }
    node() {
        return this.nodeInternal;
    }
    cssModel() {
        return this.cssModelInternal && this.cssModelInternal.isEnabled() ? this.cssModelInternal : null;
    }
    onNodeChanged(event) {
        this.nodeInternal = event.data;
        this.updateModel(this.nodeInternal ? this.nodeInternal.domModel().cssModel() : null);
        this.onComputedStyleChanged(null);
    }
    updateModel(cssModel) {
        if (this.cssModelInternal === cssModel) {
            return;
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
        this.cssModelInternal = cssModel;
        const domModel = cssModel ? cssModel.domModel() : null;
        const resourceTreeModel = cssModel ? cssModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) : null;
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
                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameResized, this.onFrameResized, this),
            ];
        }
    }
    onComputedStyleChanged(event) {
        delete this.computedStylePromise;
        this.dispatchEventToListeners("ComputedStyleChanged" /* Events.ComputedStyleChanged */, event?.data ?? null);
    }
    onDOMModelChanged(event) {
        // Any attribute removal or modification can affect the styles of "related" nodes.
        const node = event.data;
        if (!this.nodeInternal ||
            this.nodeInternal !== node && node.parentNode !== this.nodeInternal.parentNode &&
                !node.isAncestor(this.nodeInternal)) {
            return;
        }
        this.onComputedStyleChanged(null);
    }
    onFrameResized() {
        function refreshContents() {
            this.onComputedStyleChanged(null);
            delete this.frameResizedTimer;
        }
        if (this.frameResizedTimer) {
            clearTimeout(this.frameResizedTimer);
        }
        this.frameResizedTimer = window.setTimeout(refreshContents.bind(this), 100);
    }
    elementNode() {
        const node = this.node();
        if (!node) {
            return null;
        }
        return node.enclosingElementOrSelf();
    }
    async fetchComputedStyle() {
        const elementNode = this.elementNode();
        const cssModel = this.cssModel();
        if (!elementNode || !cssModel) {
            return null;
        }
        const nodeId = elementNode.id;
        if (!nodeId) {
            return null;
        }
        if (!this.computedStylePromise) {
            this.computedStylePromise = cssModel.getComputedStyle(nodeId).then(verifyOutdated.bind(this, elementNode));
        }
        return this.computedStylePromise;
        function verifyOutdated(elementNode, style) {
            return elementNode === this.elementNode() && style ? new ComputedStyle(elementNode, style) :
                null;
        }
    }
}
class ComputedStyle {
    node;
    computedStyle;
    constructor(node, computedStyle) {
        this.node = node;
        this.computedStyle = computedStyle;
    }
}
//# sourceMappingURL=ComputedStyleModel.js.map

/***/ }),

/***/ "./panels/elements/ElementsSidebarPane.js":
/*!************************************************!*\
  !*** ./panels/elements/ElementsSidebarPane.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsSidebarPane: () => (/* binding */ ElementsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ElementsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    computedStyleModelInternal;
    updateThrottler;
    updateWhenVisible;
    constructor(delegatesFocus) {
        super(true, delegatesFocus);
        this.element.classList.add('flex-none');
        this.computedStyleModelInternal = new _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__.ComputedStyleModel();
        this.computedStyleModelInternal.addEventListener("ComputedStyleChanged" /* Events.ComputedStyleChanged */, this.onCSSModelChanged, this);
        this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.updateWhenVisible = false;
    }
    node() {
        return this.computedStyleModelInternal.node();
    }
    cssModel() {
        return this.computedStyleModelInternal.cssModel();
    }
    computedStyleModel() {
        return this.computedStyleModelInternal;
    }
    async doUpdate() {
        return;
    }
    update() {
        this.updateWhenVisible = !this.isShowing();
        if (this.updateWhenVisible) {
            return;
        }
        void this.updateThrottler.schedule(innerUpdate.bind(this));
        function innerUpdate() {
            return this.isShowing() ? this.doUpdate() : Promise.resolve();
        }
    }
    wasShown() {
        super.wasShown();
        if (this.updateWhenVisible) {
            this.update();
        }
    }
    onCSSModelChanged(_event) {
    }
}
//# sourceMappingURL=ElementsSidebarPane.js.map

/***/ }),

/***/ "./panels/elements/MetricsSidebarPane.js":
/*!***********************************************!*\
  !*** ./panels/elements/MetricsSidebarPane.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetricsSidebarPane: () => (/* binding */ MetricsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */ var _metricsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metricsSidebarPane.css.js */ "./panels/elements/metricsSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */







class MetricsSidebarPane extends _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__.ElementsSidebarPane {
    originalPropertyData;
    previousPropertyDataCandidate;
    inlineStyle;
    highlightMode;
    boxElements;
    isEditingMetrics;
    constructor() {
        super();
        this.originalPropertyData = null;
        this.previousPropertyDataCandidate = null;
        this.inlineStyle = null;
        this.highlightMode = '';
        this.boxElements = [];
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('styles-metrics')}`);
    }
    doUpdate() {
        // "style" attribute might have changed. Update metrics unless they are being edited
        // (if a CSS property is added, a StyleSheetChanged event is dispatched).
        if (this.isEditingMetrics) {
            return Promise.resolve();
        }
        // FIXME: avoid updates of a collapsed pane.
        const node = this.node();
        const cssModel = this.cssModel();
        if (!node || node.nodeType() !== Node.ELEMENT_NODE || !cssModel) {
            this.contentElement.removeChildren();
            this.element.classList.add('collapsed');
            return Promise.resolve();
        }
        function callback(style) {
            if (!style || this.node() !== node) {
                return;
            }
            this.updateMetrics(style);
        }
        if (!node.id) {
            return Promise.resolve();
        }
        const promises = [
            cssModel.getComputedStyle(node.id).then(callback.bind(this)),
            cssModel.getInlineStyles(node.id).then(inlineStyleResult => {
                if (inlineStyleResult && this.node() === node) {
                    this.inlineStyle = inlineStyleResult.inlineStyle;
                }
            }),
        ];
        return Promise.all(promises);
    }
    onCSSModelChanged() {
        this.update();
    }
    /**
     * Toggle the visibility of the Metrics pane. This toggle allows external
     * callers to control the visibility of this pane, but toggling this on does
     * not guarantee the pane will always show up, because the pane's visibility
     * is also controlled by the internal condition that style cannot be empty.
     */
    toggleVisibility(isVisible) {
        this.element.classList.toggle('invisible', !isVisible);
    }
    getPropertyValueAsPx(style, propertyName) {
        const propertyValue = style.get(propertyName);
        if (!propertyValue) {
            return 0;
        }
        return Number(propertyValue.replace(/px$/, '') || 0);
    }
    getBox(computedStyle, componentName) {
        const suffix = componentName === 'border' ? '-width' : '';
        const left = this.getPropertyValueAsPx(computedStyle, componentName + '-left' + suffix);
        const top = this.getPropertyValueAsPx(computedStyle, componentName + '-top' + suffix);
        const right = this.getPropertyValueAsPx(computedStyle, componentName + '-right' + suffix);
        const bottom = this.getPropertyValueAsPx(computedStyle, componentName + '-bottom' + suffix);
        return { left, top, right, bottom };
    }
    highlightDOMNode(showHighlight, mode, event) {
        event.consume();
        const node = this.node();
        if (showHighlight && node) {
            if (this.highlightMode === mode) {
                return;
            }
            this.highlightMode = mode;
            node.highlight(mode);
        }
        else {
            this.highlightMode = '';
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        }
        for (const { element, name, backgroundColor } of this.boxElements) {
            const shouldHighlight = !node || mode === 'all' || name === mode;
            element.style.backgroundColor = shouldHighlight ? backgroundColor : '';
            element.classList.toggle('highlighted', shouldHighlight);
        }
    }
    updateMetrics(style) {
        // Updating with computed style.
        const metricsElement = document.createElement('div');
        metricsElement.className = 'metrics';
        const self = this;
        function createBoxPartElement(style, name, side, suffix) {
            const element = document.createElement('div');
            element.className = side;
            const propertyName = (name !== 'position' ? name + '-' : '') + side + suffix;
            let value = style.get(propertyName);
            if (value === undefined) {
                return element;
            }
            if (value === '' || (name !== 'position' && value === '0px')) {
                value = '\u2012';
            }
            else if (name === 'position' && value === 'auto') {
                value = '\u2012';
            }
            value = value.replace(/px$/, '');
            value = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(value);
            element.textContent = value;
            element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value(propertyName).track({
                dblclick: true,
                keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                change: true,
            })}`);
            element.addEventListener('dblclick', this.startEditing.bind(this, element, name, propertyName, style), false);
            return element;
        }
        function getContentAreaWidthPx(style) {
            let width = style.get('width');
            if (!width) {
                return '';
            }
            width = width.replace(/px$/, '');
            const widthValue = Number(width);
            if (!isNaN(widthValue) && style.get('box-sizing') === 'border-box') {
                const borderBox = self.getBox(style, 'border');
                const paddingBox = self.getBox(style, 'padding');
                width = (widthValue - borderBox.left - borderBox.right - paddingBox.left - paddingBox.right).toString();
            }
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(width);
        }
        function getContentAreaHeightPx(style) {
            let height = style.get('height');
            if (!height) {
                return '';
            }
            height = height.replace(/px$/, '');
            const heightValue = Number(height);
            if (!isNaN(heightValue) && style.get('box-sizing') === 'border-box') {
                const borderBox = self.getBox(style, 'border');
                const paddingBox = self.getBox(style, 'padding');
                height = (heightValue - borderBox.top - borderBox.bottom - paddingBox.top - paddingBox.bottom).toString();
            }
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(height);
        }
        // Display types for which margin is ignored.
        const noMarginDisplayType = new Set([
            'table-cell',
            'table-column',
            'table-column-group',
            'table-footer-group',
            'table-header-group',
            'table-row',
            'table-row-group',
        ]);
        // Display types for which padding is ignored.
        const noPaddingDisplayType = new Set([
            'table-column',
            'table-column-group',
            'table-footer-group',
            'table-header-group',
            'table-row',
            'table-row-group',
        ]);
        // Position types for which top, left, bottom and right are ignored.
        const noPositionType = new Set(['static']);
        const boxes = ['content', 'padding', 'border', 'margin', 'position'];
        const boxColors = [
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Content,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Padding,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Border,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Margin,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA([0, 0, 0, 0]),
        ];
        const boxLabels = ['content', 'padding', 'border', 'margin', 'position'];
        let previousBox = null;
        this.boxElements = [];
        for (let i = 0; i < boxes.length; ++i) {
            const name = boxes[i];
            const display = style.get('display');
            const position = style.get('position');
            if (!display || !position) {
                continue;
            }
            if (name === 'margin' && noMarginDisplayType.has(display)) {
                continue;
            }
            if (name === 'padding' && noPaddingDisplayType.has(display)) {
                continue;
            }
            if (name === 'position' && noPositionType.has(position)) {
                continue;
            }
            const boxElement = document.createElement('div');
            boxElement.className = `${name} highlighted`;
            const backgroundColor = boxColors[i].asString("rgba" /* Common.Color.Format.RGBA */) || '';
            boxElement.style.backgroundColor = backgroundColor;
            boxElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.metricsBox().context(name).track({ hover: true })}`);
            boxElement.addEventListener('mouseover', this.highlightDOMNode.bind(this, true, name === 'position' ? 'all' : name), false);
            this.boxElements.push({ element: boxElement, name, backgroundColor });
            if (name === 'content') {
                const widthElement = document.createElement('span');
                widthElement.textContent = getContentAreaWidthPx(style);
                widthElement.addEventListener('dblclick', this.startEditing.bind(this, widthElement, 'width', 'width', style), false);
                widthElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('width').track({
                    dblclick: true,
                    keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                    change: true,
                })}`);
                const heightElement = document.createElement('span');
                heightElement.textContent = getContentAreaHeightPx(style);
                heightElement.addEventListener('dblclick', this.startEditing.bind(this, heightElement, 'height', 'height', style), false);
                heightElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('height').track({
                    dblclick: true,
                    keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                    change: true,
                })}`);
                const timesElement = document.createElement('span');
                timesElement.textContent = ' × ';
                boxElement.appendChild(widthElement);
                boxElement.appendChild(timesElement);
                boxElement.appendChild(heightElement);
            }
            else {
                const suffix = (name === 'border' ? '-width' : '');
                const labelElement = document.createElement('div');
                labelElement.className = 'label';
                labelElement.textContent = boxLabels[i];
                boxElement.appendChild(labelElement);
                boxElement.appendChild(createBoxPartElement.call(this, style, name, 'top', suffix));
                boxElement.appendChild(document.createElement('br'));
                boxElement.appendChild(createBoxPartElement.call(this, style, name, 'left', suffix));
                if (previousBox) {
                    boxElement.appendChild(previousBox);
                }
                boxElement.appendChild(createBoxPartElement.call(this, style, name, 'right', suffix));
                boxElement.appendChild(document.createElement('br'));
                boxElement.appendChild(createBoxPartElement.call(this, style, name, 'bottom', suffix));
            }
            previousBox = boxElement;
        }
        metricsElement.appendChild(previousBox);
        metricsElement.addEventListener('mouseover', this.highlightDOMNode.bind(this, false, 'all'), false);
        metricsElement.addEventListener('mouseleave', this.highlightDOMNode.bind(this, false, 'all'), false);
        this.contentElement.removeChildren();
        this.contentElement.appendChild(metricsElement);
        this.element.classList.remove('collapsed');
    }
    startEditing(targetElement, box, styleProperty, computedStyle) {
        if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.isBeingEdited(targetElement)) {
            return;
        }
        const context = { box, styleProperty, computedStyle, keyDownHandler: () => { } };
        const boundKeyDown = this.handleKeyDown.bind(this, context);
        context.keyDownHandler = boundKeyDown;
        targetElement.addEventListener('keydown', boundKeyDown, false);
        this.isEditingMetrics = true;
        const config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.Config(this.editingCommitted.bind(this), this.editingCancelled.bind(this), context);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.InplaceEditor.startEditing(targetElement, config);
        const selection = targetElement.getComponentSelection();
        selection && selection.selectAllChildren(targetElement);
    }
    handleKeyDown(context, event) {
        const element = event.currentTarget;
        function finishHandler(originalValue, replacementString) {
            this.applyUserInput(element, replacementString, originalValue, context, false);
        }
        function customNumberHandler(prefix, number, suffix) {
            if (context.styleProperty !== 'margin' && number < 0) {
                number = 0;
            }
            return prefix + number + suffix;
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.handleElementValueModifications(event, element, finishHandler.bind(this), undefined, customNumberHandler);
    }
    editingEnded(element, context) {
        this.originalPropertyData = null;
        this.previousPropertyDataCandidate = null;
        element.removeEventListener('keydown', context.keyDownHandler, false);
        delete this.isEditingMetrics;
    }
    editingCancelled(element, context) {
        if (this.inlineStyle) {
            if (!this.originalPropertyData) {
                // An added property, remove the last property in the style.
                const pastLastSourcePropertyIndex = this.inlineStyle.pastLastSourcePropertyIndex();
                if (pastLastSourcePropertyIndex) {
                    void this.inlineStyle.allProperties()[pastLastSourcePropertyIndex - 1].setText('', false);
                }
            }
            else {
                void this.inlineStyle.allProperties()[this.originalPropertyData.index].setText(this.originalPropertyData.propertyText || '', false);
            }
        }
        this.editingEnded(element, context);
        this.update();
    }
    applyUserInput(element, userInput, previousContent, context, commitEditor) {
        if (!this.inlineStyle) {
            // Element has no renderer.
            return this.editingCancelled(element, context); // nothing changed, so cancel
        }
        if (commitEditor && userInput === previousContent) {
            return this.editingCancelled(element, context);
        } // nothing changed, so cancel
        if (context.box !== 'position' && (!userInput || userInput === '\u2012')) {
            userInput = '0px';
        }
        else if (context.box === 'position' && (!userInput || userInput === '\u2012')) {
            userInput = 'auto';
        }
        userInput = userInput.toLowerCase();
        // Append a "px" unit if the user input was just a number.
        if (/^\d+$/.test(userInput)) {
            userInput += 'px';
        }
        const styleProperty = context.styleProperty;
        const computedStyle = context.computedStyle;
        if (computedStyle.get('box-sizing') === 'border-box' && (styleProperty === 'width' || styleProperty === 'height')) {
            if (!userInput.match(/px$/)) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('For elements with box-sizing: border-box, only absolute content area dimensions can be applied');
                return;
            }
            const borderBox = this.getBox(computedStyle, 'border');
            const paddingBox = this.getBox(computedStyle, 'padding');
            let userValuePx = Number(userInput.replace(/px$/, ''));
            if (isNaN(userValuePx)) {
                return;
            }
            if (styleProperty === 'width') {
                userValuePx += borderBox.left + borderBox.right + paddingBox.left + paddingBox.right;
            }
            else {
                userValuePx += borderBox.top + borderBox.bottom + paddingBox.top + paddingBox.bottom;
            }
            userInput = userValuePx + 'px';
        }
        this.previousPropertyDataCandidate = null;
        const allProperties = this.inlineStyle.allProperties();
        for (let i = 0; i < allProperties.length; ++i) {
            const property = allProperties[i];
            if (property.name !== context.styleProperty || !property.activeInStyle()) {
                continue;
            }
            this.previousPropertyDataCandidate = property;
            property.setValue(userInput, commitEditor, true, callback.bind(this));
            return;
        }
        this.inlineStyle.appendProperty(context.styleProperty, userInput, callback.bind(this));
        function callback(success) {
            if (!success) {
                return;
            }
            if (!this.originalPropertyData) {
                this.originalPropertyData = this.previousPropertyDataCandidate;
            }
            if (this.highlightMode) {
                const node = this.node();
                if (!node) {
                    return;
                }
                node.highlight(this.highlightMode);
            }
            if (commitEditor) {
                this.update();
            }
        }
    }
    editingCommitted(element, userInput, previousContent, context) {
        this.editingEnded(element, context);
        this.applyUserInput(element, userInput, previousContent, context, true);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_metricsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
    }
}
//# sourceMappingURL=MetricsSidebarPane.js.map

/***/ }),

/***/ "./panels/elements/metricsSidebarPane.css.js":
/*!***************************************************!*\
  !*** ./panels/elements/metricsSidebarPane.css.js ***!
  \***************************************************/
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
`/**
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
.metrics {
  padding: 8px;
  font-size: 10px;
  text-align: center;
  white-space: nowrap;
  min-height: var(--metrics-height);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Colors in the metrics panel need special treatment. The color of the
  various box-model regions (margin, border, padding, content) are set in JS
  by using the ones from the in-page overlay. They, therefore, do not depend on
  the theme.
  To ensure proper contrast between those colors and the 1px borders between
  them, we use these local variables, not theme variables. */
  --override-box-model-separator-color: var(--ref-palette-neutral0);
  --override-box-model-text-color: var(--ref-palette-neutral10);
}

:host {
  --metrics-height: 190px;

  height: var(--metrics-height);
  contain: strict;
}

:host(.invisible) {
  visibility: hidden;
  height: 0;
}

:host(.collapsed) {
  visibility: collapse;
  height: 0;
}
/* The font we use on Windows takes up more vertical space, so adjust
 * the height of the metrics sidebar pane accordingly.
 */
:host-context(.platform-windows) {
  --metrics-height: 214px;
}

.metrics .label {
  position: absolute;
  font-size: 10px;
  left: 4px;
}

.metrics .position {
  /* This border is different from the ones displayed between the box-moodel
  regions because it is displayed against the pane background, so needs to be
  visible in both light and dark theme. We therefore use a theme variable. */
  border: 1px var(--sys-color-token-subtle) dotted;
  background-color: var(--sys-color-cdt-base-container);
  display: inline-block;
  text-align: center;
  padding: 3px;
  margin: 3px;
  position: relative;
}

.metrics .margin {
  border: 1px dashed var(--override-box-model-separator-color);
  background-color: var(--sys-color-cdt-base-container);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
}

.metrics .border {
  border: 1px solid var(--override-box-model-separator-color);
  background-color: var(--sys-color-cdt-base-container);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
}

.metrics .padding {
  border: 1px dashed var(--override-box-model-separator-color);
  background-color: var(--sys-color-cdt-base-container);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px 6px;
  margin: 3px;
  position: relative;
  min-width: 120px;
}

.metrics .content {
  position: static;
  border: 1px solid var(--override-box-model-separator-color);
  background-color: var(--sys-color-cdt-base-container);
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 3px;
  margin: 3px;
  min-width: 80px;
  overflow: visible;
}

.metrics .content span {
  display: inline-block;
}

.metrics .editing {
  position: relative;
  z-index: 100;
  cursor: text;
}

.metrics .left {
  display: inline-block;
  vertical-align: middle;
}

.metrics .right {
  display: inline-block;
  vertical-align: middle;
}

.metrics .top {
  display: inline-block;
}

.metrics .bottom {
  display: inline-block;
}

/* In dark theme, when a specific box-model region is hovered, the other regions
lose their background colors, so we need to give them a lighter border color so
that region separators remain visible against the dark panel background. */
:host-context(.theme-with-dark-background) .margin:hover,
:host-context(.theme-with-dark-background) .margin:hover * {
  border-color: var(--sys-color-token-subtle);
}

/* With the exception of the position labels, labels are displayed on top of
the box-model region colors, so need to use the following color to remain
visible. */
.metrics .highlighted:not(.position) > *:not(.border):not(.padding):not(.content) {
  color: var(--override-box-model-text-color);
}

/*# sourceURL=metricsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);