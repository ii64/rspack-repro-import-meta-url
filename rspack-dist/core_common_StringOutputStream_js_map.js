(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_StringOutputStream_js_map"], {
"./core/common/StringOutputStream.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"StringOutputStream.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/StringOutputStream.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAO7B,MAAM,OAAO,kBAAkB;IAC7B,aAAa,CAAS;IACtB;QACE,IAAI,CAAC,aAAa,GAAG,EAAE,CAAC;IAC1B,CAAC;IAED,KAAK,CAAC,KAAK,CAAC,KAAa;QACvB,IAAI,CAAC,aAAa,IAAI,KAAK,CAAC;IAC9B,CAAC;IAED,KAAK,CAAC,KAAK;IACX,CAAC;IAED,IAAI;QACF,OAAO,IAAI,CAAC,aAAa,CAAC;IAC5B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2015 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport interface OutputStream {\\n  write(data: string, endOfFile?: boolean): Promise<void>;\\n  close(): Promise<void>;\\n}\\n\\nexport class StringOutputStream implements OutputStream {\\n  #dataInternal: string;\\n  constructor() {\\n    this.#dataInternal = '';\\n  }\\n\\n  async write(chunk: string): Promise<void> {\\n    this.#dataInternal += chunk;\\n  }\\n\\n  async close(): Promise<void> {\\n  }\\n\\n  data(): string {\\n    return this.#dataInternal;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);