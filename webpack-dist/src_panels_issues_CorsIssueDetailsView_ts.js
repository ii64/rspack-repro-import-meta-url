"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_CorsIssueDetailsView_ts"],{

/***/ "./src/panels/issues/CorsIssueDetailsView.ts":
/*!***************************************************!*\
  !*** ./src/panels/issues/CorsIssueDetailsView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CorsIssueDetailsView: () => (/* binding */ CorsIssueDetailsView)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AffectedResourcesView.js */ "./src/panels/issues/AffectedResourcesView.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CorsIssueDetailsView_instances, _a, _CorsIssueDetailsView_appendStatus, _CorsIssueDetailsView_appendDetails, _CorsIssueDetailsView_appendSecureContextCell, _CorsIssueDetailsView_appendDetail;







const UIStrings = {
    /**
     *@description Label for number of affected resources indication in issue view
     */
    nRequests: '{n, plural, =1 {# request} other {# requests}}',
    /**
     *@description Value for the status column in SharedArrayBuffer issues
     */
    warning: 'warning',
    /**
     *@description The kind of resolution for a mixed content issue
     */
    blocked: 'blocked',
    /**
     *@description Text for the status column in the item list in the CORS issue details view
     */
    status: 'Status',
    /**
     *@description Text for the column showing the associated network request in the item list in the CORS issue details view
     */
    request: 'Request',
    /**
     *@description Text for the column showing the resource's address in the item list in the CORS issue details view
     */
    resourceAddressSpace: 'Resource Address',
    /**
     *@description Text for the column showing the address of the resource load initiator in the item list in the CORS issue details view
     */
    initiatorAddressSpace: 'Initiator Address',
    /**
     *@description Text for the status of the initiator context
     */
    secure: 'secure',
    /**
     *@description Text for the status of the initiator context
     */
    insecure: 'insecure',
    /**
     *@description Title for a column showing the status of the initiator context. The initiator context is either secure or insecure depending on whether it was loaded via HTTP or HTTPS.
     */
    initiatorContext: 'Initiator Context',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing a link to the associated preflight request in case the preflight request caused the issue.
     */
    preflightRequestIfProblematic: 'Preflight Request (if problematic)',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing a link to the associated preflight request.
     */
    preflightRequest: 'Preflight Request',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the name of the problematic HTTP response header.
     */
    header: 'Header',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the problem associated with the resource.
     */
    problem: 'Problem',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the value that was invalid and caused the problem if it is available.
     */
    invalidValue: 'Invalid Value (if available)',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header was missing.
     */
    problemMissingHeader: 'Missing Header',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header contained multiple values.
     */
    problemMultipleValues: 'Multiple Values',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that a response header contained an invalid value.
     */
    problemInvalidValue: 'Invalid Value',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that the response to the preflight request was a redirect.
     */
    preflightDisallowedRedirect: 'Response to preflight was a redirect',
    /**
     *@description Content for the problem column in the affected resources table for a CORS issue that indicates that the HTTP status the preflight request was not successful.
     */
    preflightInvalidStatus: 'HTTP status of preflight request didn\'t indicate success',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the origin that was allowed according to CORS headers.
     */
    allowedOrigin: 'Allowed Origin (from header)',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the value of the Access-Control-Allow-Credentials response header.
     */
    allowCredentialsValueFromHeader: '`Access-Control-Allow-Credentials` Header Value',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the request method that was disallowed.
     */
    disallowedRequestMethod: 'Disallowed Request Method',
    /**
     *@description Title for a column in the affected resources for a CORS issue showing the request header that was disallowed.
     */
    disallowedRequestHeader: 'Disallowed Request Header',
    /**
     *@description Header for the source location column
     */
    sourceLocation: 'Source Location',
    /**
     *@description Header for the column with the URL scheme that is not supported by fetch
     */
    unsupportedScheme: 'Unsupported Scheme',
    /**
     *@description A failed network request.
     */
    failedRequest: 'Failed Request',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/issues/CorsIssueDetailsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class CorsIssueDetailsView extends _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_6__.AffectedResourcesView {
    constructor(parent, issue, jslogContext) {
        super(parent, issue, jslogContext);
        _CorsIssueDetailsView_instances.add(this);
        this.affectedResourcesCountElement.classList.add('cors-issue-affected-resource-label');
    }
    getResourceNameWithCount(count) {
        return i18nString(UIStrings.nRequests, { n: count });
    }
    static getHeaderFromError(corsError) {
        switch (corsError) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowHeadersPreflightResponse:
                return 'Access-Control-Allow-Headers';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowMethodsPreflightResponse:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.MethodDisallowedByPreflightResponse:
                return 'Access-Control-Allow-Methods';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMissingAllowOriginHeader:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMultipleAllowOriginValues:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidAllowOriginValue:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.MissingAllowOriginHeader:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.MultipleAllowOriginValues:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowOriginValue:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.WildcardOriginNotAllowed:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightWildcardOriginNotAllowed:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.AllowOriginMismatch:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightAllowOriginMismatch:
                return 'Access-Control-Allow-Origin';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowCredentials:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidAllowCredentials:
                return 'Access-Control-Allow-Credentials';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMissingAllowPrivateNetwork:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidAllowPrivateNetwork:
                return 'Access-Control-Allow-Private-Network';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.RedirectContainsCredentials:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightDisallowedRedirect:
                return 'Location';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidStatus:
                return 'Status-Code';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMissingPrivateNetworkAccessId:
                return 'Private-Network-Access-Id';
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMissingPrivateNetworkAccessName:
                return 'Private-Network-Access-Name';
        }
        return '';
    }
    static getProblemFromError(corsErrorStatus) {
        switch (corsErrorStatus.corsError) {
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowHeadersPreflightResponse:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowMethodsPreflightResponse:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidAllowOriginValue:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidAllowOriginValue:
                return i18nString(UIStrings.problemInvalidValue);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMultipleAllowOriginValues:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.MultipleAllowOriginValues:
                return i18nString(UIStrings.problemMultipleValues);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.MissingAllowOriginHeader:
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightMissingAllowOriginHeader:
                return i18nString(UIStrings.problemMissingHeader);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidStatus:
                return i18nString(UIStrings.preflightInvalidStatus);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightDisallowedRedirect:
                return i18nString(UIStrings.preflightDisallowedRedirect);
            case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.InvalidResponse:
                return i18nString(UIStrings.failedRequest);
        }
        throw new Error('Invalid Argument');
    }
    update() {
        this.clear();
        const issues = this.issue.getCorsIssues();
        if (issues.size > 0) {
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendDetails).call(this, issues.values().next().value.code(), issues);
        }
        else {
            this.updateAffectedResourceCount(0);
        }
    }
}
_a = CorsIssueDetailsView, _CorsIssueDetailsView_instances = new WeakSet(), _CorsIssueDetailsView_appendStatus = function _CorsIssueDetailsView_appendStatus(element, isWarning) {
    const status = document.createElement('td');
    if (isWarning) {
        status.classList.add('affected-resource-report-only-status');
        status.textContent = i18nString(UIStrings.warning);
    }
    else {
        status.classList.add('affected-resource-blocked-status');
        status.textContent = i18nString(UIStrings.blocked);
    }
    element.appendChild(status);
}, _CorsIssueDetailsView_appendDetails = function _CorsIssueDetailsView_appendDetails(issueCode, issues) {
    const header = document.createElement('tr');
    this.appendColumnTitle(header, i18nString(UIStrings.request));
    this.appendColumnTitle(header, i18nString(UIStrings.status));
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.InvalidHeaderValues:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.header));
            this.appendColumnTitle(header, i18nString(UIStrings.problem));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.WildcardOriginNotAllowed:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightResponseInvalid:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.problem));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.OriginMismatch:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.allowedOrigin));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.AllowCredentialsRequired:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequestIfProblematic));
            this.appendColumnTitle(header, i18nString(UIStrings.allowCredentialsValueFromHeader));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.InsecurePrivateNetwork:
            this.appendColumnTitle(header, i18nString(UIStrings.resourceAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightAllowPrivateNetworkError:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessId:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessName:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.invalidValue));
            this.appendColumnTitle(header, i18nString(UIStrings.resourceAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorAddressSpace));
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.MethodDisallowedByPreflightResponse:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.disallowedRequestMethod));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.HeaderDisallowedByPreflightResponse:
            this.appendColumnTitle(header, i18nString(UIStrings.preflightRequest));
            this.appendColumnTitle(header, i18nString(UIStrings.disallowedRequestHeader));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.RedirectContainsCredentials:
            // The default columns suffice.
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.DisallowedByMode:
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.CorsDisabledScheme:
            this.appendColumnTitle(header, i18nString(UIStrings.initiatorContext));
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            this.appendColumnTitle(header, i18nString(UIStrings.unsupportedScheme));
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.NoCorsRedirectModeNotFollow:
            this.appendColumnTitle(header, i18nString(UIStrings.sourceLocation));
            break;
        default:
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertUnhandled(issueCode);
    }
    this.affectedResources.appendChild(header);
    let count = 0;
    for (const issue of issues) {
        count++;
        __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendDetail).call(this, issueCode, issue);
    }
    this.updateAffectedResourceCount(count);
}, _CorsIssueDetailsView_appendSecureContextCell = function _CorsIssueDetailsView_appendSecureContextCell(element, isSecureContext) {
    if (isSecureContext === undefined) {
        this.appendIssueDetailCell(element, '');
        return;
    }
    this.appendIssueDetailCell(element, isSecureContext ? i18nString(UIStrings.secure) : i18nString(UIStrings.insecure));
}, _CorsIssueDetailsView_appendDetail = function _CorsIssueDetailsView_appendDetail(issueCode, issue) {
    const element = document.createElement('tr');
    element.classList.add('affected-resource-directive');
    const details = issue.details();
    const corsErrorStatus = details.corsErrorStatus;
    const corsError = details.corsErrorStatus.corsError;
    const highlightHeader = {
        section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Response,
        name: _a.getHeaderFromError(corsError),
    };
    const opts = {
        additionalOnClickAction() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.issuesPanelResourceOpened(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.Issue.IssueCategory.Cors, _AffectedResourcesView_js__WEBPACK_IMPORTED_MODULE_6__.AffectedItem.Request);
        },
    };
    switch (issueCode) {
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.InvalidHeaderValues:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            }
            else {
                this.appendIssueDetailCell(element, '');
            }
            this.appendIssueDetailCell(element, _a.getHeaderFromError(corsError), 'code-example');
            this.appendIssueDetailCell(element, _a.getProblemFromError(details.corsErrorStatus));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.WildcardOriginNotAllowed:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            }
            else {
                this.appendIssueDetailCell(element, '');
            }
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightResponseInvalid: {
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            const specialHighlightHeader = corsError === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Network.CorsError.PreflightInvalidStatus ?
                {
                    section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.General,
                    name: 'Status-Code',
                } :
                highlightHeader;
            element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader: specialHighlightHeader }));
            this.appendIssueDetailCell(element, _a.getProblemFromError(details.corsErrorStatus));
            break;
        }
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.OriginMismatch:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            }
            else {
                this.appendIssueDetailCell(element, '');
            }
            this.appendIssueDetailCell(element, details.initiatorOrigin ?? '', 'code-example');
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.AllowCredentialsRequired:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            if (corsError.includes('Preflight')) {
                element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            }
            else {
                this.appendIssueDetailCell(element, '');
            }
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.InsecurePrivateNetwork:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            this.appendIssueDetailCell(element, details.resourceIPAddressSpace ?? '');
            this.appendIssueDetailCell(element, details.clientSecurityState?.initiatorIPAddressSpace ?? '');
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendSecureContextCell).call(this, element, details.clientSecurityState?.initiatorIsSecureContext);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightAllowPrivateNetworkError: {
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            this.appendIssueDetailCell(element, details.clientSecurityState?.initiatorIPAddressSpace ?? '');
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendSecureContextCell).call(this, element, details.clientSecurityState?.initiatorIsSecureContext);
            break;
        }
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.MethodDisallowedByPreflightResponse:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.HeaderDisallowedByPreflightResponse:
            element.appendChild(this.createRequestCell(details.request, {
                ...opts,
                highlightHeader: {
                    section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Request,
                    name: corsErrorStatus.failedParameter,
                },
            }));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, {
                ...opts,
                linkToPreflight: true,
                highlightHeader: {
                    section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Response,
                    name: 'Access-Control-Allow-Headers',
                },
            }));
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter, 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.RedirectContainsCredentials:
            element.appendChild(this.createRequestCell(details.request, {
                ...opts,
                highlightHeader: {
                    section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Response,
                    name: _a.getHeaderFromError(corsError),
                },
            }));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.DisallowedByMode:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            this.appendIssueDetailCell(element, details.initiatorOrigin ?? '', 'code-example');
            this.appendSourceLocation(element, details.location, issue.model()?.getTargetIfNotDisposed());
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.CorsDisabledScheme:
            element.appendChild(this.createRequestCell(details.request, {
                ...opts,
                highlightHeader: {
                    section: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIHeaderSection.Response,
                    name: _a.getHeaderFromError(corsError),
                },
            }));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            this.appendIssueDetailCell(element, details.initiatorOrigin ?? '', 'code-example');
            this.appendSourceLocation(element, details.location, issue.model()?.getTargetIfNotDisposed());
            this.appendIssueDetailCell(element, details.corsErrorStatus.failedParameter ?? '', 'code-example');
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.NoCorsRedirectModeNotFollow:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            this.appendSourceLocation(element, details.location, issue.model()?.getTargetIfNotDisposed());
            break;
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessId:
        case _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.CorsIssue.IssueCode.PreflightMissingPrivateNetworkAccessName:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            element.appendChild(this.createRequestCell(details.request, { ...opts, linkToPreflight: true, highlightHeader }));
            this.appendIssueDetailCell(element, _a.getHeaderFromError(corsError));
            this.appendIssueDetailCell(element, details.resourceIPAddressSpace ?? '');
            this.appendIssueDetailCell(element, details.clientSecurityState?.initiatorIPAddressSpace ?? '');
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendSecureContextCell).call(this, element, details.clientSecurityState?.initiatorIsSecureContext);
            break;
        default:
            element.appendChild(this.createRequestCell(details.request, opts));
            __classPrivateFieldGet(this, _CorsIssueDetailsView_instances, "m", _CorsIssueDetailsView_appendStatus).call(this, element, details.isWarning);
            _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertUnhandled(issueCode);
            break;
    }
    this.affectedResources.appendChild(element);
};


/***/ })

}]);