import {makeAutoObservable} from "mobx";

export default class EventStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Выставки'},
            {id: 2, name: 'Концерты'},
            {id: 3, name: 'Обучение'},
            {id: 4, name: 'Праздники'},
            {id: 5, name: 'Спектакли'},
            {id: 6, name: 'Фестивали'},
            {id: 7, name: 'Экскурсии'},
            {id: 8, name: 'Кино'},
            {id: 9, name: 'Прочие'}
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