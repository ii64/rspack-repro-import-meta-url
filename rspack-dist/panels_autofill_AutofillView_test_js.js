"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_autofill_AutofillView_test_js"], {
"./panels/autofill/AutofillView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/autofill_manager/autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
/* harmony import */var _testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/DataGridHelpers.js */ "./testing/DataGridHelpers.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _autofill_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./autofill.js */ "./panels/autofill/autofill.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var addressFormFilledEvent = {
    addressUi: {
        addressFields: [
            {
                fields: [
                    {
                        name: 'NAME_FULL',
                        value: 'Crocodile Middle Dundee'
                    }
                ]
            },
            {
                fields: [
                    {
                        name: 'COMPANY_NAME',
                        value: 'Uluru Tours'
                    }
                ]
            },
            {
                fields: [
                    {
                        name: 'ADDRESS_HOME_STREET_ADDRESS',
                        value: 'Outback Road 1'
                    }
                ]
            },
            {
                fields: [
                    {
                        name: 'ADDRESS_HOME_CITY',
                        value: 'Bundaberg'
                    },
                    {
                        name: 'ADDRESS_HOME_STATE',
                        value: 'Queensland'
                    },
                    {
                        name: 'ADDRESS_HOME_ZIP',
                        value: '12345'
                    }
                ]
            }
        ]
    },
    filledFields: [
        {
            htmlType: 'text',
            id: 'input1',
            name: '',
            value: 'Crocodile',
            autofillType: 'First name',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
            fieldId: 1,
            frameId: '1'
        },
        {
            htmlType: 'text',
            id: '',
            name: 'input2',
            value: 'Dundee',
            autofillType: 'Last name',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
            fieldId: 2,
            frameId: '1'
        },
        {
            htmlType: 'text',
            id: 'input3',
            name: '',
            value: 'Australia',
            autofillType: 'Country',
            fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
            fieldId: 3,
            frameId: '1'
        },
        {
            htmlType: 'text',
            id: 'input4',
            name: '',
            value: '12345',
            autofillType: 'Zip code',
            fillingStrategy: "autocompleteAttribute" /* Protocol.Autofill.FillingStrategy.AutocompleteAttribute */ ,
            fieldId: 4,
            frameId: '1'
        }
    ]
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_6__.describeWithMockConnection)('AutofillView', function() {
    var target;
    var autofillModel;
    var showViewStub;
    beforeEach(function() {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('apca', '');
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        var maybeAutofillModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AutofillModel.AutofillModel);
        assert.exists(maybeAutofillModel);
        autofillModel = maybeAutofillModel;
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest("autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */ );
        showViewStub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ViewManager.ViewManager.instance(), 'showView').resolves();
        _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_2__.AutofillManager.AutofillManager.instance({
            forceNew: true
        });
    });
    afterEach(function() {
        showViewStub.restore();
    });
    var renderAutofillView = function() {
        var _ref = _async_to_generator(function() {
            var view;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = new _autofill_js__WEBPACK_IMPORTED_MODULE_10__.AutofillView.AutofillView();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(view);
                        return [
                            4,
                            view.render()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2,
                            view
                        ];
                }
            });
        });
        return function renderAutofillView() {
            return _ref.apply(this, arguments);
        };
    }();
    var assertViewShowsEventData = function(view) {
        var addressSpans = view.shadowRoot.querySelectorAll('.address span');
        var addressText = _to_consumable_array(addressSpans).map(function(div) {
            return div.textContent;
        });
        assert.deepStrictEqual(addressText, [
            'Crocodile',
            ' Middle ',
            'Dundee',
            'Uluru ToursOutback Road 1Bundaberg Queensland ',
            '12345'
        ]);
        var expectedHeaders = [
            'Form field',
            'Predicted autofill value',
            'Value',
            'filledFieldIndex'
        ];
        var expectedRows = [
            [
                '#input1 (text)',
                'First name \nheur',
                '"Crocodile"',
                ''
            ],
            [
                'input2 (text)',
                'Last name \nheur',
                '"Dundee"',
                ''
            ],
            [
                '#input3 (text)',
                'Country \nheur',
                '"Australia"',
                ''
            ],
            [
                '#input4 (text)',
                'Zip code \nattr',
                '"12345"',
                ''
            ]
        ];
        (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.assertGridContents)(view, expectedHeaders, expectedRows);
    };
    it('renders autofilled address and filled fields and clears content on navigation', /*#__PURE__*/ _async_to_generator(function() {
        var expectedPlaceholder, view, placeholderText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    expectedPlaceholder = 'To start debugging autofill, use Chrome\'s autofill menu to fill an address form.';
                    return [
                        4,
                        renderAutofillView()
                    ];
                case 1:
                    view = _state.sent();
                    placeholderText = view.shadowRoot.querySelector('.placeholder div').textContent.trim();
                    assert.strictEqual(placeholderText, expectedPlaceholder);
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assertViewShowsEventData(view);
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.navigate)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_7__.getMainFrame)(target));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 3:
                    _state.sent();
                    placeholderText = view.shadowRoot.querySelector('.placeholder div').textContent.trim();
                    assert.strictEqual(placeholderText, expectedPlaceholder);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows content if the view is created after the event was received', /*#__PURE__*/ _async_to_generator(function() {
        var view;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                    return [
                        4,
                        renderAutofillView()
                    ];
                case 1:
                    view = _state.sent();
                    assert.isNotNull(view.shadowRoot);
                    assertViewShowsEventData(view);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('auto-open can be turned off/on', /*#__PURE__*/ _async_to_generator(function() {
        var view, checkbox, event;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderAutofillView()
                    ];
                case 1:
                    view = _state.sent();
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                    showViewStub.reset();
                    checkbox = view.shadowRoot.querySelector('input');
                    assert.isNotNull(checkbox);
                    assert.isTrue(checkbox.checked);
                    checkbox.checked = false;
                    event = new Event('change');
                    checkbox.dispatchEvent(event);
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.notCalled);
                    checkbox.checked = true;
                    event = new Event('change');
                    checkbox.dispatchEvent(event);
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights corresponding grid row when hovering over address span', /*#__PURE__*/ _async_to_generator(function() {
        var monospaceStyles, view, addressSpans, crocodileSpan, grid, firstGridRow, styles;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    monospaceStyles = 'font-family:var(--monospace-font-family);font-size:var(--monospace-font-size);';
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                    return [
                        4,
                        renderAutofillView()
                    ];
                case 1:
                    view = _state.sent();
                    assertViewShowsEventData(view);
                    addressSpans = view.shadowRoot.querySelectorAll('.address span');
                    crocodileSpan = addressSpans[0];
                    assert.strictEqual(crocodileSpan.textContent, 'Crocodile');
                    assert.isFalse(crocodileSpan.classList.contains('highlighted'));
                    grid = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getDataGrid)(view);
                    assert.isNotNull(grid.shadowRoot);
                    firstGridRow = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getBodyRowByAriaIndex)(grid.shadowRoot, 1);
                    styles = firstGridRow.getAttribute('style') || '';
                    assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles);
                    crocodileSpan.dispatchEvent(new MouseEvent('mouseenter'));
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(crocodileSpan.classList.contains('highlighted'));
                    styles = firstGridRow.getAttribute('style') || '';
                    assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles + 'background-color:var(--sys-color-state-hover-on-subtle);');
                    crocodileSpan.dispatchEvent(new MouseEvent('mouseleave'));
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(crocodileSpan.classList.contains('highlighted'));
                    styles = firstGridRow.getAttribute('style') || '';
                    assert.strictEqual(styles.replace(/\s/g, ''), monospaceStyles);
                    return [
                        2
                    ];
            }
        });
    }));
    it('highlights corresponding address span and DOM node when hovering over grid row', /*#__PURE__*/ _async_to_generator(function() {
        var mockFrame, getFrameStub, view, domModel, overlayModel, overlaySpy, hideOverlaySpy, addressSpans, zipCodeSpan, grid, fourthGridRow, deferredNode;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.stubNoopSettings)();
                    mockFrame = {
                        resourceTreeModel: function() {
                            return {
                                target: function() {
                                    return target;
                                }
                            };
                        }
                    };
                    getFrameStub = sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.FrameManager.FrameManager.instance(), 'getFrame').callsFake(function(frameId) {
                        return frameId === addressFormFilledEvent.filledFields[3].frameId ? mockFrame : null;
                    });
                    autofillModel.addressFormFilled(addressFormFilledEvent);
                    assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                    return [
                        4,
                        renderAutofillView()
                    ];
                case 1:
                    view = _state.sent();
                    assertViewShowsEventData(view);
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    overlayModel = domModel === null || domModel === void 0 ? void 0 : domModel.overlayModel();
                    assert.exists(overlayModel);
                    overlaySpy = sinon.spy(overlayModel, 'highlightInOverlay');
                    hideOverlaySpy = sinon.spy(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel, 'hideDOMNodeHighlight');
                    addressSpans = view.shadowRoot.querySelectorAll('.address span');
                    zipCodeSpan = addressSpans[4];
                    assert.strictEqual(zipCodeSpan.textContent, '12345');
                    assert.isFalse(zipCodeSpan.classList.contains('highlighted'));
                    grid = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getDataGrid)(view);
                    assert.isNotNull(grid.shadowRoot);
                    fourthGridRow = (0,_testing_DataGridHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getBodyRowByAriaIndex)(grid.shadowRoot, 4);
                    fourthGridRow.dispatchEvent(new MouseEvent('mouseenter'));
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(zipCodeSpan.classList.contains('highlighted'));
                    assert.isTrue(overlaySpy.calledOnce);
                    deferredNode = overlaySpy.getCall(0).args[0].deferredNode;
                    assert.strictEqual(deferredNode.backendNodeId(), 4);
                    assert.isTrue(hideOverlaySpy.notCalled);
                    fourthGridRow.dispatchEvent(new MouseEvent('mouseleave'));
                    return [
                        4,
                        coordinator.done({
                            waitForWork: true
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(zipCodeSpan.classList.contains('highlighted'));
                    assert.isTrue(hideOverlaySpy.calledOnce);
                    getFrameStub.restore();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=AutofillView.test.js.map


}),
"./panels/autofill/autofill.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AutofillView: function() { return /* reexport module object */ _AutofillView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _AutofillView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutofillView.js */ "./panels/autofill/AutofillView.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=autofill.js.map


}),

}]);