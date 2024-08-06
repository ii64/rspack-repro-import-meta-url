"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_console_ErrorStackParser_d_ts"], {
"./panels/console/ErrorStackParser.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * Error#stack output only contains script URLs. In some cases we are able to
 * retrieve additional exception details from V8 that we can use to augment
 * the parsed Error#stack with script IDs.
 * This function sets the `scriptId` field in `ParsedErrorFrame` when it finds
 * the corresponding info in `Protocol.Runtime.StackTrace`.
 */ 


}),

}]);