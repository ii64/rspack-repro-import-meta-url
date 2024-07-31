"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_AccessibilityTreeNode_ts"],{

/***/ "./src/panels/elements/components/AccessibilityTreeNode.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/elements/components/AccessibilityTreeNode.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilityTreeNode: () => (/* binding */ AccessibilityTreeNode)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
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
var _AccessibilityTreeNode_instances, _AccessibilityTreeNode_shadow, _AccessibilityTreeNode_ignored, _AccessibilityTreeNode_name, _AccessibilityTreeNode_role, _AccessibilityTreeNode_properties, _AccessibilityTreeNode_id, _AccessibilityTreeNode_render;






const UIStrings = {
    /**
     *@description Ignored node element text content in Accessibility Tree View of the Elements panel
     */
    ignored: 'Ignored',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/components/AccessibilityTreeNode.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
// TODO(jobay) move this to Platform.StringUtilities if still needed.
// This function is a variant of setTextContentTruncatedIfNeeded found in DOMExtension.
function truncateTextIfNeeded(text) {
    const maxTextContentLength = 10000;
    if (text.length > maxTextContentLength) {
        return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimMiddle(text, maxTextContentLength);
    }
    return text;
}
function isPrintable(valueType) {
    switch (valueType) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.Boolean:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.BooleanOrUndefined:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.String:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Accessibility.AXValueType.Number:
            return true;
        default:
            return false;
    }
}
class AccessibilityTreeNode extends HTMLElement {
    constructor() {
        super(...arguments);
        _AccessibilityTreeNode_instances.add(this);
        _AccessibilityTreeNode_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AccessibilityTreeNode_ignored.set(this, true);
        _AccessibilityTreeNode_name.set(this, '');
        _AccessibilityTreeNode_role.set(this, '');
        _AccessibilityTreeNode_properties.set(this, []);
        _AccessibilityTreeNode_id.set(this, '');
    }
    set data(data) {
        __classPrivateFieldSet(this, _AccessibilityTreeNode_ignored, data.ignored, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_name, data.name, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_role, data.role, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_properties, data.properties, "f");
        __classPrivateFieldSet(this, _AccessibilityTreeNode_id, data.id, "f");
        void __classPrivateFieldGet(this, _AccessibilityTreeNode_instances, "m", _AccessibilityTreeNode_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _AccessibilityTreeNode_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityTreeNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
}
_AccessibilityTreeNode_shadow = new WeakMap(), _AccessibilityTreeNode_ignored = new WeakMap(), _AccessibilityTreeNode_name = new WeakMap(), _AccessibilityTreeNode_role = new WeakMap(), _AccessibilityTreeNode_properties = new WeakMap(), _AccessibilityTreeNode_id = new WeakMap(), _AccessibilityTreeNode_instances = new WeakSet(), _AccessibilityTreeNode_render = async function _AccessibilityTreeNode_render() {
    const role = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<span class='role-value'>${truncateTextIfNeeded(__classPrivateFieldGet(this, _AccessibilityTreeNode_role, "f"))}</span>`;
    const name = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `"<span class='attribute-value'>${__classPrivateFieldGet(this, _AccessibilityTreeNode_name, "f")}</span>"`;
    const properties = __classPrivateFieldGet(this, _AccessibilityTreeNode_properties, "f").map(({ name, value }) => isPrintable(value.type) ?
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html ` <span class='attribute-name'>${name}</span>:&nbsp;<span class='attribute-value'>${value.value}</span>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing);
    const content = __classPrivateFieldGet(this, _AccessibilityTreeNode_ignored, "f") ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<span>${i18nString(UIStrings.ignored)}</span>` :
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `${role}&nbsp;${name}${properties}`;
    await _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance().write(`Accessibility node ${__classPrivateFieldGet(this, _AccessibilityTreeNode_id, "f")} render`, () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `<div class='container'>${content}</div>`, __classPrivateFieldGet(this, _AccessibilityTreeNode_shadow, "f"), { host: this });
        // clang-format on
    });
};
Object.defineProperty(AccessibilityTreeNode, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-accessibility-tree-node`
});
customElements.define('devtools-accessibility-tree-node', AccessibilityTreeNode);


/***/ })

}]);