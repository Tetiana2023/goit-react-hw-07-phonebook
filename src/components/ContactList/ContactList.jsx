import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = ()=> {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch()


    const getVisibleContacts = () => {
       const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
        }

        const contactsInList = getVisibleContacts()
    return (
        <>
        <ul >
            {contactsInList.map(({id, name, number }) =>(
            <li  className={css.list} key ={id}>           
             
            <ContactItem 
            name={name}
            number={number}
            hendleDeleteContact={()=> dispatch(deleteContacts(id))}/>
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