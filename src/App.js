import styles from "./App.module.css";
import MyLatestWork from "./components/MyLatestWork";
import me from "./icons/myself.jpg";
import landpage from "./icons/landPage.png";
import weatherApp from "./icons/weather-app.png";
import sunrise from "./icons/sunrise.png";
import sunnyside from "./icons/sunnyside.png";
import Aboutme from "./components/AboutMe";
import linkedInLogo from "./icons/linkedin-logo.png";
import githubLogo from "./icons/github-logo.png";
import facebookLogo from "./icons/facebook-logo.png";
import netlifyLogo from "./icons/netlify-logo.png";

const images = [landpage, landpage, landpage, landpage];

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.myImg} src={me} />
        <h1 className={styles.myName}>Anargyros Kantaras</h1>
        <p className={styles.mySlogan}>Very passionate web developer!</p>
      </header>
      <div className={styles.latestWorkContainer}>
        <h2>My latest work</h2>
        {/* {images.map((img) => {
          return (
            <MyLatestWork
              img={img}
              text="A beautiful landing page made in react!"
            />
          );
        })} */}
        <MyLatestWork
          img={landpage}
          text="A beautiful landing page made in react!"
          link="https://photogun.netlify.app/"
        />

        <MyLatestWork
          img={weatherApp}
          text="Weather app with current location!"
          link="https://worldwide-weather-app.netlify.app/"
        />
        <MyLatestWork
          img={sunrise}
          text="Bar and drinks near the beach!"
          link="https://sunrise-beach-bar.netlify.app/"
        />
        <MyLatestWork
          img={sunnyside}
          text="Another landing page in HTML and CSS!"
          link="https://our-sunnyside-landing-page.netlify.app/"
        />
      </div>

      <Aboutme />
      <hr />
      <footer className={styles.footer}>
        <h3>
          For even more details about my work don't hesitate to check my links.
        </h3>
        <a
          className={styles.links}
          href="https://www.linkedin.com/in/argyris-kantaras-291277219/"
        >
          <img className={styles.linksLogo} alt="" src={linkedInLogo} />
          LinkedIn
        </a>
        <a className={styles.links} href="https://github.com/Argyris-Kantaras">
          <img className={styles.linksLogo} alt="" src={githubLogo} />
          Github
        </a>
        <a
          className={styles.links}
          href="https://app.netlify.com/teams/argyris-kantaras/overview?"
        >
          <img className={styles.linksLogo} alt="" src={netlifyLogo} />
          Netlify
        </a>
        <a
          className={styles.links}
          href="https://www.facebook.com/Awesome-Web-Apps-102485025679206/"
        >
          <img className={styles.linksLogo} alt="" src={facebookLogo} />
          Facebook
        </a>
        <h3>
          {" "}
          You can also contact me at:{" "}
          <em className={styles.emailLink}>
            <u>argyriskantas@gmail.com</u>
          </em>
        </h3>
      </footer>
    </div>
  );
}

export default App;
