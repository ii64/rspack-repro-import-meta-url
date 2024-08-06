(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_bindings_LiveLocation_js_map"],{

/***/ "./models/bindings/LiveLocation.js.map":
/*!*********************************************!*\
  !*** ./models/bindings/LiveLocation.js.map ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"LiveLocation.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/bindings/LiveLocation.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAY7B,MAAM,OAAO,oBAAoB;IAC/B,eAAe,CAA+C;IACrD,aAAa,CAAmB;IACzC,cAAc,CAAqB;IAEnC,YAAY,cAAqD,EAAE,YAA8B;QAC/F,IAAI,CAAC,eAAe,GAAG,cAAc,CAAC;QACtC,IAAI,CAAC,aAAa,GAAG,YAAY,CAAC;QAClC,IAAI,CAAC,aAAa,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;QAE7B,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC;IAC7B,CAAC;IAED,KAAK,CAAC,MAAM;QACV,IAAI,CAAC,IAAI,CAAC,eAAe,EAAE,CAAC;YAC1B,OAAO;QACT,CAAC;QACD,mEAAmE;QACnE,iEAAiE;QACjE,+DAA+D;QAC/D,IAAI,IAAI,CAAC,cAAc,EAAE,CAAC;YACxB,MAAM,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,GAAG,EAAE,CAAC,IAAI,CAAC,MAAM,EAAE,CAAC,CAAC;QACtD,CAAC;aAAM,CAAC;YACN,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC,eAAe,CAAC,IAAI,CAAC,CAAC;YACjD,MAAM,IAAI,CAAC,cAAc,CAAC;YAC1B,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC;QAC7B,CAAC;IACH,CAAC;IAED,KAAK,CAAC,UAAU;QACd,MAAM,iBAAiB,CAAC;IAC1B,CAAC;IAED,OAAO;QACL,IAAI,CAAC,aAAa,CAAC,MAAM,CAAC,IAAI,CAAC,CAAC;QAChC,IAAI,CAAC,eAAe,GAAG,IAAI,CAAC;IAC9B,CAAC;IAED,UAAU;QACR,OAAO,CAAC,IAAI,CAAC,aAAa,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;IACvC,CAAC;IAED,KAAK,CAAC,cAAc;QAClB,MAAM,iBAAiB,CAAC;IAC1B,CAAC;CACF;AAED,MAAM,OAAO,gBAAgB;IAClB,UAAU,CAAoB;IAEvC;QACE,IAAI,CAAC,UAAU,GAAG,IAAI,GAAG,EAAE,CAAC;IAC9B,CAAC;IAED,GAAG,CAAC,QAAsB;QACxB,IAAI,CAAC,UAAU,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC;IAChC,CAAC;IAED,MAAM,CAAC,QAAsB;QAC3B,IAAI,CAAC,UAAU,CAAC,MAAM,CAAC,QAAQ,CAAC,CAAC;IACnC,CAAC;IAED,GAAG,CAAC,QAAsB;QACxB,OAAO,IAAI,CAAC,UAAU,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC;IACvC,CAAC;IAED,UAAU;QACR,KAAK,MAAM,QAAQ,IAAI,IAAI,CAAC,UAAU,EAAE,CAAC;YACvC,QAAQ,CAAC,OAAO,EAAE,CAAC;QACrB,CAAC;IACH,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Workspace from '../workspace/workspace.js';\\n\\nexport interface LiveLocation {\\n  update(): Promise<void>;\\n  uiLocation(): Promise<Workspace.UISourceCode.UILocation|null>;\\n  dispose(): void;\\n  isDisposed(): boolean;\\n  isIgnoreListed(): Promise<boolean>;\\n}\\n\\nexport class LiveLocationWithPool implements LiveLocation {\\n  #updateDelegate: ((arg0: LiveLocation) => Promise<void>)|null;\\n  readonly #locationPool: LiveLocationPool;\\n  #updatePromise: Promise<void>|null;\\n\\n  constructor(updateDelegate: (arg0: LiveLocation) => Promise<void>, locationPool: LiveLocationPool) {\\n    this.#updateDelegate = updateDelegate;\\n    this.#locationPool = locationPool;\\n    this.#locationPool.add(this);\\n\\n    this.#updatePromise = null;\\n  }\\n\\n  async update(): Promise<void> {\\n    if (!this.#updateDelegate) {\\n      return;\\n    }\\n    // The following is a basic scheduling algorithm, guaranteeing that\\n    // {#updateDelegate} is always run atomically. That is, we always\\n    // wait for an update to finish before we trigger the next run.\\n    if (this.#updatePromise) {\\n      await this.#updatePromise.then(() => this.update());\\n    } else {\\n      this.#updatePromise = this.#updateDelegate(this);\\n      await this.#updatePromise;\\n      this.#updatePromise = null;\\n    }\\n  }\\n\\n  async uiLocation(): Promise<Workspace.UISourceCode.UILocation|null> {\\n    throw 'Not implemented';\\n  }\\n\\n  dispose(): void {\\n    this.#locationPool.delete(this);\\n    this.#updateDelegate = null;\\n  }\\n\\n  isDisposed(): boolean {\\n    return !this.#locationPool.has(this);\\n  }\\n\\n  async isIgnoreListed(): Promise<boolean> {\\n    throw 'Not implemented';\\n  }\\n}\\n\\nexport class LiveLocationPool {\\n  readonly #locations: Set<LiveLocation>;\\n\\n  constructor() {\\n    this.#locations = new Set();\\n  }\\n\\n  add(location: LiveLocation): void {\\n    this.#locations.add(location);\\n  }\\n\\n  delete(location: LiveLocation): void {\\n    this.#locations.delete(location);\\n  }\\n\\n  has(location: LiveLocation): boolean {\\n    return this.#locations.has(location);\\n  }\\n\\n  disposeAll(): void {\\n    for (const location of this.#locations) {\\n      location.dispose();\\n    }\\n  }\\n}\\n\"]}");

/***/ })

}]);