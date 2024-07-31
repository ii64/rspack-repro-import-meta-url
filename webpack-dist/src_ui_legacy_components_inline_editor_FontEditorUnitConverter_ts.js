"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_FontEditorUnitConverter_ts"],{

/***/ "./src/panels/css_overview/css_overview.ts":
/*!*************************************************!*\
  !*** ./src/panels/css_overview/css_overview.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewCompletedView: () => (/* reexport module object */ _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   CSSOverviewController: () => (/* reexport module object */ _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   CSSOverviewModel: () => (/* reexport module object */ _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   CSSOverviewPanel: () => (/* reexport module object */ _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   CSSOverviewProcessingView: () => (/* reexport module object */ _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   CSSOverviewSidebarPanel: () => (/* reexport module object */ _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   CSSOverviewUnusedDeclarations: () => (/* reexport module object */ _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./src/panels/css_overview/CSSOverviewUnusedDeclarations.ts");
/* harmony import */ var _CSSOverviewModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSOverviewModel.js */ "./src/panels/css_overview/CSSOverviewModel.ts");
/* harmony import */ var _CSSOverviewProcessingView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewProcessingView.js */ "./src/panels/css_overview/CSSOverviewProcessingView.ts");
/* harmony import */ var _CSSOverviewCompletedView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewCompletedView.js */ "./src/panels/css_overview/CSSOverviewCompletedView.ts");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./src/panels/css_overview/CSSOverviewSidebarPanel.ts");
/* harmony import */ var _CSSOverviewPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSOverviewPanel.js */ "./src/panels/css_overview/CSSOverviewPanel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

















/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/FontEditorUnitConverter.ts":
/*!***************************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/FontEditorUnitConverter.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUnitConversionMultiplier: () => (/* binding */ getUnitConversionMultiplier)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/css_overview/css_overview.js */ "./src/panels/css_overview/css_overview.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const computedArrayFontSizeIndex = 6;
function getPxMultiplier() {
    return 1;
}
async function getEmMultiplier(isFontSizeProperty) {
    const selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
    let currentFontSize;
    if (selectedNode && selectedNode.parentNode && selectedNode.nodeName() !== 'HTML') {
        const [model] = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel);
        const fontSizeNodeId = isFontSizeProperty ? selectedNode.parentNode.id : selectedNode.id;
        const computedFontSize = await model.getComputedStyleForNode(fontSizeNodeId).then(findFontSizeValue);
        const computedFontSizeValue = computedFontSize.replace(/[a-z]/g, '');
        currentFontSize = parseFloat(computedFontSizeValue);
    }
    else {
        currentFontSize = 16;
    }
    return currentFontSize;
}
async function getRemMultiplier() {
    const selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
    const htmlNode = findHtmlNode(selectedNode);
    if (!htmlNode || !htmlNode.id) {
        return 16;
    }
    const [model] = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().models(_panels_css_overview_css_overview_js__WEBPACK_IMPORTED_MODULE_1__.CSSOverviewModel.CSSOverviewModel);
    const computedRootFontSize = await model.getComputedStyleForNode(htmlNode.id).then(findFontSizeValue);
    const rootFontSizeValue = computedRootFontSize.replace(/[a-z]/g, '');
    const rootFontSize = parseFloat(rootFontSizeValue);
    return rootFontSize;
}
async function getPercentMultiplier(isFontSizeProperty) {
    const emMultiplier = await getEmMultiplier(isFontSizeProperty);
    const percMultiplier = emMultiplier / 100;
    return percMultiplier;
}
async function getVhMultiplier() {
    const viewportObject = await getViewportObject();
    if (!viewportObject) {
        return 1;
    }
    const viewportHeight = viewportObject.height;
    const vhMultiplier = viewportHeight / 100;
    return vhMultiplier;
}
async function getVwMultiplier() {
    const viewportObject = await getViewportObject();
    if (!viewportObject) {
        return 1;
    }
    const viewportWidth = viewportObject.width;
    const vwMultiplier = viewportWidth / 100;
    return vwMultiplier;
}
async function getVminMultiplier() {
    const viewportObject = await getViewportObject();
    if (!viewportObject) {
        return 1;
    }
    const viewportWidth = viewportObject.width;
    const viewportHeight = viewportObject.height;
    const minViewportSize = Math.min(viewportWidth, viewportHeight);
    const vminMultiplier = minViewportSize / 100;
    return vminMultiplier;
}
async function getVmaxMultiplier() {
    const viewportObject = await getViewportObject();
    if (!viewportObject) {
        return 1;
    }
    const viewportWidth = viewportObject.width;
    const viewportHeight = viewportObject.height;
    const maxViewportSize = Math.max(viewportWidth, viewportHeight);
    const vmaxMultiplier = maxViewportSize / 100;
    return vmaxMultiplier;
}
function getCmMultiplier() {
    return 37.795;
}
function getMmMultiplier() {
    return 3.7795;
}
function getInMultiplier() {
    return 96;
}
function getPtMultiplier() {
    return 4 / 3;
}
function getPcMultiplier() {
    return 16;
}
function findFontSizeValue(computedObject) {
    const computedArray = computedObject.computedStyle;
    let index = computedArrayFontSizeIndex;
    if (computedArray[index].name && computedArray[index].name !== 'font-size') {
        for (let i = 0; i < computedArray.length; i++) {
            if (computedArray[i].name === 'font-size') {
                index = i;
                break;
            }
        }
    }
    return computedArray[index].value;
}
function findHtmlNode(selectedNode) {
    let node = selectedNode;
    while (node && node.nodeName() !== 'HTML') {
        if (node.parentNode) {
            node = node.parentNode;
        }
        else {
            break;
        }
    }
    return node;
}
const widthEvaluateParams = {
    expression: 'window.innerWidth',
    includeCommandLineAPI: false,
    silent: true,
    returnByValue: false,
    generatePreview: false,
    userGesture: false,
    awaitPromise: true,
    throwOnSideEffect: false,
    disableBreaks: true,
    replMode: false,
    allowUnsafeEvalBlockedByCSP: false,
};
const heightEvaluateParams = {
    expression: 'window.innerHeight',
    includeCommandLineAPI: false,
    silent: true,
    returnByValue: false,
    generatePreview: false,
    userGesture: false,
    awaitPromise: true,
    throwOnSideEffect: false,
    disableBreaks: true,
    replMode: false,
    allowUnsafeEvalBlockedByCSP: false,
};
async function getViewportObject() {
    const currentExecutionContext = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
    let width, height;
    if (currentExecutionContext) {
        const widthObject = await currentExecutionContext.evaluate(widthEvaluateParams, false, false);
        const heightObject = await currentExecutionContext.evaluate(heightEvaluateParams, false, false);
        if ('error' in widthObject || 'error' in heightObject) {
            return null;
        }
        if (widthObject.object) {
            width = widthObject.object.value;
        }
        if (heightObject.object) {
            height = heightObject.object.value;
        }
    }
    if (width === undefined || height === undefined) {
        const selectedNode = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMModel.DOMNode);
        if (!selectedNode) {
            return null;
        }
        const pageLayout = await selectedNode.domModel().target().pageAgent().invoke_getLayoutMetrics();
        const zoom = pageLayout.visualViewport.zoom ? pageLayout.visualViewport.zoom : 1;
        height = pageLayout.visualViewport.clientHeight / zoom;
        width = pageLayout.visualViewport.clientWidth / zoom;
    }
    return { width, height };
}
const unitConversionMap = new Map();
unitConversionMap.set('px', getPxMultiplier);
unitConversionMap.set('em', getEmMultiplier);
unitConversionMap.set('rem', getRemMultiplier);
unitConversionMap.set('%', getPercentMultiplier);
unitConversionMap.set('vh', getVhMultiplier);
unitConversionMap.set('vw', getVwMultiplier);
unitConversionMap.set('vmin', getVminMultiplier);
unitConversionMap.set('vmax', getVmaxMultiplier);
unitConversionMap.set('cm', getCmMultiplier);
unitConversionMap.set('mm', getMmMultiplier);
unitConversionMap.set('in', getInMultiplier);
unitConversionMap.set('pt', getPtMultiplier);
unitConversionMap.set('pc', getPcMultiplier);
async function getUnitConversionMultiplier(prevUnit, newUnit, isFontSize) {
    if (prevUnit === '') {
        prevUnit = 'em';
    }
    if (newUnit === '') {
        newUnit = 'em';
    }
    let prevUnitMultiplier, newUnitMultiplier;
    const prevUnitFunction = unitConversionMap.get(prevUnit);
    const newUnitFunction = unitConversionMap.get(newUnit);
    if (prevUnitFunction && newUnitFunction) {
        if (prevUnit === 'em' || prevUnit === '%') {
            prevUnitMultiplier = await prevUnitFunction(isFontSize);
        }
        else {
            prevUnitMultiplier = await prevUnitFunction();
        }
        if (newUnit === 'em' || newUnit === '%') {
            newUnitMultiplier = await newUnitFunction(isFontSize);
        }
        else {
            newUnitMultiplier = await newUnitFunction();
        }
    }
    else {
        return 1;
    }
    return prevUnitMultiplier / newUnitMultiplier;
}


/***/ })

}]);