import "../styles/EventList.css";
import {observer} from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';

const EventList = () => {
    const {event} = useContext(Context);
    return (
        <Row className="d-flex">
            {event.events.map(event =>

            )}
        </Row>
    );
}

export default EventList;