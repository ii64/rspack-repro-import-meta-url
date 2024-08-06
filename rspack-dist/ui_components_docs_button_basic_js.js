"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_button_basic_js"], {
"./ui/components/docs/button/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var _document_querySelector, _document_querySelector1;



await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.initializeGlobalVars();
var testIcon = 'file-image';
var toggledIconName = 'file-document';
var plusIcon = 'plus';
var minusIcon = 'minus';
function appendButton(button) {
    var _document_querySelector;
    (_document_querySelector = document.querySelector('#container')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.appendChild(button);
}
function appendToToolbar(element) {
    var _document_querySelector;
    (_document_querySelector = document.querySelector('#toolbar')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.appendChild(element);
}
function appendToSmallToolbar(element) {
    var _document_querySelector;
    (_document_querySelector = document.querySelector('#small-toolbar')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.appendChild(element);
}
// Primary
var primaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
};
primaryButton.innerText = 'Click me';
primaryButton.title = 'Custom title';
primaryButton.onclick = function() {
    return alert('clicked');
};
appendButton(primaryButton);
// Primary (forced active)
var forcedActive = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
forcedActive.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    active: true
};
forcedActive.innerText = 'Forced active';
forcedActive.onclick = function() {
    return alert('clicked');
};
appendButton(forcedActive);
// Primary (forced spinner)
var forcedSpinner = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
forcedSpinner.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    spinner: true
};
forcedSpinner.innerText = 'Forced spinner';
forcedSpinner.onclick = function() {
    return alert('clicked');
};
appendButton(forcedSpinner);
// Secondary
var secondarymicroButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondarymicroButton.innerText = 'Click me';
secondarymicroButton.onclick = function() {
    return alert('clicked');
};
secondarymicroButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    size: "MICRO" /* Buttons.Button.Size.MICRO */ 
};
appendButton(secondarymicroButton);
// Secondary
var secondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryButton.innerText = 'Click me';
secondaryButton.onclick = function() {
    return alert('clicked');
};
secondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ 
};
appendButton(secondaryButton);
// Secondary spinner
var secondarySpinnerButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondarySpinnerButton.innerText = 'Click me';
secondarySpinnerButton.onclick = function() {
    return alert('clicked');
};
secondarySpinnerButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    spinner: true
};
appendButton(secondarySpinnerButton);
// Secondary spinner
var textButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
textButton.innerText = 'Click me';
textButton.onclick = function() {
    return alert('clicked');
};
textButton.data = {
    variant: "text" /* Buttons.Button.Variant.TEXT */ 
};
appendButton(textButton);
// Primary
var disabledPrimaryButtons = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledPrimaryButtons.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    disabled: true
};
disabledPrimaryButtons.innerText = 'Cannot click me';
disabledPrimaryButtons.onclick = function() {
    return alert('clicked');
};
appendButton(disabledPrimaryButtons);
// Primary spinner
var disabledSpinnerPrimaryButtons = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSpinnerPrimaryButtons.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    disabled: true,
    spinner: true
};
disabledSpinnerPrimaryButtons.innerText = 'Cannot click me';
disabledSpinnerPrimaryButtons.onclick = function() {
    return alert('clicked');
};
appendButton(disabledSpinnerPrimaryButtons);
// Secondary
var disabledSecondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSecondaryButton.innerText = 'Cannot click me';
disabledSecondaryButton.onclick = function() {
    return alert('clicked');
};
disabledSecondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    disabled: true
};
appendButton(disabledSecondaryButton);
// Secondary spinner
var disabledSpinnerSecondaryButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSpinnerSecondaryButton.innerText = 'Cannot click me';
disabledSpinnerSecondaryButton.onclick = function() {
    return alert('clicked');
};
disabledSpinnerSecondaryButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    disabled: true,
    spinner: true
};
appendButton(disabledSpinnerSecondaryButton);
// Primary Icon
var primaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconButton.innerText = 'Click me';
primaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    iconName: testIcon
};
primaryIconButton.onclick = function() {
    return alert('clicked');
};
appendButton(primaryIconButton);
// Secondary Icon
var secondaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryIconButton.innerText = 'Focus the first button';
secondaryIconButton.onclick = function() {
    primaryButton.focus();
};
secondaryIconButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    iconName: testIcon
};
appendButton(secondaryIconButton);
// Text Icon
var textIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
textIconButton.innerText = 'Click me';
textIconButton.onclick = function() {
    return alert('clicked');
};
textIconButton.data = {
    variant: "text" /* Buttons.Button.Variant.TEXT */ ,
    iconName: testIcon
};
appendButton(textIconButton);
// Secondary Icon Micro
var secondaryMicroIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryMicroIconButton.innerText = 'Click me';
secondaryMicroIconButton.onclick = function() {
    primaryButton.focus();
};
secondaryMicroIconButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    iconName: testIcon,
    size: "MICRO" /* Buttons.Button.Size.MICRO */ 
};
appendButton(secondaryMicroIconButton);
// Primary Icon Only
var primaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconOnlyButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    iconName: testIcon
};
primaryIconOnlyButton.onclick = function() {
    return alert('clicked');
};
primaryIconOnlyButton.style.width = '24px';
appendButton(primaryIconOnlyButton);
// Primary Icon with a name
var primaryIconByNameButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryIconByNameButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    iconName: 'file-image'
};
primaryIconByNameButton.onclick = function() {
    return alert('clicked');
};
primaryIconByNameButton.innerHTML = 'Icon by name';
appendButton(primaryIconByNameButton);
// Secondary Icon Only
var secondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
secondaryIconOnlyButton.onclick = function() {
    return alert('clicked');
};
secondaryIconOnlyButton.style.width = '24px';
secondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    iconName: testIcon
};
appendButton(secondaryIconOnlyButton);
// Primary Toggle
var primaryToggleIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
primaryToggleIconButton.style.width = '24px';
primaryToggleIconButton.data = {
    variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */ ,
    toggleType: "primary-toggle" /* Buttons.Button.ToggleType.PRIMARY */ ,
    iconName: testIcon,
    toggledIconName: toggledIconName,
    toggled: false
};
appendButton(primaryToggleIconButton);
// Red Toggle
var redToggleIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
redToggleIconButton.style.width = '24px';
redToggleIconButton.data = {
    variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */ ,
    toggleType: "red-toggle" /* Buttons.Button.ToggleType.RED */ ,
    iconName: testIcon,
    toggledIconName: toggledIconName,
    toggled: true
};
appendButton(redToggleIconButton);
// Small Primary Icon
var smallPrimaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallPrimaryIconButton.innerText = 'Click me';
smallPrimaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */ 
};
smallPrimaryIconButton.onclick = function() {
    return alert('clicked');
};
appendButton(smallPrimaryIconButton);
// Small Secondary Icon Only
var smallSecondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallSecondaryIconOnlyButton.onclick = function() {
    return alert('clicked');
};
smallSecondaryIconOnlyButton.style.width = '18px';
smallSecondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */ 
};
appendButton(smallSecondaryIconOnlyButton);
// Disabled Primary Icon
var disabledPrimaryIconButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledPrimaryIconButton.innerText = 'Cannot click me';
disabledPrimaryIconButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
    disabled: true
};
disabledPrimaryIconButton.onclick = function() {
    return alert('clicked');
};
appendButton(disabledPrimaryIconButton);
// Small Disabled Secondary Icon Only
var disabledSecondaryIconOnlyButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
disabledSecondaryIconOnlyButton.onclick = function() {
    return alert('clicked');
};
disabledSecondaryIconOnlyButton.style.width = '18px';
disabledSecondaryIconOnlyButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    iconName: testIcon,
    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
    disabled: true
};
appendButton(disabledSecondaryIconOnlyButton);
// Round Button
var roundButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
roundButton.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
    iconName: testIcon
};
roundButton.title = 'Round Button';
roundButton.onclick = function() {
    return alert('clicked');
};
appendButton(roundButton);
// Disabled Round Button
var roundButtonDisabled = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
roundButtonDisabled.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
    iconName: testIcon,
    disabled: true
};
roundButtonDisabled.title = 'Disabled Round Button';
roundButtonDisabled.onclick = function() {
    return alert('clicked');
};
appendButton(roundButtonDisabled);
// Small Round Buttons
var roundIcons = [
    {
        iconName: testIcon
    },
    {
        iconName: plusIcon
    },
    {
        iconName: minusIcon
    }
];
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = roundIcons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var roundIcon = _step.value;
        var smallRoundButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
        smallRoundButton.data = _object_spread({
            variant: "icon" /* Buttons.Button.Variant.ICON */ ,
            size: "SMALL" /* Buttons.Button.Size.SMALL */ 
        }, roundIcon);
        smallRoundButton.title = 'Small Round Button';
        smallRoundButton.onclick = function() {
            return alert('clicked');
        };
        appendButton(smallRoundButton);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
