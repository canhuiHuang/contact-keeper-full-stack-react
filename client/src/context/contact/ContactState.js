import React, {useReducer} from 'react';
import {v4 as uuid} from "uuid"; 
import ContactContext from'./contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState ={
        contacts: [
            {
                id: 1,
                name: 'Eli Esquirt',
                email: 'buya@gmail.com',
                phone: '9094206969',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Beto Benitez',
                email: 'x2@gmail.com',
                phone: '2222222222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Sandra Soux',
                email: 'blowWorker@gmail.com',
                phone: '4204206969',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type: ADD_CONTACT, payload: contact });
    }

    // Delete Contact
    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider 
            value={{
                contacts: state.contacts,
                addContact
            }}
        >
            { props.children }
        </ContactContext.Provider>
    )
        
};

export default ContactState;