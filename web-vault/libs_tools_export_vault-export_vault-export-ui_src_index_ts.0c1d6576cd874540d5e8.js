"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["libs_tools_export_vault-export_vault-export-ui_src_index_ts"],{

/***/ "../../libs/tools/export/vault-export/vault-export-ui/src/components/export-scope-callout.component.ts":
/*!*************************************************************************************************************!*\
  !*** ../../libs/tools/export/vault-export/vault-export-ui/src/components/export-scope-callout.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportScopeCalloutComponent: () => (/* binding */ ExportScopeCalloutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/angular/jslib.module */ "../../libs/angular/src/jslib.module.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/misc/rxjs-operators */ "../../libs/common/src/platform/misc/rxjs-operators.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/callout/callout.module.ts");
/* harmony import */ var _angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
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















function ExportScopeCalloutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "bit-callout", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r0.scopeConfig.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 4, ctx_r0.scopeConfig.description, ctx_r0.scopeConfig.scopeIdentifier), " ");
} }
class ExportScopeCalloutComponent {
    constructor(organizationService, accountService) {
        this.organizationService = organizationService;
        this.accountService = accountService;
        this.show = false;
        /* Optional OrganizationId, if not provided, it will display individual vault export message */
        this.organizationId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)();
        /* Optional export format, determines which individual export description to display */
        this.exportFormat = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)();
        /* The description key to use for organizational exports */
        this.orgExportDescription = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)();
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.effect)(() => __awaiter(this, void 0, void 0, function* () {
            this.show = false;
            yield this.getScopeMessage(this.organizationId(), this.exportFormat(), this.orgExportDescription());
            this.show = true;
        }));
    }
    getScopeMessage(organizationId, exportFormat, orgExportDescription) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__.getUserId)(this.accountService.activeAccount$));
            if (organizationId) {
                // exporting from organizational vault
                const org = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(this.organizationService.organizations$(userId).pipe((0,_bitwarden_common_platform_misc_rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.getById)(organizationId)));
                this.scopeConfig = {
                    title: "exportingOrganizationVaultTitle",
                    description: orgExportDescription,
                    scopeIdentifier: (_a = org === null || org === void 0 ? void 0 : org.name) !== null && _a !== void 0 ? _a : "",
                };
                return;
            }
            // exporting from individual vault
            this.scopeConfig = {
                title: "exportingPersonalVaultTitle",
                description: exportFormat === "zip"
                    ? "exportingIndividualVaultWithAttachmentsDescription"
                    : "exportingIndividualVaultDescription",
                scopeIdentifier: (_b = (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)((a) => a === null || a === void 0 ? void 0 : a.email))))) !== null && _b !== void 0 ? _b : "",
            };
        });
    }
}
ExportScopeCalloutComponent.ɵfac = function ExportScopeCalloutComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExportScopeCalloutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService)); };
ExportScopeCalloutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ExportScopeCalloutComponent, selectors: [["tools-export-scope-callout"]], inputs: { organizationId: [1, "organizationId"], exportFormat: [1, "exportFormat"], orgExportDescription: [1, "orgExportDescription"] }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "info", 3, "title"]], template: function ExportScopeCalloutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ExportScopeCalloutComponent_ng_container_0_Template, 5, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.show);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_0__.JslibModule, _angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__.I18nPipe, _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__.CalloutModule, _components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_11__.CalloutComponent], encapsulation: 2 });


/***/ }),

/***/ "../../libs/tools/export/vault-export/vault-export-ui/src/components/export.component.ts":
/*!***********************************************************************************************!*\
  !*** ../../libs/tools/export/vault-export/vault-export-ui/src/components/export.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportComponent: () => (/* binding */ ExportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/Subject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/startWith.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/angular/jslib.module */ "../../libs/angular/src/jslib.module.ts");
