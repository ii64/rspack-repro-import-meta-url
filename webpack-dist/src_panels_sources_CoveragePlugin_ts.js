"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_CoveragePlugin_ts"],{

/***/ "./src/panels/coverage/coverage.ts":
/*!*****************************************!*\
  !*** ./src/panels/coverage/coverage.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* reexport module object */ _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CoverageListView: () => (/* reexport module object */ _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   CoverageModel: () => (/* reexport module object */ _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CoverageView: () => (/* reexport module object */ _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _CoverageModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoverageModel.js */ "./src/panels/coverage/CoverageModel.ts");
/* harmony import */ var _CoverageListView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoverageListView.js */ "./src/panels/coverage/CoverageListView.ts");
/* harmony import */ var _CoverageView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CoverageView.js */ "./src/panels/coverage/CoverageView.ts");
/* harmony import */ var _CoverageDecorationManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CoverageDecorationManager.js */ "./src/panels/coverage/CoverageDecorationManager.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











/***/ }),

/***/ "./src/panels/sources/CoveragePlugin.ts":
/*!**********************************************!*\
  !*** ./src/panels/sources/CoveragePlugin.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoveragePlugin: () => (/* binding */ CoveragePlugin)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _coverage_coverage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coverage/coverage.js */ "./src/panels/coverage/coverage.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CoveragePlugin_instances, _CoveragePlugin_transformer, _CoveragePlugin_editorLines;








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
    constructor(uiSourceCode, transformer) {
        super(uiSourceCode);
        _CoveragePlugin_instances.add(this);
        Object.defineProperty(this, "originalSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infoInToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "coverage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _CoveragePlugin_transformer.set(this, void 0);
        this.originalSourceCode = this.uiSourceCode;
        __classPrivateFieldSet(this, _CoveragePlugin_transformer, transformer, "f");
        this.infoInToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clickToShowCoveragePanel), undefined, undefined, 'debugger.show-coverage');
        this.infoInToolbar.setSecondary();
        this.infoInToolbar.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton.Events.Click, () => {
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
        return this.uiSourceCode.getDecorationData(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.SourceFrame.DecoratorType.COVERAGE);
    }
    editorInitialized(editor) {
        if (this.getCoverageManager()) {
            this.startDecoUpdate(editor);
        }
    }
    decorationChanged(type, editor) {
        if (type === _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.SourceFrame.DecoratorType.COVERAGE) {
            this.startDecoUpdate(editor);
        }
    }
    startDecoUpdate(editor) {
        const manager = this.getCoverageManager();
        void (manager ? manager.usageByLine(this.uiSourceCode, __classPrivateFieldGet(this, _CoveragePlugin_instances, "m", _CoveragePlugin_editorLines).call(this, editor)) : Promise.resolve([])).then(usageByLine => {
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
}
_CoveragePlugin_transformer = new WeakMap(), _CoveragePlugin_instances = new WeakSet(), _CoveragePlugin_editorLines = function _CoveragePlugin_editorLines(editor) {
    const result = [];
    for (let n = 1; n <= editor.state.doc.lines; ++n) {
        const line = editor.state.doc.line(n);
        // CodeMirror lines are 1-based where-as the transformer expects 0-based.
        const { lineNumber: startLine, columnNumber: startColumn } = __classPrivateFieldGet(this, _CoveragePlugin_transformer, "f").editorLocationToUILocation(n - 1, 0);
        const { lineNumber: endLine, columnNumber: endColumn } = __classPrivateFieldGet(this, _CoveragePlugin_transformer, "f").editorLocationToUILocation(n - 1, line.length);
        result.push(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_2__.TextRange.TextRange(startLine, startColumn, endLine, endColumn));
    }
    return result;
};
const coveredMarker = new (class extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "elementClass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'cm-coverageUsed'
        });
    }
})();
const notCoveredMarker = new (class extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_3__.GutterMarker {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "elementClass", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'cm-coverageUnused'
        });
    }
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


/***/ })

}]);