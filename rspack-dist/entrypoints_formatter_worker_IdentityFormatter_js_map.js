(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_formatter_worker_IdentityFormatter_js_map"], {
"./entrypoints/formatter_worker/IdentityFormatter.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"IdentityFormatter.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/formatter_worker/IdentityFormatter.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,OAAO,iBAAiB;IACR;IAApB,YAAoB,OAAgC;QAAhC,YAAO,GAAP,OAAO,CAAyB;IACpD,CAAC;IAED,MAAM,CAAC,IAAY,EAAE,WAAqB,EAAE,UAAkB,EAAE,QAAgB;QAC9E,MAAM,OAAO,GAAG,IAAI,CAAC,SAAS,CAAC,UAAU,EAAE,QAAQ,CAAC,CAAC;QACrD,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAC,OAAO,EAAE,UAAU,CAAC,CAAC;IAC7C,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2016 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type FormattedContentBuilder} from './FormattedContentBuilder.js';\\n\\nexport class IdentityFormatter {\\n  constructor(private builder: FormattedContentBuilder) {\\n  }\\n\\n  format(text: string, lineEndings: number[], fromOffset: number, toOffset: number): void {\\n    const content = text.substring(fromOffset, toOffset);\\n    this.builder.addToken(content, fromOffset);\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);