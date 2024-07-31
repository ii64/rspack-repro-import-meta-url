(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_puppeteer-replay_package_lib_cli_js"],{

/***/ "./src/third_party/puppeteer-replay/package/lib lazy recursive":
/*!************************************************************************************!*\
  !*** ./src/third_party/puppeteer-replay/package/lib/ lazy strict namespace object ***!
  \************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/third_party/puppeteer-replay/package/lib lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "?ed16":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./src/third_party/puppeteer-replay/package/lib/cli.js":
/*!*************************************************************!*\
  !*** ./src/third_party/puppeteer-replay/package/lib/cli.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var yargs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yargs */ "./node_modules/.pnpm/yargs@17.3.1/node_modules/yargs/index.mjs");
/* harmony import */ var yargs_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yargs/helpers */ "./node_modules/.pnpm/yargs@17.3.1/node_modules/yargs/helpers/helpers.mjs");
/* harmony import */ var _lib_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/main.js */ "./src/third_party/puppeteer-replay/package/lib/main.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'url'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cli-table3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'colorette'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//#!/usr/bin/env node










/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
function getJSONFilesFromFolder(path) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path)
        .filter((file) => Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(file) === '.json')
        .map((file) => Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path, file));
}
function getRecordingPaths(paths, log = true) {
    const recordingPaths = [];
    for (const path of paths) {
        let isDirectory;
        try {
            isDirectory = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path).isDirectory();
        }
        catch (err) {
            log && console.error(`Couldn't find file/folder: ${path}`, err);
            continue;
        }
        if (isDirectory) {
            const filesInFolder = getJSONFilesFromFolder(path);
            if (!filesInFolder.length)
                log && console.error(`There is no recordings in: ${path}`);
            recordingPaths.push(...filesInFolder);
        }
        else
            recordingPaths.push(path);
    }
    return recordingPaths;
}
function getHeadlessEnvVar(headless) {
    if (!headless) {
        return true;
    }
    switch (headless.toLowerCase()) {
        case '1':
        case 'true':
            return true;
        case 'shell':
            return 'shell';
        case '0':
        case 'false':
            return false;
        default:
            throw new Error('PUPPETEER_HEADLESS: unrecognized value');
    }
}
function createStatusReport(results) {
    const table = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cli-table3'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
        head: ['Title', 'Status', 'File', 'Duration'],
        chars: {
            top: '═',
            'top-mid': '╤',
            'top-left': '╔',
            'top-right': '╗',
            bottom: '═',
            'bottom-mid': '╧',
            'bottom-left': '╚',
            'bottom-right': '╝',
            left: '║',
            'left-mid': '╟',
            mid: '─',
            'mid-mid': '┼',
            right: '║',
            'right-mid': '╢',
            middle: '│',
        },
        style: {
            head: ['bold'],
        },
    });
    const resultTextColor = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'colorette'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    for (const result of results) {
        const row = [];
        const duration = result.finishedAt?.getTime() - result.startedAt.getTime() || 0;
        const status = result.success
            ? resultTextColor(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'colorette'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(' Success '))
            : resultTextColor(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'colorette'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(' Failure '));
        row.push(result.title);
        row.push(status);
        row.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(process.cwd(), result.file));
        row.push(`${duration}ms`);
        table.push(row);
    }
    return table;
}
async function importExtensionFromPath(path) {
    const module = await __webpack_require__("./src/third_party/puppeteer-replay/package/lib lazy recursive")(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'url'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path) ? path : Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), path)).toString());
    return module.default;
}
async function runFiles(files, opts = {
    log: true,
    headless: true,
}) {
    let Extension = _lib_main_js__WEBPACK_IMPORTED_MODULE_2__.PuppeteerRunnerOwningBrowserExtension;
    let browser;
    if (opts.extension) {
        Extension = await importExtensionFromPath(opts.extension);
    }
    const results = [];
    for (const file of files) {
        const result = {
            title: '',
            startedAt: new Date(),
            finishedAt: new Date(),
            file,
            success: true,
        };
        opts.log && console.log(`Running ${file}...`);
        try {
            const content = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(file, 'utf-8');
            const object = JSON.parse(content);
            const recording = (0,_lib_main_js__WEBPACK_IMPORTED_MODULE_2__.parse)(object);
            result.title = recording.title;
            const { default: puppeteer } = await Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module 'puppeteer'"); e.code = 'MODULE_NOT_FOUND'; throw e; });
            browser = await puppeteer.launch({
                headless: opts.headless,
            });
            const page = await browser.newPage();
            const extension = new Extension(browser, page);
            const runner = await (0,_lib_main_js__WEBPACK_IMPORTED_MODULE_2__.createRunner)(recording, extension);
            await runner.run();
            opts.log && console.log(`Finished running ${file}`);
        }
        catch (err) {
            opts.log && console.error(`Error running ${file}`, err);
            result.success = false;
        }
        finally {
            result.finishedAt = new Date();
            results.push(result);
            await browser?.close();
        }
    }
    if (opts.log) {
        const statusReport = createStatusReport(results);
        console.log(statusReport.toString());
    }
    if (results.every((result) => result.success))
        return;
    throw new Error('Some recordings have failed to run.');
}

/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
(0,yargs__WEBPACK_IMPORTED_MODULE_0__["default"])((0,yargs_helpers__WEBPACK_IMPORTED_MODULE_1__.hideBin)(process.argv))
    .command('$0 <files..>', 'run files', () => { }, async (argv) => {
    const args = argv;
    const recordingPaths = getRecordingPaths(args.files);
    await runFiles(recordingPaths, {
        log: true,
        headless: getHeadlessEnvVar(args.headless || process.env['PUPPETEER_HEADLESS']),
        extension: args.extension,
    });
})
    .option('headless', {
    type: 'string',
    description: "Run using the browser's headless mode.",
    choices: ['shell', 'true', '1', '0', 'false'],
})
    .option('extension', {
    alias: 'ext',
    type: 'string',
    description: 'Run using an extension identified by the path.',
})
    .parse();
//# sourceMappingURL=cli.js.map


/***/ })

}]);