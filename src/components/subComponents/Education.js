import { useRef } from "react";
import styles from "./education.module.css";
import ShowCertificate from "./ShowCertificate";

function Education() {
  const overlayRef = useRef();

  const showOverlay = function () {
    overlayRef.current.style.display = "inherit";
  };

  const hideOverlay = function () {
    overlayRef.current.style.display = "none";
  };

  return (
    <div className={styles.education}>
      <h3 className={styles.educationTitle}>Education</h3>
      <span>
        <h5>Udemy</h5>
        <p>Complete JavaScript course: From zero to expert</p>
        <p className={styles.courseDescription}>
          A full course focused on JavaScript with everything you need to know
          about the language and the latest ES6 features.
        </p>
      </span>
      <hr />
      <span>
        <h5>Udemy</h5>
        <p>React-The Complete Guide (incl. Hooks, React Router, Redux)</p>
        <p className={styles.courseDescription}>
          Another full course but focused on React js and all you must know to
          start working immediatly.
        </p>
        <div onClick={showOverlay} className={styles.seeCertificateBtn}>
          <h6 className={styles.seeCertificateText}>see certificates</h6>
        </div>
      </span>
      <div ref={overlayRef} className={styles.overlay}>
        <button onClick={hideOverlay} className={styles.closeOverlayBtn}>
          X
        </button>
        <ShowCertificate />
      </div>
    </div>
  );
}

export default Education;
