"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_security_test_runner_security_test_runner_js"], {
"./legacy_test_runner/security_test_runner/security_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SecurityTestRunner: function() { return SecurityTestRunner; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_security_security_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/security/security.js */ "./panels/security/security.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__);
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var SecurityTestRunner = {};
SecurityTestRunner.dumpSecurityPanelSidebarOrigins = function() {
    for(var key in _panels_security_security_js__WEBPACK_IMPORTED_MODULE_1__.SecurityPanel.OriginGroup){
        var originGroup = _panels_security_security_js__WEBPACK_IMPORTED_MODULE_1__.SecurityPanel.OriginGroup[key];
        var element = _panels_security_security_js__WEBPACK_IMPORTED_MODULE_1__.SecurityPanel.SecurityPanel.instance().sidebarTree.originGroups.get(originGroup);
        if (element.hidden) {
            continue;
        }
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.addResult('Group: ' + element.title);
        var originTitles = element.childrenListElement.getElementsByTagName('span');
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = originTitles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var originTitle = _step.value;
                if (originTitle.className !== 'tree-element-title') {
                    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.dumpDeepInnerHTML(originTitle);
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
};
SecurityTestRunner.dispatchRequestFinished = function(request) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_2__.TestRunner.networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.RequestFinished, request);
};


}),
"./panels/security/security.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SecurityModel: function() { return /* reexport module object */ _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__; },
  SecurityPanel: function() { return /* reexport module object */ _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _SecurityModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SecurityModel.js */ "./panels/security/SecurityModel.js");
/* harmony import */var _SecurityPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecurityPanel.js */ "./panels/security/SecurityPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=security.js.map


}),

}]);