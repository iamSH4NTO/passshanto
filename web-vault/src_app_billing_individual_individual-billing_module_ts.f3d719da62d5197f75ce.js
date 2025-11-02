"use strict";
(self["webpackChunk_bitwarden_web_vault"] = self["webpackChunk_bitwarden_web_vault"] || []).push([["src_app_billing_individual_individual-billing_module_ts"],{

/***/ "../../libs/angular/src/platform/utils/feature-flagged-route.ts":
/*!**********************************************************************!*\
  !*** ../../libs/angular/src/platform/utils/feature-flagged-route.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   featureFlaggedRoute: () => (/* binding */ featureFlaggedRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/config/config.service */ "../../libs/common/src/platform/abstractions/config/config.service.ts");
/* harmony import */ var _utils_component_route_swap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/component-route-swap */ "../../libs/angular/src/utils/component-route-swap.ts");




/**
 * Swap between two routes at runtime based on the value of a feature flag.
 * The routes share a common path and configuration but load different components.
 * @param config See {@link FeatureFlaggedRouteConfig}
 * @returns A tuple containing the conditional configuration for the two routes. This should be unpacked into your existing Routes array.
 * @example
 * const routes: Routes = [
 *   ...featureFlaggedRoute({
 *      defaultComponent: GroupsComponent,
 *      flaggedComponent: GroupsNewComponent,
 *      featureFlag: FeatureFlag.GroupsComponentRefactor,
 *      routeOptions: {
 *        path: "groups",
 *        canActivate: [OrganizationPermissionsGuard],
 *      },
 *   }),
 * ]
 */
function featureFlaggedRoute(config) {
    const canMatch$ = () => (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_bitwarden_common_platform_abstractions_config_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)
        .getFeatureFlag$(config.featureFlag)
        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)((flagValue) => flagValue === true));
    return (0,_utils_component_route_swap__WEBPACK_IMPORTED_MODULE_1__.componentRouteSwap)(config.defaultComponent, config.flaggedComponent, canMatch$, config.routeOptions);
}


/***/ }),

/***/ "../../libs/angular/src/utils/component-route-swap.ts":
/*!************************************************************!*\
  !*** ../../libs/angular/src/utils/component-route-swap.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   componentRouteSwap: () => (/* binding */ componentRouteSwap)
/* harmony export */ });
/**
 * Helper function to swap between two components based on an async condition. The async condition is evaluated
 * as an `CanMatchFn` and supports Angular dependency injection via `inject()`.
 *
 * @example
 * ```ts
 * const routes = [
 *  ...componentRouteSwap(
 *     defaultComponent,
 *     altComponent,
 *     async () => {
 *       const configService = inject(ConfigService);
 *       return configService.getFeatureFlag(FeatureFlag.SomeFlag);
 *     },
 *     {
 *      path: 'some-path'
 *     }
 *   ),
 *   // Other routes...
 *  ];
 *  ```
 *
 * @param defaultComponent - The default component to render.
 * @param altComponent - The alternate component to render when the condition is met.
 * @param shouldSwapFn - The async function to determine if the alternate component should be rendered.
 * @param options - The shared route options to apply to the default component, and to the alt component if altOptions is not provided.
 * @param altOptions - The alt route options to apply to the alt component.
 */
function componentRouteSwap(defaultComponent, altComponent, shouldSwapFn, options, altOptions) {
    var _a;
    const defaultRoute = Object.assign(Object.assign({}, options), { component: defaultComponent });
    const selectedAltOptions = altOptions !== null && altOptions !== void 0 ? altOptions : options;
    const altRoute = Object.assign(Object.assign({}, selectedAltOptions), { component: altComponent, canMatch: [shouldSwapFn, ...((_a = selectedAltOptions.canMatch) !== null && _a !== void 0 ? _a : [])] });
    // Return the alternate route first, so it is evaluated first.
    return [altRoute, defaultRoute];
}


/***/ }),

/***/ "./src/app/billing/individual/billing-history-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/billing/individual/billing-history-view.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillingHistoryViewComponent: () => (/* binding */ BillingHistoryViewComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_billing_abstractions_account_account_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/account/account-billing-api.service.abstraction */ "../../libs/common/src/billing/abstractions/account/account-billing-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _shared_billing_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/billing-history.component */ "./src/app/billing/shared/billing-history.component.ts");
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












function BillingHistoryViewComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function BillingHistoryViewComponent_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BillingHistoryViewComponent_ng_container_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.load()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "loadMore"), " ");
} }
function BillingHistoryViewComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-billing-history", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BillingHistoryViewComponent_ng_container_5_button_2_Template, 3, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("openInvoices", ctx_r1.openInvoices)("paidInvoices", ctx_r1.paidInvoices)("transactions", ctx_r1.transactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.hasAdditionalHistory);
} }
class BillingHistoryViewComponent {
    constructor(platformUtilsService, router, accountBillingApiService) {
        this.platformUtilsService = platformUtilsService;
        this.router = router;
        this.accountBillingApiService = accountBillingApiService;
        this.loading = false;
        this.firstLoaded = false;
        this.openInvoices = [];
        this.paidInvoices = [];
        this.transactions = [];
        this.hasAdditionalHistory = false;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.platformUtilsService.isSelfHost()) {
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.router.navigate(["/settings/subscription"]);
                return;
            }
            yield this.load();
            this.firstLoaded = true;
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            this.loading = true;
            const openInvoicesPromise = this.accountBillingApiService.getBillingInvoices("open", this.openInvoices.length > 0 ? this.openInvoices[this.openInvoices.length - 1].id : null);
            const paidInvoicesPromise = this.accountBillingApiService.getBillingInvoices("paid", this.paidInvoices.length > 0 ? this.paidInvoices[this.paidInvoices.length - 1].id : null);
            const transactionsPromise = this.accountBillingApiService.getBillingTransactions(this.transactions.length > 0
                ? this.transactions[this.transactions.length - 1].createdDate
                : null);
            const openInvoices = yield openInvoicesPromise;
            const paidInvoices = yield paidInvoicesPromise;
            const transactions = yield transactionsPromise;
            const pageSize = 5;
            this.openInvoices = [...this.openInvoices, ...openInvoices];
            this.paidInvoices = [...this.paidInvoices, ...paidInvoices];
            this.transactions = [...this.transactions, ...transactions];
            this.hasAdditionalHistory =
                openInvoices.length >= pageSize ||
                    paidInvoices.length >= pageSize ||
                    transactions.length >= pageSize;
            this.loading = false;
        });
    }
}
BillingHistoryViewComponent.ɵfac = function BillingHistoryViewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BillingHistoryViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_1__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_account_account_billing_api_service_abstraction__WEBPACK_IMPORTED_MODULE_0__.AccountBillingApiServiceAbstraction)); };
BillingHistoryViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BillingHistoryViewComponent, selectors: [["ng-component"]], standalone: false, decls: 6, vars: 5, consts: [[1, "tw-flex", "tw-justify-between", "tw-mb-2", "tw-pb-2", "tw-mt-6"], ["bitTypography", "h2"], [4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [3, "openInvoices", "paidInvoices", "transactions"], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click", 4, "ngIf"], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"]], template: function BillingHistoryViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BillingHistoryViewComponent_ng_container_4_Template, 6, 6, "ng-container", 2)(5, BillingHistoryViewComponent_ng_container_5_Template, 3, 4, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, "billingHistory"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.firstLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.openInvoices || ctx.paidInvoices || ctx.transactions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_8__.TypographyDirective, _shared_billing_history_component__WEBPACK_IMPORTED_MODULE_2__.BillingHistoryComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_3__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/individual/individual-billing-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/billing/individual/individual-billing-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndividualBillingRoutingModule: () => (/* binding */ IndividualBillingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _bitwarden_angular_platform_utils_feature_flagged_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/angular/platform/utils/feature-flagged-route */ "../../libs/angular/src/platform/utils/feature-flagged-route.ts");
/* harmony import */ var _bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/enums/feature-flag.enum */ "../../libs/common/src/enums/feature-flag.enum.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_individual_payment_details_account_payment_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/individual/payment-details/account-payment-details.component */ "./src/app/billing/individual/payment-details/account-payment-details.component.ts");
/* harmony import */ var _billing_history_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-history-view.component */ "./src/app/billing/individual/billing-history-view.component.ts");
/* harmony import */ var _premium_premium_vnext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./premium/premium-vnext.component */ "./src/app/billing/individual/premium/premium-vnext.component.ts");
/* harmony import */ var _premium_premium_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./premium/premium.component */ "./src/app/billing/individual/premium/premium.component.ts");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.component */ "./src/app/billing/individual/subscription.component.ts");
/* harmony import */ var _user_subscription_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-subscription.component */ "./src/app/billing/individual/user-subscription.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");











