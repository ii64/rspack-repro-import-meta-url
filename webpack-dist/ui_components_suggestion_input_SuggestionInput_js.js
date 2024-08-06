"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_suggestion_input_SuggestionInput_js"],{

/***/ "./ui/components/suggestion_input/SuggestionInput.js":
/*!***********************************************************!*\
  !*** ./ui/components/suggestion_input/SuggestionInput.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionInput: () => (/* binding */ SuggestionInput)
/* harmony export */ });
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */ var _ui_components_code_highlighter_codeHighlighter_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/codeHighlighter.css.js */ "./ui/components/code_highlighter/codeHighlighter.css.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suggestionInput.css.js */ "./ui/components/suggestion_input/suggestionInput.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// eslint-disable-next-line rulesdir/es_modules_import




const mod = (a, n) => {
    return ((a % n) + n) % n;
};
function assert(predicate, message = 'Assertion failed!') {
    if (!predicate) {
        throw new Error(message);
    }
}
const { html, Decorators, Directives, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
const { customElement, property, state } = Decorators;
const { classMap } = Directives;
const jsonPropertyOptions = {
    hasChanged(value, oldValue) {
        return JSON.stringify(value) !== JSON.stringify(oldValue);
    },
};
let EditableContent = class EditableContent extends HTMLElement {
    static get observedAttributes() {
        return ['disabled', 'placeholder'];
    }
    set disabled(disabled) {
        this.contentEditable = String(!disabled);
    }
    get disabled() {
        return this.contentEditable !== 'true';
    }
    set value(value) {
        this.innerText = value;
        this.#highlight();
    }
    get value() {
        return this.innerText;
    }
    set mimeType(type) {
        this.#mimeType = type;
        this.#highlight();
    }
    get mimeType() {
        return this.#mimeType;
    }
    #mimeType = '';
    constructor() {
        super();
        this.contentEditable = 'true';
        this.tabIndex = 0;
        this.addEventListener('focus', () => {
            this.innerHTML = this.innerText;
        });
        this.addEventListener('blur', this.#highlight.bind(this));
    }
    #highlight() {
        if (this.#mimeType) {
            void _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__.CodeHighlighter.highlightNode(this, this.#mimeType);
        }
    }
    attributeChangedCallback(name, _, value) {
        switch (name) {
            case 'disabled':
                this.disabled = value !== null;
                break;
        }
    }
};
EditableContent = __decorate([
    customElement('devtools-editable-content')
], EditableContent);
/**
 * Contains a suggestion emitted due to action by the user.
 */
class SuggestEvent extends Event {
    static eventName = 'suggest';
    constructor(suggestion) {
        super(SuggestEvent.eventName);
        this.suggestion = suggestion;
    }
}
/**
 * Parents should listen for this event and register the listeners provided by
 * this event.
 */
class SuggestionInitEvent extends Event {
    static eventName = 'suggestioninit';
    listeners;
    constructor(listeners) {
        super(SuggestionInitEvent.eventName);
        this.listeners = listeners;
    }
}
const defaultSuggestionFilter = (option, query) => option.toLowerCase().startsWith(query.toLowerCase());
/**
 * @fires SuggestionInitEvent#suggestioninit
 * @fires SuggestEvent#suggest
 */
let SuggestionBox = class SuggestionBox extends LitElement {
    static styles = [_suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
    #suggestions = [];
    constructor() {
        super();
        this.options = [];
        this.expression = '';
        this.cursor = 0;
    }
    #handleKeyDownEvent = (event) => {
        assert(event instanceof KeyboardEvent, 'Bound to the wrong event.');
        if (this.#suggestions.length > 0) {
            switch (event.key) {
                case 'ArrowDown':
                    event.stopPropagation();
                    event.preventDefault();
                    this.#moveCursor(1);
                    break;
                case 'ArrowUp':
                    event.stopPropagation();
                    event.preventDefault();
                    this.#moveCursor(-1);
                    break;
            }
        }
        switch (event.key) {
            case 'Enter':
                if (this.#suggestions[this.cursor]) {
                    this.#dispatchSuggestEvent(this.#suggestions[this.cursor]);
                }
                event.preventDefault();
                break;
        }
    };
    #moveCursor(delta) {
        this.cursor = mod(this.cursor + delta, this.#suggestions.length);
    }
    #dispatchSuggestEvent(suggestion) {
        this.dispatchEvent(new SuggestEvent(suggestion));
    }
    connectedCallback() {
        super.connectedCallback();
        this.dispatchEvent(new SuggestionInitEvent([['keydown', this.#handleKeyDownEvent]]));
    }
    willUpdate(changedProperties) {
        if (changedProperties.has('options')) {
            this.options = Object.freeze([...this.options].sort());
        }
        if (changedProperties.has('expression') || changedProperties.has('options')) {
            this.cursor = 0;
            this.#suggestions = this.options.filter(option => (this.suggestionFilter || defaultSuggestionFilter)(option, this.expression));
        }
    }
    render() {
        if (this.#suggestions.length === 0) {
            return;
        }
        return html `<ul class="suggestions">
      ${this.#suggestions.map((suggestion, index) => {
            return html `<li
          class=${classMap({
                selected: index === this.cursor,
            })}
          @mousedown=${this.#dispatchSuggestEvent.bind(this, suggestion)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item('suggestion').track({
                click: true,
            })}
        >
          ${suggestion}
        </li>`;
        })}
    </ul>`;
    }
};
__decorate([
    property(jsonPropertyOptions)
], SuggestionBox.prototype, "options", void 0);
__decorate([
    property()
], SuggestionBox.prototype, "expression", void 0);
__decorate([
    property()
], SuggestionBox.prototype, "suggestionFilter", void 0);
__decorate([
    state()
], SuggestionBox.prototype, "cursor", void 0);
SuggestionBox = __decorate([
    customElement('devtools-suggestion-box')
], SuggestionBox);
let SuggestionInput = class SuggestionInput extends LitElement {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        delegatesFocus: true,
    };
    static styles = [_suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__["default"], _ui_components_code_highlighter_codeHighlighter_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
    constructor() {
        super();
        this.options = [];
        this.expression = '';
        this.placeholder = '';
        this.value = '';
        this.disabled = false;
        this.strikethrough = true;
        this.mimeType = '';
        this.autocomplete = true;
        this.addEventListener('blur', this.#handleBlurEvent);
        let jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value().track({ keydown: 'ArrowUp|ArrowDown|Enter', change: true, click: true });
        if (this.jslogContext) {
            jslog = jslog.context(this.jslogContext);
        }
        this.setAttribute('jslog', jslog.toString());
    }
    #cachedEditableContent;
    get #editableContent() {
        if (this.#cachedEditableContent) {
            return this.#cachedEditableContent;
        }
        const node = this.renderRoot.querySelector('devtools-editable-content');
        if (!node) {
            throw new Error('Attempted to query node before rendering.');
        }
        this.#cachedEditableContent = node;
        return node;
    }
    #handleBlurEvent = () => {
        window.getSelection()?.removeAllRanges();
        this.value = this.#editableContent.value;
        this.expression = this.#editableContent.value;
    };
    #handleFocusEvent = (event) => {
        assert(event.target instanceof Node);
        const range = document.createRange();
        range.selectNodeContents(event.target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    };
    #handleKeyDownEvent = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };
    #handleInputEvent = (event) => {
        this.expression = event.target.value;
    };
    #handleSuggestionInitEvent = (event) => {
        for (const [name, listener] of event.listeners) {
            this.addEventListener(name, listener);
        }
    };
    #handleSuggestEvent = (event) => {
        this.#editableContent.value = event.suggestion;
        // If actions result in a `focus` after this blur, then the blur won't
        // happen. `setTimeout` guarantees `blur` will always come after `focus`.
        setTimeout(this.blur.bind(this), 0);
    };
    willUpdate(properties) {
        if (properties.has('value')) {
            this.expression = this.value;
        }
    }
    render() {
        // clang-format off
        return html `<devtools-editable-content
        ?disabled=${this.disabled}
        class=${classMap({
            'strikethrough': !this.strikethrough,
        })}
        .enterKeyHint=${'done'}
        .value=${this.value}
        .mimeType=${this.mimeType}
        @focus=${this.#handleFocusEvent}
        @input=${this.#handleInputEvent}
        @keydown=${this.#handleKeyDownEvent}
        autocapitalize="off"
        inputmode="text"
        placeholder=${this.placeholder}
        spellcheck="false"
      ></devtools-editable-content>
      <devtools-suggestion-box
        @suggestioninit=${this.#handleSuggestionInitEvent}
        @suggest=${this.#handleSuggestEvent}
        .options=${this.options}
        .suggestionFilter=${this.suggestionFilter}
        .expression=${this.autocomplete ? this.expression : ''}
      ></devtools-suggestion-box>`;
        // clang-format on
    }
};
__decorate([
    property(jsonPropertyOptions)
], SuggestionInput.prototype, "options", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "autocomplete", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "suggestionFilter", void 0);
__decorate([
    state()
], SuggestionInput.prototype, "expression", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "placeholder", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "value", void 0);
__decorate([
    property({ type: Boolean })
], SuggestionInput.prototype, "disabled", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "strikethrough", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "mimeType", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "jslogContext", void 0);
SuggestionInput = __decorate([
    customElement('devtools-suggestion-input')
], SuggestionInput);

