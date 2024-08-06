"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_MainView_test_js"], {
"./panels/media/MainView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _media_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media.js */ "./panels/media/media.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}





var PLAYER_ID = 'PLAYER_ID';
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('MediaMainView', function() {
    var target;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
    });
    var testUiUpdate = function(event, expectedMethod, inScope) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var _model, downloadStore, expectedCall, mainView, model, field, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                        downloadStore = new _media_js__WEBPACK_IMPORTED_MODULE_4__.MainView.PlayerDataDownloadManager();
                        expectedCall = sinon.stub(downloadStore, expectedMethod).returns();
                        mainView = new _media_js__WEBPACK_IMPORTED_MODULE_4__.MainView.MainView(downloadStore);
                        mainView.markAsRoot();
                        mainView.show(document.body);
                        model = target.model(_media_js__WEBPACK_IMPORTED_MODULE_4__.MediaModel.MediaModel);
                        assert.exists(model);
                        model.dispatchEventToListeners("PlayersCreated" /* Media.MediaModel.Events.PlayersCreated */ , [
                            PLAYER_ID
                        ]);
                        field = [
                            {
                                name: 'kResolution',
                                value: '{}',
                                data: {},
                                stack: [],
                                cause: []
                            }
                        ];
                        data = {
                            playerId: PLAYER_ID,
                            properties: field,
                            events: field,
                            messages: field,
                            errors: field
                        };
                        (_model = model).dispatchEventToListeners.apply(_model, [
                            event,
                            data
                        ]);
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(expectedCall.called, inScope);
                        return [
                            4,
                            _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance().done()
                        ];
                    case 2:
                        _state.sent();
                        mainView.detach();
                        return [
                            2
                        ];
                }
            });
        });
    };
    it('reacts to properties on in scope event', testUiUpdate("PlayerPropertiesChanged" /* Media.MediaModel.Events.PlayerPropertiesChanged */ , 'onProperty', true));
    it('does not react to properties on out of scope event', testUiUpdate("PlayerPropertiesChanged" /* Media.MediaModel.Events.PlayerPropertiesChanged */ , 'onProperty', false));
    it('reacts to event on in scope event', testUiUpdate("PlayerEventsAdded" /* Media.MediaModel.Events.PlayerEventsAdded */ , 'onEvent', true));
    it('does not react to event on out of scope event', testUiUpdate("PlayerEventsAdded" /* Media.MediaModel.Events.PlayerEventsAdded */ , 'onEvent', false));
    it('reacts to messages on in scope event', testUiUpdate("PlayerMessagesLogged" /* Media.MediaModel.Events.PlayerMessagesLogged */ , 'onMessage', true));
    it('does not react to messages on out of scope event', testUiUpdate("PlayerMessagesLogged" /* Media.MediaModel.Events.PlayerMessagesLogged */ , 'onMessage', false));
    it('reacts to error on in scope event', testUiUpdate("PlayerErrorsRaised" /* Media.MediaModel.Events.PlayerErrorsRaised */ , 'onError', true));
    it('does not react to error on out of scope event', testUiUpdate("PlayerErrorsRaised" /* Media.MediaModel.Events.PlayerErrorsRaised */ , 'onError', false));
}); //# sourceMappingURL=MainView.test.js.map


}),
"./panels/media/media.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MainView: function() { return /* reexport module object */ _MainView_js__WEBPACK_IMPORTED_MODULE_1__; },
  MediaModel: function() { return /* reexport module object */ _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  PlayerDetailView: function() { return /* reexport module object */ _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__; },
  PlayerEventsView: function() { return /* reexport module object */ _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_0__; },
  PlayerListView: function() { return /* reexport module object */ _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__; },
  PlayerPropertiesView: function() { return /* reexport module object */ _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__; },
  TickingFlameChart: function() { return /* reexport module object */ _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_6__; },
  TickingFlameChartHelpers: function() { return /* reexport module object */ _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_7__; }
});
/* harmony import */var _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDisplayTable.js */ "./panels/media/EventDisplayTable.js");
/* harmony import */var _MainView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView.js */ "./panels/media/MainView.js");
/* harmony import */var _MediaModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaModel.js */ "./panels/media/MediaModel.js");
/* harmony import */var _PlayerDetailView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PlayerDetailView.js */ "./panels/media/PlayerDetailView.js");
/* harmony import */var _PlayerListView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerListView.js */ "./panels/media/PlayerListView.js");
/* harmony import */var _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerPropertiesView.js */ "./panels/media/PlayerPropertiesView.js");
/* harmony import */var _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TickingFlameChart.js */ "./panels/media/TickingFlameChart.js");
/* harmony import */var _TickingFlameChartHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TickingFlameChartHelpers.js */ "./panels/media/TickingFlameChartHelpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
















 //# sourceMappingURL=media.js.map


}),

}]);