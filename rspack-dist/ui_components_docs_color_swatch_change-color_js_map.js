(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_color_swatch_change-color_js_map"], {
"./ui/components/docs/color_swatch/change-color.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"change-color.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/color_swatch/change-color.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,mCAAmC,CAAC;AAC5D,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,YAAY,MAAM,2DAA2D,CAAC;AAC1F,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAC,YAAY,CAAC,CAAC;AACvD,MAAM,MAAM,GAAG,QAAQ,CAAC,aAAa,CAAmB,SAAS,CAAC,CAAC;AAEnE,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,YAAY,CAAC,WAAW,CAAC,WAAW,EAAE,CAAC;AAC7D,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAC7D,SAAS,CAAC,WAAW,CAAC,MAAM,CAAC,KAAK,CAAC,KAAK,CAAC,MAAM,CAAuB,CAAC,CAAC;AACxE,SAAS,EAAE,YAAY,CAAC,SAAS,EAAE,MAAM,CAAC,CAAC;AAE3C,MAAM,EAAE,gBAAgB,CAAC,OAAO,EAAE,CAAC,CAAC,EAAE;IACpC,MAAM,KAAK,GAAG,MAAM,CAAC,KAAK,CAAC,KAAK,CAAE,CAAC,CAAC,MAA2B,CAAC,KAAK,CAAC,CAAC;IACvE,IAAI,KAAK,EAAE,CAAC;QACV,SAAS,CAAC,WAAW,CAAC,KAAK,CAAC,CAAC;IAC/B,CAAC;AACH,CAAC,CAAC,CAAC;AAEH,SAAS,CAAC,gBAAgB,CAAC,YAAY,CAAC,WAAW,CAAC,UAAU,CAAC,SAAS,EAAE,GAAG,EAAE,CAAC,MAAM,EAAE,KAAK,EAAE,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../../../core/common/common.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as InlineEditor from '../../../legacy/components/inline_editor/inline_editor.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nconst container = document.querySelector('#container');\\nconst picker = document.querySelector<HTMLInputElement>('#picker');\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new InlineEditor.ColorSwatch.ColorSwatch();\\ndocument.getElementById('container')?.appendChild(component);\\ncomponent.renderColor(Common.Color.parse('#f06') as Common.Color.Color);\\ncontainer?.insertBefore(component, picker);\\n\\npicker?.addEventListener('input', e => {\\n  const color = Common.Color.parse((e.target as HTMLInputElement).value);\\n  if (color) {\\n    component.renderColor(color);\\n  }\\n});\\n\\ncomponent.addEventListener(InlineEditor.ColorSwatch.ClickEvent.eventName, () => picker?.click());\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);