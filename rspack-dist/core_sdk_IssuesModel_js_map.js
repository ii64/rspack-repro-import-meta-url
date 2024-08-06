(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_IssuesModel_js_map"], {
"./core/sdk/IssuesModel.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"IssuesModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/IssuesModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAM7B,OAAO,EAAC,QAAQ,EAAC,MAAM,eAAe,CAAC;AAEvC;;;;;GAKG;AACH,MAAM,OAAO,WAAY,SAAQ,QAAoB;IACnD,SAAS,GAAG,KAAK,CAAC;IAClB,QAAQ,GAAG,KAAK,CAAC;IAEjB,YAAY,MAAc;QACxB,KAAK,CAAC,MAAM,CAAC,CAAC;QACd,KAAK,IAAI,CAAC,aAAa,EAAE,CAAC;IAC5B,CAAC;IAEO,KAAK,CAAC,aAAa;QACzB,IAAI,IAAI,CAAC,QAAQ,EAAE,CAAC;YAClB,OAAO;QACT,CAAC;QAED,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;QACrB,IAAI,CAAC,MAAM,EAAE,CAAC,wBAAwB,CAAC,IAAI,CAAC,CAAC;QAC7C,MAAM,WAAW,GAAG,IAAI,CAAC,MAAM,EAAE,CAAC,WAAW,EAAE,CAAC;QAChD,MAAM,WAAW,CAAC,aAAa,EAAE,CAAC;IACpC,CAAC;IAED,UAAU,CAAC,eAAgD;QACzD,IAAI,CAAC,wBAAwB,uCAAoB,EAAC,WAAW,EAAE,IAAI,EAAE,cAAc,EAAE,eAAe,CAAC,KAAK,EAAC,CAAC,CAAC;IAC/G,CAAC;IAEQ,OAAO;QACd,KAAK,CAAC,OAAO,EAAE,CAAC;QAChB,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC;IACxB,CAAC;IAED,sBAAsB;QACpB,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,CAAC;YACpB,OAAO,IAAI,CAAC,MAAM,EAAE,CAAC;QACvB,CAAC;QACD,OAAO,IAAI,CAAC;IACd,CAAC;CACF;AAeD,QAAQ,CAAC,QAAQ,CAAC,WAAW,EAAE,EAAC,YAAY,+BAAmB,EAAE,SAAS,EAAE,IAAI,EAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as ProtocolProxyApi from '../../generated/protocol-proxy-api.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\n\\nimport {Capability, type Target} from './Target.js';\\nimport {SDKModel} from './SDKModel.js';\\n\\n/**\\n * The `IssuesModel` is a thin dispatch that does not store issues, but only creates the representation\\n * class (usually derived from `Issue`) and passes the instances on via a dispatched event.\\n * We chose this approach here because the lifetime of the Model is tied to the target, but DevTools\\n * wants to preserve issues for targets (e.g. iframes) that are already gone as well.\\n */\\nexport class IssuesModel extends SDKModel<EventTypes> implements ProtocolProxyApi.AuditsDispatcher {\\n  #disposed = false;\\n  #enabled = false;\\n\\n  constructor(target: Target) {\\n    super(target);\\n    void this.ensureEnabled();\\n  }\\n\\n  private async ensureEnabled(): Promise<void> {\\n    if (this.#enabled) {\\n      return;\\n    }\\n\\n    this.#enabled = true;\\n    this.target().registerAuditsDispatcher(this);\\n    const auditsAgent = this.target().auditsAgent();\\n    await auditsAgent.invoke_enable();\\n  }\\n\\n  issueAdded(issueAddedEvent: Protocol.Audits.IssueAddedEvent): void {\\n    this.dispatchEventToListeners(Events.IssueAdded, {issuesModel: this, inspectorIssue: issueAddedEvent.issue});\\n  }\\n\\n  override dispose(): void {\\n    super.dispose();\\n    this.#disposed = true;\\n  }\\n\\n  getTargetIfNotDisposed(): Target|null {\\n    if (!this.#disposed) {\\n      return this.target();\\n    }\\n    return null;\\n  }\\n}\\n\\nexport const enum Events {\\n  IssueAdded = 'IssueAdded',\\n}\\n\\nexport interface IssueAddedEvent {\\n  issuesModel: IssuesModel;\\n  inspectorIssue: Protocol.Audits.InspectorIssue;\\n}\\n\\nexport type EventTypes = {\\n  [Events.IssueAdded]: IssueAddedEvent,\\n};\\n\\nSDKModel.register(IssuesModel, {capabilities: Capability.Audits, autostart: true});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);