//# sourceMappingURL=SuggestionInput.js.map

/***/ }),

/***/ "./ui/components/suggestion_input/suggestionInput.css.js":
/*!***************************************************************!*\
  !*** ./ui/components/suggestion_input/suggestionInput.css.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  box-sizing: border-box;
  font-size: inherit;
  margin: 0;
  padding: 0;
}

:host {
  position: relative;
}

devtools-editable-content {
  background: transparent;
  border: none;
  color: var(--override-color-recorder-input, var(--sys-color-on-surface));
  cursor: text;
  display: inline-block;
  line-height: 18px;
  min-height: 18px;
  min-width: 0.5em;
  outline: none;
  overflow-wrap: anywhere;
}

devtools-editable-content:hover,
devtools-editable-content:focus {
  box-shadow: 0 0 0 1px var(--sys-color-divider);
  border-radius: 2px;
}

devtools-editable-content[placeholder]:empty::before {
  content: attr(placeholder);
  color: var(--sys-color-on-surface);
  opacity: 50%;
}

devtools-editable-content[placeholder]:empty:focus::before {
  content: "";
}

devtools-suggestion-box {
  position: absolute;
  display: none;
}

devtools-editable-content:focus ~ devtools-suggestion-box {
  display: block;
}

.suggestions {
  background-color: var(--sys-color-cdt-base-container);
  box-shadow: var(--drop-shadow);
  min-height: 1em;
  min-width: 150px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 100;
  max-height: 350px;
}

.suggestions > li {
  padding: 1px;
  border: 1px solid transparent;
  white-space: nowrap;
  font-family: var(--source-code-font-family);
  font-size: var(--source-code-font-size);
  color: var(--sys-color-on-surface);
}

.suggestions > li:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.suggestions > li.selected {
  background-color: var(--sys-color-primary);
  color: var(--sys-color-cdt-base-container);
}

.strikethrough {
  text-decoration: line-through;
}

/*# sourceURL=suggestionInput.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);