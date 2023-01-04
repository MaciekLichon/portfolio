import styles from './Hero.module.scss';

import Button from '../../features/Button/Button';

const Hero = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.introduction}>
          <h1 className={styles.name}>Hi,<span>I am Maciek.</span></h1>
          <h2 className={styles.role}>Front-end developer</h2>
        </div>
        <div className={styles.info}>
          <div className={styles.buttons}>
            <Button url="mailto:maciek.lichon@gmail.com">Get in touch</Button>
            <Button url={`${process.env.PUBLIC_URL}/resume/MaciejLichonCV.pdf`} option="_blank">Get my resume</Button>
          </div>
          <div className={styles.about}>
            <div className={styles.text}>
              <p className={styles.about_me}>Nine months long web development bootcamp graduate with over three years of corporate experience in analytical roles.</p>
            </div>
            <div className={styles.links}>
              <a href="https://www.linkedin.com/in/maciej-lichon/" target="_blank">LinkedIn</a>
              <a href="https://github.com/MaciekLichon" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.scroll_container}>
        <p className={styles.scroll}>Scroll</p>
      </div>
    </div>
  );
};

export default Hero;
