"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_elements_test_runner_ElementsTestRunner_js"], {
"./legacy_test_runner/elements_test_runner/ElementsTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_animation_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/animation/animation.js */ "./panels/animation/animation.js");
/* harmony import */var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./panels/elements/elements.js");
/* harmony import */var _panels_event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/event_listeners/event_listeners.js */ "./panels/event_listeners/event_listeners.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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








/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
/**
 * @param {string} idValue
 * @param {!Function} callback
 */ ElementsTestRunner.selectNodeWithId = function(idValue, callback) {
    callback = TestRunner.safeWrap(callback);
    function onNodeFound(node) {
        ElementsTestRunner.selectNode(node).then(callback.bind(null, node));
    }
    ElementsTestRunner.nodeWithId(idValue, onNodeFound);
};
/**
 * @param {!Object} node
 * @return {!Promise.<undefined>}
 */ ElementsTestRunner.selectNode = function(node) {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
};
/**
 * @param {string} idValue
 * @param {!Function} callback
 */ ElementsTestRunner.nodeWithId = function(idValue, callback) {
    ElementsTestRunner.findNode(function(node) {
        return node.getAttribute('id') === idValue;
    }, callback);
};
/**
 * @param {string} idValue
 * @param {!Function} callback
 */ ElementsTestRunner.nodeWithIdPromise = function(idValue) {
    return new Promise(function(resolve) {
        return ElementsTestRunner.findNode(function(node) {
            return node.getAttribute('id') === idValue;
        }, resolve);
    });
};
/**
 * @param {function(!Element): boolean} matchFunction
 * @param {!Function} callback
 */ ElementsTestRunner.findNode = function() {
    var _ref = _async_to_generator(function(matchFunction, callback) {
        var result, pendingRequests, doc, _tmp;
        function processChildren(node) {
            return _processChildren.apply(this, arguments);
        }
        function _processChildren() {
            _processChildren = _async_to_generator(function(node) {
                var pseudoElementsMap, pseudoElements, children, i, childNode;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                ,
                                3,
                                4
                            ]);
                            if (result) {
                                return [
                                    2
                                ];
                            }
                            if (!node.childDocumentPromiseForTesting) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                node.childDocumentPromiseForTesting
                            ];
                        case 1:
                            _state.sent();
                            _state.label = 2;
                        case 2:
                            pseudoElementsMap = node.pseudoElements();
                            pseudoElements = pseudoElementsMap ? _to_consumable_array(pseudoElementsMap.values()).flat() : [];
                            children = (node.children() || []).concat(node.shadowRoots()).concat(pseudoElements);
                            if (node.templateContent()) {
                                children.push(node.templateContent());
                            } else if (node.contentDocument()) {
                                children.push(node.contentDocument());
                            }
                            for(i = 0; i < children.length; ++i){
                                childNode = children[i];
                                if (matchFunction(childNode)) {
                                    result = childNode;
                                    callback(result);
                                    return [
                                        2
                                    ];
                                }
                                pendingRequests++;
                                childNode.getChildNodes(processChildren.bind(null, childNode));
                            }
                            return [
                                3,
                                4
                            ];
                        case 3:
                            pendingRequests--;
                            return [
                                7
                            ];
                        case 4:
                            if (!result && !pendingRequests) {
                                callback(null);
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return _processChildren.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    callback = TestRunner.safeWrap(callback);
                    result = null;
                    pendingRequests = 0;
                    _tmp = TestRunner.domModel.existingDocument();
                    if (_tmp) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        TestRunner.domModel.requestDocument()
                    ];
                case 1:
                    _tmp = _state.sent();
                    _state.label = 2;
                case 2:
                    doc = _tmp;
                    pendingRequests++;
                    doc.getChildNodes(processChildren.bind(null, doc));
                    return [
                        2
                    ];
            }
        });
    });
    return function(matchFunction, callback) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {function(!Element): boolean} matchFunction
 * @param {!Promise}
 */ ElementsTestRunner.findNodePromise = function(matchFunction) {
    return new Promise(function(resolve) {
        return ElementsTestRunner.findNode(matchFunction, resolve);
    });
};
/**
 * @param {!UI.TreeOutline.TreeElement} treeElement
 */ function dumpObjectPropertyTreeElement(treeElement) {
    var expandedSubstring = treeElement.expanded ? '[expanded]' : '[collapsed]';
    TestRunner.addResult(expandedSubstring + ' ' + treeElement.listItemElement.deepTextContent());
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = treeElement.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            var property = /** @type {!ObjectUI.ObjectPropertiesSection.ObjectPropertyTreeElement} */ child.property;
            var key = property.name;
            var value = /** @type {!SDK.RemoteObject.RemoteObjectImpl} */ property.value.description;
            TestRunner.addResult('    ' + key + ': ' + value);
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
/**
 * @param {!EventListeners.EventListenersView.EventListenersView} eventListenersView
 * @param {function():void} callback
 * @param {boolean=} force
 */ ElementsTestRunner.expandAndDumpEventListeners = function(eventListenersView, callback, force) {
    function listenersArrived() {
        var listenerTypes = eventListenersView.treeOutline.rootElement().children();
        for(var i = 0; i < listenerTypes.length; ++i){
            listenerTypes[i].expand();
            var listenerItems = listenerTypes[i].children();
            for(var j = 0; j < listenerItems.length; ++j){
                listenerItems[j].expand();
            }
        }
        TestRunner.deprecatedRunAfterPendingDispatches(objectsExpanded);
    }
    function objectsExpanded() {
        var listenerTypes = eventListenersView.treeOutline.rootElement().children();
        for(var i = 0; i < listenerTypes.length; ++i){
            if (!listenerTypes[i].children().length) {
                continue;
            }
            var eventType = listenerTypes[i].title;
            TestRunner.addResult('');
            TestRunner.addResult('======== ' + eventType + ' ========');
            var listenerItems = listenerTypes[i].children();
            for(var j = 0; j < listenerItems.length; ++j){
                TestRunner.addResult('== ' + listenerItems[j].eventListener().origin());
                dumpObjectPropertyTreeElement(listenerItems[j]);
            }
        }
        callback();
    }
    if (force) {
        listenersArrived();
    } else {
        TestRunner.addSniffer(_panels_event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__.EventListenersView.EventListenersView.prototype, 'eventListenersArrivedForTest', listenersArrived);
    }
};
/**
 * @param {!EventListeners.EventListenersView.EventListenersView} eventListenersView
 * @param {boolean=} force
 * @return {!Promise}
 */ ElementsTestRunner.expandAndDumpEventListenersPromise = function(eventListenersView, force) {
    return new Promise(function(resolve) {
        return ElementsTestRunner.expandAndDumpEventListeners(eventListenersView, resolve, force);
    });
};
ElementsTestRunner.inlineStyleSection = function() {
    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks[0].sections[0];
};
ElementsTestRunner.computedStyleWidget = function() {
    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().computedStyleWidget;
};
ElementsTestRunner.dumpComputedStyle = function() {
    var _ref = _async_to_generator(function(doNotAutoExpand, printInnerText) {
        var computed, treeOutline, children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, treeElement, _treeElement_querySelector, property, propertyName, propertyValue, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, traceTreeElement, trace, dumpText, link, _, err, err;
        function text(node) {
            return printInnerText ? node.innerText : node.textContent;
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    computed = ElementsTestRunner.computedStyleWidget();
                    treeOutline = computed.propertiesOutline.querySelector('devtools-tree-outline');
                    children = treeOutline.shadowRoot.querySelector('[role="treeitem"]');
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        14,
                        15
                    ]);
                    _iterator = children[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        12
                    ];
                    treeElement = _step.value;
                    property = (_treeElement_querySelector = treeElement.querySelector('devtools-computed-style-property')) === null || _treeElement_querySelector === void 0 ? void 0 : _treeElement_querySelector.shadowRoot;
                    propertyName = text(property === null || property === void 0 ? void 0 : property.querySelector('.webkit-css-property'));
                    propertyValue = text(property === null || property === void 0 ? void 0 : property.querySelector('.value'));
                    if (!property || propertyName === 'width' || propertyName === 'height') {
                        return [
                            3,
                            11
                        ];
                    }
                    TestRunner.addResult("".concat(propertyName, ": ").concat(propertyValue, ";"));
                    if (doNotAutoExpand && !treeElement.ariaExpanded) {
                        return [
                            3,
                            11
                        ];
                    }
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        9,
                        10,
                        11
                    ]);
                    _iterator1 = treeElement.children()[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        8
                    ];
                    traceTreeElement = _step1.value;
                    trace = traceTreeElement.title;
                    dumpText = '';
                    if (trace.shadowRoot.querySelector('.computed-style-trace.inactive')) {
                        dumpText += 'OVERLOADED ';
                    }
                    dumpText += text(trace.querySelector('.value'));
                    dumpText += ' - ';
                    dumpText += text(trace.shadowRoot.querySelector('.trace-selector'));
                    link = trace.shadowRoot.querySelector('.trace-link');
                    if (!link) return [
                        3,
                        6
                    ];
                    _ = ' ';
                    return [
                        4,
                        extractLinkText(link)
                    ];
                case 5:
                    dumpText += _ + _state.sent();
                    _state.label = 6;
                case 6:
                    TestRunner.addResult('    ' + dumpText);
                    _state.label = 7;
                case 7:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        4
                    ];
                case 8:
                    return [
                        3,
                        11
                    ];
                case 9:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        11
                    ];
                case 10:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 11:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 12:
                    return [
                        3,
                        15
                    ];
                case 13:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        15
                    ];
                case 14:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 15:
                    return [
                        2
                    ];
            }
        });
    });
    return function(doNotAutoExpand, printInnerText) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner.findComputedPropertyWithName = function(name) {
    var computed = ElementsTestRunner.computedStyleWidget();
    var treeOutline = computed.propertiesOutline;
    var children = treeOutline.rootElement().children();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var treeElement = _step.value;
            var property = computed.propertyByTreeElement.get(treeElement);
            if (!property) {
                continue;
            }
            if (property.name === name) {
                return treeElement;
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
    return null;
};
ElementsTestRunner.firstMatchedStyleSection = function() {
    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks[0].sections[1];
};
ElementsTestRunner.firstMediaTextElementInSection = function(section) {
    var cssQueryElement = section.element.querySelector('devtools-css-query');
    return cssQueryElement.shadowRoot.querySelector('.query-text');
};
ElementsTestRunner.querySelector = function() {
    var _ref = _async_to_generator(function(selector, callback) {
        var doc, nodeId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.domModel.requestDocument()
                    ];
                case 1:
                    doc = _state.sent();
                    return [
                        4,
                        TestRunner.domModel.querySelector(doc.id, selector)
                    ];
                case 2:
                    nodeId = _state.sent();
                    callback(TestRunner.domModel.nodeForId(nodeId));
                    return [
                        2
                    ];
            }
        });
    });
    return function(selector, callback) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner.shadowRootByHostId = function(idValue, callback) {
    function shadowRootMatches(node) {
        return node.isShadowRoot() && node.parentNode.getAttribute('id') === idValue;
    }
    ElementsTestRunner.findNode(shadowRootMatches, callback);
};
ElementsTestRunner.nodeWithClass = function(classValue, callback) {
    function nodeClassMatches(node) {
        var classAttr = node.getAttribute('class');
        return classAttr && classAttr.indexOf(classValue) > -1;
    }
    ElementsTestRunner.findNode(nodeClassMatches, callback);
};
ElementsTestRunner.expandedNodeWithId = function(idValue) {
    var result;
    ElementsTestRunner.nodeWithId(idValue, function(node) {
        result = node;
    });
    return result;
};
globalThis.waitForStylesRebuild = function(matchFunction, callback, requireRebuild) {
    (function sniff(node, rebuild) {
        if ((rebuild || !requireRebuild) && node && matchFunction(node)) {
            callback();
            return;
        }
        TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylesSidebarPane.StylesSidebarPane.prototype, 'nodeStylesUpdatedForTest', sniff);
    })(null);
};
ElementsTestRunner.waitForStyles = function(idValue, callback, requireRebuild) {
    callback = TestRunner.safeWrap(callback);
    function nodeWithId(node) {
        return node.getAttribute('id') === idValue;
    }
    globalThis.waitForStylesRebuild(nodeWithId, callback, requireRebuild);
};
ElementsTestRunner.waitForStyleCommitted = function(next) {
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylePropertyTreeElement.StylePropertyTreeElement.prototype, 'editingCommitted', function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        Promise.all(args).then(next);
    });
};
ElementsTestRunner.waitForStylesForClass = function(classValue, callback, requireRebuild) {
    callback = TestRunner.safeWrap(callback);
    function nodeWithClass(node) {
        var classAttr = node.getAttribute('class');
        return classAttr && classAttr.indexOf(classValue) > -1;
    }
    globalThis.waitForStylesRebuild(nodeWithClass, callback, requireRebuild);
};
ElementsTestRunner.waitForSelectorCommitted = function(callback) {
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylePropertiesSection.StylePropertiesSection.prototype, 'editingSelectorCommittedForTest', callback);
};
ElementsTestRunner.waitForMediaTextCommitted = function(callback) {
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylePropertiesSection.StylePropertiesSection.prototype, 'editingMediaTextCommittedForTest', callback);
};
ElementsTestRunner.waitForStyleApplied = function(callback) {
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylePropertyTreeElement.StylePropertyTreeElement.prototype, 'styleTextAppliedForTest', callback);
};
ElementsTestRunner.waitForStyleAppliedPromise = function() {
    return new Promise(function(resolve) {
        return ElementsTestRunner.waitForStyleApplied(resolve);
    });
};
ElementsTestRunner.selectNodeAndWaitForStyles = function(idValue, callback) {
    callback = TestRunner.safeWrap(callback);
    var targetNode;
    ElementsTestRunner.waitForStyles(idValue, stylesUpdated, true);
    ElementsTestRunner.selectNodeWithId(idValue, nodeSelected);
    function nodeSelected(node) {
        targetNode = node;
    }
    function stylesUpdated() {
        callback(targetNode);
    }
};
ElementsTestRunner.selectNodeAndWaitForStylesPromise = function(idValue) {
    return new Promise(function(x) {
        return ElementsTestRunner.selectNodeAndWaitForStyles(idValue, x);
    });
};
ElementsTestRunner.selectPseudoElementAndWaitForStyles = function(parentId, pseudoType, callback) {
    callback = TestRunner.safeWrap(callback);
    var targetNode;
    globalThis.waitForStylesRebuild(isPseudoElement, stylesUpdated, true);
    ElementsTestRunner.findNode(isPseudoElement, nodeFound);
    function nodeFound(node) {
        targetNode = node;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
    }
    function stylesUpdated() {
        callback(targetNode);
    }
    function isPseudoElement(node) {
        return node.parentNode && node.parentNode.getAttribute('id') === parentId && node.pseudoType() === pseudoType;
    }
};
ElementsTestRunner.selectNodeAndWaitForStylesWithComputed = function(idValue, callback) {
    callback = TestRunner.safeWrap(callback);
    ElementsTestRunner.selectNodeAndWaitForStyles(idValue, onSidebarRendered);
    function onSidebarRendered(node) {
        return _onSidebarRendered.apply(this, arguments);
    }
    function _onSidebarRendered() {
        _onSidebarRendered = _async_to_generator(function(node) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            ElementsTestRunner.computedStyleWidget().doUpdate().then(callback.bind(null, node))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _onSidebarRendered.apply(this, arguments);
    }
};
ElementsTestRunner.firstElementsTreeOutline = function() {
    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().treeOutlines.values().next().value;
};
ElementsTestRunner.filterMatchedStyles = function(text) {
    TestRunner.addResult('Filtering styles by: ' + text);
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.onFilterChanged({
        data: text
    });
};
ElementsTestRunner.dumpRenderedMatchedStyles = function() {
    var sectionBlocks = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sectionBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var block = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = block.sections[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var section = _step1.value;
                    if (section.element.classList.contains('hidden')) {
                        continue;
                    }
                    dumpRenderedSection(section);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
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
    function dumpRenderedSection(section) {
        TestRunner.addResult(section.selectorElement.textContent + ' {');
        var rootElement = section.propertiesTreeOutline.rootElement();
        for(var i = 0; i < rootElement.childCount(); ++i){
            dumpRenderedProperty(rootElement.childAt(i));
        }
        TestRunner.addResult('}');
    }
    function dumpRenderedProperty(property) {
        var text = new Array(4).join(' ');
        text += property.nameElement.textContent;
        text += ':';
        if (property.isExpandable()) {
            text += property.expanded ? 'v' : '>';
        } else {
            text += ' ';
        }
        text += property.valueElement.textContent;
        if (property.listItemElement.classList.contains('filter-match')) {
            text = 'F' + text.substring(1);
        }
        TestRunner.addResult(text);
        if (!property.expanded) {
            return;
        }
        var indent = new Array(8).join(' ');
        for(var i = 0; i < property.childCount(); ++i){
            var childProperty = property.childAt(i);
            var text1 = indent;
            text1 += _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.sprintf('%s: %s', childProperty.nameElement.textContent, childProperty.valueElement.textContent);
            if (childProperty.listItemElement.classList.contains('filter-match')) {
                text1 = 'F' + text1.substring(1);
            }
            TestRunner.addResult(text1);
        }
    }
};
ElementsTestRunner.dumpSelectedElementStyles = function() {
    var _ref = _async_to_generator(function(excludeComputed, excludeMatched, omitLonghands, includeSelectorGroupMarks, printInnerText) {
        var sectionBlocks, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, block, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, section, nodeDescription, err, err;
        function text(node) {
            return printInnerText ? node.innerText : node.textContent;
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sectionBlocks = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks;
                    if (!!excludeComputed) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        ElementsTestRunner.dumpComputedStyle(false, printInnerText)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        14,
                        15,
                        16
                    ]);
                    _iterator = sectionBlocks[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        13
                    ];
                    block = _step.value;
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        10,
                        11,
                        12
                    ]);
                    _iterator1 = block.sections[Symbol.iterator]();
                    _state.label = 6;
                case 6:
                    if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                        3,
                        9
                    ];
                    section = _step1.value;
                    if (section.style().parentRule && excludeMatched) {
                        return [
                            3,
                            8
                        ];
                    }
                    if (section.element.previousSibling && section.element.previousSibling.className === 'sidebar-separator') {
                        nodeDescription = '';
                        if (section.element.previousSibling.firstElementChild) {
                            nodeDescription = text(section.element.previousSibling.firstElementChild.shadowRoot.lastChild);
                        }
                        TestRunner.addResult('======== ' + text(section.element.previousSibling) + nodeDescription + ' ========');
                    }
                    return [
                        4,
                        printStyleSection(section, omitLonghands, includeSelectorGroupMarks, printInnerText)
                    ];
                case 7:
                    _state.sent();
                    _state.label = 8;
                case 8:
                    _iteratorNormalCompletion1 = true;
                    return [
                        3,
                        6
                    ];
                case 9:
                    return [
                        3,
                        12
                    ];
                case 10:
                    err = _state.sent();
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                    return [
                        3,
                        12
                    ];
                case 11:
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                    return [
                        7
                    ];
                case 12:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        16
                    ];
                case 15:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 16:
                    return [
                        2
                    ];
            }
        });
    });
    return function(excludeComputed, excludeMatched, omitLonghands, includeSelectorGroupMarks, printInnerText) {
        return _ref.apply(this, arguments);
    };
}();
function printStyleSection(section, omitLonghands, includeSelectorGroupMarks, printInnerText) {
    return _printStyleSection.apply(this, arguments);
}
function _printStyleSection() {
    _printStyleSection = _async_to_generator(function(section, omitLonghands, includeSelectorGroupMarks, printInnerText) {
        var queries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, query, queryElement, selector, selectorText, anchor, anchorText;
        function text(node) {
            return printInnerText ? node.innerText : node.textContent;
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!section) {
                        return [
                            2
                        ];
                    }
                    TestRunner.addResult('[expanded] ' + (section.propertiesTreeOutline.element.classList.contains('no-affect') ? '[no-affect] ' : ''));
                    queries = section.element.querySelectorAll('devtools-css-query');
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = queries[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            query = _step.value;
                            queryElement = query.shadowRoot.querySelector('.query');
                            // InnerText is used here to ensure test output consistency
                            // between debug and release blink tests, since textContent
                            // will preserve more DOM structural information, which would
                            // be easy to flake later.
                            TestRunner.addResult(queryElement.innerText);
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
                    selector = section.titleElement.querySelector('.selector') || section.titleElement.querySelector('.keyframe-key');
                    selectorText = includeSelectorGroupMarks ? buildMarkedSelectors(selector) : text(selector);
                    selectorText += text(selector.nextSibling);
                    anchor = section.element.querySelector('.styles-section-subtitle');
                    if (!anchor) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        extractLinkText(anchor)
                    ];
                case 1:
                    anchorText = _state.sent();
                    selectorText += _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.sprintf(' (%s)', anchorText);
                    _state.label = 2;
                case 2:
                    TestRunner.addResult(selectorText);
                    ElementsTestRunner.dumpStyleTreeOutline(section.propertiesTreeOutline, omitLonghands ? 1 : 2, printInnerText);
                    if (!section.showAllButton.classList.contains('hidden')) {
                        TestRunner.addResult(text(section.showAllButton));
                    }
                    TestRunner.addResult('');
                    return [
                        2
                    ];
            }
        });
    });
    return _printStyleSection.apply(this, arguments);
}
function extractLinkText(element) {
    return _extractLinkText.apply(this, arguments);
}
function _extractLinkText() {
    _extractLinkText = _async_to_generator(function(element) {
        var anchor, anchorText, info, uiLocation, anchorTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Links can contain live locations.
                    return [
                        4,
                        TestRunner.waitForPendingLiveLocationUpdates()
                    ];
                case 1:
                    _state.sent();
                    anchor = element.querySelector('.devtools-link');
                    if (!anchor) {
                        return [
                            2,
                            element.textContent
                        ];
                    }
                    anchorText = anchor.textContent;
                    info = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier.linkInfo(anchor);
                    uiLocation = info && info.uiLocation;
                    anchorTarget = uiLocation ? uiLocation.uiSourceCode.name() + ':' + (uiLocation.lineNumber + 1) + ':' + (uiLocation.columnNumber + 1) : '';
                    return [
                        2,
                        anchorText + ' -> ' + anchorTarget
                    ];
            }
        });
    });
    return _extractLinkText.apply(this, arguments);
}
function buildMarkedSelectors(element) {
    var result = '';
    for(var node = element.firstChild; node; node = node.nextSibling){
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('selector-matches')) {
            result += '[$' + node.textContent + '$]';
        } else {
            result += node.textContent;
        }
    }
    return result;
}
ElementsTestRunner.toggleStyleProperty = function(propertyName, checked) {
    var treeItem = ElementsTestRunner.getElementStylePropertyTreeItem(propertyName);
    treeItem.toggleDisabled(!checked);
};
ElementsTestRunner.toggleMatchedStyleProperty = function(propertyName, checked) {
    var treeItem = ElementsTestRunner.getMatchedStylePropertyTreeItem(propertyName);
    treeItem.toggleDisabled(!checked);
};
ElementsTestRunner.eventListenersWidget = function() {
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView('elements.event-listeners');
    return _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.EventListenersWidget.EventListenersWidget.instance();
};
ElementsTestRunner.showEventListenersWidget = function() {
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView('elements.event-listeners');
};
/**
 * @return {Promise}
 */ ElementsTestRunner.showComputedStyles = function() {
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().sidebarPaneView.tabbedPane().selectTab('computed', true);
    return ElementsTestRunner.computedStyleWidget().doUpdate();
};
ElementsTestRunner.expandAndDumpSelectedElementEventListeners = function(callback, force) {
    ElementsTestRunner.expandAndDumpEventListeners(ElementsTestRunner.eventListenersWidget().eventListenersView, callback, force);
};
ElementsTestRunner.removeFirstEventListener = function() {
    var treeOutline = ElementsTestRunner.eventListenersWidget().eventListenersView.treeOutline;
    var listenerTypes = treeOutline.rootElement().children();
    for(var i = 0; i < listenerTypes.length; i++){
        var listeners = listenerTypes[i].children();
        if (listeners.length && !listenerTypes[i].hidden) {
            listeners[0].eventListener().remove();
            listeners[0].removeListenerBar();
            break;
        }
    }
};
ElementsTestRunner.dumpObjectPropertySectionDeep = function(section) {
    function domNodeToString(node) {
        if (node) {
            return '\'' + node.textContent + '\'';
        }
        return 'null';
    }
    function dumpTreeElementRecursively(treeElement, prefix) {
        if ('nameElement' in treeElement) {
            TestRunner.addResult(prefix + domNodeToString(treeElement.nameElement) + ' => ' + domNodeToString(treeElement.valueElement));
        } else {
            TestRunner.addResult(prefix + treeElement.title);
        }
        for(var i = 0; i < treeElement.childCount(); i++){
            dumpTreeElementRecursively(treeElement.childAt(i), prefix + '    ');
        }
    }
    var childNodes = section.propertiesTreeOutline.rootElement().children();
    for(var i = 0; i < childNodes.length; i++){
        dumpTreeElementRecursively(childNodes[i], '');
    }
};
ElementsTestRunner.getElementStylePropertyTreeItem = function(propertyName) {
    return ElementsTestRunner.getFirstPropertyTreeItemForSection(ElementsTestRunner.inlineStyleSection(), propertyName);
};
ElementsTestRunner.getMatchedStylePropertyTreeItem = function(propertyName) {
    var sectionBlocks = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = sectionBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var block = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = block.sections[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var section = _step1.value;
                    var treeItem = ElementsTestRunner.getFirstPropertyTreeItemForSection(section, propertyName);
                    if (treeItem) {
                        return treeItem;
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
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
    return null;
};
ElementsTestRunner.getFirstPropertyTreeItemForSection = function(section, propertyName) {
    var outline = section.propertiesTreeOutline.rootElement();
    for(var i = 0; i < outline.childCount(); ++i){
        var treeItem = outline.childAt(i);
        if (treeItem.name === propertyName) {
            return treeItem;
        }
    }
    return null;
};
ElementsTestRunner.dumpStyleTreeOutline = function(treeItem, depth, printInnerText) {
    var children = treeItem.rootElement().children();
    for(var i = 0; i < children.length; ++i){
        ElementsTestRunner.dumpStyleTreeItem(children[i], '', depth || 2, printInnerText);
    }
};
ElementsTestRunner.dumpStyleTreeItem = function(treeItem, prefix, depth, printInnerText) {
    var textContent = printInnerText ? treeItem.listItemElement.innerText : TestRunner.textContentWithoutStyles(treeItem.listItemElement);
    if (textContent.indexOf(' width:') !== -1 || textContent.indexOf(' height:') !== -1) {
        return;
    }
    if (treeItem.listItemElement.classList.contains('inherited')) {
        return;
    }
    var typePrefix = '';
    if (treeItem.listItemElement.classList.contains('overloaded') || treeItem.listItemElement.classList.contains('inactive') || treeItem.listItemElement.classList.contains('not-parsed-ok')) {
        typePrefix += '/-- overloaded --/ ';
    }
    if (treeItem.listItemElement.classList.contains('disabled')) {
        typePrefix += '/-- disabled --/ ';
    }
    TestRunner.addResult(prefix + typePrefix + textContent);
    if (--depth) {
        treeItem.expand();
        var children = treeItem.children();
        for(var i = 0; children && i < children.length; ++i){
            ElementsTestRunner.dumpStyleTreeItem(children[i], prefix + '    ', depth);
        }
    }
};
ElementsTestRunner.dumpElementsTree = function(rootNode, depth, resultsArray) {
    function beautify(element) {
        return element.innerText.replace(/\u200b/g, '').replace(/\n/g, '\\n').trim();
    }
    function dumpMap(name, node) {
        var result = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = node.getMarkerKeysForTest()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var id = _step.value;
                result.push(id + '=' + node.marker(id));
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
        if (!result.length) {
            return '';
        }
        return name + ':[' + result.join(',') + ']';
    }
    function markersDataDump(treeItem) {
        if (treeItem.isClosingTag && treeItem.isClosingTag()) {
            return '';
        }
        var markers = '';
        var node = treeItem.node && treeItem.node();
        if (node) {
            markers += dumpMap('markers', node);
            var dump = node.subtreeMarkerCount ? 'subtreeMarkerCount:' + node.subtreeMarkerCount : '';
            if (dump) {
                if (markers) {
                    markers += ', ';
                }
                markers += dump;
            }
            if (markers) {
                markers = ' [' + markers + ']';
            }
        }
        return markers;
    }
    function print(treeItem, prefix, depth) {
        if (!treeItem.root) {
            var expander;
            if (treeItem.isExpandable()) {
                if (treeItem.expanded) {
                    expander = '- ';
                } else {
                    expander = '+ ';
                }
            } else {
                expander = '  ';
            }
            var markers = markersDataDump(treeItem);
            var value = prefix + expander + beautify(treeItem.listItemElement) + markers;
            if (treeItem.shadowHostToolbar) {
                value = prefix + expander + 'shadow-root ';
                for(var i = 0; i < treeItem.shadowHostToolbar.children.length; ++i){
                    var button = treeItem.shadowHostToolbar.children[i];
                    var toggled = button.disabled;
                    var name = (toggled ? '<' : '') + button.textContent + (toggled ? '>' : '');
                    value += name + ' ';
                }
            }
            if (resultsArray) {
                resultsArray.push(value);
            } else {
                TestRunner.addResult(value);
            }
        }
        if (!treeItem.expanded) {
            return;
        }
        var children = treeItem.children();
        var newPrefix = treeItem.root ? '' : prefix + '    ';
        for(var i1 = 0; depth && children && i1 < children.length; ++i1){
            if (!children[i1].isClosingTag || !children[i1].isClosingTag()) {
                print(children[i1], newPrefix, depth - 1);
            } else {
                print(children[i1], prefix, depth);
            }
        }
    }
    var treeOutline = ElementsTestRunner.firstElementsTreeOutline();
    treeOutline.runPendingUpdates();
    print(rootNode ? treeOutline.findTreeElement(rootNode) : treeOutline.rootElement(), '', depth || 10000);
};
ElementsTestRunner.dumpDOMUpdateHighlights = function(rootNode, callback, depth) {
    var hasHighlights = false;
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.prototype, 'updateModifiedNodes', didUpdate);
    function didUpdate() {
        var treeOutline = ElementsTestRunner.firstElementsTreeOutline();
        print(rootNode ? treeOutline.findTreeElement(rootNode) : treeOutline.rootElement(), '', depth || 10000);
        if (!hasHighlights) {
            TestRunner.addResult('<No highlights>');
        }
        if (callback) {
            callback();
        }
    }
    function print(treeItem, prefix, depth) {
        if (!treeItem.root) {
            var elementXPath = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.DOMPath.xPath(treeItem.node(), true);
            var highlightedElements = treeItem.listItemElement.querySelectorAll('.dom-update-highlight');
            for(var i = 0; i < highlightedElements.length; ++i){
                var element = highlightedElements[i];
                var classList = element.classList;
                var xpath = elementXPath;
                if (classList.contains('webkit-html-attribute-name')) {
                    xpath += '/@' + element.textContent + ' (empty)';
                } else if (classList.contains('webkit-html-attribute-value')) {
                    var name = element.parentElement.querySelector('.webkit-html-attribute-name').textContent;
                    xpath += '/@' + name + ' ' + element.textContent;
                } else if (classList.contains('webkit-html-text-node')) {
                    xpath += '/text() "' + element.textContent + '"';
                }
                TestRunner.addResult(prefix + xpath);
                hasHighlights = true;
            }
        }
        if (!treeItem.expanded) {
            return;
        }
        var children = treeItem.children();
        var newPrefix = treeItem.root ? '' : prefix + '    ';
        for(var i1 = 0; depth && children && i1 < children.length; ++i1){
            if (!children[i1].isClosingTag || !children[i1].isClosingTag()) {
                print(children[i1], newPrefix, depth - 1);
            }
        }
    }
};
ElementsTestRunner.expandElementsTree = function(callback) {
    var expandedSomething = false;
    callback = TestRunner.safeWrap(callback);
    function expand(treeItem) {
        var children = treeItem.children();
        for(var i = 0; children && i < children.length; ++i){
            var child = children[i];
            if (child.isExpandable() && !child.expanded) {
                child.expand();
                expandedSomething = true;
            }
            expand(child);
        }
    }
    function onAllNodesAvailable() {
        ElementsTestRunner.firstElementsTreeOutline().runPendingUpdates();
        expand(ElementsTestRunner.firstElementsTreeOutline().rootElement());
        setTimeout(callback.bind(null, expandedSomething));
    }
    ElementsTestRunner.findNode(function() {
        return false;
    }, onAllNodesAvailable);
};
ElementsTestRunner.expandAndDump = function() {
    TestRunner.addResult('\nDump tree');
    var callback;
    var result = new Promise(function(f) {
        callback = f;
    });
    ElementsTestRunner.expandElementsTree(function() {
        ElementsTestRunner.dumpElementsTree();
        callback();
    });
    return result;
};
ElementsTestRunner.dumpDOMAgentTree = function(node) {
    if (!TestRunner.domModel.document) {
        return;
    }
    function dump(node, prefix) {
        TestRunner.addResult(prefix + node.nodeName());
        prefix = prefix + '    ';
        if (node.templateContent()) {
            dump(node.templateContent(), prefix);
        }
        if (node.contentDocument()) {
            dump(node.contentDocument(), prefix);
        }
        var shadowRoots = node.shadowRoots();
        for(var i = 0; i < shadowRoots.length; ++i){
            dump(shadowRoots[i], prefix);
        }
        var children = node.children();
        for(var i1 = 0; children && i1 < children.length; ++i1){
            dump(children[i1], prefix);
        }
    }
    dump(node, '');
};
ElementsTestRunner.rangeText = function(range) {
    if (!range) {
        return '[undefined-undefined]';
    }
    return '[' + range.startLine + ':' + range.startColumn + '-' + range.endLine + ':' + range.endColumn + ']';
};
ElementsTestRunner.generateUndoTest = function(testBody) {
    function result(next) {
        var testNode = ElementsTestRunner.expandedNodeWithId(/function\s([^(]*)/.exec(testBody)[1]);
        TestRunner.addResult('Initial:');
        ElementsTestRunner.dumpElementsTree(testNode);
        testBody(undo);
        function undo() {
            TestRunner.addResult('Post-action:');
            ElementsTestRunner.dumpElementsTree(testNode);
            ElementsTestRunner.expandElementsTree(expandedCallback);
            function expandedCallback(expandedSomething) {
                if (expandedSomething) {
                    TestRunner.addResult('== Expanded: ==');
                    ElementsTestRunner.dumpElementsTree(testNode);
                }
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModelUndoStack.instance().undo().then(redo);
            }
        }
        function redo() {
            TestRunner.addResult('Post-undo (initial):');
            ElementsTestRunner.dumpElementsTree(testNode);
            ElementsTestRunner.expandElementsTree(expandedCallback);
            function expandedCallback(expandedSomething) {
                if (expandedSomething) {
                    TestRunner.addResult('== Expanded: ==');
                    ElementsTestRunner.dumpElementsTree(testNode);
                }
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModelUndoStack.instance().redo().then(done);
            }
        }
        function done() {
            TestRunner.addResult('Post-redo (action):');
            ElementsTestRunner.dumpElementsTree(testNode);
            ElementsTestRunner.expandElementsTree(expandedCallback);
            function expandedCallback(expandedSomething) {
                if (expandedSomething) {
                    TestRunner.addResult('== Expanded: ==');
                    ElementsTestRunner.dumpElementsTree(testNode);
                }
                next();
            }
        }
    }
    result.toString = function() {
        return testBody.toString();
    };
    return result;
};
var indent = '    ';
ElementsTestRunner.dumpRulesArray = function(rules, currentIndent) {
    if (!rules) {
        return;
    }
    currentIndent = currentIndent || '';
    for(var i = 0; i < rules.length; ++i){
        ElementsTestRunner.dumpRule(rules[i], currentIndent);
    }
};
ElementsTestRunner.dumpRuleMatchesArray = function(matches, currentIndent) {
    if (!matches) {
        return;
    }
    currentIndent = currentIndent || '';
    for(var i = 0; i < matches.length; ++i){
        ElementsTestRunner.dumpRule(matches[i].rule, currentIndent);
    }
};
ElementsTestRunner.dumpRule = function(rule, currentIndent) {
    function selectorRange() {
        var selectors = rule.selectorList.selectors;
        if (!selectors || !selectors[0].range) {
            return '';
        }
        var ranges = [];
        for(var i = 0; i < selectors.length; ++i){
            var range = selectors[i].range;
            ranges.push(range.startLine + ':' + range.startColumn + '-' + range.endLine + ':' + range.endColumn);
        }
        return ', ' + ranges.join('; ');
    }
    currentIndent = currentIndent || '';
    if (!rule.type || rule.type === 'style') {
        TestRunner.addResult(currentIndent + rule.selectorList.text + ': [' + rule.origin + selectorRange() + '] {');
        ElementsTestRunner.dumpStyle(rule.style, currentIndent + indent);
        TestRunner.addResult(currentIndent + '}');
        return;
    }
    if (rule.type === 'media') {
        TestRunner.addResult(currentIndent + '@media ' + rule.mediaText + ' {');
        ElementsTestRunner.dumpRulesArray(rule.childRules, currentIndent + indent);
        TestRunner.addResult(currentIndent + '}');
        return;
    }
    if (rule.type === 'import') {
        TestRunner.addResult(currentIndent + '@import: header=' + ElementsTestRunner.rangeText(rule.headerRange) + ', body=' + ElementsTestRunner.rangeText(rule.bodyRange));
        return;
    }
    if (rule.type === 'page' || rule.type === 'font-face') {
        if (rule.type === 'page') {
            TestRunner.addResult(currentIndent + rule.selectorList.text + ' {');
        } else {
            TestRunner.addResult(currentIndent + '@' + rule.type + ' ' + (rule.selectorList.text ? rule.selectorList.text + ' ' : '') + '{');
        }
        ElementsTestRunner.dumpStyle(rule.style, currentIndent + indent);
        TestRunner.addResult(currentIndent + '}');
        return;
    }
    if (rule.type === 'charset') {
        TestRunner.addResult('@charset');
        return;
    }
    TestRunner.addResult(currentIndent + '[UNKNOWN RULE]: header=' + ElementsTestRunner.rangeText(rule.headerRange) + ', body=' + ElementsTestRunner.rangeText(rule.bodyRange));
};
ElementsTestRunner.dumpStyle = function(style, currentIndent) {
    currentIndent = currentIndent || '';
    if (!style) {
        TestRunner.addResult(currentIndent + '[NO STYLE]');
        return;
    }
    for(var i = 0; i < style.cssProperties.length; ++i){
        var property = style.cssProperties[i];
        if (!property.disabled) {
            TestRunner.addResult(currentIndent + '[\'' + property.name + '\':\'' + property.value + '\'' + (property.important ? ' is-important' : '') + ('parsedOk' in property ? ' non-parsed' : '') + '] @' + ElementsTestRunner.rangeText(property.range) + ' ');
        } else {
            TestRunner.addResult(currentIndent + '[text=\'' + property.text + '\'] disabled');
        }
    }
};
ElementsTestRunner.dumpCSSStyleDeclaration = function(style, currentIndent) {
    currentIndent = currentIndent || '';
    if (!style) {
        TestRunner.addResult(currentIndent + '[NO STYLE]');
        return;
    }
    var properties = style.allProperties();
    for(var i = 0; i < properties.length; ++i){
        var property = properties[i];
        if (!property.disabled) {
            TestRunner.addResult(currentIndent + '[\'' + property.name + '\':\'' + property.value + '\'' + (property.important ? ' is-important' : '') + (!property['parsedOk'] ? ' non-parsed' : '') + '] @' + ElementsTestRunner.rangeText(property.range) + ' ');
        } else {
            TestRunner.addResult(currentIndent + '[text=\'' + property.text + '\'] disabled');
        }
    }
};
ElementsTestRunner.dumpBreadcrumb = function(message) {
    if (message) {
        TestRunner.addResult(message + ':');
    }
    var result = [];
    var crumbs = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().breadcrumbs.crumbsElement;
    var crumb = crumbs.lastChild;
    while(crumb){
        result.unshift(crumb.textContent);
        crumb = crumb.previousSibling;
    }
    TestRunner.addResult(result.join(' > '));
};
ElementsTestRunner.matchingSelectors = function(matchedStyles, rule) {
    var selectors = [];
    var matchingSelectors = matchedStyles.getMatchingSelectors(rule);
    for(var i = 0; i < matchingSelectors.length; ++i){
        selectors.push(rule.selectors[matchingSelectors[i]].text);
    }
    return '[' + selectors.join(', ') + ']';
};
ElementsTestRunner.addNewRuleInStyleSheet = function(styleSheetHeader, selector, callback) {
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylesSidebarPane.StylesSidebarPane.prototype, 'addBlankSection', onBlankSection.bind(null, selector, callback));
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.createNewRuleInStyleSheet(styleSheetHeader);
};
ElementsTestRunner.addNewRule = function(selector, callback) {
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance().stylesWidget.contentElement.querySelector('.styles-pane-toolbar').shadowRoot.querySelector('[aria-label="New Style Rule"]').click();
    TestRunner.addSniffer(_panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylesSidebarPane.StylesSidebarPane.prototype, 'addBlankSection', onBlankSection.bind(null, selector, callback));
};
function onBlankSection(selector, callback) {
    var section = ElementsTestRunner.firstMatchedStyleSection();
    if (typeof selector === 'string') {
        section.selectorElement.textContent = selector;
    }
    section.selectorElement.dispatchEvent(TestRunner.createKeyEvent('Enter'));
    ElementsTestRunner.waitForSelectorCommitted(callback.bind(null, section));
}
/**
 * The function accepts 2 or 3 arguments. Callback is the last one and the second argument is optional.
 *
 * To dump all highlight properties: dumpInspectorHighlightJSON(idValue, callback).
 * To pick which properties to dump: dumpInspectorHighlightJSON(idValue, ['prop'], callback).
 *
 * @param {string} idValue
 * @param {?Array<string>} attributes List of top-level property names to include in the result
 * @param {?Function=} maybeCallback
 */ ElementsTestRunner.dumpInspectorHighlightJSON = function(idValue, attributes, maybeCallback) {
    var callback = arguments.length === 3 ? maybeCallback : attributes;
    var attributeSet = arguments.length === 3 ? new Set(attributes) : new Set();
    ElementsTestRunner.nodeWithId(idValue, nodeResolved);
    function nodeResolved(node) {
        return _nodeResolved.apply(this, arguments);
    }
    function _nodeResolved() {
        _nodeResolved = _async_to_generator(function(node) {
            var result, view, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            TestRunner.OverlayAgent.getHighlightObjectForTest(node.id)
                        ];
                    case 1:
                        result = _state.sent();
                        view = attributeSet.size ? {} : result;
                        _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(_iterator = Object.keys(result).filter(function(key) {
                                return attributeSet.has(key);
                            })[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                key = _step.value;
                                view[key] = result[key];
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
                        TestRunner.addResult(idValue + JSON.stringify(view, null, 2));
                        callback();
                        return [
                            2
                        ];
                }
            });
        });
        return _nodeResolved.apply(this, arguments);
    }
};
ElementsTestRunner.dumpInspectorGridHighlightsJSON = function() {
    var _ref = _async_to_generator(function(idValues, callback) {
        var nodeIds, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id, node, err, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    nodeIds = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = idValues[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    id = _step.value;
                    return [
                        4,
                        ElementsTestRunner.nodeWithIdPromise(id)
                    ];
                case 3:
                    node = _state.sent();
                    nodeIds.push(node.id);
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        4,
                        TestRunner.OverlayAgent.getGridHighlightObjectsForTest(nodeIds)
                    ];
                case 9:
                    result = _state.sent();
                    TestRunner.addResult(JSON.stringify(result, null, 2));
                    callback();
                    return [
                        2
                    ];
            }
        });
    });
    return function(idValues, callback) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner.dumpInspectorDistanceJSON = function(idValue, callback) {
    ElementsTestRunner.nodeWithId(idValue, nodeResolved);
    function nodeResolved(node) {
        return _nodeResolved.apply(this, arguments);
    }
    function _nodeResolved() {
        _nodeResolved = _async_to_generator(function(node) {
            var result, info;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            TestRunner.OverlayAgent.getHighlightObjectForTest(node.id, true)
                        ];
                    case 1:
                        result = _state.sent();
                        info = result['distanceInfo'];
                        if (!info) {
                            TestRunner.addResult("".concat(idValue, ": No distance info"));
                        } else {
                            if (info['style']) {
                                info['style'] = '<style data>';
                            }
                            TestRunner.addResult(idValue + JSON.stringify(info, null, 2));
                        }
                        callback();
                        return [
                            2
                        ];
                }
            });
        });
        return _nodeResolved.apply(this, arguments);
    }
};
ElementsTestRunner.dumpInspectorHighlightStyleJSON = function() {
    var _ref = _async_to_generator(function(idValue) {
        var node, result, info;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        ElementsTestRunner.nodeWithIdPromise(idValue)
                    ];
                case 1:
                    node = _state.sent();
                    return [
                        4,
                        TestRunner.OverlayAgent.getHighlightObjectForTest(node.id, false, true)
                    ];
                case 2:
                    result = _state.sent();
                    info = result['elementInfo'] ? result['elementInfo']['style'] : null;
                    if (!info) {
                        TestRunner.addResult("".concat(idValue, ": No style info"));
                    } else {
                        if (info['font-family']) {
                            info['font-family'] = '<font-family value>';
                        }
                        TestRunner.addResult(idValue + JSON.stringify(info, null, 2));
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return function(idValue) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner.waitForAnimationAdded = function(callback) {
    TestRunner.addSniffer(_panels_animation_animation_js__WEBPACK_IMPORTED_MODULE_3__.AnimationTimeline.AnimationTimeline.prototype, 'addAnimationGroup', callback);
};
ElementsTestRunner.dumpAnimationTimeline = function(timeline) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = timeline.uiAnimations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var ui = _step.value;
            TestRunner.addResult(ui.animation().type());
            TestRunner.addResult(ui.nameElement.innerHTML);
            TestRunner.addResult(ui.svg.innerHTML);
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
};
// Saves time by ignoring sidebar updates, use in tests that don't interact
// with these sidebars.
ElementsTestRunner.ignoreSidebarUpdates = function() {
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.StylesSidebarPane.StylesSidebarPane.prototype.update = function() {};
    _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_4__.MetricsSidebarPane.MetricsSidebarPane.prototype.update = function() {};
};
ElementsTestRunner.getDocumentElements = function() {
    var map = TestRunner.domModel.idToDOMNode;
    var documents = Array.from(map.values()).filter(function(n) {
        return _instanceof(n, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMDocument);
    });
    return documents;
};
ElementsTestRunner.getDocumentElement = function() {
    var documents = ElementsTestRunner.getDocumentElements();
    return documents.length ? documents[0] : null;
};
ElementsTestRunner.mappedNodes = function() {
    return TestRunner.domModel.idToDOMNode.entries();
};


}),
"./panels/animation/animation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationDOMNode: function() { return /* reexport module object */ _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationGroupPreviewUI: function() { return /* reexport module object */ _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  AnimationModel: function() { return /* reexport module object */ _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnimationScreenshotPopover: function() { return /* reexport module object */ _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__; },
  AnimationTimeline: function() { return /* reexport module object */ _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__; },
  AnimationUI: function() { return /* reexport module object */ _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./panels/animation/AnimationDOMNode.js");
/* harmony import */var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
/* harmony import */var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=animation.js.map


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