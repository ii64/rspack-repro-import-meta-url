(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_ClientHintIssue_js_map"], {
"./models/issues_manager/ClientHintIssue.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ClientHintIssue.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/ClientHintIssue.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAIhD,OAAO,EAAC,KAAK,EAA2B,MAAM,YAAY,CAAC;AAE3D,OAAO,EACL,sBAAsB,GAGvB,MAAM,+BAA+B,CAAC;AAEvC,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,yBAAyB,EAAE,6BAA6B;CACzD,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,0CAA0C,EAAE,SAAS,CAAC,CAAC;AAChG,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,MAAM,OAAO,eAAgB,SAAQ,KAAK;IAChC,YAAY,CAAyC;IAE7D,YAAY,YAAoD,EAAE,WAAwC;QACxG,KAAK,CACD;YACE,IAAI,4EAAoD;YACxD,OAAO,EAAE,6EAAqD,YAAY,CAAC,qBAAqB,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC;SAC7G,EACD,WAAW,CAAC,CAAC;QACjB,IAAI,CAAC,YAAY,GAAG,YAAY,CAAC;IACnC,CAAC;IAED,WAAW;QACT,yCAA2B;IAC7B,CAAC;IAED,OAAO;QACL,OAAO,IAAI,CAAC,YAAY,CAAC;IAC3B,CAAC;IAED,cAAc;QACZ,MAAM,WAAW,GAAG,iBAAiB,CAAC,GAAG,CAAC,IAAI,CAAC,YAAY,CAAC,qBAAqB,CAAC,CAAC;QACnF,IAAI,CAAC,WAAW,EAAE,CAAC;YACjB,OAAO,IAAI,CAAC;QACd,CAAC;QACD,OAAO,sBAAsB,CAAC,WAAW,CAAC,CAAC;IAC7C,CAAC;IAEQ,OAAO;QACd,OAAO,CAAC,IAAI,CAAC,YAAY,CAAC,kBAAkB,CAAC,CAAC;IAChD,CAAC;IAED,UAAU;QACR,OAAO,IAAI,CAAC,SAAS,CAAC,IAAI,CAAC,YAAY,CAAC,CAAC;IAC3C,CAAC;IAED,OAAO;QACL,uDAAgC;IAClC,CAAC;IAED,MAAM,CAAC,kBAAkB,CAAC,WAAwC,EAAE,cAA8C;QAEhH,MAAM,OAAO,GAAG,cAAc,CAAC,OAAO,CAAC,sBAAsB,CAAC;QAC9D,IAAI,CAAC,OAAO,EAAE,CAAC;YACb,OAAO,CAAC,IAAI,CAAC,6CAA6C,CAAC,CAAC;YAC5D,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,IAAI,eAAe,CAAC,OAAO,EAAE,WAAW,CAAC,CAAC,CAAC;IACrD,CAAC;CACF;AAED,MAAM,iBAAiB,GAA6E,IAAI,GAAG,CAAC;IAC1G;;QAEE;YACE,IAAI,EAAE,4CAA4C;YAClD,KAAK,EAAE,CAAC;oBACN,IAAI,EAAE,qDAAqD;oBAC3D,SAAS,EAAE,cAAc,CAAC,SAAS,CAAC,yBAAyB,CAAC;iBAC/D,CAAC;SACH;KACF;IACD;;QAEE;YACE,IAAI,EAAE,kCAAkC;YACxC,KAAK,EAAE,CAAC;oBACN,IAAI,EAAE,qDAAqD;oBAC3D,SAAS,EAAE,cAAc,CAAC,SAAS,CAAC,yBAAyB,CAAC;iBAC/D,CAAC;SACH;KACF;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as Protocol from '../../generated/protocol.js';\\n\\nimport {Issue, IssueCategory, IssueKind} from './Issue.js';\\n\\nimport {\\n  resolveLazyDescription,\\n  type MarkdownIssueDescription,\\n  type LazyMarkdownIssueDescription,\\n} from './MarkdownIssueDescription.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title for Client Hint specification url link\\n   */\\n  clientHintsInfrastructure: 'Client Hints Infrastructure',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('models/issues_manager/ClientHintIssue.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nexport class ClientHintIssue extends Issue {\\n  private issueDetails: Protocol.Audits.ClientHintIssueDetails;\\n\\n  constructor(issueDetails: Protocol.Audits.ClientHintIssueDetails, issuesModel: SDK.IssuesModel.IssuesModel) {\\n    super(\\n        {\\n          code: Protocol.Audits.InspectorIssueCode.ClientHintIssue,\\n          umaCode: [Protocol.Audits.InspectorIssueCode.ClientHintIssue, issueDetails.clientHintIssueReason].join('::'),\\n        },\\n        issuesModel);\\n    this.issueDetails = issueDetails;\\n  }\\n\\n  getCategory(): IssueCategory {\\n    return IssueCategory.Other;\\n  }\\n\\n  details(): Protocol.Audits.ClientHintIssueDetails {\\n    return this.issueDetails;\\n  }\\n\\n  getDescription(): MarkdownIssueDescription|null {\\n    const description = issueDescriptions.get(this.issueDetails.clientHintIssueReason);\\n    if (!description) {\\n      return null;\\n    }\\n    return resolveLazyDescription(description);\\n  }\\n\\n  override sources(): Iterable<Protocol.Audits.SourceCodeLocation> {\\n    return [this.issueDetails.sourceCodeLocation];\\n  }\\n\\n  primaryKey(): string {\\n    return JSON.stringify(this.issueDetails);\\n  }\\n\\n  getKind(): IssueKind {\\n    return IssueKind.BreakingChange;\\n  }\\n\\n  static fromInspectorIssue(issuesModel: SDK.IssuesModel.IssuesModel, inspectorIssue: Protocol.Audits.InspectorIssue):\\n      ClientHintIssue[] {\\n    const details = inspectorIssue.details.clientHintIssueDetails;\\n    if (!details) {\\n      console.warn('Client Hint issue without details received.');\\n      return [];\\n    }\\n    return [new ClientHintIssue(details, issuesModel)];\\n  }\\n}\\n\\nconst issueDescriptions: Map<Protocol.Audits.ClientHintIssueReason, LazyMarkdownIssueDescription> = new Map([\\n  [\\n    Protocol.Audits.ClientHintIssueReason.MetaTagAllowListInvalidOrigin,\\n    {\\n      file: 'clientHintMetaTagAllowListInvalidOrigin.md',\\n      links: [{\\n        link: 'https://wicg.github.io/client-hints-infrastructure/',\\n        linkTitle: i18nLazyString(UIStrings.clientHintsInfrastructure),\\n      }],\\n    },\\n  ],\\n  [\\n    Protocol.Audits.ClientHintIssueReason.MetaTagModifiedHTML,\\n    {\\n      file: 'clientHintMetaTagModifiedHTML.md',\\n      links: [{\\n        link: 'https://wicg.github.io/client-hints-infrastructure/',\\n        linkTitle: i18nLazyString(UIStrings.clientHintsInfrastructure),\\n      }],\\n    },\\n  ],\\n]);\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);