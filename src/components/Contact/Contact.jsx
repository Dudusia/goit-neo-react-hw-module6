import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </>
  );
};

export default Contact;
