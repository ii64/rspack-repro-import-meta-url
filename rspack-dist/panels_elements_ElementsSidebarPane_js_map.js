(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ElementsSidebarPane_js_map"], {
"./panels/elements/ElementsSidebarPane.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ElementsSidebarPane.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/elements/ElementsSidebarPane.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AAEtD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,OAAO,EAAC,kBAAkB,EAAyC,MAAM,yBAAyB,CAAC;AAEnG,MAAM,OAAO,mBAAoB,SAAQ,EAAE,CAAC,MAAM,CAAC,IAAI;IAC3C,0BAA0B,CAAqB;IACxC,eAAe,CAA6B;IACrD,iBAAiB,CAAU;IACnC,YAAY,cAAwB;QAClC,KAAK,CAAC,IAAI,EAAE,cAAc,CAAC,CAAC;QAC5B,IAAI,CAAC,OAAO,CAAC,SAAS,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;QACxC,IAAI,CAAC,0BAA0B,GAAG,IAAI,kBAAkB,EAAE,CAAC;QAC3D,IAAI,CAAC,0BAA0B,CAAC,gBAAgB,2DAA8B,IAAI,CAAC,iBAAiB,EAAE,IAAI,CAAC,CAAC;QAE5G,IAAI,CAAC,eAAe,GAAG,IAAI,MAAM,CAAC,SAAS,CAAC,SAAS,CAAC,GAAG,CAAC,CAAC;QAC3D,IAAI,CAAC,iBAAiB,GAAG,KAAK,CAAC;IACjC,CAAC;IAED,IAAI;QACF,OAAO,IAAI,CAAC,0BAA0B,CAAC,IAAI,EAAE,CAAC;IAChD,CAAC;IAED,QAAQ;QACN,OAAO,IAAI,CAAC,0BAA0B,CAAC,QAAQ,EAAE,CAAC;IACpD,CAAC;IAED,kBAAkB;QAChB,OAAO,IAAI,CAAC,0BAA0B,CAAC;IACzC,CAAC;IAED,KAAK,CAAC,QAAQ;QACZ,OAAO;IACT,CAAC;IAED,MAAM;QACJ,IAAI,CAAC,iBAAiB,GAAG,CAAC,IAAI,CAAC,SAAS,EAAE,CAAC;QAC3C,IAAI,IAAI,CAAC,iBAAiB,EAAE,CAAC;YAC3B,OAAO;QACT,CAAC;QACD,KAAK,IAAI,CAAC,eAAe,CAAC,QAAQ,CAAC,WAAW,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC;QAE3D,SAAS,WAAW;YAClB,OAAO,IAAI,CAAC,SAAS,EAAE,CAAC,CAAC,CAAC,IAAI,CAAC,QAAQ,EAAE,CAAC,CAAC,CAAC,OAAO,CAAC,OAAO,EAAE,CAAC;QAChE,CAAC;IACH,CAAC;IAEQ,QAAQ;QACf,KAAK,CAAC,QAAQ,EAAE,CAAC;QACjB,IAAI,IAAI,CAAC,iBAAiB,EAAE,CAAC;YAC3B,IAAI,CAAC,MAAM,EAAE,CAAC;QAChB,CAAC;IACH,CAAC;IAED,iBAAiB,CAAC,MAA2E;IAC7F,CAAC;CACF\",\"sourcesContent\":[\"// Copyright (c) 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport {ComputedStyleModel, Events, type ComputedStyleChangedEvent} from './ComputedStyleModel.js';\\n\\nexport class ElementsSidebarPane extends UI.Widget.VBox {\\n  protected computedStyleModelInternal: ComputedStyleModel;\\n  private readonly updateThrottler: Common.Throttler.Throttler;\\n  private updateWhenVisible: boolean;\\n  constructor(delegatesFocus?: boolean) {\\n    super(true, delegatesFocus);\\n    this.element.classList.add('flex-none');\\n    this.computedStyleModelInternal = new ComputedStyleModel();\\n    this.computedStyleModelInternal.addEventListener(Events.ComputedStyleChanged, this.onCSSModelChanged, this);\\n\\n    this.updateThrottler = new Common.Throttler.Throttler(100);\\n    this.updateWhenVisible = false;\\n  }\\n\\n  node(): SDK.DOMModel.DOMNode|null {\\n    return this.computedStyleModelInternal.node();\\n  }\\n\\n  cssModel(): SDK.CSSModel.CSSModel|null {\\n    return this.computedStyleModelInternal.cssModel();\\n  }\\n\\n  computedStyleModel(): ComputedStyleModel {\\n    return this.computedStyleModelInternal;\\n  }\\n\\n  async doUpdate(): Promise<void> {\\n    return;\\n  }\\n\\n  update(): void {\\n    this.updateWhenVisible = !this.isShowing();\\n    if (this.updateWhenVisible) {\\n      return;\\n    }\\n    void this.updateThrottler.schedule(innerUpdate.bind(this));\\n\\n    function innerUpdate(this: ElementsSidebarPane): Promise<void> {\\n      return this.isShowing() ? this.doUpdate() : Promise.resolve();\\n    }\\n  }\\n\\n  override wasShown(): void {\\n    super.wasShown();\\n    if (this.updateWhenVisible) {\\n      this.update();\\n    }\\n  }\\n\\n  onCSSModelChanged(_event: Common.EventTarget.EventTargetEvent<ComputedStyleChangedEvent|null>): void {\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);