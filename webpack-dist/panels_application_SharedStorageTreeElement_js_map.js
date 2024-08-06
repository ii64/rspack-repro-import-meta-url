(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageTreeElement_js_map"],{

/***/ "./panels/application/SharedStorageTreeElement.js.map":
/*!************************************************************!*\
  !*** ./panels/application/SharedStorageTreeElement.js.map ***!
  \************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SharedStorageTreeElement.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/application/SharedStorageTreeElement.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,aAAa,MAAM,2CAA2C,CAAC;AAE3E,OAAO,EAAC,2BAA2B,EAAC,MAAM,kCAAkC,CAAC;AAE7E,OAAO,EAAC,sBAAsB,EAAC,MAAM,6BAA6B,CAAC;AAGnE,MAAM,OAAO,wBAAyB,SAAQ,2BAA2B;IACvE,IAAI,CAA0B;IAE9B,YAAY,cAA8B,EAAE,aAAqC;QAC/E,KAAK,CAAC,cAAc,EAAE,aAAa,CAAC,cAAc,EAAE,KAAK,EAAE,yBAAyB,CAAC,CAAC;IACxF,CAAC;IAED,MAAM,CAAC,KAAK,CAAC,aAAa,CAAC,cAA8B,EAAE,aAAqC;QAE9F,MAAM,WAAW,GAAG,IAAI,wBAAwB,CAAC,cAAc,EAAE,aAAa,CAAC,CAAC;QAChF,WAAW,CAAC,IAAI,GAAG,MAAM,sBAAsB,CAAC,UAAU,CAAC,aAAa,CAAC,CAAC;QAC1E,WAAW,CAAC,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,OAAO,EAAE,GAAG,aAAa,CAAC,IAAI,CAAC,qBAAqB,CAAC,EAAE,CAAC,CAAC;QAC/F,OAAO,WAAW,CAAC;IACrB,CAAC;IAED,IAAa,OAAO;QAClB,OAAO,mBAAsD,CAAC;IAChE,CAAC;IAEQ,QAAQ,CAAC,cAAiC;QACjD,KAAK,CAAC,QAAQ,CAAC,cAAc,CAAC,CAAC;QAC/B,IAAI,CAAC,cAAc,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QACxC,OAAO,KAAK,CAAC;IACf,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../../core/platform/platform.js';\\nimport * as VisualLogging from '../../ui/visual_logging/visual_logging.js';\\n\\nimport {ApplicationPanelTreeElement} from './ApplicationPanelTreeElement.js';\\nimport {type ResourcesPanel} from './ResourcesPanel.js';\\nimport {SharedStorageItemsView} from './SharedStorageItemsView.js';\\nimport {type SharedStorageForOrigin} from './SharedStorageModel.js';\\n\\nexport class SharedStorageTreeElement extends ApplicationPanelTreeElement {\\n  view!: SharedStorageItemsView;\\n\\n  constructor(resourcesPanel: ResourcesPanel, sharedStorage: SharedStorageForOrigin) {\\n    super(resourcesPanel, sharedStorage.securityOrigin, false, 'shared-storage-instance');\\n  }\\n\\n  static async createElement(resourcesPanel: ResourcesPanel, sharedStorage: SharedStorageForOrigin):\\n      Promise<SharedStorageTreeElement> {\\n    const treeElement = new SharedStorageTreeElement(resourcesPanel, sharedStorage);\\n    treeElement.view = await SharedStorageItemsView.createView(sharedStorage);\\n    treeElement.view.element.setAttribute('jslog', `${VisualLogging.pane('shared-storage-data')}`);\\n    return treeElement;\\n  }\\n\\n  override get itemURL(): Platform.DevToolsPath.UrlString {\\n    return 'shared-storage://' as Platform.DevToolsPath.UrlString;\\n  }\\n\\n  override onselect(selectedByUser: boolean|undefined): boolean {\\n    super.onselect(selectedByUser);\\n    this.resourcesPanel.showView(this.view);\\n    return false;\\n  }\\n}\\n\"]}");

/***/ })

}]);