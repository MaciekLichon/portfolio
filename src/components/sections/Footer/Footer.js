import './Footer.scss';

import Container from '../../features/Container/Container';
import Marquee from 'react-fast-marquee';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Marquee gradient={false} speed={80}>
          <a href="mailto:maciek.lichon@gmail.com" rel="noreferrer noopener" className="footer__marquee">
            <h3 className="footer__marquee-message">Contact me</h3>
            <h3 className="footer__marquee-message">Contact me</h3>
            <h3 className="footer__marquee-message">Contact me</h3>
          </a>
        </Marquee>
        <div className="footer__socials">
          <a className="footer__socials-link" href="https://www.linkedin.com/in/maciej-lichon/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          <a className="footer__socials-link" href="https://github.com/MaciekLichon" target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className="footer__socials-link" href="mailto:maciek.lichon@gmail.com" rel="noreferrer noopener">Email</a>
          <a className="footer__socials-link" href={`${process.env.PUBLIC_URL}/resume/MaciejLichonCV.pdf`} target="_blank" rel="noreferrer noopener">Resume</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
