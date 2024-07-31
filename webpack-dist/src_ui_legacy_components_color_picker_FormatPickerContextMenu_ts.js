"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_color_picker_FormatPickerContextMenu_ts"],{

/***/ "./src/ui/legacy/components/color_picker/FormatPickerContextMenu.ts":
/*!**************************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/FormatPickerContextMenu.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatPickerContextMenu: () => (/* binding */ FormatPickerContextMenu)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _FormatPickerContextMenu_color;




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
    constructor(color) {
        _FormatPickerContextMenu_color.set(this, void 0);
        __classPrivateFieldSet(this, _FormatPickerContextMenu_color, color, "f");
    }
    async show(e, onSelect) {
        let resolveShowPromise = undefined;
        const showPromise = new Promise(resolve => {
            resolveShowPromise = resolve;
        });
        const legacyFormats = [
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGBA,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HWB,
        ];
        const modernFormats = [
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LCH,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLCH,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.LAB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.OKLAB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.SRGB_LINEAR,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.DISPLAY_P3,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.A98_RGB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.PROPHOTO_RGB,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.REC_2020,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D50,
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.XYZ_D65,
        ];
        const menu = new _legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(e, { onSoftMenuClosed: () => resolveShowPromise?.() });
        const legacySection = menu.section('legacy');
        const wideSection = menu.section('wide');
        const colorFunctionSection = menu.section('color-function').appendSubMenuItem('color()', false, 'color').section();
        if (!(__classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f") instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Nickname)) {
            const nickname = __classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").asLegacyColor().nickname();
            if (nickname) {
                this.addColorToSection(nickname, legacySection, onSelect);
            }
        }
        if (!(__classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f") instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.ShortHex)) {
            const shortHex = __classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").as((__classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").alpha ?? 1) === 1 ? _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX : _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA)
                .shortHex();
            if (shortHex) {
                this.addColorToSection(shortHex, legacySection, onSelect);
            }
        }
        for (const format of [...legacyFormats, ...modernFormats]) {
            if (format === __classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").format()) {
                continue;
            }
            const newColor = __classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").as(format);
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
            const originalHasAlpha = (__classPrivateFieldGet(this, _FormatPickerContextMenu_color, "f").alpha ?? 1) !== 1;
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
_FormatPickerContextMenu_color = new WeakMap();


/***/ })

}]);