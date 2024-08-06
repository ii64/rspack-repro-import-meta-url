"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_PieChart_test_js"], {
"./ui/legacy/components/perf_ui/PieChart.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



var testChartData = {
    chartName: 'Contents of a Pie',
    size: 110,
    formatter: function(value) {
        return String(value) + ' f';
    },
    showLegend: true,
    total: 100,
    slices: [
        {
            value: 75,
            color: 'crimson',
            title: 'Filling'
        },
        {
            value: 25,
            color: 'burlywood',
            title: 'Crust'
        }
    ]
};
var testChartNoLegendData = {
    chartName: 'Contents of a Pie',
    size: 110,
    formatter: function(value) {
        return String(value) + ' f';
    },
    showLegend: false,
    total: 100,
    slices: [
        {
            value: 75,
            color: 'crimson',
            title: 'Filling'
        },
        {
            value: 25,
            color: 'burlywood',
            title: 'Crust'
        }
    ]
};
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('PieChart', function() {
    describe('with legend', function() {
        it('is labelled by the chart name', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var root = chart.shadowRoot.querySelector('[aria-label="Contents of a Pie"]');
            assert.isTrue(root.classList.contains('root'));
        });
        it('has path nodes for a 2-slice chart', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var slices = chart.shadowRoot.querySelectorAll('path');
            assert.strictEqual(slices.length, 2);
        });
        it('has a legend', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
        });
        it('formats the slice in the legend', function() {
            var _legendRows__textContent, _legendRows__textContent1;
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-size');
            assert.strictEqual((_legendRows__textContent = legendRows[0].textContent) === null || _legendRows__textContent === void 0 ? void 0 : _legendRows__textContent.trim(), '75 f');
            assert.strictEqual((_legendRows__textContent1 = legendRows[1].textContent) === null || _legendRows__textContent1 === void 0 ? void 0 : _legendRows__textContent1.trim(), '25 f');
        });
        it('has a total', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isNotNull(total);
        });
        it('formats the total', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.strictEqual(total.textContent.trim(), '100 f');
        });
        it('selects total by default', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            // Legend has one selected item.
            var fillingLegendRow = legendRows[0];
            var crustLegendRow = legendRows[1];
            var totalLegendRow = legendRows[2];
            assert.isFalse(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isTrue(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is selected.
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isTrue(total.classList.contains('selected'));
        });
        it('sets tabIndex=-1 on the slice', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var slice = chart.shadowRoot.querySelector('path');
            assert.strictEqual(slice.tabIndex, -1);
        });
        it('changes selected when clicking the legend', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var legendName = chart.shadowRoot.querySelector('.pie-chart-name');
            legendName.click();
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            var fillingLegendRow = legendRows[0];
            var crustLegendRow = legendRows[1];
            var totalLegendRow = legendRows[2];
            assert.isTrue(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isFalse(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is not selected.
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isFalse(total.classList.contains('selected'));
        });
        it('changes selected when clicking the chart', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var slice = chart.shadowRoot.querySelector('[aria-label="Filling"');
            slice.dispatchEvent(new Event('click'));
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 3);
            var fillingLegendRow = legendRows[0];
            var crustLegendRow = legendRows[1];
            var totalLegendRow = legendRows[2];
            assert.isTrue(fillingLegendRow.classList.contains('selected'));
            assert.isFalse(crustLegendRow.classList.contains('selected'));
            assert.isFalse(totalLegendRow.classList.contains('selected'));
            // Chart total display in the center is not selected.
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.isFalse(total.classList.contains('selected'));
        });
        it('does not show a focus ring for click selection', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var legendName = chart.shadowRoot.querySelector('.pie-chart-name');
            legendName.click();
            var legendRow = chart.shadowRoot.querySelector('.pie-chart-legend-row:focus-visible');
            assert.isNull(legendRow);
        });
        it('shows a focus ring for keyboard selection', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartData;
            assert.isNotNull(chart.shadowRoot);
            var root = chart.shadowRoot.querySelector('.root');
            root.dispatchEvent(new KeyboardEvent('keydown', {
                key: 'ArrowUp'
            }));
            var legendRow = chart.shadowRoot.querySelector('.pie-chart-legend-row:focus-visible');
            assert.isNotNull(legendRow);
        });
    });
    describe('without legend', function() {
        it('has no legend', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartNoLegendData;
            assert.isNotNull(chart.shadowRoot);
            var legendRows = chart.shadowRoot.querySelectorAll('.pie-chart-legend-row');
            assert.strictEqual(legendRows.length, 0);
        });
        it('sets tabIndex=1 on total', function() {
            var chart = new _perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.PieChart.PieChart();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(chart);
            chart.data = testChartNoLegendData;
            assert.isNotNull(chart.shadowRoot);
            // This is different in no-legend mode!
            var total = chart.shadowRoot.querySelector('.pie-chart-total');
            assert.strictEqual(total.tabIndex, 1);
        });
    });
}); //# sourceMappingURL=PieChart.test.js.map


}),

}]);