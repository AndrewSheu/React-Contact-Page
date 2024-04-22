import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Andrew Sheu");
  const [email, setEmail] = useState("Something@gmail.com");
  const [text, setText] = useState("Let us the message!");

  const onSunmit = () => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={"24px"} />}
          />
          <Button text="VIA CALL" icon={<FaPhone fontSize={"24px"} />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize={"24px"} />}
        />

        <form onSubmit={onSunmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
          <div>
            {name}
            <br />
            {email}
            <br />
            {text}{" "}
          </div>
        </form>
      </div>
      <div className={styles.image}>
        <img src="/images/Contact-image.jpeg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
