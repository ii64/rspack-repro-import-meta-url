"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ServerSentEventsProtocol_d_ts"], {
"./core/sdk/ServerSentEventsProtocol.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * Implements Server-Sent-Events protocl parsing as described by
 * https://html.spec.whatwg.org/multipage/server-sent-events.html#parsing-an-event-stream
 *
 * Webpages can use SSE over fetch/XHR and not go through EventSource. DevTools
 * only receives the raw binary data in this case, which means we have to decode
 * and parse the event stream ourselves here.
 *
 * Implementation mostly ported over from blink
 * third_party/blink/renderer/modules/eventsource/event_source_parser.cc.
 */ 


}),

}]);