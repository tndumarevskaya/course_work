import "../styles/EventList.css";
import { useContext } from 'react';
import { Context } from '../index';
import EventCard from './EventCard';
import { observer } from "mobx-react-lite";

const EventList = observer(() => {
    const {events} = useContext(Context);
    return (
        <div className="events">
            {events.events.map(event => 
                <EventCard key={event.id} event={event}></EventCard>
            )}
        </div>
    );
})

export default EventList;