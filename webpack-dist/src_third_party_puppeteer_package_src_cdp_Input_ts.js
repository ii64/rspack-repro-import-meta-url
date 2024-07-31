"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer_package_src_cdp_Input_ts"],{

/***/ "./src/third_party/puppeteer/package/src/api/Input.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/api/Input.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyboard: () => (/* binding */ Keyboard),
/* harmony export */   Mouse: () => (/* binding */ Mouse),
/* harmony export */   MouseButton: () => (/* binding */ MouseButton),
/* harmony export */   Touchscreen: () => (/* binding */ Touchscreen)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Keyboard provides an api for managing a virtual keyboard.
 * The high level api is {@link Keyboard."type"},
 * which takes raw characters and generates proper keydown, keypress/input,
 * and keyup events on your page.
 *
 * @remarks
 * For finer control, you can use {@link Keyboard.down},
 * {@link Keyboard.up}, and {@link Keyboard.sendCharacter}
 * to manually fire events as if they were generated from a real keyboard.
 *
 * On macOS, keyboard shortcuts like `⌘ A` -\> Select All do not work.
 * See {@link https://github.com/puppeteer/puppeteer/issues/1313 | #1313}.
 *
 * @example
 * An example of holding down `Shift` in order to select and delete some text:
 *
 * ```ts
 * await page.keyboard.type('Hello World!');
 * await page.keyboard.press('ArrowLeft');
 *
 * await page.keyboard.down('Shift');
 * for (let i = 0; i < ' World'.length; i++)
 *   await page.keyboard.press('ArrowLeft');
 * await page.keyboard.up('Shift');
 *
 * await page.keyboard.press('Backspace');
 * // Result text will end up saying 'Hello!'
 * ```
 *
 * @example
 * An example of pressing `A`
 *
 * ```ts
 * await page.keyboard.down('Shift');
 * await page.keyboard.press('KeyA');
 * await page.keyboard.up('Shift');
 * ```
 *
 * @public
 */
class Keyboard {
    /**
     * @internal
     */
    constructor() { }
}
/**
 * Enum of valid mouse buttons.
 *
 * @public
 */
const MouseButton = Object.freeze({
    Left: 'left',
    Right: 'right',
    Middle: 'middle',
    Back: 'back',
    Forward: 'forward',
});
/**
 * The Mouse class operates in main-frame CSS pixels
 * relative to the top-left corner of the viewport.
 *
 * @remarks
 * Every `page` object has its own Mouse, accessible with {@link Page.mouse}.
 *
 * @example
 *
 * ```ts
 * // Using ‘page.mouse’ to trace a 100x100 square.
 * await page.mouse.move(0, 0);
 * await page.mouse.down();
 * await page.mouse.move(0, 100);
 * await page.mouse.move(100, 100);
 * await page.mouse.move(100, 0);
 * await page.mouse.move(0, 0);
 * await page.mouse.up();
 * ```
 *
 * **Note**: The mouse events trigger synthetic `MouseEvent`s.
 * This means that it does not fully replicate the functionality of what a normal user
 * would be able to do with their mouse.
 *
 * For example, dragging and selecting text is not possible using `page.mouse`.
 * Instead, you can use the {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection | `DocumentOrShadowRoot.getSelection()`} functionality implemented in the platform.
 *
 * @example
 * For example, if you want to select all content between nodes:
 *
 * ```ts
 * await page.evaluate(
 *   (from, to) => {
 *     const selection = from.getRootNode().getSelection();
 *     const range = document.createRange();
 *     range.setStartBefore(from);
 *     range.setEndAfter(to);
 *     selection.removeAllRanges();
 *     selection.addRange(range);
 *   },
 *   fromJSHandle,
 *   toJSHandle
 * );
 * ```
 *
 * If you then would want to copy-paste your selection, you can use the clipboard api:
 *
 * ```ts
 * // The clipboard api does not allow you to copy, unless the tab is focused.
 * await page.bringToFront();
 * await page.evaluate(() => {
 *   // Copy the selected content to the clipboard
 *   document.execCommand('copy');
 *   // Obtain the content of the clipboard as a string
 *   return navigator.clipboard.readText();
 * });
 * ```
 *
 * **Note**: If you want access to the clipboard API,
 * you have to give it permission to do so:
 *
 * ```ts
 * await browser
 *   .defaultBrowserContext()
 *   .overridePermissions('<your origin>', [
 *     'clipboard-read',
 *     'clipboard-write',
 *   ]);
 * ```
 *
 * @public
 */
class Mouse {
    /**
     * @internal
     */
    constructor() { }
}
/**
 * The Touchscreen class exposes touchscreen events.
 * @public
 */
class Touchscreen {
    /**
     * @internal
     */
    constructor() { }
    /**
     * Dispatches a `touchstart` and `touchend` event.
     * @param x - Horizontal position of the tap.
     * @param y - Vertical position of the tap.
     */
    async tap(x, y) {
        await this.touchStart(x, y);
        await this.touchEnd();
    }
}


/***/ }),

