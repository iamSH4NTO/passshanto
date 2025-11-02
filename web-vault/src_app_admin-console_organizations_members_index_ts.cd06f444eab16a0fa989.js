"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_admin-console_organizations_members_index_ts"],{

/***/ "./src/app/admin-console/common/base-members.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-console/common/base-members.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseMembersComponent: () => (/* binding */ BaseMembersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/angular/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service */ "../../libs/common/src/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service.ts");
/* harmony import */ var _bitwarden_common_models_response_list_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/models/response/list.response */ "../../libs/common/src/models/response/list.response.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/validation.service */ "../../libs/common/src/platform/abstractions/validation.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _organizations_manage_user_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../organizations/manage/user-confirm.component */ "./src/app/admin-console/organizations/manage/user-confirm.component.ts");
/* harmony import */ var _people_table_data_source__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./people-table-data-source */ "./src/app/admin-console/common/people-table-data-source.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























/**
 * A refactored copy of BasePeopleComponent, using the component library table and other modern features.
 * This will replace BasePeopleComponent once all subclasses have been changed over to use this class.
 */
class BaseMembersComponent {
    /**
     * Shows a banner alerting the admin that users need to be confirmed.
     */
    get showConfirmUsers() {
        return (this.dataSource.activeUserCount > 1 &&
            this.dataSource.confirmedUserCount > 0 &&
            this.dataSource.confirmedUserCount < 3 &&
            this.dataSource.acceptedUserCount > 0);
    }
    get showBulkConfirmUsers() {
        return this.dataSource
            .getCheckedUsers()
            .every((member) => member.status == this.userStatusType.Accepted);
    }
    get showBulkReinviteUsers() {
        return this.dataSource
            .getCheckedUsers()
            .every((member) => member.status == this.userStatusType.Invited);
    }
    constructor(apiService, i18nService, keyService, validationService, logService, userNamePipe, dialogService, organizationManagementPreferencesService, toastService) {
        this.apiService = apiService;
        this.i18nService = i18nService;
        this.keyService = keyService;
        this.validationService = validationService;
        this.logService = logService;
        this.userNamePipe = userNamePipe;
        this.dialogService = dialogService;
        this.organizationManagementPreferencesService = organizationManagementPreferencesService;
        this.toastService = toastService;
        this.firstLoaded = false;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl("", { nonNullable: true });
        this.statusToggle = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(undefined);
        // Connect the search input and status toggles to the table dataSource filter
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.searchControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(200)), this.statusToggle])
            .pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)())
            .subscribe(([searchText, status]) => (this.dataSource.filter = (0,_people_table_data_source__WEBPACK_IMPORTED_MODULE_10__.peopleFilter)(searchText, status)));
    }
    load(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            // Load new users from the server
            const response = yield this.getUsers(organization);
            // GetUsers can return a ListResponse or an Array
            if (response instanceof _bitwarden_common_models_response_list_response__WEBPACK_IMPORTED_MODULE_3__.ListResponse) {
                this.dataSource.data = response.data != null && response.data.length > 0 ? response.data : [];
            }
            else if (Array.isArray(response)) {
                this.dataSource.data = response;
            }
            this.firstLoaded = true;
        });
    }
    removeUserConfirmationDialog(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dialogService.openSimpleDialog({
                title: this.userNamePipe.transform(user),
                content: { key: "removeUserConfirmation" },
                type: "warning",
            });
        });
    }
    remove(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.removeUserConfirmationDialog(user);
            if (!confirmed) {
                return false;
            }
            this.actionPromise = this.removeUser(user.id, organization);
            try {
                yield this.actionPromise;
                this.toastService.showToast({
                    variant: "success",
                    message: this.i18nService.t("removedUserId", this.userNamePipe.transform(user)),
                });
                this.dataSource.removeUser(user);
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    reinvite(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actionPromise != null) {
                return;
            }
            this.actionPromise = this.reinviteUser(user.id, organization);
            try {
                yield this.actionPromise;
                this.toastService.showToast({
                    variant: "success",
                    message: this.i18nService.t("hasBeenReinvited", this.userNamePipe.transform(user)),
                });
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    confirm(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmUser = (publicKey) => __awaiter(this, void 0, void 0, function* () {
                try {
                    this.actionPromise = this.confirmUser(user, publicKey, organization);
                    yield this.actionPromise;
                    user.status = this.userStatusType.Confirmed;
                    this.dataSource.replaceUser(user);
                    this.toastService.showToast({
                        variant: "success",
                        message: this.i18nService.t("hasBeenConfirmed", this.userNamePipe.transform(user)),
                    });
                }
                catch (e) {
                    this.validationService.showError(e);
                    throw e;
                }
                finally {
                    this.actionPromise = undefined;
                }
            });
            if (this.actionPromise != null) {
                return;
            }
            try {
                const publicKeyResponse = yield this.apiService.getUserPublicKey(user.userId);
                const publicKey = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_7__.Utils.fromB64ToArray(publicKeyResponse.publicKey);
                const autoConfirm = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.organizationManagementPreferencesService.autoConfirmFingerPrints.state$);
                if (user == null) {
                    throw new Error("Cannot confirm null user.");
                }
                if (autoConfirm == null || !autoConfirm) {
                    const dialogRef = _organizations_manage_user_confirm_component__WEBPACK_IMPORTED_MODULE_9__.UserConfirmComponent.open(this.dialogService, {
                        data: {
                            name: this.userNamePipe.transform(user),
                            userId: user.userId,
                            publicKey: publicKey,
                            confirmUser: () => confirmUser(publicKey),
                        },
                    });
                    yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.lastValueFrom)(dialogRef.closed);
                    return;
                }
                try {
                    const fingerprint = yield this.keyService.getFingerprint(user.userId, publicKey);
                    this.logService.info(`User's fingerprint: ${fingerprint.join("-")}`);
                }
                catch (e) {
                    this.logService.error(e);
                }
                yield confirmUser(publicKey);
            }
            catch (e) {
                this.logService.error(`Handled exception: ${e}`);
            }
        });
    }
}
BaseMembersComponent.ɵfac = function BaseMembersComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_8__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_validation_service__WEBPACK_IMPORTED_MODULE_6__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_5__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_0__.UserNamePipe), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_19__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_2__.OrganizationManagementPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_20__.ToastService)); };
BaseMembersComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineDirective"]({ type: BaseMembersComponent });


/***/ }),

/***/ "./src/app/admin-console/common/people-table-data-source.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin-console/common/people-table-data-source.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeopleTableDataSource: () => (/* binding */ PeopleTableDataSource),
/* harmony export */   peopleFilter: () => (/* binding */ peopleFilter)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/table/table-data-source.ts");
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore


const MaxCheckedCount = 500;
/**
 * Returns true if the user matches the status, or where the status is `null`, if the user is active (not revoked).
 */
function statusFilter(user, status) {
    if (status == null) {
        return user.status != _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserStatusType.Revoked;
    }
    return user.status === status;
}
/**
 * Returns true if the string matches the user's id, name, or email.
 * (The default string search includes all properties, which can return false positives for collection names etc.)
 */
function textFilter(user, text) {
    var _a;
    const normalizedText = text === null || text === void 0 ? void 0 : text.toLowerCase();
    return (!normalizedText || // null/empty strings should be ignored, i.e. always return true
        user.email.toLowerCase().includes(normalizedText) ||
        user.id.toLowerCase().includes(normalizedText) ||
        ((_a = user.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(normalizedText)));
}
function peopleFilter(searchText, status) {
    return (user) => statusFilter(user, status) && textFilter(user, searchText);
}
/**
 * An extended TableDataSource class for managing people (organization members and provider users).
 * It includes a tally of different statuses, utility methods, and other common functionality.
 */
class PeopleTableDataSource extends _bitwarden_components__WEBPACK_IMPORTED_MODULE_1__.TableDataSource {
    set data(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        super.data = data;
        this.activeUserCount =
            (_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.filter((u) => u.status !== this.statusType.Revoked).length) !== null && _b !== void 0 ? _b : 0;
        this.invitedUserCount =
            (_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.filter((u) => u.status === this.statusType.Invited).length) !== null && _d !== void 0 ? _d : 0;
        this.acceptedUserCount =
            (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.filter((u) => u.status === this.statusType.Accepted).length) !== null && _f !== void 0 ? _f : 0;
        this.confirmedUserCount =
            (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.filter((u) => u.status === this.statusType.Confirmed).length) !== null && _h !== void 0 ? _h : 0;
        this.revokedUserCount =
            (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.filter((u) => u.status === this.statusType.Revoked).length) !== null && _k !== void 0 ? _k : 0;
    }
    get data() {
        // If you override a setter, you must also override the getter
        return super.data;
    }
    /**
     * Check or uncheck a user in the table
     * @param select check the user (true), uncheck the user (false), or toggle the current state (null)
     */
    checkUser(user, select) {
        user.checked = select == null ? !user.checked : select;
    }
    getCheckedUsers() {
        return this.data.filter((u) => u.checked);
    }
    /**
     * Check all filtered users (i.e. those rows that are currently visible)
     * @param select check the filtered users (true) or uncheck the filtered users (false)
     */
    checkAllFilteredUsers(select) {
        if (select) {
            // Reset checkbox selection first so we know nothing else is selected
            this.uncheckAllUsers();
        }
        const filteredUsers = this.filteredData;
        const selectCount = filteredUsers.length > MaxCheckedCount ? MaxCheckedCount : filteredUsers.length;
        for (let i = 0; i < selectCount; i++) {
            this.checkUser(filteredUsers[i], select);
        }
    }
    uncheckAllUsers() {
        this.data.forEach((u) => (u.checked = false));
    }
    /**
     * Remove a user from the data source. Use this to ensure the table is re-rendered after the change.
     */
    removeUser(user) {
        // Note: use immutable functions so that we trigger setters to update the table
        this.data = this.data.filter((u) => u != user);
    }
    /**
     * Replace a user in the data source by matching on user.id. Use this to ensure the table is re-rendered after the change.
     */
    replaceUser(user) {
        const index = this.data.findIndex((u) => u.id === user.id);
        if (index > -1) {
            // Clone the array so that the setter for dataSource.data is triggered to update the table rendering
            const updatedData = this.data.slice();
            updatedData[index] = user;
            this.data = updatedData;
        }
    }
}


/***/ }),

/***/ "./src/app/admin-console/organizations/manage/user-confirm.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin-console/organizations/manage/user-confirm.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserConfirmComponent: () => (/* binding */ UserConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service */ "../../libs/common/src/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/components/src/checkbox/checkbox.component */ "../../libs/components/src/checkbox/checkbox.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/form-control.component */ "../../libs/components/src/form-control/form-control.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};























class UserConfirmComponent {
    constructor(data, dialogRef, keyService, logService, organizationManagementPreferencesService) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.keyService = keyService;
        this.logService = logService;
        this.organizationManagementPreferencesService = organizationManagementPreferencesService;
        this.loading = true;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            dontAskAgain: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(false),
        });
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            if (this.formGroup.value.dontAskAgain) {
                yield this.organizationManagementPreferencesService.autoConfirmFingerPrints.set(true);
            }
            yield this.data.confirmUser(this.publicKey);
            this.dialogRef.close();
        });
        this.name = data.name;
        this.userId = data.userId;
        this.publicKey = data.publicKey;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.publicKey != null) {
                    const fingerprint = yield this.keyService.getFingerprint(this.userId, this.publicKey);
                    if (fingerprint != null) {
                        this.fingerprint = fingerprint.join("-");
                    }
                }
            }
            catch (e) {
                this.logService.error(e);
            }
            this.loading = false;
        });
    }
    static open(dialogService, config) {
        return dialogService.open(UserConfirmComponent, config);
    }
}
UserConfirmComponent.ɵfac = function UserConfirmComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_8__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_2__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_1__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_0__.OrganizationManagementPreferencesService)); };
UserConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserConfirmComponent, selectors: [["ng-component"]], decls: 29, vars: 22, consts: [[3, "formGroup", "bitSubmit"], ["dialogSize", "default"], ["bitDialogTitle", ""], ["bitTypography", "body1", 1, "tw-text-muted"], ["bitDialogContent", ""], ["bitTypography", "body1"], ["bitLink", "", "href", "https://bitwarden.com/help/fingerprint-phrase/", "target", "_blank", "rel", "noreferrer"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "dontAskAgain"], ["bitDialogFooter", ""], ["bitButton", "", "bitFormButton", "", "type", "submit", "buttonType", "primary"], ["bitButton", "", "bitFormButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""]], template: function UserConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 0)(1, "bit-dialog", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "p", 5)(15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "bit-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](25, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroup)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 10, "confirmUser"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](10, 12, "fingerprintEnsureIntegrityVerify"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 14, "learnMore"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.fingerprint);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 16, "dontAskFingerprintAgain"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](25, 18, "confirm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 20, "cancel"), " ");
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_9__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_10__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_12__.CheckboxComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_15__.FormControlComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_16__.BitLabel, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_17__.AnchorLinkDirective, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/account-recovery/account-recovery-dialog.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/account-recovery/account-recovery-dialog.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRecoveryDialogComponent: () => (/* binding */ AccountRecoveryDialogComponent),
/* harmony export */   AccountRecoveryDialogResultType: () => (/* binding */ AccountRecoveryDialogResultType)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/auth/angular */ "../../libs/auth/src/angular/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/policy/policy.service.abstraction */ "../../libs/common/src/admin-console/abstractions/policy/policy.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/async-actions/async-actions.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/button/button.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/callout/callout.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.module.ts");
/* harmony import */ var _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/ui-common */ "../../libs/ui/common/src/index.ts");
/* harmony import */ var _services_organization_user_reset_password_organization_user_reset_password_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/organization-user-reset-password/organization-user-reset-password.service */ "./src/app/admin-console/organizations/members/services/organization-user-reset-password/organization-user-reset-password.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















const AccountRecoveryDialogResultType = {
    Ok: "ok",
};
/**
 * Used in a dialog for initiating the account recovery process against a
 * given organization user. An admin will access this form when they want to
 * reset a user's password and log them out of sessions.
 */
class AccountRecoveryDialogComponent {
    get loggedOutWarningName() {
        return this.dialogData.name != null ? this.dialogData.name : this.i18nService.t("thisUser");
    }
    constructor(dialogData, accountService, dialogRef, i18nService, policyService, resetPasswordService, toastService) {
        this.dialogData = dialogData;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.i18nService = i18nService;
        this.policyService = policyService;
        this.resetPasswordService = resetPasswordService;
        this.toastService = toastService;
        this.inputPasswordComponent = undefined;
        this.masterPasswordPolicyOptions$ = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.switchMap)((userId) => this.policyService.masterPasswordPolicyOptions$(userId)));
        this.inputPasswordFlow = _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_0__.InputPasswordFlow.ChangePasswordDelegation;
        this.handlePrimaryButtonClick = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.inputPasswordComponent) {
                throw new Error("InputPasswordComponent is not initialized");
            }
            const passwordInputResult = yield this.inputPasswordComponent.submit();
            if (!passwordInputResult) {
                return;
            }
            yield this.resetPasswordService.resetMasterPassword(passwordInputResult.newPassword, this.dialogData.email, this.dialogData.organizationUserId, this.dialogData.organizationId);
            this.toastService.showToast({
                variant: "success",
                title: "",
                message: this.i18nService.t("resetPasswordSuccess"),
            });
            this.dialogRef.close(AccountRecoveryDialogResultType.Ok);
        });
    }
}
/**
 * Strongly typed helper to open an `AccountRecoveryDialogComponent`
 * @param dialogService Instance of the dialog service that will be used to open the dialog
 * @param dialogConfig Configuration for the dialog
 */
AccountRecoveryDialogComponent.open = (dialogService, dialogConfig) => {
    return dialogService.open(AccountRecoveryDialogComponent, dialogConfig);
};
AccountRecoveryDialogComponent.ɵfac = function AccountRecoveryDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountRecoveryDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_9__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_10__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_organization_user_reset_password_organization_user_reset_password_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationUserResetPasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_11__.ToastService)); };
AccountRecoveryDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AccountRecoveryDialogComponent, selectors: [["app-account-recovery-dialog"]], viewQuery: function AccountRecoveryDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_0__.InputPasswordComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.inputPasswordComponent = _t.first);
    } }, decls: 15, vars: 19, consts: [[3, "title", "subtitle"], ["bitDialogContent", ""], ["type", "warning"], [3, "flow", "masterPasswordPolicyOptions"], ["bitDialogFooter", ""], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"], ["type", "button", "bitButton", "", "buttonType", "secondary", "bitDialogClose", ""]], template: function AccountRecoveryDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "bit-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "bit-callout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "auth-input-password", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](8, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 8, "recoverAccount"))("subtitle", ctx.dialogData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 10, "resetPasswordLoggedOutWarning", ctx.loggedOutWarningName), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("flow", ctx.inputPasswordFlow)("masterPasswordPolicyOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 13, ctx.masterPasswordPolicyOptions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bitAction", ctx.handlePrimaryButtonClick);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 15, "save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 17, "cancel"), " ");
    } }, dependencies: [_bitwarden_components__WEBPACK_IMPORTED_MODULE_12__.AsyncActionsModule, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_13__.BitActionDirective, _bitwarden_components__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_15__.ButtonComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_16__.CalloutModule, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_17__.CalloutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _bitwarden_components__WEBPACK_IMPORTED_MODULE_19__.DialogModule, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_20__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_21__.DialogComponent, _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_5__.I18nPipe,
        _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_0__.InputPasswordComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/base-bulk-confirm.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/base-bulk-confirm.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseBulkConfirmComponent: () => (/* binding */ BaseBulkConfirmComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class BaseBulkConfirmComponent {
    constructor(keyService, encryptService, i18nService) {
        this.keyService = keyService;
        this.encryptService = encryptService;
        this.i18nService = i18nService;
        this.publicKeys = new Map();
        this.fingerprints = new Map();
        this.statuses = new Map();
        this.done = false;
        this.loading = true;
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                const key = yield this.getCryptoKey();
                const userIdsWithKeys = [];
                for (const user of this.filteredUsers) {
                    const publicKey = this.publicKeys.get(user.id);
                    if (publicKey == null) {
                        continue;
                    }
                    const encryptedKey = yield this.encryptService.encapsulateKeyUnsigned(key, publicKey);
                    userIdsWithKeys.push({
                        id: user.id,
                        key: encryptedKey.encryptedString,
                    });
                }
                const userBulkResponse = yield this.postConfirmRequest(userIdsWithKeys);
                userBulkResponse.data.forEach((entry) => {
                    const error = entry.error !== "" ? entry.error : this.i18nService.t("bulkConfirmMessage");
                    this.statuses.set(entry.id, error);
                });
                this.done = true;
            }
            catch (e) {
                this.error = e.message;
            }
            this.loading = false;
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.excludedUsers = this.users.filter((user) => !this.isAccepted(user));
            this.filteredUsers = this.users.filter((user) => this.isAccepted(user));
            if (this.filteredUsers.length <= 0) {
                this.done = true;
            }
            const publicKeysResponse = yield this.getPublicKeys();
            for (const entry of publicKeysResponse.data) {
                const publicKey = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_2__.Utils.fromB64ToArray(entry.key);
                const fingerprint = yield this.keyService.getFingerprint(entry.userId, publicKey);
                if (fingerprint != null) {
                    this.publicKeys.set(entry.id, publicKey);
                    this.fingerprints.set(entry.id, fingerprint.join("-"));
                }
            }
            this.loading = false;
        });
    }
}
BaseBulkConfirmComponent.ɵfac = function BaseBulkConfirmComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseBulkConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_3__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_0__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService)); };
BaseBulkConfirmComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: BaseBulkConfirmComponent });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/base-bulk-remove.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/base-bulk-remove.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseBulkRemoveComponent: () => (/* binding */ BaseBulkRemoveComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BaseBulkRemoveComponent {
    constructor(i18nService) {
        this.i18nService = i18nService;
        this.statuses = new Map();
        this.done = false;
        this.loading = false;
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                const deleteUsersResponse = yield this.deleteUsers();
                deleteUsersResponse.data.forEach((entry) => {
                    const error = entry.error !== "" ? entry.error : this.i18nService.t("bulkRemovedMessage");
                    this.statuses.set(entry.id, error);
                });
                this.done = true;
            }
            catch (e) {
                this.error = e.message;
            }
            this.loading = false;
        });
    }
}
BaseBulkRemoveComponent.ɵfac = function BaseBulkRemoveComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BaseBulkRemoveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService)); };
BaseBulkRemoveComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: BaseBulkRemoveComponent });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-confirm-dialog.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-confirm-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkConfirmDialogComponent: () => (/* binding */ BulkConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/enums/feature-flag.enum */ "../../libs/common/src/enums/feature-flag.enum.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/state */ "../../libs/common/src/platform/state/index.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _services_organization_user_organization_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/organization-user/organization-user.service */ "./src/app/admin-console/organizations/members/services/organization-user/organization-user.service.ts");
/* harmony import */ var _base_bulk_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-bulk-confirm.component */ "./src/app/admin-console/organizations/members/components/bulk/base-bulk-confirm.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


































