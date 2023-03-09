import React from "react";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import "./CSS/Experience.css";
const Experience = () => {
  const [state] = React.useState([
    {
      id: 1,
      title: "Company Website:",
      text: (
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="http://ixarrobotic.com/#/"
          target="_blank"
          rel="noreferrer"
          title="IXAR Robotics"
        >
          www.ixarrobotic.com
        </a>
      ),
    },
    { id: 2, title: "Role:", text: "Web Developer, SEO Expert" },
    {
      id: 3,
      title: "Working Duration:",
      text: "Sep 2020 - Sep 2021",
    },
    {
      id: 4,
      title: "Address:",
      text: "102, Faizan-Apartment, S.V Road Jogeshwari(W), Mumbai 400102",
    },
  ]);
  const [statee] = React.useState([
    {
      id: 1,
      title: "Company Website:",
      text: (
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://paymentz.com/"
          target="_blank"
          rel="noreferrer"
          title="Paymentz"
        >
          www.paymentz.com
        </a>
      ),
    },
    { id: 2, title: "Role:", text: "ReactJs Developer" },
    {
      id: 3,
      title: "Working Duration:",
      text: "Sep 2021 - Sep 2022",
    },
    {
      id: 4,
      title: "Address:",
      text: "Aditya Industrial Estate, Mindspace, Malad(W) Mumbai 400064",
    },
  ]);

  const [stateee] = React.useState([
    {
      id: 1,
      title: "Company Website:",
      text: (
        <>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://www.phonepe.com/"
          target="_blank"
          rel="noreferrer"
          title="PhonePe"
        >
          www.phonepe.com
          </a>
          <br/>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="https://wealthdesk.in/"
          target="_blank"
          rel="noreferrer"
          title="WealthDesk"
        >
          www.wealthdesk.in
          </a>
          </>
      ),
    },
    { id: 2, title: "Role:", text: "Front-End Developer" },
    {
      id: 3,
      title: "Working Duration:",
      text: "Sep 2022 - Present",
    },
    {
      id: 4,
      title: "Address:",
      text: "Boston House, Western Express Highyway, Andheri (East) Mumbai 400093",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Working Experience</title>

        <meta name="description" content="Working Experience" />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div className="about">
        <div className="experienceHeight">
          <div className="container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="row h-650 alignCenter"
            >
              {" "}
              <div
                style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                className="col-6"
              >
                <div className="Experience_info">
                  <h1>PhonePe-WealthDesk</h1>
                  <div className="Experience-commonBorder"></div>
                  <div
                    className="Experience__info"
                    style={{ fontSize: "1rem" }}
                  >
                    Develop and maintain pages to match business Requirements.
                  </div>
                  <div
                    className="Experience__info2"
                    style={{ fontSize: "1rem" }}
                  >
                    Working on Integrating API’s and all the Frontend part of
                    WealthBasket's (ETF Portfolios from Experts) and EWG
                    (Embedded WealthDesk Gateway).
                  </div>
                  <div
                    className="Experience__info2"
                    style={{ fontSize: "1rem" }}
                  >
                    Also Working on Page Optimization.
                  </div>
                  <div className="info__contacts">
                    <div className="row">
                      {stateee.map((infoo) => (
                        <div className="col-6">
                          <strong>{infoo.title}</strong>

                          <p>{infoo.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                className="col-6"
              >
                <div className="Experience_info">
                  <h1>Payments Gateway Solutions</h1>
                  <div className="Experience-commonBorder"></div>
                  <div
                    className="Experience__info"
                    style={{ fontSize: "1rem" }}
                  >
                    Managing UI using HTML, CSS, MaterialUI, JavaScript, and
                    ReactJs.
                  </div>
                  <div
                    className="Experience__info2"
                    style={{ fontSize: "1rem" }}
                  >
                    Worked on Integrating API’s using Redux and all the Frontend
                    part of M-TRANSACT (Online Payment Software).
                  </div>
                  <div className="info__contacts">
                    <div className="row">
                      {statee.map((infoo) => (
                        <div className="col-6">
                          <strong>{infoo.title}</strong>

                          <p>{infoo.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ padding: "1rem 3rem 0 0", margin: "5rem 0 0 0" }}
                className="col-6"
              >
                <div className="Experience_info">
                  <h1>IXAR Robotic Solutions</h1>
                  <div className="Experience-commonBorder"></div>
                  <div
                    className="Experience__info"
                    style={{ fontSize: "1rem" }}
                  >
                    Worked as a Web Developer and build beautiful Responsive
                    Website using HTML, CSS, ReactJs, Material-UI etc.
                  </div>
                  <div
                    className="Experience__info2"
                    style={{ fontSize: "1rem" }}
                  >
                    Also Performed SEO for Website, In order to Rank them on
                    Google Search Engine..
                  </div>

                  <div className="info__contacts">
                    <div className="row">
                      {state.map((info) => (
                        <div className="col-6">
                          <strong>{info.title}</strong>
                          <p>{info.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
