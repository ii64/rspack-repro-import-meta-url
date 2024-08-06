"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_color_picker_FormatPickerContextMenu_js"],{

/***/ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js":
/*!**********************************************************************!*\
  !*** ./ui/legacy/components/color_picker/FormatPickerContextMenu.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatPickerContextMenu: () => (/* binding */ FormatPickerContextMenu)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description Tooltip text describing that a color was clipped after conversion to match the target gamut
     *@example {rgb(255 255 255)} PH1
     */
    colorClippedTooltipText: 'This color was clipped to match the format\'s gamut. The actual result was {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/color_picker/FormatPickerContextMenu.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class FormatPickerContextMenu {
    #color;
    constructor(color) {
        this.#color = color;
    }
    async show(e, onSelect) {
        let resolveShowPromise = undefined;
        const showPromise = new Promise(resolve => {
            resolveShowPromise = resolve;
        });
        const legacyFormats = [
            "hex" /* Common.Color.Format.HEX */,
            "hexa" /* Common.Color.Format.HEXA */,
            "rgb" /* Common.Color.Format.RGB */,
            "rgba" /* Common.Color.Format.RGBA */,
            "hsl" /* Common.Color.Format.HSL */,
            "hwb" /* Common.Color.Format.HWB */,
        ];
        const modernFormats = [
            "lch" /* Common.Color.Format.LCH */,
            "oklch" /* Common.Color.Format.OKLCH */,
            "lab" /* Common.Color.Format.LAB */,
            "oklab" /* Common.Color.Format.OKLAB */,
            "srgb" /* Common.Color.Format.SRGB */,
            "srgb-linear" /* Common.Color.Format.SRGB_LINEAR */,
            "display-p3" /* Common.Color.Format.DISPLAY_P3 */,
            "a98-rgb" /* Common.Color.Format.A98_RGB */,
            "prophoto-rgb" /* Common.Color.Format.PROPHOTO_RGB */,
            "rec2020" /* Common.Color.Format.REC_2020 */,
            "xyz" /* Common.Color.Format.XYZ */,
            "xyz-d50" /* Common.Color.Format.XYZ_D50 */,
            "xyz-d65" /* Common.Color.Format.XYZ_D65 */,
        ];
        const menu = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(e, { onSoftMenuClosed: () => resolveShowPromise?.() });
        const legacySection = menu.section('legacy');
        const wideSection = menu.section('wide');
        const colorFunctionSection = menu.section('color-function').appendSubMenuItem('color()', false, 'color').section();
        if (!(this.#color instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nickname)) {
            const nickname = this.#color.asLegacyColor().nickname();
            if (nickname) {
                this.addColorToSection(nickname, legacySection, onSelect);
            }
        }
        if (!(this.#color instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ShortHex)) {
            const shortHex = this.#color.as((this.#color.alpha ?? 1) === 1 ? "hex" /* Common.Color.Format.HEX */ : "hexa" /* Common.Color.Format.HEXA */)
                .shortHex();
            if (shortHex) {
                this.addColorToSection(shortHex, legacySection, onSelect);
            }
        }
        for (const format of [...legacyFormats, ...modernFormats]) {
            if (format === this.#color.format()) {
                continue;
            }
            const newColor = this.#color.as(format);
            const section = legacyFormats.includes(format) ? legacySection :
                newColor instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ColorFunction ? colorFunctionSection :
                    wideSection;
            this.addColorToSection(newColor, section, onSelect);
        }
        await menu.show();
        await showPromise;
    }
    addColorToSection(newColor, section, onSelect) {
        if (newColor instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy) {
            const originalHasAlpha = (this.#color.alpha ?? 1) !== 1;
            const isAlphaFormat = newColor.alpha !== null;
            // When the original color has alpha, only print alpha legacy formats. Otherwise, only print non-alpha legacy
            // formats.
            if (isAlphaFormat !== originalHasAlpha) {
                return;
            }
        }
        const label = newColor.asString();
        if (!label) {
            return;
        }
        let icon = undefined;
        if (newColor.isGamutClipped()) {
            icon = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
            icon.data = {
                iconName: 'warning',
                color: 'var(--icon-default)',
                width: '16px',
                height: '16px',
            };
            icon.style.marginLeft = '1px';
            icon.style.marginTop = '-1px';
            icon.style.minWidth = '16px';
            icon.style.minHeight = '16px';
        }
        const tooltip = icon ? i18nString(UIStrings.colorClippedTooltipText, { PH1: newColor.getAsRawString() ?? 'none' }) : undefined;
        const handler = () => onSelect(newColor);
        section.appendItem(label, handler, { additionalElement: icon, tooltip, jslogContext: newColor.isGamutClipped() ? 'color' : 'clipped-color' });
    }
}
//# sourceMappingURL=FormatPickerContextMenu.js.map

/***/ })

}]);