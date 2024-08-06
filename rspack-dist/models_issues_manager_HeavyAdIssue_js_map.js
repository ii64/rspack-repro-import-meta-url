(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_HeavyAdIssue_js_map"], {
"./models/issues_manager/HeavyAdIssue.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"HeavyAdIssue.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/HeavyAdIssue.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAIhD,OAAO,EAAC,KAAK,EAA2B,MAAM,YAAY,CAAC;AAG3D,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,4BAA4B,EAAE,iCAAiC;CAChE,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,uCAAuC,EAAE,SAAS,CAAC,CAAC;AAC7F,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,OAAO,YAAa,SAAQ,KAAK;IACrC,aAAa,CAAsC;IAEnD,YAAY,YAAiD,EAAE,WAAwC;QACrG,MAAM,OAAO,GAAG,uEAAkD,YAAY,CAAC,MAAM,CAAC,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QAClG,KAAK,CAAC,EAAC,IAAI,sEAAiD,EAAE,OAAO,EAAC,EAAE,WAAW,CAAC,CAAC;QACrF,IAAI,CAAC,aAAa,GAAG,YAAY,CAAC;IACpC,CAAC;IAED,OAAO;QACL,OAAO,IAAI,CAAC,aAAa,CAAC;IAC5B,CAAC;IAED,UAAU;QACR,OAAO,GAAG,oEAA+C,IAAI,IAAI,CAAC,SAAS,CAAC,IAAI,CAAC,aAAa,CAAC,EAAE,CAAC;IACpG,CAAC;IAED,cAAc;QACZ,OAAO;YACL,IAAI,EAAE,YAAY;YAClB,KAAK,EAAE;gBACL;oBACE,IAAI,EAAE,0EAA0E;oBAChF,SAAS,EAAE,UAAU,CAAC,SAAS,CAAC,4BAA4B,CAAC;iBAC9D;aACF;SACF,CAAC;IACJ,CAAC;IAED,WAAW;QACT,6CAA6B;IAC/B,CAAC;IAED,OAAO;QACL,QAAQ,IAAI,CAAC,aAAa,CAAC,UAAU,EAAE,CAAC;YACtC;gBACE,6CAA2B;YAC7B;gBACE,uDAAgC;QACpC,CAAC;IACH,CAAC;IAED,MAAM,CAAC,kBAAkB,CAAC,WAAwC,EAAE,cAA8C;QAEhH,MAAM,mBAAmB,GAAG,cAAc,CAAC,OAAO,CAAC,mBAAmB,CAAC;QACvE,IAAI,CAAC,mBAAmB,EAAE,CAAC;YACzB,OAAO,CAAC,IAAI,CAAC,0CAA0C,CAAC,CAAC;YACzD,OAAO,EAAE,CAAC;QACZ,CAAC;QACD,OAAO,CAAC,IAAI,YAAY,CAAC,mBAAmB,EAAE,WAAW,CAAC,CAAC,CAAC;IAC9D,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as Protocol from '../../generated/protocol.js';\\n\\nimport {Issue, IssueCategory, IssueKind} from './Issue.js';\\nimport {type MarkdownIssueDescription} from './MarkdownIssueDescription.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title for a learn more link in Heavy Ads issue description\\n   */\\n  handlingHeavyAdInterventions: 'Handling Heavy Ad Interventions',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('models/issues_manager/HeavyAdIssue.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class HeavyAdIssue extends Issue {\\n  #issueDetails: Protocol.Audits.HeavyAdIssueDetails;\\n\\n  constructor(issueDetails: Protocol.Audits.HeavyAdIssueDetails, issuesModel: SDK.IssuesModel.IssuesModel) {\\n    const umaCode = [Protocol.Audits.InspectorIssueCode.HeavyAdIssue, issueDetails.reason].join('::');\\n    super({code: Protocol.Audits.InspectorIssueCode.HeavyAdIssue, umaCode}, issuesModel);\\n    this.#issueDetails = issueDetails;\\n  }\\n\\n  details(): Protocol.Audits.HeavyAdIssueDetails {\\n    return this.#issueDetails;\\n  }\\n\\n  primaryKey(): string {\\n    return `${Protocol.Audits.InspectorIssueCode.HeavyAdIssue}-${JSON.stringify(this.#issueDetails)}`;\\n  }\\n\\n  getDescription(): MarkdownIssueDescription {\\n    return {\\n      file: 'heavyAd.md',\\n      links: [\\n        {\\n          link: 'https://developers.google.com/web/updates/2020/05/heavy-ad-interventions',\\n          linkTitle: i18nString(UIStrings.handlingHeavyAdInterventions),\\n        },\\n      ],\\n    };\\n  }\\n\\n  getCategory(): IssueCategory {\\n    return IssueCategory.HeavyAd;\\n  }\\n\\n  getKind(): IssueKind {\\n    switch (this.#issueDetails.resolution) {\\n      case Protocol.Audits.HeavyAdResolutionStatus.HeavyAdBlocked:\\n        return IssueKind.PageError;\\n      case Protocol.Audits.HeavyAdResolutionStatus.HeavyAdWarning:\\n        return IssueKind.BreakingChange;\\n    }\\n  }\\n\\n  static fromInspectorIssue(issuesModel: SDK.IssuesModel.IssuesModel, inspectorIssue: Protocol.Audits.InspectorIssue):\\n      HeavyAdIssue[] {\\n    const heavyAdIssueDetails = inspectorIssue.details.heavyAdIssueDetails;\\n    if (!heavyAdIssueDetails) {\\n      console.warn('Heavy Ad issue without details received.');\\n      return [];\\n    }\\n    return [new HeavyAdIssue(heavyAdIssueDetails, issuesModel)];\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);