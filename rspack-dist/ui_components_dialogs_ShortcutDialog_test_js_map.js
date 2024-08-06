(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_dialogs_ShortcutDialog_test_js_map"], {
"./ui/components/dialogs/ShortcutDialog.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ShortcutDialog.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/dialogs/ShortcutDialog.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,OAAO,MAAM,gCAAgC,CAAC,CAAE,iDAAiD;AAC7G,OAAO,EACL,kBAAkB,GACnB,MAAM,wCAAwC,CAAC;AAChD,OAAO,KAAK,WAAW,MAAM,6CAA6C,CAAC;AAE3E,OAAO,KAAK,OAAO,MAAM,cAAc,CAAC;AAExC,MAAM,WAAW,GAAG,WAAW,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,QAAQ,EAAE,CAAC;AAE/E,kBAAkB,CAAC,gBAAgB,EAAE,GAAG,EAAE;IACxC,KAAK,UAAU,iBAAiB,CAAC,IAAc;QAC7C,MAAM,cAAc,GAAG,IAAI,OAAO,CAAC,cAAc,CAAC,cAAc,EAAE,CAAC;QACnE,cAAc,CAAC,IAAI,GAAG,EAAC,SAAS,EAAE,CAAC,EAAC,KAAK,EAAE,gBAAgB,EAAE,QAAQ,EAAE,CAAC,QAAQ,CAAC,EAAC,CAAC,EAAE,IAAI,EAAC,CAAC;QAC3F,OAAO,CAAC,oBAAoB,CAAC,cAAc,CAAC,CAAC;QAC7C,MAAM,WAAW,CAAC,IAAI,EAAE,CAAC;QAEzB,OAAO,cAAc,CAAC;IACxB,CAAC;IAED,SAAS,2BAA2B,CAAC,cAAqD;QACxF,MAAM,CAAC,SAAS,CAAC,cAAc,CAAC,UAAU,CAAC,CAAC;QAC5C,MAAM,MAAM,GAAG,cAAc,CAAC,UAAU,CAAC,aAAa,CAAC,iBAAiB,CAAC,CAAC;QAC1E,IAAI,CAAC,MAAM,EAAE,CAAC;YACZ,MAAM,CAAC,IAAI,CAAC,2BAA2B,CAAC,CAAC;QAC3C,CAAC;QACD,MAAM,CAAC,UAAU,CAAC,MAAM,EAAE,WAAW,CAAC,CAAC;QACvC,OAAO,MAAM,CAAC;IAChB,CAAC;IAED,EAAE,CAAC,4DAA4D,EAAE,KAAK,IAAI,EAAE;QAC1E,MAAM,cAAc,GAAG,MAAM,iBAAiB,CAAC,IAAI,CAAC,CAAC;QACrD,MAAM,MAAM,GAAG,2BAA2B,CAAC,cAAc,CAAC,CAAC;QAE3D,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,YAAY,CAAC,MAAM,CAAC,CAAC,CAAC;IAC7C,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,wDAAwD,EAAE,KAAK,IAAI,EAAE;QACtE,MAAM,cAAc,GAAG,MAAM,iBAAiB,EAAE,CAAC;QACjD,MAAM,MAAM,GAAG,2BAA2B,CAAC,cAAc,CAAC,CAAC;QAE3D,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,YAAY,CAAC,MAAM,CAAC,CAAC,CAAC;IAC9C,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Helpers from '../../../testing/DOMHelpers.js';  // eslint-disable-line rulesdir/es_modules_import\\nimport {\\n  describeWithLocale,\\n} from '../../../testing/EnvironmentHelpers.js';\\nimport * as Coordinator from '../render_coordinator/render_coordinator.js';\\n\\nimport * as Dialogs from './dialogs.js';\\n\\nconst coordinator = Coordinator.RenderCoordinator.RenderCoordinator.instance();\\n\\ndescribeWithLocale('ShortcutDialog', () => {\\n  async function getShortcutDialog(open?: boolean) {\\n    const shortcutDialog = new Dialogs.ShortcutDialog.ShortcutDialog();\\n    shortcutDialog.data = {shortcuts: [{title: 'Shortcut Title', bindings: ['Ctrl+E']}], open};\\n    Helpers.renderElementIntoDOM(shortcutDialog);\\n    await coordinator.done();\\n\\n    return shortcutDialog;\\n  }\\n\\n  function getDialogFromShortcutDialog(shortcutDialog: Dialogs.ShortcutDialog.ShortcutDialog) {\\n    assert.isNotNull(shortcutDialog.shadowRoot);\\n    const dialog = shortcutDialog.shadowRoot.querySelector('devtools-dialog');\\n    if (!dialog) {\\n      assert.fail('devtools-dialog not found');\\n    }\\n    assert.instanceOf(dialog, HTMLElement);\\n    return dialog;\\n  }\\n\\n  it('should display dialog on initial render when provided prop', async () => {\\n    const shortcutDialog = await getShortcutDialog(true);\\n    const dialog = getDialogFromShortcutDialog(shortcutDialog);\\n\\n    assert.isTrue(dialog.hasAttribute('open'));\\n  });\\n\\n  it('should not display dialog on initial render by default', async () => {\\n    const shortcutDialog = await getShortcutDialog();\\n    const dialog = getDialogFromShortcutDialog(shortcutDialog);\\n\\n    assert.isFalse(dialog.hasAttribute('open'));\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);