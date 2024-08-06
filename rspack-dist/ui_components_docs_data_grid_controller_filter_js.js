"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_data_grid_controller_filter_js"], {
"./ui/components/docs/data_grid_controller/filter.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var _document_getElementById;



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
var component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGridController.DataGridController();
var filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_0__.TextUtils.FilterParser([
    'key',
    'value'
]);
component.data = {
    columns: [
        {
            id: 'key',
            title: 'Method',
            sortable: true,
            widthWeighting: 1,
            visible: true,
            hideable: false
        },
        {
            id: 'value',
            title: 'Value',
            sortable: false,
            widthWeighting: 1,
            visible: true,
            hideable: false
        }
    ],
    rows: [
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.showOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Overlay.hideOverlay',
                    title: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar',
                    title: 'foobar'
                }
            ]
        }
    ]
};
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component);
var filterTextInput = document.querySelector('input');
filterTextInput === null || filterTextInput === void 0 ? void 0 : filterTextInput.addEventListener('input', function(event) {
    var newText = event.target.value;
    var filters = filterParser.parse(newText);
    component.data = _object_spread_props(_object_spread({}, component.data), {
        filters: filters
    });
}); //# sourceMappingURL=filter.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);