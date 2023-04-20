import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.phonebook.items;
export const getFilter = state => state.phonebook.filter;
export const getError = state => state.phonebook.error;
export const getIsLoading = state => state.phonebook.isLoadding;

export const getFiltredContacts = createSelector (
    [getContacts, getFilter], (contacts, filter )=> contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
)
)