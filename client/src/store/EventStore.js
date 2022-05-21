import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Выставка'},
            {id: 2, name: 'Концерт'}
        ]
        this._places = [
            {id: 1, name: 'Музей'},
            {id: 2, name: 'Площадка'}
        ]
        this._events = [
            {
                id: 4,
                name: "Выставка \"Молоко без бутылки\"",
                data: "10 апреля",
                isFree: false,
                isOnline: false,
                price: 200,
                img: "b46dfbc2-f591-4e7a-bede-fa80902f1e99.jpg",
                typeId: 1,
                placeId: 1
            },
            {
                id: 5,
                name: "Выставка \"Молоко без бутылки\"",
                data: "10 апреля",
                isFree: false,
                isOnline: false,
                price: 300,
                img: "d8198827-5ffa-4f08-b357-e74306a10439.jpg",
                typeId: 1,
                placeId: 2
            }
        ]
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

    get types() {
        return this._types;
    }

    get places() {
        return this._places;
    }
    
    get events() {
        return this._events;
    }
}