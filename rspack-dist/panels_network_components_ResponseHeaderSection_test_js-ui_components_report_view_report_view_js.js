"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_ResponseHeaderSection_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/components/ResponseHeaderSection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/OverridesHelpers.js */ "./testing/OverridesHelpers.js");
/* harmony import */var _testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/UserMetricsHelpers.js */ "./testing/UserMetricsHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _forward_forward_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
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











var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
function renderResponseHeaderSection(request) {
    return _renderResponseHeaderSection.apply(this, arguments);
}
function _renderResponseHeaderSection() {
    _renderResponseHeaderSection = _async_to_generator(function(request) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_10__.ResponseHeaderSection.ResponseHeaderSection();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(component);
                    Object.setPrototypeOf(request, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.prototype);
                    component.data = {
                        request: request,
                        toReveal: {
                            section: "Response" /* NetworkForward.UIRequestLocation.UIHeaderSection.Response */ ,
                            header: 'highlighted-header'
                        }
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.instanceOf(component, HTMLElement);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        2,
                        component
                    ];
            }
        });
    });
    return _renderResponseHeaderSection.apply(this, arguments);
}
function editHeaderRow(component, index, headerAttribute, newValue) {
    return _editHeaderRow.apply(this, arguments);
}
function _editHeaderRow() {
    _editHeaderRow = _async_to_generator(function(component, index, headerAttribute, newValue) {
        var rows, row, selector, editableComponent, editable;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.isTrue(rows.length >= index + 1, 'Trying to edit row with index greater than # of rows.');
                    row = rows[index];
                    assert.isNotNull(row.shadowRoot);
                    selector = headerAttribute === "HeaderName" /* HeaderAttribute.HeaderName */  ? '.header-name' : '.header-value';
                    editableComponent = row.shadowRoot.querySelector("".concat(selector, " devtools-editable-span"));
                    assert.instanceOf(editableComponent, HTMLElement);
                    assert.isNotNull(editableComponent.shadowRoot);
                    editable = editableComponent.shadowRoot.querySelector('.editable');
                    assert.instanceOf(editable, HTMLSpanElement);
                    editable.focus();
                    editable.innerText = newValue;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.dispatchInputEvent)(editable, {
                        inputType: 'insertText',
                        data: newValue,
                        bubbles: true,
                        composed: true
                    });
                    editable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _editHeaderRow.apply(this, arguments);
}
function removeHeaderRow(component, index) {
    return _removeHeaderRow.apply(this, arguments);
}
function _removeHeaderRow() {
    _removeHeaderRow = _async_to_generator(function(component, index) {
        var row, button;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    assert.isNotNull(component.shadowRoot);
                    row = component.shadowRoot.querySelectorAll('devtools-header-section-row')[index];
                    assert.instanceOf(row, HTMLElement);
                    assert.isNotNull(row.shadowRoot);
                    button = row.shadowRoot.querySelector('.remove-header');
                    assert.instanceOf(button, HTMLElement);
                    button.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _removeHeaderRow.apply(this, arguments);
}
function setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders) {
    return _setupHeaderEditing.apply(this, arguments);
}
function _setupHeaderEditing() {
    _setupHeaderEditing = _async_to_generator(function(headerOverridesFileContent, actualHeaders, originalHeaders) {
        var request;
        return _ts_generator(this, function(_state) {
            request = {
                sortedResponseHeaders: actualHeaders,
                originalResponseHeaders: originalHeaders,
                setCookieHeaders: [],
                blockedResponseCookies: function() {
                    return [];
                },
                wasBlocked: function() {
                    return false;
                },
                url: function() {
                    return 'https://www.example.com/';
                },
                getAssociatedData: function() {
                    return null;
                },
                setAssociatedData: function() {}
            };
            return [
                2,
                setupHeaderEditingWithRequest(headerOverridesFileContent, request)
            ];
        });
    });
    return _setupHeaderEditing.apply(this, arguments);
}
function setupHeaderEditingWithRequest(headerOverridesFileContent, request) {
    return _setupHeaderEditingWithRequest.apply(this, arguments);
}
function _setupHeaderEditingWithRequest() {
    _setupHeaderEditingWithRequest = _async_to_generator(function(headerOverridesFileContent, request) {
        var networkPersistenceManager, project, spy, uiSourceCode, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                content: headerOverridesFileContent
                            }
                        ])
                    ];
                case 1:
                    networkPersistenceManager = _state.sent();
                    project = networkPersistenceManager.project();
                    spy = sinon.spy();
                    if (project) {
                        uiSourceCode = project.uiSourceCodeForURL('file:///path/to/overrides/www.example.com/.headers');
                        if (uiSourceCode) {
                            spy = sinon.spy(uiSourceCode, 'setWorkingCopy');
                        }
                    }
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    return [
                        2,
                        {
                            component: component,
                            spy: spy
                        }
                    ];
            }
        });
    });
    return _setupHeaderEditingWithRequest.apply(this, arguments);
}
function checkHeaderSectionRow(row, headerName, headerValue, isOverride, isNameEditable, isValueEditable) {
    var isHighlighted = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, isDeleted = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false;
    assert.isNotNull(row.shadowRoot);
    var rowElement = row.shadowRoot.querySelector('.row');
    assert.strictEqual(rowElement === null || rowElement === void 0 ? void 0 : rowElement.classList.contains('header-overridden'), isOverride);
    assert.strictEqual(rowElement === null || rowElement === void 0 ? void 0 : rowElement.classList.contains('header-highlight'), isHighlighted);
    assert.strictEqual(rowElement === null || rowElement === void 0 ? void 0 : rowElement.classList.contains('header-deleted'), isDeleted);
    var nameEditableComponent = row.shadowRoot.querySelector('.header-name devtools-editable-span');
    if (isNameEditable) {
        var _nameEditable_textContent, _row_shadowRoot_querySelector;
        assert.instanceOf(nameEditableComponent, HTMLElement);
        assert.isNotNull(nameEditableComponent.shadowRoot);
        var nameEditable = nameEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(nameEditable, HTMLSpanElement);
        var textContent = ((_nameEditable_textContent = nameEditable.textContent) === null || _nameEditable_textContent === void 0 ? void 0 : _nameEditable_textContent.trim()) + (((_row_shadowRoot_querySelector = row.shadowRoot.querySelector('.header-name')) === null || _row_shadowRoot_querySelector === void 0 ? void 0 : _row_shadowRoot_querySelector.textContent) || '').trim();
        assert.strictEqual(textContent, headerName);
    } else {
        var _row_shadowRoot_querySelector_textContent, _row_shadowRoot_querySelector1;
        assert.strictEqual(nameEditableComponent, null);
        assert.strictEqual((_row_shadowRoot_querySelector1 = row.shadowRoot.querySelector('.header-name')) === null || _row_shadowRoot_querySelector1 === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent = _row_shadowRoot_querySelector1.textContent) === null || _row_shadowRoot_querySelector_textContent === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent.trim(), headerName);
    }
    var valueEditableComponent = row.shadowRoot.querySelector('.header-value devtools-editable-span');
    if (isValueEditable) {
        var _valueEditable_textContent;
        assert.instanceOf(valueEditableComponent, HTMLElement);
        assert.isNotNull(valueEditableComponent.shadowRoot);
        var valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
        assert.instanceOf(valueEditable, HTMLSpanElement);
        assert.strictEqual((_valueEditable_textContent = valueEditable.textContent) === null || _valueEditable_textContent === void 0 ? void 0 : _valueEditable_textContent.trim(), headerValue);
    } else {
        var _row_shadowRoot_querySelector_textContent1, _row_shadowRoot_querySelector2;
        assert.strictEqual(valueEditableComponent, null);
        assert.strictEqual((_row_shadowRoot_querySelector2 = row.shadowRoot.querySelector('.header-value')) === null || _row_shadowRoot_querySelector2 === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent1 = _row_shadowRoot_querySelector2.textContent) === null || _row_shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent1.trim(), headerValue);
    }
}
function isRowFocused(component, rowIndex) {
    var _rows_rowIndex_shadowRoot;
    assert.isNotNull(component.shadowRoot);
    var rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
    assert.isTrue(rows.length > rowIndex);
    return Boolean((_rows_rowIndex_shadowRoot = rows[rowIndex].shadowRoot) === null || _rows_rowIndex_shadowRoot === void 0 ? void 0 : _rows_rowIndex_shadowRoot.activeElement);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('ResponseHeaderSection', function() {
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.setUpEnvironment)()
                    ];
                case 1:
                    _state.sent();
                    (0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.resetRecordedMetrics)();
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders detailed reason for blocked requests', /*#__PURE__*/ _async_to_generator(function() {
        var _row_shadowRoot_querySelector, _row_shadowRoot_querySelector_textContent, _row_shadowRoot_querySelector1, request, component, row, regex;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'content-length',
                                value: '661'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return true;
                        },
                        blockedReason: function() {
                            return "corp-not-same-origin-after-defaulted-to-same-origin-by-coep" /* Protocol.Network.BlockedReason.CorpNotSameOriginAfterDefaultedToSameOriginByCoep */ ;
                        },
                        originalResponseHeaders: [],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    row = component.shadowRoot.querySelectorAll('devtools-header-section-row')[1];
                    assert.instanceOf(row, HTMLElement);
                    assert.isNotNull(row.shadowRoot);
                    regex = /^\s*not-set\s*cross-origin-resource-policy:\s*$/;
                    assert.isTrue(regex.test(((_row_shadowRoot_querySelector = row.shadowRoot.querySelector('.header-name')) === null || _row_shadowRoot_querySelector === void 0 ? void 0 : _row_shadowRoot_querySelector.textContent) || ''));
                    assert.strictEqual((_row_shadowRoot_querySelector1 = row.shadowRoot.querySelector('.header-value')) === null || _row_shadowRoot_querySelector1 === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent = _row_shadowRoot_querySelector1.textContent) === null || _row_shadowRoot_querySelector_textContent === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent.trim(), '');
                    assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(row.shadowRoot, '.call-to-action')[0], 'To use this resource from a different origin, the server needs to specify a cross-origin ' + 'resource policy in the response headers:Cross-Origin-Resource-Policy: same-siteChoose ' + 'this option if the resource and the document are served from the same site.' + 'Cross-Origin-Resource-Policy: cross-originOnly choose this option if an arbitrary website ' + 'including this resource does not impose a security risk.Learn more');
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays info about blocked "Set-Cookie"-headers', /*#__PURE__*/ _async_to_generator(function() {
        var _row_shadowRoot_querySelector_textContent, _row_shadowRoot_querySelector, _row_shadowRoot_querySelector_textContent1, _row_shadowRoot_querySelector1, request, component, row, icon;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'Set-Cookie',
                                value: 'secure=only; Secure'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [
                                {
                                    blockedReasons: [
                                        'SecureOnly',
                                        'OverwriteSecure'
                                    ],
                                    cookieLine: 'secure=only; Secure',
                                    cookie: null
                                }
                            ];
                        },
                        wasBlocked: function() {
                            return false;
                        },
                        originalResponseHeaders: [],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    row = component.shadowRoot.querySelector('devtools-header-section-row');
                    assert.instanceOf(row, HTMLElement);
                    assert.isNotNull(row.shadowRoot);
                    assert.strictEqual((_row_shadowRoot_querySelector = row.shadowRoot.querySelector('.header-name')) === null || _row_shadowRoot_querySelector === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent = _row_shadowRoot_querySelector.textContent) === null || _row_shadowRoot_querySelector_textContent === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent.trim(), 'set-cookie:');
                    assert.strictEqual((_row_shadowRoot_querySelector1 = row.shadowRoot.querySelector('.header-value')) === null || _row_shadowRoot_querySelector1 === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent1 = _row_shadowRoot_querySelector1.textContent) === null || _row_shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent1.trim(), 'secure=only; Secure');
                    icon = row.shadowRoot.querySelector('devtools-icon');
                    assert.instanceOf(icon, HTMLElement);
                    assert.strictEqual(icon.title, 'This attempt to set a cookie via a Set-Cookie header was blocked because it had the ' + '"Secure" attribute but was not received over a secure connection.\nThis attempt to ' + 'set a cookie via a Set-Cookie header was blocked because it was not sent over a ' + 'secure connection and would have overwritten a cookie with the Secure attribute.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('marks overridden headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows, checkRow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        sortedResponseHeaders: [
                            // keep names in alphabetical order
                            {
                                name: 'duplicate-both-no-mismatch',
                                value: 'foo'
                            },
                            {
                                name: 'duplicate-both-no-mismatch',
                                value: 'bar'
                            },
                            {
                                name: 'duplicate-both-with-mismatch',
                                value: 'Chrome'
                            },
                            {
                                name: 'duplicate-both-with-mismatch',
                                value: 'DevTools'
                            },
                            {
                                name: 'duplicate-different-order',
                                value: 'aaa'
                            },
                            {
                                name: 'duplicate-different-order',
                                value: 'bbb'
                            },
                            {
                                name: 'duplicate-in-actual-headers',
                                value: 'first'
                            },
                            {
                                name: 'duplicate-in-actual-headers',
                                value: 'second'
                            },
                            {
                                name: 'duplicate-in-original-headers',
                                value: 'two'
                            },
                            {
                                name: 'duplicate-single-line',
                                value: 'first line, second line'
                            },
                            {
                                name: 'is-in-original-headers',
                                value: 'not an override'
                            },
                            {
                                name: 'not-in-original-headers',
                                value: 'is an override'
                            },
                            {
                                name: 'triplicate',
                                value: '1'
                            },
                            {
                                name: 'triplicate',
                                value: '2'
                            },
                            {
                                name: 'triplicate',
                                value: '2'
                            },
                            {
                                name: 'xyz',
                                value: 'contains \tab'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return false;
                        },
                        originalResponseHeaders: [
                            // keep names in alphabetical order
                            {
                                name: 'duplicate-both-no-mismatch',
                                value: 'foo'
                            },
                            {
                                name: 'duplicate-both-no-mismatch',
                                value: 'bar'
                            },
                            {
                                name: 'duplicate-both-with-mismatch',
                                value: 'Chrome'
                            },
                            {
                                name: 'duplicate-both-with-mismatch',
                                value: 'Canary'
                            },
                            {
                                name: 'duplicate-different-order',
                                value: 'bbb'
                            },
                            {
                                name: 'duplicate-different-order',
                                value: 'aaa'
                            },
                            {
                                name: 'duplicate-in-actual-headers',
                                value: 'first'
                            },
                            {
                                name: 'duplicate-in-original-headers',
                                value: 'one'
                            },
                            {
                                name: 'duplicate-in-original-headers',
                                value: 'two'
                            },
                            {
                                name: 'duplicate-single-line',
                                value: 'first line'
                            },
                            {
                                name: 'duplicate-single-line',
                                value: 'second line'
                            },
                            {
                                name: 'is-in-original-headers',
                                value: 'not an override'
                            },
                            {
                                name: 'triplicate',
                                value: '1'
                            },
                            {
                                name: 'triplicate',
                                value: '1'
                            },
                            {
                                name: 'triplicate',
                                value: '2'
                            },
                            {
                                name: 'xyz',
                                value: 'contains \tab'
                            }
                        ],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    checkRow = function(shadowRoot, headerName, headerValue, isOverride) {
                        var _shadowRoot_querySelector_textContent, _shadowRoot_querySelector, _shadowRoot_querySelector_textContent1, _shadowRoot_querySelector1, _shadowRoot_querySelector2;
                        assert.strictEqual((_shadowRoot_querySelector = shadowRoot.querySelector('.header-name')) === null || _shadowRoot_querySelector === void 0 ? void 0 : (_shadowRoot_querySelector_textContent = _shadowRoot_querySelector.textContent) === null || _shadowRoot_querySelector_textContent === void 0 ? void 0 : _shadowRoot_querySelector_textContent.trim(), headerName);
                        assert.strictEqual((_shadowRoot_querySelector1 = shadowRoot.querySelector('.header-value')) === null || _shadowRoot_querySelector1 === void 0 ? void 0 : (_shadowRoot_querySelector_textContent1 = _shadowRoot_querySelector1.textContent) === null || _shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _shadowRoot_querySelector_textContent1.trim(), headerValue);
                        assert.strictEqual((_shadowRoot_querySelector2 = shadowRoot.querySelector('.row')) === null || _shadowRoot_querySelector2 === void 0 ? void 0 : _shadowRoot_querySelector2.classList.contains('header-overridden'), isOverride);
                    };
                    assert.isNotNull(rows[0].shadowRoot);
                    checkRow(rows[0].shadowRoot, 'duplicate-both-no-mismatch:', 'foo', false);
                    assert.isNotNull(rows[1].shadowRoot);
                    checkRow(rows[1].shadowRoot, 'duplicate-both-no-mismatch:', 'bar', false);
                    assert.isNotNull(rows[2].shadowRoot);
                    checkRow(rows[2].shadowRoot, 'duplicate-both-with-mismatch:', 'Chrome', true);
                    assert.isNotNull(rows[3].shadowRoot);
                    checkRow(rows[3].shadowRoot, 'duplicate-both-with-mismatch:', 'DevTools', true);
                    assert.isNotNull(rows[4].shadowRoot);
                    checkRow(rows[4].shadowRoot, 'duplicate-different-order:', 'aaa', true);
                    assert.isNotNull(rows[5].shadowRoot);
                    checkRow(rows[5].shadowRoot, 'duplicate-different-order:', 'bbb', true);
                    assert.isNotNull(rows[6].shadowRoot);
                    checkRow(rows[6].shadowRoot, 'duplicate-in-actual-headers:', 'first', true);
                    assert.isNotNull(rows[7].shadowRoot);
                    checkRow(rows[7].shadowRoot, 'duplicate-in-actual-headers:', 'second', true);
                    assert.isNotNull(rows[8].shadowRoot);
                    checkRow(rows[8].shadowRoot, 'duplicate-in-original-headers:', 'two', true);
                    assert.isNotNull(rows[9].shadowRoot);
                    checkRow(rows[9].shadowRoot, 'duplicate-single-line:', 'first line, second line', false);
                    assert.isNotNull(rows[10].shadowRoot);
                    checkRow(rows[10].shadowRoot, 'is-in-original-headers:', 'not an override', false);
                    assert.isNotNull(rows[11].shadowRoot);
                    checkRow(rows[11].shadowRoot, 'not-in-original-headers:', 'is an override', true);
                    assert.isNotNull(rows[12].shadowRoot);
                    checkRow(rows[12].shadowRoot, 'triplicate:', '1', true);
                    assert.isNotNull(rows[13].shadowRoot);
                    checkRow(rows[13].shadowRoot, 'triplicate:', '2', true);
                    assert.isNotNull(rows[14].shadowRoot);
                    checkRow(rows[14].shadowRoot, 'triplicate:', '2', true);
                    assert.isNotNull(rows[15].shadowRoot);
                    checkRow(rows[15].shadowRoot, 'xyz:', 'contains  ab', false);
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly sets headers as "editable" when matching ".headers" file exists and setting is turned on', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                content: '[\n          {\n            "applyTo": "index.html",\n            "headers": [{\n              "name": "server",\n              "value": "overridden server"\n            }]\n          }\n        ]'
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'cache-control',
                                value: 'max-age=600'
                            },
                            {
                                name: 'server',
                                value: 'overridden server'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return false;
                        },
                        originalResponseHeaders: [
                            {
                                name: 'cache-control',
                                value: 'max-age=600'
                            },
                            {
                                name: 'server',
                                value: 'original server'
                            }
                        ],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, true);
                    checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, true);
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                    component.data = {
                        request: request
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, false);
                    checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, false);
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not set headers as "editable" when matching ".headers" file cannot be parsed correctly', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_OverridesHelpers_js__WEBPACK_IMPORTED_MODULE_6__.createWorkspaceProject)('file:///path/to/overrides', [
                            {
                                name: '.headers',
                                path: 'www.example.com/',
                                // 'headers' contains the invalid key 'no-name' and will therefore
                                // cause a parsing error.
                                content: '[\n          {\n            "applyTo": "index.html",\n            "headers": [{\n              "no-name": "server",\n              "value": "overridden server"\n            }]\n          }\n        ]'
                            }
                        ])
                    ];
                case 1:
                    _state.sent();
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'cache-control',
                                value: 'max-age=600'
                            },
                            {
                                name: 'server',
                                value: 'overridden server'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return false;
                        },
                        originalResponseHeaders: [
                            {
                                name: 'cache-control',
                                value: 'max-age=600'
                            },
                            {
                                name: 'server',
                                value: 'original server'
                            }
                        ],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    // A console error is emitted when '.headers' cannot be parsed correctly.
                    // We don't need that noise in the test output.
                    sinon.stub(console, 'error');
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 2:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.isNotNull(rows[0].shadowRoot);
                    checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, false);
                    assert.isNotNull(rows[1].shadowRoot);
                    checkHeaderSectionRow(rows[1], 'server:', 'overridden server', true, false, false);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can edit original headers', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'max-age=9999')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'overridden server'
                                },
                                {
                                    name: 'cache-control',
                                    value: 'max-age=9999'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderEdited));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle tab-character in header value', /*#__PURE__*/ _async_to_generator(function() {
        var headers, _ref, component, spy, rows, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headers = [
                        {
                            name: 'foo',
                            value: 'syn\tax'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing('[]', headers, headers)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 1);
                    checkHeaderSectionRow(rows[0], 'foo:', 'syn ax', false, false, true);
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'syn ax')
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(spy.notCalled);
                    checkHeaderSectionRow(rows[0], 'foo:', 'syn ax', false, false, true);
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'syntax')
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'foo',
                                    value: 'syntax'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    checkHeaderSectionRow(rows[0], 'foo:', 'syntax', true, false, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can edit overridden headers', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'edited value')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'edited value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderEdited));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can remove header overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, rows, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [\n          {\n            "name": "highlighted-header",\n            "value": "overridden highlighted-header"\n          },\n          {\n            "name": "cache-control",\n            "value": "max-age=9999"\n          },\n          {\n            "name": "added",\n            "value": "foo"\n          }\n        ]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'added',
                            value: 'foo'
                        },
                        {
                            name: 'cache-control',
                            value: 'max-age=9999'
                        },
                        {
                            name: 'highlighted-header',
                            value: 'overridden highlighted-header'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'highlighted-header',
                            value: 'original highlighted-header'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 3);
                    checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, true);
                    checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
                    checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, true, true);
                    return [
                        4,
                        removeHeaderRow(component, 2)
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'cache-control',
                                    value: 'max-age=9999'
                                },
                                {
                                    name: 'added',
                                    value: 'foo'
                                }
                            ]
                        }
                    ];
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderRemoved));
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 3);
                    checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, true);
                    checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
                    checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, false, true, true);
                    spy.resetHistory();
                    return [
                        4,
                        removeHeaderRow(component, 0)
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'cache-control',
                                    value: 'max-age=9999'
                                }
                            ]
                        }
                    ];
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 3);
                    checkHeaderSectionRow(rows[0], 'added:', 'foo', true, false, false, false, true);
                    checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=9999', true, false, true);
                    checkHeaderSectionRow(rows[2], 'highlighted-header:', 'overridden highlighted-header', true, false, false, true, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can remove the last header override', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [\n          {\n            "name": "server",\n            "value": "overridden server"\n          }\n        ]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        removeHeaderRow(component, 0)
                    ];
                case 2:
                    _state.sent();
                    expected = [];
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderRemoved));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle non-breaking spaces when removing header overrides', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, rows, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [\n          {\n            "name": "added",\n            "value": "space\xa0between"\n          }\n        ]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'added',
                            value: 'space between'
                        },
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'added:', 'space between', true, false, true);
                    checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=600', false, false, true);
                    return [
                        4,
                        removeHeaderRow(component, 0)
                    ];
                case 2:
                    _state.sent();
                    expected = [];
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'added:', 'space between', true, false, false, false, true);
                    checkHeaderSectionRow(rows[1], 'cache-control:', 'max-age=600', false, false, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not generate header overrides which have "applyTo" but empty "headers" array', /*#__PURE__*/ _async_to_generator(function() {
        var actualHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    actualHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing('[]', actualHeaders, actualHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'overridden server')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'overridden server'
                                }
                            ]
                        }
                    ];
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify(expected, null, 2)));
                    spy.resetHistory();
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'original server')
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify([], null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can add headers', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, addHeaderButton, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'overridden server'
                                },
                                {
                                    name: 'header-name',
                                    value: 'header value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    assert.isTrue((0,_testing_UserMetricsHelpers_js__WEBPACK_IMPORTED_MODULE_7__.recordedMetricsContain)("DevTools.ActionTaken" /* Host.InspectorFrontendHostAPI.EnumeratedHistogram.ActionTaken */ , _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.HeaderOverrideHeaderAdded));
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */ , 'foo')
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'overridden server'
                                },
                                {
                                    name: 'foo',
                                    value: 'header value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'bar')
                    ];
                case 4:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'overridden server'
                                },
                                {
                                    name: 'foo',
                                    value: 'bar'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not persist invalid header names', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, addHeaderButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(spy.callCount, 1);
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */ , 'valid')
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(spy.callCount, 2);
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */ , 'in:valid')
                    ];
                case 4:
                    _state.sent();
                    assert.strictEqual(spy.callCount, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can remove a newly added header', /*#__PURE__*/ _async_to_generator(function() {
        var actualHeaders, _ref, component, spy, addHeaderButton, expected, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    actualHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing('[]', actualHeaders, actualHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'header-name',
                                    value: 'header value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'original server', false, false, true);
                    checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
                    spy.resetHistory();
                    return [
                        4,
                        removeHeaderRow(component, 1)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(spy.callCount, 1);
                    assert.isTrue(spy.calledOnceWith(JSON.stringify([], null, 2)));
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'original server', false, false, true);
                    checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, false, false, false, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders headers as (not) editable depending on overall overrides setting', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, addHeaderButton, rows, component2, component3;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditingWithRequest('[]', request)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, true);
                    checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
                    component.remove();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 3:
                    component2 = _state.sent();
                    assert.isNotNull(component2.shadowRoot);
                    rows = component2.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, false);
                    checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, false, false);
                    component2.remove();
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 4:
                    component3 = _state.sent();
                    assert.isNotNull(component3.shadowRoot);
                    rows = component3.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, true);
                    checkHeaderSectionRow(rows[1], 'header-name:', 'header value', true, true, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can show the "edit header" button', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.foo.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditingWithRequest('[]', request)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 1);
                    assert.isNotNull(rows[0].shadowRoot);
                    assert.isNotNull(rows[0].shadowRoot.querySelector('.enable-editing'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not show the "edit header" button for requests with a forbidden URL', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'chrome://terms/', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'foo',
                            value: 'bar'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditingWithRequest('[]', request)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 1);
                    assert.isNotNull(rows[0].shadowRoot);
                    assert.isNull(rows[0].shadowRoot.querySelector('.enable-editing'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can edit multiple headers', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'cache-control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'edited cache-control')
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'edited server')
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'cache-control',
                                    value: 'edited cache-control'
                                },
                                {
                                    name: 'server',
                                    value: 'edited server'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can edit multiple headers which have the same name', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[]';
                    actualHeaders = [
                        {
                            name: 'link',
                            value: 'first value'
                        },
                        {
                            name: 'link',
                            value: 'second value'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'link',
                            value: 'first value'
                        },
                        {
                            name: 'link',
                            value: 'second value'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'third value')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'link',
                                    value: 'third value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'fourth value')
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'link',
                                    value: 'third value'
                                },
                                {
                                    name: 'link',
                                    value: 'fourth value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can edit multiple headers which have the same name and which are already overridden', /*#__PURE__*/ _async_to_generator(function() {
        var headerOverridesFileContent, actualHeaders, originalHeaders, _ref, component, spy, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [\n          {\n            "name": "link",\n            "value": "third value"\n          },\n          {\n            "name": "link",\n            "value": "fourth value"\n          }\n        ]\n      }\n    ]';
                    actualHeaders = [
                        {
                            name: 'link',
                            value: 'third value'
                        },
                        {
                            name: 'link',
                            value: 'fourth value'
                        }
                    ];
                    originalHeaders = [
                        {
                            name: 'link',
                            value: 'first value'
                        },
                        {
                            name: 'link',
                            value: 'second value'
                        }
                    ];
                    return [
                        4,
                        setupHeaderEditing(headerOverridesFileContent, actualHeaders, originalHeaders)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'fifth value')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'link',
                                    value: 'third value'
                                },
                                {
                                    name: 'link',
                                    value: 'fifth value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'sixth value')
                    ];
                case 3:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'link',
                                    value: 'sixth value'
                                },
                                {
                                    name: 'link',
                                    value: 'fifth value'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.lastCall.calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('persists edits to header overrides and resurfaces them upon component (re-)creation', /*#__PURE__*/ _async_to_generator(function() {
        var request, headerOverridesFileContent, _ref, component, spy, addHeaderButton, expected, component2, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    return [
                        4,
                        setupHeaderEditingWithRequest(headerOverridesFileContent, request)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'unit test')
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderName" /* HeaderAttribute.HeaderName */ , 'foo')
                    ];
                case 4:
                    _state.sent();
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'bar')
                    ];
                case 5:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'server',
                                    value: 'unit test'
                                },
                                {
                                    name: 'foo',
                                    value: 'bar'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    component.remove();
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 6:
                    component2 = _state.sent();
                    assert.isNotNull(component2.shadowRoot);
                    rows = component2.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 2);
                    checkHeaderSectionRow(rows[0], 'server:', 'unit test', true, false, true);
                    checkHeaderSectionRow(rows[1], 'foo:', 'bar', true, true, true);
                    return [
                        2
                    ];
            }
        });
    }));
    it('focuses on newly added header rows on initial render', /*#__PURE__*/ _async_to_generator(function() {
        var request, headerOverridesFileContent, component, addHeaderButton, component2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    return [
                        4,
                        setupHeaderEditingWithRequest(headerOverridesFileContent, request)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isFalse(isRowFocused(component, 0));
                    assert.isTrue(isRowFocused(component, 1));
                    component.remove();
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 3:
                    component2 = _state.sent();
                    assert.isNotNull(component2.shadowRoot);
                    assert.isFalse(isRowFocused(component2, 0));
                    assert.isFalse(isRowFocused(component2, 1));
                    return [
                        2
                    ];
            }
        });
    }));
    it('can handle removal of ".headers" file', /*#__PURE__*/ _async_to_generator(function() {
        var request, headerOverridesFileContent, component, addHeaderButton, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'server',
                            value: 'overridden server'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'server',
                            value: 'original server'
                        }
                    ];
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [{\n          "name": "server",\n          "value": "overridden server"\n        }]\n      }\n    ]';
                    return [
                        4,
                        setupHeaderEditingWithRequest(headerOverridesFileContent, request)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.instanceOf(addHeaderButton, HTMLElement);
                    addHeaderButton.click();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        editHeaderRow(component, 0, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'unit test')
                    ];
                case 3:
                    _state.sent();
                    sinon.stub(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance(), 'uiSourceCodeForURL').callsFake(function() {
                        return null;
                    });
                    component.data = {
                        request: request
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 1);
                    checkHeaderSectionRow(rows[0], 'server:', 'overridden server', true, false, false);
                    addHeaderButton = component.shadowRoot.querySelector('.add-header-button');
                    assert.isNull(addHeaderButton);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles rendering and editing \'set-cookie\' headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, headerOverridesFileContent, _ref, component, spy, rows, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/index.html', '', null, null, null);
                    request.responseHeaders = [
                        {
                            name: 'Cache-Control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'Z-Header',
                            value: 'zzz'
                        }
                    ];
                    request.originalResponseHeaders = [
                        {
                            name: 'Set-Cookie',
                            value: 'bar=original'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'foo=original'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'malformed'
                        },
                        {
                            name: 'Cache-Control',
                            value: 'max-age=600'
                        },
                        {
                            name: 'Z-header',
                            value: 'zzz'
                        }
                    ];
                    request.setCookieHeaders = [
                        {
                            name: 'Set-Cookie',
                            value: 'bar=original'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'foo=overridden'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'user=12345'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'malformed'
                        },
                        {
                            name: 'Set-Cookie',
                            value: 'wrong format'
                        }
                    ];
                    headerOverridesFileContent = '[\n      {\n        "applyTo": "index.html",\n        "headers": [\n          {\n            "name": "set-cookie",\n            "value": "foo=overridden"\n          },\n          {\n            "name": "set-cookie",\n            "value": "user=12345"\n          },\n          {\n            "name": "set-cookie",\n            "value": "wrong format"\n          }\n        ]\n      }\n    ]';
                    return [
                        4,
                        setupHeaderEditingWithRequest(headerOverridesFileContent, request)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, spy = _ref.spy;
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.strictEqual(rows.length, 7);
                    assert.isNotNull(rows[0].shadowRoot);
                    checkHeaderSectionRow(rows[0], 'cache-control:', 'max-age=600', false, false, true);
                    assert.isNotNull(rows[1].shadowRoot);
                    checkHeaderSectionRow(rows[1], 'set-cookie:', 'bar=original', false, false, true);
                    assert.isNotNull(rows[2].shadowRoot);
                    checkHeaderSectionRow(rows[2], 'set-cookie:', 'foo=overridden', true, false, true);
                    assert.isNotNull(rows[3].shadowRoot);
                    checkHeaderSectionRow(rows[3], 'set-cookie:', 'user=12345', true, false, true);
                    assert.isNotNull(rows[4].shadowRoot);
                    checkHeaderSectionRow(rows[4], 'set-cookie:', 'malformed', false, false, true);
                    assert.isNotNull(rows[5].shadowRoot);
                    checkHeaderSectionRow(rows[5], 'set-cookie:', 'wrong format', true, false, true);
                    assert.isNotNull(rows[6].shadowRoot);
                    checkHeaderSectionRow(rows[6], 'z-header:', 'zzz', false, false, true);
                    return [
                        4,
                        editHeaderRow(component, 2, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'foo=edited')
                    ];
                case 2:
                    _state.sent();
                    expected = [
                        {
                            applyTo: 'index.html',
                            headers: [
                                {
                                    name: 'set-cookie',
                                    value: 'user=12345'
                                },
                                {
                                    name: 'set-cookie',
                                    value: 'wrong format'
                                },
                                {
                                    name: 'set-cookie',
                                    value: 'foo=edited'
                                }
                            ]
                        }
                    ];
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        4,
                        editHeaderRow(component, 1, "HeaderValue" /* HeaderAttribute.HeaderValue */ , 'bar=edited')
                    ];
                case 3:
                    _state.sent();
                    expected[0].headers.push({
                        name: 'set-cookie',
                        value: 'bar=edited'
                    });
                    assert.isTrue(spy.getCall(-1).calledWith(JSON.stringify(expected, null, 2)));
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores capitalisation of the `set-cookie` header when marking as overridden', /*#__PURE__*/ _async_to_generator(function() {
        var _rows__shadowRoot_querySelector_textContent, _rows__shadowRoot_querySelector, _rows__shadowRoot_querySelector_textContent1, _rows__shadowRoot_querySelector1, _rows__shadowRoot_querySelector2, request, component, rows;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'set-cookie',
                                value: 'user=123'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return false;
                        },
                        originalResponseHeaders: [
                            {
                                name: 'Set-Cookie',
                                value: 'user=123'
                            }
                        ],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    assert.isNotNull(rows[0].shadowRoot);
                    assert.strictEqual((_rows__shadowRoot_querySelector = rows[0].shadowRoot.querySelector('.header-name')) === null || _rows__shadowRoot_querySelector === void 0 ? void 0 : (_rows__shadowRoot_querySelector_textContent = _rows__shadowRoot_querySelector.textContent) === null || _rows__shadowRoot_querySelector_textContent === void 0 ? void 0 : _rows__shadowRoot_querySelector_textContent.trim(), 'set-cookie:');
                    assert.strictEqual((_rows__shadowRoot_querySelector1 = rows[0].shadowRoot.querySelector('.header-value')) === null || _rows__shadowRoot_querySelector1 === void 0 ? void 0 : (_rows__shadowRoot_querySelector_textContent1 = _rows__shadowRoot_querySelector1.textContent) === null || _rows__shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _rows__shadowRoot_querySelector_textContent1.trim(), 'user=123');
                    assert.strictEqual((_rows__shadowRoot_querySelector2 = rows[0].shadowRoot.querySelector('.row')) === null || _rows__shadowRoot_querySelector2 === void 0 ? void 0 : _rows__shadowRoot_querySelector2.classList.contains('header-overridden'), false);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not mark unset headers (which cause the request to be blocked) as overridden', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows, checkRow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        sortedResponseHeaders: [
                            {
                                name: 'abc',
                                value: 'def'
                            }
                        ],
                        blockedResponseCookies: function() {
                            return [];
                        },
                        wasBlocked: function() {
                            return true;
                        },
                        blockedReason: function() {
                            return "coep-frame-resource-needs-coep-header" /* Protocol.Network.BlockedReason.CoepFrameResourceNeedsCoepHeader */ ;
                        },
                        originalResponseHeaders: [
                            {
                                name: 'abc',
                                value: 'def'
                            }
                        ],
                        setCookieHeaders: [],
                        url: function() {
                            return 'https://www.example.com/';
                        },
                        getAssociatedData: function() {
                            return null;
                        },
                        setAssociatedData: function() {}
                    };
                    return [
                        4,
                        renderResponseHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    checkRow = function(shadowRoot, headerName, headerValue, isOverride) {
                        var _shadowRoot_querySelector_textContent, _shadowRoot_querySelector, _shadowRoot_querySelector1;
                        assert.deepEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.getCleanTextContentFromElements)(shadowRoot, '.header-name'), [
                            headerName
                        ]);
                        assert.strictEqual((_shadowRoot_querySelector = shadowRoot.querySelector('.header-value')) === null || _shadowRoot_querySelector === void 0 ? void 0 : (_shadowRoot_querySelector_textContent = _shadowRoot_querySelector.textContent) === null || _shadowRoot_querySelector_textContent === void 0 ? void 0 : _shadowRoot_querySelector_textContent.trim(), headerValue);
                        assert.strictEqual((_shadowRoot_querySelector1 = shadowRoot.querySelector('.row')) === null || _shadowRoot_querySelector1 === void 0 ? void 0 : _shadowRoot_querySelector1.classList.contains('header-overridden'), isOverride);
                    };
                    assert.isNotNull(rows[0].shadowRoot);
                    checkRow(rows[0].shadowRoot, 'abc:', 'def', false);
                    assert.isNotNull(rows[1].shadowRoot);
                    checkRow(rows[1].shadowRoot, 'not-setcross-origin-embedder-policy:', '', false);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ResponseHeaderSection.test.js.map


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