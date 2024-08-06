(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_LowTextContrastIssue_test_js_map"], {
"./models/issues_manager/LowTextContrastIssue.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"LowTextContrastIssue.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/LowTextContrastIssue.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,OAAO,KAAK,MAAM,MAAM,+BAA+B,CAAC;AACxD,OAAO,EAAC,iBAAiB,EAAC,MAAM,oCAAoC,CAAC;AACrE,OAAO,EAAC,eAAe,EAAC,MAAM,kCAAkC,CAAC;AACjE,OAAO,KAAK,aAAa,MAAM,qCAAqC,CAAC;AAErE,QAAQ,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACpC,EAAE,CAAC,sDAAsD,EAAE,GAAG,EAAE;QAC9D,MAAM,SAAS,GAAG,IAAI,eAAe,CAAC,EAAE,CAA2C,CAAC;QACpF,MAAM,WAAW,GAAG,IAAI,iBAAiB,CAAC,EAAE,CAAyD,CAAC;QACtG,MAAM,aAAa,GAAG;YACpB,qBAAqB,EAAE,KAAK;YAC5B,aAAa,EAAE,CAAC;YAChB,WAAW,EAAE,CAAC;YACd,YAAY,EAAE,CAAC;YACf,QAAQ,EAAE,MAAM;YAChB,UAAU,EAAE,KAAK;SAClB,CAAC;QACF,MAAM,YAAY,GAAG;YACnB;gBACE,GAAG,aAAa;gBAChB,eAAe,EAAE,CAA+B;aACjD;YACD;gBACE,GAAG,aAAa;gBAChB,eAAe,EAAE,CAA+B;aACjD;YACD;gBACE,GAAG,aAAa;gBAChB,eAAe,EAAE,CAA+B;aACjD;SACF,CAAC;QACF,MAAM,MAAM,GACR,YAAY,CAAC,GAAG,CAAC,OAAO,CAAC,EAAE,CAAC,IAAI,aAAa,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,OAAO,EAAE,SAAS,CAAC,CAAC,CAAC;QAEjH,MAAM,UAAU,GAAG,IAAI,MAAM,CAAC,eAAe,CAAC,eAAe,CAAC,WAAW,CAAC,CAAC;QAC3E,KAAK,MAAM,KAAK,IAAI,MAAM,EAAE,CAAC;YAC3B,WAAW,CAAC,wBAAwB,mEACe,EAAC,WAAW,EAAE,SAAS,EAAE,KAAK,EAAC,CAAC,CAAC;QACtF,CAAC;QAED,MAAM,gBAAgB,GAAG,KAAK,CAAC,IAAI,CAAC,UAAU,CAAC,gBAAgB,EAAE,CAAC,CAAC;QACnE,MAAM,CAAC,WAAW,CAAC,gBAAgB,CAAC,MAAM,EAAE,CAAC,CAAC,CAAC;QAC/C,MAAM,iBAAiB,GAAG,KAAK,CAAC,IAAI,CAAC,gBAAgB,CAAC,CAAC,CAAC,CAAC,oBAAoB,EAAE,CAAC,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,iBAAiB,CAAC,MAAM,EAAE,CAAC,CAAC,CAAC;QAChD,MAAM,gBAAgB,GAAG,EAAE,CAAC;QAC5B,KAAK,MAAM,aAAa,IAAI,iBAAiB,EAAE,CAAC;YAC9C,gBAAgB,CAAC,IAAI,CAAC,aAAa,CAAC,OAAO,EAAE,CAAC,eAAe,CAAC,CAAC;QACjE,CAAC;QACD,gBAAgB,CAAC,IAAI,EAAE,CAAC;QACxB,MAAM,CAAC,SAAS,CAAC,gBAAgB,EAAE,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC;IAChD,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\nimport * as Issues from '../../panels/issues/issues.js';\\nimport {MockIssuesManager} from '../../testing/MockIssuesManager.js';\\nimport {MockIssuesModel} from '../../testing/MockIssuesModel.js';\\nimport * as IssuesManager from '../issues_manager/issues_manager.js';\\n\\ndescribe('LowTextContrastIssue', () => {\\n  it('aggregates multiple issues with duplicates correctly', () => {\\n    const mockModel = new MockIssuesModel([]) as unknown as SDK.IssuesModel.IssuesModel;\\n    const mockManager = new MockIssuesManager([]) as unknown as IssuesManager.IssuesManager.IssuesManager;\\n    const commonDetails = {\\n      violatingNodeSelector: 'div',\\n      contrastRatio: 1,\\n      thresholdAA: 1,\\n      thresholdAAA: 1,\\n      fontSize: '14px',\\n      fontWeight: '500',\\n    };\\n    const issueDetails = [\\n      {\\n        ...commonDetails,\\n        violatingNodeId: 1 as Protocol.DOM.BackendNodeId,\\n      },\\n      {\\n        ...commonDetails,\\n        violatingNodeId: 2 as Protocol.DOM.BackendNodeId,\\n      },\\n      {\\n        ...commonDetails,\\n        violatingNodeId: 3 as Protocol.DOM.BackendNodeId,\\n      },\\n    ];\\n    const issues =\\n        issueDetails.map(details => new IssuesManager.LowTextContrastIssue.LowTextContrastIssue(details, mockModel));\\n\\n    const aggregator = new Issues.IssueAggregator.IssueAggregator(mockManager);\\n    for (const issue of issues) {\\n      mockManager.dispatchEventToListeners(\\n          IssuesManager.IssuesManager.Events.IssueAdded, {issuesModel: mockModel, issue});\\n    }\\n\\n    const aggregatedIssues = Array.from(aggregator.aggregatedIssues());\\n    assert.strictEqual(aggregatedIssues.length, 1);\\n    const lowContrastIssues = Array.from(aggregatedIssues[0].getLowContrastIssues());\\n    assert.strictEqual(lowContrastIssues.length, 3);\\n    const violatingNodeIds = [];\\n    for (const contrastIssue of lowContrastIssues) {\\n      violatingNodeIds.push(contrastIssue.details().violatingNodeId);\\n    }\\n    violatingNodeIds.sort();\\n    assert.deepEqual(violatingNodeIds, [1, 2, 3]);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);