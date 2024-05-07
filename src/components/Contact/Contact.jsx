import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>👤 {contact.name}</p>
        <p>☎️ {contact.number}</p>
      </div>
      <button onClick={() => onDeleteContact(contact.id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
