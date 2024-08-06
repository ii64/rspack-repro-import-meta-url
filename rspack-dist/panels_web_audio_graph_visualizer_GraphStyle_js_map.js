(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_GraphStyle_js_map"], {
"./panels/web_audio/graph_visualizer/GraphStyle.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"GraphStyle.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/web_audio/graph_visualizer/GraphStyle.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,CAAC,MAAM,WAAW,GAAG,CAAC,CAAC;AAC7B,MAAM,CAAC,MAAM,eAAe,GAAG,EAAE,CAAC;AAClC,MAAM,CAAC,MAAM,gBAAgB,GAAG,CAAC,CAAC;AAClC,MAAM,CAAC,MAAM,gBAAgB,GAAG,EAAE,CAAC;AACnC,MAAM,CAAC,MAAM,iBAAiB,GAAG,EAAE,CAAC;AACpC,MAAM,CAAC,MAAM,kBAAkB,GAAG,CAAC,CAAC;AACpC,MAAM,CAAC,MAAM,yBAAyB,GAAG,CAAC,CAAC;AAC3C,MAAM,CAAC,MAAM,sBAAsB,GAAG,CAAC,CAAC;AACxC,MAAM,CAAC,MAAM,aAAa,GAAG,EAAE,CAAC;AAEhC,gEAAgE;AAChE,MAAM,CAAC,MAAM,YAAY,GAAG,EAAE,CAAC;AAC/B,MAAM,CAAC,MAAM,WAAW,GAAG,EAAE,CAAC;AAE9B,MAAM,CAAC,MAAM,oBAAoB,GAAG,eAAe,GAAG,CAAC,GAAG,WAAW,CAAC;AACtE,MAAM,CAAC,MAAM,qBAAqB,GAAG,oBAAoB,CAAC;AAC1D,MAAM,CAAC,MAAM,oBAAoB,GAAG,gBAAgB,GAAG,CAAC,GAAG,WAAW,CAAC;AAEvE,MAAM,CAAC,MAAM,kBAAkB,GAAG,sBAAsB,CAAC;AACzD,MAAM,CAAC,MAAM,mBAAmB,GAAG,sBAAsB,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport const PortPadding = 4;\\nexport const InputPortRadius = 10;\\nexport const AudioParamRadius = 5;\\nexport const LeftMarginOfText = 12;\\nexport const RightMarginOfText = 30;\\nexport const LeftSideTopPadding = 5;\\nexport const BottomPaddingWithoutParam = 6;\\nexport const BottomPaddingWithParam = 8;\\nexport const ArrowHeadSize = 12;\\n\\n// GraphPadding is used to add extra space for the graph layout.\\nexport const GraphPadding = 20;\\nexport const GraphMargin = 20;\\n\\nexport const TotalInputPortHeight = InputPortRadius * 2 + PortPadding;\\nexport const TotalOutputPortHeight = TotalInputPortHeight;\\nexport const TotalParamPortHeight = AudioParamRadius * 2 + PortPadding;\\n\\nexport const NodeLabelFontStyle = '14px Segoe UI, Arial';\\nexport const ParamLabelFontStyle = '12px Segoe UI, Arial';\\n\\n/**\\n * Supported port types.\\n */\\nexport const enum PortTypes {\\n  In = 'In',\\n  Out = 'Out',\\n  Param = 'Param',\\n}\\n\\nexport interface Size {\\n  width: number;\\n  height: number;\\n}\\nexport interface Point {\\n  x: number;\\n  y: number;\\n}\\nexport interface NodeLayout {\\n  inputPortSectionHeight: number;\\n  outputPortSectionHeight: number;\\n  maxTextLength: number;\\n  totalHeight: number;\\n}\\nexport interface Port {\\n  id: string;\\n  type: PortTypes;\\n  label?: string;\\n  x: number;\\n  y: number;\\n}\\nexport interface NodeCreationData {\\n  nodeId: string;\\n  nodeType: string;\\n  numberOfInputs: number;\\n  numberOfOutputs: number;\\n}\\nexport interface ParamCreationData {\\n  paramId: string;\\n  paramType: string;\\n  nodeId: string;\\n}\\nexport interface NodesConnectionData {\\n  sourceId: string;\\n  destinationId: string;\\n  sourceOutputIndex?: number;\\n  destinationInputIndex?: number;\\n}\\nexport interface NodesDisconnectionData {\\n  sourceId: string;\\n  destinationId?: string|null;\\n  sourceOutputIndex?: number;\\n  destinationInputIndex?: number;\\n}\\nexport interface NodesDisconnectionDataWithDestination {\\n  sourceId: string;\\n  destinationId: string;\\n  sourceOutputIndex?: number;\\n  destinationInputIndex?: number;\\n}\\nexport interface NodeParamConnectionData {\\n  sourceId: string;\\n  destinationId: string;\\n  sourceOutputIndex?: number;\\n  destinationParamId: string;\\n}\\nexport interface NodeParamDisconnectionData {\\n  sourceId: string;\\n  destinationId: string;\\n  sourceOutputIndex?: number;\\n  destinationParamId: string;\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);