/* harmony import */ var _bitwarden_angular_tools_password_strength_password_strength_v2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/angular/tools/password-strength/password-strength-v2.component */ "../../libs/angular/src/tools/password-strength/password-strength-v2.component.ts");
/* harmony import */ var _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/auth/angular */ "../../libs/auth/src/angular/index.ts");
/* harmony import */ var _bitwarden_common_abstractions_event_event_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/abstractions/event/event-collection.service */ "../../libs/common/src/abstractions/event/event-collection.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/policy/policy.service.abstraction */ "../../libs/common/src/admin-console/abstractions/policy/policy.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/admin-console/enums */ "../../libs/common/src/admin-console/enums/index.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/common/enums */ "../../libs/common/src/enums/index.ts");
/* harmony import */ var _bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/common/enums/feature-flag.enum */ "../../libs/common/src/enums/feature-flag.enum.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/file-download/file-download.service */ "../../libs/common/src/platform/abstractions/file-download/file-download.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_misc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @bitwarden/common/platform/misc */ "../../libs/common/src/platform/misc/index.ts");
/* harmony import */ var _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @bitwarden/common/platform/misc/utils */ "../../libs/common/src/platform/misc/utils.ts");
/* harmony import */ var _bitwarden_common_tools_rx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bitwarden/common/tools/rx */ "../../libs/common/src/tools/rx.ts");
/* harmony import */ var _bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/common/types/guid */ "../../libs/common/src/types/guid.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../../../../components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/form-field/form-field.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/async-actions/async-actions.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/button/button.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/icon-button/icon-button.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/select/select.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/callout/callout.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/radio-button/radio-button.module.ts");
/* harmony import */ var _bitwarden_generator_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/generator-components */ "../../libs/tools/generator/components/src/index.ts");
/* harmony import */ var _bitwarden_generator_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @bitwarden/generator-core */ "../../libs/tools/generator/core/src/index.ts");
/* harmony import */ var _bitwarden_vault_export_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @bitwarden/vault-export-core */ "../../libs/tools/export/vault-export/vault-export-core/src/index.ts");
/* harmony import */ var _enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../enums/encrypted-export-type.enum */ "../../libs/tools/export/vault-export/vault-export-ui/src/enums/encrypted-export-type.enum.ts");
/* harmony import */ var _export_scope_callout_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./export-scope-callout.component */ "../../libs/tools/export/vault-export/vault-export-ui/src/components/export-scope-callout.component.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../angular/src/directives/stop-click.directive */ "../../libs/angular/src/directives/stop-click.directive.ts");
/* harmony import */ var _components_src_copy_click_copy_click_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../../../../components/src/copy-click/copy-click.directive */ "../../libs/components/src/copy-click/copy-click.directive.ts");
/* harmony import */ var _angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../../../../components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../../../../components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../../../../components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../../../../../components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _components_src_form_field_password_input_toggle_directive__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../../../../../components/src/form-field/password-input-toggle.directive */ "../../libs/components/src/form-field/password-input-toggle.directive.ts");
/* harmony import */ var _components_src_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../../../../../components/src/form-field/suffix.directive */ "../../libs/components/src/form-field/suffix.directive.ts");
/* harmony import */ var _components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../../../../components/src/icon-button/icon-button.component */ "../../libs/components/src/icon-button/icon-button.component.ts");
/* harmony import */ var _components_src_select_select_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../../../../../components/src/select/select.component */ "../../libs/components/src/select/select.component.ts");
/* harmony import */ var _components_src_select_option_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../../../../../components/src/select/option.component */ "../../libs/components/src/select/option.component.ts");
/* harmony import */ var _components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../../../../../components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _components_src_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../../../../../components/src/radio-button/radio-button.component */ "../../libs/components/src/radio-button/radio-button.component.ts");
/* harmony import */ var _components_src_radio_button_radio_group_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../../../../../components/src/radio-button/radio-group.component */ "../../libs/components/src/radio-button/radio-group.component.ts");
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

































































