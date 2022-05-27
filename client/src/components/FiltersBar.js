import "../styles/FiltersBar.css";
import {observer} from 'mobx-react-lite';
import React, { useContext } from 'react';
import {Form, Dropdown} from 'react-bootstrap';
import { Checkbox } from '@mui/material';
import { orange } from '@mui/material/colors';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Context} from "../index"
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';

const FiltersBar = observer (() => {
    const {event} = useContext(Context);

    const CustomToggleForType = React.forwardRef(({children, onClick}, ref) => (
        <button className='type' ref={ref}  onClick={(e) => {
            e.preventDefault();
            onClick(e);
            }}><div className='text'>{children}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
                            <path d="M0,0h24v24H0V0z" fill="none"/></g>
                            <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
            </svg>
        </button>
    )); 

    const CustomToggleForPlace = React.forwardRef(({children, onClick}, ref) => (
        <button className='place' ref={ref}  onClick={(e) => {
            e.preventDefault();
            onClick(e);
            }}><div className='text'>{children}</div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
                            <path d="M0,0h24v24H0V0z" fill="none"/></g>
                            <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
            </svg>
        </button>
    )); 

    const CustomToggleForFilters = React.forwardRef(({children, onClick}, ref) => (
        <button className='filters' ref={ref}  onClick={(e) => {
            e.preventDefault();
            onClick(e);
            }}>{children}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g>
                            <path d="M0,0h24v24H0V0z" fill="none"/></g>
                            <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
            </svg>
        </button>
    )); 

    const setToggleForType = (type) => {
        document.querySelector('.type .text').innerText = `${type.name}`;
    } 

    const setToggleForPlace = (place) => {
        document.querySelector('.place .text').innerText = `${place.name}`;
    }

    return (
        <div>
            <Form.Group className='first-line'>
                <div className='text-events'>
                    Предстоящие события
                </div>
                <FormControlLabel className="online" control={ <Checkbox
                    sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                            color: orange[600],
                        },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                />} 
                label="Онлайн" 
                sx={{
                    '& .MuiFormControlLabel-label': {fontSize: 22, fontFamily: 'Nunito'},
                }}/>

                <FormControlLabel className="free" control={ <Checkbox
                    sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                            color: orange[600],
                        },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                />} 
                label="Бесплатно" 
                sx={{
                    '& .MuiFormControlLabel-label': {fontSize: 22, fontFamily: 'Nunito'},
                }}/>
                </Form.Group>

            <div className='second-line'>

                <Form.Control className="data" type="date" placeholder='Дата'/>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggleForPlace} id="dropdown-custom-components">
                        Места
                    </Dropdown.Toggle>

                    <DropdownMenu>
                        {event.places.map(place =>
                            <Dropdown.Item 
                                eventKey={place.id} 
                                onClick={() => {
                                    event.setSelectedType(place);
                                    setToggleForPlace(place)}}>
                                    {place.name}
                            </Dropdown.Item>
                        )}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggleForType} id="dropdown-custom-components">
                        Виды событий
                    </Dropdown.Toggle>

                    <DropdownMenu>
                        {event.types.map(type =>
                            <Dropdown.Item 
                                eventKey={type.id} 
                                onClick={() => {
                                    event.setSelectedType(type); 
                                    setToggleForType(type);}}>
                                    {type.name}
                            </Dropdown.Item>
                        )}
                    </DropdownMenu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle as={CustomToggleForFilters} id="dropdown-custom-components">
                        Фильтры
                    </Dropdown.Toggle>

                    <DropdownMenu>
                        {event.types.map(type =>
                            <Dropdown.Item eventKey={type.id} onClick={() => event.setSelectedType(type)}>{type.name}</Dropdown.Item>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
})

export default FiltersBar;