/***/ "./src/third_party/puppeteer/package/src/cdp/Input.ts":
/*!************************************************************!*\
  !*** ./src/third_party/puppeteer/package/src/cdp/Input.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpKeyboard: () => (/* binding */ CdpKeyboard),
/* harmony export */   CdpMouse: () => (/* binding */ CdpMouse),
/* harmony export */   CdpTouchscreen: () => (/* binding */ CdpTouchscreen)
/* harmony export */ });
/* harmony import */ var _api_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Input.js */ "./src/third_party/puppeteer/package/src/api/Input.ts");
/* harmony import */ var _common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/USKeyboardLayout.js */ "./src/third_party/puppeteer/package/src/common/USKeyboardLayout.ts");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./src/third_party/puppeteer/package/src/util/assert.ts");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
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
var _CdpKeyboard_instances, _CdpKeyboard_client, _CdpKeyboard_pressedKeys, _CdpKeyboard_modifierBit, _CdpKeyboard_keyDescriptionForString, _CdpMouse_instances, _CdpMouse_client, _CdpMouse_keyboard, _CdpMouse__state, _CdpMouse_state_get, _CdpMouse_transactions, _CdpMouse_createTransaction, _CdpMouse_withTransaction, _CdpTouchscreen_client, _CdpTouchscreen_keyboard;



/**
 * @internal
 */
