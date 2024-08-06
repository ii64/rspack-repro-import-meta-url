(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_JSONConverter_js_map"],{

/***/ "./panels/recorder/converters/JSONConverter.js.map":
/*!*********************************************************!*\
  !*** ./panels/recorder/converters/JSONConverter.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"JSONConverter.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/converters/JSONConverter.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2DAA2D,CAAC;AAC7F,OAAO,KAAK,MAAM,MAAM,qBAAqB,CAAC;AAI9C,MAAM,OAAO,aAAa;IACxB,OAAO,CAAS;IAEhB,YAAY,MAAc;QACxB,IAAI,CAAC,OAAO,GAAG,MAAM,CAAC;IACxB,CAAC;IAED,KAAK;QACH,0DAA6C;IAC/C,CAAC;IAED,aAAa;QACX,OAAO,MAAM,CAAC;IAChB,CAAC;IAED,WAAW,CAAC,IAA4B;QACtC,OAAO,GAAG,IAAI,CAAC,KAAK,OAAO,CAAC;IAC9B,CAAC;IAED,KAAK,CAAC,SAAS,CACX,IAA4B;QAE9B,MAAM,IAAI,GAAG,MAAM,eAAe,CAAC,SAAS,CAAC,IAAI,EAAE;YACjD,SAAS,EAAE,IAAI,eAAe,CAAC,sBAAsB,EAAE;YACvD,WAAW,EAAE,IAAI,CAAC,OAAO;SAC1B,CAAC,CAAC;QACH,MAAM,SAAS,GAAG,eAAe,CAAC,cAAc,CAAC,IAAI,CAAC,CAAC;QACvD,OAAO,CAAC,eAAe,CAAC,cAAc,CAAC,IAAI,CAAC,EAAE,SAAS,CAAC,CAAC;IAC3D,CAAC;IAED,KAAK,CAAC,aAAa,CAAC,IAAwB;QAC1C,OAAO,MAAM,eAAe,CAAC,aAAa,CAAC,IAAI,EAAE;YAC/C,SAAS,EAAE,IAAI,eAAe,CAAC,sBAAsB,EAAE;YACvD,WAAW,EAAE,IAAI,CAAC,OAAO;SAC1B,CAAC,CAAC;IACL,CAAC;IAED,YAAY;QACV,OAAO,kBAAkB,CAAC;IAC5B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as PuppeteerReplay from '../../../third_party/puppeteer-replay/puppeteer-replay.js';\\nimport * as Models from '../models/models.js';\\n\\nimport {type Converter} from './Converter.js';\\n\\nexport class JSONConverter implements Converter {\\n  #indent: string;\\n\\n  constructor(indent: string) {\\n    this.#indent = indent;\\n  }\\n\\n  getId(): string {\\n    return Models.ConverterIds.ConverterIds.JSON;\\n  }\\n\\n  getFormatName(): string {\\n    return 'JSON';\\n  }\\n\\n  getFilename(flow: Models.Schema.UserFlow): string {\\n    return `${flow.title}.json`;\\n  }\\n\\n  async stringify(\\n      flow: Models.Schema.UserFlow,\\n      ): Promise<[string, PuppeteerReplay.SourceMap|undefined]> {\\n    const text = await PuppeteerReplay.stringify(flow, {\\n      extension: new PuppeteerReplay.JSONStringifyExtension(),\\n      indentation: this.#indent,\\n    });\\n    const sourceMap = PuppeteerReplay.parseSourceMap(text);\\n    return [PuppeteerReplay.stripSourceMap(text), sourceMap];\\n  }\\n\\n  async stringifyStep(step: Models.Schema.Step): Promise<string> {\\n    return await PuppeteerReplay.stringifyStep(step, {\\n      extension: new PuppeteerReplay.JSONStringifyExtension(),\\n      indentation: this.#indent,\\n    });\\n  }\\n\\n  getMediaType(): string {\\n    return 'application/json';\\n  }\\n}\\n\"]}");

/***/ })

}]);