function BulkConfirmDialogComponent_bit_callout_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "noSelectedUsersApplicable"), " ");
} }
function BulkConfirmDialogComponent_bit_callout_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "bit-callout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 2, "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](user_r2.name);
} }
function BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "bit-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_0_p_6_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, user_r2))("id", user_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.fingerprints.get(user_r2.id), " ");
} }
function BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](user_r3.name);
} }
function BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 23)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "bit-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_1_p_6_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, user_r3))("id", user_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", user_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 7, "bulkFilteredMessage"), " ");
} }
function BulkConfirmDialogComponent_ng_container_5_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_0_Template, 9, 7, "tr", 16)(1, BulkConfirmDialogComponent_ng_container_5_ng_template_16_tr_1_Template, 10, 9, "tr", 17);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.filteredUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.excludedUsers);
} }
function BulkConfirmDialogComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](8, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "tr")(10, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, BulkConfirmDialogComponent_ng_container_5_ng_template_16_Template, 2, 2, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, "fingerprintEnsureIntegrityVerify"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 6, "learnMore"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 8, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 10, "fingerprint"));
} }
function BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](user_r4.name);
} }
function BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.statuses.get(user_r4.id), " ");
} }
function BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "bulkFilteredMessage"), " ");
} }
function BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "bit-avatar", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_p_6_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template, 2, 1, "td", 24)(8, BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template, 3, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 6, user_r4))("id", user_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", user_r4.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", user_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.statuses.has(user_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.statuses.has(user_r4.id));
} }
function BulkConfirmDialogComponent_ng_container_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, BulkConfirmDialogComponent_ng_container_6_ng_template_10_tr_0_Template, 9, 8, "tr", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.filteredUsers);
} }
function BulkConfirmDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "tr")(4, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BulkConfirmDialogComponent_ng_container_6_ng_template_10_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 2, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 4, "status"));
} }
function BulkConfirmDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BulkConfirmDialogComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r0.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "confirm"), " ");
} }
class BulkConfirmDialogComponent extends _base_bulk_confirm_component__WEBPACK_IMPORTED_MODULE_9__.BaseBulkConfirmComponent {
    constructor(keyService, dialogParams, encryptService, organizationUserApiService, i18nService, stateProvider, organizationUserService, configService) {
        super(keyService, encryptService, i18nService);
        this.keyService = keyService;
        this.dialogParams = dialogParams;
        this.encryptService = encryptService;
        this.organizationUserApiService = organizationUserApiService;
        this.i18nService = i18nService;
        this.stateProvider = stateProvider;
        this.organizationUserService = organizationUserService;
        this.configService = configService;
        this.getCryptoKey = () => __awaiter(this, void 0, void 0, function* () { return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.organizationKey$); });
        this.getPublicKeys = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.organizationUserApiService.postOrganizationUsersPublicKey(this.organization.id, this.filteredUsers.map((user) => user.id));
        });
        this.isAccepted = (user) => user.status === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__.OrganizationUserStatusType.Accepted;
        this.postConfirmRequest = (userIdsWithKeys) => __awaiter(this, void 0, void 0, function* () {
            if (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.configService.getFeatureFlag$(_bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_2__.FeatureFlag.CreateDefaultLocation))) {
                return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.organizationUserService.bulkConfirmUsers(this.organization, userIdsWithKeys));
            }
            else {
                const request = new _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserBulkConfirmRequest(userIdsWithKeys);
                return yield this.organizationUserApiService.postOrganizationUserBulkConfirm(this.organization.id, request);
            }
        });
        this.organization = dialogParams.organization;
        this.organizationKey$ = this.stateProvider.activeUserId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)((organizationKeysById) => organizationKeysById[this.organization.id]), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)());
        this.users = dialogParams.users;
    }
    static open(dialogService, config) {
        return dialogService.open(BulkConfirmDialogComponent, config);
    }
}
BulkConfirmDialogComponent.ɵfac = function BulkConfirmDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_7__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_17__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_6__.StateProvider), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_organization_user_organization_user_service__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService)); };
BulkConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: BulkConfirmDialogComponent, selectors: [["ng-component"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 12, consts: [["dialogSize", "large", 3, "title", "loading"], ["bitDialogContent", ""], ["type", "danger", 4, "ngIf"], ["type", "danger", 3, "title", 4, "ngIf"], [4, "ngIf"], ["bitDialogFooter", ""], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "click", 4, "ngIf"], ["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""], ["type", "danger"], ["type", "danger", 3, "title"], ["bitTypography", "body1"], ["bitLink", "", "href", "https://bitwarden.com/help/fingerprint-phrase/", "target", "_blank", "rel", "noreferrer"], ["header", ""], ["bitCell", "", "colspan", "2"], ["bitCell", ""], ["body", ""], ["bitRow", "", "alignContent", "middle", 4, "ngFor", "ngForOf"], ["alignContent", "middle", 4, "ngFor", "ngForOf"], ["bitRow", "", "alignContent", "middle"], ["bitCell", "", 1, "tw-w-5"], ["size", "small", 3, "text", "id"], ["class", "tw-text-muted tw-text-sm", 4, "ngIf"], [1, "tw-text-muted", "tw-text-sm"], ["alignContent", "middle"], ["bitCell", "", 4, "ngIf"], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "click", "disabled"]], template: function BulkConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "bit-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BulkConfirmDialogComponent_bit_callout_3_Template, 3, 3, "bit-callout", 2)(4, BulkConfirmDialogComponent_bit_callout_4_Template, 3, 4, "bit-callout", 3)(5, BulkConfirmDialogComponent_ng_container_5_Template, 17, 12, "ng-container", 4)(6, BulkConfirmDialogComponent_ng_container_6_Template, 11, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BulkConfirmDialogComponent_button_8_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 8, "confirmUsers"))("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.filteredUsers.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 10, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_21__.CalloutComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_22__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_23__.DialogComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_24__.AnchorLinkDirective, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_25__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_26__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_27__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_27__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_28__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_10__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_11__.UserNamePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-delete-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-delete-dialog.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkDeleteDialogComponent: () => (/* binding */ BulkDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/delete-managed-member/delete-managed-member-warning.service */ "./src/app/admin-console/organizations/members/services/delete-managed-member/delete-managed-member-warning.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















function BulkDeleteDialogComponent_bit_callout_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "noSelectedMembersApplicable"), " ");
} }
function BulkDeleteDialogComponent_bit_callout_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-callout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function BulkDeleteDialogComponent_ng_container_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "deleteManyOrganizationUsersWarningDesc"), " ");
} }
function BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "invited"), " ");
} }
function BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r2.name);
} }
function BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 16)(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "bit-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 19)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_span_7_Template, 3, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_small_8_Template, 2, 1, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, user_r2))("id", user_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r2.status === ctx_r0.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r2.name);
} }
function BulkDeleteDialogComponent_ng_container_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BulkDeleteDialogComponent_ng_container_5_ng_template_8_tr_0_Template, 9, 7, "tr", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkDeleteDialogComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BulkDeleteDialogComponent_ng_container_5_p_1_Template, 3, 3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "tr")(5, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BulkDeleteDialogComponent_ng_container_5_ng_template_8_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.users.length > 0 && !ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 2, "member"));
} }
function BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r3.name);
} }
function BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.statuses.get(user_r3.id), " ");
} }
function BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "bulkFilteredMessage"), " ");
} }
function BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 16)(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "bit-avatar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_small_6_Template, 2, 1, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template, 2, 1, "td", 24)(8, BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template, 3, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, user_r3))("id", user_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statuses.has(user_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.statuses.has(user_r3.id));
} }
function BulkDeleteDialogComponent_ng_container_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BulkDeleteDialogComponent_ng_container_6_ng_template_10_tr_0_Template, 9, 8, "tr", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkDeleteDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr")(4, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BulkDeleteDialogComponent_ng_container_6_ng_template_10_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 4, "status"));
} }
function BulkDeleteDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BulkDeleteDialogComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r0.submit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "deleteMembers"), " ");
} }
class BulkDeleteDialogComponent {
    constructor(dialogParams, i18nService, organizationUserApiService, deleteManagedMemberWarningService) {
        this.dialogParams = dialogParams;
        this.i18nService = i18nService;
        this.organizationUserApiService = organizationUserApiService;
        this.deleteManagedMemberWarningService = deleteManagedMemberWarningService;
        this.loading = false;
        this.done = false;
        this.error = null;
        this.statuses = new Map();
        this.userStatusType = _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__.OrganizationUserStatusType;
        this.organizationId = dialogParams.organizationId;
        this.users = dialogParams.users;
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteManagedMemberWarningService.acknowledgeWarning(this.organizationId);
            try {
                this.loading = true;
                this.error = null;
                const response = yield this.organizationUserApiService.deleteManyOrganizationUsers(this.organizationId, this.users.map((user) => user.id));
                response.data.forEach((entry) => {
                    this.statuses.set(entry.id, entry.error ? entry.error : this.i18nService.t("deletedSuccessfully"));
                });
                this.done = true;
            }
            catch (e) {
                this.error = e.message;
            }
            finally {
                this.loading = false;
            }
        });
    }
    static open(dialogService, config) {
        return dialogService.open(BulkDeleteDialogComponent, config);
    }
}
BulkDeleteDialogComponent.ɵfac = function BulkDeleteDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_3__.DeleteManagedMemberWarningService)); };
BulkDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BulkDeleteDialogComponent, selectors: [["ng-component"]], standalone: false, decls: 12, vars: 11, consts: [["dialogSize", "large", 3, "title"], ["bitDialogContent", ""], ["type", "danger", 4, "ngIf"], ["type", "danger", 3, "title", 4, "ngIf"], [4, "ngIf"], ["bitDialogFooter", ""], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "click", 4, "ngIf"], ["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""], ["type", "danger"], ["type", "danger", 3, "title"], ["bitTypography", "body1", 4, "ngIf"], ["header", ""], ["bitCell", "", "colspan", "2"], ["body", ""], ["bitTypography", "body1"], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], ["bitCell", "", 1, "tw-w-5"], ["size", "small", 3, "text", "id"], ["bitCell", ""], ["bitBadge", "", "class", "tw-text-xs", "variant", "secondary", 4, "ngIf"], ["class", "tw-text-muted tw-block", 4, "ngIf"], ["bitBadge", "", "variant", "secondary", 1, "tw-text-xs"], [1, "tw-text-muted", "tw-block"], ["bitCell", "", 4, "ngIf"], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "click", "disabled"]], template: function BulkDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BulkDeleteDialogComponent_bit_callout_3_Template, 3, 3, "bit-callout", 2)(4, BulkDeleteDialogComponent_bit_callout_4_Template, 3, 4, "bit-callout", 3)(5, BulkDeleteDialogComponent_ng_container_5_Template, 9, 4, "ng-container", 4)(6, BulkDeleteDialogComponent_ng_container_6_Template, 11, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BulkDeleteDialogComponent_button_8_Template, 3, 4, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 7, "deleteMembers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.users.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.done && ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__.AvatarComponent, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_12__.CalloutComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_16__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_5__.UserNamePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-enable-sm-dialog.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-enable-sm-dialog.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkEnableSecretsManagerDialogComponent: () => (/* binding */ BulkEnableSecretsManagerDialogComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/table/table-data-source.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-type.pipe */ "../../libs/angular/src/pipes/user-type.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





















function BulkEnableSecretsManagerDialogComponent_ng_template_17_tr_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", u_r1.email, " ");
} }
function BulkEnableSecretsManagerDialogComponent_ng_template_17_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 11)(1, "td", 5)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "bit-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BulkEnableSecretsManagerDialogComponent_ng_template_17_tr_0_div_9_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "userType");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const u_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, u_r1))("id", u_r1.userId)("color", u_r1.avatarColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, u_r1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", u_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, u_r1.type));
} }
function BulkEnableSecretsManagerDialogComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BulkEnableSecretsManagerDialogComponent_ng_template_17_tr_0_Template, 13, 12, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const rows$_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, rows$_r2));
} }
class BulkEnableSecretsManagerDialogComponent {
    constructor(dialogRef, data, organizationUserApiService, platformUtilsService, i18nService, toastService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.organizationUserApiService = organizationUserApiService;
        this.platformUtilsService = platformUtilsService;
        this.i18nService = i18nService;
        this.toastService = toastService;
        this.dataSource = new _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.TableDataSource();
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            yield this.organizationUserApiService.putOrganizationUserBulkEnableSecretsManager(this.data.orgId, this.dataSource.data.map((u) => u.id));
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("activatedAccessToSecretsManager"),
            });
            this.dialogRef.close();
        });
    }
    ngOnInit() {
        this.dataSource.data = this.data.users;
    }
    static open(dialogService, data) {
        return dialogService.open(BulkEnableSecretsManagerDialogComponent, { data });
    }
}
BulkEnableSecretsManagerDialogComponent.ɵfac = function BulkEnableSecretsManagerDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkEnableSecretsManagerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_8__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_9__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_10__.ToastService)); };
BulkEnableSecretsManagerDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BulkEnableSecretsManagerDialogComponent, selectors: [["ng-component"]], standalone: false, decls: 25, vars: 20, consts: [["dialogSize", "large"], ["bitDialogTitle", ""], ["bitDialogContent", ""], [3, "dataSource"], ["header", ""], ["bitCell", ""], ["body", ""], ["bitDialogFooter", ""], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"], ["type", "button", "bitButton", "", "buttonType", "secondary", "bitDialogClose", ""], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], [1, "tw-flex", "tw-items-center"], ["size", "small", 1, "tw-mr-3", 3, "text", "id", "color"], [1, "tw-flex", "tw-flex-col"], ["class", "tw-text-sm tw-text-muted", 4, "ngIf"], [1, "tw-text-sm", "tw-text-muted"]], template: function BulkEnableSecretsManagerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-dialog", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 2)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "bit-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "tr")(11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, BulkEnableSecretsManagerDialogComponent_ng_template_17_Template, 2, 3, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](18, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 8, "activateSecretsManager"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 10, "bulkEnableSecretsManagerDescription"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 12, "member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 14, "role"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("bitAction", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 16, "activateAccess"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 18, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_12__.BitActionDirective, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_13__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_15__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_16__.DialogComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_17__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_18__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_19__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_19__.TableComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_4__.UserNamePipe, _libs_angular_src_pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_5__.UserTypePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-remove-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-remove-dialog.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkRemoveDialogComponent: () => (/* binding */ BulkRemoveDialogComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _base_bulk_remove_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-bulk-remove.component */ "./src/app/admin-console/organizations/members/components/bulk/base-bulk-remove.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");





















function BulkRemoveDialogComponent_bit_callout_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-callout", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "noSelectedUsersApplicable"), " ");
} }
function BulkRemoveDialogComponent_bit_callout_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-callout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function BulkRemoveDialogComponent_ng_container_5_bit_callout_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "removeMembersWithoutMasterPasswordWarning"), " ");
} }
function BulkRemoveDialogComponent_ng_container_5_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-callout", 15)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BulkRemoveDialogComponent_ng_container_5_bit_callout_1_p_3_Template, 3, 3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.removeUsersWarning);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showNoMasterPasswordWarning);
} }
function BulkRemoveDialogComponent_ng_container_5_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "details"));
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r2.name);
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "noMasterPassword"), " ");
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_ng_container_2_Template, 2, 0, "ng-container", 4)(3, BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_ng_container_3_Template, 4, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r2.hasMasterPassword === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r2.hasMasterPassword === false);
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "bit-avatar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_small_6_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_td_7_Template, 4, 2, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 5, user_r2))("id", user_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r2.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showNoMasterPasswordWarning);
} }
function BulkRemoveDialogComponent_ng_container_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BulkRemoveDialogComponent_ng_container_5_ng_template_9_tr_0_Template, 8, 7, "tr", 19);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkRemoveDialogComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BulkRemoveDialogComponent_ng_container_5_bit_callout_1_Template, 4, 2, "bit-callout", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "tr")(5, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BulkRemoveDialogComponent_ng_container_5_th_8_Template, 3, 3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BulkRemoveDialogComponent_ng_container_5_ng_template_9_Template, 1, 1, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.users.length > 0 && !ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 3, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showNoMasterPasswordWarning);
} }
function BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r3.name);
} }
function BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.statuses.get(user_r3.id), " ");
} }
function BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "bulkFilteredMessage"), " ");
} }
function BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20)(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "bit-avatar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_small_6_Template, 2, 1, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_td_7_Template, 2, 1, "td", 13)(8, BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_td_8_Template, 3, 3, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, user_r3))("id", user_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r3.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", user_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.statuses.has(user_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.statuses.has(user_r3.id));
} }
function BulkRemoveDialogComponent_ng_container_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BulkRemoveDialogComponent_ng_container_6_ng_template_10_tr_0_Template, 9, 8, "tr", 19);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkRemoveDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr")(4, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, BulkRemoveDialogComponent_ng_container_6_ng_template_10_Template, 1, 1, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 2, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 4, "status"));
} }
function BulkRemoveDialogComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.loading)("bitAction", ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, "removeMembers"), " ");
} }
class BulkRemoveDialogComponent extends _base_bulk_remove_component__WEBPACK_IMPORTED_MODULE_3__.BaseBulkRemoveComponent {
    constructor(dialogParams, i18nService, organizationUserApiService) {
        super(i18nService);
        this.dialogParams = dialogParams;
        this.i18nService = i18nService;
        this.organizationUserApiService = organizationUserApiService;
        this.deleteUsers = () => this.organizationUserApiService.removeManyOrganizationUsers(this.organizationId, this.users.map((user) => user.id));
        this.organizationId = dialogParams.organizationId;
        this.users = dialogParams.users;
        this.showNoMasterPasswordWarning = this.users.some((u) => u.status > _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__.OrganizationUserStatusType.Invited && u.hasMasterPassword === false);
    }
    get removeUsersWarning() {
        return this.i18nService.t("removeOrgUsersConfirmation");
    }
    static open(dialogService, config) {
        return dialogService.open(BulkRemoveDialogComponent, config);
    }
}
BulkRemoveDialogComponent.ɵfac = function BulkRemoveDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkRemoveDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService)); };
BulkRemoveDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BulkRemoveDialogComponent, selectors: [["ng-component"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 11, consts: [["dialogSize", "large", 3, "title"], ["bitDialogContent", ""], ["type", "danger", 4, "ngIf"], ["type", "danger", 3, "title", 4, "ngIf"], [4, "ngIf"], ["bitDialogFooter", ""], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "bitAction", 4, "ngIf"], ["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""], ["type", "danger"], ["type", "danger", 3, "title"], ["type", "warning", 4, "ngIf"], ["header", ""], ["bitCell", "", "colspan", "2"], ["bitCell", "", 4, "ngIf"], ["body", ""], ["type", "warning"], ["bitTypography", "body1"], ["bitTypography", "body1", 4, "ngIf"], ["bitCell", ""], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], ["bitCell", "", 1, "tw-w-5"], ["size", "small", 3, "text", "id"], ["class", "tw-text-muted tw-block", 4, "ngIf"], [1, "tw-text-muted", "tw-block"], [1, "tw-text-muted", "tw-block", "tw-lowercase"], ["aria-hidden", "true", 1, "bwi", "bwi-exclamation-triangle"], ["bitButton", "", "type", "submit", "buttonType", "primary", 3, "disabled", "bitAction"]], template: function BulkRemoveDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "bit-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BulkRemoveDialogComponent_bit_callout_3_Template, 3, 3, "bit-callout", 2)(4, BulkRemoveDialogComponent_bit_callout_4_Template, 3, 4, "bit-callout", 3)(5, BulkRemoveDialogComponent_ng_container_5_Template, 10, 5, "ng-container", 4)(6, BulkRemoveDialogComponent_ng_container_6_Template, 11, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BulkRemoveDialogComponent_button_8_Template, 3, 5, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 7, "removeMembers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.users.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.done && ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_9__.BitActionDirective, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_11__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_12__.CalloutComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_15__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_16__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_17__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_18__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_5__.UserNamePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-restore-revoke.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-restore-revoke.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkRestoreRevokeComponent: () => (/* binding */ BulkRestoreRevokeComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















const _c0 = a0 => ({ $implicit: a0 });
function BulkRestoreRevokeComponent_bit_callout_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-callout", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "noSelectedUsersApplicable"), " ");
} }
function BulkRestoreRevokeComponent_bit_callout_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-callout", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
function BulkRestoreRevokeComponent_bit_callout_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-callout", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, "nonCompliantMembersTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, "nonCompliantMembersError"), " ");
} }
function BulkRestoreRevokeComponent_ng_template_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", user_r2.name + " " + user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", user_r2.email, " ");
} }
function BulkRestoreRevokeComponent_ng_template_8_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](user_r2.email);
} }
function BulkRestoreRevokeComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "bit-avatar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, BulkRestoreRevokeComponent_ng_template_8_ng_container_4_Template, 5, 3, "ng-container", 16)(5, BulkRestoreRevokeComponent_ng_template_8_ng_template_5_Template, 2, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const emailOnly_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, user_r2))("id", user_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r2.name)("ngIfElse", emailOnly_r3);
} }
function BulkRestoreRevokeComponent_ng_container_10_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "revokeUsersWarning"));
} }
function BulkRestoreRevokeComponent_ng_container_10_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "details"), " ");
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "noMasterPassword"), " ");
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 23)(1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_ng_container_2_Template, 2, 0, "ng-container", 7)(3, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_ng_container_3_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r4.hasMasterPassword === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", user_r4.hasMasterPassword === false);
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_ng_container_2_Template, 1, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_td_3_Template, 4, 2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const userDisplay_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", userDisplay_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c0, user_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showNoMasterPasswordWarning);
} }
function BulkRestoreRevokeComponent_ng_container_10_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_tr_0_Template, 4, 5, "tr", 24);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkRestoreRevokeComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, BulkRestoreRevokeComponent_ng_container_10_p_1_Template, 3, 3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr")(5, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, BulkRestoreRevokeComponent_ng_container_10_th_8_Template, 3, 3, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, BulkRestoreRevokeComponent_ng_container_10_ng_template_9_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.users.length > 0 && !ctx_r0.error && ctx_r0.isRevoking);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 3, "member"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.showNoMasterPasswordWarning);
} }
function BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.statuses.get(user_r6.id), " ");
} }
function BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "bulkFilteredMessage"), " ");
} }
function BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_ng_container_2_Template, 1, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_td_3_Template, 2, 1, "td", 30)(4, BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_td_4_Template, 3, 3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    const userDisplay_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", userDisplay_r5)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, user_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.statuses.has(user_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.statuses.has(user_r6.id));
} }
function BulkRestoreRevokeComponent_ng_container_11_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, BulkRestoreRevokeComponent_ng_container_11_ng_template_10_tr_0_Template, 5, 6, "tr", 24);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.users);
} }
function BulkRestoreRevokeComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr")(4, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, BulkRestoreRevokeComponent_ng_container_11_ng_template_10_Template, 1, 1, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 2, "member"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, "status"));
} }
function BulkRestoreRevokeComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bitAction", ctx_r0.submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.bulkTitle, " ");
} }
class BulkRestoreRevokeComponent {
    constructor(i18nService, organizationUserApiService, data) {
        this.i18nService = i18nService;
        this.organizationUserApiService = organizationUserApiService;
        this.data = data;
        this.statuses = new Map();
        this.loading = false;
        this.done = false;
        this.showNoMasterPasswordWarning = false;
        this.nonCompliantMembers = false;
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.performBulkUserAction();
                const bulkMessage = this.isRevoking ? "bulkRevokedMessage" : "bulkRestoredMessage";
                response.data.forEach((entry) => __awaiter(this, void 0, void 0, function* () {
                    const error = entry.error !== ""
                        ? this.i18nService.t("cannotRestoreAccessError")
                        : this.i18nService.t(bulkMessage);
                    this.statuses.set(entry.id, error);
                    if (entry.error !== "") {
                        this.nonCompliantMembers = true;
                    }
                }));
                this.done = true;
            }
            catch (e) {
                this.error = e.message;
            }
        });
        this.isRevoking = data.isRevoking;
        this.organizationId = data.organizationId;
        this.users = data.users;
        this.showNoMasterPasswordWarning = this.users.some((u) => u.status > _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_1__.OrganizationUserStatusType.Invited && u.hasMasterPassword === false);
    }
    get bulkTitle() {
        const titleKey = this.isRevoking ? "revokeMembers" : "restoreMembers";
        return this.i18nService.t(titleKey);
    }
    performBulkUserAction() {
        return __awaiter(this, void 0, void 0, function* () {
            const userIds = this.users.map((user) => user.id);
            if (this.isRevoking) {
                return yield this.organizationUserApiService.revokeManyOrganizationUsers(this.organizationId, userIds);
            }
            else {
                return yield this.organizationUserApiService.restoreManyOrganizationUsers(this.organizationId, userIds);
            }
        });
    }
    static open(dialogService, data) {
        return dialogService.open(BulkRestoreRevokeComponent, { data });
    }
}
BulkRestoreRevokeComponent.ɵfac = function BulkRestoreRevokeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkRestoreRevokeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_6__.DIALOG_DATA)); };
BulkRestoreRevokeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: BulkRestoreRevokeComponent, selectors: [["app-bulk-restore-revoke"]], standalone: false, decls: 17, vars: 10, consts: [["userDisplay", ""], ["emailOnly", ""], ["dialogSize", "large"], ["bitDialogTitle", ""], ["bitDialogContent", ""], ["type", "danger", 4, "ngIf"], ["type", "danger", 3, "title", 4, "ngIf"], [4, "ngIf"], ["bitDialogFooter", ""], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction", 4, "ngIf"], ["type", "button", "bitButton", "", "buttonType", "secondary", "bitDialogClose", ""], ["type", "danger"], ["type", "danger", 3, "title"], [1, "tw-flex", "tw-items-center"], [1, "tw-mr-6"], ["size", "small", 3, "text", "id"], [4, "ngIf", "ngIfElse"], [1, "tw-truncate", 3, "title"], [1, "tw-block", "tw-text-muted", "tw-truncate"], ["header", ""], ["bitCell", ""], ["bitCell", "", "class", "tw-w-1/2", 4, "ngIf"], ["body", ""], ["bitCell", "", 1, "tw-w-1/2"], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], ["bitCell", "", 1, "tw-max-w-0"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "tw-block", "tw-lowercase", "tw-text-muted"], ["aria-hidden", "true", 1, "bwi", "bwi-exclamation-triangle"], ["bitCell", "", 4, "ngIf"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "bitAction"]], template: function BulkRestoreRevokeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, BulkRestoreRevokeComponent_bit_callout_5_Template, 3, 3, "bit-callout", 5)(6, BulkRestoreRevokeComponent_bit_callout_6_Template, 2, 1, "bit-callout", 5)(7, BulkRestoreRevokeComponent_bit_callout_7_Template, 4, 6, "bit-callout", 6)(8, BulkRestoreRevokeComponent_ng_template_8_Template, 7, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(10, BulkRestoreRevokeComponent_ng_container_10_Template, 10, 5, "ng-container", 7)(11, BulkRestoreRevokeComponent_ng_container_11_Template, 11, 6, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, BulkRestoreRevokeComponent_button_13_Template, 2, 2, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.bulkTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.users.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nonCompliantMembers);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.done && ctx.users.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 8, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_8__.BitActionDirective, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_9__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_11__.CalloutComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_12__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_13__.DialogComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_14__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_15__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_16__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_16__.TableComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_4__.UserNamePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/bulk/bulk-status.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/bulk/bulk-status.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BulkStatusComponent: () => (/* binding */ BulkStatusComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















function BulkStatusComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "loading"), " ");
} }
function BulkStatusComponent_bit_table_4_ng_template_9_tr_0_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.user.name);
} }
function BulkStatusComponent_bit_table_4_ng_template_9_tr_0_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.message, " ");
} }
function BulkStatusComponent_bit_table_4_ng_template_9_tr_0_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.message, " ");
} }
function BulkStatusComponent_bit_table_4_ng_template_9_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 13)(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "bit-avatar", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BulkStatusComponent_bit_table_4_ng_template_9_tr_0_small_6_Template, 2, 1, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BulkStatusComponent_bit_table_4_ng_template_9_tr_0_td_7_Template, 2, 1, "td", 17)(8, BulkStatusComponent_bit_table_4_ng_template_9_tr_0_td_8_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, item_r1.user))("id", item_r1.user.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.user.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r1.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r1.error);
} }
function BulkStatusComponent_bit_table_4_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BulkStatusComponent_bit_table_4_ng_template_9_tr_0_Template, 9, 8, "tr", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.users);
} }
function BulkStatusComponent_bit_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr")(3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BulkStatusComponent_bit_table_4_ng_template_9_Template, 1, 1, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 4, "status"));
} }
class BulkStatusComponent {
    constructor(data, i18nService, logService) {
        this.data = data;
        this.i18nService = i18nService;
        this.logService = logService;
        this.loading = false;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            yield this.showBulkStatus(this.data);
        });
    }
    showBulkStatus(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield data.request;
                const keyedErrors = response.data
                    .filter((r) => r.error !== "")
                    .reduce((a, x) => (Object.assign(Object.assign({}, a), { [x.id]: x.error })), {});
                const keyedFilteredUsers = data.filteredUsers.reduce((a, x) => (Object.assign(Object.assign({}, a), { [x.id]: x })), {});
                this.users = data.users.map((user) => {
                    var _a;
                    let message = (_a = keyedErrors[user.id]) !== null && _a !== void 0 ? _a : data.successfulMessage;
                    // eslint-disable-next-line
                    if (!keyedFilteredUsers.hasOwnProperty(user.id)) {
                        message = this.i18nService.t("bulkFilteredMessage");
                    }
                    return {
                        user: user,
                        error: keyedErrors.hasOwnProperty(user.id), // eslint-disable-line
                        message: message,
                    };
                });
                this.loading = false;
            }
            catch (e) {
                this.logService.error(e);
            }
        });
    }
    static open(dialogService, config) {
        return dialogService.open(BulkStatusComponent, config);
    }
}
BulkStatusComponent.ɵfac = function BulkStatusComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BulkStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_5__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_1__.LogService)); };
BulkStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BulkStatusComponent, selectors: [["app-bulk-status"]], standalone: false, decls: 9, vars: 8, consts: [["dialogSize", "large", 3, "title"], ["bitDialogContent", ""], ["class", "tw-text-center", 4, "ngIf"], [4, "ngIf"], ["bitDialogFooter", ""], ["bitButton", "", "type", "button", "buttonType", "secondary", "bitDialogClose", ""], [1, "tw-text-center"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", 3, "title"], ["header", ""], ["colspan", "2", "bitCell", ""], ["bitCell", ""], ["body", ""], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], ["width", "30", "bitCell", ""], ["size", "small", 3, "text", "id"], ["class", "tw-text-muted tw-block", 4, "ngIf"], ["class", "tw-text-danger", "bitCell", "", 4, "ngIf"], ["bitCell", "", 4, "ngIf"], [1, "tw-text-muted", "tw-block"], ["bitCell", "", 1, "tw-text-danger"]], template: function BulkStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "bit-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BulkStatusComponent_div_3_Template, 5, 6, "div", 2)(4, BulkStatusComponent_bit_table_4_Template, 10, 6, "bit-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 4, "bulkConfirmStatus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 6, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_7__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_8__.ButtonComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_9__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DialogComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_11__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_12__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_13__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_13__.TableComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_2__.I18nPipe, _libs_angular_src_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_3__.UserNamePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/index.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberDialogComponent: () => (/* reexport safe */ _member_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MemberDialogComponent),
/* harmony export */   MemberDialogResult: () => (/* reexport safe */ _member_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MemberDialogResult),
/* harmony export */   MemberDialogTab: () => (/* reexport safe */ _member_dialog_component__WEBPACK_IMPORTED_MODULE_0__.MemberDialogTab),
/* harmony export */   UserDialogModule: () => (/* reexport safe */ _member_dialog_module__WEBPACK_IMPORTED_MODULE_1__.UserDialogModule),
/* harmony export */   openUserAddEditDialog: () => (/* reexport safe */ _member_dialog_component__WEBPACK_IMPORTED_MODULE_0__.openUserAddEditDialog)
/* harmony export */ });
/* harmony import */ var _member_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./member-dialog.component */ "./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.component.ts");
/* harmony import */ var _member_dialog_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./member-dialog.module */ "./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.module.ts");




