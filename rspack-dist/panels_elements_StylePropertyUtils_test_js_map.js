(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_StylePropertyUtils_test_js_map"], {
"./panels/elements/StylePropertyUtils.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"StylePropertyUtils.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/elements/StylePropertyUtils.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,EAAC,uBAAuB,EAAC,MAAM,qCAAqC,CAAC;AAE5E,OAAO,KAAK,QAAQ,MAAM,eAAe,CAAC;AAE1C,uBAAuB,CAAC,oBAAoB,EAAE,GAAG,EAAE;IACjD,EAAE,CAAC,wCAAwC,EAAE,GAAG,EAAE;QAChD,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,SAAS,EAAE,KAAK,EAAE,MAAM,EAAgC,CAAC,EACpE,mBAAmB,CAAC,CAAC;QACzB,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,YAAY,EAAE,KAAK,EAAE,YAAY,EAAgC,CAAC,EAC7E,2BAA2B,CAAC,CAAC;QACjC,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,kBAAkB,EAAE,KAAK,EAAE,qCAAqC,EAAgC,CAAC,EAC5G,0DAA0D,CAAC,CAAC;QAChE,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,uBAAuB,EAAE,KAAK,EAAE,MAAM,EAAgC,CAAC,EAClF,qCAAqC,CAAC,CAAC;QAC3C,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,eAAe,EAAE,KAAK,EAAE,QAAQ,EAAgC,CAAC,EAC5E,0BAA0B,CAAC,CAAC;QAChC,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,uBAAuB,EAAE,KAAK,EAAE,QAAQ,EAAgC,CAAC,EACpF,gCAAgC,CAAC,CAAC;QACtC,MAAM,CAAC,WAAW,CACd,QAAQ,CAAC,kBAAkB,CAAC,qCAAqC,CAC7D,EAAC,IAAI,EAAE,kBAAkB,EAAE,KAAK,EAAE,kBAAkB,EAAgC,CAAC,EACzF,uCAAuC,CAAC,CAAC;IAC/C,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport {describeWithEnvironment} from '../../testing/EnvironmentHelpers.js';\\n\\nimport * as Elements from './elements.js';\\n\\ndescribeWithEnvironment('StylePropertyUtils', () => {\\n  it('convert CSS declaration to JS property', () => {\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: 'display', value: 'flex'} as SDK.CSSProperty.CSSProperty),\\n        'display: \\\\'flex\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: 'box-sizing', value: 'border-box'} as SDK.CSSProperty.CSSProperty),\\n        'boxSizing: \\\\'border-box\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: 'background-color', value: 'var(--color-background-elevation-1)'} as SDK.CSSProperty.CSSProperty),\\n        'backgroundColor: \\\\'var(--color-background-elevation-1)\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: '--monospace-font-size', value: '12px'} as SDK.CSSProperty.CSSProperty),\\n        '\\\\'--monospace-font-size\\\\': \\\\'12px\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: 'mask-position', value: 'bottom'} as SDK.CSSProperty.CSSProperty),\\n        'maskPosition: \\\\'bottom\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: '-webkit-mask-position', value: 'bottom'} as SDK.CSSProperty.CSSProperty),\\n        'WebkitMaskPosition: \\\\'bottom\\\\'');\\n    assert.strictEqual(\\n        Elements.StylePropertyUtils.getCssDeclarationAsJavascriptProperty(\\n            {name: 'background-image', value: 'url(\\\"paper.gif\\\")'} as SDK.CSSProperty.CSSProperty),\\n        'backgroundImage: \\\\'url(\\\"paper.gif\\\")\\\\'');\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);