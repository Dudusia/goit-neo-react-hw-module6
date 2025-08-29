import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

const Contact = ({ id, name, number, handleDelete }) => (
  <>
    <div>
      <p>
        <IoPerson /> {name}
      </p>
      <p>
        <FaPhone /> {number}
      </p>
    </div>
    <button
      onClick={() => {
        handleDelete(id);
      }}
    >
      Delete
    </button>
  </>
);

export default Contact;
