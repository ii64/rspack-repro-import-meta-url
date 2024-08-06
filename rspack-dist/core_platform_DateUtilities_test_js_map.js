(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_DateUtilities_test_js_map"], {
"./core/platform/DateUtilities.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"DateUtilities.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/DateUtilities.test.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,eAAe,CAAC;AAE1C,QAAQ,CAAC,eAAe,EAAE,GAAG,EAAE;IAC7B,QAAQ,CAAC,SAAS,EAAE,GAAG,EAAE;QACvB,EAAE,CAAC,+BAA+B,EAAE,GAAG,EAAE;YACvC,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,aAAa,CAAC,OAAO,CAAC,IAAI,IAAI,EAAE,CAAC,CAAC,CAAC;QAC5D,CAAC,CAAC,CAAC;QAEH,EAAE,CAAC,mCAAmC,EAAE,GAAG,EAAE;YAC3C,MAAM,UAAU,GAAG,IAAI,IAAI,CAAC,YAAY,CAAC,CAAC;YAE1C,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,aAAa,CAAC,OAAO,CAAC,UAAU,CAAC,CAAC,CAAC;QAC7D,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;IAEH,QAAQ,CAAC,kBAAkB,EAAE,GAAG,EAAE;QAChC,EAAE,CAAC,8BAA8B,EAAE,GAAG,EAAE;YACtC,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC,IAAI,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,CAAC;YAChD,MAAM,CAAC,WAAW,CAAC,QAAQ,CAAC,aAAa,CAAC,gBAAgB,CAAC,IAAI,CAAC,EAAE,iBAAiB,CAAC,CAAC;QACvF,CAAC,CAAC,CAAC;QAEH,EAAE,CAAC,qBAAqB,EAAE,GAAG,EAAE;YAC7B,MAAM,IAAI,GAAG,IAAI,IAAI,CAAC,IAAI,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC;YAC3C,MAAM,CAAC,WAAW,CAAC,QAAQ,CAAC,aAAa,CAAC,gBAAgB,CAAC,IAAI,CAAC,EAAE,iBAAiB,CAAC,CAAC;QACvF,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Platform from './platform.js';\\n\\ndescribe('DateUtilities', () => {\\n  describe('isValid', () => {\\n    it('returns true for a valid date', () => {\\n      assert.isTrue(Platform.DateUtilities.isValid(new Date()));\\n    });\\n\\n    it('returns false for a nonsense date', () => {\\n      const soNotADate = new Date('not-a-date');\\n\\n      assert.isFalse(Platform.DateUtilities.isValid(soNotADate));\\n    });\\n  });\\n\\n  describe('toISO8601Compact', () => {\\n    it('formats a date into a string', () => {\\n      const date = new Date(2020, 10, 20, 12, 13, 14);\\n      assert.strictEqual(Platform.DateUtilities.toISO8601Compact(date), '20201120T121314');\\n    });\\n\\n    it('adds leading zeroes', () => {\\n      const date = new Date(2020, 0, 1, 0, 0, 0);\\n      assert.strictEqual(Platform.DateUtilities.toISO8601Compact(date), '20200101T000000');\\n    });\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);