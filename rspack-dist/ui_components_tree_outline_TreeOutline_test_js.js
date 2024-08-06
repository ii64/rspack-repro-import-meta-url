"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_tree_outline_TreeOutline_test_js"], {
"./ui/components/tree_outline/TreeOutline.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<h2 class="item">',
        ":</h2>",
        ""
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<h2 class="top-node">',
        "</h2>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '<h2 class="top-node">',
        ". Expanded: ",
        "</h2>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}




var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function renderTreeOutline(_) {
    return _renderTreeOutline.apply(this, arguments);
}
function _renderTreeOutline() {
    _renderTreeOutline = _async_to_generator(function(param) {
        var tree, defaultRenderer, filter, component, data;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tree = param.tree, defaultRenderer = param.defaultRenderer, filter = param.filter;
                    component = new _tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline();
                    data = {
                        tree: tree,
                        defaultRenderer: defaultRenderer || function(node) {
                            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), node.treeNodeData);
                        },
                        filter: filter
                    };
                    component.data = data;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        {
                            component: component,
                            shadowRoot: component.shadowRoot
                        }
                    ];
            }
        });
    });
    return _renderTreeOutline.apply(this, arguments);
}
function waitForRenderedTreeNodeCount(shadowRoot, expectedNodeCount) {
    return _waitForRenderedTreeNodeCount.apply(this, arguments);
}
function _waitForRenderedTreeNodeCount() {
    _waitForRenderedTreeNodeCount = /**
 * Wait for a certain number of children are rendered. We need this as the
 * component uses LitHtml's until directive, which is async and not within the
 * render coordinator's control.
 */ _async_to_generator(function(shadowRoot, expectedNodeCount) {
        var actualNodeCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    actualNodeCount = shadowRoot.querySelectorAll('li[role="treeitem"]').length;
                    if (actualNodeCount === expectedNodeCount) {
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        new Promise(function(resolve) {
                            requestAnimationFrame(/*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                waitForRenderedTreeNodeCount(shadowRoot, expectedNodeCount)
                                            ];
                                        case 1:
                                            _state.sent();
                                            resolve();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }));
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _waitForRenderedTreeNodeCount.apply(this, arguments);
}
function getFocusableTreeNode(shadowRoot) {
    var focusableNode = shadowRoot.querySelector('li[role="treeitem"][tabindex="0"]');
    if (!focusableNode) {
        throw new Error('Could not find focused node in Tree shadow root');
    }
    return focusableNode;
}
/*
The structure represented by basicTreeData is:

- Offices
  - Europe
    - UK
      - LON
        - 6PS
        - CSG
        - BEL
    - Germany
      - MUC
      - BER
- Products
  - Chrome
  - YouTube
  - Drive
  - Calendar
*/ // These node is pulled out as we test expandAndSelectTreeNode and getPathToTreeNode with them.
var nodeBelgraveHouse = {
    treeNodeData: 'BEL',
    id: 'BEL'
};
var nodeLondon = {
    treeNodeData: 'LON',
    id: 'LON',
    children: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                [
                    {
                        treeNodeData: '6PS',
                        id: '6PS'
                    },
                    {
                        treeNodeData: 'CSG',
                        id: 'CSG'
                    },
                    nodeBelgraveHouse
                ]
            ];
        });
    })
};
var nodeUK = {
    treeNodeData: 'UK',
    id: 'UK',
    children: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                [
                    nodeLondon
                ]
            ];
        });
    })
};
var nodeEurope = {
    treeNodeData: 'Europe',
    id: 'Europe',
    children: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                [
                    nodeUK,
                    {
                        treeNodeData: 'Germany',
                        id: 'Germany',
                        children: /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    [
                                        {
                                            treeNodeData: 'MUC',
                                            id: 'MUC'
                                        },
                                        {
                                            treeNodeData: 'BER',
                                            id: 'BER'
                                        }
                                    ]
                                ];
                            });
                        })
                    }
                ]
            ];
        });
    })
};
var nodeOffices = {
    treeNodeData: 'Offices',
    id: 'Offices',
    children: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                [
                    nodeEurope
                ]
            ];
        });
    })
};
var basicTreeData = [
    nodeOffices,
    {
        treeNodeData: 'Products',
        id: '1',
        children: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    [
                        {
                            treeNodeData: 'Chrome',
                            id: '2'
                        },
                        {
                            treeNodeData: 'YouTube',
                            id: '3'
                        },
                        {
                            treeNodeData: 'Drive',
                            id: '4'
                        },
                        {
                            treeNodeData: 'Calendar',
                            id: '5'
                        }
                    ]
                ];
            });
        })
    }
];
/*
The structure represented by nodeAustralia is:

- Australia
  - SA
    - Adelaide
      - Toorak Gardens
      - Woodville South
      - Gawler
  - NSW
    - Glebe
    - Newtown
    - Camperdown
*/ var nodeAustralia = {
    treeNodeData: 'Australia',
    id: 'australia',
    children: /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                [
                    {
                        treeNodeData: 'SA',
                        id: 'sa',
                        children: /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    [
                                        {
                                            treeNodeData: 'Adelaide',
                                            id: 'adelaide',
                                            children: /*#__PURE__*/ _async_to_generator(function() {
                                                return _ts_generator(this, function(_state) {
                                                    return [
                                                        2,
                                                        [
                                                            {
                                                                treeNodeData: 'Toorak Gardens',
                                                                id: 'toorak'
                                                            },
                                                            {
                                                                treeNodeData: 'Woodville South',
                                                                id: 'woodville'
                                                            },
                                                            {
                                                                treeNodeData: 'Gawler',
                                                                id: 'gawler'
                                                            }
                                                        ]
                                                    ];
                                                });
                                            })
                                        }
                                    ]
                                ];
                            });
                        })
                    },
                    {
                        treeNodeData: 'NSW',
                        id: 'nsw',
                        children: /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                return [
                                    2,
                                    [
                                        {
                                            treeNodeData: 'Glebe',
                                            id: 'glebe'
                                        },
                                        {
                                            treeNodeData: 'Newtown',
                                            id: 'newtown'
                                        },
                                        {
                                            treeNodeData: 'Camperdown',
                                            id: 'camperdown'
                                        }
                                    ]
                                ];
                            });
                        })
                    }
                ]
            ];
        });
    })
};
var NODE_COUNT_BASIC_DATA_FULLY_EXPANDED = 15;
var NODE_COUNT_BASIC_DATA_DEFAULT_EXPANDED = 12;
/**
 * Converts the nodes into a tree structure that we can assert against.
 */ function visibleNodesToTree(shadowRoot) {
    var tree = [];
    function buildTreeNode(node) {
        var item = {
            renderedKey: nodeKeyInnerHTML(node)
        };
        if (node.getAttribute('aria-expanded') && node.getAttribute('aria-expanded') === 'true') {
            item.children = [];
            var childNodes = node.querySelectorAll(':scope > ul[role="group"]>li');
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var child = _step.value;
                    item.children.push(buildTreeNode(child));
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
        return item;
    }
    var rootNodes = shadowRoot.querySelectorAll('ul[role="tree"]>li');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = rootNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var root = _step.value;
            tree.push(buildTreeNode(root));
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
    return tree;
}
function treeNodeKeyText(node) {
    var keyNode = node.querySelector('[data-node-key]');
    if (!keyNode) {
        throw new Error('Found tree node without a key within it.');
    }
    return keyNode.getAttribute('data-node-key') || '';
}
function nodeKeyInnerHTML(node) {
    var keyNode = node.querySelector('[data-node-key]');
    if (!keyNode) {
        throw new Error('Found tree node without a key within it.');
    }
    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.stripLitHtmlCommentNodes)(keyNode.innerHTML);
}
function getVisibleTreeNodeByText(shadowRoot, text) {
    var nodes = shadowRoot.querySelectorAll('li[role="treeitem"]');
    var matchingNode = Array.from(nodes).find(function(node) {
        return treeNodeKeyText(node) === text;
    });
    if (!matchingNode) {
        throw new Error("Could not find tree item with text ".concat(text, "."));
    }
    return matchingNode;
}
describe('TreeOutline', function() {
    it('renders with all non-root nodes hidden by default', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, visibleItems, itemText1, itemText2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    visibleItems = shadowRoot.querySelectorAll('li[role="treeitem"]');
                    assert.lengthOf(visibleItems, 2);
                    itemText1 = treeNodeKeyText(visibleItems[0]);
                    itemText2 = treeNodeKeyText(visibleItems[1]);
                    assert.strictEqual(itemText1, 'Offices');
                    assert.strictEqual(itemText2, 'Products');
                    return [
                        2
                    ];
            }
        });
    }));
    it('expands a node when the arrow icon is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, rootNode, arrowIcon, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    arrowIcon = rootNode.querySelector('.arrow-icon');
                    assert.instanceOf(arrowIcon, HTMLSpanElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(arrowIcon);
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 3)
                    ];
                case 2:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices',
                            children: [
                                {
                                    renderedKey: 'Europe'
                                }
                            ]
                        },
                        {
                            renderedKey: 'Products'
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not expand nodes when clicking outside of the arrow by default', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, rootNode, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(rootNode);
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 2)
                    ];
                case 2:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices'
                        },
                        {
                            renderedKey: 'Products'
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can be configured to expand nodes when any part of the node is clicked', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, rootNode, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    component.setAttribute('clickabletitle', '');
                    rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(rootNode);
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 3)
                    ];
                case 2:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices',
                            children: [
                                {
                                    renderedKey: 'Europe'
                                }
                            ]
                        },
                        {
                            renderedKey: 'Products'
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('nowrap attribute', function() {
        it('sets the white-space to initial by default', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, rootNode, key, whiteSpaceValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        key = rootNode.querySelector('[data-node-key]');
                        assert.instanceOf(key, HTMLElement);
                        whiteSpaceValue = window.getComputedStyle(key).getPropertyValue('white-space');
                        assert.strictEqual(whiteSpaceValue, 'normal');
                        return [
                            2
                        ];
                }
            });
        }));
        it('will set white-space: nowrap if the attribute is set', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, rootNode, key, whiteSpaceValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        component.setAttribute('nowrap', '');
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        key = rootNode.querySelector('[data-node-key]');
                        assert.instanceOf(key, HTMLElement);
                        whiteSpaceValue = window.getComputedStyle(key).getPropertyValue('white-space');
                        assert.strictEqual(whiteSpaceValue, 'nowrap');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('toplevelbordercolor attribute', function() {
        it('by default the nodes are not given a border', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, rootNode, borderTopValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        borderTopValue = window.getComputedStyle(rootNode).getPropertyValue('border-top');
                        // Odd assertion: this is the default borderTop the browser "applies" if none is set.
                        assert.strictEqual(borderTopValue, '0px none rgb(0, 0, 0)');
                        return [
                            2
                        ];
                }
            });
        }));
        it('gives the nodes a border if the attribute is set', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, rootNode, borderTopValue;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        component.setAttribute('toplevelbordercolor', 'rgb(255, 0, 0)');
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        borderTopValue = window.getComputedStyle(rootNode).getPropertyValue('border-top');
                        assert.strictEqual(borderTopValue, '1px solid rgb(255, 0, 0)');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('can take nodes with a custom key type', /*#__PURE__*/ _async_to_generator(function() {
        var customRenderer, tinyTree, _ref, component, shadowRoot, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    customRenderer = function(node) {
                        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject1(), node.treeNodeData.property.toUpperCase(), node.treeNodeData.value);
                    };
                    tinyTree = [
                        {
                            treeNodeData: {
                                property: 'name',
                                value: 'jack'
                            },
                            id: '0',
                            renderer: customRenderer,
                            children: /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        [
                                            {
                                                renderer: customRenderer,
                                                id: '1',
                                                treeNodeData: {
                                                    property: 'locationGroupName',
                                                    value: 'EMEA'
                                                }
                                            },
                                            {
                                                renderer: customRenderer,
                                                id: '2',
                                                treeNodeData: {
                                                    property: 'locationGroupName',
                                                    value: 'USA'
                                                }
                                            },
                                            {
                                                renderer: customRenderer,
                                                id: '3',
                                                treeNodeData: {
                                                    property: 'locationGroupName',
                                                    value: 'APAC'
                                                }
                                            }
                                        ]
                                    ];
                                });
                            })
                        }
                    ];
                    return [
                        4,
                        renderTreeOutline({
                            tree: tinyTree
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 4)
                    ];
                case 3:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: '<h2 class="item">NAME:</h2>jack',
                            children: [
                                {
                                    renderedKey: '<h2 class="item">LOCATIONGROUPNAME:</h2>EMEA'
                                },
                                {
                                    renderedKey: '<h2 class="item">LOCATIONGROUPNAME:</h2>USA'
                                },
                                {
                                    renderedKey: '<h2 class="item">LOCATIONGROUPNAME:</h2>APAC'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can recursively expand the tree, going 3 levels deep by default', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 12)
                    ];
                case 3:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices',
                            children: [
                                {
                                    renderedKey: 'Europe',
                                    children: [
                                        {
                                            renderedKey: 'UK',
                                            children: [
                                                {
                                                    renderedKey: 'LON'
                                                }
                                            ]
                                        },
                                        {
                                            renderedKey: 'Germany',
                                            children: [
                                                {
                                                    renderedKey: 'MUC'
                                                },
                                                {
                                                    renderedKey: 'BER'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            renderedKey: 'Products',
                            children: [
                                {
                                    renderedKey: 'Chrome'
                                },
                                {
                                    renderedKey: 'YouTube'
                                },
                                {
                                    renderedKey: 'Drive'
                                },
                                {
                                    renderedKey: 'Calendar'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    describe('expandToAndSelectTreeNode', function() {
        it('expands the relevant part of the tree to reveal the given node', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, visibleTree;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandToAndSelectTreeNode(nodeBelgraveHouse)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, 9)
                        ];
                    case 3:
                        _state.sent();
                        visibleTree = visibleNodesToTree(shadowRoot);
                        // The tree is expanded down to include "BEL" but the rest of the tree is still collapsed.
                        assert.deepEqual(visibleTree, [
                            {
                                renderedKey: 'Offices',
                                children: [
                                    {
                                        renderedKey: 'Europe',
                                        children: [
                                            {
                                                renderedKey: 'UK',
                                                children: [
                                                    {
                                                        renderedKey: 'LON',
                                                        children: [
                                                            {
                                                                renderedKey: '6PS'
                                                            },
                                                            {
                                                                renderedKey: 'CSG'
                                                            },
                                                            {
                                                                renderedKey: 'BEL'
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                renderedKey: 'Germany'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                renderedKey: 'Products'
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('selects the given node once the tree has been expanded', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandToAndSelectTreeNode(nodeBelgraveHouse)
                        ];
                    case 2:
                        _state.sent();
                        // Wait for the tree to be expanded
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, 9)
                        ];
                    case 3:
                        _state.sent();
                        // Wait for the coordinator to have called focus() on the right node
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'BEL'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('can recursively collapse all children of a node', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, europeNode, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                    ];
                case 3:
                    _state.sent();
                    europeNode = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                    return [
                        4,
                        component.collapseChildrenOfNode(europeNode)
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 7)
                    ];
                case 5:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices',
                            children: [
                                {
                                    renderedKey: 'Europe'
                                }
                            ]
                        },
                        {
                            renderedKey: 'Products',
                            children: [
                                {
                                    renderedKey: 'Chrome'
                                },
                                {
                                    renderedKey: 'YouTube'
                                },
                                {
                                    renderedKey: 'Drive'
                                },
                                {
                                    renderedKey: 'Calendar'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can collapse all nodes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: basicTreeData
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        component.collapseAllNodes()
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 2)
                    ];
                case 5:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices'
                        },
                        {
                            renderedKey: 'Products'
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('caches async child nodes and only fetches them once', /*#__PURE__*/ _async_to_generator(function() {
        var fetchChildrenSpy, tinyTree, _ref, component, shadowRoot, officesNode, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fetchChildrenSpy = sinon.spy(/*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                [
                                    {
                                        treeNodeData: 'EMEA',
                                        id: '1'
                                    },
                                    {
                                        treeNodeData: 'USA',
                                        id: '2'
                                    },
                                    {
                                        treeNodeData: 'APAC',
                                        id: '3'
                                    }
                                ]
                            ];
                        });
                    }));
                    tinyTree = [
                        {
                            treeNodeData: 'Offices',
                            id: '0',
                            children: fetchChildrenSpy
                        }
                    ];
                    return [
                        4,
                        renderTreeOutline({
                            tree: tinyTree
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    // Expand it, then collapse it, then expand it again
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 4)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(fetchChildrenSpy.callCount, 1);
                    officesNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    return [
                        4,
                        component.collapseChildrenOfNode(officesNode)
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 1)
                    ];
                case 5:
                    _state.sent();
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 4)
                    ];
                case 7:
                    _state.sent();
                    // Make sure that we only fetched the children once despite expanding the
                    // Tree twice.
                    assert.strictEqual(fetchChildrenSpy.callCount, 1);
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Offices',
                            children: [
                                {
                                    renderedKey: 'EMEA'
                                },
                                {
                                    renderedKey: 'USA'
                                },
                                {
                                    renderedKey: 'APAC'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows a node to have a custom renderer', /*#__PURE__*/ _async_to_generator(function() {
        var tinyTree, _ref, component, shadowRoot, officeNode, key, renderedKey;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tinyTree = [
                        {
                            treeNodeData: 'Offices',
                            id: 'Offices',
                            renderer: function(node) {
                                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject2(), node.treeNodeData.toUpperCase());
                            },
                            children: /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        [
                                            {
                                                treeNodeData: 'EMEA',
                                                id: 'EMEA'
                                            },
                                            {
                                                treeNodeData: 'USA',
                                                id: 'USA'
                                            },
                                            {
                                                treeNodeData: 'APAC',
                                                id: 'APAC'
                                            }
                                        ]
                                    ];
                                });
                            })
                        }
                    ];
                    return [
                        4,
                        renderTreeOutline({
                            tree: tinyTree
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 4)
                    ];
                case 3:
                    _state.sent();
                    officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    key = officeNode.querySelector('[data-node-key]');
                    assert.instanceOf(key, HTMLElement);
                    renderedKey = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.stripLitHtmlCommentNodes)(key.innerHTML);
                    assert.strictEqual(renderedKey, '<h2 class="top-node">OFFICES</h2>');
                    return [
                        2
                    ];
            }
        });
    }));
    it('passes the custom renderer the expanded state', /*#__PURE__*/ _async_to_generator(function() {
        var tinyTree, _ref, component, shadowRoot, officeNode, key, renderedKey;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    tinyTree = [
                        {
                            treeNodeData: 'Offices',
                            id: 'Offices',
                            renderer: function(node, param) {
                                var isExpanded = param.isExpanded;
                                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject3(), node.treeNodeData.toUpperCase(), isExpanded);
                            },
                            children: /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        [
                                            {
                                                treeNodeData: 'EMEA',
                                                id: 'EMEA'
                                            },
                                            {
                                                treeNodeData: 'USA',
                                                id: 'USA'
                                            },
                                            {
                                                treeNodeData: 'APAC',
                                                id: 'APAC'
                                            }
                                        ]
                                    ];
                                });
                            })
                        }
                    ];
                    return [
                        4,
                        renderTreeOutline({
                            tree: tinyTree
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                    key = officeNode.querySelector('[data-node-key]');
                    assert.instanceOf(key, HTMLElement);
                    renderedKey = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.stripLitHtmlCommentNodes)(key.innerHTML);
                    assert.strictEqual(renderedKey, '<h2 class="top-node">OFFICES. Expanded: false</h2>');
                    return [
                        4,
                        component.expandRecursively(Number.POSITIVE_INFINITY)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 4)
                    ];
                case 3:
                    _state.sent();
                    renderedKey = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.stripLitHtmlCommentNodes)(key.innerHTML);
                    assert.strictEqual(renderedKey, '<h2 class="top-node">OFFICES. Expanded: true</h2>');
                    return [
                        2
                    ];
            }
        });
    }));
    describe('navigating with keyboard', function() {
        it('defaults to the first root node as active', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Offices'));
                        return [
                            2
                        ];
                }
            });
        }));
        describe('pressing the ENTER key', function() {
            it('expands the node if it is closed', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'Enter',
                                bubbles: true
                            });
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 3)
                            ];
                        case 3:
                            _state.sent();
                            assert.strictEqual(officeNode.getAttribute('aria-expanded'), 'true');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('closes the node if it is open', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            void component.expandRecursively();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_DEFAULT_EXPANDED)
                            ];
                        case 2:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'Enter',
                                bubbles: true
                            });
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 6)
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(officeNode.getAttribute('aria-expanded'), 'false');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the SPACE key', function() {
            it('expands the node if it is closed', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: ' ',
                                bubbles: true
                            });
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 3)
                            ];
                        case 3:
                            _state.sent();
                            assert.strictEqual(officeNode.getAttribute('aria-expanded'), 'true');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('closes the node if it is open', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 12)
                            ];
                        case 3:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: ' ',
                                bubbles: true
                            });
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 6)
                            ];
                        case 5:
                            _state.sent();
                            assert.strictEqual(officeNode.getAttribute('aria-expanded'), 'false');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the HOME key', function() {
            it('takes the user to the top most root node', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, berlinNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            berlinNode = getVisibleTreeNodeByText(shadowRoot, 'BER');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(berlinNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(berlinNode, {
                                key: 'Home',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 5:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Offices'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the END key', function() {
            it('takes the user to the last visible node if they are all expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'End',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), // Calendar is the very last node in the tree
                            getVisibleTreeNodeByText(shadowRoot, 'Calendar'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('does not expand any closed nodes and focuses the last visible node', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode, arrowIcon, europeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            // Expand the Offices part of the tree
                            arrowIcon = officeNode.querySelector('.arrow-icon');
                            assert.instanceOf(arrowIcon, HTMLSpanElement);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(arrowIcon);
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 3)
                            ];
                        case 2:
                            _state.sent();
                            // Focus the "Europe" node.
                            europeNode = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(europeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'End',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), // Products is the last node in the tree, as its children are not expanded
                            getVisibleTreeNodeByText(shadowRoot, 'Products'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the UP arrow', function() {
            it('does nothing if on the root node', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), officeNode);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves focus to the previous sibling', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, berlinNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, 12)
                            ];
                        case 3:
                            _state.sent();
                            berlinNode = getVisibleTreeNodeByText(shadowRoot, 'BER');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(berlinNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(berlinNode, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'MUC'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves focus to the parent if there are no previous siblings', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, ukNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_DEFAULT_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            ukNode = getVisibleTreeNodeByText(shadowRoot, 'UK');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(ukNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(ukNode, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Europe'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves focus to the parent\'s last child if there are no previous siblings and the parent is expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, germanyNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_DEFAULT_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            germanyNode = getVisibleTreeNodeByText(shadowRoot, 'Germany');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(germanyNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(germanyNode, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'LON'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves focus to the parent\'s deeply nested last child if there are no previous siblings and the parent has children that are expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, germanyNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            germanyNode = getVisibleTreeNodeByText(shadowRoot, 'Germany');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(germanyNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(germanyNode, {
                                key: 'ArrowUp',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'BEL'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the RIGHT arrow', function() {
            it('does nothing if it is on a node that cannot be expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, chromeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            chromeNode = getVisibleTreeNodeByText(shadowRoot, 'Chrome');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(chromeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(chromeNode, {
                                key: 'ArrowRight',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), chromeNode);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('expands the node if on an expandable node that is closed and does not move focus', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowRight',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), officeNode);
                            assert.strictEqual(officeNode.getAttribute('aria-expanded'), 'true');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves focus into the child if pressed on an expanded node', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            // Press once to expand, twice to navigate in to the first child
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowRight',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowRight',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Europe'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the LEFT arrow', function() {
            it('closes the node if the focused node is expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, europeNode, visibleTree;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            europeNode = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(europeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(europeNode, {
                                key: 'ArrowLeft',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Europe'));
                            visibleTree = visibleNodesToTree(shadowRoot);
                            // The tree below "Europe" is hidden as the left arrow press closed that node.
                            assert.deepEqual(visibleTree, [
                                {
                                    renderedKey: 'Offices',
                                    children: [
                                        {
                                            renderedKey: 'Europe'
                                        }
                                    ]
                                },
                                {
                                    renderedKey: 'Products',
                                    children: [
                                        {
                                            renderedKey: 'Chrome'
                                        },
                                        {
                                            renderedKey: 'YouTube'
                                        },
                                        {
                                            renderedKey: 'Drive'
                                        },
                                        {
                                            renderedKey: 'Calendar'
                                        }
                                    ]
                                }
                            ]);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves to the parent node if the current node is not expanded or unexpandable', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, berlinNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            berlinNode = getVisibleTreeNodeByText(shadowRoot, 'BER');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(berlinNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(berlinNode, {
                                key: 'ArrowLeft',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 5:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Germany'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('does nothing when called on a root node', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, productsNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            productsNode = getVisibleTreeNodeByText(shadowRoot, 'Products');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(productsNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(productsNode, {
                                key: 'ArrowLeft',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Products'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('pressing the DOWN arrow', function() {
            it('moves down to the next sibling if the node is not expanded', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Products'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('does not move if it is the last sibling and there are no parent siblings', /*#__PURE__*/ _async_to_generator(function() {
                var shadowRoot, productsNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            shadowRoot = _state.sent().shadowRoot;
                            productsNode = getVisibleTreeNodeByText(shadowRoot, 'Products');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(productsNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(productsNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Products'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves down to the first child of the node if it is expanded', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Europe'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('moves to its parent\'s sibling if it is the last child', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, lonNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_DEFAULT_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            lonNode = getVisibleTreeNodeByText(shadowRoot, 'LON');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(lonNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(lonNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Germany'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('is able to navigate high up the tree to the correct next parent\'s sibling', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, berNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                component.expandRecursively(Number.POSITIVE_INFINITY)
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                            ];
                        case 3:
                            _state.sent();
                            berNode = getVisibleTreeNodeByText(shadowRoot, 'BER');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(berNode);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(berNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Products'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    // Note: all aria-* positional labels are 1 indexed, not 0 indexed.
    describe('aria-* labels', function() {
        it('adds correct aria-level labels', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, rootNode, europeNode, germanyNode, berlinNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandRecursively(Number.POSITIVE_INFINITY)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        assert.strictEqual(rootNode.getAttribute('aria-level'), '1');
                        europeNode = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                        assert.strictEqual(europeNode.getAttribute('aria-level'), '2');
                        germanyNode = getVisibleTreeNodeByText(shadowRoot, 'Germany');
                        assert.strictEqual(germanyNode.getAttribute('aria-level'), '3');
                        berlinNode = getVisibleTreeNodeByText(shadowRoot, 'BER');
                        assert.strictEqual(berlinNode.getAttribute('aria-level'), '4');
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds the correct setsize label to the root node', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, rootNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Products');
                        assert.strictEqual(rootNode.getAttribute('aria-setsize'), '2');
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds the correct setsize label to a deeply nested node', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, europeKey, germanyKey;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandRecursively(Number.POSITIVE_INFINITY)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                        ];
                    case 3:
                        _state.sent();
                        europeKey = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                        assert.strictEqual(europeKey.getAttribute('aria-setsize'), '1');
                        germanyKey = getVisibleTreeNodeByText(shadowRoot, 'Germany');
                        // 2 because there are two keys at this level in the tree: UK & Germany
                        assert.strictEqual(germanyKey.getAttribute('aria-setsize'), '2');
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds the posinset label to nodes correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, europeKey, csgOfficeKey;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandRecursively(Number.POSITIVE_INFINITY)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                        ];
                    case 3:
                        _state.sent();
                        europeKey = getVisibleTreeNodeByText(shadowRoot, 'Europe');
                        assert.strictEqual(europeKey.getAttribute('aria-posinset'), '1');
                        csgOfficeKey = getVisibleTreeNodeByText(shadowRoot, 'CSG');
                        // CSG is 2nd in the LON office list: 6PS, CSG, BEL
                        assert.strictEqual(csgOfficeKey.getAttribute('aria-posinset'), '2');
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets aria-expanded to false on non-expanded nodes', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, rootNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        assert.strictEqual(rootNode.getAttribute('aria-expanded'), 'false');
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets aria-expanded to true on expanded nodes', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, rootNode, arrowIcon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        rootNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                        arrowIcon = rootNode.querySelector('.arrow-icon');
                        assert.instanceOf(arrowIcon, HTMLSpanElement);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(arrowIcon);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(rootNode.getAttribute('aria-expanded'), 'true');
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not set aria-expanded at all on leaf nodes', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, leafNodeCSGOffice;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: basicTreeData
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandRecursively(Number.POSITIVE_INFINITY)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, NODE_COUNT_BASIC_DATA_FULLY_EXPANDED)
                        ];
                    case 3:
                        _state.sent();
                        leafNodeCSGOffice = getVisibleTreeNodeByText(shadowRoot, 'CSG');
                        assert.strictEqual(leafNodeCSGOffice.getAttribute('aria-expanded'), null);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('emitting events', function() {
        describe('itemselected event', function() {
            it('emits an event when the user clicks on the node', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode, treeItemSelectedEvent, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            treeItemSelectedEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'itemselected');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                treeItemSelectedEvent
                            ];
                        case 3:
                            event = _state.sent();
                            assert.deepEqual(event.data, {
                                node: basicTreeData[0]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
            it('emits an event when the user navigates to the node with their keyboard', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode, treeItemSelectedEvent, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(officeNode);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchKeyDownEvent)(officeNode, {
                                key: 'ArrowDown',
                                bubbles: true
                            });
                            treeItemSelectedEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'itemselected');
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 4:
                            _state.sent();
                            return [
                                4,
                                treeItemSelectedEvent
                            ];
                        case 5:
                            event = _state.sent();
                            assert.deepEqual(event.data, {
                                node: basicTreeData[1]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('itemmouseover', function() {
            it('emits an event when the user mouses over the element', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode, itemMouseOverEvent, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices').querySelector('.arrow-and-key-wrapper');
                            assert.instanceOf(officeNode, HTMLSpanElement);
                            itemMouseOverEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'itemmouseover');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchMouseOverEvent)(officeNode);
                            return [
                                4,
                                itemMouseOverEvent
                            ];
                        case 3:
                            event = _state.sent();
                            assert.deepEqual(event.data, {
                                node: basicTreeData[0]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('itemmouseout', function() {
            it('emits an event when the user mouses out of the element', /*#__PURE__*/ _async_to_generator(function() {
                var _ref, component, shadowRoot, officeNode, itemMouseOutEvent, event;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                renderTreeOutline({
                                    tree: basicTreeData
                                })
                            ];
                        case 1:
                            _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            officeNode = getVisibleTreeNodeByText(shadowRoot, 'Offices').querySelector('.arrow-and-key-wrapper');
                            assert.instanceOf(officeNode, HTMLSpanElement);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchMouseOverEvent)(officeNode);
                            itemMouseOutEvent = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'itemmouseout');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchMouseOutEvent)(officeNode);
                            return [
                                4,
                                itemMouseOutEvent
                            ];
                        case 3:
                            event = _state.sent();
                            assert.deepEqual(event.data, {
                                node: basicTreeData[0]
                            });
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    describe('matching on id parameter', function() {
        it('expands the relevant part of the tree to reveal the given node', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, visibleTree;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: [
                                    nodeAustralia
                                ]
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        // Expand to the node with the given ID, the actual data doesn't matter in this case.
                        // This means you can search the tree, without having a reference to the specific tree data,
                        // just as long as you know the id for whatever thing you are looking for.
                        return [
                            4,
                            component.expandToAndSelectTreeNode({
                                treeNodeData: 'something else',
                                id: 'gawler'
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, 7)
                        ];
                    case 3:
                        _state.sent();
                        visibleTree = visibleNodesToTree(shadowRoot);
                        // The tree is expanded down to include "Gawler" but the rest of the tree is still collapsed.
                        assert.deepEqual(visibleTree, [
                            {
                                renderedKey: 'Australia',
                                children: [
                                    {
                                        renderedKey: 'SA',
                                        children: [
                                            {
                                                renderedKey: 'Adelaide',
                                                children: [
                                                    {
                                                        renderedKey: 'Toorak Gardens'
                                                    },
                                                    {
                                                        renderedKey: 'Woodville South'
                                                    },
                                                    {
                                                        renderedKey: 'Gawler'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        renderedKey: 'NSW'
                                    }
                                ]
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('remembers nodes expanded state across node updates', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot, newNodeAustralia, visibleTree;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: [
                                    nodeAustralia
                                ]
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandToAndSelectTreeNode({
                                treeNodeData: 'something else',
                                id: 'gawler'
                            })
                        ];
                    case 2:
                        _state.sent();
                        // Update the node by replacing the root node.
                        newNodeAustralia = {
                            treeNodeData: 'New Australia',
                            id: 'australia',
                            children: /*#__PURE__*/ _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        [
                                            {
                                                treeNodeData: 'Different SA',
                                                id: 'sa',
                                                children: /*#__PURE__*/ _async_to_generator(function() {
                                                    return _ts_generator(this, function(_state) {
                                                        return [
                                                            2,
                                                            [
                                                                {
                                                                    treeNodeData: 'Phantom Adelaide',
                                                                    id: 'adelaide',
                                                                    children: /*#__PURE__*/ _async_to_generator(function() {
                                                                        return _ts_generator(this, function(_state) {
                                                                            return [
                                                                                2,
                                                                                [
                                                                                    {
                                                                                        treeNodeData: 'Totally not Gawler',
                                                                                        id: 'gawler'
                                                                                    }
                                                                                ]
                                                                            ];
                                                                        });
                                                                    })
                                                                }
                                                            ]
                                                        ];
                                                    });
                                                })
                                            }
                                        ]
                                    ];
                                });
                            })
                        };
                        component.data = {
                            tree: [
                                newNodeAustralia
                            ],
                            defaultRenderer: function(node) {
                                return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject4(), node.treeNodeData);
                            }
                        };
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, 4)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        visibleTree = visibleNodesToTree(shadowRoot);
                        // The tree should still be expanded down to the node with key `gawler`.
                        assert.deepEqual(visibleTree, [
                            {
                                renderedKey: 'New Australia',
                                children: [
                                    {
                                        renderedKey: 'Different SA',
                                        children: [
                                            {
                                                renderedKey: 'Phantom Adelaide',
                                                children: [
                                                    {
                                                        renderedKey: 'Totally not Gawler'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('focuses the given node with an id once the tree has been expanded', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderTreeOutline({
                                tree: [
                                    nodeAustralia
                                ]
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            component.expandToAndSelectTreeNode({
                                treeNodeData: 'literally anything',
                                id: 'gawler'
                            })
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            waitForRenderedTreeNodeCount(shadowRoot, 7)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        // The tree is expanded down to include "Gawler" but the rest of the tree is still collapsed.
                        assert.strictEqual(getFocusableTreeNode(shadowRoot), getVisibleTreeNodeByText(shadowRoot, 'Gawler'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
describe('TreeOutlineUtils', function() {
    describe('getPathToTreeNode', function() {
        it('can find the path to the given node', /*#__PURE__*/ _async_to_generator(function() {
            var path;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutlineUtils.getPathToTreeNode(basicTreeData, nodeBelgraveHouse.id)
                        ];
                    case 1:
                        path = _state.sent();
                        assert.deepEqual(path, [
                            nodeOffices,
                            nodeEurope,
                            nodeUK,
                            nodeLondon,
                            nodeBelgraveHouse
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('returns null if no path is found', /*#__PURE__*/ _async_to_generator(function() {
            var path;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            _tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutlineUtils.getPathToTreeNode(basicTreeData, '-1')
                        ];
                    case 1:
                        path = _state.sent();
                        assert.strictEqual(path, null);
                        return [
                            2
                        ];
                }
            });
        }));
    });
});
describe('TreeOutlineFiltering', function() {
    it('can flatten nodes', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: [
                                nodeAustralia
                            ],
                            filter: function(node) {
                                return node === 'SA' || node === 'NSW' || node === 'Adelaide' ? "FLATTEN" /* TreeOutline.TreeOutline.FilterOption.FLATTEN */  : "SHOW" /* TreeOutline.TreeOutline.FilterOption.SHOW */ ;
                            }
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 7)
                    ];
                case 4:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Australia',
                            children: [
                                {
                                    renderedKey: 'Toorak Gardens'
                                },
                                {
                                    renderedKey: 'Woodville South'
                                },
                                {
                                    renderedKey: 'Gawler'
                                },
                                {
                                    renderedKey: 'Glebe'
                                },
                                {
                                    renderedKey: 'Newtown'
                                },
                                {
                                    renderedKey: 'Camperdown'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('should not flatten an already expanded node', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, visibleTreeAfterFilter;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderTreeOutline({
                            tree: [
                                nodeAustralia
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandNodeIds([
                            'australia',
                            'sa',
                            'adelaide'
                        ])
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 7)
                    ];
                case 4:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTree, [
                        {
                            renderedKey: 'Australia',
                            children: [
                                {
                                    renderedKey: 'SA',
                                    children: [
                                        {
                                            renderedKey: 'Adelaide',
                                            children: [
                                                {
                                                    renderedKey: 'Toorak Gardens'
                                                },
                                                {
                                                    renderedKey: 'Woodville South'
                                                },
                                                {
                                                    renderedKey: 'Gawler'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    renderedKey: 'NSW'
                                }
                            ]
                        }
                    ]);
                    component.data = {
                        tree: [
                            nodeAustralia
                        ],
                        filter: function(node) {
                            return node === 'SA' || node === 'NSW' ? "FLATTEN" /* TreeOutline.TreeOutline.FilterOption.FLATTEN */  : "SHOW" /* TreeOutline.TreeOutline.FilterOption.SHOW */ ;
                        },
                        defaultRenderer: function(node) {
                            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject5(), node.treeNodeData);
                        }
                    };
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 9)
                    ];
                case 5:
                    _state.sent();
                    visibleTreeAfterFilter = visibleNodesToTree(shadowRoot);
                    assert.deepEqual(visibleTreeAfterFilter, [
                        {
                            renderedKey: 'Australia',
                            children: [
                                {
                                    renderedKey: 'SA',
                                    children: [
                                        {
                                            renderedKey: 'Adelaide',
                                            children: [
                                                {
                                                    renderedKey: 'Toorak Gardens'
                                                },
                                                {
                                                    renderedKey: 'Woodville South'
                                                },
                                                {
                                                    renderedKey: 'Gawler'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    renderedKey: 'Glebe'
                                },
                                {
                                    renderedKey: 'Newtown'
                                },
                                {
                                    renderedKey: 'Camperdown'
                                }
                            ]
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TreeOutline.test.js.map


}),
"./ui/components/tree_outline/tree_outline.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TreeOutline: function() { return /* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__; },
  TreeOutlineUtils: function() { return /* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./ui/components/tree_outline/TreeOutline.js");
/* harmony import */var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=tree_outline.js.map


}),

}]);