"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_CompilerScriptMapping_d_ts"], {
"./models/bindings/CompilerScriptMapping.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * The `CompilerScriptMapping` maps script entities from source maps to scripts and vice versa.
 * It is part of the {@link DebuggerWorkspaceBinding} and operates on top of the
 * {@link SDK.SourceMapManager.SourceMapManager}.
 *
 * The `CompilerScriptMapping` maintains a list of {@link ContentProviderBasedProject}s, in which it
 * creates the `UISourceCode`s for the source-mapped entities. The mapping is implemented in various
 * layers:
 *
 * - `#sourceMapToProject` holds a mapping of all the attached `SourceMap`s to their respective
 *   `ContentBasedProviderBasedProject`s. When resolving raw to UI locations this is the first
 *   place to check.
 * - `#uiSourceCodeToSourceMaps` maps every `UISourceCode` created herein to the `SourceMap` that
 *   it originated from. This is the authoritative source of information: The `#projects` might
 *   contain `UISourceCode` objects that were created from this `CompilerScriptMapping`, but which
 *   have become stale, and `#uiSourceCodeToSourceMaps` represents these as having no source maps.
 *
 * @see {@link SDK.SourceMap.SourceMap}
 * @see {@link SDK.SourceMapManager.SourceMapManager}
 */ 


}),

}]);