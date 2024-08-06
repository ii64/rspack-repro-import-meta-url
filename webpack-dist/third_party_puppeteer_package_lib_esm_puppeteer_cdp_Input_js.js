"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_Input_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js":
/*!**********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js ***!
  \**********************************************************************/
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
//# sourceMappingURL=Input.js.map

/***/ }),

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js":
/*!**********************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/cdp/Input.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CdpKeyboard: () => (/* binding */ CdpKeyboard),
/* harmony export */   CdpMouse: () => (/* binding */ CdpMouse),
/* harmony export */   CdpTouchscreen: () => (/* binding */ CdpTouchscreen)
/* harmony export */ });
/* harmony import */ var _api_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/Input.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/api/Input.js");
/* harmony import */ var _common_USKeyboardLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/USKeyboardLayout.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/USKeyboardLayout.js");
/* harmony import */ var _util_assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/assert.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/util/assert.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */



/**
 * @internal
 */
class CdpKeyboard extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Keyboard {
    #client;
    #pressedKeys = new Set();
    _modifiers = 0;
    constructor(client) {
        super();
        this.#client = client;
    }
    updateClient(client) {
        this.#client = client;
    }
    async down(key, options = {
        text: undefined,
        commands: [],
    }) {
        const description = this.#keyDescriptionForString(key);
        const autoRepeat = this.#pressedKeys.has(description.code);
        this.#pressedKeys.add(description.code);
        this._modifiers |= this.#modifierBit(description.key);
        const text = options.text === undefined ? description.text : options.text;
        await this.#client.send('Input.dispatchKeyEvent', {
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
    #modifierBit(key) {
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
    }
    #keyDescriptionForString(keyString) {
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
    }
    async up(key) {
        const description = this.#keyDescriptionForString(key);
        this._modifiers &= ~this.#modifierBit(description.key);
        this.#pressedKeys.delete(description.code);
        await this.#client.send('Input.dispatchKeyEvent', {
            type: 'keyUp',
            modifiers: this._modifiers,
            key: description.key,
            windowsVirtualKeyCode: description.keyCode,
            code: description.code,
            location: description.location,
        });
    }
    async sendCharacter(char) {
        await this.#client.send('Input.insertText', { text: char });
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
const getFlag = (button) => {
    switch (button) {
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left:
            return 1 /* MouseButtonFlag.Left */;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right:
            return 2 /* MouseButtonFlag.Right */;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle:
            return 4 /* MouseButtonFlag.Middle */;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back:
            return 8 /* MouseButtonFlag.Back */;
        case _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward:
            return 16 /* MouseButtonFlag.Forward */;
    }
};
/**
 * This should match
 * https://source.chromium.org/chromium/chromium/src/+/refs/heads/main:content/browser/renderer_host/input/web_input_event_builders_mac.mm;drc=a61b95c63b0b75c1cfe872d9c8cdf927c226046e;bpv=1;bpt=1;l=221.
 */
const getButtonFromPressedButtons = (buttons) => {
    if (buttons & 1 /* MouseButtonFlag.Left */) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left;
    }
    else if (buttons & 2 /* MouseButtonFlag.Right */) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right;
    }
    else if (buttons & 4 /* MouseButtonFlag.Middle */) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle;
    }
    else if (buttons & 8 /* MouseButtonFlag.Back */) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back;
    }
    else if (buttons & 16 /* MouseButtonFlag.Forward */) {
        return _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward;
    }
    return 'none';
};
/**
 * @internal
 */
