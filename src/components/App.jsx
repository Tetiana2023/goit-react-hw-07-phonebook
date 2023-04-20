// import { useState } from 'react';
import React from 'react';
import { FormContact } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterContact } from './FilterContact/FilterContact';
import { Section } from './Section/Section';
// import { nanoid } from 'nanoid';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
// import { useLocalStorage } from './hooks/useLocalStorage';


export const App = () => {
  const contacts = useSelector(getContacts)

  return (
      <div className={css.container}>
        <Section title="Phonebook">
          <FormContact  />
        </Section>
        {contacts.length > 0 && 
        <Section title="Contacts">
          <FilterContact  />
            <ContactList />
        </Section>
        }
      </div>
    );
};


  //  const [contacts, setContacts] = useLocalStorage('');
  // // const [contacts, setContacts] = useState(()=> {
  // //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // // });

  // const [filter, setFilter] = useState('');

  // // useEffect(() => {
  // //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // // }, [contacts]);

  // const addNewContact = ({ name, number }) => {
  //   const newContact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };

  //   const isContactExist = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  //   isContactExist
  //     ? alert(`${name} is alreadi in contacts`)
  //     : setContacts(contacts => [newContact, ...contacts]);
  // };

  // const hendleDeleteContact = id => {
  //   setContacts(
  //     contacts => (contacts = contacts.filter(contact => contact.id !== id))
  //   );
  // };

  // const hendleFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const getVisibleContacts = () => {
  //   // const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // return (
  //   <div className={css.container}>
  //     <Section title="Phonebook">
  //       <FormContact onSubmit={addNewContact} />
  //     </Section>
  //     <Section title="Contacts">
  //       <FilterContact value={filter} hendleFilter={hendleFilter} />

  //       <ContactList
  //         contacts={getVisibleContacts()}
  //         hendleDeleteContact={hendleDeleteContact}
  //       />
  //     </Section>
  //   </div>
  // );

