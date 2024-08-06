"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_accessibility_test_runner_accessibility_test_runner_js"], {
"./legacy_test_runner/accessibility_test_runner/accessibility_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTestRunner: function() { return AccessibilityTestRunner; }
});
/* harmony import */var _elements_test_runner_elements_test_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../elements_test_runner/elements_test_runner.js */ "./legacy_test_runner/elements_test_runner/elements_test_runner.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _panels_accessibility_accessibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/accessibility/accessibility.js */ "./panels/accessibility/accessibility.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var AccessibilityTestRunner = {};
AccessibilityTestRunner.accessibilitySidebarPane = function() {
    return _panels_accessibility_accessibility_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilitySidebarView.AccessibilitySidebarView.instance();
};
AccessibilityTestRunner.selectNodeAndWaitForAccessibility = function(idValue) {
    return new Promise(function(resolve) {
        ElementsTestRunner.selectNodeWithId(idValue, function() {
            _panels_accessibility_accessibility_js__WEBPACK_IMPORTED_MODULE_2__.AccessibilitySidebarView.AccessibilitySidebarView.instance().doUpdate().then(resolve);
        });
    });
};
AccessibilityTestRunner.dumpSelectedElementAccessibilityNode = function() {
    var sidebarPane = AccessibilityTestRunner.accessibilitySidebarPane();
    if (!sidebarPane) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('No sidebarPane in dumpSelectedElementAccessibilityNode');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.completeTest();
        return;
    }
    AccessibilityTestRunner.dumpAccessibilityNode(sidebarPane.axNodeSubPane.axNode);
};
AccessibilityTestRunner.dumpAccessibilityNode = function(accessibilityNode) {
    if (!accessibilityNode) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('<null>');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.completeTest();
        return;
    }
    var builder = [];
    builder.push(accessibilityNode.role().value);
    builder.push(accessibilityNode.name() ? '"' + accessibilityNode.name().value + '"' : '<undefined>');
    if (accessibilityNode.properties()) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = accessibilityNode.properties()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var property = _step.value;
                if ('value' in property) {
                    builder.push(property.name + '="' + property.value.value + '"');
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
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(builder.join(' '));
};
AccessibilityTestRunner.findARIAAttributeTreeElement = function(attribute) {
    var sidebarPane = AccessibilityTestRunner.accessibilitySidebarPane();
    if (!sidebarPane) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('Could not get Accessibility sidebar pane.');
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.completeTest();
        return;
    }
    var ariaSubPane = sidebarPane.ariaSubPane;
    var treeOutline = ariaSubPane.treeOutline;
    var childNodes = treeOutline.rootElement().children();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var treeElement = _step.value;
            if (treeElement.attribute.name === attribute) {
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


}),
"./panels/accessibility/accessibility.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAAttributesView: function() { return /* reexport module object */ _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__; },
  ARIAMetadata: function() { return /* reexport module object */ _ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__; },
  AXBreadcrumbsPane: function() { return /* reexport module object */ _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_6__; },
  AccessibilityNodeView: function() { return /* reexport module object */ _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_0__; },
  AccessibilitySidebarView: function() { return /* reexport module object */ _AccessibilitySidebarView_js__WEBPACK_IMPORTED_MODULE_1__; },
  AccessibilityStrings: function() { return /* reexport module object */ _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_2__; },
  AccessibilitySubPane: function() { return /* reexport module object */ _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_3__; }
});
/* harmony import */var _AccessibilityNodeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityNodeView.js */ "./panels/accessibility/AccessibilityNodeView.js");
/* harmony import */var _AccessibilitySidebarView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessibilitySidebarView.js */ "./panels/accessibility/AccessibilitySidebarView.js");
/* harmony import */var _AccessibilityStrings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccessibilityStrings.js */ "./panels/accessibility/AccessibilityStrings.js");
/* harmony import */var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
/* harmony import */var _ARIAAttributesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ARIAAttributesView.js */ "./panels/accessibility/ARIAAttributesView.js");
/* harmony import */var _ARIAMetadata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ARIAMetadata.js */ "./panels/accessibility/ARIAMetadata.js");
/* harmony import */var _AXBreadcrumbsPane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AXBreadcrumbsPane.js */ "./panels/accessibility/AXBreadcrumbsPane.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=accessibility.js.map


}),

}]);