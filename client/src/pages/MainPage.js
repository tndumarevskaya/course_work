import React from 'react';
import "../styles/MainPage.css";
import SearchInput from '../components/SearchInput';
import FiltersBar from '../components/FiltersBar';

const MainPage = () => { 
    return (
        <div className='main'>
            <SearchInput></SearchInput>
            <FiltersBar></FiltersBar>
        </div>
    )
}

export default MainPage;