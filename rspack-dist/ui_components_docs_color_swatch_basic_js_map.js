(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_color_swatch_basic_js_map"], {
"./ui/components/docs/color_swatch/basic.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/color_swatch/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,mCAAmC,CAAC;AAC5D,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,YAAY,MAAM,2DAA2D,CAAC;AAC1F,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,SAAS,aAAa,CAAC,MAA4C;IACjE,MAAM,EAAE,GAAG,QAAQ,CAAC,aAAa,CAAC,IAAI,CAAC,CAAC;IACxC,EAAE,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC;IACvB,QAAQ,CAAC,aAAa,CAAC,YAAY,CAAC,EAAE,WAAW,CAAC,EAAE,CAAC,CAAC;AACxD,CAAC;AAED,SAAS;AACT,IAAI,SAAS,GAAG,IAAI,YAAY,CAAC,WAAW,CAAC,WAAW,EAAE,CAAC;AAC3D,SAAS,CAAC,WAAW,CAAC,MAAM,CAAC,KAAK,CAAC,KAAK,CAAC,MAAM,CAAuB,CAAC,CAAC;AACxE,aAAa,CAAC,SAAS,CAAC,CAAC;AAEzB,6BAA6B;AAC7B,SAAS,GAAG,IAAI,YAAY,CAAC,WAAW,CAAC,WAAW,EAAE,CAAC;AACvD,SAAS,CAAC,WAAW,CAAC,MAAM,CAAC,KAAK,CAAC,KAAK,CAAC,MAAM,CAAuB,CAAC,CAAC;AACxE,IAAI,OAAO,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;AAC7C,OAAO,CAAC,WAAW,GAAG,EAAE,CAAC;AACzB,SAAS,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;AAC/B,aAAa,CAAC,SAAS,CAAC,CAAC;AAEzB,iBAAiB;AACjB,SAAS,GAAG,IAAI,YAAY,CAAC,WAAW,CAAC,WAAW,EAAE,CAAC;AACvD,SAAS,CAAC,WAAW,CAAC,MAAM,CAAC,KAAK,CAAC,KAAK,CAAC,eAAe,CAAuB,CAAC,CAAC;AACjF,OAAO,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;AACzC,OAAO,CAAC,WAAW,GAAG,gBAAgB,CAAC;AACvC,SAAS,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;AAC/B,aAAa,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../../../core/common/common.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as InlineEditor from '../../../legacy/components/inline_editor/inline_editor.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nfunction appendExample(swatch: InlineEditor.ColorSwatch.ColorSwatch): void {\\n  const li = document.createElement('li');\\n  li.appendChild(swatch);\\n  document.querySelector('#container')?.appendChild(li);\\n}\\n\\n// Simple\\nlet component = new InlineEditor.ColorSwatch.ColorSwatch();\\ncomponent.renderColor(Common.Color.parse('#f06') as Common.Color.Color);\\nappendExample(component);\\n\\n// No text next to the swatch\\ncomponent = new InlineEditor.ColorSwatch.ColorSwatch();\\ncomponent.renderColor(Common.Color.parse('gold') as Common.Color.Color);\\nlet content = document.createElement('span');\\ncontent.textContent = '';\\ncomponent.appendChild(content);\\nappendExample(component);\\n\\n// Custom content\\ncomponent = new InlineEditor.ColorSwatch.ColorSwatch();\\ncomponent.renderColor(Common.Color.parse('rebeccapurple') as Common.Color.Color);\\ncontent = document.createElement('span');\\ncontent.textContent = 'custom content';\\ncomponent.appendChild(content);\\nappendExample(component);\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);