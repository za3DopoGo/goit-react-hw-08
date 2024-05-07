import ContactForm from "../ContactForm/ContactForm";
import Modal from "react-modal";

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
const ModalAddContact = ({ closeModal, modalIsOpen, toast }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ContactForm closeModal={closeModal} toast={toast} />
    </Modal>
  );
};

export default ModalAddContact;
