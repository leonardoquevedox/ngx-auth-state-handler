(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-auth-state-handler', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-auth-state-handler'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

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
            { type: core.Injectable }
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.NgxAuthStateHandlerModule = NgxAuthStateHandlerModule;
    exports.ɵa = NgxAuthStateHandler;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-auth-state-handler.umd.js.map