const routes = [
    {
        path: "",
        component: _subscription_component__WEBPACK_IMPORTED_MODULE_6__.SubscriptionComponent,
        data: { titleId: "subscription" },
        children: [
            { path: "", pathMatch: "full", redirectTo: "premium" },
            {
                path: "user-subscription",
                component: _user_subscription_component__WEBPACK_IMPORTED_MODULE_7__.UserSubscriptionComponent,
                data: { titleId: "premiumMembership" },
            },
            ...(0,_bitwarden_angular_platform_utils_feature_flagged_route__WEBPACK_IMPORTED_MODULE_0__.featureFlaggedRoute)({
                defaultComponent: _premium_premium_component__WEBPACK_IMPORTED_MODULE_5__.PremiumComponent,
                flaggedComponent: _premium_premium_vnext_component__WEBPACK_IMPORTED_MODULE_4__.PremiumVNextComponent,
                featureFlag: _bitwarden_common_enums_feature_flag_enum__WEBPACK_IMPORTED_MODULE_1__.FeatureFlag.PM24033PremiumUpgradeNewDesign,
                routeOptions: {
                    data: { titleId: "goPremium" },
                    path: "premium",
                },
            }),
            {
                path: "payment-details",
                component: _bitwarden_web_vault_app_billing_individual_payment_details_account_payment_details_component__WEBPACK_IMPORTED_MODULE_2__.AccountPaymentDetailsComponent,
                data: { titleId: "paymentDetails" },
            },
            {
                path: "billing-history",
                component: _billing_history_view_component__WEBPACK_IMPORTED_MODULE_3__.BillingHistoryViewComponent,
                data: { titleId: "billingHistory" },
            },
        ],
    },
];
class IndividualBillingRoutingModule {
}
IndividualBillingRoutingModule.ɵfac = function IndividualBillingRoutingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IndividualBillingRoutingModule)(); };
IndividualBillingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: IndividualBillingRoutingModule });
IndividualBillingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });


/***/ }),

/***/ "./src/app/billing/individual/individual-billing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/billing/individual/individual-billing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndividualBillingModule: () => (/* binding */ IndividualBillingModule)
/* harmony export */ });
/* harmony import */ var _bitwarden_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/pricing */ "../../libs/pricing/src/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/payment/components */ "./src/app/billing/payment/components/index.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/billing/shared/index.ts");
/* harmony import */ var _individual_billing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./individual-billing-routing.module */ "./src/app/billing/individual/individual-billing-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");






class IndividualBillingModule {
}
IndividualBillingModule.ɵfac = function IndividualBillingModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IndividualBillingModule)(); };
IndividualBillingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: IndividualBillingModule });
IndividualBillingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_individual_billing_routing_module__WEBPACK_IMPORTED_MODULE_4__.IndividualBillingRoutingModule,
        _shared__WEBPACK_IMPORTED_MODULE_3__.BillingSharedModule,
        _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule,
        _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_1__.EnterPaymentMethodComponent,
        _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_1__.EnterBillingAddressComponent,
        _bitwarden_pricing__WEBPACK_IMPORTED_MODULE_0__.PricingCardComponent] });


/***/ }),

/***/ "./src/app/billing/individual/payment-details/account-payment-details.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/billing/individual/payment-details/account-payment-details.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountPaymentDetailsComponent: () => (/* binding */ AccountPaymentDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/tap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/filter.js");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/header/header.module */ "./src/app/layouts/header/header.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clients */ "./src/app/billing/clients/index.ts");
/* harmony import */ var _payment_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../payment/components */ "./src/app/billing/payment/components/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../types */ "./src/app/billing/types/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};













function AccountPaymentDetailsComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function AccountPaymentDetailsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-display-payment-method", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("updated", function AccountPaymentDetailsComponent_Conditional_4_Template_app_display_payment_method_updated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.setPaymentMethod($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-display-account-credit", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const view_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreadContextLet"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("subscriber", view_r3.account)("paymentMethod", view_r3.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("subscriber", view_r3.account)("credit", view_r3.credit);
} }
class AccountPaymentDetailsComponent {
    constructor(accountService, subscriberBillingClient) {
        this.accountService = accountService;
        this.subscriberBillingClient = subscriberBillingClient;
        this.viewState$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
        this.load$ = this.accountService.activeAccount$.pipe(_types__WEBPACK_IMPORTED_MODULE_5__.mapAccountToSubscriber, (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.switchMap)((account) => __awaiter(this, void 0, void 0, function* () {
            const [paymentMethod, credit] = yield Promise.all([
                this.subscriberBillingClient.getPaymentMethod(account),
                this.subscriberBillingClient.getCredit(account),
            ]);
            return {
                account,
                paymentMethod,
                credit,
            };
        })), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.shareReplay)({ bufferSize: 1, refCount: false }));
        this.view$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.load$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)((view) => this.viewState$.next(view))), this.viewState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.filter)((view) => view !== null))).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.shareReplay)({ bufferSize: 1, refCount: true }));
        this.setPaymentMethod = (paymentMethod) => {
            if (this.viewState$.value) {
                this.viewState$.next(Object.assign(Object.assign({}, this.viewState$.value), { paymentMethod }));
            }
        };
    }
}
AccountPaymentDetailsComponent.ɵfac = function AccountPaymentDetailsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountPaymentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_clients__WEBPACK_IMPORTED_MODULE_3__.SubscriberBillingClient)); };
AccountPaymentDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AccountPaymentDetailsComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_clients__WEBPACK_IMPORTED_MODULE_3__.SubscriberBillingClient])], decls: 5, vars: 4, consts: [["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], [3, "updated", "subscriber", "paymentMethod"], [3, "subscriber", "credit"]], template: function AccountPaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "bit-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdeclareLet"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AccountPaymentDetailsComponent_Conditional_3_Template, 6, 6, "ng-container")(4, AccountPaymentDetailsComponent_Conditional_4_Template, 3, 4, "ng-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        const view_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstoreLet"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](!view_r4 ? 3 : 4);
    } }, dependencies: [_payment_components__WEBPACK_IMPORTED_MODULE_4__.DisplayAccountCreditComponent,
        _payment_components__WEBPACK_IMPORTED_MODULE_4__.DisplayPaymentMethodComponent,
        _layouts_header_header_module__WEBPACK_IMPORTED_MODULE_1__.HeaderModule,
        _shared__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_14__.ContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/individual/premium/premium-vnext.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/billing/individual/premium/premium-vnext.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumVNextComponent: () => (/* binding */ PremiumVNextComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions */ "../../libs/common/src/billing/abstractions/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/sync */ "../../libs/common/src/platform/sync/index.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/section/section.component.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/badge/badge.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/typography/typography.module.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/link/link.module.ts");
/* harmony import */ var _bitwarden_pricing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/pricing */ "../../libs/pricing/src/index.ts");
/* harmony import */ var _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/ui-common */ "../../libs/ui/common/src/index.ts");
/* harmony import */ var _services_subscription_pricing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/subscription-pricing.service */ "./src/app/billing/services/subscription-pricing.service.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../types */ "./src/app/billing/types/index.ts");
/* harmony import */ var _types_subscription_pricing_tier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../types/subscription-pricing-tier */ "./src/app/billing/types/subscription-pricing-tier.ts");
/* harmony import */ var _upgrade_unified_upgrade_dialog_unified_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../upgrade/unified-upgrade-dialog/unified-upgrade-dialog.component */ "./src/app/billing/individual/upgrade/unified-upgrade-dialog/unified-upgrade-dialog.component.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






























