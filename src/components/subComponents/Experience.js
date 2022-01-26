import styles from "./experience.module.css";

function Experience() {
  return (
    <div className={styles.experience}>
      <h4 className={styles.experienceTitle}>Experience</h4>
      <p>
        My experience comes from freelancing work on popular sites like UpWork,
        Freelancer, Fivver and others.
      </p>
      <hr />
      <span className={styles.prevWork}>
        <h6>Freelancer</h6>
        <p>
          <strong>from:</strong> 01/10/2020 <strong>until:</strong> present
        </p>
        <p>Worked as a Web Developer/Designer</p>
      </span>
      <span className={styles.prevWork}>
        <h6>Yes Services ltd</h6>
        <p>
          <strong>from:</strong> 20/07/2017 <strong>until:</strong> 27/08/2021
        </p>
        <p>Worked as a qualified electrician</p>
      </span>
      <span className={styles.prevWork}>
        <h6>ICI ltd</h6>
        <p>
          <strong>from:</strong> 01/11/2016 <strong>until:</strong> 19/07/2017
        </p>
        <p>Worked as a qualified electrician</p>
      </span>
    </div>
  );
}

export default Experience;
