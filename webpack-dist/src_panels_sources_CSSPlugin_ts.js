"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_CSSPlugin_ts"],{

/***/ "./src/panels/sources/AddSourceMapURLDialog.ts":
/*!*****************************************************!*\
  !*** ./src/panels/sources/AddSourceMapURLDialog.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddDebugInfoURLDialog: () => (/* binding */ AddDebugInfoURLDialog)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './dialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const UIStrings = {
    /**
     *@description Text in Add Source Map URLDialog of the Sources panel
     */
    sourceMapUrl: 'Source map URL: ',
    /**
     *@description Text in Add Debug Info URL Dialog of the Sources panel
     */
    debugInfoUrl: 'DWARF symbols URL: ',
    /**
     *@description Text to add something
     */
    add: 'Add',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/AddSourceMapURLDialog.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class AddDebugInfoURLDialog extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.HBox {
    constructor(label, jslogContext, callback) {
        super(/* isWebComponent */ true);
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dialog", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.createChild('label').textContent = label;
        this.input = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createInput('add-source-map', 'text', 'url');
        this.input.addEventListener('keydown', this.onKeyDown.bind(this), false);
        this.contentElement.appendChild(this.input);
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextButton(i18nString(UIStrings.add), this.apply.bind(this), {
            jslogContext: 'add',
        });
        this.contentElement.appendChild(addButton);
        this.dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Dialog.Dialog(jslogContext);
        this.dialog.setSizeBehavior(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.GlassPane.SizeBehavior.MeasureContent);
        this.dialog.setDefaultFocusedElement(this.input);
        this.callback = callback;
    }
    static createAddSourceMapURLDialog(callback) {
        return new AddDebugInfoURLDialog(i18nString(UIStrings.sourceMapUrl), 'add-source-map-url', callback);
    }
    static createAddDWARFSymbolsURLDialog(callback) {
        return new AddDebugInfoURLDialog(i18nString(UIStrings.debugInfoUrl), 'add-debug-info-url', callback);
    }
    show() {
        super.show(this.dialog.contentElement);
        // UI.Dialog extends GlassPane and overrides the `show` method with a wider
        // accepted type. However, TypeScript uses the supertype declaration to
        // determine the full type, which requires a `!Document`.
        // @ts-ignore
        this.dialog.show();
    }
    done(value) {
        this.dialog.hide();
        this.callback(value);
    }
    apply() {
        this.done(this.input.value);
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.consume(true);
            this.apply();
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './dialog.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ }),

/***/ "./src/panels/sources/CSSPlugin.ts":
/*!*****************************************!*\
  !*** ./src/panels/sources/CSSPlugin.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   cssBindings: () => (/* binding */ cssBindings)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
/* harmony import */ var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddSourceMapURLDialog.js */ "./src/panels/sources/AddSourceMapURLDialog.ts");
/* harmony import */ var _Plugin_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Plugin.js */ "./src/panels/sources/Plugin.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ColorSwatchWidget_text, _ColorSwatchWidget_color, _ColorSwatchWidget_from, _CSSPlugin_instances, _CSSPlugin_cssModel, _CSSPlugin_cssCompletion;













