(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_issue_counter_basic_js_map"], {
"./ui/components/docs/issue_counter/basic.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/issue_counter/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAE7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,YAAY,GACd,MAAM,MAAM,CAAC,0DAA0D,CAAC,CAAC;AAE7E,SAAS,eAAe,CAAC,IAAsD;IAC7E,MAAM,SAAS,GAAG,IAAI,YAAY,CAAC,YAAY,CAAC,YAAY,EAAE,CAAC;IAC/D,SAAS,CAAC,IAAI,GAAG,IAAI,CAAC;IACtB,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAC/D,CAAC;AAED,MAAM,gBAAgB,GAAG;IACvB,gBAAgB,KAAS,CAAC;IAC1B,mBAAmB,KAAS,CAAC;IAC7B,cAAc;QACZ,OAAO,CAAC,CAAC;IACX,CAAC;CACsD,CAAC;AAE1D,eAAe,CAAC,EAAC,aAAa,EAAE,gBAAgB,EAAC,CAAC,CAAC;AAEnD,eAAe,CAAC,EAAC,aAAa,EAAE,gBAAgB,EAAE,YAAY,EAAE,GAAG,EAAE,GAAE,CAAC,EAAC,CAAC,CAAC;AAE3E,eAAe,CAAC,EAAC,aAAa,EAAE,gBAAgB,EAAE,YAAY,EAAE,GAAG,EAAE,GAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as IssuesManager from '../../../../models/issues_manager/issues_manager.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport type * as IssueCounterModule from '../../../../ui/components/issue_counter/issue_counter.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst IssueCounter: typeof IssueCounterModule =\\n    await import('../../../../ui/components/issue_counter/issue_counter.js');\\n\\nfunction appendComponent(data: IssueCounterModule.IssueCounter.IssueCounterData) {\\n  const component = new IssueCounter.IssueCounter.IssueCounter();\\n  component.data = data;\\n  document.getElementById('container')?.appendChild(component);\\n}\\n\\nconst mockIssueManager = {\\n  addEventListener(): void{},\\n  removeEventListener(): void{},\\n  numberOfIssues(): number {\\n    return 1;\\n  },\\n} as unknown as IssuesManager.IssuesManager.IssuesManager;\\n\\nappendComponent({issuesManager: mockIssueManager});\\n\\nappendComponent({issuesManager: mockIssueManager, clickHandler: () => {}});\\n\\nappendComponent({issuesManager: mockIssueManager, clickHandler: () => {}, compact: true});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);