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
/** @nocollapse */
NgxAuthStateHandler.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    NgxAuthStateHandler.prototype.USER_KEY;
    /** @type {?} */
    NgxAuthStateHandler.prototype.TOKEN_KEY;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdGF0ZS1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWF1dGgtc3RhdGUtaGFuZGxlci8iLCJzb3VyY2VzIjpbImF1dGgtc3RhdGUtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUcxQyxNQUFNLE9BQU8sbUJBQW1CO0lBSzVCO1FBSEEsYUFBUSxHQUFXLEVBQUUsQ0FBQTtRQUNyQixjQUFTLEdBQVcsRUFBRSxDQUFBO0lBRU4sQ0FBQzs7Ozs7SUFFakIsU0FBUyxDQUFDLE1BQWM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUE7UUFDdEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUE7SUFDOUUsQ0FBQzs7OztJQUVELFVBQVU7UUFDTixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFBO0lBQ25HLENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQUk7UUFDaEIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RELENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQy9GLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUN6RSxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQ3hCLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFBO0lBQ3hDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1YsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWtCO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNsQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbkMsUUFBUSxFQUFFLENBQUE7SUFDZCxDQUFDOzs7WUF6Q0osVUFBVTs7Ozs7O0lBR1AsdUNBQXFCOztJQUNyQix3Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIEF1dGhlbnRpY2F0aW9uIG1hbmFnZW1lbnQgc2VydmljZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neEF1dGhTdGF0ZUhhbmRsZXIge1xuXG4gICAgVVNFUl9LRVk6IHN0cmluZyA9ICcnXG4gICAgVE9LRU5fS0VZOiBzdHJpbmcgPSAnJ1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHNldFByZWZpeChwcmVmaXg6IHN0cmluZykge1xuICAgICAgICB0aGlzLlVTRVJfS0VZID0gcHJlZml4LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpICsgJ19VU0VSX0RBVEEnXG4gICAgICAgIHRoaXMuVE9LRU5fS0VZID0gcHJlZml4LnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvLS9nLCAnXycpICsgJ19BQ0NFU1NfVE9LRU4nXG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZVt0aGlzLlRPS0VOX0tFWV0gIT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSAhPSB1bmRlZmluZWRcbiAgICB9XG5cbiAgICBzZXRMb2dnZWRJblVzZXIodXNlcikge1xuICAgICAgICBsb2NhbFN0b3JhZ2VbdGhpcy5VU0VSX0tFWV0gPSBKU09OLnN0cmluZ2lmeSh1c2VyKVxuICAgIH1cblxuICAgIGhhc1JvbGUocm9sZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9nZ2VkSW4oKSAmJiAodGhpcy5nZXRMb2dnZWRJblVzZXIoKS5yb2xlcy5pbmRleE9mKHJvbGUudG9VcHBlckNhc2UoKSkgPiAtMSlcbiAgICB9XG5cbiAgICBnZXRMb2dnZWRJblVzZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSkgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW3RoaXMuVVNFUl9LRVldKVxuICAgIH1cblxuICAgIHNldEFjY2Vzc1Rva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlW3RoaXMuVE9LRU5fS0VZXSA9IHRva2VuXG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldXG4gICAgfVxuXG4gICAgbG9nb3V0KGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW3RoaXMuVVNFUl9LRVldXG4gICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2VbdGhpcy5UT0tFTl9LRVldXG4gICAgICAgIGNhbGxiYWNrKClcbiAgICB9XG59Il19