/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberDialogComponent: () => (/* binding */ MemberDialogComponent),
/* harmony export */   MemberDialogResult: () => (/* binding */ MemberDialogResult),
/* harmony export */   MemberDialogTab: () => (/* binding */ MemberDialogTab),
/* harmony export */   openUserAddEditDialog: () => (/* binding */ openUserAddEditDialog)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_api_permissions_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/api/permissions.api */ "../../libs/common/src/admin-console/models/api/permissions.api.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core */ "./src/app/admin-console/organizations/core/index.ts");
/* harmony import */ var _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/access-selector */ "./src/app/admin-console/organizations/shared/components/access-selector/index.ts");
/* harmony import */ var _services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/delete-managed-member/delete-managed-member-warning.service */ "./src/app/admin-console/organizations/members/services/delete-managed-member/delete-managed-member-warning.service.ts");
/* harmony import */ var _validators_comma_separated_emails_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validators/comma-separated-emails.validator */ "./src/app/admin-console/organizations/members/components/member-dialog/validators/comma-separated-emails.validator.ts");
/* harmony import */ var _validators_input_email_limit_validator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validators/input-email-limit.validator */ "./src/app/admin-console/organizations/members/components/member-dialog/validators/input-email-limit.validator.ts");
/* harmony import */ var _validators_org_seat_limit_reached_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./validators/org-seat-limit-reached.validator */ "./src/app/admin-console/organizations/members/components/member-dialog/validators/org-seat-limit-reached.validator.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_a11y_a11y_title_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/a11y/a11y-title.directive */ "../../libs/components/src/a11y/a11y-title.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/checkbox/checkbox.component */ "../../libs/components/src/checkbox/checkbox.component.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-control/form-control.component */ "../../libs/components/src/form-control/form-control.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/radio-button/radio-button.component */ "../../libs/components/src/radio-button/radio-button.component.ts");
/* harmony import */ var _libs_components_src_radio_button_radio_group_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/radio-button/radio-group.component */ "../../libs/components/src/radio-button/radio-group.component.ts");
/* harmony import */ var _libs_components_src_tabs_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/tabs/tab-group/tab-group.component */ "../../libs/components/src/tabs/tab-group/tab-group.component.ts");
/* harmony import */ var _libs_components_src_tabs_tab_group_tab_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/tabs/tab-group/tab.component */ "../../libs/components/src/tabs/tab-group/tab.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _shared_components_access_selector_access_selector_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/access-selector/access-selector.component */ "./src/app/admin-console/organizations/shared/components/access-selector/access-selector.component.ts");
/* harmony import */ var _nested_checkbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nested-checkbox.component */ "./src/app/admin-console/organizations/members/components/member-dialog/nested-checkbox.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



















































