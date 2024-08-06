(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_components_insights_SidebarInsight_js_map"],{

/***/ "./panels/timeline/components/insights/SidebarInsight.js.map":
/*!*******************************************************************!*\
  !*** ./panels/timeline/components/insights/SidebarInsight.js.map ***!
  \*******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SidebarInsight.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/panels/timeline/components/insights/SidebarInsight.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,8CAA8C,CAAC;AACjF,OAAO,KAAK,OAAO,MAAM,qCAAqC,CAAC;AAG/D,OAAO,oBAAoB,MAAM,yBAAyB,CAAC;AAO3D,MAAM,OAAO,gBAAiB,SAAQ,KAAK;IAI9B;IAAqB;IACrB;IAJX,MAAM,CAAU,SAAS,GAAG,kBAAkB,CAAC;IAE/C,YACW,IAAY,EAAS,YAAoB,EACzC,eAA+D;QACxE,KAAK,CAAC,gBAAgB,CAAC,SAAS,EAAE,EAAC,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QAF1D,SAAI,GAAJ,IAAI,CAAQ;QAAS,iBAAY,GAAZ,YAAY,CAAQ;QACzC,oBAAe,GAAf,eAAe,CAAgD;IAE1E,CAAC;;AAGH,MAAM,OAAO,kBAAmB,SAAQ,KAAK;IAC3C,MAAM,CAAU,SAAS,GAAG,oBAAoB,CAAC;IACjD;QACE,KAAK,CAAC,kBAAkB,CAAC,SAAS,EAAE,EAAC,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;IACvE,CAAC;;AAUH,MAAM,OAAO,cAAe,SAAQ,WAAW;IAC7C,MAAM,CAAU,UAAU,GAAG,OAAO,CAAC,OAAO,CAAA,sCAAsC,CAAC;IAC1E,OAAO,GAAG,IAAI,CAAC,YAAY,CAAC,EAAC,IAAI,EAAE,MAAM,EAAC,CAAC,CAAC;IAC5C,YAAY,GAAG,IAAI,CAAC,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IAChD,aAAa,GAAW,EAAE,CAAC;IAC3B,SAAS,GAAY,KAAK,CAAC;IAE3B,IAAI,IAAI,CAAC,IAAoB;QAC3B,IAAI,CAAC,aAAa,GAAG,IAAI,CAAC,KAAK,CAAC;QAChC,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC,QAAQ,CAAC;QAC/B,KAAK,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,IAAI,EAAE,IAAI,CAAC,YAAY,CAAC,CAAC;IAChF,CAAC;IAED,iBAAiB;QACf,IAAI,CAAC,OAAO,CAAC,kBAAkB,GAAG,CAAC,oBAAoB,CAAC,CAAC;QACzD,KAAK,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,IAAI,EAAE,IAAI,CAAC,YAAY,CAAC,CAAC;IAChF,CAAC;IAED,OAAO;QACL,IAAI,MAA8B,CAAC;QACnC,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,CAAC;YACpB,MAAM,GAAG,OAAO,CAAC,IAAI,CAAA;;wCAEa,IAAI,CAAC,aAAa;eAC3C,CAAC;QACZ,CAAC;aAAM,CAAC;YACN,MAAM,GAAG,OAAO,CAAC,IAAI,CAAA;;wCAEa,IAAI,CAAC,aAAa;;;eAG3C,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,MAAM,CAAC,MAAM,EAAE,IAAI,CAAC,OAAO,EAAE,EAAC,IAAI,EAAE,IAAI,EAAC,CAAC,CAAC;IACrD,CAAC;;AASH,cAAc,CAAC,MAAM,CAAC,sCAAsC,EAAE,cAAc,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ComponentHelpers from '../../../../ui/components/helpers/helpers.js';\\nimport * as LitHtml from '../../../../ui/lit-html/lit-html.js';\\nimport type * as Overlays from '../../overlays/overlays.js';\\n\\nimport sidebarInsightStyles from './sidebarInsight.css.js';\\n\\nexport interface InsightDetails {\\n  title: string;\\n  expanded: boolean;\\n}\\n\\nexport class InsightActivated extends Event {\\n  static readonly eventName = 'insightactivated';\\n\\n  constructor(\\n      public name: string, public navigationId: string,\\n      public createOverlayFn: () => Array<Overlays.Overlays.TimelineOverlay>) {\\n    super(InsightActivated.eventName, {bubbles: true, composed: true});\\n  }\\n}\\n\\nexport class InsightDeactivated extends Event {\\n  static readonly eventName = 'insightdeactivated';\\n  constructor() {\\n    super(InsightDeactivated.eventName, {bubbles: true, composed: true});\\n  }\\n}\\n\\ndeclare global {\\n  interface GlobalEventHandlersEventMap {\\n    [InsightActivated.eventName]: InsightActivated;\\n    [InsightDeactivated.eventName]: InsightDeactivated;\\n  }\\n}\\n\\nexport class SidebarInsight extends HTMLElement {\\n  static readonly litTagName = LitHtml.literal`devtools-performance-sidebar-insight`;\\n  readonly #shadow = this.attachShadow({mode: 'open'});\\n  readonly #boundRender = this.#render.bind(this);\\n  #insightTitle: string = '';\\n  #expanded: boolean = false;\\n\\n  set data(data: InsightDetails) {\\n    this.#insightTitle = data.title;\\n    this.#expanded = data.expanded;\\n    void ComponentHelpers.ScheduledRender.scheduleRender(this, this.#boundRender);\\n  }\\n\\n  connectedCallback(): void {\\n    this.#shadow.adoptedStyleSheets = [sidebarInsightStyles];\\n    void ComponentHelpers.ScheduledRender.scheduleRender(this, this.#boundRender);\\n  }\\n\\n  #render(): void {\\n    let output: LitHtml.TemplateResult;\\n    if (!this.#expanded) {\\n      output = LitHtml.html`\\n        <div class=\\\"insight closed\\\">\\n            <h3 class=\\\"insight-title\\\">${this.#insightTitle}</h3>\\n        </div>`;\\n    } else {\\n      output = LitHtml.html`\\n        <div class=\\\"insight\\\">\\n            <h3 class=\\\"insight-title\\\">${this.#insightTitle}</h3>\\n            <slot name=\\\"insight-description\\\"></slot>\\n            <slot name=\\\"insight-content\\\"></slot>\\n        </div>`;\\n    }\\n    LitHtml.render(output, this.#shadow, {host: this});\\n  }\\n}\\n\\ndeclare global {\\n  interface HTMLElementTagNameMap {\\n    'devtools-performance-sidebar-insight': SidebarInsight;\\n  }\\n}\\n\\ncustomElements.define('devtools-performance-sidebar-insight', SidebarInsight);\\n\"]}");

/***/ })

}]);