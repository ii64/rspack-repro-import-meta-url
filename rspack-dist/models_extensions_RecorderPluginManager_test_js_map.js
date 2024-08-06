(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_extensions_RecorderPluginManager_test_js_map"], {
"./models/extensions/RecorderPluginManager.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"RecorderPluginManager.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/extensions/RecorderPluginManager.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,UAAU,MAAM,6BAA6B,CAAC;AAE1D,QAAQ,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACrC,EAAE,CAAC,+CAA+C,EAAE,KAAK,IAAI,EAAE;QAC7D,MAAM,OAAO,GAAG,UAAU,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,QAAQ,EAAE,CAAC;QAClF,MAAM,MAAM,GAAmG,EAAE,CAAC;QAClH,OAAO,CAAC,gBAAgB,0EAEpB,KAAK,CAAC,EAAE,CAAC,MAAM,CAAC,IAAI,CAAC,EAAC,KAAK,EAAE,aAAa,EAAE,MAAM,EAAE,KAAK,CAAC,IAAI,EAAC,CAAC,CAAC,CAAC;QACtE,OAAO,CAAC,gBAAgB,8EAEpB,KAAK,CAAC,EAAE,CAAC,MAAM,CAAC,IAAI,CAAC,EAAC,KAAK,EAAE,eAAe,EAAE,MAAM,EAAE,KAAK,CAAC,IAAI,EAAC,CAAC,CAAC,CAAC;QACxE,MAAM,MAAM,GAAG,IAAI,UAAU,CAAC,yBAAyB,CAAC,yBAAyB,CAC7E,MAAM,EAAE,IAAI,cAAc,EAAE,CAAC,KAAK,EAAE,CAAC,QAAQ,CAAC,EAAE,wBAAwB,CAAC,CAAC;QAE9E,OAAO,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC;QAC1B,OAAO,CAAC,YAAY,CAAC,MAAM,CAAC,CAAC;QAE7B,MAAM,CAAC,eAAe,CAAC,MAAM,EAAE;YAC7B;gBACE,KAAK,EAAE,aAAa;gBACpB,MAAM;aACP;YACD;gBACE,KAAK,EAAE,eAAe;gBACtB,MAAM;aACP;SACF,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Extensions from '../extensions/extensions.js';\\n\\ndescribe('RecorderPluginManager', () => {\\n  it('emits events when the plugin list is modified', async () => {\\n    const manager = Extensions.RecorderPluginManager.RecorderPluginManager.instance();\\n    const events: Array<{event: string, plugin: Extensions.RecorderExtensionEndpoint.RecorderExtensionEndpoint}> = [];\\n    manager.addEventListener(\\n        Extensions.RecorderPluginManager.Events.PluginAdded,\\n        event => events.push({event: 'pluginAdded', plugin: event.data}));\\n    manager.addEventListener(\\n        Extensions.RecorderPluginManager.Events.PluginRemoved,\\n        event => events.push({event: 'pluginRemoved', plugin: event.data}));\\n    const plugin = new Extensions.RecorderExtensionEndpoint.RecorderExtensionEndpoint(\\n        'test', new MessageChannel().port1, ['export'], 'application/javascript');\\n\\n    manager.addPlugin(plugin);\\n    manager.removePlugin(plugin);\\n\\n    assert.deepStrictEqual(events, [\\n      {\\n        event: 'pluginAdded',\\n        plugin,\\n      },\\n      {\\n        event: 'pluginRemoved',\\n        plugin,\\n      },\\n    ]);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);