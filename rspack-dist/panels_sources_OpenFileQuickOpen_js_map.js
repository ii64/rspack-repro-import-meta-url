(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_OpenFileQuickOpen_js_map"], {
"./panels/sources/OpenFileQuickOpen.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"OpenFileQuickOpen.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/sources/OpenFileQuickOpen.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AACtD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAEhD,OAAO,EAAC,UAAU,EAAC,MAAM,6BAA6B,CAAC;AACvD,OAAO,KAAK,UAAU,MAAM,gDAAgD,CAAC;AAE7E,OAAO,EAAC,gCAAgC,EAAC,MAAM,uCAAuC,CAAC;AACvF,OAAO,EAAC,WAAW,EAAC,MAAM,kBAAkB,CAAC;AAE7C,MAAM,OAAO,iBAAkB,SAAQ,gCAAgC;IACrE;QACE,KAAK,CAAC,aAAa,CAAC,CAAC;IACvB,CAAC;IAEQ,MAAM;QACb,IAAI,CAAC,gBAAgB,CAAC,WAAW,CAAC,yBAAyB,EAAE,CAAC,CAAC;QAC/D,KAAK,CAAC,MAAM,EAAE,CAAC;IACjB,CAAC;IAEQ,oBAAoB,CACzB,YAAsD,EAAE,UAAmB,EAAE,YAAqB;QACpG,IAAI,CAAC,WAAW,CAAC,WAAW,CAAC,IAAI,CAAC,WAAW,CAAC,MAAM,CAAC,wBAAwB,CAAC,CAAC;QAE/E,IAAI,CAAC,YAAY,EAAE,CAAC;YAClB,OAAO;QACT,CAAC;QACD,IAAI,OAAO,UAAU,KAAK,QAAQ,EAAE,CAAC;YACnC,KAAK,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC,YAAY,CAAC,UAAU,CAAC,UAAU,EAAE,YAAY,CAAC,CAAC,CAAC;QACjF,CAAC;aAAM,CAAC;YACN,KAAK,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC,YAAY,CAAC,CAAC;QAC5C,CAAC;IACH,CAAC;IAEQ,aAAa,CAAC,OAAoC;QACzD,OAAO,CAAC,OAAO,CAAC,gBAAgB,EAAE,CAAC;IACrC,CAAC;IAEQ,UAAU,CAAC,SAAiB,EAAE,KAAa,EAAE,YAAqB,EAAE,eAAwB;QACnG,KAAK,CAAC,UAAU,CAAC,SAAS,EAAE,KAAK,EAAE,YAAY,EAAE,eAAe,CAAC,CAAC;QAElE,MAAM,WAAW,GAAG,IAAI,UAAU,CAAC,IAAI,CAAC,IAAI,EAAE,CAAC;QAC/C,MAAM,QAAQ,GAAG,UAAU,CAAC,uBAAuB,CAAC,IAAI,CAAC,iBAAiB,CAAC,SAAS,CAAC,CAAC,CAAC;QACvF,WAAW,CAAC,IAAI,GAAG;YACjB,GAAG,QAAQ;YACX,KAAK,EAAE,MAAM;YACb,MAAM,EAAE,MAAM;SACf,CAAC;QACF,YAAY,CAAC,aAAa,EAAE,aAAa,EAAE,YAAY,CAAC,WAAW,EAAE,YAAY,CAAC,aAAa,CAAC,CAAC;IACnG,CAAC;IAEQ,eAAe;QACtB,OAAO,IAAI,CAAC;IACd,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2012 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as Host from '../../core/host/host.js';\\nimport type * as Workspace from '../../models/workspace/workspace.js';\\nimport {PanelUtils} from '../../panels/utils/utils.js';\\nimport * as IconButton from '../../ui/components/icon_button/icon_button.js';\\n\\nimport {FilteredUISourceCodeListProvider} from './FilteredUISourceCodeListProvider.js';\\nimport {SourcesView} from './SourcesView.js';\\n\\nexport class OpenFileQuickOpen extends FilteredUISourceCodeListProvider {\\n  constructor() {\\n    super('source-file');\\n  }\\n\\n  override attach(): void {\\n    this.setDefaultScores(SourcesView.defaultUISourceCodeScores());\\n    super.attach();\\n  }\\n\\n  override uiSourceCodeSelected(\\n      uiSourceCode: Workspace.UISourceCode.UISourceCode|null, lineNumber?: number, columnNumber?: number): void {\\n    Host.userMetrics.actionTaken(Host.UserMetrics.Action.SelectFileFromFilePicker);\\n\\n    if (!uiSourceCode) {\\n      return;\\n    }\\n    if (typeof lineNumber === 'number') {\\n      void Common.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));\\n    } else {\\n      void Common.Revealer.reveal(uiSourceCode);\\n    }\\n  }\\n\\n  override filterProject(project: Workspace.Workspace.Project): boolean {\\n    return !project.isServiceProject();\\n  }\\n\\n  override renderItem(itemIndex: number, query: string, titleElement: Element, subtitleElement: Element): void {\\n    super.renderItem(itemIndex, query, titleElement, subtitleElement);\\n\\n    const iconElement = new IconButton.Icon.Icon();\\n    const iconData = PanelUtils.iconDataForResourceType(this.itemContentTypeAt(itemIndex));\\n    iconElement.data = {\\n      ...iconData,\\n      width: '20px',\\n      height: '20px',\\n    };\\n    titleElement.parentElement?.parentElement?.insertBefore(iconElement, titleElement.parentElement);\\n  }\\n\\n  override renderAsTwoRows(): boolean {\\n    return true;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);