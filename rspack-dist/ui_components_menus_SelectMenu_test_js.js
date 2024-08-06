"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_menus_SelectMenu_test_js"], {
"./ui/components/menus/SelectMenu.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/dialogs.js */ "./ui/components/dialogs/dialogs.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _menus_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus.js */ "./ui/components/menus/menus.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function _templateObject() {
    var data = _tagged_template_literal([
        "Override Title"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
 // eslint-disable-line rulesdir/es_modules_import





var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_4__.RenderCoordinator.RenderCoordinator.instance();
function createMenu() {
    return _createMenu.apply(this, arguments);
}
function _createMenu() {
    _createMenu = _async_to_generator(function() {
        var menuItems, menu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    menuItems = [
                        {
                            name: 'Option 1',
                            value: '1',
                            group: ''
                        },
                        {
                            name: 'Option 2',
                            value: '2',
                            group: ''
                        },
                        {
                            name: 'Option 3',
                            value: '3',
                            group: ''
                        },
                        {
                            name: 'Option 4',
                            value: '4',
                            group: ''
                        }
                    ];
                    menu = new _menus_js__WEBPACK_IMPORTED_MODULE_5__.SelectMenu.SelectMenu();
                    menu.position = "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ ;
                    menuItems.forEach(function(item) {
                        var selectMenuItem = new _menus_js__WEBPACK_IMPORTED_MODULE_5__.Menu.MenuItem();
                        selectMenuItem.value = item.value;
                        selectMenuItem.textContent = item.name;
                        menu.appendChild(selectMenuItem);
                    });
                    return [
                        4,
                        coordinator.done()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        menu
                    ];
            }
        });
    });
    return _createMenu.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('SelectMenu', function() {
    it('will use the buttonTitle property if that is provided', /*#__PURE__*/ _async_to_generator(function() {
        var menu, firsItem, button;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createMenu()
                    ];
                case 1:
                    menu = _state.sent();
                    firsItem = menu.querySelector('devtools-menu-item');
                    if (!firsItem) {
                        assert.fail('No item was found.');
                        return [
                            2
                        ];
                    }
                    menu.buttonTitle = 'Override Title';
                    _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM(menu);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(menu.shadowRoot);
                    button = menu.shadowRoot.querySelector('devtools-select-menu-button');
                    if (!button) {
                        assert.fail('devtools-select-menu-button not found');
                        return [
                            2
                        ];
                    }
                    assert.instanceOf(button, HTMLElement);
                    assert.strictEqual(button.innerText, 'Override Title');
                    return [
                        2
                    ];
            }
        });
    }));
    it('allows the buttonTitle to be a function', /*#__PURE__*/ _async_to_generator(function() {
        var menu, firsItem, button;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createMenu()
                    ];
                case 1:
                    menu = _state.sent();
                    firsItem = menu.querySelector('devtools-menu-item');
                    if (!firsItem) {
                        assert.fail('No item was found.');
                        return [
                            2
                        ];
                    }
                    firsItem.selected = true;
                    menu.buttonTitle = function() {
                        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html(_templateObject());
                    };
                    _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM(menu);
                    return [
                        4,
                        coordinator.done()
                    ];
                case 2:
                    _state.sent();
                    assert.isNotNull(menu.shadowRoot);
                    button = menu.shadowRoot.querySelector('devtools-select-menu-button');
                    if (!button) {
                        assert.fail('devtools-select-menu-button not found');
                        return [
                            2
                        ];
                    }
                    assert.instanceOf(button, HTMLElement);
                    assert.strictEqual(button.innerText, 'Override Title');
                    return [
                        2
                    ];
            }
        });
    }));
    it('can render multiple options as selected at once', /*#__PURE__*/ _async_to_generator(function() {
        var _devtoolsMenu_shadowRoot, selectMenu, devtoolsMenu, devtoolsDialog, selectedItems;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        createMenu()
                    ];
                case 1:
                    selectMenu = _state.sent();
                    _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM(selectMenu);
                    _to_consumable_array(selectMenu.querySelectorAll('devtools-menu-item'))[0].selected = true;
                    _to_consumable_array(selectMenu.querySelectorAll('devtools-menu-item'))[1].selected = true;
                    assert.isNotNull(selectMenu.shadowRoot);
                    devtoolsMenu = selectMenu.shadowRoot.querySelector('devtools-menu');
                    devtoolsDialog = devtoolsMenu === null || devtoolsMenu === void 0 ? void 0 : (_devtoolsMenu_shadowRoot = devtoolsMenu.shadowRoot) === null || _devtoolsMenu_shadowRoot === void 0 ? void 0 : _devtoolsMenu_shadowRoot.querySelector('devtools-dialog');
                    return [
                        4,
                        devtoolsDialog === null || devtoolsDialog === void 0 ? void 0 : devtoolsDialog.setDialogVisible(true)
                    ];
                case 2:
                    _state.sent();
                    selectedItems = _to_consumable_array(selectMenu.querySelectorAll('devtools-menu-item')).filter(function(item) {
                        return item.selected;
                    });
                    assert.deepEqual(selectedItems.map(function(item) {
                        return item.innerText;
                    }), [
                        'Option 1',
                        'Option 2'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SelectMenu.test.js.map


}),

}]);