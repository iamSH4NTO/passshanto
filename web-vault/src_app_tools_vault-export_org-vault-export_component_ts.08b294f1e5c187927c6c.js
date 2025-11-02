"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_tools_vault-export_org-vault-export_component_ts"],{

/***/ "./src/app/tools/vault-export/org-vault-export.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tools/vault-export/org-vault-export.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationVaultExportComponent: () => (/* binding */ OrganizationVaultExportComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/types/guid */ "../../libs/common/src/types/guid.ts");
/* harmony import */ var _bitwarden_vault_export_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/vault-export-ui */ "../../libs/tools/export/vault-export/vault-export-ui/src/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












class OrganizationVaultExportComponent {
    constructor(route) {
        this.route = route;
        this.routeOrgId = undefined;
        this.loading = false;
        this.disabled = false;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const orgIdParam = this.route.snapshot.paramMap.get("organizationId");
            if (orgIdParam === undefined) {
                throw new Error("`organizationId` is a required route parameter");
            }
            if (!(0,_bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_0__.isId)(orgIdParam)) {
                throw new Error("Invalid OrganizationId provided in route parameter `organizationId`");
            }
            this.routeOrgId = orgIdParam;
        });
    }
    /**
     * Callback that is called after a successful export.
     */
    onSuccessfulExport(organizationId) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
OrganizationVaultExportComponent.ɵfac = function OrganizationVaultExportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrganizationVaultExportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
OrganizationVaultExportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: OrganizationVaultExportComponent, selectors: [["ng-component"]], decls: 6, vars: 6, consts: [[3, "formDisabled", "formLoading", "onSuccessfulExport", "organizationId"], ["form", "export_form_exportForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]], template: function OrganizationVaultExportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "bit-container")(2, "tools-export", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formDisabled", function OrganizationVaultExportComponent_Template_tools_export_formDisabled_2_listener($event) { return ctx.disabled = $event; })("formLoading", function OrganizationVaultExportComponent_Template_tools_export_formLoading_2_listener($event) { return ctx.loading = $event; })("onSuccessfulExport", function OrganizationVaultExportComponent_Template_tools_export_onSuccessfulExport_2_listener($event) { return ctx.onSuccessfulExport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("organizationId", ctx.routeOrgId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.disabled)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "confirmFormat"), " ");
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_8__.BitFormButtonDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_9__.ButtonComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_10__.ContainerComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe, _bitwarden_vault_export_ui__WEBPACK_IMPORTED_MODULE_1__.ExportComponent, _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_5__.WebHeaderComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_tools_vault-export_org-vault-export_component_ts.08b294f1e5c187927c6c.js.map