class CdpKeyboard extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard {
    constructor(client) {
        super();
        _CdpKeyboard_instances.add(this);
        _CdpKeyboard_client.set(this, void 0);
        _CdpKeyboard_pressedKeys.set(this, new Set());
        Object.defineProperty(this, "_modifiers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        __classPrivateFieldSet(this, _CdpKeyboard_client, client, "f");
    }
    updateClient(client) {
        __classPrivateFieldSet(this, _CdpKeyboard_client, client, "f");
    }
    async down(key, options = {
        text: undefined,
        commands: [],
    }) {
        const description = __classPrivateFieldGet(this, _CdpKeyboard_instances, "m", _CdpKeyboard_keyDescriptionForString).call(this, key);
        const autoRepeat = __classPrivateFieldGet(this, _CdpKeyboard_pressedKeys, "f").has(description.code);
        __classPrivateFieldGet(this, _CdpKeyboard_pressedKeys, "f").add(description.code);
        this._modifiers |= __classPrivateFieldGet(this, _CdpKeyboard_instances, "m", _CdpKeyboard_modifierBit).call(this, description.key);
        const text = options.text === undefined ? description.text : options.text;
        await __classPrivateFieldGet(this, _CdpKeyboard_client, "f").send('Input.dispatchKeyEvent', {
            type: text ? 'keyDown' : 'rawKeyDown',
            modifiers: this._modifiers,
            windowsVirtualKeyCode: description.keyCode,
            code: description.code,
            key: description.key,
            text: text,
            unmodifiedText: text,
            autoRepeat,
            location: description.location,
            isKeypad: description.location === 3,
            commands: options.commands,
        });
    }
    async up(key) {
        const description = __classPrivateFieldGet(this, _CdpKeyboard_instances, "m", _CdpKeyboard_keyDescriptionForString).call(this, key);
        this._modifiers &= ~__classPrivateFieldGet(this, _CdpKeyboard_instances, "m", _CdpKeyboard_modifierBit).call(this, description.key);
        __classPrivateFieldGet(this, _CdpKeyboard_pressedKeys, "f").delete(description.code);
        await __classPrivateFieldGet(this, _CdpKeyboard_client, "f").send('Input.dispatchKeyEvent', {
            type: 'keyUp',
            modifiers: this._modifiers,
            key: description.key,
            windowsVirtualKeyCode: description.keyCode,
            code: description.code,
            location: description.location,
        });
    }
    async sendCharacter(char) {
        await __classPrivateFieldGet(this, _CdpKeyboard_client, "f").send('Input.insertText', { text: char });
    }
    charIsKey(char) {
        return !!_common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__._keyDefinitions[char];
    }
    async type(text, options = {}) {
        const delay = options.delay || undefined;
        for (const char of text) {
            if (this.charIsKey(char)) {
                await this.press(char, { delay });
            }
            else {
                if (delay) {
                    await new Promise(f => {
                        return setTimeout(f, delay);
                    });
                }
                await this.sendCharacter(char);
            }
        }
    }
    async press(key, options = {}) {
        const { delay = null } = options;
        await this.down(key, options);
        if (delay) {
            await new Promise(f => {
                return setTimeout(f, options.delay);
            });
        }
        await this.up(key);
    }
}
_CdpKeyboard_client = new WeakMap(), _CdpKeyboard_pressedKeys = new WeakMap(), _CdpKeyboard_instances = new WeakSet(), _CdpKeyboard_modifierBit = function _CdpKeyboard_modifierBit(key) {
    if (key === 'Alt') {
        return 1;
    }
    if (key === 'Control') {
        return 2;
    }
    if (key === 'Meta') {
        return 4;
    }
    if (key === 'Shift') {
        return 8;
    }
    return 0;
}, _CdpKeyboard_keyDescriptionForString = function _CdpKeyboard_keyDescriptionForString(keyString) {
    const shift = this._modifiers & 8;
    const description = {
        key: '',
        keyCode: 0,
        code: '',
        text: '',
        location: 0,
    };
    const definition = _common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__._keyDefinitions[keyString];
    (0,_util_assert_js__WEBPACK_IMPORTED_MODULE_2__.assert)(definition, `Unknown key: "${keyString}"`);
    if (definition.key) {
        description.key = definition.key;
    }
    if (shift && definition.shiftKey) {
        description.key = definition.shiftKey;
    }
    if (definition.keyCode) {
        description.keyCode = definition.keyCode;
    }
    if (shift && definition.shiftKeyCode) {
        description.keyCode = definition.shiftKeyCode;
    }
    if (definition.code) {
        description.code = definition.code;
    }
    if (definition.location) {
        description.location = definition.location;
    }
    if (description.key.length === 1) {
        description.text = description.key;
    }
    if (definition.text) {
        description.text = definition.text;
    }
    if (shift && definition.shiftText) {
        description.text = definition.shiftText;
    }
    // if any modifiers besides shift are pressed, no text should be sent
    if (this._modifiers & ~8) {
        description.text = '';
    }
    return description;
};
/**
 * This must follow {@link Protocol.Input.DispatchMouseEventRequest.buttons}.
 */
var MouseButtonFlag;
(function (MouseButtonFlag) {
    MouseButtonFlag[MouseButtonFlag["None"] = 0] = "None";
    MouseButtonFlag[MouseButtonFlag["Left"] = 1] = "Left";
    MouseButtonFlag[MouseButtonFlag["Right"] = 2] = "Right";
    MouseButtonFlag[MouseButtonFlag["Middle"] = 4] = "Middle";
    MouseButtonFlag[MouseButtonFlag["Back"] = 8] = "Back";
    MouseButtonFlag[MouseButtonFlag["Forward"] = 16] = "Forward";
})(MouseButtonFlag || (MouseButtonFlag = {}));
const getFlag = (button) => {
    switch (button) {
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left:
            return MouseButtonFlag.Left;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right:
            return MouseButtonFlag.Right;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle:
            return MouseButtonFlag.Middle;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back:
            return MouseButtonFlag.Back;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward:
            return MouseButtonFlag.Forward;
    }
};
/**
 * This should match
 * https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:content/browser/renderer_host/input/web_input_event_builders_mac.mm;drc=a61b95c63b0b75c1cfe872d9c8cdf927c226046e;bpv=1;bpt=1;l=221.
 */
const getButtonFromPressedButtons = (buttons) => {
    if (buttons & MouseButtonFlag.Left) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left;
    }
    else if (buttons & MouseButtonFlag.Right) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right;
    }
    else if (buttons & MouseButtonFlag.Middle) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle;
    }
    else if (buttons & MouseButtonFlag.Back) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back;
    }
    else if (buttons & MouseButtonFlag.Forward) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward;
    }
    return 'none';
};
/**
 * @internal
 */
