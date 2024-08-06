"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_issue_counter_IssueLinkIcon_test_js"], {
"./ui/components/issue_counter/IssueLinkIcon.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  extractElements: function() { return extractElements; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _issue_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issue_counter.js */ "./ui/components/issue_counter/issue_counter.js");
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
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







var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
var renderIssueLinkIcon = function() {
    var _ref = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueLinkIcon.IssueLinkIcon();
                    component.data = data;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
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
    return function renderIssueLinkIcon(data) {
        return _ref.apply(this, arguments);
    };
}();
var extractElements = function(shadowRoot) {
    var icon = shadowRoot.querySelector('devtools-icon');
    assert.instanceOf(icon, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon);
    var button = shadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    return {
        icon: icon,
        button: button
    };
};
var _promiseMap = /*#__PURE__*/ new WeakMap();
var MockIssueResolver = /*#__PURE__*/ function() {
    "use strict";
    function MockIssueResolver() {
        _class_call_check(this, MockIssueResolver);
        _class_private_field_init(this, _promiseMap, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(MockIssueResolver, [
        {
            key: "waitFor",
            value: function waitFor(issueId) {
                if (!issueId) {
                    if (_class_private_field_get(this, _promiseMap).size !== 1) {
                        throw new Error('more than one issue being awaited, specify a issue id');
                    }
                    issueId = _class_private_field_get(this, _promiseMap).keys().next().value;
                }
                issueId = issueId || '';
                var entry = _class_private_field_get(this, _promiseMap).get(issueId);
                if (entry) {
                    return entry.promise;
                }
                var resolve = function() {};
                var promise = new Promise(function(r) {
                    resolve = r;
                });
                _class_private_field_get(this, _promiseMap).set(issueId, {
                    resolve: resolve,
                    promise: promise
                });
                return promise;
            }
        },
        {
            key: "resolve",
            value: function resolve(result, issueId) {
                if (!issueId && _class_private_field_get(this, _promiseMap).size === 1) {
                    issueId = _class_private_field_get(this, _promiseMap).keys().next().value;
                }
                issueId = issueId || (result === null || result === void 0 ? void 0 : result.getIssueId()) || '';
                var entry = _class_private_field_get(this, _promiseMap).get(issueId);
                if (!entry) {
                    throw new Error('resolve uninitialized');
                }
                entry.resolve(result);
                _class_private_field_get(this, _promiseMap).delete(issueId);
            }
        }
    ]);
    return MockIssueResolver;
}();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithLocale)('IssueLinkIcon', function() {
    var issueId = 'issue1';
    var mockIssue = {
        getKind: function getKind() {
            return "PageError" /* IssuesManager.Issue.IssueKind.PageError */ ;
        },
        getIssueId: function getIssueId() {
            return issueId;
        },
        getDescription: function getDescription() {
            return null;
        }
    };
    describe('with simple issues', function() {
        var failingIssueResolver = {
            waitFor: function waitFor() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        throw new Error('Couldn\'t resolve');
                    });
                })();
            }
        };
        it('renders correctly without an issue', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, icon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderIssueLinkIcon({
                                issueId: issueId,
                                issueResolver: failingIssueResolver
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        icon = extractElements(shadowRoot).icon;
                        assert.strictEqual(icon.name, 'issue-questionmark-filled');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders correctly with a "page error" issue', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, icon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderIssueLinkIcon({
                                issue: mockIssue
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        icon = extractElements(shadowRoot).icon;
                        assert.strictEqual(icon.name, 'issue-cross-filled');
                        return [
                            2
                        ];
                }
            });
        }));
        it('the style reacts to the presence of the issue', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderIssueLinkIcon({
                                issue: mockIssue
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        button = extractElements(shadowRoot).button;
                        assert.isTrue(button.classList.contains('link'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('the style reacts to the absence of an issue', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderIssueLinkIcon({
                                issueId: issueId,
                                issueResolver: failingIssueResolver
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        button = extractElements(shadowRoot).button;
                        assert.isFalse(button.classList.contains('link'));
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('transitions upon issue resolution', function() {
        it('to change the style correctly', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new MockIssueResolver();
                        return [
                            4,
                            renderIssueLinkIcon({
                                issueId: issueId,
                                issueResolver: resolver
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        resolver.resolve(mockIssue);
                        return [
                            4,
                            coordinator.done({
                                waitForWork: true
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(extractElements(shadowRoot).button.classList.contains('link'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('handles multiple data assignments', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, shadowRoot, component, mockIssue2, icon;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderIssueLinkIcon({
                                issue: mockIssue
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), shadowRoot = _ref.shadowRoot, component = _ref.component;
                        mockIssue2 = {
                            getKind: function getKind() {
                                return "BreakingChange" /* IssuesManager.Issue.IssueKind.BreakingChange */ ;
                            }
                        };
                        component.data = {
                            issue: mockIssue2
                        };
                        return [
                            4,
                            coordinator.done({
                                waitForWork: true
                            })
                        ];
                    case 2:
                        _state.sent();
                        icon = extractElements(shadowRoot).icon;
                        assert.strictEqual(icon.name, 'issue-exclamation-filled');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('handles clicks correctly', function() {
        it('if the button is clicked', /*#__PURE__*/ _async_to_generator(function() {
            var revealOverride, shadowRoot, button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        revealOverride = sinon.fake(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal);
                        return [
                            4,
                            renderIssueLinkIcon({
                                issue: mockIssue,
                                revealOverride: revealOverride
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        button = extractElements(shadowRoot).button;
                        button.click();
                        assert.isTrue(revealOverride.called);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=IssueLinkIcon.test.js.map


}),

}]);