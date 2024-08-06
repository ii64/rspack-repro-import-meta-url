"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_PierceQuerySelector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/PierceQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  pierceQuerySelector: function() { return pierceQuerySelector; },
  pierceQuerySelectorAll: function() { return pierceQuerySelectorAll; }
});
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
 */ function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var pierceQuerySelector = function(root, selector) {
    var found = null;
    var search = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                search(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && !found && currentNode.matches(selector)) {
                found = currentNode;
            }
        }while (!found && iter.nextNode());
    };
    if (_instanceof(root, Document)) {
        root = root.documentElement;
    }
    search(root);
    return found;
};
/**
 * @internal
 */ var pierceQuerySelectorAll = function(element, selector) {
    var result = [];
    var collect = function(root) {
        var iter = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
        do {
            var currentNode = iter.currentNode;
            if (currentNode.shadowRoot) {
                collect(currentNode.shadowRoot);
            }
            if (_instanceof(currentNode, ShadowRoot)) {
                continue;
            }
            if (currentNode !== root && currentNode.matches(selector)) {
                result.push(currentNode);
            }
        }while (iter.nextNode());
    };
    if (_instanceof(element, Document)) {
        element = element.documentElement;
    }
    collect(element);
    return result;
}; //# sourceMappingURL=PierceQuerySelector.js.map


}),

}]);