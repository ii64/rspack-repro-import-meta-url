"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_OriginTrialTreeView_test_js"], {
"./panels/application/components/OriginTrialTreeView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/application/components/components.js");
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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





var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function renderOriginTrialTreeView(data) {
    return _renderOriginTrialTreeView.apply(this, arguments);
}
function _renderOriginTrialTreeView() {
    _renderOriginTrialTreeView = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.OriginTrialTreeView.OriginTrialTreeView();
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
    return _renderOriginTrialTreeView.apply(this, arguments);
}
function renderOriginTrialTreeViewTreeOutline(data) {
    return _renderOriginTrialTreeViewTreeOutline.apply(this, arguments);
}
function _renderOriginTrialTreeViewTreeOutline() {
    _renderOriginTrialTreeViewTreeOutline = /**
 * Extract `TreeOutline` component from `OriginTrialTreeView` for inspection.
 */ _async_to_generator(function(data) {
        var component, treeOutline;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeView(data)
                    ];
                case 1:
                    component = _state.sent().component;
                    treeOutline = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementWithinComponent)(component, 'devtools-tree-outline', _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline);
                    assert.isNotNull(treeOutline.shadowRoot);
                    return [
                        2,
                        {
                            component: treeOutline,
                            shadowRoot: treeOutline.shadowRoot
                        }
                    ];
            }
        });
    });
    return _renderOriginTrialTreeViewTreeOutline.apply(this, arguments);
}
var tokenPlaceHolder = 'Origin Trial Token Placeholder';
var trialWithMultipleTokens = {
    trialName: 'AppCache',
    status: "Enabled" /* Protocol.Page.OriginTrialStatus.Enabled */ ,
    tokensWithStatus: [
        {
            status: "Success" /* Protocol.Page.OriginTrialTokenStatus.Success */ ,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: "None" /* Protocol.Page.OriginTrialUsageRestriction.None */ ,
                isThirdParty: false,
                matchSubDomains: false
            }
        },
        {
            status: "Expired" /* Protocol.Page.OriginTrialTokenStatus.Expired */ ,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: "None" /* Protocol.Page.OriginTrialUsageRestriction.None */ ,
                isThirdParty: false,
                matchSubDomains: false
            }
        },
        {
            status: "WrongOrigin" /* Protocol.Page.OriginTrialTokenStatus.WrongOrigin */ ,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AppCache',
                origin: 'https://bar.com',
                expiryTime: 1000,
                usageRestriction: "None" /* Protocol.Page.OriginTrialUsageRestriction.None */ ,
                isThirdParty: false,
                matchSubDomains: false
            }
        }
    ]
};
var trialWithSingleToken = {
    trialName: 'AutoPictureInPicture',
    status: "ValidTokenNotProvided" /* Protocol.Page.OriginTrialStatus.ValidTokenNotProvided */ ,
    tokensWithStatus: [
        {
            status: "NotSupported" /* Protocol.Page.OriginTrialTokenStatus.NotSupported */ ,
            rawTokenText: tokenPlaceHolder,
            parsedToken: {
                trialName: 'AutoPictureInPicture',
                origin: 'https://foo.com',
                expiryTime: 1000,
                usageRestriction: "None" /* Protocol.Page.OriginTrialUsageRestriction.None */ ,
                isThirdParty: false,
                matchSubDomains: false
            }
        }
    ]
};
var trialWithUnparsableToken = {
    trialName: 'UNKNOWN',
    status: "ValidTokenNotProvided" /* Protocol.Page.OriginTrialStatus.ValidTokenNotProvided */ ,
    tokensWithStatus: [
        {
            status: "InvalidSignature" /* Protocol.Page.OriginTrialTokenStatus.InvalidSignature */ ,
            rawTokenText: tokenPlaceHolder
        }
    ]
};
function extractBadgeTextFromTreeNode(node) {
    return _to_consumable_array(node.querySelectorAll('devtools-resources-origin-trial-tree-view-badge')).map(function(badgeElement) {
        var adornerElement = badgeElement.shadowRoot.querySelector('devtools-adorner');
        assert.isNotNull(adornerElement);
        if (adornerElement === null) {
            return '';
        }
        var contentElement = adornerElement.querySelector('[slot="content"]');
        assert.isNotNull(contentElement);
        if (contentElement === null) {
            return '';
        }
        return contentElement.innerHTML;
    });
}
function nodeKeyInnerHTML(node) {
    var keyNode = node.querySelector('[data-node-key]');
    if (!keyNode) {
        throw new Error('Found tree node without a key within it.');
    }
    return (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.stripLitHtmlCommentNodes)(keyNode.innerHTML);
}
/**
 * Converts the nodes into a tree structure that we can assert against.
 */ function visibleNodesToTree(shadowRoot) {
    var tree = [];
    function buildTreeNode(node) {
        var item = {
            nodeElement: node
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
function waitForRenderedTreeNodeCount(shadowRoot, expectedNodeCount) {
    return _waitForRenderedTreeNodeCount.apply(this, arguments);
}
function _waitForRenderedTreeNodeCount() {
    _waitForRenderedTreeNodeCount = /**
 * Wait until a certain number of children are rendered. We need this as the
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
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('OriginTrialTreeView', function() {
    it('renders trial names as root tree nodes', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, visibleItems;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens,
                                trialWithSingleToken,
                                trialWithUnparsableToken
                            ]
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    visibleItems = shadowRoot.querySelectorAll('li[role="treeitem"]');
                    assert.lengthOf(visibleItems, 3);
                    assert.include(nodeKeyInnerHTML(visibleItems[0]), trialWithMultipleTokens.trialName);
                    assert.include(nodeKeyInnerHTML(visibleItems[1]), trialWithSingleToken.trialName);
                    assert.include(nodeKeyInnerHTML(visibleItems[2]), trialWithUnparsableToken.trialName);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders token with status when there are more than 1 tokens', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, tokenWithStatusNodes, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 0)
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
                    // When there are more than 1 tokens in a trial, second level nodes
                    // should show token status.
                    tokenWithStatusNodes = visibleTree[0].children;
                    assert.exists(tokenWithStatusNodes);
                    if (tokenWithStatusNodes === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(tokenWithStatusNodes, 3);
                    for(i = 0; i < tokenWithStatusNodes.length; i++){
                        assert.include(extractBadgeTextFromTreeNode(tokenWithStatusNodes[i].nodeElement), trialWithMultipleTokens.tokensWithStatus[i].status);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('skips token with status when there is only 1 token', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, tokenDetailNodes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithSingleToken
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 1)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 3)
                    ];
                case 3:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    // When there is only 1 token, token with status level should be skipped.
                    tokenDetailNodes = visibleTree[0].children;
                    assert.exists(tokenDetailNodes);
                    if (tokenDetailNodes === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(tokenDetailNodes, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders token fields', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, tokenDetailNodes, tokenFieldsNode, rowsComponent, innerHTML, parsedToken;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithSingleToken
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 1)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 3)
                    ];
                case 3:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    tokenDetailNodes = visibleTree[0].children;
                    assert.exists(tokenDetailNodes);
                    if (tokenDetailNodes === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(tokenDetailNodes, 2);
                    tokenFieldsNode = tokenDetailNodes[0];
                    rowsComponent = tokenFieldsNode.nodeElement.querySelector('devtools-resources-origin-trial-token-rows');
                    innerHTML = rowsComponent.shadowRoot.innerHTML;
                    parsedToken = trialWithSingleToken.tokensWithStatus[0].parsedToken;
                    assert.exists(parsedToken);
                    if (parsedToken === undefined) {
                        return [
                            2
                        ];
                    }
                    // Note: only origin and usageRestriction field are tested, as other fields
                    // are not directly rendered:
                    // - expiryTime: rendered as time format
                    // - isThirdParty, MatchesSubDomain: boolean flags
                    assert.include(innerHTML, parsedToken.origin);
                    assert.include(innerHTML, parsedToken.usageRestriction);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders raw token text', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, tokenDetailNodes, rawTokenNode, innerHTML;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithSingleToken
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 2)
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
                    tokenDetailNodes = visibleTree[0].children;
                    assert.exists(tokenDetailNodes);
                    if (tokenDetailNodes === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(tokenDetailNodes, 2);
                    rawTokenNode = tokenDetailNodes[1];
                    assert.exists(rawTokenNode.children);
                    if (rawTokenNode.children === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(rawTokenNode.children, 1);
                    innerHTML = nodeKeyInnerHTML(rawTokenNode.children[0].nodeElement);
                    assert.include(innerHTML, trialWithSingleToken.tokensWithStatus[0].rawTokenText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows token count when there are more than 1 tokens in a trial', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, visibleTree, trialNameNode, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens
                            ]
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 1)
                    ];
                case 2:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    trialNameNode = visibleTree[0];
                    badges = extractBadgeTextFromTreeNode(trialNameNode.nodeElement);
                    assert.lengthOf(badges, 2);
                    assert.include(badges, "".concat(trialWithMultipleTokens.tokensWithStatus.length, " tokens"));
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows trial status', /*#__PURE__*/ _async_to_generator(function() {
        var shadowRoot, visibleTree, trialNameNode, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens
                            ]
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 1)
                    ];
                case 2:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    trialNameNode = visibleTree[0];
                    badges = extractBadgeTextFromTreeNode(trialNameNode.nodeElement);
                    assert.lengthOf(badges, 2);
                    assert.include(badges, trialWithMultipleTokens.status);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows token status, when token with status node not expanded', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, trialNameNode, i, tokenWithStatusNode, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 0)
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
                    trialNameNode = visibleTree[0];
                    assert.exists(trialNameNode.children);
                    if (trialNameNode.children === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(trialNameNode.children, 3);
                    for(i = 0; i < trialNameNode.children.length; i++){
                        tokenWithStatusNode = trialNameNode.children[i];
                        assert.isUndefined(tokenWithStatusNode.children);
                        badges = extractBadgeTextFromTreeNode(tokenWithStatusNode.nodeElement);
                        assert.lengthOf(badges, 1);
                        assert.strictEqual(badges[0], trialWithMultipleTokens.tokensWithStatus[i].status);
                    }
                    return [
                        2
                    ];
            }
        });
    }));
    it('hide token status, when token with status node is expanded', /*#__PURE__*/ _async_to_generator(function() {
        var _ref, component, shadowRoot, visibleTree, trialNameNode, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, tokenWithStatusNode, badges;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                trialWithMultipleTokens
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 1)
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
                    trialNameNode = visibleTree[0];
                    assert.exists(trialNameNode.children);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = trialNameNode.children[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            tokenWithStatusNode = _step.value;
                            assert.exists(tokenWithStatusNode.children);
                            badges = extractBadgeTextFromTreeNode(tokenWithStatusNode.nodeElement);
                            assert.lengthOf(badges, 0);
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
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows trial name for token with status UnknownTrial', /*#__PURE__*/ _async_to_generator(function() {
        var unknownTrialName, _ref, component, shadowRoot, visibleTree, tokenDetailNodes, tokenFieldsNode, rowsComponent, innerHTML;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    unknownTrialName = 'UnkownTrialName';
                    return [
                        4,
                        renderOriginTrialTreeViewTreeOutline({
                            trials: [
                                {
                                    trialName: 'UNKNOWN',
                                    status: "ValidTokenNotProvided" /* Protocol.Page.OriginTrialStatus.ValidTokenNotProvided */ ,
                                    tokensWithStatus: [
                                        {
                                            status: "UnknownTrial" /* Protocol.Page.OriginTrialTokenStatus.UnknownTrial */ ,
                                            parsedToken: {
                                                trialName: unknownTrialName,
                                                origin: 'https://foo.com',
                                                expiryTime: 1000,
                                                usageRestriction: "None" /* Protocol.Page.OriginTrialUsageRestriction.None */ ,
                                                isThirdParty: false,
                                                matchSubDomains: false
                                            },
                                            rawTokenText: tokenPlaceHolder
                                        }
                                    ]
                                }
                            ]
                        })
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                    return [
                        4,
                        component.expandRecursively(/* maxDepth= */ 1)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        waitForRenderedTreeNodeCount(shadowRoot, 3)
                    ];
                case 3:
                    _state.sent();
                    visibleTree = visibleNodesToTree(shadowRoot);
                    tokenDetailNodes = visibleTree[0].children;
                    assert.exists(tokenDetailNodes);
                    if (tokenDetailNodes === undefined) {
                        return [
                            2
                        ];
                    }
                    assert.lengthOf(tokenDetailNodes, 2);
                    tokenFieldsNode = tokenDetailNodes[0];
                    rowsComponent = tokenFieldsNode.nodeElement.querySelector('devtools-resources-origin-trial-token-rows');
                    innerHTML = rowsComponent.shadowRoot.innerHTML;
                    assert.include(innerHTML, unknownTrialName);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=OriginTrialTreeView.test.js.map


}),
"./panels/application/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheView: function() { return /* reexport module object */ _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BounceTrackingMitigationsView: function() { return /* reexport module object */ _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__; },
  EndpointsGrid: function() { return /* reexport module object */ _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__; },
  FrameDetailsView: function() { return /* reexport module object */ _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__; },
  InterestGroupAccessGrid: function() { return /* reexport module object */ _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  OriginTrialTreeView: function() { return /* reexport module object */ _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__; },
  ProtocolHandlersView: function() { return /* reexport module object */ _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__; },
  ReportsGrid: function() { return /* reexport module object */ _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__; },
  ServiceWorkerRouterView: function() { return /* reexport module object */ _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__; },
  SharedStorageAccessGrid: function() { return /* reexport module object */ _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__; },
  SharedStorageMetadataView: function() { return /* reexport module object */ _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__; },
  StackTrace: function() { return /* reexport module object */ _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__; },
  StorageMetadataView: function() { return /* reexport module object */ _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__; },
  TrustTokensView: function() { return /* reexport module object */ _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__; }
});
/* harmony import */var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./panels/application/components/BackForwardCacheView.js");
/* harmony import */var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./panels/application/components/BounceTrackingMitigationsView.js");
/* harmony import */var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./panels/application/components/EndpointsGrid.js");
/* harmony import */var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./panels/application/components/FrameDetailsView.js");
/* harmony import */var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./panels/application/components/InterestGroupAccessGrid.js");
/* harmony import */var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./panels/application/components/ProtocolHandlersView.js");
/* harmony import */var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./panels/application/components/ReportsGrid.js");
/* harmony import */var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./panels/application/components/ServiceWorkerRouterView.js");
/* harmony import */var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./panels/application/components/SharedStorageAccessGrid.js");
/* harmony import */var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./panels/application/components/SharedStorageMetadataView.js");
/* harmony import */var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
/* harmony import */var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
/* harmony import */var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./panels/application/components/TrustTokensView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=components.js.map


}),

}]);