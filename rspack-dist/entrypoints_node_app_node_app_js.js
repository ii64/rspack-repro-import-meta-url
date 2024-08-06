"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_node_app_node_app_js"], {
"./entrypoints/node_app/node_app.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./entrypoints/shell/shell.js");
/* harmony import */var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./panels/mobile_throttling/mobile_throttling-meta.js");
/* harmony import */var _panels_js_timeline_js_timeline_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/js_timeline/js_timeline-meta.js */ "./panels/js_timeline/js_timeline-meta.js");
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _main_main_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/main.js */ "./entrypoints/main/main.js");
/* harmony import */var _NodeConnectionsPanel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NodeConnectionsPanel.js */ "./entrypoints/node_app/NodeConnectionsPanel.js");
/* harmony import */var _NodeMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NodeMain.js */ "./entrypoints/node_app/NodeMain.js");
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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








 // eslint-disable-line rulesdir/es_modules_import
 // eslint-disable-line rulesdir/es_modules_import
var UIStrings = {
    /**
     *@description Text that refers to the network connection
     */ connection: 'Connection',
    /**
     *@description A tag of Node.js Connection Panel that can be searched in the command menu
     */ node: 'node',
    /**
     *@description Command for showing the Connection tool
     */ showConnection: 'Show Connection',
    /**
     *@description Title of the 'Node' tool in the Network Navigator View, which is part of the Sources tool
     */ networkTitle: 'Node',
    /**
     *@description Command for showing the 'Node' tool in the Network Navigator View, which is part of the Sources tool
     */ showNode: 'Show Node'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__.i18n.registerUIStrings('entrypoints/node_app/node_app.ts', UIStrings);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_4__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var loadedSourcesModule;
function loadSourcesModule() {
    return _loadSourcesModule.apply(this, arguments);
}
function _loadSourcesModule() {
    _loadSourcesModule = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!loadedSourcesModule) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.all(/*! import() */ [__webpack_require__.e("ui_components_panel_introduction_steps_PanelIntroductionSteps_js"), __webpack_require__.e("ui_components_srgb_overlay_SrgbOverlay_js"), __webpack_require__.e("ui_legacy_components_color_picker_ContrastDetails_js"), __webpack_require__.e("ui_legacy_components_color_picker_FormatPickerContextMenu_js"), __webpack_require__.e("ui_legacy_components_color_picker_ContrastOverlay_js"), __webpack_require__.e("ui_legacy_components_color_picker_spectrum_css_js"), __webpack_require__.e("ui_legacy_components_color_picker_ColorFormatSpec_js"), __webpack_require__.e("ui_legacy_components_color_picker_Spectrum_js"), __webpack_require__.e("ui_legacy_components_color_picker_color_picker_js"), __webpack_require__.e("panels_css_overview_components_CSSOverviewStartView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewSidebarPanel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewCompletedView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewModel_js"), __webpack_require__.e("panels_css_overview_CSSOverviewProcessingView_js"), __webpack_require__.e("panels_css_overview_CSSOverviewPanel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSLinearEasingModel_js"), __webpack_require__.e("ui_legacy_components_inline_editor_AnimationTimingUI_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUnitConverter_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngleEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditorUtils_js"), __webpack_require__.e("ui_legacy_components_inline_editor_ColorSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_FontEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSAngle_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSShadowEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_BezierEditor_js"), __webpack_require__.e("ui_legacy_components_inline_editor_LinkSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_CSSLength_js"), __webpack_require__.e("ui_legacy_components_inline_editor_Swatches_js"), __webpack_require__.e("ui_legacy_components_inline_editor_ColorMixSwatch_js"), __webpack_require__.e("ui_legacy_components_inline_editor_SwatchPopoverHelper_js"), __webpack_require__.e("ui_components_diff_view_DiffView_js"), __webpack_require__.e("panels_utils_utils_js"), __webpack_require__.e("panels_search_SearchResultsPane_js"), __webpack_require__.e("panels_search_SearchView_js"), __webpack_require__.e("panels_coverage_CoverageModel_js"), __webpack_require__.e("panels_coverage_CoverageListView_js"), __webpack_require__.e("panels_coverage_CoverageDecorationManager_js"), __webpack_require__.e("panels_coverage_CoverageView_js"), __webpack_require__.e("panels_sources_components_BreakpointsViewUtils_js"), __webpack_require__.e("panels_sources_components_BreakpointsView_js"), __webpack_require__.e("panels_sources_components_HeadersView_js"), __webpack_require__.e("panels_sources_SourcesSearchScope_js"), __webpack_require__.e("panels_sources_SearchSourcesView_js"), __webpack_require__.e("panels_sources_NavigatorView_js"), __webpack_require__.e("panels_sources_CategorizedBreakpointL10n_js"), __webpack_require__.e("panels_sources_CallStackSidebarPane_js"), __webpack_require__.e("panels_sources_CSSPlugin_js"), __webpack_require__.e("panels_sources_DebuggerPausedMessage_js"), __webpack_require__.e("panels_sources_BreakpointEditDialog_js"), __webpack_require__.e("panels_sources_CoveragePlugin_js"), __webpack_require__.e("panels_sources_ProfilePlugin_js"), __webpack_require__.e("panels_sources_ThreadsSidebarPane_js"), __webpack_require__.e("panels_sources_ResourceOriginPlugin_js"), __webpack_require__.e("panels_sources_SourcesPanel_js"), __webpack_require__.e("panels_sources_FilteredUISourceCodeListProvider_js"), __webpack_require__.e("panels_sources_WatchExpressionsSidebarPane_js"), __webpack_require__.e("panels_sources_SourcesNavigator_js"), __webpack_require__.e("panels_sources_OutlineQuickOpen_js"), __webpack_require__.e("panels_sources_ScopeChainSidebarPane_js"), __webpack_require__.e("panels_sources_InplaceFormatterEditorAction_js"), __webpack_require__.e("panels_sources_GoToLineQuickOpen_js"), __webpack_require__.e("panels_sources_sources_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../panels/sources/sources.js */ "./panels/sources/sources.js"))
                    ];
                case 1:
                    loadedSourcesModule = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        loadedSourcesModule
                    ];
            }
        });
    });
    return _loadSourcesModule.apply(this, arguments);
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.registerViewExtension({
    location: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */ ,
    id: 'node-connection',
    title: i18nLazyString(UIStrings.connection),
    commandPrompt: i18nLazyString(UIStrings.showConnection),
    order: 0,
    loadView: function loadView() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    new _NodeConnectionsPanel_js__WEBPACK_IMPORTED_MODULE_8__.NodeConnectionsPanel()
                ];
            });
        })();
    },
    tags: [
        i18nLazyString(UIStrings.node)
    ]
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ViewManager.registerViewExtension({
    location: "navigator-view" /* UI.ViewManager.ViewLocationValues.NAVIGATOR_VIEW */ ,
    id: 'navigator-network',
    title: i18nLazyString(UIStrings.networkTitle),
    commandPrompt: i18nLazyString(UIStrings.showNode),
    order: 2,
    persistence: "permanent" /* UI.ViewManager.ViewPersistence.PERMANENT */ ,
    loadView: function loadView() {
        return _async_to_generator(function() {
            var Sources;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            loadSourcesModule()
                        ];
                    case 1:
                        Sources = _state.sent();
                        return [
                            2,
                            Sources.SourcesNavigator.NetworkNavigatorView.instance()
                        ];
                }
            });
        })();
    }
});
// @ts-ignore Exposed for legacy layout tests
self.runtime = _core_root_root_js__WEBPACK_IMPORTED_MODULE_5__.Runtime.Runtime.instance({
    forceNew: true
});
_core_common_common_js__WEBPACK_IMPORTED_MODULE_3__.Runnable.registerEarlyInitializationRunnable(_NodeMain_js__WEBPACK_IMPORTED_MODULE_9__.NodeMainImpl.instance);
new _main_main_js__WEBPACK_IMPORTED_MODULE_7__.MainImpl.MainImpl(); //# sourceMappingURL=node_app.js.map


}),

}]);