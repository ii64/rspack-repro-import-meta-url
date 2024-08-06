(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ReportingApiView_js_map"],{

/***/ "./panels/application/ReportingApiView.js.map":
/*!****************************************************!*\
  !*** ./panels/application/ReportingApiView.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ReportingApiView.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/application/ReportingApiView.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAE7C,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAChD,OAAO,KAAK,aAAa,MAAM,2CAA2C,CAAC;AAG3E,OAAO,EAAC,uBAAuB,EAAC,MAAM,8BAA8B,CAAC;AAErE,MAAM,OAAO,gBAAiB,SAAQ,EAAE,CAAC,WAAW,CAAC,WAAW;IAC7C,aAAa,CAAoD;IAC1E,SAAS,CAAuD;IAExE,YAAY,aAAgE;QAC1E,KAAK,CAAC,iBAAiB,CAAC,KAAK,EAAE,sBAAsB,CAAC,IAAI,CAAC,CAAC;QAC5D,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,OAAO,EAAE,GAAG,aAAa,CAAC,IAAI,CAAC,eAAe,CAAC,EAAE,CAAC,CAAC;QAC7E,IAAI,CAAC,aAAa,GAAG,aAAa,CAAC;QACnC,IAAI,CAAC,SAAS,GAAG,IAAI,GAAG,EAAE,CAAC;QAC3B,MAAM,UAAU,GAAG,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,iBAAiB,EAAE,CAAC;QAClF,MAAM,cAAc,GAAG,UAAU,IAAI,UAAU,CAAC,KAAK,CAAC,GAAG,CAAC,cAAc,CAAC,cAAc,CAAC,CAAC;QACzF,IAAI,cAAc,EAAE,CAAC;YACnB,cAAc,CAAC,gBAAgB,CAC3B,GAAG,CAAC,cAAc,CAAC,MAAM,CAAC,qCAAqC,EAC/D,KAAK,CAAC,EAAE,CAAC,IAAI,CAAC,2BAA2B,CAAC,KAAK,CAAC,IAAI,CAAC,EAAE,IAAI,CAAC,CAAC;YAEjE,MAAM,uBAAuB,GAAG,IAAI,uBAAuB,CAAC,cAAc,CAAC,CAAC;YAC5E,MAAM,yBAAyB,GAAG,IAAI,EAAE,CAAC,MAAM,CAAC,IAAI,EAAE,CAAC;YACvD,yBAAyB,CAAC,cAAc,CAAC,CAAC,EAAE,EAAE,CAAC,CAAC;YAChD,yBAAyB,CAAC,cAAc,CAAC,WAAW,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;YACzE,IAAI,CAAC,aAAa,CAAC,uBAAuB,CAAC,CAAC;YAC5C,IAAI,CAAC,gBAAgB,CAAC,yBAAyB,CAAC,CAAC;YACjD,KAAK,cAAc,CAAC,kBAAkB,EAAE,CAAC;QAC3C,CAAC;IACH,CAAC;IAEO,2BAA2B,CAAC,IAAiE;QACnG,IAAI,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,CAAC,MAAM,EAAE,IAAI,CAAC,SAAS,CAAC,CAAC;QAChD,IAAI,CAAC,aAAa,CAAC,IAAI,GAAG,EAAC,SAAS,EAAE,IAAI,CAAC,SAAS,EAAC,CAAC;IACxD,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\nimport * as VisualLogging from '../../ui/visual_logging/visual_logging.js';\\n\\nimport type * as ApplicationComponents from './components/components.js';\\nimport {ReportingApiReportsView} from './ReportingApiReportsView.js';\\n\\nexport class ReportingApiView extends UI.SplitWidget.SplitWidget {\\n  private readonly endpointsGrid: ApplicationComponents.EndpointsGrid.EndpointsGrid;\\n  private endpoints: Map<string, Protocol.Network.ReportingApiEndpoint[]>;\\n\\n  constructor(endpointsGrid: ApplicationComponents.EndpointsGrid.EndpointsGrid) {\\n    super(/* isVertical: */ false, /* secondIsSidebar: */ true);\\n    this.element.setAttribute('jslog', `${VisualLogging.pane('reporting-api')}`);\\n    this.endpointsGrid = endpointsGrid;\\n    this.endpoints = new Map();\\n    const mainTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget();\\n    const networkManager = mainTarget && mainTarget.model(SDK.NetworkManager.NetworkManager);\\n    if (networkManager) {\\n      networkManager.addEventListener(\\n          SDK.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin,\\n          event => this.onEndpointsChangedForOrigin(event.data), this);\\n\\n      const reportingApiReportsView = new ReportingApiReportsView(networkManager);\\n      const reportingApiEndpointsView = new UI.Widget.VBox();\\n      reportingApiEndpointsView.setMinimumSize(0, 40);\\n      reportingApiEndpointsView.contentElement.appendChild(this.endpointsGrid);\\n      this.setMainWidget(reportingApiReportsView);\\n      this.setSidebarWidget(reportingApiEndpointsView);\\n      void networkManager.enableReportingApi();\\n    }\\n  }\\n\\n  private onEndpointsChangedForOrigin(data: Protocol.Network.ReportingApiEndpointsChangedForOriginEvent): void {\\n    this.endpoints.set(data.origin, data.endpoints);\\n    this.endpointsGrid.data = {endpoints: this.endpoints};\\n  }\\n}\\n\"]}");

/***/ })

}]);