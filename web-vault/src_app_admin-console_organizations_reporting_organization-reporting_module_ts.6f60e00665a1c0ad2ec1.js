"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_admin-console_organizations_reporting_organization-reporting_module_ts"],{

/***/ "./src/app/admin-console/common/base.events.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin-console/common/base.events.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseEventsComponent: () => (/* binding */ BaseEventsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_models_view_event_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/models/view/event.view */ "../../libs/common/src/models/view/event.view.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/file-download/file-download.service */ "../../libs/common/src/platform/abstractions/file-download/file-download.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _tools_event_export__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../tools/event-export */ "./src/app/tools/event-export/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























class BaseEventsComponent {
    get destroy$() {
        return this.destroySubject$.asObservable();
    }
    constructor(eventService, i18nService, exportService, platformUtilsService, logService, fileDownloadService, toastService, activeRoute, accountService, organizationService) {
        this.eventService = eventService;
        this.i18nService = i18nService;
        this.exportService = exportService;
        this.platformUtilsService = platformUtilsService;
        this.logService = logService;
        this.fileDownloadService = fileDownloadService;
        this.toastService = toastService;
        this.activeRoute = activeRoute;
        this.accountService = accountService;
        this.organizationService = organizationService;
        this.loading = true;
        this.loaded = false;
        this.dirtyDates = true;
        this.canUseSM = false;
        this.eventsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null),
        });
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.loadMoreEvents = () => __awaiter(this, void 0, void 0, function* () {
            yield this.loadEvents(false);
        });
        this.refreshEvents = () => __awaiter(this, void 0, void 0, function* () {
            yield this.loadEvents(true);
        });
        this.exportEvents = () => __awaiter(this, void 0, void 0, function* () {
            if (this.dirtyDates) {
                return;
            }
            this.loading = true;
            const dates = this.parseDates();
            if (dates == null) {
                return;
            }
            let promise;
            try {
                promise = this.export(dates[0], dates[1]);
                yield promise;
            }
            catch (e) {
                this.logService.error(`Handled exception: ${e}`);
            }
            promise = null;
            this.loading = false;
        });
        this.loadEvents = (clearExisting) => __awaiter(this, void 0, void 0, function* () {
            const dates = this.parseDates();
            if (dates == null) {
                return;
            }
            this.loading = true;
            let events = [];
            let promise;
            promise = this.loadAndParseEvents(dates[0], dates[1], clearExisting ? null : this.continuationToken);
            const result = yield promise;
            this.continuationToken = result.continuationToken;
            events = result.events;
            if (!clearExisting && this.events != null && this.events.length > 0) {
                this.events = this.events.concat(events);
            }
            else {
                this.events = events;
            }
            this.dirtyDates = false;
            this.loading = false;
            promise = null;
        });
        const defaultDates = this.eventService.getDefaultDateFilters();
        this.start = defaultDates[0];
        this.end = defaultDates[1];
    }
    initBase() {
        this.organizations$ = this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.filter)((account) => !!(account === null || account === void 0 ? void 0 : account.id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.switchMap)((account) => this.organizationService.organizations$(account.id)));
        this.activeOrganization$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.activeRoute.paramMap, this.organizations$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(([params, orgs]) => orgs.find((org) => org.id === params.get("organizationId"))));
        this.canUseSM$ = this.activeOrganization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)((org) => { var _a; return (_a = org === null || org === void 0 ? void 0 : org.canAccessSecretsManager) !== null && _a !== void 0 ? _a : false; }));
        this.canUseSM$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe((value) => {
            this.canUseSM = value;
        });
    }
    ngOnDestroy() {
        this.destroySubject$.next();
        this.destroySubject$.complete();
    }
    get start() {
        return this.eventsForm.value.start;
    }
    set start(val) {
        this.eventsForm.get("start").setValue(val);
    }
    get end() {
        return this.eventsForm.value.end;
    }
    set end(val) {
        this.eventsForm.get("end").setValue(val);
    }
    loadAndParseEvents(startDate, endDate, continuationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.requestEvents(startDate, endDate, continuationToken);
            const events = yield Promise.all(response.data.map((r) => __awaiter(this, void 0, void 0, function* () {
                const userId = r.actingUserId == null ? r.userId : r.actingUserId;
                const options = new _core__WEBPACK_IMPORTED_MODULE_7__.EventOptions();
                options.disableLink = !this.canUseSM;
                const eventInfo = yield this.eventService.getEventInfo(r, options);
                const user = this.getUserName(r, userId);
                const userName = user != null ? user.name : this.i18nService.t("unknown");
                return new _bitwarden_common_models_view_event_view__WEBPACK_IMPORTED_MODULE_2__.EventView({
                    message: eventInfo.message,
                    humanReadableMessage: eventInfo.humanReadableMessage,
                    appIcon: eventInfo.appIcon,
                    appName: eventInfo.appName,
                    userId: userId,
                    userName: userName,
                    userEmail: user != null ? user.email : "",
                    date: r.date,
                    ip: r.ipAddress,
                    type: r.type,
                    installationId: r.installationId,
                    systemUser: r.systemUser,
                    serviceAccountId: r.serviceAccountId,
                });
            })));
            return { continuationToken: response.continuationToken, events: events };
        });
    }
    parseDates() {
        let dates = null;
        try {
            dates = this.eventService.formatDateFilters(this.start, this.end);
            // FIXME: Remove when updating file. Eslint update
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }
        catch (e) {
            this.toastService.showToast({
                variant: "error",
                title: this.i18nService.t("errorOccurred"),
                message: this.i18nService.t("invalidDateRange"),
            });
            return null;
        }
        return dates;
    }
    export(start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            let continuationToken = this.continuationToken;
            let events = [].concat(this.events);
            while (continuationToken != null) {
                const result = yield this.loadAndParseEvents(start, end, continuationToken);
                continuationToken = result.continuationToken;
                events = events.concat(result.events);
            }
            const data = yield this.exportService.getEventExport(events);
            const fileName = this.exportService.getFileName(this.exportFileName, "csv");
            this.fileDownloadService.download({
                fileName,
                blobData: data,
                blobOptions: { type: "text/plain" },
            });
        });
    }
}
BaseEventsComponent.ɵfac = function BaseEventsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseEventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_7__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_tools_event_export__WEBPACK_IMPORTED_MODULE_8__.EventExportService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_6__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_5__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_3__.FileDownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_17__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService)); };
BaseEventsComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineDirective"]({ type: BaseEventsComponent });


/***/ }),

/***/ "./src/app/admin-console/organizations/guards/is-paid-org.guard.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin-console/organizations/guards/is-paid-org.guard.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPaidOrgGuard: () => (/* binding */ isPaidOrgGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore






/**
 * `CanActivateFn` that checks if the organization matching the id in the URL
 * parameters is paid or free. If the organization is free instructions are
 * provided on how to upgrade a free organization, and the user is redirected
 * if they have access to upgrade the organization. If the organization is
 * paid routing proceeds."
 */
function isPaidOrgGuard() {
    return (route, _state) => __awaiter(this, void 0, void 0, function* () {
        const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
        const organizationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService);
        const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService);
        const dialogService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_bitwarden_components__WEBPACK_IMPORTED_MODULE_4__.DialogService);
        const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((a) => a === null || a === void 0 ? void 0 : a.id)));
        const org = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(organizationService
            .organizations$(userId)
            .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(route.params.organizationId)));
        if (org == null) {
            return router.createUrlTree(["/"]);
        }
        if (org.isFreeOrg) {
            // Users without billing permission can't access billing
            if (!org.canEditSubscription) {
                yield dialogService.openSimpleDialog({
                    title: { key: "upgradeOrganizationCloseSecurityGaps" },
                    content: { key: "upgradeOrganizationCloseSecurityGapsDesc" },
                    acceptButtonText: { key: "ok" },
                    cancelButtonText: null,
                    type: "info",
                });
                return false;
            }
            else {
                const upgradeConfirmed = yield dialogService.openSimpleDialog({
                    title: { key: "upgradeOrganizationCloseSecurityGaps" },
                    content: { key: "upgradeOrganizationCloseSecurityGapsDesc" },
                    acceptButtonText: { key: "upgradeOrganization" },
                    type: "info",
                    icon: "bwi-plus-circle",
                });
                if (upgradeConfirmed) {
                    yield router.navigate(["organizations", org.id, "billing", "subscription"], {
                        queryParams: { upgrade: true },
                    });
                }
            }
        }
        return !org.isFreeOrg;
    });
}


/***/ }),

/***/ "./src/app/admin-console/organizations/manage/events.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin-console/organizations/manage/events.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventsComponent: () => (/* binding */ EventsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/angular/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/provider.service */ "../../libs/common/src/admin-console/abstractions/provider.service.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/common/enums */ "../../libs/common/src/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/file-download/file-download.service */ "../../libs/common/src/platform/abstractions/file-download/file-download.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../billing/organizations/change-plan-dialog.component */ "./src/app/billing/organizations/change-plan-dialog.component.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core */ "./src/app/core/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _tools_event_export__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../tools/event-export */ "./src/app/tools/event-export/index.ts");
/* harmony import */ var _common_base_events_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../common/base.events.component */ "./src/app/admin-console/common/base.events.component.ts");
/* harmony import */ var _placeholder_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./placeholder-events */ "./src/app/admin-console/organizations/manage/placeholder-events.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

























































function EventsComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "upgrade"), " ");
} }
function EventsComponent_bit_callout_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "bit-callout", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](1, 2, "upgradeEventLogTitleMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 4, "upgradeEventLogMessage"), "\n");
} }
function EventsComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function EventsComponent_ng_container_31_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 1, "noEventsInList"));
} }
function EventsComponent_ng_container_31_bit_table_3_ng_template_15_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tr", 20)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "td", 17)(5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "td", 17)(8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](4);
    const usePlaceHolderEvents_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", i_r3 > 4 && usePlaceHolderEvents_r4 ? "******" : _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind2"](3, 8, e_r2.date, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate2"]("title", "", e_r2.appName, ", ", e_r2.ip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](e_r2.appName);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("title", e_r2.userEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](e_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("innerHTML", e_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeHtml"]);
} }
function EventsComponent_ng_container_31_bit_table_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](0, EventsComponent_ng_container_31_bit_table_3_ng_template_15_tr_0_Template, 11, 11, "tr", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    const displayedEvents_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreadContextLet"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", displayedEvents_r5);
} }
function EventsComponent_ng_container_31_bit_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "tr")(3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](15, EventsComponent_ng_container_31_bit_table_3_ng_template_15_Template, 1, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](5, 4, "timestamp"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](8, 6, "client"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](11, 8, "member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](14, 10, "event"));
} }
function EventsComponent_ng_container_31_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("bitAction", ctx_r5.loadMoreEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 2, "loadMore"), " ");
} }
function EventsComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdeclareLet"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, EventsComponent_ng_container_31_p_2_Template, 3, 3, "p", 10)(3, EventsComponent_ng_container_31_bit_table_3_Template, 16, 12, "bit-table", 10)(4, EventsComponent_ng_container_31_button_4_Template, 3, 4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    const displayedEvents_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵstoreLet"]((ctx_r5.organization == null ? null : ctx_r5.organization.useEvents) ? ctx_r5.events : ctx_r5.placeholderEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !displayedEvents_r7 || !displayedEvents_r7.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", displayedEvents_r7 && displayedEvents_r7.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r5.continuationToken);
} }
function EventsComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function EventsComponent_ng_container_32_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r8); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx_r5.changePlan()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](6, 3, "upgradeEventLogTitleMessage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 5, "upgradeForFullEventsMessage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](12, 7, "changeBillingPlan"), " ");
} }
const EVENT_SYSTEM_USER_TO_TRANSLATION = {
    [_bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_9__.EventSystemUser.SCIM]: null, // SCIM acronym not able to be translated so just display SCIM
    [_bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_9__.EventSystemUser.DomainVerification]: "domainVerification",
    [_bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_9__.EventSystemUser.PublicApi]: "publicApi",
};
class EventsComponent extends _common_base_events_component__WEBPACK_IMPORTED_MODULE_20__.BaseEventsComponent {
    constructor(apiService, route, eventService, i18nService, exportService, platformUtilsService, logService, userNamePipe, organizationService, organizationUserApiService, organizationApiService, providerService, fileDownloadService, toastService, accountService, dialogService, configService, activeRoute) {
        super(eventService, i18nService, exportService, platformUtilsService, logService, fileDownloadService, toastService, activeRoute, accountService, organizationService);
        this.apiService = apiService;
        this.route = route;
        this.userNamePipe = userNamePipe;
        this.organizationService = organizationService;
        this.organizationUserApiService = organizationUserApiService;
        this.organizationApiService = organizationApiService;
        this.providerService = providerService;
        this.accountService = accountService;
        this.dialogService = dialogService;
        this.configService = configService;
        this.activeRoute = activeRoute;
        this.exportFileName = "org-events";
        this.placeholderEvents = _placeholder_events__WEBPACK_IMPORTED_MODULE_21__.placeholderEvents;
        this.orgUsersUserIdMap = new Map();
        this.ProductTierType = _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_8__.ProductTierType;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initBase();
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_7__.getUserId)(this.accountService.activeAccount$));
            this.route.params
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.concatMap)((params) => __awaiter(this, void 0, void 0, function* () {
                this.organizationId = params.organizationId;
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__.getOrganizationById)(this.organizationId)));
                if (!this.organization.useEvents) {
                    this.eventsForm.get("start").disable();
                    this.eventsForm.get("end").disable();
                    this.organizationSubscription = yield this.organizationApiService.getSubscription(this.organizationId);
                }
                yield this.load();
            })), (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$))
                .subscribe();
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.organizationUserApiService.getAllMiniUserDetails(this.organizationId);
            response.data.forEach((u) => {
                const name = this.userNamePipe.transform(u);
                this.orgUsersUserIdMap.set(u.userId, { name: name, email: u.email });
            });
            if (this.organization.providerId != null) {
                try {
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_7__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.switchMap)((userId) => this.providerService.get$(this.organization.providerId, userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.map)((provider) => provider != null && provider.canManageUsers), (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.filter)((result) => result), (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.switchMap)(() => this.apiService.getProviderUsers(this.organization.id)), (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.map)((providerUsersResponse) => providerUsersResponse.data.forEach((u) => {
                        const name = this.userNamePipe.transform(u);
                        this.orgUsersUserIdMap.set(u.userId, {
                            name: `${name} (${this.organization.providerName})`,
                            email: u.email,
                        });
                    }))));
                }
                catch (e) {
                    this.logService.warning(e);
                }
            }
            yield this.refreshEvents();
            this.loaded = true;
        });
    }
    requestEvents(startDate, endDate, continuationToken) {
        return this.apiService.getEventsOrganization(this.organizationId, startDate, endDate, continuationToken);
    }
    getUserName(r, userId) {
        if (r.installationId != null) {
            return {
                name: `Installation: ${r.installationId}`,
            };
        }
        if (userId != null) {
            if (this.orgUsersUserIdMap.has(userId)) {
                return this.orgUsersUserIdMap.get(userId);
            }
            if (r.providerId != null && r.providerId === this.organization.providerId) {
                return {
                    name: this.organization.providerName,
                };
            }
        }
        if (r.systemUser != null) {
            const systemUserI18nKey = EVENT_SYSTEM_USER_TO_TRANSLATION[r.systemUser];
            if (systemUserI18nKey) {
                return {
                    name: this.i18nService.t(systemUserI18nKey),
                };
            }
            else {
                return {
                    name: _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_9__.EventSystemUser[r.systemUser],
                };
            }
        }
        if (r.serviceAccountId) {
            return {
                name: this.i18nService.t("machineAccount") + " " + this.getShortId(r.serviceAccountId),
            };
        }
        return null;
    }
    getShortId(id) {
        return id === null || id === void 0 ? void 0 : id.substring(0, 8);
    }
    changePlan() {
        return __awaiter(this, void 0, void 0, function* () {
            const reference = (0,_billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_15__.openChangePlanDialog)(this.dialogService, {
                data: {
                    organizationId: this.organizationId,
                    subscription: this.organizationSubscription,
                    productTierType: this.organization.productTierType,
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_31__.lastValueFrom)(reference.closed);
            if (result === _billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_15__.ChangePlanDialogResultType.Closed) {
                return;
            }
            yield this.load();
        });
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_16__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_12__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_tools_event_export__WEBPACK_IMPORTED_MODULE_19__.EventExportService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_14__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_13__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_1__.UserNamePipe), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_3__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_provider_service__WEBPACK_IMPORTED_MODULE_5__.ProviderService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_11__.FileDownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_33__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_34__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_10__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_32__.ActivatedRoute)); };
EventsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"]], decls: 33, vars: 29, consts: [["bitBadge", "", "variant", "primary", "slot", "title-suffix", "class", "tw-ml-2 tw-mt-1.5 tw-inline-flex tw-items-center", 4, "ngIf"], [1, "tw-mb-4", 3, "formGroup"], [1, "tw-mt-4", "tw-flex", "tw-items-center"], ["bitInput", "", "type", "datetime-local", "formControlName", "start", 3, "change", "placeholder"], [1, "tw-mx-2"], ["bitInput", "", "type", "datetime-local", "formControlName", "end", 3, "change", "placeholder"], ["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "primary", 1, "tw-mx-3", "tw-mt-1", 3, "bitAction", "disabled"], ["type", "button", "bitButton", "", "bitFormButton", "", 1, "tw-mt-1", 3, "bitAction", "disabled"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-sign-in"], ["type", "info", 3, "title", 4, "ngIf"], [4, "ngIf"], ["bitBadge", "", "variant", "primary", "slot", "title-suffix", 1, "tw-ml-2", "tw-mt-1.5", "tw-inline-flex", "tw-items-center"], ["type", "info", 3, "title"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction", 4, "ngIf"], ["header", ""], ["bitCell", ""], ["body", ""], ["bitRow", "", "alignContent", "top", 4, "ngFor", "ngForOf"], ["bitRow", "", "alignContent", "top"], ["bitCell", "", 1, "tw-whitespace-nowrap"], [3, "title"], ["bitCell", "", 3, "innerHTML"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"], [1, "tw-relative", "tw--top-72", "tw-bg-background", "tw-bg-opacity-90", "tw-pb-5", "tw-flex", "tw-items-center", "tw-justify-center", "tw-h-[19rem]"], [1, "tw-bg-background", "tw-max-w-xl", "tw-flex-col", "tw-justify-center", "tw-text-center", "tw-p-5", "tw-px-10", "tw-rounded", "tw-border-0", "tw-border-b", "tw-border-secondary-300", "tw-border-solid", "tw-mt-5"], [1, "bwi", "bwi-2x", "bwi-business", "tw-text-primary-600"], [1, "tw-font-bold", "tw-mt-2"], ["type", "button", "bitButton", "", "buttonType", "primary", 1, "tw-mt-1", 3, "click"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdeclareLet"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](2, EventsComponent_span_2_Template, 3, 3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "bit-form-field")(6, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](8, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](10, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function EventsComponent_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r1); return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx.dirtyDates = true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](12, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "bit-form-field")(14, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](16, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("change", function EventsComponent_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r1); return _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵresetView"](ctx.dirtyDates = true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](19, "form")(20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](22, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "form")(24, "button", 7)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](27, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](28, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](29, EventsComponent_bit_callout_29_Template, 4, 6, "bit-callout", 9)(30, EventsComponent_ng_container_30_Template, 6, 6, "ng-container", 10)(31, EventsComponent_ng_container_31_Template, 5, 4, "ng-container", 10)(32, EventsComponent_ng_container_32_Template, 13, 9, "ng-container", 10);
    } if (rf & 2) {
        const usePlaceHolderEvents_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵstoreLet"](!(ctx.organization == null ? null : ctx.organization.useEvents));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", usePlaceHolderEvents_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("formGroup", ctx.eventsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](8, 17, "from"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](10, 19, "startDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](16, 21, "to"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](18, 23, "endDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("bitAction", ctx.refreshEvents)("disabled", usePlaceHolderEvents_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](22, 25, "update"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("bitAction", ctx.exportEvents)("disabled", ctx.dirtyDates || usePlaceHolderEvents_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](27, 27, "export"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.loaded && usePlaceHolderEvents_r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.loaded && usePlaceHolderEvents_r9);
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_18__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_36__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_36__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormControlName, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_37__.BitActionDirective, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_38__.BitFormButtonDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_39__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_40__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_41__.CalloutComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_42__.BitLabel, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_43__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_44__.BitFormFieldComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_45__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_46__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_47__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_47__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_35__.DatePipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_22__.I18nPipe, _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_17__.HeaderModule, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_23__.WebHeaderComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/manage/placeholder-events.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-console/organizations/manage/placeholder-events.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderEvents: () => (/* binding */ placeholderEvents)
/* harmony export */ });
function getRandomDateTime() {
    const now = new Date();
    const past24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const randomTime = past24Hours.getTime() + Math.random() * (now.getTime() - past24Hours.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
}
const asteriskPlaceholders = new Array(6).fill({
    appName: "***",
    userName: "**********",
    userEmail: "**********",
    message: "**********",
});
const placeholderEvents = [
    {
        date: getRandomDateTime(),
        appName: "Extension - Firefox",
        userName: "Alice",
        userEmail: "alice@email.com",
        message: "Logged in",
    },
    {
        date: getRandomDateTime(),
        appName: "Mobile - iOS",
        userName: "Bob",
        message: `Viewed item <span class="tw-text-code">000000</span>`,
    },
    {
        date: getRandomDateTime(),
        appName: "Desktop - Linux",
        userName: "Carlos",
        userEmail: "carlos@email.com",
        message: "Login attempt failed with incorrect password",
    },
    {
        date: getRandomDateTime(),
        appName: "Web vault - Chrome",
        userName: "Ivan",
        userEmail: "ivan@email.com",
        message: `Confirmed user <span class="tw-text-code">000000</span>`,
    },
    {
        date: getRandomDateTime(),
        appName: "Mobile - Android",
        userName: "Franz",
        userEmail: "franz@email.com",
        message: `Sent item <span class="tw-text-code">000000</span> to trash`,
    },
]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .concat(asteriskPlaceholders);


/***/ }),