const _c0 = a0 => ({ seats: a0 });
function MemberDialogComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, ctx_r0.editParams$)) == null ? null : tmp_1_0.name);
} }
function MemberDialogComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "revoked"));
} }
function MemberDialogComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remaining_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](2, 1, "inviteMultipleEmailDesc", remaining_r3.seats));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "inviteSingleEmailDesc"));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "inviteZeroEmailDesc"));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-form-field")(1, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_5_Template, 3, 4, "bit-hint", 7)(6, MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_6_Template, 3, 3, "bit-hint", 7)(7, MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_bit_hint_7_Template, 3, 3, "bit-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remaining_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", remaining_r3.seats > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", remaining_r3.seats === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", remaining_r3.seats === 0);
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, MemberDialogComponent_bit_tab_group_9_ng_container_3_bit_form_field_4_Template, 8, 6, "bit-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "inviteUserDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, ctx_r0.remainingSeats$)));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 3, "customDescNonEnterpriseStart"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 5, "customDescNonEnterpriseLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 7, "customDescNonEnterpriseEnd"), " ");
} }
function MemberDialogComponent_bit_tab_group_9_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "customDesc"));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 35)(2, "div", 36)(3, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](14, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "app-nested-checkbox", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 36)(21, "div", 41)(22, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](23, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](28, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](33, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](36, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](38, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](41, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](43, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](46, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx_r0.permissionsGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 10, "accessEventLogs"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 12, "accessImportExport"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 14, "accessReports"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("checkboxes", ctx_r0.permissionsGroup.controls.manageAllCollectionsGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 16, "manageGroups"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 18, "manageSso"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](36, 20, "managePolicies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](41, 22, "manageUsers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](46, 24, "manageAccountRecovery"));
} }
function MemberDialogComponent_bit_tab_group_9_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h3", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "bit-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 5, "secretsManager"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("appA11yTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 7, "learnMore"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 9, "secretsManagerAccessDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx_r0.isOnSecretsManagerStandalone);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 11, "userAccessSecretsManagerGA"), " ");
} }
function MemberDialogComponent_bit_tab_group_9_bit_form_field_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-form-field")(1, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "externalId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 4, "externalIdDesc"));
} }
function MemberDialogComponent_bit_tab_group_9_bit_form_field_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-form-field")(1, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "ssoExternalId"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 4, "ssoExternalIdDesc"));
} }
function MemberDialogComponent_bit_tab_group_9_bit_tab_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "bit-access-selector", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 7, "groups"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 9, ctx_r0.restrictEditingSelf$) ? _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 11, "restrictedGroupAccess") : _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 13, "groupAccessUserDesc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("items", ctx_r0.groupAccessItems)("columnHeader", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 15, "groups"))("selectorLabelText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 17, "selectGroups"))("emptySelectionText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 19, "noGroupsAdded"))("hideMultiSelect", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 21, ctx_r0.restrictEditingSelf$));
} }
function MemberDialogComponent_bit_tab_group_9_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "cannotAddYourselfToCollections"), " ");
} }
function MemberDialogComponent_bit_tab_group_9_div_49_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "userPermissionOverrideHelperDesc"), " ");
} }
function MemberDialogComponent_bit_tab_group_9_div_49_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "restrictedCollectionAssignmentDesc"), " ");
} }
function MemberDialogComponent_bit_tab_group_9_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, MemberDialogComponent_bit_tab_group_9_div_49_span_1_Template, 3, 3, "span", 7)(2, MemberDialogComponent_bit_tab_group_9_div_49_span_2_Template, 3, 3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const organization_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", organization_r4.useGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, ctx_r0.canAssignAccessToAnyCollection$));
} }
function MemberDialogComponent_bit_tab_group_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "bit-tab-group", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("selectedIndexChange", function MemberDialogComponent_bit_tab_group_9_Template_bit_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx_r0.tabIndex, $event) || (ctx_r0.tabIndex = $event); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"]($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, MemberDialogComponent_bit_tab_group_9_ng_container_3_Template, 6, 8, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "bit-radio-group", 21)(5, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "bit-radio-button", 24)(12, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "bit-radio-button", 25)(19, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](24, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "bit-radio-button", 26)(26, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](31, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "bit-radio-button", 27)(33, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, MemberDialogComponent_bit_tab_group_9_ng_container_37_Template, 9, 9, "ng-container", 28)(38, MemberDialogComponent_bit_tab_group_9_ng_template_38_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](40, MemberDialogComponent_bit_tab_group_9_ng_container_40_Template, 47, 26, "ng-container", 7)(41, MemberDialogComponent_bit_tab_group_9_ng_container_41_Template, 15, 13, "ng-container", 7)(42, MemberDialogComponent_bit_tab_group_9_bit_form_field_42_Template, 8, 6, "bit-form-field", 7)(43, MemberDialogComponent_bit_tab_group_9_bit_form_field_43_Template, 8, 6, "bit-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](44, MemberDialogComponent_bit_tab_group_9_bit_tab_44_Template, 12, 23, "bit-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "bit-tab", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](46, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](47, MemberDialogComponent_bit_tab_group_9_div_47_Template, 3, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](48, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](49, MemberDialogComponent_bit_tab_group_9_div_49_Template, 4, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](50, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](51, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](52, "bit-access-selector", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](53, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](54, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](55, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](56, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const organization_r4 = ctx.ngIf;
    const enterprise_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](39);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("selectedIndex", ctx_r0.tabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 34, "role"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 36, "memberRole"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("appA11yTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 38, "learnMoreAboutMemberRoles"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r0.organizationUserType.User);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 40, "user"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 42, "userDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r0.organizationUserType.Admin);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 44, "admin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](24, 46, "adminDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r0.organizationUserType.Owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 48, "owner"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](31, 50, "ownerDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r0.organizationUserType.Custom)("disabled", !organization_r4.useCustomPermissions || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 52, "custom"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !organization_r4.useCustomPermissions)("ngIfElse", enterprise_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.customUserTypeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", organization_r4.useSecretsManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.isExternalIdVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.isSsoExternalIdVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", organization_r4.useGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](46, 54, "collections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](48, 56, ctx_r0.restrictEditingSelf$));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](50, 58, ctx_r0.restrictEditingSelf$) && (organization_r4.useGroups || !_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](51, 60, ctx_r0.canAssignAccessToAnyCollection$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("permissionMode", ctx_r0.PermissionMode.Edit)("showGroupColumn", organization_r4.useGroups)("items", ctx_r0.collectionAccessItems)("columnHeader", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](53, 62, "collection"))("selectorLabelText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](54, 64, "selectCollections"))("emptySelectionText", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](55, 66, "noCollectionsAdded"))("hideMultiSelect", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](56, 68, ctx_r0.restrictEditingSelf$));
} }
function MemberDialogComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitAction", ctx_r0.restore)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "restore"), " ");
} }
function MemberDialogComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitAction", ctx_r0.revoke)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "revoke"), " ");
} }
function MemberDialogComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitAction", ctx_r0.remove)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "remove"), " ");
} }
function MemberDialogComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitAction", ctx_r0.delete)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "delete"), " ");
} }
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var MemberDialogTab;
(function (MemberDialogTab) {
    MemberDialogTab[MemberDialogTab["Role"] = 0] = "Role";
    MemberDialogTab[MemberDialogTab["Groups"] = 1] = "Groups";
    MemberDialogTab[MemberDialogTab["Collections"] = 2] = "Collections";
})(MemberDialogTab || (MemberDialogTab = {}));
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var MemberDialogResult;
(function (MemberDialogResult) {
    MemberDialogResult["Saved"] = "saved";
    MemberDialogResult["Canceled"] = "canceled";
    MemberDialogResult["Deleted"] = "deleted";
    MemberDialogResult["Revoked"] = "revoked";
    MemberDialogResult["Restored"] = "restored";
})(MemberDialogResult || (MemberDialogResult = {}));
class MemberDialogComponent {
    get isExternalIdVisible() {
        var _a;
        return !!((_a = this.formGroup.get("externalId")) === null || _a === void 0 ? void 0 : _a.value);
    }
    get isSsoExternalIdVisible() {
        var _a;
        return !!((_a = this.formGroup.get("ssoExternalId")) === null || _a === void 0 ? void 0 : _a.value);
    }
    get customUserTypeSelected() {
        return this.formGroup.value.type === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserType.Custom;
    }
    isEditDialogParams(params) {
        return params.kind === "Edit";
    }
    constructor(params, dialogRef, i18nService, formBuilder, 
    // TODO: We should really look into consolidating naming conventions for these services
    collectionAdminService, groupService, userService, organizationUserApiService, dialogService, accountService, organizationService, toastService, configService, deleteManagedMemberWarningService) {
        this.params = params;
        this.dialogRef = dialogRef;
        this.i18nService = i18nService;
        this.formBuilder = formBuilder;
        this.collectionAdminService = collectionAdminService;
        this.groupService = groupService;
        this.userService = userService;
        this.organizationUserApiService = organizationUserApiService;
        this.dialogService = dialogService;
        this.accountService = accountService;
        this.toastService = toastService;
        this.configService = configService;
        this.deleteManagedMemberWarningService = deleteManagedMemberWarningService;
        this.loading = true;
        this.editMode = false;
        this.isRevoked = false;
        this.access = "selected";
        this.collections = [];
        this.organizationUserType = _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserType;
        this.PermissionMode = _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.PermissionMode;
        this.showNoMasterPasswordWarning = false;
        this.collectionAccessItems = [];
        this.groupAccessItems = [];
        this.formGroup = this.formBuilder.group({
            emails: [""],
            type: _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserType.User,
            externalId: this.formBuilder.control({ value: "", disabled: true }),
            ssoExternalId: this.formBuilder.control({ value: "", disabled: true }),
            accessSecretsManager: false,
            access: [[]],
            groups: [[]],
        });
        this.permissionsGroup = this.formBuilder.group({
            manageAllCollectionsGroup: this.formBuilder.group({
                manageAllCollections: false,
                createNewCollections: false,
                editAnyCollection: false,
                deleteAnyCollection: false,
            }),
            accessEventLogs: false,
            accessImportExport: false,
            accessReports: false,
            manageGroups: false,
            manageSso: false,
            managePolicies: false,
            manageUsers: false,
            manageResetPassword: false,
        });
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.formGroup.markAllAsTouched();
            if (this.formGroup.invalid) {
                if (this.tabIndex !== MemberDialogTab.Role) {
                    this.toastService.showToast({
                        variant: "error",
                        title: null,
                        message: this.i18nService.t("fieldOnTabRequiresAttention", this.i18nService.t("role")),
                    });
                }
                return;
            }
            const organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.organization$);
            if (!organization.useCustomPermissions && this.customUserTypeSelected) {
                this.toastService.showToast({
                    variant: "error",
                    title: null,
                    message: this.i18nService.t("customNonEnterpriseError"),
                });
                return;
            }
            const userView = yield this.getUserView();
            if (this.isEditDialogParams(this.params)) {
                yield this.handleEditUser(userView, this.params);
            }
            else {
                yield this.handleInviteUsers(userView, organization);
            }
        });
        this.remove = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.isEditDialogParams(this.params)) {
                return;
            }
            const message = this.params.usesKeyConnector
                ? "removeUserConfirmationKeyConnector"
                : "removeOrgUserConfirmation";
            let confirmed = yield this.dialogService.openSimpleDialog({
                title: { key: "removeUserIdAccess", placeholders: [this.params.name] },
                content: { key: message },
                type: "warning",
            });
            if (!confirmed) {
                return false;
            }
            if (this.showNoMasterPasswordWarning) {
                confirmed = yield this.noMasterPasswordConfirmationDialog(this.params.name);
                if (!confirmed) {
                    return false;
                }
            }
            yield this.organizationUserApiService.removeOrganizationUser(this.params.organizationId, this.params.organizationUserId);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("removedUserId", this.params.name),
            });
            this.close(MemberDialogResult.Deleted);
        });
        this.revoke = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.isEditDialogParams(this.params)) {
                return;
            }
            let confirmed = yield this.dialogService.openSimpleDialog({
                title: { key: "revokeUserId", placeholders: [this.params.name] },
                content: { key: "revokeUserConfirmation" },
                acceptButtonText: { key: "revokeAccess" },
                type: "warning",
            });
            if (!confirmed) {
                return false;
            }
            if (this.showNoMasterPasswordWarning) {
                confirmed = yield this.noMasterPasswordConfirmationDialog(this.params.name);
                if (!confirmed) {
                    return false;
                }
            }
            yield this.organizationUserApiService.revokeOrganizationUser(this.params.organizationId, this.params.organizationUserId);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("revokedUserId", this.params.name),
            });
            this.isRevoked = true;
            this.close(MemberDialogResult.Revoked);
        });
        this.restore = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.isEditDialogParams(this.params)) {
                return;
            }
            yield this.organizationUserApiService.restoreOrganizationUser(this.params.organizationId, this.params.organizationUserId);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("restoredUserId", this.params.name),
            });
            this.isRevoked = false;
            this.close(MemberDialogResult.Restored);
        });
        this.delete = () => __awaiter(this, void 0, void 0, function* () {
            if (!this.isEditDialogParams(this.params)) {
                return;
            }
            const showWarningDialog = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([
                this.organization$,
                this.deleteManagedMemberWarningService.warningAcknowledged(this.params.organizationId),
            ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)(([organization, acknowledged]) => organization.canManageUsers &&
                organization.productTierType === _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_6__.ProductTierType.Enterprise &&
                !acknowledged));
            if (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(showWarningDialog)) {
                const acknowledged = yield this.deleteManagedMemberWarningService.showWarning();
                if (!acknowledged) {
                    return;
                }
            }
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: {
                    key: "deleteOrganizationUser",
                    placeholders: [this.params.name],
                },
                content: {
                    key: "deleteOrganizationUserWarningDesc",
                    placeholders: [this.params.name],
                },
                type: "warning",
                acceptButtonText: { key: "delete" },
                cancelButtonText: { key: "cancel" },
            });
            if (!confirmed) {
                return false;
            }
            yield this.organizationUserApiService.deleteOrganizationUser(this.params.organizationId, this.params.organizationUserId);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("organizationUserDeleted", this.params.name),
            });
            yield this.deleteManagedMemberWarningService.acknowledgeWarning(this.params.organizationId);
            this.close(MemberDialogResult.Deleted);
        });
        this.ProductTierType = _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_6__.ProductTierType;
        this.organization$ = accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)((account) => organizationService
            .organizations$(account === null || account === void 0 ? void 0 : account.id)
            .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.getOrganizationById)(this.params.organizationId))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.shareReplay)({ refCount: true, bufferSize: 1 }))));
        let userDetails$;
        if (this.isEditDialogParams(this.params)) {
            this.editMode = true;
            this.title = this.i18nService.t("editMember");
            userDetails$ = this.userService.get(this.params.organizationId, this.params.organizationUserId);
            this.tabIndex = this.params.initialTab;
            this.editParams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(this.params);
        }
        else {
            this.editMode = false;
            this.title = this.i18nService.t("inviteMember");
            this.editParams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(null);
            userDetails$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(null);
            this.tabIndex = MemberDialogTab.Role;
        }
        this.isOnSecretsManagerStandalone = this.params.isOnSecretsManagerStandalone;
        if (this.isOnSecretsManagerStandalone) {
            this.formGroup.patchValue({
                accessSecretsManager: true,
            });
        }
        const groups$ = this.organization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)((organization) => organization.useGroups
            ? this.groupService.getAllDetails(this.params.organizationId)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)([])));
        this.allowAdminAccessToAllCollectionItems$ = this.organization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)((organization) => {
            return organization.allowAdminAccessToAllCollectionItems;
        }));
        // The orgUser cannot manage their own Group assignments if collection access is restricted
        this.restrictEditingSelf$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([
            this.allowAdminAccessToAllCollectionItems$,
            userDetails$,
            this.accountService.activeAccount$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)(([allowAdminAccess, userDetails, activeAccount]) => !allowAdminAccess && userDetails != null && userDetails.userId == activeAccount.id), (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.shareReplay)({ refCount: true, bufferSize: 1 }));
        this.restrictEditingSelf$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe((restrictEditingSelf) => {
            if (restrictEditingSelf) {
                this.formGroup.controls.groups.disable();
            }
            else {
                this.formGroup.controls.groups.enable();
            }
        });
        this.canAssignAccessToAnyCollection$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)([
            this.organization$,
            this.allowAdminAccessToAllCollectionItems$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)(([org, allowAdminAccessToAllCollectionItems]) => org.canEditAnyCollection ||
            // Manage Users custom permission cannot edit any collection but they can assign access from this dialog
            // if permitted by collection management settings
            (org.permissions.manageUsers && allowAdminAccessToAllCollectionItems)));
        const collections = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_5__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.switchMap)((userId) => this.collectionAdminService.collectionAdminViews$(this.params.organizationId, userId)));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.combineLatest)({
            organization: this.organization$,
            collections,
            userDetails: userDetails$,
            groups: groups$,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$))
            .subscribe(({ organization, collections, userDetails, groups }) => {
            this.setFormValidators(organization);
            // Groups tab: populate available groups
            this.groupAccessItems = [].concat(groups.map((g) => mapGroupToAccessItemView(g)));
            // Collections tab: Populate all available collections (including current user access where applicable)
            this.collectionAccessItems = collections
                .map((c) => mapCollectionToAccessItemView(c, organization, userDetails == null
                ? undefined
                : c.users.find((access) => access.id === userDetails.id)))
                // But remove collections that we can't assign access to, unless the user is already assigned
                .filter((item) => !item.readonly || (userDetails === null || userDetails === void 0 ? void 0 : userDetails.collections.some((access) => access.id == item.id)));
            if (userDetails != null) {
                this.loadOrganizationUser(userDetails, groups, collections, organization);
            }
            this.loading = false;
        });
        this.remainingSeats$ = this.organization$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.map)((organization) => {
            if (!this.isEditDialogParams(this.params)) {
                return organization.seats - this.params.occupiedSeatCount;
            }
            return organization.seats;
        }));
    }
    setFormValidators(organization) {
        if (this.isEditDialogParams(this.params)) {
            return;
        }
        const emailsControlValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.Validators.required,
            _validators_comma_separated_emails_validator__WEBPACK_IMPORTED_MODULE_12__.commaSeparatedEmails,
            (0,_validators_input_email_limit_validator__WEBPACK_IMPORTED_MODULE_13__.inputEmailLimitValidator)(organization, (maxEmailsCount) => this.i18nService.t("tooManyEmails", maxEmailsCount)),
            (0,_validators_org_seat_limit_reached_validator__WEBPACK_IMPORTED_MODULE_14__.orgSeatLimitReachedValidator)(organization, this.params.allOrganizationUserEmails, this.i18nService.t("subscriptionUpgrade", organization.seats), this.params.occupiedSeatCount),
        ];
        const emailsControl = this.formGroup.get("emails");
        emailsControl.setValidators(emailsControlValidators);
        emailsControl.updateValueAndValidity();
    }
    loadOrganizationUser(userDetails, groups, collections, organization) {
        if (!userDetails) {
            throw new Error("Could not find user to edit.");
        }
        this.isRevoked = userDetails.status === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserStatusType.Revoked;
        this.showNoMasterPasswordWarning =
            userDetails.status > _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserStatusType.Invited &&
                userDetails.hasMasterPassword === false;
        const allCollectionsPermissions = {
            createNewCollections: userDetails.permissions.createNewCollections,
            editAnyCollection: userDetails.permissions.editAnyCollection,
            deleteAnyCollection: userDetails.permissions.deleteAnyCollection,
            manageAllCollections: userDetails.permissions.createNewCollections &&
                userDetails.permissions.editAnyCollection &&
                userDetails.permissions.deleteAnyCollection,
        };
        if (userDetails.type === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserType.Custom) {
            this.permissionsGroup.patchValue({
                accessEventLogs: userDetails.permissions.accessEventLogs,
                accessImportExport: userDetails.permissions.accessImportExport,
                accessReports: userDetails.permissions.accessReports,
                manageGroups: userDetails.permissions.manageGroups,
                manageSso: userDetails.permissions.manageSso,
                managePolicies: userDetails.permissions.managePolicies,
                manageUsers: userDetails.permissions.manageUsers,
                manageResetPassword: userDetails.permissions.manageResetPassword,
                manageAllCollectionsGroup: allCollectionsPermissions,
            });
        }
        const collectionsFromGroups = groups
            .filter((group) => userDetails.groups.includes(group.id))
            .flatMap((group) => group.collections.map((accessSelection) => {
            const collection = collections.find((c) => c.id === accessSelection.id);
            return { group, collection, accessSelection };
        }));
        // Populate additional collection access via groups (rendered as separate rows from user access)
        this.collectionAccessItems = this.collectionAccessItems.concat(collectionsFromGroups.map(({ collection, accessSelection, group }) => mapCollectionToAccessItemView(collection, organization, accessSelection, group)));
        // Set current collections and groups the user has access to (excluding collections the current user doesn't have
        // permissions to change - they are included as readonly via the CollectionAccessItems)
        const accessSelections = mapToAccessSelections(userDetails, this.collectionAccessItems);
        const groupAccessSelections = mapToGroupAccessSelections(userDetails.groups);
        this.formGroup.removeControl("emails");
        this.formGroup.patchValue({
            type: userDetails.type,
            externalId: userDetails.externalId,
            ssoExternalId: userDetails.ssoExternalId,
            access: accessSelections,
            accessSecretsManager: userDetails.accessSecretsManager,
            groups: groupAccessSelections,
        });
    }
    check(c, select) {
        c.checked = select == null ? !c.checked : select;
        if (!c.checked) {
            c.readOnly = false;
        }
    }
    selectAll(select) {
        this.collections.forEach((c) => this.check(c, select));
    }
    setRequestPermissions(p, clearPermissions) {
        if (clearPermissions) {
            return new _bitwarden_common_admin_console_models_api_permissions_api__WEBPACK_IMPORTED_MODULE_3__.PermissionsApi();
        }
        const partialPermissions = {
            accessEventLogs: this.permissionsGroup.value.accessEventLogs,
            accessImportExport: this.permissionsGroup.value.accessImportExport,
            accessReports: this.permissionsGroup.value.accessReports,
            manageGroups: this.permissionsGroup.value.manageGroups,
            manageSso: this.permissionsGroup.value.manageSso,
            managePolicies: this.permissionsGroup.value.managePolicies,
            manageUsers: this.permissionsGroup.value.manageUsers,
            manageResetPassword: this.permissionsGroup.value.manageResetPassword,
            createNewCollections: this.permissionsGroup.value.manageAllCollectionsGroup.createNewCollections,
            editAnyCollection: this.permissionsGroup.value.manageAllCollectionsGroup.editAnyCollection,
            deleteAnyCollection: this.permissionsGroup.value.manageAllCollectionsGroup.deleteAnyCollection,
        };
        return Object.assign(p, partialPermissions);
    }
    getUserView() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userView = new _core__WEBPACK_IMPORTED_MODULE_9__.OrganizationUserAdminView();
            userView.organizationId = this.params.organizationId;
            userView.type = this.formGroup.value.type;
            userView.permissions = this.setRequestPermissions((_a = userView.permissions) !== null && _a !== void 0 ? _a : new _bitwarden_common_admin_console_models_api_permissions_api__WEBPACK_IMPORTED_MODULE_3__.PermissionsApi(), userView.type !== _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_2__.OrganizationUserType.Custom);
            userView.collections = this.formGroup.value.access
                .filter((v) => v.type === _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.AccessItemType.Collection)
                .map(_shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.convertToSelectionView);
            userView.groups = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(this.restrictEditingSelf$))
                ? null
                : this.formGroup.value.groups.map((m) => m.id);
            userView.accessSecretsManager = this.formGroup.value.accessSecretsManager;
            return userView;
        });
    }
    handleEditUser(userView, params) {
        return __awaiter(this, void 0, void 0, function* () {
            userView.id = params.organizationUserId;
            yield this.userService.save(userView);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("editedUserId", params.name),
            });
            this.close(MemberDialogResult.Saved);
        });
    }
    handleInviteUsers(userView, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const emails = [...new Set(this.formGroup.value.emails.trim().split(/\s*,\s*/))];
            yield this.userService.invite(emails, userView);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("invitedUsers"),
            });
            this.close(MemberDialogResult.Saved);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            this.close(MemberDialogResult.Canceled);
        });
    }
    close(result) {
        this.dialogRef.close(result);
    }
    noMasterPasswordConfirmationDialog(username) {
        return this.dialogService.openSimpleDialog({
            title: {
                key: "removeOrgUserNoMasterPasswordTitle",
            },
            content: {
                key: "removeOrgUserNoMasterPasswordDesc",
                placeholders: [username],
            },
            type: "warning",
        });
    }
}
MemberDialogComponent.ɵfac = function MemberDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MemberDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_28__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_29__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_8__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_9__.GroupApiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_9__.UserAdminService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_29__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_30__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_11__.DeleteManagedMemberWarningService)); };
MemberDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: MemberDialogComponent, selectors: [["ng-component"]], standalone: false, decls: 25, vars: 28, consts: [["enterprise", ""], [3, "formGroup", "bitSubmit"], ["dialogSize", "large", 3, "disablePadding"], ["bitDialogTitle", ""], ["class", "tw-text-sm tw-normal-case tw-text-muted", 4, "ngIf"], ["bitBadge", "", "variant", "secondary", 4, "ngIf"], ["bitDialogContent", ""], [4, "ngIf"], [3, "selectedIndex", "selectedIndexChange", 4, "ngIf"], ["bitDialogFooter", ""], ["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", 3, "disabled"], ["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "click", "disabled"], [1, "tw-flex", "tw-gap-2", "tw-ml-auto"], ["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitAction", "disabled", 4, "ngIf"], ["type", "button", "buttonType", "danger", "bitButton", "", "bitFormButton", "", 3, "bitAction", "disabled", 4, "ngIf"], [1, "tw-text-sm", "tw-normal-case", "tw-text-muted"], ["bitBadge", "", "variant", "secondary"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [3, "selectedIndexChange", "selectedIndex"], [3, "label"], ["formControlName", "type"], ["bitLink", "", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/user-types-access-control/", "slot", "end", 3, "appA11yTitle"], ["aria-hidden", "true", 1, "bwi", "bwi-question-circle"], ["id", "userTypeUser", 3, "value"], ["id", "userTypeAdmin", 3, "value"], ["id", "userTypeOwner", 3, "value"], ["id", "userTypeCustom", 3, "value", "disabled"], [4, "ngIf", "ngIfElse"], [3, "label", 4, "ngIf"], ["class", "tw-mb-6", 4, "ngIf"], ["formControlName", "access", 3, "permissionMode", "showGroupColumn", "items", "columnHeader", "selectorLabelText", "emptySelectionText", "hideMultiSelect"], ["bitTypography", "body1"], ["id", "emails", "type", "text", "appAutoFocus", "", "bitInput", "", "formControlName", "emails"], ["bitLink", "", "href", "https://bitwarden.com/contact/", "target", "_blank", "rel", "noreferrer"], [1, "tw-grid", "tw-grid-cols-12", "tw-gap-4", 3, "formGroup"], [1, "tw-col-span-4"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "accessEventLogs"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "accessImportExport"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "accessReports"], ["parentId", "manageAllCollections", 3, "checkboxes"], [1, "tw-mb-3"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "manageGroups"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "manageSso"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "managePolicies"], ["id", "manageUsers", "type", "checkbox", "bitCheckbox", "", "formControlName", "manageUsers"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "manageResetPassword"], [1, "tw-mt-4"], ["bitLink", "", "target", "_blank", "rel", "noreferrer", "href", "https://bitwarden.com/help/manage-your-organization/#access-to-secrets-manager", 3, "appA11yTitle"], [1, "tw-text-muted"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "accessSecretsManager", 3, "disabled"], ["bitInput", "", "type", "text", "formControlName", "externalId"], ["bitInput", "", "type", "text", "formControlName", "ssoExternalId"], [1, "tw-mb-6"], ["formControlName", "groups", 3, "items", "columnHeader", "selectorLabelText", "emptySelectionText", "hideMultiSelect"], ["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitAction", "disabled"], ["type", "button", "buttonType", "danger", "bitButton", "", "bitFormButton", "", 3, "bitAction", "disabled"]], template: function MemberDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "form", 1)(1, "bit-dialog", 2)(2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, MemberDialogComponent_span_4_Template, 3, 3, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, MemberDialogComponent_span_6_Template, 3, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, MemberDialogComponent_ng_container_8_Template, 6, 6, "ng-container", 7)(9, MemberDialogComponent_bit_tab_group_9_Template, 57, 70, "bit-tab-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function MemberDialogComponent_Template_button_click_15_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, MemberDialogComponent_button_19_Template, 3, 5, "button", 13)(20, MemberDialogComponent_button_20_Template, 3, 5, "button", 13)(21, MemberDialogComponent_button_21_Template, 3, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, MemberDialogComponent_button_23_Template, 3, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        let tmp_4_0;
        let tmp_14_0;
        let tmp_15_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.formGroup)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disablePadding", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.editParams$ && ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 16, ctx.editParams$)) == null ? null : tmp_4_0.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isRevoked);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 18, !ctx.loading && ctx.organization$));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 20, "save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 22, "cancel"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.editMode && ctx.isRevoked);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.editMode && !ctx.isRevoked);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.editMode && !((tmp_14_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 24, ctx.editParams$)) == null ? null : tmp_14_0.managedByOrganization));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.editMode && ((tmp_15_0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](24, 26, ctx.editParams$)) == null ? null : tmp_15_0.managedByOrganization));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormControlName, _libs_components_src_a11y_a11y_title_directive__WEBPACK_IMPORTED_MODULE_32__.A11yTitleDirective, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_33__.BitActionDirective, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_34__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_35__.BitSubmitDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_36__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_37__.ButtonComponent, _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_38__.CheckboxComponent, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_39__.DialogComponent, _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_40__.FormControlComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_41__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_42__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_43__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_44__.BitFormFieldComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_45__.AnchorLinkDirective, _libs_components_src_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_46__.RadioButtonComponent, _libs_components_src_radio_button_radio_group_component__WEBPACK_IMPORTED_MODULE_47__.RadioGroupComponent, _libs_components_src_tabs_tab_group_tab_group_component__WEBPACK_IMPORTED_MODULE_48__.TabGroupComponent, _libs_components_src_tabs_tab_group_tab_component__WEBPACK_IMPORTED_MODULE_49__.TabComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_50__.TypographyDirective, _shared_components_access_selector_access_selector_component__WEBPACK_IMPORTED_MODULE_15__.AccessSelectorComponent, _nested_checkbox_component__WEBPACK_IMPORTED_MODULE_16__.NestedCheckboxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__.I18nPipe], encapsulation: 2 });
