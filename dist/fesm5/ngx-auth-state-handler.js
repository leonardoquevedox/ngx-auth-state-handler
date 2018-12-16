import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxAuthStateHandler = /** @class */ (function () {
    function NgxAuthStateHandler() {
        this.USER_KEY = '';
        this.TOKEN_KEY = '';
    }
    /**
     * @param {?} prefix
     * @return {?}
     */
    NgxAuthStateHandler.prototype.setPrefix = /**
     * @param {?} prefix
     * @return {?}
     */
    function (prefix) {
        this.USER_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_USER_DATA';
        this.TOKEN_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_ACCESS_TOKEN';
    };
    /**
     * @return {?}
     */
    NgxAuthStateHandler.prototype.isLoggedIn = /**
     * @return {?}
     */
    function () {
        return localStorage[this.TOKEN_KEY] != 'undefined' && localStorage[this.TOKEN_KEY] != undefined;
    };
    /**
     * @param {?} user
     * @return {?}
     */
    NgxAuthStateHandler.prototype.setLoggedInUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        localStorage[this.USER_KEY] = JSON.stringify(user);
    };
    /**
     * @param {?} role
     * @return {?}
     */
    NgxAuthStateHandler.prototype.hasRole = /**
     * @param {?} role
     * @return {?}
     */
    function (role) {
        return this.isLoggedIn() && (this.getLoggedInUser().roles.indexOf(role.toUpperCase()) > -1);
    };
    /**
     * @return {?}
     */
    NgxAuthStateHandler.prototype.getLoggedInUser = /**
     * @return {?}
     */
    function () {
        if (this.isLoggedIn())
            return JSON.parse(localStorage[this.USER_KEY]);
    };
    /**
     * @param {?} token
     * @return {?}
     */
    NgxAuthStateHandler.prototype.setAccessToken = /**
     * @param {?} token
     * @return {?}
     */
    function (token) {
        localStorage[this.TOKEN_KEY] = token;
    };
    /**
     * @return {?}
     */
    NgxAuthStateHandler.prototype.getAccessToken = /**
     * @return {?}
     */
    function () {
        return localStorage[this.TOKEN_KEY];
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    NgxAuthStateHandler.prototype.logout = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        delete localStorage[this.USER_KEY];
        delete localStorage[this.TOKEN_KEY];
        callback();
    };
    NgxAuthStateHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgxAuthStateHandler.ctorParameters = function () { return []; };
    return NgxAuthStateHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxAuthStateHandlerModule = /** @class */ (function () {
    function NgxAuthStateHandlerModule() {
    }
    NgxAuthStateHandlerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [NgxAuthStateHandler]
                },] }
    ];
    return NgxAuthStateHandlerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxAuthStateHandler, NgxAuthStateHandlerModule };

//# sourceMappingURL=ngx-auth-state-handler.js.map