"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_QueryContainer_ts"],{

/***/ "./src/panels/elements/components/QueryContainer.ts":
/*!**********************************************************!*\
  !*** ./src/panels/elements/components/QueryContainer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueriedSizeRequestedEvent: () => (/* binding */ QueriedSizeRequestedEvent),
/* harmony export */   QueryContainer: () => (/* binding */ QueryContainer)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./src/ui/components/node_text/node_text.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './queryContainer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
var _QueryContainer_instances, _QueryContainer_shadow, _QueryContainer_queryName, _QueryContainer_container, _QueryContainer_onContainerLinkClick, _QueryContainer_isContainerLinkHovered, _QueryContainer_queriedSizeDetails, _QueryContainer_onContainerLinkMouseEnter, _QueryContainer_onContainerLinkMouseLeave, _QueryContainer_render, _QueryContainer_renderQueriedSizeDetails;






const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { PhysicalAxis, QueryAxis } = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery;
class QueriedSizeRequestedEvent extends Event {
    constructor() {
        super(QueriedSizeRequestedEvent.eventName, {});
    }
}
Object.defineProperty(QueriedSizeRequestedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'queriedsizerequested'
});
class QueryContainer extends HTMLElement {
    constructor() {
        super(...arguments);
        _QueryContainer_instances.add(this);
        _QueryContainer_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _QueryContainer_queryName.set(this, void 0);
        _QueryContainer_container.set(this, void 0);
        _QueryContainer_onContainerLinkClick.set(this, void 0);
        _QueryContainer_isContainerLinkHovered.set(this, false);
        _QueryContainer_queriedSizeDetails.set(this, void 0);
    }
    set data(data) {
        __classPrivateFieldSet(this, _QueryContainer_queryName, data.queryName, "f");
        __classPrivateFieldSet(this, _QueryContainer_container, data.container, "f");
        __classPrivateFieldSet(this, _QueryContainer_onContainerLinkClick, data.onContainerLinkClick, "f");
        __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _QueryContainer_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './queryContainer.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    updateContainerQueriedSizeDetails(details) {
        __classPrivateFieldSet(this, _QueryContainer_queriedSizeDetails, details, "f");
        __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
    }
}
_QueryContainer_shadow = new WeakMap(), _QueryContainer_queryName = new WeakMap(), _QueryContainer_container = new WeakMap(), _QueryContainer_onContainerLinkClick = new WeakMap(), _QueryContainer_isContainerLinkHovered = new WeakMap(), _QueryContainer_queriedSizeDetails = new WeakMap(), _QueryContainer_instances = new WeakSet(), _QueryContainer_onContainerLinkMouseEnter = async function _QueryContainer_onContainerLinkMouseEnter() {
    __classPrivateFieldGet(this, _QueryContainer_container, "f")?.highlightNode('container-outline');
    __classPrivateFieldSet(this, _QueryContainer_isContainerLinkHovered, true, "f");
    this.dispatchEvent(new QueriedSizeRequestedEvent());
}, _QueryContainer_onContainerLinkMouseLeave = function _QueryContainer_onContainerLinkMouseLeave() {
    __classPrivateFieldGet(this, _QueryContainer_container, "f")?.clearHighlight();
    __classPrivateFieldSet(this, _QueryContainer_isContainerLinkHovered, false, "f");
    __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_render).call(this);
}, _QueryContainer_render = function _QueryContainer_render() {
    if (!__classPrivateFieldGet(this, _QueryContainer_container, "f")) {
        return;
    }
    let idToDisplay, classesToDisplay;
    if (!__classPrivateFieldGet(this, _QueryContainer_queryName, "f")) {
        idToDisplay = __classPrivateFieldGet(this, _QueryContainer_container, "f").getAttribute('id');
        classesToDisplay = __classPrivateFieldGet(this, _QueryContainer_container, "f").getAttribute('class')?.split(/\s+/).filter(Boolean);
    }
    const nodeTitle = __classPrivateFieldGet(this, _QueryContainer_queryName, "f") || __classPrivateFieldGet(this, _QueryContainer_container, "f").nodeNameNicelyCased;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    render(html `
      →
      <a href="#"
        draggable=false
        class="container-link"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.cssRuleHeader('container-query').track({ click: true })}
        @click=${__classPrivateFieldGet(this, _QueryContainer_onContainerLinkClick, "f")}
        @mouseenter=${__classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_onContainerLinkMouseEnter)}
        @mouseleave=${__classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_onContainerLinkMouseLeave)}
      ><${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}
          data-node-title=${nodeTitle}
          .data=${{
        nodeTitle,
        nodeId: idToDisplay,
        nodeClasses: classesToDisplay,
    }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName}></a>
      ${__classPrivateFieldGet(this, _QueryContainer_isContainerLinkHovered, "f") ? __classPrivateFieldGet(this, _QueryContainer_instances, "m", _QueryContainer_renderQueriedSizeDetails).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
    `, __classPrivateFieldGet(this, _QueryContainer_shadow, "f"), {
        host: this,
    });
    // clang-format on
}, _QueryContainer_renderQueriedSizeDetails = function _QueryContainer_renderQueriedSizeDetails() {
    if (!__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f") || __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis === QueryAxis.None) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    const areBothAxesQueried = __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis === QueryAxis.Both;
    const axisIconClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
        'axis-icon': true,
        'hidden': areBothAxesQueried,
        'vertical': __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").physicalAxis === PhysicalAxis.Vertical,
    });
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html `
      <span class="queried-size-details">
        (${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").queryAxis}<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}
          class=${axisIconClasses} .data=${{
        iconName: 'width',
        color: 'var(--icon-default)',
    }}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>)
        ${areBothAxesQueried && __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").width ? 'width:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").width || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${areBothAxesQueried && __classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").height ? 'height:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
        ${__classPrivateFieldGet(this, _QueryContainer_queriedSizeDetails, "f").height || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing}
      </span>
    `;
    // clang-format on
};
Object.defineProperty(QueryContainer, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-query-container`
});
customElements.define('devtools-query-container', QueryContainer);


/***/ }),

/***/ "./src/ui/components/node_text/NodeText.ts":
/*!*************************************************!*\
  !*** ./src/ui/components/node_text/NodeText.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* binding */ NodeText)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeText.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _NodeText_instances, _NodeText_shadow, _NodeText_nodeTitle, _NodeText_nodeId, _NodeText_nodeClasses, _NodeText_render;


const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NodeText extends HTMLElement {
    constructor() {
        super(...arguments);
        _NodeText_instances.add(this);
        _NodeText_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _NodeText_nodeTitle.set(this, '');
        _NodeText_nodeId.set(this, '');
        _NodeText_nodeClasses.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _NodeText_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeText.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _NodeText_nodeTitle, data.nodeTitle, "f");
        __classPrivateFieldSet(this, _NodeText_nodeId, data.nodeId, "f");
        __classPrivateFieldSet(this, _NodeText_nodeClasses, data.nodeClasses, "f");
        __classPrivateFieldGet(this, _NodeText_instances, "m", _NodeText_render).call(this);
    }
}
_NodeText_shadow = new WeakMap(), _NodeText_nodeTitle = new WeakMap(), _NodeText_nodeId = new WeakMap(), _NodeText_nodeClasses = new WeakMap(), _NodeText_instances = new WeakSet(), _NodeText_render = function _NodeText_render() {
    const hasId = Boolean(__classPrivateFieldGet(this, _NodeText_nodeId, "f"));
    const hasNodeClasses = Boolean(__classPrivateFieldGet(this, _NodeText_nodeClasses, "f") && __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").length > 0);
    const parts = [
        html `<span class="node-label-name">${__classPrivateFieldGet(this, _NodeText_nodeTitle, "f")}</span>`,
    ];
    if (__classPrivateFieldGet(this, _NodeText_nodeId, "f")) {
        const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
            'node-label-id': true,
            'node-multiple-descriptors': hasNodeClasses,
        });
        parts.push(html `<span class=${classes}>#${CSS.escape(__classPrivateFieldGet(this, _NodeText_nodeId, "f"))}</span>`);
    }
    if (__classPrivateFieldGet(this, _NodeText_nodeClasses, "f") && __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").length > 0) {
        const text = __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").map(c => `.${CSS.escape(c)}`).join('');
        const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
            'node-label-class': true,
            'node-multiple-descriptors': hasId,
        });
        parts.push(html `<span class=${classes}>${text}</span>`);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html `
      ${parts}
    `, __classPrivateFieldGet(this, _NodeText_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(NodeText, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-node-text`
});
customElements.define('devtools-node-text', NodeText);


/***/ }),

/***/ "./src/ui/components/node_text/node_text.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/node_text/node_text.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* reexport module object */ _NodeText_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _NodeText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.js */ "./src/ui/components/node_text/NodeText.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);