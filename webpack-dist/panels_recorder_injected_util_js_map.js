(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_util_js_map"],{

/***/ "./panels/recorder/injected/util.js.map":
/*!**********************************************!*\
  !*** ./panels/recorder/injected/util.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"util.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/injected/util.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,UAAU,MAAM,CAAY,SAAoB;IACpD,IAAI,CAAC,SAAS,EAAE,CAAC;QACf,MAAM,IAAI,KAAK,CAAC,mBAAmB,CAAC,CAAC;IACvC,CAAC;AACH,CAAC;AAED,MAAM,CAAC,MAAM,mBAAmB,GAAG,CAAC,KAAY,EAAQ,EAAE;IACxD,KAAK,CAAC,cAAc,EAAE,CAAC;IACvB,KAAK,CAAC,wBAAwB,EAAE,CAAC;AACnC,CAAC,CAAC;AAEF,MAAM,CAAC,MAAM,oBAAoB,GAAG,CAAC,KAAiB,EAAE,MAAe,EAAsC,EAAE;IAC7G,MAAM,IAAI,GAAG,MAAM,CAAC,qBAAqB,EAAE,CAAC;IAC5C,OAAO,EAAC,OAAO,EAAE,KAAK,CAAC,OAAO,GAAG,IAAI,CAAC,CAAC,EAAE,OAAO,EAAE,KAAK,CAAC,OAAO,GAAG,IAAI,CAAC,CAAC,EAAC,CAAC;AAC5E,CAAC,CAAC;AAEF;;GAEG;AACH,MAAM,CAAC,MAAM,2BAA2B,GAAG,CAAC,KAAY,EAAW,EAAE;IACnE,KAAK,MAAM,OAAO,IAAI,KAAK,CAAC,YAAY,EAAE,EAAE,CAAC;QAC3C,IAAI,CAAC,CAAC,OAAO,YAAY,OAAO,CAAC,EAAE,CAAC;YAClC,SAAS;QACX,CAAC;QACD,6DAA6D;QAC7D,MAAM,IAAI,GAAG,OAAO,CAAC,qBAAqB,EAAE,CAAC;QAC7C,IAAI,IAAI,CAAC,KAAK,KAAK,CAAC,IAAI,IAAI,CAAC,MAAM,KAAK,CAAC,EAAE,CAAC;YAC1C,SAAS;QACX,CAAC;QACD,OAAO,OAAO,CAAC;IACjB,CAAC;IACD,MAAM,IAAI,KAAK,CAAC,uCAAuC,KAAK,CAAC,IAAI,EAAE,CAAC,CAAC;AACvE,CAAC,CAAC;AAEF,MAAM,CAAC,MAAM,qBAAqB,GAAG,CAAC,KAAiB,EAAE,MAAe,EAAoC,EAAE;IAC5G,IAAI,UAAmC,CAAC;IACxC,IAAI,KAAK,YAAY,YAAY,EAAE,CAAC;QAClC,QAAQ,KAAK,CAAC,WAAW,EAAE,CAAC;YAC1B,KAAK,OAAO;gBACV,kBAAkB;gBAClB,MAAM;YACR,KAAK,KAAK,CAAC;YACX,KAAK,OAAO;gBACV,UAAU,GAAG,KAAK,CAAC,WAAW,CAAC;gBAC/B,MAAM;YACR;gBACE,2BAA2B;gBAC3B,OAAO;QACX,CAAC;IACH,CAAC;IACD,MAAM,EAAC,OAAO,EAAE,OAAO,EAAC,GAAG,oBAAoB,CAAC,KAAK,EAAE,MAAM,CAAC,CAAC;IAC/D,IAAI,OAAO,GAAG,CAAC,IAAI,OAAO,GAAG,CAAC,EAAE,CAAC;QAC/B,qEAAqE;QACrE,mDAAmD;QACnD,OAAO;IACT,CAAC;IACD,OAAO;QACL,MAAM,EAAG,CAAC,WAAW,EAAE,WAAW,EAAE,MAAM,EAAE,SAAS,CAAW,CAAC,KAAK,CAAC,MAAM,GAAG,CAAC,CAAC;QAClF,UAAU;QACV,OAAO;QACP,OAAO;KACR,CAAC;AACJ,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type Schema} from '../../../third_party/puppeteer-replay/puppeteer-replay.js';\\n\\nexport function assert<Condition>(condition: Condition): asserts condition {\\n  if (!condition) {\\n    throw new Error('Assertion failed!');\\n  }\\n}\\n\\nexport const haultImmediateEvent = (event: Event): void => {\\n  event.preventDefault();\\n  event.stopImmediatePropagation();\\n};\\n\\nexport const getMouseEventOffsets = (event: MouseEvent, target: Element): {offsetX: number, offsetY: number} => {\\n  const rect = target.getBoundingClientRect();\\n  return {offsetX: event.clientX - rect.x, offsetY: event.clientY - rect.y};\\n};\\n\\n/**\\n * @returns the element that emitted the event.\\n */\\nexport const getClickableTargetFromEvent = (event: Event): Element => {\\n  for (const element of event.composedPath()) {\\n    if (!(element instanceof Element)) {\\n      continue;\\n    }\\n    // If an element has no width or height, we skip this target.\\n    const rect = element.getBoundingClientRect();\\n    if (rect.width === 0 || rect.height === 0) {\\n      continue;\\n    }\\n    return element;\\n  }\\n  throw new Error(`No target is found in event of type ${event.type}`);\\n};\\n\\nexport const createClickAttributes = (event: MouseEvent, target: Element): Schema.ClickAttributes|undefined => {\\n  let deviceType: 'pen'|'touch'|undefined;\\n  if (event instanceof PointerEvent) {\\n    switch (event.pointerType) {\\n      case 'mouse':\\n        // Default device.\\n        break;\\n      case 'pen':\\n      case 'touch':\\n        deviceType = event.pointerType;\\n        break;\\n      default:\\n        // Unsupported device type.\\n        return;\\n    }\\n  }\\n  const {offsetX, offsetY} = getMouseEventOffsets(event, target);\\n  if (offsetX < 0 || offsetY < 0) {\\n    // Event comes from outside the viewport. Can happen as a result of a\\n    // simulated click (through a keyboard event e.g.).\\n    return;\\n  }\\n  return {\\n    button: (['auxiliary', 'secondary', 'back', 'forward'] as const)[event.button - 1],\\n    deviceType,\\n    offsetX,\\n    offsetY,\\n  };\\n};\\n\"]}");

/***/ })

}]);