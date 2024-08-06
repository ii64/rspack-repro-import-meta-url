(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_LogModel_js_map"], {
"./core/sdk/LogModel.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"LogModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/LogModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,iBAAiB,CAAC;AAKxC,OAAO,EAAC,QAAQ,EAAC,MAAM,eAAe,CAAC;AAEvC,MAAM,OAAO,QAAS,SAAQ,QAAoB;IACvC,SAAS,CAA0B;IAC5C,YAAY,MAAc;QACxB,KAAK,CAAC,MAAM,CAAC,CAAC;QACd,MAAM,CAAC,qBAAqB,CAAC,IAAI,CAAC,CAAC;QACnC,IAAI,CAAC,SAAS,GAAG,MAAM,CAAC,QAAQ,EAAE,CAAC;QACnC,KAAK,IAAI,CAAC,SAAS,CAAC,aAAa,EAAE,CAAC;QACpC,IAAI,CAAC,IAAI,CAAC,qBAAqB,CAAC,WAAW,EAAE,EAAE,CAAC;YAC9C,KAAK,IAAI,CAAC,SAAS,CAAC,4BAA4B,CAAC;gBAC/C,MAAM,EAAE;oBACN,EAAC,IAAI,6DAA4C,EAAE,SAAS,EAAE,GAAG,EAAC;oBAClE,EAAC,IAAI,iEAA8C,EAAE,SAAS,EAAE,EAAE,EAAC;oBACnE,EAAC,IAAI,qEAAgD,EAAE,SAAS,EAAE,GAAG,EAAC;oBACtE,EAAC,IAAI,uEAAiD,EAAE,SAAS,EAAE,CAAC,CAAC,EAAC;oBACtE,EAAC,IAAI,2DAA2C,EAAE,SAAS,EAAE,GAAG,EAAC;oBACjE,EAAC,IAAI,6EAAoD,EAAE,SAAS,EAAE,EAAE,EAAC;oBACzE,EAAC,IAAI,+EAAqD,EAAE,SAAS,EAAE,CAAC,CAAC,EAAC;iBAC3E;aACF,CAAC,CAAC;QACL,CAAC;IACH,CAAC;IAED,UAAU,CAAC,EAAC,KAAK,EAA+B;QAC9C,IAAI,CAAC,wBAAwB,uCAAoB,EAAC,QAAQ,EAAE,IAAI,EAAE,KAAK,EAAC,CAAC,CAAC;IAC5E,CAAC;IAED,YAAY;QACV,KAAK,IAAI,CAAC,SAAS,CAAC,YAAY,EAAE,CAAC;IACrC,CAAC;CACF;AAeD,QAAQ,CAAC,QAAQ,CAAC,QAAQ,EAAE,EAAC,YAAY,wBAAgB,EAAE,SAAS,EAAE,IAAI,EAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2017 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../host/host.js';\\nimport type * as ProtocolProxyApi from '../../generated/protocol-proxy-api.js';\\nimport * as Protocol from '../../generated/protocol.js';\\n\\nimport {Capability, type Target} from './Target.js';\\nimport {SDKModel} from './SDKModel.js';\\n\\nexport class LogModel extends SDKModel<EventTypes> implements ProtocolProxyApi.LogDispatcher {\\n  readonly #logAgent: ProtocolProxyApi.LogApi;\\n  constructor(target: Target) {\\n    super(target);\\n    target.registerLogDispatcher(this);\\n    this.#logAgent = target.logAgent();\\n    void this.#logAgent.invoke_enable();\\n    if (!Host.InspectorFrontendHost.isUnderTest()) {\\n      void this.#logAgent.invoke_startViolationsReport({\\n        config: [\\n          {name: Protocol.Log.ViolationSettingName.LongTask, threshold: 200},\\n          {name: Protocol.Log.ViolationSettingName.LongLayout, threshold: 30},\\n          {name: Protocol.Log.ViolationSettingName.BlockedEvent, threshold: 100},\\n          {name: Protocol.Log.ViolationSettingName.BlockedParser, threshold: -1},\\n          {name: Protocol.Log.ViolationSettingName.Handler, threshold: 150},\\n          {name: Protocol.Log.ViolationSettingName.RecurringHandler, threshold: 50},\\n          {name: Protocol.Log.ViolationSettingName.DiscouragedAPIUse, threshold: -1},\\n        ],\\n      });\\n    }\\n  }\\n\\n  entryAdded({entry}: Protocol.Log.EntryAddedEvent): void {\\n    this.dispatchEventToListeners(Events.EntryAdded, {logModel: this, entry});\\n  }\\n\\n  requestClear(): void {\\n    void this.#logAgent.invoke_clear();\\n  }\\n}\\n\\nexport const enum Events {\\n  EntryAdded = 'EntryAdded',\\n}\\n\\nexport interface EntryAddedEvent {\\n  logModel: LogModel;\\n  entry: Protocol.Log.LogEntry;\\n}\\n\\nexport type EventTypes = {\\n  [Events.EntryAdded]: EntryAddedEvent,\\n};\\n\\nSDKModel.register(LogModel, {capabilities: Capability.Log, autostart: true});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);