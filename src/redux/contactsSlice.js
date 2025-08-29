import { createSlice } from '@reduxjs/toolkit';
import contacts from '../data/contacts.json';

export const getContacts = state => state.contacts.items;

const slice = createSlice({
  name: 'contacts',
  initialState: { items: contacts },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
