"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_billing_shared_adjust-storage-dialog_adjust-storage-dialog_component_ts-src_app_billi-7fb93c"],{

/***/ "../../libs/common/src/models/request/storage.request.ts":
/*!***************************************************************!*\
  !*** ../../libs/common/src/models/request/storage.request.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageRequest: () => (/* binding */ StorageRequest)
/* harmony export */ });
// FIXME: Update this file to be type safe and remove this and next line
// @ts-strict-ignore
class StorageRequest {
}


/***/ }),

/***/ "./src/app/billing/shared/adjust-storage-dialog/adjust-storage-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/billing/shared/adjust-storage-dialog/adjust-storage-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdjustStorageDialogComponent: () => (/* binding */ AdjustStorageDialogComponent),
/* harmony export */   AdjustStorageDialogResultType: () => (/* binding */ AdjustStorageDialogResultType)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_models_request_storage_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/models/request/storage.request */ "../../libs/common/src/models/request/storage.request.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
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
























function AdjustStorageDialogComponent_bit_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-hint")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, "total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate4"](" ", ctx_r0.formGroup.value.storage, " GB \u00D7 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](5, 7, ctx_r0.price, "$"), " = ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 10, ctx_r0.price * ctx_r0.formGroup.value.storage, "$"), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 13, ctx_r0.cadence), " ");
} }
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var AdjustStorageDialogResultType;
(function (AdjustStorageDialogResultType) {
    AdjustStorageDialogResultType["Submitted"] = "submitted";
    AdjustStorageDialogResultType["Closed"] = "closed";
})(AdjustStorageDialogResultType || (AdjustStorageDialogResultType = {}));
class AdjustStorageDialogComponent {
    constructor(apiService, dialogParams, dialogRef, i18nService, organizationApiService, toastService) {
        this.apiService = apiService;
        this.dialogParams = dialogParams;
        this.dialogRef = dialogRef;
        this.i18nService = i18nService;
        this.organizationApiService = organizationApiService;
        this.toastService = toastService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            storage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(99),
            ]),
        });
        this.ResultType = AdjustStorageDialogResultType;
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            const request = new _bitwarden_common_models_request_storage_request__WEBPACK_IMPORTED_MODULE_2__.StorageRequest();
            switch (this.dialogParams.type) {
                case "Add":
                    request.storageGbAdjustment = this.formGroup.value.storage;
                    break;
                case "Remove":
                    request.storageGbAdjustment = this.formGroup.value.storage * -1;
                    break;
            }
            if (this.organizationId) {
                yield this.organizationApiService.updateStorage(this.organizationId, request);
            }
            else {
                yield this.apiService.postAccountStorage(request);
            }
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("adjustedStorage", request.storageGbAdjustment.toString()),
            });
            this.dialogRef.close(this.ResultType.Submitted);
        });
        this.price = this.dialogParams.price;
        this.cadence = this.dialogParams.cadence;
        this.organizationId = this.dialogParams.organizationId;
        switch (this.dialogParams.type) {
            case "Add":
                this.title = this.i18nService.t("addStorage");
                this.body = this.i18nService.t("storageAddNote");
                this.storageFieldLabel = this.i18nService.t("gbStorageAdd");
                break;
            case "Remove":
                this.title = this.i18nService.t("removeStorage");
                this.body = this.i18nService.t("storageRemoveNote");
                this.storageFieldLabel = this.i18nService.t("gbStorageRemove");
                break;
        }
    }
}
AdjustStorageDialogComponent.open = (dialogService, dialogConfig) => dialogService.open(AdjustStorageDialogComponent, dialogConfig);
AdjustStorageDialogComponent.ɵfac = function AdjustStorageDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdjustStorageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_8__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_9__.ToastService)); };
AdjustStorageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdjustStorageDialogComponent, selectors: [["ng-component"]], standalone: false, decls: 18, vars: 13, consts: [[3, "formGroup", "bitSubmit"], [3, "title"], ["bitDialogContent", ""], ["bitTypography", "body1"], [1, "tw-grid", "tw-grid-cols-12"], [1, "tw-col-span-7"], ["bitInput", "", "type", "number", "formControlName", "storage"], [4, "ngIf"], ["bitDialogFooter", ""], ["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"], ["type", "button", "bitButton", "", "bitFormButton", "", "buttonType", "secondary", 3, "bitDialogClose"]], template: function AdjustStorageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0)(1, "bit-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "bit-form-field", 5)(7, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdjustStorageDialogComponent_bit_hint_10_Template, 8, 15, "bit-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.storageFieldLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dialogParams.type === "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 9, "submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("bitDialogClose", ctx.ResultType.Closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 11, "cancel"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_11__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_12__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_13__.ButtonComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_14__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_15__.DialogComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_16__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_17__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_18__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_19__.BitFormFieldComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_20__.TypographyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/shared/billing-history.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/billing/shared/billing-history.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingHistoryComponent: () => (/* binding */ BillingHistoryComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_a11y_a11y_title_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/components/src/a11y/a11y-title.directive */ "../../libs/components/src/a11y/a11y-title.directive.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/components/src/section/section.component */ "../../libs/components/src/section/section.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/row.directive */ "../../libs/components/src/table/row.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");











const _c0 = a0 => ({ "text-strike": a0 });
function BillingHistoryComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "noUnpaidInvoices"), " ");
} }
function BillingHistoryComponent_ng_template_7_tr_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "paid"), " ");
} }
function BillingHistoryComponent_ng_template_7_tr_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "unpaid"), " ");
} }
function BillingHistoryComponent_ng_template_7_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 7)(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 8)(5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BillingHistoryComponent_ng_template_7_tr_0_span_16_Template, 4, 3, "span", 3)(17, BillingHistoryComponent_ng_template_7_tr_0_span_17_Template, 4, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 9, i_r1.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", i_r1.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("appA11yTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "downloadInvoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", i_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, "viewInvoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 16, "invoiceNumber", i_r1.number), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 19, i_r1.amount, "$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r1.paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !i_r1.paid);
} }
function BillingHistoryComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BillingHistoryComponent_ng_template_7_tr_0_Template, 18, 22, "tr", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.openInvoices);
} }
function BillingHistoryComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "noPaidInvoices"), " ");
} }
function BillingHistoryComponent_ng_template_15_tr_0_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "paid"), " ");
} }
function BillingHistoryComponent_ng_template_15_tr_0_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "unpaid"), " ");
} }
function BillingHistoryComponent_ng_template_15_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 7)(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 8)(5, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, BillingHistoryComponent_ng_template_15_tr_0_span_16_Template, 4, 3, "span", 3)(17, BillingHistoryComponent_ng_template_15_tr_0_span_17_Template, 4, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 9, i_r3.date, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", i_r3.pdfUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("appA11yTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, "downloadInvoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", i_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 14, "viewInvoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 16, "invoiceNumber", i_r3.number), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](14, 19, i_r3.amount, "$"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r3.paid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !i_r3.paid);
} }
function BillingHistoryComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BillingHistoryComponent_ng_template_15_tr_0_Template, 18, 22, "tr", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.paidInvoices);
} }
function BillingHistoryComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "noTransactions"), " ");
} }
function BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "chargeNoun"), " ");
} }
function BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "refundNoun"));
} }
function BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_i_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 17);
} if (rf & 2) {
    const t_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.paymentMethodClasses(t_r4.paymentMethodType));
} }
function BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 7)(1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_span_5_Template, 3, 3, "span", 3)(6, BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_span_6_Template, 3, 3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_i_8_Template, 1, 1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 8, t_r4.createdDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", t_r4.type === ctx_r1.transactionType.Charge || t_r4.type === ctx_r1.transactionType.Credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", t_r4.type === ctx_r1.transactionType.Refund);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", t_r4.paymentMethodType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r4.details, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 11, t_r4.refunded ? "refunded" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, t_r4.refunded));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 13, t_r4.amount, "$"), " ");
} }
function BillingHistoryComponent_bit_table_21_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BillingHistoryComponent_bit_table_21_ng_template_1_tr_0_Template, 14, 18, "tr", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.transactions);
} }
function BillingHistoryComponent_bit_table_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BillingHistoryComponent_bit_table_21_ng_template_1_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class BillingHistoryComponent {
    constructor() {
        this.paymentMethodType = _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType;
        this.transactionType = _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.TransactionType;
    }
    paymentMethodClasses(type) {
        switch (type) {
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType.Card:
                return ["bwi-credit-card"];
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType.BankAccount:
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType.WireTransfer:
                return ["bwi-billing"];
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType.BitPay:
                return ["bwi-bitcoin text-warning"];
            case _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_0__.PaymentMethodType.PayPal:
                return ["bwi-paypal text-primary"];
            default:
                return [];
        }
    }
}
BillingHistoryComponent.ɵfac = function BillingHistoryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BillingHistoryComponent)(); };
BillingHistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BillingHistoryComponent, selectors: [["app-billing-history"]], inputs: { openInvoices: "openInvoices", paidInvoices: "paidInvoices", transactions: "transactions" }, standalone: false, decls: 25, vars: 23, consts: [["bitTypography", "h3"], ["bitTypography", "body1", 4, "ngIf"], ["body", ""], [4, "ngIf"], [1, "tw-text-muted"], ["bitTypography", "body1"], ["bitRow", "", 4, "ngFor", "ngForOf"], ["bitRow", ""], ["bitCell", ""], ["target", "_blank", "rel", "noreferrer", 1, "tw-mr-2", 3, "href", "appA11yTitle"], ["aria-hidden", "true", 1, "bwi", "bwi-file-text"], ["bitLink", "", "target", "_blank", "rel", "noreferrer", 3, "href", "title"], ["bitCell", "", 1, "tw-w-28"], ["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success"], ["aria-hidden", "true", 1, "bwi", "bwi-error", "tw-text-muted"], ["class", "bwi bwi-fw", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["bitCell", "", 3, "ngClass", "title"], ["aria-hidden", "true", 1, "bwi", "bwi-fw", 3, "ngClass"]], template: function BillingHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "bit-section")(1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, BillingHistoryComponent_p_5_Template, 3, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "bit-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BillingHistoryComponent_ng_template_7_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "bit-section")(9, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BillingHistoryComponent_p_13_Template, 3, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "bit-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BillingHistoryComponent_ng_template_15_Template, 1, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "bit-section")(17, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BillingHistoryComponent_p_20_Template, 3, 3, "p", 1)(21, BillingHistoryComponent_bit_table_21_Template, 2, 0, "bit-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, "unpaid"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 12, "invoices"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.openInvoices || !ctx.openInvoices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 14, "paid"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 16, "invoices"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.paidInvoices || !ctx.paidInvoices.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 18, "transactions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.transactions || !ctx.transactions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.transactions && ctx.transactions.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](24, 20, "chargesStatement", "BITWARDEN"), "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _libs_components_src_a11y_a11y_title_directive__WEBPACK_IMPORTED_MODULE_4__.A11yTitleDirective, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_5__.AnchorLinkDirective, _libs_components_src_section_section_component__WEBPACK_IMPORTED_MODULE_6__.SectionComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_7__.CellDirective, _libs_components_src_table_row_directive__WEBPACK_IMPORTED_MODULE_8__.RowDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_9__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_10__.TypographyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_1__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/shared/offboarding-survey.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/billing/shared/offboarding-survey.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OffboardingSurveyComponent: () => (/* binding */ OffboardingSurveyComponent),
/* harmony export */   OffboardingSurveyDialogResultType: () => (/* binding */ OffboardingSurveyDialogResultType),
/* harmony export */   openOffboardingSurvey: () => (/* binding */ openOffboardingSurvey)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_common_billing_abstractions_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/billing-api.service.abstraction */ "../../libs/common/src/billing/abstractions/billing-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/components */ "../../node_modules/@angular/cdk/fesm2022/dialog.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















function OffboardingSurveyComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reason_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", reason_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", reason_r1.text, " ");
} }
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var OffboardingSurveyDialogResultType;
(function (OffboardingSurveyDialogResultType) {
    OffboardingSurveyDialogResultType["Closed"] = "closed";
    OffboardingSurveyDialogResultType["Submitted"] = "submitted";
})(OffboardingSurveyDialogResultType || (OffboardingSurveyDialogResultType = {}));
const openOffboardingSurvey = (dialogService, dialogConfig) => dialogService.open(OffboardingSurveyComponent, dialogConfig);
class OffboardingSurveyComponent {
    constructor(dialogParams, dialogRef, formBuilder, billingApiService, i18nService, platformUtilsService, toastService) {
        this.dialogParams = dialogParams;
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.billingApiService = billingApiService;
        this.i18nService = i18nService;
        this.platformUtilsService = platformUtilsService;
        this.toastService = toastService;
        this.ResultType = OffboardingSurveyDialogResultType;
        this.MaxFeedbackLength = 400;
        this.reasons = [
            {
                value: null,
                text: this.i18nService.t("selectPlaceholder"),
            },
            {
                value: "missing_features",
                text: this.i18nService.t("missingFeatures"),
            },
            {
                value: "switched_service",
                text: this.i18nService.t("movingToAnotherTool"),
            },
            {
                value: "too_complex",
                text: this.i18nService.t("tooDifficultToUse"),
            },
            {
                value: "unused",
                text: this.i18nService.t("notUsingEnough"),
            },
            {
                value: "too_expensive",
                text: this.i18nService.t("tooExpensive"),
            },
            {
                value: "other",
                text: this.i18nService.t("other"),
            },
        ];
        this.formGroup = this.formBuilder.group({
            reason: [this.reasons[0].value, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            feedback: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(this.MaxFeedbackLength)]],
        });
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.formGroup.markAllAsTouched();
            if (this.formGroup.invalid) {
                return;
            }
            const request = {
                reason: this.formGroup.value.reason,
                feedback: this.formGroup.value.feedback,
            };
            this.dialogParams.type === "Organization"
                ? yield this.billingApiService.cancelOrganizationSubscription(this.dialogParams.id, request)
                : yield this.billingApiService.cancelPremiumUserSubscription(request);
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("canceledSubscription"),
            });
            this.dialogRef.close(this.ResultType.Submitted);
        });
    }
}
OffboardingSurveyComponent.ɵfac = function OffboardingSurveyComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OffboardingSurveyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_6__.DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_7__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.BillingApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_8__.ToastService)); };
OffboardingSurveyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OffboardingSurveyComponent, selectors: [["app-cancel-subscription-form"]], standalone: false, decls: 30, vars: 27, consts: [[3, "formGroup", "bitSubmit"], ["bitDialogTitle", "", 1, "tw-font-semibold"], ["bitDialogContent", ""], ["bitInput", "", "formControlName", "reason"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["rows", "4", "bitInput", "", "formControlName", "feedback"], ["bitDialogFooter", ""], ["bitButton", "", "bitFormButton", "", "buttonType", "primary", "type", "submit"], ["bitButton", "", "buttonType", "secondary", "type", "button", 3, "bitDialogClose"], [3, "ngValue"]], template: function OffboardingSurveyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "bit-dialog")(2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 2)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "bit-form-field")(10, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, OffboardingSurveyComponent_option_14_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "bit-form-field")(16, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "bit-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 11, "cancelSubscription"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 13, "sorryToSeeYouGo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 15, "selectCancellationReason"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 17, "anyOtherFeedback"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](22, 19, "charactersCurrentAndMaximum", ctx.formGroup.value.feedback.length, ctx.MaxFeedbackLength));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 23, "cancelSubscription"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("bitDialogClose", ctx.ResultType.Closed);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 25, "close"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_10__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_11__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_13__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__.DialogComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_15__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_16__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_17__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_18__.BitFormFieldComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/shared/update-license-types.ts":
/*!********************************************************!*\
  !*** ./src/app/billing/shared/update-license-types.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateLicenseDialogResult: () => (/* binding */ UpdateLicenseDialogResult)
