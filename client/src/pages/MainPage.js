import React, { useContext, useEffect} from 'react';
import "../styles/MainPage.css";
import SearchInput from '../components/SearchInput';
import FiltersBar from '../components/FiltersBar';
import EventList from '../components/EventList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchTypes, fetchPlaces, fetchEvents} from '../http/eventAPI';

const MainPage = observer (() => { 
    const {event} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => event.setTypes(data));
        fetchPlaces().then(data => event.setPlaces(data));
    }, [])

    useEffect(() => {
        fetchEvents().then(data => event.setEvents(data));
    }, [])

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