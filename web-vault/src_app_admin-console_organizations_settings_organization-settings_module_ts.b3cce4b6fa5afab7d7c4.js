"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_admin-console_organizations_settings_organization-settings_module_ts"],{

/***/ "../../libs/common/src/admin-console/models/request/organization-collection-management-update.request.ts":
/*!***************************************************************************************************************!*\
  !*** ../../libs/common/src/admin-console/models/request/organization-collection-management-update.request.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationCollectionManagementUpdateRequest: () => (/* binding */ OrganizationCollectionManagementUpdateRequest)
/* harmony export */ });
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
class OrganizationCollectionManagementUpdateRequest {
}


/***/ }),

/***/ "../../libs/common/src/admin-console/models/request/organization-update.request.ts":
/*!*****************************************************************************************!*\
  !*** ../../libs/common/src/admin-console/models/request/organization-update.request.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationUpdateRequest: () => (/* binding */ OrganizationUpdateRequest)
/* harmony export */ });
class OrganizationUpdateRequest {
}


/***/ }),

/***/ "./src/app/admin-console/organizations/settings/account.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin-console/organizations/settings/account.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_request_organization_collection_management_update_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/request/organization-collection-management-update.request */ "../../libs/common/src/admin-console/models/request/organization-collection-management-update.request.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_request_organization_keys_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/request/organization-keys.request */ "../../libs/common/src/admin-console/models/request/organization-keys.request.ts");
/* harmony import */ var _bitwarden_common_admin_console_models_request_organization_update_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/admin-console/models/request/organization-update.request */ "../../libs/common/src/admin-console/models/request/organization-update.request.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _bitwarden_key_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/key-management */ "../../libs/key-management/src/index.ts");
/* harmony import */ var _auth_settings_security_api_key_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../auth/settings/security/api-key.component */ "./src/app/auth/settings/security/api-key.component.ts");
/* harmony import */ var _vault_settings_purge_vault_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../vault/settings/purge-vault.component */ "./src/app/vault/settings/purge-vault.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components */ "./src/app/admin-console/organizations/settings/components/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../../libs/components/src/avatar/avatar.component */ "../../libs/components/src/avatar/avatar.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../../libs/components/src/checkbox/checkbox.component */ "../../libs/components/src/checkbox/checkbox.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/form-control.component */ "../../libs/components/src/form-control/form-control.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _shared_components_account_fingerprint_account_fingerprint_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/account-fingerprint/account-fingerprint.component */ "./src/app/shared/components/account-fingerprint/account-fingerprint.component.ts");
/* harmony import */ var _auth_settings_account_danger_zone_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../auth/settings/account/danger-zone.component */ "./src/app/auth/settings/account/danger-zone.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














































function AccountComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function AccountComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "form", 6)(1, "div", 7)(2, "div")(3, "bit-form-field")(4, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "bit-form-field")(9, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](14, "bit-avatar", 10)(15, "app-account-fingerprint", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitSubmit", ctx_r0.submit)("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 10, "organizationName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 12, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("text", ctx_r0.org.name)("id", ctx_r0.org.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("fingerprintLabel", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 14, "yourOrganizationsFingerprint"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("fingerprintMaterial", ctx_r0.organizationId)("publicKeyBuffer", ctx_r0.publicKeyBuffer);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 16, "save"), " ");
} }
function AccountComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 16)(11, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AccountComponent_ng_container_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r0.viewApiKey()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AccountComponent_ng_container_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r2); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r0.rotateApiKey()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 5, "apiKey"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "apiKeyDesc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 9, "learnMoreAboutApi"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 11, "viewApiKey"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 13, "rotateApiKey"), " ");
} }
function AccountComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "form", 6)(1, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "bit-form-control")(8, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "bit-form-control")(13, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "bit-form-control")(18, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "bit-form-control")(23, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](25, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](28, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](30, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](31, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](34, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitSubmit", ctx_r0.submitCollectionManagement)("formGroup", ctx_r0.collectionManagementFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 11, "collectionManagement"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 13, "collectionManagementDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 15, "allowAdminAccessToAllCollectionItemsDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 17, "restrictCollectionCreationDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](20, 19, "restrictCollectionDeletionDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](25, 21, "restrictItemDeletionDescriptionStart"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](28, 23, "manageCollection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](30, 25, "restrictItemDeletionDescriptionEnd"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](34, 27, "save"), " ");
} }
class AccountComponent {
    constructor(i18nService, route, platformUtilsService, keyService, router, accountService, organizationService, organizationApiService, dialogService, formBuilder, toastService) {
        this.i18nService = i18nService;
        this.route = route;
        this.platformUtilsService = platformUtilsService;
        this.keyService = keyService;
        this.router = router;
        this.accountService = accountService;
        this.organizationService = organizationService;
        this.organizationApiService = organizationApiService;
        this.dialogService = dialogService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.selfHosted = false;
        this.canEditSubscription = true;
        this.loading = true;
        this.canUseApi = false;
        // FormGroup validators taken from server Organization domain object
        this.formGroup = this.formBuilder.group({
            orgName: this.formBuilder.control({ value: "", disabled: true }, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(50)],
                updateOn: "change",
            }),
            billingEmail: this.formBuilder.control({ value: "", disabled: true }, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.Validators.maxLength(256)] }),
        });
        this.collectionManagementFormGroup = this.formBuilder.group({
            limitCollectionCreation: this.formBuilder.control({ value: false, disabled: false }),
            limitCollectionDeletion: this.formBuilder.control({ value: false, disabled: false }),
            limitItemDeletion: this.formBuilder.control({ value: false, disabled: false }),
            allowAdminAccessToAllCollectionItems: this.formBuilder.control({
                value: false,
                disabled: false,
            }),
        });
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.formGroup.markAllAsTouched();
            if (this.formGroup.invalid) {
                return;
            }
            const request = new _bitwarden_common_admin_console_models_request_organization_update_request__WEBPACK_IMPORTED_MODULE_4__.OrganizationUpdateRequest();
            /*
             * When you disable a FormControl, it is removed from formGroup.values, so we have to use
             * the original value.
             * */
            request.name = this.formGroup.get("orgName").disabled
                ? this.org.name
                : this.formGroup.value.orgName;
            request.billingEmail = this.formGroup.get("billingEmail").disabled
                ? this.org.billingEmail
                : this.formGroup.value.billingEmail;
            // Backfill pub/priv key if necessary
            if (!this.org.hasPublicAndPrivateKeys) {
                const orgShareKey = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_6__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.switchMap)((userId) => this.keyService.orgKeys$(userId)), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.map)((orgKeys) => { var _a; return (_a = orgKeys[this.organizationId]) !== null && _a !== void 0 ? _a : null; })));
                const orgKeys = yield this.keyService.makeKeyPair(orgShareKey);
                request.keys = new _bitwarden_common_admin_console_models_request_organization_keys_request__WEBPACK_IMPORTED_MODULE_3__.OrganizationKeysRequest(orgKeys[0], orgKeys[1].encryptedString);
            }
            yield this.organizationApiService.save(this.organizationId, request);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("organizationUpdated"),
            });
        });
        this.submitCollectionManagement = () => __awaiter(this, void 0, void 0, function* () {
            const request = new _bitwarden_common_admin_console_models_request_organization_collection_management_update_request__WEBPACK_IMPORTED_MODULE_2__.OrganizationCollectionManagementUpdateRequest();
            request.limitCollectionCreation =
                this.collectionManagementFormGroup.value.limitCollectionCreation;
            request.limitCollectionDeletion =
                this.collectionManagementFormGroup.value.limitCollectionDeletion;
            request.allowAdminAccessToAllCollectionItems =
                this.collectionManagementFormGroup.value.allowAdminAccessToAllCollectionItems;
            request.limitItemDeletion = this.collectionManagementFormGroup.value.limitItemDeletion;
            yield this.organizationApiService.updateCollectionManagement(this.organizationId, request);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("updatedCollectionManagement"),
            });
        });
        this.purgeVault = () => __awaiter(this, void 0, void 0, function* () {
            const dialogRef = _vault_settings_purge_vault_component__WEBPACK_IMPORTED_MODULE_12__.PurgeVaultComponent.open(this.dialogService, {
                data: {
                    organizationId: this.organizationId,
                },
            });
            yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.lastValueFrom)(dialogRef.closed);
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.selfHosted = false; // set to false so we can rename organizations
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_6__.getUserId)(this.accountService.activeAccount$));
            this.route.params
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.switchMap)((params) => this.organizationService
                .organizations$(userId)
                .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.getOrganizationById)(params.organizationId))), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.switchMap)((organization) => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.combineLatest)([
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.of)(organization),
                    // OrganizationResponse for form population
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.from)(this.organizationApiService.get(organization.id)),
                    // Organization Public Key
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.from)(this.organizationApiService.getKeys(organization.id)),
                ]);
            }), (0,rxjs__WEBPACK_IMPORTED_MODULE_28__.takeUntil)(this.destroy$))
                .subscribe(([organization, orgResponse, orgKeys]) => {
                // Set domain level organization variables
                this.organizationId = organization.id;
                this.canEditSubscription = organization.canEditSubscription;
                this.canUseApi = organization.useApi;
                // Update disabled states - reactive forms prefers not using disabled attribute
                if (!this.selfHosted) {
                    this.formGroup.get("orgName").enable();
                    if (this.canEditSubscription) {
                        this.formGroup.get("billingEmail").enable();
                    }
                }
                // Org Response
                this.org = orgResponse;
                // Public Key Buffer for Org Fingerprint Generation
                this.publicKeyBuffer = _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_9__.Utils.fromB64ToArray(orgKeys === null || orgKeys === void 0 ? void 0 : orgKeys.publicKey);
                // Patch existing values
                this.formGroup.patchValue({
                    orgName: this.org.name,
                    billingEmail: this.org.billingEmail,
                });
                this.collectionManagementFormGroup.patchValue({
                    limitCollectionCreation: this.org.limitCollectionCreation,
                    limitCollectionDeletion: this.org.limitCollectionDeletion,
                    limitItemDeletion: this.org.limitItemDeletion,
                    allowAdminAccessToAllCollectionItems: this.org.allowAdminAccessToAllCollectionItems,
                });
                this.loading = false;
            });
        });
    }
    ngOnDestroy() {
        // You must first call .next() in order for the notifier to properly close subscriptions using takeUntil
        this.destroy$.next();
        this.destroy$.complete();
    }
    deleteOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            const dialog = (0,_components__WEBPACK_IMPORTED_MODULE_13__.openDeleteOrganizationDialog)(this.dialogService, {
                data: {
                    organizationId: this.organizationId,
                    requestType: "RegularDelete",
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.lastValueFrom)(dialog.closed);
            if (result === _components__WEBPACK_IMPORTED_MODULE_13__.DeleteOrganizationDialogResult.Deleted) {
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.router.navigate(["/"]);
            }
        });
    }
    viewApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _auth_settings_security_api_key_component__WEBPACK_IMPORTED_MODULE_11__.ApiKeyComponent.open(this.dialogService, {
                data: {
                    keyType: "organization",
                    entityId: this.organizationId,
                    postKey: this.organizationApiService.getOrCreateApiKey.bind(this.organizationApiService),
                    scope: "api.organization",
                    grantType: "client_credentials",
                    apiKeyTitle: "apiKey",
                    apiKeyWarning: "apiKeyWarning",
                    apiKeyDescription: "apiKeyDesc",
                },
            });
        });
    }
    rotateApiKey() {
        return __awaiter(this, void 0, void 0, function* () {
            yield _auth_settings_security_api_key_component__WEBPACK_IMPORTED_MODULE_11__.ApiKeyComponent.open(this.dialogService, {
                data: {
                    keyType: "organization",
                    isRotation: true,
                    entityId: this.organizationId,
                    postKey: this.organizationApiService.rotateApiKey.bind(this.organizationApiService),
                    scope: "api.organization",
                    grantType: "client_credentials",
                    apiKeyTitle: "apiKey",
                    apiKeyWarning: "apiKeyWarning",
                    apiKeyDescription: "apiKeyRotateDesc",
                },
            });
        });
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_7__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_8__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_key_management__WEBPACK_IMPORTED_MODULE_10__.KeyService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_30__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_31__.ToastService)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-org-account"]], standalone: false, decls: 13, vars: 11, consts: [[4, "ngIf"], [3, "bitSubmit", "formGroup", 4, "ngIf"], ["type", "button", "bitButton", "", "buttonType", "danger", 3, "click"], ["type", "button", "bitButton", "", "buttonType", "danger", 3, "bitAction"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [3, "bitSubmit", "formGroup"], [1, "tw-grid", "tw-grid-cols-2", "tw-gap-5"], ["bitInput", "", "id", "orgName", "type", "text", "formControlName", "orgName"], ["bitInput", "", "id", "billingEmail", "formControlName", "billingEmail", "type", "email"], ["size", "large", 3, "text", "id"], [3, "fingerprintMaterial", "publicKeyBuffer", "fingerprintLabel"], ["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"], ["bitTypography", "h1", 1, "tw-mt-16", "tw-pb-2.5"], ["bitTypography", "body1"], ["bitLink", "", "href", "https://docs.bitwarden.com", "target", "_blank", "rel", "noreferrer"], [1, "tw-flex", "tw-gap-2"], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "allowAdminAccessToAllCollectionItems"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "limitCollectionCreation"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "limitCollectionDeletion"], [1, "tw-italic"], ["type", "checkbox", "bitCheckbox", "", "formControlName", "limitItemDeletion"], ["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary", "id", "collectionManagementSubmitButton"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "bit-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AccountComponent_div_2_Template, 6, 6, "div", 0)(3, AccountComponent_form_3_Template, 20, 18, "form", 1)(4, AccountComponent_ng_container_4_Template, 17, 15, "ng-container", 0)(5, AccountComponent_form_5_Template, 35, 29, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "app-danger-zone")(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_7_listener() { return ctx.deleteOrganization(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.org && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.canUseApi);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.org && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 7, "deleteOrganization"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("bitAction", ctx.purgeVault);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 9, "purgeVault"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_33__.BitActionDirective, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_34__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_35__.BitSubmitDirective, _libs_components_src_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_36__.AvatarComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_37__.ButtonComponent, _libs_components_src_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_38__.CheckboxComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_39__.ContainerComponent, _libs_components_src_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_40__.FormControlComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_41__.BitLabel, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_42__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_43__.BitFormFieldComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_44__.AnchorLinkDirective, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_45__.TypographyDirective, _shared_components_account_fingerprint_account_fingerprint_component__WEBPACK_IMPORTED_MODULE_14__.AccountFingerprintComponent, _auth_settings_account_danger_zone_component__WEBPACK_IMPORTED_MODULE_15__.DangerZoneComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_16__.WebHeaderComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_17__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/admin-console/organizations/settings/organization-settings-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/settings/organization-settings-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationSettingsRoutingModule: () => (/* binding */ OrganizationSettingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../organizations/guards/org-permissions.guard */ "./src/app/admin-console/organizations/guards/org-permissions.guard.ts");
/* harmony import */ var _organizations_guards_org_redirect_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organizations/guards/org-redirect.guard */ "./src/app/admin-console/organizations/guards/org-redirect.guard.ts");
/* harmony import */ var _organizations_policies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organizations/policies */ "./src/app/admin-console/organizations/policies/index.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ "./src/app/admin-console/organizations/settings/account.component.ts");
/* harmony import */ var _two_factor_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./two-factor-setup.component */ "./src/app/admin-console/organizations/settings/two-factor-setup.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");









