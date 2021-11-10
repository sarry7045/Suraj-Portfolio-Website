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
          <div class="Skill-Container">
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
          <div class="Skill-Container">
            <Zoom>
              <ul>
                <li class="SEO">SEO</li>
                <li class="SEM">SEM</li>
                <li class="SMO">SMO</li>
                <li class="SMM">SMM</li>
                <li class="Google">Google Analytics</li>
              </ul>
            </Zoom>
          </div>
          <div className="common">
            <h1 className="mainHeader">{thirdheader.subHeading}</h1>
            <div className="commonBorder"></div>
          </div>
          <div class="Skill-Container">
            <Zoom>
              <ul>
                <li class="Word">Microsoft Word (Certified)</li>
                <li class="Excel">Microsoft Excel (Certified)</li>
                <li class="Powerpoint">Microsoft Powerpoint (Certified)</li>
                <li class="Typing">Typing-40WPM (Certified)</li>
                <li class="Canva">Canva</li>
                <li class="Photoshop">Photoshop</li>
              </ul>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
