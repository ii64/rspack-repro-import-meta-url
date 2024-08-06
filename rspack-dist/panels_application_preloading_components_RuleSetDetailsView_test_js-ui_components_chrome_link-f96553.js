"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_RuleSetDetailsView_test_js-ui_components_chrome_link-f96553"], {
"./panels/application/preloading/components/RuleSetDetailsView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./panels/application/preloading/components/components.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_js__WEBPACK_IMPORTED_MODULE_3__]);
_components_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2023 The Chromium Authors. All rights reserved.
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




var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function renderRuleSetDetailsView(data) {
    return _renderRuleSetDetailsView.apply(this, arguments);
}
function _renderRuleSetDetailsView() {
    _renderRuleSetDetailsView = _async_to_generator(function(data) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.RuleSetDetailsView.RuleSetDetailsView();
                    component.data = data;
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    assert.isNotNull(component.shadowRoot);
                    return [
                        4,
                        coordinator.done()
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
    return _renderRuleSetDetailsView.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('RuleSetDetailsView', function() {
    it('renders nothing if not selected', /*#__PURE__*/ _async_to_generator(function() {
        var data, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = null;
                    return [
                        4,
                        renderRuleSetDetailsView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    assert.strictEqual(component.shadowRoot.textContent, '');
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders rule set', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_getElementById, _component_shadowRoot, _component_shadowRoot1, data, component, textEditor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        id: 'ruleSetId:1',
                        loaderId: 'loaderId:1',
                        sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n',
                        backendNodeId: 1
                    };
                    return [
                        4,
                        renderRuleSetDetailsView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.deepEqual((_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : (_component_shadowRoot_getElementById = _component_shadowRoot.getElementById('error-message-text')) === null || _component_shadowRoot_getElementById === void 0 ? void 0 : _component_shadowRoot_getElementById.textContent, undefined);
                    textEditor = (_component_shadowRoot1 = component.shadowRoot) === null || _component_shadowRoot1 === void 0 ? void 0 : _component_shadowRoot1.querySelector('devtools-text-editor');
                    assert.strictEqual(textEditor.state.doc.toString(), data.sourceText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders rule set from Speculation-Rules HTTP header', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_getElementById, _component_shadowRoot, _component_shadowRoot1, data, component, textEditor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        id: 'ruleSetId:1',
                        loaderId: 'loaderId:1',
                        sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n      "urls": ["/subresource.js"]\n    }\n  ]\n}\n',
                        url: 'https://example.com/speculationrules.json',
                        requestId: 'reqeustId'
                    };
                    return [
                        4,
                        renderRuleSetDetailsView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.deepEqual((_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : (_component_shadowRoot_getElementById = _component_shadowRoot.getElementById('error-message-text')) === null || _component_shadowRoot_getElementById === void 0 ? void 0 : _component_shadowRoot_getElementById.textContent, undefined);
                    textEditor = (_component_shadowRoot1 = component.shadowRoot) === null || _component_shadowRoot1 === void 0 ? void 0 : _component_shadowRoot1.querySelector('devtools-text-editor');
                    assert.strictEqual(textEditor.state.doc.toString(), data.sourceText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders invalid rule set', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_getElementById, _component_shadowRoot, _component_shadowRoot1, data, component, textEditor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        id: 'ruleSetId:1',
                        loaderId: 'loaderId:1',
                        sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list",\n',
                        backendNodeId: 1,
                        errorType: "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */ ,
                        errorMessage: 'Line: 6, column: 1, Syntax error.'
                    };
                    return [
                        4,
                        renderRuleSetDetailsView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.deepEqual((_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : (_component_shadowRoot_getElementById = _component_shadowRoot.getElementById('error-message-text')) === null || _component_shadowRoot_getElementById === void 0 ? void 0 : _component_shadowRoot_getElementById.textContent, 'Line: 6, column: 1, Syntax error.');
                    textEditor = (_component_shadowRoot1 = component.shadowRoot) === null || _component_shadowRoot1 === void 0 ? void 0 : _component_shadowRoot1.querySelector('devtools-text-editor');
                    assert.strictEqual(textEditor.state.doc.toString(), data.sourceText);
                    return [
                        2
                    ];
            }
        });
    }));
    it('renders invalid rule set', /*#__PURE__*/ _async_to_generator(function() {
        var _component_shadowRoot_getElementById, _component_shadowRoot, _component_shadowRoot1, data, component, textEditor;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = {
                        id: 'ruleSetId:1',
                        loaderId: 'loaderId:1',
                        sourceText: '\n{\n  "prefetch": [\n    {\n      "source": "list"\n    }\n  ]\n}\n',
                        backendNodeId: 1,
                        errorType: "InvalidRulesSkipped" /* Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped */ ,
                        errorMessage: 'A list rule must have a "urls" array.'
                    };
                    return [
                        4,
                        renderRuleSetDetailsView(data)
                    ];
                case 1:
                    component = _state.sent();
                    assert.deepEqual((_component_shadowRoot = component.shadowRoot) === null || _component_shadowRoot === void 0 ? void 0 : (_component_shadowRoot_getElementById = _component_shadowRoot.getElementById('error-message-text')) === null || _component_shadowRoot_getElementById === void 0 ? void 0 : _component_shadowRoot_getElementById.textContent, 'A list rule must have a "urls" array.');
                    textEditor = (_component_shadowRoot1 = component.shadowRoot) === null || _component_shadowRoot1 === void 0 ? void 0 : _component_shadowRoot1.querySelector('devtools-text-editor');
                    assert.strictEqual(textEditor.state.doc.toString(), data.sourceText);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RuleSetDetailsView.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/preloading/components/components.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MismatchedPreloadingGrid: function() { return /* reexport module object */ _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__; },
  PreloadingDetailsReportView: function() { return /* reexport module object */ _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__; },
  PreloadingDisabledInfobar: function() { return /* reexport module object */ _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__; },
  PreloadingGrid: function() { return /* reexport module object */ _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__; },
  PreloadingMismatchedHeadersGrid: function() { return /* reexport module object */ _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  RuleSetDetailsView: function() { return /* reexport module object */ _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  RuleSetGrid: function() { return /* reexport module object */ _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__; },
  UsedPreloadingView: function() { return /* reexport module object */ _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__; }
});
/* harmony import */var _MismatchedPreloadingGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MismatchedPreloadingGrid.js */ "./panels/application/preloading/components/MismatchedPreloadingGrid.js");
/* harmony import */var _PreloadingDetailsReportView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PreloadingDetailsReportView.js */ "./panels/application/preloading/components/PreloadingDetailsReportView.js");
/* harmony import */var _PreloadingDisabledInfobar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreloadingDisabledInfobar.js */ "./panels/application/preloading/components/PreloadingDisabledInfobar.js");
/* harmony import */var _PreloadingGrid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PreloadingGrid.js */ "./panels/application/preloading/components/PreloadingGrid.js");
/* harmony import */var _PreloadingMismatchedHeadersGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreloadingMismatchedHeadersGrid.js */ "./panels/application/preloading/components/PreloadingMismatchedHeadersGrid.js");
/* harmony import */var _RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RuleSetDetailsView.js */ "./panels/application/preloading/components/RuleSetDetailsView.js");
/* harmony import */var _RuleSetGrid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RuleSetGrid.js */ "./panels/application/preloading/components/RuleSetGrid.js");
/* harmony import */var _UsedPreloadingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UsedPreloadingView.js */ "./panels/application/preloading/components/UsedPreloadingView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__]);
_RuleSetDetailsView_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








 //# sourceMappingURL=components.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./ui/components/chrome_link/chrome_link.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLink: function() { return /* reexport module object */ _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ChromeLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLink.js */ "./ui/components/chrome_link/ChromeLink.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=chrome_link.js.map


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