const routes = [
    {
        path: "",
        canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)(_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.canAccessSettingsTab)],
        children: [
            {
                path: "",
                pathMatch: "full",
                canActivate: [(0,_organizations_guards_org_redirect_guard__WEBPACK_IMPORTED_MODULE_2__.organizationRedirectGuard)(getSettingsRoute)],
                children: [], // This is required to make the auto redirect work,
            },
            {
                path: "account",
                component: _account_component__WEBPACK_IMPORTED_MODULE_4__.AccountComponent,
                canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)((o) => o.isOwner)],
                data: {
                    titleId: "organizationInfo",
                },
            },
            {
                path: "two-factor",
                component: _two_factor_setup_component__WEBPACK_IMPORTED_MODULE_5__.TwoFactorSetupComponent,
                canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)((o) => o.use2fa && o.isOwner)],
                data: {
                    titleId: "twoStepLogin",
                },
            },
            {
                path: "policies",
                component: _organizations_policies__WEBPACK_IMPORTED_MODULE_3__.PoliciesComponent,
                canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)((org) => org.canManagePolicies)],
                data: {
                    titleId: "policies",
                },
            },
            {
                path: "tools",
                children: [
                    {
                        path: "import",
                        loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_tools_import_org-import_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../tools/import/org-import.component */ "./src/app/tools/import/org-import.component.ts")).then((mod) => mod.OrgImportComponent),
                        canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)((org) => org.canAccessImport)],
                        data: {
                            titleId: "importData",
                        },
                    },
                    {
                        path: "export",
                        loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("libs_tools_export_vault-export_vault-export-ui_src_index_ts"), __webpack_require__.e("src_app_tools_vault-export_org-vault-export_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../tools/vault-export/org-vault-export.component */ "./src/app/tools/vault-export/org-vault-export.component.ts")).then((mod) => mod.OrganizationVaultExportComponent),
                        canActivate: [(0,_organizations_guards_org_permissions_guard__WEBPACK_IMPORTED_MODULE_1__.organizationPermissionsGuard)((org) => org.canAccessExport)],
                        data: {
                            titleId: "exportVault",
                        },
                    },
                ],
            },
        ],
    },
];
function getSettingsRoute(organization) {
    if (organization.isOwner) {
        return "account";
    }
    if (organization.canManagePolicies) {
        return "policies";
    }
    if (organization.canAccessImport) {
        return ["tools", "import"];
    }
    if (organization.canManageSso) {
        return "sso";
    }
    if (organization.canManageScim) {
        return "scim";
    }
    if (organization.canManageDeviceApprovals) {
        return "device-approvals";
    }
    return "/";
}
class OrganizationSettingsRoutingModule {
}
OrganizationSettingsRoutingModule.ɵfac = function OrganizationSettingsRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationSettingsRoutingModule)(); };
OrganizationSettingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OrganizationSettingsRoutingModule });
OrganizationSettingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/settings/organization-settings.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/settings/organization-settings.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationSettingsModule: () => (/* binding */ OrganizationSettingsModule)
/* harmony export */ });
/* harmony import */ var _bitwarden_angular_billing_components_premium_badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/angular/billing/components/premium-badge */ "../../libs/angular/src/billing/components/premium-badge/index.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/item/item.module.ts");
/* harmony import */ var _auth_settings_account_danger_zone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../auth/settings/account/danger-zone.component */ "./src/app/auth/settings/account/danger-zone.component.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_components_account_fingerprint_account_fingerprint_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/account-fingerprint/account-fingerprint.component */ "./src/app/shared/components/account-fingerprint/account-fingerprint.component.ts");
/* harmony import */ var _organization_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization-settings-routing.module */ "./src/app/admin-console/organizations/settings/organization-settings-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");








