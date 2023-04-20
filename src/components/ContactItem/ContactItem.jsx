import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';


export const ContactItem = ({contact})=>{
    const dispatch = useDispatch()
    const {name, number, id} = contact

    return(
        <>
        <div className={css.item}>
            <p>{name}:</p>
            <p>{number}</p>
            <button className={css.button} type="button" onClick= {()=> dispatch(deleteContact(id))}>Delete</button>
        </div>
        </>
    )
};

ContactItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    hendleDeleteContact:PropTypes.func.isRequired,

}