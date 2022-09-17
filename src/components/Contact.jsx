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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Helmet from "react-helmet";
// import { motion } from "framer-motion";

const About = () => {
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    feedback: "",
  };

  const validationSchema = yup.object().shape({
    fullname: yup.string().required("Name is Required!"),
    email: yup
      .string()
      .required("Email is Required!")
      .email("Please Enter Valid Email"),
    phone: yup.number().required("Phone is Required!"),
    feedback: yup.string().required("Feedback is Required!").min(15).max(100),
  });

  const handleSubmit = (values) => {
    console.log("Values", values);
  };

  const notify = () => {
    toast.success("Message Sent!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5jq6l6i",
        "template_axubwul",
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
      <Helmet>
        <title>Contact Me</title>

        <meta
          name="description"
          content="Contact Me For Website Development , Software Development, or Digital Marketing Like SEO, PCC, SMO etc."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div className="about">
        <div className="container">
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="row  h-650 alignCenter"
          > */}
          <Zoom>
            <div className="row  h-650 alignCenter">
              <div className="col-6">
                <div className="about__img">
                  <img src="/images/Avatar.png" alt="man" />
                </div>
              </div>
              <div className="col-6">
                <div className="about__info">
                  <h1>Let's Connect</h1>
                  <div className="about__info-p1" style={{ fontSize: "1rem" }}>
                    "I am an innovative ReactJs Developer With Multiple Years Of
                    experience in Web Development, Software Development and SEO.
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
                          rel="noreferrer"
                        >
                          <li>
                            <FaLinkedinIn
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://github.com/sarry7045"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <li>
                            <FaGithub
                              className="headerIconGit"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.instagram.com/suraj.28_11/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <li>
                            <FaInstagram
                              className="headerIcon"
                              style={{ color: "#FFF" }}
                            />
                          </li>
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=100010635822203"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <li>
                            <FaFacebookF
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* </motion.div> */}
            </div>
          </Zoom>

          <div className="wrapper">
            <Zoom>
              <div className="title">Let's Connect</div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                <Form onSubmit={sendEmail}>
                  <div className="form">
                    <div className="inputfield">
                      <label>Full Name:</label>
                      <Field type="text" name="fullname" className="input" />
                      <br />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="fullname" />
                      </p>
                    </div>
                    <div className="inputfield">
                      <label>Email Address:</label>
                      <Field type="text" name="email" className="input" />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    <div className="inputfield">
                      <label>Phone Number:</label>
                      <Field type="text" name="phone" className="input" />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="phone" />
                      </p>
                    </div>
                    <div className="inputfield">
                      <label>Feedback:</label>
                      <Field type="text" className="textarea" name="feedback" />
                      <p style={{ color: "red" }}>
                        <ErrorMessage name="feedback" />
                      </p>
                    </div>

                    <div className="inputfield">
                      <input
                        onClick={notify}
                        type="submit"
                        value="Send Details"
                        className="btn"
                      />
                    </div>
                    <ToastContainer />
                  </div>
                </Form>
              </Formik>
            </Zoom>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
