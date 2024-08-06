(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_HttpReasonPhraseStrings_js_map"], {
"./core/sdk/HttpReasonPhraseStrings.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"HttpReasonPhraseStrings.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/HttpReasonPhraseStrings.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,iBAAiB,CAAC;AAExC,wBAAwB;AACxB,oEAAoE;AACpE,MAAM,UAAU,aAAa,CAAC,UAAkB;IAC9C,MAAM,gBAAgB,GAA4B;QAChD,GAAG,EAAE,UAAU;QACf,GAAG,EAAE,qBAAqB;QAC1B,GAAG,EAAE,YAAY;QACjB,GAAG,EAAE,aAAa;QAClB,GAAG,EAAE,IAAI;QACT,GAAG,EAAE,SAAS;QACd,GAAG,EAAE,UAAU;QACf,GAAG,EAAE,+BAA+B;QACpC,GAAG,EAAE,YAAY;QACjB,GAAG,EAAE,eAAe;QACpB,GAAG,EAAE,iBAAiB;QACtB,GAAG,EAAE,cAAc;QACnB,GAAG,EAAE,kBAAkB;QACvB,GAAG,EAAE,SAAS;QACd,GAAG,EAAE,kBAAkB;QACvB,GAAG,EAAE,mBAAmB;QACxB,GAAG,EAAE,OAAO;QACZ,GAAG,EAAE,WAAW;QAChB,GAAG,EAAE,cAAc;QACnB,GAAG,EAAE,WAAW;QAChB,GAAG,EAAE,oBAAoB;QACzB,GAAG,EAAE,oBAAoB;QACzB,GAAG,EAAE,aAAa;QAClB,GAAG,EAAE,cAAc;QACnB,GAAG,EAAE,kBAAkB;QACvB,GAAG,EAAE,WAAW;QAChB,GAAG,EAAE,WAAW;QAChB,GAAG,EAAE,oBAAoB;QACzB,GAAG,EAAE,gBAAgB;QACrB,GAAG,EAAE,+BAA+B;QACpC,GAAG,EAAE,iBAAiB;QACtB,GAAG,EAAE,UAAU;QACf,GAAG,EAAE,MAAM;QACX,GAAG,EAAE,iBAAiB;QACtB,GAAG,EAAE,qBAAqB;QAC1B,GAAG,EAAE,mBAAmB;QACxB,GAAG,EAAE,cAAc;QACnB,GAAG,EAAE,wBAAwB;QAC7B,GAAG,EAAE,uBAAuB;QAC5B,GAAG,EAAE,oBAAoB;QACzB,GAAG,EAAE,eAAe;QACpB,GAAG,EAAE,qBAAqB;QAC1B,GAAG,EAAE,uBAAuB;QAC5B,GAAG,EAAE,QAAQ;QACb,GAAG,EAAE,mBAAmB;QACxB,GAAG,EAAE,WAAW;QAChB,GAAG,EAAE,kBAAkB;QACvB,GAAG,EAAE,uBAAuB;QAC5B,GAAG,EAAE,mBAAmB;QACxB,GAAG,EAAE,iCAAiC;QACtC,GAAG,EAAE,+BAA+B;QACpC,GAAG,EAAE,uBAAuB;QAC5B,GAAG,EAAE,iBAAiB;QACtB,GAAG,EAAE,aAAa;QAClB,GAAG,EAAE,qBAAqB;QAC1B,GAAG,EAAE,iBAAiB;QACtB,GAAG,EAAE,4BAA4B;QACjC,GAAG,EAAE,yBAAyB;QAC9B,GAAG,EAAE,sBAAsB;QAC3B,GAAG,EAAE,eAAe;QACpB,GAAG,EAAE,cAAc;QACnB,GAAG,EAAE,iCAAiC;KACvC,CAAC;IACF,OAAO,IAAI,CAAC,IAAI,CAAC,YAAY,CAAC,gBAAgB,CAAC,UAAU,CAAC,IAAI,EAAE,CAAC,CAAC;AACpE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../i18n/i18n.js';\\n\\n// Reason phrase sources\\n// See https://www.rfc-editor.org/rfc/rfc9110.html#name-status-codes\\nexport function getStatusText(statusCode: number): string {\\n  const statusTextLookup: {[key: number]: string} = {\\n    100: 'Continue',\\n    101: 'Switching Protocols',\\n    102: 'Processing',\\n    103: 'Early Hints',\\n    200: 'OK',\\n    201: 'Created',\\n    202: 'Accepted',\\n    203: 'Non-Authoritative Information',\\n    204: 'No Content',\\n    205: 'Reset Content',\\n    206: 'Partial Content',\\n    207: 'Multi-Status',\\n    208: 'Already Reported',\\n    226: 'IM Used',\\n    300: 'Multiple Choices',\\n    301: 'Moved Permanently',\\n    302: 'Found',\\n    303: 'See Other',\\n    304: 'Not Modified',\\n    305: 'Use Proxy',\\n    307: 'Temporary Redirect',\\n    308: 'Permanent Redirect',\\n    400: 'Bad Request',\\n    401: 'Unauthorized',\\n    402: 'Payment Required',\\n    403: 'Forbidden',\\n    404: 'Not Found',\\n    405: 'Method Not Allowed',\\n    406: 'Not Acceptable',\\n    407: 'Proxy Authentication Required',\\n    408: 'Request Timeout',\\n    409: 'Conflict',\\n    410: 'Gone',\\n    411: 'Length Required',\\n    412: 'Precondition Failed',\\n    413: 'Payload Too Large',\\n    414: 'URI Too Long',\\n    415: 'Unsupported Media Type',\\n    416: 'Range Not Satisfiable',\\n    417: 'Expectation Failed',\\n    418: 'I\\\\'m a teapot',\\n    421: 'Misdirected Request',\\n    422: 'Unprocessable Content',\\n    423: 'Locked',\\n    424: 'Failed Dependency',\\n    425: 'Too Early',\\n    426: 'Upgrade Required',\\n    428: 'Precondition Required',\\n    429: 'Too Many Requests',\\n    431: 'Request Header Fields Too Large',\\n    451: 'Unavailable For Legal Reasons',\\n    500: 'Internal Server Error',\\n    501: 'Not Implemented',\\n    502: 'Bad Gateway',\\n    503: 'Service Unavailable',\\n    504: 'Gateway Timeout',\\n    505: 'HTTP Version Not Supported',\\n    506: 'Variant Also Negotiates',\\n    507: 'Insufficient Storage',\\n    508: 'Loop Detected',\\n    510: 'Not Extended',\\n    511: 'Network Authentication Required',\\n  };\\n  return i18n.i18n.lockedString(statusTextLookup[statusCode] ?? '');\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);