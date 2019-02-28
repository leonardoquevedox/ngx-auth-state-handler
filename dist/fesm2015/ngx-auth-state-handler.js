import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAuthStateHandler {
    constructor() {
        this.USER_KEY = '';
        this.TOKEN_KEY = '';
    }
    /**
     * @param {?} prefix
     * @return {?}
     */
    setPrefix(prefix) {
        this.USER_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_USER_DATA';
        this.TOKEN_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_ACCESS_TOKEN';
    }
    /**
     * @return {?}
     */
    isLoggedIn() {
        return localStorage[this.TOKEN_KEY] != 'undefined' && localStorage[this.TOKEN_KEY] != undefined;
    }
    /**
     * @param {?} user
     * @return {?}
     */
    setLoggedInUser(user) {
        localStorage[this.USER_KEY] = JSON.stringify(user);
    }
    /**
     * @param {?} role
     * @return {?}
     */
    hasRole(role) {
        return this.isLoggedIn() && (this.getLoggedInUser().roles.indexOf(role.toUpperCase()) > -1);
    }
    /**
     * @return {?}
     */
    getLoggedInUser() {
        if (this.isLoggedIn())
            return JSON.parse(localStorage[this.USER_KEY]);
    }
    /**
     * @param {?} token
     * @return {?}
     */
    setAccessToken(token) {
        localStorage[this.TOKEN_KEY] = token;
    }
    /**
     * @return {?}
     */
    getAccessToken() {
        return localStorage[this.TOKEN_KEY];
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    logout(callback) {
        delete localStorage[this.USER_KEY];
        delete localStorage[this.TOKEN_KEY];
        callback();
    }
}
NgxAuthStateHandler.decorators = [
    { type: Injectable }
];
NgxAuthStateHandler.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAuthStateHandlerModule {
}
NgxAuthStateHandlerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                providers: [NgxAuthStateHandler]
            },] }
];

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