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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWF1dGgtc3RhdGUtaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dGgtc3RhdGUtaGFuZGxlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtYXV0aC1zdGF0ZS1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFHMUMsTUFBTTtJQUtGO1FBSEEsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFBO0lBRU4sQ0FBQzs7Ozs7SUFFakIsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUE7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUE7SUFDOUUsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxXQUFXLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUE7SUFDbkcsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBSTtRQUNoQixZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRixDQUFDOzs7O0lBRUQsZUFBZTtRQUNYLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBa0I7UUFDckIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNuQyxRQUFRLEVBQUUsQ0FBQTtJQUNkLENBQUM7OztZQXpDSixVQUFVOzs7OztJQUdQLHVDQUFxQjs7SUFDckIsd0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBBdXRoZW50aWNhdGlvbiBtYW5hZ2VtZW50IHNlcnZpY2UuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hBdXRoU3RhdGVIYW5kbGVyIHtcblxuICAgIFVTRVJfS0VZOiBzdHJpbmcgPSAnJ1xuICAgIFRPS0VOX0tFWTogc3RyaW5nID0gJydcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBzZXRQcmVmaXgocHJlZml4OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5VU0VSX0tFWSA9IHByZWZpeC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJ18nKSArICdfVVNFUl9EQVRBJ1xuICAgICAgICB0aGlzLlRPS0VOX0tFWSA9IHByZWZpeC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoLy0vZywgJ18nKSArICdfQUNDRVNTX1RPS0VOJ1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldICE9ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV0gIT0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgc2V0TG9nZ2VkSW5Vc2VyKHVzZXIpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlW3RoaXMuVVNFUl9LRVldID0gSlNPTi5zdHJpbmdpZnkodXNlcilcbiAgICB9XG5cbiAgICBoYXNSb2xlKHJvbGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0xvZ2dlZEluKCkgJiYgKHRoaXMuZ2V0TG9nZ2VkSW5Vc2VyKCkucm9sZXMuaW5kZXhPZihyb2xlLnRvVXBwZXJDYXNlKCkpID4gLTEpXG4gICAgfVxuXG4gICAgZ2V0TG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkpIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVt0aGlzLlVTRVJfS0VZXSlcbiAgICB9XG5cbiAgICBzZXRBY2Nlc3NUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV0gPSB0b2tlblxuICAgIH1cblxuICAgIGdldEFjY2Vzc1Rva2VuKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXVxuICAgIH1cblxuICAgIGxvZ291dChjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZVt0aGlzLlVTRVJfS0VZXVxuICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgfVxufSJdfQ==