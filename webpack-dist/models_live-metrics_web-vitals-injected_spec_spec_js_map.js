(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_live-metrics_web-vitals-injected_spec_spec_js_map"],{

/***/ "./models/live-metrics/web-vitals-injected/spec/spec.js.map":
/*!******************************************************************!*\
  !*** ./models/live-metrics/web-vitals-injected/spec/spec.js.map ***!
  \******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"spec.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/models/live-metrics/web-vitals-injected/spec/spec.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,CAAC,MAAM,kBAAkB,GAAG,sCAAsC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type INPAttribution, type MetricType} from '../../../../third_party/web-vitals/web-vitals.js';\\n\\nexport const EVENT_BINDING_NAME = '__chromium_devtools_metrics_reporter';\\n\\nexport type MetricChangeEvent = Pick<MetricType, 'name'|'value'>;\\n\\nexport interface LCPChangeEvent extends MetricChangeEvent {\\n  name: 'LCP';\\n  nodeIndex?: number;\\n}\\n\\nexport interface CLSChangeEvent extends MetricChangeEvent {\\n  name: 'CLS';\\n}\\n\\nexport interface INPChangeEvent extends MetricChangeEvent {\\n  name: 'INP';\\n  interactionType: INPAttribution['interactionType'];\\n  nodeIndex?: number;\\n}\\n\\nexport interface InteractionEvent {\\n  name: 'Interaction';\\n  interactionType: INPAttribution['interactionType'];\\n  interactionId: number;\\n  duration: number;\\n  nodeIndex?: number;\\n}\\n\\nexport interface ResetEvent {\\n  name: 'reset';\\n}\\n\\nexport type WebVitalsEvent = LCPChangeEvent|CLSChangeEvent|INPChangeEvent|InteractionEvent|ResetEvent;\\n\"]}");

/***/ })

}]);