import { useContext, useEffect } from "react";
import { Context } from "..";
import { fetchEvents } from "../http/eventAPI";
import { addFavourite } from "../http/favouriteAPI";
import "../styles/EventCard.css";

const EventCard = ({event}) => {
    const {favourite} = useContext(Context);
    const {events} = useContext(Context);


    const addFav = () => {
        addFavourite(event).then(data => favourite.setFavourite(fetchEvents().then(data => events.setEvents(data))));
    };

    
    var bg_img = {
        backgroundImage: `url("${event.img}")`
    };

    return (
        <div className="event-wrapper" style={ bg_img }>
            <div className="event">
                <div className="header-of-event">
                    <p>{event.data} </p>
                    <button autofocus className="favourite" onClick={() => addFav()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                </div>
                <p>{event.name}</p>
                <div className="bottom-of-event">
                    <p className="tag">{event.type}</p>
                    <p className="price">{event.price}</p>
                </div>
            </div>
        </div>
    );
}

export default EventCard;