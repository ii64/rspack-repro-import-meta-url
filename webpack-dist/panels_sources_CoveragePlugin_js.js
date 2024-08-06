"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_CoveragePlugin_js"],{

/***/ "./panels/coverage/coverage.js":
/*!*************************************!*\
  !*** ./panels/coverage/coverage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoverageListView: () => (/* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CoverageModel: () => (/* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CoverageView: () => (/* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./panels/coverage/CoverageModel.js");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./panels/coverage/CoverageListView.js");
/* harmony import */ var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./panels/coverage/CoverageView.js");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./panels/coverage/CoverageDecorationManager.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









//# sourceMappingURL=coverage.js.map

/***/ }),

/***/ "./panels/sources/CoveragePlugin.js":
/*!******************************************!*\
  !*** ./panels/sources/CoveragePlugin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoveragePlugin: () => (/* binding */ CoveragePlugin)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coverage/coverage.js */ "./panels/coverage/coverage.js");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Plugin.js */ "./panels/sources/Plugin.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








// Plugin that shows a gutter with coverage information when available.
const UIStrings = {
    /**
     *@description Text for Coverage Status Bar Item in Sources Panel
     */
    clickToShowCoveragePanel: 'Click to show Coverage Panel',
    /**
     *@description Text for Coverage Status Bar Item in Sources Panel
     */
    showDetails: 'Show Details',
    /**
     *@description Text to show in the status bar if coverage data is available
     *@example {12.3} PH1
     */
    coverageS: 'Coverage: {PH1}',
    /**
     *@description Text to be shown in the status bar if no coverage data is available
     */
    coverageNa: 'Coverage: n/a',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/CoveragePlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CoveragePlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_7__.Plugin {
    originalSourceCode;
    infoInToolbar;
    model;
    coverage;
    #transformer;
    constructor(uiSourceCode, transformer) {
        super(uiSourceCode);
        this.originalSourceCode = this.uiSourceCode;
        this.#transformer = transformer;
        this.infoInToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clickToShowCoveragePanel), undefined, undefined, 'debugger.show-coverage');
        this.infoInToolbar.setSecondary();
        this.infoInToolbar.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().showView('coverage');
        });
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (mainTarget) {
            this.model = mainTarget.model(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.CoverageModel);
            if (this.model) {
                this.model.addEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.Events.CoverageReset, this.handleReset, this);
                this.coverage = this.model.getCoverageForUrl(this.originalSourceCode.url());
                if (this.coverage) {
                    this.coverage.addEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.URLCoverageInfo.Events.SizesChanged, this.handleCoverageSizesChanged, this);
                }
            }
        }
        this.updateStats();
    }
    dispose() {
        if (this.coverage) {
            this.coverage.removeEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.URLCoverageInfo.Events.SizesChanged, this.handleCoverageSizesChanged, this);
        }
        if (this.model) {
            this.model.removeEventListener(_coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__.CoverageModel.Events.CoverageReset, this.handleReset, this);
        }
    }
    static accepts(uiSourceCode) {
        return uiSourceCode.contentType().isDocumentOrScriptOrStyleSheet();
    }
    handleReset() {
        this.coverage = null;
        this.updateStats();
    }
    handleCoverageSizesChanged() {
        this.updateStats();
    }
    updateStats() {
        if (this.coverage) {
            this.infoInToolbar.setTitle(i18nString(UIStrings.showDetails));
            const formatter = new Intl.NumberFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale, {
                style: 'percent',
                maximumFractionDigits: 1,
            });
            this.infoInToolbar.setText(i18nString(UIStrings.coverageS, { PH1: formatter.format(this.coverage.usedPercentage()) }));
        }
        else {
            this.infoInToolbar.setTitle(i18nString(UIStrings.clickToShowCoveragePanel));
            this.infoInToolbar.setText(i18nString(UIStrings.coverageNa));
        }
    }
    rightToolbarItems() {
        return [this.infoInToolbar];
    }
    editorExtension() {
        return coverageCompartment.of([]);
    }
    getCoverageManager() {
        return this.uiSourceCode.getDecorationData("coverage" /* SourceFrame.SourceFrame.DecoratorType.COVERAGE */);
    }
    editorInitialized(editor) {
        if (this.getCoverageManager()) {
            this.startDecoUpdate(editor);
        }
    }
    decorationChanged(type, editor) {
        if (type === "coverage" /* SourceFrame.SourceFrame.DecoratorType.COVERAGE */) {
            this.startDecoUpdate(editor);
        }
    }
    startDecoUpdate(editor) {
        const manager = this.getCoverageManager();
        void (manager ? manager.usageByLine(this.uiSourceCode, this.#editorLines(editor)) : Promise.resolve([])).then(usageByLine => {
            const enabled = Boolean(editor.state.field(coverageState, false));
            if (!usageByLine.length) {
                if (enabled) {
                    editor.dispatch({ effects: coverageCompartment.reconfigure([]) });
                }
            }
            else if (!enabled) {
                editor.dispatch({
                    effects: coverageCompartment.reconfigure([
                        coverageState.init(state => markersFromCoverageData(usageByLine, state)),
                        coverageGutter(this.uiSourceCode.url()),
                        theme,
                    ]),
                });
            }
            else {
                editor.dispatch({ effects: setCoverageState.of(usageByLine) });
            }
        });
    }
    /**
     * @returns The current lines of the CodeMirror editor expressed in terms of UISourceCode.
     */
    #editorLines(editor) {
        const result = [];
        for (let n = 1; n <= editor.state.doc.lines; ++n) {
            const line = editor.state.doc.line(n);
            // CodeMirror lines are 1-based where-as the transformer expects 0-based.
            const { lineNumber: startLine, columnNumber: startColumn } = this.#transformer.editorLocationToUILocation(n - 1, 0);
            const { lineNumber: endLine, columnNumber: endColumn } = this.#transformer.editorLocationToUILocation(n - 1, line.length);
            result.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(startLine, startColumn, endLine, endColumn));
        }
        return result;
    }
}
const coveredMarker = new (class extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker {
    elementClass = 'cm-coverageUsed';
})();
const notCoveredMarker = new (class extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker {
    elementClass = 'cm-coverageUnused';
})();
function markersFromCoverageData(usageByLine, state) {
    const builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.RangeSetBuilder();
    for (let line = 0; line < usageByLine.length; line++) {
        const usage = usageByLine[line];
        if (usage !== undefined && line < state.doc.lines) {
            const lineStart = state.doc.line(line + 1).from;
            builder.add(lineStart, lineStart, usage ? coveredMarker : notCoveredMarker);
        }
    }
    return builder.finish();
}
const setCoverageState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.StateEffect.define();
const coverageState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.StateField.define({
    create() {
        return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.RangeSet.empty;
    },
    update(markers, tr) {
        return tr.effects.reduce((markers, effect) => {
            return effect.is(setCoverageState) ? markersFromCoverageData(effect.value, tr.state) : markers;
        }, markers.map(tr.changes));
    },
});
function coverageGutter(url) {
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.gutter({
        markers: view => view.state.field(coverageState),
        domEventHandlers: {
            click() {
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance()
                    .showView('coverage')
                    .then(() => {
                    const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance().view('coverage');
                    return view && view.widget();
                })
                    .then(widget => {
                    const matchFormattedSuffix = url.match(/(.*):formatted$/);
                    const urlWithoutFormattedSuffix = (matchFormattedSuffix && matchFormattedSuffix[1]) || url;
                    widget.selectCoverageItemByUrl(urlWithoutFormattedSuffix);
                });
                return true;
            },
        },
        class: 'cm-coverageGutter',
    });
}
const coverageCompartment = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.Compartment();
const theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.EditorView.baseTheme({
    '.cm-coverageGutter': {
        width: '5px',
        marginLeft: '3px',
    },
    '.cm-coverageUnused': {
        backgroundColor: 'var(--app-color-coverage-unused)',
    },
    '.cm-coverageUsed': {
        backgroundColor: 'var(--app-color-coverage-used)',
    },
});
//# sourceMappingURL=CoveragePlugin.js.map

/***/ }),

/***/ "./panels/sources/Plugin.js":
/*!**********************************!*\
  !*** ./panels/sources/Plugin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Plugin {
    uiSourceCode;
    constructor(uiSourceCode, _transformer) {
        this.uiSourceCode = uiSourceCode;
    }
    static accepts(_uiSourceCode) {
        return false;
    }
    willHide() {
    }
    rightToolbarItems() {
        return [];
    }
    /**
     *
     * TODO(szuend): It is OK to asyncify this function (similar to {rightToolbarItems}),
     *               but it is currently not strictly necessary.
     */
    leftToolbarItems() {
        return [];
    }
    populateLineGutterContextMenu(_contextMenu, _lineNumber) {
    }
    populateTextAreaContextMenu(_contextMenu, _lineNumber, _columnNumber) {
    }
    decorationChanged(_type, _editor) {
    }
    editorExtension() {
        return [];
    }
    editorInitialized(_editor) {
    }
    dispose() {
    }
}
//# sourceMappingURL=Plugin.js.map

/***/ })

}]);