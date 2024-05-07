import ContactForm from "../ContactForm/ContactForm";
import Modal from "react-modal";
import css from "./ModalDeleteContact.module.css";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
  },
};

Modal.setAppElement("#root");
const ModalDeleteContact = ({ closeModal, modalIsOpen, contactId, toast }) => {
  const dispatch = useDispatch();
  const undeleteContact = () => {
    closeModal();
  };
  const onDeleteContact = () => {
    dispatch(deleteContact(contactId));
    toast("Your contact was deleted successfully!", {
      style: {
        borderRadius: "10px",
        background: "#84fab0",
        color: "red",
      },
    });
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <p>Are you sure want to delete contact?</p>
      <div className={css.btnContainer}>
        <button className={css.yesBtn} onClick={onDeleteContact}>
          Yes
        </button>
        <button className={css.noBtn} onClick={undeleteContact}>
          No
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteContact;
