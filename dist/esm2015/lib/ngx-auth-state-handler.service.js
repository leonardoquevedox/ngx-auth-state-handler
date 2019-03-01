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
export class NgxAuthStateHandler {
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
if (false) {
    /** @type {?} */
    NgxAuthStateHandler.prototype.USER_KEY;
    /** @type {?} */
    NgxAuthStateHandler.prototype.TOKEN_KEY;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtc3RhdGUtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dGgtc3RhdGUtaGFuZGxlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYXV0aC1zdGF0ZS1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFHMUMsTUFBTTtJQUtGO1FBSEEsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFBO0lBRU4sQ0FBQzs7Ozs7SUFFakIsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUE7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUE7SUFDOUUsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFBO0lBQ25HLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQUk7UUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQy9GLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNsQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsUUFBUSxFQUFFLENBQUE7SUFDZCxDQUFDOzs7WUF6Q0osVUFBVTs7Ozs7SUFHUCx1Q0FBcUI7O0lBQ3JCLHdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQXV0aGVudGljYXRpb24gbWFuYWdlbWVudCBzZXJ2aWNlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmd4QXV0aFN0YXRlSGFuZGxlciB7XG5cbiAgICBVU0VSX0tFWTogc3RyaW5nID0gJydcbiAgICBUT0tFTl9LRVk6IHN0cmluZyA9ICcnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgc2V0UHJlZml4KHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuVVNFUl9LRVkgPSBwcmVmaXgudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8tL2csICdfJykgKyAnX1VTRVJfREFUQSdcbiAgICAgICAgdGhpcy5UT0tFTl9LRVkgPSBwcmVmaXgudG9VcHBlckNhc2UoKS5yZXBsYWNlKC8tL2csICdfJykgKyAnX0FDQ0VTU19UT0tFTidcbiAgICB9XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSAhPSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldICE9IHVuZGVmaW5lZFxuICAgIH1cblxuICAgIHNldExvZ2dlZEluVXNlcih1c2VyKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVt0aGlzLlVTRVJfS0VZXSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpXG4gICAgfVxuXG4gICAgaGFzUm9sZShyb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNMb2dnZWRJbigpICYmICh0aGlzLmdldExvZ2dlZEluVXNlcigpLnJvbGVzLmluZGV4T2Yocm9sZS50b1VwcGVyQ2FzZSgpKSA+IC0xKVxuICAgIH1cblxuICAgIGdldExvZ2dlZEluVXNlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpKSByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV0pXG4gICAgfVxuXG4gICAgc2V0QWNjZXNzVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldID0gdG9rZW5cbiAgICB9XG5cbiAgICBnZXRBY2Nlc3NUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV1cbiAgICB9XG5cbiAgICBsb2dvdXQoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV1cbiAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV1cbiAgICAgICAgY2FsbGJhY2soKVxuICAgIH1cbn0iXX0=