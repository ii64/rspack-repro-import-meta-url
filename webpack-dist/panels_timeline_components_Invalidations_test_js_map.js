(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_components_Invalidations_test_js_map"],{

/***/ "./panels/timeline/components/Invalidations.test.js.map":
/*!**************************************************************!*\
  !*** ./panels/timeline/components/Invalidations.test.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Invalidations.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/timeline/components/Invalidations.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,WAAW,MAAM,gCAAgC,CAAC;AAC9D,OAAO,EAAC,uBAAuB,EAAC,MAAM,wCAAwC,CAAC;AAC/E,OAAO,EAAC,WAAW,EAAC,MAAM,iCAAiC,CAAC;AAE5D,OAAO,KAAK,kBAAkB,MAAM,iBAAiB,CAAC;AAEtD,uBAAuB,CAAC,kCAAkC,EAAE,GAAG,EAAE;IAC/D,EAAE,CAAC,8CAA8C,EAAE,KAAK;QACtD,MAAM,EAAC,SAAS,EAAC,GAAG,MAAM,WAAW,CAAC,WAAW,CAAC,IAAI,EAAE,6CAA6C,CAAC,CAAC;QACvG,MAAM,qBAAqB,GAAG,SAAS,CAAC,QAAQ,CAAC,eAAe,CAAC,IAAI,CAAC,KAAK,CAAC,EAAE;YAC5E,OAAO,WAAW,CAAC,KAAK,CAAC,WAAW,CAAC,4BAA4B,CAAC,KAAK,CAAC;gBACpE,KAAK,CAAC,IAAI,CAAC,SAAS,EAAE,UAAU,EAAE,CAAC,CAAC,CAAC,CAAC,YAAY,KAAK,qCAAqC,CAAC;QACnG,CAAC,CAAC,CAAC;QACH,IAAI,CAAC,qBAAqB,EAAE,CAAC;YAC3B,MAAM,IAAI,KAAK,CAAC,yCAAyC,CAAC,CAAC;QAC7D,CAAC;QACD,MAAM,aAAa,GAAG,SAAS,CAAC,aAAa,CAAC,qBAAqB,CAAC,GAAG,CAAC,qBAAqB,CAAC,IAAI,EAAE,CAAC;QAErG,MAAM,EAAC,eAAe,EAAE,cAAc,EAAC,GAAG,kBAAkB,CAAC,WAAW,CAAC,yBAAyB,CAAC,aAAa,CAAC,CAAC;QAClH,MAAM,OAAO,GAAG,MAAM,CAAC,IAAI,CAAC,eAAe,CAAC,CAAC;QAC7C,MAAM,CAAC,SAAS,CAAC,OAAO,EAAE;YACxB,oBAAoB;YACpB,iBAAiB;YACjB,uCAAuC;SACxC,CAAC,CAAC;QACH,mFAAmF;QACnF,MAAM,CAAC,SAAS,CAAC,KAAK,CAAC,IAAI,CAAC,cAAc,CAAC,CAAC,GAAG,CAAC,MAAM,CAAC,EAAE;YACvD,GAAG;YACH,GAAG;YACH,GAAG;SACJ,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as TraceEngine from '../../../models/trace/trace.js';\\nimport {describeWithEnvironment} from '../../../testing/EnvironmentHelpers.js';\\nimport {TraceLoader} from '../../../testing/TraceLoader.js';\\n\\nimport * as TimelineComponents from './components.js';\\n\\ndescribeWithEnvironment('TimelineComponents Invalidations', () => {\\n  it('processes and groups invalidations correctly', async function() {\\n    const {traceData} = await TraceLoader.traceEngine(this, 'style-invalidation-change-attribute.json.gz');\\n    const updateLayoutTreeEvent = traceData.Renderer.allTraceEntries.find(event => {\\n      return TraceEngine.Types.TraceEvents.isTraceEventUpdateLayoutTree(event) &&\\n          event.args.beginData?.stackTrace?.[0].functionName === 'testFuncs.changeAttributeAndDisplay';\\n    });\\n    if (!updateLayoutTreeEvent) {\\n      throw new Error('Could not find update layout tree event');\\n    }\\n    const invalidations = traceData.Invalidations.invalidationsForEvent.get(updateLayoutTreeEvent) ?? [];\\n\\n    const {groupedByReason, backendNodeIds} = TimelineComponents.DetailsView.generateInvalidationsList(invalidations);\\n    const reasons = Object.keys(groupedByReason);\\n    assert.deepEqual(reasons, [\\n      'PseudoClass:active',\\n      'Attribute (dir)',\\n      'Element has pending invalidation list',\\n    ]);\\n    // Map the backendNodeIds to numbers to avoid casting to Protocol.DOM.backendNodeId\\n    assert.deepEqual(Array.from(backendNodeIds).map(Number), [\\n      107,\\n      110,\\n      111,\\n    ]);\\n  });\\n});\\n\"]}");

/***/ })

}]);