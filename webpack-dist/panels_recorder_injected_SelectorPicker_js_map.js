(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_SelectorPicker_js_map"],{

/***/ "./panels/recorder/injected/SelectorPicker.js.map":
/*!********************************************************!*\
  !*** ./panels/recorder/injected/SelectorPicker.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SelectorPicker.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/injected/SelectorPicker.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,MAAM,EAAC,MAAM,aAAa,CAAC;AACnC,OAAO,EAAC,gBAAgB,EAAC,MAAM,uBAAuB,CAAC;AAEvD,OAAO,EAAC,oBAAoB,EAAE,2BAA2B,EAAE,mBAAmB,EAAC,MAAM,WAAW,CAAC;AAQjG,MAAM,cAAc;IAClB,OAAO,CAAS;IAChB,SAAS,CAAmB;IAE5B,YACI,QAA+B,EAC/B,eAAe,GAAG,EAAE,EACpB,KAAK,GAAG,IAAI;QAEd,IAAI,CAAC,OAAO,GAAG,IAAI,MAAM,CAAC,KAAK,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC;QACtD,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,2BAA2B,CAAC,CAAC;QAC9C,IAAI,CAAC,SAAS,GAAG,IAAI,gBAAgB,CACjC,QAAQ,EACR,IAAI,CAAC,OAAO,EACZ,eAAe,CAClB,CAAC;IACJ,CAAC;IAED,iBAAiB,GAAG,CAAC,KAAiB,EAAQ,EAAE;QAC9C,mBAAmB,CAAC,KAAK,CAAC,CAAC;QAE3B,MAAM,MAAM,GAAG,2BAA2B,CAAC,KAAK,CAAC,CAAC;QAClD,MAAM,CAAC,gBAAgB,CACnB,IAAI,CAAC,SAAS,CAAC;YACb,SAAS,EAAE,IAAI,CAAC,SAAS,CAAC,YAAY,CAAC,MAAM,CAAC;YAC9C,GAAG,oBAAoB,CAAC,KAAK,EAAE,MAAM,CAAC;SACvC,CAAC,CACL,CAAC;IACJ,CAAC,CAAC;IAEF,KAAK,GAAG,GAAS,EAAE;QACjB,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,+BAA+B,CAAC,CAAC;QAElD,MAAM,CAAC,gBAAgB,CAAC,OAAO,EAAE,IAAI,CAAC,iBAAiB,EAAE,IAAI,CAAC,CAAC;QAC/D,MAAM,CAAC,gBAAgB,CAAC,WAAW,EAAE,mBAAmB,EAAE,IAAI,CAAC,CAAC;QAChE,MAAM,CAAC,gBAAgB,CAAC,SAAS,EAAE,mBAAmB,EAAE,IAAI,CAAC,CAAC;IAChE,CAAC,CAAC;IAEF,IAAI,GAAG,GAAS,EAAE;QAChB,IAAI,CAAC,OAAO,CAAC,GAAG,CAAC,iCAAiC,CAAC,CAAC;QAEpD,MAAM,CAAC,mBAAmB,CAAC,OAAO,EAAE,IAAI,CAAC,iBAAiB,EAAE,IAAI,CAAC,CAAC;QAClE,MAAM,CAAC,mBAAmB,CAAC,WAAW,EAAE,mBAAmB,EAAE,IAAI,CAAC,CAAC;QACnE,MAAM,CAAC,mBAAmB,CAAC,SAAS,EAAE,mBAAmB,EAAE,IAAI,CAAC,CAAC;IACnE,CAAC,CAAC;CACH;AAED,OAAO,EAAC,cAAc,EAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {Logger} from './Logger.js';\\nimport {SelectorComputer} from './SelectorComputer.js';\\nimport {type AccessibilityBindings} from './selectors/ARIASelector.js';\\nimport {getMouseEventOffsets, getClickableTargetFromEvent, haultImmediateEvent} from './util.js';\\n\\ndeclare global {\\n  interface Window {\\n    captureSelectors(data: string): void;\\n  }\\n}\\n\\nclass SelectorPicker {\\n  #logger: Logger;\\n  #computer: SelectorComputer;\\n\\n  constructor(\\n      bindings: AccessibilityBindings,\\n      customAttribute = '',\\n      debug = true,\\n  ) {\\n    this.#logger = new Logger(debug ? 'debug' : 'silent');\\n    this.#logger.log('Creating a SelectorPicker');\\n    this.#computer = new SelectorComputer(\\n        bindings,\\n        this.#logger,\\n        customAttribute,\\n    );\\n  }\\n\\n  #handleClickEvent = (event: MouseEvent): void => {\\n    haultImmediateEvent(event);\\n\\n    const target = getClickableTargetFromEvent(event);\\n    window.captureSelectors(\\n        JSON.stringify({\\n          selectors: this.#computer.getSelectors(target),\\n          ...getMouseEventOffsets(event, target),\\n        }),\\n    );\\n  };\\n\\n  start = (): void => {\\n    this.#logger.log('Setting up selector listeners');\\n\\n    window.addEventListener('click', this.#handleClickEvent, true);\\n    window.addEventListener('mousedown', haultImmediateEvent, true);\\n    window.addEventListener('mouseup', haultImmediateEvent, true);\\n  };\\n\\n  stop = (): void => {\\n    this.#logger.log('Tearing down selector listeners');\\n\\n    window.removeEventListener('click', this.#handleClickEvent, true);\\n    window.removeEventListener('mousedown', haultImmediateEvent, true);\\n    window.removeEventListener('mouseup', haultImmediateEvent, true);\\n  };\\n}\\n\\nexport {SelectorPicker};\\n\"]}");

/***/ })

}]);