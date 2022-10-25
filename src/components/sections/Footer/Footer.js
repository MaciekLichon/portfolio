import styles from './Footer.module.scss';

import Container from '../../features/Container/Container';

import Marquee from 'react-fast-marquee';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Marquee gradient={false} speed={80}>
          <a href="mailto:maciek.lichon@gmail.com" className={styles.message_container}>
            <h3 className={styles.footer_message}>Contact me</h3>
            <h3 className={styles.footer_message}>Contact me</h3>
            <h3 className={styles.footer_message}>Contact me</h3>
          </a>
        </Marquee>
        <div className={styles.media}>
          <a href="https://www.linkedin.com/in/maciej-lichon/" target="_blank">LinkedIn</a>
          <a href="https://github.com/MaciekLichon" target="_blank">GitHub</a>
          <a href="mailto:maciek.lichon@gmail.com">Email</a>
          <a href="">Resume</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
