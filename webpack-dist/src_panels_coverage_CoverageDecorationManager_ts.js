"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_coverage_CoverageDecorationManager_ts"],{

/***/ "./src/panels/coverage/CoverageDecorationManager.ts":
/*!**********************************************************!*\
  !*** ./src/panels/coverage/CoverageDecorationManager.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoverageDecorationManager: () => (/* binding */ CoverageDecorationManager),
/* harmony export */   decoratorType: () => (/* binding */ decoratorType)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
var _CoverageDecorationManager_workspace, _CoverageDecorationManager_debuggerBinding, _CoverageDecorationManager_cssBinding;



const decoratorType = 'coverage';
class CoverageDecorationManager {
    constructor(coverageModel, workspace, debuggerBinding, cssBinding) {
        Object.defineProperty(this, "coverageModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "textByProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "uiSourceCodeByContentProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _CoverageDecorationManager_workspace.set(this, void 0);
        _CoverageDecorationManager_debuggerBinding.set(this, void 0);
        _CoverageDecorationManager_cssBinding.set(this, void 0);
        this.coverageModel = coverageModel;
        __classPrivateFieldSet(this, _CoverageDecorationManager_workspace, workspace, "f");
        __classPrivateFieldSet(this, _CoverageDecorationManager_debuggerBinding, debuggerBinding, "f");
        __classPrivateFieldSet(this, _CoverageDecorationManager_cssBinding, cssBinding, "f");
        this.textByProvider = new Map();
        this.uiSourceCodeByContentProvider = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.Multimap();
        for (const uiSourceCode of __classPrivateFieldGet(this, _CoverageDecorationManager_workspace, "f").uiSourceCodes()) {
            uiSourceCode.setDecorationData(decoratorType, this);
        }
        __classPrivateFieldGet(this, _CoverageDecorationManager_workspace, "f").addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
    }
    reset() {
        for (const uiSourceCode of __classPrivateFieldGet(this, _CoverageDecorationManager_workspace, "f").uiSourceCodes()) {
            uiSourceCode.setDecorationData(decoratorType, undefined);
        }
    }
    dispose() {
        this.reset();
        __classPrivateFieldGet(this, _CoverageDecorationManager_workspace, "f").removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
    }
    update(updatedEntries) {
        for (const entry of updatedEntries) {
            for (const uiSourceCode of this.uiSourceCodeByContentProvider.get(entry.getContentProvider())) {
                uiSourceCode.setDecorationData(decoratorType, this);
            }
        }
    }
    /**
     * Returns the coverage per line of the provided uiSourceCode. The resulting array has the same length
     * as the provided `lines` array.
     *
     * @param uiSourceCode The UISourceCode for which to get the coverage info.
     * @param lineMappings The caller might have applied formatting to the UISourceCode. Each entry
     *                     in this array represents one line and the range specifies where it's found in
     *                     the original content.
     */
    async usageByLine(uiSourceCode, lineMappings) {
        const result = [];
        await this.updateTexts(uiSourceCode, lineMappings);
        for (const { startLine, startColumn, endLine, endColumn } of lineMappings) {
            const startLocationsPromise = this.rawLocationsForSourceLocation(uiSourceCode, startLine, startColumn);
            const endLocationsPromise = this.rawLocationsForSourceLocation(uiSourceCode, endLine, endColumn);
            const [startLocations, endLocations] = await Promise.all([startLocationsPromise, endLocationsPromise]);
            let used = undefined;
            for (let startIndex = 0, endIndex = 0; startIndex < startLocations.length; ++startIndex) {
                const start = startLocations[startIndex];
                while (endIndex < endLocations.length &&
                    CoverageDecorationManager.compareLocations(start, endLocations[endIndex]) >= 0) {
                    ++endIndex;
                }
                if (endIndex >= endLocations.length || endLocations[endIndex].id !== start.id) {
                    continue;
                }
                const end = endLocations[endIndex++];
                const text = this.textByProvider.get(end.contentProvider);
                if (!text) {
                    continue;
                }
                const textValue = text.value();
                let startOffset = Math.min(text.offsetFromPosition(start.line, start.column), textValue.length - 1);
                let endOffset = Math.min(text.offsetFromPosition(end.line, end.column), textValue.length - 1);
                while (startOffset <= endOffset && /\s/.test(textValue[startOffset])) {
                    ++startOffset;
                }
                while (startOffset <= endOffset && /\s/.test(textValue[endOffset])) {
                    --endOffset;
                }
                if (startOffset <= endOffset) {
                    used = this.coverageModel.usageForRange(end.contentProvider, startOffset, endOffset);
                }
                if (used) {
                    break;
                }
            }
            result.push(used);
        }
        return result;
    }
    async updateTexts(uiSourceCode, lineMappings) {
        const promises = [];
        for (const range of lineMappings) {
            for (const entry of await this.rawLocationsForSourceLocation(uiSourceCode, range.startLine, 0)) {
                if (this.textByProvider.has(entry.contentProvider)) {
                    continue;
                }
                this.textByProvider.set(entry.contentProvider, null);
                this.uiSourceCodeByContentProvider.set(entry.contentProvider, uiSourceCode);
                promises.push(this.updateTextForProvider(entry.contentProvider));
            }
        }
        await Promise.all(promises);
    }
    async updateTextForProvider(contentProvider) {
        const content = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData.textOr(await contentProvider.requestContentData(), '');
        this.textByProvider.set(contentProvider, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.Text.Text(content));
    }
    async rawLocationsForSourceLocation(uiSourceCode, line, column) {
        const result = [];
        const contentType = uiSourceCode.contentType();
        if (contentType.hasScripts()) {
            let locations = await __classPrivateFieldGet(this, _CoverageDecorationManager_debuggerBinding, "f").uiLocationToRawLocations(uiSourceCode, line, column);
            locations = locations.filter(location => Boolean(location.script()));
            for (const location of locations) {
                const script = location.script();
                if (!script) {
                    continue;
                }
                if (script.isInlineScript() && contentType.isDocument()) {
                    location.lineNumber -= script.lineOffset;
                    if (!location.lineNumber) {
                        location.columnNumber -= script.columnOffset;
                    }
                }
                result.push({
                    id: `js:${location.scriptId}`,
                    contentProvider: script,
                    line: location.lineNumber,
                    column: location.columnNumber,
                });
            }
        }
        if (contentType.isStyleSheet() || contentType.isDocument()) {
            const rawStyleLocations = __classPrivateFieldGet(this, _CoverageDecorationManager_cssBinding, "f").uiLocationToRawLocations(new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, line, column));
            for (const location of rawStyleLocations) {
                const header = location.header();
                if (!header) {
                    continue;
                }
                if (header.isInline && contentType.isDocument()) {
                    location.lineNumber -= header.startLine;
                    if (!location.lineNumber) {
                        location.columnNumber -= header.startColumn;
                    }
                }
                result.push({
                    id: `css:${location.styleSheetId}`,
                    contentProvider: header,
                    line: location.lineNumber,
                    column: location.columnNumber,
                });
            }
        }
        return result.sort(CoverageDecorationManager.compareLocations);
    }
    static compareLocations(a, b) {
        return a.id.localeCompare(b.id) || a.line - b.line || a.column - b.column;
    }
    onUISourceCodeAdded(event) {
        const uiSourceCode = event.data;
        uiSourceCode.setDecorationData(decoratorType, this);
    }
}
_CoverageDecorationManager_workspace = new WeakMap(), _CoverageDecorationManager_debuggerBinding = new WeakMap(), _CoverageDecorationManager_cssBinding = new WeakMap();


/***/ })

}]);