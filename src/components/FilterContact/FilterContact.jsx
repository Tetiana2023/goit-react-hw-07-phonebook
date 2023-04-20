import React from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getFilter, updateFilter } from "redux/contactsSlice";


export const FilterContact =() => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    // const hendleFilter = event => {
    //     dispatch(updateFilter(event.target.value));
    //   };

   const filterId= nanoid(); 
   return (
        <>
        <label htmlFor={filterId}>Find contacts by name
            <input id={filterId}
            type="text"
            value={filter}
            name="filter"
            onChange={event => {
                dispatch(updateFilter(event.target.value));
              }}
            >
            </input>
        </label>
        </>
    )
}
FilterContact.propType = {
    value:PropTypes.string.isRequired,
    hendleFilter:PropTypes.func.isRequired,
}