function mapCollectionToAccessItemView(collection, organization, accessSelection, group) {
    return {
        type: _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.AccessItemType.Collection,
        id: group ? `${collection.id}-${group.id}` : collection.id,
        labelName: collection.name,
        listName: collection.name,
        readonly: group !== undefined || !collection.canEditUserAccess(organization),
        readonlyPermission: accessSelection ? (0,_shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.convertToPermission)(accessSelection) : undefined,
        viaGroupName: group === null || group === void 0 ? void 0 : group.name,
    };
}
function mapGroupToAccessItemView(group) {
    return {
        type: _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.AccessItemType.Group,
        id: group.id,
        labelName: group.name,
        listName: group.name,
    };
}
function mapToAccessSelections(user, items) {
    if (user == undefined) {
        return [];
    }
    return (user.collections
        // The FormControl value only represents editable collection access - exclude readonly access selections
        .filter((selection) => !items.find((item) => item.id == selection.id).readonly)
        .map((selection) => ({
        id: selection.id,
        type: _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.AccessItemType.Collection,
        permission: (0,_shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.convertToPermission)(selection),
    })));
}
function mapToGroupAccessSelections(groups) {
    if (groups == undefined) {
        return [];
    }
    return [].concat(groups.map((groupId) => ({
        id: groupId,
        type: _shared_components_access_selector__WEBPACK_IMPORTED_MODULE_10__.AccessItemType.Group,
    })));
}
/**
 * Strongly typed helper to open a UserDialog
 * @param dialogService Instance of the dialog service that will be used to open the dialog
 * @param config Configuration for the dialog
 */
function openUserAddEditDialog(dialogService, config) {
    return dialogService.open(MemberDialogComponent, config);
}


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/member-dialog.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserDialogModule: () => (/* binding */ UserDialogModule)
/* harmony export */ });
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/radio-button/radio-button.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared */ "./src/app/admin-console/organizations/shared/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");



class UserDialogModule {
}
UserDialogModule.ɵfac = function UserDialogModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserDialogModule)(); };
UserDialogModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserDialogModule });
UserDialogModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_shared__WEBPACK_IMPORTED_MODULE_0__.SharedOrganizationModule, _bitwarden_components__WEBPACK_IMPORTED_MODULE_2__.RadioButtonModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/nested-checkbox.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/nested-checkbox.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedCheckboxComponent: () => (/* binding */ NestedCheckboxComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/checkbox/checkbox.component */ "../../libs/components/src/checkbox/checkbox.component.ts");
/* harmony import */ var _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-control/form-control.component */ "../../libs/components/src/form-control/form-control.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");










function NestedCheckboxComponent_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "bit-form-control")(2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function NestedCheckboxComponent_ng_container_7_div_1_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.onChildCheck()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", c_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, c_r3.key));
} }
function NestedCheckboxComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NestedCheckboxComponent_ng_container_7_div_1_Template, 6, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", c_r3.key != ctx_r1.parentId);
} }
class NestedCheckboxComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    get parentIndeterminate() {
        return (this.children.some(([key, control]) => control.value == true) &&
            !this.children.every(([key, control]) => control.value == true));
    }
    ngOnInit() {
        this.checkboxes.controls[this.parentId].valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$))
            .subscribe((value) => {
            Object.values(this.checkboxes.controls).forEach((control) => control.setValue(value, { emitEvent: false }));
        });
    }
    get parentCheckbox() {
        return this.checkboxes.controls[this.parentId];
    }
    get children() {
        return Object.entries(this.checkboxes.controls).filter(([key, value]) => key != this.parentId);
    }
    onChildCheck() {
        const parentChecked = this.children.every(([key, value]) => value.value == true);
        this.parentCheckbox.setValue(parentChecked, { emitEvent: false });
    }
    key(index, item) {
        return item.key;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    pascalize(s) {
        return _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_0__.Utils.camelToPascalCase(s);
    }
}
NestedCheckboxComponent.ɵfac = function NestedCheckboxComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NestedCheckboxComponent)(); };
NestedCheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NestedCheckboxComponent, selectors: [["app-nested-checkbox"]], inputs: { parentId: "parentId", checkboxes: "checkboxes" }, standalone: false, decls: 9, vars: 10, consts: [[3, "formGroup"], ["type", "checkbox", "bitCheckbox", "", 3, "formControlName", "indeterminate"], [1, "tw-ml-4"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], ["type", "checkbox", "bitCheckbox", "", 3, "change", "formControl"]], template: function NestedCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "bit-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, NestedCheckboxComponent_ng_container_7_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.checkboxes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControlName", ctx.parentId)("indeterminate", ctx.parentIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, ctx.parentId));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, ctx.checkboxes.controls))("ngForTrackBy", ctx.key);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__.CheckboxComponent, _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_8__.FormControlComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_9__.BitLabel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_1__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/validators/comma-separated-emails.validator.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/validators/comma-separated-emails.validator.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commaSeparatedEmails: () => (/* binding */ commaSeparatedEmails)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");

function validateEmails(emails) {
    return (emails
        .split(",")
        .map((email) => _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email({ value: email.trim() }))
        .find((_) => _ !== null) === undefined);
}
function commaSeparatedEmails(control) {
    if (control.value === "" || !control.value || validateEmails(control.value)) {
        return null;
    }
    return { multipleEmails: { message: "multipleInputEmails" } };
}


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/validators/input-email-limit.validator.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/validators/input-email-limit.validator.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inputEmailLimitValidator: () => (/* binding */ inputEmailLimitValidator)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");

function getUniqueInputEmails(control) {
    const emails = control.value
        .split(",")
        .filter((email) => email && email.trim() !== "");
    const uniqueEmails = Array.from(new Set(emails));
    return uniqueEmails;
}
/**
 * Ensure the number of unique emails in an input does not exceed the allowed maximum.
 * @param organization An object representing the organization
 * @param getErrorMessage A callback function that generates the error message. It takes the `maxEmailsCount` as a parameter.
 * @returns A function that validates an `AbstractControl` and returns `ValidationErrors` or `null`
 */
function inputEmailLimitValidator(organization, getErrorMessage) {
    return (control) => {
        var _a;
        if (!((_a = control.value) === null || _a === void 0 ? void 0 : _a.trim())) {
            return null;
        }
        const maxEmailsCount = organization.productTierType === _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.ProductTierType.TeamsStarter ? 10 : 20;
        const uniqueEmails = getUniqueInputEmails(control);
        if (uniqueEmails.length <= maxEmailsCount) {
            return null;
        }
        return { tooManyEmails: { message: getErrorMessage(maxEmailsCount) } };
    };
}


/***/ }),

/***/ "./src/app/admin-console/organizations/members/components/member-dialog/validators/org-seat-limit-reached.validator.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/components/member-dialog/validators/org-seat-limit-reached.validator.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDynamicSeatPlan: () => (/* binding */ isDynamicSeatPlan),
/* harmony export */   isFixedSeatPlan: () => (/* binding */ isFixedSeatPlan),
/* harmony export */   orgSeatLimitReachedValidator: () => (/* binding */ orgSeatLimitReachedValidator)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");

/**
 * If the organization doesn't allow additional seat options, this checks if the seat limit has been reached when adding
 * new users
 * @param organization An object representing the organization
 * @param allOrganizationUserEmails An array of strings with existing user email addresses
 * @param errorMessage A localized string to display if validation fails
 * @param occupiedSeatCount The current count of active users occupying the organization's seats.
 * @returns A function that validates an `AbstractControl` and returns `ValidationErrors` or `null`
 */
function orgSeatLimitReachedValidator(organization, allOrganizationUserEmails, errorMessage, occupiedSeatCount) {
    return (control) => {
        var _a;
        if (!((_a = control.value) === null || _a === void 0 ? void 0 : _a.trim())) {
            return null;
        }
        if (isDynamicSeatPlan(organization.productTierType)) {
            return null;
        }
        const newTotalUserCount = occupiedSeatCount + getUniqueNewEmailCount(allOrganizationUserEmails, control);
        if (newTotalUserCount > organization.seats) {
            return { seatLimitReached: { message: errorMessage } };
        }
        return null;
    };
}
function isDynamicSeatPlan(productTierType) {
    return !isFixedSeatPlan(productTierType);
}
function isFixedSeatPlan(productTierType) {
    switch (productTierType) {
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.ProductTierType.Free:
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.ProductTierType.Families:
        case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.ProductTierType.TeamsStarter:
            return true;
        default:
            return false;
    }
}
function getUniqueNewEmailCount(allOrganizationUserEmails, control) {
    const newEmailsToAdd = Array.from(new Set(control.value
        .split(",")
        .filter((newEmailToAdd) => newEmailToAdd &&
        newEmailToAdd.trim() !== "" &&
        !allOrganizationUserEmails.some((existingEmail) => existingEmail === newEmailToAdd.trim()))));
    return newEmailsToAdd.length;
}


/***/ }),

/***/ "./src/app/admin-console/organizations/members/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersModule: () => (/* reexport safe */ _members_module__WEBPACK_IMPORTED_MODULE_0__.MembersModule)
/* harmony export */ });
/* harmony import */ var _members_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./members.module */ "./src/app/admin-console/organizations/members/members.module.ts");



/***/ }),

/***/ "./src/app/admin-console/organizations/members/members-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/members-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersRoutingModule: () => (/* binding */ MembersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _billing_members_free_bitwarden_families_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../billing/members/free-bitwarden-families.component */ "./src/app/billing/members/free-bitwarden-families.component.ts");
/* harmony import */ var _guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/org-permissions.guard */ "./src/app/admin-console/organizations/guards/org-permissions.guard.ts");
/* harmony import */ var _billing_guards_can_access_sponsored_families_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../billing/guards/can-access-sponsored-families.guard */ "./src/app/billing/guards/can-access-sponsored-families.guard.ts");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "./src/app/admin-console/organizations/members/members.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");








const routes = [
    {
        path: "",
        component: _members_component__WEBPACK_IMPORTED_MODULE_4__.MembersComponent,
        canActivate: [(0,_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_2__.organizationPermissionsGuard)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.canAccessMembersTab)],
        data: {
            titleId: "members",
        },
    },
    {
        path: "sponsored-families",
        component: _billing_members_free_bitwarden_families_component__WEBPACK_IMPORTED_MODULE_1__.FreeBitwardenFamiliesComponent,
        canActivate: [(0,_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_2__.organizationPermissionsGuard)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.canAccessMembersTab), _billing_guards_can_access_sponsored_families_guard__WEBPACK_IMPORTED_MODULE_3__.canAccessSponsoredFamilies],
        data: {
            titleId: "sponsoredFamilies",
        },
    },
];
class MembersRoutingModule {
}
MembersRoutingModule.ɵfac = function MembersRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MembersRoutingModule)(); };
MembersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MembersRoutingModule });
MembersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/members.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/members.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersComponent: () => (/* binding */ MembersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/take.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/pipes/user-name.pipe */ "../../libs/angular/src/pipes/user-name.pipe.ts");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service */ "../../libs/common/src/admin-console/abstractions/organization-management-preferences/organization-management-preferences.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_policy_policy_api_service_abstraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/policy/policy-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/policy/policy-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/policy/policy.service.abstraction */ "../../libs/common/src/admin-console/abstractions/policy/policy.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_domain_policy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/domain/policy */ "../../libs/common/src/admin-console/models/domain/policy.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_request_organization_keys_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/request/organization-keys.request */ "../../libs/common/src/admin-console/models/request/organization-keys.request.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/billing-api.service.abstraction */ "../../libs/common/src/billing/abstractions/billing-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_organization_metadata_service_abstraction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/organization-metadata.service.abstraction */ "../../libs/common/src/billing/abstractions/organization-metadata.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bitwarden/common/enums/feature-flag.enum */ "../../libs/common/src/enums/feature-flag.enum.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_validation_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/validation.service */ "../../libs/common/src/platform/abstractions/validation.service.ts");
/* harmony import */ var _bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @bitwarden/common/vault/abstractions/sync/sync.service.abstraction */ "../../libs/common/src/vault/abstractions/sync/sync.service.abstraction.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_organizations_warnings_services__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/organizations/warnings/services */ "./src/app/billing/organizations/warnings/services/index.ts");
/* harmony import */ var _billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../billing/organizations/change-plan-dialog.component */ "./src/app/billing/organizations/change-plan-dialog.component.ts");
/* harmony import */ var _common_base_members_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../common/base-members.component */ "./src/app/admin-console/common/base-members.component.ts");
/* harmony import */ var _common_people_table_data_source__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../common/people-table-data-source */ "./src/app/admin-console/common/people-table-data-source.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core */ "./src/app/admin-console/organizations/core/index.ts");
/* harmony import */ var _core_views_organization_user_view__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../core/views/organization-user.view */ "./src/app/admin-console/organizations/core/views/organization-user.view.ts");
/* harmony import */ var _manage_entity_events_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../manage/entity-events.component */ "./src/app/admin-console/organizations/manage/entity-events.component.ts");
/* harmony import */ var _components_account_recovery_account_recovery_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/account-recovery/account-recovery-dialog.component */ "./src/app/admin-console/organizations/members/components/account-recovery/account-recovery-dialog.component.ts");
/* harmony import */ var _components_bulk_bulk_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/bulk/bulk-confirm-dialog.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-confirm-dialog.component.ts");
/* harmony import */ var _components_bulk_bulk_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/bulk/bulk-delete-dialog.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-delete-dialog.component.ts");
/* harmony import */ var _components_bulk_bulk_enable_sm_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/bulk/bulk-enable-sm-dialog.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-enable-sm-dialog.component.ts");
/* harmony import */ var _components_bulk_bulk_remove_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/bulk/bulk-remove-dialog.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-remove-dialog.component.ts");
/* harmony import */ var _components_bulk_bulk_restore_revoke_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/bulk/bulk-restore-revoke.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-restore-revoke.component.ts");
/* harmony import */ var _components_bulk_bulk_status_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/bulk/bulk-status.component */ "./src/app/admin-console/organizations/members/components/bulk/bulk-status.component.ts");
/* harmony import */ var _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/member-dialog */ "./src/app/admin-console/organizations/members/components/member-dialog/index.ts");
/* harmony import */ var _components_member_dialog_validators_org_seat_limit_reached_validator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/member-dialog/validators/org-seat-limit-reached.validator */ "./src/app/admin-console/organizations/members/components/member-dialog/validators/org-seat-limit-reached.validator.ts");
/* harmony import */ var _services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/delete-managed-member/delete-managed-member-warning.service */ "./src/app/admin-console/organizations/members/services/delete-managed-member/delete-managed-member-warning.service.ts");
/* harmony import */ var _services_organization_user_organization_user_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/organization-user/organization-user.service */ "./src/app/admin-console/organizations/members/services/organization-user/organization-user.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_badge_list_badge_list_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../../../../../../libs/components/src/badge-list/badge-list.component */ "../../libs/components/src/badge-list/badge-list.component.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../../../../../../../libs/components/src/checkbox/checkbox.component */ "../../libs/components/src/checkbox/checkbox.component.ts");
/* harmony import */ var _libs_components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../../../../../../libs/components/src/icon-button/icon-button.component */ "../../libs/components/src/icon-button/icon-button.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_menu_menu_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../../../../../../../libs/components/src/menu/menu.component */ "../../libs/components/src/menu/menu.component.ts");
/* harmony import */ var _libs_components_src_menu_menu_trigger_for_directive__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../../../../../../../libs/components/src/menu/menu-trigger-for.directive */ "../../libs/components/src/menu/menu-trigger-for.directive.ts");
/* harmony import */ var _libs_components_src_menu_menu_item_directive__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../../../../../../../libs/components/src/menu/menu-item.directive */ "../../libs/components/src/menu/menu-item.directive.ts");
/* harmony import */ var _libs_components_src_menu_menu_divider_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../../../../../../../libs/components/src/menu/menu-divider.component */ "../../libs/components/src/menu/menu-divider.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/sortable.component */ "../../libs/components/src/table/sortable.component.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../../../../../../../libs/components/src/toggle-group/toggle-group.component */ "../../libs/components/src/toggle-group/toggle-group.component.ts");
/* harmony import */ var _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../../../../../../../libs/components/src/toggle-group/toggle.component */ "../../libs/components/src/toggle-group/toggle.component.ts");
/* harmony import */ var _libs_components_src_search_search_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../../../../../../libs/components/src/search/search.component */ "../../libs/components/src/search/search.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2022/scrolling.mjs");
/* harmony import */ var _libs_components_src_layout_scroll_layout_directive__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../../../../../../libs/components/src/layout/scroll-layout.directive */ "../../libs/components/src/layout/scroll-layout.directive.ts");
/* harmony import */ var _billing_organizations_warnings_components_organization_free_trial_warning_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../billing/organizations/warnings/components/organization-free-trial-warning.component */ "./src/app/billing/organizations/warnings/components/organization-free-trial-warning.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_angular_src_pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/pipes/user-type.pipe */ "../../libs/angular/src/pipes/user-type.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




































































































