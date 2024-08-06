"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_ModelHandlers_d_ts"], {
"./models/trace/handlers/ModelHandlers.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Animations: function() { return /* reexport module object */ _AnimationHandler_js__WEBPACK_IMPORTED_MODULE_0__; },
  AuctionWorklets: function() { return /* reexport module object */ _AuctionWorkletsHandler_js__WEBPACK_IMPORTED_MODULE_1__; },
  EnhancedTraces: function() { return /* reexport module object */ _EnhancedTracesHandler_js__WEBPACK_IMPORTED_MODULE_2__; },
  ExtensionTraceData: function() { return /* reexport module object */ _ExtensionTraceDataHandler_js__WEBPACK_IMPORTED_MODULE_3__; },
  Frames: function() { return /* reexport module object */ _FramesHandler_js__WEBPACK_IMPORTED_MODULE_4__; },
  GPU: function() { return /* reexport module object */ _GPUHandler_js__WEBPACK_IMPORTED_MODULE_5__; },
  ImagePainting: function() { return /* reexport module object */ _ImagePaintingHandler_js__WEBPACK_IMPORTED_MODULE_6__; },
  Initiators: function() { return /* reexport module object */ _InitiatorsHandler_js__WEBPACK_IMPORTED_MODULE_7__; },
  Invalidations: function() { return /* reexport module object */ _InvalidationsHandler_js__WEBPACK_IMPORTED_MODULE_8__; },
  LargestImagePaint: function() { return /* reexport module object */ _LargestImagePaintHandler_js__WEBPACK_IMPORTED_MODULE_9__; },
  LargestTextPaint: function() { return /* reexport module object */ _LargestTextPaintHandler_js__WEBPACK_IMPORTED_MODULE_10__; },
  LayerTree: function() { return /* reexport module object */ _LayerTreeHandler_js__WEBPACK_IMPORTED_MODULE_11__; },
  LayoutShifts: function() { return /* reexport module object */ _LayoutShiftsHandler_js__WEBPACK_IMPORTED_MODULE_12__; },
  Memory: function() { return /* reexport module object */ _MemoryHandler_js__WEBPACK_IMPORTED_MODULE_13__; },
  Meta: function() { return /* reexport module object */ _MetaHandler_js__WEBPACK_IMPORTED_MODULE_14__; },
  NetworkRequests: function() { return /* reexport module object */ _NetworkRequestsHandler_js__WEBPACK_IMPORTED_MODULE_15__; },
  PageFrames: function() { return /* reexport module object */ _PageFramesHandler_js__WEBPACK_IMPORTED_MODULE_16__; },
  PageLoadMetrics: function() { return /* reexport module object */ _PageLoadMetricsHandler_js__WEBPACK_IMPORTED_MODULE_17__; },
  Renderer: function() { return /* reexport module object */ _RendererHandler_js__WEBPACK_IMPORTED_MODULE_18__; },
  Samples: function() { return /* reexport module object */ _SamplesHandler_js__WEBPACK_IMPORTED_MODULE_19__; },
  Screenshots: function() { return /* reexport module object */ _ScreenshotsHandler_js__WEBPACK_IMPORTED_MODULE_20__; },
  SelectorStats: function() { return /* reexport module object */ _SelectorStatsHandler_js__WEBPACK_IMPORTED_MODULE_21__; },
  UserInteractions: function() { return /* reexport module object */ _UserInteractionsHandler_js__WEBPACK_IMPORTED_MODULE_22__; },
  UserTimings: function() { return /* reexport module object */ _UserTimingsHandler_js__WEBPACK_IMPORTED_MODULE_23__; },
  Warnings: function() { return /* reexport module object */ _WarningsHandler_js__WEBPACK_IMPORTED_MODULE_24__; },
  Workers: function() { return /* reexport module object */ _WorkersHandler_js__WEBPACK_IMPORTED_MODULE_25__; }
});
/* harmony import */var _AnimationHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationHandler.js */ "./models/trace/handlers/AnimationHandler.js");
/* harmony import */var _AuctionWorkletsHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuctionWorkletsHandler.js */ "./models/trace/handlers/AuctionWorkletsHandler.js");
/* harmony import */var _EnhancedTracesHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnhancedTracesHandler.js */ "./models/trace/handlers/EnhancedTracesHandler.js");
/* harmony import */var _ExtensionTraceDataHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExtensionTraceDataHandler.js */ "./models/trace/handlers/ExtensionTraceDataHandler.js");
/* harmony import */var _FramesHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FramesHandler.js */ "./models/trace/handlers/FramesHandler.js");
/* harmony import */var _GPUHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GPUHandler.js */ "./models/trace/handlers/GPUHandler.js");
/* harmony import */var _ImagePaintingHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImagePaintingHandler.js */ "./models/trace/handlers/ImagePaintingHandler.js");
/* harmony import */var _InitiatorsHandler_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./InitiatorsHandler.js */ "./models/trace/handlers/InitiatorsHandler.js");
/* harmony import */var _InvalidationsHandler_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InvalidationsHandler.js */ "./models/trace/handlers/InvalidationsHandler.js");
/* harmony import */var _LargestImagePaintHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LargestImagePaintHandler.js */ "./models/trace/handlers/LargestImagePaintHandler.js");
/* harmony import */var _LargestTextPaintHandler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LargestTextPaintHandler.js */ "./models/trace/handlers/LargestTextPaintHandler.js");
/* harmony import */var _LayerTreeHandler_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayerTreeHandler.js */ "./models/trace/handlers/LayerTreeHandler.js");
/* harmony import */var _LayoutShiftsHandler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LayoutShiftsHandler.js */ "./models/trace/handlers/LayoutShiftsHandler.js");
/* harmony import */var _MemoryHandler_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MemoryHandler.js */ "./models/trace/handlers/MemoryHandler.js");
/* harmony import */var _MetaHandler_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MetaHandler.js */ "./models/trace/handlers/MetaHandler.js");
/* harmony import */var _NetworkRequestsHandler_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./NetworkRequestsHandler.js */ "./models/trace/handlers/NetworkRequestsHandler.js");
/* harmony import */var _PageFramesHandler_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PageFramesHandler.js */ "./models/trace/handlers/PageFramesHandler.js");
/* harmony import */var _PageLoadMetricsHandler_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./PageLoadMetricsHandler.js */ "./models/trace/handlers/PageLoadMetricsHandler.js");
/* harmony import */var _RendererHandler_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RendererHandler.js */ "./models/trace/handlers/RendererHandler.js");
/* harmony import */var _SamplesHandler_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SamplesHandler.js */ "./models/trace/handlers/SamplesHandler.js");
/* harmony import */var _ScreenshotsHandler_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ScreenshotsHandler.js */ "./models/trace/handlers/ScreenshotsHandler.js");
/* harmony import */var _SelectorStatsHandler_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SelectorStatsHandler.js */ "./models/trace/handlers/SelectorStatsHandler.js");
/* harmony import */var _UserInteractionsHandler_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./UserInteractionsHandler.js */ "./models/trace/handlers/UserInteractionsHandler.js");
/* harmony import */var _UserTimingsHandler_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./UserTimingsHandler.js */ "./models/trace/handlers/UserTimingsHandler.js");
/* harmony import */var _WarningsHandler_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./WarningsHandler.js */ "./models/trace/handlers/WarningsHandler.js");
/* harmony import */var _WorkersHandler_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./WorkersHandler.js */ "./models/trace/handlers/WorkersHandler.js");






















































}),

}]);