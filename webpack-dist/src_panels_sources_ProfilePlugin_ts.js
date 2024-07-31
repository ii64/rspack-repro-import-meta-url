"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_ProfilePlugin_ts"],{

/***/ "./src/panels/sources/Plugin.ts":
/*!**************************************!*\
  !*** ./src/panels/sources/Plugin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Plugin {
    constructor(uiSourceCode, _transformer) {
        Object.defineProperty(this, "uiSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uiSourceCode
        });
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


/***/ }),

/***/ "./src/panels/sources/ProfilePlugin.ts":
/*!*********************************************!*\
  !*** ./src/panels/sources/ProfilePlugin.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryProfilePlugin: () => (/* binding */ MemoryProfilePlugin),
/* harmony export */   PerformanceProfilePlugin: () => (/* binding */ PerformanceProfilePlugin)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





// Defines plugins that show profiling information in the editor
// gutter when available.
const UIStrings = {
    /**
     *@description The milisecond unit
     */
    ms: 'ms',
    /**
     *@description Unit for data size in DevTools
     */
    mb: 'MB',
    /**
     *@description A unit
     */
    kb: 'kB',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ProfilePlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class MemoryMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker {
    constructor(value) {
        super();
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    eq(other) {
        return this.value === other.value;
    }
    toDOM() {
        const element = document.createElement('div');
        element.className = 'cm-profileMarker';
        let value = this.value;
        const intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 2e-3 * value) / 5, 0.02, 1);
        element.style.backgroundColor = `hsla(217, 100%, 70%, ${intensity.toFixed(3)})`;
        value /= 1e3;
        let units;
        let fractionDigits;
        if (value >= 1e3) {
            units = i18nString(UIStrings.mb);
            value /= 1e3;
            fractionDigits = value >= 20 ? 0 : 1;
        }
        else {
            units = i18nString(UIStrings.kb);
            fractionDigits = 0;
        }
        element.textContent = value.toFixed(fractionDigits);
        const unitElement = element.appendChild(document.createElement('span'));
        unitElement.className = 'cm-units';
        unitElement.textContent = units;
        return element;
    }
}
class PerformanceMarker extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.GutterMarker {
    constructor(value) {
        super();
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
        });
    }
    eq(other) {
        return this.value === other.value;
    }
    toDOM() {
        const element = document.createElement('div');
        element.className = 'cm-profileMarker';
        const intensity = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.NumberUtilities.clamp(Math.log10(1 + 10 * this.value) / 5, 0.02, 1);
        element.textContent = this.value.toFixed(1);
        element.style.backgroundColor = `hsla(44, 100%, 50%, ${intensity.toFixed(3)})`;
        const span = document.createElement('span');
        span.className = 'cm-units';
        span.textContent = i18nString(UIStrings.ms);
        element.appendChild(span);
        return element;
    }
}
function markersFromProfileData(map, state, type) {
    const markerType = type === _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.PERFORMANCE ? PerformanceMarker : MemoryMarker;
    const markers = [];
    for (const [line, value] of map) {
        if (line <= state.doc.lines) {
            const { from } = state.doc.line(line);
            markers.push(new markerType(value).range(from));
        }
    }
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.of(markers, true);
}
const makeLineLevelProfilePlugin = (type) => class extends _Plugin_js__WEBPACK_IMPORTED_MODULE_4__.Plugin {
    constructor(uiSourceCode) {
        super(uiSourceCode);
        Object.defineProperty(this, "updateEffect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateEffect.define()
        });
        Object.defineProperty(this, "field", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gutter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "compartment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.Compartment()
        });
        this.field = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.StateField.define({
            create() {
                return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.RangeSet.empty;
            },
            update: (markers, tr) => {
                return tr.effects.reduce((markers, effect) => {
                    return effect.is(this.updateEffect) ? markersFromProfileData(effect.value, tr.state, type) : markers;
                }, markers.map(tr.changes));
            },
        });
        this.gutter = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.gutter({
            markers: view => view.state.field(this.field),
            class: `cm-${type}Gutter`,
        });
    }
    static accepts(uiSourceCode) {
        return uiSourceCode.contentType().hasScripts();
    }
    getLineMap() {
        return this.uiSourceCode.getDecorationData(type);
    }
    editorExtension() {
        const map = this.getLineMap();
        return this.compartment.of(!map ? [] : [this.field.init(state => markersFromProfileData(map, state, type)), this.gutter, theme]);
    }
    decorationChanged(type, editor) {
        const installed = Boolean(editor.state.field(this.field, false));
        const map = this.getLineMap();
        if (!map) {
            if (installed) {
                editor.dispatch({ effects: this.compartment.reconfigure([]) });
            }
        }
        else if (!installed) {
            editor.dispatch({
                effects: this.compartment.reconfigure([this.field.init(state => markersFromProfileData(map, state, type)), this.gutter, theme]),
            });
        }
        else {
            editor.dispatch({ effects: this.updateEffect.of(map) });
        }
    }
};
const theme = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_2__.EditorView.baseTheme({
    '.cm-performanceGutter': {
        width: '60px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px',
    },
    '.cm-memoryGutter': {
        width: '48px',
        backgroundColor: 'var(--sys-color-cdt-base-container)',
        marginLeft: '3px',
    },
    '.cm-profileMarker': {
        textAlign: 'right',
        paddingRight: '3px',
    },
    '.cm-profileMarker .cm-units': {
        color: 'var(--sys-color-token-subtle)',
        fontSize: '75%',
        marginLeft: '3px',
    },
});
const MemoryProfilePlugin = makeLineLevelProfilePlugin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.MEMORY);
const PerformanceProfilePlugin = makeLineLevelProfilePlugin(_ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.SourceFrame.DecoratorType.PERFORMANCE);


/***/ })

}]);