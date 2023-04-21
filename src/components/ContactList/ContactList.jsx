import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact  } from 'redux/operations';
import { getFiltredContacts} from 'redux/selectors';
import { deleteContact } from 'services/fetch';

export const ContactList = ()=> {
    const dispatch = useDispatch()
    const FiltredContacts = useSelector(getFiltredContacts);
   
    return (
        <>
        <ul >
            {FiltredContacts.map(({id, name, number }) =>(
            <li  className={css.list} key ={id}>
                {/* <div className={css.item}>
            <p>{name}:</p>
            <p>{number}</p>
            <button className={css.button} type="button" onClick= {()=> dispatch(deleteContact(id))}>Delete</button>
        </div>            */}
             
            <ContactItem 
            name={name}
            number={number}
            hendleDeleteContact={()=> dispatch(deleteContact(id))}/>
           
            
            </li>))} 
        </ul>
        </>
    )

};
// ContactList.propType = {
//     contacts:PropTypes.shape({
//         id:PropTypes.string.isRequired,
//         name:PropTypes.string.isRequired,
//         number:PropTypes.string.isRequired, 
//     }).isRequired,
//     }
    // ({id, name, number })