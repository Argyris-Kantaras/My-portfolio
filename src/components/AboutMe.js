import { useRef } from "react";

import reactLogo from "../icons/react-logo.png";
import jsLogo from "../icons/js-logo.png";
import htmlLogo from "../icons/html-logo.png";
import cssLogo from "../icons/css-logo.png";

import styles from "./aboutMe.module.css";
import Education from "./subComponents/Education";
import Experience from "./subComponents/Experience";

function Aboutme() {
  const moreDetailsRef = useRef();

  const showDetails = function (e) {
    moreDetailsRef.current.style.display = "inline-block";
  };

  return (
    <div className={styles.aboutMeContainer}>
      <div>
        <h3>My knowledge</h3>
        <span className={styles.logoContainer}>
          <img className={styles.logo} alt="" src={htmlLogo} />
        </span>
        <span className={styles.logoContainer}>
          <img className={styles.logo} alt="" src={cssLogo} />
        </span>
        <span className={styles.logoContainer}>
          <img className={styles.logo} alt="" src={jsLogo} />
        </span>
        <span className={styles.logoContainer}>
          <img className={styles.logo} alt="" src={reactLogo} />
        </span>
      </div>
      <h3 onClick={showDetails} className={styles.moreAboutMe}>
        More about me...
      </h3>

      <div ref={moreDetailsRef} className={styles.moreDetailsContainer}>
        <div className={styles.shortDescription}>
          <h4>A few words</h4>
          <p>
            I started the web development career because I tried many jobs
            before that, none of them was what I've been looking for. When I
            searched about programming immediatly got attached to it and started
            to learn. I might miss the experience but I believe that I have a
            lot to give and I will never quit until I reach my goal. I always
            focus on a good design, clean code and to be 100% responsive to any
            device.
          </p>
        </div>
        <div className={styles.educationContainer}>
          <Education />
        </div>
        <div className={styles.experienceContainer}>
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
