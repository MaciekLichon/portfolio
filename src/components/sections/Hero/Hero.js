import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.introduction}>
        <h1 className={styles.name}>Hi,<br/>I am Maciek.</h1>
        <h2 className={styles.role}>Front-end developer</h2>
      </div>
      <div className={styles.info}>
        <button>Contact me</button>
        <div className={styles.about}>
          <div className={styles.text}>
            <p className={styles.about_me}>Nine months long web developement bootcamp graduate with over three years of corporate experience in analytical roles.</p>
          </div>
          <div className={styles.links}>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
