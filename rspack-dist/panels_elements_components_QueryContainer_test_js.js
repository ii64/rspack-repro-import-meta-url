"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_QueryContainer_test_js"], {
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
"./panels/elements/components/QueryContainer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}




var nodeAttributes = new Map([
    [
        'id',
        'container'
    ],
    [
        'class',
        'class-1 class-2'
    ]
]);
var FAKE_LEGACY_SDK_DOM_NODE = {};
var containerTemplate = {
    parentNode: null,
    nodeType: Node.ELEMENT_NODE,
    id: 1,
    pseudoType: '',
    shadowRootType: '',
    nodeName: 'body',
    nodeNameNicelyCased: 'body',
    legacyDomNode: FAKE_LEGACY_SDK_DOM_NODE,
    highlightNode: function() {},
    clearHighlight: function() {},
    getAttribute: function(x) {
        return nodeAttributes.get(x) || '';
    }
};
var assertContainerContent = function(container, expectedContent) {
    var nodeText = container.shadowRoot.querySelector("".concat(_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName.value));
    if (!nodeText || !nodeText.shadowRoot) {
        assert.fail('node text element and its shadowRoot should exist');
        return;
    }
    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.assertNodeTextContent)(nodeText, expectedContent);
};
describe('QueryContainer', function() {
    it('renders an unnamed query container correctly', function() {
        var _component_shadowRoot_querySelector, _component_shadowRoot;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        var clickListener = sinon.spy();
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: clickListener
        };
        assertContainerContent(component, 'body#container.class-1.class-2');
        (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : (_component_shadowRoot_querySelector = _component_shadowRoot.querySelector('a')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.click();
        assert.strictEqual(clickListener.callCount, 1, 'container link click listener should be triggered by clicking');
    });
    it('renders a named query container correctly', function() {
        var _component_shadowRoot;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        var clickListener = sinon.spy();
        var onHighlightNode = sinon.spy();
        var onClearHighlight = sinon.spy();
        component.data = {
            container: _object_spread_props(_object_spread({}, containerTemplate), {
                highlightNode: onHighlightNode,
                clearHighlight: onClearHighlight
            }),
            queryName: 'named-container',
            onContainerLinkClick: clickListener
        };
        assertContainerContent(component, 'named-container');
        var containerLink = (_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : _component_shadowRoot.querySelector('a');
        if (!containerLink) {
            assert.fail('container link element should exist');
            return;
        }
        containerLink.click();
        assert.strictEqual(clickListener.callCount, 1, 'container link click listener should be triggered by clicking');
        containerLink.dispatchEvent(new Event('mouseenter'));
        assert.strictEqual(onHighlightNode.callCount, 1, 'onHighlightNode callback should be triggered by mouseenter');
        containerLink.dispatchEvent(new Event('mouseleave'));
        assert.strictEqual(onHighlightNode.callCount, 1, 'onClearHighlight callback should be triggered by mouseleave');
    });
    it('dispatches QueriedSizeRequestedEvent when hovered correctly', function() {
        var _component_shadowRoot_querySelector;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        var queriedSizeRequestedListener = sinon.spy();
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: function() {}
        };
        component.addEventListener('queriedsizerequested', queriedSizeRequestedListener);
        (_component_shadowRoot_querySelector = component.shadowRoot.querySelector('a')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.dispatchEvent(new Event('mouseenter'));
        assert.strictEqual(queriedSizeRequestedListener.callCount, 1, 'queried size requested listener should be triggered by hovering');
    });
    it('renders queried size details correctly', function() {
        var _component_shadowRoot_querySelector;
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.QueryContainer.QueryContainer();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(component);
        component.data = {
            container: containerTemplate,
            onContainerLinkClick: function() {}
        };
        (_component_shadowRoot_querySelector = component.shadowRoot.querySelector('a')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.dispatchEvent(new Event('mouseenter'));
        component.updateContainerQueriedSizeDetails({
            physicalAxis: "" /* SDK.CSSContainerQuery.PhysicalAxis.None */ ,
            queryAxis: "" /* SDK.CSSContainerQuery.QueryAxis.None */ ,
            width: '500px',
            height: '300px'
        });
        var nonExistentDetailsElement = component.shadowRoot.querySelector('.queried-size-details');
        assert.strictEqual(nonExistentDetailsElement, null, 'query details without any axis should not be rendered');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: "Horizontal" /* SDK.CSSContainerQuery.PhysicalAxis.Horizontal */ ,
            queryAxis: "inline-size" /* SDK.CSSContainerQuery.QueryAxis.Inline */ ,
            width: '500px'
        });
        var detailsElement = component.shadowRoot.querySelector('.queried-size-details');
        assert.strictEqual(detailsElement === null || detailsElement === void 0 ? void 0 : detailsElement.innerText, '(inline-size) 500px', 'queried size details are not correct');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: "Horizontal" /* SDK.CSSContainerQuery.PhysicalAxis.Horizontal */ ,
            queryAxis: "block-size" /* SDK.CSSContainerQuery.QueryAxis.Block */ ,
            width: '200px'
        });
        assert.strictEqual(detailsElement === null || detailsElement === void 0 ? void 0 : detailsElement.innerText, '(block-size) 200px', 'queried size details are not correct');
        component.updateContainerQueriedSizeDetails({
            physicalAxis: "Both" /* SDK.CSSContainerQuery.PhysicalAxis.Both */ ,
            queryAxis: "size" /* SDK.CSSContainerQuery.QueryAxis.Both */ ,
            width: '500px',
            height: '300px'
        });
        assert.strictEqual(detailsElement === null || detailsElement === void 0 ? void 0 : detailsElement.innerText, '(size) width: 500px height: 300px', 'queried size details are not correct');
    });
}); //# sourceMappingURL=QueryContainer.test.js.map


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