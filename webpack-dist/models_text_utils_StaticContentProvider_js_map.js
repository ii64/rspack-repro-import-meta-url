(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_text_utils_StaticContentProvider_js_map"],{

/***/ "./models/text_utils/StaticContentProvider.js.map":
/*!********************************************************!*\
  !*** ./models/text_utils/StaticContentProvider.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"StaticContentProvider.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/text_utils/StaticContentProvider.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAK7B,OAAO,EAAC,WAAW,EAA0B,MAAM,kBAAkB,CAAC;AAMtE,OAAO,EAAC,0BAA0B,EAAC,MAAM,gBAAgB,CAAC;AAE1D,MAAM,OAAO,qBAAqB;IACvB,WAAW,CAAkC;IAC7C,YAAY,CAAmC;IAC/C,YAAY,CAAoC;IAEzD,YACI,UAA2C,EAAE,WAA6C,EAC1F,WAA8C;QAChD,IAAI,CAAC,WAAW,GAAG,UAAU,CAAC;QAC9B,IAAI,CAAC,YAAY,GAAG,WAAW,CAAC;QAChC,IAAI,CAAC,YAAY,GAAG,WAAW,CAAC;IAClC,CAAC;IAED,MAAM,CAAC,UAAU,CACb,UAA2C,EAAE,WAA6C,EAC1F,OAAe;QACjB,MAAM,WAAW,GAAG,GAAyB,EAAE,CAC3C,OAAO,CAAC,OAAO,CAAC,IAAI,WAAW,CAAC,OAAO,EAAE,cAAc,CAAC,KAAK,EAAE,WAAW,CAAC,iBAAiB,EAAE,CAAC,CAAC,CAAC;QACrG,OAAO,IAAI,qBAAqB,CAAC,UAAU,EAAE,WAAW,EAAE,WAAW,CAAC,CAAC;IACzE,CAAC;IAED,UAAU;QACR,OAAO,IAAI,CAAC,WAAW,CAAC;IAC1B,CAAC;IAED,WAAW;QACT,OAAO,IAAI,CAAC,YAAY,CAAC;IAC3B,CAAC;IAED,cAAc;QACZ,OAAO,IAAI,CAAC,YAAY,EAAE,CAAC,IAAI,CAAC,WAAW,CAAC,iBAAiB,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC,CAAC;IACjF,CAAC;IAED,kBAAkB;QAChB,OAAO,IAAI,CAAC,YAAY,EAAE,CAAC;IAC7B,CAAC;IAED,KAAK,CAAC,eAAe,CAAC,KAAa,EAAE,aAAsB,EAAE,OAAgB;QAC3E,MAAM,WAAW,GAAG,MAAM,IAAI,CAAC,kBAAkB,EAAE,CAAC;QACpD,OAAO,0BAA0B,CAAC,WAAW,EAAE,KAAK,EAAE,aAAa,EAAE,OAAO,CAAC,CAAC;IAChF,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\nimport type * as Platform from '../../core/platform/platform.js';\\n\\nimport {ContentData, type ContentDataOrError} from './ContentData.js';\\nimport {\\n  type ContentProvider,\\n  type DeferredContent,\\n  type SearchMatch,\\n} from './ContentProvider.js';\\nimport {performSearchInContentData} from './TextUtils.js';\\n\\nexport class StaticContentProvider implements ContentProvider {\\n  readonly #contentURL: Platform.DevToolsPath.UrlString;\\n  readonly #contentType: Common.ResourceType.ResourceType;\\n  readonly #lazyContent: () => Promise<ContentDataOrError>;\\n\\n  constructor(\\n      contentURL: Platform.DevToolsPath.UrlString, contentType: Common.ResourceType.ResourceType,\\n      lazyContent: () => Promise<ContentDataOrError>) {\\n    this.#contentURL = contentURL;\\n    this.#contentType = contentType;\\n    this.#lazyContent = lazyContent;\\n  }\\n\\n  static fromString(\\n      contentURL: Platform.DevToolsPath.UrlString, contentType: Common.ResourceType.ResourceType,\\n      content: string): StaticContentProvider {\\n    const lazyContent = (): Promise<ContentData> =>\\n        Promise.resolve(new ContentData(content, /* isBase64 */ false, contentType.canonicalMimeType()));\\n    return new StaticContentProvider(contentURL, contentType, lazyContent);\\n  }\\n\\n  contentURL(): Platform.DevToolsPath.UrlString {\\n    return this.#contentURL;\\n  }\\n\\n  contentType(): Common.ResourceType.ResourceType {\\n    return this.#contentType;\\n  }\\n\\n  requestContent(): Promise<DeferredContent> {\\n    return this.#lazyContent().then(ContentData.asDeferredContent.bind(undefined));\\n  }\\n\\n  requestContentData(): Promise<ContentDataOrError> {\\n    return this.#lazyContent();\\n  }\\n\\n  async searchInContent(query: string, caseSensitive: boolean, isRegex: boolean): Promise<SearchMatch[]> {\\n    const contentData = await this.requestContentData();\\n    return performSearchInContentData(contentData, query, caseSensitive, isRegex);\\n  }\\n}\\n\"]}");

/***/ })

}]);