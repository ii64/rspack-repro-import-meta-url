"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_settings_components_SyncSection_test_js"], {
"./panels/settings/components/SyncSection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/settings/settings.js */ "./ui/components/settings/settings.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/settings/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}





function renderSyncSection(data) {
    return _renderSyncSection.apply(this, arguments);
}
function _renderSyncSection() {
    _renderSyncSection = _async_to_generator(function(data) {
        var section;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    section = new _components_js__WEBPACK_IMPORTED_MODULE_4__.SyncSection.SyncSection();
                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(section);
                    section.data = data;
                    return [
                        4,
                        _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance().done()
                    ];
                case 1:
                    _state.sent();
                    assert.isNotNull(section.shadowRoot);
                    return [
                        2,
                        {
                            section: section,
                            shadowRoot: section.shadowRoot
                        }
                    ];
            }
        });
    });
    return _renderSyncSection.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('SyncSection', function() {
    it('shows a warning when sync is not active', /*#__PURE__*/ _async_to_generator(function() {
        var syncSetting, shadowRoot, warning;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    syncSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('setting', true);
                    return [
                        4,
                        renderSyncSection({
                            syncInfo: {
                                isSyncActive: false
                            },
                            syncSetting: syncSetting
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    warning = shadowRoot.querySelector('.warning');
                    assert.instanceOf(warning, HTMLElement);
                    assert.include(warning.innerText, 'To turn this setting on');
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows a warning when sync is active but preferences bucket is not synced', /*#__PURE__*/ _async_to_generator(function() {
        var syncSetting, shadowRoot, warning;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    syncSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('setting', true);
                    return [
                        4,
                        renderSyncSection({
                            syncInfo: {
                                isSyncActive: true,
                                arePreferencesSynced: false
                            },
                            syncSetting: syncSetting
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    warning = shadowRoot.querySelector('.warning');
                    assert.instanceOf(warning, HTMLElement);
                    assert.include(warning.innerText, 'To turn this setting on');
                    return [
                        2
                    ];
            }
        });
    }));
    it('disables the checkbox when sync is not active', /*#__PURE__*/ _async_to_generator(function() {
        var syncSetting, shadowRoot, settingCheckbox, checkbox;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    syncSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('setting', true);
                    return [
                        4,
                        renderSyncSection({
                            syncInfo: {
                                isSyncActive: false
                            },
                            syncSetting: syncSetting
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    settingCheckbox = shadowRoot.querySelector('setting-checkbox');
                    assert.instanceOf(settingCheckbox, _ui_components_settings_settings_js__WEBPACK_IMPORTED_MODULE_3__.SettingCheckbox.SettingCheckbox);
                    assert.isNotNull(settingCheckbox.shadowRoot);
                    checkbox = settingCheckbox.shadowRoot.querySelector('input');
                    assert.instanceOf(checkbox, HTMLInputElement);
                    assert.isTrue(checkbox.disabled);
                    return [
                        2
                    ];
            }
        });
    }));
    it('shows the avatar and email of the logged in user when sync is active', /*#__PURE__*/ _async_to_generator(function() {
        var syncSetting, shadowRoot, image, email;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    syncSetting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('setting', true);
                    return [
                        4,
                        renderSyncSection({
                            syncInfo: {
                                isSyncActive: true,
                                arePreferencesSynced: true,
                                accountEmail: 'user@gmail.com',
                                accountImage: '<png encoded as base64>'
                            },
                            syncSetting: syncSetting
                        })
                    ];
                case 1:
                    shadowRoot = _state.sent().shadowRoot;
                    image = shadowRoot.querySelector('img');
                    assert.instanceOf(image, HTMLImageElement);
                    email = shadowRoot.querySelector('.account-email');
                    assert.instanceOf(email, HTMLElement);
                    assert.include(email.innerText, 'user@gmail.com');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SyncSection.test.js.map


}),
"./panels/settings/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SyncSection: function() { return /* reexport module object */ _SyncSection_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _SyncSection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SyncSection.js */ "./panels/settings/components/SyncSection.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=components.js.map


}),

}]);