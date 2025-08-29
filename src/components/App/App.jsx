import { useDebouncedCallback } from 'use-debounce';
import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import initContacts from '../../data/contacts.json';
import css from './App.module.css';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initContacts;
  });

  const [filteredContacts, setFilteredContacts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const debounceSetSearchText = useDebouncedCallback(setSearchText, 100);

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setFilteredContacts(() =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, contacts]);

  const handleAdd = (name, number) => {
    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name: name,
        number: number,
      },
    ]);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(item => id !== item.id));
  };

  return (
    <div className={css['container']}>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox onChange={debounceSetSearchText} />
      <ContactList
        contacts={filteredContacts != null ? filteredContacts : contacts}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
