"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_layers_LayerPaintProfilerView_js"],{

/***/ "./panels/layers/LayerPaintProfilerView.js":
/*!*************************************************!*\
  !*** ./panels/layers/LayerPaintProfilerView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayerPaintProfilerView: () => (/* binding */ LayerPaintProfilerView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer_viewer/layer_viewer.js */ "./panels/layer_viewer/layer_viewer.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class LayerPaintProfilerView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.SplitWidget.SplitWidget {
    logTreeView;
    paintProfilerView;
    constructor(showImageCallback) {
        super(true, false);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.pane('layers.paint-profiler').track({ resize: true })}`);
        this.logTreeView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerCommandLogView();
        this.setSidebarWidget(this.logTreeView);
        this.paintProfilerView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerView(showImageCallback);
        this.setMainWidget(this.paintProfilerView);
        this.paintProfilerView.addEventListener("WindowChanged" /* LayerViewer.PaintProfilerView.Events.WindowChanged */, this.onWindowChanged, this);
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
//# sourceMappingURL=LayerPaintProfilerView.js.map

/***/ })

}]);