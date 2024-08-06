(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Infobar_test_js_map"], {
"./ui/legacy/Infobar.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Infobar.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/Infobar.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EACL,kBAAkB,EAClB,oBAAoB,GACrB,MAAM,6BAA6B,CAAC;AACrC,OAAO,EACL,sBAAsB,EACtB,oBAAoB,GACrB,MAAM,qCAAqC,CAAC;AAC7C,OAAO,KAAK,OAAO,MAAM,kCAAkC,CAAC;AAE5D,OAAO,KAAK,EAAE,MAAM,aAAa,CAAC;AAElC,QAAQ,CAAC,SAAS,EAAE,GAAG,EAAE;IACvB,MAAM,CAAC,KAAK,IAAI,EAAE;QAChB,MAAM,oBAAoB,EAAE,CAAC;IAC/B,CAAC,CAAC,CAAC;IAEH,KAAK,CAAC,KAAK,IAAI,EAAE;QACf,MAAM,sBAAsB,EAAE,CAAC;IACjC,CAAC,CAAC,CAAC;IAEH,MAAM,mBAAmB,GAAG,CAAC,SAA6B,EAAE,WAAmB,EAAE,EAAE;QACjF,oBAAoB,CAAC,SAAS,CAAC,OAAO,CAAC,CAAC;QAExC,MAAM,OAAO,GAAG,SAAS,CAAC,OAAO,CAAC,UAAW,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;QACxE,MAAM,CAAC,UAAU,CAAC,OAAO,EAAE,cAAc,CAAC,CAAC;QAC3C,MAAM,eAAe,GAAG,OAAO,CAAC,aAAa,CAAC,iBAAiB,CAAC,CAAC;QACjE,MAAM,CAAC,UAAU,CAAC,eAAe,EAAE,OAAO,CAAC,MAAM,CAAC,MAAM,CAAC,CAAC;QAC1D,MAAM,UAAU,GAAG,OAAO,CAAC,aAAa,CAAC,uBAAuB,CAAC,CAAC;QAClE,MAAM,CAAC,UAAU,CAAC,UAAU,EAAE,cAAc,CAAC,CAAC;QAE9C,MAAM,CAAC,MAAM,CAAC,UAAU,CAAC,SAAS,CAAC,QAAQ,CAAC,QAAQ,CAAC,EAAE,wCAAwC,CAAC,CAAC;QACjG,MAAM,CAAC,WAAW,CAAC,UAAU,CAAC,WAAW,EAAE,WAAW,CAAC,CAAC;QAExD,kBAAkB,CAAC,eAAe,CAAC,CAAC;QACpC,MAAM,CAAC,OAAO,CACV,UAAU,CAAC,SAAS,CAAC,QAAQ,CAAC,QAAQ,CAAC,EACvC,sEAAsE,CAAC,CAAC;IAC9E,CAAC,CAAC;IAEF,EAAE,CAAC,2CAA2C,EAAE,GAAG,EAAE;QACnD,MAAM,SAAS,GAAG,IAAI,EAAE,CAAC,OAAO,CAAC,OAAO,0CAA0B,mBAAmB,CAAC,CAAC;QACvF,MAAM,WAAW,GAAG,iCAAiC,CAAC;QACtD,SAAS,CAAC,uBAAuB,CAAC,WAAW,CAAC,CAAC;QAC/C,mBAAmB,CAAC,SAAS,EAAE,WAAW,CAAC,CAAC;IAC9C,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,kDAAkD,EAAE,GAAG,EAAE;QAC1D,MAAM,SAAS,GAAG,IAAI,EAAE,CAAC,OAAO,CAAC,OAAO,0CAA0B,mBAAmB,CAAC,CAAC;QACvF,MAAM,QAAQ,GAAG,cAAc,CAAC;QAChC,MAAM,IAAI,GAAG,EAAE,CAAC,KAAK,CAAC,KAAK,CAAC,MAAM,CAAC,yBAAyB,EAAE,QAAQ,CAAC,CAAC;QACxE,SAAS,CAAC,uBAAuB,CAAC,IAAI,CAAC,CAAC;QACxC,mBAAmB,CAAC,SAAS,EAAE,QAAQ,CAAC,CAAC;IAC3C,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {\\n  dispatchClickEvent,\\n  renderElementIntoDOM,\\n} from '../../testing/DOMHelpers.js';\\nimport {\\n  deinitializeGlobalVars,\\n  initializeGlobalVars,\\n} from '../../testing/EnvironmentHelpers.js';\\nimport * as Buttons from '../components/buttons/buttons.js';\\n\\nimport * as UI from './legacy.js';\\n\\ndescribe('Infobar', () => {\\n  before(async () => {\\n    await initializeGlobalVars();\\n  });\\n\\n  after(async () => {\\n    await deinitializeGlobalVars();\\n  });\\n\\n  const checkDetailsMessage = (component: UI.Infobar.Infobar, messageText: string) => {\\n    renderElementIntoDOM(component.element);\\n\\n    const infobar = component.element.shadowRoot!.querySelector('.infobar');\\n    assert.instanceOf(infobar, HTMLDivElement);\\n    const learnMoreButton = infobar.querySelector('devtools-button');\\n    assert.instanceOf(learnMoreButton, Buttons.Button.Button);\\n    const detailsRow = infobar.querySelector('.infobar-details-rows');\\n    assert.instanceOf(detailsRow, HTMLDivElement);\\n\\n    assert.isTrue(detailsRow.classList.contains('hidden'), 'Details row should initially be hidden');\\n    assert.strictEqual(detailsRow.textContent, messageText);\\n\\n    dispatchClickEvent(learnMoreButton);\\n    assert.isFalse(\\n        detailsRow.classList.contains('hidden'),\\n        'Details row should not be hidden after clicking on learn-more-button');\\n  };\\n\\n  it('shows details message containing a string', () => {\\n    const component = new UI.Infobar.Infobar(UI.Infobar.Type.Warning, 'This is a warning');\\n    const messageText = 'This is a more detailed warning';\\n    component.createDetailsRowMessage(messageText);\\n    checkDetailsMessage(component, messageText);\\n  });\\n\\n  it('shows details message containing HTML element(s)', () => {\\n    const component = new UI.Infobar.Infobar(UI.Infobar.Type.Warning, 'This is a warning');\\n    const linkText = 'example-link';\\n    const link = UI.XLink.XLink.create('https://www.example.com', linkText);\\n    component.createDetailsRowMessage(link);\\n    checkDetailsMessage(component, linkText);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);