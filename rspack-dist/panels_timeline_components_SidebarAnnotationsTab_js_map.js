(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_SidebarAnnotationsTab_js_map"], {
"./panels/timeline/components/SidebarAnnotationsTab.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"SidebarAnnotationsTab.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/timeline/components/SidebarAnnotationsTab.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,WAAW,MAAM,gCAAgC,CAAC;AAC9D,OAAO,KAAK,gBAAgB,MAAM,2CAA2C,CAAC;AAC9E,OAAO,KAAK,UAAU,MAAM,mDAAmD,CAAC;AAChF,OAAO,KAAK,OAAO,MAAM,kCAAkC,CAAC;AAE5D,OAAO,EAAC,gBAAgB,EAAC,MAAM,cAAc,CAAC;AAC9C,OAAO,2BAA2B,MAAM,gCAAgC,CAAC;AAEzE,MAAM,OAAO,qBAAsB,SAAQ,WAAW;IACpD,MAAM,CAAU,UAAU,GAAG,OAAO,CAAC,OAAO,CAAA,0CAA0C,CAAC;IAC9E,OAAO,GAAG,IAAI,CAAC,YAAY,CAAC,EAAC,IAAI,EAAE,MAAM,EAAC,CAAC,CAAC;IAC5C,YAAY,GAAG,IAAI,CAAC,OAAO,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;IAChD,YAAY,GAAwC,EAAE,CAAC;IAEvD,IAAI,WAAW,CAAC,WAAgD;QAC9D,IAAI,CAAC,YAAY,GAAG,WAAW,CAAC;QAChC,KAAK,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,IAAI,EAAE,IAAI,CAAC,YAAY,CAAC,CAAC;IAChF,CAAC;IAED,iBAAiB;QACf,IAAI,CAAC,OAAO,CAAC,kBAAkB,GAAG,CAAC,2BAA2B,CAAC,CAAC;QAChE,KAAK,gBAAgB,CAAC,eAAe,CAAC,cAAc,CAAC,IAAI,EAAE,IAAI,CAAC,YAAY,CAAC,CAAC;IAChF,CAAC;IAED,iBAAiB,CAAC,UAA6C;QAC7D,MAAM,SAAS,GAAG,WAAW,CAAC,KAAK,CAAC,WAAW,CAAC,aAAa,CAAC,UAAU,CAAC,KAAK,CAAC,CAAC,CAAC;YAC7E,UAAU,CAAC,KAAK,CAAC,SAAS,CAAC,YAAY,CAAC,CAAC;YACzC,UAAU,CAAC,KAAK,CAAC,IAAI,CAAC;QAE1B,OAAO,OAAO,CAAC,IAAI,CAAA;;;;cAIT,SAAS;;;YAGX,UAAU,CAAC,KAAK;;;WAGjB,UAAU,CAAC,IAAI,CAAC,IAAI,CAAC,UAAU,2BAA2B;YAC/D,QAAQ,EAAE,KAAK;YACf,KAAK,EAAE,qBAAqB;YAC5B,KAAK,EAAE,MAAM;YACb,MAAM,EAAE,MAAM;SACa,WAAW,GAAG,EAAE;YAC3C,IAAI,CAAC,aAAa,CAAC,IAAI,gBAAgB,CAAC,UAAU,CAAC,CAAC,CAAC;QACvD,CAAC;;KAEA,CAAC;IACJ,CAAC;IAED,OAAO;QACL,mBAAmB;QACf,OAAO,CAAC,MAAM,CACV,OAAO,CAAC,IAAI,CAAA;;kBAEN,IAAI,CAAC,YAAY,CAAC,GAAG,CAAC,UAAU,CAAC,EAAE,CAAC,IAAI,CAAC,iBAAiB,CAAC,UAAU,CAAC,CAAC;sBACnE,EACV,IAAI,CAAC,OAAO,EAAE,EAAC,IAAI,EAAE,IAAI,EAAC,CAAC,CAAC;QACpC,kBAAkB;IACpB,CAAC;;AAGH,cAAc,CAAC,MAAM,CAAC,0CAA0C,EAAE,qBAAqB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as TraceEngine from '../../../models/trace/trace.js';\\nimport * as ComponentHelpers from '../../../ui/components/helpers/helpers.js';\\nimport * as IconButton from '../../../ui/components/icon_button/icon_button.js';\\nimport * as LitHtml from '../../../ui/lit-html/lit-html.js';\\n\\nimport {RemoveAnnotation} from './Sidebar.js';\\nimport sidebarAnnotationsTabStyles from './sidebarAnnotationsTab.css.js';\\n\\nexport class SidebarAnnotationsTab extends HTMLElement {\\n  static readonly litTagName = LitHtml.literal`devtools-performance-sidebar-annotations`;\\n  readonly #shadow = this.attachShadow({mode: 'open'});\\n  readonly #boundRender = this.#render.bind(this);\\n  #annotations: TraceEngine.Types.File.Annotation[] = [];\\n\\n  set annotations(annotations: TraceEngine.Types.File.Annotation[]) {\\n    this.#annotations = annotations;\\n    void ComponentHelpers.ScheduledRender.scheduleRender(this, this.#boundRender);\\n  }\\n\\n  connectedCallback(): void {\\n    this.#shadow.adoptedStyleSheets = [sidebarAnnotationsTabStyles];\\n    void ComponentHelpers.ScheduledRender.scheduleRender(this, this.#boundRender);\\n  }\\n\\n  #renderAnnotation(annotation: TraceEngine.Types.File.Annotation): LitHtml.LitTemplate {\\n    const entryName = TraceEngine.Types.TraceEvents.isProfileCall(annotation.entry) ?\\n        annotation.entry.callFrame.functionName :\\n        annotation.entry.name;\\n\\n    return LitHtml.html`\\n      <div class=\\\"annotation-container\\\">\\n        <div class=\\\"annotation\\\">\\n          <span class=\\\"entry-name\\\">\\n            ${entryName}\\n          </span>\\n          <span class=\\\"label\\\">\\n          ${annotation.label}\\n          </span>\\n        </div>\\n        <${IconButton.Icon.Icon.litTagName} class=\\\"bin-icon\\\" .data=${{\\n      iconName: 'bin',\\n      color: 'var(--icon-default)',\\n      width: '20px',\\n      height: '20px',\\n    } as IconButton.Icon.IconData} @click=${() => {\\n      this.dispatchEvent(new RemoveAnnotation(annotation));\\n    }}>\\n      </div>\\n    `;\\n  }\\n\\n  #render(): void {\\n    // clang-format off\\n        LitHtml.render(\\n            LitHtml.html`\\n              <span class=\\\"annotations\\\">\\n                ${this.#annotations.map(annotation => this.#renderAnnotation(annotation))}\\n              </span>`,\\n            this.#shadow, {host: this});\\n    // clang-format on\\n  }\\n}\\n\\ncustomElements.define('devtools-performance-sidebar-annotations', SidebarAnnotationsTab);\\n\\ndeclare global {\\n  interface HTMLElementTagNameMap {\\n    'devtools-performance-sidebar-annotations': SidebarAnnotationsTab;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);