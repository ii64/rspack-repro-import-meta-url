(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownImagesMap_js_map"], {
"./ui/components/markdown_view/MarkdownImagesMap.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"MarkdownImagesMap.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/markdown_view/MarkdownImagesMap.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAgB7B;;;;;;;;;;;;;;EAcE;AAEF,8DAA8D;AAC9D,+DAA+D;AAC/D,0DAA0D;AAC1D,MAAM,CAAC,MAAM,cAAc,GAAG,IAAI,GAAG,CAAoB,EAAE,CAAC,CAAC;AAE7D,MAAM,CAAC,MAAM,gBAAgB,GAAG,CAAC,GAAW,EAAa,EAAE;IACzD,MAAM,KAAK,GAAG,cAAc,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC;IACtC,IAAI,CAAC,KAAK,EAAE,CAAC;QACX,MAAM,IAAI,KAAK,CAAC,4BAA4B,GAAG,uDAAuD,CAAC,CAAC;IAC1G,CAAC;IACD,OAAO,KAAK,CAAC;AACf,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/*\\n * To use images in markdown, add key in markdownImages with the image data and\\n * use the added key in markdown.\\n * @example markdown\\n * Give feedback by clicking ![Feedback icon](feedbackIcon)\\n*/\\nexport interface ImageData {\\n  src: string;\\n  isIcon: boolean;\\n  color?: string;\\n  width?: string;\\n  height?: string;\\n}\\n\\n/*\\n * src for image is relative url for image location.\\n * @example icon\\n * [\\n *   'feedbackIcon',\\n *   {\\n *     src: 'Images/review.svg',\\n *     isIcon: true,\\n *     width: '20px',\\n *     height: '20px',\\n *     color: 'var(--icon-disabled)',\\n *   },\\n * ]\\n *\\n*/\\n\\n// NOTE: This is only exported for tests, and it should not be\\n// imported in any component, instead add image data in map and\\n// use getMarkdownImage to get the appropriate image data.\\nexport const markdownImages = new Map<string, ImageData>([]);\\n\\nexport const getMarkdownImage = (key: string): ImageData => {\\n  const image = markdownImages.get(key);\\n  if (!image) {\\n    throw new Error(`Markdown image with key '${key}' is not available, please check MarkdownImagesMap.ts`);\\n  }\\n  return image;\\n};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);