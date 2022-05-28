import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._types = [];
        this._places = [];
        this._events = [];

        this._selectedType = {};
        this._selectedPlace = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setPlaces(places) {
        this._places = places;
    }

    setEvents(events) {
        this._events = events;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedPlace(place) {
        this._selectedPlace = place;
    }

    getTypeById(id) {
        
    }

    get types() {
        return this._types;
    }

    get places() {
        return this._places;
    }
    
    get events() {
        return this._events;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedPlace() {
        return this._selectedPlace;
    }
}