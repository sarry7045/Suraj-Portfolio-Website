import React from "react";
import "../components/css/Skills.css";
import Zoom from "react-reveal/Zoom";

function Skills() {
  const [header] = React.useState({
    subHeading: "Programming Skills",
  });
  const [secondheader] = React.useState({
    subHeading: "Digital Marketing Skills",
  });

  const [thirdheader] = React.useState({
    subHeading: "Computer Proficiency",
  });

  return (
    <div>
      <div className="skillscontainer">
        <div className="skillscontainer1">
          <div className="common">
            <h1 className="mainHeader">{header.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div className="Skill-Container">
            <Zoom>
              {" "}
              <ul>
                <li class="React">React</li>
                <li class="Redux">Redux</li>
                <li class="Formik">React Formik</li>
                <li class="Nodejs">Node.js</li>
                <li class="API">API's Integration</li>
                <li class="MongoDB">Mongo DB</li>
                <li class="HTML">HTML</li>
                <li class="CSS">CSS</li>
              </ul>
            </Zoom>
          </div>
          <div className="common">
            <h1 className="mainHeader">{secondheader.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div className="Skill-Container">
            <Zoom>
              <ul>
                <li className="SEO">SEO</li>
                <li className="SEM">SEM</li>
                <li className="SMO">SMO</li>
                <li className="SMM">SMM</li>
                <li className="Google">Google Analytics</li>
              </ul>
            </Zoom>
          </div>
          <div className="common">
            <h1 className="mainHeader">{thirdheader.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div className="Skill-Container">
            <Zoom>
              <ul>
                <li className="Word">Microsoft Word (Certified)</li>
                <li className="Excel">Microsoft Excel (Certified)</li>
                <li className="Powerpoint">Microsoft Powerpoint (Certified)</li>
                <li className="Typing">Typing-40WPM (Certified)</li>
                <li className="Canva">Canva</li>
                <li className="Photoshop">Photoshop</li>
              </ul>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
