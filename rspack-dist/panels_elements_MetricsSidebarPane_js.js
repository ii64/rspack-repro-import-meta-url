"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_MetricsSidebarPane_js"], {
"./panels/elements/MetricsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MetricsSidebarPane: function() { return MetricsSidebarPane; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _metricsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metricsSidebarPane.css.js */ "./panels/elements/metricsSidebarPane.css.js");
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
 */ function _assert_this_initialized(self) {
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







var MetricsSidebarPane = /*#__PURE__*/ function(ElementsSidebarPane) {
    "use strict";
    _inherits(MetricsSidebarPane, ElementsSidebarPane);
    var _super = _create_super(MetricsSidebarPane);
    function MetricsSidebarPane() {
        _class_call_check(this, MetricsSidebarPane);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "originalPropertyData", void 0);
        _define_property(_assert_this_initialized(_this), "previousPropertyDataCandidate", void 0);
        _define_property(_assert_this_initialized(_this), "inlineStyle", void 0);
        _define_property(_assert_this_initialized(_this), "highlightMode", void 0);
        _define_property(_assert_this_initialized(_this), "boxElements", void 0);
        _define_property(_assert_this_initialized(_this), "isEditingMetrics", void 0);
        _this.originalPropertyData = null;
        _this.previousPropertyDataCandidate = null;
        _this.inlineStyle = null;
        _this.highlightMode = '';
        _this.boxElements = [];
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('styles-metrics')));
        return _this;
    }
    _create_class(MetricsSidebarPane, [
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                // "style" attribute might have changed. Update metrics unless they are being edited
                // (if a CSS property is added, a StyleSheetChanged event is dispatched).
                if (this.isEditingMetrics) {
                    return Promise.resolve();
                }
                // FIXME: avoid updates of a collapsed pane.
                var node = this.node();
                var cssModel = this.cssModel();
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
                var promises = [
                    cssModel.getComputedStyle(node.id).then(callback.bind(this)),
                    cssModel.getInlineStyles(node.id).then(function(inlineStyleResult) {
                        if (inlineStyleResult && _this.node() === node) {
                            _this.inlineStyle = inlineStyleResult.inlineStyle;
                        }
                    })
                ];
                return Promise.all(promises);
            }
        },
        {
            key: "onCSSModelChanged",
            value: function onCSSModelChanged() {
                this.update();
            }
        },
        {
            /**
     * Toggle the visibility of the Metrics pane. This toggle allows external
     * callers to control the visibility of this pane, but toggling this on does
     * not guarantee the pane will always show up, because the pane's visibility
     * is also controlled by the internal condition that style cannot be empty.
     */ key: "toggleVisibility",
            value: function toggleVisibility(isVisible) {
                this.element.classList.toggle('invisible', !isVisible);
            }
        },
        {
            key: "getPropertyValueAsPx",
            value: function getPropertyValueAsPx(style, propertyName) {
                var propertyValue = style.get(propertyName);
                if (!propertyValue) {
                    return 0;
                }
                return Number(propertyValue.replace(/px$/, '') || 0);
            }
        },
        {
            key: "getBox",
            value: function getBox(computedStyle, componentName) {
                var suffix = componentName === 'border' ? '-width' : '';
                var left = this.getPropertyValueAsPx(computedStyle, componentName + '-left' + suffix);
                var top = this.getPropertyValueAsPx(computedStyle, componentName + '-top' + suffix);
                var right = this.getPropertyValueAsPx(computedStyle, componentName + '-right' + suffix);
                var bottom = this.getPropertyValueAsPx(computedStyle, componentName + '-bottom' + suffix);
                return {
                    left: left,
                    top: top,
                    right: right,
                    bottom: bottom
                };
            }
        },
        {
            key: "highlightDOMNode",
            value: function highlightDOMNode(showHighlight, mode, event) {
                event.consume();
                var node = this.node();
                if (showHighlight && node) {
                    if (this.highlightMode === mode) {
                        return;
                    }
                    this.highlightMode = mode;
                    node.highlight(mode);
                } else {
                    this.highlightMode = '';
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.boxElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _step.value, element = _step_value.element, name = _step_value.name, backgroundColor = _step_value.backgroundColor;
                        var shouldHighlight = !node || mode === 'all' || name === mode;
                        element.style.backgroundColor = shouldHighlight ? backgroundColor : '';
                        element.classList.toggle('highlighted', shouldHighlight);
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
        },
        {
            key: "updateMetrics",
            value: function updateMetrics(style) {
                // Updating with computed style.
                var metricsElement = document.createElement('div');
                metricsElement.className = 'metrics';
                var self = this;
                function createBoxPartElement(style, name, side, suffix) {
                    var element = document.createElement('div');
                    element.className = side;
                    var propertyName = (name !== 'position' ? name + '-' : '') + side + suffix;
                    var value = style.get(propertyName);
                    if (value === undefined) {
                        return element;
                    }
                    if (value === '' || name !== 'position' && value === '0px') {
                        value = '\u2012';
                    } else if (name === 'position' && value === 'auto') {
                        value = '\u2012';
                    }
                    value = value.replace(/px$/, '');
                    value = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(value);
                    element.textContent = value;
                    element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value(propertyName).track({
                        dblclick: true,
                        keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                        change: true
                    })));
                    element.addEventListener('dblclick', this.startEditing.bind(this, element, name, propertyName, style), false);
                    return element;
                }
                function getContentAreaWidthPx(style) {
                    var width = style.get('width');
                    if (!width) {
                        return '';
                    }
                    width = width.replace(/px$/, '');
                    var widthValue = Number(width);
                    if (!isNaN(widthValue) && style.get('box-sizing') === 'border-box') {
                        var borderBox = self.getBox(style, 'border');
                        var paddingBox = self.getBox(style, 'padding');
                        width = (widthValue - borderBox.left - borderBox.right - paddingBox.left - paddingBox.right).toString();
                    }
                    return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(width);
                }
                function getContentAreaHeightPx(style) {
                    var height = style.get('height');
                    if (!height) {
                        return '';
                    }
                    height = height.replace(/px$/, '');
                    var heightValue = Number(height);
                    if (!isNaN(heightValue) && style.get('box-sizing') === 'border-box') {
                        var borderBox = self.getBox(style, 'border');
                        var paddingBox = self.getBox(style, 'padding');
                        height = (heightValue - borderBox.top - borderBox.bottom - paddingBox.top - paddingBox.bottom).toString();
                    }
                    return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.toFixedIfFloating(height);
                }
                // Display types for which margin is ignored.
                var noMarginDisplayType = new Set([
                    'table-cell',
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row',
                    'table-row-group'
                ]);
                // Display types for which padding is ignored.
                var noPaddingDisplayType = new Set([
                    'table-column',
                    'table-column-group',
                    'table-footer-group',
                    'table-header-group',
                    'table-row',
                    'table-row-group'
                ]);
                // Position types for which top, left, bottom and right are ignored.
                var noPositionType = new Set([
                    'static'
                ]);
                var boxes = [
                    'content',
                    'padding',
                    'border',
                    'margin',
                    'position'
                ];
                var boxColors = [
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Content,
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Padding,
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Border,
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Margin,
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy.fromRGBA([
                        0,
                        0,
                        0,
                        0
                    ])
                ];
                var boxLabels = [
                    'content',
                    'padding',
                    'border',
                    'margin',
                    'position'
                ];
                var previousBox = null;
                this.boxElements = [];
                for(var i = 0; i < boxes.length; ++i){
                    var name = boxes[i];
                    var display = style.get('display');
                    var position = style.get('position');
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
                    var boxElement = document.createElement('div');
                    boxElement.className = "".concat(name, " highlighted");
                    var backgroundColor = boxColors[i].asString("rgba" /* Common.Color.Format.RGBA */ ) || '';
                    boxElement.style.backgroundColor = backgroundColor;
                    boxElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.metricsBox().context(name).track({
                        hover: true
                    })));
                    boxElement.addEventListener('mouseover', this.highlightDOMNode.bind(this, true, name === 'position' ? 'all' : name), false);
                    this.boxElements.push({
                        element: boxElement,
                        name: name,
                        backgroundColor: backgroundColor
                    });
                    if (name === 'content') {
                        var widthElement = document.createElement('span');
                        widthElement.textContent = getContentAreaWidthPx(style);
                        widthElement.addEventListener('dblclick', this.startEditing.bind(this, widthElement, 'width', 'width', style), false);
                        widthElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('width').track({
                            dblclick: true,
                            keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                            change: true
                        })));
                        var heightElement = document.createElement('span');
                        heightElement.textContent = getContentAreaHeightPx(style);
                        heightElement.addEventListener('dblclick', this.startEditing.bind(this, heightElement, 'height', 'height', style), false);
                        heightElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.value('height').track({
                            dblclick: true,
                            keydown: 'Enter|Escape|ArrowUp|ArrowDown|PageUp|PageDown',
                            change: true
                        })));
                        var timesElement = document.createElement('span');
                        timesElement.textContent = ' × ';
                        boxElement.appendChild(widthElement);
                        boxElement.appendChild(timesElement);
                        boxElement.appendChild(heightElement);
                    } else {
                        var suffix = name === 'border' ? '-width' : '';
                        var labelElement = document.createElement('div');
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
        },
        {
            key: "startEditing",
            value: function startEditing(targetElement, box, styleProperty, computedStyle) {
                if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.isBeingEdited(targetElement)) {
                    return;
                }
                var context = {
                    box: box,
                    styleProperty: styleProperty,
                    computedStyle: computedStyle,
                    keyDownHandler: function() {}
                };
                var boundKeyDown = this.handleKeyDown.bind(this, context);
                context.keyDownHandler = boundKeyDown;
                targetElement.addEventListener('keydown', boundKeyDown, false);
                this.isEditingMetrics = true;
                var config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.Config(this.editingCommitted.bind(this), this.editingCancelled.bind(this), context);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.InplaceEditor.InplaceEditor.startEditing(targetElement, config);
                var selection = targetElement.getComponentSelection();
                selection && selection.selectAllChildren(targetElement);
            }
        },
        {
            key: "handleKeyDown",
            value: function handleKeyDown(context, event) {
                var element = event.currentTarget;
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
        },
        {
            key: "editingEnded",
            value: function editingEnded(element, context) {
                this.originalPropertyData = null;
                this.previousPropertyDataCandidate = null;
                element.removeEventListener('keydown', context.keyDownHandler, false);
                delete this.isEditingMetrics;
            }
        },
        {
            key: "editingCancelled",
            value: function editingCancelled(element, context) {
                if (this.inlineStyle) {
                    if (!this.originalPropertyData) {
                        // An added property, remove the last property in the style.
                        var pastLastSourcePropertyIndex = this.inlineStyle.pastLastSourcePropertyIndex();
                        if (pastLastSourcePropertyIndex) {
                            void this.inlineStyle.allProperties()[pastLastSourcePropertyIndex - 1].setText('', false);
                        }
                    } else {
                        void this.inlineStyle.allProperties()[this.originalPropertyData.index].setText(this.originalPropertyData.propertyText || '', false);
                    }
                }
                this.editingEnded(element, context);
                this.update();
            }
        },
        {
            key: "applyUserInput",
            value: function applyUserInput(element, userInput, previousContent, context, commitEditor) {
                if (!this.inlineStyle) {
                    // Element has no renderer.
                    return this.editingCancelled(element, context); // nothing changed, so cancel
                }
                if (commitEditor && userInput === previousContent) {
                    return this.editingCancelled(element, context);
                } // nothing changed, so cancel
                if (context.box !== 'position' && (!userInput || userInput === '\u2012')) {
                    userInput = '0px';
                } else if (context.box === 'position' && (!userInput || userInput === '\u2012')) {
                    userInput = 'auto';
                }
                userInput = userInput.toLowerCase();
                // Append a "px" unit if the user input was just a number.
                if (/^\d+$/.test(userInput)) {
                    userInput += 'px';
                }
                var styleProperty = context.styleProperty;
                var computedStyle = context.computedStyle;
                if (computedStyle.get('box-sizing') === 'border-box' && (styleProperty === 'width' || styleProperty === 'height')) {
                    if (!userInput.match(/px$/)) {
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('For elements with box-sizing: border-box, only absolute content area dimensions can be applied');
                        return;
                    }
                    var borderBox = this.getBox(computedStyle, 'border');
                    var paddingBox = this.getBox(computedStyle, 'padding');
                    var userValuePx = Number(userInput.replace(/px$/, ''));
                    if (isNaN(userValuePx)) {
                        return;
                    }
                    if (styleProperty === 'width') {
                        userValuePx += borderBox.left + borderBox.right + paddingBox.left + paddingBox.right;
                    } else {
                        userValuePx += borderBox.top + borderBox.bottom + paddingBox.top + paddingBox.bottom;
                    }
                    userInput = userValuePx + 'px';
                }
                this.previousPropertyDataCandidate = null;
                var allProperties = this.inlineStyle.allProperties();
                for(var i = 0; i < allProperties.length; ++i){
                    var property = allProperties[i];
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
                        var node = this.node();
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
        },
        {
            key: "editingCommitted",
            value: function editingCommitted(element, userInput, previousContent, context) {
                this.editingEnded(element, context);
                this.applyUserInput(element, userInput, previousContent, context, true);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(MetricsSidebarPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _metricsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        }
    ]);
    return MetricsSidebarPane;
} //# sourceMappingURL=MetricsSidebarPane.js.map
(_ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__.ElementsSidebarPane);


}),
"./panels/elements/metricsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/**\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.metrics {\n  padding: 8px;\n  font-size: 10px;\n  text-align: center;\n  white-space: nowrap;\n  min-height: var(--metrics-height);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  /* Colors in the metrics panel need special treatment. The color of the\n  various box-model regions (margin, border, padding, content) are set in JS\n  by using the ones from the in-page overlay. They, therefore, do not depend on\n  the theme.\n  To ensure proper contrast between those colors and the 1px borders between\n  them, we use these local variables, not theme variables. */\n  --override-box-model-separator-color: var(--ref-palette-neutral0);\n  --override-box-model-text-color: var(--ref-palette-neutral10);\n}\n\n:host {\n  --metrics-height: 190px;\n\n  height: var(--metrics-height);\n  contain: strict;\n}\n\n:host(.invisible) {\n  visibility: hidden;\n  height: 0;\n}\n\n:host(.collapsed) {\n  visibility: collapse;\n  height: 0;\n}\n/* The font we use on Windows takes up more vertical space, so adjust\n * the height of the metrics sidebar pane accordingly.\n */\n:host-context(.platform-windows) {\n  --metrics-height: 214px;\n}\n\n.metrics .label {\n  position: absolute;\n  font-size: 10px;\n  left: 4px;\n}\n\n.metrics .position {\n  /* This border is different from the ones displayed between the box-moodel\n  regions because it is displayed against the pane background, so needs to be\n  visible in both light and dark theme. We therefore use a theme variable. */\n  border: 1px var(--sys-color-token-subtle) dotted;\n  background-color: var(--sys-color-cdt-base-container);\n  display: inline-block;\n  text-align: center;\n  padding: 3px;\n  margin: 3px;\n  position: relative;\n}\n\n.metrics .margin {\n  border: 1px dashed var(--override-box-model-separator-color);\n  background-color: var(--sys-color-cdt-base-container);\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  padding: 3px 6px;\n  margin: 3px;\n  position: relative;\n}\n\n.metrics .border {\n  border: 1px solid var(--override-box-model-separator-color);\n  background-color: var(--sys-color-cdt-base-container);\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  padding: 3px 6px;\n  margin: 3px;\n  position: relative;\n}\n\n.metrics .padding {\n  border: 1px dashed var(--override-box-model-separator-color);\n  background-color: var(--sys-color-cdt-base-container);\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  padding: 3px 6px;\n  margin: 3px;\n  position: relative;\n  min-width: 120px;\n}\n\n.metrics .content {\n  position: static;\n  border: 1px solid var(--override-box-model-separator-color);\n  background-color: var(--sys-color-cdt-base-container);\n  display: inline-block;\n  text-align: center;\n  vertical-align: middle;\n  padding: 3px;\n  margin: 3px;\n  min-width: 80px;\n  overflow: visible;\n}\n\n.metrics .content span {\n  display: inline-block;\n}\n\n.metrics .editing {\n  position: relative;\n  z-index: 100;\n  cursor: text;\n}\n\n.metrics .left {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.metrics .right {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.metrics .top {\n  display: inline-block;\n}\n\n.metrics .bottom {\n  display: inline-block;\n}\n\n/* In dark theme, when a specific box-model region is hovered, the other regions\nlose their background colors, so we need to give them a lighter border color so\nthat region separators remain visible against the dark panel background. */\n:host-context(.theme-with-dark-background) .margin:hover,\n:host-context(.theme-with-dark-background) .margin:hover * {\n  border-color: var(--sys-color-token-subtle);\n}\n\n/* With the exception of the position labels, labels are displayed on top of\nthe box-model region colors, so need to use the following color to remain\nvisible. */\n.metrics .highlighted:not(.position) > *:not(.border):not(.padding):not(.content) {\n  color: var(--override-box-model-text-color);\n}\n\n/*# sourceURL=metricsSidebarPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);