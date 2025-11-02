"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_tools_import_org-import_component_ts"],{

/***/ "../../libs/importer/src/index.ts":
/*!****************************************!*\
  !*** ../../libs/importer/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultImportMetadataService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.DefaultImportMetadataService),
/* harmony export */   ImportApiService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportApiService),
/* harmony export */   ImportApiServiceAbstraction: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportApiServiceAbstraction),
/* harmony export */   ImportCollectionServiceAbstraction: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportCollectionServiceAbstraction),
/* harmony export */   ImportMetadataServiceAbstraction: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportMetadataServiceAbstraction),
/* harmony export */   ImportResult: () => (/* reexport safe */ _models__WEBPACK_IMPORTED_MODULE_0__.ImportResult),
/* harmony export */   ImportService: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportService),
/* harmony export */   ImportServiceAbstraction: () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_2__.ImportServiceAbstraction),
/* harmony export */   Importers: () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_1__.Importers),
/* harmony export */   Instructions: () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_1__.Instructions),
/* harmony export */   Loader: () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_1__.Loader),
/* harmony export */   LoaderAvailability: () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_1__.LoaderAvailability)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "../../libs/importer/src/models/index.ts");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata */ "../../libs/importer/src/metadata/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "../../libs/importer/src/services/index.ts");





/***/ }),

/***/ "./src/app/tools/import/import-collection-admin.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tools/import/import-collection-admin.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportCollectionAdminService: () => (/* binding */ ImportCollectionAdminService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
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




class ImportCollectionAdminService {
    constructor(collectionAdminService) {
        this.collectionAdminService = collectionAdminService;
    }
    getAllAdminCollections(organizationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.collectionAdminService.collectionAdminViews$(organizationId, userId));
        });
    }
}
ImportCollectionAdminService.ɵfac = function ImportCollectionAdminService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportCollectionAdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionAdminService)); };
ImportCollectionAdminService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ImportCollectionAdminService, factory: ImportCollectionAdminService.ɵfac });


/***/ }),

/***/ "./src/app/tools/import/org-import.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tools/import/org-import.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgImportComponent: () => (/* binding */ OrgImportComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/admin-console/common */ "../../libs/admin-console/src/common/index.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/auth/services/account.service */ "../../libs/common/src/auth/services/account.service.ts");
/* harmony import */ var _bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/types/guid */ "../../libs/common/src/types/guid.ts");
/* harmony import */ var _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/importer-core */ "../../libs/importer/src/index.ts");
/* harmony import */ var _bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/importer-ui */ "../../libs/importer/src/components/index.ts");
/* harmony import */ var _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/ui-common */ "../../libs/ui/common/src/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _import_collection_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./import-collection-admin.service */ "./src/app/tools/import/import-collection-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






















class OrgImportComponent {
    constructor(route, organizationService, router, accountService) {
        this.route = route;
        this.organizationService = organizationService;
        this.router = router;
        this.accountService = accountService;
        this.routeOrgId = undefined;
        this.loading = false;
        this.disabled = false;
    }
    ngOnInit() {
        const orgIdParam = this.route.snapshot.paramMap.get("organizationId");
        if (orgIdParam === undefined) {
            throw new Error("`organizationId` is a required route parameter");
        }
        if (!(0,_bitwarden_common_types_guid__WEBPACK_IMPORTED_MODULE_4__.isId)(orgIdParam)) {
            throw new Error("Invalid OrganizationId provided in route parameter `organizationId`");
        }
        this.routeOrgId = orgIdParam;
    }
    /**
     * Callback that is called after a successful import.
     */
    onSuccessfulImport(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)((0,_bitwarden_common_auth_services_account_service__WEBPACK_IMPORTED_MODULE_3__.getUserId)(this.accountService.activeAccount$));
            const organization = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(this.organizationService
                .organizations$(userId)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)((organizations) => organizations.find((o) => o.id === organizationId))));
            if (organization == null) {
                return;
            }
            if ((0,_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.canAccessVaultTab)(organization)) {
                yield this.router.navigate(["organizations", organizationId, "vault"]);
            }
        });
    }
}
OrgImportComponent.ɵfac = function OrgImportComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OrgImportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService)); };
OrgImportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: OrgImportComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵProvidersFeature"]([
            ..._bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_6__.ImporterProviders,
            (0,_bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_7__.safeProvider)({
                provide: _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_5__.ImportMetadataServiceAbstraction,
                useClass: _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_5__.DefaultImportMetadataService,
                deps: [_bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_6__.SYSTEM_SERVICE_PROVIDER],
            }),
            {
                provide: _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_5__.ImportCollectionServiceAbstraction,
                useClass: _import_collection_admin_service__WEBPACK_IMPORTED_MODULE_10__.ImportCollectionAdminService,
                deps: [_bitwarden_admin_console_common__WEBPACK_IMPORTED_MODULE_0__.CollectionAdminService],
            },
        ])], decls: 6, vars: 6, consts: [[3, "formDisabled", "formLoading", "onSuccessfulImport", "organizationId"], ["form", "import_form_importForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]], template: function OrgImportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "bit-container")(2, "tools-import", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("formDisabled", function OrgImportComponent_Template_tools_import_formDisabled_2_listener($event) { return ctx.disabled = $event; })("formLoading", function OrgImportComponent_Template_tools_import_formLoading_2_listener($event) { return ctx.loading = $event; })("onSuccessfulImport", function OrgImportComponent_Template_tools_import_onSuccessfulImport_2_listener($event) { return ctx.onSuccessfulImport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("organizationId", ctx.routeOrgId);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.disabled)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](5, 4, "importData"), " ");
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_17__.BitFormButtonDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_18__.ButtonComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_19__.ContainerComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_11__.I18nPipe, _bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_6__.ImportComponent, _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_8__.HeaderModule, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_12__.WebHeaderComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_tools_import_org-import_component_ts.9c33c8bb7f9358f11042.js.map