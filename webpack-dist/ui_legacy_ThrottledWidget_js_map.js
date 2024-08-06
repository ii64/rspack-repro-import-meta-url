(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_ThrottledWidget_js_map"],{

/***/ "./ui/legacy/ThrottledWidget.js.map":
/*!******************************************!*\
  !*** ./ui/legacy/ThrottledWidget.js.map ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ThrottledWidget.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/ThrottledWidget.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AACtD,OAAO,EAAC,IAAI,EAAC,MAAM,aAAa,CAAC;AAEjC,MAAM,OAAO,eAAgB,SAAQ,IAAI;IACtB,eAAe,CAA6B;IACrD,iBAAiB,CAAU;IACzB,iBAAiB,GAAkB,OAAO,CAAC,OAAO,EAAE,CAAC;IAE/D,YAAY,cAAwB,EAAE,OAAgB;QACpD,KAAK,CAAC,cAAc,CAAC,CAAC;QACtB,IAAI,CAAC,eAAe,GAAG,IAAI,MAAM,CAAC,SAAS,CAAC,SAAS,CAAC,OAAO,KAAK,SAAS,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC;QAC7F,IAAI,CAAC,iBAAiB,GAAG,KAAK,CAAC;IACjC,CAAC;IAES,QAAQ;QAChB,OAAO,OAAO,CAAC,OAAO,EAAE,CAAC;IAC3B,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,iBAAiB,GAAG,CAAC,IAAI,CAAC,SAAS,EAAE,CAAC;QAC3C,IAAI,IAAI,CAAC,iBAAiB,EAAE,CAAC;YAC3B,OAAO;QACT,CAAC;QACD,IAAI,CAAC,iBAAiB,GAAG,IAAI,CAAC,eAAe,CAAC,QAAQ,CAAC,GAAG,EAAE;YAC1D,IAAI,IAAI,CAAC,SAAS,EAAE,EAAE,CAAC;gBACrB,OAAO,IAAI,CAAC,QAAQ,EAAE,CAAC;YACzB,CAAC;YACD,IAAI,CAAC,iBAAiB,GAAG,IAAI,CAAC;YAC9B,OAAO,OAAO,CAAC,OAAO,EAAE,CAAC;QAC3B,CAAC,CAAC,CAAC;IACL,CAAC;IAEQ,QAAQ;QACf,KAAK,CAAC,QAAQ,EAAE,CAAC;QACjB,IAAI,IAAI,CAAC,iBAAiB,EAAE,CAAC;YAC3B,IAAI,CAAC,MAAM,EAAE,CAAC;QAChB,CAAC;IACH,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport {VBox} from './Widget.js';\\n\\nexport class ThrottledWidget extends VBox {\\n  private readonly updateThrottler: Common.Throttler.Throttler;\\n  private updateWhenVisible: boolean;\\n  protected lastUpdatePromise: Promise<void> = Promise.resolve();\\n\\n  constructor(isWebComponent?: boolean, timeout?: number) {\\n    super(isWebComponent);\\n    this.updateThrottler = new Common.Throttler.Throttler(timeout === undefined ? 100 : timeout);\\n    this.updateWhenVisible = false;\\n  }\\n\\n  protected doUpdate(): Promise<void> {\\n    return Promise.resolve();\\n  }\\n\\n  update(): void {\\n    this.updateWhenVisible = !this.isShowing();\\n    if (this.updateWhenVisible) {\\n      return;\\n    }\\n    this.lastUpdatePromise = this.updateThrottler.schedule(() => {\\n      if (this.isShowing()) {\\n        return this.doUpdate();\\n      }\\n      this.updateWhenVisible = true;\\n      return Promise.resolve();\\n    });\\n  }\\n\\n  override wasShown(): void {\\n    super.wasShown();\\n    if (this.updateWhenVisible) {\\n      this.update();\\n    }\\n  }\\n}\\n\"]}");

/***/ })

}]);