class OrganizationSettingsModule {
}
OrganizationSettingsModule.ɵfac = function OrganizationSettingsModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationSettingsModule)(); };
OrganizationSettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OrganizationSettingsModule });
OrganizationSettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _organization_settings_routing_module__WEBPACK_IMPORTED_MODULE_5__.OrganizationSettingsRoutingModule,
        _shared_components_account_fingerprint_account_fingerprint_component__WEBPACK_IMPORTED_MODULE_4__.AccountFingerprintComponent,
        _auth_settings_account_danger_zone_component__WEBPACK_IMPORTED_MODULE_1__.DangerZoneComponent,
        _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _bitwarden_angular_billing_components_premium_badge__WEBPACK_IMPORTED_MODULE_0__.PremiumBadgeComponent,
        _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.ItemModule] });


/***/ }),

/***/ "./src/app/admin-console/organizations/settings/two-factor-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin-console/organizations/settings/two-factor-setup.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TwoFactorSetupComponent: () => (/* binding */ TwoFactorSetupComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/dist/esm5/internal/operators/first.js");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/policy/policy.service.abstraction */ "../../libs/common/src/admin-console/abstractions/policy/policy.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_enums_two_factor_provider_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/auth/enums/two-factor-provider-type */ "../../libs/common/src/auth/enums/two-factor-provider-type.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_two_factor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/auth/two-factor */ "../../libs/common/src/auth/two-factor/index.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/account/billing-account-profile-state.service */ "../../libs/common/src/billing/abstractions/account/billing-account-profile-state.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_messaging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/messaging.service */ "../../libs/common/src/platform/abstractions/messaging.service.ts");
/* harmony import */ var _auth_settings_two_factor_two_factor_setup_duo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../auth/settings/two-factor/two-factor-setup-duo.component */ "./src/app/auth/settings/two-factor/two-factor-setup-duo.component.ts");
/* harmony import */ var _auth_settings_two_factor_two_factor_setup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../auth/settings/two-factor/two-factor-setup.component */ "./src/app/auth/settings/two-factor/two-factor-setup.component.ts");
/* harmony import */ var _auth_settings_two_factor_two_factor_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../auth/settings/two-factor/two-factor-verify.component */ "./src/app/auth/settings/two-factor/two-factor-verify.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_auth_components_two_factor_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/auth/components/two-factor-icon.component */ "../../libs/angular/src/auth/components/two-factor-icon.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _libs_angular_src_billing_components_premium_badge_premium_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/billing/components/premium-badge/premium-badge.component */ "../../libs/angular/src/billing/components/premium-badge/premium-badge.component.ts");
/* harmony import */ var _libs_components_src_item_item_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../libs/components/src/item/item.component */ "../../libs/components/src/item/item.component.ts");
/* harmony import */ var _libs_components_src_item_item_content_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../../libs/components/src/item/item-content.component */ "../../libs/components/src/item/item-content.component.ts");
/* harmony import */ var _libs_components_src_item_item_action_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../../libs/components/src/item/item-action.component */ "../../libs/components/src/item/item-action.component.ts");
/* harmony import */ var _libs_components_src_item_item_group_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../../libs/components/src/item/item-group.component */ "../../libs/components/src/item/item-group.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









































