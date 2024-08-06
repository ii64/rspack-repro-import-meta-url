(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_graph_visualizer_GraphManager_js_map"], {
"./panels/web_audio/graph_visualizer/GraphManager.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"GraphManager.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/web_audio/graph_visualizer/GraphManager.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,SAAS,EAAC,MAAM,gBAAgB,CAAC;AAEzC,6DAA6D;AAC7D,6EAA6E;AAC7E,MAAM,OAAO,YAAY;IACN,mBAAmB,GAAG,IAAI,GAAG,EAAqB,CAAC;IAEpE,aAAa,CAAC,SAAiB;QAC7B,MAAM,KAAK,GAAG,IAAI,SAAS,CAAC,SAAS,CAAC,CAAC;QACvC,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,SAAS,EAAE,KAAK,CAAC,CAAC;IACjD,CAAC;IAED,cAAc,CAAC,SAAiB;QAC9B,IAAI,CAAC,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,SAAS,CAAC,EAAE,CAAC;YAC7C,OAAO;QACT,CAAC;QAED,MAAM,KAAK,GAAG,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;QACtD,IAAI,CAAC,KAAK,EAAE,CAAC;YACX,OAAO;QACT,CAAC;QAED,IAAI,CAAC,mBAAmB,CAAC,MAAM,CAAC,SAAS,CAAC,CAAC;IAC7C,CAAC;IAED,UAAU,CAAC,SAAiB;QAC1B,OAAO,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IACjD,CAAC;IAED,WAAW;QACT,IAAI,CAAC,mBAAmB,CAAC,KAAK,EAAE,CAAC;IACnC,CAAC;IAED;;;;OAIG;IACH,QAAQ,CAAC,SAAiB;QACxB,OAAO,IAAI,CAAC,mBAAmB,CAAC,GAAG,CAAC,SAAS,CAAC,IAAI,IAAI,CAAC;IACzD,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {GraphView} from './GraphView.js';\\n\\n// A class that maps each context to its corresponding graph.\\n// It controls which graph to render when the context is switched or updated.\\nexport class GraphManager {\\n  private readonly graphMapByContextId = new Map<string, GraphView>();\\n\\n  createContext(contextId: string): void {\\n    const graph = new GraphView(contextId);\\n    this.graphMapByContextId.set(contextId, graph);\\n  }\\n\\n  destroyContext(contextId: string): void {\\n    if (!this.graphMapByContextId.has(contextId)) {\\n      return;\\n    }\\n\\n    const graph = this.graphMapByContextId.get(contextId);\\n    if (!graph) {\\n      return;\\n    }\\n\\n    this.graphMapByContextId.delete(contextId);\\n  }\\n\\n  hasContext(contextId: string): boolean {\\n    return this.graphMapByContextId.has(contextId);\\n  }\\n\\n  clearGraphs(): void {\\n    this.graphMapByContextId.clear();\\n  }\\n\\n  /**\\n   * Get graph by contextId.\\n   * If the user starts listening for WebAudio events after the page has been running a context for awhile,\\n   * the graph might be undefined.\\n   */\\n  getGraph(contextId: string): GraphView|null {\\n    return this.graphMapByContextId.get(contextId) || null;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);