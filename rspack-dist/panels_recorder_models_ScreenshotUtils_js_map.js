(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_ScreenshotUtils_js_map"], {
"./panels/recorder/models/ScreenshotUtils.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ScreenshotUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/models/ScreenshotUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,0BAA0B,CAAC;AAIhD,MAAM,gBAAgB,GAAG,GAAG,CAAC,CAAO,KAAK;AACzC,MAAM,qBAAqB,GAAG,GAAG,CAAC,CAAE,KAAK;AAEzC,KAAK,UAAU,iBAAiB;IAC9B,MAAM,UAAU,GAAG,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,iBAAiB,EAAE,CAAC;IAClF,IAAI,CAAC,UAAU,EAAE,CAAC;QAChB,MAAM,IAAI,KAAK,CAAC,4BAA4B,CAAC,CAAC;IAChD,CAAC;IAED,MAAM,EAAC,IAAI,EAAC,GAAG,MAAM,UAAU,CAAC,SAAS,EAAE,CAAC,wBAAwB,CAAC,EAAE,CAAC,CAAC;IACzE,IAAI,CAAC,IAAI,EAAE,CAAC;QACV,sBAAsB;QACtB,OAAO,gFAA8F,CAAC;IACxG,CAAC;IACD,OAAO,CAAC,wBAAwB,GAAG,IAAI,CAAe,CAAC;AACzD,CAAC;AAED,MAAM,CAAC,KAAK,UAAU,gBAAgB,CAAC,IAAgB;IACrD,MAAM,GAAG,GAAG,IAAI,KAAK,EAAE,CAAC;IACxB,MAAM,OAAO,GAAG,IAAI,OAAO,CAAC,OAAO,CAAC,EAAE;QACpC,GAAG,CAAC,MAAM,GAAG,OAAO,CAAC;IACvB,CAAC,CAAC,CAAC;IACH,GAAG,CAAC,GAAG,GAAG,IAAI,CAAC;IACf,MAAM,OAAO,CAAC;IAEd,MAAM,MAAM,GAAG,QAAQ,CAAC,aAAa,CAAC,QAAQ,CAAC,CAAC;IAChD,MAAM,OAAO,GAAG,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC;IACxC,IAAI,CAAC,OAAO,EAAE,CAAC;QACb,MAAM,IAAI,KAAK,CAAC,2BAA2B,CAAC,CAAC;IAC/C,CAAC;IACD,MAAM,WAAW,GAAG,GAAG,CAAC,KAAK,GAAG,GAAG,CAAC,MAAM,CAAC;IAC3C,MAAM,CAAC,KAAK,GAAG,gBAAgB,CAAC;IAChC,MAAM,CAAC,MAAM,GAAG,IAAI,CAAC,GAAG,CACpB,qBAAqB,EACrB,gBAAgB,GAAG,WAAW,CACjC,CAAC;IACF,MAAM,MAAM,GAAG,MAAM,iBAAiB,CAAC,GAAG,EAAE;QAC1C,WAAW,EAAE,gBAAgB;QAC7B,aAAa,EAAE,MAAM;KACtB,CAAC,CAAC;IACH,OAAO,CAAC,SAAS,CAAC,MAAM,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC;IAEhC,OAAO,MAAM,CAAC,SAAS,CAAC,WAAW,CAAe,CAAC;AACrD,CAAC;AAED,MAAM,CAAC,KAAK,UAAU,cAAc;IAClC,MAAM,IAAI,GAAG,MAAM,iBAAiB,EAAE,CAAC;IACvC,OAAO,MAAM,gBAAgB,CAAC,IAAI,CAAC,CAAC;AACtC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../../core/sdk/sdk.js';\\n\\nimport {type Screenshot} from './ScreenshotStorage.js';\\n\\nconst SCREENSHOT_WIDTH = 160;       // px\\nconst SCREENSHOT_MAX_HEIGHT = 240;  // px\\n\\nasync function captureScreenshot(): Promise<Screenshot> {\\n  const mainTarget = SDK.TargetManager.TargetManager.instance().primaryPageTarget();\\n  if (!mainTarget) {\\n    throw new Error('Could not find main target');\\n  }\\n\\n  const {data} = await mainTarget.pageAgent().invoke_captureScreenshot({});\\n  if (!data) {\\n    // 1x1 px empty image.\\n    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' as Screenshot;\\n  }\\n  return ('data:image/png;base64,' + data) as Screenshot;\\n}\\n\\nexport async function resizeScreenshot(data: Screenshot): Promise<Screenshot> {\\n  const img = new Image();\\n  const promise = new Promise(resolve => {\\n    img.onload = resolve;\\n  });\\n  img.src = data;\\n  await promise;\\n\\n  const canvas = document.createElement('canvas');\\n  const context = canvas.getContext('2d');\\n  if (!context) {\\n    throw new Error('Could not create context.');\\n  }\\n  const aspectRatio = img.width / img.height;\\n  canvas.width = SCREENSHOT_WIDTH;\\n  canvas.height = Math.min(\\n      SCREENSHOT_MAX_HEIGHT,\\n      SCREENSHOT_WIDTH / aspectRatio,\\n  );\\n  const bitmap = await createImageBitmap(img, {\\n    resizeWidth: SCREENSHOT_WIDTH,\\n    resizeQuality: 'high',\\n  });\\n  context.drawImage(bitmap, 0, 0);\\n\\n  return canvas.toDataURL('image/png') as Screenshot;\\n}\\n\\nexport async function takeScreenshot(): Promise<Screenshot> {\\n  const data = await captureScreenshot();\\n  return await resizeScreenshot(data);\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);