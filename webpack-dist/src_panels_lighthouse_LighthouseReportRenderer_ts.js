"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_lighthouse_LighthouseReportRenderer_ts"],{

/***/ "./src/panels/lighthouse/LighthouseReportRenderer.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lighthouse/LighthouseReportRenderer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LighthouseReportRenderer: () => (/* binding */ LighthouseReportRenderer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/lighthouse/report/report.js */ "./src/third_party/lighthouse/report/report.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./src/ui/legacy/theme_support/theme_support.ts");
/* harmony import */ var _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../timeline/timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const MaxLengthForLinks = 40;
class LighthouseReportRenderer {
    static renderLighthouseReport(lhr, artifacts, opts) {
        let onViewTrace = undefined;
        if (artifacts) {
            onViewTrace = async () => {
                const defaultPassTrace = artifacts.traces.defaultPass;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.LighthouseViewTrace);
                await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().showPanel('timeline');
                _timeline_timeline_js__WEBPACK_IMPORTED_MODULE_9__.TimelinePanel.TimelinePanel.instance().loadFromEvents(defaultPassTrace.traceEvents);
            };
        }
        async function onSaveFileOverride(blob) {
            const domain = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(lhr.finalUrl || lhr.finalDisplayedUrl).domain();
            const sanitizedDomain = domain.replace(/[^a-z0-9.-]+/gi, '_');
            const timestamp = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DateUtilities.toISO8601Compact(new Date(lhr.fetchTime));
            const ext = blob.type.match('json') ? '.json' : '.html';
            const basename = `${sanitizedDomain}-${timestamp}${ext}`;
            const text = await blob.text();
            await _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().save(basename, text, true /* forceSaveAs */, false /* isBase64 */);
            _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.FileManager.FileManager.instance().close(basename);
        }
        async function onPrintOverride(rootEl) {
            const clonedReport = rootEl.cloneNode(true);
            const printWindow = window.open('', '_blank', 'channelmode=1,status=1,resizable=1');
            if (!printWindow) {
                return;
            }
            printWindow.document.body.replaceWith(clonedReport);
            // Linkified nodes are shadow elements, which aren't exposed via `cloneNode`.
            await LighthouseReportRenderer.linkifyNodeDetails(clonedReport);
            opts?.beforePrint?.();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
            opts?.afterPrint?.();
        }
        function getStandaloneReportHTML() {
            // @ts-expect-error https://github.com/GoogleChrome/lighthouse/issues/11628
            return Lighthouse.ReportGenerator.ReportGenerator.generateReportHtml(lhr);
        }
        const reportEl = _third_party_lighthouse_report_report_js__WEBPACK_IMPORTED_MODULE_5__.renderReport(lhr, {
            // Disable dark mode so we can manually adjust it.
            disableDarkMode: true,
            onViewTrace,
            onSaveFileOverride,
            onPrintOverride,
            getStandaloneReportHTML,
        });
        reportEl.classList.add('lh-devtools');
        const updateDarkModeIfNecessary = () => {
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
        void LighthouseReportRenderer.waitForMainTargetLoad().then(() => {
            void LighthouseReportRenderer.linkifyNodeDetails(reportEl);
            void LighthouseReportRenderer.linkifySourceLocationDetails(reportEl);
        });
        return reportEl;
    }
    static async waitForMainTargetLoad() {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const resourceTreeModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
        if (!resourceTreeModel) {
            return;
        }
        await resourceTreeModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.Events.Load);
    }
    static async linkifyNodeDetails(el) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return;
        }
        const domModel = mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel);
        if (!domModel) {
            return;
        }
        for (const origElement of el.getElementsByClassName('lh-node')) {
            const origHTMLElement = origElement;
            const detailsItem = origHTMLElement.dataset;
            if (!detailsItem.path) {
                continue;
            }
            const nodeId = await domModel.pushNodeByPathToFrontend(detailsItem.path);
            if (!nodeId) {
                continue;
            }
            const node = domModel.nodeForId(nodeId);
            if (!node) {
                continue;
            }
            const element = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node, { tooltip: detailsItem.snippet, preventKeyboardFocus: undefined });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
            const screenshotElement = origHTMLElement.querySelector('.lh-element-screenshot');
            origHTMLElement.textContent = '';
            if (screenshotElement) {
                origHTMLElement.append(screenshotElement);
            }
            origHTMLElement.appendChild(element);
        }
    }
    static async linkifySourceLocationDetails(el) {
        for (const origElement of el.getElementsByClassName('lh-source-location')) {
            const origHTMLElement = origElement;
            const detailsItem = origHTMLElement.dataset;
            if (!detailsItem.sourceUrl || !detailsItem.sourceLine || !detailsItem.sourceColumn) {
                continue;
            }
            const url = detailsItem.sourceUrl;
            const line = Number(detailsItem.sourceLine);
            const column = Number(detailsItem.sourceColumn);
            const element = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier.linkifyURL(url, {
                lineNumber: line,
                columnNumber: column,
                showColumnNumber: false,
                inlineFrameIndex: 0,
                maxLength: MaxLengthForLinks,
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(origHTMLElement, '');
            origHTMLElement.textContent = '';
            origHTMLElement.appendChild(element);
        }
    }
}


/***/ }),

/***/ "./src/third_party/lighthouse/report/report.ts":
/*!*****************************************************!*\
  !*** ./src/third_party/lighthouse/report/report.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.DOM),
/* harmony export */   ReportRenderer: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportRenderer),
/* harmony export */   ReportUIFeatures: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.ReportUIFeatures),
/* harmony export */   format: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.format),
/* harmony export */   renderReport: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.renderReport),
/* harmony export */   swapLocale: () => (/* reexport safe */ _bundle_js__WEBPACK_IMPORTED_MODULE_0__.swapLocale)
/* harmony export */ });
/* harmony import */ var _bundle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundle.js */ "./src/third_party/lighthouse/report/bundle.js");



/***/ })

}]);