(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_Brand_js_map"], {
"./core/platform/Brand.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Brand.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/Brand.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * Helper type to introduce new branded types.\\n *\\n * `Base` is the underlying data type and `Tag` must be unique symbol/string.\\n *\\n * Usage:\\n * ```\\n *   type LineNumber = Brand<number, \\\"LineNumber\\\">;\\n *   type RawUrl = Brand<string, \\\"RawUrl\\\">;\\n * ```\\n */\\nexport type Brand<Base, Tag> = Base&{_tag: Tag};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);