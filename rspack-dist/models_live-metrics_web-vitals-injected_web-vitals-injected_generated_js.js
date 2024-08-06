(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_live-metrics_web-vitals-injected_web-vitals-injected_generated_js"], {
"./models/live-metrics/web-vitals-injected/web-vitals-injected.generated.js?da14": (function () {
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
(function() {
    'use strict';
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var bfcacheRestoreTime = -1;
    var getBFCacheRestoreTime = function() {
        return bfcacheRestoreTime;
    };
    var onBFCacheRestore = function(cb) {
        addEventListener('pageshow', function(event) {
            if (event.persisted) {
                bfcacheRestoreTime = event.timeStamp;
                cb(event);
            }
        }, true);
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /**
     * Performantly generate a unique, 30-char string by combining a version
     * number, the current timestamp with a 13-digit number integer.
     * @return {string}
     */ var generateUniqueID = function() {
        return "v4-".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getNavigationEntry = function() {
        var navigationEntry = self.performance && performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
        // Check to ensure the `responseStart` property is present and valid.
        // In some cases no value is reported by the browser (for
        // privacy/security reasons), and in other cases (bugs) the value is
        // negative or is larger than the current page time. Ignore these cases:
        // https://github.com/GoogleChrome/web-vitals/issues/137
        // https://github.com/GoogleChrome/web-vitals/issues/162
        // https://github.com/GoogleChrome/web-vitals/issues/275
        if (navigationEntry && navigationEntry.responseStart > 0 && navigationEntry.responseStart < performance.now()) {
            return navigationEntry;
        }
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getActivationStart = function() {
        var navEntry = getNavigationEntry();
        return navEntry && navEntry.activationStart || 0;
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var initMetric = function(name, value) {
        var navEntry = getNavigationEntry();
        var navigationType = 'navigate';
        if (getBFCacheRestoreTime() >= 0) {
            navigationType = 'back-forward-cache';
        } else if (navEntry) {
            if (document.prerendering || getActivationStart() > 0) {
                navigationType = 'prerender';
            } else if (document.wasDiscarded) {
                navigationType = 'restore';
            } else if (navEntry.type) {
                navigationType = navEntry.type.replace(/_/g, '-');
            }
        }
        // Use `entries` type specific for the metric.
        var entries = [];
        return {
            name: name,
            value: typeof value === 'undefined' ? -1 : value,
            rating: 'good',
            delta: 0,
            entries: entries,
            id: generateUniqueID(),
            navigationType: navigationType
        };
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /**
     * Takes a performance entry type and a callback function, and creates a
     * `PerformanceObserver` instance that will observe the specified entry type
     * with buffering enabled and call the callback _for each entry_.
     *
     * This function also feature-detects entry support and wraps the logic in a
     * try/catch to avoid errors in unsupporting browsers.
     */ var observe = function(type, callback, opts) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(type)) {
                var po = new PerformanceObserver(function(list) {
                    // Delay by a microtask to workaround a bug in Safari where the
                    // callback is invoked immediately, rather than in a separate task.
                    // See: https://github.com/GoogleChrome/web-vitals/issues/277
                    Promise.resolve().then(function() {
                        callback(list.getEntries());
                    });
                });
                po.observe(Object.assign({
                    type: type,
                    buffered: true
                }, opts || {}));
                return po;
            }
        } catch (e) {
        // Do nothing.
        }
        return;
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getRating = function(value, thresholds) {
        if (value > thresholds[1]) {
            return 'poor';
        }
        if (value > thresholds[0]) {
            return 'needs-improvement';
        }
        return 'good';
    };
    var bindReporter = function(callback, metric, thresholds, reportAllChanges) {
        var prevValue;
        var delta;
        return function(forceReport) {
            if (metric.value >= 0) {
                if (forceReport || reportAllChanges) {
                    delta = metric.value - (prevValue || 0);
                    // Report the metric if there's a non-zero delta or if no previous
                    // value exists (which can happen in the case of the document becoming
                    // hidden when the metric value is 0).
                    // See: https://github.com/GoogleChrome/web-vitals/issues/14
                    if (delta || prevValue === undefined) {
                        prevValue = metric.value;
                        metric.delta = delta;
                        metric.rating = getRating(metric.value, thresholds);
                        callback(metric);
                    }
                }
            }
        };
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var doubleRAF = function(cb) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return cb();
            });
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var onHidden = function(cb) {
        document.addEventListener('visibilitychange', function() {
            if (document.visibilityState === 'hidden') {
                cb();
            }
        });
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var runOnce = function(cb) {
        var called = false;
        return function() {
            if (!called) {
                cb();
                called = true;
            }
        };
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var firstHiddenTime = -1;
    var initHiddenTime = function() {
        // If the document is hidden when this code runs, assume it was always
        // hidden and the page was loaded in the background, with the one exception
        // that visibility state is always 'hidden' during prerendering, so we have
        // to ignore that case until prerendering finishes (see: `prerenderingchange`
        // event logic below).
        return document.visibilityState === 'hidden' && !document.prerendering ? 0 : Infinity;
    };
    var onVisibilityUpdate = function(event) {
        // If the document is 'hidden' and no previous hidden timestamp has been
        // set, update it based on the current event data.
        if (document.visibilityState === 'hidden' && firstHiddenTime > -1) {
            // If the event is a 'visibilitychange' event, it means the page was
            // visible prior to this change, so the event timestamp is the first
            // hidden time.
            // However, if the event is not a 'visibilitychange' event, then it must
            // be a 'prerenderingchange' event, and the fact that the document is
            // still 'hidden' from the above check means the tab was activated
            // in a background state and so has always been hidden.
            firstHiddenTime = event.type === 'visibilitychange' ? event.timeStamp : 0;
            // Remove all listeners now that a `firstHiddenTime` value has been set.
            removeChangeListeners();
        }
    };
    var addChangeListeners = function() {
        addEventListener('visibilitychange', onVisibilityUpdate, true);
        // IMPORTANT: when a page is prerendering, its `visibilityState` is
        // 'hidden', so in order to account for cases where this module checks for
        // visibility during prerendering, an additional check after prerendering
        // completes is also required.
        addEventListener('prerenderingchange', onVisibilityUpdate, true);
    };
    var removeChangeListeners = function() {
        removeEventListener('visibilitychange', onVisibilityUpdate, true);
        removeEventListener('prerenderingchange', onVisibilityUpdate, true);
    };
    var getVisibilityWatcher = function() {
        if (firstHiddenTime < 0) {
            // If the document is hidden when this code runs, assume it was hidden
            // since navigation start. This isn't a perfect heuristic, but it's the
            // best we can do until an API is available to support querying past
            // visibilityState.
            firstHiddenTime = initHiddenTime();
            addChangeListeners();
            // Reset the time on bfcache restores.
            onBFCacheRestore(function() {
                // Schedule a task in order to track the `visibilityState` once it's
                // had an opportunity to change to visible in all browsers.
                // https://bugs.chromium.org/p/chromium/issues/detail?id=1133363
                setTimeout(function() {
                    firstHiddenTime = initHiddenTime();
                    addChangeListeners();
                }, 0);
            });
        }
        return {
            get firstHiddenTime () {
                return firstHiddenTime;
            }
        };
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var whenActivated = function(callback) {
        if (document.prerendering) {
            addEventListener('prerenderingchange', function() {
                return callback();
            }, true);
        } else {
            callback();
        }
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for FCP. See https://web.dev/articles/fcp#what_is_a_good_fcp_score */ var FCPThresholds = [
        1800,
        3000
    ];
    /**
     * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
     * calls the `callback` function once the value is ready, along with the
     * relevant `paint` performance entry used to determine the value. The reported
     * value is a `DOMHighResTimeStamp`.
     */ var onFCP$1 = function(onReport, opts) {
        // Set defaults
        opts = opts || {};
        whenActivated(function() {
            var visibilityWatcher = getVisibilityWatcher();
            var metric = initMetric('FCP');
            var report;
            var handleEntries = function(entries) {
                entries.forEach(function(entry) {
                    if (entry.name === 'first-contentful-paint') {
                        po.disconnect();
                        // Only report if the page wasn't hidden prior to the first paint.
                        if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                            // The activationStart reference is used because FCP should be
                            // relative to page activation rather than navigation start if the
                            // page was prerendered. But in cases where `activationStart` occurs
                            // after the FCP, this time should be clamped at 0.
                            metric.value = Math.max(entry.startTime - getActivationStart(), 0);
                            metric.entries.push(entry);
                            report(true);
                        }
                    }
                });
            };
            var po = observe('paint', handleEntries);
            if (po) {
                report = bindReporter(onReport, metric, FCPThresholds, opts.reportAllChanges);
                // Only report after a bfcache restore if the `PerformanceObserver`
                // successfully registered or the `paint` entry exists.
                onBFCacheRestore(function(event) {
                    metric = initMetric('FCP');
                    report = bindReporter(onReport, metric, FCPThresholds, opts.reportAllChanges);
                    doubleRAF(function() {
                        metric.value = performance.now() - event.timeStamp;
                        report(true);
                    });
                });
            }
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for CLS. See https://web.dev/articles/cls#what_is_a_good_cls_score */ var CLSThresholds = [
        0.1,
        0.25
    ];
    /**
     * Calculates the [CLS](https://web.dev/articles/cls) value for the current page and
     * calls the `callback` function once the value is ready to be reported, along
     * with all `layout-shift` performance entries that were used in the metric
     * value calculation. The reported value is a `double` (corresponding to a
     * [layout shift score](https://web.dev/articles/cls#layout_shift_score)).
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called as soon as the value is initially
     * determined as well as any time the value changes throughout the page
     * lifespan.
     *
     * _**Important:** CLS should be continually monitored for changes throughout
     * the entire lifespan of a page—including if the user returns to the page after
     * it's been hidden/backgrounded. However, since browsers often [will not fire
     * additional callbacks once the user has backgrounded a
     * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
     * `callback` is always called when the page's visibility state changes to
     * hidden. As a result, the `callback` function might be called multiple times
     * during the same page load._
     */ var onCLS$2 = function(onReport, opts) {
        // Set defaults
        opts = opts || {};
        // Start monitoring FCP so we can only report CLS if FCP is also reported.
        // Note: this is done to match the current behavior of CrUX.
        onFCP$1(runOnce(function() {
            var metric = initMetric('CLS', 0);
            var report;
            var sessionValue = 0;
            var sessionEntries = [];
            var handleEntries = function(entries) {
                entries.forEach(function(entry) {
                    // Only count layout shifts without recent user input.
                    if (!entry.hadRecentInput) {
                        var firstSessionEntry = sessionEntries[0];
                        var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                        // If the entry occurred less than 1 second after the previous entry
                        // and less than 5 seconds after the first entry in the session,
                        // include the entry in the current session. Otherwise, start a new
                        // session.
                        if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 && entry.startTime - firstSessionEntry.startTime < 5000) {
                            sessionValue += entry.value;
                            sessionEntries.push(entry);
                        } else {
                            sessionValue = entry.value;
                            sessionEntries = [
                                entry
                            ];
                        }
                    }
                });
                // If the current session value is larger than the current CLS value,
                // update CLS and the entries contributing to it.
                if (sessionValue > metric.value) {
                    metric.value = sessionValue;
                    metric.entries = sessionEntries;
                    report();
                }
            };
            var po = observe('layout-shift', handleEntries);
            if (po) {
                report = bindReporter(onReport, metric, CLSThresholds, opts.reportAllChanges);
                onHidden(function() {
                    handleEntries(po.takeRecords());
                    report(true);
                });
                // Only report after a bfcache restore if the `PerformanceObserver`
                // successfully registered.
                onBFCacheRestore(function() {
                    sessionValue = 0;
                    metric = initMetric('CLS', 0);
                    report = bindReporter(onReport, metric, CLSThresholds, opts.reportAllChanges);
                    doubleRAF(function() {
                        return report();
                    });
                });
                // Queue a task to report (if nothing else triggers a report first).
                // This allows CLS to be reported as soon as FCP fires when
                // `reportAllChanges` is true.
                setTimeout(report, 0);
            }
        }));
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var interactionCountEstimate = 0;
    var minKnownInteractionId = Infinity;
    var maxKnownInteractionId = 0;
    var updateEstimate = function(entries) {
        entries.forEach(function(e) {
            if (e.interactionId) {
                minKnownInteractionId = Math.min(minKnownInteractionId, e.interactionId);
                maxKnownInteractionId = Math.max(maxKnownInteractionId, e.interactionId);
                interactionCountEstimate = maxKnownInteractionId ? (maxKnownInteractionId - minKnownInteractionId) / 7 + 1 : 0;
            }
        });
    };
    var po;
    /**
     * Returns the `interactionCount` value using the native API (if available)
     * or the polyfill estimate in this module.
     */ var getInteractionCount = function() {
        return po ? interactionCountEstimate : performance.interactionCount || 0;
    };
    /**
     * Feature detects native support or initializes the polyfill if needed.
     */ var initInteractionCountPolyfill = function() {
        if ('interactionCount' in performance || po) return;
        po = observe('event', updateEstimate, {
            type: 'event',
            buffered: true,
            durationThreshold: 0
        });
    };
    /*
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ // A list of longest interactions on the page (by latency) sorted so the
    // longest one is first. The list is at most MAX_INTERACTIONS_TO_CONSIDER long.
    var longestInteractionList = [];
    // A mapping of longest interactions by their interaction ID.
    // This is used for faster lookup.
    var longestInteractionMap = new Map();
    // The default `durationThreshold` used across this library for observing
    // `event` entries via PerformanceObserver.
    var DEFAULT_DURATION_THRESHOLD = 40;
    // Used to store the interaction count after a bfcache restore, since p98
    // interaction latencies should only consider the current navigation.
    var prevInteractionCount = 0;
    /**
     * Returns the interaction count since the last bfcache restore (or for the
     * full page lifecycle if there were no bfcache restores).
     */ var getInteractionCountForNavigation = function() {
        return getInteractionCount() - prevInteractionCount;
    };
    var resetInteractions = function() {
        prevInteractionCount = 0;
        longestInteractionList.length = 0;
        longestInteractionMap.clear();
    };
    /**
     * Returns the estimated p98 longest interaction based on the stored
     * interaction candidates and the interaction count for the current page.
     */ var estimateP98LongestInteraction = function() {
        var candidateInteractionIndex = Math.min(longestInteractionList.length - 1, Math.floor(getInteractionCountForNavigation() / 50));
        return longestInteractionList[candidateInteractionIndex];
    };
    // To prevent unnecessary memory usage on pages with lots of interactions,
    // store at most 10 of the longest interactions to consider as INP candidates.
    var MAX_INTERACTIONS_TO_CONSIDER = 10;
    /**
     * A list of callback functions to run before each entry is processed.
     * Exposing this list allows the attribution build to hook into the
     * entry processing pipeline.
     */ var entryPreProcessingCallbacks = [];
    /**
     * Takes a performance entry and adds it to the list of worst interactions
     * if its duration is long enough to make it among the worst. If the
     * entry is part of an existing interaction, it is merged and the latency
     * and entries list is updated as needed.
     */ var processInteractionEntry = function(entry) {
        entryPreProcessingCallbacks.forEach(function(cb) {
            return cb(entry);
        });
        // Skip further processing for entries that cannot be INP candidates.
        if (!(entry.interactionId || entry.entryType === 'first-input')) return;
        // The least-long of the 10 longest interactions.
        var minLongestInteraction = longestInteractionList[longestInteractionList.length - 1];
        var existingInteraction = longestInteractionMap.get(entry.interactionId);
        // Only process the entry if it's possibly one of the ten longest,
        // or if it's part of an existing interaction.
        if (existingInteraction || longestInteractionList.length < MAX_INTERACTIONS_TO_CONSIDER || entry.duration > minLongestInteraction.latency) {
            // If the interaction already exists, update it. Otherwise create one.
            if (existingInteraction) {
                // If the new entry has a longer duration, replace the old entries,
                // otherwise add to the array.
                if (entry.duration > existingInteraction.latency) {
                    existingInteraction.entries = [
                        entry
                    ];
                    existingInteraction.latency = entry.duration;
                } else if (entry.duration === existingInteraction.latency && entry.startTime === existingInteraction.entries[0].startTime) {
                    existingInteraction.entries.push(entry);
                }
            } else {
                var interaction = {
                    id: entry.interactionId,
                    latency: entry.duration,
                    entries: [
                        entry
                    ]
                };
                longestInteractionMap.set(interaction.id, interaction);
                longestInteractionList.push(interaction);
            }
            // Sort the entries by latency (descending) and keep only the top ten.
            longestInteractionList.sort(function(a, b) {
                return b.latency - a.latency;
            });
            if (longestInteractionList.length > MAX_INTERACTIONS_TO_CONSIDER) {
                longestInteractionList.splice(MAX_INTERACTIONS_TO_CONSIDER).forEach(function(i) {
                    return longestInteractionMap.delete(i.id);
                });
            }
        }
    };
    /*
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /**
     * Runs the passed callback during the next idle period, or immediately
     * if the browser's visibility state is (or becomes) hidden.
     */ var whenIdle = function(cb) {
        var rIC = self.requestIdleCallback || self.setTimeout;
        var handle = -1;
        cb = runOnce(cb);
        // If the document is hidden, run the callback immediately, otherwise
        // race an idle callback with the next `visibilitychange` event.
        if (document.visibilityState === 'hidden') {
            cb();
        } else {
            handle = rIC(cb);
            onHidden(cb);
        }
        return handle;
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for INP. See https://web.dev/articles/inp#what_is_a_good_inp_score */ var INPThresholds = [
        200,
        500
    ];
    /**
     * Calculates the [INP](https://web.dev/articles/inp) value for the current
     * page and calls the `callback` function once the value is ready, along with
     * the `event` performance entries reported for that interaction. The reported
     * value is a `DOMHighResTimeStamp`.
     *
     * A custom `durationThreshold` configuration option can optionally be passed to
     * control what `event-timing` entries are considered for INP reporting. The
     * default threshold is `40`, which means INP scores of less than 40 are
     * reported as 0. Note that this will not affect your 75th percentile INP value
     * unless that value is also less than 40 (well below the recommended
     * [good](https://web.dev/articles/inp#what_is_a_good_inp_score) threshold).
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called as soon as the value is initially
     * determined as well as any time the value changes throughout the page
     * lifespan.
     *
     * _**Important:** INP should be continually monitored for changes throughout
     * the entire lifespan of a page—including if the user returns to the page after
     * it's been hidden/backgrounded. However, since browsers often [will not fire
     * additional callbacks once the user has backgrounded a
     * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
     * `callback` is always called when the page's visibility state changes to
     * hidden. As a result, the `callback` function might be called multiple times
     * during the same page load._
     */ var onINP$2 = function(onReport, opts) {
        // Return if the browser doesn't support all APIs needed to measure INP.
        if (!('PerformanceEventTiming' in self && 'interactionId' in PerformanceEventTiming.prototype)) {
            return;
        }
        // Set defaults
        opts = opts || {};
        whenActivated(function() {
            // TODO(philipwalton): remove once the polyfill is no longer needed.
            initInteractionCountPolyfill();
            var metric = initMetric('INP');
            var report;
            var handleEntries = function(entries) {
                // Queue the `handleEntries()` callback in the next idle task.
                // This is needed to increase the chances that all event entries that
                // occurred between the user interaction and the next paint
                // have been dispatched. Note: there is currently an experiment
                // running in Chrome (EventTimingKeypressAndCompositionInteractionId)
                // 123+ that if rolled out fully may make this no longer necessary.
                whenIdle(function() {
                    entries.forEach(processInteractionEntry);
                    var inp = estimateP98LongestInteraction();
                    if (inp && inp.latency !== metric.value) {
                        metric.value = inp.latency;
                        metric.entries = inp.entries;
                        report();
                    }
                });
            };
            var _opts_durationThreshold;
            var po = observe('event', handleEntries, {
                // Event Timing entries have their durations rounded to the nearest 8ms,
                // so a duration of 40ms would be any event that spans 2.5 or more frames
                // at 60Hz. This threshold is chosen to strike a balance between usefulness
                // and performance. Running this callback for any interaction that spans
                // just one or two frames is likely not worth the insight that could be
                // gained.
                durationThreshold: (_opts_durationThreshold = opts.durationThreshold) !== null && _opts_durationThreshold !== void 0 ? _opts_durationThreshold : DEFAULT_DURATION_THRESHOLD
            });
            report = bindReporter(onReport, metric, INPThresholds, opts.reportAllChanges);
            if (po) {
                // Also observe entries of type `first-input`. This is useful in cases
                // where the first interaction is less than the `durationThreshold`.
                po.observe({
                    type: 'first-input',
                    buffered: true
                });
                onHidden(function() {
                    handleEntries(po.takeRecords());
                    report(true);
                });
                // Only report after a bfcache restore if the `PerformanceObserver`
                // successfully registered.
                onBFCacheRestore(function() {
                    resetInteractions();
                    metric = initMetric('INP');
                    report = bindReporter(onReport, metric, INPThresholds, opts.reportAllChanges);
                });
            }
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for LCP. See https://web.dev/articles/lcp#what_is_a_good_lcp_score */ var LCPThresholds = [
        2500,
        4000
    ];
    var reportedMetricIDs = {};
    /**
     * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
     * calls the `callback` function once the value is ready (along with the
     * relevant `largest-contentful-paint` performance entry used to determine the
     * value). The reported value is a `DOMHighResTimeStamp`.
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called any time a new `largest-contentful-paint`
     * performance entry is dispatched, or once the final value of the metric has
     * been determined.
     */ var onLCP$2 = function(onReport, opts) {
        // Set defaults
        opts = opts || {};
        whenActivated(function() {
            var visibilityWatcher = getVisibilityWatcher();
            var metric = initMetric('LCP');
            var report;
            var handleEntries = function(entries) {
                // If reportAllChanges is set then call this function for each entry,
                // otherwise only consider the last one.
                if (!opts.reportAllChanges) {
                    entries = entries.slice(-1);
                }
                entries.forEach(function(entry) {
                    // Only report if the page wasn't hidden prior to LCP.
                    if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                        // The startTime attribute returns the value of the renderTime if it is
                        // not 0, and the value of the loadTime otherwise. The activationStart
                        // reference is used because LCP should be relative to page activation
                        // rather than navigation start if the page was prerendered. But in cases
                        // where `activationStart` occurs after the LCP, this time should be
                        // clamped at 0.
                        metric.value = Math.max(entry.startTime - getActivationStart(), 0);
                        metric.entries = [
                            entry
                        ];
                        report();
                    }
                });
            };
            var po = observe('largest-contentful-paint', handleEntries);
            if (po) {
                report = bindReporter(onReport, metric, LCPThresholds, opts.reportAllChanges);
                var stopListening = runOnce(function() {
                    if (!reportedMetricIDs[metric.id]) {
                        handleEntries(po.takeRecords());
                        po.disconnect();
                        reportedMetricIDs[metric.id] = true;
                        report(true);
                    }
                });
                // Stop listening after input. Note: while scrolling is an input that
                // stops LCP observation, it's unreliable since it can be programmatically
                // generated. See: https://github.com/GoogleChrome/web-vitals/issues/75
                [
                    'keydown',
                    'click'
                ].forEach(function(type) {
                    // Wrap in a setTimeout so the callback is run in a separate task
                    // to avoid extending the keyboard/click handler to reduce INP impact
                    // https://github.com/GoogleChrome/web-vitals/issues/383
                    addEventListener(type, function() {
                        return whenIdle(stopListening);
                    }, true);
                });
                onHidden(stopListening);
                // Only report after a bfcache restore if the `PerformanceObserver`
                // successfully registered.
                onBFCacheRestore(function(event) {
                    metric = initMetric('LCP');
                    report = bindReporter(onReport, metric, LCPThresholds, opts.reportAllChanges);
                    doubleRAF(function() {
                        metric.value = performance.now() - event.timeStamp;
                        reportedMetricIDs[metric.id] = true;
                        report(true);
                    });
                });
            }
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for TTFB. See https://web.dev/articles/ttfb#what_is_a_good_ttfb_score */ var TTFBThresholds = [
        800,
        1800
    ];
    /**
     * Runs in the next task after the page is done loading and/or prerendering.
     * @param callback
     */ var whenReady = function(callback) {
        if (document.prerendering) {
            whenActivated(function() {
                return whenReady(callback);
            });
        } else if (document.readyState !== 'complete') {
            addEventListener('load', function() {
                return whenReady(callback);
            }, true);
        } else {
            // Queue a task so the callback runs after `loadEventEnd`.
            setTimeout(callback, 0);
        }
    };
    /**
     * Calculates the [TTFB](https://web.dev/articles/ttfb) value for the
     * current page and calls the `callback` function once the page has loaded,
     * along with the relevant `navigation` performance entry used to determine the
     * value. The reported value is a `DOMHighResTimeStamp`.
     *
     * Note, this function waits until after the page is loaded to call `callback`
     * in order to ensure all properties of the `navigation` entry are populated.
     * This is useful if you want to report on other metrics exposed by the
     * [Navigation Timing API](https://w3c.github.io/navigation-timing/). For
     * example, the TTFB metric starts from the page's [time
     * origin](https://www.w3.org/TR/hr-time-2/#sec-time-origin), which means it
     * includes time spent on DNS lookup, connection negotiation, network latency,
     * and server processing time.
     */ var onTTFB$1 = function(onReport, opts) {
        // Set defaults
        opts = opts || {};
        var metric = initMetric('TTFB');
        var report = bindReporter(onReport, metric, TTFBThresholds, opts.reportAllChanges);
        whenReady(function() {
            var navigationEntry = getNavigationEntry();
            if (navigationEntry) {
                // The activationStart reference is used because TTFB should be
                // relative to page activation rather than navigation start if the
                // page was prerendered. But in cases where `activationStart` occurs
                // after the first byte is received, this time should be clamped at 0.
                metric.value = Math.max(navigationEntry.responseStart - getActivationStart(), 0);
                metric.entries = [
                    navigationEntry
                ];
                report(true);
                // Only report TTFB after bfcache restores if a `navigation` entry
                // was reported for the initial load.
                onBFCacheRestore(function() {
                    metric = initMetric('TTFB', 0);
                    report = bindReporter(onReport, metric, TTFBThresholds, opts.reportAllChanges);
                    report(true);
                });
            }
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var firstInputEvent;
    var firstInputDelay;
    var firstInputTimeStamp;
    var callbacks;
    var listenerOpts = {
        passive: true,
        capture: true
    };
    var startTimeStamp = new Date();
    /**
     * Accepts a callback to be invoked once the first input delay and event
     * are known.
     */ var firstInputPolyfill = function(onFirstInput) {
        callbacks.push(onFirstInput);
        reportFirstInputDelayIfRecordedAndValid();
    };
    var resetFirstInputPolyfill = function() {
        callbacks = [];
        firstInputDelay = -1;
        firstInputEvent = null;
        eachEventType(addEventListener);
    };
    /**
     * Records the first input delay and event, so subsequent events can be
     * ignored. All added event listeners are then removed.
     */ var recordFirstInputDelay = function(delay, event) {
        if (!firstInputEvent) {
            firstInputEvent = event;
            firstInputDelay = delay;
            firstInputTimeStamp = new Date();
            eachEventType(removeEventListener);
            reportFirstInputDelayIfRecordedAndValid();
        }
    };
    /**
     * Reports the first input delay and event (if they're recorded and valid)
     * by running the array of callback functions.
     */ var reportFirstInputDelayIfRecordedAndValid = function() {
        // In some cases the recorded delay is clearly wrong, e.g. it's negative
        // or it's larger than the delta between now and initialization.
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/6
        // - https://github.com/GoogleChromeLabs/first-input-delay/issues/7
        if (firstInputDelay >= 0 && // @ts-ignore (subtracting two dates always returns a number)
        firstInputDelay < firstInputTimeStamp - startTimeStamp) {
            var entry = {
                entryType: 'first-input',
                name: firstInputEvent.type,
                target: firstInputEvent.target,
                cancelable: firstInputEvent.cancelable,
                startTime: firstInputEvent.timeStamp,
                processingStart: firstInputEvent.timeStamp + firstInputDelay
            };
            callbacks.forEach(function(callback) {
                callback(entry);
            });
            callbacks = [];
        }
    };
    /**
     * Handles pointer down events, which are a special case.
     * Pointer events can trigger main or compositor thread behavior.
     * We differentiate these cases based on whether or not we see a
     * 'pointercancel' event, which are fired when we scroll. If we're scrolling
     * we don't need to report input delay since FID excludes scrolling and
     * pinch/zooming.
     */ var onPointerDown = function(delay, event) {
        /**
         * Responds to 'pointerup' events and records a delay. If a pointer up event
         * is the next event after a pointerdown event, then it's not a scroll or
         * a pinch/zoom.
         */ var onPointerUp = function() {
            recordFirstInputDelay(delay, event);
            removePointerEventListeners();
        };
        /**
         * Responds to 'pointercancel' events and removes pointer listeners.
         * If a 'pointercancel' is the next event to fire after a pointerdown event,
         * it means this is a scroll or pinch/zoom interaction.
         */ var onPointerCancel = function() {
            removePointerEventListeners();
        };
        /**
         * Removes added pointer event listeners.
         */ var removePointerEventListeners = function() {
            removeEventListener('pointerup', onPointerUp, listenerOpts);
            removeEventListener('pointercancel', onPointerCancel, listenerOpts);
        };
        addEventListener('pointerup', onPointerUp, listenerOpts);
        addEventListener('pointercancel', onPointerCancel, listenerOpts);
    };
    /**
     * Handles all input events and records the time between when the event
     * was received by the operating system and when it's JavaScript listeners
     * were able to run.
     */ var onInput = function(event) {
        // Only count cancelable events, which should trigger behavior
        // important to the user.
        if (event.cancelable) {
            // In some browsers `event.timeStamp` returns a `DOMTimeStamp` value
            // (epoch time) instead of the newer `DOMHighResTimeStamp`
            // (document-origin time). To check for that we assume any timestamp
            // greater than 1 trillion is a `DOMTimeStamp`, and compare it using
            // the `Date` object rather than `performance.now()`.
            // - https://github.com/GoogleChromeLabs/first-input-delay/issues/4
            var isEpochTime = event.timeStamp > 1e12;
            var now = isEpochTime ? new Date() : performance.now();
            // Input delay is the delta between when the system received the event
            // (e.g. event.timeStamp) and when it could run the callback (e.g. `now`).
            var delay = now - event.timeStamp;
            if (event.type == 'pointerdown') {
                onPointerDown(delay, event);
            } else {
                recordFirstInputDelay(delay, event);
            }
        }
    };
    /**
     * Invokes the passed callback const for =  each event type with t =>he
     * `onInput` const and =  `listenerOpts =>`.
     */ var eachEventType = function(callback) {
        var eventTypes = [
            'mousedown',
            'keydown',
            'touchstart',
            'pointerdown'
        ];
        eventTypes.forEach(function(type) {
            return callback(type, onInput, listenerOpts);
        });
    };
    /*
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ /** Thresholds for FID. See https://web.dev/articles/fid#what_is_a_good_fid_score */ var FIDThresholds = [
        100,
        300
    ];
    /**
     * Calculates the [FID](https://web.dev/articles/fid) value for the current page and
     * calls the `callback` function once the value is ready, along with the
     * relevant `first-input` performance entry used to determine the value. The
     * reported value is a `DOMHighResTimeStamp`.
     *
     * _**Important:** since FID is only reported after the user interacts with the
     * page, it's possible that it will not be reported for some page loads._
     */ var onFID$1 = function(onReport, opts) {
        // Set defaults
        opts = opts || {};
        whenActivated(function() {
            var visibilityWatcher = getVisibilityWatcher();
            var metric = initMetric('FID');
            var report;
            var handleEntry = function(entry) {
                // Only report if the page wasn't hidden prior to the first input.
                if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                    metric.value = entry.processingStart - entry.startTime;
                    metric.entries.push(entry);
                    report(true);
                }
            };
            var handleEntries = function(entries) {
                entries.forEach(handleEntry);
            };
            var po = observe('first-input', handleEntries);
            report = bindReporter(onReport, metric, FIDThresholds, opts.reportAllChanges);
            if (po) {
                onHidden(runOnce(function() {
                    handleEntries(po.takeRecords());
                    po.disconnect();
                }));
                onBFCacheRestore(function() {
                    metric = initMetric('FID');
                    report = bindReporter(onReport, metric, FIDThresholds, opts.reportAllChanges);
                    // Browsers don't re-emit FID on bfcache restore so fake it until you make it
                    resetFirstInputPolyfill();
                    firstInputPolyfill(handleEntry);
                });
            }
        });
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getLoadState = function(timestamp) {
        if (document.readyState === 'loading') {
            // If the `readyState` is 'loading' there's no need to look at timestamps
            // since the timestamp has to be the current time or earlier.
            return 'loading';
        } else {
            var navigationEntry = getNavigationEntry();
            if (navigationEntry) {
                if (timestamp < navigationEntry.domInteractive) {
                    return 'loading';
                } else if (navigationEntry.domContentLoadedEventStart === 0 || timestamp < navigationEntry.domContentLoadedEventStart) {
                    // If the `domContentLoadedEventStart` timestamp has not yet been
                    // set, or if the given timestamp is less than that value.
                    return 'dom-interactive';
                } else if (navigationEntry.domComplete === 0 || timestamp < navigationEntry.domComplete) {
                    // If the `domComplete` timestamp has not yet been
                    // set, or if the given timestamp is less than that value.
                    return 'dom-content-loaded';
                }
            }
        }
        // If any of the above fail, default to loaded. This could really only
        // happy if the browser doesn't support the performance timeline, which
        // most likely means this code would never run anyway.
        return 'complete';
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getName = function(node) {
        var name = node.nodeName;
        return node.nodeType === 1 ? name.toLowerCase() : name.toUpperCase().replace(/^#/, '');
    };
    var getSelector = function(node, maxLen) {
        var sel = '';
        try {
            while(node && node.nodeType !== 9){
                var el = node;
                var part = el.id ? '#' + el.id : getName(el) + (el.classList && el.classList.value && el.classList.value.trim() && el.classList.value.trim().length ? '.' + el.classList.value.trim().replace(/\s+/g, '.') : '');
                if (sel.length + part.length > (maxLen || 100) - 1) return sel || part;
                sel = sel ? part + '>' + sel : part;
                if (el.id) break;
                node = el.parentNode;
            }
        } catch (err) {
        // Do nothing...
        }
        return sel;
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var getLargestLayoutShiftEntry = function(entries) {
        return entries.reduce(function(a, b) {
            return a && a.value > b.value ? a : b;
        });
    };
    var getLargestLayoutShiftSource = function(sources) {
        return sources.find(function(s) {
            return s.node && s.node.nodeType === 1;
        }) || sources[0];
    };
    var attributeCLS = function(metric) {
        // Use an empty object if no other attribution has been set.
        var attribution = {};
        if (metric.entries.length) {
            var largestEntry = getLargestLayoutShiftEntry(metric.entries);
            if (largestEntry && largestEntry.sources && largestEntry.sources.length) {
                var largestSource = getLargestLayoutShiftSource(largestEntry.sources);
                if (largestSource) {
                    attribution = {
                        largestShiftTarget: getSelector(largestSource.node),
                        largestShiftTime: largestEntry.startTime,
                        largestShiftValue: largestEntry.value,
                        largestShiftSource: largestSource,
                        largestShiftEntry: largestEntry,
                        loadState: getLoadState(largestEntry.startTime)
                    };
                }
            }
        }
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [CLS](https://web.dev/articles/cls) value for the current page and
     * calls the `callback` function once the value is ready to be reported, along
     * with all `layout-shift` performance entries that were used in the metric
     * value calculation. The reported value is a `double` (corresponding to a
     * [layout shift score](https://web.dev/articles/cls#layout_shift_score)).
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called as soon as the value is initially
     * determined as well as any time the value changes throughout the page
     * lifespan.
     *
     * _**Important:** CLS should be continually monitored for changes throughout
     * the entire lifespan of a page—including if the user returns to the page after
     * it's been hidden/backgrounded. However, since browsers often [will not fire
     * additional callbacks once the user has backgrounded a
     * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
     * `callback` is always called when the page's visibility state changes to
     * hidden. As a result, the `callback` function might be called multiple times
     * during the same page load._
     */ var onCLS$1 = function(onReport, opts) {
        onCLS$2(function(metric) {
            var metricWithAttribution = attributeCLS(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var attributeFCP = function(metric) {
        // Use a default object if no other attribution has been set.
        var attribution = {
            timeToFirstByte: 0,
            firstByteToFCP: metric.value,
            loadState: getLoadState(getBFCacheRestoreTime())
        };
        if (metric.entries.length) {
            var navigationEntry = getNavigationEntry();
            var fcpEntry = metric.entries[metric.entries.length - 1];
            if (navigationEntry) {
                var activationStart = navigationEntry.activationStart || 0;
                var ttfb = Math.max(0, navigationEntry.responseStart - activationStart);
                attribution = {
                    timeToFirstByte: ttfb,
                    firstByteToFCP: metric.value - ttfb,
                    loadState: getLoadState(metric.entries[0].startTime),
                    navigationEntry: navigationEntry,
                    fcpEntry: fcpEntry
                };
            }
        }
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [FCP](https://web.dev/articles/fcp) value for the current page and
     * calls the `callback` function once the value is ready, along with the
     * relevant `paint` performance entry used to determine the value. The reported
     * value is a `DOMHighResTimeStamp`.
     */ var onFCP = function(onReport, opts) {
        onFCP$1(function(metric) {
            var metricWithAttribution = attributeFCP(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ // The maximum number of previous frames for which data is kept.
    // Storing data about previous frames is necessary to handle cases where event
    // and LoAF entries are dispatched out of order, and so a buffer of previous
    // frame data is needed to determine various bits of INP attribution once all
    // the frame-related data has come in.
    // In most cases this out-of-order data is only off by a frame or two, so
    // keeping the most recent 50 should be more than sufficient.
    var MAX_PREVIOUS_FRAMES = 50;
    // A PerformanceObserver, observing new `long-animation-frame` entries.
    // If this variable is defined it means the browser supports LoAF.
    var loafObserver;
    // A list of LoAF entries that have been dispatched and could potentially
    // intersect with the INP candidate interaction. Note that periodically this
    // list is cleaned up and entries that are known to not match INP are removed.
    var pendingLoAFs = [];
    // An array of groups of all the event timing entries that occurred within a
    // particular frame. Note that periodically this array is cleaned up and entries
    // that are known to not match INP are removed.
    var pendingEntriesGroups = [];
    // The `processingEnd` time of most recently-processed event, chronologically.
    var latestProcessingEnd;
    // A WeakMap to look up the event-timing-entries group of a given entry.
    // Note that this only maps from "important" entries: either the first input or
    // those with an `interactionId`.
    var entryToEntriesGroupMap = new WeakMap();
    // A mapping of interactionIds to the target Node.
    var interactionTargetMap = new Map();
    // A reference to the idle task used to clean up entries from the above
    // variables. If the value is -1 it means no task is queue, and if it's
    // greater than -1 the value corresponds to the idle callback handle.
    var idleHandle = -1;
    /**
     * Adds new LoAF entries to the `pendingLoAFs` list.
     */ var handleLoAFEntries = function(entries) {
        pendingLoAFs = pendingLoAFs.concat(entries);
        queueCleanup();
    };
    // Get a reference to the interaction target element in case it's removed
    // from the DOM later.
    var saveInteractionTarget = function(entry) {
        if (entry.interactionId && entry.target && !interactionTargetMap.has(entry.interactionId)) {
            interactionTargetMap.set(entry.interactionId, entry.target);
        }
    };
    /**
     * Groups entries that were presented within the same animation frame by
     * a common `renderTime`. This function works by referencing
     * `pendingEntriesGroups` and using an existing render time if one is found
     * (otherwise creating a new one). This function also adds all interaction
     * entries to an `entryToRenderTimeMap` WeakMap so that the "grouped" entries
     * can be looked up later.
     */ var groupEntriesByRenderTime = function(entry) {
        var renderTime = entry.startTime + entry.duration;
        var group;
        latestProcessingEnd = Math.max(latestProcessingEnd, entry.processingEnd);
        // Iterate over all previous render times in reverse order to find a match.
        // Go in reverse since the most likely match will be at the end.
        for(var i = pendingEntriesGroups.length - 1; i >= 0; i--){
            var potentialGroup = pendingEntriesGroups[i];
            // If a group's render time is within 8ms of the entry's render time,
            // assume they were part of the same frame and add it to the group.
            if (Math.abs(renderTime - potentialGroup.renderTime) <= 8) {
                group = potentialGroup;
                group.startTime = Math.min(entry.startTime, group.startTime);
                group.processingStart = Math.min(entry.processingStart, group.processingStart);
                group.processingEnd = Math.max(entry.processingEnd, group.processingEnd);
                group.entries.push(entry);
                break;
            }
        }
        // If there was no matching group, assume this is a new frame.
        if (!group) {
            group = {
                startTime: entry.startTime,
                processingStart: entry.processingStart,
                processingEnd: entry.processingEnd,
                renderTime: renderTime,
                entries: [
                    entry
                ]
            };
            pendingEntriesGroups.push(group);
        }
        // Store the grouped render time for this entry for reference later.
        if (entry.interactionId || entry.entryType === 'first-input') {
            entryToEntriesGroupMap.set(entry, group);
        }
        queueCleanup();
    };
    var queueCleanup = function() {
        // Queue cleanup of entries that are not part of any INP candidates.
        if (idleHandle < 0) {
            idleHandle = whenIdle(cleanupEntries);
        }
    };
    var cleanupEntries = function() {
        // Delete any stored interaction target elements if they're not part of one
        // of the 10 longest interactions.
        if (interactionTargetMap.size > 10) {
            interactionTargetMap.forEach(function(_, key) {
                if (!longestInteractionMap.has(key)) {
                    interactionTargetMap.delete(key);
                }
            });
        }
        // Keep all render times that are part of a pending INP candidate or
        // that occurred within the 50 most recently-dispatched groups of events.
        var longestInteractionGroups = longestInteractionList.map(function(i) {
            return entryToEntriesGroupMap.get(i.entries[0]);
        });
        var minIndex = pendingEntriesGroups.length - MAX_PREVIOUS_FRAMES;
        pendingEntriesGroups = pendingEntriesGroups.filter(function(group, index) {
            if (index >= minIndex) return true;
            return longestInteractionGroups.includes(group);
        });
        // Keep all pending LoAF entries that either:
        // 1) intersect with entries in the newly cleaned up `pendingEntriesGroups`
        // 2) occur after the most recently-processed event entry.
        var loafsToKeep = new Set();
        for(var i = 0; i < pendingEntriesGroups.length; i++){
            var group = pendingEntriesGroups[i];
            getIntersectingLoAFs(group.startTime, group.processingEnd).forEach(function(loaf) {
                loafsToKeep.add(loaf);
            });
        }
        for(var i1 = 0; i1 < MAX_PREVIOUS_FRAMES; i1++){
            // Look at pending LoAF in reverse order so the most recent are first.
            var loaf = pendingLoAFs[pendingLoAFs.length - 1 - i1];
            // If we reach LoAFs that overlap with event processing,
            // we can assume all previous ones have already been handled.
            if (!loaf || loaf.startTime < latestProcessingEnd) break;
            loafsToKeep.add(loaf);
        }
        pendingLoAFs = Array.from(loafsToKeep);
        // Reset the idle callback handle so it can be queued again.
        idleHandle = -1;
    };
    entryPreProcessingCallbacks.push(saveInteractionTarget, groupEntriesByRenderTime);
    var getIntersectingLoAFs = function(start, end) {
        var intersectingLoAFs = [];
        for(var i = 0, loaf; loaf = pendingLoAFs[i]; i++){
            // If the LoAF ends before the given start time, ignore it.
            if (loaf.startTime + loaf.duration < start) continue;
            // If the LoAF starts after the given end time, ignore it and all
            // subsequent pending LoAFs (because they're in time order).
            if (loaf.startTime > end) break;
            // Still here? If so this LoAF intersects with the interaction.
            intersectingLoAFs.push(loaf);
        }
        return intersectingLoAFs;
    };
    var attributeINP = function(metric) {
        var firstEntry = metric.entries[0];
        var group = entryToEntriesGroupMap.get(firstEntry);
        var processingStart = firstEntry.processingStart;
        var processingEnd = group.processingEnd;
        // Sort the entries in processing time order.
        var processedEventEntries = group.entries.sort(function(a, b) {
            return a.processingStart - b.processingStart;
        });
        var longAnimationFrameEntries = getIntersectingLoAFs(firstEntry.startTime, processingEnd);
        // The first interaction entry may not have a target defined, so use the
        // first one found in the entry list.
        // TODO: when the following bug is fixed just use `firstInteractionEntry`.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1367329
        // As a fallback, also check the interactionTargetMap (to account for
        // cases where the element is removed from the DOM before reporting happens).
        var firstEntryWithTarget = metric.entries.find(function(entry) {
            return entry.target;
        });
        var interactionTargetElement = firstEntryWithTarget && firstEntryWithTarget.target || interactionTargetMap.get(firstEntry.interactionId);
        // Since entry durations are rounded to the nearest 8ms, we need to clamp
        // the `nextPaintTime` value to be higher than the `processingEnd` or
        // end time of any LoAF entry.
        var nextPaintTimeCandidates = [
            firstEntry.startTime + firstEntry.duration,
            processingEnd
        ].concat(longAnimationFrameEntries.map(function(loaf) {
            return loaf.startTime + loaf.duration;
        }));
        var nextPaintTime = Math.max.apply(Math, nextPaintTimeCandidates);
        var attribution = {
            interactionTarget: getSelector(interactionTargetElement),
            interactionTargetElement: interactionTargetElement,
            interactionType: firstEntry.name.startsWith('key') ? 'keyboard' : 'pointer',
            interactionTime: firstEntry.startTime,
            nextPaintTime: nextPaintTime,
            processedEventEntries: processedEventEntries,
            longAnimationFrameEntries: longAnimationFrameEntries,
            inputDelay: processingStart - firstEntry.startTime,
            processingDuration: processingEnd - processingStart,
            presentationDelay: Math.max(nextPaintTime - processingEnd, 0),
            loadState: getLoadState(firstEntry.startTime)
        };
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [INP](https://web.dev/articles/inp) value for the current
     * page and calls the `callback` function once the value is ready, along with
     * the `event` performance entries reported for that interaction. The reported
     * value is a `DOMHighResTimeStamp`.
     *
     * A custom `durationThreshold` configuration option can optionally be passed to
     * control what `event-timing` entries are considered for INP reporting. The
     * default threshold is `40`, which means INP scores of less than 40 are
     * reported as 0. Note that this will not affect your 75th percentile INP value
     * unless that value is also less than 40 (well below the recommended
     * [good](https://web.dev/articles/inp#what_is_a_good_inp_score) threshold).
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called as soon as the value is initially
     * determined as well as any time the value changes throughout the page
     * lifespan.
     *
     * _**Important:** INP should be continually monitored for changes throughout
     * the entire lifespan of a page—including if the user returns to the page after
     * it's been hidden/backgrounded. However, since browsers often [will not fire
     * additional callbacks once the user has backgrounded a
     * page](https://developer.chrome.com/blog/page-lifecycle-api/#advice-hidden),
     * `callback` is always called when the page's visibility state changes to
     * hidden. As a result, the `callback` function might be called multiple times
     * during the same page load._
     */ var onINP$1 = function(onReport, opts) {
        if (!loafObserver) {
            loafObserver = observe('long-animation-frame', handleLoAFEntries);
        }
        onINP$2(function(metric) {
            var metricWithAttribution = attributeINP(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var attributeLCP = function(metric) {
        // Use a default object if no other attribution has been set.
        var attribution = {
            timeToFirstByte: 0,
            resourceLoadDelay: 0,
            resourceLoadDuration: 0,
            elementRenderDelay: metric.value
        };
        if (metric.entries.length) {
            var navigationEntry = getNavigationEntry();
            if (navigationEntry) {
                var activationStart = navigationEntry.activationStart || 0;
                var lcpEntry = metric.entries[metric.entries.length - 1];
                var lcpResourceEntry = lcpEntry.url && performance.getEntriesByType('resource').filter(function(e) {
                    return e.name === lcpEntry.url;
                })[0];
                var ttfb = Math.max(0, navigationEntry.responseStart - activationStart);
                var lcpRequestStart = Math.max(ttfb, // Prefer `requestStart` (if TOA is set), otherwise use `startTime`.
                lcpResourceEntry ? (lcpResourceEntry.requestStart || lcpResourceEntry.startTime) - activationStart : 0);
                var lcpResponseEnd = Math.max(lcpRequestStart, lcpResourceEntry ? lcpResourceEntry.responseEnd - activationStart : 0);
                var lcpRenderTime = Math.max(lcpResponseEnd, lcpEntry.startTime - activationStart);
                attribution = {
                    element: getSelector(lcpEntry.element),
                    timeToFirstByte: ttfb,
                    resourceLoadDelay: lcpRequestStart - ttfb,
                    resourceLoadDuration: lcpResponseEnd - lcpRequestStart,
                    elementRenderDelay: lcpRenderTime - lcpResponseEnd,
                    navigationEntry: navigationEntry,
                    lcpEntry: lcpEntry
                };
                // Only attribution the URL and resource entry if they exist.
                if (lcpEntry.url) {
                    attribution.url = lcpEntry.url;
                }
                if (lcpResourceEntry) {
                    attribution.lcpResourceEntry = lcpResourceEntry;
                }
            }
        }
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [LCP](https://web.dev/articles/lcp) value for the current page and
     * calls the `callback` function once the value is ready (along with the
     * relevant `largest-contentful-paint` performance entry used to determine the
     * value). The reported value is a `DOMHighResTimeStamp`.
     *
     * If the `reportAllChanges` configuration option is set to `true`, the
     * `callback` function will be called any time a new `largest-contentful-paint`
     * performance entry is dispatched, or once the final value of the metric has
     * been determined.
     */ var onLCP$1 = function(onReport, opts) {
        onLCP$2(function(metric) {
            var metricWithAttribution = attributeLCP(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var attributeTTFB = function(metric) {
        // Use a default object if no other attribution has been set.
        var attribution = {
            waitingDuration: 0,
            cacheDuration: 0,
            dnsDuration: 0,
            connectionDuration: 0,
            requestDuration: 0
        };
        if (metric.entries.length) {
            var navigationEntry = metric.entries[0];
            var activationStart = navigationEntry.activationStart || 0;
            // Measure from workerStart or fetchStart so any service worker startup
            // time is included in cacheDuration (which also includes other sw time
            // anyway, that cannot be accurately split out cross-browser).
            var waitEnd = Math.max((navigationEntry.workerStart || navigationEntry.fetchStart) - activationStart, 0);
            var dnsStart = Math.max(navigationEntry.domainLookupStart - activationStart, 0);
            var connectStart = Math.max(navigationEntry.connectStart - activationStart, 0);
            var connectEnd = Math.max(navigationEntry.connectEnd - activationStart, 0);
            attribution = {
                waitingDuration: waitEnd,
                cacheDuration: dnsStart - waitEnd,
                // dnsEnd usually equals connectStart but use connectStart over dnsEnd
                // for dnsDuration in case there ever is a gap.
                dnsDuration: connectStart - dnsStart,
                connectionDuration: connectEnd - connectStart,
                // There is often a gap between connectEnd and requestStart. Attribute
                // that to requestDuration so connectionDuration remains 0 for
                // service worker controlled requests were connectStart and connectEnd
                // are the same.
                requestDuration: metric.value - connectEnd,
                navigationEntry: navigationEntry
            };
        }
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [TTFB](https://web.dev/articles/ttfb) value for the
     * current page and calls the `callback` function once the page has loaded,
     * along with the relevant `navigation` performance entry used to determine the
     * value. The reported value is a `DOMHighResTimeStamp`.
     *
     * Note, this function waits until after the page is loaded to call `callback`
     * in order to ensure all properties of the `navigation` entry are populated.
     * This is useful if you want to report on other metrics exposed by the
     * [Navigation Timing API](https://w3c.github.io/navigation-timing/). For
     * example, the TTFB metric starts from the page's [time
     * origin](https://www.w3.org/TR/hr-time-2/#sec-time-origin), which means it
     * includes time spent on DNS lookup, connection negotiation, network latency,
     * and server processing time.
     */ var onTTFB = function(onReport, opts) {
        onTTFB$1(function(metric) {
            var metricWithAttribution = attributeTTFB(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var attributeFID = function(metric) {
        var fidEntry = metric.entries[0];
        var attribution = {
            eventTarget: getSelector(fidEntry.target),
            eventType: fidEntry.name,
            eventTime: fidEntry.startTime,
            eventEntry: fidEntry,
            loadState: getLoadState(fidEntry.startTime)
        };
        // Use Object.assign to set property to keep tsc happy.
        var metricWithAttribution = Object.assign(metric, {
            attribution: attribution
        });
        return metricWithAttribution;
    };
    /**
     * Calculates the [FID](https://web.dev/articles/fid) value for the current page and
     * calls the `callback` function once the value is ready, along with the
     * relevant `first-input` performance entry used to determine the value. The
     * reported value is a `DOMHighResTimeStamp`.
     *
     * _**Important:** since FID is only reported after the user interacts with the
     * page, it's possible that it will not be reported for some page loads._
     */ var onFID = function(onReport, opts) {
        onFID$1(function(metric) {
            var metricWithAttribution = attributeFID(metric);
            onReport(metricWithAttribution);
        }, opts);
    };
    /*
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     https://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ var index = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        onCLS: onCLS$1,
        onFCP: onFCP,
        onINP: onINP$1,
        onLCP: onLCP$1,
        onTTFB: onTTFB,
        CLSThresholds: CLSThresholds,
        FCPThresholds: FCPThresholds,
        INPThresholds: INPThresholds,
        LCPThresholds: LCPThresholds,
        TTFBThresholds: TTFBThresholds,
        onFID: onFID,
        FIDThresholds: FIDThresholds
    });
    // Copyright 2024 The Chromium Authors. All rights reserved.
    // Use of this source code is governed by a BSD-style license that can be
    // found in the LICENSE file.
    function onEachInteraction$1(callback) {
        var eventObserver = new PerformanceObserver(function(list) {
            var entries = list.getEntries();
            var interactions = new Map();
            var performanceEventTimings = entries.filter(function(entry) {
                return 'interactionId' in entry;
            }).filter(function(entry) {
                return entry.interactionId;
            });
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = performanceEventTimings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    var interaction = interactions.get(entry.interactionId) || [];
                    interaction.push(entry);
                    interactions.set(entry.interactionId, interaction);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                // Will report as a single interaction even if parts are in separate frames.
                // Consider splitting by animation frame.
                for(var _iterator1 = interactions.entries()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var _step_value = _sliced_to_array(_step1.value, 2), interactionId = _step_value[0], interaction1 = _step_value[1];
                    var longestEntry = interaction1.reduce(function(prev, curr) {
                        return prev.duration >= curr.duration ? prev : curr;
                    });
                    var value = longestEntry.duration;
                    var firstEntryWithTarget = interaction1.find(function(entry) {
                        return entry.target;
                    });
                    var _firstEntryWithTarget_target;
                    callback({
                        attribution: {
                            interactionTargetElement: (_firstEntryWithTarget_target = firstEntryWithTarget === null || firstEntryWithTarget === void 0 ? void 0 : firstEntryWithTarget.target) !== null && _firstEntryWithTarget_target !== void 0 ? _firstEntryWithTarget_target : null,
                            interactionTime: longestEntry.startTime,
                            interactionType: longestEntry.name.startsWith('key') ? 'keyboard' : 'pointer',
                            interactionId: interactionId
                        },
                        entries: interaction1,
                        value: value
                    });
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        });
        eventObserver.observe({
            type: 'first-input',
            buffered: true
        });
        eventObserver.observe({
            type: 'event',
            durationThreshold: 0,
            buffered: true
        });
    }
    var OnEachInteraction = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        onEachInteraction: onEachInteraction$1
    });
    // Copyright 2024 The Chromium Authors. All rights reserved.
    // Use of this source code is governed by a BSD-style license that can be
    // found in the LICENSE file.
    var EVENT_BINDING_NAME = '__chromium_devtools_metrics_reporter';
    // Copyright 2024 The Chromium Authors. All rights reserved.
    var onLCP = index.onLCP, onCLS = index.onCLS, onINP = index.onINP;
    var onEachInteraction = OnEachInteraction.onEachInteraction;
    function sendEventToDevTools(event) {
        var payload = JSON.stringify(event);
        window[EVENT_BINDING_NAME](payload);
    }
    var nodeList = [];
    function establishNodeIndex(node) {
        var index = nodeList.length;
        nodeList.push(node);
        return index;
    }
    /**
     * The data sent over the event binding needs to be JSON serializable, so we
     * can't send DOM nodes directly. Instead we create an ID for each node (see
     * `establishNodeIndex`) that we can later use to retrieve a remote object
     * for that node.
     *
     * This function is used by `Runtime.evaluate` calls to get a remote object
     * for the specified index.
     */ window.getNodeForIndex = function(index) {
        return nodeList[index];
    };
    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
    function initialize() {
        // `Page.addScriptToEvaluateOnNewDocument` will create a script that runs
        // in all frames. We only want metrics from the main frame so the filter
        // has to be here.
        if (inIframe()) {
            return;
        }
        sendEventToDevTools({
            name: 'reset'
        });
        // We want to treat bfcache navigations like a standard navigations, so emit
        // a reset event when bfcache is restored.
        //
        // Metric functions will also re-emit their values using this listener's callback.
        // To ensure this event is fired before those values are emitted, register this
        // callback before any others.
        onBFCacheRestore(function() {
            sendEventToDevTools({
                name: 'reset'
            });
        });
        onLCP(function(metric) {
            var _metric_attribution_lcpEntry;
            var event = {
                name: 'LCP',
                value: metric.value
            };
            var element = (_metric_attribution_lcpEntry = metric.attribution.lcpEntry) === null || _metric_attribution_lcpEntry === void 0 ? void 0 : _metric_attribution_lcpEntry.element;
            if (element) {
                event.nodeIndex = establishNodeIndex(element);
            }
            sendEventToDevTools(event);
        }, {
            reportAllChanges: true
        });
        onCLS(function(metric) {
            var event = {
                name: 'CLS',
                value: metric.value
            };
            sendEventToDevTools(event);
        }, {
            reportAllChanges: true
        });
        onINP(function(metric) {
            var event = {
                name: 'INP',
                value: metric.value,
                interactionType: metric.attribution.interactionType
            };
            var element = metric.attribution.interactionTargetElement;
            if (element) {
                event.nodeIndex = establishNodeIndex(element);
            }
            sendEventToDevTools(event);
        }, {
            reportAllChanges: true
        });
        onEachInteraction(function(interaction) {
            var event = {
                name: 'Interaction',
                duration: interaction.value,
                interactionId: interaction.attribution.interactionId,
                interactionType: interaction.attribution.interactionType
            };
            var node = interaction.attribution.interactionTargetElement;
            if (node) {
                event.nodeIndex = establishNodeIndex(node);
            }
            sendEventToDevTools(event);
        });
    }
    initialize();
})();


}),

}]);