(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_freestyler_empty_state_js_map"],{

/***/ "./ui/components/docs/freestyler/empty_state.js.map":
/*!**********************************************************!*\
  !*** ./ui/components/docs/freestyler/empty_state.js.map ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"empty_state.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/freestyler/empty_state.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,+BAA+B,CAAC;AAEtD,OAAO,KAAK,UAAU,MAAM,6CAA6C,CAAC;AAC1E,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,IAAI,GAAG,GAAG,EAAE,GAAE,CAAC,CAAC;AAEtB,MAAM,SAAS,GAAG,IAAI,UAAU,CAAC,gBAAgB,CAAC;IAChD,YAAY,EAAE,IAAI;IAClB,qBAAqB,EAAE,IAAI;IAC3B,gBAAgB,EAAE,IAAI;IACtB,oBAAoB,EAAE,IAAI;IAC1B,aAAa,EAAE,IAAI;IACnB,mBAAmB,EAAE,IAAI;IACzB,qBAAqB,EAAE,KAAK;IAC5B,KAAK,8CAA4B;IACjC,gBAAgB,EAAE,IAAI,CAAC,UAAU,CAAC,gBAAgB,CAAC,SAAS;IAC5D,QAAQ,EAAE,EAAE;IACZ,YAAY,EAAE,EAAqC;IACnD,SAAS,EAAE,KAAK;IAChB,mBAAmB,EAAE,KAAK;CAC3B,CAAC,CAAC;AAEH,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../../../../core/host/host.js';\\nimport type * as SDK from '../../../../core/sdk/sdk.js';\\nimport * as Freestyler from '../../../../panels/freestyler/freestyler.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst noop = () => {};\\n\\nconst component = new Freestyler.FreestylerChatUi({\\n  onTextSubmit: noop,\\n  onInspectElementClick: noop,\\n  onFeedbackSubmit: noop,\\n  onAcceptConsentClick: noop,\\n  onCancelClick: noop,\\n  onFixThisIssueClick: noop,\\n  inspectElementToggled: false,\\n  state: Freestyler.State.CHAT_VIEW,\\n  aidaAvailability: Host.AidaClient.AidaAvailability.AVAILABLE,\\n  messages: [],\\n  selectedNode: {} as unknown as SDK.DOMModel.DOMNode,\\n  isLoading: false,\\n  canShowFeedbackForm: false,\\n});\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);