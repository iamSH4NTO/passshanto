"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_tools_import_import-web_component_ts"],{

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

/***/ "./src/app/tools/import/import-web.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tools/import/import-web.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportWebComponent: () => (/* binding */ ImportWebComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/importer-core */ "../../libs/importer/src/index.ts");
/* harmony import */ var _bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/importer-ui */ "../../libs/importer/src/components/index.ts");
/* harmony import */ var _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/ui-common */ "../../libs/ui/common/src/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













class ImportWebComponent {
    constructor(router) {
        this.router = router;
        this.loading = false;
        this.disabled = false;
    }
    /**
     * Callback that is called after a successful import.
     */
    onSuccessfulImport(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.router.navigate(["vault"]);
        });
    }
}
ImportWebComponent.ɵfac = function ImportWebComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ImportWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
ImportWebComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ImportWebComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([
            ..._bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_1__.ImporterProviders,
            (0,_bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_2__.safeProvider)({
                provide: _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_0__.ImportMetadataServiceAbstraction,
                useClass: _bitwarden_importer_core__WEBPACK_IMPORTED_MODULE_0__.DefaultImportMetadataService,
                deps: [_bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_1__.SYSTEM_SERVICE_PROVIDER],
            }),
        ])], decls: 6, vars: 5, consts: [[3, "formDisabled", "formLoading", "onSuccessfulImport"], ["form", "import_form_importForm", "bitButton", "", "type", "submit", "bitFormButton", "", "buttonType", "primary", 3, "disabled", "loading"]], template: function ImportWebComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "bit-container")(2, "tools-import", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formDisabled", function ImportWebComponent_Template_tools_import_formDisabled_2_listener($event) { return ctx.disabled = $event; })("formLoading", function ImportWebComponent_Template_tools_import_formLoading_2_listener($event) { return ctx.loading = $event; })("onSuccessfulImport", function ImportWebComponent_Template_tools_import_onSuccessfulImport_2_listener($event) { return ctx.onSuccessfulImport($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.disabled)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, "importData"), " ");
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_9__.BitFormButtonDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_10__.ButtonComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_11__.ContainerComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_5__.I18nPipe, _bitwarden_importer_ui__WEBPACK_IMPORTED_MODULE_1__.ImportComponent, _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_6__.WebHeaderComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_tools_import_import-web_component_ts.b58947344ce2b57edc29.js.map