class CdpMouse extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Mouse {
    #client;
    #keyboard;
    constructor(client, keyboard) {
        super();
        this.#client = client;
        this.#keyboard = keyboard;
    }
    updateClient(client) {
        this.#client = client;
    }
    #_state = {
        position: { x: 0, y: 0 },
        buttons: 0 /* MouseButtonFlag.None */,
    };
    get #state() {
        return Object.assign({ ...this.#_state }, ...this.#transactions);
    }
    // Transactions can run in parallel, so we store each of thme in this array.
    #transactions = [];
    #createTransaction() {
        const transaction = {};
        this.#transactions.push(transaction);
        const popTransaction = () => {
            this.#transactions.splice(this.#transactions.indexOf(transaction), 1);
        };
        return {
            update: (updates) => {
                Object.assign(transaction, updates);
            },
            commit: () => {
                this.#_state = { ...this.#_state, ...transaction };
                popTransaction();
            },
            rollback: popTransaction,
        };
    }
    /**
     * This is a shortcut for a typical update, commit/rollback lifecycle based on
     * the error of the action.
     */
    async #withTransaction(action) {
        const { update, commit, rollback } = this.#createTransaction();
        try {
            await action(update);
            commit();
        }
        catch (error) {
            rollback();
            throw error;
        }
    }
    async reset() {
        const actions = [];
        for (const [flag, button] of [
            [1 /* MouseButtonFlag.Left */, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Left],
            [4 /* MouseButtonFlag.Middle */, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Middle],
            [2 /* MouseButtonFlag.Right */, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Right],
            [16 /* MouseButtonFlag.Forward */, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Forward],
            [8 /* MouseButtonFlag.Back */, _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.MouseButton.Back],
        ]) {
            if (this.#state.buttons & flag) {
                actions.push(this.up({ button: button }));
            }
        }
        if (this.#state.position.x !== 0 || this.#state.position.y !== 0) {
            actions.push(this.move(0, 0));
        }
        await Promise.all(actions);
    }
    async move(x, y, options = {}) {
        const { steps = 1 } = options;
        const from = this.#state.position;
        const to = { x, y };
        for (let i = 1; i <= steps; i++) {
            await this.#withTransaction(updateState => {
                updateState({
                    position: {
                        x: from.x + (to.x - from.x) * (i / steps),
                        y: from.y + (to.y - from.y) * (i / steps),
                    },
                });
                const { buttons, position } = this.#state;
                return this.#client.send('Input.dispatchMouseEvent', {
                    type: 'mouseMoved',
                    modifiers: this.#keyboard._modifiers,
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
        if (this.#state.buttons & flag) {
            throw new Error(`'${button}' is already pressed.`);
        }
        await this.#withTransaction(updateState => {
            updateState({
                buttons: this.#state.buttons | flag,
            });
            const { buttons, position } = this.#state;
            return this.#client.send('Input.dispatchMouseEvent', {
                type: 'mousePressed',
                modifiers: this.#keyboard._modifiers,
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
        if (!(this.#state.buttons & flag)) {
            throw new Error(`'${button}' is not pressed.`);
        }
        await this.#withTransaction(updateState => {
            updateState({
                buttons: this.#state.buttons & ~flag,
            });
            const { buttons, position } = this.#state;
            return this.#client.send('Input.dispatchMouseEvent', {
                type: 'mouseReleased',
                modifiers: this.#keyboard._modifiers,
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
        const { position, buttons } = this.#state;
        await this.#client.send('Input.dispatchMouseEvent', {
            type: 'mouseWheel',
            pointerType: 'mouse',
            modifiers: this.#keyboard._modifiers,
            deltaY,
            deltaX,
            buttons,
            ...position,
        });
    }
    async drag(start, target) {
        const promise = new Promise(resolve => {
            this.#client.once('Input.dragIntercepted', event => {
                return resolve(event.data);
            });
        });
        await this.move(start.x, start.y);
        await this.down();
        await this.move(target.x, target.y);
        return await promise;
    }
    async dragEnter(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'dragEnter',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
            data,
        });
    }
    async dragOver(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'dragOver',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
            data,
        });
    }
    async drop(target, data) {
        await this.#client.send('Input.dispatchDragEvent', {
            type: 'drop',
            x: target.x,
            y: target.y,
            modifiers: this.#keyboard._modifiers,
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
/**
 * @internal
 */
class CdpTouchscreen extends _api_Input_js__WEBPACK_IMPORTED_MODULE_0__.Touchscreen {
    #client;
    #keyboard;
    constructor(client, keyboard) {
        super();
        this.#client = client;
        this.#keyboard = keyboard;
    }
    updateClient(client) {
        this.#client = client;
    }
    async touchStart(x, y) {
        await this.#client.send('Input.dispatchTouchEvent', {
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
            modifiers: this.#keyboard._modifiers,
        });
    }
    async touchMove(x, y) {
        await this.#client.send('Input.dispatchTouchEvent', {
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
            modifiers: this.#keyboard._modifiers,
        });
    }
    async touchEnd() {
        await this.#client.send('Input.dispatchTouchEvent', {
            type: 'touchEnd',
            touchPoints: [],
            modifiers: this.#keyboard._modifiers,
        });
    }
}
//# sourceMappingURL=Input.js.map

/***/ })

}]);