import { useState } from 'react';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import ShowOnScroll from '../ui/ShowOnScroll';
import SelectButton from './SelectButton';
import SelectedResearch from './SelectedResearch';
import classes from './Research.module.scss';
import RESEARCH from './ResearchData';

const TRANSITION_TIME = 300;

const Research = () => {
  const [selectedResearch, setSelectedResearch] = useState(RESEARCH[0]);
  const [selectedButtonId, setSelectedButtonId] = useState(RESEARCH[0].id);
  const [hideSelection, setHideSelection] = useState(false);
  const [animationTimeout, setAnimationTimeout] = useState(undefined);

  const onResearchSelected = (research) => {
    if (selectedResearch === research) {
      return;
    }
    clearTimeout(animationTimeout);
    setHideSelection(true);
    setSelectedButtonId(research.id);
    setAnimationTimeout(
      setTimeout(() => {
        clearTimeout(animationTimeout);
        setSelectedResearch(research);
        setHideSelection(false);
      }, TRANSITION_TIME)
    );
  };

  return (
    <ShowOnScroll>
      <div className={`layout ${classes.research}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="research" />
          <h2 className={`section-header ${classes.researchHeader}`}>
            Research Experience
          </h2>
          <div className={`border-highlight ${classes.container}`}>
            <div className={classes.select}>
              {RESEARCH.map((research) => {
                return (
                  <SelectButton
                    research={research}
                    selectedId={selectedButtonId}
                    onClick={onResearchSelected}
                    key={research.id}
                  />
                );
              })}
            </div>
            <div
              className={`${classes.info} ${hideSelection ? classes.hide : ''}`}
              style={{ transition: `opacity ease-in-out ${TRANSITION_TIME}ms` }}
            >
              <SelectedResearch research={selectedResearch} />
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default Research;
