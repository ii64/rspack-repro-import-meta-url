"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_CSSRuleValidatorHelper_ts"],{

/***/ "./src/panels/elements/CSSRuleValidatorHelper.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/CSSRuleValidatorHelper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPropertyDefinitionText: () => (/* binding */ buildPropertyDefinitionText),
/* harmony export */   buildPropertyName: () => (/* binding */ buildPropertyName),
/* harmony export */   buildPropertyValue: () => (/* binding */ buildPropertyValue),
/* harmony export */   isBlockContainer: () => (/* binding */ isBlockContainer),
/* harmony export */   isFlexContainer: () => (/* binding */ isFlexContainer),
/* harmony export */   isGridContainer: () => (/* binding */ isGridContainer),
/* harmony export */   isInlineElement: () => (/* binding */ isInlineElement),
/* harmony export */   isMulticolContainer: () => (/* binding */ isMulticolContainer),
/* harmony export */   isPossiblyReplacedElement: () => (/* binding */ isPossiblyReplacedElement)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const buildPropertyDefinitionText = (property, value) => {
    if (value === undefined) {
        return buildPropertyName(property);
    }
    return '<code class="unbreakable-text"><span class="property">' + property + '</span>: ' + value + '</code>';
};
const buildPropertyName = (property) => {
    return '<code class="unbreakable-text"><span class="property">' + property + '</span></code>';
};
const buildPropertyValue = (property) => {
    return '<code class="unbreakable-text">' + property + '</code>';
};
const isFlexContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const display = computedStyles.get('display');
    return display === 'flex' || display === 'inline-flex';
};
const blockContainerDisplayValueSet = new Set([
    'block',
    'flow-root',
    'inline-block',
    'list-item',
    'table-caption',
    'table-cell',
]);
const isBlockContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const displayValue = computedStyles.get('display');
    if (!displayValue) {
        return false;
    }
    const split = displayValue.split(' ');
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
const isInlineElement = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    return computedStyles.get('display') === 'inline';
};
// See https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements
const possiblyReplacedElements = new Set([
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'input',
    'object',
    'video',
]);
const isPossiblyReplacedElement = (nodeName) => {
    if (!nodeName) {
        return false;
    }
    return possiblyReplacedElements.has(nodeName);
};
const isGridContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const display = computedStyles.get('display');
    return display === 'grid' || display === 'inline-grid';
};
const isMulticolContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const columnWidth = computedStyles.get('column-width');
    const columnCount = computedStyles.get('column-count');
    return columnWidth !== 'auto' || columnCount !== 'auto';
};


/***/ })

}]);