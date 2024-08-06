(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_CSSHintDetailsView_js_map"], {
"./panels/elements/components/CSSHintDetailsView.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"CSSHintDetailsView.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/CSSHintDetailsView.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,4BAA4B,CAAC;AACnD,OAAO,KAAK,OAAO,MAAM,kCAAkC,CAAC;AAE5D,OAAO,wBAAwB,MAAM,6BAA6B,CAAC;AAEnE,MAAM,SAAS,GAAG;IAChB;;OAEG;IACD,SAAS,EAAE,YAAY;CAC1B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,kDAAkD,EAAE,SAAS,CAAC,CAAC;AACxG,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAEtE,MAAM,EAAC,MAAM,EAAE,IAAI,EAAE,UAAU,EAAC,GAAG,OAAO,CAAC;AAQ3C,MAAM,OAAO,kBAAmB,SAAQ,WAAW;IAC/C,MAAM,CAAU,UAAU,GAAG,OAAO,CAAC,OAAO,CAAA,gCAAgC,CAAC;IACpE,OAAO,GAAG,IAAI,CAAC,YAAY,CAAC,EAAC,IAAI,EAAE,MAAM,EAAC,CAAC,CAAC;IAC5C,cAAc,CAAO;IAE9B,YAAY,aAAmB;QAC3B,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,cAAc,GAAG,aAAa,CAAC;QACpC,IAAI,CAAC,OAAO,CAAC,kBAAkB,GAAG,CAAC,wBAAwB,CAAC,CAAC;QAC7D,IAAI,CAAC,OAAO,EAAE,CAAC;IACnB,CAAC;IAED,OAAO;QACL,MAAM,IAAI,GAAG,IAAI,CAAC,cAAc,CAAC,gBAAgB,EAAE,CAAC;QACpD,mBAAmB;QACnB,MAAM,CAAC,IAAI,CAAA;;;cAGH,UAAU,CAAC,UAAU,CAAC,IAAI,CAAC,cAAc,CAAC,UAAU,EAAE,CAAC;;YAEzD,IAAI,CAAC,cAAc,CAAC,qBAAqB,EAAE,CAAC,CAAC,CAAC,IAAI,CAAA;;oBAE1C,UAAU,CAAC,UAAU,CAAC,IAAI,CAAC,cAAc,CAAC,qBAAqB,EAAE,CAAC;oBAClE,IAAI,CAAC,CAAC,CAAC,IAAI,CAAA;qDACsB,IAAI;4BAC7B,UAAU,CAAC,SAAS,CAAC,SAAS,CAAC;;mBAExC,CAAA,CAAC,CAAC,EAAE;;WAEZ,CAAC,CAAC,CAAC,EAAE;;OAET,EAAE,IAAI,CAAC,OAAO,EAAE;YACf,IAAI,EAAE,IAAI;SACX,CAAC,CAAC;QACH,kBAAkB;IACpB,CAAC;;AAGL,cAAc,CAAC,MAAM,CAAC,gCAAgC,EAAE,kBAAkB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../../core/i18n/i18n.js';\\nimport * as LitHtml from '../../../ui/lit-html/lit-html.js';\\n\\nimport cssHintDetailsViewStyles from './cssHintDetailsView.css.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Text for button that redirects to CSS property documentation.\\n   */\\n    learnMore: 'Learn More',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/elements/components/CSSHintDetailsView.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nconst {render, html, Directives} = LitHtml;\\n\\ninterface Hint {\\n  getMessage(): string;\\n  getPossibleFixMessage(): string|null;\\n  getLearnMoreLink(): string|undefined;\\n}\\n\\nexport class CSSHintDetailsView extends HTMLElement {\\n    static readonly litTagName = LitHtml.literal`devtools-css-hint-details-view`;\\n    readonly #shadow = this.attachShadow({mode: 'open'});\\n    readonly #authoringHint: Hint;\\n\\n    constructor(authoringHint: Hint) {\\n        super();\\n        this.#authoringHint = authoringHint;\\n        this.#shadow.adoptedStyleSheets = [cssHintDetailsViewStyles];\\n        this.#render();\\n    }\\n\\n    #render(): void {\\n      const link = this.#authoringHint.getLearnMoreLink();\\n      // clang-format off\\n      render(html`\\n        <div class=\\\"hint-popup-wrapper\\\">\\n          <div class=\\\"hint-popup-reason\\\">\\n            ${Directives.unsafeHTML(this.#authoringHint.getMessage())}\\n          </div>\\n          ${this.#authoringHint.getPossibleFixMessage() ? html`\\n              <div class=\\\"hint-popup-possible-fix\\\">\\n                  ${Directives.unsafeHTML(this.#authoringHint.getPossibleFixMessage())}\\n                  ${link ? html`\\n                      <x-link id=\\\"learn-more\\\" href=${link} class=\\\"clickable underlined unbreakable-text\\\"}>\\n                          ${i18nString(UIStrings.learnMore)}\\n                      </x-link>\\n                  `: ''}\\n              </div>\\n          ` : ''}\\n        </div>\\n      `, this.#shadow, {\\n        host: this,\\n      });\\n      // clang-format on\\n    }\\n}\\n\\ncustomElements.define('devtools-css-hint-details-view', CSSHintDetailsView);\\n\\ndeclare global {\\n  interface HTMLElementTagNameMap {\\n    'devtools-css-hint-details-view': CSSHintDetailsView;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);