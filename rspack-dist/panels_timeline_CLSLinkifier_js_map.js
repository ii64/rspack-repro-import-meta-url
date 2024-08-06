(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_CLSLinkifier_js_map"], {
"./panels/timeline/CLSLinkifier.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"CLSLinkifier.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/CLSLinkifier.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAS7C,MAAM,OAAO,OAAO;IAClB,CAAC,CAAS;IACV,CAAC,CAAS;IACV,KAAK,CAAS;IACd,MAAM,CAAS;IACf,KAAK,CAAQ;IACb,YAAY,CAAQ;IACpB,YAAY,CAAC,CAAC,EAAE,CAAC,EAAE,KAAK,EAAE,MAAM,CAAmC;QACjE,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC;QACX,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC;QACX,IAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC;QACrB,IAAI,CAAC,KAAK,GAAG,EAAC,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,GAAG,EAAC,CAAC;QAC7C,IAAI,CAAC,YAAY,GAAG,EAAC,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE,GAAG,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,GAAG,EAAC,CAAC;IACtD,CAAC;CACF;AAED,IAAI,iBAA4B,CAAC;AAEjC,MAAM,OAAO,SAAS;IACpB,MAAM,CAAC,QAAQ,CAAC,OAEZ,EAAC,QAAQ,EAAE,IAAI,EAAC;QAClB,MAAM,EAAC,QAAQ,EAAC,GAAG,IAAI,CAAC;QACxB,IAAI,CAAC,iBAAiB,IAAI,QAAQ,EAAE,CAAC;YACnC,iBAAiB,GAAG,IAAI,SAAS,EAAE,CAAC;QACtC,CAAC;QAED,OAAO,iBAAiB,CAAC;IAC3B,CAAC;IAED,OAAO,CAAC,MAAc,EAAE,QAAmC;QACzD,MAAM,IAAI,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;QAC5C,MAAM,IAAI,GAAI,MAAkB,CAAC;QACjC,MAAM,EAAC,CAAC,EAAE,CAAC,EAAE,KAAK,EAAE,MAAM,EAAC,GAAG,IAAI,CAAC;QACnC,IAAI,CAAC,WAAW,GAAG,cAAc,CAAC,IAAI,CAAC,aAAa,KAAK,IAAI,MAAM,GAAG,CAAC;QAEvE,IAAI,CAAC,gBAAgB,CAAC,WAAW,EAAE,GAAG,EAAE,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,aAAa,CAAC,IAAI,CAAC,CAAC,CAAC;QAC5F,IAAI,CAAC,gBAAgB,CAAC,YAAY,EAAE,GAAG,EAAE,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,cAAc,EAAE,CAAC,CAAC;QAE1F,OAAO,IAAI,CAAC;IACd,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2018 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\nimport * as SDK from '../../core/sdk/sdk.js';\\n\\ninterface Color {\\n  r: number;\\n  g: number;\\n  b: number;\\n  a: number;\\n}\\n\\nexport class CLSRect {\\n  x: number;\\n  y: number;\\n  width: number;\\n  height: number;\\n  color: Color;\\n  outlineColor: Color;\\n  constructor([x, y, width, height]: [number, number, number, number]) {\\n    this.x = x;\\n    this.y = y;\\n    this.width = width;\\n    this.height = height;\\n    this.color = {r: 238, g: 111, b: 99, a: 0.4};\\n    this.outlineColor = {r: 238, g: 111, b: 99, a: 0.7};\\n  }\\n}\\n\\nlet linkifierInstance: Linkifier;\\n\\nexport class Linkifier implements Common.Linkifier.Linkifier {\\n  static instance(opts: {\\n    forceNew: boolean|null,\\n  } = {forceNew: null}): Linkifier {\\n    const {forceNew} = opts;\\n    if (!linkifierInstance || forceNew) {\\n      linkifierInstance = new Linkifier();\\n    }\\n\\n    return linkifierInstance;\\n  }\\n\\n  linkify(object: Object, _options?: Common.Linkifier.Options): Node {\\n    const link = document.createElement('span');\\n    const rect = (object as CLSRect);\\n    const {x, y, width, height} = rect;\\n    link.textContent = `Location: [${x},${y}], Size: [${width}x${height}]`;\\n\\n    link.addEventListener('mouseover', () => SDK.OverlayModel.OverlayModel.highlightRect(rect));\\n    link.addEventListener('mouseleave', () => SDK.OverlayModel.OverlayModel.clearHighlight());\\n\\n    return link;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);