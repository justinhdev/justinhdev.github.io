import "./index.scss";
import Sidebar from "../Sidebar";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from "@emailjs/browser";
import resume from "../../assets/files/resume.pdf";
import { useEffect, useState, useRef } from "react";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kjn3k1d",
        "template_c2ysyoe",
        form.current,
        "fZNwDT2v-noymchW3"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="contact-page">
        <div>
          <Sidebar />
        </div>
        <div className="layer1"></div>
        <h1 className="animate-contact-text">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "G",
              "e",
              "t",
              " ",
              "i",
              "n",
              " ",
              "t",
              "o",
              "u",
              "c",
              "h",
              "!",
            ]}
            idx={1}
          />
        </h1>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>

        <iframe src={resume} frameborder="0" className="resume"></iframe>
      </div>
    </>
  );
};

export default Contact;
