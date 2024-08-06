(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_IssueResolver_js_map"], {
"./models/issues_manager/IssueResolver.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"IssueResolver.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/IssueResolver.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AAItD,OAAO,EAAC,aAAa,EAAqD,MAAM,oBAAoB,CAAC;AAErG;;GAEG;AACH,MAAM,OAAO,aAAc,SAAQ,MAAM,CAAC,YAAY,CAAC,YAA4C;IACjG,eAAe,GAA4C,IAAI,CAAC;IAChE,cAAc,CAAgB;IAE9B,YAAY,gBAA+B,aAAa,CAAC,QAAQ,EAAE;QACjE,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,cAAc,GAAG,aAAa,CAAC;IACtC,CAAC;IAEkB,QAAQ,CAAC,EAA2B;QACrD,OAAO,IAAI,CAAC,cAAc,CAAC,YAAY,CAAC,EAAE,CAAC,IAAI,IAAI,CAAC;IACtD,CAAC;IAED,aAAa,CAAC,KAA2D;QACvE,MAAM,EAAC,KAAK,EAAC,GAAG,KAAK,CAAC,IAAI,CAAC;QAC3B,MAAM,EAAE,GAAG,KAAK,CAAC,UAAU,EAAE,CAAC;QAC9B,IAAI,EAAE,EAAE,CAAC;YACP,IAAI,CAAC,SAAS,CAAC,EAAE,EAAE,KAAK,CAAC,CAAC;QAC5B,CAAC;IACH,CAAC;IAEkB,cAAc;QAC/B,IAAI,IAAI,CAAC,eAAe,EAAE,CAAC;YACzB,OAAO;QACT,CAAC;QACD,IAAI,CAAC,eAAe;YAChB,IAAI,CAAC,cAAc,CAAC,gBAAgB,mDAAgC,IAAI,CAAC,aAAa,EAAE,IAAI,CAAC,CAAC;IACpG,CAAC;IAEkB,aAAa;QAC9B,IAAI,CAAC,IAAI,CAAC,eAAe,EAAE,CAAC;YAC1B,OAAO;QACT,CAAC;QACD,MAAM,CAAC,WAAW,CAAC,oBAAoB,CAAC,CAAC,IAAI,CAAC,eAAe,CAAC,CAAC,CAAC;QAChE,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC;IAC9B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\n\\nimport {type Issue} from './Issue.js';\\nimport {IssuesManager, Events as IssueManagerEvents, type IssueAddedEvent} from './IssuesManager.js';\\n\\n/**\\n * A class that facilitates resolving an issueId to an issue. See `ResolverBase` for more info.\\n */\\nexport class IssueResolver extends Common.ResolverBase.ResolverBase<Protocol.Audits.IssueId, Issue> {\\n  #issuesListener: Common.EventTarget.EventDescriptor|null = null;\\n  #issuesManager: IssuesManager;\\n\\n  constructor(issuesManager: IssuesManager = IssuesManager.instance()) {\\n    super();\\n    this.#issuesManager = issuesManager;\\n  }\\n\\n  protected override getForId(id: Protocol.Audits.IssueId): Issue|null {\\n    return this.#issuesManager.getIssueById(id) || null;\\n  }\\n\\n  #onIssueAdded(event: Common.EventTarget.EventTargetEvent<IssueAddedEvent>): void {\\n    const {issue} = event.data;\\n    const id = issue.getIssueId();\\n    if (id) {\\n      this.onResolve(id, issue);\\n    }\\n  }\\n\\n  protected override startListening(): void {\\n    if (this.#issuesListener) {\\n      return;\\n    }\\n    this.#issuesListener =\\n        this.#issuesManager.addEventListener(IssueManagerEvents.IssueAdded, this.#onIssueAdded, this);\\n  }\\n\\n  protected override stopListening(): void {\\n    if (!this.#issuesListener) {\\n      return;\\n    }\\n    Common.EventTarget.removeEventListeners([this.#issuesListener]);\\n    this.#issuesListener = null;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);