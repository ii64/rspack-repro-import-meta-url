(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_TrustTokensTreeElement_js_map"], {
"./panels/application/TrustTokensTreeElement.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"TrustTokensTreeElement.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/application/TrustTokensTreeElement.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAEhD,OAAO,KAAK,UAAU,MAAM,gDAAgD,CAAC;AAC7E,OAAO,KAAK,aAAa,MAAM,sDAAsD,CAAC;AACtF,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,OAAO,EAAC,2BAA2B,EAAC,MAAM,kCAAkC,CAAC;AAC7E,OAAO,KAAK,qBAAqB,MAAM,4BAA4B,CAAC;AAGpE,MAAM,SAAS,GAAG;IAChB;;;OAGG;IACH,WAAW,EAAE,sBAAsB;CACpC,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,8CAA8C,EAAE,SAAS,CAAC,CAAC;AACpG,MAAM,CAAC,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAE7E,MAAM,OAAO,sBAAuB,SAAQ,2BAA2B;IAC7D,IAAI,CACgF;IAE5F,YAAY,YAA4B;QACtC,KAAK,CAAC,YAAY,EAAE,UAAU,CAAC,SAAS,CAAC,WAAW,CAAC,EAAE,KAAK,EAAE,sBAAsB,CAAC,CAAC;QACtF,MAAM,IAAI,GAAG,UAAU,CAAC,IAAI,CAAC,MAAM,CAAC,UAAU,CAAC,CAAC;QAChD,IAAI,CAAC,eAAe,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC;IAC/B,CAAC;IAED,IAAa,OAAO;QAClB,OAAO,gBAAmD,CAAC;IAC7D,CAAC;IAEQ,QAAQ,CAAC,cAAwB;QACxC,KAAK,CAAC,QAAQ,CAAC,cAAc,CAAC,CAAC;QAC/B,IAAI,CAAC,IAAI,CAAC,IAAI,EAAE,CAAC;YACf,IAAI,CAAC,IAAI,GAAG,aAAa,CAAC,aAAa,CAAC,aAAa,CACjD,EAAE,CAAC,MAAM,CAAC,MAAM,EAAE,IAAI,qBAAqB,CAAC,eAAe,CAAC,eAAe,EAAE,EAAE,cAAc,CAAC,CAAC;QACrG,CAAC;QACD,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QACzB,IAAI,CAAC,WAAW,CAAC,UAAU,CAAC,cAAc,CAAC,CAAC;QAC5C,OAAO,KAAK,CAAC;IACf,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../../core/host/host.js';\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport type * as Platform from '../../core/platform/platform.js';\\nimport * as IconButton from '../../ui/components/icon_button/icon_button.js';\\nimport * as LegacyWrapper from '../../ui/components/legacy_wrapper/legacy_wrapper.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport {ApplicationPanelTreeElement} from './ApplicationPanelTreeElement.js';\\nimport * as ApplicationComponents from './components/components.js';\\nimport {type ResourcesPanel} from './ResourcesPanel.js';\\n\\nconst UIStrings = {\\n  /**\\n   * @description Hover text for an info icon in the Private State Token panel.\\n   * Previously known as 'Trust Tokens'.\\n   */\\n  trustTokens: 'Private state tokens',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/application/TrustTokensTreeElement.ts', UIStrings);\\nexport const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport class TrustTokensTreeElement extends ApplicationPanelTreeElement {\\n  private view?: LegacyWrapper.LegacyWrapper\\n      .LegacyWrapper<UI.Widget.Widget, ApplicationComponents.TrustTokensView.TrustTokensView>;\\n\\n  constructor(storagePanel: ResourcesPanel) {\\n    super(storagePanel, i18nString(UIStrings.trustTokens), false, 'private-state-tokens');\\n    const icon = IconButton.Icon.create('database');\\n    this.setLeadingIcons([icon]);\\n  }\\n\\n  override get itemURL(): Platform.DevToolsPath.UrlString {\\n    return 'trustTokens://' as Platform.DevToolsPath.UrlString;\\n  }\\n\\n  override onselect(selectedByUser?: boolean): boolean {\\n    super.onselect(selectedByUser);\\n    if (!this.view) {\\n      this.view = LegacyWrapper.LegacyWrapper.legacyWrapper(\\n          UI.Widget.Widget, new ApplicationComponents.TrustTokensView.TrustTokensView(), 'trust-tokens');\\n    }\\n    this.showView(this.view);\\n    Host.userMetrics.panelShown('trust-tokens');\\n    return false;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);