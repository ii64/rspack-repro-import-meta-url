"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_AppManifestView_test_js"], {
"./panels/application/fixtures/320x320.png?1588": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "5cc5122667a49dfbfbb3.png";

}),
"./panels/application/fixtures/640x320.png?7ad8": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "55cffdb1a93d7cb61c9d.png";

}),
"./panels/application/fixtures/96x96.png?571b": (function (module, __unused_webpack_exports, __webpack_require__) {
module.exports = __webpack_require__.p + "47a2c840b8950741fd78.png";

}),
"./panels/application/AppManifestView.test.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _application_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_6__]);
_application_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2022 The Chromium Authors. All rights reserved.
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







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('AppManifestView', function() {
    var renderWithWarnings = function renderWithWarnings(manifest) {
        return _renderWithWarnings.apply(this, arguments);
    };
    var FIXTURES_96X96_URL = "".concat(new URL(/* asset import */__webpack_require__(/*! ./fixtures/96x96.png */ "./panels/application/fixtures/96x96.png?571b"), __webpack_require__.b));
    var FIXTURES_320X320_URL = "".concat(new URL(/* asset import */__webpack_require__(/*! ./fixtures/320x320.png */ "./panels/application/fixtures/320x320.png?1588"), __webpack_require__.b));
    var FIXTURES_640X320_URL = "".concat(new URL(/* asset import */__webpack_require__(/*! ./fixtures/640x320.png */ "./panels/application/fixtures/640x320.png?7ad8"), __webpack_require__.b));
    var target;
    var emptyView;
    var reportView;
    var throttler;
    var view;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget
        });
        emptyView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget('');
        reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ReportView.ReportView('');
        throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
    });
    afterEach(function() {
        view.detach();
    });
    it('shows report view once manifest available', /*#__PURE__*/ _async_to_generator(function() {
        var resourceTreeModel, _$URL, fetchAppManifest;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    _$URL = 'http://example.com';
                    fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
                    fetchAppManifest.onCall(0).resolves({
                        url: _$URL,
                        data: null,
                        errors: []
                    });
                    fetchAppManifest.onCall(1).resolves({
                        url: _$URL,
                        data: '{}',
                        errors: []
                    });
                    fetchAppManifest.onCall(2).resolves({
                        url: _$URL,
                        data: '{"short_name": "example.com"}',
                        errors: []
                    });
                    sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
                    sinon.stub(resourceTreeModel, 'getAppId').resolves({});
                    view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
                    view.markAsRoot();
                    view.show(document.body);
                    return [
                        4,
                        new Promise(function(resolve) {
                            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */ , resolve, {
                                once: true
                            });
                        })
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(emptyView.isShowing());
                    assert.isFalse(reportView.isShowing());
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
                    return [
                        4,
                        new Promise(function(resolve) {
                            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */ , resolve, {
                                once: true
                            });
                        })
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(emptyView.isShowing());
                    assert.isFalse(reportView.isShowing());
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
                    return [
                        4,
                        new Promise(function(resolve) {
                            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */ , resolve, {
                                once: true
                            });
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.isFalse(emptyView.isShowing());
                    assert.isTrue(reportView.isShowing());
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows pwa wco if available', /*#__PURE__*/ _async_to_generator(function() {
        var resourceTreeModel, _$URL, fetchAppManifest, manifestSections, values;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                    assert.exists(resourceTreeModel);
                    _$URL = 'https://www.example.com';
                    fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
                    fetchAppManifest.resolves({
                        url: _$URL,
                        data: '{"display_override": ["window-controls-overlay"]}',
                        errors: []
                    });
                    sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
                    sinon.stub(resourceTreeModel, 'getAppId').resolves({});
                    view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
                    view.markAsRoot();
                    view.show(document.body);
                    resourceTreeModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.DOMContentLoaded, 42);
                    return [
                        4,
                        new Promise(function(resolve) {
                            view.addEventListener("ManifestDetected" /* Application.AppManifestView.Events.ManifestDetected */ , resolve, {
                                once: true
                            });
                        })
                    ];
                case 1:
                    _state.sent();
                    manifestSections = view.getStaticSections();
                    values = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(manifestSections[4].getFieldElement(), '.wco');
                    assert.deepEqual(values, [
                        'window-controls-overlay'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('can parse ‘sizes’-field', /*#__PURE__*/ _async_to_generator(function() {
        var parsed, expected;
        return _ts_generator(this, function(_state) {
            view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
            parsed = view.parseSizes('512x512', 'Icon', 'https://web.dev/image.html', []);
            expected = [
                {
                    width: 512,
                    height: 512,
                    formatted: '512×512px'
                }
            ];
            assert.deepStrictEqual(parsed, expected);
            return [
                2
            ];
        });
    }));
    it('can handle missing ‘sizes’-field', /*#__PURE__*/ _async_to_generator(function() {
        var parsed;
        return _ts_generator(this, function(_state) {
            view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
            parsed = view.parseSizes(undefined, 'Icon', 'https://web.dev/image.html', []);
            assert.deepStrictEqual(parsed, []);
            return [
                2
            ];
        });
    }));
    function _renderWithWarnings() {
        _renderWithWarnings = _async_to_generator(function(manifest) {
            var _reportView_element_shadowRoot, resourceTreeModel, _$URL, fetchAppManifest, warningSection, warnings;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
                        assert.exists(resourceTreeModel);
                        _$URL = window.location.origin;
                        fetchAppManifest = sinon.stub(resourceTreeModel, 'fetchAppManifest');
                        fetchAppManifest.resolves({
                            url: _$URL,
                            data: manifest,
                            errors: []
                        });
                        sinon.stub(resourceTreeModel, 'getInstallabilityErrors').resolves([]);
                        sinon.stub(resourceTreeModel, 'getAppId').resolves({});
                        view = new _application_js__WEBPACK_IMPORTED_MODULE_6__.AppManifestView.AppManifestView(emptyView, reportView, throttler);
                        view.markAsRoot();
                        view.show(document.body);
                        return [
                            4,
                            new Promise(function(resolve) {
                                view.addEventListener("ManifestRendered" /* Application.AppManifestView.Events.ManifestRendered */ , resolve, {
                                    once: true
                                });
                            })
                        ];
                    case 1:
                        _state.sent();
                        warningSection = (_reportView_element_shadowRoot = reportView.element.shadowRoot) === null || _reportView_element_shadowRoot === void 0 ? void 0 : _reportView_element_shadowRoot.querySelector('.report-section');
                        assert.exists(warningSection);
                        warnings = warningSection.querySelectorAll('.report-row');
                        assert.exists(warnings);
                        return [
                            2,
                            Array.from(warnings).map(function(warning) {
                                return warning.textContent || '';
                            })
                        ];
                }
            });
        });
        return _renderWithWarnings.apply(this, arguments);
    }
    it('displays warnings for too many shortcuts and not enough screenshots', /*#__PURE__*/ _async_to_generator(function() {
        var actual, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderWithWarnings('{\n        "shortcuts" : [\n          {\n            "name": "Today\'s agenda",\n            "url": "/today",\n            "description": "List of events planned for today",\n            "icons": [{ "src": "'.concat(FIXTURES_96X96_URL, '", "sizes": "96x96" }]\n          },\n          {\n            "name": "New event",\n            "url": "/create/event",\n            "icons": [{ "src": "').concat(FIXTURES_96X96_URL, '", "sizes": "96x96" }]\n          },\n          {\n            "name": "New reminder",\n            "url": "/create/reminder",\n            "icons": [{ "src": "').concat(FIXTURES_96X96_URL, '", "sizes": "96x96" }]\n          },\n          {\n            "name": "Delete event",\n            "url": "/delete/reminder",\n            "icons": [{ "src": "').concat(FIXTURES_96X96_URL, '", "sizes": "96x96" }]\n          },\n          {\n            "name": "Delete reminder",\n            "url": "/delete/reminder",\n            "icons": [{ "src": "').concat(FIXTURES_96X96_URL, '", "sizes": "96x96" }]\n          }\n        ]\n      }'))
                    ];
                case 1:
                    actual = _state.sent();
                    expected = [
                        'The maximum number of shortcuts is platform dependent. Some shortcuts may be not available.',
                        'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the form_factor set to wide.',
                        'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which form_factor is not set or set to a value other than wide.',
                        'Most operating systems require square icons. Please include at least one square icon in the array.'
                    ];
                    assert.deepStrictEqual(actual, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays warnings for too many mobile screenshots', /*#__PURE__*/ _async_to_generator(function() {
        var actual, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderWithWarnings('{\n        "screenshots": [\n          {\n            "src": "'.concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320"\n          }\n        ]\n      }'))
                    ];
                case 1:
                    actual = _state.sent();
                    expected = [
                        'Richer PWA Install UI won’t be available on desktop. Please add at least one screenshot with the form_factor set to wide.',
                        'No more than 5 screenshots will be displayed on mobile. The rest will be ignored.',
                        'Most operating systems require square icons. Please include at least one square icon in the array.'
                    ];
                    assert.deepStrictEqual(actual, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays warnings for too many desktop screenshots and wrong aspect ratio', /*#__PURE__*/ _async_to_generator(function() {
        var actual, expected;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderWithWarnings('{\n        "screenshots": [\n          {\n            "src": "'.concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_640X320_URL, '",\n            "type": "image/png",\n            "sizes": "640x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          },\n          {\n            "src": "').concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide"\n          }\n        ]\n      }'))
                    ];
                case 1:
                    actual = _state.sent();
                    expected = [
                        'All screenshots with the same form_factor must have the same aspect ratio as the first screenshot with that form_factor. Some screenshots will be ignored.',
                        'Richer PWA Install UI won’t be available on mobile. Please add at least one screenshot for which form_factor is not set or set to a value other than wide.',
                        'No more than 8 screenshots will be displayed on desktop. The rest will be ignored.',
                        'Most operating systems require square icons. Please include at least one square icon in the array.'
                    ];
                    assert.deepStrictEqual(actual, expected);
                    return [
                        2
                    ];
            }
        });
    }));
    it('displays "form-factor", "platform" and "label" properties for screenshots', /*#__PURE__*/ _async_to_generator(function() {
        var _reportView_element_shadowRoot, screenshotSection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        renderWithWarnings('{\n        "screenshots": [\n          {\n            "src": "'.concat(FIXTURES_320X320_URL, '",\n            "type": "image/png",\n            "sizes": "320x320",\n            "form_factor": "wide",\n            "label": "Dummy Screenshot",\n            "platform": "windows"\n          }\n        ]\n      }'))
                    ];
                case 1:
                    _state.sent();
                    screenshotSection = ((_reportView_element_shadowRoot = reportView.element.shadowRoot) === null || _reportView_element_shadowRoot === void 0 ? void 0 : _reportView_element_shadowRoot.querySelectorAll('.report-section')[7]) || null;
                    assert.instanceOf(screenshotSection, HTMLDivElement);
                    assert.deepStrictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(screenshotSection, '.report-field-name').slice(0, 3), [
                        'Form factor',
                        'Label',
                        'Platform'
                    ]);
                    assert.deepStrictEqual((0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.getCleanTextContentFromElements)(screenshotSection, '.report-field-value').slice(0, 3), [
                        'wide',
                        'Dummy Screenshot',
                        'windows'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=AppManifestView.test.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/application.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return /* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__; },
  ApplicationPanelSidebar: function() { return /* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__; },
  BackgroundServiceModel: function() { return /* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  BackgroundServiceView: function() { return /* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__; },
  BounceTrackingMitigationsTreeElement: function() { return /* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__; },
  CookieItemsView: function() { return /* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  DOMStorageItemsView: function() { return /* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  DOMStorageModel: function() { return /* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__; },
  IndexedDBModel: function() { return /* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__; },
  IndexedDBViews: function() { return /* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__; },
  InterestGroupStorageModel: function() { return /* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  InterestGroupStorageView: function() { return /* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__; },
  InterestGroupTreeElement: function() { return /* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__; },
  OpenedWindowDetailsView: function() { return /* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__; },
  PreloadingTreeElement: function() { return /* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  PreloadingView: function() { return /* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ReportingApiReportsView: function() { return /* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__; },
  ReportingApiView: function() { return /* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__; },
  ResourcesPanel: function() { return /* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__; },
  ServiceWorkerCacheViews: function() { return /* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__; },
  ServiceWorkerUpdateCycleView: function() { return /* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__; },
  ServiceWorkersView: function() { return /* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__; },
  SharedStorageEventsView: function() { return /* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__; },
  SharedStorageItemsView: function() { return /* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__; },
  SharedStorageListTreeElement: function() { return /* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__; },
  SharedStorageModel: function() { return /* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__; },
  SharedStorageTreeElement: function() { return /* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__; },
  StorageBucketsTreeElement: function() { return /* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__; },
  StorageItemsView: function() { return /* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__; },
  StorageView: function() { return /* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__; },
  TrustTokensTreeElement: function() { return /* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__; }
});
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































 //# sourceMappingURL=application.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);