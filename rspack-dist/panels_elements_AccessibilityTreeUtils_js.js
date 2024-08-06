"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_AccessibilityTreeUtils_js"], {
"./panels/elements/AccessibilityTreeUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  accessibilityNodeRenderer: function() { return accessibilityNodeRenderer; },
  getNodeAndAncestorsFromDOMNode: function() { return getNodeAndAncestorsFromDOMNode; },
  getNodeId: function() { return getNodeId; },
  getRootNode: function() { return getRootNode; },
  sdkNodeToAXTreeNodes: function() { return sdkNodeToAXTreeNodes; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/components.js */ "./panels/elements/components/components.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<",
        " .data=",
        "></",
        ">"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}



function isLeafNode(node) {
    var _node_role;
    return node.numChildren() === 0 && ((_node_role = node.role()) === null || _node_role === void 0 ? void 0 : _node_role.value) !== 'Iframe';
}
function getModel(frameId) {
    var frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getFrame(frameId);
    var model = frame === null || frame === void 0 ? void 0 : frame.resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel);
    if (!model) {
        throw Error('Could not instantiate model for frameId');
    }
    return model;
}
function getRootNode(frameId) {
    return _getRootNode.apply(this, arguments);
}
function _getRootNode() {
    _getRootNode = _async_to_generator(function(frameId) {
        var model, root;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    model = getModel(frameId);
                    return [
                        4,
                        model.requestRootNode(frameId)
                    ];
                case 1:
                    root = _state.sent();
                    if (!root) {
                        throw Error('No accessibility root for frame');
                    }
                    return [
                        2,
                        root
                    ];
            }
        });
    });
    return _getRootNode.apply(this, arguments);
}
function getFrameIdForNodeOrDocument(node) {
    var frameId;
    if (_instanceof(node, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMDocument)) {
        var _node_body;
        frameId = (_node_body = node.body) === null || _node_body === void 0 ? void 0 : _node_body.frameId();
    } else {
        frameId = node.frameId();
    }
    if (!frameId) {
        throw Error('No frameId for DOM node');
    }
    return frameId;
}
function getNodeAndAncestorsFromDOMNode(domNode) {
    return _getNodeAndAncestorsFromDOMNode.apply(this, arguments);
}
function _getNodeAndAncestorsFromDOMNode() {
    _getNodeAndAncestorsFromDOMNode = _async_to_generator(function(domNode) {
        var _SDK_FrameManager_FrameManager_instance_getOutermostFrame, frameId, model, result, outermostFrameId, _result, _SDK_FrameManager_FrameManager_instance_getFrame, node, model1, ancestors;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    frameId = getFrameIdForNodeOrDocument(domNode);
                    model = getModel(frameId);
                    return [
                        4,
                        model.requestAndLoadSubTreeToNode(domNode)
                    ];
                case 1:
                    result = _state.sent();
                    if (!result) {
                        throw Error('Could not retrieve accessibility node for inspected DOM node');
                    }
                    outermostFrameId = (_SDK_FrameManager_FrameManager_instance_getOutermostFrame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getOutermostFrame()) === null || _SDK_FrameManager_FrameManager_instance_getOutermostFrame === void 0 ? void 0 : _SDK_FrameManager_FrameManager_instance_getOutermostFrame.id;
                    if (!outermostFrameId) {
                        return [
                            2,
                            result
                        ];
                    }
                    _state.label = 2;
                case 2:
                    if (!(frameId !== outermostFrameId)) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        (_SDK_FrameManager_FrameManager_instance_getFrame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.FrameManager.FrameManager.instance().getFrame(frameId)) === null || _SDK_FrameManager_FrameManager_instance_getFrame === void 0 ? void 0 : _SDK_FrameManager_FrameManager_instance_getFrame.getOwnerDOMNodeOrDocument()
                    ];
                case 3:
                    node = _state.sent();
                    if (!node) {
                        return [
                            3,
                            5
                        ];
                    }
                    frameId = getFrameIdForNodeOrDocument(node);
                    model1 = getModel(frameId);
                    return [
                        4,
                        model1.requestAndLoadSubTreeToNode(node)
                    ];
                case 4:
                    ancestors = _state.sent();
                    (_result = result).push.apply(_result, _to_consumable_array(ancestors || []));
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _getNodeAndAncestorsFromDOMNode.apply(this, arguments);
}
function getChildren(node) {
    return _getChildren.apply(this, arguments);
}
function _getChildren() {
    _getChildren = _async_to_generator(function(node) {
        var _node_role, _node_deferredDOMNode, domNode, frameId, localRoot;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(((_node_role = node.role()) === null || _node_role === void 0 ? void 0 : _node_role.value) === 'Iframe')) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        (_node_deferredDOMNode = node.deferredDOMNode()) === null || _node_deferredDOMNode === void 0 ? void 0 : _node_deferredDOMNode.resolvePromise()
                    ];
                case 1:
                    domNode = _state.sent();
                    if (!domNode) {
                        throw new Error('Could not find corresponding DOMNode');
                    }
                    frameId = domNode.frameOwnerFrameId();
                    if (!frameId) {
                        throw Error('No owner frameId on iframe node');
                    }
                    return [
                        4,
                        getRootNode(frameId)
                    ];
                case 2:
                    localRoot = _state.sent();
                    return [
                        2,
                        [
                            localRoot
                        ]
                    ];
                case 3:
                    return [
                        2,
                        node.accessibilityModel().requestAXChildren(node.id(), node.getFrameId() || undefined)
                    ];
            }
        });
    });
    return _getChildren.apply(this, arguments);
}
function sdkNodeToAXTreeNodes(sdkNode) {
    return _sdkNodeToAXTreeNodes.apply(this, arguments);
}
function _sdkNodeToAXTreeNodes() {
    _sdkNodeToAXTreeNodes = _async_to_generator(function(sdkNode) {
        var treeNodeData;
        return _ts_generator(this, function(_state) {
            treeNodeData = sdkNode;
            if (isLeafNode(sdkNode)) {
                return [
                    2,
                    [
                        {
                            treeNodeData: treeNodeData,
                            id: getNodeId(sdkNode)
                        }
                    ]
                ];
            }
            return [
                2,
                [
                    {
                        treeNodeData: treeNodeData,
                        children: /*#__PURE__*/ _async_to_generator(function() {
                            var childNodes, childTreeNodes;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            getChildren(sdkNode)
                                        ];
                                    case 1:
                                        childNodes = _state.sent();
                                        return [
                                            4,
                                            Promise.all(childNodes.map(function(childNode) {
                                                return sdkNodeToAXTreeNodes(childNode);
                                            }))
                                        ];
                                    case 2:
                                        childTreeNodes = _state.sent();
                                        return [
                                            2,
                                            childTreeNodes.flat(1)
                                        ];
                                }
                            });
                        }),
                        id: getNodeId(sdkNode)
                    }
                ]
            ];
        });
    });
    return _sdkNodeToAXTreeNodes.apply(this, arguments);
}
function accessibilityNodeRenderer(node) {
    var _sdkNode_name, _sdkNode_role;
    var tag = _components_components_js__WEBPACK_IMPORTED_MODULE_1__.AccessibilityTreeNode.AccessibilityTreeNode.litTagName;
    var sdkNode = node.treeNodeData;
    var name = ((_sdkNode_name = sdkNode.name()) === null || _sdkNode_name === void 0 ? void 0 : _sdkNode_name.value) || '';
    var role = ((_sdkNode_role = sdkNode.role()) === null || _sdkNode_role === void 0 ? void 0 : _sdkNode_role.value) || '';
    var properties = sdkNode.properties() || [];
    var ignored = sdkNode.ignored();
    var id = getNodeId(sdkNode);
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject(), tag, {
        name: name,
        role: role,
        ignored: ignored,
        properties: properties,
        id: id
    }, tag);
}
function getNodeId(node) {
    return node.getFrameId() + '#' + node.id();
} //# sourceMappingURL=AccessibilityTreeUtils.js.map


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