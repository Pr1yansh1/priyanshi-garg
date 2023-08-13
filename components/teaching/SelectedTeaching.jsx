import InlineLink from '../ui/InlineLink';
import classes from './SelectedTeaching.module.scss';

const SelectedTeaching = (props) => {
  return (
    <div className={classes['selected-teaching']}>
      <h3>
        {`${props.teaching.title} - `}
        <InlineLink href={props.teaching.href}>{props.teaching.company}</InlineLink>
      </h3>
      <em>{props.teaching.date}</em>
      <ul>
        {props.teaching.bullets.map((bullet) => {
          return <li key={bullet}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
};

export default SelectedTeaching;