class CdpMouse extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Mouse {
    constructor(client, keyboard) {
        super();
        _CdpMouse_instances.add(this);
        _CdpMouse_client.set(this, void 0);
        _CdpMouse_keyboard.set(this, void 0);
        _CdpMouse__state.set(this, {
            position: { x: 0, y: 0 },
            buttons: MouseButtonFlag.None,
        });
        // Transactions can run in parallel, so we store each of thme in this array.
        _CdpMouse_transactions.set(this, []);
        __classPrivateFieldSet(this, _CdpMouse_client, client, "f");
        __classPrivateFieldSet(this, _CdpMouse_keyboard, keyboard, "f");
    }
    updateClient(client) {
        __classPrivateFieldSet(this, _CdpMouse_client, client, "f");
    }
    async reset() {
        const actions = [];
        for (const [flag, button] of [
            [MouseButtonFlag.Left, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left],
            [MouseButtonFlag.Middle, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle],
            [MouseButtonFlag.Right, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right],
            [MouseButtonFlag.Forward, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward],
            [MouseButtonFlag.Back, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back],
        ]) {
            if (__classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).buttons & flag) {
                actions.push(this.up({ button: button }));
            }
        }
        if (__classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).position.x !== 0 || __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).position.y !== 0) {
            actions.push(this.move(0, 0));
        }
        await Promise.all(actions);
    }
    async move(x, y, options = {}) {
        const { steps = 1 } = options;
        const from = __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).position;
        const to = { x, y };
        for (let i = 1; i <= steps; i++) {
            await __classPrivateFieldGet(this, _CdpMouse_instances, "m", _CdpMouse_withTransaction).call(this, updateState => {
                updateState({
                    position: {
                        x: from.x + (to.x - from.x) * (i / steps),
                        y: from.y + (to.y - from.y) * (i / steps),
                    },
                });
                const { buttons, position } = __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get);
                return __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchMouseEvent', {
                    type: 'mouseMoved',
                    modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
                    buttons,
                    button: getButtonFromPressedButtons(buttons),
                    ...position,
                });
            });
        }
    }
    async down(options = {}) {
        const { button = _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left, clickCount = 1 } = options;
        const flag = getFlag(button);
        if (!flag) {
            throw new Error(`Unsupported mouse button: ${button}`);
        }
        if (__classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).buttons & flag) {
            throw new Error(`'${button}' is already pressed.`);
        }
        await __classPrivateFieldGet(this, _CdpMouse_instances, "m", _CdpMouse_withTransaction).call(this, updateState => {
            updateState({
                buttons: __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).buttons | flag,
            });
            const { buttons, position } = __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get);
            return __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchMouseEvent', {
                type: 'mousePressed',
                modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
                clickCount,
                buttons,
                button,
                ...position,
            });
        });
    }
    async up(options = {}) {
        const { button = _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left, clickCount = 1 } = options;
        const flag = getFlag(button);
        if (!flag) {
            throw new Error(`Unsupported mouse button: ${button}`);
        }
        if (!(__classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).buttons & flag)) {
            throw new Error(`'${button}' is not pressed.`);
        }
        await __classPrivateFieldGet(this, _CdpMouse_instances, "m", _CdpMouse_withTransaction).call(this, updateState => {
            updateState({
                buttons: __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get).buttons & ~flag,
            });
            const { buttons, position } = __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get);
            return __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchMouseEvent', {
                type: 'mouseReleased',
                modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
                clickCount,
                buttons,
                button,
                ...position,
            });
        });
    }
    async click(x, y, options = {}) {
        const { delay, count = 1, clickCount = count } = options;
        if (count < 1) {
            throw new Error('Click must occur a positive number of times.');
        }
        const actions = [this.move(x, y)];
        if (clickCount === count) {
            for (let i = 1; i < count; ++i) {
                actions.push(this.down({ ...options, clickCount: i }), this.up({ ...options, clickCount: i }));
            }
        }
        actions.push(this.down({ ...options, clickCount }));
        if (typeof delay === 'number') {
            await Promise.all(actions);
            actions.length = 0;
            await new Promise(resolve => {
                setTimeout(resolve, delay);
            });
        }
        actions.push(this.up({ ...options, clickCount }));
        await Promise.all(actions);
    }
    async wheel(options = {}) {
        const { deltaX = 0, deltaY = 0 } = options;
        const { position, buttons } = __classPrivateFieldGet(this, _CdpMouse_instances, "a", _CdpMouse_state_get);
        await __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchMouseEvent', {
            type: 'mouseWheel',
            pointerType: 'mouse',
            modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
            deltaY,
            deltaX,
            buttons,
            ...position,
        });
    }
    async drag(start, target) {
        const promise = new Promise(resolve => {
            __classPrivateFieldGet(this, _CdpMouse_client, "f").once('Input.dragIntercepted', event => {
                return resolve(event.data);
            });
        });
        await this.move(start.x, start.y);
        await this.down();
        await this.move(target.x, target.y);
        return await promise;
    }
    async dragEnter(target, data) {
        await __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchDragEvent', {
            type: 'dragEnter',
            x: target.x,
            y: target.y,
            modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
            data,
        });
    }
    async dragOver(target, data) {
        await __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchDragEvent', {
            type: 'dragOver',
            x: target.x,
            y: target.y,
            modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
            data,
        });
    }
    async drop(target, data) {
        await __classPrivateFieldGet(this, _CdpMouse_client, "f").send('Input.dispatchDragEvent', {
            type: 'drop',
            x: target.x,
            y: target.y,
            modifiers: __classPrivateFieldGet(this, _CdpMouse_keyboard, "f")._modifiers,
            data,
        });
    }
    async dragAndDrop(start, target, options = {}) {
        const { delay = null } = options;
        const data = await this.drag(start, target);
        await this.dragEnter(target, data);
        await this.dragOver(target, data);
        if (delay) {
            await new Promise(resolve => {
                return setTimeout(resolve, delay);
            });
        }
        await this.drop(target, data);
        await this.up();
    }
}
_CdpMouse_client = new WeakMap(), _CdpMouse_keyboard = new WeakMap(), _CdpMouse__state = new WeakMap(), _CdpMouse_transactions = new WeakMap(), _CdpMouse_instances = new WeakSet(), _CdpMouse_state_get = function _CdpMouse_state_get() {
    return Object.assign({ ...__classPrivateFieldGet(this, _CdpMouse__state, "f") }, ...__classPrivateFieldGet(this, _CdpMouse_transactions, "f"));
}, _CdpMouse_createTransaction = function _CdpMouse_createTransaction() {
    const transaction = {};
    __classPrivateFieldGet(this, _CdpMouse_transactions, "f").push(transaction);
    const popTransaction = () => {
        __classPrivateFieldGet(this, _CdpMouse_transactions, "f").splice(__classPrivateFieldGet(this, _CdpMouse_transactions, "f").indexOf(transaction), 1);
    };
    return {
        update: (updates) => {
            Object.assign(transaction, updates);
        },
        commit: () => {
            __classPrivateFieldSet(this, _CdpMouse__state, { ...__classPrivateFieldGet(this, _CdpMouse__state, "f"), ...transaction }, "f");
            popTransaction();
        },
        rollback: popTransaction,
    };
}, _CdpMouse_withTransaction = 
/**
 * This is a shortcut for a typical update, commit/rollback lifecycle based on
 * the error of the action.
 */
