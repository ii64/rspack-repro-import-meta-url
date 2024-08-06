(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedSourcesView_js_map"],{

/***/ "./panels/issues/AffectedSourcesView.js.map":
/*!**************************************************!*\
  !*** ./panels/issues/AffectedSourcesView.js.map ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AffectedSourcesView.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/issues/AffectedSourcesView.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAGhD,OAAO,KAAK,UAAU,MAAM,2CAA2C,CAAC;AACxE,OAAO,KAAK,aAAa,MAAM,2CAA2C,CAAC;AAE3E,OAAO,EAAC,qBAAqB,EAAC,MAAM,4BAA4B,CAAC;AAEjE,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,QAAQ,EAAE,8CAA8C;CACzD,CAAC;AAEF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,sCAAsC,EAAE,SAAS,CAAC,CAAC;AAC5F,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,OAAO,mBAAoB,SAAQ,qBAAqB;IAC5D,sBAAsB,CAAC,eAA6D;QAClF,IAAI,KAAK,GAAG,CAAC,CAAC;QACd,KAAK,MAAM,MAAM,IAAI,eAAe,EAAE,CAAC;YACrC,IAAI,CAAC,qBAAqB,CAAC,MAAM,CAAC,CAAC;YACnC,KAAK,EAAE,CAAC;QACV,CAAC;QACD,IAAI,CAAC,2BAA2B,CAAC,KAAK,CAAC,CAAC;IAC1C,CAAC;IAES,wBAAwB,CAAC,KAAa;QAC9C,OAAO,UAAU,CAAC,SAAS,CAAC,QAAQ,EAAE,EAAC,CAAC,EAAE,KAAK,EAAC,CAAC,CAAC;IACpD,CAAC;IAED,qBAAqB,CAAC,EAAC,GAAG,EAAE,UAAU,EAAE,YAAY,EAAqC;QACvF,MAAM,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,IAAI,CAAC,CAAC;QACjD,qGAAqG;QACrG,wEAAwE;QACxE,MAAM,mBAAmB,GAAG,EAAC,YAAY,EAAE,UAAU,EAAE,OAAO,EAAE,IAAI,EAAE,gBAAgB,EAAE,KAAK,EAAE,gBAAgB,EAAE,CAAC,EAAC,CAAC;QACpH,iEAAiE;QACjE,4DAA4D;QAC5D,iEAAiE;QACjE,gDAAgD;QAChD,2FAA2F;QAC3F,MAAM,aAAa,GACf,UAAU,CAAC,SAAS,CAAC,SAAS,CAAC,UAAU,CAAC,GAAsC,EAAE,mBAAmB,CAAC,CAAC;QAC3G,aAAa,CAAC,YAAY,CAAC,OAAO,EAAE,GAAG,aAAa,CAAC,IAAI,CAAC,iBAAiB,CAAC,CAAC,KAAK,CAAC,EAAC,KAAK,EAAE,IAAI,EAAC,CAAC,EAAE,CAAC,CAAC;QACrG,WAAW,CAAC,WAAW,CAAC,aAAa,CAAC,CAAC;QACvC,MAAM,UAAU,GAAG,QAAQ,CAAC,aAAa,CAAC,IAAI,CAAC,CAAC;QAChD,UAAU,CAAC,SAAS,CAAC,GAAG,CAAC,0BAA0B,CAAC,CAAC;QACrD,UAAU,CAAC,WAAW,CAAC,WAAW,CAAC,CAAC;QACpC,IAAI,CAAC,iBAAiB,CAAC,WAAW,CAAC,UAAU,CAAC,CAAC;IACjD,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,KAAK,EAAE,CAAC;QACb,IAAI,CAAC,sBAAsB,CAAC,IAAI,CAAC,KAAK,CAAC,OAAO,EAAE,CAAC,CAAC;IACpD,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as Platform from '../../core/platform/platform.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\nimport * as Components from '../../ui/legacy/components/utils/utils.js';\\nimport * as VisualLogging from '../../ui/visual_logging/visual_logging.js';\\n\\nimport {AffectedResourcesView} from './AffectedResourcesView.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Singular or Plural label for number of affected sources (consisting of (source) file name + line number) in issue view\\n   */\\n  nSources: '{n, plural, =1 {# source} other {# sources}}',\\n};\\n\\nconst str_ = i18n.i18n.registerUIStrings('panels/issues/AffectedSourcesView.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class AffectedSourcesView extends AffectedResourcesView {\\n  #appendAffectedSources(affectedSources: Iterable<Protocol.Audits.SourceCodeLocation>): void {\\n    let count = 0;\\n    for (const source of affectedSources) {\\n      this.#appendAffectedSource(source);\\n      count++;\\n    }\\n    this.updateAffectedResourceCount(count);\\n  }\\n\\n  protected getResourceNameWithCount(count: number): Platform.UIString.LocalizedString {\\n    return i18nString(UIStrings.nSources, {n: count});\\n  }\\n\\n  #appendAffectedSource({url, lineNumber, columnNumber}: Protocol.Audits.SourceCodeLocation): void {\\n    const cellElement = document.createElement('td');\\n    // TODO(chromium:1072331): Check feasibility of plumping through scriptId for `linkifyScriptLocation`\\n    //                         to support source maps and formatted scripts.\\n    const linkifierURLOptions = {columnNumber, lineNumber, tabStop: true, showColumnNumber: false, inlineFrameIndex: 0};\\n    // An element created with linkifyURL can subscribe to the events\\n    // 'click' neither 'keydown' if that key is the 'Enter' key.\\n    // Also, this element has a context menu, so we should be able to\\n    // track when the user use the context menu too.\\n    // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.\\n    const anchorElement =\\n        Components.Linkifier.Linkifier.linkifyURL(url as Platform.DevToolsPath.UrlString, linkifierURLOptions);\\n    anchorElement.setAttribute('jslog', `${VisualLogging.link('source-location').track({click: true})}`);\\n    cellElement.appendChild(anchorElement);\\n    const rowElement = document.createElement('tr');\\n    rowElement.classList.add('affected-resource-source');\\n    rowElement.appendChild(cellElement);\\n    this.affectedResources.appendChild(rowElement);\\n  }\\n\\n  update(): void {\\n    this.clear();\\n    this.#appendAffectedSources(this.issue.sources());\\n  }\\n}\\n\"]}");

/***/ })

}]);