function MembersComponent_Conditional_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r4); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.invite(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("disabled", !ctx_r1.firstLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 2, "inviteMember"), " ");
} }
function MembersComponent_Conditional_1_bit_toggle_group_6_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allCount_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](allCount_r6);
} }
function MembersComponent_Conditional_1_bit_toggle_group_6_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invitedCount_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](invitedCount_r7);
} }
function MembersComponent_Conditional_1_bit_toggle_group_6_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const acceptedUserCount_r8 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](acceptedUserCount_r8);
} }
function MembersComponent_Conditional_1_bit_toggle_group_6_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const revokedCount_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](revokedCount_r9);
} }
function MembersComponent_Conditional_1_bit_toggle_group_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "bit-toggle-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("selectedChange", function MembersComponent_Conditional_1_bit_toggle_group_6_Template_bit_toggle_group_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r5); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.statusToggle.next($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](2, "bit-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](5, MembersComponent_Conditional_1_bit_toggle_group_6_span_5_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](6, "bit-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](9, MembersComponent_Conditional_1_bit_toggle_group_6_span_9_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](10, "bit-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](13, MembersComponent_Conditional_1_bit_toggle_group_6_span_13_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](14, "bit-toggle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](17, MembersComponent_Conditional_1_bit_toggle_group_6_span_17_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("selected", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](1, 14, "memberStatusFilter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 16, "all"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.activeUserCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("value", ctx_r1.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](8, 18, "invited"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.invitedUserCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("value", ctx_r1.userStatusType.Accepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](12, 20, "needsConfirmation"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.acceptedUserCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("value", ctx_r1.userStatusType.Revoked);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](16, 22, "revoked"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.revokedUserCount);
} }
function MembersComponent_Conditional_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function MembersComponent_Conditional_1_ng_container_8_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "noMembersInList"));
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "bit-callout", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](1, 2, "confirmUsers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 4, "usersNeedConfirmed"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_th_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "th", 32)(1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("change", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_th_6_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r10); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.dataSource.checkAllFilteredUsers($event.target.checked)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "all"));
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](1, "i18n");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]();
    const headerMenu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](1, 2, "options"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("bitMenuTriggerFor", headerMenu_r11);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_container_23_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r12); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkEnableSM(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](4, "bit-menu-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "activateSecretsManager"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r13); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkReinvite(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "reinviteSelected"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_25_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_25_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r14); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkConfirm(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "confirmSelected"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r15); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkRestore(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "restoreAccess"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_27_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r16); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkRevoke(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "revokeAccess"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r17); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkRemove(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "remove"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r18); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](4); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.bulkDelete(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "delete"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r19); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.dataSource.checkUser(u_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtwoWayListener"]("ngModelChange", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_td_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r19); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtwoWayBindingSet"](u_r20.checked, $event) || (u_r20.checked = $event); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"]($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtwoWayProperty"]("ngModel", u_r20.checked);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "invited"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "needsConfirmation"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "revoked"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", u_r20.email, " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r21); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](3, "bit-avatar", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](5, "div", 55)(6, "div", 56)(7, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](9, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_9_Template, 3, 3, "span", 58)(10, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_10_Template, 3, 3, "span", 59)(11, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_span_11_Template, 3, 3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](12, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_div_12_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    let tmp_17_0;
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 8, u_r20))("id", u_r20.userId)("color", u_r20.avatarColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", (tmp_17_0 = u_r20.name) !== null && tmp_17_0 !== undefined ? tmp_17_0 : u_r20.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Accepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Revoked);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.name);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "invited"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "needsConfirmation"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, "revoked"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", u_r20.email, " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "td", 25)(1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "bit-avatar", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "userName");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](4, "div", 55)(5, "div", 56)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](8, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_8_Template, 3, 3, "span", 58)(9, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_9_Template, 3, 3, "span", 59)(10, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_span_10_Template, 3, 3, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](11, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_div_11_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    let tmp_17_0;
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 8, u_r20))("id", u_r20.userId)("color", u_r20.avatarColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"]((tmp_17_0 = u_r20.name) !== null && tmp_17_0 !== undefined ? tmp_17_0 : u_r20.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Accepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Revoked);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.name);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_5_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r22); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3, organization_r3.useGroups ? ctx_r1.memberTab.Groups : ctx_r1.memberTab.Collections)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "bit-badge-list", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("items", organization_r3.useGroups ? u_r20.groupNames : u_r20.collectionNames)("maxItems", 3);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "bit-badge-list", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("items", organization_r3.useGroups ? u_r20.groupNames : u_r20.collectionNames)("maxItems", 3);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_8_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r23); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3, ctx_r1.memberTab.Role)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "userType");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, u_r20.type), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "userType");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 1, u_r20.type), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 2, "userUsingTwoStep"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](5, 4, "userUsingTwoStep"));
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](2, 2, "enrolledAccountRecovery"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](5, 4, "enrolledAccountRecovery"));
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r25); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.reinvite(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "resendInvitation"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r26); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.confirm(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "confirm"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_bit_menu_divider_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](0, "bit-menu-divider");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r27); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3, ctx_r1.memberTab.Groups)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "groups"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r28); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.openEventsDialog(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "eventLogs"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_1_Template, 4, 3, "button", 29)(2, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_2_Template, 5, 3, "button", 29)(3, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_bit_menu_divider_3_Template, 1, 0, "bit-menu-divider", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r24); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3, ctx_r1.memberTab.Role)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](5, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](8, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_8_Template, 4, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](9, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r24); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.edit(u_r20, organization_r3, ctx_r1.memberTab.Collections)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](10, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](13, "bit-menu-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](14, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_button_14_Template, 4, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Accepted);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Accepted || u_r20.status === ctx_r1.userStatusType.Invited);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](7, 7, "memberRole"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", organization_r3.useGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](12, 9, "collections"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", organization_r3.useEvents && u_r20.status === ctx_r1.userStatusType.Confirmed);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r29); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.resetPassword(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "recoverAccount"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r30); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.restore(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "restoreAccess"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r31); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.revoke(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](1, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 1, "revokeAccess"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r32); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.remove(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "remove"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("click", function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r33); const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2).$implicit; const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.deleteUser(u_r20, organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](4, 1, "delete"), " ");
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_1_Template, 4, 3, "button", 29)(2, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_2_Template, 4, 3, "button", 29)(3, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_3_Template, 5, 3, "button", 29)(4, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_button_4_Template, 5, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status === ctx_r1.userStatusType.Revoked);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.status !== ctx_r1.userStatusType.Revoked);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", !u_r20.managedByOrganization);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.managedByOrganization);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_td_1_Template, 2, 1, "td", 47)(2, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_2_Template, 13, 10, "ng-container", 48)(3, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_3_Template, 12, 10, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplateRefExtractor"])(5, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_5_Template, 3, 2, "ng-container", 48)(6, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_6_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplateRefExtractor"])(8, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_8_Template, 4, 3, "ng-container", 48)(9, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_template_9_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](11, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](12, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_12_Template, 6, 6, "ng-container", 10)(13, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_13_Template, 6, 6, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](14, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](15, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](17, "bit-menu", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](19, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_19_Template, 15, 11, "ng-container", 10)(20, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_button_20_Template, 4, 3, "button", 29)(21, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_ng_container_21_Template, 5, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const u_r20 = ctx.$implicit;
    const readOnlyUserInfo_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreference"](4);
    const readOnlyGroupsCell_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreference"](7);
    const readOnlyRoleCell_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreference"](10);
    const rowMenu_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreference"](18);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](5);
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngClass", ctx_r1.rowHeightClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls())("ngIfElse", readOnlyUserInfo_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls())("ngIfElse", readOnlyGroupsCell_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls())("ngIfElse", readOnlyRoleCell_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", u_r20.twoFactorEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showEnrolledStatus(u_r20, organization_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](16, 15, "options"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("bitMenuTriggerFor", rowMenu_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.allowResetPassword(u_r20, organization_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](0, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_tr_0_Template, 22, 17, "tr", 45);
} if (rf & 2) {
    const rows$_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("cdkVirtualForOf", rows$_r38);
} }
function MembersComponent_Conditional_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_ng_container_8_ng_container_2_bit_callout_1_Template, 4, 6, "bit-callout", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 20)(3, "bit-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](4, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](6, MembersComponent_Conditional_1_ng_container_8_ng_container_2_th_6_Template, 5, 3, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](10, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](13, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](16, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](18, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](19, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](20, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_20_Template, 2, 4, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](21, "bit-menu", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](23, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_container_23_Template, 5, 3, "ng-container", 10)(24, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_24_Template, 4, 3, "button", 29)(25, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_25_Template, 5, 3, "button", 29)(26, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_26_Template, 4, 3, "button", 29)(27, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_27_Template, 4, 3, "button", 29)(28, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_28_Template, 5, 3, "button", 29)(29, MembersComponent_Conditional_1_ng_container_8_ng_container_2_button_29_Template, 5, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](30, MembersComponent_Conditional_1_ng_container_8_ng_container_2_ng_template_30_Template, 1, 1, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](3);
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showConfirmUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("itemSize", ctx_r1.rowHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](9, 16, "name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](12, 18, organization_r3.useGroups ? "groups" : "collections"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](15, 20, "role"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](18, 22, "policies"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.canUseSecretsManager());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkReinviteUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkConfirmUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkRestoreUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkRevokeUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkRemoveUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showBulkDeleteUsers);
} }
function MembersComponent_Conditional_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_ng_container_8_p_1_Template, 3, 3, "p", 10)(2, MembersComponent_Conditional_1_ng_container_8_ng_container_2_Template, 31, 24, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", !ctx_r1.dataSource.filteredData.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.dataSource.filteredData.length);
} }
function MembersComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](0, "app-organization-free-trial-warning", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵlistener"]("clicked", function MembersComponent_Conditional_1_Template_app_organization_free_trial_warning_clicked_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"](); const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0); return _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵresetView"](ctx_r1.navigateToPaymentMethod(organization_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelement"](2, "bit-search", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](4, MembersComponent_Conditional_1_button_4_Template, 4, 4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](6, MembersComponent_Conditional_1_bit_toggle_group_6_Template, 18, 24, "bit-toggle-group", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](7, MembersComponent_Conditional_1_ng_container_7_Template, 6, 6, "ng-container", 10)(8, MembersComponent_Conditional_1_ng_container_8_Template, 3, 2, "ng-container", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵnextContext"]();
    const organization_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵreadContextLet"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("organization", organization_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("formControl", ctx_r1.searchControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵpipeBind1"](3, 7, "searchMembers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.showUserManagementControls());
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", !ctx_r1.firstLoaded);
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵproperty"]("ngIf", ctx_r1.firstLoaded);
} }
class MembersTableDataSource extends _common_people_table_data_source__WEBPACK_IMPORTED_MODULE_27__.PeopleTableDataSource {
    constructor() {
        super(...arguments);
        this.statusType = _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType;
    }
}
class MembersComponent extends _common_base_members_component__WEBPACK_IMPORTED_MODULE_26__.BaseMembersComponent {
    constructor(apiService, i18nService, organizationManagementPreferencesService, keyService, encryptService, validationService, logService, userNamePipe, dialogService, toastService, policyService, policyApiService, route, syncService, organizationService, accountService, organizationApiService, organizationUserApiService, router, groupService, collectionService, billingApiService, organizationMetadataService, deleteManagedMemberWarningService, configService, organizationUserService, organizationWarningsService) {
        super(apiService, i18nService, keyService, validationService, logService, userNamePipe, dialogService, organizationManagementPreferencesService, toastService);
        this.encryptService = encryptService;
        this.policyService = policyService;
        this.policyApiService = policyApiService;
        this.route = route;
        this.syncService = syncService;
        this.organizationService = organizationService;
        this.accountService = accountService;
        this.organizationApiService = organizationApiService;
        this.organizationUserApiService = organizationUserApiService;
        this.router = router;
        this.groupService = groupService;
        this.collectionService = collectionService;
        this.billingApiService = billingApiService;
        this.organizationMetadataService = organizationMetadataService;
        this.deleteManagedMemberWarningService = deleteManagedMemberWarningService;
        this.configService = configService;
        this.organizationUserService = organizationUserService;
        this.organizationWarningsService = organizationWarningsService;
        this.userType = _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType;
        this.userStatusType = _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType;
        this.memberTab = _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogTab;
        this.dataSource = new MembersTableDataSource();
        this.orgResetPasswordPolicyEnabled = false;
        this.canUseSecretsManager = (0,_angular_core__WEBPACK_IMPORTED_MODULE_46__.computed)(() => { var _a, _b; return (_b = (_a = this.organization()) === null || _a === void 0 ? void 0 : _a.useSecretsManager) !== null && _b !== void 0 ? _b : false; });
        this.showUserManagementControls = (0,_angular_core__WEBPACK_IMPORTED_MODULE_46__.computed)(() => { var _a, _b; return (_b = (_a = this.organization()) === null || _a === void 0 ? void 0 : _a.canManageUsers) !== null && _b !== void 0 ? _b : false; });
        this.refreshBillingMetadata$ = new rxjs__WEBPACK_IMPORTED_MODULE_47__.BehaviorSubject(null);
        // Fixed sizes used for cdkVirtualScroll
        this.rowHeight = 66;
        this.rowHeightClass = `tw-h-[66px]`;
        this.userId$ = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_12__.getUserId);
        const organization$ = this.route.params.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_48__.concatMap)((params) => this.userId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((userId) => this.organizationService
            .organizations$(userId)
            .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__.getOrganizationById)(params.organizationId))))), (0,rxjs__WEBPACK_IMPORTED_MODULE_50__.filter)((organization) => organization != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_51__.shareReplay)({ refCount: true, bufferSize: 1 }));
        this.organization = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__.toSignal)(organization$);
        const policies$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_53__.combineLatest)([this.userId$, organization$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)(([userId, organization]) => organization.isProviderUser
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_54__.from)(this.policyApiService.getPolicies(organization.id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((response) => _bitwarden_common_admin_console_models_domain_policy__WEBPACK_IMPORTED_MODULE_9__.Policy.fromListResponse(response)))
            : this.policyService.policies$(userId)));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_53__.combineLatest)([this.route.queryParams, policies$, organization$])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_48__.concatMap)((_a) => __awaiter(this, [_a], void 0, function* ([qParams, policies, organization]) {
            var _b;
            // Backfill pub/priv key if necessary
            if (organization.canManageUsersPassword && !organization.hasPublicAndPrivateKeys) {
                const orgShareKey = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.userId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((orgKeys) => {
                    if (orgKeys == null || orgKeys[organization.id] == null) {
                        throw new Error("Organization keys not found for provided User.");
                    }
                    return orgKeys[organization.id];
                })));
                const [orgPublicKey, encryptedOrgPrivateKey] = yield this.keyService.makeKeyPair(orgShareKey);
                if (encryptedOrgPrivateKey.encryptedString == null) {
                    throw new Error("Encrypted private key is null.");
                }
                const request = new _bitwarden_common_admin_console_models_request_organization_keys_request__WEBPACK_IMPORTED_MODULE_10__.OrganizationKeysRequest(orgPublicKey, encryptedOrgPrivateKey.encryptedString);
                const response = yield this.organizationApiService.updateKeys(organization.id, request);
                if (response != null) {
                    yield this.syncService.fullSync(true); // Replace organizations with new data
                }
                else {
                    throw new Error(this.i18nService.t("resetPasswordOrgKeysError"));
                }
            }
            const resetPasswordPolicy = policies
                .filter((policy) => policy.type === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.PolicyType.ResetPassword)
                .find((p) => p.organizationId === organization.id);
            this.orgResetPasswordPolicyEnabled = (_b = resetPasswordPolicy === null || resetPasswordPolicy === void 0 ? void 0 : resetPasswordPolicy.enabled) !== null && _b !== void 0 ? _b : false;
            yield this.load(organization);
            this.searchControl.setValue(qParams.search);
            if (qParams.viewEvents != null) {
                const user = this.dataSource.data.filter((u) => u.id === qParams.viewEvents);
                if (user.length > 0 && user[0].status === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType.Confirmed) {
                    this.openEventsDialog(user[0], organization);
                }
            }
        })), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__.takeUntilDestroyed)())
            .subscribe();
        organization$
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((organization) => (0,rxjs__WEBPACK_IMPORTED_MODULE_57__.merge)(this.organizationWarningsService.showInactiveSubscriptionDialog$(organization), this.organizationWarningsService.showSubscribeBeforeFreeTrialEndsDialog$(organization))), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__.takeUntilDestroyed)())
            .subscribe();
        this.billingMetadata$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_53__.combineLatest)([this.refreshBillingMetadata$, organization$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)(([_, organization]) => this.organizationMetadataService.getOrganizationMetadata$(organization.id)), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__.takeUntilDestroyed)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_51__.shareReplay)({ bufferSize: 1, refCount: false }));
        // Stripe is slow, so kick this off in the background but without blocking page load.
        // Anyone who needs it will still await the first emission.
        this.billingMetadata$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_58__.take)(1), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_52__.takeUntilDestroyed)()).subscribe();
    }
    load(organization) {
        const _super = Object.create(null, {
            load: { get: () => super.load }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.refreshBillingMetadata$.next(null);
            yield _super.load.call(this, organization);
        });
    }
    getUsers(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let groupsPromise;
            let collectionsPromise;
            // We don't need both groups and collections for the table, so only load one
            const userPromise = this.organizationUserApiService.getAllUsers(organization.id, {
                includeGroups: organization.useGroups,
                includeCollections: !organization.useGroups,
            });
            // Depending on which column is displayed, we need to load the group/collection names
            if (organization.useGroups) {
                groupsPromise = this.getGroupNameMap(organization);
            }
            else {
                collectionsPromise = this.getCollectionNameMap(organization);
            }
            const [usersResponse, groupNamesMap, collectionNamesMap] = yield Promise.all([
                userPromise,
                groupsPromise,
                collectionsPromise,
            ]);
            return ((_b = (_a = usersResponse.data) === null || _a === void 0 ? void 0 : _a.map((r) => {
                var _a, _b;
                const userView = _core_views_organization_user_view__WEBPACK_IMPORTED_MODULE_29__.OrganizationUserView.fromResponse(r);
                userView.groupNames = userView.groups
                    .map((g) => groupNamesMap === null || groupNamesMap === void 0 ? void 0 : groupNamesMap.get(g))
                    .filter((name) => name != null)
                    .sort((_a = this.i18nService.collator) === null || _a === void 0 ? void 0 : _a.compare);
                userView.collectionNames = userView.collections
                    .map((c) => collectionNamesMap === null || collectionNamesMap === void 0 ? void 0 : collectionNamesMap.get(c.id))
                    .filter((name) => name != null)
                    .sort((_b = this.i18nService.collator) === null || _b === void 0 ? void 0 : _b.compare);
                return userView;
            })) !== null && _b !== void 0 ? _b : []);
        });
    }
    getGroupNameMap(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const groups = yield this.groupService.getAll(organization.id);
            const groupNameMap = new Map();
            groups.forEach((g) => groupNameMap.set(g.id, g.name));
            return groupNameMap;
        });
    }
    /**
     * Retrieve a map of all collection IDs <-> names for the organization.
     */
    getCollectionNameMap(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (0,rxjs__WEBPACK_IMPORTED_MODULE_54__.from)(this.apiService.getCollections(organization.id)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((res) => res.data.map((r) => _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.Collection.fromCollectionData(new _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionData(r)))));
            const decryptedCollections$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_53__.combineLatest)([
                this.userId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_50__.filter)((orgKeys) => orgKeys != null)),
                response,
            ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)(([orgKeys, collections]) => this.collectionService.decryptMany$(collections, orgKeys)), (0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((collections) => {
                const collectionMap = new Map();
                collections.forEach((c) => collectionMap.set(c.id, c.name));
                return collectionMap;
            }));
            return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(decryptedCollections$);
        });
    }
    removeUser(id, organization) {
        return this.organizationUserApiService.removeOrganizationUser(organization.id, id);
    }
    revokeUser(id, organization) {
        return this.organizationUserApiService.revokeOrganizationUser(organization.id, id);
    }
    restoreUser(id, organization) {
        return this.organizationUserApiService.restoreOrganizationUser(organization.id, id);
    }
    reinviteUser(id, organization) {
        return this.organizationUserApiService.postOrganizationUserReinvite(organization.id, id);
    }
    confirmUser(user, publicKey, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.configService.getFeatureFlag$(_bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_16__.FeatureFlag.CreateDefaultLocation))) {
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.organizationUserService.confirmUser(organization, user, publicKey));
            }
            else {
                const request = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.userId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_50__.filter)((orgKeys) => orgKeys != null), (0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((orgKeys) => orgKeys[organization.id]), (0,rxjs__WEBPACK_IMPORTED_MODULE_49__.switchMap)((orgKey) => this.encryptService.encapsulateKeyUnsigned(orgKey, publicKey)), (0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((encKey) => {
                    const req = new _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserConfirmRequest();
                    req.key = encKey.encryptedString;
                    return req;
                })));
                yield this.organizationUserApiService.postOrganizationUserConfirm(organization.id, user.id, request);
            }
        });
    }
    revoke(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.revokeUserConfirmationDialog(user);
            if (!confirmed) {
                return false;
            }
            this.actionPromise = this.revokeUser(user.id, organization);
            try {
                yield this.actionPromise;
                this.toastService.showToast({
                    variant: "success",
                    message: this.i18nService.t("revokedUserId", this.userNamePipe.transform(user)),
                });
                yield this.load(organization);
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    restore(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            this.actionPromise = this.restoreUser(user.id, organization);
            try {
                yield this.actionPromise;
                this.toastService.showToast({
                    variant: "success",
                    message: this.i18nService.t("restoredUserId", this.userNamePipe.transform(user)),
                });
                yield this.load(organization);
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    allowResetPassword(orgUser, organization) {
        let callingUserHasPermission = false;
        switch (organization.type) {
            case _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Owner:
                callingUserHasPermission = true;
                break;
            case _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Admin:
                callingUserHasPermission = orgUser.type !== _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Owner;
                break;
            case _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Custom:
                callingUserHasPermission =
                    orgUser.type !== _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Owner &&
                        orgUser.type !== _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserType.Admin;
                break;
        }
        return (organization.canManageUsersPassword &&
            callingUserHasPermission &&
            organization.useResetPassword &&
            organization.hasPublicAndPrivateKeys &&
            orgUser.resetPasswordEnrolled &&
            this.orgResetPasswordPolicyEnabled &&
            orgUser.status === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType.Confirmed);
    }
    showEnrolledStatus(orgUser, organization) {
        return (organization.useResetPassword &&
            orgUser.resetPasswordEnrolled &&
            this.orgResetPasswordPolicyEnabled);
    }
    getManageBillingText(organization) {
        return organization.canEditSubscription ? "ManageBilling" : "NoManageBilling";
    }
    getProductKey(organization) {
        let product = "";
        switch (organization.productTierType) {
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.ProductTierType.Free:
                product = "freeOrg";
                break;
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.ProductTierType.TeamsStarter:
                product = "teamsStarterPlan";
                break;
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.ProductTierType.Families:
                product = "familiesPlan";
                break;
            default:
                throw new Error(`Unsupported product type: ${organization.productTierType}`);
        }
        return `${product}InvLimitReached${this.getManageBillingText(organization)}`;
    }
    getDialogContent(organization) {
        return this.i18nService.t(this.getProductKey(organization), organization.seats);
    }
    getAcceptButtonText(organization) {
        if (!organization.canEditSubscription) {
            return this.i18nService.t("ok");
        }
        const productType = organization.productTierType;
        if ((0,_bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.isNotSelfUpgradable)(productType)) {
            throw new Error(`Unsupported product type: ${productType}`);
        }
        return this.i18nService.t("upgrade");
    }
    handleDialogClose(result, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!result || !organization.canEditSubscription) {
                return;
            }
            const productType = organization.productTierType;
            if ((0,_bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.isNotSelfUpgradable)(productType)) {
                throw new Error(`Unsupported product type: ${organization.productTierType}`);
            }
            yield this.router.navigate(["/organizations", organization.id, "billing", "subscription"], {
                queryParams: { upgrade: true },
            });
        });
    }
    showSeatLimitReachedDialog(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const orgUpgradeSimpleDialogOpts = {
                title: this.i18nService.t("upgradeOrganization"),
                content: this.getDialogContent(organization),
                type: "primary",
                acceptButtonText: this.getAcceptButtonText(organization),
            };
            if (!organization.canEditSubscription) {
                orgUpgradeSimpleDialogOpts.cancelButtonText = null;
            }
            const simpleDialog = this.dialogService.openSimpleDialogRef(orgUpgradeSimpleDialogOpts);
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(simpleDialog.closed.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_55__.map)((closed) => this.handleDialogClose(closed, organization))));
        });
    }
    handleInviteDialog(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            const billingMetadata = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.billingMetadata$);
            const dialog = (0,_components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.openUserAddEditDialog)(this.dialogService, {
                data: {
                    kind: "Add",
                    organizationId: organization.id,
                    allOrganizationUserEmails: (_b = (_a = this.dataSource.data) === null || _a === void 0 ? void 0 : _a.map((user) => user.email)) !== null && _b !== void 0 ? _b : [],
                    occupiedSeatCount: (_c = billingMetadata === null || billingMetadata === void 0 ? void 0 : billingMetadata.organizationOccupiedSeats) !== null && _c !== void 0 ? _c : 0,
                    isOnSecretsManagerStandalone: (_d = billingMetadata === null || billingMetadata === void 0 ? void 0 : billingMetadata.isOnSecretsManagerStandalone) !== null && _d !== void 0 ? _d : false,
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialog.closed);
            if (result === _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogResult.Saved) {
                yield this.load(organization);
            }
        });
    }
    handleSeatLimitForFixedTiers(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!organization.canEditSubscription) {
                yield this.showSeatLimitReachedDialog(organization);
                return;
            }
            const reference = (0,_billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_25__.openChangePlanDialog)(this.dialogService, {
                data: {
                    organizationId: organization.id,
                    productTierType: organization.productTierType,
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(reference.closed);
            if (result === _billing_organizations_change_plan_dialog_component__WEBPACK_IMPORTED_MODULE_25__.ChangePlanDialogResultType.Submitted) {
                yield this.load(organization);
            }
        });
    }
    invite(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const billingMetadata = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.billingMetadata$);
            if (organization.hasReseller &&
                organization.seats === (billingMetadata === null || billingMetadata === void 0 ? void 0 : billingMetadata.organizationOccupiedSeats)) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("seatLimitReached"),
                    message: this.i18nService.t("contactYourProvider"),
                });
                return;
            }
            if ((billingMetadata === null || billingMetadata === void 0 ? void 0 : billingMetadata.organizationOccupiedSeats) === organization.seats &&
                (0,_components_member_dialog_validators_org_seat_limit_reached_validator__WEBPACK_IMPORTED_MODULE_39__.isFixedSeatPlan)(organization.productTierType)) {
                yield this.handleSeatLimitForFixedTiers(organization);
                return;
            }
            yield this.handleInviteDialog(organization);
        });
    }
    edit(user_1, organization_1) {
        return __awaiter(this, arguments, void 0, function* (user, organization, initialTab = _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogTab.Role) {
            var _a;
            const billingMetadata = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.billingMetadata$);
            const dialog = (0,_components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.openUserAddEditDialog)(this.dialogService, {
                data: {
                    kind: "Edit",
                    name: this.userNamePipe.transform(user),
                    organizationId: organization.id,
                    organizationUserId: user.id,
                    usesKeyConnector: user.usesKeyConnector,
                    isOnSecretsManagerStandalone: (_a = billingMetadata === null || billingMetadata === void 0 ? void 0 : billingMetadata.isOnSecretsManagerStandalone) !== null && _a !== void 0 ? _a : false,
                    initialTab: initialTab,
                    managedByOrganization: user.managedByOrganization,
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialog.closed);
            switch (result) {
                case _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogResult.Deleted:
                    this.dataSource.removeUser(user);
                    break;
                case _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogResult.Saved:
                case _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogResult.Revoked:
                case _components_member_dialog__WEBPACK_IMPORTED_MODULE_38__.MemberDialogResult.Restored:
                    yield this.load(organization);
                    break;
            }
        });
    }
    bulkRemove(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actionPromise != null) {
                return;
            }
            const dialogRef = _components_bulk_bulk_remove_dialog_component__WEBPACK_IMPORTED_MODULE_35__.BulkRemoveDialogComponent.open(this.dialogService, {
                data: {
                    organizationId: organization.id,
                    users: this.dataSource.getCheckedUsers(),
                },
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            yield this.load(organization);
        });
    }
    bulkDelete(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const warningAcknowledged = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.deleteManagedMemberWarningService.warningAcknowledged(organization.id));
            if (!warningAcknowledged &&
                organization.canManageUsers &&
                organization.productTierType === _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.ProductTierType.Enterprise) {
                const acknowledged = yield this.deleteManagedMemberWarningService.showWarning();
                if (!acknowledged) {
                    return;
                }
            }
            if (this.actionPromise != null) {
                return;
            }
            const dialogRef = _components_bulk_bulk_delete_dialog_component__WEBPACK_IMPORTED_MODULE_33__.BulkDeleteDialogComponent.open(this.dialogService, {
                data: {
                    organizationId: organization.id,
                    users: this.dataSource.getCheckedUsers(),
                },
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            yield this.load(organization);
        });
    }
    bulkRevoke(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bulkRevokeOrRestore(true, organization);
        });
    }
    bulkRestore(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bulkRevokeOrRestore(false, organization);
        });
    }
    bulkRevokeOrRestore(isRevoking, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actionPromise != null) {
                return;
            }
            const ref = _components_bulk_bulk_restore_revoke_component__WEBPACK_IMPORTED_MODULE_36__.BulkRestoreRevokeComponent.open(this.dialogService, {
                organizationId: organization.id,
                users: this.dataSource.getCheckedUsers(),
                isRevoking: isRevoking,
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(ref.closed);
            yield this.load(organization);
        });
    }
    bulkReinvite(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actionPromise != null) {
                return;
            }
            const users = this.dataSource.getCheckedUsers();
            const filteredUsers = users.filter((u) => u.status === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType.Invited);
            if (filteredUsers.length <= 0) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: this.i18nService.t("noSelectedUsersApplicable"),
                });
                return;
            }
            try {
                const response = this.organizationUserApiService.postManyOrganizationUserReinvite(organization.id, filteredUsers.map((user) => user.id));
                // Bulk Status component open
                const dialogRef = _components_bulk_bulk_status_component__WEBPACK_IMPORTED_MODULE_37__.BulkStatusComponent.open(this.dialogService, {
                    data: {
                        users: users,
                        filteredUsers: filteredUsers,
                        request: response,
                        successfulMessage: this.i18nService.t("bulkReinviteMessage"),
                    },
                });
                yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    bulkConfirm(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.actionPromise != null) {
                return;
            }
            const dialogRef = _components_bulk_bulk_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_32__.BulkConfirmDialogComponent.open(this.dialogService, {
                data: {
                    organization: organization,
                    users: this.dataSource.getCheckedUsers(),
                },
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            yield this.load(organization);
        });
    }
    bulkEnableSM(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = this.dataSource.getCheckedUsers().filter((ou) => !ou.accessSecretsManager);
            if (users.length === 0) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: this.i18nService.t("noSelectedUsersApplicable"),
                });
                return;
            }
            const dialogRef = _components_bulk_bulk_enable_sm_dialog_component__WEBPACK_IMPORTED_MODULE_34__.BulkEnableSecretsManagerDialogComponent.open(this.dialogService, {
                orgId: organization.id,
                users,
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            this.dataSource.uncheckAllUsers();
            yield this.load(organization);
        });
    }
    openEventsDialog(user, organization) {
        (0,_manage_entity_events_component__WEBPACK_IMPORTED_MODULE_30__.openEntityEventsDialog)(this.dialogService, {
            data: {
                name: this.userNamePipe.transform(user),
                organizationId: organization.id,
                entityId: user.id,
                showUser: false,
                entity: "user",
            },
        });
    }
    resetPassword(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!user || !user.email || !user.id) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: this.i18nService.t("orgUserDetailsNotFound"),
                });
                this.logService.error("Org user details not found when attempting account recovery");
                return;
            }
            const dialogRef = _components_account_recovery_account_recovery_dialog_component__WEBPACK_IMPORTED_MODULE_31__.AccountRecoveryDialogComponent.open(this.dialogService, {
                data: {
                    name: this.userNamePipe.transform(user),
                    email: user.email,
                    organizationId: organization.id,
                    organizationUserId: user.id,
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_59__.lastValueFrom)(dialogRef.closed);
            if (result === _components_account_recovery_account_recovery_dialog_component__WEBPACK_IMPORTED_MODULE_31__.AccountRecoveryDialogResultType.Ok) {
                yield this.load(organization);
            }
            return;
        });
    }
    removeUserConfirmationDialog(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = user.usesKeyConnector
                ? "removeUserConfirmationKeyConnector"
                : "removeOrgUserConfirmation";
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: {
                    key: "removeUserIdAccess",
                    placeholders: [this.userNamePipe.transform(user)],
                },
                content: { key: content },
                type: "warning",
            });
            if (!confirmed) {
                return false;
            }
            if (user.status > _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType.Invited && user.hasMasterPassword === false) {
                return yield this.noMasterPasswordConfirmationDialog(user);
            }
            return true;
        });
    }
    revokeUserConfirmationDialog(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: { key: "revokeAccess", placeholders: [this.userNamePipe.transform(user)] },
                content: this.i18nService.t("revokeUserConfirmation"),
                acceptButtonText: { key: "revokeAccess" },
                type: "warning",
            });
            if (!confirmed) {
                return false;
            }
            if (user.status > _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_8__.OrganizationUserStatusType.Invited && user.hasMasterPassword === false) {
                return yield this.noMasterPasswordConfirmationDialog(user);
            }
            return true;
        });
    }
    deleteUser(user, organization) {
        return __awaiter(this, void 0, void 0, function* () {
            const warningAcknowledged = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_56__.firstValueFrom)(this.deleteManagedMemberWarningService.warningAcknowledged(organization.id));
            if (!warningAcknowledged &&
                organization.canManageUsers &&
                organization.productTierType === _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_15__.ProductTierType.Enterprise) {
                const acknowledged = yield this.deleteManagedMemberWarningService.showWarning();
                if (!acknowledged) {
                    return false;
                }
            }
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: {
                    key: "deleteOrganizationUser",
                    placeholders: [this.userNamePipe.transform(user)],
                },
                content: {
                    key: "deleteOrganizationUserWarningDesc",
                    placeholders: [this.userNamePipe.transform(user)],
                },
                type: "warning",
                acceptButtonText: { key: "delete" },
                cancelButtonText: { key: "cancel" },
            });
            if (!confirmed) {
                return false;
            }
            yield this.deleteManagedMemberWarningService.acknowledgeWarning(organization.id);
            this.actionPromise = this.organizationUserApiService.deleteOrganizationUser(organization.id, user.id);
            try {
                yield this.actionPromise;
                this.toastService.showToast({
                    variant: "success",
                    message: this.i18nService.t("organizationUserDeleted", this.userNamePipe.transform(user)),
                });
                this.dataSource.removeUser(user);
            }
            catch (e) {
                this.validationService.showError(e);
            }
            this.actionPromise = undefined;
        });
    }
    noMasterPasswordConfirmationDialog(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dialogService.openSimpleDialog({
                title: {
                    key: "removeOrgUserNoMasterPasswordTitle",
                },
                content: {
                    key: "removeOrgUserNoMasterPasswordDesc",
                    placeholders: [this.userNamePipe.transform(user)],
                },
                type: "warning",
            });
        });
    }
    get showBulkRestoreUsers() {
        return this.dataSource
            .getCheckedUsers()
            .every((member) => member.status == this.userStatusType.Revoked);
    }
    get showBulkRevokeUsers() {
        return this.dataSource
            .getCheckedUsers()
            .every((member) => member.status != this.userStatusType.Revoked);
    }
    get showBulkRemoveUsers() {
        return this.dataSource.getCheckedUsers().every((member) => !member.managedByOrganization);
    }
    get showBulkDeleteUsers() {
        const validStatuses = [
            this.userStatusType.Accepted,
            this.userStatusType.Confirmed,
            this.userStatusType.Revoked,
        ];
        return this.dataSource
            .getCheckedUsers()
            .every((member) => member.managedByOrganization && validStatuses.includes(member.status));
    }
    navigateToPaymentMethod(organization) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigate(["organizations", `${organization.id}`, "billing", "payment-details"], {
                state: { launchPaymentModalAutomatically: true },
            });
        });
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_19__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_management_preferences_organization_management_preferences_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationManagementPreferencesService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_23__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_17__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_validation_service__WEBPACK_IMPORTED_MODULE_21__.ValidationService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_20__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_1__.UserNamePipe), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_60__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_61__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_7__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_policy_policy_api_service_abstraction__WEBPACK_IMPORTED_MODULE_6__.PolicyApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_62__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_vault_abstractions_sync_sync_service_abstraction__WEBPACK_IMPORTED_MODULE_22__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_4__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_11__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_3__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_62__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_28__.GroupApiService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_13__.BillingApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_organization_metadata_service_abstraction__WEBPACK_IMPORTED_MODULE_14__.OrganizationMetadataServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_services_delete_managed_member_delete_managed_member_warning_service__WEBPACK_IMPORTED_MODULE_40__.DeleteManagedMemberWarningService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_18__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_services_organization_user_organization_user_service__WEBPACK_IMPORTED_MODULE_41__.OrganizationUserService), _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdirectiveInject"](_bitwarden_web_vault_app_billing_organizations_warnings_services__WEBPACK_IMPORTED_MODULE_24__.OrganizationWarningsService)); };
MembersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["ng-component"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["headerMenu", ""], ["readOnlyUserInfo", ""], ["readOnlyGroupsCell", ""], ["readOnlyRoleCell", ""], ["rowMenu", ""], [3, "clicked", "organization"], [1, "tw-grow", 3, "formControl", "placeholder"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "disabled", "click", 4, "ngIf"], [1, "tw-mb-4", "tw-flex", "tw-flex-col", "tw-space-y-4"], [3, "selected", "selectedChange", 4, "ngIf"], [4, "ngIf"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "click", "disabled"], ["aria-hidden", "true", 1, "bwi", "bwi-plus", "bwi-fw"], [3, "selectedChange", "selected"], [3, "value"], ["bitBadge", "", "variant", "info", 4, "ngIf"], ["bitBadge", "", "variant", "info"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["type", "info", "icon", "bwi-check-circle", 3, "title", 4, "ngIf"], ["bitScrollLayout", "", 1, "tw-pb-8", 3, "itemSize"], [3, "dataSource"], ["header", ""], ["bitCell", "", "class", "tw-w-20", 4, "ngIf"], ["bitCell", "", "bitSortable", "email", "default", ""], ["bitCell", ""], ["bitCell", "", "bitSortable", "type"], ["bitCell", "", 1, "tw-w-10"], ["type", "button", "bitIconButton", "bwi-ellipsis-v", "size", "small", 3, "bitMenuTriggerFor", "label", 4, "ngIf"], ["type", "button", "bitMenuItem", "", 3, "click", 4, "ngIf"], ["body", ""], ["type", "info", "icon", "bwi-check-circle", 3, "title"], ["bitCell", "", 1, "tw-w-20"], ["type", "checkbox", "bitCheckbox", "", "id", "selectAll", 1, "tw-mr-1", 3, "change"], ["for", "selectAll", 1, "tw-mb-0", "!tw-font-bold", "!tw-text-muted"], ["type", "button", "bitIconButton", "bwi-ellipsis-v", "size", "small", 3, "bitMenuTriggerFor", "label"], ["type", "button", "bitMenuItem", "", 3, "click"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-envelope"], [1, "tw-text-success"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-check"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-plus-circle"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-minus-circle"], [1, "tw-text-danger"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-close"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", "bwi-trash"], ["bitRow", "", "alignContent", "middle", 3, "ngClass", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["bitRow", "", "alignContent", "middle", 3, "ngClass"], ["bitCell", "", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["bitCell", "", 1, "tw-text-muted"], ["bitCell", "", 3, "click"], ["type", "checkbox", "bitCheckbox", "", 3, "ngModelChange", "ngModel"], ["bitCell", "", 1, "tw-cursor-pointer", 3, "click"], [1, "tw-flex", "tw-items-center"], ["size", "small", 1, "tw-mr-3", 3, "text", "id", "color"], [1, "tw-flex", "tw-flex-col"], [1, "tw-flex", "tw-flex-row", "tw-gap-2"], ["type", "button", "bitLink", ""], ["bitBadge", "", "class", "tw-text-xs", "variant", "secondary", 4, "ngIf"], ["bitBadge", "", "class", "tw-text-xs", "variant", "warning", 4, "ngIf"], ["class", "tw-text-sm tw-text-muted", 4, "ngIf"], ["bitBadge", "", "variant", "secondary", 1, "tw-text-xs"], ["bitBadge", "", "variant", "warning", 1, "tw-text-xs"], [1, "tw-text-sm", "tw-text-muted"], ["variant", "secondary", 3, "items", "maxItems"], ["bitCell", "", 1, "tw-cursor-pointer", "tw-text-sm", "tw-text-muted", 3, "click"], ["bitCell", "", 1, "tw-text-sm", "tw-text-muted"], ["aria-hidden", "true", 1, "bwi", "bwi-lock", 3, "title"], ["aria-hidden", "true", 1, "bwi", "bwi-key", 3, "title"], ["aria-hidden", "true", 1, "bwi", "bwi-user"], ["aria-hidden", "true", 1, "bwi", "bwi-collection-shared"], ["aria-hidden", "true", 1, "bwi", "bwi-envelope"], ["aria-hidden", "true", 1, "bwi", "bwi-check"], ["aria-hidden", "true", 1, "bwi", "bwi-users"], ["aria-hidden", "true", 1, "bwi", "bwi-file-text"], ["aria-hidden", "true", 1, "bwi", "bwi-key"], ["aria-hidden", "true", 1, "bwi", "bwi-plus-circle"], ["aria-hidden", "true", 1, "bwi", "bwi-minus-circle"], ["aria-hidden", "true", 1, "bwi", "bwi-close"], ["aria-hidden", "true", 1, "bwi", "bwi-trash"]], template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵdeclareLet"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵtemplate"](1, MembersComponent_Conditional_1_Template, 9, 9);
    } if (rf & 2) {
        const organization_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵstoreLet"](ctx.organization());
        _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_46__["ɵɵconditional"](organization_r39 ? 1 : -1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_63__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_63__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_64__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_64__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_64__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_64__.FormControlDirective, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_65__.AvatarComponent, _libs_components_src_badge_list_badge_list_component__WEBPACK_IMPORTED_MODULE_66__.BadgeListComponent, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_67__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_68__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_69__.CalloutComponent, _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_70__.CheckboxComponent, _libs_components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_71__.BitIconButtonComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_72__.ButtonLinkDirective, _libs_components_src_menu_menu_component__WEBPACK_IMPORTED_MODULE_73__.MenuComponent, _libs_components_src_menu_menu_trigger_for_directive__WEBPACK_IMPORTED_MODULE_74__.MenuTriggerForDirective, _libs_components_src_menu_menu_item_directive__WEBPACK_IMPORTED_MODULE_75__.MenuItemDirective, _libs_components_src_menu_menu_divider_component__WEBPACK_IMPORTED_MODULE_76__.MenuDividerComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_77__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_78__.RowDirective, _libs_components_src_table_sortable_component__WEBPACK_IMPORTED_MODULE_79__.SortableComponent, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_80__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_80__.TableComponent, _libs_components_src_toggle_group_toggle_group_component__WEBPACK_IMPORTED_MODULE_81__.ToggleGroupComponent, _libs_components_src_toggle_group_toggle_component__WEBPACK_IMPORTED_MODULE_82__.ToggleComponent, _libs_components_src_search_search_component__WEBPACK_IMPORTED_MODULE_83__.SearchComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_42__.WebHeaderComponent, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_84__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_84__.CdkVirtualForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_84__.CdkVirtualScrollViewport, _libs_components_src_layout_scroll_layout_directive__WEBPACK_IMPORTED_MODULE_85__.ScrollLayoutDirective, _billing_organizations_warnings_components_organization_free_trial_warning_component__WEBPACK_IMPORTED_MODULE_43__.OrganizationFreeTrialWarningComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_44__.I18nPipe, _bitwarden_angular_pipes_user_name_pipe__WEBPACK_IMPORTED_MODULE_1__.UserNamePipe, _libs_angular_src_pipes_user_type_pipe__WEBPACK_IMPORTED_MODULE_45__.UserTypePipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/members.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/members.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MembersModule: () => (/* binding */ MembersModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/fesm2022/scrolling.mjs");
/* harmony import */ var _bitwarden_angular_tools_password_strength_password_strength_v2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/angular/tools/password-strength/password-strength-v2.component */ "../../libs/angular/src/tools/password-strength/password-strength-v2.component.ts");
/* harmony import */ var _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/auth/angular */ "../../libs/auth/src/angular/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_organizations_warnings_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/organizations/warnings/components */ "./src/app/billing/organizations/warnings/components/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/admin-console/organizations/shared/index.ts");
/* harmony import */ var _components_member_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/member-dialog */ "./src/app/admin-console/organizations/members/components/member-dialog/index.ts");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/admin-console/organizations/members/members-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");









class MembersModule {
}
MembersModule.ɵfac = function MembersModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MembersModule)(); };
MembersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MembersModule });
MembersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedOrganizationModule,
        _members_routing_module__WEBPACK_IMPORTED_MODULE_6__.MembersRoutingModule,
        _components_member_dialog__WEBPACK_IMPORTED_MODULE_5__.UserDialogModule,
        _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_1__.PasswordCalloutComponent,
        _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__.ScrollingModule,
        _bitwarden_angular_tools_password_strength_password_strength_v2_component__WEBPACK_IMPORTED_MODULE_0__.PasswordStrengthV2Component,
        _bitwarden_web_vault_app_billing_organizations_warnings_components__WEBPACK_IMPORTED_MODULE_2__.OrganizationFreeTrialWarningComponent] });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/services/delete-managed-member/delete-managed-member-warning.service.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/services/delete-managed-member/delete-managed-member-warning.service.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteManagedMemberWarningService: () => (/* binding */ DeleteManagedMemberWarningService),
