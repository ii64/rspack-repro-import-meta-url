(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_preloading_components_RuleSetGrid_test_js_map"], {
"./panels/application/preloading/components/RuleSetGrid.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"RuleSetGrid.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/panels/application/preloading/components/RuleSetGrid.test.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../../../../core/platform/platform.js';\\nimport * as Protocol from '../../../../generated/protocol.js';\\nimport {assertGridContents} from '../../../../testing/DataGridHelpers.js';\\nimport {renderElementIntoDOM} from '../../../../testing/DOMHelpers.js';\\nimport {describeWithEnvironment} from '../../../../testing/EnvironmentHelpers.js';\\nimport type * as DataGrid from '../../../../ui/components/data_grid/data_grid.js';\\nimport * as Coordinator from '../../../../ui/components/render_coordinator/render_coordinator.js';\\n\\nimport * as PreloadingComponents from './components.js';\\n\\nconst coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();\\n\\nasync function assertRenderResult(\\n    rowsInput: PreloadingComponents.RuleSetGrid.RuleSetGridData, headerExpected: string[],\\n    rowsExpected: string[][]): Promise<DataGrid.DataGrid.DataGrid> {\\n  const component = new PreloadingComponents.RuleSetGrid.RuleSetGrid();\\n  component.update(rowsInput);\\n  renderElementIntoDOM(component);\\n  await coordinator.done();\\n\\n  return assertGridContents(\\n      component,\\n      headerExpected,\\n      rowsExpected,\\n  );\\n}\\n\\ndescribeWithEnvironment('RuleSetGrid', () => {\\n  it('renders grid', async () => {\\n    await assertRenderResult(\\n        {\\n          rows: [{\\n            ruleSet: {\\n              id: 'ruleSetId:0.1' as Protocol.Preload.RuleSetId,\\n              loaderId: 'loaderId:1' as Protocol.Network.LoaderId,\\n              sourceText: `\\n{\\n  \\\"prefetch\\\":[\\n    {\\n      \\\"source\\\": \\\"list\\\",\\n      \\\"urls\\\": [\\\"/prefetched.html\\\"]\\n    }\\n  ]\\n}\\n`,\\n            },\\n            preloadsStatusSummary: '1 Not triggered, 2 Ready, 3 Failure',\\n          }],\\n          pageURL: 'https://example.com/' as Platform.DevToolsPath.UrlString,\\n        },\\n        ['Rule set', 'Status'],\\n        [\\n          ['example.com/', '1 Not triggered, 2 Ready, 3 Failure'],\\n        ],\\n    );\\n  });\\n\\n  it('shows short url for out-of-document speculation rules', async () => {\\n    await assertRenderResult(\\n        {\\n          rows: [{\\n            ruleSet: {\\n              id: 'ruleSetId:0.1' as Protocol.Preload.RuleSetId,\\n              loaderId: 'loaderId:1' as Protocol.Network.LoaderId,\\n              sourceText: `\\n{\\n  \\\"prefetch\\\":[\\n    {\\n      \\\"source\\\": \\\"list\\\",\\n      \\\"urls\\\": [\\\"/prefetched.html\\\"]\\n    }\\n  ]\\n}\\n`,\\n              url: 'https://example.com/assets/speculation-rules.json',\\n            },\\n            preloadsStatusSummary: '1 Not triggered, 2 Ready, 3 Failure',\\n          }],\\n          pageURL: 'https://example.com/' as Platform.DevToolsPath.UrlString,\\n        },\\n        ['Rule set', 'Status'],\\n        [\\n          ['example.com/assets/speculation-rules.json', '1 Not triggered, 2 Ready, 3 Failure'],\\n        ],\\n    );\\n  });\\n\\n  it('shows error counts', async () => {\\n    await assertRenderResult(\\n        {\\n          rows: [\\n            {\\n              ruleSet: {\\n                id: 'ruleSetId:0.1' as Protocol.Preload.RuleSetId,\\n                loaderId: 'loaderId:1' as Protocol.Network.LoaderId,\\n                sourceText: `\\n{\\n  \\\"prefetch\\\":[\\n    {\\n      \\\"source\\\": \\\"list-typo\\\",\\n      \\\"urls\\\": [\\\"/prefetched.html\\\"]\\n    }\\n  ]\\n}\\n`,\\n                errorType: Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped,\\n                errorMessage: 'fake error message',\\n              },\\n              preloadsStatusSummary: '1 Not triggered, 2 Ready, 3 Failure',\\n            },\\n            {\\n              ruleSet: {\\n                id: 'ruleSetId:0.1' as Protocol.Preload.RuleSetId,\\n                loaderId: 'loaderId:1' as Protocol.Network.LoaderId,\\n                sourceText: `\\n{\\\"invalidJson\\\"\\n`,\\n                errorType: Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject,\\n                errorMessage: 'fake error message',\\n              },\\n              preloadsStatusSummary: '',\\n            },\\n          ],\\n          pageURL: 'https://example.com/' as Platform.DevToolsPath.UrlString,\\n        },\\n        ['Rule set', 'Status'],\\n        [\\n          ['example.com/', '1 error 1 Not triggered, 2 Ready, 3 Failure'],\\n          ['example.com/', '1 error'],\\n        ],\\n    );\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);