const _c0 = a0 => ({ amount: a0, cadence: "monthly" });
const _c1 = a0 => ({ type: "primary", text: a0 });
const _c2 = a0 => ({ type: "secondary", text: a0 });
function PremiumVNextComponent_bit_section_1_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "upgradeCompleteSecurity"), " ");
} }
function PremiumVNextComponent_bit_section_1_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "billing-pricing-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("buttonClick", function PremiumVNextComponent_bit_section_1_Conditional_12_Template_billing_pricing_card_buttonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.openUpgradeDialog("Premium")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const premiumData_r3 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tagline", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 5, "planDescPremium"))("price", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](11, _c0, premiumData_r3.price))("button", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 7, "upgradeToPremium")))("features", premiumData_r3.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 9, "premium"));
} }
function PremiumVNextComponent_bit_section_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "billing-pricing-card", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("buttonClick", function PremiumVNextComponent_bit_section_1_Conditional_15_Template_billing_pricing_card_buttonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r1.openUpgradeDialog("Families")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const familiesData_r5 = ctx;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("tagline", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 5, "planDescFamiliesV2"))("price", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](11, _c0, familiesData_r5.price))("button", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](13, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 7, "upgradeToFamilies")))("features", familiesData_r5.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 9, "families"));
} }
function PremiumVNextComponent_bit_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "bit-section")(1, "div", 2)(2, "div", 3)(3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, PremiumVNextComponent_bit_section_1_h2_6_Template, 3, 3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 7)(11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, PremiumVNextComponent_bit_section_1_Conditional_12_Template, 6, 15, "billing-pricing-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, PremiumVNextComponent_bit_section_1_Conditional_15_Template, 6, 15, "billing-pricing-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 9)(18, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("truncate", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 8, "bitwardenFreeplanMessage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r1.isSelfHost);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 10, "individualUpgradeDescriptionMessage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"]((tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 12, ctx_r1.premiumCardData$)) ? 12 : -1, tmp_5_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵconditional"]((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 14, ctx_r1.familiesCardData$)) ? 15 : -1, tmp_6_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 16, "individualUpgradeTaxInformationMessage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](23, 18, "viewbusinessplans"), " ");
} }
class PremiumVNextComponent {
    constructor(accountService, i18nService, apiService, dialogService, platformUtilsService, syncService, toastService, billingAccountProfileStateService, subscriptionPricingService) {
        this.accountService = accountService;
        this.i18nService = i18nService;
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.platformUtilsService = platformUtilsService;
        this.syncService = syncService;
        this.toastService = toastService;
        this.billingAccountProfileStateService = billingAccountProfileStateService;
        this.subscriptionPricingService = subscriptionPricingService;
        this.isSelfHost = false;
        this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_12__.DestroyRef);
        this.finalizeUpgrade = () => __awaiter(this, void 0, void 0, function* () {
            yield this.apiService.refreshIdentityToken();
            yield this.syncService.fullSync(true);
        });
        this.isSelfHost = this.platformUtilsService.isSelfHost();
        this.hasPremiumFromAnyOrganization$ = this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((account) => account
            ? this.billingAccountProfileStateService.hasPremiumFromAnyOrganization$(account.id)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false)));
        this.hasPremiumPersonally$ = this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)((account) => account
            ? this.billingAccountProfileStateService.hasPremiumPersonally$(account.id)
            : (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false)));
        this.accountService.activeAccount$
            .pipe(_types__WEBPACK_IMPORTED_MODULE_9__.mapAccountToSubscriber, (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef))
            .subscribe((subscriber) => {
            this.subscriber = subscriber;
        });
        this.shouldShowNewDesign$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            this.hasPremiumFromAnyOrganization$,
            this.hasPremiumPersonally$,
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(([hasOrgPremium, hasPersonalPremium]) => !hasOrgPremium && !hasPersonalPremium));
        this.personalPricingTiers$ =
            this.subscriptionPricingService.getPersonalSubscriptionPricingTiers$();
        this.premiumCardData$ = this.personalPricingTiers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)((tiers) => {
            const tier = tiers.find((t) => t.id === _types_subscription_pricing_tier__WEBPACK_IMPORTED_MODULE_10__.PersonalSubscriptionPricingTierIds.Premium);
            return {
                tier,
                price: (tier === null || tier === void 0 ? void 0 : tier.passwordManager.type) === "standalone"
                    ? Number((tier.passwordManager.annualPrice / 12).toFixed(2))
                    : 0,
                features: (tier === null || tier === void 0 ? void 0 : tier.passwordManager.features.map((f) => f.value)) || [],
            };
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.shareReplay)({ bufferSize: 1, refCount: true }));
        this.familiesCardData$ = this.personalPricingTiers$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)((tiers) => {
            const tier = tiers.find((t) => t.id === _types_subscription_pricing_tier__WEBPACK_IMPORTED_MODULE_10__.PersonalSubscriptionPricingTierIds.Families);
            return {
                tier,
                price: (tier === null || tier === void 0 ? void 0 : tier.passwordManager.type) === "packaged"
                    ? Number((tier.passwordManager.annualPrice / 12).toFixed(2))
                    : 0,
                features: (tier === null || tier === void 0 ? void 0 : tier.passwordManager.features.map((f) => f.value)) || [],
            };
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.shareReplay)({ bufferSize: 1, refCount: true }));
    }
    openUpgradeDialog(planType) {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(this.accountService.activeAccount$);
            if (!account) {
                return;
            }
            const selectedPlan = planType === "Premium"
                ? _types_subscription_pricing_tier__WEBPACK_IMPORTED_MODULE_10__.PersonalSubscriptionPricingTierIds.Premium
                : _types_subscription_pricing_tier__WEBPACK_IMPORTED_MODULE_10__.PersonalSubscriptionPricingTierIds.Families;
            const dialogParams = {
                account,
                initialStep: _upgrade_unified_upgrade_dialog_unified_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_11__.UnifiedUpgradeDialogStep.Payment,
                selectedPlan: selectedPlan,
                redirectOnCompletion: true,
            };
            const dialogRef = _upgrade_unified_upgrade_dialog_unified_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_11__.UnifiedUpgradeDialogComponent.open(this.dialogService, {
                data: dialogParams,
            });
            dialogRef.closed
                .pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_15__.takeUntilDestroyed)(this.destroyRef))
                .subscribe((result) => {
                if ((result === null || result === void 0 ? void 0 : result.status) === _upgrade_unified_upgrade_dialog_unified_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_11__.UnifiedUpgradeDialogStatus.UpgradedToPremium ||
                    (result === null || result === void 0 ? void 0 : result.status) === _upgrade_unified_upgrade_dialog_unified_upgrade_dialog_component__WEBPACK_IMPORTED_MODULE_11__.UnifiedUpgradeDialogStatus.UpgradedToFamilies) {
                    void this.finalizeUpgrade();
                }
            });
        });
    }
}
PremiumVNextComponent.ɵfac = function PremiumVNextComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PremiumVNextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_3__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_20__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_4__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_5__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_21__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions__WEBPACK_IMPORTED_MODULE_2__.BillingAccountProfileStateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_subscription_pricing_service__WEBPACK_IMPORTED_MODULE_8__.SubscriptionPricingService)); };
PremiumVNextComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: PremiumVNextComponent, selectors: [["ng-component"]], decls: 3, vars: 3, consts: [[1, "tw-max-w-3xl", "tw-mx-auto"], [4, "ngIf"], [1, "tw-text-center"], [1, "tw-mt-8", "tw-mb-6"], ["bitBadge", "", "variant", "secondary", 3, "truncate"], ["class", "tw-mt-2 tw-text-4xl", 4, "ngIf"], [1, "tw-text-muted", "tw-mb-6", "tw-mt-4"], [1, "tw-grid", "tw-grid-cols-1", "md:tw-grid-cols-2", "tw-gap-6", "tw-mt-6", "tw-justify-center"], [3, "tagline", "price", "button", "features"], [1, "tw-text-center", "tw-mt-6"], [1, "tw-text-muted", "tw-mb-2", "tw-italic"], ["bitLink", "", "linkType", "primary", "href", "https://bitwarden.com/pricing/business/", "target", "_blank", "rel", "noopener noreferrer"], ["aria-hidden", "true", 1, "bwi", "bwi-external-link", "tw-ml-1"], [1, "tw-mt-2", "tw-text-4xl"], [3, "buttonClick", "tagline", "price", "button", "features"], ["slot", "title", "bitTypography", "h3", 1, "tw-m-0"]], template: function PremiumVNextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PremiumVNextComponent_bit_section_1_Template, 25, 20, "bit-section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx.shouldShowNewDesign$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _bitwarden_components__WEBPACK_IMPORTED_MODULE_23__.SectionComponent,
        _bitwarden_components__WEBPACK_IMPORTED_MODULE_24__.BadgeModule, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_25__.BadgeComponent, _bitwarden_components__WEBPACK_IMPORTED_MODULE_26__.TypographyModule, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_27__.TypographyDirective, _bitwarden_components__WEBPACK_IMPORTED_MODULE_28__.LinkModule, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_29__.AnchorLinkDirective, _bitwarden_ui_common__WEBPACK_IMPORTED_MODULE_7__.I18nPipe,
        _bitwarden_pricing__WEBPACK_IMPORTED_MODULE_6__.PricingCardComponent], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/individual/premium/premium.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/billing/individual/premium/premium.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumComponent: () => (/* binding */ PremiumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core/rxjs-interop */ "../../node_modules/@angular/core/fesm2022/rxjs-interop.mjs");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/startWith.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/concatMap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions */ "../../libs/common/src/billing/abstractions/index.ts");
