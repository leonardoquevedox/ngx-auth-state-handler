/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtc3RhdGUtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dGgtc3RhdGUtaGFuZGxlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYXV0aC1zdGF0ZS1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFMUM7SUFNSTtRQUhBLGFBQVEsR0FBVyxFQUFFLENBQUE7UUFDckIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtJQUVOLENBQUM7Ozs7O0lBRWpCLHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsWUFBWSxDQUFBO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFBO0lBQzlFLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFBO0lBQ25HLENBQUM7Ozs7O0lBRUQsNkNBQWU7Ozs7SUFBZixVQUFnQixJQUFJO1FBQ2hCLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0RCxDQUFDOzs7OztJQUVELHFDQUFPOzs7O0lBQVAsVUFBUSxJQUFZO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDSSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sUUFBa0I7UUFDckIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuQyxRQUFRLEVBQUUsQ0FBQTtJQUNkLENBQUM7O2dCQXpDSixVQUFVOzs7SUEwQ1gsMEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSxtQkFBbUI7OztJQUU1Qix1Q0FBcUI7O0lBQ3JCLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQXV0aGVudGljYXRpb24gbWFuYWdlbWVudCBzZXJ2aWNlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4QXV0aFN0YXRlSGFuZGxlciB7XG5cbiAgICBVU0VSX0tFWTogc3RyaW5nID0gJydcbiAgICBUT0tFTl9LRVk6IHN0cmluZyA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgc2V0UHJlZml4KHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuVVNFUl9LRVkgPSBwcmVmaXgudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8tL2csICdfJykgKyAnX1VTRVJfREFUQSdcbiAgICAgICAgdGhpcy5UT0tFTl9LRVkgPSBwcmVmaXgudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8tL2csICdfJykgKyAnX0FDQ0VTU19UT0tFTidcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSAhPSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldICE9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHNldExvZ2dlZEluVXNlcih1c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVt0aGlzLlVTRVJfS0VZXSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgfVxuXG4gICAgaGFzUm9sZShyb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2dnZWRJbigpICYmICh0aGlzLmdldExvZ2dlZEluVXNlcigpLnJvbGVzLmluZGV4T2Yocm9sZS50b1VwcGVyQ2FzZSgpKSA+IC0xKVxuICAgIH1cblxuICAgIGdldExvZ2dlZEluVXNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpKSByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV0pXG4gICAgfVxuXG4gICAgc2V0QWNjZXNzVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldID0gdG9rZW5cbiAgICB9XG5cbiAgICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV1cbiAgICB9XG5cbiAgICBsb2dvdXQoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV1cbiAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgIH1cbn0iXX0=