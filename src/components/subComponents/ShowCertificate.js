import styles from "./showCertificate.module.css";
import jsCertificate from "../../icons/js-certificate.jpg";

function ShowCertificate() {
  return (
    <div className={styles.certificate}>
      <img className={styles.imgCert} alt="JS-cerificate" src={jsCertificate} />
    </div>
  );
}

export default ShowCertificate;
