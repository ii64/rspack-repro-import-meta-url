(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_linear_memory_inspector_basic_js_map"], {
"./ui/components/docs/linear_memory_inspector/basic.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/linear_memory_inspector/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,+BAA+B,MAAM,qEAAqE,CAAC;AACvH,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,KAAK,GAAG,EAAE,CAAC;AACjB,MAAM,MAAM,GAAG,gDAAgD,CAAC;AAEhE,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,MAAM,CAAC,MAAM,EAAE,EAAE,CAAC,EAAE,CAAC;IACvC,KAAK,CAAC,IAAI,CAAC,MAAM,CAAC,UAAU,CAAC,CAAC,CAAC,CAAC,CAAC;AACnC,CAAC;AAED,KAAK,IAAI,CAAC,GAAG,CAAC,IAAI,EAAE,CAAC,GAAG,IAAI,EAAE,EAAE,CAAC,EAAE,CAAC;IAClC,KAAK,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;AAChB,CAAC;AAED,MAAM,MAAM,GAAG,IAAI,UAAU,CAAC,KAAK,CAAC,CAAC;AACrC,MAAM,eAAe,GAAG,IAAI,+BAA+B,CAAC,qBAAqB,CAAC,qBAAqB,EAAE,CAAC;AAC1G,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,eAAe,CAAC,CAAC;AAEnE,eAAe,CAAC,IAAI,GAAG;IACrB,MAAM,EAAE,MAAM;IACd,OAAO,EAAE,CAAC;IACV,YAAY,EAAE,CAAC;IACf,iBAAiB,EAAE,MAAM,CAAC,MAAM;CACjC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as LinearMemoryInspectorComponents from '../../../../panels/linear_memory_inspector/components/components.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst array = [];\\nconst string = 'Hello this is a string from the memory buffer!';\\n\\nfor (let i = 0; i < string.length; ++i) {\\n  array.push(string.charCodeAt(i));\\n}\\n\\nfor (let i = -1000; i < 1000; ++i) {\\n  array.push(i);\\n}\\n\\nconst memory = new Uint8Array(array);\\nconst memoryInspector = new LinearMemoryInspectorComponents.LinearMemoryInspector.LinearMemoryInspector();\\ndocument.getElementById('container')?.appendChild(memoryInspector);\\n\\nmemoryInspector.data = {\\n  memory: memory,\\n  address: 0,\\n  memoryOffset: 0,\\n  outerMemoryLength: memory.length,\\n};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);