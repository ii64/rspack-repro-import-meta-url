"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_Font_d_ts"], {
"./ui/legacy/components/perf_ui/Font.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * Because we run our UI in a couple of contexts (actual app & test
 * environments) and on multiple platforms, the font is not consistent, so this
 * function is used to determine which font to use when rendering the canvas.
 * The most reliable way to do this is to see what font is on the body element,
 * but because this triggers layout we ensure we only do it once before caching
 * the result. If nothing is set on the body for whatever reason, we fall back
 * to what we usually use on the platform.
 *
 * We need this behaviour because in interaction tests we force the font to be a
 * specific font that we know is available on local dev machines and on the bots
 * to ensure that the screenshot tests are consistent.
 **/ 


}),

}]);