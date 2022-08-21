import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Salut, je suis <span className="highlighted-text">Cedric</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "React JS / React Native 🔴",
                      "Développeur Full Stack 💻",
                      "MERN Stack 👍",
                      "PHP Codeigniter / MYSQL 🌐",
                      "HTML 5 / CSS 3 😋",
                      "Javascript ✅",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionné par les technologies, j'aime coder des applications
                pour améliorer la vie des utilisateurs.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              me recruter
            </button>
            <a href="./assets/moncv.pdf" download={"cedric ngoumti.pdf"}>
              {""}
              <button className="btn highlighted-btn">
                {""}
                mon cv
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
