import classes from './SelectedResearch.module.scss';
import InlineLink from '../ui/InlineLink' 

const SelectedResearch = (props) => {
  return (
    <div className={classes['selected-research']}>
      <h3>
        {`${props.research.title} - `}
        <InlineLink href={props.research.href}>{props.research.company}</InlineLink>
      </h3>
      <em>{props.research.date}</em>
      <ul>
        {props.research.bullets.map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
    </div>
  );
};

export default SelectedResearch;