/* harmony export */ });
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
var UpdateLicenseDialogResult;
(function (UpdateLicenseDialogResult) {
    UpdateLicenseDialogResult["Updated"] = "updated";
    UpdateLicenseDialogResult["Cancelled"] = "cancelled";
})(UpdateLicenseDialogResult || (UpdateLicenseDialogResult = {}));


/***/ }),

/***/ "./src/app/billing/shared/update-license.component.ts":
/*!************************************************************!*\
  !*** ./src/app/billing/shared/update-license.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateLicenseComponent: () => (/* binding */ UpdateLicenseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _update_license_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-license-types */ "./src/app/billing/shared/update-license-types.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
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


























function UpdateLicenseComponent_bit_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "licenseFile"));
} }
function UpdateLicenseComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bitAction", ctx_r2.cancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "cancel"), " ");
} }
class UpdateLicenseComponent {
    constructor(apiService, i18nService, platformUtilsService, organizationApiService, formBuilder, toastService) {
        this.apiService = apiService;
        this.i18nService = i18nService;
        this.platformUtilsService = platformUtilsService;
        this.organizationApiService = organizationApiService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.showCancel = true;
        this.onUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.onCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.title = this.i18nService.t("updateLicense");
        this.updateLicenseForm = this.formBuilder.group({
            file: [null],
        });
        this.licenseFile = null;
        this.submit = () => __awaiter(this, void 0, void 0, function* () {
            this.updateLicenseForm.markAllAsTouched();
            if (this.updateLicenseForm.invalid) {
                return;
            }
            const files = this.licenseFile;
            if (files == null) {
                this.toastService.showToast({
                    variant: "error",
                    title: this.i18nService.t("errorOccurred"),
                    message: this.i18nService.t("selectFile"),
                });
                return;
            }
            const fd = new FormData();
            fd.append("license", files);
            let updatePromise = null;
            if (this.organizationId == null) {
                updatePromise = this.apiService.postAccountLicense(fd);
            }
            else {
                updatePromise = this.organizationApiService.updateLicense(this.organizationId, fd);
            }
            this.formPromise = updatePromise.then(() => {
                return this.apiService.refreshIdentityToken();
            });
            yield this.formPromise;
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("licenseUploadSuccess"),
            });
            this.onUpdated.emit();
            return new Promise((resolve) => resolve(_update_license_types__WEBPACK_IMPORTED_MODULE_5__.UpdateLicenseDialogResult.Updated));
        });
        this.cancel = () => {
            this.onCanceled.emit();
        };
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const org = yield this.organizationApiService.get(this.organizationId);
            if (org.plan.productTier !== _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_2__.ProductTierType.Families) {
                this.updateLicenseForm.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]);
                this.updateLicenseForm.updateValueAndValidity();
            }
        });
    }
    setSelectedFile(event) {
        const fileInputEl = event.target;
        const file = fileInputEl.files.length > 0 ? fileInputEl.files[0] : null;
        this.licenseFile = file;
    }
}
UpdateLicenseComponent.ɵfac = function UpdateLicenseComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UpdateLicenseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_4__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_9__.ToastService)); };
UpdateLicenseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UpdateLicenseComponent, selectors: [["app-update-license"]], inputs: { organizationId: "organizationId", showCancel: "showCancel", showAutomaticSyncAndManualUpload: "showAutomaticSyncAndManualUpload" }, outputs: { onUpdated: "onUpdated", onCanceled: "onCanceled" }, standalone: false, decls: 20, vars: 17, consts: [["fileSelector", ""], [3, "formGroup", "bitSubmit"], [4, "ngIf"], [1, "tw-pb-1", "tw-pt-2", "tw-flex", "tw-items-center", "tw-gap-3"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"], ["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"], [1, "tw-flex", "tw-gap-2", "tw-mt-4"], ["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""], ["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction", 4, "ngIf"], ["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", 3, "bitAction"]], template: function UpdateLicenseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 1)(1, "bit-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UpdateLicenseComponent_bit_label_2_Template, 3, 3, "bit-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateLicenseComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const fileSelector_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](fileSelector_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UpdateLicenseComponent_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setSelectedFile($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "bit-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 6)(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, UpdateLicenseComponent_button_19_Template, 3, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.updateLicenseForm)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAutomaticSyncAndManualUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 8, "chooseFile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.licenseFile ? ctx.licenseFile.name : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 10, "noFileChosen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 12, "licenseFileDesc", !ctx.organizationId ? "bitwarden_premium_license.json" : "bitwarden_organization_license.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 15, "submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCancel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_11__.BitActionDirective, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_12__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_13__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_14__.ButtonComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_15__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_16__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_17__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_18__.BitFormFieldComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/types/bitwarden-subscriber.ts":
/*!*******************************************************!*\
  !*** ./src/app/billing/types/bitwarden-subscriber.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapAccountToSubscriber: () => (/* binding */ mapAccountToSubscriber),
/* harmony export */   mapOrganizationToSubscriber: () => (/* binding */ mapOrganizationToSubscriber),
/* harmony export */   mapProviderToSubscriber: () => (/* binding */ mapProviderToSubscriber)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");

const mapAccountToSubscriber = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((account) => {
    if (!account) {
        throw new Error("Account not found");
    }
    return {
        type: "account",
        data: account,
    };
});
const mapOrganizationToSubscriber = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((organization) => {
    if (!organization) {
        throw new Error("Organization not found");
    }
    return {
        type: "organization",
        data: organization,
    };
});
const mapProviderToSubscriber = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)((provider) => {
    if (!provider) {
        throw new Error("Organization not found");
    }
    return {
        type: "provider",
        data: provider,
    };
});


/***/ }),

/***/ "./src/app/billing/types/index.ts":
/*!****************************************!*\
  !*** ./src/app/billing/types/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapAccountToSubscriber: () => (/* reexport safe */ _bitwarden_subscriber__WEBPACK_IMPORTED_MODULE_0__.mapAccountToSubscriber),
/* harmony export */   mapOrganizationToSubscriber: () => (/* reexport safe */ _bitwarden_subscriber__WEBPACK_IMPORTED_MODULE_0__.mapOrganizationToSubscriber),
/* harmony export */   mapProviderToSubscriber: () => (/* reexport safe */ _bitwarden_subscriber__WEBPACK_IMPORTED_MODULE_0__.mapProviderToSubscriber)
/* harmony export */ });
/* harmony import */ var _bitwarden_subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bitwarden-subscriber */ "./src/app/billing/types/bitwarden-subscriber.ts");



/***/ })

}]);
//# sourceMappingURL=src_app_billing_shared_adjust-storage-dialog_adjust-storage-dialog_component_ts-src_app_billi-7fb93c.33e9d71da4fa9a07a62a.js.map