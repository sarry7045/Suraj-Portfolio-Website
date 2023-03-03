import React from "react";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import "../components/css/Skills.css";

function Skills() {
  // const programmingSkills = ["JavaScript, React.Js, Next.Js, TypeScript, React-Native, Redux, Rest-API's, Material-UI, Node.Js"]
  // const digitalMarketingSkills = ["JavaScript, React.Js, Next.Js, TypeScript, React-Native, Redux, Rest-API's, Material-UI, Node.Js"]

  return (
    <>
      <Helmet>
        <title>Programming and SEO Skills</title>

        <meta
          name="description"
          content="My all Programming and Digital Marketing Skills"
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, software development, suraj yadav software developer, suraj yadav react developer, suraj yadav frontend developer, react developer, javascript developer, suraj yadav seo expert, seo expert, frontend developer, suraj yadav digital marketing"
        />
      </Helmet>
      <div>
        <div className="skillscontainer">
          <div className="skillscontainer1">
            <div className="common">
              <h1 className="mainHeader">Programming Skills</h1>
              <div className="commonBorder"></div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="Skill-Container"
            >
              <ul>
                <li className="React">JavaScript</li>
                <li className="React">React.Js</li>
                <li className="Redux">Next.Js</li>
                <li className="Formik">TypeScript</li>
                <li className="Formik">React-Native</li>
                <li className="Formik">Redux</li>
                <li className="Nodejs">Rest-API's</li>
                <li className="API">Material-UI</li>
                <li className="MongoDB">Node.Js</li>
              </ul>
            </motion.div>
            <div className="common">
              <h1 className="mainHeader">Digital Marketing Skills</h1>
              <div className="commonBorder"></div>
            </div>
            <div className="Skill-Container">
              <Zoom>
                <ul>
                  <li className="SEO">SEO</li>
                  <li className="SEM">SEM</li>
                  <li className="SMO">SMO</li>
                </ul>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
