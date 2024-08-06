"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["generated_InspectorBackendCommands_d_ts"], {
"./generated/InspectorBackendCommands.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectorBackendAPI: function() { return InspectorBackendAPI; }
});
/**
 * @param {!InspectorBackendAPI} inspectorBackend
 */ /**
 * @typedef {{
 *  registerCommand: function(
 *      string&any,
 *      !Array.<!{
 *          name: string,
 *          type: string,
 *          optional: boolean,
 *          description: string,
 *          typeRef: string | null
 *      }>,
 *      !Array.<string>,
 *      string
 *  ): void,
 *  registerEnum: function(string&any, !Object<string, string>): void,
 *  registerEvent: function(string&any, !Array<string>): void,
 *  registerType: function(
 *      string&any,
 *      !Array.<!{
 *          name: string,
 *          type: string,
 *          optional: boolean,
 *          description: string,
 *          typeRef: string | null
 *      }>
 *  ): void,
 * }}
 */ var InspectorBackendAPI;


}),

}]);