/* harmony import */ var _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/billing/enums */ "../../libs/common/src/billing/enums/index.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_environment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/environment.service */ "../../libs/common/src/platform/abstractions/environment.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/sync */ "../../libs/common/src/platform/sync/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_clients__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/clients */ "./src/app/billing/clients/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/payment/components */ "./src/app/billing/payment/components/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_payment_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/payment/types */ "./src/app/billing/payment/types/index.ts");
/* harmony import */ var _bitwarden_web_vault_app_billing_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bitwarden/web-vault/app/billing/types */ "./src/app/billing/types/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router_module-DTJgGWLd.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../../../libs/components/src/container/container.component */ "../../libs/components/src/container/container.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../../../../../libs/components/src/link/link.directive */ "../../libs/components/src/link/link.directive.ts");
/* harmony import */ var _libs_components_src_section_section_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../../../../../libs/components/src/section/section.component */ "../../libs/components/src/section/section.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _shared_self_hosting_license_uploader_individual_self_hosting_license_uploader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/self-hosting-license-uploader/individual-self-hosting-license-uploader.component */ "./src/app/billing/shared/self-hosting-license-uploader/individual-self-hosting-license-uploader.component.ts");
/* harmony import */ var _payment_components_enter_payment_method_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../payment/components/enter-payment-method.component */ "./src/app/billing/payment/components/enter-payment-method.component.ts");
/* harmony import */ var _payment_components_enter_billing_address_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../payment/components/enter-billing-address.component */ "./src/app/billing/payment/components/enter-billing-address.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















































const _c0 = a0 => ({ "tw-mb-0": a0 });
const _c1 = () => ({ plan: "families" });
const _c2 = () => ({ type: "checkout", supportsTaxId: false });
function PremiumComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "goPremium"));
} }
function PremiumComponent_bit_callout_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "bit-callout", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 2, "youHavePremiumAccess"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, "alreadyPremiumFromOrg"), " ");
} }
function PremiumComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("href", ctx_r0.premiumURL, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "purchasePremium"), " ");
} }
function PremiumComponent_bit_section_46_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "bit-section")(1, "individual-self-hosting-license-uploader", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onLicenseFileUploaded", function PremiumComponent_bit_section_46_Template_individual_self_hosting_license_uploader_onLicenseFileUploaded_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r2); const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r0.onLicenseFileSelectedChanged()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function PremiumComponent_form_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "form", 14)(1, "bit-section")(2, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 15)(6, "bit-form-field", 16)(7, "bit-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "bit-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](15, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "bit-section")(18, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](23, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](29, "hr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "bit-section")(31, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "app-enter-payment-method", 20)(36, "app-enter-billing-address", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 19)(38, "div", 22)(39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](42, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](45, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](46, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](47, "hr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "p", 24)(49, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](51, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](53, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](54, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](55, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](57, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.formGroup)("bitSubmit", ctx_r0.submitPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 26, "addons"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 28, "additionalStorageGb"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 30, "additionalStorageGbDesc"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](16, 37, "additionalStorageIntervalDesc", "1 GB", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](14, 32, ctx_r0.storageGBPrice, "$"), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](15, 35, "year")));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 42, "summary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 44, "premiumMembership"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](23, 46, ctx_r0.premiumPrice, "$"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 49, "additionalStorageGb"), ": ", ctx_r0.formGroup.value.additionalStorage || 0, " GB \u00D7 ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](27, 51, ctx_r0.storageGBPrice, "$"), " = ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](28, 54, ctx_r0.additionalStorageCost, "$"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 57, "paymentInformation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("group", ctx_r0.formGroup.controls.paymentMethod)("showBankAccount", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("group", ctx_r0.formGroup.controls.billingAddress)("scenario", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](78, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](41, 59, "planPrice"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](42, 61, ctx_r0.subtotal, "USD $"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](45, 64, "estimatedTax"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](46, 66, ctx_r0.estimatedTax, "USD $"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](51, 69, "total"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](53, 71, ctx_r0.total, "USD $"), "/", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](54, 74, "year"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](57, 76, "submit"), " ");
} }
class PremiumComponent {
    constructor(activatedRoute, apiService, billingAccountProfileStateService, environmentService, i18nService, platformUtilsService, router, syncService, toastService, accountService, subscriberBillingClient, taxClient) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.billingAccountProfileStateService = billingAccountProfileStateService;
        this.environmentService = environmentService;
        this.i18nService = i18nService;
        this.platformUtilsService = platformUtilsService;
        this.router = router;
        this.syncService = syncService;
        this.toastService = toastService;
        this.accountService = accountService;
        this.subscriberBillingClient = subscriberBillingClient;
        this.taxClient = taxClient;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
            additionalStorage: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.max(99)]),
            paymentMethod: _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_9__.EnterPaymentMethodComponent.getFormGroup(),
            billingAddress: _bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_9__.EnterBillingAddressComponent.getFormGroup(),
        });
        this.isSelfHost = false;
        this.estimatedTax = 0;
        this.familyPlanMaxUserCount = 6;
        this.premiumPrice = 10;
        this.storageGBPrice = 4;
        this.finalizeUpgrade = () => __awaiter(this, void 0, void 0, function* () {
            yield this.apiService.refreshIdentityToken();
            yield this.syncService.fullSync(true);
        });
        this.postFinalizeUpgrade = () => __awaiter(this, void 0, void 0, function* () {
            this.toastService.showToast({
                variant: "success",
                title: null,
                message: this.i18nService.t("premiumUpdated"),
            });
            yield this.navigateToSubscriptionPage();
        });
        this.navigateToSubscriptionPage = () => this.router.navigate(["../user-subscription"], { relativeTo: this.activatedRoute });
        this.submitPayment = () => __awaiter(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                return;
            }
            // Check if account credit is selected
            const selectedPaymentType = this.formGroup.value.paymentMethod.type;
            let paymentMethodType;
            let paymentToken;
            if (selectedPaymentType === _bitwarden_web_vault_app_billing_payment_types__WEBPACK_IMPORTED_MODULE_10__.NonTokenizablePaymentMethods.accountCredit) {
                // Account credit doesn't need tokenization
                paymentMethodType = _bitwarden_common_billing_enums__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodType.Credit;
                paymentToken = "";
            }
            else {
                // Tokenize for card, bank account, or PayPal
                const paymentMethod = yield this.enterPaymentMethodComponent.tokenize();
                paymentMethodType = (0,_bitwarden_web_vault_app_billing_payment_types__WEBPACK_IMPORTED_MODULE_10__.tokenizablePaymentMethodToLegacyEnum)(paymentMethod.type);
                paymentToken = paymentMethod.token;
            }
            const formData = new FormData();
            formData.append("paymentMethodType", paymentMethodType.toString());
            formData.append("paymentToken", paymentToken);
            formData.append("additionalStorageGb", this.formGroup.value.additionalStorage.toString());
            formData.append("country", this.formGroup.value.billingAddress.country);
            formData.append("postalCode", this.formGroup.value.billingAddress.postalCode);
            yield this.apiService.postPremium(formData);
            yield this.finalizeUpgrade();
            yield this.postFinalizeUpgrade();
        });
        this.isSelfHost = this.platformUtilsService.isSelfHost();
        this.hasPremiumFromAnyOrganization$ = this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)((account) => this.billingAccountProfileStateService.hasPremiumFromAnyOrganization$(account.id)));
        // Fetch account credit
        this.accountCredit$ = this.accountService.activeAccount$.pipe(_bitwarden_web_vault_app_billing_types__WEBPACK_IMPORTED_MODULE_11__.mapAccountToSubscriber, (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)((account) => this.subscriberBillingClient.getCredit(account)));
        // Check if user has enough account credit for the purchase
        this.hasEnoughAccountCredit$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([
            this.accountCredit$,
            this.formGroup.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.startWith)(this.formGroup.value)),
        ]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.map)(([credit, formValue]) => {
            var _a;
            const selectedPaymentType = (_a = formValue.paymentMethod) === null || _a === void 0 ? void 0 : _a.type;
            if (selectedPaymentType !== _bitwarden_web_vault_app_billing_payment_types__WEBPACK_IMPORTED_MODULE_10__.NonTokenizablePaymentMethods.accountCredit) {
                return true; // Not using account credit, so this check doesn't apply
            }
            return credit >= this.total;
        }));
        (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.combineLatest)([
            this.accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)((account) => this.billingAccountProfileStateService.hasPremiumPersonally$(account.id))),
            this.environmentService.cloudWebVaultUrl$,
        ])
            .pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_22__.takeUntilDestroyed)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.concatMap)(([hasPremiumPersonally, cloudWebVaultURL]) => {
            if (hasPremiumPersonally) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.from)(this.navigateToSubscriptionPage());
            }
            this.cloudWebVaultURL = cloudWebVaultURL;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)(true);
        }))
            .subscribe();
        this.formGroup.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.debounceTime)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => __awaiter(this, void 0, void 0, function* () { return yield this.refreshSalesTax(); })), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_22__.takeUntilDestroyed)())
            .subscribe();
    }
    get additionalStorageCost() {
        return this.storageGBPrice * this.formGroup.value.additionalStorage;
    }
    get premiumURL() {
        return `${this.cloudWebVaultURL}/#/settings/subscription/premium`;
    }
    get subtotal() {
        return this.premiumPrice + this.additionalStorageCost;
    }
    get total() {
        return this.subtotal + this.estimatedTax;
    }
    onLicenseFileSelectedChanged() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.postFinalizeUpgrade();
        });
    }
    refreshSalesTax() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                return;
            }
            const billingAddress = (0,_bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_9__.getBillingAddressFromForm)(this.formGroup.controls.billingAddress);
            const taxAmounts = yield this.taxClient.previewTaxForPremiumSubscriptionPurchase(this.formGroup.value.additionalStorage, billingAddress);
            this.estimatedTax = taxAmounts.tax;
        });
    }
}
PremiumComponent.ɵfac = function PremiumComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PremiumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions__WEBPACK_IMPORTED_MODULE_2__.BillingAccountProfileStateService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_environment_service__WEBPACK_IMPORTED_MODULE_4__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_6__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_7__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_28__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_web_vault_app_billing_clients__WEBPACK_IMPORTED_MODULE_8__.SubscriberBillingClient), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_bitwarden_web_vault_app_billing_clients__WEBPACK_IMPORTED_MODULE_8__.TaxClient)); };
PremiumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: PremiumComponent, selectors: [["ng-component"]], viewQuery: function PremiumComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_bitwarden_web_vault_app_billing_payment_components__WEBPACK_IMPORTED_MODULE_9__.EnterPaymentMethodComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.enterPaymentMethodComponent = _t.first);
    } }, standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([_bitwarden_web_vault_app_billing_clients__WEBPACK_IMPORTED_MODULE_8__.SubscriberBillingClient, _bitwarden_web_vault_app_billing_clients__WEBPACK_IMPORTED_MODULE_8__.TaxClient])], decls: 48, vars: 47, consts: [["bitTypography", "h2", 4, "ngIf"], ["type", "info", "icon", "bwi bwi-star-f", 3, "title", 4, "ngIf"], ["type", "success"], [1, "bwi-ul"], ["aria-hidden", "true", 1, "bwi", "bwi-check", "tw-text-success", "bwi-li"], ["bitTypography", "body1", 3, "ngClass"], ["bitLink", "", "linkType", "primary", "routerLink", "/create-organization", 3, "queryParams"], ["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href", 4, "ngIf"], [4, "ngIf"], [3, "formGroup", "bitSubmit", 4, "ngIf"], ["bitTypography", "h2"], ["type", "info", "icon", "bwi bwi-star-f", 3, "title"], ["bitButton", "", "target", "_blank", "rel", "noreferrer", "buttonType", "secondary", 3, "href"], [3, "onLicenseFileUploaded"], [3, "formGroup", "bitSubmit"], [1, "tw-grid", "tw-grid-cols-12", "tw-gap-4"], [1, "tw-col-span-6"], ["bitInput", "", "formControlName", "additionalStorage", "type", "number", "step", "1", 3, "placeholder"], [1, "tw-my-3"], [1, "tw-mb-4"], [3, "group", "showBankAccount"], [3, "group", "scenario"], [1, "tw-text-muted", "tw-text-sm", "tw-flex", "tw-flex-col"], [1, "tw-my-1", "tw-w-1/4", "tw-ml-0"], ["bitTypography", "body1"], ["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""]], template: function PremiumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "bit-container")(1, "bit-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, PremiumComponent_h2_2_Template, 3, 3, "h2", 0)(3, PremiumComponent_bit_callout_3_Template, 4, 6, "bit-callout", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "bit-callout", 2)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "ul", 3)(10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](29, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](31, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](35, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](37, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](40, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](44, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](45, PremiumComponent_a_45_Template, 3, 4, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, PremiumComponent_bit_section_46_Template, 2, 0, "bit-section", 8)(47, PremiumComponent_form_47_Template, 58, 79, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSelfHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 17, ctx.hasPremiumFromAnyOrganization$));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](8, 19, "premiumUpgradeUnlockFeatures"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 21, "premiumSignUpStorage"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 23, "premiumSignUpTwoStepOptions"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 25, "premiumSignUpEmergency"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 27, "premiumSignUpReports"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](29, 29, "premiumSignUpTotp"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 31, "premiumSignUpSupport"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](37, 33, "premiumSignUpFuture"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](44, _c0, !ctx.isSelfHost));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind3"](41, 38, "premiumPriceWithFamilyPlan", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](40, 35, ctx.premiumPrice, "$"), ctx.familyPlanMaxUserCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](46, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](44, 42, "bitwardenFamiliesPlan"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isSelfHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isSelfHost);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.isSelfHost);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_29__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_31__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_32__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_33__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_34__.CalloutComponent, _libs_components_src_container_container_component__WEBPACK_IMPORTED_MODULE_35__.ContainerComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_36__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_37__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_38__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_39__.BitFormFieldComponent, _libs_components_src_link_link_directive__WEBPACK_IMPORTED_MODULE_40__.AnchorLinkDirective, _libs_components_src_section_section_component__WEBPACK_IMPORTED_MODULE_41__.SectionComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_42__.TypographyDirective, _shared_self_hosting_license_uploader_individual_self_hosting_license_uploader_component__WEBPACK_IMPORTED_MODULE_12__.IndividualSelfHostingLicenseUploaderComponent, _payment_components_enter_payment_method_component__WEBPACK_IMPORTED_MODULE_13__.EnterPaymentMethodComponent, _payment_components_enter_billing_address_component__WEBPACK_IMPORTED_MODULE_14__.EnterBillingAddressComponent, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_30__.CurrencyPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_15__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/individual/subscription.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/billing/individual/subscription.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionComponent: () => (/* binding */ SubscriptionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/account/billing-account-profile-state.service */ "../../libs/common/src/billing/abstractions/account/billing-account-profile-state.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_tabs_tab_nav_bar_tab_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../libs/components/src/tabs/tab-nav-bar/tab-nav-bar.component */ "../../libs/components/src/tabs/tab-nav-bar/tab-nav-bar.component.ts");
