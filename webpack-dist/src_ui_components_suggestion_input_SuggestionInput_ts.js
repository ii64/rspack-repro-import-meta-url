"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_suggestion_input_SuggestionInput_ts"],{

/***/ "./src/ui/components/suggestion_input/SuggestionInput.ts":
/*!***************************************************************!*\
  !*** ./src/ui/components/suggestion_input/SuggestionInput.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionInput: () => (/* binding */ SuggestionInput)
/* harmony export */ });
/* harmony import */ var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./src/ui/components/code_highlighter/code_highlighter.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/components/code_highlighter/codeHighlighter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './suggestionInput.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
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
let EditableContent = (() => {
    var _EditableContent_instances, _EditableContent_mimeType, _EditableContent_highlight;
    let _classDecorators = [customElement('devtools-editable-content')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = HTMLElement;
    var EditableContent = _classThis = class extends _classSuper {
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
            __classPrivateFieldGet(this, _EditableContent_instances, "m", _EditableContent_highlight).call(this);
        }
        get value() {
            return this.innerText;
        }
        set mimeType(type) {
            __classPrivateFieldSet(this, _EditableContent_mimeType, type, "f");
            __classPrivateFieldGet(this, _EditableContent_instances, "m", _EditableContent_highlight).call(this);
        }
        get mimeType() {
            return __classPrivateFieldGet(this, _EditableContent_mimeType, "f");
        }
        constructor() {
            super();
            _EditableContent_instances.add(this);
            _EditableContent_mimeType.set(this, '');
            this.contentEditable = 'true';
            this.tabIndex = 0;
            this.addEventListener('focus', () => {
                this.innerHTML = this.innerText;
            });
            this.addEventListener('blur', __classPrivateFieldGet(this, _EditableContent_instances, "m", _EditableContent_highlight).bind(this));
        }
        attributeChangedCallback(name, _, value) {
            switch (name) {
                case 'disabled':
                    this.disabled = value !== null;
                    break;
            }
        }
    };
    _EditableContent_mimeType = new WeakMap();
    _EditableContent_instances = new WeakSet();
    _EditableContent_highlight = function _EditableContent_highlight() {
        if (__classPrivateFieldGet(this, _EditableContent_mimeType, "f")) {
            void _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__.CodeHighlighter.highlightNode(this, __classPrivateFieldGet(this, _EditableContent_mimeType, "f"));
        }
    };
    __setFunctionName(_classThis, "EditableContent");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EditableContent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EditableContent = _classThis;
})();
/**
 * Contains a suggestion emitted due to action by the user.
 */
class SuggestEvent extends Event {
    constructor(suggestion) {
        super(SuggestEvent.eventName);
        this.suggestion = suggestion;
    }
}
Object.defineProperty(SuggestEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'suggest'
});
/**
 * Parents should listen for this event and register the listeners provided by
 * this event.
 */
class SuggestionInitEvent extends Event {
    constructor(listeners) {
        super(SuggestionInitEvent.eventName);
        Object.defineProperty(this, "listeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.listeners = listeners;
    }
}
Object.defineProperty(SuggestionInitEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'suggestioninit'
});
const defaultSuggestionFilter = (option, query) => option.toLowerCase().startsWith(query.toLowerCase());
/**
 * @fires SuggestionInitEvent#suggestioninit
 * @fires SuggestEvent#suggest
 */