// Plugin to add CSS completion, shortcuts, and color/curve swatches
// to editors with CSS content.
const UIStrings = {
    /**
     *@description Swatch icon element title in CSSPlugin of the Sources panel
     */
    openColorPicker: 'Open color picker.',
    /**
     *@description Text to open the cubic bezier editor
     */
    openCubicBezierEditor: 'Open cubic bezier editor.',
    /**
     *@description Text for a context menu item for attaching a sourcemap to the currently open css file
     */
    addSourceMap: 'Add source map…',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/CSSPlugin.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const dontCompleteIn = new Set(['ColorLiteral', 'NumberLiteral', 'StringLiteral', 'Comment', 'Important']);
function findPropertyAt(node, pos) {
    if (dontCompleteIn.has(node.name)) {
        return null;
    }
    for (let cur = node; cur; cur = cur.parent) {
        if (cur.name === 'StyleSheet' || cur.name === 'Styles' || cur.name === 'CallExpression') {
            break;
        }
        else if (cur.name === 'Declaration') {
            const name = cur.getChild('PropertyName'), colon = cur.getChild(':');
            return name && colon && colon.to <= pos ? name : null;
        }
    }
    return null;
}
function getCurrentStyleSheet(url, cssModel) {
    const currentStyleSheet = cssModel.getStyleSheetIdsForURL(url);
    if (currentStyleSheet.length === 0) {
        throw new Error('Can\'t find style sheet ID for current URL');
    }
    return currentStyleSheet[0];
}
async function specificCssCompletion(cx, uiSourceCode, cssModel) {
    const node = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.syntaxTree(cx.state).resolveInner(cx.pos, -1);
    if (node.name === 'ClassName') {
        // Should never happen, but let's code defensively here
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.assertNotNullOrUndefined)(cssModel);
        const currentStyleSheet = getCurrentStyleSheet(uiSourceCode.url(), cssModel);
        const existingClassNames = await cssModel.getClassNames(currentStyleSheet);
        return {
            from: node.from,
            options: existingClassNames.map(value => ({ type: 'constant', label: value })),
        };
    }
    const property = findPropertyAt(node, cx.pos);
    if (property) {
        const propertyValues = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSMetadata.cssMetadata().getPropertyValues(cx.state.sliceDoc(property.from, property.to));
        return {
            from: node.name === 'ValueName' ? node.from : cx.pos,
            options: propertyValues.map(value => ({ type: 'constant', label: value })),
            validFor: /^[\w\P{ASCII}\-]+$/u,
        };
    }
    return null;
}
function findColorsAndCurves(state, from, to, onColor, onCurve) {
    let line = state.doc.lineAt(from);
    function getToken(from, to) {
        if (from >= line.to) {
            line = state.doc.lineAt(from);
        }
        return line.text.slice(from - line.from, to - line.from);
    }
    const tree = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.ensureSyntaxTree(state, to, 100);
    if (!tree) {
        return;
    }
    tree.iterate({
        from,
        to,
        enter: node => {
            let content;
            if (node.name === 'ValueName' || node.name === 'ColorLiteral') {
                content = getToken(node.from, node.to);
            }
            else if (node.name === 'Callee' &&
                /^(?:(?:rgba?|hsla?|hwba?|lch|oklch|lab|oklab|color)|cubic-bezier)$/.test(getToken(node.from, node.to))) {
                content = state.sliceDoc(node.from, node.node.parent.to);
            }
            if (content) {
                const parsedColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(content);
                if (parsedColor) {
                    onColor(node.from, parsedColor, content);
                }
                else {
                    const parsedCurve = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Geometry.CubicBezier.parse(content);
                    if (parsedCurve) {
                        onCurve(node.from, parsedCurve, content);
                    }
                }
            }
        },
    });
}
class ColorSwatchWidget extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType {
    constructor(color, text, from) {
        super();
        _ColorSwatchWidget_text.set(this, void 0);
        _ColorSwatchWidget_color.set(this, void 0);
        _ColorSwatchWidget_from.set(this, void 0);
        __classPrivateFieldSet(this, _ColorSwatchWidget_color, color, "f");
        __classPrivateFieldSet(this, _ColorSwatchWidget_text, text, "f");
        __classPrivateFieldSet(this, _ColorSwatchWidget_from, from, "f");
    }
    eq(other) {
        return __classPrivateFieldGet(this, _ColorSwatchWidget_color, "f").equal(__classPrivateFieldGet(other, _ColorSwatchWidget_color, "f")) && __classPrivateFieldGet(this, _ColorSwatchWidget_text, "f") === __classPrivateFieldGet(other, _ColorSwatchWidget_text, "f") && __classPrivateFieldGet(this, _ColorSwatchWidget_from, "f") === __classPrivateFieldGet(other, _ColorSwatchWidget_from, "f");
    }
    toDOM(view) {
        const swatch = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ColorSwatch(i18nString(UIStrings.openColorPicker));
        swatch.renderColor(__classPrivateFieldGet(this, _ColorSwatchWidget_color, "f"));
        const value = swatch.createChild('span');
        value.textContent = __classPrivateFieldGet(this, _ColorSwatchWidget_text, "f");
        value.setAttribute('hidden', 'true');
        swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ColorChangedEvent.eventName, event => {
            const insert = event.data.color.getAuthoredText() ?? event.data.color.asString();
            view.dispatch({ changes: { from: __classPrivateFieldGet(this, _ColorSwatchWidget_from, "f"), to: __classPrivateFieldGet(this, _ColorSwatchWidget_from, "f") + __classPrivateFieldGet(this, _ColorSwatchWidget_text, "f").length, insert } });
            __classPrivateFieldSet(this, _ColorSwatchWidget_text, insert, "f");
            __classPrivateFieldSet(this, _ColorSwatchWidget_color, swatch.getColor(), "f");
        });
        swatch.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.ColorSwatch.ClickEvent.eventName, event => {
            event.consume(true);
            view.dispatch({
                effects: setTooltip.of({
                    type: TooltipType.Color,
                    pos: view.posAtDOM(swatch),
                    text: __classPrivateFieldGet(this, _ColorSwatchWidget_text, "f"),
                    swatch,
                    color: __classPrivateFieldGet(this, _ColorSwatchWidget_color, "f"),
                }),
            });
        });
        return swatch;
    }
    ignoreEvent() {
        return true;
    }
}
_ColorSwatchWidget_text = new WeakMap(), _ColorSwatchWidget_color = new WeakMap(), _ColorSwatchWidget_from = new WeakMap();
class CurveSwatchWidget extends _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.WidgetType {
    constructor(curve, text) {
        super();
        Object.defineProperty(this, "curve", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: curve
        });
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: text
        });
    }
    eq(other) {
        return this.curve.asCSSText() === other.curve.asCSSText() && this.text === other.text;
    }
    toDOM(view) {
        const swatch = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.Swatches.BezierSwatch.create();
        swatch.setBezierText(this.text);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Tooltip.Tooltip.install(swatch.iconElement(), i18nString(UIStrings.openCubicBezierEditor));
        swatch.iconElement().addEventListener('click', (event) => {
            event.consume(true);
            view.dispatch({
                effects: setTooltip.of({
                    type: TooltipType.Curve,
                    pos: view.posAtDOM(swatch),
                    text: this.text,
                    swatch,
                    curve: this.curve,
                }),
            });
        }, false);
        swatch.hideText(true);
        return swatch;
    }
    ignoreEvent() {
        return true;
    }
}
var TooltipType;
(function (TooltipType) {
    TooltipType[TooltipType["Color"] = 0] = "Color";
    TooltipType[TooltipType["Curve"] = 1] = "Curve";
})(TooltipType || (TooltipType = {}));
function createCSSTooltip(active) {
    return {
        pos: active.pos,
        arrow: true,
        create(view) {
            let text = active.text;
            let widget, addListener;
            if (active.type === TooltipType.Color) {
                const spectrum = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__.Spectrum.Spectrum();
                addListener = handler => {
                    spectrum.addEventListener(_ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__.Spectrum.Events.ColorChanged, handler);
                };
                spectrum.addEventListener(_ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_8__.Spectrum.Events.SizeChanged, () => view.requestMeasure());
                spectrum.setColor(active.color);
                widget = spectrum;
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.colorPickerOpenedFrom(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.ColorPickerOpenedFrom.SourcesPanel);
            }
            else {
                const spectrum = new _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.BezierEditor.BezierEditor(active.curve);
                widget = spectrum;
                addListener = handler => {
                    spectrum.addEventListener(_ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_9__.BezierEditor.Events.BezierChanged, handler);
                };
            }
            const dom = document.createElement('div');
            dom.className = 'cm-tooltip-swatchEdit';
            widget.markAsRoot();
            widget.show(dom);
            widget.showWidget();
            widget.element.addEventListener('keydown', event => {
                if (event.key === 'Escape') {
                    event.consume();
                    view.dispatch({
                        effects: setTooltip.of(null),
                        changes: text === active.text ? undefined :
                            { from: active.pos, to: active.pos + text.length, insert: active.text },
                    });
                    widget.hideWidget();
                    view.focus();
                }
            });
            widget.element.addEventListener('focusout', event => {
                if (event.relatedTarget && !widget.element.contains(event.relatedTarget)) {
                    view.dispatch({ effects: setTooltip.of(null) });
                    widget.hideWidget();
                }
            }, false);
            widget.element.addEventListener('mousedown', event => event.consume());
            return {
                dom,
                resize: false,
                offset: { x: -8, y: 0 },
                mount: () => {
                    widget.focus();
                    widget.wasShown();
                    addListener((event) => {
                        view.dispatch({
                            changes: { from: active.pos, to: active.pos + text.length, insert: event.data },
                            annotations: isSwatchEdit.of(true),
                        });
                        text = event.data;
                    });
                },
            };
        },
    };
}
const setTooltip = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateEffect.define();
const isSwatchEdit = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Annotation.define();
const cssTooltipState = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.StateField.define({
    create() {
        return null;
    },
    update(value, tr) {
        if ((tr.docChanged || tr.selection) && !tr.annotation(isSwatchEdit)) {
            value = null;
        }
        for (const effect of tr.effects) {
            if (effect.is(setTooltip)) {
                value = effect.value;
            }
        }
        return value;
    },
    provide: field => _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.showTooltip.from(field, active => active && createCSSTooltip(active)),
});
function computeSwatchDeco(state, from, to) {
    const builder = new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.RangeSetBuilder();
    findColorsAndCurves(state, from, to, (pos, parsedColor, colorText) => {
        builder.add(pos, pos, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({ widget: new ColorSwatchWidget(parsedColor, colorText, pos) }));
    }, (pos, curve, text) => {
        builder.add(pos, pos, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.Decoration.widget({ widget: new CurveSwatchWidget(curve, text) }));
    });
    return builder.finish();
}
const cssSwatchPlugin = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.ViewPlugin.fromClass(class {
    constructor(view) {
        Object.defineProperty(this, "decorations", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.decorations = computeSwatchDeco(view.state, view.viewport.from, view.viewport.to);
    }
    update(update) {
        if (update.viewportChanged || update.docChanged) {
            this.decorations = computeSwatchDeco(update.state, update.view.viewport.from, update.view.viewport.to);
        }
    }
}, {
    decorations: v => v.decorations,
});
function cssSwatches() {
    return [cssSwatchPlugin, cssTooltipState];
}
function getNumberAt(node) {
    if (node.name === 'Unit') {
        node = node.parent;
    }
    if (node.name === 'NumberLiteral') {
        const lastChild = node.lastChild;
        return { from: node.from, to: lastChild && lastChild.name === 'Unit' ? lastChild.from : node.to };
    }
    return null;
}
function modifyUnit(view, by) {
    const { head } = view.state.selection.main;
    const context = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.syntaxTree(view.state).resolveInner(head, -1);
    const numberRange = getNumberAt(context) || getNumberAt(context.resolve(head, 1));
    if (!numberRange) {
        return false;
    }
    const currentNumber = Number(view.state.sliceDoc(numberRange.from, numberRange.to));
    if (isNaN(currentNumber)) {
        return false;
    }
    view.dispatch({
        changes: { from: numberRange.from, to: numberRange.to, insert: String(currentNumber + by) },
        scrollIntoView: true,
        userEvent: 'insert.modifyUnit',
    });
    return true;
}
function cssBindings() {
    // This is an awkward way to pass the argument given to the editor
    // event handler through the ShortcutRegistry calling convention.
    let currentView = null;
    const listener = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().getShortcutListener({
        'sources.increment-css': () => Promise.resolve(modifyUnit(currentView, 1)),
        'sources.increment-css-by-ten': () => Promise.resolve(modifyUnit(currentView, 10)),
        'sources.decrement-css': () => Promise.resolve(modifyUnit(currentView, -1)),
        'sources.decrement-css-by-ten': () => Promise.resolve(modifyUnit(currentView, -10)),
    });
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.EditorView.domEventHandlers({
        keydown: (event, view) => {
            const prevView = currentView;
            currentView = view;
            listener(event);
            currentView = prevView;
            return event.defaultPrevented;
        },
    });
}
class CSSPlugin extends _Plugin_js__WEBPACK_IMPORTED_MODULE_12__.Plugin {
    constructor(uiSourceCode, _transformer) {
        super(uiSourceCode, _transformer);
        _CSSPlugin_instances.add(this);
        _CSSPlugin_cssModel.set(this, void 0);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel, this);
    }
    static accepts(uiSourceCode) {
        return uiSourceCode.contentType().hasStyleSheets();
    }
    modelAdded(cssModel) {
        if (cssModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        __classPrivateFieldSet(this, _CSSPlugin_cssModel, cssModel, "f");
    }
    modelRemoved(cssModel) {
        if (__classPrivateFieldGet(this, _CSSPlugin_cssModel, "f") === cssModel) {
            __classPrivateFieldSet(this, _CSSPlugin_cssModel, undefined, "f");
        }
    }
    editorExtension() {
        return [cssBindings(), __classPrivateFieldGet(this, _CSSPlugin_instances, "m", _CSSPlugin_cssCompletion).call(this), cssSwatches()];
    }
    populateTextAreaContextMenu(contextMenu) {
        function addSourceMapURL(cssModel, sourceUrl) {
            const dialog = _AddSourceMapURLDialog_js__WEBPACK_IMPORTED_MODULE_11__.AddDebugInfoURLDialog.createAddSourceMapURLDialog(sourceMapUrl => {
                _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().modelToInfo.get(cssModel)?.addSourceMap(sourceUrl, sourceMapUrl);
            });
            dialog.show();
        }
        const cssModel = __classPrivateFieldGet(this, _CSSPlugin_cssModel, "f");
        const url = this.uiSourceCode.url();
        if (this.uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network && cssModel &&
            !_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance().isUserIgnoreListedURL(url)) {
            const addSourceMapURLLabel = i18nString(UIStrings.addSourceMap);
            contextMenu.debugSection().appendItem(addSourceMapURLLabel, () => addSourceMapURL(cssModel, url), { jslogContext: 'add-source-map' });
        }
    }
}
_CSSPlugin_cssModel = new WeakMap(), _CSSPlugin_instances = new WeakSet(), _CSSPlugin_cssCompletion = function _CSSPlugin_cssCompletion() {
    const { cssCompletionSource } = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.css;
    // CodeMirror binds the function below to the state object.
    // Therefore, we can't access `this` and retrieve the following properties.
    // Instead, retrieve them up front to bind them to the correct closure.
    const uiSourceCode = this.uiSourceCode;
    const cssModel = __classPrivateFieldGet(this, _CSSPlugin_cssModel, "f");
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_7__.autocompletion({
        override: [async (cx) => {
                return (await specificCssCompletion(cx, uiSourceCode, cssModel)) || cssCompletionSource(cx);
            }],
    });
};


/***/ }),

/***/ "./src/panels/sources/Plugin.ts":
/*!**************************************!*\
  !*** ./src/panels/sources/Plugin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Plugin: () => (/* binding */ Plugin)
/* harmony export */ });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Plugin {
    constructor(uiSourceCode, _transformer) {
        Object.defineProperty(this, "uiSourceCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: uiSourceCode
        });
    }
    static accepts(_uiSourceCode) {
        return false;
    }
    willHide() {
    }
    rightToolbarItems() {
        return [];
    }
    /**
     *
     * TODO(szuend): It is OK to asyncify this function (similar to {rightToolbarItems}),
     *               but it is currently not strictly necessary.
     */
    leftToolbarItems() {
        return [];
    }
    populateLineGutterContextMenu(_contextMenu, _lineNumber) {
    }
    populateTextAreaContextMenu(_contextMenu, _lineNumber, _columnNumber) {
    }
    decorationChanged(_type, _editor) {
    }
    editorExtension() {
        return [];
    }
    editorInitialized(_editor) {
    }
    dispose() {
    }
}


/***/ })

}]);