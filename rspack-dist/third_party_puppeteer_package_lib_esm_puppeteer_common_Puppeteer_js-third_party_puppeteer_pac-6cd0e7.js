"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_Puppeteer_js-third_party_puppeteer_pac-6cd0e7"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/Puppeteer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Puppeteer: function() { return Puppeteer; }
});
/* harmony import */var _BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserConnector.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/BrowserConnector.js");
/* harmony import */var _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomQueryHandler.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/common/CustomQueryHandler.js");
/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ function _class_call_check(instance, Constructor) {
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


/**
 * The main Puppeteer class.
 *
 * IMPORTANT: if you are using Puppeteer in a Node environment, you will get an
 * instance of {@link PuppeteerNode} when you import or require `puppeteer`.
 * That class extends `Puppeteer`, so has all the methods documented below as
 * well as all that are defined on {@link PuppeteerNode}.
 *
 * @public
 */ var Puppeteer = /*#__PURE__*/ function() {
    "use strict";
    function Puppeteer(settings) {
        _class_call_check(this, Puppeteer);
        /**
     * @internal
     */ _define_property(this, "_isPuppeteerCore", void 0);
        /**
     * @internal
     */ _define_property(this, "_changedProduct", false);
        this._isPuppeteerCore = settings.isPuppeteerCore;
        this.connect = this.connect.bind(this);
    }
    _create_class(Puppeteer, [
        {
            /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @remarks
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */ key: "connect",
            value: function connect(options) {
                return (0,_BrowserConnector_js__WEBPACK_IMPORTED_MODULE_0__._connectToBrowser)(options);
            }
        }
    ], [
        {
            key: "registerCustomQueryHandler",
            value: /**
     * Registers a {@link CustomQueryHandler | custom query handler}.
     *
     * @remarks
     * After registration, the handler can be used everywhere where a selector is
     * expected by prepending the selection string with `<name>/`. The name is only
     * allowed to consist of lower- and upper case latin letters.
     *
     * @example
     *
     * ```
     * puppeteer.registerCustomQueryHandler('text', { … });
     * const aHandle = await page.$('text/…');
     * ```
     *
     * @param name - The name that the custom query handler will be registered
     * under.
     * @param queryHandler - The {@link CustomQueryHandler | custom query handler}
     * to register.
     *
     * @public
     */ function registerCustomQueryHandler(name, queryHandler) {
                return this.customQueryHandlers.register(name, queryHandler);
            }
        },
        {
            key: "unregisterCustomQueryHandler",
            value: /**
     * Unregisters a custom query handler for a given name.
     */ function unregisterCustomQueryHandler(name) {
                return this.customQueryHandlers.unregister(name);
            }
        },
        {
            key: "customQueryHandlerNames",
            value: /**
     * Gets the names of all custom query handlers.
     */ function customQueryHandlerNames() {
                return this.customQueryHandlers.names();
            }
        },
        {
            key: "clearCustomQueryHandlers",
            value: /**
     * Unregisters all custom query handlers.
     */ function clearCustomQueryHandlers() {
                return this.customQueryHandlers.clear();
            }
        }
    ]);
    return Puppeteer;
} //# sourceMappingURL=Puppeteer.js.map
();
/**
     * Operations for {@link CustomQueryHandler | custom query handlers}. See
     * {@link CustomQueryHandlerRegistry}.
     *
     * @internal
     */ _define_property(Puppeteer, "customQueryHandlers", _CustomQueryHandler_js__WEBPACK_IMPORTED_MODULE_1__.customQueryHandlers);


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/LaunchOptions.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */  //# sourceMappingURL=LaunchOptions.js.map


}),
"./third_party/puppeteer/package/lib/esm/puppeteer/node/node.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ChromeLauncher: function() { return /* reexport safe */ _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_0__.ChromeLauncher; },
  FirefoxLauncher: function() { return /* reexport safe */ _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_1__.FirefoxLauncher; },
  PipeTransport: function() { return /* reexport safe */ _PipeTransport_js__WEBPACK_IMPORTED_MODULE_3__.PipeTransport; },
  ProductLauncher: function() { return /* reexport safe */ _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_4__.ProductLauncher; },
  PuppeteerNode: function() { return /* reexport safe */ _PuppeteerNode_js__WEBPACK_IMPORTED_MODULE_5__.PuppeteerNode; },
  ScreenRecorder: function() { return /* reexport safe */ _ScreenRecorder_js__WEBPACK_IMPORTED_MODULE_6__.ScreenRecorder; },
  getFeatures: function() { return /* reexport safe */ _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_0__.getFeatures; },
  removeMatchingFlags: function() { return /* reexport safe */ _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_0__.removeMatchingFlags; }
});
/* harmony import */var _ChromeLauncher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChromeLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ChromeLauncher.js");
/* harmony import */var _FirefoxLauncher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FirefoxLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/FirefoxLauncher.js");
/* harmony import */var _LaunchOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchOptions.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/LaunchOptions.js");
/* harmony import */var _PipeTransport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PipeTransport.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/PipeTransport.js");
/* harmony import */var _ProductLauncher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductLauncher.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ProductLauncher.js");
/* harmony import */var _PuppeteerNode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PuppeteerNode.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/PuppeteerNode.js");
/* harmony import */var _ScreenRecorder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ScreenRecorder.js */ "./third_party/puppeteer/package/lib/esm/puppeteer/node/ScreenRecorder.js");
/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ 





 //# sourceMappingURL=node.d.ts.map


}),

}]);