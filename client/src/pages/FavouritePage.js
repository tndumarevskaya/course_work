import React, {useContext, useEffect} from 'react';
import { Context } from '../index';
import { fetchFavourite } from '../http/favouriteAPI';
import EventList from '../components/EventList';
import "../styles/MainPage.css";
import { observer } from 'mobx-react-lite';


const FavouritePage = observer(() => {
    const {favourite} = useContext(Context);

    useEffect(() => {
        fetchFavourite().then(data => favourite.setFavourite(data));
    }, [])

    return (
        <div className='main'>
            <div className='text-events'>
                Избранное
            </div>
            <hr/>
            <EventList></EventList>
        </div>
    )
})

export default FavouritePage;