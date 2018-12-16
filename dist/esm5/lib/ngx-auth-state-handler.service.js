/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Authentication management service.
 */
import { Injectable } from '@angular/core';
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
export { NgxAuthStateHandler };
if (false) {
    /** @type {?} */
    NgxAuthStateHandler.prototype.USER_KEY;
    /** @type {?} */
    NgxAuthStateHandler.prototype.TOKEN_KEY;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtc3RhdGUtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dGgtc3RhdGUtaGFuZGxlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYXV0aC1zdGF0ZS1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUM7SUFNSTtRQUhBLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFDckIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUVOLENBQUM7Ozs7O0lBRWpCLHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFBO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFBO0lBQzlFLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFBO0lBQ25HLENBQUM7Ozs7O0lBRUQsNkNBQWU7Ozs7SUFBZixVQUFnQixJQUFJO1FBQ2hCLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0RCxDQUFDOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sUUFBa0I7UUFDckIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuQyxRQUFRLEVBQUUsQ0FBQTtJQUNkLENBQUM7O2dCQXpDSixVQUFVOzs7O0lBMENYLDBCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7U0F6Q1ksbUJBQW1COzs7SUFFNUIsdUNBQXFCOztJQUNyQix3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIEF1dGhlbnRpY2F0aW9uIG1hbmFnZW1lbnQgc2VydmljZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEF1dGhTdGF0ZUhhbmRsZXIge1xuXG4gICAgVVNFUl9LRVk6IHN0cmluZyA9ICcnXG4gICAgVE9LRU5fS0VZOiBzdHJpbmcgPSAnJ1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHNldFByZWZpeChwcmVmaXg6IHN0cmluZykge1xuICAgICAgICB0aGlzLlVTRVJfS0VZID0gcHJlZml4LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpICsgJ19VU0VSX0RBVEEnXG4gICAgICAgIHRoaXMuVE9LRU5fS0VZID0gcHJlZml4LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpICsgJ19BQ0NFU1NfVE9LRU4nXG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV0gIT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSAhPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBzZXRMb2dnZWRJblVzZXIodXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV0gPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH1cblxuICAgIGhhc1JvbGUocm9sZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9nZ2VkSW4oKSAmJiAodGhpcy5nZXRMb2dnZWRJblVzZXIoKS5yb2xlcy5pbmRleE9mKHJvbGUudG9VcHBlckNhc2UoKSkgPiAtMSlcbiAgICB9XG5cbiAgICBnZXRMb2dnZWRJblVzZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSkgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuVVNFUl9LRVldKVxuICAgIH1cblxuICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSA9IHRva2VuXG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldXG4gICAgfVxuXG4gICAgbG9nb3V0KGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW3RoaXMuVVNFUl9LRVldXG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICB9XG59Il19