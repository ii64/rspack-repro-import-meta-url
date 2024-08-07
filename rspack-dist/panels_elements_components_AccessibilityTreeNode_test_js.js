"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_AccessibilityTreeNode_test_js"], {
"./panels/elements/components/AccessibilityTreeNode.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('AccessibilityTreeNode', function() {
    it('renders role and name correctly for unignored nodes', /*#__PURE__*/ _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.AccessibilityTreeNode.AccessibilityTreeNode();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    component.data = {
                        name: 'NodeName',
                        role: 'NodeRole',
                        ignored: false,
                        properties: [],
                        id: 'NodeId'
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(component.shadowRoot.textContent, 'NodeRole\xa0"NodeName"');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders ignored nodes as "ignored"', /*#__PURE__*/ _async_to_generator(function() {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.AccessibilityTreeNode.AccessibilityTreeNode();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    component.data = {
                        name: 'NodeName',
                        role: 'NodeRole',
                        ignored: true,
                        properties: [],
                        id: 'NodeId'
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(component.shadowRoot.textContent, 'Ignored');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=AccessibilityTreeNode.test.js.map


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