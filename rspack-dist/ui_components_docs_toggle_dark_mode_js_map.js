(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_toggle_dark_mode_js_map"], {
"./ui/components/docs/toggle_dark_mode.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"toggle_dark_mode.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/docs/toggle_dark_mode.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,gBAAgB,GAAG,4BAA4B,CAAC;AAEtD,SAAS,cAAc,CAAC,KAAe;IACrC,yFAAyF;IACzF,QAAQ,CAAC,IAAI,CAAC,SAAS,CAAC,MAAM,CAAC,GAAG,CAAC,gBAAgB,EAAE,GAAG,KAAK,KAAK,SAAS,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC;AAC/F,CAAC;AAED,MAAM,UAAU,IAAI;IAClB,4FAA4F;IAC5F,gFAAgF;IAEhF,MAAM,CAAC,gBAAgB,CAAC,MAAM,EAAE,GAAG,EAAE;QACnC,MAAM,MAAM,GAAG,QAAQ,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;QAChD,MAAM,CAAC,SAAS,GAAG,wBAAwB,CAAC;QAC5C,MAAM,CAAC,SAAS,GAAG,mBAAmB,CAAC;QAEvC,MAAM,CAAC,KAAK,CAAC,QAAQ,GAAG,OAAO,CAAC;QAChC,MAAM,CAAC,KAAK,CAAC,MAAM,GAAG,MAAM,CAAC;QAC7B,MAAM,CAAC,KAAK,CAAC,KAAK,GAAG,MAAM,CAAC;QAC5B,MAAM,CAAC,KAAK,CAAC,KAAK,GAAG,OAAO,CAAC;QAC7B,MAAM,CAAC,KAAK,CAAC,QAAQ,GAAG,MAAM,CAAC;QAC/B,MAAM,CAAC,KAAK,CAAC,OAAO,GAAG,KAAK,CAAC;QAC7B,MAAM,CAAC,KAAK,CAAC,MAAM,GAAG,SAAS,CAAC;QAEhC,MAAM,CAAC,gBAAgB,CAAC,OAAO,EAAE,KAAK,CAAC,EAAE;YACvC,KAAK,CAAC,cAAc,EAAE,CAAC;YACvB,cAAc,EAAE,CAAC;QACnB,CAAC,CAAC,CAAC;QAEH,QAAQ,CAAC,IAAI,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC;IACpC,CAAC,CAAC,CAAC;AACL,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nconst DARK_THEME_CLASS = 'theme-with-dark-background';\\n\\nfunction toggleDarkMode(force?: boolean): void {\\n  // Only use the second arg if its not undefined. The spec treats `undefined` as falsy. :/\\n  document.body.classList.toggle(...[DARK_THEME_CLASS, ...force !== undefined ? [force] : []]);\\n}\\n\\nexport function init(): void {\\n  // To keep consistent test results, we don't auto-initialize darkmode. This'd do it, though:\\n  //    toggleDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);\\n\\n  window.addEventListener('load', () => {\\n    const button = document.createElement('button');\\n    button.innerText = 'Toggle light/dark mode';\\n    button.className = 'component-docs-ui';\\n\\n    button.style.position = 'fixed';\\n    button.style.bottom = '10px';\\n    button.style.right = '10px';\\n    button.style.width = '200px';\\n    button.style.fontSize = '16px';\\n    button.style.padding = '5px';\\n    button.style.cursor = 'pointer';\\n\\n    button.addEventListener('click', event => {\\n      event.preventDefault();\\n      toggleDarkMode();\\n    });\\n\\n    document.body.appendChild(button);\\n  });\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);