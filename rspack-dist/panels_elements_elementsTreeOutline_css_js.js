"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_elementsTreeOutline_css_js"], {
"./panels/elements/elementsTreeOutline.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.editing {\n  box-shadow: var(--drop-shadow);\n  background-color: var(--sys-color-cdt-base-container);\n  text-overflow: clip !important; /* stylelint-disable-line declaration-no-important */\n  padding-left: 2px;\n  margin-left: -2px;\n  padding-right: 2px;\n  margin-right: -2px;\n  margin-bottom: -1px;\n  padding-bottom: 1px;\n  opacity: 100% !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.editing,\n.editing * {\n  color: var(--sys-color-on-surface) !important; /* stylelint-disable-line declaration-no-important */\n  text-decoration: none !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.editing br {\n  display: none;\n}\n\n.adorner-reveal {\n  margin: 0 3px;\n}\n\n.adorner-with-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  height: 100%;\n\n  devtools-icon {\n    width: var(--sys-size-6);\n    height: var(--sys-size-6);\n    color: var(--icon-primary);\n  }\n}\n\n.adorner-with-icon *:not(:last-child) {\n  margin-right: 2px;\n}\n\n.elements-disclosure {\n  width: 100%;\n  display: inline-block;\n  line-height: normal;\n}\n\n.elements-disclosure li {\n  /** Keep margin-left & padding-left in sync with ElementsTreeElements.updateDecorations **/\n  padding: 1px 0 0 14px;\n  margin-left: -2px;\n  word-break: normal;\n  position: relative;\n  min-height: 15px;\n  line-height: 1.36;\n  min-width: 200px;\n}\n\n.elements-disclosure li::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  left: calc(var(--indent) * -1);\n  width: var(--indent);\n}\n\n.elements-disclosure li.parent {\n  display: flex;\n}\n\n.elements-disclosure li.parent:not(.always-parent) {\n  /** Keep it in sync with ElementsTreeElements.updateDecorations **/\n  margin-left: -12px;\n}\n\n.elements-disclosure li .selected-hint::before {\n  font-style: italic;\n  content: " == $0";\n  opacity: 0%;\n  position: absolute;\n  white-space: pre;\n}\n\n.elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) li.selected .selected-hint::before {\n  position: static;\n  opacity: 60%;\n}\n\n.elements-disclosure li.parent:not(.always-parent)::before {\n  box-sizing: border-box;\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  height: 14px;\n  width: 14px;\n  content: "\\A0\\A0";\n  color: transparent;\n  text-shadow: none;\n  margin-left: -3px;\n  background-color: var(--icon-default);\n  transition: transform 200ms;\n}\n\n.elements-disclosure li.parent.expanded::before {\n  transform: rotate(90deg);\n  margin-top: -2px;\n}\n\n.elements-disclosure li .selection {\n  display: none;\n  z-index: -1;\n}\n\n.elements-disclosure li.selected .selection {\n  display: block;\n}\n\n.elements-disclosure li.elements-drag-over .selection {\n  display: block;\n  margin-top: -2px;\n  border-top: 2px solid var(--sys-color-primary);\n}\n\n.elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) .selection {\n  background-color: var(--sys-color-neutral-container);\n}\n\n.elements-disclosure li.hovered:not(.selected) .selection {\n  display: block;\n  left: 3px;\n  right: 3px;\n  background-color: var(--sys-color-state-hover-on-subtle);\n  border-radius: 5px;\n}\n\n.elements-disclosure li .webkit-html-tag.close {\n  margin-left: -12px;\n}\n\n.elements-disclosure .elements-tree-outline.hide-selection-when-blurred .selected:focus-visible .highlight > * {\n  background: var(--sys-color-state-focus-highlight);\n  border-radius: 2px;\n  outline: 2px solid var(--sys-color-state-focus-ring);\n}\n\n.elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) li.selected:focus .selection {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.elements-disclosure ol {\n  list-style-type: none;\n  /** Keep it in sync with ElementsTreeElements.updateDecorations **/\n  padding-inline-start: 12px;\n  margin: 0;\n}\n\n.elements-disclosure ol.children {\n  display: none;\n  min-width: 100%;\n}\n\n.elements-disclosure ol.children.expanded {\n  display: inline-block;\n}\n\n.elements-disclosure > ol {\n  position: relative;\n  margin: 0;\n  min-width: 100%;\n  min-height: 100%;\n  padding-left: 2px;\n}\n\n.elements-disclosure li.in-clipboard .highlight {\n  outline: 1px dotted var(--sys-color-divider);\n}\n\n.elements-tree-outline ol.shadow-root-deep {\n  background-color: transparent;\n}\n\n.elements-tree-editor {\n  box-shadow: var(--drop-shadow);\n  margin-right: 4px;\n}\n\nbutton,\ninput,\nselect {\n  font-family: inherit;\n  font-size: inherit;\n}\n\n.elements-gutter-decoration {\n  position: absolute;\n  top: 3px;\n  left: 2px;\n  height: 9px;\n  width: 9px;\n  border-radius: 5px;\n  border: 1px solid var(--sys-color-orange-bright);\n  background-color: var(--sys-color-orange-bright);\n}\n\n.elements-gutter-decoration.elements-has-decorated-children {\n  opacity: 50%;\n}\n\n.add-attribute {\n  margin-left: 1px;\n  margin-right: 1px;\n  white-space: nowrap;\n}\n\n.elements-tree-nowrap,\n.elements-tree-nowrap .li {\n  white-space: pre !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.elements-disclosure .elements-tree-nowrap li {\n  word-wrap: normal;\n}\n/* DOM update highlight */\n@keyframes dom-update-highlight-animation {\n  from {\n    background-color: var(--sys-color-token-tag);\n    color: var(--sys-color-cdt-base-container);\n  }\n\n  80% {\n    background-color: var(--sys-color-token-meta);\n  }\n\n  to {\n    background-color: inherit;\n  }\n}\n\n@keyframes dom-update-highlight-animation-dark {\n  from {\n    background-color: var(--sys-color-token-tag);\n    color: var(--sys-color-cdt-base-container);\n  }\n\n  80% {\n    background-color: var(--sys-color-cdt-base-container);\n    color: inherit;\n  }\n\n  to {\n    background-color: inherit;\n  }\n}\n\n.dom-update-highlight {\n  animation: dom-update-highlight-animation 1.4s 1 cubic-bezier(0, 0, 0.2, 1);\n  border-radius: 2px;\n}\n\n:host-context(.theme-with-dark-background) .dom-update-highlight {\n  animation: dom-update-highlight-animation-dark 1.4s 1 cubic-bezier(0, 0, 0.2, 1);\n}\n\n.elements-disclosure.single-node li {\n  padding-left: 2px;\n}\n\n.elements-tree-shortcut-title,\n.elements-tree-shortcut-link {\n  color: var(--sys-color-token-subtle);\n}\n\n.elements-disclosure .gutter-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 15px;\n  height: 15px;\n  z-index: 1;\n}\n\n.elements-hide-gutter .gutter-container {\n  display: none;\n}\n\n.gutter-container > devtools-icon {\n  display: block;\n  visibility: hidden;\n  position: relative;\n  left: -1px;\n}\n\n.elements-disclosure li.selected .gutter-container:not(.has-decorations) > devtools-icon {\n  visibility: visible;\n}\n/** Guide line */\n\nli.hovered:not(.always-parent) + ol.children,\n.elements-tree-outline ol.shadow-root,\nli.selected:not(.always-parent) + ol.children {\n  background: linear-gradient(to right, var(--override-indentation-level-border-color), var(--override-indentation-level-border-color) 0.5px, transparent 0);\n  background-position-x: 5px;\n  background-size: 0.5px 100%;\n  background-repeat: no-repeat;\n}\n\nli.selected:not(.always-parent) + ol.children {\n  --override-indentation-level-border-color: var(--sys-color-divider) !important; /* stylelint-disable-line declaration-no-important */\n}\n\nli.hovered:not(.always-parent) + ol.children:not(.shadow-root) {\n  --override-indentation-level-border-color: color-mix(in sRGB, var(--ref-palette-neutral0) 10%, transparent);\n}\n\n.elements-tree-outline ol.shadow-root {\n  --override-indentation-level-border-color: var(--ref-palette-orange95);\n}\n\n@media (forced-colors: active) {\n  .elements-disclosure li.parent::before {\n    forced-color-adjust: none;\n    background-color: ButtonText !important; /* stylelint-disable-line declaration-no-important */\n  }\n\n  .elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) li.selected .selected-hint::before {\n    opacity: unset;\n  }\n\n  .elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) .selection,\n  .elements-disclosure li.hovered:not(.selected) .selection,\n  .elements-disclosure .elements-tree-outline:not(.hide-selection-when-blurred) li.selected:focus .selection {\n    forced-color-adjust: none;\n    background: canvas !important; /* stylelint-disable-line declaration-no-important */\n    border: 1px solid Highlight !important; /* stylelint-disable-line declaration-no-important */\n  }\n\n  .gutter-container > devtools-icon {\n    forced-color-adjust: none;\n  }\n}\n\n.violating-element {\n  background-image: var(--image-file-errorWave);\n  background-repeat: repeat-x;\n  background-position: bottom;\n  padding-bottom: 1px;\n}\n\n/*# sourceURL=elementsTreeOutline.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);