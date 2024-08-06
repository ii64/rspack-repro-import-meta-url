(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_Breadcrumbs_js_map"], {
"./panels/timeline/components/Breadcrumbs.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Breadcrumbs.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/timeline/components/Breadcrumbs.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,WAAW,MAAM,gDAAgD,CAAC;AAE9E,MAAM,UAAU,kBAAkB,CAAC,iBAAoD;IAErF,MAAM,cAAc,GAAwC,CAAC,iBAAiB,CAAC,CAAC;IAChF,IAAI,eAAe,GAAsC,iBAAiB,CAAC;IAE3E,OAAO,eAAe,CAAC,KAAK,KAAK,IAAI,EAAE,CAAC;QACtC,MAAM,SAAS,GAAG,eAAe,CAAC,KAAK,CAAC;QACxC,IAAI,SAAS,KAAK,IAAI,EAAE,CAAC;YACvB,cAAc,CAAC,IAAI,CAAC,SAAS,CAAC,CAAC;YAC/B,eAAe,GAAG,SAAS,CAAC;QAC9B,CAAC;IACH,CAAC;IAED,OAAO,cAAc,CAAC;AACxB,CAAC;AAED,MAAM,OAAO,WAAW;IACtB,iBAAiB,CAAoC;IACrD,cAAc,CAAoC;IAElD,YAAY,kBAAoE;QAC9E,IAAI,CAAC,iBAAiB,GAAG;YACvB,MAAM,EAAE,kBAAkB;YAC1B,KAAK,EAAE,IAAI;SACZ,CAAC;QACF,IAAI,CAAC,cAAc,GAAG,IAAI,CAAC,iBAAiB,CAAC;IAC/C,CAAC;IAED,GAAG,CAAC,wBAA0E;QAC5E,IAAI,IAAI,CAAC,8BAA8B,CAAC,wBAAwB,EAAE,IAAI,CAAC,cAAc,CAAC,MAAM,CAAC,EAAE,CAAC;YAC9F,MAAM,aAAa,GAAG;gBACpB,MAAM,EAAE,wBAAwB;gBAChC,KAAK,EAAE,IAAI;aACZ,CAAC;YACF,2FAA2F;YAC3F,uDAAuD;YACvD,IAAI,CAAC,cAAc,CAAC,KAAK,GAAG,aAAa,CAAC;YAC1C,IAAI,CAAC,iBAAiB,CAAC,aAAa,CAAC,CAAC;QACxC,CAAC;aAAM,CAAC;YACN,MAAM,IAAI,KAAK,CAAC,6FAA6F,CAAC,CAAC;QACjH,CAAC;IACH,CAAC;IAED,iHAAiH;IACjH,8BAA8B,CAC1B,KAAuD,EACvD,MAAwD;QAC1D,OAAO,CAAC,KAAK,CAAC,GAAG,IAAI,MAAM,CAAC,GAAG,IAAI,KAAK,CAAC,GAAG,IAAI,MAAM,CAAC,GAAG,CAAC;YACvD,CAAC,CAAC,KAAK,CAAC,GAAG,KAAK,MAAM,CAAC,GAAG,IAAI,KAAK,CAAC,GAAG,KAAK,MAAM,CAAC,GAAG,CAAC,CAAC;IAC9D,CAAC;IAED,2EAA2E;IAC3E,2CAA2C,CAAC,iBAAoD;QAC9F,IAAI,CAAC,iBAAiB,GAAG,iBAAiB,CAAC;QAC3C,8BAA8B;QAC9B,IAAI,cAAc,GAAG,iBAAiB,CAAC;QACvC,OAAO,cAAc,CAAC,KAAK,KAAK,IAAI,EAAE,CAAC;YACrC,cAAc,GAAG,cAAc,CAAC,KAAK,CAAC;QACxC,CAAC;QACD,IAAI,CAAC,iBAAiB,CAAC,cAAc,CAAC,CAAC;IACzC,CAAC;IAED,iBAAiB,CAAC,cAAiD;QACjE,kFAAkF;QAClF,8CAA8C;QAC9C,IAAI,CAAC,cAAc,GAAG,cAAc,CAAC;QACrC,IAAI,CAAC,cAAc,CAAC,KAAK,GAAG,IAAI,CAAC;QACjC,WAAW,CAAC,WAAW,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,gBAAgB,CAC7D,cAAc,CAAC,MAAM,CACxB,CAAC;QACF,WAAW,CAAC,WAAW,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,wBAAwB,CACrE,cAAc,CAAC,MAAM,CACxB,CAAC;IACJ,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as TraceEngine from '../../../models/trace/trace.js';\\nimport * as TraceBounds from '../../../services/trace_bounds/trace_bounds.js';\\n\\nexport function flattenBreadcrumbs(initialBreadcrumb: TraceEngine.Types.File.Breadcrumb):\\n    TraceEngine.Types.File.Breadcrumb[] {\\n  const allBreadcrumbs: TraceEngine.Types.File.Breadcrumb[] = [initialBreadcrumb];\\n  let breadcrumbsIter: TraceEngine.Types.File.Breadcrumb = initialBreadcrumb;\\n\\n  while (breadcrumbsIter.child !== null) {\\n    const iterChild = breadcrumbsIter.child;\\n    if (iterChild !== null) {\\n      allBreadcrumbs.push(iterChild);\\n      breadcrumbsIter = iterChild;\\n    }\\n  }\\n\\n  return allBreadcrumbs;\\n}\\n\\nexport class Breadcrumbs {\\n  initialBreadcrumb: TraceEngine.Types.File.Breadcrumb;\\n  lastBreadcrumb: TraceEngine.Types.File.Breadcrumb;\\n\\n  constructor(initialTraceWindow: TraceEngine.Types.Timing.TraceWindowMicroSeconds) {\\n    this.initialBreadcrumb = {\\n      window: initialTraceWindow,\\n      child: null,\\n    };\\n    this.lastBreadcrumb = this.initialBreadcrumb;\\n  }\\n\\n  add(newBreadcrumbTraceWindow: TraceEngine.Types.Timing.TraceWindowMicroSeconds): void {\\n    if (this.isTraceWindowWithinTraceWindow(newBreadcrumbTraceWindow, this.lastBreadcrumb.window)) {\\n      const newBreadcrumb = {\\n        window: newBreadcrumbTraceWindow,\\n        child: null,\\n      };\\n      // To add a new Breadcrumb to the Breadcrumbs Linked List, set the child of last breadcrumb\\n      // to the new breadcrumb and update the last Breadcrumb\\n      this.lastBreadcrumb.child = newBreadcrumb;\\n      this.setLastBreadcrumb(newBreadcrumb);\\n    } else {\\n      throw new Error('Can not add a breadcrumb that is equal to or is outside of the parent breadcrumb TimeWindow');\\n    }\\n  }\\n\\n  // Breadcumb should be within the bounds of the parent and can not have both start and end be equal to the parent\\n  isTraceWindowWithinTraceWindow(\\n      child: TraceEngine.Types.Timing.TraceWindowMicroSeconds,\\n      parent: TraceEngine.Types.Timing.TraceWindowMicroSeconds): boolean {\\n    return (child.min >= parent.min && child.max <= parent.max) &&\\n        !(child.min === parent.min && child.max === parent.max);\\n  }\\n\\n  // Used to set an initial breadcrumbs from modifications loaded from a file\\n  setInitialBreadcrumbFromLoadedModifications(initialBreadcrumb: TraceEngine.Types.File.Breadcrumb): void {\\n    this.initialBreadcrumb = initialBreadcrumb;\\n    // Make last breadcrumb active\\n    let lastBreadcrumb = initialBreadcrumb;\\n    while (lastBreadcrumb.child !== null) {\\n      lastBreadcrumb = lastBreadcrumb.child;\\n    }\\n    this.setLastBreadcrumb(lastBreadcrumb);\\n  }\\n\\n  setLastBreadcrumb(lastBreadcrumb: TraceEngine.Types.File.Breadcrumb): void {\\n    // When we assign a new active breadcrumb, both the minimap bounds and the visible\\n    // window get set to that breadcrumb's window.\\n    this.lastBreadcrumb = lastBreadcrumb;\\n    this.lastBreadcrumb.child = null;\\n    TraceBounds.TraceBounds.BoundsManager.instance().setMiniMapBounds(\\n        lastBreadcrumb.window,\\n    );\\n    TraceBounds.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(\\n        lastBreadcrumb.window,\\n    );\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);