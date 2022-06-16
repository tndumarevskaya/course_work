import React, { useContext, useEffect} from 'react';
import "../styles/MainPage.css";
import SearchInput from '../components/SearchInput';
import FiltersBar from '../components/FiltersBar';
import EventList from '../components/EventList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTypes, fetchPlaces, fetchEvents} from '../http/eventAPI';

const MainPage = observer (() => { 
    const {events} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => events.setTypes(data));
        fetchPlaces().then(data => events.setPlaces(data));
        fetchEvents().then(data => events.setEvents(data));
    }, []);

    return (
        <div className='main'>
            <SearchInput></SearchInput>
            <FiltersBar></FiltersBar>
            <hr/>
            <EventList></EventList>
        </div>
    )
})

export default MainPage;