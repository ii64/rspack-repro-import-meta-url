(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ElementsTreeExpandButton_js_map"],{

/***/ "./panels/elements/components/ElementsTreeExpandButton.js.map":
/*!********************************************************************!*\
  !*** ./panels/elements/components/ElementsTreeExpandButton.js.map ***!
  \********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ElementsTreeExpandButton.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/ElementsTreeExpandButton.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,4BAA4B,CAAC;AACnD,OAAO,KAAK,UAAU,MAAM,mDAAmD,CAAC;AAChF,OAAO,KAAK,OAAO,MAAM,kCAAkC,CAAC;AAC5D,OAAO,KAAK,aAAa,MAAM,8CAA8C,CAAC;AAE9E,OAAO,8BAA8B,MAAM,mCAAmC,CAAC;AAE/E,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,MAAM,EAAE,QAAQ;CACjB,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,wDAAwD,EAAE,SAAS,CAAC,CAAC;AAC9G,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAKtE,MAAM,OAAO,wBAAyB,SAAQ,WAAW;IACvD,MAAM,CAAU,UAAU,GAAG,OAAO,CAAC,OAAO,CAAA,sCAAsC,CAAC;IAC1E,OAAO,GAAG,IAAI,CAAC,YAAY,CAAC,EAAC,IAAI,EAAE,MAAM,EAAC,CAAC,CAAC;IAErD,aAAa,GAA8B,GAAG,EAAE,GAAE,CAAC,CAAC;IAEpD,IAAI,IAAI,CAAC,IAAkC;QACzC,IAAI,CAAC,aAAa,GAAG,IAAI,CAAC,YAAY,CAAC;QACvC,IAAI,CAAC,OAAO,EAAE,CAAC;IACjB,CAAC;IAED,OAAO;QACL,IAAI,CAAC,OAAO,EAAE,CAAC;IACjB,CAAC;IAED,iBAAiB;QACf,IAAI,CAAC,OAAO,CAAC,kBAAkB,GAAG,CAAC,8BAA8B,CAAC,CAAC;IACrE,CAAC;IAED,OAAO;QACL,mBAAmB;QACnB,6EAA6E;QAC7E,wFAAwF;QACxF,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,IAAI,CAAA;;;qBAGV,UAAU,CAAC,SAAS,CAAC,MAAM,CAAC;gBACjC,aAAa,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC,KAAK,CAAC,EAAC,KAAK,EAAE,IAAI,EAAC,CAAC;iBAClD,IAAI,CAAC,aAAa,KAAK,UAAU,CAAC,IAAI,CAAC,IAAI,CAAC,UAAU,6BAA6B,UAAU,CAAC,IAAI,CAAC,IAAI,CAAC,UAAU,YAAY,EACzI,IAAI,CAAC,OAAO,EAAE,EAAC,IAAI,EAAE,IAAI,EAAC,CAAC,CAAC;QAC9B,kBAAkB;IACpB,CAAC;;AAGH,cAAc,CAAC,MAAM,CAAC,sCAAsC,EAAE,wBAAwB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../../core/i18n/i18n.js';\\nimport * as IconButton from '../../../ui/components/icon_button/icon_button.js';\\nimport * as LitHtml from '../../../ui/lit-html/lit-html.js';\\nimport * as VisualLogging from '../../../ui/visual_logging/visual_logging.js';\\n\\nimport elementsTreeExpandButtonStyles from './elementsTreeExpandButton.css.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Aria label for a button expanding collapsed subtree\\n   */\\n  expand: 'Expand',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/elements/components/ElementsTreeExpandButton.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport interface ElementsTreeExpandButtonData {\\n  clickHandler: (event?: Event) => void;\\n}\\nexport class ElementsTreeExpandButton extends HTMLElement {\\n  static readonly litTagName = LitHtml.literal`devtools-elements-tree-expand-button`;\\n  readonly #shadow = this.attachShadow({mode: 'open'});\\n\\n  #clickHandler: ((event?: Event) => void) = () => {};\\n\\n  set data(data: ElementsTreeExpandButtonData) {\\n    this.#clickHandler = data.clickHandler;\\n    this.#update();\\n  }\\n\\n  #update(): void {\\n    this.#render();\\n  }\\n\\n  connectedCallback(): void {\\n    this.#shadow.adoptedStyleSheets = [elementsTreeExpandButtonStyles];\\n  }\\n\\n  #render(): void {\\n    // clang-format off\\n    // This button's innerText will be tested by e2e test and blink layout tests.\\n    // It can't have any other characters like '\\\\n' or space, otherwise it will break tests.\\n    LitHtml.render(LitHtml.html`<button\\n        class=\\\"expand-button\\\"\\n        tabindex=\\\"-1\\\"\\n        aria-label=${i18nString(UIStrings.expand)}\\n        jslog=${VisualLogging.action('expand').track({click: true})}\\n        @click=${this.#clickHandler}><${IconButton.Icon.Icon.litTagName} name=\\\"dots-horizontal\\\"></${IconButton.Icon.Icon.litTagName}></button>`,\\n      this.#shadow, {host: this});\\n    // clang-format on\\n  }\\n}\\n\\ncustomElements.define('devtools-elements-tree-expand-button', ElementsTreeExpandButton);\\n\\ndeclare global {\\n  interface HTMLElementTagNameMap {\\n    'devtools-elements-tree-expand-button': ElementsTreeExpandButton;\\n  }\\n}\\n\"]}");

/***/ })

}]);