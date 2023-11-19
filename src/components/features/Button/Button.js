import './Button.scss';

const Button = props => {
  return (
    <a className="button" href={props.url} target={props.option} rel="noreferrer noopener">
      {props.children}
    </a>
  );
};

export default Button;
