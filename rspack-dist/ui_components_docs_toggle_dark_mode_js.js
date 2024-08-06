"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_toggle_dark_mode_js"], {
"./ui/components/docs/toggle_dark_mode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  init: function() { return init; }
});
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var DARK_THEME_CLASS = 'theme-with-dark-background';
function toggleDarkMode(force) {
    var // Only use the second arg if its not undefined. The spec treats `undefined` as falsy. :/
    _document_body_classList;
    (_document_body_classList = document.body.classList).toggle.apply(_document_body_classList, _to_consumable_array([
        DARK_THEME_CLASS
    ].concat(_to_consumable_array(force !== undefined ? [
        force
    ] : []))));
}
function init() {
    // To keep consistent test results, we don't auto-initialize darkmode. This'd do it, though:
    //    toggleDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.addEventListener('load', function() {
        var button = document.createElement('button');
        button.innerText = 'Toggle light/dark mode';
        button.className = 'component-docs-ui';
        button.style.position = 'fixed';
        button.style.bottom = '10px';
        button.style.right = '10px';
        button.style.width = '200px';
        button.style.fontSize = '16px';
        button.style.padding = '5px';
        button.style.cursor = 'pointer';
        button.addEventListener('click', function(event) {
            event.preventDefault();
            toggleDarkMode();
        });
        document.body.appendChild(button);
    });
} //# sourceMappingURL=toggle_dark_mode.js.map


}),

}]);