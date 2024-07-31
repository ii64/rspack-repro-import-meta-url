"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_workspace_diff_WorkspaceDiff_ts"],{

/***/ "./src/models/workspace_diff/WorkspaceDiff.ts":
/*!****************************************************!*\
  !*** ./src/models/workspace_diff/WorkspaceDiff.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   UISourceCodeDiff: () => (/* binding */ UISourceCodeDiff),
/* harmony export */   UISourceCodeDiffEvents: () => (/* binding */ UISourceCodeDiffEvents),
/* harmony export */   UpdateTimeout: () => (/* binding */ UpdateTimeout),
/* harmony export */   WorkspaceDiffImpl: () => (/* binding */ WorkspaceDiffImpl),
/* harmony export */   workspaceDiff: () => (/* binding */ workspaceDiff)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./src/third_party/diff/diff.ts");
/* harmony import */ var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







class WorkspaceDiffImpl extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(workspace) {
        super();
        Object.defineProperty(this, "uiSourceCodeDiffs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "loadingUISourceCodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "modifiedUISourceCodesInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.uiSourceCodeDiffs = new WeakMap();
        this.loadingUISourceCodes = new Map();
        this.modifiedUISourceCodesInternal = new Set();
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.WorkingCopyChanged, this.uiSourceCodeChanged, this);
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.WorkingCopyCommitted, this.uiSourceCodeChanged, this);
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAdded, this);
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemoved, this);
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.ProjectRemoved, this.projectRemoved, this);
        workspace.uiSourceCodes().forEach(this.updateModifiedState.bind(this));
    }
    requestDiff(uiSourceCode, diffRequestOptions) {
        return this.uiSourceCodeDiff(uiSourceCode).requestDiff(diffRequestOptions);
    }
    subscribeToDiffChange(uiSourceCode, callback, thisObj) {
        this.uiSourceCodeDiff(uiSourceCode).addEventListener(UISourceCodeDiffEvents.DiffChanged, callback, thisObj);
    }
    unsubscribeFromDiffChange(uiSourceCode, callback, thisObj) {
        this.uiSourceCodeDiff(uiSourceCode).removeEventListener(UISourceCodeDiffEvents.DiffChanged, callback, thisObj);
    }
    modifiedUISourceCodes() {
        return Array.from(this.modifiedUISourceCodesInternal);
    }
    isUISourceCodeModified(uiSourceCode) {
        return this.modifiedUISourceCodesInternal.has(uiSourceCode) || this.loadingUISourceCodes.has(uiSourceCode);
    }
    uiSourceCodeDiff(uiSourceCode) {
        let diff = this.uiSourceCodeDiffs.get(uiSourceCode);
        if (!diff) {
            diff = new UISourceCodeDiff(uiSourceCode);
            this.uiSourceCodeDiffs.set(uiSourceCode, diff);
        }
        return diff;
    }
    uiSourceCodeChanged(event) {
        const uiSourceCode = event.data.uiSourceCode;
        void this.updateModifiedState(uiSourceCode);
    }
    uiSourceCodeAdded(event) {
        const uiSourceCode = event.data;
        void this.updateModifiedState(uiSourceCode);
    }
    uiSourceCodeRemoved(event) {
        const uiSourceCode = event.data;
        this.removeUISourceCode(uiSourceCode);
    }
    projectRemoved(event) {
        const project = event.data;
        for (const uiSourceCode of project.uiSourceCodes()) {
            this.removeUISourceCode(uiSourceCode);
        }
    }
    removeUISourceCode(uiSourceCode) {
        this.loadingUISourceCodes.delete(uiSourceCode);
        const uiSourceCodeDiff = this.uiSourceCodeDiffs.get(uiSourceCode);
        if (uiSourceCodeDiff) {
            uiSourceCodeDiff.dispose = true;
        }
        this.markAsUnmodified(uiSourceCode);
    }
    markAsUnmodified(uiSourceCode) {
        this.uiSourceCodeProcessedForTest();
        if (this.modifiedUISourceCodesInternal.delete(uiSourceCode)) {
            this.dispatchEventToListeners(Events.ModifiedStatusChanged, { uiSourceCode, isModified: false });
        }
    }
    markAsModified(uiSourceCode) {
        this.uiSourceCodeProcessedForTest();
        if (this.modifiedUISourceCodesInternal.has(uiSourceCode)) {
            return;
        }
        this.modifiedUISourceCodesInternal.add(uiSourceCode);
        this.dispatchEventToListeners(Events.ModifiedStatusChanged, { uiSourceCode, isModified: true });
    }
    uiSourceCodeProcessedForTest() {
    }
    async updateModifiedState(uiSourceCode) {
        this.loadingUISourceCodes.delete(uiSourceCode);
        if (uiSourceCode.project().type() !== _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network) {
            this.markAsUnmodified(uiSourceCode);
            return;
        }
        if (uiSourceCode.isDirty()) {
            this.markAsModified(uiSourceCode);
            return;
        }
        if (!uiSourceCode.hasCommits()) {
            this.markAsUnmodified(uiSourceCode);
            return;
        }
        const contentsPromise = Promise.all([
            this.requestOriginalContentForUISourceCode(uiSourceCode),
            uiSourceCode.requestContent().then(deferredContent => deferredContent.content),
        ]);
        this.loadingUISourceCodes.set(uiSourceCode, contentsPromise);
        const contents = await contentsPromise;
        if (this.loadingUISourceCodes.get(uiSourceCode) !== contentsPromise) {
            return;
        }
        this.loadingUISourceCodes.delete(uiSourceCode);
        if (contents[0] !== null && contents[1] !== null && contents[0] !== contents[1]) {
            this.markAsModified(uiSourceCode);
        }
        else {
            this.markAsUnmodified(uiSourceCode);
        }
    }
    requestOriginalContentForUISourceCode(uiSourceCode) {
        return this.uiSourceCodeDiff(uiSourceCode).originalContent();
    }
    revertToOriginal(uiSourceCode) {
        function callback(content) {
            if (typeof content !== 'string') {
                return;
            }
            uiSourceCode.addRevision(content);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.RevisionApplied);
        return this.requestOriginalContentForUISourceCode(uiSourceCode).then(callback);
    }
}
var Events;
(function (Events) {
    Events["ModifiedStatusChanged"] = "ModifiedStatusChanged";
})(Events || (Events = {}));
class UISourceCodeDiff extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor(uiSourceCode) {
        super();
        Object.defineProperty(this, "uiSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestDiffPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingChanges", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dispose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.uiSourceCode = uiSourceCode;
        uiSourceCode.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, this.uiSourceCodeChanged, this);
        uiSourceCode.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, this.uiSourceCodeChanged, this);
        this.requestDiffPromise = null;
        this.pendingChanges = null;
        this.dispose = false;
    }
    uiSourceCodeChanged() {
        if (this.pendingChanges) {
            clearTimeout(this.pendingChanges);
            this.pendingChanges = null;
        }
        this.requestDiffPromise = null;
        const content = this.uiSourceCode.content();
        const delay = (!content || content.length < 65536) ? 0 : UpdateTimeout;
        this.pendingChanges = window.setTimeout(emitDiffChanged.bind(this), delay);
        function emitDiffChanged() {
            if (this.dispose) {
                return;
            }
            this.dispatchEventToListeners(UISourceCodeDiffEvents.DiffChanged);
            this.pendingChanges = null;
        }
    }
    requestDiff(diffRequestOptions) {
        if (!this.requestDiffPromise) {
            this.requestDiffPromise = this.innerRequestDiff(diffRequestOptions);
        }
        return this.requestDiffPromise;
    }
    async originalContent() {
        const originalNetworkContent = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().originalContentForUISourceCode(this.uiSourceCode);
        if (originalNetworkContent) {
            return originalNetworkContent;
        }
        const content = await this.uiSourceCode.project().requestFileContent(this.uiSourceCode);
        if (_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.ContentData.ContentData.isError(content)) {
            return content.error;
        }
        return content.asDeferedContent().content;
    }
    async innerRequestDiff({ shouldFormatDiff }) {
        if (this.dispose) {
            return null;
        }
        let baseline = await this.originalContent();
        if (baseline === null) {
            return null;
        }
        if (baseline.length > 1024 * 1024) {
            return null;
        }
        // ------------ ASYNC ------------
        if (this.dispose) {
            return null;
        }
        let current = this.uiSourceCode.workingCopy();
        if (!current && !this.uiSourceCode.contentLoaded()) {
            current = (await this.uiSourceCode.requestContent()).content;
        }
        if (current.length > 1024 * 1024) {
            return null;
        }
        if (this.dispose) {
            return null;
        }
        if (current === null || baseline === null) {
            return null;
        }
        let formattedCurrentMapping;
        if (shouldFormatDiff) {
            baseline = (await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__.ScriptFormatter.format(this.uiSourceCode.contentType(), this.uiSourceCode.mimeType(), baseline))
                .formattedContent;
            const formatCurrentResult = await _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__.ScriptFormatter.format(this.uiSourceCode.contentType(), this.uiSourceCode.mimeType(), current);
            current = formatCurrentResult.formattedContent;
            formattedCurrentMapping = formatCurrentResult.formattedMapping;
        }
        const reNewline = /\r\n?|\n/;
        const diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_2__.Diff.DiffWrapper.lineDiff(baseline.split(reNewline), current.split(reNewline));
        return {
            diff,
            formattedCurrentMapping,
        };
    }
}
var UISourceCodeDiffEvents;
(function (UISourceCodeDiffEvents) {
    UISourceCodeDiffEvents["DiffChanged"] = "DiffChanged";
})(UISourceCodeDiffEvents || (UISourceCodeDiffEvents = {}));
let workspaceDiffImplInstance = null;
function workspaceDiff() {
    if (!workspaceDiffImplInstance) {
        workspaceDiffImplInstance = new WorkspaceDiffImpl(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance());
    }
    return workspaceDiffImplInstance;
}
const UpdateTimeout = 200;


/***/ })

}]);