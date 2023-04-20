
import React from 'react';
import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';

import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from "redux/operations";

import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(getContacts)
  const error = useSelector(getError)
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div className={css.container}>
        <Section title="Phonebook">
          <FormContact  />
        </Section>
        {contacts.length > 0 && 
        <Section title="Contacts">
          <FilterContact  />
            <ContactList />
            {isLoading && !error && <b>Request in progress...</b>}
        </Section>
        }
      </div>
    );
};



