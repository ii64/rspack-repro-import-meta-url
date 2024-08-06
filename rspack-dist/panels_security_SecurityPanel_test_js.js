"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_security_SecurityPanel_test_js"], {
"./panels/security/SecurityPanel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _security_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.js */ "./panels/security/security.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('SecurityPanel', function() {
    var target;
    var prerenderTarget;
    beforeEach(function() {
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
        });
        prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget
        });
    });
    it('updates when security state changes', /*#__PURE__*/ _async_to_generator(function() {
        var _securityPanel_mainView_contentElement_querySelector, _securityPanel_mainView_contentElement_querySelector1, _securityPanel_mainView_contentElement_querySelector2, securityPanel, securityModel, visibleSecurityState;
        return _ts_generator(this, function(_state) {
            securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({
                forceNew: true
            });
            securityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
            assert.exists(securityModel);
            visibleSecurityState = {
                securityState: "insecure" /* Protocol.Security.SecurityState.Insecure */ ,
                securityStateIssueIds: [],
                certificateSecurityState: null
            };
            securityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
            assert.isTrue((_securityPanel_mainView_contentElement_querySelector = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector.classList.contains('security-summary-insecure'));
            visibleSecurityState.securityState = "secure" /* Protocol.Security.SecurityState.Secure */ ;
            securityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
            assert.isFalse((_securityPanel_mainView_contentElement_querySelector1 = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector1 === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector1.classList.contains('security-summary-insecure'));
            assert.isTrue((_securityPanel_mainView_contentElement_querySelector2 = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector2 === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector2.classList.contains('security-summary-secure'));
            return [
                2
            ];
        });
    }));
    it('can switch to a different SecurityModel', /*#__PURE__*/ _async_to_generator(function() {
        var _securityPanel_mainView_contentElement_querySelector, _securityPanel_mainView_contentElement_querySelector1, _securityPanel_mainView_contentElement_querySelector2, mainSecurityModel, securityPanel, visibleSecurityState, prerenderSecurityModel, sidebarTreeClearSpy;
        return _ts_generator(this, function(_state) {
            mainSecurityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
            assert.exists(mainSecurityModel);
            securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({
                forceNew: true
            });
            // Add the main target to the security panel.
            securityPanel.modelAdded(mainSecurityModel);
            visibleSecurityState = {
                securityState: "insecure" /* Protocol.Security.SecurityState.Insecure */ ,
                securityStateIssueIds: [],
                certificateSecurityState: null
            };
            mainSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
            assert.isTrue((_securityPanel_mainView_contentElement_querySelector = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector.classList.contains('security-summary-insecure'));
            // Switch to the prerender target.
            prerenderSecurityModel = prerenderTarget.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
            assert.exists(prerenderSecurityModel);
            securityPanel.modelAdded(prerenderSecurityModel);
            securityPanel.modelRemoved(mainSecurityModel);
            // Check that the security panel does not listen to events from the previous target.
            visibleSecurityState.securityState = "secure" /* Protocol.Security.SecurityState.Secure */ ;
            mainSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
            assert.isTrue((_securityPanel_mainView_contentElement_querySelector1 = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector1 === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector1.classList.contains('security-summary-insecure'));
            // Check that the security panel listens to events from the current target.
            prerenderSecurityModel.dispatchEventToListeners(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.Events.VisibleSecurityStateChanged, visibleSecurityState);
            assert.isTrue((_securityPanel_mainView_contentElement_querySelector2 = securityPanel.mainView.contentElement.querySelector('.security-summary')) === null || _securityPanel_mainView_contentElement_querySelector2 === void 0 ? void 0 : _securityPanel_mainView_contentElement_querySelector2.classList.contains('security-summary-secure'));
            // Check that the SecurityPanel listens to any PrimaryPageChanged event
            sidebarTreeClearSpy = sinon.spy(securityPanel.sidebarTree, 'clearOrigins');
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
            assert.isTrue(sidebarTreeClearSpy.calledOnce);
            return [
                2
            ];
        });
    }));
    it('shows \'reload page\' message when no data is available', /*#__PURE__*/ _async_to_generator(function() {
        var securityModel, securityPanel, reloadMessage, networkManager, request;
        return _ts_generator(this, function(_state) {
            securityModel = target.model(_security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityModel.SecurityModel);
            assert.exists(securityModel);
            securityPanel = _security_js__WEBPACK_IMPORTED_MODULE_4__.SecurityPanel.SecurityPanel.instance({
                forceNew: true
            });
            // Check that reload message is visible initially.
            reloadMessage = securityPanel.sidebarTree.shadowRoot.querySelector('.security-main-view-reload-message');
            assert.instanceOf(reloadMessage, HTMLLIElement);
            assert.isFalse(reloadMessage.classList.contains('hidden'));
            // Check that reload message is hidden when there is data to display.
            networkManager = securityModel.networkManager();
            request = {
                wasBlocked: function() {
                    return false;
                },
                url: function() {
                    return 'https://www.example.com';
                },
                securityState: function() {
                    return "secure" /* Protocol.Security.SecurityState.Secure */ ;
                },
                securityDetails: function() {
                    return null;
                },
                cached: function() {
                    return false;
                }
            };
            networkManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.RequestFinished, request);
            assert.isTrue(reloadMessage.classList.contains('hidden'));
            // Check that reload message is hidden after clearing data.
            (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target));
            assert.isFalse(reloadMessage.classList.contains('hidden'));
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=SecurityPanel.test.js.map


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