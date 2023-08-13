import InlineLink from '../ui/InlineLink';
import classes from './SelectedResearch.module.scss';

const SelectedResearch = (props) => {
  return (
    <div className={classes['selected-research']}>
      <h3>
        {`${props.research.title} - `}
        <InlineLink href={props.research.href}>{props.research.company}</InlineLink>
      </h3>
      <em>{props.research.date}</em>
      <ul>
        {props.research.bullets.map((bullet) => {
          return <li key={bullet}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
};

export default SelectedResearch;
