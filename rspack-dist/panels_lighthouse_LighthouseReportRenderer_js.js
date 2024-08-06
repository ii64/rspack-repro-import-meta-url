"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseReportRenderer_js"], {
"./panels/lighthouse/LighthouseReportRenderer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LighthouseReportRenderer: function() { return LighthouseReportRenderer; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/lighthouse/report/report.js */ "./third_party/lighthouse/report/report.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline/timeline.js */ "./panels/timeline/timeline.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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










var MaxLengthForLinks = 40;
var LighthouseReportRenderer = /*#__PURE__*/ function() {
    "use strict";
    function LighthouseReportRenderer() {
        _class_call_check(this, LighthouseReportRenderer);
    }
    _create_class(LighthouseReportRenderer, null, [
        {
            key: "renderLighthouseReport",
            value: function renderLighthouseReport(lhr, artifacts, opts) {
                var onViewTrace = undefined;
                if (artifacts) {
                    onViewTrace = /*#__PURE__*/ _async_to_generator(function() {
                        var defaultPassTrace;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    defaultPassTrace = artifacts.traces.defaultPass;
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseViewTrace);
                                    return [
                                        4,
                                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().showPanel('timeline')
                                    ];
                                case 1:
                                    _state.sent();
                                    _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__.TimelinePanel.TimelinePanel.instance().loadFromEvents(defaultPassTrace.traceEvents);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                }
                function onSaveFileOverride(blob) {
                    return _onSaveFileOverride.apply(this, arguments);
                }
                function _onSaveFileOverride() {
                    _onSaveFileOverride = _async_to_generator(function(blob) {
                        var domain, sanitizedDomain, timestamp, ext, basename, text;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    domain = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(lhr.finalUrl || lhr.finalDisplayedUrl).domain();
                                    sanitizedDomain = domain.replace(/[^a-z0-9.-]+/gi, '_');
                                    timestamp = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DateUtilities.toISO8601Compact(new Date(lhr.fetchTime));
                                    ext = blob.type.match('json') ? '.json' : '.html';
                                    basename = "".concat(sanitizedDomain, "-").concat(timestamp).concat(ext);
                                    return [
                                        4,
                                        blob.text()
                                    ];
                                case 1:
                                    text = _state.sent();
                                    return [
                                        4,
                                        _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().save(basename, text, true, false)
                                    ];
                                case 2:
                                    _state.sent();
                                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().close(basename);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _onSaveFileOverride.apply(this, arguments);
                }
                function onPrintOverride(rootEl) {
                    return _onPrintOverride.apply(this, arguments);
                }
                function _onPrintOverride() {
                    _onPrintOverride = _async_to_generator(function(rootEl) {
                        var _opts_beforePrint, _opts_afterPrint, clonedReport, printWindow;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    clonedReport = rootEl.cloneNode(true);
                                    printWindow = window.open('', '_blank', 'channelmode=1,status=1,resizable=1');
                                    if (!printWindow) {
                                        return [
                                            2
                                        ];
                                    }
                                    printWindow.document.body.replaceWith(clonedReport);
                                    // Linkified nodes are shadow elements, which aren't exposed via `cloneNode`.
                                    return [
                                        4,
                                        LighthouseReportRenderer.linkifyNodeDetails(clonedReport)
                                    ];
                                case 1:
                                    _state.sent();
                                    opts === null || opts === void 0 ? void 0 : (_opts_beforePrint = opts.beforePrint) === null || _opts_beforePrint === void 0 ? void 0 : _opts_beforePrint.call(opts);
                                    printWindow.focus();
                                    printWindow.print();
                                    printWindow.close();
                                    opts === null || opts === void 0 ? void 0 : (_opts_afterPrint = opts.afterPrint) === null || _opts_afterPrint === void 0 ? void 0 : _opts_afterPrint.call(opts);
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return _onPrintOverride.apply(this, arguments);
                }
                function getStandaloneReportHTML() {
                    // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
                    return Lighthouse.ReportGenerator.ReportGenerator.generateReportHtml(lhr);
                }
                var reportEl = _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__.renderReport(lhr, {
                    // Disable dark mode so we can manually adjust it.
                    disableDarkMode: true,
                    onViewTrace: onViewTrace,
                    onSaveFileOverride: onSaveFileOverride,
                    onPrintOverride: onPrintOverride,
                    getStandaloneReportHTML: getStandaloneReportHTML
                });
                reportEl.classList.add('lh-devtools');
                var updateDarkModeIfNecessary = function() {
                    reportEl.classList.toggle('lh-dark', _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeSupport.instance().themeName() === 'dark');
                };
                _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__.ThemeChangeEvent.eventName, updateDarkModeIfNecessary);
                updateDarkModeIfNecessary();
                // @ts-ignore Expose LHR on DOM for e2e tests
                reportEl._lighthouseResultForTesting = lhr;
                // @ts-ignore Expose Artifacts on DOM for e2e tests
                reportEl._lighthouseArtifactsForTesting = artifacts;
                // Linkifying requires the target be loaded. Do not block the report
                // from rendering, as this is just an embellishment and the main target
                // could take awhile to load.
                void LighthouseReportRenderer.waitForMainTargetLoad().then(function() {
                    void LighthouseReportRenderer.linkifyNodeDetails(reportEl);
                    void LighthouseReportRenderer.linkifySourceLocationDetails(reportEl);
                });
                return reportEl;
            }
        },
        {
            key: "waitForMainTargetLoad",
            value: function waitForMainTargetLoad() {
                return _async_to_generator(function() {
                    var mainTarget, resourceTreeModel;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
                                if (!resourceTreeModel) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "linkifyNodeDetails",
            value: function linkifyNodeDetails(el) {
                return _async_to_generator(function() {
                    var mainTarget, domModel, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, origElement, origHTMLElement, detailsItem, nodeId, node, element, screenshotElement, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                domModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
                                if (!domModel) {
                                    return [
                                        2
                                    ];
                                }
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = el.getElementsByClassName('lh-node')[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                origElement = _step.value;
                                origHTMLElement = origElement;
                                detailsItem = origHTMLElement.dataset;
                                if (!detailsItem.path) {
                                    return [
                                        3,
                                        5
                                    ];
                                }
                                return [
                                    4,
                                    domModel.pushNodeByPathToFrontend(detailsItem.path)
                                ];
                            case 3:
                                nodeId = _state.sent();
                                if (!nodeId) {
                                    return [
                                        3,
                                        5
                                    ];
                                }
                                node = domModel.nodeForId(nodeId);
                                if (!node) {
                                    return [
                                        3,
                                        5
                                    ];
                                }
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, {
                                        tooltip: detailsItem.snippet,
                                        preventKeyboardFocus: undefined
                                    })
                                ];
                            case 4:
                                element = _state.sent();
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
                                screenshotElement = origHTMLElement.querySelector('.lh-element-screenshot');
                                origHTMLElement.textContent = '';
                                if (screenshotElement) {
                                    origHTMLElement.append(screenshotElement);
                                }
                                origHTMLElement.appendChild(element);
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "linkifySourceLocationDetails",
            value: function linkifySourceLocationDetails(el) {
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, origElement, origHTMLElement, detailsItem, url, line, column, element, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = el.getElementsByClassName('lh-source-location')[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                origElement = _step.value;
                                origHTMLElement = origElement;
                                detailsItem = origHTMLElement.dataset;
                                if (!detailsItem.sourceUrl || !detailsItem.sourceLine || !detailsItem.sourceColumn) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                url = detailsItem.sourceUrl;
                                line = Number(detailsItem.sourceLine);
                                column = Number(detailsItem.sourceColumn);
                                return [
                                    4,
                                    _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier.linkifyURL(url, {
                                        lineNumber: line,
                                        columnNumber: column,
                                        showColumnNumber: false,
                                        inlineFrameIndex: 0,
                                        maxLength: MaxLengthForLinks
                                    })
                                ];
                            case 3:
                                element = _state.sent();
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
                                origHTMLElement.textContent = '';
                                origHTMLElement.appendChild(element);
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return LighthouseReportRenderer;
} //# sourceMappingURL=LighthouseReportRenderer.js.map
();


}),
"./third_party/lighthouse/report/report.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOM: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.DOM; },
  ReportRenderer: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportRenderer; },
  ReportUIFeatures: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportUIFeatures; },
  format: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.format; },
  renderReport: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.renderReport; },
  swapLocale: function() { return /* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.swapLocale; }
});
/* harmony import */var _bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle.js */ "./third_party/lighthouse/report/bundle.js");
 //# sourceMappingURL=report.js.map


}),

}]);