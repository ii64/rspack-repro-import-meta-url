(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderEvents_js_map"],{

/***/ "./panels/recorder/RecorderEvents.js.map":
/*!***********************************************!*\
  !*** ./panels/recorder/RecorderEvents.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"RecorderEvents.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/recorder/RecorderEvents.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,OAAO,mBAAoB,SAAQ,KAAK;IAC5C,MAAM,CAAU,SAAS,GAAG,gBAAgB,CAAC;IAE7C;QACE,KAAK,CAAC,mBAAmB,CAAC,SAAS,EAAE,EAAC,OAAO,EAAE,IAAI,EAAE,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;IACxE,CAAC;;AAGH,MAAM,OAAO,0BAA2B,SAAQ,KAAK;IAGhC;IAFnB,MAAM,CAAU,SAAS,GAAG,uBAAuB,CAAC;IAEpD,YAAmB,SAAiC;QAClD,KAAK,CAAC,0BAA0B,CAAC,SAAS,EAAE;YAC1C,OAAO,EAAE,IAAI;YACb,QAAQ,EAAE,IAAI;SACf,CAAC,CAAC;QAJc,cAAS,GAAT,SAAS,CAAwB;IAKpD,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Models from './models/models.js';\\n\\nexport class ReplayFinishedEvent extends Event {\\n  static readonly eventName = 'replayfinished';\\n\\n  constructor() {\\n    super(ReplayFinishedEvent.eventName, {bubbles: true, composed: true});\\n  }\\n}\\n\\nexport class RecordingStateChangedEvent extends Event {\\n  static readonly eventName = 'recordingstatechanged';\\n\\n  constructor(public recording: Models.Schema.UserFlow) {\\n    super(RecordingStateChangedEvent.eventName, {\\n      bubbles: true,\\n      composed: true,\\n    });\\n  }\\n}\\n\"]}");

/***/ })

}]);