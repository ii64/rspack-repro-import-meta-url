"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_button_basic_js"],{

/***/ "./ui/components/docs/button/basic.js":
/*!********************************************!*\
  !*** ./ui/components/docs/button/basic.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
const testIcon = 'file-image';
const toggledIconName = 'file-document';
const plusIcon = 'plus';
const minusIcon = 'minus';
function appendButton(button) {
    document.querySelector('#container')?.appendChild(button);
}
function appendToToolbar(element) {
    document.querySelector('#toolbar')?.appendChild(element);
}
function appendToSmallToolbar(element) {
    document.querySelector('#small-toolbar')?.appendChild(element);
}
// Primary
const primaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
};
primaryButton.innerText = 'Click me';
primaryButton.title = 'Custom title';
primaryButton.onclick = () => alert('clicked');
appendButton(primaryButton);
// Primary (forced active)
const forcedActive = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
forcedActive.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    active: true,
};
forcedActive.innerText = 'Forced active';
forcedActive.onclick = () => alert('clicked');
appendButton(forcedActive);
// Primary (forced spinner)
const forcedSpinner = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
forcedSpinner.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    spinner: true,
};
forcedSpinner.innerText = 'Forced spinner';
forcedSpinner.onclick = () => alert('clicked');
appendButton(forcedSpinner);
// Secondary
const secondarymicroButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondarymicroButton.innerText = 'Click me';
secondarymicroButton.onclick = () => alert('clicked');
secondarymicroButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    size: "MICRO" /* Buttons.Button.Size.MICRO */,
};
appendButton(secondarymicroButton);
// Secondary
const secondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryButton.innerText = 'Click me';
secondaryButton.onclick = () => alert('clicked');
secondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
};
appendButton(secondaryButton);
// Secondary spinner
const secondarySpinnerButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondarySpinnerButton.innerText = 'Click me';
secondarySpinnerButton.onclick = () => alert('clicked');
secondarySpinnerButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    spinner: true,
};
appendButton(secondarySpinnerButton);
// Secondary spinner
const textButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
textButton.innerText = 'Click me';
textButton.onclick = () => alert('clicked');
textButton.data = {
    variant: "text" /* Buttons.Button.Variant.TEXT */,
};
appendButton(textButton);
// Primary
const disabledPrimaryButtons = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledPrimaryButtons.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    disabled: true,
};
disabledPrimaryButtons.innerText = 'Cannot click me';
disabledPrimaryButtons.onclick = () => alert('clicked');
appendButton(disabledPrimaryButtons);
// Primary spinner
const disabledSpinnerPrimaryButtons = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSpinnerPrimaryButtons.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    disabled: true,
    spinner: true,
};
disabledSpinnerPrimaryButtons.innerText = 'Cannot click me';
disabledSpinnerPrimaryButtons.onclick = () => alert('clicked');
appendButton(disabledSpinnerPrimaryButtons);
// Secondary
const disabledSecondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSecondaryButton.innerText = 'Cannot click me';
disabledSecondaryButton.onclick = () => alert('clicked');
disabledSecondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    disabled: true,
};
appendButton(disabledSecondaryButton);
// Secondary spinner
const disabledSpinnerSecondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSpinnerSecondaryButton.innerText = 'Cannot click me';
disabledSpinnerSecondaryButton.onclick = () => alert('clicked');
disabledSpinnerSecondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    disabled: true,
    spinner: true,
};
appendButton(disabledSpinnerSecondaryButton);
// Primary Icon
const primaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconButton.innerText = 'Click me';
primaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    iconName: testIcon,
};
primaryIconButton.onclick = () => alert('clicked');
appendButton(primaryIconButton);
// Secondary Icon
const secondaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryIconButton.innerText = 'Focus the first button';
secondaryIconButton.onclick = () => {
    primaryButton.focus();
};
secondaryIconButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    iconName: testIcon,
};
appendButton(secondaryIconButton);
// Text Icon
const textIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
textIconButton.innerText = 'Click me';
textIconButton.onclick = () => alert('clicked');
textIconButton.data = {
    variant: "text" /* Buttons.Button.Variant.TEXT */,
    iconName: testIcon,
};
appendButton(textIconButton);
// Secondary Icon Micro
const secondaryMicroIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryMicroIconButton.innerText = 'Click me';
secondaryMicroIconButton.onclick = () => {
    primaryButton.focus();
};
secondaryMicroIconButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    iconName: testIcon,
    size: "MICRO" /* Buttons.Button.Size.MICRO */,
};
appendButton(secondaryMicroIconButton);
// Primary Icon Only
const primaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconOnlyButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    iconName: testIcon,
};
primaryIconOnlyButton.onclick = () => alert('clicked');
primaryIconOnlyButton.style.width = '24px';
appendButton(primaryIconOnlyButton);
// Primary Icon with a name
const primaryIconByNameButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconByNameButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    iconName: 'file-image',
};
primaryIconByNameButton.onclick = () => alert('clicked');
primaryIconByNameButton.innerHTML = 'Icon by name';
appendButton(primaryIconByNameButton);
// Secondary Icon Only
const secondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryIconOnlyButton.onclick = () => alert('clicked');
secondaryIconOnlyButton.style.width = '24px';
secondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    iconName: testIcon,
};
appendButton(secondaryIconOnlyButton);
// Primary Toggle
const primaryToggleIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryToggleIconButton.style.width = '24px';
primaryToggleIconButton.data = {
    variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */,
    toggleType: "primary-toggle" /* Buttons.Button.ToggleType.PRIMARY */,
    iconName: testIcon,
    toggledIconName: toggledIconName,
    toggled: false,
};
appendButton(primaryToggleIconButton);
// Red Toggle
const redToggleIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
redToggleIconButton.style.width = '24px';
redToggleIconButton.data = {
    variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */,
    toggleType: "red-toggle" /* Buttons.Button.ToggleType.RED */,
    iconName: testIcon,
    toggledIconName: toggledIconName,
    toggled: true,
};
appendButton(redToggleIconButton);
// Small Primary Icon
const smallPrimaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallPrimaryIconButton.innerText = 'Click me';
smallPrimaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */,
};
smallPrimaryIconButton.onclick = () => alert('clicked');
appendButton(smallPrimaryIconButton);
// Small Secondary Icon Only
const smallSecondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallSecondaryIconOnlyButton.onclick = () => alert('clicked');
smallSecondaryIconOnlyButton.style.width = '18px';
smallSecondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */,
};
appendButton(smallSecondaryIconOnlyButton);
// Disabled Primary Icon
const disabledPrimaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledPrimaryIconButton.innerText = 'Cannot click me';
disabledPrimaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */,
    disabled: true,
};
disabledPrimaryIconButton.onclick = () => alert('clicked');
appendButton(disabledPrimaryIconButton);
// Small Disabled Secondary Icon Only
const disabledSecondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSecondaryIconOnlyButton.onclick = () => alert('clicked');
disabledSecondaryIconOnlyButton.style.width = '18px';
disabledSecondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */,
    disabled: true,
};
appendButton(disabledSecondaryIconOnlyButton);
// Round Button
const roundButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
roundButton.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */,
    iconName: testIcon,
};
roundButton.title = 'Round Button';
roundButton.onclick = () => alert('clicked');
appendButton(roundButton);
// Disabled Round Button
const roundButtonDisabled = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
roundButtonDisabled.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */,
    iconName: testIcon,
    disabled: true,
};
roundButtonDisabled.title = 'Disabled Round Button';
roundButtonDisabled.onclick = () => alert('clicked');
appendButton(roundButtonDisabled);
// Small Round Buttons
const roundIcons = [
    { iconName: testIcon },
    { iconName: plusIcon },
    { iconName: minusIcon },
];
for (const roundIcon of roundIcons) {
    const smallRoundButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
    smallRoundButton.data = {
        variant: "icon" /* Buttons.Button.Variant.ICON */,
        size: "SMALL" /* Buttons.Button.Size.SMALL */,
        ...roundIcon,
    };
    smallRoundButton.title = 'Small Round Button';
    smallRoundButton.onclick = () => alert('clicked');
    appendButton(smallRoundButton);
}
// Small Disabled Round Button
const smallRoundButtonDisabled = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallRoundButtonDisabled.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */,
    iconName: testIcon,
    disabled: true,
    size: "SMALL" /* Buttons.Button.Size.SMALL */,
};
smallRoundButtonDisabled.title = 'Small Disabled Round Button';
smallRoundButtonDisabled.onclick = () => alert('clicked');
appendButton(smallRoundButtonDisabled);
// Tonal
const tonalButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
tonalButton.data = {
    variant: "tonal" /* Buttons.Button.Variant.TONAL */,
};
tonalButton.innerText = 'Click me';
tonalButton.title = 'Custom title';
tonalButton.onclick = () => alert('clicked');
appendButton(tonalButton);
for (let i = 0; i < 6; i++) {
    // Regular Toolbar Button
    const toolbarButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
    toolbarButton.onclick = () => alert('clicked');
    toolbarButton.data = {
        variant: i % 2 === 1 ? "toolbar" /* Buttons.Button.Variant.TOOLBAR */ : "primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */,
        iconName: testIcon,
    };
    appendToToolbar(toolbarButton);
    if (i % 3 === 1) {
        const sep = document.createElement('div');
        sep.classList.add('separator');
        appendToToolbar(sep);
    }
}
// Disabled Toolbar Button
const toolbarButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
toolbarButton.onclick = () => alert('clicked');
toolbarButton.data = {
    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
    iconName: testIcon,
    disabled: true,
};
appendToToolbar(toolbarButton);
for (let i = 0; i < 6; i++) {
    // Small Toolbar Button
    const smallToolbarButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
    smallToolbarButton.onclick = () => alert('clicked');
    smallToolbarButton.data = {
        variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */,
        size: "SMALL" /* Buttons.Button.Size.SMALL */,
        iconName: testIcon,
    };
    appendToSmallToolbar(smallToolbarButton);
    if (i % 3 === 1) {
        const sep = document.createElement('div');
        sep.classList.add('separator');
        appendToSmallToolbar(sep);
    }
}
// Submit Button
const submitButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
submitButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */,
    type: 'submit',
};
submitButton.innerText = 'Submit';
document.querySelector('#form')?.append(submitButton);
// Reset Button
const resetButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
resetButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */,
    type: 'reset',
};
resetButton.innerText = 'Reset';
document.querySelector('#form')?.append(resetButton);
//# sourceMappingURL=basic.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

}]);