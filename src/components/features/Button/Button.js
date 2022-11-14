import styles from './Button.module.scss';

const Button = props => {
  return (
    <a className={styles.button} href={props.url} target={props.option}>
      {props.children}
    </a>
  );
};

export default Button;