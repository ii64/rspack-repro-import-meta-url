"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_DOMLinkifier_js"],{

/***/ "./panels/elements/DOMLinkifier.js":
/*!*****************************************!*\
  !*** ./panels/elements/DOMLinkifier.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Linkifier: () => (/* binding */ Linkifier),
/* harmony export */   decorateNodeLabel: () => (/* binding */ decorateNodeLabel),
/* harmony export */   linkifyDeferredNodeReference: () => (/* binding */ linkifyDeferredNodeReference),
/* harmony export */   linkifyNodeReference: () => (/* binding */ linkifyNodeReference)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domLinkifier.css.js */ "./panels/elements/domLinkifier.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     * @description Text displayed when trying to create a link to a node in the UI, but the node
     * location could not be found so we display this placeholder instead. Node refers to a DOM node.
     * This should be translated if appropriate.
     */
    node: '<node>',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/DOMLinkifier.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const decorateNodeLabel = function (node, parentElement, options) {
    const originalNode = node;
    const isPseudo = node.nodeType() === Node.ELEMENT_NODE && node.pseudoType();
    if (isPseudo && node.parentNode) {
        node = node.parentNode;
    }
    // Special case rendering the node links for view transition pseudo elements.
    // We don't include the ancestor name in the node link because
    // they always have the same ancestor. See crbug.com/340633630.
    if (node.isViewTransitionPseudoNode()) {
        const pseudoElement = parentElement.createChild('span', 'extra node-label-pseudo');
        const viewTransitionPseudoText = `::${originalNode.pseudoType()}(${originalNode.pseudoIdentifier()})`;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement, viewTransitionPseudoText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || viewTransitionPseudoText);
        return;
    }
    const nameElement = parentElement.createChild('span', 'node-label-name');
    if (options.textContent) {
        nameElement.textContent = options.textContent;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || options.textContent);
        return;
    }
    let title = node.nodeNameInCorrectCase();
    nameElement.textContent = title;
    const idAttribute = node.getAttribute('id');
    if (idAttribute) {
        const idElement = parentElement.createChild('span', 'node-label-id');
        const part = '#' + idAttribute;
        title += part;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(idElement, part);
        // Mark the name as extra, since the ID is more important.
        nameElement.classList.add('extra');
    }
    const classAttribute = node.getAttribute('class');
    if (classAttribute) {
        const classes = classAttribute.split(/\s+/);
        if (classes.length) {
            const foundClasses = new Set();
            const classesElement = parentElement.createChild('span', 'extra node-label-class');
            for (let i = 0; i < classes.length; ++i) {
                const className = classes[i];
                if (className && !foundClasses.has(className)) {
                    const part = '.' + className;
                    title += part;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(classesElement, part);
                    foundClasses.add(className);
                }
            }
        }
    }
    if (isPseudo) {
        const pseudoIdentifier = originalNode.pseudoIdentifier();
        const pseudoElement = parentElement.createChild('span', 'extra node-label-pseudo');
        let pseudoText = '::' + originalNode.pseudoType();
        if (pseudoIdentifier) {
            pseudoText += `(${pseudoIdentifier})`;
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement, pseudoText);
        title += pseudoText;
    }
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || title);
};
const linkifyNodeReference = function (node, options = {
    tooltip: undefined,
    preventKeyboardFocus: undefined,
    textContent: undefined,
    isDynamicLink: false,
}) {
    if (!node) {
        return document.createTextNode(i18nString(UIStrings.node));
    }
    const root = document.createElement('span');
    root.classList.add('monospace');
    const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, { cssFile: [_domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]], delegatesFocus: undefined });
    const link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.classList.toggle('dynamic-link', options.isDynamicLink);
    link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({ click: true, keydown: 'Enter' })}`);
    decorateNodeLabel(node, link, options);
    link.addEventListener('click', () => {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node, false);
        return false;
    }, false);
    link.addEventListener('mouseover', node.highlight.bind(node, undefined), false);
    link.addEventListener('mouseleave', () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight(), false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    return root;
};
const linkifyDeferredNodeReference = function (deferredNode, options = {
    tooltip: undefined,
    preventKeyboardFocus: undefined,
}) {
    const root = document.createElement('div');
    const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, { cssFile: [_domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]], delegatesFocus: undefined });
    const link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({ click: true })}`);
    link.createChild('slot');
    link.addEventListener('click', deferredNode.resolve.bind(deferredNode, onDeferredNodeResolved), false);
    link.addEventListener('mousedown', e => e.consume(), false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    function onDeferredNodeResolved(node) {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
    }
    return root;
};
let linkifierInstance;
class Linkifier {
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!linkifierInstance || forceNew) {
            linkifierInstance = new Linkifier();
        }
        return linkifierInstance;
    }
    linkify(object, options) {
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode) {
            return linkifyNodeReference(object, options);
        }
        if (object instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode) {
            return linkifyDeferredNodeReference(object, options);
        }
        throw new Error('Can\'t linkify non-node');
    }
}
//# sourceMappingURL=DOMLinkifier.js.map

/***/ }),

/***/ "./panels/elements/domLinkifier.css.js":
/*!*********************************************!*\
  !*** ./panels/elements/domLinkifier.css.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  display: inline;
}

.node-link {
  cursor: pointer;
  display: inline;
  pointer-events: auto;
  outline-offset: 2px;

  &:focus-visible {
    outline-width: unset;
  }

  &.dynamic-link:hover {
    text-decoration: underline;
  }
}

.node-label-name {
  color: var(--sys-color-token-property-special);

  .dynamic-link & {
    color: var(--text-link);
  }
}

.node-label-class,
.node-label-pseudo {
  color: var(--sys-color-token-attribute);
}

/*# sourceURL=domLinkifier.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);