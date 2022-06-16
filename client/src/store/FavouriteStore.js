import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._userId = [];
        this._events = [];
        makeAutoObservable(this);
    }

    setFavourite(events) {
        this._events = events;
    }

    setFavourite(events) {
        this._events = events;
    }

    get events() {
        return this._events;
    }
}