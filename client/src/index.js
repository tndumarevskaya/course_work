import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EventStore from './store/EventStore';
import UserStore from './store/UserStore';
import FavouriteStore from './store/FavouriteStore';
  
export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={
    {user: new UserStore(),
    events: new EventStore(),
    favourite: new FavouriteStore()}
  }>
    <App/>
  </Context.Provider>
);