/* harmony import */ var _libs_components_src_tabs_tab_nav_bar_tab_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../libs/components/src/tabs/tab-nav-bar/tab-link.component */ "../../libs/components/src/tabs/tab-nav-bar/tab-link.component.ts");
/* harmony import */ var _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/header/web-header.component */ "./src/app/layouts/header/web-header.component.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");














function SubscriptionComponent_bit_tab_nav_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "bit-tab-nav-bar", 1)(1, "bit-tab-link", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "bit-tab-link", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "bit-tab-link", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("route", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r0.hasPremium$) ? "user-subscription" : "premium");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, "subscription"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 8, "paymentDetails"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 10, "billingHistory"));
} }
class SubscriptionComponent {
    constructor(platformUtilsService, billingAccountProfileStateService, accountService) {
        this.platformUtilsService = platformUtilsService;
        this.hasPremium$ = accountService.activeAccount$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)((account) => billingAccountProfileStateService.hasPremiumPersonally$(account.id)));
    }
    ngOnInit() {
        this.selfHosted = this.platformUtilsService.isSelfHost();
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_2__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_1__.BillingAccountProfileStateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
SubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["ng-component"]], standalone: false, decls: 3, vars: 1, consts: [["slot", "tabs", 4, "ngIf"], ["slot", "tabs"], [3, "route"], ["route", "payment-details"], ["route", "billing-history"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SubscriptionComponent_bit_tab_nav_bar_1_Template, 11, 12, "bit-tab-nav-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selfHosted);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _libs_components_src_tabs_tab_nav_bar_tab_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__.TabNavBarComponent, _libs_components_src_tabs_tab_nav_bar_tab_link_component__WEBPACK_IMPORTED_MODULE_10__.TabLinkComponent, _layouts_header_web_header_component__WEBPACK_IMPORTED_MODULE_3__.WebHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_4__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/individual/user-subscription.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/billing/individual/user-subscription.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSubscriptionComponent: () => (/* binding */ UserSubscriptionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/account.service */ "../../libs/common/src/auth/abstractions/account.service.ts");
/* harmony import */ var _bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/billing/abstractions/account/billing-account-profile-state.service */ "../../libs/common/src/billing/abstractions/account/billing-account-profile-state.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/environment.service */ "../../libs/common/src/platform/abstractions/environment.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/file-download/file-download.service */ "../../libs/common/src/platform/abstractions/file-download/file-download.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/log.service */ "../../libs/common/src/platform/abstractions/log.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _shared_adjust_storage_dialog_adjust_storage_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/adjust-storage-dialog/adjust-storage-dialog.component */ "./src/app/billing/shared/adjust-storage-dialog/adjust-storage-dialog.component.ts");
/* harmony import */ var _shared_offboarding_survey_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/offboarding-survey.component */ "./src/app/billing/shared/offboarding-survey.component.ts");
/* harmony import */ var _shared_update_license_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/update-license-dialog.component */ "./src/app/billing/shared/update-license-dialog.component.ts");
/* harmony import */ var _shared_update_license_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/update-license-types */ "./src/app/billing/shared/update-license-types.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2022/router-Dwfin5Au.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_angular_src_directives_api_action_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/angular/src/directives/api-action.directive */ "../../libs/angular/src/directives/api-action.directive.ts");
/* harmony import */ var _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../libs/components/src/badge/badge.component */ "../../libs/components/src/badge/badge.component.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../libs/components/src/callout/callout.component */ "../../libs/components/src/callout/callout.component.ts");
/* harmony import */ var _libs_components_src_progress_progress_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../libs/components/src/progress/progress.component */ "../../libs/components/src/progress/progress.component.ts");
/* harmony import */ var _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/cell.directive */ "../../libs/components/src/table/cell.directive.ts");
/* harmony import */ var _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../libs/components/src/table/table.component */ "../../libs/components/src/table/table.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




































function UserSubscriptionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "loading"));
} }
function UserSubscriptionComponent_ng_container_1_bit_callout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, "canceled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "subscriptionCanceled"), "");
} }
function UserSubscriptionComponent_ng_container_1_bit_callout_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "bit-callout", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 9, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_bit_callout_2_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.reinstate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reinstateBtn_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 5, "pendingCancellation"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 7, "subscriptionPendingCanceled"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appApiAction", ctx_r1.reinstatePromise)("disabled", reinstateBtn_r3.loading());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 9, "reinstateSubscription"), " ");
} }
function UserSubscriptionComponent_ng_container_1_dl_3_dd_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, ctx_r1.sub.expiration, "mediumDate"));
} }
function UserSubscriptionComponent_ng_container_1_dl_3_dd_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "neverExpires"));
} }
function UserSubscriptionComponent_ng_container_1_dl_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "dl")(1, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, UserSubscriptionComponent_ng_container_1_dl_3_dd_4_Template, 3, 4, "dd", 2)(5, UserSubscriptionComponent_ng_container_1_dl_3_dd_5_Template, 3, 3, "dd", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "expiration"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.sub.expiration);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.sub.expiration);
} }
function UserSubscriptionComponent_ng_container_1_div_4_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "pendingCancellation"));
} }
function UserSubscriptionComponent_ng_container_1_div_4_div_17_ng_template_5_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate3"](" ", i_r4.name, " ", i_r4.quantity > 1 ? "\u00D7" + i_r4.quantity : "", " @ ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 5, i_r4.amount, "$"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](6, 8, i_r4.quantity * i_r4.amount, "$"), " /", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 11, i_r4.interval), "");
} }
function UserSubscriptionComponent_ng_container_1_div_4_div_17_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, UserSubscriptionComponent_ng_container_1_div_4_div_17_ng_template_5_tr_0_Template, 8, 13, "tr", 19);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.subscription.items);
} }
function UserSubscriptionComponent_ng_container_1_div_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 16)(1, "strong", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "bit-table");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, UserSubscriptionComponent_ng_container_1_div_4_div_17_ng_template_5_Template, 1, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "details"));
} }
function UserSubscriptionComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "dl")(3, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "dd")(7, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, UserSubscriptionComponent_ng_container_1_div_4_span_9_Template, 3, 3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, UserSubscriptionComponent_ng_container_1_div_4_div_17_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 6, "status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.subscription && ctx_r1.subscriptionStatus || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscriptionMarkedForCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 8, "nextCharge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r1.nextInvoice ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](15, 10, ctx_r1.sub.subscription.periodEndDate, "mediumDate") + ", " + _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](16, 13, ctx_r1.nextInvoice.amount, "$") : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscription);
} }
function UserSubscriptionComponent_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div")(2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_ng_container_5_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.updateLicense()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 4, "updateLicense"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "", ctx_r1.cloudWebVaultUrl, "/#/settings/subscription", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 6, "launchCloudSubscription"), " ");
} }
function UserSubscriptionComponent_ng_container_1_ng_container_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_ng_container_6_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.downloadLicense()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "downloadLicense"), " ");
} }
function UserSubscriptionComponent_ng_container_1_ng_container_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 29, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_ng_container_6_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.cancelSubscription()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cancelBtn_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("appApiAction", ctx_r1.cancelPromise)("disabled", cancelBtn_r8.loading());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 3, "cancelSubscription"), " ");
} }
function UserSubscriptionComponent_ng_container_1_ng_container_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 30)(2, "div", 31)(3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_ng_container_6_ng_container_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.adjustStorage(true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function UserSubscriptionComponent_ng_container_1_ng_container_6_ng_container_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.adjustStorage(false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 2, "addStorage"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 4, "removeStorage"), " ");
} }
function UserSubscriptionComponent_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, UserSubscriptionComponent_ng_container_1_ng_container_6_button_2_Template, 3, 3, "button", 24)(3, UserSubscriptionComponent_ng_container_1_ng_container_6_button_3_Template, 4, 5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "i18n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "bit-progress", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, UserSubscriptionComponent_ng_container_1_ng_container_6_ng_container_11_Template, 9, 6, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.subscription || !ctx_r1.subscription.cancelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscription && !ctx_r1.subscription.cancelled && !ctx_r1.subscriptionMarkedForCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 6, "storage"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind3"](9, 8, "subscriptionStorage", ctx_r1.sub.maxStorageGb || 0, ctx_r1.sub.storageName || "0 MB"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("barWidth", ctx_r1.storagePercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscription && !ctx_r1.subscription.cancelled && !ctx_r1.subscriptionMarkedForCancel);
} }
function UserSubscriptionComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, UserSubscriptionComponent_ng_container_1_bit_callout_1_Template, 4, 6, "bit-callout", 5)(2, UserSubscriptionComponent_ng_container_1_bit_callout_2_Template, 9, 11, "bit-callout", 5)(3, UserSubscriptionComponent_ng_container_1_dl_3_Template, 6, 5, "dl", 2)(4, UserSubscriptionComponent_ng_container_1_div_4_Template, 18, 16, "div", 6)(5, UserSubscriptionComponent_ng_container_1_ng_container_5_Template, 8, 8, "ng-container", 2)(6, UserSubscriptionComponent_ng_container_1_ng_container_6_Template, 12, 12, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscription && ctx_r1.subscription.cancelled);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.subscriptionMarkedForCancel);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selfHosted);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.selfHosted);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.selfHosted);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r1.selfHosted);
} }
class UserSubscriptionComponent {
    constructor(apiService, platformUtilsService, i18nService, router, logService, fileDownloadService, dialogService, environmentService, billingAccountProfileStateService, toastService, accountService) {
        this.apiService = apiService;
        this.platformUtilsService = platformUtilsService;
        this.i18nService = i18nService;
        this.router = router;
        this.logService = logService;
        this.fileDownloadService = fileDownloadService;
        this.dialogService = dialogService;
        this.environmentService = environmentService;
        this.billingAccountProfileStateService = billingAccountProfileStateService;
        this.toastService = toastService;
        this.accountService = accountService;
        this.loading = false;
        this.firstLoaded = false;
        this.selfHosted = false;
        this.cancelSubscription = () => __awaiter(this, void 0, void 0, function* () {
            const reference = (0,_shared_offboarding_survey_component__WEBPACK_IMPORTED_MODULE_9__.openOffboardingSurvey)(this.dialogService, {
                data: {
                    type: "User",
                },
            });
            this.cancelPromise = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.lastValueFrom)(reference.closed);
            const result = yield this.cancelPromise;
            if (result === _shared_offboarding_survey_component__WEBPACK_IMPORTED_MODULE_9__.OffboardingSurveyDialogResultType.Closed) {
                return;
            }
            yield this.load();
        });
        this.updateLicense = () => __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            const dialogRef = _shared_update_license_dialog_component__WEBPACK_IMPORTED_MODULE_10__.UpdateLicenseDialogComponent.open(this.dialogService);
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.lastValueFrom)(dialogRef.closed);
            if (result === _shared_update_license_types__WEBPACK_IMPORTED_MODULE_11__.UpdateLicenseDialogResult.Updated) {
                yield this.load();
            }
        });
        this.adjustStorage = (add) => __awaiter(this, void 0, void 0, function* () {
            const dialogRef = _shared_adjust_storage_dialog_adjust_storage_dialog_component__WEBPACK_IMPORTED_MODULE_8__.AdjustStorageDialogComponent.open(this.dialogService, {
                data: {
                    price: 4,
                    cadence: "year",
                    type: add ? "Add" : "Remove",
                },
            });
            const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.lastValueFrom)(dialogRef.closed);
            if (result === _shared_adjust_storage_dialog_adjust_storage_dialog_component__WEBPACK_IMPORTED_MODULE_8__.AdjustStorageDialogResultType.Submitted) {
                yield this.load();
            }
        });
        this.selfHosted = this.platformUtilsService.isSelfHost();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.cloudWebVaultUrl = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.environmentService.cloudWebVaultUrl$);
            yield this.load();
            this.firstLoaded = true;
        });
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            const userId = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.accountService.activeAccount$);
            if (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(this.billingAccountProfileStateService.hasPremiumPersonally$(userId.id))) {
                this.loading = true;
                this.sub = yield this.apiService.getUserSubscription();
            }
            else {
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.router.navigate(["/settings/subscription/premium"]);
                return;
            }
            this.loading = false;
        });
    }
    reinstate() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.loading) {
                return;
            }
            const confirmed = yield this.dialogService.openSimpleDialog({
                title: { key: "reinstateSubscription" },
                content: { key: "reinstateConfirmation" },
                type: "warning",
            });
            if (!confirmed) {
                return;
            }
            try {
                this.reinstatePromise = this.apiService.postReinstatePremium();
                yield this.reinstatePromise;
                this.toastService.showToast({
                    variant: "success",
                    title: null,
                    message: this.i18nService.t("reinstated"),
                });
                // FIXME: Verify that this floating promise is intentional. If it is, add an explanatory comment and ensure there is proper error handling.
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.load();
            }
            catch (e) {
                this.logService.error(e);
            }
        });
    }
    downloadLicense() {
        if (this.loading) {
            return;
        }
        const licenseString = JSON.stringify(this.sub.license, null, 2);
        this.fileDownloadService.download({
            fileName: "bitwarden_premium_license.json",
            blobData: licenseString,
        });
    }
    get subscriptionMarkedForCancel() {
        return (this.subscription != null && !this.subscription.cancelled && this.subscription.cancelAtEndDate);
    }
    get subscription() {
        return this.sub != null ? this.sub.subscription : null;
    }
    get nextInvoice() {
        return this.sub != null ? this.sub.upcomingInvoice : null;
    }
    get storagePercentage() {
        return this.sub != null && this.sub.maxStorageGb
            ? +(100 * (this.sub.storageGb / this.sub.maxStorageGb)).toFixed(2)
            : 0;
    }
    get title() {
        return this.i18nService.t(this.selfHosted ? "subscription" : "premiumMembership");
    }
    get subscriptionStatus() {
        if (!this.subscription) {
            return null;
        }
        else {
            /*
             Premium users who sign up with PayPal will have their subscription activated by a webhook.
             This is an arbitrary 15-second grace period where we show their subscription as active rather than
             incomplete while we wait for our webhook to process the `invoice.created` event.
            */
            if (this.subscription.status === "incomplete") {
                const periodStartMS = new Date(this.subscription.periodStartDate).getTime();
                const nowMS = new Date().getTime();
                return nowMS - periodStartMS <= 15000
                    ? this.i18nService.t("active")
                    : this.subscription.status;
            }
            return this.subscription.status;
        }
    }
}
UserSubscriptionComponent.ɵfac = function UserSubscriptionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UserSubscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_7__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_5__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_log_service__WEBPACK_IMPORTED_MODULE_6__.LogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_file_download_file_download_service__WEBPACK_IMPORTED_MODULE_4__.FileDownloadService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_18__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_environment_service__WEBPACK_IMPORTED_MODULE_3__.EnvironmentService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_billing_abstractions_account_billing_account_profile_state_service__WEBPACK_IMPORTED_MODULE_2__.BillingAccountProfileStateService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_19__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService)); };
UserSubscriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: UserSubscriptionComponent, selectors: [["ng-component"]], standalone: false, decls: 2, vars: 2, consts: [["reinstateBtn", ""], ["cancelBtn", ""], [4, "ngIf"], ["aria-hidden", "true", 1, "bwi", "bwi-spinner", "bwi-spin", "tw-text-muted", 3, "title"], [1, "tw-sr-only"], ["type", "warning", 3, "title", 4, "ngIf"], ["class", "tw-flex tw-w-full", 4, "ngIf"], ["type", "warning", 3, "title"], ["bitTypography", "body1"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click", "appApiAction", "disabled"], [1, "tw-flex", "tw-w-full"], [1, "tw-w-1/3"], [1, "tw-capitalize"], ["bitBadge", "", "variant", "warning", 4, "ngIf"], ["class", "tw-w-2/3", 4, "ngIf"], ["bitBadge", "", "variant", "warning"], [1, "tw-w-2/3"], [1, "!tw-block", "tw-mb-1"], ["body", ""], [4, "ngFor", "ngForOf"], ["bitCell", ""], ["type", "button", "bitButton", "", "buttonType", "secondary", 3, "click"], ["bitButton", "", "buttonType", "secondary", "target", "_blank", "rel", "noreferrer", 3, "href"], [1, "tw-flex", "tw-justify-between"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click", 4, "ngIf"], ["bitButton", "", "type", "button", "buttonType", "danger", "class", "tw-ml-auto", 3, "appApiAction", "disabled", "click", 4, "ngIf"], ["bitTypography", "h3", 1, "tw-mt-16"], ["bgColor", "success", "size", "default", 3, "barWidth"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"], ["bitButton", "", "type", "button", "buttonType", "danger", 1, "tw-ml-auto", 3, "click", "appApiAction", "disabled"], [1, "tw-mt-3"], [1, "tw-flex", "tw-gap-1"]], template: function UserSubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, UserSubscriptionComponent_ng_container_0_Template, 6, 6, "ng-container", 2)(1, UserSubscriptionComponent_ng_container_1_Template, 7, 6, "ng-container", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.firstLoaded && ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sub);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _libs_angular_src_directives_api_action_directive__WEBPACK_IMPORTED_MODULE_12__.ApiActionDirective, _libs_components_src_badge_badge_component__WEBPACK_IMPORTED_MODULE_21__.BadgeComponent, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_22__.ButtonComponent, _libs_components_src_callout_callout_component__WEBPACK_IMPORTED_MODULE_23__.CalloutComponent, _libs_components_src_progress_progress_component__WEBPACK_IMPORTED_MODULE_24__.ProgressComponent, _libs_components_src_table_cell_directive__WEBPACK_IMPORTED_MODULE_25__.CellDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_26__.TableBodyDirective, _libs_components_src_table_table_component__WEBPACK_IMPORTED_MODULE_26__.TableComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_27__.TypographyDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_13__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/shared/self-hosting-license-uploader/individual-self-hosting-license-uploader.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/billing/shared/self-hosting-license-uploader/individual-self-hosting-license-uploader.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IndividualSelfHostingLicenseUploaderComponent: () => (/* binding */ IndividualSelfHostingLicenseUploaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_auth_abstractions_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/auth/abstractions/token.service */ "../../libs/common/src/auth/abstractions/token.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bitwarden/common/platform/sync */ "../../libs/common/src/platform/sync/index.ts");
/* harmony import */ var _shared_self_hosting_license_uploader_abstract_self_hosting_license_uploader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/self-hosting-license-uploader/abstract-self-hosting-license-uploader.component */ "./src/app/billing/shared/self-hosting-license-uploader/abstract-self-hosting-license-uploader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
/* harmony import */ var _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../libs/components/src/typography/typography.directive */ "../../libs/components/src/typography/typography.directive.ts");
/* harmony import */ var _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../libs/angular/src/platform/pipes/i18n.pipe */ "../../libs/angular/src/platform/pipes/i18n.pipe.ts");
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
 * Processes license file uploads for individual plans.
 * @remarks Requires self-hosting.
 */
