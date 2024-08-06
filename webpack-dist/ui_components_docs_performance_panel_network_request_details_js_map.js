(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_performance_panel_network_request_details_js_map"],{

/***/ "./ui/components/docs/performance_panel/network_request_details.js.map":
/*!*****************************************************************************!*\
  !*** ./ui/components/docs/performance_panel/network_request_details.js.map ***!
  \*****************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"network_request_details.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/performance_panel/network_request_details.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,kBAAkB,MAAM,sDAAsD,CAAC;AAC3F,OAAO,KAAK,QAAQ,MAAM,yCAAyC,CAAC;AACpE,OAAO,KAAK,kBAAkB,MAAM,2CAA2C,CAAC;AAChF,OAAO,KAAK,WAAW,MAAM,oCAAoC,CAAC;AAClE,OAAO,KAAK,UAAU,MAAM,iDAAiD,CAAC;AAC9E,OAAO,KAAK,cAAc,MAAM,0BAA0B,CAAC;AAE3D,MAAM,kBAAkB,CAAC,oBAAoB,EAAE,CAAC;AAChD,MAAM,cAAc,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AAClD,MAAM,gBAAgB,GAAG,IAAI,UAAU,CAAC,SAAS,CAAC,SAAS,EAAE,CAAC;AAE9D;;IAEI;AACJ,KAAK,UAAU,aAAa;IAC1B,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAC,YAAY,CAAC,CAAC;IACvD,IAAI,CAAC,SAAS,EAAE,CAAC;QACf,MAAM,IAAI,KAAK,CAAC,cAAc,CAAC,CAAC;IAClC,CAAC;IAED,MAAM,EAAC,SAAS,EAAC,GAAG,MAAM,WAAW,CAAC,WAAW,CAAC,WAAW,CAAC,mBAAmB,CAAC,IAAI,EAAE,oBAAoB,CAAC,CAAC;IAC9G,MAAM,YAAY,GAAG,SAAS,CAAC,eAAe,CAAC,MAAM,CAAC,CAAC,CAAC,CAAC;IACzD,MAAM,WAAW,GAAG,QAAQ,CAAC,cAAc,CAAC,cAAc,CAAC,SAAS,EAAE,YAAY,CAAC,CAAC;IAEpF,MAAM,OAAO,GAAG,IAAI,kBAAkB,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,gBAAgB,CAAC,CAAC;IACrG,MAAM,OAAO,CAAC,OAAO,CAAC,YAAY,EAAE,WAAW,CAAC,CAAC;IAEjD,SAAS,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;AACjC,CAAC;AAED,MAAM,aAAa,EAAE,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as TimelineComponents from '../../../../panels/timeline/components/components.js';\\nimport * as Timeline from '../../../../panels/timeline/timeline.js';\\nimport * as EnvironmentHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as TraceLoader from '../../../../testing/TraceLoader.js';\\nimport * as Components from '../../../../ui/legacy/components/utils/utils.js';\\nimport * as ComponentSetup from '../../helpers/helpers.js';\\n\\nawait EnvironmentHelpers.initializeGlobalVars();\\nawait ComponentSetup.ComponentServerSetup.setup();\\nconst detailsLinkifier = new Components.Linkifier.Linkifier();\\n\\n/**\\n * Render details for a basic network request\\n **/\\nasync function renderDetails() {\\n  const container = document.querySelector('#container');\\n  if (!container) {\\n    throw new Error('No container');\\n  }\\n\\n  const {traceData} = await TraceLoader.TraceLoader.traceEngine(/* mocha context */ null, 'lcp-images.json.gz');\\n  const networkEvent = traceData.NetworkRequests.byTime[0];\\n  const maybeTarget = Timeline.TargetForEvent.targetForEvent(traceData, networkEvent);\\n\\n  const details = new TimelineComponents.NetworkRequestDetails.NetworkRequestDetails(detailsLinkifier);\\n  await details.setData(networkEvent, maybeTarget);\\n\\n  container.appendChild(details);\\n}\\n\\nawait renderDetails();\\n\"]}");

/***/ })

}]);