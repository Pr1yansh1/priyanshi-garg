import classes from './SelectButton.module.scss';

const SelectButton = (props) => {
  const onClick = () => {
    props.onClick(props.teaching);
  };

  return (
    <div
      onClick={onClick}
      key={props.teaching.id}
      className={`${classes['select-button']} ${
        props.teaching.id === props.selectedId ? classes.selected : ''
      }`}
    >
      {props.teaching.company}
    </div>
  );
};

export default SelectButton;
