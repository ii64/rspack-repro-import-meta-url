"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_layers_LayersPanel_ts"],{

/***/ "./src/panels/layers/LayerPaintProfilerView.ts":
/*!*****************************************************!*\
  !*** ./src/panels/layers/LayerPaintProfilerView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerPaintProfilerView: () => (/* binding */ LayerPaintProfilerView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer_viewer/layer_viewer.js */ "./src/panels/layer_viewer/layer_viewer.ts");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class LayerPaintProfilerView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.SplitWidget.SplitWidget {
    constructor(showImageCallback) {
        super(true, false);
        Object.defineProperty(this, "logTreeView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paintProfilerView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.pane('layers.paint-profiler').track({ resize: true })}`);
        this.logTreeView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerCommandLogView();
        this.setSidebarWidget(this.logTreeView);
        this.paintProfilerView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerView(showImageCallback);
        this.setMainWidget(this.paintProfilerView);
        this.paintProfilerView.addEventListener(_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.Events.WindowChanged, this.onWindowChanged, this);
        this.logTreeView.focus();
    }
    reset() {
        void this.paintProfilerView.setSnapshotAndLog(null, [], null);
    }
    profile(snapshot) {
        void snapshot.commandLog().then(log => setSnapshotAndLog.call(this, snapshot, log));
        function setSnapshotAndLog(snapshot, log) {
            this.logTreeView.setCommandLog(log || []);
            void this.paintProfilerView.setSnapshotAndLog(snapshot, log || [], null);
            if (snapshot) {
                snapshot.release();
            }
        }
    }
    setScale(scale) {
        this.paintProfilerView.setScale(scale);
    }
    onWindowChanged() {
        this.logTreeView.updateWindow(this.paintProfilerView.selectionWindow());
    }
}


/***/ }),

/***/ "./src/panels/layers/LayersPanel.ts":
/*!******************************************!*\
  !*** ./src/panels/layers/LayersPanel.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailsViewTabs: () => (/* binding */ DetailsViewTabs),
/* harmony export */   LayersPanel: () => (/* binding */ LayersPanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layer_viewer/layer_viewer.js */ "./src/panels/layer_viewer/layer_viewer.ts");
/* harmony import */ var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./src/panels/layers/LayerPaintProfilerView.ts");
/* harmony import */ var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./src/panels/layers/LayerTreeModel.ts");
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
 */







