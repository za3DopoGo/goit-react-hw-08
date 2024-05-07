import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ul className={css.contactList}>
        {Array.isArray(contacts) &&
          contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
      </ul>
    </>
  );
};

export default ContactList;