function ExportComponent_bit_callout_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "bit-callout", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](1, 2, "vaultExportDisabled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](3, 4, "personalVaultExportPolicyInEffect"), "\n");
} }
function ExportComponent_ng_container_4_bit_form_field_1_bit_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "bit-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](1, "i18n");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](1, 1, "myVault"));
} }
function ExportComponent_ng_container_4_bit_form_field_1_bit_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "bit-option", 11);
} if (rf & 2) {
    const o_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", o_r1.id)("label", o_r1.name);
} }
function ExportComponent_ng_container_4_bit_form_field_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "bit-form-field")(1, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "bit-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](5, ExportComponent_ng_container_4_bit_form_field_1_bit_option_5_Template, 2, 3, "bit-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](7, ExportComponent_ng_container_4_bit_form_field_1_bit_option_7_Template, 1, 2, "bit-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const organizations_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](3, 3, "exportFrom"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](6, 5, ctx_r2.organizationDataOwnershipPolicyAppliesToUser$));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", organizations_r2);
} }
function ExportComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](1, ExportComponent_ng_container_4_bit_form_field_1_Template, 8, 7, "bit-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const organizations_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", organizations_r2.length > 0);
} }
function ExportComponent_bit_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "bit-option", 12);
} if (rf & 2) {
    const f_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", f_r4.value)("label", f_r4.name);
} }
function ExportComponent_ng_container_12_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "div", 16)(2, "bit-form-field")(3, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](6, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("toggledChange", function ExportComponent_ng_container_12_ng_container_19_Template_button_toggledChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r5); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx_r2.showFilePassword, $event) || (ctx_r2.showFilePassword = $event); return _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵresetView"]($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ExportComponent_ng_container_12_ng_container_19_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r5); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵresetView"](ctx_r2.generatePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](10, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](13, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](16, "tools-password-strength", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](17, "bit-form-field")(18, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](20, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](21, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("toggledChange", function ExportComponent_ng_container_12_ng_container_19_Template_button_toggledChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵrestoreView"](_r5); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2); _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx_r2.showFilePassword, $event) || (ctx_r2.showFilePassword = $event); return _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵresetView"]($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](5, 12, "filePassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("toggled", ctx_r2.showFilePassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](9, 14, "generatePassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("disabled", !ctx_r2.filePassword)("appCopyClick", ctx_r2.filePassword)("valueLabel", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](11, 16, "password"))("label", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](12, 18, "password"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](15, 20, "exportPasswordDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("password", ctx_r2.filePassword)("showText", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](20, 22, "confirmFilePassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("toggled", ctx_r2.showFilePassword);
} }
function ExportComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "bit-radio-group", 13)(2, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](5, "bit-radio-button", 14)(6, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](12, "bit-radio-button", 15)(13, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](16, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](18, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](19, ExportComponent_ng_container_12_ng_container_19_Template, 23, 24, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](4, 8, "exportTypeHeading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", ctx_r2.encryptedExportType.AccountEncrypted);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](8, 10, "accountRestricted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](11, 12, "accountRestrictedOptionDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", ctx_r2.encryptedExportType.FileEncrypted);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](15, 14, "passwordProtected"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](18, 16, "passwordProtectedOptionDescription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r2.fileEncryptionType == ctx_r2.encryptedExportType.FileEncrypted);
} }
class ExportComponent {
    /**
     * Enables the hosting control to pass in an organizationId
     * If a organizationId is provided, the organization selection is disabled.
     */
    set organizationId(value) {
        if (_bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_18__.Utils.isNullOrEmpty(value)) {
            this._organizationId$.next(undefined);
            return;
        }
        if (!(0,_bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_20__.isId)(value)) {
            this._organizationId$.next(undefined);
            return;
        }
        this._organizationId$.next(value);
        (0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId)(this.accountService.activeAccount$)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)((userId) => this.organizationService.organizations$(userId).pipe((0,_bitwarden_common_platform_misc__WEBPACK_IMPORTED_MODULE_17__.getById)(value))))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe((organization) => {
            this._organizationId$.next(organization === null || organization === void 0 ? void 0 : organization.id);
        });
    }
    get organizationId() {
        return this._organizationId$.value;
    }
    get showExcludeMyItems() {
        return this._showExcludeMyItems;
    }
    get orgExportDescription() {
        if (!this._showExcludeMyItems) {
            return "exportingOrganizationVaultDesc";
        }
        return this.isAdminConsoleContext
            ? "exportingOrganizationVaultFromAdminConsoleWithDataOwnershipDesc"
            : "exportingOrganizationVaultFromPasswordManagerWithDataOwnershipDesc";
    }
    get isAdminConsoleContext() {
        var _a, _b, _c;
        const isWeb = ((_b = (_a = this.platformUtilsService).getClientType) === null || _b === void 0 ? void 0 : _b.call(_a)) === _bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_10__.ClientType.Web;
        if (!isWeb || !this.router) {
            return false;
        }
        try {
            const url = (_c = this.router.url) !== null && _c !== void 0 ? _c : "";
            return url.includes("/organizations/");
        }
        catch (_d) {
            return false;
        }
    }
    get disabledByPolicy() {
        return this._disabledByPolicy;
    }
    constructor(i18nService, toastService, exportService, eventCollectionService, generatorService, policyService, logService, formBuilder, fileDownloadService, dialogService, organizationService, accountService, collectionService, configService, platformUtilsService, router) {
        this.i18nService = i18nService;
        this.toastService = toastService;
        this.exportService = exportService;
        this.eventCollectionService = eventCollectionService;
        this.generatorService = generatorService;
        this.policyService = policyService;
        this.logService = logService;
        this.formBuilder = formBuilder;
        this.fileDownloadService = fileDownloadService;
        this.dialogService = dialogService;
        this.organizationService = organizationService;
        this.accountService = accountService;
        this.collectionService = collectionService;
        this.configService = configService;
        this.platformUtilsService = platformUtilsService;
        this.router = router;
        this._organizationId$ = new rxjs__WEBPACK_IMPORTED_MODULE_31__.BehaviorSubject(undefined);
        this._showExcludeMyItems = false;
        /**
         * Emits true when the BitSubmitDirective({@link bitSubmit} is executing {@link submit} and false when execution has completed.
         * Example: Used to show the loading state of the submit button present on the hosting component
         * */
        this.formLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_28__.EventEmitter();
        /**
         * Emits true when this form gets disabled and false when enabled.
         * Example: Used to disable the submit button, which is present on the hosting component
         * */
        this.formDisabled = new _angular_core__WEBPACK_IMPORTED_MODULE_28__.EventEmitter();
        /**
         * Emits when the creation and download of the export-file have succeeded
         * - Emits an undefined when exporting from an individual vault
         * - Emits the organizationId when exporting from an organizational vault
         * */
        this.onSuccessfulExport = new _angular_core__WEBPACK_IMPORTED_MODULE_28__.EventEmitter();
        this.encryptedExportType = _enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__.EncryptedExportType;
        this._disabledByPolicy = false;
        this.exportForm = this.formBuilder.group({
            vaultSelector: [
                "myVault",
                {
                    nonNullable: true,
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_32__.Validators.required],
                },
            ],
            format: ["json", _angular_forms__WEBPACK_IMPORTED_MODULE_32__.Validators.required],
            secret: [""],
            filePassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_32__.Validators.required],
            confirmFilePassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_32__.Validators.required],
            fileEncryptionType: [_enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__.EncryptedExportType.AccountEncrypted],
        });
        this.formatOptions = [
            { name: ".json", value: "json" },
            { name: ".csv", value: "csv" },
            { name: ".json (Encrypted)", value: "encrypted_json" },
        ];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_33__.Subject();
        this.onlyManagedCollections = true;
        this.onGenerate$ = new rxjs__WEBPACK_IMPORTED_MODULE_33__.Subject();
        this.generatePassword = () => __awaiter(this, void 0, void 0, function* () {
            this.onGenerate$.next({ source: "export", type: _bitwarden_generator_core__WEBPACK_IMPORTED_MODULE_22__.Type.password });
        });
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            if (this.isFileEncryptedExport && this.filePassword != this.confirmFilePassword) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: this.i18nService.t("filePasswordAndConfirmFilePasswordDoNotMatch"),
                });
                return;
            }
            this.exportForm.markAllAsTouched();
            if (this.exportForm.invalid) {
                return;
            }
            if (this.disabledByPolicy) {
                this.toastService.showToast({
                    variant: "error",
                    title: null,
                    message: this.i18nService.t("personalVaultExportPolicyInEffect"),
                });
                return;
            }
            const userVerified = yield this.verifyUser();
            if (!userVerified) {
                return;
            }
            yield this.doExport();
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.observeFeatureFlags();
            this.observeFormState();
            this.observePolicyStatus();
            this.observeFormSelections();
            // order is important below this line
            this.observeMyItemsExclusionCriteria();
            this.observeValidatorAdjustments();
            this.setupPasswordGeneration();
            if (this.organizationId) {
                // organization vault export
                this.initOrganizationOnly();
                return;
            }
            // individual vault export
            this.initIndividual();
            this.setupPolicyBasedFormState();
        });
    }
    observeFeatureFlags() {
        this.createDefaultLocationFlagEnabled$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_34__.from)(this.configService.getFeatureFlag(_bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_11__.FeatureFlag.CreateDefaultLocation)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_35__.shareReplay)({ bufferSize: 1, refCount: true }));
    }
    observeFormState() {
        this.exportForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$)).subscribe((c) => {
            this.formDisabled.emit(c === "DISABLED");
        });
    }
    observePolicyStatus() {
        this.disablePersonalVaultExportPolicy$ = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)((userId) => this.policyService.policyAppliesToUser$(_bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_7__.PolicyType.DisablePersonalVaultExport, userId)));
        // when true, html template will hide "My Vault" option in vault selector drop down
        this.organizationDataOwnershipPolicyAppliesToUser$ = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)((userId) => this.policyService.policyAppliesToUser$(_bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_7__.PolicyType.OrganizationDataOwnership, userId)));
        /*
          Determines how organization exports are described in the callout.
          Admins are exempted from organization data ownership policy,
          and so this needs to determine if the policy is enabled for the org, not if it applies to the user.
        */
        this.organizationDataOwnershipPolicyEnabledForOrg$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_36__.combineLatest)([
            this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId),
            this._organizationId$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)(([userId, organizationId]) => {
            if (!organizationId || !userId) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_37__.of)(false);
            }
            return this.policyService.policies$(userId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_38__.map)((policies) => {
                var _a;
                const policy = policies === null || policies === void 0 ? void 0 : policies.find((p) => p.type === _bitwarden_common_admin_console_enums__WEBPACK_IMPORTED_MODULE_7__.PolicyType.OrganizationDataOwnership &&
                    p.organizationId === organizationId);
                return (_a = policy === null || policy === void 0 ? void 0 : policy.enabled) !== null && _a !== void 0 ? _a : false;
            }));
        }));
    }
    observeFormSelections() {
        this.exportForm.controls.vaultSelector.valueChanges
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe((value) => {
            this.organizationId = value !== "myVault" ? value : undefined;
            this.formatOptions = this.formatOptions.filter((option) => option.value !== "zip");
            this.exportForm.get("format").setValue("json");
            if (value === "myVault") {
                this.formatOptions.push({ name: ".zip (with attachments)", value: "zip" });
            }
        });
    }
    /**
     * Determine value of showExcludeMyItems. Returns true when:
     * CreateDefaultLocation feature flag is on
     * AND organizationDataOwnershipPolicy is enabled for the selected organization
     * AND a valid OrganizationId is present (not exporting from individual vault)
     */
    observeMyItemsExclusionCriteria() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_36__.combineLatest)({
            createDefaultLocationFlagEnabled: this.createDefaultLocationFlagEnabled$,
            organizationDataOwnershipPolicyEnabledForOrg: this.organizationDataOwnershipPolicyEnabledForOrg$,
            organizationId: this._organizationId$,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe(({ createDefaultLocationFlagEnabled, organizationDataOwnershipPolicyEnabledForOrg, organizationId, }) => {
            if (!createDefaultLocationFlagEnabled || !organizationId) {
                this._showExcludeMyItems = false;
                return;
            }
            this._showExcludeMyItems = organizationDataOwnershipPolicyEnabledForOrg;
        });
    }
    // Setup validator adjustments based on format and encryption type changes
    observeValidatorAdjustments() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_39__.merge)(this.exportForm.get("format").valueChanges, this.exportForm.get("fileEncryptionType").valueChanges)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_40__.startWith)(0), (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe(() => this.adjustValidators());
    }
    // Wire up the password generation for password-protected exports
    setupPasswordGeneration() {
        const account$ = this.accountService.activeAccount$.pipe((0,_bitwarden_common_tools_rx__WEBPACK_IMPORTED_MODULE_19__.pin)({
            name() {
                return "active export account";
            },
            distinct(previous, current) {
                return previous.id === current.id;
            },
        }));
        this.generatorService
            .generate$({ on$: this.onGenerate$, account$ })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe((generated) => {
            this.exportForm.patchValue({
                filePassword: generated.credential,
                confirmFilePassword: generated.credential,
            });
        });
    }
    /*
    Initialize component for organization only export
    Hides "My Vault" option by returning immediately
    */
    initOrganizationOnly() {
        this.organizations$ = this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)((userId) => this.organizationService
            .memberOrganizations$(userId)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_38__.map)((orgs) => orgs.filter((org) => org.id == this.organizationId)))));
        this.exportForm.controls.vaultSelector.patchValue(this.organizationId);
        this.exportForm.controls.vaultSelector.disable();
        this.onlyManagedCollections = false;
    }
    // Initialize component to support individual and organizational exports
    initIndividual() {
        this.organizations$ = this.accountService.activeAccount$
            .pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId, (0,rxjs__WEBPACK_IMPORTED_MODULE_29__.switchMap)((userId) => (0,rxjs__WEBPACK_IMPORTED_MODULE_36__.combineLatest)({
            collections: this.collectionService.decryptedCollections$(userId),
            memberOrganizations: this.organizationService.memberOrganizations$(userId),
        })))
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_38__.map)(({ collections, memberOrganizations }) => {
            const managedCollectionsOrgIds = new Set(collections.filter((c) => c.manage).map((c) => c.organizationId));
            const filteredOrgs = memberOrganizations.filter((org) => managedCollectionsOrgIds.has(org.id));
            return filteredOrgs.sort(_bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_18__.Utils.getSortFunction(this.i18nService, "name"));
        }));
    }
    setupPolicyBasedFormState() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_36__.combineLatest)([
            this.disablePersonalVaultExportPolicy$,
            this.organizationDataOwnershipPolicyAppliesToUser$,
            this.organizations$,
        ])
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_41__.tap)(([disablePersonalVaultExport, organizationDataOwnership, organizations]) => {
            this._disabledByPolicy = disablePersonalVaultExport;
            // When organizationDataOwnership is enabled and we have orgs, set the first org as the selected vault
            if (organizationDataOwnership && organizations.length > 0) {
                this.exportForm.enable();
                this.exportForm.controls.vaultSelector.setValue(organizations[0].id);
            }
            // When organizationDataOwnership is enabled and we have no orgs, disable the form
            if (organizationDataOwnership && organizations.length === 0) {
                this.exportForm.disable();
            }
            // When personalVaultExport is disabled, disable the form
            if (disablePersonalVaultExport) {
                this.exportForm.disable();
            }
            // When neither policy is enabled, enable the form and set the default vault to "myVault"
            if (!disablePersonalVaultExport && !organizationDataOwnership) {
                this.exportForm.controls.vaultSelector.setValue("myVault");
            }
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$))
            .subscribe();
    }
    ngAfterViewInit() {
        this.bitSubmit.loading$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$)).subscribe((loading) => {
            this.formLoading.emit(loading);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    get encryptedFormat() {
        return this.format === "encrypted_json";
    }
    get isFileEncryptedExport() {
        return (this.format === "encrypted_json" &&
            this.fileEncryptionType === _enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__.EncryptedExportType.FileEncrypted);
    }
    get isAccountEncryptedExport() {
        return (this.format === "encrypted_json" &&
            this.fileEncryptionType === _enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__.EncryptedExportType.AccountEncrypted);
    }
    doExport() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield this.getExportData();
                // Download the export file
                this.downloadFile(data);
                this.toastService.showToast({
                    variant: "success",
                    title: null,
                    message: this.i18nService.t("exportSuccess"),
                });
                this.onSuccessfulExport.emit(this.organizationId);
                yield this.collectEvent();
                this.exportForm.get("secret").setValue("");
                this.exportForm.clearValidators();
            }
            catch (e) {
                this.logService.error(e);
            }
        });
    }
    verifyUser() {
        return __awaiter(this, void 0, void 0, function* () {
            let confirmDescription = "exportWarningDesc";
            if (this.isFileEncryptedExport) {
                confirmDescription = "fileEncryptedExportWarningDesc";
            }
            else if (this.isAccountEncryptedExport) {
                confirmDescription = "encExportKeyWarningDesc";
            }
            const result = yield _bitwarden_auth_angular__WEBPACK_IMPORTED_MODULE_3__.UserVerificationDialogComponent.open(this.dialogService, {
                title: "confirmVaultExport",
                bodyText: confirmDescription,
                confirmButtonOptions: {
                    text: "exportVault",
                    type: "primary",
                },
            });
            // Handle the result of the dialog based on user action and verification success
            if (result.userAction === "cancel") {
                // User cancelled the dialog
                return false;
            }
            // User confirmed the dialog so check verification success
            if (!result.verificationSuccess) {
                if (result.noAvailableClientVerificationMethods) {
                    // No client-side verification methods are available
                    // Could send user to configure a verification method like PIN or biometrics
                }
                return false;
            }
            return true;
        });
    }
    getExportData() {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_42__.firstValueFrom)(this.accountService.activeAccount$.pipe(_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_9__.getUserId));
            return _bitwarden_common_platform_misc_utils__WEBPACK_IMPORTED_MODULE_18__.Utils.isNullOrWhitespace(this.organizationId)
                ? this.exportService.getExport(userId, this.format, this.filePassword)
                : this.exportService.getOrganizationExport(userId, this.organizationId, this.format, this.filePassword, this.onlyManagedCollections);
        });
    }
    collectEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.organizationId) {
                return yield this.eventCollectionService.collect(_bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_10__.EventType.Organization_ClientExportedVault, null, false, this.organizationId);
            }
            return yield this.eventCollectionService.collect(_bitwarden_common_enums__WEBPACK_IMPORTED_MODULE_10__.EventType.User_ClientExportedVault);
        });
    }
    get format() {
        return this.exportForm.get("format").value;
    }
    get filePassword() {
        return this.exportForm.get("filePassword").value;
    }
    get confirmFilePassword() {
        return this.exportForm.get("confirmFilePassword").value;
    }
    get fileEncryptionType() {
        return this.exportForm.get("fileEncryptionType").value;
    }
    adjustValidators() {
        this.exportForm.get("confirmFilePassword").reset();
        this.exportForm.get("filePassword").reset();
        if (this.encryptedFormat && this.fileEncryptionType == _enums_encrypted_export_type_enum__WEBPACK_IMPORTED_MODULE_24__.EncryptedExportType.FileEncrypted) {
            this.exportForm.controls.filePassword.enable();
            this.exportForm.controls.confirmFilePassword.enable();
        }
        else {
            this.exportForm.controls.filePassword.disable();
            this.exportForm.controls.confirmFilePassword.disable();
        }
    }
    downloadFile(exportedVault) {
        this.fileDownloadService.download({
            fileName: exportedVault.fileName,
            blobData: exportedVault.data,
            blobOptions: { type: exportedVault.type },
        });
    }
}
ExportComponent.ɵfac = function ExportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_14__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_43__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_vault_export_core__WEBPACK_IMPORTED_MODULE_23__.VaultExportServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_event_event_collection_service__WEBPACK_IMPORTED_MODULE_4__.EventCollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_generator_core__WEBPACK_IMPORTED_MODULE_22__.CredentialGeneratorService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_policy_policy_service_abstraction__WEBPACK_IMPORTED_MODULE_6__.PolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_15__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_32__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_13__.FileDownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_44__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_5__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_12__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_16__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_45__.Router, 8)); };
ExportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineComponent"]({ type: ExportComponent, selectors: [["tools-export"]], viewQuery: function ExportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵviewQuery"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_46__.BitSubmitDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵviewQuery"](_bitwarden_angular_tools_password_strength_password_strength_v2_component__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthV2Component, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵloadQuery"]()) && (ctx.bitSubmit = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵloadQuery"]()) && (ctx.passwordStrengthComponent = _t.first);
    } }, inputs: { organizationId: "organizationId" }, outputs: { formLoading: "formLoading", formDisabled: "formDisabled", onSuccessfulExport: "onSuccessfulExport" }, decls: 13, vars: 16, consts: [["type", "danger", 3, "title", 4, "ngIf"], [3, "organizationId", "exportFormat", "orgExportDescription"], ["id", "export_form_exportForm", 3, "formGroup", "bitSubmit"], [4, "ngIf"], ["formControlName", "format"], [3, "value", "label", 4, "ngFor", "ngForOf"], ["type", "danger", 3, "title"], ["formControlName", "vaultSelector"], ["value", "myVault", "icon", "bwi-user", 3, "label", 4, "ngIf"], ["icon", "bwi-business", 3, "value", "label", 4, "ngFor", "ngForOf"], ["value", "myVault", "icon", "bwi-user", 3, "label"], ["icon", "bwi-business", 3, "value", "label"], [3, "value", "label"], ["formControlName", "fileEncryptionType", "aria-label", "exportTypeHeading"], ["id", "AccountEncrypted", "name", "fileEncryptionType", "checked", "fileEncryptionType === encryptedExportType.AccountEncrypted", 1, "tw-block", 3, "value"], ["id", "FileEncrypted", "name", "fileEncryptionType", "checked", "fileEncryptionType === encryptedExportType.FileEncrypted", 1, "tw-block", 3, "value"], [1, "tw-mb-3"], ["bitInput", "", "type", "password", "id", "filePassword", "formControlName", "filePassword", "name", "password"], ["type", "button", "bitSuffix", "", "bitIconButton", "", "bitPasswordInputToggle", "", 3, "toggledChange", "toggled"], ["type", "button", "bitIconButton", "bwi-generate", "appStopClick", "", "bitSuffix", "", 3, "click", "label"], ["type", "button", "bitIconButton", "bwi-clone", "appStopClick", "", "bitSuffix", "", "showToast", "", 3, "disabled", "appCopyClick", "valueLabel", "label"], [3, "password", "showText"], ["bitInput", "", "type", "password", "id", "confirmFilePassword", "formControlName", "confirmFilePassword", "name", "confirmFilePassword"]], template: function ExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](0, ExportComponent_bit_callout_0_Template, 4, 6, "bit-callout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](2, "tools-export-scope-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](4, ExportComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "bit-form-field")(7, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](9, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](10, "bit-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](11, ExportComponent_bit_option_11_Template, 1, 2, "bit-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](12, ExportComponent_ng_container_12_Template, 20, 18, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](1, 10, ctx.disablePersonalVaultExportPolicy$));
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("organizationId", ctx.organizationId)("exportFormat", ctx.format)("orgExportDescription", ctx.orgExportDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("formGroup", ctx.exportForm)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](5, 12, ctx.organizations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](9, 14, "fileFormat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx.formatOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx.format === "encrypted_json");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_47__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_47__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_47__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_47__.AsyncPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_32__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_32__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.FormControlName, _bitwarden_angular_jslib_module__WEBPACK_IMPORTED_MODULE_1__.JslibModule, _angular_src_directives_stop_click_directive__WEBPACK_IMPORTED_MODULE_26__.StopClickDirective, _components_src_copy_click_copy_click_directive__WEBPACK_IMPORTED_MODULE_48__.CopyClickDirective, _angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_27__.I18nPipe, _bitwarden_components__WEBPACK_IMPORTED_MODULE_49__.FormFieldModule, _components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_50__.BitLabel, _components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_51__.BitHintComponent, _components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_52__.BitInputDirective, _components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_53__.BitFormFieldComponent, _components_src_form_field_password_input_toggle_directive__WEBPACK_IMPORTED_MODULE_54__.BitPasswordInputToggleDirective, _components_src_form_field_suffix_directive__WEBPACK_IMPORTED_MODULE_55__.BitSuffixDirective, _bitwarden_components__WEBPACK_IMPORTED_MODULE_56__.AsyncActionsModule, _bitwarden_components__WEBPACK_IMPORTED_MODULE_46__.BitSubmitDirective, _bitwarden_components__WEBPACK_IMPORTED_MODULE_57__.ButtonModule,
        _bitwarden_components__WEBPACK_IMPORTED_MODULE_58__.IconButtonModule, _components_src_icon_button_icon_button_component__WEBPACK_IMPORTED_MODULE_59__.BitIconButtonComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_60__.SelectModule, _components_src_select_select_component__WEBPACK_IMPORTED_MODULE_61__.SelectComponent, _components_src_select_option_component__WEBPACK_IMPORTED_MODULE_62__.OptionComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_63__.CalloutModule, _components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_64__.CalloutComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_65__.RadioButtonModule, _components_src_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_66__.RadioButtonComponent, _components_src_radio_button_radio_group_component__WEBPACK_IMPORTED_MODULE_67__.RadioGroupComponent, _export_scope_callout_component__WEBPACK_IMPORTED_MODULE_25__.ExportScopeCalloutComponent,
        _bitwarden_angular_tools_password_strength_password_strength_v2_component__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthV2Component,
        _bitwarden_generator_components__WEBPACK_IMPORTED_MODULE_21__.GeneratorServicesModule], encapsulation: 2 });


