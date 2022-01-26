import styles from "./myLatestWork.module.css";

function MyLatestWork(props) {
  const linkHandler = function () {
    window.open(props.link);
  };

  return (
    <div onClick={linkHandler} id="myWork" className={styles.workContainer}>
      <img className={styles.workImg} alt="" src={props.img} />
      <p className={styles.workText}>{props.text}</p>
    </div>
  );
}

export default MyLatestWork;
