"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_CSSRuleValidatorHelper_js"], {
"./panels/elements/CSSRuleValidatorHelper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildPropertyDefinitionText: function() { return buildPropertyDefinitionText; },
  buildPropertyName: function() { return buildPropertyName; },
  buildPropertyValue: function() { return buildPropertyValue; },
  isBlockContainer: function() { return isBlockContainer; },
  isFlexContainer: function() { return isFlexContainer; },
  isGridContainer: function() { return isGridContainer; },
  isInlineElement: function() { return isInlineElement; },
  isMulticolContainer: function() { return isMulticolContainer; },
  isPossiblyReplacedElement: function() { return isPossiblyReplacedElement; }
});
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var buildPropertyDefinitionText = function(property, value) {
    if (value === undefined) {
        return buildPropertyName(property);
    }
    return '<code class="unbreakable-text"><span class="property">' + property + '</span>: ' + value + '</code>';
};
var buildPropertyName = function(property) {
    return '<code class="unbreakable-text"><span class="property">' + property + '</span></code>';
};
var buildPropertyValue = function(property) {
    return '<code class="unbreakable-text">' + property + '</code>';
};
var isFlexContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var display = computedStyles.get('display');
    return display === 'flex' || display === 'inline-flex';
};
var blockContainerDisplayValueSet = new Set([
    'block',
    'flow-root',
    'inline-block',
    'list-item',
    'table-caption',
    'table-cell'
]);
var isBlockContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var displayValue = computedStyles.get('display');
    if (!displayValue) {
        return false;
    }
    var split = displayValue.split(' ');
    if (split.length > 3) {
        return false;
    }
    // The order of keywords is canonicalized to "outside? inside? list-item?"
    // If the number of keywords is 3, it must be 'inline flow-root list-item'.
    if (split.length === 3) {
        return split[2] === 'list-item';
    }
    if (split.length === 2) {
        return split[1] === 'list-item' && split[0] !== 'inline';
    }
    return blockContainerDisplayValueSet.has(split[0]);
};
var isInlineElement = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    return computedStyles.get('display') === 'inline';
};
// See https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements
var possiblyReplacedElements = new Set([
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'input',
    'object',
    'video'
]);
var isPossiblyReplacedElement = function(nodeName) {
    if (!nodeName) {
        return false;
    }
    return possiblyReplacedElements.has(nodeName);
};
var isGridContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var display = computedStyles.get('display');
    return display === 'grid' || display === 'inline-grid';
};
var isMulticolContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var columnWidth = computedStyles.get('column-width');
    var columnCount = computedStyles.get('column-count');
    return columnWidth !== 'auto' || columnCount !== 'auto';
}; //# sourceMappingURL=CSSRuleValidatorHelper.js.map


}),

}]);