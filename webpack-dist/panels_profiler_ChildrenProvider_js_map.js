(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ChildrenProvider_js_map"],{

/***/ "./panels/profiler/ChildrenProvider.js.map":
/*!*************************************************!*\
  !*** ./panels/profiler/ChildrenProvider.js.map ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ChildrenProvider.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/profiler/ChildrenProvider.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as HeapSnapshotModel from '../../models/heap_snapshot_model/heap_snapshot_model.js';\\n\\nexport interface ChildrenProvider {\\n  dispose(): void;\\n  nodePosition(snapshotObjectId: number): Promise<number>;\\n  isEmpty(): Promise<boolean>;\\n  serializeItemsRange(startPosition: number, endPosition: number):\\n      Promise<HeapSnapshotModel.HeapSnapshotModel.ItemsRange>;\\n  sortAndRewind(comparator: HeapSnapshotModel.HeapSnapshotModel.ComparatorConfig): Promise<void>;\\n}\\n\"]}");

/***/ })

}]);