import InlineLink from '../ui/InlineLink';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a
        className={classes.built}
        href="https://github.com/Pr1yansh1/priyanshi-garg"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built by Priyanshi Garg 
      </a>
    </div>
  );
};

export default Footer;
