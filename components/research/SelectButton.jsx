import classes from './SelectButton.module.scss';

const SelectButton = (props) => {
  const onClick = () => {
    props.onClick(props.research);
  };

  return (
    <div
      onClick={onClick}
      key={props.research.id}
      className={`${classes['select-button']} ${
        props.research.id === props.selectedId ? classes.selected : ''
      }`}
    >
      {props.research.company}
    </div>
  );
};

export default SelectButton;