/***/ }),

/***/ "../../libs/tools/export/vault-export/vault-export-ui/src/enums/encrypted-export-type.enum.ts":
/*!****************************************************************************************************!*\
  !*** ../../libs/tools/export/vault-export/vault-export-ui/src/enums/encrypted-export-type.enum.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncryptedExportType: () => (/* binding */ EncryptedExportType)
/* harmony export */ });
/** A type of encrypted export. */
const EncryptedExportType = Object.freeze({
    /** Export is encrypted using the Bitwarden account key. */
    AccountEncrypted: 0,
    /** Export is encrypted using a separate file password/key. */
    FileEncrypted: 1,
});


/***/ }),

/***/ "../../libs/tools/export/vault-export/vault-export-ui/src/index.ts":
/*!*************************************************************************!*\
  !*** ../../libs/tools/export/vault-export/vault-export-ui/src/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportComponent: () => (/* reexport safe */ _components_export_component__WEBPACK_IMPORTED_MODULE_0__.ExportComponent),
/* harmony export */   ExportScopeCalloutComponent: () => (/* reexport safe */ _components_export_scope_callout_component__WEBPACK_IMPORTED_MODULE_1__.ExportScopeCalloutComponent)
/* harmony export */ });
/* harmony import */ var _components_export_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export.component */ "../../libs/tools/export/vault-export/vault-export-ui/src/components/export.component.ts");
/* harmony import */ var _components_export_scope_callout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/export-scope-callout.component */ "../../libs/tools/export/vault-export/vault-export-ui/src/components/export-scope-callout.component.ts");




/***/ })

}]);
//# sourceMappingURL=libs_tools_export_vault-export_vault-export-ui_src_index_ts.0c1d6576cd874540d5e8.js.map