(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_MixedContentIssue_js_map"],{

/***/ "./models/issues_manager/MixedContentIssue.js.map":
/*!********************************************************!*\
  !*** ./models/issues_manager/MixedContentIssue.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"MixedContentIssue.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/MixedContentIssue.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAIhD,OAAO,EAAC,KAAK,EAA2B,MAAM,YAAY,CAAC;AAG3D,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,sBAAsB,EAAE,0BAA0B;CACnD,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,4CAA4C,EAAE,SAAS,CAAC,CAAC;AAClG,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,OAAO,iBAAkB,SAAQ,KAAK;IAC1C,aAAa,CAA2C;IAExD,YAAY,YAAsD,EAAE,WAAwC;QAC1G,KAAK,iFAAuD,WAAW,CAAC,CAAC;QACzE,IAAI,CAAC,aAAa,GAAG,YAAY,CAAC;IACpC,CAAC;IAEQ,QAAQ;QACf,IAAI,IAAI,CAAC,aAAa,CAAC,OAAO,EAAE,CAAC;YAC/B,OAAO,CAAC,IAAI,CAAC,aAAa,CAAC,OAAO,CAAC,CAAC;QACtC,CAAC;QACD,OAAO,EAAE,CAAC;IACZ,CAAC;IAED,UAAU;QACR,OAAO,IAAI,CAAC,aAAa,CAAC;IAC5B,CAAC;IAED,WAAW;QACT,uDAAkC;IACpC,CAAC;IAED,cAAc;QACZ,OAAO;YACL,IAAI,EAAE,iBAAiB;YACvB,KAAK,EACD,CAAC,EAAC,IAAI,EAAE,wCAAwC,EAAE,SAAS,EAAE,UAAU,CAAC,SAAS,CAAC,sBAAsB,CAAC,EAAC,CAAC;SAChH,CAAC;IACJ,CAAC;IAED,UAAU;QACR,OAAO,IAAI,CAAC,SAAS,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;IAC5C,CAAC;IAED,OAAO;QACL,QAAQ,IAAI,CAAC,aAAa,CAAC,gBAAgB,EAAE,CAAC;YAC5C;gBACE,iDAA6B;YAC/B;gBACE,6CAA2B;YAC7B;gBACE,iDAA6B;QACjC,CAAC;IACH,CAAC;IAED,MAAM,CAAC,kBAAkB,CAAC,WAAwC,EAAE,cAA8C;QAEhH,MAAM,mBAAmB,GAAG,cAAc,CAAC,OAAO,CAAC,wBAAwB,CAAC;QAC5E,IAAI,CAAC,mBAAmB,EAAE,CAAC;YACzB,OAAO,CAAC,IAAI,CAAC,+CAA+C,CAAC,CAAC;YAC9D,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,IAAI,iBAAiB,CAAC,mBAAmB,EAAE,WAAW,CAAC,CAAC,CAAC;IACnE,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as Protocol from '../../generated/protocol.js';\\n\\nimport {Issue, IssueCategory, IssueKind} from './Issue.js';\\nimport {type MarkdownIssueDescription} from './MarkdownIssueDescription.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Label for the link for Mixed Content Issues\\n   */\\n  preventingMixedContent: 'Preventing mixed content',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('models/issues_manager/MixedContentIssue.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class MixedContentIssue extends Issue {\\n  #issueDetails: Protocol.Audits.MixedContentIssueDetails;\\n\\n  constructor(issueDetails: Protocol.Audits.MixedContentIssueDetails, issuesModel: SDK.IssuesModel.IssuesModel) {\\n    super(Protocol.Audits.InspectorIssueCode.MixedContentIssue, issuesModel);\\n    this.#issueDetails = issueDetails;\\n  }\\n\\n  override requests(): Iterable<Protocol.Audits.AffectedRequest> {\\n    if (this.#issueDetails.request) {\\n      return [this.#issueDetails.request];\\n    }\\n    return [];\\n  }\\n\\n  getDetails(): Protocol.Audits.MixedContentIssueDetails {\\n    return this.#issueDetails;\\n  }\\n\\n  getCategory(): IssueCategory {\\n    return IssueCategory.MixedContent;\\n  }\\n\\n  getDescription(): MarkdownIssueDescription {\\n    return {\\n      file: 'mixedContent.md',\\n      links:\\n          [{link: 'https://web.dev/what-is-mixed-content/', linkTitle: i18nString(UIStrings.preventingMixedContent)}],\\n    };\\n  }\\n\\n  primaryKey(): string {\\n    return JSON.stringify(this.#issueDetails);\\n  }\\n\\n  getKind(): IssueKind {\\n    switch (this.#issueDetails.resolutionStatus) {\\n      case Protocol.Audits.MixedContentResolutionStatus.MixedContentAutomaticallyUpgraded:\\n        return IssueKind.Improvement;\\n      case Protocol.Audits.MixedContentResolutionStatus.MixedContentBlocked:\\n        return IssueKind.PageError;\\n      case Protocol.Audits.MixedContentResolutionStatus.MixedContentWarning:\\n        return IssueKind.Improvement;\\n    }\\n  }\\n\\n  static fromInspectorIssue(issuesModel: SDK.IssuesModel.IssuesModel, inspectorIssue: Protocol.Audits.InspectorIssue):\\n      MixedContentIssue[] {\\n    const mixedContentDetails = inspectorIssue.details.mixedContentIssueDetails;\\n    if (!mixedContentDetails) {\\n      console.warn('Mixed content issue without details received.');\\n      return [];\\n    }\\n    return [new MixedContentIssue(mixedContentDetails, issuesModel)];\\n  }\\n}\\n\"]}");

/***/ })

}]);