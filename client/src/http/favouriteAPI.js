import { $authHost, $host} from ".";

export const addFavourite = async (id) => {
    const {data} = await $authHost.post('api/favourite');
    return data;
}

export const fetchFavourite = async () => {
    const {data} = await $host.get('api/favourite');
    return data;
}