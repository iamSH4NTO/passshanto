"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_auth_emergency-access_accept_accept-emergency_component_ts"],{

/***/ "./src/app/auth/emergency-access/accept/accept-emergency.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/auth/emergency-access/accept/accept-emergency.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AcceptEmergencyComponent: () => (/* binding */ AcceptEmergencyComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_auth_abstractions_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/auth.service */ "../../libs/common/src/auth/abstractions/auth.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _common_base_accept_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/base.accept.component */ "./src/app/common/base.accept.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _emergency_access_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emergency-access.module */ "./src/app/auth/emergency-access/emergency-access.module.ts");
/* harmony import */ var _services_emergency_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/emergency-access.service */ "./src/app/auth/emergency-access/services/emergency-access.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
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


















const _c0 = a0 => ({ email: a0 });
function AcceptEmergencyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, "loading"));
} }
function AcceptEmergencyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 8)(8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AcceptEmergencyComponent_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r1.register()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 7, "acceptEmergencyAccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](13, _c0, ctx_r1.email))("block", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 9, "logIn"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("block", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 11, "createAccount"), " ");
} }
class AcceptEmergencyComponent extends _common_base_accept_component__WEBPACK_IMPORTED_MODULE_3__.BaseAcceptComponent {
    constructor(router, platformUtilsService, i18nService, route, authService, emergencyAccessService) {
        super(router, platformUtilsService, i18nService, route, authService);
        this.emergencyAccessService = emergencyAccessService;
        this.requiredParameters = ["id", "name", "email", "token"];
        this.failedShortMessage = "emergencyInviteAcceptFailedShort";
        this.failedMessage = "emergencyInviteAcceptFailed";
    }
    authedHandler(qParams) {
        return __awaiter(this, void 0, void 0, function* () {
            this.actionPromise = this.emergencyAccessService.accept(qParams.id, qParams.token);
            yield this.actionPromise;
            this.platformUtilService.showToast("success", this.i18nService.t("inviteAccepted"), this.i18nService.t("emergencyInviteAcceptedDesc"), { timeout: 10000 });
            // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.router.navigate(["/vault"]);
        });
    }
    unauthedHandler(qParams) {
        return __awaiter(this, void 0, void 0, function* () {
            this.name = qParams.name;
            if (this.name != null) {
                // Fix URL encoding of space issue with Angular
                this.name = this.name.replace(/\+/g, " ");
            }
            if (qParams.id) {
                this.emergencyAccessId = qParams.id;
            }
            if (qParams.token) {
                this.acceptEmergencyAccessInviteToken = qParams.token;
            }
        });
    }
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            // We don't need users to complete email verification if they are coming directly from an emailed invite.
            // Therefore, we skip /signup and navigate directly to /finish-signup.
            yield this.router.navigate(["/finish-signup"], {
                queryParams: {
                    email: this.email,
                    acceptEmergencyAccessInviteToken: this.acceptEmergencyAccessInviteToken,
                    emergencyAccessId: this.emergencyAccessId,
                },
            });
        });
    }
}
AcceptEmergencyComponent.ɵfac = function AcceptEmergencyComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AcceptEmergencyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_1__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_emergency_access_service__WEBPACK_IMPORTED_MODULE_6__.EmergencyAccessService)); };
AcceptEmergencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AcceptEmergencyComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 2, consts: [["class", "tw-mt-5 tw-flex tw-justify-center", 4, "ngIf"], [4, "ngIf"], [1, "tw-mt-5", "tw-flex", "tw-justify-center"], [1, "tw-text-center"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "bwi-2x", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["bitTypography", "body1", 1, "tw-text-center"], ["bitTypography", "body1"], [1, "tw-flex", "tw-gap-2"], ["bitButton", "", "buttonType", "primary", "routerLink", "/login", 3, "queryParams", "block"], ["type", "button", "bitButton", "", "buttonType", "primary", 3, "click", "block"]], template: function AcceptEmergencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, AcceptEmergencyComponent_div_0_Template, 8, 6, "div", 0)(1, AcceptEmergencyComponent_div_1_Template, 14, 15, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.authed);
    } }, dependencies: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_13__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_7__.I18nPipe, _emergency_access_module__WEBPACK_IMPORTED_MODULE_5__.EmergencyAccessModule], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_auth_emergency-access_accept_accept-emergency_component_ts.050df73721c745fc0679.js.map