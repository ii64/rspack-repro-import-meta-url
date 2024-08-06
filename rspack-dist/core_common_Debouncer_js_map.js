(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Debouncer_js_map"], {
"./core/common/Debouncer.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Debouncer.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/Debouncer.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B;;GAEG;AACH,MAAM,CAAC,MAAM,QAAQ,GAAG,UAAS,IAAgB,EAAE,KAAa;IAC9D,IAAI,KAAK,GAAG,CAAC,CAAC;IACd,MAAM,SAAS,GAAG,GAAS,EAAE;QAC3B,YAAY,CAAC,KAAK,CAAC,CAAC;QACpB,KAAK,GAAG,MAAM,CAAC,UAAU,CAAC,GAAG,EAAE,CAAC,IAAI,EAAE,EAAE,KAAK,CAAC,CAAC;IACjD,CAAC,CAAC;IACF,OAAO,SAAS,CAAC;AACnB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * Debounce utility function, ensures that the function passed in is only called once the function stops being called and the delay has expired.\\n */\\nexport const debounce = function(func: () => void, delay: number): () => void {\\n  let timer = 0;\\n  const debounced = (): void => {\\n    clearTimeout(timer);\\n    timer = window.setTimeout(() => func(), delay);\\n  };\\n  return debounced;\\n};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);