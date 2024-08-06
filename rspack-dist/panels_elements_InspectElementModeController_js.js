"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_InspectElementModeController_js"], {
"./panels/elements/InspectElementModeController.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectElementModeController: function() { return InspectElementModeController; },
  ToggleSearchActionDelegate: function() { return ToggleSearchActionDelegate; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _class_call_check(instance, Constructor) {
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






var inspectElementModeController;
var InspectElementModeController = /*#__PURE__*/ function() {
    "use strict";
    function InspectElementModeController() {
        var _this = this;
        _class_call_check(this, InspectElementModeController);
        _define_property(this, "toggleSearchAction", void 0);
        _define_property(this, "mode", void 0);
        _define_property(this, "showDetailedInspectTooltipSetting", void 0);
        this.toggleSearchAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ActionRegistry.ActionRegistry.instance().getAction('elements.toggle-element-search');
        this.mode = "none" /* Protocol.Overlay.InspectMode.None */ ;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */ , this.suspendStateChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, "InspectModeExited" /* SDK.OverlayModel.Events.ExitedInspectMode */ , function() {
            return _this.setMode("none" /* Protocol.Overlay.InspectMode.None */ );
        }, undefined, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.setInspectNodeHandler(this.inspectNode.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, this, {
            scoped: true
        });
        this.showDetailedInspectTooltipSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-detailed-inspect-tooltip');
        this.showDetailedInspectTooltipSetting.addChangeListener(this.showDetailedInspectTooltipChanged.bind(this));
        document.addEventListener('keydown', function(event) {
            if (event.keyCode !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardShortcut.Keys.Esc.code) {
                return;
            }
            if (!_this.isInInspectElementMode()) {
                return;
            }
            _this.setMode("none" /* Protocol.Overlay.InspectMode.None */ );
            event.consume(true);
            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.logKeyDown(null, event, 'cancel-inspect-mode');
        }, true);
    }
    _create_class(InspectElementModeController, [
        {
            key: "modelAdded",
            value: function modelAdded(overlayModel) {
                // When DevTools are opening in the inspect element mode, the first target comes in
                // much later than the InspectorFrontendAPI.enterInspectElementMode event.
                if (this.mode === "none" /* Protocol.Overlay.InspectMode.None */ ) {
                    return;
                }
                void overlayModel.setInspectMode(this.mode, this.showDetailedInspectTooltipSetting.get());
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(_overlayModel) {}
        },
        {
            key: "isInInspectElementMode",
            value: function isInInspectElementMode() {
                return this.mode !== "none" /* Protocol.Overlay.InspectMode.None */ ;
            }
        },
        {
            key: "toggleInspectMode",
            value: function toggleInspectMode() {
                var mode;
                if (this.isInInspectElementMode()) {
                    mode = "none" /* Protocol.Overlay.InspectMode.None */ ;
                } else {
                    mode = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom').get() ? "searchForUAShadowDOM" /* Protocol.Overlay.InspectMode.SearchForUAShadowDOM */  : "searchForNode" /* Protocol.Overlay.InspectMode.SearchForNode */ ;
                }
                this.setMode(mode);
            }
        },
        {
            key: "captureScreenshotMode",
            value: function captureScreenshotMode() {
                this.setMode("captureAreaScreenshot" /* Protocol.Overlay.InspectMode.CaptureAreaScreenshot */ );
            }
        },
        {
            key: "setMode",
            value: function setMode(mode) {
                if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
                    return;
                }
                this.mode = mode;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var overlayModel = _step.value;
                        void overlayModel.setInspectMode(mode, this.showDetailedInspectTooltipSetting.get());
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
                this.toggleSearchAction.setToggled(this.isInInspectElementMode());
            }
        },
        {
            key: "suspendStateChanged",
            value: function suspendStateChanged() {
                if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().allTargetsSuspended()) {
                    return;
                }
                this.mode = "none" /* Protocol.Overlay.InspectMode.None */ ;
                this.toggleSearchAction.setToggled(false);
            }
        },
        {
            key: "inspectNode",
            value: function inspectNode(node) {
                void _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_5__.ElementsPanel.instance().revealAndSelectNode(node, true, true);
            }
        },
        {
            key: "showDetailedInspectTooltipChanged",
            value: function showDetailedInspectTooltipChanged() {
                this.setMode(this.mode);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var forceNew = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: false
                }).forceNew;
                if (!inspectElementModeController || forceNew) {
                    inspectElementModeController = new InspectElementModeController();
                }
                return inspectElementModeController;
            }
        }
    ]);
    return InspectElementModeController;
}();
var ToggleSearchActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ToggleSearchActionDelegate() {
        _class_call_check(this, ToggleSearchActionDelegate);
    }
    _create_class(ToggleSearchActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.queryParam('isSharedWorker')) {
                    return false;
                }
                inspectElementModeController = InspectElementModeController.instance();
                if (!inspectElementModeController) {
                    return false;
                }
                if (actionId === 'elements.toggle-element-search') {
                    inspectElementModeController.toggleInspectMode();
                } else if (actionId === 'elements.capture-area-screenshot') {
                    inspectElementModeController.captureScreenshotMode();
                }
                return true;
            }
        }
    ]);
    return ToggleSearchActionDelegate;
} //# sourceMappingURL=InspectElementModeController.js.map
();


}),

}]);