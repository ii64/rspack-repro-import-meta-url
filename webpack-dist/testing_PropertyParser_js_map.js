(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_PropertyParser_js_map"],{

/***/ "./testing/PropertyParser.js.map":
/*!***************************************!*\
  !*** ./testing/PropertyParser.js.map ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PropertyParser.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/PropertyParser.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAC7B,OAAO,KAAK,GAAG,MAAM,oBAAoB,CAAC;AAC1C,OAAO,KAAK,UAAU,MAAM,mDAAmD,CAAC;AAEhF,MAAM,OAAO,OAAQ,SAAQ,GAAG,CAAC,iBAAiB,CAAC,UAAU;IAC3D,YAAY,GAAa,EAAE,CAAC;IAC5B,OAAO,GAAG,CAAC,CAAC;IAEO,KAAK,CAAC,EAAC,IAAI,EAAsC;QAClE,MAAM,IAAI,GAAG,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QACjC,IAAI,CAAC,YAAY,CAAC,IAAI,CAAC,GAAG,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,OAAO,CAAC,IAAI,IAAI,CAAC,IAAI,GAAG,IAAI,KAAK,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,KAAK,IAAI,EAAE,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC;QAC3G,IAAI,CAAC,OAAO,EAAE,CAAC;QACf,OAAO,IAAI,CAAC;IACd,CAAC;IACkB,KAAK;QACtB,IAAI,CAAC,OAAO,EAAE,CAAC;IACjB,CAAC;IAED,GAAG;QACD,OAAO,IAAI,CAAC,YAAY,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IACtC,CAAC;IAED,MAAM,CAAC,GAAG,CAAC,GAAqC;QAC9C,yCAAyC;QACzC,OAAO,CAAC,GAAG,CAAC,OAAO,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,EAAE,CAAC,CAAC;IACvC,CAAC;IAED,MAAM,CAAC,IAAI,CAAC,IAAY;QACtB,MAAM,GAAG,GAAG,IAAI,GAAG,CAAC,iBAAiB,CAAC,UAAU,CAAC,EAAE,EAAE,IAAI,EAAE,UAAU,CAAC,GAAG,CAAC,WAAW,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC,OAAO,CAAC,CAAC;QAClH,OAAO,OAAO,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC,GAAG,EAAE,CAAC;IACjC,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport * as SDK from '../core/sdk/sdk.js';\\nimport * as CodeMirror from '../third_party/codemirror.next/codemirror.next.js';\\n\\nexport class Printer extends SDK.CSSPropertyParser.TreeWalker {\\n  #printedText: string[] = [];\\n  #indent = 0;\\n\\n  protected override enter({node}: SDK.CSSPropertyParser.SyntaxNodeRef): boolean {\\n    const text = this.ast.text(node);\\n    this.#printedText.push(`${'|'.repeat(this.#indent)} ${node.name}${text !== node.name ? `: ${text}` : ''}`);\\n    this.#indent++;\\n    return true;\\n  }\\n  protected override leave(): void {\\n    this.#indent--;\\n  }\\n\\n  get(): string {\\n    return this.#printedText.join('\\\\n');\\n  }\\n\\n  static log(ast: SDK.CSSPropertyParser.SyntaxTree): void {\\n    /* eslint-disable-next-line no-console */\\n    console.log(Printer.walk(ast).get());\\n  }\\n\\n  static rule(rule: string): string {\\n    const ast = new SDK.CSSPropertyParser.SyntaxTree('', rule, CodeMirror.css.cssLanguage.parser.parse(rule).topNode);\\n    return Printer.walk(ast).get();\\n  }\\n}\\n\"]}");

/***/ })

}]);