// Small Disabled Round Button
var smallRoundButtonDisabled = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
smallRoundButtonDisabled.data = {
    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
    iconName: testIcon,
    disabled: true,
    size: "SMALL" /* Buttons.Button.Size.SMALL */ 
};
smallRoundButtonDisabled.title = 'Small Disabled Round Button';
smallRoundButtonDisabled.onclick = function() {
    return alert('clicked');
};
appendButton(smallRoundButtonDisabled);
// Tonal
var tonalButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
tonalButton.data = {
    variant: "tonal" /* Buttons.Button.Variant.TONAL */ 
};
tonalButton.innerText = 'Click me';
tonalButton.title = 'Custom title';
tonalButton.onclick = function() {
    return alert('clicked');
};
appendButton(tonalButton);
for(var i = 0; i < 6; i++){
    // Regular Toolbar Button
    var toolbarButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
    toolbarButton.onclick = function() {
        return alert('clicked');
    };
    toolbarButton.data = {
        variant: i % 2 === 1 ? "toolbar" /* Buttons.Button.Variant.TOOLBAR */  : "primary_toolbar" /* Buttons.Button.Variant.PRIMARY_TOOLBAR */ ,
        iconName: testIcon
    };
    appendToToolbar(toolbarButton);
    if (i % 3 === 1) {
        var sep = document.createElement('div');
        sep.classList.add('separator');
        appendToToolbar(sep);
    }
}
// Disabled Toolbar Button
var toolbarButton1 = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
toolbarButton1.onclick = function() {
    return alert('clicked');
};
toolbarButton1.data = {
    variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
    iconName: testIcon,
    disabled: true
};
appendToToolbar(toolbarButton1);
for(var i1 = 0; i1 < 6; i1++){
    // Small Toolbar Button
    var smallToolbarButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
    smallToolbarButton.onclick = function() {
        return alert('clicked');
    };
    smallToolbarButton.data = {
        variant: "toolbar" /* Buttons.Button.Variant.TOOLBAR */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: testIcon
    };
    appendToSmallToolbar(smallToolbarButton);
    if (i1 % 3 === 1) {
        var sep1 = document.createElement('div');
        sep1.classList.add('separator');
        appendToSmallToolbar(sep1);
    }
}
// Submit Button
var submitButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
submitButton.data = {
    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
    type: 'submit'
};
submitButton.innerText = 'Submit';
(_document_querySelector = document.querySelector('#form')) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.append(submitButton);
// Reset Button
var resetButton = new _buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button();
resetButton.data = {
    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
    type: 'reset'
};
resetButton.innerText = 'Reset';
(_document_querySelector1 = document.querySelector('#form')) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.append(resetButton); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);