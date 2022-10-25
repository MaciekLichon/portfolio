import styles from './Project.module.scss';

import clsx from 'clsx';
import { useRef, useEffect, useState } from 'react';

const Project = props => {

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const callbackFunc = (entries) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  }

  const options = {
    threshold: 1
  }

  useEffect(() => {

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(elementRef.current);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    }

  }, [elementRef]);


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
              <a href="" className={styles.action_button}>Try it out</a>
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
            <img
              alt={props.title}
              src={`${process.env.PUBLIC_URL}${props.mainImage}`}
            />
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
