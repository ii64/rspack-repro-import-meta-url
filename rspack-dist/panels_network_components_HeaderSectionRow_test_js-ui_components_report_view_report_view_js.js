"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_HeaderSectionRow_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/components/HeaderSectionRow.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
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






var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
function renderHeaderSectionRow(header) {
    return _renderHeaderSectionRow.apply(this, arguments);
}
function _renderHeaderSectionRow() {
    _renderHeaderSectionRow = _async_to_generator(function(header) {
        var component, scrollIntoViewSpy, nameEditable, nameEditableComponent, valueEditable, valueEditableComponent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.HeaderSectionRow();
                    scrollIntoViewSpy = sinon.spy(component, 'scrollIntoView');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
                    assert.isTrue(scrollIntoViewSpy.notCalled);
                    component.data = {
                        header: header
                    };
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    nameEditable = null;
                    nameEditableComponent = component.shadowRoot.querySelector('.header-name devtools-editable-span');
                    if (nameEditableComponent) {
                        assert.instanceOf(nameEditableComponent, HTMLElement);
                        assert.isNotNull(nameEditableComponent.shadowRoot);
                        nameEditable = nameEditableComponent.shadowRoot.querySelector('.editable');
                        assert.instanceOf(nameEditable, HTMLSpanElement);
                    }
                    valueEditable = null;
                    valueEditableComponent = component.shadowRoot.querySelector('.header-value devtools-editable-span');
                    if (valueEditableComponent) {
                        assert.instanceOf(valueEditableComponent, HTMLElement);
                        assert.isNotNull(valueEditableComponent.shadowRoot);
                        valueEditable = valueEditableComponent.shadowRoot.querySelector('.editable');
                        assert.instanceOf(valueEditable, HTMLSpanElement);
                    }
                    return [
                        2,
                        {
                            component: component,
                            nameEditable: nameEditable,
                            valueEditable: valueEditable,
                            scrollIntoViewSpy: scrollIntoViewSpy
                        }
                    ];
            }
        });
    });
    return _renderHeaderSectionRow.apply(this, arguments);
}
var hasReloadPrompt = function(shadowRoot) {
    return Boolean(shadowRoot.querySelector('devtools-icon[title="Refresh the page/request for these changes to take effect"]'));
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('HeaderSectionRow', function() {
    it('emits UMA event when a header value is being copied', /*#__PURE__*/ _async_to_generator(function() {
        var headerData, _ref, component, scrollIntoViewSpy, spy, headerValue;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: 'someHeaderValue',
                        valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, scrollIntoViewSpy = _ref.scrollIntoViewSpy;
                    assert.isNotNull(component.shadowRoot);
                    assert.isTrue(scrollIntoViewSpy.notCalled);
                    spy = sinon.spy(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics, 'actionTaken');
                    headerValue = component.shadowRoot.querySelector('.header-value');
                    assert.instanceOf(headerValue, HTMLElement);
                    assert.isTrue(spy.notCalled);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchCopyEvent)(headerValue);
                    assert.isTrue(spy.calledWith(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.NetworkPanelCopyValue));
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders detailed reason for blocked requests', /*#__PURE__*/ _async_to_generator(function() {
        var _headerValue_textContent, headerData, component, headerName, regex, headerValue;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('cross-origin-resource-policy'),
                        value: null,
                        valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */ ,
                        headerNotSet: true,
                        blockedDetails: {
                            explanation: function() {
                                return 'To use this resource from a different origin, the server needs to specify a cross-origin resource policy in the response headers:';
                            },
                            examples: [
                                {
                                    codeSnippet: 'Cross-Origin-Resource-Policy: same-site',
                                    comment: function() {
                                        return 'Choose this option if the resource and the document are served from the same site.';
                                    }
                                },
                                {
                                    codeSnippet: 'Cross-Origin-Resource-Policy: cross-origin',
                                    comment: function() {
                                        return 'Only choose this option if an arbitrary website including this resource does not impose a security risk.';
                                    }
                                }
                            ],
                            link: {
                                url: 'https://web.dev/coop-coep/'
                            }
                        }
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    headerName = component.shadowRoot.querySelector('.header-name');
                    assert.instanceOf(headerName, HTMLDivElement);
                    regex = /^\s*not-set\s*cross-origin-resource-policy:\s*$/;
                    assert.isTrue(regex.test(headerName.textContent || ''));
                    headerValue = component.shadowRoot.querySelector('.header-value');
                    assert.instanceOf(headerValue, HTMLDivElement);
                    assert.strictEqual((_headerValue_textContent = headerValue.textContent) === null || _headerValue_textContent === void 0 ? void 0 : _headerValue_textContent.trim(), '');
                    assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.call-to-action')[0], 'To use this resource from a different origin, the server needs to specify a cross-origin ' + 'resource policy in the response headers:Cross-Origin-Resource-Policy: same-siteChoose ' + 'this option if the resource and the document are served from the same site.' + 'Cross-Origin-Resource-Policy: cross-originOnly choose this option if an arbitrary website ' + 'including this resource does not impose a security risk.Learn more');
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays decoded "x-client-data"-header', /*#__PURE__*/ _async_to_generator(function() {
        var _headerName_textContent, headerData, component, headerName, headerValue;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('x-client-data'),
                        value: 'CJa2yQEIpLbJAQiTocsB',
                        valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    headerName = component.shadowRoot.querySelector('.header-name');
                    assert.instanceOf(headerName, HTMLDivElement);
                    assert.strictEqual((_headerName_textContent = headerName.textContent) === null || _headerName_textContent === void 0 ? void 0 : _headerName_textContent.trim(), 'x-client-data:');
                    headerValue = component.shadowRoot.querySelector('.header-value');
                    assert.instanceOf(headerValue, HTMLDivElement);
                    assert.isTrue(headerValue.classList.contains('flex-columns'));
                    assert.isTrue((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.header-value')[0].startsWith('CJa2yQEIpLbJAQiTocsB'));
                    assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(component.shadowRoot, '.header-value code')[0], 'message ClientVariations {// Active Google-visible variation IDs on this client. These are reported for analysis, but do not directly affect any server-side behavior.repeated int32 variation_id = [3300118, 3300132, 3330195];\n}');
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays info about blocked "Set-Cookie"-headers', /*#__PURE__*/ _async_to_generator(function() {
        var _headerName_textContent, _headerValue_textContent, headerData, component, headerName, headerValue, icon;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('set-cookie'),
                        value: 'secure=only; Secure',
                        valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */ ,
                        setCookieBlockedReasons: [
                            "SecureOnly" /* Protocol.Network.SetCookieBlockedReason.SecureOnly */ ,
                            "OverwriteSecure" /* Protocol.Network.SetCookieBlockedReason.OverwriteSecure */ 
                        ]
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    headerName = component.shadowRoot.querySelector('.header-name');
                    assert.instanceOf(headerName, HTMLDivElement);
                    assert.strictEqual((_headerName_textContent = headerName.textContent) === null || _headerName_textContent === void 0 ? void 0 : _headerName_textContent.trim(), 'set-cookie:');
                    headerValue = component.shadowRoot.querySelector('.header-value');
                    assert.instanceOf(headerValue, HTMLDivElement);
                    assert.strictEqual((_headerValue_textContent = headerValue.textContent) === null || _headerValue_textContent === void 0 ? void 0 : _headerValue_textContent.trim(), 'secure=only; Secure');
                    icon = component.shadowRoot.querySelector('devtools-icon');
                    assert.instanceOf(icon, HTMLElement);
                    assert.strictEqual(icon.title, 'This attempt to set a cookie via a Set-Cookie header was blocked because it had the ' + '"Secure" attribute but was not received over a secure connection.\nThis attempt to ' + 'set a cookie via a Set-Cookie header was blocked because it was not sent over a ' + 'secure connection and would have overwritten a cookie with the Secure attribute.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('can be highlighted', /*#__PURE__*/ _async_to_generator(function() {
        var headerData, _ref, component, scrollIntoViewSpy, headerRowElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: 'someHeaderValue',
                        valueEditable: 0 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Disabled */ ,
                        highlight: true
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, scrollIntoViewSpy = _ref.scrollIntoViewSpy;
                    assert.isNotNull(component.shadowRoot);
                    headerRowElement = component.shadowRoot.querySelector('.row.header-highlight');
                    assert.instanceOf(headerRowElement, HTMLDivElement);
                    assert.isTrue(scrollIntoViewSpy.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows editing header name and header value', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderName, originalHeaderValue, headerData, editedHeaderName, editedHeaderValue, _ref, component, nameEditable, valueEditable, headerValueFromEvent, headerNameFromEvent, headerEditedEventCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    originalHeaderValue = 'someHeaderValue';
                    headerData = {
                        name: originalHeaderName,
                        value: originalHeaderValue,
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderName = 'new-header-name';
                    editedHeaderValue = 'new value for header';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    headerValueFromEvent = '';
                    headerNameFromEvent = '';
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function(event) {
                        headerEditedEventCount++;
                        headerValueFromEvent = event.headerValue;
                        headerNameFromEvent = event.headerName;
                    });
                    assert.instanceOf(nameEditable, HTMLSpanElement);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    nameEditable.focus();
                    nameEditable.innerText = editedHeaderName;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, {
                        inputType: 'insertText',
                        data: editedHeaderName,
                        bubbles: true,
                        composed: true
                    });
                    nameEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 1);
                    assert.strictEqual(headerNameFromEvent, editedHeaderName);
                    assert.strictEqual(headerValueFromEvent, originalHeaderValue);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    assert.instanceOf(valueEditable, HTMLSpanElement);
                    valueEditable.focus();
                    valueEditable.innerText = editedHeaderValue;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, {
                        inputType: 'insertText',
                        data: editedHeaderValue,
                        bubbles: true,
                        composed: true
                    });
                    valueEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 2);
                    assert.strictEqual(headerNameFromEvent, editedHeaderName);
                    assert.strictEqual(headerValueFromEvent, editedHeaderValue);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    nameEditable.focus();
                    nameEditable.innerText = originalHeaderName;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, {
                        inputType: 'insertText',
                        data: originalHeaderName,
                        bubbles: true,
                        composed: true
                    });
                    nameEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 4:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 3);
                    assert.strictEqual(headerNameFromEvent, originalHeaderName);
                    assert.strictEqual(headerValueFromEvent, editedHeaderValue);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    valueEditable.focus();
                    valueEditable.innerText = originalHeaderValue;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, {
                        inputType: 'insertText',
                        data: originalHeaderValue,
                        bubbles: true,
                        composed: true
                    });
                    valueEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 5:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 4);
                    assert.strictEqual(headerNameFromEvent, originalHeaderName);
                    assert.strictEqual(headerValueFromEvent, originalHeaderValue);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not allow setting an emtpy header name', /*#__PURE__*/ _async_to_generator(function() {
        var headerName, headerData, _ref, component, nameEditable, headerEditedEventCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    headerData = {
                        name: headerName,
                        value: 'someHeaderValue',
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable;
                    assert.isNotNull(component.shadowRoot);
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function() {
                        headerEditedEventCount++;
                    });
                    assert.instanceOf(nameEditable, HTMLElement);
                    nameEditable.focus();
                    nameEditable.innerText = '';
                    nameEditable.blur();
                    assert.strictEqual(headerEditedEventCount, 0);
                    assert.strictEqual(nameEditable.innerText, 'Some-Header-Name');
                    return [
                        2
                    ];
            }
        });
    }));
    it('resets edited value on escape key', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderValue, headerData, _ref, component, valueEditable, eventCount, row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderValue = 'special chars: \'\"\\.,;!?@_-+/=<>()[]{}|*&^%$#§±`~';
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: originalHeaderValue,
                        originalValue: originalHeaderValue,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    eventCount = 0;
                    component.addEventListener('headeredited', function() {
                        eventCount++;
                    });
                    assert.instanceOf(valueEditable, HTMLElement);
                    assert.strictEqual(valueEditable.innerText, originalHeaderValue);
                    valueEditable.focus();
                    valueEditable.innerText = 'new value for header';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    assert.strictEqual(eventCount, 0);
                    assert.strictEqual(valueEditable.innerText, originalHeaderValue);
                    row = component.shadowRoot.querySelector('.row');
                    assert.isFalse(row === null || row === void 0 ? void 0 : row.classList.contains('header-overridden'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('confirms edited value and exits editing mode on "Enter"-key', /*#__PURE__*/ _async_to_generator(function() {
        var headerData, editedHeaderValue, _ref, component, valueEditable, headerValueFromEvent, eventCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: 'someHeaderValue',
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderValue = 'new value for header';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    headerValueFromEvent = '';
                    eventCount = 0;
                    component.addEventListener('headeredited', function(event) {
                        headerValueFromEvent = event.headerValue;
                        eventCount++;
                    });
                    assert.instanceOf(valueEditable, HTMLElement);
                    valueEditable.focus();
                    valueEditable.innerText = editedHeaderValue;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, {
                        key: 'Enter',
                        bubbles: true
                    });
                    assert.strictEqual(headerValueFromEvent, editedHeaderValue);
                    assert.strictEqual(eventCount, 1);
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds and removes `header-overridden` class correctly', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_querySelector, headerData, _ref, component, valueEditable, row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: 'someHeaderValue',
                        originalValue: 'someHeaderValue',
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ ,
                        highlight: true
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(valueEditable, HTMLElement);
                    row = component.shadowRoot.querySelector('.row');
                    assert.isFalse(row === null || row === void 0 ? void 0 : row.classList.contains('header-overridden'));
                    assert.isTrue(row === null || row === void 0 ? void 0 : row.classList.contains('header-highlight'));
                    assert.isFalse(hasReloadPrompt(component.shadowRoot));
                    valueEditable.focus();
                    valueEditable.innerText = 'a';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, {
                        inputType: 'insertText',
                        data: 'a',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(row === null || row === void 0 ? void 0 : row.classList.contains('header-overridden'));
                    assert.isFalse(row === null || row === void 0 ? void 0 : row.classList.contains('header-highlight'));
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('.row')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.classList.contains('header-overridden'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('adds and removes `header-overridden` class correctly when editing unset headers', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_querySelector, headerData, _ref, component, valueEditable, row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: null,
                        originalValue: null,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(valueEditable, HTMLElement);
                    row = component.shadowRoot.querySelector('.row');
                    assert.isFalse(row === null || row === void 0 ? void 0 : row.classList.contains('header-overridden'));
                    valueEditable.focus();
                    valueEditable.innerText = 'a';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(valueEditable, {
                        inputType: 'insertText',
                        data: 'a',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(row === null || row === void 0 ? void 0 : row.classList.contains('header-overridden'));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse((_component_shadowRoot_querySelector = component.shadowRoot.querySelector('.row')) === null || _component_shadowRoot_querySelector === void 0 ? void 0 : _component_shadowRoot_querySelector.classList.contains('header-overridden'));
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows error-icon when header name contains disallowed characters', /*#__PURE__*/ _async_to_generator(function() {
        var headerData, _ref, component, nameEditable, row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerData = {
                        name: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name'),
                        value: 'someHeaderValue',
                        originalValue: 'someHeaderValue',
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(nameEditable, HTMLElement);
                    row = component.shadowRoot.querySelector('.row');
                    assert.instanceOf(row, HTMLDivElement);
                    assert.strictEqual(row.querySelector('devtools-icon.disallowed-characters'), null);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    nameEditable.focus();
                    nameEditable.innerText = '*';
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchInputEvent)(nameEditable, {
                        inputType: 'insertText',
                        data: '*',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.instanceOf(row.querySelector('devtools-icon.disallowed-characters'), HTMLElement);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(nameEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(row.querySelector('devtools-icon.disallowed-characters'), null);
                    assert.isTrue(hasReloadPrompt(component.shadowRoot));
                    return [
                        2
                    ];
            }
        });
    }));
    it('split header name and value on pasted content', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderName, originalHeaderValue, headerData, editedHeaderName, _ref, component, nameEditable, valueEditable, headerValueFromEvent, headerNameFromEvent, headerEditedEventCount, dt, nameEl, valueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    originalHeaderValue = 'someHeaderValue';
                    headerData = {
                        name: originalHeaderName,
                        value: originalHeaderValue,
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderName = 'permissions-Policy: unload=(https://xyz.com)';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(nameEditable, HTMLElement);
                    assert.instanceOf(valueEditable, HTMLElement);
                    headerValueFromEvent = '';
                    headerNameFromEvent = '';
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function(event) {
                        headerValueFromEvent = event.headerValue;
                        headerNameFromEvent = event.headerName;
                        headerEditedEventCount++;
                    });
                    dt = new DataTransfer();
                    dt.setData('text/plain', editedHeaderName);
                    // update name on blur
                    nameEditable.focus();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, {
                        clipboardData: dt,
                        bubbles: true,
                        composed: true
                    });
                    nameEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 1);
                    assert.strictEqual(headerNameFromEvent, 'permissions-policy');
                    assert.strictEqual(headerValueFromEvent, 'someHeaderValue');
                    // update value on blur
                    valueEditable.blur();
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 2);
                    assert.strictEqual(headerNameFromEvent, 'permissions-policy');
                    assert.strictEqual(headerValueFromEvent, 'unload=(https://xyz.com)');
                    // final value on UI
                    nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
                    valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
                    assert.strictEqual(nameEl.value, 'Permissions-Policy');
                    assert.strictEqual(valueEl.value, 'unload=(https://xyz.com)');
                    return [
                        2
                    ];
            }
        });
    }));
    it('set and revert pasted header name on escape', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderName, originalHeaderValue, headerData, editedHeaderName, _ref, component, nameEditable, valueEditable, headerEditedEventCount, dt, nameEl, valueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    originalHeaderValue = 'someHeaderValue';
                    headerData = {
                        name: originalHeaderName,
                        value: originalHeaderValue,
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderName = ':abc';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(nameEditable, HTMLElement);
                    assert.instanceOf(valueEditable, HTMLElement);
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function() {
                        headerEditedEventCount++;
                    });
                    dt = new DataTransfer();
                    dt.setData('text/plain', editedHeaderName);
                    nameEditable.focus();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, {
                        clipboardData: dt,
                        bubbles: true,
                        composed: true
                    });
                    nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
                    valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(nameEl.value, ':Abc');
                    assert.strictEqual(valueEl.value, originalHeaderValue);
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(nameEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 0);
                    assert.strictEqual(nameEl.value, 'Some-Header-Name');
                    return [
                        2
                    ];
            }
        });
    }));
    it('revert pasted header name and value on escape', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderName, originalHeaderValue, headerData, editedHeaderName, _ref, component, nameEditable, valueEditable, headerEditedEventCount, dt, nameEl, valueEl;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    originalHeaderValue = 'someHeaderValue';
                    headerData = {
                        name: originalHeaderName,
                        value: originalHeaderValue,
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderName = 'permissions-Policy: unload=(https://xyz.com)';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    assert.instanceOf(nameEditable, HTMLElement);
                    assert.instanceOf(valueEditable, HTMLElement);
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function() {
                        headerEditedEventCount++;
                    });
                    dt = new DataTransfer();
                    dt.setData('text/plain', editedHeaderName);
                    nameEditable.focus();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchPasteEvent)(nameEditable, {
                        clipboardData: dt,
                        bubbles: true,
                        composed: true
                    });
                    nameEl = component.shadowRoot.querySelector('.header-name devtools-editable-span');
                    valueEl = component.shadowRoot.querySelector('.header-value devtools-editable-span');
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(nameEl.value, 'Permissions-Policy');
                    assert.strictEqual(valueEl.value, 'unload=(https://xyz.com)');
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(valueEditable, {
                        key: 'Escape',
                        bubbles: true,
                        composed: true
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(headerEditedEventCount, 0);
                    assert.strictEqual(nameEl.value, 'Some-Header-Name');
                    assert.strictEqual(valueEl.value, 'someHeaderValue');
                    return [
                        2
                    ];
            }
        });
    }));
    it('recoginzes only alphanumeric characters, dashes, and underscores as valid in header names', function() {
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('AlphaNumeric123'), true);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('Alpha Numeric'), false);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('AlphaNumeric123!'), false);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('With-dashes_and_underscores'), true);
        assert.strictEqual(_components_js__WEBPACK_IMPORTED_MODULE_5__.HeaderSectionRow.isValidHeaderName('no*'), false);
    });
    it('allows removing a header override', /*#__PURE__*/ _async_to_generator(function() {
        var headerName, headerValue, headerData, component, headerValueFromEvent, headerNameFromEvent, headerRemovedEventCount, removeHeaderButton;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    headerName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    headerValue = 'someHeaderValue';
                    headerData = {
                        name: headerName,
                        value: headerValue,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    component = _state.sent().component;
                    assert.isNotNull(component.shadowRoot);
                    headerValueFromEvent = '';
                    headerNameFromEvent = '';
                    headerRemovedEventCount = 0;
                    component.addEventListener('headerremoved', function(event) {
                        headerRemovedEventCount++;
                        headerValueFromEvent = event.headerValue;
                        headerNameFromEvent = event.headerName;
                    });
                    removeHeaderButton = component.shadowRoot.querySelector('.remove-header');
                    removeHeaderButton.click();
                    assert.strictEqual(headerRemovedEventCount, 1);
                    assert.strictEqual(headerNameFromEvent, headerName);
                    assert.strictEqual(headerValueFromEvent, headerValue);
                    return [
                        2
                    ];
            }
        });
    }));
    it('removes leading/trailing whitespace when editing header names/values', /*#__PURE__*/ _async_to_generator(function() {
        var originalHeaderName, originalHeaderValue, headerData, editedHeaderName, editedHeaderValue, _ref, component, nameEditable, valueEditable, headerValueFromEvent, headerNameFromEvent, headerEditedEventCount;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHeaderName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toLowerCaseString('some-header-name');
                    originalHeaderValue = 'someHeaderValue';
                    headerData = {
                        name: originalHeaderName,
                        value: originalHeaderValue,
                        nameEditable: true,
                        valueEditable: 1 /* NetworkComponents.HeaderSectionRow.EditingAllowedStatus.Enabled */ 
                    };
                    editedHeaderName = ' new-header-name ';
                    editedHeaderValue = ' new value for header ';
                    return [
                        4,
                        renderHeaderSectionRow(headerData)
                    ];
                case 1:
                    _ref = _state.sent(), component = _ref.component, nameEditable = _ref.nameEditable, valueEditable = _ref.valueEditable;
                    assert.isNotNull(component.shadowRoot);
                    headerValueFromEvent = '';
                    headerNameFromEvent = '';
                    headerEditedEventCount = 0;
                    component.addEventListener('headeredited', function(event) {
                        headerEditedEventCount++;
                        headerValueFromEvent = event.headerValue;
                        headerNameFromEvent = event.headerName;
                    });
                    assert.instanceOf(nameEditable, HTMLElement);
                    nameEditable.focus();
                    nameEditable.innerText = editedHeaderName;
                    nameEditable.blur();
                    assert.strictEqual(headerEditedEventCount, 1);
                    assert.strictEqual(headerNameFromEvent, editedHeaderName.trim());
                    assert.strictEqual(headerValueFromEvent, originalHeaderValue);
                    assert.instanceOf(valueEditable, HTMLElement);
                    valueEditable.focus();
                    valueEditable.innerText = editedHeaderValue;
                    valueEditable.blur();
                    assert.strictEqual(headerEditedEventCount, 2);
                    assert.strictEqual(headerNameFromEvent, editedHeaderName.trim());
                    assert.strictEqual(headerValueFromEvent, editedHeaderValue.trim());
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=HeaderSectionRow.test.js.map


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