/***/ "./src/app/admin-console/organizations/reporting/organization-reporting-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/reporting/organization-reporting-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationReportingRoutingModule: () => (/* binding */ OrganizationReportingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _dirt_reports_pages_organizations_exposed_passwords_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dirt/reports/pages/organizations/exposed-passwords-report.component */ "./src/app/dirt/reports/pages/organizations/exposed-passwords-report.component.ts");
/* harmony import */ var _dirt_reports_pages_organizations_inactive_two_factor_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../dirt/reports/pages/organizations/inactive-two-factor-report.component */ "./src/app/dirt/reports/pages/organizations/inactive-two-factor-report.component.ts");
/* harmony import */ var _dirt_reports_pages_organizations_reused_passwords_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dirt/reports/pages/organizations/reused-passwords-report.component */ "./src/app/dirt/reports/pages/organizations/reused-passwords-report.component.ts");
/* harmony import */ var _dirt_reports_pages_organizations_unsecured_websites_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dirt/reports/pages/organizations/unsecured-websites-report.component */ "./src/app/dirt/reports/pages/organizations/unsecured-websites-report.component.ts");
/* harmony import */ var _dirt_reports_pages_organizations_weak_passwords_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dirt/reports/pages/organizations/weak-passwords-report.component */ "./src/app/dirt/reports/pages/organizations/weak-passwords-report.component.ts");
/* harmony import */ var _guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guards/is-paid-org.guard */ "./src/app/admin-console/organizations/guards/is-paid-org.guard.ts");
/* harmony import */ var _guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/org-permissions.guard */ "./src/app/admin-console/organizations/guards/org-permissions.guard.ts");
/* harmony import */ var _guards_org_redirect_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/org-redirect.guard */ "./src/app/admin-console/organizations/guards/org-redirect.guard.ts");
/* harmony import */ var _manage_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../manage/events.component */ "./src/app/admin-console/organizations/manage/events.component.ts");
/* harmony import */ var _reports_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reports-home.component */ "./src/app/admin-console/organizations/reporting/reports-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");


// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports

// eslint-disable-next-line no-restricted-imports








const routes = [
    {
        path: "",
        canActivate: [(0,_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.organizationPermissionsGuard)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.canAccessReportingTab)],
        children: [
            {
                path: "",
                pathMatch: "full",
                canActivate: [(0,_guards_org_redirect_guard__WEBPACK_IMPORTED_MODULE_8__.organizationRedirectGuard)(getReportRoute)],
                children: [], // This is required to make the auto redirect work,
            },
            {
                path: "reports",
                component: _reports_home_component__WEBPACK_IMPORTED_MODULE_10__.ReportsHomeComponent,
                canActivate: [(0,_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.organizationPermissionsGuard)()],
                data: {
                    titleId: "reports",
                },
                children: [
                    {
                        path: "exposed-passwords-report",
                        component: _dirt_reports_pages_organizations_exposed_passwords_report_component__WEBPACK_IMPORTED_MODULE_1__.ExposedPasswordsReportComponent,
                        data: {
                            titleId: "exposedPasswordsReport",
                        },
                        canActivate: [(0,_guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__.isPaidOrgGuard)()],
                    },
                    {
                        path: "inactive-two-factor-report",
                        component: _dirt_reports_pages_organizations_inactive_two_factor_report_component__WEBPACK_IMPORTED_MODULE_2__.InactiveTwoFactorReportComponent,
                        data: {
                            titleId: "inactive2faReport",
                        },
                        canActivate: [(0,_guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__.isPaidOrgGuard)()],
                    },
                    {
                        path: "reused-passwords-report",
                        component: _dirt_reports_pages_organizations_reused_passwords_report_component__WEBPACK_IMPORTED_MODULE_3__.ReusedPasswordsReportComponent,
                        data: {
                            titleId: "reusedPasswordsReport",
                        },
                        canActivate: [(0,_guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__.isPaidOrgGuard)()],
                    },
                    {
                        path: "unsecured-websites-report",
                        component: _dirt_reports_pages_organizations_unsecured_websites_report_component__WEBPACK_IMPORTED_MODULE_4__.UnsecuredWebsitesReportComponent,
                        data: {
                            titleId: "unsecuredWebsitesReport",
                        },
                        canActivate: [(0,_guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__.isPaidOrgGuard)()],
                    },
                    {
                        path: "weak-passwords-report",
                        component: _dirt_reports_pages_organizations_weak_passwords_report_component__WEBPACK_IMPORTED_MODULE_5__.WeakPasswordsReportComponent,
                        data: {
                            titleId: "weakPasswordsReport",
                        },
                        canActivate: [(0,_guards_is_paid_org_guard__WEBPACK_IMPORTED_MODULE_6__.isPaidOrgGuard)()],
                    },
                ],
            },
            {
                path: "events",
                component: _manage_events_component__WEBPACK_IMPORTED_MODULE_9__.EventsComponent,
                canActivate: [(0,_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_7__.organizationPermissionsGuard)((org) => org.canAccessEventLogs || org.isOwner)],
                data: {
                    titleId: "eventLogs",
                },
            },
        ],
    },
];
function getReportRoute(organization) {
    if (organization.canAccessEventLogs) {
        return "events";
    }
    if (organization.canAccessReports) {
        return "reports";
    }
    return undefined;
}
class OrganizationReportingRoutingModule {
}
OrganizationReportingRoutingModule.ɵfac = function OrganizationReportingRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationReportingRoutingModule)(); };
OrganizationReportingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: OrganizationReportingRoutingModule });
OrganizationReportingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/reporting/organization-reporting.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/reporting/organization-reporting.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationReportingModule: () => (/* binding */ OrganizationReportingModule)
/* harmony export */ });
/* harmony import */ var _dirt_reports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dirt/reports */ "./src/app/dirt/reports/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _organization_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-reporting-routing.module */ "./src/app/admin-console/organizations/reporting/organization-reporting-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");