const UIStrings = {
    /**
     *@description Text for the details of something
     */
    details: 'Details',
    /**
     *@description Title of the Profiler tool
     */
    profiler: 'Profiler',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/layers/LayersPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let layersPanelInstance;
class LayersPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Panel.PanelWithSidebar {
    constructor() {
        super('layers', 225);
        Object.defineProperty(this, "model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layerViewHost", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layerTreeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rightSplitWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layers3DView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tabbedPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layerDetailsView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paintProfilerView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updateThrottler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "layerBeingProfiled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.model = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeTargets(this, { scoped: true });
        this.layerViewHost = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerViewHost.LayerViewHost();
        this.layerTreeOutline = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeOutline.LayerTreeOutline(this.layerViewHost);
        this.layerTreeOutline.addEventListener(_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeOutline.Events.PaintProfilerRequested, this.onPaintProfileRequested, this);
        this.panelSidebarElement().appendChild(this.layerTreeOutline.element);
        this.setDefaultFocusedElement(this.layerTreeOutline.element);
        this.rightSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget(false, true, 'layer-details-split-view-state');
        this.splitWidget().setMainWidget(this.rightSplitWidget);
        this.layers3DView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.Layers3DView.Layers3DView(this.layerViewHost);
        this.rightSplitWidget.setMainWidget(this.layers3DView);
        this.layers3DView.addEventListener(_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.Layers3DView.Events.PaintProfilerRequested, this.onPaintProfileRequested, this);
        this.layers3DView.addEventListener(_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.Layers3DView.Events.ScaleChanged, this.onScaleChanged, this);
        this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TabbedPane.TabbedPane();
        this.rightSplitWidget.setSidebarWidget(this.tabbedPane);
        this.layerDetailsView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerDetailsView.LayerDetailsView(this.layerViewHost);
        this.layerDetailsView.addEventListener(_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerDetailsView.Events.PaintProfilerRequested, this.onPaintProfileRequested, this);
        this.tabbedPane.appendTab(DetailsViewTabs.Details, i18nString(UIStrings.details), this.layerDetailsView);
        this.paintProfilerView = new _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_5__.LayerPaintProfilerView(this.showImage.bind(this));
        this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TabbedPane.Events.TabClosed, this.onTabClosed, this);
        this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
    }
    static instance(opts) {
        if (!layersPanelInstance || opts?.forceNew) {
            layersPanelInstance = new LayersPanel();
        }
        return layersPanelInstance;
    }
    focus() {
        this.layerTreeOutline.focus();
    }
    wasShown() {
        super.wasShown();
        if (this.model) {
            this.model.enable();
        }
    }
    willHide() {
        if (this.model) {
            void this.model.disable();
        }
        super.willHide();
    }
    targetAdded(target) {
        if (target !== target.outermostTarget()) {
            return;
        }
        this.model = target.model(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.LayerTreeModel);
        if (!this.model) {
            return;
        }
        this.model.addEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerTreeChanged, this.onLayerTreeUpdated, this);
        this.model.addEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerPainted, this.onLayerPainted, this);
        if (this.isShowing()) {
            this.model.enable();
            void this.update();
        }
    }
    targetRemoved(target) {
        if (!this.model || this.model.target() !== target) {
            return;
        }
        this.model.removeEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerTreeChanged, this.onLayerTreeUpdated, this);
        this.model.removeEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerPainted, this.onLayerPainted, this);
        void this.model.disable();
        this.model = null;
    }
    onLayerTreeUpdated() {
        void this.updateThrottler.schedule(this.update.bind(this));
    }
    update() {
        if (this.model) {
            this.layerViewHost.setLayerTree(this.model.layerTree());
            const resourceModel = this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
            if (resourceModel) {
                const mainFrame = resourceModel.mainFrame;
                if (mainFrame) {
                    const url = mainFrame.url;
                    // Add the currently visualized url as an attribute to make it accessibles to e2e tests
                    this.element.setAttribute('test-current-url', url);
                }
            }
        }
        return Promise.resolve();
    }
    onLayerPainted({ data: layer }) {
        if (!this.model) {
            return;
        }
        const selection = this.layerViewHost.selection();
        if (selection && selection.layer() === layer) {
            this.layerDetailsView.update();
        }
        this.layers3DView.updateLayerSnapshot(layer);
    }
    onPaintProfileRequested({ data: selection }) {
        void this.layers3DView.snapshotForSelection(selection).then(snapshotWithRect => {
            if (!snapshotWithRect) {
                return;
            }
            this.layerBeingProfiled = selection.layer();
            if (!this.tabbedPane.hasTab(DetailsViewTabs.Profiler)) {
                this.tabbedPane.appendTab(DetailsViewTabs.Profiler, i18nString(UIStrings.profiler), this.paintProfilerView, undefined, true, true);
            }
            this.tabbedPane.selectTab(DetailsViewTabs.Profiler);
            this.paintProfilerView.profile(snapshotWithRect.snapshot);
        });
    }
    onTabClosed(event) {
        if (event.data.tabId !== DetailsViewTabs.Profiler || !this.layerBeingProfiled) {
            return;
        }
        this.paintProfilerView.reset();
        this.layers3DView.showImageForLayer(this.layerBeingProfiled, undefined);
        this.layerBeingProfiled = null;
    }
    showImage(imageURL) {
        if (this.layerBeingProfiled) {
            this.layers3DView.showImageForLayer(this.layerBeingProfiled, imageURL);
        }
    }
    onScaleChanged(event) {
        this.paintProfilerView.setScale(event.data);
    }
}
const DetailsViewTabs = {
    Details: 'details',
    Profiler: 'profiler',
};


/***/ })

}]);