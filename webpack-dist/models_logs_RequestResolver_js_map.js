(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_logs_RequestResolver_js_map"],{

/***/ "./models/logs/RequestResolver.js.map":
/*!********************************************!*\
  !*** ./models/logs/RequestResolver.js.map ***!
  \********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"RequestResolver.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/logs/RequestResolver.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AAItD,OAAO,EAAC,MAAM,IAAI,gBAAgB,EAAE,UAAU,EAAC,MAAM,iBAAiB,CAAC;AAEvE;;;;;;;;GAQG;AACH,MAAM,OAAO,eAAgB,SACzB,MAAM,CAAC,YAAY,CAAC,YAA2E;IACzF,eAAe,GAA4C,IAAI,CAAC;IAChE,UAAU,CAAa;IAE/B,YAAY,aAAyB,UAAU,CAAC,QAAQ,EAAE;QACxD,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,UAAU,GAAG,UAAU,CAAC;IAC/B,CAAC;IAES,QAAQ,CAAC,EAA8B;QAC/C,MAAM,QAAQ,GAAG,IAAI,CAAC,UAAU,CAAC,aAAa,CAAC,EAAE,CAAC,CAAC;QACnD,IAAI,QAAQ,CAAC,MAAM,GAAG,CAAC,EAAE,CAAC;YACxB,OAAO,QAAQ,CAAC,CAAC,CAAC,CAAC;QACrB,CAAC;QACD,OAAO,IAAI,CAAC;IACd,CAAC;IAEO,cAAc,CAAC,KAAwF;QAE7G,MAAM,EAAC,OAAO,EAAC,GAAG,KAAK,CAAC,IAAI,CAAC;QAC7B,MAAM,gBAAgB,GAAG,OAAO,CAAC,gBAAgB,EAAE,CAAC;QACpD,IAAI,gBAAgB,EAAE,CAAC;YACrB,IAAI,CAAC,SAAS,CAAC,gBAAgB,EAAE,OAAO,CAAC,CAAC;QAC5C,CAAC;IACH,CAAC;IAEkB,cAAc;QAC/B,IAAI,IAAI,CAAC,eAAe,EAAE,CAAC;YACzB,OAAO;QACT,CAAC;QACD,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC,UAAU,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,YAAY,EAAE,IAAI,CAAC,cAAc,EAAE,IAAI,CAAC,CAAC;IACpH,CAAC;IAEkB,aAAa;QAC9B,IAAI,CAAC,IAAI,CAAC,eAAe,EAAE,CAAC;YAC1B,OAAO;QACT,CAAC;QACD,MAAM,CAAC,WAAW,CAAC,oBAAoB,CAAC,CAAC,IAAI,CAAC,eAAe,CAAC,CAAC,CAAC;QAChE,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC;IAC9B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\n\\nimport {Events as NetworkLogEvents, NetworkLog} from './NetworkLog.js';\\n\\n/**\\n * A class that facilitates resolving a requestId to a network request. If the requestId does not resolve, a listener\\n * is installed on the network request to wait for the request to appear. This is useful if an attempt to resolve the\\n * requestId is made before the network request got reported.\\n *\\n * This functionality is intentionally provided in this class (instead of as part of NetworkLog) to enable clients\\n * to control the duration of the wait and the lifetime of the associated promises by using the `clear` method on\\n * this class.\\n */\\nexport class RequestResolver extends\\n    Common.ResolverBase.ResolverBase<Protocol.Network.RequestId, SDK.NetworkRequest.NetworkRequest> {\\n  private networkListener: Common.EventTarget.EventDescriptor|null = null;\\n  private networkLog: NetworkLog;\\n\\n  constructor(networkLog: NetworkLog = NetworkLog.instance()) {\\n    super();\\n    this.networkLog = networkLog;\\n  }\\n\\n  protected getForId(id: Protocol.Network.RequestId): SDK.NetworkRequest.NetworkRequest|null {\\n    const requests = this.networkLog.requestsForId(id);\\n    if (requests.length > 0) {\\n      return requests[0];\\n    }\\n    return null;\\n  }\\n\\n  private onRequestAdded(event: Common.EventTarget.EventTargetEvent<{request: SDK.NetworkRequest.NetworkRequest}>):\\n      void {\\n    const {request} = event.data;\\n    const backendRequestId = request.backendRequestId();\\n    if (backendRequestId) {\\n      this.onResolve(backendRequestId, request);\\n    }\\n  }\\n\\n  protected override startListening(): void {\\n    if (this.networkListener) {\\n      return;\\n    }\\n    this.networkListener = this.networkLog.addEventListener(NetworkLogEvents.RequestAdded, this.onRequestAdded, this);\\n  }\\n\\n  protected override stopListening(): void {\\n    if (!this.networkListener) {\\n      return;\\n    }\\n    Common.EventTarget.removeEventListeners([this.networkListener]);\\n    this.networkListener = null;\\n  }\\n}\\n\"]}");

/***/ })

}]);