class IndividualSelfHostingLicenseUploaderComponent extends _shared_self_hosting_license_uploader_abstract_self_hosting_license_uploader_component__WEBPACK_IMPORTED_MODULE_5__.AbstractSelfHostingLicenseUploaderComponent {
    constructor(apiService, formBuilder, i18nService, platformUtilsService, syncService, toastService, tokenService) {
        super(formBuilder, i18nService, platformUtilsService, toastService, tokenService);
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.i18nService = i18nService;
        this.platformUtilsService = platformUtilsService;
        this.syncService = syncService;
        this.toastService = toastService;
        this.tokenService = tokenService;
        /**
         * Emitted when a license file has been successfully uploaded & processed.
         */
        this.onLicenseFileUploaded = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    }
    submit() {
        const _super = Object.create(null, {
            submit: { get: () => super.submit }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.submit.call(this);
            const formData = new FormData();
            formData.append("license", this.formValue.file);
            yield this.apiService.postAccountLicense(formData);
            yield this.apiService.refreshIdentityToken();
            yield this.syncService.fullSync(true);
            this.onLicenseFileUploaded.emit();
        });
    }
    get description() {
        return "uploadLicenseFilePremium";
    }
    get hintFileName() {
        return "bitwarden_premium_license.json";
    }
}
IndividualSelfHostingLicenseUploaderComponent.ɵfac = function IndividualSelfHostingLicenseUploaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || IndividualSelfHostingLicenseUploaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_3__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_sync__WEBPACK_IMPORTED_MODULE_4__.SyncService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_9__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_auth_abstractions_token_service__WEBPACK_IMPORTED_MODULE_1__.TokenService)); };
IndividualSelfHostingLicenseUploaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: IndividualSelfHostingLicenseUploaderComponent, selectors: [["individual-self-hosting-license-uploader"]], outputs: { onLicenseFileUploaded: "onLicenseFileUploaded" }, standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 21, consts: [["fileSelector", ""], ["bitTypography", "body1", 1, "tw-break-words", "tw-whitespace-normal", "tw-mb-8"], [3, "formGroup", "bitSubmit"], [1, "tw-my-1"], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"], ["bitInput", "", "type", "file", "formControlName", "file", "accept", "application/JSON", "hidden", "", 1, "tw-hidden", 3, "change"], ["type", "submit", "bitButton", "", "bitFormButton", "", "buttonType", "primary"]], template: function IndividualSelfHostingLicenseUploaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 2)(4, "bit-form-field")(5, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 3)(9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function IndividualSelfHostingLicenseUploaderComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const fileSelector_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](fileSelector_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function IndividualSelfHostingLicenseUploaderComponent_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onLicenseFileSelectedChanged($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "bit-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](21, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 8, "uploadLicenseFileOrg"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form)("bitSubmit", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 10, ctx.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 12, "chooseFile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.form.value.file ? ctx.form.value.file.name : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 14, "noFileChosen"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 16, "licenseFileDesc", ctx.hintFileName));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](21, 19, "submit"), " ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_10__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_11__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_12__.ButtonComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_13__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_14__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_15__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_16__.BitFormFieldComponent, _libs_components_src_typography_typography_directive__WEBPACK_IMPORTED_MODULE_17__.TypographyDirective, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe], encapsulation: 2 });


