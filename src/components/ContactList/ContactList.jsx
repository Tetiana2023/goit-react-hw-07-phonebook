import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { deleteContact  } from 'redux/operations';
import { getFiltredContacts} from 'redux/selectors';

export const ContactList = ()=> {
    const FiltredContacts = useSelector(getFiltredContacts);
   
    return (
        <>
        <ul >
            {FiltredContacts.map(contact =>(
            <li  className={css.list} key ={contact.id}>           
             
            <ContactItem contact = {contact}
           
            />
            </li>))} 
        </ul>
        </>
    )

};
ContactList.propType = {
    contacts:PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        number:PropTypes.string.isRequired, 
    }).isRequired,
    }
    // ({id, name, number })