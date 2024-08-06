(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_ExtensionDataGatherer_js_map"],{

/***/ "./panels/timeline/ExtensionDataGatherer.js.map":
/*!******************************************************!*\
  !*** ./panels/timeline/ExtensionDataGatherer.js.map ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ExtensionDataGatherer.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/ExtensionDataGatherer.ts\"],\"names\":[],\"mappings\":\"AAKA,OAAO,EAAC,aAAa,EAAC,MAAM,oBAAoB,CAAC;AAIjD,IAAI,6BAA8D,CAAC;AAEnE;;;GAGG;AACH,MAAM,OAAO,qBAAqB;IAChC,gBAAgB,GAAmD,IAAI,CAAC;IACxE,qBAAqB,GAAkE,IAAI,GAAG,EAAE,CAAC;IACjG,MAAM,CAAC,QAAQ;QACb,IAAI,6BAA6B,EAAE,CAAC;YAClC,OAAO,6BAA6B,CAAC;QACvC,CAAC;QACD,6BAA6B,GAAG,IAAI,qBAAqB,EAAE,CAAC;QAC5D,OAAO,6BAA6B,CAAC;IACvC,CAAC;IAED,MAAM,CAAC,cAAc;QACnB,6BAA6B,GAAG,SAAS,CAAC;IAC5C,CAAC;IAED;;OAEG;IACH,gBAAgB;QACd,MAAM,oBAAoB,GAAG,aAAa,CAAC,8BAA8B,EAAE,CAAC,GAAG,EAAE,CAAC;QAClF,IAAI,CAAC,oBAAoB,IAAI,CAAC,IAAI,CAAC,gBAAgB,IAAI,CAAC,IAAI,CAAC,gBAAgB,CAAC,kBAAkB,EAAE,CAAC;YACjG,OAAO,EAAC,gBAAgB,EAAE,EAAE,EAAE,kBAAkB,EAAE,EAAE,EAAC,CAAC;QACxD,CAAC;QACD,MAAM,eAAe,GAAG,IAAI,CAAC,qBAAqB,CAAC,GAAG,CAAC,IAAI,CAAC,gBAAgB,CAAC,CAAC;QAC9E,IAAI,eAAe,EAAE,CAAC;YACpB,OAAO,eAAe,CAAC;QACzB,CAAC;QACD,OAAO,IAAI,CAAC,gBAAgB,CAAC,kBAAkB,CAAC;IAClD,CAAC;IAED,oBAAoB;QAClB,IAAI,IAAI,CAAC,gBAAgB,IAAI,CAAC,IAAI,CAAC,qBAAqB,CAAC,GAAG,CAAC,IAAI,CAAC,gBAAgB,CAAC,EAAE,CAAC;YACpF,IAAI,CAAC,qBAAqB,CAAC,GAAG,CAAC,IAAI,CAAC,gBAAgB,EAAE,IAAI,CAAC,gBAAgB,EAAE,CAAC,CAAC;QACjF,CAAC;IACH,CAAC;IAED,YAAY,CAAC,eAA+D;QAC1E,IAAI,eAAe,KAAK,IAAI,CAAC,gBAAgB,EAAE,CAAC;YAC9C,OAAO;QACT,CAAC;QACD,IAAI,IAAI,CAAC,gBAAgB,KAAK,IAAI,EAAE,CAAC;YACnC,uEAAuE;YACvE,2EAA2E;YAC3E,qEAAqE;YACrE,8CAA8C;YAC9C,IAAI,CAAC,oBAAoB,EAAE,CAAC;QAC9B,CAAC;QACD,IAAI,CAAC,gBAAgB,GAAG,eAAe,CAAC;IAC1C,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport type * as TraceEngine from '../../models/trace/trace.js';\\n\\nimport {TimelinePanel} from './TimelinePanel.js';\\n\\ntype ExtensionData = TraceEngine.Handlers.ModelHandlers.ExtensionTraceData.ExtensionTraceData;\\n\\nlet extensionDataGathererInstance: ExtensionDataGatherer|undefined;\\n\\n/**\\n * This class abstracts the source of extension data out by providing a\\n * single access point to the performance panel for extension data.\\n */\\nexport class ExtensionDataGatherer {\\n  #traceParsedData: TraceEngine.Handlers.Types.TraceParseData|null = null;\\n  #extensionDataByModel: Map<TraceEngine.Handlers.Types.TraceParseData, ExtensionData> = new Map();\\n  static instance(): ExtensionDataGatherer {\\n    if (extensionDataGathererInstance) {\\n      return extensionDataGathererInstance;\\n    }\\n    extensionDataGathererInstance = new ExtensionDataGatherer();\\n    return extensionDataGathererInstance;\\n  }\\n\\n  static removeInstance(): void {\\n    extensionDataGathererInstance = undefined;\\n  }\\n\\n  /**\\n   * Gets the data provided by extensions.\\n   */\\n  getExtensionData(): ExtensionData {\\n    const extensionDataEnabled = TimelinePanel.extensionDataVisibilitySetting().get();\\n    if (!extensionDataEnabled || !this.#traceParsedData || !this.#traceParsedData.ExtensionTraceData) {\\n      return {extensionMarkers: [], extensionTrackData: []};\\n    }\\n    const maybeCachedData = this.#extensionDataByModel.get(this.#traceParsedData);\\n    if (maybeCachedData) {\\n      return maybeCachedData;\\n    }\\n    return this.#traceParsedData.ExtensionTraceData;\\n  }\\n\\n  saveCurrentModelData(): void {\\n    if (this.#traceParsedData && !this.#extensionDataByModel.has(this.#traceParsedData)) {\\n      this.#extensionDataByModel.set(this.#traceParsedData, this.getExtensionData());\\n    }\\n  }\\n\\n  modelChanged(traceParsedData: TraceEngine.Handlers.Types.TraceParseData|null): void {\\n    if (traceParsedData === this.#traceParsedData) {\\n      return;\\n    }\\n    if (this.#traceParsedData !== null) {\\n      // DevTools extension data is assumed to be useful only for the current\\n      // trace data (model). As such, if the model changes, we cache the devtools\\n      // extension data we have collected for the previous model and listen\\n      // for new data that applies to the new model.\\n      this.saveCurrentModelData();\\n    }\\n    this.#traceParsedData = traceParsedData;\\n  }\\n}\\n\"]}");

/***/ })

}]);