const _c0 = a0 => ({ "mt-5": a0 });
function TwoFactorSetupComponent_app_header_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-header");
} }
function TwoFactorSetupComponent_div_2_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "twoStepLogin"));
} }
function TwoFactorSetupComponent_div_2_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "twoStepLoginEnforcement"));
} }
function TwoFactorSetupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, TwoFactorSetupComponent_div_2_h1_1_Template, 3, 3, "h1", 1)(2, TwoFactorSetupComponent_div_2_h1_2_Template, 3, 3, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r0.organizationId || !ctx_r0.isEnterpriseOrg);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.organizationId && ctx_r0.isEnterpriseOrg);
} }
function TwoFactorSetupComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "twoStepLoginDesc"));
} }
function TwoFactorSetupComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 4, "twoStepLoginEnterpriseDescStart"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "twoStepLoginPolicy"), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 8, "twoStepLoginOrganizationDuoDesc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 10, "twoStepLoginOrganizationSsoDesc"));
} }
function TwoFactorSetupComponent_ng_container_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "i18n");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](1, 2, "twoStepLoginTeamsDesc"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 4, "twoStepLoginOrganizationDuoDesc"), " ");
} }
function TwoFactorSetupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TwoFactorSetupComponent_ng_container_4_ng_container_2_Template, 14, 12, "ng-container", 7)(3, TwoFactorSetupComponent_ng_container_4_ng_template_3_Template, 5, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const teamsDescription_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.isEnterpriseOrg)("ngIfElse", teamsDescription_r2);
} }
function TwoFactorSetupComponent_bit_callout_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "bit-callout", 9)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TwoFactorSetupComponent_bit_callout_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.recoveryCode()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r0.recoveryCodeWarningMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 2, "viewRecoveryCode"), " ");
} }
function TwoFactorSetupComponent_small_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function TwoFactorSetupComponent_bit_callout_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "bit-callout", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "twoStepLoginPolicyUserWarning"), " ");
} }
function TwoFactorSetupComponent_bit_item_13_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "enabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 4, "enabled"));
} }
function TwoFactorSetupComponent_bit_item_13_app_premium_badge_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "app-premium-badge", 23);
} }
function TwoFactorSetupComponent_bit_item_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "bit-item")(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "auth-two-factor-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 15)(4, "h3", 16)(5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, TwoFactorSetupComponent_bit_item_13_ng_container_7_Template, 6, 6, "ng-container", 1)(8, TwoFactorSetupComponent_bit_item_13_app_premium_badge_8_Template, 1, 0, "app-premium-badge", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "bit-item-action", 20)(12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function TwoFactorSetupComponent_bit_item_13_Template_button_click_12_listener() { const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r4).$implicit; const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r0.manage(p_r5.type)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵclassMapInterpolate1"]("tw-py-4 providers-2fa-", p_r5.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("provider", p_r5.type)("name", p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](p_r5.enabled || p_r5.premium ? "display:inline-block" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", p_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", p_r5.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", p_r5.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](p_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 13, ctx_r0.canAccessPremium$) && p_r5.premium);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](15, 15, "manage"), " ");
} }
class TwoFactorSetupComponent extends _auth_settings_two_factor_two_factor_setup_component__WEBPACK_IMPORTED_MODULE_11__.TwoFactorSetupComponent {
    constructor(dialogService, twoFactorApiService, messagingService, policyService, route, organizationService, billingAccountProfileStateService, accountService, configService, i18nService) {
        super(dialogService, twoFactorApiService, messagingService, policyService, billingAccountProfileStateService, accountService, configService, i18nService);
        this.route = route;
        this.organizationService = organizationService;
        this.accountService = accountService;
        this.tabbedHeader = false;
    }
    ngOnInit() {
        const _super = Object.create(null, {
            ngOnInit: { get: () => super.ngOnInit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_4__.getUserId)(this.accountService.activeAccount$));
            this.route.params
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.concatMap)((params) => this.organizationService
                .organizations$(userId)
                .pipe((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.getOrganizationById)(params.organizationId))
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)((organization) => ({ params, organization })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)((mapResponse) => __awaiter(this, void 0, void 0, function* () {
                this.organizationId = mapResponse.params.organizationId;
                this.organization = mapResponse.organization;
            })), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.concatMap)(() => __awaiter(this, void 0, void 0, function* () { return yield _super.ngOnInit.call(this); })), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.destroy$))
                .subscribe();
        });
    }
    manage(type) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            // clear any existing subscriptions before creating a new one
            (_a = this.twoFactorSetupSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
            switch (type) {
                case _bitwarden_common_auth_enums_two_factor_provider_type__WEBPACK_IMPORTED_MODULE_3__.TwoFactorProviderType.OrganizationDuo: {
                    const twoFactorVerifyDialogRef = _auth_settings_two_factor_two_factor_verify_component__WEBPACK_IMPORTED_MODULE_12__.TwoFactorVerifyComponent.open(this.dialogService, {
                        data: { type: type, organizationId: this.organizationId },
                    });
                    const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.lastValueFrom)(twoFactorVerifyDialogRef.closed);
                    if (!result) {
                        return;
                    }
                    const duoComp = _auth_settings_two_factor_two_factor_setup_duo_component__WEBPACK_IMPORTED_MODULE_10__.TwoFactorSetupDuoComponent.open(this.dialogService, {
                        data: {
                            authResponse: result,
                            organizationId: this.organizationId,
                        },
                    });
                    this.twoFactorSetupSubscription = duoComp.componentInstance.onChangeStatus
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.takeUntil)(this.destroy$))
                        .subscribe((enabled) => {
                        duoComp.close();
                        this.updateStatus(enabled, _bitwarden_common_auth_enums_two_factor_provider_type__WEBPACK_IMPORTED_MODULE_3__.TwoFactorProviderType.OrganizationDuo);
                    });
                    break;
                }
                default:
                    break;
            }
        });
    }
    getTwoFactorProviders() {
        return this.twoFactorApiService.getTwoFactorOrganizationProviders(this.organizationId);
    }
    filterProvider(type) {
        return type !== _bitwarden_common_auth_enums_two_factor_provider_type__WEBPACK_IMPORTED_MODULE_3__.TwoFactorProviderType.OrganizationDuo;
    }
}
TwoFactorSetupComponent.ɵfac = function TwoFactorSetupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TwoFactorSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_25__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_auth_two_factor__WEBPACK_IMPORTED_MODULE_5__.TwoFactorApiService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_messaging_service__WEBPACK_IMPORTED_MODULE_9__.MessagingService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_6__.BillingAccountProfileStateService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_8__.I18nService)); };
TwoFactorSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: TwoFactorSetupComponent, selectors: [["app-two-factor-setup"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 14, vars: 17, consts: [["teamsDescription", ""], [4, "ngIf"], ["class", "tw-mt-6 tw-mb-2 tw-pb-2.5", 4, "ngIf"], ["type", "warning", 4, "ngIf"], [3, "ngClass"], [3, "class", 4, "ngFor", "ngForOf"], [1, "tw-mt-6", "tw-mb-2", "tw-pb-2.5"], [4, "ngIf", "ngIfElse"], ["bitLink", "", "routerLink", "../policies"], ["type", "warning"], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "bwi-fw", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["slot", "start", 1, "tw-min-w-[120px]", "tw-flex", "tw-justify-center"], [1, "tw-flex", "tw-items-center", 3, "provider", "name"], ["bit-item-content", "", 1, "tw-px-4"], [1, "tw-mb-0"], [1, "tw-font-semibold", "tw-text-base"], ["class", "tw-ml-2", 4, "ngIf"], [1, "tw-mt-2", "tw-text-wrap"], ["slot", "end"], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click", "disabled"], ["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success-600", "bwi-fw", "tw-ml-2", 3, "title"], [1, "tw-ml-2"]], template: function TwoFactorSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, TwoFactorSetupComponent_app_header_0_Template, 1, 0, "app-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "bit-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, TwoFactorSetupComponent_div_2_Template, 3, 2, "div", 2)(3, TwoFactorSetupComponent_p_3_Template, 3, 3, "p", 1)(4, TwoFactorSetupComponent_ng_container_4_Template, 5, 2, "ng-container", 1)(5, TwoFactorSetupComponent_bit_callout_5_Template, 6, 4, "bit-callout", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, TwoFactorSetupComponent_small_9_Template, 6, 6, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, TwoFactorSetupComponent_bit_callout_10_Template, 3, 3, "bit-callout", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "bit-item-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, TwoFactorSetupComponent_bit_item_13_Template, 16, 17, "bit-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.organizationId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.organizationId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.organizationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.organizationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.organizationId);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](15, _c0, !ctx.organizationId));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 11, "providers"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showPolicyWarning);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("aria-label", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 13, "providers"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.providers);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterLink, _libs_angular_src_auth_components_two_factor_icon_component__WEBPACK_IMPORTED_MODULE_13__.TwoFactorIconComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_29__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_30__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_31__.ContainerComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_32__.AnchorLinkDirective, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_14__.WebHeaderComponent, _libs_angular_src_billing_components_premium_badge_premium_badge_component__WEBPACK_IMPORTED_MODULE_15__.PremiumBadgeComponent, _libs_components_src_item_item_component__WEBPACK_IMPORTED_MODULE_33__.ItemComponent, _libs_components_src_item_item_content_component__WEBPACK_IMPORTED_MODULE_34__.ItemContentComponent, _libs_components_src_item_item_action_component__WEBPACK_IMPORTED_MODULE_35__.ItemActionComponent, _libs_components_src_item_item_group_component__WEBPACK_IMPORTED_MODULE_36__.ItemGroupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_16__.I18nPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_admin-console_organizations_settings_organization-settings_module_ts.b3cce4b6fa5afab7d7c4.js.map