(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_style_property_editor_grid_js_map"],{

/***/ "./ui/components/docs/style_property_editor/grid.js.map":
/*!**************************************************************!*\
  !*** ./ui/components/docs/style_property_editor/grid.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"grid.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/style_property_editor/grid.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,sDAAsD,CAAC;AACjF,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,mBAAmB,CAAC,UAAU,EAAE,CAAC;AAEhE,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAE7D,MAAM,kBAAkB,GAAG,IAAI,GAAG,CAAC;IACjC,CAAC,eAAe,EAAE,SAAS,CAAC;IAC5B,CAAC,iBAAiB,EAAE,UAAU,CAAC;IAC/B,CAAC,aAAa,EAAE,QAAQ,CAAC;IACzB,CAAC,eAAe,EAAE,QAAQ,CAAC;CAC5B,CAAC,CAAC;AAEH,MAAM,0BAA0B,GAAG,IAAI,GAAG,CAAC,kBAAkB,CAAC,CAAC;AAE/D,MAAM,kBAAkB,GAAG,IAAI,GAAG,CAAC;IACjC,CAAC,iBAAiB,EAAE,UAAU,CAAC;CAChC,CAAC,CAAC;AAEH,SAAS,CAAC,IAAI,GAAG;IACf,kBAAkB;IAClB,kBAAkB;CACnB,CAAC;AAEF,SAAS,CAAC,gBAAgB,CAAC,kBAAkB,EAAE,CAAC,KAAyD,EAAE,EAAE;IAC3G,kBAAkB,CAAC,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,EAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;IAC1D,kBAAkB,CAAC,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,EAAE,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;IAC1D,SAAS,CAAC,IAAI,GAAG;QACf,kBAAkB;QAClB,kBAAkB;KACnB,CAAC;AACJ,CAAC,CAAC,CAAC;AAEH,SAAS,CAAC,gBAAgB,CAAC,oBAAoB,EAAE,CAAC,KAA2D,EAAE,EAAE;IAC/G,kBAAkB,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IAC3C,kBAAkB,CAAC,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,EAAE,0BAA0B,CAAC,GAAG,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAW,CAAC,CAAC;IACnG,SAAS,CAAC,IAAI,GAAG;QACf,kBAAkB;QAClB,kBAAkB;KACnB,CAAC;AACJ,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Elements from '../../../../panels/elements/components/components.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new Elements.StylePropertyEditor.GridEditor();\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\\nconst computedProperties = new Map([\\n  ['align-content', 'initial'],\\n  ['justify-content', 'flex-end'],\\n  ['align-items', 'normal'],\\n  ['justify-items', 'normal'],\\n]);\\n\\nconst originalComputedProperties = new Map(computedProperties);\\n\\nconst authoredProperties = new Map([\\n  ['justify-content', 'flex-end'],\\n]);\\n\\ncomponent.data = {\\n  computedProperties,\\n  authoredProperties,\\n};\\n\\ncomponent.addEventListener('propertyselected', (event: Elements.StylePropertyEditor.PropertySelectedEvent) => {\\n  authoredProperties.set(event.data.name, event.data.value);\\n  computedProperties.set(event.data.name, event.data.value);\\n  component.data = {\\n    computedProperties,\\n    authoredProperties,\\n  };\\n});\\n\\ncomponent.addEventListener('propertydeselected', (event: Elements.StylePropertyEditor.PropertyDeselectedEvent) => {\\n  authoredProperties.delete(event.data.name);\\n  computedProperties.set(event.data.name, originalComputedProperties.get(event.data.name) as string);\\n  component.data = {\\n    computedProperties,\\n    authoredProperties,\\n  };\\n});\\n\"]}");

/***/ })

}]);