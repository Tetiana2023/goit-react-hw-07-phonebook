import { createSlice } from '@reduxjs/toolkit';
// import {fetchContacts, addContact, deleteContact } from './operations';


export const contactsSlice = createSlice({
    name: 'phonebook',
    initialState: {contacts: [], filter: ""},
    reducers:{
        // addContacts: (state, action)=>{
        //     state.contacts.push(action.payload)
        // },
        // deleteContacts: (state, action)=> {
        //     state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        // },
        // updateFilter: (state, action) => {
        //     state.filter = action.payload
        // }

    }
})


  
 export  const phonebookReducer =  contactsSlice.reducer;

// export const {addContacts, deleteContacts, updateFilter } = contactsSlice.actions;



