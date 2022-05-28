import { $authHost, $host} from ".";
import jwt_decode from 'jwt-decode';

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const fetchOneType = async (id) => {
    const {data} = await $host.get('api/type' + id);
    return data;
}

export const fetchPlaces = async () => {
    const {data} = await $host.get('api/place');
    return data;
}

export const fetchOnePlace = async (id) => {
    const {data} = await $host.get('api/place' + id);
    return data;
}

export const fetchEvents = async () => {
    const {data} = await $host.get('api/event');
    return data;
}