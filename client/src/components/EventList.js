import "../styles/EventList.css";
import { useContext } from 'react';
import { Context } from '../index';
import EventCard from './EventCard';
import { Row } from "react-bootstrap";

const EventList = () => {
    const {event} = useContext(Context);
    return (
        <div className="events">
            {event.events.map(event =>
                <EventCard key={event.id} event={event}></EventCard>
            )}
        </div>
    );
}

export default EventList;