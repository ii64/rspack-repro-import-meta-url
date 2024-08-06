(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ComputedStyleProperty_test_js_map"],{

/***/ "./panels/elements/components/ComputedStyleProperty.test.js.map":
/*!**********************************************************************!*\
  !*** ./panels/elements/components/ComputedStyleProperty.test.js.map ***!
  \**********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ComputedStyleProperty.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/ComputedStyleProperty.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,eAAe,EAAE,oBAAoB,EAAC,MAAM,gCAAgC,CAAC;AAErF,OAAO,KAAK,kBAAkB,MAAM,iBAAiB,CAAC;AAEtD,QAAQ,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACrC,EAAE,CAAC,sCAAsC,EAAE,GAAG,EAAE;QAC9C,MAAM,SAAS,GAAG,IAAI,kBAAkB,CAAC,qBAAqB,CAAC,qBAAqB,EAAE,CAAC;QACvF,oBAAoB,CAAC,SAAS,CAAC,CAAC;QAChC,SAAS,CAAC,SAAS,GAAG,KAAK,CAAC;QAC5B,SAAS,CAAC,SAAS,GAAG,IAAI,CAAC;QAE3B,MAAM,OAAO,GAAG,SAAS,CAAC,UAAW,CAAC,aAAa,CAAC,oCAAoC,CAAC,CAAC;QAC1F,MAAM,CAAC,MAAM,CAAC,OAAO,EAAE,oEAAoE,CAAC,CAAC;IAC/F,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,0EAA0E,EAAE,KAAK,IAAI,EAAE;QACxF,MAAM,SAAS,GAAG,IAAI,kBAAkB,CAAC,qBAAqB,CAAC,qBAAqB,EAAE,CAAC;QACvF,oBAAoB,CAAC,SAAS,CAAC,CAAC;QAChC,SAAS,CAAC,SAAS,GAAG,IAAI,CAAC;QAC3B,SAAS,CAAC,SAAS,GAAG,KAAK,CAAC;QAE5B,MAAM,aAAa,GACf,eAAe,CAAC,SAAS,EAAE,kBAAkB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,SAAS,CAAC,CAAC;QAEzG,MAAM,IAAI,GAAG,SAAS,CAAC,UAAW,CAAC,aAAa,CAAc,OAAO,CAAC,CAAC;QACvE,IAAI,CAAC,IAAI,EAAE,CAAC;YACV,MAAM,CAAC,IAAI,CAAC,wBAAwB,CAAC,CAAC;YACtC,OAAO;QACT,CAAC;QACD,IAAI,CAAC,KAAK,EAAE,CAAC;QACb,MAAM,KAAK,GAAG,MAAM,aAAa,CAAC;QAClC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC;IACvB,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {getEventPromise, renderElementIntoDOM} from '../../../testing/DOMHelpers.js';\\n\\nimport * as ElementsComponents from './components.js';\\n\\ndescribe('ComputedStyleProperty', () => {\\n  it('renders inherited property correctly', () => {\\n    const component = new ElementsComponents.ComputedStyleProperty.ComputedStyleProperty();\\n    renderElementIntoDOM(component);\\n    component.traceable = false;\\n    component.inherited = true;\\n\\n    const wrapper = component.shadowRoot!.querySelector('.computed-style-property.inherited');\\n    assert.exists(wrapper, 'it should add .inherited class to wrapper for inherited properties');\\n  });\\n\\n  it('renders a clickable goto icon that dispatches a onNavigateToSource event', async () => {\\n    const component = new ElementsComponents.ComputedStyleProperty.ComputedStyleProperty();\\n    renderElementIntoDOM(component);\\n    component.traceable = true;\\n    component.inherited = false;\\n\\n    const navigateEvent =\\n        getEventPromise(component, ElementsComponents.ComputedStyleProperty.NavigateToSourceEvent.eventName);\\n\\n    const goto = component.shadowRoot!.querySelector<HTMLElement>('.goto');\\n    if (!goto) {\\n      assert.fail('goto icon should exist');\\n      return;\\n    }\\n    goto.click();\\n    const event = await navigateEvent;\\n    assert.exists(event);\\n  });\\n});\\n\"]}");

/***/ })

}]);