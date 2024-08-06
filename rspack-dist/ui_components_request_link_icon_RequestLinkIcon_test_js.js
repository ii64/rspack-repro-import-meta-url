"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_request_link_icon_RequestLinkIcon_test_js"], {
"./ui/components/request_link_icon/RequestLinkIcon.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  extractElements: function() { return extractElements; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _request_link_icon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
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








var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_6__.RenderCoordinator.RenderCoordinator.instance();
var renderRequestLinkIcon = function() {
    var _ref = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _request_link_icon_js__WEBPACK_IMPORTED_MODULE_7__.RequestLinkIcon.RequestLinkIcon();
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
    return function renderRequestLinkIcon(data) {
        return _ref.apply(this, arguments);
    };
}();
var extractElements = function(shadowRoot) {
    var icon = shadowRoot.querySelector('devtools-icon');
    assert.instanceOf(icon, _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon);
    var button = shadowRoot.querySelector('button');
    assert.instanceOf(button, HTMLButtonElement);
    var label = shadowRoot.querySelector('button > span');
    if (label !== null) {
        assert.instanceOf(label, HTMLSpanElement);
    }
    return {
        icon: icon,
        button: button,
        label: label
    };
};
var _promiseMap = /*#__PURE__*/ new WeakMap();
var MockRequestResolver = /*#__PURE__*/ function() {
    "use strict";
    function MockRequestResolver() {
        _class_call_check(this, MockRequestResolver);
        _class_private_field_init(this, _promiseMap, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(MockRequestResolver, [
        {
            key: "waitFor",
            value: function waitFor(requestId) {
                if (!requestId) {
                    if (_class_private_field_get(this, _promiseMap).size !== 1) {
                        throw new Error('more than one request being awaited, specify a request id');
                    }
                    requestId = _class_private_field_get(this, _promiseMap).keys().next().value;
                }
                requestId = requestId || '';
                var entry = _class_private_field_get(this, _promiseMap).get(requestId);
                if (entry) {
                    return entry.promise;
                }
                var resolve = function() {};
                var promise = new Promise(function(r) {
                    resolve = r;
                });
                _class_private_field_get(this, _promiseMap).set(requestId, {
                    resolve: resolve,
                    promise: promise
                });
                return promise;
            }
        },
        {
            key: "resolve",
            value: function resolve(result, requestId) {
                if (!requestId && _class_private_field_get(this, _promiseMap).size === 1) {
                    requestId = _class_private_field_get(this, _promiseMap).keys().next().value;
                }
                requestId = requestId || (result === null || result === void 0 ? void 0 : result.requestId()) || '';
                var entry = _class_private_field_get(this, _promiseMap).get(requestId);
                if (!entry) {
                    throw new Error('resolve uninitialized');
                }
                entry.resolve(result);
                _class_private_field_get(this, _promiseMap).delete(requestId);
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _promiseMap).values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resolve = _step.value.resolve;
                        resolve(null);
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
        }
    ]);
    return MockRequestResolver;
}();
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('RequestLinkIcon', function() {
    var requestId1 = 'r1';
    var requestId2 = 'r2';
    describe('with simple requests', function() {
        var mockRequest = {
            url: function url() {
                return 'http://foo.bar/baz';
            }
        };
        var mockRequestWithTrailingSlash = {
            url: function url() {
                return 'http://foo.bar/baz/';
            }
        };
        var failingRequestResolver = {
            waitFor: function waitFor() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        throw new Error('Couldn\'t resolve');
                    });
                })();
            }
        };
        it('renders correctly without a request', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, _extractElements, button, icon, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId1
                                },
                                requestResolver: failingRequestResolver
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        _extractElements = extractElements(shadowRoot), button = _extractElements.button, icon = _extractElements.icon, label = _extractElements.label;
                        assert.isFalse(button.classList.contains('link'));
                        assert.strictEqual(icon.name, 'arrow-up-down-circle');
                        assert.isNull(label, 'Didn\'t expect a label');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders correctly with a request', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, _extractElements, button, icon, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                request: mockRequest
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        _extractElements = extractElements(shadowRoot), button = _extractElements.button, icon = _extractElements.icon, label = _extractElements.label;
                        assert.isTrue(button.classList.contains('link'));
                        assert.strictEqual(icon.name, 'arrow-up-down-circle');
                        assert.isNull(label, 'Didn\'t expect a label');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the request label correctly without a trailing slash', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                request: mockRequest,
                                displayURL: true
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        label = extractElements(shadowRoot).label;
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.textContent, 'baz');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the request label correctly with a trailing slash', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                request: mockRequestWithTrailingSlash,
                                displayURL: true
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        label = extractElements(shadowRoot).label;
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.textContent, 'baz/');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders the request label correctly without a request', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId1,
                                    url: 'https://alpha.beta/gamma'
                                },
                                requestResolver: failingRequestResolver,
                                displayURL: true
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        label = extractElements(shadowRoot).label;
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.textContent, 'gamma');
                        return [
                            2
                        ];
                }
            });
        }));
        it('renders alternative text for URL', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, label;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId1,
                                    url: 'https://alpha.beta/gamma'
                                },
                                requestResolver: failingRequestResolver,
                                displayURL: true,
                                urlToDisplay: 'https://alpha.beta/gamma'
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        label = extractElements(shadowRoot).label;
                        assert.strictEqual(label === null || label === void 0 ? void 0 : label.textContent, 'https://alpha.beta/gamma');
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('transitions upon request resolution', function() {
        var mockRequest = {
            url: function url() {
                return 'http://foo.bar/baz';
            }
        };
        it('to change the style correctly', /*#__PURE__*/ _async_to_generator(function() {
            var resolver, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new MockRequestResolver();
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId1,
                                    url: 'https://alpha.beta/gamma'
                                },
                                requestResolver: resolver
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        assert.isFalse(extractElements(shadowRoot).button.classList.contains('link'));
                        resolver.resolve(mockRequest);
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
        it('to set the label correctly', /*#__PURE__*/ _async_to_generator(function() {
            var _extractElements_label, _extractElements_label1, resolver, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new MockRequestResolver();
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId1,
                                    url: 'https://alpha.beta/gamma'
                                },
                                requestResolver: resolver,
                                displayURL: true
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        assert.strictEqual((_extractElements_label = extractElements(shadowRoot).label) === null || _extractElements_label === void 0 ? void 0 : _extractElements_label.textContent, 'gamma');
                        resolver.resolve(mockRequest);
                        return [
                            4,
                            coordinator.done({
                                waitForWork: true
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual((_extractElements_label1 = extractElements(shadowRoot).label) === null || _extractElements_label1 === void 0 ? void 0 : _extractElements_label1.textContent, 'baz');
                        return [
                            2
                        ];
                }
            });
        }));
        it('handles multiple data assignments', /*#__PURE__*/ _async_to_generator(function() {
            var _extractElements_label, _extractElements_label1, resolver, _ref, shadowRoot, component, mockRequest2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resolver = new MockRequestResolver();
                        return [
                            4,
                            renderRequestLinkIcon({
                                affectedRequest: {
                                    requestId: requestId2,
                                    url: 'https://alpha.beta/gamma'
                                },
                                requestResolver: resolver,
                                displayURL: true
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), shadowRoot = _ref.shadowRoot, component = _ref.component;
                        assert.strictEqual((_extractElements_label = extractElements(shadowRoot).label) === null || _extractElements_label === void 0 ? void 0 : _extractElements_label.textContent, 'gamma');
                        mockRequest2 = {
                            url: function url() {
                                return 'http://foo.bar/baz';
                            },
                            requestId: function requestId() {
                                return requestId1;
                            }
                        };
                        component.data = {
                            affectedRequest: {
                                requestId: requestId1,
                                url: 'https://alpha.beta/gamma'
                            },
                            requestResolver: resolver,
                            displayURL: true
                        };
                        resolver.resolve(mockRequest2);
                        return [
                            4,
                            coordinator.done({
                                waitForWork: true
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual((_extractElements_label1 = extractElements(shadowRoot).label) === null || _extractElements_label1 === void 0 ? void 0 : _extractElements_label1.textContent, 'baz');
                        resolver.clear();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('handles clicks correctly', function() {
        var mockRequest = {
            url: function url() {
                return 'http://foo.bar/baz';
            }
        };
        before(function() {
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.resetViewRegistration();
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.registerViewExtension({
                // @ts-ignore
                location: 'mock-location',
                id: 'network',
                title: function() {
                    return 'Network';
                },
                commandPrompt: function() {
                    return 'Network';
                },
                persistence: "closeable" /* UI.ViewManager.ViewPersistence.CLOSEABLE */ ,
                loadView: function loadView() {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                new _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget()
                            ];
                        });
                    })();
                }
            });
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance({
                forceNew: true
            });
        });
        after(function() {
            _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.maybeRemoveViewExtension('network');
        });
        it('if the button is clicked', /*#__PURE__*/ _async_to_generator(function() {
            var revealOverride, shadowRoot, button;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        revealOverride = sinon.fake(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal);
                        return [
                            4,
                            renderRequestLinkIcon({
                                request: mockRequest,
                                displayURL: true,
                                revealOverride: revealOverride
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        button = extractElements(shadowRoot).button;
                        button.click();
                        assert.isTrue(revealOverride.called);
                        assert.isTrue(revealOverride.calledOnceWith(sinon.match({
                            tab: "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ 
                        })));
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=RequestLinkIcon.test.js.map


}),

}]);