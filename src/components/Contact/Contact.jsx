import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

import ModalDeleteContact from "../ModalDeleteContact/ModalDeleteContact";

const Contact = ({ contact, toast }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState(null);

  function openModal(id) {
    setContactId(id);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p>
          <IoMdContact />: {contact.name}
        </p>
        <p>
          <FaPhoneAlt />: {contact.number}
        </p>
      </div>
      <button
        className={css.btn}
        onClick={() => openModal(contact.id)}
        type="button"
      >
        Delete
      </button>
      <ModalDeleteContact
        contactId={contactId}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        toast={toast}
      />
    </li>
  );
};

export default Contact;
