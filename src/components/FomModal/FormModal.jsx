import "@/styles/formModal.css";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/Button";

export default function FormModal({ name, close }) {
    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);

      const data = Object.fromEntries(formData.entries());

      console.log(data);
    };
  return (
    <section className="modal-container">
      <div className="background" onClick={close}></div>
      <div className="modal" tabIndex={0}>
        <div className="modal-header" tabIndex={0}>
          <h1>Contactez Moi {name}</h1>
          
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="firstName" tabIndex={0}>
              Prénom
            </label>
            <input id="firstName" name="firstName" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="lastName" tabIndex={0}>
              Nom
            </label>
            <input id="lastName" name="lastName" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="email" tabIndex={0}>
              Email
            </label>
            <input id="email" name="email" type="text" />
          </div>
          <div className="form-input">
            <label htmlFor="message" tabIndex={0}>
              Votre Message
            </label>
            <textarea id="message" name="message" />
          </div>
          <Button name="Envoyer" type="submit" />
        </form>
        <button id="close-modal" onClick={close} aria-label="Fermer le formulaire de contact">
            <IoMdClose className="close-modal" size={64} />
          </button>
      </div>
    </section>
  );
}