/* harmony export */   SHOW_WARNING_KEY: () => (/* binding */ SHOW_WARNING_KEY)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/state */ "../../libs/common/src/platform/state/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const SHOW_WARNING_KEY = new _bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_0__.UserKeyDefinition(_bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_0__.DELETE_MANAGED_USER_WARNING, "showDeleteManagedUserWarning", {
    deserializer: (b) => b,
    clearOn: [],
});
class DeleteManagedMemberWarningService {
    constructor(stateProvider, dialogService) {
        this.stateProvider = stateProvider;
        this.dialogService = dialogService;
        this._acknowledged = this.stateProvider.getActive(SHOW_WARNING_KEY);
        this.acknowledgedState$ = this._acknowledged.state$;
    }
    acknowledgeWarning(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._acknowledged.update((state) => {
                if (!organizationId) {
                    return state;
                }
                if (!state) {
                    return [organizationId];
                }
                else if (!state.includes(organizationId)) {
                    return [...state, organizationId];
                }
                return state;
            });
        });
    }
    showWarning() {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: {
                    key: "deleteManagedUserWarning",
                },
                content: {
                    key: "deleteManagedUserWarningDesc",
                },
                type: "danger",
                icon: "bwi-exclamation-triangle",
                acceptButtonText: { key: "continue" },
                cancelButtonText: { key: "cancel" },
            });
            if (!confirmed) {
                return false;
            }
            return confirmed;
        });
    }
    warningAcknowledged(organizationId) {
        return this.acknowledgedState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((acknowledgedIds) => { var _a; return (_a = acknowledgedIds === null || acknowledgedIds === void 0 ? void 0 : acknowledgedIds.includes(organizationId)) !== null && _a !== void 0 ? _a : false; }));
    }
}
DeleteManagedMemberWarningService.ɵfac = function DeleteManagedMemberWarningService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DeleteManagedMemberWarningService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_0__.StateProvider), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_3__.DialogService)); };
DeleteManagedMemberWarningService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeleteManagedMemberWarningService, factory: DeleteManagedMemberWarningService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "./src/app/admin-console/organizations/members/services/organization-user/organization-user.service.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/members/services/organization-user/organization-user.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationUserService: () => (/* binding */ OrganizationUserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");













