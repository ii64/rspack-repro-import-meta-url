"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_data_grid_sticky-headers_js"], {
"./ui/components/docs/data_grid/sticky-headers.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var _document_getElementById;


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__.ComponentServerSetup.setup();
var component = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_0__.DataGrid.DataGrid();
component.data = {
    columns: [
        {
            id: 'key',
            title: 'Key',
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
        // Each key is the ID of a column, and the value is the value for that column
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Bravo'
                },
                {
                    columnId: 'value',
                    value: 'foobar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Alpha'
                },
                {
                    columnId: 'value',
                    value: 'bazbar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Charlie'
                },
                {
                    columnId: 'value',
                    value: 'bazbar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Delta'
                },
                {
                    columnId: 'value',
                    value: 'bazbar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Echo'
                },
                {
                    columnId: 'value',
                    value: 'bazbar'
                }
            ]
        },
        {
            cells: [
                {
                    columnId: 'key',
                    value: 'Foxtrot'
                },
                {
                    columnId: 'value',
                    value: 'bazbar'
                }
            ]
        }
    ],
    activeSort: null
};
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component);
window.setInterval(function() {
    var key = Math.floor(Math.random() * 10);
    var value = Math.floor(Math.random() * 10);
    var randomDataRow = {
        cells: [
            {
                columnId: 'key',
                value: "Key: ".concat(key),
                title: "Key: ".concat(key)
            },
            {
                columnId: 'value',
                value: "Value: ".concat(value),
                title: "Value: ".concat(value)
            }
        ]
    };
    component.data = _object_spread_props(_object_spread({}, component.data), {
        rows: _to_consumable_array(component.data.rows).concat([
            randomDataRow
        ])
    });
}, 2000); //# sourceMappingURL=sticky-headers.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);