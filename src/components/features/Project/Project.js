import styles from './Project.module.scss';

import clsx from 'clsx';
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
    <div key={props.id} className={styles.project_container}>
      <div className={clsx(styles.project_info, isVisible && styles.show)} ref={elementRef}>
        <div><h3 className={styles.title}>{props.title}</h3></div>
        <div><h4 className={styles.technologies}>{props.technologies}</h4></div>
        <div><p className={styles.description}>{props.description}</p></div>
        <div>
          <div className={styles.actions}>
            <div className={styles.action}>
              <span className={styles.arrow}></span>
              <a href={props.appLink} target="_blank" className={styles.action_button}>Try it out</a>
            </div>
            <div className={styles.action}>
              <span className={styles.arrow}></span>
              <a href={props.gitLink} target="_blank" className={styles.action_button}>Access code</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project_visuals}>
        <div className={styles.visuals_container}>
          <div className={styles.project_preview}>
            <a href={props.appLink} target="_blank">
              <img
                alt={props.title}
                src={`${process.env.PUBLIC_URL}${props.mainImage}`}
              />
            </a>
          </div>
          <div className={styles.foreground}>
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
