(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_common_Debouncer_test_js_map"],{

/***/ "./core/common/Debouncer.test.js.map":
/*!*******************************************!*\
  !*** ./core/common/Debouncer.test.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Debouncer.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/Debouncer.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,aAAa,CAAC;AAEtC,QAAQ,CAAC,WAAW,EAAE,GAAG,EAAE;IACzB,EAAE,CAAC,qBAAqB,EAAE,IAAI,CAAC,EAAE;QAC/B,IAAI,KAAK,GAAG,CAAC,CAAC;QACd,SAAS,SAAS;YAChB,KAAK,EAAE,CAAC;QACV,CAAC;QAED,MAAM,kBAAkB,GAAG,MAAM,CAAC,SAAS,CAAC,QAAQ,CAAC,SAAS,EAAE,EAAE,CAAC,CAAC;QACpE,kEAAkE;QAClE,mBAAmB;QACnB,kBAAkB,EAAE,CAAC;QACrB,kBAAkB,EAAE,CAAC;QAErB,+CAA+C;QAC/C,UAAU,CAAC,GAAG,EAAE;YACd,MAAM,CAAC,WAAW,CAAC,KAAK,EAAE,CAAC,CAAC,CAAC;YAC7B,IAAI,EAAE,CAAC;QACT,CAAC,EAAE,EAAE,CAAC,CAAC;IACT,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from './common.js';\\n\\ndescribe('Debouncer', () => {\\n  it('debounces correctly', done => {\\n    let count = 0;\\n    function increment() {\\n      count++;\\n    }\\n\\n    const debouncedIncrement = Common.Debouncer.debounce(increment, 10);\\n    // Fire it twice, but we anticipate that it is debounced to firing\\n    // once after 10ms.\\n    debouncedIncrement();\\n    debouncedIncrement();\\n\\n    // Then wait a while before checking the value.\\n    setTimeout(() => {\\n      assert.strictEqual(count, 1);\\n      done();\\n    }, 50);\\n  });\\n});\\n\"]}");

/***/ })

}]);