(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_SplitWidget_test_js_map"],{

/***/ "./ui/legacy/SplitWidget.test.js.map":
/*!*******************************************!*\
  !*** ./ui/legacy/SplitWidget.test.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SplitWidget.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/SplitWidget.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,uBAAuB,EAAC,MAAM,qCAAqC,CAAC;AAE5E,OAAO,KAAK,EAAE,MAAM,aAAa,CAAC;AAElC,uBAAuB,CAAC,aAAa,EAAE,GAAG,EAAE;IAC1C,QAAQ,CAAC,UAAU,EAAE,GAAG,EAAE;QACxB,EAAE,CAAC,uCAAuC,EAAE,KAAK,IAAI,EAAE;YACrD,MAAM,MAAM,GAAG,IAAI,EAAE,CAAC,WAAW,CAAC,WAAW,CACzC,IAAI,EAAI,aAAa;YACrB,KAAK,CACR,CAAC;YACF,MAAM,CAAC,QAAQ,EAAE,CAAC;YAElB,+CAA+C;YAC/C,MAAM,CAAC,OAAO,CAAC,MAAM,CAAC,aAAa,EAAE,CAAC,CAAC;YAEvC,0CAA0C;YAC1C,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,aAAa,EAAE,CAAC,CAAC;QACxC,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {describeWithEnvironment} from '../../testing/EnvironmentHelpers.js';\\n\\nimport * as UI from './legacy.js';\\n\\ndescribeWithEnvironment('SplitWidget', () => {\\n  describe('toggling', () => {\\n    it('returns the open state of the sidebar', async () => {\\n      const widget = new UI.SplitWidget.SplitWidget(\\n          true,   // isVertical\\n          false,  // secondIsSidebar\\n      );\\n      widget.showBoth();\\n\\n      // Sidebar is showing, so toggling it hides it.\\n      assert.isFalse(widget.toggleSidebar());\\n\\n      // Now it toggles to make it visible again\\n      assert.isTrue(widget.toggleSidebar());\\n    });\\n  });\\n});\\n\"]}");

/***/ })

}]);