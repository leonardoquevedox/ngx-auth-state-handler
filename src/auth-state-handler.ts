/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Authentication management service.
 */

import { Injectable } from '@angular/core'

@Injectable()
export class NgxAuthStateHandler {

    USER_KEY: string = ''
    TOKEN_KEY: string = ''

    constructor() { }

    setPrefix(prefix: string) {
        this.USER_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_USER_DATA'
        this.TOKEN_KEY = prefix.toUpperCase().replace(/-/g, '_') + '_ACCESS_TOKEN'
    }

    isLoggedIn() {
        return localStorage[this.TOKEN_KEY] != 'undefined' && localStorage[this.TOKEN_KEY] != undefined
    }

    setLoggedInUser(user) {
        localStorage[this.USER_KEY] = JSON.stringify(user)
    }

    hasRole(role: string) {
        return this.isLoggedIn() && (this.getLoggedInUser().roles.indexOf(role.toUpperCase()) > -1)
    }

    getLoggedInUser() {
        if (this.isLoggedIn()) return JSON.parse(localStorage[this.USER_KEY])
    }

    setAccessToken(token: string) {
        localStorage[this.TOKEN_KEY] = token
    }

    getAccessToken() {
        return localStorage[this.TOKEN_KEY]
    }

    logout(callback: Function) {
        delete localStorage[this.USER_KEY]
        delete localStorage[this.TOKEN_KEY]
        callback()
    }
}