let SuggestionBox = (() => {
    var _SuggestionBox_instances, _SuggestionBox_suggestions, _SuggestionBox_handleKeyDownEvent, _SuggestionBox_moveCursor, _SuggestionBox_dispatchSuggestEvent;
    let _classDecorators = [customElement('devtools-suggestion-box')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var SuggestionBox = _classThis = class extends _classSuper {
        constructor() {
            super();
            _SuggestionBox_instances.add(this);
            _SuggestionBox_suggestions.set(this, []);
            _SuggestionBox_handleKeyDownEvent.set(this, (event) => {
                assert(event instanceof KeyboardEvent, 'Bound to the wrong event.');
                if (__classPrivateFieldGet(this, _SuggestionBox_suggestions, "f").length > 0) {
                    switch (event.key) {
                        case 'ArrowDown':
                            event.stopPropagation();
                            event.preventDefault();
                            __classPrivateFieldGet(this, _SuggestionBox_instances, "m", _SuggestionBox_moveCursor).call(this, 1);
                            break;
                        case 'ArrowUp':
                            event.stopPropagation();
                            event.preventDefault();
                            __classPrivateFieldGet(this, _SuggestionBox_instances, "m", _SuggestionBox_moveCursor).call(this, -1);
                            break;
                    }
                }
                switch (event.key) {
                    case 'Enter':
                        if (__classPrivateFieldGet(this, _SuggestionBox_suggestions, "f")[this.cursor]) {
                            __classPrivateFieldGet(this, _SuggestionBox_instances, "m", _SuggestionBox_dispatchSuggestEvent).call(this, __classPrivateFieldGet(this, _SuggestionBox_suggestions, "f")[this.cursor]);
                        }
                        event.preventDefault();
                        break;
                }
            });
            this.options = [];
            this.expression = '';
            this.cursor = 0;
        }
        connectedCallback() {
            super.connectedCallback();
            this.dispatchEvent(new SuggestionInitEvent([['keydown', __classPrivateFieldGet(this, _SuggestionBox_handleKeyDownEvent, "f")]]));
        }
        willUpdate(changedProperties) {
            if (changedProperties.has('options')) {
                this.options = Object.freeze([...this.options].sort());
            }
            if (changedProperties.has('expression') || changedProperties.has('options')) {
                this.cursor = 0;
                __classPrivateFieldSet(this, _SuggestionBox_suggestions, this.options.filter(option => (this.suggestionFilter || defaultSuggestionFilter)(option, this.expression)), "f");
            }
        }
        render() {
            if (__classPrivateFieldGet(this, _SuggestionBox_suggestions, "f").length === 0) {
                return;
            }
            return html `<ul class="suggestions">
      ${__classPrivateFieldGet(this, _SuggestionBox_suggestions, "f").map((suggestion, index) => {
                return html `<li
          class=${classMap({
                    selected: index === this.cursor,
                })}
          @mousedown=${__classPrivateFieldGet(this, _SuggestionBox_instances, "m", _SuggestionBox_dispatchSuggestEvent).bind(this, suggestion)}
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
    _SuggestionBox_suggestions = new WeakMap();
    _SuggestionBox_handleKeyDownEvent = new WeakMap();
    _SuggestionBox_instances = new WeakSet();
    _SuggestionBox_moveCursor = function _SuggestionBox_moveCursor(delta) {
        this.cursor = mod(this.cursor + delta, __classPrivateFieldGet(this, _SuggestionBox_suggestions, "f").length);
    };
    _SuggestionBox_dispatchSuggestEvent = function _SuggestionBox_dispatchSuggestEvent(suggestion) {
        this.dispatchEvent(new SuggestEvent(suggestion));
    };
    __setFunctionName(_classThis, "SuggestionBox");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SuggestionBox = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './suggestionInput.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SuggestionBox = _classThis;
})();
let SuggestionInput = (() => {
    var _SuggestionInput_instances, _SuggestionInput_cachedEditableContent, _SuggestionInput_editableContent_get, _SuggestionInput_handleBlurEvent, _SuggestionInput_handleFocusEvent, _SuggestionInput_handleKeyDownEvent, _SuggestionInput_handleInputEvent, _SuggestionInput_handleSuggestionInitEvent, _SuggestionInput_handleSuggestEvent;
    let _classDecorators = [customElement('devtools-suggestion-input')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var SuggestionInput = _classThis = class extends _classSuper {
        constructor() {
            super();
            _SuggestionInput_instances.add(this);
            _SuggestionInput_cachedEditableContent.set(this, void 0);
            _SuggestionInput_handleBlurEvent.set(this, () => {
                window.getSelection()?.removeAllRanges();
                this.value = __classPrivateFieldGet(this, _SuggestionInput_instances, "a", _SuggestionInput_editableContent_get).value;
                this.expression = __classPrivateFieldGet(this, _SuggestionInput_instances, "a", _SuggestionInput_editableContent_get).value;
            });
            _SuggestionInput_handleFocusEvent.set(this, (event) => {
                assert(event.target instanceof Node);
                const range = document.createRange();
                range.selectNodeContents(event.target);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            });
            _SuggestionInput_handleKeyDownEvent.set(this, (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }
            });
            _SuggestionInput_handleInputEvent.set(this, (event) => {
                this.expression = event.target.value;
            });
            _SuggestionInput_handleSuggestionInitEvent.set(this, (event) => {
                for (const [name, listener] of event.listeners) {
                    this.addEventListener(name, listener);
                }
            });
            _SuggestionInput_handleSuggestEvent.set(this, (event) => {
                __classPrivateFieldGet(this, _SuggestionInput_instances, "a", _SuggestionInput_editableContent_get).value = event.suggestion;
                // If actions result in a `focus` after this blur, then the blur won't
                // happen. `setTimeout` guarantees `blur` will always come after `focus`.
                setTimeout(this.blur.bind(this), 0);
            });
            this.options = [];
            this.expression = '';
            this.placeholder = '';
            this.value = '';
            this.disabled = false;
            this.strikethrough = true;
            this.mimeType = '';
            this.autocomplete = true;
            this.addEventListener('blur', __classPrivateFieldGet(this, _SuggestionInput_handleBlurEvent, "f"));
            let jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value().track({ keydown: 'ArrowUp|ArrowDown|Enter', change: true, click: true });
            if (this.jslogContext) {
                jslog = jslog.context(this.jslogContext);
            }
            this.setAttribute('jslog', jslog.toString());
        }
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
        @focus=${__classPrivateFieldGet(this, _SuggestionInput_handleFocusEvent, "f")}
        @input=${__classPrivateFieldGet(this, _SuggestionInput_handleInputEvent, "f")}
        @keydown=${__classPrivateFieldGet(this, _SuggestionInput_handleKeyDownEvent, "f")}
        autocapitalize="off"
        inputmode="text"
        placeholder=${this.placeholder}
        spellcheck="false"
      ></devtools-editable-content>
      <devtools-suggestion-box
        @suggestioninit=${__classPrivateFieldGet(this, _SuggestionInput_handleSuggestionInitEvent, "f")}
        @suggest=${__classPrivateFieldGet(this, _SuggestionInput_handleSuggestEvent, "f")}
        .options=${this.options}
        .suggestionFilter=${this.suggestionFilter}
        .expression=${this.autocomplete ? this.expression : ''}
      ></devtools-suggestion-box>`;
            // clang-format on
        }
    };
    _SuggestionInput_cachedEditableContent = new WeakMap();
    _SuggestionInput_handleBlurEvent = new WeakMap();
    _SuggestionInput_handleFocusEvent = new WeakMap();
    _SuggestionInput_handleKeyDownEvent = new WeakMap();
    _SuggestionInput_handleInputEvent = new WeakMap();
    _SuggestionInput_handleSuggestionInitEvent = new WeakMap();
    _SuggestionInput_handleSuggestEvent = new WeakMap();
    _SuggestionInput_instances = new WeakSet();
    _SuggestionInput_editableContent_get = function _SuggestionInput_editableContent_get() {
        if (__classPrivateFieldGet(this, _SuggestionInput_cachedEditableContent, "f")) {
            return __classPrivateFieldGet(this, _SuggestionInput_cachedEditableContent, "f");
        }
        const node = this.renderRoot.querySelector('devtools-editable-content');
        if (!node) {
            throw new Error('Attempted to query node before rendering.');
        }
        __classPrivateFieldSet(this, _SuggestionInput_cachedEditableContent, node, "f");
        return node;
    };
    __setFunctionName(_classThis, "SuggestionInput");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SuggestionInput = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "shadowRootOptions", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {
            ...LitElement.shadowRootOptions,
            delegatesFocus: true,
        }
    });
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './suggestionInput.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/components/code_highlighter/codeHighlighter.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SuggestionInput = _classThis;
})();



/***/ })

}]);