/***/ }),

/***/ "./src/app/billing/shared/update-license-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/billing/shared/update-license-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateLicenseDialogComponent: () => (/* binding */ UpdateLicenseDialogComponent)
/* harmony export */ });
/* harmony import */ var _bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bitwarden/common/abstractions/api.service */ "../../libs/common/src/abstractions/api.service.ts");
/* harmony import */ var _bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bitwarden/common/admin-console/abstractions/organization/organization-api.service.abstraction */ "../../libs/common/src/admin-console/abstractions/organization/organization-api.service.abstraction.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/i18n.service */ "../../libs/common/src/platform/abstractions/i18n.service.ts");
/* harmony import */ var _bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bitwarden/common/platform/abstractions/platform-utils.service */ "../../libs/common/src/platform/abstractions/platform-utils.service.ts");
/* harmony import */ var _update_license_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-license-types */ "./src/app/billing/shared/update-license-types.ts");
/* harmony import */ var _update_license_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-license.component */ "./src/app/billing/shared/update-license.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2022/core.mjs");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/dialog/dialog.service.ts");
/* harmony import */ var _bitwarden_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @bitwarden/components */ "../../libs/components/src/toast/toast.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2022/forms.mjs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2022/common_module-Dx7dWex5.mjs");
/* harmony import */ var _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/bit-action.directive */ "../../libs/components/src/async-actions/bit-action.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/form-button.directive */ "../../libs/components/src/async-actions/form-button.directive.ts");
/* harmony import */ var _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../libs/components/src/async-actions/bit-submit.directive */ "../../libs/components/src/async-actions/bit-submit.directive.ts");
/* harmony import */ var _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../libs/components/src/button/button.component */ "../../libs/components/src/button/button.component.ts");
/* harmony import */ var _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/directives/dialog-close.directive */ "../../libs/components/src/dialog/directives/dialog-close.directive.ts");
/* harmony import */ var _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../libs/components/src/dialog/dialog/dialog.component */ "../../libs/components/src/dialog/dialog/dialog.component.ts");
/* harmony import */ var _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/label.component */ "../../libs/components/src/form-control/label.component.ts");
/* harmony import */ var _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-control/hint.component */ "../../libs/components/src/form-control/hint.component.ts");
/* harmony import */ var _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../libs/components/src/input/input.directive */ "../../libs/components/src/input/input.directive.ts");
/* harmony import */ var _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../libs/components/src/form-field/form-field.component */ "../../libs/components/src/form-field/form-field.component.ts");
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



























function UpdateLicenseDialogComponent_button_23_Template(rf, ctx) { if (rf & 1) {
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
class UpdateLicenseDialogComponent extends _update_license_component__WEBPACK_IMPORTED_MODULE_5__.UpdateLicenseComponent {
    constructor(dialogRef, apiService, i18nService, platformUtilsService, organizationApiService, formBuilder, toastService) {
        super(apiService, i18nService, platformUtilsService, organizationApiService, formBuilder, toastService);
        this.dialogRef = dialogRef;
        this.submitLicenseDialog = () => __awaiter(this, void 0, void 0, function* () {
            yield this.submitLicense();
        });
        this.cancel = () => __awaiter(this, void 0, void 0, function* () {
            yield this.cancel();
            this.dialogRef.close(_update_license_types__WEBPACK_IMPORTED_MODULE_4__.UpdateLicenseDialogResult.Cancelled);
        });
    }
    submitLicense() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.submit();
            if (result === _update_license_types__WEBPACK_IMPORTED_MODULE_4__.UpdateLicenseDialogResult.Updated) {
                this.dialogRef.close(_update_license_types__WEBPACK_IMPORTED_MODULE_4__.UpdateLicenseDialogResult.Updated);
            }
        });
    }
    static open(dialogService) {
        return dialogService.open(UpdateLicenseDialogComponent);
    }
}
UpdateLicenseDialogComponent.ɵfac = function UpdateLicenseDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UpdateLicenseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_8__.DialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_abstractions_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_i18n_service__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_platform_abstractions_platform_utils_service__WEBPACK_IMPORTED_MODULE_3__.PlatformUtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_common_admin_console_abstractions_organization_organization_api_service_abstraction__WEBPACK_IMPORTED_MODULE_1__.OrganizationApiServiceAbstraction), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_bitwarden_components__WEBPACK_IMPORTED_MODULE_10__.ToastService)); };
UpdateLicenseDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: UpdateLicenseDialogComponent, selectors: [["ng-component"]], standalone: false, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 22, consts: [["fileSelector", ""], [3, "formGroup", "bitSubmit"], ["dialogSize", "default", 3, "title"], ["bitDialogContent", ""], ["bitButton", "", "type", "button", "buttonType", "secondary", 3, "click"], ["bitInput", "", "type", "file", "formControlName", "file", "hidden", "", 1, "tw-hidden", 3, "change"], ["bitDialogFooter", ""], ["type", "submit", "buttonType", "primary", "bitButton", "", "bitFormButton", ""], ["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", "bitDialogClose", "", 3, "bitAction", 4, "ngIf"], ["bitButton", "", "bitFormButton", "", "buttonType", "secondary", "type", "button", "bitDialogClose", "", 3, "bitAction"]], template: function UpdateLicenseDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 1)(1, "bit-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "bit-form-field")(5, "bit-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div")(9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UpdateLicenseDialogComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); const fileSelector_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](15); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](fileSelector_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 5, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function UpdateLicenseDialogComponent_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setSelectedFile($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "bit-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "i18n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, UpdateLicenseDialogComponent_button_23_Template, 3, 4, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.updateLicenseForm)("bitSubmit", ctx.submitLicenseDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 9, "updateLicense"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 11, "licenseFile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 13, "chooseFile"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.licenseFile ? ctx.licenseFile.name : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 15, "noFileChosen"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 17, "licenseFileDesc", "bitwarden_premium_license.json"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 20, "submit"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showCancel);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _libs_components_src_async_actions_bit_action_directive__WEBPACK_IMPORTED_MODULE_12__.BitActionDirective, _libs_components_src_async_actions_form_button_directive__WEBPACK_IMPORTED_MODULE_13__.BitFormButtonDirective, _libs_components_src_async_actions_bit_submit_directive__WEBPACK_IMPORTED_MODULE_14__.BitSubmitDirective, _libs_components_src_button_button_component__WEBPACK_IMPORTED_MODULE_15__.ButtonComponent, _libs_components_src_dialog_directives_dialog_close_directive__WEBPACK_IMPORTED_MODULE_16__.DialogCloseDirective, _libs_components_src_dialog_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__.DialogComponent, _libs_components_src_form_control_label_component__WEBPACK_IMPORTED_MODULE_18__.BitLabel, _libs_components_src_form_control_hint_component__WEBPACK_IMPORTED_MODULE_19__.BitHintComponent, _libs_components_src_input_input_directive__WEBPACK_IMPORTED_MODULE_20__.BitInputDirective, _libs_components_src_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_21__.BitFormFieldComponent, _libs_angular_src_platform_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_6__.I18nPipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_app_billing_individual_individual-billing_module_ts.f3d719da62d5197f75ce.js.map