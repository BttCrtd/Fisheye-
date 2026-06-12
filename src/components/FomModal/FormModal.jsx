import "@/styles/formModal.css";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";

export default function FormModal({ name, close }) {
  return (
    <section className="modal-container">
      <div className="background" onClick={close}></div>
      <div className="modal">
        <div className="modal-header">
          <h1>Contactez Moi {name}</h1>
          <button onClick={close}>
            <IoMdClose className="close-modal" size={64} />
          </button>
        </div>
        <form action="">
          <div className="form-input">
            <label htmlFor="firstName">Prénom</label>
            <input id="firstName" name="firstName" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="lastName">Nom</label>
            <input id="lastName" name="lastName" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="message">Votre Message</label>
            <textarea id="message" name="message" />
          </div>
          <Button name="Envoyer" />
        </form>
      </div>
    </section>
  );
}