"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_AccessibilitySidebarView_test_js"], {
"./panels/accessibility/AccessibilitySidebarView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _accessibility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessibility.js */ "./panels/accessibility/accessibility.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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




var NODE_ID = 1;
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('AccessibilitySidebarView', function() {
    var target;
    var view;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
            return {
                root: {
                    nodeId: NODE_ID
                }
            };
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('DOM.getNodesForSubtreeByStyle', function() {
            return {
                nodeIds: []
            };
        });
    });
    afterEach(function() {
        view.detach();
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var updatesUiOnEvent = function(event, inScope) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var domModel, accessibilityModel, requestPartialAXTree, node;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMModel);
                        assert.exists(domModel);
                        accessibilityModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.AccessibilityModel.AccessibilityModel);
                        assert.exists(accessibilityModel);
                        requestPartialAXTree = sinon.stub(accessibilityModel, 'requestPartialAXTree');
                        requestPartialAXTree.resolves();
                        node = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode(domModel);
                        view = _accessibility_js__WEBPACK_IMPORTED_MODULE_3__.AccessibilitySidebarView.AccessibilitySidebarView.instance({
                            forceNew: true,
                            throttlingTimeout: 0
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        view.setNode(node);
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        requestPartialAXTree.resetHistory();
                        domModel.dispatchEventToListeners(event, {
                            node: node
                        });
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(requestPartialAXTree.called, inScope);
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('updates UI on in scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, true));
    it('does not update UI on out of scope attribute modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrModified, false));
    it('updates UI on in scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrRemoved, true));
    it('does not update UI on out of scope attribute removed event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.AttrRemoved, false));
    it('updates UI on in scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, true));
    it('does not update UI on out of scope charachter data modified event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.CharacterDataModified, false));
    it('updates UI on in scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, true));
    it('does not update UI on out of scope child node count updated event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.Events.ChildNodeCountUpdated, false));
}); //# sourceMappingURL=AccessibilitySidebarView.test.js.map


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