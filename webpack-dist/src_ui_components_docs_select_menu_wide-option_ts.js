"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_docs_select_menu_wide-option_ts"],{

/***/ "./src/ui/components/docs/select_menu/wide-option.ts":
/*!***********************************************************!*\
  !*** ./src/ui/components/docs/select_menu/wide-option.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const root = document.getElementById('root');
function makeMenu(id) {
    const items = [];
    const menu = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__.SelectMenu.SelectMenu();
    const options = [
        { text: 'A short option', value: 'option-1' },
        { text: 'A very long option that has a lot of text', value: 'option-2' },
        { text: 'An  average sized option', value: 'option-3' },
    ];
    options.forEach(opt => {
        const item = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__.Menu.MenuItem();
        item.value = opt.value;
        item.textContent = opt.text;
        menu.appendChild(item);
        items.push(item);
    });
    menu.addEventListener('selectmenuselected', (event) => {
        items.forEach(item => {
            item.selected = item.value === event.itemValue;
        });
        const selectedOption = options.find(option => option.value === event.itemValue);
        menu.buttonTitle = selectedOption?.text || '';
    });
    items[1].selected = true;
    menu.buttonTitle = options[1].text;
    menu.showArrow = true;
    menu.id = id;
    root?.appendChild(menu);
}
makeMenu('width-150');
makeMenu('width-400');


/***/ })

}]);