"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_SDKUtils_js"],{

/***/ "./panels/recorder/models/SDKUtils.js":
/*!********************************************!*\
  !*** ./panels/recorder/models/SDKUtils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateInAllFrames: () => (/* binding */ evaluateInAllFrames),
/* harmony export */   findFrameIdByExecutionContext: () => (/* binding */ findFrameIdByExecutionContext),
/* harmony export */   findTargetByExecutionContext: () => (/* binding */ findTargetByExecutionContext),
/* harmony export */   getTargetFrameContext: () => (/* binding */ getTargetFrameContext),
/* harmony export */   getTargetName: () => (/* binding */ getTargetName),
/* harmony export */   isFrameTargetInfo: () => (/* binding */ isFrameTargetInfo)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getTargetName(target) {
    if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget() === target) {
        return 'main';
    }
    return target.id() === 'main' ? 'main' : target.inspectedURL();
}
/**
 * Returns the context for an SDK target and frame.
 * The frame is identified by the path in the resource tree model.
 * And the target is identified by `getTargetName`.
 */
function getTargetFrameContext(target, frame) {
    const path = [];
    while (frame) {
        const parentFrame = frame.sameTargetParentFrame();
        if (!parentFrame) {
            break;
        }
        const childFrames = parentFrame.childFrames;
        const index = childFrames.indexOf(frame);
        path.unshift(index);
        frame = parentFrame;
    }
    return { target: getTargetName(target), frame: path };
}
async function evaluateInAllFrames(worldName, target, expression) {
    const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
    const executionContexts = runtimeModel.executionContexts();
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
    for (const frame of resourceTreeModel.frames()) {
        const executionContext = executionContexts.find(context => context.frameId === frame.id);
        if (!executionContext) {
            continue;
        }
        // Note: it would return previously created world if it exists for the frame.
        const { executionContextId } = await target.pageAgent().invoke_createIsolatedWorld({ frameId: frame.id, worldName });
        await target.runtimeAgent().invoke_evaluate({
            expression,
            includeCommandLineAPI: true,
            contextId: executionContextId,
        });
    }
}
function findTargetByExecutionContext(targets, executionContextId) {
    for (const target of targets) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        if (!runtimeModel) {
            continue;
        }
        for (const context of runtimeModel.executionContexts()) {
            if (context.id === executionContextId) {
                return target;
            }
        }
    }
    return;
}
function findFrameIdByExecutionContext(targets, executionContextId) {
    for (const target of targets) {
        const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
        if (!runtimeModel) {
            continue;
        }
        for (const context of runtimeModel.executionContexts()) {
            if (context.id === executionContextId && context.frameId !== undefined) {
                return context.frameId;
            }
        }
    }
    return;
}
const isFrameTargetInfo = (target) => {
    return target.type === 'page' || target.type === 'iframe';
};
//# sourceMappingURL=SDKUtils.js.map

/***/ })

}]);