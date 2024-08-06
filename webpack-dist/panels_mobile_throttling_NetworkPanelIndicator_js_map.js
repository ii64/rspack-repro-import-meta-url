(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_mobile_throttling_NetworkPanelIndicator_js_map"],{

/***/ "./panels/mobile_throttling/NetworkPanelIndicator.js.map":
/*!***************************************************************!*\
  !*** ./panels/mobile_throttling/NetworkPanelIndicator.js.map ***!
  \***************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"NetworkPanelIndicator.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/mobile_throttling/NetworkPanelIndicator.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AACtD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,0BAA0B,EAAE,+BAA+B;IAC3D;;OAEG;IACH,uBAAuB,EAAE,2DAA2D;IACpF;;OAEG;IACH,oBAAoB,EAAE,iEAAiE;IACvF;;OAEG;IACH,2BAA2B,EACvB,gHAAgH;CACrH,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,mDAAmD,EAAE,SAAS,CAAC,CAAC;AACzG,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,OAAO,qBAAqB;IAChC;QACE,yDAAyD;QACzD,IAAI,CAAC,EAAE,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,QAAQ,CAAC,SAAS,CAAC,EAAE,CAAC;YACnE,OAAO;QACT,CAAC;QACD,MAAM,OAAO,GAAG,GAAG,CAAC,cAAc,CAAC,yBAAyB,CAAC,QAAQ,EAAE,CAAC;QACxE,OAAO,CAAC,gBAAgB,kGAAwE,gBAAgB,CAAC,CAAC;QAClH,OAAO,CAAC,gBAAgB,4GACwD,gBAAgB,CAAC,CAAC;QAClG,OAAO,CAAC,gBAAgB,sGAA0E,gBAAgB,CAAC,CAAC;QACpH,OAAO,CAAC,gBAAgB,gHAC0D,gBAAgB,CAAC,CAAC;QACpG,MAAM,CAAC,QAAQ,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC,aAAa,CAAC,gBAAgB,CAAC,CAAC,iBAAiB,CAAC,gBAAgB,EAAE,IAAI,CAAC,CAAC;QAE9G,gBAAgB,EAAE,CAAC;QAEnB,SAAS,gBAAgB;YACvB,MAAM,QAAQ,GAAG,EAAE,CAAC;YACpB,IAAI,OAAO,CAAC,YAAY,EAAE,EAAE,CAAC;gBAC3B,QAAQ,CAAC,IAAI,CAAC,UAAU,CAAC,SAAS,CAAC,0BAA0B,CAAC,CAAC,CAAC;YAClE,CAAC;YACD,IAAI,GAAG,CAAC,cAAc,CAAC,yBAAyB,CAAC,QAAQ,EAAE,CAAC,cAAc,EAAE,EAAE,CAAC;gBAC7E,QAAQ,CAAC,IAAI,CAAC,UAAU,CAAC,SAAS,CAAC,uBAAuB,CAAC,CAAC,CAAC;YAC/D,CAAC;YACD,IAAI,OAAO,CAAC,UAAU,EAAE,EAAE,CAAC;gBACzB,QAAQ,CAAC,IAAI,CAAC,UAAU,CAAC,SAAS,CAAC,oBAAoB,CAAC,CAAC,CAAC;YAC5D,CAAC;YACD,IAAI,OAAO,CAAC,6BAA6B,EAAE,EAAE,CAAC;gBAC5C,QAAQ,CAAC,IAAI,CAAC,UAAU,CAAC,SAAS,CAAC,2BAA2B,CAAC,CAAC,CAAC;YACnE,CAAC;YACD,EAAE,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,gBAAgB,CAAC,SAAS,EAAE,QAAQ,CAAC,CAAC;QAClF,CAAC;IACH,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2017 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Icon title in Network Panel Indicator of the Network panel\\n   */\\n  networkThrottlingIsEnabled: 'Network throttling is enabled',\\n  /**\\n   *@description Icon title in Network Panel Indicator of the Network panel\\n   */\\n  requestsMayBeOverridden: 'Requests may be overridden locally, see the Sources panel',\\n  /**\\n   *@description Icon title in Network Panel Indicator of the Network panel\\n   */\\n  requestsMayBeBlocked: 'Requests may be blocked, see the Network request blocking panel',\\n  /**\\n   * @description Title of an icon in the Network panel that indicates that accepted content encodings have been overriden.\\n   */\\n  acceptedEncodingOverrideSet:\\n      'The set of accepted `Content-Encoding` headers has been modified by DevTools, see the Network conditions panel',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/mobile_throttling/NetworkPanelIndicator.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class NetworkPanelIndicator {\\n  constructor() {\\n    // TODO: we should not access network from other modules.\\n    if (!UI.InspectorView.InspectorView.instance().hasPanel('network')) {\\n      return;\\n    }\\n    const manager = SDK.NetworkManager.MultitargetNetworkManager.instance();\\n    manager.addEventListener(SDK.NetworkManager.MultitargetNetworkManager.Events.ConditionsChanged, updateVisibility);\\n    manager.addEventListener(\\n        SDK.NetworkManager.MultitargetNetworkManager.Events.BlockedPatternsChanged, updateVisibility);\\n    manager.addEventListener(SDK.NetworkManager.MultitargetNetworkManager.Events.InterceptorsChanged, updateVisibility);\\n    manager.addEventListener(\\n        SDK.NetworkManager.MultitargetNetworkManager.Events.AcceptedEncodingsChanged, updateVisibility);\\n    Common.Settings.Settings.instance().moduleSetting('cache-disabled').addChangeListener(updateVisibility, this);\\n\\n    updateVisibility();\\n\\n    function updateVisibility(): void {\\n      const warnings = [];\\n      if (manager.isThrottling()) {\\n        warnings.push(i18nString(UIStrings.networkThrottlingIsEnabled));\\n      }\\n      if (SDK.NetworkManager.MultitargetNetworkManager.instance().isIntercepting()) {\\n        warnings.push(i18nString(UIStrings.requestsMayBeOverridden));\\n      }\\n      if (manager.isBlocking()) {\\n        warnings.push(i18nString(UIStrings.requestsMayBeBlocked));\\n      }\\n      if (manager.isAcceptedEncodingOverrideSet()) {\\n        warnings.push(i18nString(UIStrings.acceptedEncodingOverrideSet));\\n      }\\n      UI.InspectorView.InspectorView.instance().setPanelWarnings('network', warnings);\\n    }\\n  }\\n}\\n\"]}");

/***/ })

}]);