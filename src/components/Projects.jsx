import React from "react";
import {
  MdAppRegistration,
  MdOutlineCoronavirus,
  MdOutlineFoodBank,
} from "react-icons/md";
import { AiOutlineForm, AiOutlineShoppingCart } from "react-icons/ai";
import { RiVideoChatLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiNotebook } from "react-icons/gi";
import { BsTextareaT } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Helmet from "react-helmet";
import { FaRupeeSign } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { MdQuiz } from "react-icons/md";
// import { motion } from "framer-motion";

const Services = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <AiFillGoogleCircle className="commonIcons" />,
      heading: "Google Clone",
      text: "In this Project i created one Basic Google clone with some search Functionality using Rapid API.",
      href: "https://google-clonee.netlify.app/",
    },

    {
      id: 2,
      icon: <AiOutlineHome className="commonIcons" />,
      heading: "Rental Next-App",
      text: "Rental Homes for everyone, we can serach and find easily the information about any Hotels.",
      href: "https://rentall.vercel.app/",
    },
    {
      id: 2,
      icon: <CgGym className="commonIcons" />,
      heading: "Gym-Holic",
      text: "We can search any types of workouts with some good quality videos.",
      href: "https://gymholic.netlify.app/",
    },
   

    {
      id: 3,
      icon: <MdAppRegistration className="commonIcons" />,
      heading: "Login Registration Form",
      text: "In this Project i created one basic Registraion and Login Form (Only Frontend Part Done).",
      href: "https://mern-client-side.netlify.app/",
    },

    {
      id: 3,
      icon: <MdQuiz className="commonIcons" />,
      heading: "Quiz-App",
      text: "Multiple Choice Questions, we have to choose right answers, and at the end it will show final Results.",
      href: "https://quizzzzzz-app.netlify.app/",
    },
    {
      id: 4,
      icon: <BsNewspaper className="commonIcons" />,
      heading: "Programing News",
      text: "In this Project i Created one basic News Website for Programming things.",
      href: "https://programming-news.netlify.app/",
    },
    {
      id: 5,
      icon: <FaCity className="commonIcons" />,
      heading: "All About All Countries",
      text: "In this Project i Created Informative website like we can find all the  details about any countries.",
      href: "https://all-about-all-countries.vercel.app/",
    },
    {
      id: 6,
      icon: <AiOutlineForm className="commonIcons" />,
      heading: "Multi-Step Form",
      text: "In this Project i Created Multistep Form Using Formik and Some Functionality.",
      href: "https://multistepp-form.netlify.app/",
    },
    {
      id: 7,
      icon: <RiVideoChatLine className="commonIcons" />,
      heading: "Video Chat App",
      text: "In this Project i created one Video Chat app using Socket.IO and Material-UI.",
      href: "https://videeo-chatt-app.netlify.app/",
    },
    {
      id: 8,
      icon: <AiOutlineShoppingCart className="commonIcons" />,
      heading: "React Add-To-Cart",
      text: "In this Project i created one Add to Cart aap With Some Funcationality.",
      href: "https://shoppingg-caart.netlify.app/",
    },
    {
      id: 9,
      icon: <MdOutlineCoronavirus className="commonIcons" />,
      heading: "Covid19 Tracker",
      text: "In this Project i created one Covid 19 Cases Tracker App with Graph Representation.",
      href: "https://coviid19-tracker.netlify.app/",
    },
    {
      id: 10,
      icon: <FaRupeeSign className="commonIcons" />,
      heading: "Expense Tracker",
      text: "In this Project i created one Basic Expense Calculater Using Material UI",
      href: "https://expense-trracker.netlify.app/",
    },
    {
      id: 11,
      icon: <AiOutlineForm className="commonIcons" />,
      heading: "React-Formik",
      text: "In this Project i Created 4 Registration Forms Using React Formik.",
      href: "https://reactt-formik.netlify.app/",
    },
    {
      id: 12,
      icon: <MdOutlineFoodBank className="commonIcons" />,
      heading: "React Restaurant Web",
      text: "In this Project i created one Restaurant type Website with some categories.",
      href: "https://surajreactrestaurant.netlify.app/",
    },
    {
      id: 13,
      icon: <TiWeatherCloudy className="commonIcons" />,
      heading: "Weather App",
      text: "In this Project i created one Weather Checking app using Weather API.",
      href: "https://react-weatther-app.netlify.app/",
    },
    {
      id: 14,
      icon: <MdLocalMovies className="commonIcons" />,
      heading: "Movies Search App",
      text: "In this Project i created one Movies Searchable app, we can search any hollywood movies.",
      href: "https://search-fav-movies.netlify.app/",
    },
    {
      id: 15,
      icon: <BsTextareaT className="commonIcons" />,
      heading: "Text Converter",
      text: "In this Project i developed one text converter with some functionality using Javascript Logic.",
      href: "https://textz-converter.netlify.app/",
    },
    {
      id: 16,
      icon: <GiNotebook className="commonIcons" />,
      heading: "React Todo-List",
      text: "In this Project i created one basic Todo-List using Bootstrap and Some Javascript Logic.",
      href: "https://basic-reactt-todo-list.netlify.app/",
    },
    {
      id: 17,
      icon: <AiOutlineShoppingCart className="commonIcons" />,
      heading: "Redux Shopping-Store",
      text: "In this Project i created one fake shopping store using Redux and fake store API's.",
      href: "https://redux-shopping-store.netlify.app/",
    },
  ]);
  return (
    <>
      <Helmet>
        <title>Projects</title>

        <meta
          name="description"
          content="My all Completed and Ongoing Projects"
        />
        <meta
          name="keywords"
          content="suraj yadav, suraj yadav portfolio, suraj yadav react developer, web developer, software developer, seo expert, react, react developer, javascript, javascript developer, node developer, frontend developer, digital marketing, seo, ppc, suraj yadav digital marketing "
        />
      </Helmet>
      <div className="services">
        <div className="container">
          <div className="services__header">
            <div className="common">
              <h1 className="mainHeader">{header.subHeading}</h1>

              <div className="commonBorder"></div>
            </div>

            <div className="row bgMain">
              {state.map((info) => (
                <div
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // transition={{ delay: 0.5, duration: 1 }}
                  className="col-4 bgMain"
                >
                  <Zoom>
                    <div className="services__box">
                      {info.icon}
                      <div className="services__box-header">{info.heading}</div>
                      <div className="">{info.text}</div>
                    </div>
                    <div
                      // whileHover={{
                      //   scale: 1.1,
                      //   originX: 0,
                      // }}
                      // transition={{ type: "spring", stiffness: 1000 }}
                      style={{ margin: "2.5rem 0 4rem 2rem" }}
                      className="header_buttons"
                    >
                      <a
                        href={info.href}
                        target="_blank"
                        className="btn btn-outline"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </Zoom>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
