import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuthorization = false;
        this._user= {};
        makeAutoObservable(this);
    }

    setIsAuthorization(bool) {
        this._isAuthorization = bool;
    }

    setUser(user) {
        this._user = user;
    }

    get isAuthorization() {
        return this._isAuthorization;
    }

    get user() {
        return this._user;
    }
}