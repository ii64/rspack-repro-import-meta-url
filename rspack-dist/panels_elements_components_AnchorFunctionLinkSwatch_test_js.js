"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_AnchorFunctionLinkSwatch_test_js"], {
"./panels/elements/components/AnchorFunctionLinkSwatch.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}





function createAnchorFunctionLinkSwatch() {
    var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new _components_js__WEBPACK_IMPORTED_MODULE_4__.AnchorFunctionLinkSwatch.AnchorFunctionLinkSwatch(_object_spread({
        onLinkActivate: function() {},
        onMouseEnter: function() {},
        onMouseLeave: function() {}
    }, props));
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('AnchorFunctionLinkSwatch', function() {
    describe('when identifier exists', function() {
        var linkSwatchDataStub;
        beforeEach(function() {
            linkSwatchDataStub = sinon.spy(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_3__.LinkSwatch.LinkSwatch.prototype, 'data', [
                'set'
            ]);
        });
        afterEach(function() {
            linkSwatchDataStub.set.restore();
        });
        it('should render a defined link when `anchorNode` is resolved correctly', function() {
            var component = createAnchorFunctionLinkSwatch({
                identifier: '--identifier',
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode)
            });
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isTrue(linkSwatchDataStub.set.calledWith({
                text: '--identifier',
                isDefined: true,
                jslogContext: 'anchor-link',
                onLinkActivate: sinon.match.func
            }));
        });
        it('should render an undefined link when `anchorNode` is not resolved correctly', function() {
            var component = createAnchorFunctionLinkSwatch({
                identifier: '--identifier',
                anchorNode: undefined
            });
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isTrue(linkSwatchDataStub.set.calledWith({
                text: '--identifier',
                isDefined: false,
                jslogContext: 'anchor-link',
                onLinkActivate: sinon.match.func
            }));
        });
        it('should call `onMouseEnter` when mouse enters linkSwatch', function() {
            var data = {
                identifier: '--identifier',
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                onMouseEnter: sinon.mock()
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var linkSwatch = component.shadowRoot.querySelector('devtools-link-swatch');
            linkSwatch.dispatchEvent(new Event('mouseenter'));
            assert.isTrue(data.onMouseEnter.calledOnce);
        });
        it('should call `onMouseLeave` when mouse leaves linkSwatch', function() {
            var data = {
                identifier: '--identifier',
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                onMouseLeave: sinon.mock()
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var linkSwatch = component.shadowRoot.querySelector('devtools-link-swatch');
            linkSwatch.dispatchEvent(new Event('mouseleave'));
            assert.isTrue(data.onMouseLeave.calledOnce);
        });
    });
    describe('when identifier does not exist', function() {
        it('should not render anything when `anchorNode` is not resolved correctly', function() {
            var data = {
                identifier: undefined,
                anchorNode: undefined
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            assert.isEmpty(component.shadowRoot.innerHTML);
        });
        it('should render icon link when `anchorNode` is resolved correctly', function() {
            var _component_shadowRoot;
            var data = {
                identifier: undefined,
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode)
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var icon = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('devtools-icon');
            assert.exists(icon);
        });
        it('should call `onMouseEnter` when mouse enters the icon', function() {
            var data = {
                identifier: undefined,
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                onMouseEnter: sinon.mock()
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var icon = component.shadowRoot.querySelector('devtools-icon');
            icon === null || icon === void 0 ? void 0 : icon.dispatchEvent(new Event('mouseenter'));
            assert.isTrue(data.onMouseEnter.calledOnce);
        });
        it('should call `onMouseLeave` when mouse leaves the icon', function() {
            var data = {
                identifier: undefined,
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                onMouseLeave: sinon.mock()
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var icon = component.shadowRoot.querySelector('devtools-icon');
            icon === null || icon === void 0 ? void 0 : icon.dispatchEvent(new Event('mouseleave'));
            assert.isTrue(data.onMouseLeave.calledOnce);
        });
        it('should call `onLinkActivate` when clicking on the icon', function() {
            var data = {
                identifier: undefined,
                anchorNode: sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode),
                onLinkActivate: sinon.mock()
            };
            var component = createAnchorFunctionLinkSwatch(data);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
            var icon = component.shadowRoot.querySelector('devtools-icon');
            icon === null || icon === void 0 ? void 0 : icon.dispatchEvent(new Event('click'));
            assert.isTrue(data.onLinkActivate.calledOnce);
        });
    });
}); //# sourceMappingURL=AnchorFunctionLinkSwatch.test.js.map


}),
"./panels/elements/components/Helper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  legacyNodeToElementsComponentsNode: function() { return legacyNodeToElementsComponentsNode; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var legacyNodeToElementsComponentsNode = function(node) {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: function(mode) {
            return node.highlight(mode);
        },
        clearHighlight: function() {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        getAttribute: node.getAttribute.bind(node)
    };
}; //# sourceMappingURL=Helper.js.map


}),
"./panels/elements/components/LayoutPaneUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LayoutPaneUtils.js.map


}),
"./panels/elements/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeNode: function() { return /* reexport module object */ _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AdornerManager: function() { return /* reexport module object */ _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  AdornerSettingsPane: function() { return /* reexport module object */ _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnchorFunctionLinkSwatch: function() { return /* reexport module object */ _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSHintDetailsView: function() { return /* reexport module object */ _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSPropertyDocsView: function() { return /* reexport module object */ _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSPropertyIconResolver: function() { return /* reexport module object */ _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSQuery: function() { return /* reexport module object */ _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSVariableValueView: function() { return /* reexport module object */ _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__; },
  ComputedStyleProperty: function() { return /* reexport module object */ _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__; },
  ComputedStyleTrace: function() { return /* reexport module object */ _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsBreadcrumbs: function() { return /* reexport module object */ _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__; },
  ElementsBreadcrumbsUtils: function() { return /* reexport module object */ _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__; },
  ElementsTreeExpandButton: function() { return /* reexport module object */ _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__; },
  Helper: function() { return /* reexport module object */ _Helper_js__WEBPACK_IMPORTED_MODULE_14__; },
  LayoutPane: function() { return /* reexport module object */ _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__; },
  LayoutPaneUtils: function() { return /* reexport module object */ _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__; },
  QueryContainer: function() { return /* reexport module object */ _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__; },
  StylePropertyEditor: function() { return /* reexport module object */ _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__; }
});
/* harmony import */var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./panels/elements/components/AccessibilityTreeNode.js");
/* harmony import */var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./panels/elements/components/AdornerManager.js");
/* harmony import */var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./panels/elements/components/AdornerSettingsPane.js");
/* harmony import */var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./panels/elements/components/AnchorFunctionLinkSwatch.js");
/* harmony import */var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./panels/elements/components/ComputedStyleProperty.js");
/* harmony import */var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./panels/elements/components/ComputedStyleTrace.js");
/* harmony import */var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./panels/elements/components/CSSHintDetailsView.js");
/* harmony import */var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./panels/elements/components/CSSPropertyDocsView.js");
/* harmony import */var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./panels/elements/components/CSSQuery.js");
/* harmony import */var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./panels/elements/components/CSSVariableValueView.js");
/* harmony import */var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./panels/elements/components/ElementsBreadcrumbs.js");
/* harmony import */var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
/* harmony import */var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./panels/elements/components/ElementsTreeExpandButton.js");
/* harmony import */var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./panels/elements/components/Helper.js");
/* harmony import */var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./panels/elements/components/LayoutPane.js");
/* harmony import */var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./panels/elements/components/LayoutPaneUtils.js");
/* harmony import */var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./panels/elements/components/QueryContainer.js");
/* harmony import */var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./panels/elements/components/StylePropertyEditor.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=components.js.map


}),

}]);