class OrganizationUserService {
    constructor(keyService, encryptService, organizationUserApiService, accountService, i18nService) {
        this.keyService = keyService;
        this.encryptService = encryptService;
        this.organizationUserApiService = organizationUserApiService;
        this.accountService = accountService;
        this.i18nService = i18nService;
    }
    orgKey$(organization) {
        return this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)((orgKeys) => !!orgKeys), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((organizationKeysById) => organizationKeysById[organization.id]));
    }
    confirmUser(organization, user, publicKey) {
        const encryptedCollectionName$ = this.getEncryptedDefaultCollectionName$(organization);
        const encryptedKey$ = this.orgKey$(organization).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((orgKey) => this.encryptService.encapsulateKeyUnsigned(orgKey, publicKey)));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([encryptedKey$, encryptedCollectionName$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(([key, collectionName]) => {
            const request = {
                key: key.encryptedString,
                defaultUserCollectionName: collectionName.encryptedString,
            };
            return this.organizationUserApiService.postOrganizationUserConfirm(organization.id, user.id, request);
        }));
    }
    bulkConfirmUsers(organization, userIdsWithKeys) {
        return this.getEncryptedDefaultCollectionName$(organization).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((collectionName) => {
            const request = new _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserBulkConfirmRequest(userIdsWithKeys, collectionName.encryptedString);
            return this.organizationUserApiService.postOrganizationUserBulkConfirm(organization.id, request);
        }));
    }
    getEncryptedDefaultCollectionName$(organization) {
        return this.orgKey$(organization).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((orgKey) => this.encryptService.encryptString(this.i18nService.t("myItems"), orgKey)));
    }
}
OrganizationUserService.ɵfac = function OrganizationUserService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_5__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_4__.I18nService)); };
OrganizationUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: OrganizationUserService, factory: OrganizationUserService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "./src/app/billing/guards/can-access-sponsored-families.guard.ts":
/*!***********************************************************************!*\
  !*** ./src/app/billing/guards/can-access-sponsored-families.guard.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canAccessSponsoredFamilies: () => (/* binding */ canAccessSponsoredFamilies)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/misc */ "../../libs/common/src/platform/misc/index.ts");
/* harmony import */ var _services_free_families_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/free-families-policy.service */ "./src/app/billing/services/free-families-policy.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const canAccessSponsoredFamilies = (route) => __awaiter(void 0, void 0, void 0, function* () {
    const freeFamiliesPolicyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_free_families_policy_service__WEBPACK_IMPORTED_MODULE_4__.FreeFamiliesPolicyService);
    const organizationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService);
    const accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService);
    const org = accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_2__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((userId) => organizationService.organizations$(userId)), (0,_bitwarden_common_platform_misc__WEBPACK_IMPORTED_MODULE_3__.getById)(route.params.organizationId), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.filter)((org) => org !== undefined));
    return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(freeFamiliesPolicyService.showSponsoredFamiliesDropdown$(org));
});


/***/ }),

/***/ "./src/app/billing/members/add-sponsorship-dialog.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/billing/members/add-sponsorship-dialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSponsorshipDialogComponent: () => (/* binding */ AddSponsorshipDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/angular/jslib.module */ "../../libs/angular/src/jslib.module.ts");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/button/button.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/form-field/form-field.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _libs_angular_src_directives_input_strip_spaces_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/angular/src/directives/input-strip-spaces.directive */ "../../libs/angular/src/directives/input-strip-spaces.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};























class AddSponsorshipDialogComponent {
    constructor(dialogRef, formBuilder, i18nService, organizationUserApiService, toastService, apiService, encryptService, dialogParams) {
        var _a;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.i18nService = i18nService;
        this.organizationUserApiService = organizationUserApiService;
        this.toastService = toastService;
        this.apiService = apiService;
        this.encryptService = encryptService;
        this.dialogParams = dialogParams;
        this.loading = false;
        this.organizationId = (_a = this.dialogParams) === null || _a === void 0 ? void 0 : _a.organizationId;
        this.organizationKey = this.dialogParams.organizationKey;
        this.sponsorshipForm = this.formBuilder.group({
            sponsorshipEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                asyncValidators: [this.isOrganizationMember.bind(this)],
                updateOn: "change",
            }),
            sponsorshipNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("", {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(1000)],
            }),
        });
    }
    static open(dialogService, config) {
        return dialogService.open(AddSponsorshipDialogComponent, Object.assign(Object.assign({}, config), { data: config.data }));
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sponsorshipEmailControl.markAllAsTouched();
            if (this.sponsorshipForm.invalid) {
                return;
            }
            this.loading = true;
            try {
                const notes = this.sponsorshipForm.value.sponsorshipNote || "";
                const email = this.sponsorshipForm.value.sponsorshipEmail || "";
                const encryptedNotes = yield this.encryptService.encryptString(notes, this.organizationKey);
                const isAdminInitiated = true;
                yield this.apiService.postCreateSponsorship(this.organizationId, {
                    sponsoredEmail: email,
                    planSponsorshipType: _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__.PlanSponsorshipType.FamiliesForEnterprise,
                    friendlyName: email,
                    isAdminInitiated,
                    notes: encryptedNotes.encryptedString,
                });
                this.toastService.showToast({
                    variant: "success",
                    title: undefined,
                    message: this.i18nService.t("sponsorshipCreated"),
                });
                yield this.resetForm();
            }
            catch (e) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: (e === null || e === void 0 ? void 0 : e.message) || this.i18nService.t("unexpectedError"),
                });
            }
            this.loading = false;
            this.dialogRef.close();
        });
    }
    resetForm() {
        return __awaiter(this, void 0, void 0, function* () {
            this.sponsorshipForm.reset();
        });
    }
    get sponsorshipEmailControl() {
        return this.sponsorshipForm.controls.sponsorshipEmail;
    }
    get sponsorshipNoteControl() {
        return this.sponsorshipForm.controls.sponsorshipNote;
    }
    isOrganizationMember(control) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = control.value;
            const users = yield this.organizationUserApiService.getAllMiniUserDetails(this.organizationId);
            const userExists = users.data.some((member) => member.email.toLowerCase() === value.toLowerCase());
            if (userExists) {
                return {
                    isOrganizationMember: {
                        message: this.i18nService.t("organizationHasMemberMessage", value),
                    },
                };
            }
            return null;
        });
    }
}
AddSponsorshipDialogComponent.ɵfac = function AddSponsorshipDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AddSponsorshipDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_10__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.OrganizationUserApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_11__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_4__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_12__.DIALOG_DATA)); };
AddSponsorshipDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AddSponsorshipDialogComponent, selectors: [["ng-component"]], decls: 27, vars: 21, consts: [["bitDialogTitle", ""], ["bitDialogContent", ""], [3, "formGroup"], [1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"], [1, "tw-col-span-12"], ["bitInput", "", "inputmode", "email", "formControlName", "sponsorshipEmail", "appInputStripSpaces", ""], ["bitInput", "", "inputmode", "text", "formControlName", "sponsorshipNote"], ["bitDialogFooter", ""], ["bitButton", "", "bitFormButton", "", "type", "button", "buttonType", "primary", 3, "click", "loading", "disabled"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "bitDialogClose"]], template: function AddSponsorshipDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form")(1, "bit-dialog")(2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 1)(6, "form", 2)(7, "div", 3)(8, "div", 4)(9, "bit-form-field")(10, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 4)(15, "bit-form-field")(16, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](20, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddSponsorshipDialogComponent_Template_button_click_21_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](23, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](26, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 11, "addSponsorship"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.sponsorshipForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 13, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", ctx.sponsorshipEmailControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 15, "notes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-invalid", ctx.sponsorshipNoteControl.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.loading)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](23, 17, "save"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("bitDialogClose", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](26, 19, "cancel"), " ");
    } }, dependencies: [_bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_1__.JslibModule, _libs_angular_src_directives_input_strip_spaces_directive__WEBPACK_IMPORTED_MODULE_6__.InputStripSpacesDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__.I18nPipe, _bitwarden_components__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_15__.DialogModule, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_16__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DialogComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _bitwarden_components__WEBPACK_IMPORTED_MODULE_18__.FormFieldModule, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_19__.BitLabel, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_20__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__.BitFormFieldComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/members/free-bitwarden-families.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/billing/members/free-bitwarden-families.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FreeBitwardenFamiliesComponent: () => (/* binding */ FreeBitwardenFamiliesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_organizations_organization_sponsorship_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/organizations/organization-sponsorship-api.service.abstraction */ "../../libs/common/src/billing/abstractions/organizations/organization-sponsorship-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_billing_models_response_organization_sponsorship_invites_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/billing/models/response/organization-sponsorship-invites.response */ "../../libs/common/src/billing/models/response/organization-sponsorship-invites.response.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/abstractions/encrypt.service */ "../../libs/common/src/key-management/crypto/abstractions/encrypt.service.ts");
/* harmony import */ var _bitwarden_common_key_management_crypto_models_enc_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/key-management/crypto/models/enc-string */ "../../libs/common/src/key-management/crypto/models/enc-string.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/platform/state */ "../../libs/common/src/platform/state/index.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _add_sponsorship_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-sponsorship-dialog.component */ "./src/app/billing/members/add-sponsorship-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../libs/components/src/icon-button/icon-button.component */ "../../libs/components/src/icon-button/icon-button.component.ts");
/* harmony import */ var _libs_components_src_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../libs/components/src/menu/menu.component */ "../../libs/components/src/menu/menu.component.ts");
/* harmony import */ var _libs_components_src_menu_menu_trigger_for_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../libs/components/src/menu/menu-trigger-for.directive */ "../../libs/components/src/menu/menu-trigger-for.directive.ts");
/* harmony import */ var _libs_components_src_menu_menu_item_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../libs/components/src/menu/menu-item.directive */ "../../libs/components/src/menu/menu-item.directive.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








































function FreeBitwardenFamiliesComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Conditional_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2); const sponsoredFamily_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.resendEmail(sponsoredFamily_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 2, "resendEmailLabel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 4, "resendInvitation"), " ");
} }
function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "hr", 17);
} }
function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tr", 14)(2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "bit-menu", null, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Conditional_13_Template, 5, 6, "button", 16)(14, FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Conditional_14_Template, 1, 0, "hr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Template_button_click_15_listener() { const sponsoredFamily_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1).$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r3.removeSponsorship(sponsoredFamily_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sponsoredFamily_r3 = ctx.$implicit;
    const appListDropdown_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](12);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](sponsoredFamily_r3.friendlyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](sponsoredFamily_r3.statusClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", sponsoredFamily_r3.statusMessage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](sponsoredFamily_r3.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 11, "options"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bitMenuTriggerFor", appListDropdown_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](!ctx_r3.isSelfHosted && !sponsoredFamily_r3.validUntil ? 13 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](!ctx_r3.isSelfHosted && !sponsoredFamily_r3.validUntil ? 14 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 13, "revokeAccountMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 15, "remove"));
} }
function FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterCreate"](0, FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_For_1_Template, 21, 17, "ng-container", null, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeaterTrackByIndex"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrepeater"](ctx_r3.sponsoredFamilies);
} }
function FreeBitwardenFamiliesComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "tr")(4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, FreeBitwardenFamiliesComponent_Conditional_24_ng_template_14_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 3, "recipient"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 5, "status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 7, "notes"));
} }
function FreeBitwardenFamiliesComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "noSponsoredFamiliesMessage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 4, "nosponsoredFamiliesDetails"));
} }
function FreeBitwardenFamiliesComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "sponsoredFamiliesRemoveActiveSponsorship"));
} }
class FreeBitwardenFamiliesComponent {
    constructor(route, dialogService, apiService, encryptService, keyService, platformUtilsService, i18nService, logService, toastService, organizationSponsorshipApiService, stateProvider) {
        this.route = route;
        this.dialogService = dialogService;
        this.apiService = apiService;
        this.encryptService = encryptService;
        this.keyService = keyService;
        this.platformUtilsService = platformUtilsService;
        this.i18nService = i18nService;
        this.logService = logService;
        this.toastService = toastService;
        this.organizationSponsorshipApiService = organizationSponsorshipApiService;
        this.stateProvider = stateProvider;
        this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.signal)(true);
        this.tabIndex = 0;
        this.sponsoredFamilies = [];
        this.organizationId = "";
        this.locale = "";
        this.organizationId = this.route.snapshot.params.organizationId || "";
        this.organizationKey$ = this.stateProvider.activeUserId$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)((organizationKeysById) => organizationKeysById[this.organizationId]), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_16__.takeUntilDestroyed)());
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.locale = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.i18nService.locale$);
            yield this.loadSponsorships();
            this.loading.set(false);
        });
    }
    loadSponsorships() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.organizationId) {
                return;
            }
            const [response, orgKey] = yield Promise.all([
                this.organizationSponsorshipApiService.getOrganizationSponsorship(this.organizationId),
                (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.organizationKey$),
            ]);
            if (!orgKey) {
                this.logService.error("Organization key not found");
                return;
            }
            const organizationFamilies = response.data;
            this.sponsoredFamilies = yield Promise.all(organizationFamilies.map((family) => __awaiter(this, void 0, void 0, function* () {
                let decryptedNote = "";
                try {
                    decryptedNote = yield this.encryptService.decryptString(new _bitwarden_common_key_management_crypto_models_enc_string__WEBPACK_IMPORTED_MODULE_4__.EncString(family.notes), orgKey);
                }
                catch (e) {
                    this.logService.error(e);
                }
                const { statusMessage, statusClass } = this.getStatus(this.isSelfHosted, family.toDelete, family.validUntil, family.lastSyncDate, this.locale);
                const newFamily = Object.assign(Object.assign({}, family), { notes: decryptedNote, statusMessage: statusMessage || "", statusClass: statusClass || "tw-text-success", status: statusMessage || "" });
                return new _bitwarden_common_billing_models_response_organization_sponsorship_invites_response__WEBPACK_IMPORTED_MODULE_2__.OrganizationSponsorshipInvitesResponse(newFamily);
            })));
        });
    }
    addSponsorship() {
        return __awaiter(this, void 0, void 0, function* () {
            const addSponsorshipDialogRef = _add_sponsorship_dialog_component__WEBPACK_IMPORTED_MODULE_10__.AddSponsorshipDialogComponent.open(this.dialogService, {
                data: {
                    organizationId: this.organizationId,
                    organizationKey: yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(this.organizationKey$),
                },
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(addSponsorshipDialogRef.closed);
            yield this.loadSponsorships();
        });
    }
    removeSponsorship(sponsorship) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.doRevokeSponsorship(sponsorship);
            }
            catch (e) {
                this.logService.error(e);
            }
        });
    }
    get isSelfHosted() {
        return this.platformUtilsService.isSelfHost();
    }
    resendEmail(sponsorship) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationSponsorshipApiService.postResendSponsorshipOffer(this.organizationId, sponsorship.friendlyName);
            this.toastService.showToast({
                variant: "success",
                title: undefined,
                message: this.i18nService.t("emailSent"),
            });
        });
    }
    doRevokeSponsorship(sponsorship) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = sponsorship.validUntil
                ? this.i18nService.t("revokeActiveSponsorshipConfirmation", sponsorship.friendlyName, (0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.formatDate)(sponsorship.validUntil, "MM/dd/yyyy", this.locale))
                : this.i18nService.t("updatedRevokeSponsorshipConfirmationForSentSponsorship", sponsorship.friendlyName);
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: `${this.i18nService.t("removeSponsorship")}?`,
                content,
                acceptButtonText: { key: "remove" },
                type: "warning",
            });
            if (!confirmed) {
                return;
            }
            yield this.organizationSponsorshipApiService.deleteAdminInitiatedRevokeSponsorship(this.organizationId, sponsorship.friendlyName);
            this.toastService.showToast({
                variant: "success",
                title: undefined,
                message: this.i18nService.t("reclaimedFreePlan"),
            });
            yield this.loadSponsorships();
        });
    }
    getStatus(selfHosted, toDelete, validUntil, lastSyncDate, locale = "") {
        /*
         * Possible Statuses:
         * Requested (self-hosted only)
         * Sent
         * Active
         * RequestRevoke
         * RevokeWhenExpired
         */
        if (toDelete && validUntil) {
            // They want to delete but there is a valid until date which means there is an active sponsorship
            return {
                statusMessage: this.i18nService.t("revokeWhenExpired", (0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.formatDate)(validUntil, "MM/dd/yyyy", locale)),
                statusClass: "tw-text-danger",
            };
        }
        if (toDelete) {
            // They want to delete and we don't have a valid until date so we can
            // this should only happen on a self-hosted install
            return {
                statusMessage: this.i18nService.t("requestRemoved"),
                statusClass: "tw-text-danger",
            };
        }
        if (validUntil) {
            // They don't want to delete and they have a valid until date
            // that means they are actively sponsoring someone
            return {
                statusMessage: this.i18nService.t("active"),
                statusClass: "tw-text-success",
            };
        }
        if (selfHosted && lastSyncDate) {
            // We are on a self-hosted install and it has been synced but we have not gotten
            // a valid until date so we can't know if they are actively sponsoring someone
            return {
                statusMessage: this.i18nService.t("sent"),
                statusClass: "tw-text-success",
            };
        }
        if (!selfHosted) {
            // We are in cloud and all other status checks have been false therefore we have
            // sent the request but it hasn't been accepted yet
            return {
                statusMessage: this.i18nService.t("sent"),
                statusClass: "tw-text-success",
            };
        }
        // We are on a self-hosted install and we have not synced yet
        return {
            statusMessage: this.i18nService.t("requested"),
            statusClass: "tw-text-success",
        };
    }
}
FreeBitwardenFamiliesComponent.ɵfac = function FreeBitwardenFamiliesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FreeBitwardenFamiliesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_20__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_key_management_crypto_abstractions_encrypt_service__WEBPACK_IMPORTED_MODULE_3__.EncryptService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_9__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_7__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_6__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_organizations_organization_sponsorship_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationSponsorshipApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_bitwarden_common_platform_state__WEBPACK_IMPORTED_MODULE_8__.StateProvider)); };
FreeBitwardenFamiliesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: FreeBitwardenFamiliesComponent, selectors: [["app-free-bitwarden-families"]], standalone: false, decls: 27, vars: 21, consts: [["appListDropdown", ""], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "click"], ["aria-hidden", "true", 1, "bwi", "bwi-plus", "bwi-fw"], ["bitTypography", "body1"], [1, "tw-list-outside"], ["bitTypography", "h2", 1, ""], [1, "tw-my-5", "tw-py-5", "tw-flex", "tw-flex-col", "tw-items-center"], ["bitTypography", "body2"], [1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["header", ""], ["bitCell", ""], ["body", "", "alignContent", "middle"], [1, "tw-mt-0"], ["bitRow", ""], ["type", "button", "bitIconButton", "bwi-ellipsis-v", "buttonType", "main", 3, "bitMenuTriggerFor", "label"], ["type", "button", "bitMenuItem", ""], [1, "tw-m-0"], ["type", "button", "bitMenuItem", "", 3, "click"], ["aria-hidden", "true", 1, "bwi", "bwi-close", "tw-text-danger"], [1, "tw-text-danger", "tw-pl-1"], ["aria-hidden", "true", 1, "bwi", "bwi-envelope"], ["src", "./../../../images/search.svg", "alt", "Search", 1, "tw-w-32"], ["bitTypography", "h4", 1, "tw-mt-3"]], template: function FreeBitwardenFamiliesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-header")(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function FreeBitwardenFamiliesComponent_Template_button_click_1_listener() { return ctx.addSponsorship(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "bit-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "ul", 4)(14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](22, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, FreeBitwardenFamiliesComponent_Conditional_23_Template, 6, 6, "ng-container")(24, FreeBitwardenFamiliesComponent_Conditional_24_Template, 16, 9, "ng-container")(25, FreeBitwardenFamiliesComponent_Conditional_25_Template, 8, 6, "div", 6)(26, FreeBitwardenFamiliesComponent_Conditional_26_Template, 3, 3, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 9, "addSponsorship"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 11, "sponsorshipFreeBitwardenFamilies"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 13, "sponsoredFamiliesIncludeMessage"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 15, "sponsoredFamiliesPremiumAccess"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 17, "sponsoredFamiliesSharedCollectionsForFamilyMembers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](22, 19, "sponsoredBitwardenFamilies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](ctx.loading() ? 23 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](!ctx.loading() && (ctx.sponsoredFamilies == null ? null : ctx.sponsoredFamilies.length) > 0 ? 24 : !ctx.loading() ? 25 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵconditional"](!ctx.loading() && ctx.sponsoredFamilies.length > 0 ? 26 : -1);
    } }, dependencies: [_libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_22__.ButtonComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_23__.ContainerComponent, _libs_components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_24__.BitIconButtonComponent, _libs_components_src_menu_menu_component__WEBPACK_IMPORTED_MODULE_25__.MenuComponent, _libs_components_src_menu_menu_trigger_for_directive__WEBPACK_IMPORTED_MODULE_26__.MenuTriggerForDirective, _libs_components_src_menu_menu_item_directive__WEBPACK_IMPORTED_MODULE_27__.MenuItemDirective, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_28__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_29__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_30__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_31__.TypographyDirective, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_11__.WebHeaderComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_12__.I18nPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_admin-console_organizations_members_index_ts.cd06f444eab16a0fa989.js.map