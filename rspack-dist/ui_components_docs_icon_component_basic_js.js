"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_icon_component_basic_js"], {
"./ui/components/docs/icon_component/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
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


await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ComponentServerSetup.setup();
var iconTable = document.getElementById('icon-overview');
var row1 = document.createElement('tr');
var iconName1 = document.createElement('td');
iconName1.textContent = 'select-element';
row1.appendChild(iconName1);
var icon = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon();
var name = 'select-element';
icon.data = {
    iconName: name,
    color: 'rgb(110, 110, 110)',
    width: '20px'
};
var icon1 = document.createElement('td');
icon1.appendChild(icon);
row1.appendChild(icon1);
iconTable === null || iconTable === void 0 ? void 0 : iconTable.appendChild(row1);
icon.onclick = function() {
    // Change of colour through a data-setter, which rerenders the component. Getting the data first in order not to specify the data fields all over again
    icon.data = _object_spread_props(_object_spread({}, icon.data), {
        color: 'blue'
    });
};
var row2 = document.createElement('tr');
var iconName2 = document.createElement('td');
iconName2.textContent = 'issue-exclamation-filled';
row2.appendChild(iconName2);
var otherIcon = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon();
var otherPath = 'issue-exclamation-filled';
otherIcon.data = {
    iconPath: otherPath,
    width: '20px',
    height: '20px',
    color: 'var(--icon-link)'
};
var icon2 = document.createElement('td');
icon2.appendChild(otherIcon);
row2.appendChild(icon2);
iconTable === null || iconTable === void 0 ? void 0 : iconTable.appendChild(row2);
var row3 = document.createElement('tr');
var iconName3 = document.createElement('td');
iconName3.textContent = 'select-element';
row3.appendChild(iconName3);
var otherIcon2 = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon();
otherIcon2.classList.add('custom-color');
otherIcon2.name = 'select-element';
var icon3 = document.createElement('td');
icon3.appendChild(otherIcon2);
row3.appendChild(icon3);
iconTable === null || iconTable === void 0 ? void 0 : iconTable.appendChild(row3);
(function() {
    var div = document.createElement('div');
    var span1 = document.createElement('span');
    span1.textContent = 'Some text';
    div.appendChild(span1);
    var otherIcon3 = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon();
    otherIcon3.classList.add('custom-color');
    otherIcon3.data = {
        iconName: 'select-element',
        width: '20px',
        height: '20px',
        color: 'var(--icon-default)'
    };
    div.appendChild(otherIcon3);
    var span2 = document.createElement('span');
    span2.textContent = 'with a large icon';
    div.appendChild(span2);
    document.body.append(div);
})();
(function() {
    var div = document.createElement('div');
    var span1 = document.createElement('span');
    span1.textContent = 'Some text';
    div.appendChild(span1);
    var otherIcon3 = new _icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon();
    otherIcon3.classList.add('custom-color');
    otherIcon3.data = {
        iconName: 'select-element',
        width: '14px',
        height: '14px',
        color: 'var(--icon-default)'
    };
    div.appendChild(otherIcon3);
    var span2 = document.createElement('span');
    span2.textContent = 'with a small icon';
    div.appendChild(span2);
    document.body.append(div);
})();
var iconInFlex = document.getElementById('icon-in-flex');
iconInFlex.data = {
    iconName: 'cross-circle',
    width: '20px',
    height: '20px',
    color: 'var(--icon-error)'
}; //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);