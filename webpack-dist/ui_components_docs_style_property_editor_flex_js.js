"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_style_property_editor_flex_js"],{

/***/ "./ui/components/docs/style_property_editor/flex.js":
/*!**********************************************************!*\
  !*** ./ui/components/docs/style_property_editor/flex.js ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/elements/components/components.js */ "./panels/elements/components/components.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
const component = new _panels_elements_components_components_js__WEBPACK_IMPORTED_MODULE_0__.StylePropertyEditor.FlexboxEditor();
document.getElementById('container')?.appendChild(component);
const computedProperties = new Map([
    ['flex-direction', 'column'],
    ['flex-wrap', 'nowrap'],
    ['align-content', 'initial'],
    ['justify-content', 'flex-end'],
    ['align-items', 'normal'],
]);
const originalComputedProperties = new Map(computedProperties);
const authoredProperties = new Map([
    ['flex-direction', 'column'],
    ['justify-content', 'flex-end'],
]);
component.data = {
    computedProperties,
    authoredProperties,
};
component.addEventListener('propertyselected', (event) => {
    authoredProperties.set(event.data.name, event.data.value);
    computedProperties.set(event.data.name, event.data.value);
    component.data = {
        computedProperties,
        authoredProperties,
    };
});
component.addEventListener('propertydeselected', (event) => {
    authoredProperties.delete(event.data.name);
    computedProperties.set(event.data.name, originalComputedProperties.get(event.data.name));
    component.data = {
        computedProperties,
        authoredProperties,
    };
});
//# sourceMappingURL=flex.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);