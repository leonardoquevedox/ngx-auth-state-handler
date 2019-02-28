export declare class NgxAuthStateHandler {
    USER_KEY: string;
    TOKEN_KEY: string;
    constructor();
    setPrefix(prefix: string): void;
    isLoggedIn(): boolean;
    setLoggedInUser(user: any): void;
    hasRole(role: string): boolean;
    getLoggedInUser(): any;
    setAccessToken(token: string): void;
    getAccessToken(): any;
    logout(callback: Function): void;
}
