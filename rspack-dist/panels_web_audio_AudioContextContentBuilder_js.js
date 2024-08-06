"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_AudioContextContentBuilder_js"], {
"./panels/web_audio/AudioContextContentBuilder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContextDetailBuilder: function() { return ContextDetailBuilder; },
  ContextSummaryBuilder: function() { return ContextSummaryBuilder; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  <div class="context-detail-header">\n  <div class="context-detail-title">',
        '</div>\n  <div class="context-detail-subtitle">',
        "</div>\n  </div>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n  <div class="context-detail-row">\n  <div class="context-detail-row-entry">',
        '</div>\n  <div class="context-detail-row-value">',
        "</div>\n  </div>\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n  <div class="context-summary-container">\n  <span>',
        ": ",
        " s</span>\n  <span>❘</span>\n  <span>",
        ": μ = ",
        " ms, σ = ",
        " ms</span>\n  <span>❘</span>\n  <span>",
        ": ",
        " %</span>\n  </div>\n  "
    ], [
        '\n  <div class="context-summary-container">\n  <span>',
        ": ",
        " s</span>\n  <span>\\u2758</span>\n  <span>",
        ": μ = ",
        " ms, σ = ",
        " ms</span>\n  <span>\\u2758</span>\n  <span>",
        ": ",
        " %</span>\n  </div>\n  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}


var UIStrings = {
    /**
     *@description The current state of an item
     */ state: 'State',
    /**
     *@description Text in Audio Context Content Builder
     */ sampleRate: 'Sample Rate',
    /**
     *@description Text in Audio Context Content Builder
     */ callbackBufferSize: 'Callback Buffer Size',
    /**
     * @description Label in the Audio Context Content Builder for the maximum number of output channels
     * that this Audio Context has.
     */ maxOutputChannels: 'Max Output Channels',
    /**
     *@description Text in Audio Context Content Builder
     */ currentTime: 'Current Time',
    /**
     *@description Text in Audio Context Content Builder
     */ callbackInterval: 'Callback Interval',
    /**
     *@description Text in Audio Context Content Builder
     */ renderCapacity: 'Render Capacity'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/web_audio/AudioContextContentBuilder.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ContextDetailBuilder = /*#__PURE__*/ function() {
    "use strict";
    function ContextDetailBuilder(context) {
        _class_call_check(this, ContextDetailBuilder);
        _define_property(this, "fragment", void 0);
        _define_property(this, "container", void 0);
        this.fragment = document.createDocumentFragment();
        this.container = document.createElement('div');
        this.container.classList.add('context-detail-container');
        this.fragment.appendChild(this.container);
        this.build(context);
    }
    _create_class(ContextDetailBuilder, [
        {
            key: "build",
            value: function build(context) {
                var title = context.contextType === 'realtime' ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('AudioContext') : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('OfflineAudioContext');
                this.addTitle(title, context.contextId);
                this.addEntry(i18nString(UIStrings.state), context.contextState);
                this.addEntry(i18nString(UIStrings.sampleRate), context.sampleRate, 'Hz');
                if (context.contextType === 'realtime') {
                    this.addEntry(i18nString(UIStrings.callbackBufferSize), context.callbackBufferSize, 'frames');
                }
                this.addEntry(i18nString(UIStrings.maxOutputChannels), context.maxOutputChannelCount, 'ch');
            }
        },
        {
            key: "addTitle",
            value: function addTitle(title, subtitle) {
                this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject(), title, subtitle));
            }
        },
        {
            key: "addEntry",
            value: function addEntry(entry, value, unit) {
                var valueWithUnit = value + (unit ? " ".concat(unit) : '');
                this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject1(), entry, valueWithUnit));
            }
        },
        {
            key: "getFragment",
            value: function getFragment() {
                return this.fragment;
            }
        }
    ]);
    return ContextDetailBuilder;
}();
var ContextSummaryBuilder = /*#__PURE__*/ function() {
    "use strict";
    function ContextSummaryBuilder(contextId, contextRealtimeData) {
        _class_call_check(this, ContextSummaryBuilder);
        _define_property(this, "fragment", void 0);
        var time = contextRealtimeData.currentTime.toFixed(3);
        var mean = (contextRealtimeData.callbackIntervalMean * 1000).toFixed(3);
        var stddev = (Math.sqrt(contextRealtimeData.callbackIntervalVariance) * 1000).toFixed(3);
        var capacity = (contextRealtimeData.renderCapacity * 100).toFixed(3);
        this.fragment = document.createDocumentFragment();
        this.fragment.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html(_templateObject2(), i18nString(UIStrings.currentTime), time, i18nString(UIStrings.callbackInterval), mean, stddev, i18nString(UIStrings.renderCapacity), capacity));
    }
    _create_class(ContextSummaryBuilder, [
        {
            key: "getFragment",
            value: function getFragment() {
                return this.fragment;
            }
        }
    ]);
    return ContextSummaryBuilder;
} //# sourceMappingURL=AudioContextContentBuilder.js.map
();


}),

}]);