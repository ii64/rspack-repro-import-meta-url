(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_root-causes_RootCauses_js_map"],{

/***/ "./models/trace/root-causes/RootCauses.js.map":
/*!****************************************************!*\
  !*** ./models/trace/root-causes/RootCauses.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"RootCauses.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/root-causes/RootCauses.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,OAAO,EAAC,qBAAqB,EAAC,MAAM,kBAAkB,CAAC;AAWvD,MAAM,OAAO,UAAU;IACZ,YAAY,CAAwB;IAE7C,YAAY,iBAA6C;QACvD,IAAI,CAAC,YAAY,GAAG,IAAI,qBAAqB,CAAC,iBAAiB,CAAC,CAAC;IACnE,CAAC;CACF;AAED,OAAO,EAAC,qBAAqB,EAAC,MAAM,kBAAkB,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Protocol from '../../../generated/protocol.js';\\n\\nimport {LayoutShiftRootCauses} from './LayoutShift.js';\\n\\nexport type RootCauseProtocolInterface = {\\n  getInitiatorForRequest(url: string): Protocol.Network.Initiator|null,\\n  pushNodesByBackendIdsToFrontend(backendNodeIds: Protocol.DOM.BackendNodeId[]): Promise<Protocol.DOM.NodeId[]>,\\n  getNode(nodeId: Protocol.DOM.NodeId): Promise<Protocol.DOM.Node|null>,\\n  getComputedStyleForNode(nodeId: Protocol.DOM.NodeId): Promise<Protocol.CSS.CSSComputedStyleProperty[]>,\\n  getMatchedStylesForNode(nodeId: Protocol.DOM.NodeId): Promise<Protocol.CSS.GetMatchedStylesForNodeResponse>,\\n  fontFaceForSource(url: string): Protocol.CSS.FontFace|undefined,\\n};\\n\\nexport class RootCauses {\\n  readonly layoutShifts: LayoutShiftRootCauses;\\n\\n  constructor(protocolInterface: RootCauseProtocolInterface) {\\n    this.layoutShifts = new LayoutShiftRootCauses(protocolInterface);\\n  }\\n}\\n\\nexport {LayoutShiftRootCauses} from './LayoutShift.js';\\n\"]}");

/***/ })

}]);