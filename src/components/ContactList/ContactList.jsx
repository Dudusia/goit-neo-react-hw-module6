import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filtersSlice';
import { getContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const searchText = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  return (
    <ul className={css['contacts-list']}>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .map(contact => {
          return (
            <li key={contact.id} className={css['contact-item']}>
              <Contact
                name={contact.name}
                number={contact.number}
                id={contact.id}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
