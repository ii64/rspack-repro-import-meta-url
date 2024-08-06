"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_select_menu_wide-option_js"], {
"./ui/components/docs/select_menu/wide-option.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var root = document.getElementById('root');
function makeMenu(id) {
    var items = [];
    var menu = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__.SelectMenu.SelectMenu();
    var options = [
        {
            text: 'A short option',
            value: 'option-1'
        },
        {
            text: 'A very long option that has a lot of text',
            value: 'option-2'
        },
        {
            text: 'An  average sized option',
            value: 'option-3'
        }
    ];
    options.forEach(function(opt) {
        var item = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_0__.Menu.MenuItem();
        item.value = opt.value;
        item.textContent = opt.text;
        menu.appendChild(item);
        items.push(item);
    });
    menu.addEventListener('selectmenuselected', function(event) {
        items.forEach(function(item) {
            item.selected = item.value === event.itemValue;
        });
        var selectedOption = options.find(function(option) {
            return option.value === event.itemValue;
        });
        menu.buttonTitle = (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.text) || '';
    });
    items[1].selected = true;
    menu.buttonTitle = options[1].text;
    menu.showArrow = true;
    menu.id = id;
    root === null || root === void 0 ? void 0 : root.appendChild(menu);
}
makeMenu('width-150');
makeMenu('width-400'); //# sourceMappingURL=wide-option.js.map


}),

}]);