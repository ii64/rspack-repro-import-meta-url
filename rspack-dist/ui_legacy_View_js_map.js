(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_View_js_map"], {
"./ui/legacy/View.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"View.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/View.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,iCAAiC,CAAC;AAI5D,OAAO,EAAC,WAAW,EAAC,MAAM,kBAAkB,CAAC;AAC7C,OAAO,EAAC,IAAI,EAAc,MAAM,aAAa,CAAC;AAsB9C,MAAM,OAAO,UAAW,SAAQ,IAAI;IACzB,MAAM,CAAoC;IAC1C,OAAO,CAAoB;IAEpC,YAAY,KAAwC,EAAE,cAAwB,EAAE,MAA0B;QACxG,KAAK,CAAC,cAAc,CAAC,CAAC;QACtB,IAAI,CAAC,MAAM,GAAG,KAAK,CAAC;QACpB,IAAI,MAAM,EAAE,CAAC;YACX,IAAI,CAAC,QAAQ,CAAC,eAAe,CAAC,mBAAmB,CAAC,MAAM,CAAC,EAAE,CAAC;gBAC1D,MAAM,IAAI,KAAK,CAAC,oBAAoB,MAAM,GAAG,CAAC,CAAC;YACjD,CAAC;QACH,CAAC;QACD,IAAI,CAAC,OAAO,GAAG,MAAM,IAAI,QAAQ,CAAC,eAAe,CAAC,WAAW,CAAC,KAAK,CAAC,CAAC;IACvE,CAAC;IAED,MAAM;QACJ,OAAO,IAAI,CAAC,OAAO,CAAC;IACtB,CAAC;IAED,KAAK;QACH,OAAO,IAAI,CAAC,MAAM,CAAC;IACrB,CAAC;IAED,WAAW;QACT,OAAO,KAAK,CAAC;IACf,CAAC;IAED,WAAW;QACT,OAAO,KAAK,CAAC;IACf,CAAC;IAED,YAAY;QACV,OAAO,OAAO,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC;IAC7B,CAAC;IAED,MAAM;QACJ,OAAO,OAAO,CAAC,OAAO,CAAC,IAAI,CAAC,CAAC;IAC/B,CAAC;IAED,UAAU;QACR,OAAO,WAAW,CAAC,QAAQ,EAAE,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC;IACjD,CAAC;IAED,WAAW;IACX,CAAC;IAED,gBAAgB;QACd,OAAO,KAAK,CAAC;IACf,CAAC;IAED,QAAQ;QACN,OAAO,SAAS,CAAC;IACnB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2016 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Platform from '../../core/platform/platform.js';\\n\\nimport {type TabbedPane} from './TabbedPane.js';\\nimport {type ToolbarItem, type ToolbarMenuButton} from './Toolbar.js';\\nimport {ViewManager} from './ViewManager.js';\\nimport {VBox, type Widget} from './Widget.js';\\n\\nexport interface View {\\n  viewId(): string;\\n\\n  title(): Platform.UIString.LocalizedString;\\n\\n  isCloseable(): boolean;\\n\\n  isPreviewFeature(): boolean;\\n\\n  iconName(): string|undefined;\\n\\n  isTransient(): boolean;\\n\\n  toolbarItems(): Promise<ToolbarItem[]>;\\n\\n  widget(): Promise<Widget>;\\n\\n  disposeView(): void|Promise<void>;\\n}\\n\\nexport class SimpleView extends VBox implements View {\\n  readonly #title: Platform.UIString.LocalizedString;\\n  readonly #viewId: Lowercase<string>;\\n\\n  constructor(title: Platform.UIString.LocalizedString, isWebComponent?: boolean, viewId?: Lowercase<string>) {\\n    super(isWebComponent);\\n    this.#title = title;\\n    if (viewId) {\\n      if (!Platform.StringUtilities.isExtendedKebabCase(viewId)) {\\n        throw new Error(`Invalid view ID '${viewId}'`);\\n      }\\n    }\\n    this.#viewId = viewId ?? Platform.StringUtilities.toKebabCase(title);\\n  }\\n\\n  viewId(): string {\\n    return this.#viewId;\\n  }\\n\\n  title(): Platform.UIString.LocalizedString {\\n    return this.#title;\\n  }\\n\\n  isCloseable(): boolean {\\n    return false;\\n  }\\n\\n  isTransient(): boolean {\\n    return false;\\n  }\\n\\n  toolbarItems(): Promise<ToolbarItem[]> {\\n    return Promise.resolve([]);\\n  }\\n\\n  widget(): Promise<Widget> {\\n    return Promise.resolve(this);\\n  }\\n\\n  revealView(): Promise<void> {\\n    return ViewManager.instance().revealView(this);\\n  }\\n\\n  disposeView(): void {\\n  }\\n\\n  isPreviewFeature(): boolean {\\n    return false;\\n  }\\n\\n  iconName(): string|undefined {\\n    return undefined;\\n  }\\n}\\n\\nexport interface ViewLocation {\\n  appendApplicableItems(locationName: string): void;\\n  appendView(view: View, insertBefore?: View|null): void;\\n  showView(view: View, insertBefore?: View|null, userGesture?: boolean): Promise<void>;\\n  removeView(view: View): void;\\n  widget(): Widget;\\n}\\n\\nexport interface TabbedViewLocation extends ViewLocation {\\n  tabbedPane(): TabbedPane;\\n  enableMoreTabsButton(): ToolbarMenuButton;\\n}\\n\\nexport interface ViewLocationResolver {\\n  resolveLocation(location: string): ViewLocation|null;\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);