async function _CdpMouse_withTransaction(action) {
    const { update, commit, rollback } = __classPrivateFieldGet(this, _CdpMouse_instances, "m", _CdpMouse_createTransaction).call(this);
    try {
        await action(update);
        commit();
    }
    catch (error) {
        rollback();
        throw error;
    }
};
/**
 * @internal
 */
class CdpTouchscreen extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Touchscreen {
    constructor(client, keyboard) {
        super();
        _CdpTouchscreen_client.set(this, void 0);
        _CdpTouchscreen_keyboard.set(this, void 0);
        __classPrivateFieldSet(this, _CdpTouchscreen_client, client, "f");
        __classPrivateFieldSet(this, _CdpTouchscreen_keyboard, keyboard, "f");
    }
    updateClient(client) {
        __classPrivateFieldSet(this, _CdpTouchscreen_client, client, "f");
    }
    async touchStart(x, y) {
        await __classPrivateFieldGet(this, _CdpTouchscreen_client, "f").send('Input.dispatchTouchEvent', {
            type: 'touchStart',
            touchPoints: [
                {
                    x: Math.round(x),
                    y: Math.round(y),
                    radiusX: 0.5,
                    radiusY: 0.5,
                    force: 0.5,
                },
            ],
            modifiers: __classPrivateFieldGet(this, _CdpTouchscreen_keyboard, "f")._modifiers,
        });
    }
    async touchMove(x, y) {
        await __classPrivateFieldGet(this, _CdpTouchscreen_client, "f").send('Input.dispatchTouchEvent', {
            type: 'touchMove',
            touchPoints: [
                {
                    x: Math.round(x),
                    y: Math.round(y),
                    radiusX: 0.5,
                    radiusY: 0.5,
                    force: 0.5,
                },
            ],
            modifiers: __classPrivateFieldGet(this, _CdpTouchscreen_keyboard, "f")._modifiers,
        });
    }
    async touchEnd() {
        await __classPrivateFieldGet(this, _CdpTouchscreen_client, "f").send('Input.dispatchTouchEvent', {
            type: 'touchEnd',
            touchPoints: [],
            modifiers: __classPrivateFieldGet(this, _CdpTouchscreen_keyboard, "f")._modifiers,
        });
    }
}
_CdpTouchscreen_client = new WeakMap(), _CdpTouchscreen_keyboard = new WeakMap();


/***/ })

}]);