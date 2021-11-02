import React from "react";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";

const About = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "portfolioemails",
        "portfolioemails",
        e.target,
        "user_ppSiiPMQXzcx5D7p3Hj6D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Suraj Anil Yadav" },
    { id: 2, title: "Email:", text: "sarry7045@gmail.com" },
    { id: 3, title: "Phone:", text: "91+ 7977368668" },
    { id: 4, title: "Address", text: "Amboli, Andheri(W), Mumbai 400058" },
  ]);
  return (
    <>
      <div className="about">
        <div className="container">
          {/* <div className="common"></div> */}
          <div className="row  h-650 alignCenter">
            <Zoom>
              <div className="col-6">
                <div className="about__img">
                  <img src="/images/Avatar.png" alt="man" />
                </div>
              </div>
            </Zoom>
            <Zoom>
              {" "}
              <div className="col-6">
                <div className="about__info">
                  <h1>Let's Connect</h1>
                  <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                    "I am an innovative ReactJs Developer With 1 + Year Of
                    experience in Web Development, Software Development and
                    Digital Marketing.
                  </div>

                  <div className="info__contacts">
                    <div className="row">
                      {state.map((info) => (
                        <div className="col-6">
                          <strong>{info.title}</strong>
                          <p>{info.text}</p>
                        </div>
                      ))}
                      <ul className="contact__header__ul">
                        <a
                          href="https://www.linkedin.com/in/suraj-yadav-01752b222/"
                          target="_blank"
                        >
                          <li>
                            <FaLinkedinIn
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a href="mailto: sarry7045@gmail.com">
                          <li>
                            <AiFillMail
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>

                        <a
                          href="https://www.instagram.com/suraj.28_11/"
                          target="_blank"
                        >
                          {" "}
                          <li>
                            <FaInstagram
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a href="https://github.com/sarry7045" target="_blank">
                          <li>
                            <FaGithub
                              className="headerIconGit"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100010635822203"
                          target="_blank"
                        >
                          {" "}
                          <li>
                            <FaFacebookF
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
          <div className="Feedback">
            <form onSubmit={sendEmail}>
              <label>
                <strong>
                  <input type="text" name="name" placeholder="Give Feedback" />
                </strong>
                <button onClick={sendEmail} style={{ fontSize: "1rem" }} type="submit">
                  {" "}
                  Submit
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
