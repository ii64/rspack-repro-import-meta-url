"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_DOMLinkifier_js"], {
"./panels/elements/DOMLinkifier.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Linkifier: function() { return Linkifier; },
  decorateNodeLabel: function() { return decorateNodeLabel; },
  linkifyDeferredNodeReference: function() { return linkifyDeferredNodeReference; },
  linkifyNodeReference: function() { return linkifyNodeReference; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domLinkifier.css.js */ "./panels/elements/domLinkifier.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}






var UIStrings = {
    /**
     * @description Text displayed when trying to create a link to a node in the UI, but the node
     * location could not be found so we display this placeholder instead. Node refers to a DOM node.
     * This should be translated if appropriate.
     */ node: '<node>'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/DOMLinkifier.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var decorateNodeLabel = function decorateNodeLabel(node, parentElement, options) {
    var originalNode = node;
    var isPseudo = node.nodeType() === Node.ELEMENT_NODE && node.pseudoType();
    if (isPseudo && node.parentNode) {
        node = node.parentNode;
    }
    // Special case rendering the node links for view transition pseudo elements.
    // We don't include the ancestor name in the node link because
    // they always have the same ancestor. See crbug.com/340633630.
    if (node.isViewTransitionPseudoNode()) {
        var pseudoElement = parentElement.createChild('span', 'extra node-label-pseudo');
        var viewTransitionPseudoText = "::".concat(originalNode.pseudoType(), "(").concat(originalNode.pseudoIdentifier(), ")");
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement, viewTransitionPseudoText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || viewTransitionPseudoText);
        return;
    }
    var nameElement = parentElement.createChild('span', 'node-label-name');
    if (options.textContent) {
        nameElement.textContent = options.textContent;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || options.textContent);
        return;
    }
    var title = node.nodeNameInCorrectCase();
    nameElement.textContent = title;
    var idAttribute = node.getAttribute('id');
    if (idAttribute) {
        var idElement = parentElement.createChild('span', 'node-label-id');
        var part = '#' + idAttribute;
        title += part;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(idElement, part);
        // Mark the name as extra, since the ID is more important.
        nameElement.classList.add('extra');
    }
    var classAttribute = node.getAttribute('class');
    if (classAttribute) {
        var classes = classAttribute.split(/\s+/);
        if (classes.length) {
            var foundClasses = new Set();
            var classesElement = parentElement.createChild('span', 'extra node-label-class');
            for(var i = 0; i < classes.length; ++i){
                var className = classes[i];
                if (className && !foundClasses.has(className)) {
                    var part1 = '.' + className;
                    title += part1;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(classesElement, part1);
                    foundClasses.add(className);
                }
            }
        }
    }
    if (isPseudo) {
        var pseudoIdentifier = originalNode.pseudoIdentifier();
        var pseudoElement1 = parentElement.createChild('span', 'extra node-label-pseudo');
        var pseudoText = '::' + originalNode.pseudoType();
        if (pseudoIdentifier) {
            pseudoText += "(".concat(pseudoIdentifier, ")");
        }
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(pseudoElement1, pseudoText);
        title += pseudoText;
    }
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(parentElement, options.tooltip || title);
};
var linkifyNodeReference = function linkifyNodeReference(node) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        tooltip: undefined,
        preventKeyboardFocus: undefined,
        textContent: undefined,
        isDynamicLink: false
    };
    if (!node) {
        return document.createTextNode(i18nString(UIStrings.node));
    }
    var root = document.createElement('span');
    root.classList.add('monospace');
    var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, {
        cssFile: [
            _domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        ],
        delegatesFocus: undefined
    });
    var link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.classList.toggle('dynamic-link', options.isDynamicLink);
    link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({
        click: true,
        keydown: 'Enter'
    })));
    decorateNodeLabel(node, link, options);
    link.addEventListener('click', function() {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node, false);
        return false;
    }, false);
    link.addEventListener('mouseover', node.highlight.bind(node, undefined), false);
    link.addEventListener('mouseleave', function() {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    }, false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    return root;
};
var linkifyDeferredNodeReference = function linkifyDeferredNodeReference(deferredNode) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        tooltip: undefined,
        preventKeyboardFocus: undefined
    };
    var root = document.createElement('div');
    var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(root, {
        cssFile: [
            _domLinkifier_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
        ],
        delegatesFocus: undefined
    });
    var link = shadowRoot.createChild('button', 'node-link text-button link-style');
    link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.link('node').track({
        click: true
    })));
    link.createChild('slot');
    link.addEventListener('click', deferredNode.resolve.bind(deferredNode, onDeferredNodeResolved), false);
    link.addEventListener('mousedown', function(e) {
        return e.consume();
    }, false);
    if (options.preventKeyboardFocus) {
        link.tabIndex = -1;
    }
    function onDeferredNodeResolved(node) {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
    }
    return root;
};
var linkifierInstance;
var Linkifier = /*#__PURE__*/ function() {
    "use strict";
    function Linkifier() {
        _class_call_check(this, Linkifier);
    }
    _create_class(Linkifier, [
        {
            key: "linkify",
            value: function linkify(object, options) {
                if (_instanceof(object, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode)) {
                    return linkifyNodeReference(object, options);
                }
                if (_instanceof(object, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode)) {
                    return linkifyDeferredNodeReference(object, options);
                }
                throw new Error('Can\'t linkify non-node');
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!linkifierInstance || forceNew) {
                    linkifierInstance = new Linkifier();
                }
                return linkifierInstance;
            }
        }
    ]);
    return Linkifier;
} //# sourceMappingURL=DOMLinkifier.js.map
();


}),
"./panels/elements/domLinkifier.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2018 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  display: inline;\n}\n\n.node-link {\n  cursor: pointer;\n  display: inline;\n  pointer-events: auto;\n  outline-offset: 2px;\n\n  &:focus-visible {\n    outline-width: unset;\n  }\n\n  &.dynamic-link:hover {\n    text-decoration: underline;\n  }\n}\n\n.node-label-name {\n  color: var(--sys-color-token-property-special);\n\n  .dynamic-link & {\n    color: var(--text-link);\n  }\n}\n\n.node-label-class,\n.node-label-pseudo {\n  color: var(--sys-color-token-attribute);\n}\n\n/*# sourceURL=domLinkifier.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);