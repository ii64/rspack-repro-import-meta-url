"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_Tooltip_js"],{

/***/ "./panels/recorder/models/Tooltip.js":
/*!*******************************************!*\
  !*** ./panels/recorder/models/Tooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTooltipForActions: () => (/* binding */ getTooltipForActions)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function getTooltipForActions(translation, action) {
    let title = translation;
    const shortcuts = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);
    for (const shortcut of shortcuts) {
        title += ` - ${shortcut.title()}`;
    }
    return title;
}
//# sourceMappingURL=Tooltip.js.map

/***/ })

}]);