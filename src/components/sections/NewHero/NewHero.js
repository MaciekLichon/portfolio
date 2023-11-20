import Button from '../../features/Button/Button';
import './NewHero.scss';

const NewHero = () => {
    return (
        <section className="hero">
            <div className="content">
                <div className="content__intro">
                    <h1 className="content__intro-title">Hi, <span>I am Maciek.</span></h1> 
                    <h2 className="content__intro-subtitle">Front-end developer</h2>
                </div>
                <div className="content__details">
                    <div className="content__details-buttons">
                        <Button url="mailto:maciek.lichon@gmail.com">Get in touch</Button>
                        <Button url={`${process.env.PUBLIC_URL}/resume/MaciejLichonCV.pdf`} option="_blank">Get my resume</Button>
                    </div>
                    <div className="content__details-text">
                        <div className="content__details-text__about">
                            <p>I specialize in <span>HTML, CSS, JavaScript, React and TypeScript,</span> crafting engaging user interfaces and web experiences that meet today's industry standards.</p>
                        </div>
                        <div className="content__details-text__links">
                            <a href="https://www.linkedin.com/in/maciej-lichon/" target="_blank" rel="noreferrer noopener" className="content__details-text__links-item">LinkedIn</a>
                            <a href="https://github.com/MaciekLichon" target="_blank" rel="noreferrer noopener" className="content__details-text__links-item">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll">
                <p className="scroll__text">scroll</p>
            </div>
        </section>
    );
};

export default NewHero;