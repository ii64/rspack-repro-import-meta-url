(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_data_grid_large-data_js_map"], {
"./ui/components/docs/data_grid/large-data.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"large-data.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/data_grid/large-data.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,QAAQ,MAAM,8BAA8B,CAAC;AACzD,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;AAEnD,SAAS,kBAAkB;IACzB,IAAI,GAAG,GAAG,EAAE,CAAC;IACb,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,EAAE,EAAE,CAAC,EAAE,EAAE,CAAC;QAC5B,MAAM,MAAM,GAAG,MAAM,CAAC,YAAY,CAAC,IAAI,CAAC,KAAK,CAAC,EAAE,GAAG,IAAI,CAAC,MAAM,EAAE,GAAG,EAAE,CAAC,CAAC,CAAC;QACxE,GAAG,IAAI,MAAM,CAAC;IAChB,CAAC;IACD,OAAO,GAAG,CAAC;AACb,CAAC;AAED,MAAM,IAAI,GAAG,EAAE,CAAC;AAChB,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,IAAI,EAAE,CAAC,EAAE,EAAE,CAAC;IAC9B,MAAM,MAAM,GAAG;QACb,KAAK,EAAE;YACL,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,OAAO,CAAC,GAAG,CAAC,EAAE,EAAC;YACxC,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,kBAAkB,EAAE,EAAC;SACjD;KACF,CAAC;IACF,IAAI,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC;AACpB,CAAC;AAED,SAAS,CAAC,IAAI,GAAG;IACf,OAAO,EAAE;QACP,EAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAE,QAAQ,EAAE,IAAI,EAAC;QAC5F,EAAC,EAAE,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC;KAChF;IACD,IAAI;IACJ,UAAU,EAAE,IAAI;CACjB,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as DataGrid from '../../data_grid/data_grid.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new DataGrid.DataGrid.DataGrid();\\n\\nfunction createRandomString(): string {\\n  let ret = '';\\n  for (let i = 0; i < 16; i++) {\\n    const letter = String.fromCharCode(Math.floor(65 + Math.random() * 26));\\n    ret += letter;\\n  }\\n  return ret;\\n}\\n\\nconst rows = [];\\nfor (let i = 0; i < 1000; i++) {\\n  const newRow = {\\n    cells: [\\n      {columnId: 'key', value: `Row ${i + 1}`},\\n      {columnId: 'value', value: createRandomString()},\\n    ],\\n  };\\n  rows.push(newRow);\\n}\\n\\ncomponent.data = {\\n  columns: [\\n    {id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false, sortable: true},\\n    {id: 'value', title: 'Value', widthWeighting: 1, visible: true, hideable: true},\\n  ],\\n  rows,\\n  activeSort: null,\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);