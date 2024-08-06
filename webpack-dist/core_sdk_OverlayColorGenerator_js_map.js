(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_OverlayColorGenerator_js_map"],{

/***/ "./core/sdk/OverlayColorGenerator.js.map":
/*!***********************************************!*\
  !*** ./core/sdk/OverlayColorGenerator.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"OverlayColorGenerator.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/OverlayColorGenerator.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,qBAAqB,CAAC;AAE9C;;;;GAIG;AACH,MAAM,OAAO,qBAAqB;IACvB,OAAO,CAAuB;IACvC,MAAM,CAAS;IACf;QACE,MAAM,MAAM,wCAA2B,CAAC;QACxC,IAAI,CAAC,OAAO,GAAG;YACb,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,iBAAiB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAC/F,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAChG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,mBAAmB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YACjG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAChG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAChG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,iBAAiB,EAAE,iBAAiB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAC9F,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAChG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;YAChG,SAAS;YACT,IAAI,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC,kBAAkB,EAAE,kBAAkB,EAAE,kBAAkB,EAAE,CAAC,CAAC,EAAE,MAAM,CAAC;SACjG,CAAC;QACF,IAAI,CAAC,MAAM,GAAG,CAAC,CAAC;IAClB,CAAC;IAED;;OAEG;IACH,IAAI;QACF,MAAM,KAAK,GAAG,IAAI,CAAC,OAAO,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC;QACxC,IAAI,CAAC,MAAM,EAAE,CAAC;QACd,IAAI,IAAI,CAAC,MAAM,IAAI,IAAI,CAAC,OAAO,CAAC,MAAM,EAAE,CAAC;YACvC,IAAI,CAAC,MAAM,GAAG,CAAC,CAAC;QAClB,CAAC;QAED,OAAO,KAAK,CAAC;IACf,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../common/common.js';\\n\\n/**\\n * Used to cycle through a list of predetermined #colors for the overlays.\\n * This helps users differentiate between overlays when several are shown at the\\n * same time.\\n */\\nexport class OverlayColorGenerator {\\n  readonly #colors: Common.Color.Color[];\\n  #index: number;\\n  constructor() {\\n    const format = Common.Color.Format.RGBA;\\n    this.#colors = [\\n      // F59794\\n      new Common.Color.Legacy([0.9607843137254902, 0.592156862745098, 0.5803921568627451, 1], format),\\n      // F0BF4C\\n      new Common.Color.Legacy([0.9411764705882353, 0.7490196078431373, 0.2980392156862745, 1], format),\\n      // D4ED31\\n      new Common.Color.Legacy([0.8313725490196079, 0.9294117647058824, 0.19215686274509805, 1], format),\\n      // 9EEB47\\n      new Common.Color.Legacy([0.6196078431372549, 0.9215686274509803, 0.2784313725490196, 1], format),\\n      // 5BD1D7\\n      new Common.Color.Legacy([0.3568627450980392, 0.8196078431372549, 0.8431372549019608, 1], format),\\n      // BCCEFB\\n      new Common.Color.Legacy([0.7372549019607844, 0.807843137254902, 0.984313725490196, 1], format),\\n      // C6BEEE\\n      new Common.Color.Legacy([0.7764705882352941, 0.7450980392156863, 0.9333333333333333, 1], format),\\n      // D094EA\\n      new Common.Color.Legacy([0.8156862745098039, 0.5803921568627451, 0.9176470588235294, 1], format),\\n      // EB94CF\\n      new Common.Color.Legacy([0.9215686274509803, 0.5803921568627451, 0.8117647058823529, 1], format),\\n    ];\\n    this.#index = 0;\\n  }\\n\\n  /**\\n   * Generate the next color in the spectrum\\n   */\\n  next(): Common.Color.Color {\\n    const color = this.#colors[this.#index];\\n    this.#index++;\\n    if (this.#index >= this.#colors.length) {\\n      this.#index = 0;\\n    }\\n\\n    return color;\\n  }\\n}\\n\"]}");

/***/ })

}]);