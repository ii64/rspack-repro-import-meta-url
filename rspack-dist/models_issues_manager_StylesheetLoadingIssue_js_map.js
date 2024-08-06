(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_StylesheetLoadingIssue_js_map"], {
"./models/issues_manager/StylesheetLoadingIssue.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"StylesheetLoadingIssue.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/StylesheetLoadingIssue.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAK7B,OAAO,EAAC,KAAK,EAA2B,MAAM,YAAY,CAAC;AAG3D,MAAM,CAAC,MAAM,+BAA+B,GAAG;;;CAG9C,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;AAEb,MAAM,OAAO,sBAAuB,SAAQ,KAAK;IAC/C,aAAa,CAAgD;IAC7D,YAAY,YAA2D,EAAE,WAAwC;QAC/G,MAAM,IAAI,GACN,GAAG,wFAAyD,KAAK,YAAY,CAAC,4BAA4B,EAAE,CAAC;QACjH,KAAK,CAAC,IAAI,EAAE,WAAW,CAAC,CAAC;QACzB,IAAI,CAAC,aAAa,GAAG,YAAY,CAAC;IACpC,CAAC;IAEQ,OAAO;QACd,OAAO,CAAC,IAAI,CAAC,aAAa,CAAC,kBAAkB,CAAC,CAAC;IACjD,CAAC;IACQ,QAAQ;QACf,IAAI,CAAC,IAAI,CAAC,aAAa,CAAC,iBAAiB,EAAE,CAAC;YAC1C,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,MAAM,EAAC,GAAG,EAAE,SAAS,EAAC,GAAG,IAAI,CAAC,aAAa,CAAC,iBAAiB,CAAC;QAC9D,IAAI,CAAC,SAAS,EAAE,CAAC;YACf,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,EAAC,GAAG,EAAE,SAAS,EAAC,CAAC,CAAC;IAC5B,CAAC;IAED,OAAO;QACL,OAAO,IAAI,CAAC,aAAa,CAAC;IAC5B,CAAC;IAED,UAAU;QACR,OAAO,IAAI,CAAC,SAAS,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;IAC5C,CAAC;IAED,cAAc;QACZ,QAAQ,IAAI,CAAC,aAAa,CAAC,4BAA4B,EAAE,CAAC;YACxD;gBACE,OAAO;oBACL,IAAI,EAAE,yBAAyB;oBAC/B,KAAK,EAAE,EAAE;iBACV,CAAC;YACJ;gBACE,OAAO;oBACL,IAAI,EAAE,4BAA4B;oBAClC,KAAK,EAAE,EAAE;iBACV,CAAC;QACN,CAAC;IACH,CAAC;IAED,WAAW;QACT,yCAA2B;IAC7B,CAAC;IAED,OAAO;QACL,6CAA2B;IAC7B,CAAC;IAED,MAAM,CAAC,kBAAkB,CAAC,UAAuC,EAAE,cAA8C;QAE/G,MAAM,wBAAwB,GAAG,cAAc,CAAC,OAAO,CAAC,6BAA6B,CAAC;QACtF,IAAI,CAAC,wBAAwB,EAAE,CAAC;YAC9B,OAAO,CAAC,IAAI,CAAC,mDAAmD,CAAC,CAAC;YAClE,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,IAAI,sBAAsB,CAAC,wBAAwB,EAAE,UAAU,CAAC,CAAC,CAAC;IAC5E,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as Protocol from '../../generated/protocol.js';\\n\\nimport {Issue, IssueCategory, IssueKind} from './Issue.js';\\nimport {type MarkdownIssueDescription} from './MarkdownIssueDescription.js';\\n\\nexport const lateImportStylesheetLoadingCode = [\\n  Protocol.Audits.InspectorIssueCode.StylesheetLoadingIssue,\\n  Protocol.Audits.StyleSheetLoadingIssueReason.LateImportRule,\\n].join('::');\\n\\nexport class StylesheetLoadingIssue extends Issue {\\n  #issueDetails: Protocol.Audits.StylesheetLoadingIssueDetails;\\n  constructor(issueDetails: Protocol.Audits.StylesheetLoadingIssueDetails, issuesModel: SDK.IssuesModel.IssuesModel) {\\n    const code =\\n        `${Protocol.Audits.InspectorIssueCode.StylesheetLoadingIssue}::${issueDetails.styleSheetLoadingIssueReason}`;\\n    super(code, issuesModel);\\n    this.#issueDetails = issueDetails;\\n  }\\n\\n  override sources(): Array<Protocol.Audits.SourceCodeLocation> {\\n    return [this.#issueDetails.sourceCodeLocation];\\n  }\\n  override requests(): Array<Protocol.Audits.AffectedRequest> {\\n    if (!this.#issueDetails.failedRequestInfo) {\\n      return [];\\n    }\\n    const {url, requestId} = this.#issueDetails.failedRequestInfo;\\n    if (!requestId) {\\n      return [];\\n    }\\n    return [{url, requestId}];\\n  }\\n\\n  details(): Protocol.Audits.StylesheetLoadingIssueDetails {\\n    return this.#issueDetails;\\n  }\\n\\n  primaryKey(): string {\\n    return JSON.stringify(this.#issueDetails);\\n  }\\n\\n  getDescription(): MarkdownIssueDescription {\\n    switch (this.#issueDetails.styleSheetLoadingIssueReason) {\\n      case Protocol.Audits.StyleSheetLoadingIssueReason.LateImportRule:\\n        return {\\n          file: 'stylesheetLateImport.md',\\n          links: [],\\n        };\\n      case Protocol.Audits.StyleSheetLoadingIssueReason.RequestFailed:\\n        return {\\n          file: 'stylesheetRequestFailed.md',\\n          links: [],\\n        };\\n    }\\n  }\\n\\n  getCategory(): IssueCategory {\\n    return IssueCategory.Other;\\n  }\\n\\n  getKind(): IssueKind {\\n    return IssueKind.PageError;\\n  }\\n\\n  static fromInspectorIssue(issueModel: SDK.IssuesModel.IssuesModel, inspectorIssue: Protocol.Audits.InspectorIssue):\\n      StylesheetLoadingIssue[] {\\n    const stylesheetLoadingDetails = inspectorIssue.details.stylesheetLoadingIssueDetails;\\n    if (!stylesheetLoadingDetails) {\\n      console.warn('Stylesheet loading issue without details received');\\n      return [];\\n    }\\n    return [new StylesheetLoadingIssue(stylesheetLoadingDetails, issueModel)];\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);