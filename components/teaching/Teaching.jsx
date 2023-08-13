import { useState } from 'react';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import ShowOnScroll from '../ui/ShowOnScroll';
import SelectButton from './SelectButton';
import SelectedTeaching from './SelectedTeaching';
import classes from './Teaching.module.scss';
import TEACHING from './TeachingData';

const TRANSITION_TIME = 300;

const Teaching = () => {
  const [selectedTeaching, setSelectedTeaching] = useState(TEACHING[0]);
  const [selectedButtonId, setSelectedButtonId] = useState(TEACHING[0].id);
  const [hideSelection, setHideSelection] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState(undefined);

  const onTeachingSelected = (teaching) => {
    if (selectedTeaching === teaching) {
      return;
    }
    clearTimeout(animationTimeout);
    setHideSelection(true);
    setSelectedButtonId(teaching.id);
    setAnimationTimeout(
      setTimeout(() => {
        clearTimeout(animationTimeout);
        setSelectedTeaching(teaching);
        setHideSelection(false);
      }, TRANSITION_TIME)
    );
  };

  return (
    <ShowOnScroll>
      <div className={`layout ${classes.teaching}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="teaching" />
          <h2 className={`section-header ${classes.teachingHeader}`}>
            Teaching Experience
          </h2>
          <div className={`border-highlight ${classes.container}`}>
            <div className={classes.select}>
              {TEACHING.map((teaching) => {
                return (
                  <SelectButton
                    teaching={teaching}
                    selectedId={selectedButtonId}
                    onClick={onTeachingSelected}
                    key={teaching.id}
                  />
                );
              })}
            </div>
            <div
              className={`${classes.info} ${hideSelection ? classes.hide : ''}`}
              style={{ transition: `opacity ease-in-out ${TRANSITION_TIME}ms` }}
            >
              <SelectedTeaching teaching={selectedTeaching} />
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default Teaching;
