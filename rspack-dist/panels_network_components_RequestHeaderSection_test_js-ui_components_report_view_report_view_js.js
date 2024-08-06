"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_components_RequestHeaderSection_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/components/RequestHeaderSection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./panels/network/components/components.js");
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




var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
function renderRequestHeaderSection(request) {
    return _renderRequestHeaderSection.apply(this, arguments);
}
function _renderRequestHeaderSection() {
    _renderRequestHeaderSection = _async_to_generator(function(request) {
        var component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = new _components_js__WEBPACK_IMPORTED_MODULE_3__.RequestHeaderSection.RequestHeaderSection();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                    component.data = {
                        request: request
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
    return _renderRequestHeaderSection.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('RequestHeaderSection', function() {
    it('renders provisional headers warning', /*#__PURE__*/ _async_to_generator(function() {
        var request, component;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        cachedInMemory: function() {
                            return true;
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
                        requestHeadersText: function() {
                            return undefined;
                        }
                    };
                    return [
                        4,
                        renderRequestHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    assert.strictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getCleanTextContentFromElements)(component.shadowRoot, '.call-to-action')[0], 'Provisional headers are shown. Disable cache to see full headers. Learn more');
                    return [
                        2
                    ];
            }
        });
    }));
    it('sorts headers alphabetically', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows, sorted;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        cachedInMemory: function() {
                            return true;
                        },
                        requestHeaders: function() {
                            return [
                                {
                                    name: 'Ab',
                                    value: 'second'
                                },
                                {
                                    name: 'test',
                                    value: 'fifth'
                                },
                                {
                                    name: 'name',
                                    value: 'fourth'
                                },
                                {
                                    name: 'abc',
                                    value: 'third'
                                },
                                {
                                    name: 'aa',
                                    value: 'first'
                                }
                            ];
                        },
                        requestHeadersText: function() {
                            return 'placeholderText';
                        }
                    };
                    return [
                        4,
                        renderRequestHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    sorted = Array.from(rows).map(function(row) {
                        var _row_shadowRoot_querySelector_textContent, _row_shadowRoot_querySelector, _row_shadowRoot_querySelector_textContent1, _row_shadowRoot_querySelector1;
                        assert.isNotNull(row.shadowRoot);
                        return [
                            ((_row_shadowRoot_querySelector = row.shadowRoot.querySelector('.header-name')) === null || _row_shadowRoot_querySelector === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent = _row_shadowRoot_querySelector.textContent) === null || _row_shadowRoot_querySelector_textContent === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent.trim()) || '',
                            ((_row_shadowRoot_querySelector1 = row.shadowRoot.querySelector('.header-value')) === null || _row_shadowRoot_querySelector1 === void 0 ? void 0 : (_row_shadowRoot_querySelector_textContent1 = _row_shadowRoot_querySelector1.textContent) === null || _row_shadowRoot_querySelector_textContent1 === void 0 ? void 0 : _row_shadowRoot_querySelector_textContent1.trim()) || ''
                        ];
                    });
                    assert.deepStrictEqual(sorted, [
                        [
                            'aa:',
                            'first'
                        ],
                        [
                            'ab:',
                            'second'
                        ],
                        [
                            'abc:',
                            'third'
                        ],
                        [
                            'name:',
                            'fourth'
                        ],
                        [
                            'test:',
                            'fifth'
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not warn about pseudo-headers containing invalid characters', /*#__PURE__*/ _async_to_generator(function() {
        var request, component, rows, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, row;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    request = {
                        cachedInMemory: function() {
                            return true;
                        },
                        requestHeaders: function() {
                            return [
                                {
                                    name: ':Authority',
                                    value: 'www.example.com'
                                },
                                {
                                    name: ':Method',
                                    value: 'GET'
                                },
                                {
                                    name: ':Path',
                                    value: '/'
                                },
                                {
                                    name: ':Scheme',
                                    value: 'https'
                                }
                            ];
                        },
                        requestHeadersText: function() {
                            return 'placeholderText';
                        }
                    };
                    return [
                        4,
                        renderRequestHeaderSection(request)
                    ];
                case 1:
                    component = _state.sent();
                    assert.isNotNull(component.shadowRoot);
                    rows = component.shadowRoot.querySelectorAll('devtools-header-section-row');
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(_iterator = rows[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            row = _step.value;
                            assert.isNotNull(row.shadowRoot);
                            assert.isNull(row.shadowRoot.querySelector('.disallowed-characters'));
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
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RequestHeaderSection.test.js.map


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