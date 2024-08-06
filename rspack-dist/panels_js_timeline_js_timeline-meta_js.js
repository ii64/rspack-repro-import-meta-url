"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_js_timeline_js_timeline-meta_js"], {
"./panels/js_timeline/js_timeline-meta.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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


var UIStrings = {
    /**
     *@description Text for the performance of something
     */ performance: 'Performance',
    /**
     *@description Command for showing the 'Performance' tool
     */ showPerformance: 'Show Performance',
    /**
     *@description Title of an action in the timeline tool to show history
     */ showRecentTimelineSessions: 'Show recent timeline sessions',
    /**
     *@description Text to record a series of actions for analysis
     */ record: 'Record',
    /**
     *@description Text of an item that stops the running task
     */ stop: 'Stop',
    /**
     *@description Title of an action in the timeline tool to record a reload of the current page
     */ recordAndReload: 'Record and reload'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/js_timeline/js_timeline-meta.ts', UIStrings);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var loadedTimelineModule;
function loadTimelineModule() {
    return _loadTimelineModule.apply(this, arguments);
}
function _loadTimelineModule() {
    _loadTimelineModule = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!loadedTimelineModule) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        Promise.resolve(/*! import() */ ).then(__webpack_require__.bind(__webpack_require__, /*! ../timeline/timeline.js */ "./panels/timeline/timeline.js"))
                    ];
                case 1:
                    loadedTimelineModule = _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        loadedTimelineModule
                    ];
            }
        });
    });
    return _loadTimelineModule.apply(this, arguments);
}
function maybeRetrieveTimelineContextTypes(getClassCallBack) {
    if (loadedTimelineModule === undefined) {
        return [];
    }
    return getClassCallBack(loadedTimelineModule);
}
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ViewManager.registerViewExtension({
    location: "panel" /* UI.ViewManager.ViewLocationValues.PANEL */ ,
    id: 'timeline',
    title: i18nLazyString(UIStrings.performance),
    commandPrompt: i18nLazyString(UIStrings.showPerformance),
    order: 66,
    hasToolbar: false,
    isPreviewFeature: true,
    loadView: function loadView() {
        return _async_to_generator(function() {
            var Timeline;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            loadTimelineModule()
                        ];
                    case 1:
                        Timeline = _state.sent();
                        return [
                            2,
                            Timeline.TimelinePanel.TimelinePanel.instance({
                                forceNew: null,
                                isNode: true
                            })
                        ];
                }
            });
        })();
    }
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.show-history',
    loadActionDelegate: function loadActionDelegate() {
        return _async_to_generator(function() {
            var Timeline;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            loadTimelineModule()
                        ];
                    case 1:
                        Timeline = _state.sent();
                        return [
                            2,
                            new Timeline.TimelinePanel.ActionDelegate()
                        ];
                }
            });
        })();
    },
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    title: i18nLazyString(UIStrings.showRecentTimelineSessions),
    contextTypes: function contextTypes() {
        return maybeRetrieveTimelineContextTypes(function(Timeline) {
            return [
                Timeline.TimelinePanel.TimelinePanel
            ];
        });
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */ ,
            shortcut: 'Ctrl+H'
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */ ,
            shortcut: 'Meta+Y'
        }
    ]
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.toggle-recording',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    iconClass: "record-start" /* UI.ActionRegistration.IconClass.START_RECORDING */ ,
    toggleable: true,
    toggledIconClass: "record-stop" /* UI.ActionRegistration.IconClass.STOP_RECORDING */ ,
    toggleWithRedColor: true,
    contextTypes: function contextTypes() {
        return maybeRetrieveTimelineContextTypes(function(Timeline) {
            return [
                Timeline.TimelinePanel.TimelinePanel
            ];
        });
    },
    loadActionDelegate: function loadActionDelegate() {
        return _async_to_generator(function() {
            var Timeline;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            loadTimelineModule()
                        ];
                    case 1:
                        Timeline = _state.sent();
                        return [
                            2,
                            new Timeline.TimelinePanel.ActionDelegate()
                        ];
                }
            });
        })();
    },
    options: [
        {
            value: true,
            title: i18nLazyString(UIStrings.record)
        },
        {
            value: false,
            title: i18nLazyString(UIStrings.stop)
        }
    ],
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */ ,
            shortcut: 'Ctrl+E'
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */ ,
            shortcut: 'Meta+E'
        }
    ]
});
_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.record-reload',
    iconClass: "refresh" /* UI.ActionRegistration.IconClass.REFRESH */ ,
    contextTypes: function contextTypes() {
        return maybeRetrieveTimelineContextTypes(function(Timeline) {
            return [
                Timeline.TimelinePanel.TimelinePanel
            ];
        });
    },
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    title: i18nLazyString(UIStrings.recordAndReload),
    loadActionDelegate: function loadActionDelegate() {
        return _async_to_generator(function() {
            var Timeline;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            loadTimelineModule()
                        ];
                    case 1:
                        Timeline = _state.sent();
                        return [
                            2,
                            new Timeline.TimelinePanel.ActionDelegate()
                        ];
                }
            });
        })();
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */ ,
            shortcut: 'Ctrl+Shift+E'
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */ ,
            shortcut: 'Meta+Shift+E'
        }
    ]
}); //# sourceMappingURL=js_timeline-meta.js.map


}),

}]);