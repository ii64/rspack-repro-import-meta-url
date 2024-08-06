(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_elements_test_runner_elements_test_runner_js"], {
"./legacy_test_runner/elements_test_runner/EditDOMTestRunner.js": (function () {
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
ElementsTestRunner.doAddAttribute = function(testName, dataNodeId, attributeText, next) {
    ElementsTestRunner.domActionTestForNodeId(testName, dataNodeId, testBody, next);
    function testBody(node, done) {
        ElementsTestRunner.editNodePart(node, 'webkit-html-attribute');
        eventSender.keyDown('Tab');
        TestRunner.deprecatedRunAfterPendingDispatches(testContinuation);
        function testContinuation() {
            var editorElement = ElementsTestRunner.firstElementsTreeOutline().shadowRoot.getSelection().anchorNode.parentElement;
            editorElement.textContent = attributeText;
            editorElement.dispatchEvent(TestRunner.createKeyEvent('Enter'));
            TestRunner.addSniffer(Elements.ElementsTreeOutline.prototype, 'updateModifiedNodes', done);
        }
    }
};
ElementsTestRunner.domActionTestForNodeId = function(testName, dataNodeId, testBody, next) {
    function callback(testNode, continuation) {
        ElementsTestRunner.selectNodeWithId(dataNodeId, continuation);
    }
    ElementsTestRunner.domActionTest(testName, callback, testBody, next);
};
ElementsTestRunner.domActionTest = function(testName, dataNodeSelectionCallback, testBody, next) {
    var testNode = ElementsTestRunner.expandedNodeWithId(testName);
    TestRunner.addResult('==== before ====');
    ElementsTestRunner.dumpElementsTree(testNode);
    dataNodeSelectionCallback(testNode, step0);
    function step0(node) {
        TestRunner.deprecatedRunAfterPendingDispatches(step1.bind(null, node));
    }
    function step1(node) {
        testBody(node, step2);
    }
    function step2() {
        TestRunner.addResult('==== after ====');
        ElementsTestRunner.dumpElementsTree(testNode);
        next();
    }
};
ElementsTestRunner.editNodePart = function(node, className) {
    var treeElement = ElementsTestRunner.firstElementsTreeOutline().findTreeElement(node);
    var textElement = treeElement.listItemElement.getElementsByClassName(className)[0];
    if (!textElement && treeElement.childrenListElement) {
        textElement = treeElement.childrenListElement.getElementsByClassName(className)[0];
    }
    treeElement.startEditingTarget(textElement);
    return textElement;
};
ElementsTestRunner.editNodePartAndRun = function(node, className, newValue, step2, useSniffer) {
    var editorElement = ElementsTestRunner.editNodePart(node, className);
    editorElement.textContent = newValue;
    editorElement.dispatchEvent(TestRunner.createKeyEvent('Enter'));
    if (useSniffer) {
        TestRunner.addSniffer(Elements.ElementsTreeOutline.prototype, 'updateModifiedNodes', step2);
    } else {
        TestRunner.deprecatedRunAfterPendingDispatches(step2);
    }
};


}),
"./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js": (function () {
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
ElementsTestRunner.selectReloadAndDump = function(next, node) {
    ElementsTestRunner.selectNode(node).then(onSelected);
    var reloaded = false;
    var selected = false;
    function onSelected() {
        TestRunner.addSniffer(Elements.ElementsPanel.prototype, 'lastSelectedNodeSelectedForTest', onReSelected);
        TestRunner.reloadPage(onReloaded);
    }
    function onReloaded() {
        reloaded = true;
        maybeDumpSelectedNode();
    }
    function onReSelected() {
        selected = true;
        maybeDumpSelectedNode();
    }
    function maybeDumpSelectedNode() {
        if (!reloaded || !selected) {
            return;
        }
        var selectedElement = ElementsTestRunner.firstElementsTreeOutline().selectedTreeElement;
        var nodeName = selectedElement ? selectedElement.node().nodeNameInCorrectCase() : 'null';
        TestRunner.addResult('Selected node: \'' + nodeName + '\'');
        next();
    }
};


}),
"./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
ElementsTestRunner.events = [];
ElementsTestRunner.containerId;
ElementsTestRunner.setUpTestSuite = function(next) {
    ElementsTestRunner.expandElementsTree(step1);
    function step1() {
        ElementsTestRunner.selectNodeWithId('container', step2);
    }
    function step2(node) {
        ElementsTestRunner.containerId = node.id;
        TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId).then(step3);
    }
    function step3(text) {
        ElementsTestRunner.containerText = text;
        for(var key in _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events){
            var eventName = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events[key];
            if (eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.MarkersChanged || eventName === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.DOMMutated) {
                continue;
            }
            TestRunner.domModel.addEventListener(eventName, ElementsTestRunner.recordEvent.bind(ElementsTestRunner, eventName));
        }
        next();
    }
};
ElementsTestRunner.recordEvent = function(eventName, event) {
    if (!event.data) {
        return;
    }
    var node = event.data.node || event.data;
    var parent = event.data.parent;
    for(var currentNode = parent || node; currentNode; currentNode = currentNode.parentNode){
        if (currentNode.getAttribute('id') === 'output') {
            return;
        }
    }
    ElementsTestRunner.events.push('Event ' + eventName.toString() + ': ' + node.nodeName());
};
ElementsTestRunner.patchOuterHTML = function(pattern, replacement, next) {
    TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
    ElementsTestRunner.setOuterHTML(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};
ElementsTestRunner.patchOuterHTMLUseUndo = function(pattern, replacement, next) {
    TestRunner.addResult('Replacing \'' + pattern + '\' with \'' + replacement + '\'\n');
    ElementsTestRunner.setOuterHTMLUseUndo(ElementsTestRunner.containerText.replace(pattern, replacement), next);
};
ElementsTestRunner.setOuterHTML = function(newText, next) {
    ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);
    function bringBack() {
        TestRunner.addResult('\nBringing things back\n');
        ElementsTestRunner.innerSetOuterHTML(ElementsTestRunner.containerText, true, next);
    }
};
ElementsTestRunner.setOuterHTMLUseUndo = function(newText, next) {
    ElementsTestRunner.innerSetOuterHTML(newText, false, bringBack);
    function bringBack() {
        return _bringBack.apply(this, arguments);
    }
    function _bringBack() {
        _bringBack = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        TestRunner.addResult('\nBringing things back\n');
                        return [
                            4,
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModelUndoStack.instance().undo()
                        ];
                    case 1:
                        _state.sent();
                        ElementsTestRunner._dumpOuterHTML(true, next);
                        return [
                            2
                        ];
                }
            });
        });
        return _bringBack.apply(this, arguments);
    }
};
ElementsTestRunner.innerSetOuterHTML = function() {
    var _ref = _async_to_generator(function(newText, last, next) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.DOMAgent.setOuterHTML(ElementsTestRunner.containerId, newText)
                    ];
                case 1:
                    _state.sent();
                    TestRunner.domModel.markUndoableState();
                    ElementsTestRunner._dumpOuterHTML(last, next);
                    return [
                        2
                    ];
            }
        });
    });
    return function(newText, last, next) {
        return _ref.apply(this, arguments);
    };
}();
ElementsTestRunner._dumpOuterHTML = function() {
    var _ref = _async_to_generator(function(last, next) {
        var result, i, text;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        TestRunner.RuntimeAgent.evaluate('document.getElementById("identity").wrapperIdentity')
                    ];
                case 1:
                    result = _state.sent();
                    TestRunner.addResult('Wrapper identity: ' + result.value);
                    ElementsTestRunner.events.sort();
                    for(i = 0; i < ElementsTestRunner.events.length; ++i){
                        TestRunner.addResult(ElementsTestRunner.events[i]);
                    }
                    ElementsTestRunner.events = [];
                    return [
                        4,
                        TestRunner.DOMAgent.getOuterHTML(ElementsTestRunner.containerId)
                    ];
                case 2:
                    text = _state.sent();
                    TestRunner.addResult('==========8<==========');
                    TestRunner.addResult(text);
                    TestRunner.addResult('==========>8==========');
                    if (last) {
                        TestRunner.addResult('\n\n\n');
                    }
                    next();
                    return [
                        2
                    ];
            }
        });
    });
    return function(last, next) {
        return _ref.apply(this, arguments);
    };
}();


}),
"./legacy_test_runner/elements_test_runner/StylesUpdateLinksTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./panels/elements/elements.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.ElementsTestRunner = self.ElementsTestRunner || {};
function flattenRuleRanges(rule) {
    var ranges = [];
    var medias = rule.media || [];
    for(var i = 0; i < medias.length; ++i){
        var media = medias[i];
        if (!media.range) {
            continue;
        }
        ranges.push({
            range: media.range,
            name: 'media #' + i
        });
    }
    for(var i1 = 0; i1 < rule.selectors.length; ++i1){
        var selector = rule.selectors[i1];
        if (!selector.range) {
            continue;
        }
        ranges.push({
            range: selector.range,
            name: 'selector #' + i1
        });
    }
    if (rule.style.range) {
        ranges.push({
            range: rule.style.range,
            name: 'style range'
        });
    }
    var properties = rule.style.allProperties();
    for(var i2 = 0; i2 < properties.length; ++i2){
        var property = properties[i2];
        if (!property.range) {
            continue;
        }
        ranges.push({
            range: property.range,
            name: 'property >>' + property.text + '<<'
        });
    }
    return ranges;
}
function compareRuleRanges(lazyRule, originalRule) {
    if (lazyRule.selectorText !== originalRule.selectorText) {
        TestRunner.addResult('Error: rule selectors are not equal: ' + lazyRule.selectorText + ' != ' + originalRule.selectorText);
        return false;
    }
    var flattenLazy = flattenRuleRanges(lazyRule);
    var flattenOriginal = flattenRuleRanges(originalRule);
    if (flattenLazy.length !== flattenOriginal.length) {
        TestRunner.addResult('Error: rule range amount is not equal: ' + flattenLazy.length + ' != ' + flattenOriginal.length);
        return false;
    }
    for(var i = 0; i < flattenLazy.length; ++i){
        var lazyRange = flattenLazy[i];
        var originalRange = flattenOriginal[i];
        if (lazyRange.name !== originalRange.name) {
            TestRunner.addResult('Error: rule names are not equal: ' + lazyRange.name + ' != ' + originalRange.name);
            return false;
        }
        if (!lazyRange.range.equal(originalRange.range)) {
            TestRunner.addResult('Error: ranges \'' + lazyRange.name + '\' are not equal: ' + lazyRange.range.toString() + ' != ' + originalRange.range.toString());
            return false;
        }
    }
    TestRunner.addResult(flattenLazy.length + ' rule ranges are equal.');
    return true;
}
ElementsTestRunner.validateRuleRanges = function(selector, rules, callback) {
    ElementsTestRunner.selectNodeAndWaitForStyles('other', onOtherSelected);
    function onOtherSelected() {
        ElementsTestRunner.selectNodeAndWaitForStyles(selector, onContainerSelected);
    }
    function onContainerSelected() {
        var fetchedRules = ElementsTestRunner.getMatchedRules();
        if (fetchedRules.length !== rules.length) {
            TestRunner.addResult(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.sprintf('Error: rules sizes are not equal! Expected: %d, actual: %d', fetchedRules.length, rules.length));
            TestRunner.completeTest();
            return;
        }
        for(var i = 0; i < fetchedRules.length; ++i){
            if (!compareRuleRanges(rules[i], fetchedRules[i])) {
                TestRunner.completeTest();
                return;
            }
        }
        callback();
    }
};
ElementsTestRunner.getMatchedRules = function() {
    var rules = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_1__.ElementsPanel.ElementsPanel.instance().stylesWidget.sectionBlocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var block = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = block.sections[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var section = _step1.value;
                    var rule = section.style().parentRule;
                    if (rule) {
                        rules.push(rule);
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
    return rules;
};


}),
"./legacy_test_runner/elements_test_runner/elements_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ElementsTestRunner: function() { return ElementsTestRunner; }
});
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var _ElementsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ElementsTestRunner.js */ "./legacy_test_runner/elements_test_runner/ElementsTestRunner.js");
/* harmony import */var _EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditDOMTestRunner.js */ "./legacy_test_runner/elements_test_runner/EditDOMTestRunner.js");
/* harmony import */var _EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_EditDOMTestRunner_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */var _SetOuterHTMLTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SetOuterHTMLTestRunner.js */ "./legacy_test_runner/elements_test_runner/SetOuterHTMLTestRunner.js");
/* harmony import */var _ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ElementsPanelShadowSelectionOnRefreshTestRunner.js */ "./legacy_test_runner/elements_test_runner/ElementsPanelShadowSelectionOnRefreshTestRunner.js");
/* harmony import */var _ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ElementsPanelShadowSelectionOnRefreshTestRunner_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */var _StylesUpdateLinksTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StylesUpdateLinksTestRunner.js */ "./legacy_test_runner/elements_test_runner/StylesUpdateLinksTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






var ElementsTestRunner = self.ElementsTestRunner;



}),

}]);