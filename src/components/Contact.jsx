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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Helmet from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
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
    { id: 2, title: "Email:", text: "surajyadav112820@gmail.com" },
    { id: 3, title: "Phone:", text: "91+ 7977368668" },
    { id: 4, title: "Address", text: "Amboli, Andheri(W), Mumbai 400058" },
  ]);

  const socialMedia = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/suraj-yadav-01752b222/",
      title: "LinkedIn",
      icon: <FaLinkedinIn className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 2,
      link: "https://github.com/sarry7045",
      title: "GitHub",
      icon: <FaGithub className="headerIconGit" style={{ color: "#FFF" }} />,
    },
    {
      id: 3,
      link: "https://www.instagram.com/suraj.28_11/",
      title: "Instagram",
      icon: <FaInstagram className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 4,
      link: "https://www.facebook.com/profile.php?id=100010635822203",
      title: "Facebook",
      icon: <FaFacebookF className="headerIcon" style={{ color: "#FFF" }} />,
    },
    {
      id: 5,
      link: "mailto: sarry7045@gmail.com",
      title: "Mail",
      icon: <AiFillMail className="headerIcon" style={{ color: "#FFF" }} />,
    },
  ];

  const formikObj = [
    {
      id: 1,
      label: "Full Name:",
      name: "fullname",
    },
    {
      id: 2,
      label: "Email Address:",
      name: "email",
    },
    {
      id: 3,
      label: "Phone Number:",
      name: "phone",
    },
    {
      id: 4,
      label: "Message:",
      name: "feedback",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Contact Me</title>

        <meta
          name="description"
          content="Contact me for Website Development , Software Development, or Digital Marketing Like SEO, PCC, SMO etc."
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div className="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="row  h-650 alignCenter"
          >
            <div className="col-6">
              <div className="about__img">
                <img src="/Images/Avatar.png" alt="man" loading="lazy" />
              </div>
            </div>
            <div className="col-6">
              <div className="about__info">
                <h1>Empowering your web identity</h1>

                <div className="info__contacts">
                  <div className="row">
                    {state.map((info) => (
                      <div className="col-6">
                        <strong>{info.title}</strong>
                        <p>{info.text}</p>
                      </div>
                    ))}
                    <ul className="contact__header__ul">
                      {socialMedia.map((item) => {
                        return (
                          <>
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              title={item.title}
                            >
                              <li>{item.icon}</li>
                            </a>
                          </>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
                    {formikObj.map((item) => {
                      return (
                        <>
                          <div className="inputfield">
                            <label>{item.label}</label>
                            <Field
                              type="text"
                              name={item.name}
                              className="input"
                            />
                            <br />
                            <p style={{ color: "red" }}>
                              <ErrorMessage name={item.name} />
                            </p>
                          </div>
                        </>
                      );
                    })}

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

export default Contact;
