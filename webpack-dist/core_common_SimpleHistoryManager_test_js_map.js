(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_SimpleHistoryManager_test_js_map"],{

/***/ "./core/common/SimpleHistoryManager.test.js.map":
/*!******************************************************!*\
  !*** ./core/common/SimpleHistoryManager.test.js.map ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SimpleHistoryManager.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/SimpleHistoryManager.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,aAAa,CAAC;AAEtC,MAAM,oBAAoB,GAAG,MAAM,CAAC,oBAAoB,CAAC,oBAAoB,CAAC;AAE9E,MAAM,KAAK;IACD,QAAQ,CAAa;IAE7B,YAAY,QAAoB;QAC9B,IAAI,CAAC,QAAQ,GAAG,QAAQ,CAAC;IAC3B,CAAC;IAED,KAAK;QACH,OAAO,IAAI,CAAC;IACd,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,QAAQ,EAAE,CAAC;IAClB,CAAC;CACF;AAED,QAAQ,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACpC,SAAS,YAAY,CAAC,eAAuB,EAAE,gBAA0B;QACvE,MAAM,OAAO,GAAG,IAAI,oBAAoB,CAAC,eAAe,CAAC,CAAC;QAC1D,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,eAAe,EAAE,EAAE,CAAC,EAAE,CAAC;YACzC,OAAO,CAAC,IAAI,CAAC,IAAI,KAAK,CAAC,GAAG,EAAE;gBAC1B,gBAAgB,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC;YAC3B,CAAC,CAAC,CAAC,CAAC;QACN,CAAC;QACD,MAAM,CAAC,OAAO,CAAC,OAAO,CAAC,KAAK,EAAE,CAAC,CAAC;QAChC,OAAO,OAAO,CAAC;IACjB,CAAC;IAED,EAAE,CAAC,wCAAwC,EAAE,GAAG,EAAE;QAChD,MAAM,eAAe,GAAG,EAAE,CAAC;QAC3B,MAAM,gBAAgB,GAAa,EAAE,CAAC;QACtC,MAAM,OAAO,GAAG,YAAY,CAAC,eAAe,EAAE,gBAAgB,CAAC,CAAC;QAEhE,OAAO,OAAO,CAAC,WAAW,EAAE,EAAE,CAAC;YAC7B,OAAO,CAAC,QAAQ,EAAE,CAAC;QACrB,CAAC;QAED,MAAM,sBAAsB,GAAG,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC;QAC3D,MAAM,CAAC,SAAS,CAAC,gBAAgB,EAAE,sBAAsB,CAAC,CAAC;IAC7D,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,wCAAwC,EAAE,GAAG,EAAE;QAChD,MAAM,eAAe,GAAG,EAAE,CAAC;QAC3B,MAAM,gBAAgB,GAAa,EAAE,CAAC;QACtC,MAAM,OAAO,GAAG,YAAY,CAAC,eAAe,EAAE,gBAAgB,CAAC,CAAC;QAEhE,KAAK,IAAI,CAAC,GAAG,CAAC,EAAE,CAAC,GAAG,eAAe,GAAG,CAAC,EAAE,EAAE,CAAC,EAAE,CAAC;YAC7C,OAAO,CAAC,QAAQ,EAAE,CAAC;QACrB,CAAC;QAED,OAAO,OAAO,CAAC,WAAW,EAAE,EAAE,CAAC;YAC7B,OAAO,CAAC,QAAQ,EAAE,CAAC;QACrB,CAAC;QAED,MAAM,sBAAsB,GAAG,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC;QAC9D,MAAM,CAAC,SAAS,CAAC,gBAAgB,EAAE,sBAAsB,CAAC,CAAC;IAC7D,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from './common.js';\\n\\nconst SimpleHistoryManager = Common.SimpleHistoryManager.SimpleHistoryManager;\\n\\nclass Entry implements Common.SimpleHistoryManager.HistoryEntry {\\n  private callback: () => void;\\n\\n  constructor(callback: () => void) {\\n    this.callback = callback;\\n  }\\n\\n  valid(): boolean {\\n    return true;\\n  }\\n\\n  reveal(): void {\\n    this.callback();\\n  }\\n}\\n\\ndescribe('SimpleHistoryManager', () => {\\n  function setUpHistory(numberOfEntries: number, revealedElements: number[]) {\\n    const history = new SimpleHistoryManager(numberOfEntries);\\n    for (let i = 0; i < numberOfEntries; ++i) {\\n      history.push(new Entry(() => {\\n        revealedElements.push(i);\\n      }));\\n    }\\n    assert.isFalse(history.empty());\\n    return history;\\n  }\\n\\n  it('correctly reflects if it can roll back', () => {\\n    const numberOfEntries = 10;\\n    const revealedElements: number[] = [];\\n    const history = setUpHistory(numberOfEntries, revealedElements);\\n\\n    while (history.canRollback()) {\\n      history.rollback();\\n    }\\n\\n    const expectedHistoryEntries = [8, 7, 6, 5, 4, 3, 2, 1, 0];\\n    assert.deepEqual(revealedElements, expectedHistoryEntries);\\n  });\\n\\n  it('correctly reflects if it can roll over', () => {\\n    const numberOfEntries = 10;\\n    const revealedElements: number[] = [];\\n    const history = setUpHistory(numberOfEntries, revealedElements);\\n\\n    for (let i = 0; i < numberOfEntries / 2; ++i) {\\n      history.rollback();\\n    }\\n\\n    while (history.canRollover()) {\\n      history.rollover();\\n    }\\n\\n    const expectedHistoryEntries = [8, 7, 6, 5, 4, 5, 6, 7, 8, 9];\\n    assert.deepEqual(revealedElements, expectedHistoryEntries);\\n  });\\n});\\n\"]}");

/***/ })

}]);