"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_CSSRuleValidator_test_js"], {
"./panels/elements/CSSRuleValidator.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('CSSRuleValidator', function() {
    var tests = [
        {
            description: 'Reports a rule violation when element align-content is set on flex container whose flex-wrap property\'s value is nowrap',
            computedStyles: new Map([
                [
                    'display',
                    'inline-flex'
                ],
                [
                    'flex-wrap',
                    'nowrap'
                ],
                [
                    'align-content',
                    'center'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.AlignContentValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation if flex-wrap is set to nowrap, but the element is not a flex container',
            computedStyles: new Map([
                [
                    'display',
                    'block'
                ],
                [
                    'flex-wrap',
                    'nowrap'
                ],
                [
                    'align-content',
                    'center'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.AlignContentValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `align-content`, validation passes when the element is a grid container',
            computedStyles: new Map([
                [
                    'align-content',
                    'center'
                ],
                [
                    'display',
                    'grid'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.AlignContentValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `align-content`, validation passes when the element is a block container',
            computedStyles: new Map([
                [
                    'align-content',
                    'center'
                ],
                [
                    'display',
                    'block'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.AlignContentValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `align-content`, validation does not pass when the element is a math container',
            computedStyles: new Map([
                [
                    'align-content',
                    'center'
                ],
                [
                    'display',
                    'block math'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.AlignContentValidator();
            },
            hintExpected: true
        },
        {
            description: 'Test `justify-content`, validation passes when the element is flex containers',
            computedStyles: new Map([
                [
                    'display',
                    'flex'
                ],
                [
                    'justify-content',
                    'flex-end'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexGridValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `justify-content`, validation passes when the element is grid containers',
            computedStyles: new Map([
                [
                    'display',
                    'grid'
                ],
                [
                    'justify-content',
                    'center'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexGridValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `place-content`, validation passes when the element is grid containers',
            computedStyles: new Map([
                [
                    'display',
                    'grid'
                ],
                [
                    'place-content',
                    'center'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexGridValidator();
            },
            hintExpected: false
        },
        {
            description: 'Test `align-items`, validation does not pass when the element is not flex containers or grid containers',
            computedStyles: new Map([
                [
                    'align-items',
                    'center'
                ],
                [
                    'display',
                    'block'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexGridValidator();
            },
            hintExpected: true
        },
        {
            description: 'Test `place-content`, validation does not pass when the element is not flex containers or grid containers',
            computedStyles: new Map([
                [
                    'display',
                    'block'
                ],
                [
                    'place-content',
                    'center'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexGridValidator();
            },
            hintExpected: true
        },
        {
            description: 'Reports a rule validation when flex properties are set to non-flex items',
            computedStyles: new Map([
                [
                    'flex',
                    '1'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'table'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexItemValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when flex properties are set to flex items',
            computedStyles: new Map([
                [
                    'flex',
                    '1'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'flex'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Passes the validation when flex container properties are set to flex container',
            computedStyles: new Map([
                [
                    'display',
                    'flex'
                ],
                [
                    'flex-direction',
                    'column'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexContainerValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when flex container properties are set to non-flex container',
            computedStyles: new Map([
                [
                    'display',
                    'block'
                ],
                [
                    'flex-direction',
                    'column'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexContainerValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when grid container properties are set to grid container',
            computedStyles: new Map([
                [
                    'display',
                    'grid'
                ],
                [
                    'grid',
                    '100px / 200px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.GridContainerValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when grid container properties are set to non-grid container',
            computedStyles: new Map([
                [
                    'display',
                    'flex'
                ],
                [
                    'grid',
                    '100px / 200px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.GridContainerValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when grid item properties are set to grid items',
            computedStyles: new Map([
                [
                    'grid-area',
                    'auto / auto / auto / auto'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'grid'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.GridItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when grid item properties are set to non-grid items',
            computedStyles: new Map([
                [
                    'grid-area',
                    'auto / auto / auto / auto'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'flex'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.GridItemValidator();
            },
            hintExpected: true
        },
        {
            description: 'Reports a rule validation when flex or grid item properties are set to non-flex or non-grid items',
            computedStyles: new Map([
                [
                    'align-self',
                    'baseline'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when flex or grid item properties are set to flex or grid items',
            computedStyles: new Map([
                [
                    'align-self',
                    'baseline'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'flex'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Passes the validation when flex or grid item properties are set to grid items',
            computedStyles: new Map([
                [
                    'align-self',
                    'baseline'
                ]
            ]),
            parentsComputedStyles: new Map([
                [
                    'display',
                    'grid'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Passes the validation when padding is not set to table elements',
            computedStyles: new Map([
                [
                    'display',
                    'block'
                ],
                [
                    'padding',
                    '15px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.PaddingValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when padding is set to table elements',
            computedStyles: new Map([
                [
                    'display',
                    'table-row'
                ],
                [
                    'padding',
                    '15px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.PaddingValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when top is set to non-static positioned element',
            computedStyles: new Map([
                [
                    'position',
                    'absolute'
                ],
                [
                    'top',
                    '20px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.PositionValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when top is set to static positioned elements',
            computedStyles: new Map([
                [
                    'position',
                    'static'
                ],
                [
                    'top',
                    '20px'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.PositionValidator();
            },
            hintExpected: true
        },
        {
            description: 'Passes the validation when z-index is set to non-static positioned element',
            computedStyles: new Map([
                [
                    'position',
                    'absolute'
                ],
                [
                    'z-index',
                    '5'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.ZIndexValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a rule validation when z-index is set to static positioned elements',
            computedStyles: new Map([
                [
                    'position',
                    'static'
                ],
                [
                    'z-index',
                    '5'
                ]
            ]),
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.ZIndexValidator();
            },
            hintExpected: true
        },
        {
            description: 'Validates width on an inline element',
            computedStyles: new Map([
                [
                    'display',
                    'inline'
                ],
                [
                    'width',
                    '100px'
                ]
            ]),
            nodeName: 'span',
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.SizingValidator();
            },
            hintExpected: true
        },
        {
            description: 'Validates height on an inline element',
            computedStyles: new Map([
                [
                    'display',
                    'inline'
                ],
                [
                    'height',
                    '100px'
                ]
            ]),
            nodeName: 'span',
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.SizingValidator();
            },
            hintExpected: true
        },
        {
            description: 'Does not validate width on an inline element that could be replaced',
            computedStyles: new Map([
                [
                    'display',
                    'inline'
                ],
                [
                    'width',
                    '100px'
                ]
            ]),
            nodeName: 'input',
            parentsComputedStyles: new Map(),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.SizingValidator();
            },
            hintExpected: false
        },
        {
            description: 'Shows a hint the order property on non-flex/grid items',
            computedStyles: new Map([
                [
                    'order',
                    '1'
                ]
            ]),
            nodeName: 'input',
            parentsComputedStyles: new Map([
                [
                    'display',
                    'block'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: true
        },
        {
            description: 'Does not show a hint for the order property on a flex item',
            computedStyles: new Map([
                [
                    'order',
                    '1'
                ]
            ]),
            nodeName: 'input',
            parentsComputedStyles: new Map([
                [
                    'display',
                    'flex'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Does not show a hint for the order property on a grid item',
            computedStyles: new Map([
                [
                    'order',
                    '1'
                ]
            ]),
            nodeName: 'input',
            parentsComputedStyles: new Map([
                [
                    'display',
                    'grid'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexOrGridItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Does not show a hint for a flex item without a parent',
            computedStyles: new Map([
                [
                    'flex',
                    'none'
                ]
            ]),
            nodeName: 'input',
            parentsComputedStyles: undefined,
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FlexItemValidator();
            },
            hintExpected: false
        },
        {
            description: 'Does not show a hint for a grid item with a z-index',
            computedStyles: new Map([
                [
                    'z-index',
                    '1'
                ]
            ]),
            nodeName: 'div',
            parentsComputedStyles: new Map([
                [
                    'display',
                    'grid'
                ]
            ]),
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.ZIndexValidator();
            },
            hintExpected: false
        },
        {
            description: 'Reports a hint for invalid font variation settings',
            computedStyles: new Map([
                [
                    'font-variation-settings',
                    '"wght" 251, "wdth" 59'
                ],
                [
                    'font-family',
                    'Family'
                ]
            ]),
            fontFaces: [
                new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSFontFace.CSSFontFace({
                    fontFamily: 'Family',
                    fontStyle: 'string',
                    fontVariant: 'string',
                    fontWeight: 'string',
                    fontStretch: 'string',
                    fontDisplay: 'string',
                    unicodeRange: 'string',
                    src: 'string',
                    platformFontFamily: 'Family',
                    fontVariationAxes: [
                        {
                            tag: 'wght',
                            name: 'Weight',
                            minValue: 10,
                            maxValue: 20,
                            defaultValue: 15
                        }
                    ]
                })
            ],
            nodeName: 'div',
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FontVariationSettingsValidator();
            },
            hintExpected: true
        },
        {
            description: 'Does not report a hint for valid font variation settings',
            computedStyles: new Map([
                [
                    'font-variation-settings',
                    '"wght" 15, "wdth" 59'
                ],
                [
                    'font-family',
                    'Family'
                ]
            ]),
            fontFaces: [
                new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSFontFace.CSSFontFace({
                    fontFamily: 'Family',
                    fontStyle: 'string',
                    fontVariant: 'string',
                    fontWeight: 'string',
                    fontStretch: 'string',
                    fontDisplay: 'string',
                    unicodeRange: 'string',
                    src: 'string',
                    platformFontFamily: 'Family',
                    fontVariationAxes: [
                        {
                            tag: 'wght',
                            name: 'Weight',
                            minValue: 10,
                            maxValue: 20,
                            defaultValue: 15
                        }
                    ]
                })
            ],
            nodeName: 'div',
            validator: function() {
                return new _elements_js__WEBPACK_IMPORTED_MODULE_2__.CSSRuleValidator.FontVariationSettingsValidator();
            },
            hintExpected: false
        }
    ];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var test = _step.value;
            it(test.description, function() {
                var actualResult = test.validator().getHint(test.validator().getApplicableProperties()[0], test.computedStyles, test.parentsComputedStyles, test.nodeName, test.fontFaces);
                if (test.hintExpected) {
                    assert.exists(actualResult);
                } else {
                    assert.isUndefined(actualResult);
                }
            });
        };
        for(var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
}); //# sourceMappingURL=CSSRuleValidator.test.js.map


}),
"./panels/elements/elements.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeUtils: function() { return /* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__; },
  AccessibilityTreeView: function() { return /* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__; },
  CSSRuleValidator: function() { return /* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__; },
  ClassesPaneWidget: function() { return /* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__; },
  ColorSwatchPopoverIcon: function() { return /* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__; },
  ComputedStyleModel: function() { return /* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  ComputedStyleWidget: function() { return /* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__; },
  DOMLinkifier: function() { return /* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__; },
  DOMPath: function() { return /* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__; },
  ElementStatePaneWidget: function() { return /* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__; },
  ElementsPanel: function() { return /* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__; },
  ElementsSidebarPane: function() { return /* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsTreeElement: function() { return /* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__; },
  ElementsTreeElementHighlighter: function() { return /* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__; },
  ElementsTreeOutline: function() { return /* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__; },
  EventListenersWidget: function() { return /* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__; },
  InspectElementModeController: function() { return /* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayersWidget: function() { return /* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__; },
  MarkerDecorator: function() { return /* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__; },
  MetricsSidebarPane: function() { return /* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__; },
  NodeStackTraceWidget: function() { return /* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__; },
  PlatformFontsWidget: function() { return /* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__; },
  PropertiesWidget: function() { return /* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__; },
  PropertyMatchers: function() { return /* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__; },
  PropertyRenderer: function() { return /* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__; },
  StyleEditorWidget: function() { return /* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__; },
  StylePropertiesSection: function() { return /* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__; },
  StylePropertyHighlighter: function() { return /* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__; },
  StylePropertyTreeElement: function() { return /* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__; },
  StylePropertyUtils: function() { return /* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__; },
  StylesSidebarPane: function() { return /* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__; },
  TopLayerContainer: function() { return /* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__; },
  WebCustomData: function() { return /* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__; }
});
/* harmony import */var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




























































 //# sourceMappingURL=elements.js.map


}),

}]);