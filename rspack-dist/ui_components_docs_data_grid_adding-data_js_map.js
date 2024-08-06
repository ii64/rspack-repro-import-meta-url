(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_data_grid_adding-data_js_map"], {
"./ui/components/docs/data_grid/adding-data.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"adding-data.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/data_grid/adding-data.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,8BAA8B,CAAC;AACzD,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AAEpD,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;AAEnD,SAAS,CAAC,IAAI,GAAG;IACf,OAAO,EAAE;QACP,EAAC,EAAE,EAAE,KAAK,EAAE,KAAK,EAAE,KAAK,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAC;QAC5E,EAAC,EAAE,EAAE,OAAO,EAAE,KAAK,EAAE,OAAO,EAAE,cAAc,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,KAAK,EAAC;KACjF;IACD,IAAI,EAAE,KAAK,CAAC,IAAI,CACZ,EAAC,MAAM,EAAE,EAAE,EAAC,EACZ,GAAG,EAAE;QACH,OAAO,YAAY,EAAE,CAAC;IACxB,CAAC,CAAC;IACN,UAAU,EAAE,IAAI;CACjB,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAE7D,SAAS,YAAY;IACnB,MAAM,GAAG,GAAG,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,GAAG,EAAE,CAAC,CAAC;IAC3C,MAAM,KAAK,GAAG,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,GAAG,EAAE,CAAC,CAAC;IAC7C,MAAM,aAAa,GAAG;QACpB,KAAK,EAAE;YACL,EAAC,QAAQ,EAAE,KAAK,EAAE,KAAK,EAAE,QAAQ,GAAG,EAAE,EAAE,KAAK,EAAE,QAAQ,GAAG,EAAE,EAAC;YAC7D,EAAC,QAAQ,EAAE,OAAO,EAAE,KAAK,EAAE,UAAU,KAAK,EAAE,EAAE,KAAK,EAAE,UAAU,KAAK,EAAE,EAAC;SACxE;KACF,CAAC;IACF,OAAO,aAAa,CAAC;AACvB,CAAC;AAED;;;;GAIG;AACH,mBAAmB;AACnB,MAAM,CAAC,SAAS,GAAG;IACjB,SAAS,EAAE,CAAC;AACd,CAAC,CAAC;AAEF,SAAS,SAAS;IAChB,MAAM,MAAM,GAAG,YAAY,EAAE,CAAC;IAE9B,SAAS,CAAC,IAAI,GAAG;QACf,GAAG,SAAS,CAAC,IAAI;QACjB,IAAI,EAAE,CAAC,GAAG,SAAS,CAAC,IAAI,CAAC,IAAI,EAAE,MAAM,CAAC;KACvC,CAAC;AACJ,CAAC;AAED,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,EAAE,gBAAgB,CAAC,OAAO,EAAE,CAAC,KAAY,EAAE,EAAE;IACzE,KAAK,CAAC,cAAc,EAAE,CAAC;IACvB,SAAS,EAAE,CAAC;AACd,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as DataGrid from '../../data_grid/data_grid.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\n\\nconst component = new DataGrid.DataGrid.DataGrid();\\n\\ncomponent.data = {\\n  columns: [\\n    {id: 'key', title: 'Key', widthWeighting: 1, visible: true, hideable: false},\\n    {id: 'value', title: 'Value', widthWeighting: 1, visible: true, hideable: false},\\n  ],\\n  rows: Array.from(\\n      {length: 10},\\n      () => {\\n        return getRandomRow();\\n      }),\\n  activeSort: null,\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\\nfunction getRandomRow() {\\n  const key = Math.floor(Math.random() * 10);\\n  const value = Math.floor(Math.random() * 10);\\n  const randomDataRow = {\\n    cells: [\\n      {columnId: 'key', value: `Key: ${key}`, title: `Key: ${key}`},\\n      {columnId: 'value', value: `Value: ${value}`, title: `Value: ${value}`},\\n    ],\\n  };\\n  return randomDataRow;\\n}\\n\\n/**\\n * Set so we can call this from an interaction test to emulate the user\\n * interacting with the data grid whilst something is populating the grid with\\n * new data - e.g. like the protocol monitor.\\n */\\n// @ts-expect-error\\nwindow.addNewRow = function() {\\n  addNewRow();\\n};\\n\\nfunction addNewRow() {\\n  const newRow = getRandomRow();\\n\\n  component.data = {\\n    ...component.data,\\n    rows: [...component.data.rows, newRow],\\n  };\\n}\\n\\ndocument.querySelector('#add')?.addEventListener('click', (event: Event) => {\\n  event.preventDefault();\\n  addNewRow();\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);