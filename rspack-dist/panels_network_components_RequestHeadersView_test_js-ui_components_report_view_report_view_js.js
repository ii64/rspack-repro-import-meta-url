"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_RequestHeadersView_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/components/RequestHeadersView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _forward_forward_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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













var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_10__.RenderCoordinator.RenderCoordinator.instance();
var defaultRequest = {
    statusCode: 200,
    statusText: 'OK',
    requestMethod: 'GET',
    url: function() {
        return 'https://www.example.com/index.html';
    },
    cachedInMemory: function() {
        return true;
    },
    remoteAddress: function() {
        return '199.36.158.100:443';
    },
    referrerPolicy: function() {
        return "strict-origin-when-cross-origin" /* Protocol.Network.RequestReferrerPolicy.StrictOriginWhenCrossOrigin */ ;
    },
    sortedResponseHeaders: [
        {
            name: 'age',
            value: '0'
        },
        {
            name: 'cache-control',
            value: 'max-age=600'
        },
        {
            name: 'content-encoding',
            value: 'gzip'
        },
        {
            name: 'content-length',
            value: '661'
        }
    ],
    requestHeadersText: function() {
        return '';
    },
    requestHeaders: function() {
        return [
            {
                name: ':method',
                value: 'GET'
            },
            {
                name: 'accept-encoding',
                value: 'gzip, deflate, br'
            },
            {
                name: 'cache-control',
                value: 'no-cache'
            }
        ];
    },
    responseHeadersText: "HTTP/1.1 200 OK\n  age: 0\n  cache-control: max-age=600\n  content-encoding: gzip\n  content-length: 661\n  ",
    wasBlocked: function() {
        return false;
    },
    blockedResponseCookies: function() {
        return [];
    },
    originalResponseHeaders: [],
    setCookieHeaders: [],
    getAssociatedData: function() {
        return null;
    },
    setAssociatedData: function() {},
    earlyHintsHeaders: [
        {
            name: 'link',
            value: '<src="/script.js" as="script">'
        }
    ]
};
function renderHeadersComponent(request) {
    return _renderHeadersComponent.apply(this, arguments);
}
function _renderHeadersComponent() {
    _renderHeadersComponent = _async_to_generator(function(request) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    Object.setPrototypeOf(request, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.prototype);
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.RequestHeadersView(request);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    component.wasShown();
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderHeadersComponent.apply(this, arguments);
}
var getTextFromRow = function(row) {
    var _headerNameElement_textContent, _headerValueElement_textContent;
    assert.isNotNull(row.shadowRoot);
    var headerNameElement = row.shadowRoot.querySelector('.header-name');
    var headerName = (headerNameElement === null || headerNameElement === void 0 ? void 0 : (_headerNameElement_textContent = headerNameElement.textContent) === null || _headerNameElement_textContent === void 0 ? void 0 : _headerNameElement_textContent.trim()) || '';
    var headerValueElement = row.shadowRoot.querySelector('.header-value');
    var headerValue = (headerValueElement === null || headerValueElement === void 0 ? void 0 : (_headerValueElement_textContent = headerValueElement.textContent) === null || _headerValueElement_textContent === void 0 ? void 0 : _headerValueElement_textContent.trim()) || '';
    return [
        headerName,
        headerValue
    ];
};
var getRowsFromCategory = function(category) {
    var slot = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getElementWithinComponent)(category, 'slot', HTMLSlotElement);
    var section = slot.assignedElements()[0];
    assert.instanceOf(section, HTMLElement);
    assert.isNotNull(section.shadowRoot);
    var rows = section.shadowRoot.querySelectorAll('devtools-header-section-row');
    return Array.from(rows);
};
var getRowsTextFromCategory = function(category) {
    return getRowsFromCategory(category).map(function(row) {
        return getTextFromRow(row);
    });
};
var getRowHighlightStatus = function(container) {
    var rows = getRowsFromCategory(container);
    return rows.map(function(row) {
        var _row_shadowRoot;
        var element = (_row_shadowRoot = row.shadowRoot) === null || _row_shadowRoot === void 0 ? void 0 : _row_shadowRoot.querySelector('.row');
        return (element === null || element === void 0 ? void 0 : element.classList.contains('header-highlight')) || false;
    });
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__.describeWithMockConnection)('RequestHeadersView', function() {
    var component = null;
    beforeEach(function() {
        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__.setUpEnvironment)();
        (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__.resetRecordedMetrics)();
    });
    afterEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component === null || component === void 0 ? void 0 : component.remove();
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders the General section', /*#__PURE__*/ _async_to_generator(function() {
        var generalCategory, names, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    generalCategory = component.shadowRoot.querySelector('[aria-label="General"]');
                    assert.instanceOf(generalCategory, HTMLElement);
                    names = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(generalCategory, '.header-name');
                    assert.deepEqual(names, [
                        'Request URL:',
                        'Request Method:',
                        'Status Code:',
                        'Remote Address:',
                        'Referrer Policy:'
                    ]);
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(generalCategory, '.header-value');
                    assert.deepEqual(values, [
                        'https://www.example.com/index.html',
                        'GET',
                        '200 OK (from memory cache)',
                        '199.36.158.100:443',
                        'strict-origin-when-cross-origin'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('status text of a request from cache memory corresponds to the status code', /*#__PURE__*/ _async_to_generator(function() {
        var request, statusCodeSection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
                    request.statusCode = 200;
                    request.setFromMemoryCache();
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    statusCodeSection = component.shadowRoot.querySelector('.status-with-comment');
                    assert.strictEqual('200 OK (from memory cache)', statusCodeSection === null || statusCodeSection === void 0 ? void 0 : statusCodeSection.textContent);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders request and response headers', /*#__PURE__*/ _async_to_generator(function() {
        var responseHeadersCategory, requestHeadersCategory;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [
                        [
                            'age:',
                            '0'
                        ],
                        [
                            'cache-control:',
                            'max-age=600'
                        ],
                        [
                            'content-encoding:',
                            'gzip'
                        ],
                        [
                            'content-length:',
                            '661'
                        ]
                    ]);
                    requestHeadersCategory = component.shadowRoot.querySelector('[aria-label="Request Headers"]');
                    assert.instanceOf(requestHeadersCategory, HTMLElement);
                    assert.deepStrictEqual(getRowsTextFromCategory(requestHeadersCategory), [
                        [
                            ':method:',
                            'GET'
                        ],
                        [
                            'accept-encoding:',
                            'gzip, deflate, br'
                        ],
                        [
                            'cache-control:',
                            'no-cache'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders early hints headers', /*#__PURE__*/ _async_to_generator(function() {
        var earlyHintsCategory;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    earlyHintsCategory = component.shadowRoot.querySelector('[aria-label="Early Hints Headers"]');
                    assert.instanceOf(earlyHintsCategory, HTMLElement);
                    assert.deepStrictEqual(getRowsTextFromCategory(earlyHintsCategory), [
                        [
                            'link:',
                            '<src="/script.js" as="script">'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('emits UMA event when a header value is being copied', /*#__PURE__*/ _async_to_generator(function() {
        var generalCategory, spy, headerValue;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    generalCategory = component.shadowRoot.querySelector('[aria-label="General"]');
                    assert.instanceOf(generalCategory, HTMLElement);
                    spy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics, 'actionTaken');
                    headerValue = generalCategory.querySelector('.header-value');
                    assert.instanceOf(headerValue, HTMLElement);
                    assert.isTrue(spy.notCalled);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchCopyEvent)(headerValue);
                    assert.isTrue(spy.calledWith(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelCopyValue));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can switch between source and parsed view', /*#__PURE__*/ _async_to_generator(function() {
        var _rawHeadersDiv_textContent, responseHeadersCategory, rawHeadersDiv, rawTextContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    // Switch to viewing source view
                    responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.ToggleRawHeadersEvent());
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    rawHeadersDiv = responseHeadersCategory.querySelector('.raw-headers');
                    assert.instanceOf(rawHeadersDiv, HTMLDivElement);
                    rawTextContent = (_rawHeadersDiv_textContent = rawHeadersDiv.textContent) === null || _rawHeadersDiv_textContent === void 0 ? void 0 : _rawHeadersDiv_textContent.replace(/ {2,}/g, '');
                    assert.strictEqual(rawTextContent, 'HTTP/1.1 200 OK\nage: 0\ncache-control: max-age=600\ncontent-encoding: gzip\ncontent-length: 661');
                    // Switch to viewing parsed view
                    responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.ToggleRawHeadersEvent());
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [
                        [
                            'age:',
                            '0'
                        ],
                        [
                            'cache-control:',
                            'max-age=600'
                        ],
                        [
                            'content-encoding:',
                            'gzip'
                        ],
                        [
                            'content-length:',
                            '661'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('cuts off long raw headers and shows full content on button click', /*#__PURE__*/ _async_to_generator(function() {
        var _rawHeadersDiv_textContent, _rawHeadersDiv_textContent1, loremIpsum, responseHeadersCategory, rawHeadersDiv, shortenedRawTextContent, showMoreButton, noMoreShowMoreButton, fullRawTextContent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit\n    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                    return [
                        4,
                        renderHeadersComponent(_object_spread_props(_object_spread({}, defaultRequest), {
                            responseHeadersText: loremIpsum.repeat(10)
                        }))
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    // Switch to viewing source view
                    responseHeadersCategory.dispatchEvent(new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.ToggleRawHeadersEvent());
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    rawHeadersDiv = responseHeadersCategory.querySelector('.raw-headers');
                    assert.instanceOf(rawHeadersDiv, HTMLDivElement);
                    shortenedRawTextContent = (_rawHeadersDiv_textContent = rawHeadersDiv.textContent) === null || _rawHeadersDiv_textContent === void 0 ? void 0 : _rawHeadersDiv_textContent.replace(/ {2,}/g, '');
                    assert.strictEqual(shortenedRawTextContent === null || shortenedRawTextContent === void 0 ? void 0 : shortenedRawTextContent.length, 2896);
                    showMoreButton = responseHeadersCategory.querySelector('devtools-button');
                    assert.instanceOf(showMoreButton, HTMLElement);
                    assert.strictEqual(showMoreButton.textContent, 'Show more');
                    showMoreButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    noMoreShowMoreButton = responseHeadersCategory.querySelector('devtools-button');
                    assert.isNull(noMoreShowMoreButton);
                    fullRawTextContent = (_rawHeadersDiv_textContent1 = rawHeadersDiv.textContent) === null || _rawHeadersDiv_textContent1 === void 0 ? void 0 : _rawHeadersDiv_textContent1.replace(/ {2,}/g, '');
                    assert.strictEqual(fullRawTextContent === null || fullRawTextContent === void 0 ? void 0 : fullRawTextContent.length, 4450);
                    return [
                        2
                    ];
            }
        });
    }));
    it('re-renders on request headers update', /*#__PURE__*/ _async_to_generator(function() {
        var request, responseHeadersCategory, spy;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'originalName',
                            value: 'originalValue'
                        }
                    ];
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    spy = sinon.spy(component, 'render');
                    assert.isTrue(spy.notCalled);
                    assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [
                        [
                            'originalname:',
                            'originalValue'
                        ]
                    ]);
                    request.responseHeaders = [
                        {
                            name: 'updatedName',
                            value: 'updatedValue'
                        }
                    ];
                    assert.isTrue(spy.calledOnce);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [
                        [
                            'updatedname:',
                            'updatedValue'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can highlight individual response headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, responseHeadersCategory;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        },
                        {
                            name: 'highlightMe',
                            value: 'some value'
                        },
                        {
                            name: 'DevTools',
                            value: 'rock'
                        }
                    ];
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    assert.deepStrictEqual(getRowsTextFromCategory(responseHeadersCategory), [
                        [
                            'devtools:',
                            'rock'
                        ],
                        [
                            'foo:',
                            'bar'
                        ],
                        [
                            'highlightme:',
                            'some value'
                        ]
                    ]);
                    assert.deepStrictEqual(getRowHighlightStatus(responseHeadersCategory), [
                        false,
                        false,
                        false
                    ]);
                    component.revealHeader("Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ , 'HiGhLiGhTmE');
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepStrictEqual(getRowHighlightStatus(responseHeadersCategory), [
                        false,
                        false,
                        true
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can highlight individual request headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, requestHeadersCategory;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/foo.html', '', null, null, null);
                    request.setRequestHeaders([
                        {
                            name: 'foo',
                            value: 'bar'
                        },
                        {
                            name: 'highlightMe',
                            value: 'some value'
                        },
                        {
                            name: 'DevTools',
                            value: 'rock'
                        }
                    ]);
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    requestHeadersCategory = component.shadowRoot.querySelector('[aria-label="Request Headers"]');
                    assert.instanceOf(requestHeadersCategory, HTMLElement);
                    assert.deepStrictEqual(getRowsTextFromCategory(requestHeadersCategory), [
                        [
                            'devtools:',
                            'rock'
                        ],
                        [
                            'foo:',
                            'bar'
                        ],
                        [
                            'highlightme:',
                            'some value'
                        ]
                    ]);
                    assert.deepStrictEqual(getRowHighlightStatus(requestHeadersCategory), [
                        false,
                        false,
                        false
                    ]);
                    component.revealHeader("Request" /* NetworkForward.UIRequestLocation.UIHeaderSection.Request */ , 'HiGhLiGhTmE');
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.deepStrictEqual(getRowHighlightStatus(requestHeadersCategory), [
                        false,
                        false,
                        true
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders a link to \'.headers\'', /*#__PURE__*/ _async_to_generator(function() {
        var _linkElements__textContent, project, responseHeadersCategory, linkElements;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/www.example.com/.headers',
                        mimeType: 'text/plain',
                        fileSystemPath: 'file:///path/to/overrides'
                    }).project;
                    return [
                        4,
                        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance().setProject(project)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    assert.isNotNull(responseHeadersCategory.shadowRoot);
                    linkElements = responseHeadersCategory.shadowRoot.querySelectorAll('x-link');
                    assert.strictEqual(linkElements.length, 2);
                    assert.instanceOf(linkElements[0], HTMLElement);
                    assert.strictEqual(linkElements[0].title, 'https://goo.gle/devtools-override');
                    assert.instanceOf(linkElements[1], HTMLElement);
                    assert.strictEqual((_linkElements__textContent = linkElements[1].textContent) === null || _linkElements__textContent === void 0 ? void 0 : _linkElements__textContent.trim(), _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.HEADERS_FILENAME);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not render a link to \'.headers\' if a matching \'.headers\' does not exist', /*#__PURE__*/ _async_to_generator(function() {
        var project, responseHeadersCategory, linkElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    project = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_8__.createFileSystemUISourceCode)({
                        url: 'file:///path/to/overrides/www.mismatch.com/.headers',
                        mimeType: 'text/plain',
                        fileSystemPath: 'file:///path/to/overrides'
                    }).project;
                    return [
                        4,
                        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPersistenceManager.NetworkPersistenceManager.instance().setProject(project)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        renderHeadersComponent(defaultRequest)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeadersCategory = component.shadowRoot.querySelector('[aria-label="Response Headers"]');
                    assert.instanceOf(responseHeadersCategory, HTMLElement);
                    assert.isNotNull(responseHeadersCategory.shadowRoot);
                    linkElement = responseHeadersCategory.shadowRoot.querySelector('x-link');
                    assert.isNull(linkElement);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows enabling header overrides via buttons located next to each header', /*#__PURE__*/ _async_to_generator(function() {
        var request, responseHeaderSection, headerRow, checkRow, pencilButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                content: '[]'
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeaderSection = component.shadowRoot.querySelector('devtools-response-header-section');
                    assert.instanceOf(responseHeaderSection, HTMLElement);
                    assert.isNotNull(responseHeaderSection.shadowRoot);
                    headerRow = responseHeaderSection.shadowRoot.querySelector('devtools-header-section-row');
                    assert.instanceOf(headerRow, HTMLElement);
                    assert.isNotNull(headerRow.shadowRoot);
                    checkRow = function(shadowRoot, headerName, headerValue, isEditable) {
                        var _shadowRoot_querySelector_textContent, _shadowRoot_querySelector;
                        assert.strictEqual((_shadowRoot_querySelector = shadowRoot.querySelector('.header-name')) === null || _shadowRoot_querySelector === void 0 ? void 0 : (_shadowRoot_querySelector_textContent = _shadowRoot_querySelector.textContent) === null || _shadowRoot_querySelector_textContent === void 0 ? void 0 : _shadowRoot_querySelector_textContent.trim(), headerName);
                        var valueEditableComponent = shadowRoot.querySelector('.header-value devtools-editable-span');
                        if (isEditable) {
                            var _valueEditable_textContent;
                            assert.instanceOf(valueEditableComponent, HTMLElement);
                            assert.isNotNull(valueEditableComponent.shadowRoot);
                            var valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
                            assert.instanceOf(valueEditable, HTMLSpanElement);
                            assert.strictEqual((_valueEditable_textContent = valueEditable.textContent) === null || _valueEditable_textContent === void 0 ? void 0 : _valueEditable_textContent.trim(), headerValue);
                        } else {
                            var _shadowRoot_querySelector_textContent1, _shadowRoot_querySelector1;
                            assert.strictEqual((_shadowRoot_querySelector1 = shadowRoot.querySelector('.header-value')) === null || _shadowRoot_querySelector1 === void 0 ? void 0 : (_shadowRoot_querySelector_textContent1 = _shadowRoot_querySelector1.textContent) === null || _shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _shadowRoot_querySelector_textContent1.trim(), headerValue);
                            assert.strictEqual(valueEditableComponent, null);
                        }
                    };
                    checkRow(headerRow.shadowRoot, 'foo:', 'bar', false);
                    pencilButton = headerRow.shadowRoot.querySelector('.enable-editing');
                    assert.instanceOf(pencilButton, HTMLElement);
                    pencilButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    checkRow(headerRow.shadowRoot, 'foo:', 'bar', true);
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideEnableEditingClicked));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.PersistenceNetworkOverridesEnabled));
                    return [
                        2
                    ];
            }
        });
    }));
    it('records metrics when a new \'.headers\' file is created', /*#__PURE__*/ _async_to_generator(function() {
        var request, responseHeaderSection, headerRow, pencilButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_7__.createWorkspaceProject)('file:///path/to/overrides', [])
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        renderHeadersComponent(request)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    responseHeaderSection = component.shadowRoot.querySelector('devtools-response-header-section');
                    assert.instanceOf(responseHeaderSection, HTMLElement);
                    assert.isNotNull(responseHeaderSection.shadowRoot);
                    headerRow = responseHeaderSection.shadowRoot.querySelector('devtools-header-section-row');
                    assert.instanceOf(headerRow, HTMLElement);
                    assert.isNotNull(headerRow.shadowRoot);
                    pencilButton = headerRow.shadowRoot.querySelector('.enable-editing');
                    assert.instanceOf(pencilButton, HTMLElement);
                    assert.isFalse((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideFileCreated));
                    pencilButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_9__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideFileCreated));
                    return [
                        2
                    ];
            }
        });
    }));
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('RequestHeadersView\'s Category', function() {
    it('can be opened and closed with right/left arrow keys', /*#__PURE__*/ _async_to_generator(function() {
        var component, details, summary;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.Category();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    component.data = {
                        name: 'general',
                        title: 'General',
                        loggingContext: 'details-general'
                    };
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    details = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getElementWithinComponent)(component, 'details', HTMLDetailsElement);
                    summary = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getElementWithinComponent)(component, 'summary', HTMLElement);
                    assert.isTrue(details.hasAttribute('open'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchKeyDownEvent)(summary, {
                        key: 'ArrowLeft'
                    });
                    assert.isFalse(details.hasAttribute('open'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchKeyDownEvent)(summary, {
                        key: 'ArrowDown'
                    });
                    assert.isFalse(details.hasAttribute('open'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchKeyDownEvent)(summary, {
                        key: 'ArrowLeft'
                    });
                    assert.isFalse(details.hasAttribute('open'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchKeyDownEvent)(summary, {
                        key: 'ArrowRight'
                    });
                    assert.isTrue(details.hasAttribute('open'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchKeyDownEvent)(summary, {
                        key: 'ArrowUp'
                    });
                    assert.isTrue(details.hasAttribute('open'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches an event when its checkbox is toggled', /*#__PURE__*/ _async_to_generator(function() {
        var eventCounter, component, checkbox;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    eventCounter = 0;
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.Category();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    component.data = {
                        name: 'responseHeaders',
                        title: 'Response Headers',
                        headerCount: 3,
                        checked: false,
                        loggingContext: 'details-response-headers'
                    };
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    component.addEventListener(_components_js__WEBPACK_IMPORTED_MODULE_12__.RequestHeadersView.ToggleRawHeadersEvent.eventName, function() {
                        eventCounter += 1;
                    });
                    checkbox = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getElementWithinComponent)(component, 'input', HTMLInputElement);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchClickEvent)(checkbox);
                    assert.strictEqual(eventCounter, 1);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RequestHeadersView.test.js.map


}),
"./panels/network/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EditableSpan: function() { return /* reexport module object */ _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__; },
  HeaderSectionRow: function() { return /* reexport module object */ _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__; },
  RequestHeaderSection: function() { return /* reexport module object */ _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__; },
  RequestHeadersView: function() { return /* reexport module object */ _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__; },
  RequestTrustTokensView: function() { return /* reexport module object */ _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__; },
  ResponseHeaderSection: function() { return /* reexport module object */ _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__; },
  WebBundleInfoView: function() { return /* reexport module object */ _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableSpan.js */ "./panels/network/components/EditableSpan.js");
/* harmony import */var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./panels/network/components/HeaderSectionRow.js");
/* harmony import */var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./panels/network/components/RequestHeaderSection.js");
/* harmony import */var _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestHeadersView.js */ "./panels/network/components/RequestHeadersView.js");
/* harmony import */var _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestTrustTokensView.js */ "./panels/network/components/RequestTrustTokensView.js");
/* harmony import */var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./panels/network/components/ResponseHeaderSection.js");
/* harmony import */var _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebBundleInfoView.js */ "./panels/network/components/WebBundleInfoView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=components.js.map


}),
"./testing/UserMetricsHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  recordedMetricsContain: function() { return recordedMetricsContain; },
  resetRecordedMetrics: function() { return resetRecordedMetrics; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/host/host.js */ "./core/host/host.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @returns True, iff a metric event with the provided name and code was recorded. False otherwise.
 */ function recordedMetricsContain(actionName, actionCode) {
    return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms.some(function(event) {
        return event.actionName === actionName && event.actionCode === actionCode;
    });
}
function resetRecordedMetrics() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.recordedEnumeratedHistograms = [];
} //# sourceMappingURL=UserMetricsHelpers.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);