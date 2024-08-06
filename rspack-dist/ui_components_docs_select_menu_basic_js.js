"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_select_menu_basic_js"], {
"./ui/components/docs/select_menu/basic.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../ui/components/dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var menus = [
    {
        items: [
            {
                name: 'Opt 1',
                value: '1'
            },
            {
                name: 'Opt 2',
                value: '2',
                selected: false
            },
            {
                name: 'Opt 3',
                value: '3',
                group: ''
            },
            {
                name: 'Opt 4',
                value: '4'
            }
        ],
        buttonTitle: 'Show dialog'
    },
    {
        items: [
            {
                name: 'Opt 1',
                value: '1'
            },
            {
                name: 'Opt 2',
                value: '2',
                selected: false
            },
            {
                name: 'Opt 3',
                value: '3'
            },
            {
                name: 'Opt 4',
                value: '4'
            }
        ],
        buttonTitle: 'Show dialog',
        position: "top" /* Dialogs.Dialog.DialogVerticalPosition.TOP */ ,
        showArrow: true
    },
    {
        items: [
            {
                name: 'Opt 1',
                value: '1',
                selected: false
            },
            {
                name: 'Opt 2',
                value: '2'
            },
            {
                name: 'Opt 3',
                value: '3'
            },
            {
                name: 'Opt 4',
                value: '4'
            }
        ],
        buttonTitle: 'Show dialog',
        position: "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ ,
        showConnector: true
    },
    {
        items: [
            {
                name: 'Opt 1',
                value: '1',
                group: 'Group 1',
                selected: false
            },
            {
                name: 'Opt 2',
                value: '2',
                group: 'Group 1'
            },
            {
                name: 'Opt 3',
                value: '3',
                group: 'Group 2'
            },
            {
                name: 'Opt 4',
                value: '4',
                group: 'Group 2'
            }
        ],
        buttonTitle: 'Show dialog',
        position: "top" /* Dialogs.Dialog.DialogVerticalPosition.TOP */ ,
        showConnector: true,
        hasGroups: true
    },
    {
        items: [
            {
                name: 'Option 1',
                value: '1',
                selected: true
            },
            {
                name: 'Option 2',
                value: '2'
            },
            {
                name: 'Option 3',
                value: '3'
            },
            {
                name: 'Option 4',
                value: '4'
            }
        ],
        showArrow: true
    },
    {
        items: [
            {
                name: 'Option 1',
                value: '1',
                selected: true
            }
        ],
        buttonTitle: 'Disabled',
        disabled: true
    }
];
var root = document.getElementById('root');
menus.forEach(function(menu, i) {
    var allItems = [];
    var selectMenu = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_1__.SelectMenu.SelectMenu();
    if (menu.buttonTitle) {
        selectMenu.buttonTitle = menu.buttonTitle;
    }
    selectMenu.position = menu.position || "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ ;
    selectMenu.showConnector = Boolean(menu.showConnector);
    var firstMenuGroup = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_1__.SelectMenu.SelectMenuGroup();
    firstMenuGroup.name = 'Group 1';
    var secondMenuGroup = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_1__.SelectMenu.SelectMenuGroup();
    secondMenuGroup.name = 'Group 2';
    selectMenu.showArrow = Boolean(menu.showArrow) || Boolean(menu.showConnector);
    selectMenu.disabled = Boolean(menu.disabled);
    menu.items.forEach(function(item, j) {
        var selectMenuItem = new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_1__.Menu.MenuItem();
        selectMenuItem.value = item.value;
        selectMenuItem.selected = Boolean(item.selected);
        var itemContent = document.createElement('div');
        itemContent.textContent = item.name;
        selectMenuItem.appendChild(itemContent);
        if (menu.hasGroups && j < 2) {
            firstMenuGroup.appendChild(selectMenuItem);
        } else if (menu.hasGroups) {
            secondMenuGroup.appendChild(selectMenuItem);
        } else {
            selectMenu.appendChild(selectMenuItem);
        }
        allItems.push(selectMenuItem);
    });
    if (menu.hasGroups) {
        selectMenu.appendChild(firstMenuGroup);
        selectMenu.appendChild(secondMenuGroup);
    }
    if (root) {
        var ph = document.createElement('div');
        ph.classList.add('place-holder');
        ph.setAttribute('id', "place-holder-".concat(i + 1));
        root.appendChild(ph);
        var result = document.createElement('div');
        ph.appendChild(result);
        selectMenu.addEventListener('selectmenuselected', function(_evt) {
            var evt = _evt;
            var item = null;
            for(var _$i = 0; _$i < allItems.length; _$i++){
                allItems[_$i].selected = allItems[_$i].value === evt.itemValue;
                if (allItems[_$i].selected) {
                    item = allItems[_$i];
                }
            }
            if (!item) {
                return;
            }
            result.innerText = "Selected option: ".concat(item.innerText.trim());
        });
        ph.appendChild(selectMenu);
    }
}); //# sourceMappingURL=basic.js.map


}),

}]);