class OrganizationReportingModule {
}
OrganizationReportingModule.ɵfac = function OrganizationReportingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationReportingModule)(); };
OrganizationReportingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: OrganizationReportingModule });
OrganizationReportingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _dirt_reports__WEBPACK_IMPORTED_MODULE_0__.ReportsSharedModule, _organization_reporting_routing_module__WEBPACK_IMPORTED_MODULE_3__.OrganizationReportingRoutingModule, _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/reporting/reports-home.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/admin-console/organizations/reporting/reports-home.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsHomeComponent: () => (/* binding */ ReportsHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/startWith.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _dirt_reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../dirt/reports */ "./src/app/dirt/reports/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _dirt_reports_shared_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../dirt/reports/shared/report-list/report-list.component */ "./src/app/dirt/reports/shared/report-list/report-list.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















function ReportsHomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-report-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "orgsReportsDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("reports", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, ctx_r0.reports$));
} }
function ReportsHomeComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "backToReports"), " ");
} }
class ReportsHomeComponent {
    constructor(route, organizationService, accountService, router) {
        this.route = route;
        this.organizationService = organizationService;
        this.accountService = accountService;
        this.router = router;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.homepage$ = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)((event) => this.isReportsHomepageRouteUrl(event.urlAfterRedirects)), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)(this.isReportsHomepageRouteUrl(this.router.url)));
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__.getUserId)(this.accountService.activeAccount$));
            this.reports$ = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.concatMap)((params) => this.organizationService
                .organizations$(userId)
                .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(params.organizationId))), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)((org) => this.buildReports(org.productTierType)));
        });
    }
    buildReports(productType) {
        const reportRequiresUpgrade = productType == _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__.ProductTierType.Free ? _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportVariant.RequiresUpgrade : _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportVariant.Enabled;
        const reportsArray = [
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.ExposedPasswords]), { variant: reportRequiresUpgrade }),
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.ReusedPasswords]), { variant: reportRequiresUpgrade }),
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.WeakPasswords]), { variant: reportRequiresUpgrade }),
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.UnsecuredWebsites]), { variant: reportRequiresUpgrade }),
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.Inactive2fa]), { variant: reportRequiresUpgrade }),
            Object.assign(Object.assign({}, _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.reports[_dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportType.MemberAccessReport]), { variant: productType == _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__.ProductTierType.Enterprise
                    ? _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportVariant.Enabled
                    : _dirt_reports__WEBPACK_IMPORTED_MODULE_4__.ReportVariant.RequiresEnterprise }),
        ];
        return reportsArray;
    }
    isReportsHomepageRouteUrl(url) {
        return url.endsWith("/reports");
    }
}
ReportsHomeComponent.ɵfac = function ReportsHomeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReportsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
ReportsHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ReportsHomeComponent, selectors: [["app-org-reports-home"]], standalone: false, decls: 6, vars: 6, consts: [[4, "ngIf"], [1, "tw-mt-4"], ["bitButton", "", "routerLink", "./", 4, "ngIf"], ["bitTypography", "body1"], [3, "reports"], ["bitButton", "", "routerLink", "./"], ["aria-hidden", "true", 1, "bwi", "bwi-angle-left"]], template: function ReportsHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, ReportsHomeComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, ReportsHomeComponent_a_4_Template, 4, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx.homepage$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, ctx.homepage$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_17__.ButtonComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__.TypographyDirective, _dirt_reports_shared_report_list_report_list_component__WEBPACK_IMPORTED_MODULE_5__.ReportListComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_6__.WebHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/dirt/reports/pages/organizations/exposed-passwords-report.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/dirt/reports/pages/organizations/exposed-passwords-report.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExposedPasswordsReportComponent: () => (/* binding */ ExposedPasswordsReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_abstractions_audit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/audit.service */ "../../libs/common/src/abstractions/audit.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/cipher.service */ "../../libs/common/src/vault/abstractions/cipher.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/vault */ "../../libs/vault/src/index.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter.service.ts");
/* harmony import */ var _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../vault/org-vault/services/admin-console-cipher-form-config.service */ "./src/app/vault/org-vault/services/admin-console-cipher-form-config.service.ts");
/* harmony import */ var _exposed_passwords_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../exposed-passwords-report.component */ "./src/app/dirt/reports/pages/exposed-passwords-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/vault/components/icon.component */ "../../libs/angular/src/vault/components/icon.component.ts");
/* harmony import */ var _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-prop.directive */ "../../libs/angular/src/directives/stop-prop.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/table-scroll.component */ "../../libs/components/src/table/table-scroll.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/sortable.component */ "../../libs/components/src/table/sortable.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../vault/individual-vault/organization-badge/organization-name-badge.component */ "./src/app/vault/individual-vault/organization-badge/organization-name-badge.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../vault/individual-vault/pipes/get-organization-name.pipe */ "./src/app/vault/individual-vault/pipes/get-organization-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












































