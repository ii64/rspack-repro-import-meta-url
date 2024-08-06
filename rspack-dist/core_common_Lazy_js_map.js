(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Lazy_js_map"], {
"./core/common/Lazy.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Lazy.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/Lazy.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,aAAa,GAAG,MAAM,CAAC,eAAe,CAAC,CAAC;AAC9C,MAAM,WAAW,GAAG,MAAM,CAAC,OAAO,CAAC,CAAC;AAEpC;;GAEG;AACH,MAAM,UAAU,IAAI,CAAI,QAAiB;IACvC,IAAI,KAAK,GAA8C,aAAa,CAAC;IACrE,IAAI,KAAK,GAAS,IAAI,CAAC;IAEvB,OAAO,GAAa,EAAE;QACpB,IAAI,KAAK,KAAK,WAAW,EAAE,CAAC;YAC1B,MAAM,KAAK,CAAC;QACd,CAAC;aAAM,IAAI,KAAK,KAAK,aAAa,EAAE,CAAC;YACnC,OAAO,KAAK,CAAC;QACf,CAAC;QAED,IAAI,CAAC;YACH,KAAK,GAAG,QAAQ,EAAE,CAAC;YACnB,OAAO,KAAK,CAAC;QACf,CAAC;QAAC,OAAO,GAAG,EAAE,CAAC;YACb,KAAK,GAAG,GAAG,CAAC;YACZ,KAAK,GAAG,WAAW,CAAC;YACpB,MAAM,KAAK,CAAC;QACd,CAAC;IACH,CAAC,CAAC;AACJ,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nconst UNINITIALIZED = Symbol('uninitialized');\\nconst ERROR_STATE = Symbol('error');\\n\\n/**\\n * Very basic memoizer. Will only invoke its callback the first time, returning the cached value all subsequent calls.\\n */\\nexport function lazy<T>(producer: () => T): () => symbol | T {\\n  let value: T|typeof ERROR_STATE|typeof UNINITIALIZED = UNINITIALIZED;\\n  let error: null = null;\\n\\n  return (): symbol|T => {\\n    if (value === ERROR_STATE) {\\n      throw error;\\n    } else if (value !== UNINITIALIZED) {\\n      return value;\\n    }\\n\\n    try {\\n      value = producer();\\n      return value;\\n    } catch (err) {\\n      error = err;\\n      value = ERROR_STATE;\\n      throw error;\\n    }\\n  };\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);