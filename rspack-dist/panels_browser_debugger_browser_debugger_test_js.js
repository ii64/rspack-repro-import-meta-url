"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_browser_debugger_browser_debugger_test_js"], {
"./panels/browser_debugger/browser_debugger.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
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

(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('BrowserDebugger', function() {
    it('module can be imported', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(/*! import() */ [__webpack_require__.e("ui_components_panel_introduction_steps_PanelIntroductionSteps_js"), __webpack_require__.e("ui_components_srgb_overlay_SrgbOverlay_js"), __webpack_require__.e("ui_legacy_components_color_picker_ContrastDetails_js"), __webpack_require__.e("ui_legacy_components_color_picker_FormatPickerContextMenu_js"), __webpack_require__.e("ui_legacy_components_color_picker_ContrastOverlay_js"), __webpack_require__.e("ui_legacy_components_color_picker_spectrum_css_js"), __webpack_require__.e("ui_legacy_components_color_picker_ColorFormatSpec_js"), __webpack_require__.e("ui_legacy_components_color_picker_Spectrum_js"), __webpack_require__.e("ui_legacy_components_color_picker_color_picker_js"), __webpack_require__.e("panels_css_overview_components_CSSOverviewStartView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewSidebarPanel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewCompletedView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewModel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewProcessingView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewPanel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSLinearEasingModel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_AnimationTimingUI_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUnitConverter_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngleEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUtils_js"), __webpack_require__.e("ui_legacy_components_inline_editor_ColorSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngle_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSShadowEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_BezierEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_LinkSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSLength_js"), __webpack_require__.e("ui_legacy_components_inline_editor_Swatches_js"), __webpack_require__.e("ui_legacy_components_inline_editor_ColorMixSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_SwatchPopoverHelper_js"), __webpack_require__.e("ui_components_diff_view_DiffView_js"), __webpack_require__.e("panels_utils_utils_js"), __webpack_require__.e("panels_search_SearchResultsPane_js"), __webpack_require__.e("panels_search_SearchView_js"), __webpack_require__.e("panels_coverage_CoverageModel_js"), __webpack_require__.e("panels_coverage_CoverageListView_js"), __webpack_require__.e("panels_coverage_CoverageDecorationManager_js"), __webpack_require__.e("panels_coverage_CoverageView_js"), __webpack_require__.e("panels_sources_components_BreakpointsViewUtils_js"), __webpack_require__.e("panels_sources_components_BreakpointsView_js"), __webpack_require__.e("panels_sources_components_HeadersView_js"), __webpack_require__.e("panels_sources_SourcesSearchScope_js"), __webpack_require__.e("panels_sources_SearchSourcesView_js"), __webpack_require__.e("panels_sources_NavigatorView_js"), __webpack_require__.e("panels_sources_CategorizedBreakpointL10n_js"), __webpack_require__.e("panels_sources_CallStackSidebarPane_js"), __webpack_require__.e("panels_sources_CSSPlugin_js"), __webpack_require__.e("panels_sources_DebuggerPausedMessage_js"), __webpack_require__.e("panels_sources_BreakpointEditDialog_js"), __webpack_require__.e("panels_sources_CoveragePlugin_js"), __webpack_require__.e("panels_sources_ProfilePlugin_js"), __webpack_require__.e("panels_sources_ThreadsSidebarPane_js"), __webpack_require__.e("panels_sources_ResourceOriginPlugin_js"), __webpack_require__.e("panels_sources_SourcesPanel_js"), __webpack_require__.e("panels_sources_FilteredUISourceCodeListProvider_js"), __webpack_require__.e("panels_sources_WatchExpressionsSidebarPane_js"), __webpack_require__.e("panels_sources_SourcesNavigator_js"), __webpack_require__.e("panels_sources_OutlineQuickOpen_js"), __webpack_require__.e("panels_sources_ScopeChainSidebarPane_js"), __webpack_require__.e("panels_sources_InplaceFormatterEditorAction_js"), __webpack_require__.e("panels_sources_GoToLineQuickOpen_js"), __webpack_require__.e("panels_sources_sources_js"), __webpack_require__.e("panels_event_listeners_EventListenersUtils_js"), __webpack_require__.e("panels_event_listeners_EventListenersView_js"), __webpack_require__.e("panels_browser_debugger_CategorizedBreakpointsSidebarPane_js"), __webpack_require__.e("panels_browser_debugger_XHRBreakpointsSidebarPane_js"), __webpack_require__.e("panels_browser_debugger_DOMBreakpointsSidebarPane_js"), __webpack_require__.e("panels_browser_debugger_ObjectEventListenersSidebarPane_js"), __webpack_require__.e("panels_browser_debugger_browser_debugger_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./browser_debugger.js */ "./panels/browser_debugger/browser_debugger.js"))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=browser_debugger.test.js.map


}),

}]);