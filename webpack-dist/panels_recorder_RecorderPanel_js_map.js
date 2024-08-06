(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderPanel_js_map"],{

/***/ "./panels/recorder/RecorderPanel.js.map":
/*!**********************************************!*\
  !*** ./panels/recorder/RecorderPanel.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"RecorderPanel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/recorder/RecorderPanel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAChD,OAAO,KAAK,aAAa,MAAM,2CAA2C,CAAC;AAG3E,OAAO,EAAC,kBAAkB,EAAC,MAAM,yBAAyB,CAAC;AAE3D,IAAI,qBAAoC,CAAC;AAEzC,MAAM,OAAO,aAAc,SAAQ,EAAE,CAAC,KAAK,CAAC,KAAK;IAC/C,MAAM,CAAC,SAAS,GAAG,iBAAiB,CAAC;IAErC,WAAW,CAAqB;IAEhC;QACE,KAAK,CAAC,aAAa,CAAC,SAAS,CAAC,CAAC;QAC/B,IAAI,CAAC,OAAO,CAAC,YAAY,CAAC,OAAO,EAAE,GAAG,aAAa,CAAC,KAAK,CAAC,iBAAiB,CAAC,CAAC,KAAK,CAAC,EAAC,MAAM,EAAE,IAAI,EAAC,CAAC,EAAE,CAAC,CAAC;QACtG,IAAI,CAAC,WAAW,GAAG,IAAI,kBAAkB,EAAE,CAAC;QAC5C,IAAI,CAAC,cAAc,CAAC,MAAM,CAAC,IAAI,CAAC,WAAW,CAAC,CAAC;QAC7C,IAAI,CAAC,cAAc,CAAC,KAAK,CAAC,QAAQ,GAAG,OAAO,CAAC;IAC/C,CAAC;IAED,MAAM,CAAC,QAAQ,CACX,OAAiC,EAAC,QAAQ,EAAE,IAAI,EAAC;QAEnD,MAAM,EAAC,QAAQ,EAAC,GAAG,IAAI,CAAC;QACxB,IAAI,CAAC,qBAAqB,IAAI,QAAQ,EAAE,CAAC;YACvC,qBAAqB,GAAG,IAAI,aAAa,EAAE,CAAC;QAC9C,CAAC;QAED,OAAO,qBAAqB,CAAC;IAC/B,CAAC;IAEQ,QAAQ;QACf,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,EAAE,CAAC,SAAS,CAAC,aAAa,EAAE,IAAI,CAAC,CAAC;QAC7D,8CAA8C;QAC9C,IAAI,CAAC,WAAW,CAAC,KAAK,EAAE,CAAC;IAC3B,CAAC;IAEQ,QAAQ;QACf,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,EAAE,CAAC,SAAS,CAAC,aAAa,EAAE,IAAI,CAAC,CAAC;IAC/D,CAAC;IAED,aAAa,CAAC,QAAiC;QAC7C,IAAI,CAAC,WAAW,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;IAC3C,CAAC;IAED,gBAAgB,CAAC,QAAiC;QAChD,OAAO,IAAI,CAAC,WAAW,CAAC,gBAAgB,CAAC,QAAQ,CAAC,CAAC;IACrD,CAAC;;AAGH,MAAM,OAAO,cAAc;IACzB,YAAY,CACR,QAA4B,EAC5B,QAAiC;QAEnC,KAAK,CAAC,KAAK,IAAI,EAAE;YACf,MAAM,EAAE,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC,QAAQ,CAChD,aAAa,CAAC,SAAS,CAC1B,CAAC;YACF,MAAM,IAAI,GAAG,EAAE,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC,IAAI,CACnD,aAAa,CAAC,SAAS,CAC1B,CAAC;YAEF,IAAI,IAAI,EAAE,CAAC;gBACT,MAAM,MAAM,GAAG,CAAC,MAAM,IAAI,CAAC,MAAM,EAAE,CAAkB,CAAC;gBAEtD,MAAM,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;YACjC,CAAC;QACH,CAAC,CAAC,EAAE,CAAC;QACL,OAAO,IAAI,CAAC;IACd,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as UI from '../../ui/legacy/legacy.js';\\nimport * as VisualLogging from '../../ui/visual_logging/visual_logging.js';\\n\\nimport type * as Actions from './recorder-actions/recorder-actions.js';\\nimport {RecorderController} from './RecorderController.js';\\n\\nlet recorderPanelInstance: RecorderPanel;\\n\\nexport class RecorderPanel extends UI.Panel.Panel {\\n  static panelName = 'chrome-recorder';\\n\\n  #controller: RecorderController;\\n\\n  constructor() {\\n    super(RecorderPanel.panelName);\\n    this.element.setAttribute('jslog', `${VisualLogging.panel('chrome-recorder').track({resize: true})}`);\\n    this.#controller = new RecorderController();\\n    this.contentElement.append(this.#controller);\\n    this.contentElement.style.minWidth = '400px';\\n  }\\n\\n  static instance(\\n      opts: {forceNew: boolean|null} = {forceNew: null},\\n      ): RecorderPanel {\\n    const {forceNew} = opts;\\n    if (!recorderPanelInstance || forceNew) {\\n      recorderPanelInstance = new RecorderPanel();\\n    }\\n\\n    return recorderPanelInstance;\\n  }\\n\\n  override wasShown(): void {\\n    UI.Context.Context.instance().setFlavor(RecorderPanel, this);\\n    // Focus controller so shortcuts become active\\n    this.#controller.focus();\\n  }\\n\\n  override willHide(): void {\\n    UI.Context.Context.instance().setFlavor(RecorderPanel, null);\\n  }\\n\\n  handleActions(actionId: Actions.RecorderActions): void {\\n    this.#controller.handleActions(actionId);\\n  }\\n\\n  isActionPossible(actionId: Actions.RecorderActions): boolean {\\n    return this.#controller.isActionPossible(actionId);\\n  }\\n}\\n\\nexport class ActionDelegate implements UI.ActionRegistration.ActionDelegate {\\n  handleAction(\\n      _context: UI.Context.Context,\\n      actionId: Actions.RecorderActions,\\n      ): boolean {\\n    void (async () => {\\n      await UI.ViewManager.ViewManager.instance().showView(\\n          RecorderPanel.panelName,\\n      );\\n      const view = UI.ViewManager.ViewManager.instance().view(\\n          RecorderPanel.panelName,\\n      );\\n\\n      if (view) {\\n        const widget = (await view.widget()) as RecorderPanel;\\n\\n        widget.handleActions(actionId);\\n      }\\n    })();\\n    return true;\\n  }\\n}\\n\"]}");

/***/ })

}]);