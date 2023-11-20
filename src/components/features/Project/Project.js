import './Project.scss';
import { useRef, useEffect, useState } from 'react';

const Project = props => {

  const [isVisible, setIsVisible] = useState(); // value set based on intersecting status, used to toggle the 'show' class
  const elementRef = useRef(); // creates referecence to a given HTML element

  const options = {
    threshold: 1
  }

  useEffect(() => {
    // create the observer with custom options
    const observer = new IntersectionObserver((entries) => {
      // there's going to be one element targetted so index of 0 can be used safely
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);

      // observe until it appears only. As a result, the animation is going to run once (on show) and not repeat later
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    // tell the observer what to observe
    observer.observe(elementRef.current);
  }, []);



  return (
    <div className="project">
      <div className={`project__info ${isVisible ? 'show' : ''}`} ref={elementRef}>
        <h3 className="project__info-title">{props.title}</h3>
        <h4 className="project__info-technologies">{props.technologies}</h4>
        <p className="project__info-description">{props.description}</p>
        <div className="project__info-actions">
          <div className="project__info-action">
            <span className="project__info-action-arrow"></span>
            <a href={props.appLink} target="_blank" className="project__info-action-button" rel="noreferrer noopener">Try it out</a>
          </div>
          <div className="project__info-action">
            <span className="project__info-action-arrow"></span>
            <a href={props.gitLink} target="_blank" className="project__info-action-button" rel="noreferrer noopener">Access code</a>
          </div>
        </div>
      </div>
      <div className="project__visuals">
        <div className="project__visuals-container">
          <div className="project__visuals-preview">
            <a href={props.appLink} target="_blank" rel="noreferrer noopener">
              <img
                alt={props.title}
                src={`${process.env.PUBLIC_URL}${props.mainImage}`}
              />
            </a>
          </div>
          <div className="project__visuals-foreground">
            <img
              alt={props.title}
              src={`${process.env.PUBLIC_URL}${props.foregroundOne}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