function ExposedPasswordsReportComponent_div_8_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "bit-callout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, "goodNews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 4, "noExposedPasswords"), " ");
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_bit_toggle_group_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.getName(status_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.getCount(status_r3), " ");
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "bit-toggle-group", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selectedChange", function ExposedPasswordsReportComponent_div_8_ng_container_2_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.filterOrgToggle($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ExposedPasswordsReportComponent_div_8_ng_container_2_bit_toggle_group_6_ng_container_3_Template, 5, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 3, ctx_r1.filterOrgStatus$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 5, "addAccessFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.filterStatus);
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "owner"), " ");
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r4); const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCipher(row_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 2, "editItemWithName", row_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", row_r5.name, " ");
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r5.name);
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "shared"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "shared"));
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "attachments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "attachments"));
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_td_11_app_org_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-org-badge", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "orgNameFromId");
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r1.disabled)("organizationId", row_r5.organizationId)("organizationName", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 5, row_r5.organizationId, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 3, ctx_r1.organizations$)));
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_td_11_app_org_badge_1_Template, 3, 8, "app-org-badge", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization);
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-vault-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_3_Template, 4, 5, "ng-container", 22)(4, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_template_4_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"])(6, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_6_Template, 6, 6, "ng-container", 5)(7, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_ng_container_7_Template, 6, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_td_11_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "td", 24)(13, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const cantManage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cipher", row_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization || ctx_r1.canManageCipher(row_r5))("ngIfElse", cantManage_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization && row_r5.organizationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", row_r5.hasAttachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r5.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](16, 10, "exposedXTimes", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 8, row_r5.exposedXTimes)), " ");
} }
function ExposedPasswordsReportComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, ExposedPasswordsReportComponent_div_8_ng_container_2_bit_toggle_group_6_Template, 4, 7, "bit-toggle-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "bit-table-scroll", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, ExposedPasswordsReportComponent_div_8_ng_container_2_th_13_Template, 3, 3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, ExposedPasswordsReportComponent_div_8_ng_container_2_ng_template_17_Template, 17, 13, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 9, "exposedPasswordsFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("useAlertRole", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](5, 13, "exposedPasswordsFoundReportDesc", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 11, ctx_r1.ciphers.length), ctx_r1.vaultMsg), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showFilterToggle && !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dataSource", ctx_r1.dataSource)("rowSize", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 17, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](16, 19, "timesExposed"), " ");
} }
function ExposedPasswordsReportComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, ExposedPasswordsReportComponent_div_8_bit_callout_1_Template, 4, 6, "bit-callout", 4)(2, ExposedPasswordsReportComponent_div_8_ng_container_2_Template, 18, 21, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.ciphers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.ciphers.length);
} }
class ExposedPasswordsReportComponent extends _exposed_passwords_report_component__WEBPACK_IMPORTED_MODULE_11__.ExposedPasswordsReportComponent {
    constructor(cipherService, auditService, dialogService, organizationService, accountService, route, passwordRepromptService, i18nService, syncService, cipherFormService, adminConsoleCipherFormConfigService) {
        super(cipherService, auditService, organizationService, dialogService, accountService, passwordRepromptService, i18nService, syncService, cipherFormService, adminConsoleCipherFormConfigService);
        this.accountService = accountService;
        this.route = route;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdminConsoleActive = true;
            // eslint-disable-next-line rxjs-angular/prefer-takeuntil, rxjs/no-async-subscribe
            this.route.parent.parent.params.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__.getUserId));
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.getOrganizationById)(params.organizationId)));
                this.manageableCiphers = yield this.cipherService.getAll(userId);
            }));
        });
    }
    getAllCiphers() {
        return this.cipherService.getAllFromApiForOrganization(this.organization.id);
    }
    canManageCipher(c) {
        if (c.collectionIds.length === 0) {
            return true;
        }
        return this.manageableCiphers.some((x) => x.id === c.id);
    }
}
ExposedPasswordsReportComponent.ɵfac = function ExposedPasswordsReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExposedPasswordsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_5__.CipherService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_audit_service__WEBPACK_IMPORTED_MODULE_0__.AuditService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.PasswordRepromptService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_6__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.CipherFormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService)); };
ExposedPasswordsReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: ExposedPasswordsReportComponent, selectors: [["app-org-exposed-passwords-report"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([
            {
                provide: _bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.CipherFormConfigService,
                useClass: _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService,
            },
            _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_9__.RoutedVaultFilterService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_8__.RoutedVaultFilterBridgeService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 8, consts: [["cantManage", ""], ["type", "submit", "buttonType", "primary", "bitButton", "", 3, "click", "loading"], ["class", "tw-mt-4", 4, "ngIf"], [1, "tw-mt-4"], ["type", "success", 3, "title", 4, "ngIf"], [4, "ngIf"], ["type", "success", 3, "title"], ["type", "danger", 3, "title", "useAlertRole"], [3, "selected", "selectedChange", 4, "ngIf"], [3, "dataSource", "rowSize"], ["header", ""], ["bitCell", ""], ["bitCell", "", "bitSortable", "name"], ["bitCell", "", "bitSortable", "organizationId", 4, "ngIf"], ["bitCell", "", "bitSortable", "exposedXTimes", 1, "tw-text-right"], ["bitRowDef", ""], [3, "selectedChange", "selected"], [4, "ngFor", "ngForOf"], [3, "value"], ["bitBadge", "", "variant", "info"], ["bitCell", "", "bitSortable", "organizationId"], [3, "cipher"], [4, "ngIf", "ngIfElse"], ["bitCell", "", 4, "ngIf"], ["bitCell", "", 1, "tw-text-right"], ["bitBadge", "", "variant", "warning"], ["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection-shared", 3, "title"], [1, "tw-sr-only"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]], template: function ExposedPasswordsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-container")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function ExposedPasswordsReportComponent_Template_button_click_5_listener() { return ctx.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, ExposedPasswordsReportComponent_div_8_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 4, "exposedPasswordsReportDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 6, "checkExposedPasswords"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.hasLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_12__.IconComponent, _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_13__.StopClickDirective, _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_14__.StopPropDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_25__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_26__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_27__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_28__.AnchorLinkDirective, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_29__.BitRowDef, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_30__.CellDirective, _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_31__.SortableComponent, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_29__.TableScrollComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_32__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_33__.ToggleComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_15__.WebHeaderComponent, _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_16__.OrganizationNameBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__.I18nPipe, _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_18__.GetOrgNameFromIdPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/dirt/reports/pages/organizations/inactive-two-factor-report.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/dirt/reports/pages/organizations/inactive-two-factor-report.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InactiveTwoFactorReportComponent: () => (/* binding */ InactiveTwoFactorReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/cipher.service */ "../../libs/common/src/vault/abstractions/cipher.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/vault */ "../../libs/vault/src/index.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter.service.ts");
/* harmony import */ var _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vault/org-vault/services/admin-console-cipher-form-config.service */ "./src/app/vault/org-vault/services/admin-console-cipher-form-config.service.ts");
/* harmony import */ var _inactive_two_factor_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../inactive-two-factor-report.component */ "./src/app/dirt/reports/pages/inactive-two-factor-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/vault/components/icon.component */ "../../libs/angular/src/vault/components/icon.component.ts");
/* harmony import */ var _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-prop.directive */ "../../libs/angular/src/directives/stop-prop.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../vault/individual-vault/organization-badge/organization-name-badge.component */ "./src/app/vault/individual-vault/organization-badge/organization-name-badge.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../vault/individual-vault/pipes/get-organization-name.pipe */ "./src/app/vault/individual-vault/pipes/get-organization-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










































function InactiveTwoFactorReportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function InactiveTwoFactorReportComponent_div_6_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, "goodNews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "noInactive2fa"), " ");
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getName(status_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getCount(status_r3), " ");
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-toggle-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectedChange", function InactiveTwoFactorReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterOrgToggle($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, InactiveTwoFactorReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.filterOrgStatus$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, "addAccessFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.filterStatus);
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 2, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 4, "owner"));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4); const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.selectCipher(r_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 2, "editItemWithName", r_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.name);
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.name);
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "shared"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "shared"));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "attachments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "attachments"));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_app_org_badge_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-org-badge", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "orgNameFromId");
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.disabled)("organizationId", r_r5.organizationId)("organizationName", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 5, r_r5.organizationId, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.organizations$)));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("href", ctx_r1.cipherDocs.get(r_r5.id), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "instructions"), "");
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "app-vault-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_4_Template, 4, 5, "ng-container", 22)(5, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_template_5_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"])(7, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_7_Template, 6, 6, "ng-container", 1)(8, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_ng_container_8_Template, 6, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_app_org_badge_13_Template, 3, 8, "app-org-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_a_15_Template, 3, 4, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const cantManage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("cipher", r_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization || ctx_r1.canManageCipher(r_r5))("ngIfElse", cantManage_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization && r_r5.organizationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r5.hasAttachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.cipherDocs.has(r_r5.id));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_tr_0_Template, 16, 8, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const rows$_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, rows$_r7));
} }
function InactiveTwoFactorReportComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, InactiveTwoFactorReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template, 4, 7, "bit-toggle-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "bit-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_container_8_Template, 10, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, InactiveTwoFactorReportComponent_div_6_ng_container_2_ng_template_10_Template, 2, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, "inactive2faFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](5, 9, "inactive2faFoundReportDesc", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 7, ctx_r1.ciphers.length), ctx_r1.vaultMsg), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showFilterToggle && !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
} }
function InactiveTwoFactorReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InactiveTwoFactorReportComponent_div_6_bit_callout_1_Template, 4, 6, "bit-callout", 6)(2, InactiveTwoFactorReportComponent_div_6_ng_container_2_Template, 11, 13, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.ciphers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.ciphers.length);
} }
class InactiveTwoFactorReportComponent extends _inactive_two_factor_report_component__WEBPACK_IMPORTED_MODULE_10__.InactiveTwoFactorReportComponent {
    constructor(cipherService, dialogService, route, logService, passwordRepromptService, organizationService, accountService, i18nService, syncService, cipherFormConfigService, adminConsoleCipherFormConfigService) {
        super(cipherService, organizationService, dialogService, accountService, logService, passwordRepromptService, i18nService, syncService, cipherFormConfigService, adminConsoleCipherFormConfigService);
        this.route = route;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdminConsoleActive = true;
            // eslint-disable-next-line rxjs-angular/prefer-takeuntil, rxjs/no-async-subscribe
            this.route.parent.parent.params.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)((a) => a === null || a === void 0 ? void 0 : a.id)));
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(params.organizationId)));
                this.manageableCiphers = yield this.cipherService.getAll(userId);
                yield _super.ngOnInit.call(this);
            }));
        });
    }
    getAllCiphers() {
        return this.cipherService.getAllFromApiForOrganization(this.organization.id);
    }
    canManageCipher(c) {
        if (c.collectionIds.length === 0) {
            return true;
        }
        return this.manageableCiphers.some((x) => x.id === c.id);
    }
}
InactiveTwoFactorReportComponent.ɵfac = function InactiveTwoFactorReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InactiveTwoFactorReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__.CipherService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_3__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.PasswordRepromptService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService)); };
InactiveTwoFactorReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: InactiveTwoFactorReportComponent, selectors: [["app-inactive-two-factor-report"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([
            {
                provide: _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService,
                useClass: _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            },
            _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__.RoutedVaultFilterService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__.RoutedVaultFilterBridgeService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [["cantManage", ""], [4, "ngIf"], ["class", "tw-mt-4", 4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [1, "tw-mt-4"], ["type", "success", 3, "title", 4, "ngIf"], ["type", "success", 3, "title"], ["type", "danger", 3, "title"], [3, "selected", "selectedChange", 4, "ngIf"], [3, "dataSource"], ["header", "", 4, "ngIf"], ["body", ""], [3, "selectedChange", "selected"], [4, "ngFor", "ngForOf"], [3, "value"], ["bitBadge", "", "variant", "info"], ["header", ""], ["bitRow", ""], ["bitCell", ""], ["bitRow", "", 4, "ngFor", "ngForOf"], [3, "cipher"], [4, "ngIf", "ngIfElse"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"], ["bitCell", "", 1, "tw-text-right"], ["bitBadge", "", "target", "_blank", "rel", "noreferrer", 3, "href", 4, "ngIf"], ["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection-shared", 3, "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName"], ["bitBadge", "", "target", "_blank", "rel", "noreferrer", 3, "href"]], template: function InactiveTwoFactorReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-container")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, InactiveTwoFactorReportComponent_div_5_Template, 6, 6, "div", 1)(6, InactiveTwoFactorReportComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "inactive2faReportDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.hasLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.hasLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__.IconComponent, _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__.StopClickDirective, _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__.StopPropDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__.BadgeComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__.AnchorLinkDirective, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__.ToggleComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__.WebHeaderComponent, _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__.OrganizationNameBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__.I18nPipe, _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__.GetOrgNameFromIdPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/dirt/reports/pages/organizations/reused-passwords-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dirt/reports/pages/organizations/reused-passwords-report.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReusedPasswordsReportComponent: () => (/* binding */ ReusedPasswordsReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/cipher.service */ "../../libs/common/src/vault/abstractions/cipher.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/vault */ "../../libs/vault/src/index.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter.service.ts");
/* harmony import */ var _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vault/org-vault/services/admin-console-cipher-form-config.service */ "./src/app/vault/org-vault/services/admin-console-cipher-form-config.service.ts");
/* harmony import */ var _reused_passwords_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reused-passwords-report.component */ "./src/app/dirt/reports/pages/reused-passwords-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/vault/components/icon.component */ "../../libs/angular/src/vault/components/icon.component.ts");
/* harmony import */ var _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-prop.directive */ "../../libs/angular/src/directives/stop-prop.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/table-scroll.component */ "../../libs/components/src/table/table-scroll.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../vault/individual-vault/organization-badge/organization-name-badge.component */ "./src/app/vault/individual-vault/organization-badge/organization-name-badge.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../vault/individual-vault/pipes/get-organization-name.pipe */ "./src/app/vault/individual-vault/pipes/get-organization-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








































function ReusedPasswordsReportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function ReusedPasswordsReportComponent_div_6_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, "goodNews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "noReusedPasswords"), " ");
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getName(status_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getCount(status_r3), " ");
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-toggle-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectedChange", function ReusedPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterOrgToggle($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ReusedPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.filterOrgStatus$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, "addAccessFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.filterStatus);
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 5, "owner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 7, "timesReused"));
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4); const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.selectCipher(row_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 2, "editItemWithName", row_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](row_r5.name);
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](row_r5.name);
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "shared"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "shared"));
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "attachments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "attachments"));
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_app_org_badge_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-org-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "orgNameFromId");
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.disabled)("organizationId", row_r5.organizationId)("organizationName", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 5, row_r5.organizationId, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.organizations$)));
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "app-vault-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_3_Template, 4, 5, "ng-container", 21)(4, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_template_4_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"])(6, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_6_Template, 6, 6, "ng-container", 1)(7, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_ng_container_7_Template, 6, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_app_org_badge_12_Template, 3, 8, "app-org-badge", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td", 19)(14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const cantManage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("cipher", row_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization || ctx_r1.canManageCipher(row_r5))("ngIfElse", cantManage_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization && row_r5.organizationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", row_r5.hasAttachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](row_r5.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](16, 8, "reusedXTimes", ctx_r1.passwordUseMap.get(row_r5.login.password)), " ");
} }
function ReusedPasswordsReportComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, ReusedPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template, 4, 7, "bit-toggle-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "bit-table-scroll", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_container_8_Template, 11, 9, "ng-container", 11)(9, ReusedPasswordsReportComponent_div_6_ng_container_2_ng_template_9_Template, 17, 11, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 6, "reusedPasswordsFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](5, 10, "reusedPasswordsFoundReportDesc", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 8, ctx_r1.ciphers.length), ctx_r1.vaultMsg), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showFilterToggle && !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx_r1.dataSource)("rowSize", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
} }
function ReusedPasswordsReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, ReusedPasswordsReportComponent_div_6_bit_callout_1_Template, 4, 6, "bit-callout", 6)(2, ReusedPasswordsReportComponent_div_6_ng_container_2_Template, 10, 14, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.ciphers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.ciphers.length);
} }
class ReusedPasswordsReportComponent extends _reused_passwords_report_component__WEBPACK_IMPORTED_MODULE_10__.ReusedPasswordsReportComponent {
    constructor(cipherService, dialogService, route, organizationService, accountService, passwordRepromptService, i18nService, syncService, cipherFormConfigService, adminConsoleCipherFormConfigService) {
        super(cipherService, organizationService, dialogService, accountService, passwordRepromptService, i18nService, syncService, cipherFormConfigService, adminConsoleCipherFormConfigService);
        this.route = route;
        this.accountService = accountService;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdminConsoleActive = true;
            // eslint-disable-next-line rxjs-angular/prefer-takeuntil, rxjs/no-async-subscribe
            this.route.parent.parent.params.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__.getUserId));
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(params.organizationId)));
                this.manageableCiphers = yield this.cipherService.getAll(userId);
                yield _super.ngOnInit.call(this);
            }));
        });
    }
    getAllCiphers() {
        return this.cipherService.getAllFromApiForOrganization(this.organization.id);
    }
    canManageCipher(c) {
        if (c.collectionIds.length === 0) {
            return true;
        }
        return this.manageableCiphers.some((x) => x.id === c.id);
    }
}
ReusedPasswordsReportComponent.ɵfac = function ReusedPasswordsReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ReusedPasswordsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__.CipherService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_20__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.PasswordRepromptService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService)); };
ReusedPasswordsReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: ReusedPasswordsReportComponent, selectors: [["app-reused-passwords-report"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([
            {
                provide: _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService,
                useClass: _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            },
            _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__.RoutedVaultFilterService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__.RoutedVaultFilterBridgeService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [["cantManage", ""], [4, "ngIf"], ["class", "tw-mt-4", 4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [1, "tw-mt-4"], ["type", "success", 3, "title", 4, "ngIf"], ["type", "success", 3, "title"], ["type", "danger", 3, "title"], [3, "selected", "selectedChange", 4, "ngIf"], [3, "dataSource", "rowSize"], ["header", "", 4, "ngIf"], ["bitRowDef", ""], [3, "selectedChange", "selected"], [4, "ngFor", "ngForOf"], [3, "value"], ["bitBadge", "", "variant", "info"], ["header", ""], ["bitCell", ""], ["bitCell", "", 1, "tw-text-right"], [3, "cipher"], [4, "ngIf", "ngIfElse"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"], ["bitBadge", "", "variant", "warning"], ["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection-shared", 3, "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]], template: function ReusedPasswordsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-container")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, ReusedPasswordsReportComponent_div_5_Template, 6, 6, "div", 1)(6, ReusedPasswordsReportComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "reusedPasswordsReportDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.hasLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.hasLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__.IconComponent, _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__.StopClickDirective, _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__.StopPropDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_23__.BadgeComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_24__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_25__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_26__.AnchorLinkDirective, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_27__.BitRowDef, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__.CellDirective, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_27__.TableScrollComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_29__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_30__.ToggleComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__.WebHeaderComponent, _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__.OrganizationNameBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DecimalPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__.I18nPipe, _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__.GetOrgNameFromIdPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/dirt/reports/pages/organizations/unsecured-websites-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/dirt/reports/pages/organizations/unsecured-websites-report.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsecuredWebsitesReportComponent: () => (/* binding */ UnsecuredWebsitesReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/cipher.service */ "../../libs/common/src/vault/abstractions/cipher.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/vault */ "../../libs/vault/src/index.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter.service.ts");
/* harmony import */ var _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vault/org-vault/services/admin-console-cipher-form-config.service */ "./src/app/vault/org-vault/services/admin-console-cipher-form-config.service.ts");
/* harmony import */ var _unsecured_websites_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../unsecured-websites-report.component */ "./src/app/dirt/reports/pages/unsecured-websites-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/vault/components/icon.component */ "../../libs/angular/src/vault/components/icon.component.ts");
/* harmony import */ var _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-prop.directive */ "../../libs/angular/src/directives/stop-prop.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../vault/individual-vault/organization-badge/organization-name-badge.component */ "./src/app/vault/individual-vault/organization-badge/organization-name-badge.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../vault/individual-vault/pipes/get-organization-name.pipe */ "./src/app/vault/individual-vault/pipes/get-organization-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










































function UnsecuredWebsitesReportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function UnsecuredWebsitesReportComponent_div_6_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 2, "goodNews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "noUnsecuredWebsites"), " ");
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getName(status_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.getCount(status_r3), " ");
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-toggle-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectedChange", function UnsecuredWebsitesReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.filterOrgToggle($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, UnsecuredWebsitesReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template, 5, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.filterOrgStatus$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, "addAccessFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r1.filterStatus);
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 2, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 4, "owner"));
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4); const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r1.selectCipher(r_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 2, "editItemWithName", r_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.name);
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.name);
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "shared"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "shared"));
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "attachments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "attachments"));
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_app_org_badge_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-org-badge", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "orgNameFromId");
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r1.disabled)("organizationId", r_r5.organizationId)("organizationName", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 5, r_r5.organizationId, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, ctx_r1.organizations$)));
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "app-vault-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_4_Template, 4, 5, "ng-container", 22)(5, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_template_5_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"])(7, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_7_Template, 6, 6, "ng-container", 1)(8, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_ng_container_8_Template, 6, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_app_org_badge_13_Template, 3, 8, "app-org-badge", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const cantManage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("cipher", r_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization || ctx_r1.canManageCipher(r_r5))("ngIfElse", cantManage_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization && r_r5.organizationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", r_r5.hasAttachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](r_r5.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.organization);
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](0, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_tr_0_Template, 14, 7, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const rows$_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 1, rows$_r7));
} }
function UnsecuredWebsitesReportComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, UnsecuredWebsitesReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template, 4, 7, "bit-toggle-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "bit-table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_container_8_Template, 10, 6, "ng-container", 11)(9, UnsecuredWebsitesReportComponent_div_6_ng_container_2_ng_template_9_Template, 2, 3, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 5, "unsecuredWebsitesFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](5, 9, "unsecuredWebsitesFoundReportDesc", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 7, ctx_r1.ciphers.length), ctx_r1.vaultMsg), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.showFilterToggle && !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
} }
function UnsecuredWebsitesReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, UnsecuredWebsitesReportComponent_div_6_bit_callout_1_Template, 4, 6, "bit-callout", 6)(2, UnsecuredWebsitesReportComponent_div_6_ng_container_2_Template, 10, 13, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r1.ciphers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.ciphers.length);
} }
class UnsecuredWebsitesReportComponent extends _unsecured_websites_report_component__WEBPACK_IMPORTED_MODULE_10__.UnsecuredWebsitesReportComponent {
    constructor(cipherService, dialogService, route, organizationService, accountService, passwordRepromptService, i18nService, syncService, collectionService, cipherFormConfigService, adminConsoleCipherFormConfigService) {
        super(cipherService, organizationService, dialogService, accountService, passwordRepromptService, i18nService, syncService, collectionService, cipherFormConfigService, adminConsoleCipherFormConfigService);
        this.route = route;
        this.accountService = accountService;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdminConsoleActive = true;
            // eslint-disable-next-line rxjs-angular/prefer-takeuntil, rxjs/no-async-subscribe
            this.route.parent.parent.params.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)((a) => a === null || a === void 0 ? void 0 : a.id)));
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.getOrganizationById)(params.organizationId)));
                this.manageableCiphers = yield this.cipherService.getAll(userId);
                yield _super.ngOnInit.call(this);
            }));
        });
    }
    getAllCiphers() {
        return this.cipherService.getAllFromApiForOrganization(this.organization.id);
    }
    canManageCipher(c) {
        if (c.collectionIds.length === 0) {
            return true;
        }
        return this.manageableCiphers.some((x) => x.id === c.id);
    }
}
UnsecuredWebsitesReportComponent.ɵfac = function UnsecuredWebsitesReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UnsecuredWebsitesReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_4__.CipherService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.PasswordRepromptService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_5__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService)); };
UnsecuredWebsitesReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: UnsecuredWebsitesReportComponent, selectors: [["app-unsecured-websites-report"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([
            {
                provide: _bitwarden_vault__WEBPACK_IMPORTED_MODULE_6__.CipherFormConfigService,
                useClass: _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            },
            _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_9__.AdminConsoleCipherFormConfigService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_8__.RoutedVaultFilterService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_7__.RoutedVaultFilterBridgeService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [["cantManage", ""], [4, "ngIf"], ["class", "tw-mt-4", 4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [1, "tw-mt-4"], ["type", "success", 3, "title", 4, "ngIf"], ["type", "success", 3, "title"], ["type", "danger", 3, "title"], [3, "selected", "selectedChange", 4, "ngIf"], [3, "dataSource"], ["header", "", 4, "ngIf"], ["body", ""], [3, "selectedChange", "selected"], [4, "ngFor", "ngForOf"], [3, "value"], ["bitBadge", "", "variant", "info"], ["header", ""], ["bitRow", ""], ["bitCell", ""], ["bitRow", "", 4, "ngFor", "ngForOf"], [3, "cipher"], [4, "ngIf", "ngIfElse"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"], ["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection-shared", 3, "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]], template: function UnsecuredWebsitesReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-container")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, UnsecuredWebsitesReportComponent_div_5_Template, 6, 6, "div", 1)(6, UnsecuredWebsitesReportComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "unsecuredWebsitesReportDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.hasLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.hasLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_11__.IconComponent, _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_12__.StopClickDirective, _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_13__.StopPropDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__.BadgeComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__.AnchorLinkDirective, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__.ToggleComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__.WebHeaderComponent, _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_15__.OrganizationNameBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__.I18nPipe, _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_17__.GetOrgNameFromIdPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/dirt/reports/pages/organizations/weak-passwords-report.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dirt/reports/pages/organizations/weak-passwords-report.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeakPasswordsReportComponent: () => (/* binding */ WeakPasswordsReportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_tools_password_strength__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/tools/password-strength */ "../../libs/common/src/tools/password-strength/index.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/cipher.service */ "../../libs/common/src/vault/abstractions/cipher.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/vault */ "../../libs/vault/src/index.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter-bridge.service.ts");
/* harmony import */ var _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../vault/individual-vault/vault-filter/services/routed-vault-filter.service */ "./src/app/vault/individual-vault/vault-filter/services/routed-vault-filter.service.ts");
/* harmony import */ var _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../vault/org-vault/services/admin-console-cipher-form-config.service */ "./src/app/vault/org-vault/services/admin-console-cipher-form-config.service.ts");
/* harmony import */ var _weak_passwords_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../weak-passwords-report.component */ "./src/app/dirt/reports/pages/weak-passwords-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/vault/components/icon.component */ "../../libs/angular/src/vault/components/icon.component.ts");
/* harmony import */ var _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/directives/stop-prop.directive */ "../../libs/angular/src/directives/stop-prop.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/table-scroll.component */ "../../libs/components/src/table/table-scroll.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/table/sortable.component */ "../../libs/components/src/table/sortable.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../vault/individual-vault/organization-badge/organization-name-badge.component */ "./src/app/vault/individual-vault/organization-badge/organization-name-badge.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../vault/individual-vault/pipes/get-organization-name.pipe */ "./src/app/vault/individual-vault/pipes/get-organization-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};











































function WeakPasswordsReportComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function WeakPasswordsReportComponent_div_6_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 2, "goodNews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 4, "noWeakPasswords"), " ");
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const status_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", status_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.getName(status_r3), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r1.getCount(status_r3), " ");
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "bit-toggle-group", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("selectedChange", function WeakPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.filterOrgToggle($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, WeakPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_ng_container_3_Template, 5, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("selected", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 3, ctx_r1.filterOrgStatus$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 5, "addAccessFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r1.filterStatus);
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "owner"), " ");
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r4); const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r1.selectCipher(row_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 2, "editItemWithName", row_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r5.name);
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r5.name);
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "shared"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "shared"));
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "attachments"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "attachments"));
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_td_11_app_org_badge_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-org-badge", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "orgNameFromId");
} if (rf & 2) {
    const row_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", ctx_r1.disabled)("organizationId", row_r5.organizationId)("organizationName", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 5, row_r5.organizationId, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 3, ctx_r1.organizations$)));
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_td_11_app_org_badge_1_Template, 3, 8, "app-org-badge", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization);
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-vault-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_3_Template, 4, 5, "ng-container", 23)(4, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_template_4_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"])(6, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_6_Template, 6, 6, "ng-container", 1)(7, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_ng_container_7_Template, 6, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_td_11_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "td", 25)(13, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const cantManage_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("cipher", row_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization || ctx_r1.canManageCipher(row_r5))("ngIfElse", cantManage_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.organization && row_r5.organizationId);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", row_r5.hasAttachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](row_r5.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("variant", row_r5.reportValue.badgeVariant);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 9, row_r5.reportValue.label), " ");
} }
function WeakPasswordsReportComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, WeakPasswordsReportComponent_div_6_ng_container_2_bit_toggle_group_6_Template, 4, 7, "bit-toggle-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "bit-table-scroll", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](9, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, WeakPasswordsReportComponent_div_6_ng_container_2_th_13_Template, 3, 3, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, WeakPasswordsReportComponent_div_6_ng_container_2_ng_template_17_Template, 16, 11, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 8, "weakPasswordsFound"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](5, 12, "weakPasswordsFoundReportDesc", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 10, ctx_r1.ciphers.length), ctx_r1.vaultMsg), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.showFilterToggle && !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dataSource", ctx_r1.dataSource)("rowSize", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 16, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.isAdminConsoleActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](16, 18, "weakness"), " ");
} }
function WeakPasswordsReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, WeakPasswordsReportComponent_div_6_bit_callout_1_Template, 4, 6, "bit-callout", 6)(2, WeakPasswordsReportComponent_div_6_ng_container_2_Template, 18, 20, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r1.ciphers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.ciphers.length);
} }
class WeakPasswordsReportComponent extends _weak_passwords_report_component__WEBPACK_IMPORTED_MODULE_11__.WeakPasswordsReportComponent {
    constructor(cipherService, passwordStrengthService, dialogService, route, organizationService, passwordRepromptService, i18nService, syncService, cipherFormConfigService, accountService, adminConsoleCipherFormConfigService) {
        super(cipherService, passwordStrengthService, organizationService, dialogService, accountService, passwordRepromptService, i18nService, syncService, cipherFormConfigService, adminConsoleCipherFormConfigService);
        this.route = route;
        this.accountService = accountService;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.isAdminConsoleActive = true;
            // eslint-disable-next-line rxjs-angular/prefer-takeuntil, rxjs/no-async-subscribe
            this.route.parent.parent.params.subscribe((params) => __awaiter(this, void 0, void 0, function* () {
                const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__.getUserId));
                this.organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.organizationService
                    .organizations$(userId)
                    .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(params.organizationId)));
                this.manageableCiphers = yield this.cipherService.getAll(userId);
                yield _super.ngOnInit.call(this);
            }));
        });
    }
    getAllCiphers() {
        return this.cipherService.getAllFromApiForOrganization(this.organization.id);
    }
    canManageCipher(c) {
        if (c.collectionIds.length === 0) {
            return true;
        }
        return this.manageableCiphers.some((x) => x.id === c.id);
    }
}
WeakPasswordsReportComponent.ɵfac = function WeakPasswordsReportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || WeakPasswordsReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_cipher_service__WEBPACK_IMPORTED_MODULE_5__.CipherService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_tools_password_strength__WEBPACK_IMPORTED_MODULE_4__.PasswordStrengthServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.PasswordRepromptService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_6__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.CipherFormConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService)); };
WeakPasswordsReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: WeakPasswordsReportComponent, selectors: [["app-weak-passwords-report"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([
            {
                provide: _bitwarden_vault__WEBPACK_IMPORTED_MODULE_7__.CipherFormConfigService,
                useClass: _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService,
            },
            _vault_org_vault_services_admin_console_cipher_form_config_service__WEBPACK_IMPORTED_MODULE_10__.AdminConsoleCipherFormConfigService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_service__WEBPACK_IMPORTED_MODULE_9__.RoutedVaultFilterService,
            _vault_individual_vault_vault_filter_services_routed_vault_filter_bridge_service__WEBPACK_IMPORTED_MODULE_8__.RoutedVaultFilterBridgeService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 5, consts: [["cantManage", ""], [4, "ngIf"], ["class", "tw-mt-4", 4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [1, "tw-mt-4"], ["type", "success", 3, "title", 4, "ngIf"], ["type", "success", 3, "title"], ["type", "danger", 3, "title"], [3, "selected", "selectedChange", 4, "ngIf"], [3, "dataSource", "rowSize"], ["header", ""], ["bitCell", ""], ["bitCell", "", "bitSortable", "name"], ["bitCell", "", "bitSortable", "organizationId", 4, "ngIf"], ["bitCell", "", "bitSortable", "scoreKey", "default", "", 1, "tw-text-right"], ["bitRowDef", ""], [3, "selectedChange", "selected"], [4, "ngFor", "ngForOf"], [3, "value"], ["bitBadge", "", "variant", "info"], ["bitCell", "", "bitSortable", "organizationId"], [3, "cipher"], [4, "ngIf", "ngIfElse"], ["bitCell", "", 4, "ngIf"], ["bitCell", "", 1, "tw-text-right"], ["bitBadge", "", 3, "variant"], ["bitLink", "", "href", "#", "appStopClick", "", 3, "click", "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-collection-shared", 3, "title"], ["appStopProp", "", "aria-hidden", "true", 1, "bwi", "bwi-paperclip", 3, "title"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName", 4, "ngIf"], ["appStopProp", "", 3, "disabled", "organizationId", "organizationName"]], template: function WeakPasswordsReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "bit-container")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, WeakPasswordsReportComponent_div_5_Template, 6, 6, "div", 1)(6, WeakPasswordsReportComponent_div_6_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 3, "weakPasswordsReportDesc"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.hasLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.hasLoaded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _libs_angular_src_vault_components_icon_component__WEBPACK_IMPORTED_MODULE_12__.IconComponent, _libs_angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_13__.StopClickDirective, _libs_angular_src_directives_stop_prop_directive__WEBPACK_IMPORTED_MODULE_14__.StopPropDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_24__.BadgeComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_25__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_26__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_27__.AnchorLinkDirective, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_28__.BitRowDef, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_29__.CellDirective, _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_30__.SortableComponent, _libs_components_src_table_table_scroll_component__WEBPACK_IMPORTED_MODULE_28__.TableScrollComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_31__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_32__.ToggleComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_15__.WebHeaderComponent, _vault_individual_vault_organization_badge_organization_name_badge_component__WEBPACK_IMPORTED_MODULE_16__.OrganizationNameBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DecimalPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__.I18nPipe, _vault_individual_vault_pipes_get_organization_name_pipe__WEBPACK_IMPORTED_MODULE_18__.GetOrgNameFromIdPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/tools/event-export/event-export.service.ts":
/*!************************************************************!*\
  !*** ./src/app/tools/event-export/event-export.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventExportService: () => (/* binding */ EventExportService)
/* harmony export */ });
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "../../node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _event_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.export */ "./src/app/tools/event-export/event.export.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class EventExportService {
    getEventExport(events) {
        return __awaiter(this, void 0, void 0, function* () {
            return papaparse__WEBPACK_IMPORTED_MODULE_0__.unparse(events.map((e) => new _event_export__WEBPACK_IMPORTED_MODULE_1__.EventExport(e)));
        });
    }
    getFileName(prefix = null, extension = "csv") {
        const now = new Date();
        const dateString = now.getFullYear() +
            "" +
            this.padNumber(now.getMonth() + 1, 2) +
            "" +
            this.padNumber(now.getDate(), 2) +
            this.padNumber(now.getHours(), 2) +
            "" +
            this.padNumber(now.getMinutes(), 2) +
            this.padNumber(now.getSeconds(), 2);
        return "bitwarden" + (prefix ? "_" + prefix : "") + "_export_" + dateString + "." + extension;
    }
    padNumber(num, width, padCharacter = "0") {
        const numString = num.toString();
        return numString.length >= width
            ? numString
            : new Array(width - numString.length + 1).join(padCharacter) + numString;
    }
}
EventExportService.ɵfac = function EventExportService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EventExportService)(); };
EventExportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventExportService, factory: EventExportService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "./src/app/tools/event-export/event.export.ts":
/*!****************************************************!*\
  !*** ./src/app/tools/event-export/event.export.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventExport: () => (/* binding */ EventExport)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/enums */ "../../libs/common/src/enums/index.ts");

class EventExport {
    constructor(event) {
        this.message = event.humanReadableMessage;
        this.appIcon = event.appIcon;
        this.appName = event.appName;
        this.userId = event.userId;
        this.userName = event.userName;
        this.userEmail = event.userEmail;
        this.date = event.date;
        this.ip = event.ip;
        this.type = _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_0__.EventType[event.type];
        this.installationId = event.installationId;
    }
}


/***/ }),

/***/ "./src/app/tools/event-export/index.ts":
/*!*********************************************!*\
  !*** ./src/app/tools/event-export/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventExportService: () => (/* reexport safe */ _event_export_service__WEBPACK_IMPORTED_MODULE_0__.EventExportService)
/* harmony export */ });
/* harmony import */ var _event_export_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-export.service */ "./src/app/tools/event-export/event-export.service.ts");



/***/ })

}]);
//# sourceMappingURL=src_app_admin-console_organizations_reporting_organization-reporting_module_ts.6f60e00665a1c0ad2ec1.js.map