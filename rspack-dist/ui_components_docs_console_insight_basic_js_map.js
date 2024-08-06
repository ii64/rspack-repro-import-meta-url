(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_console_insight_basic_js_map"], {
"./ui/components/docs/console_insight/basic.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/console_insight/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,+BAA+B,CAAC;AACtD,OAAO,KAAK,OAAO,MAAM,uCAAuC,CAAC;AACjE,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,cAAc,GAAG,OAAO,CAAC,cAAc,CAAC;AAE9C,MAAM,SAAS,GAAG,IAAI,cAAc,CAChC;IACE,cAAc;QACZ,OAAO,EAAE,CAAC;IACZ,CAAC;IACD,KAAK,CAAC,WAAW;QACf,OAAO;YACL,MAAM,EAAE,EAAE;YACV,uBAAuB,EAAE,KAAK;YAC9B,OAAO,EAAE;gBACP;oBACE,IAAI,EAAE,OAAO,CAAC,UAAU,CAAC,OAAO;oBAChC,KAAK,EAAE,8CAA8C;iBACtD;gBACD;oBACE,IAAI,EAAE,OAAO,CAAC,UAAU,CAAC,eAAe;oBACxC,KAAK,EAAE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAqCA;iBACR;aACF;SACF,CAAC;IACJ,CAAC;CACF,EACD;IACE,KAAK,CAAC,CACF,KAAK;QACH,MAAM,IAAI,OAAO,CAAC,OAAO,CAAC,EAAE,CAAC,UAAU,CAAC,OAAO,EAAE,IAAI,CAAC,CAAC,CAAC;QACxD,MAAM;YACJ,WAAW,EAAE;;;;;;;;;;;;;;;CAe1B;YACa,QAAQ,EAAE,EAAE;SACb,CAAC;IACJ,CAAC;IACL,mBAAmB,EAAE,GAAG,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,EAAE,CAAC;CAC/C,EACD,IAAI,CAAC,UAAU,CAAC,gBAAgB,CAAC,SAAS,CAAC,CAAC;AAChD,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../../../../core/host/host.js';\\nimport * as Explain from '../../../../panels/explain/explain.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst ConsoleInsight = Explain.ConsoleInsight;\\n\\nconst component = new ConsoleInsight(\\n    {\\n      getSearchQuery() {\\n        return '';\\n      },\\n      async buildPrompt() {\\n        return {\\n          prompt: '',\\n          isPageReloadRecommended: false,\\n          sources: [\\n            {\\n              type: Explain.SourceType.MESSAGE,\\n              value: 'Something went wrong\\\\n\\\\nSomething went wrong',\\n            },\\n            {\\n              type: Explain.SourceType.NETWORK_REQUEST,\\n              value: `Request: https://example.com/data.html\\n\\nRequest headers:\\n:authority: example.com\\n:method: GET\\n:path: https://example.com/data.json\\n:scheme: https\\naccept: */*\\naccept-encoding: gzip, deflate, br\\naccept-language: en-DE,en;q=0.9,de-DE;q=0.8,de;q=0.7,en-US;q=0.6\\nreferer: https://example.com/demo.html\\nsec-ch-ua: \\\"Not A(Brand\\\";v=\\\"99\\\", \\\"Google Chrome\\\";v=\\\"121\\\", \\\"Chromium\\\";v=\\\"121\\\"\\nsec-ch-ua-arch: \\\"arm\\\"\\nsec-ch-ua-bitness: \\\"64\\\"\\nsec-ch-ua-full-version: \\\"121.0.6116.0\\\"\\nsec-ch-ua-full-version-list: \\\"Not A(Brand\\\";v=\\\"99.0.0.0\\\", \\\"Google Chrome\\\";v=\\\"121.0.6116.0\\\", \\\"Chromium\\\";v=\\\"121.0.6116.0\\\"\\nsec-ch-ua-mobile: ?0\\nsec-ch-ua-model: \\\"\\\"\\nsec-ch-ua-platform: \\\"macOS\\\"\\nsec-ch-ua-platform-version: \\\"14.1.0\\\"\\nsec-ch-ua-wow64: ?0\\nsec-fetch-dest: empty\\nsec-fetch-mode: cors\\nsec-fetch-site: same-origin\\nuser-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36\\n\\nResponse headers:\\naccept-ch: Sec-CH-UA, Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Mobile, Sec-CH-UA-Model, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version, Sec-CH-UA-WoW64\\ncontent-length: 1646\\ncontent-type: text/html; charset=UTF-8\\ncross-origin-opener-policy-report-only: same-origin; report-to=\\\"gfe-static-content-corp\\\"\\ndate: Fri, 10 Nov 2023 13:46:47 GMT\\npermissions-policy: ch-ua=*, ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-mobile=*, ch-ua-model=*, ch-ua-platform=*, ch-ua-platform-version=*, ch-ua-wow64=*\\nserver: sffe\\nstrict-transport-security: max-age=31536000; includeSubdomains\\nvary: Origin\\n\\nResponse status: 404`,\\n            },\\n          ],\\n        };\\n      },\\n    },\\n    {\\n      async *\\n          fetch() {\\n            await new Promise(resolve => setTimeout(resolve, 2000));\\n            yield {\\n              explanation: `Some text with \\\\`code\\\\`. Some code:\\n\\\\`\\\\`\\\\`ts\\nconsole.log('test');\\ndocument.querySelector('test').style = 'black';\\n\\\\`\\\\`\\\\`\\nSome text with \\\\`code\\\\`. Some code:\\n\\\\`\\\\`\\\\`ts\\nconsole.log('test');\\ndocument.querySelector('test').style = 'black';\\n\\\\`\\\\`\\\\`\\nSome text with \\\\`code\\\\`. Some code:\\n\\\\`\\\\`\\\\`ts\\nconsole.log('test');\\ndocument.querySelector('test').style = 'black';\\n\\\\`\\\\`\\\\`\\n`,\\n              metadata: {},\\n            };\\n          },\\n      registerClientEvent: () => Promise.resolve({}),\\n    },\\n    Host.AidaClient.AidaAvailability.AVAILABLE);\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);