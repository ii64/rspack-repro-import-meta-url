"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_RequestInitiatorView_js"], {
"./panels/network/RequestInitiatorView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RequestInitiatorView: function() { return RequestInitiatorView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestInitiatorView.css.js */ "./panels/network/requestInitiatorView.css.js");
/* harmony import */var _requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requestInitiatorViewTree.css.js */ "./panels/network/requestInitiatorViewTree.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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








var UIStrings = {
    /**
     *@description Text in Request Initiator View of the Network panel
     */ thisRequestHasNoInitiatorData: 'This request has no initiator data.',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */ requestCallStack: 'Request call stack',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */ requestInitiatorChain: 'Request initiator chain'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/RequestInitiatorView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var RequestInitiatorView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(RequestInitiatorView, _UI_Widget_VBox);
    var _super = _create_super(RequestInitiatorView);
    function RequestInitiatorView(request) {
        _class_call_check(this, RequestInitiatorView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "hasShown", void 0);
        _this.element.classList.add('request-initiator-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('initiator').track({
            resize: true
        })));
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
        _this.request = request;
        _this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoInitiatorData));
        _this.emptyWidget.show(_this.element);
        _this.hasShown = false;
        return _this;
    }
    _create_class(RequestInitiatorView, [
        {
            key: "createTree",
            value: function createTree() {
                var treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow();
                treeOutline.registerCSSFiles([
                    _requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                treeOutline.contentElement.classList.add('request-initiator-view-tree');
                treeOutline.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.tree('initiator-tree')));
                return treeOutline;
            }
        },
        {
            key: "buildRequestChainTree",
            value: function buildRequestChainTree(initiatorGraph, title, tree) {
                var root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
                tree.appendChild(root);
                if (_instanceof(root.titleElement, HTMLElement)) {
                    root.titleElement.classList.add('request-initiator-view-section-title');
                }
                var initiators = initiatorGraph.initiators;
                var parent = root;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Array.from(initiators).reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
                        parent.appendChild(treeElement);
                        parent.expand();
                        parent = treeElement;
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
                root.expand();
                parent.select();
                var titleElement = parent.titleElement;
                if (_instanceof(titleElement, HTMLElement)) {
                    titleElement.style.fontWeight = 'bold';
                }
                var initiated = initiatorGraph.initiated;
                this.depthFirstSearchTreeBuilder(initiated, parent, this.request);
                return root;
            }
        },
        {
            key: "depthFirstSearchTreeBuilder",
            value: function depthFirstSearchTreeBuilder(initiated, parentElement, parentRequest) {
                var visited = new Set();
                // this.request should be already in the tree when build initiator part
                visited.add(this.request);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = initiated.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        if (initiated.get(request) === parentRequest) {
                            var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
                            parentElement.appendChild(treeElement);
                            parentElement.expand();
                            // only do dfs when we haven't done one
                            if (!visited.has(request)) {
                                visited.add(request);
                                this.depthFirstSearchTreeBuilder(initiated, treeElement, request);
                            }
                        }
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
            key: "buildStackTraceSection",
            value: function buildStackTraceSection(content, title, tree) {
                var root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
                tree.appendChild(root);
                if (_instanceof(root.titleElement, HTMLElement)) {
                    root.titleElement.classList.add('request-initiator-view-section-title');
                }
                var contentElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(content, false);
                contentElement.selectable = false;
                root.appendChild(contentElement);
                root.expand();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                if (this.hasShown) {
                    return;
                }
                this.registerCSSFiles([
                    _requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
                var initiatorDataPresent = false;
                var containerTree = this.createTree();
                var stackTracePreview = RequestInitiatorView.createStackTracePreview(this.request, this.linkifier, true);
                if (stackTracePreview) {
                    initiatorDataPresent = true;
                    this.buildStackTraceSection(stackTracePreview.element, i18nString(UIStrings.requestCallStack), containerTree);
                }
                var initiatorGraph = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().initiatorGraphForRequest(this.request);
                if (initiatorGraph.initiators.size > 1 || initiatorGraph.initiated.size > 1) {
                    initiatorDataPresent = true;
                    this.buildRequestChainTree(initiatorGraph, i18nString(UIStrings.requestInitiatorChain), containerTree);
                }
                var firstChild = containerTree.firstChild();
                if (firstChild) {
                    firstChild.select(true);
                }
                if (initiatorDataPresent) {
                    this.element.appendChild(containerTree.element);
                    this.emptyWidget.hideWidget();
                }
                this.hasShown = true;
            }
        }
    ], [
        {
            key: "createStackTracePreview",
            value: function createStackTracePreview(request, linkifier, focusableLink) {
                var initiator = request.initiator();
                if (!initiator || !initiator.stack) {
                    return null;
                }
                var networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager.forRequest(request);
                var target = networkManager ? networkManager.target() : null;
                var stackTrace = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.JSPresentationUtils.buildStackTracePreviewContents(target, linkifier, {
                    stackTrace: initiator.stack,
                    tabStops: focusableLink
                });
                return stackTrace;
            }
        }
    ]);
    return RequestInitiatorView;
} //# sourceMappingURL=RequestInitiatorView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);


}),
"./panels/network/requestInitiatorView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.request-initiator-view {\n  display: block;\n  margin: 6px;\n}\n\n/*# sourceURL=requestInitiatorView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/network/requestInitiatorViewTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.request-initiator-view-tree .fill {\n  right: -6px; /* Same as the margin in .request-initiator-view but negative. */\n}\n\n.request-initiator-view-section-title {\n  font-weight: bold;\n  padding: 4px;\n}\n\n.request-initiator-view-section-title:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n@media (forced-colors: active) {\n  .request-initiator-view-section-title:focus-visible {\n    forced-color-adjust: none;\n    background-color: Highlight;\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=requestInitiatorViewTree.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);