import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, handleDelete }) => (
  <ul className={css['contacts-list']}>
    {contacts.map(contact => {
      return (
        <li key={contact.id} className={css['contact-item']}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            handleDelete={handleDelete}
          />
        </li>
      );
    })}
  </ul>
);

export default ContactList;
