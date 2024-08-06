(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_CSSQuery_test_js_map"], {
"./panels/elements/components/CSSQuery.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"CSSQuery.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/CSSQuery.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,oBAAoB,EAAC,MAAM,gCAAgC,CAAC;AAEpE,OAAO,KAAK,kBAAkB,MAAM,iBAAiB,CAAC;AAEtD,QAAQ,CAAC,UAAU,EAAE,GAAG,EAAE;IACxB,EAAE,CAAC,kCAAkC,EAAE,GAAG,EAAE;QAC1C,MAAM,SAAS,GAAG,IAAI,kBAAkB,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;QAC7D,oBAAoB,CAAC,SAAS,CAAC,CAAC;QAChC,SAAS,CAAC,IAAI,GAAG;YACf,WAAW,EAAE,YAAY;YACzB,SAAS,EAAE,mBAAmB;YAC9B,YAAY,EAAE,KAAK;SACpB,CAAC;QAEF,MAAM,YAAY,GAAG,SAAS,CAAC,UAAW,CAAC,aAAa,CAAc,QAAQ,CAAC,CAAC;QAChF,MAAM,CAAC,SAAS,CAAC,YAAY,EAAE,4BAA4B,CAAC,CAAC;QAE7D,MAAM,CAAC,WAAW,CACd,YAAY,CAAC,SAAS,EACtB,gCAAgC,EAChC,uDAAuD,CAC1D,CAAC;IACJ,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,2CAA2C,EAAE,GAAG,EAAE;QACnD,MAAM,SAAS,GAAG,IAAI,kBAAkB,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;QAC7D,oBAAoB,CAAC,SAAS,CAAC,CAAC;QAEhC,MAAM,aAAa,GAAG,KAAK,CAAC,GAAG,EAAE,CAAC;QAElC,SAAS,CAAC,IAAI,GAAG;YACf,WAAW,EAAE,YAAY;YACzB,SAAS,EAAE,mBAAmB;YAC9B,SAAS,EAAE,mBAAmB;YAC9B,gBAAgB,EAAE,aAAa;YAC/B,YAAY,EAAE,KAAK;SACpB,CAAC;QAEF,MAAM,YAAY,GAAG,SAAS,CAAC,UAAW,CAAC,aAAa,CAAc,QAAQ,CAAC,CAAC;QAChF,MAAM,CAAC,SAAS,CAAC,YAAY,EAAE,4BAA4B,CAAC,CAAC;QAE7D,MAAM,CAAC,WAAW,CACd,YAAY,CAAC,SAAS,EACtB,kDAAkD,EAClD,uDAAuD,CAC1D,CAAC;QAEF,MAAM,SAAS,GAAG,YAAY,CAAC,aAAa,CAAc,uBAAuB,CAAC,CAAC;QACnF,MAAM,CAAC,SAAS,CAAC,SAAS,EAAE,kCAAkC,CAAC,CAAC;QAEhE,SAAS,CAAC,KAAK,EAAE,CAAC;QAClB,MAAM,CAAC,WAAW,CAAC,aAAa,CAAC,SAAS,EAAE,CAAC,EAAE,2DAA2D,CAAC,CAAC;IAC9G,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {renderElementIntoDOM} from '../../../testing/DOMHelpers.js';\\n\\nimport * as ElementsComponents from './components.js';\\n\\ndescribe('CSSQuery', () => {\\n  it('renders a normal query correctly', () => {\\n    const component = new ElementsComponents.CSSQuery.CSSQuery();\\n    renderElementIntoDOM(component);\\n    component.data = {\\n      queryPrefix: '@container',\\n      queryText: '(min-width: 10px)',\\n      jslogContext: 'foo',\\n    };\\n\\n    const queryElement = component.shadowRoot!.querySelector<HTMLElement>('.query');\\n    assert.isNotNull(queryElement, 'query element should exist');\\n\\n    assert.strictEqual(\\n        queryElement.innerText,\\n        '@container (min-width: 10px) {',\\n        'text content of query element should match query text',\\n    );\\n  });\\n\\n  it('renders an editable named query correctly', () => {\\n    const component = new ElementsComponents.CSSQuery.CSSQuery();\\n    renderElementIntoDOM(component);\\n\\n    const clickListener = sinon.spy();\\n\\n    component.data = {\\n      queryPrefix: '@container',\\n      queryName: 'container-query-1',\\n      queryText: '(max-width: 10px)',\\n      onQueryTextClick: clickListener,\\n      jslogContext: 'foo',\\n    };\\n\\n    const queryElement = component.shadowRoot!.querySelector<HTMLElement>('.query');\\n    assert.isNotNull(queryElement, 'query element should exist');\\n\\n    assert.strictEqual(\\n        queryElement.innerText,\\n        '@container container-query-1 (max-width: 10px) {',\\n        'text content of query element should match query text',\\n    );\\n\\n    const queryText = queryElement.querySelector<HTMLElement>('.editable .query-text');\\n    assert.isNotNull(queryText, 'editable query text should exist');\\n\\n    queryText.click();\\n    assert.strictEqual(clickListener.callCount, 1, 'query text click listener should be triggered by clicking');\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);