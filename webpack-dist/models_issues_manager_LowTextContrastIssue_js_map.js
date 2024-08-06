(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_LowTextContrastIssue_js_map"],{

/***/ "./models/issues_manager/LowTextContrastIssue.js.map":
/*!***********************************************************!*\
  !*** ./models/issues_manager/LowTextContrastIssue.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"LowTextContrastIssue.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/LowTextContrastIssue.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAIhD,OAAO,EAAC,KAAK,EAA2B,MAAM,YAAY,CAAC;AAG3D,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,6BAA6B,EAAE,kCAAkC;CAClE,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,+CAA+C,EAAE,SAAS,CAAC,CAAC;AACrG,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,OAAO,oBAAqB,SAAQ,KAAK;IAC7C,aAAa,CAA8C;IAE3D,YAAY,YAAyD,EAAE,WAAwC;QAC7G,KAAK,CAAC,sBAAsB,EAAE,WAAW,CAAC,CAAC;QAC3C,IAAI,CAAC,aAAa,GAAG,YAAY,CAAC;IACpC,CAAC;IAED,UAAU;QACR,sGAAsG;QACtG,8CAA8C;QAC9C,OAAO,GAAG,IAAI,CAAC,IAAI,EAAE,KAAK,IAAI,CAAC,aAAa,CAAC,eAAe,GAAG,CAAC;IAClE,CAAC;IAED,WAAW;QACT,6DAAqC;IACvC,CAAC;IAED,OAAO;QACL,OAAO,IAAI,CAAC,aAAa,CAAC;IAC5B,CAAC;IAED,cAAc;QACZ,OAAO;YACL,IAAI,EAAE,oBAAoB;YAC1B,KAAK,EAAE;gBACL;oBACE,IAAI,EAAE,mDAAmD;oBACzD,SAAS,EAAE,UAAU,CAAC,SAAS,CAAC,6BAA6B,CAAC;iBAC/D;aACF;SACF,CAAC;IACJ,CAAC;IAED,OAAO;QACL,iDAA6B;IAC/B,CAAC;IAED,MAAM,CAAC,kBAAkB,CAAC,WAAwC,EAAE,cAA8C;QAEhH,MAAM,2BAA2B,GAAG,cAAc,CAAC,OAAO,CAAC,2BAA2B,CAAC;QACvF,IAAI,CAAC,2BAA2B,EAAE,CAAC;YACjC,OAAO,CAAC,IAAI,CAAC,iDAAiD,CAAC,CAAC;YAChE,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,IAAI,oBAAoB,CAAC,2BAA2B,EAAE,WAAW,CAAC,CAAC,CAAC;IAC9E,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\n\\nimport {Issue, IssueCategory, IssueKind} from './Issue.js';\\nimport {type MarkdownIssueDescription} from './MarkdownIssueDescription.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Link title for the Low Text Contrast issue in the Issues panel\\n   */\\n  colorAndContrastAccessibility: 'Color and contrast accessibility',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('models/issues_manager/LowTextContrastIssue.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class LowTextContrastIssue extends Issue {\\n  #issueDetails: Protocol.Audits.LowTextContrastIssueDetails;\\n\\n  constructor(issueDetails: Protocol.Audits.LowTextContrastIssueDetails, issuesModel: SDK.IssuesModel.IssuesModel) {\\n    super('LowTextContrastIssue', issuesModel);\\n    this.#issueDetails = issueDetails;\\n  }\\n\\n  primaryKey(): string {\\n    // We intend to keep only one issue per element so other issues for the element will be discarded even\\n    // if the issue content is slightly different.\\n    return `${this.code()}-(${this.#issueDetails.violatingNodeId})`;\\n  }\\n\\n  getCategory(): IssueCategory {\\n    return IssueCategory.LowTextContrast;\\n  }\\n\\n  details(): Protocol.Audits.LowTextContrastIssueDetails {\\n    return this.#issueDetails;\\n  }\\n\\n  getDescription(): MarkdownIssueDescription {\\n    return {\\n      file: 'LowTextContrast.md',\\n      links: [\\n        {\\n          link: 'https://web.dev/color-and-contrast-accessibility/',\\n          linkTitle: i18nString(UIStrings.colorAndContrastAccessibility),\\n        },\\n      ],\\n    };\\n  }\\n\\n  getKind(): IssueKind {\\n    return IssueKind.Improvement;\\n  }\\n\\n  static fromInspectorIssue(issuesModel: SDK.IssuesModel.IssuesModel, inspectorIssue: Protocol.Audits.InspectorIssue):\\n      LowTextContrastIssue[] {\\n    const lowTextContrastIssueDetails = inspectorIssue.details.lowTextContrastIssueDetails;\\n    if (!lowTextContrastIssueDetails) {\\n      console.warn('LowTextContrast issue without details received.');\\n      return [];\\n    }\\n    return [new LowTextContrastIssue(lowTextContrastIssueDetails, issuesModel)];\\n  }\\n}\\n\"]}");

/***/ })

}]);