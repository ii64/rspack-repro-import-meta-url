"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_RadioSetting_js"], {
"./panels/lighthouse/RadioSetting.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RadioSetting: function() { return RadioSetting; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  <label $="label" class="lighthouse-radio">\n  <input $="input" type="radio" value=',
        " name=",
        '>\n  <span $="span" class="lighthouse-radio-text">',
        "</span>\n  </label>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}

var RadioSetting = /*#__PURE__*/ function() {
    "use strict";
    function RadioSetting(options, setting, description) {
        _class_call_check(this, RadioSetting);
        _define_property(this, "setting", void 0);
        _define_property(this, "options", void 0);
        _define_property(this, "element", void 0);
        _define_property(this, "radioElements", void 0);
        _define_property(this, "ignoreChangeEvents", void 0);
        _define_property(this, "selectedIndex", void 0);
        this.setting = setting;
        this.options = options;
        this.element = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.setDescription(this.element, description);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.markAsRadioGroup(this.element);
        this.radioElements = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = this.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var option = _step.value;
                var _option_tooltip;
                var fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Fragment.Fragment.build(_templateObject(), option.value, setting.name, option.label());
                this.element.appendChild(fragment.element());
                var tooltip = ((_option_tooltip = option.tooltip) === null || _option_tooltip === void 0 ? void 0 : _option_tooltip.call(option)) || description;
                if (description) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('input'), tooltip);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip.Tooltip.install(fragment.$('span'), tooltip);
                }
                var radioElement = fragment.$('input');
                radioElement.addEventListener('change', this.valueChanged.bind(this));
                this.radioElements.push(radioElement);
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
        this.ignoreChangeEvents = false;
        this.selectedIndex = -1;
        setting.addChangeListener(this.settingChanged, this);
        this.settingChanged();
    }
    _create_class(RadioSetting, [
        {
            key: "updateUI",
            value: function updateUI() {
                this.ignoreChangeEvents = true;
                this.radioElements[this.selectedIndex].checked = true;
                this.ignoreChangeEvents = false;
            }
        },
        {
            key: "settingChanged",
            value: function settingChanged() {
                var value = this.setting.get();
                this.selectedIndex = this.options.findIndex(function(option) {
                    return option.value === value;
                });
                this.updateUI();
            }
        },
        {
            key: "valueChanged",
            value: function valueChanged(_event) {
                if (this.ignoreChangeEvents) {
                    return;
                }
                var selectedRadio = this.radioElements.find(function(radio) {
                    return radio.checked;
                });
                if (!selectedRadio) {
                    return;
                }
                this.setting.set(selectedRadio.value);
            }
        }
    ]);
    return RadioSetting;
} //# sourceMappingURL=RadioSetting.js.map
();


}),

}]);